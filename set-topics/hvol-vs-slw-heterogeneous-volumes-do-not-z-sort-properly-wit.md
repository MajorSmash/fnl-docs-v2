---
doc_type: SET_TOPIC
title: "HVOL vs SLW - Heterogeneous Volumes DO NOT z-sort properly with SingleLayerWater"
date: 2026-09-08
source_url: "https://discord.com/channels/850913821240983553/850924735630278705/1546931699466633356"
author: "Andras Ketzer"
source_channel: "bugs"
admitted_by: "reviewer-capture:722009818113638480"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

**HVOL vs SLW** - Heterogeneous Volumes DO NOT z-sort properly with SingleLayerWater
- ninja supports four volume types (SVOL, HVOL, FVOL, CVOL), read more [HERE](https://majorsmash.github.io/fnl-docs-v2/manual/ninjalive2-manual/#11-volumetrics)
- one of these, is heterogeneous volume (HVOL), a native Unreal Engine volume type
- an inherent flaw of HVOL (an Unrel Engine bug): sorting is not resolved with SingleLayerWater (SLW) shader - HVOL is always drawn in front of SLW, and this can not be changed (in my experience, under UE 5.3 - UE 5.6 --- but I assume this must be the case with UE 5.8 too.)

- workaround-1: use non SLW for water (eg.: translucent material)
- workaround-2: use other volumetic domain, eg.: SVOL (ninja native volume type) ---wich sorts **correctly** with SLW, you can see this on LEVEL `Water_Sparse_Sea_Quiet` where the character's foot-dust fx is made of SVOL, and you can walk into the SLW water
- workaround-3: use non-volumetric camera facing smoke with simple translucent shader, which also sorts good with SWL. Smoke demonstrated on this level: `VolumeDemo_FAKE`
