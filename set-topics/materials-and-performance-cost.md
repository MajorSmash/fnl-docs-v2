---
doc_type: SET_TOPIC
title: "MATERIALS and PERFORMANCE COST"
date: 2023-06-08
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/1116299582519914597"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

**1.** Ninja contains multiple base materials, located at:
a. *\Content\FluidNinjaLive\OutputMaterials\BaseMaterials*
b. *\Content\FluidNinjaLive\Volumetrics\BaseMaterials*
+ niagara basemats, at: *\Content\FluidNinjaLive\UseCases\014_ImprovedWorldSpace\Niagara*

**2.** all basematerials are made of functional groups (such as "normal", "meshdistortion", "flowmap","parallax, "raymarcher" ...etc)
The functional groups could be **switched on/off** using BOOL flags, in the material instances.

**3.** IF all functions switched on: the average cost is 1000 instructions per pixel - this is clearly for cinematics purposes.
IF most high end functions are switched off, the average cost is 100 instructions per pixel - this could be run on mobiles and 1K series GTX cards (eg. 1070)
Apart from the functional groups, MODESELECTORS do matter: in a volumetric basematerial, a LIT mode costs 10x, compared to UNLIT.

---------------
Based on the above facts: the question *"how much does a ninja material cost?"* - does not make sense.
It depends on how you set it up. In case you are switching on all high-end functions (cinematics setup), it costs a lot. In case you are using a low end setup: it runs cheap.

The TutorialVids, Manual (eg. chapter 17: optimization) and the example levels all try to teach you about this. For example, Usecase Level 1 texts tell you, to try different output materials (all pre-added, so you need to switch the INDEX only) - to compare the performance difference of Opaque, Translucent and SingleLayerWater shaders (4x difference).

---------------
Apart from the above: the provided materials are only examples: ninja is modular, and users are encouraged to create their own materials: all you need to do is to read raw sim buffer texture objects, and use them, as you like it.
These videos explain what output materials are, and how to construct them:
https://youtu.be/_HbkZ_X4bRE, https://youtu.be/vXalfRAnXak?list=PLVCUepYV6TvMXN8HQjLU9wKz-G_6JvJsF&t=3241
