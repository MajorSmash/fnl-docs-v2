---
doc_type: SET_TOPIC
title: "TEMP ARRAYS"
date: 2021-06-29
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/859392782232977438"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

1. Ninja is tracking overlapping objects, and maps the 3D World Space object pivot position to the 2D sim space - a "brush stroke" is being drawn there.
2. Once an object is entering the INTERACTION VOLUME, ninja registers it to an array, and the obj remains there until it leaves the Interaction Volume. So, ninja does not ask each object every tick "Are you still overlapping?" - we register only arrival and leave, and always automatically draw everything that is in the array. Once a mesh is not overlapping anymore, we are purging / erasing the related array entry. For simple meshes, that is the story.
3. For skeletal meshes, we register the overlapping of the MESH, but then, we query the bones / sockets, and we are writing it to a TEMP array: a separate temp array for each skeletal mesh. Why is this?
Because of the "erasing on leave" mechanism: for simple objects, we could get the related array element easily, since each mesh-instance has an UNIQUE ID THAT IS IN ITS NAME.
For Bones sockets: NO unique identifier: in case we have two pawns in the sim area, both having a bone named HAND, we can not distinguish which "hand" belongs to which pawn. So, we have to put bone-collections belonging to a given SK_Mesh to a unique, separate array - and when the SK_Mesh leaves the InteractionVolume, we erase the whole array.
4. since we can not dynamically create arrays, we are working with 40 pre-made arrays, and registering the state (used/unused) of these arrays, freeing them up once a SK_Mesh leaves.
