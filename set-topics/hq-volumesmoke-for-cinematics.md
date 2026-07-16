---
doc_type: SET_TOPIC
title: "HQ VOLUMESMOKE FOR CINEMATICS"
date: 2021-08-06
source_url: "https://discord.com/channels/850913821240983553/850913821827792940/873319456921747476"
author: "andrasketzer"
source_channel: "general"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

HQ VOLUMESMOKE FOR CINEMATICS
We have three components that influence quality:
(1) core sim: all related settings in NinjaLiveComponent /LivePerformance
(2) bridge RenderTarget - core writes here, Volume reads this -- quality settings defined at the "details" panel
(3) volumesmoke material instance: see lit/unlit and noise usage main switches.
Besides all these, engine level settings like antialiasing and motion blur quality also matter.
