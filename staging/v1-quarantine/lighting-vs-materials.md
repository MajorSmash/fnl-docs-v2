---
doc_type: SET_TOPIC
title: "LIGHTING vs MATERIALS"
date: 2022-08-11
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/1007351081568841778"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

**1. Volumetric Basematerials** - 3 types: Fog, Smoke, Clouds
*/Content/FluidNinjaLive/Volumetrics/BaseMaterials/*
Described in: Manual Chapter 24, Volumetrics
There is a table there with LIGHTING types. According to this:

Fog: NO response to direct lighting (only point lights)
Clouds: responds to direct lighting, but no explicit nodes in the material (hardcoded in the UE handler)
Smoke: responds to direct lighting WHEN switched to "DirectLit" mode - in this case explicit "AtmosphericLightVector" and "AtmosphericLightColor" nodes are used --- when in point lit mode: a user proveded object is being tracked "as lightsource" (not necessarily a pointlight / any object will do)
Switching between Unlit/DirLit/PointLit modes happens IN THE MATERIAL.
.
**2. Standard Basematerials**
*/Content/FluidNinjaLive/OutputMaterials/BaseMaterials/*
NO "AtmosphericLightVector" or "AtmosphericLightColor" used.
3 materials (M_NinjaOutput_Advanced + M_NinjaOutput_TranslucentReflective + M_NinjaOutput_WorldSpaceGeneric) contain a 2D Raymarch function, that could use both LIGHT VECTOR and POINT LIGHT.
Switching between DirLit/PointLit modes happens AT THE NINJA COMPONENT DETAILS PANEL /LiveRayMarching
Key param1: "LightDirectionProvider" --- Level Dir light OR any object could be picked
Key param2: "LightDirectionSourceIsRotationNOTPos" --- this switch decides whether object rotation or position is used for the 2D Raymarcher
