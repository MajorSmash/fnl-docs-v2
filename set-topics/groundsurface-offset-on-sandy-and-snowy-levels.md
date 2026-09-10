---
doc_type: SET_TOPIC
title: "GROUNDSURFACE OFFSET ON SANDY AND SNOWY LEVELS"
date: 2026-08-29
source_url: "https://discord.com/channels/850913821240983553/1460578674695868510/1543165786330243113"
author: "Andras Ketzer"
source_channel: "live2-beta-discussion"
admitted_by: "reviewer-capture:722009818113638480"
scope: LIVE2
version_min: "2.0.0.56"
version_max: null
media_urls: []
---

GROUNDSURFACE OFFSET ON SANDY AND SNOWY LEVELS
.
On the desert and snow levels, the camera *could* go below the ground - we are experience a kind of "*ground surface offset*". This comes from Vertex World Position Offset (WPO) set up in the output material - specifically, the TILEMAP Mesh Distortion. Reason: I wanted the small sandy humps (5-50 centimenters height range) to add geometric details to the otherwise boring and flat landscape surface (make the surface slighly wavy). While, we displace the vertices of the surface - **the collision geometry does not change**. So the camera sometimes goes under the surface, when we are forcing it to a low position. This case applies for LIVE-1 and LIVE-2 equally.
