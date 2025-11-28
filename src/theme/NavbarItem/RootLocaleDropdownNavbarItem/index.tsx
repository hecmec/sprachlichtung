import React from 'react';
import type {Props} from '@theme/NavbarItem/LocaleDropdownNavbarItem';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Ejected override: make locale dropdown always navigate to locale homepage
// Instead of staying on the same page, each locale item points to its root.

export default function LocaleDropdownNavbarItem(props: Props) {
  const {siteConfig} = useDocusaurusContext();
  const baseUrl = siteConfig.baseUrl || '/';
  const i18n = siteConfig.i18n;
  const defaultLocale = i18n?.defaultLocale;
  const locales: string[] = i18n?.locales ?? [];

  function getLabel(locale: string): string {
    const label = i18n?.localeConfigs?.[locale]?.label;
    return label ?? locale;
  }

  function getCleanedBaseUrl(url: string): string {
    let cleanedPrefix = url;
    if(url.endsWith('en/')) {
      cleanedPrefix = url.replace(/en\/$/,'');
    } else if (url.endsWith('fr/')) {
      cleanedPrefix = url.replace(/fr\/$/,'');
    }
    cleanedPrefix = cleanedPrefix.endsWith('/') ? cleanedPrefix : `${cleanedPrefix}/`;
    return cleanedPrefix;
  }

  function getLocaleBaseUrl(locale: string): string {
    console.debug('getLocaleBaseUrl', {locale, defaultLocale, baseUrl});
    // const customBase = i18n?.localeConfigs?.[locale]?.baseUrl;
    // if (customBase) return customBase.endsWith('/') ? customBase : `${customBase}/`;
    const cleanedPrefix = getCleanedBaseUrl(baseUrl);
    let url = cleanedPrefix
    if (locale !== defaultLocale) {      
      url = `${cleanedPrefix}${locale}/`;
    }
    console.debug('getLocaleBaseUrl after', {locale, defaultLocale, baseUrl,url});
    return url;
  }

  const items = locales.map((locale) => ({
    label: getLabel(locale),
    to: getLocaleBaseUrl(locale),
  }));

  // Preserve position and other props from config if present
  const {position = 'right'} = props as any;

  return (
    <DropdownNavbarItem
      label={props.label ?? 'Language'}
      items={items}
      className={props.className}
      position={position}
    />
  );
}
