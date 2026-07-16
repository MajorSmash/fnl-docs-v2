---
doc_type: SET_TOPIC
title: "TEXTURE ASSET REFERENCES"
date: 2021-12-07
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/917840100040253450"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

Imagine a 2x2 matrix, containing the 4 states that might influence asset lookup:
hard reference / soft reference -- VS -- relative path / absolute path

- Besides many (hard referenced) inputs (like Materials, or SceneCaptureCamera), ninja could use TEXTURES as simulation density and velocity inputs
- The reference for these textures is stored in a "Simulation Preset" file (a DataTable Asset, technically)
- DataTables can not store hard references, only soft references
- this is a problem at packaging: UE includes only hard-refernced assets to the package
- for this reason, we have introduced the FORCED option: LiveCompatibility /OverwritePreset*Input
- put simply: you need to create hard references before packaging

See: Manual PDF /14.2.B, "Dynamic Texture Lookup", 17.5 Disable Dynamic Asset Lookup (DAL), 21.3.6 Live Compability
See Issues and FAQ PDF/ i005

Input Texture Assets referenced at gameplay / runtime (non-packaging related info):
- by default, a given simulation *Preset* (a data table) references only the asset name
- ninja is trying to look up the given asset IN THE SAME FOLDER - OR SUBFOLDER - WHERE THE PRESET FILE IS
- to have a preset file and a referenced asset IN SEPARATE folders: we need to use ABSOLUTE PATHS
- abs.paths could be MANUALLY added (copy-pasted) to a preset data-table (no UI option for this)

See LEVEL "NinjaLive_Level02A_KeySettings" / Stage14 --- explains and demonstrates ABSOLUTE PATHS
