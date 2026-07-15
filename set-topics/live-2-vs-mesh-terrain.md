---
doc_type: SET_TOPIC
title: "LIVE-2 vs MESH TERRAIN"
date: 2026-06-21
source_url: "https://discord.com/channels/850913821240983553/1319654748873560145/1518366695478001725"
author: "andrasketzer"
source_channel: "live2-info"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

### 1. Mesh Terrain, introduced in UE 5.8, supports the RVT workflow:
https://dev.epicgames.com/community/learning/knowledge-base/nK7J/unreal-engine-introduction-to-mesh-terrain#creatervtassets
...so we can write classic heightmaps from mesh terrain into RVT assets

### 2. Ninja can sample RVT assets as height data source

Details:
(1) set up the Mesh Terrain segment (or any other mesh) to write into a on-disk RVT asset
(2) add RVT transformer to the Transformer Pipelines (previously, we had to use a material with "RVT Output" node included, to write RVT)
(3) create an RVT volume in the scene, connected to the same on-disk RVT asset the Landscape writes-to
(4) set ninja to sample the given RVT asset:
/LiveComponent /LiveInputFields /HeightFields /RVTHeightData /UseRVTAsHeightSource = True
/LiveComponent /LiveInputFields /HeightFields /RVTHeightData /RVT-asset = (user defined RVT asset)

Besides NinjaCore, External Renderers also support the RVT data pipeline:
- SurfaceAlignedVolumes
- SurfaceAlignedMeshes

*Alternatively: we can go the top-down ScenaptureCamera data pipeline to capture height for ninja*.
