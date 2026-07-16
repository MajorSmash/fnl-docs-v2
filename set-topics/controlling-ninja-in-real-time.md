---
doc_type: SET_TOPIC
title: "CONTROLLING NINJA IN REAL TIME"
date: 2021-06-17
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/855083792421879808"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

To grasp the idea of "realtime control": load any ninja tutorial level, place a Preset Manager, start Play and use the PresMan to (A) interactively set Fluidsim Parameters, (B) change Input Textures and (C) Output Materials. See these following vids.
Changing Sim Params: https://youtu.be/0O11SNavhM4?t=632
Changing Output Materials: https://youtu.be/0O11SNavhM4?t=364 + https://youtu.be/_HbkZ_X4bRE?t=349

---> Similar control could be achieved by Game Logic (Blueprints, Code) or Sequencer

---> Practical example1: using NinjaLive Actor for an area FX. We would like to control the FX params using sequencer - to create a choreographed Cinematics Sequence
---> Practical example2: character ability FX is delivered by an embedded NinjaLiveComponent - we switch the fluidsim preset and the output material as the character uses various ability-FX

Control subjects in the NinjaLiveComponent blueprint could be grouped as:
"Could be modified instantly" (1) / "Could be modified by re-initializing NinjaLiveComponent blueprint" (2)

1. Simple Variables (eg. floats, integers) could be modified instantly by accessing NinjaLiveComponent. Variables have "telling names" - and you could read about them using the Tooltips and the Manual. Pls open up NinjaLiveComponent Blueprint: Preset Variables (for example) could be found under the "NONPUBLICLive Preset Variables" group. --- by code you can access them anytime. In the Blueprint that embeds NinjaLiveComponent (eg. a character) params could be directly accessed. For other (external) blueprints, the LIVE INTERFACE could be used. To modify variable by Sequencer, you need to set the "expose to cinematics" to TRUE.
See Level 5, demonstratinng how to use the Interface and Sequencer.
