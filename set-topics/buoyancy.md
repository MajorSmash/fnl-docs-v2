---
doc_type: SET_TOPIC
title: "BUOYANCY"
date: 2022-09-30
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/1025315719770017802"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

1. Ninja does not natively support UE buoyancy. It is a 2D sim, and 3D systems are generated via height extrusion of various sim buffers
2. Water height is defined by pressure sim buffer float values. Objects could follow the surface IF we could provide them with height data
3. The pressure buffer is a RenderTarget calculated on the GPU --- and it could be efficiently sampled on the GPU - so **particles, particle meshes** and **vertex shaders** natively use this --- On the contrary, for StaticMeshes and PhysicsBodies (where position is calculated on the CPU) the pressure buffer should be sampled by super slow CPU methods in blueprints. This is feasible, if we sample only a few discrete points (there is a SampleRenderTarget node in BP)
.
Related posts: [Discord](https://discord.com/channels/850913821240983553/851482546100633601/897500010072133733) + [Discord](https://discord.com/channels/850913821240983553/850913821827792940/1065394668415750336) + [Discord](https://discord.com/channels/850913821240983553/850926358196125726/1258400937651998802)
.
**UPDATE: GPU readback: a new niagara based technique to send GPU data to CPU-land:** [Discord](https://discord.com/channels/850913821240983553/850913821827792940/1157035580480307251)
Briefly: using the "Export Particle Data" Niagara node, with 3 hardwired channel (two vec3, one float) - combined with the "Receive Particle Data" Event in Blueprint land, we can export GPU sampled sim buffers to blueprints (and build functions that make objects "float" on the fluid surface)
+ with a linked tutorial: [Discord](https://discord.com/channels/850913821240983553/850913821827792940/1149667363315253268)
+ video, demonstrating the proof-of-concept: [Discord](https://discord.com/channels/850913821240983553/850922331878588416/1149898214217105408)
