declare module "net.minecraftforge.event.entity.EntityLeaveLevelEvent" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityEvent } from "net.minecraftforge.event.entity.EntityEvent"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $EntityLeaveLevelEvent extends $EntityEvent {
constructor(entity0: $Entity$$Type, level1: $Level$$Type)
constructor()

public "getLevel"(): $Level
get "level"(): $Level
}
}

declare module "net.minecraftforge.event.entity.player.PlayerContainerEvent$Open" {
import { $PlayerContainerEvent } from "net.minecraftforge.event.entity.player.PlayerContainerEvent"
import { $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerContainerEvent$Open extends $PlayerContainerEvent {
constructor(player0: $Player$$Type, abstractContainerMenu1: $AbstractContainerMenu$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.entity.EntityTeleportEvent$EnderPearl" {
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $HitResult, $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityTeleportEvent } from "net.minecraftforge.event.entity.EntityTeleportEvent"
import { $ThrownEnderpearl, $ThrownEnderpearl$$Type } from "net.minecraft.world.entity.projectile.ThrownEnderpearl"

export class $EntityTeleportEvent$EnderPearl extends $EntityTeleportEvent {
constructor(serverPlayer0: $ServerPlayer$$Type, double1: double, double2: double, double3: double, thrownEnderpearl4: $ThrownEnderpearl$$Type, float5: float, hitResult6: $HitResult$$Type)
constructor()

public "getAttackDamage"(): float
public "getHitResult"(): $HitResult
public "getPearlEntity"(): $ThrownEnderpearl
public "getPlayer"(): $ServerPlayer
public "setAttackDamage"(float0: float): void
get "attackDamage"(): float
get "hitResult"(): $HitResult
get "pearlEntity"(): $ThrownEnderpearl
get "player"(): $ServerPlayer
set "attackDamage"(value: float)
}
}

declare module "net.minecraftforge.event.entity.EntityTeleportEvent$TeleportCommand" {
import { $EntityTeleportEvent } from "net.minecraftforge.event.entity.EntityTeleportEvent"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"

export class $EntityTeleportEvent$TeleportCommand extends $EntityTeleportEvent {
constructor(entity0: $Entity$$Type, double1: double, double2: double, double3: double)
constructor()

}
}

declare module "net.minecraftforge.event.entity.SpawnPlacementRegisterEvent$MergedSpawnPredicate" {
import { $SpawnPlacements$SpawnPredicate, $SpawnPlacements$SpawnPredicate$$Type } from "net.minecraft.world.entity.SpawnPlacements$SpawnPredicate"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $Heightmap$Types, $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"
import { $SpawnPlacements$Type, $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"

export class $SpawnPlacementRegisterEvent$MergedSpawnPredicate<T extends $Entity = $Entity> {
constructor(spawnPredicate0: $SpawnPlacements$SpawnPredicate$$Type<T>, type1: $SpawnPlacements$Type$$Type, types2: $Heightmap$Types$$Type)

public "build"(): $SpawnPlacements$SpawnPredicate<T>
public "getHeightmapType"(): $Heightmap$Types
public "getSpawnType"(): $SpawnPlacements$Type
get "heightmapType"(): $Heightmap$Types
get "spawnType"(): $SpawnPlacements$Type
}
}

declare module "net.minecraftforge.event.entity.EntityEvent$EntityConstructing" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityEvent } from "net.minecraftforge.event.entity.EntityEvent"

export class $EntityEvent$EntityConstructing extends $EntityEvent {
constructor(entity0: $Entity$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.entity.player.PlayerInteractEvent$RightClickEmpty" {
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $PlayerInteractEvent } from "net.minecraftforge.event.entity.player.PlayerInteractEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerInteractEvent$RightClickEmpty extends $PlayerInteractEvent {
constructor(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.entity.player.PlayerInteractEvent$RightClickBlock" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockHitResult, $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $Event$Result, $Event$Result$$Type } from "net.minecraftforge.eventbus.api.Event$Result"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $PlayerInteractEvent } from "net.minecraftforge.event.entity.player.PlayerInteractEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerInteractEvent$RightClickBlock extends $PlayerInteractEvent {
constructor(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, blockPos2: $BlockPos$$Type, blockHitResult3: $BlockHitResult$$Type)
constructor()

public "getHitVec"(): $BlockHitResult
public "getUseBlock"(): $Event$Result
public "getUseItem"(): $Event$Result
public "setUseBlock"(result0: $Event$Result$$Type): void
public "setUseItem"(result0: $Event$Result$$Type): void
get "hitVec"(): $BlockHitResult
get "useBlock"(): $Event$Result
get "useItem"(): $Event$Result
set "useBlock"(value: $Event$Result$$Type)
set "useItem"(value: $Event$Result$$Type)
}
}

declare module "net.minecraftforge.event.entity.player.ItemTooltipEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $List, $List$$Type } from "java.util.List"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $TooltipFlag, $TooltipFlag$$Type } from "net.minecraft.world.item.TooltipFlag"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ItemTooltipEvent extends $PlayerEvent {
constructor(itemStack0: $ItemStack$$Type, player1: $Player$$Type, list2: $List$$Type<$Component$$Type>, tooltipFlag3: $TooltipFlag$$Type)
constructor()

public "getFlags"(): $TooltipFlag
public "getItemStack"(): $ItemStack
public "getToolTip"(): $List<$Component>
get "flags"(): $TooltipFlag
get "itemStack"(): $ItemStack
get "toolTip"(): $List<$Component>
}
}

declare module "net.minecraftforge.event.entity.player.ArrowNockEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $InteractionResultHolder, $InteractionResultHolder$$Type } from "net.minecraft.world.InteractionResultHolder"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ArrowNockEvent extends $PlayerEvent {
constructor(player0: $Player$$Type, itemStack1: $ItemStack$$Type, interactionHand2: $InteractionHand$$Type, level3: $Level$$Type, boolean4: boolean)
constructor()

public "getAction"(): $InteractionResultHolder<$ItemStack>
public "getBow"(): $ItemStack
public "getHand"(): $InteractionHand
public "getLevel"(): $Level
public "hasAmmo"(): boolean
public "setAction"(interactionResultHolder0: $InteractionResultHolder$$Type<$ItemStack$$Type>): void
get "action"(): $InteractionResultHolder<$ItemStack>
get "bow"(): $ItemStack
get "hand"(): $InteractionHand
get "level"(): $Level
set "action"(value: $InteractionResultHolder$$Type<$ItemStack$$Type>)
}
}

declare module "net.minecraftforge.event.entity.EntityEvent" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $EntityEvent extends $Event {
constructor()
constructor(entity0: $Entity$$Type)

public "getEntity"(): $Entity
get "entity"(): $Entity
}
}

declare module "net.minecraftforge.event.entity.EntityTravelToDimensionEvent" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityEvent } from "net.minecraftforge.event.entity.EntityEvent"
import { $Level } from "net.minecraft.world.level.Level"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export class $EntityTravelToDimensionEvent extends $EntityEvent {
constructor(entity0: $Entity$$Type, resourceKey1: $ResourceKey$$Type<$Level>)
constructor()

public "getDimension"(): $ResourceKey<$Level>
get "dimension"(): $ResourceKey<$Level>
}
}

declare module "net.minecraftforge.event.entity.player.PlayerEvent$TabListNameFormat" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerEvent$TabListNameFormat extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type)

public "getDisplayName"(): $Component
public "setDisplayName"(component0: $Component$$Type): void
get "displayName"(): $Component
set "displayName"(value: $Component$$Type)
}
}

declare module "net.minecraftforge.event.entity.EntityAttributeCreationEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $AttributeSupplier$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeSupplier"
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Map$$Type } from "java.util.Map"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $EntityAttributeCreationEvent extends $Event implements $IModBusEvent {
constructor(map0: $Map$$Type<$EntityType$$Type<$LivingEntity$$Type>, $AttributeSupplier$$Type>)
constructor()

public "put"(entityType0: $EntityType$$Type<$LivingEntity$$Type>, attributeSupplier1: $AttributeSupplier$$Type): void
}
}

declare module "net.minecraftforge.event.entity.player.PlayerEvent$ItemCraftedEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerEvent$ItemCraftedEvent extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type, itemStack1: $ItemStack$$Type, container2: $Container$$Type)

public "getCrafting"(): $ItemStack
public "getInventory"(): $Container
get "crafting"(): $ItemStack
get "inventory"(): $Container
}
}

declare module "net.minecraftforge.event.entity.ProjectileImpactEvent" {
import { $HitResult, $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $Projectile, $Projectile$$Type } from "net.minecraft.world.entity.projectile.Projectile"
import { $ProjectileImpactEvent$ImpactResult, $ProjectileImpactEvent$ImpactResult$$Type } from "net.minecraftforge.event.entity.ProjectileImpactEvent$ImpactResult"
import { $EntityEvent } from "net.minecraftforge.event.entity.EntityEvent"

export class $ProjectileImpactEvent extends $EntityEvent {
constructor(projectile0: $Projectile$$Type, hitResult1: $HitResult$$Type)
constructor()

public "getImpactResult"(): $ProjectileImpactEvent$ImpactResult
public "getProjectile"(): $Projectile
public "getRayTraceResult"(): $HitResult
public "setImpactResult"(impactResult0: $ProjectileImpactEvent$ImpactResult$$Type): void
get "impactResult"(): $ProjectileImpactEvent$ImpactResult
get "projectile"(): $Projectile
get "rayTraceResult"(): $HitResult
set "impactResult"(value: $ProjectileImpactEvent$ImpactResult$$Type)
}
}

