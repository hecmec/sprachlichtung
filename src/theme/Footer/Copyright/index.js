import React from 'react';
import Translate from '@docusaurus/Translate';

// Footer copyright in two parts: the copyright/version line comes from
// `themeConfig.footer.copyright` in docusaurus.config.ts (so the version stays
// in sync with package.json), the tagline is a translatable string (code.json).
export default function FooterCopyright({copyright}) {
  return (
    <div className="footer__copyright">
      <span
        // Developer provided the HTML, so assume it's safe.
        dangerouslySetInnerHTML={{__html: copyright}}
      />{' '}
      <Translate
        id="footer.copyright.tagline"
        description="Second part of the footer copyright line, after the copyright and version">
        Gebaut mit ❤️ und Docusaurus in Nantes, Berlin, Zürich mit der Hilfe der Gemeinschaft 🌏.
      </Translate>
    </div>
  );
}
