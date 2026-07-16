import assert from 'node:assert/strict';
import test from 'node:test';

import { sectionForDocType, versionBadges } from '../src/lib/document-meta.mjs';
import rehypeDocumentEnhancements from '../src/plugins/rehype-document-enhancements.mjs';
import remarkDocumentHeadings from '../src/plugins/remark-document-headings.mjs';

test('all v7 document types map to the intended public section', () => {
  assert.deepEqual(
    {
      MANUAL: sectionForDocType('MANUAL'),
      DESCRIPTOR: sectionForDocType('DESCRIPTOR'),
      RELEASE: sectionForDocType('RELEASE'),
      USECASE: sectionForDocType('USECASE'),
      SET_TOPIC: sectionForDocType('SET_TOPIC'),
      APPROVED_SUPPORT: sectionForDocType('APPROVED_SUPPORT'),
    },
    {
      MANUAL: 'Manual',
      DESCRIPTOR: 'Parameters',
      RELEASE: 'Releases',
      USECASE: 'Set Topics',
      SET_TOPIC: 'Set Topics',
      APPROVED_SUPPORT: 'Support Q&A',
    },
  );
});

test('version metadata is surfaced without inventing absent fields', () => {
  assert.deepEqual(
    versionBadges({
      version: '2.0.0-beta5',
      doc_revision: '1.85',
      version_min: '2.0.0-beta4',
      version_max: '2.0.0-beta6',
      ue_versions: ['5.7', '5.8'],
    }),
    [
      'Version 2.0.0-beta5',
      'Revision 1.85',
      'From 2.0.0-beta4',
      'Through 2.0.0-beta6',
      'UE 5.7, 5.8',
    ],
  );
  assert.deepEqual(versionBadges({}), []);
});

test('body enhancements identify Discord links and structure descriptor grammar', () => {
  const tree = {
    type: 'root',
    children: [
      {
        type: 'element',
        tagName: 'p',
        properties: {},
        children: [
          {
            type: 'element',
            tagName: 'a',
            properties: {
              href: 'https://discord.com/channels/1/2/3',
            },
            children: [{ type: 'text', value: 'Original discussion' }],
          },
        ],
      },
      {
        type: 'element',
        tagName: 'li',
        properties: {},
        children: [{ type: 'text', value: '{P.FluidDamping, Fluid Damping}: Controls damping.' }],
      },
    ],
  };

  rehypeDocumentEnhancements()(tree);

  assert.deepEqual(tree.children[0].children[0].properties, {
    href: 'https://discord.com/channels/1/2/3',
    className: ['discord-link'],
    target: '_blank',
    rel: ['noopener', 'noreferrer'],
    'aria-label': 'Original discussion (opens Discord in a new tab)',
  });
  assert.equal(tree.children[1].children[0].properties.dataDescriptorType, 'parameter');
});

test('imported Markdown H1s are demoted beneath the Starlight page title', () => {
  const tree = {
    type: 'root',
    children: [
      {
        type: 'heading',
        depth: 1,
        children: [{ type: 'text', value: 'Repeated source title' }],
      },
      {
        type: 'heading',
        depth: 2,
        children: [{ type: 'text', value: 'Existing section' }],
      },
    ],
  };

  remarkDocumentHeadings()(tree);

  assert.equal(tree.children[0].depth, 2);
  assert.equal(tree.children[1].depth, 2);
});
