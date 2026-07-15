---
doc_type: RELEASE
title: "EXAMPLE — replace with the release title"
version: "0.0.0-EXAMPLE"
date: 1970-01-01
ue_versions: ["5.x"]
source_url: "https://discord.com/channels/EXAMPLE/EXAMPLE/EXAMPLE"
---

## Added
- <one new feature per bullet — deterministic extraction, no prose paragraphs>

## Changed
- <one changed behaviour per bullet>

## Removed
- <one removed feature per bullet — these feed the Kill Switch (§2.5)>

## Fixed
- <one bug fix per bullet>

<!--
  HOW TO USE THIS FILE.

  This template is NOT ingested: the ingestion pipeline MUST skip templates/ and
  any _-prefixed filename (this file is releases/_TEMPLATE.md). All frontmatter
  values above are sentinels ("EXAMPLE", 0.0.0-EXAMPLE, 1970-01-01) so that even
  if that skip ever fails, this file cannot declare a real version.

  Steps:
  1. Copy this file to releases/<version>.md  (e.g. releases/2.0.0-beta5.md).
  2. Replace EVERY frontmatter value. version, date, ue_versions, source_url are
     all required for a RELEASE. date alone decides epoch ordering — get it right.
  3. Do NOT add inline "# comments" after a frontmatter value. The ingestion
     frontmatter reader is intentionally minimal and does not strip trailing
     comments, so `version: 2.0.0-beta5  # note` would ingest the note as part of
     the version. Keep frontmatter values bare. Put any notes down here instead.
  4. Keep the four headings Added / Changed / Removed / Fixed even if a section
     is empty. The pipeline extracts them by heading, verbatim.
  5. One feature/change per bullet. No sub-bullets, no paragraphs.
  6. Committing this file IS the version-change event: the webhook inserts a
     release_history row (manually_verified = FALSE) and posts a verification
     request to #kb-staging. The epoch only goes live for the version filter
     and Kill Switch after a human approves it.
-->
