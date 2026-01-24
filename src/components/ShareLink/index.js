import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/**
 * Probably one of the handiest features is the ability to access the content of your docusaurus.config.js 
 * through the context React hook. Here's a small component that builds a social media sharable link 
 * using information from the config file (this same link produces the sharable paragraph at the bottom of our articles).
 * https://tweak-extension.com/blog/app-docusaurus-react#use-site-context-hook
 * @param {*} param0 
 * @returns 
 */

export default function ShareHint({ postPath, postTitle }) {
  const { siteConfig } = useDocusaurusContext();

  if (!postPath || !postTitle) {
    return null;
  }

  const fullUrl = `${siteConfig.url}${postPath}`;
  const url = `https://twitter.com/share?text=${postTitle}&url=${fullUrl}`;

  return (
    <p
      sx={{
        mt: 3,
        fontSize: [1, 1, 2],
      }}
    >
      If you liked this article, consider sharing (
      <Link href={url} rel="noreferrer" target="_blank" title="tweeting">
        <span style={{ textDecoration: "underline" }}>tweeting</span>
      </Link>
      ) it to your followers.
    </p>
  );
}