declare module "net.minecraftforge.event.entity.player.ItemFishedEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $List$$Type } from "java.util.List"
import { $FishingHook, $FishingHook$$Type } from "net.minecraft.world.entity.projectile.FishingHook"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $ItemFishedEvent extends $PlayerEvent {
constructor(list0: $List$$Type<$ItemStack$$Type>, int1: integer, fishingHook2: $FishingHook$$Type)
constructor()

public "damageRodBy"(int0: integer): void
public "getDrops"(): $NonNullList<$ItemStack>
public "getHookEntity"(): $FishingHook
public "getRodDamage"(): integer
get "drops"(): $NonNullList<$ItemStack>
get "hookEntity"(): $FishingHook
get "rodDamage"(): integer
}
}

declare module "net.minecraftforge.event.entity.player.PlayerSleepInBedEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Player$BedSleepingProblem, $Player$BedSleepingProblem$$Type } from "net.minecraft.world.entity.player.Player$BedSleepingProblem"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerSleepInBedEvent extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type, optional1: $Optional$$Type<$BlockPos$$Type>)

public "getOptionalPos"(): $Optional<$BlockPos>
public "getPos"(): $BlockPos
public "getResultStatus"(): $Player$BedSleepingProblem
public "setResult"(bedSleepingProblem0: $Player$BedSleepingProblem$$Type): void
get "optionalPos"(): $Optional<$BlockPos>
get "pos"(): $BlockPos
get "resultStatus"(): $Player$BedSleepingProblem
set "result"(value: $Player$BedSleepingProblem$$Type)
}
}

declare module "net.minecraftforge.event.entity.living.LivingDestroyBlockEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export class $LivingDestroyBlockEvent extends $LivingEvent {
constructor(livingEntity0: $LivingEntity$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)
constructor()

public "getPos"(): $BlockPos
public "getState"(): $BlockState
get "pos"(): $BlockPos
get "state"(): $BlockState
}
}

declare module "net.minecraftforge.event.entity.living.LivingEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EntityEvent } from "net.minecraftforge.event.entity.EntityEvent"

export class $LivingEvent extends $EntityEvent {
constructor(livingEntity0: $LivingEntity$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.entity.living.MobSpawnEvent" {
import { $ServerLevelAccessor } from "net.minecraft.world.level.ServerLevelAccessor"
import { $EntityEvent } from "net.minecraftforge.event.entity.EntityEvent"

export class $MobSpawnEvent extends $EntityEvent {
constructor()

public "getLevel"(): $ServerLevelAccessor
public "getX"(): double
public "getY"(): double
public "getZ"(): double
get "level"(): $ServerLevelAccessor
get "x"(): double
get "y"(): double
get "z"(): double
}
}

declare module "net.minecraftforge.event.entity.player.AdvancementEvent$AdvancementProgressEvent$ProgressType" {
import { $Enum } from "java.lang.Enum"

export class $AdvancementEvent$AdvancementProgressEvent$ProgressType extends $Enum<$AdvancementEvent$AdvancementProgressEvent$ProgressType> {
static readonly "GRANT": $AdvancementEvent$AdvancementProgressEvent$ProgressType
static readonly "REVOKE": $AdvancementEvent$AdvancementProgressEvent$ProgressType

public static "valueOf"(string0: string): $AdvancementEvent$AdvancementProgressEvent$ProgressType
public static "values"(): $AdvancementEvent$AdvancementProgressEvent$ProgressType[]
}
}

declare module "net.minecraftforge.event.entity.living.LivingKnockBackEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"

export class $LivingKnockBackEvent extends $LivingEvent {
constructor(livingEntity0: $LivingEntity$$Type, float1: float, double2: double, double3: double)
constructor()

public "getOriginalRatioX"(): double
public "getOriginalRatioZ"(): double
public "getOriginalStrength"(): float
public "getRatioX"(): double
public "getRatioZ"(): double
public "getStrength"(): float
public "setRatioX"(double0: double): void
public "setRatioZ"(double0: double): void
public "setStrength"(float0: float): void
get "originalRatioX"(): double
get "originalRatioZ"(): double
get "originalStrength"(): float
get "ratioX"(): double
get "ratioZ"(): double
get "strength"(): float
set "ratioX"(value: double)
set "ratioZ"(value: double)
set "strength"(value: float)
}
}

declare module "net.minecraftforge.event.entity.player.AdvancementEvent$AdvancementProgressEvent" {
import { $AdvancementProgress, $AdvancementProgress$$Type } from "net.minecraft.advancements.AdvancementProgress"
import { $Advancement$$Type } from "net.minecraft.advancements.Advancement"
import { $AdvancementEvent } from "net.minecraftforge.event.entity.player.AdvancementEvent"
import { $AdvancementEvent$AdvancementProgressEvent$ProgressType, $AdvancementEvent$AdvancementProgressEvent$ProgressType$$Type } from "net.minecraftforge.event.entity.player.AdvancementEvent$AdvancementProgressEvent$ProgressType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $AdvancementEvent$AdvancementProgressEvent extends $AdvancementEvent {
constructor()
constructor(player0: $Player$$Type, advancement1: $Advancement$$Type, advancementProgress2: $AdvancementProgress$$Type, string3: string, progressType4: $AdvancementEvent$AdvancementProgressEvent$ProgressType$$Type)

public "getAdvancementProgress"(): $AdvancementProgress
public "getCriterionName"(): string
public "getProgressType"(): $AdvancementEvent$AdvancementProgressEvent$ProgressType
get "advancementProgress"(): $AdvancementProgress
get "criterionName"(): string
get "progressType"(): $AdvancementEvent$AdvancementProgressEvent$ProgressType
}
}

declare module "net.minecraftforge.event.entity.player.PlayerEvent$HarvestCheck" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerEvent$HarvestCheck extends $PlayerEvent {
constructor(player0: $Player$$Type, blockState1: $BlockState$$Type, boolean2: boolean)
constructor()

public "canHarvest"(): boolean
public "getTargetBlock"(): $BlockState
public "setCanHarvest"(boolean0: boolean): void
get "targetBlock"(): $BlockState
}
}

declare module "net.minecraftforge.event.entity.player.PlayerXpEvent$LevelChange" {
import { $PlayerXpEvent } from "net.minecraftforge.event.entity.player.PlayerXpEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerXpEvent$LevelChange extends $PlayerXpEvent {
constructor()
constructor(player0: $Player$$Type, int1: integer)

public "getLevels"(): integer
public "setLevels"(int0: integer): void
get "levels"(): integer
set "levels"(value: integer)
}
}

declare module "net.minecraftforge.event.entity.player.PlayerEvent$StartTracking" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerEvent$StartTracking extends $PlayerEvent {
constructor(player0: $Player$$Type, entity1: $Entity$$Type)
constructor()

public "getTarget"(): $Entity
get "target"(): $Entity
}
}

declare module "net.minecraftforge.event.entity.player.AnvilRepairEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $AnvilRepairEvent extends $PlayerEvent {
constructor(player0: $Player$$Type, itemStack1: $ItemStack$$Type, itemStack2: $ItemStack$$Type, itemStack3: $ItemStack$$Type)
constructor()

public "getBreakChance"(): float
public "getLeft"(): $ItemStack
public "getOutput"(): $ItemStack
public "getRight"(): $ItemStack
public "setBreakChance"(float0: float): void
get "breakChance"(): float
get "left"(): $ItemStack
get "output"(): $ItemStack
get "right"(): $ItemStack
set "breakChance"(value: float)
}
}

declare module "net.minecraftforge.event.entity.SpawnPlacementRegisterEvent$Operation" {
import { $Enum } from "java.lang.Enum"

export class $SpawnPlacementRegisterEvent$Operation extends $Enum<$SpawnPlacementRegisterEvent$Operation> {
static readonly "AND": $SpawnPlacementRegisterEvent$Operation
static readonly "OR": $SpawnPlacementRegisterEvent$Operation
static readonly "REPLACE": $SpawnPlacementRegisterEvent$Operation

public static "valueOf"(string0: string): $SpawnPlacementRegisterEvent$Operation
public static "values"(): $SpawnPlacementRegisterEvent$Operation[]
}
}

declare module "net.minecraftforge.event.entity.EntityAttributeModificationEvent" {
import { $List } from "java.util.List"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EntityType, $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Map$$Type } from "java.util.Map"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $AttributeSupplier$Builder$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeSupplier$Builder"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"

export class $EntityAttributeModificationEvent extends $Event implements $IModBusEvent {
constructor(map0: $Map$$Type<$EntityType$$Type<$LivingEntity$$Type>, $AttributeSupplier$Builder$$Type>)
constructor()

public "add"(entityType0: $EntityType$$Type<$LivingEntity$$Type>, attribute1: $Attribute$$Type, double2: double): void
public "add"(entityType0: $EntityType$$Type<$LivingEntity$$Type>, attribute1: $Attribute$$Type): void
public "getTypes"(): $List<$EntityType<$LivingEntity>>
public "has"(entityType0: $EntityType$$Type<$LivingEntity$$Type>, attribute1: $Attribute$$Type): boolean
get "types"(): $List<$EntityType<$LivingEntity>>
}
}

declare module "net.minecraftforge.event.entity.player.PlayerInteractEvent$LeftClickBlock$Action" {
import { $Enum } from "java.lang.Enum"
import { $ServerboundPlayerActionPacket$Action$$Type } from "net.minecraft.network.protocol.game.ServerboundPlayerActionPacket$Action"

export class $PlayerInteractEvent$LeftClickBlock$Action extends $Enum<$PlayerInteractEvent$LeftClickBlock$Action> {
static readonly "ABORT": $PlayerInteractEvent$LeftClickBlock$Action
static readonly "CLIENT_HOLD": $PlayerInteractEvent$LeftClickBlock$Action
static readonly "START": $PlayerInteractEvent$LeftClickBlock$Action
static readonly "STOP": $PlayerInteractEvent$LeftClickBlock$Action

public static "convert"(action0: $ServerboundPlayerActionPacket$Action$$Type): $PlayerInteractEvent$LeftClickBlock$Action
public static "valueOf"(string0: string): $PlayerInteractEvent$LeftClickBlock$Action
public static "values"(): $PlayerInteractEvent$LeftClickBlock$Action[]
}
}

