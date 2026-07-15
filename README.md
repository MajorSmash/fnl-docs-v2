# fnl-docs-v2 — FluidNinja LIVE v2 Knowledge Base

**Single source of truth (SSoT) for the FluidNinja LIVE v2 support system.**

Every piece of product knowledge the support bot can answer from enters the
system *here*, as a Markdown file with YAML frontmatter. The bot's database is
**derived** from this repository and can be rebuilt from it at any time — the DB
is an index, this repo is the source. If the repo and the DB ever disagree, the
repo wins.

Scope is **FluidNinja LIVE v2, beta 5 onward**. FNL v1 is deprecated and not
migrated. Closed-beta (1–4) material is retained as *historical era-0* content.
NinjaTools is out of scope and excluded at ingestion.

> This repository contains **content only**. It is never a secret store. No
> `.env`, API keys, tokens, or credentials belong here — see
> [Secret hygiene](#secret-hygiene). Credentials live with the ingestion service.

---

## Folder structure

```
releases/       one file per release — THE version registry (2.0.0-beta5.md, ...)
manual/         FluidNinja LIVE v2 manual (Markdown, exported from the source doc)
descriptors/    ninjalive2_params.md, ninjalive2_content.md, ninjalive2_limitations.md
set-topics/     one file per LIVE2 SET_TOPIC post
support/        one file per approved Q&A (flywheel output)
templates/      one exemplar per doc_type — copy these, never ingested
```

### Folder semantics

| Folder | doc_type(s) | What goes here | Who writes it |
|---|---|---|---|
| `releases/` | `RELEASE` | One file per product release. **The only place a product version is ever declared.** Committing a release file *is* the version-change event. | Dev (via release-post flywheel §6.3, human-approved) |
| `manual/` | `MANUAL` | The v2 user manual, exported to Markdown. Typically one file. | Dev |
| `descriptors/` | `DESCRIPTOR` | The machine-structured dev corpus: `ninjalive2_params.md`, `ninjalive2_content.md`, `ninjalive2_limitations.md`. Shared verbatim with the NinjaLiveAssistant plugin. | Dev |
| `set-topics/` | `SET_TOPIC` (and era-0 `USECASE`) | Dev-curated answers to common questions, captured from `SET TOPIC` Discord posts. Betas 1–4 use-case/feature posts also land here as era-0 content. | Dev / SET_TOPIC flywheel §6.1 |
| `support/` | `APPROVED_SUPPORT` | Dev-approved Q&A that originated in chat, produced by the IDK flywheel. | IDK flywheel §6.2 (dev-gated) |
| `templates/` | — | One copy-me exemplar per doc_type. **Ignored by ingestion** (see the underscore/templates rule in [CONTRIBUTING.md](CONTRIBUTING.md)). | — |

**One logical unit per file.** One release per release file, one Q&A per support
file, one SET_TOPIC per set-topic file. The `manual/` and `descriptors/` files
are the exception — they are single large documents that the pipeline chunks.

---

## Frontmatter schemas

Every file starts with a YAML frontmatter block delimited by `---`. There is a
**uniform base** every file carries, a set of **optional** fields allowed
everywhere, and **per-type** additions.

Dates are ISO `YYYY-MM-DD`. `version_min` / `version_max` are *display strings*
(whatever Andras calls the version) — the ingestion pipeline resolves them to an
internal `epoch_seq` for ordering; you never write epoch numbers by hand.

### Base — required on every file

| Field | Type | Meaning | Example |
|---|---|---|---|
| `doc_type` | enum string | One of `RELEASE`, `MANUAL`, `DESCRIPTOR`, `USECASE`, `SET_TOPIC`, `APPROVED_SUPPORT`. Selects the authority rank and the per-type schema. | `SET_TOPIC` |
| `title` | string | Human title. Original casing preserved (filenames are normalised, titles are not). | `"ACCUMULATING FLUID in LIVE 2.0"` |
| `date` | ISO date | Authored / release date. Drives **timeline version inference** (§2.3 rule 4) — the default that makes versioning self-maintaining. Get it right. | `2026-08-01` |
| `source_url` | string (URL) | Canonical origin of the content — Discord permalink, doc URL, etc. Always the real source link. | `"https://discord.com/channels/850913821240983553/851482546100633601/1370000743389597797"` |

### Optional — allowed on any file

| Field | Type | Meaning | Example |
|---|---|---|---|
| `version_min` | display string or `null` | Explicit lower version bound. Resolved to `epoch_seq` at ingestion. `null` = unset (let inference decide). | `"2.0.0-beta5"` |
| `version_max` | display string or `null` | Explicit upper bound. `null` = current (valid until shadowed or killed). | `null` |
| `media_urls` | list of strings | Image / video URLs the document references. | `["https://cdn.example/screenshot.png"]` |

### Per-type additions

**`RELEASE`** (see [`releases/_TEMPLATE.md`](releases/_TEMPLATE.md))

| Field | Type | Meaning | Example |
|---|---|---|---|
| `version` | display string | The version this file declares. Whatever Andras calls it — never parsed for ordering. | `"2.0.0-beta5"` |
| `ue_versions` | list of strings | Unreal Engine versions this release supports. | `["5.7", "5.8"]` |

Release bodies use fixed headings `## Added` / `## Changed` / `## Removed` /
`## Fixed` (§2.1). Extraction is deterministic by heading — one item per bullet,
no paragraphs. Keep all four headings even when a section is empty.

**`MANUAL` / `DESCRIPTOR`**

| Field | Type | Meaning | Example |
|---|---|---|---|
| `doc_revision` | string | The document's own internal revision (params v1.85, content v1.34, limitations v1.0; manual v2.00). This is a **document revision, not a product version** (§2.4) — it never enters version filtering. | `"1.85"` |

**`SET_TOPIC`**

| Field | Type | Meaning | Example |
|---|---|---|---|
| `author` | string | Dev account handle that authored the post. | `"andrasketzer"` |
| `source_channel` | string | Discord channel the post came from. | `"tips-tricks"` |
| `scope` | const `LIVE2` | Always `LIVE2`. v1 and NinjaTools posts never become SET_TOPICs. | `LIVE2` |

**`APPROVED_SUPPORT`**

| Field | Type | Meaning | Example |
|---|---|---|---|
| `author` | string | The **dev** who answered. Community usernames are **never** stored. | `"andrasketzer"` |
| `question_ref` | string (URL) | Discord permalink to the original *question* (`source_url` points at the answer). | `"https://discord.com/channels/850913821240983553/.../..."` |

**`USECASE`** uses the base + optional fields only — no per-type additions.

> Full copy-me exemplars for each type live in [`templates/`](templates/).

---

## Version model (why `date` matters)

Product versions are not tagged per-file by hand. They are inferred:

1. Explicit `version_min` / `version_max` frontmatter, if present.
2. A `RELEASE` doc stamps its own version on its chunks.
3. Explicit mentions in body text ("since beta 5") extracted at ingestion.
4. **Timeline inference (the default):** the file's `date` is mapped onto the
   release timeline — content dated inside a release's window inherits that
   version. This is why an accurate `date` is the single most important field.
5. Nothing above applies → the content is flagged version-uncertain and held
   out of version-filtered answers until a human reviews it.

Content dated before the beta-5 release date is **era-0** (closed beta). It
stays retrievable but answers carry a "verify against beta 5+" flag.

Adding a `releases/<version>.md` file is what advances the version timeline —
see [CONTRIBUTING.md](CONTRIBUTING.md) for how to add a release.

---

## Ingestion model

This repo drives the bot's knowledge base automatically. You never run database
commands by hand.

```
  git push  ──►  GitHub webhook  ──►  ingestion service (per changed file)
                                          │
                                          ├─ parse frontmatter
                                          ├─ checksum dedup (same content → no-op)
                                          ├─ supersede prior version by repo_path
                                          ├─ chunk → classify → resolve version
                                          └─ embed → write to the DB
```

- **Add / edit a file, push** → that file (and only that file) is re-ingested.
  Editing a `manual/` or `descriptor/` file supersedes its old chunks
  automatically (supersession is keyed on the file path).
- **Delete a file, push** → its chunks are deprecated.
- **Rollback = `git revert`.** To undo a bad change, revert the commit and push.
  The revert re-ingests the previous state. There is no separate "undo" — git
  history *is* the rollback mechanism.
- **Idempotent.** Pushing the same content twice, or a webhook delivery arriving
  twice, changes nothing (same checksum → no-op).
- **Releases are special.** Committing a `releases/` file inserts a release-history
  row marked *unverified* and posts a verification request to `#kb-staging`.
  The new version only goes live for the version filter (and fires the Kill
  Switch entailment check) after a human approves it. A wrong release entry
  poisons the whole version filter, so the human gate is deliberate.

---

## Secret hygiene

This is a public-shaped content repository. Treat it as world-readable.

- **Never** commit `.env`, API keys, tokens, webhook secrets, or any credential.
  `.gitignore` blocks the common shapes, but the rule is on you, not the tool.
- Credentials belong to the **ingestion service** (the bot / webhook host), not
  to content. See that service's own README for its rotation runbook.
- If a secret is ever committed here, rotating it is mandatory — git history
  preserves it even after deletion.

---

## OWNERSHIP TRANSFER RUNBOOK

This repository is currently staged on **Seth's** GitHub account and will later
be transferred to **Andras'** account. The system is built so the transfer is a
GitHub repo transfer plus a small config change — no code edits.

Every code reference to this repo is config-driven, via these variables (set in
the **ingestion service's** environment, *not* in this repo):

| Variable | Meaning | Changes on transfer? |
|---|---|---|
| `DOCS_REPO_OWNER` | GitHub account/org that owns the repo (`seth...` → `andras...`) | **Yes — update** |
| `DOCS_REPO_NAME` | Repo name (`fnl-docs-v2`) | No (name is preserved) |
| `DOCS_REPO_PATH` | Absolute path to the service's local clone | Only if the clone is re-created |
| `WEBHOOK_SECRET` | Shared secret validating webhook deliveries | **Yes — the new webhook needs a fresh secret** |

**The two env vars that must change on transfer are `DOCS_REPO_OWNER` and
`WEBHOOK_SECRET`.** (`DOCS_REPO_NAME` is unchanged; `DOCS_REPO_PATH` only changes
if you re-clone.)

### Before the transfer (interim state)

Andras gets **collaborator** access on Seth's staging copy so he can add content
immediately. No transfer needed to start contributing.

### Transfer steps (a non-expert can follow these)

1. **Freeze pushes.** Tell contributors to stop pushing for the short transfer
   window (a few minutes) so no push is lost mid-transfer.
2. **Andras prepares his account.** Andras must have a GitHub account and be
   signed in. He should *accept the incoming transfer* when prompted (step 4).
3. **Seth initiates the transfer.** On GitHub:
   `Repository → Settings → General → Danger Zone → Transfer ownership`.
   Enter the repo name to confirm and Andras' username/account as the new owner.
   GitHub preserves all history and issues, and **old URLs redirect** to the new
   location automatically.
4. **Andras accepts.** Andras confirms the transfer from the email/notification
   GitHub sends. The repo now lives at
   `https://github.com/<andras-account>/fnl-docs-v2`.
5. **Re-create the webhook on the new owner.** GitHub does **not** carry webhooks
   across a transfer. On the transferred repo:
   `Settings → Webhooks → Add webhook`.
   - **Payload URL:** the ingestion service's webhook endpoint (unchanged — the
     bot host does not move).
   - **Content type:** `application/json`.
   - **Secret:** generate a **new** random secret. Keep it safe; you set the
     matching value in the service env in step 6.
   - **Events:** "Just the push event" (this repo re-ingests on push).
   - **Active:** checked.
6. **Update the two env vars on the ingestion service.**
   - `DOCS_REPO_OWNER` → Andras' account name.
   - `WEBHOOK_SECRET` → the new secret from step 5 (must match exactly).
   - If the service's local clone is re-created under a new path, also update
     `DOCS_REPO_PATH`. Otherwise point the existing clone's remote at the new
     owner: `git remote set-url origin https://github.com/<andras-account>/fnl-docs-v2.git`
     (the old URL redirects, but updating it is cleaner).
   - Restart the service so it picks up the new environment.
7. **Verify end-to-end.**
   - GitHub webhook page → **Recent Deliveries** → "Redeliver" a test push, or
     make a trivial commit. Expect a `2xx` response.
   - Confirm the ingestion service processed it (its `/health` endpoint should
     report a recent successful webhook + embed).
   - Un-freeze pushes.

### Rollback of the transfer

If something is wrong, GitHub allows transferring the repo back. The webhook and
the two env vars would then be reverted to Seth's values by repeating steps 3–6
in the other direction.

---

## Related

- **Contributor guide:** [CONTRIBUTING.md](CONTRIBUTING.md) — one-page rules for
  adding content.
- **Templates:** [`templates/`](templates/) and
  [`releases/_TEMPLATE.md`](releases/_TEMPLATE.md).
- **Design spec:** the FNL-KB Design Spec v7 (in the `FNL-KB` code repo) is the
  authority for the system this repo feeds.
