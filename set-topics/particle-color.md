---
doc_type: SET_TOPIC
title: "PARTICLE COLOR"
date: 2022-09-27
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/1024246491927302145"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

**(1)** the dust and snow particles on Usecase levels are set up to respond to scene lighting. This is achieved by using the standard AtmosphericLightColor & AtmosphericLightVector nodes in the particle material. In some cases, the particles might seem to dark / light.
**(2)** Node usage could be switched off in the particle material instance: "UseAtmosphericLightToShadeParticles", "UseAtmosphericLightVector", "AtmoLightMin"
**(3)** How to locate the particle material: select NinjaLive Actor, then Niagara Component - locate referened system: (eg. "NS_Sand3_ReadOutput4"). Open the system, and at the emitter top: locate material.
**(4)** In case the params in the Material Instance do not help: you could try editing the particle base-material - and add UDS specific nodes: *M_SpriteMaterial_Heavy_AfterDOF*
