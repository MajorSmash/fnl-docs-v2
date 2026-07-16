---
doc_type: SET_TOPIC
title: "PREPARING NINJALIVE FOR A NEW FEATURE"
date: 2021-07-17
source_url: "https://discord.com/channels/850913821240983553/850926358196125726/865940390627770410"
author: "andrasketzer"
source_channel: "ninjalive-issues"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

**PREPARING NINJALIVE FOR A NEW FEATURE**: to make ninja behave like it would be a "non-local" container, like the pawn / avatar is moving in an infinite fluid medium
(PART1)
SET REF: [Discord](https://discord.com/channels/850913821240983553/850913821827792940/852667210434084874)

(1) Current ninja "offset efforts" were to support a phenomena that is observable at Level4, Stage4: push the fluid container with the pawn, and the fluid-velocity field is reacting like the fluid is "inert" (follows incoming force exertion with inertia, with a temporal delay): https://youtu.be/0O11SNavhM4?list=PLVCUepYV6TvOrOfQVLMCxl_JoU_cIkK8P&t=781
----
The strength of the inertia mechanism is controlled by a single float variable: "VeloFromSimAreaMotion", 0-1 range
Pls have a look ath MODULE058 (SetAdditionalFluidsimParams) /VeloHandlerForSimArea node group: using the GetPhisicsLinearVelocity NODE we acquire TraceMesh velocity per frame, and using this vector, we set the already available "VeloOffsetX" / "VeloOffsetY" params (that, originally add a directional flow to the sim - but in this case we (mis)use them to represent WorldSpaceVelocity in the sim)
Conclusion: NO REAL OFFSET OF SIM BUFFERS HAPPENS HERE
(PART2)
