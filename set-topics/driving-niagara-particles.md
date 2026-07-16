---
doc_type: SET_TOPIC
title: "DRIVING NIAGARA PARTICLES"
date: 2021-08-23
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/879278053765836800"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

** DRIVING NIAGARA PARTICLES** (Fields, Collision)
*FIELDS*: Ninja could write density and velocity simulation buffers to a RenderTarget. In Niagara, we are using the "SampleTexture" native UE function to sample the RenderTarget - and generate local UVs based on Grid2D particle position. "SampleTexture" is accessible ONLY in GPU particle systems (not accessibe via CPU particles).
Niagara examples are demonstrated on Levels 20-A and 20-B
Here is a related video: https://youtu.be/mEtGM6Zrr9I + See Manual, Chapter 20.
.
*COLLISION*: GPU particles could collide with objects using Screen DepthBuffer and DistanceFields. Also, we could let ninja to manage fluid-object collision and the particles (simply by following the field) will avoid objects. See this vid: https://youtu.be/v8d0CalL9oA?list=PLVCUepYV6TvPYbofpEf_ghznfihM-yt-B&t=939
