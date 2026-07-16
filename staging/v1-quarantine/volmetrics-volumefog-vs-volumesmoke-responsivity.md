---
doc_type: SET_TOPIC
title: "VOLMETRICS --- VolumeFog vs VolumeSmoke --- responsivity"
date: 2022-08-14
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/1008271345102102548"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

1. Ninja supports 3 kinds of volumetrics, see **Manual Chapter 24 ---> Fog, Smoke and Clouds**
[Discord](https://discord.com/channels/850913821240983553/850925841793941565/855091427393273866)

2. The name does not determine what these could be used for ("fog" could be used for smoke, and vica versa)
3. Comparing the three systems: FOG is the "least-responsive" : and UE5 fog-default settings make it even worse, compared to UE4.
4. VolumeFog is a UE native volumetric system, and there are a multitude of console commands that could be used to set it up.
Pls. have a look at the Level23 level-blueprint: while "*r.volumetricfog.gridpixelsize*" and "*r.volumetricfog.gridsizez*" adjust fog RESOLUTION, "*r.volumetricfog.historyweight*" adjusts *TEMPORAL LATENCY* -- "how long the fog lingers on" --- setting a lower value causes a more responsive behaviour -- BUT: since VFog uses temporal antialiasing, the more responsive version will look more noisy / the low resolution becomes even more obvious.
.
All in all: **VolumeFog **is good for slow moving, large scale, lit environmental FX ---- for fast, responsive FX: use **VolumeSmoke**
