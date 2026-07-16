---
doc_type: SET_TOPIC
title: "USING SEQUENCER AND MOVIE RENDER QUEUE"
date: 2021-06-17
source_url: "https://discord.com/channels/850913821240983553/851482546100633601/855045445377327105"
author: "andrasketzer"
source_channel: "tips-tricks"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

**USING SEQUENCER AND MOVIE RENDER QUEUE** (MRQ) 🎦

1. See **Manual: Chapter 23**: "Sequencer and MovieRenderQueue"
https://drive.google.com/file/d/1I4dglPjeXLcNkSGxGok8sQCy59qgYcF9

2. See **Tutorial Level 5** in the project + this **Tutorial Video**: "Using SEQUENCER"
https://youtu.be/dWJlKj446jQ

3. **Example**: a vid rendered using MRQ - https://youtu.be/iDir-ay8GVk

4. **Typical problem 1 - and the solution**:
1. on many levels, sim containers are Proximity Activated (work only when the spectator/pawn is close)
2. the cinematic camera **does not **necessarily triggers the proximity sensor - and containers remain passive
3. before rendering, you should **disable proximity sensor** at **NinjaLive Actor Details Panel /LiveActivation**
+ a releted post: [Discord](https://discord.com/channels/850913821240983553/851482546100633601/1006961843996200981)

5.**Typical problem 2 - and the solution**:
Ninja sim looks static / passive in MRQ render / while working fine in editor during "Play". Solution:
The antialising-settings in MRQ are a KEY factor: **temporal** antialising tries to add SUB-frames to the render, and this ruins ninja tick-flow.
As a test: try to switch OFF antialiasing entirely in MRQ - to see if this influences the result
+ a releted post: [Discord](https://discord.com/channels/850913821240983553/850926358196125726/1103982912099074110)

6. **A step-by-step guide for MovieRenderQueue**:
See this post: [Discord](https://discord.com/channels/850913821240983553/851482546100633601/1104000639702405230)
Also see in *Manual Chapter 23.3*: [Discord](https://discord.com/channels/850913821240983553/850925841793941565/855091427393273866)
