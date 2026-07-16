---
doc_type: SET_TOPIC
title: "PACKAGING"
date: 2021-11-10
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/907966108609445889"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

**PACKAGING** vs **TRACE CHANNELS**
(1) Typical packaging error: *"AUTOFIND was unable to match USER defined "TraceChannel" NAME to existing, Project Defined TraceChannels"*
(2) Solution ---> **Manual 14.2.A**:
"trace channel autofind does NOT work in PACKAGED projects - users need to define trace and collision channels manually (in the blueprint) before packaging - this is a global setting - could be forced to all containers by defining trace channel variable values in the NinjaLiveComponent blueprint."
-
This means: you need to open NinjaLiveComponent Blueprint, go to Variables, locate "TraceChannel" and "CollisionChannel" ENUMS and set them to "FluidTrace" (also, check "PreferredTraceChannelName")
.
**More info on packaging**:
[Discord](https://discord.com/channels/850913821240983553/851482546100633601/893419680625213451)
[Discord](https://discord.com/channels/850913821240983553/850926358196125726/1016748754319179816)
