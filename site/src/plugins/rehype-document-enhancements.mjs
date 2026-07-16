import { isDiscordUrl } from '../lib/discord-url.mjs';

const GRAMMAR_PATTERN = /^\{([PG])\.([^,}]+),\s*([^}]+)\}/;

function walk(node, visitor, parent = undefined) {
  visitor(node, parent);
  if (!Array.isArray(node.children)) return;
  for (const child of node.children) walk(child, visitor, node);
}

function textContent(node) {
  if (node.type === 'text') return node.value;
  if (!Array.isArray(node.children)) return '';
  return node.children.map(textContent).join('');
}

function discordLink(node) {
  if (node.type !== 'element' || node.tagName !== 'a') return;
  const href = node.properties?.href;
  if (typeof href !== 'string') return;

  if (!isDiscordUrl(href)) return;

  const className = Array.isArray(node.properties.className) ? node.properties.className : [];
  node.properties.className = [...className, 'discord-link'];
  node.properties.target = '_blank';
  node.properties.rel = ['noopener', 'noreferrer'];
  const label = textContent(node).trim() || 'Discord source';
  node.properties['aria-label'] = `${label} (opens Discord in a new tab)`;
}

function grammarToken(node, parent) {
  if (node.type !== 'text' || !parent || !Array.isArray(parent.children)) return;
  if (!['li', 'p', 'strong'].includes(parent.tagName)) return;

  const match = node.value.match(GRAMMAR_PATTERN);
  if (!match) return;

  const [full, type, id, label] = match;
  const index = parent.children.indexOf(node);
  if (index < 0) return;

  const replacement = {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['descriptor-token'],
      dataDescriptorType: type === 'P' ? 'parameter' : 'group',
    },
    children: [
      {
        type: 'element',
        tagName: 'span',
        properties: { className: ['descriptor-kind'] },
        children: [{ type: 'text', value: type === 'P' ? 'Parameter' : 'Group' }],
      },
      {
        type: 'element',
        tagName: 'code',
        properties: {},
        children: [{ type: 'text', value: `${type}.${id.trim()}` }],
      },
      {
        type: 'element',
        tagName: 'span',
        properties: { className: ['descriptor-label'] },
        children: [{ type: 'text', value: label.trim() }],
      },
    ],
  };

  parent.children.splice(
    index,
    1,
    replacement,
    ...(node.value.length > full.length
      ? [{ type: 'text', value: node.value.slice(full.length) }]
      : []),
  );
}

export default function rehypeDocumentEnhancements() {
  return (tree) => {
    walk(tree, discordLink);
    walk(tree, grammarToken);
  };
}
