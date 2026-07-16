---
doc_type: SET_TOPIC
title: "PRESET MANAGER"
date: 2021-08-21
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/878618432394911745"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

Ninja simulation parameters (eg. speed, forces, inputs) are stored in PRESET files.
PRESET MANAGER is an editor only tool with a custom UI, made to…
- develop / tweak fluidsim parameters in real-time
- load / save settings as preset files

PresMan. is a helper function, not needed to run ninja at all. In case you would like
to control sim via game logic like Preset Manager does, read Chapter 26.

A level placed NinjaLive container is associated with a Default preset at:
NinjaLive Actor Details /NinjaLiveComponent /LiveGeneric /DefaultPreset
Fluidsim params stored in the Default Preset are loaded when a sim container initializes
(No PresMan needed, containers are autonomous!)

Preset Manager could be used by placing /FluidNinjaLive /NinjaLive_PresetManager
blueprint actor on a level. The most important UI elements are (see more at Chapter 21.1):

In the top row, you could enable Tooltips (recommended!)
In the second row (printed in red) you could SELECT a given NinjaLive Actor
In the third row (printed in blue) you could LOAD a preset for the selected actor.
The default preset of a given NinjaLive Actor is marked with * symbol
Using the floppy disk icons, you could save and duplicate presets
