---
doc_type: SET_TOPIC
title: "AVOIDING RENDERTARGET CONFLICT"
date: 2021-09-09
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/885512724958834708"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

Volumetric containers work by reading ninja sim output using a RenderTarget.
When two ninja is writing the same RenderTarget: we have a conflict -- the RT flickers.
**Manual, Chapter 24** describes how to set up/maintain volume-contsiners. Here is a base description on data flow.
.
*DATA FLOW*
.
**1. Creating RenderTargets (in advance)**
You could create RenderTargets in the Content Browser, right click / Materials and Textures /RenderTarget.
.
**2. Writing Sim output to RenderTarget(s)**
(a) Select a NinjaLive container
(b) Select NinjaLiveComponent
(c) Go to LiveGenric, Locate External RenderTargets: this is where you define the RenderTargets that Ninja is going to WRITE.
.
**3. Reading RenderTargets**
(a) Select a VolumeFog container (on level, represented by a StaticMesh, called VoluCube*)
(b) Go to Actor Details Panel, Locate VolumeFog Material Instance
(c) Open M.Instance: locate Input/Texture: this is where you define the RenderTarget that drives the Volumefog (READ).
.
Make sure that ALL active ninjalive container are writing to SEPARATE / DIFFERENT RenderTargets.
Make sure a given VolumeFog container Reads the proper RT.
Related post: [Discord](https://discord.com/channels/850913821240983553/851482546100633601/881167786724966440)
