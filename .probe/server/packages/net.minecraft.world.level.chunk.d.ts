declare module "net.minecraft.world.level.chunk.UpgradeData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $UpgradeData$$Type = ($UpgradeData);
}

declare module "net.minecraft.world.level.chunk.storage.ChunkScanAccess" {
import { $ChunkPos } from "net.minecraft.world.level.ChunkPos"
import { $StreamTagVisitor } from "net.minecraft.nbt.StreamTagVisitor"
import { $CompletableFuture$$Type } from "java.util.concurrent.CompletableFuture"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChunkScanAccess$$Type = ($ChunkScanAccess | ((arg0: $ChunkPos, arg1: $StreamTagVisitor) => $CompletableFuture$$Type<void>));
}

declare module "net.minecraft.world.level.chunk.ChunkGenerator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChunkGenerator$$Type = ($ChunkGenerator);
}

declare module "net.minecraft.world.level.chunk.LevelChunk" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LevelChunk$$Type = ($LevelChunk);
}

declare module "net.minecraft.world.level.chunk.ChunkStatus$GenerationTask" {
import { $Either, $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $Executor } from "java.util.concurrent.Executor"
import { $CompletableFuture, $CompletableFuture$$Type } from "java.util.concurrent.CompletableFuture"
import { $ThreadedLevelLightEngine } from "net.minecraft.server.level.ThreadedLevelLightEngine"
import { $ServerLevel } from "net.minecraft.server.level.ServerLevel"
import { $Function } from "java.util.function.Function"
import { $ChunkAccess, $ChunkAccess$$Type } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $ChunkGenerator } from "net.minecraft.world.level.chunk.ChunkGenerator"
import { $List } from "java.util.List"
import { $StructureTemplateManager } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import { $ChunkStatus } from "net.minecraft.world.level.chunk.ChunkStatus"
import { $ChunkHolder$ChunkLoadingFailure, $ChunkHolder$ChunkLoadingFailure$$Type } from "net.minecraft.server.level.ChunkHolder$ChunkLoadingFailure"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChunkStatus$GenerationTask$$Type = ($ChunkStatus$GenerationTask | ((arg0: $ChunkStatus, arg1: $Executor, arg2: $ServerLevel, arg3: $ChunkGenerator, arg4: $StructureTemplateManager, arg5: $ThreadedLevelLightEngine, arg6: $Function<$ChunkAccess, $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>>, arg7: $List<$ChunkAccess>, arg8: $ChunkAccess) => $CompletableFuture$$Type<$Either$$Type<$ChunkAccess$$Type, $ChunkHolder$ChunkLoadingFailure$$Type>>));
}

declare module "net.minecraft.world.level.chunk.storage.ChunkStorage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChunkStorage$$Type = ($ChunkStorage);
}

declare module "net.minecraft.world.level.chunk.PalettedContainer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PalettedContainer$$Type<T = any> = ($PalettedContainer<T>);
}

declare module "net.minecraft.world.level.chunk.BlockColumn" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockColumn$$Type = ($BlockColumn);
}

declare module "net.minecraft.world.level.chunk.Palette$Factory" {
import { $List } from "java.util.List"
import { $PaletteResize } from "net.minecraft.world.level.chunk.PaletteResize"
import { $Palette$$Type } from "net.minecraft.world.level.chunk.Palette"
import { $IdMap } from "net.minecraft.core.IdMap"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Palette$Factory$$Type = ($Palette$Factory | ((arg0: integer, arg1: $IdMap<A>, arg2: $PaletteResize<A>, arg3: $List<A>) => $Palette$$Type<A>));
}

declare module "net.minecraft.world.level.chunk.ProtoChunk" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ProtoChunk$$Type = ($ProtoChunk);
}

declare module "net.minecraft.world.level.chunk.LevelChunkSection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LevelChunkSection$$Type = ($LevelChunkSection);
}

declare module "net.minecraft.world.level.chunk.storage.IOWorker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IOWorker$$Type = ($IOWorker);
}

declare module "net.minecraft.world.level.chunk.PalettedContainerRO" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PalettedContainerRO$$Type<T = any> = ($PalettedContainerRO<T>);
}

declare module "net.minecraft.world.level.chunk.LevelChunk$EntityCreationType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LevelChunk$EntityCreationType$$Type = ($LevelChunk$EntityCreationType | ("immediate" | "queued" | "check"));
}

declare module "net.minecraft.world.level.chunk.storage.RegionFileStorage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegionFileStorage$$Type = ($RegionFileStorage);
}

