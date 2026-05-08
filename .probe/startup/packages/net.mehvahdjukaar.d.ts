declare module "net.mehvahdjukaar.supplementaries.common.entities.IFluteParrot" {
import { $Player } from "net.minecraft.world.entity.player.Player"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IFluteParrot$$Type = ($IFluteParrot | ((arg0: $Player) => void));
}

declare module "net.mehvahdjukaar.moonlight.core.mixins.accessor.DispenserBlockAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DispenserBlockAccessor$$Type = ($DispenserBlockAccessor);
}

declare module "net.mehvahdjukaar.supplementaries.mixins.forge.MobBucketItemAccessor" {
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MobBucketItemAccessor$$Type = ($MobBucketItemAccessor | (() => $EntityType$$Type<any>));
}

declare module "net.mehvahdjukaar.moonlight.api.map.type.MapDecorationType" {
import { $CustomMapDecoration, $CustomMapDecoration$$Type } from "net.mehvahdjukaar.moonlight.api.map.CustomMapDecoration"
import { $MapBlockMarker, $MapBlockMarker$$Type } from "net.mehvahdjukaar.moonlight.api.map.markers.MapBlockMarker"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MapDecorationType$$Type<D extends $CustomMapDecoration = $CustomMapDecoration, M extends $MapBlockMarker<D> = $MapBlockMarker<D>> = ($MapDecorationType<D, M>);
}

declare module "net.mehvahdjukaar.supplementaries.common.utils.IQuiverPlayer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IQuiverPlayer$$Type = ($IQuiverPlayer);
}

declare module "net.mehvahdjukaar.moonlight.core.misc.IExtendedPistonTile" {
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Level } from "net.minecraft.world.level.Level"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IExtendedPistonTile$$Type = ($IExtendedPistonTile | ((arg0: $Level, arg1: $BlockPos) => void));
}

declare module "net.mehvahdjukaar.moonlight.api.events.IVillagerBrainEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IVillagerBrainEvent$$Type = ($IVillagerBrainEvent);
}

declare module "net.mehvahdjukaar.moonlight.api.misc.CodecMapRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CodecMapRegistry$$Type<T = any> = ($CodecMapRegistry<T>);
}

declare module "net.mehvahdjukaar.supplementaries.common.utils.SlotReference" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SlotReference$$Type = ($SlotReference);
}

declare module "net.mehvahdjukaar.vista.common.tv.enderman.ITVAngeredEnderman" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ITVAngeredEnderman$$Type = ($ITVAngeredEnderman);
}

declare module "net.mehvahdjukaar.supplementaries.api.IAntiqueTextProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IAntiqueTextProvider$$Type = ($IAntiqueTextProvider);
}

declare module "net.mehvahdjukaar.supplementaries.common.utils.SlotReference$Empty" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SlotReference$Empty$$Type = ($SlotReference$Empty);
}

declare module "net.mehvahdjukaar.moonlight.api.map.CustomMapData$Type" {
import { $CustomMapData, $CustomMapData$$Type } from "net.mehvahdjukaar.moonlight.api.map.CustomMapData"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CustomMapData$Type$$Type<T extends $CustomMapData<any> = $CustomMapData<any>> = ($CustomMapData$Type<T>);
}

declare module "net.mehvahdjukaar.supplementaries.common.entities.ISlimeable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ISlimeable$$Type = ($ISlimeable);
}

declare module "net.mehvahdjukaar.moonlight.api.map.CustomMapData" {
import { $CustomMapData$DirtyCounter, $CustomMapData$DirtyCounter$$Type } from "net.mehvahdjukaar.moonlight.api.map.CustomMapData$DirtyCounter"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CustomMapData$$Type<H extends $CustomMapData$DirtyCounter = $CustomMapData$DirtyCounter> = ($CustomMapData<H>);
}

declare module "net.mehvahdjukaar.moonlight.api.map.CustomMapDecoration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CustomMapDecoration$$Type = ($CustomMapDecoration);
}

declare module "net.mehvahdjukaar.supplementaries.mixins.forge.FireBlockAccessor" {
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Direction } from "net.minecraft.core.Direction"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $Level } from "net.minecraft.world.level.Level"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FireBlockAccessor$$Type = ($FireBlockAccessor | ((arg0: $Level, arg1: $BlockPos, arg2: integer, arg3: $RandomSource, arg4: integer, arg5: $Direction) => void));
}

declare module "net.mehvahdjukaar.supplementaries.client.IModelPartExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IModelPartExtension$$Type = ($IModelPartExtension);
}

declare module "net.mehvahdjukaar.supplementaries.common.items.forge.ShulkerShellItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ShulkerShellItem$$Type = ($ShulkerShellItem);
}

declare module "net.mehvahdjukaar.moonlight.api.events.ILightningStruckBlockEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ILightningStruckBlockEvent$$Type = ($ILightningStruckBlockEvent);
}

declare module "net.mehvahdjukaar.moonlight.api.events.forge.VillagerBrainEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $VillagerBrainEvent$$Type = ($VillagerBrainEvent);
}

