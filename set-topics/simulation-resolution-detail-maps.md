---
doc_type: SET_TOPIC
title: "SIMULATION RESOLUTION + DETAIL MAPS"
date: 2021-07-14
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/864840453782110228"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

How could we make our simulations high-resolution / how could we add details to the simulation
.
(1) The most simple, brute force method is to set simulation resolution higher. Have a look at...
**Level 14-C, Stage-4**: **4K** sim container with tiled density texture
**Level 10-A, Stage-5**: **3K** container with tiled density texture
While 4K containers are extreme, 2K and below could be used routinely, like the rest of **Level 10-A** and **Level-8** with HD resolution containers.

(2) Higher sim resolution means higher GPU demand. There are other, far **less demanding ways to increase the amount of details: **imposing **DETAIL MAPS** on top of the simulation, flow-map style. Sim velocity is used to advect ("make-flow") a user defined, tile-able texture (mostly noise, but could be anything). Detail mapping is implemented in many ways.
(A) **Level 29** demonstrates how simple 2D (non-volumetric simulations) could be enhanced,
see this vid: https://youtu.be/v8d0CalL9oA?list=PLVCUepYV6TvOrOfQVLMCxl_JoU_cIkK8P&t=376 and Chapter 25 in the manual.
(B) Two Volumetric Systems (Clouds and Smoke) also uses detail maps, but these are 3-dimensional volume textures - advected by sim velocity. Since volume noise is also tile-able, the level of detail is completely arbitrary.
**Levels 24-28** demonstrate Clouds, https://youtu.be/C7mSXCOUQ5I?list=PLVCUepYV6TvOrOfQVLMCxl_JoU_cIkK8P&t=229 --- while** Level30 Stage 5A-5B** compares two systems without/with detail map + see this vid: https://youtu.be/2Tg2QfB1wC0?list=PLVCUepYV6TvOrOfQVLMCxl_JoU_cIkK8P&t=472
