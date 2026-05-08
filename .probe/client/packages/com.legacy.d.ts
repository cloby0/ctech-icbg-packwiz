declare module "com.legacy.structure_gel.api.events.RegisterArmorTrimTexturesEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegisterArmorTrimTexturesEvent$$Type = ($RegisterArmorTrimTexturesEvent);
}

declare module "com.legacy.structure_gel.api.structure.jigsaw.IPieceFactory$Context" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IPieceFactory$Context$$Type = ($IPieceFactory$Context);
}

declare module "com.legacy.structure_gel.api.data_handler.handlers.DataHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DataHandler$$Type<T extends $DataHandler<T> = $DataHandler<T>> = ($DataHandler<T>);
}

declare module "com.legacy.structure_gel.api.registry.SGSimpleRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SGSimpleRegistry$$Type<K = any, V = any> = ($SGSimpleRegistry<K, V>);
}

declare module "com.legacy.structure_gel.api.structure.base.IModifyState" {
import { $ServerLevelAccessor } from "net.minecraft.world.level.ServerLevelAccessor"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RandomSource } from "net.minecraft.util.RandomSource"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IModifyState$$Type = ($IModifyState | ((arg0: $ServerLevelAccessor, arg1: $RandomSource, arg2: $BlockPos, arg3: $BlockState) => $BlockState$$Type));
}

declare module "com.legacy.structure_gel.api.events.RegisterDataHandlerTypeEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegisterDataHandlerTypeEvent$$Type = ($RegisterDataHandlerTypeEvent);
}

declare module "com.legacy.structure_gel.core.data_handler.handlers.ArchaeologyHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ArchaeologyHandler$$Type = ($ArchaeologyHandler);
}

declare module "com.legacy.structure_gel.core.mixin.DimensionDataStorageAccessor" {
import { $Map$$Type } from "java.util.Map"
import { $SavedData$$Type } from "net.minecraft.world.level.saveddata.SavedData"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DimensionDataStorageAccessor$$Type = ($DimensionDataStorageAccessor | (() => $Map$$Type<string, $SavedData$$Type>));
}

declare module "com.legacy.structure_gel.core.capability.misc.StructureSettingsData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StructureSettingsData$$Type = ($StructureSettingsData);
}

declare module "com.legacy.structure_gel.api.data_handler.handlers.ProbabilityDataHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ProbabilityDataHandler$$Type<T extends $ProbabilityDataHandler<T> = $ProbabilityDataHandler<T>> = ($ProbabilityDataHandler<T>);
}

declare module "com.legacy.structure_gel.core.data_handler.handlers.VanillaSpawnerHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $VanillaSpawnerHandler$$Type = ($VanillaSpawnerHandler);
}

declare module "com.legacy.structure_gel.api.events.RegisterDynamicSpawnerEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegisterDynamicSpawnerEvent$$Type = ($RegisterDynamicSpawnerEvent);
}

declare module "com.legacy.structure_gel.api.data_handler.parsing.DataMap" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DataMap$$Type = ($DataMap);
}

declare module "com.legacy.structure_gel.api.structure.jigsaw.IPieceFactory" {
import { $PoolElementStructurePiece$$Type } from "net.minecraft.world.level.levelgen.structure.PoolElementStructurePiece"
import { $IPieceFactory$Context } from "com.legacy.structure_gel.api.structure.jigsaw.IPieceFactory$Context"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IPieceFactory$$Type = ($IPieceFactory | ((arg0: $IPieceFactory$Context) => $PoolElementStructurePiece$$Type));
}

declare module "com.legacy.structure_gel.api.dynamic_spawner.DynamicSpawnerType$SpawnerModifier" {
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Level } from "net.minecraft.world.level.Level"
import { $SpawnerBlockEntity } from "net.minecraft.world.level.block.entity.SpawnerBlockEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DynamicSpawnerType$SpawnerModifier$$Type = ($DynamicSpawnerType$SpawnerModifier | ((arg0: $SpawnerBlockEntity, arg1: $Level, arg2: $BlockPos) => void));
}

declare module "com.legacy.structure_gel.api.data_handler.parsing.DataParser$ResourceKeyParser" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DataParser$ResourceKeyParser$$Type<T = any> = ($DataParser$ResourceKeyParser<T>);
}

declare module "com.legacy.structure_gel.api.data_handler.parsing.DataParser$Parser" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DataParser$Parser$$Type<T = any> = ($DataParser$Parser<T>);
}

