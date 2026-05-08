declare module "net.minecraft.world.level.levelgen.structure.structures.ShipwreckStructure" {
import { $Structure$GenerationContext$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import { $Structure } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Structure$StructureSettings$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"
import { $Optional } from "java.util.Optional"
import { $Structure$GenerationStub } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"

export class $ShipwreckStructure extends $Structure {
static readonly "CODEC": $Codec<$ShipwreckStructure>
readonly "isBeached": boolean

constructor(structureSettings0: $Structure$StructureSettings$$Type, boolean1: boolean)

public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
}
}

declare module "net.minecraft.world.level.levelgen.structure.pools.FeaturePoolElement" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $FeaturePoolElementAccessor } from "com.github.L_Ender.cataclysm.mixin.accessor.FeaturePoolElementAccessor"
import { $StructureTemplatePool$Projection$$Type } from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool$Projection"
import { $PlacedFeature, $PlacedFeature$$Type } from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import { $StructurePoolElement } from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

export class $FeaturePoolElement extends $StructurePoolElement implements $FeaturePoolElementAccessor {
static readonly "CODEC": $Codec<$FeaturePoolElement>

constructor(holder0: $Holder$$Type<$PlacedFeature$$Type>, projection1: $StructureTemplatePool$Projection$$Type)

get "feature"(): $Holder<$PlacedFeature>
set "feature"(value: $Holder$$Type<$PlacedFeature$$Type>)
}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.Passthrough" {
import { $RuleBlockEntityModifierType } from "net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.RuleBlockEntityModifierType"
import { $Codec } from "com.mojang.serialization.Codec"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $RuleBlockEntityModifier } from "net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.RuleBlockEntityModifier"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"

export class $Passthrough implements $RuleBlockEntityModifier {
static readonly "CODEC": $Codec<$Passthrough>
static readonly "INSTANCE": $Passthrough

constructor()

public "apply"(randomSource0: $RandomSource$$Type, compoundTag1: $CompoundTag$$Type): $CompoundTag
public "getType"(): $RuleBlockEntityModifierType<any>
get "type"(): $RuleBlockEntityModifierType<any>
}
}

declare module "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool$Projection" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $ImmutableList } from "com.google.common.collect.ImmutableList"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StructureProcessor } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $StructureTemplatePool$Projection extends $Enum<$StructureTemplatePool$Projection> implements $StringRepresentable {
static readonly "CODEC": $StringRepresentable$EnumCodec<$StructureTemplatePool$Projection>
static readonly "RIGID": $StructureTemplatePool$Projection
static readonly "TERRAIN_MATCHING": $StructureTemplatePool$Projection

public static "byName"(string0: string): $StructureTemplatePool$Projection
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getName"(): string
public "getProcessors"(): $ImmutableList<$StructureProcessor>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $StructureTemplatePool$Projection
public static "values"(): $StructureTemplatePool$Projection[]
get "name"(): string
get "processors"(): $ImmutableList<$StructureProcessor>
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.levelgen.structure.structures.OceanRuinStructure" {
import { $Structure$GenerationContext$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import { $Structure } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $Codec } from "com.mojang.serialization.Codec"
import { $OceanRuinStructure$Type, $OceanRuinStructure$Type$$Type } from "net.minecraft.world.level.levelgen.structure.structures.OceanRuinStructure$Type"
import { $Structure$StructureSettings$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"
import { $Optional } from "java.util.Optional"
import { $Structure$GenerationStub } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"

export class $OceanRuinStructure extends $Structure {
static readonly "CODEC": $Codec<$OceanRuinStructure>
readonly "biomeTemp": $OceanRuinStructure$Type
readonly "clusterProbability": float
readonly "largeProbability": float

constructor(structureSettings0: $Structure$StructureSettings$$Type, type1: $OceanRuinStructure$Type$$Type, float2: float, float3: float)

public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.BlockRotProcessor" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $StructureProcessor } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor"
import { $HolderSet$$Type } from "net.minecraft.core.HolderSet"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"

export class $BlockRotProcessor extends $StructureProcessor {
static readonly "CODEC": $Codec<$BlockRotProcessor>

constructor(float0: float)
constructor(holderSet0: $HolderSet$$Type<$Block$$Type>, float1: float)

}
}

declare module "net.minecraft.world.level.levelgen.structure.structures.DesertPyramidStructure" {
import { $SinglePieceStructure } from "net.minecraft.world.level.levelgen.structure.SinglePieceStructure"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Structure$StructureSettings$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $DesertPyramidStructure extends $SinglePieceStructure {
static readonly "CODEC": $Codec<$DesertPyramidStructure>

constructor(structureSettings0: $Structure$StructureSettings$$Type)

}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.BlockIgnoreProcessor" {
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $StructureProcessor } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"

export class $BlockIgnoreProcessor extends $StructureProcessor {
static readonly "AIR": $BlockIgnoreProcessor
static readonly "CODEC": $Codec<$BlockIgnoreProcessor>
static readonly "STRUCTURE_AND_AIR": $BlockIgnoreProcessor
static readonly "STRUCTURE_BLOCK": $BlockIgnoreProcessor

constructor(list0: $List$$Type<$Block$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.structure.structures.WoodlandMansionStructure" {
import { $Structure$GenerationContext$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import { $Structure } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Structure$StructureSettings$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"
import { $Optional } from "java.util.Optional"
import { $Structure$GenerationStub } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"

export class $WoodlandMansionStructure extends $Structure {
static readonly "CODEC": $Codec<$WoodlandMansionStructure>

constructor(structureSettings0: $Structure$StructureSettings$$Type)

public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
}
}

declare module "net.minecraft.world.level.levelgen.structure.StructureCheckResult" {
import { $Enum } from "java.lang.Enum"

export class $StructureCheckResult extends $Enum<$StructureCheckResult> {
static readonly "CHUNK_LOAD_NEEDED": $StructureCheckResult
static readonly "START_NOT_PRESENT": $StructureCheckResult
static readonly "START_PRESENT": $StructureCheckResult

public static "valueOf"(string0: string): $StructureCheckResult
public static "values"(): $StructureCheckResult[]
}
}

declare module "net.minecraft.world.level.levelgen.structure.pools.JigsawJunction" {
import { $Dynamic, $Dynamic$$Type } from "com.mojang.serialization.Dynamic"
import { $StructureTemplatePool$Projection, $StructureTemplatePool$Projection$$Type } from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool$Projection"
import { $DynamicOps$$Type } from "com.mojang.serialization.DynamicOps"
import { $JigsawJunctionAccessor } from "com.craisinlord.integrated_api.mixins.structures.JigsawJunctionAccessor"

export class $JigsawJunction implements $JigsawJunctionAccessor {
constructor(int0: integer, int1: integer, int2: integer, int3: integer, projection4: $StructureTemplatePool$Projection$$Type)

public static "deserialize"<T>(dynamic0: $Dynamic$$Type<T>): $JigsawJunction
public "getDeltaY"(): integer
public "getDestProjection"(): $StructureTemplatePool$Projection
public "getSourceGroundY"(): integer
public "getSourceX"(): integer
public "getSourceZ"(): integer
public "serialize"<T>(dynamicOps0: $DynamicOps$$Type<T>): $Dynamic<T>
get "deltaY"(): integer
get "destProjection"(): $StructureTemplatePool$Projection
get "sourceGroundY"(): integer
get "sourceX"(): integer
get "sourceZ"(): integer
}
}

declare module "net.minecraft.world.level.levelgen.structure.pools.LegacySinglePoolElement" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder$$Type } from "net.minecraft.core.Holder"
import { $StructureTemplatePool$Projection$$Type } from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool$Projection"
import { $SinglePoolElement } from "net.minecraft.world.level.levelgen.structure.pools.SinglePoolElement"
import { $StructureTemplate$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate"
import { $StructureProcessorList$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorList"

export class $LegacySinglePoolElement extends $SinglePoolElement {
static readonly "CODEC": $Codec<$LegacySinglePoolElement>

constructor(either0: $Either$$Type<$ResourceLocation$$Type, $StructureTemplate$$Type>, holder1: $Holder$$Type<$StructureProcessorList$$Type>, projection2: $StructureTemplatePool$Projection$$Type)

}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.JigsawReplacementProcessor" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $StructureProcessor } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor"

export class $JigsawReplacementProcessor extends $StructureProcessor {
static readonly "CODEC": $Codec<$JigsawReplacementProcessor>
static readonly "INSTANCE": $JigsawReplacementProcessor

}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.PosAlwaysTrueTest" {
import { $PosRuleTest } from "net.minecraft.world.level.levelgen.structure.templatesystem.PosRuleTest"
import { $Codec } from "com.mojang.serialization.Codec"

export class $PosAlwaysTrueTest extends $PosRuleTest {
static readonly "CODEC": $Codec<$PosAlwaysTrueTest>
static readonly "INSTANCE": $PosAlwaysTrueTest

}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.TagMatchTest" {
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $RuleTest } from "net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest"

export class $TagMatchTest extends $RuleTest {
static readonly "CODEC": $Codec<$TagMatchTest>

constructor(tagKey0: $TagKey$$Type<$Block$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.LavaSubmergedBlockProcessor" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $StructureProcessor } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor"

export class $LavaSubmergedBlockProcessor extends $StructureProcessor {
static readonly "CODEC": $Codec<$LavaSubmergedBlockProcessor>
static readonly "INSTANCE": $LavaSubmergedBlockProcessor

constructor()

}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.PosRuleTest" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"

export class $PosRuleTest {
static readonly "CODEC": $Codec<$PosRuleTest>

constructor()

public "test"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type, randomSource3: $RandomSource$$Type): boolean
}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.CappedProcessor" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $StructureProcessor, $StructureProcessor$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor"

export class $CappedProcessor extends $StructureProcessor {
static readonly "CODEC": $Codec<$CappedProcessor>

constructor(structureProcessor0: $StructureProcessor$$Type, intProvider1: $IntProvider$$Type)

}
}

declare module "net.minecraft.world.level.levelgen.structure.pieces.StructurePieceType$ContextlessType" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $StructurePieceType } from "net.minecraft.world.level.levelgen.structure.pieces.StructurePieceType"
import { $StructurePiece } from "net.minecraft.world.level.levelgen.structure.StructurePiece"
import { $StructurePieceSerializationContext$$Type } from "net.minecraft.world.level.levelgen.structure.pieces.StructurePieceSerializationContext"

export interface $StructurePieceType$ContextlessType extends $StructurePieceType {
"load"(structurePieceSerializationContext0: $StructurePieceSerializationContext$$Type, compoundTag1: $CompoundTag$$Type): $StructurePiece
"load"(compoundTag0: $CompoundTag$$Type): $StructurePiece
}

export namespace $StructurePieceType$ContextlessType {
function setPieceId(contextlessType0: $StructurePieceType$ContextlessType$$Type, string1: string): $StructurePieceType
}
export abstract class $StructurePieceType$ContextlessType$$Static implements $StructurePieceType$ContextlessType {
static "setPieceId"(contextlessType0: $StructurePieceType$ContextlessType$$Type, string1: string): $StructurePieceType
}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.AppendLoot" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $RuleBlockEntityModifierType } from "net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.RuleBlockEntityModifierType"
import { $Codec } from "com.mojang.serialization.Codec"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $RuleBlockEntityModifier } from "net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.RuleBlockEntityModifier"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"

export class $AppendLoot implements $RuleBlockEntityModifier {
static readonly "CODEC": $Codec<$AppendLoot>

constructor(resourceLocation0: $ResourceLocation$$Type)

public "apply"(randomSource0: $RandomSource$$Type, compoundTag1: $CompoundTag$$Type): $CompoundTag
public "getType"(): $RuleBlockEntityModifierType<any>
get "type"(): $RuleBlockEntityModifierType<any>
}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.LinearPosTest" {
import { $PosRuleTest } from "net.minecraft.world.level.levelgen.structure.templatesystem.PosRuleTest"
import { $Codec } from "com.mojang.serialization.Codec"

export class $LinearPosTest extends $PosRuleTest {
static readonly "CODEC": $Codec<$LinearPosTest>

constructor(float0: float, float1: float, int2: integer, int3: integer)

}
}

declare module "net.minecraft.world.level.levelgen.structure.structures.OceanMonumentStructure" {
import { $Structure$GenerationContext$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $Structure } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Structure$StructureSettings$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"
import { $Optional } from "java.util.Optional"
import { $Structure$GenerationStub } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import { $PiecesContainer, $PiecesContainer$$Type } from "net.minecraft.world.level.levelgen.structure.pieces.PiecesContainer"

export class $OceanMonumentStructure extends $Structure {
static readonly "CODEC": $Codec<$OceanMonumentStructure>

constructor(structureSettings0: $Structure$StructureSettings$$Type)

public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
public static "regeneratePiecesAfterLoad"(chunkPos0: $ChunkPos$$Type, long1: long, piecesContainer2: $PiecesContainer$$Type): $PiecesContainer
}
}

declare module "net.minecraft.world.level.levelgen.structure.structures.BuriedTreasureStructure" {
import { $Structure$GenerationContext$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import { $Structure } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Structure$StructureSettings$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"
import { $Optional } from "java.util.Optional"
import { $Structure$GenerationStub } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"

export class $BuriedTreasureStructure extends $Structure {
static readonly "CODEC": $Codec<$BuriedTreasureStructure>

constructor(structureSettings0: $Structure$StructureSettings$$Type)

public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
}
}

declare module "net.minecraft.world.level.levelgen.structure.structures.MineshaftStructure$Type" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $MineshaftStructure$Type extends $Enum<$MineshaftStructure$Type> implements $StringRepresentable {
static readonly "CODEC": $Codec<$MineshaftStructure$Type>
static readonly "MESA": $MineshaftStructure$Type
static readonly "NORMAL": $MineshaftStructure$Type

public static "byId"(int0: integer): $MineshaftStructure$Type
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getFenceState"(): $BlockState
public "getName"(): string
public "getPlanksState"(): $BlockState
public "getSerializedName"(): string
public "getWoodState"(): $BlockState
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $MineshaftStructure$Type
public static "values"(): $MineshaftStructure$Type[]
get "fenceState"(): $BlockState
get "name"(): string
get "planksState"(): $BlockState
get "serializedName"(): string
get "woodState"(): $BlockState
}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $StructureTemplateManagerAccessor } from "com.craisinlord.integrated_api.mixins.structures.StructureTemplateManagerAccessor"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $HolderGetter$$Type } from "net.minecraft.core.HolderGetter"
import { $DataFixer$$Type } from "com.mojang.datafixers.DataFixer"
import { $Stream } from "java.util.stream.Stream"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $StructureTemplateManagerAccessor as $StructureTemplateManagerAccessor$0 } from "com.finndog.mes.mixins.structures.StructureTemplateManagerAccessor"
import { $StructureTemplate } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate"
import { $Optional } from "java.util.Optional"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $StructureTemplateManagerAccessor as $StructureTemplateManagerAccessor$1 } from "com.finndog.moogs_structures.mixins.structures.StructureTemplateManagerAccessor"
import { $Path, $Path$$Type } from "java.nio.file.Path"
import { $LevelStorageSource$LevelStorageAccess$$Type } from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"

