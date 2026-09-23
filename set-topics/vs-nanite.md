---
doc_type: SET_TOPIC
title: "vs NANITE"
date: 2026-09-08
source_url: "https://discord.com/channels/850913821240983553/1319655034803458069/1546899454488215572"
author: "Andras Ketzer"
source_channel: "▪️basic-support"
admitted_by: "reviewer-capture:722009818113638480"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

- by default, the ninja project is not prepared for nanite usage: we are using **(A) parallax mapping (POM)** and **(B) Vertex WorldPositionOffset (WPO)** to deform landscapes
- in theory, it would not be too hard to modify the ninja surface basematerial (`/Content/FluidNinjaLive/OutputMaterials/Base/M_NinjaOutput_BaseMaterial_SURFACE'`) to support Nanite: we need to channel THE SAME information (simulation density) that drives POM or WPO ---> into the DISPLACEMENT output of the material.
- in practice: Nanite Landscapes don't accept Dynamic Material Instances (ref: https://issues.unrealengine.com/issue/UE-199059), so we can not drive them using ninja *DirectDrive* (see [Manual 4.8](https://majorsmash.github.io/fnl-docs-v2/manual/ninjalive2-manual/#48-directdrive) ), instead, we have to (1) expose ninja sim buffers to on-disk RenderTargets, (2) manually apply a material in advance (before game start) to the nanite landscape, and (3) reference the on-disk RenderTargets in the material.
How to expose RenderTargets? Explained in this post: [Discord](https://discord.com/channels/850913821240983553/1319655034803458069/1550086502069829642)