declare module "net.minecraftforge.event.entity.player.PlayerContainerEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerContainerEvent extends $PlayerEvent {
constructor(player0: $Player$$Type, abstractContainerMenu1: $AbstractContainerMenu$$Type)
constructor()

public "getContainer"(): $AbstractContainerMenu
get "container"(): $AbstractContainerMenu
}
}

declare module "net.minecraftforge.event.entity.player.PlayerEvent$ItemPickupEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $ItemEntity, $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerEvent$ItemPickupEvent extends $PlayerEvent {
constructor(player0: $Player$$Type, itemEntity1: $ItemEntity$$Type, itemStack2: $ItemStack$$Type)
constructor()

public "getOriginalEntity"(): $ItemEntity
public "getStack"(): $ItemStack
get "originalEntity"(): $ItemEntity
get "stack"(): $ItemStack
}
}

declare module "net.minecraftforge.event.entity.living.LivingSwapItemsEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"

export class $LivingSwapItemsEvent extends $LivingEvent {
constructor(livingEntity0: $LivingEntity$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.entity.living.LivingEntityUseItemEvent" {
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export class $LivingEntityUseItemEvent extends $LivingEvent {
constructor()

public "getDuration"(): integer
public "getItem"(): $ItemStack
public "setDuration"(int0: integer): void
get "duration"(): integer
get "item"(): $ItemStack
set "duration"(value: integer)
}
}

declare module "net.minecraftforge.event.entity.player.PlayerSetSpawnEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Level } from "net.minecraft.world.level.Level"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerSetSpawnEvent extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type, resourceKey1: $ResourceKey$$Type<$Level>, blockPos2: $BlockPos$$Type, boolean3: boolean)

public "getNewSpawn"(): $BlockPos
public "getSpawnLevel"(): $ResourceKey<$Level>
public "isForced"(): boolean
get "newSpawn"(): $BlockPos
get "spawnLevel"(): $ResourceKey<$Level>
get "forced"(): boolean
}
}

declare module "net.minecraftforge.event.entity.player.PlayerSpawnPhantomsEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerSpawnPhantomsEvent extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type, int1: integer)

public "getPhantomsToSpawn"(): integer
public "setPhantomsToSpawn"(int0: integer): void
get "phantomsToSpawn"(): integer
set "phantomsToSpawn"(value: integer)
}
}

declare module "net.minecraftforge.event.entity.living.LivingMakeBrainEvent" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BrainBuilder, $BrainBuilder$$Type } from "net.minecraftforge.common.util.BrainBuilder"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"

export class $LivingMakeBrainEvent extends $LivingEvent {
constructor(livingEntity0: $LivingEntity$$Type, brainBuilder1: $BrainBuilder$$Type<any>)
constructor()

public "getTypedBrainBuilder"<E extends $LivingEntity>(e0: E): $BrainBuilder<E>
}
}

declare module "net.minecraftforge.event.entity.living.MobEffectEvent$Applicable" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $MobEffectEvent } from "net.minecraftforge.event.entity.living.MobEffectEvent"
import { $MobEffectInstance$$Type } from "net.minecraft.world.effect.MobEffectInstance"

export class $MobEffectEvent$Applicable extends $MobEffectEvent {
constructor(livingEntity0: $LivingEntity$$Type, mobEffectInstance1: $MobEffectInstance$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.entity.player.PlayerInteractEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Direction } from "net.minecraft.core.Direction"
import { $InteractionResult, $InteractionResult$$Type } from "net.minecraft.world.InteractionResult"
import { $InteractionHand } from "net.minecraft.world.InteractionHand"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level } from "net.minecraft.world.level.Level"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export class $PlayerInteractEvent extends $PlayerEvent {
constructor()

public "getCancellationResult"(): $InteractionResult
public "getFace"(): $Direction
public "getHand"(): $InteractionHand
public "getItemStack"(): $ItemStack
public "getLevel"(): $Level
public "getPos"(): $BlockPos
public "getSide"(): $LogicalSide
public "setCancellationResult"(interactionResult0: $InteractionResult$$Type): void
get "cancellationResult"(): $InteractionResult
get "face"(): $Direction
get "hand"(): $InteractionHand
get "itemStack"(): $ItemStack
get "level"(): $Level
get "pos"(): $BlockPos
get "side"(): $LogicalSide
set "cancellationResult"(value: $InteractionResult$$Type)
}
}

declare module "net.minecraftforge.event.entity.EntityMountEvent" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityEvent } from "net.minecraftforge.event.entity.EntityEvent"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $EntityMountEvent extends $EntityEvent {
constructor(entity0: $Entity$$Type, entity1: $Entity$$Type, level2: $Level$$Type, boolean3: boolean)
constructor()

public "getEntityBeingMounted"(): $Entity
public "getEntityMounting"(): $Entity
public "getLevel"(): $Level
public "isDismounting"(): boolean
public "isMounting"(): boolean
get "entityBeingMounted"(): $Entity
get "entityMounting"(): $Entity
get "level"(): $Level
get "dismounting"(): boolean
get "mounting"(): boolean
}
}

declare module "net.minecraftforge.event.entity.player.PlayerEvent$LoadFromFile" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $File, $File$$Type } from "java.io.File"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerEvent$LoadFromFile extends $PlayerEvent {
constructor(player0: $Player$$Type, file1: $File$$Type, string2: string)
constructor()

public "getPlayerDirectory"(): $File
public "getPlayerFile"(string0: string): $File
public "getPlayerUUID"(): string
get "playerDirectory"(): $File
get "playerUUID"(): string
}
}

declare module "net.minecraftforge.event.entity.living.LivingDamageEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"

export class $LivingDamageEvent extends $LivingEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, damageSource1: $DamageSource$$Type, float2: float)

public "getAmount"(): float
public "getSource"(): $DamageSource
public "setAmount"(float0: float): void
get "amount"(): float
get "source"(): $DamageSource
set "amount"(value: float)
}
}

declare module "net.minecraftforge.event.entity.player.EntityItemPickupEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $ItemEntity, $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $EntityItemPickupEvent extends $PlayerEvent {
constructor(player0: $Player$$Type, itemEntity1: $ItemEntity$$Type)
constructor()

public "getItem"(): $ItemEntity
get "item"(): $ItemEntity
}
}

declare module "net.minecraftforge.event.entity.living.LivingEvent$LivingTickEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"

export class $LivingEvent$LivingTickEvent extends $LivingEvent {
constructor(livingEntity0: $LivingEntity$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.entity.player.CriticalHitEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $CriticalHitEvent extends $PlayerEvent {
constructor(player0: $Player$$Type, entity1: $Entity$$Type, float2: float, boolean3: boolean)
constructor()

public "getDamageModifier"(): float
public "getOldDamageModifier"(): float
public "getTarget"(): $Entity
public "isVanillaCritical"(): boolean
public "setDamageModifier"(float0: float): void
get "damageModifier"(): float
get "oldDamageModifier"(): float
get "target"(): $Entity
get "vanillaCritical"(): boolean
set "damageModifier"(value: float)
}
}

declare module "net.minecraftforge.event.entity.player.BonemealEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $BonemealEvent extends $PlayerEvent {
constructor(player0: $Player$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, itemStack4: $ItemStack$$Type)
constructor()

public "getBlock"(): $BlockState
public "getLevel"(): $Level
public "getPos"(): $BlockPos
public "getStack"(): $ItemStack
get "block"(): $BlockState
get "level"(): $Level
get "pos"(): $BlockPos
get "stack"(): $ItemStack
}
}

declare module "net.minecraftforge.event.entity.EntityEvent$Size" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Pose, $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $EntityDimensions, $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $EntityEvent } from "net.minecraftforge.event.entity.EntityEvent"

/** @deprecated */
export class $EntityEvent$Size extends $EntityEvent {
constructor(entity0: $Entity$$Type, pose1: $Pose$$Type, entityDimensions2: $EntityDimensions$$Type)
constructor()
constructor(entity0: $Entity$$Type, pose1: $Pose$$Type, entityDimensions2: $EntityDimensions$$Type, float3: float)
constructor(entity0: $Entity$$Type, pose1: $Pose$$Type, entityDimensions2: $EntityDimensions$$Type, entityDimensions3: $EntityDimensions$$Type, float4: float, float5: float)

public "getNewEyeHeight"(): float
public "getNewSize"(): $EntityDimensions
public "getOldEyeHeight"(): float
public "getOldSize"(): $EntityDimensions
public "getOriginalSize"(): $EntityDimensions
public "getPose"(): $Pose
public "setNewEyeHeight"(float0: float): void
public "setNewSize"(entityDimensions0: $EntityDimensions$$Type, boolean1: boolean): void
public "setNewSize"(entityDimensions0: $EntityDimensions$$Type): void
get "newEyeHeight"(): float
get "newSize"(): $EntityDimensions
get "oldEyeHeight"(): float
get "oldSize"(): $EntityDimensions
get "originalSize"(): $EntityDimensions
get "pose"(): $Pose
set "newEyeHeight"(value: float)
set "newSize"(value: $EntityDimensions$$Type)
}
}

declare module "net.minecraftforge.event.entity.living.LivingHurtEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"

export class $LivingHurtEvent extends $LivingEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, damageSource1: $DamageSource$$Type, float2: float)

public "getAmount"(): float
public "getSource"(): $DamageSource
public "setAmount"(float0: float): void
get "amount"(): float
get "source"(): $DamageSource
set "amount"(value: float)
}
}

