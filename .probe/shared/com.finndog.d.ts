declare module "com.finndog.moogs_structures.mixins.structures.PoolElementStructurePieceAccessor" {
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

declare module "com.finndog.moogs_structures.mixins.structures.SinglePoolElementAccessor" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Either } from "com.mojang.datafixers.util.Either"
import { $StructureTemplateManager$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import { $Holder } from "net.minecraft.core.Holder"
import { $StructureTemplate } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate"
import { $StructureProcessorList } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorList"

export interface $SinglePoolElementAccessor {
"callGetTemplate"(structureTemplateManager0: $StructureTemplateManager$$Type): $StructureTemplate
"moogs_structures_getProcessors"(): $Holder<$StructureProcessorList>
"moogs_structures_getTemplate"(): $Either<$ResourceLocation, $StructureTemplate>
}

export namespace $SinglePoolElementAccessor {
const probejs$$marker: never
}
export abstract class $SinglePoolElementAccessor$$Static implements $SinglePoolElementAccessor {
}
}

declare module "com.finndog.moogs_structures.mixins.structures.ListPoolElementAccessor" {
import { $List } from "java.util.List"
import { $StructurePoolElement } from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

export interface $ListPoolElementAccessor {
"moogs_structures_getElements"(): $List<$StructurePoolElement>
}

export namespace $ListPoolElementAccessor {
const probejs$$marker: never
}
export abstract class $ListPoolElementAccessor$$Static implements $ListPoolElementAccessor {
}
}

