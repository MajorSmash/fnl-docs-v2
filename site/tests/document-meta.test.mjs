import assert from 'node:assert/strict';
import test from 'node:test';

import { isDiscordUrl } from '../src/lib/discord-url.mjs';
import { sectionForDocType, versionBadges } from '../src/lib/document-meta.mjs';
import { hasSourceDocumentTitle } from '../src/lib/page-title.mjs';
import rehypeDocumentEnhancements from '../src/plugins/rehype-document-enhancements.mjs';

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

test('corpus pages with their own H1 suppress only the duplicate Starlight title', () => {
  assert.equal(hasSourceDocumentTitle({ doc_type: 'MANUAL' }, [{ depth: 1 }]), true);
  assert.equal(hasSourceDocumentTitle({ doc_type: 'DESCRIPTOR' }, [{ depth: 1 }]), true);
  assert.equal(hasSourceDocumentTitle({ doc_type: 'SET_TOPIC' }, [{ depth: 2 }]), false);
  assert.equal(hasSourceDocumentTitle({}, [{ depth: 1 }]), false);
});

test('Discord URL detection uses exact supported hostnames', () => {
  assert.equal(isDiscordUrl('https://discord.com/channels/1/2/3'), true);
  assert.equal(isDiscordUrl('https://www.discord.com/channels/1/2/3'), true);
  assert.equal(isDiscordUrl('https://discordapp.com/channels/1/2/3'), true);
  assert.equal(isDiscordUrl('https://discord.com.evil.example/channels/1/2/3'), false);
  assert.equal(isDiscordUrl('not a URL'), false);
});
