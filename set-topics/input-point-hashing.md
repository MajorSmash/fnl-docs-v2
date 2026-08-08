---
doc_type: SET_TOPIC
title: "**INPUT POINT HASHING**"
date: 2026-08-08
source_url: "https://discord.com/channels/850913821240983553/852182166103392286/1535772131068088431"
author: "Andras Ketzer"
source_channel: "off-topic"
admitted_by: "reviewer-capture:722009818113638480"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

"Hashing" in the ninja-context mean: filter input points - based on their distance to a given Niagara Grid 2D Cell.
IF a point is outside threshold distance: skip processing --- so each Grid2D cell processes only nearby points.
Technically, hashing is solved using Niagara "Neighbor Grid" structures
Practical advantage: less calculations. For example: we have 1000 points and 1000 grid cells. Without hashing, we need to perform 1000x1000 calculations each frame to process points. If we filter for nearby points - and on average, each Grid2D cell has 10 nearby points - we have to perform only 1000 x 10 calculations.

See [Chapter 12.5 in the Manual](https://majorsmash.github.io/fnl-docs-v2/manual/ninjalive2-manual/#125-ninja-data-pipeline) "*Point data processing is double hashed:*"
See [Param Descriptor P.1.1.10](https://majorsmash.github.io/fnl-docs-v2/parameters/#parameter-p-1-1-10-neighborcellnumberxy) "*NeighborCellNumberXY*"
