import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'SprachLichtung',
  tagline: 'La clairière du langage',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mental-web', // Usually your GitHub org/user name.
  projectName: 'sprachlichtung', // Usually your repo name.

  onBrokenLinks: 'ignore', //'throw',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    // locales: ['de','en','fr'],
    locales: ['de','en'],
    localeConfigs: {
      de: {
        label: 'Deutsch',
        htmlLang: 'de-DE',
        // path: 'de',
      },
      en: {
        label: 'English',
      },
      // fr: {
      //   label: 'Français',
      //   htmlLang: 'fr-FR',
      // },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          exclude: [
            '**/_*/**', // Exclude folders that start with underscore
            '**/_*', // Exclude files that start with underscore
          ],    

          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/hecmec/sprachlichtung/blob/main',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/hecmec/sprachlichtung/blob/main',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'SprachLichtung',
      logo: {
        alt: 'sprachlichtung Logo',
        src: 'img/kompass.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'kritDenkenSidebar',
          position: 'left',
          label: 'Kritisches Denken',
          
        },
        {
          type: 'docSidebar',
          sidebarId: 'umweltSidebar',
          position: 'left',
          label: 'UmWelten',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
          
        // },
        {
          href: 'https://en.sprachlichtung.org',
          label: 'EN',
          position: 'right',
        }
        // {
        //   href: 'https://github.com/hecmec/sprachlichtung',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    docs: {
      sidebar: {
        // this allows the user to collapse the sidebar
        hideable: true,
        autoCollapseCategories: true,
      },
    },    
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tutorial',
          items: [
            {
              label: 'Kritisches Denken',
              to: '/docs/kritisches_denken/kritisches_denken_kurzgesagt',
            },
          ],
        },
        {
          title: 'Themen',
          items: [
            {
              label: 'Sprachspiele',
              href: '/docs/category/sprachspiele-',              
            },
            {
              label: 'Gesellschaftsspiele',
              href: '/docs/category/gesellschaftsspiele-'
            },
            {
              label: 'Umwelten',
              href: '/docs/category/umwelt-'
            },
            {
              label: 'Energie',
              href: '/docs/category/energie-und-ressourcen-'
            },
            {
              label: 'Quellen',
              href: '/docs/category/quellen-und-medien-'
            },
            {
              label: 'Humor',
              href: '/docs/category/humor-und-satire-',
            },

          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/hecmec/sprachlichtung',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SprachLichtung. Built with ❤️ and Docusaurus in Nantes, Berlin, Zürich with the help of the community 🌏.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'forest'},
    },
  } satisfies Preset.ThemeConfig,

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
};

export default config;
