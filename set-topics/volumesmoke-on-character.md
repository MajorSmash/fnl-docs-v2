---
doc_type: SET_TOPIC
title: "VOLUMESMOKE ON CHARACTER"
date: 2023-06-14
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/1118478182354526208"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: ["https://cdn.discordapp.com/attachments/851482546100633601/1118478182660702268/ninja_volumesmoke_test.mp4?ex=6a58a9fb&is=6a57587b&hm=dc78f3953a755ad2ff0fe663ae6998e194120620ec441c3455cbb1fb128e975d&", "https://cdn.discordapp.com/attachments/851482546100633601/1118478183222759455/DT_NinjaLive_PawnFeet1mod.uasset?ex=6a58a9fb&is=6a57587b&hm=7973d15a81b1598a0295689dcabd9802c5c1226fd4aac1134d060603e0f35b52&", "https://cdn.discordapp.com/attachments/851482546100633601/1118478183562485832/MI_VolumeSmoke_PointLit_Bright.uasset?ex=6a58a9fb&is=6a57587b&hm=bc760370e10ee1ebea79a1eff66cb459e5a6da88cf0157bb5321c3fe0c3a1daf&"]
---

A user was wondering if we could use ninja for somethign like this *(below link)*. Breifly: yes 🤓
https://www.pond5.com/stock-footage/item/100654377-cg-animation-dancing-3d-character-smoke-fun-hip-hop-dance

We are modifying an existing setup: *Tutorial Level 30-A / Stage 4-C*
The OG setup is "smoke on the floor" - locked rotation, aligned with the floor.

1. first we turn our setup **Camera Facing**
 - select "ComponentDemoPawn" Actor
 - select NinjaLiveComponent
 - set LiveInteraction /CamaraFacingTraceMesh = TRUE
 - set LiveInteraction /UseCustomTraceSource = FALSE
 - select VolumeSmokeComponent
 - set CameraFacing = TRUE

2. we modify **sim params**, to make it less noisy:
 - select NinjaLiveComponent
 - look up LiveGeneric /DefaultPreset
 - tweak the params by opening the datatable, or by placing PresetManager on level (and Play) - key: lower PUNCTURE and DRAG values
 - OR replace this with attached PRESET datatable file *(DT_NinjaLive_PawnFeet1mod)*

3. we modify the **VolumeSmoke material**, making it **Lit** (originally: Unlit)
 - select NinjaLiveComponent
 - look up LiveGeneric /SecondaryOutputMaterials
 - double click on "MI_VolumeSmoke..."
 - set Lit = TRUE, LightInternsity = 0.5, Shadow = 1.0
 - set extrude = 0.05
 - OR, just load the attached material *(MI_VolumeSmoke_PointLit_Bright.uasset)*
