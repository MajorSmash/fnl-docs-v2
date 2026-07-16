---
doc_type: SET_TOPIC
title: "UE5 / (LACK OF) INTERACTION"
date: 2021-07-25
source_url: "https://discord.com/channels/850913821240983553/850926358196125726/868960960268890174"
author: "andrasketzer"
source_channel: "ninjalive-issues"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

Thank you all for trying to solve this. Here is what I think:
I can see on your screenshot that you are using **ALS**: ninja core was estabilished when ALS was not part of UE - and officially, ninja does not support ALS. Generally, they work fine together, but you could produce "multiple embedded skeletal mesh structures" in ALS (a SK_Mesh under an other, and another...) - and ninja can not extract bone/socket data from this multi-level embedded hierarchy at all.
