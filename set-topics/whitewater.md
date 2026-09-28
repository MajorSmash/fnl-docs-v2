---
doc_type: SET_TOPIC
title: "WHITEWATER"
date: 2026-09-28
source_url: "https://discord.com/channels/850913821240983553/1319654748873560145/1554040445686906910"
author: "Andras Ketzer"
source_channel: "info-bits"
admitted_by: "reviewer-capture:722009818113638480"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

When water collides with objects or moving turbulently, it is becoming foamy - we call this "whitewater". Typically wave crests, water splashing on rocks, waterfalls, rapids.
In the ninja project, whitewater consists of two visual components: material shaders and particles

1. we use material shaders to generate foam at the water surface, in most cases.
 A. in the simulation area, we are using the `FlowMap` function group of the Output Material. Key parameters are `EnableFlowDetailsNoise` (should be set to `True` in order to have this function running) and `MaskFlowMapWithCameraDistance` - which could be used to fade in and fade out the flowmap - depending on its distance from the camera
 B. in the simulated area and outside the simulated area, we are using the `TileMap` function group of the Output Material. Tilemaps are mainly made to generate passive (non-interactive) patterns for the mid and far background - and we usually fade them out close to the camera, using the `MaskTileMapWithCameraDistance` parameter.

2. occasionally, we use particles, to further improve the look of the whitewater. The particle emitter is usually added as a Component to NinjaLive Actor. We have a similar "distance to camera" based fade option implemented in the material applied to particles. We can access the particle material by looking up the Particle Component at the Live Actor Details Panel, selecting the component, and at the Component Details Panel, locate the `User Parameters` param group. In `User Parameters`, under the `Renderer` subgroup, we find the `SpriteMaterial` Parameter, where we can access the Material applied to the particles. By opening the Material, at the Material Instance Details Panel, we will find a parameter group named `DistanceFade` - params in this group are responsible to fade the particles - if close to the camera. We can adjust this or this off.

A related post: "Surface Aligned Particles Glitch"
- Discord link to the post: [Discord](https://discord.com/channels/850913821240983553/850924735630278705/1550240740293091450)
- Online version of the post: https://majorsmash.github.io/fnl-docs-v2/set-topics/live-2-surface-aligned-particles-glitch/
