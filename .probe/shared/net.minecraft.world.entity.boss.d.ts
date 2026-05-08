declare module "net.minecraft.world.entity.boss.enderdragon.EndCrystal" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $ObjectList } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $EndCrystal extends $Entity {
constructor(entityType0: $EntityType$$Type<$EndCrystal$$Type>, level1: $Level$$Type)
constructor(level0: $Level$$Type, double1: double, double2: double, double3: double)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canaryOnBlockCacheDeleted"(): void
public "canaryOnBlockCacheSet"(blockState0: $BlockState$$Type): void
public "canarySetClimbingMobCachingSectionUpdateBehavior"(boolean0: boolean): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getBeamTarget"(): $BlockPos
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getClassification"(boolean0: boolean): $MobCategory
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public static "getMatched"(entity: $Entity$$Type): $ObjectList<$ResourceLocation>
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getProfile"(): $GameProfile
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabled"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isWaterCreature"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(distance: double): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "self"(): $Entity
public "serializeNBT"(): $CompoundTag
public "setBeamTarget"(blockPos0: $BlockPos$$Type): void
public "setDynamicLightEnabled"(boolean0: boolean): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setShowBottom"(boolean0: boolean): void
public "setStatusMessage"(message: $Component$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "showsBottom"(): boolean
public "spawn"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
get "time"(): integer
set "time"(value: integer)
get "beamTarget"(): $BlockPos
get "block"(): $BlockContainerJS
get "displayName"(): $Component
get "facing"(): $Direction
get "item"(): $ItemStack
get "level"(): $Level
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabled"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "waterCreature"(): boolean
set "beamTarget"(value: $BlockPos$$Type)
set "dynamicLightEnabled"(value: boolean)
set "hexereiDynamicLightEnabled"(value: boolean)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "showBottom"(value: boolean)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "net.minecraft.world.entity.boss.enderdragon.phases.EnderDragonPhaseManager" {
import { $DragonPhaseInstance, $DragonPhaseInstance$$Type } from "net.minecraft.world.entity.boss.enderdragon.phases.DragonPhaseInstance"
import { $EnderDragon$$Type } from "net.minecraft.world.entity.boss.enderdragon.EnderDragon"
import { $EnderDragonPhase$$Type } from "net.minecraft.world.entity.boss.enderdragon.phases.EnderDragonPhase"

export class $EnderDragonPhaseManager {
constructor(enderDragon0: $EnderDragon$$Type)

public "getCurrentPhase"(): $DragonPhaseInstance
public "getPhase"<T extends $DragonPhaseInstance>(enderDragonPhase0: $EnderDragonPhase$$Type<T>): T
public "setPhase"(enderDragonPhase0: $EnderDragonPhase$$Type<any>): void
get "currentPhase"(): $DragonPhaseInstance
set "phase"(value: $EnderDragonPhase$$Type<any>)
}
}

declare module "net.minecraft.world.entity.boss.enderdragon.EnderDragon" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Path } from "net.minecraft.world.level.pathfinder.Path"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $KnockBackModifier } from "com.tacz.guns.api.entity.KnockBackModifier"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $EntityDataAccessor } from "net.minecraft.network.syncher.EntityDataAccessor"
import { $AttributeSupplier$Builder } from "net.minecraft.world.entity.ai.attributes.AttributeSupplier$Builder"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $EnderDragonPhaseManager } from "net.minecraft.world.entity.boss.enderdragon.phases.EnderDragonPhaseManager"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $EnderDragonPart, $EnderDragonPart$$Type } from "net.minecraft.world.entity.boss.EnderDragonPart"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $Node$$Type } from "net.minecraft.world.level.pathfinder.Node"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $IAbyssalHeartBearer } from "com.aizistral.enigmaticlegacy.api.quack.IAbyssalHeartBearer"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $EndDragonFight, $EndDragonFight$$Type } from "net.minecraft.world.level.dimension.end.EndDragonFight"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $ObjectList } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $EntityPotionEffectsJS } from "dev.latvian.mods.kubejs.entity.EntityPotionEffectsJS"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $EndCrystal, $EndCrystal$$Type } from "net.minecraft.world.entity.boss.enderdragon.EndCrystal"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EnderDragonMixin } from "wootrevived.woot.mixins.impl.EnderDragonMixin"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Enemy } from "net.minecraft.world.entity.monster.Enemy"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Mob } from "net.minecraft.world.entity.Mob"

