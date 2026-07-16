---
doc_type: SET_TOPIC
title: "CHANGING FLOW DIRECTION OF WORLD-SPACE SIMS"
date: 2022-02-01
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/938077043789287444"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

A new post on flow direction, might be easier to grasp this way: [Discord](https://discord.com/channels/850913821240983553/850913821827792940/1291324337063985244)
--------------------------------------------------------------------------------------------------------
Ninja is originally a "local" (non-world-space) sim, mapped on a dedicated object: the TraceMesh.
The setup is very intuitive: in case you rotate the TraceMesh (or the actor, embedding TraceMesh), the sim also rotates.

UseCases 1-6 are less trivial, demonstrating "world space" (non-local) usage. The method is explained in these videos:
https://youtu.be/uZOnSRWumMg --- https://youtu.be/7NvRJSDbDMs --- https://youtu.be/l2qLnN3J3tI

*Briefly*: two LOCAL ninja sim actors are used to generate content. One sim is attached to the pawn (the pawn takes it with itself, and the sim calculates only "around the pawn"). A second sim is generating a tiled pattern (for a nice wavy look). The two sims are composited together by the "dual" material, and mapped on meshes IN WORLDSPACE. Which means, no matter how you transform (eg. rotate) objects, the sim us using World UV coords. Two ways to go:

(A) Usecase 6 / Stage 2C demonstrates a technique, which switches back to non-world-space usage, so you could simply rotate your objects (see above UC6 vid, explains in details)

(B) in case you wish to remain in worldspace, you could change flow direction IN THE TILE GENERATOR SIMULATION ITSELF!
You enable preset manager, start play, select tile generator, change velocity-field direction: which, results the fluid to go another way!
