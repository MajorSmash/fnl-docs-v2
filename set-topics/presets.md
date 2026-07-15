---
doc_type: SET_TOPIC
title: "PRESETS"
date: 2026-03-20
source_url: "https://discord.com/channels/850913821240983553/1466643263774527741/1484434734191743048"
author: "andrasketzer"
source_channel: "live-2-beta-info"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

LIVE-2 **PRESETS**
As the new **StartingGuide** tells, there is a new, fully finished tutorial level for using **presets and spawning**
*/FluidNinjaLive/Levels/_Starter/Presets_Spawning'*
.
There is also a detailed text file about presets and spawning: https://drive.google.com/file/d/1xAROYlpT1XcwP0BAigrXdBCqVWFHDtMk
.
We can READ and WRITE presets - both IN-EDITOR (off play) and IN-GAME (runtime).

**IN-EDITOR read/write operations enable us to:**
- create versions of a system via multiple preset files (without duplicating the system itself)
- transfer the state of an already-polished system to a new one
- save the system state into a preset, so we could spawn a new system in-game, using the given preset

**IN-GAME preset reading enables us to:**
- initialize a SPAWNED ninja with the needed parameters
