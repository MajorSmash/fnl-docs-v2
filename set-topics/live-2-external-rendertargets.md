---
doc_type: SET_TOPIC
title: "LIVE-2 EXTERNAL RENDERTARGETS"
date: 2026-09-17
source_url: "https://discord.com/channels/850913821240983553/1319655034803458069/1550086502069829642"
author: "Andras Ketzer"
source_channel: "▪️basic-support"
admitted_by: "reviewer-capture:722009818113638480"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

We can expose ninja's internal simulation buffers to user defiend, on disk RenderTargets.
The functions to do this are located at `/LiveComponent /LiveOutputRenderTargets` - we need to add an existing RenderTarget to one of the empty input slots (for example: `/LiveComponent /LiveOutputRenderTargets /SimVelocityDensityAndWetmap /RT_VelocityDensity` ). Once defined, ninja is writing the referenced sim buffer into the user defined RenderTarget.

**Fact**: exposing the RT does NOT require extra memory. Ninja generates RenderTargets under the hood anyway - as the Niagara Grid2D sim buffers can not be directly exposed to materials. When we define an external RT, ninja simply uses that, instead of generating one internally.

**Note**: besides exposing the (1) paint buffer, (2) sim density and velocity plus (3) sim pressure and divergence, we can also expose sim position and sim extents as Material Parameter Collection, using this function: `/LiveComponent /LiveOutputParams /SetInternalParamsToMaterialParamCollection`

**Pro**: using on-disk RenderTargets, we can expose sim buffers to any materials or systems that might want to read this data - this way, ninja can be easily connected to other game systems / other generators (for example: exposed sim buffers could be composited on top of native unreal engine water bodies)

**Con**: by default, ninja automatically, dynamically generates RenderTargets under the hood - and assigns these to OutputMaterials - and sets the Output Materials on Tagged Meshes - this is called DirectDrive. Very easy to set up (just tag an object, and tell ninja about the tag) - see [Manual 4.8](https://majorsmash.github.io/fnl-docs-v2/manual/ninjalive2-manual/#48-directdrive).
When we are using manually defined external RenderTargets, we need to manage conflicts / to avoid multiple ninja actors using the same RenderTargets. Also: imagine spawning a ninja actor, and wanting it to use external RenderTargets instead of internal - we need to build a separate function to set the RTs to ninja following spawn. Alltogether: external RenderTargets mean more setup steps and possible error sources.
