declare module "net.minecraft.world.level.lighting.ChunkSkyLightSources" {
import { $LevelHeightAccessor$$Type } from "net.minecraft.world.level.LevelHeightAccessor"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $ChunkAccess$$Type } from "net.minecraft.world.level.chunk.ChunkAccess"

export class $ChunkSkyLightSources {
static readonly "NEGATIVE_INFINITY": integer

constructor(levelHeightAccessor0: $LevelHeightAccessor$$Type)

public "fillFrom"(chunkAccess0: $ChunkAccess$$Type): void
public "getHighestLowestSourceY"(): integer
public "getLowestSourceY"(int0: integer, int1: integer): integer
public "update"(blockGetter0: $BlockGetter$$Type, int1: integer, int2: integer, int3: integer): boolean
get "highestLowestSourceY"(): integer
}
}

declare module "net.minecraft.world.level.lighting.LayerLightSectionStorage$SectionType" {
import { $Enum } from "java.lang.Enum"

export class $LayerLightSectionStorage$SectionType extends $Enum<$LayerLightSectionStorage$SectionType> {
static readonly "EMPTY": $LayerLightSectionStorage$SectionType
static readonly "LIGHT_AND_DATA": $LayerLightSectionStorage$SectionType
static readonly "LIGHT_ONLY": $LayerLightSectionStorage$SectionType

public "display"(): string
public static "valueOf"(string0: string): $LayerLightSectionStorage$SectionType
public static "values"(): $LayerLightSectionStorage$SectionType[]
}
}

declare module "net.minecraft.world.level.lighting.LevelLightEngine" {
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $LayerLightEventListener } from "net.minecraft.world.level.lighting.LayerLightEventListener"
import { $LightLayer$$Type } from "net.minecraft.world.level.LightLayer"
import { $SectionPos$$Type } from "net.minecraft.core.SectionPos"
import { $LayerLightSectionStorage$SectionType } from "net.minecraft.world.level.lighting.LayerLightSectionStorage$SectionType"
import { $DataLayer$$Type } from "net.minecraft.world.level.chunk.DataLayer"
import { $LightChunkGetter$$Type } from "net.minecraft.world.level.chunk.LightChunkGetter"
import { $LightEventListener } from "net.minecraft.world.level.lighting.LightEventListener"

export class $LevelLightEngine implements $LightEventListener {
static readonly "LIGHT_SECTION_PADDING": integer

constructor(lightChunkGetter0: $LightChunkGetter$$Type, boolean1: boolean, boolean2: boolean)

public "checkBlock"(blockPos0: $BlockPos$$Type): void
public "getDebugData"(lightLayer0: $LightLayer$$Type, sectionPos1: $SectionPos$$Type): string
public "getDebugSectionType"(lightLayer0: $LightLayer$$Type, sectionPos1: $SectionPos$$Type): $LayerLightSectionStorage$SectionType
public "getLayerListener"(lightLayer0: $LightLayer$$Type): $LayerLightEventListener
public "getLightSectionCount"(): integer
public "getMaxLightSection"(): integer
public "getMinLightSection"(): integer
public "getRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "hasLightWork"(): boolean
public "lightOnInSection"(sectionPos0: $SectionPos$$Type): boolean
public "propagateLightSources"(chunkPos0: $ChunkPos$$Type): void
public "queueSectionData"(lightLayer0: $LightLayer$$Type, sectionPos1: $SectionPos$$Type, dataLayer2: $DataLayer$$Type): void
public "retainData"(chunkPos0: $ChunkPos$$Type, boolean1: boolean): void
public "runLightUpdates"(): integer
public "setLightEnabled"(chunkPos0: $ChunkPos$$Type, boolean1: boolean): void
public "updateSectionStatus"(sectionPos0: $SectionPos$$Type, boolean1: boolean): void
public "updateSectionStatus"(blockPos0: $BlockPos$$Type, boolean1: boolean): void
get "lightSectionCount"(): integer
get "maxLightSection"(): integer
get "minLightSection"(): integer
}
}

declare module "net.minecraft.world.level.lighting.LayerLightEventListener" {
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SectionPos$$Type } from "net.minecraft.core.SectionPos"
import { $DataLayer } from "net.minecraft.world.level.chunk.DataLayer"
import { $LightEventListener } from "net.minecraft.world.level.lighting.LightEventListener"

export interface $LayerLightEventListener extends $LightEventListener {
"checkBlock"(blockPos0: $BlockPos$$Type): void
"getDataLayerData"(sectionPos0: $SectionPos$$Type): $DataLayer
"getLightValue"(blockPos0: $BlockPos$$Type): integer
"hasLightWork"(): boolean
"propagateLightSources"(chunkPos0: $ChunkPos$$Type): void
"runLightUpdates"(): integer
"setLightEnabled"(chunkPos0: $ChunkPos$$Type, boolean1: boolean): void
"updateSectionStatus"(blockPos0: $BlockPos$$Type, boolean1: boolean): void
"updateSectionStatus"(sectionPos0: $SectionPos$$Type, boolean1: boolean): void
}

export namespace $LayerLightEventListener {
const probejs$$marker: never
}
export abstract class $LayerLightEventListener$$Static implements $LayerLightEventListener {
}
}

declare module "net.minecraft.world.level.lighting.LightEventListener" {
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SectionPos$$Type } from "net.minecraft.core.SectionPos"

export interface $LightEventListener {
"checkBlock"(blockPos0: $BlockPos$$Type): void
"hasLightWork"(): boolean
"propagateLightSources"(chunkPos0: $ChunkPos$$Type): void
"runLightUpdates"(): integer
"setLightEnabled"(chunkPos0: $ChunkPos$$Type, boolean1: boolean): void
"updateSectionStatus"(blockPos0: $BlockPos$$Type, boolean1: boolean): void
"updateSectionStatus"(sectionPos0: $SectionPos$$Type, boolean1: boolean): void
}

export namespace $LightEventListener {
const probejs$$marker: never
}
export abstract class $LightEventListener$$Static implements $LightEventListener {
}
}

