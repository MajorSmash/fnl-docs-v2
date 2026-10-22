---
doc_type: SET_TOPIC
title: "UNREAL ENGINE 6 vs FLUIDNINJA LIVE-2"
date: 2026-10-22
source_url: "https://discord.com/channels/850913821240983553/1319654748873560145/1562729717323407440"
author: "Andras Ketzer"
source_channel: "info-bits"
admitted_by: "reviewer-capture:722009818113638480"
scope: LIVE2
version_min: null
version_max: null
media_urls: ["https://cdn.discordapp.com/attachments/1319654748873560145/1562729716811571200/ninja_UE6_compatibility.jpg?ex=6adb0cf6&is=6ad9bb76&hm=23d9f3fb2c2cfe95e2f0683fb5ad5870488d4ec08037f151acddaa780dfecdcf&"]
---

Can we use FluidNinja LIVE-2 under Unreal Engine 6?
Brief answer: probably not. This post explains why.

1. While all the core ninja functions reside in a Niagara based core - most of the management functions are implemented in the Blueprint, that wraps the niagara core. Learn more about the ninja software architecture by reading [Manual Chapter 2, Assets for setup Building](https://majorsmash.github.io/fnl-docs-v2/manual/ninjalive2-manual/#2-assets-for-setup-building).
2. According to [information revealed at the October 2026 Unreal Fest, Shanghai](https://x.com/CobraCodeDev/status/2113150581955297577): keeping Blueprint support is NOT one of EPIC's requirements for early versions of UE6 anymore and support might already be completely removed right at the beginning.
3. The conclusion coming from Point-1 and Point-2: unless all blueprint functions are implemented in Verse (the new programming language of UE6), ninja will NOT be compatible with UE6.
4. Alternative solution: ninja niagara core is a completely functional standalone unit with UI params exposed - see [Manual Chapter 2.3, Niagara Core](https://majorsmash.github.io/fnl-docs-v2/manual/ninjalive2-manual/#23-live-niagara-core) - and there are tutorial levels that demonstrate how to use Ninja Core WITHOUT the blueprint wrapper: `/Content /FluidNinjaLive /Levels /CoreOnly`. Note: the lack of blueprint wrapper functions make it harder to to use ninja - requies more effort on the user side.
