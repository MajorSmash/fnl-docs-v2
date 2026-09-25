---
doc_type: SET_TOPIC
title: "ADJUSTING THE QUALITY OF CHARACTER INTERACTIONS"
date: 2026-09-25
source_url: "https://discord.com/channels/850913821240983553/850913821827792940/1553049465546473493"
author: "Andras Ketzer"
source_channel: "general"
admitted_by: "reviewer-capture:722009818113638480"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

1. brush size
 - usually, we detect SK_Meshes (characters) using their bones - technically: points
 - ninja is "painting strokes" for each point
 - there is an option to adjust brush size - "how big the paint stroke is", here: `/LiveComponent /LiveInputPoints /SkeletalMeshBrushSize`

2. brush velocity
 - the amount of injected velocity also influences how big the ripples are
 - try to adjust the values under the "BrushVelocity" parameter group: `/LiveComponent /LiveInputPoints /BrushVelocity`

3. sim resolution
 - often times, it is the ratio between sim resolution and sim size, that influences, how detailed our ripples are (sim texel density)
 - if the amount of sim texels for a given area is low, the way objects interact with the fluid looks rough
 - we can help with this by reducing the sim area size (ExtentsXYZ), or increasing sim resolution - or both
 - sim speed also matters

4. we can make adjustments in the *Output Material*
 - there is a specific param group called `MeshDistortion` to adjust ripple height - and how ripples are calculated
 - using lower mesh distortion value gives more subtle ripples
 - instead of using `pressure`, we can define `divergence` as distortion source under the "Normals" Param Group - this gives sharper normals and geometry
