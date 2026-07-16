---
doc_type: SET_TOPIC
title: "USING RENDERTARGETS"
date: 2021-08-28
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/881167786724966440"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

A RenderTarget is a special texture: content is written dynamically - so, it is like an empty container - could store anything.
.
(1) Ninja simulation works like a machine with multiple "processing stages" aka. "buffers" (eg. density, velocity, pressure) - each stage uses an INTERNAL rendertargets - you do NOT see these in the Content Browser ("not exposed")
(2) Under NinjaLiveComponent /LiveGeneric, there is a group of options to EXPOSE internal rendertargets: WRITE THEM TO DISK
(3) You could POINT ninja to a pre-created (user made) on disk RenderTartget, and Ninja will write a given buffer to a given, on-disk RenderTarget
(4) Exposed RenderTargets serve as a BRIDGE between ninja an Volumetric Systems. Ninja WRITES Rendertargets - and Volumes READ these.
(5) It is up to the users to set up the proper MATCHING / PAIRING: a *SimContainer* at a given level location writes the output to a given RT, and the *VolumeContainer* at the same level-location should read the same RenderTarget.
(6) Many ways to fail (eg.: you duplicate a sim container, and two ninja tries to write the same target - or two volumes read from the same target...etc.)
.
Have a careful look at **Manual, Chapter 24 - Volumes**. It explains this all, and contains a step-by-step guide on how to set up such systems.
Related post: [Discord](https://discord.com/channels/850913821240983553/851482546100633601/885512724958834708)
