import React from 'react';
import {structuredPatch, diffWordsWithSpace} from 'diff';
import styles from './styles.module.css';

// Unified line diff with 3 lines of context. Paragraphs are usually a single
// long line in markdown, so replaced lines are additionally highlighted word by
// word; otherwise a one-letter fix would show as two identical-looking lines.

type Row =
  | {kind: 'context'; text: string}
  | {kind: 'removed' | 'added'; text: string; words?: React.ReactNode};

function wordHighlight(oldLine: string, newLine: string): [React.ReactNode, React.ReactNode] {
  const parts = diffWordsWithSpace(oldLine, newLine);
  const oldNodes = parts
    .filter((p) => !p.added)
    .map((p, i) => (p.removed ? <del key={i}>{p.value}</del> : <span key={i}>{p.value}</span>));
  const newNodes = parts
    .filter((p) => !p.removed)
    .map((p, i) => (p.added ? <ins key={i}>{p.value}</ins> : <span key={i}>{p.value}</span>));
  return [oldNodes, newNodes];
}

function hunkRows(lines: string[]): Row[] {
  const rows: Row[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith('\\')) {
      i++; // "\ No newline at end of file"
      continue;
    }
    if (line.startsWith(' ')) {
      rows.push({kind: 'context', text: line.slice(1)});
      i++;
      continue;
    }
    // Collect a block of removals followed by additions.
    const removed: string[] = [];
    const added: string[] = [];
    while (i < lines.length && (lines[i].startsWith('-') || lines[i].startsWith('\\'))) {
      if (lines[i].startsWith('-')) removed.push(lines[i].slice(1));
      i++;
    }
    while (i < lines.length && (lines[i].startsWith('+') || lines[i].startsWith('\\'))) {
      if (lines[i].startsWith('+')) added.push(lines[i].slice(1));
      i++;
    }
    if (removed.length === added.length) {
      const pairs = removed.map((r, k) => wordHighlight(r, added[k]));
      removed.forEach((text, k) => rows.push({kind: 'removed', text, words: pairs[k][0]}));
      added.forEach((text, k) => rows.push({kind: 'added', text, words: pairs[k][1]}));
    } else {
      removed.forEach((text) => rows.push({kind: 'removed', text}));
      added.forEach((text) => rows.push({kind: 'added', text}));
    }
  }
  return rows;
}

export default function DiffView({oldText, newText}: {oldText: string; newText: string}) {
  const patch = structuredPatch('', '', oldText, newText, '', '', {context: 3});
  if (patch.hunks.length === 0) {
    return <p className={styles.empty}>Keine Änderungen.</p>;
  }
  return (
    <div className={styles.diff}>
      {patch.hunks.map((hunk, h) => (
        <div key={h} className={styles.hunk}>
          <div className={styles.hunkHeader}>
            Zeile {hunk.oldStart}–{hunk.oldStart + Math.max(hunk.oldLines - 1, 0)}
          </div>
          {hunkRows(hunk.lines).map((row, r) => (
            <div key={r} className={`${styles.row} ${styles[row.kind]}`}>
              <span className={styles.sign}>
                {row.kind === 'added' ? '+' : row.kind === 'removed' ? '−' : ' '}
              </span>
              <span className={styles.text}>
                {row.kind !== 'context' && row.words ? row.words : row.text || ' '}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
