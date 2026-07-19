import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import {
  matchesParameterSearch,
  parameterSearchText,
} from '../src/lib/parameter-filter.mjs';

const component = await readFile(
  new URL('../src/components/ParameterReference.astro', import.meta.url),
  'utf8',
);
const index = await readFile(
  new URL('../src/content/docs/parameters/index.mdx', import.meta.url),
  'utf8',
);
const config = await readFile(new URL('../astro.config.mjs', import.meta.url), 'utf8');
const css = await readFile(new URL('../src/styles/custom.css', import.meta.url), 'utf8');

test('parameter reference exposes search, groups, deep links, and raw source', () => {
  assert.match(component, /type="search"/);
  assert.match(component, /data-parameter-group/);
  assert.match(component, /id=\{parameter\.anchor\}/);
  assert.match(component, /href=\{`#\$\{parameter\.anchor\}`\}/);
  assert.match(component, /descriptors\/ninjalive2-params/);
  assert.match(component, /Raw fallback records/);
  assert.match(component, /fallback\.raw/);
  assert.match(component, /Raw fallback \(.*fallback\.scope/s);
  assert.match(component, /fallback\.reason/);
  assert.match(component, /const hasDetails = Boolean\(/);
});

test('reference typography stays responsive and fallback prose wraps', () => {
  assert.match(css, /\.parameter-list\s*{[^}]*grid-template-columns:\s*repeat\(2,/s);
  assert.match(css, /\.parameter-description\s*{[^}]*white-space:\s*pre-line/s);
  assert.match(css, /\.parameter-card:target/);
  assert.match(css, /\.parameter-fallbacks pre\s*{[^}]*white-space:\s*pre-wrap/s);
  assert.match(css, /@media \(max-width: 34rem\)[\s\S]*\.parameter-list[\s\S]*grid-template-columns:\s*1fr/);
});

test('Parameters sidebar leads to the human reference while raw links remain on-page', () => {
  const parametersStart = config.indexOf("label: 'Parameters'");
  const setTopicsStart = config.indexOf("label: 'Set Topics'", parametersStart);
  const parametersBlock = config.slice(parametersStart, setTopicsStart);

  assert.match(parametersBlock, /label: 'Parameter reference', slug: 'parameters\/index'/);
  assert.doesNotMatch(parametersBlock, /descriptors\/ninjalive2/);
  assert.match(index, /ParameterReference/);
  assert.match(index, /content descriptor/i);
});

test('client filtering matches only parameter name and description fields', () => {
  const search = parameterSearchText('ResolutionX', 'Base resolution for simulation buffers.');

  assert.equal(matchesParameterSearch(search, 'resolutionx'), true);
  assert.equal(matchesParameterSearch(search, 'simulation buffers'), true);
  assert.equal(matchesParameterSearch(search, '  RESOLUTIONX  '), true);
  assert.equal(matchesParameterSearch(search, 'Blueprint only'), false);
  assert.equal(matchesParameterSearch(search, 'P.1.0.4'), false);
  assert.match(component, /data-parameter-search=\{parameterSearchText\(/);
  assert.doesNotMatch(component, /card\.textContent/);
});