export class $StructureTemplateManager implements $StructureTemplateManagerAccessor, $StructureTemplateManagerAccessor$1, $StructureTemplateManagerAccessor$0 {
constructor(resourceManager0: $ResourceManager$$Type, levelStorageAccess1: $LevelStorageSource$LevelStorageAccess$$Type, dataFixer2: $DataFixer$$Type, holderGetter3: $HolderGetter$$Type<$Block$$Type>)

public static "createPathToStructure"(path0: $Path$$Type, resourceLocation1: $ResourceLocation$$Type, string2: string): $Path
public "get"(resourceLocation0: $ResourceLocation$$Type): $Optional<$StructureTemplate>
public "getOrCreate"(resourceLocation0: $ResourceLocation$$Type): $StructureTemplate
public "getPathToGeneratedStructure"(resourceLocation0: $ResourceLocation$$Type, string1: string): $Path
public "listTemplates"(): $Stream<$ResourceLocation>
public "onResourceManagerReload"(resourceManager0: $ResourceManager$$Type): void
public "readStructure"(compoundTag0: $CompoundTag$$Type): $StructureTemplate
public "remove"(resourceLocation0: $ResourceLocation$$Type): void
public "save"(resourceLocation0: $ResourceLocation$$Type): boolean
}
}

declare module "net.minecraft.world.level.levelgen.structure.structures.NetherFortressStructure" {
import { $Structure$GenerationContext$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import { $Structure } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $Codec } from "com.mojang.serialization.Codec"
import { $MobSpawnSettings$SpawnerData } from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"
import { $WeightedRandomList } from "net.minecraft.util.random.WeightedRandomList"
import { $Structure$StructureSettings$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"
import { $Optional } from "java.util.Optional"
import { $Structure$GenerationStub } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"

export class $NetherFortressStructure extends $Structure {
static readonly "CODEC": $Codec<$NetherFortressStructure>
static readonly "FORTRESS_ENEMIES": $WeightedRandomList<$MobSpawnSettings$SpawnerData>

constructor(structureSettings0: $Structure$StructureSettings$$Type)

public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
}
}

declare module "net.minecraft.world.level.levelgen.structure.StructureStart" {
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $PiecesContainer$$Type } from "net.minecraft.world.level.levelgen.structure.pieces.PiecesContainer"
import { $StructurePieceSerializationContext$$Type } from "net.minecraft.world.level.levelgen.structure.pieces.StructurePieceSerializationContext"
import { $ChunkPos, $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $ChunkGenerator$$Type } from "net.minecraft.world.level.chunk.ChunkGenerator"
import { $Structure, $Structure$$Type } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $BoundingBox, $BoundingBox$$Type } from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import { $StructurePiece } from "net.minecraft.world.level.levelgen.structure.StructurePiece"
import { $StructureManager$$Type } from "net.minecraft.world.level.StructureManager"

export class $StructureStart {
static readonly "INVALID_START": $StructureStart
static readonly "INVALID_START_ID": string

constructor(structure0: $Structure$$Type, chunkPos1: $ChunkPos$$Type, int2: integer, piecesContainer3: $PiecesContainer$$Type)

public "addReference"(): void
public "canBeReferenced"(): boolean
public "createTag"(structurePieceSerializationContext0: $StructurePieceSerializationContext$$Type, chunkPos1: $ChunkPos$$Type): $CompoundTag
public "getBoundingBox"(): $BoundingBox
public "getChunkPos"(): $ChunkPos
public "getPieces"(): $List<$StructurePiece>
public "getReferences"(): integer
public "getStructure"(): $Structure
public "handler$cgo000$injectReference"(worldGenLevel0: $WorldGenLevel$$Type, structureManager1: $StructureManager$$Type, chunkGenerator2: $ChunkGenerator$$Type, randomSource3: $RandomSource$$Type, boundingBox4: $BoundingBox$$Type, chunkPos5: $ChunkPos$$Type, callbackInfo6: $CallbackInfo$$Type): void
public "handler$cgo000$resetReference"(worldGenLevel0: $WorldGenLevel$$Type, structureManager1: $StructureManager$$Type, chunkGenerator2: $ChunkGenerator$$Type, randomSource3: $RandomSource$$Type, boundingBox4: $BoundingBox$$Type, chunkPos5: $ChunkPos$$Type, callbackInfo6: $CallbackInfo$$Type): void
public "isValid"(): boolean
public static "loadStaticStart"(structurePieceSerializationContext0: $StructurePieceSerializationContext$$Type, compoundTag1: $CompoundTag$$Type, long2: long): $StructureStart
public "placeInChunk"(worldGenLevel0: $WorldGenLevel$$Type, structureManager1: $StructureManager$$Type, chunkGenerator2: $ChunkGenerator$$Type, randomSource3: $RandomSource$$Type, boundingBox4: $BoundingBox$$Type, chunkPos5: $ChunkPos$$Type): void
get "boundingBox"(): $BoundingBox
get "chunkPos"(): $ChunkPos
get "pieces"(): $List<$StructurePiece>
get "references"(): integer
get "structure"(): $Structure
get "valid"(): boolean
}
}

declare module "net.minecraft.world.level.levelgen.structure.StructureSpawnOverride$BoundingBoxType" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $StructureSpawnOverride$BoundingBoxType extends $Enum<$StructureSpawnOverride$BoundingBoxType> implements $StringRepresentable {
static readonly "CODEC": $Codec<$StructureSpawnOverride$BoundingBoxType>
static readonly "PIECE": $StructureSpawnOverride$BoundingBoxType
static readonly "STRUCTURE": $StructureSpawnOverride$BoundingBoxType

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $StructureSpawnOverride$BoundingBoxType
public static "values"(): $StructureSpawnOverride$BoundingBoxType[]
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.levelgen.structure.pieces.StructurePiecesBuilder" {
import { $StructurePieceAccessor } from "net.minecraft.world.level.levelgen.structure.StructurePieceAccessor"
import { $List, $List$$Type } from "java.util.List"
import { $BoundingBox, $BoundingBox$$Type } from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $StructurePiece, $StructurePiece$$Type } from "net.minecraft.world.level.levelgen.structure.StructurePiece"
import { $PiecesContainer } from "net.minecraft.world.level.levelgen.structure.pieces.PiecesContainer"

export class $StructurePiecesBuilder implements $StructurePieceAccessor {
constructor()

public "addPiece"(structurePiece0: $StructurePiece$$Type): void
public "build"(): $PiecesContainer
public "clear"(): void
public "findCollisionPiece"(boundingBox0: $BoundingBox$$Type): $StructurePiece
public "getBoundingBox"(): $BoundingBox
public "isEmpty"(): boolean
/** @deprecated */
public "moveBelowSeaLevel"(int0: integer, int1: integer, randomSource2: $RandomSource$$Type, int3: integer): integer
public "moveInsideHeights"(randomSource0: $RandomSource$$Type, int1: integer, int2: integer): void
/** @deprecated */
public "offsetPiecesVertically"(int0: integer): void
get "pieces"(): $List<$StructurePiece>
set "pieces"(value: $List$$Type<$StructurePiece$$Type>)
get "boundingBox"(): $BoundingBox
get "empty"(): boolean
}
}

