---
doc_type: SET_TOPIC
title: "EXPLAINING VOLUME CONCEPTS"
date: 2024-03-15
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/1218224762929545286"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

Very relevant question!
1. **sim data**: niagara could be used to perform both 2D and 3D simulations --- ninja is 2D only. The advantage of using ninja: besides being fast, it is already equipped with elements to handle interactions and output --- with niagara, users need to build these on their own
2. **visualization**: ninja used a custom (non-unreal-native) volumetric shader "smoke volume" (SVOL) before UE-native HVOL came along. Now, we have both. SVOL is a faster (compared to HVOL) and has Z-sorting against translucent surfaces (HVOL DOES NOT!!!) --- but, it handles only a single light-source, while HVOL responds to arbitrary amount of lightsources.
Ninja could drive both SVOL, and HVOL --- while niagara drives only HVOL.
