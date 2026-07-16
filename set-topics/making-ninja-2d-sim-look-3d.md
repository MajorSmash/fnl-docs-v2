---
doc_type: SET_TOPIC
title: "MAKING NINJA 2D SIM LOOK 3D"
date: 2021-09-16
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/888001499219763210"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

(1) ninja core sim is 2D
(2) we could make "3D" many ways: Parallax Occlusion Mapping is one way
(3) stacking 2D continers is another way: https://youtu.be/0d0jG4804o4?list=PLVCUepYV6TvOrOfQVLMCxl_JoU_cIkK8P&t=23
(4) extruding the 2D sim to 3D, making a "height field" ---> and driving true 3D volume via this field: See **Manual Ch. 24, Volumes** -- fog, smoke, clouds!
(5) driving 3D particle clouds ("volumes") is also an option (see Level 20A,B).
Typical use: Ninja 2D sim velocity is used to ACCELERATE particles (spawned by Grid 2D) on the spawning plane,
and particles are displaced / extruded from the spawning plane by ninja sim density - that is, again, used as a height map.
Many ways to impove this - eg. adding ningara default curl noise to the Z-accleration component...

(6) In theory, there is a way to "carve out" a 3D volume using multiple 2D projection planes, like on this pic:
https://bookzangle.com/images/books/00407/0007667.jpg
...but not implemented, yet! 🙂