declare module "net.minecraft.world.level.levelgen.structure.StructurePiece" {
import { $StructurePieceAccessor$$Type } from "net.minecraft.world.level.levelgen.structure.StructurePieceAccessor"
import { $StructurePieceAccessor as $StructurePieceAccessor$0 } from "com.finndog.mes.mixins.structures.StructurePieceAccessor"
import { $StructurePieceAccessor as $StructurePieceAccessor$1 } from "com.finndog.moogs_structures.mixins.structures.StructurePieceAccessor"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $StructurePieceSerializationContext$$Type } from "net.minecraft.world.level.levelgen.structure.pieces.StructurePieceSerializationContext"
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $ChunkGenerator$$Type } from "net.minecraft.world.level.chunk.ChunkGenerator"
import { $List$$Type } from "java.util.List"
import { $Rotation } from "net.minecraft.world.level.block.Rotation"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Stream$$Type } from "java.util.stream.Stream"
import { $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Mirror } from "net.minecraft.world.level.block.Mirror"
import { $BoundingBox, $BoundingBox$$Type } from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import { $StructurePieceType, $StructurePieceType$$Type } from "net.minecraft.world.level.levelgen.structure.pieces.StructurePieceType"
import { $StructureManager$$Type } from "net.minecraft.world.level.StructureManager"
import { $StructurePieceAccessor as $StructurePieceAccessor$2 } from "com.craisinlord.integrated_api.mixins.structures.StructurePieceAccessor"

export class $StructurePiece implements $StructurePieceAccessor$2, $StructurePieceAccessor$1, $StructurePieceAccessor$0 {
constructor(structurePieceType0: $StructurePieceType$$Type, compoundTag1: $CompoundTag$$Type)

public "addChildren"(structurePiece0: $StructurePiece$$Type, structurePieceAccessor1: $StructurePieceAccessor$$Type, randomSource2: $RandomSource$$Type): void
public static "createBoundingBox"(stream0: $Stream$$Type<$StructurePiece$$Type>): $BoundingBox
public "createTag"(structurePieceSerializationContext0: $StructurePieceSerializationContext$$Type): $CompoundTag
public static "findCollisionPiece"(list0: $List$$Type<$StructurePiece$$Type>, boundingBox1: $BoundingBox$$Type): $StructurePiece
public "generateBox"(worldGenLevel0: $WorldGenLevel$$Type, boundingBox1: $BoundingBox$$Type, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, blockState8: $BlockState$$Type, blockState9: $BlockState$$Type, boolean10: boolean): void
public "getBoundingBox"(): $BoundingBox
public "getGenDepth"(): integer
public "getLocatorPosition"(): $BlockPos
public "getMirror"(): $Mirror
public "getOrientation"(): $Direction
public "getRotation"(): $Rotation
public "getType"(): $StructurePieceType
public "isCloseToChunk"(chunkPos0: $ChunkPos$$Type, int1: integer): boolean
public "move"(int0: integer, int1: integer, int2: integer): void
public "postProcess"(worldGenLevel0: $WorldGenLevel$$Type, structureManager1: $StructureManager$$Type, chunkGenerator2: $ChunkGenerator$$Type, randomSource3: $RandomSource$$Type, boundingBox4: $BoundingBox$$Type, chunkPos5: $ChunkPos$$Type, blockPos6: $BlockPos$$Type): void
public static "reorient"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $BlockState
public "setGenDepth"(int0: integer): void
public "setOrientation"(direction0: $Direction$$Type): void
get "type"(): $StructurePieceType
set "type"(value: $StructurePieceType$$Type)
get "boundingBox"(): $BoundingBox
get "genDepth"(): integer
get "locatorPosition"(): $BlockPos
get "mirror"(): $Mirror
get "orientation"(): $Direction
get "rotation"(): $Rotation
set "genDepth"(value: integer)
set "orientation"(value: $Direction$$Type)
}
}

