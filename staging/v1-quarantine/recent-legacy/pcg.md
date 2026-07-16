---
doc_type: SET_TOPIC
title: "PCG"
date: 2025-09-18
source_url: "https://discord.com/channels/850913821240983553/850913821827792940/1418149816634183721"
author: "andrasketzer"
source_channel: "general"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

🖐️ --- thanks for bringing this up! Brief answer: no
PCG (Procedural Content Generation)
1. As I see, the PCG system inside unreal, is a large, compact framework - similar to Niagara (being a large, compact framework)
2. NinjaLive Gen-1 was working using the "blueprints + materials" paradigm. With the upcoming Live Gen-2, we are moving to Niagara. Besides implementing the fluidsim core in niagara sim stages: we are making use of niagara's Data Interfaces to handle interactions and collect data
3. While Niagara and PCG could cross talk: they are SEPARATE systems. NinjaLive 2 could be (could have been) implemented under PCG as well - as PCG supports similar methods to niagara- but, this is not being the case: we are using niagara, and not PCG as the core for Live Gen-2.
4. Making Gen-2 work together with PCG is on the to-do list: once a stable 2.0 release has been achieved. Probably, this is going to happen by "reaching out" to PCG interfaces using Niagara Data Interfaces - to get data from PCG - and arrange ninja behavior accordingly.
Hope this answers your question 🤓
