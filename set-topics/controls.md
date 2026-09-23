---
doc_type: SET_TOPIC
title: "CONTROLS"
date: 2026-09-18
source_url: "https://discord.com/channels/850913821240983553/1460578674695868510/1550529483050721361"
author: "Andras Ketzer"
source_channel: "🔸dedicated-support"
admitted_by: "reviewer-capture:722009818113638480"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

KEYS:
Ninja is using the default Unreal Pawn (UE5 Mannequin) - with the default TPS controls.
Key-action association pairs (WASD, Jump... etc) are defined in this asset:
`/Content/FluidNinjaLive/Meshes/Mannequin/Input/IMC_DefaultContext`

CAMERA:
Camera actions and behaviour is built into the Default Unreal Mannequin.
Ninja uses a default Unreal Mannequin - so the camera behavior matches UE default.
For example:
- we create a new TPS project from scratch (no ninja included)
- we need to hold the right mouse button to look around (default unreal behavior for TPS character setups)

MOUSE:
Mouse properties could be adjusted at the `Editor Preferences` menu. The Ninja project comes with these settings:
- Game gets mouse control = True
- Invert Mouse Look Y Axis = False
- Invert Middle Mouse Pan = False
