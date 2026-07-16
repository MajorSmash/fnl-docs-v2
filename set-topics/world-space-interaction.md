---
doc_type: SET_TOPIC
title: "WORLD SPACE INTERACTION"
date: 2022-08-21
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/1010851263384145920"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: ["https://cdn.discordapp.com/attachments/850913821827792940/1010849036036747334/unknown.png?ex=6a58aa06&is=6a575886&hm=2b5697f7299885b90e56c7dbdf5c6fea4d5ce7ab0a1fd0e99ab4a4bed2acc765&"]
---

, I have created a screenshot - pls have a look.
1. The "big gray" area is ---> NinjaLive_Area_Wind Actor.
2. The actor is attached to the pawn
3. Wherever the pawn goes: it takes the simulation with itself (this is what we call "simulation moving in world space")
4. the sim, attached to pawn, could interact with ANY object. What if the pawn runs 500 meters, and there is a second harvester there? No problem. The principle is: wherever the pawn goes, interaction zone (the sim) follows him - so, the pawn is always "surrounded" by interaction.
Conclusion: the sim is NOT harvester specific - just a sim, reacting to anything (eg. you could stroke the grass with your mouse)
