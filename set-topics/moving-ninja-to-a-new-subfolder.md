---
doc_type: SET_TOPIC
title: "MOVING NINJA TO A NEW SUBFOLDER"
date: 2021-06-30
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/859913476120772628"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

Aha - it seems that PresMan has recognized the container, but it can not find the preset-definition files. Here is the solution: Select a given sim container in World Outliner (eg. that FluidBlastGray, that is selected on your screenshot) --- Go to Actor Details Panel ---- select NinjaLiveComponent from the list of Actor Components --- go to Live Generic --- locate PRESET SEARCH PATH field --- and edit the field to match the new location.
In case you want ALL ninja containers automatically use the new path, open NinjaLiveComponent Blueprint with BP editor, and permanently change the default value of the "Preset Search Path" variable.
