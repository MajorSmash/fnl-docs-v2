---
doc_type: MANUAL
title: "FluidNinja LIVE-2 Manual"
date: 2026-07-17
source_url: "https://drive.google.com/file/d/19qc6Si5AwDKS8iOinB4egCtdn2hse1aa"
doc_revision: "2.01"
version_min: null
version_max: null
media_urls: []
---

# FLUIDNINJA LIVE-2 MANUAL

**Updated:** 17 July 2026  
This document uses MarkDown syntax - opening it with an [MD viewer](https://markpad.dev) results formatted text.

---

FluidNinja LIVE is a general purpose visual effect system for Unreal Engine.  
Following three years of development, FluidNinja LIVE-2 is about to be released 2026 Q3.  

- LIVE-2 **BETA** is already available for testing at the [Community Server](https://discord.gg/rgEtwua2tu)  
- A Playable LIVE-2 [Demo Build](https://fluidninja.itch.io/fluidninja-live-2-demo) is also available  
- The Project Homepage at [FAB](https://www.fab.com/listings/80fcf53e-49f7-4635-a71c-ba81280c6618) is distributing LIVE-1, until LIVE-2 is officially released. 
Learn more about the transition at <a href="#15-live-1-vs-live-2">Chapter 15</a>
- Support: andras.ketzer@gmail.com  

---------------------------------------------------------------------------------------

<div style="page-break-after: always;"></div>

## Table of Contents

1. <a href="#1-introduction">Introduction</a>
2. <a href="#2-assets-for-setup-building">Assets for Setup Building</a>
3. <a href="#3-porting-setups">Porting Setups to a User Project</a>
4. <a href="#4-ninja-basics">Ninja Basics</a>
5. <a href="#5-inputs-and-interaction">Inputs and Interaction</a>
6. <a href="#6-key-concepts-for-water">Key Concepts for Water</a>
7. <a href="#7-presets-spawning-caching">Presets Spawning Caching</a>
8. <a href="#8-tricks">Tricks</a>
9. <a href="#9-spline-based-rivers">Spline based Rivers</a>
10. <a href="#10-chaos-destructibles">Chaos Destructibles</a>
11. <a href="#11-volumetrics">Volumetrics</a>
12. <a href="#12-performance">Performance</a>
13. <a href="#13-cinematics">Cinematics</a>
14. <a href="#14-limitations">Limitations</a>
15. <a href="#15-live-1-vs-live-2">LIVE-1 vs LIVE-2</a>
16. <a href="#16-references">References</a>
17. <a href="#17-machine-learning">Machine Learning</a>


---

**EXTERNAL RESOURCES:**  
- Manual  as [MarkDown](https://drive.google.com/file/d/19qc6Si5AwDKS8iOinB4egCtdn2hse1aa) file or [HTML](https://drive.google.com/file/d/1UGXTOX6kPa1md0pl10gZ5OpoYOUTMSJE) file or [PDF](https://drive.google.com/file/d/1G09ZZy5lLb76aXSZonw1c5ELacBEfqRq) file  
- Level Content Descriptor file: as raw [TEXT](https://drive.google.com/file/d/15d3QdfleD1jDw8LJ3YQEGpAP-89b9bKa) (optionally: [MD](https://drive.google.com/file/d/12a5YpfON7gz0CK3Zm8MOMXEd40qYMheb) or [HTML](https://drive.google.com/file/d/1o8MF1q9b7znguwB0Ckh-G-jaSFY9LE6X) or [PDF](https://drive.google.com/file/d/1C9SNLRKE601a_SqKkhNKQn7TmDd5P-lu) ).  
- Parameter Descriptor file: as raw [TEXT](https://drive.google.com/file/d/1FedZwfW3iE1OgJr_Ye551TgaSLjqVUdj) (optionally: [MD](https://drive.google.com/file/d/1Glrrjv_E38zqYpoR7MrK-jtrstGuzshL) or [HTML](https://drive.google.com/file/d/1e7BpXVsdezdkXh5lyyCYjR9tDzM_P1Dq) or [PDF](https://drive.google.com/file/d/1zeYiRxoXkM7XtKssuEm-NpBflAJJX4ub) ).  

Recommended reading methods: 
1. The best option is to download the MarkDown file, and install a local [MarkDown viewer](https://markpad.dev), as it displays a side-bar, with *Table of Contents* always visible.
2. Download the HTML file and double-click on it to open a local browser tab. Con: no side-bar.
3. The PDF currently is only an auto-generated draft, not recommended.



---------------------------------------------------------------------------------------

<div style="page-break-after: always;"></div>

## 1. Introduction


Ninja is providing real time, responsive fluid simulation for Environment and Character effects, inside Unreal. Have a look at this [video capture](https://www.youtube.com/watch?v=QuCO66Tv8zw) from the LIVE-2 [playable demo](https://fluidninja.itch.io/fluidninja-live-2-demo)! Advantages: using 2D sim to drive 3D visualization, interaction with most Unreal object types, running large scale systems.

- Input data sources: particles, bones, destructible chunks, mesh distance fields, terrain elevation, spline-curves, bitmaps, RVT
- Output data targets: volumes (fog, dust, smoke, clouds), mesh surfaces (water, ground), mesh arrays (foliage) and particles

We can build largely different setups by choosing between main usage modes (A versus B):

1. A. **Simple painter mode** - footprints and imprintings on the ground, no fluidsim
   B. **Fluidsim mode** - advecting density to simulate gas and fluid motion  

2. A. **Camera facing mode** - visualization turning towards the player: flames, smoke, explosions  
   B. **World facing mode** - aligning liquid surfaces & gas volumes with underlying surfaces: terrain flowing water, low lying fog upon a landscape  

3. A. **Solo mode** - a single Live Actor with INTERNAL render for local effects: pool, bonfire, portal  
   B. **Driving other systems with Live Actor** - using EXTERNAL render to cover large areas that extend beyond the sim area - like an ocean coastline or a desert. Simulation is attached to the player - so the near background is always interactive as the player moves in the world. Beyond the simulated area: passive patterns.

Ninja is a modular visual effect system - **Live Component** and **Live Actor** being the core pieces, optionally combined with external renderers, mesh generators, utilities. It takes approximately a week to pick up basic concepts by going through the example levels and documentation. The project opens up with a **Starting Guide**. Being familiar with earlier ninja versions is an advantage. 

Ninja could be used in other projects by MERGING. Briefly: quit Unreal and copy the *FluidNinjaLive* folder from the *Content* folder of the ninja project - to the *Content* folder of the host project. Do not try to migrate. Following the merge, we could start to implement visual effects in the host project. 

While experienced users can build setups from scratch, the suggested method is modding existing setups. Content on the ninja demo levels is organized into Stages (shown as folders in the Outliner) - each Stage containing key Actors of a given setup. Copy-paste stage contents from a ninja level, to your level - and start modifying it to fit your needs.


**Presets**: Live Component and Live Actor parameter state with all input field values could be saved to a single preset file - and loaded back. Presets are not covering external systems. We could use the feature three ways:
  - create versions from a setup
  - transfer state from one ninja actor to an other
  - spawn ninja in a preset-defined state, in-game

Briefly, this is what we need to know to start exploring the ninja project.  
To avoid disappointment: please have a look at `Chapter 14` "Limitations".





---------------------------------------------------------------------------------------

<div style="page-break-after: always;"></div>

## 2. Assets for Setup Building

In this Chapter:
- 2.0 <a href="#2-assets-for-setup-building">Intro</a>
- 2.1 <a href="#21-typical-setups">Typical Setups</a>
- 2.2 <a href="#22-key-assets-listed">Key Assets</a>

<a href="#table-of-contents">Back to the Table of Contents</a>

---

Ninja is a modular visual effect system. By combining the included assets, we can build different setups for different purposes. This chapter lists key ninja assets - and briefly describes what they do.

    Asset: a file in the Content Browser
    Actor: assets placed on Game Levels are represented as "Actors" in the Outliner
    Setup: Actors and Actor Components on a Level forming a functional unit

    - setup members could be connected by the Data Flow (A sends data to B)
    - setups members could be paranted (A is attached to B)
    - setup members could participate in complex effects (A - footprints, B - dust)

    Actors belonging to the same setup are grouped under a single folder in the Outliner.


**The single most important asset is Live Actor, built upon three wrapped layers:** 
`Live Core Niagara System` (1) - wrapped by `Live Component` (2) - wrapped by `Live Actor` (3)
- The niagara core is a minimum viable system, capable to read a limited set of input data, running fluidsim and internal renderers.
- Wrappers add data and asset management functions to the core - caching, presets, input data collection, output data distribution.
- Hierarchy is inclusive: Live Actor contains Live Component. Live Component contains Live Core.


**Live Actor functions could be extended by additional Systems:**
- External Renderers - to visualize large scale volumetric effects and particles
- Spline and Array based Mesh Generators - to create large water surfaces and responsive foliage
- Utilities - to handle Landscape Components, Bake Heightmaps, Spawn Live Actors... etc.



---------------------------------------------------------------------------------------


### 2.1 Typical Setups


Most setups are based on Live Actor - a compact unit that could be placed on levels, parented to the Player and spawned if needed. It comes with internal Mesh and Volumetric renderers. 

**Solo mode:** for visual effects that stay within the sim boundaries, we might not even need to use external systems - a single Live Actor could manage the case. For example:

- A pool of water, set up for a specific location, using internal plane-mesh to render the water
- A portal, set up for a specific location, using an internal, extruded volume to render a vortex
- A flaming aura, sim attached to the moving player, using an internal camera-facing volume to render flames and smoke


Cases, when we need to employ external systems:
- **Particles**: since Live Core does not support internal Particle rendering (yet), we need to add an external Niagara System to have fluid-driven particles in our setup. E.g. sparks for fire or splash-details for whitewater.
- **Special terrains**: ninja automatically samples elevation from `Landscape Components`... but for a purely mesh based terrain (no landscape) or voxel terrain, we need to set up external height capturing methods - like an RVT Volume or a top-down looking SceneCaptureCamera to provide ninja with elevation data. Think of a rocky hillside built entirely from Quixel meshes - and branching, surface-aligned creek for this specific location. 


**Extending the simulation area:** to handle large areas that stretch beyond the simulation bounds, we definitely need additional assets. A few examples:
- Large water: we generate ripples around the player as it moves along a lake coastline. `Live Actor` is handles interaction, runs the fluidsim and forwards the output data to a Mesh Spawner (`Surface Aligned Meshes`). The spawner is responsible for generating a large mesh grid and displaying ninja output on the meshes. The two Actors form "a setup" that manages a far-stretching interactive ocean surface. Members of this setup are in the same folder in the Level Outliner, and they should be deployed together on a new level to have a working ocean. Simple way: copy-pasting them to a new level - and adjusting their settings for the given scene.
- Footprints on Landscapes: `Live Actor` is switched to Simple Painter mode to draw footprints and wheeltracks on a sandy ground - the `Landscape Utility` is needed if we'd like to apply the dynamic footprint material on Landscape Components.
- Extended volume: a landscape covered with low lying fog, center area simulated, rest is passive - rendered by `Surface Aligned Volumes`, data for the center area coming from `Live Actor`.
- Clouds: `Live Actor` sends data to the standard Unreal `Volumetric Cloud Actor`


What if we'd like to combine the above? E.g. have footsteps on the coastline and ripples on water? We use multiple ninja actors!


Briefly, this is how typical ninja setups look like - ranging from a solo Live Actor to multiple Live Actors connected to 1-4 external systems. Even the most komplex setups could be built with 6-8 assets.


**For a complete list of the included Level Content with all Setups and on-level texts, see this text file: [LEVEL CONTENT DESCRIPTOR](https://drive.google.com/file/d/15d3QdfleD1jDw8LJ3YQEGpAP-89b9bKa)**



---------------------------------------------------------------------------------------


### 2.2 Key Assets Listed

- 2.3 <a href="#23-live-niagara-core">Live Niagara Core</a>
- 2.4 <a href="#24-live-component">Live Component</a>
- 2.5 <a href="#25-live-actor">Live Actor</a>
- 2.6 <a href="#26-pawn-and-camera-utility">Pawn And Camera Utility</a>
- 2.7 <a href="#27-landscape-utility">Landscape Utility (aka. Drive External Systems With Sim Data)</a>
- 2.8 <a href="#28-surface-aligned-meshes">Surface Aligned Meshes</a>
- 2.9 <a href="#29-surface-aligned-volumes">Surface Aligned Volumes</a>
- 2.10 <a href="#210-surface-aligned-particles">Surface Aligned Particles</a>
- 2.11 <a href="#211-spline-mesh-generator">Spline Mesh Generator Utility</a>
- 2.12 <a href="#212-scene-capture-camera">Scene Capture Camera Utility</a>
- 2.13 <a href="#213-ninja-spawner">Ninja Spawner Example</a>
- 2.14 <a href="#214-native-unreal-volumes">Native Unreal Volumes</a>
- 2.15 <a href="#215-output-materials">Output Materials</a>

<a href="#table-of-contents">Back to the Table of Contents</a>

---------------------------------------------------------------------------------------


### 2.3 Live Niagara Core


      Asset path: /Content /FluidNinjaLive /NinjaLiveCore.uasset
      Asset type: Niagara System
      Typical usage: part of Live Component, hidden
      Alternative usage: standalone mode


Niagara Core hosts the most important data processing functions: fluid simulation, buffer compositing - also equipped with Data Interfaces to read inputs and Internal Renderers to visualize sim output. It could be used in Standalone Mode without the wrapper NinjaLive Component. As the data management provided by the wrapper is essential, standalone mode is "not the typical ninja usage mode" - only recommended for professionals, who intend to optimize ninja for a special usecase or build their own wrappers. 
Standalone usage is demonstrated on six levels: 
`/Content /FluidNinjaLive /Levels /CoreOnly`


When used with Live Component, the Niagara Core is hidden and parameters are entirely controlled by the wrapper, we do not access them directly.



---------------------------------------------------------------------------------------


### 2.4 Live Component


      Asset path: /Content /FluidNinjaLive /NinjaLiveComponent.uasset
      Asset type: Actor Component
      Typical usage: Component of Live Actor
      Alternative usage: Component of arbitrary Actor
      Control: 323 parameters and 8 Editor Functions

Live Component is the control center of ninja setups:
- most control functions reside here, including input and output management, simulation behavior
- managing internal renderers and sending data to external systems
- natively contains and controls the Core Niagara System (hidden)
- managing Presets to save and load system state - covering all Live Core, Live Component and Live Actor params

Parameters and Editor Functions are displayed on the Component Details Panel. The top-down order of parameter groups intuitively resembles the data flow: `INPUT - SIMULATION - OUTPUT`. The Main parameter groups are:

      LiveCore
      LiveEditorTools
      LiveInputFields
      LiveInputPoints
      LiveSimulation
      LiveOutputRenderTargets
      LiveOutputMaterials
      LiveOutputParams
      LiveOutputExternalRenderers
      LiveOutputInternalRenderers
      LiveLegacy

**For a complete list of all parameters with description, see this text file: [PARAMETER DESCRIPTOR](https://drive.google.com/file/d/1FedZwfW3iE1OgJr_Ye551TgaSLjqVUdj)**
**Param descriptions are also added as Tooltips on the UI!**

Besides editing input field values at the Component Details Panel, Live Component could be controlled by Presets.

1. In-game: initializing system state from a Preset, ignoring input field values:
`/LiveComponent /LiveCore /InitSystemStateFromPreset`
2. In-Editor: copying values from a Preset to the input fields, overwriting original values:
`/LiveComponent /LiveEditorTools /PresetRead`

To learn about Live Component features - like setting up simulation inputs and outputs, visit the included tutorial levels: `/Content /FluidNinjaLive /Levels /Starter`

**Note**: Live Component uses a PUBLIC reference to Live Core Niagara System - which enables developers to replace Live Core. For example: we are creating a custom, modified version, while keeping the original. See: `/LiveComponent /LiveCore /CoreNiagaraSystem`

Important: **Live Component can not be directly placed on level**, must be a Component of a host (owner) Actor. Live Component could be added to any actor. When used with Live Actor: the feature set is further extended. See *Live Actor* topic below.


---------------------------------------------------------------------------------------


### 2.5 Live Actor


      Asset path: /Content /FluidNinjaLive /NinjaLive.uasset
      Asset type: Actor
      Icon: red circle with "N" letter
      Control: 24 parameters
      Typical usage: attached to the player
      Alternative usage: fixed location on level

1. Live Actor natively contains Live Component - and it is primarily made to ease Live Component usage - so users don't have to set up a host actor, just drop Live Actor on level.

2. Live Actor extends Live Component functions using two additional Components:
   - `Activation Volume` triggers a sleep-wake function - ideal for fixed location sim Actors activated by Player proximity
   - `Interaction Volume` is used for overlap detection - to collect point data sources

Note: input data is typically collected by Live Component alone - except one data type: to collect Point data from `Primitive Mesh Pivots` and `Skeletal Mesh Bones`, Live Component relies on Live Actor. Learn more by reading the "*Live Component: input data dependence on Live Actor*" part in the Limitations chapter.

Live Actor parameters could be accessed at the Actor Details Panel, with two parameter groups:
   - LiveActivation
   - LiveInteraction


---------------------------------------------------------------------------------------



### 2.6 Pawn And Camera Utility

      Asset path: /Content /FluidNinjaLive /Utilities /PawnAndCameraUtility.uasset
      Asset type: Actor
      Icon: green circle with "N" letter
      Typical usage: possess nearest pawn, camera and lights control
      Alternative usage: skip pawn management, with all other functions on

Pawn and Camera Utility is ONLY A HELPER TOOL for exploring ninja demo levels. Placed on all levels. Functionally, it does not contribute to ninja setups - and should not be used in the host project, once ninja is merged.

Key function: possessing nearest pawn when Play starts
`Utility Actor Details Panel /LiveToolsCamera /PossessNearestPawn = True`

Most ninja levels contain multiple pawns. We can explore the level in-editor, visiting different setups - wherever we start Play, the utility finds the NEAREST pawn (compared to our in-editor camera position) and possesses that. In case it is OFF, we have a free spectator camera while in Play.

A related function: to optimize the in-game performance of ninja demo levels with multiple pawns and multiple setups, we can set the Pawn and Camera Utility to DISABLE Live Actors attached (parented) to NON-POSSESSED pawns:
`Utility Actor Details Panel /LiveToolsCamera /DisableNonPossessedPawns = True`

We can also disable the Utility, without deleting it from level:
`Utility Actor Details Panel /LiveToolsGeneric /DisableBlueprint = True`

More useful functions:

1. we can reference a dedicated widget to equip Pawn and Camera Utility with in-game Light and Camera controls: 
`Utility Actor Details Panel /LiveToolsGeneric /WidgetToRotateDirectionalLight = Viewport_LightRotatorWidget`
By removing the widget definition on the UI, we get rid of in-game light and camera controls, keeping all other functions.
The widget also displays benchmarking tool buttons, like "show FPS", "max FPS", "Statistics" - at the screen bottom.
For Light control, we also need to define Level Main Light - directly, or using a tag:
`Utility Actor Details Panel /LiveToolsGeneric /WidgetTargetDirectionalLight = (user defined Actor reference)`
`Utility Actor Details Panel /LiveToolsGeneric /GetDirectionalLightViaTag = (user defined Tag)`

2. we can enforce vsync:
`Utility Actor Details Panel /LiveToolsGeneric /VSync = True`

3. we can reduce temporal antialiasing ghosing artefacts, enforcing sharper visuals:
`Utility Actor Details Panel /LiveToolsGeneric /TemporalAntialiasing = 0.25`
The `TemporalAntialiasing` param value defines the weight of current Frame's contribution to the history. Ninja sets this value to 0.25 by default - in order to have crisp visuals. Unreal Engine default is 0.04 - resulting smudgy, blurred surfaces when high frequency texture-space changes occur (eg.: a waterfall surface, covered with fast-panning flowmap textures).

Usage example in the ninja project: placed on all levels



---------------------------------------------------------------------------------------



### 2.7 Landscape Utility
**Also known as: Drive External Systems With Sim Data**

    Asset path: /Content /FluidNinjaLive /Utilities /DriveExternalSystemsWithSimData.uasset
    Asset type: Actor
    Icon: yellow circle with "N" letter
    Typical usage: forwards data from Live Actor to a Landscape Material
    Alternative usage: when Live Core is used without wrappers, this util can be used as data manager for Live Core

With this Landscape Utility we can send sim params from a user defined SOURCE Live Actor to the dynamic material on a TARGET Landscape. Why?

Fact: ninja Output Material handler is generating Dynamic Material Instances (MIDs) and applies these to external systems in runtime (when Play starts) - the process is called "Direct Drive". The advantage of this method: all external systems are automatically receiving sim buffer and sim param updates during play. 

Problem: Landscapes can not be assigned with materials during play. Consequently, ninja can not directly apply MIDs to Landscapes.

Solution: Landscapes can generate MIDs for themselves - and we can feed these with params!
Workflow, step-by-step:

Step 1: assign a ninja compatible landscape material to the landscape MANUALLY in editor:
`Landscape Actor Details Panel /Landscape /Landscape Material = Material Reference`

Step 2: enable MID handling for the Landscape:
`Landscape Actor Details Panel /Landscape /UseDynamicMaterialInstance = True`

Step 3: define SOURCE Live Actor and TARGET Landscape at the Landscape Utility's Actor Details Panel:
`/Data Source /GetNinjaActorViaTag` (or GetNinjaActorDirectly)
`/Data Target /Set LandscapesViaTag` (or SetLandscapesDirectly)

Usage example in the ninja project:
`/Content /FluidNinjaLive /Levels /Snow_Minimal.umap`

**Alternative usage**: when Live Core is wrapped by Live Actor, data management is handled by the wrapper. In case we are using Live Core in standalone Mode, the Landscape Utility could be used as data manager:

- get data from Live Core (see "Data Source" param group at the utility Actor Details Panel)
- define a material to be applied to external systems (see "Data Transfer" param group)
- apply the data-driven material on external systems (see "Data Target" param group)

Usage example in the ninja project:
`/Content /FluidNinjaLive /Levels /CoreOnly /Desert_SimplePainter_Landscape.umap`


---------------------------------------------------------------------------------------



### 2.8 Surface Aligned Meshes

    Asset path: /Content /FluidNinjaLive /OutputNiagara /SurfaceAlignedMeshes.uasset
    Asset type: Niagara System
    Icon: three blue waves
    Typical usage: generating a large continuous water surface by spawning uniform plane-meshes along a grid
    Alternative usage: generating landscape aligned foliage by randomizing template geometry on a terrain surface

This Niagara based mesh-generator utility has been created to manage the mass spawning and rendering of template meshes on the GPU. We can define a template mesh at:
`Actor Details Panel /User Parameters /TemplateMesh = (reference to user defined mesh)`

It is recommended to use template meshes with LOD geometry levels included: the Surface Aligned Meshes utility comes with a feature, to set template mesh LOD based on camera-to-mesh distance: meshes further away from the camera are rendered with reduced geometry. For example: the plane-mesh we use for ocean meshing in the ninja project comes with LOD-0, 500K triangles - LOD-6, two triangles.

Key feature: we can adjust how sensitively the Niagara GPU Mesh Renderer switches between LOD levels, based on Camera-Mesh distance. LOD is evaluated for each Mesh separately. We have four choices (0-3) - by using higher values we can enforce more agressive geometry reduction. IMPORTANT! This param greatly impacts performance:
`Actor Details Panel /User Parameters /LODsensitivity = 0-3`

Elevation sampling source:
  - A. LandscapeSample DI
  - B. RVTSample DI

Interaction: 
  - A. Standalone mode, rendering passive mesh-arrays, no input data required from ninja
  - B. Receive sim buffers from ninja - and render sim driven responsive mesh-arrays extending beyond the sim area

To drive the Surface Aligned Meshes Utility with ninja (Live Actor), we need to adjust params on the ninja side:

1. We should TAG our "Surface Aligned Meshes" niagara system, and tell ninja about the tag:
`/LiveComponent /LiveOutputExternalRenderers /DriveNiagaraComponentInTaggedActors = (user defined tag)`

2. We can apply ninja's dynamic Output Material Instance to the mesh:
`/LiveComponent /LiveOutputExternalRenderers /ExposeOutputMaterialToSurfaceAlignedNiagaraMeshes = True`
`/LiveComponent /LiveOutputExternalRenderers /MeshMaterial = (which output material is used: primary, secondary or tertiary)`

Alternatively, we can define a Material on the Utility side (in this case, ninja sends params to THIS material): `Actor Details Panel /User Parameters /MeshMaterial = (reference to user defined material)`

A minor Unreal Engine bug: if we copy-paste SurfaceAlignedMeshes Actor from one level to an other, the "MeshMaterial" User Parameter is being cleared in the pasted version ("the pasted version forgets the material is was associated with").
Fix: manually re-assign the material with the user parameter.

What "driving" the surface mesh with ninja practically means:
1. defining a material on the utility side OR applying a material coming from ninja
2. in both cases, we feed the material with parameters coming from ninja: sim position, sim extents, sim buffers
3. the material, applied to the mesh, can utilize the incoming sim buffers many ways:
   - Use pressure to drive vertex world-position offset (WPO): waves actually distort the geometry
   - Use the incoming height (elevation) data to set WPO: the flat mesh surface is aligned with the underlying terrain! For surface alignment, we need to locate the "HeightMap" Parameter Group in the Material Instance, and SET "EnableHeightAlignment" = True

**IMPORTANT: "surface alignment" could mean two different processes in the case of "Surface Aligned Meshes" Utility!**

1. aligning the vertices of a FLAT mesh-array with the underlying terrain, by the material, using the incoming elevation data. This happens when we use the utility for terrain-flowing liquids - like a creek on a rock bed, or a lake washing the coast. Key param:
`Output Material Instance /HeightMap /EnableHeightAlignment = True`

2. aligning the position of the generated meshes with the underlying terrain, by the utility, using internal elevation data. This happens when we use the utility for terrain-aligned foliage - like grass clumps on a hillside. Key param:
`Actor Details Panel /User Parameters /EnableLandscapeSampler = True`

Usage examples in the ninja project:
Foliage: `/Content /FluidNinjaLive /Levels /Grass.umap`
Water-meshing: `/Content /FluidNinjaLive /Levels /Water_Dense_Sea.umap`
Water-meshing: `/Content /FluidNinjaLive /Levels /Water_Dense_Creek2.umap`


---------------------------------------------------------------------------------------


### 2.9 Surface Aligned Volumes

    Asset path: /Content /FluidNinjaLive /OutputNiagara /SurfaceAlignedVolumes.uasset
    Asset type: Niagara System
    Typical usage: generating an extended, landscape aligned, fluidsim driven volume
    Alternative usage 1: generating passive (not fluidsim driven), landscape aligned volume
    Alternative usage 2: only sample landscape elevation and write height to a RenderTarget (no volumetric rendering)

This Niagara based volume-rendering utility has been created to manage and render large, surface aligned volumes on the GPU. 
For volumes what are no larger than the sim area, we DO NOT need this utility: Live Actor has both the landscape elevation reading and the internal volumetric rendering features. This utility is useful to extend volume coverage beyond the sim area: central area simulated, rest is passive.

Supported volume types: Heterogeneous Volumes (HVOL) and Fog Volumes (FVOL). Note: to render Fog Volumes, we also need the standard Unreal "Exponential Height Fog" Actor placed on level, with "Volumetric Fog" feature switched on! 
For Cloud Volumes (CVOL), we use the standard Unreal "Volumetric Cloud" Actor.

To drive the Surface Aligned Volumes Utility with ninja (Live Actor), we need to adjust params on the ninja side:

1. We should TAG our "Surface Aligned Volumes" niagara system, and tell ninja about the tag:
`/LiveComponent /LiveOutputExternalRenderers /DriveNiagaraComponentInTaggedActors = (user defined tag)`

2. We can apply ninja's dynamic Output Material Instance to the Volume:
`/LiveComponent /LiveOutputExternalRenderers /ExposeOutputMaterialToSurfaceAlignedNiagaraFVOL = True`
`/LiveComponent /LiveOutputExternalRenderers /FVOLMaterial = (which output material is used: primary, secondary or tertiary)`
`/LiveComponent /LiveOutputExternalRenderers /ExposeOutputMaterialToSurfaceAlignedNiagaraHVOL = True`
`/LiveComponent /LiveOutputExternalRenderers /HVOLMaterial = (which output material is used: primary, secondary or tertiary)`

Note: we need a specially prepared Material Instance to support the "simulated center - passive outer area" technique. We call this "decoupling" - and materials set up for this are all named like this: `MI_FVOL_DECOUPLED_(...)`

Note: for PASSIVE usage mode (using without ninja), we can define the volumetric materials directly on the utility UI
  `Actor Details Panel /User Parameters /FVOLMaterial`
  `Actor Details Panel /User Parameters /HVOLMaterial`
  Materials set up for passive usage are all named like this: `MI_FVOL_PASSIVE_(...)`

A minor Unreal Engine bug: if we copy-paste SurfaceAlignedVolumes Actor from one level to an other, the "FVOLMaterial" and "HVOLMaterial" User Parameters are being cleared in the pasted version ("the pasted version forgets the material is was associated with"). Fix: manually re-assign the material with the user parameters.

Elevation sampling source:
   - A. LandscapeSample DI
   - B. RVTSample DI

Interaction:
   - A. Standalone mode, rendering passive volumes, no input data required from ninja
   - B. Receive sim buffers from ninja - and render sim driven responsive volumes that EXTEND beyond the sim area

Usage examples in the ninja project:
Sim driven extended volume: `/Content /FluidNinjaLive /Levels /Fog_Mist.umap`
Passive extended volume: `/Content /FluidNinjaLive /Levels /Fog_Mist_PASSIVE.umap`
Only used as height samper, no volumetric rendering: `/Content /FluidNinjaLive /Levels /Clouds_PASSIVE.umap`


---------------------------------------------------------------------------------------


### 2.10 Surface Aligned Particles

      Asset path: /Content /FluidNinjaLive /OutputNiagara /SurfaceAlignedParticles.uasset
      Asset type: Niagara System
      Typical usage: generating surface aligned, fluidsim driven SPRITE particles
      Alternative usage: generating surface aligned, fluidsim driven MESH particles

Live Core does not support internal Particle rendering (yet) - so we need to add THIS external Niagara System to have fluid-driven particles in our setup. E.g. sparks for fire or splash-details for whitewater.

"Surface Aligned Particles" is experimental and serves as a proof of concept: apart from driving particles with sim velocity - and determining their distibution via sim density - we can set their vertical position using the HEIGHT output coming from the simulation. Sim height output is a sum of the terrain elevation below the simulation area and "mass" (the height of water in the simulation area).

Major modifications might come to this Niagara System: the current height alignment method does not support the detachment of particles from the control height - this is really needed in order to have nice splashes at turbulent places.

**WARNING: many setups in the ninja project still use legacy particle setups from the LIVE-1 era**
`/Content /FluidNinjaLive /OutputNiagara /LegacySimDrivenSystems`

In general we can say: while "surface meshing" and "volumetrics" are working fine in the ninja project - "particle rendering" is in the prototype phase, needs a lot of work to reach final state - this might happen in later NinjaLive releases (e.g. LIVE 2.1)



------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


### 2.11 Spline Mesh Generator

      Asset path: /Content /FluidNinjaLive /Utilities /SplineGenerator.uasset
      Asset type: Actor
      Usage: generate spline mesh for rivers

Related Manual content: `Chapter 9` Spline Based Rivers

Spline generator is a blueprint, that clones a user defined mesh along a user-defined spline - made to generate geometry for rivers. 
The river material is managed by NinjaLiveComponent with Direct Drive: we define an output material and ninja applies it on tagged Actors (using primary, secondary or tertiary output material is a user choice)
`/LiveComponent /LiveOutputMaterials /PrimaryOutputMaterials`
`/LiveComponent /LiveOutputMaterials /Apply1stOutMatToActorsWithTag`

Intended method, when driving splinemeshes with ninja: 
- have a long, manually built, persistent spline mesh along the level
- attach (parent) Live Actor to the player, and set it to drive the spline
- have simulated, responsive patterns inside the sim area (wherever the player crosses the river)
- have passive patterns outside the sim area, generated by the output material, using the `TileMap` param group 
- the passive patterns can follow river curvature - if TileMap is switched to LOCAL UV

IMPORTANT NOTE: Splines vs Surface alignment
Briefly: spline meshes should be manually aligned with the underlying terrain, automatic surface alignment NOT recommended.
Details: while mesh grids (generated by the Surface Aligned Meshes Utility) could be surface aligned - this is NOT being the case with Spline-Meshes (made with SplineGenerator Utility)! Surface alignment means: we use elevation data to displace vertices, to align with an underlying terrain surface. A prerequisite of this operation: all vertices (before surface alignment) have the same vertical position - with other words: the mesh is FLAT. Spline meshes are "manually shaped" meshes: the vertices of a spline mesh are scattered along the XYZ axes - hence: we can not apply surface alignment to them. Another problem: elevation data coming from ninja covers only the simulation area. 

In case we'd like to set up a completely passive river (Live Actor not involved), we can define a river material at the SplineGenerator UI:
`SplineGenerator Actor Details Panel /SplineGenerator /EditorPlaceholderMaterial = (user defined reference)`

**Learn more about spline rivers at this tutorial level:**
`/Content /FluidNinjaLive /Levels /Starter /Tutorial06_SplineBasedRivers.umap`


---------------------------------------------------------------------------------------



### 2.12 Scene Capture Camera

      Asset path: /Content /FluidNinjaLive /Utilities /SceneCaptureCameraUtility.uasset
      Asset type: Actor
      Icon: black circle with "N" letter
      Typical usage: capture elevation data and write to a RenderTarget
      Alternative usage: bake the captured elevation into a Texture

This utility is a modified version of the native Unreal "SceneCaptureCamera" - extended with a baking tool. This utility is capturing scene depth. If capturing top-down: `depth = elevation = heightmap`. We can use this as height input for ninja. When? On special terrains. Ninja automatically samples elevation from Landscape Components... but for a purely mesh based terrain (no landscape), we need to set up external height capturing methods - like an RVT Volume or a top-down looking SceneCaptureCamera to provide ninja with elevation data. 

Think of a rocky hillside built entirely from Quixel meshes - and a branching, surface-aligned creek for this specific location.
We have a SceneCaptureCamera set up, looking down the rocks, writing the elevation data to a RenderTarget - which we read on the ninja side. The height data is being used two times:
1. in the ninja simulation, to confine the flow (water flows "downwards" and remains in local lows)
2. in the `Output Material`, to displace the vertices of the flat water-mesh and make it surface aligned

See this level with the above described example setup: 
`/Content /FluidNinjaLive /Levels /Water_Dense_Creek2.umap`


**SETTING UP THE UTILITY:**

The XY position of the capture utility Actor must be the same as Live Actor XY position.
Z position should be above highest captured object.

The Scene Capture Camera Utility is a modified version of the Unreal Default SceneCaptureCamera, with additional options, located at the  Actor Details Panel, under the "Ninja Related Settings" Parameter Group.

- Extent of Captured Sim: should be the same as sim extents (the "X" component of "ExtentsXYZ" Live Component parameter).
- Capture Actors with these Tags: only tagged actors are being captured

Baking options are also located in this param group, see these buttons: 
- CaptureSingleFrameInEditor
- SaveSingleFrameAsTexture

Define the RenderTarget where we write the elevation data:
Actor Details Panel /SceneCapture /TextureTarget


KEY PARAMS ON THE NINJA SIDE:

`/LiveComponent /LiveInputFields /HeightField /EnableHeightField = True`
`/LiveComponent /LiveInputFields /HeightField /ExternalHeightData /UseExternalHeightData = True`
`/LiveComponent /LiveInputFields /HeightField /ExternalHeightData /ExternalHeightDataFromRenderTarget = (user defined RT)`
`/LiveComponent /LiveInputFields /HeightField /ExternalHeightData /ExternalHeightDataNullPoint = (the Z position of capture camera)`

Learn more at this tutorial level: 
`/Content /FluidNinjaLive /Levels /Starter /Tutorial03_KeyConceptsForWater.umap /STAGE 2C`



---------------------------------------------------------------------------------------




### 2.13 Ninja Spawner

      Asset path: /Content /FluidNinjaLive /Utilities /NinjaSpawner_EXAMPLE.uasset
      Asset type: Actor
      Icon: black circle with "N" letter
      Typical usage: spawn ninja
      Alternative usage: spawn ninja and landscape utility

This blueprint demonstrates how to spawn ninja and attach it to the player.

THE BLUEPRINT SERVES AS AN EXAMPLE & DEMO ONLY. 
DEVELOPERS SHOULD IMPLEMENT THEIR OWN SPAWNER MECHANISM, USING THE PROVIDED EXAMPLE.

Key steps performed by the demo blueprint:
1. Spawn Ninja with Default settings
2. Define Preset - with system state stored
3. Reinitialize system with new state

Spawner usage is demonstrated on this level:
`/Content /FluidNinjaLive /Levels /Starter /Tutorial04_Presets_Spawning_Caching.umap`


---------------------------------------------------------------------------------------



### 2.14 Native Unreal Volumes

Related content in the Manual: `Chapter 11`, **Volumetrics**

We are listing here three native Unreal Engine Actors, optionally utilized by volumetric ninja setups:
- A. Volumetric Cloud Actor
- B. Exponential Height Fog Actor
- C. Heterogeneous Volume Actor

Note: we can also add these Objects as **Component** to ANY actor, using the "Add Component" UI element.

.
(A) **Volumetric Cloud Actor**

      Asset path: native unreal asset, accessible through the "Place Actors" Panel
      Asset type: Actor
      Icon: gray cloud under a hemisphere
      Terminology: Cloud Volume = CVOL = CVolume
      Usage: render passive and fluidsim driven Cloud Volumes (CVOL)

Usage is demonstrated on these levels:
`/Content /FluidNinjaLive /Levels /Clouds.umap`
`/Content /FluidNinjaLive /Levels /Clouds_PASSIVE.umap`

**Special features:**
- Cloud shadows on ground: `Level Main Directional Light /Cast Cloud Shadows = True`
- Enable Local Point Lights for Clouds: `r.VolumetricCloud.EnableLocalLightsSampling 1`
- `VolumeCloud Actor /Cloud Tracing /ViewSampleCountScale` (default = 2)
In case we are using CVOLs on the ground level where players could get close - or we are performing a cloud-fly-through: we need to increase `ViewSampleCountScale` to 4-6 in order to avoid noise. Applying a CAMERA FADE in the volume material also helps, by fading out voxels close to the camera.

---------------------------------------------------------------------------------------


(B) **Exponential Height Fog Actor**

      Asset path: native unreal asset, accessible through the "Place Actors" Panel
      Asset type: Actor
      Icon: gray cloud above an upward pointing arrow
      Terminology: Fog Volume = FVOL = FVolume
      Usage: we need this Actor placed on level in order to render Fog Volumes (FVOL)

Prerequisites to render Fog Volumes:
- Exponential Height Fog Actor placed on level
- At the Actor Details Panel of Exponential Height Fog Actor: SET `Volumetric Fog = True`
- Top-Right Viewport Menu `/Show /Fog = Enabled` (ALT +F)
- Engine Scalability = EPIC

Fog Volume usage is demonstrated on these levels:
`/Content /FluidNinjaLive /Levels /Fog_Mist.umap`
`/Content /FluidNinjaLive /Levels /Fog_Mist_PASSIVE.umap`
`/Content /FluidNinjaLive /Levels /Misc /VolumeDemo_FVOL_Small.umap`

**Special features:**
- `r.volumetricfog.gridpixelsize` (default = 6)
FVOL grid resolution could be increased - with a performance cost - using this console command. Smaller numbers mean smaller voxels, higher resolution.
- `r.VolumetricFog.GridSizeZ`

---------------------------------------------------------------------------------------

(C) **Heterogeneous Volume Actor**

      Asset path: native unreal asset, accessible through the "Place Actors" Panel
      Asset type: Actor
      Icon: gray lizard head
      Terminology: Heterogeneous Volume = HVOL =HVolume
      Usage: render passive and fluidsim driven Heterogeneous Volumes Volumes (HVOL)

Usage is demonstrated on these levels, and setups:
`/Content /FluidNinjaLive /Levels /Misc /VolumeDemo_HVOL_Small_PASSIVE.umap` (all setups, except: Stage 10B)
`/Content /FluidNinjaLive /Levels /Misc /VolumeDemo_HVOL_Small.umap` (only one setup: Stage 10A)

Heterogeneous Volume Actor **WAS** the main method to render Heterogeneous Volumes under LIVE-1 (FluidNinja LIVE version 1.9).

LIVE-2 (FluidNinja LIVE version 2.0) uses Niagara based Heterogeneous Volume Rendering as the main method. Reason: since Live Core is implemented in Niagara - and the most often used External Rendering System `Surface Aligned Volumes` is also a Niagara System, these can natively acces Niagara based HVOL Rendering, there is no need to employ a separate renderer Actor.

In the LIVE-2 project there is a key stage, that demonstrates the three possible ways to render fluidsim driven Heterogeneous Volumes - and this stage also feature a setup using the classic Heterogeneous Volume Actor - see `Setup A` below.

Level: 
`/Content /FluidNinjaLive /Levels /Misc /VolumeDemo_HVOL_Small.umap /Stage 10` - Key Volume Setup Methods 
- `Setup A` External Non-Niagara: driving external, non-niagara based heterogeneous volume rendering with Live Component
- `Setup B` External Niagara: driving external, niagara based heterogeneous volume rendering with Live Component
- `Setup C` Internal Niagara: using Live Component internal (built in, native) heterogeneous volume rendering

In the LIVE-2 project there is a whole level that showcases the features of heterogeneous volume rendering with PASSIVE setups. A Passive setup is not fluidsim driven, the visible patterns are defined purely in the volumetric Output Material. For the feature demo, we do not need landscape alignment either. Since the most simple way to render passive, not landscape aligned HVolumes is the Heterogeneous Volume Actor - we use this for demo purposes. See this level:
`/Content /FluidNinjaLive /Levels /Misc /VolumeDemo_HVOL_Small_PASSIVE.umap`

---------------------------------------------------------------------------------------
**Special Features:**
- Enabling CAST shadows for Heterogenous Volumes
Enable SM6 (Shader Model 6)
`/Project Settings /Platforms /Windows /D3D12 Targeted Shader Formats`
Enable Lumen:
`/Project Settings /Engine /Rendering /Global Illumination`
Execute console commands:
`r.HeterogeneousVolumes.IndirectLighting 1`
`r.HeterogeneousVolumes.AmbientOcclusion 1`
`r.HeterogeneousVolumes.Shadows 1`
Enable Shadow Casting at:
`/Project Settings /Engine /Rendering /Heterogeneous Volumes`
Enable Translucent Self Shadowing:
`/Project settings /Engine /Rendering /Support Volumetric Translucent Self Shadowing = True`

- Using the below console variables, we could improve HVOL rendering performance:
`r.HeterogeneousVolumes.MaxStepCount 256` (default = 512)
`r.HeterogeneousVolumes.VolumeResolution.Z 256` (default = VolumeResolution.X)
VolumeResolution.Z is handy/recommended, we could easily reduce volume vertical resolution without noticeable differences.
`r.HeterogeneousVolumes.Preshading 1` (default = 0)
If 1, improves performance with fullscreen, soft, noisy volumes AND decreases performance with smaller, hard contour volumes.

See "Useful Console Variables" section at this site: https://docs.unrealengine.com/5.3/en-US/heterogeneous-volumes-in-unreal-engine/



---------------------------------------------------------------------------------------



### 2.15 Output Materials

Related read: `Chapter 4, Point 9` - Ninja Basics, Output Materials

Output Materials are the final station of the ninja data processing pipeline:
**DATA INPUT - SIMULATION - DATA OUTPUT - VISUALIZATION**

They work like a compositor, combining incoming data with noise and tile patterns:
- receiving raw sim buffers from ninja (e.g. density, velocity, pressure, elevation) 
- receiving params from ninja (e.g. sim position, sim size)
- read noise patterns and combine these with raw sim data (e.g. flow detail maps)
- contain passive pattern generators, independent from ninja (e.g. texture tiling )

Depending on the material parameter settings, the visual output could be extremely different: a water surface with caustics and refraction, flames, a billowy smoke volume.

Output Materials are used by Live Component INTERNAL renderers - and EXTERNAL render systems. Technically: applied on mesh surfaces or assigned to volumes.

Output Materials in the ninja project are organized to a 3-layer inclusive hierarchy:

- A. Material Instances
- B. Materials
- C. Material Functions

---------------------------------------------------------------------------------------

**(A) Material Instances**
`Asset folder: /Content /FluidNinjaLive /OutputMaterials`
`Asset type: Material Instance`

The ninja project is using `Material Instances` to visualize simulation output. We call these instances `Output Materials`. Technically, Output Materials are Material Instances. We have hundreds of Output Materials associated with various setups. On the Ninja side, we can define Output Materials at this parameter group:
`/LiveComponent /LiveOutputMaterials`

Output Materials form two major groups: `surface materials` and `volumetric materials`. 
Within these two major groups, each Material Instance has the same parameters - associated with different values. 
We can create new Output Materials by duplicating existing ones (in the Content Browser) and modifying their parameters. 

    PRO TIP: we can adjust Material Instance parameters IN REAL TIME, while the game is running, at the `Material Instance Details Panel`. This is the best way to experiment and instantly see how our modifications look like. Highly recommended!

**IMPORTANT**: each Material Instance is parented to a Base Material.
   1. Open a Material Instance (double click on it, in the Content Browser or on the UI)
   2. Following the double click, the "Material Instance Details Panel" pops up
   3. Locate the "General" parameter main group at the bottom of Material Instance Details Panel
   4. Locate the "Parent" input field
      - we can reparent a Material Instance by picking an other parent Base Material
      - adjust the Blend Mode (Opaque, Masked, Translucent) under "Material Property Overrides"
      - adjust the Shading Model (Unlit, Default Lit, SingleLayerWater) under "Material Property Overrides"

---------------------------------------------------------------------------------------

**(B) Base Materials**
`Asset folder: /Content /FluidNinjaLive /OutputMaterials /Base`
`Asset type: Material`

There are 7 base materials in the ninja project.

SURFACE MATERIALS:
- `M_NinjaOutput_BaseMaterial_DECAL.uasset`
- `M_NinjaOutput_BaseMaterial_FOLIAGE.uasset`
- `M_NinjaOutput_BaseMaterial_SURFACE.uasset`

VOLUMETRIC MATERIAL:
- `M_NinjaOutput_BaseMaterial_CLOUDVOLUME.uasset`
- `M_NinjaOutput_BaseMaterial_FOGVOLUME.uasset`
- `M_NinjaOutput_BaseMaterial_HETEROGENVOLUME.uasset`
- `M_NinjaOutput_BaseMaterial_SMOKEVOLUME.uasset`


---------------------------------------------------------------------------------------

**(C) Base Material Functions**
`Asset folder: /Content /FluidNinjaLive /OutputMaterials /Base`
`Asset type: Material Function`

All base materials are built on 3 base Material Functions:
- `MF_NinjaOutput_BaseFunction_SURFACE.uasset`
- `MF_NinjaOutput_BaseFunction_VOLUME.uasset`
- `MF_NinjaOutput_BaseFunction_WATER.uasset`



---------------------------------------------------------------------------------------

<div style="page-break-after: always;"></div>


## 3. Porting Setups

In this Chapter: to use ninja in our project, we are going through the below steps
- 3.1 <a href="#31-merging-ninja">Merging ninja to the Host Project</a>
- 3.2 <a href="#32-finding-setups">Browsing the ninja demo levels, finding a Setup we'd like to use</a>
- 3.3 <a href="#33-copying-setups">Copy-pasting the Setup to a level in the Host project</a>
- 3.4 <a href="#34-adjusting-setups">Adjusting the Setup to fit the new environment</a>

<a href="#table-of-contents">Back to the Table of Contents</a>

---

### 3.1 Merging Ninja
Ninja is a fully functional, standalone Unreal project: we can open it up in Unreal Editor using the `FluidNinjaLive.uproject` file in the project root - and then explore the original ninja levels. 

In order to access ninja Features and Content in other projects: **ninja should be MERGED to a host project.** Preparing the HOST project:

1. Enable `ChaosVehicles Plugin` in the host project at `Edit /Plugins`. 
Not essential - needed to access vehicle based setups.

2. Set `Edit /Project Settings /Engine / Rendering /SoftwareRayTracing /GenerateMeshDistanceFields = True`
This feature is enabled by default in UE projects. Ninja needs Mesh SDF to sample "the shape" of objects. Alternatively: ninja can read objects "as points", without sampling SDF.

3. Locate `Edit /Project Settings /Engine /Physics /ChaosPhysics /SolverOptions`
Set `GenerateCollisionData = True`, `GenerateBreakData = True`, `GenerateTrailingData = True`.
Not essential, this feature is needed in order to read Chaos Destructible chunk positions.

Once we have prepared the host project:

4. **QUIT Unreal**  
Close the running Unreal Editor.
5. Using a File Manager, **COPY** the `FluidNinjaLive` folder - from the `Content` folder of the ninja project to the `Content` folder of the host project. **Do not use the Unreal "Migrate" function!** Following the copy, the most important asset *"NinjaLive Actor"* should be located like this: `/Content /FluidNinjaLive /NinjaLive.uasset`

Merging done! If done correctly, all original ninja levels and setups should work under the host project. Please make sure merging is properly done, by testing the original levels in the merged project! If OK, move on to the next step!

---------------------------------------------------------------------------------------

### 3.2 Finding Setups
The ninja project contains 200+ setups, covering a wide range of use cases - from a 10 centimeters smoking candle to a 10 kilometers cloud cyclone. Using keywords like "bonfire, "blood" or "swamp" we can search the following text file, with all level content listed: [LEVEL CONTENT DESCRIPTOR](https://drive.google.com/file/d/15d3QdfleD1jDw8LJ3YQEGpAP-89b9bKa)
Of course the best way to find the effect we need, is to explore the ninja project.

Content in the FluidNinja LIVE-2 project is organised in a 3 layer hierarchy:

- LEVELS (MAPS): ninja assets are placed on levels to demonstrate usage. In the FluidNinja LIVE-2 project, all levels are stored under a single folder: `/Content /FluidNinjaLive /Levels`

- STAGES: level content is organized into numbered stages, where a specific mode of using ninja is demonstrated (e.g. "*Stage 17 Bonfire*"). Stages also appear in the *Outliner* as Folders (this makes selecting stage content easy)

- SETUPS: when a stage contains large amount of content, it is partitioned into setups, marked with letters (A,B,C...)

Important technical demo levels reside in the "Levels" folder root:
`/Content /FluidNinjaLive /Levels`

Tutorial levels with example setups and educational text reside in this subfolder: 
`/Content /FluidNinjaLive /Levels /Starter`

Minimal setups using NinjaLiveCore NiagaraSystem without a blueprint wrapper, are in this subfolder:
`/Content /FluidNinjaLive /Levels /CoreOnly`

Less important technical demo levels reside in this subfolder:
`/Content /FluidNinjaLive /Levels /Misc`

Once a level is opened: press **PLAY / SELECTED VIEWPORT** to start a game session with simulations running. Most ninja levels contain *multiple pawns* (playable characters) - these levels are set up to *Possess Nearest Pawn*: wherever we are in the editor, when we press PLAY, the system finds the nearest Pawn - and starts the game session with that. The "possess nearest" function is managed by an additional Actor: `Pawn and Camera Utility`, marked with a green "N" icon.

Side note: ninja is compatible with **PLAY / SIMULATE** - but: most setups on the ninja demo levels are switched to player-activated mode: simulation wakes when the player is close, and goes to sleep when the player is far. The floating editor camera of the "Play / Simulate" mode is "not a player" - and consequently, does NOT trigger wake events for sleeping simulations. In order to use Play / Simulate, we need to switch off the player-proximity based activation (same applies for cinematic usage):
`Live Actor Details Panel /LiveActivation /SimActivatedByPawnProximity = False`

On most levels, pressing the 0-9 keys IN-EDITOR takes us to *bookmarked* stages - or we could just fly around with the Editor Camera, before pressing Play.

---------------------------------------------------------------------------------------

### 3.3 Copying Setups
While we can set up effects from scratch, **the suggested method is modding existing setups**. Practically:

1. Locate a stage on a ninja level where your chosen effect is placed
2. Explore the stage IN-GAME and IN-EDITOR to see how it works
3. Identify the Stage Folder at the Level Editor *Outliner Panel*
4. Select the Stage Folder, right-click on the folder name and choose `Select / All descendants` from the pop-up context menu
5. When all Actors of the setup are selected: choose `Edit / Copy` from the main unreal header menu - or press `Control + C` on the keyboard. We have copied Actor *references* to the clipboard, and we are going to *paste* them on another level. (*Make sure ninja is already merged to the host project!*)
6. Open the target level, and choose `Edit / Paste` from the main unreal header menu - or press `Control + V` on the keyboard. We have pasted a ninja setup to a target level.

---------------------------------------------------------------------------------------

### 3.4 Adjusting Setups
Things to check, following the copy-paste of a setup

- **HIGH PRIORITY CHECKS** (1-7): we always check these settings
  Missing pieces, Input Tags, Output Tags, World Location, Parenting, Vertical position, Rotation and Scale 

- **LOW PRIORITY CHECKS** (8-11): we do these if the setup doesn't work, following the high prio checks
  Material refs in External renderers, Special Data Interfaces, Output RenderTaregets, Level Blueprints

---------------------------------------------------------------------------------------

1. **Missing pieces**: make sure you have copy-pasted all Actors needed to run the setup
(Actors belonging to a given setup, are grouped under a single Folder in the Outliner)

2. **Input Tags**: very often, ninja setups use TAGS to collect input data - tagged objects that interact with ninja. Input objects should be (re)tagged on the new level that hosts the setup, following copy-paste. TAG definitions and direct Actor References to check on the ninja side:
   - `Live Actor /Live Interaction /TrackActorPrimitiveComponentsWithTag`
   - `Live Actor /Live Interaction /TrackActorSkeletalMeshComponentsWithTag`
   - `Live Component /LiveInputFields /MeshFields /UseTaggedMeshesAsSDFInput`
   - `Live Component /LiveInputFields /SplineFields /GetSplineComponentfromActor`
   - `Live Component /LiveInputFields /SplineFields /GetSplineComponentsFromTaggedActors`
   - `Live Component /LiveInputFields /Destructibles /GetGeometryCollectionFromActor`
   - `Live Component /LiveInputFields /Destructibles /GetGeometryCollectionFromTaggedActor`

3. **Output Tags**: very often, ninja setups use TAGS to collect output targets - systems where output data is sent for visualization - called "external renderer". Output targets are mostly *part of the setup* we copy-paste, so tags are preserved. Here is a list of TAG definitions to check on the ninja side:
   - `LiveComponent /LiveOutputMaterials /"Apply... Material... to Actors with Tag"`
   - `LiveComponent /LiveOutputExternalRenderers /DriveNiagaraComponentInTaggedActors`

4. **World Location**: following the paste, on the target level, setup elements appear at their previous world space position, inherited from the source Level. Relocate them with care!
      - `Landscape Utility`, `Pawn and Camera Utility`, `Volumetric Cloud` and `Exponential HeightFog` work indifferently from their level location: it does not matter where we place them.
      - **All other setup elements are sensitive for location** (read more below)!
      Note: some niagara based utilities (e.g. a mesh-array generator) might not respond immediately to re-location in-editor - we need to save and reload the level to see the correct new position in-editor.

5. **Parenting**: make sure child-parent relationships have been preserved. If not: re-parent. 
E.g. Live Actor was parented to a pawn on the source level, we pasted it *without* the pawn - and we need to reparent it to a new pawn, on the target level. **Careful**: a pawn-attached Live Actor is always snapped to the pawn root position - no offset, we place it "in the middle of character", `Relative Position = 0,0,0` .

6. **Vertical position**: 
- **Water level**: when Live Actor is used in water setups that contain "a water body with flat surface" (a pool, a lake, a sea), a *key parameter* - `ClampingValue` - is used to define water level (the vertical position of the flat water surface). Following paste, we often want to re-adjust this parameter to change water surface position:
`/LiveComponent /LiveInputFields /HeightFields /ClampingValue`
- **Water meshing**, best practices: the external systems responsible for water meshing - **(A)** simple planar meshes - or **(B)** `SurfaceAlignedMeshes` Utility - should be placed to the same vertical position that we define by `ClampingValue`
  - with landscape-aligned "dense" water setups, water-mesh vertices are FORCED to the correct (surface aligned) position, so the mesh pivot position is not crucial - but it influences *culling*!
  - with not-surface aligned "sparse" water setups: it is the water-mesh pivot position that defines where the water-surface will be!

  Learn more about sparse/dense setups and surface alignment on this tutorial level: `/Content /FluidNinjaLive /Levels /Starter /Tutorial03_KeyConceptsForWater.umap` 

-  **SceneCaptureCamera**: when Live Actor is receiving terrain height data from a SceneCaptureCamera, it needs the vertical position of the capture camera as a reference. We need to adjust this param following paste: `/LiveComponent /LiveInputFields /HeightFields /ExternalHeightData /ExternalHeightDataNullPoint`
Also, make sure that `Camera XY pos = Live Actor XY pos` and `Camera Z pos` should be above the highest captured object. Learn more at *Chapter 2, Point 12*.


7. **Rotation and Scale**: all setup elements are sensitive to rotation and scale. As a simple rule of thumb: **DO NOT ROTATE AND NEVER SCALE SETUP ELEMENTS**. `Rotation = 0,0,0` and `Scale = 1,1,1`. 
Exception: simple, small, local space (non-world space) setups - like a portal, set up for a specific location on a level. These local setups could be rotatated to fit their new environment. Learn more about TRANSFORMS at this Tutorial Level: `/Content /FluidNinjaLive /Levels /Starter /Tutorial01_Basics.umap /Stage 7 Transforms`


8. **Material references lost** on the Niagara User Parameter input - Unreal Engine bug.
 `Material Interface User Parameters` on Niagara Actor Details Panel are CLEARED on duplication and copy-paste. A "Material Interface" stores a REFERENCE to a Material Asset (a specific file in the Content Browser). Using this parameter, we can tell niagara to use a certain material.
There are three Niagara Systems in the Ninja asset library that *optionally* rely on this input:
   - Surface Aligned Meshes
   - Surface Aligned Volumes
   - Surface Aligned Particles
   
      **Good news**: in most setups where the above three systems are used, Live Actor DIRECTLY DEFINES the Output Material for the Niagara systems it is driving - so the data loss does not have a visible effect in-game.
      In cases when the Material is defined on the Niagara side, the **workaround is to manually re-define Materials following copy-paste.** - Learn more at `Chapter 14, Point 6`, **External systems**.

9. **Occasional data loss** on the Live Core Niagara System Data Interfaces. This happens very rarely, and the circumstances are less clear - compared to the above described "Material Interface" bug. Learn more at `Chapter 14, Point 6`, **Ninja Core**.

10. Rarely, ninja setups drive external systems by writing sim buffers to `RenderTaregets` - and sim params to `Material Parameter Collections` - and these assets are manually defined as INPUT in the Material Instance applied to the driven External Renderer. Parameter groups to check on the ninja side:
      - `LiveComponent /LiveOutputParams`
      - `LiveComponent /LiveOutputRenderTargets`
      
      Careful: multiple Live Actors writing the same RenderTarget results a flickering glitch!

11. **Level Blueprints**: on most ninja levels, we use Level Blueprints to orchestrate demo mechanics - functions that are NOT related to setup workings. For example: start a vehicle if player enters a zone. Switch on PointLights if players switches off level main light. Swap ninja Output Materials if player presses numeric keys, in-game. Still: it is worth to have a look at the Level Blueprint when porting setups - to see how it contributes to the observed in-game behavior.




---------------------------------------------------------------------------------------

<div style="page-break-after: always;"></div>


## 4. Ninja Basics

**Core ninja concepts explained**

Context: *Chapter 2* listed the assets available for setup building. *Chapter 3* explained how we copy-paste existing setups from a ninja demo level to a new level. To modify setups, we need to learn about ninja features.

- This chapter is mirroring text from a tutorial level - and serves like a content guide:
`/Content /FluidNinjaLive /Levels /Starter /Tutorial01_Basics.umap`

- Suggestion: use the tutorial level for learning, instead of reading raw text. The level is equipped with interactive setups, so we instantly see how the described functions work!

---------------------------------------------------------------------------------------

In this Chapter:
- 4.1 <a href="#41-what-ninja-is">What ninja is</a>
- 4.2 <a href="#42-interaction-with-points">Interaction with Points</a>
- 4.3 <a href="#43-interaction-with-fields">Interaction with Fields</a>
- 4.4 <a href="#44-live-actor-components">Live Actor Components</a>
- 4.5 <a href="#45-transforms">Transforms</a>
- 4.6 <a href="#46-surface-alignment">Surface Alignment and Z-position</a>
- 4.7 <a href="#47-internal---external-render">Internal - External Render</a>
- 4.8 <a href="#48-directdrive">DirectDrive</a>
- 4.9 <a href="#49-output-materials">Output Materials</a>
- 4.10 <a href="#410-output-material-tricks">Output Material Tricks</a>
- 4.11 <a href="#411-modularity">Modularity</a>

<a href="#table-of-contents">Back to the Table of Contents</a>

---------------------------------------------------------------------------------------

### 4.1 What ninja is 
`(On level Tutorial01_Basics.umap / Stage 3)`

A motion-trajectory painter - feeding a 2D fluidsim - feeding Output Materials that visualize sim buffers. 

Most of the time, we are working with `NinjaLiveComponent` Parameters:

- Select a NinjaLive Actor in-editor
- Go to the *Actor Details Panel*
- Select NinjaLiveComponent
- Look at the "Live" Parameter-Groups, e.g. "LiveCore", "LiveSimulation"
- Notice the parameters - e.g. `/LiveComponent /LiveCore /SimSpeed`

Key mode switches:
- Simple Painter Mode vs Fluid Simulation mode
`/LiveComponent /LiveCore /SimplePainterMode = True / False`
- Camera Facing mode vs World Facing mode
`/LiveComponent /LiveCore /CameraFacing = True / False`

Data pipeline: what happens backstage?

- A. overlap detection, using a volume
- B. mapping overlapping object position to the simulation plane
- C. paint: write the mapped position and velocity of moving objects to the paint buffer
- D. drive fluidsim with the painted density and velocity buffers
- E. use raw simulation buffers to drive ANYTHING:
   - simple materials on object surfaces (water, sand)
   - volumetric materials (fog, smoke, clouds)
   - particles

---------------------------------------------------------------------------------------

### 4.2 Interaction with Points
`(On level Tutorial01_Basics.umap / Stage 4)`

See dedicated interaction with points tutorial setups:
`/Content /FluidNinjaLive /Levels /Starter /Tutorial02_Inputs_Interaction.umap / STAGE 6-11`
.
Ninja can track the POSITION of objects - and represent them as POINTS in the sim space.
Based on the method of tracking, we distinguish 3 object-types:

- A. Destrucible chunks: managed by `Live Component` see `Chapter 10`
- B. Particles: managed by `Live Component` see `Chapter 5, Point 6`
- C. Primitives and SkeletalMeshes: managed by `Live Component` and `Live Actor`

---------------------------------------------------------------------------------------

TRACKING PRIMITIVES and SKELETAL MESHES
- OBJECT CLASS based method 
- TAG based method

**Key fact: to track a given object,  BOTH ninja and the tracked object should be prepared.**

.

OBJECT CLASS based interaction - setup on the ninja side:
`/Live Actor /LiveInteraction /OverlapFilters`

  - Object type: WorldStatic, WorldDynamic, PhysicsBody, Pawn, Vehicle
  - Bone name: Precisely defined

OBJECT CLASS based interaction - setup on the object side:
`Object Actor /MeshComponent /Collision /Generate Overlap Events = TRUE`
`Object Actor /MeshComponent /Collision /Collision Presets /Object Type`
- Object Type: WorldStatic, WorldDynamic, PhysicsBody, Pawn, Vehicle

      Note-1:   ninja Object Type filter   AND   Object Type should match!
      Eg.: ninja set to read PhysicsBodies - and object CollisionPresets = PhysicsBody

      Note-2:  ninja is reading BONES as point data...  ONLY,  IF Object is SkeletalMesh and Collision Presets /Object Type = PAWN or VEHICLE

.
TAG based interaction - setup on the ninja side:
`/NinjaLive Actor Details /LiveInteraction /Track Actor Primitive Components With Tag`
`/NinjaLive Actor Details /LiveInteraction /Track Actor SkeletalMesh Components With Tag`

TAG based interaction - setup on the object side:
`Actor Details Panel /Tags`


.

**Tracking Points - Pros and Cons**:

- Pro: we could track points in a volume.
- Pro: points do not have to touch/cross the 2D sim plane in order to be mapped to sim space.
- Con:  using points, we can not represent the shape of objects.

Ideal usecase: objects interacting with a volume. Eg.: exploding debris chunks, particle-sources for smoke and fire... and any other case when we don't need exact shapes. E.g. pawn running in water, interaction around the feet.
Point Tracking is compatible with Camera Facing and World Facing setups too.

---------------------------------------------------------------------------------------

### 4.3 Interaction with Fields
`(On level Tutorial01_Basics.umap / Stage 5)`

See dedicated interaction with field tutorial setups:
`/Content /FluidNinjaLive /Levels /Starter /Tutorial02_Inputs_Interaction.umap / STAGE 1-5`

Ninja can read FIELDS generated by objects - and use the fields to represent object shape, velocity, curvature, height... etc. in the sim space.
We distinguish 4 object-types - each one generating a different kind of field:

(A) Static Meshes,  (B) Splines,  (C) Landscapes,  (D) Destructibles

- **A. Static Meshes** generate Signed Distance Field (SDF). This could be used to reconstruct object shape and velocity.
On the ninja side, we set a switch / and provide ninja with a Tag. Only TAGGED meshes are being read:
`/LiveComponent /LiveInputFields /MeshFields /EnableMeshDistanceFieldReader = True`
`/LiveComponent /LiveInputFields /MeshFields /UseTaggedMeshesAsSDFInput`
On the object side: we TAG objects under the Actor Details "Tags" menu.

- **B. Splines** generate a directional field. This could be used to determine flowing direction along the spline. (see the included river levels)
On the ninja side, we set a switch / and provide a tag:
`/LiveComponent /LiveInputFields /SplineFields /EnableSplineReader = True`
`/LiveComponent /LiveInputFields /SplineFields /GetSplineComponentsFromTaggedActors`
On the object side: we TAG objects under the Actor Details "Tags" menu.

- **C. Landscapes** generate height field. This could be used to align the sim with the surface + determine flowing direction.
(see `Tutorial03_KeyConceptsForWater.umap / STAGE 2`)
On the ninja side, we set a switch: 
`/LiveComponent /LiveInputFields /HeightFields /EnableHeightField = True`
On the object side: nothing to do - landscapes automatically expose height, if queried

- **D. Destructible chunks** generate SDF. This could be used to reconstruct chunk shape and velocity.
See `Chapter 10`, Chaos Destructibles

**Reading Fields - Pros and Cons**:

- Pro: we can represent the exact shape of objects
- Con:  objects must intersect/touch the 2D sim plane in order to be sampled. 
- Con: Skeletal Meshes can NOT generate fields. But, we can parent StaticMeshes to them!

Ideal usecase: objects interacting with a surface. E.g. impressions in sand, impact on water.
We utilize Field Reading only with World Facing setups.

---------------------------------------------------------------------------------------

### 4.4 Live Actor Components 
`(On level Tutorial01_Basics.umap / Stage 6)`


COMPONENTS of  NinjaLive Actor - and their role in Overlap Detection:
(A) NinjaLive Component, (B) Interaction Volume Component, (C)  Activation Volume Component

- **A. NINJALIVE COMPONENT**: Contains most ninja functions, EXCEPT overlap detection of Primitives and Skeletal Meshes. Primitive & Skeletal Mesh overlap-detection is managed by NinjaLive ACTOR, using the InteractionVolume.
.
Live COMPONENT could be added to ANY Actor / could work WITHOUT NinjaLive Actor - with one LIMITATION: without Live Actor, the Component loses the overlap detection feature for Primitives & Skeletal Meshes
.
Note: interacting with Particles, Destructibles and all kinds of Fields is managed by Live Component alone / Live Actor is not needed.
As an alternative option for using LiveComponent WITHOUT Live Actor - and STILL track Primitives & Skeletal Meshes:
We could continuously track (no overlap detection) Primitive & Skeletal Mesh Components of the OWNER ACTOR, using the features under this menu option:
`/LiveComponent /LiveInputPoints /InteractionWithOwner`

- **B. INTERACTION VOLUME**: Standard Unreal TriggerBox - we use it to detect overlapping Primitives and Skeletal Meshes.
Collected data is forwarded to Live Component every frame.
`Live Actor /LiveInteraction`

- **C. ACTIVATION VOLUME**: Standard Unreal TriggerBox - we use it to initiate simulation sleep/wake, driven by the overlap (proximity) of a user defined agent (typically: the player)
`Live Actor /LiveActivation`

---------------------------------------------------------------------------------------

**Activation vs Movie Render Queue**

Cinematic Camera is usually not recognized as "player" / could not trigger Activation Volume.
We better switch OFF Proximity based Activation completely before recording a sequence!

*Learn more: `Chapter 14`, Sequencer and MovieRenderQueue*

---------------------------------------------------------------------------------------

**InteractionVolume Size  vs  Sim Extents**

RECAPPING A KEY STATEMENT:   NinjaLive Component contains most ninja functions, EXCEPT overlap detection of Primitives and Skeletal Meshes - this is managed by NinjaLive ACTOR, using the InteractionVolume.

CONSEQUENCE:   InteractionVolume is used EXCLUSIVELY to determine the volume, where the detection of Primitives and Skeletal Meshes happens. InteractionVolume has NOTHING TO DO with simulation area size.

We can define the SIZE of InteractionVolume at:
`/NinjaLive Actor /LiveInteraction /InteractionVolumeSize`

It is the NinjaLive COMPONENT, where we define the size (extents, scale) of the simulated area:
`LiveComponent /LiveCore /ExtentsXYZ`

`ExtentsXYZ` also defines the volume where input data is handled:
Outside ExtentsXYZ both POINT and FIELD input is REJECTED.

KEY MESSAGE: it is the ExtentsXYZ parameter in NinjaLive Component, 
that defines the volume....

- (A) where input data is handled
- (B) where simulation happens, 
- (C) where INTERNAL RENDERERS could visualize the sim

---------------------------------------------------------------------------------------

### 4.5 Transforms
`(On level Tutorial01_Basics.umap / Stage 7)`


**SCALING SIM COMPONENTS**

Sim Components are scaled by DEDICATED PARAMS at Actor and Component Details Panel.
`/NinjaLive Actor /LiveActivation /ActivationVolumeSize`
`/NinjaLive Actor /LiveInteraction /InteractionVolumeSize`
`/LiveComponent /LiveCore  /ExtentsXYZ`
.
DO NOT scale the actor or the components using the "scale transform". Always keep the scale transform value on 1!
.
SCALING, EXAMPLE: we'd like to double the simulation size on the X axis
- Select LiveComponent
- Find LiveCore param group at Component Details
- Double the X component of "ExtentsXYZ" param
- Double the "Resolution X" param
- Select Ninja Actor
- Find LiveInteraction param group at Actor Details
- Double the X component of "InteractionVolumeSize" input field

DO NOT rotate actors to get the intended side-ratios. E.g. there is a ninja setup with 2:1 side proportions, but we want 1:2. Instead of rotating it 90 degrees, re-set the proportions!

---------------------------------------------------------------------------------------

**ROTATION OF SIM COMPONENTS**
1. Setups switched to CameraFacing Mode are ignoring 
Actor & Component rotation. This is obligatory.
/LiveComponent /LiveCore /CameraFacing = TRUE

2. WorldFacing (WorldAligned) setups also ignore Actor and Component Rotation, by default. 
But we can switch this on / off:
`/LiveComponent /LiveCore /IgnoreSystemRotation = True / False`
.
While `IgnoreSystemRotation` makes NinjaLiveComponent immune to Owner Actor Rotation... other (ninja driven) components of the same owner Actor are affected. For example:
      - Niagara Particle System Components
      - Volumetric Renderers

      To keep all components World-aligned, it is advised to set NinjaLive Actor's rotation transform to ABSOLUTE

3. There are cases when we want to rotate setups, and work in LOCAL space (as opposed to working in WorldSpace). We can do this:  see SETUP-C, above!
`/LiveComponent /LiveCore /IgnoreSystemRotation = False`
`/LiveComponent /LiveCore /WorldSpaceOffset /QuantizerStepSize = NoSimBufferOffset`

---------------------------------------------------------------------------------------

**POSITION**

Let us discuss the World-Position of sim buffers. Buffers are like a texture, to store patterns generated by the sim. The simulation could be in two states:

1. LOCAL SPACE
When running in LOCAL SPACE, the visible sim patterns move together with Live Component. In most cases, this does not look realistic. Think ripples in shallow water - the character should "leave them behind" as it moves forward. Ripples moving together with the character would look silly.

2. WORLD SPACE
When the simulation is running in WORLD SPACE, ninja is "pinning" sim buffers to the world, the visible patterns keep their position in the World, as if the moving Live Component is "leaving them behind". This behavior is the ninja default / looks realistic.

*The following setups demonstrate various combinations for local/world transforms:*

**Setup A**: World Facing - World Space

- Ignores user defined rotation (aligns with World XYZ)
`/LiveComponent /LiveCore /IgnoreSystemRotation = TRUE`
- Sim buffers "pinned" to World Space
`/LiveComponent /LiveCore /WorldSpaceOffset /QuantizerStepSize = TextureOffsetAutomatic`
This setup mode is typical when we simulate large, spatially fixed fluids: like a lake, or low lying fog over the ground. FREQUENTLY USED!

**Setup B**:  World Facing Rotatable - World Space
- Respects user defined rotation
`/LiveComponent /LiveCore /IgnoreSystemRotation = FALSE`
- Sim buffers "pinned" to World Space
`/LiveComponent /LiveCore /WorldSpaceOffset /QuantizerStepSize = TextureOffsetAutomatic`
We do not really use this combo in practice.
WorldSpace setups usually align with WorldXYZ. RARELY USED.

**Setup C**: World Facing Rotatable - Local Space
- Respects user defined rotation
`/LiveComponent /LiveCore /IgnoreSystemRotation = FALSE`
- Sim buffers "pinned" to Local Space
`/LiveComponent /LiveCore /WorldSpaceOffset /QuantizerStepSize = NoSimBufferOffset`
We use this one rarely, mostly for small, local decor vfx that does not move and rotated to a location-specific angle. RARELY USED.

**Setup D**: World Facing Rotatable  - Density Local Space - Velocity World Space
- Respects user defined rotation
`/LiveComponent /LiveCore /IgnoreSystemRotation = FALSE`
- Sim buffers in Local Space
`/LiveComponent /LiveCore /WorldSpaceOffset /QuantizerStepSize = NoSimBufferOffset`
- Fluid Inertia is being calculated in World Space
`/LiveComponent /LiveSimulation /Advanced /VeloFromSimAreaMotion = 1`
This setup mode is typical when we simulate small, moving fluid-containers: like a cauldron of water being pushed by the player. RARELY USED.

**Setup E**: Camera Facing - Density World Space - Velocity World Space
- Ignores user defined rotation (aligns with Camera Plane)
`/LiveComponent /LiveCore /CameraFacing = TRUE`
- Sim buffers "pinned" to World Space
`/LiveComponent /LiveCore /WorldSpaceOffset /QuantizerStepSize = TextureOffsetAutomatic`
- Fluid Inertia is being calculated in World Space
`/LiveComponent /LiveSimulation /Advanced /VeloFromSimAreaMotion = 1`
This setup mode is typical when we simulate small fluid-sources moving in a "fixed medium": like a handheld torch in the air - as the player moves. FREQUENTLY USED!


---------------------------------------------------------------------------------------

### 4.6 Surface Alignment
`(On level Tutorial01_Basics.umap / Stage 8)`


We are frequently using ninja to handle large areas: terrain surfaces, water bodies, fog layers.
We are combining THREE techniques to achieve this:

1. External Rendering: to visually extend the area and generate passive patterns outside the sim
2. WorldSpace Offset: to make the simulated patterns "pinned to world space"
3. Surface alignment: to make simulated patterns follow the landscape... "pinned to the surface on the Z axis", with other words.

LIVE-2 uses the concept of "HEIGHTFIELD" to describe the altitude of surface below the sim area.
LIVE-2 makes both (A) Interactions and (B) Visualization aligned with the heightfield... IF there is available heightfield.

The topics of surface alignment is complex - please visit the dedicated level to learn more:   
`Tutorial03_KeyConceptsForWater.umap / STAGE 2`

Before moving on to the next topic: let us remember a LEGACY method from LIVE-1, which has been used to "pin the simulation vertically": **Z-LOCK**
We don't use it anymore - but you can test it. Make sure "EnableHeightField" = FALSE, then:
`/LiveComponent /LiveCore /Zlock /MovementLockedOnAxis = Z`

---------------------------------------------------------------------------------------

### 4.7 Internal - External Render
`(On level Tutorial01_Basics.umap / Stage 8)`

**INTERNAL RENDER**
NinjaLive Component comes with built-in methods to visualize sim results:

   - Mesh Renderer
   - Volumetric Renderers (HVOL, FVOL, SVOL)

Renderers could be accessed at this param group:
`Live Component /LiveOutputInternalRenderers`

- PRO: When using internal render, we don't have to set up additional components or direct-drive external actors. Also, internal renderers are covered by the Preset System: a preset could save/load the complete state of Live Component, including Internal Renderers. So, it is easy to spawn a LiveComponent with internal renderer.

- CON: Internal Renderers cover / visualize only the simulation area. (Sim area is defined by "LiveCore /ExtentsXYZ").
Internal Renderers can not be used to cover large areas (like a sea-surface), or control komplex setups (like a landscape surface).

Ideally, we use Internal Renderers for small scale, local effects, like: a handheld torch, a pool of water, a bonfire with smoke, dust around the feet of a character or car-tyres, a magic portal, a waterfall... etc

---------------------------------------------------------------------------------------

**EXTERNAL RENDER**
We are talking about "external" rendering, when visualization requires an other component or actor. NinjaLive Component could be used to control these:

   - Meshes, Spline Meshes
   - Particle Systems
   - Landscape Components
   - Procedural Mesh Generators for water and foliage
   - Volumetric Renderers (CVOL, HVOL, FVOL, SVOL)

External renderers are usually being utilzed, when we'd like to handle large areas - bigger then the simulation area itself.

The functions to utilize External Renderers are located at these param groups:
- `Live Component /LiveOutputMaterials`
- `Live Component /LiveOutputParams`
- `Live Component /LiveOutputExternalRenderers`

The concept of controlling large areas is based on this idea:

1. Core ninja basematerials for surfaces and volumes contain PATTERN GENERATORS.
2. The PASSIVE, tiled (repeating) patterns and noise could be used to cover infinitely large areas.
3. The basematerials could BLEND (A) responsive patterns stored in the simulation buffers  
     and  (B) passive patterns that reside outside the sim area.

For example:

- SAND: responsive foot tracking in sand + passive dune patterns 
- WATER: responsive ripples and whitewater + passive waves
- FOG: responsive swirling fog density + passive volumetric noise

When talking about "External" Rendering, we mean the interplay of these elements:

- functions to identify and collect TARGET systems
- functions OR utilities to apply a ninja-driven Output Material to a target system
- a given Output Material Instance, that blends the incoming sim data and passive patterns.

Utilities for External Rendering:
- `/Content /FluidNinjaLive /Utilities /DriveExternalSystemsWithSimData.uasset`
- `/Content /FluidNinjaLive /NiagaraOutput /SurfaceAlignedMeshes.uasset`
- `/Content /FluidNinjaLive /NiagaraOutput /SurfaceAlignedParticles.uasset`
- `/Content /FluidNinjaLive /NiagaraOutput /SurfaceAlignedVolumes.uasset`


---------------------------------------------------------------------------------------

### 4.8 DirectDrive
`(On level Tutorial01_Basics.umap / Stage 9)`

The most simple way to control External Renderers is `DirectDrive`:
we apply ninja generated Dynamic Material Instances to TAGGED objects. 

The Material Instance is receiving params from ninja every tick. Params include Sim Position & Scale - which is needed for *WorldSpaceOffset* in the material. Method:
1. TAG the target system (e.g. a Primitive Mesh) using Actor Tags
2. Let Ninja know about the tag, at the below param groups:
`/LiveComponent /LiveOutputMaterials`
`/LiveComponent /LiveOutputExternalRenderers`

Note: when driving niagara systems, we usually do NOT apply a Material to them, instead, we are directly sending the needed Parameters (like Sim Position)

---------------------------------------------------------------------------------------

**EXPLAINER: THE DISPLAY CONCEPT**

Simulation output is rendered every frame into temporary "buffers" (RenderTargets). Buffers are like a texture. We could map these textures to any target object, anywhere on the level. Target objects work like a DISPLAY: we use them to visualize sim output. Notice: it is NEVER the display that interacts with objects: it is the simulation.

Notice: displays (external renderers that visualize sim output) could be spatially DETACHED from the sim: the actual sim/interaction happens somewhere else, NOT where the visualization is. In most cases, we want to MATCH the sim and the display, so interactions with objects line up with their visual consequences: we throw a pebble in a lake, and we see ripples, where the pebble hits the surface.

- Typically, the simulation is attached to the MOVING player (so the near environment is always interactive).
- Typically, the display is a large (infinite) object, like sea-water, or desert-sand, that is spatially LOCKED.


**Recap:** sim is small and moving. Display is large and locked. How can we match these two?
**Answer:** WORLD SPACE OFFSET. We are sending data to the Material of the display object (an "Output Material"): raw sim buffers, sim scale, sim pos. In the Output Material, we scale the raw sim buffers to the World-Space Size of the sim...
...and we offset the buffers in World Space where the simulation is. So the display lines up with the sim - despite being an infinite surface. (Passive Patterns outside the sim area!)

**Exception:** IF the display's transform (pos, scale, rotation) matches the sim transform, no WorldSpace Offset needed. This is usually the case when we use INTERNAL Renderers.... or External Renderers parented to the sim, and scaled to sim-size.


---------------------------------------------------------------------------------------

### 4.9 Output Materials
`(On level Tutorial01_Basics.umap / Stage 10)`

Related read: `Chapter 2, Point 15` - Key ninja assets / Output Materials

Fluid simulation state for a given frame is calculated in discrete steps. Data for a given step is stored in a BUFFER, a temporary storage similar to a 2D texture, with 2-4 channels (RGBA).

We can expose the full set of internal buffers to an OUTPUT MATERIAL in order to VISUALIZE the simulation. The most important 3 buffers are:
1.  PaintBuffer (RGBA): Paint Velocity (RG) + Density (B) + HeightField (A)
2.  VelocityDensityBuffer (RGBA): Sim Velocity (RG) + Density (B) + WetMap (A)
3.  PressureDivergenceBuffer (RG): Sim Pressure (R) + Divergence (G)

A material is provided with the buffers IF...
- contains Texture Objects using the above naming convention
- the material is added to one of the three ninja "OutputMaterials" array, located at:
`/LiveComponent /LiveOutputMaterials`

Buffers could be passed to Niagara for Sampling, using User.Parameters:

- NinjaPaintBuffer
- NinjaVelocityDensityBuffer
- NinjaPressureDivergenceBuffer

To learn more about texture object-forwarding to Materials & Niagara,  open:
 `/Content /FluidNinjaLive /NinjaLiveComponent.uasset / MODULE023`

Sim position and scale params are also provided to Materials/Niagara as vector-3:

- TraceMeshPos
- TraceMeshPosDouble
- TraceMeshSize

"TraceMesh" is a legacy naming from the LIVE-1 period. We keep it, as a memory of the old times.

---------------------------------------------------------------------------------------

EXPOSING RENDERTARGETS

A RenderTarget is like a 2D texture. Ninja writes sim buffers to RenderTargets in order to expose them to Output Materials & External Renderers.

STAGE 9 demonstrates DIRECT DRIVE, a method where we SKIP intermediate, on-disk RenderTargets and manual Material handling: ninja automatically forwards internal, dynamically generated RenderTargets to Output Materials, and automatically assigns materials to target systems. This is the default behavior.

On STAGE 10, we are writing sim buffers to on-disk RenderTargets. Then, we add these RenderTargets manually to Materials as Texture Input. This is a manual method to make sim buffers available.
`/LiveComponent /LiveOutputRenderTargets`

Notice how specific sim buffers could be visualized very differently:

VELOCITY field is perfect to...
- (A) accelerate particles
- (B) bend foliage
- (C) drive flowmaps

DENSITY could be used as...
- (A) heightmap for Volumes
- (B) alpha mask for translucency

PRESSURE is perfect for...
- (A) height-displacement
- (B) refraction


---------------------------------------------------------------------------------------

### 4.10 Output Material Tricks
`(On level Tutorial01_Basics.umap / Stage 11)`

On this stage, we are presenting "fake" methods to add detail to the sim buffers or make the visualization look 3D (and it is still 2D):

- Detail Flow Mapping
- Parallax Occlusion Mapping
- 2D Raymarching

FLOW DETAIL MAPPED SIM DENSITY
- sim velocity is driving the advection of static noise in the Output Material
- sim density used as a mask
See the `FlowMap` parameter group in the `Output Material`.

INVERTED SIM DENSITY
Some shaders need inverted input. Parallax Occlusion Mapping (POM) is a typical example.
- Ninja offers a function to invert density before writing it to a RenderTarget:
`/NinaLiveComponent /LiveOutputRenderTargets /SimVelocityDensityAndWetMap /InvertFluidDensity`
- The paint buffer could be inverted too!
`/NinaLiveComponent /LiveOutputRenderTargets /PaintVelocityDensityAndElevation /InvertPaintbufferDensity`

2D RAYMARCHING
Parallax Mapping AND Raymarching on RAW Sim Density using Level MainLight as source
- Live Component:
 `/NinaLiveComponent /LiveLegacy /Raymarching /LightDirectionProvider = Level MainLight`
- Material:
 `/Output Material Parameters /XFakeSelfShadow /RayMarching = True`


---------------------------------------------------------------------------------------

### 4.11 Modularity
Modularity: Building Actors From Components
`(On level: Tutorial01_Basics.umap / Stage 12)`

All elements of a komplex setup could be added to single Actor, as Component.

- Floating Balls: Niagara Component added to the Host Actor.
Note: NinjaLiveComponent automatically looks up Niagara Components IN THE SAME host / owner Actor. No tagging needed. In case the target Niagara System is in a separate Actor,
tagging is needed to drive it.

- Water Mesh: Internal Mesh Renderer - Default "flat plane" mesh replaced with a box
`/LiveComponent /LiveOutputInternalRenderers /Mesh /VisualzationMesh`

- Mist: Internal Volume Renderer
`/LiveComponent /LiveOutputInternalRenderers /SVolume`




---------------------------------------------------------------------------------------

<div style="page-break-after: always;"></div>


## 5. Inputs and Interaction

**Feeding the simulation: showcasing all data types ninja can access and interact with**

- This chapter is mirroring text from a tutorial level - and serves like a content guide:
`/Content /FluidNinjaLive /Levels /Starter /Tutorial02_Inputs_Interaction.umap`

- Suggestion: use the tutorial level for learning, instead of reading raw text. The level is equipped with interactive setups, so we instantly see how the described functions work!

---

Ninja can read **FIELDS** generated by objects - and use the fields to represent object shape, velocity, curvature, height... etc. in the sim space. We distinguish 4 object-types - each one generating a different kind of field: *Static Meshes, Splines, Landscapes (Terrains), Destructibles*.

Ninja can read **POINTS** derived from Object Pivot Position and Bone Position Data - and use the points to control a "brush" (a circular stroke) to register object trajectories and velocity in the sim space. We distinguish three object-types - each one generating similar "brush strokes" in the Paint Buffer: *(A) Particles, (B) Destructible Chunk Pivots, (C) Object Pivots and Bones*.

---------------------------------------------------------------------------------------

In this Chapter:

FIELD INPUTS
- 5.1 <a href="#51-bitmaps">Bitmaps</a>
- 5.2 <a href="#52-mesh-sdf">Objects /Mesh SDF</a>
- 5.3 <a href="#53-splines">Objects /Splines Curvature</a>
- 5.4 <a href="#54-landscape-elevation">Objects /Landscape Elevation</a>
- 5.5 <a href="#55-destructible-chunk-sdf">Objects /Destructible Chunks SDF (Geometry Collection)</a>

POINT INPUTS
- 5.6 <a href="#56-particles">Particles</a>
- 5.7 <a href="#57-destructible-chunk-pivot">Destructible Chunk Pivots</a>
- 5.8 <a href="#58-object-pivots-and-bones">Object Pivots and Bones</a>

<a href="#table-of-contents">Back to the Table of Contents</a>

---------------------------------------------------------------------------------------

### 5.1 Bitmaps
**Field inputs /Bitmaps**
`(On level Tutorial02_Inputs_Interaction.umap / Stage 1-4)`

A. Density input from bitmap: Texture
- `/LiveComponent /LiveInputFields /Bitmaps /VelocityDensityInputTexture`

B. Density input from bitmap: RenderTarget
- `/LiveComponent /LiveInputFields /Bitmaps /VelocityDensityInputRenderTarget`

- Usage example 1: a material generating dynamic, procedular noise, this is being written to a RenderTarget every frame using the `WriteMaterialsToRenderTargets` Component added to Live Actor - and the RenderTarget with noise is used as ninja sim density input.
`/Content /FluidNinjaLive /Utilities /WriteMaterialsToRenderTargets.uasset`

- Usage example 2: Scene Capture Camera output is being written to RenderTarget every frame and the RenderTarget is used as ninja sim density input.
`/Content /FluidNinjaLive /Utilities /SceneCaptureCameraUtility.uasset`

C. Density and Velocity inputs from two separate bitmaps
- `/LiveComponent /LiveInputFields /Bitmaps /VelocityDensityInputTexture`
- `/LiveComponent /LiveInputFields /Bitmaps /VelocityOnlyInputTexture`

D. Combined velocity and density input via SINGLE bitmap
- `/LiveComponent /LiveInputFields /Bitmaps /VelocityDensityFieldFromTexture /TryToReadVelocityFromRGchannels`

E. Static Collision Mask from Bitmap
- `/LiveComponent /LiveInputFields /Bitmaps /CollisionMaskFromTexture`
For Dynamic Collision Masking see `STAGE 5E`, where Mesh SDF is used as Collision Mask.


---------------------------------------------------------------------------------------


### 5.2 Mesh SDF
**Field inputs /Objects /Mesh SDF**
`(On level Tutorial02_Inputs_Interaction.umap / Stage 5 /Setup A,E)`

 Static Meshes generate Signed Distance Field (SDF). 
 This could be used to reconstruct object shape and velocity. 

- On the ninja side, we set a bool switch / and provide ninja with a Tag. 
`/LiveComponent /LiveInputFields /MeshFields /EnableMeshDistanceFieldReader = TRUE`
`/LiveComponent /LiveInputFields /MeshFields /UseTaggedMeshesAsSDFInput`

- On the object side: we TAG objects under the Actor Details "Tags" menu. Only TAGGED meshes are being sampled.

We can also use Mesh SDF to generate **Dynamic Collision Mask** - to exclude fluid from a volume.
`/LiveComponent /LiveInputFields /MeshFields /UseAsCollisionMask`

- Dynamic Collision Mask usage is demonstrated on level:
`/Content /FluidNinjaLive /Levels /Water_Dense_Creek2.umap`
- Static, bitmap based Collision Mask is demonstrated on level:
`/Content /FluidNinjaLive /Levels /Starter /Tutorial02_Inputs_Interaction.umap /Stage 4`


---------------------------------------------------------------------------------------

### 5.3 Splines
**Field inputs /Objects /Spline Curvature**
`(On level Tutorial02_Inputs_Interaction.umap / Stage 5 /Setup B)`

Splines generate a directional field. This could be used to determine flowing direction along the spline. 

On the ninja side, we set a bool switch / and provide a tag:
`/LiveComponent /LiveInputFields /SplineFields /EnableSplineReader = TRUE`
`/LiveComponent /LiveInputFields /SplineFields /GetSplineComponentsFromTaggedActors`
On the object side: we TAG objects under the Actor Details "Tags" menu.

Learn more:  `/Content /FludNinjaLive /Levels /Starter /Tutorial06_SplineBasedRivers.umap`)

A related bug description:
`Chapter 14, Point 6` Limitations and Bugs, Ninja Core, Fixing Spline input

---------------------------------------------------------------------------------------

### 5.4 Landscape Elevation
**Field inputs /Objects /Landscape Elevation**
`(On level Tutorial02_Inputs_Interaction.umap / Stage 5 /Setup C)`

Landscape Components generate height field. This could be used to align the sim with the surface + determine flowing direction.

On the ninja side, we set a bool switch: 
`/LiveComponent /LiveInputFields /HeightFields /EnableHeightField = TRUE`
On the object side: nothing to do - landscapes automatically expose height, if queried.

Surface aligned = landscape aligned: 
1. fluid visualization-mesh is aligning with the landscape surface
2. landscape curvature influences fluid velocity-field
3. overlap detection is also aligned with the surface

---------------------------------------------------------------------------------------

**Special terrains**: ninja automatically samples elevation from Landscape Components... but for a purely mesh based terrain (no landscape) or voxel terrain, we need to set up external height capturing methods - like an `RVT Volume` or a top-down looking `SceneCaptureCamera` to provide ninja with elevation data. Think of a rocky hillside built entirely from Quixel meshes - and branching, surface-aligned creek for this specific location.

**See this tutorial level demonstrating ALL possible ways to access Terrain elevation data:**
`/Content /FluidNinjaLive /Levels /Starter /Tutorial03_KeyConceptsForWater.umap / Stage 2`

---------------------------------------------------------------------------------------

**Using a Runtime Virtual Texture to access Terrain Elevation:**

1. Set up the Terrain Actors (e.g. Meshes) to write into a on-disk RVT asset, using the `DrawInVirtualTextures` param at Actor Details Panel.
2. Apply a material to the Terrain Actors, with `RVT Output` node included
3. Place an `Runtime Virtual Texture Volume` in the scene, connected to the same on-disk RVT asset the Terrain Objects write to.
4. Set ninja to sample the given RVT asset:
`/LiveComponent /LiveInputFields /HeightFields /RVTHeightData /UseRVTAsHeightSource = True`
`/LiveComponent /LiveInputFields /HeightFields /RVTHeightData /RVT-asset = (user defined RVT asset)`

See this example level with a working RVT setup:
`/Content /FluidNinjaLive /Levels /Misc /VolumeDemo_HVOL_Medium.umap`

Related Tutorial on RVT samplers: `Chapter 6, Point 2`

---------------------------------------------------------------------------------------

### 5.5 Destructible Chunk SDF
**Field inputs /Objects /Destructible Chunks SDF** (Geometry Collection)
`(On level Tutorial02_Inputs_Interaction.umap / Stage 5 /Setup D)`

Destructible Chunks, when sampled by the **Geometry Collection** Data Interface, could provide SDF data. This could be used to reconstruct chunk SHAPE and velocity. 

On the ninja side: 
`/LiveComponent /LiveInputFields /MeshFields /EnableMeshDistanceFieldReader = TRUE`
`/LiveComponent /LiveInputFields /Destructibles /GetGeometryCollectionFromTaggedActor`
On the object side: we TAG objects under the Actor Details "Tags" menu.

Ideal for stamping marks on surfaces - or a dust volume around the crashing pieces.
- See level `Sand_Destructibles.umap / Stage 3`
- See `Chapter 10`, Chaos Destructibles
- See `Chapter 5 Point 7` below, for Destructible Chunks as Point input!

A related bug description:
`Chapter 14, Point 7` Limitations and Bugs, Bug: Destructibles

---------------------------------------------------------------------------------------

### 5.6 Particles
**Point inputs /Particles**
`(On level Tutorial02_Inputs_Interaction.umap / Stage 6 /Setup A,B)`

Using particles as simulation input is an easy way to achieve complex visuals: creating a particle emitter for a steam-puff or explosion is a matter of minutes.

Ninja is using a VOLUME (defined by `/LiveComponent /LiveCore /ExtentsXYZ`) to detect moving particles - reading their position, velocity and size - and uses this to draw their trajectories to the Paint Buffer. We can use particles as input both in World Facing and Camera Facing mode.

Ninja is reading particle position and velocity through DATA CHANNELS:
`/LiveComponent /LiveInputPoints /DataChannelPointReaderEnabled = True`

On the particle side: a "Write to DataChannel" module should be added to the Emitter stack.

---------------------------------------------------------------------------------------

**SETTING UP A PARTICLE EMITTER AS LIVE-2 SIMULATION INPUT**
A step-by-step guide

Example asset in the ninja project:
`/Content /FluidNinjaLive /Input /Niagara /NS_WriteDataCh_GPU_Source_Linear.uasset`

1. add "Write to DataChannel" module to Particle Update stage:
      - click on the green "plus" sign besides the "ParticleUpdate" stage name
      - start typing"write to data..."
      - click on the "Write to DataChannel" module in the search-query

2. Once you've added the "Write to DataChannel" module to Particle Update stage
      - make sure it is at the bottom of the "Particle Update" module-stack
      - click on the module, and open the Details Panel
      - on the Details Panel, set the "Write to Datachannel" bool flag to TRUE

3. the "Write to DataChannel" module is active, with OPTIONS on the Detail Panel UI
      - allocation count: set any number > 0 (e.g. 1000)
      - set the "Visible to CPU systems" and "Visible to GPU systems" flags to TRUE
      - set the "Channel" field to `NinjaDataChannel1`

4. Optionally, we can visualize the sim-source particles by switching ON the "Sprite Renderer" at the very bottom of ther module stack

When all done: hit "Compile" and "Save" at the UI top button bar!

---------------------------------------------------------------------------------------

**DATA CHANNELS: GLOBAL vs ISLANDS MODE**

To switch between Data Channel modes ("Global" vs "Islands") we need to adjust params at TWO locations:

DATA SOURCE (any particle emitter)
- Open the source emitter (eg. "NS_Fountain_WriteDataChannelExample")
- Look up "WriteToDataChannel" Module
- Change "NinjaDataChannel1_Global" to "NinjaDataChannel2_Islands"

DATA RECIPIENT (ninja):
- Open NinjaLiveCore Niagara System / Main Emitter
- Look up "InitializeReaders" Module / DataChannel DI
- Change "NinjaDataChannel1_Global" to "NinjaDataChannel2_Islands"

Note: "Islands" mode was not supported under UE 5.4 - and occasionally crashes under UE 5.5

To edit Islands attributes, open this asset: 
`/Content /FluidNinjaLive /Core /Niagara /Modules /DataChannels /NinjaDataChannel2_Islands`


---------------------------------------------------------------------------------------

### 5.7 Destructible Chunk Pivot
**Point inputs /Destructible Chunk Pivots**
`(On level Tutorial02_Inputs_Interaction.umap / Stage 7 /Setup A,B)`

Destructible chunk POSITION and velocity could be accessed to generate brush strokes. 
No shapes: each chunk is represented by a circle (brush stroke) in the PaintBuffer.

We need to set only one flag on the ninja side:
`/LiveComponent /LiveInputPoints /DestructiblePointReaderEnabled = True`

.
WAYS OF USING DESTRUCTIBLES AS POINTS:

1. While stamping marks on surfaces is a possible usecase, the "Destructibles as SDF" gives better result (see `Chapter 5, Point 5` above)!
2. In case we need to generate dust-puffs above the surface, or ripples on water: the "Destructibles as Points" is the ideal approach (no precise shape needed). See the included SAND & SNOW levels!
3. There is one case, where the "Destructibles as SDF" approach is completely useless: when we need to track destructibles IN A VOLUME - typically, when aerial explosions happen. Read more in the STAGE 7B description!

- **Setup A - Destructibles Mapped on a World Facing surface**
When a destructible set hits the ground, the chunks roll and bounce on the surface - we can say, they are constrained to the surface. For this reason, by sampling the Chunk Mesh SDF - Simulation Plane Intersection, we get a nice representation of their ground-marks (see STAGE 5D). The "destructibles as SDF" is ideal to get precise shapes - while "destructibles as points" method is also useful.

- **Setup B - Destructibles Mapped on a Camera Facing surface**
On this stage we can generate dust and smoke for an exploding destructible.
When a destructible set explodes in the air (as opposed to: hitting the ground, and constrained to a surface), the chunks fly on very divergent trajectories. The "Destructibles as SDF" approach can NOT keep track of the divergent trajectories, as it detects the CROSS SECTION of (A) the chunks and (B) the simulation plane. The "Destructibles as Points" appoach tracks the chunks in a VOLUME and projects their position to the simulation plane. This is ideal for explosions.
See the included level: `Fire_Smoke_Explosive.umap / Stage 16`

A related bug description:
`Chapter 14, Point 6`, Limitations and Bugs, Ninja Core, Fixing Destructibles as point input


---------------------------------------------------------------------------------------

### 5.8 Object Pivots and Bones
**Point inputs /Object Pivots and Bones**
`(On level Tutorial02_Inputs_Interaction.umap / Stage 8-12)`


The most typical input data types for ninja:
- tracking Primitive Meshes - and using their Pivot position & velocity
- tracking Skeletal Meshes - and using their Bone position & velocity

These input types are usually managed by `Live Actor`.

With limitations, `Live Component` is also capable to track Primitives and Skeletal Meshes.
See this param group: `/LiveComponent /LiveInputPoints /InteractionWithOwner`
Learn more at `Chapter 14, Point 3`, Limitations, Live Component: dependence on Live Actor


Live Actor can track objects using the `InteractionVolume` for overlap detection. 
Two object collection methods are available:

- METHOD 1: **CLASS FILTERS**
We are telling Live Actor to track certain "Object Types" 

  - On the "ninja side" the object type filter could be adjusted under:
`/Live Actor /LiveInteraction /OverlapFilterInclusiveObjectType`

  - On the "target side" (the objects to be tracked) this could be adjusted under:
`/Component Details /Collision /CollisionPresets /ObjectType`  (this setting should match object type set on the ninja side)
`/Component Details /Collision /GenerateOverlapEvents = True`


- METHOD 2: **TAGS**
We are telling ninja to track tagged Primitive or SkeletalMesh Components

  - On the "ninja side" the tag filter could be adjusted under:
`/NinjaLive Actor Details /LiveInteraction /Track Actor Primitive Components with tag`
`/NinjaLive Actor Details /LiveInteraction /Track Actor SkeletalMesh Components with tag`

  - On the "target side" (the objects to be tracked) we set a tag and set a bool switch:
`/Component Details Panel /"Tag" input field`
`/Component Details /Collision /GenerateOverlapEvents = True`


**IMPORTANT**
Class Filters and Tags are ADDITIVE. When used together, the results from BOTH filtering
are added to the same list. For example: we are tracking ALL StaticMesh type objects using a class filter
and ONE specific Pawn (SkeletalMesh) via tagging. See provided examples.




---------------------------------------------------------------------------------------

<div style="page-break-after: always;"></div>


## 6. Key Concepts for Water

**Sparse vs Dense Setups, Surface Alignment, Extending the Sim Area, Wave Generator**

- This chapter is mirroring text from a tutorial level - and serves like a content guide:
`/Content /FluidNinjaLive /Levels /Starter /Tutorial03_KeyConceptsForWater.umap`

- Suggestion: use the tutorial level for learning, instead of reading raw text. The level is equipped with interactive setups, so we instantly see how the described functions work!

In this Chapter:
- 6.1 <a href="#61-sparse-vs-dense-setups">Sparse vs Dense Setups</a>
- 6.2 <a href="#62-surface-alignment">Surface Alignment</a>
	- <a href="#height-input-none">A   Dense setup, Height Input:  NONE</a>
	- <a href="#height-input-labdscape">B   Dense setup, Height Input  LANDSCAPE</a>
	- <a href="#height-input-scenecap">C   Dense setup, Height Input  SCENECAPTURE</a>
	- <a href="#height-input-rvt">D   Dense setup, Height Input  RVT</a>
	- <a href="#sparse-flat">E   Sparse setup, FLAT</a>
	- <a href="#sparse-spline">F   Sparse setup, SPLINE</a>
- 6.3 <a href="#63-extending-the-sim-area">Extending The Sim Area</a>
- 6.4 <a href="#64-wave-generators">Wave Generators</a>
	- <a href="#simulated-waves">Simulated Waves</a>
	- <a href="#passive-waves">Passive Waves</a>

<a href="#table-of-contents">Back to the Table of Contents</a>

---------------------------------------------------------------------------------------

### 6.1 Sparse vs Dense Setups
`(On level Tutorial03_KeyConceptsForWater.umap / Stage 1)`

The "Sparse" and "Dense" expressions refer to two setup modes of using ninja:
- DENSE setups are used exclusively for terrain-flowing (surface aligned) liquids.
- SPARSE setups are being used in every other case: fire, smoke, dust, wind and "flat" water setups

**KEY PARAM:**
`/LiveComponent /LiveSimulation /DensityAccumulation = n`
- To make a DENSE setup: we set DensityAccumulation value: `n > 1`
Density is constant in the sim area - while the fluid is spreading under constraints.
- To make a SPARSE setup, we set DensityAccumulation value: `n < 1` or `n = 1`
Density is vanishing by time, density is "sparse" in the sim area.

**Consequences of using a DENSE setup: less details**
- Once density flooded an area: we can not "add more density" there. In SPARSE setups, we use density to add details to the sim area - for example, by using density as a mask for flow-detail-maps (whitewater). With DENSE setups, we can not do this: we use density in "1 bit mode" to mark where the fluid is. The only way we can add details is using sim VELOCITY. Eg. to boost color, or to mask a flow-detail-map. The velocity distibution carries less information / less details, compared to density distibution in sparse setups.
Result: **ripples, foam/whitewater in dense setups look LESS detailed, compared to sparse setups.**

**SPARSE vs DENSE setups - Questions and Answers**

- Q: If density is vanishing in SPARSE setups,  how can we employ sparse setups for water-bodies?
- A: By handling the entire simulation area as "filled with fluid", regardless of density. This is exactly the reason we do not use sparse, landscape aligned WATER setups: it would look silly to have full fluid coverage on peaks and slopes. For dust or fog, the case is different: it feels natural to have low lying fog over slopes... so sparse, landscape aligned VOLUMETRIC setups are okay.
.
- Q: How is density used in SPARSE setups?
- A: To add details - eg.: as a whitewater mask for flow-detail-maps. This is the reason why sparse setups could look more detailed, compared to Dense setups - where we use velocity for details.
.
- Q: How is density used in DENSE setups?
- A: we let density accumulate - but impose a constraint on spreading via the the slope-gradient of the terrain (slopes push the fluid). As a result, fluid could spread "downhill" / but not uphill: ideally, it remains in local-lows (gaps, impressions, valleys).
Density is maximal in "filled up" areas  / minimal at every other place. We can use this "one bit" density to dynamically mask water. So it looks like it is spreading.

**TRADEOFF** - Sparse vs Dense Setups:

- PRO, dense:
  - fluid surface aligns with the underlying surface 
  - fluid spreads dynamically, constrained by elevation and obstacles
- CONTRA, dense:
  - the ripples and whitewater generated by interaction are less detailed
  - surface alignment works only in the sim area
  - requires extra steps to set up surface alignment
- PRO, sparse:
  - ripples and whitewater patterns are more detailed
  - easy to set up / no height data required
- CONTRA, sparse:
  - lives on user defined mesh surfaces (planes, bended planes, splines),
  - the geometry of underlying terrain surface does not matter
  - fluid distribution is static (can not spread out dynamically)


---------------------------------------------------------------------------------------

### 6.2 Surface Alignment
`(On level Tutorial03_KeyConceptsForWater.umap / Stage 2)`
 
*Surface alignment is also called height alignment, landscape alignment, terrain alignment*

To make interaction and fluid distribution surface aligned, we need to access surface height. Setups on STAGE 2 are showcasing methods to access height data.

Features:
1. Fluid Visualization-Mesh (or volume) is aligning with the Landscape Surface
2. Landscape Curvature influences fluid velocity-field
3. Overlap Detection is also aligned with the surface! 
*(what this means, an example:  we track two feet bones to generate footprints, and set the Z part of "Extents XYZ" param to 5 centimeters - so the bones leave imprintings only when close to the ground - the 5 centimeters overlap zone is aligning with the terrain)*


Key factors of Surface-alignment:

- ninja reads landscape height and slope (curvature, gradient) under the simulation area
- uses landscape gradient to modify fluid velocity (pushing fluid "downwards")
- ninja forwards the height data to Output Materials, so mesh-vertices could be distorted by the material to follow the surface - and volumes could be extruded along the surface

---------------------------------------------------------------------------------------

DENSE Setups on STAGE 2 are showcasing methods to access world height data:
	- <a href="#height-input-none">A   Dense setup, Height Input:  NONE</a>
	- <a href="#height-input-labdscape">B   Dense setup, Height Input  LANDSCAPE</a>
	- <a href="#height-input-scenecap">C   Dense setup, Height Input  SCENECAPTURE</a>
	- <a href="#height-input-rvt">D   Dense setup, Height Input  RVT</a>

SPARSE setups exist on user defined surfaces, but height is still needed to align interaction with the surface. 
	- <a href="#sparse-flat">E   Sparse setup, FLAT</a>
	- <a href="#sparse-spline">F   Sparse setup, SPLINE</a>

---------------------------------------------------------------------------------------

#### Height Input NONE
*Setup A, Dense*

To make interaction and flow surface aligned, we need to access surface height. For a flat surface, we don't even need a height input: we can generate heightfield internally.

Generating a Flat Height-Field at User Defined Altitude:
- `/LiveComponent /LiveInputFields /HeightFields /EnableHeightField = True`
- `/LiveComponent /LiveInputFields /HeightFields /Clamping Value = n`
- `/LiveComponent /LiveInputFields /HeightFields /ForciblyCreateHeightField = True`

Setting the below variable to "True" AUTO-FILLS the sim area at "clamping height"! 
- `/LiveComponent /LiveInputFields /HeightFields /ClampHeightLowerValues = True`
- not good for "spreading" water, good for good for instant-fill
- good for EXTENDING the sim area. See STAGE 3!

---------------------------------------------------------------------------------------

#### Height Input LANDSCAPE
*Setup B, Dense*

To make fluids surface aligned, we need to access surface height. This setup directly samples Landscape Components. Sampling Landscape Component is the ninja default. Landscapes are auto-detected, enough to set this param to true:
`/LiveComponent /LiveInputFields /HeightFields / EnableHeightField = True`

---------------------------------------------------------------------------------------

#### Height Input SCENECAP
*Setup C, Dense*

We could set up TOP-DOWN-LOOKING `SceneCaptureCamera` to sample scene depth (that is: elevation), and write the data to a RenderTarget every frame (or in user defined time intervals!) and we are reading the RenderTarget with height data on the ninja side. 

Key Params:
- `/LiveComponent /LiveInputFields /HeightFields /EnableHeightField = True`
- `/LiveComponent /LiveInputFields /HeightField /ExternalHeightData /UseExternalHeightData = True`
- `/LiveComponent /LiveInputFields /HeightField /ExternalHeightData /ExternalHeightDataFromRenderTarget = (user defined RT)`
- `/LiveComponent /LiveInputFields /HeightField /ExternalHeightData /ExternalHeightDataNullPoint = (the Z position of capture camera)`

Writing a heightmap every frame results a dynamic setup (moving objects = changing elevation map). In case the landscape does not change: we could also **BAKE** the depth to a single static texture and use that as ninja input. Advantage: following the baking, we could remove the SceneCaptureCamera - no resources consumed during game-time!
Contra: setup is static, will not respond to height-changes.

Note: there is a dedicated ninja utility - a modified SceneCaptureCamera - to support BAKING!
`/Content /FluidNinjaLive /Utilities /SceneCaptureCameraUtility.uasset`

See this tutorial to learn heightmap-baking:
`/Content /FluidNinjaLive/ Levels /Starter /Tutorial04_Presets_Spawning_Caching.umap / STAGE 5`

---------------------------------------------------------------------------------------

#### Height Input RVT
*Setup D, Dense*

To make fluids surface aligned, we need to access surface height. This setup directly samples a Runtime Virtual Texture. The RVT is being written by a "Runtime Virtual Texture Volume" Actor placed on the level.

**Key Ninja Params:**
- `/LiveComponent /LiveInputFields /HeightFields /EnableHeightField = True`
- `/LiveComponent /LiveInputFields /HeightFields /RVTHeightData /UseRVTAsHeightSource`
- `/LiveComponent /LiveInputFields /HeightFields /RVTHeightData /RVTAsset`

**Key External Setup Elements:**
1. Runtime Virtual Texture (RVT) asset in Content Browser
2. Runtime Virtual Texture Volume placed on Level
3. Objects: `Actor Details Panel /Virtual Texture /DrawInVirtualTextures = RVT asset`

Related Tutorial on RVT samplers: `Chapter 5, Point 4`

---------------------------------------------------------------------------------------

#### Sparse FLAT
*Setup E, Sparse Water Setup on a Flat Surface*

While the surface is defined by the water-mesh itself, we still need to align interaction with the surface.
To make interaction aligned with the flat surface, we could provide ninja with a single altitude value, called "ClampingValue".

Key Params:
- `/LiveComponent /LiveInputFields /HeightFields /EnableHeightField`
- `/LiveComponent /LiveInputFields /HeightFields /Clamping Value`
- `/LiveComponent /LiveInputFields /HeightFields /ForciblyCreateHeightField`

Notice: with sparse setups, water fills the entire simulation area (and beyond, if we use external meshes)

---------------------------------------------------------------------------------------

#### Sparse SPLINE
*Setup F, Sparse Water Setup on a Spline-Mesh Surface*

While the surface is defined by the spline-mesh itself, we still need to align interaction with the surface.
To make interaction aligned with the flat surface, ninja gets data from the spline:

`/LiveComponent /LiveInputFields /SplineFields /EnableSplineReader`
`/LiveComponent /LiveInputFields /SplineFields /GetSplineComponentsFromTaggedActors`

Optionally, we can generate a flat-heightfield, with spline-height added on top - in order to provide PARTICLES with useful height, to align with:

- `/LiveComponent /LiveInputFields /HeightFields /EnableHeightField`
- `/LiveComponent /LiveInputFields /HeightFields /Clamping Value`
(should be lower than the lowest point of our spline)
- `/LiveComponent /LiveInputFields /HeightFields /ForciblyCreateHeightField`

We can also use spline-height / landscape-height intersection to generate dynamic collision mask for water. Learn more at this level: `Tutorial06_SplineBasedRivers.umap`


---------------------------------------------------------------------------------------

### 6.3 Extending The Sim Area
`(On level Tutorial03_KeyConceptsForWater.umap / Stage 3)`
 
1. Ninja simulation area is finite, usually in the 5-100 meters range.
2. We could attach the sim to the player - so the near background is always responsive.
3. We could infinitely EXTEND the simulated area with PASSIVE (non-simulated) patterns for the far background.
- we need a visualization system that is larger than the sim area, e.g. a mesh array or large volume
- we need to set up Tilemap in the Output Material generate passive patterns

This sim area is NOT Extended by default.
**Extending the Sim Area - a step by step guide:**

- STEP 1:
When working with "dense" type water setups, the below param automatically fills the the sim area with density, at the altitude defined by the "Clamping Value" param.
`/LiveComponent /LiveInputFields /HeightFields /ClampHeightLowerValue = TRUE`
`/LiveComponent /LiveInputFields /HeightFields /ClampingValue = user defined altitude`
Note: for "sparse" type setups (be it liquid or gas) we don't even need to set "ClampHeightLowerValue" to True - the material covers the entire, available mesh surface.

- STEP 2:
By default, ninja is using the Internal Mesh Renderer - limited to the sim area. 
Switching off the internal render:
`/LiveComponent /LiveOutputInternalRenderers /Mesh /ForceHideVisualizationMesh = TRUE`

- STEP 3:
Using the `SurfaceAlignedMeshes` Utility, we could set up an array of tiled meshes larger than the sim area and drive this array with ninja. The most simple way is to copy-paste a version of the Actor, that is already set up:
  - Open Level: `/Content /FluidNinjaLive /Levels /Water_Dense_Lake.umap`
  - Select Actor: `SurfaceAlignedMeshes_SeaSurface_GPUMeshSpawner`
  - Copy-Paste it to the target level. Already TAGGED as "*NinjaTarget*"
  - Set ninja to use this tag: 
  `/LiveComponent /LiveOutputExternalRenderers /DriveNiagaraComponentInTaggedActors`
  - Add a Material to be applied on the External Renderer:
  `/LiveComponent /LiveOutputMaterials /SecondaryOutputMaterials`
  - Make sure the material is using the TileMap generator
  `Material Instance Details Panel /TileMap Parameter Group`
  - Tell ninja to forward the material to Niagara:
  `/LiveComponent /LiveOutputExternalRenderers /ExposeOutputMaterialToSurfaceAlignedNiagaraMeshes`
  
  Example levels for an already extended sim area: all "water_sparse" and "water_dense" levels that contain the "lake" or "sea" term in their name.

---------------------------------------------------------------------------------------

### 6.4 Wave Generators
`(On level Tutorial03_KeyConceptsForWater.umap / Stage 4)`

There are multiple ways to generate "wave like" patterns.  
- <a href="#simulated-waves">Dynamic patterns</a> (Simulated Waves) are generated by Live Component and limited to the simulation area (size defined by the `ExtentsXYZ` param).  
- <a href="#passive-waves">Passive patterns</a> (Passive Waves) are generated by the Output Material and could be extended infinitely.

---

#### SIMULATED WAVES
There are two methods to generate simulated waves:

1. **USING LANDSCAPE GRADIENT**
Ninja comes with EXPERIMENTAL coastal wave generator that uses the terrain slope gradient to generate waves that travel perpendicular to the coast.
Six key params located at the below parameter group:
`/LiveComponent /LiveSimulation /WavesFromLandscapeGradient`
Enable the wave generator: `InvertLandscapeGradientUnderClampedHeight = True`

- LIMITATION: wavegen **does not work** with data coming from RVT or SceneCapture sources, only Landscape Components. In later ninja versions, wavegen should be generalized to all kinds of height inputs.

- PREREQUISITES / LANDSCAPE
  - (1) Have a Landscape Component below the sim area
  - (2) Landscape should be evenly ascending towards the waterline: flatland under water results zero gradient, no waves. 

- PREREQUISITES / NINJA
  - (1) Dense type water setup: `/LiveComponent /LiveSimulation /DensityAccumulation > 1`
  - (2) HeightField and Clamping: 
`/LiveComponent /LiveInputFields /HeightField /EnableHeightField = True`
`/LiveComponent /LiveInputFields /HeightField /ClampHeightLowerValues = True`
.
2. **USING BITMAPS**
- Switch off WaveGen
`/LiveComponent /LiveSimulation /WavesFromLandscapeGradient /InvertLandscapeGradient = False`
- Enable "Velocity from Bitmaps":
`/LiveComponent /LiveSimulation /VeloFromBitmaps = 0.1`
- Change bitmap at:
`/LiveComponent /LiveInputFields /Bitmaps /VelocityFieldFromTexture /...`

---------------------------------------------------------------------------------------

#### PASSIVE WAVES
Passive patterns are generated by the Output Material and could be extended infinitely.

- Using the Tilemap Function of Output Material
`Output Material /TileMap Parameter Group`

- Acces Output Material:
`/LiveComponent /OutputMaterials /SecondaryOutputMaterial`

- Prerequisite: to see patterns outside the sim area, we need a visualization mesh, that is larger than the sim area! Suggestion: Mesh Array Generator
`/Content /FluidNinjaLive /OutputNiagara /SurfaceAlignedMeshes.uasset`

- Learn more about passive patterns at:
`/Content /FluidNinjaLive /Levels /Starter /Tutorial06_SplineBasedRivers.umap / STAGE 3`


 

---------------------------------------------------------------------------------------

<div style="page-break-after: always;"></div>


## 7. Presets Spawning Caching

**Save & Load sim state, Presets & Spawning, Caching sim state & height maps**

- This chapter is mirroring text from a tutorial level - and serves like a content guide:
`/Content /FluidNinjaLive /Levels /Starter /Tutorial04_Presets_Spawning_Caching.umap`

- Suggestion: use the tutorial level for learning, instead of reading raw text. The level is equipped with interactive setups, so we instantly see how the described functions work!

---

**In this Chapter:**
- 7.1 <a href="#71-presets">Writing and Reading Presets In-Editor</a>
- 7.2 <a href="#72-spawning">Spawning, two expample setups</a>
- 7.3 <a href="#73-sim-cache">Writing and Reading Sim Cache In-Game</a>
- 7.4 <a href="#74-height-cache">Caching Height-Maps</a>

<a href="#table-of-contents">Back to the Table of Contents</a>


---------------------------------------------------------------------------------------

### 7.1 Presets
**Writing and Reading Presets In-Editor**

Live Component and Live Actor parameter state with all input field values could be saved to a single **preset file** - and loaded back. Presets are not covering external systems. We could use the preset feature three ways:

- create versions from a setup
- transfer state from one ninja actor to an other
- spawn ninja in a preset-defined state, in-game

*Step by step guide:*
Transfer the params from an existing setup to a new default setup, using a Preset!

1. first we save the params to a preset:
   - Duplicate the default-preset in Content Browser: 
   `/Content /FluidNinjaLive/Presets/NP_default.uasset`
   - Give the copy a telling name. Use the "NP_" prefix (NP stands for "ninja preset")
   - On the opened Level, select the ninja candidate for system-state saving 
   - Look up the input field: `/LiveComponent /LiveCore /Preset` 
   - Load the duplicated, new preset into the input-field
   - Look up the editor UI button: `/LiveComponent /LiveEditorTools /PresetWrite`
   - Press the `PresetWrite` button
   .
   We are done. System state TEMPORARILY saved to a preset. To PERMANENTLY store the saved params: right-click on the preset file in Content Browser and choose "Save" from the menu.

2. drag a new, default ninja onto the level, from the Content Browser
    (Live Actor is located in the project ROOT: `/Content /FluidNinjaLive /NinjaLive.uasset`)

3. we are loading preset data to the new, default ninja
   - On the opened Level, select the ninja candidate for system-state loading
   - Look up the input field: `/LiveComponent /LiveCore /Preset` 
   - Load the needed preset into the input-field
   - Look up the editor UI button: `/LiveComponent /LiveEditorTools /PresetRead`
   - Press the `PresetRead` button

We are done. System state TEMPORARILY loaded from the preset file. To PERMANANTLY keep the new system state:
- Set `/LiveComponent /LiveEditorTools /PreserveSystemStateAfterPresetRead = True`
- Save Current Level (Ctrl + S)

Optionally, we can initialize Live Component variables and Live Actor variables from the Preset, IN-GAME - without overwriting the original input field values IN-EDITOR. Key Param:
- `/LiveComponent /LiveCore /InitSystemStateFromPreset = True`



---------------------------------------------------------------------------------------

### 7.2 Spawning

Please open the following level to examine the spawner setup:
`/Content /FluidNinjaLive /Levels /Starter /Tutorial04_Presets_Spawning_Caching.umap`

`Stage 2`: Spawning a Sea Surface Handler - Example Setup
`Stage 3`: Spawning a Landscape Surface Handler - Example Setup

**KEY ASSET:**
`/Content /FluidNinjaLive /Utilities /NinjaSpawner_EXAMPLE.uasset`

This blueprint demonstrates how to spawn ninja and attach it to the player.
The blueprint serves as an example & demo only. Developers should implement their own spawner mechanism. Double click on the asset in Content Browser to open up the Graph Editor:

**KEY STEPS PERFORMED BY THE DEMO BLUEPRINT:**
1. Spawn Ninja with Default settings
2. Define Preset - with system state stored
3. Reinitialize system with new state

- **Stage 2:**
Besides managing interactions & calculating fluidsim, the spawned ninja is driving an EXTERNAL rendering system: the Water Mesh Generator (`SurfaceAlignedMeshes` Utility). The MeshGen is NOT spawned: placed on the persistent level.

- **Stage 3:**
Besides managing interactions & calculating SimplePainter, the spawned ninja is driving an EXTERNAL rendering system: the Landscape Component. Driving a Landscape Component requires a HELPER Utility: `DriveExternalSystemsWithSimData` aka. "Landscape Utility".
**The Landscape Utility is also spawned by NinjaSpawner!**


---------------------------------------------------------------------------------------

### 7.3 Sim Cache
**Writing and Reading Sim Cache In-Game**

In some cases, it takes a while until the fluid builds up a complex configuration
in the simulation space. Think of a small creek flowing down a rocky hillside, going through rapids and reservoirs, until reaching a large body of water. We can save a single-frame snapshot of the simulation buffers IN-GAME - once the desired state has been reached - and start the simulation from the snapshot next time. We call this CACHING.

*Step by step guide:*

.
SAVING THE BUFFERS:

 1. Select the `Live Actor` you would like to Cache
 2. Select `Live Component`
 3. Look up the `LiveOutputRenderTargets` param group
 4. Make sure that each of the three "Enable Output..." flags are set to TRUE
 5. Start the game with "PLAY"
 6. While in game: on the Outliner Panel, select Live Actor
 7. Select Live Component
 8. Look up the `LiveEditorTools` parameter group
 9. press the `SaveSimBuffers` button, and wait a few seconds
 In the top-left viewport corner, status messages indicate: cache data has been saved
 10. STOP the gameplay
 11. In the Content Browser, visit the folder, where your current Level is located.
 For example: `/Content /FluidNinjaLive /Levels`
 12. There are THREE new assets in the folder, name starting with "T_Cache..." string
 13. Right click on the first, choose "SAVE" on the pop-up. Save the other two, as well.
 
.
LOADING THE BUFFERS:

 1. Make sure we are off-play / in-editor
 2. Select `Live Actor`
 3. Select `Live Component`
 4. SET `/LiveComponent /LiveInputFields /Cache /StartSimFromCachedData = True`
 5. Load the previously saved 3 assets into the "Cached..." Input-Fields
(make sure the buffers go into the correct slot: painter, velocity, pressure)
 6. Start the game with "PLAY"

KEY FUNCTION:
`/LiveComponent /LiveEditorTools /SaveSimBuffers`
.
KEY PARAMS:
Group:`/LiveComponent /LiveOutputRenderTargets`
`EnableOutputPainterElevation = True`
`EnableOutputVelocityDensity = True`
`EnableOutputPressureDivergence = True`
.
Group:`/LiveComponent /LiveInputFields /Cache /...`
`StartSimFromCachedData = True`
`CachedPainterElevation = user defined texture with baked data`
`CachedVelocityDensity = user defined texture with baked data`
`CachedPressureDivergence = user defined texture with baked data`
.
Early video on LIVE-2 features / CACHING demonstrated: [URL](https://youtu.be/O57K5Aog7Hs?t=339)

See the CREEK levels for caching examples!
`/Content /FluidNinjaLive /Levels /Water_Dense_Creek1.umap`
`/Content /FluidNinjaLive /Levels /Water_Dense_Creek2.umap`



---------------------------------------------------------------------------------------

### 7.4 Height Cache
**Caching (Baking) a Height Map**

There is a method to cache input-heightmap, by setting up a modified SceneCaptureCamera:
`/Content /FluidNinjaLive /Utilities /SceneCaptureCameraUtility.uasset`

Using the capture utility, we can save scene-depth into a texture file, and read this
file with ninja.

*Step by step guide*
.
SAVING THE HEIGHTMAP:

 1. Select the SceneCaptureCamera Actor
 2. Look up `Ninja Related Settings` param group
 3. Press the `CaptureSingleFrameInEditor` Button
 4. Press the `SaveSingleFrameAsTexture` Button
    The new texture asset is saved to the same folder, where the Scene.Cap.Camera's 
    "Texture Target" is located. `E.g. /FluidNinjaLive/Textures/TempRenderTargets/...`
    Naming convention: `T_Cache_SceneCaptureHeight_(3 digit rnd number)`

E.g. `/Content /FluidNinjaLive/Textures/TempRenderTargets/T_Cache_SceneCaptureHeight_541`

.
LOADING THE BUFFERS:

 1. Make sure we are off-play / in-editor
 2. Select `Live Actor`
 3. Select `Live Component`
 4. SET `/LiveComponent /LiveInputFields /HeightFields /ExternalHeightData /UseExternalHeightData = True`
 5. Load the previously saved texture into the `ExternalHeightDataFromTexture` Input-Field
 6. Start the game with "PLAY"



---------------------------------------------------------------------------------------

<div style="page-break-after: always;"></div>


## 8. Tricks

**Special Params & Setups - Using Sequencer, Viscous Fluids and much more**

- This chapter is mirroring text from a tutorial level - and serves like a content guide:
`/Content /FluidNinjaLive /Levels /Starter /Tutorial05_Tricks.umap`

- Suggestion: use the tutorial level for learning, instead of reading raw text. The level is equipped with interactive setups, so we instantly see how the described functions work!

**In this Chapter:**
- 8.1 <a href="#81-selective-brush-density">Selective Brush Density</a>
- 8.2 <a href="#82-sim-area-xy-proportions">Sim area XY proportions</a>
- 8.3 <a href="#83-viscous-fluids">Viscous Fluids</a>
- 8.4 <a href="#84-various-tricks">Various Tricks</a>
      - Sim Space Wrapping (Tiling)
      - Painting Motion Trajectories
      - Brush Density from Velocity
      - Inverse Brush
      - Object size to Brush size
      - Persistency vs Feedback
      - Brush position random
      - Puncture
      - Custom Visualization Mesh
      - Simple Painter Mode
      - Sequencer and Interfaces

<a href="#table-of-contents">Back to the Table of Contents</a>

---------------------------------------------------------------------------------------

### 8.1 Selective Brush Density
`Tutorial05_Tricks.umap / Stage 6`

Intended use: SELECTIVELY use certain point-data inputs as density (and velocity) source, while limit other point-data inputs to velocity souce only.

`/LiveComponent /LiveInputPoints /BrushKillers /SelectivelyKillBrushDensityKeepVelcity = n`
- `n = 0: NONE`
- `n = 1: ARRAY`
- `n = 2: DATACHANNEL`
- `n = 3: CHAOS`
- `n = 4: ARRAY & CHAOS`
- `n = 5: ALL`

For example: we are running a water setup and particles are used as density sources ("particles generate water"), and we don't want our pawn (skeletal mesh) to generate density (every step would leave a puddle)... but we want the pawn to interact with the water (steps cause ripples) ...so we set the below param to "1": point data coming from "array" (static meshes and skeletal meshes) generate only VELOCITY... while point data coming from Data Channels (particles) generate both density and velocity.

See "Creek" and "Sea" dense water levels, as examples for selective density input.

---------------------------------------------------------------------------------------

### 8.2 Sim area XY proportions
`Tutorial05_Tricks.umap / Stage 7`

Sim Components are scaled by DEDICATED PARAMS at Actor and Component Details Panel.
`/NinjaLive Actor /LiveActivation /ActivationVolumeSize`
`/NinjaLive Actor /LiveInteraction /InteractionVolumeSize`
`/LiveComponent /LiveCore /ExtentsXYZ`

      DO NOT scale the actor or the components using the "scale transform".
      Always keep the scale transform value on 1 !

      DO NOT rotate actors to get the intended side-ratios.
      Eg.: there is a ninja setup with 2:1 side proportions, but we want 1:2.
      Instead of rotating it 90', re-set the proportions!

**SCALING, EXAMPLE**

*Step by step*
We'd like to double the simulation size on the X axis
1. Select `Live Component` - and locate the Component Details Panel
2. Double the X component of `/LiveComponent /LiveCore /ExtentsXYS` param
3. Double the value of `/LiveComponent /LiveCore /ResolutionX` param
4. Go back to `Live Actor` Details Panel (from the Component Details Panel)
6. Find `LiveInteraction` param group at Actor Details
7. Double the X component of `InteractionVolumeSize` input field

---------------------------------------------------------------------------------------

### 8.3 Viscous Fluids
`Tutorial05_Tricks.umap / Stage 15`

Viscosity is not an "out of the box" feature, but an exploit, that could be achieved by mis-using fluidsim parameters. See this level for example setups:  
`/Content /FluidNinjaLive /Levels /Viscous_Blood_Mud.umap`

Achieving "viscous fluid" behavior - params listed in order of importance:
- Low `Divergence`: to eliminate turbulent fluid behavior
- `KernelIndexOffset`: to kill long distance pressure waves / to make pressure quickly die out 
- Low `VelocityFeedback`: to kill velocity propagation, fluid remains inert in "no action" zones
- High `DensityAccumulation`: to compensate for velocity loss - make the fluid spread out evenly (and not in velocity direction)
- High `SimSpeed`: to compensate for velocity loss - and make the fluid move "normally" at low velocity
- `KillBrushBelowThisVelocity`: to avoid still and slow-moving brushes making large impact

Random noise is responsible for the diverse smearing patterns:
- High `VeloDirNoise`: high frequency random velocity bursts
- `MaskDirNoiseWithSimVelocity`: limit velocity bursts to places where interacting object inject velocity to the sim
- High `VelocityClamp`:  removes the default clamping limit (needed for bursts)
- High `VeloFromBrushMotion`: amplifying the velocity injected to the sim by interacting objects

TIP: if you set `VelocityFeedback` back to default (0.99), while keeping `DensityAccumulation` at 1.225, the fluid becomes more "spready".

Key params:

      /LiveCore /SimSpeed = 10 (default: 1)
      /LiveInputFields/ PersistencyOfFieldAndPointData = 0.05 (default: 0.2)
      /LiveInputPoints /BrushKillers /KillBrushBelowThisVelocity = 0.1 (default: 0)
      /LiveSimulation /DensityAccumulation 1.225 (default: 0.85)
      /LiveSimulation /VeloFromBrushMotion 10 (default: 1)
      /LiveSimulation /Divergence 0.04 (default: 1)
      /LiveSimulation /Advanced /VelocityFeedback 0.9 (default: 0.99)
      /LiveSimulation /Advanced /VelocityClamp 50 (default: 4)
      /LiveSimulation /Advanced /KernelIndexOffset -2
      /LiveSimulation /Noise /VeloDirNoise 100
      /LiveSimulation /Noise /VeloDirNoiseSpeed 0
      /LiveSimulation /Noise /MaskDirNoiseWithSimVelocity 1

---------------------------------------------------------------------------------------

### 8.4 Various Tricks

---

#### Sim Space Wrapping (Tiling)
`Tutorial05_Tricks.umap / Stage 2`

By default, sim UV space is CLAMPED. Using the following param, WRAPPING / TILING could be enabled: `/LiveComponent /LiveSimulation /Bounds /SimAreaClamp = FALSE`

---

#### Painting Motion Trajectories
`Tutorial05_Tricks.umap / Stage 3`

When tracking Object Pivots or Bones, ninja is mapping world position values to the sim space, drawing a dot for each position value, every frame. If objects move fast: the position-markers are becoming sparse. To avoid this, ninja could connect the dots, drawing lines along the motion trajectory:
`/LiveComponent /LiveCore /DrawLinesBetweenPoints /PosInterpolation = TRUE`

---

#### Brush Density from Velocity
`Tutorial05_Tricks.umap / Stage 4`

Intended use: slow or standing objects to not trigger fluid response.
For example: pawn is causing ripples in water when running, but does not interact with water when standing still.
`/LiveComponent /LiveInputPoints /BrushKillers /KillBrushBelowThisVelocity`

---

#### Inverse Brush
`Tutorial05_Tricks.umap / Stage 5`

Intended use: negative brush ERASES the density coming from other input sources (eg.: a bitmap)
- Key Param (turns brush density to "negative"):
`/LiveComponent /LiveInputFields /InvertFieldAndPointDensity = 1`
- Define a Texture to add "positive" density to the sim:
`/LiveComponent /LiveInputFields /Bitmaps /VelocityDensityFieldFromTexture`

Usage is demonstrated on multiple levels - e.g. the "swamp" level - where the lake surface is covered with seaweed, algae and debris (density is high) - and moving objects seem to push this thick floating layer away as they move, leaving a clear track (technically: ERASE the density).
`/Content /FluidNinjaLive /Levels /Water_Sparse_Swamp.umap`

On the "fog mist" level, moving objects and the character is "cutting though the fog"
`/Content /FluidNinjaLive /Levels /Fog_Mist.umap`

More setups in the ninja project, using inverse brush method:
- `Water_Sparse_River.umap / Setup 1 - Actor: NinjaLive_ClearWater`
- `Water_Sparse_Rivers_Minimal.umap / Stage 3`

---

#### Object size to Brush size
`Tutorial05_Tricks.umap / Stage 8`

Adjusting brush size to the scale OR bounding box size of interacting objects:
`/LiveComponent /LiveInputPoints /UseTrackedObjectSize = TRUE`
`/LiveComponent /LiveInputPoints /UseObjBoundsInsteadOfScale = TRUE`

---

#### Persistency vs Feedback
`Tutorial05_Tricks.umap / Stage 9`

We can separately adjust two important parameters.

1. **BRUSH PERSYSTENCY:** how density from simulation inputs persists in the sim area
`/LiveComponent /LiveInputFields /PersistencyOfFieldAndPointData = n`
`n=(0-1)`

2. **SIM FEEDBACK:** how density already in the simulation is being fed-back to the sim
`/LiveComponent /LiveSimulation /DensityAccumulation = n`
`n=(0-1.25)`

---

#### Brush position random
`Tutorial05_Tricks.umap / Stage 11`
`/LiveComponent /LiveInputPoints /BrushNoise /BrushPositionRandom`

---

#### Puncture
`Tutorial05_Tricks.umap / Stage 12`

Puncture adds "outward flowing" velocity to brush-strokes.
`/LiveComponent /LiveInputPoints /BrushVelocity /BrushPuncture`

- still-standing objects "boil"
- objects moving perpendicular to the sim plane make impact-shockwaves

---

#### Custom Visualization Mesh
`Tutorial05_Tricks.umap / Stage 13`

NinjaLive Component comes with Internal Renderers - e.g. the MESH Renderer.
We can replace the default PLANAR Mesh with a Custom Mesh:
`/LiveComponent /LiveOutputInternalRenderes /Mesh /VisualizationMesh`

---

#### Simple Painter Mode
`Tutorial05_Tricks.umap / Stage 14`

Typically, we use SimplePainter to draw footprints & wheeltracks. In these cases, we use the painter as a simple density source. Let us consider using the painter as velocity source:
we can drive flowmaps or particles - without running a fluidsim.
`/LiveComponent /LiveCore /SimplePainterMode = True`

---

#### Sequencer and Interfaces
`Tutorial05_Tricks.umap / Stage 1`

KEY paramater for both SEQUENCER and INTERFACE control:  
`/LiveComponent /LiveEditorTools /ParamUpdateFrequency`
Lower values mean less delay between updates (higher update frequency)!

- **Setup A**, Sequencer Control
Dedicated tutorial: `Chapter 13` Cinematics: Sequencer and Movie Render Queue

  - The Sequence Controller in this setup is adjusting the "GlobalBrushSize" parameter in NinjaLiveComponent.
  - The Global Brush Size param is visible in Sequencer, because it is flagged with "Expose to Cinematics" in the NinjaLiveComponent blueprint, using the Details Panel.
  - You could expose ANY OTHER NinjaLive variable for the sequencer using the same flagging (and re-saving the blueprint with flags on)
  - In case you want an Object to trigger NinjaLive Actor's OVERLAP sensor: 
SET "Generate Overlap Events" = TRUE     at Actor Details /Collision
  - In general, Sequencer driven objects interact with ninja the same way as regular objects. 
See: `/FluidNinjaLive /Levels /_Starter /Tutorial02_Inputs_Interaction.umap`

- **Setup B**, Interface Control Brush Size
The Interface Controller is adjusting the BrushSize param in NinjaLiveComponent.

- **Setup C**, Interface Control Shutdown
The Interface Controller is forcing the sim container to fade out and shutdown.



---------------------------------------------------------------------------------------

<div style="page-break-after: always;"></div>


## 9. Spline Based Rivers
**Large scale, non-surface aligned bodies of water**

- This chapter is mirroring text from a tutorial level - and serves like a content guide:
`/Content /FluidNinjaLive /Levels /Starter /Tutorial06_SplineBasedRivers`

- Suggestion: use the tutorial level for learning, instead of reading raw text. The level is equipped with interactive setups, so we instantly see how the described functions work!

---

**In this Chapter:**
- 9.1 <a href="#91-spline-generator">Spline Generator</a>
- 9.2 <a href="#92-mapping---local-vs-world">Mapping Coordinates: Local vs World</a>
- 9.3 <a href="#93-pattern-generators">Pattern Generators in the Output Material</a>
- 9.4 <a href="#94-sim-vs-spline-direction">Fluid Simulation Driven by Spline Direction</a>
- 9.5 <a href="#95-composite-sim-n-passive">Composite of Passive and Simulated Patterns</a>
- 9.6 <a href="#96-masking-the-simulation">Masking the Simulation with Spline-Landscape Intersection</a>

<a href="#table-of-contents">Back to the Table of Contents</a>


---------------------------------------------------------------------------------------

### 9.1 Spline Generator
`Tutorial06_SplineBasedRivers.umap / Stage 1`
Related Manual content: `Chapter 2, Point 11` Spline Mesh Generator


Spline generator is a blueprint, that clones a user-defined mesh along a user-defined spline - made to generate geometry for rivers. (Note: the river material is managed by NinjaLiveComponent!)
`/Content /FluidNinjaLive /Utilities /SplineGenerator.uasset`

1. Drag the Blueprint Actor to a level
2. Define a StaticMesh to be cloned along the spline - at Actor Details Panel
3. Add new points by selecting one, then ALT + drag
4. Move /rotate /scale the spline control points using the Transform Gizmo
5. Tweak spline curvature at Actor Details / Size Adjustment

**DO NOT SCALE the Spline Actor using Actor Scale Transform!**
Use the `Tile Width` and `Tile Length` params at Actor Details to scale the river!

To assign an Output Material to a Spline:
- TAG the spline Actor and provide the tag to ninja.
`SplineMesh Actor /Actor Details Panel /Actor /Tags`

- A sim Output Material will be assigned to the SplineMesh in runtime, using this tag
`/NinjaLive Actor /LiveComponent /LiveOutputMaterials /Apply2ndOutMatToActorsWithTag`

.
**Spline Meshes vs Surface Alignment**

Spline meshes should be manually aligned with the underlying terrain, automatic surface alignment NOT recommended.

Details: while mesh grids (generated by the Surface Aligned Meshes Utility) could be surface aligned - this is NOT being the case with Spline-Meshes. Surface alignment means: we use elevation data to displace vertices, to align with an underlying terrain surface. A prerequisite of this operation: all vertices (before surface alignment) have the same vertical position - with other words: the mesh is FLAT. Spline meshes are "manually shaped" meshes: the vertices of a spline mesh are scattered along the XYZ axes - hence: we can not apply surface alignment to them. Another problem: elevation data coming from ninja covers only the simulation area. 


---------------------------------------------------------------------------------------

### 9.2 Mapping - Local vs World
`Tutorial06_SplineBasedRivers.umap / Stage 2`

The SplineMesh could be mapped two ways:
- A. using local Mesh-UV space
- B. using global World-UV space

Ninja OutputMaterials utilize BOTH mapping mode:
- non-interactive patterns are using LOCAL UV
Local Mesh-UV enables us to offset textures along the spline, PASSIVE patterns follow the spline-curvature

- responsive simulation visuals are using WORLD UV
World UV does not follow spline direction. Still, we can get information about spline direction (using the Niagara Spline Data Interface) and use this information to directionally advect the fluid. See on `Tutorial06_SplineBasedRivers / Stage 4`

---------------------------------------------------------------------------------------

### 9.3 Pattern Generators
`Tutorial06_SplineBasedRivers.umap / Stage 3`

**Pattern generators in the Output Material**
While TileMaps (setup C) are always passive, flowmaps (A) and caustics (B) could respond to the sim,
depending on the param settings in the Output Material.

**TRADEOFF**  (T1 vs T2)
- (T1) we can switch Flowmap and Caustics Patterns to LOCAL UV and make them move along the whole spline (outside the simulated area too!) - but the patterns will be passive (no response to sim). Notice how pattern generators are switched to LOCAL UV (non-world space) mode IN THESE SETUPS, in order to follow the curvature of river SplineMesh:
  - Flow detail map: `Material /FlowMap /FlowMapInWorldSpace = FALSE`
  - Caustics: `Material /SingleLayerWaterOps /CausticsInWorldSpace = FALSE`
  - Tilemap: `Material /TileMap /TilingInWorldSpace = FALSE`

- (T2) we can switch Flowmap and Caustics Patterns to WORLD UV and make them
advected by the sim - but the patterns OUSIDE sim area will not move along the spline. 
To advect caustics, we need to set `CausticsFlow = True`
Flowmaps automatically get advected by sim velocity if `FlowStrength > 0` 

See this setup to learn more about flow detail maps:
`/Content /FluidNinjaLive /Levels /_Starter /Tutorial01_Basics.umap / STAGE 11`

Learn more about Wave Generators at:
`/FluidNinjaLive/Levels/_Starter/Tutorial03_KeyConceptsForWater.umap / STAGE 4`

---------------------------------------------------------------------------------------

### 9.4 Sim vs Spline Direction
`Tutorial06_SplineBasedRivers.umap / Stage 4`

Splines generate a directional field. This could be used to determine flowing direction along the spline - in World Space.
To sample spline direction on the ninja side, we set a bool switch and provide a tag:

`/LiveComponent /LiveInputFields /SplineFields /EnableSplineReader = TRUE`
`/LiveComponent /LiveInputFields /SplineFields /GetSplineComponentsFromTaggedActors`

On the object side: we TAG objects under the Actor Details "Tags" menu.

---------------------------------------------------------------------------------------

### 9.5 Composite Sim n Passive
`Tutorial06_SplineBasedRivers.umap / Stage 5`

**Composite of Passive and Simulated Patterns**
The water material (technically: a ninja Output Material) is a COMPOSITOR,
merging pattern generators (Stage 3) and simulation buffers (Stage 4)


---------------------------------------------------------------------------------------

### 9.6 Masking the Simulation
`Tutorial06_SplineBasedRivers.umap / Stage 6`

**Masking the Simulation with Spline-Landscape Intersection**
1. Ninja simulation area is a rectangle.

2. When mapped on a spline: the spline geometry is only masking what we see 
    of this rectangular sim area - but the sim is still running in the whole area.

3. We can mask the simulation too, using the spline-landscape intesection. 
    Advantage: currents stop at the coast and waves bounce back,
    the fluid starts to behave like it is constrained by the riverbed.

KEY PARAMS:
`/LiveComponent /LiveInputFields /SplineFields /EnableSplineReader`
`/LiveComponent /LiveInputFields /SplineFields /TryToGenerateCollisionMaskUsingRVT`
`/LiveComponent /LiveInputFields /HeightFields /EnableHeightField`
`/LiveComponent /LiveInputFields /HeightFields /UseHeightAsCollisionMask`


---------------------------------------------------------------------------------------

<div style="page-break-after: always;"></div>


## 10. Chaos Destructibles

**Accessing Chaos Destructibles with Fluidninja LIVE-2**

In this Chapter:
- 10.1 <a href="#101-intro">Intro</a>
- 10.2 <a href="#102-included-examples">Included examples</a>
- 10.3 <a href="#103-methods">Methods</a>
- 10.4 <a href="#104-setting-up-method-1">Setting up Method 1</a>
- 10.5 <a href="#105-setting-up-method-2">Setting up Method 2</a>
- 10.6 <a href="#106-avoiding-conflict">Avoiding Conflict</a>

<a href="#table-of-contents">Back to the Table of Contents</a>

---

### 10.1 Intro

Chaos is Unreal's dedicated system for cached and dynamic simulations for soft & rigid bodies. In this document, we are discussing dynamic rigid body simulations exclusively / ignoring cached simulations and soft body simulations.

FluidNinja LIVE-2 is a generic fluid simulation tool, that could (1) track points and (2) read distance fields as simulation input. We could access Chaos dynamic rigid body simulation data every frame to add responsive real-time generated visual effects.

Ninja INPUT data is typically destructibles falling apart to debris-chunks. Ninja OUTPUT could be an explosion with smoke, or dust and surface-marks as the chunks hit the ground, or splashes as debris falls into water.

This document specifically describes the TWO main methods to access chaos data with ninja. 
We are NOT discussing the visual output.

.
**Terminology**
- *DI = Data Interface* (niagara interface to access various data types)
- *SDF = Signed Distance Field = Mesh Distance Field*
- *Destructible or GeometryCollection*: the two expression refers to the same object type in this context

---------------------------------------------------------------------------------------

### 10.2 Included Examples
**Included example setups in the Ninja Project**

- "Destructibles as SDF" vs "Destructibles as Points" compared
`/Content /FluidNinjaLive /Levels /Starter /Tutorial02_Inputs_Interaction.umap / STAGE 5D, STAGE 7`

- Large Destructible drop, Volumetrics and ground-marks, World Facing, both point and SDF input setup included
`/Content /FluidNinjaLive /Levels /Sand_Destructibles.umap /STAGE 3`

- Destructble chunks driving viscous fluid (blood) setup - ideal starter for fleshy explosions
`/Content /FluidNinjaLive /Levels /Viscous_Blood_Mud.umap /STAGE 2`

- Destructble chunks driving explosion, fire and smoke
`/Content /FluidNinjaLive /Levels /Fire_Smoke_Explosive.umap /STAGE 16`

- Demolition test, Volumetrics, Camera Facing setup
`/Content /FluidNinjaLive /Levels /Misc /Destructibles_as_Points_CameraFacing.umap`

- Large Destructible drop, Volumetrics, World Facing setup - Point input setup included
`/Content /FluidNinjaLive /Levels /Misc /Destructibles_as_Points_WorldAligned.umap`

- Large Destructible drop, Volumetrics, World Facing setup - SDF input setup included
`/Content /FluidNinjaLive /Levels /Misc /Destructibles_as_SDF_WorldAligned.umap`

---------------------------------------------------------------------------------------
### 10.3 Methods
**Two Methods For Accessing Chaos Data**

- METHOD 1. data as points: get chunk position and velocity via Niagara `Chaos Destruction DI`
- METHOD 2. data as distance field: get chunk SDF data via Niagara `GeometryCollection DI`

**Comparing Methods 1,2 - pros and cons**

- M2 reads exact chunk size & shape / M1 reads only chunk pos (no size data, all chunks leave similar marks)
- M2 could read only one destructible actor at a time / M1 is not limited, reads multiple actors
- M2 only reads explicitly defined actors / M1 automatically reads all actors within range
- M2 only reads mesh-parts that intersect with the sim plane / M1 reads all chunks inside a volume

**Conclusion:**  
- M2 might be better for World-Space setups  (eg.: chunks leaving ground marks, tracks, impressions)
- M1 is ideal for Camera-Facing setups (eg.: debris generating airborne dust or explosion-smoke)
- The CPU/GPU resource needs of the two methods are approximately equal. Reading SDFs consumes more memory.


---------------------------------------------------------------------------------------

### 10.4 Setting Up Method 1 
**Destructible Chunks as Points**

1. Project Settings:
`Edit /Project Settings /Engine /Physics /ChaosPhysics /SolverOptions /GenerateTrailingData = TRUE`

2. Destructible Actor Details:
Param group: `DestructibleMesh Actor /GeometryCollectionComponent /ChaosPhysics`
      - `/Clustering /EnableClustering=TRUE`
      - `/Events /NotifyBreaks = TRUE`
      - `/Events /NotifyCollision = TRUE`
      - `/Events /NotifyTrailing = TRUE`

3. Live Component Settings:
`/LiveComponent /LiveInputPoints /DestructiblePointReaderEnabled = TRUE`

4. User Parameter Settings:
`/LiveComponent /UserParameters /DebugOnly /Input /TrackPoints /InteractionWithDestructibles /TrackedDestructiblesChaos /Data Source = Trailing Data`

.
**METHOD 1: LIMITATIONS**
*All limitations are caused by Unreal Engine bugs.*

1. Lack of chunk size data: while the Niagara Destructibles DI provides 6 different methods to get chunk-size related data (mass, volume, extents, scale...etc), NONE of these returns valid data, as of UE 5.6 & 5.7
So, we need to generate uniformly-scaled brush-strokes from the chunk positions, regardless of chunk size. Ideally, we would scale the ninja brush with chunk size. EPIC might fix this bug in the future.

2. Setups randomly stop working: the level-placed instances of the NinjaLiveCore Niagara System seem to randomly switch between collision and trailing input when we recompile the system in Niagara Editor. For example: we had our Data Source set to "Collision Data" in a local instance. Following recompiling of the core system, this might switch to "Trailing Data" or vica versa. If our point-based chaos setups randomly stops working at some point, we should check: `Chapter 14, Point 6`, Limitations, Ninja Core, Fixing DESTRUCTIBLES as point input

3. No trailing data for SPAWNED destructibles
Destructible-chunks could generate 3 kind of data: breaking, collision and trailing. "Trailing Data" is the best for drawing the trajectories of moving debris chunks - Collision and Breaking Data gives very sparse results (still useful!)
When we place a destructible actor on level, on the Actor Details Panel, we could set up all 3 kind of event-generation. 
However, when we SPAWN destructibles, there is NO option available to make them generate "trailing" type data. There are "NotifyCollision" and "NotifyBreaks" functions, but there is no "NotifyTrailing". This seems to be an Unreal bug. 
**Workaround:** we better NOT SPAWN destructibles, but place one on level, set it manually to generate "Trailing" events - and then, just re-position and state-reset this pre-placed actor every time it has been demolished, using the "SetRestCollection" blueprint node, with `ApplyAssetDefaults = True` *(see Level Blueprints for practical example!)*

---------------------------------------------------------------------------------------
### 10.5 Setting Up Method 2 
**Destructible Chunks as SDF**

1. Project Settings:
`Edit /Project Settings /Engine / Rendering /SoftwareRayTracing /GenerateMeshDistanceFields = TRUE`

2. Destructible Actor Details:
      - Regarding SDF: nothing specific. If "Generate Mesh Distance Fields" is enabled in Project Settings, it just works.
      - Tagging: ninja could collect Destructibles (GeoCollections) directly, or using tags. So we could add a tag to our Actors, under `Actor Details /Tags`

3. Live Component Settings:
`/LiveComponent /LiveInputFields /MeshFields /EnableMeshDistanceFieldReader = TRUE`
`/LiveComponent /LiveInputFields /Destructibles /GetGeometryCollectionFromTaggedActor = (user defined tag)`

.
**METHOD 2: LIMITATIONS**
*An absolute limitation to Method-2 is a killer Unreal Engine bug*

EPIC's Niagara GeometryCollection DI has a memory leak / the amount of used memory steadily increases while the Game is running - and the garbage collector can not reclaim the lost memory - this is a fatal engine bug (UE 5.6, 5.7, 5.8). The bug practically limits Destructible SDF usage to Rendered Cinematics...

**Good news**: based on the public Unreal Engine sourcecode, a ninja power-user created a fixed version of GeometryCollection DI and made it available as a free plugin. Devs could optionally use this, until an official patch from EPIC arrives (which could take years).

**Below, we are linking a 53 Megabytes ZIP file that contains:**

- Official Bug report with specific technical description
- The fixed GeometryCollection DI as a COMPILED plugin (UE 5.6 - 5.8), should be added to the local UnrealEngine Plugin Folder
- A step-by-step guide with screenshots, explaining how to apply the fix

ZIP URL: https://drive.google.com/file/d/1KTI8EIHjJcaeZ5rORs0LJuxozV7o8z3q

The GIT source-code repository of the plugin is also available:
GIT URL: https://github.com/MajorSmash/GeometryCollectionNDI-Fixed-

---------------------------------------------------------------------------------------


### 10.6 Avoiding Conflict
**Method 1 vs Method 2**

In case we use one of the two methods, we need to make sure the other is disabled (on the ninja side) to avoid double-calculation & visual glitches. For example:
- IF we use the SDF method, we set:
 `/LiveComponent /LiveInputPoints /DestructiblePointReaderEnabled = False`
- IF we use the point-reader, we make sure that the input definitions under `/LiveComponent /LiveInputFields /Destructibles` are EMPTY (no tags provided, no direct actor definition)



---------------------------------------------------------------------------------------

<div style="page-break-after: always;"></div>


## 11. Volumetrics

**VOLUMETRICS** means 3D visualization calculated in a volume, involving some kind of raymarching algorithm, typically displaying phenomena that does not have a solid bounding surface - like dust, smoke, steam.

We can drive volumetrics with real time 2D fluid simulation data:
- Sim **density** is used as a height-field: higher values result grater volume thickness. 
- Terrain **elevation** can modulate height-field, resulting surface-aligned volumes
- Sim **velocity** is advecting volumetric noise - we are subtracting this from base density and it functions as a flow detail map, enhacing the data coming from the simulation

**Output**: a detailed fluid volume, following surface curvature, shaded by scene lighting. As an alternative to Surface Alignment, volumes can be Camera Facing - ideal for character effects, aerial exposions, heavy airborne dust for demolition scenes. 

Ninja setups utilize **FOUR** volume types, each one could be used for different purposes:

1. **FVOL**, Fog Volume: 
low performance cost, low resolution, low responsivity (high latency), medium size range (10 meters - to - 1 kilometers), no self-shadows, ideal for slowly changing, subtle environmental effects.

2. **CVOL**, Cloud Volume: 
medium performance cost, medium resolution, responsive, large size range (0.5 kilometers - 1000 kilometers), ideal for large scale, detailed and dramatic environmental effects. Besides the trivial usage (high altitude clouds): we could adjust the layer altitude param - and render surface aligned clouds at lower altitudes. Possible use cases include low-lying fog on a hillside, emerging mushroom cloud of a large explosion, volcano smoke column, sandstorm, tornado...

3. **HVOL**, Heterogeneous Volume: 
high performance cost, high resolution, high responsivity, small-medium size range (1 meters - 1000 meters), ideal for small-scale, detail-rich character and environmental effects

4. **SVOL**, Smoke Volume
similar to HVOL, but supports UNLIT mode - ideal to deliver volumetrics on low-end hardware!

---

**In this Chapter:**
- 11.0 <a href="#11-volumetrics">Intro</a>
- 11.1 <a href="#111-features">Features</a>
- 11.2 <a href="#112-example-levels">Example Levels</a>
- 11.3 <a href="#113-internal-rendering">Internal Rendering</a>
- 11.4 <a href="#114-external-rendering">External Rendering</a>
- 11.5 <a href="#115-surface-alignment">Surface Alignment</a>
- 11.6 <a href="#116-culling-fading-visibility">Culling Fading Visibility</a>

<a href="#table-of-contents">Back to the Table of Contents</a>

Related content in the Manual: `Chapter 2, Point 14`, **Native Unreal Volumes**
Original Volumetrics Documentation for LIVE-1: [LINK](https://drive.google.com/file/d/1F94t04Dh2HMWQRUMmtGVxwD2Dk6RaN79)

---------------------------------------------------------------------------------------

### 11.1 Features

Related content in the Manual: `Chapter 2, Point 14`, **Native Unreal Volumes**

SVOL is custom ninja technology, dating back to the time when UE HVOL did not exist.
FVOL, CVOL and HVOL are native Unreal Engine Volume types - in the ninja project, we handle them by a single, generic material function:
`/Content /FluidNinjaLive /OutputMaterials /Base /MF_NinjaOutput_BaseFunction_VOLUME.uasset`

Since we are using the same base function to handle all volume types: the parameters and parameter groups that show up in volumetric materials ARE THE SAME in every case.

      Listing the most important features of the generic volume function:

      1. local and world-space UVW transforms
      2. extruded and cross-section based 3D density
      3. two separate noise mixers
      4. velocity-based flow mapping
      5. surface alignment via heightmaps
      6. ambient lighting and ambient occlusion
      7. fading by (1) altitude, (2) camera-to-volume distance, (3) volume-bounds
      8. emissive from volume density, using blackbody-temperature function
      9. polar coordinate mapping
      10. support for niagara AND non-niagara initialized volumes

These generic volume features are demonstrated on a dedicated level, have a look!
`/Content/FluidNinjaLive/Levels/Misc/VolumeDemo_HVOL_Small.umap`

Thematically GROUPED control params are available at the *Material Instance Details Panel*,  with ToolTips!


---------------------------------------------------------------------------------------

### 11.2 Example Levels

Dedicated Volumetric demo levels in the ninja project:

- **CVOL**: fluidsim driven, terrain aligned Cloud Volumes, 6 setups
`/Content/FluidNinjaLive/Levels/Clouds.umap`

- **CVOL**: passive, terrain aligned Cloud Volumes, 10 setups
`/Content/FluidNinjaLive/Levels/Clouds_PASSIVE.umap`

- **FVOL, HVOL**: fluidsim driven, terrain aligned Fog and Heterogen Volumes, 2 setups
`/Content/FluidNinjaLive/Levels/Fog_Mist.umap`

- **FVOL, HVOL**: passive, terrain aligned Fog and Heterogen Volumes, 2 setups
`/Content/FluidNinjaLive/Levels/Fog_Mist_PASSIVE.umap`
.
- **FAKE** volume imitations on flat surfaces - Camera Facing, Parallax Mapping, 7 setups
`/Content/FluidNinjaLive/Levels/Misc/VolumeDemo_FAKE.umap`

- **FVOL**: fluidsim driven small Fog Volumes, 7 setups
`/Content/FluidNinjaLive/Levels/Misc/VolumeDemo_FVOL_Small.umap`

- **HVOL**: fluidsim driven small Heterogen Volumes, 23 setups
`/Content/FluidNinjaLive/Levels/Misc/VolumeDemo_HVOL_Small.umap`

- **HVOL**: passive small Heterogen Volumes, 17 setups
`/Content/FluidNinjaLive/Levels/Misc/VolumeDemo_HVOL_Small_PASSIVE.umap`

- **HVOL**: fluidsim driven, terrain aligned (RVT) Heterogen Volume, 1 setup
`/Content/FluidNinjaLive/Levels/Misc/VolumeDemo_HVOL_Medium.umap`

- **SVOL**: fluidsim driven small Smoke Volumes, 10 setups
`/Content/FluidNinjaLive/Levels/Misc/VolumeDemo_SVOL_Small.umap`

- **SVOL**: fluidsim driven medium sized Smoke Volumes, 2 setups
`/Content/FluidNinjaLive/Levels/Misc/VolumeDemo_SVOL_Medium.umap`

Note: many levels include volumetric setups - combined with other technology.
For example, on `Sand_Destructibles.umap` level, we combine Simple Painter driven footprints with Terrain aligned Volumetric Dust. On the `Destructibles_as_Points_CameraFacing.umap` level we use a Camera Facing volume to generate dust for a block demolition collapse effect.

---------------------------------------------------------------------------------------

### 11.3 Internal Rendering

`Live Component` features INTERNAL volumetric renderers - so we don't have to use additional Components to render volumetics inside the simulation area (see FVOL prerequisites below).

Supported volume types: **FVOL, HVOL, SVOL**

Renderer controls are located at these param groups:
- `/LiveComponent /LiveOutputInternalRenderers /FVolume`
- `/LiveComponent /LiveOutputInternalRenderers /HVolume`
- `/LiveComponent /LiveOutputInternalRenderers /SVolume`

Besides enabling a given renderer, we need to provide it with a Volumetric Material. 

1. We are pointing the renderer to one of the 3 Output Material arrays, located at:
`/LiveComponent /LiveOutputMaterials`

2. We add a Volumetric Material to the addressed output material array.
Make sure the `...OutputMaterialSelected` INDEX points to the added material!
   - The included Volumetric Output Material templates are all in this folder:
`/Content /FluidNinjaLive /OutputMaterials` 
Subfolder names are telling: `CVOL, FVOL, HVOL, SVOL`

Prerequisites to render Fog Volumes (FVOL):
- `Exponential Height Fog Actor` placed on level
- At the Actor Details Panel of Exponential Height Fog Actor: SET `Volumetric Fog = True`
- Top-Right Viewport Menu `/Show /Fog = Enabled` (or press: `Alt + F` )
- Engine Scalability = EPIC

---------------------------------------------------------------------------------------

### 11.4 External Rendering

In case we'd like to render volumes larger than the simulation area, we use **EXTERNAL** renderers.

1. We use the `Surface Aligned Volumes Utility` to render Fog Volumes (FVOL) and Heterogen Volumes (HVOL). See detailed description in Manual `Chapter 2, Point 9`
Usage examples in the ninja project:
Sim driven extended volume: `/Content /FluidNinjaLive /Levels /Fog_Mist.umap`
Passive extended volume: `/Content /FluidNinjaLive /Levels /Fog_Mist_PASSIVE.umap`

2. We use the `Volumetric Cloud Actor` to render Cloud Volumes (CVOL). 
Related Manual content: `Chapter 2, Point 14` 
Briefly:
- A. we TAG the Cloud Actor and provide ninja with the tag:
`/LiveComponent /LiveOutputMaterials /Apply2ndOutMatToActorsWithTag` 
- B. Also adding a Cloud Material to the Output Materials Array:
`/LiveComponent /LiveOutputMaterials /SecondaryOutputMaterials`
- C. Make sure the `SecondaryOutputMaterialSelected` INDEX points to the added material!
.
Cloud Materials are located at:
`/Content /FluidNinjaLive /OutputMaterials /CVOL` 
.
Usage is demonstrated on these levels:
`/Content /FluidNinjaLive /Levels /Clouds.umap`
`/Content /FluidNinjaLive /Levels /Clouds_PASSIVE.umap`

---------------------------------------------------------------------------------------

### 11.5 Surface Alignment

Volumetric Surface Alignment requies a Height Sampler to acquire elevation data - then, writing the data to a temporary storage (a Buffer, a RenderTarget, a Runtime Virtual Texture). Then, a Volumetric Material is accessing the elevation data - using it to modify the Volume HeightField. In the end, we have a volume, that aligns with the surface of the underlying terrain.

---------------------------------------------------------------------------------------

**SURFACE ALIGNMENT vs INTERNAL RENDERERS**

`Live Component` features surface samplers and internal volume renderers - so the above described data pipeline is handled automatically - and we can easily render surface aligned volumes inside the simulation area. Key Factors:

1. we need to enable height sampling for Live Component
`/LiveComponent /HeightFields /EnableHeightField = True`
2. we need to enable the usage of incoming height data in the Volumetric Output Material
`/Volumetric Output Material /HeightMap /UseHeightMap = True`

In case we are sampling a `Landscape Component` with ninja: that is all we need to do.
In case we trying to sample height data from other terrains (e.g. a mesh based terrain), we need to employ Runtime Virtual Texture samplers or a SceneCaptureCamera. 

The various methods of accessing elevation data are described in Manual `Chapter 5, Point 4`, **Landscape Elevation**

See this tutorial level demonstrating ALL possible ways to access Terrain elevation data:
`/Content /FluidNinjaLive /Levels /Starter /Tutorial03_KeyConceptsForWater.umap / Stage 2`

See this level for an RVT based volumetric setup:
`/Content/FluidNinjaLive/Levels/Misc/VolumeDemo_HVOL_Medium.umap`

---------------------------------------------------------------------------------------

**SURFACE ALIGNMENT vs EXTERNAL RENDERERS**

In case we'd like to set up a volume, that is surface aligned, but LARGER than the simulation area (or passive: not using fluid simulation input at all): we need to employ an EXTERNAL renderer.

We have already discussed External Renderers above: `Chapter 11, Point 4`

The `Surface Aligned Volumes Utility` - besides RENDERING volumes - also supports the same height sampling methods as `Live Component`: it can automatically sample Landscape Components - and any other terrain using the RVT pipeline. We set up the utility to sample terrain height exactly the same way as we set up Live Component.

The utility is described in the Manual at `Chapter 2, Point 9`.
The various methods of accessing elevation data are described in Manual `Chapter 5, Point 4`.

- **Special case 1:** for a passive landscape aligned volume, we don't need ninja at all.
The utility does it all: height sampling and volume rendering. See this level:
`/Content /FluidNinjaLive /Levels /Fog_Mist_PASSIVE.umap`

- **Special case 2:** we can use `Surface Aligned Volumes Utility` only for height sampling, NO Volumetric Rendering. The utility is writing the height data to a RenderTarget, and a Volumetric Cloud material is reading this - to Render Terrain Aligned Clouds! See this level:
`/Content /FluidNinjaLive /Levels /Clouds_PASSIVE.umap`


---------------------------------------------------------------------------------------

### 11.6 Culling Fading Visibility

**VOLUME VISIBILITY**

1. **Output Material driven DISTANCE FADE for ALL volume types (FVOL, HVOL, CVOL)**
Since we are using the same base function for all volumetric materials, the distance based fading generally could be adjusted under this param group:
`Volumetric Output Material /Fading`
For example:  `FadeByDistanceFromCamera = True` and set specific values with `FadeDistance`

2. **FVOL Visibility**
Prerequisites to render Fog Volumes:
- Exponential Height Fog Actor placed on level
- At the Actor Details Panel of Exponential Height Fog Actor: SET `Volumetric Fog = True`
- Top-Right Viewport Menu `/Show /Fog = Enabled` (ALT +F)
- Engine Scalability = EPIC
- Unreal controls VolumeFog view distance. 
Key setting: `Exponential Height Fog Actor /Volumetric Fog /View Distance` (default = 6000 UE units = 60 meters)

3. **HVOL Distance Culling**
Unreal Engine is culling ("not displaying") heterogeneous volumes at large distances.
The engine default culling value could be overridden using the `r.HeterogeneousVolumes.MaxTraceDistance` console command.

4. **HVOL Maximum Drawing Distance**
This option is not available for Niagara base HVOL rendering:
`HVOL actor details /LOD /Desired MaxDrawDistance`

5. **SVOL Visibility**
See the `XDistanceFade` parameter-group in the VolumeSmoke Material Instance, with *Range* and *Falloff* params



---------------------------------------------------------------------------------------

<div style="page-break-after: always;"></div>


## 12. Performance

**Performance and Optimization**

Ninja is using a Niagara based 2D simulation Core to drive 3D visualization systems. Core performance is optimal: a 2K sim with multiple inputs (Particles on Data Channels, Mesh SDF and Landscape elevation samplers) costs 1.2 millisec per frame on a **RTX3080**. See this [Profiler Screenshot](https://ibb.co/pjKVVTRY). A 256px sim with single input (bitmap) costs 0.023 millisec per frame.
*(For comparison: running our game on 60 FPS means a 16.7 ms frame budget)*

By carefully picking visualization methods, we could run multiple simulation containers above 250 FPS on a **GTX1070** - see this [Performance Test Video](https://youtu.be/HZv1mp5kNmM?si=V1y9iYwsT7VbeCrf) on YouTube, showcasing 12 different scenes.

The same demo levels - without specific low-end optimization - run between 30-60 FPS on a **SteamDeck** - see this [Screener](https://youtu.be/kCFgcbTYWpI?si=IZZhLMEY7q2ROYpf) on YouTube.

On the other hand, there are visualization methods that surely tank performance: 
- *Single-Layer-Water* based komplex Surface Materials
- Volumetric Materials with self shadow, like *Heterogeneous Volumes* and *Cloud Volumes*

RTX 2060 and RTX 3060 cards seem to perform particularly bad with these settings. In most ninja-related performance tests, RTX2080 vastly outperformed RTX3060 - at some tests, even GTX1070 performed better. Mid term goal: investigate performance bottlenecks for 60's cards.

---

**In this Chapter:**
- 12.0 <a href="#12-performance">Intro</a>
- 12.1 <a href="#121-optimization-params">Optimization Params</a>
- 12.2 <a href="#122-data-pipeline">Data Pipeline</a>
- 12.3 <a href="#123-stress-test-levels">Stress Test Levels</a>
- 12.4 <a href="#124-distance-based-modes">Distance Based Modes</a>
- 12.5 <a href="#125-project-settings">Project Settings</a>

<a href="#table-of-contents">Back to the Table of Contents</a>

---------------------------------------------------------------------------------------

### 12.1 Optimization Params

Variables for performance adjustment are located at this parameter group:
`/LiveComponent /LiveCore /Performance`

Param List:

      PauseSimWhenNotVisible, BOOL, 1
      WaitBeforePause, FLOAT, 0.2
      PaintBufferDownScaleFactor, INT, 2
      FieldBufferDownScaleFactor, INT, 4
      EnableCrudePressureSolver, BOOL, 0
      MaxInteractionsPerSimArea, INT, 16000
      MaxInteractionsPerNeighborCell, INT, 256
      DataChannelThroughput, INT, 4000
      AutoAdjustNeighborCellNumber, BOOL, 1
      NeighborCellNumberXY, INT, 16
      MaxSamplingFPS, INT, 60
      MinSamplingFPS, INT, 30
      LOD-ReduceSamplingFPS, BOOL, 0
      LOD-NearBound, FLOAT, 2000
      LOD-FarBound, FLOAT, 5000
      LOD-Steps INT, 5
      LOD-CheckFrequency, FLOAT, 0.5

Each param comes with a detailed description: available as **ToolTip** on the Actor and Component Details Panel UI - and as raw text in the [**Parameter Descriptor**](https://drive.google.com/file/d/1FedZwfW3iE1OgJr_Ye551TgaSLjqVUdj) - have a look!

Additionally, simulation RESOLUTION has a great impact on performance:
`/LiveComponent /LiveCore /ResolutionX` and `ResolutionY`


---------------------------------------------------------------------------------------

### 12.2 Data Pipeline

Let us evaluate ninja performance by looking separately at three stages of the data processing pipeline: (1) input data collection - (2) simulation - (3) output data visualization

INPUT: POINTS

- Reading points through `Data Channels` has the highest throughput - up until the 1K range performance hit is low, 10K being the upper limit of realtime usage. On the included demo levels, we use GPU Particle Emitters to write Data Channels (see `Chapter 5, Point 6`). In this case, both writing and reading is on the GPU, ideal.
- Reading Destructible Chunk position also happens on the GPU by the Niagara `Chaos DI`, working in the 10-500 points range is safe.
- Reading Primitive Mesh Pivots and Skeletal Mesh Bones is managed by `Live Component`. Data Collection is CPU-bound *(collected data is later forwarded to Niagara Core, to the GPU)*, working in the 10-200 points range is safe.

Point data processing is double hashed: 
First pass: filter for points inside the sim area (XY) and vertically, within interaction zone (Z). The second pass is processing points on hash grid with user defined subdivision (default = 16 x 16). Once done, we forward the grouped point data to the point-painter module: each painter-grid cell gets a list of the nearby points (points in the same hash cell) and processes only these points.

.
INPUT: FIELDS

Ninja can read multiple field types (Mesh SDF and Destructible SDF, Spline Direction, Terrain HeightField) - each type is sampled on the GPU, using the resolution defined at `/LiveComponent /LiveCore /ResolutionX` and `ResolutionY`.

**VERY IMPORTANT**: field sampling resolution is BY DEFAULT downscaled by a factor of `4` - for example: IF Sim Resolution = 1024 x 1024, then Field Sampling Resolution = 256 x 256.
KEY PARAM: `/LiveComponent /LiveCore /Performance /FieldBufferDownScaleFactor = 4`
Using higher field sampling resolution is recommended mainly for *Cinematic* usage.
E.g. FieldBufferDownScaleFactor = 1 means, field sampling happens at sim resolution.

.
SIMULATION and DATA PROCESSING

Ninja is performing internal data processing via `NinjaLiveCore.uasset` using Niagara Grid 2D structures, data flow on the GPU is parallel for each grid cell, managed by Modules on various Simulation Stages. Certain Stages could be excluded from the Data Pipeline via Static Switches - for example: If `EnableHeightFields = False`, the simulation stage with Landscape and RVT samplers is off. `SimplePainterMode = True` is shutting down the whole simulation pipeline, keeping only the input data collection, hashing and painter modules. As a result, Live Core could be optimized for certain usecase - eg.: this Simple Painter setup is running with 280 FPS on GTX1070 [video capture](https://youtu.be/HZv1mp5kNmM?list=PLVCUepYV6TvNWRtiJw6jFH0OS-d68mbmG&t=214) - and we have stable 60 FPS on a SteamDeck [video capture](https://youtu.be/kCFgcbTYWpI?list=PLVCUepYV6TvNWRtiJw6jFH0OS-d68mbmG&t=123).

.
OUTPUT DATA VISUALIZATION

In general, we can say: while input and sim data processing can be crunched down to optimal levels easily - output is a hard nut to crack - and in some cases, it could consume 10x more resources than any other parts of the pipeline.

There are visualization methods that surely tank performance: 
- *Single-Layer-Water* based komplex Surface Materials
- Volumetric Materials with self shadow, like *Heterogeneous Volumes* and *Cloud Volumes*

RTX 2060 and RTX 3060 cards seem to perform particularly bad with these settings. In most ninja-related performance tests, RTX2080 vastly outperformed RTX3060 - at some tests, even GTX1070 performed better. Mid term goal: investigate performance bottlenecks for 60's cards.

.
**Suggestions to reduce output data processing load:**

- ninja SingleLayerWater Output Material Instances could look really nice, when ADVECTION is turned on both for Flow Details maps - and for Caustics patterns. Switching off caustics advection and flow detail maps reduces the load
- alternatively, we could switch off SLW shader domain usage entirely, and use Opaque, Default Lit surfaces, instead
- for volumetric materials: switching off 3D NOISE and noise advection is a good idea in general 
- reducing volume resolution is also a logical step
- while Heterogenous Volumes (HVOL) and Cloud Volumes (CVOL) are heavy, using Fog Volumes (FVOL) without self shadows is highly optimal - see this [video snippet](https://youtu.be/HZv1mp5kNmM?list=PLVCUepYV6TvNWRtiJw6jFH0OS-d68mbmG&t=151) showing landscape aligned FVOL running 200 FPS on GTX1070 --------------------------------------------------------------------------------------- same scene running 45 FPS on SteamDeck: [video](https://youtu.be/kCFgcbTYWpI?list=PLVCUepYV6TvNWRtiJw6jFH0OS-d68mbmG&t=79)
- besides the native unreal volume types (HVOL, CVOL, FVOL) ninja also features a custom volume type, labeled as "Smoke Volume" SVOL, demonstrated on this level:
`/Content/FluidNinjaLive/Levels/Misc/VolumeDemo_SVOL_Small.umap`
Unlike native unreal volumes: SVOL supports **UNLIT MODE** - which runs really fast on low end machines too!
- worth to have a look at the FAKE volumetrics level, too!
`/Content/FluidNinjaLive/Levels/Misc/VolumeDemo_FAKE.umap`


---------------------------------------------------------------------------------------

### 12.3 Stress Test Levels

Five stress test levels included to the project, in this folder:
`/Content/FluidNinjaLive/Levels/Misc`

Input Stress:
- 10K Particles: `PerformanceTest_Particles.umap`
- 200 Primitives: `PerformanceTest_Primitives.umap`
- 20 Skeletal Meshes: `PerformanceTest_SkeletalMeshes.umap`

Multiple Sim Actors Stress:
- 49 Fluidsim mode Live Actor: `PerformanceTest_SimContainers.umap`
- 65 Simple Painter mode Live Actor: `PerformanceTest_SimplePainterContainers.umap`


---------------------------------------------------------------------------------------
### 12.4 Distance Based Modes

Keeping nearby containers detailed - and gradually reduce detail and sampling frequency as the player is distancing is a good idea in general. Related ninja features:

1. Pause simulation - when player is outside Activation Volume
`/LiveActor /LiveActivation`

        SimActivatedByPawnProximity, BOOL, 0
        ShowActivationVolumeInEditor, BOOL, 0
        ActivationVolumeSize, VEC3, (50,50,50)
        ActivatorProximityCheckFrequency, FLOAT, 0.1
        ActivatorType, ENUM, 2
        Activator, ACTOR

2. Pause simulation - when out of sight:
`/LiveComponent /LiveCore /Performance`

        PauseSimWhenNotVisible, BOOL, 0

3. Reduce the number of simulation cycles with distance:
`/LiveComponent /LiveCore /Performance`

        LOD-ReduceSamplingFPS, BOOL, 0
        LOD-NearBound, FLOAT, 2000
        LOD-FarBound, FLOAT, 5000
        LOD-Steps INT, 5
        LOD-CheckFrequency, FLOAT, 0.5

Each param comes with a detailed description: available as **ToolTip** on the Actor and Component Details Panel UI - and as raw text in the [**Parameter Descriptor**](https://drive.google.com/file/d/1FedZwfW3iE1OgJr_Ye551TgaSLjqVUdj) - have a look!
.
**WARNING:** 
distance based quality reductors should be SWITCHED OFF when using ninja for Rendered Cinematics!

---

### 12.5 Project Settings

Unreal Engine 5 came with heavy features: Lumen and Nanite - together with their pre-required RHI, DX12 - eat half of the available performance. While, sometimes, these features make a scene visually stand out... this is not the case with the ninja demo levels. 

**A specific example on RTX 3080, WIN11, UE 5.6:**
- Level: `/Content/FluidNinjaLive/Levels/Water_Sparse_Sea_Stormy.umap`
- Video Capture from the Level: [YouTube Link](https://youtu.be/QuCO66Tv8zw?t=384) - recorded with the below "**Config 3**"

**Config 1**:  TSR antialias, DX12, Lumen Global Illumination, Lumen Reflections, Nanite = `70 FPS`
**Config 2**:  TSR antialias, DX12, Lumen Global Illumination, Lumen Reflections = `95 FPS`
**Config 3**:  TAA antialias, DX11, ScreenSpace Global Illumination, ScreenSpace Reflections = `210 FPS`

On the ninja stormy sea level, THERE ARE NO OBVIOUS VISIBLE DIFFERENCES between the above configs. 
.
In order to have the best **PIE** (Play In Editor) performance, the ninja project is using these settings:

1. `/Project Settings /Engine  /Rendering /Anti-Aliasing Method: default = TSR`
Mod: TAA
Performance Gain: ~25%

2. `/Project Settings /Platforms /Windows /Default RHI: default = DirectX12`
Mod: DirectX11
/D3D Targeted Shader Formats  ---------------------------------------------------------------------------------------> SM5  (SM6 = FALSE)
Performance Gain: ~25%

3. `/Project Settings /Engine  /Rendering  /Dynamic Global Illumination Method = Lumen`
Mod: switch off Lumen
Performance Gain: ~30%

4. `/Project Settins /Engine /Rendering /Reflection Method = Lumen Reflections`
Mod: ScreenSpace
Performance Gain: ~15%

5. Switching off NANITE also means 10-25% performance gain.

6. There is a specific Unreal rendering param, that determines the *weight of current Frame's contribution to the history*: **TemporalAACurrentFrameWeight**
Unreal default is `0.04` - resulting in smudgy, blurred surfaces with high frequency texture-space changes. We can enforce more crispy /less smudgy visuals using a console variable (CVAR): `r.TemporalAACurrentFrameWeight 0.25`
On the ninja levels, the `Pawn and Camera Utility Actor` is set to execute the above command, and change the UE default Temporal Weight.


---------------------------------------------------------------------------------------

<div style="page-break-after: always;"></div>


## 13. Cinematics

**Sequencer and Movie Render Queue** - FluidNinja LIVE-2 supports both
  - the simulation responds to Sequencer driven objects
  - all ninja parameters can be animated by Sequencer
  - ninja output can be rendered via Movie Render Queue


FluidNinja LIVE-2 [Render Test with Movie Render Queue](https://youtu.be/PtACHMVukyo)
Sequencer and MRQ panels [Screencapture](https://drive.google.com/file/d/1fcTWi8n7xAk821rerqGmlWNNjNfdqfJ9)

---

**In this Chapter:**
- 13.1 <a href="#131-sequencer">Sequencer</a>
- 13.2 <a href="#132-movie-render-queue">Movie Render Queue</a>
      - <a href="#mrq-rendering">MRQ Rendering</a>
      - <a href="#mrq-warnings">MRQ Warnings</a>
      - <a href="#mrq-related-assets">MRQ Releted Assets</a>

<a href="#table-of-contents">Back to the Table of Contents</a>

---------------------------------------------------------------------------------------


### 13.1 Sequencer


**(A)** Sequencer driven objects interact with ninja *exactly the same way* as non-sequencer driven objects. See this tutorial level displaying all types of interaction: 
`/Content /FluidNinjaLive /Levels /Starter /Tutorial02_Inputs_Interaction.umap`
.
**(B)** All ninja parameters can be animated with Sequencer.
**Key**: we need to EXPOSE the parameters to Sequencer (by default: not exposed). 
.
*Step by step guide*

**Exposing Live Component parameters to Sequencer:**

1. Open NinjaLiveComponent Blueprint for editing (double click on the asset in Content Browser)
`/Content /FluidNinjaLive /NinjaLiveComponent.uasset`
2. Look up the list of parameters under the "My Blueprint" TAB, in the "Variables" group
3. Select the parameter you would like to expose to Sequencer (for example: "GlobalBrushSize")
4. Switch to the "Details" TAB inside the Blueprint Editor
5. On the Details TAB, locate "EXPOSE TO CINEMATICS" bool flag, and set it to TRUE
6. Compile and Save the Blueprint
.
7. Create a **Level Sequence** in Content Browser, open it with **Sequencer**
8. From the Level Outliner, drag an Actor (e.g. `Live Actor`) that contains `Live Component` to the Sequencer TRACKS panel
9. Click on the Actor (on the Tracks UI) and using the PLUS sign, select NinjaLiveComponent as a Track to add
10. Once NinjaLiveComponent is added, click on the PLUS sign near the Component, a list of params appear
11. Add the freshly exposed param as Track, now it can be animated on the timeline
   It should look like this [Screenshot](https://drive.google.com/file/d/1whHAriKLxgN7tzP-pBQDS9dSl3-Vr0py)


IMPORTANT: there is a KEY ninja parameter, determining the frequency at wich Live Component updates the parameter values coming from the sequencer:  
`/LiveComponent /LiveEditorTools /ParamUpdateFrequency = 1`
"1" means once in a second, "0.1" means 10 times per second. For example: we set up Sequencer Track with a Curve to animate the ninja param "GlobalBrushSize". No matter how smooth our Sequencer curve is: brush size is being updated once in a second - if ParamUpdateFrequency = 1. 


Example setup: 
`/Content /FluidNinjaLive /Levels /Starter /Tutorial05_Tricks.umap /STAGE 1A`

.
**(C)** Animating parameters of External Systems, like Materials and Niagara happens the standard Unreal way. See related tutorials by EPIC, search for keywords like "unreal engine animating dynamic material instances with sequencer".


---------------------------------------------------------------------------------------


### 13.2 Movie Render Queue

- <a href="#mrq-rendering">MRQ Rendering</a>
- <a href="#mrq-warnings">MRQ Warnings</a>
- <a href="#mrq-related-assets">MRQ Releted Assets</a>

---

#### MRQ Rendering

Ninja output can be rendered with Movie Render Queue (MRQ), using DEFAULT config settings.
The ONLY setting that must be customized in the MRQ config: *OutputFrameRate = 60 fps*


This video is showing the [Test Result](https://youtu.be/PtACHMVukyo)
A 4K movie rendered on the `Water_Dense_Sea.umap` level, with default settings.

Here comes a *step by step guide* - referencing the assets of an included example setup.
The guide is also referencing this [Screenshot](https://drive.google.com/file/d/1fcTWi8n7xAk821rerqGmlWNNjNfdqfJ9)
.
RENDERING A SCENE USING MOVIEW RENDER QUEUE:
1. Enable the MovieRenderQueue Plugin at:  Edit /Plugins, then Restart Editor
2. Open the level that you would like to render, add a Cinematic Camera Actor
  Example Level: `/Content/FluidNinjaLive/Levels/Water_Dense_Sea.umap`
  Example Actor: `CineCameraActor_Example_Coastline`
3. Create a Level Sequence in Content Browser, open it with Sequencer
  Example: `/Content/FluidNinjaLive/Misc/Sequencer/SequenceTest2_CinematicRender.uasset`
4. Drag the CineCamera from the Level Outliner to the Sequencer (No.1 on the [Screenshot](https://drive.google.com/file/d/1fcTWi8n7xAk821rerqGmlWNNjNfdqfJ9))
5. Open `Window /Cinematics /MovieRenderQueue` (MRQ)
6. Press the "+Render" Button at the top-left corner and select your Level Sequence (SequenceTest2_CinematicRender)
7. Create new or add existing MRQ config file in the "Settings" column by clicking on "UnsavedConfig" (No.2 on the [Screenshot](https://drive.google.com/file/d/1fcTWi8n7xAk821rerqGmlWNNjNfdqfJ9))
  `/Content/FluidNinjaLive/Misc/Sequencer/Coastline_MRQ_Config`
8. On the MRQ CONFIG popup panel, select Settings /Output (No.3 on the [Screenshot](https://drive.google.com/file/d/1fcTWi8n7xAk821rerqGmlWNNjNfdqfJ9))
9. SET `UseCustomFrameRate = True`
10. SET `OutputFrameRate = 60 fps`  (VERY IMPORTANT SETTING!)
11. Press the blue LOCAL RENDER button at the bottom-right corner of the MovieRenderQueue windows
12. The file sequence is saved outside the Contents folder (access via File Manager outside Unreal)
  `/FluidNinjaLive/Saved/MovieRenders`


- Optionally, select "PawnAndCameraUtility" Actor on level (icon: green N)
- At the Actor Details Panel, SET Possess Nearest Pawn = False

.
**Suggestion: improving viewport render quality**

We can force Unreal to render frames in "super resolution", and scale down the rendered frames to target resolution. E.g. render frames in 4K, display them in HD (2K). Advantage: crisp details, no alias-flickering at distant surfaces.
Look up this param group: 
`Viewport upper-right corner /Performance and Scalability Options /Screen Percentage`
- `Custom Override = True`
- `Screen Percentage = 200`

We can enforce "super resolution" using console variable (CVAR):
- `r.screenpercentage = 200`

We can add a CVAR to ninja's "Execute at Start" options:
`/LiveComponent /LiveCore /CVAR /ExecuteCommandsAtStart`

---

#### MRQ Warnings

All kind distance-based quality reduction should be switched off when using ninja for Cinematics - please have a look at `Chapter 12 Point 4`
*(Warning 1 and 2 are two specific cases for distance-based quality reduction)*

---

**Warning 1**: on many levels, Live Actors are Proximity Activated - work only when the Player Pawn is close. The cinematic camera does not qualify as "pawn", hence does not trigger the proximity sensor - and Live Actors remain inactive.  

Before rendering with MRQ, disable proximity sensor at: 
`Live Actor Details Panel /LiveActivation /SimActivatedByPawnProximity = False`

---

**Warning 2**: many times, player-to-camera distance based LOD is enabled (lowers quality by distance). To make sure you render the sequence using the best available quality, disable LOD at: `/LiveComponent Details Panel /LiveCore /Performance /LOD-ReduceSamplingFPS = False`

---

**Warning 3**: ninja is performing calculations in the 60 FPS range. When the Movie Render Queue is set to other FPS (eg.: 24 fps), it hurts ninja visual quality. Make sure you set MRQ rendering FPS to 60, on the MRQ CONFIG popup panel:
`/Settings /Output /OutputFrameRate = 60 fps` (No.3 on the [Screenshot](https://drive.google.com/file/d/1fcTWi8n7xAk821rerqGmlWNNjNfdqfJ9))
*Workaround to render on lower FPS: render a sequence on 60 FPS, then retime it in a compositor program (DaVinci, AfterFX)!*

---

**Warning 4**: ninja is a finite sim. On many levels, Live Actor is attached to the Player Pawn - in order to make sure: the near environment around the player is always interactive. In Cinematic Rendering shots, we do not have a "player pawn". We need to make sure the sim is attached to the Cinematic Camera - or something that is always in camera focus. In case the CineCamera leaves the sim boundaries: no interaction.

---

**Warning 5**: there is a specific Unreal rendering param, that determines the *weight of current Frame's contribution to the history*: **TemporalAACurrentFrameWeight**
Unreal default is `0.04` - resulting smudgy, blurred surfaces with high frequency texture-space changes. We can enforce more crispy /less smudgy visuals using a console variable (CVAR): `r.TemporalAACurrentFrameWeight 0.25`
On the ninja levels, the `Pawn and Camera Utility` Actor is set to execute the above command, and change the UE default Temporal Weight.

---

#### MRQ Related Assets

This stage is demonstrating sequencer controlling an arbitray ninja param:
`/Content /FluidNinjaLive /Levels /Starter /Tutorial05_Tricks.umap / STAGE 1A`


A Level, containing a cinematic camera actor - referenced by the example cinematic render test Sequence:
`/Content /FluidNinjaLive /Levels / Water_Dense_Sea.umap / CineCameraActor_Example_Coastline`

Sequence and MRQ config files used by the above example setup:
`/Content /FluidNinjaLive /Misc /Sequencer /SequenceTest1_ControllingNinjaParams.uasset`
`/Content /FluidNinjaLive /Misc /Sequencer /SequenceTest2_CinematicRender.uasset`
`/Content /FluidNinjaLive /Misc /Sequencer /Coastline_MRQ_Config.uasset`



---------------------------------------------------------------------------------------

<div style="page-break-after: always;"></div>


## 14. Limitations

**This chapter describes known Unreal Engine bugs and ninja feature limitations.**

---

Contents of this Chapter:
- 14.1 <a href="#141-terrain-flow">Limits of terrain flowing water simulation</a>
- 14.2 <a href="#142-wave-generator">Prerequisites for Wave Generator</a>
- 14.3 <a href="#143-dependencies">Live Component - Dependence on Live Actor</a>
- 14.4 <a href="#144-spawning">Live Actor - Spawning Objects inside the Interaction Volume</a>
- 14.5 <a href="#145-interaction-volume">Live Actor Interaction Volume vs Live Component Interaction Volume</a>
- 14.6 <a href="#146-bug---niagara-data-loss">Bug - data loss on the Niagara Systems User Parameter input</a>
      - Problems with ninja external systems
      - Problems with ninja core
- 14.7 <a href="#147-bug---destructibles">Bug - Chaos Destructible Geometry Collections Memory Leak</a>

<a href="#table-of-contents">Back to the Table of Contents</a>


---------------------------------------------------------------------------------------


### 14.1 Terrain Flow
**Limits of terrain flowing water simulation**


Ninja is a generic fluid simulation toolkit - employing the *Navier-Stokes fluid model* for both gases and liquids. **Advantage:** all simulation types could be handled with the same parameter set. 
**Contra:** when it comes to the simulation of terrain flowing liquids, the feature set is limited - compared to simulations employing a dedicated *shallow water* model.

What ninja terrain flowing water CAN do:
 - confine flow with terrain slope and obstacles
 - use sources to generate water, cache and reaload sim state
 - accumulate a thin layer of fluid (max 1 meter) to fill smaller gaps
---------------------------------------------------------------------------------------
**What ninja terrain flowing water CAN NOT DO:**
 - we can not dynamically accumulate a thick layer of fluid
 - we can not dynamically fill up tanks, rooms, pools from zero to multi-meter depths.

**Workarounds:**

1. When working with static, non-terrain aligned fluids (technically: SPARSE water setups), we can define a static water level (water-column height) by using a mesh surface - and restrict interactions to this surface. For example, a pool, with a water-surface mesh, manually placed 2 meters above the floor. Or a river made of spline meshes, or a lake made of plane-meshes.
*(Idea: we can fake water-level rising by lifting the mesh surface)*
Static water-surface usage is demonstrated on levels named `Water_Sparse`.

2. When working with dynamic, terrain aligned fluids (technically: DENSE water setups), we can virtually CLAMP terrain elevation at a custom altitude - for the fluid, clamping altitude is like a flat surface. Ninja is set to automatically and instantly fill the area at clamping altitude, regardless of simulation state - this way, we can instantly create lake or sea surfaces - and have simulated waves on the coastline, or simulated creeks flowing into the lake. 
.
Related clamping params:
`/LiveComponent /LiveInputFields /HeightFields /ClampHeightLowerValues`
`/LiveComponent /LiveInputFields /HeightFields /ClampingValue`
.
Related concept: extending the sim area - explained on this level:
`/Content /FluidNinjaLive /Levels /Starter /Tutorial03_KeyConceptsForWater.umap /STAGE3`
The clamping of terrain aligned dynamic sim is demonstrated on levels named `Water_Dense`.

---------------------------------------------------------------------------------------
**An occasional GLITCH with terrain flowing water:**

Once a gap is filled up with fluid, it might leak more fluid - behaving like a source. In most cases, we do not notice this (e.g. gaps filled up in a creekbed) - but sometimes, this results weird phenomena, like fluid creeping up in rims - getting through obstacles it should not.

**Workaround**: 
Besides manually adjusting the intended flowing route (sculpting landscape, placing obstacles) - we can employ objects that EXCLUDE the fluid from a given area. 
The feature is called "Collision Masking", parameter available at:
`/LiveComponent /LiveInputFields /MeshFields /UseAsCollisionMask`

Collision Masking is demonstrated on this level:
`/Content /FluidNinjaLive /Levels /Water_Dense_Creek2.umap`


---------------------------------------------------------------------------------------

### 14.2 Wave Generator
**"WavesFromLandscapeGradient" function limited to data sampled from "Landscape Components"**

LIVE-2 comes with EXPERIMENTAL coastal wave generator that uses the terrain slope gradient to generate waves that travel perpendicular to the coast. Function located at this param group:
`/LiveComponent /LiveSimulation /WavesFromLandscapeGradient`

**The wavegen function has critical prerequisites**. 
The most important factor: it DOES NOT WORK with data coming from RVT or SceneCapture sources, only Landscape Components. In later ninja versions, wavegen should be generalized to all kinds of height inputs.

**More prerequisites for the wavegen:**
(1) Have a Landscape Component below the sim area
(2) Landscape should be evenly ascending towards the waterline: having flat landscape under water results zero gradient, no waves. 
(3) `LiveComponent /LiveInputFields /HeightFields /EnableHeightField = True`, `ClampHeightLowerValues = True` 
(4) `LiveComponent /LiveSimulation /DensityAccumulation > 1`   (Wavegen works only with DENSE water setups!)


---------------------------------------------------------------------------------------


### 14.3 Dependencies
**Live Component: dependence on Live Actor**


Input data is typically collected by Live Component alone - except one data type. To collect Point data from Primitive Mesh Pivots and Skeletal Mesh Bones, Live Component partially relies on Live Actor. 

Explainer: Live Actor contains a box volume Component, labeled as "Interaction Volume". We are using the Interaction Volume for overlap detection - specifically, to track Primitives and Skeletal Meshes as POINT inputs. Without Live Actor (if Live Component is added to some other Actor), Live Component falls back to a limited-interaction mode, tracking only the Primitive Components and Skeletal Mesh Components of the host (owner) Actor. This is called "Interaction with Owner", and the options to manage it are availabe at this param group:
`/LiveComponent /LiveInputPoints /InteractionWithOwner`

For example, if we add Live COMPONENT to a Character Actor, we can use the bones of the Character as sim input - but we can not use bones from other Skeletal Meshes. Similarly, we can use the Primitive Components of the character as point-input. This is ideal for character-specific effects - like flaming limbs or a torch. On the contrary, if we attach (parent) Live ACTOR to the Character: it can interact with any object or bone in the World. 

For clarity, these are the input data collection cases, when Live Component is NOT dependent on Live Actor:
1. IF we are tracking particles or destructible chunks as point data: Live Component fully manages the case, does not rely on Live Actor overlap detector. As mentioned, we can also track components of the host actor as point data. 

2. IF we use objects as FIELD input (e.g. we set up ninja to sample PhysicsBodies using their Mesh Distance Fields, aka. Mesh SDF), Live Component fully manages the case, does not rely on Live Actor's overlap detector.

Takeaway: Live Component does not rely on Live Actor when handling most interactions - except, when interacting with Primitives and Skeletal Meshes - as point sources.

Related Tutorial Level, showcasing all data types ninja can access and interact with:
`/Content /FluidNinjaLive /Levels /Starter /Tutorial02_Inputs_Interaction.umap`



---------------------------------------------------------------------------------------


### 14.4 Spawning
**Live Actor: Spawning Objects inside the Interaction Volume**


Live Actor contains a box volume Component, labeled as `Interaction Volume`. Objects entering and leaving the Interaction Volume are properly registered. On the contrary, objects **spawned or destroyed** inside the Interaction Volume **are not handled**. This is a standard behavior of Unreal Triggerboxes (and the InteractionVolume is a TriggerBox).

**Workaround 1**: spawn objects outside the volume, and MOVE (teleport) them inside the volume, one frame later.

**Workaround 2**: create your own function that ADDS spawned objects to the Live Component interaction register variables:

- Variable: `OverlappingComponents`
Type: *Primitive Component Array*

- Variable: `SkeletalMesh-TempArray-Pairs`
Type: *Map*


---------------------------------------------------------------------------------------


### 14.5 Interaction Volume
**Live Actor Interaction Volume** - vs - **Live Component Interaction Volume**

.
Live Actor contains a box volume Component, labeled as `Interaction Volume`. We are using the Interaction Volume for overlap detection - specifically, to track Primitives and Skeletal Meshes as POINT inputs. We can set size and visibility using these params:
`/LiveActor /LiveInteraction /InteractionVolumeSize = (X, Y, Z size in meters)`
`/LiveActor /LiveInteraction /ShowInteractionVolumeInEditor = True`

**IMPORTANT:** 
Live Actor Interaction Volume has NOTHING to do with the simulation area size. Used specifically for overlap detection.

---------------------------------------------------------------------------------------
.
Simulation area size (scale, bounds) is defined in Live Component, with a dedicated variable:
`/LiveComponent /LiveCore /ExtentsXYZ = (X, Y, Z size in meters)`

ExtentsXYZ not only defines XY simulation area size - the "Z" part of the variable is also a relevant as a filter for input point data.

**Explainer:** ninja is a 2D simulation and the size of the 2D sim area is defined by the X,Y parts of "ExtentsXYZ". The Z part of "ExtentsXYZ" is irrelevant for the 2D sim area - it defines the height of the Live Component Interaction Volume, which works like a filter for ALL point-like simulation inputs. It filters both the point data coming from Live Actor (Primitive Component Pivots and Bones) and all the points handled by Live Component (particles, destructibles). Points inside the "ExtentsXYZ" volume interact with the sim (leave marks in the paint buffer), points outside the volume are ignored. 

Reasons why we define Interaction Volume separately for Live Component and Live Actor: 
- Live Component could be used without Live Actor 
- The collection of particle-points and destructible-points is managed exclusively by Live Component, without the Actor
- We can use the Z part of "ExtentsXYZ" to fine-tune interaction. For example: we set Live Actor Interaction Volume to a cubic volume, e.g. 10 x 10 x 10 meters --------------------------------------------------------------------------------------- so every skeletal mesh is detected within the volume, and their bones are being tracked. Then, we set Live Component ExtentsXYZ to 10 x 10 x 0.1 meters: bones more than 0.1 meters above the ground are ignored (do not leave marks). This is exactly how we make proper footsteps: responding to bones ONLY when they are very close to the ground. To summarize: we need a tall Live Actor interaction volume to pick up skeletal meshes, and keep tracking all bones - and we need a thin Live Component interaction volume to filter bone response.

**IMPORTANT**:
Live ACTOR Interaction Volume should not be confused with Live COMPONENT Interaction Volume.



---------------------------------------------------------------------------------------


### 14.6 Bug - Niagara Data Loss
**Data loss on the Niagara Systems User Parameter input**


Every system we are working with, exposes a UI, with input fields, where we define values - to configure the system. It would be annoying to randomly lose the values we have defined at the input fields - wouldn't it? Sadly, this is being the case for a FEW data types, when used as Niagara User Parameter input. This is an Unreal Engine bug.



---------------------------------------------------------------------------------------
#### External systems
**Problems with ninja external systems**


A "Material Interface User Parameter", in Niagara, stores a REFERENCE to a Material Asset (a specific file in the Content Browser). Using this parameter, we can tell niagara to use a certain material. There are three Niagara Systems in the Ninja asset library that rely on this input data type:

Asset: /Content /FluidNinjaLive /OutputNiagara /SurfaceAlignedMeshes.uasset
**Surface Aligned Meshes:**
   - Asset: `/Content /FluidNinjaLive /OutputNiagara /SurfaceAlignedMeshes.uasset`
   - Param: `/User Parameters /MeshMaterial`

   **Surface Aligned Volumes:**
   - Asset: `/Content /FluidNinjaLive /OutputNiagara /SurfaceAlignedVolumes.uasset`
   - Param 1: `/User Parameters /FVOLMaterial`
   - Param 2: `/User Parameters /HVOLMaterial`

   **Surface Aligned Particles:**
   - Asset: `/Content /FluidNinjaLive /OutputNiagara /SurfaceAlignedParticles.uasset`
   - Param: `User Parameters /Renderer /SpiteMaterial`

**THE BUG**: 
When we copy-paste one of these systems from a level to a new level - OR - duplicate the system on a given level, the Material Input field is CLEARED in the new copy. We have lost the binding with the originally assined Material.
WORKAROUND: manually re-assing the material following the system duplication.


**NOTE**: 
- A. when we use the above systems in standalone mode, to render passive (non simulated) patterns, we definitely need to take care of this bug when duplicating the systems. Example Level: /Content /FluidNinjaLive /Levels /Fog_Mist_PASSIVE.umap

- B. when we are using the above systems as an external renderer with ninja: we can optionally assign materials to the systems with Live Component. In this case, the actual value of "Material Interface User Parameter" does not matter, as Live Component OVERWRITES this at game start. Key Live Component Params:

      /LiveComponent /LiveOutputExternalRenderers /...
      - DriveNiagaraComponentInTaggedActors
      - ExposeOutputMaterialToSurfaceAlignedNiagaraMeshes = True
      - MeshMaterial = (user defined material ref.)
      - ExposeOutputMaterialToSurfaceAlignedNiagaraFVOL = True
      - FVOLMaterial = (user defined material ref.)
      - ExposeOutputMaterialToSurfaceAlignedNiagaraHVOL = True
      - HVOLMaterial = (user defined material ref.)



---------------------------------------------------------------------------------------
#### Ninja Core
**Problems with ninja core**


The following text is mirrored from: [PARAMETER DESCRIPTOR](https://drive.google.com/file/d/1FedZwfW3iE1OgJr_Ye551TgaSLjqVUdj), Chapter 7: Ninjalive Core Special Parameters

Most LIVE-2 functions are packed into a Core Niagara System. User Parameters of the Core are controlled by the wrapper Live Component, we do not access them directly. While the wrapper successfully manages hundreds of simple Niagara User Parameters, there are FIVE komplex DATA INTERFACE structures in Niagara Core, that are (A) NOT exposed to blueprints and (B) tend to randomly lose input-field information on specific Unreal Editor operations. The data loss seems to be an Unreal Engine bug.


*The nature of data loss:*
The common aspect of the FIVE DATA INTERFACE structures: they are all komplex "user.parameters" that embed an other simple "user.parameter". The embedded user.parameter is typically an OBJECT, serving as INPUT for the data interface. For example, the "Spline" Data Interface needs a "SplineMesh Actor" Object as input. The wrapper (Live Component) collects the needed data (like a "SplineMesh Actor") and feeds this data into the OBJECT User.Parameter - then, the data interface uses this Object as input. Problem comes, when the Data Interface FORGETS the referenced input Object User Parameter, the input field resets to default "none", and we have to manually re-pick the Object User.Param again. Good news: data loss happens rarely and IN-EDITOR only. IN-GAME processes and packaged builds are not concerned.


*Editor operations that occasionally cause data loss:*

- duplicating a level with a ninja setup that uses one of the five data interfaces
- copy-pasting a ninja setup that uses one of the five data interfaces
- recompiling niagara core system


*Fixing the data loss:*

- we need to look up the Data Interface User Paramater on the NinjaLive Component Details Panel
- manually re-pick the User.Parameter OBJECT for the empty INPUT FIELD
- see this [screenshot](https://drive.google.com/file/d/1rAcAMiS2pY-VJa3RuahtWD3M-OlFZL5C)


All params of Niagara Core are located under this structure:
`/LiveComponent /UserParameters /DebugOnly /...`


1. **Fixing SPLINE input:**
This is a Niagara Only User Parameter: not exposed to blueprints - but accessible at LiveComponent Details Panel, at:
`/LiveComponent /User Parameters /DebugOnly /LiveInputFields /SplineFields /Spline DATAINTERFACE`
FIX: look up the Spline DATAINTERFACE at User Parameters,
SET `Spline User Parameter = User.SplineMeshActor OBJECT`
SET `Use LUT = TRUE`
SET `Num LUT Steps = 4096`


2. **Fixing DESTRUCTIBLES SDF input:**
This is a Niagara Only User Parameter: not exposed to blueprints - but accessible at LiveComponent Details Panel, at:
`/LiveComponent /User Parameters /DebugOnly /LiveInputFields /Destructibles /GeometryCollection DATAINTERFACE`
FIX: look up the GeometryCollection DATAINTERFACE at User Parameters
SET `Geometry Collection User Parameter = User.GeometryCollectionActor OBJECT`


3. **Fixing LANDSCAPE height input:**
The Landscape Data Interface automatically picks input landscapes - it is not prone to the input object data loss bug.
Known issues with Landscape DI: 
In Large World Coordinate (LWC) range (outside the 10x10 kilometers area around the world-origin) the Landscape auto-detect does not always work. 
FIX: we need to MANUALLY pick a landscape actor, under User Parameters. 
SET `Source Mode = Source`
SET `Source Landscape = (user defined ACTOR from the actual level)`


4. **Fixing RUNTIME VIRTUAL TEXTURE  height input:**
This is a Niagara Only User Parameter: not exposed to blueprints - but accessible at LiveComponent Details Panel, at:
`/LiveComponent /User Parameters /DebugOnly /LiveInputFields /HeightFields /RVTHeightData /RVTSample DATAINTERFACE`
At the User Parameter settings, we can re-define the Input Object User Parameter, if needed:
SET Texture User Parameter = User.RVTAsset OBJECT


5. **Fixing DESTRUCTIBLES as point input:**
Good news: the Chaos Destructibles Data Interface automatically picks input points - it is not prone to the input object data loss bug.
But... there is AN OTHER setting that occasionally gets erased. There are three EVENT TYPES that could be used as Point Data Source: `trailing`, `breaking` and `collision`. The Data Interface defaults to `trailing`... but there are cases when we want to generate input with `collision` data. In this case, we need to manually edit param inputs.
This is a Niagara Only User Parameter: not exposed to blueprints - but accessible at LiveComponent Details Panel, at:
`/Live Component /User Parameters /DebugOnly /LiveInputPoints /Destructibles /TrackedDestructiblesChaos DATAINTERFACE`
This parameter can be used to define the EVENT TYPE Chaos Data Interface uses to receive Destructible Chunk position data. Event Types are "Trailing", "Collision" and "Breaking" - and we can find similarly named "Data Sources" at the interface. Data Source: Collision Data, Breaking Data, Trailing Data




---------------------------------------------------------------------------------------


### 14.7 Bug - Destructibles
**Chaos Destructible Geometry Collections Memory Leak**

LIVE-2 can read chaos destructible data (as simulation input) TWO ways:
A. using the debris chunks as POINT input data, via the Niagara Chaos Data Interface - working FINE, no bugs
B. using the debris chunks as FIELD input data (SDF), via the Niagara Geometry Collections Data Interface - hit by fatal engine bug

Both methods demonstrated on this level and stage:
/Content /FluidNinjaLive /Levels /Starter /Tutorial02_Inputs_Interaction.umap
- STAGE 5D - destructibles as SDF input
- STAGE 7A - destructibles as Point input

The advantage of using method B (chaos as SDF): we can precisely get the shape of destructible chunks. This is great when we'd like to generate ground marks or imprintings caused by the falling debris.

EPIC's Niagara GeometryCollection DI has a memory leak: the amount of used memory steadily increases while the Game is running - and the garbage collector can not reclaim the lost memory. A fatal engine bug - confirmed under Unreal Engine versions 5.6, 5.7, 5.8. The bug practically limits Destructible SDF usage to Rendered Cinematics.

GOOD NEWS: based on the public Unreal Engine source code, our server admin MajorSmashbox created a fixed version of GeometryCollection DI and made it available as a free plugin for Unreal Engine versions 5.6, 5.7, 5.8. Devs could optionally use this, until an official patch from EPIC arrives (which could take years).

The GIT source-code repository of the plugin:
URL: https://github.com/MajorSmash/GeometryCollectionNDI-Fixed-

The pre-compiled plugin, 53 Megabytes ZIP file:
URL: https://drive.google.com/file/d/1KTI8EIHjJcaeZ5rORs0LJuxozV7o8z3q

The ZIP file that contains:
A. Official Bug report with specific technical description
B. The fixed GeometryCollection DI as a COMPILED plugin (UE 5.6 - 5.8), should be added to the local UnrealEngine Plugin Folder
C. A step-by-step guide with screenshots, explaining how to apply the fix


---------------------------------------------------------------------------------------

<div style="page-break-after: always;"></div>


## 15. LIVE-1 vs LIVE-2

**LICENSING**: 
- LIVE-2 is an upgrade to LIVE-1, accessible for LIVE-1 license holders


**TRANSITION ON FAB**:
- The Project Homepage at [FAB](https://www.fab.com/listings/80fcf53e-49f7-4635-a71c-ba81280c6618) is going to host both LIVE-1 and LIVE-2:  
  - IF users select UE 5.4 or lower as their UE version at download, they get LIVE-1
  - IF users select UE 5.6 or higher as their UE version at download, they get LIVE-2
- Until LIVE-2 is officially released, only LIVE-1 is available at FAB, while LIVE-2 BETA could be accessed at the [Community Server](https://discord.gg/rgEtwua2tu) with a LIVE-1 license.

**SUPPORTED UE VERSIONS**:
- LIVE-2: lowest supported Unreal Engine version is UE 5.6
- Initial LIVE-2 version: v2.0.0.56 for UE 5.6, also working under UE 5.7 - 5.8
- LIVE-1: lowest supported Unreal Engine version is UE 4.26
- Latest LIVE-1 version: v1.9.54 for UE 5.4, also working under UE 5.5 - 5.8
- All earlier LIVE versions remain available at FAB: the full UE4 and UE5 spectrum is covered


---

In this Chapter:
- 15.1 <a href="#151-comparison">Comparison</a>
- 15.2 <a href="#152-updating-live-1-to-live-2">Updating LIVE-1 to LIVE-2</a>

<a href="#table-of-contents">Back to the Table of Contents</a>


---

### 15.1 Comparison

1. **Basic truths:**

   - Legally: LIVE-2 is an update to LIVE-1, accessible for LIVE-1 license holders
   - Contentwise: LIVE-2 is a new piece of sofware - not a modified version of LIVE-1
   - Technically: LIVE-2 is "project" - not a "plugin"
   - Architecture: LIVE-2 is mostly Niagara, wrapped by Blueprints - not C++ based
   

2. **LIVE-2 extends the original LIVE-1 feature set:**
   - presets: the complete ninja state could be saved-to and read-from a single preset file
   - caching: sim buffers could be saved to a single frame snapshot - and ninja could initialize simulation from this snapshot
   - spawning: using presets, we could spawn ninja with custom parameter settings
   - internal renderers: for simple setups (e.g. a torch or footkick dust), we can use internal renderers, that spawn together with ninja and their state is preset defined
   - external renderers: to eliminate the tedious LIVE-1 water-meshing and RVT-based landscape alignment workflows, a new famility of Niagara Systems is introduced: 
      - Surface Aligned **Meshes**
      - Surface Aligned **Volumes** 
      - Surface Aligned **Particles**
   - improved utilities (landscape utility and spline generator both improved)
   - more input types: chaos destructibles, particles and Mesh SDF are natively handled by NinjaLive Component

2. **Being familiar with LIVE-1 is an advantage when it comes to learning LIVE-2, as the core concepts are the same:**
   - live Actor and live Component as main setup elements
   - simple painter mode vs fluid simulated mode
   - sim buffers and their usage in compositor Output Materials
   - direct drive (applying dynamic Output Material instances to target objects)
   - tag and object class based collection of interactors
   - finite sim attached to pawn / areas outside the sim populated with passive patterns
   - using external utilities to extend core features
   - backward compatibility: LIVE-1 setups could be converted to LIVE-2 setups

3. **LIVE-2 should be easier to set up and easier to use, compared to LIVE-1:**
   - "linetracing" (as a method to project world position into sim space) is gone, together with the tedious setup steps
   - "tracemesh" as a technical object (and the many problems it caused) is gone
   - "floorsnapper" utility as a primitive method for surface alignment is gone - a new, fully integrated method replaces it
   - "Preset Manager" as a separate UI for fluidsim params is gone: all params managed from Component Details Panel
   - UI parameters are reorganized into a much more logical, hierarchical structure, their top-down order reflecting the "INPUT - SIMULATION - OUTPUT" data flow
   - all params annotated with a clear explanatory tooltip

4. **LIVE-1 vs LIVE-2 architecture**

   - LIVE-1 is based on a "blueprints (CPU) + materials (GPU)" data pipeline - with blueprints doing most of the logistic, feeding GPU-computing materials with data.
   - LIVE-2 moves most of the blueprint functions to the GPU via Niagara. Material-based fluid simulation is also moved to *Niagara Sim Stages*.  

5. **Listing the parts of the data-pipeline moved from blueprints to niagara:**

   - **Overlap Detection:** 1.9 checked the sim-overlapping objects via UE native TriggerBoxes, on the CPU. While 2.0 can do this too -- most (optionally all) overlap detection happens on the GPU (DataChannels, Chaos, SDF)
   - **Data Collection:** 1.9 queried the positional and velocity data of overlapping objects  via BP functions (CPU). While 2.0 can do this too -- most (optionally all) positional data is queried on the GPU, and velocity is calculated exclusively on the GPU.
   - **Transformers:** converting the world-space positional and velocity information of interacting objects to sim space is computationally heavy. Previously solved with a combo of CPU-line-tracers and CPU-matrix transformers --------------------------------------------------------------------------------------- now on GPU / Niagara.
   - **Positional Calc:** sim local and world space position, offsets and the quantizer (moving in steps) also moved to the GPU
   - **Fluidsim:** in 1.9 fluidsim was implemented as a feedback chain of materials (already on the GPU), bridged and data-fed by blueprint functions (CPU). In 2.0, fluidsim entirely moved to the GPU, Niagara Sim.Stages

---------------------------------------------------------------------------------------

### 15.2 Updating Live-1 to Live-2

Updating Live-1 to Live-2, is technically merging Fluidninja LIVE-2 to a Project with LIVE-1 already merged. We are overwriting key assets with new versions and converting LIVE-1 setups on levels to LIVE-2 setups.

LIVE-2 is backward compatible:
- core components could handle legacy setups and convert them to LIVE-2 setups
- additional project components, like base materials and blueprint utilities are also backward compatible

A problem to handle:
LIVE-1 project structure and asset names grew somewhat organically. In order to build a clean structure under LIVE-2, folder structure has been changed and assets renamed. For this reason, we can not, in one step, replace the key parts in the LIVE-1 project with the key parts from the LIVE-2 project. Instead, we need to address key assets one by one, then convert the LIVE-1 setups to LIVE-2.

The method in general is the following:

1. Rename critical LIVE-1 assets to a name that matches their successor LIVE-2 asset
e.g. `BP_NinjaLiveLandscapeUtility` has been renamed to `DriveExternalSystemsWithSimData`
2. Move the renamed LIVE-1 assets to specific locations - where LIVE-2 successor assets could overwrite them
e.g. from `/Content /FluidNinjaLive /UseCases /017_RiverAndLandscape` to `/Content /FluidNinjaLive /Utilities`
3. Resolve REDIRECTORS in the restructured LIVE-1 project 
  (so all on-level setups will have their references pointing to the restructured assets)
4. Quit unreal 
5. Overwrite the LIVE-1 assets in `/Content /FluidNinjaLive` with the new LIVE-2 assets.
6. Start Unreal

RESULT: 
- the ex. LIVE-1 setups on levels show up as LIVE-2 setups, marked with a LEGACY flag
- legacy setups work as intended, but can not be edited
- there is an option to convert them (manually, one by one) to LIVE-2 setups

1. Open a Level, select a `Live Actor`, then select its `Live Component`
2. Press the `XLegacySetupConversion` button under `/LiveComponent /LiveEditorTools`
3. Set `PreserveNewSystemStateAfterPresetRead = True`
4. Save the Level



The SPECIFIC STEPS of the above described process (what assets to rename, and where to place them) will be described in the upcoming versions of this manual. Thank you for you patience.

<a href="#table-of-contents">Back to the Table of Contents</a>

---------------------------------------------------------------------------------------

<div style="page-break-after: always;"></div>


## 16. References

**Games Using Ninja** 

Since most studios work under NDA (non-disclosure agreement), it isn't easy to collect information on third party plugin usage. While, some devs make an explicite statement about it ( *eg.: Dune: Awakening announcement at GDC 2024* - [YouTube](https://youtu.be/1AUsvbG5xwI?t=220) ) ...in most cases, we could only rely on leaked WIP screenshots of the dev library... (*eg. Kena, Bridge of Spirits* - [Screenshot](https://ibb.co/yFZHVX7L) )

So, here is a list with a few examples of known ninja usage:

- High on Life 2
- Clair Obscur: Expedition 33
- Dune: Awakening
- Marvel 1943: Rise of Hydra
- The Elder Scrolls IV Oblivion Remastered
- Stellar Blade
- Rolic
- Kena: Bridge of Spirits
- ARK: Survival Evolved
- Callisto Protocol
- Homeworld 3
- Wuthering Waves
- A not-yet-announced Microsoft release
- CD Projekt Red recently purchased a license (2026)

*Indie releases:* Awaysis, Rytma, Crete, Covenant, Mandragora, SuperSimmer, TunnelBoatTerror, TrenchTales
.
*Cinematic usage* is almost impossible to track. Still: *Fortnite* Cinematics should be mentioned! And a nice recent example: *War Robots Frontiers*

<a href="#table-of-contents">Back to the Table of Contents</a>

---------------------------------------------------------------------------------------

<div style="page-break-after: always;"></div>


## 17. Machine Learning

The Manual plus the Content and Parameter descriptor files (linked under `Table of Contents, External Resources`) are suitable to feed Machine Learning Systems. Intended usage: LLMs trained with the data could answer questions and help users implement various setups. Using the MCP interface introduced in Unreal Engine 5.8, agentic AI might be able to practically use ninja and build setups. We are actively testing this possibility - with plans to deploy an "answerbot" to the Community Server and a Plugin that facilitates MCP driven ninja usage.

---------------------------------------------------------------------------------------

## 18. Synonyms

Synonyms used in the text: level = map, level content = assets placed on levels, sim = simulation, param = parameter = variable, NinjaLive Component = Live Component = LiveComponent, ninja = fluidninja = fluidninja live = ninjalive = LIVE-2, buffer = temporary simulation data storage, dynamic material instance = MID, CVOL = CVolume = Cloud Volume, HVOL = HVolume = Heterogeneous Volume, FVOL = FVolume = Fog Volume, SVOL = SVolume = Smoke Volume, velo = velocity, util = utility, dev = developer, Landscape Utility = DriveExternalSystemsWithSimData Utility, position = location, DI = Data Interface, SDF = Signed Distance Field = Mesh Distance Field, Destructible = GeometryCollection


.
EOF
