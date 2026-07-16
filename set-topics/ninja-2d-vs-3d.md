---
doc_type: SET_TOPIC
title: "NINJA 2D vs 3D"
date: 2025-09-19
source_url: "https://discord.com/channels/850913821240983553/850913821827792940/1418496112469213307"
author: "andrasketzer"
source_channel: "general"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

Very good question 🤓 !
NINJA 2D vs 3D
1. Ninja is a 2D sim. Doing fluidsim in 3D, would be much, much slower.
2. We can make the core 2D data *look* 3D (fake!) on two ways:
 A. by mapping the sim on a camera facing plane
 B. by using the sim to EXTRUDE a 2D surface to 3D (explained here: https://youtu.be/vXalfRAnXak?t=3240)
3. Method B is used in many cases:
 - we can extrude the VERTICES of a flat horizontal surface --- eg.: a sand, or water hardsurface
 - we can extrude the VOXELS of a flat (THIN!) volume --- eg.: low-laying fog over the ground
4. And we can combine method A and B: make a THIN camera facing volume, and EXTRUDE the voxels -- eg. smoke

Remember: we can't make a full ("not-thin") volume, as we *do not* have 3D real volumetric data to fill the voxelspace - only 2D data, only "a slice" of the full volume. What is the advantage of this fake? It looks kind-of 3D-ish, and it interacts with scene lighting. The latest "heterogeneous volumes" are especially good at this: https://media.fab.com/image_previews/gallery_images/bd2c411f-f563-45a4-9252-d0a2b0e47c6f/3490bf8d-6ed4-45c9-a2b4-d190ea1e77c0.jpg
.
On your picture, a COMBO: fire mapped on a camera facing flat plane mesh, and smoke, on a camera facing thin volume.
For the fire we do NOT need volumetrics: it looks better on a surface / looks blurred when displayed using a volume. The performance of using simple mesh-surfaces is also much better - compared to volumes. On the other hand: smoke looks better with a volume.
