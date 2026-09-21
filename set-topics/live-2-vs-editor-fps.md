---
doc_type: SET_TOPIC
title: "LIVE-2 vs Editor FPS"
date: 2026-09-15
source_url: "https://discord.com/channels/850913821240983553/1319655034803458069/1549315042959163413"
author: "Andras Ketzer"
source_channel: "▪️basic-support"
admitted_by: "reviewer-capture:722009818113638480"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

- LiveComponent, executes user defined Console Varibles (CVARs) at Game Start and at Game End
- the CVARs are located at: `LiveComponent /LiveCore /CVAR`
- the one you are looking for is [ExecuteCommandsAtEnd](https://majorsmash.github.io/fnl-docs-v2/parameters/#parameter-p-1-3-2-executecommandsatend) / `t.MaxFPS 30` --- delete it, or change the value
