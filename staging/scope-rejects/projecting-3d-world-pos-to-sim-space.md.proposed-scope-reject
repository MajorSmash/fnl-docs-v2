---
doc_type: SET_TOPIC
title: "PROJECTING 3D WORLD POS TO SIM SPACE"
date: 2021-06-18
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/855374230554935306"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

, NinjaLive is a 2D fluidsim, that could interact with 3D WorldSpace actors, by (1) detecting overlap with actor (using a volume), (2) acquiring actor 3D position, (3) starting a linetrace (a ray) from the camera or other user defined point - through the acquired 3D position, (4) where the ray intersects the simulation plane, the HIT is being converted to 2D sim UV --- this is the way how ninja PROJECTS 3D worldspace data to 2D sim space. --- "SupportUVFromHitResult" is an easy and convinient way to perform this projection, as it is a native UE function. Of course, it could be replaced by a custom (user defined) function, built upon a series of matrix transformations - but this is going to be slower than the native UE solution. This is the reason why we use it. Feel free to replace it with own function 🙂
The function to be replaced is located at: /Content /FluidNinjaLive /Core /NinjaLiveFunctions Blueprint /TraceOverlap Function /FindCollisionUV node
More references: Manual / Chapter 1.3
Impact on performance: minor - compared to the fluidsim itself and the shaders (user defined output materials, that could be heavy when using volumetrics and raymarching)
