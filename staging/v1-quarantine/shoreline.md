---
doc_type: SET_TOPIC
title: "SHORELINE"
date: 2023-11-21
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/1176498081492107314"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

Thanks for the suggestion 🖐️ --- yes, shorelines are important / concave waves also! --- Recently, the focus shifted to (A) volumetrics *(an update is coming soon)* and (B) groundwork for a niagara-based system ---- with acces to all the Data Interfaces (eg. landscape height!).
.
However: there are ways users could implement shoreline. For a non-responsive foam, simply add distance-field based mask to the output material. For responsive method: create a material to read distance-fields, write the data to a RenderTarget - and use this as sim density input (via the already existing read external rendertarget function)
