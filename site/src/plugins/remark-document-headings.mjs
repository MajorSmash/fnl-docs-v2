function walk(node, visitor) {
  visitor(node);
  if (!Array.isArray(node.children)) return;
  for (const child of node.children) walk(child, visitor);
}

export default function remarkDocumentHeadings() {
  return (tree) => {
    walk(tree, (node) => {
      // Starlight owns the page H1 through frontmatter. Imported documents may
      // repeat their title as Markdown H1, so demote body H1s without changing
      // the canonical source files.
      if (node.type === 'heading' && node.depth === 1) node.depth = 2;
    });
  };
}
