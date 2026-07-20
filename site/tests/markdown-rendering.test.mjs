import assert from 'node:assert/strict';
import test from 'node:test';

import { unified } from '@astrojs/markdown-remark';
import remarkBreaks from 'remark-breaks';

import rehypeDocumentEnhancements from '../src/plugins/rehype-document-enhancements.mjs';

test('authored newlines become breaks without changing block semantics', async () => {
  const fixture = [
    'forced line  ',
    'forced continuation',
    'normal soft wrap',
    '',
    'separate paragraph',
    '',
    '```text',
    'code line one',
    'code line two',
    '```',
    '',
    '| Column A | Column B |',
    '| --- | --- |',
    '| Cell A | Cell B |',
    '',
    '- List item one',
    '- List item two',
  ].join('\n');
  const processor = unified({
    remarkPlugins: [remarkBreaks],
    rehypePlugins: [rehypeDocumentEnhancements],
  });
  const renderer = await processor.createRenderer({});
  const { code } = await renderer.render(fixture);
  const baselineRenderer = await unified({
    rehypePlugins: [rehypeDocumentEnhancements],
  }).createRenderer({});
  const { code: baselineCode } = await baselineRenderer.render(fixture);

  assert.equal((code.match(/<br\s*\/?\s*>/g) ?? []).length, 2);
  assert.match(code, /forced line<br>\nforced continuation<br>\nnormal soft wrap/);
  assert.match(code, /<\/p>\n<p>separate paragraph<\/p>/);
  const codeBlock = code.match(/<pre[\s\S]*?<\/pre>/);
  const baselineCodeBlock = baselineCode.match(/<pre[\s\S]*?<\/pre>/);
  const table = code.match(/<table[\s\S]*?<\/table>/);
  const baselineTable = baselineCode.match(/<table[\s\S]*?<\/table>/);
  const list = code.match(/<ul[\s\S]*?<\/ul>/);
  const baselineList = baselineCode.match(/<ul[\s\S]*?<\/ul>/);

  assert.ok(codeBlock && baselineCodeBlock);
  assert.equal(codeBlock[0], baselineCodeBlock[0]);
  assert.ok(table && baselineTable);
  assert.equal(table[0], baselineTable[0]);
  assert.ok(list && baselineList);
  assert.equal(list[0], baselineList[0]);
});
