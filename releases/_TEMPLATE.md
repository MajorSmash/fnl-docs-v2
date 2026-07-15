---
doc_type: RELEASE
title: "FluidNinja LIVE v2 — <display version>"
version: "2.0.0-beta5"          # display string, exactly what Andras calls it (§2.1)
date: 2026-08-01                # release date — assigns epoch_seq order (§2.2)
ue_versions: ["5.7", "5.8"]     # Unreal Engine versions this release supports
source_url: "https://discord.com/channels/<guild>/<channel>/<message>"
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
  HOW TO USE THIS FILE (do not ingest this template — the leading underscore
  marks it as ignored by the pipeline; see CONTRIBUTING.md):

  1. Copy this file to releases/<version>.md  (e.g. releases/2.0.0-beta5.md).
  2. Fill in EVERY frontmatter field. `version`, `date`, `ue_versions` are
     required for a RELEASE. `date` alone decides epoch ordering — get it right.
  3. Keep the four headings Added / Changed / Removed / Fixed even if a section
     is empty. The ingestion pipeline extracts them by heading, verbatim.
  4. One feature/change per bullet. No sub-bullets, no paragraphs.
  5. Committing this file IS the version-change event: the webhook inserts a
     release_history row (manually_verified = FALSE) and posts a verification
     request to #kb-staging. The epoch only goes live for the version filter
     and Kill Switch after a human approves it.
-->
