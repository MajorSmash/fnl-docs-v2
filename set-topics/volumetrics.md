---
doc_type: SET_TOPIC
title: "VOLUMETRICS"
date: 2026-05-18
source_url: "https://discord.com/channels/850913821240983553/1466643263774527741/1505877985855672470"
author: "andrasketzer"
source_channel: "live-2-beta-info"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

LIVE-2 **VOLUMETRICS**

1. Currently, there is no dedicated LIVE-2 Volumetrics documentation. Since LIVE-2 uses the same volumetric rendering as LIVE-1, we can use this doc, until a live-2 version is crafted ---> [VOLUMETRICS V2.PDF](https://drive.google.com/file/d/1F94t04Dh2HMWQRUMmtGVxwD2Dk6RaN79)
2. This collector post could be useful - references to volume culling, shadows ...etc: [Discord](https://discord.com/channels/850913821240983553/851482546100633601/1302930105630461995)

Briefly: Ninja supports **four** volume types, each one could be used for different purposes:

- **CVOL**, cloud volumes: optimal for large scale use / not recommended for clouseups, shadow casting on objects is off by default - could be switched on in the Level Main Directional Light: *Cast Cloud Shadows*
- **FVOL**, fog volumes is low resolution, high latency, no cast shadows and no self shadows -- ideal for slow, smooth large environmental effects
- **SVOL**, smoke volumes, is high resolution, good perfomance, ideal for closeups, handles self shadows / no cast shadow
- **HVOL**, heterogeneous volumes, is high resolution, performance heavy, ideal for closeups, handles self shadows - cast shadows is OFF by default, but it could be turned on: [Discord](https://discord.com/channels/850913821240983553/850913821827792940/1302171714486013972)
