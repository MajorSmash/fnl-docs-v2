---
doc_type: SET_TOPIC
title: "SPAWNING"
date: 2023-02-27
source_url: "https://discord.com/channels/850913821240983553/850913821827792940/1079727716229709945"
author: "andrasketzer"
source_channel: "general"
scope: LIVE2
version_min: null
version_max: null
media_urls: ["https://cdn.discordapp.com/attachments/850913821827792940/1079727716011618364/image.png?ex=6a58c14b&is=6a576fcb&hm=02c33a5f9460612de12e2f51c45d04009a1447db9f8049dbb9e2b74e6d0e4932&"]
---

🖐️ very relevant questions! - SPAWNING
1. in our experience, using ninja as a **CHILD.ACTOR** was not working under UE4 --- and recently, seems to be working with UE 5.11 - see:
*\Content\FluidNinjaLive\Tutorial\UE_Mannequin_UsageExamples\ThirdPersonCharacter_NinjaAsChildActorComponent.uasset*
2. you could add a ninja **COMPONENT** to your actor - so they will spawn together
This tut.vid explains: https://www.youtube.com/watch?v=OP1e27Dvrlk&list=PLVCUepYV6TvPYbofpEf_ghznfihM-yt-B&index=21
3. You could spawn a ninja **ACTOR** and attach/parent it to your actor by code. See this example asset - and the screenshot below:
*\Content\FluidNinjaLive\Tutorial\UE_Mannequin_UsageExamples\ThirdPersonCharacter_NinjaSpawnedAttached.uasset*
