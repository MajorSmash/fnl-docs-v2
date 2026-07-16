---
doc_type: SET_TOPIC
title: "RUNNING FLUIDSIM ON CUSTOM MESHES"
date: 2021-06-18
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/855447762479611904"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

Ninja fluidsim is running in a consistent ("single piece"), rectangular 2D UV space. As long as you can "peel" / unwrap a 3D object and create a homogen/continous UV for it, you can map the fluidsim on this object. Like a Sphere, Cylinder, Bended sheet or Torus
Tutorial video on using custom sim meshes: https://youtu.be/CNqf1B3X34Q
In the manual, look for the "TraceMesh" keyword
-
Handling komplex meshes: the UV of game-characters is usually non-consistent (made of separate UV islands) and non-uni-directional (the UV islands are rotated to optimally fill UV space) - as a result, the fluidsim would be totally messed. --- Possible solution: run a fluidsim on a camera facing plane (that is supported by ninja), BETWEEN your character and the camera, and project the fluidsim on the character (just like a decal map) using the camera. I might give this idea a try soon 🙂
