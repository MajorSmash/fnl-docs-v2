---
doc_type: SET_TOPIC
title: "DEFINING CUSTOM SIM AREA SHAPE: COLLISION MASKING vs NEGATIVE BRUSH"
date: 2021-07-15
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/865103604758478860"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

Say, you have an interior with objects on the floor - or a landscape with rocks - and you want ninja to AVOID these obstacles.
(1) Obstacles could be outlined using the collision masking function: /NinjaLiveComponent /LiveGeneric /CollisionMask --- see this video: https://youtu.be/v8d0CalL9oA?list=PLVCUepYV6TvOrOfQVLMCxl_JoU_cIkK8P&t=643 --- the mask could be static / pre-generated --- or dynamic, in case you are employing a scene capture camera, get DEPTH, and feed that to a RenderTarget, and provide THIS RenderTarget to ninja as collision mask.
(2) In case your obstacles are meshes/actors overlapping the sim area (like columns, or rocks) you could also set your BRUSH strokes to INVERSE, and tell ninja to detect these obstacles - and use their position to paint negative brush-strokes in a positive (noise)field.
Read more in this post: [Discord](https://discord.com/channels/850913821240983553/851482546100633601/855045105941086240)
+ see vid: the interacting objects in thes scenes are ALL using negative brush strokes:
https://youtu.be/pEp1uZm0YXM --- https://youtu.be/-PvKZDuh3DM --- https://youtu.be/PVhciu0aQtA
