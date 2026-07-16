---
doc_type: SET_TOPIC
title: "DYNAMICALLY RESCALING A VOLUMESMOKE CONTAINER"
date: 2021-08-01
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/871485932115722251"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

(1) In the VolumeSmoke container, both "VolumeVisualizationBox" and "DepthSlicer" are proxy objects - volume is rendered by a material embedded HLSL code - and to determine size, the code considers THE SIZE OF THE VOLUMESMOKE BP ACTOR - AT INITIALIZATION.
(2) Instead of scaling the actor/volume I would try to grow the simulaton by properly setting up a "growing density" in the sim space --- so the volume would be initialized at the final size / max extent --- and the sim itself would be a density-distibution that starts small and grows large --- this could be achieved many ways, one suggested way is using a dyanamic material as sim input and create a growing thing in the material itself --- see Level3 for sim input examples (including materials)
