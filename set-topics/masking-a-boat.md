---
doc_type: SET_TOPIC
title: "MASKING A BOAT"
date: 2022-09-08
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/1017385262348763136"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

**(1)** *Avoid water surface WAVES being generated inside the boat*
One technique to feed boat shape to the sim is user modified **Collision Masking**:
Basic feature: on **Tut level 3, Stage 7**: https://youtu.be/v8d0CalL9oA?list=PLVCUepYV6TvPYbofpEf_ghznfihM-yt-B&t=639
.
**User mod v1**: have your sim area dynamically captured (eg. a top-down scene-capture-camera), with "ShowOnlyActor" enabled in the camera (so, only the boad is rendered white, and everything else is black) --- and feed this to ninja as a Collision Mask under `LiveComponent /LiveGeneric /CollisionMask`
.
**User mod v2**: create a boat shaped texture (boat white, background black), build a material that positions and rotates the texture in the simulation space (places the boat in the texture space whare the actual 3D boat is in the level placed sim area --- using the "TraceMeshPos" and "TraceMeshScale" variables, exposed to users by ninja `LiveComponent /LiveGeneric /SetInternalParamsTo...`) --- and record material output every frame (WriteMaterialToRenderTarget node in blueprint land) --- and feed this to ninja as a Collision Mask
.
**(2)** *Avoid water surface being rendered AT ALL inside the boat*
Mark your boat to use a custom stencil mask channel --- and mod ninja basematerial to be sensitive to this channel - so, the water material will be "punched through" by the boat stencil mask
