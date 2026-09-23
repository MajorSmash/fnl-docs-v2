---
doc_type: SET_TOPIC
title: "<@353627728592896001> 🖐️"
date: 2026-09-06
source_url: "https://discord.com/channels/850913821240983553/850913821827792940/1546153372858581102"
author: "Andras Ketzer"
source_channel: "general"
admitted_by: "reviewer-capture:722009818113638480"
scope: LIVE2
version_min: null
version_max: null
media_urls: ["https://cdn.discordapp.com/attachments/850913821827792940/1546153372279771146/image.png?ex=6ab47fca&is=6ab32e4a&hm=4ccbeec8814cbe310fde57a22a9f4c449f86dcad45cfa5fdc11f10a7e1bd8575&"]
---

<@353627728592896001> 🖐️
SET TOPIC: **MATERIAL FUNCTIONS**
1. Ninja uses a single basematerial for "surface" type objects (non-volumetric objects)
2. This basematerial is only a *wrapper* for a core material function: `MF_NinjaOutput_BaseFunction_SURFACE.uasset`
3. The basematerial function could be included to any material / and works in layered material setups
4. The ninja project includes a few examples, demonstrating how we can combine various material functions. The examples are all located in this folder: `/Content/FluidNinjaLive/OutputMaterials/CompositeExamples_SURFACE`
