---
doc_type: SET_TOPIC
title: "MEMORY MANAGER"
date: 2021-09-02
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/882953311362375700"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

**MEMORY MANAGER** (briefly explained)
(1) Ninja sim buffers are stored in RenderTargets
(2) Generating RenderTargets in runtime is a performance bottleneck - could be avoided by generating them in advance /pre-emptively -MemoryManager does this
(3) Place a MemManager Actor on level, and enable NinjaLive Actors to Acquire Memory under NinjaLiveComponent/LiveMemoryManagement
(4) More info: read the tooltips, search for Memory Manager in the manual
