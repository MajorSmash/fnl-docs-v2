---
doc_type: SET_TOPIC
title: "LIGHTING vs VOLUME CLOUDS"
date: 2021-07-27
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/869590396945190953"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

No official support / built in function for this - but: **ninja ** utilizes the very same native UE Volumetric cloud system as *Ryan Brucks* in this video: https://www.youtube.com/watch?v=R7jhuzKiAvE&ab_channel=RyanBrucks
How I would do it: clouds are true volume, so I would add a UVW (3D) **SphereMask **function to the Clouds basematerial (/FluidNinjaLive/Volumetrics/BaseMaterials/M_VolumeCloud) - the center-position and hardness of the **SphereMask **would be controlled by external (blueprint driven) variables --- and the SphereMask would modify (add to / multiply) the ALBEDO and/or EXTINCTION of cloud volume. Setting quick flashes on this soft-3D sphere would do a nice job as inter-cloud lightning.
