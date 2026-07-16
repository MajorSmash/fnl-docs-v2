---
doc_type: SET_TOPIC
title: "UNDERWATER POSTPROCESS SWITCH"
date: 2026-03-30
source_url: "https://discord.com/channels/850913821240983553/850913821827792940/1488064378111656066"
author: "andrasketzer"
source_channel: "general"
scope: LIVE2
version_min: null
version_max: null
media_urls: ["https://cdn.discordapp.com/attachments/850913821827792940/1488064377776115803/image.png?ex=6a587bf2&is=6a572a72&hm=671235bed677424d2065592f0cb0e029b6028de56783c515aa283dcef58e3257&"]
---

SET THREAD: [Discord](https://discord.com/channels/850913821240983553/850913821827792940/1488064378111656066), [Discord](https://discord.com/channels/850913821240983553/850913821827792940/1488065473823244358), [Discord](https://discord.com/channels/850913821240983553/850913821827792940/1488065655977672755), [Discord](https://discord.com/channels/850913821240983553/850913821827792940/1488067339919556619)
.
1. your idea with (water.surface.world.height + local.waveheight = water.surface world.pos) is correct!
2. now that you can access LIVE-2 BETA, pls have a look at this level: *\Content\FluidNinjaLive\Levels\Water_Sparse_River.umap*
3. I have tried to implement something similar. Pls select Actor *NinjaLive_ClearWater* - then NinjaLiveComponent /LiveLegacy /SlowPostprocessSwitch:
