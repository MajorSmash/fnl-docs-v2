---
doc_type: SET_TOPIC
title: "SIM ACTIVATION"
date: 2022-09-25
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/1023610937363677297"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: ["https://cdn.discordapp.com/attachments/851482546100633601/1023610937388839002/pawn_proximity.png?ex=6a584a39&is=6a56f8b9&hm=6964b54aa151a823ee19c6595642434773f8213a6b34c93f988a933e34b45cf1&"]
---

There is a dedicated option, responsible for the sleep/wake state of sim containers.
This feature is based on pawn proximity: "if a pawn is nearby, wake the sim".
Sometimes, user defined characters does not qualify as "pawn" (eg.: their class definition is not CharacterMesh) - and for this reason, does not wake the sim 🙂
.
Of course: you could SWITCH OFF proximity based activation.
Select NinjaLive Actor -- locate LiveActivation option at ther user details panel -- set "SimActivatedByPawnProximity" to FALSE
