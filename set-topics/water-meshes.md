---
doc_type: SET_TOPIC
title: "WATER / MESHES"
date: 2022-07-14
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/997067383241973812"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

** WATER / MESHES** 🌊
Usecase 1 demonstrates simple water usage -- Manual Chapter 29 and the "features" video explains: https://youtu.be/S5n5Tpd1Gko
Briefly: DIRECT DRIVE is applying a ninja-managed water material ON ANYTHING that is TAGGED. It could be...

**(A)** simple static mesh --- or it could be...

**(B)** Virtual HeightField Mesh (THE ideal solution, google it!)
+ [Discord](https://discord.com/channels/850913821240983553/850913821827792940/1060338955779838113) + [Discord](https://discord.com/channels/850913821240983553/850913821827792940/1060373908823486514)
On this video tutorial, the Creator of ShaderWorld plugin is configuring ninja to use VirtualHeightFieldMesh as water geometry: https://youtu.be/ipd4YIhx8o0?t=193 + https://www.youtube.com/watch?v=J_enETn1VY0

**(C)** it could be the way as the example demonstrates: INSTANCED STATICMESHES with LOD.
Add (or spawn) an empty actor to level. Add an InstancedStaticMesh COMPONENT to the Actor. At the component details, provide the instance with an ACTUAL MESH to be instanced --- in my case, it is a mesh with pre-defined LOD levels --- as you distance from the mesh, its "resolution" gets lower.
You could create arbitrary number of copies of the provided mesh and set their transforms - also at the Component Details Panel.
Finally, tag the mesh(es) to be recognized by ninja.
.
More related posts: [Discord](https://discord.com/channels/850913821240983553/850913821827792940/997065106238214234), [Discord](https://discord.com/channels/850913821240983553/850913821827792940/1008452832929796107), [Discord](https://discord.com/channels/850913821240983553/850913821827792940/1207833565975421019)
Using Unreal's auto tessellation systtem: [Discord](https://discord.com/channels/850913821240983553/850913821827792940/1207836657655480340)
