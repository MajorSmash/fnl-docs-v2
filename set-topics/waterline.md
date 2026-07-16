---
doc_type: SET_TOPIC
title: "WATERLINE"
date: 2023-02-21
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/1077536190108008457"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

1. To properly handle the "camera is half-merged under the water" situation - we need a "waterline" --- and to implement a proper waterline, we need to generate a screen-space MASK for the underwater area - and use this mask as a filter for the UNBOUND version of the underwater postprocess material.
.
2. How to generate such mask? Many ways to go:
- in case you clone a CLOSED MESH along the spline (not a flat plane, but a "tube like" entity) you might be able to get the mask using stencil buffer
- some people attach a scenecapture camera to their main cam, and render the underwater domain using the "showonlyactor" feature - and use this, as a mask
.
One thing is for sure: it is a komplex technical task that needs above-intermedier UE skills. The good new is: multiple tuts out there on delivering such a system.
How come, that ninja does not contain such a system? -- Ninja is a generic purpose fluidsim (smoke, fire, foliage, clouds, liquids) - and implementing the waterline solution would increase komplexity / impact (harm) the performance / usability of other generic purpose features.

See how user implemented waterline: [Discord](https://discord.com/channels/850913821240983553/850922331878588416/1240107398987907122)
