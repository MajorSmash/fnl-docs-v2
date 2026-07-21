---
doc_type: APPROVED_SUPPORT
title: "Are there any plans for PCG support for LIVE-2?"
date: 2026-07-21
source_url: "https://discord.com/channels/850913821240983553/1529031792894410922/1529043158095106128"
author: "Andras Ketzer"
question_ref: "https://discord.com/channels/850913821240983553/1527084779780964483/1529031769184014337"
version_min: null
version_max: null
media_urls: []
---

## Question

Are there any plans for PCG support for LIVE-2?

## Answer

LIVE-2 vs PCG (Unreal's built-in Procedural Content Generation)
.
1. As of FluidNinja LIVE-2 version 2.0.0.56, we are in a neutral position with PCG. LIVE-2 has its own methods to generate volumes, water bodies, drive landscape surfaces and foliage. These methods do not interfere with the PCG methods - and might be used together with PCG on various ways.

2. Two key factors on the ninja side:
- Ninja could write sim buffer data into user defined RenderTargets (RT), and write sim position and extents into user defined Material Parameter Collections (MPC). Users can read the the RT and the MPC in their custom systems and materials - so theoretically, ninja could be used to drive any kind of system, using the exposed data
- Ninja could collect both input objects and external systems as output objects to visualize the simulation. Data collection could happen at game start - and during the game too. So theoretically, we could pick up PCG generated object as sim input (e.g. rocks for a riverbed), or pick up PCG generated objects as output (e.g. a spline mesh, where we apply a river material). Not yet tested.

3. Illustrating ninja vs PCG usage with a few examples:
- Fire: we have a Live Actor running a bonfire simulation, using internal rendering (no external actors involved). Theoretically, we can use PCG to spawn our bonfire generator Live Actor procedurally on the level. We have not tested this possibility, yet.
- Lake: we have a Live Actor running a player attached water-simulation, driving an external system (Surface Aligned Meshes) responsible to generate a very large LOD-capabale mesh array for water meshing - and map the simulation data onto the water surface. This two actor setup (Live Actor + Mesh generator) is working efficiently, and not other systems are needed. Question: how does this involve PCG at all? On what ways can we use this setup with PCG? Is PCG used for water meshing? In case yes, we might be able to drive the PCG generated water mesh surface with the sim data. Not yet tested.
- River: we have a Live Actor running a player attached water-simulation, driving an external system (Spline Mesh Generator) responsible to generate a river geometry - and map the simulation data onto the water surface. Does PCG generate Splines? Theoretically, we might be able to drive a PCG spline, have not tested this yet.
- Foliage: the ninja setups included to the project use a ninja sim actor, driving a custom mesh generator (Surface Aligned Meshes) to demonstrate foliage usage. Surface Aligned Meshes is capable to generate scattered mesh instances (randomized foliage meshes) on a terrain surface, and map the simulation on these. Since PCG is very good at generating foliage, the need arises to drive PCG generated foliage with ninja. Theoretically possible - e.g. exposing ninja sim buffers and use them as input for a material that PCG maps on the foliage. An other method: can we pick up the PCG generated foliage system with ninja, and apply the foliage material using ninja? Not sure / not yet tested.

4. Plans: Following the LIVE-2 release, we might focus on PCG usage - depending on the number of user requests. If a large number of users are interested in this possibility, we will definitely try to lay the foundations for standard methods.
