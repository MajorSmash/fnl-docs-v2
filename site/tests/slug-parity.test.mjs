import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import test from 'node:test';
import contract from './fixtures/wp8e-slug-contract.json' with { type: 'json' };
import { setTopicRouteFromSource } from '../scripts/verify-corpus-provenance.mjs';

const root = fileURLToPath(new URL('../../', import.meta.url));
const folders = { MANUAL: 'manual', DESCRIPTOR: 'descriptors', RELEASE: 'releases',
  USECASE: 'set-topics', SET_TOPIC: 'set-topics', APPROVED_SUPPORT: 'support' };

async function corpusPaths(directory, prefix) {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const relative = `${prefix}/${entry.name}`;
    if (entry.isDirectory()) result.push(...await corpusPaths(path.join(directory, entry.name), relative));
    else if (entry.name.endsWith('.md') && !entry.name.startsWith('_')) result.push(relative);
  }
  return result;
}

test('unchanged bot and site slug rules produce identical UTF-8 bytes for canon and edge paths', async () => {
  const config = await readFile(path.join(root, 'site/src/content.config.ts'), 'utf8');
  const siteFunction = config.match(/function documentId\(entry: string\) \{[\s\S]*?\n\}/)?.[0];
  assert.ok(siteFunction, 'actual site documentId function must be available');
  assert.equal(createHash('sha256').update(siteFunction.replaceAll('\r\n', '\n')).digest('hex'),
    contract.siteFunctionSha256, 'WP-8E must not change the site slug rule');
  const siteSlug = vm.runInNewContext(
    `const siteContentPrefix = 'site/src/content/docs/';\n${siteFunction.replace('(entry: string)', '(entry)')}\ndocumentId`,
  );
  const cases = [];
  for (const [docType, folder] of Object.entries(folders)) {
    for (const relative of await corpusPaths(path.join(root, folder), folder)) cases.push([docType, relative]);
    for (const file of ['Ninja_Params.md', 'nested_name/Title__two.MD', 'nested/Keep.CASE.MdX',
      'nested_name/Éclair_水_😀.md', 'topic name.md', 'version_2.0.0.56.md']) {
      cases.push([docType, `${folder}/${file}`], [docType, `${folder}/${file}`.replaceAll('/', '\\')]);
    }
  }

  // Execute only the actual pure function and folder mapping, never import the
  // bot (which would load service configuration). Standalone docs CI runs the
  // exact pinned source snapshot; a neighboring KB checkout must match it.
  const kbRoot = process.env.FNL_KB_REFERENCE_ROOT ?? path.resolve(root, '../FNL-KB');
  const livePath = path.join(kbRoot, 'bot/formatter.py');
  if (process.env.FNL_KB_REFERENCE_ROOT) assert.ok(existsSync(livePath), 'configured engine reference missing');
  const python = process.env.PYTHON ?? (process.platform === 'win32' ? 'python' : 'python3');
  const script = `import ast, json, pathlib, sys
from pathlib import PurePosixPath
payload = json.loads(sys.stdin.buffer.read().decode('utf8'))
function, folders = payload['function'], payload['folders']
if payload['live']:
    source = pathlib.Path(payload['live']).read_text(encoding='utf8')
    tree = ast.parse(source)
    live_function = next(ast.get_source_segment(source, n) for n in tree.body if isinstance(n, ast.FunctionDef) and n.name == '_published_document_id')
    live_folders = next(ast.get_source_segment(source, n) for n in tree.body if isinstance(n, ast.AnnAssign) and isinstance(n.target, ast.Name) and n.target.id == '_DOC_TYPE_FOLDER')
    assert live_function == function, 'bot slug function drifted from pinned WP-8E reference'
    assert live_folders == folders, 'bot folder mapping drifted from pinned WP-8E reference'
    function, folders = live_function, live_folders
namespace = {'PurePosixPath': PurePosixPath}
exec(folders + '\\n' + function, namespace)
json.dump([namespace['_published_document_id'](*case) for case in payload['cases']], sys.stdout, ensure_ascii=True)
`;
  const result = spawnSync(python, ['-c', script], { encoding: 'utf8',
    input: JSON.stringify({ ...contract, live: existsSync(livePath) ? livePath : null, cases }) });
  assert.equal(result.status, 0, result.error?.message ?? result.stderr);
  const botSlugs = JSON.parse(result.stdout);
  for (const [index, [, relative]] of cases.entries()) {
    assert.deepEqual(Buffer.from(botSlugs[index], 'utf8'), Buffer.from(siteSlug(relative), 'utf8'), relative);
    if (relative.replaceAll('\\', '/').startsWith('set-topics/') && /\.md$/i.test(relative)) {
      assert.equal(setTopicRouteFromSource(relative), `/${botSlugs[index]}/`, relative);
    }
  }
});
