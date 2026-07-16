---
doc_type: SET_TOPIC
title: "PRESET MANAGER - ERROR HANDLING"
date: 2021-08-21
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/878619133510582272"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

**(A)** Level-placed PresMan could be de-activated, at *PresMan Actor Details Panel*.
Icon turns gray (when enabled, it is black).

**(B)** PresMan tries to reach clients at startup. You could define the default client at the PresMan Actor Details panel. In case the default client field is empty / or client is not present / or client is asleep: PresMan tries to load someone else. Once started, you could manually select which client (which NinjaLive Actor) you would like to load for tweaking.

**(C)** Multiple Preset Managers per level: DO NOT

**(D)** PresMan can't find clients - case1:
Preset Manager could go blank when it can not connect a valid ninja container. A possible cause: containers are usually set to be proximity activated. When the pawn or spectator camera (that triggers the proximity sensor) is away, the **container is inactive** (asleep). PresMan can _NOT_ wake sleeping containers. This is communicated via an explicit on screen message.

**(E)** PresMan can't find clients - case2:
PresMan recognizes clients via the** Live INTERFACE** -- in case you are not using a the standard NinjaLive BP - eg. you have embedded NinjaLiveComponent to your custom BP, like a pawn, make sure you have added "Live Interface" under BP/Class Defaults/Interfaces

**(F)** Ninja moved to new subfolder - PresMan can't find presets:
NinjaLive actors contain a non-dynamic reference for preset LOOKUP location: */Content/FluidNinjaLive/Presets*
When moved ninja to a new subfolder: update the “PresetSearchPath” variable in NinjaLiveComponent Blueprint.

**(G)** Multiple NinjaLiveComponents per Actor:
Preset Manager is currently not prepared to handle multiple NinjaLiveComponents embedded in a Single Actor. You could try developing presets for each component separately (using duplicated actors) - and when done, simply referencing the final preset files for each Component under LiveGeneric/DefaultPreset.