declare module "net.mehvahdjukaar.moonlight.api.map.markers.MapBlockMarker" {
import { $CustomMapDecoration, $CustomMapDecoration$$Type } from "net.mehvahdjukaar.moonlight.api.map.CustomMapDecoration"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MapBlockMarker$$Type<D extends $CustomMapDecoration = $CustomMapDecoration> = ($MapBlockMarker<D>);
}

declare module "net.mehvahdjukaar.moonlight.api.events.forge.FireConsumeBlockEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FireConsumeBlockEvent$$Type = ($FireConsumeBlockEvent);
}

declare module "net.mehvahdjukaar.moonlight.core.mixins.forge.ButtonAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ButtonAccessor$$Type = ($ButtonAccessor);
}

declare module "net.mehvahdjukaar.moonlight.api.map.ExpandedMapData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ExpandedMapData$$Type = ($ExpandedMapData);
}

declare module "net.mehvahdjukaar.supplementaries.mixins.LivingEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LivingEntityAccessor$$Type = ($LivingEntityAccessor);
}

declare module "net.mehvahdjukaar.moonlight.api.events.IDropItemOnDeathEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IDropItemOnDeathEvent$$Type = ($IDropItemOnDeathEvent);
}

declare module "net.mehvahdjukaar.moonlight.api.events.forge.DropItemOnDeathEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DropItemOnDeathEvent$$Type = ($DropItemOnDeathEvent);
}

declare module "net.mehvahdjukaar.moonlight.core.misc.VillagerBrainEventInternal" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $VillagerBrainEventInternal$$Type = ($VillagerBrainEventInternal);
}

declare module "net.mehvahdjukaar.moonlight.api.item.additional_placements.BlockPlacerItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockPlacerItem$$Type = ($BlockPlacerItem);
}

declare module "net.mehvahdjukaar.moonlight.api.misc.MapRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MapRegistry$$Type<T = any> = ($MapRegistry<T>);
}

declare module "net.mehvahdjukaar.supplementaries.mixins.AgeableListAccessor" {
import { $Iterable$$Type } from "java.lang.Iterable"
import { $ModelPart$$Type } from "net.minecraft.client.model.geom.ModelPart"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AgeableListAccessor$$Type = ($AgeableListAccessor | (() => $Iterable$$Type<$ModelPart$$Type>));
}

declare module "net.mehvahdjukaar.moonlight.core.mixins.accessor.BrainAccessor" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BrainAccessor$$Type<E extends $LivingEntity = $LivingEntity> = ($BrainAccessor<E>);
}

declare module "net.mehvahdjukaar.moonlight.api.events.forge.LightningStruckBlockEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LightningStruckBlockEvent$$Type = ($LightningStruckBlockEvent);
}

declare module "net.mehvahdjukaar.moonlight.core.misc.IMapDataPacketExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IMapDataPacketExtension$$Type = ($IMapDataPacketExtension);
}

declare module "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AdditionalItemPlacement$$Type = ($AdditionalItemPlacement);
}

declare module "net.mehvahdjukaar.moonlight.api.events.IFireConsumeBlockEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IFireConsumeBlockEvent$$Type = ($IFireConsumeBlockEvent);
}

declare module "net.mehvahdjukaar.moonlight.core.misc.IExtendedItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IExtendedItem$$Type = ($IExtendedItem);
}

declare module "net.mehvahdjukaar.moonlight.core.misc.IHoldingPlayerExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IHoldingPlayerExtension$$Type = ($IHoldingPlayerExtension);
}

declare module "net.mehvahdjukaar.supplementaries.common.block.IConvertableHorse" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IConvertableHorse$$Type = ($IConvertableHorse | (() => boolean));
}

declare module "net.mehvahdjukaar.supplementaries.common.entities.goals.ISuppEvoker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ISuppEvoker$$Type = ($ISuppEvoker);
}

declare module "net.mehvahdjukaar.supplementaries.common.entities.dispenser_minecart.ILevelEventRedirect" {
import { $Vec3 } from "net.minecraft.world.phys.Vec3"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ILevelEventRedirect$$Type = ($ILevelEventRedirect | ((arg0: boolean, arg1: $Vec3) => void));
}

declare module "net.mehvahdjukaar.supplementaries.common.entities.IPartyCreeper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IPartyCreeper$$Type = ($IPartyCreeper);
}

declare module "net.mehvahdjukaar.moonlight.core.mixins.accessor.DispenserBlockEntityAccessor" {
import { $NonNullList$$Type } from "net.minecraft.core.NonNullList"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DispenserBlockEntityAccessor$$Type = ($DispenserBlockEntityAccessor | (() => $NonNullList$$Type<$ItemStack$$Type>));
}

declare module "net.mehvahdjukaar.moonlight.api.map.CustomMapData$DirtyCounter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CustomMapData$DirtyCounter$$Type = ($CustomMapData$DirtyCounter);
}

declare module "net.mehvahdjukaar.moonlight.api.block.IBlockHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IBlockHolder$$Type = ($IBlockHolder);
}

declare module "net.mehvahdjukaar.moonlight.api.events.SimpleEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SimpleEvent$$Type = ($SimpleEvent);
}

declare module "net.mehvahdjukaar.supplementaries.api.IQuiverEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IQuiverEntity$$Type = ($IQuiverEntity);
}