declare module "net.minecraft.world.level.levelgen.structure.structures.IglooStructure" {
import { $Structure$GenerationContext$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import { $Structure } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Structure$StructureSettings$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"
import { $Optional } from "java.util.Optional"
import { $Structure$GenerationStub } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"

export class $IglooStructure extends $Structure {
static readonly "CODEC": $Codec<$IglooStructure>

constructor(structureSettings0: $Structure$StructureSettings$$Type)

public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
}
}

declare module "net.minecraft.world.level.levelgen.structure.structures.SwampHutStructure" {
import { $Structure$GenerationContext$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import { $Structure } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Structure$StructureSettings$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"
import { $Optional } from "java.util.Optional"
import { $Structure$GenerationStub } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"

export class $SwampHutStructure extends $Structure {
static readonly "CODEC": $Codec<$SwampHutStructure>

constructor(structureSettings0: $Structure$StructureSettings$$Type)

public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.RandomBlockMatchTest" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $RuleTest } from "net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest"

export class $RandomBlockMatchTest extends $RuleTest {
static readonly "CODEC": $Codec<$RandomBlockMatchTest>

constructor(block0: $Block$$Type, float1: float)

}
}

declare module "net.minecraft.world.level.levelgen.structure.pieces.PiecesContainer" {
import { $List, $List$$Type } from "java.util.List"
import { $Tag } from "net.minecraft.nbt.Tag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BoundingBox } from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import { $Record } from "java.lang.Record"
import { $StructurePiece, $StructurePiece$$Type } from "net.minecraft.world.level.levelgen.structure.StructurePiece"
import { $ListTag$$Type } from "net.minecraft.nbt.ListTag"
import { $StructurePieceSerializationContext$$Type } from "net.minecraft.world.level.levelgen.structure.pieces.StructurePieceSerializationContext"

export class $PiecesContainer extends $Record {
constructor(list0: $List$$Type<$StructurePiece$$Type>)

public "calculateBoundingBox"(): $BoundingBox
public "isEmpty"(): boolean
public "isInsidePiece"(blockPos0: $BlockPos$$Type): boolean
public static "load"(listTag0: $ListTag$$Type, structurePieceSerializationContext1: $StructurePieceSerializationContext$$Type): $PiecesContainer
public "pieces"(): $List<$StructurePiece>
public "save"(structurePieceSerializationContext0: $StructurePieceSerializationContext$$Type): $Tag
get "empty"(): boolean
}
}

declare module "net.minecraft.world.level.levelgen.structure.structures.EndCityStructure" {
import { $Structure$GenerationContext$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import { $Structure } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Structure$StructureSettings$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"
import { $Optional } from "java.util.Optional"
import { $Structure$GenerationStub } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"

export class $EndCityStructure extends $Structure {
static readonly "CODEC": $Codec<$EndCityStructure>

constructor(structureSettings0: $Structure$StructureSettings$$Type)

public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureBlockInfo" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Record } from "java.lang.Record"

export class $StructureTemplate$StructureBlockInfo extends $Record {
readonly "state": $BlockState

constructor(pos: $BlockPos$$Type, state: $BlockState$$Type, nbt: $CompoundTag$$Type)

public "nbt"(): $CompoundTag
public "pos"(): $BlockPos
public "state"(): $BlockState
}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.AlwaysTrueTest" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $RuleTest } from "net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest"

export class $AlwaysTrueTest extends $RuleTest {
static readonly "CODEC": $Codec<$AlwaysTrueTest>
static readonly "INSTANCE": $AlwaysTrueTest

}
}

declare module "net.minecraft.world.level.levelgen.structure.structures.NetherFossilStructure" {
import { $Structure$GenerationContext$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import { $Structure } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Structure$StructureSettings$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"
import { $Optional } from "java.util.Optional"
import { $Structure$GenerationStub } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import { $HeightProvider, $HeightProvider$$Type } from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"

export class $NetherFossilStructure extends $Structure {
static readonly "CODEC": $Codec<$NetherFossilStructure>
readonly "height": $HeightProvider

constructor(structureSettings0: $Structure$StructureSettings$$Type, heightProvider1: $HeightProvider$$Type)

public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
}
}

declare module "net.minecraft.world.level.levelgen.structure.PoolElementStructurePiece" {
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $StructurePieceSerializationContext$$Type } from "net.minecraft.world.level.levelgen.structure.pieces.StructurePieceSerializationContext"
import { $PoolElementStructurePieceAccessor } from "com.craisinlord.integrated_api.mixins.structures.PoolElementStructurePieceAccessor"
import { $PoolElementStructurePieceAccessor as $PoolElementStructurePieceAccessor$0 } from "com.finndog.mes.mixins.structures.PoolElementStructurePieceAccessor"
import { $ChunkGenerator$$Type } from "net.minecraft.world.level.chunk.ChunkGenerator"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $List } from "java.util.List"
import { $StructureTemplateManager, $StructureTemplateManager$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $JigsawJunction, $JigsawJunction$$Type } from "net.minecraft.world.level.levelgen.structure.pools.JigsawJunction"
import { $PoolElementStructurePieceAccessor as $PoolElementStructurePieceAccessor$1 } from "com.finndog.moogs_structures.mixins.structures.PoolElementStructurePieceAccessor"
import { $BoundingBox$$Type } from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import { $StructureManager$$Type } from "net.minecraft.world.level.StructureManager"
import { $StructurePiece } from "net.minecraft.world.level.levelgen.structure.StructurePiece"
import { $StructurePoolElement, $StructurePoolElement$$Type } from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

export class $PoolElementStructurePiece extends $StructurePiece implements $PoolElementStructurePieceAccessor, $PoolElementStructurePieceAccessor$1, $PoolElementStructurePieceAccessor$0 {
readonly "structureTemplateManager": $StructureTemplateManager

constructor(structurePieceSerializationContext0: $StructurePieceSerializationContext$$Type, compoundTag1: $CompoundTag$$Type)
constructor(structureTemplateManager0: $StructureTemplateManager$$Type, structurePoolElement1: $StructurePoolElement$$Type, blockPos2: $BlockPos$$Type, int3: integer, rotation4: $Rotation$$Type, boundingBox5: $BoundingBox$$Type)

public "addJunction"(jigsawJunction0: $JigsawJunction$$Type): void
public "getElement"(): $StructurePoolElement
public "getGroundLevelDelta"(): integer
public "getJunctions"(): $List<$JigsawJunction>
public "getPosition"(): $BlockPos
public "place"(worldGenLevel0: $WorldGenLevel$$Type, structureManager1: $StructureManager$$Type, chunkGenerator2: $ChunkGenerator$$Type, randomSource3: $RandomSource$$Type, boundingBox4: $BoundingBox$$Type, blockPos5: $BlockPos$$Type, boolean6: boolean): void
get "element"(): $StructurePoolElement
get "groundLevelDelta"(): integer
get "junctions"(): $List<$JigsawJunction>
get "position"(): $BlockPos
}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.StructurePlaceSettings" {
import { $IModifyState, $IModifyState$$Type } from "com.legacy.structure_gel.api.structure.base.IModifyState"
import { $List, $List$$Type } from "java.util.List"
import { $StructureTemplate$Palette, $StructureTemplate$Palette$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$Palette"
import { $Rotation, $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $Mirror, $Mirror$$Type } from "net.minecraft.world.level.block.Mirror"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $StructureProcessor, $StructureProcessor$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor"
import { $BoundingBox, $BoundingBox$$Type } from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import { $RandomSource, $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $StructureSettingsData } from "com.legacy.structure_gel.core.capability.misc.StructureSettingsData"

export class $StructurePlaceSettings implements $StructureSettingsData {
constructor()

public "addProcessor"(structureProcessor0: $StructureProcessor$$Type): $StructurePlaceSettings
public "clearProcessors"(): $StructurePlaceSettings
public "copy"(): $StructurePlaceSettings
public "getBoundingBox"(): $BoundingBox
public "getKnownShape"(): boolean
public "getMirror"(): $Mirror
public "getProcessors"(): $List<$StructureProcessor>
public "getRandom"(blockPos0: $BlockPos$$Type): $RandomSource
public "getRandomPalette"(list0: $List$$Type<$StructureTemplate$Palette$$Type>, blockPos1: $BlockPos$$Type): $StructureTemplate$Palette
public "getRotation"(): $Rotation
public "getRotationPivot"(): $BlockPos
public "isIgnoreEntities"(): boolean
public "popProcessor"(structureProcessor0: $StructureProcessor$$Type): $StructurePlaceSettings
public "setBoundingBox"(boundingBox0: $BoundingBox$$Type): $StructurePlaceSettings
public "setFinalizeEntities"(boolean0: boolean): $StructurePlaceSettings
public "setIgnoreEntities"(boolean0: boolean): $StructurePlaceSettings
public "setKeepLiquids"(boolean0: boolean): $StructurePlaceSettings
public "setKnownShape"(boolean0: boolean): $StructurePlaceSettings
public "setMirror"(mirror0: $Mirror$$Type): $StructurePlaceSettings
public "setRandom"(randomSource0: $RandomSource$$Type): $StructurePlaceSettings
public "setRotation"(rotation0: $Rotation$$Type): $StructurePlaceSettings
public "setRotationPivot"(blockPos0: $BlockPos$$Type): $StructurePlaceSettings
public "shouldFinalizeEntities"(): boolean
public "shouldKeepLiquids"(): boolean
public "structure_gel$getStateModifier"(): $IModifyState
public "structure_gel$isNatural"(): boolean
public "structure_gel$setNatural"(boolean0: boolean): void
public "structure_gel$setStateModifier"(iModifyState0: $IModifyState$$Type): void
get "boundingBox"(): $BoundingBox
get "knownShape"(): boolean
get "mirror"(): $Mirror
get "processors"(): $List<$StructureProcessor>
get "rotation"(): $Rotation
get "rotationPivot"(): $BlockPos
get "ignoreEntities"(): boolean
set "boundingBox"(value: $BoundingBox$$Type)
set "finalizeEntities"(value: boolean)
set "ignoreEntities"(value: boolean)
set "keepLiquids"(value: boolean)
set "knownShape"(value: boolean)
set "mirror"(value: $Mirror$$Type)
set "random"(value: $RandomSource$$Type)
set "rotation"(value: $Rotation$$Type)
set "rotationPivot"(value: $BlockPos$$Type)
}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.RandomBlockStateMatchTest" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RuleTest } from "net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest"

export class $RandomBlockStateMatchTest extends $RuleTest {
static readonly "CODEC": $Codec<$RandomBlockStateMatchTest>

constructor(blockState0: $BlockState$$Type, float1: float)

}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.BlockAgeProcessor" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $StructureProcessor } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor"

export class $BlockAgeProcessor extends $StructureProcessor {
static readonly "CODEC": $Codec<$BlockAgeProcessor>

constructor(float0: float)

}
}

declare module "net.minecraft.world.level.levelgen.structure.placement.RandomSpreadStructurePlacement" {
import { $ChunkPos } from "net.minecraft.world.level.ChunkPos"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $StructurePlacement$FrequencyReductionMethod$$Type } from "net.minecraft.world.level.levelgen.structure.placement.StructurePlacement$FrequencyReductionMethod"
import { $StructurePlacement } from "net.minecraft.world.level.levelgen.structure.placement.StructurePlacement"
import { $Optional$$Type } from "java.util.Optional"
import { $StructurePlacement$ExclusionZone$$Type } from "net.minecraft.world.level.levelgen.structure.placement.StructurePlacement$ExclusionZone"
import { $RandomSpreadType, $RandomSpreadType$$Type } from "net.minecraft.world.level.levelgen.structure.placement.RandomSpreadType"

export class $RandomSpreadStructurePlacement extends $StructurePlacement {
static readonly "CODEC": $Codec<$RandomSpreadStructurePlacement>

constructor(int0: integer, int1: integer, randomSpreadType2: $RandomSpreadType$$Type, int3: integer)
constructor(vec3i0: $Vec3i$$Type, frequencyReductionMethod1: $StructurePlacement$FrequencyReductionMethod$$Type, float2: float, int3: integer, optional4: $Optional$$Type<$StructurePlacement$ExclusionZone$$Type>, int5: integer, int6: integer, randomSpreadType7: $RandomSpreadType$$Type)

public "getPotentialStructureChunk"(long0: long, int1: integer, int2: integer): $ChunkPos
public "separation"(): integer
public "spacing"(): integer
public "spreadType"(): $RandomSpreadType
}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.NopProcessor" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $StructureProcessor } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor"

export class $NopProcessor extends $StructureProcessor {
static readonly "CODEC": $Codec<$NopProcessor>
static readonly "INSTANCE": $NopProcessor

}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.BlockStateMatchTest" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RuleTest } from "net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest"

export class $BlockStateMatchTest extends $RuleTest {
static readonly "CODEC": $Codec<$BlockStateMatchTest>

constructor(blockState0: $BlockState$$Type)

}
}

declare module "net.minecraft.world.level.levelgen.structure.pools.EmptyPoolElement" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $StructurePoolElement } from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

export class $EmptyPoolElement extends $StructurePoolElement {
static readonly "CODEC": $Codec<$EmptyPoolElement>
static readonly "INSTANCE": $EmptyPoolElement

}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.AppendStatic" {
import { $RuleBlockEntityModifierType } from "net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.RuleBlockEntityModifierType"
import { $Codec } from "com.mojang.serialization.Codec"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $RuleBlockEntityModifier } from "net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.RuleBlockEntityModifier"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"

export class $AppendStatic implements $RuleBlockEntityModifier {
static readonly "CODEC": $Codec<$AppendStatic>

constructor(compoundTag0: $CompoundTag$$Type)

public "apply"(randomSource0: $RandomSource$$Type, compoundTag1: $CompoundTag$$Type): $CompoundTag
public "getType"(): $RuleBlockEntityModifierType<any>
get "type"(): $RuleBlockEntityModifierType<any>
}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.AxisAlignedLinearPosTest" {
import { $PosRuleTest } from "net.minecraft.world.level.levelgen.structure.templatesystem.PosRuleTest"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Direction$Axis$$Type } from "net.minecraft.core.Direction$Axis"

export class $AxisAlignedLinearPosTest extends $PosRuleTest {
static readonly "CODEC": $Codec<$AxisAlignedLinearPosTest>

constructor(float0: float, float1: float, int2: integer, int3: integer, axis4: $Direction$Axis$$Type)

}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.BlackstoneReplaceProcessor" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $StructureProcessor } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor"

export class $BlackstoneReplaceProcessor extends $StructureProcessor {
static readonly "CODEC": $Codec<$BlackstoneReplaceProcessor>
static readonly "INSTANCE": $BlackstoneReplaceProcessor

}
}

declare module "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub" {
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $Either, $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $StructurePiecesBuilder, $StructurePiecesBuilder$$Type } from "net.minecraft.world.level.levelgen.structure.pieces.StructurePiecesBuilder"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Record } from "java.lang.Record"

export class $Structure$GenerationStub extends $Record {
constructor(blockPos0: $BlockPos$$Type, consumer1: $Consumer$$Type<$StructurePiecesBuilder$$Type>)
constructor(position: $BlockPos$$Type, generator: $Either$$Type<$Consumer$$Type<$StructurePiecesBuilder$$Type>, $StructurePiecesBuilder$$Type>)

public "generator"(): $Either<$Consumer<$StructurePiecesBuilder>, $StructurePiecesBuilder>
public "getPiecesBuilder"(): $StructurePiecesBuilder
public "position"(): $BlockPos
get "piecesBuilder"(): $StructurePiecesBuilder
}
}

declare module "net.minecraft.world.level.levelgen.structure.placement.StructurePlacement$ExclusionZone" {
import { $StructureSet, $StructureSet$$Type } from "net.minecraft.world.level.levelgen.structure.StructureSet"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Record } from "java.lang.Record"

/** @deprecated */
export class $StructurePlacement$ExclusionZone extends $Record {
static readonly "CODEC": $Codec<$StructurePlacement$ExclusionZone>

constructor(holder0: $Holder$$Type<$StructureSet$$Type>, int1: integer)

public "chunkCount"(): integer
public "otherSet"(): $Holder<$StructureSet>
}
}

