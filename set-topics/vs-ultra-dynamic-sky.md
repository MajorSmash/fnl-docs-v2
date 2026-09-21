---
doc_type: SET_TOPIC
title: "LIVE-2 vs ULTRA DYNAMIC SKY"
date: 2026-09-17
source_url: "https://discord.com/channels/850913821240983553/850913821827792940/1550097414575095939"
author: "Andras Ketzer"
source_channel: "general"
admitted_by: "reviewer-capture:722009818113638480"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

LIVE-2 vs ULTRA DYNAMIC SKY
There are two fields where ninja and UDS might interfere.

1. ninja is capable to generate static and simulated clouds, by directly feeding sim buffers into a Volumetric Output Material, and apply this material to the standard Unreal Engine Volumetric Cloud Actor. Limitation: only one Volumetric Cloud Actor is visible at a time. In the ninja project, there are examples, where Cloud Material Layers are composited by a main HOST volumetric material - and this host is applied to Volumetric Cloud Actor. As a result, we can have multiple "cloud types" at once - for example, a planar cloud layer, and a mushroom cloud. Even without knowing how UDS works, we can predict: the "one cloud at a time" limitation could make it hard to use the two systems (ninja and UDS) together - unless, we try to solve this using the same "layer + host" material combo. Also, ninja can expose internal sim bufferes as RenderTargets (learn more by reading this post: [Discord](https://discord.com/channels/850913821240983553/1319655034803458069/1550086502069829642)) - and these RenderTargets are accessible for USD master materials. UPDATE: UDS 9.7 definitely supports using volumetric material layers.

2. Some sources mentioned that UDS modifies level main light - or introduces a secondary light (for the moon). Ninja Ouput Materials directly reference level main light using the standard Unreal Engine "Directional Light" type node family in the material graph. In case UDS adds a secondary light for the moon, and we are in a moonlit scene, ninja still tries to use the "sun" - this might cause visual problems / inconsystency.