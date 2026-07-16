---
doc_type: SET_TOPIC
title: "VISUALIZING A 2D SIM VIA 3D VOLUMES"
date: 2024-07-18
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/1263494728914042930"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

- The relevant PDF: Volumetrics Documentation -- *Chapter 3.3 Heterogeneous Volumes, Initialization*: https://drive.google.com/file/d/1F94t04Dh2HMWQRUMmtGVxwD2Dk6RaN79
- Levels, with many simular examples (2D sim driving 3D volume) to study:
*\Content\FluidNinjaLive\Volumetrics_v2\VolumeGeneric2_SmallScaleExamples_FluidSim.umap*
.
Please study the above resources. Here, I am briefly describing the process:
.
**1.** you already have a 2D sim set up, running, and placed in the World
.
**2.** Drag a HeterogeneousVolume (HVOL) Actor on Level, and set the transforms (position, scale, rotation) match the sim.
Note! --- HVOL size is a combination of its (A) resolution and (B) scale. For example: if we set a 256 x 256 x 256 resolution, and set scale to "1" --- it will be 256 centimeters in size (that is, roughly 2.5 meters). If the ninja TraceMesh is "5" - it means 5 meters. If we drag a HVOL on level, ans et resolution to 256, and scale to 2, that is roughly 5 meters in size. ---- I am sorry this being complicated: EPIC is to be blamed (very silly HVOL size settings!). Also, this is described in the above linked volumetrics PDF, *in Chapter 4*