declare module "net.minecraft.world.level.levelgen.structure.structures.OceanRuinStructure$Type" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $OceanRuinStructure$Type extends $Enum<$OceanRuinStructure$Type> implements $StringRepresentable {
static readonly "CODEC": $Codec<$OceanRuinStructure$Type>
static readonly "COLD": $OceanRuinStructure$Type
static readonly "WARM": $OceanRuinStructure$Type

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getName"(): string
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $OceanRuinStructure$Type
public static "values"(): $OceanRuinStructure$Type[]
get "name"(): string
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.ProcessorRule" {
import { $PosRuleTest$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.PosRuleTest"
import { $Passthrough } from "net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.Passthrough"
import { $Codec } from "com.mojang.serialization.Codec"
import { $RuleBlockEntityModifier$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.RuleBlockEntityModifier"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $RuleTest$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest"

export class $ProcessorRule {
static readonly "CODEC": $Codec<$ProcessorRule>
static readonly "DEFAULT_BLOCK_ENTITY_MODIFIER": $Passthrough

constructor(ruleTest0: $RuleTest$$Type, ruleTest1: $RuleTest$$Type, posRuleTest2: $PosRuleTest$$Type, blockState3: $BlockState$$Type)
constructor(ruleTest0: $RuleTest$$Type, ruleTest1: $RuleTest$$Type, posRuleTest2: $PosRuleTest$$Type, blockState3: $BlockState$$Type, ruleBlockEntityModifier4: $RuleBlockEntityModifier$$Type)
constructor(ruleTest0: $RuleTest$$Type, ruleTest1: $RuleTest$$Type, blockState2: $BlockState$$Type)

public "getOutputState"(): $BlockState
public "getOutputTag"(randomSource0: $RandomSource$$Type, compoundTag1: $CompoundTag$$Type): $CompoundTag
public "test"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type, blockPos4: $BlockPos$$Type, randomSource5: $RandomSource$$Type): boolean
get "outputState"(): $BlockState
}
}

declare module "net.minecraft.world.level.levelgen.structure.structures.JungleTempleStructure" {
import { $SinglePieceStructure } from "net.minecraft.world.level.levelgen.structure.SinglePieceStructure"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Structure$StructureSettings$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $JungleTempleStructure extends $SinglePieceStructure {
static readonly "CODEC": $Codec<$JungleTempleStructure>

constructor(structureSettings0: $Structure$StructureSettings$$Type)

}
}

declare module "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement" {
import { $LegacySinglePoolElement } from "net.minecraft.world.level.levelgen.structure.pools.LegacySinglePoolElement"
import { $ListPoolElement } from "net.minecraft.world.level.levelgen.structure.pools.ListPoolElement"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $StructureProcessorList$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorList"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $Holder$$Type } from "net.minecraft.core.Holder"
import { $StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureBlockInfo"
import { $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $StructurePoolElementType } from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElementType"
import { $SinglePoolElement } from "net.minecraft.world.level.levelgen.structure.pools.SinglePoolElement"
import { $Vec3i } from "net.minecraft.core.Vec3i"
import { $FeaturePoolElement } from "net.minecraft.world.level.levelgen.structure.pools.FeaturePoolElement"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $ChunkGenerator$$Type } from "net.minecraft.world.level.chunk.ChunkGenerator"
import { $List, $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $StructureTemplateManager$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import { $StructureTemplatePool$Projection, $StructureTemplatePool$Projection$$Type } from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool$Projection"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $PlacedFeature$$Type } from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import { $BoundingBox, $BoundingBox$$Type } from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $StructureManager$$Type } from "net.minecraft.world.level.StructureManager"
import { $EmptyPoolElement } from "net.minecraft.world.level.levelgen.structure.pools.EmptyPoolElement"

export class $StructurePoolElement {
static readonly "CODEC": $Codec<$StructurePoolElement>

public static "empty"(): $Function<$StructureTemplatePool$Projection, $EmptyPoolElement>
public static "feature"(holder0: $Holder$$Type<$PlacedFeature$$Type>): $Function<$StructureTemplatePool$Projection, $FeaturePoolElement>
public "getBoundingBox"(structureTemplateManager0: $StructureTemplateManager$$Type, blockPos1: $BlockPos$$Type, rotation2: $Rotation$$Type): $BoundingBox
public "getGroundLevelDelta"(): integer
public "getProjection"(): $StructureTemplatePool$Projection
public "getShuffledJigsawBlocks"(structureTemplateManager0: $StructureTemplateManager$$Type, blockPos1: $BlockPos$$Type, rotation2: $Rotation$$Type, randomSource3: $RandomSource$$Type): $List<$StructureTemplate$StructureBlockInfo>
public "getSize"(structureTemplateManager0: $StructureTemplateManager$$Type, rotation1: $Rotation$$Type): $Vec3i
public "getType"(): $StructurePoolElementType<any>
public "handleDataMarker"(levelAccessor0: $LevelAccessor$$Type, structureBlockInfo1: $StructureTemplate$StructureBlockInfo$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type, randomSource4: $RandomSource$$Type, boundingBox5: $BoundingBox$$Type): void
public static "legacy"(string0: string): $Function<$StructureTemplatePool$Projection, $LegacySinglePoolElement>
public static "legacy"(string0: string, holder1: $Holder$$Type<$StructureProcessorList$$Type>): $Function<$StructureTemplatePool$Projection, $LegacySinglePoolElement>
public static "list"(list0: $List$$Type<$Function$$Type<$StructureTemplatePool$Projection$$Type, $StructurePoolElement$$Type>>): $Function<$StructureTemplatePool$Projection, $ListPoolElement>
public "place"(structureTemplateManager0: $StructureTemplateManager$$Type, worldGenLevel1: $WorldGenLevel$$Type, structureManager2: $StructureManager$$Type, chunkGenerator3: $ChunkGenerator$$Type, blockPos4: $BlockPos$$Type, blockPos5: $BlockPos$$Type, rotation6: $Rotation$$Type, boundingBox7: $BoundingBox$$Type, randomSource8: $RandomSource$$Type, boolean9: boolean): boolean
public "setProjection"(projection0: $StructureTemplatePool$Projection$$Type): $StructurePoolElement
public static "single"(string0: string): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>
public static "single"(string0: string, holder1: $Holder$$Type<$StructureProcessorList$$Type>): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>
get "groundLevelDelta"(): integer
get "projection"(): $StructureTemplatePool$Projection
get "type"(): $StructurePoolElementType<any>
set "projection"(value: $StructureTemplatePool$Projection$$Type)
}
}

declare module "net.minecraft.world.level.levelgen.structure.structures.RuinedPortalStructure" {
import { $Structure$GenerationContext$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import { $Structure } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Structure$StructureSettings$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"
import { $Optional } from "java.util.Optional"
import { $Structure$GenerationStub } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import { $RuinedPortalStructure$Setup$$Type } from "net.minecraft.world.level.levelgen.structure.structures.RuinedPortalStructure$Setup"

export class $RuinedPortalStructure extends $Structure {
static readonly "CODEC": $Codec<$RuinedPortalStructure>

constructor(structureSettings0: $Structure$StructureSettings$$Type, list1: $List$$Type<$RuinedPortalStructure$Setup$$Type>)
constructor(structureSettings0: $Structure$StructureSettings$$Type, setup1: $RuinedPortalStructure$Setup$$Type)

public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.Clear" {
import { $RuleBlockEntityModifierType } from "net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.RuleBlockEntityModifierType"
import { $Codec } from "com.mojang.serialization.Codec"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $RuleBlockEntityModifier } from "net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.RuleBlockEntityModifier"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"

export class $Clear implements $RuleBlockEntityModifier {
static readonly "CODEC": $Codec<$Clear>

constructor()

public "apply"(randomSource0: $RandomSource$$Type, compoundTag1: $CompoundTag$$Type): $CompoundTag
public "getType"(): $RuleBlockEntityModifierType<any>
get "type"(): $RuleBlockEntityModifierType<any>
}
}

declare module "net.minecraft.world.level.levelgen.structure.structures.RuinedPortalStructure$Setup" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Record } from "java.lang.Record"
import { $RuinedPortalPiece$VerticalPlacement, $RuinedPortalPiece$VerticalPlacement$$Type } from "net.minecraft.world.level.levelgen.structure.structures.RuinedPortalPiece$VerticalPlacement"

export class $RuinedPortalStructure$Setup extends $Record {
static readonly "CODEC": $Codec<$RuinedPortalStructure$Setup>

constructor(verticalPlacement0: $RuinedPortalPiece$VerticalPlacement$$Type, float1: float, float2: float, boolean3: boolean, boolean4: boolean, boolean5: boolean, boolean6: boolean, float7: float)

public "airPocketProbability"(): float
public "canBeCold"(): boolean
public "mossiness"(): float
public "overgrown"(): boolean
public "placement"(): $RuinedPortalPiece$VerticalPlacement
public "replaceWithBlackstone"(): boolean
public "vines"(): boolean
public "weight"(): float
}
}

declare module "net.minecraft.world.level.levelgen.structure.StructurePieceAccessor" {
import { $BoundingBox$$Type } from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import { $StructurePiece, $StructurePiece$$Type } from "net.minecraft.world.level.levelgen.structure.StructurePiece"

export interface $StructurePieceAccessor {
"addPiece"(structurePiece0: $StructurePiece$$Type): void
"findCollisionPiece"(boundingBox0: $BoundingBox$$Type): $StructurePiece
}

export namespace $StructurePieceAccessor {
const probejs$$marker: never
}
export abstract class $StructurePieceAccessor$$Static implements $StructurePieceAccessor {
}
}

declare module "net.minecraft.world.level.levelgen.structure.pools.ListPoolElement" {
import { $ListPoolElementAccessor } from "com.github.L_Ender.cataclysm.mixin.accessor.ListPoolElementAccessor"
import { $List, $List$$Type } from "java.util.List"
import { $ListPoolElementAccessor as $ListPoolElementAccessor$0 } from "com.finndog.moogs_structures.mixins.structures.ListPoolElementAccessor"
import { $Codec } from "com.mojang.serialization.Codec"
import { $StructureTemplatePool$Projection$$Type } from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool$Projection"
import { $ListPoolElementAccessor as $ListPoolElementAccessor$1 } from "com.craisinlord.integrated_api.mixins.structures.ListPoolElementAccessor"
import { $ListPoolElementAccessor as $ListPoolElementAccessor$2 } from "com.finndog.mes.mixins.structures.ListPoolElementAccessor"
import { $StructurePoolElement, $StructurePoolElement$$Type } from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

export class $ListPoolElement extends $StructurePoolElement implements $ListPoolElementAccessor$1, $ListPoolElementAccessor, $ListPoolElementAccessor$0, $ListPoolElementAccessor$2 {
static readonly "CODEC": $Codec<$ListPoolElement>

constructor(list0: $List$$Type<$StructurePoolElement$$Type>, projection1: $StructureTemplatePool$Projection$$Type)

get "elements"(): $List<$StructurePoolElement>
set "elements"(value: $List$$Type<$StructurePoolElement$$Type>)
}
}

declare module "net.minecraft.world.level.levelgen.structure.placement.ConcentricRingsStructurePlacement" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $StructurePlacement$FrequencyReductionMethod$$Type } from "net.minecraft.world.level.levelgen.structure.placement.StructurePlacement$FrequencyReductionMethod"
import { $HolderSet, $HolderSet$$Type } from "net.minecraft.core.HolderSet"
import { $StructurePlacement } from "net.minecraft.world.level.levelgen.structure.placement.StructurePlacement"
import { $Optional$$Type } from "java.util.Optional"
import { $StructurePlacement$ExclusionZone$$Type } from "net.minecraft.world.level.levelgen.structure.placement.StructurePlacement$ExclusionZone"
import { $Biome, $Biome$$Type } from "net.minecraft.world.level.biome.Biome"

export class $ConcentricRingsStructurePlacement extends $StructurePlacement {
static readonly "CODEC": $Codec<$ConcentricRingsStructurePlacement>

constructor(vec3i0: $Vec3i$$Type, frequencyReductionMethod1: $StructurePlacement$FrequencyReductionMethod$$Type, float2: float, int3: integer, optional4: $Optional$$Type<$StructurePlacement$ExclusionZone$$Type>, int5: integer, int6: integer, int7: integer, holderSet8: $HolderSet$$Type<$Biome$$Type>)
constructor(int0: integer, int1: integer, int2: integer, holderSet3: $HolderSet$$Type<$Biome$$Type>)

public "count"(): integer
public "distance"(): integer
public "preferredBiomes"(): $HolderSet<$Biome>
public "spread"(): integer
}
}

declare module "net.minecraft.world.level.levelgen.structure.StructureSet$StructureSelectionEntry" {
import { $Structure, $Structure$$Type } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Record } from "java.lang.Record"

