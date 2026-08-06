import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {usePluginData} from '@docusaurus/useGlobalData';
import {
  useCurrentSidebarCategory,
  useDocById,
} from '@docusaurus/plugin-content-docs/client';
import type {PropSidebarItem} from '@docusaurus/plugin-content-docs';
import styles from './styles.module.css';

type ImageInfo = {image: string; external?: boolean};
type CardImagesData = {
  defaultImage: string;
  byId: Record<string, ImageInfo>;
  byPermalink: Record<string, ImageInfo>;
};

function CardImage({info, alt}: {info?: ImageInfo; alt: string}): ReactNode {
  // Hooks must run unconditionally; pick the right src afterwards.
  const raw = info?.image ?? '';
  const based = useBaseUrl(raw);
  const src = info?.external ? raw : based;
  return <img className={styles.image} src={src} alt="" aria-hidden="true" />;
}

function CardRow({item}: {item: PropSidebarItem}): ReactNode {
  const data = usePluginData('docs-card-images') as CardImagesData | undefined;

  if (item.type !== 'link') {
    return null;
  }
  const docId = item.docId;
  const doc = useDocById(docId ?? undefined);
  const title = item.label;
  const description = item.description ?? doc?.description ?? '';
  const info =
    (docId && data?.byId?.[docId]) ||
    data?.byPermalink?.[item.href] ||
    (data ? {image: data.defaultImage} : undefined);

  return (
    <Link href={item.href} className={styles.card}>
      <div className={styles.imageWrap}>
        <CardImage info={info} alt={title} />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        {description ? <p className={styles.description}>{description}</p> : null}
      </div>
    </Link>
  );
}

/**
 * Full-width list of rounded cards (image left, title + description right), one
 * card per page in the current sidebar category. Use it on a category index page
 * (an `index.mdx`) as an alternative to the default `generated-index`.
 *
 * From 1000px of available width the cards are laid out two per row. That is
 * measured on the list itself, not on the viewport, so a collapsed sidebar or a
 * narrower content column changes the layout as you would expect. The wrapper
 * exists only to carry the containment context, since a container query cannot
 * style its own container.
 */
export default function CategoryIndexList(): ReactNode {
  const category = useCurrentSidebarCategory();
  return (
    <div className={styles.container}>
      <section className={styles.list}>
        {category.items.map((item, i) => (
          <CardRow key={i} item={item} />
        ))}
      </section>
    </div>
  );
}
