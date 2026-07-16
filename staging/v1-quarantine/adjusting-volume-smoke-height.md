---
doc_type: SET_TOPIC
title: "ADJUSTING VOLUME SMOKE HEIGHT"
date: 2023-10-12
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/1161946500415377448"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

1. Select NinjaLive Actor
2. Select LinjaLive Component
3. Locate "LiveGeneric" param group
4. Locate Teriary Output Materials
5. Open the 3rd outmat: "MI_VolumeSmoke_DirLit_Noisy_Snow"
6. Locate "Shading" param group
7. Adjust "Extrude" and "ExtrudeSoften" values

In general:
- by studying VolumeSmoke Tutorial levels (Tut.Level 30, 31)...
- ...and Volume Tutorial vids (on this playlist: https://www.youtube.com/playlist?list=PLVCUepYV6TvPYbofpEf_ghznfihM-yt-B)
- ...and Manual Chapter 24 ([Discord](https://discord.com/channels/850913821240983553/850925841793941565/855091427393273866))
... helps to understand Volumes better.
