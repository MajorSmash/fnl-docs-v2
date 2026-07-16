---
doc_type: SET_TOPIC
title: "KOMPLEX VFX PLAN - SUBMERGING SHIPDECK"
date: 2021-06-21
source_url: "https://discord.com/channels/850913821240983553/850913821827792940/856511482372030484"
author: "andrasketzer"
source_channel: "general"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

, thanks for checking in! - yeah, this sounds like a komplex plan.
I imagine the case like a partially-water covered / semi-submerged shipdeck. My first ideas:
(1) the ship deck (main floor) could be outlined using the collision masking function: https://youtu.be/v8d0CalL9oA?list=PLVCUepYV6TvOrOfQVLMCxl_JoU_cIkK8P&t=643
(2) the water surface texture (waves, noise) could be delivered by using noise textures and offset them / or by materials - see this example: https://youtu.be/v8d0CalL9oA?list=PLVCUepYV6TvOrOfQVLMCxl_JoU_cIkK8P&t=589
(3) the INTERTIA (lagging of fluid motion compared to the ship-body) could be switched on, using this feat (WorldSpaceVelocity) - I made it EXACTLY for this kind of situation: https://youtu.be/0O11SNavhM4?t=778
(4) interacting agents (fall-down objects, static deck elements like poles and of course pawns) could be handled with inverse brush strokes: their velocity is adding to the sim, and their position is used as a negative brush, subtracting from the noise (that makes the generic surface patterns) - same video ref as (2) - this time, watch the pawn.
(5) finally, floating debris, or pieces could be added to the surface, using niagara mesh particles: https://youtu.be/v8d0CalL9oA?list=PLVCUepYV6TvOrOfQVLMCxl_JoU_cIkK8P&t=938
