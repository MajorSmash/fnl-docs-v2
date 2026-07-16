---
doc_type: SET_TOPIC
title: "FORWARD RENDERING"
date: 2021-07-11
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/863749905406623785"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

FORWARD RENDERING
**(1)** ninja core fluidsim is like a compute shader: a completely closed feedback loop with own buffers, not mapped on geometry, no surface properties, does not read from screen buffers - it has nothing to do with deferred/forward rendering.
**(2)** the recently introduced pressure solver v2, written in HLSL, is also neutral - tested on DirextX and Android OpenGL ES 3.1.
**(3)** Sim output is channelled to OUTPUT MATERIALS (See this video: https://youtu.be/_HbkZ_X4bRE)
As the video explains, *Output Materials* are completely user editable / user defined - so, it is up to the users if they would like to set them up to meet forward/deferred rendering standards.
