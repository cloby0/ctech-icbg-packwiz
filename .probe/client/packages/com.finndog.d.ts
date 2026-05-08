declare module "com.finndog.moogs_structures.mixins.structures.PoolElementStructurePieceAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PoolElementStructurePieceAccessor$$Type = ($PoolElementStructurePieceAccessor);
}

declare module "com.finndog.moogs_structures.mixins.structures.SinglePoolElementAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SinglePoolElementAccessor$$Type = ($SinglePoolElementAccessor);
}

declare module "com.finndog.moogs_structures.mixins.structures.ListPoolElementAccessor" {
import { $List$$Type } from "java.util.List"
import { $StructurePoolElement$$Type } from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ListPoolElementAccessor$$Type = ($ListPoolElementAccessor | (() => $List$$Type<$StructurePoolElement$$Type>));
}

declare module "com.finndog.moogs_structures.mixins.structures.StructurePieceAccessor" {
import { $BoundingBox } from "net.minecraft.world.level.levelgen.structure.BoundingBox"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StructurePieceAccessor$$Type = ($StructurePieceAccessor | ((arg0: $BoundingBox) => void));
}

declare module "com.finndog.mes.mixins.structures.StructureTemplateManagerAccessor" {
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StructureTemplateManagerAccessor$$Type = ($StructureTemplateManagerAccessor | (() => $ResourceManager$$Type));
}

declare module "com.finndog.mes.mixins.structures.StructureProcessorAccessor" {
import { $StructureProcessorType$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorType"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StructureProcessorAccessor$$Type = ($StructureProcessorAccessor | (() => $StructureProcessorType$$Type<any>));
}

declare module "com.finndog.mes.mixins.structures.TemplateAccessor" {
import { $List$$Type } from "java.util.List"
import { $StructureTemplate$Palette$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$Palette"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TemplateAccessor$$Type = ($TemplateAccessor | (() => $List$$Type<$StructureTemplate$Palette$$Type>));
}

declare module "com.finndog.mes.mixins.structures.SinglePoolElementAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SinglePoolElementAccessor$$Type = ($SinglePoolElementAccessor);
}

declare module "com.finndog.mes.mixins.structures.StructurePieceAccessor" {
import { $BoundingBox } from "net.minecraft.world.level.levelgen.structure.BoundingBox"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StructurePieceAccessor$$Type = ($StructurePieceAccessor | ((arg0: $BoundingBox) => void));
}

declare module "com.finndog.mes.mixins.structures.StructurePoolAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StructurePoolAccessor$$Type = ($StructurePoolAccessor);
}

declare module "com.finndog.mes.mixins.structures.PoolElementStructurePieceAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PoolElementStructurePieceAccessor$$Type = ($PoolElementStructurePieceAccessor);
}

declare module "com.finndog.moogs_structures.mixins.structures.TemplateAccessor" {
import { $List$$Type } from "java.util.List"
import { $StructureTemplate$Palette$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$Palette"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TemplateAccessor$$Type = ($TemplateAccessor | (() => $List$$Type<$StructureTemplate$Palette$$Type>));
}

declare module "com.finndog.mes.mixins.resources.NamespaceResourceManagerAccessor" {
import { $List$$Type } from "java.util.List"
import { $FallbackResourceManager$PackEntry$$Type } from "net.minecraft.server.packs.resources.FallbackResourceManager$PackEntry"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NamespaceResourceManagerAccessor$$Type = ($NamespaceResourceManagerAccessor | (() => $List$$Type<$FallbackResourceManager$PackEntry$$Type>));
}

declare module "com.finndog.moogs_structures.mixins.resources.NamespaceResourceManagerAccessor" {
import { $List$$Type } from "java.util.List"
import { $FallbackResourceManager$PackEntry$$Type } from "net.minecraft.server.packs.resources.FallbackResourceManager$PackEntry"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NamespaceResourceManagerAccessor$$Type = ($NamespaceResourceManagerAccessor | (() => $List$$Type<$FallbackResourceManager$PackEntry$$Type>));
}

declare module "com.finndog.moogs_structures.mixins.world.WorldGenRegionAccessor" {
import { $StructureManager$$Type } from "net.minecraft.world.level.StructureManager"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WorldGenRegionAccessor$$Type = ($WorldGenRegionAccessor | (() => $StructureManager$$Type));
}

declare module "com.finndog.mes.mixins.world.WorldGenRegionAccessor" {
import { $StructureManager$$Type } from "net.minecraft.world.level.StructureManager"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WorldGenRegionAccessor$$Type = ($WorldGenRegionAccessor | (() => $StructureManager$$Type));
}

declare module "com.finndog.moogs_structures.mixins.structures.StructureTemplateManagerAccessor" {
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StructureTemplateManagerAccessor$$Type = ($StructureTemplateManagerAccessor | (() => $ResourceManager$$Type));
}

declare module "com.finndog.moogs_structures.mixins.structures.StructurePoolAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StructurePoolAccessor$$Type = ($StructurePoolAccessor);
}

declare module "com.finndog.moogs_structures.mixins.structures.StructureProcessorAccessor" {
import { $StructureProcessorType$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorType"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StructureProcessorAccessor$$Type = ($StructureProcessorAccessor | (() => $StructureProcessorType$$Type<any>));
}

declare module "com.finndog.mes.mixins.structures.ListPoolElementAccessor" {
import { $List$$Type } from "java.util.List"
import { $StructurePoolElement$$Type } from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ListPoolElementAccessor$$Type = ($ListPoolElementAccessor | (() => $List$$Type<$StructurePoolElement$$Type>));
}

