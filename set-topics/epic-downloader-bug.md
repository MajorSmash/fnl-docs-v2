---
doc_type: SET_TOPIC
title: "EPIC LAUNCHER BUG"
date: 2026-09-30
source_url: "https://discord.com/channels/850913821240983553/850924735630278705/1554912950916223048"
author: "Andras Ketzer"
source_channel: "bugs"
admitted_by: "reviewer-capture:722009818113638480"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

Occasionally, users have problems downloading the correct FluidNinja LIVE-2 version from FAB.
The downloaded project is sometimes corrupted (missing data) - or contains an earlier version of LIVE. As a consequence, users get error messages or visual glitches or the levels do not display any running fluid simulation when "Play" is pressed.
See these user discussions as an example: [Discord](https://discord.com/channels/850913821240983553/850913821827792940/1554806780377178124) + [Discord](https://discord.com/channels/850913821240983553/850913821827792940/1554909452249866401)

Identifying the problem:
- Failed project download via EPIC Launcher could be detected by checking the project version.
- To access the version number of your local ninja project, go to the top menu bar in the editor and look up these options: `Edit /Project Settings /Project /Description /About /Project Version`
- The `Project Name` field should be `FluidNinjaLive`, the `Version` should be starting with `2.0`, and the `Project Thumbnail` should display the Ninja Logo -as seen on [this screenshot](https://drive.google.com/file/d/1XJPIHUXlEvE5pEdceuWp7yUncn6B7sZt). In case we can not see these: the project is surely corrupted.

Two solutions for the problem:
1. Manual cache deletion for EPIC Launcher/ also try to update EPIC Launcher/ also try to restart EPIC Launcher
2. We can bypass EPIC Launcher, and directly download LIVE-2 at the Community Server, both as Student version (<#865943662411644928> ), or the data for Verified Owners (<#1466649696956317746> ).