declare module "net.minecraft.world.level.chunk.ChunkStatus$LoadingTask" {
import { $Either, $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $StructureTemplateManager } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import { $CompletableFuture, $CompletableFuture$$Type } from "java.util.concurrent.CompletableFuture"
import { $ChunkStatus } from "net.minecraft.world.level.chunk.ChunkStatus"
import { $ThreadedLevelLightEngine } from "net.minecraft.server.level.ThreadedLevelLightEngine"
import { $ChunkHolder$ChunkLoadingFailure, $ChunkHolder$ChunkLoadingFailure$$Type } from "net.minecraft.server.level.ChunkHolder$ChunkLoadingFailure"
import { $ServerLevel } from "net.minecraft.server.level.ServerLevel"
import { $Function } from "java.util.function.Function"
import { $ChunkAccess, $ChunkAccess$$Type } from "net.minecraft.world.level.chunk.ChunkAccess"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChunkStatus$LoadingTask$$Type = ($ChunkStatus$LoadingTask | ((arg0: $ChunkStatus, arg1: $ServerLevel, arg2: $StructureTemplateManager, arg3: $ThreadedLevelLightEngine, arg4: $Function<$ChunkAccess, $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>>, arg5: $ChunkAccess) => $CompletableFuture$$Type<$Either$$Type<$ChunkAccess$$Type, $ChunkHolder$ChunkLoadingFailure$$Type>>));
}

declare module "net.minecraft.world.level.chunk.LevelChunk$PostLoadProcessor" {
import { $LevelChunk } from "net.minecraft.world.level.chunk.LevelChunk"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LevelChunk$PostLoadProcessor$$Type = ($LevelChunk$PostLoadProcessor | ((arg0: $LevelChunk) => void));
}

declare module "net.minecraft.world.level.chunk.PalettedContainer$Configuration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PalettedContainer$Configuration$$Type<T = any> = ($PalettedContainer$Configuration<T>);
}

declare module "net.minecraft.world.level.chunk.ChunkStatus" {
import { $Either } from "com.mojang.datafixers.util.Either"
import { $ChunkStatus$GenerationTask$$Type } from "net.minecraft.world.level.chunk.ChunkStatus$GenerationTask"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $ChunkStatus$LoadingTask$$Type } from "net.minecraft.world.level.chunk.ChunkStatus$LoadingTask"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ThreadedLevelLightEngine$$Type } from "net.minecraft.server.level.ThreadedLevelLightEngine"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $Function$$Type } from "java.util.function.Function"
import { $ChunkAccess, $ChunkAccess$$Type } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $ChunkGenerator$$Type } from "net.minecraft.world.level.chunk.ChunkGenerator"
import { $List, $List$$Type } from "java.util.List"
import { $StructureTemplateManager$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import { $ChunkStatus$ChunkType, $ChunkStatus$ChunkType$$Type } from "net.minecraft.world.level.chunk.ChunkStatus$ChunkType"
import { $Heightmap$Types, $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"
import { $ChunkHolder$ChunkLoadingFailure } from "net.minecraft.server.level.ChunkHolder$ChunkLoadingFailure"
import { $EnumSet, $EnumSet$$Type } from "java.util.EnumSet"

export class $ChunkStatus {
static readonly "BIOMES": $ChunkStatus
static readonly "CARVERS": $ChunkStatus
static readonly "EMPTY": $ChunkStatus
static readonly "FEATURES": $ChunkStatus
static readonly "FULL": $ChunkStatus
static readonly "INITIALIZE_LIGHT": $ChunkStatus
static readonly "LIGHT": $ChunkStatus
static readonly "MAX_STRUCTURE_DISTANCE": integer
static readonly "NOISE": $ChunkStatus
static readonly "POST_FEATURES": $EnumSet<$Heightmap$Types>
static readonly "SPAWN": $ChunkStatus
static readonly "STRUCTURE_REFERENCES": $ChunkStatus
static readonly "STRUCTURE_STARTS": $ChunkStatus
static readonly "SURFACE": $ChunkStatus

constructor(chunkStatus0: $ChunkStatus$$Type, int1: integer, boolean2: boolean, enumSet3: $EnumSet$$Type<$Heightmap$Types$$Type>, chunkType4: $ChunkStatus$ChunkType$$Type, generationTask5: $ChunkStatus$GenerationTask$$Type, loadingTask6: $ChunkStatus$LoadingTask$$Type)

public static "byName"(string0: string): $ChunkStatus
public "generate"(executor0: $Executor$$Type, serverLevel1: $ServerLevel$$Type, chunkGenerator2: $ChunkGenerator$$Type, structureTemplateManager3: $StructureTemplateManager$$Type, threadedLevelLightEngine4: $ThreadedLevelLightEngine$$Type, function5: $Function$$Type<$ChunkAccess$$Type, $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>>, list6: $List$$Type<$ChunkAccess$$Type>): $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>
public "getChunkType"(): $ChunkStatus$ChunkType
public static "getDistance"(chunkStatus0: $ChunkStatus$$Type): integer
public "getIndex"(): integer
public "getParent"(): $ChunkStatus
public "getRange"(): integer
public static "getStatusAroundFullChunk"(int0: integer): $ChunkStatus
public static "getStatusList"(): $List<$ChunkStatus>
public "hasLoadDependencies"(): boolean
public "heightmapsAfter"(): $EnumSet<$Heightmap$Types>
public "isOrAfter"(chunkStatus0: $ChunkStatus$$Type): boolean
public "load"(serverLevel0: $ServerLevel$$Type, structureTemplateManager1: $StructureTemplateManager$$Type, threadedLevelLightEngine2: $ThreadedLevelLightEngine$$Type, function3: $Function$$Type<$ChunkAccess$$Type, $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>>, chunkAccess4: $ChunkAccess$$Type): $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>
public static "maxDistance"(): integer
get "chunkType"(): $ChunkStatus$ChunkType
get "index"(): integer
get "parent"(): $ChunkStatus
get "range"(): integer
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.ChunkStatus
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.ChunkStatusTag
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChunkStatus$$Type = ($ChunkStatus | Special.ChunkStatus);
}

declare module "net.minecraft.world.level.chunk.ImposterProtoChunk" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ImposterProtoChunk$$Type = ($ImposterProtoChunk);
}

declare module "net.minecraft.world.level.chunk.PalettedContainerRO$PackedData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PalettedContainerRO$PackedData$$Type<T = any> = ($PalettedContainerRO$PackedData<T>);
}

