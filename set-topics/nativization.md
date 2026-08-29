---
doc_type: SET_TOPIC
title: "NATIVIZATION"
date: 2026-08-29
source_url: "https://discord.com/channels/850913821240983553/1460578674695868510/1543176890787954778"
author: "Andras Ketzer"
source_channel: "live2-beta-discussion"
admitted_by: "reviewer-capture:722009818113638480"
scope: LIVE2
version_min: null
version_max: null
media_urls: ["https://cdn.discordapp.com/attachments/1460578674695868510/1543176889416294430/LIVE2_nativized_SLVD.png?ex=6a93eaf9&is=6a929979&hm=ababf119c000f6e8aa8ef0a39f6df2b5c168ee322bff9fe03c72a65f8ef41c1f&", "https://cdn.discordapp.com/attachments/1460578674695868510/1543176890133647430/LIVE2_nativized_SLVD_comparison.mp4?ex=6a93eaf9&is=6a929979&hm=eb3513791a83b0af41467d6731d27dd9a24219a7e779138c6a5f5087f59852fa&"]
---

NATIVIZATION
.
- There have been numerous efforts to nativize ninja through the years. One example, with LIVE-1, from user <@748517221608980631> - see this post: https://x.com/intaxTR/status/1737586471874236578
- While LIVE-1 fluidsim was already running on the GPU, the LIVE-1 system in general was CPU-bound (multiple heavy functions implemented in blueprints), and it made sense to nativize these functions.
- On the contrary, in LIVE-2, the most heavy parts have been lifted from the blueprint architecture, and implemented in the core Niagara System, running on the GPU. LIVE-2 is GPU bound.
- A recent user effort by <@263384635717844992> shows: **nativized LIVE-2 blueprints consume ~15% less resources on the CPU**. The nativized test setup eating 0.95 ms, while the original eating 1.15 ms (see attached picture and video):
