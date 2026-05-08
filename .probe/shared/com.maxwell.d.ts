declare module "com.maxwell.cyber_ware_port.api.event.CyberwareEvents$Scan$Complete" {
import { $ScannerBlockEntity$$Type } from "com.maxwell.cyber_ware_port.common.block.scanner.ScannerBlockEntity"
import { $CyberwareEvents$Scan } from "com.maxwell.cyber_ware_port.api.event.CyberwareEvents$Scan"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $CyberwareEvents$Scan$Complete extends $CyberwareEvents$Scan {
constructor(scannerBlockEntity0: $ScannerBlockEntity$$Type, itemStack1: $ItemStack$$Type, float2: float)
constructor()

public "getChance"(): float
public "setChance"(float0: float): void
public "setConsumeItem"(boolean0: boolean): void
public "shouldConsumeItem"(): boolean
get "chance"(): float
set "chance"(value: float)
set "consumeItem"(value: boolean)
}
}

declare module "com.maxwell.cyber_ware_port.common.item.base.ICyberware$StackingRule" {
import { $Enum } from "java.lang.Enum"

export class $ICyberware$StackingRule extends $Enum<$ICyberware$StackingRule> {
static readonly "DIMINISHING": $ICyberware$StackingRule
static readonly "LINEAR": $ICyberware$StackingRule
static readonly "STATIC": $ICyberware$StackingRule

public "calculate"(int0: integer, int1: integer): integer
public static "valueOf"(string0: string): $ICyberware$StackingRule
public static "values"(): $ICyberware$StackingRule[]
}
}

declare module "com.maxwell.cyber_ware_port.api.event.CyberwareSurgeryEvent" {
import { $RobosurgeonBlockEntity, $RobosurgeonBlockEntity$$Type } from "com.maxwell.cyber_ware_port.common.block.robosurgeon.RobosurgeonBlockEntity"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $CyberwareSurgeryEvent extends $Event {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, robosurgeonBlockEntity1: $RobosurgeonBlockEntity$$Type)

public "getPatient"(): $LivingEntity
public "getRobosurgeon"(): $RobosurgeonBlockEntity
get "patient"(): $LivingEntity
get "robosurgeon"(): $RobosurgeonBlockEntity
}
}

declare module "com.maxwell.cyber_ware_port.common.block.cwb.CyberwareWorkbenchBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $MenuProvider } from "net.minecraft.world.MenuProvider"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"

export class $CyberwareWorkbenchBlockEntity extends $BlockEntity implements $MenuProvider {
static readonly "BLUEPRINT_SLOT": integer
static readonly "INPUT_SLOT": integer
static readonly "OUTPUT_SLOT_END": integer
static readonly "OUTPUT_SLOT_START": integer
static readonly "PAPER_SLOT": integer
static readonly "SPECIAL_OUTPUT_SLOT": integer

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "createMenu"(int0: integer, inventory1: $Inventory$$Type, player2: $Player$$Type): $AbstractContainerMenu
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "drops"(): void
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getDisplayName"(): $Component
public "getModelData"(): $ModelData
public "getRenderBoundingBox"(): $AABB
public "getRenderProgress"(float0: float): float
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "startCrafting"(): void
public static "tick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, cyberwareWorkbenchBlockEntity3: $CyberwareWorkbenchBlockEntity$$Type): void
get "animationProgress"(): float
set "animationProgress"(value: float)
get "prevAnimationProgress"(): float
set "prevAnimationProgress"(value: float)
get "displayName"(): $Component
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
}
}

declare module "com.maxwell.cyber_ware_port.api.event.CyberwareSurgeryEvent$Pre" {
import { $RobosurgeonBlockEntity$$Type } from "com.maxwell.cyber_ware_port.common.block.robosurgeon.RobosurgeonBlockEntity"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $CyberwareSurgeryEvent } from "com.maxwell.cyber_ware_port.api.event.CyberwareSurgeryEvent"

export class $CyberwareSurgeryEvent$Pre extends $CyberwareSurgeryEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, robosurgeonBlockEntity1: $RobosurgeonBlockEntity$$Type)

public "getDenialReason"(): $Component
public "setDenialReason"(component0: $Component$$Type): void
get "denialReason"(): $Component
set "denialReason"(value: $Component$$Type)
}
}

