import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

import rehypeDocumentEnhancements from './src/plugins/rehype-document-enhancements.mjs';
import remarkDocumentHeadings from './src/plugins/remark-document-headings.mjs';

function normalizeBase(value) {
  const trimmed = String(value || '').trim().replace(/^\/+|\/+$/g, '');
  return trimmed ? `/${trimmed}` : '';
}

const base = normalizeBase(process.env.BASE_PATH ?? '/fnl-docs-v2');
const site = process.env.SITE_URL ?? 'https://example.invalid';
const ogImage = new URL(`${base || ''}/og.png`, site).href;

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap(),
    starlight({
      title: 'FluidNinja LIVE 2 Docs',
      description:
        'Canonical FluidNinja LIVE 2 manual, parameter references, release notes, set topics, and approved support answers.',
      pagefind: true,
      credits: true,
      customCss: ['./src/styles/custom.css'],
      components: {
        PageTitle: './src/components/PageTitle.astro',
      },
      head: [
        { tag: 'meta', attrs: { name: 'color-scheme', content: 'dark light' } },
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
        { label: 'Start here', items: [{ slug: 'index' }] },
        {
          label: 'Manual',
          items: [{ slug: 'manual/index' }, { slug: 'manual/ninjalive2-manual' }],
        },
        {
          label: 'Parameters',
          items: [
            { slug: 'parameters/index' },
            { slug: 'descriptors/ninjalive2-params' },
            { slug: 'descriptors/ninjalive2-content' },
            { slug: 'descriptors/ninjalive2-limitations' },
          ],
        },
        {
          label: 'Releases',
          items: [{ slug: 'releases/index' }, { autogenerate: { directory: 'releases' } }],
        },
        {
          label: 'Set Topics',
          collapsed: true,
          items: [{ slug: 'set-topics/index' }, { autogenerate: { directory: 'set-topics' } }],
        },
        {
          label: 'Support Q&A',
          items: [{ slug: 'support/index' }, { autogenerate: { directory: 'support' } }],
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
