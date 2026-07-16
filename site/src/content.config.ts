import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { docsSchema } from '@astrojs/starlight/schema';

const repositoryRoot = new URL('../../', import.meta.url);
const siteContentPrefix = 'site/src/content/docs/';

function documentId(entry: string) {
  const normalized = entry.replaceAll('\\', '/');
  const withoutPrefix = normalized.startsWith(siteContentPrefix)
    ? normalized.slice(siteContentPrefix.length)
    : normalized;

  return withoutPrefix
    .replace(/\.(md|mdx)$/i, '')
    .split('/')
    .map((part) => part.replaceAll('_', '-'))
    .join('/');
}

export const collections = {
  docs: defineCollection({
    loader: glob({
      base: repositoryRoot,
      pattern: [
        'manual/**/*.md',
        'descriptors/**/*.md',
        'set-topics/**/*.md',
        'support/**/*.md',
        'releases/**/*.md',
        'site/src/content/docs/**/*.(md|mdx)',
        '!**/_*.md',
      ],
      generateId: ({ entry }) => documentId(entry),
    }),
    schema: docsSchema({
      extend: z.object({
        doc_type: z
          .enum(['MANUAL', 'DESCRIPTOR', 'RELEASE', 'USECASE', 'SET_TOPIC', 'APPROVED_SUPPORT'])
          .optional(),
        date: z.coerce.date().optional(),
        source_url: z.url().nullable().optional(),
        doc_revision: z.union([z.string(), z.number()]).nullable().optional(),
        version: z.union([z.string(), z.number()]).nullable().optional(),
        version_min: z.union([z.string(), z.number()]).nullable().optional(),
        version_max: z.union([z.string(), z.number()]).nullable().optional(),
        ue_versions: z.array(z.union([z.string(), z.number()])).optional(),
        author: z.string().optional(),
        source_channel: z.string().optional(),
        scope: z.string().optional(),
        question_ref: z.url().optional(),
        media_urls: z.array(z.url()).optional(),
      }),
    }),
  }),
};