export class $StructureSet$StructureSelectionEntry extends $Record {
static readonly "CODEC": $Codec<$StructureSet$StructureSelectionEntry>

constructor(holder0: $Holder$$Type<$Structure$$Type>, int1: integer)

public "structure"(): $Holder<$Structure>
public "weight"(): integer
}
}

declare module "net.minecraft.world.level.levelgen.structure.BoundingBox" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Codec } from "com.mojang.serialization.Codec"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3i, $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Optional } from "java.util.Optional"
import { $BoundingBoxAccessor } from "com.github.L_Ender.cataclysm.mixin.accessor.BoundingBoxAccessor"
import { $Iterable$$Type } from "java.lang.Iterable"

export class $BoundingBox implements $BoundingBoxAccessor {
static readonly "CODEC": $Codec<$BoundingBox>
"minY": integer

constructor(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer)
constructor(blockPos0: $BlockPos$$Type)

/** @deprecated */
public "encapsulate"(blockPos0: $BlockPos$$Type): $BoundingBox
/** @deprecated */
public "encapsulate"(boundingBox0: $BoundingBox$$Type): $BoundingBox
public static "encapsulatingBoxes"(iterable0: $Iterable$$Type<$BoundingBox$$Type>): $Optional<$BoundingBox>
public static "encapsulatingPositions"(iterable0: $Iterable$$Type<$BlockPos$$Type>): $Optional<$BoundingBox>
public "forAllCorners"(consumer0: $Consumer$$Type<$BlockPos$$Type>): void
public static "fromCorners"(vec3i0: $Vec3i$$Type, vec3i1: $Vec3i$$Type): $BoundingBox
public "getCenter"(): $BlockPos
public "getLength"(): $Vec3i
public "getXSpan"(): integer
public "getYSpan"(): integer
public "getZSpan"(): integer
public static "infinite"(): $BoundingBox
public "inflatedBy"(int0: integer): $BoundingBox
public "intersects"(int0: integer, int1: integer, int2: integer, int3: integer): boolean
public "intersects"(boundingBox0: $BoundingBox$$Type): boolean
public "isInside"(int0: integer, int1: integer, int2: integer): boolean
public "isInside"(vec3i0: $Vec3i$$Type): boolean
public "maxX"(): integer
public "maxY"(): integer
public "maxZ"(): integer
public "minX"(): integer
public "minY"(): integer
public "minZ"(): integer
/** @deprecated */
public "move"(int0: integer, int1: integer, int2: integer): $BoundingBox
/** @deprecated */
public "move"(vec3i0: $Vec3i$$Type): $BoundingBox
public "moved"(int0: integer, int1: integer, int2: integer): $BoundingBox
public static "orientBox"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, direction9: $Direction$$Type): $BoundingBox
get "center"(): $BlockPos
get "length"(): $Vec3i
get "xSpan"(): integer
get "ySpan"(): integer
get "zSpan"(): integer
}
}

declare module "net.minecraft.world.level.levelgen.structure.placement.StructurePlacement" {
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $Codec } from "com.mojang.serialization.Codec"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $StructurePlacementType } from "net.minecraft.world.level.levelgen.structure.placement.StructurePlacementType"
import { $ChunkGeneratorStructureState$$Type } from "net.minecraft.world.level.chunk.ChunkGeneratorStructureState"

export class $StructurePlacement {
static readonly "CODEC": $Codec<$StructurePlacement>

public "getLocatePos"(chunkPos0: $ChunkPos$$Type): $BlockPos
public "isStructureChunk"(chunkGeneratorStructureState0: $ChunkGeneratorStructureState$$Type, int1: integer, int2: integer): boolean
public "salt"(): integer
public "type"(): $StructurePlacementType<any>
}
}

declare module "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings" {
import { $MobCategory, $MobCategory$$Type } from "net.minecraft.world.entity.MobCategory"
import { $HolderSet, $HolderSet$$Type } from "net.minecraft.core.HolderSet"
import { $Map, $Map$$Type } from "java.util.Map"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $Record } from "java.lang.Record"
import { $Biome, $Biome$$Type } from "net.minecraft.world.level.biome.Biome"
import { $StructureSpawnOverride, $StructureSpawnOverride$$Type } from "net.minecraft.world.level.levelgen.structure.StructureSpawnOverride"
import { $GenerationStep$Decoration, $GenerationStep$Decoration$$Type } from "net.minecraft.world.level.levelgen.GenerationStep$Decoration"
import { $TerrainAdjustment, $TerrainAdjustment$$Type } from "net.minecraft.world.level.levelgen.structure.TerrainAdjustment"

export class $Structure$StructureSettings extends $Record {
static readonly "CODEC": $MapCodec<$Structure$StructureSettings>

constructor(biomes: $HolderSet$$Type<$Biome$$Type>, spawnOverrides: $Map$$Type<$MobCategory$$Type, $StructureSpawnOverride$$Type>, step: $GenerationStep$Decoration$$Type, terrainAdaptation: $TerrainAdjustment$$Type)

public "biomes"(): $HolderSet<$Biome>
public "spawnOverrides"(): $Map<$MobCategory, $StructureSpawnOverride>
public "step"(): $GenerationStep$Decoration
public "terrainAdaptation"(): $TerrainAdjustment
}
}

declare module "net.minecraft.world.level.levelgen.structure.StructureCheck" {
import { $LevelHeightAccessor$$Type } from "net.minecraft.world.level.LevelHeightAccessor"
import { $BiomeSource$$Type } from "net.minecraft.world.level.biome.BiomeSource"
import { $StructureCheckResult } from "net.minecraft.world.level.levelgen.structure.StructureCheckResult"
import { $IStructureCheck } from "org.embeddedt.modernfix.duck.IStructureCheck"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $DataFixer$$Type } from "com.mojang.datafixers.DataFixer"
import { $ChunkGenerator$$Type } from "net.minecraft.world.level.chunk.ChunkGenerator"
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $Structure$$Type } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $StructureTemplateManager$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import { $ChunkScanAccess$$Type } from "net.minecraft.world.level.chunk.storage.ChunkScanAccess"
import { $RandomState$$Type } from "net.minecraft.world.level.levelgen.RandomState"
import { $Map$$Type } from "java.util.Map"
import { $Level } from "net.minecraft.world.level.Level"
import { $ChunkGeneratorStructureState$$Type } from "net.minecraft.world.level.chunk.ChunkGeneratorStructureState"
import { $StructureStart$$Type } from "net.minecraft.world.level.levelgen.structure.StructureStart"

export class $StructureCheck implements $IStructureCheck {
constructor(chunkScanAccess0: $ChunkScanAccess$$Type, registryAccess1: $RegistryAccess$$Type, structureTemplateManager2: $StructureTemplateManager$$Type, resourceKey3: $ResourceKey$$Type<$Level>, chunkGenerator4: $ChunkGenerator$$Type, randomState5: $RandomState$$Type, levelHeightAccessor6: $LevelHeightAccessor$$Type, biomeSource7: $BiomeSource$$Type, long8: long, dataFixer9: $DataFixer$$Type)

public "checkStart"(chunkPos0: $ChunkPos$$Type, structure1: $Structure$$Type, boolean2: boolean): $StructureCheckResult
public "incrementReference"(chunkPos0: $ChunkPos$$Type, structure1: $Structure$$Type): void
public "mfix$setStructureState"(chunkGeneratorStructureState0: $ChunkGeneratorStructureState$$Type): void
public "onStructureLoad"(chunkPos0: $ChunkPos$$Type, map1: $Map$$Type<$Structure$$Type, $StructureStart$$Type>): void
}
}

declare module "net.minecraft.world.level.levelgen.structure.pools.SinglePoolElement" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Either, $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $SinglePoolElementAccessor } from "com.craisinlord.integrated_api.mixins.structures.SinglePoolElementAccessor"
import { $StructureProcessorList$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorList"
import { $SinglePoolElementAccessor as $SinglePoolElementAccessor$0 } from "com.finndog.moogs_structures.mixins.structures.SinglePoolElementAccessor"
import { $List } from "java.util.List"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder$$Type } from "net.minecraft.core.Holder"
import { $StructureTemplate$StructureBlockInfo } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureBlockInfo"
import { $StructureTemplateManager$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import { $AccessorSinglePoolElement } from "org.violetmoon.quark.mixin.mixins.accessor.AccessorSinglePoolElement"
import { $StructureTemplatePool$Projection$$Type } from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool$Projection"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $StructureTemplate, $StructureTemplate$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate"
import { $SinglePoolElementAccessor as $SinglePoolElementAccessor$1 } from "com.finndog.mes.mixins.structures.SinglePoolElementAccessor"
import { $SinglePoolElementExtension } from "com.legacy.structure_gel.core.structure.jigsaw.SinglePoolElementExtension"
import { $StructurePiece, $StructurePiece$$Type } from "net.minecraft.world.level.levelgen.structure.StructurePiece"
import { $SinglePoolElementAccessor as $SinglePoolElementAccessor$2 } from "com.github.L_Ender.cataclysm.mixin.accessor.SinglePoolElementAccessor"
import { $StructurePoolElement } from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

export class $SinglePoolElement extends $StructurePoolElement implements $SinglePoolElementAccessor, $SinglePoolElementAccessor$2, $SinglePoolElementAccessor$0, $AccessorSinglePoolElement, $SinglePoolElementAccessor$1, $SinglePoolElementExtension {
static readonly "CODEC": $Codec<$SinglePoolElement>

constructor(either0: $Either$$Type<$ResourceLocation$$Type, $StructureTemplate$$Type>, holder1: $Holder$$Type<$StructureProcessorList$$Type>, projection2: $StructureTemplatePool$Projection$$Type)

public "getDataMarkers"(structureTemplateManager0: $StructureTemplateManager$$Type, blockPos1: $BlockPos$$Type, rotation2: $Rotation$$Type, boolean3: boolean): $List<$StructureTemplate$StructureBlockInfo>
public "getTemplate"(structureTemplateManager0: $StructureTemplateManager$$Type): $StructureTemplate
public "structure_gel$getPiece"(): $StructurePiece
public "structure_gel$setPiece"(structurePiece0: $StructurePiece$$Type): void
get "template"(): $Either<$ResourceLocation, $StructureTemplate>
set "template"(value: $Either$$Type<$ResourceLocation$$Type, $StructureTemplate$$Type>)
}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"

export class $RuleTest {
static readonly "CODEC": $Codec<$RuleTest>

constructor()

public "test"(blockState0: $BlockState$$Type, randomSource1: $RandomSource$$Type): boolean
}
}