export class $EnderDragon extends $Mob implements $Enemy, $EnderDragonMixin, $IAbyssalHeartBearer {
static readonly "DATA_PHASE": $EntityDataAccessor<integer>
readonly "head": $EnderDragonPart
readonly "positions": double[][]

constructor(entityType0: $EntityType$$Type<$EnderDragon$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canaryOnEquipmentChanged"(): void
public static "createAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageHeldItem"(): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "dropAbyssalHeart"(player0: $Player$$Type): void
public "findClosestNode"(): integer
public "findClosestNode"(double0: double, double1: double, double2: double): integer
public "findPath"(int0: integer, int1: integer, node2: $Node$$Type): $Path
public "foodEaten"(is: $ItemStack$$Type): void
public static "fromLivingEntity"(livingEntity0: $LivingEntity$$Type): $KnockBackModifier
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCachedFeetBlockState"(): $BlockState
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getDragonFight"(): $EndDragonFight
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFightOrigin"(): $BlockPos
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeadLookVector"(float0: float): $Vec3
public "getHeadPartYOffset"(int0: integer, double1s: double[], double2s: double[]): float
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLatencyPos"(int0: integer, float1: float): double[]
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public static "getMatched"(entity: $Entity$$Type): $ObjectList<$ResourceLocation>
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPhaseManager"(): $EnderDragonPhaseManager
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getSubEntities"(): $EnderDragonPart[]
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hurt"(enderDragonPart0: $EnderDragonPart$$Type, damageSource1: $DamageSource$$Type, float2: float): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabled"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFlapping"(): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "onCrystalDestroyed"(endCrystal0: $EndCrystal$$Type, blockPos1: $BlockPos$$Type, damageSource2: $DamageSource$$Type): void
public "onFlap"(): void
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "self"(): $LivingEntity
public "serializeNBT"(): $CompoundTag
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setDragonFight"(endDragonFight0: $EndDragonFight$$Type): void
public "setDynamicLightEnabled"(boolean0: boolean): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setFightOrigin"(blockPos0: $BlockPos$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "dragonDeathTime"(): integer
set "dragonDeathTime"(value: integer)
get "flapTime"(): float
set "flapTime"(value: float)
get "inWall"(): boolean
set "inWall"(value: boolean)
get "nearestCrystal"(): $EndCrystal
set "nearestCrystal"(value: $EndCrystal$$Type)
get "oFlapTime"(): float
set "oFlapTime"(value: float)
get "posPointer"(): integer
set "posPointer"(value: integer)
get "yRotA"(): float
set "yRotA"(value: float)
get "block"(): $BlockContainerJS
get "cachedFeetBlockState"(): $BlockState
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "dragonFight"(): $EndDragonFight
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "fightOrigin"(): $BlockPos
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "phaseManager"(): $EnderDragonPhaseManager
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "subEntities"(): $EnderDragonPart[]
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabled"(): boolean
get "dynamicLightEnabledH"(): boolean
get "flapping"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "dragonFight"(value: $EndDragonFight$$Type)
set "dynamicLightEnabled"(value: boolean)
set "feetArmorItem"(value: $ItemStack$$Type)
set "fightOrigin"(value: $BlockPos$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "net.minecraft.world.entity.boss.wither.WitherBoss" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Monster } from "net.minecraft.world.entity.monster.Monster"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $KnockBackModifier } from "com.tacz.guns.api.entity.KnockBackModifier"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $AttributeSupplier$Builder } from "net.minecraft.world.entity.ai.attributes.AttributeSupplier$Builder"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $WitherEntityAccessor } from "vazkii.botania.mixin.WitherEntityAccessor"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $ObjectList } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $EntityPotionEffectsJS } from "dev.latvian.mods.kubejs.entity.EntityPotionEffectsJS"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $PowerableMob } from "net.minecraft.world.entity.PowerableMob"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $RangedAttackMob } from "net.minecraft.world.entity.monster.RangedAttackMob"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"

