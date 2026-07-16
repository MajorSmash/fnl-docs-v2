---
doc_type: SET_TOPIC
title: "PIPES"
date: 2022-09-16
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/1020306742900445204"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: ["https://cdn.discordapp.com/attachments/851482546100633601/1020306742963351552/rooms.JPG?ex=6a58cb33&is=6a5779b3&hm=90eeae78432ea3c190b2c8a151afeceb07c08923746ac2fb7c56b9e4a19ec39e&", "https://cdn.discordapp.com/attachments/851482546100633601/1020306743194034237/Z-shaped-TraceMesh.jpg?ex=6a58cb33&is=6a5779b3&hm=b82f0de69ea0ec9cbecb6294eecf1973e190549e04580bde78d1a181de100707&"]
---

Say, we'd like to create two rooms, connected with a pipe, and the fluid going from A to B, through the pipe (see attached "rooms.jpg")
HOW COULD WE ACHIEVE THIS?
.
(1) Ninja is a simple 2D sim --- but there are many ways to use it in 3D. In THIS case: replace the default, planar TraceMesh with a Z-shaped mesh (see attached Z-shape.jpg) - This vide explains how to *replace default TraceMesh* with custom: https://youtu.be/CNqf1B3X34Q

(2) Once done with mesh replacement, we need to MASK the simulation area. There is a dedicated feature for this, called **Collision Masking**, demonstrated on *Tutorial Level 3, Stage 7* ---- This video previews: https://youtu.be/v8d0CalL9oA?list=PLVCUepYV6TvPYbofpEf_ghznfihM-yt-B&t=646
You need to paint a mask, as if it would be the floor-plan of the two rooms connected by a channel (fluid area white, excluded are black)

(3) once all set up, we need to inject density to one room --- this could happen many ways (bitmap, overlapping objects, particles) --- the tuts cover this topic well.
Try to Increase the FEEDBACK value to 0.99 or 1.0 at the *Preset Manager* panel - so we get nice persistent flow. Do not forget to set up a directed velocity field (pointing in the downwards direction of your imitated slope). The velo field also could be a bitmap, so you could nicely tweak it (eg stronger on the slope) --- see *Tutorial Level 3* for examples on using density/velocity bitmaps as sim input.
