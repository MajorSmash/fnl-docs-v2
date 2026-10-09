---
doc_type: SET_TOPIC
title: "CUTTING THROUGH THE FOG"
date: 2026-10-09
source_url: "https://discord.com/channels/850913821240983553/1319654748873560145/1558204404140609546"
author: "Andras Ketzer"
source_channel: "info-bits"
admitted_by: "reviewer-capture:722009818113638480"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

Ninja is running a raw simulation under the hood: "density is white, lack of density is black" --- and this raw simulation becomes water, or fog, or clouds - depending on the Output Material. The good mindset is to think about the visualization "as a display" (could be anything - fire, water). Also, it is the simulation that interacts with the input objects (meshes, particles) --- so, when we see an object "cutting through the fog" --- the fog volume is just a display, the object does not interact with the fog: it interacts with the sim container, that detects its movement, writes its trajectory to a raw sim buffer - and we can visualize this raw buffer different ways.

**Key: the Display Concept**: See Manual [Chapter 4.8](https://majorsmash.github.io/fnl-docs-v2/manual/ninjalive2-manual/#48-directdrive) and `Tutorial01_Basics.umap / Stage 9` to learn more.

Considering the above: in case our system is "fluidsim driven" (not passive): we can make anything "cut through the density" --- and display it as fog (FVOL) or heterogeneous volume (HVOL) or clouds (CVOL).

Examples:
- `Clouds.umap` / `Setup-5, Titan`: we are using Inverse brush density - and cutting through the clouds.
- `Clouds.umap` / `Setup-6, CloudPainter`: we are using positive brush density - and painting clouds.
- Similar examples could be found on the FVOL and HVOL demo levels, in the `Levels /Misc` Folder.

The key param is `/LiveComponent /LiveInputFields /InvertFieldAndPointDensity` - switching between eraser and positive mode.

Alternatively, we can also go neutral: not adding and not removing density - only injecting the velocity of the moving object to the sim, so it stirs the fog / fluid: see `/LiveInputPoints /BrushKillers /SelectivelyKillBrushDensityKeepVelocity`
