# Contributing to fnl-docs-v2

This is the source of truth for the FluidNinja LIVE v2 support bot. You edit
Markdown; the bot updates itself. No database, no scripts to babysit.

**Golden rule: one logical unit per file.** One release per file in `releases/`,
one Q&A per file in `support/`, one topic per file in `set-topics/`. The manual
and the descriptors are the only "big document" files.

---

## The five-second workflow

1. Add or edit a Markdown file in the right folder (see below).
2. Fill in the frontmatter — copy the matching template from `templates/`.
3. Commit and push.
4. The webhook re-ingests **only the files you changed**. Done.

To undo anything: **`git revert` the commit and push.** That is the rollback.
Never edit the bot's database directly.

---

## Where things go

| I want to... | Do this |
|---|---|
| Announce a new release / version | Add `releases/<version>.md` (see below) |
| Update the manual | Edit the file in `manual/` (keep the same filename) |
| Update params / content / limitations | Edit the matching file in `descriptors/` |
| Add a curated tip/answer | Add a file in `set-topics/` |
| Save an approved chat Q&A | Add a file in `support/` (usually the bot does this) |

Copy the exemplar for the type you need from `templates/` and fill it in. Each
template's comment explains its fields. The full field reference is in the
[README](README.md#frontmatter-schemas).

---

## Adding a release (this is what sets the version timeline)

The `releases/` folder is the **only** place a version is declared. Committing a
release file is what tells the whole system a new version exists.

1. Copy [`releases/_TEMPLATE.md`](releases/_TEMPLATE.md) to
   `releases/<version>.md` — e.g. `releases/2.0.0-beta5.md`.
2. Fill in **every** frontmatter field:
   - `version` — the display name, exactly what you call it.
   - `date` — the release date. **This is the most important field**: version
     ordering is decided by release `date`, and undated content is placed on the
     timeline by date too.
   - `ue_versions` — the Unreal Engine versions supported.
   - `source_url` — link to the release announcement.
3. Fill in the four headings — keep **all four** even if empty:
   - `## Added`, `## Changed`, `## Removed`, `## Fixed`.
   - One item per bullet. No paragraphs, no sub-bullets. These are read
     verbatim by the pipeline.
4. Commit and push.
5. The bot posts a **verification request** to `#kb-staging`. The new version
   goes live for answering **only after a human approves it** — a wrong release
   entry would corrupt every version-filtered answer, so this gate is on purpose.

---

## Updating the manual or descriptors

- Keep the **same filename** when you revise a manual or descriptor file. The
  pipeline supersedes the old content by file path, so a same-path edit cleanly
  replaces the previous version — no duplicates.
- Bump `doc_revision` in the frontmatter (e.g. params `1.85` → `1.86`) so the
  document's own revision history stays legible. `doc_revision` is *not* a
  product version — it never affects which answers apply to which product
  version.

---

## Rules that keep the bot correct

- **Fill in `date` accurately.** It decides version scope for the file.
- **Use real `source_url` links.** Every claim should trace to its origin.
- **`scope: LIVE2` only** in set-topics. Do not add v1 or NinjaTools content —
  it is out of scope and will be excluded.
- **Never store community usernames.** In `support/` files, `author` is the dev
  who answered; the asker is referenced only by the `question_ref` permalink.
- **No secrets, ever.** No `.env`, keys, or tokens in this repo. See
  [README → Secret hygiene](README.md#secret-hygiene).
- **Keep bodies substantial.** A near-empty topic (under ~15 words) will be held
  for staging review instead of being ingested.

---

## Templates and the `_` convention

- Every doc_type has a copy-me exemplar in `templates/`. Copy, don't edit in
  place.
- Files under `templates/` and any file whose name starts with an underscore
  (e.g. `releases/_TEMPLATE.md`) are **ignored by ingestion**. That is how the
  templates live in the repo without polluting the knowledge base. Do not name a
  real content file with a leading underscore.