export class $WitherBoss extends $Monster implements $PowerableMob, $RangedAttackMob, $WitherEntityAccessor {
constructor(entityType0: $EntityType$$Type<$WitherBoss$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
/** @deprecated */
public static "canDestroy"(blockState0: $BlockState$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canaryOnEquipmentChanged"(): void
public static "createAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageHeldItem"(): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "fromLivingEntity"(livingEntity0: $LivingEntity$$Type): $KnockBackModifier
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAlternativeTarget"(int0: integer): integer
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCachedFeetBlockState"(): $BlockState
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeadXRot"(int0: integer): float
public "getHeadYRot"(int0: integer): float
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getInvulnerableTicks"(): integer
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public static "getMatched"(entity: $Entity$$Type): $ObjectList<$ResourceLocation>
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabled"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPowered"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "makeInvulnerable"(): void
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "performRangedAttack"(livingEntity0: $LivingEntity$$Type, float1: float): void
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "self"(): $LivingEntity
public "serializeNBT"(): $CompoundTag
public "setAlternativeTarget"(int0: integer, int1: integer): void
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setDynamicLightEnabled"(boolean0: boolean): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setInvulnerableTicks"(int0: integer): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "cachedFeetBlockState"(): $BlockState
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "invulnerableTicks"(): integer
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabled"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "powered"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "dynamicLightEnabled"(value: boolean)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "invulnerableTicks"(value: integer)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "net.minecraft.world.entity.boss.enderdragon.phases.DragonLandingPhase" {
import { $AbstractDragonPhaseInstance } from "net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance"
import { $EnderDragon$$Type } from "net.minecraft.world.entity.boss.enderdragon.EnderDragon"
import { $EnderDragonPhase } from "net.minecraft.world.entity.boss.enderdragon.phases.EnderDragonPhase"

export class $DragonLandingPhase extends $AbstractDragonPhaseInstance {
constructor(enderDragon0: $EnderDragon$$Type)

public "getPhase"(): $EnderDragonPhase<$DragonLandingPhase>
get "phase"(): $EnderDragonPhase<$DragonLandingPhase>
}
}

declare module "net.minecraft.world.entity.boss.enderdragon.phases.DragonSittingFlamingPhase" {
import { $EnderDragon$$Type } from "net.minecraft.world.entity.boss.enderdragon.EnderDragon"
import { $EnderDragonPhase } from "net.minecraft.world.entity.boss.enderdragon.phases.EnderDragonPhase"
import { $AbstractDragonSittingPhase } from "net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonSittingPhase"

export class $DragonSittingFlamingPhase extends $AbstractDragonSittingPhase {
constructor(enderDragon0: $EnderDragon$$Type)

public "getPhase"(): $EnderDragonPhase<$DragonSittingFlamingPhase>
public "resetFlameCount"(): void
get "phase"(): $EnderDragonPhase<$DragonSittingFlamingPhase>
}
}

declare module "net.minecraft.world.entity.boss.enderdragon.phases.DragonTakeoffPhase" {
import { $AbstractDragonPhaseInstance } from "net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance"
import { $EnderDragon$$Type } from "net.minecraft.world.entity.boss.enderdragon.EnderDragon"
import { $EnderDragonPhase } from "net.minecraft.world.entity.boss.enderdragon.phases.EnderDragonPhase"

export class $DragonTakeoffPhase extends $AbstractDragonPhaseInstance {
constructor(enderDragon0: $EnderDragon$$Type)

public "getPhase"(): $EnderDragonPhase<$DragonTakeoffPhase>
get "phase"(): $EnderDragonPhase<$DragonTakeoffPhase>
}
}

declare module "net.minecraft.world.entity.boss.enderdragon.phases.DragonSittingScanningPhase" {
import { $EnderDragon$$Type } from "net.minecraft.world.entity.boss.enderdragon.EnderDragon"
import { $EnderDragonPhase } from "net.minecraft.world.entity.boss.enderdragon.phases.EnderDragonPhase"
import { $AbstractDragonSittingPhase } from "net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonSittingPhase"

export class $DragonSittingScanningPhase extends $AbstractDragonSittingPhase {
constructor(enderDragon0: $EnderDragon$$Type)

public "getPhase"(): $EnderDragonPhase<$DragonSittingScanningPhase>
get "phase"(): $EnderDragonPhase<$DragonSittingScanningPhase>
}
}

declare module "net.minecraft.world.entity.boss.enderdragon.phases.EnderDragonPhase" {
import { $DragonSittingAttackingPhase } from "net.minecraft.world.entity.boss.enderdragon.phases.DragonSittingAttackingPhase"
import { $DragonSittingScanningPhase } from "net.minecraft.world.entity.boss.enderdragon.phases.DragonSittingScanningPhase"
import { $DragonSittingFlamingPhase } from "net.minecraft.world.entity.boss.enderdragon.phases.DragonSittingFlamingPhase"
import { $DragonTakeoffPhase } from "net.minecraft.world.entity.boss.enderdragon.phases.DragonTakeoffPhase"
import { $DragonPhaseInstance } from "net.minecraft.world.entity.boss.enderdragon.phases.DragonPhaseInstance"
import { $DragonDeathPhase } from "net.minecraft.world.entity.boss.enderdragon.phases.DragonDeathPhase"
import { $DragonStrafePlayerPhase } from "net.minecraft.world.entity.boss.enderdragon.phases.DragonStrafePlayerPhase"
import { $DragonLandingApproachPhase } from "net.minecraft.world.entity.boss.enderdragon.phases.DragonLandingApproachPhase"
import { $DragonChargePlayerPhase } from "net.minecraft.world.entity.boss.enderdragon.phases.DragonChargePlayerPhase"
import { $DragonLandingPhase } from "net.minecraft.world.entity.boss.enderdragon.phases.DragonLandingPhase"
import { $EnderDragon$$Type } from "net.minecraft.world.entity.boss.enderdragon.EnderDragon"
import { $DragonHoldingPatternPhase } from "net.minecraft.world.entity.boss.enderdragon.phases.DragonHoldingPatternPhase"
import { $DragonHoverPhase } from "net.minecraft.world.entity.boss.enderdragon.phases.DragonHoverPhase"

export class $EnderDragonPhase<T extends $DragonPhaseInstance = $DragonPhaseInstance> {
static readonly "CHARGING_PLAYER": $EnderDragonPhase<$DragonChargePlayerPhase>
static readonly "DYING": $EnderDragonPhase<$DragonDeathPhase>
static readonly "HOLDING_PATTERN": $EnderDragonPhase<$DragonHoldingPatternPhase>
static readonly "HOVERING": $EnderDragonPhase<$DragonHoverPhase>
static readonly "LANDING": $EnderDragonPhase<$DragonLandingPhase>
static readonly "LANDING_APPROACH": $EnderDragonPhase<$DragonLandingApproachPhase>
static readonly "SITTING_ATTACKING": $EnderDragonPhase<$DragonSittingAttackingPhase>
static readonly "SITTING_FLAMING": $EnderDragonPhase<$DragonSittingFlamingPhase>
static readonly "SITTING_SCANNING": $EnderDragonPhase<$DragonSittingScanningPhase>
static readonly "STRAFE_PLAYER": $EnderDragonPhase<$DragonStrafePlayerPhase>
static readonly "TAKEOFF": $EnderDragonPhase<$DragonTakeoffPhase>

public "createInstance"(enderDragon0: $EnderDragon$$Type): $DragonPhaseInstance
public static "getById"(int0: integer): $EnderDragonPhase<any>
public static "getCount"(): integer
public "getId"(): integer
get "id"(): integer
}
}

declare module "net.minecraft.world.entity.boss.enderdragon.phases.DragonChargePlayerPhase" {
import { $AbstractDragonPhaseInstance } from "net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $EnderDragon$$Type } from "net.minecraft.world.entity.boss.enderdragon.EnderDragon"
import { $EnderDragonPhase } from "net.minecraft.world.entity.boss.enderdragon.phases.EnderDragonPhase"

export class $DragonChargePlayerPhase extends $AbstractDragonPhaseInstance {
constructor(enderDragon0: $EnderDragon$$Type)

public "getPhase"(): $EnderDragonPhase<$DragonChargePlayerPhase>
public "setTarget"(vec30: $Vec3$$Type): void
get "phase"(): $EnderDragonPhase<$DragonChargePlayerPhase>
set "target"(value: $Vec3$$Type)
}
}

declare module "net.minecraft.world.entity.boss.enderdragon.phases.DragonLandingApproachPhase" {
import { $AbstractDragonPhaseInstance } from "net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance"
import { $EnderDragon$$Type } from "net.minecraft.world.entity.boss.enderdragon.EnderDragon"
import { $EnderDragonPhase } from "net.minecraft.world.entity.boss.enderdragon.phases.EnderDragonPhase"

export class $DragonLandingApproachPhase extends $AbstractDragonPhaseInstance {
constructor(enderDragon0: $EnderDragon$$Type)

public "getPhase"(): $EnderDragonPhase<$DragonLandingApproachPhase>
get "phase"(): $EnderDragonPhase<$DragonLandingApproachPhase>
}
}

declare module "net.minecraft.world.entity.boss.enderdragon.phases.DragonPhaseInstance" {
import { $EndCrystal$$Type } from "net.minecraft.world.entity.boss.enderdragon.EndCrystal"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $EnderDragonPhase } from "net.minecraft.world.entity.boss.enderdragon.phases.EnderDragonPhase"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $DragonPhaseInstance {
"begin"(): void
"doClientTick"(): void
"doServerTick"(): void
"end"(): void
"getFlySpeed"(): float
"getFlyTargetLocation"(): $Vec3
"getPhase"(): $EnderDragonPhase<$DragonPhaseInstance>
"getTurnSpeed"(): float
"isSitting"(): boolean
"onCrystalDestroyed"(endCrystal0: $EndCrystal$$Type, blockPos1: $BlockPos$$Type, damageSource2: $DamageSource$$Type, player3: $Player$$Type): void
"onHurt"(damageSource0: $DamageSource$$Type, float1: float): float
get "flySpeed"(): float
get "flyTargetLocation"(): $Vec3
get "phase"(): $EnderDragonPhase<$DragonPhaseInstance>
get "turnSpeed"(): float
get "sitting"(): boolean
}

export namespace $DragonPhaseInstance {
const probejs$$marker: never
}
export abstract class $DragonPhaseInstance$$Static implements $DragonPhaseInstance {
}
}

declare module "net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonSittingPhase" {
import { $DragonPhaseInstance } from "net.minecraft.world.entity.boss.enderdragon.phases.DragonPhaseInstance"
import { $AbstractDragonPhaseInstance } from "net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance"
import { $EnderDragon$$Type } from "net.minecraft.world.entity.boss.enderdragon.EnderDragon"
import { $EnderDragonPhase } from "net.minecraft.world.entity.boss.enderdragon.phases.EnderDragonPhase"

export class $AbstractDragonSittingPhase extends $AbstractDragonPhaseInstance {
constructor(enderDragon0: $EnderDragon$$Type)

public "getPhase"(): $EnderDragonPhase<$DragonPhaseInstance>
get "phase"(): $EnderDragonPhase<$DragonPhaseInstance>
}
}

declare module "net.minecraft.world.entity.boss.enderdragon.phases.DragonHoverPhase" {
import { $AbstractDragonPhaseInstance } from "net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance"
import { $EnderDragon$$Type } from "net.minecraft.world.entity.boss.enderdragon.EnderDragon"
import { $EnderDragonPhase } from "net.minecraft.world.entity.boss.enderdragon.phases.EnderDragonPhase"

export class $DragonHoverPhase extends $AbstractDragonPhaseInstance {
constructor(enderDragon0: $EnderDragon$$Type)

public "getPhase"(): $EnderDragonPhase<$DragonHoverPhase>
get "phase"(): $EnderDragonPhase<$DragonHoverPhase>
}
}

declare module "net.minecraft.world.entity.boss.enderdragon.phases.DragonStrafePlayerPhase" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AbstractDragonPhaseInstance } from "net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance"
import { $EnderDragon$$Type } from "net.minecraft.world.entity.boss.enderdragon.EnderDragon"
import { $EnderDragonPhase } from "net.minecraft.world.entity.boss.enderdragon.phases.EnderDragonPhase"

