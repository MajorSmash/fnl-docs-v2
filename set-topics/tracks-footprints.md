---
doc_type: SET_TOPIC
title: "TRACKS & FOOTPRINTS"
date: 2026-03-06
source_url: "https://discord.com/channels/850913821240983553/1319655034803458069/1479560577914503360"
author: "andrasketzer"
source_channel: "live2-public-discussion"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

LIVE-2 **TRACKS & FOOTPRINTS**, PERSISTENCY
Tracks get erased not by time: but, by space. Ninja is a finite sim. Computation - and the storage of previous computations - happens inside the sim area, typicall a 100x100 meters zone. If you keep moving, the sim area keeps moving with you --- so the tracks that get outside the area, get erased (we simply loose the data ouside sim area as we go). Two ways to go:
1. sim area could be enlarged (see NinjaLiveComponent /LiveCore /SimExtents) - but above 500x500 meters, we start to see pixels.
2. we could detach the sim area from the pawn / keep it locked to a given spatial location - so the footprints / wheeltracks constatly remain there
