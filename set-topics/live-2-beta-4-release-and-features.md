---
doc_type: SET_TOPIC
title: "LIVE-2 Beta 4 Release and Features"
date: 2026-06-04
source_url: "https://discord.com/channels/850913821240983553/1460577812795883572/1512187585764790272"
author: "andrasketzer"
source_channel: "live2-announcements"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

## Release announcement

FluidNinja LIVE-2 **BETA-4** available: [Discord](https://discord.com/channels/850913821240983553/1466656509239758899/1512178125734281478) / [Discord](https://discord.com/channels/850913821240983553/1466649696956317746/1466737082834751489)

BETA-4  feature list: [Discord](https://discord.com/channels/850913821240983553/1466643263774527741/1512186744533946560)
BETA-5  plans: [Discord](https://discord.com/channels/850913821240983553/1466643263774527741/1504547164544569495)

## Feature list

LIVE-2 **BETA-4 FEATURES**:

1. Level content in the LIVE-2 project cleaned up and organized into numbered and named stages and setups as Outliner Folders

2. Content descriptor: all levels, stages and setups listed in a searchable text file
  - Count: 57 levels, 222 stages, 296 setups listed
  - URL: https://drive.google.com/file/d/15d3QdfleD1jDw8LJ3YQEGpAP-89b9bKa
  - Text file ported to this server: [Discord](https://discord.com/channels/850913821240983553/1512372343702290442/1512386195718672558)

3. New Levels:
*/Content/FluidNinjaLive/Levels/_Starter/Tutorial06_SplineBasedRivers.umap*
*/Content/FluidNinjaLive/Levels/Water_Dense_Lake.umap*

4. New Stages:
*/Content/FluidNinjaLive/Levels/_Starter/Tutorial03_KeyConceptsForWater.umap / STAGE 4: wave generators*
*/Content/FluidNinjaLive/Levels/_Starter/Tutorial03_KeyConceptsForWater.umap / STAGE 2F: sparse water setup on spline*
*/Content/FluidNinjaLive/Levels/Viscous_Blood_Mud.umap / STAGE 6: surface trickle complex*

5. Important edits in level content: *Tutorial03_KeyConceptsForWater, Water_Dense_Sea, Water_Sparse_Lake*

6. Asset mods:
  - *M_NinjaOutput_BaseMaterial_FOLIAGE* updated to v1.2
  - *MF_NinjaOutput_BaseFunction_SURFACE* - AllowDynamicClampMaxAdjustment limited wo "below waterline" height-areas
  - *SurfaceAlignedMeshes* Niagara System: "Kill Particles below lower bound" module replaced with "Kill Particles by Z" module. Instead of low-cut, we have hi and low cut.
  - Niagara module *Ninja_CompositeAndGradient*: EdgeMask DensityAccumulation mod

Feature-list source: [Discord](https://discord.com/channels/850913821240983553/1466643263774527741/1512186744533946560)
