---
doc_type: SET_TOPIC
title: "COPY-PASTING NINJA"
date: 2021-10-15
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/898461977398108170"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

(1) By default, ninja is a 2D sim - that could be mapped on both FIXED surfaces (like a puddle surface) or CAMERA FACING planes (like a column of smoke).
Simulation containers (NinjaLive Actors) using the default mode (sim mapped on a local surface) are simple, self contained and could be easily copy-pasted from level to level. Once thing you might want to keep in mind: even simple containers contain references to objects, that are specific to their original tutorial level - for example, when using 2D raymarching (like the ones on Level 10A) containers reference the level main DIRECTIONAL LIGHT - and without it (when pasted to a new level with no such light) they are blocked. Same goes for BONE references: default containers refer default mannequin bones - in case your character has different bone names: you have to re-set these... etc.

(2) As ninja has been developed, "external" (not yet integrated) systems have been added: such as WorldSpace WATER and VOLUMETRICS. Ninja is communicating with these systems using external RenderTargets - and we have extra requirements - eg. in the case of VolumeFog or VolumeClouds you need to place special actors / enable flags on levels.

Please have a look at Manual Chapter 24: Volumetrics, and how to set it up!
This long vid explains all we need to know about water: https://www.youtube.com/watch?v=l2qLnN3J3tI&ab_channel=AndrasKetzer