declare module "com.maxwell.cyber_ware_port.common.item.base.BodyPartType" {
import { $Enum } from "java.lang.Enum"

export class $BodyPartType extends $Enum<$BodyPartType> {
static readonly "ARM_LEFT": $BodyPartType
static readonly "ARM_RIGHT": $BodyPartType
static readonly "BONES": $BodyPartType
static readonly "BRAIN": $BodyPartType
static readonly "EYES": $BodyPartType
static readonly "FOOT_LEFT": $BodyPartType
static readonly "FOOT_RIGHT": $BodyPartType
static readonly "HAND_LEFT": $BodyPartType
static readonly "HAND_RIGHT": $BodyPartType
static readonly "HEART": $BodyPartType
static readonly "LEG_LEFT": $BodyPartType
static readonly "LEG_RIGHT": $BodyPartType
static readonly "LUNGS": $BodyPartType
static readonly "MUSCLE": $BodyPartType
static readonly "NONE": $BodyPartType
static readonly "SKIN": $BodyPartType
static readonly "STOMACH": $BodyPartType

public static "valueOf"(string0: string): $BodyPartType
public static "values"(): $BodyPartType[]
}
}

declare module "com.maxwell.cyber_ware_port.common.item.base.ICyberware" {
import { $EntityTeleportEvent$$Type } from "net.minecraftforge.event.entity.EntityTeleportEvent"
import { $PlayerEvent$BreakSpeed$$Type } from "net.minecraftforge.event.entity.player.PlayerEvent$BreakSpeed"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent$LivingJumpEvent$$Type } from "net.minecraftforge.event.entity.living.LivingEvent$LivingJumpEvent"
import { $Item } from "net.minecraft.world.item.Item"
import { $Set } from "java.util.Set"
import { $PlayerInteractEvent$LeftClickBlock$$Type } from "net.minecraftforge.event.entity.player.PlayerInteractEvent$LeftClickBlock"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $PlayerEvent$HarvestCheck$$Type } from "net.minecraftforge.event.entity.player.PlayerEvent$HarvestCheck"
import { $Attribute } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $LivingHurtEvent$$Type } from "net.minecraftforge.event.entity.living.LivingHurtEvent"
import { $LivingAttackEvent$$Type } from "net.minecraftforge.event.entity.living.LivingAttackEvent"
import { $LivingDeathEvent$$Type } from "net.minecraftforge.event.entity.living.LivingDeathEvent"
import { $LivingFallEvent$$Type } from "net.minecraftforge.event.entity.living.LivingFallEvent"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $MobEffectEvent$Applicable$$Type } from "net.minecraftforge.event.entity.living.MobEffectEvent$Applicable"
import { $LivingEntityUseItemEvent$Tick$$Type } from "net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Tick"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $TickEvent$PlayerTickEvent$$Type } from "net.minecraftforge.event.TickEvent$PlayerTickEvent"
import { $BodyPartType } from "com.maxwell.cyber_ware_port.common.item.base.BodyPartType"
import { $ICyberware$StackingRule } from "com.maxwell.cyber_ware_port.common.item.base.ICyberware$StackingRule"

export interface $ICyberware {
"canToggle"(itemStack0: $ItemStack$$Type): boolean
"getAttributeModifiers"(itemStack0: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
"getBodyPartType"(itemStack0: $ItemStack$$Type): $BodyPartType
"getEnergyConsumption"(itemStack0: $ItemStack$$Type): integer
"getEnergyGeneration"(itemStack0: $ItemStack$$Type): integer
"getEnergyStorage"(itemStack0: $ItemStack$$Type): integer
"getEssenceCost"(itemStack0: $ItemStack$$Type): integer
"getEventConsumption"(itemStack0: $ItemStack$$Type): integer
"getIncompatibleItems"(itemStack0: $ItemStack$$Type): $Set<$Item>
"getMaxInstallAmount"(itemStack0: $ItemStack$$Type): integer
"getPrerequisites"(itemStack0: $ItemStack$$Type): $Set<$Item>
"getQuality"(itemStack0: $ItemStack$$Type): integer
"getSlot"(itemStack0: $ItemStack$$Type): integer
"getStackingEnergyRule"(itemStack0: $ItemStack$$Type): $ICyberware$StackingRule
"hasEnergyProperties"(itemStack0: $ItemStack$$Type): boolean
"isActive"(itemStack0: $ItemStack$$Type): boolean
"isIncompatible"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
"isPristine"(itemStack0: $ItemStack$$Type): boolean
"onBreakSpeed"(breakSpeed0: $PlayerEvent$BreakSpeed$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type): void
"onEntityTeleport"(entityTeleportEvent0: $EntityTeleportEvent$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type): void
"onHarvestCheck"(harvestCheck0: $PlayerEvent$HarvestCheck$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type): void
"onInstalled"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type): void
"onItemUseTick"(tick0: $LivingEntityUseItemEvent$Tick$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type): void
"onLeftClickBlock"(leftClickBlock0: $PlayerInteractEvent$LeftClickBlock$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type): void
"onLivingAttack"(livingAttackEvent0: $LivingAttackEvent$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type): void
"onLivingDeath"(livingDeathEvent0: $LivingDeathEvent$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type): void
"onLivingFall"(livingFallEvent0: $LivingFallEvent$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type): void
"onLivingHurt"(livingHurtEvent0: $LivingHurtEvent$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type): void
"onLivingJump"(livingJumpEvent0: $LivingEvent$LivingJumpEvent$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type): void
"onPlayerTick"(playerTickEvent0: $TickEvent$PlayerTickEvent$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type): void
"onPotionApplicable"(applicable0: $MobEffectEvent$Applicable$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type): void
"onRemoved"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type): void
"onSystemTick"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type): void
"setPristine"(itemStack0: $ItemStack$$Type, boolean1: boolean): void
"toggle"(itemStack0: $ItemStack$$Type): void
}

