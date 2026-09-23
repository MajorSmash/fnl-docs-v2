---
doc_type: SET_TOPIC
title: "vs CONCAVE TERRAINS"
date: 2026-09-06
source_url: "https://discord.com/channels/850913821240983553/1319655034803458069/1546126683575165049"
author: "Andras Ketzer"
source_channel: "▪️basic-support"
admitted_by: "reviewer-capture:722009818113638480"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

1. ninja can use two kind of projection:
 - **camera projection** for explosions, smoke and fire
 - **top down projection** for terrain aligned fluids (eg. a creek) and volumetrics (eg.: low lying fog)

2. ninja uses a 2D core simulation, driving 3D visualization systems. In case we are setting up terrain aligned fluids and gases, the heightmap should be a top-down 2D map.
 - In case the terrain is featuring concave shapes: we can mask certain areas (eliminate the fluids from the area) - see below conversation w *quackcharg*
 - For underwater caves: users need to set up a hidden (invisible) version of the terrain, with cave-tops cut-off - see below conversation w *pete*

Related Manual Chapter: [Limitations of Terrain Flowing Liquids and Water Accumulation](https://majorsmash.github.io/fnl-docs-v2/manual/ninjalive2-manual/#141-water-accumulation-limits)
Related post: LIVE-2 vs MESH TERRAIN [Discord](https://discord.com/channels/850913821240983553/1319654748873560145/1518366695478001725)

**Conversation with user <@133287303983529984> **
- Problem discussed: ninja vs CONCAVE terrain
- Heightmap input: 2D, via Runtime Virtual Textures
- Solution: masking via `Collision Mask`
- Related posts: [Discord](https://discord.com/channels/850913821240983553/1460578674695868510/1542144025979658260) + [Discord](https://discord.com/channels/850913821240983553/1460578674695868510/1542149703309729923) + [Discord](https://discord.com/channels/850913821240983553/1460578674695868510/1542544166532153395)

**Conversation with user <@474292263418069002> **
- Problem discussed: voxel landscape vs RVT height sampling vs ninja
- Heightmap input: 2D, via Runtime Virtual Textures
- Related posts: [Discord](https://discord.com/channels/850913821240983553/1387778546688065606/1412894656106074283) + [Discord](https://discord.com/channels/850913821240983553/1387778546688065606/1481661139971735584)

**Realtime edits to the landscape**:
- in case ninja is reading height through the RVT workflow: theoretically possible. The RVT heightmaps are refreshed with a 10-20 FPS throughput on the Unreal-side, I believe. Ninja is reading the input every tick
- Landscape Components can not be realtime edited
- The best way to do realtime landscape deforms, is to use a static landscape component, with dynamically transformed MESHES on top - being read as SDF
