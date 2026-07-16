---
doc_type: SET_TOPIC
title: "STEP-BY-STEP GUIDE FOR MOVIE RENDER QUEUE"
date: 2023-05-05
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/1104000639702405230"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

**STEP-BY-STEP GUIDE FOR MOVIE RENDER QUEUE** (copy-pasted from Manual Chapter 23.3) 🎦
Releted post on MRG usage / problems: [Discord](https://discord.com/channels/850913821240983553/851482546100633601/855045445377327105)

1. Edit /Plugins /MovieRenderQueue: ENABLE PLUGIN
2. Open the level that you would like to render (NinjaLive_Level08_Demo_Roots is ideal for testing )
3. Select "BP_NinjaLive_Utilities" on level and on the Details Panel: switch OFF the "Possess Nearest Pawn" flag
4. Content Browser: right click /CreateAdvancedAsset /Animation /LevelSequence
5. Place Actor Panel: drag a camera on level ---> set the camera to the needed position
6. Content Browser: double click on the level sequence
7. In Sequencer: right click, "Actor to Sequencer" --> add the recently placed Camera from the Level
8. Viewport, Top-Left corner UI /Perspective rolldown menu: select Camera Actor
9. Window /Cinematics /MovieRenderQueue (MRQ)
10. In MRQ, click on the green "Render" rolldown menu --> add the previously created Level Sequence
11. Adjust Output Folder and Config - if needed - by default: JPEG sequence, to "/Saved/MovieRenders/.."
12. Press green "Render (Local)" in the Bottom-Right corner
13. After a few seconds of initialization, MRQ renders the image sequence to the provided folder

Step-by-step, also see in *Manual Chapter 23.3*: [Discord](https://discord.com/channels/850913821240983553/850925841793941565/855091427393273866)
Additional note - on RenderTargetWriter Component usage: [Discord](https://discord.com/channels/850913821240983553/850926358196125726/1386610054999834635)
