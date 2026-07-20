import assert from 'node:assert/strict';
import test from 'node:test';

import { unified } from '@astrojs/markdown-remark';

import rehypeDocumentEnhancements from '../src/plugins/rehype-document-enhancements.mjs';

test('CommonMark hard breaks survive while soft wraps and paragraphs retain their semantics', async () => {
  const fixture = [
    'forced line  ',
    'forced continuation',
    'normal soft wrap',
    '',
    'separate paragraph',
  ].join('\n');
  const processor = unified({ rehypePlugins: [rehypeDocumentEnhancements] });
  const renderer = await processor.createRenderer({});
  const { code } = await renderer.render(fixture);

  assert.equal((code.match(/<br\s*\/?\s*>/g) ?? []).length, 1);
  assert.match(code, /forced line<br>\nforced continuation\nnormal soft wrap/);
  assert.match(code, /<\/p>\n<p>separate paragraph<\/p>/);
});
