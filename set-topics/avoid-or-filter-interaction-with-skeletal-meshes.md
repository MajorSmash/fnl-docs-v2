---
doc_type: SET_TOPIC
title: "AVOID or FILTER INTERACTION WITH SKELETAL MESHES"
date: 2021-07-15
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/865102419817136138"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

(1) In the case of a standard **NinjaLive Actor** placed on level --->
(A) You could switch off bone/socket based interaction completely by going /NinjaLive Actor Details panel /LiveInteraction /OverlapfilterInclusiveObjectType--- and REMOVE "Pawn" from the array of queried classes
(B) You could also filter WHICH bones to interact with, by providing EXACT bone names at: /NinjaLive Actor Details /LiveInteraction /OverlapFilterInclusiveBoneNameExact
.
(2) In case **NinjaLiveComponent** is EMBEDDED to an Actor containing SkeletalMesh(es) --->
(A) You could switch off bone/socket based interaction completely by going /NinjaLiveComponent /LiveInteraction /ContinousInteractionInclusiveObjType --- and REMOVE "Pawn" from the array of queried classes.
(B) You could also filter WHICH bones to interact with, by providing EXACT bone names at: /NinjaLiveComponent /LiveInteraction /ContinousInteractionBoneNamesExact
