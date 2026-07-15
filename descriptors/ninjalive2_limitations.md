---
doc_type: DESCRIPTOR
title: "NinjaLive v2 Limitations Descriptor"
date: 2026-06-21
source_url: "https://drive.google.com/file/d/1-yQDZ3qlxh5xf_xcRW3dhdvggVBAv32n"
doc_revision: "1.0"
version_min: null
version_max: null
media_urls: []
---

# LIMITATONS
LIMITATONS, BUGS, ANNOYANCES

Text file version: 1.0
Last modified: 21 June 2026

Permanent Link to [this text file](https://drive.google.com/file/d/1-yQDZ3qlxh5xf_xcRW3dhdvggVBAv32n)
This text file is referenced by the FluidNinja LIVE-2 [Manual](https://drive.google.com/file/d/19qc6Si5AwDKS8iOinB4egCtdn2hse1aa)


\------------------------------------------------------------------------------------------------------------------------------


CONTENTS OF THIS TEXT FILE:


1. LIMITS OF TERRAIN FLOWING WATER SIMULATION

2. LIVE COMPONENT - DEPENDENCE ON LIVE ACTOR
3. LIVE ACTOR - SPAWNING OBJECTS INSIDE THE INTERACTION VOLUME
4. LIVE ACTOR INTERACTION VOLUME - vs - LIVE COMPONENT INTERACTION VOLUME

5. DATA LOSS ON THE NIAGARA SYSTEMS USER PARAMETER INPUT
	5.1. PROBLEMS WITH NINJA EXTERNAL SYSTEMS
	5.2. PROBLEMS WITH NINJA CORE

6. CHAOS DESTRUCTIBLE GEOMETRY COLLECTIONS BUG 


\------------------------------------------------------------------------------------------------


### 1. LIMITS OF TERRAIN FLOWING WATER SIMULATION


Ninja is a generic fluid simulation toolkit - employing the *Navier-Stokes fluid model* for both gases and liquids. Advantage: all simulations types could be handled with the same parameter set. Contra: when it comes to the simulation of terrain flowing liquids, the feature set is limited - compared to simulations employing a dedicated *shallow water* model.

1.1. What ninja terrain flowing water CAN do:
- confine flow with terrain slope and obstacles
- use sources to generate water, cache and reaload sim state
- accumulate a thin layer of fluid (max 1 meter) to fill smaller gaps

1.2. What ninja terrain flowing water CAN NOT DO:
We can not dynamically accumulate a thick layer of fluid. We can not dynamically fill up tanks, rooms, pools from zero to multi-meter depths.

Workarounds: 
(A) We can define a static water level (water-column height) by using a mesh surface - and restrict interactions to this surface (e.g. a pool, with a water-surface mesh, manually placed 2 meters above the floor. A river made of spline meshes, a lake made of plane-meshes). Idea: we can fake water-level rising by lifting the mesh surface by a custom function or sequencer animation.
Static water-surface usage is demonstrated on levels named "Water_Sparse".

(B) When working with dynamic, terrain aligned fluids, we can virtually CLAMP terrain elevation at a custom altitude - for the fluid, clamping altitude is like a flat surface. Ninja is set to automatically and instantly fill the area at clamping altitude, regardless of simulation state - this way, we can instantly create lake or sea surfaces - and have simulated waves on the coastline, or simulated creeks flowing into the lake. 

Related clamping params are located at:
/LiveComponent /LiveInputFields /HeightFields /ClampHeightLowerValues
/LiveComponent /LiveInputFields /HeightFields /ClampingValue

Related concept: extending the sim area - explained on this level:
/Content /FluidNinjaLive /Levels /Starter /Tutorial03_KeyConceptsForWater.umap /STAGE 3

The clamping of terrain aligned dynamic sim is demonstrated on levels named "Water_Dense".


1.3. An occasional GLITCH with terrain flowing water:
Once a gap is filled up with fluid, it might leak more fluid - behaving like a source. In most cases, we do not notice this (e.g. gaps filled up in a creekbed) - but sometimes, this results weird phenomena, like fluid creeping up in rims - getting through obstacles it should not.

Workaround: besides manually adjusting the intended flowing route (sculpting landscape, placing obstacles) - we can employ objects that EXCLUDE the fluid from a given area. The feature is called "Collision Masking", available at:
/LiveComponent /LiveInputFields /MeshFields /UseAsCollisionMask

Collision Masking is demonstrated on this level:
/Content /FluidNinjaLive /Levels /Water_Dense_Creek2.umap




\------------------------------------------------------------------------------------------------


### 2. LIVE COMPONENT - DEPENDENCE ON LIVE ACTOR


Input data is typically collected by Live Component alone - except one data type. To collect Point data from Primitive Mesh Pivots and Skeletal Mesh Bones, Live Component partially relies on Live Actor. 

Explainer: Live Actor contains a box volume Component, labeled as "Interaction Volume". We are using the Interaction Volume for overlap detection - specifically, to track Primitives and Skeletal Meshes as POINT inputs. Without Live Actor (if Live Component is added to some other Actor), Live Component falls back to a limited-interaction mode, tracking only the Primitive Components and Skeletal Mesh Components of the host (owner) Actor. This is called "Interaction with Owner", and the options to manage it are availabe at this param group:
/LiveComponent /LiveInputPoints /InteractionWithOwner

For example, if we add Live COMPONENT to a Character Actor, we can use the bones of the Character as sim input - but we can not use bones from other Skeletal Meshes. Similarly, we can use the Primitive Components of the character as point-input. This is ideal for character-specific effects - like flaming limbs or a torch. On the contrary, if we attach (parent) Live ACTOR to the Character: it can interact with any object or bone in the World. 

For clarity, these are the input data collection cases, when Live Component is NOT dependent on Live Actor:
1. IF we are tracking particles or destructible chunks as point data: Live Component fully manages the case, does not rely on Live Actor overlap detector. As mentioned, we can also track components of the host actor as point data. 

2. IF we use objects as FIELD input (e.g. we set up ninja to sample PhysicsBodies using their Mesh Distance Fields, aka. Mesh SDF), Live Component fully manages the case, does not rely on Live Actor's overlap detector.

Takeaway: Live Component does not rely on Live Actor when handling most interactions - except, when interacting with Primitives and Skeletal Meshes - as point sources.

Related Tutorial Level, showcasing all data types ninja can access and interact with:
/Content /FluidNinjaLive /Levels /Starter /Tutorial02_Inputs_Interaction.umap



\------------------------------------------------------------------------------------------------


### 3. LIVE ACTOR - SPAWNING OBJECTS INSIDE THE INTERACTION VOLUME


Live Actor contains a box volume Component, labeled as "Interaction Volume". Objects entering and leaving the Interaction Volume are properly registered. On the contrary, objects spawned or destroyed inside the Interaction Volume not handled. This is a standard behavior of Unreal Triggerboxes (and the InteractionVolume is a TriggerBox).
Workaround 1: spawn objects outside the volume, and MOVE (teleport) them inside the volume, one frame later.
Workaround 2: create your own function that ADDS spawned objects to the Live Component interaction register variables:

Variable: "OverlappingComponents"
Type: Primitive Component Array

Variable: "SkeletalMesh-TempArray-Pairs"
Type: Map


\------------------------------------------------------------------------------------------------


### 4. LIVE ACTOR INTERACTION VOLUME - vs - LIVE COMPONENT INTERACTION VOLUME


1. Live Actor contains a box volume Component, labeled as "Interaction Volume". We are using the Interaction Volume for overlap detection - specifically, to track Primitives and Skeletal Meshes as POINT inputs. We can set size and visibility using these params:
/LiveActor /LiveInteraction /InteractionVolumeSize = (X, Y, Z size in meters)
/LiveActor /LiveInteraction /ShowInteractionVolumeInEditor = True

IMPORTANT: 
Live Actor Interaction Volume has NOTHING to do with the simulation area size. Used specifically for overlap detection.

2. Simulation area size (scale, bounds) is defined in Live Component, with a dedicated variable:
/LiveComponent /LiveCore /ExtentsXYZ = (X, Y, Z size in meters)

ExtentsXYZ not only defines XY simulation area size - the "Z" part of the variable is also a relevant as a filter for input point data.
Explainer: ninja is a 2D simulation and the size of the 2D sim area is defined by the X,Y parts of "ExtentsXYZ". 
The Z part of "ExtentsXYZ" is irrelevant for the 2D sim area - it defines the height of the Live Component Interaction Volume, which works like a filter for ALL point-like simulation inputs. It filters both the point data coming from Live Actor (Primitive Component Pivots and Bones) and all the points handled by Live Component (particles, destructibles). Points inside the "ExtentsXYZ" volume interact with the sim (leave marks in the paint buffer), points outside the volume are ignored. 

Reasons why we define Interaction Volume separately for Live Component and Live Actor: 
(A) Live Component could be used without Live Actor 
(B) The collection of particle-points and destructible-points is managed exclusively by Live Component, without the Actor
(C) We can use the Z part of "ExtentsXYZ" to fine-tune interaction. For example: we set Live Actor Interaction Volume to a cubic volume, e.g. 10 x 10 x 10 meters --- so every skeletal mesh is detected within the volume, and their bones are being tracked. Then, we set Live Component ExtentsXYZ to 10 x 10 x 0.1 meters: bones more than 0.1 meters above the ground are ignored (do not leave marks). This is exactly how we make proper footsteps: responding to bones ONLY when they are very close to the ground. To summarize: we need a tall Live Actor interaction volume to pick up skeletal meshes, and keep tracking all bones - and we need a thin Live Component interaction volume to filter bone response.

IMPORTANT:
Live ACTOR Interaction Volume should not be confused with Live COMPONENT Interaction Volume.



\------------------------------------------------------------------------------------------------


### 5. DATA LOSS ON THE NIAGARA SYSTEMS USER PARAMETER INPUT


Every system we are working with, exposes a UI, with input fields, where we define values - to configure the system. It would be annoying to randomly lose the values we have defined at the input fields - worldn't it? Sadly, this is being the case for a FEW data types, when used as Niagara User Parameter input. This is an Unreal Engine bug.




##### 5.1. PROBLEMS WITH NINJA EXTERNAL SYSTEMS


A "Material Interface User Parameter", in Niagara, stores a REFERENCE to a Material Asset (a specific file in the Content Browser). Using this parameter, we can tell niagara to use a certain material. There are three Niagara Systems in the Ninja asset library that rely on this input data type:

Asset: /Content /FluidNinjaLive /OutputNiagara /SurfaceAlignedMeshes.uasset
Param: /User Parameters /MeshMaterial

Asset: Content /FluidNinjaLive /OutputNiagara /SurfaceAlignedVolumes.uasset
Param 1: /User Parameters /FVOLMaterial
Param 2: /User Parameters /HVOLMaterial

Asset: /Content /FluidNinjaLive /OutputNiagara /SurfaceAlignedParticles.uasset
Param: User Parameters /Renderer /SpiteMaterial

THE BUG: when we copy-paste one of these systems from a level to a new level - OR - duplicate the system on a given level, the Material Input field is CLEARED in the new copy. We have lost the binding with the originally assined Material.
WORKAROUND: manually re-assing the material following the system duplication.

NOTE: 
A. when we use the above systems in standalone mode, to render passive (non simulated) patterns, we definitely need to take care of this bug when duplicating the systems. Example Level: /Content /FluidNinjaLive /Levels /Fog_Mist_PASSIVE.umap

B. when we are using the above systems as an external renderer with ninja: we can optionally assign materials to the systems with Live Component. In this case, the actual value of "Material Interface User Parameter" does not matter, as Live Component OVERWRITES this at game start. Key Live Component Params:

/LiveComponent /LiveOutputExternalRenderers /...
- DriveNiagaraComponentInTaggedActors
- ExposeOutputMaterialToSurfaceAlignedNiagaraMeshes = True
- MeshMaterial = (user defined material ref.)
- ExposeOutputMaterialToSurfaceAlignedNiagaraFVOL = True
- FVOLMaterial = (user defined material ref.)
- ExposeOutputMaterialToSurfaceAlignedNiagaraHVOL = True
- HVOLMaterial = (user defined material ref.)




##### 5.2. PROBLEMS WITH NINJA CORE


(The following text is mirrored from:  PARAMETER DESCRIPTOR, CHAPTER 7: NINJALIVE CORE SPECIAL PARAMETERS)

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
/LiveComponent /UserParameters /DebugOnly /...


**1. Fixing SPLINE input:**
This is a Niagara Only User Parameter: not exposed to blueprints - but accessible at LiveComponent Details Panel, at:
/LiveComponent /User Parameters /DebugOnly /LiveInputFields /SplineFields /Spline DATAINTERFACE

FIX: look up the Spline DATAINTERFACE at User Parameters,
SET Spline User Parameter = User.SplineMeshActor OBJECT, 
SET Use LUT = TRUE, 
SET Num LUT Steps = 4096


**2. Fixing DESTRUCTIBLES SDF input:**
This is a Niagara Only User Parameter: not exposed to blueprints - but accessible at LiveComponent Details Panel, at:
/LiveComponent /User Parameters /DebugOnly /LiveInputFields /Destructibles /GeometryCollection DATAINTERFACE

FIX: look up the GeometryCollection DATAINTERFACE at User Parameters,
SET Geometry Collection User Parameter = User.GeometryCollectionActor OBJECT


**3. Fixing LANDSCAPE height input:**
The Landscape Data Interface automatically picks input landscapes - it is not prone to the input object data loss bug.
Known issues with Landscape DI: 

In Large World Coordinate (LWC) range (outside the 10x10 kilometers area around the world-origin) 
the Landscape auto-detect does not always work. Solution: we need to MANUALLY pick a landscape actor, under User Parameters. 
SET Source Mode = Source
SET Source Landscape = (user defined ACTOR from the actual level)


**4. Fixing RUNTIME VIRTUAL TEXTURE  height input:**
This is a Niagara Only User Parameter: not exposed to blueprints - but accessible at LiveComponent Details Panel, at:
/LiveComponent /User Parameters /DebugOnly /LiveInputFields /HeightFields /RVTHeightData /RVTSample DATAINTERFACE

At the User Parameter settings, we can re-define the Input Object User Parameter, if needed:
SET Texture User Parameter = User.RVTAsset OBJECT


**5. Fixing DESTRUCTIBLES as point input:**
Good news: the Chaos Destructibles Data Interface automatically picks input points - it is not prone to the input object data loss bug.
But... there is AN OTHER setting that occasionally gets erased. There are three EVENT TYPES that could be used as Point Data Source: "trailing",  "breaking" and "collision". The Data Interface defaults to "trailing"... but there are cases when we want to generate input with "collision" data. In this case, we need to manually edit param inputs.

This is a Niagara Only User Parameter: not exposed to blueprints - but accessible at LiveComponent Details Panel, at:
/Live Component /User Parameters /DebugOnly /LiveInputPoints /Destructibles /TrackedDestructiblesChaos DATAINTERFACE. 

This parameter can be used to define the EVENT TYPE Chaos Data Interface uses to receive Destructible Chunk position data. 
Event Types are "Trailing", "Collision" and "Breaking" - and we can find similarly named "Data Sources" at the interface. 
Data Source: Collision Data, Breaking Data, Trailing Data




\------------------------------------------------------------------------------------------------


### 6. CHAOS DESTRUCTIBLE GEOMETRY COLLECTIONS BUG 


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









.
EOF