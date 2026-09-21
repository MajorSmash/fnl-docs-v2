---
doc_type: SET_TOPIC
title: "LIVE-2 PERFORMANCE vs LIVE-1"
date: 2026-08-29
source_url: "https://discord.com/channels/850913821240983553/1460578674695868510/1543170511708626975"
author: "Andras Ketzer"
source_channel: "live2-beta-discussion"
admitted_by: "reviewer-capture:722009818113638480"
scope: LIVE2
version_min: "2.0.0.56"
version_max: null
media_urls: []
---

LIVE-2 PERFORMANCE vs LIVE-1
.
There is a dedicated chapter in the Manual, comparing L1 and L2: [Chapter 15.1](https://majorsmash.github.io/fnl-docs-v2/manual/ninjalive2-manual/#151-comparison)
Comparing performance is a complex task:
1. LIVE-1 uses rendertarget-material feedback chains to process the sim data, while LIVE-2 uses Niagara Grid 2D structures. RenderTarget read-write is a performance bottleneck in Unreal Engine - this was one of the main reasons to refactor ninja under Niagara
2. LIVE-1 implements many features in blueprins, on the CPU, for example: the linetracer that projects the position of interacting objects to the sim space. This is extremely slow, compared to the hashed point management and "distance to simulation grid cell" approach of LIVE-2
3. LIVE-2 is hashing the collected point data - and also capable to read data from DataChannels - typically when we are using particles as simulation inputs

So in general we can say: while the LIVE-1 architecture is more lightweight, and in edge cases, performs better, compared to LIVE-2 (for example: how fast we can initialize a 256 x 256 sim container, and how it performs)... in most usecases, LIVE-2 is performing much better, compared to LIVE1. For example: LIVE-1 can handle 50-100 tracked points before performance drops. LIVE-2 can handle thousands of trackpoints.

It is also a tradeoff situation: in LIVE-1, it was an extremely tedious job to set up landscape aligned volumes and liquids. In LIVE-2 it is almost completely automatic. In LIVE-1, we had to add external system for volumetric rendering - and again, it was a tedious job to connect the external renderer to the core. In LIVE-2, we have interal renderers, completely automatic. LIVE-1 was hard to set up in general: linetracers / trace-channels were a constant problem on the user side. This technology is completely eliminated from LIVE-2, and essentially, there are no setups steps (only non-essential preps, like enabling chaos vehicles - if we want cars in our game). LIVE-1 does not support spline readers. No distance fields support. Particle-input only existed as an "almost impossible to use" kind of setup - while LIVE-2 supports these natively.
In genaral, we can say: LIVE-2 is much easier to use, comes with 10x more features - and in most cases, performs equally, or slighly better than LIVE-1.
