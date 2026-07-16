---
doc_type: SET_TOPIC
title: "PRE-WARM"
date: 2021-12-07
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/917716523181830164"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

There is no pre-warm functionality in NinjaLive - the sim processes in runtime.**TIPS**:
(1) both density and velocity could be driven via textures and materials - and these could be dynamically altered / swapped during gameplay - using this method (and the capture sim buffers function) we could inject a previously captured state of the sim as initial state
(2) since containers could be initialized by player proximity, we could wake them well before getting in to player-sight, reaching ideal state until the player arrives
(3) by setting the *speed* param to a higher value for a glimpse, we could shorten the initialization period
