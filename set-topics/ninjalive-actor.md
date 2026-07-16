---
doc_type: SET_TOPIC
title: "NINJALIVE ACTOR"
date: 2021-09-27
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/892112549934424085"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

**NINJALIVE ACTOR** VS **NINJALIVECOMPONENT**
(1) use **NinjaLive Actor** for area effects (like a spellground, a pond, a smoke column) - as it is anchored to a fixed location, comes with collision detection, so, a large number of agents/objects could trigger interaction.
(2) use **NinjaLiveComponent** in vehicles and characters (and not necesserily biped char: think a flaming ball) as the agent takes the component with itself AND the component does NOT have collision detection: it is tracking the user defined components / bones of the HOST actor.
(3) special case: **Large-Water-Surfaces**
Usecase levels 1-6 and the belonging tut vids (https://www.youtube.com/playlist?list=PLVCUepYV6TvO6QhpqaT1GRVGC96QMcUJs) demonstrate how we could ideally deliver LARGE / INFINITE fluid surfaces: TWO sims combined - one as tile-generator, and a second as local interaction handler. Explained in the tut vids.
