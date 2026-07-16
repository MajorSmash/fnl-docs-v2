---
doc_type: SET_TOPIC
title: "CHANGING FLUIDSIM TEXTURE INPUT"
date: 2024-04-16
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/1229806469675876412"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: ["https://cdn.discordapp.com/attachments/850913821827792940/1229804857020383295/image.png?ex=6a5845c6&is=6a56f446&hm=5fa2b747312e013823ce641f1d53aa355b888a60798f029d8bd7fad901297159&"]
---

This is Level-3, Stage-2 --- demonstrating: *"using bitmaps/textures as simulation input"*
By replacing the texture, we could change fluidsim input.

**1.** Select "Container1_Logo" Actor on level, and at the Actor Details Panel, set "Sim Activated by Pawn proximity" to FALSE
(we are switching off sim sleep/wake --- sim is always awake)
**2.** select "NinjaLive_PresetManager" Actor, and at the Actor Details Panel, set "Disable Preset Manager" to FALSE
(we are making sure, that the preset manager is ON)
**3.** again, at PresetManager Actor Details Panel, set "Default Live Stage Actor" to "Container1_Logo"
**4.** Press Play
**5.** At the Preset Manager UI, look up "Density Field from Bitmap" - and change the bitmap.
(Once done, SAVE the modified preset, using the "floppy disk" icon.)
**6.** In case you'd like to use your own bitmaps: copy them to /Content /FluidNinjaLive /Presets,
and repeat from point-1
