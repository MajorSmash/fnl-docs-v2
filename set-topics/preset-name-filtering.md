---
doc_type: SET_TOPIC
title: "PRESET NAME FILTERING"
date: 2022-07-26
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/1001378152922222662"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: ["https://cdn.discordapp.com/attachments/850926358196125726/1001377965256491109/unknown.png?ex=6a587c67&is=6a572ae7&hm=8b9195a5712bd17d95ed50de4b9bd045e1194b8d71a4f8e80b887b8aa27e1de6&"]
---

1. On your screenshot, the SECOND row from the top is EMPTY. This row supposed to show the preset name. I do know what the problem is!
2. Pls select your NinjaLive Actor (placed on level). Then select NinjaLive Component. Go to **LiveGeneric** Param group
3. Locate the "Preset Name Filter Criteria" input field (third from the top) - this field is usually set to "FluidNinja" or "Usecase". It could be anything - and ninja is using this string to look up presets. Eg.: then "Usecase" is set, ninja ignore all presets that have "FluidNinja" string in their name (eg. DT_FluidNinja_Default).
4. The fact, that your second row is EMPTY, tells me: the preset assigned to this container (under LiveGeneric, first input field: "Default Preset") has a name tag, that is not matching the filter criteria, provided under the third input field (PresetName...)
5. Make sure you match these names / strings
