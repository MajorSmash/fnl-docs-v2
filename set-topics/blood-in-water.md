---
doc_type: SET_TOPIC
title: "BLOOD IN WATER"
date: 2026-09-17
source_url: "https://discord.com/channels/850913821240983553/1319655034803458069/1550066519898193931"
author: "Andras Ketzer"
source_channel: "▪️basic-support"
admitted_by: "reviewer-capture:722009818113638480"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

Ninja water setups are made to manage water. Blood setups work differently. There are no built in functions for merging these two, but, it could be done.

There are two fundamentally different setup types in ninja. Sparse and Dense setups - learn more at [Manual Chapter 6](https://majorsmash.github.io/fnl-docs-v2/manual/ninjalive2-manual/#6-key-concepts-for-water)
- dense setups reserve "density" for themselves / we can not inject data into the density buffer (all levels with dense setups are named `water_dense`)
- sparse setups, on the other hand, let us use density as we want --- typically for whitewater - but we can also utilize it for "blood in water" , by re-colouring density to red in the output material, and adjusting sim `DensityAccumulation` param. Contra: everything is red (all levels with sparse setups are named `water_sparse`)

Alternative route / workaround: running a dedicated sim for blood, and compositing the output on top of water - either by using a DECAL domain output material, or, by crafting a compositor material that reads both water and blood setup outputs (this needs advanced skills).
If we go this alternative route of "*two simulations, composited*" (water + blood) - and we want the blood to be effected by the water currents: we need to export water velocity to a RenderTarget (there is a built-in feature for this `/LiveComponent /LiveOutputRenderTargets`), and read the velocity with the blood simulation as "bitmap defined velocity input" - see: `/LiveComponent /LiveInputFields /Bitmaps /VelocityFieldFromTexture /VelocityOnlyInputTexture`
.
Related post: [Discord](https://discord.com/channels/850913821240983553/1319655034803458069/1550076683141390398)
