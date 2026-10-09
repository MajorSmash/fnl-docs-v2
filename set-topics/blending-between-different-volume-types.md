---
doc_type: SET_TOPIC
title: "BLENDING BETWEEN DIFFERENT VOLUME TYPES"
date: 2026-10-09
source_url: "https://discord.com/channels/850913821240983553/1319654748873560145/1558207217247854664"
author: "Andras Ketzer"
source_channel: "info-bits"
admitted_by: "reviewer-capture:722009818113638480"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

Unreal is not very good at blending between volume types.

- HVOL is always drawing over CVOL (no z-sorting). This is usually not a problem, as we use HVOL close to the camera / CVOL in the far background
- HVOL is always drawing over SingleLayerWater (no z-sorting)
- HVOL - FVOL blending is slightly better: while HVOL always draws over FVOL, there is a CVAR (a console variable) that applies FVOL values to the HVOL (HVOL is effected by FVOL) `r.HeterogeneousVolumes.VolumetricFog`. Level `Fog_Mist.umap` / `Setup-2` is demonstrating a HVOL/FVOL combo, where HVOL is used in the close field, and FVOL is used in mid field (further away from the camera)

Our main method for "blending" is distance fade. On Level `Fog_Mist.umap` HVOL is gradually fading out by distance (visible only close to the camera) - while FVOL gradually fades in by distance - so HVOL and FVOL are "blending" into eachother by distance.
