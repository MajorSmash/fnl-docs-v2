import sitemap from '@astrojs/sitemap';
import { createMarkdownProcessor, unified } from '@astrojs/markdown-remark';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import { readFile } from 'node:fs/promises';

import { manualSidebarFromHeadings } from './src/lib/manual-navigation.mjs';
import rehypeDocumentEnhancements from './src/plugins/rehype-document-enhancements.mjs';
import remarkDocumentHeadings from './src/plugins/remark-document-headings.mjs';

function normalizeBase(value) {
  const trimmed = String(value || '').trim().replace(/^\/+|\/+$/g, '');
  return trimmed ? `/${trimmed}` : '';
}

const base = normalizeBase(process.env.BASE_PATH ?? '/fnl-docs-v2');
const site = process.env.SITE_URL ?? 'https://example.invalid';
const ogImage = new URL(`${base || ''}/og.png`, site).href;
const manualSource = await readFile(new URL('../manual/ninjalive2_manual.md', import.meta.url), 'utf8');
const manualRenderer = await createMarkdownProcessor({
  remarkPlugins: [remarkDocumentHeadings],
});
const manualHeadings = (await manualRenderer.render(manualSource)).metadata.headings;
const manualSidebar = manualSidebarFromHeadings(manualHeadings);

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  redirects: {
    '/': `${base}/manual/ninjalive2-manual/`,
  },
  integrations: [
    sitemap(),
    starlight({
      title: 'FluidNinja LIVE 2 Docs',
      logo: {
        src: './src/assets/fluidninja-live-2-logo.png',
        alt: 'FluidNinja LIVE 2',
        replacesTitle: true,
      },
      favicon: '/favicon.png',
      description:
        'Canonical FluidNinja LIVE 2 manual, parameter references, release notes, set topics, and approved support answers.',
      pagefind: true,
      credits: true,
      // The WP-5D left sidebar already provides chapter/subsection fragment
      // navigation; the right "On this page" ToC duplicated it (Conductor
      // call, 2026-07-18).
      tableOfContents: false,
      customCss: ['./src/styles/custom.css'],
      components: {
        PageTitle: './src/components/PageTitle.astro',
        Pagination: './src/components/Pagination.astro',
        Sidebar: './src/components/Sidebar.astro',
        ThemeProvider: './src/components/ThemeProvider.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
      head: [
        { tag: 'meta', attrs: { name: 'color-scheme', content: 'dark' } },
        { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
        { tag: 'meta', attrs: { property: 'og:image', content: ogImage } },
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
        { tag: 'meta', attrs: { name: 'twitter:image', content: ogImage } },
      ],
      social: [
        {
          icon: 'discord',
          label: 'FluidNinja community on Discord',
          href: 'https://discord.gg/rgEtwua2tu',
        },
      ],
      markdown: {
        processedDirs: [
          '../manual/',
          '../descriptors/',
          '../set-topics/',
          '../support/',
          '../releases/',
          './src/content/docs/',
        ],
      },
      sidebar: [
        ...manualSidebar,
        {
          label: 'Parameters',
          collapsed: true,
          items: [
            { slug: 'parameters/index' },
            { slug: 'descriptors/ninjalive2-params' },
            { slug: 'descriptors/ninjalive2-content' },
          ],
        },
        {
          label: 'Set Topics',
          collapsed: true,
          items: [
            { slug: 'set-topics/index' },
            { autogenerate: { directory: 'set-topics', collapsed: true } },
          ],
        },
        {
          label: 'Q&A / Support',
          collapsed: true,
          items: [
            { slug: 'support/index' },
            { autogenerate: { directory: 'support', collapsed: true } },
          ],
        },
        {
          label: 'Releases',
          collapsed: true,
          items: [
            { slug: 'releases/index' },
            { autogenerate: { directory: 'releases', collapsed: true } },
          ],
        },
      ],
    }),
  ],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkDocumentHeadings],
      rehypePlugins: [rehypeDocumentEnhancements],
    }),
  },
});
