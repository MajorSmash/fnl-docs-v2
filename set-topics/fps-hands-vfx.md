---
doc_type: SET_TOPIC
title: "FPS-HANDS VFX"
date: 2021-06-12
source_url: "https://discord.com/channels/850913821240983553/850913821827792940/853190327045324805"
author: "andrasketzer"
source_channel: "general"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

, thanks for the video/explanation!
(1) "Sim area motion affects density" param is made with a different purpose:
(A) set it to zero / do not try to use it in this case
(B) pls have a look at Level4, Stage-5B for a practical example on how/when to use this
(2) pls have a look at Level-2B, Stage3: it explains parameter overdriving and its effects
Yes, your sim seems to be heavily overdriven. When working on the PresetManager UI and tweaking values, the input-field text turns to RED when overdriven - pls take this in to consideration.
For example: DRAG multiples horizontal/vertical velocity, while PUNCTURE multiplies the velocity PERPENDICULAR to the 2D simulation plane. When your FPS character moves "forward", the PUNCTURE component of 3D world-space velocity increases - try to reduce / play with the values of drag and puncture.
(3) "Velocity Field influenced by Sim area motion" (demonstrated on Level4) is a key parameter here: try to use low values (n<0.5)
(4) This video demonstrates how the sim should behave when (A) you move in the world with your character and (B) params are NOT overdriven: https://youtu.be/JHSb_KnKlnw / this snippet demosntrates various Output Materials: https://youtu.be/OZ8AQPTNYzg
(5) Two newly introduced params that might help you: see FAQ pdf, page6: https://drive.google.com/file/d/17oVPVEoaW6Y6YKNISr4S0uUJY4_Yx_FM
"VELOCITY-DEPENDENT BRUSH-DENSITY" / "POW FUNCTION ON BRUSH VELO
More info: the Tooltips and Manual/Chapter21 contains description on all params / and how they function
(6) Optionally, you could try to set up a NON-Camera-base line tracing: Level-2C demonstrates the usage, and this video explains: https://youtu.be/2QlJ2f0aK5E?list=PLVCUepYV6TvOrOfQVLMCxl_JoU_cIkK8P&t=43
------ in case you have more questions, pls MSG me. (I am AFK until monday evening) -- thank you!
