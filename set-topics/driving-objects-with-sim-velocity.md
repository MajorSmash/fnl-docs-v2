---
doc_type: SET_TOPIC
title: "DRIVING OBJECTS WITH SIM VELOCITY"
date: 2021-10-12
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/897500010072133733"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

**DRIVING OBJECTS WITH SIM VELOCITY** (two way data flow)
Ninja sim could be driven by object position and velocity - this is trivial --- **VS** --- the opposite is also possible, but non-trivial:
objects could be driven by ninja
.
**UPDATE**: Niagara GPU-readback based technology - drigin all-things-physics with ninja: **tutorial:** [Discord](https://discord.com/channels/850913821240983553/850913821827792940/1149667363315253268)
+ video, demonstrating the proof-of-concept: [Discord](https://discord.com/channels/850913821240983553/850922331878588416/1149898214217105408)
.
ORIGINAL POST:
A UseCase is already provided on *Level 20-B*: in this case, we are driving Niagara MeshParticles. Ninja is writing flow velocity data to a RenderTarget - and a GPU particle system's *TextureSampler Module* is reading the RT - and using the velo data to accelerate (mesh)particles.
See vid: https://youtu.be/v8d0CalL9oA?list=PLVCUepYV6TvPYbofpEf_ghznfihM-yt-B&t=937
.
What if you'd like to drive "non-particle" like objects --- like PhysicsBodies, via Blueprint? *Suggestions:*
.
(1) In your blueprint, use the "ReadRenderTargetRawUV" node to read from a given point of the Velocity-RenderTarget.
(2) Use only the RG component of the RGBA data: RED is the horizontal, GREEN is the vertical component of the movement vector (aka: velocity = "speed with direction") --- both channel contains data in the (-1)/(+1) range (negative numbers meaning "opposite direction")
.
Related posts: [Discord](https://discord.com/channels/850913821240983553/851482546100633601/1025315719770017802) + [Discord](https://discord.com/channels/850913821240983553/850913821827792940/1098823281261428736)