declare module "com.legacy.structure_gel.api.events.LoadStructureTemplateEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LoadStructureTemplateEvent$$Type = ($LoadStructureTemplateEvent);
}

declare module "com.legacy.structure_gel.api.data_handler.handlers.DataHandler$Context" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DataHandler$Context$$Type = ($DataHandler$Context);
}

declare module "com.legacy.structure_gel.api.structure.ExtendedJigsawStructure$PlaceContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ExtendedJigsawStructure$PlaceContext$$Type = ($ExtendedJigsawStructure$PlaceContext);
}

declare module "com.legacy.structure_gel.api.data_handler.parsing.DataParser$NumberParser" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DataParser$NumberParser$$Type<T extends number = number> = ($DataParser$NumberParser<T>);
}

declare module "com.legacy.structure_gel.core.mixin.StructureTemplateAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StructureTemplateAccessor$$Type = ($StructureTemplateAccessor);
}

declare module "com.legacy.structure_gel.core.data_handler.handlers.DynamicSpawnerHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DynamicSpawnerHandler$$Type = ($DynamicSpawnerHandler);
}

declare module "com.legacy.structure_gel.core.data_handler.handlers.ConfiguredFeatureHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ConfiguredFeatureHandler$$Type = ($ConfiguredFeatureHandler);
}

declare module "com.legacy.structure_gel.core.structure.jigsaw.SinglePoolElementExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SinglePoolElementExtension$$Type = ($SinglePoolElementExtension);
}

declare module "com.legacy.structure_gel.api.structure.jigsaw.JigsawCapability$JigsawType" {
import { $JigsawCapability$IJigsawCapability, $JigsawCapability$IJigsawCapability$$Type } from "com.legacy.structure_gel.api.structure.jigsaw.JigsawCapability$IJigsawCapability"
import { $Codec$$Type } from "com.mojang.serialization.Codec"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $JigsawCapability$JigsawType$$Type<A extends $JigsawCapability$IJigsawCapability = $JigsawCapability$IJigsawCapability> = ($JigsawCapability$JigsawType<A> | (() => $Codec$$Type<A>));
}

declare module "com.legacy.structure_gel.api.events.RegisterJigsawCapabilityEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegisterJigsawCapabilityEvent$$Type = ($RegisterJigsawCapabilityEvent);
}

declare module "com.legacy.structure_gel.core.dynamic_spawner.DynamicSpawner" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DynamicSpawner$$Type = ($DynamicSpawner);
}

declare module "com.legacy.structure_gel.api.structure.jigsaw.JigsawCapability$IJigsawCapability" {
import { $JigsawCapability$JigsawType$$Type } from "com.legacy.structure_gel.api.structure.jigsaw.JigsawCapability$JigsawType"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $JigsawCapability$IJigsawCapability$$Type = ($JigsawCapability$IJigsawCapability | (() => $JigsawCapability$JigsawType$$Type<any>));
}

declare module "com.legacy.structure_gel.core.data_handler.handlers.EmptyDataHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EmptyDataHandler$$Type = ($EmptyDataHandler);
}

declare module "com.legacy.structure_gel.api.data_handler.DataHandlerType" {
import { $DataHandler, $DataHandler$$Type } from "com.legacy.structure_gel.api.data_handler.handlers.DataHandler"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DataHandlerType$$Type<T extends $DataHandler<T> = $DataHandler<T>> = ($DataHandlerType<T>);
}

declare module "com.legacy.structure_gel.core.data_handler.handlers.EntityHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntityHandler$$Type = ($EntityHandler);
}

declare module "com.legacy.structure_gel.core.data_handler.handlers.ChestHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChestHandler$$Type = ($ChestHandler);
}

declare module "com.legacy.structure_gel.api.events.RegisterLootTableAliasEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegisterLootTableAliasEvent$$Type = ($RegisterLootTableAliasEvent);
}

declare module "com.legacy.structure_gel.api.data_handler.parsing.DataParser" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DataParser$$Type = ($DataParser);
}

declare module "com.legacy.structure_gel.api.dynamic_spawner.DynamicSpawnerType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DynamicSpawnerType$$Type = ($DynamicSpawnerType);
}

declare module "com.legacy.structure_gel.core.data_handler.handlers.BlockStateHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockStateHandler$$Type = ($BlockStateHandler);
}

