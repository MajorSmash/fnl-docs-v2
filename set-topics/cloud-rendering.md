---
doc_type: SET_TOPIC
title: "CLOUD RENDERING"
date: 2025-09-29
source_url: "https://discord.com/channels/850913821240983553/1319655034803458069/1422147193632067735"
author: "andrasketzer"
source_channel: "live2-public-discussion"
scope: LIVE2
version_min: null
version_max: null
media_urls: ["https://cdn.discordapp.com/attachments/1319655034803458069/1422147193329942588/image.png?ex=6a589ec9&is=6a574d49&hm=02246b5aee3ae7da05abe8cd2932cb7392cda7fe14ea6f939386b0912790b9b5&"]
---

I have been testing the new Niagara **Generic Component Renderer**, in order to put **Cloud Volume Rendering** under niagara. I've already implemented Mesh, HVOL and FVOL rendering - so these could be used internally via ninja.core -- and the idea was to bring in CVOL too. It would have been sooo nice: works in editor, we could dynamically move and resize the volume - no more material-param based hocus-pocus to set up scale and offset.
...but, it will not happen. While I was able to initialize cloud rendering from niagara, KEY params like "Material" could not be "bind": apart from manually defining a value inside niagara, we can not set them via user params, or any other way... 😒 such a pity. (Tested it under UE 5.7 preview: same problem)
