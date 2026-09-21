---
doc_type: SET_TOPIC
title: "DATA CHANNELS"
date: 2026-09-18
source_url: "https://discord.com/channels/850913821240983553/1319654748873560145/1550455117998985298"
author: "Andras Ketzer"
source_channel: "info-bits"
scope: LIVE2
version_min: null
version_max: null
media_urls: []
---

A DataChannel (DC) is a temporary data storege - introduced in UE 5.2. It exists as an asset in the Content Browser and most systems could write to it (Blueprints, Niagara, PCG) - also read from it. One example how we use it in ninja: we set up a simple particle emitter, add the **WriteToDataChannel** module (`/Content/FluidNinjaLive/Core/Modules/DataChannels/WriteToDataChannel.uasset`) and from now on, ninja can read the particle position and velocity - so we can use our particle emitter as a water spray or fire-source. The technology is demonstrated at many places in the ninja project. For example: `Fire_Smoke_Explosive.umap`, `Sand_Destructibles.umap`, `Water_Dense_Creek2.umap`

Problem: ninja is set up to read only a SINGLE, GLOBAL data channel `/Content/FluidNinjaLive/Core/DataChannels/NinjaDataChannel1_Global.uasset` - this asset is HARDWIRED in the `NinjaLiveCore` Niagara system, under `Main Emitter /Emitter Spawn Events /InitializePointReaders Module`
Serious drawback: EVERY system we set up to write to data channels must write to THIS single channel - and every ninja instance running in the World will read from this instance.

**Can we change this?**

While Niagara comes with a `Data Channel Reader Data Interface` - where we can MANUALLY define the asset we would like to read: THERE IS NO USER PARAMETER FOR THIS DI (as of UE 5.2 - 5.8). Which means: we can change the DC we want to read only inside niagara / and there is no exposed parameter we can access outside niagara. It is a pity. If there would be an exposed param, we could custom pick a DataChannel for each ninja instance.

**Workaround**: Unreal supports TWO kind of Data Channels: GLOBAL and ISLAND. By default, ninja uses the global type. This is, because DC ISLANDS were unstable under UE 5.2 - 5.5, causing frequent editor crashes. While UE 5.6 - 5.8 DC Islands seem stable, I did not dare to set this as default. The DC Island feature enables us to make DC read and write *location specific* in the World, with user defined bounds. Practically, DC sources outside the user defined bounds behave as "a different data channel" - writing and reading happens only inside the bounds of the given island. We can switch ninja to use DC Islands by (A) adjusting the writer side in the `WriteToDataChannel` module -- and (B) adjusting the reader side as well at the `NinjaLiveCore` Niagara system, under `Main Emitter /Emitter Spawn Events /InitializePointReaders Module`.

- There is an "Island" type Data Channel already included to the ninja project: `/Content/FluidNinjaLive/Core/DataChannels/NinjaDataChannel1_Islands.uasset`
- **Note-1**: ninja already contains a built in mechanism to ignore DC sources that are outside simulation extents - that is, why we can safely use the GLOBAL method.
- **Note-2**: we can switch off DataChannel reading in each ninja instance separately, using this param: `/LiveComponent /LiveInputPoints /DataChannelPointReaderEnabled`
- **Future hopes**: in case EPIC decides to introduce a User Parameter for Data Channels in Niagara... the whole issue is resolved.
