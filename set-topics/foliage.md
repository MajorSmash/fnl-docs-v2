---
doc_type: SET_TOPIC
title: "FOLIAGE"
date: 2022-07-08
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/994861969842642944"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

Foliage could be driven two ways ---- 🌿
**(1)** the old method with RenderTargets/Param.Coll/Blueprints is still available --- the exposure of sim.pos/sim.scale became a bit more easy:
*/NinjaLiveComponent /LiveGeneric /SetInternalParamsToMat.Param.Collection*
.
**(2)** The new method is described in *Manual Chapter 29.1*
You create (or use the existing) material that is prepared to receive sim buffer data and params from ninja --- then, provide this material to ninja, together with a TAG, that is marking the target grass objects --- and AT GAMESTART, ninja is generating a DynamicMaterialInstance (with all data channelled in) of the grass mat, and applies that to all tagged actors / components.
.
Note: *Grass.Generator Blueprint* is made to demonstrate foliage usage - not a professional generator. In case you'd like to populate whole worlds with foliage, you need to use pro methods (ninja is not a foliage generator, but a fluidsim tool)
.
**ADDITIONALLY**:
No dedicated grass tutorial: it could be driven the same way as all external systems.
As user barndles#6969 put it:
[Discord](https://discord.com/channels/850913821240983553/850922331878588416/999802358903099493)
.
Velocity buffer:
https://youtu.be/vXalfRAnXak?t=3240
.
Direct Drive:
- Manual Chapter 29.1
- This video snippet: https://youtu.be/vXalfRAnXak?t=3724
.
Foliage related posts:
[Discord](https://discord.com/channels/850913821240983553/850922331878588416/1157722234543161475), [Discord](https://discord.com/channels/850913821240983553/851482546100633601/994861969842642944), [Discord](https://discord.com/channels/850913821240983553/851482546100633601/1017148632715251763), [Discord](https://discord.com/channels/850913821240983553/850926358196125726/1129017477041487872)
.
Moar:
[Discord](https://discord.com/channels/850913821240983553/850913821827792940/1098134866341675088), [Discord](https://discord.com/channels/850913821240983553/850913821827792940/1098136115514462308), [Discord](https://discord.com/channels/850913821240983553/850922331878588416/1220250635836985404)
