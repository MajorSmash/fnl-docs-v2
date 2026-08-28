---
doc_type: SET_TOPIC
title: "**SPLINE BASED RIVERS PERFORMANCE ISSUE**"
date: 2026-08-28
source_url: "https://discord.com/channels/850913821240983553/1460578674695868510/1542819105575407666"
author: "Andras Ketzer"
source_channel: "live2-beta-discussion"
admitted_by: "reviewer-capture:722009818113638480"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

On medium and low end video cards, we might experience extreme performance drop on the `Water_Sparse_River` Level.
We can completely eliminate the issue by adjusting a bool flag:

1. Open Level: `/Content /FluidNinjaLive /Levels /Water_Sparse_River.umap`
2. Select Actor: `NinjaLive_River`
3. At the Actor Details Panel, select `NinjaLiveComponent`
4. At the Component Details Panel, look up `User Parameters`
5. Locate the `Spline Data Interface` at `DebugOnly /InputFields /SplineFields /Spline`
6. Notice the `UseLUT` bool flag and the associated value `NumLUTSteps`
7. Set `UseLUT = FALSE`

Short explanation:
- ninja is sampling the elevation (world space Z pos) of the river-splines
- the quaility of the sampled height-data mignt not be satisfactory (quantized to discrete values)
- the quaility of the sampled height-data could be improved by using the optional `UseLUT` feature
- the feature seems to impact performance on low-end video cards (confirmed: GTX1070, RTX 3050)
- the feature seems to be neutral on medium and high performance video cards (confirmed: RTX 2080, RTX 3080)
