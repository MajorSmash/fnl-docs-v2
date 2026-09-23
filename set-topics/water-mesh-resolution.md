---
doc_type: SET_TOPIC
title: "WATER MESH RESOLUTION"
date: 2026-09-17
source_url: "https://discord.com/channels/850913821240983553/850924735630278705/1550041089745100932"
author: "Andras Ketzer"
source_channel: "bugs"
admitted_by: "reviewer-capture:722009818113638480"
scope: LIVE2
version_min: null
version_max: null
media_urls: ["https://cdn.discordapp.com/attachments/850924735630278705/1550041089334050918/water_lowres.png?ex=6ab4ccc2&is=6ab37b42&hm=136b39142c8ecfaf887c30982cbbb423e8b75443b39dd7de1ae5b666c5f63865&"]
---

On the coastline level, where water surface is heavily distorted by waves, occasionally, we see the polygons of the water geometry. Water meshing is managed by the `SurfaceAlignedMeshes`utility. LOD is applied. On the closest-to-camera water tile the utility uses 500x500 polygon mesh - covering the 100x100 meters simulated area - which means: we have 5x5 polygons per meter ---- this could be improved by replacing the mesh, on the `Actor Details Panel / User Parameters` of Surface Aligned Meshes.

Alternatively, the blocky visuals are not the result of the low-polygon density of water-mesh, BUT the low resolution of the **Pressure Buffer**.
Pressure Buffer resolution could be improved using this param:
SET `/LiveComponent /LiveOutputRenderTargets /SimPressureDivergence /BufferDownScaleFactor` from 2 to 1
