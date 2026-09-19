// Client-side editing of German docs via the GitHub REST API.
// There is no server: each editor stores a fine-grained personal access token
// (repo hecmec/sprachlichtung, Contents: read & write) in their own browser.

const REPO = 'hecmec/sprachlichtung';
const API = `https://api.github.com/repos/${REPO}/contents/`;
export const BRANCH = 'develop';

const TOKEN_KEY = 'githubEditToken';

export function getToken(): string | null {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setToken(token: string): void {
  try {
    localStorage.setItem(TOKEN_KEY, token);
  } catch {
    // Storage blocked (private mode etc.): the token lives only in page state.
  }
}

export function clearToken(): void {
  try {
    localStorage.removeItem(TOKEN_KEY);
  } catch {
    // ignore
  }
}

// Only German doc sources may be edited. The token itself is the real
// permission boundary; this just keeps the editor from touching anything else.
export function isEditablePath(path: string): boolean {
  return /^docs\/[\w\-\/.]+\.mdx?$/.test(path) && !path.includes('..');
}

// UTF-8-safe base64 (plain atob/btoa mangle umlauts)
function b64ToUtf8(b64: string): string {
  const bin = atob(b64.replace(/\n/g, ''));
  return new TextDecoder().decode(Uint8Array.from(bin, (c) => c.charCodeAt(0)));
}

function utf8ToB64(str: string): string {
  let bin = '';
  new TextEncoder().encode(str).forEach((b) => (bin += String.fromCharCode(b)));
  return btoa(bin);
}

function headers(token: string): HeadersInit {
  return {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };
}

function encodePath(path: string): string {
  return path.split('/').map(encodeURIComponent).join('/');
}

async function errorMessage(r: Response, action: string): Promise<string> {
  if (r.status === 401) return 'Token ungültig oder abgelaufen.';
  if (r.status === 403) return 'Token hat keine Schreibrechte für dieses Repository.';
  if (r.status === 404) return 'Datei nicht gefunden (oder Token ohne Zugriff auf das Repository).';
  if (r.status === 409)
    return 'Die Datei wurde inzwischen auf develop geändert. Bitte neu laden und die Korrektur erneut anwenden.';
  let detail = '';
  try {
    detail = (await r.json()).message ?? '';
  } catch {
    // ignore
  }
  return `${action} fehlgeschlagen (${r.status}) ${detail}`.trim();
}

export interface LoadedFile {
  text: string;
  sha: string;
}

export async function loadFile(path: string, token: string): Promise<LoadedFile> {
  const r = await fetch(`${API}${encodePath(path)}?ref=${BRANCH}`, {
    headers: headers(token),
    cache: 'no-store',
  });
  if (!r.ok) throw new Error(await errorMessage(r, 'Laden'));
  const j = await r.json();
  return {text: b64ToUtf8(j.content), sha: j.sha};
}

export interface SaveResult {
  sha: string;
  commitUrl: string;
}

export async function saveFile(
  path: string,
  token: string,
  text: string,
  sha: string,
  message: string,
): Promise<SaveResult> {
  const r = await fetch(`${API}${encodePath(path)}`, {
    method: 'PUT',
    headers: headers(token),
    body: JSON.stringify({message, content: utf8ToB64(text), sha, branch: BRANCH}),
  });
  if (!r.ok) throw new Error(await errorMessage(r, 'Speichern'));
  const j = await r.json();
  return {sha: j.content.sha, commitUrl: j.commit.html_url};
}
