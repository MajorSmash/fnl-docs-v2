---
doc_type: SET_TOPIC
title: "WETMAP"
date: 2026-09-30
source_url: "https://discord.com/channels/850913821240983553/1319654748873560145/1554832283993907310"
author: "Andras Ketzer"
source_channel: "info-bits"
admitted_by: "reviewer-capture:722009818113638480"
scope: LIVE2
version_min: null
version_max: null
media_urls: ["https://cdn.discordapp.com/attachments/1319654748873560145/1554832283477868584/image.png?backend=b2&ex=6abe51e7&is=6abd0067&hm=5e0bdf50552c7d17c4e4951692455d41f213b97ff93c2f1458592bf2f3ffefc6&"]
---

"Wetmap" is an additional feature in ninja, used to improve the visual quality of "watery" scenes, by making surfaces shiny (reducing roughness), where the fluid recently washed them - typically a shore on a coastline, or rocks in a creek.

**Technically**, we are creating a feedback-looped version of the original simulation density. As a result, density values slowly fade out. We call this "wetmap" - and ninja is allocating a dedicated buffer for this: the ALPHA channel of the `VelocityDensity` buffer (where velocity is stored on RG, and density is on B - while wetmap on A).
Note: we can adjust the "fade-out" time of wetness using this param: `/LiveComponent /LiveSimulation /Advanced /WetmapFeedback`

**We can preview** how the raw wetmap looks like, following these steps:
- go to `/LiveComponent /LiveOutputRenderTargets /SimVelocityDensityAndWetmap` and set a RenderTarget to `RT_VelocityDensity`
- open the RenderTarget, hide the R,G,B channels, showing only the **A** channel (alpha)
- start the play, and have a look at the RT: we should see black and white areas on the alpha channel - where the wetmap is WHITE, we are going to apply wetness to environmental objects

**How it send data to the host material:**
- We are writing the `VelocityDensity` buffer to a user defined, on disk (already existing) RenderTarget (RT) every frame:
`LiveComponent / LiveOutputRenderTargets / SimVelocityDesnsityAndWetmap /RT_VelocityDensity = RT_VelocityDensity`
- We are writing the sim pos and sim scale (extents) information to a user-defined Material Parameter Collection (MPC):
`LiveComponent / Set Internal Params to Material Param Collection = MP_NinjaMaterialParamCollection01`

**We are reading both the RT and the MPC in the host material**, where the wetmap should be applied (the sand, the rock). For this, we need to place a dedicated Material Function into the host material: `MF_WetMapFunction`.

**WetMapFunction usage is demonstrated** on multiple levels in the ninja project. One example:
- Level: `Water_Dense_Creek1`
- Actor: `Landscape`
- Material Instance: `MI_Sand_Desert3Mountain_WetMapped_White`
- Base Material for the instance: `M_NinjaOutput_MatFunctionsComposite_EXAMPLE2_wetmapped`
- Material Function: `MF_WetMapFunction`
Please have a look at the material, and how the wetmap function is used.

Two KEY parameters of the wetmap function - exposed in the Material Instance:
- `MaterialParamCollectionAsInput = True`
- `NinjaVelocityDensityBuffer = RT_VelocityDensity`

In case we are using the wetmap in a material, these params should be properly set - this is how the host material is reading ninja sim buffers and ninja sim position data (see below screenshot).