declare module "com.finndog.moogs_structures.mixins.structures.StructurePieceAccessor" {
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

declare module "com.finndog.mes.mixins.structures.StructureTemplateManagerAccessor" {
import { $ResourceManager } from "net.minecraft.server.packs.resources.ResourceManager"

export interface $StructureTemplateManagerAccessor {
"mes_getResourceManager"(): $ResourceManager
}

export namespace $StructureTemplateManagerAccessor {
const probejs$$marker: never
}
export abstract class $StructureTemplateManagerAccessor$$Static implements $StructureTemplateManagerAccessor {
}
}

declare module "com.finndog.mes.mixins.structures.StructureProcessorAccessor" {
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

declare module "com.finndog.mes.mixins.structures.TemplateAccessor" {
import { $List } from "java.util.List"
import { $StructureTemplate$Palette } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$Palette"

export interface $TemplateAccessor {
"mes_getPalettes"(): $List<$StructureTemplate$Palette>
}

export namespace $TemplateAccessor {
const probejs$$marker: never
}
export abstract class $TemplateAccessor$$Static implements $TemplateAccessor {
}
}

declare module "com.finndog.mes.mixins.structures.SinglePoolElementAccessor" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Either } from "com.mojang.datafixers.util.Either"
import { $StructureTemplateManager$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import { $Holder } from "net.minecraft.core.Holder"
import { $StructureTemplate } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate"
import { $StructureProcessorList } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorList"

export interface $SinglePoolElementAccessor {
"callGetTemplate"(structureTemplateManager0: $StructureTemplateManager$$Type): $StructureTemplate
"mes_getProcessors"(): $Holder<$StructureProcessorList>
"mes_getTemplate"(): $Either<$ResourceLocation, $StructureTemplate>
}

export namespace $SinglePoolElementAccessor {
const probejs$$marker: never
}
export abstract class $SinglePoolElementAccessor$$Static implements $SinglePoolElementAccessor {
}
}

declare module "com.finndog.mes.mixins.structures.StructurePieceAccessor" {
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

declare module "com.finndog.mes.mixins.structures.StructurePoolAccessor" {
import { $List, $List$$Type } from "java.util.List"
import { $ObjectArrayList, $ObjectArrayList$$Type } from "it.unimi.dsi.fastutil.objects.ObjectArrayList"
import { $Pair, $Pair$$Type } from "com.mojang.datafixers.util.Pair"
import { $StructurePoolElement, $StructurePoolElement$$Type } from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

export interface $StructurePoolAccessor {
"mes_getRawTemplates"(): $List<$Pair<$StructurePoolElement, integer>>
"mes_getTemplates"(): $ObjectArrayList<$StructurePoolElement>
"mes_setRawTemplates"(list0: $List$$Type<$Pair$$Type<$StructurePoolElement$$Type, integer>>): void
"mes_setTemplates"(objectArrayList0: $ObjectArrayList$$Type<$StructurePoolElement$$Type>): void
}

export namespace $StructurePoolAccessor {
const probejs$$marker: never
}
export abstract class $StructurePoolAccessor$$Static implements $StructurePoolAccessor {
}
}

declare module "com.finndog.mes.mixins.structures.PoolElementStructurePieceAccessor" {
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

declare module "com.finndog.moogs_structures.mixins.structures.TemplateAccessor" {
import { $List } from "java.util.List"
import { $StructureTemplate$Palette } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$Palette"

export interface $TemplateAccessor {
"moogs_structures_getPalettes"(): $List<$StructureTemplate$Palette>
}

export namespace $TemplateAccessor {
const probejs$$marker: never
}
export abstract class $TemplateAccessor$$Static implements $TemplateAccessor {
}
}

declare module "com.finndog.mes.mixins.resources.NamespaceResourceManagerAccessor" {
import { $List } from "java.util.List"
import { $FallbackResourceManager$PackEntry } from "net.minecraft.server.packs.resources.FallbackResourceManager$PackEntry"

export interface $NamespaceResourceManagerAccessor {
"mes_getFallbacks"(): $List<$FallbackResourceManager$PackEntry>
}

export namespace $NamespaceResourceManagerAccessor {
const probejs$$marker: never
}
export abstract class $NamespaceResourceManagerAccessor$$Static implements $NamespaceResourceManagerAccessor {
}
}

declare module "com.finndog.moogs_structures.mixins.resources.NamespaceResourceManagerAccessor" {
import { $List } from "java.util.List"
import { $FallbackResourceManager$PackEntry } from "net.minecraft.server.packs.resources.FallbackResourceManager$PackEntry"

export interface $NamespaceResourceManagerAccessor {
"moogs_structures_getFallbacks"(): $List<$FallbackResourceManager$PackEntry>
}

export namespace $NamespaceResourceManagerAccessor {
const probejs$$marker: never
}
export abstract class $NamespaceResourceManagerAccessor$$Static implements $NamespaceResourceManagerAccessor {
}
}

declare module "com.finndog.moogs_structures.mixins.world.WorldGenRegionAccessor" {
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

declare module "com.finndog.mes.mixins.world.WorldGenRegionAccessor" {
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

declare module "com.finndog.moogs_structures.mixins.structures.StructureTemplateManagerAccessor" {
import { $ResourceManager } from "net.minecraft.server.packs.resources.ResourceManager"

export interface $StructureTemplateManagerAccessor {
"moogs_structures_getResourceManager"(): $ResourceManager
}

export namespace $StructureTemplateManagerAccessor {
const probejs$$marker: never
}
export abstract class $StructureTemplateManagerAccessor$$Static implements $StructureTemplateManagerAccessor {
}
}

declare module "com.finndog.moogs_structures.mixins.structures.StructurePoolAccessor" {
import { $List, $List$$Type } from "java.util.List"
import { $ObjectArrayList, $ObjectArrayList$$Type } from "it.unimi.dsi.fastutil.objects.ObjectArrayList"
import { $Pair, $Pair$$Type } from "com.mojang.datafixers.util.Pair"
import { $StructurePoolElement, $StructurePoolElement$$Type } from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

export interface $StructurePoolAccessor {
"moogs_structures_getRawTemplates"(): $List<$Pair<$StructurePoolElement, integer>>
"moogs_structures_getTemplates"(): $ObjectArrayList<$StructurePoolElement>
"moogs_structures_setRawTemplates"(list0: $List$$Type<$Pair$$Type<$StructurePoolElement$$Type, integer>>): void
"moogs_structures_setTemplates"(objectArrayList0: $ObjectArrayList$$Type<$StructurePoolElement$$Type>): void
}

export namespace $StructurePoolAccessor {
const probejs$$marker: never
}
export abstract class $StructurePoolAccessor$$Static implements $StructurePoolAccessor {
}
}

declare module "com.finndog.moogs_structures.mixins.structures.StructureProcessorAccessor" {
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

declare module "com.finndog.mes.mixins.structures.ListPoolElementAccessor" {
import { $List } from "java.util.List"
import { $StructurePoolElement } from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

export interface $ListPoolElementAccessor {
"mes_getElements"(): $List<$StructurePoolElement>
}

export namespace $ListPoolElementAccessor {
const probejs$$marker: never
}
export abstract class $ListPoolElementAccessor$$Static implements $ListPoolElementAccessor {
}
}

