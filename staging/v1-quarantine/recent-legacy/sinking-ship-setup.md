---
doc_type: SET_TOPIC
title: "SINKING SHIP SETUP"
date: 2026-02-11
source_url: "https://discord.com/channels/850913821240983553/850913821827792940/1471050935349284864"
author: "andrasketzer"
source_channel: "general"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

I would suggest using a faux method --- supported by some real fluid sim.
1. The currently available ninjalive 1.9 ([Discord](https://discord.com/channels/850913821240983553/865943662411644928/1460537575650492437)) is not suitable for this
2. the upcoming ninjalive 2.0 ([Discord](https://discord.com/channels/850913821240983553/1319654748873560145/1389543526932676722)) could be used. I would do the following setup:

- a static mesh plane with an opaque/MASKED material + a ship-hull with opaque material
- ship-hull gradually moving down ("singking") under the plane
- a scenecapturecamera, set to selectively capture only the ship, in a top-down view
- use the scenecapturecamera's output as MASK for the plane: so we are punching a hole on the plane, where the ship is (the ship-hull could intersect the plane, without being covered by the plane)
- use a second scenecapturecamera, capturing both the plane AND the ship-hull in a top-down view, exporting scene.depth --- this way, we have a float depth buffer, with the sea plane, and lower values BELOW the sea-surface, where the sea hull is
- channel the depth.buffer from second scenecapturecamera to ninjalive 2.0 --- which could simulate fluid-flow on any height-map ([Discord](https://discord.com/channels/850913821240983553/1319654945254932510/1358375037526081657)) --- so we could start a cached simulation with water surrounding the ship --- and starting to flow-down on the hull as the simulation starts --- until, eventually, the hull is filled with fluid reaching the surrounding sea-level

I would estimate, this could take a few hours to set up - to me. Since there is no documentation for ninjalive 2, yet: it might be a very hard mission for you. Good news: live-2 with documentation is coming soon.