export class $DragonStrafePlayerPhase extends $AbstractDragonPhaseInstance {
constructor(enderDragon0: $EnderDragon$$Type)

public "getPhase"(): $EnderDragonPhase<$DragonStrafePlayerPhase>
public "setTarget"(livingEntity0: $LivingEntity$$Type): void
get "phase"(): $EnderDragonPhase<$DragonStrafePlayerPhase>
set "target"(value: $LivingEntity$$Type)
}
}

declare module "net.minecraft.world.entity.boss.enderdragon.phases.DragonDeathPhase" {
import { $AbstractDragonPhaseInstance } from "net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance"
import { $EnderDragon$$Type } from "net.minecraft.world.entity.boss.enderdragon.EnderDragon"
import { $EnderDragonPhase } from "net.minecraft.world.entity.boss.enderdragon.phases.EnderDragonPhase"

export class $DragonDeathPhase extends $AbstractDragonPhaseInstance {
constructor(enderDragon0: $EnderDragon$$Type)

public "getPhase"(): $EnderDragonPhase<$DragonDeathPhase>
get "phase"(): $EnderDragonPhase<$DragonDeathPhase>
}
}

declare module "net.minecraft.world.entity.boss.EnderDragonPart" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $EnderDragon, $EnderDragon$$Type } from "net.minecraft.world.entity.boss.enderdragon.EnderDragon"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $ObjectList } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level } from "net.minecraft.world.level.Level"

