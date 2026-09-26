---
doc_type: SET_TOPIC
title: "WATER COLOR"
date: 2026-09-26
source_url: "https://discord.com/channels/850913821240983553/1319654748873560145/1553325664445136916"
author: "Andras Ketzer"
source_channel: "info-bits"
admitted_by: "reviewer-capture:722009818113638480"
scope: LIVE2
version_min: null
version_max: null
media_urls: ["https://cdn.discordapp.com/attachments/1319654748873560145/1553325664000807022/water_color.png?ex=6ab8d6c1&is=6ab78541&hm=8d18c3e8f1f07b54e083d847d8b813e369f41e08e689b7570c8f7b5ca3759ea6&"]
---

1. Ninja is using a single generic "surface" base material - consequenctly, all surface Output Material Instances share the same parameters
2. By default, we change the color of our Output Material under the "COLOR" parameter group - but WATER SURFACES are an exception, we adjust water color differently. Here is why, and how:

Ninja uses Unreal's physically based water shader, called "Single Layer Water" (Params described here: https://dev.epicgames.com/documentation/en-us/unreal-engine/single-layer-water-shading-model-in-unreal-engine) --- briefly: as the model is physically based, perceived color is depends on the type of ABSORBED light. Eg, if we set the shader to absorb "red" light, the water seems to be "blue". If the absorption is more intense, the water seems to be darker. See "SingleLayerWaterOps" param group in the output material - screenshot on this link: https://drive.google.com/file/d/1K9mw4qNp4EZeqrOurxnVEQVAif6-FNXl