declare module "net.minecraftforge.event.entity.living.LivingGetProjectileEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $LivingGetProjectileEvent extends $LivingEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, itemStack2: $ItemStack$$Type)

public "getProjectileItemStack"(): $ItemStack
public "getProjectileWeaponItemStack"(): $ItemStack
public "setProjectileItemStack"(itemStack0: $ItemStack$$Type): void
get "projectileItemStack"(): $ItemStack
get "projectileWeaponItemStack"(): $ItemStack
set "projectileItemStack"(value: $ItemStack$$Type)
}
}

declare module "net.minecraftforge.event.entity.living.LivingChangeTargetEvent" {
import { $LivingChangeTargetEvent$ILivingTargetType, $LivingChangeTargetEvent$ILivingTargetType$$Type } from "net.minecraftforge.event.entity.living.LivingChangeTargetEvent$ILivingTargetType"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"

export class $LivingChangeTargetEvent extends $LivingEvent {
constructor(livingEntity0: $LivingEntity$$Type, livingEntity1: $LivingEntity$$Type, iLivingTargetType2: $LivingChangeTargetEvent$ILivingTargetType$$Type)
constructor()

public "getNewTarget"(): $LivingEntity
public "getOriginalTarget"(): $LivingEntity
public "getTargetType"(): $LivingChangeTargetEvent$ILivingTargetType
public "setNewTarget"(livingEntity0: $LivingEntity$$Type): void
get "newTarget"(): $LivingEntity
get "originalTarget"(): $LivingEntity
get "targetType"(): $LivingChangeTargetEvent$ILivingTargetType
set "newTarget"(value: $LivingEntity$$Type)
}
}

declare module "net.minecraftforge.event.entity.living.MobSpawnEvent$SpawnPlacementCheck" {
import { $ServerLevelAccessor, $ServerLevelAccessor$$Type } from "net.minecraft.world.level.ServerLevelAccessor"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $EntityType, $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $MobSpawnType, $MobSpawnType$$Type } from "net.minecraft.world.entity.MobSpawnType"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $RandomSource, $RandomSource$$Type } from "net.minecraft.util.RandomSource"

export class $MobSpawnEvent$SpawnPlacementCheck extends $Event {
constructor(entityType0: $EntityType$$Type<any>, serverLevelAccessor1: $ServerLevelAccessor$$Type, mobSpawnType2: $MobSpawnType$$Type, blockPos3: $BlockPos$$Type, randomSource4: $RandomSource$$Type, boolean5: boolean)
constructor()

public "getDefaultResult"(): boolean
public "getEntityType"(): $EntityType<any>
public "getLevel"(): $ServerLevelAccessor
public "getPos"(): $BlockPos
public "getRandom"(): $RandomSource
public "getSpawnType"(): $MobSpawnType
get "defaultResult"(): boolean
get "entityType"(): $EntityType<any>
get "level"(): $ServerLevelAccessor
get "pos"(): $BlockPos
get "random"(): $RandomSource
get "spawnType"(): $MobSpawnType
}
}

declare module "net.minecraftforge.event.entity.living.MobSpawnEvent$FinalizeSpawn" {
import { $ServerLevelAccessor$$Type } from "net.minecraft.world.level.ServerLevelAccessor"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BaseSpawner, $BaseSpawner$$Type } from "net.minecraft.world.level.BaseSpawner"
import { $MobSpawnType, $MobSpawnType$$Type } from "net.minecraft.world.entity.MobSpawnType"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $MobSpawnEvent } from "net.minecraftforge.event.entity.living.MobSpawnEvent"
import { $DifficultyInstance, $DifficultyInstance$$Type } from "net.minecraft.world.DifficultyInstance"
import { $SpawnGroupData, $SpawnGroupData$$Type } from "net.minecraft.world.entity.SpawnGroupData"

export class $MobSpawnEvent$FinalizeSpawn extends $MobSpawnEvent {
constructor(mob0: $Mob$$Type, serverLevelAccessor1: $ServerLevelAccessor$$Type, double2: double, double3: double, double4: double, difficultyInstance5: $DifficultyInstance$$Type, mobSpawnType6: $MobSpawnType$$Type, spawnGroupData7: $SpawnGroupData$$Type, compoundTag8: $CompoundTag$$Type, baseSpawner9: $BaseSpawner$$Type)
constructor()

public "getDifficulty"(): $DifficultyInstance
public "getSpawnData"(): $SpawnGroupData
public "getSpawnTag"(): $CompoundTag
public "getSpawnType"(): $MobSpawnType
public "getSpawner"(): $BaseSpawner
public "isSpawnCancelled"(): boolean
public "setDifficulty"(difficultyInstance0: $DifficultyInstance$$Type): void
public "setSpawnCancelled"(boolean0: boolean): void
public "setSpawnData"(spawnGroupData0: $SpawnGroupData$$Type): void
public "setSpawnTag"(compoundTag0: $CompoundTag$$Type): void
get "difficulty"(): $DifficultyInstance
get "spawnData"(): $SpawnGroupData
get "spawnTag"(): $CompoundTag
get "spawnType"(): $MobSpawnType
get "spawner"(): $BaseSpawner
get "spawnCancelled"(): boolean
set "difficulty"(value: $DifficultyInstance$$Type)
set "spawnCancelled"(value: boolean)
set "spawnData"(value: $SpawnGroupData$$Type)
set "spawnTag"(value: $CompoundTag$$Type)
}
}

declare module "net.minecraftforge.event.entity.living.LivingEvent$LivingJumpEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"

export class $LivingEvent$LivingJumpEvent extends $LivingEvent {
constructor(livingEntity0: $LivingEntity$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.entity.player.SleepingTimeCheckEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $SleepingTimeCheckEvent extends $PlayerEvent {
constructor(player0: $Player$$Type, optional1: $Optional$$Type<$BlockPos$$Type>)
constructor()

public "getSleepingLocation"(): $Optional<$BlockPos>
get "sleepingLocation"(): $Optional<$BlockPos>
}
}

declare module "net.minecraftforge.event.entity.living.BabyEntitySpawnEvent" {
import { $AgeableMob, $AgeableMob$$Type } from "net.minecraft.world.entity.AgeableMob"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Mob, $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $Player } from "net.minecraft.world.entity.player.Player"

export class $BabyEntitySpawnEvent extends $Event {
constructor(mob0: $Mob$$Type, mob1: $Mob$$Type, ageableMob2: $AgeableMob$$Type)
constructor()

public "getCausedByPlayer"(): $Player
public "getChild"(): $AgeableMob
public "getParentA"(): $Mob
public "getParentB"(): $Mob
public "setChild"(ageableMob0: $AgeableMob$$Type): void
get "causedByPlayer"(): $Player
get "child"(): $AgeableMob
get "parentA"(): $Mob
get "parentB"(): $Mob
set "child"(value: $AgeableMob$$Type)
}
}

declare module "net.minecraftforge.event.entity.living.LivingEquipmentChangeEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $LivingEquipmentChangeEvent extends $LivingEvent {
constructor(livingEntity0: $LivingEntity$$Type, equipmentSlot1: $EquipmentSlot$$Type, itemStack2: $ItemStack$$Type, itemStack3: $ItemStack$$Type)
constructor()

public "getFrom"(): $ItemStack
public "getSlot"(): $EquipmentSlot
public "getTo"(): $ItemStack
get "from"(): $ItemStack
get "slot"(): $EquipmentSlot
get "to"(): $ItemStack
}
}

declare module "net.minecraftforge.event.entity.living.EnderManAngerEvent" {
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $EnderMan$$Type } from "net.minecraft.world.entity.monster.EnderMan"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $EnderManAngerEvent extends $LivingEvent {
constructor(enderMan0: $EnderMan$$Type, player1: $Player$$Type)
constructor()

public "getPlayer"(): $Player
get "player"(): $Player
}
}

declare module "net.minecraftforge.event.entity.EntityTeleportEvent$EnderEntity" {
import { $EntityTeleportEvent } from "net.minecraftforge.event.entity.EntityTeleportEvent"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

export class $EntityTeleportEvent$EnderEntity extends $EntityTeleportEvent {
constructor(livingEntity0: $LivingEntity$$Type, double1: double, double2: double, double3: double)
constructor()

public "getEntityLiving"(): $LivingEntity
get "entityLiving"(): $LivingEntity
}
}

declare module "net.minecraftforge.event.entity.living.LivingDeathEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"

export class $LivingDeathEvent extends $LivingEvent {
constructor(livingEntity0: $LivingEntity$$Type, damageSource1: $DamageSource$$Type)
constructor()

public "getSource"(): $DamageSource
get "source"(): $DamageSource
}
}

declare module "net.minecraftforge.event.entity.player.AdvancementEvent$AdvancementEarnEvent" {
import { $Advancement$$Type } from "net.minecraft.advancements.Advancement"
import { $AdvancementEvent } from "net.minecraftforge.event.entity.player.AdvancementEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $AdvancementEvent$AdvancementEarnEvent extends $AdvancementEvent {
constructor(player0: $Player$$Type, advancement1: $Advancement$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.entity.player.PlayerNegotiationEvent" {
import { $List$$Type } from "java.util.List"
import { $Future$$Type } from "java.util.concurrent.Future"
import { $GameProfile, $GameProfile$$Type } from "com.mojang.authlib.GameProfile"
import { $Connection, $Connection$$Type } from "net.minecraft.network.Connection"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Runnable$$Type } from "java.lang.Runnable"

export class $PlayerNegotiationEvent extends $Event {
constructor(connection0: $Connection$$Type, gameProfile1: $GameProfile$$Type, list2: $List$$Type<$Future$$Type<void>>)
constructor()

public "enqueueWork"(future0: $Future$$Type<void>): void
public "enqueueWork"(runnable0: $Runnable$$Type): void
public "getConnection"(): $Connection
public "getProfile"(): $GameProfile
get "connection"(): $Connection
get "profile"(): $GameProfile
}
}

