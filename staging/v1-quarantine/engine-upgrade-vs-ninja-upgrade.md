---
doc_type: SET_TOPIC
title: "ENGINE UPGRADE vs NINJA UPGRADE"
date: 2024-01-23
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/1199347774643249215"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

We have a working ninja under UE 5.x. We would like to upgrade Unreal to a higher version.
Here is the ideal, suggested workflow, for engine version upgrade vs ninja:
**1.** open UE 5.x host project with higher UE version --- the engine automatically updates assets (host project is updated ✅ )
**2.** download the recommended ninja version for your new Unreal Engine version ( *see Manual Chapter 4* or *this* post: [Discord](https://discord.com/channels/850913821240983553/851482546100633601/1330116844920508467) )
**3.** merge the vanilla (original, non-merged) ninja to the updated UE host project, according to **Manual Chapter 9** - [Discord](https://discord.com/channels/850913821240983553/850925841793941565/855091427393273866)
(this "re-merge" ensures that pre-requisites *- like TraceChannels -* are properly set)
.
*Note:* before (re)merging ninja to your engine-upgraded project, make sure you rename (or duplicate) the ninja assets that you have modified on your own. This way, we can avoid data loss. For example: you have modified a water material instance, to suit your needs. In order to avoid your customised asset being overwritten during ninja update (re-merge), we need to change thew asset name (rename / duplicate) so it will not be overwritten, when copying new ninja to the Contents folder.
.
Related post-1: *Upgrading your existing (already merged) ninja project with a new ninja version*: [Discord](https://discord.com/channels/850913821240983553/850913821827792940/1286240480786387056)
Related post-2: *Pulling new ninja versions from EPIC*: [Discord](https://discord.com/channels/850913821240983553/851482546100633601/1330116844920508467)
