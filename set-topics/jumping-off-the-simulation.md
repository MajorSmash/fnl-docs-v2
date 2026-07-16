---
doc_type: SET_TOPIC
title: "JUMPING OFF THE SIMULATION"
date: 2022-12-28
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/1057671664185381065"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

1. Many times, we attach ninja to a moving actor - for example, a pawn or vehicle leaving trails in the sand or making ripples on a watersurface.

2. IF ninja is attached to the moving actor - it should be following its movement on the vertical axis, too. This is a problem, if we want the actor "jump out" of the simulation: characters do not leave trails or generate ripples while moving in the air (above the ground / water).

3. The "jump" situation could be handled many ways:

*Prerequisite knowledge:* ninja uses **Interaction Volume** to detect overlapping - and "jumping out" the sim is really about leaving the interaction volume. Concept explained here: https://youtu.be/vXalfRAnXak?t=1507

**(A) water / flatland** is simple: a PLAIN horizontal surface - we lock the sim (the Interaction Volume) vertically, at:
NinjaLiveComponent /LiveInteraction /MovementIsLockedOnThisAxis: Z
+ ForceTraceMeshVerticalPosition (float: water surface Z-position)
VID REF: https://youtu.be/S5n5Tpd1Gko?list=PLVCUepYV6TvMXN8HQjLU9wKz-G_6JvJsF&t=575
See Tutorial Level 32 / Stage 7
Related Post, Z-lock: [Discord](https://discord.com/channels/850913821240983553/851482546100633601/1134765659667042376)

**(B) Slopy landscape + jump**: tricky combo, as we CAN NOT lock the sim (InteractionVolume) vertically, as it has to follow the pawn moving uphill. To handle this situation, we have created a deicated tool, called FLOORSNAPPER - explained here: https://youtu.be/3cBo9pHUXUA?list=PLVCUepYV6TvMXN8HQjLU9wKz-G_6JvJsF&t=630
A more simple way (that does not need FloorSnapper) is making a small BP function that switches off ninja interaction (via LiveInterface) when the character Jumps.
The function could be a blueprint actor - in our included example, it is running in the Level BP (see *Usecase_002_WorldSpaceWater_LIVE17* LEVEL)
