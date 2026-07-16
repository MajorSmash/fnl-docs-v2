---
doc_type: SET_TOPIC
title: "LAVE UPDATE, STEP-BY-STEP GUIDE"
date: 2023-04-10
source_url: "https://discord.com/channels/850913821240983553/850913821827792940/1094898638595043328"
author: "andrasketzer"
source_channel: "general"
scope: LIVE2
version_min: null
version_max: null
media_urls: ["https://cdn.discordapp.com/attachments/850913821827792940/1094898638397915207/image.png?ex=6a589351&is=6a5741d1&hm=64cdae737b39d634f36c89745a6180b0c5a86d7d399090909b16c876e3d4f42b&"]
---

1. Open level "Usecase_008B_LavaWorldSpace"
2. Copy actor: "NinjaLive_TileGenerator_Lava2"
3. Open level "Usecase_017_RiversAndLandscapes_LIVE18"
4. Paste actor "NinjaLive_TileGenerator_Lava2"

*Explained:* "NinjaLive_TileGenerator_Lava2" is a non interactive ninja sim, that generates the "basic pattern" for lava - and WRITES it to external, on disk textures every frame (texture = RenderTarget). Of course, you could replace this sim generated pattern with simple textures IN THE MATERIAL INSTANCE
*(/FluidNinjaLive /UseCases /008_Lava/MaterialsDualInput/MI_Lava5_dual_local_spotted_river)* - in this case, we do not need "NinjaLive_TileGenerator_Lava2" at all

5. Select actor "NinjaLive_Stage1_RiverLarge"
6. go to NinjaLive Actor /NinjaLive Component /LiveGeneric /SecondaryOutputMaterials
7. ADD "MI_Lava5_dual_local_spotted_river" as a new material to the array
8. set the SecondaryOutputMaterialsSelected INDEX above the array to 2

Explained: we are going to use ninja sim actor to assign the lava material INSTANCE to the river-spline

9. Open this BaseMaterial
*/FluidNinjaLive/OutputMaterials/BaseMaterialsSpecial/M_LavaSurface_Dualinput*

10. RENAME the "TrailVelocityDensiyInput" texture input to "VelocityDensityBuffer"
11. REPLACE the "FluidPos1" and "TraceMeshSize1" MaterialCollectionParam INPUTS with two Vector inputs, as depicted on the below screenshot, named as "TraceMeshPos" and "TraceMeshSize"
12. Save the basematerial.
13. Run the river level PLAY
