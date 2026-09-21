---
doc_type: SET_TOPIC
title: "LIVE-2 SURFACE ALIGNED PARTICLES GLITCH"
date: 2026-09-17
source_url: "https://discord.com/channels/850913821240983553/850924735630278705/1550240740293091450"
author: "Andras Ketzer"
source_channel: "bugs"
admitted_by: "reviewer-capture:722009818113638480"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

Sometimes, surface aligned particles are being obscured by the underlying surface. Here is why:
Particles are displaced using sim pressure. BUT, we also add material defined TILEMAP to surface height, so the final surface is "pressure + tilemap". We also kill tilemap close to the camera... but the further away, tha larger the discrepancy between the surface height "particles know about" / and what actually is. At these places, culling might happen: the water geo is higher than the particles and cuts/obscures them.

Workaround:
- offset particles higher
- set the "kill tilemap by distance" to a larger value in the output material
