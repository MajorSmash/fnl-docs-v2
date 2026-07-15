---
doc_type: SET_TOPIC
title: "dynamic simulations vs limited sim area"
date: 2026-06-17
source_url: "https://discord.com/channels/850913821240983553/1319655034803458069/1516819708102578196"
author: "andrasketzer"
source_channel: "live2-public-discussion"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

Multiplayer: [Discord](https://discord.com/channels/850913821240983553/851482546100633601/1050688301956354088)
.
SET TOPIC: LIVE-2 **dynamic simulations vs limited sim area** ---> very good question ---> multiple ways to solve this.

**A.** we can define a water level that is "automatically filled up" --- ignoring simulation state --- while above the clamping level, simulation is considered. For example, in this lake scene [Discord](https://discord.com/channels/850913821240983553/1319654945254932510/1507485220402757832) the lake is auto filled (no matter what the simulation does) --- but waves added on top of the surface - and fluid washing the shore is dynamically simulated --- so, in case we have a sim area that is **attached to the player**: the shoreline around the player is always simulated, while we see a passive lake surface outside the sim area

**B.** we can use **fixed location** sim area - that is not attached to the player --- like a local branching creek on a rocky hillside --- since the sim is running on a fixed location: it is conserving previous states / works persistently - like in this scene: https://youtu.be/QuCO66Tv8zw?t=256

Of course: we do not have to run "terrain flowing" simulation at all: have a look at this river - water height is defined by the spline mesh itself - and it is persistent through the level: https://youtu.be/QuCO66Tv8zw?t=293 --- ninja is limited to simulate interaction on that surface that is defined by the river spline mesh

In all cases: we can CACHE simulation state. Cache is a single frame snapshot - that we can use to initialize the sim next time.
See this explanatory snippet: https://youtu.be/O57K5Aog7Hs?t=338
