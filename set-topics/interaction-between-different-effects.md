---
doc_type: SET_TOPIC
title: "INTERACTION BETWEEN DIFFERENT EFFECTS"
date: 2026-10-09
source_url: "https://discord.com/channels/850913821240983553/1319654748873560145/1558099444015042670"
author: "Andras Ketzer"
source_channel: "info-bits"
admitted_by: "reviewer-capture:722009818113638480"
scope: LIVE2
version_min: null
version_max: null
media_urls: ["https://cdn.discordapp.com/attachments/1319654748873560145/1558099443230965872/fire_water.mp4?ex=6aca34af&is=6ac8e32f&hm=3b832bd42c4e5e7f47fe9c2a8e66ed52942615c2a7478f393f93bf87d75e8675&"]
---

1. every simulation is feeding on a **input**: this could be the distace-field of meshes, particles, destructible chunks...etc. Have a look at the first 5 seconds of [this video](https://youtu.be/nZoZwP-jUkM?si=-73rzifRhesk8dIn) - we see particles, being used as simulation input to generate fire for a flamethrower.

2. what if we use the same particles to trigger ripples and whitewater on a fluid surface? Since the same particles drive fire and water, *it will seem* as if the fire is causing the ripples on the water surface. This is because the same input drives both. **See attached video below** ⬇️ . Using this principle, we can couple different simulation containers.

3. and we can further increas complexity. For example, ninja could be used to drive particles: in this case, the particles are not used as input, but output (see this [video snippet](https://youtu.be/mEtGM6Zrr9I?list=PLVCUepYV6TvPYbofpEf_ghznfihM-yt-B&t=91)) ...and then, we can use the fluid driven particles as input for another sim.