export namespace $ICyberware {
const probejs$$marker: never
}
export abstract class $ICyberware$$Static implements $ICyberware {
}
}

declare module "com.maxwell.cyber_ware_port.common.block.robosurgeon.RobosurgeonBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $IItemHandlerModifiable } from "net.minecraftforge.items.IItemHandlerModifiable"
import { $MenuProvider } from "net.minecraft.world.MenuProvider"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"

export class $RobosurgeonBlockEntity extends $BlockEntity implements $MenuProvider {
static readonly "SLOTS_PER_PART": integer
static readonly "SLOT_ARMS": integer
static readonly "SLOT_BONES": integer
static readonly "SLOT_BOOTS": integer
static readonly "SLOT_BRAIN": integer
static readonly "SLOT_EYES": integer
static readonly "SLOT_HANDS": integer
static readonly "SLOT_HEART": integer
static readonly "SLOT_LEGS": integer
static readonly "SLOT_LUNGS": integer
static readonly "SLOT_MUSCLE": integer
static readonly "SLOT_SKIN": integer
static readonly "SLOT_STOMACH": integer
static readonly "TOTAL_SLOTS": integer

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "createMenu"(int0: integer, inventory1: $Inventory$$Type, player2: $Player$$Type): $AbstractContainerMenu
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "drops"(): void
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getDisplayName"(): $Component
public "getItemHandler"(): $IItemHandlerModifiable
public "getModelData"(): $ModelData
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "performSurgery"(serverPlayer0: $ServerPlayer$$Type): void
public "populateGhostItems"(serverPlayer0: $ServerPlayer$$Type): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public static "tick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, robosurgeonBlockEntity3: $RobosurgeonBlockEntity$$Type): void
get "displayName"(): $Component
get "itemHandler"(): $IItemHandlerModifiable
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
}
}

declare module "com.maxwell.cyber_ware_port.api.event.CyberwareEvents$Salvage" {
import { $CyberwareWorkbenchBlockEntity } from "com.maxwell.cyber_ware_port.common.block.cwb.CyberwareWorkbenchBlockEntity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export class $CyberwareEvents$Salvage extends $Event {
constructor()

public "getInputStack"(): $ItemStack
public "getTile"(): $CyberwareWorkbenchBlockEntity
get "inputStack"(): $ItemStack
get "tile"(): $CyberwareWorkbenchBlockEntity
}
}

declare module "com.maxwell.cyber_ware_port.api.event.CyberwareEvents$Salvage$Pre" {
import { $CyberwareWorkbenchBlockEntity$$Type } from "com.maxwell.cyber_ware_port.common.block.cwb.CyberwareWorkbenchBlockEntity"
import { $CyberwareEvents$Salvage } from "com.maxwell.cyber_ware_port.api.event.CyberwareEvents$Salvage"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $CyberwareEvents$Salvage$Pre extends $CyberwareEvents$Salvage {
constructor()
constructor(cyberwareWorkbenchBlockEntity0: $CyberwareWorkbenchBlockEntity$$Type, itemStack1: $ItemStack$$Type, float2: float)

public "getBlueprintChance"(): float
public "setBlueprintChance"(float0: float): void
get "blueprintChance"(): float
set "blueprintChance"(value: float)
}
}

declare module "com.maxwell.cyber_ware_port.api.event.CyberwareRejectionEvent" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $CyberwareRejectionEvent extends $Event {
constructor(livingEntity0: $LivingEntity$$Type, int1: integer)
constructor()

public "getCurrentTolerance"(): integer
public "getEntity"(): $LivingEntity
get "currentTolerance"(): integer
get "entity"(): $LivingEntity
}
}

declare module "com.maxwell.cyber_ware_port.common.block.scanner.ScannerBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $MenuProvider } from "net.minecraft.world.MenuProvider"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"

