---
doc_type: SET_TOPIC
title: "COASTLINES, RIVERBANKS"
date: 2024-02-07
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/1204727485716107295"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

The "water-meets-coast" case is yet unhandled in ninja. Workarounds:

(1) OPTICAL: if we switch/swap the nice "single layer water" shader to translucent, the "depthfade" function becomes available - this function could detect distance from a surface, and we could use this to change color/foam/opacity at the riverbank (see INCLUDED translucent water materials, search for "transluc" in content browser)
Optionally, if we'd like to keep "single layer water" (which is opaque / not translucent) - we could add a "distance to nearest surface" node to the ninja worldspace basematerial (*M_NinjaOutput_WorldSpaceGeneric.uasset*), which does the same as "depthfade", but *not* in the the screen depth buffer, but using global distance fields.

(2) PHYSICAL: we could use collision mask to make the ripples/currents "bouce back" from a wall -- see Tutorial Level-3 / Stage 9: https://youtu.be/v8d0CalL9oA?list=PLVCUepYV6TvPYbofpEf_ghznfihM-yt-B&t=643 --- the problem is: collisiojn mask is, by default LOCAL (can not be used with a player attached world-space container) --- but the hope is not lost: a user successfully converted it to WorldSpace: [Discord](https://discord.com/channels/850913821240983553/851482546100633601/1117460719298945084)
.
Another "tips" post covering the topic: [Discord](https://discord.com/channels/850913821240983553/851482546100633601/1176498081492107314)
A related post: [Discord](https://discord.com/channels/850913821240983553/850913821827792940/1212454417429831710)
