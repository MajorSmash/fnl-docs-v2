---
doc_type: SET_TOPIC
title: "VOLUME FOG VISIBILITY and DISTANCE FADE"
date: 2021-07-01
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/860217413761237023"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

*Global visibility*: check if VolumeFog visualization is enabled: *Viewport top-right menu /Show /Fog* (also, Alt+F)
.
*Distance based visibility*: this could be altered by selecting a volume-box-mesh, picking the applied VolumeFog Material Instance, locating the DISTANCE FADE param group in the material instance, and setting the DISTANCE and FALLOFF values.
.
**(1)** The larger you set the "FadeDistance" param in the VolumeFog MaterialInstance --> the further you could get from the volume without fading out. Try large values: default is 2000 ---> set it to 200000
**(2)** Unreal (independently from ninja) also controls VolumeFog view distance. Select "ExponentialHeightFog" Actor on level. At the Details Panel /Volumetric Fog, set "ViewDistance" to a value that is equal or larger than "FadeDistance"
**(3)** Apart from VolumeFog settings: NinjaLiveComponent /LivePerformance /LOD settings **AND **ninjaLive Actor /LiveAcitvation also influences distance based behaviour
