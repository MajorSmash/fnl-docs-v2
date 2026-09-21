---
doc_type: SET_TOPIC
title: "LIVE-2 vs VOXEL TERRAIN"
date: 2026-09-17
source_url: "https://discord.com/channels/850913821240983553/850913821827792940/1550089348802940959"
author: "Andras Ketzer"
source_channel: "general"
admitted_by: "reviewer-capture:722009818113638480"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

- Ninja natively samples Landscape Components and Runtime Virtual Textures (RVT) to acces Terrain Elevation
- In case we can set up a function, that writes Voxel Terrain elevation to an RVT asset, ninja can read this too, and generate terrain aligned gases or liquids
- As a Proof-of-Concept, user Pete has already managed to set up the voxel-RVT-ninja data pipeline, see this post: [Discord](https://discord.com/channels/850913821240983553/1387778546688065606/1412894656106074283)
- Realtime edits to the landscape: Unreal refreshes RVT heightmaps with a 10-20 FPS throughput. Ninja is reading the input every tick. As a consequence, realtime, responsive terrain edit is possible (Pete's above post also demonstrates this)
- Note: Landscape Components can not be realtime edited
- An alternative way to do realtime landscape deforms, is to use a static landscape component, with dynamically transformed MESHES on top - being read as SDF

Related posts:
LIVE-2 vs CONCAVE TERRAINS, [Discord](https://discord.com/channels/850913821240983553/1319655034803458069/1546126683575165049)
LIVE-2 vs NANITE, [Discord](https://discord.com/channels/850913821240983553/1319655034803458069/1546899454488215572)