declare module "net.minecraft.world.level.chunk.Palette" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Palette$$Type<T = any> = ($Palette<T>);
}

declare module "net.minecraft.world.level.chunk.PalettedContainer$CountConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PalettedContainer$CountConsumer$$Type<T = any> = ($PalettedContainer$CountConsumer<T> | ((arg0: T, arg1: integer) => void));
}

declare module "net.minecraft.world.level.chunk.PalettedContainer$Strategy" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PalettedContainer$Strategy$$Type = ($PalettedContainer$Strategy);
}

declare module "net.minecraft.world.level.chunk.StructureAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StructureAccess$$Type = ($StructureAccess);
}

declare module "net.minecraft.world.level.chunk.BulkSectionAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BulkSectionAccess$$Type = ($BulkSectionAccess);
}

declare module "net.minecraft.world.level.chunk.ChunkGeneratorStructureState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChunkGeneratorStructureState$$Type = ($ChunkGeneratorStructureState);
}

declare module "net.minecraft.world.level.chunk.storage.SectionStorage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SectionStorage$$Type<R = any> = ($SectionStorage<R>);
}

declare module "net.minecraft.world.level.chunk.DataLayer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DataLayer$$Type = ($DataLayer);
}

declare module "net.minecraft.world.level.chunk.CarvingMask" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CarvingMask$$Type = ($CarvingMask);
}

declare module "net.minecraft.world.level.chunk.CarvingMask$Mask" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CarvingMask$Mask$$Type = ($CarvingMask$Mask | ((arg0: integer, arg1: integer, arg2: integer) => boolean));
}

declare module "net.minecraft.world.level.chunk.PalettedContainer$Data" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PalettedContainer$Data$$Type<T = any> = ($PalettedContainer$Data<T>);
}

declare module "net.minecraft.world.level.chunk.ChunkSource" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChunkSource$$Type = ($ChunkSource);
}

declare module "net.minecraft.world.level.chunk.PaletteResize" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PaletteResize$$Type<T = any> = ($PaletteResize<T> | ((arg0: integer, arg1: T) => integer));
}

declare module "net.minecraft.world.level.chunk.storage.RegionFileVersion" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegionFileVersion$$Type = ($RegionFileVersion);
}

declare module "net.minecraft.world.level.chunk.ChunkStatus$ChunkType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChunkStatus$ChunkType$$Type = ($ChunkStatus$ChunkType | ("protochunk" | "levelchunk"));
}

declare module "net.minecraft.world.level.chunk.storage.RegionFile" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegionFile$$Type = ($RegionFile);
}

declare module "net.minecraft.world.level.chunk.LightChunk" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LightChunk$$Type = ($LightChunk);
}

declare module "net.minecraft.world.level.chunk.LightChunkGetter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LightChunkGetter$$Type = ($LightChunkGetter);
}