declare module "net.minecraftforge.event.entity.player.PlayerEvent$PlayerChangedDimensionEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $Level } from "net.minecraft.world.level.Level"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerEvent$PlayerChangedDimensionEvent extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type, resourceKey1: $ResourceKey$$Type<$Level>, resourceKey2: $ResourceKey$$Type<$Level>)

public "getFrom"(): $ResourceKey<$Level>
public "getTo"(): $ResourceKey<$Level>
get "from"(): $ResourceKey<$Level>
get "to"(): $ResourceKey<$Level>
}
}

declare module "net.minecraftforge.event.entity.living.MobEffectEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $MobEffectInstance, $MobEffectInstance$$Type } from "net.minecraft.world.effect.MobEffectInstance"

export class $MobEffectEvent extends $LivingEvent {
constructor(livingEntity0: $LivingEntity$$Type, mobEffectInstance1: $MobEffectInstance$$Type)
constructor()

public "getEffectInstance"(): $MobEffectInstance
get "effectInstance"(): $MobEffectInstance
}
}

declare module "net.minecraftforge.event.entity.player.PlayerXpEvent$PickupXp" {
import { $PlayerXpEvent } from "net.minecraftforge.event.entity.player.PlayerXpEvent"
import { $ExperienceOrb, $ExperienceOrb$$Type } from "net.minecraft.world.entity.ExperienceOrb"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerXpEvent$PickupXp extends $PlayerXpEvent {
constructor(player0: $Player$$Type, experienceOrb1: $ExperienceOrb$$Type)
constructor()

public "getOrb"(): $ExperienceOrb
get "orb"(): $ExperienceOrb
}
}

declare module "net.minecraftforge.event.entity.player.PlayerEvent$SaveToFile" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $File, $File$$Type } from "java.io.File"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerEvent$SaveToFile extends $PlayerEvent {
constructor(player0: $Player$$Type, file1: $File$$Type, string2: string)
constructor()

public "getPlayerDirectory"(): $File
public "getPlayerFile"(string0: string): $File
public "getPlayerUUID"(): string
get "playerDirectory"(): $File
get "playerUUID"(): string
}
}

declare module "net.minecraftforge.event.entity.player.PlayerEvent$ItemSmeltedEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerEvent$ItemSmeltedEvent extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type, itemStack1: $ItemStack$$Type)

public "getSmelting"(): $ItemStack
get "smelting"(): $ItemStack
}
}

declare module "net.minecraftforge.event.entity.player.PlayerWakeUpEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerWakeUpEvent extends $PlayerEvent {
constructor(player0: $Player$$Type, boolean1: boolean, boolean2: boolean)
constructor()

public "updateLevel"(): boolean
public "wakeImmediately"(): boolean
}
}

declare module "net.minecraftforge.event.entity.living.LivingAttackEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"

export class $LivingAttackEvent extends $LivingEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, damageSource1: $DamageSource$$Type, float2: float)

public "getAmount"(): float
public "getSource"(): $DamageSource
get "amount"(): float
get "source"(): $DamageSource
}
}

declare module "net.minecraftforge.event.entity.living.MobEffectEvent$Expired" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $MobEffectEvent } from "net.minecraftforge.event.entity.living.MobEffectEvent"
import { $MobEffectInstance$$Type } from "net.minecraft.world.effect.MobEffectInstance"

export class $MobEffectEvent$Expired extends $MobEffectEvent {
constructor(livingEntity0: $LivingEntity$$Type, mobEffectInstance1: $MobEffectInstance$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.entity.living.LivingHealEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"

export class $LivingHealEvent extends $LivingEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, float1: float)

public "getAmount"(): float
public "setAmount"(float0: float): void
get "amount"(): float
set "amount"(value: float)
}
}

declare module "net.minecraftforge.event.entity.living.LivingFallEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"

export class $LivingFallEvent extends $LivingEvent {
constructor(livingEntity0: $LivingEntity$$Type, float1: float, float2: float)
constructor()

public "getDamageMultiplier"(): float
public "getDistance"(): float
public "setDamageMultiplier"(float0: float): void
public "setDistance"(float0: float): void
get "damageMultiplier"(): float
get "distance"(): float
set "damageMultiplier"(value: float)
set "distance"(value: float)
}
}

declare module "net.minecraftforge.event.entity.living.LivingConversionEvent$Post" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingConversionEvent } from "net.minecraftforge.event.entity.living.LivingConversionEvent"

export class $LivingConversionEvent$Post extends $LivingConversionEvent {
constructor(livingEntity0: $LivingEntity$$Type, livingEntity1: $LivingEntity$$Type)
constructor()

public "getOutcome"(): $LivingEntity
get "outcome"(): $LivingEntity
}
}

declare module "net.minecraftforge.event.entity.living.LivingDrownEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"

export class $LivingDrownEvent extends $LivingEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, boolean1: boolean, float2: float, int3: integer)
/** @deprecated */
constructor(livingEntity0: $LivingEntity$$Type, boolean1: boolean)

public "getBubbleCount"(): integer
public "getDamageAmount"(): float
public "isDrowning"(): boolean
public "setBubbleCount"(int0: integer): void
public "setDamageAmount"(float0: float): void
public "setDrowning"(boolean0: boolean): void
get "bubbleCount"(): integer
get "damageAmount"(): float
get "drowning"(): boolean
set "bubbleCount"(value: integer)
set "damageAmount"(value: float)
set "drowning"(value: boolean)
}
}

declare module "net.minecraftforge.event.entity.EntityStruckByLightningEvent" {
import { $LightningBolt, $LightningBolt$$Type } from "net.minecraft.world.entity.LightningBolt"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityEvent } from "net.minecraftforge.event.entity.EntityEvent"

export class $EntityStruckByLightningEvent extends $EntityEvent {
constructor(entity0: $Entity$$Type, lightningBolt1: $LightningBolt$$Type)
constructor()

public "getLightning"(): $LightningBolt
get "lightning"(): $LightningBolt
}
}

declare module "net.minecraftforge.event.entity.player.PlayerInteractEvent$RightClickItem" {
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $PlayerInteractEvent } from "net.minecraftforge.event.entity.player.PlayerInteractEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerInteractEvent$RightClickItem extends $PlayerInteractEvent {
constructor(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.entity.living.LivingExperienceDropEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $LivingExperienceDropEvent extends $LivingEvent {
constructor(livingEntity0: $LivingEntity$$Type, player1: $Player$$Type, int2: integer)
constructor()

public "getAttackingPlayer"(): $Player
public "getDroppedExperience"(): integer
public "getOriginalExperience"(): integer
public "setDroppedExperience"(int0: integer): void
get "attackingPlayer"(): $Player
get "droppedExperience"(): integer
get "originalExperience"(): integer
set "droppedExperience"(value: integer)
}
}

declare module "net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Stop" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEntityUseItemEvent } from "net.minecraftforge.event.entity.living.LivingEntityUseItemEvent"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $LivingEntityUseItemEvent$Stop extends $LivingEntityUseItemEvent {
constructor(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, int2: integer)
constructor()

}
}

declare module "net.minecraftforge.event.entity.player.FillBucketEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $HitResult, $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $FillBucketEvent extends $PlayerEvent {
constructor(player0: $Player$$Type, itemStack1: $ItemStack$$Type, level2: $Level$$Type, hitResult3: $HitResult$$Type)
constructor()

public "getEmptyBucket"(): $ItemStack
public "getFilledBucket"(): $ItemStack
public "getLevel"(): $Level
public "getTarget"(): $HitResult
public "setFilledBucket"(itemStack0: $ItemStack$$Type): void
get "emptyBucket"(): $ItemStack
get "filledBucket"(): $ItemStack
get "level"(): $Level
get "target"(): $HitResult
set "filledBucket"(value: $ItemStack$$Type)
}
}

declare module "net.minecraftforge.event.entity.player.AdvancementEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $Advancement, $Advancement$$Type } from "net.minecraft.advancements.Advancement"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $AdvancementEvent extends $PlayerEvent {
constructor(player0: $Player$$Type, advancement1: $Advancement$$Type)
constructor()

public "getAdvancement"(): $Advancement
get "advancement"(): $Advancement
}
}

declare module "net.minecraftforge.event.entity.player.PlayerFlyableFallEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerFlyableFallEvent extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type, float1: float, float2: float)

public "getDistance"(): float
public "getMultiplier"(): float
public "setDistance"(float0: float): void
public "setMultiplier"(float0: float): void
get "distance"(): float
get "multiplier"(): float
set "distance"(value: float)
set "multiplier"(value: float)
}
}

declare module "net.minecraftforge.event.entity.player.PlayerInteractEvent$EntityInteractSpecific" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $PlayerInteractEvent } from "net.minecraftforge.event.entity.player.PlayerInteractEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerInteractEvent$EntityInteractSpecific extends $PlayerInteractEvent {
constructor(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, entity2: $Entity$$Type, vec33: $Vec3$$Type)
constructor()

public "getLocalPos"(): $Vec3
public "getTarget"(): $Entity
get "localPos"(): $Vec3
get "target"(): $Entity
}
}

declare module "net.minecraftforge.event.entity.player.ArrowLooseEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ArrowLooseEvent extends $PlayerEvent {
constructor(player0: $Player$$Type, itemStack1: $ItemStack$$Type, level2: $Level$$Type, int3: integer, boolean4: boolean)
constructor()

