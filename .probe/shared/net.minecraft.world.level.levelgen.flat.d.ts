declare module "net.minecraft.world.level.levelgen.flat.FlatLayerInfo" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"

export class $FlatLayerInfo {
static readonly "CODEC": $Codec<$FlatLayerInfo>

constructor(int0: integer, block1: $Block$$Type)

public "getBlockState"(): $BlockState
public "getHeight"(): integer
get "blockState"(): $BlockState
get "height"(): integer
}
}

declare module "net.minecraft.world.level.levelgen.flat.FlatLevelGeneratorSettings" {
import { $BiomeGenerationSettings } from "net.minecraft.world.level.biome.BiomeGenerationSettings"
import { $HolderSet, $HolderSet$$Type } from "net.minecraft.core.HolderSet"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $HolderGetter$$Type } from "net.minecraft.core.HolderGetter"
import { $Biome, $Biome$$Type } from "net.minecraft.world.level.biome.Biome"
import { $StructureSet, $StructureSet$$Type } from "net.minecraft.world.level.levelgen.structure.StructureSet"
import { $List, $List$$Type } from "java.util.List"
import { $FlatLayerInfo, $FlatLayerInfo$$Type } from "net.minecraft.world.level.levelgen.flat.FlatLayerInfo"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $PlacedFeature, $PlacedFeature$$Type } from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import { $Optional, $Optional$$Type } from "java.util.Optional"

export class $FlatLevelGeneratorSettings {
static readonly "CODEC": $Codec<$FlatLevelGeneratorSettings>

constructor(optional0: $Optional$$Type<$HolderSet$$Type<$StructureSet$$Type>>, holder1: $Holder$$Type<$Biome$$Type>, list2: $List$$Type<$Holder$$Type<$PlacedFeature$$Type>>)

public "adjustGenerationSettings"(holder0: $Holder$$Type<$Biome$$Type>): $BiomeGenerationSettings
public static "createLakesList"(holderGetter0: $HolderGetter$$Type<$PlacedFeature$$Type>): $List<$Holder<$PlacedFeature>>
public "getBiome"(): $Holder<$Biome>
public static "getDefault"(holderGetter0: $HolderGetter$$Type<$Biome$$Type>, holderGetter1: $HolderGetter$$Type<$StructureSet$$Type>, holderGetter2: $HolderGetter$$Type<$PlacedFeature$$Type>): $FlatLevelGeneratorSettings
public static "getDefaultBiome"(holderGetter0: $HolderGetter$$Type<$Biome$$Type>): $Holder<$Biome>
public "getLayers"(): $List<$BlockState>
public "getLayersInfo"(): $List<$FlatLayerInfo>
public "setAddLakes"(): void
public "setDecoration"(): void
public "structureOverrides"(): $Optional<$HolderSet<$StructureSet>>
public "updateLayers"(): void
public "withBiomeAndLayers"(list0: $List$$Type<$FlatLayerInfo$$Type>, optional1: $Optional$$Type<$HolderSet$$Type<$StructureSet$$Type>>, holder2: $Holder$$Type<$Biome$$Type>): $FlatLevelGeneratorSettings
get "biome"(): $Holder<$Biome>
get "layers"(): $List<$BlockState>
get "layersInfo"(): $List<$FlatLayerInfo>
}
}

