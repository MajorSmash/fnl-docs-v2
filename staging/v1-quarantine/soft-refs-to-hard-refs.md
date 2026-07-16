---
doc_type: SET_TOPIC
title: "SOFT REFS to HARD REFS"
date: 2024-07-31
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/1268277735827177653"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: ["https://cdn.discordapp.com/attachments/851482546100633601/1268277735424393316/softref-to-hardref.jpg?ex=6a587d6f&is=6a572bef&hm=3d6d6c71ec171fec9361caf371ed91417c8ae090cc90f698835bf044729f2b16&"]
---

*"I'm seeing vastly different results between PIE and a packaged build"*
Typically caused by: a simulation using density or velocity textures as input - can NOT access these assets in a packaged project (unless prepared for this).
---> Please carefully study *Manual Chapters* ** 14.2** (Compiling) and **21.3.6** (Compatibility)
---> Briefly: you need to replace **Soft References** (stored in the preset file) with **Hard References** under *NinjaLiveComponent /LiveCompatbility*
 See this screenshot *(a preset with SOFT refs vs NinjaLiveComponent /LiveCompatibility HARD refs)* - [Discord](https://discord.com/channels/850913821240983553/851482546100633601/1268277735827177653)
 Defining Additional Cooking Directories is **not satisfactory**!
 Look for "Dynamic Asset Replacement" (DAL) methods in the Manual
..
**More info on packaging**: [Discord](https://discord.com/channels/850913821240983553/851482546100633601/907966108609445889)
