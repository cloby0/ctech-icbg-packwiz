declare module "net.minecraft.world.level.levelgen.blending.Blender$DistanceGetter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Blender$DistanceGetter {
"getDistance"(double0: double, double1: double, double2: double): double
}

export namespace $Blender$DistanceGetter {
const probejs$$marker: never
}
export abstract class $Blender$DistanceGetter$$Static implements $Blender$DistanceGetter {
}
}

declare module "net.minecraft.world.level.levelgen.blending.BlendingData" {
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $Codec } from "com.mojang.serialization.Codec"
import { $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $Direction8 } from "net.minecraft.core.Direction8"
import { $Set } from "java.util.Set"
import { $WorldGenRegion$$Type } from "net.minecraft.server.level.WorldGenRegion"

export class $BlendingData {
static readonly "CODEC": $Codec<$BlendingData>

public "getAreaWithOldGeneration"(): $LevelHeightAccessor
public static "getOrUpdateBlendingData"(worldGenRegion0: $WorldGenRegion$$Type, int1: integer, int2: integer): $BlendingData
public static "sideByGenerationAge"(worldGenLevel0: $WorldGenLevel$$Type, int1: integer, int2: integer, boolean3: boolean): $Set<$Direction8>
get "areaWithOldGeneration"(): $LevelHeightAccessor
}
}

declare module "net.minecraft.world.level.levelgen.blending.Blender" {
import { $Blender$DistanceGetter } from "net.minecraft.world.level.levelgen.blending.Blender$DistanceGetter"
import { $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $BlendingData$$Type } from "net.minecraft.world.level.levelgen.blending.BlendingData"
import { $Blender$BlendingOutput } from "net.minecraft.world.level.levelgen.blending.Blender$BlendingOutput"
import { $Direction8$$Type } from "net.minecraft.core.Direction8"
import { $BiomeResolver, $BiomeResolver$$Type } from "net.minecraft.world.level.biome.BiomeResolver"
import { $Map$$Type } from "java.util.Map"
import { $ProtoChunk$$Type } from "net.minecraft.world.level.chunk.ProtoChunk"
import { $DensityFunction$FunctionContext$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$FunctionContext"
import { $WorldGenRegion$$Type } from "net.minecraft.server.level.WorldGenRegion"
import { $ChunkAccess$$Type } from "net.minecraft.world.level.chunk.ChunkAccess"

export class $Blender {
public static "addAroundOldChunksCarvingMaskFilter"(worldGenLevel0: $WorldGenLevel$$Type, protoChunk1: $ProtoChunk$$Type): void
public "blendDensity"(functionContext0: $DensityFunction$FunctionContext$$Type, double1: double): double
public "blendOffsetAndFactor"(int0: integer, int1: integer): $Blender$BlendingOutput
public static "empty"(): $Blender
public static "generateBorderTicks"(worldGenRegion0: $WorldGenRegion$$Type, chunkAccess1: $ChunkAccess$$Type): void
public "getBiomeResolver"(biomeResolver0: $BiomeResolver$$Type): $BiomeResolver
public static "makeOldChunkDistanceGetter"(blendingData0: $BlendingData$$Type, map1: $Map$$Type<$Direction8$$Type, $BlendingData$$Type>): $Blender$DistanceGetter
public static "of"(worldGenRegion0: $WorldGenRegion$$Type): $Blender
}
}

declare module "net.minecraft.world.level.levelgen.blending.Blender$BlendingOutput" {
import { $Record } from "java.lang.Record"

export class $Blender$BlendingOutput extends $Record {
constructor(double0: double, double1: double)

public "alpha"(): double
public "blendingOffset"(): double
}
}

