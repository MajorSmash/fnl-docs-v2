---
doc_type: SET_TOPIC
title: "TRACKING BONES"
date: 2021-12-17
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/921416467281489940"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

- Ninja uses CPU line-tracing to project 3D points to the 2D sim space
- this is a bottleneck, above 30-40 tracked points, performance is getting hurt
- when NO BONE NAME FILTER PROVIDED, ninja is trying to track the full mannequin skeleton (with all finger jonts! --- auch 🥶 ) --- that is 100+ bones
- to optimize this: we have bone-name filtering:
---- see NinjaLive ACTOR /LiveInteraction /OverlapFilterInclusiveBoneNameExact
---- see NinjaLive COMPONENT /LiveInteraction /ContinuousInteractionBoneNamesExact
- by providing a carefully selected 12-piece bone set to ninja, the fully body could be covered (absolutely no need to track ALL bones)
- most of the time, we need only 2-4 bones (hands, feet)
- pls have a look at the provided examples / read the manual / watch the tut vids --- where all this is explained / demonstrated
