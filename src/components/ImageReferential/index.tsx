import React, {type ReactNode, useMemo, useState} from 'react';
import {usePluginData} from '@docusaurus/useGlobalData';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

type ImageItem = {
  /** Value copied to the clipboard and pasted into markdown. */
  link: string;
  /** Resolved URL used for the <img> preview. */
  src: string;
  /** File name, shown as the tile caption. */
  name: string;
};

type ImageGroup = {
  /** Folder heading, e.g. "/img/kd" or "docs/_tutorial/img". */
  folder: string;
  images: ImageItem[];
};

type Size = 's200' | 's400' | 'full';

const SIZE_LABELS: Record<Size, string> = {
  s200: 'Small (200px)',
  s400: 'Medium (400px)',
  full: 'Full width',
};

function basename(p: string): string {
  const i = p.lastIndexOf('/');
  return i === -1 ? p : p.slice(i + 1);
}

function dirname(p: string): string {
  const i = p.lastIndexOf('/');
  return i === -1 ? '' : p.slice(0, i);
}

/**
 * Images that physically live inside the `docs/` tree (referenced relatively).
 * webpack must emit these, so we glob them with require.context and read the
 * emitted URL. SVGs are excluded on purpose: Docusaurus turns imported SVGs
 * into React components (via SVGR), which cannot be used as an <img src>.
 */
function useDocsImages(): ImageItem[] {
  return useMemo(() => {
    const items: ImageItem[] = [];
    try {
      // @ts-expect-error require.context is a webpack-only API
      const ctx = require.context(
        '@site/docs',
        true,
        /\.(png|jpe?g|gif|webp|avif)$/i,
      );
      for (const key of ctx.keys()) {
        const rel = key.replace(/^\.\//, ''); // e.g. "_tutorial/img/x.png"
        const mod = ctx(key);
        const src: string =
          mod && typeof mod === 'object' && 'default' in mod ? mod.default : mod;
        items.push({
          link: 'docs/' + rel,
          src,
          name: basename(rel),
        });
      }
    } catch (e) {
      // No docs images or context unavailable — ignore.
    }
    items.sort((a, b) => a.link.localeCompare(b.link));
    return items;
  }, []);
}

function CopyButton({value}: {value: string}): ReactNode {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      // Clipboard blocked (e.g. insecure context) — fall back to selection.
      window.prompt('Copy the image link:', value);
    }
  };
  return (
    <button
      type="button"
      className={styles.copyBtn}
      onClick={onCopy}
      title="Copy link to clipboard"
    >
      {copied ? '✓ Copied' : 'Copy'}
    </button>
  );
}

function Tile({item}: {item: ImageItem}): ReactNode {
  return (
    <figure className={styles.tile}>
      <div className={styles.thumbWrap}>
        <img className={styles.thumb} src={item.src} alt={item.name} loading="lazy" />
      </div>
      <figcaption className={styles.caption}>
        <code className={styles.link} title={item.link}>
          {item.link}
        </code>
        <CopyButton value={item.link} />
      </figcaption>
    </figure>
  );
}

/**
 * Admin catalog of all reusable images. Renders every image under
 * `/static/img` (from the `image-referential` plugin) plus any images living
 * inside the `docs/` tree, grouped by folder, with a size switch and a
 * per-image copy-to-clipboard link.
 */
export default function ImageReferential(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const baseUrl = siteConfig.baseUrl || '/';
  const data = usePluginData('image-referential') as
    | {images?: string[]}
    | undefined;
  const docsImages = useDocsImages();

  const [size, setSize] = useState<Size>('s400');
  const [filter, setFilter] = useState('');

  const groups: ImageGroup[] = useMemo(() => {
    const staticItems: ImageItem[] = (data?.images ?? []).map((link) => ({
      link,
      // baseUrl-aware src; link stays root-relative (what markdown pastes).
      src: baseUrl.replace(/\/$/, '') + link,
      name: basename(link),
    }));

    const all = [...staticItems, ...docsImages];
    const q = filter.trim().toLowerCase();
    const filtered = q
      ? all.filter((it) => it.link.toLowerCase().includes(q))
      : all;

    const byFolder = new Map<string, ImageItem[]>();
    for (const it of filtered) {
      const folder = dirname(it.link) || '(root)';
      const arr = byFolder.get(folder);
      if (arr) arr.push(it);
      else byFolder.set(folder, [it]);
    }
    return [...byFolder.entries()]
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([folder, images]) => ({folder, images}));
  }, [data, docsImages, baseUrl, filter]);

  const total = groups.reduce((n, g) => n + g.images.length, 0);

  return (
    <div className={styles.root}>
      <div className={styles.toolbar}>
        <input
          type="search"
          className={styles.search}
          placeholder="Filter by path…"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          aria-label="Filter images by path"
        />
        <div className={styles.sizeSwitch} role="group" aria-label="Preview size">
          {(Object.keys(SIZE_LABELS) as Size[]).map((s) => (
            <button
              key={s}
              type="button"
              className={
                s === size ? `${styles.sizeBtn} ${styles.sizeBtnActive}` : styles.sizeBtn
              }
              onClick={() => setSize(s)}
              aria-pressed={s === size}
            >
              {SIZE_LABELS[s]}
            </button>
          ))}
        </div>
        <span className={styles.count}>{total} images</span>
      </div>

      {groups.map((group) => (
        <section key={group.folder} className={styles.group}>
          <h3 className={styles.groupTitle}>
            <code>{group.folder}</code>
            <span className={styles.groupCount}>{group.images.length}</span>
          </h3>
          <div className={`${styles.grid} ${styles[size]}`}>
            {group.images.map((item) => (
              <Tile key={item.link} item={item} />
            ))}
          </div>
        </section>
      ))}

      {total === 0 ? <p className={styles.empty}>No images match the filter.</p> : null}
    </div>
  );
}