declare module "net.minecraft.world.level.levelgen.structure.TerrainAdjustment" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $TerrainAdjustment extends $Enum<$TerrainAdjustment> implements $StringRepresentable {
static readonly "BEARD_BOX": $TerrainAdjustment
static readonly "BEARD_THIN": $TerrainAdjustment
static readonly "BURY": $TerrainAdjustment
static readonly "CODEC": $Codec<$TerrainAdjustment>
static readonly "NONE": $TerrainAdjustment

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $TerrainAdjustment
public static "values"(): $TerrainAdjustment[]
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.levelgen.structure.placement.RandomSpreadType" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $RandomSpreadType extends $Enum<$RandomSpreadType> implements $StringRepresentable {
static readonly "CODEC": $Codec<$RandomSpreadType>
static readonly "LINEAR": $RandomSpreadType
static readonly "TRIANGULAR": $RandomSpreadType

public "evaluate"(randomSource0: $RandomSource$$Type, int1: integer): integer
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $RandomSpreadType
public static "values"(): $RandomSpreadType[]
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.levelgen.structure.StructureSpawnOverride" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$$Type } from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"
import { $WeightedRandomList, $WeightedRandomList$$Type } from "net.minecraft.util.random.WeightedRandomList"
import { $Record } from "java.lang.Record"
import { $StructureSpawnOverride$BoundingBoxType, $StructureSpawnOverride$BoundingBoxType$$Type } from "net.minecraft.world.level.levelgen.structure.StructureSpawnOverride$BoundingBoxType"

export class $StructureSpawnOverride extends $Record {
static readonly "CODEC": $Codec<$StructureSpawnOverride>

constructor(boundingBoxType0: $StructureSpawnOverride$BoundingBoxType$$Type, weightedRandomList1: $WeightedRandomList$$Type<$MobSpawnSettings$SpawnerData$$Type>)

public "boundingBox"(): $StructureSpawnOverride$BoundingBoxType
public "spawns"(): $WeightedRandomList<$MobSpawnSettings$SpawnerData>
}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureEntityInfo" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"

export class $StructureTemplate$StructureEntityInfo {
readonly "blockPos": $BlockPos
readonly "nbt": $CompoundTag
readonly "pos": $Vec3

constructor(vec30: $Vec3$$Type, blockPos1: $BlockPos$$Type, compoundTag2: $CompoundTag$$Type)

}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$Palette" {
import { $List } from "java.util.List"
import { $StructureTemplate$StructureBlockInfo } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureBlockInfo"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"

export class $StructureTemplate$Palette {
public "blocks"(block0: $Block$$Type): $List<$StructureTemplate$StructureBlockInfo>
public "blocks"(): $List<$StructureTemplate$StructureBlockInfo>
}
}

