---
doc_type: SET_TOPIC
title: "ADJUSTING WATER LEVEL"
date: 2026-09-18
source_url: "https://discord.com/channels/850913821240983553/1319655034803458069/1550432954826629223"
author: "Andras Ketzer"
source_channel: "▪️basic-support"
admitted_by: "reviewer-capture:722009818113638480"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

- There are two kind of water setups in LIVE-2: SPARSE and DENSE. Learn about them in [Manual Chapter 6](https://majorsmash.github.io/fnl-docs-v2/manual/ninjalive2-manual/#6-key-concepts-for-water) and on this level: `/Content/FluidNinjaLive/Levels/_Starter/Tutorial03_KeyConceptsForWater.umap`
- Brefly: we use sparse setups for "flat" water, and dense setups for landscape aligned water (a coastline, where the waves climb the beach is a dense setup)
- With Sparse setups, we can adjust water level simply by moving the water mesh --- or adjusting the "Additional Offset" param in the Output Material, under the Meshdistortion Param Group
- Note: besides simple meshes, LIVE-2 comes with a tiled-mesh-grid-generator: `SurfaceAlignedMeshes`, learn more about it [here](https://majorsmash.github.io/fnl-docs-v2/manual/ninjalive2-manual/#28-surface-aligned-meshes)
- With Dense setups: moving the mesh does NOT have an effect, as the mesh verticles are snapped to the landscape by WPO (vertex world position offset) - and there is a dedicated option to "lower clamp" landscape elevation - to create a lake for example: `/LiveComponent /LiveInputFields /HeightFields /ClampHeightLowerValues` + `ClampingValue`, learn about them [here](https://majorsmash.github.io/fnl-docs-v2/parameters/#parameter-p-3-3-0-2-clampheightlowervalues) and [here](https://majorsmash.github.io/fnl-docs-v2/parameters/#parameter-p-3-3-0-3-clampingvalue). So, with Dense setups, we adjust the world-z position (elevation) of our big flat water-surface using the `ClampingValue` parameter.
- Note: the Output Material for dense setups also contains OFFSET options, under the "HeightField" and "MeshDistortion" param groups - in case you prefer to use these