public "getBow"(): $ItemStack
public "getCharge"(): integer
public "getLevel"(): $Level
public "hasAmmo"(): boolean
public "setCharge"(int0: integer): void
get "bow"(): $ItemStack
get "charge"(): integer
get "level"(): $Level
set "charge"(value: integer)
}
}

declare module "net.minecraftforge.event.entity.living.ShieldBlockEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"

export class $ShieldBlockEvent extends $LivingEvent {
constructor(livingEntity0: $LivingEntity$$Type, damageSource1: $DamageSource$$Type, float2: float)
constructor()

public "getBlockedDamage"(): float
public "getDamageSource"(): $DamageSource
public "getOriginalBlockedDamage"(): float
public "setBlockedDamage"(float0: float): void
public "setShieldTakesDamage"(boolean0: boolean): void
public "shieldTakesDamage"(): boolean
get "blockedDamage"(): float
get "damageSource"(): $DamageSource
get "originalBlockedDamage"(): float
set "blockedDamage"(value: float)
}
}

declare module "net.minecraftforge.event.entity.player.PlayerXpEvent$XpChange" {
import { $PlayerXpEvent } from "net.minecraftforge.event.entity.player.PlayerXpEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerXpEvent$XpChange extends $PlayerXpEvent {
constructor()
constructor(player0: $Player$$Type, int1: integer)

public "getAmount"(): integer
public "setAmount"(int0: integer): void
get "amount"(): integer
set "amount"(value: integer)
}
}

declare module "net.minecraftforge.event.entity.player.PlayerEvent$PlayerRespawnEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerEvent$PlayerRespawnEvent extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type, boolean1: boolean)

public "isEndConquered"(): boolean
get "endConquered"(): boolean
}
}

declare module "net.minecraftforge.event.entity.living.LivingPackSizeEvent" {
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $LivingPackSizeEvent extends $LivingEvent {
constructor()
constructor(mob0: $Mob$$Type)

public "getMaxPackSize"(): integer
public "setMaxPackSize"(int0: integer): void
get "maxPackSize"(): integer
set "maxPackSize"(value: integer)
}
}

declare module "net.minecraftforge.event.entity.living.LivingBreatheEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"

export class $LivingBreatheEvent extends $LivingEvent {
/** @deprecated */
constructor(livingEntity0: $LivingEntity$$Type, boolean1: boolean, int2: integer, int3: integer)
constructor()
constructor(livingEntity0: $LivingEntity$$Type, boolean1: boolean, int2: integer, int3: integer, boolean4: boolean)

public "canBreathe"(): boolean
public "canRefillAir"(): boolean
public "getConsumeAirAmount"(): integer
public "getRefillAirAmount"(): integer
public "setCanBreathe"(boolean0: boolean): void
public "setCanRefillAir"(boolean0: boolean): void
public "setConsumeAirAmount"(int0: integer): void
public "setRefillAirAmount"(int0: integer): void
get "consumeAirAmount"(): integer
get "refillAirAmount"(): integer
set "consumeAirAmount"(value: integer)
set "refillAirAmount"(value: integer)
}
}

declare module "net.minecraftforge.event.entity.living.MobEffectEvent$Added" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $MobEffectEvent } from "net.minecraftforge.event.entity.living.MobEffectEvent"
import { $MobEffectInstance, $MobEffectInstance$$Type } from "net.minecraft.world.effect.MobEffectInstance"

export class $MobEffectEvent$Added extends $MobEffectEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, mobEffectInstance1: $MobEffectInstance$$Type, mobEffectInstance2: $MobEffectInstance$$Type, entity3: $Entity$$Type)

public "getEffectSource"(): $Entity
public "getOldEffectInstance"(): $MobEffectInstance
get "effectSource"(): $Entity
get "oldEffectInstance"(): $MobEffectInstance
}
}

declare module "net.minecraftforge.event.entity.player.PlayerInteractEvent$EntityInteract" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $PlayerInteractEvent } from "net.minecraftforge.event.entity.player.PlayerInteractEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerInteractEvent$EntityInteract extends $PlayerInteractEvent {
constructor(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, entity2: $Entity$$Type)
constructor()

public "getTarget"(): $Entity
get "target"(): $Entity
}
}

declare module "net.minecraftforge.event.entity.EntityJoinLevelEvent" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityEvent } from "net.minecraftforge.event.entity.EntityEvent"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $EntityJoinLevelEvent extends $EntityEvent {
constructor(entity0: $Entity$$Type, level1: $Level$$Type)
constructor()
constructor(entity0: $Entity$$Type, level1: $Level$$Type, boolean2: boolean)

public "getLevel"(): $Level
public "loadedFromDisk"(): boolean
get "level"(): $Level
}
}

declare module "net.minecraftforge.event.entity.player.PlayerDestroyItemEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerDestroyItemEvent extends $PlayerEvent {
constructor(player0: $Player$$Type, itemStack1: $ItemStack$$Type, interactionHand2: $InteractionHand$$Type)
constructor()

public "getHand"(): $InteractionHand
public "getOriginal"(): $ItemStack
get "hand"(): $InteractionHand
get "original"(): $ItemStack
}
}

declare module "net.minecraftforge.event.entity.living.LivingConversionEvent$Pre" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EntityType, $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $LivingConversionEvent } from "net.minecraftforge.event.entity.living.LivingConversionEvent"

export class $LivingConversionEvent$Pre extends $LivingConversionEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, entityType1: $EntityType$$Type<$LivingEntity$$Type>, consumer2: $Consumer$$Type<integer>)

public "getOutcome"(): $EntityType<$LivingEntity>
public "setConversionTimer"(int0: integer): void
get "outcome"(): $EntityType<$LivingEntity>
set "conversionTimer"(value: integer)
}
}

declare module "net.minecraftforge.event.entity.EntityEvent$EnteringSection" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityEvent } from "net.minecraftforge.event.entity.EntityEvent"
import { $SectionPos } from "net.minecraft.core.SectionPos"

export class $EntityEvent$EnteringSection extends $EntityEvent {
constructor(entity0: $Entity$$Type, long1: long, long2: long)
constructor()

public "didChunkChange"(): boolean
public "getNewPos"(): $SectionPos
public "getOldPos"(): $SectionPos
public "getPackedNewPos"(): long
public "getPackedOldPos"(): long
get "newPos"(): $SectionPos
get "oldPos"(): $SectionPos
get "packedNewPos"(): long
get "packedOldPos"(): long
}
}

declare module "net.minecraftforge.event.entity.player.PlayerEvent$PlayerLoggedInEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerEvent$PlayerLoggedInEvent extends $PlayerEvent {
constructor(player0: $Player$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.entity.player.PlayerEvent$BreakSpeed" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Optional } from "java.util.Optional"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerEvent$BreakSpeed extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type, blockState1: $BlockState$$Type, float2: float, blockPos3: $BlockPos$$Type)

public "getNewSpeed"(): float
public "getOriginalSpeed"(): float
public "getPosition"(): $Optional<$BlockPos>
public "getState"(): $BlockState
public "setNewSpeed"(float0: float): void
get "newSpeed"(): float
get "originalSpeed"(): float
get "position"(): $Optional<$BlockPos>
get "state"(): $BlockState
set "newSpeed"(value: float)
}
}

declare module "net.minecraftforge.event.entity.living.LivingChangeTargetEvent$ILivingTargetType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LivingChangeTargetEvent$ILivingTargetType {
}

export namespace $LivingChangeTargetEvent$ILivingTargetType {
const probejs$$marker: never
}
export abstract class $LivingChangeTargetEvent$ILivingTargetType$$Static implements $LivingChangeTargetEvent$ILivingTargetType {
}
}

declare module "net.minecraftforge.event.entity.living.MobEffectEvent$Remove" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $MobEffectEvent } from "net.minecraftforge.event.entity.living.MobEffectEvent"
import { $MobEffectInstance$$Type } from "net.minecraft.world.effect.MobEffectInstance"
import { $MobEffect, $MobEffect$$Type } from "net.minecraft.world.effect.MobEffect"

export class $MobEffectEvent$Remove extends $MobEffectEvent {
constructor(livingEntity0: $LivingEntity$$Type, mobEffect1: $MobEffect$$Type)
constructor()
constructor(livingEntity0: $LivingEntity$$Type, mobEffectInstance1: $MobEffectInstance$$Type)

public "getEffect"(): $MobEffect
get "effect"(): $MobEffect
}
}

declare module "net.minecraftforge.event.entity.living.LivingDropsEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $ItemEntity, $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Collection, $Collection$$Type } from "java.util.Collection"

export class $LivingDropsEvent extends $LivingEvent {
constructor(livingEntity0: $LivingEntity$$Type, damageSource1: $DamageSource$$Type, collection2: $Collection$$Type<$ItemEntity$$Type>, int3: integer, boolean4: boolean)
constructor()

public "getDrops"(): $Collection<$ItemEntity>
public "getLootingLevel"(): integer
public "getSource"(): $DamageSource
public "isRecentlyHit"(): boolean
get "drops"(): $Collection<$ItemEntity>
get "lootingLevel"(): integer
get "source"(): $DamageSource
get "recentlyHit"(): boolean
}
}

