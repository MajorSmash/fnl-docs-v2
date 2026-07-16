---
doc_type: SET_TOPIC
title: "HQ SETTINGS FOR CINEMATIC RENDER"
date: 2021-11-18
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/911014671102930995"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

- Manual Chapter 23.: "Sequencer & Movie Render Queue" is more like a setup guide --- so, I am trying to summarize HQ related settings this here 😆
.
- NinjaLiveComponent /LivePerformance: by increasing resolution, you could get some details - but carefully, as it changes fluid dynamics
- Ninja and Volumetric Systems are communicating through RenderTargets: make sure the bridge RenderTG's resolution is the same as LivePerformance /Resolution
- you could look up NinjaLiveComponent /LivePerformance and set "UsePressureSolver1" to TRUE., while setting the number of pressure iterations from 5 to 32 or 64, this gives way better turbulence results
- Volumetrics: check Manual chapter 24 for details, briefly:
- VolumeFog: set "r.volumetricfog.gridpixelsize" to a low value - UE default is 8, on Level 23 we set this to 6 in the level blueprint, but size 2 is ideal / gives the most details (console command: "r.volumetricfog.gridpixelsize 2" )
- VolumeClouds: visit Level 24 and check the quality related settings listed besides the VolumeCloud Actor, on level
- VolumeSmoke: in the output material you could adjust ShadowStepSize (not recommended) - and you could enhance scenes by allowing 3D volumetric noise --- see Level 30 for examples and performance descriptions + this post: [Discord](https://discord.com/channels/850913821240983553/851482546100633601/910846902734565396)
... umm... shortly this is it. If something pops in, I'll extend this post 🖐️
(Edit 1: Student Version doesn't contain VolumeSmoke)
