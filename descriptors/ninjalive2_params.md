---
doc_type: DESCRIPTOR
title: "NinjaLive v2 Params Descriptor"
date: 2026-07-16
source_url: "https://drive.google.com/file/d/1FedZwfW3iE1OgJr_Ye551TgaSLjqVUdj"
doc_revision: "1.86"
version_min: null
version_max: null
media_urls: []
---

# PARAMETER DESCRIPTOR
PARAMETERS OF THE FLUIDNINJA LIVE-2 ARCHITECTURE


**Updated:** 16 July 2026  


---------------------------------------------------------------------------------------


FACTS ABOUT THE SYNTAX OF THIS TEXT FILE:


- This file uses MarkDown syntax. It could be viewed as simple text. Opening it with an [MD viewer](https://markpad.dev) is recommended for visual clarity.
- Parameter names are "telling names": not just a unique ID for a variable, but a brief reference to functionality.
- Curly Braces {} are used exclusively for parameter descriptors. The first brace signs descriptor start, the second signs descriptor end.
- Synonyms used in the text: sim = simulation, param = parameter = variable, bool = flag = switch = bool flag = bool switch, buffer = temporary data storage, ninja = fluidninja = fluidninja live = ninjalive = live, solver = pressure solver, dynamic output material instances = MIDs, HVOL = HVolume = Heterogeneous Volume, FVOL = FVolume = Fog Volume, SVOL = SVolume = Smoke Volume, velo = velocity, util = utility, dev = developer


---------------------------------------------------------------------------------------

## Table of Contents

1. <a href="#1-introduction-to-parameters">Introduction to Parameters</a>
2. <a href="#2-livecomponent-param-groups">LiveComponent Param Groups</a>
3. <a href="#3-livecomponent-param-groups-with-param-names">LiveComponent Param Groups with Param Names</a>
4. <a href="#4-livecomponent-param-groups-with-param-names-and-metadata">LiveComponent Param Groups with Param Names and Metadata</a>
5. <a href="#5-liveactor-paramr-groups-with-param-names">LiveActor Param Groups with Param Names</a>
6. <a href="#6-liveactor-paramr-groups-with-param-names-and-metadata">LiveActor Param Groups with Param Names and Metadata</a>
7. <a href="#7-livecore-special-params">LiveCore Special Params</a>


---

**EXTERNAL RESOURCES:**  
- [Parameter Descriptor](https://drive.google.com/file/d/1FedZwfW3iE1OgJr_Ye551TgaSLjqVUdj), all Parameters of Live Component and Live Actor - with description.
- [Level Content Descriptor](https://drive.google.com/file/d/15d3QdfleD1jDw8LJ3YQEGpAP-89b9bKa), Levels, Stages and Setups in the ninja project - with on-level texts.  
- [Manual](https://drive.google.com/file/d/19qc6Si5AwDKS8iOinB4egCtdn2hse1aa) for FluidNinja LIVE-2

The above text files are using MarkDown syntax. 
Recommended MarkDown Viewer: [MarkPad](https://markpad.dev)  


---------------------------------------------------------------------------------------


## 1. Introduction to Parameters


FluidNinja LIVE-2 is a general purpose visual effect system for Unreal Engine. The LIVE-2 architecture is built on three wrapped layers: *NinjaLiveCore Niagara System*, wrapped by *NinjaLive Component*, optionally wrapped by *NinjaLive Actor*.


Depending on the use case - e.g. sand or water or smoke - the layered architecture could be in various states. Parameters define state. We can edit parameters at the Actor and Component Details Panel. Parameters could be loaded from and saved to a single Preset file.


- Niagara Core parameters are controlled by the wrapper component, we do not access them directly
- Most control parameters reside in Live Component: 323 parameters and 8 Editor Functions
- Using Live Actor is optional, with 24 control parameters


---------------------------------------------------------------------------------------

<div style="page-break-after: always;"></div>


## 2. LiveComponent Param Groups


The below parameter groups appear on the NinjaLive Component Details Panel and in the structure of Preset files. Note: the top-down order of param groups intuitively resembles the data flow: Input, Simulation, Output


SYNTAX DEFINITION FOR GROUP LIST ITEMS:
`Group` type list item: `{G.group number, group name}`

---

LIST OF THE MAIN PARAMETER GROUPS  
COUNT: 11 GROUPS LISTED


- {G.1, LiveCore}
- {G.2, LiveEditorTools}
- {G.3, LiveInputFields}
- {G.4, LiveInputPoints}
- {G.5, LiveSimulation}
- {G.6, LiveOutputRenderTargets}
- {G.7, LiveOutputMaterials}
- {G.8, LiveOutputParams}
- {G.9, LiveOutputExternalRenderers}
- {G.10, LiveOutputInternalRenderers}
- {G.11, LiveLegacy}


---


STRUCTURED LIST OF ALL PARAMETER GROUPS  
COUNT: 51 GROUPS LISTED


- **{G.1, LiveCore}**
  - {G.1.1, Performance}
  - {G.1.2, Debug}
  - {G.1.3, CVAR}
  - {G.1.4, LegacyPreset}
  - {G.1.5, Zlock}
  - {G.1.6, WorldSpaceOffset}
  - {G.1.7, DrawLinesBetweenPoints}
  - {G.1.8, Experimental}
  - {G.1.9, CoreNiagaraSystem}

- **{G.2, LiveEditorTools}**

- **{G.3, LiveInputFields}**
  - {G.3.1, Bitmaps}
    - {G.3.1.1, VelocityDensityFieldFromTexture}
    - {G.3.1.2, VelocityFieldFromTexture}
    - {G.3.1.3, CollisionMaskFromTexture}
  - {G.3.2, MeshFields}
  - {G.3.3, HeightFields}
    - {G.3.3.1, FluidStability}
    - {G.3.3.2, ExternalHeightData}
    - {G.3.3.3, RVTHeightData}
  - {G.3.4, SplineFields}
  - {G.3.5, Destructibles}
  - {G.3.6, Cache}

- **{G.4, LiveInputPoints}**
  - {G.4.1, BrushKillers}
  - {G.4.2, BrushNoise}
  - {G.4.3, BrushVelocity}
  - {G.4.4, BrushSpecial}
  - {G.4.5, InteractionWithOwner}

- **{G.5, LiveSimulation}**
  - {G.5.1, Bounds}
  - {G.5.2, Advanced}
  - {G.5.3, WavesFromLandscapeGradient}
  - {G.5.4, Noise}

- **{G.6, LiveOutputRenderTargets}**
  - {G.6.1, PaintVelocityDensityAndElevation}
  - {G.6.2, SimVelocityDensityAndWetmap}
  - {G.6.3, SimPressureDivergence}
  - {G.6.4, LegacyExporter}

- **{G.7, LiveOutputMaterials}**

- **{G.8, LiveOutputParams}**

- **{G.9, LiveOutputExternalRenderers}**

- **{G.10, LiveOutputInternalRenderers}**
  - {G.10.1, Mesh}
  - {G.10.2, HVolume}
  - {G.10.3, SVolume}
  - {G.10.4, FVolume}

- **{G.11, LiveLegacy}**
  - {G.11.1, RayMarching}
  - {G.11.2, SlowPostProcessSwitch}





---------------------------------------------------------------------------------------

<div style="page-break-after: always;"></div>


## 3. LiveComponent Param Groups with Param Names


The below parameter groups appear on the NinjaLive Component Details Panel and in the structure of Preset files. Note: the top-down order of param groups intuitively resembles the data flow: Input, Simulation, Output

SYNTAX DEFINITION FOR COMPONENT PARAMETER LIST ITEMS:
- `Group` type list item: 
`{G.group number, group name}`
- `Parameter` type list item: 
`{P.parameter number, parameter name, parameter type, default value}`


STRUCTURED LIST OF PARAMETER GROUPS WITH PARAMETER NAMES  
COUNT: 323 PARAMETERS AND 8 EDITOR FUNCTIONS LISTED IN 51 GROUPS


- **{G.1, LiveCore}**
  - {G.1.0, Root}
  - {P.1.0.1, InitSystemStateFromPreset, BOOL, 0}
  - {P.1.0.2, Preset, DATA ASSET, -}
  - {P.1.0.3, DisableComponent, BOOL, 0}
  - {P.1.0.4, ResolutionX, INT, 256}
  - {P.1.0.5, ResolutionY, INT, 256}
  - {P.1.0.6, ExtentsXYZ, VEC3,(5,5,1)}
  - {P.1.0.7, ExtentsFromInteractionVolume, BOOL, 0}
  - {P.1.0.8, ShowExtents, BOOL, 0}
  - {P.1.0.9, SimplePainterMode, BOOL, 0}
  - {P.1.0.10, CameraFacing, BOOL, 0}
  - {P.1.0.11, CamFaceBillboard, BOOL, 0}
  - {P.1.0.12, SimSpeed, FLOAT, 1}
  - {P.1.0.13, IgnoreSystemRotation, BOOL, 1}
  - {P.1.0.14, UseUnrealNativeTick, BOOL, 1}
  - {P.1.0.15, FlushBuffersOnReinit, BOOL, 0}

- **{G.1.1, Performance}**
  - {P.1.1.1, PauseSimWhenNotVisible, BOOL, 1}
  - {P.1.1.2, WaitBeforePause, FLOAT, 0.2}
  - {P.1.1.3, PaintBufferDownScaleFactor, INT, 2}
  - {P.1.1.4, FieldBufferDownScaleFactor, INT, 4}
  - {P.1.1.5, EnableCrudePressureSolver, BOOL, 0}
  - {P.1.1.6, MaxInteractionsPerSimArea, INT, 16000}
  - {P.1.1.7, MaxInteractionsPerNeighborCell, INT, 256}
  - {P.1.1.8, DataChannelThroughput, INT, 4000}
  - {P.1.1.9, AutoAdjustNeighborCellNumber, BOOL, 1}
  - {P.1.1.10, NeighborCellNumberXY, INT, 16}
  - {P.1.1.11, MaxSamplingFPS, INT, 60}
  - {P.1.1.12, MinSamplingFPS, INT, 30}
  - {P.1.1.13, LOD-ReduceSamplingFPS, BOOL, 0}
  - {P.1.1.14, LOD-NearBound, FLOAT, 2000}
  - {P.1.1.15, LOD-FarBound, FLOAT, 5000}
  - {P.1.1.16, LOD-Steps INT, 5}
  - {P.1.1.17, LOD-CheckFrequency, FLOAT, 0.5}

- **{G.1.2, Debug}**
  - {P.1.2.1, ShowLegacySetupWarning, BOOL, 1}
  - {P.1.2.2, ShowMouseCursor, BOOL, 1}
  - {P.1.2.3, ShowNumberOfTrackedObjects, BOOL, 0}
  - {P.1.2.4, ShowTrackedBoneNames, BOOL, 0}
  - {P.1.2.5, ShowTrackedPrimitiveNames, BOOL, 0}
  - {P.1.2.6, ShowDestructibleRemovals, BOOL, 0}
  - {P.1.2.7, ShowLODInitial, BOOL, 0}
  - {P.1.2.8, ShowLODRuntime, BOOL, 0}
  - {P.1.2.9, ShowInterfaceControl, BOOL, 0}
  - {P.1.2.10, ShowWarning-NumberOfBonesToTrack, BOOL, 1}
  - {P.1.2.11, ShowRaymarcherWarning, BOOL, 1}

- **{G.1.3, CVAR}**
  - {P.1.3.1, ExecuteCommandsAtStart, ARRAY, -}
  - {P.1.3.2, ExecuteCommandsAtEnd, ARRAY, -}

- **{G.1.4, LegacyPreset}**
  - {P.1.4.1, LegacyPreset, DataTable, -}
  - {P.1.4.2, PresetSearchPaths, Name Array, "/Game/FluidNinjaLive"}
  - {P.1.4.3, PresetNameFilterCriteria, Name, "NinjaLive"}

- **{G.1.5, Zlock}**
  - {P.1.5.1, ForceSimInitialZPosition, BOOL, 0}
  - {P.1.5.2, ForceSimInitialZPositionValue, FLOAT, 0}
  - {P.1.5.3, MovementLockedOnAxis, ENUM, 4}
  - {P.1.5.4, ApplySimZPositionToComponent, BOOL, 0}

- **{G.1.6, WorldSpaceOffset}**
  - {P.1.6.1, MovementNotQuantizedOnAxis, ENUM, 2}
  - {P.1.6.2, QuantizerStepSize, ENUM, 4}
  - {P.1.6.3, QuantizerManualSet, FLOAT, 1}

- **{G.1.7, DrawLinesBetweenPoints}**
  - {P.1.7.1, PosInterpolation, BOOL, 1}
  - {P.1.7.2, KillInterpolatorAboveThisVelocity, FLOAT, 10}

- **{G.1.8, Experimental}**
  - {P.1.8.1, ScaleInvariance, BOOL, 0}
  - {P.1.8.2, ScaleInvarianceBaseTexelDensity, FLOAT, 1}

- **{G.1.9, CoreNiagaraSystem}**
  - {P.1.9.1, CoreNiagaraSystem, OBJECT, NinjaLiveCore.uasset}


- **{G.2, LiveEditorTools}**

  - {P.2.1, EditorModeOFF, EDITOR FUNCTION,-}
  - {P.2.2, EditorModeON, EDITOR FUNCTION,-}
  - {P.2.3, PresetRead, EDITOR FUNCTION,-}
  - {P.2.4, PresetWrite, EDITOR FUNCTION,-}
  - {P.2.5, RestartSim, EDITOR FUNCTION,-}
  - {P.2.6, SaveSimBuffers, EDITOR FUNCTION,-}
  - {P.2.7, Stop, EDITOR FUNCTION,-}
  - {P.2.8, XLegacySetupConversion, EDITOR FUNCTION,-}
  - {P.2.9, PreserveNewSystemStateAfterPresetRead, BOOL, 0}
  - {P.2.10, ParamUpdateFrequency, FLOAT, 1}
  - {P.2.11, ContinouslyUpdateSystemStateFromPreset, BOOL, 0}
  - {P.2.12, ShowTaggedActorsOnlyInPlay, NAME, none}


- **{G.3, LiveInputFields}**

  - {G.3.0, Root}
  - {P.3.0.1, PersistencyOfFieldAndPointData, FLOAT, 0.2}
  - {P.3.0.2, InvertFieldAndPointDensity, FLOAT, 0}

  - **{G.3.1, Bitmaps}**

    - **{G.3.1.1, VelocityDensityFieldFromTexture}**
      - {P.3.1.1.1, VelocityDensityInputTexture, TEXTURE, -}
      - {P.3.1.1.2, TryToReadVelocityFromRGChannels, BOOL, 0}
      - {P.3.1.1.3, DensityTxtMult, FLOAT, 0.5}
      - {P.3.1.1.4, DensityTxtOffsetX, FLOAT, 0}
      - {P.3.1.1.5, DensityTxtOffsetY, FLOAT, 0}
      - {P.3.1.1.6, DensityTxtRandomOffset, FLOAT, 0}
      - {P.3.1.1.7, DensityTxtScale, FLOAT, 1}
      - {P.3.1.1.8, VelocityDensityInputRenderTarget, RENDERTARGET, -}

    - **{G.3.1.2, VelocityFieldFromTexture}**
      - {P.3.1.2.1, VelocityOnlyInputTexture, TEXTURE,-}
      - {P.3.1.2.2, MaskInputWithSimVelocity, FLOAT, 0}
      - {P.3.1.2.3, VeloInputOffsetSpeed, FLOAT, 0}
      - {P.3.1.2.4, VeloInputTile, FLOAT, 0}
      - {P.3.1.2.5, VeloRotate, FLOAT, 0}
      - {P.3.1.2.6, VelocityOnlyInputRenderTarget, RENDERTARGET, -}

    - **{G.3.1.3, CollisionMaskFromTexture}**
      - {P.3.1.3.1, CollisionMaskTexture, TEXTURE, -}
      - {P.3.1.3.2, CollisionMaskInvert, BOOL, 0}
      - {P.3.1.3.3, CollisionMaskMin, FLOAT, 0}
      - {P.3.1.3.4, CollisionMaskMax, FLOAT, 1}
      - {P.3.1.3.5, CollisionMaskUVmod, LINEARCOLOR, (0,0,1,0)}

  - **{G.3.2, MeshFields}**
    - {P.3.2.1, EnableMeshDistanceFieldReader, BOOL, 0}
    - {P.3.2.2, UseTaggedMeshesAsSDFInput, NAME, none}
    - {P.3.2.3, RecollectMeshSDFSoucesDuringGameTime, BOOL, 0}
    - {P.3.2.4, UseAsDensitySource, BOOL, 1}
    - {P.3.2.5, ScaleDensityWithVelocity, BOOL, 0}
    - {P.3.2.6, ScaleDensityWithVelocityPow, FLOAT, 1}
    - {P.3.2.7, UseAsVelocitySource, BOOL, 1}
    - {P.3.2.8, UseAsCollisionMask, BOOL, 0}
    - {P.3.2.9, WeakenCollisionMask, FLOAT, 0}
    - {P.3.2.10, AddMeshHeightToLandscapeHeight, BOOL, 1}
    - {P.3.2.11, DistanceFieldMult, FLOAT, 1}
    - {P.3.2.12, DistanceFieldZOffset, FLOAT, 0}
    - {P.3.2.13, ContourMult, FLOAT, 0.1}
    - {P.3.2.14, ContourZOffset, FLOAT, 10}
    - {P.3.2.15, ContourNoiseMult, FLOAT, 0.25}
    - {P.3.2.16, ContourNoiseFreq, FLOAT, 0.02}
    - {P.3.2.17, ContourNoiseScale, FLOAT, 1}
    - {P.3.2.18, MeshVelocityMult, FLOAT, 1}
    - {P.3.2.19, OutwardVelocityMult, FLOAT, 1}
    - {P.3.2.20, ZvelocityMult, FLOAT, 1}
    - {P.3.2.21, LimitDistanceFieldInsideMesh, BOOL, 1}
    - {P.3.2.22, SamplerVerticalOffset, FLOAT, 20}

  - **{G.3.3, HeightFields}**
    - {G.3.3.0, Root}
    - {P.3.3.0.1, EnableHeightField, BOOL, 0}
    - {P.3.3.0.2, ClampHeightLowerValues, BOOL, 0}
    - {P.3.3.0.3, ClampingValue, FLOAT, 0}
    - {P.3.3.0.4, OffsetHeight, FLOAT, 0}
    - {P.3.3.0.5, IgnoreHeightDataUseVelocityOnly, BOOL, 0}
    - {P.3.3.0.6, UseHeightAsCollisionMask, BOOL, 0}
    - {P.3.3.0.7, ForciblyCreateHeightField, BOOL, 0}
    - {P.3.3.0.8, LandscapeSample, DATAINTERFACE,-}

    - **{G.3.3.1, FluidStability}**
      - {P.3.3.1.1, EnablePeakAvoidance, BOOL, 0}
      - {P.3.3.1.2, FluidPeakAvoidance, FLOAT, 1}
      - {P.3.3.1.3, EnableGapFilling, BOOL, 0}
      - {P.3.3.1.4, FluidGapFillingTendency, FLOAT, 0.5}
      - {P.3.3.1.5, FluidRepelBySDF, FLOAT, 0.5}
      - {P.3.3.1.6, SoftenSDFRepelMask, BOOL, 0}

    - **{G.3.3.2, ExternalHeightData}**
      - {P.3.3.2.1, UseExternalHeightData, BOOL, 0}
      - {P.3.3.2.2, ExternalHeightDataFromRenderTarget, TEXTURE RENDERTARGET,-}
      - {P.3.3.2.3, ExternalHeightDataFromTexture, TEXTURE 2D,-}
      - {P.3.3.2.4, ExternalHeightDataNullPoint, FLOAT, 0}

    - **{G.3.3.3, RVTHeightData}**
      - {P.3.3.3.1, UseRVTAsHeightSource, BOOL, 0}
      - {P.3.3.3.2, RVTAsset, OBJECT, RVT asset}
      - {P.3.3.3.3, RVTSample, DATAINTERFACE,-}

  - **{G.3.4, SplineFields}**
    - {P.3.4.1, EnableSplineReader, BOOL, 0}
    - {P.3.4.2, TryToGenerateCollisionMaskUsingRVT, BOOL, 0}
    - {P.3.4.3, SoftenCollisionMask, FLOAT, 0.25}
    - {P.3.4.4, SplineWidth, FLOAT, 20}
    - {P.3.4.5, GetSplineComponentfromActor, OBJECT,-}
    - {P.3.4.6, GetSplineComponentsFromTaggedActors, NAME, none}
    - {P.3.4.7, RecollectSplinesDuringGame, BOOL, 0}
    - {P.3.4.8, Spline, DATAINTERFACE,-}

  - **{G.3.5, Destructibles}**
    - {P.3.5.1, EnableGeometryCollectionREADTOOLTIP, PLACEHOLDER,-}
    - {P.3.5.2, GetGeometryCollectionFromActor, OBJECT,-}
    - {P.3.5.3, GetGeometryCollectionFromTaggedActor, NAME, none}
    - {P.3.5.4, RecollectGeoCollectionsDuringGameTime, BOOL, 1}
    - {P.3.5.5, StopReadingActiveGeoCollectionAfterNSeconds, FLOAT, 3}
    - {P.3.5.6, GeometryCollection, DATAINTERFACE,-}

  - **{G.3.6, Cache}**
    - {P.3.6.1, StartSimFromCachedData, BOOL, 0}
    - {P.3.6.2, CachedPainterElevation, TEXTURE,-}
    - {P.3.6.3, CachedVelocityDensity, TEXTURE,-}
    - {P.3.6.4, CachedPressureDivergence, TEXTURE,-}


- **{G.4, LiveInputPoints}**

  - {G.4.0, Root}
  - {P.4.0.1, GlobalBrushSize, FLOAT, 1}
  - {P.4.0.2, PrimitiveObjBrushSize, FLOAT, 1}
  - {P.4.0.3, SkeletalMeshBrushSize, FLOAT, 1}
  - {P.4.0.4, ParticleBrushSize, FLOAT, 1}
  - {P.4.0.5, DestructibleBrushSize, FLOAT, 1}
  - {P.4.0.6, VehicleBrushSize, FLOAT, 1}
  - {P.4.0.7, MouseBrushSize, FLOAT, 1}
  - {P.4.0.8, UseTrackedObjectSize, BOOL, 1}
  - {P.4.0.9, UseObjBoundsInsteadOfScale, BOOL, 0}
  - {P.4.0.10, BrushStrength, FLOAT, 1}
  - {P.4.0.11, BrushHardness, FLOAT, 0}
  - {P.4.0.12, BrushPersistencyREADTOOLTIP, PLACEHOLDER,- }
  - {P.4.0.13, DestructiblePointReaderEnabled, BOOL, 1}
  - {P.4.0.14, DataChannelPointReaderEnabled, BOOL, 1}
  - {P.4.0.15, TrackedDestructiblesChaos, DATAINTERFACE,-}

  - **{G.4.1, BrushKillers}**
    - {P.4.1.1, EraserModeREADTOOLTIP, PLACEHOLDER,-}
    - {P.4.1.2, SelectivelyKillBrushDensityKeepVelocity, INT, 0}
    - {P.4.1.3, KillBrushBelowThisVelocity, FLOAT, 0}
    - {P.4.1.4, FadeBrushByZPos, BOOL, 0}
    - {P.4.1.5, FadeBrushByZPosInMeters, FLOAT, 1}

  - **{G.4.2, BrushNoise}**
    - {P.4.2.1, BrushPositionRandom, FLOAT, 0}
    - {P.4.2.2, BrushRndScaledByVelocity, BOOL, 0}
    - {P.4.2.3, BrushNoiseInWorldSpace, BOOL, 1}
    - {P.4.2.4, BrushDensityNoise, FLOAT, 0}
    - {P.4.2.5, BrushDensityNoiseScale, FLOAT, 1}
    - {P.4.2.6, BrushDensityNoiseFreq, FLOAT, 40}
    - {P.4.2.7, BrushDensityNoisePow, FLOAT, 2}
    - {P.4.2.8, BrushVelocityNoise, FLOAT, 1}
    - {P.4.2.9, BrushVelocityNoiseFreq, FLOAT, 0.1}
    - {P.4.2.10, BrushVelocityNoiseScale, FLOAT, 30}
    - {P.4.2.11, GenericBrushNoiseTexture, TEXTURE, T_NoiseTemplate2}

  - **{G.4.3, BrushVelocity}**
    - {P.4.3.1, BrushVelocityMultXY, FLOAT, 1}
    - {P.4.3.2, BrushVelocityMultZ, FLOAT, 1}
    - {P.4.3.3, BrushVelocityPow, FLOAT, 1.6}
    - {P.4.3.4, BrushVelocityClamp, FLOAT, 1}
    - {P.4.3.5, BrushPuncture, FLOAT, 0.05}
    - {P.4.3.6, NegativePuncture, BOOL, 0}
    - {P.4.3.7, ArrayBrushVelocity, FLOAT, 1}
    - {P.4.3.8, ParticleBrushVelocity, FLOAT, 1}

  - **{G.4.4, BrushSpecial}**
    - {P.4.4.1, BrushHardnessScaledByObjSize, FLOAT, 0}
    - {P.4.4.2, MovePrimitiveObjPivotFromCenterToBottom, FLOAT, 1}
    - {P.4.4.3, OffsetBrushPositionInMotionDirection, FLOAT, 0.5}
    - {P.4.4.4, ForceAdditiveStrokeBlending, BOOL, 0}

  - **{G.4.5, InteractionWithOwner}**
    - {P.4.5.1, InteractionWithOwnerActor, BOOL, 0}
    - {P.4.5.2, InteractionInclusiveObjType, ENUM,-}
    - {P.4.5.3, InteractionComponentNamesExact, NAME, none}
    - {P.4.5.4, InteractionBoneNamesExact, NAME, none}


- **{G.5, LiveSimulation}**

  - {G.5.0, Root}
  - {P.5.0.1, DensityAccumulation, FLOAT, 0.85}
  - {P.5.0.2, VeloFromBrushMotion, FLOAT, 1}
  - {P.5.0.3, VeloFromLandscapeGradient, FLOAT, 0.3}
  - {P.5.0.4, VeloFromSplineXY, FLOAT, 1}
  - {P.5.0.5, VeloFromSplineZ, FLOAT, 1}
  - {P.5.0.6, VeloFromBitmaps, FLOAT, 0.25}
  - {P.5.0.7, DirectVelocityX, FLOAT, 0}
  - {P.5.0.8, DirectVelocityY, FLOAT, 0}
  - {P.5.0.9, DirectVelocityInWorldSpace, BOOL, 0}
  - {P.5.0.10, DirectVelocityZ, FLOAT, 0}
  - {P.5.0.11, Divergence, FLOAT, 1}

  - **{G.5.1, Bounds}**
    - {P.5.1.1, PressureEdgeMasking, BOOL, 0}
    - {P.5.1.2, PressureEdgeMaskWidth, FLOAT, 0.15, BP-NIA}
    - {P.5.1.3, PainterEdgeMaskWidth, FLOAT, 0.05}
    - {P.5.1.4, EdgeMaskWidth, FLOAT, 0.25}
    - {P.5.1.5, EdgeMaskPow, FLOAT, 0.2}
    - {P.5.1.6, SimEdgeBounciness, FLOAT, 0.5}
    - {P.5.1.7, WetMapEdgeMaskWidth, FLOAT, 0.1}
    - {P.5.1.8, SimAreaClamp, BOOL, 1}
    - {P.5.1.9, PaintAreaClamp, BOOL, 1}

  - **{G.5.2, Advanced}**
    - {P.5.2.1, VeloFromSimAreaMotion, FLOAT, 0}
    - {P.5.2.2, WetmapFeedback, FLOAT, 0.93}
    - {P.5.2.3, PressureFeedback, FLOAT, 1}
    - {P.5.2.4, DivergenceFeedback, FLOAT, 1}
    - {P.5.2.5, VelocityFeedback, FLOAT, 0.99}
    - {P.5.2.6, VelocityClamp, FLOAT, 5}
    - {P.5.2.7, KernelIndexOffset, INT, 0}
    - {P.5.2.8, KernelMult, FLOAT, 1}

  - **{G.5.3, WavesFromLandscapeGradient}**
    - {P.5.3.1, InvertLandscapeGradientUnderClampedHeight, BOOL, 0}
    - {P.5.3.2, WaveVelocityTowardsTheCoastline, FLOAT, 0.75}
    - {P.5.3.3, WaveSpeed, FLOAT, 20}
    - {P.5.3.4, WaveFrequency, FLOAT, 0.65}
    - {P.5.3.5, PhaseShift1, FLOAT, 0.0}
    - {P.5.3.6, PhaseShift2, FLOAT, 0.4}

  - **{G.5.4, Noise}**
    - {P.5.4.1, VeloDirNoise, FLOAT, 0.1}
    - {P.5.4.2, VeloDirNoiseSize, FLOAT, 0.4}
    - {P.5.4.3, VeloDirNoiseSpeed, FLOAT, 2}
    - {P.5.4.4, MaskDirNoiseWithSimVelocity, FLOAT, 0}
    - {P.5.4.5, VeloAmplitudeNoiseEnabled, BOOL, 1}
    - {P.5.4.6, VeloAmplitudeNoiseTexture, TEXTURE, T_NoiseTemplate1_128px}
    - {P.5.4.7, VeloAmpNoise, FLOAT, 0.5}
    - {P.5.4.8, VeloAmpNoiseSize, FLOAT, 1}
    - {P.5.4.9, VeloAmpNoiseSpeed, FLOAT, 1}
    - {P.5.4.10, DensityNoiseEnabled, BOOL, 1}
    - {P.5.4.11, DensityNoiseTexture, TEXTURE, T_Noise3_128px}
    - {P.5.4.12, DensityNoiseAmount, FLOAT, 1}
    - {P.5.4.13, DensityNoiseTile, FLOAT, 2}
    - {P.5.4.14, DensityNoiseSpeed, FLOAT, 0.05}
    - {P.5.4.15, RandomizeNoiseOffsets, FLOAT, 0}


- **{G.6, LiveOutputRenderTargets}**

  - {G.6.0, Root}
  - {P.6.0.1, EnableOutputPainterElevation, BOOL, 1}
  - {P.6.0.2, EnableOutputVelocityDensity, BOOL, 1}
  - {P.6.0.3, EnableOutputPressureDivergence, BOOL, 1}

  - **{G.6.1, PaintVelocityDensityAndElevation}**
    - {P.6.1.1, RT_Painter, TEXTURE,-}
    - {P.6.1.2, InvertPaintbufferDensity, BOOL, 0}
    - {P.6.1.3, ExposeRelativeHeight, BOOL, 1}

  - **{G.6.2, SimVelocityDensityAndWetmap}**
    - {P.6.2.1, RT_VelocityDensity, TEXTURE,-}
    - {P.6.2.2, InvertFluidDensity, BOOL, 0}
    - {P.6.2.3, CopyInvertedDensityToAlpha, BOOL, 0}
    - {P.6.2.4, FluidDensityContrast, FLOAT, 1}

  - **{G.6.3, SimPressureDivergence}**
    - {P.6.3.1, RT_PressureDivergence, TEXTURE,-}
    - {P.6.3.2, BufferDownScaleFactor, INT, 2}

  - **{G.6.4, LegacyExporter}**
    - {P.6.4.1, DrawInternalRenderTargetToExternal, BOOL, 0}
    - {P.6.4.2, InternalRenderTargetsToExport ENUM,-}
    - {P.6.4.3, ExternalRenderTargets ARRAY,-}


- **{G.7, LiveOutputMaterials}**

  - {P.7.1, PrimaryOutputMaterialSelected, INT, 0}
  - {P.7.2, PrimaryOutputMaterials, ARRAY,-}
  - {P.7.3, Apply1stOutMatToActorsWithTag, NAME, none}
  - {P.7.4, Apply1stOutMatToComponentsWithTag, NAME, none}
  - {P.7.5, SecondaryOutputMaterialSelected, INT, 0}
  - {P.7.6, SecondaryOutputMaterials, ARRAY,-}
  - {P.7.7, Apply2ndOutMatToActorsWithTag, NAME, none}
  - {P.7.8, Apply2ndOutMatToComponentsWithTag, NAME, none}
  - {P.7.9, TertiaryOutputMaterialSelected, INT, 0}
  - {P.7.10, TertiaryOutputMaterials, ARRAY,-}
  - {P.7.11, Apply3rdOutMatToActorsWithTag, NAME, none}
  - {P.7.12, Apply3rdOutMatToComponentsWithTag, NAME, none}
  - {P.7.13, RecollectOutputMaterialTargetsDuringGameTime, BOOL, 0}
  - {P.7.14, RecollectFrequency, FLOAT, 1}



- **{G.8, LiveOutputParams}**

  - {P.8.1, SetInternalParamsToMaterialParamCollection, MPCASSET,-}
  - {P.8.2, ResolveCompetitionWithExternalUtilities, BOOL, 0}



- **{G.9, LiveOutputExternalRenderers}**

  - {P.9.1, DriveNiagaraComponentInTaggedActors, NAME, none}
  - {P.9.2, ExposeOutputMaterialToSurfaceAlignedNiagaraMeshes, BOOL, 0}
  - {P.9.3, MeshMaterial, ENUM, 1}
  - {P.9.4, ExposeOutputMaterialToSurfaceAlignedNiagaraFVOL, BOOL, 0}
  - {P.9.5, FVOLMaterial, ENUM, 1}
  - {P.9.6, ExposeOutputMaterialToSurfaceAlignedNiagaraHVOL, BOOL, 0}
  - {P.9.7, HVOLMaterial, ENUM, 1}



- **{G.10, LiveOutputInternalRenderers}**

  - **{G.10.1, Mesh}**

    - {P.10.1.1, ForceHideVisualizationMesh, BOOL, 0}
    - {P.10.1.2, AutoHideVMeshIfExternalVMeshUsed, BOOL, 1}
    - {P.10.1.3, VMeshOutputMaterialUsage, ENUM, 0}
    - {P.10.1.4, VisualizationMesh, MESH, DefaultVisualizationMesh }
    - {P.10.1.5, PreferWorldSpaceInMeshMaterial, BOOL, 0}

  - **{G.10.2, HVolume}**
    - {P.10.2.1, HVolumeRender, BOOL, 0}
    - {P.10.2.2, HVolumeExtentsZ, FLOAT, 10  }
    - {P.10.2.3, HVolumeOutputMaterialUsage, ENUM, 1}
    - {P.10.2.4, HVolumeResolution, INT, 256}

  - **{G.10.3, SVolume}**
    - {P.10.3.1, SVolumeRender, BOOL, 0}
    - {P.10.3.2, SVolumeOutputMaterialUsage, ENUM, 1}
    - {P.10.3.3, SVolumeAnchor, BOOL, 0} BPONLY}
    - {P.10.3.4, SVolumeLockRotation, BOOL, 0}
    - {P.10.3.5, SVolumePositionOffset, VEC, (0,0,0)}
    - {P.10.3.6, SVolumeTranslucentSortPriority, INT, -1}
    - {P.10.3.7, SVolumeTrackThisActorAsPointLight, ACTOR,-}

  - **{G.10.4, FVolume}**
    - {P.10.4.1, FVolumeRender, BOOL, 0}
    - {P.10.4.2, FVolumeExtentsZ, FLOAT, 10}
    - {P.10.4.3, FVolumeOutputMaterialUsage, ENUM, 1}


- **{G.11, LiveLegacy}**

  - {G.11.0, Root}
  - {P.11.0.1, GlobalBrushScale, FLOAT, 1}
  - {P.11.0.2, AllowAbsoluteBlackDensity, BOOL, 0}
  - {P.11.0.3, InputRenderTarget, TEXTURE,-}
  - {P.11.0.4, TraceMeshTranslucentSortPrio, INT, 0}
  - {P.11.0.5, PressureEdgeMaskingLegacy, FLOAT, 0}

  - **{G.11.1, RayMarching}**
    - {P.11.1.1, EnableRayMarching, BOOL, 0}
    - {P.11.1.2, LightDirectionProvider, ACTOR,-}
    - {P.11.1.3, LightDirectionSourceIsRotation_NOT_Pos, BOOL, 1}
    - {P.11.1.4, DistanceBasedLightAttenuation, BOOL, 0}
    - {P.11.1.5, AttenuationPower, FLOAT, 1}
    - {P.11.1.6, PointLightMovementMultiplier, FLOAT, 1}
    - {P.11.1.7, TwoSidedShading, BOOL, 0}
    - {P.11.1.8, TwoSideBlendPow, FLOAT, 0.25}
    - {P.11.1.9, Facing, FLOAT, 1}
    - {P.11.1.10, OffsetLightVector, VEC3, (0,0,0)}
    - {P.11.1.11, ForceManualSunPosition, BOOL, 0}
    - {P.11.1.12, SunLatitude, FLOAT, 0}
    - {P.11.1.13, SunLongitude, FLOAT, 0}
    - {P.11.1.14, SunHeight, FLOAT, 0}
    - {P.11.1.15, ShowLightDirectionVector_(Yellow), BOOL, 0}
    - {P.11.1.16, ShowNiagaraSysUpvector_(Red), BOOL, 0}
    - {P.11.1.17, ShowFacingPlane, BOOL, 0}
    - {P.11.1.18, PrintFacing, BOOL, 0}

  - **{G.11.2, SlowPostProcessSwitch}**
    - {P.11.2.1, TurnOnPostProcessIfCameraUnderWater, BOOL, 0}
    - {P.11.2.2, CameraDependentPostProcessVolume, ACTOR ARRAY,-}
    - {P.11.2.3, CamPosQueryRefreshRate, FLOAT, 25}






---------------------------------------------------------------------------------------

<div style="page-break-after: always;"></div>


## 4. LiveComponent Param Groups with Param Names and Metadata


The below parameter groups appear on the NinjaLive Component Details Panel and in the structure of Preset files. Note: the top-down order of param groups intuitively resembles the data flow: Input, Simulation, Output

SYNTAX DEFINITION FOR COMPONENT PARAMETER LIST ITEMS:

- `Group` type list item: 
`{G.group number, group name}`
- `Parameter` type list item: 
`{P.parameter number, parameter name, parameter type, default value, usage type}`
- `Parameter Metadata` type list item: 
`{M.parameter number, #metadata category: metadata}`


PARAMETER USAGE TYPES:

- NIAGARAONLY: the param exists only in the niagara core system (NinjaLiveCore.uasset)
- BPONLY: the param exists only in the wrapper blueprint (NinjaLiveComponent.uasset)
- BP-NIA: the param exists both in the niagara core system and the wrapper blueprint


PARAMETER METADATA CATEGORY TYPES:

- #Description: brief summary on parameter usage, also used as Tooltip in Unreal Editor
- #Niagaraname: IF a parameter is "BP-NIA" AND blueprint param name != niagara param name
- #Legacyname: original parameter name under LIVE 1.9
- #Comment: arbitrary information
- #Nesting: the parameter's hierarchical nesting in Live Component parameter groups

---

LIST OF PARAMETER GROUPS WITH PARAMETER NAMES AND METADATA  
COUNT: 323 PARAMETERS AND 8 EDITOR FUNCTIONS LISTED IN 51 GROUPS


{G.1, LiveCore}
{G.1.0, Root}


{P.1.0.1, InitSystemStateFromPreset, BOOL, 0, BPONLY}
{M.1.0.1, #Nesting: /LiveComponent /LiveCore}
{M.1.0.1, #Description: 
Initialize Live Component variables and Live Actor variables from a single Data Asset (a Preset) defined at /LiveCore /Preset.
IN-GAME, the values coming from the Preset override the values coming from the input fields of Component and Actor Details Panel.
IN-EDITOR, the original input field values persist. 

TIP 1: to permanently overwrite input field values, use the /LiveEditorTools /PresetRead EDITOR FUNCTION IN-EDITOR, 
then set /LiveEditorTools /PreserveNewSystemStateAfterPresetRead = True, and save the level. 

TIP 2: this feature is particularly useful when we are spawning Live Component or Actor.
}


{P.1.0.2, Preset, DATA ASSET,-, BPONLY}
{M.1.0.2, #Nesting: /LiveComponent /LiveCore}
{M.1.0.2, #Description: 
A Preset is a single Data Asset storing the state of all user exposed variables of Live Component and Live Actor. 

Live Component holds 329 variables, Live Actor holds 24 variables. If Live Component is added to an arbitrary Actor (not Live Actor), 
the preset values for Live Actor are ignored. We can save and load a Preset under the /LiveEditorTools parameter group, 
using the PresetRead and PresetWrite EDITOR FUNCTIONs IN-EDITOR. 

TIP: this feature is particularly useful when we are spawning Live Component or Actor.
}


{P.1.0.3, DisableComponent, BOOL, 0, BPONLY}
{M.1.0.3, #Nesting: /LiveComponent /LiveCore}
{M.1.0.3, #Description: 
If True, Live Component will not initialize. 

If dynamically set to True while Live Component is already running, the component Tick Event is blocked and the component is paused. 
Tick could be restored (component un-paused) by setting the variable to False again. Tick restore does NOT reinitialize the component. 
It works like a pause-play function. To fully reinitialize the component (reset state and restart) call Live Component “RePlay” Event. 
If NinjaLive Component is added to NinjaLive Actor, the Actor's “DisableBlueprint” bool switch disables both Actor and Component.
}


{P.1.0.4, ResolutionX, INT, 256, BP-NIA}
{M.1.0.4, #Nesting: /LiveComponent /LiveCore}
{M.1.0.4, #Description: 
Base resolution (in texels) for all simulation and paint buffers, X axis. 

HINT: calculate texel world space size in meters (how big a texel is in the sim area, on the level) 
by dividing the X component of the "ExtentsXYZ" param with "ResolutionX". 

For example: we have a 100 meters sim area, and our resolution is 1000 pixels. 100 divided by 1000 = 0.1, 
so each texel is 0.1 meters (10 centimeters) in world space.
}


{P.1.0.5, ResolutionY, INT, 256, BP-NIA}
{M.1.0.5, #Nesting: /LiveComponent /LiveCore}
{M.1.0.5, #Description: 
Base resolution in texels for all simulation and paint buffers, Y axis. 

HINT: calculate texel world space size in meters (how big a texel is in the sim area, on the level) 
by dividing the Y component of the "ExtentsXYZ" param with "ResolutionY".
}


{P.1.0.6, ExtentsXYZ, VEC3,(5,5,1), BP-NIA}
{M.1.0.6, #Nesting: /LiveComponent /LiveCore}
{M.1.0.6, #Description: 
This KEY parameter defines both Simulation Area size and Live Component Interaction Volume size (in meters). 

IMPORTANT: we NEVER use Live Component and Live Actor Scale Transform to resize the sim area. 
Keep Scale Transform on 1,1,1 and use the "ExtentsXYZ" param for resizing. 

NOTE 1: Unreal's default Unit is centimeters. "ExtentsXYZ" is using meters. A (5,5,1) sized ninja sim area is (500,500,100) Unreal units.

NOTE 2: ninja is a 2D simulation and the size of the 2D sim area is defined by the X,Y parts of "ExtentsXYZ". 
The Z part of "ExtentsXYZ" is irrelevant for the sim area - it defines the height of the Live Component Interaction Volume. 

NOTE 3: Live Component Interaction Volume is a filter for ALL point-like simulation inputs (particles, destructibles, primitives, bones). 
Points inside the volume interact with the sim (leave marks in the paint buffer), points outside the volume are ignored. 
Good to know: we can modify brush strength with input point Z-position. Points closer to the ground leave stronger marks,
see this param: /LiveInputPoints /BrushKillers /FadeBrushByZPos. 

NOTE 4: Live COMPONENT Interaction Volume should not be confused with Live ACTOR Interaction Volume - which is a filter
for point-like data collected exclusively by Live Actor (primitives, bones). Two reasons why we have a separate Interaction Volume 
for the Component and the Actor: (A) Live Component could be used without Live Actor and (B) the collection of particle-points 
and destructible-points is managed exclusively by Live Component, without the Actor. 

NOTE 5: Live Component could be used to visualize Volumetrics, using Internal Renderers (see /LiveOutputInternalRenderers
parameter group). The XY size of the rendered volumes comes from "ExtentsXYZ". The Z size of the rendered volume is defined 
by the "HVolumeExtentsZ" and "FVolumeExtentsZ" params. Reason to have dedicated Z size variables for Rendered Volumes: 
most usecases require a "tall" Rendered Volume paired with a "flat" Interaction Volume, we need to adjust the Z size for these 
two volumes separately. For example: we want to make dust as a character is running in sand.
We set the Component Interaction Volume Z to 5 centimeters (footsteps are generated only, when the foot is close to the surface), 
while the Rendered Volume Z is 50 centimeters (the dust is being kicked up high).
}


{P.1.0.7, ExtentsFromInteractionVolume, BOOL, 0, BPONLY}
{M.1.0.7, #Nesting: /LiveComponent /LiveCore}
{M.1.0.7, #Description: 
Get ExtentsXYZ from Live ACTOR "InteractionVolume" parameter (IF available) and ignore Live COMPONENT "ExtentsXYZ" param.
}


{P.1.0.8, ShowExtents, BOOL, 0, BP-NIA}
{M.1.0.8, #Nesting: /LiveComponent /LiveCore}
{M.1.0.8, #Description: 
Visualize sim area ExtentsXYZ as a yellow wireframe box IN-GAME.
}


{P.1.0.9, SimplePainterMode, BOOL, 0, BP-NIA}
{M.1.0.8, #Nesting: /LiveComponent /LiveCore}
{M.1.0.8, #Description: 
Ninja tracks objects inside the sim area, writing their position and velocity data into a "Paint Buffer", like a brush 
leaving marks on a canvas. By default the Paint Buffer is not visualized, instead, it is used as input for the fluid simulation.

"SimplePainterMode" disables all fluidsim functions and directly visualizes the PaintBuffer.
The result is a minimal system with lower memory consumption and lighter GPU load.
Ideal for footsteps, wheel tracks and surface marks in general.

NOTE 1: By increasing the value of the following parameter: /LiveInputFields /PersistencyOfFieldAndPointData ,
objects leave persistent marks, trails as they move. 

NOTE 2: Paint Buffer is a temporary storage to aggregate "point like" input data, like particles, bones, object pivots. 
"Field Buffer" is like the Paint Buffer, except it is not for "point like" input data, but for distance fields (SDF). 
In the Data Pipeline, Field Buffer content is eventually merged into the Paint Buffer, and the merged buffer 
is forwarded to the simulation as input. For the sake of simplicity, the merged buffer is also called "Paint Buffer".
}


{P.1.0.10, CameraFacing, BOOL, 0, BP-NIA}
{M.1.0.10, #Nesting: /LiveComponent /LiveCore}
{M.1.0.10, #Comment: CameraFacing automatically sets ForceLocalSpaceInMeshMaterial = True and QuantizerStepsize = (-1). The (-1) value means "No Quantizer, SimBuffer Offset Automatic, Extremes Clamped"}
{M.1.0.10, #Description: 
Ninja is running a 2D fluidsim. We can make it look 3D, by constantly turning the sim towards the Player Camera, 
so the player is always looking at the sim at a perpendicular angle. The sim is "facing the camera". 

NOTE: we can improve the camera facing trick by setting up a cubic Interaction Volume (e.g. size = 5,5,5) 
using the "ExtentsXYZ" param, instead of using a "thin" volume (e.g. size = 5,5,1). 
Explanation: a cubic interaction volume also tracks points in front of the sim plane and behind the sim plane 
(and these points are being visualized too, on the sim plane). Interaction is not limited to the camera facing plane - but a volume. 
For example: we are tracking the debris chunks of an exploding destructible object, the camera facing ninja setup 
is positioned in the center of explosion, interaction volume size = explosion bounds.
}


{P.1.0.11, CamFaceBillboard, BOOL, 0, BP-NIA}
{M.1.0.11, #Nesting: /LiveComponent /LiveCore}
{M.1.0.11, #Description: 
A "billboard-like" camera facing with vertical rotation axis.
}


{P.1.0.12, SimSpeed, FLOAT, 1, BP-NIA}
{M.1.0.12, #Nesting: /LiveComponent /LiveCore}
{M.1.0.12, #Description: 
Speeding up or slowing down the simulation. 

Technically, we are changing how information is being propagated in the sim space by changing the distance of "neighbor sampling" 
for each simulation texel. Larger SimSpeed value results larger sampling distance, so changes propagate faster - but we also lose 
spatial fidelity, we are losing details. This is a faux method. The true method would be performing more or less simulation cycles,
doing subframe calculations. Ninja does not support the true method.
}


{P.1.0.13, IgnoreSystemRotation, BOOL, 1, BP-NIA}
{M.1.0.13, #Nesting: /LiveComponent /LiveCore}
{M.1.0.13, #Description: 
Most ninja setups should IGNORE the Rotation Transform of Live Component and Live Actor. 

(A) Camera Facing setups (smoke, fire, explosion) automatically align with Camera Rotation. 
(B) World Facing setups (water, sand) align with World XYZ axes. In a few special cases (eg. a waterfall setup, 
using a custom mesh, rotated to a location defined angle), we want to use local sim space and user defined rotation, 
coming from Live Component and Live Actor Rotation Transform.

In these special cases we set "IgnoreSystemRotation" = False. Otherwise, when is "IgnoreSystemRotation" = True, 
it is suggested to set Live Component and Live Actor Rotation Transform to 0,0,0 and ABSOLUTE.
}


{P.1.0.14, UseUnrealNativeTick, BOOL, 1, BPONLY}
{M.1.0.14, #Nesting: /LiveComponent /LiveCore}
{M.1.0.14, #Description: 
Live Component is usig a Tick signal coming from native Niagara Callback Handler. 
Alternatively, we can use a custom Tick generator in the Component. 
This might be a good fallback option if EPIC developers decide to ditch the Callback Handler in the future for some reason.
}


{P.1.0.15, FlushBuffersOnReinit, BOOL, 0, BPONLY}
{M.1.0.15, #Nesting: /LiveComponent /LiveCore}
{M.1.0.15, #Description: 
Erase Niagara Core Grid2D buffers when LiveComponent "RePlay" Event is called.
If FALSE, simulation and paint buffer data is preserved.
}


{G.1.1, Performance}


{P.1.1.1, PauseSimWhenNotVisible, BOOL, 1, BPONLY}
{M.1.1.1, #Nesting: /LiveComponent /LiveCore /Performance}
{M.1.1.1, #Description: 
Pause the simulation when player is not looking at it, unpause when player focus returns. 
Technically, Tick execution flow is blocked during pause. Focus is detected using the "Was Actor Recently Rendered" Blueprint node. 

HINT: to fully reinitialize the component (reset component state and restart) call Live Component “RePlay” Event.
}


{P.1.1.2, WaitBeforePause, FLOAT, 0.2, BPONLY}
{M.1.1.2, #Nesting: /LiveComponent /LiveCore /Performance}
{M.1.1.2, #Description: 
Time (in seconds) before pausing the sim when player is not looking at it.
}


{P.1.1.3, PaintBufferDownScaleFactor, INT, 2, BP-NIA}
{M.1.1.3, #Nesting: /LiveComponent /LiveCore /Performance}
{M.1.1.3, #Niagaraname: Painter.PaintBufferDownScaleFactor
{M.1.1.3, #Description: 
Decrease Paint Buffer resolution (texels) compared to the reference value, defined by the "ResolutionX" and "ResolutionY" params. 
A downscale factor of 2 means halved Paint Buffer resolution. 

Reason: when running a fluid simulation, paint buffer is not visualized directly, but used as input for the sim - and for this, 
we do not need too much details. On the contrary: if SimplePainterMode = True, full resolution Paint Buffer is forced, 
ignoring the downscale factor. In SimplePainterMode, Paint Buffer is directly visualized, and we need details. 

NOTE: Paint Buffer is a temporary storage to aggregate "point like" input data, like particles, bones, object pivots.
}


{P.1.1.4, FieldBufferDownScaleFactor, INT, 4, BP-NIA}
{M.1.1.4, #Nesting: /LiveComponent /LiveCore /Performance}
{M.1.1.4, #Description: 
Field Buffer is like the Paint Buffer, except it is not aggregating "point like" input data, but distance fields (mesh SDF). 
Downscaling Field Buffer resolution (texels) with a factor of 4 means quarter resolution. 

As Mesh Distance Field Sampling is both memory and GPU heavy, it is recommended to keep the 4-times downscale factor. 
For high detail setups and cinematic usage, we can use "1" (no downscaling). 

NOTE: later on, in the Data Pipeline, Field Buffer content is eventually merged into the Paint Buffer, and the merged buffer 
is forwarded to the simulation as input. For the sake of simplicity, the merged buffer is also called "Paint Buffer" - but, 
using the separate "paint" and "field" downscale params we can adjust resolution independently - before the data merge.
}


{P.1.1.5, EnableCrudePressureSolver, BOOL, 0, BP-NIA}
{M.1.1.5, #Nesting: /LiveComponent /LiveCore /Performance}
{M.1.1.5, #Niagaraname: Pressure.EnableCrudePressureSolver}
{M.1.1.5, #Description: 
If this bool is True, the pressure solver is performing less calculations on the GPU - but the visual output is inferior.
}


{P.1.1.6, MaxInteractionsPerSimArea, INT, 16000, BP-NIA}
{M.1.1.6, #Nesting: /LiveComponent /LiveCore /Performance}
{M.1.1.6, #Description: 
Limiting the total number of "point-like" simulation input entries (particles, bones, object pivots) 
in the entire simulation area, during a given frame. This limit has no effect on "field-like" input sources like Mesh SDF.
}


{P.1.1.7, MaxInteractionsPerNeighborCell, INT, 256, BP-NIA}
{M.1.1.7, #Nesting: /LiveComponent /LiveCore /Performance}
{M.1.1.7, #Description: 
The sim area is divided into "Neighbor Grid" cells (a hash grid), in order to make the processing of "point like" input data 
(particles, bones, object pivots) less GPU heavy. 

Using this variable, we can limit the amount of "point like" data being processed by a single Neighbor Grid cell.
}


{P.1.1.8, DataChannelThroughput, INT, 4000, BP-NIA}
{M.1.1.8, #Nesting: /LiveComponent /LiveCore /Performance}
{M.1.1.8, #Description: 
Data Channels are generic, dynamically updated data containers in Unreal: both blueprints and niagara systems 
could read and write them, on the CPU and on the GPU, they can hold float and vector values. 

Ninja can read Data Channel entries as point-like input. 
The feature could be enabled at /LiveInputPoints /DataChannelPointReaderEnabled. 
The "DataChannelThroughput" variable is setting a limit on the amount of entries being read from the Data Channel by Ninja.
}


{P.1.1.9, AutoAdjustNeighborCellNumber, BOOL, 1, BP-NIA}
{M.1.1.9, #Nesting: /LiveComponent /LiveCore /Performance}
{M.1.1.9, #Description: 
Determine the number of neighbor grid cells (hashgrid) based on simulation area size (ExtentsXYZ) 
using the one-cell-per-meter rule. For example, a 4x4 meters sim area is divided to 4x4 neighbor cells.
}


{P.1.1.10, NeighborCellNumberXY, INT, 16, BP-NIA}
{M.1.1.10, #Nesting: /LiveComponent /LiveCore /Performance}
{M.1.1.10, #Description: 
The sim area is divided into "Neighbor Grid" cells (a hash grid), in order to make the processing of "point like" input data 
(particles, bones, object pivots) less GPU heavy. Spatial hashing method is being employed: simulation texels (Grid 2D Cells) 
process data only from nearby input points. Near/far threshold is determined by the Neighbor Grid: 
if a simulation cell and an input point is in the same Neighbor Grid cell, data is being processed. 
By reducing the number of Neighbor Cells, we are losing the advantage of the hash grid: a single neighbor cell means, 
each simulation cell is processing each input point. On the other hand, a very large number of neighbor cells increases 
the amount of calculations needed to assign points to neighbor cells. The default value of this variable (16x16 grid) 
seems like a good compromise.
}


{P.1.1.11, MaxSamplingFPS, INT, 60, BPONLY}
{M.1.1.11, #Nesting: /LiveComponent /LiveCore /Performance}
{M.1.1.11, #Description: 
The maximum number of ninja data processing cycles per second. 

NOTE 1: the actual IN-GAME FPS is a hard-limit, ninja can not perform sub-frame data processing cycles. 
NOTE 2: LOD scales the number of cycles between min-max ranges depending on simulation-player distance. 
NOTE 3: VSync is also limiting MaxFPS.
}


{P.1.1.12, MinSamplingFPS, INT, 30, BPONLY}
{M.1.1.12, #Nesting: /LiveComponent /LiveCore /Performance}
{M.1.1.12, #Description: 
The minimum number of ninja data processing cycles per second. 
This parameter is used only, if LOD is enabled. 
The number of data processing cycles is not going below the value defined here.
}


{P.1.1.13, LOD-ReduceSamplingFPS, BOOL, 0, BPONLY}
{M.1.1.13, #Nesting: /LiveComponent /LiveCore /Performance}
{M.1.1.13, #Description: 
Reduce the number of ninja data processing cycles per second, as the player is distancing from the simulation. 
Distance is calculated from Player Camera position vs Live Component position. 
Cycle number Min-Max is defined by the "MinSamplingFPS" and "MaxSamplingFPS" params. 

IMPORTANT: there is an alternative way for setting up LOD, besides the current, Live Component driven method. 
Niagara Systems in general, and NinjaLiveCore Niagara System in particular, features optional CULLING with customized parameters. 

PRO: we can define distance based culling reaction for a niagara system - with "sleep" and "clear" (remove) on the list of available options. 
CON: the LOD settings are not available as User Parameter: we must reference a specific config file in the niagara system. 
This means: all instances of NinjaLiveCore on all levels inherit these settings, defined in the config file. No good. 
In practice, we need very different LOD settings for various ninja setups.

GUIDE for setting up Niagara LOD: 
(1) open /Content /FluidNinjaLive /NinjaLiveCore.uasset Niagara System with Niagara Editor, 
(2) select NinjaLiveCore System module stack (light blue), 
(3) select the topmost module "Properties",
(4) on the Details Panel, click on the "EffectType" input field, and pick one of the two included example setups. 

Path: Content /FluidNinjaLive /OutputNiagara /Assets /LOD /Niagara_DistanceCull_AsleepAndClear_100m or Niagara_DistanceCull_Asleep_40m.
}


{P.1.1.14, LOD-NearBound, FLOAT, 2000, BPONLY}
{M.1.1.14, #Nesting: /LiveComponent /LiveCore /Performance}
{M.1.1.14, #Description: 
Set LOD min distance: within this range MaxSamplingFPS is used (the number of data processing cycles increases 
as we approach the sim, until this range). NOTE: this setting is NOT related to Live Actor Activation volume size.
}


{P.1.1.15, LOD-FarBound, FLOAT, 5000, BPONLY}
{M.1.1.15, #Nesting: /LiveComponent /LiveCore /Performance}
{M.1.1.15, #Description: 
Set LOD max distance: outside this range MinSamplingFPS is used (the number of data processing cycles decreases 
as we distance from the sim, until this range). NOTE: this setting is NOT related to Live Actor Activation Volume size.
}


{P.1.1.16, LOD-Steps INT, 5, BPONLY}
{M.1.1.16, #Nesting: /LiveComponent /LiveCore /Performance}
{M.1.1.16, #Description: 
Number of LOD adjustment steps between LOD Min-Max Bounds.
}


{P.1.1.17, LOD-CheckFrequency, FLOAT, 0.5, BPONLY}
{M.1.1.17, #Nesting: /LiveComponent /LiveCore /Performance}
{M.1.1.17, #Description: 
LOD response time in seconds: the frequency of camera-to-simulation distance checking.
}


{G.1.2, Debug}


{P.1.2.1, ShowLegacySetupWarning, BOOL, 1, BPONLY}
{M.1.2.1, #Nesting: /LiveComponent /LiveCore /Debug}
{M.1.2.1, #Description: 
LIVE-2 is detecting legacy setups inherited from a LIVE-1 era, by checking the "LegacyPreset" variable. 
If LegacyPreset is assigned with a DataTable type asset (not used in LIVE-2, used as data storage under LIVE-1), 
we are surely encountering a legacy setup. 

NOTE: we can convert a legacy LIVE-1 setup to LIVE-2 setup by pressing this EDITOR FUNCTION /LiveEditorTools /XLegacySetupConversion, 
also setting the "PreserveNewSystemStateAfterPresetRead" bool to True, and saving the Level.
}


{P.1.2.2, ShowMouseCursor, BOOL, 1, BPONLY}
{M.1.2.2, #Nesting: /LiveComponent /LiveCore /Debug}
{M.1.2.2, #Description: 
There are four UI locations to modify Mouse-pointer related settings: 
(1) THIS bool flag here, (2) a similar flag at the Actor Details Panel of "PawnAndCameraUtility" 
(marked with a green-N icon on levels), (3) Live Actor Details Panel /LiveInteraction /UserInputBasedInteraction 
and (4) a setting available under Edit /EditorPreferences, search for "Game gets mouse control".
}


{P.1.2.3, ShowNumberOfTrackedObjects, BOOL, 0, BPONLY}
{M.1.2.3, #Nesting: /LiveComponent /LiveCore /Debug}
{M.1.2.3, #Description: 
IN-GAME debug message, showing the number of tracked Primitives and Bones.
}


{P.1.2.4, ShowTrackedBoneNames, BOOL, 0, BPONLY}
{M.1.2.4, #Nesting: /LiveComponent /LiveCore /Debug}
{M.1.2.4, #Description: 
IN-GAME debug message, showing the name of tracked Bones.
}


{P.1.2.5, ShowTrackedPrimitiveNames, BOOL, 0, BPONLY}
{M.1.2.5, #Nesting: /LiveComponent /LiveCore /Debug}
{M.1.2.5, #Description: 
IN-GAME debug message, showing the name of tracked Primitives.
}


{P.1.2.6, ShowDestructibleRemovals, BOOL, 0, BPONLY}
{M.1.2.6, #Nesting: /LiveComponent /LiveCore /Debug}
{M.1.2.6, #Description: 
Ninja could read destructibles two ways: (A) as points and (B) as SDFs. 
Method (B) could be enabled under /LiveInputFields /Destructibles. 

In case we employ method (B), the sampled Destructible Mesh is being ignored (not sampled) 
after user-defined number of seconds (see "StopReadingActiveGeoCollectionAfterNSeconds" param). 
Once a Destructible SDF is ignored, a "removal debug message" could be generated, using ShowDestructibleRemovals = True.
}


{P.1.2.7, ShowLODInitial, BOOL, 0, BPONLY}
{M.1.2.7, #Nesting: /LiveComponent /LiveCore /Debug}
{M.1.2.7, #Description: 
IN-GAME debug message, showing initial LOD status.
}


{P.1.2.8, ShowLODRuntime, BOOL, 0, BPONLY}
{M.1.2.8, #Nesting: /LiveComponent /LiveCore /Debug}
{M.1.2.8, #Description: 
IN-GAME debug message, dynamically showing LOD status every frame.
}


{P.1.2.9, ShowInterfaceControl, BOOL, 0, BPONLY}
{M.1.2.9, #Nesting: /LiveComponent /LiveCore /Debug}
{M.1.2.9, #Description: 
IN-GAME debug message, showing NinjaLive Interface events.
}


{P.1.2.10, ShowWarning-NumberOfBonesToTrack, BOOL, 1, BPONLY}
{M.1.2.10, #Nesting: /LiveComponent /LiveCore /Debug}
{M.1.2.10, #Description: 
Show warning when the number of tracked bones exceeds the optimal value (100).
}


{P.1.2.11, ShowRaymarcherWarning, BOOL, 1, BPONLY}
{M.1.2.11, #Nesting: /LiveComponent /LiveCore /Debug}
{M.1.2.11, #Description: 
The legacy Raymarcher Function from LIVE-1 is located under LiveLegacy /RayMarching. 
The function - if properly set up - contains an Actor Reference to the level main directional light. 
The reference might break if we copy-paste the setup to an other level. 
This warning is a reminder for the users: the Legacy Raymarcher is enabled.
}


{G.1.3, CVAR}


{P.1.3.1, ExecuteCommandsAtStart, ARRAY, -, BPONLY}
{M.1.3.1, #Nesting: /LiveComponent /LiveCore /CVAR}
{M.1.3.1, #Description: 
We can execute Console Variables (CVAR) at system initialization. The CVARs listed in this array will be executed. 
By default, the list contains commands that set Editor FPS, Fog Volume and Heterogeneous Volume properties.
}


{P.1.3.2, ExecuteCommandsAtEnd, ARRAY, -, BPONLY}
{M.1.3.2, #Nesting: /LiveComponent /LiveCore /CVAR}
{M.1.3.2, #Description: 
We can execute Console Variables (CVAR) at EndPlay. The CVARs listed in this array will be executed.
}


{G.1.4, LegacyPreset}


{P.1.4.1, LegacyPreset, DataTable,-, BPONLY}
{M.1.4.1, #Nesting: /LiveComponent /LiveCore /LegacyPreset}
{M.1.4.1, #Description: 
This variable could hold a DataTable type asset, inherited from the LIVE-1 era and kept for backward compatibility. 
No function under LIVE-2. 

NOTE: we can convert LIVE-1 setups to LIVE-2 setups by pressing this EDITOR FUNCTION /LiveEditorTools /XLegacySetupConversion, 
also setting the "PreserveNewSystemStateAfterPresetRead" bool to True, and saving the Level.
}


{P.1.4.2, PresetSearchPaths, Name Array, "/Game/FluidNinjaLive", BPONLY}
{M.1.4.2, #Nesting: /LiveComponent /LiveCore /LegacyPreset}
{M.1.4.2, #Description: 
Legacy variable inherited from the LIVE-1 era and kept for backward compatibility.
}


{P.1.4.3, PresetNameFilterCriteria, Name, "NinjaLive", BPONLY}
{M.1.4.3, #Nesting: /LiveComponent /LiveCore /LegacyPreset}
{M.1.4.3, #Description: 
Legacy variable inherited from the LIVE-1 era and kept for backward compatibility.
}


{G.1.5, Zlock}


{P.1.5.1, ForceSimInitialZPosition, BOOL, 0, BP-NIA}
{M.1.5.1, #Nesting: /LiveComponent /LiveCore /Zlock}
{M.1.5.1, #Legacyname: ForceTraceMeshToCustomVerticalPos}
{M.1.5.1, #Description: 
Legacy method from the LIVE-1 era. Sets sim initial Z-position to a value defined by the "ForceSimInitialZPositionValue" variable. 

NOTE: LIVE-2 uses the "surface alignment" method instead of Z-lock, key params located at the /LiveInputFields /HeightFields parameter group.
}


{P.1.5.2, ForceSimInitialZPositionValue, FLOAT, 0, BP-NIA}
{M.1.5.2, #Nesting: /LiveComponent /LiveCore /Zlock}
{M.1.5.2, #Legacyname: ForceTraceMeshVerticalPosition}
{M.1.5.2, #Description: 
Legacy method from the LIVE-1 era. Sets sim initial Z-position to the hereby defined World Position - if "ForceSimInitialZPosition" bool = True.
}


{P.1.5.3, MovementLockedOnAxis, ENUM, 4, BP-NIA}
{M.1.5.3, #Nesting: /LiveComponent /LiveCore /Zlock}
{M.1.5.3, #Comment: 0=X,1=Y,2=Z,3=CAMERA,4=NONE,5=ALL}
{M.1.5.3, #Legacyname: MovementIsLockedOnThisAxis}
{M.1.5.3, #Description: 
Legacy method from the LIVE-1 era. Anchors (locks) sim position on the user defined axis (0=X,1=Y,2=Z,3=CAMERA,4=NONE,5=ALL). 
If "ForceSimInitialZPosition" = False, the lock is using sim initial position. 

NOTE: LIVE-2 uses the "surface alignment" method instead of Z-lock, key params located 
at the /LiveInputFields /HeightFields parameter group.
}


{P.1.5.4, ApplySimZPositionToComponent, BOOL, 0, BPONLY}
{M.1.5.4, #Nesting: /LiveComponent /LiveCore /Zlock}
{M.1.5.4, #Description: 
Legacy method from the LIVE-1 era. Applies simulation internal "Z position" value to the actual Z-Location Transform 
of Live Component. NOTE: LIVE-2 uses the "surface alignment" method instead of Z-lock, 
key params located at the /LiveInputFields /HeightFields paramater group.
}


{G.1.6, WorldSpaceOffset}


{P.1.6.1, MovementNotQuantizedOnAxis, ENUM, 2, BP-NIA}
{M.1.6.1, #Nesting: /LiveComponent /LiveCore /WorldSpaceOffset}
{M.1.6.1, #Comment: 0=X, 1=Y, 2=Z, 3=CAMERA, 4=NONE, 5=ALL}
{M.1.6.1, #Legacyname: MovementNotQuantizedToStepsOnAxis}
{M.1.6.1, #Description: 
Quantizer is moving the sim area in small discrete steps to avoid data loss during sim buffer sampling operations. 
The Quantizer could be selectively SWITCHED OFF on one or more axes: 0=X, 1=Y, 2=Z, 3=CAMERA, 4=NONE, 5=ALL. 
Since ninja is running a 2D sim (only XY dimensions), we do not need to quantize sim movement on the vertical axis 
(Z axis, the axis perpendicular to the simulation plane).
}


{P.1.6.2, QuantizerStepSize, ENUM, 4, BP-NIA}
{M.1.6.2, #Nesting: /LiveComponent /LiveCore /WorldSpaceOffset}
{M.1.6.2, #Comment: 4 = 1 unit step - Si{M.Buffer Offset Automatic}
{M.1.6.2, #Legacyname: TraceMeshMovingInWorldSpace}
{M.1.6.2, #Description: 
This is a key, DUAL function parameter. 

FUNCTION 1, Step Size: Quantizer is moving the sim area in small discrete steps to avoid data loss during sim buffer sampling 
operations. We can define step-size here. Default is "1 unit step" = the world space size of one simulation texel. 

FUNCTION 2, World Space Offset: "moving the sim area" is actually two separate operations: (A) adjusting the World Position transform 
of the sim, as the sim moves in a given direction and (B) offset the data in the sim buffers in OPPOSITE (inverse) direction. 
The inverse-offset is needed to keep data "anchored to the world". For example: we throw a pebble in the puddle, 
a ring of ripples emerge - and despite the sim area moving (as the sim is attached to the player) the center of the ring 
is anchored to the point in world space, where the pebble originally hit the surface. 
The offset + inverse offset combo (A+B) is called WORLD SPACE OFFSET, a core ninja function. World Space Offset is enabled 
by default, as most ninja setups employ it. It could be disabled here, too - a few special, local space setups require us to do this. 

Example-1: a movable caudron with water does not need inverse offset. 
Example-2: A spatially locked (fixed position) sim does not World Space Offset at all. 

NOTE: The QuantizerStepSize parameter offers a pre-defined list (an ENUM), and list items are associated with integer numbers: 
(0) =  No Quantizer, No SimBuffer Offset, (1) = No Quantizer, SimBuffer Offset Manually Set, 
(2) =  No Quantizer, SimBuffer Offset Automatic, Extremes Clamped, (3) = No Quantizer, SimBuffer Offset Automatic, 
(4) = Quantized, SimBuffer Offset Automatic, Stepsize = 1.
}


{P.1.6.3, QuantizerManualSet, FLOAT, 1, BP-NIA}
{M.1.6.3, #Nesting: /LiveComponent /LiveCore /WorldSpaceOffset}
{M.1.6.3, #Legacyname: OffsetFromSimAreaMotion}
{M.1.6.3, #Description: 
User defined value for sim buffer World Space Offset. This param is IGNORED, unless the "QuantizerStepSize" ENUM is set 
to "No Quantizer, SimBuffer Offset Manually Set".
}


{G.1.7, DrawLinesBetweenPoints}


{P.1.7.1, PosInterpolation, BOOL, 1, BP-NIA}
{M.1.7.1, #Nesting: /LiveComponent /LiveCore /DrawLinesBetweenPoints}
{M.1.7.1, #Niagaraname: Painter.PosInterpolation}
{M.1.7.1, #Description: 
When tracking points (object pivots, bones, particles), ninja is drawing a dot (a mark in the Paint Buffer) for each position value, 
every frame. If objects move fast: the position-markers are becoming sparse, we see scattered dots along the object trajectory. 
To avoid this, ninja could connect the sampled position data-points, drawing lines along the motion trajectory.
}


{P.1.7.2, KillInterpolatorAboveThisVelocity, FLOAT, 10, BP-NIA}
{M.1.7.2, #Nesting: /LiveComponent /LiveCore /DrawLinesBetweenPoints}
{M.1.7.2, #Niagaraname: Painter.KillInterpolatorAboveThisVelocity}
{M.1.7.2, #Legacyname: PV2_StopLineDrawingAboveThisVelocity}
{M.1.7.2, #Description: 
This feature is made to avoid sim area TELEPORT glitches. If "PosInterpolation" = True, ninja tries to connect points 
of the sampled position data with lines, to paint nice, continuous motion trajectories. If the sim area is moving fast in World Space, 
line drawing goes glitchy, we better switch back to point-drawing.
}


{G.1.8, Experimental}


{P.1.8.1, ScaleInvariance, BOOL, 0, BP-NIA}
{M.1.8.1, #Nesting: /LiveComponent /LiveCore /Experimental}
{M.1.8.1, #Description: 
By default, ninja simulation behavior changes as we increase or decrease sim resolution. Why? 
Each simulation texel samples its neighbor texels, this is how data is being propagated in space, 
this is how information spreads in ninja sim buffers. In case we increase sim resolution without changing 
the size of the sim area (ExtentsXYZ), texel density increases - so data is propagating SLOWER. We can counter this, 
by increasing neighbor-sampling distance. 

In general, if we connect sampling distance with the (sim resolution : sim size) ratio, the simulation becomes scale 
(and resolution) invariant. Problem: by increasing sampling distance, we also lose spatial fidelity, we are losing details. 
So this is far from perfect.
}


{P.1.8.2, ScaleInvarianceBaseTexelDensity, FLOAT, 1, BP-NIA}
{M.1.8.2, #Nesting: /LiveComponent /LiveCore /Experimental}
{M.1.8.2, #Description: 
Texel Density = sim resolution divided by sim area size. 
For example: sim resolution is 1000x1000 texels, area is 100x100 meters. 
Texel Density = 10 texels / meter.
}


{G.1.9, CoreNiagaraSystem}


{P.1.9.1, CoreNiagaraSystem, OBJECT, NinjaLiveCore.uasset, BPONLY}
{M.1.9.1, #Nesting: /LiveComponent /LiveCore /CoreNiagaraSystem}
{M.1.9.1, #Description: 
FluidNinja LIVE-2 architecture is built on wrapped layers: a Core Niagara System is wrapped by NinjaLive Component. 
Using this parameter, we can define the Core Niagara System for the wrapper.
}


{G.2, LiveEditorTools}


{P.2.1, EditorModeOFF, EDITOR FUNCTION,-, BPONLY}
{M.2.1, #Nesting: /LiveComponent /LiveEditorTools}
{M.2.1, #Description: 
Switches off Editor Mode. Suggested method: to properly end Editor Mode, press "Stop" first, and then "EditorModeOFF".
}


{P.2.2, EditorModeON, EDITOR FUNCTION,-, BPONLY}
{M.2.2, #Nesting: /LiveComponent /LiveEditorTools}
{M.2.2, #Description: 
Editor Mode is experimental. Since ninja is based on a Niagara Core - and Niagara features Editor Ticking - in theory, 
we can process data and run the simulation IN-EDITOR. Live Component, wrapping Niagara Core, is also using a Tick signal 
coming from the Core through the Niagara Callback Handler. 

Some simulation input sources - like Particles or Mesh SDF - also work IN-EDITOR. 
It seems, when ninja is relying on these "editor compatible" inputs and uses Live Component's Internal Renderers 
for visualization, we are capable to initialize Live Component and run a proper, responsive simulation - while IN-EDITOR. 

PROBLEMS: Live Actor (responsible for Primitive and Skeletal Mesh point data collection) is relying on IN-GAME Tick. 
Some simulation inputs, like Chaos Destructibles do not simulate IN-EDITOR. 
When ninja is using External Renderers - like a Landscape Component - we are facing problems, again: 
the Dynamic Material Instance handler of the Landscape works only IN-GAME. 
Summary: roughly half of the ninja setups can not be interactively previewed IN-EDITOR... 
so the usefulness of Editor Mode is questionable. 

WARNING: DO NOT open Live Component with the Blueprint Editor while running it in Editor Mode: results instant Editor Crash.
}


{P.2.3, PresetRead, EDITOR FUNCTION,-, BPONLY}
{M.2.3, #Nesting: /LiveComponent /LiveEditorTools}
{M.2.3, #Description: 
A Preset is a single Data Asset (a file) storing the state of all user exposed variables ofn Live Component and Live Actor. 
The PresetRead function is meant to copy all parameter values from a user defined Preset file, to the parameter input fields 
of Live Component and Live Actor, IN-EDITOR. The source preset file for parameter copy should be defined at /LiveCore /Preset. 
The parameter copying is OVERWRITING the original input field values of Live Component and Live Actor. 

IMPORTANT: in order to keep the new input field values following preset read, 
we must set /LiveEditorTools /PreserveNewSystemStateAfterPresetRead = True, and Save the Level. 

NOTE: to initialize ninja from a preset defined state, we do not necessarily have to copy Preset values to ninja input fields. 
It is enough to define the preset at /LiveCore /Preset, then set /LiveCore /InitSystemStateFromPreset = True.
}


{P.2.4, PresetWrite, EDITOR FUNCTION,-, BPONLY}
{M.2.4, #Nesting: /LiveComponent /LiveEditorTools}
{M.2.4, #Description: 
A Preset is a single Data Asset (a file) storing the state of all user exposed variables of Live Component and Live Actor. 
The PresetWrite function is meant to copy all parameter values from Live Component and Live Actor to a user defined Preset file. 
The target preset file for parameter writing should be defined at /LiveCore /Preset. 
The parameter writing process is OVERWRITING the original values in the Preset file. 

SUGGESTION: to create a new TARGET file for preset writing, select the existing "default" preset file 
in Content Browser (/Content /FluidNinjaLive /Presets /NP_default.uasset) and duplicate it. 
Following preset writing, make sure you select the new file in Content Browser, right-click on the file 
and use the SAVE menu - to save the changes.
}


{P.2.5, RestartSim, EDITOR FUNCTION,-, BPONLY}
{M.2.5, #Nesting: /LiveComponent /LiveEditorTools}
{M.2.5, #Description: 
If we are running ninja in Editor Mode, we can restart and reinitialize the simulation by pressing this EDITOR FUNCTION.
}


{P.2.6, SaveSimBuffers, EDITOR FUNCTION,-, BPONLY}
{M.2.6, #Nesting: /LiveComponent /LiveEditorTools}
{M.2.6, #Description: 
Using this function, we can save a single-frame snapshot of 3 simulation buffers to 3 Texture files - for being used later 
as INITIAL SIM CACHE. The Textures are getting saved in the same folder, where the simulation hosting Level (Map) is, 
with "T_Cache" prefix. For example: /Content/FluidNinjaLive/Levels/T_Cache_PaintBuffer. 

WARNING: to permanently keep the saved buffers, we need to select them in the Content Browser, 
while we are off play (IN-EDITOR), right click on them and pick "save" from the pop-up menu. 

NOTE 1: while we can run a simulation IN-EDITOR (using the "EditorMode" function...) most of the time we run IN-GAME simulations. 
The "SaveSimBuffers" function works both IN-EDITOR and IN-GAME. 

NOTE 2: the three saved buffers are...
A. RGBA(painter velocity, density, elevation), 
B. RGBA(simulation velocity, density, wetmap), 
C. RG(simulation pressure, divergence). 

NOTE 3: the saved buffers could be defined as initial sim cache under the  /LiveInputFields /Cache parameter group.
}


{P.2.7, Stop, EDITOR FUNCTION,-, BPONLY}
{M.2.7, #Nesting: /LiveComponent /LiveEditorTools}
{M.2.7, #Description: 
If we are running ninja in Editor Mode, we can halt the simulation by pressing this EDITOR FUNCTION.
}


{P.2.8, XLegacySetupConversion, EDITOR FUNCTION,-, BPONLY}
{M.2.8, #Nesting: /LiveComponent /LiveEditorTools}
{M.2.8, #Description: 
We can convert legacy LIVE-1 setups to fully functional LIVE-2 setups by pressing this EDITOR FUNCTION, also switching 
the "PreserveNewSystemStateAfterPresetRead" bool following the conversion - then saving the Level.
}


{P.2.9, PreserveNewSystemStateAfterPresetRead, BOOL, 0, BPONLY}
{M.2.9, #Nesting: /LiveComponent /LiveEditorTools}
{M.2.9, #Description: 
Both the "PresetRead" and "XLegacySetupConversion" functions write new values into the parameter input fields of Live Component. 
In order to register the modified Component as "unsaved" (and this way, trigger Unreal Engine to save it), we need to manually modify
an input-field value on the Component Details Panel UI. 

Anything will do, and the "PreserveNewSystemStateAfterPresetRead" bool is made for this reason. 
It is a dummy paramter. Simply change it to the opposite state (from 0 to 1, or vica versa), 
so Unreal Editor will mark this Component as "unsaved" (in Unreal terminology, this is called "Dirty Flagging"). 

Following the Dirty Flagging, simply save the Level the normal way - all new values in all input fields will be saved, too.
}


{P.2.10, ParamUpdateFrequency, FLOAT, 1, BPONLY}
{M.2.10, #Nesting: /LiveComponent /LiveEditorTools}
{M.2.10, #Description: 
This is a KEY parameter, determining the frequency at wich Live Component, as the wrapper for Niagara Core, forwards the values 
of input variables to Niagara Core. "1" means once in a second, "0.1" means 10 times per second. Two implications: 

(A) In case we are working in Editor Mode, and adjusting input field values on the Component Details Panel: our changes
 are sampled with this frequency. The same applies to INTERFACE and SEQUENCER DRIVEN VARIABLE UPDATE! 
For example: we set up Sequencer Track with a Curve to animate the ninja param "GlobalBrushSize". 
No matter how smooth our Sequencer curve is: brush size is being updated once in a second - if ParamUpdateFrequency = 1. 

(B) Live Component is using "tags" on many ways. For example, to collect simulation input objects near the sim area. 
The sim area might be moving (eg.: attached to the player). Objects might spawn or being culled... the list of input objects is changing.
For this reason, we can force Live Component to perform object collection in cycles: the process is called "recollect" 
and the time interval is defined by ParamUpdateFrequency. There are three specific input types that (optionally) utilize 
the "recollect" function: Mesh SDF, Destructible SDF and Splines as directional field source:
/LiveInputFields /MeshFields /RecollectMeshSDFSourcesDuringGametime + 
/LiveInputFields /Destructibles /RecollectGeoCollectionsDuringGametime + 
/LiveInputFields /SplineFields /RecollectSplinesDuringGame. 

NOTE: many other input sources (like particles, landscape elevation... etc.) are being collected every frame. 
"ParamUpdateFrequency" only determines the updating period of the above listed three input sources.
}


{P.2.11, ContinouslyUpdateSystemStateFromPreset, BOOL, 0, BPONLY}
{M.2.11, #Nesting: /LiveComponent /LiveEditorTools}
{M.2.11, #Description: 
Double click on a Preset file in Content Browser: a Preset Editor pops up - a list, where we can EDIT values. 
If "ContinouslyUpdateSystemStateFromPreset" = True, ninja keeps reading Preset values periodically, 
time intervals are defined by "ParamUpdateFrequency". This way, we can tweak system parameters directly 
in the Preset (instead of editing parameters on the Component Details Panel).
}


{P.2.12, ShowTaggedActorsOnlyInPlay, NAME, none, BPONLY}
{M.2.12, #Nesting: /LiveComponent /LiveEditorTools}
{M.2.12, #Description: 
This is an optional helper feature. Ninja is using Internal or External visualization meshes to display simulation output, like "water". 
In many cases, the setup is also surface aligned - the visualization mesh is being vertically distorted according 
to the landscape elevation. A special problem: when we are using an external visualzation mesh (not the Component's Internal 
visualization), and we are OFF PLAY (IN-EDITOR), NO height data is being generated - and the visualization mesh (eg. water surface) 
appears on screen as a flat plane. This might be a problem in editor: large flat planes obscuring Editor Camera vision. 
Using the "ShowTaggedActorsOnlyInPlay" feature, we could temporarily unhide our geometry (visibility = TRUE), while in-play. 
Works only when "visibility" is previously set to FALSE!
}


{G.3, LiveInputFields}
{G.3.0, Root}


{P.3.0.1, PersistencyOfFieldAndPointData, FLOAT, 0.2, BP-NIA}
{M.3.0.1, #Nesting: /LiveComponent /LiveInputFields}
{M.3.0.1, #Niagaraname: Painter.InputFeedback}
{M.3.0.1, #Legacyname: InputFeedback}
{M.3.0.1, #Description: 
Ninja tracks objects inside the sim area, writing their position data into a "Paint Buffer", like a brush leaving marks on a canvas. 
"Field Buffer" is similar to paint buffer, except it is not for "point like" input data, but for distance fields (SDF),
object "shape" is painting marks in the field buffer. 

Using this PERSISTENCY parameter, we can define how long paint-marks live in the paint and field buffer. 
If PersistencyOfFieldAndPointData = 1, paint-marks live forever, objects leave PERMANENT marks. 

This is ideal for footprints or wheel tracks when ninja is used in SimplePainterMode. If PersistencyOfFieldAndPointData < 1, 
paint-marks eventually fade out. This is needed, when we use the paint and field buffers as input for fluid simulation, 
for example objects interacting with water or smoke.
}


{P.3.0.2, InvertFieldAndPointDensity, FLOAT, 0, BP-NIA}
{M.3.0.2, #Nesting: /LiveComponent /LiveInputFields}
{M.3.0.2, #Niagaraname: Composite.InvertFieldAndPointDensity}
{M.3.0.2, #Comment: internal niagara name, "EraserStrength"}
{M.3.0.2, #Comment: legacy internal niagara name, "EraserSwitch"}
{M.3.0.2, #Comment: legacy Preset Manager name, "Inv"}
{M.3.0.2, #Legacyname: EraserMode}
{M.3.0.2, #Description: 
Inverting the Paint Buffer and the Field Buffer results an ERASER like effect - points (generated by object position) 
and shapes (coming from object SDF) are being subtracted from simulation density (feels like objects are "cutting the fog"). 

Recommended usage: generate simulation density by using the inputs at the /LiveInputFields /Bitmaps param group, 
also set the /LiveSimulation /DensityAccumulation param to a high value - so there will be "much density data to be erased". 

NOTE: in case we are looking for "stirring the fog (or fluid)" effect instead of "cutting the fog", we should NOT use this inverter. 
INSTEAD employ a method where incoming Paint Buffer and Field Buffer density is ignored, BUT incoming velocity is accepted. 
Use these parameters: /LiveInputPoints /BrushKillers /SelectivelyKillBrushDensityKeepVelocity for point-like inputs 
AND /LiveInputFields /MeshFields /UseAsVelocitySource for field-like inputs.
}


{G.3.1, Bitmaps}
{G.3.1.1, VelocityDensityFieldFromTexture}


{P.3.1.1.1, VelocityDensityInputTexture, TEXTURE, -, BP-NIA}
{M.3.1.1.1, #Nesting: /LiveComponent /LiveInputFields /Bitmaps /VelocityDensityFieldFromTexture}
{M.3.1.1.1, #Legacyname: OverwritePresetDensityInput}
{M.3.1.1.1, #Description: 
Bitmaps can be used as sim density and sim velocity input. On this input, by default, only DENSITY is used, 
and ninja looks for density data on the bitmap RED channel. IF TryToReadVelocityFromRGChannels = True, 
VELOCITY is also being read on the RED and GREEN channels, and DENSITY on the BLUE channel. 

NOTE: the bitmap based density input, by default, is "anchored" to World Space. In case we want the bitmap to MOVE together 
with the simulation area (use Local Space), we need to set this variable: /LiveCore /WorldSpaceOffset /QuantizerStepSize = No SimBuffer Offset. 
In order to make the bitmap input ROTATE together with the sim area we need to set /LiveCore /IgnoreSystemRotation = True.
}


{P.3.1.1.2, TryToReadVelocityFromRGChannels, BOOL, 0, BP-NIA}
{M.3.1.1.2, #Nesting: /LiveComponent /LiveInputFields /Bitmaps /VelocityDensityFieldFromTexture}
{M.3.1.1.2, #Niagaraname: UseInputTextureOnlyAsDensity}
{M.3.1.1.2, #Comment: the bool value must be inverted when passed to niagara}
{M.3.1.1.2, #Legacyname: UseRenderTargetAsInput}
{M.3.1.1.2, #Description: 
Using this switch, we can force ninja to read velocity information on the RED and GREEN channels of the input Bitmap. 
In this case, density is being read from the BLUE channel.
}


{P.3.1.1.3, DensityTxtMult, FLOAT, 0.5, BP-NIA}
{M.3.1.1.3, #Nesting: /LiveComponent /LiveInputFields /Bitmaps /VelocityDensityFieldFromTexture}
{M.3.1.1.3, #Niagaraname: Composite.DensityTxtMult}
{M.3.1.1.3, #Description: 
Increase the amount of density coming from the input Bitmap.
}


{P.3.1.1.4, DensityTxtOffsetX, FLOAT, 0, BP-NIA}
{M.3.1.1.4, #Nesting: /LiveComponent /LiveInputFields /Bitmaps /VelocityDensityFieldFromTexture}
{M.3.1.1.4, #Niagaraname: Composite.DensityTxtOffsetX}
{M.3.1.1.4, #Description: 
Make the input Bitmap constantly move (offset, pan, scroll) along the X axis.
}


{P.3.1.1.5, DensityTxtOffsetY, FLOAT, 0, BP-NIA}
{M.3.1.1.5, #Nesting: /LiveComponent /LiveInputFields /Bitmaps /VelocityDensityFieldFromTexture}
{M.3.1.1.5, #Niagaraname: Composite.DensityTxtOffsetY}
{M.3.1.1.5, #Description: 
Make the input Bitmap constantly move (offset, pan, scroll) along the Y axis.
}


{P.3.1.1.6, DensityTxtRandomOffset, FLOAT, 0, BP-NIA}
{M.3.1.1.6, #Nesting: /LiveComponent /LiveInputFields /Bitmaps /VelocityDensityFieldFromTexture}
{M.3.1.1.6, #Niagaraname: Composite.DensityTxtRandomOffset}
{M.3.1.1.6, #Legacyname: RandomizeDensityTextureOffset}
{M.3.1.1.6, #Description: 
Randomize density texture offset. Suggested use: in case you have multiple simulation containers placed nearby 
and would like to avoid visual similarity, we should employ this randomizer.
}


{P.3.1.1.7, DensityTxtScale, FLOAT, 1, BP-NIA}
{M.3.1.1.7, #Nesting: /LiveComponent /LiveInputFields /Bitmaps /VelocityDensityFieldFromTexture}
{M.3.1.1.7, #Niagaraname: Composite.DensityTxtScale}
{M.3.1.1.7, #Description: 
Scaling the Bitmap input.
}

{P.3.1.1.8, VelocityDensityInputRenderTarget, RENDERTARGET, - , BPONLY}
{M.3.1.1.8, #Nesting: /LiveComponent /LiveInputFields /Bitmaps /VelocityDensityFieldFromTexture}
{M.3.1.1.8, #Description: 
RenderTargets can be used as sim density and sim velocity input. On this input, by default, only DENSITY is used, 
and ninja looks for density data on the bitmap RED channel. IF TryToReadVelocityFromRGChannels = True, 
VELOCITY is also being read on the RED and GREEN channels, and DENSITY on the BLUE channel. 

NOTE: the bitmap based density input, by default, is "anchored" to World Space. In case we want the bitmap to MOVE together 
with the simulation area (use Local Space), we need to set this variable: /LiveCore /WorldSpaceOffset /QuantizerStepSize = No SimBuffer Offset. 
In order to make the bitmap input ROTATE together with the sim area we need to set /LiveCore /IgnoreSystemRotation = True.
}


{G.3.1.2, VelocityFieldFromTexture}


{P.3.1.2.1, VelocityOnlyInputTexture, TEXTURE,-, BP-NIA}
{M.3.1.2.1, #Nesting: /LiveComponent /LiveInputFields /Bitmaps /VelocityFieldFromTexture}
{M.3.1.2.1, #Legacyname: OverwritePresetVelocityInput}
{M.3.1.2.1, #Description: 
Bitmaps can be used as sim velocity input. On this input, by default, only VELOCITY is used, and ninja looks for 
velocity on the RED and GREEN channels. NOTE: the bitmap based velocity input, by default, is "anchored" to World Space. 
In case we want the bitmap to MOVE together with the simulation area (use Local Space), 
we need to set this variable /LiveCore /WorldSpaceOffset /QuantizerStepSize = No SimBuffer Offset. 
In order to make the bitmap input ROTATE together with the sim area we need to set /LiveCore /IgnoreSystemRotation = True.
}


{P.3.1.2.2, MaskInputWithSimVelocity, FLOAT, 0, BP-NIA}
{M.3.1.2.2, #Nesting: /LiveComponent /LiveInputFields /Bitmaps /VelocityFieldFromTexture}
{M.3.1.2.2, #Niagaraname: Composite.MaskInputWithSimVelocity}
{M.3.1.2.2, #Description: 
Multiply incoming Bitmap based velocity with existing sim velo.
}


{P.3.1.2.3, VeloInputOffsetSpeed, FLOAT, 0, BP-NIA}
{M.3.1.2.3, #Nesting: /LiveComponent /LiveInputFields /Bitmaps /VelocityFieldFromTexture}
{M.3.1.2.3, #Niagaraname: Composite.VeloInputOffsetSpeed}
{M.3.1.2.3, #Description: 
Make the input Bitmap diagonally move along the XY axis.
}


{P.3.1.2.4, VeloInputTile, FLOAT, 0, BP-NIA}
{M.3.1.2.4, #Nesting: /LiveComponent /LiveInputFields /Bitmaps /VelocityFieldFromTexture}
{M.3.1.2.4, #Niagaraname: Composite.VeloInputTile}
{M.3.1.2.4, #Description: 
Scaling the Bitmap input.
}


{P.3.1.2.5, VeloRotate, FLOAT, 0, BP-NIA}
{M.3.1.2.5, #Nesting: /LiveComponent /LiveInputFields /Bitmaps /VelocityFieldFromTexture}
{M.3.1.2.5, #Niagaraname: Composite.VeloRotate}
{M.3.1.2.5, #Description: 
Rotating the original velocity vectors, coming from the bitmap. The parameter is using the 0-1 range, 
this is mapped to a 0-360 degree vector rotation.
}

{P.3.1.2.6, VelocityOnlyInputRenderTarget, RENDERTARGET, - , BPONLY}
{M.3.1.2.6, #Nesting: /LiveComponent /LiveInputFields /Bitmaps /VelocityFieldFromTexture}
{M.3.1.2.6, #Description: 
RenderTargets can be used as sim velocity input. On this input, by default, only VELOCITY is used, and ninja looks for 
velocity on the RED and GREEN channels. NOTE: the bitmap based velocity input, by default, is "anchored" to World Space. 
In case we want the bitmap to MOVE together with the simulation area (use Local Space), 
we need to set this variable /LiveCore /WorldSpaceOffset /QuantizerStepSize = No SimBuffer Offset. 
In order to make the bitmap input ROTATE together with the sim area we need to set /LiveCore /IgnoreSystemRotation = True.
}


{G.3.1.3, CollisionMaskFromTexture}


{M.3.1.3.1, #Nesting: /LiveComponent /LiveInputFields /Bitmaps /CollisionMaskFromTexture}
{P.3.1.3.1, CollisionMaskTexture, TEXTURE, -, BP-NIA}
{M.3.1.3.1, #Description: 
Collision Mask is a black and white texture. BLACK areas repel fluid currents and behave like an obstacle, 
WHITE areas allow free flow. PREREQUISITE: /LiveSimulation /Bounds /SimEdgebounciness = 1. 

NOTE: a Bitmap stored Collision Mask is ideal for masking static environmental objects (eg: an altair in the middle of a fog covered area). 
Alternative solution: /LiveInputFields /MeshFields /UseAsCollisionMask.
}


{P.3.1.3.2, CollisionMaskInvert, BOOL, 0, BP-NIA}
{M.3.1.3.2, #Nesting: /LiveComponent /LiveInputFields /Bitmaps /CollisionMaskFromTexture}
{M.3.1.3.2, #Description: 
Inverts the original Collision Mask Bitmap brightness values: black turns white, white turns black.
}


{P.3.1.3.3, CollisionMaskMin, FLOAT, 0, BP-NIA}
{M.3.1.3.3, #Nesting: /LiveComponent /LiveInputFields /Bitmaps /CollisionMaskFromTexture}
{M.3.1.3.3, #Description: 
Using a value greater than 0, we can cut the lower end of the Collision Mask values, turning black areas into gray, 
making them penetrable by the flow.
}


{P.3.1.3.4, CollisionMaskMax, FLOAT, 1, BP-NIA}
{M.3.1.3.4, #Nesting: /LiveComponent /LiveInputFields /Bitmaps /CollisionMaskFromTexture}
{M.3.1.3.4, #Description: 
Using a value smaller than 1, we can cut the higher end of the Collision Mask values, turning white areas into gray, 
making them less penetrable by the flow.
}


{P.3.1.3.5, CollisionMaskUVmod, LINEARCOLOR, (0,0,1,0), BP-NIA}
{M.3.1.3.5, #Nesting: /LiveComponent /LiveInputFields /Bitmaps /CollisionMaskFromTexture}
{M.3.1.3.5, #Description: 
This is a multi-functional controller for the collision mask. Apply Offset, Scale and Dynamic Offset using RGBA values. 
RG: Static UV-offset, B: UV-scale, A: dynamic per-frame UV offset in WorldSpace. NOTE: Collision Mask UV is LOCAL by default.
}


{G.3.2, MeshFields}


{P.3.2.1, EnableMeshDistanceFieldReader, BOOL, 0, BP-NIA}
{M.3.2.1, #Nesting: /LiveComponent /LiveInputFields /MeshFields}
{M.3.2.1, #Description: 
Unreal Engine automatically generates Signed Distance Fields (SDF) for Static Mesh type assets (including PhysicsBodies). 
This field, called Mesh SDF, is a 3D representation of the mesh volume, it could be used to easily get information 
about the surface and shape of the mesh, without having to deal with triangles and geometry. 

Mesh SDF is fast and lightweight, if sampled on low resolution. Define SDF sampling resolution at: 
/LiveCore /Performance /FieldBufferDownScaleFactor. 

By enabling this switch, ninja can access Mesh SDF. Suggested mindset for usage: ninja is running a 2D sim - it is like a flat plane. 
We can align this flat 2D plane with surfaces - so it becomes a warped surface. Where meshes inside the simulation area 
OVERLAP with this warped surface, we get a cross section, a representation of the mesh shape. 

USE CASE 1: objects leaving precise, shape-matching marks on the ground in SimplePainterMode. 
USE CASE 2: objects generate shape-matching ripples as they submerge in water. 
USE CASE 3: we can add MeshSDF field data on top of the Landscape height field - think smaller rocks (meshes) placed 
in creekbed (a landscape surface) - and free flowing water avoiding rocks. 

PREREQUISITE: /Project Settings /Engine / Rendering /SoftwareRayTracing /GenerateMeshDistanceFields = True. 

NOTE: ninja also acquires surface velocity information when reading Mesh SDFs. 
LIMITATION: Skeletal Meshes do not support Mesh SDF.
}


{P.3.2.2, UseTaggedMeshesAsSDFInput, NAME, none, BPONLY}
{M.3.2.2, #Nesting: /LiveComponent /LiveInputFields /MeshFields}
{M.3.2.2, #Description: 
We TAG Actors with a StaticMesh Component, then quote the exact same TAG here. 
Ninja collects all tagged Actors once, at start, and uses their Mesh Component as SDF source during the simulation. 
Ideally, less than 100 meshes are collected.
}


{P.3.2.3, RecollectMeshSDFSoucesDuringGameTime, BOOL, 0, BP-NIA}
{M.3.2.3, #Nesting: /LiveComponent /LiveInputFields /MeshFields}
{M.3.2.3, #Description: 
Ninja can periodically recollect Mesh SDF sources, following initialization. 
Think spawned meshes or streaming levels where new meshes "pop in". 
Recollection frequency is defined by this variable: /LiveEditorTools /ParamUpdateFrequency.
}


{P.3.2.4, UseAsDensitySource, BOOL, 1, BP-NIA}
{M.3.2.4, #Nesting: /LiveComponent /LiveInputFields /MeshFields}
{M.3.2.4, #Niagaraname: SDF.UseAsDensitySource}
{M.3.2.4, #Description: 
IF UseAsDensitySource = TRUE, Mesh SDFs will generate paint-marks in the Field Buffer and will inject density to the simulation. 

USE CASE 1: we want our meshes to leave marks on a surface in SimplePainterMode. 

USE CASE 2: when working with SPARSE water setups, we want our Meshes to generate both density and velocity 
(density is used for whitewater in sparse water setups). IF UseAsDensitySource = FALSE, Mesh SDFs will NOT generate 
paint-marks in the Field Buffer and will NOT inject density to the simulation. 

USE CASE 3: when working with DENSE water setups, we want our Meshes to stir the fluid, but do not generate fluid 
(make sure that UseAsVelocitySource = True). 

USE CASE 4: we want our meshes to add height to an existing height field, but do not generate fluid - think Rock Meshes 
in a Creek bed made of Landscape Components (make sure that AddMeshHeightToLandscapeHeight = 1).
}


{P.3.2.5, ScaleDensityWithVelocity, BOOL, 0, BP-NIA}
{M.3.2.5, #Nesting: /LiveComponent /LiveInputFields /MeshFields}
{M.3.2.5, #Niagaraname: SDF.ScaleDensityWithVelocity}
{M.3.2.5, #Description: 
Fast objects generate more density. Slow objects generate less density. Still objects do not generate density at all. 

USE CASE: we use density coming from Mesh SDF as whitewater in SPARSE water setups. Still objects to not generate whitewater.
}


{P.3.2.6, ScaleDensityWithVelocityPow, FLOAT, 1, BP-NIA}
{M.3.2.6, #Nesting: /LiveComponent /LiveInputFields /MeshFields}
{M.3.2.6, #Niagaraname: SDF.ScaleDensityWithVelocityPow}
{M.3.2.6, #Description: 
Modifies the velocity-distribution for the "ScaleDensityWithVelocity" parameter.
}


{P.3.2.7, UseAsVelocitySource, BOOL, 1, BP-NIA}
{M.3.2.7, #Nesting: /LiveComponent /LiveInputFields /MeshFields}
{M.3.2.7, #Niagaraname: SDF.UseAsVelocitySource}
{M.3.2.7, #Description: 
Ninja also acquires surface velocity information when reading Mesh SDFs. 
In case we inject this velocity to the simulation, Meshes could push the fluid.
}


{P.3.2.8, UseAsCollisionMask, BOOL, 0, BP-NIA}
{M.3.2.8, #Nesting: /LiveComponent /LiveInputFields /MeshFields}
{M.3.2.8, #Niagaraname: SDF.UseAsCollisionMask}
{M.3.2.8, #Description: 
A Collision Mask is defining spots in the simulation area, that repel fluid currents and behave like an obstacle. 
By reading the SDF of moving meshes, we can create dynamic collision masking. For example, we can set up a floodgate, 
stopping the fluid, then opening up. Of course, non-moving meshes could be used for static Collision Masking. 
Alternative solution: static Collision Masking could be implemented with textures, too. 
See this parameter group: /LiveInputFields /Bitmaps /CollisionMaskFromTexture. 

PREREQUISITE: /LiveSimulation /Bounds /SimEdgeBounciness = 1.
}


{P.3.2.9, WeakenCollisionMask, FLOAT, 0, BP-NIA}
{M.3.2.9, #Nesting: /LiveComponent /LiveInputFields /MeshFields}
{M.3.2.9, #Niagaraname: Composite.WeakenCollisionMask}
{M.3.2.9, #Description: 
By increasing the value of this variable, we can turn masked areas gradually more penetrable by the flow.
}


{P.3.2.10, AddMeshHeightToLandscapeHeight, BOOL, 1, BP-NIA}
{M.3.2.10, #Nesting: /LiveComponent /LiveInputFields /MeshFields}
{M.3.2.10, #Niagaraname: SDF.AddMeshHeightToLandscapeHeight}
{M.3.2.10, #Description: 
We can add MeshSDF field data on top of the Landscape height field - think smaller rocks (meshes) 
placed in creek bed (a landscape surface) - and free flowing water avoiding rocks.
}


{P.3.2.11, DistanceFieldMult, FLOAT, 1, BP-NIA}
{M.3.2.11, #Nesting: /LiveComponent /LiveInputFields /MeshFields}
{M.3.2.11, #Niagaraname: SDF.DistanceFieldMult}
{M.3.2.11, #Description: 
Multiplies the density generated by Mesh SDF. When using lower values: meshes leave weaker marks on surfaces, 
weaker impacts when splashing into water. The value 0.01 is ideal for soft but still noticeable marks.
}


{P.3.2.12, DistanceFieldZOffset, FLOAT, 0, BP-NIA}
{M.3.2.12, #Nesting: /LiveComponent /LiveInputFields /MeshFields}
{M.3.2.12, #Niagaraname: SDF.DistanceFieldZOffset}
{M.3.2.12, #Description: 
This value is added to the float output value coming from the Distance Filed Sampler.
}


{P.3.2.13, ContourMult, FLOAT, 0.1, BP-NIA}
{M.3.2.13, #Nesting: /LiveComponent /LiveInputFields /MeshFields}
{M.3.2.13, #Niagaraname: SDF.ContourMult}
{M.3.2.13, #Description: 
Contour is the outer region of the Mesh-Simulation cross section area. In most cases, we use this contour-band to mask velocity. 

EXAMPLE 1:  to mask velocity noise - so the fluid looks disturbed around the object. 
EXAMPLE 2:  to mask radial velocity that pushes the fluid away from the mesh center.
}


{P.3.2.14, ContourZOffset, FLOAT, 10, BP-NIA}
{M.3.2.14, #Nesting: /LiveComponent /LiveInputFields /MeshFields}
{M.3.2.14, #Niagaraname: SDF.ContourZOffset}
{M.3.2.14, #Description: 
Contour thickness.
}


{P.3.2.15, ContourNoiseMult, FLOAT, 0.25, BP-NIA}
{M.3.2.15, #Nesting: /LiveComponent /LiveInputFields /MeshFields}
{M.3.2.15, #Niagaraname: SDF.ContourNoiseMult}
{M.3.2.15, #Description: 
Adding velocity noise on the mesh-contours, so the fluid looks disturbed around the object.
}


{P.3.2.16, ContourNoiseFreq, FLOAT, 0.02, BP-NIA}
{M.3.2.16, #Nesting: /LiveComponent /LiveInputFields /MeshFields}
{M.3.2.16, #Niagaraname: SDF.ContourNoiseFreq}
{M.3.2.16, #Description: 
Define how fast the noise-pattern changes on the object contours. Larger values mean faster changes.
}


{P.3.2.17, ContourNoiseScale, FLOAT, 1, BP-NIA}
{M.3.2.17, #Nesting: /LiveComponent /LiveInputFields /MeshFields}
{M.3.2.17, #Niagaraname: SDF.ContourNoiseScale}
{M.3.2.17, #Description: 
Define the tiling of noise-pattern on the object contours. Smaller values mean larger tiles.
}


{P.3.2.18, MeshVelocityMult, FLOAT, 1, BP-NIA}
{M.3.2.18, #Nesting: /LiveComponent /LiveInputFields /MeshFields}
{M.3.2.18, #Niagaraname: SDF.MeshVelocityMult}
{M.3.2.18, #Description: 
The amount of surface velocity coming from the sampled Mesh.
}


{P.3.2.19, OutwardVelocityMult, FLOAT, 1, BP-NIA}
{M.3.2.19, #Nesting: /LiveComponent /LiveInputFields /MeshFields}
{M.3.2.19, #Niagaraname: SDF.OutwardVelocityMult}
{M.3.2.19, #Description: 
The amount of radial velocity, pushing the fluid outward from the Mesh center.
}


{P.3.2.20, ZvelocityMult, FLOAT, 1, BP-NIA}
{M.3.2.20, #Nesting: /LiveComponent /LiveInputFields /MeshFields}
{M.3.2.20, #Niagaraname: SDF.ZvelocityMult}
{M.3.2.20, #Description: 
Similar to the "Puncture" parameter for point-like inputs: 
in case the object moves perpendicular to the sim area, it could generate impact or shockwave.
}


{P.3.2.21, LimitDistanceFieldInsideMesh, BOOL, 1, BP-NIA}
{M.3.2.21, #Nesting: /LiveComponent /LiveInputFields /MeshFields}
{M.3.2.21, #Niagaraname: SDF.LimitDistanceFieldInsideMesh}
{M.3.2.21, #Description: 
Distance Field inside and outside a Mesh is distinguished by the SIGN (hence the name: signed distance field). 
For a Global Distance Field, both inside and outside field is useful. For Mesh Distance Fields, the outside field 
is cropped by the mesh Bounding Box, it is practically useless.
}


{P.3.2.22, SamplerVerticalOffset, FLOAT, 20, BP-NIA}
{M.3.2.22, #Nesting: /LiveComponent /LiveInputFields /MeshFields}
{M.3.2.22, #Niagaraname: SDF.SamplerVerticalOffset}
{M.3.2.22, #Description: 
This value is added to the Z component of Simulation.GridCell.World.XYZ Position, 
going to the Distance Filed Sampler (this is a "sampling UVW offset" kind of operation).
}


{G.3.3, HeightFields}
{G.3.3.0, Root}


{P.3.3.0.1, EnableHeightField, BOOL, 0, BP-NIA}
{M.3.3.0.1, #Nesting: /LiveComponent /LiveInputFields /HeightFields}
{M.3.3.0.1, #Description: 
Using this bool switch, we enable Surface Alignment. It is a KEY ninja feature: both interaction (the detection of objects) 
and visualization (a mesh-surface or volume) aligns with the underlying surface. 

For Surface Alignment, ninja needs a HEIGHTFIELD input: a grayscale (float) representation of World Space altitude 
under the simulation area. There are four methods ninja can access a heightfield. 

METHOD 1: When there is no heightfield available, ninja can generate a FLAT heightfield. Define a World Space altitude 
via the "ClampingValue" parameter, then set ForciblyCreateHeightField = True. 

METHOD 2: if there are Landscape Components under the sim area, ninja automatically detects them and samples the height. 
No user action needed. 

METHOD 3: we can set up top-down looking SceneCaptureCamera to sample elevation (scene depth), 
and write the data to a RenderTarget. In case our elevation is static: we can bake the elevation to a Texture and use that as ninja 
heightfield input. Key parameter: /LiveInputFields /HeightFields /ExternalHeightData /UseExternalHeightData = True. 

METHOD 4: ninja can utilse RuntimeVirtualTextures (RVT) to access elevation data. 
Key parameter: /LiveInputFields /HeightFields /RVTHeightData /UseRVTAsHeightSource = True. 
Once we have accessed a HeightField using one of the four methods, ninja internally converts the incoming World Space data 
(Absolute Height) to Local Space (Realtive Height): negative values below the simulation plane, positive values above it. 
Ninja exposes heightfield for visualization Materials and Niagara Systems (Internal and External Renderers) 
using the Paint Buffer ALPHA channel. On export, Relative Height is the default. 
See this variable: /LiveOutputRenderTargets /PaintVelocityDensityAndElevation /ExposeRelativeHeight = True. 

RECOMMENDATION: the four height sampling methods are demonstrated on this tutorial level: 
/Content /FluidNinjaLive /Levels /_Starter /Tutorial03_KeyConcepts.umap, on STAGE 2A - 2D
}


{P.3.3.0.2, ClampHeightLowerValues, BOOL, 0, BP-NIA}
{M.3.3.0.2, #Nesting: /LiveComponent /LiveInputFields /HeightFields}
{M.3.3.0.2, #Niagaraname: RVT.ClampHeightLowerValues}
{M.3.3.0.2, #Description: 
This is a key, two function parameter. 

FUNCTION 1: clamping a gradual, continuous heightfield on the lower end, with the intention to make 
"a large flat body of water" like a lake, river or sea - at user defined height. 
The clamping altitude is defined by the "ClampingValue" parameter. At clamping altitude, the heightfield is flat. 
Above clamping altitude, the heightfield behaves normally, following the surfaces. 

Use case 1: free flowing water (eg. a creek) above clamping altitude, surface aligned, flowing down on the surface, 
until reaching clamping altitude, where a large flat body of water resides. 

Use case 2: we are creating a sea or lake at clamping altitude with WAVES pushing towards the coastline, 
and rolling up on the coast until becoming weak and starting to flow back down. 

FUNCTION 2: If ClampHeightLowerValues = True, the sim area is being AUTO-FILLED with density at the altitude defined 
by the "ClampingHeight" param. Why? Since we use this param to define big flat water-bodies anyway... 
instantly filling them seems like a good idea. Extra advantage: at the sim area edges the density fill continues 
over the passive "outside the sim" area. This is called "EXTENDING the sim area". 
The technique enables us the have an infinitely large body of water, while simulating only a small area 
(and the simulated area can move in world space). Extending the simulation area is explained on level: 
/Content /FluidNinjaLive /Levels /_Starter /Tutorial03_KeyConcepts.umap, on STAGE 3.
}


{P.3.3.0.3, ClampingValue, FLOAT, 0, BP-NIA}
{M.3.3.0.3, #Nesting: /LiveComponent /LiveInputFields /HeightFields}
{M.3.3.0.3, #Niagaraname: RVT.ClampingValue}
{M.3.3.0.3, #Description: 
Using this param, we can define the world space altitude (in centimeters = in Unreal units) where the continuous heightfield 
is being clamped on the lower end, with the intention of creating a large flat body of water (e.g. a lake or sea). 

IMPORTANT: in order to enable clamping, set ClampHeightLowerValues = True. 
NOTE: when there is no heightfield available for sampling, ninja can GENERATE a flat heightfield. Set EnableHeightField = True,  
set ForciblyCreateHeightField = True, set ClampHeightLowerValues = True
and define a World Space altitude for height clamping via this parameter.
}


{P.3.3.0.4, OffsetHeight, FLOAT, 0, BP-NIA}
{M.3.3.0.4, #Nesting: /LiveComponent /LiveInputFields /HeightFields}
{M.3.3.0.4, #Niagaraname: RVT.OffsetHeight}
{M.3.3.0.4, #Description: 
Add this value to the HeightField.
}


{P.3.3.0.5, IgnoreHeightDataUseVelocityOnly, BOOL, 0, BP-NIA}
{M.3.3.0.5, #Nesting: /LiveComponent /LiveInputFields /HeightFields}
{M.3.3.0.5, #Legacyname: ForceIgnoreLandscapeElevation}
{M.3.3.0.5, #Description: 
If EnableHeightField = True AND Landscape input is available: we can ignore landscape ELEVATION data 
(not being added to the HeightField) while using landscape GRADIENT to generate velocity.
}


{P.3.3.0.6, UseHeightAsCollisionMask, BOOL, 0, BP-NIA}
{M.3.3.0.6, #Nesting: /LiveComponent /LiveInputFields /HeightFields}
{M.3.3.0.6, #Niagaraname: RVT.UseAsCollisionMask}
{M.3.3.0.6, #Description: 
Height values below "ClampingValue" are being filled white, the rest of the area is filled with black, 
and the resulting 1 bit image is used as Collision Mask, with black areas behaving like an obstacle, blocking the fluid currents.
}


{P.3.3.0.7, ForciblyCreateHeightField, BOOL, 0, BP-NIA}
{M.3.3.0.7, #Nesting: /LiveComponent /LiveInputFields /HeightFields}
{M.3.3.0.7, #Description: 
When there is no way to read a HeightField by sampling objects on level, ninja can generate a FLAT heightfield. 
This might be important for Surface Alignment (to align not only the visual output, but the INTERACTIONS with a given surface)!}


{P.3.3.0.8, LandscapeSample, DATAINTERFACE, - , NIAGARAONLY}
{M.3.3.0.8, #Nesting: /LiveComponent /User Parameters /DebugOnly /LiveInputFields /HeightFields}
{M.3.3.0.8, #Description: 
This is a Niagara Only User Parameter: not exposed to blueprints - but accessible at LiveComponent Details Panel, at:
/Live Component /User Parameters /DebugOnly /LiveInputFields /HeightFields /LandscapeSample DATAINTERFACE

The Niagara Landscape Data Interface (DI) is very convenient: auto-detects landscape surfaces under the simulation area. 

Known issues with Landscape DI: 

(A) in Large World Coordinate (LWC) range (outside the 10x10 kilometers area around the world-origin) 
the Landscape auto-detect does not always work. Solution: we need to MANUALLY pick a landscape actor, under User Parameters. 
SET Source Mode = Source
SET Source Landscape = arbitrary ACTOR from the actual level

(B) Landscape DI randomly returns NULL: rarely, there are frames when no landscape surface data is returned. 
Solution: ninja automatically uses PREVIOUS FRAME data when Landscape DI fails.
}


{G.3.3.1, FluidStability}


{P.3.3.1.1, EnablePeakAvoidance, BOOL, 1, BP-NIA}
{M.3.3.1.1, #Nesting: /LiveComponent /LiveInputFields /HeightFields /FluidStability}
{M.3.3.1.1, #Niagaraname: RVT.EnablePeakAvoidance}
{M.3.3.1.1, #Description: 
We need this parameter enabled for surface aligned, free flowing, "dense" type water setups. 
The "peak avoidance" function keeps the fluid in valleys, surface impressions and rims - away from peaks and plateaus. 

MASKING: we can use masking to define areas that exclude the fluid. Using masking, we can set up the wall of a pool, 
a dam that stops the fluid or objects that behave as an obstacle in a creek bed. See these two parameters: 
(1) /LiveInputFields /MeshFields /UseAsCollisionMask
(2) /LiveInputFields /Bitmaps /CollisionMaskFromTexture 

PREREQUISITE PARAM FOR MASKING: 
/LiveSimulation /Bounds /SimEdgeBounciness = 1. 

Masking example levels: /Content /FluidNinjaLive /Levels /Water_Dense_Creek2.umap 
Check the yellow meshes with "CollisionMask" part in their name (eg. Boulder05_SDF02_CollisionMask) and DAM_CollisionMaskMesh. 
An other level with a pool: Water_Sparse_Various. 

OPTINAL READ ON LIVE-2 FLUID MODEL: 
ninja is NOT using a "shallow water" fluid model for free flowing water - instead - a modified version of the Navier-Stokes fluid model. 
The goal was to cover all use cases (gases, liquids) with a single fluid model, instead of employing multiple models. 
This involves compromises. The Navier-Stokes fluid model was NOT meant to simulate free flowing, 
surface aligned fluids - and ninja exploits the model by overdriving simulation density ( /LiveSimulation /DensityAccumulation > 1) 
and splitting the sim area with a threshold value into "water covered / not water covered" zones. 

As density constantly accumulates in a feedback loop, eventually, it would conquer the whole simulation area. 
To avoid this, ninja adds "surface velocity" (derived from the landscape gradient) to the simulation velocity: 
accelerating the fluid downhill and decelerating it uphill (see /LiveSimulation /VeloFromLandscapeGradient). 
The fluid distribution caused by surface velocity resembles real liquids - still, the expanding fluid has a tendency 
to creep up at rims and saddle-surfaces. "PeakAvoidance" is trying to eliminate fluid from these special zones. 
Ninja also introduces mass (height of the fluid-column) in order to fill holes and gaps, while maintaining a smooth surface. 
See "FluidGapFillingTendency" param. 

While, the exploited Navier-Stokes model works most of the time, there are obvious problems: 
while the fluid could be excluded from peaks and plateaus, this is not being the case with gaps and holes. 
Once the fluid has conquered a gap, it will remain there through the simulation. The filled gaps occasionally leak water, 
they function as a fluid source. These are the limitations of the generic-use fluid model. By carefully planning fluid source placement 
and the beds where flow is allowed, we can set up the desired fluid distribution, optionally masking the fluid.
}


{P.3.3.1.2, FluidPeakAvoidance, FLOAT, 1, BP-NIA}
{M.3.3.1.2, #Nesting: /LiveComponent /LiveInputFields /HeightFields /FluidStability}
{M.3.3.1.2, #Niagaraname: RVT.FluidPeakAvoidance}
{M.3.3.1.2, #Description: 
The intensity of keeping the fluid away from peaks and plateaus.
}


{P.3.3.1.3, EnableGapFilling, BOOL, 0, BP-NIA}
{M.3.3.1.3, #Nesting: /LiveComponent /LiveInputFields /HeightFields /FluidStability}
{M.3.3.1.3, #Niagaraname: RVT.EnableGapFilling}
{M.3.3.1.3, #Description: 
Ninja is running a very basic model to imitate surface aligned fluids. 
We need this parameter enabled in order to "fill gaps" - that is, to maintain a smooth surface despite the floor being uneven. 
When EnableGapFilling = True, ninja uses an internal representation of mass (fluid-column height) in order to accumulate more water 
at local lows. LIMITATION: the gap filling feature is designed to fill smaller holes and gaps, in the range of 0.5 - 5 meters. 

To make a larger, low-lying are being filled with water, there is a dedicated parameter: 
/LiveInputFields /HeightFields / ClampHeightLowerValues = True.
}


{P.3.3.1.4, FluidGapFillingTendency, FLOAT, 0.5, BP-NIA}
{M.3.3.1.4, #Nesting: /LiveComponent /LiveInputFields /HeightFields /FluidStability}
{M.3.3.1.4, #Niagaraname: RVT.FluidGapFillingTendency}
{M.3.3.1.4, #Description: 
The larger the gap we would like to fill, the larger this value should be. Recommended max: 1.18 
Above this value: visual glitches during water accumulation. 

LIMITATION:  the gap filling feature is designed to fill smaller holes and gaps, in the range of 0.5 - 5 meters. 
To make a larger, low-lying are being filled with water, there is a dedicated parameter: 
/LiveInputFields /HeightFields / ClampHeightLowerValues = True.
}


{P.3.3.1.5, FluidRepelBySDF, FLOAT, 0.5, BP-NIA}
{M.3.3.1.5, #Nesting: /LiveComponent /LiveInputFields /HeightFields /FluidStability}
{M.3.3.1.5, #Niagaraname: RVT.FluidRepelBySDF}
{M.3.3.1.5, #Description: 
Ninja by default adds the height data coming from Mesh SDF on top of the height data coming from other sources 
like LandscapeComponents (see this param: /LiveInputFields /MeshFields /AddMeshHeightToLandscapeHeight). 
By adjusting this param, we can define how much the fluid tries to escape the area where Mesh Distance Fields are present. 
This param is optimal for tweaking dynamic behavior, like meshes emerging from fluid - and fluid is flowing down from their surfaces.
}


{P.3.3.1.6, SoftenSDFRepelMask, BOOL, 0, BP-NIA}
{M.3.3.1.6, #Nesting: /LiveComponent /LiveInputFields /HeightFields /FluidStability}
{M.3.3.1.6, #Niagaraname: RVT.SoftenSDFRepelMask}
{M.3.3.1.6, #Description: 
By using this bool switch, we can further increase the amount of water that accumulates on top of Meshes, 
when they emerge from water or stick out of water.
}


{G.3.3.2, ExternalHeightData}


{P.3.3.2.1, UseExternalHeightData, BOOL, 0, BP-NIA}
{M.3.3.2.1, #Nesting: /LiveComponent /LiveInputFields /HeightFields /ExternalHeightData}
{M.3.3.2.1, #Niagaraname: RVT.UseExternalHeightData}
{M.3.3.2.1, #Description: 
Height data could be generated with arbitrary methods, independently from ninja, the goal is to write it a RenderTarget 
or Texture, so ninja could read it. For example, we can set up a top-down looking SceneCaptureCamera to sample elevation 
(scene depth) and write the data to a RenderTarget in user defined intervals (eg.: once in a second), 
then reading the RenderTarget on the ninja side. This setup is dynamic, moving objects result changing elevation map. 
In case the landscape or objects do not change, we can bake the elevation to a static Texture and use that as ninja input. 

Advantage: following the baking, we could remove the SceneCaptureCamera - no resources consumed during game-time! 

NOTE: in the ninja project, there is a modified SceneCaptureCamera with height BAKING feature included: 
/Content /FluidNinjaLive /Utilities /SceneCaptureCameraUtility.uasset}


{P.3.3.2.2, ExternalHeightDataFromRenderTarget, TEXTURE RENDERTARGET,-, BP-NIA}
{M.3.3.2.2, #Nesting: /LiveComponent /LiveInputFields /HeightFields /ExternalHeightData}
{M.3.3.2.2, #Niagaraname: ExternalHeightData}
{M.3.3.2.2, #Description: 
Input to read dynamic elevation maps.
}


{P.3.3.2.3, ExternalHeightDataFromTexture, TEXTURE 2D,-, BP-NIA}
{M.3.3.2.3, #Nesting: /LiveComponent /LiveInputFields /HeightFields /ExternalHeightData}
{M.3.3.2.3, #Niagaraname: ExternalHeightData}
{M.3.3.2.3, #Comment: both (3.3.2.2) and (3.3.2.3) feeds the SAME niagara var}
{M.3.3.2.3, #Description: 
Input to read static elevation maps.
}


{P.3.3.2.4, ExternalHeightDataNullPoint, FLOAT, 0, BP-NIA}
{M.3.3.2.4, #Nesting: /LiveComponent /LiveInputFields /HeightFields /ExternalHeightData}
{M.3.3.2.4, #Niagaraname: RVT.ExternalHeightDataNullPoint}
{M.3.3.2.4, #Description: 
The World Space Z coordinate at which the height-map capturing took place - the null reference point of the elevation map. 
SceneCaptureCamera Z-position comes here. Make sure that the XY position of Capture Camera is the same as ninja XY.
}


{G.3.3.3, RVTHeightData}


{P.3.3.3.1, UseRVTAsHeightSource, BOOL, 0, BP-NIA}
{M.3.3.3.1, #Nesting: /LiveComponent /LiveInputFields /HeightFields /RVTHeightData}
{M.3.3.3.1, #Description: 
Ninja can sample Runtime Virtual Textures (RVT) to access height data. On the other side, we need to set up RVT writing. 
Three steps: 

(1) create a Runtime Virtual Texture (RVT) asset in Content Browser, 
(2) place a Runtime Virtual Texture Volume on Level, set RVT asset as write target, make sure that sampled objects are inside the volume, 
(3) select the objects that should write height: 
Actor Details Panel /Virtual Texture /DrawInVirtualTextures: set RVT asset as write target.
}


{P.3.3.3.2, RVTAsset, OBJECT, RVT asset, BP-NIA}
{M.3.3.3.2, #Nesting: /LiveComponent /LiveInputFields /HeightFields /RVTHeightData}
{M.3.3.3.2, #Description: 
A Runtime Virtual Texture asset with height data comes here. Ninja is going to sample this asset as height source.
}


{P.3.3.3.3, RVTSample, DATAINTERFACE,-, NIAGARAONLY}
{M.3.3.3.3, #Nesting: /LiveComponent /User Parameters /DebugOnly /LiveInputFields /HeightFields /RVTHeightData}
{M.3.3.3.3, #Comment: this DI samples "RVTAsset"}
{M.3.3.3.3, #Description: 
This is a Niagara Only User Parameter: not exposed to blueprints - but accessible at LiveComponent Details Panel, at:
/LiveComponent /User Parameters /DebugOnly /LiveInputFields /HeightFields /RVTHeightData /RVTSample DATAINTERFACE

At the User Parameter settings, we can re-define the Input Object User Parameter, if needed:
SET Texture User Parameter = User.RVTAsset OBJECT

By default, ninja feeds the input object with an RVT Data Asset, if a valid asset is defined at:
/LiveComponent /LiveInputFields /HeightFields /RVTHeightData /RVTAsset
}


{G.3.4, SplineFields}


{P.3.4.1, EnableSplineReader, BOOL, 0, BP-NIA}
{M.3.4.1, #Nesting: /LiveComponent /LiveInputFields /SplineFields}
{M.3.4.1, #Description: 
Splines generate a directional field. This could be used to determine flowing direction along the spline.
}


{P.3.4.2, TryToGenerateCollisionMaskUsingRVT, BOOL, 0, BP-NIA}
{M.3.4.2, #Nesting: /LiveComponent /LiveInputFields /SplineFields}
{M.3.4.2, #Niagaraname: Spline.TryToGenerateCollisionMaskUsingRVT}
{M.3.4.2, #Description: 
Ninja tries to determine spline-height (World Z), comparing this against the height of underlying heightfield 
(typically from a Landscape Component) and generate a collision mask where SplineHeight < LandscapeHeight. 
If the operation is successful, fluid advection gets blocked at the (river) coastline. 

PREREQUISITE for Landscape-Spline intersection detection: 
/LiveInputFields /HeightFields / UseHeightAsCollisionMask = True.
}


{P.3.4.3, SoftenCollisionMask, FLOAT, 0.25, BP-NIA}
{M.3.4.3, #Nesting: /LiveComponent /LiveInputFields /SplineFields}
{M.3.4.3, #Niagaraname: Spline.SoftenCollisionMask}
{M.3.4.3, #Description: 
Making the blocking zone softer.
}


{P.3.4.4, SplineWidth, FLOAT, 20, BP-NIA}
{M.3.4.4, #Nesting: /LiveComponent /LiveInputFields /SplineFields}
{M.3.4.4, #Niagaraname: Spline.SplineWidth}
{M.3.4.4, #Description: 
Optionally define spline-mesh-width in METERS to help ninja generate a better collision mask. 
Very useful for meandering (curly) rivers where curves are spatially close to each other.
}


{P.3.4.5, GetSplineComponentFromActor, OBJECT,-, BP-NIA}
{M.3.4.5, #Nesting: /LiveComponent /LiveInputFields /SplineFields}
{M.3.4.5, #Niagaraname: User.SplineMeshActor}
{M.3.4.5, #Comment: both (3.4.5 and 3.4.6 feeds the SAME niagara var}
{M.3.4.5, #Description: 
User defined Actor with Spline Component.
}


{P.3.4.6, GetSplineComponentsFromTaggedActors, NAME, none, BPONLY}
{M.3.4.6, #Nesting: /LiveComponent /LiveInputFields /SplineFields}
{M.3.4.6, #Description: 
Ninja collects all Actors with Spline Component using THIS TAG - and picks the closest one for sampling.
}


{P.3.4.7, RecollectSplinesDuringGame, BOOL, 0, BPONLY}
{M.3.4.7, #Nesting: /LiveComponent /LiveInputFields /SplineFields}
{M.3.4.7, #Description: 
Ninja can handle only a single spline in the simulation area. In case the sim area moves (eg. attached to player), 
we might cross new splines. Using this feature ninja periodically monitors tagged spline-sources and picks the one 
that is closest to the sim area. Ideal for large levels with multiple, distant splines. 

Recollection frequency is defined by this variable: /LiveEditorTools /ParamUpdateFrequency.
}


{P.3.4.8, Spline, DATAINTERFACE, - , NIAGARAONLY}
{M.3.4.8, #Nesting: /LiveComponent /User Parameters /DebugOnly /LiveInputFields /SplineFields}
{M.3.4.8, #Description: 
This is a Niagara Only User Parameter: not exposed to blueprints - but accessible at LiveComponent Details Panel, at:
/LiveComponent /User Parameters /DebugOnly /LiveInputFields /SplineFields /Spline DATAINTERFACE

WARNING: this is a complex Data Interface type User Parameter - referencing an other, "input object" type User Parameter. 
As a result of an Unreal Bug, the Spline Data Interface tends to forget the referenced "input object" User Parameter when 
we copy-paste setups. As a result, ninja can not access input objects and sample spline-data. 

FIX: look up the Spline DATAINTERFACE at User Parameters,
SET Spline User Parameter = User.SplineMeshActor OBJECT, 
SET Use LUT = TRUE, 
SET Num LUT Steps = 4096
}


{G.3.5, Destructibles}


{P.3.5.1, EnableGeometryCollectionREADTOOLTIP, PLACEHOLDER, - , BPONLY}
{M.3.5.1, #Nesting: /LiveComponent /LiveInputFields /Destructibles}
{M.3.5.1, #Description: 
This bool switch is only a PLACEHOLDER for the TOOLTIP - please read carefully! 

Geometry Collections are typically Destructibles with precalculated fracture chunks. The chunks could be sampled 
as a type of Mesh SDF. To access them, SET /LiveInputFields /MeshFields /EnableMeshDistanceFieldReader = True. 

WARNING: Chaos destructibles also could be accessed as POINTS (via Chaos DI, under LiveInputPoints /InteractionWithDestructibles). 
Set up one method EXCLUSIVELY and DISABLE the other method (SDF input vs POINT input).
}


{P.3.5.2, GetGeometryCollectionFromActor, OBJECT,-, BPONLY}
{M.3.5.2, #Nesting: /LiveComponent /LiveInputFields /Destructibles}
{M.3.5.2, #Niagaraname: User.GeometryCollectionActor}
{M.3.5.2, #Comment: both 3.5.2 and 3.5.3 feeds the SAME niagara var}
{M.3.5.2, #Description: 
WARNING: this param is TEMPORARILY NOT SAFE TO USE - until EPIC fixes a memory-leak bug, 
corrupting the Niagara GeometryCollection sampler node. 

WORKAROUND:
(A) instead of directly defining a Geometry Collection Actor, use "GetGeometryCollectionFromTaggedActor"
(B) make sure that "RecollectGeoCollectionsDuringGameTime" is set to TRUE
}


{P.3.5.3, GetGeometryCollectionFromTaggedActor, NAME, none, BPONLY}
{M.3.5.3, #Nesting: /LiveComponent /LiveInputFields /Destructibles}
{M.3.5.3, #Description: 
Geometry Collections are typically Destructibles with precalculated fracture chunks. 
Ninja collects all Actors with Geometry Collection Component using THIS TAG.
}


{P.3.5.4, RecollectGeoCollectionsDuringGameTime, BOOL, 1, BPONLY}
{M.3.5.4, #Nesting: /LiveComponent /LiveInputFields /Destructibles}
{M.3.5.4, #Description: 
Ninja can handle only a single GeometryCollection in the simulation area. 
Once the tracked GeoCollection breaks, ninja removes the GeoCollection after a user defined time interval (default = 3 seconds) 
and a new collection could be picked up (if available). 

Optimal for sequentially tracking spawned destructibles that eventually break. 
Recollection frequency is defined by this variable: /LiveEditorTools /ParamUpdateFrequency.
}


{P.3.5.5, StopReadingActiveGeoCollectionAfterNSeconds, FLOAT, 3, BPONLY}
{M.3.5.5, #Nesting: /LiveComponent /LiveInputFields /Destructibles}
{M.3.5.5, #Description: 
In case we read destructibles as SDF, the sampled Destructible Mesh is being ignored (not sampled) after n-seconds, 
defined by this variable. Once a Destructible SDF is ignored, a "removal debug message" could be generated by setting 
/LiveCore /Debug /ShowDestructibleRemovals = True.
}


{P.3.5.6, GeometryCollection, DATAINTERFACE, - , NIAGARAONLY}
{M.3.5.6, #Nesting: /LiveComponent /User Parameters /DebugOnly /LiveInputFields /Destructibles}
{M.3.5.6, #Description: 
This is a Niagara Only User Parameter: not exposed to blueprints - but accessible at LiveComponent Details Panel, at:
/LiveComponent /User Parameters /DebugOnly /LiveInputFields /Destructibles /GeometryCollection DATAINTERFACE

WARNING: this is a complex Data Interface type User Parameter - referencing an other, "input object" type User Parameter. 
As a result of an Unreal Bug, the GeometryCollection Data Interface tends to forget the referenced "input object" User Parameter 
when we copy-paste setups. As a result, ninja can not access input objects and sample GeometryCollection data. 

FIX: look up the Spline DATAINTERFACE at User Parameters,
SET Geometry Collection User Parameter = User.GeometryCollectionActor OBJECT
}


{G.3.6, Cache}


{P.3.6.1, StartSimFromCachedData, BOOL, 0, BP-NIA}
{M.3.6.1, #Nesting: /LiveComponent /LiveInputFields /Cache}
{M.3.6.1, #Description: 
We can save a single-frame snapshot of the simulation buffers while the game is running - and initialize the simulation 
from the snapshot at next start. We call this CACHING. Advantage: we don't have to wait until the desired fluid state builds up. 

NOTE 1: the function to save buffers is located at /LiveEditorTools /SaveSimBuffers. 
NOTE 2: the saved buffers should be loaded to the three input fields under /LiveInputFields /Cache.
}


{P.3.6.2, CachedPainterElevation, TEXTURE,-, BP-NIA}
{M.3.6.2, #Nesting: /LiveComponent /LiveInputFields /Cache}
{M.3.6.2, #Niagaraname: CachedPainter}
{M.3.6.2, #Description: 
Load a Paint Buffer here, with painter Velocity, painter Density and Surface Elevation data on RGBA channels.
}


{P.3.6.3, CachedVelocityDensity, TEXTURE,-, BP-NIA}
{M.3.6.3, #Nesting: /LiveComponent /LiveInputFields /Cache}
{M.3.6.3, #Description: 
Load a Simulation Buffer here, with sim Velocity, sim Density and Wetmap data on RGBA channels.
}


{P.3.6.4, CachedPressureDivergence, TEXTURE,-, BP-NIA}
{M.3.6.4, #Nesting: /LiveComponent /LiveInputFields /Cache}
{M.3.6.4, #Description: 
Load a Simulation Buffer here, with sim Pressure and sim Divergence data on RG channels.
}




{G.4, LiveInputPoints}
{G.4.0, Root}


{P.4.0.1, GlobalBrushSize, FLOAT, 1, BP-NIA}
{M.4.0.1, #Nesting: /LiveComponent /LiveInputPoints}
{M.4.0.1, #Niagaraname: Painter.GlobalBrushSize}
{M.4.0.1, #Legacyname: BrushSize}
{M.4.0.1, #Description: 
One mode to interact with objects is to track their position and represent it with a circle ("a brush stroke") in the sim space. 
While ninja distinguishes various point-sources, this param works like a global brush size scale for all point-sources.
}


{P.4.0.2, PrimitiveObjBrushSize, FLOAT, 1, BPONLY}
{M.4.0.2, #Nesting: /LiveComponent /LiveInputPoints}
{M.4.0.2, #Legacyname: PrimitiveObjBrushScale}
{M.4.0.2, #Description: 
Ninja can track the PIVOT of Primitives (Static and Dynamic Meshes, Physicsbodies), painting "brush strokes" with the position data. 
This param scales Primitive brush strokes.
}


{P.4.0.3, SkeletalMeshBrushSize, FLOAT, 1, BPONLY}
{M.4.0.3, #Nesting: /LiveComponent /LiveInputPoints}
{M.4.0.3, #Legacyname: SkeletalMeshBrushScale}
{M.4.0.3, #Description: 
Ninja can track the BONES of Skeletal Meshes, painting "brush strokes" with the position data. 
This param scales Bone-position driven brush strokes.
}


{P.4.0.4, ParticleBrushSize, FLOAT, 1, BP-NIA}
{M.4.0.4, #Nesting: /LiveComponent /LiveInputPoints}
{M.4.0.4, #Niagaraname: Painter.ParticleBrushSize}
{M.4.0.4, #Description: 
Ninja can track Particles, painting "brush strokes" with the position data. 
This param scales Particle-position driven brush strokes.
}


{P.4.0.5, DestructibleBrushSize, FLOAT, 1, BP-NIA}
{M.4.0.5, #Nesting: /LiveComponent /LiveInputPoints}
{M.4.0.5, #Niagaraname: Painter.DestructibleBrushSize}
{M.4.0.5, #Description: 
Ninja can track Destructible Chunks, painting "brush strokes" with the position data. 
This param scales Chunk-position driven brush strokes.
}


{P.4.0.6, VehicleBrushSize, FLOAT, 1, BPONLY}
{M.4.0.6, #Nesting: /LiveComponent /LiveInputPoints}
{M.4.0.6, #Description: 
Ninja can track the BONES in Skeletal Mesh based Vehicle Setups, painting "brush strokes" with the position data. 
This param scales Bone-position driven brush strokes.
}


{P.4.0.7, MouseBrushSize, FLOAT, 1, BPONLY}
{M.4.0.7, #Nesting: /LiveComponent /LiveInputPoints}
{M.4.0.7, #Description: 
Ninja can track the Mouse Pointer, painting "brush strokes" with the position data. 
This param scales Mouse Pointer position driven brush strokes.
}


{P.4.0.8, UseTrackedObjectSize, BOOL, 1, BP-NIA}
{M.4.0.8, #Nesting: /LiveComponent /LiveInputPoints}
{M.4.0.8, #Niagaraname: Painter.UseTrackedObjectSize}
{M.4.0.8, #Description: 
Using the object Scale Transform to multiply brush stroke size.
}


{P.4.0.9, UseObjBoundsInsteadOfScale, BOOL, 1, BPONLY}
{M.4.0.9, #Nesting: /LiveComponent /LiveInputPoints}
{M.4.0.9, #Description: 
Using the object Bounding Sphere to multiply brush stroke size. 
If enabled, overrides the "UseTrackedObjectSize" param.
}


{P.4.0.10, BrushStrength, FLOAT, 1, BP-NIA}
{M.4.0.10, #Nesting: /LiveComponent /LiveInputPoints}
{M.4.0.10, #Niagaraname: Painter.BrushStrength}
{M.4.0.10, #Description: 
The amount of density injected to the Paint Buffer per brush stroke.
}


{P.4.0.11, BrushHardness, FLOAT, 0, BP-NIA}
{M.4.0.11, #Nesting: /LiveComponent /LiveInputPoints}
{M.4.0.11, #Niagaraname: Painter.BrushHardness}
{M.4.0.11, #Description: 
Brush Stroke contour softness vs hardness.
}


{P.4.0.12, BrushPersistencyREADTOOLTIP, PLACEHOLDER,-, BPONLY}
{M.4.0.12, #Nesting: /LiveComponent /LiveInputPoints}
{M.4.0.12, #Description: 
This function has been moved to /LiveInputFields /PersistencyOfFieldAndPointData. 
This UI input here is only a PLACEHOLDER.
}


{P.4.0.13, DestructiblePointReaderEnabled, BOOL, 1, BP-NIA}
{M.4.0.13, #Nesting: /LiveComponent /LiveInputPoints}
{M.4.0.13, #Niagaraname: Painter.DestructiblePointReaderEnabled}
{M.4.0.13, #Description: 
Ninja can read Destructible Chunk position data as point-like input using the Chaos Niagara Data Interface. 

The Chaos DI automatically detects all chunks in the simulation area (no tagging or object definition needed),
but we need to select one of the three EVENT TYPES that triggers point-data generation: 
chunk Trailing (rolling on a surface), chunk Collision (hitting a surface), chunk Breaking. "Trailing" is the default. 

IMPORTANT: SIMILAR EVENT TYPE should be defined both on the "broadcast" side (in the Destructible Mesh Component) 
and on the "receiver" side (in ninja, using the config settings of the Niagara Chaos Data Interface). 

Access Chaos DI on the Live Component Details Panel at: 
/LiveComponent /User Parameters /DebugOnly /LiveInputPoints /Destructibles /TrackedDestructiblesChaos DATAINTERFACE, 
SET Data Source to: Collision Data or Breaking Data or Trailing Data. 

WARNING! There are TWO ways to read destructibles: 
(1) as FIELD (via Geometry Collection DI, under LiveInputFields /Destructibles),
(2) as POINTS (via Chaos DI, under LiveInputPoints /InteractionWithDestructibles).

Suggestion: set up one method EXCLUSIVELY and DISABLE the other.
}


{P.4.0.14, DataChannelPointReaderEnabled, BOOL, 1, BP-NIA}
{M.4.0.14, #Nesting: /LiveComponent /LiveInputPoints}
{M.4.0.14, #Description: 
Data Channels are generic, dynamically updated data containers in Unreal: both blueprints and niagara systems could 
read and write them, on the CPU and on the GPU, they can hold float and vector values. Ninja can read Data Channel entries 
as point-like input. In the examples included to the ninja project, we are using Particle Systems to write particle position 
and velocity to a Data Channel, and reading the data as point-like simulation input on the ninja side. 

NOTE 1: ninja niagara core system is set up to directly read a specific, single, global data channel bind to a specific asset (a file) 
in the Content Browser: /Content/FluidNinjaLive/Core/DataChannels/NinjaDataChannel1_Global.uasset. 
Data written to this asses is being read by ninja. Ideally, the DataChannel asset we use should be a User Parameter 
we can change on the Live Component Details Panel. This is not being the case. 
Unreal Engine v5.4 - v5.7 Niagara DataChannel Interface seems to ignore User Parameter defined DataChannels, 
this is probably a bug, hopefully fixed under upcoming engine versions (5.8 maybe?). 

NOTE 2: the /LiveCore /Performance /DataChannelThroughput variable is setting a limit on the amount 
of entries being read from the DataChannel by Ninja.
}


{P.4.0.15, TrackedDestructiblesChaos, DATAINTERFACE, - , NIAGARAONLY}
{M.4.0.15, #Nesting: /LiveComponent /User Parameters /DebugOnly /LiveInputPoints /Destructibles}
{M.4.0.15, #Description: 
This is a Niagara Only User Parameter: not exposed to blueprints - but accessible at LiveComponent Details Panel, at:
/Live Component /User Parameters /DebugOnly /LiveInputPoints /Destructibles /TrackedDestructiblesChaos DATAINTERFACE. 

This parameter can be used to define the EVENT TYPE Chaos Data Interface uses to receive Destructible Chunk position data. 

Event Types are "Trailing", "Collision" and "Breaking" - and we can find similarly named "Data Sources" at the interface. 
Data Source: Collision Data, Breaking Data, Trailing Data
}


{G.4.1, BrushKillers}


{P.4.1.1, EraserModeREADTOOLTIP, PLACEHOLDER,-, BPONLY}
{M.4.1.1, #Nesting: /LiveComponent /LiveInputPoints /BrushKillers}
{M.4.1.1, #Comment: Function moved to /LiveInputFields /InvertFieldAndPointDensity}
{M.4.1.1, #Description: 
This function has been MOVED to: /LiveInputFields /InvertFieldAndPointDensity. 
This UI input here (EraserMode) is only a PLACEHOLDER.
}


{P.4.1.2, SelectivelyKillBrushDensityKeepVelocity, INT, 0, BP-NIA}
{M.4.1.2, #Nesting: /LiveComponent /LiveInputPoints /BrushKillers}
{M.4.1.2, #Niagaraname: Painter.SelectivelyKillBrushDensityKeepVelocity}
{M.4.1.2, #Description: 
In case we do NOT want point-like simulation inputs to generate density - but we still want them to stir the fluid 
(add velocity to the simulation), we can do it here. Kill Brush Density could be used SELECTIVELY, effecting only certain types of inputs. 
Six numeric choices and their explanation: 

0: NONE (all point-like inputs generate density and velocity - this is the default), 
1: ARRAY (Primitives and Skeletal Mesh Bones do not generate density, but add velocity), 
2: DATACHANNEL (DataChannel input is typically Particles - using this choice, Particles do not generate density, but add velocity), 
3: CHAOS (Chaos input is typically Destructible Chunks - using this choice, Chunks do not generate density, but add velocity), 
4. ARRAY and CHAOS (this is a combination of 1 + 3), 
5. ALL (NONE of the point-like inputs generate density - and ALL of them adds velocity). 

NOTE 1: there is a similar "kill density keep velocity" type switch for Mesh SDF inputs, at: 
/LiveInputFields /MeshFields /UseAsVelocitySource. 

NOTE 2: besides "not adding density" we can also turn our brushstrokes to ERASERS, actively removing density. 
See: /LiveInputFields /InvertFieldAndPointDensity.
}


{P.4.1.3, KillBrushBelowThisVelocity, FLOAT, 0, BP-NIA}
{M.4.1.3, #Nesting: /LiveComponent /LiveInputPoints /BrushKillers}
{M.4.1.3, #Legacyname: DampenBrush}
{M.4.1.3, #Niagaraname: Painter.KillBrushBelowThisVelocity}
{M.4.1.3, #Description: 
Brush density is killed, if the point-source moves slow or stops.

Range: 0-1. By default, objects, bones and particles always generate density ("leave brush strokes") 
until they overlap with the simulation area. There are cases, when we do NOT want this. 

For example: in a "sparse" type water setup, brush density is used to generate whitewater. 
Fast moving objects should generate whitewater - still standing objects should NOT. 
Using this param as a THRESHOLD VALUE, we can FADE or KILL brush density below a given input velocity. 

NOTE: there is similar option for Mesh SDF at:
/LiveInputFields /Meshfields /ScaleDensityWithVelocity.
}


{P.4.1.4, FadeBrushByZPos, BOOL, 0, BP-NIA}
{M.4.1.4, #Nesting: /LiveComponent /LiveInputPoints /BrushKillers}
{M.4.1.4, #Niagaraname: Painter.FadeBrushByZPos}
{M.4.1.4, #Description: 
We can modify brush strength with the Z-position of point-like inputs. Points closer to the ground leave stronger marks. 
Intended use case: gradually increasing effect on the ground or water surface. 

NOTE: the "FadeBrushByZPos" function works on points that are already inside Live Component Interaction Volume
and already trigger sim response. It is the "ExtentsXYZ" parameter that defines Live Component Interaction Volume
and filters which points trigger sim response.
}


{P.4.1.5, FadeBrushByZPosInMeters, FLOAT, 1, BP-NIA}
{M.4.1.5, #Nesting: /LiveComponent /LiveInputPoints /BrushKillers}
{M.4.1.5, #Niagaraname: Painter.FadeBrushByZPosInMeters}
{M.4.1.5, #Description: 
Once we have "FadeBrushByZPos" enabled, we can define the fade distance of point-like inputs, compared to the ground 
or water surface. For example: a value of 0.1 means, that objects (e.g.: character feet) have maximum impact at the ground surface, 
and the brush strength gradually fades to zero as the object distances from the ground, reaching 10 centimeters distance.
}


{G.4.2, BrushNoise}


{P.4.2.1, BrushPositionRandom, FLOAT, 0, BP-NIA}
{M.4.2.1, #Nesting: /LiveComponent /LiveInputPoints /BrushNoise}
{M.4.2.1, #Legacyname: BrushRnd}
{M.4.2.1, #Description: 
Brush Jitter - adds a per-frame random value to the detected position of point inputs. 
Intended use case: good to imitate random fluid perturbations - like a torch, flame ball or jet exhaust.
}


{P.4.2.2, BrushRndScaledByVelocity, BOOL, 0, BP-NIA}
{M.4.2.2, #Nesting: /LiveComponent /LiveInputPoints /BrushNoise}
{M.4.2.2, #Niagaraname: Painter.BrushRndScaledByVelocity}
{M.4.2.2, #Description: 
Scales Brush Jitter with velocity. Slower objects leave less-randomized brush strokes.
}


{P.4.2.3, BrushNoiseInWorldSpace, BOOL, 1, BP-NIA}
{M.4.2.3, #Nesting: /LiveComponent /LiveInputPoints /BrushNoise}
{M.4.2.3, #Niagaraname: Painter.BrushNoiseInWorldSpace}
{M.4.2.3, #Description: 
Switch between Noise pattern behavior: Local Space vs World Space.
}


{P.4.2.4, BrushDensityNoise, FLOAT, 0, BP-NIA}
{M.4.2.4, #Nesting: /LiveComponent /LiveInputPoints /BrushNoise}
{M.4.2.4, #Niagaraname: Painter.BrushDensityNoise}
{M.4.2.4, #Legacyname: BrushNoise}
{M.4.2.4, #Description: 
Subtracting noise from brush stroke density in the Paint Buffer. 
Smaller values eat the "soft radius" around the core of brush strokes. 
Larger values eat the core of brush-strokes too.
}


{P.4.2.5, BrushDensityNoiseScale, FLOAT, 1, BP-NIA}
{M.4.2.5, #Nesting: /LiveComponent /LiveInputPoints /BrushNoise}
{M.4.2.5, #Niagaraname: Painter.BrushDensityNoiseScale}
{M.4.2.5, #Description: 
Define the tiling of noise-pattern. Smaller values mean larger tiles.
}


{P.4.2.6, BrushDensityNoiseFreq, FLOAT, 40, BP-NIA}
{M.4.2.6, #Nesting: /LiveComponent /LiveInputPoints /BrushNoise}
{M.4.2.6, #Niagaraname: Painter.BrushDensityNoiseFreq}
{M.4.2.6, #Description: 
Noise change rate. Lower value means slower noise-oscillation.
}


{P.4.2.7, BrushDensityNoisePow, FLOAT, 2, BP-NIA}
{M.4.2.7, #Nesting: /LiveComponent /LiveInputPoints /BrushNoise}
{M.4.2.7, #Niagaraname: Painter.BrushDensityNoisePow}
{M.4.2.7, #Description: 
Applies a power function on the brush density noise pattern. 
Default =2. Smaller values result a denser, smoother noise. Try "1".
}


{P.4.2.8, BrushVelocityNoise, FLOAT, 1, BP-NIA}
{M.4.2.8, #Nesting: /LiveComponent /LiveInputPoints /BrushNoise}
{M.4.2.8, #Niagaraname: Painter.BrushVelocityNoise}
{M.4.2.8, #Description: 
Adding noise to brush stroke velocity in the Paint Buffer.
}


{P.4.2.9, BrushVelocityNoiseFreq, FLOAT, 0.1, BP-NIA}
{M.4.2.9, #Nesting: /LiveComponent /LiveInputPoints /BrushNoise}
{M.4.2.9, #Niagaraname: Painter.BrushVeloNoiseFreq}
{M.4.2.9, #Description: 
Noise change rate. Lower value means slower noise-oscillation.
}


{P.4.2.10, BrushVelocityNoiseScale, FLOAT, 30, BP-NIA}
{M.4.2.10, #Nesting: /LiveComponent /LiveInputPoints /BrushNoise}
{M.4.2.10, #Niagaraname: Painter.BrushVeloNoiseScale}
{M.4.2.10, #Description: 
Define the tiling of noise-pattern. Smaller values mean larger tiles.
}


{P.4.2.11, GenericBrushNoiseTexture, TEXTURE, T_NoiseTemplate2, BP-NIA}
{M.4.2.11, #Nesting: /LiveComponent /LiveInputPoints /BrushNoise}
{M.4.2.11, #Description: 
A tiled noise-pattern used everywhere in the ninja pipeline to add randomness. 
Recommended: high frequency noise with 0.5 as average value.
}


{G.4.3, BrushVelocity}


{P.4.3.1, BrushVelocityMultXY, FLOAT, 1, BP-NIA}
{M.4.3.1, #Nesting: /LiveComponent /LiveInputPoints /BrushVelocity}
{M.4.3.1, #Niagaraname: Painter.BrushVelocityMultXY}
{M.4.3.1, #Description: 
Ninja is tracking point-like inputs. Their position and velocity is being converted from World Space to Local Space. 
Using this param, we can scale the XY component of velocity coming from a tracked object. 
The XY component is "velocity that aligns with the simulation plane".
}


{P.4.3.2, BrushVelocityMultZ, FLOAT, 1, BP-NIA}
{M.4.3.2, #Nesting: /LiveComponent /LiveInputPoints /BrushVelocity}
{M.4.3.2, #Niagaraname: Painter.BrushVelocityMultZ}
{M.4.3.3, #Description: 
Ninja is tracking point-like inputs. Their position and velocity is being converted from World Space to Local Space. 
Using this param, we can scale the Z component of velocity coming from a tracked object. 
The Z component is "velocity that is perpendicular to the simulation plane" - for example a ball hitting the water surface. 
Increasing this param results stronger impact effect. Also see "BrushPuncture" param.
}


{P.4.3.3, BrushVelocityPow, FLOAT, 1.6, BP-NIA}
{M.4.3.3, #Nesting: /LiveComponent /LiveInputPoints /BrushVelocity}
{M.4.3.3, #Niagaraname: Painter.BrushVelocityPow}
{M.4.3.3, #Description: 
Range: (0.1 - 9). Control how raw brush velocity is being forwarded to the sim. 
N=1 means no change, N>1 mean lower velocity values get killed, N<1 means lower velocity values get scaled up.
}


{P.4.3.4, BrushVelocityClamp, FLOAT, 1, BP-NIA}
{M.4.3.4, #Nesting: /LiveComponent /LiveInputPoints /BrushVelocity}
{M.4.3.4, #Niagaraname: Painter.BrushVelocityClamp}
{M.4.3.4, #Description: 
Define the maximum velocity written into the Paint Buffer. Incoming values above threshold being clamped.
}


{P.4.3.5, BrushPuncture, FLOAT, 0.05, BP-NIA}
{M.4.3.5, #Nesting: /LiveComponent /LiveInputPoints /BrushVelocity}
{M.4.3.5, #Niagaraname: Painter.BrushPuncture}
{M.4.3.5, #Description: 
Puncture adds "outward flowing" velocity to brush-strokes. Standing objects "boil", objects moving perpendicular 
to the sim plane make impact-shockwaves. This param is similar to the "ZvelocityMult" param for MeshSDF input.
}


{P.4.3.6, NegativePuncture, BOOL, 0, BP-NIA}
{M.4.3.6, #Nesting: /LiveComponent /LiveInputPoints /BrushVelocity}
{M.4.3.6, #Niagaraname: Painter.NegativePuncture}
{M.4.3.6, #Description: 
Using negative radial velocity for objects that move perpendicular to the simulation plane 
and coming "from the bottom side". As a result, the object "pulls" the fluid instead of "pushing it away". 
Feels more like an implosion.
}


{P.4.3.7, ArrayBrushVelocity, FLOAT, 1, BP-NIA}
{M.4.3.7, #Nesting: /LiveComponent /LiveInputPoints /BrushVelocity}
{M.4.3.7, #Niagaraname: Painter.ArrayBrushVelocity}
{M.4.3.7, #Description: 
"Array" refers to point data coming from Live Actor: Primitives and Skeletal Mesh bones. 
We can scale their velocity separately.
}


{P.4.3.8, ParticleBrushVelocity, FLOAT, 1, BP-NIA}
{M.4.3.8, #Nesting: /LiveComponent /LiveInputPoints /BrushVelocity}
{M.4.3.8, #Niagaraname: Painter.ParticleBrushVelocity}
{M.4.3.8, #Description: 
We can separately scale velocity coming from particles.
}


{G.4.4, BrushSpecial}


{P.4.4.1, BrushHardnessScaledByObjSize, FLOAT, 0, BP-NIA}
{M.4.4.1, #Nesting: /LiveComponent /LiveInputPoints /BrushSpecial}
{M.4.4.1, #Niagaraname: Painter.BrushHardnessScaledByObjSize}
{M.4.4.1, #Description: 
Larger objects leave harder (less soft) paint marks in the Paint Buffer.
}


{P.4.4.2, MovePrimitiveObjPivotFromCenterToBottom, FLOAT, 1, BPONLY}
{M.4.4.2, #Nesting: /LiveComponent /LiveInputPoints /BrushSpecial}
{M.4.4.2, #Description: 
This feature is a workaround for a common problem, when we want large objects to leave ground marks, 
while tracked as point-like inputs. 

Fact: large objects have their PIVOT high above the ground - think of a 2 meters ball, pivot in the middle, 1 meter above the ground. 
In order to detect these objects, we need to set the Interaction Volume (at Live Actor /LiveInteraction param group) "tall enough". 

Still... despite detecting objects high above the ground, we want to limit interaction to a vertically thin area, 
very close to the ground surface. Think of a ball bouncing: we only expect it to leave ground marks, when it touches the ground. 
Same for a pawn, walking: we want footsteps when the feet bones touch the ground. 
In order to limit our interaction to the ground surface, we should set the Z part of the "ExtentsXYZ" parameter 
(in the LiveCore param group) to a small value (eg. 0.05 meter)... but then, we exclude the "high pivots". 
Our 2 meters sphere will not leave ground marks - as the pivot is outside the 0.05m extents. 

Workaround: internally move primitive Object Pivots from the center to the bottom - so the point 
falls within our thin point-filtering volume (ExtentsXYZ). 
Specifically, for this parameter, "1" means: Pivot is maximally offset to the lower object bounds. 

NOTE: the problem does not exist for Mesh SDF type inputs: in that case, the mesh/simulation-plane intersection generates the marks.
}


{P.4.4.3, OffsetBrushPositionInMotionDirection, FLOAT, 0.5, BP-NIA}
{M.4.4.3, #Nesting: /LiveComponent /LiveInputPoints /BrushSpecial}
{M.4.4.3, #Niagaraname: Painter.OffsetBrushPositionInMotionDirection}
{M.4.4.3, #Description: 
We offset brush position in Velocity Direction to PREDICT position. We need to do this, as Ninja Core works with a one frame lag: 
accessing Previous Frame Data is a property of GPU compute Niagara Systems. So, we predict position, send this data to Niagara, 
and one frame later, when the time comes for niagara to use the data, the position will approximately match current frame position.
}


{P.4.4.4, ForceAdditiveStrokeBlending, BOOL, 0, BP-NIA}
{M.4.4.4, #Nesting: /LiveComponent /LiveInputPoints /BrushSpecial}
{M.4.4.4, #Niagaraname: Painter.ForceAdditiveStrokeBlending}
{M.4.4.4, #Description: 
By default, ninja is using Translucent Blend to merge consecutive passes of brush strokes in the Paint Buffer, frame to frame. 
We can change the blending method to Additive.
}


{G.4.5, InteractionWithOwner}

{P.4.5.1, InteractionWithOwnerActor, BOOL, 0, BPONLY}
{M.4.5.1, #Nesting: /LiveComponent /LiveInputPoints /InteractionWithOwner}
{M.4.5.1, #Legacyname: ContinuousInteractionWithOwnerActor}
{M.4.5.1, #Description: 
SET THIS BOOL TO TRUE, IF NINJALIVE IS USED AS COMPONENT IN NON-NINJA ACTORS. 
Live Component does NOT have built in overlap detection functionality for Primitives and Skeletal Meshes, 
these functions are managed by Live Actor. In case Live Component runs without Live Actor, we need a fallback option: 
we can continuously track a set of user defined Primitive Components and Skeletal Mesh Bones of the Owner Actor. 
This type of interaction is labeled "non-overlap based" or "continuous" interaction.
}


{P.4.5.2, InteractionInclusiveObjType, ENUM,-, BPONLY}
{M.4.5.2, #Nesting: /LiveComponent /LiveInputPoints /InteractionWithOwner}
{M.4.5.2, #Legacyname: ContinuousInteractionInclusiveObjType}
{M.4.5.2, #Description: 
Define which Components of the Owner Actor could interact with Live Component. 
Despite having 6 options (for legacy reasons), the logic distinguishes 3 cases: 

(A) IF "WorldStatic" is the only list item: Static Meshes are allowed, 
(B) IF "Pawn" is the only list item, Skeletal Meshes are allowed, 
(C) IF multiple components are added to the list: all PrimitiveComponents are tracked. 

Using the "...NamesExact" filters, the selection could be narrowed.
}


{P.4.5.3, InteractionComponentNamesExact, NAME, none, BPONLY}
{M.4.5.3, #Nesting: /LiveComponent /LiveInputPoints /InteractionWithOwner}
{M.4.5.3, #Legacyname: ContinuousInteractionComponentNamesExact}
{M.4.5.3, #Description: 
User provided Primitive Components. Only the listed components interact with the fluidsim.
}


{P.4.5.4, InteractionBoneNamesExact, NAME, none, BPONLY}
{M.4.5.4, #Nesting: /LiveComponent /LiveInputPoints /InteractionWithOwner}
{M.4.5.4, #Legacyname: ContinuousInteractionBoneNamesExact}
{M.4.5.4, #Description: 
User provided Skeletal Mesh BONES/SOCKETS. Only the listed bones interact with fluidsim.
}


{G.5, LiveSimulation}
{G.5.0, Root}

{P.5.0.1, DensityAccumulation, FLOAT, 0.85, BP-NIA}
{M.5.0.1, #Nesting: /LiveComponent /LiveSimulation}
{M.5.0.1, #Niagaraname: Composite.DensityAccumulation}
{M.5.0.1, #Legacyname: SimulationFeedback}
{M.5.0.1, #Comment: P.revious legacy name: FlowFeedback}
{M.5.0.1, #Description: 
This key parameter controls density feedback loop in the simulation. Higher values make fluid density persist in the simulation area. 
Lower values result quickly vanishing fluid density. A fluid setup is "dense", if we set the simulation density feedback value 
to a number larger than one (n>1), and density starts to accumulate in the sim area (fluid is becoming "dense"). 
IF n<1, sim density is vanishing by time, density is "sparse" in the sim area. DENSE setups are used exclusively for terrain-flowing 
liquids. SPARSE setups are being used in every other case: fire, smoke, foliage-wind, non-terrain-flowing "flat" liquids... etc.
}


{P.5.0.2, VeloFromBrushMotion, FLOAT, 1, BP-NIA}
{M.5.0.2, #Nesting: /LiveComponent /LiveSimulation}
{M.5.0.2, #Niagaraname: Composite.VeloFromBrushMotion}
{M.5.0.2, #Description: 
Adjust velocity coming from point-like inputs.
}


{P.5.0.3, VeloFromLandscapeGradient, FLOAT, 0.3, BP-NIA}
{M.5.0.3, #Nesting: /LiveComponent /LiveSimulation}
{M.5.0.3, #Niagaraname: Composite.VeloFromLandscapeGradient}
{M.5.0.3, #Description: 
Adjust velocity coming from HeightField gradient. Steeper slopes impose stronger downward velocity on the fluid. 
Every input contributing to the HeighField generates velocity - not only Landscape Components. 
It could be RVT, Mesh SDF or depth coming from a SceneCaptureCamera.
}


{P.5.0.4, VeloFromSplineXY, FLOAT, 1, BP-NIA}
{M.5.0.4, #Nesting: /LiveComponent /LiveSimulation}
{M.5.0.4, #Niagaraname: Composite.VeloFromSplineXY}
{M.5.0.4, #Description: 
Adjust velocity coming from horizontal Spline curvature. We can think of this param as "river flow speed along the directional vector".
}


{P.5.0.5, VeloFromSplineZ, FLOAT, 1, BP-NIA}
{M.5.0.5, #Nesting: /LiveComponent /LiveSimulation}
{M.5.0.5, #Niagaraname: Composite.VeloFromSplineZ}
{M.5.0.5, #Description: 
Adjust velocity coming from vertical Spline curvature. We can think of this param as the speed of rapids as the river descends.
}


{P.5.0.6, VeloFromBitmaps, FLOAT, 0.25, BP-NIA}
{M.5.0.6, #Nesting: /LiveComponent /LiveSimulation}
{M.5.0.6, #Niagaraname: Composite.VeloFromBitmaps}
{M.5.0.6, #Legacyname: VeloStrength
{M.5.0.6, #Comment: P.rev.niagara legacy name, Composite.VeloFromTexturesAndDirect}
{M.5.0.6, #Description: 
Adjust velocity coming from Texture inputs.
}


{P.5.0.7, DirectVelocityX, FLOAT, 0, BP-NIA}
{M.5.0.7, #Nesting: /LiveComponent /LiveSimulation}
{M.5.0.7, #Niagaraname: Composite.DirectVelocityX}
{M.5.0.7, #Legacyname: VeloOffsetX
{M.5.0.7, #Description: 
Inject homogenic velocity along the simulation X-axis.
}


{P.5.0.8, DirectVelocityY, FLOAT, 0, BP-NIA}
{M.5.0.8, #Nesting: /LiveComponent /LiveSimulation}
{M.5.0.8, #Niagaraname: Composite.DirectVelocityY}
{M.5.0.8, #Legacyname: VeloOffsetY
{M.5.0.8, #Description: 
Inject homogenic velocity along the simulation Y-axis.
}


{P.5.0.9, DirectVelocityInWorldSpace, BOOL, 0, BP-NIA}
{M.5.0.9, #Nesting: /LiveComponent /LiveSimulation}
{M.5.0.9, #Niagaraname: Composite.DirectVelocityInWorldSpace}
{M.5.0.9, #Description: 
Use World Space axes instead of Local (simulation) Space axes for velocity injection}


{P.5.0.10, DirectVelocityZ, FLOAT, 0, BP-NIA}
{M.5.0.10, #Nesting: /LiveComponent /LiveSimulation}
{M.5.0.10, #Niagaraname: Composite.DirectVelocityZ}
{M.5.0.10, #Description: 
Inject homogenic velocity along the World Z-axis.
}


{P.5.0.11, Divergence, FLOAT, 1, BP-NIA}
{M.5.0.11, #Nesting: /LiveComponent /LiveSimulation}
{M.5.0.11, #Niagaraname: Divergence.DivergenceMult}
{M.5.0.11, #Description: 
Adjust vorticity and turbulence in the 0-1 range.
}


{G.5.1, Bounds}

{P.5.1.1, PressureEdgeMasking, BOOL, 0, BP-NIA}
{M.5.1.1, #Nesting: /LiveComponent /LiveSimulation /Bounds}
{M.5.1.1, #Niagaraname: Pressure.PressureEdgeMasking}
{M.5.1.1, #Comment: in legacy mode use "PressureEdgeMaskingLegacy"}
{M.5.1.1, #Description: 
Gradually fade pressure to zero towards the edges of the "PressureDivergence" simulation buffer. 
We usually do this when driving large areas - like a lake - with this combo: 
(1) local sim + (2) global passive patterns, and we do not want data at the sim buffer edges to "bleed" outside the sim area.
}


{P.5.1.2, PressureEdgeMaskWidth, FLOAT, 0.15, BP-NIA}
{M.5.1.2, #Nesting: /LiveComponent /LiveSimulation /Bounds}
{M.5.1.2, #Niagaraname: Pressure.PressureEdgeMaskWidth}
{M.5.1.2, #Description: 
The width of pressure fadeout zone in local space. Maximal value is 0.5 - the middle of simulation area.
}


{P.5.1.3, PainterEdgeMaskWidth, FLOAT, 0.05, BP-NIA}
{M.5.1.3, #Nesting: /LiveComponent /LiveSimulation /Bounds}
{M.5.1.3, #Niagaraname: Painter.PainterEdgeMaskWidth}
{M.5.1.3, #Description: 
Gradually fade Paint data to zero towards the edges of the Paint Buffer. This param defines the width of fadeout zone in local space. 
Maximal value is 0.5 - the middle of painter area.
}


{P.5.1.4, EdgeMaskWidth, FLOAT, 0.25, BP-NIA}
{M.5.1.4, #Nesting: /LiveComponent /LiveSimulation /Bounds}
{M.5.1.4, #Niagaraname: Composite.EdgeMaskWidth}
{M.5.1.4, #Description: 
Gradually fade simulation Velocity and Density data to zero towards the edges of the simulation buffer. 
This param defines the width of fadeout zone in local space. Maximal value is 0.5 - the middle of simulation area. 
We usually employ edge masking when driving large areas - like a lake - with this combo: 
(1) local sim + (2) global passive patterns, and we do not want data at the sim buffer edges to "bleed" outside the sim area.
}


{P.5.1.5, EdgeMaskPow, FLOAT, 0.2, BP-NIA}
{M.5.1.5, #Nesting: /LiveComponent /LiveSimulation /Bounds}
{M.5.1.5, #Niagaraname: Composite.EdgeMaskPow}
{M.5.1.5, #Description: 
Applying power function on the linear edge-fading gradient.
}


{P.5.1.6, SimEdgeBounciness, FLOAT, 0.5, BP-NIA}
{M.5.1.6, #Nesting: /LiveComponent /LiveSimulation /Bounds}
{M.5.1.6, #Niagaraname: Composite.SimEdgeBouncyness}
{M.5.1.6, #Description: 
We can determine how much the velocity and pressure waves bounce back from the simulation area edge. 
Param works in the 0-1 range, "1" is maximum bounciness. 

IMPORTANT: in case we use Collision Masking, "bounciness" also applies to masked areas! For example, 
we set up a circle shaped pool, also adding the walls as Collision Mask - and our waves will reverberate in the circle, 
bouncing off the walls. 

Collision Masking could be set up two ways: 
(A) Bitmap based Collision Masking: /LiveInputFields /Bitmaps /CollisionMaskFromTexture /CollisionMaskTexture, 
(B) Mesh SDF based collision masking: /LiveInputFields /MeshFields /UseAsCollisionMask.
}


{P.5.1.7, WetMapEdgeMaskWidth, FLOAT, 0.1, BP-NIA}
{M.5.1.7, #Nesting: /LiveComponent /LiveSimulation /Bounds}
{M.5.1.7, #Niagaraname: Composite.WetMapEdgeMaskWidth}
{M.5.1.7, #Description: 
WetMap is accumulated density fading off with a delay - made to imitate wet surfaces slowly drying up. 
WetMap is stored on the ALPHA channel of VelocityDensity simulation buffer. 
This param, specifically is the width of WetMap fadeout zone in local space. Maximal value is 0.5 - the middle of simulation area.
}


{P.5.1.8, SimAreaClamp, BOOL, 1, BP-NIA}
{M.5.1.8, #Nesting: /LiveComponent /LiveSimulation /Bounds}
{M.5.1.8, #Description: 
Using this key parameter we can switch between CLAMPED or WRAPPED UV handling mode for simulation buffers. 

"WRAP" means "Tiling": sim buffer contents are being repeated outside the core 0-1 local UV range. 

Use case 1: mapping the sim on a cylinder or sphere, we want the eliminate edges or seems,
"if a wave goes out of sim area on the left, comes back on the right".  
Use case 2: we can use ninja as pattern generator to create a dynamic, tiled texture for clouds or waves. 

"CLAMP" means the pheripheral values at the sim buffer edges are being repeated outside the sim area. 
To avoid stretching, we use EdgeMasking - fading out the sim buffer content to zero values near the edges. 
See this param: /LiveSimulation /Bounds /EdgeMaskWidth.
}


{P.5.1.9, PaintAreaClamp, BOOL, 1, BPONLY}
{M.5.1.9, #Nesting: /LiveComponent /LiveSimulation /Bounds}
{M.5.1.9, #Description: 
Using this key parameter we can switch between CLAMPED or WRAPPED UV handling mode for the Paint Buffer. 
Learn more by reading the "SimAreaClamp" description.
}


{G.5.2, Advanced}


{P.5.2.1, VeloFromSimAreaMotion, FLOAT, 0, BP-NIA}
{M.5.2.1, #Nesting: /LiveComponent /LiveSimulation /Advanced}
{M.5.2.1, #Niagaraname: Composite.VeloFromSimAreaMotion}
{M.5.2.1, #Description: 
Made to imitate fluid inertia. Inverse moving directional velocity is added to the sim velocity field,
if the sim area is being pushed to the left, a velocity impulse is coming from the right. 

Usecase: simulating small, movable fluid containers, like a cauldron of water being pushed by the player. 

PREREQUISITE: /LiveCore /WorldSpaceOffset /QuantizerStepSize = 0 (No WorldSpaceOffset).
}


{P.5.2.2, WetmapFeedback, FLOAT, 0.93, BP-NIA}
{M.5.2.2, #Nesting: /LiveComponent /LiveSimulation /Advanced}
{M.5.2.2, #Niagaraname: Composite.WetmapFeedback}
{M.5.2.2, #Description: 
Wetmap is simulation density channeled to a feedback loop: past values slowly fading out. 
Made to imitate wet surfaces drying up as the fluid randomly spills over them and retracts, like water on a seashore. 
WetMap is stored on the ALPHA channel of VelocityDensity RGBA Buffer. Higher values like 0.99 result quick drying-up. 
NOT recommended to go below 0.9, to avoid visual glitches. 

NOTE: in order to have our surfaces affected by the wetmap, we need to add this Material Function to our surface material: 
/Content /FluidNinjaLive /OutputMaterials /Base /Functions /MF_WetMapFunction. 

The function also controls surface caustics. See included example materials.
}


{P.5.2.3, PressureFeedback, FLOAT, 1, BP-NIA}
{M.5.2.3, #Nesting: /LiveComponent /LiveSimulation /Advanced}
{M.5.2.3, #Niagaraname: Pressure.PressureFeedback}
{M.5.2.3, #Description: 
Pressure buffer is updated in a feedback loop: new values added on top of existing values. 
This param is influencing how fast past information is fading out in the pressure buffer. 
Lower values might be useful to imitate viscous fluids.
}


{P.5.2.4, DivergenceFeedback, FLOAT, 1, BP-NIA}
{M.5.2.4, #Nesting: /LiveComponent /LiveSimulation /Advanced}
{M.5.2.4, #Niagaraname: Pressure.DivergenceFeedback}
{M.5.2.4, #Description: 
Divergence buffer is updated in a feedback loop: new values added on top of existing values. 
This param is influencing how fast past information is fading out in the divergence buffer.
}


{P.5.2.5, VelocityFeedback, FLOAT, 0.99, BP-NIA}
{M.5.2.5, #Nesting: /LiveComponent /LiveSimulation /Advanced}
{M.5.2.5, #Niagaraname: Composite.VelocityFeedback}
{M.5.2.5, #Description: 
Velocity buffer is updated in a feedback loop: new values added on top of existing values. 
This param is influencing how fast past information is fading out in the velocity buffer. 
Lower values might be useful to imitate viscous fluids.
}


{P.5.2.6, VelocityClamp, FLOAT, 5, BP-NIA}
{M.5.2.6, #Nesting: /LiveComponent /LiveSimulation /Advanced}
{M.5.2.6, #Niagaraname: Composite.VelocityClamp}
{M.5.2.6, #Description: 
Maximum velocity values allowed in the velocity buffer. Above max, values being clamped.
}


{P.5.2.7, KernelIndexOffset, INT, 0, BP-NIA}
{M.5.2.7, #Nesting: /LiveComponent /LiveSimulation /Advanced}
{M.5.2.7, #Niagaraname: Pressure.KernelIndexOffset}
{M.5.2.7, #Description: 
Ninja Pressure Solver uses two kernel types: 
(A) a Gaussian kernel for the feedback blurring of Pressure Buffer and 
(B) a Custom kernel for the blurring of primary raw Divergence data. 

The solver contains six differently sized kernels for both types. The kernel sizes (in texels) are 15, 13, 11, 9, 7, 5.  
The KernelIndexOffset parameter determines which Gaussian kernel we are using, relative to the Custom kernel. 

For example: an index offset value of "-2" results a Gaussian Kernel of size "11", while the Custom kernel remains on 15. 
This param is experimental, allows us to seriously abuse the pressure solver. Lower values might be useful to imitate viscous fluids.
}


{P.5.2.8, KernelMult, FLOAT, 1, BP-NIA}
{M.5.2.8, #Nesting: /LiveComponent /LiveSimulation /Advanced}
{M.5.2.8, #Niagaraname: Pressure.KernelMult}
{M.5.2.8, #Description: 
Ninja Pressure Solver samples the neighbors around a given texel to calculate a weighted average. 
Weighted average is calculated using Kernels. Available kernel sizes are: 15, 13, 11, 9, 7, 5. 
A value of "15" means we are checking a 15x15 area, that is a seven texel neighborhood around a the centroid texel. 
The KernelMult parameter scales the Kernel size - for example, a value of "0.5" reduces kernel size to 7, from 15. 
This param is experimental, allows us to seriously abuse the pressure solver. Lower values might be useful to imitate viscous fluids.
}


{G.5.3, WavesFromLandscapeGradient}


{P.5.3.1, InvertLandscapeGradientUnderClampedHeight, BOOL, 0, BP-NIA}
{M.5.3.1, #Nesting: /LiveComponent /LiveSimulation /WavesFromLandscapeGradient}
{M.5.3.1, #Description: 
Experimental coastal wave generator, with critical prerequisites. If prerequisites can't be met: a simple method is available,
see "simple wavegen" description later in this text block. 

EXPERIMENTAL WAVE GENERATOR: 
(1) Since ninja has the technology to sample Landscape Components and calculate slope normals ("which way is down"), 
we can use it as well to figure out "which way is up"  - and our fake wavegen does exactly this, below the waterline.
(2) Once we have the uphill vectors, we scale them with a sine function of the elevation data. 
As a result, we have pressure and velocity waves attacking "uphill". 

PREREQUISITES: 
(1) Have a Landscape Component below the sim area. 
(2) Landscape should be evenly ascending towards the waterline: having flat landscape under water results zero gradient, no waves. 
(3) LiveComponent /LiveInputFields /HeightFields /EnableHeightField = True, ClampHeightLowerValues = True 
(4) LiveComponent /LiveSimulation /DensityAccumulation > 1   (Wavegen works only with DENSE water setups!)

SIMPLE WAVEGEN METHOD:
Alternative for the experimental method. Define velocity field with a bitmap, at this param group: 
/LiveInputFields /Bitmaps /VelocityFieldFromTexture. 
In the param group, we find params to scale, rotate and dynamically offset the bitmap input - ideally a tiled heterogenic velocity map 
encoding a dominant direction. A drawback of the bitmap method: while we can generate nice waves, they are mono-directional 
(going in a given direction all over the entire water surface) - while the landscape-based method generates waves going towards 
the coast. 

BOTH methods demonstrated on this example level: /Content /FluidNinjaLive /Levels /_Starter /Tutorial03_KeyConcepts.umap /Stage 4.
}


{P.5.3.2, WaveVelocityTowardsTheCoastline, FLOAT, 0.75, BP-NIA}
{M.5.3.2, #Nesting: /LiveComponent /LiveSimulation /WavesFromLandscapeGradient}
{M.5.3.2, #Description: 
The strength of waves going towards the coast. Higher values result more exaggerated waves that also climb higher on the coast. 
Recommended usage: in the 0-4 value range.
}


{P.5.3.3, WaveSpeed, FLOAT, 20, BP-NIA}
{M.5.3.3, #Nesting: /LiveComponent /LiveSimulation /WavesFromLandscapeGradient}
{M.5.3.3, #Description: 
The speed of waves going towards the coast. Higher values result faster waves. 

NOTE: lower values often reduce wave visibility - this should be compensated with higher wave velocity.
}


{P.5.3.4, WaveFrequency, FLOAT, 0.65, BP-NIA}
{M.5.3.4, #Nesting: /LiveComponent /LiveSimulation /WavesFromLandscapeGradient}
{M.5.3.4, #Description: 
Modifies the distance between consecutive waves. Higher values result shorter distance between waves.
}


{P.5.3.5, PhaseShift1, FLOAT, 0.0, BP-NIA}
{M.5.3.5, #Nesting: /LiveComponent /LiveSimulation /WavesFromLandscapeGradient}
{M.5.3.5, #Description: 
By default, waves moving towards the coastline form a frontline. Increasing this value introduces irregularities in the wavefront, 
breaking it up into smaller waves. Sometimes minuscule values will do - like "0.05". 
Sometimes, larger values are needed, like 0.2. Recommended value range: 0-1.
}


{P.5.3.6, PhaseShift2, FLOAT, 0.4, BP-NIA}
{M.5.3.6, #Nesting: /LiveComponent /LiveSimulation /WavesFromLandscapeGradient}
{M.5.3.6, #Description: 
A property of the basic sine wave generator, usually we don't modify it. In case we already set up all other wave parameters 
to the desired values, but still would like to tweak the result, we might want to modify this param a little bit, in the 0-1 range.
}


{G.5.4, Noise}


{P.5.4.1, VeloDirNoise, FLOAT, 0.1, BP-NIA}
{M.5.4.1, #Nesting: /LiveComponent /LiveSimulation /Noise}
{M.5.4.1, #Niagaraname: Composite.VeloDirNoise}
{M.5.4.1, #Description: 
Random directional noise added to the main simulation velocity field. Intended use: add vortices and turbulent details to the fluidsim.
}


{P.5.4.2, VeloDirNoiseSize, FLOAT, 0.4, BP-NIA}
{M.5.4.2, #Nesting: /LiveComponent /LiveSimulation /Noise}
{M.5.4.2, #Niagaraname: Composite.VeloDirNoiseSize}
{M.5.4.2, #Description: 
Scaling the velocity noise-pattern. Larger values result larger vortices.
}


{P.5.4.3, VeloDirNoiseSpeed, FLOAT, 2, BP-NIA}
{M.5.4.3, #Nesting: /LiveComponent /LiveSimulation /Noise}
{M.5.4.3, #Niagaraname: Composite.VeloDirNoiseSpeed}
{M.5.4.3, #Description: 
Dynamically offset (pan) the velocity noise-pattern. Zero means: the noise-pattern is static.
}


{P.5.4.4, MaskDirNoiseWithSimVelocity, FLOAT, 0, BP-NIA}
{M.5.4.4, #Nesting: /LiveComponent /LiveSimulation /Noise}
{M.5.4.4, #Niagaraname: Composite.MaskDirNoiseWithSimVelocity}
{M.5.4.4, #Description: 
Mask velocity noise with the local (per texel) amplitude of the simulation velocity field. 
Velocity is typically larger around moving objects that inject momentum into the sim. 
If noise masking is on (value = 1), we can generate details around moving objects, 
while the rest of the simulation field is undisturbed. Might be useful when imitating viscous fluids.
}


{P.5.4.5, VeloAmplitudeNoiseEnabled, BOOL, 1, BP-NIA}
{M.5.4.5, #Nesting: /LiveComponent /LiveSimulation /Noise}
{M.5.4.5, #Description: 
Random amplitude noise multiplied with the main simulation velocity field. Intended use: 
introduces large scale, weak velocity field fluctuations - making the simulation field less homogenic.
}


{P.5.4.6, VeloAmplitudeNoiseTexture, TEXTURE, T_NoiseTemplate1_128px, BP-NIA}
{M.5.4.5, #Nesting: /LiveComponent /LiveSimulation /Noise}
{M.5.4.5, #Description: 
Grayscale texture for the velocity amplitude noise.
}


{P.5.4.7, VeloAmpNoise, FLOAT, 0.5, BP-NIA}
{M.5.4.7, #Nesting: /LiveComponent /LiveSimulation /Noise}
{M.5.4.7, #Niagaraname: Composite.VeloAmpNoise}
{M.5.4.7, #Description: 
The strength of velocity amplitude noise.
}


{P.5.4.8, VeloAmpNoiseSize, FLOAT, 1, BP-NIA}
{M.5.4.8, #Nesting: /LiveComponent /LiveSimulation /Noise}
{M.5.4.8, #Niagaraname: Composite.VeloAmpNoiseSize}
{M.5.4.8, #Description: 
The tiling of velocity amplitude noise. Larger values result smaller noise-pattern size.
}


{P.5.4.9, VeloAmpNoiseSpeed, FLOAT, 1, BP-NIA}
{M.5.4.9, #Nesting: /LiveComponent /LiveSimulation /Noise}
{M.5.4.9, #Niagaraname: Composite.VeloAmpNoiseSpeed}
{M.5.4.9, #Description: 
Dynamically offset (pan) the velocity amplitude noise-pattern. Zero means: the noise-pattern is static.
}


{P.5.4.10, DensityNoiseEnabled, BOOL, 1, BP-NIA}
{M.5.4.10, #Nesting: /LiveComponent /LiveSimulation /Noise}
{M.5.4.10, #Description: 
Random amplitude noise multiplied with the main simulation density field. Intended use: introduces 
density field fluctuations - making the simulation field less homogenic.
}


{P.5.4.11, DensityNoiseTexture, TEXTURE, T_Noise3_128px, BP-NIA}
{M.5.4.11, #Nesting: /LiveComponent /LiveSimulation /Noise}
{M.5.4.11, #Description: 
Grayscale texture for the density amplitude noise.
}


{P.5.4.12, DensityNoiseAmount, FLOAT, 1, BP-NIA}
{M.5.4.12, #Nesting: /LiveComponent /LiveSimulation /Noise}
{M.5.4.12, #Niagaraname: Composite.DensityNoiseAmount}
{M.5.4.12, #Legacyname: DensityInputNoiseAmp}
{M.5.4.12, #Description: 
The strength of density amplitude noise. 
When used in a value range above 2, the noise visually bites out pieces from the simulation density.
}


{P.5.4.13, DensityNoiseTile, FLOAT, 2, BP-NIA}
{M.5.4.13, #Nesting: /LiveComponent /LiveSimulation /Noise}
{M.5.4.13, #Niagaraname: Composite.DensityNoiseTile}
{M.5.4.13, #Legacyname: DensityInputNoiseTile}
{M.5.4.13, #Description: 
The tiling of density amplitude noise. Larger values result smaller noise-pattern size.
}


{P.5.4.14, DensityNoiseSpeed, FLOAT, 0.05, BP-NIA}
{M.5.4.14, #Nesting: /LiveComponent /LiveSimulation /Noise}
{M.5.4.14, #Niagaraname: Composite.DensityNoiseSpeed}
{M.5.4.14, #Legacyname: DensityInputNoiseOffset}
{M.5.4.14, #Description: 
Dynamically offset (pan) the density amplitude noise-pattern. Zero means: the noise-pattern is static.
}


{P.5.4.15, RandomizeNoiseOffsets, FLOAT, 0, BP-NIA}
{M.5.4.15, #Nesting: /LiveComponent /LiveSimulation /Noise}
{M.5.4.15, #Niagaraname: Composite.RandomizeNoiseOffsets}
{M.5.4.15, #Description: 
In case we have multiple containers placed nearby (besides each other) and would like to avoid visual similarity, 
we can randomize velocity and density noises.
}


{G.6, LiveOutputRenderTargets}
{G.6.0, Root}

{P.6.0.1, EnableOutputPainterElevation, BOOL, 0, BP-NIA}
{M.6.0.1, #Nesting: /LiveComponent /LiveOutputRenderTargets}
{M.6.0.1, #Description: 
Paint Buffer and Elevation data exposed for Output Materials as a RenderTarget. 
Paint Buffer is AUTO enabled, IF SimplePainterMode = True. 
For fluid simulated setups (non-simple painter), we need to MANUALLY enable this in order to expose elevation data. 

RGBA Channels: RED and GREEN channels store paint velocity (negative and positive values), BLUE channel stores paint density, 
ALPHA channel stores elevation of the surface aligned simulation plane (negative and positive values). 
For Dense water setups, fluid depth is added to landscape elevation. 

NOTE: NinjaLive Core Niagara System is using Grids for internal calculations. 
We need RenderTargets in order to expose sim buffers for materials.
}


{P.6.0.2, EnableOutputVelocityDensity, BOOL, 1, BP-NIA}
{M.6.0.3, #Nesting: /LiveComponent /LiveOutputRenderTargets}
{M.6.0.3, #Description: 
Fluid simulation VelocityDensity buffer and Wetmap data exposed for Output Materials as a RenderTarget. 
VelocityDensity Buffer is AUTO disabled, IF SimplePainterMode = True. 

RGBA Channels: RED and GREEN channels store sim velocity (negative and positive values), 
BLUE channel stores sim density, ALPHA channel stores Wetmap. 

Wetmap is simulation density channeled to a feedback loop: past values slowly fading out. 
Made to imitate wet surfaces drying up as the fluid randomly spills over them and retracts, like water on a seashore. 

NOTE: NinjaLive Core Niagara System is using Grids for internal calculations. 
We need RenderTargets in order to expose sim buffers for Materials.
}


{P.6.0.3, EnableOutputPressureDivergence, BOOL, 1, BP-NIA}
{M.6.0.3, #Nesting: /LiveComponent /LiveOutputRenderTargets}
{M.6.0.3, #Description: 
Fluid simulation PressureDivergence buffer exposed for Output Materials as a RenderTarget. 
PressureDivergence Buffer is AUTO disabled, IF SimplePainterMode = True. 
We can optionally DISABLE this output, IF pressure or divergence is NOT used in the Output Material. 

RG Channels: RED stores pressure, GREEN stores divergence (negative and positive values). 

NOTE: NinjaLive Core Niagara System is using Grids for internal calculations. 
We need RenderTargets in order to expose sim buffers for materials.
}


{G.6.1, PaintVelocityDensityAndElevation}


{M.6.1.1, #Nesting: /LiveComponent /LiveOutputRenderTargets /PaintVelocityDensityAndElevation}
{P.6.1.1, RT_Painter, TEXTURE,-, BP-NIA}
{M.6.1.1, #Description: 
A four channel RGBA RenderTarget asset comes here, to hold Painter and Elevation data during the simulation. 

RGBA Channels: RED and GREEN channels store paint velocity (negative and positive values), BLUE channel stores paint density, 
ALPHA channel stores elevation of the surface aligned simulation plane (negative and positive values). 

NOTE: NinjaLive Core Niagara System is using Grids for internal calculations. Materials can not access Grids. 
We need RenderTargets in order to expose sim buffers for materials. Ninja is writing final simulation results to RenderTargets. 
By default, these RenderTargets are dynamically generated and exist only in memory (no on-disk assets). 
Using THIS parameter, we can use on-disk assets (existing RenderTarget assets) to store the output buffers. 
Ninja is writing the RenderTarget every frame. Ninja is RESIZING the RenderTarget to the resolution defined at /LiveCore  /ResolutionX. 

WARNING: make sure that only one ninja is writing a specific RenderTarget at a time.
}


{P.6.1.2, InvertPaintbufferDensity, BOOL, 0, BP-NIA}
{M.6.1.2, #Nesting: /LiveComponent /LiveOutputRenderTargets /PaintVelocityDensityAndElevation}
{M.6.1.2, #Niagaraname: Export.InvertPaintbufferDensity}
{M.6.1.2, #Description: 
Ninja Paint Buffer uses the "black" color for zero density, and "white" for maximum density. 
By setting this bool flag to TRUE, we can invert these grayscale values on export. WHY? 
A special, often used Output Material Function, called Parallax Occlusion Mapping (POM) needs inverted input, 
in case we want to imitate surface impressions with paint density - like footsteps in the sand. 
The inverted paint buffer base value is white, and the paint-marks are black. 
The POM material function makes the paint-marks look like 3D impressions - but it is only a fake method. 
See the sand and snow example levels as practical use cases.
}


{P.6.1.3, ExposeRelativeHeight, BOOL, 1, BP-NIA}
{M.6.1.3, #Nesting: /LiveComponent /LiveOutputRenderTargets /PaintVelocityDensityAndElevation}
{M.6.1.3, #Niagaraname: RVT.ExposeRelativeHeight}
{M.6.1.3, #Description: 
Paint Buffer ALPHA channel stores elevation of the surface aligned simulation plane. 
By default, we are exposing RELATIVE height: null point being the simulation plane, negative values below it, positive values above it. 
By setting this param to FALSE, ninja exposes ABSOLUTE height: the World Z position of the surface aligned simulation plane.
}


{G.6.2, SimVelocityDensityAndWetmap}


{P.6.2.1, RT_VelocityDensity, TEXTURE,-, BP-NIA}
{M.6.2.1, #Nesting: /LiveComponent /LiveOutputRenderTargets /SimVelocityDensityAndWetmap}
{M.6.2.1, #Description: 
A four channel RGBA RenderTarget asset comes here, to hold sim Velocity, Density and Wetmap data during the simulation. 

RGBA Channels: RED and GREEN channels store sim velocity (negative and positive values), BLUE channel stores sim density, 
ALPHA channel stores Wetmap. NOTE: NinjaLive Core Niagara System is using Grids for internal calculations. 
Materials can not access Grids. We need RenderTargets in order to expose sim buffers for materials. 
Ninja is writing final simulation results to RenderTargets. By default, these RenderTargets are dynamically generated 
and exist only in memory (no on-disk assets). Using THIS parameter, we can use on-disk assets (existing RenderTarget assets) 
to store the output buffers. Ninja is writing the RenderTarget every frame. Ninja is RESIZING the RenderTarget to the resolution 
defined at /LiveCore  /ResolutionX. 

WARNING: make sure that only one ninja is writing a specific RenderTarget at a time.
}


{P.6.2.2, InvertFluidDensity, BOOL, 0, BP-NIA}
{M.6.2.2, #Nesting: /LiveComponent /LiveOutputRenderTargets /SimVelocityDensityAndWetmap}
{M.6.2.2, #Niagaraname: Export.InvertFluidDensity}
{M.6.2.2, #Description: 
Ninja simulation density buffer uses the "black" color for zero density, and "white" for maximum density. 
By setting this bool flag to TRUE, we can invert these grayscale values on export. WHY? 
A special, often used Output Material Function, called Parallax Occlusion Mapping (POM) needs inverted input, 
in case we want to imitate surface impressions with simulation density. The inverted sim density buffer base value is white, 
and the paint-marks are black. The POM material function makes the paint-marks look like 3D impressions, 
but it is only a fake method. See the sand and snow example levels as practical use cases.
}


{P.6.2.3, CopyInvertedDensityToAlpha, BOOL, 0, BP-NIA}
{M.6.2.3, #Nesting: /LiveComponent /LiveOutputRenderTargets /SimVelocityDensityAndWetmap}
{M.6.2.3, #Niagaraname: Export.CopyInvertedDensityToAlpha}
{M.6.2.3, #Comment: related param on the material side, InverseDensityOnAlpha}
{M.6.2.3, #Description: 
While some Output Material Functions (like Parallax Occlusion Mapping) require inverted density - other Output Material Functions 
do not. If THIS param is True, we can expose both: default density on BLUE channel, inverted density on ALPHA channel 
(in this case, the VelocityDensity sim buffer's alpha channel will NOT store Wetmap information). 

NOTE: IF InvertPaintbufferDensity = TRUE, here, ninja automatically sets the "InverseDensityOnAlpha" float parameter to "1" 
in the Output Material - so the material will look for inverted density on alpha.
}


{P.6.2.4, FluidDensityContrast, FLOAT, 1, BP-NIA}
{M.6.2.4, #Nesting: /LiveComponent /LiveOutputRenderTargets /SimVelocityDensityAndWetmap}
{M.6.2.4, #Niagaraname: Export.FluidDensityContrast}
{M.6.2.4, #Description: 
Applying a POWER function on the grayscale density data - works like a contrast filter. 
Values above "1" increase contrast, values below "1" decrease contrast.
}


{G.6.3, SimPressureDivergence}


{P.6.3.1, RT_PressureDivergence, TEXTURE,-, BP-NIA}
{M.6.3.1, #Nesting: /LiveComponent /LiveOutputRenderTargets /SimPressureDivergence}
{M.6.3.1, #Description: 
A two channel RG RenderTarget asset comes here, to hold sim Pressure and Divergence data during the simulation. 
RG Channels: RED stores pressure, GREEN stores divergence (negative and positive values). 

NOTE: NinjaLive Core Niagara System is using Grids for internal calculations. Materials can not access Grids. 
We need RenderTargets in order to expose sim buffers for materials. Ninja is writing final simulation results to RenderTargets. 
By default, these RenderTargets are dynamically generated and exist only in memory (no on-disk assets). 
Using THIS parameter, we can use on-disk assets (existing RenderTarget assets) to store the output buffers. 
Ninja is writing the RenderTarget every frame. Ninja is RESIZING the RenderTarget to the resolution defined at /LiveCore  /ResolutionX. 

WARNING: make sure that only one ninja is writing a specific RenderTarget at a time.
}


{P.6.3.2, BufferDownScaleFactor, INT, 2, BP-NIA}
{M.6.3.2, #Nesting: /LiveComponent /LiveOutputRenderTargets /SimPressureDivergence}
{M.6.3.2, #Niagaraname: Pressure.BufferDownScaleFactor}
{M.6.3.2, #Description: 
Internally, the pressure and divergence buffers are the same size as all other buffers, resolution defined at ResolutionX and Y params. 
When exporting PressureDivergence buffer, we are halving the resolution by default, to reduce memory and writing cost. 
We do this, as usually no high resolution data is needed in the Output Materials. 
Set BufferDownScaleFactor = 1 to export using the original resolution.
}


{G.6.4, LegacyExporter}


{P.6.4.1, DrawInternalRenderTargetToExternal, BOOL, 0, BPONLY}
{M.6.4.1, #Nesting: /LiveComponent /LiveOutputRenderTargets /LegacyExporter}
{M.6.4.1, #Description: 
Legacy RenderTarget writing function from NinjaLive version 1.9 - kept for backward compatibility reasons.
}


{P.6.4.2, InternalRenderTargetsToExport ENUM,-, BPONLY}
{M.6.4.2, #Nesting: /LiveComponent /LiveOutputRenderTargets /LegacyExporter}
{M.6.4.2, #Description: 
Legacy function. Select which internal simulation buffers to expose.
}


{P.6.4.3, ExternalRenderTargets ARRAY,-, BPONLY}
{M.6.4.3, #Nesting: /LiveComponent /LiveOutputRenderTargets /LegacyExporter}
{M.6.4.3, #Description: 
Legacy function. Select which on-disk RenderTarget assets to use for the sim buffer export.
}


{G.7, LiveOutputMaterials}


{P.7.1, PrimaryOutputMaterialSelected, INT, 0, BPONLY}
{M.7.1, #Nesting: /LiveComponent /LiveOutputMaterials}
{M.7.1, #Description: 
The INDEX of actually used Output Material in the "PrimaryOutputMaterials" array. 

NOTE: the array can hold any number of materials as a list. Only the indexed material is used IN-GAME, while ninja is running. 
Two reasons for having a list of materials: 

(1) we can test and easily swap material variations during development, 
(2) we can switch between materials IN-GAME, by (A) changing the "PrimaryOutputMaterialSelected" index 
and (B) reinitialize ninja, calling the "RePlay" Function. 

HINT: the Output Material array hard-references material assets and all list elements get included to a packaged build. 
It is recommended to remove unused materials from the array before packaging.
}


{P.7.2, PrimaryOutputMaterials, ARRAY,-, BPONLY}
{M.7.2, #Nesting: /LiveComponent /LiveOutputMaterials}
{M.7.2, #Description: 
An "Output Material" is the final stage of the ninja data processing pipeline, where raw simulation buffers 
(density, velocity, pressure... etc.) are being composited together to give a specific look. The standard set of simulation buffers 
could be used on very different ways: we can create a mesh surface material with pressure driving surface normals, 
to create something that looks like water ripples - and we can create a volumetric material by extruding the 2D simulation density 
into 3D to create a smoke volume. KEY MESSAGE: Output Materials determine how raw simulation data is visualized 
and the systems that visualize the data using Output Materials are like displays. 

HINT 1: the best way to develop new materials is to duplicate an existing Material Instance and start tweaking 
the Material Parameters while the game is running, so we can instantly see the changes. 

HINT 2: Output Materials could be applied to both Internal and External visualization systems. 
For Internal Renderers, see "LiveOutputInternalRenderers" Parameter Group. 
For External Renderers, use the TAG based functions to assign materials to tagged Actors.
}


{P.7.3, Apply1stOutMatToActorsWithTag, NAME, none, BPONLY}
{M.7.3, #Nesting: /LiveComponent /LiveOutputMaterials}
{M.7.3, #Description: 
Output Materials visualize simulation data. We can apply Output Materials to TAGGED Actors. 
We need to TAG a given actor and provide ninja with the tag by using THIS parameter input field. 
Using the TAG, ninja is looking up tagged Actors and applies the Output Material. 
Looking up Actors could happen at (1) ninja init, or (2) later on, by reinitializing ninja (calling the RePlay Function), 
or (3) periodically, by setting RecollectOutputMaterialTargetsDuringGameTime = True. 

NOTE: the process of applying Output Materials to a visualization system is called "DirectDrive". 
Whatever the visualization system is, we can think of it as a DISPLAY. It is NEVER the display that interacts with the world: 
it is always ninja - detecting interactors, running the simulation and generating data for the display systems. 

The two main modes of visualization are (1) Mesh Surfaces and (2) Volumes. 
There are numerous variations for both. The system could be a simple Mesh or a function that generates an array of Meshes, 
or a Volumetric container - like a Fog volume, a Heterogeneous Volume or Cloud Volume.
}


{P.7.4, Apply1stOutMatToComponentsWithTag, NAME, none, BPONLY}
{M.7.4, #Nesting: /LiveComponent /LiveOutputMaterials}
{M.7.4, #Description: 
In case the tagged Actor contains multiple components and we only would like to apply the Output Material 
to a SUBSET of these components (not all components), COMPONENT TAGS could be used. 
So, we use an Actor Tag to look up a given Actor, and Component Tag to pick a specific Component.
}


{P.7.5, SecondaryOutputMaterialSelected, INT, 0, BPONLY}
{M.7.5, #Nesting: /LiveComponent /LiveOutputMaterials}
{M.7.5, #Description: 
The INDEX of actually used Output Material in the "SecondaryOutputMaterials" array. 

NOTE: the array can hold any number of materials as a list. Only the indexed material is used IN-GAME, while ninja is running. 
Two reasons for having a list of materials: 

(1) we can test and easily swap material variations during development, 
(2) we can switch between materials IN-GAME, by (A) changing the "PrimaryOutputMaterialSelected" index and (B) reinitialize ninja, 
calling the "RePlay" Function. 

HINT: the Output Material array hard-references material assets and all list elements get included to a packaged build. 
It is recommended to remove unused materials from the array before packaging.
}


{P.7.6, SecondaryOutputMaterials, ARRAY,-, BPONLY}
{M.7.6, #Nesting: /LiveComponent /LiveOutputMaterials}
{M.7.6, #Description: 
An "Output Material" is the final stage of the ninja data processing pipeline, where raw simulation buffers 
(density, velocity, pressure... etc.) are being composited together to give a specific look. The standard set of simulation buffers 
could be used on very different ways: we can create a mesh surface material with pressure driving surface normals, 
to create something that looks like water ripples - and we can create a volumetric material by extruding the 2D simulation density 
into 3D to create a smoke volume. KEY MESSAGE: Output Materials determine how raw simulation data is visualized 
and the systems that visualize the data using Output Materials are like displays. 

HINT 1: the best way to develop new materials is to duplicate an existing Material Instance and start tweaking the 
Material Parameters while the game is running, so we can instantly see the changes. 

HINT 2: Output Materials could be applied to both Internal and External visualization systems. 
For Internal Renderers, see "LiveOutputInternalRenderers" Parameter Group. 
For External Renderers, use the TAG based functions to assign materials to tagged Actors.
}


{P.7.7, Apply2ndOutMatToActorsWithTag, NAME, none, BPONLY}
{M.7.7, #Nesting: /LiveComponent /LiveOutputMaterials}
{M.7.7, #Description: 
Output Materials visualize simulation data. We can apply Output Materials to TAGGED Actors. 
We need to TAG a given actor and provide ninja with the tag by using THIS parameter input field. 
Using the TAG, ninja is looking up tagged Actors and applies the Output Material. 
Looking up Actors could happen at (1) ninja init, or (2) later on, by reinitializing ninja (calling the RePlay Function), or (3) periodically, 
by setting RecollectOutputMaterialTargetsDuringGameTime = True. 

NOTE: the process of applying Output Materials to a visualization system is called "DirectDrive". 
Whatever the visualization system is, we can think of it as a DISPLAY. 

It is NEVER the display that interacts with the world: it is always ninja - detecting interactors, running the simulation 
and generating data for the display systems. The two main modes of visualization are (1) Mesh Surfaces and (2) Volumes. 
There are numerous variations for both. The system could be a simple Mesh or a function that generates an array of Meshes, 
or a Volumetric container - like a Fog volume, a Heterogeneous Volume or Cloud Volume.
}


{P.7.8, Apply2ndOutMatToComponentsWithTag, NAME, none, BPONLY}
{M.7.8, #Nesting: /LiveComponent /LiveOutputMaterials}
{M.7.8, #Description: 
In case the tagged Actor contains multiple components and we only would like to apply the Output Material to a SUBSET 
of these components (not all components), COMPONENT TAGS could be used. So, we use an Actor Tag to look up a given Actor 
and Component Tag to pick a specific Component.
}


{P.7.9, TertiaryOutputMaterialSelected, INT, 0, BPONLY}
{M.7.9, #Nesting: /LiveComponent /LiveOutputMaterials}
{M.7.9, #Description: 
The INDEX of actually used Output Material in the "TertiaryOutputMaterials" array. 

NOTE: the array can hold any number of materials as a list. Only the indexed material is used IN-GAME, while ninja is running. 
Two reasons for having a list of materials: 

(1) we can test and easily swap material variations during development, 
(2) we can switch between materials IN-GAME, by (A) changing the "PrimaryOutputMaterialSelected" index and (B) reinitialize ninja, 
calling the "RePlay" Function. 

HINT: the Output Material array hard-references material assets and all list elements get included 
to a packaged build. It is recommended to remove unused materials from the array before packaging.
}


{P.7.10, TertiaryOutputMaterials, ARRAY,-, BPONLY}
{M.7.10, #Nesting: /LiveComponent /LiveOutputMaterials}
{M.7.10, #Description: 
An "Output Material" is the final stage of the ninja data processing pipeline, where raw simulation buffers (density, velocity, pressure... etc.) are being composited together to give a specific look. The standard set of simulation buffers could be used on very different ways: we can create a mesh surface material with pressure driving surface normals, to create something that looks like water ripples - and we can create a volumetric material by extruding the 2D simulation density into 3D to create a smoke volume. KEY MESSAGE: Output Materials determine how raw simulation data is visualized - and the systems that visualize the data using Output Materials are like displays. HINT 1: the best way to develop new materials is to duplicate an existing Material Instance and start tweaking the Material Parameters while the game is running, so we can instantly see the changes. HINT 2: Output Materials could be applied to both Internal and External visualization systems. For Internal Renderers, see "LiveOutputInternalRenderers" Parameter Group. For External Renderers, use the TAG based functions to assign materials to tagged Actors.
}


{P.7.11, Apply3rdOutMatToActorsWithTag, NAME, none, BPONLY}
{M.7.11, #Nesting: /LiveComponent /LiveOutputMaterials}
{M.7.11, #Description: 
Output Materials visualize simulation data. We can apply Output Materials to TAGGED Actors. 
We need to TAG a given actor and provide ninja with the tag by using THIS parameter input field. 
Using the TAG, ninja is looking up tagged Actors and applies the Output Material. 

Looking up Actors could happen at (1) ninja init, or (2) later on, by reinitializing ninja (calling the RePlay Function), or (3) periodically, 
by setting RecollectOutputMaterialTargetsDuringGameTime = True. NOTE: the process of applying Output Materials to a visualization 
system is called "DirectDrive". Whatever the visualization system is, we can think of it as a DISPLAY. 

It is NEVER the display that interacts with the world: it is always ninja - detecting interactors, running the simulation 
and generating data for the display systems. The two main modes of visualization are (1) Mesh Surfaces and (2) Volumes. 
There are numerous variations for both. The system could be a simple Mesh or a function that generates an array of Meshes, 
or a Volumetric container - like a Fog volume, a Heterogeneous Volume or Cloud Volume.
}


{P.7.12, Apply3rdOutMatToComponentsWithTag, NAME, none, BPONLY}
{M.7.12, #Nesting: /LiveComponent /LiveOutputMaterials}
{M.7.12, #Description: 
In case the tagged Actor contains multiple components and we only would like to apply the Output Material 
to a SUBSET of these components (not all components), COMPONENT TAGS could be used. 
So, we use an Actor Tag to look up a given Actor, and Component Tag to pick a specific Component.
}


{P.7.13, RecollectOutputMaterialTargetsDuringGameTime, BOOL, 0, BPONLY}
{M.7.13, #Nesting: /LiveComponent /LiveOutputMaterials}
{M.7.13, #Description: 
By default, ninja is collecting tagged Actors ONCE, at initialization. By setting this bool switch to TRUE, 
we can force ninja to periodically recollect tagged Actors during gameplay and apply Output Materials to them. 
This might be useful to pick up Actors spawned after game start, or Actors loaded by the level streaming system after game start. 

NOTE: an alternative solution to perform a one-time (non-periodical) Actor recollection IN-GAME is to reinitialize ninja 
by calling the RePlay Function in LiveComponent.
}


{P.7.14, RecollectFrequency, FLOAT, 1, BPONLY}
{M.7.14, #Nesting: /LiveComponent /LiveOutputMaterials}
{M.7.14, #Description: 
Ninja can recollect tagged Actors (and apply an Output Material to them) periodically. 
Recollection frequency is defined by this parameter, in seconds. "1" means: once in every second.
}


{G.8, LiveOutputParams}


{M.8.1, #Nesting: /LiveComponent /LiveOutputParams}
{P.8.1, SetInternalParamsToMaterialParamCollection, MPCASSET,-, BPONLY}
{M.8.1, #Description: 
Using this method, ninja writes the value of critical parameters to an on-disk Material Parameter Collection asset, every frame. 
Recommended asset: /Content /FluidNinjaLive /OutputMaterials /MP_NinjaMaterialParamCollection01. 

The param collection could be read by materials. The exposed params are: (A) TraceMeshPos (vector), (B) TraceMeshPosLWCOffset 
(vector), (C) TraceMeshSize (vector), (D) ClampingValue (float). Params "A" and "B" are used in the material to reconstruct 
the LWC position of the simulation in World Space. "C" is sim extents (XYZ) in meters. "D" is waterline altitude (Z position) 
in world space. 

EXPLAINER: why should we use param collections? By default, ninja is creating Dynamic Output Material Instances (MIDs) 
and applies these to external Actors. If ninja is updating param values in MIDs, all systems using the MIDs automatically 
receive the updated param values. BUT, there are cases, when ninja can not apply MIDs to a given system. 
For example, Landscape Components create their own MIDs. Solution: use a landscape material that gets the needed dynamic 
parameters from a Material Parameter Collection. 

NOTE 1: in the included example materials, there is a specific bool switch that forces the material to use Material Param Collections 
as param source: "MaterialParamCollectionAsInput". 

NOTE 2: in some cases, we also need to use on-disk RenderTarget assets to expose sim buffers for materials. 
This is doable: ninja can expose sim buffers to on-disk RenderTargets, see "LiveOutputRenderTargets" parameter group.
}


{P.8.2, ResolveCompetitionWithExternalUtilities, BOOL, 0, BPONLY}
{M.8.2, #Nesting: /LiveComponent /LiveOutputParams}
{M.8.2, #Description: 
This function is a workaround for an Unreal Engine bug. The bug appears in a few, special cases, 
when (1) we have more than one ninja on level, and (2) we reinitialize them during gameplay, 
and (3) all of them is set up to drive landscape components. 

DETAILS: we are using the "OptionalUtilityBlueprint" User Parameter in NinjaLiveCore Niagara System, 
to forward CURRENT FRAME sim position data to external systems - for example "DriveExternalSystemsWithSimData" blueprint, 
responsible to drive Landscape-Surface Materials. Unreal bug: if we reinitialize a specific Ninja actor during gameplay, 
it seems to take-over (snatch) the "OptionalUtilityBlueprint" User Parameter from all running external systems bind 
with other ninja actors... unless we feed the variable with empty object at init.
}


{G.9, LiveOutputExternalRenderers}


{P.9.1, DriveNiagaraComponentInTaggedActors, NAME, none, BPONLY}
{M.9.1, #Nesting: /LiveComponent /LiveOutputExternalRenderers}
{M.9.1, #Description: 
NinjaLive Component can directly drive Niagara Systems, exposing sim buffers, numeric parameters or even materials 
to the Niagara System. Technically, Niagara Systems always appear on levels as Actor Components - so we can call them 
Niagara Components. IF the Niagara Component, that we would like to drive, resides in the SAME owner actor, 
where NinjaLive Component is hosted: we have nothing to do - NinjaLive Component automatically looks up 
all Niagara Components of the owner Actor, and tries to feed them with params. 
IF the Niagara Component, that we would like to drive, resides in ANOTHER owner actor (not the one, that hosts NinjaLive Component)
we need to TAG the owner Actor of the Niagara Component - and provide ninja with the tag here, in THIS input field 
in order to expose params for the Niagara Component. Specific details on the exposed data: 

(1) Niagara TextureSample interface is provided with VelocityDensity sim buffer as TEXTURE OBJECT user parameter, 
using the "NinjaVelocityDensityBuffer" Override Name. The same applies to PressureDivergence sim buffer, and Paint Buffer 
exposed as "NinjaPressureDivergenceBuffer" and "NinjaPaintBuffer". 

(2) Ninja Sim POSITION and EXTENTS are forwarded as VECTOR PARAMETERS, 
using the "TraceMeshPos" and "TraceMeshSize" User Parameter Names. 

(3) by using the "ExposeOutputMaterial..." functions, listed in the "LiveOutputExternalRenderers" parameter group, 
we can also send Material Instances to Niagara, as MATERIAL VARIABLE type User Parameters. 

Learn more about the exposed parameters by looking up MODULE023 in NinjaLive Component Blueprint.
}


{P.9.2, ExposeOutputMaterialToSurfaceAlignedNiagaraMeshes, BOOL, 0, BPONLY}
{M.9.2, #Nesting: /LiveComponent /LiveOutputExternalRenderers}
{M.9.2, #Description: 
Enforce user defined material on tagged, "SurfaceAlignedMeshes" type Niagara Systems.
}


{P.9.3, MeshMaterial, ENUM, 1, BPONLY}
{M.9.3, #Nesting: /LiveComponent /LiveOutputExternalRenderers}
{M.9.3, #Comment: UseOutputMaterial 0=Primary, 1=secondary, 2=tertiary}
{M.9.3, #Description: 
To visualize sim output, we can utilize External Renderers, like the "SurfaceAlignedMeshes" Niagara System, located at: 
/Content/FluidNinjaLive/OutputNiagara. 

"SurfaceAlignedMeshes" could be used to generate GPU mesh arrays - perfect for ocean surface meshing - and it could 
also randomize mesh rotation and placement - perfect for foliage, like grass clumps. 
While we can assign a material to our GPU meshes at the Actor Details Panel of "SurfaceAlignedMeshes"... we can also define 
a Material Instance on the Ninja side, using THIS parameter - and ninja enforces material usage in the Niagara System. 

NOTE: ninja looks up target niagara systems using TAGS, defined at the "DriveNiagaraComponentInTaggedActors" parameter.
}


{P.9.4, ExposeOutputMaterialToSurfaceAlignedNiagaraFVOL, BOOL, 0, BPONLY}
{M.9.4, #Nesting: /LiveComponent /LiveOutputExternalRenderers}
{M.9.4, #Description: 
Enforce user defined "Fog Volume" type material on tagged, "SurfaceAlignedVolumes" type Niagara Systems.
}


{P.9.5, FVOLMaterial, ENUM, 1, BPONLY}
{M.9.5, #Nesting: /LiveComponent /LiveOutputExternalRenderers}
{M.9.5, #Comment: UseOutputMaterial 0=Primary, 1=secondary, 2=tertiary}
{M.9.5, #Description: 
To visualize sim output, we can utilize External Renderers, like the "SurfaceAlignedVolumes" Niagara System, located at: 
/Content/FluidNinjaLive/OutputNiagara. 

"SurfaceAlignedVolumes" could be used to generate landscape aligned Fog Volumes and Heterogeneous Volumes. 
While we can assign a material to our Volumes at the Actor Details Panel of "SurfaceAlignedVolumes"... 
we can also define a Material Instance on the Ninja side, using THIS parameter - and ninja enforces material usage 
in the Niagara System. 

NOTE: ninja looks up target niagara systems using TAGS, defined at the "DriveNiagaraComponentInTaggedActors" parameter.
}


{P.9.6, ExposeOutputMaterialToSurfaceAlignedNiagaraHVOL, BOOL, 0, BPONLY}
{M.9.6, #Nesting: /LiveComponent /LiveOutputExternalRenderers}
{M.9.6, #Description: 
Enforce user defined "Heterogeneous Volume" type material on tagged, "SurfaceAlignedVolumes" type Niagara Systems.
}


{P.9.7, HVOLMaterial, ENUM, 1, BPONLY}
{M.9.7, #Nesting: /LiveComponent /LiveOutputExternalRenderers}
{M.9.7, #Comment: UseOutputMaterial 0=Primary, 1=secondary, 2=tertiary}
{M.9.7, #Description: 
To visualize sim output, we can utilize External Renderers, like the "SurfaceAlignedVolumes" Niagara System, located at: 
/Content/FluidNinjaLive/OutputNiagara. 

"SurfaceAlignedVolumes" could be used to generate landscape aligned Fog Volumes and Heterogeneous Volumes. 
While we can assign a material to our Volumes at the Actor Details Panel of "SurfaceAlignedVolumes"... we can also define 
a Material Instance on the Ninja side, using THIS parameter - and ninja enforces material usage in the Niagara System. 

NOTE: ninja looks up target niagara systems using TAGS, defined at the "DriveNiagaraComponentInTaggedActors" parameter.
}


{G.10, LiveOutputInternalRenderers}
{G.10.1, Mesh}


{P.10.1.1, ForceHideVisualizationMesh, BOOL, 0, BP-NIA}
{M.10.1.1, #Nesting: /LiveComponent /LiveOutputInternalRenderers /Mesh}
{M.10.1.1, #Niagaraname: ShowVisualizationMesh}
{M.10.1.1, #Comment: bool value should be inverted}
{M.10.1.1, #Description: 
Visualization Mesh is a simple planar mesh, that could be used for debugging and for final visualization of local, 
small scale effects - like a torch, puddle or waterfall. IF ForceHideVisualizationMesh = True, the Visualization Mesh is surely hidden.
}


{P.10.1.2, AutoHideVMeshIfExternalVMeshUsed, BOOL, 1, BPONLY}
{M.10.1.2, #Nesting: /LiveComponent /LiveOutputInternalRenderers /Mesh}
{M.10.1.2, #Description: 
This function CONDITIONALLY hides the Visualization Mesh. We are checking all TAG INPUT FIELDS at 
/LiveComponent /LiveOutputMaterials. IF tags are used, we assume Direct Drive is active and an EXTERNAL RENDERER is used 
to visualize sim data. In this case, we automatically hide the INTERNAL RENDERER Visualization Mesh. 

IF no tags used: we assume the internal mesh is needed to visualize sim data - so we do not hide it, unless explicitely forced 
to do so, using the "ForceHideVisualizationMesh" BOOL flag. NOTE: if both "AutoHideVMeshIfExternalVMeshUsed" and 
"ForceHideVisualizationMesh" are set to FALSE: the Visualization Mesh is surely visible.
}


{P.10.1.3, VMeshOutputMaterialUsage, ENUM, 0, BPONLY}
{M.10.1.3, #Nesting: /LiveComponent /LiveOutputInternalRenderers /Mesh}
{M.10.1.3, #Comment: UseOutputMaterial 0=Primary, 1=secondary, 2=tertiary}
{M.10.1.3, #Description: 
Visualization Mesh is a simple planar mesh. Size, rotation and position is matching the simulation area. 
Could be used for debugging and developing effects - and of course, for final visualization of local, small scale effects,
like a torch, puddle or waterfall. For debugging we usually assign a "buffer visualization" material to the mesh, 
located in this folder: /Content /FluidNinjaLive /OutputMaterials /Surface_Various /BufferVisualize. 
For proper IN-GAME VFX, we could assign any non-volumetric material from the "OutputMaterials" folder, depending on the use case. 

NOTE 1: the default planar mesh could be replaced with a user defined mesh, see "VisualizationMesh" param. 
NOTE 2: Visualization Mesh is like a display - receiving data from ninja core and it has nothing to do with interaction.
}


{P.10.1.4, VisualizationMesh, MESH, DefaultVisualizationMesh, BP-NIA}
{M.10.1.4, #Nesting: /LiveComponent /LiveOutputInternalRenderers /Mesh}
{M.10.1.4, #Description: 
Visualization Mesh is a simple planar mesh, that could be used for debugging and for final visualization of local, small scale effects, 
like a torch, puddle or waterfall. Using THIS param, we can REPLACE the default planar mesh with any other mesh, 
like a bended plane for a waterfall. 

NOTE 1: Visualization Mesh is like a display - receiving data from ninja core and it has nothing to do with interaction. 
NOTE 2: the default Visualization Mesh is a 1 x 1 x 0 meter flat plane. Ninja scales this mesh to sim area size by multiplying 
the Mesh "Scale" Transform with simulation ExtentsXYZ. In case we replace the default mesh: it is recommended to use 
a similarly scaled mesh, that fits a 1x1x1 meter bounding box. 

WARNING: ninja is a 2D sim and the 2D simulation buffers, by default, are being mapped on the Visualization Mesh 
using the LOCAL UV SPACE OF THE MESH. Ideally, the UV-poligons are forming a single UV-island, evenly filling 
the rectangular 0-1 UV space. Having multiple UV islands, or UV islands that are rotated or scaled differently in order 
to optimally fill the UV space is not recommended - definitely causing visual glitches.
}


{P.10.1.5, PreferWorldSpaceInMeshMaterial, BOOL, 0, BP-NIA}
{M.10.1.5, #Nesting: /LiveComponent /LiveOutputInternalRenderers /Mesh}
{M.10.1.5, #Description: 
By default, ninja simulation buffers are being mapped on the Visualization Mesh using the LOCAL UV SPACE OF THE MESH. 
Using this bool flag, we can switch to WORLD SPACE mapping.
}


{G.10.2, HVolume}


{P.10.2.1, HVolumeRender, BOOL, 0, BP-NIA}
{M.10.2.1, #Nesting: /LiveComponent /LiveOutputInternalRenderers /HVolume}
{M.10.2.1, #Niagaraname: VolumeRender}
{M.10.2.1, #Description: 
We can display simulation output using Internal Renderers: these are visualization systems built into Live Component, 
their state is Preset managed. HVOL or HVolume stands for "Heterogeneous Volume". 
HVOL is a native Unreal Engine volumetric shader supporting self shadows, multiple light sources and low latency. 
Detailed and computationally heavy: optimal for single, small volumes, close to the camera,
like explosions, dust puffs around the player feet, smoke for a bonfire. 

HVOL is NOT recommended for large scale effects in the far background, like Clouds For this usage, see CVOL, Cloud Volumes. 
Also, HVOL is NOT recommended for immersive full screen effects like a Fog that completely surrounds the player while filling 
the entire screen - for this usage see FVOL, Fog Volumes. 

WARNING: LiveComponent Internal HVOL Renderer can not be used for large scale environmental effects, 
as the volume size is limited to sim area size. There is a different workflow for large scale effects: using EXTERNAL RENDERERS, 
where ninja controls a small responsive area around the player, while the rest of the space is populated by passive (non-interactive) 
patterns. A dedicated External Renderer utility for large scale, landscape aligned volumetrics: 
/Content /FluidNinjaLive /OutputNiagara /SurfaceAlignedVolumes Niagara System.
}


{P.10.2.2, HVolumeExtentsZ, FLOAT, 10 , BP-NIA}
{M.10.2.2, #Nesting: /LiveComponent /LiveOutputInternalRenderers /HVolume}
{M.10.2.2, #Niagaraname: VolumeRenderingExtentsZ}
{M.10.2.2, #Description: 
HVOL or HVolume stands for "Heterogeneous Volume". The "HVolumeExtentsZ" param defines the HEIGHT (tallness, Z-extent) 
of internally rendered HVolumes, in meters. The XY size of HVolumes comes from the X and Y parts of the "ExtentsXYZ" parameter 
at the LiveCore param group. The reason we do NOT use the Z part of "ExtentsXYZ" for HVolumes: 
it is reserved for Component Interaction Volume (a filter for interacting objects).
}


{P.10.2.3, HVolumeOutputMaterialUsage, ENUM, 1, BPONLY}
{M.10.2.3, #Nesting: /LiveComponent /LiveOutputInternalRenderers /HVolume}
{M.10.2.3, #Niagaraname: VolumeMaterial}
{M.10.2.3, #Description: 
HVOL or HVolume stands for "Heterogeneous Volume". HVOL requires an Output Material that is specially prepared for this usage, 
see examples in this folder: /Content /FluidNinjaLive /OutputMaterials /HVOLniagara. 

All HVOL compatible Output Materials use similar naming convention, starting the material name with this character sequence: MI_HVOL.
}


{P.10.2.4, HVolumeResolution, INT, 256, BP-NIA}
{M.10.2.4, #Nesting: /LiveComponent /LiveOutputInternalRenderers /HVolume}
{M.10.2.4, #Niagaraname: VolumeResolution}
{M.10.2.4, #Description: 
HVOL or HVolume stands for "Heterogeneous Volume". THIS param defines the voxel resolution of the HVolume along the X and Y axes. 
Recommended value range is between 128 and 1024. HVolume Z resolution is by default forced to 256, by this console variable (CVAR)
"r.HeterogeneousVolumes.VolumeResolution.Z 256" executed at system init, defined at this param group: /LiveCore /CVAR /ExecuteCommandsAtStart. 
So, by setting the "HVolumeResolution" to 512, we define a 512 x 512 x 256 voxel array for the HVOL Renderer. 

NOTE: other key HVOL properties are also defined using CVARs, at the same parameter group under LiveCore.
}


{G.10.3, SVolume}


{P.10.3.1, SVolumeRender, BOOL, 0, BPONLY}
{M.10.3.1, #Nesting: /LiveComponent /LiveOutputInternalRenderers /SVolume}
{M.10.3.1, #Description: 
We can display simulation output using Internal Renderers: these are visualization systems built into Live Component, 
their state is Preset managed. SVOL or SVolume stands for "Smoke Volume". SVOL is a custom ninja volumetric shader supporting 
self shadows - but only a single point or directional light source. Detailed, but computationally scalable: 
supports UNLIT rendering mode, which performs really good. Optimal for single, small volumes, close to the camera, 
like explosions, dust puffs around the player feet, smoke for a bonfire. 

SVOL is NOT recommended for large scale effects in the far background, like Clouds For this usage, see CVOL, Cloud Volumes. 
Also, SVOL is NOT recommended for immersive full screen effects like a Fog that completely surrounds the player while filling 
the entire screen - for this usage see FVOL, Fog Volumes.
}


{P.10.3.2, SVolumeOutputMaterialUsage, ENUM, 1, BPONLY}
{M.10.3.2, #Nesting: /LiveComponent /LiveOutputInternalRenderers /SVolume}
{M.10.3.2, #Description: 
SVOL or SVolume stands for "Smoke Volume". SVOL requires an Output Material that is specially prepared for this usage, 
see examples in this folder: /Content /FluidNinjaLive /OutputMaterials /SVOL. 

All SVOL compatible Output Materials use similar naming convention, 
starting the material name with this character sequence: MI_SVOL.
}


{P.10.3.3, SVolumeAnchor, BOOL, 0 BPONLY}
{M.10.3.3, #Nesting: /LiveComponent /LiveOutputInternalRenderers /SVolume}
{M.10.3.3, #Description: 
If TRUE, the Smoke Volume Position is locked in space, ignoring transforms coming from the Parent Actor.
}


{P.10.3.4, SVolumeLockRotation, BOOL, 0, BPONLY}
{M.10.3.4, #Nesting: /LiveComponent /LiveOutputInternalRenderers /SVolume}
{M.10.3.4, #Description: 
If TRUE, Smoke Volume Rotation is locked, ignoring transforms coming from the Parent Actor.
}


{P.10.3.5, SVolumePositionOffset, VEC, (0,0,0), BPONLY}
{M.10.3.5, #Nesting: /LiveComponent /LiveOutputInternalRenderers /SVolume}
{M.10.3.5, #Description: 
We can offset the Smoke Volume in World Space using THIS parameter.
}


{P.10.3.6, SVolumeTranslucentSortPriority, INT, -1, BPONLY}
{M.10.3.6, #Nesting: /LiveComponent /LiveOutputInternalRenderers /SVolume}
{M.10.3.6, #Description: 
Smoke Volumes are rendered in the Translucent Pass, on a Camera Facing plane. 
We can define the Translucent Sort Priority of the plane geometry using THIS parameter.
}


{P.10.3.7, SVolumeTrackThisActorAsPointLight, ACTOR,-, BPONLY}
{M.10.3.7, #Nesting: /LiveComponent /LiveOutputInternalRenderers /SVolume}
{M.10.3.7, #Description: 
Smoke Volumes support lighting and self shadows from a SINGLE light source. 
We can switch between DIRECTIONAL Light or POINT Light in the SVOL Output Material. 
In case we pick Point Light: we need to define an Actor (any actor) using THIS parameter. 
In case we pick Directional Light: the material automatically uses the Level Main Light.
}


{G.10.4, FVolume}


{P.10.4.1, FVolumeRender, BOOL, 0, BP-NIA} geci
{M.10.4.1, #Nesting: /LiveComponent /LiveOutputInternalRenderers /FVolume}
{M.10.4.1, #Niagaraname: FogVolumeRender}
{M.10.4.1, #Description: 
We can display simulation output using Internal Renderers: these are visualization systems built into Live Component, 
their state is Preset managed. FVOL or FVolume stands for "Fog Volume". FVOL is a native Unreal Engine volumetric shader 
supporting multiple light sources. Self shadows not supported, latency is high, resolution is low. 

Resolution could be adjusted using this console variable (CVAR): "r.volumetricfog.gridpixelsize" and we are enforcing 
a resolution of "5" by executing the CVAR at system init. CVAR execution is defined at this parameter group: 
/LiveCore /CVAR /ExecuteCommandsAtStart. 

Fog Volumes are computationally lightweight: optimal for small volumes where quick response (low latency) is not needed, 
like a circle of low-lying fog around an altair. Fog Volume is MOST RECOMMENDED for large scale effects, like low-lying fog 
above the meadows, stretching over a long distance. 

WARNING: LiveComponent Internal FVOL Renderer can not be effectively used for large scale environmental effects, 
as the volume size is limited to sim area size. There is a different workflow for large scale effects: using EXTERNAL RENDERERS, 
where ninja controls a small responsive area around the player, while the rest of the space is populated by passive (non-interactive) 
patterns. A dedicated External Renderer utility for large scale, landscape aligned volumetrics: 
/Content /FluidNinjaLive /OutputNiagara /SurfaceAlignedVolumes Niagara System. 

This LEVEL is demonstrating the usage of SurfaceAlignedVolumes utility: /Content /FluidNinjaLive /Levels /Fog_Mist.umap.
}


{P.10.4.2, FVolumeExtentsZ, FLOAT, 10, BP-NIA}
{M.10.4.2, #Nesting: /LiveComponent /LiveOutputInternalRenderers /FVolume}
{M.10.4.2, #Niagaraname: FogVolumeRenderingExtentsZ}
{M.10.4.2, #Description: 
FVOL or FVolume stands for "Fog Volume". The "FVolumeExtentsZ" param defines the HEIGHT (tallness, Z-extent) 
of internally rendered FVolumes, in meters. The XY size of FVolumes comes from the X and Y parts of the "ExtentsXYZ" parameter 
at the LiveCore param group. The reason we do NOT use the Z part of "ExtentsXYZ" for fVolumes: 
it is reserved for Component Interaction Volume (a filter for interacting objects).
}


{P.10.4.3, FVolumeOutputMaterialUsage, ENUM, 1, BPONLY}
{M.10.4.3, #Nesting: /LiveComponent /LiveOutputInternalRenderers /FVolume}
{M.10.4.3, #Niagaraname: FogVolumeMaterial}
{M.10.4.3, #Description: 
FVOL or FVolume stands for "Fog Volume". FVOL requires an Output Material that is specially prepared for this usage, 
see examples in this folder: /Content /FluidNinjaLive /OutputMaterials /FVOLniagara. 

All FVOL compatible Output Materials use similar naming convention, starting material name with this character sequence: MI_FVOL.
}


{G.11, LiveLegacy}
{G.11.0, Root}


{P.11.0.1, GlobalBrushScale, FLOAT, 1, BPONLY}
{M.11.0.1, #Nesting: /LiveComponent /LiveLegacy}
{M.11.0.1, #Description: 
Legacy param, kept for backward compatibility reasons - needed to convert LIVE-1 setups to LIVE-2 setups.
}


{P.11.0.2, AllowAbsoluteBlackDensity, BOOL, 0, BPONLY}
{M.11.0.2, #Nesting: /LiveComponent /LiveLegacy}
{M.11.0.2, #Description: 
Legacy param, kept for backward compatibility reasons - needed to convert LIVE-1 setups to LIVE-2 setups.
}


{P.11.0.3, InputRenderTarget, TEXTURE,-, BPONLY}
{M.11.0.3, #Nesting: /LiveComponent /LiveLegacy}
{M.11.0.3, #Description: 
Legacy param, kept for backward compatibility reasons - needed to convert LIVE-1 setups to LIVE-2 setups.
}


{P.11.0.4, TraceMeshTranslucentSortPrio, INT, 0, BPONLY}
{M.11.0.4, #Nesting: /LiveComponent /LiveLegacy}
{M.11.0.4, #Description: 
Legacy param, kept for backward compatibility reasons - needed to convert LIVE-1 setups to LIVE-2 setups.
}


{P.11.0.5, PressureEdgeMaskingLegacy, FLOAT, 0, BPONLY}
{M.11.0.5, #Nesting: /LiveComponent /LiveLegacy}
{M.11.0.5, #Description: 
Legacy param, kept for backward compatibility reasons - needed to convert LIVE-1 setups to LIVE-2 setups.
}


{G.11.1, RayMarching}


{P.11.1.1, EnableRayMarching, BOOL, 0, BPONLY}
{M.11.1.1, #Nesting: /LiveComponent /LiveLegacy /RayMarching}
{M.11.1.1, #Description: 
Before true 3D volumetrics was introduced, ninja LIVE-1 supported a fake method, based on Parallax Occlusion Mapping (POM) 
and 2D Raymarching. Both functions are executed in the Output Material. The legacy raymarcher needs a spatial point 
to shoot the rays from. We can track any actor as "lightsource".
}


{P.11.1.2, LightDirectionProvider, ACTOR,-, BPONLY}
{M.11.1.2, #Nesting: /LiveComponent /LiveLegacy /RayMarching}
{M.11.1.2, #Description: 
The legacy raymarcher needs a spatial point to shoot the rays from. We can track any actor as "light source". 
We can pick an Actor here, using THIS parameter. NinjaLive Blueprint is going to track the actor, and forward 
the Position data to the Output Material.
}


{P.11.1.3, LightDirectionSourceIsRotation_NOT_Pos, BOOL, 1, BPONLY}
{M.11.1.3, #Nesting: /LiveComponent /LiveLegacy /RayMarching}
{M.11.1.3, #Description: -}


{P.11.1.4, DistanceBasedLightAttenuation, BOOL, 0, BPONLY}
{M.11.1.4, #Nesting: /LiveComponent /LiveLegacy /RayMarching}
{M.11.1.4, #Description: -}


{P.11.1.5, AttenuationPower, FLOAT, 1, BPONLY}
{M.11.1.5, #Nesting: /LiveComponent /LiveLegacy /RayMarching}
{M.11.1.5, #Description: -}


{P.11.1.6, PointLightMovementMultiplier, FLOAT, 1, BPONLY}
{M.11.1.6, #Nesting: /LiveComponent /LiveLegacy /RayMarching}
{M.11.1.6, #Description: -}


{P.11.1.7, TwoSidedShading, BOOL, 0, BPONLY}
{M.11.1.7, #Nesting: /LiveComponent /LiveLegacy /RayMarching}
{M.11.1.7, #Description: -}


{P.11.1.8, TwoSideBlendPow, FLOAT, 0.25, BPONLY}
{M.11.1.8, #Nesting: /LiveComponent /LiveLegacy /RayMarching}
{M.11.1.8, #Description: -}


{P.11.1.9, Facing, FLOAT, 1, BPONLY}
{M.11.1.9, #Nesting: /LiveComponent /LiveLegacy /RayMarching}
{M.11.1.9, #Description: -}


{P.11.1.10, OffsetLightVector, VEC3, (0,0,0), BPONLY}
{M.11.1.10, #Nesting: /LiveComponent /LiveLegacy /RayMarching}
{M.11.1.10, #Description: -}


{P.11.1.11, ForceManualSunPosition, BOOL, 0, BPONLY}
{M.11.1.11, #Nesting: /LiveComponent /LiveLegacy /RayMarching}
{M.11.1.11, #Description: -}


{P.11.1.12, SunLatitude, FLOAT, 0, BPONLY}
{M.11.1.12, #Nesting: /LiveComponent /LiveLegacy /RayMarching}
{M.11.1.12, #Description: -}


{P.11.1.13, SunLongitude, FLOAT, 0, BPONLY}
{M.11.1.13, #Nesting: /LiveComponent /LiveLegacy /RayMarching}
{M.11.1.13, #Description: -}


{P.11.1.14, SunHeight, FLOAT, 0, BPONLY}
{M.11.1.14, #Nesting: /LiveComponent /LiveLegacy /RayMarching}
{M.11.1.14, #Description: -}


{P.11.1.15, ShowLightDirectionVector_(Yellow), BOOL, 0, BPONLY}
{M.11.1.15, #Nesting: /LiveComponent /LiveLegacy /RayMarching}
{M.11.1.15, #Description: -}


{P.11.1.16, ShowNiagaraSysUpvector_(Red), BOOL, 0, BPONLY}
{M.11.1.16, #Nesting: /LiveComponent /LiveLegacy /RayMarching}
{M.11.1.16, #Description: -}


{P.11.1.17, ShowFacingPlane, BOOL, 0, BPONLY}
{M.11.1.17, #Nesting: /LiveComponent /LiveLegacy /RayMarching}
{M.11.1.17, #Description: -}


{P.11.1.18, PrintFacing, BOOL, 0, BPONLY}
{M.11.1.18, #Nesting: /LiveComponent /LiveLegacy /RayMarching}
{M.11.1.18, #Description: -}


{G.11.2, SlowPostProcessSwitch}


{M.11.2.1, #Nesting: /LiveComponent /LiveLegacy /SlowPostProcessSwitch}
{P.11.2.1, TurnOnPostProcessIfCameraUnderWater, BOOL, 0, BPONLY}
{M.11.2.1, #Description: 
WARNING: this function is experimental - made as a proof of concept - and strictly NOT RECOMMENDED FOR PRODUCTION. 
Method: define an "underwater" postprocess volume, have it switched OFF by default and switch it on-off 
every time the camera goes below-above the waterline. 

Technically, Camera Position is being queried and the position data is used to sample ninja height buffer 
(fluid height, stored on Paint Buffer Alpha channel) in a single point, to figure out: is the camera under water? 
Everything is done on the CPU, super slow.
}


{P.11.2.2, CameraDependentPostProcessVolume, ACTOR ARRAY,-, BPONLY}
{M.11.2.2, #Nesting: /LiveComponent /LiveLegacy /SlowPostProcessSwitch}
{M.11.2.2, #Description: 
Use THIS PostProcess volume for underwater screen space effect.
}


{P.11.2.3, CamPosQueryRefreshRate, FLOAT, 25, BPONLY}
{M.11.2.3, #Nesting: /LiveComponent /LiveLegacy /SlowPostProcessSwitch}
{M.11.2.3, #Description: 
The frequency of sampling ninja fluid height buffer per second.
}









---------------------------------------------------------------------------------------

<div style="page-break-after: always;"></div>


## 5. LiveActor Param Groups with Param Names


The below parameter groups and parameters appear on the NinjaLive Actor Details Panel and in the structure of Preset files.

SYNTAX DEFINITION FOR ACTOR PARAMETER LIST ITEMS:

- `Group` type list item: 
`{GA.Group number, group name}`
- `Parameter` type list item: 
`{PA.Parameter number, parameter name, parameter type, default value}`

---

STRUCTURED LIST OF PARAMETER GROUPS WITH PARAMETER NAMES  
COUNT: 24 PARAMETERS LISTED IN 3 GROUPS


- **{GA.1, LiveActivation}**

  - {PA.1.1, DisableBlueprint, BOOL, 0}
  - {PA.1.2, SimActivatedByPawnProximity, BOOL, 0}
  - {PA.1.3, ShowActivationVolumeInEditor, BOOL, 0}
  - {PA.1.4, ActivationVolumeSize, VEC3, (50,50,50)}
  - {PA.1.5, ActivatorProximityCheckFrequency, FLOAT, 0.1}
  - {PA.1.6, ActivatorType, ENUM, 2}
  - {PA.1.7, Activator, ACTOR, - }


- **{GA.2, LiveInteraction}**

  - {PA.2.1, UserInputBasedInteraction, ENUM, 1}
  - {PA.2.2, OverlapBasedInteraction, BOOL, 1}
  - {PA.2.3, ShowInteractionVolumeInEditor, BOOL, 1}
  - {PA.2.4, InteractionVolumeSize, VEC3, (5,5,1)}
  - {PA.2.5, TrackActorPrimitiveComponentsWithTag, NAME, none}
  - {PA.2.6, TrackActorSkeletalMeshComponentsWithTag, NAME, none}
  - {PA.2.7, OverlapFilterInclusiveObjType, ENUM ARRAY, (WorldStatic,WorldDynamic,Pawn,PhysicsBody)}
  - {PA.2.8, OverlapFilterInclusiveBoneNameExact, NAME ARRAY, - }
  - {PA.2.9, ExcludeSpecificActorsFromOverlap, ACTOR ARRAY, - }
  - {PA.2.10, AutoExcludeLargeOverlappingObjects, BOOL, 1}
  - {PA.2.11, ExcludeActorsWithLiveInterface, BOOL, 0}
  - {PA.2.12, ForceTrackObjectsWithNocollisionFlag, BOOL, 1}
  - {PA.2.13, ForceTrackBonesWithSimilarName, BOOL, 0}


- **{GA.3, LiveDebug}**

  - {PA.3.1, ActivationEventsDebugPrint, BOOL, 0}
  - {PA.3.2, SimContainerCapacityWarning, BOOL, 1}
  - {PA.3.3, SaveDebugTextToLog, BOOL, 0}
  - {PA.3.4, DebugTextLifeTimeLength, FLOAT, 8}





---------------------------------------------------------------------------------------

<div style="page-break-after: always;"></div>


## 6. LiveActor Param Groups with Param Names and Metadata


The below parameter groups and parameters appear on the NinjaLive Actor Details Panel and in the structure of Preset files.


SYNTAX DEFINITION FOR ACTOR PARAMETER LIST ITEMS:

- `Group` type list item: 
`{GA.Group number, group name}`
- `Parameter` type list item: 
`{PA.Parameter number, parameter name, parameter type, default value}`
- `Parameter Metadata` type list item: 
`{MA.Parameter number, #metadata category: metadata}`


PARAMETER METADATA CATEGORY TYPES:

- #Description: brief summary on parameter usage, also used as Tooltip in Unreal Editor
- #Comment: arbitrary information
- #Nesting: the parameter's hierarchical nesting in Live Actor parameter groups

---

LIST OF PARAMETER GROUPS WITH PARAMETER NAMES AND METADATA  
COUNT: 24 PARAMETERS LISTED IN 3 GROUPS


{GA.1, LiveActivation}


{PA.1.1, DisableBlueprint, BOOL, 0, BPONLY}
{MA.1.1, #Nesting: /LiveActor /LiveActivation}
{MA.1.1, #Description: 
If True, Live Actor will not initialize. Live Component is not initialized either. 

If dynamically set to True while Live Actor is already running, the Actor Tick Event is paused. Live Component Ticking is also paused. 
Tick could be restored (Actor and Component un-paused) by setting Actor "DisableBlueprint" variable to False again. 
Tick restore does NOT reinitialize the Actor or the Component. It works like a pause-play function. 
To fully reinitialize the Actor and the Component (reset state and restart) 
call Live Actor "RePlay" Event and Live Component "RePlay" Event, separately.
}


{PA.1.2, SimActivatedByPawnProximity, BOOL, 0, BPONLY}
{MA.1.2, #Nesting: /LiveActor /LiveActivation}
{MA.1.2, #Description: 
Live Actor ENABLED - DISABLED state is controlled by the proximity of a user defined object, called "Activator". 

When no specific Activator defined: Live Actor is using the actually possessed pawn as Activator. 
If the Activator is leaving the Activation Volume, "ShutDown" Event is initialized for both Live Actor and Live Component, 
sim buffers also cleared (flushed). Live Actor and Live Component are Re-initialized by Activator entering 
the Activation Volume again ("RePlay" event is called for both Live Actor and Live Component).
}


{PA.1.3, ShowActivationVolumeInEditor, BOOL, 0, BPONLY}
{MA.1.3, #Nesting: /LiveActor /LiveActivation}
{MA.1.3, #Description: 
Show Activation Volume as a wireframe box IN-EDITOR.
}


{PA.1.4, ActivationVolumeSize, VEC3, (50,50,50), BPONLY}
{MA.1.4, #Nesting: /LiveActor /LiveActivation}
{MA.1.4, #Description: 
Set Activation Volume XYZ size in meters. 

IMPORTANT: we NEVER use Live ACTOR SCALE Transform to resize the Activation Volume. 
Keep ACTOR SCALE Transform on 1,1,1 and use the "ActivationVolumeSize" param to resize Activation Volume.
}


{PA.1.5, ActivatorProximityCheckFrequency, FLOAT, 0.1, BPONLY}
{MA.1.5, #Nesting: /LiveActor /LiveActivation}
{MA.1.5, #Description: 
Activation response time in seconds (the frequency of Activator proximity checks). Default value is 0.1 second.
}


{PA.1.6, ActivatorType, ENUM, 2, BPONLY}
{MA.1.6, #Nesting: /LiveActor /LiveActivation}
{MA.1.6, #Comment: 0=WorldStatic,1=WorldDynamic,2=Pawn,4=Camera,5=PhysicsBody,6=Vehicle}
{MA.1.6, #Description: 
Define what TYPE of object is used as Activator: WorldStatic, WorldDynamic, Pawn, PhysicsBody, Vehicle. Default is Pawn. 

Each Actor of the given type will activate ninja - unless we directly specify ONE Actor, which is going to be used exclusively. 
We can check and modify what "type" our objects are, by selecting a given Actor, then selecting the key Component 
(eg. the "SkeletalMesh" Component of a Pawn Actor), and at the Component Details Panel, we look up: 
/Collision /CollisionPreset /ObjectType.
}


{PA.1.7, Activator, ACTOR, -, BPONLY }
{MA.1.7, #Nesting: /LiveActor /LiveActivation}
{MA.1.7, #Description: 
A directly specified SINGLE Actor - to Activate ninja via proximity detection.
}


{GA.2, LiveInteraction}


{PA.2.1, UserInputBasedInteraction, ENUM, 1, BPONLY}
{MA.2.1, #Nesting: /LiveActor /LiveInteraction}
{MA.2.1, #Comment: 0=NoUserInput,1=MouseSingle,2=TouchSigle,3=TouchMultiple}
{MA.2.1, #Description: 
Response to mouse gestures. We can stop this, by selecting "NoUserInput".
}


{PA.2.2, OverlapBasedInteraction, BOOL, 1, BPONLY}
{MA.2.2, #Nesting: /LiveActor /LiveInteraction}
{MA.2.2, #Description: 
Response to objects that enter the simulation area. 

DETAILS: Live Actor is constantly monitoring objects that overlap the Interaction Volume. Every frame, a list of 
overlapping Primitives and Skeletal Meshes is forwarded to Live Component, where PIVOT and BONE position is queried. 
The point data is used to draw marks in the Paint Buffer. 

WARNING 1: objects SPAWNED inside the Interaction Volume do NOT trigger overlap response. 
Workaround "A": we can spawn objects outside Interaction Volume and move them inside, following the spawn. 
Workaround "B": developers could build their own function that adds spawned Primitives to the "OverlappingComponents" Array 
in LiveComponent (and Skeletal Meshes to the "SkeletalMesh-TempArray-Pairs" Map). 

WARNING 2: Live Actor is managing ONLY A SUBSET of interactions. Interaction with Skeletal Meshes and Primitives 
(as point data inputs, using bone and pivot position) is managed by Live Actor - and data is forwarded to Live Component. 
Interaction with FIELDS (Mesh SDF, Landscapes, Splines), PARTICLES and DESTRUCTIBLES is managed entirely by Live Component, 
Live Actor is not involved and not needed. 

NOTE: Live Component could perform limited interaction with Skeletal Meshes and Primitives as point data inputs WITHOUT 
Live Actor: we need to directly provide Live Component with the targets we would like to track (no overlap detection), 
and the targets must be components of the SAME OWNER ACTOR that hosts Live Component. 
See this param group: /LiveComponent /LiveInputPoints /InteractionWithOwner.
}


{PA.2.3, ShowInteractionVolumeInEditor, BOOL, 1, BPONLY}
{MA.2.3, #Nesting: /LiveActor /LiveInteraction}
{MA.2.3, #Description: 
Show Interaction Volume as a wireframe box IN-EDITOR. Interaction Volume detects overlapping objects to trigger sim response.
}


{PA.2.4, InteractionVolumeSize, VEC3, (5,5,1), BPONLY}
{MA.2.4, #Nesting: /LiveActor /LiveInteraction}
{MA.2.4, #Description: 
Set Interaction Volume XYZ size in meters. 

IMPORTANT: we NEVER use Live ACTOR SCALE Transform to resize the Interaction Volume. 
Keep ACTOR SCALE Transform on 1,1,1 and use the "InteractionVolumeSize" param to resize Interaction Volume.
}


{PA.2.5, TrackActorPrimitiveComponentsWithTag, NAME, none, BPONLY}
{MA.2.5, #Nesting: /LiveActor /LiveInteraction}
{MA.2.5, #Description: 
Track Objects by tag.

TAG an Actor Primitive Component. Provide ninja with the tag, here. As a result, ninja keeps tracking the PIVOT point 
of tagged Components. This method is additive to "Object Type" based trackers. 

PREREQUISITE: in order to trigger interaction, the following setting must be adjusted in tracked components: 
/Component Details /Collision /GenerateOverlapEvents = TRUE.
}


{PA.2.6, TrackActorSkeletalMeshComponentsWithTag, NAME, none, BPONLY}
{MA.2.6, #Nesting: /LiveActor /LiveInteraction}
{MA.2.6, #Description: 
Track Skeletal Meshes by tag.

TAG an Actor SkeletalMesh Component. Provide ninja with the tag, here. As a result, ninja keeps tracking the user defined BONES 
of tagged SkeletalMesh Components. Define bones using the "OverlapFilterInclusiveBoneNameExact" parameter. 

PREREQUISITE: in order to trigger interaction, the following setting must be adjusted in tracked components: 
/Component Details /Collision /GenerateOverlapEvents = TRUE.
}


{PA.2.7, OverlapFilterInclusiveObjType, ENUM ARRAY, (WorldStatic, WorldDynamic, Pawn, PhysicsBody, Vehicle), BPONLY}
{MA.2.7, #Nesting: /LiveActor /LiveInteraction}
{MA.2.7, #Description: 
Track objects by type.

Set an Actor Component's Object Type. Provide ninja with the TYPE, here. As a result, ninja keeps tracking 
the PIVOT or BONES of all Components of the given type. The available type choices are: 
WorldStatic, WorldDynamic, Pawn, PhysicsBody, Vehicle. 

We can check and modify what "type" our objects are, by selecting a given Actor, then selecting the key Component 
and at the Component Details Panel, we look up: /Collision /CollisionPreset /ObjectType. 

Example: in order to make a SkeletalMesh Component interact with ninja, we need to set object type to "Pawn", also adding 
"Pawn" to the "OverlapFilterInclusiveObjType" Enum Array in ninja  and define bones at "OverlapFilterInclusiveBoneNameExact". 

PREREQUISITE: in order to trigger interaction, the following setting must be adjusted in tracked components: 
/Component Details /Collision /GenerateOverlapEvents = TRUE.
}


{PA.2.8, OverlapFilterInclusiveBoneNameExact, NAME ARRAY, -, BPONLY}
{MA.2.8, #Nesting: /LiveActor /LiveInteraction}
{MA.2.8, #Description: 
Name specific bones to track them. 

WARNING 1: when no specific bone names are defined, ALL bones are being tracked, resulting poor performance. 

WARNING 2: ninja is only looking for bones, IF SkeletalMesh Components are tagged, and ninja is told about the tag 
at "TrackActorSkeletalMeshComponentsWithTag" OR SkeletalMesh Components are set to "Pawn" Object Type 
and ninja is set to track "Pawn" at "OverlapFilterInclusiveObjType".
}


{PA.2.9, ExcludeSpecificActorsFromOverlap, ACTOR ARRAY, -, BPONLY}
{MA.2.9, #Nesting: /LiveActor /LiveInteraction}
{MA.2.9, #Description: 
Name specific actors to exclude them from overlap detection.
}


{PA.2.10, AutoExcludeLargeOverlappingObjects, BOOL, 1, BPONLY}
{MA.2.10, #Nesting: /LiveActor /LiveInteraction}
{MA.2.10, #Description: 
Ignores objects that are larger than the sim area.
}


{PA.2.11, ExcludeActorsWithLiveInterface, BOOL, 0, BPONLY}
{MA.2.11, #Nesting: /LiveActor /LiveInteraction}
{MA.2.11, #Description: 
Ignores Actors with Live Interface implemented (typically OTHER ninja actors).
}


{PA.2.12, ForceTrackObjectsWithNocollisionFlag, BOOL, 1, BPONLY}
{MA.2.12, #Nesting: /LiveActor /LiveInteraction}
{MA.2.12, #Description: 
In some cases, Unreal Engine automatically changes the collision state of already tracked objects to "No Collision" while IN-GAME. 
For example, when a Player controlled pawn switches to RAGDOLL. If THIS "ForceTrack..." flag is TRUE, 
ninja keeps tracking these objects, despite their "No Collision" State. 

NOTE: to make ragdoll pawns trigger ninja overlap detection WHEN ENTERING the Interaction Volume, 
add a second CollisionCylinder to the doll, with "CollisionPreset = Pawn" setting.
}


{PA.2.13, ForceTrackBonesWithSimilarName, BOOL, 0, BPONLY}
{MA.2.13, #Nesting: /LiveActor /LiveInteraction}
{MA.2.13, #Description: 
Ninja ingnores bone names that occure more than once in the SkeletalMeshes of a given Actor - tracking only ONE bone 
on a given name. Using this switch, we could force ninja to track ALL bones with similar names.
}


{GA.3, LiveDebug}


{PA.3.1, ActivationEventsDebugPrint, BOOL, 0, BPONLY}
{MA.3.1, #Nesting: /LiveActor /LiveDebug}
{MA.3.1, #Description: -}


{PA.3.2, SimContainerCapacityWarning, BOOL, 1, BPONLY}
{MA.3.2, #Nesting: /LiveActor /LiveDebug}
{MA.3.2, #Description: -}


{PA.3.3, SaveDebugTextToLog, BOOL, 0, BPONLY}
{MA.3.3, #Nesting: /LiveActor /LiveDebug}
{MA.3.3, #Description: -}


{PA.3.4, DebugTextLifeTimeLength, FLOAT, 8, BPONLY}
{MA.3.4, #Nesting: /LiveActor /LiveDebug}
{MA.3.4, #Description: -}






---------------------------------------------------------------------------------------

<div style="page-break-after: always;"></div>


## 7. LiveCore Special Params


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
SET Num LUT Steps = 4096}


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





.
EOF

