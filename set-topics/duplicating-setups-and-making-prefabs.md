---
doc_type: SET_TOPIC
title: "DUPLICATING SETUPS and MAKING PREFABS"
date: 2024-01-30
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/1201828059813265428"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

Jae 🖐️
1. UseCase Level 10 is demonstrating various fire setups
2. A "setup" typically consists of a ninja simulation actor --- and some additional elements.
For example...
- STAGE-3 is demonstrating a campfire with only a single ninja sim, and some wooden logs and a point light.
- STAGE-5 and 6 shows more komplex setups: 2 ninja actors, one is for fire, and an other is for smoke --- plus, we have a volumetric smoke container
- STAGE-6B is the most complicated: on this stage, we are using a particle system, as input for the fluidsim.
.
In case we'd like to port these setups to other levels: we are copypasting ALL setup components to the other level.
We could group them, or adding them AS COMPONENTS to a custom blueprint actor - making a "prefab".
Both Ninja and The VolumeSmoke container could be added AS COMPONENT to other actors - this vid snippet explains: https://youtu.be/vXalfRAnXak?t=5091
.
Important: in case we are using TAGS, as a way to direct-drive external systems with ninja (eg.: the volumesmoke component is tagged, and ninja finds it this way) we need to make sure, that there will be no TAG CONFLICT (eg.: if two components or actors have the same tag, and two ninja components are trying to access them)
.
Stage-6B is an experimental setup, where the niagara particle-capture data is written to an ON DISK rendertarget - and ninja is reading this.
So we need even more care with setup duplication: we need to make sure EACH copy has its own rendertarget to write to, and each ninja reads the correct rendertarget. I would resolve this by creating a blueprint actor, that hosts both niagara and ninja componens, and generates DYNAMIC rendertargets (each blueprint automatically generates a RenderTarget for itself) and provides this for both niagara and ninja.
