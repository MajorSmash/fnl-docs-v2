---
doc_type: SET_TOPIC
title: "PARTICLES, VERTICAL DISPLACEMENT"
date: 2022-07-26
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/1001385369104822302"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

1. Ninja Blueprints are prepared for writing SINGLE RenderTargets --- you could modify the BPs to make them suitable for RT arrays
2. In my opinion, there are more simple ways to make particles " float in the 3d world":
A. You could spawn particles in a volume, by adjusting the "grid2D", or "Box" emitter setting in niagara. These particles will STILL be driven by a 2D sim data, but spatially dispersed on the vertical axis
B. You could use one of the 2D sim buffers to vertically displace particles (spawned on a flat 2D surface): the pressure buffer is ideal for this: the recent examples (eg. Usecase level 11, 13, 14) all utilize this technology:
- Example 1: particle tests, Usecase 11: https://youtu.be/S5n5Tpd1Gko?list=PLVCUepYV6TvMXN8HQjLU9wKz-G_6JvJsF&t=983
- Example 2: grass debris, Usecase 13: https://youtu.be/UbhPiT_bRR0?list=PLVCUepYV6TvMXN8HQjLU9wKz-G_6JvJsF&t=241
- Example 3: seasurface particles, UC 14C: https://youtu.be/UbhPiT_bRR0?list=PLVCUepYV6TvMXN8HQjLU9wKz-G_6JvJsF&t=111
There is a dedicated niagara module for doing this: *\Content\FluidNinjaLive\Core\Niagara\Modules\VerticalPositionOffset*