declare module "net.minecraft.world.level.levelgen.structure.pieces.StructurePieceSerializationContext" {
import { $StructureTemplateManager, $StructureTemplateManager$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import { $ResourceManager, $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $Record } from "java.lang.Record"
import { $RegistryAccess, $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export class $StructurePieceSerializationContext extends $Record {
constructor(resourceManager0: $ResourceManager$$Type, registryAccess1: $RegistryAccess$$Type, structureTemplateManager2: $StructureTemplateManager$$Type)

public static "fromLevel"(serverLevel0: $ServerLevel$$Type): $StructurePieceSerializationContext
public "registryAccess"(): $RegistryAccess
public "resourceManager"(): $ResourceManager
public "structureTemplateManager"(): $StructureTemplateManager
}
}

declare module "net.minecraft.world.level.levelgen.structure.structures.MineshaftStructure" {
import { $Structure$GenerationContext$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import { $Structure } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $Codec } from "com.mojang.serialization.Codec"
import { $MineshaftStructure$Type$$Type } from "net.minecraft.world.level.levelgen.structure.structures.MineshaftStructure$Type"
import { $Structure$StructureSettings$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"
import { $Optional } from "java.util.Optional"
import { $Structure$GenerationStub } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"

export class $MineshaftStructure extends $Structure {
static readonly "CODEC": $Codec<$MineshaftStructure>

constructor(structureSettings0: $Structure$StructureSettings$$Type, type1: $MineshaftStructure$Type$$Type)

public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
}
}

declare module "net.minecraft.world.level.levelgen.structure.SinglePieceStructure" {
import { $Structure$GenerationContext$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import { $Structure } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $Optional } from "java.util.Optional"
import { $Structure$GenerationStub } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"

export class $SinglePieceStructure extends $Structure {
public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.RuleBlockEntityModifier" {
import { $RuleBlockEntityModifierType } from "net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.RuleBlockEntityModifierType"
import { $Codec } from "com.mojang.serialization.Codec"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"

export interface $RuleBlockEntityModifier {
"apply"(randomSource0: $RandomSource$$Type, compoundTag1: $CompoundTag$$Type): $CompoundTag
"getType"(): $RuleBlockEntityModifierType<any>
get "type"(): $RuleBlockEntityModifierType<any>
}

export namespace $RuleBlockEntityModifier {
const CODEC: $Codec<$RuleBlockEntityModifier>
}
export abstract class $RuleBlockEntityModifier$$Static implements $RuleBlockEntityModifier {
static readonly "CODEC": $Codec<$RuleBlockEntityModifier>

}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.GravityProcessor" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $StructureProcessor } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor"
import { $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"

export class $GravityProcessor extends $StructureProcessor {
static readonly "CODEC": $Codec<$GravityProcessor>

constructor(types0: $Heightmap$Types$$Type, int1: integer)

}
}

declare module "net.minecraft.world.level.levelgen.structure.structures.StrongholdStructure" {
import { $Structure$GenerationContext$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import { $Structure } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Structure$StructureSettings$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"
import { $Optional } from "java.util.Optional"
import { $Structure$GenerationStub } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"

export class $StrongholdStructure extends $Structure {
static readonly "CODEC": $Codec<$StrongholdStructure>

constructor(structureSettings0: $Structure$StructureSettings$$Type)

public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
}
}

declare module "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext" {
import { $LevelHeightAccessor, $LevelHeightAccessor$$Type } from "net.minecraft.world.level.LevelHeightAccessor"
import { $BiomeSource, $BiomeSource$$Type } from "net.minecraft.world.level.biome.BiomeSource"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $WorldgenRandom, $WorldgenRandom$$Type } from "net.minecraft.world.level.levelgen.WorldgenRandom"
import { $Record } from "java.lang.Record"
import { $RegistryAccess, $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $Biome, $Biome$$Type } from "net.minecraft.world.level.biome.Biome"
import { $ChunkGenerator, $ChunkGenerator$$Type } from "net.minecraft.world.level.chunk.ChunkGenerator"
import { $ChunkPos, $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $StructureTemplateManager, $StructureTemplateManager$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $RandomState, $RandomState$$Type } from "net.minecraft.world.level.levelgen.RandomState"

export class $Structure$GenerationContext extends $Record {
constructor(registryAccess0: $RegistryAccess$$Type, chunkGenerator1: $ChunkGenerator$$Type, biomeSource2: $BiomeSource$$Type, randomState3: $RandomState$$Type, structureTemplateManager4: $StructureTemplateManager$$Type, long5: long, chunkPos6: $ChunkPos$$Type, levelHeightAccessor7: $LevelHeightAccessor$$Type, predicate8: $Predicate$$Type<$Holder$$Type<$Biome$$Type>>)
constructor(registryAccess: $RegistryAccess$$Type, chunkGenerator: $ChunkGenerator$$Type, biomeSource: $BiomeSource$$Type, randomState: $RandomState$$Type, structureTemplateManager: $StructureTemplateManager$$Type, random: $WorldgenRandom$$Type, seed: long, chunkPos: $ChunkPos$$Type, heightAccessor: $LevelHeightAccessor$$Type, validBiome: $Predicate$$Type<$Holder$$Type<$Biome$$Type>>)

public "biomeSource"(): $BiomeSource
public "chunkGenerator"(): $ChunkGenerator
public "chunkPos"(): $ChunkPos
public "heightAccessor"(): $LevelHeightAccessor
public "random"(): $WorldgenRandom
public "randomState"(): $RandomState
public "registryAccess"(): $RegistryAccess
public "seed"(): long
public "structureTemplateManager"(): $StructureTemplateManager
public "validBiome"(): $Predicate<$Holder<$Biome>>
}
}

declare module "net.minecraft.world.level.levelgen.structure.placement.StructurePlacement$FrequencyReductionMethod" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $StructurePlacement$FrequencyReductionMethod extends $Enum<$StructurePlacement$FrequencyReductionMethod> implements $StringRepresentable {
static readonly "CODEC": $Codec<$StructurePlacement$FrequencyReductionMethod>
static readonly "DEFAULT": $StructurePlacement$FrequencyReductionMethod
static readonly "LEGACY_TYPE_1": $StructurePlacement$FrequencyReductionMethod
static readonly "LEGACY_TYPE_2": $StructurePlacement$FrequencyReductionMethod
static readonly "LEGACY_TYPE_3": $StructurePlacement$FrequencyReductionMethod

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "shouldGenerate"(long0: long, int1: integer, int2: integer, int3: integer, float4: float): boolean
public static "valueOf"(string0: string): $StructurePlacement$FrequencyReductionMethod
public static "values"(): $StructurePlacement$FrequencyReductionMethod[]
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.BlockMatchTest" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $RuleTest } from "net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest"

export class $BlockMatchTest extends $RuleTest {
static readonly "CODEC": $Codec<$BlockMatchTest>

constructor(block0: $Block$$Type)

}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.ProtectedBlockProcessor" {
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $Codec } from "com.mojang.serialization.Codec"
import { $StructureProcessor } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"

export class $ProtectedBlockProcessor extends $StructureProcessor {
static readonly "CODEC": $Codec<$ProtectedBlockProcessor>
readonly "cannotReplace": $TagKey<$Block>

constructor(tagKey0: $TagKey$$Type<$Block$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.structure.structures.JigsawStructure" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Structure$GenerationContext$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import { $Structure } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $StructureTemplatePool, $StructureTemplatePool$$Type } from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $Structure$StructureSettings$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"
import { $Heightmap$Types, $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"
import { $Structure$GenerationStub } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import { $HeightProvider, $HeightProvider$$Type } from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"

export class $JigsawStructure extends $Structure {
static readonly "CODEC": $Codec<$JigsawStructure>
static readonly "MAX_TOTAL_STRUCTURE_RANGE": integer
readonly "maxDepth": integer
readonly "maxDistanceFromCenter": integer
readonly "projectStartToHeightmap": $Optional<$Heightmap$Types>
readonly "startHeight": $HeightProvider
readonly "startJigsawName": $Optional<$ResourceLocation>
readonly "startPool": $Holder<$StructureTemplatePool>
readonly "useExpansionHack": boolean

constructor(structureSettings0: $Structure$StructureSettings$$Type, holder1: $Holder$$Type<$StructureTemplatePool$$Type>, optional2: $Optional$$Type<$ResourceLocation$$Type>, int3: integer, heightProvider4: $HeightProvider$$Type, boolean5: boolean, optional6: $Optional$$Type<$Heightmap$Types$$Type>, int7: integer)
constructor(structureSettings0: $Structure$StructureSettings$$Type, holder1: $Holder$$Type<$StructureTemplatePool$$Type>, int2: integer, heightProvider3: $HeightProvider$$Type, boolean4: boolean, types5: $Heightmap$Types$$Type)
constructor(structureSettings0: $Structure$StructureSettings$$Type, holder1: $Holder$$Type<$StructureTemplatePool$$Type>, int2: integer, heightProvider3: $HeightProvider$$Type, boolean4: boolean)

public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
}
}

declare module "net.minecraft.world.level.levelgen.structure.structures.RuinedPortalPiece$VerticalPlacement" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $RuinedPortalPiece$VerticalPlacement extends $Enum<$RuinedPortalPiece$VerticalPlacement> implements $StringRepresentable {
static readonly "CODEC": $StringRepresentable$EnumCodec<$RuinedPortalPiece$VerticalPlacement>
static readonly "IN_MOUNTAIN": $RuinedPortalPiece$VerticalPlacement
static readonly "IN_NETHER": $RuinedPortalPiece$VerticalPlacement
static readonly "ON_LAND_SURFACE": $RuinedPortalPiece$VerticalPlacement
static readonly "ON_OCEAN_FLOOR": $RuinedPortalPiece$VerticalPlacement
static readonly "PARTLY_BURIED": $RuinedPortalPiece$VerticalPlacement
static readonly "UNDERGROUND": $RuinedPortalPiece$VerticalPlacement

public static "byName"(string0: string): $RuinedPortalPiece$VerticalPlacement
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getName"(): string
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $RuinedPortalPiece$VerticalPlacement
public static "values"(): $RuinedPortalPiece$VerticalPlacement[]
get "name"(): string
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate" {
import { $TemplateAccessor } from "com.finndog.moogs_structures.mixins.structures.TemplateAccessor"
import { $StructureTemplate$StructureEntityInfo, $StructureTemplate$StructureEntityInfo$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureEntityInfo"
import { $ObjectArrayList } from "it.unimi.dsi.fastutil.objects.ObjectArrayList"
import { $HolderGetter$$Type } from "net.minecraft.core.HolderGetter"
import { $StructurePlaceSettings$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructurePlaceSettings"
import { $ServerLevelAccessor$$Type } from "net.minecraft.world.level.ServerLevelAccessor"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $StructureTemplateAccessor } from "com.hollingsworth.arsnouveau.common.mixin.structure.StructureTemplateAccessor"
import { $StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureBlockInfo"
import { $Mirror$$Type } from "net.minecraft.world.level.block.Mirror"
import { $Vec3i, $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $TemplateAccessor as $TemplateAccessor$0 } from "com.craisinlord.integrated_api.mixins.structures.TemplateAccessor"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $List, $List$$Type } from "java.util.List"
import { $StructureTemplate$Palette } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$Palette"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BoundingBox } from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $TemplateAccessor as $TemplateAccessor$1 } from "com.finndog.mes.mixins.structures.TemplateAccessor"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $DiscreteVoxelShape$$Type } from "net.minecraft.world.phys.shapes.DiscreteVoxelShape"
import { $StructureTemplateAccessor as $StructureTemplateAccessor$0 } from "com.legacy.structure_gel.core.mixin.StructureTemplateAccessor"

export class $StructureTemplate implements $TemplateAccessor$0, $StructureTemplateAccessor, $TemplateAccessor, $TemplateAccessor$1, $StructureTemplateAccessor$0 {
static readonly "BLOCKS_TAG": string
static readonly "BLOCK_TAG_NBT": string
static readonly "BLOCK_TAG_POS": string
static readonly "BLOCK_TAG_STATE": string
static readonly "ENTITIES_TAG": string
static readonly "ENTITY_TAG_BLOCKPOS": string
static readonly "ENTITY_TAG_NBT": string
static readonly "ENTITY_TAG_POS": string
static readonly "PALETTE_LIST_TAG": string
static readonly "PALETTE_TAG": string
static readonly "SIZE_TAG": string
readonly "entityInfoList": $List<$StructureTemplate$StructureEntityInfo>
readonly "palettes": $List<$StructureTemplate$Palette>

constructor()

public "calculateConnectedPosition"(structurePlaceSettings0: $StructurePlaceSettings$$Type, blockPos1: $BlockPos$$Type, structurePlaceSettings2: $StructurePlaceSettings$$Type, blockPos3: $BlockPos$$Type): $BlockPos
public static "calculateRelativePosition"(structurePlaceSettings0: $StructurePlaceSettings$$Type, blockPos1: $BlockPos$$Type): $BlockPos
public "fillFromWorld"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, vec3i2: $Vec3i$$Type, boolean3: boolean, block4: $Block$$Type): void
public "filterBlocks"(blockPos0: $BlockPos$$Type, structurePlaceSettings1: $StructurePlaceSettings$$Type, block2: $Block$$Type): $List<$StructureTemplate$StructureBlockInfo>
public "filterBlocks"(blockPos0: $BlockPos$$Type, structurePlaceSettings1: $StructurePlaceSettings$$Type, block2: $Block$$Type, boolean3: boolean): $ObjectArrayList<$StructureTemplate$StructureBlockInfo>
public "getAuthor"(): string
public "getBoundingBox"(structurePlaceSettings0: $StructurePlaceSettings$$Type, blockPos1: $BlockPos$$Type): $BoundingBox
public "getBoundingBox"(blockPos0: $BlockPos$$Type, rotation1: $Rotation$$Type, blockPos2: $BlockPos$$Type, mirror3: $Mirror$$Type): $BoundingBox
public "getSize"(): $Vec3i
public "getSize"(rotation0: $Rotation$$Type): $Vec3i
public static "getZeroPositionWithTransform"(blockPos0: $BlockPos$$Type, mirror1: $Mirror$$Type, rotation2: $Rotation$$Type, int3: integer, int4: integer): $BlockPos
public "getZeroPositionWithTransform"(blockPos0: $BlockPos$$Type, mirror1: $Mirror$$Type, rotation2: $Rotation$$Type): $BlockPos
public "handler$ggo000$disableClientSideStateSaving"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$ggo000$enableClientSideStateSaving"(callbackInfo0: $CallbackInfo$$Type): void
public "load"(holderGetter0: $HolderGetter$$Type<$Block$$Type>, compoundTag1: $CompoundTag$$Type): void
public "placeInWorld"(serverLevelAccessor0: $ServerLevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type, structurePlaceSettings3: $StructurePlaceSettings$$Type, randomSource4: $RandomSource$$Type, int5: integer): boolean
public static "processBlockInfos"(serverLevelAccessor0: $ServerLevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type, structurePlaceSettings3: $StructurePlaceSettings$$Type, list4: $List$$Type<$StructureTemplate$StructureBlockInfo$$Type>, structureTemplate5: $StructureTemplate$$Type): $List<$StructureTemplate$StructureBlockInfo>
/** @deprecated */
public static "processBlockInfos"(serverLevelAccessor0: $ServerLevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type, structurePlaceSettings3: $StructurePlaceSettings$$Type, list4: $List$$Type<$StructureTemplate$StructureBlockInfo$$Type>): $List<$StructureTemplate$StructureBlockInfo>
public static "processEntityInfos"(structureTemplate0: $StructureTemplate$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, structurePlaceSettings3: $StructurePlaceSettings$$Type, list4: $List$$Type<$StructureTemplate$StructureEntityInfo$$Type>): $List<$StructureTemplate$StructureEntityInfo>
public "save"(compoundTag0: $CompoundTag$$Type): $CompoundTag
public "setAuthor"(string0: string): void
public static "transform"(blockPos0: $BlockPos$$Type, mirror1: $Mirror$$Type, rotation2: $Rotation$$Type, blockPos3: $BlockPos$$Type): $BlockPos
public static "transform"(vec30: $Vec3$$Type, mirror1: $Mirror$$Type, rotation2: $Rotation$$Type, blockPos3: $BlockPos$$Type): $Vec3
public static "transformedVec3d"(structurePlaceSettings0: $StructurePlaceSettings$$Type, vec31: $Vec3$$Type): $Vec3
public static "updateShapeAtEdge"(levelAccessor0: $LevelAccessor$$Type, int1: integer, discreteVoxelShape2: $DiscreteVoxelShape$$Type, int3: integer, int4: integer, int5: integer): void
get "author"(): string
get "size"(): $Vec3i
set "author"(value: string)
}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor" {
import { $StructureProcessorAccessor } from "com.hollingsworth.arsnouveau.common.mixin.structure.StructureProcessorAccessor"
import { $StructureProcessorAccessor as $StructureProcessorAccessor$0 } from "com.finndog.mes.mixins.structures.StructureProcessorAccessor"
import { $StructureTemplate$StructureEntityInfo, $StructureTemplate$StructureEntityInfo$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureEntityInfo"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $StructurePlaceSettings$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructurePlaceSettings"
import { $ServerLevelAccessor$$Type } from "net.minecraft.world.level.ServerLevelAccessor"
import { $StructureProcessorAccessor as $StructureProcessorAccessor$1 } from "com.craisinlord.integrated_api.mixins.structures.StructureProcessorAccessor"
import { $List, $List$$Type } from "java.util.List"
import { $StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureBlockInfo"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $StructureProcessorAccessor as $StructureProcessorAccessor$2 } from "com.github.L_Ender.cataclysm.mixin.accessor.StructureProcessorAccessor"
import { $StructureTemplate$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate"
import { $StructureProcessorAccessor as $StructureProcessorAccessor$3 } from "com.finndog.moogs_structures.mixins.structures.StructureProcessorAccessor"

export class $StructureProcessor implements $StructureProcessorAccessor$1, $StructureProcessorAccessor$2, $StructureProcessorAccessor, $StructureProcessorAccessor$3, $StructureProcessorAccessor$0 {
constructor()

public "finalizeProcessing"(serverLevelAccessor0: $ServerLevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type, list3: $List$$Type<$StructureTemplate$StructureBlockInfo$$Type>, list4: $List$$Type<$StructureTemplate$StructureBlockInfo$$Type>, structurePlaceSettings5: $StructurePlaceSettings$$Type): $List<$StructureTemplate$StructureBlockInfo>
public "process"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type, structureBlockInfo3: $StructureTemplate$StructureBlockInfo$$Type, structureBlockInfo4: $StructureTemplate$StructureBlockInfo$$Type, structurePlaceSettings5: $StructurePlaceSettings$$Type, structureTemplate6: $StructureTemplate$$Type): $StructureTemplate$StructureBlockInfo
/** @deprecated */
public "processBlock"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type, structureBlockInfo3: $StructureTemplate$StructureBlockInfo$$Type, structureBlockInfo4: $StructureTemplate$StructureBlockInfo$$Type, structurePlaceSettings5: $StructurePlaceSettings$$Type): $StructureTemplate$StructureBlockInfo
public "processEntity"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, structureEntityInfo2: $StructureTemplate$StructureEntityInfo$$Type, structureEntityInfo3: $StructureTemplate$StructureEntityInfo$$Type, structurePlaceSettings4: $StructurePlaceSettings$$Type, structureTemplate5: $StructureTemplate$$Type): $StructureTemplate$StructureEntityInfo
}
}

declare module "net.minecraft.world.level.levelgen.structure.templatesystem.RuleProcessor" {
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $StructureProcessor } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor"
import { $ProcessorRule$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.ProcessorRule"

export class $RuleProcessor extends $StructureProcessor {
static readonly "CODEC": $Codec<$RuleProcessor>

constructor(list0: $List$$Type<$ProcessorRule$$Type>)

}
}

