declare module "com.craisinlord.integrated_api.mixins.resources.ReloadableResourceManagerImplAccessor" {
import { $Map } from "java.util.Map"
import { $FallbackResourceManager } from "net.minecraft.server.packs.resources.FallbackResourceManager"

export interface $ReloadableResourceManagerImplAccessor {
"integratedapi_getNamespacedManagers"(): $Map<string, $FallbackResourceManager>
}

export namespace $ReloadableResourceManagerImplAccessor {
const probejs$$marker: never
}
export abstract class $ReloadableResourceManagerImplAccessor$$Static implements $ReloadableResourceManagerImplAccessor {
}
}

declare module "com.craisinlord.idas.state.stateCache" {
import { $stateRegion, $stateRegion$$Type } from "com.craisinlord.idas.state.stateRegion"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ConcurrentHashMap, $ConcurrentHashMap$$Type } from "java.util.concurrent.ConcurrentHashMap"
import { $Path$$Type } from "java.nio.file.Path"

export class $stateCache {
constructor(path0: $Path$$Type)

public "isCleared"(blockPos0: $BlockPos$$Type): boolean
public "setCleared"(blockPos0: $BlockPos$$Type, boolean1: boolean): void
get "stateRegionMap"(): $ConcurrentHashMap<string, $stateRegion>
set "stateRegionMap"(value: $ConcurrentHashMap$$Type<string, $stateRegion$$Type>)
}
}

declare module "com.craisinlord.integrated_api.mixins.structures.TemplateAccessor" {
import { $List } from "java.util.List"
import { $StructureTemplate$Palette } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$Palette"

export interface $TemplateAccessor {
"integratedapi_getPalettes"(): $List<$StructureTemplate$Palette>
}

export namespace $TemplateAccessor {
const probejs$$marker: never
}
export abstract class $TemplateAccessor$$Static implements $TemplateAccessor {
}
}

declare module "com.craisinlord.integrated_api.mixins.items.MapItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MapItemAccessor {
}

export namespace $MapItemAccessor {
const probejs$$marker: never
}
export abstract class $MapItemAccessor$$Static implements $MapItemAccessor {
}
}

declare module "com.craisinlord.integrated_api.mixins.structures.PoolElementStructurePieceAccessor" {
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $StructureTemplateManager } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"

export interface $PoolElementStructurePieceAccessor {
"getStructureManager"(): $StructureTemplateManager
"setRotation"(rotation0: $Rotation$$Type): void
get "structureManager"(): $StructureTemplateManager
set "rotation"(value: $Rotation$$Type)
}

export namespace $PoolElementStructurePieceAccessor {
const probejs$$marker: never
}
export abstract class $PoolElementStructurePieceAccessor$$Static implements $PoolElementStructurePieceAccessor {
}
}

declare module "com.craisinlord.integrated_api.mixins.structures.JigsawJunctionAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $JigsawJunctionAccessor {
"setSourceGroundY"(int0: integer): void
"setSourceX"(int0: integer): void
"setSourceZ"(int0: integer): void
set "sourceGroundY"(value: integer)
set "sourceX"(value: integer)
set "sourceZ"(value: integer)
}

export namespace $JigsawJunctionAccessor {
const probejs$$marker: never
}
export abstract class $JigsawJunctionAccessor$$Static implements $JigsawJunctionAccessor {
}
}

declare module "com.craisinlord.integrated_api.mixins.structures.StructureProcessorAccessor" {
import { $StructureProcessorType } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorType"

export interface $StructureProcessorAccessor {
"callGetType"(): $StructureProcessorType<any>
}

export namespace $StructureProcessorAccessor {
const probejs$$marker: never
}
export abstract class $StructureProcessorAccessor$$Static implements $StructureProcessorAccessor {
}
}

declare module "com.craisinlord.integrated_api.mixins.features.DungeonFeatureAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DungeonFeatureAccessor {
}

export namespace $DungeonFeatureAccessor {
const probejs$$marker: never
}
export abstract class $DungeonFeatureAccessor$$Static implements $DungeonFeatureAccessor {
}
}

declare module "com.craisinlord.integrated_api.mixins.structures.ListPoolElementAccessor" {
import { $List } from "java.util.List"
import { $StructurePoolElement } from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

export interface $ListPoolElementAccessor {
"integratedapi_getElements"(): $List<$StructurePoolElement>
}

export namespace $ListPoolElementAccessor {
const probejs$$marker: never
}
export abstract class $ListPoolElementAccessor$$Static implements $ListPoolElementAccessor {
}
}

declare module "com.craisinlord.integrated_api.mixins.entities.ShulkerEntityInvoker" {
import { $Direction$$Type } from "net.minecraft.core.Direction"

export interface $ShulkerEntityInvoker {
"integratedapi_callSetAttachFace"(direction0: $Direction$$Type): void
}

export namespace $ShulkerEntityInvoker {
const probejs$$marker: never
}
export abstract class $ShulkerEntityInvoker$$Static implements $ShulkerEntityInvoker {
}
}

declare module "com.craisinlord.idas.state.stateRegion" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Path$$Type } from "java.nio.file.Path"

export class $stateRegion {
constructor(path0: $Path$$Type, string1: string)

public "isCleared"(blockPos0: $BlockPos$$Type): boolean
public "reset"(): void
public "setCleared"(blockPos0: $BlockPos$$Type, boolean1: boolean): void
}
}

declare module "com.craisinlord.integrated_api.mixins.entities.MerchantOfferAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MerchantOfferAccessor {
"setMaxUses"(int0: integer): void
set "maxUses"(value: integer)
}

