---
doc_type: SET_TOPIC
title: "Material usage"
date: 2022-08-12
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/1007591100212592700"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: ["https://cdn.discordapp.com/attachments/850926358196125726/1007590719587893248/OutputMaterialsAppliedToTraceMeshes.jpg?ex=6a58acfb&is=6a575b7b&hm=8ed24d957bd0ef23e2c87fd511bbe0e82d9635a7e33beb35299ac88e72ee5f19&"]
---

**Material usage** on NinjaLive **Usecase Level 7 **(Small Water Bodies):
.
1. each ninja actor uses its OWN (internal) TraceMesh to visualize sim results (no external systems used, hence: no tagging / no direct-drive needed)
2. the material defined in the OUTPUTMATERIALS LIST is applied on the tracemesh (that is default ninja behaviour -> primary outmat goes to tracemesh)
3. we could have more than one out.mat in the list - but ninja will use only one: that is INDEXED, above the list. See attached screenshot.