declare module "net.minecraftforge.event.entity.player.PlayerInteractEvent$LeftClickEmpty" {
import { $PlayerInteractEvent } from "net.minecraftforge.event.entity.player.PlayerInteractEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerInteractEvent$LeftClickEmpty extends $PlayerInteractEvent {
constructor(player0: $Player$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.entity.EntityTeleportEvent$SpreadPlayersCommand" {
import { $EntityTeleportEvent } from "net.minecraftforge.event.entity.EntityTeleportEvent"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"

export class $EntityTeleportEvent$SpreadPlayersCommand extends $EntityTeleportEvent {
constructor(entity0: $Entity$$Type, double1: double, double2: double, double3: double)
constructor()

}
}

declare module "net.minecraftforge.event.entity.player.PlayerInteractEvent$LeftClickBlock" {
import { $PlayerInteractEvent$LeftClickBlock$Action, $PlayerInteractEvent$LeftClickBlock$Action$$Type } from "net.minecraftforge.event.entity.player.PlayerInteractEvent$LeftClickBlock$Action"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Event$Result, $Event$Result$$Type } from "net.minecraftforge.eventbus.api.Event$Result"
import { $PlayerInteractEvent } from "net.minecraftforge.event.entity.player.PlayerInteractEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerInteractEvent$LeftClickBlock extends $PlayerInteractEvent {
constructor()
/** @deprecated */
constructor(player0: $Player$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type)
constructor(player0: $Player$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, action3: $PlayerInteractEvent$LeftClickBlock$Action$$Type)

public "getAction"(): $PlayerInteractEvent$LeftClickBlock$Action
public "getUseBlock"(): $Event$Result
public "getUseItem"(): $Event$Result
public "setUseBlock"(result0: $Event$Result$$Type): void
public "setUseItem"(result0: $Event$Result$$Type): void
get "action"(): $PlayerInteractEvent$LeftClickBlock$Action
get "useBlock"(): $Event$Result
get "useItem"(): $Event$Result
set "useBlock"(value: $Event$Result$$Type)
set "useItem"(value: $Event$Result$$Type)
}
}

declare module "net.minecraftforge.event.entity.living.LivingUseTotemEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"

export class $LivingUseTotemEvent extends $LivingEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, damageSource1: $DamageSource$$Type, itemStack2: $ItemStack$$Type, interactionHand3: $InteractionHand$$Type)

public "getHandHolding"(): $InteractionHand
public "getSource"(): $DamageSource
public "getTotem"(): $ItemStack
get "handHolding"(): $InteractionHand
get "source"(): $DamageSource
get "totem"(): $ItemStack
}
}

declare module "net.minecraftforge.event.entity.living.ZombieEvent$SummonAidEvent" {
import { $Zombie, $Zombie$$Type } from "net.minecraft.world.entity.monster.Zombie"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ZombieEvent } from "net.minecraftforge.event.entity.living.ZombieEvent"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $ZombieEvent$SummonAidEvent extends $ZombieEvent {
constructor(zombie0: $Zombie$$Type, level1: $Level$$Type, int2: integer, int3: integer, int4: integer, livingEntity5: $LivingEntity$$Type, double6: double)
constructor()

public "getAttacker"(): $LivingEntity
public "getCustomSummonedAid"(): $Zombie
public "getLevel"(): $Level
public "getSummonChance"(): double
public "getX"(): integer
public "getY"(): integer
public "getZ"(): integer
public "setCustomSummonedAid"(zombie0: $Zombie$$Type): void
get "attacker"(): $LivingEntity
get "customSummonedAid"(): $Zombie
get "level"(): $Level
get "summonChance"(): double
get "x"(): integer
get "y"(): integer
get "z"(): integer
set "customSummonedAid"(value: $Zombie$$Type)
}
}

declare module "net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Finish" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEntityUseItemEvent } from "net.minecraftforge.event.entity.living.LivingEntityUseItemEvent"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $LivingEntityUseItemEvent$Finish extends $LivingEntityUseItemEvent {
constructor(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, int2: integer, itemStack3: $ItemStack$$Type)
constructor()

public "getResultStack"(): $ItemStack
public "setResultStack"(itemStack0: $ItemStack$$Type): void
get "resultStack"(): $ItemStack
set "resultStack"(value: $ItemStack$$Type)
}
}

declare module "net.minecraftforge.event.entity.player.TradeWithVillagerEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $AbstractVillager, $AbstractVillager$$Type } from "net.minecraft.world.entity.npc.AbstractVillager"
import { $MerchantOffer, $MerchantOffer$$Type } from "net.minecraft.world.item.trading.MerchantOffer"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $TradeWithVillagerEvent extends $PlayerEvent {
constructor(player0: $Player$$Type, merchantOffer1: $MerchantOffer$$Type, abstractVillager2: $AbstractVillager$$Type)
constructor()

public "getAbstractVillager"(): $AbstractVillager
public "getMerchantOffer"(): $MerchantOffer
get "abstractVillager"(): $AbstractVillager
get "merchantOffer"(): $MerchantOffer
}
}

declare module "net.minecraftforge.event.entity.player.AttackEntityEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $AttackEntityEvent extends $PlayerEvent {
constructor(player0: $Player$$Type, entity1: $Entity$$Type)
constructor()

public "getTarget"(): $Entity
get "target"(): $Entity
}
}

declare module "net.minecraftforge.event.entity.living.LootingLevelEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"

export class $LootingLevelEvent extends $LivingEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, damageSource1: $DamageSource$$Type, int2: integer)

public "getDamageSource"(): $DamageSource
public "getLootingLevel"(): integer
public "setLootingLevel"(int0: integer): void
get "damageSource"(): $DamageSource
get "lootingLevel"(): integer
set "lootingLevel"(value: integer)
}
}

declare module "net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Tick" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEntityUseItemEvent } from "net.minecraftforge.event.entity.living.LivingEntityUseItemEvent"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $LivingEntityUseItemEvent$Tick extends $LivingEntityUseItemEvent {
constructor(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, int2: integer)
constructor()

}
}

declare module "net.minecraftforge.event.entity.player.SleepingLocationCheckEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"

export class $SleepingLocationCheckEvent extends $LivingEvent {
constructor(livingEntity0: $LivingEntity$$Type, blockPos1: $BlockPos$$Type)
constructor()

public "getSleepingLocation"(): $BlockPos
get "sleepingLocation"(): $BlockPos
}
}

declare module "net.minecraftforge.event.entity.EntityTeleportEvent$ChorusFruit" {
import { $EntityTeleportEvent } from "net.minecraftforge.event.entity.EntityTeleportEvent"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

export class $EntityTeleportEvent$ChorusFruit extends $EntityTeleportEvent {
constructor(livingEntity0: $LivingEntity$$Type, double1: double, double2: double, double3: double)
constructor()

public "getEntityLiving"(): $LivingEntity
get "entityLiving"(): $LivingEntity
}
}

declare module "net.minecraftforge.event.entity.ProjectileImpactEvent$ImpactResult" {
import { $Enum } from "java.lang.Enum"

export class $ProjectileImpactEvent$ImpactResult extends $Enum<$ProjectileImpactEvent$ImpactResult> {
static readonly "DEFAULT": $ProjectileImpactEvent$ImpactResult
static readonly "SKIP_ENTITY": $ProjectileImpactEvent$ImpactResult
static readonly "STOP_AT_CURRENT": $ProjectileImpactEvent$ImpactResult
static readonly "STOP_AT_CURRENT_NO_DAMAGE": $ProjectileImpactEvent$ImpactResult

public static "valueOf"(string0: string): $ProjectileImpactEvent$ImpactResult
public static "values"(): $ProjectileImpactEvent$ImpactResult[]
}
}

declare module "net.minecraftforge.event.entity.living.MobSpawnEvent$AllowDespawn" {
import { $ServerLevelAccessor$$Type } from "net.minecraft.world.level.ServerLevelAccessor"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $MobSpawnEvent } from "net.minecraftforge.event.entity.living.MobSpawnEvent"

export class $MobSpawnEvent$AllowDespawn extends $MobSpawnEvent {
constructor(mob0: $Mob$$Type, serverLevelAccessor1: $ServerLevelAccessor$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.entity.EntityTeleportEvent" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $EntityEvent } from "net.minecraftforge.event.entity.EntityEvent"

export class $EntityTeleportEvent extends $EntityEvent {
constructor(entity0: $Entity$$Type, double1: double, double2: double, double3: double)
constructor()

public "getPrev"(): $Vec3
public "getPrevX"(): double
public "getPrevY"(): double
public "getPrevZ"(): double
public "getTarget"(): $Vec3
public "getTargetX"(): double
public "getTargetY"(): double
public "getTargetZ"(): double
public "setTargetX"(double0: double): void
public "setTargetY"(double0: double): void
public "setTargetZ"(double0: double): void
get "prev"(): $Vec3
get "prevX"(): double
get "prevY"(): double
get "prevZ"(): double
get "target"(): $Vec3
get "targetX"(): double
get "targetY"(): double
get "targetZ"(): double
set "targetX"(value: double)
set "targetY"(value: double)
set "targetZ"(value: double)
}
}

declare module "net.minecraftforge.event.entity.EntityEvent$EyeHeight" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Pose, $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $EntityDimensions, $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $EntityEvent } from "net.minecraftforge.event.entity.EntityEvent"

/** @deprecated */
export class $EntityEvent$EyeHeight extends $EntityEvent {
constructor(entity0: $Entity$$Type, pose1: $Pose$$Type, entityDimensions2: $EntityDimensions$$Type, float3: float)
constructor()

public "getNewEyeHeight"(): float
public "getOriginalEyeHeight"(): float
public "getPose"(): $Pose
public "getSize"(): $EntityDimensions
public "setNewEyeHeight"(float0: float): void
get "newEyeHeight"(): float
get "originalEyeHeight"(): float
get "pose"(): $Pose
get "size"(): $EntityDimensions
set "newEyeHeight"(value: float)
}
}

declare module "net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Start" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEntityUseItemEvent } from "net.minecraftforge.event.entity.living.LivingEntityUseItemEvent"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $LivingEntityUseItemEvent$Start extends $LivingEntityUseItemEvent {
constructor(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, int2: integer)
constructor()

}
}

declare module "net.minecraftforge.event.entity.living.PotionColorCalculationEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $MobEffectInstance, $MobEffectInstance$$Type } from "net.minecraft.world.effect.MobEffectInstance"

