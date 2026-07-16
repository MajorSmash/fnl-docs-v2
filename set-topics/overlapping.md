---
doc_type: SET_TOPIC
title: "OVERLAPPING"
date: 2021-10-17
source_url: "https://discord.com/channels/850913821240983553/850926358196125726/899230212389212190"
author: "andrasketzer"
source_channel: "ninjalive-issues"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

OVERLAPPING
Overlapping: to avoid mis-interpretation, let me describe briefly how overlap works.
(1) by default, ninja uses a plane (tracemesh) to display simulation and a volume (interactionvolume) to detect in/outbound objects. The PIVOT of Objects overlapping the int.volume is being projected in the 2D sim plane (tracemesh). Projection happens via TraceLines from camera.
(2) you could define a CUSTOM tracemesh. Interaction is still managed by Int.volume - its just the SIM mapped on a non-planar geo.
(3) you could define a custom LineTrace startpoint - in case you dont want the Camera to be the starting point of tracing.
(4) you could tell ninja to use the TraceMesh to detect overlapping - as opposed to using interaction volume, this gives us PRECISE on surface hit detection.
(5) we have other, additional features (eg "brush persistency" (keeps the last stroke) and "kill brush when velo=0" and stuff.
.
You need to master all the above, to properly understand what happens, in terms of overlapping / interaction. Randomly / unknowingly combining the above settings could seriously mess up the outcome.
