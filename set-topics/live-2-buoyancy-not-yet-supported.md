---
doc_type: SET_TOPIC
title: "LIVE-2 **BUOYANCY - NOT YET SUPPORTED**"
date: 2026-07-17
source_url: "https://discord.com/channels/850913821240983553/1319654748873560145/1527790446212943932"
author: "Andras Ketzer"
source_channel: "live2-info"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

LIVE-2 **BUOYANCY - NOT YET SUPPORTED**
"Buoyancy" is a very often requested feature. Naively, I would describe it: "make objects float on a given surface"... and for this, we need to tell objects where the surface is.

LIVE-1 does not have an internal "water height" representation. LIVE-2 does. So... theoretically, it would not be too hard, to sample the "water height" buffer at given points - and return the height to the objects. One obstacle I was aware of: the sim runs on the GPU. We sample height on the GPU. The physics stuff that makes objects float - *I assume?* - runs on the CPU... so we need to return data to the CPU... ? (see *"My main question"* below).

Recently, I have made a quick proof-of-concept: [Discord](https://discord.com/channels/850913821240983553/1319655034803458069/1490107149739753502).
The test proved: yes, we can get object pos from the CPU, to the GPU, sample water-height where needed on the GPU, and return the data to the CPU ✅

The test I've done utilizes ninja's EXISTING data pipeline. We already have a mechanism that collects objects inside the sim area (on the CPU), gets their position & size - and forwards the data to the GPU core system. Problem is: in the current pipeline, points lose their "identity" before being forwarded to GPU: the GPU system does not know who's position is being processed. We have a list of points - with position, size and velocity. Numeric data. While we can get height data for these points... and return the data to the CPU... we can't safely re-assign the height data to objects. In order to safely assign the returned height data to ACTORS or COMPONENTS on the CPU side... we would need a register that keeps track of "point identity" (who's position is this?) along the whole pipeline. Not a big deal, but I have to reconstruct the whole data pipeline to achieve this. This is not going to happen before a stable, final LIVE 2.0 release. Probably for LIVE 2.1

Additionally: the plan is, to return not only the "water height" for a given object, but also sim velocity. So... objects will not only float but they could be pushed by sim velocity --- making TWO WAY interaction. *(Currently, objects can push the fluid, but the fluid can not push objects)*

My main Question:
For some reason, I thought, there is a buoyancy function somewhere in UE - and if we feed that with height data, it will magically make objects float. Well... I have found an "experimental" Buoyancy plugin in UE, enabling this: we could add "Buoyancy Component" to any object... which could respont to native UE water bodies... but the buoy component does not have any (height) input... at least I have not found it ??? So... we might not be able to use it for our purposes? But what are we going to use, then?
*(update: **confirmed** - [Discord](https://discord.com/channels/850913821240983553/1319655034803458069/1491100441629556960) - the buoyancy component is made specifically for UE-native water bodies / can not be fed with external params)*

Alternative solutions / until we don't have real buoyancy
1. Making particles float is easy - they run on the GPU. And Mesh particles totally look like objects... See: https://youtu.be/QuCO66Tv8zw?t=309 + https://youtu.be/QuCO66Tv8zw?t=233
2. In case we have a FLAT water surface, we could set up a PhysicsBody, with a Z-constraint (it can not move vertically) -- this object moves "on the surface" like it is floating.