export class $PotionColorCalculationEvent extends $LivingEvent {
constructor(livingEntity0: $LivingEntity$$Type, int1: integer, boolean2: boolean, collection3: $Collection$$Type<$MobEffectInstance$$Type>)
constructor()

public "areParticlesHidden"(): boolean
public "getColor"(): integer
public "getEffects"(): $Collection<$MobEffectInstance>
public "setColor"(int0: integer): void
public "shouldHideParticles"(boolean0: boolean): void
get "color"(): integer
get "effects"(): $Collection<$MobEffectInstance>
set "color"(value: integer)
}
}

declare module "net.minecraftforge.event.entity.living.LivingEvent$LivingVisibilityEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"

export class $LivingEvent$LivingVisibilityEvent extends $LivingEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, entity1: $Entity$$Type, double2: double)

public "getLookingEntity"(): $Entity
public "getVisibilityModifier"(): double
public "modifyVisibility"(double0: double): void
get "lookingEntity"(): $Entity
get "visibilityModifier"(): double
}
}

declare module "net.minecraftforge.event.entity.living.LivingSwapItemsEvent$Hands" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $LivingSwapItemsEvent } from "net.minecraftforge.event.entity.living.LivingSwapItemsEvent"

export class $LivingSwapItemsEvent$Hands extends $LivingSwapItemsEvent {
constructor(livingEntity0: $LivingEntity$$Type)
constructor()

public "getItemSwappedToMainHand"(): $ItemStack
public "getItemSwappedToOffHand"(): $ItemStack
public "setItemSwappedToMainHand"(itemStack0: $ItemStack$$Type): void
public "setItemSwappedToOffHand"(itemStack0: $ItemStack$$Type): void
get "itemSwappedToMainHand"(): $ItemStack
get "itemSwappedToOffHand"(): $ItemStack
set "itemSwappedToMainHand"(value: $ItemStack$$Type)
set "itemSwappedToOffHand"(value: $ItemStack$$Type)
}
}

declare module "net.minecraftforge.event.entity.SpawnPlacementRegisterEvent" {
import { $SpawnPlacements$SpawnPredicate$$Type } from "net.minecraft.world.entity.SpawnPlacements$SpawnPredicate"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $SpawnPlacementRegisterEvent$Operation$$Type } from "net.minecraftforge.event.entity.SpawnPlacementRegisterEvent$Operation"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Map$$Type } from "java.util.Map"
import { $SpawnPlacementRegisterEvent$MergedSpawnPredicate$$Type } from "net.minecraftforge.event.entity.SpawnPlacementRegisterEvent$MergedSpawnPredicate"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"

export class $SpawnPlacementRegisterEvent extends $Event implements $IModBusEvent {
constructor()
constructor(map0: $Map$$Type<$EntityType$$Type<any>, $SpawnPlacementRegisterEvent$MergedSpawnPredicate$$Type<any>>)

public "register"<T extends $Entity>(entityType0: $EntityType$$Type<T>, spawnPredicate1: $SpawnPlacements$SpawnPredicate$$Type<T>, operation2: $SpawnPlacementRegisterEvent$Operation$$Type): void
public "register"<T extends $Entity>(entityType0: $EntityType$$Type<T>, spawnPredicate1: $SpawnPlacements$SpawnPredicate$$Type<T>): void
public "register"<T extends $Entity>(entityType0: $EntityType$$Type<T>, type1: $SpawnPlacements$Type$$Type, types2: $Heightmap$Types$$Type, spawnPredicate3: $SpawnPlacements$SpawnPredicate$$Type<T>, operation4: $SpawnPlacementRegisterEvent$Operation$$Type): void
}
}

declare module "net.minecraftforge.event.entity.player.PlayerEvent$StopTracking" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerEvent$StopTracking extends $PlayerEvent {
constructor(player0: $Player$$Type, entity1: $Entity$$Type)
constructor()

public "getTarget"(): $Entity
get "target"(): $Entity
}
}

declare module "net.minecraftforge.event.entity.item.ItemEvent" {
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $EntityEvent } from "net.minecraftforge.event.entity.EntityEvent"

export class $ItemEvent extends $EntityEvent {
constructor(itemEntity0: $ItemEntity$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.entity.player.PlayerContainerEvent$Close" {
import { $PlayerContainerEvent } from "net.minecraftforge.event.entity.player.PlayerContainerEvent"
import { $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerContainerEvent$Close extends $PlayerContainerEvent {
constructor(player0: $Player$$Type, abstractContainerMenu1: $AbstractContainerMenu$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.entity.player.PlayerEvent" {
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerEvent extends $LivingEvent {
constructor()
constructor(player0: $Player$$Type)

}
}

declare module "net.minecraftforge.event.entity.player.PlayerEvent$Clone" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerEvent$Clone extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type, player1: $Player$$Type, boolean2: boolean)

public "getOriginal"(): $Player
public "isWasDeath"(): boolean
get "original"(): $Player
get "wasDeath"(): boolean
}
}

declare module "net.minecraftforge.event.entity.player.PlayerEvent$NameFormat" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerEvent$NameFormat extends $PlayerEvent {
constructor(player0: $Player$$Type, component1: $Component$$Type)
constructor()

public "getDisplayname"(): $Component
public "getUsername"(): $Component
public "setDisplayname"(component0: $Component$$Type): void
get "displayname"(): $Component
get "username"(): $Component
set "displayname"(value: $Component$$Type)
}
}

declare module "net.minecraftforge.event.entity.living.AnimalTameEvent" {
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $Animal, $Animal$$Type } from "net.minecraft.world.entity.animal.Animal"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $AnimalTameEvent extends $LivingEvent {
constructor()
constructor(animal0: $Animal$$Type, player1: $Player$$Type)

public "getAnimal"(): $Animal
public "getTamer"(): $Player
get "animal"(): $Animal
get "tamer"(): $Player
}
}

declare module "net.minecraftforge.event.entity.player.PermissionsChangedEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"

export class $PermissionsChangedEvent extends $PlayerEvent {
constructor()
constructor(serverPlayer0: $ServerPlayer$$Type, int1: integer, int2: integer)

public "getNewLevel"(): integer
public "getOldLevel"(): integer
get "newLevel"(): integer
get "oldLevel"(): integer
}
}

declare module "net.minecraftforge.event.entity.living.ZombieEvent" {
import { $Zombie$$Type } from "net.minecraft.world.entity.monster.Zombie"
import { $EntityEvent } from "net.minecraftforge.event.entity.EntityEvent"

export class $ZombieEvent extends $EntityEvent {
constructor(zombie0: $Zombie$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.entity.living.MobSpawnEvent$PositionCheck" {
import { $ServerLevelAccessor$$Type } from "net.minecraft.world.level.ServerLevelAccessor"
import { $BaseSpawner, $BaseSpawner$$Type } from "net.minecraft.world.level.BaseSpawner"
import { $MobSpawnType, $MobSpawnType$$Type } from "net.minecraft.world.entity.MobSpawnType"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $MobSpawnEvent } from "net.minecraftforge.event.entity.living.MobSpawnEvent"

export class $MobSpawnEvent$PositionCheck extends $MobSpawnEvent {
constructor()
constructor(mob0: $Mob$$Type, serverLevelAccessor1: $ServerLevelAccessor$$Type, mobSpawnType2: $MobSpawnType$$Type, baseSpawner3: $BaseSpawner$$Type)

public "getSpawnType"(): $MobSpawnType
public "getSpawner"(): $BaseSpawner
get "spawnType"(): $MobSpawnType
get "spawner"(): $BaseSpawner
}
}

declare module "net.minecraftforge.event.entity.player.PlayerEvent$PlayerLoggedOutEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerEvent$PlayerLoggedOutEvent extends $PlayerEvent {
constructor(player0: $Player$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.entity.player.PlayerXpEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerXpEvent extends $PlayerEvent {
constructor(player0: $Player$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.entity.item.ItemExpireEvent" {
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $ItemEvent } from "net.minecraftforge.event.entity.item.ItemEvent"

export class $ItemExpireEvent extends $ItemEvent {
constructor()
constructor(itemEntity0: $ItemEntity$$Type, int1: integer)

public "getExtraLife"(): integer
public "setExtraLife"(int0: integer): void
get "extraLife"(): integer
set "extraLife"(value: integer)
}
}

declare module "net.minecraftforge.event.entity.living.LivingConversionEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"

export class $LivingConversionEvent extends $LivingEvent {
constructor(livingEntity0: $LivingEntity$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.entity.player.PlayerEvent$PlayerChangeGameModeEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $GameType, $GameType$$Type } from "net.minecraft.world.level.GameType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerEvent$PlayerChangeGameModeEvent extends $PlayerEvent {
constructor(player0: $Player$$Type, gameType1: $GameType$$Type, gameType2: $GameType$$Type)
constructor()

public "getCurrentGameMode"(): $GameType
public "getNewGameMode"(): $GameType
public "setNewGameMode"(gameType0: $GameType$$Type): void
get "currentGameMode"(): $GameType
get "newGameMode"(): $GameType
set "newGameMode"(value: $GameType$$Type)
}
}

declare module "net.minecraftforge.event.entity.EntityMobGriefingEvent" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityEvent } from "net.minecraftforge.event.entity.EntityEvent"

export class $EntityMobGriefingEvent extends $EntityEvent {
constructor(entity0: $Entity$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.entity.item.ItemTossEvent" {
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $ItemEvent } from "net.minecraftforge.event.entity.item.ItemEvent"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ItemTossEvent extends $ItemEvent {
constructor(itemEntity0: $ItemEntity$$Type, player1: $Player$$Type)
constructor()

public "getPlayer"(): $Player
get "player"(): $Player
}
}

