---
doc_type: SET_TOPIC
title: "LIVE-2 Beta 1 Release and Features"
date: 2025-07-01
source_url: "https://discord.com/channels/850913821240983553/1319654748873560145/1389543526932676722"
author: "andrasketzer"
source_channel: "live2-info"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

## Release announcement

12. **Would like to test Live 2.0 beta?**

FluidNinja LIVE-2 **BETA-1** publicly available. OPEN BETA period starts now:
[Discord](https://discord.com/channels/850913821240983553/1466649696956317746/1466737082834751489)

## Feature list

LIVE-2 **BETA-1** features:
- camera facing HVOL bug fixed  *(setups on Fire-Smoke level were glitching in Beta-0)*
- NinjaLiveCompoment BP /RecollectMeshSDFSoucesDuringGameTime feature added (spawned rocks)
- MF_WetMapFunction: above-water-caustics attenuation by distance from water surface
- Multispline, noisetile on lake
- Dam setup on Creek-2
- Texture space blur / ghosting eliminated via r.TemporalAACurrentFrameWeight 0.25
- Updated AutoExposure settings: support an extended range of scene luminance & PBR
- Geometry Collection (Chaos Destructibles as SDF) memory leak bug: timer+location based "flush" workaround
- NinjaLiveCompoment BP /Destructibles /StopReadingActiveGeoCollectionAfterNSeconds added

- BP LABELING done
- MERGING: Re-merging whole ninja core.dev project to a blank UE 5.6 project to get rid of hidden UE4 legacy junk
- BUILD: Playble / runtime demo & shipping build test - [Discord](https://discord.com/channels/850913821240983553/1475901717529755738/1479439429264347218)
- TUTORIALS: building tut levels started, improving the proto-manual: in progress

Feature-list source: [Discord](https://discord.com/channels/850913821240983553/1466643263774527741/1481623991247568980)
