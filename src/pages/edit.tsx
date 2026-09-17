import React, {useCallback, useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import Admonition from '@theme/Admonition';
import DiffView from '@site/src/components/DiffView';
import {
  BRANCH,
  clearToken,
  getToken,
  isEditablePath,
  loadFile,
  saveFile,
  setToken as storeToken,
} from '@site/src/lib/githubEdit';

const TOKEN_HELP_URL =
  'https://github.com/settings/personal-access-tokens/new';

function TokenForm({onSave}: {onSave: (token: string) => void}) {
  const [value, setValue] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (value.trim()) onSave(value.trim());
      }}>
      <p>
        Zum Korrigieren wird ein GitHub-Token benötigt. Lege unter{' '}
        <Link to={TOKEN_HELP_URL}>GitHub → Fine-grained tokens</Link> ein Token an:
        Repository <code>hecmec/sprachlichtung</code>, Berechtigung{' '}
        <em>Contents: Read and write</em>, mit Ablaufdatum. Das Token wird nur in
        diesem Browser gespeichert und nur an <code>api.github.com</code> gesendet.
      </p>
      <div style={{display: 'flex', gap: '0.5rem'}}>
        <input
          type="password"
          autoComplete="off"
          placeholder="github_pat_…"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{flex: 1, padding: '0.4rem'}}
        />
        <button type="submit" className="button button--primary">
          Speichern
        </button>
      </div>
    </form>
  );
}

function Editor() {
  const params = new URLSearchParams(window.location.search);
  const path = params.get('path') ?? '';
  // Only same-site paths, so the link can't be abused as an open redirect.
  const fromParam = params.get('from');
  const from = fromParam && /^\/(?!\/)/.test(fromParam) ? fromParam : null;

  const [token, setToken] = useState<string | null>(() => getToken());
  const [original, setOriginal] = useState<string | null>(null);
  const [sha, setSha] = useState('');
  const [text, setText] = useState('');
  const [mode, setMode] = useState<'edit' | 'review'>('edit');
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [commitUrl, setCommitUrl] = useState<string | null>(null);

  const fileName = path.split('/').pop() ?? path;
  const dirty = original !== null && text !== original;

  const load = useCallback(async () => {
    if (!token || !isEditablePath(path)) return;
    setBusy(true);
    setError(null);
    try {
      const file = await loadFile(path, token);
      setOriginal(file.text);
      setText(file.text);
      setSha(file.sha);
      setMode('edit');
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }, [path, token]);

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [dirty]);

  const save = async () => {
    if (!token || original === null) return;
    setBusy(true);
    setError(null);
    try {
      const result = await saveFile(
        path,
        token,
        text,
        sha,
        message.trim() || `Docs: correct ${fileName}`,
      );
      setSha(result.sha);
      setOriginal(text);
      setCommitUrl(result.commitUrl);
      setMessage('');
      setMode('edit');
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  if (!token) {
    return (
      <TokenForm
        onSave={(t) => {
          storeToken(t);
          setToken(t);
        }}
      />
    );
  }

  const logout = (
    <button
      type="button"
      className="button button--sm button--link"
      onClick={() => {
        clearToken();
        setToken(null);
      }}>
      Token aus diesem Browser entfernen
    </button>
  );

  if (!path) {
    return (
      <>
        <p>
          Token ist gespeichert. Auf jeder deutschen Doku-Seite erscheint jetzt oben
          der Link <strong>Korrigieren</strong>.
        </p>
        {logout}
      </>
    );
  }

  if (!isEditablePath(path)) {
    return (
      <Admonition type="danger">
        Nur deutsche Doku-Seiten unter <code>docs/</code> können bearbeitet werden.
      </Admonition>
    );
  }

  return (
    <>
      <p>
        <code>{path}</code> auf Branch <code>{BRANCH}</code>
        {from && (
          <>
            {' · '}
            <a href={from}>zurück zur Seite</a>
          </>
        )}
      </p>

      {error && <Admonition type="danger">{error}</Admonition>}
      {commitUrl && !dirty && (
        <Admonition type="success">
          Gespeichert: <Link to={commitUrl}>Commit ansehen</Link>. Die Seite ändert
          sich erst nach dem nächsten Deploy.
        </Admonition>
      )}

      {original === null ? (
        <p>{busy ? 'Lade …' : ''}</p>
      ) : mode === 'edit' ? (
        <>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            spellCheck
            lang="de"
            style={{
              width: '100%',
              minHeight: '65vh',
              fontFamily: 'var(--ifm-font-family-monospace)',
              fontSize: '0.9rem',
              padding: '0.75rem',
              background: 'var(--ifm-background-surface-color)',
              color: 'var(--ifm-font-color-base)',
              border: '1px solid var(--ifm-color-emphasis-300)',
              borderRadius: 'var(--ifm-global-radius)',
            }}
          />
          <div style={{display: 'flex', gap: '0.5rem', marginTop: '0.75rem', flexWrap: 'wrap'}}>
            <button
              type="button"
              className="button button--primary"
              disabled={!dirty}
              onClick={() => setMode('review')}>
              Änderungen prüfen
            </button>
            <button
              type="button"
              className="button button--secondary"
              disabled={!dirty}
              onClick={() => setText(original)}>
              Verwerfen
            </button>
            <button type="button" className="button button--secondary" disabled={busy} onClick={load}>
              Neu laden
            </button>
          </div>
        </>
      ) : (
        <>
          <DiffView oldText={original} newText={text} />
          <label style={{display: 'block', marginTop: '1rem'}}>
            Commit-Nachricht
            <input
              type="text"
              value={message}
              placeholder={`Docs: correct ${fileName}`}
              onChange={(e) => setMessage(e.target.value)}
              style={{display: 'block', width: '100%', padding: '0.4rem', marginTop: '0.25rem'}}
            />
          </label>
          <div style={{display: 'flex', gap: '0.5rem', marginTop: '0.75rem', flexWrap: 'wrap'}}>
            <button type="button" className="button button--primary" disabled={busy} onClick={save}>
              {busy ? 'Speichere …' : `Auf ${BRANCH} committen`}
            </button>
            <button type="button" className="button button--secondary" disabled={busy} onClick={() => setMode('edit')}>
              Weiter bearbeiten
            </button>
          </div>
        </>
      )}

      <div style={{marginTop: '2rem'}}>{logout}</div>
    </>
  );
}

export default function EditPage() {
  return (
    <Layout title="Seite korrigieren" noFooter>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main className="container margin-vert--lg">
        <h1>Seite korrigieren</h1>
        <BrowserOnly>{() => <Editor />}</BrowserOnly>
      </main>
    </Layout>
  );
}
