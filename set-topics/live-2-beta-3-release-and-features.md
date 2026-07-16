---
doc_type: SET_TOPIC
title: "LIVE-2 Beta 3 Release and Features"
date: 2026-05-15
source_url: "https://discord.com/channels/850913821240983553/1460577812795883572/1504742907410649130"
author: "andrasketzer"
source_channel: "live2-announcements"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

## Release announcement

FluidNinja LIVE-2 **BETA-3** available: [Discord](https://discord.com/channels/850913821240983553/1466656509239758899/1504584944188391486) /  [Discord](https://discord.com/channels/850913821240983553/1466649696956317746/1466737082834751489)

BETA-3  feature list: [Discord](https://discord.com/channels/850913821240983553/1466643263774527741/1504546182377242715)

## Feature list

LIVE-2 **BETA-3 FEATURES**:

1. Detailed, machine and human readable parameter descriptor for LiveCore, LiveComponent and LiveActor
  - Count: 355 params and 54 parameter groups processed. Descriptors transferred to the project as **tooltips**.
  - Greetings to  , who created an automation plugin for this purpose.
  - URL: https://drive.google.com/file/d/1FedZwfW3iE1OgJr_Ye551TgaSLjqVUdj

2. Wavegenerator improvement: a more stable, generic pattern generetor, less dependent on slope angle.
  - Niagara module with wavegen upgraded from v1.5 to v1.6 (*Ninja_RVT_ReadAndPaint*)

3. New Maps
  - wavegen demo: /Content/FluidNinjaLive/Levels/Water_Dense_Coastline_Minimal.umap
  - demolition: /Content/FluidNinjaLive/Levels/Misc/Destructibles_as_Points_CameraFacing.umap
  - rain: /Content/FluidNinjaLive/Levels/Misc/Water_Dense_Rain.umap
  - viscous fluids, blood and mud: /Content/FluidNinjaLive/Levels/Viscous_Blood_Mud.umap

4. Minor changes:
  - (r.Vsync 1, r.VsyncEditor 1) console commands executed by default, by the PawnAndCamerautility 
  - SimEdgeBouncyness renamed to SimEdgeBounciness
  - NinjaLiveComponent /ContourNoiseMult ---- set default value to 0.25 (originally: 1.0)
  - LiveOutputMaterials /RecollectFrequency param added to base preset template
  - new param: "FlushBuffersOnReinit" (Erase Niagara Core Grid2D buffers when LiveComponent "RePlay" Event is called)

5. Bugfix: Mesh SDF contour noise directional drift - NinjaLiveCore Niagara System /Ninja_SDF_ReadAndPaint Module /Contour Noise
  - set to 0.5 in order to eliminate directionality of Mesh SDF contour noise

6. Bugfix: "NiagaraSystemsToDrive" Array CLEAR on system (re)init. Location:
  - NinjaLiveComponent BP /MODULE023 /MODULE542 /Check OWNER Actor for NiagaraComponents

Feature-list source: [Discord](https://discord.com/channels/850913821240983553/1466643263774527741/1504546182377242715)
