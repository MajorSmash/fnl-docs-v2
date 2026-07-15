---
doc_type: SET_TOPIC
title: "LIVE-2"
date: 2026-05-12
source_url: "https://discord.com/channels/850913821240983553/1466643263774527741/1503634156775669870"
author: "andrasketzer"
source_channel: "live-2-beta-info"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

**LIVE-2** vs **LIVE-1** USAGE

1. Being familiar with LIVE-1 is a great advantage, when it comes to learning LIVE-2, as *the core concepts are the same*:
 - live Actor and live Component as main setup elements
 - simple painter mode vs fluid simulated mode
 - sim buffers and their usage in compositor Output Materials
 - direct drive (applying dynamic Output Material instances to target objects)
 - tag and object class based collection of interactors
 - finite sim container attached to pawn / areas outside the sim are populated with passive (non-interactive) patterns
 - using external utilities to extend core features - like the "landscape utility" or the river "spline generator"
 - backward compatibility: LIVE-1 setups could be converted to LIVE-2 setups

2. LIVE-2 should be easier to set up and easier to use, compared to LIVE-1:
 - "linetracing" (as a method to project world position into sim space) is gone, together with the tedious setup steps
 - "tracemesh" as a technical object (and the many problems it caused) is gone
 - "floorsnapper" utility as a primitive method for surface alignment is gone - a new, fully integrated method replaces it
 - "Preset Manager" as a separate UI for fluidsim params is gone: all params managed from Component Details Panel
 - 300+ UI parameters are reorganized into a much more logical, hierarchical structure, reflecting the "input --> sim --> output" data flow
 - all params annotated with a clear explanatory tooltip

3. LIVE-1 feature set is extended in LIVE-2:
 - presets: finally, complete ninja state could be saved-to and read-from single preset files
 - caching: sim buffers could be saved to a single frame snapshot - and ninja could initialize from this snapshot
 - spawning: using presets, we could spawn ninja with complete param settings ("ready to go")
 - internal renderers: for simple setups (eg.: a torch, or footkick dust), we can use internal renderers, that spawn together with ninja and their state is preset defined
 - external renderers: a triple set is introduced --> surface aligned (A) meshes - (B) volumes - (C) particles ---- made to cover large areas with fx
 - improved utilities (landscape utility and spline generator both improved)
 - more input types: chaos destructibles, particles and Mesh SDF are natively handled by NinjaLive Component
