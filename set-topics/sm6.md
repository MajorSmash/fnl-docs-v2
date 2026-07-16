---
doc_type: SET_TOPIC
title: "SM6"
date: 2023-02-09
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/1073189325237407804"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: ["https://cdn.discordapp.com/attachments/850926358196125726/1060841061322342422/Setting.png?ex=6a5899ba&is=6a57483a&hm=e101a9207033f6a275f8dbf66383afc1c29dd26cf741f40fcd0c5edff12efa88&", "https://cdn.discordapp.com/attachments/850926358196125726/1060841061699833876/GPULoadBeforeFix.png?ex=6a5899ba&is=6a57483a&hm=547c03d77544f8efd2c9e74afade3c84cabb9effb070b1c92c5197d9f2ee9d75&", "https://cdn.discordapp.com/attachments/850926358196125726/1060841062064726056/ModificationPlace.png?ex=6a5899ba&is=6a57483a&hm=d939b91441ec670a39572f34aa4fca4cbb6712dde20b5e534d77a424703117a1&", "https://cdn.discordapp.com/attachments/850926358196125726/1060841062425444433/GPULoadAfterFix.png?ex=6a5899ba&is=6a57483a&hm=d04dbac6b43899310eee5fc9958f3d634d5d0327a7764f6255f2b67355beeedd&"]
---

Hello, sorry for the automatic translation.
After moving to UE5.1 and enabling SM6, suddenly the GPU load increased.
It's CanvasDrawTiles that's going up.
Checking with Usecase001, it is about 15ms.
The confirmed environment is GeForce2080Super.
Investigating the cause with RenderDoc, I found that the load of M_Pressure was high.
Further investigation revealed that the custom HLSL of MF_SeparableMultiKernelDiffusion increased the load.
Adding static to the array like the image improved the GPU load.
I don't know the exact cause, but I will let you know.
Thank you very much.😀
