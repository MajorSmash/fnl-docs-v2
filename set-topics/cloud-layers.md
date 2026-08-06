---
doc_type: SET_TOPIC
title: "**CLOUD LAYERS**"
date: 2026-08-03
source_url: "https://discord.com/channels/850913821240983553/850913821827792940/1533724864362315836"
author: "Andras Ketzer"
source_channel: "general"
admitted_by: "reviewer-capture:200522590853267456"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

A technical limitation we need to address when working with Cloud Volumes (CVOL): Unreal by default allows for a *single* Volumetric Cloud Actor to be visualized. For compound structures - like (A) volcano smoke column + (B) clouds over the vista , or a giant cloud portal with (A) vortex-entrance and a (B) plane in the far background - we need to use cloud LAYERS, which allows us to render multiple, differently configured cloud structures within a single Volumetric Cloud Actor. Layer usage demonstrated on both dynamic and passive cloud example levels (`Clouds.umap`, `Clouds_PASSIVE.umap`)
.
Basic concept: we have Material Layers + a Layer HOST Material, where layers are added. We add layers to the host material, then provide the HOST material for the standard unreal Volumetric Cloud Actor.
.
In practice, we often want to convert a non-layered cloud material into a layered one. For this, we need to take these steps:
1. In Content Browser, locate the folder where all cloud materials, material layers and host materials are located: `/Content/FluidNinjaLive/OutputMaterials/CVOL`
2. duplicate any existing cloud `Material Layer Instance` asset. Material Layer asset names always start with these strings: `ML_Layer_CVOL`
3. open up the Material Layer Instance
4. open up the non-layered (regular) cloud material instance we would like to convert to layered. Regular Cloud material names start with these strings: `MI_CVOL`
5. with TWO material instance panels opened (layered, non-layered), we need to copy-paste parameter setting from the regular material to the layered material. We can do this in GROUPS: both material types contain the same NINE param groups - like `Color`, `Density`, `Emissive` ... etc. Right click on one group in the regular material, choose "*Copy All Properties in Group*". Switch to the Layered Material Instance, right click the same group, and choose "*Paste All Properties in Group*".
6. Once finished with param group transfers, save the layered material.
7. Once all needed layers are produced, duplicate any existing host material (name always starts with these strings: `MI_LayerHost_CVOL`) and add the layers to the host.
8. Provide the Volumetric Cloud Actor on a level with the newly forged host material.
