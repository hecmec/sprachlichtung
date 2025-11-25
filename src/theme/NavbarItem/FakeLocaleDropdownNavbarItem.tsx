import React, {useState, useEffect, useRef, JSX} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import type {Props} from '@theme/NavbarItem/LocaleDropdownNavbarItem';

// Minimal custom dropdown; adapt styling as needed.
export default function FakeLocaleDropdownNavbarItem(props: Props): JSX.Element {
  console.log(`LocaleDropdownNavbarItem: rendered ${JSON.stringify(props)}`);

  const {
    i18n: {currentLocale, locales, localeConfigs},
    siteConfig: {baseUrl},
  } = useDocusaurusContext();
  const isBrowser = useIsBrowser();
  const mobileSidebar = useNavbarMobileSidebar();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  // Close when clicking outside
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const getLocaleRoot = (locale: string) => {
    // Use configured path if present, ensure trailing slash
    const cfg = localeConfigs[locale];
    const segment = cfg?.path ?? locale;
    // Avoid duplicating slashes
    const url =
      (baseUrl.endsWith('/') ? baseUrl : baseUrl + '/') +
      segment.replace(/^\/|\/$/g, '') +
      '/';
    return url;
  };

  const changeLocale = (locale: string) => {
    try {
      localStorage.setItem('docusaurus_locale', locale);
    } catch {}
    window.location.assign(getLocaleRoot(locale));
  };

  // (Old dedicated click handler removed; inlined on the button.)

  if (!isBrowser) {
    return null;
  }

  return (
    <div
      ref={rootRef}
      className={clsx('navbar__item', 'dropdown', {'dropdown--show': open})}
    >
      <button
        type="button"
        className="navbar__link"
        onClick={() => {
          console.log('LocaleDropdownNavbarItem: button clicked');
          setOpen((prev) => !prev);
        }}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {localeConfigs[currentLocale]?.label ?? currentLocale}
      </button>
      <ul className="dropdown__menu">
        {locales.map((locale) => {
          const active = locale === currentLocale;
          return (
            <li key={locale}>
              <button
                type="button"
                className={clsx('dropdown__link', {active})}
                onClick={() => {
                  setOpen(false);
                  mobileSidebar?.toggle?.(); // Close mobile menu if open
                  if (!active) changeLocale(locale);
                }}
              >
                {localeConfigs[locale]?.label ?? locale}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
