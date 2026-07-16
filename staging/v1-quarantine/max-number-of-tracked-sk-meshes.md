---
doc_type: SET_TOPIC
title: "MAX NUMBER OF TRACKED SK MESHES"
date: 2023-05-10
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/1105963861066125393"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: ["https://cdn.discordapp.com/attachments/850913821827792940/1103026202370904145/image.png?ex=6a587af3&is=6a572973&hm=988dec4934115f12685e7103545843ccfda449bc3921f5491bfa39f48bf494f0&"]
---

There is a dedicated level, a SK mesh stress test with 40 meshes / tracking 2 bones per mesh (40 is the maximum number of trackable SK_meshes)
*/FluidNinjaLive/Tutorial/LevelsSpecial/NinjaLive_Level22_Performance_SkeletalMeshes*
.
The number of SK meshes should be differentiated from the number of tracked bones (that is not limited, in this case: 40 x 2 = 80)
Performance-wise: 10-30 bones are optimal, above that number, we experience gradual performance drop.
.
Note: when viewed from a large distance, a single bone (root) or object (collision capsule) is satisfactory for interaction. When using the Collision Capsule - which is a primitive, not a SK_mesh - there is no limitation for the number of tracked entities.