export namespace $MerchantOfferAccessor {
const probejs$$marker: never
}
export abstract class $MerchantOfferAccessor$$Static implements $MerchantOfferAccessor {
}
}

declare module "com.craisinlord.integrated_api.mixins.world.WorldGenRegionAccessor" {
import { $StructureManager } from "net.minecraft.world.level.StructureManager"

export interface $WorldGenRegionAccessor {
"getStructureManager"(): $StructureManager
get "structureManager"(): $StructureManager
}

export namespace $WorldGenRegionAccessor {
const probejs$$marker: never
}
export abstract class $WorldGenRegionAccessor$$Static implements $WorldGenRegionAccessor {
}
}

declare module "com.craisinlord.integrated_api.mixins.structures.StructurePieceAccessor" {
import { $BoundingBox$$Type } from "net.minecraft.world.level.levelgen.structure.BoundingBox"

export interface $StructurePieceAccessor {
"setBoundingBox"(boundingBox0: $BoundingBox$$Type): void
set "boundingBox"(value: $BoundingBox$$Type)
}

export namespace $StructurePieceAccessor {
const probejs$$marker: never
}
export abstract class $StructurePieceAccessor$$Static implements $StructurePieceAccessor {
}
}

declare module "com.craisinlord.integrated_api.mixins.structures.SinglePoolElementAccessor" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Either } from "com.mojang.datafixers.util.Either"
import { $StructureTemplateManager$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import { $Holder } from "net.minecraft.core.Holder"
import { $StructureTemplate } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate"
import { $StructureProcessorList } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorList"

export interface $SinglePoolElementAccessor {
"callGetTemplate"(structureTemplateManager0: $StructureTemplateManager$$Type): $StructureTemplate
"integratedapi_getProcessors"(): $Holder<$StructureProcessorList>
"integratedapi_getTemplate"(): $Either<$ResourceLocation, $StructureTemplate>
}

export namespace $SinglePoolElementAccessor {
const probejs$$marker: never
}
export abstract class $SinglePoolElementAccessor$$Static implements $SinglePoolElementAccessor {
}
}

declare module "com.craisinlord.integrated_api.mixins.structures.StructureTemplateManagerAccessor" {
import { $ResourceManager } from "net.minecraft.server.packs.resources.ResourceManager"

export interface $StructureTemplateManagerAccessor {
"integratedapi_getResourceManager"(): $ResourceManager
}

export namespace $StructureTemplateManagerAccessor {
const probejs$$marker: never
}
export abstract class $StructureTemplateManagerAccessor$$Static implements $StructureTemplateManagerAccessor {
}
}

declare module "com.craisinlord.integrated_api.mixins.resources.LootContextAccessor" {
import { $LootParams } from "net.minecraft.world.level.storage.loot.LootParams"

export interface $LootContextAccessor {
"getParams"(): $LootParams
get "params"(): $LootParams
}

export namespace $LootContextAccessor {
const probejs$$marker: never
}
export abstract class $LootContextAccessor$$Static implements $LootContextAccessor {
}
}

declare module "com.craisinlord.idas.state.IStateCacheProvider" {
import { $stateCache } from "com.craisinlord.idas.state.stateCache"

export interface $IStateCacheProvider {
"getStateCache"(): $stateCache
get "stateCache"(): $stateCache
}

export namespace $IStateCacheProvider {
const probejs$$marker: never
}
export abstract class $IStateCacheProvider$$Static implements $IStateCacheProvider {
}
}

declare module "com.craisinlord.integrated_api.mixins.structures.StructureManagerAccessor" {
import { $LevelAccessor } from "net.minecraft.world.level.LevelAccessor"

export interface $StructureManagerAccessor {
"getLevel"(): $LevelAccessor
get "level"(): $LevelAccessor
}

export namespace $StructureManagerAccessor {
const probejs$$marker: never
}
export abstract class $StructureManagerAccessor$$Static implements $StructureManagerAccessor {
}
}

declare module "com.craisinlord.integrated_api.mixins.structures.StructurePoolAccessor" {
import { $List, $List$$Type } from "java.util.List"
import { $ObjectArrayList, $ObjectArrayList$$Type } from "it.unimi.dsi.fastutil.objects.ObjectArrayList"
import { $Pair, $Pair$$Type } from "com.mojang.datafixers.util.Pair"
import { $StructurePoolElement, $StructurePoolElement$$Type } from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

export interface $StructurePoolAccessor {
"integratedapi_getRawTemplates"(): $List<$Pair<$StructurePoolElement, integer>>
"integratedapi_getTemplates"(): $ObjectArrayList<$StructurePoolElement>
"integratedapi_setRawTemplates"(list0: $List$$Type<$Pair$$Type<$StructurePoolElement$$Type, integer>>): void
"integratedapi_setTemplates"(objectArrayList0: $ObjectArrayList$$Type<$StructurePoolElement$$Type>): void
}

export namespace $StructurePoolAccessor {
const probejs$$marker: never
}
export abstract class $StructurePoolAccessor$$Static implements $StructurePoolAccessor {
}
}

declare module "com.craisinlord.integrated_api.mixins.resources.NamespaceResourceManagerAccessor" {
import { $List } from "java.util.List"
import { $FallbackResourceManager$PackEntry } from "net.minecraft.server.packs.resources.FallbackResourceManager$PackEntry"

export interface $NamespaceResourceManagerAccessor {
"integratedapi_getFallbacks"(): $List<$FallbackResourceManager$PackEntry>
}

export namespace $NamespaceResourceManagerAccessor {
const probejs$$marker: never
}
export abstract class $NamespaceResourceManagerAccessor$$Static implements $NamespaceResourceManagerAccessor {
}
}

