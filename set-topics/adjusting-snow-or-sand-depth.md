---
doc_type: SET_TOPIC
title: "ADJUSTING SNOW (or SAND) DEPTH"
date: 2023-07-31
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/1135487259781632093"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

1. Load snowy level
2. Select "NinjaLive_Large_FluidSim" actor --> then select NinjaLiveComponent
3. Using the Details panel: under LiveGeneric, locate "SecondaryOutputMaterial"
4. Open "MI_SnowMaterial_Ground_MultiLayer" Material Instance
5. Find "ParallaxParams" group
6. Switch OFF "AdjustPixelDepthOffset"
7. Adjust "ParallaxHeight" (optionally "ParallaxPlane", too)
