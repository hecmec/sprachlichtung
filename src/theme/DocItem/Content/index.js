import React, {useEffect, useState} from 'react';
import Content from '@theme-original/DocItem/Content';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Admonition from '@theme/Admonition';
import Link from '@docusaurus/Link';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import {getToken, isEditablePath} from '@site/src/lib/githubEdit';

// Machine-translation notice, keyed by locale. The German source pages
// (default locale) intentionally have no entry, so no banner is shown there.
const NOTICES = {
  en: {
    text: 'This page was translated from the German original, partly by machine. Some passages may read awkwardly or contain inaccuracies. When in doubt, please read the original.',
    dismiss: 'Dismiss',
  },
  fr: {
    text: "Cette page a été traduite de l'original allemand, en partie par une machine. Certaines formulations peuvent être maladroites ou inexactes. En cas de doute, veuillez consulter l'original.",
    dismiss: 'Masquer',
  },
};

const STORAGE_KEY = 'machineTranslationNoticeDismissed';

export default function ContentWrapper(props) {
  const {i18n} = useDocusaurusContext();
  const notice = NOTICES[i18n.currentLocale];
  const [dismissed, setDismissed] = useState(false);
  const {metadata} = useDoc();
  // Only editors who stored a GitHub token (on /edit) see the link, and only
  // on German source pages.
  const [canEdit, setCanEdit] = useState(false);
  const sourcePath = metadata.source.replace(/^@site\//, '');
  const isGermanDoc = i18n.currentLocale === i18n.defaultLocale && isEditablePath(sourcePath);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === 'true') {
      setDismissed(true);
    }
    setCanEdit(Boolean(getToken()));
  }, []);

  const handleDismiss = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setDismissed(true);
  };

  return (
    <>
      {isGermanDoc && canEdit && (
        <div style={{textAlign: 'right'}}>
          <Link
            className="button button--sm button--outline button--primary"
            to={`/edit?path=${encodeURIComponent(sourcePath)}&from=${encodeURIComponent(metadata.permalink)}`}>
            Korrigieren
          </Link>
        </div>
      )}
      {notice && !dismissed && (
        <Admonition type="note">
          <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
            <span style={{flex: 1}}>{notice.text}</span>
            <button
              type="button"
              className="button button--sm button--secondary"
              onClick={handleDismiss}>
              {notice.dismiss}
            </button>
          </div>
        </Admonition>
      )}
      <Content {...props} />
    </>
  );
}