export class $EnderDragonPart extends $PartEntity<$EnderDragon> {
readonly "name": string
readonly "parentMob": $EnderDragon

constructor(enderDragon0: $EnderDragon$$Type, string1: string, float2: float, float3: float)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canaryOnBlockCacheDeleted"(): void
public "canaryOnBlockCacheSet"(blockState0: $BlockState$$Type): void
public "canarySetClimbingMobCachingSectionUpdateBehavior"(boolean0: boolean): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getClassification"(boolean0: boolean): $MobCategory
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public static "getMatched"(entity: $Entity$$Type): $ObjectList<$ResourceLocation>
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getProfile"(): $GameProfile
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabled"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isWaterCreature"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(distance: double): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "self"(): $Entity
public "serializeNBT"(): $CompoundTag
public "setDynamicLightEnabled"(boolean0: boolean): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "spawn"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
get "block"(): $BlockContainerJS
get "displayName"(): $Component
get "facing"(): $Direction
get "item"(): $ItemStack
get "level"(): $Level
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "nbt"(): $CompoundTag
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabled"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "waterCreature"(): boolean
set "dynamicLightEnabled"(value: boolean)
set "hexereiDynamicLightEnabled"(value: boolean)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "net.minecraft.world.entity.boss.enderdragon.phases.DragonSittingAttackingPhase" {
import { $EnderDragon$$Type } from "net.minecraft.world.entity.boss.enderdragon.EnderDragon"
import { $EnderDragonPhase } from "net.minecraft.world.entity.boss.enderdragon.phases.EnderDragonPhase"
import { $AbstractDragonSittingPhase } from "net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonSittingPhase"

export class $DragonSittingAttackingPhase extends $AbstractDragonSittingPhase {
constructor(enderDragon0: $EnderDragon$$Type)

public "getPhase"(): $EnderDragonPhase<$DragonSittingAttackingPhase>
get "phase"(): $EnderDragonPhase<$DragonSittingAttackingPhase>
}
}

declare module "net.minecraft.world.entity.boss.enderdragon.phases.DragonHoldingPatternPhase" {
import { $AbstractDragonPhaseInstance } from "net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance"
import { $EnderDragon$$Type } from "net.minecraft.world.entity.boss.enderdragon.EnderDragon"
import { $EnderDragonPhase } from "net.minecraft.world.entity.boss.enderdragon.phases.EnderDragonPhase"

export class $DragonHoldingPatternPhase extends $AbstractDragonPhaseInstance {
constructor(enderDragon0: $EnderDragon$$Type)

public "getPhase"(): $EnderDragonPhase<$DragonHoldingPatternPhase>
get "phase"(): $EnderDragonPhase<$DragonHoldingPatternPhase>
}
}

declare module "net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance" {
import { $DragonPhaseInstance } from "net.minecraft.world.entity.boss.enderdragon.phases.DragonPhaseInstance"
import { $EndCrystal$$Type } from "net.minecraft.world.entity.boss.enderdragon.EndCrystal"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $EnderDragon$$Type } from "net.minecraft.world.entity.boss.enderdragon.EnderDragon"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $EnderDragonPhase } from "net.minecraft.world.entity.boss.enderdragon.phases.EnderDragonPhase"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $AbstractDragonPhaseInstance implements $DragonPhaseInstance {
constructor(enderDragon0: $EnderDragon$$Type)

public "begin"(): void
public "doClientTick"(): void
public "doServerTick"(): void
public "end"(): void
public "getFlySpeed"(): float
public "getFlyTargetLocation"(): $Vec3
public "getPhase"(): $EnderDragonPhase<$DragonPhaseInstance>
public "getTurnSpeed"(): float
public "isSitting"(): boolean
public "onCrystalDestroyed"(endCrystal0: $EndCrystal$$Type, blockPos1: $BlockPos$$Type, damageSource2: $DamageSource$$Type, player3: $Player$$Type): void
public "onHurt"(damageSource0: $DamageSource$$Type, float1: float): float
get "flySpeed"(): float
get "flyTargetLocation"(): $Vec3
get "phase"(): $EnderDragonPhase<$DragonPhaseInstance>
get "turnSpeed"(): float
get "sitting"(): boolean
}
}

