---
doc_type: SET_TOPIC
title: "SETTING UP WATERLINE"
date: 2026-09-24
source_url: "https://discord.com/channels/850913821240983553/1319654748873560145/1552786725871419423"
author: "Andras Ketzer"
source_channel: "info-bits"
admitted_by: "reviewer-capture:722009818113638480"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

In the ninja project, there is no built-in support for waterline - read more [here](https://majorsmash.github.io/fnl-docs-v2/manual/ninjalive2-manual/#149-waterline-and-underwater). But, we have tips for building waterline feature.
We have two ways to set up a waterline: [Discord](https://discord.com/channels/850913821240983553/852182114233352252/1547999171720519811)

1. The **stencil buffer** method: we can set up objects to write to stencil buffer (where the object is visible for the camera, we have a "true" value / any other parts of the screen: false ) - and we can access this mask in postprocess materials --- so, in case we are able to set up an object - or a set of objects - that covers the underwater, we can use this to mask our postprocess volume. Hew ever: it has remained a mystery, how we set up such object(s): [Discord](https://discord.com/channels/850913821240983553/852182114233352252/1548033283030388877)

2. The **heightmap method**: we capture a small heightmap of the water surface (as small as the camera frustrum) using a top-down SceneCaptureCamera, and transform the captured height into camera space - and use THAT as a mask for the postprocess volume.
