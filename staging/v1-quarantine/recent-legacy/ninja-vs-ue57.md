---
doc_type: SET_TOPIC
title: "NINJA vs UE.5.7"
date: 2025-09-24
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/1420362681654710393"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

I've **tested ninja projects under UE 5.7 Preview**. In general: all good - with minor glitches.
It seems, EPIC has changed the way how Heterogeneous Volume coordinates are calculated. This impacts *some* ninja setups.

NINJA **PLAYER**: all setups running fine ✅

NINJA **LIVE 1.9**: all setups running fine ✅

NINJA **TOOLS**: all setups running fine ✅ with two exceptions ❌ :
On */FluidNinja /Levels /Usecases 10 & 11*, the large, WorldSpace Heterogeneous Volumes are vertically displaced, and should be adjusted:
In the VolumeGeneric OutputMaterial, SET */Density /BasePlaneHeight = 1.5* (original value: 0.5)

NINJA **LIVE 2.0 ALPHA-2**: all setups running fine ✅ , except Niagara-based, WorldSpace Heterogeneous Volumes ❌ - these are vertically displaced. Fix ➡️ SET *LiveComponent /LiveOutputRendertargets /PaintVelocityDensityAndElevation /ExposeRelativeHeight = FALSE*