export class $ScannerBlockEntity extends $BlockEntity implements $MenuProvider {
static readonly "MAX_PROGRESS": integer
static readonly "SLOT_INPUT": integer
static readonly "SLOT_OUTPUT": integer
static readonly "SLOT_PAPER": integer

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "createMenu"(int0: integer, inventory1: $Inventory$$Type, player2: $Player$$Type): $AbstractContainerMenu
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "drops"(): void
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getDisplayName"(): $Component
public "getModelData"(): $ModelData
public "getProgress"(): float
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isWorking"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public static "tick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, scannerBlockEntity3: $ScannerBlockEntity$$Type): void
get "displayName"(): $Component
get "modelData"(): $ModelData
get "progress"(): float
get "renderBoundingBox"(): $AABB
get "working"(): boolean
}
}

declare module "com.maxwell.cyber_ware_port.api.event.CyberwareEvents$Scan" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $CyberwareEvents$Scan extends $Event {
constructor()

}
}

declare module "com.maxwell.cyber_ware_port.common.block.charger.ChargerBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"

export class $ChargerBlockEntity extends $BlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getModelData"(): $ModelData
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "tick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): void
public "toggleMode"(player0: $Player$$Type): void
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
}
}

declare module "com.maxwell.cyber_ware_port.api.event.CyberwareToleranceEvent" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $CyberwareToleranceEvent extends $Event {
constructor(livingEntity0: $LivingEntity$$Type, int1: integer)
constructor()

public "getEntity"(): $LivingEntity
public "getNewTolerance"(): integer
public "getOriginalTolerance"(): integer
public "setNewTolerance"(int0: integer): void
get "entity"(): $LivingEntity
get "newTolerance"(): integer
get "originalTolerance"(): integer
set "newTolerance"(value: integer)
}
}

declare module "com.maxwell.cyber_ware_port.api.event.CyberwareEvents$Salvage$Post" {
import { $List, $List$$Type } from "java.util.List"
import { $CyberwareWorkbenchBlockEntity$$Type } from "com.maxwell.cyber_ware_port.common.block.cwb.CyberwareWorkbenchBlockEntity"
import { $CyberwareEvents$Salvage } from "com.maxwell.cyber_ware_port.api.event.CyberwareEvents$Salvage"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $CyberwareEvents$Salvage$Post extends $CyberwareEvents$Salvage {
constructor(cyberwareWorkbenchBlockEntity0: $CyberwareWorkbenchBlockEntity$$Type, itemStack1: $ItemStack$$Type, list2: $List$$Type<$ItemStack$$Type>)
constructor()

public "getOutputs"(): $List<$ItemStack>
get "outputs"(): $List<$ItemStack>
}
}

declare module "com.maxwell.cyber_ware_port.api.event.CyberwareEvents$Recharge" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ChargerBlockEntity, $ChargerBlockEntity$$Type } from "com.maxwell.cyber_ware_port.common.block.charger.ChargerBlockEntity"

export class $CyberwareEvents$Recharge extends $Event {
constructor(livingEntity0: $LivingEntity$$Type, chargerBlockEntity1: $ChargerBlockEntity$$Type, boolean2: boolean)
constructor()

public "getEntity"(): $LivingEntity
public "getTile"(): $ChargerBlockEntity
public "isDrainOperation"(): boolean
get "entity"(): $LivingEntity
get "tile"(): $ChargerBlockEntity
get "drainOperation"(): boolean
}
}

declare module "com.maxwell.cyber_ware_port.api.event.CyberwareAbilityEvent" {
import { $ICyberware, $ICyberware$$Type } from "com.maxwell.cyber_ware_port.common.item.base.ICyberware"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $CyberwareAbilityEvent extends $Event {
constructor(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, iCyberware2: $ICyberware$$Type)
constructor()

public "getCyberware"(): $ICyberware
public "getEntity"(): $LivingEntity
public "getStack"(): $ItemStack
get "cyberware"(): $ICyberware
get "entity"(): $LivingEntity
get "stack"(): $ItemStack
}
}

declare module "com.maxwell.cyber_ware_port.api.event.CyberwareSurgeryEvent$Post" {
import { $RobosurgeonBlockEntity$$Type } from "com.maxwell.cyber_ware_port.common.block.robosurgeon.RobosurgeonBlockEntity"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $CyberwareSurgeryEvent } from "com.maxwell.cyber_ware_port.api.event.CyberwareSurgeryEvent"

export class $CyberwareSurgeryEvent$Post extends $CyberwareSurgeryEvent {
constructor(livingEntity0: $LivingEntity$$Type, robosurgeonBlockEntity1: $RobosurgeonBlockEntity$$Type)
constructor()

}
}

