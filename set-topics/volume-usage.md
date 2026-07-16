---
doc_type: SET_TOPIC
title: "VOLUME USAGE"
date: 2026-03-26
source_url: "https://discord.com/channels/850913821240983553/850913821827792940/1486636309714833518"
author: "andrasketzer"
source_channel: "general"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

Using different rendering technologies / visualization domains inside Unreal is largely constrained by EPIC engineers: they have designed certain technologies for certain usecases / and they can not (easily) be used the other way. Let me provide you with an example:

Clouds-volumes (CVOL) are self-shadowed, lit, raymarched volumes - just like heterogeneous volumes (HVOL).
So... what is stopping us to use HVOL for clouds? Or CVOL to small scale lit volumes? ----> There is a minimum voxel size for cloud volumes: 20 meters. You simply can not scale them down, below a certain range. On the other hand: HVOLs are very detailed in closeups, but forcefully culled in large distances ("you can not see them from large distances").
Regarding fog volumes (FVOL): apart from not casting self-shadows: their voxels are camera frustrum aligned -- in technical terms: FVOL is using FROXELS --- this means, that we lose resolution by distance: look detailed in closeup, and look extremely blocky on large distrances --- this is, because FVOL is not meant to display detail-rich information --- it has been made for smooth gradients over the horizon.

Conclusion: it seems, EPIC engineers optimized certain technologies for a certain, expected usage --- and this can not be easily exploited.
