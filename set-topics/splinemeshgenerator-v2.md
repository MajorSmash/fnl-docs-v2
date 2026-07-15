---
doc_type: SET_TOPIC
title: "SplineMeshGenerator v2"
date: 2025-01-21
source_url: "https://discord.com/channels/850913821240983553/1319655034803458069/1331274512959930500"
author: "andrasketzer"
source_channel: "live2-public-discussion"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

**SplineMeshGenerator v2** [Discord](https://discord.com/channels/850913821240983553/1319654945254932510/1331249742164000882)

1. "*tile width*" and "*tile length*" are global params
2. user picks a mesh, to-be-tiled along the spline
3. by setting "*tile width*", we control width (expansion, perpendicular to the spline-tangent)
4. by setting "*tile length*" we control how long each tile is stretched along the spline (before repeated)
.
IF "*tile width*" = "*tile length*", our mesh is tiled along the spline without aspect-ratio-distortion (say, we had a square, and we'd like to keep it square)
