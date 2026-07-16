---
doc_type: SET_TOPIC
title: "Global"
date: 2022-07-05
source_url: "https://discord.com/channels/850913821240983553/850913821827792940/993774029230047303"
author: "andrasketzer"
source_channel: "general"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

**Global** Pattern Generators vs** Local** Fluidsim
Let us resolve this "water, in editor" mystery! 🤣
.
1. place any mesh on level
2. apply any material on it (and you will see this material in the editor viewports, off play)
3. tag the mesh to be identified by ninja and add a material to ninja that is going to be...
 (a) supplied with params and sim buffers automatically and
 (b) applied to the tagged meshes AT PLAY
.
So: you see the "placeholder" material in editor -- could be a grey checker as well, has nothing to do with the event at play.
Ok... but why does it look like water? And it is moving! ---> yes, as Manual Chapter 29 describes: Ninja combines LOCAL fluidsim with GLOBAL pattern generators to create infinite fields ---> the placeholder materials used on water-type usecase levels are derived from the same BaseMaterial (M_NinjaOutput_WorldSpaceGeneric) as the ones used DURING PLAY --- so you could see them in editor running "headless" --- only the pattern generator / no fluidsim
