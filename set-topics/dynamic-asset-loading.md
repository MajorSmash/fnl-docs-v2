---
doc_type: SET_TOPIC
title: "DYNAMIC ASSET LOADING"
date: 2021-07-09
source_url: "https://discord.com/channels/850913821240983553/850913821827792940/863172491626676274"
author: "andrasketzer"
source_channel: "general"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

DYNAMIC ASSET LOADING
 welcome! + , re 🙂
(1) your solution to the dynamic asset loading problem is ingenious! 🙂
[Discord](https://discord.com/channels/850913821240983553/850926358196125726/862709556004782122)

(2) Ninja also offers solutions to this case, please have a look at:
**Manual **PDF, Chapters **17.5** and **21.3.6** + **IssuesAndFAQ** PDF,** i005**

Brefly summing it: Preset files could refer to bitmaps as density and velocity inputs. The preset stores only the bitmap's name and looks up the file at sim initialization. This gives flexibility to the system, we could easily swap images and experiment. On the other hand: once done with experimenting and a preset file is "final", the parsing/lookup feature is not needed anymore - we could bypass it and "hardwire" a bitmap input to the blueprint, using the below options:
*NinjaLiveComponent Details /LiveCompatibility /Overwrite Preset Density Input and /Overwrite Preset Velocity Input*
