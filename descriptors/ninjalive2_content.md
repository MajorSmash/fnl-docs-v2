---
doc_type: DESCRIPTOR
title: "NinjaLive v2 Content Descriptor"
date: 2026-06-16
source_url: "https://drive.google.com/file/d/15d3QdfleD1jDw8LJ3YQEGpAP-89b9bKa"
doc_revision: "1.34"
version_min: null
version_max: null
media_urls: []
---

# LEVEL CONTENT DESCRIPTOR
LEVELS, STAGES AND SETUPS IN THE FLUIDNINJA LIVE-2 PROJECT


Text file version: 1.34
Last modified: 16 June 2026


Permanent Link to [this text file](https://drive.google.com/file/d/15d3QdfleD1jDw8LJ3YQEGpAP-89b9bKa)
This text file is referenced by the FluidNinja LIVE-2 [Manual](https://drive.google.com/file/d/19qc6Si5AwDKS8iOinB4egCtdn2hse1aa)


\------------------------------------------------------------------------------------------------------------------------------


FACTS ABOUT THE SYNTAX OF THIS TEXT FILE:


- This file uses MarkDown syntax. It could be viewed as simple text. Opening it with an MD viewer is recommended for visual clarity.
- Level and Stage names are "telling names": not just a unique ID, but a brief reference to content.
- Curly Braces {} are used exclusively for level, stage and setup descriptors.
- Synonyms used in the text: level = map, level content = assets placed on levels, sim = simulation, param = parameter = variable, NinjaLive Component = LiveComponent, ninja = fluidninja = fluidninja live = ninjalive = live, dynamic output material instances = MIDs, HVOL = HVolume = Heterogeneous Volume, FVOL = FVolume = Fog Volume, SVOL = SVolume = Smoke Volume, velo = velocity, Landscape Utility = DriveExternalSystemsWithSimData



\------------------------------------------------------------------------------------------------------------------------------


CONTENTS OF THIS TEXT FILE:


CHAPTER 1: INTRODUCTION TO LEVEL CONTENT
CHAPTER 2: LEVELS LISTED
CHAPTER 3: LEVELS, STAGES AND SETUPS LISTED
CHAPTER 4: LEVELS, STAGES AND SETUPS LISTED WITH METADATA



\------------------------------------------------------------------------------------------------------------------------------


### CHAPTER 1: INTRODUCTION TO LEVEL CONTENT


Content in the FluidNinja LIVE-2 project is organised in a 3 layer hierarchy:


- LEVELS (MAPS): ninja assets (niagara systems, blueprints) are placed on levels to demonstrate usage. In the FluidNinja LIVE-2 project, all levels are stored under a single folder: /Content /FluidNinjaLive /Levels

- STAGES: level content is organized into NUMBERED stages, where a specific mode of using ninja is demonstrated (e.g. "Stage 17 Bonfire")

- SETUPS: when a stage contains large amount of content, it is partitioned into setups, marked with LETTERS (A,B,C...)

Important technical demo levels reside in the "Levels" folder root:
/Content /FluidNinjaLive /Levels

Tutorial levels with example setups and educational text reside in this subfolder: 
/Content /FluidNinjaLive /Levels /Starter

Minimal setups using NinjaLiveCore NiagaraSystem without a blueprint wrapper, are in this subfolder:
/Content /FluidNinjaLive /Levels /CoreOnly

Less important technical demo levels reside in this subfolder:
/Content /FluidNinjaLive /Levels /Misc


\------------------------------------------------------------------------------------------------------------------------------


### CHAPTER 2: LEVELS LISTED


SYNTAX DEFINITION FOR LEVEL CONTENT LIST ITEMS:
- "Folder" type list item: {F.folder number, folder path}
- "Level" type list item: {L.level number, level name}


STRUCTURED LIST OF FOLDERS AND LEVELS
COUNT: 57 LEVELS LISTED


**{F.0, /Content /FluidNinjaLive /Levels}**
{L.0.1, Clouds.umap}
{L.0.2, Clouds_PASSIVE.umap}
{L.0.3, Fire_Smoke_Explosive.umap}
{L.0.4, Fog_Mist.umap}
{L.0.5, Fog_Mist_PASSIVE.umap}
{L.0.6, Grass.umap}
{L.0.7, Sand.umap}
{L.0.8, Sand_Destructibles.umap}
{L.0.9, Snow.umap}
{L.0.10, Snow_Minimal.umap}
{L.0.11, Viscous_Blood_Mud.umap}
{L.0.12, Water_Dense_Creek1.umap}
{L.0.13, Water_Dense_Creek2.umap}
{L.0.14, Water_Dense_Lake.umap}
{L.0.15, Water_Dense_Sea.umap}
{L.0.16, Water_Sparse_Lake.umap}
{L.0.17, Water_Sparse_River.umap}
{L.0.18, Water_Sparse_Rivers_Minimal.umap}
{L.0.19, Water_Sparse_Sea_Minimal.umap}
{L.0.20, Water_Sparse_Sea_Quiet.umap}
{L.0.21, Water_Sparse_Sea_Stormy.umap}
{L.0.22, Water_Sparse_Sea_Windy.umap}
{L.0.23, Water_Sparse_Various.umap}


**{F.1, /Content /FluidNinjaLive /Levels /Starter}**
{L.1.0, StartingGuide.umap}
{L.1.1, Tutorial01_Basics.umap}
{L.1.2, Tutorial02_Inputs_Interaction.umap}
{L.1.3, Tutorial03_KeyConceptsForWater.umap}
{L.1.4, Tutorial04_Presets_Spawning_Caching.umap}
{L.1.5, Tutorial05_Tricks.umap}
{L.1.6, Tutorial06_SplineBasedRivers.umap}


**{F.2, /Content /FluidNinjaLive /Levels /CoreOnly}**
{L.2.1, CamfaceTest.umap}
{L.2.2, Desert_SimplePainter_Landscape.umap}
{L.2.3, Desert_SimplePainter_Mesh.umap}
{L.2.4, Destructibles_as_SDF.umap}
{L.2.5, LandscapeAlignedWater_ProtoVersion.umap}
{L.2.6, River.umap}


**{F.3, /Content /FluidNinjaLive /Levels /Misc}**
{L.3.1, Destructibles_as_Points_CameraFacing.umap}
{L.3.2, Destructibles_as_Points_WorldAligned.umap}
{L.3.3, Destructibles_as_SDF_WorldAligned.umap}
{L.3.4, DrivingParticlesWithFluidsim.umap}
{L.3.5, Lava_Sparse.umap}
{L.3.6, PerformanceTest_Particles.umap}
{L.3.7, PerformanceTest_Primitives.umap}
{L.3.8, PerformanceTest_SimContainers.umap}
{L.3.9, PerformanceTest_SimplePainterContainers.umap}
{L.3.10, PerformanceTest_SkeletalMeshes.umap}
{L.3.11, VolumeDemo_FAKE.umap}
{L.3.12, VolumeDemo_FVOL_Small.umap}
{L.3.13, VolumeDemo_HVOL_Medium.umap}
{L.3.14, VolumeDemo_HVOL_Small.umap}
{L.3.15, VolumeDemo_HVOL_Small_PASSIVE.umap}
{L.3.16, VolumeDemo_SVOL_Medium.umap}
{L.3.17, VolumeDemo_SVOL_Small.umap}
{L.3.18, Water_Dense_Rain.umap}
{L.3.19, Water_Dense_vs_Sparse.umap}
{L.3.20, Water_Sparse_DoubleSim_TilingWaves.umap}
{L.3.21, Water_Sparse_DoubleSim_Vortex.umap}
{L.3.22, Water_Sparse_Sea_Ship.umap}


\------------------------------------------------------------------------------------------------------------------------------


### CHAPTER 3: LEVELS, STAGES AND SETUPS LISTED


SYNTAX DEFINITION FOR LEVEL CONTENT LIST ITEMS:
- "Folder" type list item: {F.folder number, folder path}
- "Level" type list item: {L.level number, level name, path}
- "Stage" type list item: {S.stage number, stage name}
- "Setup" type list item: {SE.setup number, setup name}


STRUCTURED LIST OF FOLDERS, LEVELS, STAGES AND SETUPS
COUNT: 57 LEVELS, 222 STAGES, 296 SETUPS LISTED


{F.0, /Content /FluidNinjaLive /Levels}
{L.0.1, Clouds.umap, /Content /FluidNinjaLive /Levels}
	{S.0.1.1, Stage 1 Fluidsim driven responsive Cloud Setups}
		{SE.0.1.1.1, Setup 1 SmokePillars CVOL 20km simdriven}
		{SE.0.1.1.2, Setup 2 Vortex CVOL 20km Simdriven}
		{SE.0.1.1.3, Setup 3 Impulse CVOL 50km Simdriven}
		{SE.0.1.1.4, Setup 4 Aurora CVOL 50km Simdriven}
		{SE.0.1.1.5, Setup 5 Titan CVOL 20km Simdriven LandscapeAligned}
		{SE.0.1.1.6, Setup 6 User Painted Clouds CVOL 20km Simdriven LandscapeAligned}

{L.0.2, Clouds_PASSIVE.umap, /Content /FluidNinjaLive /Levels}
	{S.0.2.1, Stage 1 Passive NonSimulated Cloud Setups}
		{SE.0.2.1.1, Setup 1 Volcano CVOL 10km Passive MultiLayer LandscapeAligned}
		{SE.0.2.1.2, Setup 2 Volcano CVOL Infinite Passive MultiLayer LandscapeAligned}
		{SE.0.2.1.3, Setup 3 Mushroom CVOL 10km Passive MultiLayer}
		{SE.0.2.1.4, Setup 4 Mushroom CVOL Infinite Passive MultiLayer}
		{SE.0.2.1.5, Setup 5 SandStorm CVOL 80km Passive SingleLayer}
		{SE.0.2.1.6, Setup 6 Nimbus CVOL Infinite Passive SingleLayer}
		{SE.0.2.1.7, Setup 7 Stratus CVOL Infinite Passive SingleLayer}
		{SE.0.2.1.8, Setup 8 Mammatus CVOL Infinite Passive SingleLayer}
		{SE.0.2.1.9, Setup 9 Tornado CVOL 10km Passive SingleLayer}
		{SE.0.2.1.10, Setup 10 Cyclone CVOL 20km Passive SingleLayer}

{L.0.3, Fire_Smoke_Explosive.umap, /Content /FluidNinjaLive /Levels}
	{S.0.3.1, Stage 1 Character FX Torch}
	{S.0.3.2, Stage 2 Bonfire with Particle Input}
	{S.0.3.3, Stage 3 Bonfire with Object Pivot Input}
	{S.0.3.4, Stage 4 Moving Objects on Fire}
		{SE.0.3.4.1, Setup A Torch}
		{SE.0.3.4.2, Setup B Bonfire with Multiple LiveComponents}
		{SE.0.3.4.3, Setup C Flaming Sword}
		{SE.0.3.4.4, Setup D Fairlight}
	{S.0.3.5, Stage 5 Bonfire and Volumetric Smoke HVOL}
	{S.0.3.6, Stage 6 Bonfire and Volumetric Smoke SVOL}
		{SE.0.3.6.1, Setup A Thin}
		{SE.0.3.6.2, Setup B Thick}
	{S.0.3.7, Stage 7 Candles}
		{SE.0.3.7.1, Setup A Candle Flame}
		{SE.0.3.7.2, Setup B Candle Smoke Single}
		{SE.0.3.7.3, Setup C Candle Smoke Multiple}
	{S.0.3.8, Stage 8 Magic Cauldron}
	{S.0.3.9, Stage 9 Smoke Pool}
	{S.0.3.10, Stage 10 Flamethrower Turret}
	{S.0.3.11, Stage 11 Flaming fist}
		{SE.0.3.19.1, Setup A Fiery}
		{SE.0.3.19.2, Setup B Blue Plasma}
	{S.0.3.12, Stage 12 Burning Man 1}
	{S.0.3.13, Stage 13 Burning Man 2}
	{S.0.3.14, Stage 14 Burning Man 3}
	{S.0.3.15, Stage 15 Smoking Man}
	{S.0.3.16, Stage 16 Explosive Block}
	{S.0.3.17, Stage 17 Blue Plasma Explosion}
	{S.0.3.18, Stage 18 Smoke Piston}
	{S.0.3.19, Stage 19 Fireball}
	{S.0.3.20, Stage 20 Hot Wheels Vehicle Setup}
		{SE.0.3.19.1, Setup A Tyres on Fire and Smoke}
		{SE.0.3.19.2, Setup B Tyres on Volumetric Smoke}
		{SE.0.3.19.3, Setup C Tyres on Simple Smoke}
	{S.0.3.21, Stage 21 Steam Puff}

{L.0.4, Fog_Mist.umap, /Content /FluidNinjaLive /Levels}
	{S.0.4.1, Stage 1 FVOL Only}
	{S.0.4.2, Stage 2 HVOL and FVOL Combo}

{L.0.5, Fog_Mist_PASSIVE.umap, /Content /FluidNinjaLive /Levels}
	{S.0.5.1, Stage 1 FVOL Only}
	{S.0.5.2, Stage 2 HVOL and FVOL Combo}

{L.0.6, Grass.umap, /Content /FluidNinjaLive /Levels}
	{S.0.6.1, Stage 1 Sim Driven Foliage}
		{SE.0.6.1.1, Setup A Wind for Grass}
		{SE.0.6.1.2, Setup B Harvester Vehicle FX}
	{S.0.6.2, Stage 2 Painter Driven Foliage}

{L.0.7, Sand.umap, /Content /FluidNinjaLive /Levels}
	{S.0.7.1, Stage 1 Painter and Sim Combo}
	{S.0.7.2, Stage 2 Single Simulation}

{L.0.8, Sand_Destructibles.umap, /Content /FluidNinjaLive /Levels}
	{S.0.8.1, Stage 1 Painter and Sim Combo}
	{S.0.8.2, Stage 2 Single Simulation}
	{S.0.8.3, Stage 3 Large Destructible Drop}

{L.0.9, Snow.umap, /Content /FluidNinjaLive /Levels}
	{S.0.9.1, Stage 1 Painter and Sim Combo}
	{S.0.9.2, Stage 2 Single Simulation}

{L.0.10, Snow_Minimal.umap, /Content /FluidNinjaLive /Levels}
	{S.0.10.1, Stage 1 Simple Painter on Landscape}

{L.0.11, Viscous_Blood_Mud.umap, /Content /FluidNinjaLive /Levels}
	{S.0.11.1, Stage 1 Blood Slippery Marks}
	{S.0.11.2, Stage 2 Blood Splash}
	{S.0.11.3, Stage 3 Mud - Local}
	{S.0.11.4, Stage 4 Mud - World Space}
	{S.0.11.5, Stage 5 Blood Trickle Simple}
	{S.0.11.6, Stage 6 Blood Trickle Complex}
	{S.0.11.7, Stage 7 Blood Bath}

{L.0.12, Water_Dense_Creek1.umap, /Content /FluidNinjaLive /Levels}
	{S.0.12.1, Stage 1 Simulated Creek}

{L.0.13, Water_Dense_Creek2.umap, /Content /FluidNinjaLive /Levels}
	{S.0.13.1, Stage 1 Simulated Creek}

{L.0.14, Water_Dense_Lake.umap, /Content /FluidNinjaLive /Levels}
	{S.0.14.1, Stage 1 Simulated Lake Coastline}

{L.0.15, Water_Dense_Sea.umap, /Content /FluidNinjaLive /Levels}
	{S.0.15.1, Stage 1 Simulated Sea Coastline}

{L.0.16, Water_Sparse_Lake.umap, /Content /FluidNinjaLive /Levels}
	{S.0.16.1, Stage 1 Simulated Lake Open Waters}

{L.0.17, Water_Sparse_River.umap, /Content /FluidNinjaLive /Levels}
	{S.0.17.1, Stage 1 Complex MultiRiver Setup}
	{S.0.17.2, Stage 2 Local Waterfall Setup}

{L.0.18, Water_Sparse_Rivers_Minimal.umap, /Content /FluidNinjaLive /Levels}
	{S.0.18.1, Stage 1 Large scale river}
	{S.0.18.2, Stage 2 Medium scale river}
	{S.0.18.3, Stage 3 Small scale river - Point interactors}
	{S.0.18.4, Stage 4 Small scale river - SDF interactors}
	{S.0.18.5, Stage 5 River with bedrock-collision mask}
	{S.0.18.6, Stage 6 Crude particle test}

{L.0.19, Water_Sparse_Sea_Minimal.umap, /Content /FluidNinjaLive /Levels}
	{S.0.19.1, Stage 1 Sea - Quiet Minimal}

{L.0.20, Water_Sparse_Sea_Quiet.umap, /Content /FluidNinjaLive /Levels}
	{S.0.20.1, Stage 1 Sea - Quiet}

{L.0.21, Water_Sparse_Sea_Stormy.umap, /Content /FluidNinjaLive /Levels}
	{S.0.21.1, Stage 1 Sea - Stormy}

{L.0.22, Water_Sparse_Sea_Windy.umap, /Content /FluidNinjaLive /Levels}
	{S.0.22.1, Stage 1 Sea - Windy}

{L.0.23, Water_Sparse_Various.umap, /Content /FluidNinjaLive /Levels}
	{S.0.23.1, Stage 1 Pool - Sparse}
	{S.0.23.2, Stage 2 Pool - Dense}
	{S.0.23.3, Stage 3 Spray Fountain}
	{S.0.23.4, Stage 4 Cauldron Minimal}
	{S.0.23.5, Stage 5 Cauldron}
	{S.0.23.6, Stage 6 Water Tank}
	{S.0.23.7, Stage 7 Liquid Sphere}
		{SE.0.23.7.1, Setup A Clear}
		{SE.0.23.7.2, Setup B Turbulent}
	{S.0.23.8, Stage 8 Waterfall}
	{S.0.23.9, Stage 9 Waterfalls Far Background}
		{SE.0.23.9.1, Setup A White}
		{SE.0.23.9.2, Setup B Blue}
	{S.0.23.10, Stage 10 Legacy Setups}
		{SE.0.23.10.1, Setup A Blood Orb}
		{SE.0.23.10.2, Setup B Watery Sand Flow}


{F.1, /Content /FluidNinjaLive /Levels /Starter}
{L.1.0, StartingGuide.umap, /Content /FluidNinjaLive /Levels /Starter}
	{S.1.0.1, Stage 1 Starting Guide}

{L.1.1, Tutorial01_Basics.umap, /Content /FluidNinjaLive /Levels /Starter}
	{S.1.1.0, Stage 0 Intro}
	{S.1.1.1, Stage 1 Prerequisites}
	{S.1.1.2, Stage 2 Key Concepts}
	{S.1.1.3, Stage 3 What is Ninja?}
	{S.1.1.4, Stage 4 Interaction: Points}
	{S.1.1.5, Stage 5 Interaction: Fields}
	{S.1.1.6, Stage 6 Components of NinjaLive Actor}
	{S.1.1.7, Stage 7 Transforms}
		{SE.1.1.7.1, Setup A World Facing - World Space}
		{SE.1.1.7.2, Setup B World Facing Rotatable - World Space}
		{SE.1.1.7.3, Setup C World Facing Rotatable - Local Space}
		{SE.1.1.7.4, Setup D World Facing Rotatable  - Density Local Space - Velocity World Space}
		{SE.1.1.7.5, Setup E Camera Facing - Density World Space - Velocity World Space}
		{SE.1.1.7.6, Setup F SimplePainter Local Space}
		{SE.1.1.7.7, Setup G SimplePainter World Space - Quantizer Off}
		{SE.1.1.7.8, Setup H SimplePainter World Space - Quantizer On}
	{S.1.1.8, Stage 8 Surface Alignment and Z-position, Internal Render, External Render}
	{S.1.1.9, Stage 9 Direct Drive}
	{S.1.1.10, Stage 10 Output Materials}
	{S.1.1.11, Stage 11 Output Material Tricks}
	{S.1.1.12, Stage 12 Modularity: Building Actors From Components}

{L.1.2, Tutorial02_Inputs_Interaction.umap, /Content /FluidNinjaLive /Levels /Starter}
	{S.1.2.0, Stage 0 INTRO}
	{S.1.2.1, Stage 1 Density Input from BITMAPS }
		{SE.1.2.1.1, Setup A Texture}
		{SE.1.2.1.2, Setup B RenderTarget, Noise}
		{SE.1.2.1.3, Setup C RenderTarget, SceneCapture}
	{S.1.2.2, Stage 2 Density and Velocity Input from 2 Bitmaps}
	{S.1.2.3, Stage 3 Density and Velocity Input from 1 Bitmap}
	{S.1.2.4, Stage 4 Static Collision Mask from Bitmap}
	{S.1.2.5, Stage 5 Density and Velocity Input from OBJECTS FIELDS }
		{SE.1.2.5.1, Setup A Mesh SDF}
		{SE.1.2.5.2, Setup B Spline}
		{SE.1.2.5.3, Setup C Landscape}
		{SE.1.2.5.4, Setup D Destructibles}
		{SE.1.2.5.5, Setup E Dynamic Collision Mask from Mesh SDF}
	{S.1.2.6, Stage 6 PARTICLES}
		{SE.1.2.6.1, Setup A Particles Mapped on a World Facing surface}
		{SE.1.2.6.2, Setup B Particles Mapped on a Camera Facing surface}
	{S.1.2.7, Stage 7 DESTRUCTIBLES as Points}
		{SE.1.2.7.1, Setup A Destructibles Mapped on a World Facing surface}
		{SE.1.2.7.2, Setup B Destructibles Mapped on a Camera Facing surface}
	{S.1.2.8, Stage 8 Objects as Points Intro}
	{S.1.2.9, Stage 9 Objects as Points Using CLASS FILTERS}
	{S.1.2.10, Stage 10 Objects as Points Using TAGS}
		{SE.1.2.10.1, Setup A Single Component}
		{SE.1.2.10.2, Setup B Multiple Components}
	{S.1.2.11, Stage 11 Combining Class and Tag Filters}
	{S.1.2.12, Stage 12 Using Class Filters via NinjaLive Component}

{L.1.3, Tutorial03_KeyConceptsForWater.umap, /Content /FluidNinjaLive /Levels /Starter}
	{S.1.3.0, Stage 0 INTRO}
	{S.1.3.1, Stage 1 SPARSE vs DENSE SETUPS}
		{SE.1.3.1.1, Setup A Sparse Fluid Setup}
		{SE.1.3.1.2, Setup B Dense Fluid Setup}
		{SE.1.3.1.3, Setup C Sparse Surface Aligned Fluid Setup}
		{SE.1.3.1.4, Setup D Dense Surface Aligned Fluid Setup}
		{SE.1.3.1.5, Setup E Sparse Surface Aligned Fluid Setup driving Volumetrics}
		{SE.1.3.1.6, Setup F Dense Surface Aligned Fluid Setup driving SingleLayerWater}
	{S.1.3.2, Stage 2 SURFACE ALIGNMENT}
		{SE.1.3.2.1, Setup A Dense, Height Input NONE}
		{SE.1.3.2.2, Setup B Dense, Height Input LANDSCAPE}
		{SE.1.3.2.3, Setup C Dense, Height Input SCENECAPTURE}
		{SE.1.3.2.4, Setup D Dense, Height Input RVT}
		{SE.1.3.2.5, Setup E Sparse, FLAT}
		{SE.1.3.2.6, Setup F Sparse, SPLINE}
	{S.1.3.3, Stage 3 EXTENDING THE SIM AREA}
	{S.1.3.4, Stage 4 WAVE GENERATORS}

{L.1.4, Tutorial04_Presets_Spawning_Caching.umap, /Content /FluidNinjaLive /Levels /Starter}
	{S.1.4.0, Stage 0 INTRO}
	{S.1.4.1, Stage 1 WRITING AND READING PRESETS IN-EDITOR}
	{S.1.4.2, Stage 2 SPAWNING A SEA SURFACE HANDLER}
	{S.1.4.3, Stage 3 SPAWNING A LANDSCAPE SURFACE HANDLER}
	{S.1.4.4, Stage 4 WRITING AND READING SIM CACHE IN-GAME}
	{S.1.4.5, Stage 5 CACHING HEIGHT-MAPS}

{L.1.5, Tutorial05_Tricks.umap, /Content /FluidNinjaLive /Levels /Starter}
	{S.1.5.0, Stage 0 INTRO}
	{S.1.5.1, Stage 1 Sequencer and Interface Control}
		{SE.1.5.1.1, Setup A Sequencer Control}
		{SE.1.5.1.2, Setup B Interface Control Brush Size}
		{SE.1.5.1.3, Setup C Interface Control Shutdown}
	{S.1.5.2, Stage 2 Sim Space Wrapping (Tiling)}
	{S.1.5.3, Stage 3 Painting Motion Trajectories}
	{S.1.5.4, Stage 4 Scale brush density with Velocity}
	{S.1.5.5, Stage 5 Inverse Brush}
	{S.1.5.6, Stage 6 Brush - Velocity only No density}
	{S.1.5.7, Stage 7 Sim area XY proportions and scaling}
	{S.1.5.8, Stage 8 Object size to Brush size}
	{S.1.5.9, Stage 9 Brush persistence and Simulation feedback}
	{S.1.5.10, Stage 10 Output Materials and Buffer Visualization}
	{S.1.5.11, Stage 11 Brush position random}
	{S.1.5.12, Stage 12 Puncture}
	{S.1.5.13, Stage 13 Custom Visualization Mesh}
	{S.1.5.14, Stage 14 Simple Painter Mode}
		{SE.1.5.14.1, Setup A Raw paint buffer}
		{SE.1.5.14.2, Setup B Groundmarks}
		{SE.1.5.14.3, Setup C Painter driving Flowmap, World Facing}
		{SE.1.5.14.4, Setup D Painter driving Flowmap, Camera Facing}
		{SE.1.5.14.5, Setup E Velocity PaintBuffer injecting Acceleration into a Particle System}
	{S.1.5.15, Stage 15 Viscous Fluids}

{L.1.6, Tutorial06_SplineBasedRivers.umap, /Content /FluidNinjaLive /Levels /Starter}
	{S.1.6.0, Stage 0 INTRO}
	{S.1.6.1, Stage 1 Spline generator}
	{S.1.6.2, Stage 2 Mapping coordinates, Local vs World}
		{SE.1.6.2.1, Setup A Local UV}
		{SE.1.6.2.2, Setup B World UV}
	{S.1.6.3, Stage 3 Pattern generators in the Output Material}
		{SE.1.6.3.1, Setup A Flow Detail Map}
		{SE.1.6.3.2, Setup B Caustics}
		{SE.1.6.3.3, Setup C Tile Map}
	{S.1.6.4, Stage 4 Fluid Simulation driven by spline direction}
		{SE.1.6.4.1, Setup A Directional Field}
		{SE.1.6.4.2, Setup B Density Buffer advection}
		{SE.1.6.4.3, Setup C Pressure Buffer advection}
	{S.1.6.5, Stage 5 Composite of passive and simulated patterns}
	{S.1.6.6, Stage 6 Masking the simulation with Spline-Landscape intersection}


{F.2, /Content /FluidNinjaLive /Levels /CoreOnly}
{L.2.1, CamfaceTest.umap, /Content /FluidNinjaLive /Levels /CoreOnly}
	{S.2.1.1, Stage 1 External Visualization Mesh}
	{S.2.1.2, Stage 2 Internal Visualization Mesh}

{L.2.2, Desert_SimplePainter_Landscape.umap, /Content /FluidNinjaLive /Levels /CoreOnly}
	{S.2.2.1, Stage 1 Driving Landscape Components with NinjaCore}

{L.2.3, Desert_SimplePainter_Mesh.umap, /Content /FluidNinjaLive /Levels /CoreOnly}
	{S.2.3.1, Stage 1 In-Editor workflow with NinjaCore}

{L.2.4, Destructibles_as_SDF.umap, /Content /FluidNinjaLive /Levels /CoreOnly}
	{S.2.4.1, Stage 1 Reading Destructibles as SDF with NinjaCore}

{L.2.5, LandscapeAlignedWater_ProtoVersion.umap, /Content /FluidNinjaLive /Levels /CoreOnly}
	{S.2.5.1, Stage 1 Landscape aligned water with NinjaCore}

{L.2.6, River.umap, /Content /FluidNinjaLive /Levels /CoreOnly}
	{S.2.6.1, Stage 1 Driving Spline river with NinjaCore}


{F.3, /Content /FluidNinjaLive /Levels /Misc}
{L.3.1, Destructibles_as_Points_CameraFacing.umap, /Content /FluidNinjaLive /Levels /Misc}
	{S.3.1.1, Stage 1 Demolition Test}

{L.3.2, Destructibles_as_Points_WorldAligned.umap, /Content /FluidNinjaLive /Levels /Misc}
	{S.3.2.1, Stage 1 Large scale destructible as Point input}

{L.3.3, Destructibles_as_SDF_WorldAligned.umap, /Content /FluidNinjaLive /Levels /Misc}
	{S.3.3.1, Stage 1 Large scale destructible as SDF input}

{L.3.4, DrivingParticlesWithFluidsim.umap, /Content /FluidNinjaLive /Levels /Misc}
	{S.3.4.1, Stage 1 Simple Painter driven Particles}
	{S.3.4.2, Stage 2 Sim Velocity driven Particles}
	{S.3.4.3, Stage 3 Sim Velocity and Pressure driven Particles}
	{S.3.4.4, Stage 4 Sim Velocity and Pressure driven Particles}
	{S.3.4.5, Stage 5 Sim Velocity and Pressure driven Particles}
	{S.3.4.6, Stage 6 Local Sim Velocity driven Particles}
	{S.3.4.7, Stage 7 Local Simple Painter driven Particles}
	{S.3.4.8, Stage 8 Local Sim Velocity and Density driven Particles}
	{S.3.4.9, Stage 9 Local Sim Velocity and Density driven Particles}
	{S.3.4.10, Stage 10 Local Sim Density driven Particles Persystent Strokes}
	{S.3.4.11, Stage 11 Local Sim Density driven Particle Mesh Array}

{L.3.5, Lava_Sparse.umap, /Content /FluidNinjaLive /Levels /Misc}
	{S.3.5.1, Stage 1 World Space Lava Setup}
	{S.3.5.2, Stage 2 Local Space Lava Setup}

{L.3.6, PerformanceTest_Particles.umap, /Content /FluidNinjaLive /Levels /Misc}
	{S.3.6.1, Stage 1 Stress Test - 10K Particles as Input}

{L.3.7, PerformanceTest_Primitives.umap, /Content /FluidNinjaLive /Levels /Misc}
	{S.3.7.1, Stage 1 Stress test - 200 Primitive Meshes as Point Input}

{L.3.8, PerformanceTest_SimContainers.umap, /Content /FluidNinjaLive /Levels /Misc}
	{S.3.8.1, Stage 1 Stress test - 49 ninja sim Actors running}

{L.3.9, PerformanceTest_SimplePainterContainers.umap, /Content /FluidNinjaLive /Levels /Misc}
	{S.3.9.1, Stage 1 Stress test - 64 Simple Painter mode ninja actors running}

{L.3.10, PerformanceTest_SkeletalMeshes.umap, /Content /FluidNinjaLive /Levels /Misc}
	{S.3.10.1, Stage 1 Stress test - 40 Skeletal Meshes inside the sim area}

{L.3.11, VolumeDemo_FAKE.umap, /Content /FluidNinjaLive /Levels /Misc}
	{S.3.11.1, Stage 1 Purple Plasma}
	{S.3.11.2, Stage 2 Gray Fluff}
	{S.3.11.3, Stage 3 Blue Smoke}
	{S.3.11.4, Stage 4 Red Smoke}
	{S.3.11.5, Stage 5 Floor Pulse}
	{S.3.11.6, Stage 6 Plasma Sphere}

{L.3.12, VolumeDemo_FVOL_Small.umap, /Content /FluidNinjaLive /Levels /Misc}
	{S.3.12.0, Stage 0 INTRO}
	{S.3.12.1, Stage 1 Simple Passive Fog Volume Cylinder}
		{SE.3.12.1.1, Setup A Simple Fog Cylinder}
		{SE.3.12.1.2, Setup B Fog Cylinder with Volumetric Noise}
	{S.3.12.2, Stage 2 Lab}
	{S.3.12.3, Stage 3 Shrine}
	{S.3.12.4, Stage 4 HollowPuffs}
	{S.3.12.5, Stage 5 Trails}
	{S.3.12.6, Stage 6 Fog Component in a Character Actor}
	{S.3.12.7, Stage 7 Large scale passive fog setups}
		{SE.3.12.7.1, Setup A Niagara based fog}
		{SE.3.12.7.2, Setup B Box Mesh based Fog}

{L.3.13, VolumeDemo_HVOL_Medium.umap, /Content /FluidNinjaLive /Levels /Misc}
	{S.3.13.1, Stage 1 Medium Scale Landscape aligned Heterogeneous Volume}

{L.3.14, VolumeDemo_HVOL_Small.umap, /Content /FluidNinjaLive /Levels /Misc}
	{S.3.14.0, Stage 0 INTRO}
	{S.3.14.1, Stage 1 Extruding 2D density to 3D}
	{S.3.14.2, Stage 2 Running the sim vs Displaying the sim}
	{S.3.14.3, Stage 3 Camera Facing HVOL}
	{S.3.14.4, Stage 4 Camera Facing Smoke Setups}
		{SE.3.14.4.1, Setup A Camera Facing HVOL Smoke}
		{SE.3.14.4.2, Setup B Camera Facing HVOL Firea and Smoke}
	{S.3.14.5, Stage 5 Billboard Smoke Columns}
		{SE.3.14.5.1, Setup A Rising Smoke}
		{SE.3.14.5.2, Setup B Falling Smoke}
		{SE.3.14.5.3, Setup C Falling Thin Smoke}
	{S.3.14.6, Stage 6 Combining sim with noises for details}
		{SE.3.14.6.1, Setup A Noiseless 2D sim}
		{SE.3.14.6.2, Setup B Noised 2D sim}
		{SE.3.14.6.3, Setup C 3D noising techniques}
		{SE.3.14.6.4, Setup D Composite of ABC}
	{S.3.14.7, Stage 7 Smoke Pool}
	{S.3.14.8, Stage 8 Whirlpool}
	{S.3.14.9, Stage 9 Vertically Flipped Whirlpool}
	{S.3.14.10, Stage 10 Key Volume Setup Methods}
		{SE.3.14.10.1, Setup A External Non-Niagara}
		{SE.3.14.10.2, Setup B External Niagara}
		{SE.3.14.10.3, Setup C Internal Niagara}
	{S.3.14.11, Stage 11 SceneCapture Camera based setups}
		{SE.3.14.11.1, Setup A Minimal demo}
		{SE.3.14.11.2, Setup B Floor Smoke demo}
	{S.3.14.12, Stage 12 Flameball Cross Section Volume}
	{S.3.14.13, Stage 13 Pump Cross Section Volume}
	{S.3.14.14, Stage 14 Ring Cross Section Volume}

{L.3.15, VolumeDemo_HVOL_Small_PASSIVE.umap, /Content /FluidNinjaLive /Levels /Misc}
	{S.3.15.0, Stage 0 INTRO}
	{S.3.15.1, Stage 1 Extrude and Soften}
		{SE.3.15.1.1, Setup A Extrude 2D data into 3D}
		{SE.3.15.1.2, Setup B Soften Volume}
	{S.3.15.2, Stage 2 Volumetric Noise}
	{S.3.15.3, Stage 3 Ambient Lighting and Noise Flow}
	{S.3.15.4, Stage 4 Combined RGB input and Height input}
	{S.3.15.5, Stage 5 Emissive}
	{S.3.15.6, Stage 6 Masking Volume Edges}
	{S.3.15.7, Stage 7 Fade by Camera Distance}
	{S.3.15.8, Stage 8 Density Texture Panning}
	{S.3.15.9, Stage 9 Radial Polar Coordinate Transform}
	{S.3.15.10, Stage 10 Landscape Aligned small HVOLs}
		{SE.3.15.10.1, Setup A Non-Niagara HVOL Renderer}
		{SE.3.15.10.2, Setup B Niagara HVOL Renderer}
	{S.3.15.11, Stage 11 Heterogenous Volume as Component}
	{S.3.15.12, Stage 12 HVOL vs Multiple Light Sources}
	{S.3.15.13, Stage 13 HVOL by Cross Section Simple}
	{S.3.15.14, Stage 14 HVOL by Cross Section Mushroom}
	{S.3.15.15, Stage 15 Multilayer HVOL by Cross Section}

{L.3.16, VolumeDemo_SVOL_Medium.umap, /Content /FluidNinjaLive /Levels /Misc}
	{S.3.16.1, Stage 1 Medium Scale Smoke Volume Point Light} 
	{S.3.16.2, Stage 2 Medium Scale Smoke Volume Directional Light} 

{L.3.17, VolumeDemo_SVOL_Small.umap, /Content /FluidNinjaLive /Levels /Misc}
	{S.3.17.0, Stage 0 INTRO}
	{S.3.17.1, Stage 1 Live Component vs Volume Smoke Renderer}
	{S.3.17.2, Stage 2 Six modes of using Smoke Volumes}
	{S.3.17.3, Stage 3 SVOL as External Renderes vs Internal Renderer}
	{S.3.17.4, Stage 4 Live as Actor Component with SVOL as Internal Renderer}
	{S.3.17.5, Stage 5 Point Lit SVOL normal vs noisy}
	{S.3.17.6, Stage 6 Directionally Lit SVOL}
	{S.3.17.7, Stage 7 Smoke Pool Point Lit SVOL vs HVOL compared}
		{SE.3.17.7.1, Setup A SVOL smoke pool}
		{SE.3.17.7.2, Setup B HVOL smoke pool}
	{S.3.17.8, Stage 8 Vortex Point Lit SVOL vs HVOL compared}
		{SE.3.17.8.1, Setup A SVOL vortex}
		{SE.3.17.8.2, Setup B HVOL vortex}

{L.3.18, Water_Dense_Rain.umap, /Content /FluidNinjaLive /Levels /Misc}
	{S.3.18.1, Stage 1 Particle based rain ripples on a lake}

{L.3.19, Water_Dense_vs_Sparse.umap, /Content /FluidNinjaLive /Levels /Misc}
	{S.3.19.1, Stage 1 Dense water setup demo}
	{S.3.19.2, Stage 2 Sparse water setup demo}

{L.3.20, Water_Sparse_DoubleSim_TilingWaves.umap, /Content /FluidNinjaLive /Levels /Misc}
	{S.3.20.1, Stage 1 Composite of two simulations in one Output Material}

{L.3.21, Water_Sparse_DoubleSim_Vortex.umap, /Content /FluidNinjaLive /Levels /Misc}
	{S.3.21.1, Stage 1 Composite of two simulations in one Output Material}

{L.3.22, Water_Sparse_Sea_Ship.umap, /Content /FluidNinjaLive /Levels /Misc}
	{S.3.22.1, Stage 1 Large Ship on Sea}












\------------------------------------------------------------------------------------------------------------------------------


### CHAPTER 4: LEVELS, STAGES AND SETUPS LISTED WITH METADATA


SYNTAX DEFINITION FOR LEVEL CONTENT LIST ITEMS:
- "Folder" type list item: {F.folder number, folder path}
- "Level" type list item: {L.level number, level name, path}
- "Stage" type list item: {S.stage number, stage name}
- "Setup" type list item: {SE.setup number, setup name}
- "Metadata" type list item: {M.number, #description: metadata}

STRUCTURED LIST OF FOLDERS, LEVELS, STAGES, SETUPS AND METADATA
COUNT: 57 LEVELS, 222 STAGES, 296 SETUPS LISTED


{F.0, /Content /FluidNinjaLive /Levels}
#### {L.0.1, Clouds.umap, /Content /FluidNinjaLive /Levels}

{S.0.1.1, Stage 1 Fluidsim driven responsive Cloud Setups}
{M.0.1.1, #Description: 
Fluidsim driven responsive Cloud Volumes, CVOL

BOUNDS:  When driving CLOUDS with fluidsim, we must set /LiveComponent /Simulation /Bounds /SimAreaClamp = FALSE    (to comply with LWC-tiles). Clamping (if needed) could be set up in the Cloud Material /Fading /EdgeMask = TRUE

SHADOWS:  DirectionalLight /Atmosphere and Cloud /Cast Cloud Shadow = TRUE

VISIBILITY: on this level, all Cloud Actors are hidden (Visible = FALSE) by default, except one.
Do not forget to set them visible, when copy-pasting setups! (Actor Details Panel /Render /Visible = True)

LANDSCAPE ALIGNMENT:  For a simple setup, see Clouds_PASSIVE.umap, where a single utility samples landscape elevation 
(without additional setup elements) and forwards the data to the Cloud material. Problem: the utility can sample only ONE 
landscape at a time. On this level, we have multiple Landscape Actors under the cloud-covered area... so we had to set up 
a complex RVT (Runtime Virtual Texture) pipeline to sample height data. How it works:

(1) set up the Landscape Actor to write into a on-disk RVT asset (via the "DrawInVirtualTextures" param at Actor Details)
(2) apply a material to the Landscape, with "RVT Output" node included
(3) create an RVT volume in the scene, connected to the same on-disk RVT asset the Landscape writes-to
(4) set ninja to sample the given RVT asset:
/LiveComponent /LiveInputFields /HeightFields /RVTHeightData /UseRVTAsHeightSource = True
/LiveComponent /LiveInputFields /HeightFields /RVTHeightData /RVT-asset = (user defined RVT asset)
(5) ninja is feedig the RVT-height into the Cloud Output Material. Set ninja to drive Volumetric Cloud Actor with the material.

PRESS THE 1-6 KEYS ON THE KEYBOARD TO CHAGE VOLUME SETUP (IN-GAME)  and  OBSERVATION-POINT (IN-EDITOR)
}
		{SE.0.1.1.1, Setup 1 SmokePillars CVOL 20km simdriven}
		{SE.0.1.1.2, Setup 2 Vortex CVOL 20km Simdriven}
		{SE.0.1.1.3, Setup 3 Impulse CVOL 50km Simdriven}
		{SE.0.1.1.4, Setup 4 Aurora CVOL 50km Simdriven}
		{SE.0.1.1.5, Setup 5 Titan CVOL 20km Simdriven LandscapeAligned}
		{SE.0.1.1.6, Setup 6 User Painted Clouds CVOL 20km Simdriven LandscapeAligned}

#### {L.0.2, Clouds_PASSIVE.umap, /Content /FluidNinjaLive /Levels}

{S.0.2.1, Stage 1 Passive NonSimulated Cloud Setups}
{M.0.2.1, #Description:
Passive Cloud Volumes, CVOL

VISIBILITY: on this level, all Cloud Actors are hidden (Visible = FALSE) by default, except one.
Do not forget to set them visible, when copy-pasting setups! (Actor Details Panel /Render /Visible = True)

SHADOWS:  DirectionalLight /Atmosphere and Cloud /Cast Cloud Shadow = TRUE

ADDITIONAL DATA: notice the "WriteMaterialsToRenderTargets" Components added to certain Volumetric Cloud Actors

LANDSCAPE ALIGNMENT:  A setup with 2 key elements. (1) SurfaceAlignedVolumes Utility set to "Landscape Sampler" Mode, writing elevation data into a RenderTarget, (2) The Volumetric Cloud Material is reading this RenderTarget as Height Map, to make the clouds landscape aligned.

MORE:
- These demo setups use passive density input / no interactive fluidsim
- Swapping materials at the VolumeCloud Actor Details Panel is also a valid option
- VolumeCloud Actor Details (eg.: Layer Bottom ALTITUDE and HEIGHT) are tailored for a given material/setup
- Technology demonstrated on this level: (A) extruded vs cross-section based 3d, (B) multilayer cloud materials, (C) landscape-alignment
- Key performance factors: (A) directional light actor /cast cloud shadow, (B) volumecloud actors / cloud tracing /view sample count scale
- Want to repeat Joe Kittinger's stratosphere jump? (youtube.com/watch?v=w9IEw0dS6xk) - Press "7" in-editor, press Play, press "0" in-game 
}
		{SE.0.2.1.1, Setup 1 Volcano CVOL 10km Passive MultiLayer LandscapeAligned}
		{M.0.2.1.1, #Description: MultiLayer, Layer "HillClouds" aligns with Landscape surface}
		{SE.0.2.1.2, Setup 2 Volcano CVOL Infinite Passive MultiLayer LandscapeAligned}
		{SE.0.2.1.3, Setup 3 Mushroom CVOL 10km Passive MultiLayer}
		{SE.0.2.1.4, Setup 4 Mushroom CVOL Infinite Passive MultiLayer}
		{M.0.2.1.4, #Description: MultiLayer, Layer "Mushroom" uses cross-sections to create 3D density}
		{SE.0.2.1.5, Setup 5 SandStorm CVOL 80km Passive SingleLayer}
		{M.0.2.1.5, #Description: SingleLayer, Prototype only, Uses cross-sections to create 3D density}
		{SE.0.2.1.6, Setup 6 Nimbus CVOL Infinite Passive SingleLayer}
		{M.0.2.1.6, #Description: SingleLayer Uses cross-sections to create 3D density}
		{SE.0.2.1.7, Setup 7 Stratus CVOL Infinite Passive SingleLayer}
		{SE.0.2.1.8, Setup 8 Mammatus CVOL Infinite Passive SingleLayer}
		{SE.0.2.1.9, Setup 9 Tornado CVOL 10km Passive SingleLayer}
		{M.0.2.1.9, #Description: tornado upper part is CVOL, lower part is HVOL, HVOL is visible ONLY when close)
		{SE.0.2.1.10, Setup 10 Cyclone CVOL 20km Passive SingleLayer}
		{M.0.2.1.10, #Description: SingleLayer, Uses cross-sections to create 3D density}

#### {L.0.3, Fire_Smoke_Explosive.umap, /Content /FluidNinjaLive /Levels}

{M.0.3, #Description: 
Most setups on this level are CAMERA FACING

Ninja core simulation is 2D (XY). To make it look 3D, we could extrude it vertically (Z):
this technique is good for "stuff that lays on the ground anyway"...
...like low lying ground-level fog or dust upon footsteps & wheeltracks.

However: for "vertical stuff" - like fire or a column of smoke - extrusion is not enough.
To make it look 3D, we also have to turn the 2D simulation-plane towards the camera, every frame.
Such setups are "camera facing".
}
	{S.0.3.1, Stage 1 Character FX Torch}
	{S.0.3.2, Stage 2 Bonfire with Particle Input}
	{S.0.3.3, Stage 3 Bonfire with Object Pivot Input}
	{S.0.3.4, Stage 4 Moving Objects on Fire}
		{SE.0.3.4.1, Setup A Torch}
		{SE.0.3.4.2, Setup B Bonfire with Multiple LiveComponents}
		{SE.0.3.4.3, Setup C Flaming Sword}
		{SE.0.3.4.4, Setup D Fairlight}
	{S.0.3.5, Stage 5 Bonfire and Volumetric Smoke HVOL}
	{S.0.3.6, Stage 6 Bonfire and Volumetric Smoke SVOL}
		{SE.0.3.6.1, Setup A Thin}
		{SE.0.3.6.2, Setup B Thick}
	{S.0.3.7, Stage 7 Candles}
		{SE.0.3.7.1, Setup A Candle Flame}
		{SE.0.3.7.2, Setup B Candle Smoke Single}
		{SE.0.3.7.3, Setup C Candle Smoke Multiple}
	{S.0.3.8, Stage 8 Magic Cauldron}
	{S.0.3.9, Stage 9 Smoke Pool}
	{S.0.3.10, Stage 10 Flamethrower Turret}
	{S.0.3.11, Stage 11 Flaming fist}
		{SE.0.3.19.1, Setup A Fiery}
		{SE.0.3.19.2, Setup B Blue Plasma}
	{S.0.3.12, Stage 12 Burning Man 1}
	{S.0.3.13, Stage 13 Burning Man 2}
	{S.0.3.14, Stage 14 Burning Man 3}
	{S.0.3.15, Stage 15 Smoking Man}
	{S.0.3.16, Stage 16 Explosive Block}
{M.0.3.16, #Description: Destructibles, We can read CHAOS data two ways: (1) as points, (2) as distance field (SDF). In this setup, we have both methods set-up: method-1 is active by default, method-2 disabled}
	{S.0.3.17, Stage 17 Blue Plasma Explosion}
	{S.0.3.18, Stage 18 Smoke Piston}
	{S.0.3.19, Stage 19 Fireball}
	{S.0.3.20, Stage 20 Hot Wheels Vehicle Setup}
		{SE.0.3.19.1, Setup A Tyres on Fire and Smoke}
		{SE.0.3.19.2, Setup B Tyres on Volumetric Smoke}
		{SE.0.3.19.3, Setup C Tyres on Simple Smoke}
	{S.0.3.21, Stage 21 Steam Puff}

#### {L.0.4, Fog_Mist.umap, /Content /FluidNinjaLive /Levels}

{M.0.4, #Description: FLUIDSIM DRIVEN, LANDSCAPE ALIGNED VOLUMES}
	{S.0.4.1, Stage 1 FVOL Only}
	{M.0.4.1, #Description: single fog volume, FVOL, with a 40 meters simulated core area and a 200 meters passive zone}
	{S.0.4.2, Stage 2 HVOL and FVOL Combo}
	{M.0.4.2, #Description: 32 meters simulated heterogeneous volume core, HVOL, a 200 meters passive fog volume, FVOL}

#### {L.0.5, Fog_Mist_PASSIVE.umap, /Content /FluidNinjaLive /Levels}

{M.0.5, #Description: PASSIVE, LANDSCAPE ALIGNED VOLUMES}
	{S.0.5.1, Stage 1 FVOL Only}
	{M.0.5.1, #Description: 
Single passive 200 meters Fog Volume, FVOL

Try various Fog Volume Output Materials!

1. The assets are located in this folder:
     /Content /FluidNinjaLive /OutputMaterials /FVOLniagara

2. The assets named as "MI_FVOL_PASSIVE_ ..." 
     are matching this setup! (7 variations!)

3. Change materials:
- select Actor "FVOL 200m passive"
- go to User Parameters at the Actor Details Panel
- edit the "FVOLMaterial" param

Learn more about Fog Volumes by visiting this level:
/Content /FluidNinjaLive /Levels /Misc /VolumeDemo_FVOL_Small.umap
}
	{S.0.5.2, Stage 2 HVOL and FVOL Combo}
	{M.0.5.2, #Description: 
32m passive Heterogeneous Volume, HVOL, extended with a 200m passive Fog Volume, FVOL
}

#### {L.0.6, Grass.umap, /Content /FluidNinjaLive /Levels}

{S.0.6.1, Stage 1 Sim Driven Foliage}
		{SE.0.6.1.1, Setup A Wind for Grass}
		{M.0.6.1.1, #Description: 
Ninja WIND actor is driving two systems, using two Output Materials
Wind /LiveComponent /LiveOutputMaterials

1. Volumetrics: the Primary Output Material is driving an INTERNAL HVOL (Heterogeneous Volume)
    using sim density as a height-map

2. Foliage: the Secondary Output Material is driving EXTERNAL foliage-generator util
     using sim velocity as a directional field - to bend the grassblades

Key part of driving the grass is:
Wind /LiveComponent /LiveOutputExternalRenderers

Using the "ExternalRenderer" option we expose not only the Output Material to a TAGGED external Niagara System,
but raw sim buffers and sim POS / EXTENTS data too.
}
		{SE.0.6.1.2, Setup B Harvester Vehicle FX}
		{M.0.6.1.2, #Description: ColdSurface Flow + Jet Exhaust, these two Ninja Actors are not related to the grass setup}
	{S.0.6.2, Stage 2 Painter Driven Foliage}

#### {L.0.7, Sand.umap, /Content /FluidNinjaLive /Levels}

{S.0.7.1, Stage 1 Painter and Sim Combo}
{M.0.7.1, #Description:
1. Volumetrics is handled by a small-scale fluidsim, using Internal HVolume Renderer
2. Landscape is handled by a large-scale simple painter (no fluidsim, only painting tracks)
3. Landscape Utility forwards data and params from simple painter to the Landscape Material
}
	{S.0.7.2, Stage 2 Single Simulation}
	{M.0.7.2, #Description:
1. A single, large-scale fluidsim drives Landscape surface and Volumetrics
2. Landscape Utility forwards data and params from ninja to the Landscape Material
}

#### {L.0.8, Sand_Destructibles.umap, /Content /FluidNinjaLive /Levels}

{S.0.8.1, Stage 1 Painter and Sim Combo}
{S.0.8.2, Stage 2 Single Simulation}
{S.0.8.3, Stage 3 Large Destructible Drop}

#### {L.0.9, Snow.umap, /Content /FluidNinjaLive /Levels}

{S.0.9.1, Stage 1 Painter and Sim Combo}
{M.0.9.1, #Description:
1. Volumetrics is handled by a small-scale fluidsim, using Internal HVolume Renderer
2. Landscape is handled by a large-scale simple painter (no fluidsim, only painting tracks)
3. Landscape Utility forwards data and params from simple painter to the Landscape Material
}
	{S.0.9.2, Stage 2 Single Simulation}
	{M.0.9.2, #Description:
1. A single, large-scale fluidsim drives Landscape surface and Volumetrics
2. Landscape Utility forwards data and params from ninja to the Landscape Material
}

#### {L.0.10, Snow_Minimal.umap, /Content /FluidNinjaLive /Levels}

{S.0.10.1, Stage 1 Simple Painter on Landscape}
{M.0.10.1, #Description:
1. ninja is running in simple mode: /LiveComponent /LiveCore /SimplePainterMode
a. tracking objects, painting their trajectory, no fluidsim
b. to add more details, we can add a bitmap on top of the paint-buffer:
/LiveComponent /LiveInputFields /Bitmaps

2. raw paint buffer inverted
/LiveComponent /LiveOutputRenderTargets /PaintVelocityDensityAndElevation /InvertPainterBufferDensity
Inversion: the originally white paint-marks turn black, and the black background turns white.
We do this to prepare data for a SPECIAL function in the OutputMaterial:
ParallaxOcclusionMapping aka. POM is responsible to make footprints / wheeltracks / impressions look 3D.
It is FAKE - only a material-shader trick.

3. Output Material
By default, Ninja assigns Output Material to Tagged Objects In-game (keyword: DirectDrive)
Landscapes are special: they can not be assigned with a material during game-time.
Workaround: we assign the needed material to the Landscape manually, In-Editor and sending dynamic parameters (eg.: sim pos) to the Material in-game, using the Landscape Utility.
}

#### {L.0.11, Viscous_Blood_Mud.umap, /Content /FluidNinjaLive /Levels}

{M.0.11, #Description:
Viscous Fluids
Viscosity is not an "out of the box" feature, but an exploit, that could be achieved by mis-using fluidsim parameters.
Key params:
/LiveCore
- SimSpeed = 10 (default: 1)

/LiveInputFields
- PersistencyOfFieldAndPointData = 0.05 (default: 0.2)

/LiveInputPoints /BrushKillers
- KillBrushBelowThisVelocity = 0.1 (default: 0)

/LiveSimulation
- DensityAccumulation 1.225 (default: 0.85)
- VeloFromBrushMotion 10 (default: 1)
- Divergence 0.04 (default: 1)

/LiveSimulation /Advanced
- VelocityFeedback 0.9 (default: 0.99)
- VelocityClamp 50 (default: 4)
- KernelIndexOffset -2

/LiveSimulation /Noise
- VeloDirNoise 100
- VeloDirNoiseSpeed 0
- MaskDirNoiseWithSimVelocity 1

Achieving "viscous fluid" behavior - params listed in order of importance:

- Low Divergence: to eliminate turbulent fluid behavior
- KernelIndexOffset: to kill long distance pressure waves / to make pressure quickly die out 

- Low VelocityFeedback: to kill velocity propagation, fluid remains inert in "no action" zones
- High DensityAccumulation: to compensate for velocity loss - make the fluid spread out evenly (and not in velocity direction)
- High SimSpeed: to compensate for velocity loss - and make the fluid move "normally" at low velocity
- KillBrushBelowThisVelocity: to avoid still and slow-moving brushes making large impact

Random noise is responsible for the diverse smearing patterns:
- High VeloDirNoise: high frequency random velocity bursts
- MaskDirNoiseWithSimVelocity: limit velocity bursts to places where interacting object inject velocity to the sim
- High VelocityClamp:  removes the default clamping limit (needed for bursts)

- High VeloFromBrushMotion: amplifying the velocity injected to the sim by interacting objects

TIP: if you set "VelocityFeedback" back to default (0.99), while keeping DensityAccumulation at 1.225, the fluid becomes more "spready".
}
	{S.0.11.1, Stage 1 Blood Slippery Marks}
	{S.0.11.2, Stage 2 Blood Splash}
	{S.0.11.3, Stage 3 Mud - Local}
	{S.0.11.4, Stage 4 Mud - World Space}
	{S.0.11.5, Stage 5 Blood Trickle Simple}
	{S.0.11.6, Stage 6 Blood Trickle Complex}
	{M.0.11.6, #Description: SURFACE ALIGNMENT, this setup uses a height distorted Plane-Mesh to align the fluid with the surface. Alternative solution: DECAL mapping the fluid onto surfaces.}
	{S.0.11.7, Stage 7 Blood Bath}

#### {L.0.12, Water_Dense_Creek1.umap, /Content /FluidNinjaLive /Levels}

{S.0.12.1, Stage 1 Simulated Creek}
{M.0.12.1, #Description: Sim area position fixed/locked (not attached to pawn)
Dense type water setup  (water is surface aligned, climbs on the coast and objects)
/LiveComponent /LiveSimulation /DensityAccumulation > 1

Height from Landscape (Clamped at Waterline) + SDF
/LiveComponent /LiveInputFields /HeightField /EnableHeightField = True
/LiveComponent /LiveInputFields /HeightField /ClampHeightLowerValues = True
/LiveComponent /LiveInputFields /MeshFields /AddMeshToLandscapeHeight = True
 
Initial Sim CACHE
/LiveComponent /LiveInputFields /Cache
}

#### {L.0.13, Water_Dense_Creek2.umap, /Content /FluidNinjaLive /Levels}

{S.0.13.1, Stage 1 Simulated Creek}
{M.0.13.1, #Description: Sim area position fixed/locked (not attached to pawn)
Dense type water setup  (water is surface aligned, climbs on the coast and objects)
/LiveComponent /LiveSimulation /DensityAccumulation > 1

Height from a Top-Down SceneCaptureCamera (Clamped at Waterline):
/LiveComponent /LiveInputFields /HeightField /EnableHeightField = True
/LiveComponent /LiveInputFields /HeightField /ClampHeightLowerValues = True
/LiveComponent /LiveInputFields /HeightField /ExternalHeightData /UseExternalHeightData = True
/LiveComponent /LiveInputFields /HeightField /ExternalHeightData /ExternalHeightDataFromRenderTarget = RT_SceneDepth
/LiveComponent /LiveInputFields /HeightField /ExternalHeightData /ExternalHeightDataNullPoint = 1000
 
Initial Sim CACHE
/LiveComponent /LiveInputFields /Cache

Collision Mask:
EXCLUDE fluid from critical areas, to avoid leaking SDF from ORANGE and YELLOW objects is being used to generate a Collision Mask:
/LiveComponent /LiveInputFields /MeshFields /UseAsCollisionMask = True

SceneCaptureCamera (get elevation data)
We have a SceneCaptureCamera set up, looking down the rocks, writing the elevation data a RenderTarget - which we read on the ninja side. The height data is being used two times:
1. in the ninja simulation, to confine the flow (so the water flows "downwards" and remains in local lows)
2. in the Output Material, to displace the vertices of the flat water-mesh and make it surface aligned

- by default, only initial capture is performed
- for continous height-capture: SET "Stop Capturing" to 0

- using the BAKE function in the camera we can save height to a Texture  (and REMOVE the camera once the height is baked)
/CaptureCamera /NinjaReletedSettings /CaptureSingleFrameInEditor
NOTE: the dam-object downstream is handled as a COLLISION MASK, hence: it could be dynamic despite the capture being static
}

#### {L.0.14, Water_Dense_Lake.umap, /Content /FluidNinjaLive /Levels}

{S.0.14.1, Stage 1 Simulated Lake Coastline}
{M.0.14.1, #Description: Sim area position fixed/locked (not attached to pawn)
Dense type water setup  (water is surface aligned, climbs on the coast and objects)
/LiveComponent /LiveSimulation /DensityAccumulation > 1

Height from Landscape (Clamped at Waterline) + SDF
/LiveComponent /LiveInputFields /HeightField /EnableHeightField = True
/LiveComponent /LiveInputFields /HeightField /ClampHeightLowerValues = True
/LiveComponent /LiveInputFields /MeshFields /AddMeshToLandscapeHeight = True

Wave Generator:  (prerequisites: "Dense" setup + Landscape)
/LiveComponent /LiveSimulation /WavesFromLandscapeGradient

Try various Output Materials:  press 0-2 in-game!
/LiveComponent /LiveOutputMaterials /SecondaryOutputMaterialSelected
}

#### {L.0.15, Water_Dense_Sea.umap, /Content /FluidNinjaLive /Levels}

{S.0.15.1, Stage 1 Simulated Sea Coastline}
{M.0.15.1, #Description: Sim area position fixed/locked (not attached to pawn)
Dense type water setup  (water is surface aligned, climbs on the coast and objects)
/LiveComponent /LiveSimulation /DensityAccumulation > 1

Height from Landscape (Clamped at Waterline) + SDF
/LiveComponent /LiveInputFields /HeightField /EnableHeightField = True
/LiveComponent /LiveInputFields /HeightField /ClampHeightLowerValues = True
/LiveComponent /LiveInputFields /MeshFields /AddMeshToLandscapeHeight = True

Wave Generator:  (prerequisites: "Dense" setup + Landscape)
/LiveComponent /LiveSimulation /WavesFromLandscapeGradient

Try various Output Materials:  press 0-2 in-game!
LiveComponent /LiveOutputMaterials /SecondaryOutputMaterialSelected
}

#### {L.0.16, Water_Sparse_Lake.umap, /Content /FluidNinjaLive /Levels}

{S.0.16.1, Stage 1 Simulated Lake Open Waters}
{M.0.16.1, #Description: 
SPARSE type water setup
/LiveComponent /LiveSimulation /DensityAccumulation < 1

Advantage of using a SPARSE setup:
- Simulated patterns (eg. whitwater) are more detailed, compared to a Dense setup

Negative consequences of using a SPARSE setup:
- Water is NOT surface aligned (lives on a flat plane)
- Water can not climb on the coast or rocks
- SIM Wave generator doesn't work  (only PASSIVE waves, generated by Output Material /TileMap)

Landscape used as Collision Mask:
/LiveComponent /LiveInputFields /HeightFields /EnableHeightField = True
/LiveComponent /LiveInputFields /HeightFields /UseHeightAsCollisionMask = True

Mesh SDF used as Density input:
/LiveComponent /LiveInputFields /MeshFields /EnableMeshDistanceFieldReader = True
/LiveComponent /LiveInputFields /MeshFields /UseAsDensitySource = True

Try various Output Materials:  press 0-2 in-game!
/LiveComponent /LiveOutputMaterials /SecondaryOutputMaterialSelected
}

#### {L.0.17, Water_Sparse_River.umap, /Content /FluidNinjaLive /Levels}

{S.0.17.1, Stage 1 Complex MultiRiver Setup}
{M.0.17.1, #Description: 
This level features a complex setup:
1. Driving multiple Spline Meshes (Rivers) with a single simulation. Key param:   
/LiveComponent /LiveInputFields /SplineFields /RecollectSplinesDuringGame

2. Driving a Mesh Array (Lake) with the same simulation that drives the rivers. Key params:  
/LiveComponent /LiveOutputExternalRenderers /DriveNiagaraComponentInTaggedActors
/LiveComponent /LiveOutputExternalRenderers /ExposeOutputMaterialToSurfaceAlignedNiagaraMeshes

3. Using Spline-Landscape intersection to generate 
(A) CollisionMask for the sim and (B) HeightField for particles. Key params: 
/LiveComponent /LiveInputFields /SplineFields /EnableSplineReader
/LiveComponent /LiveInputFields /SplineFields /TryToGenerateCollisionMaskUsingRVT
/LiveComponent /LiveInputFields /HeightFields /EnableHeightField
/LiveComponent /LiveInputFields /HeightFields /UseHeightAsCollisionMask

4. Mesh SDF used as Density input:
/LiveComponent /LiveInputFields /MeshFields /EnableMeshDistanceFieldReader = True
/LiveComponent /LiveInputFields /MeshFields /UseAsDensitySource = True
}
{S.0.17.2, Stage 2 Local Waterfall Setup}

#### {L.0.18, Water_Sparse_Rivers_Minimal.umap, /Content /FluidNinjaLive /Levels}

{S.0.18.1, Stage 1 Large scale river}
{M.0.18.1, #Description: SplineMesh based river, controlled via DirectDrive, Landscape Component based terrain, controlled via Landscape Util}
{S.0.18.2, Stage 2 Medium scale river}
{M.0.18.2, #Description: SplineMesh based river, controlled via DirectDrive, Landscape Component based terrain, controlled via Landscape Util}
{S.0.18.3, Stage 3 Small scale river - Point interactors}
{M.0.18.3, #Description: This setup uses the PIVOT point of the riverbed rocks as simulation intput.
This setup uses INVERSE simulation density! Sim space is filled (high density) + brush is INVERTED: erases density
All other stages use empty sim + positive density-brush combo. Key param:
/LiveComponent /LiveInputFields /InvertFieldAndPointDensity
}
	{S.0.18.4, Stage 4 Small scale river - SDF interactors}
	{M.0.18.4, #Description: This setup is similar to STAGE 3 - except it is using the Mesh SDF of riverbed rocks as sim input}
	{S.0.18.5, Stage 5 River with bedrock-collision mask}
	{M.0.18.5, #Description: Simulation on this stage combines realtime collision (pawn, movable rocks) with texture based collision masking (bedrocks). Key param: /LiveComponent /LiveInputFields /Bitmaps /CollisionMask}
	{S.0.18.6, Stage 6 Crude particle test}

#### {L.0.19, Water_Sparse_Sea_Minimal.umap, /Content /FluidNinjaLive /Levels}

{S.0.19.1, Stage 1 Sea - Quiet Minimal}
{M.0.19.1, #Description: 
SPARSE type water setup
/LiveComponent /LiveSimulation /DensityAccumulation < 1

Advantage of using a SPARSE setup:
- Simulated patterns (eg. whitwater) are more detailed, compared to a Dense setup

Negative consequences of using a SPARSE setup:
- Water is NOT surface aligned (lives on a flat plane)
- Water can not climb on the coast or rocks
- SIM Wave generator doesn't work  (only PASSIVE waves, generated by Output Material /TileMap)

HeightField is enabled only to handle interactions at waterline:
/LiveComponent /LiveInputFields /HeightFields /EnableHeightField = True
/LiveComponent /LiveInputFields /HeightFields /ClampHeightLowerValues
/LiveComponent /LiveInputFields /HeightFields /ClampingValue
}
#### {L.0.20, Water_Sparse_Sea_Quiet.umap, /Content /FluidNinjaLive /Levels}

{S.0.20.1, Stage 1 Sea - Quiet}

#### {L.0.21, Water_Sparse_Sea_Stormy.umap, /Content /FluidNinjaLive /Levels}

{S.0.21.1, Stage 1 Sea - Stormy}

#### {L.0.22, Water_Sparse_Sea_Windy.umap, /Content /FluidNinjaLive /Levels}

{S.0.22.1, Stage 1 Sea - Windy}

#### {L.0.23, Water_Sparse_Various.umap, /Content /FluidNinjaLive /Levels}

{S.0.23.1, Stage 1 Pool - Sparse}
{S.0.23.2, Stage 2 Pool - Dense}
{S.0.23.3, Stage 3 Spray Fountain}
{S.0.23.4, Stage 4 Cauldron Minimal}
{S.0.23.5, Stage 5 Cauldron}
{S.0.23.6, Stage 6 Water Tank}
{S.0.23.7, Stage 7 Liquid Sphere}
	{SE.0.23.7.1, Setup A Clear}
	{SE.0.23.7.2, Setup B Turbulent}
{S.0.23.8, Stage 8 Waterfall}
{S.0.23.9, Stage 9 Waterfalls Far Background}
	{SE.0.23.9.1, Setup A White}
	{SE.0.23.9.2, Setup B Blue}
{S.0.23.10, Stage 10 Legacy Setups}
	{SE.0.23.10.1, Setup A Blood Orb}
	{SE.0.23.10.2, Setup B Watery Sand Flow}






















{F.1, /Content /FluidNinjaLive /Levels /Starter}


#### {L.1.0, StartingGuide.umap, /Content /FluidNinjaLive /Levels /Starter}

{S.1.0.1, Stage 1 Starting Guide}
{M.1.0.1, #Description: 

FluidNinja LIVE 2.0.0.56 BETA-4 for UE 5.6 - 5.8
Copyright 2026 Andras Ketzer

LEARNING LEVELS: /Content /FluidNinjaLive /Levels /Starter
Tutorial01_Basics.umap, Starting with Ninja - Core ideas explained through simple demo setups
Tutorial02_Inputs_Interaction, Feeding the simulation - Showcasing all data types ninja can access and interact with
Tutorial03_KeyConceptsForWater, Water-related concepts - Sparse vs Dense Setups / Surface Alignment / Extending Sim Area
Tutorial04_Presets_Spawning_Caching, Save & Load sim state - Presets & Spawning / Caching sim state & height maps
Tutorial05_Tricks, Special Params & Setups - Using Sequencer, Viscous Fluids and much more
Tutorial06_SplineBasedRivers, Spline-based rivers - Large scale, non-surface aligned bodies of water
Volumetrics: See "VolumeDemo" Levels in the "Misc" folder - four volume types, different usage: FVOL, HVOL, SVOL, CVOL

LEARNING MATERIALS:
1. Tooltips: Detailed information on all params - use the Mouse Pointer to access Tooltips!
Param descriptor text file: drive.google.com/file/d/1FedZwfW3iE1OgJr_Ye551TgaSLjqVUdj
2. Manual: drive.google.com/file/d/19qc6Si5AwDKS8iOinB4egCtdn2hse1aa (under construction!)
3. Annotations: in Niagara Systems and Blueprints comments describe how the given system works.

Welcome!
- Ninja is a fluid simulation toolkit for Environment Decoration and Character Effects
- Following three years of development, FluidNinja LIVE-2 is about to be released in 2026
- LIVE-2 is in the testing phase / not yet production ready: use BETA at your own risk!

Key Features:
- Generic usage: water, clouds, fog, smoke, fire, sand and snow
- Surface aligned: liquids & gases follow the landscape
- Input: mesh distance fields, landscapes, splines, particles, destructible chunks, bones and object pivots
- Output: driving mesh surfaces, volumetrics and particles with fluidsim
- Large areas: simulation attached to player, near background always interactive. Beyond sim: passive patterns
- Scalable: simple mode to paint footprints and trails (no fluidsim) & passive setups when no interaction needed
- Presets & spawning supported

Searchable Level Content
All Stages and Setups listed: drive.google.com/file/d/15d3QdfleD1jDw8LJ3YQEGpAP-89b9bKa

Community Server: discord.gg/rgEtwua2tu
Official Project Page: fab.com/listings/80fcf53e-49f7-4635-a71c-ba81280c6618
}










#### {L.1.1, Tutorial01_Basics.umap, /Content /FluidNinjaLive /Levels /Starter}

{S.1.1.0, Stage 0 Intro}
{M.1.1.0, #Description: STARTING WITH NINJA

Topics covered:
1.   PREREQUISITES
2.   KEY CONCEPTS
3.   NINJA: DEFINITION
4.   INTERACTION: POINTS
5.   INTERACTION: FIELDS
6.   COMPONENT OF LIVE ACTOR
7.   TRANSFORMS
8.   SURFACE ALIGNMENT, INTERNAL vs EXTERNAL RENDER
9.   DIRECT DRIVE
10.   OUTPUT MATERIALS
11.   OUTPUT MATERIAL TRICKS
12.   MODULARITY
}


{S.1.1.1, Stage 1 Prerequisites}
{M.1.1.1, #Description: PREREQUISITES

A. USING NINJA IN YOUR PROJECT:   MERGING
Ninja is an Unreal PROJECT. It could be used in other projects by MERGING.

A "host project" is where we would like to merge ninja.
The following steps 1-2-3 are for the host project:

1. Enable "ChaosVehicles" Plugin in the host project   (plugin is not essential for ninja)

2. SET Edit /Project Settings /Engine / Rendering /SoftwareRayTracing /GenerateMeshDistanceFields = TRUE

3. SET Edit /Project Settings /Engine /Physics /ChaosPhysics /SolverOptions...
    /GenerateCollisionData = TRUE   +   GenerateBreakData = TRUE   +   GenerateTrailingData = TRUE

4. Quit Unreal. 
     Copy the FluidNinjaLive folder (from the original ninja project) to the CONTENT folder of the HOST project. 
     Following the copy, the most important asset "NinjaLiveCore" should be located like this:   
     /Content /FluidNinjaLive /NinjaLiveCore.uasset
     Do NOT use the "Migrate" function:  COPY the content, outside Unreal / make sure Unreal is not running!

MERGING DONE!
If done correctly, all original ninja levels and setups should work properly under the host project.

B. SEE HOW NINJA WORKS ON A GIVEN LEVEL: PRESS PLAY!
DO NOT use "Simulate" Mode - Make sure "Selected Viewport" Mode is used

C. LEARNING RESOURCES
- Starting Guide: /Content/FluidNinjaLive/Levels/_Starter/_StartingGuide.umap
- Manual: drive.google.com/file/d/1I4dglPjeXLcNkSGxGok8sQCy59qgYcF9
- Tooltips: at the Actor and Component Details Panel
- Project Homepage: fab.com/listings/80fcf53e-49f7-4635-a71c-ba81280c6618
- Tutorial Vids: not yet available - coming to:    youtube.com/@AndrasKetzer
- Community Server: discord.gg/rgEtwua2tu

D. SKILLS
Using Ninja requires lower-intermediate level UE skills, assuming users are familiar with
basic concepts like Actors and Components, Materials and their Instances, RenderTargets

LIVE-2 inherited many concepts from LIVE-1 / being familiar with LIVE-1 is an advantage 
until a full set of LIVE-2 tutorias is being made (late 2026)
}

{S.1.1.2, Stage 2 Key Concepts}
{M.1.1.2, #Description: KEY CONCEPTS
LIVE IS FAST - 2D sim,  driving scalable 3D visualization
LIVE IS GENERIC - fluids, gases & surface impressions

USAGE: CONSIDERABLY DIFFERENT MODES
A.  simple painter mode - paint footprints and trails  / no fluidsim running
B.  fluidsim mode - advect density to simulate gas/fluid motion
A.  camera facing mode - make 2D look 3D... by constantly turning it towards the player-camera
B.  world facing mode - make 2D look 3D... by extruding it along the Z axis  (rotation locked)
A.  standalone mode - using INTERNAL renderers, data visualized INSIDE the sim area
B.  driving other systems - using EXTERNAL renderers, covering both INSIDE and OUTSIDE the simulated area
}


{S.1.1.3, Stage 3 What is Ninja?}
{M.1.1.3, #Description: WHAT IS NINJA?
A motion-trajectory painter - feeding a 2D fluidsim - feeding Output Materials...  to visualize sim buffers.
We are going to work with NinjaLiveComponent.
- Quit Play
- Select the nearby NinjaLive Actor
- Go to Actor Details Panel
- Select NinjaLiveComponent
- Look at the "Live" Parameter-Groups (eg.: "LiveCore") & Params (eg.: "SimSpeed")

EXPERIMENT!
- Try to increase/decrease the PERSISTENCY of the painter brush strokes!
/LiveComponent /LiveInputFields /PersistencyOfFieldAndPointData = 1
- Ninja is in "Simple Painter" mode - Try to enable/disable Fluidsim!
/LiveComponent /LiveCore /SimplePainterMode = FALSE/TRUE
- Change the Output Material!
/LiveComponent /LiveOutputMaterials /PrimaryOutputMaterialSelected = 2
- Change the Camera Facing setup to World Facing!
/LiveComponent /LiveCore /CameraFacing = FALSE
- Visualize the volume, where interaction is calculated!
/LiveComponent /LiveCore /ShowExtents = TRUE
- Vertically reduce the Interaction Zone!
/LiveComponent /LiveCore /ExtentsXYZ = 5 , 5,  0.5

Data pipeline: what happens backstage?
A. overlap detection, using a volume (InteractionVolume)
B. mapping overlapping object position to the simulation plane
C. paint: write the mapped position and velocity of moving objects to the paint buffer
D. drive fluidsim with the painted density and velocity buffers
E. use raw simulation buffers to drive ANYTHING:
   - simple materials on object surfaces (water, sand)
   - volumetric materials (fog, smoke, clouds)
   - particles
}



{S.1.1.4, Stage 4 Interaction: Points}
{M.1.1.4, #Description: 
INTERACTION:  POINTS

Ninja can track the POSITION of objects - and represent them as POINTS in the sim space.
Based on the method of tracking, we distingish 3 object-types:
(A) destrucible-chunks,  (B) particles,  (C) primitives & skeletal-meshes

A and B are managed by Ninja Core - C is managed by the blueprint that wraps the Core (NinjaLive Actor)
KEY FACT:  to track a given object,  BOTH ninja and the tracked object should be prepared.

A. Interaction with Destrucibles: drive.google.com/file/d/1R_ORy-APBXsK-9w-U0W0GHSvEbdw8ofg
B. Interaction with Particles: drive.google.com/file/d/1xHUirZpq0iRMx9_DThIpviWREt62QaI0
C. Interaction with Primitives & SkeletalMeshes: 2 methods:    OBJECT CLASS based or TAG based
\-----------
OBJECT CLASS based interaction: (ninja setup, object setup)
NINJA SETUP
/NinjaLive ACTOR Details (not component details!) /LiveInteraction /OverlapFilters:

  - Object type: WorldStatic, WorldDynamic, PhysicsBody, Pawn, Vehicle
  - Bone name: Precisely defined

OBJECT SETUP
Actor /MeshComponent /Collision /Generate Overlap Events = TRUE
Actor /MeshComponent /Collision /Collision Presets /Object Type: WorldStatic, WorldDynamic, PhysicsBody, Pawn, Vehicle

Note-1:   ninja Object Type filter   AND   Object Type should match!
Eg.: ninja set to read PhysicsBodies - and object CollisionPresets = PhysicsBody

Note-2:  ninja is reading BONES as point data...  ONLY,  IF Object is SkeletalMesh and Collision Presets /Object Type = PAWN or VEHICLE

\-----------
TAG based interaction:  (ninja setup, object setup)
NINJA SETUP
/NinjaLive Actor Details /LiveInteraction /Track Actor Primitive Components With Tag
/NinjaLive Actor Details /LiveInteraction /Track Actor SkeletalMesh Components With Tag

OBJECT SETUP
Actor Details Panel /Tags

Put simply:  Tag an Actor. Let Ninja know about the Tag.

See dedicated "Class" and "Tag" based interaction tutorial setups:
/Content /FluidNinjaLive /Levels /_Starter /Tutorial02_Inputs_Interaction.umap / STAGE 8-11

\-----------
TRACKING POINTS - PROS AND CONS

PRO:  we could track points in a volume.
           Points do not have to touch/cross the 2D sim plane
           in order to be mapped to sim space.

CON:  using points, we can not represent the shape of objects.

Ideal usecase: objects interacting with a volume. Eg.: exploding debris chunks, particle-sources for smoke and fire...
...and any other case when we don't need exact shapes. E.g. pawn running in water, interaction around the feet.
Point Tracking is compatible with Camera Facing and World Facing setups too.
}



{S.1.1.5, Stage 5 Interaction: Fields}
{M.1.1.5, #Description: 
INTERACTION:   FIELDS (see Tutorial02_Inputs_Interaction.umap)

Ninja can read FIELDS generated by objects - and use the fields to represent object SHAPE, 
velocity, curvature, height... etc. in the sim space.
We distingish 4 object-types - each one generating a different kind of field:

(A) Static Meshes,  (B) Splines,  (C) Landscapes,  (D) Destructibles

A. Static Meshes generate Signed Distance Field (SDF). This could be used to reconstruct object shape and velocity.
On the ninja side, we set a switch / and provide ninja with a Tag. Only TAGGED meshes are being read:
/LiveComponent /LiveInputFields /MeshFields /EnableMeshDistanceFieldReader = TRUE
/LiveComponent /LiveInputFields /MeshFields /UseTaggedMeshesAsSDFInput
On the object side: we TAG objects under the Actor Details "Tags" menu.

B. Splines generate a directional field. This could be used to determine flowing direction along the spline.
(see the two included RIVER levels!)
On the ninja side, we set a switch / and provide a tag:
/LiveComponent /LiveInputFields /SplineFields /EnableSplineReader = TRUE
/LiveComponent /LiveInputFields /SplineFields /GetSplineComponentsFromTaggedActors
On the object side: we TAG objects under the Actor Details "Tags" menu.

C. Landscapes generate height field. This could be used to align the sim with the surface + determine flowing direction.
(see Tutorial03_KeyConceptsForWater.umap / STAGE 2)
On the ninja side, we set a switch: /LiveComponent /LiveInputFields /HeightFields /EnableHeightField = TRUE
On the object side: nothing to do - landscapes automatically expose height, if queried

D. Destructible chunks generate SDF. This could be used to reconstruct chunk shape and velocity.
See this text file to learn: drive.google.com/file/d/1R_ORy-APBXsK-9w-U0W0GHSvEbdw8ofg

\-----------
READING FIELDS - PROS AND CONS

PRO:  we can represent the exact shape of objects

CON:  objects must intersect/touch the 2D sim plane in order to be sampled. 
CON: Skeletal Meshes can NOT generate fields. But, we can parent StaticMeshes to them!

Ideal usecase: objects interacting with a surface. E.g. impressions in sand, impact on water.
We utilize Field Reading only with World Facing setups.
}


{S.1.1.6, Stage 6 Components of NinjaLive Actor}
{M.1.1.6, #Description: 
COMPONENTS of  NinjaLive Actor      ...and their role in Overlap Detection
A.  NinjaLive Component
B.  Interaction Volume Component
C.  Activation Volume Component

A. NINJALIVE COMPONENT: Contains most ninja functions, EXCEPT overlap detection of Primitives and Skeletal Meshes.
Primitive & Skeletal Mesh overlap-detection is managed by NinjaLive ACTOR, using the InteractionVolume.

Live COMPONENT could be added to ANY Actor / could work WITHOUT NinjaLive Actor - with one LIMITATION: 
without Live Actor, the Component loses the overlap detection feature for Primitives & Skeletal Meshes

Note: interacting with Particles, Destructibles and all kind of Fields is managed by Live Component alone / Live Actor is not needed.
As an alternative option for using LiveComponent WITHOUT Live Actor - and STILL track Primitives & Skeletal Meshes:
We could continuously track (no overlap detection) Primitive & Skeletal Mesh Components of the OWNER ACTOR,
using the features under this menu option:
/LiveComponent /LiveInputPoints /InteractionWithOwner

B. INTERACTION VOLUME: Standard Unreal TriggerBox - we use it to detect overlapping Primitives and Skeletal Meshes.
Collected data is forwarded to Live Component every frame.
Live Actor /LiveInteraction

C. ACTIVATION VOLUME: Standard Unreal TriggerBox - we use it to initiate simulation sleep/wake, driven by the overlap (proximity) of a user defined agent (typically: the player)
Live Actor /LiveActivation

Note: on THIS level, every setup is player-activated: setups wake up as we appoach them.
Related setting:
/LiveComponent /LiveCore /Performance /PauseSimWhenNotVisible

ACTIVATION vs MOVIE RENDER QUEUE

Cinematic Camera is usually not recognized as "player" / could not trigger Activation Volume.
We better switch OFF Proximity based Activation completely before recording a sequence!

Also, see LIVE-1 Manual Chapter 23:  Sequencer and MovieRenderQueue
LIVE-2 Sequencer and MovieRenderQueue text: https://drive.google.com/file/d/1idy566GQdO9vldMv5ju6oJFx9S6UGwGe

\-----------
InteractionVolume Size  vs  Sim Extents

RECAPPING A KEY STATEMENT:   NinjaLive Component contains most ninja functions, EXCEPT overlap detection 
of Primitives and Skeletal Meshes - this is managed by NinjaLive ACTOR, using the InteractionVolume.

CONSEQUENCE:   InteractionVolume is used EXCLUSIVELY to determine the volume, where the detection 
of Primitives and Skeletal Meshes happens. InteractionVolume has NOTHING TO DO with simulation area size.

We can define the SIZE of InteractionVolume at:
/NinjaLive Actor /LiveInteraction /InteractionVolumeSize

It is the NinjaLive COMPONENT, where we define the size (extents, scale) of the simulated area:
NinjaLive Component /LiveCore /ExtentsXYZ

"ExtentsXYZ" also defines the volume where input data is handled:
  Outside "ExtentsXYZ" both POINT and FIELD input is REJECTED.

KEY MESSAGE: it is the ExtentsXYZ parameter in NinjaLive Component, 
that defines the volume....

(A) where input data is handled
(B) where simulation happens, 
(C) where INTERNAL RENDERERS could visualize the sim
}




{S.1.1.7, Stage 7 Transforms}
{M.1.1.7, #Description: 
TRANSFORMS

SCALING SIM COMPONENTS
Sim Components are scaled by DEDICATED PARAMS at Actor and Component Details Panel.
/NinjaLive Actor /LiveActivation /ActivationVolumeSize
/NinjaLive Actor /LiveInteraction /InteractionVolumeSize
/LiveComponent /LiveCore  /ExtentsXYZ

DO NOT scale the actor or the components using the "scale transform". Always keep the scale transform value on 1!

SCALING, EXAMPLE: Say, we'd like to double the simulation size on the X axis
- Select NinjaLive Component
- Find LiveCore param group at Component Details
- Double the X component of "ExtentsXYZ" param
- Double the "Resolution X" param
- Select Ninja Actor
- Find LiveInteraction param group at Actor Details
- Double the X component of "InteractionVolumeSize" input field

DO NOT rotate actors to get the intended side-ratios. E.g. there is a ninja setup with 2:1 side proportions, but we want 1:2. Instead of rotating it 90', re-set the proportions!
\-----------
ROTATION OF SIM COMPONENTS
1. Setups switched to CameraFacing Mode are ignoring 
Actor & Component rotation. This is obligatory.
/LiveComponent /LiveCore /CameraFacing = TRUE

2. WorldFacing (WorldAligned) setups also ignore Actor and Component Rotation, by default. 
But we can switch this on / off:
/LiveComponent /LiveCore /IgnoreSystemRotation = TRUE / FALSE

While "IgnoreSystemRotation" makes NinjaLiveComponent immune 
to Owner Actor Rotation... other (ninja driven) components 
of the same owner Actor are effected. For example:

- Niagara Particle System Components
- Volumetric Renderers

To keep all components World-aligned, it is advised to set NinjaLive Actor's rotation transform to ABSOLUTE

3. There are cases when we want to rotate setups, and work in LOCAL space (as opposed to working in WorldSpace).
We can do this:  see SETUP-C, above!
/LiveComponent /LiveCore /IgnoreSystemRotation = FALSE
/LiveComponent /LiveCore /WorldSpaceOffset /QuantizerStepSize = NoSimBufferOffset

\-----------
POSITION

Regarding the XY position of Live Component: there are no tricks.
Z position is special: see Stage 8!

Let us discuss the World-Position of sim buffers.
(buffers are like a "texture", to store patterns generated by the sim )
The simulation could be in two states:

LOCAL SPACE
When running in LOCAL SPACE, the visible sim patterns move together with Live Component. See SETUP-C above!
In most cases, this does not look realistic. Think ripples in shallow water - the character should "leave them behind" as it moves forward. Ripples moving together with the character would look silly.

WORLD SPACE
When the simulation is running in WORLD SPACE, ninja is "pinning" sim buffers to the world, the visible patterns keep their position in the World, as if the moving Live Component is "leaving them behind". This behavior is the ninja default / looks realistic.

See SETUP-A and B above!
/LiveComponent /LiveCore /WorldSpaceOffset /QuantizerStepSize = TextureOffsetAutomatic
}

{SE.1.1.7.1, Setup A World Facing - World Space}
{M.1.1.7,.1 #Description: 
- Ignores user defined rotation (aligns with World XYZ)
/LiveComponent /LiveCore /IgnoreSystemRotation = TRUE
- Sim buffers "pinned" to World Space
/LiveComponent /LiveCore /WorldSpaceOffset /QuantizerStepSize = TextureOffsetAutomatic

This setup mode is typical when we simulate large, spatially fixed fluids: like a lake, or low lying fog over the ground.
FREQUENTLY USED!
}
{SE.1.1.7.2, Setup B World Facing Rotatable - World Space}
{M.1.1.7,.2 #Description: 
- Respects user defined rotation
/LiveComponent /LiveCore /IgnoreSystemRotation = FALSE
- Sim buffers "pinned" to World Space
/LiveComponent /LiveCore /WorldSpaceOffset /QuantizerStepSize = TextureOffsetAutomatic

We do not really use this combo.
WorldSpace setups usually align with WorldXYZ... see "A" on the left.
RARELY USED.
}
{SE.1.1.7.3, Setup C World Facing Rotatable - Local Space}
{M.1.1.7,.3 #Description: 
- Respects user defined rotation
/LiveComponent /LiveCore /IgnoreSystemRotation = FALSE
- Sim buffers "pinned" to Local Space
/LiveComponent /LiveCore /WorldSpaceOffset /QuantizerStepSize = NoSimBufferOffset

We use this one rarely, mostly for small, local decor vfx 
that does not move and rotated to a location-specific angle.
RARELY USED.
}
{SE.1.1.7.4, Setup D World Facing Rotatable  - Density Local Space - Velocity World Space}
{M.1.1.7,.4 #Description: 
- Respects user defined rotation
/LiveComponent /LiveCore /IgnoreSystemRotation = FALSE
- Sim buffers in Local Space
/LiveComponent /LiveCore /WorldSpaceOffset /QuantizerStepSize = NoSimBufferOffset
- Fluid Inertia is being calculated in World Space
/LiveComponent /LiveSimulation /Advanced /VeloFromSimAreaMotion = 1

This setup mode is typical when we simulate small, moving 
fluid-containers: like a cauldron of water being pushed by the player.
RARELY USED.
}
{SE.1.1.7.5, Setup E Camera Facing - Density World Space - Velocity World Space}
{M.1.1.7,.5 #Description: 
- Ignores user defined rotation (aligns with Camera Plane)
/LiveComponent /LiveCore /CameraFacing = TRUE
- Sim buffers "pinned" to World Space
/LiveComponent /LiveCore /WorldSpaceOffset /QuantizerStepSize = TextureOffsetAutomatic
- Fluid Inertia is being calculated in World Space
/LiveComponent /LiveSimulation /Advanced /VeloFromSimAreaMotion = 1

This setup mode is typical when we simulate small fluid-sources moving
in a "fixed medium": like a handheld torch in the air - as the player moves.
FREQUENTLY USED!
}
{SE.1.1.7.6, Setup F SimplePainter Local Space}
{M.1.1.7,.6 #Description: SimplePainter Mode
Local Painter / Fixed position Container
}
{SE.1.1.7.7, Setup G SimplePainter World Space - Quantizer Off}
{M.1.1.7,.7 #Description: SimplePainter Mode
WorldSpace Painter, Quantizer OFF

Notice the BLURRING. This is the side-effect of texture (re)sampling & interpalotation, as we sample the paint buffer
during world-space offset, every frame.

This can be avoided by...
(1) moving the sim in texel-sized discrete steps
(2) sampling the buffer without interpolation

The 1+2 combo effectively reduces buffer blurring. We could print footsteps, wheeltracks without loosing fidelity.
}
{SE.1.1.7.8, Setup H SimplePainter World Space - Quantizer On}
{M.1.1.7,.8 #Description: SimplePainter Mode
WorldSpace Painter, Quantizer ON (Quantizer is ON, by default!)
/LiveComponent /LiveCore /WorldSpaceOffset /QuantizerStepSize = 1 unit
}



{S.1.1.8, Stage 8 Surface Alignment and Z-position, Internal Render, External Render}
{M.1.1.8, #Description: 
SURFACE ALIGNMENT and Z-POSITION
We are frequently using ninja to handle large areas: terrain surfaces, water bodies, fog layers.
We are combining THREE techniques to achieve this:

1. External Rendering: to generate passive patterns outside the sim area - explained on the RIGHT >>
2. WorldSpace Offset: to make the simulated patterns "pinned to world space"  - explained on the LEFT <<
3. Surface alignment: to make simulated patterns follow the landscape... "pinned to the surface on the Z axis", with other words.

Experiment:  What happens if we "un-pin"the sim on the Z-axis? Please select the Ninja Actor  attached to the nearby pawn. We are going to switch OFF a feature:
/LiveComponent /LiveInputFields /HeightFields /EnableHeightField = FALSE

Also, we'd like to possess the pawn for the experiment:  please follow the instructions placed besides the pawn.
What we see:  the simulated area (and the visualization mesh) are following the pawn on the vertical axis.

LOOKS GOOFY.

LIVE-2 uses the concept of "HEIGHTFIELD" to describe the altitude of surface below the sim area.
LIVE-2 makes both (A) Interactions and (B) Visualization aligned with the heightfield... IF there is available heightfield.

The topics of surface alignment is complex - please visit the dedicated level to learn more:   
Tutorial03_KeyConceptsForWater.umap / SECTION-2

Before moving on to the next topic: let us remember a LEGACY method from LIVE-1, which has been used to "pin the simulation vertically" - Z-LOCK
We don't use it anymore - but you can test it. Make sure "EnableHeightField" = FALSE, then:
/LiveComponent /LiveCore /Zlock /MovementLockedOnAxis = Z

\-----------
INTERNAL RENDER
NinjaLive Component comes with built-in methods to visualize sim results:

   - Mesh Renderer
   - Volumetric Renderers (HVOL, FVOL, SVOL)

Renderers could be accessed at:
Live Component /LiveOutputInternalRenderers /...

PRO: When using internal render, we don't have to set up additional components or direct-drive external actors. Also, internal renderers are covered by the Preset System: a preset could save/load the complete state of Live Component, including Internal Renderers. So, it is easy to spawn a LiveComponent with internal renderer.

CON: Internal Renderers cover / visualize only the simulation area. (Sim area is defined by "LiveCore /ExtentsXYZ").
Internal Renderers can not be used to cover large areas (like a sea-surface), or control komplex setups (like a landscape surface).

Ideally, we use Internal Renderers for small scale, local effects, like: a handheld torch, a pool of water, a bonfire with smoke, dust around the feet of a character or car-tyres, a magic portal, a waterfall... etc
\-----------
EXTERNAL RENDER - "DISPLAY"
We are talking about "external" rendering, when visualization requires 
an other component or actor. NinjaLive Component could be used
to control these:

   - Meshes, Spline Meshes
   - Particle Systems
   - Landscape Components
   - Procedural Mesh Generators for water and foliage
   - Volumetric Renderers (CVOL, HVOL, FVOL, SVOL)

External renderers are usually being utilzed, when we'd like to handle 
large areas - bigger then the simulation area itself.

The functions to utilize External Renderers are located at:
Live Component /LiveOutputMaterials
Live Component /LiveOutputParams
Live Component /LiveOutputExternalRenderers

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

UTILITIES FOR EXTERNAL RENDERING
FluidNinjaLive /Utilities /DriveExternalSystemsWithSimData
FluidNinjaLive /NiagaraOutput /SurfaceAlignedMeshes
FluidNinjaLive /NiagaraOutput /SurfaceAlignedParticles
FluidNinjaLive /NiagaraOutput /SurfaceAlignedVolumes
}



{S.1.1.9, Stage 9 Direct Drive}
{M.1.1.9, #Description: 
DIRECT DRIVE
The most simple way to control External Renderers is DirectDrive:
we apply ninja generated Dynamic Material Instances to TAGGED objects. 

The Mat.Instance is receiving params from ninja every tick. Params include Sim Position & Scale - which is needed for WorldSpaceOffset in the material.
1. TAG the Target System using Actor Tags
2. Let Ninja know about the tag, at the below param groups:
/LiveComponent /LiveOutputMaterials
/LiveComponent /LiveOutputExternalRenderers

Note: when driving niagara systems, we usually do NOT apply a Material to them, instead, we are directly sending the needed Parameters (like Sim.Position)

EXPLAINER: "THE DISPLAY CONCEPT"
Simulation output is rendered every frame into temporary "buffers" (RenderTargets). Buffers are like a texture. We could map these textures to any target object, anywhere on the level. Target objects work like a DISPLAY: we use them to visualize sim output. Notice: it is NEVER the display that interacts with objects: it is the simulation.

Please have a look at the nearby setup on STAGE 9.

A simulation on the left - and three DISPLAYS on the right. Notice: the three displays (external renderers that visualize sim output) are spatially DETACHED from the sim: the actual sim/interaction happens somewhere else, NOT where the visualization is. In most cases, we want to MATCH the sim and the display, so interactions with objects line up with their visual consequences: we throw a pebble in a lake, and we see ripples, where the pebble hits the surface. 

Typically, the simulation is attached to the MOVING player (so the near environment is always interactive).
Typically, the display is a large (infinite) object, like sea-water, or desert-sand, that is spatially LOCKED.

STAGE 8 is demonstrating the "moving sim / locked external renderer" case. Have a look!

Recap: sim is small and moving. Display is large and locked. How can we match these two? Answer: WORLD SPACE OFFSET. We are sending data to the Material of the display object (an "Output Material"): raw sim buffers, sim scale, sim pos. In the Output Material, we scale the raw sim buffers to the World-Space Size of the sim...
...and we offset the buffers in World Space where the simulation is. So the display lines up with the sim - despite being an infinite surface. (Passive Patterns outside the sim area: see STAGE 8)

Exception: IF the display's transform (pos, scale, rotation) matches the sim transform, no WorldSpace Offset needed.
This is usually the case when we use INTERNAL Renderers.... or External Renderers parented to the sim, and scaled to sim-size.
}

{S.1.1.10, Stage 10 Output Materials}
{M.1.1.10, #Description: OUTPUT MATERIALS
Fluid simulation state for a given frame is calculated in discrete steps. Data for a given step is stored in a BUFFER, a temporary storage similar to a 2D texture, with 2-4 channels (RGBA).

We can expose the full set of internal buffers to an OUTPUT MATERIAL in order to VISUALIZE the simulation. The most important 3 buffers are:
1.  PaintBuffer (RGBA):                       Paint Velocity (RG) + Density (B) + HeightField (A)
2.  VelocityDensityBuffer (RGBA):      Sim Velocity (RG) + Density (B) + WetMap (A)
3.  PressureDivergenceBuffer (RG):   Sim Pressure (R) + Divergence (G)

A material is provided with the buffers IF (A) contains Texture Objects using the above naming convention and (B) the material is added to a ninja "OutputMaterials" array:
/LiveComponent /LiveOutputMaterials

Buffers could be passed to Niagara for Sampling, using User.Parameters:

- NinjaPaintBuffer
- NinjaVelocityDensityBuffer
- NinjaPressureDivergenceBuffer

To learn more about texture object-forwarding to Materials & Niagara,  open:
 NinjaLiveComponent Blueprint / MODULE023

Sim position and scale params are also provided to Materials/Niagara as vector-3:

- TraceMeshPos
- TraceMeshPosDouble
- TraceMeshSize

"TraceMesh" is a legacy naming from the LIVE-1 period. We keep it, as a memory of the old times.

\-----------
EXPOSING RENDERTARGETS
A RenderTarget is like a 2D texture. Ninja writes sim buffers to RenderTargets in order to expose them to Output Materials & External Renderers.

STAGE 9 demonstrates DIRECT DRIVE, a method where we SKIP intermediate, on-disk RenderTargets and manual Material handling: ninja automatically forwards internal, dynamically generated RenderTargets to Output Materials, and automatically assigns materials to target systems. This is the default behavior.

On STAGE 10, we are writing sim buffers to on-disk RenderTargets. Then, we add these RenderTargets manually to Materials as Texture Input. This is a manual method to make sim buffers available.
/LiveComponent /LiveOutputRenderTargets

Notice how specific sim buffers could be visualized very differently:

VELOCITY field is perfect to...
       (A) accelerate particles
       (B) bend foliage
       (C) drive flowmaps

DENSITY could be used as...
      (A) heightmap for Volumes
      (B) alpha mask for translucency

PRESSURE is perfect for...
     (A) height-displacement
     (B) refraction
}

{S.1.1.11, Stage 11 Output Material Tricks}
{M.1.1.11, #Description: OUTPUT MATERIAL TRICKS
On this stage, we are presenting "fake" methods to add detail to the sim.buffers
or make the visualization look 3D (and it is still 2D):

- Detail Flow Mapping
- Parallax Occlusion Mapping
- 2D Raymarching

FLOW DETAIL MAPPED SIM DENSITY
- sim velocity is driving the advection of static noise in the Output Material
- sim density used as a mask
See the "FlowMap" param group in the Output Material.

INVERTED SIM DENSITY
Some shaders need inverted input. Parallax Occlusion Mapping (POM) is a typical example
Ninja offers a function to invert density before writing it to a RenderTarget:
/NinaLiveComponent /LiveOutputRenderTargets /SimVelocityDensityAndWetMap /InvertFluidDensity
The paint buffer could be inverted too!
/NinaLiveComponent /LiveOutputRenderTargets /PaintVelocityDensityAndElevation /InvertPaintbufferDensity

2D RAYMARCHING
Parallax Mapping AND Raymarching on RAW Sim Density using Level MainLight as source
Blueprint: /NinaLiveComponent /LiveLegacy /Raymarching /LightDirectionProvider = Level MainLight
Material: /Output Material Parameters /XFakeSelfShadow /RayMarching = TRUE
}


{S.1.1.12, Stage 12 Modularity: Building Actors From Components}
{M.1.1.12, #Description: MODULARITY: BUILDING ACTORS FROM COMPONENTS
All elements of a komplex setup in a single Actor.

Floating Balls: Niagara Component added to the Host Actor.
Note: NinjaLiveComponent automatically looks up Niagara Components
IN THE SAME host / owner Actor. No tagging needed.
In case the target Niagara System is in a separate Actor,
tagging is needed to drive it.

Water Mesh: Internal Mesh Renderer - Default "flat plane" mesh replaced with a box
/LiveComponent /LiveOutputInternalRenderers /Mesh /VisualzationMesh

Mist: Internal Volume Renderer
/LiveComponent /LiveOutputInternalRenderers /SVolume
}


















#### {L.1.2, Tutorial02_Inputs_Interaction.umap, /Content /FluidNinjaLive /Levels /Starter}

{S.1.2.0, Stage 0 INTRO}
{M.1.2.0, #Description:  SIMULATION INPUTS and INTERACTION

Input Data Types:
1. FIELDS /BITMAPS
2. FIELDS /OBJECTS /MESH SDF
3. FIELDS /OBJECTS /SPLINES CURVATURE
4. FIELDS /OBJECTS /LANDSCAPE ELEVATION
5. FIELDS /OBJECTS /DESTRUCTIBLE CHUNKS SDF (geometry collection)
6. POINTS /PARTICLES
7. POINTS /DESTRUCTIBLE CHUNK PIVOTS
8. POINTS /OBJECT PIVOTS and BONES
}

{S.1.2.1, Stage 1 Density Input from BITMAPS }
{M.1.2.1, #Description: }
		{SE.1.2.1.1, Setup A Texture}
		{M.1.2.1.1, #Description: 
Density input from bitmap: Texture
/LiveComponent /LiveInputFields /Bitmaps /VelocityDensityInputTexture
}
		{SE.1.2.1.2, Setup B RenderTarget, Noise}
		{M.1.2.1.2, #Description: 
Density input from bitmap: RenderTarget
/LiveComponent /LiveInputFields /Bitmaps /VelocityDensityInputRenderTarget

Method: a material generating dynamic, procedular noise, is being written to a RenderTarget every frame, and the RenderTarget is used as ninja sim density input.
- Select Actor "NoisePlane"
- Look up the "WriteMaterialsTo RenderTargets" Component
- Notice the Material generating noise, and the RenderTarget
}
		{SE.1.2.1.3, Setup C RenderTarget, SceneCapture}
		{M.1.2.1.3, #Description: 
Density input from bitmap: RenderTarget
/LiveComponent /LiveInputFields /Bitmaps /VelocityDensityInputRenderTarget

Method: SceneCaptureCamera output is being written to RenderTarget every frame, and the RT is used as ninja sim density input.
}
{S.1.2.2, Stage 2 Density and Velocity Input from 2 Bitmaps}
{M.1.2.2, #Description: 
Density and Velocity inputs from 2 separate bitmaps
/LiveComponent /LiveInputFields /Bitmaps /VelocityDensityInputTexture
/LiveComponent /LiveInputFields /Bitmaps /VelocityOnlyInputTexture
Note: RenderTarget input also supported
}
{S.1.2.3, Stage 3 Density and Velocity Input from 1 Bitmap}
{M.1.2.3, #Description: 
Combined velocity and density input via SINGLE bitmap
/LiveComponent /LiveInputFields /Bitmaps /VelocityDensityFieldFromTexture /TryToReadVelocityFromRGchannels
}
{S.1.2.4, Stage 4 Static Collision Mask from Bitmap}
{M.1.2.4, #Description: 
Static Collision Mask from Bitmap
/LiveComponent /LiveInputFields /Bitmaps /CollisionMaskFromTexture
For Dynamic Collision Masking see STAGE 5E, where MEsh SDF is used as Collision Mask.
}




{S.1.2.5, Stage 5 Density and Velocity Input from OBJECTS FIELDS }
{M.1.2.5, #Description: 
DENSITY AND VELOCITY INPUT: OBJECT-FIELDS
Ninja can read FIELDS generated by objects - and use the fields to represent object SHAPE, velocity, curvature, height... etc. in the sim space. We distingish 4 object-types - each one generating a different kind of field:
(A) Static Meshes,  (B) Splines,  (C) Landscapes,  (D) Destructibles
}
		{SE.1.2.5.1, Setup A Mesh SDF}
		{M.1.2.5.1, #Description: 
Static Meshes generate Signed Distance Field (SDF). This could be used to reconstruct object shape and velocity.
On the ninja side, we set a bool switch / and provide ninja with a Tag. Only TAGGED meshes are being read:
/LiveComponent /LiveInputFields /MeshFields /EnableMeshDistanceFieldReader = TRUE
/LiveComponent /LiveInputFields /MeshFields /UseTaggedMeshesAsSDFInput
On the object side: we TAG objects under the Actor Details "Tags" menu.
}
		{SE.1.2.5.2, Setup B Spline}
		{M.1.2.5.2, #Description: 
Splines generate a directional field. This could be used to determine flowing direction along the spline.
(See Tutorial06_SplineBasedRivers.umap)
On the ninja side, we set a bool switch / and provide a tag:
/LiveComponent /LiveInputFields /SplineFields /EnableSplineReader = TRUE
/LiveComponent /LiveInputFields /SplineFields /GetSplineComponentsFromTaggedActors
On the object side: we TAG objects under the Actor Details "Tags" menu.
}
		{SE.1.2.5.3, Setup C Landscape}
		{M.1.2.5.3, #Description: 
Landscapes generate height field. This could be used to align the sim with the surface + determine flowing direction.
(See Tutorial03_KeyConceptsForWater.umap / Section 2)
On the ninja side, we set a bool switch: 
/LiveComponent /LiveInputFields /HeightFields /EnableHeightField = TRUE
On the object side: nothing to do - landscapes automatically expose height, if queried.

Surface aligned = landscape aligned: 
1. fluid visualization-mesh is aligning with the landscape surface
2. landscape curvature influences fluid velocity-field
3. overlap detection is also aligned with the surface!
}
		{SE.1.2.5.4, Setup D Destructibles}
		{M.1.2.5.4, #Description: 
Destructible Chunks as SDF (Technically: Geometry Collection)
Destructible chunks generate distance field. This could be used to reconstruct chunk SHAPE and velocity.
Ideal for stamping marks on surfaces - and generate surface aligned volumes.
(See the included "Sand_Destructibles" level / SETUP-3)
Destructible tut raw text: drive.google.com/file/d/1R_ORy-APBXsK-9w-U0W0GHSvEbdw8ofg
See STAGE 7 for Destructible Chunks as Point input!
}
		{SE.1.2.5.5, Setup E Dynamic Collision Mask from Mesh SDF}
		{M.1.2.5.5, #Description: 
Dynamic Collision Mask from Mesh SDF
/LiveComponent /LiveInputFields /MeshFields /UseAsCollisionMask
See STAGE 4 for static, bitmap based Collision Mask.
}



{S.1.2.6, Stage 6 PARTICLES}
{M.1.2.6, #Description: 
Reading particle position and velocity through DATA CHANNELS:
/LiveComponent /LiveInputPoints /DataChannelPointReaderEnabled
On the particle side: a "Write to DataChannel" module should be added to the Emitter stack.

Learn more here: SETTING UP A PARTICLE EMITTER AS LIVE-2 SIMULATION INPUT
URL: drive.google.com/file/d/1xHUirZpq0iRMx9_DThIpviWREt62QaI0
}
		{SE.1.2.6.1, Setup A Particles Mapped on a World Facing surface}
		{SE.1.2.6.2, Setup B Particles Mapped on a Camera Facing surface}

{S.1.2.7, Stage 7 DESTRUCTIBLES as Points}
{M.1.2.7, #Description: Destructibles as Points
Destructible chunk POSITION and velocity could be accessed to generate brush strokes. 
No shapes: each chunk is represented by a circle (brush stroke) in the PaintBuffer.
/LiveComponent /LiveInputPoints /DestructiblePointReaderEnabled

WAYS OF USING DESTRUCTIBLES AS POINTS:
1. While stamping marks on surfaces is a possible usecase, the "Destructibles as SDF" gives better result.
2. In case we need to generate dust-puffs above the surface, or ripples on water: the "Destructibles as Points" is the ideal approach (no precise shape needed). See the included SAND & SNOW levels!
3. There is one case, where the "Destructibles as SDF" approach is completely useless: when we need to track destructibles IN A VOLUME - typically, when aerial explosions happen. Read more in the STAGE 7B description!
}
		{SE.1.2.7.1, Setup A Destructibles Mapped on a World Facing surface}
		{M.1.2.7.1, #Description: 
When a destructible set hits the ground, the chunks roll and bounce on the surface - we can say, they are constrained to the surface. For this reason, by sampling the Chunk Mesh SDF - Simulation Plane Intersection, we get a nice representation of their ground-marks (see STAGE 5D). The "destructibles as SDF" is ideal to get precise shapes - while "destructibles as points" method is also useful.
}
		{SE.1.2.7.2, Setup B Destructibles Mapped on a Camera Facing surface}
		{M.1.2.7.2, #Description: 
On this stage we can generate dust and smoke for an exploding destructible.
When a destructible set explodes in the air (as opposed to: hitting the ground, and constrained to a surface), the chunks fly on very divergent trajectories. The "Destructibles as SDF" approach can NOT keep track of the divergent trajectories,
as it detects the CROSS SECTION of (A) the chunks and (B) the simulation plane. The "Destructibles as Points" appoach tracks the chunks in a VOLUME and projects their position to the simulation plane. This is ideal for explosions.
See the included "Fire_Smoke_Explosive" level / Stage 16
}




{S.1.2.8, Stage 8 Objects as Points Intro}
{M.1.2.8, #Description: Objects as Points Intro
Tracking OBJECTS (meshes, primitives) and using their pivot position & velocity
as simulation input is probably the most typical usecase for ninja.

1. In this case (on Stage 8) we are tracking the pivot of a moving sphere in a Volume...
2. ...and mapping the captured position onto a Camera Facing simulation plane

Learn more about tracking objects & bones as Point Inputs by carefully studying the followig stages (9-12).

\-----------
A GENERAL INTRODUCTION TO STAGES 9-12: Tracking objects using TAGS and CLASS FILTERS

NinjaLive ACTOR could track arbitrary objects - using the InteractionVolume.
We could tell NinjaLive Actor what kind of objects to track - using TWO methods 
Demonstrated on STAGES 9-12. Also see STAGE 4.


METHOD 1: CLASS FILTERS
We are telling ninja to track certain "Object Types" 

- On the "ninja side" the object type filter could be adjusted under:
/NinjaLive Actor Details /LiveInteraction /OverlapFilterInclusiveObjectType

- On the "target side" (the objects to be tracked) this could be adjusted under:
/Component Details /Collision /CollisionPresets /ObjectType  (should match obj.type set on the ninja side)
/Component Details /Collision /GenerateOverlapEvents = TRUE


METHOD 2: TAGS
We are telling ninja to track tagged Primitive or SkeletalMesh Components

- On the "ninja side" the tag filter could be adjusted under:
/NinjaLive Actor Details /LiveInteraction /Track Actor Primitive Components with tag
/NinjaLive Actor Details /LiveInteraction /Track Actor SkeletalMesh Components with tag

- On the "target side" (the objects to be tracked) tags could be added at:
Component Details Panel /"Tag" input field
/Component Details /Collision /GenerateOverlapEvents = TRUE


IMPORTANT
Class Filters and Tags are ADDITIVE. When used together, the results from BOTH filtering
are added to the same list. For example: we are tracking ALL StaticMesh type objects using a class filter
and ONE specific Pawn (SkeletalMesh) via tagging. See provided the examples.
}

{S.1.2.9, Stage 9 Objects as Points Using CLASS FILTERS}
{M.1.2.9, #Description:
Interaction managed at Live ACTOR Details Panel.
Collecting Points using CLASS filters.

On this stage, Ninja is set to detect DynaMesh and Pawn type objects only, at:
/NinjaLive Actor Details /LiveInteraction /OverlapFilterInclusiveObjectType

Interactors are set to various "Object Types"
/Component Details /Collision /CollisionPresets /ObjectType
/Component Details /Collision /GenerateOverlapEvents = TRUE
}

{S.1.2.10, Stage 10 Objects as Points Using TAGS}
{M.1.2.10, #Description:
Interaction managed at Live ACTOR Details Panel.
Using TAG filters to track specific components of an Actor

On this stage, Ninja is set to detect tagged Primitive and SkeletalMesh Components
Note: no class filters provided
/NinjaLive Actor Details /LiveInteraction /Track Actor Primitive Components with tag
/NinjaLive Actor Details /LiveInteraction /Track Actor SkeletalMesh Components with tag

Interactor Components are tagged
/Component Details Panel /"Tag" input field
/Component Details /Collision /GenerateOverlapEvents = TRUE
}
		{SE.1.2.10.1, Setup A Single Component}
		{SE.1.2.10.2, Setup B Multiple Components}


{S.1.2.11, Stage 11 Combining Class and Tag Filters}
{M.1.2.11, #Description:
Interaction managed at Live ACTOR Details Panel.
Combining CLASS and TAG filters
IMPORTANT: the two filters behave ADDITIVELY

Ninja is set to detect DynaMesh type objects, using CLASS filters
/NinjaLive Actor Details /LiveInteraction /OverlapFilterInclusiveObjectType

DynaMesh Interactors are set to DynaMesh "Object Types"
/Component Details /Collision /CollisionPresets /ObjectType
/Component Details /Collision /GenerateOverlapEvents = TRUE

Ninja is set to detect tagged SkeletalMesh Components
/NinjaLive Actor Details /LiveInteraction /Track Actor SkeletalMesh Components with tag

SK-mesh Interactor Components are tagged
/Component Details Panel /"Tag" input field
/Component Details /Collision /GenerateOverlapEvents = TRUE
}


{S.1.2.12, Stage 12 Using Class Filters via NinjaLive Component}
{M.1.2.12, #Description: 
Interaction managed at Live COMPONENT Details Panel.
Using CLASS filters via NinjaLive Component

NinjaLive COMPONENT - when added to NON-ninja Actors (on this stage: a PAWN Actor)
is LIMITED to track user defined Components of the OWNER Actor.

No tagging, only class filters.
No overlap detection: only CONTINUOUS tracking.

NinjaLive COMPONENT is set to detect Pawn type Components of the owner, using CLASS filters
NinjaLive Component /LiveInputPoints /InteractionWithOwner /InteractionInclusiveObjType
}


















#### {L.1.3, Tutorial03_KeyConceptsForWater.umap, /Content /FluidNinjaLive /Levels /Starter}

{S.1.3.0, Stage 0 INTRO}
{M.1.3.0, #Description:  KEY CONCEPTS
1      SPARSE & DENSE SETUPS
2      SURFACE ALIGNMENT
	2A   Dense, Height Input:  NONE
	2B   Dense, Height Input:  LANDSCAPE
	2C   Dense, Height Input:  SCENECAPTURE
	2D   Dense, Height Input:  RVT
	2E   Sparse, FLAT
	2F   Sparse, SPLINE
3      EXTENDING THE SIM AREA
4      WAVE GENERATORS

Text: 		drive.google.com/file/d/1EmvshC2BcgM6XIZxl1uEaid00mqY8uwB
Early video: 	youtube.com/watch?v=O57K5Aog7Hs
			(the video has not been made specifically for this level)
}

{S.1.3.1, Stage 1 SPARSE vs DENSE SETUPS}
{M.1.3.1, #Description: 
SPARSE vs DENSE SETUPS, TRADEOFF:

DENSE SETUPS:
PRO:  fluid surface aligns with the underlying surface 
           fluid spreads dynamically, constrained by elevation and obstacles
CON:  the ripples and whitewater generated by interaction are less detailed
           surface alignment works only in the sim area
           requires extra steps to set up surface alignment

SPARSE SETUPS:
PRO:  ripples and whitewater patterns are more detailed
           easy to set up / no height data required
CON:  lives on user defined surfaces (planes, bended planes, splines),
           the geometry of underlying surfaces does not matter
           fluid distribution is static (can not spread out dynamically)

KEY PARAM:
/LiveComponent /LiveSimulation /DensityAccumulation = n
To make a DENSE setup, we set DensityAccumulation value: n > 1

The "Sparse" / "Dense" expressions refer to two setup modes of using ninja:
DENSE setups are used exclusively for terrain-flowing (surface aligned) liquids.
SPARSE setups are being used in every other case: fire, smoke, dust, wind - and "flat" water setups

A setup is "dense", if we set the simulation density feedback value to a number larger than one (n>1), and density is constant in the sim area (while the fluid is spreading under constraints). IF n<1, sim density is vanishing by time / density is "sparse" in the sim area.

Consequences of using a DENSE setup:
Once density flooded an area: we can not "add more density" there. In SPARSE setups, we use density to add details to the sim area for example, by using density as a mask for flow-detail-maps (whitewater). With DENSE setups, we can not do this: we use density in "1 bit mode" to mark where the fluid is. The only way we can add details is using sim VELOCITY. Eg. to boost color, or to mask a flow-detail-map. The velocity distibution carries less information / less details, compared to density distibution in sparse setups.
RESULT:  ripples, foam/whitewater in dense setups look LESS detailed, compared to sparse setups.
}
		{SE.1.3.1.1, Setup A Sparse Fluid Setup}
		{M.1.3.1.1, #Description: SPARSE FLUID SETUP, DENSITY IS DECREASING BY TIME}
		{SE.1.3.1.2, Setup B Dense Fluid Setup}
		{M.1.3.1.2, #Description: DENSE FLUID SETUP, DENSITY IS CONSTANT}
		{SE.1.3.1.3, Setup C Sparse Surface Aligned Fluid Setup}
		{M.1.3.1.3, #Description: }
		{SE.1.3.1.4, Setup D Dense Surface Aligned Fluid Setup}
		{M.1.3.1.4, #Description: 
SURFACE ALIGNED / LANDSCAPE ALIGNED: 

1. FLUID VISUALIZATION-MESH IS ALIGNING WITH THE LANDSCAPE SURFACE
2. LANDSCAPE CURVATURE INFLUENCES FLUID VELOCITY-FIELD
3. OVERLAP DETECTION IS ALSO ALIGNED WITH THE SURFACE!

We are using an INTERNAL Renderer for the visualization Mesh:
/LiveComponent /LiveOutputInternalRenderers /Mesh

Key factors of Landscape-alignment:

- ninja reads landscape height and slope (curvature, gradient) under the simulation area
- uses landscape gradient to modify fluid velocity (pushing fluid "downwards")
- ninja forwards the height data to Output Materials, so meshes could be distorted
    by the material to follow the surface and volumes could be extruded along the surface
}
		{SE.1.3.1.5, Setup E Sparse Surface Aligned Fluid Setup driving Volumetrics}
		{M.1.3.1.5, #Description: }
		{SE.1.3.1.6, Setup F Dense Surface Aligned Fluid Setup driving SingleLayerWater}
		{M.1.3.1.6, #Description: 
Both SPARSE/DENSE setups could be height-aligned (surface aligned / landscape aligned).
We use the "sparse + surface aligned" combo mainly for fog, smoke.

DENSE fluids flow downhill too, but accumulation happens at local lows and the final distribution is confined by the terrain. This makes them behave much more like real liquids.

To make interaction and fluid distribution surface aligned, we need to access surface height. Setups on STAGE 2 are showcasing methods to access height data.
}




{S.1.3.2, Stage 2 SURFACE ALIGNMENT}
{M.1.3.2, #Description: 
SURFACE ALIGNMENT - also called  HEIGHT ALIGNMENT,  LANDSCAPE ALIGNMENT
To make interaction and flow surface aligned, we need to construct surface height-field.

DENSE Setups on STAGE 2 are showcasing methods to access world height data:
- No height data: user defined plane (setup A)
- Landscape elevation (setup B)
- Scenecapture depth (setup C)
- Runtime Virtual Texture elevation (setup D)

SPARSE setups exist on user defined surfaces, but height is still needed to align interaction with the surface. 
- Flat Setup (setup "E",)
- Spline Setup (setup "F")

\-----------
SPARSE vs DENSE setups

Q: if density is vanishing in SPARSE setups,  how can we employ sparse setups for water-bodies?
A: by handling the entire simulation area as "filled with fluid", regardless of density.

Q: so... how are we using the density data?
A: to add details - eg.: as a whitewater mask for flow-detail-maps. This is the reason why sparse setups could look more detailed, compared to Dense setups - where we use velocity for details.

Q: How is density used in DENSE setups?
A: we let density accumulate - but impose a constraint on spreading via the the slope-gradient of the terrain (slopes push the fluid). As a result, fluid could spread "downhill" / but not uphill: ideally, it remains in local-lows (gaps, impressions, valleys).

Density is maximal in "filled up" areas  / minimal at every other place. We can use this "one bit" density to dynamically mask water. So it looks like it is spreading.

SPARSE WATER:

- DENSITY DISTRIBUTION DOES NOT MATTER
  SHADER MAKES IT LOOK "LIKE THE ENTIRE AREA IS FILLED"
- MORE DETAILS / DENSITY IS USED TO ADD DETAILS

DENSE WATER:

- DENSITY DISTRIBUTION IS DYNAMIC:
  OCCUPIES LOCAL LOWS /  FLUID CAN SPREAD OUT
- LESS DETAILS / VELOCITY IS USED TO ADD DETAILS

BOTH SETUPS RESPONSIVE (OBJECTS, PAWNS)
}
		{SE.1.3.2.1, Setup A Dense, Height Input NONE}
		{M.1.3.2.1, #Description:
HEIGHT INPUT: NONE
To make interaction and flow surface aligned, we need to access surface height. For a flat surface, we don't even need a height input: we can generate heightfield internally.

GENERATING A FLAT HEIGHT-FIELD AT USER DEFINED ALTITUDE:
/LiveComponent /LiveInputFields /HeightFields /...
   - EnableHeightField
   - Clamping Value
   - ForciblyCreateHeightField

IMPORTANT: setting ClampHeightLowerValues = TRUE, AUTO-FILLS the sim area at "clamping height"! 
- not good for "spreading" water, good for good for instant-fill
- good for EXTENDING the sim area. See STAGE 3!
}
		{SE.1.3.2.2, Setup B Dense, Height Input LANDSCAPE}
		{M.1.3.2.2, #Description:
HEIGHT INPUT: LANDSCAPE
To make fluids surface aligned, we need to access surface height. This setup directly samples Landscape Components.
Sampling Landscape Component is the ninja default. Landscapes are auto-detected, enough to set this param to true:

/LiveComponent /LiveInputFields /HeightFields / EnableHeightField = True
}
		{SE.1.3.2.3, Setup C Dense, Height Input SCENECAPTURE}
		{M.1.3.2.3, #Description:
HEIGHT INPUT: SCENECAPTURE
To make fluids surface aligned, we need to access surface height. In this setup, a SceneCaptureCamera samples scene depth and writes the data to a RenderTarget every frame. We could also bake the depth to a single static texture, and use that as ninja input.

KEY PARAMS:
/LiveComponent /LiveInputFields /HeightFields /EnableHeightField = True
/LiveComponent /LiveInputFields /HeightField /ExternalHeightData /UseExternalHeightData = True
/LiveComponent /LiveInputFields /HeightField /ExternalHeightData /ExternalHeightDataFromRenderTarget = (user defined RT)
/LiveComponent /LiveInputFields /HeightField /ExternalHeightData /ExternalHeightDataNullPoint = (the Z position of capture camera)

SCENECAPTURE: REALTIME OR BAKED ?
Under "ExternalHeightData" there are two input fields: a RenderTarget and a Texture.

We could set up TOP-DOWN-LOOKING SceneCaptureCamera to sample scene depth (in this case: elevation), and write the data to a RenderTarget every frame (or in user defined time intervals!) and we are reading the RenderTarget with height data on the ninja side. This setup is dynamic (moving objects = changing elevation map). In case the landscape does not change: we could also bake the depth to a single static texture and use that as ninja input. Advantage: following the baking, we could remove the SceneCaptureCamera - no resources consumed during game-time!
Con: setup is static / will not respond to height-changes.

Note: there is a dedicated ninja utility - a modified SceneCaptureCamera - to support this process (including BAKING!)
/Content /FluidNinjaLive /Utilities /SceneCaptureCameraUtility.uasset

See this tutorial to learn heightmap-baking:
/FluidNinjaLive/Levels/_Starter/Tutorial04_Presets_Spawning_Caching.umap / STAGE 5
}
		{SE.1.3.2.4, Setup D Dense, Height Input RVT}
		{M.1.3.2.4, #Description: 
HEIGHT INPUT:  RVT
To make fluids surface aligned, we need to access surface height.
This setup directly samples a Runtime Virtual Texture. The RVT is being written by a "Runtime Virtual Texture Volume".
Look up the RVT Volume in the Outliner!

KEY NINJA PARAMS:
/LiveComponent /LiveInputFields /HeightFields /...
 - EnableHeightField = True
 - RVTHeightData /UseRVTAsHeightSource = True 
 - RVTHeightData /RVTAsset: on disk RVT file

KEY EXTERNAL SETUP ELEMENTS:
1. Runtime Virtual Texture (RVT) asset in Content Browser
2. Runtime Virtual Texture Volume placed on Level
3. Objects: Actor Details Panel /Virtual Texture /DrawInVirtualTextures: pick RVT asset
}
		{SE.1.3.2.5, Setup E Sparse, FLAT}
		{M.1.3.2.5, #Description:
SPARSE WATER SETUP ON A FLAT SURFACE
While the surface is defined by the water-mesh itself, we still need to align interaction with the surface.
To make interaction aligned with the flat surface, we could provide ninja with a single altitude value, called "ClampingValue".

KEY PARAMS:
/LiveComponent /LiveInputFields /HeightFields /...
   - EnableHeightField
   - Clamping Value
   - ForciblyCreateHeightField

Notice: with sparse setups, water fills the entire simulation area (and beyond, if we use external meshes)
}
		{SE.1.3.2.6, Setup F Sparse, SPLINE}
		{M.1.3.2.6, #Description:
SPARSE WATER SETUP ON A SPLINE-MESH SURFACE
While the surface is defined by the spline-mesh itself, we still need to align interaction with the surface.
To make interaction aligned with the flat surface, ninja gets data from the spline:

/LiveComponent /LiveInputFields /SplineFields /...
   - EnableSplineReader
   - GetSplineComponentsFrom...

Optionally, we can generate a flat-heightfield, with spline-height added on top - in order to provide PARTICLES with useful height, to align with:

/LiveComponent /LiveInputFields /HeightFields /...
   - EnableHeightField
   - Clamping Value (should be LOWER than the lowest point of our spline)
   - ForciblyCreateHeightField

We can also use spline-height / landscape-height intersection to generate dynamic collision mask for water.
Learn more at this level: Tutorial06_SplineBasedRivers.umap
}


{S.1.3.3, Stage 3 EXTENDING THE SIM AREA}
{M.1.3.3, #Description:
EXTENDING THE SIM AREA
1. Ninja simulation area is finite, usually in the 5-100 meters range.
2. We could attach the sim to the player - so the near background is always responsive.
3. We could infinitely EXTEND the simulated area with PASSIVE (non-simulated) patterns for the far background.
- we need a visualization system that is larger than the sim area, e.g. a mesh array or large volume
- we need to set up Tilemap in the Output Material generate passive patterns

This sim area is NOT Extended by default.
- Follow the instructions to Extend it!    (Step 1-2-3)
- See STAGE 4 for an already extended sim area!

EXTENDING THE SIM AREA, A 3 STEP GUIDE:
STEP 1.
When working with "dense" type water setups, the below param automatically fills the the sim area with density, at the altitude defined by the "Clamping Value" param.
/LiveComponent /LiveInputFields /HeightFields /ClampHeightLowerValue = TRUE
/LiveComponent /LiveInputFields /HeightFields /ClampingValue = user defined altitude
Note: for "sparse" type setups (be it liquid or gas) we don't even need to set "ClampHeightLowerValue" to True.

STEP 2.
We are still using the Internal Mesh Renderer - limited to the sim area. Switching off the internal render:
/LiveComponent /LiveOutputInternalRenderers /Mesh /ForceHideVisualizationMesh = TRUE

STEP 3.
Using the "SurfaceAlignedMeshes" Utility, we could set up an array of tiled meshes larger than the sim area and DirectDrive this array with ninja.

Select ACTOR:   WaterMeshSpawner_Stage3
SET Actor Details Panel /Rendering /Visible = TRUE

The ninja params to drive EXTERNAL SYSTEMS are located at:
/LiveComponent /LiveOutputExternalRenderers
}


{S.1.3.4, Stage 4 WAVE GENERATORS}
{M.1.3.4, #Description:
SIMULATED WAVES - INSIDE SIM AREA, TWO METHODS:

1. USING LANDSCAPE GRADIENT   (EXPERIMENTAL) 
Six key params located at the below parameter group. Read the tooltips to learn how they work:
/LiveComponent /LiveSimulation /WavesFromLandscapeGradient

Enable the wave generator: set "InvertLandscapeGradientUnderClampedHeight" = True

Since ninja has the technology to sample Landscape Components and calculate slope normals ("which way is down"), we can use it as well to figure out "which way is up"  - and our FAKE wavegen does exactly this, below the waterline. We scale uphill vectors with a sine function of the elevation data, so we have pressure waves attacking "uphill". 

PREREQUISITES / LANDSCAPE
(1) Have a Landscape Component below the sim area   (wavegen does NOT work with RVT height!)
(2) Landscape should be evenly ascending towards the waterline: flatland under water results zero gradient, no waves. 

PREREQUISITES / NINJA
(1) Dense type water setup: /LiveComponent /LiveSimulation /DensityAccumulation > 1
(2) HeightField and Clamping: 
/LiveComponent /LiveInputFields /HeightField /EnableHeightField = True
/LiveComponent /LiveInputFields /HeightField /ClampHeightLowerValues = True

2. USING BITMAPS
Switch off WaveGen
/LiveComponent /LiveSimulation /WavesFromLandscapeGradient /InvertLandscapeGradient = False

Enable "Velocity from Bitmaps":
/LiveComponent /LiveSimulation /VeloFromBitmaps = 0.1

Change bitmap at:
/LiveComponent /LiveInputFields /Bitmaps /VelocityFieldFromTexture /...

\-----------
PASSIVE WAVES - IN & OUTSIDE SIM AREA

USING THE TILEMAP FUNCTION OF OUTPUT MATERIAL
Output Material /TileMap Parameter Group

Acces Output Material:
/LiveComponent /OutputMaterials /SecondaryOutputMaterial

PREREQUISITE: to see patterns outside the sim area, we need a visualization mesh, that is larger than the sim area!
Suggestion: Mesh Array Generator - /Content /FluidNinjaLive /OutputNiagara /SurfaceAlignedMeshes

Learn more about passive patterns at:
/FluidNinjaLive /Levels /_Starter /Tutorial06_SplineBasedRivers.umap / STAGE 3
}









#### {L.1.4, Tutorial04_Presets_Spawning_Caching.umap, /Content /FluidNinjaLive /Levels /Starter}

{S.1.4.0, Stage 0 INTRO}
{M.1.4.0,#Description: 

PRESETS, SPAWNING and CACHING
Save and Load sim state via presets, Spawning, Starting the sim from a cached frame 

1.  WRITING AND READING PRESETS IN-EDITOR
2.  SPAWNING A SEA SURFACE HANDLER
3.  SPAWNING A LANDSCAPE SURFACE HANDLER
4.  WRITING AND READING SIM CACHE IN-GAME
5.  CACHING HEIGHT-MAPS

PRESETS & SPAWNING, DETAILED DESCRIPTION IN A TEXT FILE:
https://drive.google.com/file/d/1xAROYlpT1XcwP0BAigrXdBCqVWFHDtMk
}

{S.1.4.1, Stage 1 WRITING AND READING PRESETS IN-EDITOR}
{M.1.4.1, #Description:
WRITING AND READING PRESETS IN-EDITOR - STEP BY STEP
Transfer the params from the "Water Tank" setup  to a new default setup, using a Preset!

1. first we save the tank params to a preset:
- Duplicate the default-preset in Content Browser (/FluidNinjaLive/Presets/NP_default)
- Give the copy a telling name. Use the "NP_" prefix (NP stands for "ninja preset")
- On the opened Level, select the ninja candidate for system-state saving 
- Look up the input field: /LiveComponent /LiveCore /Preset 
- Load the duplicated, new preset into the input-field
- Look up the editor UI button: /LiveComponent /LiveEditorTools /PresetWrite
- Press the PresetWrite button

We are done. System state TEMPORARILY saved to a preset. To PERMANANTLY store the saved params: right-click on the preset file in Content Browser and chose "Save" from the menu.

2. drag a new, default ninja Actor onto the level, from the Content Browser
    (Ninja Actor is located in the project ROOT: Content /FluidNinjaLive)

3. we are loading preset data to the new, default ninja
- On the opened Level, select the ninja candidate for system-state loading
- Look up the input field: /LiveComponent /LiveCore /Preset 
- Load the needed preset into the input-field
- Look up the editor UI button: /LiveComponent /LiveEditorTools /PresetRead
- Press the PresetRead button

We are done. System state TEMPORARILY loaded from the preset file. To PERMANANTLY keep the new system state:
- Set /LiveComponent /LiveEditorTools /PreserveSystemStateAfterPresetRead = TRUE
- Save Current Level (Ctrl + S)
}

{S.1.4.2, Stage 2 SPAWNING A SEA SURFACE HANDLER}
{M.1.4.2, #Description:
SPAWNING A SEA SURFACE HANDLER - EXAMPLE SETUP
Press Play to see Ninja Spawner in action!

KEY ACTOR:
/Content /FluidNinjaLive /Utilities /NinjaSpawner_EXAMPLE

This blueprint demonstrates how to spawn ninja and attach it to the player.
The blueprint serves as an example & demo only. Developers should implement their own spawner mechanism.

KEY STEPS PERFORMED BY THE DEMO BLUEPRINT:
1. Spawn Ninja with Default settings
2. Define Preset - with system state stored
3. Reinitialize system with new state

Besides managing interactions & calculating fluidsim, the spawned ninja is driving an EXTERNAL rendering system: the Water Mesh Generator. The MeshGen is NOT spawned: placed on persistent level.
}

{S.1.4.3, Stage 3 SPAWNING A LANDSCAPE SURFACE HANDLER}
{M.1.4.3, #Description:
SPAWNING A LANDSCAPE SURFACE HANDLER - EXAMPLE SETUP
Press Play to see Ninja Spawner in action!

KEY ACTOR:
/Content /FluidNinjaLive /Utilities /NinjaSpawner_EXAMPLE

This blueprint demonstrates how to spawn ninja and attach it to the player.
The blueprint serves as an example & demo only. Developers should implement their own spawner mechanism.

KEY STEPS PERFORMED BY THE DEMO BLUEPRINT:
1. Spawn Ninja with Default settings
2. Define Preset - with system state stored
3. Reinitialize system with new state

Besides managing interactions & calculating SimplePainter, the spawned ninja is driving an EXTERNAL rendering system: the Landscape Component.
Driving a Landscape Component requires a HELPER Utility: "DriveExternalSystemsWithSimData" aka. "Landscape Utility"
The Landscape Utility is also spawned by NinjaSpawner!
}


{S.1.4.4, Stage 4 WRITING AND READING SIM CACHE IN-GAME}
{M.1.4.4, #Description:
Writing And Reading Simulation Cache in-game

In some cases, it takes a while until the fluid builds up a complex configuration
in the simulation space. We can save a single-frame snapshot of the simulation buffers
and start the simulation from the snapshot next time. We call this CACHING.

SAVING THE BUFFERS:

 1. Select Actor "NinjaLive_Smoke"
 2. Select NinjaLive Component
 3. Look up the "LiveOutputRenderTargets" param group
 4. Make sure that each of the three "Enable Output..." flags are set to TRUE

 5. Start the game with "PLAY"
 6. While in game: on the Outliner Panel, select Actor "NinjaLive_Smoke"
 7. Select NinjaLive Component
 8. Look up the "LiveEditorTools" parameter group
 9. press the "SaveSimBuffers" button, and wait a few seconds
 10. STOP the gameplay
 11. In the Content Browser, visit this folder: /Content/FluidNinjaLive/Levels/_Starter
 12. There are THREE new assets in the folder, named as "T_Cache..."
 13. Right click on the first, chose "SAVE" on the pop-up. Save the other two, as well.

LOADING THE BUFFERS:

 1. Make sure we are off-play / in-editor
 2. Select Actor "NinjaLive_Smoke"
 3. Select NinjaLive Component
 4. SET /LiveComponent /LiveInputFields /Cache /StartSimFromCachedData = TRUE
 5. Load the previously saved 3 assets into the "Cached..." Input-Fields
    (make sure the buffers go into the correct slot: painter, velocity, pressure)
 6. Start the game with "PLAY"

KEY PARAMS:
/LiveComponent /LiveOutputRenderTargets /EnableOutput... = TRUE
/LiveComponent /LiveEditorTools /SaveSimBuffers
/LiveComponent /LiveInputFields /Cache /...
- StartSimFromCachedData = TRUE
- CachedPainterElevation = user defined texture with baked data
- CachedVelocityDensity = user defined texture with baked data
- CachedPressureDivergence = user defined texture with baked data

Early video on LIVE-2 features / CACHING demonstrated:
youtu.be/O57K5Aog7Hs?t=339

See the CREEK levels for caching examples!
/Content /FluidNinjaLive /Levels /Water_Dense_Creek1.umap
}


{S.1.4.5, Stage 5 CACHING HEIGHT-MAPS}
{M.1.4.5, #Description:
Caching (Baking) a Height Map

There is a method to cache input-heightmap, by setting up a modified SceneCaptureCamera 
(/Utilities/SceneCaptureCameraUtility), save scene-depth into a texture file, and read this
file with ninja.

SAVING THE HEIGHTMAP:

 1. Select Actor "NinjaSceneCaptureCamera"
 2. Look up "Ninja Related Settings" param group
 3. Press the "CaptureSingleFrameInEditor" Button
 4. Press the "SaveSingleFrameAsTexture" Button
    The new texture asset is saved to the same folder, where the Scene.Cap.Camera's 
    "Texture Target" is located. In this case: /FluidNinjaLive/Textures/TempRenderTargets/...
    Naming convention: T_Cache_SceneCaptureHeight_(3 digit random number)

Eg.: /FluidNinjaLive/Textures/TempRenderTargets/T_Cache_SceneCaptureHeight_541


LOADING THE BUFFERS:

 1. Make sure we are off-play / in-editor
 2. Select NinjaLive Actor
 3. Select NinjaLive Component
 4. SET /LiveComponent /LiveInputFields /HeightFields /ExternalHeightData /UseExternalHeightData = TRUE
 5. Load the previously saved texture into the "ExternalHeightDataFromTexture" Input-Field
 6. Start the game with "PLAY"
}











#### {L.1.5, Tutorial05_Tricks.umap, /Content /FluidNinjaLive /Levels /Starter}

{S.1.5.0, Stage 0 INTRO}
{M.1.5.0, #Description:
SPECIAL PARAMETERS & SETUPS

1. SEQUENCER  /  INTERFACE CONTROL
2. SIM SPACE WRAPPING  /  POS.INTERPOLATION
3. BRUSH DENSITY  /  INVERSE BRUSH
4. BRUSH VELOCITY / SIM AREA SIDE-PROPORTIONS
5. BRUSH SIZE  / BRUSH PERSISTENCE
6. OUTPUT MATERIALS  /  BUFFER VISUALIZATIOIN
7. BRUSH POSITION RANDOM / PUNCTURE
8. CUSTOM VISUALIZATION MESH / SIMPLE PAINTER MODE
9. VISCOUS FLUIDS
}

{S.1.5.1, Stage 1 Sequencer and Interface Control}
{M.1.5.1, #Description: 
KEY paramater for both SEQUENCER and INTERFACE control:  
/LiveComponent /LiveEditorTools /ParamUpdateFrequency
Lower values mean less delay between updates (higher update frequency)!
}
		{SE.1.5.1.1, Setup A Sequencer Control}
		{M.1.5.1.1, #Description: 
Sequencer Control

Tutorial text  -  Sequencer and MovieRenderQueue:
https://drive.google.com/file/d/1idy566GQdO9vldMv5ju6oJFx9S6UGwGe

The Sequence Controller in this setup is adjusting the "GlobalBrushSize" parameter in NinjaLiveComponent.

The Global Brush Size param is visible in Sequencer, because it is flagged with "Expose to Cinematics" in the NinjaLiveComponent blueprint, using the Details Panel.

You could expose ANY OTHER NinjaLive variable for the sequencer using the same flagging (and re-saving the blueprint with flags on)

In case you want an Object to trigger NinjaLive Actor's OVERLAP sensor: 
SET "Generate Overlap Events" = TRUE     at Actor Details /Collision

In general, Sequencer driven objects interact with ninja the same way as regular objects. 
See: /FluidNinjaLive /Levels /_Starter /Tutorial02_Inputs_Interaction.umap
}
		{SE.1.5.1.2, Setup B Interface Control Brush Size}
		{M.1.5.1.2, #Description: The Interface Controller is adjusting the BrushSize param in NinjaLiveComponent}
		{SE.1.5.1.3, Setup C Interface Control Shutdown}
		{M.1.5.1.3, #Description: The Interface Controller is forcing the sim container to fade out and shutdown.}

{S.1.5.2, Stage 2 Sim Space Wrapping (Tiling)}
{M.1.5.2, #Description: 
By default, sim UV space is CLAMPED. Using the below param, WRAPPING / TILING could be enabled: /LiveComponent /LiveSimulation /Bounds /SimAreaClamp = FALSE
}

{S.1.5.3, Stage 3 Painting Motion Trajectories}
{M.1.5.3, #Description: 
When tracking Object Pivots or Bones, ninja is mapping world position values to the sim space, drawing a dot for each position value, every frame. If objects move fast: the position-markers are becoming sparse. To avoid this, 
ninja could connect the dots, drawing lines along the motion trajectory:
/LiveComponent /LiveCore /DrawLinesBetweenPoints /PosInterpolation = TRUE
}

{S.1.5.4, Stage 4 Scale brush density with Velocity}
{M.1.5.4, #Description: 
Intended use: slow or standing objects to not trigger fluid response.
For example: pawn is causing ripples in water when running, but does not interact with water when standing still.
/LiveComponent /LiveInputPoints /BrushKillers /KillBrushBelowThisVelocity
}

{S.1.5.5, Stage 5 Inverse Brush}
{M.1.5.5, #Description: 
Intended use: negative brush density ERASES positive density coming from other input sources (eg.: a bitmap)
/LiveComponent /LiveInputFields /InvertFieldAndPointDensity = 1
}

{S.1.5.6, Stage 6 Brush - Velocity only No density}
{M.1.5.6, #Description: 
Intended use: SELECTIVELY use various inputs as density source.
/LiveComponent /LiveInputPoints /BrushKillers /SelectivelyKillBrushDensityKeepVelcity 0-5
0: NONE, 1: ARRAY, 2: DATACHANNEL, 3: CHAOS, 4. ARRAY & CHAOS, 5. ALL

For example: we are running a water setup and particles are used as density sources ("particles generate water"), and we don't want our pawn (skeletal mesh) to generate density (every step would leave a puddle)... but we want the pawn
to interact with the water (steps cause ripples) ...so we set the below param to "1": point data coming from "array" (static meshes and skeletal meshes) generate only VELOCITY... while point data coming from Data Channels (particles)
generate both density and velocity.

See "Creek" and "Coastline" dense water levels as examples for selective density input.
}

{S.1.5.7, Stage 7 Sim area XY proportions and scaling}
{M.1.5.7, #Description: 
Sim Components are scaled by DEDICATED PARAMS at Actor and Component Details Panel.
/NinjaLive Actor /LiveActivation /ActivationVolumeSize
/NinjaLive Actor /LiveInteraction /InteractionVolumeSize
/LiveComponent /LiveCore /ExtentsXYZ

DO NOT scale the actor or the components using the "scale transform".
Always keep the scale transform value on 1 !

DO NOT rotate actors to get the intended side-ratios.
Eg.: there is a ninja setup with 2:1 side proportions, but we want 1:2.
Instead of rotating it 90', re-set the proportions!

SCALING, EXAMPLE
Say, we'd like to double the simulation size on the X axis
1. Select NinjaLive Component
2. Find LiveCore param group at Component Details
3. Double the X component of "ExtentsXYZ" param
4. Double the "Resolution X" param
5. Select Ninja Actor
6. Find LiveInteraction param group at Actor Details
7. Double the X component of "InteractionVolumeSize" input field
}

{S.1.5.8, Stage 8 Object size to Brush size}
{M.1.5.8, #Description: 
Adjusting brush size to the scale OR bounding box size of interacting objects
/LiveComponent /LiveInputPoints /UseTrackedObjectSize = TRUE
}

{S.1.5.9, Stage 9 Brush persistence and Simulation feedback}
{M.1.5.9, #Description: 
We can separately adjust, how...
1. density from simulation inputs persists in the sim area:
/LiveComponent /LiveInputFields /PersistencyOfFieldAndPointData 0-1

2. density already in the simulation is being fed-back to the simulation:
/LiveComponent /LiveSimulation /DensityAccumulation 0-1.25
}

{S.1.5.10, Stage 10 Output Materials and Buffer Visualization}
{M.1.5.10, #Description: 
Many ways to visualize the same, raw simulation output.
/LiveComponent /LiveOutputMaterials

Simulation Buffers could be visualized by Output Materials
/LiveComponent /LiveOutputMaterials /OutputMaterialSelected 0-2
}

{S.1.5.11, Stage 11 Brush position random}
{M.1.5.11, #Description: 
/LiveComponent /LiveInputPoints /BrushNoise /BrushPositionRandom
}

{S.1.5.12, Stage 12 Puncture}
{M.1.5.12, #Description: 
Compare the two containers!
Puncture adds "outward flowing" velocity to brush-strokes.
- still-standing objects "boil"
- objects moving perpendicular to the sim plane make impact-shockwaves
/LiveComponent /LiveInputPoints /BrushVelocity /BrushPuncture
}

{S.1.5.13, Stage 13 Custom Visualization Mesh}
{M.1.5.13, #Description: 
NinjaLive Component comes with Internal Renderers.
On such is the MESH Renderer.
And we can replace the default PLANAR Mesh with a Custom Mesh:
/LiveComponent /LiveOutputInternalRenderes /Mesh /VisualizationMesh
}

{S.1.5.14, Stage 14 Simple Painter Mode}
{M.1.5.14, #Description: 
Typically, we use SimplePainter to draw footprints & wheeltraacks.
In these cases, we use the painter as a simple density source.
Let us consider using the painter as velocity source:
we can drive flowmaps or particles - without running a fluidsim.
/LiveComponent /LiveCore /SimplePainterMode
}
		{SE.1.5.14.1, Setup A Raw paint buffer}
		{M.1.5.14.1, #Description: }
		{SE.1.5.14.2, Setup B Groundmarks}
		{M.1.5.14.2, #Description: }
		{SE.1.5.14.3, Setup C Painter driving Flowmap, World Facing}
		{M.1.5.14.3, #Description: Density PaintBuffer and Velocity PaintBuffer combined with a flowmap Material Function in Output Material, World Facing
}
		{SE.1.5.14.4, Setup D Painter driving Flowmap, Camera Facing}
		{M.1.5.14.4, #Description: Density PaintBuffer and Velocity PaintBuffer combined with a flowmap Material Function in Output Material, Camera Facing
}
		{SE.1.5.14.5, Setup E Velocity PaintBuffer injecting Acceleration into a Particle System}
		{M.1.5.14.5, #Description: Velocity PaintBuffer injecting Acceleration into a Particle System
}

{S.1.5.15, Stage 15 Viscous Fluids}
{M.1.5.15, #Description: 
Viscosity is not an "out of the box" feature, but an exploit, that could be achieved by mis-using fluidsim parameters.
See this level for example setups:  Viscous_Blood_Mud.umap

Achieving "viscous fluid" behavior - params listed in order of importance:

- Low Divergence: to eliminate turbulent fluid behavior
- KernelIndexOffset: to kill long distance pressure waves / to make pressure quickly die out 

- Low VelocityFeedback: to kill velocity propagation, fluid remains inert in "no action" zones
- High DensityAccumulation: to compensate for velocity loss - make the fluid spread out evenly (and not in velocity direction)
- High SimSpeed: to compensate for velocity loss - and make the fluid move "normally" at low velocity
- KillBrushBelowThisVelocity: to avoid still and slow-moving brushes making large impact

Random noise is responsible for the diverse smearing patterns:
- High VeloDirNoise: high frequency random velocity bursts
- MaskDirNoiseWithSimVelocity: limit velocity bursts to places where interacting object inject velocity to the sim
- High VelocityClamp:  removes the default clamping limit (needed for bursts)

- High VeloFromBrushMotion: amplifying the velocity injected to the sim by interacting objects

TIP: if you set "VelocityFeedback" back to default (0.99), 
       while keeping DensityAccumulation at 1.225, the fluid becomes more "spready".

Key params:

/LiveCore
- SimSpeed = 10 (default: 1)

/LiveInputFields
- PersistencyOfFieldAndPointData = 0.05 (default: 0.2)

/LiveInputPoints /BrushKillers
- KillBrushBelowThisVelocity = 0.1 (default: 0)

/LiveSimulation
- DensityAccumulation 1.225 (default: 0.85)
- VeloFromBrushMotion 10 (default: 1)
- Divergence 0.04 (default: 1)

/LiveSimulation /Advanced
- VelocityFeedback 0.9 (default: 0.99)
- VelocityClamp 50 (default: 4)
- KernelIndexOffset -2

/LiveSimulation /Noise
- VeloDirNoise 100
- VeloDirNoiseSpeed 0
- MaskDirNoiseWithSimVelocity 1
}












#### {L.1.6, Tutorial06_SplineBasedRivers.umap, /Content /FluidNinjaLive /Levels /Starter}

{S.1.6.0, Stage 0 INTRO}
{M.1.6.0, #Description: 
SPLINE BASED RIVERS

1. SPLINE GENERATOR
2. MAPPING COORDINATES: LOCAL VS WORLD
3. PATTERN GENERATORS IN THE OUTPUT MATERIAL
4. FLUID SIMULATION DRIVEN BY SPLINE DIRECTION
5. COMPOSITE OF PASSIVE AND SIMULATED PATTERNS
6. MASKING THE SIMULATION WITH SPLINE-LANDSCAPE INTERSECTION
}

{S.1.6.1, Stage 1 Spline generator}
{M.1.6.1, #Description: 
Spline generator is a blueprint, that clones a user-defined mesh along a user-defined spline - made to generate geometry for rivers. (Note: the river material is managed by NinjaLiveComponent!)
/Content /FluidNinjaLive /Utilities /SplineGenerator

1. Drag the Blueprint Actor to a level
2. Define a StaticMesh to be cloned along the spline - at Actor Details Panel
3. Add new points by selecting one, then ALT + drag
4. Move /rotate /scale the spline control points using the Transform Gizmo
5. Tweak spline curvature at Actor Details / Size Adjustment

DO NOT SCALE the Spline Actor using Actor Scale Transform!
Use the "Tile Width" / "Tile Length" params at Actor Details to scale the river!

6. To assign an Output Material to a Spline:
    TAG the spline Actor and provide the tag to ninja.
    A sim Output Material will be assigned to the SplineMesh in runtime, using this tag

SplineMesh Actor /Actor Details Panel /Actor /Tags
/NinjaLive Actor /LiveComponent /LiveOutputMaterials /Apply2ndOutMatToActorsWithTag
}

{S.1.6.2, Stage 2 Mapping coordinates, Local vs World}
{M.1.6.2, #Description: 
The SplineMesh could be mapped two ways:
A.: using local Mesh-UV space
B.: using global World-UV space

Ninja OutputMaterials utilize BOTH mapping mode:
- non-interactive patterns are using LOCAL UV
- responsive simulation visuals are using WORLD UV
}
		{SE.1.6.2.1, Setup A Local UV}
		{M.1.6.2.1, #Description: 
Local UV
Local Mesh-UV enables us to offset textures along the spline, PASSIVE patterns follow the spline-curvature
}
		{SE.1.6.2.2, Setup B World UV}
		{M.1.6.2.2, #Description: 
World UV
World UV does not follow spline direction. Still, we can get information about spline direction and use that to advect the fluid. See on Stage 4!
}

{S.1.6.3, Stage 3 Pattern generators in the Output Material}
{M.1.6.3, #Description: 
Pattern generators in the Output Material
While TileMaps (setup C) are always passive, flowmaps (A) and caustics (B) could respond to the sim,
depending on the param settings in the Output Material.

TRADEOFF  (T1 vs T2)
(T1) we can switch Flowmap and Caustics Patterns to LOCAL UV and make them move along the whole spline (outside the simulated area too!) - but the patterns will be passive (no response to sim).

Notice how pattern generators are switched to LOCAL UV (non-world space) mode IN THESE SETUPS,
in order to follow the curvature of river SplineMesh:
Flow detail map:    Material /FlowMap /FlowMapInWorldSpace = FALSE
Caustics:                Material /SingleLayerWaterOps /CausticsInWorldSpace = FALSE
Tilemap:                 Material /TileMap /TilingInWorldSpace = FALSE

(T2) we can switch Flowmap and Caustics Patterns to WORLD UV and make them
advected by the sim - but the patterns OUSIDE sim area will not move along the spline. 

To advect caustics, we need to set "CausticsFlow"  = True.
Flowmaps automatically get advected by sim velocity if "FlowStrength" > 0. 

See this setup to learn more about flow detail maps:
/Content /FluidNinjaLive /Levels /_Starter /Tutorial01_Basics.umap / STAGE 11
}
		{SE.1.6.3.1, Setup A Flow Detail Map}
		{M.1.6.3.1, #Description: }
		{SE.1.6.3.2, Setup B Caustics}
		{M.1.6.3.2, #Description: }
		{SE.1.6.3.3, Setup C Tile Map}
		{M.1.6.3.3, #Description: 
Learn more about Wave Generators at:
/FluidNinjaLive/Levels/_Starter/Tutorial03_KeyConceptsForWater.umap / STAGE 4
}

{S.1.6.4, Stage 4 Fluid Simulation driven by spline direction}
{M.1.6.4, #Description: 
Splines generate a directional field. This could be used to determine flowing direction along the spline - in World Space.
To sample spline direction on the ninja side, we set a bool switch / and provide a tag:

/LiveComponent /LiveInputFields /SplineFields /EnableSplineReader = TRUE
/LiveComponent /LiveInputFields /SplineFields /GetSplineComponentsFromTaggedActors

On the object side: we TAG objects under the Actor Details "Tags" menu.
}
		{SE.1.6.4.1, Setup A Directional Field}
		{M.1.6.4.1, #Description: }
		{SE.1.6.4.2, Setup B Density Buffer advection}
		{M.1.6.4.2, #Description: }
		{SE.1.6.4.3, Setup C Pressure Buffer advection}
		{M.1.6.4.3, #Description: }

{S.1.6.5, Stage 5 Composite of passive and simulated patterns}
{M.1.6.5, #Description: 
The water material (technically: a ninja Output Material) is a COMPOSITOR,
merging pattern generators (Stage 3) and simulation buffers (Stage 4)
}

{S.1.6.6, Stage 6 Masking the simulation with Spline-Landscape intersection}
{M.1.6.6, #Description: 
1. Ninja simulation area is a rectangle.

2. When mapped on a spline: the spline geometry is only masking what we see 
    of this rectangular sim area - but the sim is still running in the whole area.

3. We can mask the simulation too, using the spline-landscape intesection. 
    Advantage: currents stop at the coast and waves bounce back,
    the fluid starts to behave like it is constrained by the riverbed.

KEY PARAMS:
/LiveComponent /LiveInputFields /SplineFields
- EnableSplineReader
- TryToGenerateCollisionMaskUsingRVT

/LiveComponent /LiveInputFields /HeightFields 
- EnableHeightField
- UseHeightAsCollisionMask
}

















{F.2, /Content /FluidNinjaLive /Levels /CoreOnly}
{M.2, #Description:  These Levels ares demonstrating how to use NinjaLive CORE Niagara System in Standalone Mode - without the wrapper Live Component.}

#### {L.2.1, CamfaceTest.umap, /Content /FluidNinjaLive /Levels /CoreOnly}

{S.2.1.1, Stage 1 External Visualization Mesh}
{M.2.1.1, #Description:  
Using an external Visualization Mesh
- the mesh is made camera facing using a component
- the helper utility (NinjaDrivingExternalSystemsUtility) is applying a material on the mesh
- the helper is feeding the material with ninja core data}
{S.2.1.2, Stage 2 Internal Visualization Mesh}
{M.2.1.1, #Description: Using the Built-in VisualizationMesh}

#### {L.2.2, Desert_SimplePainter_Landscape.umap, /Content /FluidNinjaLive /Levels /CoreOnly}

{S.2.2.1, Stage 1 Driving Landscape Components with NinjaCore}
{M.2.2.1, #Description:  Sending Sim position data to ALL landscape-tile-DynaMats, using the  "DriveExternalSystemsWithSimData" Utility.}

#### {L.2.3, Desert_SimplePainter_Mesh.umap, /Content /FluidNinjaLive /Levels /CoreOnly}

{S.2.3.1, Stage 1 In-Editor workflow with NinjaCore}
{M.2.3.1, #Description:  Enforcing IN-EDITOR workflow using a component:
- Select NinjaDrivingExternalSystemsUtility Actor  (yellow-N icon)
- Press "Editor Mode" button at Actor Details /Default
- Once ninja is running in-editor: try to move objects}

#### {L.2.4, Destructibles_as_SDF.umap, /Content /FluidNinjaLive /Levels /CoreOnly}

{S.2.4.1, Stage 1 Reading Destructibles as SDF with NinjaCore}

#### {L.2.5, LandscapeAlignedWater_ProtoVersion.umap, /Content /FluidNinjaLive /Levels /CoreOnly}

{S.2.5.1, Stage 1 Landscape aligned water with NinjaCore}

#### {L.2.6, River.umap, /Content /FluidNinjaLive /Levels /CoreOnly}

{S.2.6.1, Stage 1 Driving Spline river with NinjaCore}

{F.3, /Content /FluidNinjaLive /Levels /Misc}

#### {L.3.1, Destructibles_as_Points_CameraFacing.umap, /Content /FluidNinjaLive /Levels /Misc}

{S.3.1.1, Stage 1 Demolition Test}
{M.3.1.1, #Description: we can read CHAOS data two ways: (1) as points, (2) as distance field (SDF)
In this scene, we are using method-1 (points)
Ninja Actor 1: AIRBORNE SMOKE, Input: POINTS, Orientation: Camera Aligned (Camera Facing, dynamically rotated)
Ninja Actor 2: GROUND SMOKE, Input: POINTS, Orientation: World Aligned (World Facing, fixed rotation)}

#### {L.3.2, Destructibles_as_Points_WorldAligned.umap, /Content /FluidNinjaLive /Levels /Misc}

{S.3.2.1, Stage 1 Large scale destructible as Point input}
{M.3.2.1, #Description: we can read CHAOS data two ways: (1) as points, (2) as distance field (SDF)
In this scene, we are using method-1 (points)}

#### {L.3.3, Destructibles_as_SDF_WorldAligned.umap, /Content /FluidNinjaLive /Levels /Misc}

{S.3.3.1, Stage 1 Large scale destructible as SDF input}
{M.3.3.1, #Description: we can read CHAOS data two ways: (1) as points, (2) as distance field (SDF)
In this scene, we are using method-2 (SDF)}

#### {L.3.4, DrivingParticlesWithFluidsim.umap, /Content /FluidNinjaLive /Levels /Misc}

{M.3.4, #Description: The Niagara systems on this level serve as proof-of-concept: Niagara could be driven by externally generated, real time fluidsim data. All systems are using a 2D grid setup: particle position is used as UV to map them with Fluidsim data, received from NinjaLive by the Texture Sample Niagara Module.}

{S.3.4.1, Stage 1 Simple Painter driven Particles}
{M.3.4.1, #Description: Particle Area: large, fixed position (not moving)
Sim area: moving in WorldSpace. Particles: PreSpawn}

{S.3.4.2, Stage 2 Sim Velocity driven Particles}
{M.3.4.2, #Description: Particle Area: large, fixed position (not moving)
Sim area: moving in WorldSpace (pawn attached), Particles: PreSpawn, Z-axis derived from XY velocity}

{S.3.4.3, Stage 3 Sim Velocity and Pressure driven Particles}
{M.3.4.3, #Description: Particle Area: large, fixed position (not moving)
Sim area: moving in WorldSpace, Particles: PreSpawn, Z-axis pressure driven}

{S.3.4.4, Stage 4 Sim Velocity and Pressure driven Particles}
{M.3.4.4, #Description: Particle Area: small, moving, Sim area: moving in WorldSpace,
Particles: Continuously spawned, Z-axis pressure driven}

{S.3.4.5, Stage 5 Sim Velocity and Pressure driven Particles}
{M.3.4.5, #Description: Particle Area: large, moving, Sim area: moving in WorldSpace, 
Particles: Continuously spawned,  low velocity particles are KILLED,
As a result: moving objects seem to generate particles,
Z-axis pressure driven}

{S.3.4.6, Stage 6 Local Sim Velocity driven Particles}
{M.3.4.6, #Description: Demonstrating basic 2D GRID setup, Input: NinjaLive velocity buffer, 
Velocity is used to control particle Acceleration
Key param: /LiveComponent /LiveOutputExternalRenderers /DriveNiagaraComponentInTaggedActors}

{S.3.4.7, Stage 7 Local Simple Painter driven Particles}
{M.3.4.7, #Description: Demonstrating how SIMPLE PAINTER MODE could drive Niagara Particle acceleration,
SimplePaint is minimalistic mode with fluidsim turned off, Only brush-stroke density and direction are registered.
Key Param: /LiveComponent /LiveInteraction /SimplePainterMode}

{S.3.4.8, Stage 8 Local Sim Velocity and Density driven Particles}
{M.3.4.8, #Description: Input: NinjaLive density and velocity buffers, Density is used to control particle Color and Alpha
via "Scale Color" modules, Velocity is used to control particle Acceleration}

{S.3.4.9, Stage 9 Local Sim Velocity and Density driven Particles}
{M.3.4.9, #Description: VERTICAL particle VELOCITY is modified by Density buffer: high density pushes particles upward, low density pushes them downwards. As a result, particles "burst" perpendicular to the 2D grid that spawns them and fall back as they "cool down" (as simulation density is decreasing)}

{S.3.4.10, Stage 10 Local Sim Density driven Particles Persystent Strokes}
{M.3.4.10, #Description: A persistent brush is used, so collision strokes (drawn by a single collider) remain in the sim area for a long time, generating long smoke trails}

{S.3.4.11, Stage 11 Local Sim Density driven Particle Mesh Array}
{M.3.4.11, #Description: Only NinjaLive Density data is used (no velocity) to drive Mesh Particle VERTICAL SCALE}

#### {L.3.5, Lava_Sparse.umap, /Content /FluidNinjaLive /Levels /Misc}

{S.3.5.1, Stage 1 World Space Lava Setup}
{M.3.5.1, #Description: Using TWO sim containers, combined
SIM1: generate a tiled/wrapped pattern that could be applied to infinite surfaces, no locality-dependence!
SIM2: generate local interaction pattern, attached to pawn
Lava Surface Material is combining the two sim outputs: for the TILED pattern, we need a WRAPPED RenderTarget, for the LOCAL interaction pattern, we need a CLAMPED RenderTarget}

{S.3.5.2, Stage 2 Local Space Lava Setup}
{M.3.5.2, #Description:  On this stage, 2 sim containers are used: (A) calculating lava flow, (B) calculating steam flow}

#### {L.3.6, PerformanceTest_Particles.umap, /Content /FluidNinjaLive /Levels /Misc}

{S.3.6.1, Stage 1 Stress Test - 10K Particles as Input}

#### {L.3.7, PerformanceTest_Primitives.umap, /Content /FluidNinjaLive /Levels /Misc}

{S.3.7.1, Stage 1 Stress test - 200 Primitive Meshes as Point Input}

#### {L.3.8, PerformanceTest_SimContainers.umap, /Content /FluidNinjaLive /Levels /Misc}

{S.3.8.1, Stage 1 Stress test - 49 ninja sim Actors running}

#### {L.3.9, PerformanceTest_SimplePainterContainers.umap, /Content /FluidNinjaLive /Levels /Misc}

{S.3.9.1, Stage 1 Stress test - 64 Simple Painter mode ninja actors running}

#### {L.3.10, PerformanceTest_SkeletalMeshes.umap, /Content /FluidNinjaLive /Levels /Misc}

{S.3.10.1, Stage 1 Stress test - 40 Skeletal Meshes inside the sim area}

#### {L.3.11, VolumeDemo_FAKE.umap, /Content /FluidNinjaLive /Levels /Misc}

{M.3.11, #Description: This level showcases legacy setups from the "pre volumetrics" times.
All tricks performed in the Output Material: 
1. Parallax Occlusion Mapping to fake depth
 2. Raymarching from a user-provided lightsource to calculate self-shadows on the 2D sim density
Key Params:
/LiveComponent /LiveLegacy /Raymarching /EnableRaymarching = True
/LiveComponent /LiveLegacy /Raymarching /LightDirectionProvider = User Defined Actor
}
	{S.3.11.1, Stage 1 Purple Plasma}
	{S.3.11.2, Stage 2 Gray Fluff}
	{S.3.11.3, Stage 3 Blue Smoke}
	{S.3.11.4, Stage 4 Red Smoke}
	{S.3.11.5, Stage 5 Floor Pulse}
	{S.3.11.6, Stage 6 Plasma Sphere}


#### {L.3.12, VolumeDemo_FVOL_Small.umap, /Content /FluidNinjaLive /Levels /Misc}

{M.3.12, #Description: FOG VOLUMES, FVOL
On this level:
- 3D lit fog volumes driven by 2D Fluidsim
- Fog extinction driven by sim density
- Sim density is also used as HeightMap
- Sim velocity could drive noise flow

Comparing Fog Volumes (FVOL) 
to other volumetric methods (eg.: HVOL, SVOL):

- no self shadows / no cast shadows
- receives cast shadows
- supports multiple lightsources
- responds slowly / high latency
- resolution is low
- GPU and memory demand is low

Ideal for slowly changing soft environmental effects
Not ideal for detailed, responsive effects.

KEY SETTINGS FOR FOG VOLUMES:

1. Exponential Height Fog Actor placed on Level
    Key param: Volumetric Fog = True
2. Top-Right Viewport Menu /Show /Fog: Enabled (ALT +F)
3. Engine Scalability = EPIC
4. UE default Volume Fog settings, CVAR
r.volumetricfog.gridpixelsize 8
r.volumetricfog.gridsizez 256
r.volumetricfog.historyweight .98
UE defaults changed by Ninja:
r.volumetricfog.gridpixelsize 5
r.volumetricfog.historyweight 0.9
(low "historyweight" values result responsive faster behaviour, but blocky voxels)

5. VolumeFog ViewDistance: UNREAL settings
ExponentialHeightFog Actor /VolumetricFog Parameter Group /ViewDistance
UE default = 6000 - mod. to 12000

6. VolumeFog ViewDistance: MATERIAL settings
- Select a ninja sim Actor
- locate the SecondaryOutputMaterial at /LiveComponent /LiveOutputMaterials
- open the material
- look up the DistanceFade Param.Group

The setups on Stages 2-6 are using INTERNAL renderer:
/LiveComponent /LiveOutputInternalRenderers /FVolume}

{S.3.12.0, Stage 0 INTRO}
{S.3.12.1, Stage 1 Simple Passive Fog Volume Cylinder}
{M.3.12.1, #Description: Static Volume Fog setup, No fluidsim used here
Volume Bounds: defined by a simple BOX StaticMesh, with an a Volumetric Fog Material applied
Texture: this system is using a simple, static 2D texture as input - defined by the Material Instance}
		{SE.3.12.1.1, Setup A Simple Fog Cylinder}
		{SE.3.12.1.2, Setup B Fog Cylinder with Volumetric Noise}
{S.3.12.2, Stage 2 Lab}
{S.3.12.3, Stage 3 Shrine}
{S.3.12.4, Stage 4 HollowPuffs}
{S.3.12.5, Stage 5 Trails}
{S.3.12.6, Stage 6 Fog Component in a Character Actor}
{S.3.12.7, Stage 7 Large scale passive fog setups}
{M.3.12.7, #Description: Large scale passive fog setups, no fluidsim used here.
{SE.3.12.7.1, Setup A Niagara based fog}
{M.3.12.7.1, #Description: Volume is managed by Niagara Volumetric Renderer (SurfaceAlignedVolumes), bounds defined by Emitter Extents.}
{SE.3.12.7.2, Setup B Box Mesh based Fog}
{M.3.12.7.2, #Description: Volume Bounds: defined by a simple BOX StaticMesh, with an a Volumetric Fog Material applied.}

#### {L.3.13, VolumeDemo_HVOL_Medium.umap, /Content /FluidNinjaLive /Levels /Misc}

{S.3.13.1, Stage 1 Medium Scale Landscape aligned Heterogeneous Volume}
{M.3.13.1, #Description: Landscape aligned Heterogeneous Volume
We can read elevation data multiple ways, e.g. using the Landscape DI or RVT DI.
In this scene, the RVT Sampler method is set up as default.

For all HeightField base methods:
/LiveComponent /LiveInputFields /HeightFields /EnableHeightFieldReaders = True

For a Landscape DI based method, that is all we need to do.
The method is completely automatic. Even auto-picks the Landscape to be sampled...

Using the RVT DI method:

(1) set up the Landscape Actor to write into a on-disk RVT asset (via the "DrawInVirtualTextures" param at Actor Details)
(2) apply a material to the Landscape, with "RVT Output" node included
(3) create an RVT volume in the scene, connected to the same on-disk RVT asset the Landscape writes-to
(4) set ninja to sample the given RVT asset:
/LiveComponent /LiveInputFields /HeightFields /RVTHeightData /UseRVTAsHeightSource = True
/LiveComponent /LiveInputFields /HeightFields /RVTHeightData /RVT-asset = (user defined RVT asset)
}













#### {L.3.14, VolumeDemo_HVOL_Small.umap, /Content /FluidNinjaLive /Levels /Misc}

{S.3.14.0, Stage 0 INTRO}
{M.3.14.0, #Description: SMALL SIZE, FLUIDSIM DRIVEN HETEROGENEOUS VOLUMES
WE ARE USING 2D FLUIDSIM DENSITY AND VELOCITY TO GENERATE 3D VOLUMES
EXAMPLES ON THIS LEVEL ARE USING THE NEW HETEROGENEOUS VOLUME TYPE (HVOL)

GENERATING 3D VOLUMETRIC DENSITY FROM 2D INPUT DATA, TWO METHODS:
CROSS-SECTION vs EXTRUDE
Extrude Method demonsrated on Stages 1-11
Key: Ninja AUTOMATICALLY forwards the fluidsim data to the volume container

Cross Section method demonsrated on Stages 12-14
Key: Fluidsim data is MANUALLY forwarded from Ninja to the volume container using on-disk RenderTargets 

WARNING 1:
Following the UE 5.3 to UE 5.4 transition: HVOL Actor Pivot is changed by EPIC. Solution:
1. Select Heterogenous Volume Component, 2. Set "Pivot at Centroid" = TRUE at the Details Panel

WARNING 2:
Most setups on this level are using ninja Internal HVOL Renderer. In case we would like to use External HVOL Renderer, and specifically, EPIC's Heterogenerous Volume Actor: the Volume Actor material slot should be empty (set to "none"). If the volume actor is already assigned with a material, ninja can not direct drive it!

{S.3.14.1, Stage 1 Extruding 2D density to 3D}
{M.3.14.1, #Description: 3D via EXTRUSION, using fluidsim as HEIGHTMAP, brighter values = higher elevation.
1. Select Ninja Actor: "NinjaLive0"
2. Select NinjaLiveComponent
3. Locate "LiveOutputMaterials" param group at the Component Details Panel
4. Locate "Secondary Output Materials"
5. Double click on the Volume Material: "MI_VolumeGeneric_HVOL_Fluid01"
6. Locate the "Density" Parameter Group at the Material Instance Details Panel
7. Locate the "Extrude" and "ExtrudeSoften" params: change the values!}

{S.3.14.2, Stage 2 Running the sim vs Displaying the sim}
{M.3.14.2, #Description: RUNNING THE SIM does not equal DISPLAYING THE SIM.
(A) RUNNING the fluidsim and  (B) VISUALIZING the fluidsim are separate processes, managed by separate Actor COMPONENTS:
A. NinjaLiveComponent is running the sim
B. VolumeComponent is displaying fluidsim output
On this stage, Ninja uses DIRECT DRIVE to send data to the Volume Actor (assigns material via tag).
On other stages, we use the INTERNAL Renderer (no tagging needed, Volume is dynamically generated.)
Currently, the VisualizationMesh also shows the sim - this is good for debug purposes.
/LiveComponent /LiveOutputInternalRenderer /Mesh param group: both "Force Hide" and "Auto Hide" = False}

{S.3.14.3, Stage 3 Camera Facing HVOL}
{M.3.14.3, #Description: We could make the simulation and the Internal Renderer face towards the Camera:
/LiveComponent /LiveCore /CameraFacing = True}

{S.3.14.4, Stage 4 Camera Facing Smoke Setups}
{M.3.14.4, #Description: 
1. POSSESS TO ACTIVATE:
PawnAndCameraUtility Actor makes us "Possess Nearest Pawn"
To possess a pawn, we need to move close to it IN EDITOR, and start PLAY
2. NIGHT LIGHTS:
Pull down the level main light using the 3rd SLIDER while in PLAY 
See bottom right screen corner for sliders.}

{SE.3.14.4.1, Setup A Camera Facing HVOL Smoke}
{SE.3.14.4.2, Setup B Camera Facing HVOL Firea and Smoke}
{M.3.14.4.2, #Description:  
This setup contains TWO ninja Sim Actors, both attached to the Pawn.
The Flame setup uses the internal Visualization Mesh to display the effect.
The Smoke setup uses the internal HVolume Renderer.

ADDITIONAL INFO:  NOISE TYPES
The default volumetric material is using a 3D noise.
We could switch to a "noiseless" material:
/LiveComponent /LiveOutputMaterials /SecondaryOutputMaterialSelected = 0}

{S.3.14.5, Stage 5 Billboard Smoke Columns}
{M.3.14.5, #Description: 
SMOKE COLUMNS, "BILLBOARD" CAMERA FACING, ROTATION IS LOCKED ALONG THE VERTICAL AXIS
/LiveComponent /LiveCore /CamFaceBillboard = True
We are employing multiple NOISING TECHNIQUES to add details. Visit STAGE-6, to learn how!
}
		{SE.3.14.5.1, Setup A Rising Smoke}
		{SE.3.14.5.2, Setup B Falling Smoke}
		{SE.3.14.5.3, Setup C Falling Thin Smoke}

{S.3.14.6, Stage 6 Combining sim with noises for details}
{M.3.14.6, #Description: 
WE ARE COMBINING MUTIPLE 2D AND 3D NOISE TYPES TO MAKE THE FINAL OUTPUT LOOK DETAILED}
{SE.3.14.6.1, Setup A Noiseless 2D sim}
{M.3.14.6.1, #Description: Core 2D simulation, noiseless}
{SE.3.14.6.2, Setup B Noised 2D sim}
{M.3.14.6.2, #Description: 2D sim with velocity and density noise}
{SE.3.14.6.3, Setup C 3D noising techniques}
{M.3.14.6.3, #Description: 
This is a PASSIVE (non-fluidsim-driven) example volume, showing the tricks we employ to make the incoming 2D data "more 3D".
1. Panning, 2D noise, used as HEIGHT MAP to distort the Volume.
2. 3D noise, subtracted from Volume, advected by user-defined velocity field
}
		{SE.3.14.6.4, Setup D Composite of ABC}

{S.3.14.7, Stage 7 Smoke Pool}
{M.3.14.7, #Description: 
Simple, fixed location (Non-WorldSpace) sim container
See original setup at: VolumeDemo_SVOL_Small / Stage 7A
On the VolumeDemo_SVOL_Small level, we are comparing SmokeVolume (SVOL)
and HeterogeneousVolume (HVOL) - the same pool is visualized using BOTH techniques
EXPERIMENTS:
Change the current simple (noise-less) Volume visualization to performance heavy, noisy versions:
/LiveComponent /LiveOutputMaterials /SecondaryOutputMaterialSelected 1,2,3}

{S.3.14.8, Stage 8 Whirlpool}
{M.3.14.8, #Description: 
Simple, fixed location (Non-WorldSpace) sim container
See original setup at: VolumeDemo_SVOL_Small / Stage 8A
On the VolumeDemo_SVOL_Small level, we are comparing SmokeVolume (SVOL)
and HeterogeneousVolume (HVOL) - the same whirlpool is visualized using BOTH techniques
EXPERIMENTS:
Change the current simple (noise-less) Volume visualization to performance heavy, noisy versions:
/LiveComponent /LiveOutputMaterials /SecondaryOutputMaterialSelected 1,2,3
}

{S.3.14.9, Stage 9 Vertically Flipped Whirlpool}
{M.3.14.9, #Description: 
Simple, fixed location (Non-WorldSpace) sim container
We have flipped Stage-8 HVOL container, by rotating it 180' on the X-axis}




{S.3.14.10, Stage 10 Key Volume Setup Methods}
{M.3.14.10, #Description: 
THREE IMPORTANT VOLUME ATTRIBUTES
1.  LOCAL vs WORLD
2.  LANDSCAPE ALIGNMENT
3.  NIAGARA vs NON-NIAGARA
4.  SCALING and RESOLUTION

1.    WORLD or LOCAL SPACE ? BOTH!
Ninja is applying world-space offset to the fluidsim BEFORE sending it to the Volumetric Output Material for visualization.
So fluid DENSITY is "already WorldSpace" when arriving to the Out.Mat. 
Hence, "Density" is switched to Local Space in the Output Material:
Density Param Group /Density-XYZ-InWorldSpace = FALSE

3D Noise is being generated in the Output Material,
hence, we need to offset it as the volume container moves in WorldSpace:
Noise Param Group /Noise1-XYZ-InWorldSpace = TRUE

2.   NIAGARA  vs  NON-NIAGARA
HVOLs could be initialized TWO different ways:
- by placing a "Heterogeneous Volume" Actor on level / or adding a HVOL Component to an Actor
  and assigning a volume material to it (setup A, on this stage)
- by using the Niagara "Volume Renderer" provided with a volume material (setups B, C on this stage)
We use instances of "M_NinjaOutput_BaseMaterial_HETEROGENVOLUME" wrapper material, in BOTH cases (A,B). 

3.   LANDSCAPE ALIGNMENT via HEIGHTMAPS
We could create 3D volumetric density from a 2D texture, by extruding it "vertically" along the Z-axis - from a flat, "null-elevation" base-plane. We could use a HeightMap to distort the "base-plane" itself... 
In case we use landscape-elevation as HeightMap: the volume ALIGNS with the Landscape Surface.

Source of HeightMap:

Setup A: The external non-niagara renderer does NOT have height sampling features. When driven by ninja, it could be provided with height data on the Paint Buffer Alpha channel. When working without ninja, we could set up an additional RVT based height samping method to generate height data. Tedious work, with many setup elements - this was the default method before FluidNinja Live 2.0

Setup B: The external niagara renderer has its own landscape and RVT sampling interfaces. This has two implications: it could work without ninja and render passive (not fluidsim driven) landscape aligned patterns - or, when working with ninja, it could landscape align both simulated patterns inside the sim area and passive patterns outside the sim area (see "Fog_Mist" Level)!

Setup C: For the internal niagara renderer, ninja is providing height data on the Paint Buffer Alpha channel. The internal renderer is limited to the sim area.


4.   SCALING  and  RESOLUTION

IMPORTANT: the scale-transforms of niagara VS non-niagara heterogeneous volumes work VERY differently!

- in the case of the Niagara HVOL: volume extents = emitter bounds. Very logical.
- in the case of the Non-Niagara HVOL: volume extents = HVOL actor scale combined with VolumeResolution. Weird.

Consequence:
If I modify volume resolution in niagara: the size of the volume does not change / voxel density changes (very intuitive!)
If I modify volume resolution in the non-niagara volume: the size of the volume changes / voxel density remains the same.
}
		{SE.3.14.10.1, Setup A External Non-Niagara}
		{M.3.14.10.1, #Description: HVOL component based "Non-Niagara" setup, HVOL Component is added to Ninja Actor}
		{SE.3.14.10.2, Setup B External Niagara}
		{M.3.14.10.2, #Description: Niagara based setup, HVOL is initialized by External Niagara Sys "SurfaceAlignedVolumes}
		{SE.3.14.10.3, Setup C Internal Niagara}
		{M.3.14.10.3, #Description: Niagara based setup, HVOL is initialized by NinjaLiveCore Niagara System}


{S.3.14.11, Stage 11 SceneCapture Camera based setups}
{M.3.14.11, #Description: We are using a SceneCapture2D Camera, placed above the setup, looking top-down, Orthographic
The Camera exports SceneDepth (distance from camera, represented as a grayscale map) to a RenderTarget
The Volumetric Material is set to use the Depth Data as a HeightMap.
Using this method, we could mount volume density "on top of" scene objects / align with scene objects
}
		{SE.3.14.11.1, Setup A Minimal demo}
		{SE.3.14.11.2, Setup B Floor Smoke demo}



{S.3.14.12, Stage 12 Flameball Cross Section Volume}
{M.3.14.12, #Description: We are using dynamic, real time 2D fluidsim as cross-section to generate 3D density and velocity.
ORIGINAL NAME: STAGE CR-1

EXPERIMENT
1. remove the yellow balls in Editor (or switch of "Overlap Based Interaction" at Live Actor Details)
2. start Play
3. try to draw on the canvas with the mouse pointer, to see how 2D sections relate to the final 3D result

IMPORTANT
Key Material Param setting: "Define3DVolumeViaCrossSections" = TRUE
By default, we are generating 3D volumetric density from the 2D input data by EXTRUSION.
Using the "Cross Section" feature, we could define 3D density using...
(A) an extra VERTICAL (XZ = UW) CROSS SECTION,
(B) while the original 2D density input is being used for horizontal mapping (XY = UV).

2D Fluidsim could be channelled for BOTH inputs (A,B)

NOTE: ninja could drive automatically ONLY the original density input (see Stage 14)
To use fluidsim as vertical section: we need to write the sim to a RenderTarget with ninja,
and MANUALLY provide the RenderTarget to the material, using the "VerticalCrossSection" param

Writing buffers to RenderTargets:
/LiveComponent /LiveOutputRenderTarget /SimVelocityDensityAndWetmap /RT_VelocityDensity}

{S.3.14.13, Stage 13 Pump Cross Section Volume}
{S.3.14.14, Stage 14 Ring Cross Section Volume}
{M.3.14.14, #Description: On this stage, we are using the fluidsim as the "U" component of a UV map, to sample a static cross section texture.
ORIGINAL NAME: STAGE CR-3
}










#### {L.3.15, VolumeDemo_HVOL_Small_PASSIVE.umap, /Content /FluidNinjaLive /Levels /Misc}

{S.3.15.0, Stage 0 INTRO}
{M.3.15.0, #Description:
GENERIC VOLUME FUNCTION: FEATURE DEMO LEVEL
Note: for the sake of simplicity, demo setups on this level use passive density inputs, no interactive fluidsim employed

KEY FACT: WE ARE USING A SINGLE FUNCTION TO MANAGE ALL UNREAL VOLUME TYPES
/FluidNinjaLive/OutputMaterials/Base/MF_NinjaOutput_BaseFunction_VOLUME

The function is referenced by 3 base materials, that handle 3 volume types:
 - HETEROGENEOUS VOLUMES, HVOL
 - FOG VOLUMES, FVOL
 - CLOUD VOLUMES, CVOL

THIS LEVEL IS SHOWCASING THE MAIN FEATURES OF THE GENERIC VOLUME FUNCTION:
A. local and world-space UVW transforms
B. extruded and cross-section based 3D density
C. two separate noise mixers
D. velocity-based flowmapping
E. surface alignment via heightmaps
F. ambient lighting and ambient occlusion
G. fadeout by... altitude / camera-distance / volume-bounds
H. emissive from volume density, using blackbody-temperature function
I. polar coordinate mapping
J. support for niagara AND non-niagara initialized volumes

GENERATING 3D VOLUMETRIC DENSITY FROM 2D INPUT DATA, TWO METHODS: CROSS-SECTION vs EXTRUDE
Extrude Method demonsrated on Stages 1-11
Cross Section method demonsrated on Stages 12-14
}

{S.3.15.1, Stage 1 Extrude and Soften}
{SE.3.15.1.1, Setup A Extrude 2D data into 3D}
{M.3.15.1.1, #Description: 
EXTRUDE
3D via EXTRUSION Using a gray texture as HEIGHTMAP 
Brighter values = higher elevation

1. Select the HVOL Actor: "HVOL_Tutorial00"
2. Locate the Volume Material at the Actor Details Panel
3. Double Click on the Mat to open the Editor
4. Locate the "Density" Parameter Group at the Material Instance Details Panel
5. Locate the "Extrude" Param: change the value!
6. Use the TOOLTIPS to explore params!
}
{SE.3.15.1.2, Setup B Soften Volume}
{M.3.15.1.2, #Description: 
SOFTEN
Key param in Volume Material: ExtrudeSoften
Generates a soft gradient along the extrusion axis, fading out the extruded density at the top and bottom.
}

{S.3.15.2, Stage 2 Volumetric Noise}
{M.3.15.2, #Description:
Key param in Volume Material: Noise
Compare the DETAILED look to the "smooth" feel on Stage-1
}
{S.3.15.3, Stage 3 Ambient Lighting and Noise Flow}
{M.3.15.3, #Description: 
AMBIENT and NOISE-FLOW
Key params in Volume Material: AmbientOcclusion, Noise1FlowByVelocity

1. Compare the shadow-covered areas to Stage-2. On Stage-2, we do not have ambient lighting enabled. Shadow-covered areas are completely black. Notice the visible details in the shady area.
2. Compare the noise-flow to Stage-2. Notice the velocity-field defined circular flowing direction.

Fact: Unreal has an experimental feature for the indirect (ambient) lighting of HVOLs. This is not enabled by default.
Try this experimental CVAR:   r.HeterogeneousVolumes.IndirectLighting 1
}

{S.3.15.4, Stage 4 Combined RGB input and Height input}
{M.3.15.4, #Description:
COMBINED RGB INPUT and HEIGHT MAP
Key params in Volume Material: SeparateInputForDensityAndVelocity, HeightMap

RGB: We are driving our volumes with Density and Velocity Maps.
Two separate maps require two texture samplers. Expensive. How about combining the two?
Velocity on RG channels, Density on Blue = 1 texture sampler

HEIGHTMAPS: We could create 3D volumetric density from a 2D texture, by extruding it "vertically" along the Z-axis - from a flat, "null-elevation" base-plane. We could use a HeightMap to distort the "base-plane" itself... 
Useful: think of "extrude" as small scale detail generator and "heightmap" as a large-scale shape-definition.

Example-1: a simple radial gradient heightmap could make a CONE from a flat volume (see current Stage)
Example-2: in case we use landscape-elevation as heightmap: the volume ALIGNS with the Landscape Surface
}

{S.3.15.5, Stage 5 Emissive}
{M.3.15.5, #Description:
EMISSIVE, Key param in Volume Material:  Emissive
Emissive from volume density, using blackbody-temperature function.
}

{S.3.15.6, Stage 6 Masking Volume Edges}
{M.3.15.6, #Description:
MASKING VOLUME EDGES, Key param in Volume Material:  EdgeMask
We are working with finite volumes. EdgeMasking helps to fade the boundary zone, smoothly blending the vol and the environment.
}

{S.3.15.7, Stage 7 Fade by Camera Distance}
{M.3.15.7, #Description:
CAMERA FADE,  Key param in Volume Material:  FadeByDistanceFromCamera
Volume Generic Function comes with "Camera Fade" options, located under the "Fading" param group.
SET "FadeByDistanceFrom Camera" = True
Camera Fade is calculated from the camera-to-volume distance. We could also call it "distance fade".
It could be used three ways:
1. To fade-in a fixed position volume, as the Player(Camera) approaches (see THIS stage)
2. When the volume is attached to the camera (camera & vol moving together), we could use camera fade to constantly keep distant parts hidden
3. INVERSE CAMERA FADE could be used to hide volume content near the camera, while making "distant" parts visible
}

{S.3.15.8, Stage 8 Density Texture Panning}
{M.3.15.8, #Description:
PANNING, Key param in Volume Material: U-OffsetAnimated
Besides scale and offset, we have animated offset in the volume material.
Both Density and Noise could be animated using offset. 
Advantage: no velocity input required to make density and noise patterns moving.
}

{S.3.15.9, Stage 9 Radial Polar Coordinate Transform}
{M.3.15.9, #Description:
POLAR COORDINATE TRANSFORM (PC), Key param in Volume Material: UsePolarCoordsOnDensity
Using the PC-transform, we could easily create radial or circular structures and making these "extend" from a centerpoint.
}

{S.3.15.10, Stage 10 Landscape Aligned small HVOLs}
{M.3.15.10, #Description: 
FOUR IMPORTANT VOLUME ATTRIBUTES
1.  LOCAL vs WORLD
2.  NIAGARA vs NON-NIAGARA
3.  LANDSCAPE ALIGNMENT
4.  SCALING and RESOLUTION

Note: HVOL Actors on Stage 10 are attached to Pawns, HVOL Actor Rotation Transform is set to ABSOLUTE
Key params in Volume Material: Density-XY-InWorldSpace, Density-Z-InWorldSpace, Noise-XY-InWorldSpace, Noise-Z-InWorldSpace 

1.    WORLD or LOCAL SPACE
We could map our Volume Density, Velocity and Noise in the Scene (Level) two entirely different ways:
(A) Using the LOCAL coordinate system of the Volume Actor - resulting a behavior, that is "independent" from the World, that surrounds the Volume.
(B) Using the GLOBAL coord.system of the World around the Volume allows us to make the volume behave, as if it is "anchored in the world".
LOCAL  to  WORLD conversion: for the reasons described in point 1-4, switching between LOCAL vs WORLD also works differently.
A. In the case of the Non-Niagara initialized HVOL: a tedious job. Besides setting the switches, we need to start tweaking scale, offset and even density values to achieve the same look/density/scale/speed.
B. In the case of the Niagara initialized HVOL: We simply open the volumetric material and set Local-World switch bool flags to TRUE/FALSE. That's all - everything works as expected.


2.   NIAGARA  vs  NON-NIAGARA
HVOLs could be initialized TWO different ways:
- by placing a "Heterogeneous Volume" Actor on level / or adding a HVOL Component to an Actor
  and assigning a volume material to it (setup A, on this stage)
- by using the Niagara "Volume Renderer" provided with a volume material (setups B, C on this stage)
We use instances of "M_NinjaOutput_BaseMaterial_HETEROGENVOLUME" wrapper material, in BOTH cases (A,B). 

3.   LANDSCAPE ALIGNMENT via HEIGHTMAPS
We could create 3D volumetric density from a 2D texture, by extruding it "vertically" along the Z-axis - from a flat, "null-elevation" base-plane. We could use a HeightMap to distort the "base-plane" itself... 
In case we use landscape-elevation as HeightMap: the volume ALIGNS with the Landscape Surface.

Source of HeightMap:

Setup A: The external non-niagara renderer does NOT have height sampling features. When driven by ninja, it could be provided with height data on the Paint Buffer Alpha channel. When working without ninja, we could set up an additional RVT based height samping method to generate height data. Tedious work, with many setup elements - this was the default method before FluidNinja Live 2.0

Setup B: The external niagara renderer has its own landscape and RVT sampling interfaces. This has two implications: it could work without ninja and render passive (not fluidsim driven) landscape aligned patterns - or, when working with ninja, it could landscape align both simulated patterns inside the sim area and passive patterns outside the sim area (see "Fog_Mist" Level)!


4.   SCALING  and  RESOLUTION

IMPORTANT: the scale-transforms of niagara VS non-niagara heterogeneous volumes work VERY differently!

- in the case of the Niagara HVOL: volume extents = emitter bounds. Very logical.
- in the case of the Non-Niagara HVOL: volume extents = HVOL actor scale combined with VolumeResolution. Weird.

Consequence:
If I modify volume resolution in niagara: the size of the volume does not change / voxel density changes (very intuitive!)
If I modify volume resolution in the non-niagara volume: the size of the volume changes / voxel density remains the same.
}
		{SE.3.15.10.1, Setup A Non-Niagara HVOL Renderer}
		{M.3.15.10.1, #Description: HVOL component based "Non-Niagara" setup, HVOL Component is added to Ninja Actor}
		{SE.3.15.10.2, Setup B Niagara HVOL Renderer}
		{M.3.15.10.2, #Description: Niagara based setup, HVOL is initialized by External Niagara Sys "SurfaceAlignedVolumes}


{S.3.15.11, Stage 11 Heterogenous Volume as Component}
{M.3.15.11, #Description: Heterogeneous Volume Component is added to the Pawn. As opposed to: being a separate Actor, attached to the Pawn. Note: Component Rotation Transform is set to ABSOLUTE.
}
{S.3.15.12, Stage 12 HVOL vs Multiple Light Sources}
{M.3.15.12, #Description: Heterogeneous Volumes could be lit by multiple Point Lights
}

{S.3.15.13, Stage 13 HVOL by Cross Section Simple}
{M.3.15.13, #Description:
3D via CROSS-SECTION
Normally, the mapping UVs are linear. The trick here is to employ non-linear "U" (e.g. a radial gradient).
"V" is a volume-height gradient, driving texture vertical sampling - a linear gradient.
On Stage 13 we use a simplified material to educate users:
/Content /FluidNinjaLive /Input /Materials /CrossSectionGenerators /M_CrossSectionBased3DVolume_VerySimpleExample
ORIGINAL STAGE NAME: STAGE CR-1
}
{S.3.15.14, Stage 14 HVOL by Cross Section Mushroom}
{M.3.15.14, #Description:
3D via CROSS-SECTION
Notice the example Material, that generates animated 2D cross section:
1. Select the HVOL Actor
2. Select "WriteMaterialsToRenderTargets" Component
3. Double click on the "Source Material": MI_CrossSectionGenerator_Mushroom_SmallStatic

The "WriteMaterialsToRenderTargets" Component is reading our source material that generates the animated cross section for the volume and writes the Material output to a RenderTarget. Then, the Volumetric Material is reading this RenderTarget as input for the cross-section.

1. Select the HVOL Actor: "HVOL_Tutorial_CR2"
2. Locate the Volume Material at the Actor Details Panel
3. Double Click on the Mat to open the Editor
4. Locate the "xCrossSectionBasedDensity" Parameter Group at the Material Instance Details Panel
5. Locate the "Define3DVolumeViaCrossSections" bool flag, and the params below
6. Use the TOOLTIPS to explore params!

ORIGINAL STAGE NAME: STAGE CR-2
}

{S.3.15.15, Stage 15 Multilayer HVOL by Cross Section}
{M.3.15.15, #Description:
MULTILAYER HVOL
This stage serves as a PROOF-OF-CONCEPT: Multiple Heterogeneous Volumes could be blended,
using the MATERIAL LAYERS + HOST MATERIAL COMBO
The multilayer feat is utilized mainly on the "Clouds" and "Clouds_PASSIVE" demo levels.

ORIGINAL STAGE NAME: STAGE CR-3
}







#### {L.3.16, VolumeDemo_SVOL_Medium.umap, /Content /FluidNinjaLive /Levels /Misc}

{M.3.16, #Description:	
SmokeVolume area could extend beyond the sim covered area. The external areas are covered with noise-patterns, generated via SmokeVolume Material (see Noise options).

SmokeVolume CONTAINERS on this level are spatially UNLOCKED (attached to pawn).
To LOCK a container (make it fixed position):
1. Unparent from Pawn
2. Set the "AnchorVolume" flag to TRUE at the SmokeVolume Actor Details Panel

Key SmokeVolume Material param: DistanceFade
Anchored vs Non-Anchored containers need different DistanceFade values
Key SmokeVolume Material param: ShadowStepSize value
Controls the amount of shadow details / frequency

SmokeVolume Material is accessible at:
/LiveComponent /LiveOutputMaterials /SecondaryOutputMaterial
}
	{S.3.16.1, Stage 1 Medium Scale Smoke Volume Point Light}
	{M.3.16.1, #Description:	Extended SmokeVolume Container with 3D volume noise, single Point Light source}
	{S.3.16.2, Stage 2 Medium Scale Smoke Volume Directional Light}
	{M.3.16.1, #Description:	Extended SmokeVolume Container with 3D volume noise, Unlit}



#### {L.3.17, VolumeDemo_SVOL_Small.umap, /Content /FluidNinjaLive /Levels /Misc}

{S.3.17.0, Stage 0 INTRO}
{M.3.17.0, #Description: Smoke Volumes, SVOL
3D lit volumes driven by 2D Fluidsim, Sim density is used as HeightMap, Sim velocity is driving 3D noise flow.
Stages 7B and 8B demonstrate Heterogeneous Volume (HVOL) usage, compared to SVOL usage.
}
{S.3.17.1, Stage 1 Live Component vs Volume Smoke Renderer}
{M.3.17.1, #Description: NinjaLive Container: performs fluidsim, feeds sim output (buffers) + pos, scale to SmokeVolume
Smoke Volume Container: 3D WorldSpace Volume Visualization, HLSL-based raymarcher renders in ScreenSpace, result mapped on a Camera-Facing plane: "DepthSlicer".
}
{S.3.17.2, Stage 2 Six modes of using Smoke Volumes}
{M.3.17.2, #Description: 
There are six Volmetric Smoke Material Instance States. States could be switched in the Material Instances, under Lighting and Noise options.
1. Unlit, 2. Unlit with volumetric noise, 3. Point lit, 4. Point lit with volu. noise, 5. Directionally lit, 6. Dir.lit with volu. noise
}
{S.3.17.3, Stage 3 SVOL as External Renderes vs Internal Renderer}
{S.3.17.4, Stage 4 Live as Actor Component with SVOL as Internal Renderer}
{S.3.17.5, Stage 5 Point Lit SVOL normal vs noisy}
{S.3.17.6, Stage 6 Directionally Lit SVOL}
{S.3.17.7, Stage 7 Smoke Pool Point Lit SVOL vs HVOL compared}
		{SE.3.17.7.1, Setup A SVOL smoke pool}
		{SE.3.17.7.2, Setup B HVOL smoke pool}
{S.3.17.8, Stage 8 Vortex Point Lit SVOL vs HVOL compared}
		{SE.3.17.8.1, Setup A SVOL vortex}
		{SE.3.17.8.2, Setup B HVOL vortex}









#### {L.3.18, Water_Dense_Rain.umap, /Content /FluidNinjaLive /Levels /Misc}

{S.3.18.1, Stage 1 Particle based rain ripples on a lake}
{M.3.18.1, #Description: 
To make the water accumulate from zero density - vs - density-fill on given altitude:
/LiveComponent /LiveInputFields /HeightFields /ClampHeightLowerValues = FALSE vs TRUE

To make raindrops ADD density (accumulate water) - vs - only add velocity (make ripples on already existing water-surfaces)
/LiveComponent /LiveInputPoints /BrushKillers /SelectivelyKillBrushDensityKeepVelocity = "0" vs "5"

Current height method: "user defined flat plane + SDF"
To achieve perfect surface coverage: use RVT height input, or SceneCapture. 
Demonstrated on: Tutorial03_KeyConceptsForWater.umap

To influence how density ("water") accumulates on SDF surfaces:
/LiveComponent /LiveInputFields /HeightFields /FluidStability /FluidRepelBySDF
}

#### {L.3.19, Water_Dense_vs_Sparse.umap, /Content /FluidNinjaLive /Levels /Misc}

{S.3.19.1, Stage 1 Dense water setup demo}
{M.3.19.1, #Description: 
Dense type water setup (water is surface aligned, climbs on objects):
/LiveComponent /LiveSimulation /DensityAccumulation > 1 
Height: user defined plane + SDF:
/LiveComponent /LiveInputFields /HeightField /EnableHeightField = True
/LiveComponent /LiveInputFields /HeightField /ClampHeightLowerValues = True
/LiveComponent /LiveInputFields /HeightField /ForciblyCreateHeightField = True
/LiveComponent /LiveInputFields /MeshFields /AddMeshToLandscapeHeight = True
}
{S.3.19.2, Stage 2 Sparse water setup demo}
{M.3.19.2, #Description: 
Sparse type water setup:  water is NOT surface aligned / assigned to a flat plane
/LiveComponent /LiveSimulation /DensityAccumulation < 1
No elevation data at all - SDF contours used as Collision Mask
/LiveComponent /LiveInputFields /MeshFields /UseAsCollisionMask = True
}

#### {L.3.20, Water_Sparse_DoubleSim_TilingWaves.umap, /Content /FluidNinjaLive /Levels /Misc}

{S.3.20.1, Stage 1 Composite of two simulations in one Output Material}
{M.3.20.1, #Description: 
Combining two simulations by a single Output Material: Tiling Waves
SIM 1:  Interactive Pattern
SIM 2:  Tiled Wave Pattern
SIM 2 output is written to a RenderTarget - and the Output Material of SIM 1 is reading this RenderTarget as "TileMap".
In order to write nicely TILED output with SIM 2, the kay params are:
/RenderTarget Details Panel /Address X,Y: "Wrap"
/LiveComponent /LiveSimulation /Bounds /PressureEdgeMasking = 0

Ninja BaseMaterial comes with a Param Group ("Tilemap") to add extra details to the sim output. We could add two kind of TILED (wrapped, repeating) patterns here:
(1) static, tiled textures  (usually noise)
(2) dynamic (animated) tile-patterns. In this example: a tiled (wrapped) simulation, realtime generated by a SECOND ninja actor and written to a WRAPPED on-disk RenderTarget every frame. The Output Material of the FIRST ninja actor is reading buffers from BOTH actors (sim 1,2). Second sim data is being read at the "TileMap1" slot.

Note: There is an additional VolumeFog placed on Level. The VolumeFog Output Material is reading the SAME RenderTarget as the Sim1 Output Material - and processes it with the same tiling/offset params using WorldSpace UV. So, the result (volumetric fog) spatially MATCHES the surface-mapped visuals (fog + waves: in sync)

Compare 3 Output Materials: (A) no tiles, (B) static tiles and (C) simulated tiles:
/LiveComponent /LiveOutputMaterials /PrimaryOutputMaterialSelected: INDEX 0, 1, 2
}

#### {L.3.21, Water_Sparse_DoubleSim_Vortex.umap, /Content /FluidNinjaLive /Levels /Misc}

{S.3.21.1, Stage 1 Composite of two simulations in one Output Material}
{M.3.21.1, #Description: 
Combining two simulations by a single Output Material: Tiling Waves
SIM 1:  Interactive Pattern
SIM 2:  Tiled Wave Pattern
SIM 2 output is written to a RenderTarget - and the Output Material of SIM 1 is reading this RenderTarget as "TileMap".
In order to write nicely TILED output with SIM 2, the kay params are:
/RenderTarget Details Panel /Address X,Y: "Wrap"
/LiveComponent /LiveSimulation /Bounds /PressureEdgeMasking = 0

Ninja BaseMaterial comes with a Param Group ("Tilemap") to add extra details to the sim output. We could add two kind of TILED (wrapped, repeating) patterns here:
(1) static, tiled textures  (usually noise)
(2) dynamic (animated) tile-patterns. In this example: a tiled (wrapped) simulation, realtime generated by a SECOND ninja actor and written to a WRAPPED on-disk RenderTarget every frame. The Output Material of the FIRST ninja actor is reading buffers from BOTH actors (sim 1,2). Second sim data is being read at the "TileMap1" slot.

Note1: there is a VolumeSmoke Actor placed on Level ("VolumeSmokeContainer_Vortex").
Reading Sim2 data (the same RenderTarget that Sim1 Out.Mat. is reading).

Note2: there is an additional VolumeFog placed on Level ("VolumeFog_Mesh_DrivenByTextures" Actor).
The VolumeFog Output Material is reading noise textures - the result is non-interactive.
}

#### {L.3.22, Water_Sparse_Sea_Ship.umap, /Content /FluidNinjaLive /Levels /Misc}

{S.3.22.1, Stage 1 Large Ship on Sea}
{M.3.22.1, #Description: 
300 x 300 meters sim actor, attached to a 100 meters ship.
The setup is reading Mesh SDF as sim input: the ship hull is generating interaction.
Red meshes are tagged as "SDFSource".
On the ninja side:
/LiveComponent /LiveInputFields /MeshFields /EnableMeshDistanceFieldReader = True
/LiveComponent /LiveInputFields /MeshFields /UseTaggedMeshesAsSDFInput = SDFSource

Another key param:
/LiveComponent /LiveCore /SimSpeed
}


.
EOF