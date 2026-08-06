---
doc_type: SET_TOPIC
title: "**SELECTIVE BRUSH DENSITY**"
date: 2026-08-05
source_url: "https://discord.com/channels/850913821240983553/1460578674695868510/1534651443292934156"
author: "Andras Ketzer"
source_channel: "live2-beta-discussion"
admitted_by: "reviewer-capture:722009818113638480"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

Visible issue: "*the water seems to flow endlessly from the character*"
1. ninja picks up point-like inputs (bones, object pivots) - and **by default** uses them to generate density - eg.: we set up a torch, canvas empty, torch head generates flames/smoke.
2. For DENSE type water setups (like Creek-1, Creek-2, Dense Lake, Dense Sea), we would like to selectively generate density. For example: particles generate density - as they function as "water sources" - while Pawn Bones and Objects **only generate velocity** --- so they stir the fluid, but do *not* function as density source.
.
Key param: /LiveComponent /LiveInputPoints /BrushKillers /[SelectivelyKillBrushDensityKeepVelocity](https://majorsmash.github.io/fnl-docs-v2/parameters/#parameter-p-4-1-2-selectivelykillbrushdensitykeepvelocity) --- in case you set it to "1", bones and objects will not generate density.
