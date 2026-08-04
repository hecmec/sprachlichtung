import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export type VideoCardItem = {
  /** Card headline, e.g. the original video title. */
  title: string;
  /**
   * Where the card links to. Either a sibling doc of the current page (the file
   * name, with or without `./` and `.md`), a site-absolute path, or an external
   * URL. Without it the card links to the video on YouTube.
   */
  href?: string;
  /** Video id; supplies the thumbnail and the YouTube fallback link. */
  youtubeId?: string;
  /** Thumbnail overriding the one derived from `youtubeId`. */
  image?: string;
  /** Running time as shown, e.g. `1:15:49`. */
  duration?: string;
};

const EXTERNAL = /^([a-z]+:)?\/\//i;

/**
 * Resolve a card link against the current page.
 *
 * Relative doc links only work in Markdown, where Docusaurus rewrites them at
 * build time. Inside a JSX prop nothing rewrites them, so we join the file name
 * onto the current pathname ourselves: the pages listed here are siblings of the
 * category index page the grid sits on, and the pathname already carries base
 * url and locale prefix.
 */
function resolveHref(href: string, pathname: string): string {
  if (EXTERNAL.test(href) || href.startsWith('/')) {
    return href;
  }
  const name = href.replace(/^\.\//, '').replace(/\.mdx?$/, '');
  return `${pathname.replace(/\/$/, '')}/${name}`;
}

function VideoCard({item}: {item: VideoCardItem}): ReactNode {
  const {pathname} = useLocation();
  const image =
    item.image ??
    (item.youtubeId
      ? `https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`
      : '');
  // Hooks must run unconditionally; pick the right src afterwards.
  const based = useBaseUrl(image);
  const src = EXTERNAL.test(image) ? image : based;
  const to = item.href
    ? resolveHref(item.href, pathname)
    : `https://www.youtube.com/watch?v=${item.youtubeId}`;

  return (
    <Link href={to} className={styles.card}>
      <div className={styles.imageWrap}>
        {src ? (
          <img className={styles.image} src={src} alt="" aria-hidden="true" />
        ) : null}
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{item.title}</h3>
        {item.duration ? (
          <span className={styles.duration}>
            <svg
              className={styles.durationIcon}
              viewBox="0 0 16 16"
              width="12"
              height="12"
              aria-hidden="true">
              <path fill="currentColor" d="M4 2.5v11l9-5.5-9-5.5Z" />
            </svg>
            {item.duration}
          </span>
        ) : null}
      </div>
    </Link>
  );
}

/**
 * Grid of video cards (thumbnail left, title and running time right), one card
 * per entry of `videos`. Cards are at most 400px wide and the grid fits as many
 * per row as the content column allows.
 *
 * Built for course index pages that used to carry a thumbnail/title/length
 * table. Card styling follows `<CategoryIndexList/>`, but the entries come from
 * props rather than from the sidebar, so the same list can be shared across
 * locales.
 */
export default function VideoCardGrid({
  videos,
}: {
  videos: VideoCardItem[];
}): ReactNode {
  return (
    <div className={styles.grid}>
      {videos.map((item, i) => (
        <VideoCard key={item.youtubeId ?? i} item={item} />
      ))}
    </div>
  );
}
