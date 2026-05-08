declare module "net.minecraft.world.entity.projectile.ThrownExperienceBottle" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ThrowableItemProjectile } from "net.minecraft.world.entity.projectile.ThrowableItemProjectile"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
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
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $ThrownExperienceBottle extends $ThrowableItemProjectile {
constructor(level0: $Level$$Type, double1: double, double2: double, double3: double)
constructor(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type)
constructor(entityType0: $EntityType$$Type<$ThrownExperienceBottle$$Type>, level1: $Level$$Type)

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
public "handler$ddf001$adastra$getGravity"(cir: $CallbackInfoReturnable$$Type): void
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

declare module "net.minecraft.world.entity.projectile.ItemSupplier" {
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $ItemSupplier {
"getItem"(): $ItemStack
get "item"(): $ItemStack
}

export namespace $ItemSupplier {
const probejs$$marker: never
}
export abstract class $ItemSupplier$$Static implements $ItemSupplier {
}
}

declare module "net.minecraft.world.entity.projectile.FishingHook" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $Projectile } from "net.minecraft.world.entity.projectile.Projectile"
import { $ObjectList } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $FishingHook extends $Projectile {
constructor(entityType0: $EntityType$$Type<$FishingHook$$Type>, level1: $Level$$Type)
constructor(player0: $Player$$Type, level1: $Level$$Type, int2: integer, int3: integer)

public "addAdditionalSaveData"(compoundTag0: $CompoundTag$$Type): void
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
public "getHookedIn"(): $Entity
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
public "getPlayerOwner"(): $Player
public "getProfile"(): $GameProfile
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getType"(): string
public "handler$ddc003$adastra$tick"(ci: $CallbackInfo$$Type): void
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
public "isOpenWaterFishing"(): boolean
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
public "readAdditionalSaveData"(compoundTag0: $CompoundTag$$Type): void
public "retrieve"(itemStack0: $ItemStack$$Type): integer
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
get "hookedIn"(): $Entity
get "item"(): $ItemStack
get "level"(): $Level
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "playerOwner"(): $Player
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
get "openWaterFishing"(): boolean
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

declare module "net.minecraft.world.entity.projectile.Projectile" {
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
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $TraceableEntity } from "net.minecraft.world.entity.TraceableEntity"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $ProjectileAccessor } from "vazkii.botania.mixin.ProjectileAccessor"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $Projectile extends $Entity implements $TraceableEntity, $ProjectileAccessor {
constructor(entityType0: $EntityType$$Type<$Projectile$$Type>, level1: $Level$$Type)

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
public "checkLeftOwner"(): boolean
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getClassification"(boolean0: boolean): $MobCategory
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEffectSource"(): $Entity
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
public "getOwner"(): $Entity
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
public "setOwner"(entity0: $Entity$$Type): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shoot"(double0: double, double1: double, double2: double, float3: float, float4: float): void
public "shootFromRotation"(entity0: $Entity$$Type, float1: float, float2: float, float3: float, float4: float, float5: float): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "spawn"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
get "cachedOwner"(): $Entity
set "cachedOwner"(value: $Entity$$Type)
get "hasBeenShot"(): boolean
set "hasBeenShot"(value: boolean)
get "leftOwner"(): boolean
set "leftOwner"(value: boolean)
get "ownerUUID"(): $UUID
set "ownerUUID"(value: $UUID$$Type)
get "block"(): $BlockContainerJS
get "displayName"(): $Component
get "effectSource"(): $Entity
get "facing"(): $Direction
get "item"(): $ItemStack
get "level"(): $Level
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "owner"(): $Entity
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
set "owner"(value: $Entity$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "net.minecraft.world.entity.projectile.SpectralArrow" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
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
import { $AbstractArrow } from "net.minecraft.world.entity.projectile.AbstractArrow"
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
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $SpectralArrow extends $AbstractArrow {
constructor(entityType0: $EntityType$$Type<$SpectralArrow$$Type>, level1: $Level$$Type)
constructor(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type)
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

declare module "net.minecraft.world.entity.projectile.AbstractArrow" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $AbstractArrow$Pickup, $AbstractArrow$Pickup$$Type } from "net.minecraft.world.entity.projectile.AbstractArrow$Pickup"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $Projectile } from "net.minecraft.world.entity.projectile.Projectile"
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
import { $AccessorAbstractArrow } from "org.violetmoon.quark.mixin.mixins.accessor.AccessorAbstractArrow"
import { $AccessorAbstractArrowEntity } from "com.aizistral.enigmaticlegacy.mixin.AccessorAbstractArrowEntity"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $IntOpenHashSet, $IntOpenHashSet$$Type } from "it.unimi.dsi.fastutil.ints.IntOpenHashSet"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $AccessorAbstractArrow as $AccessorAbstractArrow$0 } from "at.petrak.hexcasting.mixin.accessor.AccessorAbstractArrow"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level } from "net.minecraft.world.level.Level"

export class $AbstractArrow extends $Projectile implements $AccessorAbstractArrow$0, $AccessorAbstractArrow, $AccessorAbstractArrowEntity {
public "addAdditionalSaveData"(compoundTag0: $CompoundTag$$Type): void
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
public "getBaseDamage"(): double
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
public "getKnockback"(): integer
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
public "getPickupItem"(): $ItemStack
public "getPierceLevel"(): byte
public "getProfile"(): $GameProfile
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getType"(): string
public "handler$bhm000$l2library_tickDespawn_fastDespawn"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$dda002$adastra$tick"(ci: $CallbackInfo$$Type): void
public "handler$hca000$onPlayerTouch"(player: $Player$$Type, ci: $CallbackInfo$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isCritArrow"(): boolean
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
public "isNoPhysics"(): boolean
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
public "readAdditionalSaveData"(compoundTag0: $CompoundTag$$Type): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "self"(): $Entity
public "serializeNBT"(): $CompoundTag
public "setBaseDamage"(double0: double): void
public "setCritArrow"(boolean0: boolean): void
public "setDynamicLightEnabled"(boolean0: boolean): void
public "setEnchantmentEffectsFromEntity"(livingEntity0: $LivingEntity$$Type, float1: float): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setKnockback"(int0: integer): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setNoPhysics"(boolean0: boolean): void
public "setPierceLevel"(byte0: byte): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setShotFromCrossbow"(boolean0: boolean): void
public "setSoundEvent"(soundEvent0: $SoundEvent$$Type): void
public "setStatusMessage"(message: $Component$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shotFromCrossbow"(): boolean
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "spawn"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
get "inGround"(): boolean
set "inGround"(value: boolean)
get "knockback"(): integer
set "knockback"(value: integer)
get "life"(): integer
set "life"(value: integer)
get "pickup"(): $AbstractArrow$Pickup
set "pickup"(value: $AbstractArrow$Pickup$$Type)
get "piercingIgnoreEntityIds"(): $IntOpenHashSet
set "piercingIgnoreEntityIds"(value: $IntOpenHashSet$$Type)
get "shakeTime"(): integer
set "shakeTime"(value: integer)
get "baseDamage"(): double
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
get "pickupItem"(): $ItemStack
get "pierceLevel"(): byte
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "critArrow"(): boolean
get "dynamicLightEnabled"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "noPhysics"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "waterCreature"(): boolean
set "baseDamage"(value: double)
set "critArrow"(value: boolean)
set "dynamicLightEnabled"(value: boolean)
set "hexereiDynamicLightEnabled"(value: boolean)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "noPhysics"(value: boolean)
set "pierceLevel"(value: byte)
set "position"(value: $BlockContainerJS$$Type)
set "soundEvent"(value: $SoundEvent$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "net.minecraft.world.entity.projectile.ThrowableProjectile" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $Projectile } from "net.minecraft.world.entity.projectile.Projectile"
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

export class $ThrowableProjectile extends $Projectile {
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
public "handler$dde000$adastra$getGravity"(cir: $CallbackInfoReturnable$$Type): void
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

declare module "net.minecraft.world.entity.projectile.Fireball" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $ItemSupplier } from "net.minecraft.world.entity.projectile.ItemSupplier"
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
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $AbstractHurtingProjectile } from "net.minecraft.world.entity.projectile.AbstractHurtingProjectile"
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
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $Fireball extends $AbstractHurtingProjectile implements $ItemSupplier {
constructor(entityType0: $EntityType$$Type<$Fireball$$Type>, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, level7: $Level$$Type)
constructor(entityType0: $EntityType$$Type<$Fireball$$Type>, livingEntity1: $LivingEntity$$Type, double2: double, double3: double, double4: double, level5: $Level$$Type)
constructor(entityType0: $EntityType$$Type<$Fireball$$Type>, level1: $Level$$Type)

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
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "self"(): $Entity
public "serializeNBT"(): $CompoundTag
public "setDynamicLightEnabled"(boolean0: boolean): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setItem"(itemStack0: $ItemStack$$Type): void
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
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
get "block"(): $BlockContainerJS
get "displayName"(): $Component
get "facing"(): $Direction
get "item"(): $ItemStack
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
set "dynamicLightEnabled"(value: boolean)
set "hexereiDynamicLightEnabled"(value: boolean)
set "item"(value: $ItemStack$$Type)
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

declare module "net.minecraft.world.entity.projectile.ThrownEgg" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ThrowableItemProjectile } from "net.minecraft.world.entity.projectile.ThrowableItemProjectile"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
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
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $ThrownEgg extends $ThrowableItemProjectile {
constructor(entityType0: $EntityType$$Type<$ThrownEgg$$Type>, level1: $Level$$Type)
constructor(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type)
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
public "modifyExpressionValue$bdh000$servercore$enforceBreedCap"(value: integer): integer
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

declare module "net.minecraft.world.entity.projectile.Arrow" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
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
import { $MobEffectInstance$$Type } from "net.minecraft.world.effect.MobEffectInstance"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $AbstractArrow } from "net.minecraft.world.entity.projectile.AbstractArrow"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $Arrow extends $AbstractArrow {
constructor(entityType0: $EntityType$$Type<$Arrow$$Type>, level1: $Level$$Type)
constructor(level0: $Level$$Type, double1: double, double2: double, double3: double)
constructor(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type)

public "addEffect"(mobEffectInstance0: $MobEffectInstance$$Type): void
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
public "getColor"(): integer
public static "getCustomColor"(itemStack0: $ItemStack$$Type): integer
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
public "setEffectsFromItem"(itemStack0: $ItemStack$$Type): void
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
get "color"(): integer
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
set "dynamicLightEnabled"(value: boolean)
set "effectsFromItem"(value: $ItemStack$$Type)
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

declare module "net.minecraft.world.entity.projectile.WitherSkull" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
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
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $AbstractHurtingProjectile } from "net.minecraft.world.entity.projectile.AbstractHurtingProjectile"
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
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $WitherSkull extends $AbstractHurtingProjectile {
constructor(entityType0: $EntityType$$Type<$WitherSkull$$Type>, level1: $Level$$Type)
constructor(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type, double2: double, double3: double, double4: double)

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
public "isDangerous"(): boolean
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
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "self"(): $Entity
public "serializeNBT"(): $CompoundTag
public "setDangerous"(boolean0: boolean): void
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
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
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
get "dangerous"(): boolean
get "dynamicLightEnabled"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "waterCreature"(): boolean
set "dangerous"(value: boolean)
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

declare module "net.minecraft.world.entity.projectile.ThrownTrident" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
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
import { $MixinTrident } from "com.xiaoyue.celestial_enchantments.mixin.MixinTrident"
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
import { $AbstractArrow } from "net.minecraft.world.entity.projectile.AbstractArrow"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $ThrownTrident extends $AbstractArrow implements $MixinTrident {
constructor(entityType0: $EntityType$$Type<$ThrownTrident$$Type>, level1: $Level$$Type)
constructor(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type, itemStack2: $ItemStack$$Type)

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
public "constant$bgg000$apoth_getTridentDamage"(float0: float): float
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
public "isChanneling"(): boolean
public "isDynamicLightEnabled"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFoil"(): boolean
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
public "redirect$fdm000$simpleclouds$channelingFix_onHitEntity"(level0: $Level$$Type): boolean
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
public "tickDespawn"(): void
get "clientSideReturnTridentTickCount"(): integer
set "clientSideReturnTridentTickCount"(value: integer)
get "tridentItem"(): $ItemStack
set "tridentItem"(value: $ItemStack$$Type)
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
get "channeling"(): boolean
get "dynamicLightEnabled"(): boolean
get "dynamicLightEnabledH"(): boolean
get "foil"(): boolean
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

declare module "net.minecraft.world.entity.projectile.ThrowableItemProjectile" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $ItemSupplier } from "net.minecraft.world.entity.projectile.ItemSupplier"
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
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $ThrowableProjectile } from "net.minecraft.world.entity.projectile.ThrowableProjectile"

export class $ThrowableItemProjectile extends $ThrowableProjectile implements $ItemSupplier {
constructor(entityType0: $EntityType$$Type<$ThrowableItemProjectile$$Type>, double1: double, double2: double, double3: double, level4: $Level$$Type)
constructor(entityType0: $EntityType$$Type<$ThrowableItemProjectile$$Type>, livingEntity1: $LivingEntity$$Type, level2: $Level$$Type)
constructor(entityType0: $EntityType$$Type<$ThrowableItemProjectile$$Type>, level1: $Level$$Type)

public "addAdditionalSaveData"(compoundTag0: $CompoundTag$$Type): void
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
public "readAdditionalSaveData"(compoundTag0: $CompoundTag$$Type): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "self"(): $Entity
public "serializeNBT"(): $CompoundTag
public "setDynamicLightEnabled"(boolean0: boolean): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setItem"(itemStack0: $ItemStack$$Type): void
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
set "dynamicLightEnabled"(value: boolean)
set "hexereiDynamicLightEnabled"(value: boolean)
set "item"(value: $ItemStack$$Type)
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

declare module "net.minecraft.world.entity.projectile.ThrownEnderpearl" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ThrowableItemProjectile } from "net.minecraft.world.entity.projectile.ThrowableItemProjectile"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
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
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $ThrownEnderpearl extends $ThrowableItemProjectile {
constructor(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type)
constructor(entityType0: $EntityType$$Type<$ThrownEnderpearl$$Type>, level1: $Level$$Type)

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

declare module "net.minecraft.world.entity.projectile.LargeFireball" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
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
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $Fireball } from "net.minecraft.world.entity.projectile.Fireball"
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
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $LargeFireball extends $Fireball {
constructor(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type, double2: double, double3: double, double4: double, int5: integer)
constructor(entityType0: $EntityType$$Type<$LargeFireball$$Type>, level1: $Level$$Type)

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
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
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
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
get "explosionPower"(): integer
set "explosionPower"(value: integer)
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

declare module "net.minecraft.world.entity.projectile.ThrownPotion" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ThrowableItemProjectile } from "net.minecraft.world.entity.projectile.ThrowableItemProjectile"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $ItemSupplier } from "net.minecraft.world.entity.projectile.ItemSupplier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $ObjectList } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Predicate } from "java.util.function.Predicate"
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
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $ThrownPotion extends $ThrowableItemProjectile implements $ItemSupplier {
static readonly "SPLASH_RANGE": double
static readonly "WATER_SENSITIVE_OR_ON_FIRE": $Predicate<$LivingEntity>

constructor(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type)
constructor(entityType0: $EntityType$$Type<$ThrownPotion$$Type>, level1: $Level$$Type)
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
public "handler$ddg002$adastra$getGravity"(cir: $CallbackInfoReturnable$$Type): void
public "handler$gal000$moonlight$extinguishILightables"(pos: $BlockPos$$Type, ci: $CallbackInfo$$Type, state: $BlockState$$Type): void
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

declare module "net.minecraft.world.entity.projectile.SmallFireball" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
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
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $Fireball } from "net.minecraft.world.entity.projectile.Fireball"
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
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $SmallFireball extends $Fireball {
constructor(entityType0: $EntityType$$Type<$SmallFireball$$Type>, level1: $Level$$Type)
constructor(level0: $Level$$Type, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double)
constructor(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type, double2: double, double3: double, double4: double)

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
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
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
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
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

declare module "net.minecraft.world.entity.projectile.AbstractHurtingProjectile" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
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
import { $Projectile } from "net.minecraft.world.entity.projectile.Projectile"
import { $ObjectList } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $DynamicLightSource } from "toni.sodiumdynamiclights.DynamicLightSource"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $AbstractHurtingProjectile extends $Projectile implements $DynamicLightSource {
constructor(entityType0: $EntityType$$Type<$AbstractHurtingProjectile$$Type>, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, level7: $Level$$Type)
constructor(entityType0: $EntityType$$Type<$AbstractHurtingProjectile$$Type>, livingEntity1: $LivingEntity$$Type, double2: double, double3: double, double4: double, level5: $Level$$Type)

public "addAdditionalSaveData"(compoundTag0: $CompoundTag$$Type): void
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
public "readAdditionalSaveData"(compoundTag0: $CompoundTag$$Type): void
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
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
get "xPower"(): double
set "xPower"(value: double)
get "yPower"(): double
set "yPower"(value: double)
get "zPower"(): double
set "zPower"(value: double)
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

declare module "net.minecraft.world.entity.projectile.EyeOfEnder" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $ItemSupplier } from "net.minecraft.world.entity.projectile.ItemSupplier"
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
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $EyeOfEnder extends $Entity implements $ItemSupplier {
constructor(entityType0: $EntityType$$Type<$EyeOfEnder$$Type>, level1: $Level$$Type)
constructor(level0: $Level$$Type, double1: double, double2: double, double3: double)

public "addAdditionalSaveData"(compoundTag0: $CompoundTag$$Type): void
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
public "readAdditionalSaveData"(compoundTag0: $CompoundTag$$Type): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "self"(): $Entity
public "serializeNBT"(): $CompoundTag
public "setDynamicLightEnabled"(boolean0: boolean): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setItem"(itemStack0: $ItemStack$$Type): void
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
public "signalTo"(blockPos0: $BlockPos$$Type): void
public "spawn"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
get "block"(): $BlockContainerJS
get "displayName"(): $Component
get "facing"(): $Direction
get "item"(): $ItemStack
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
set "dynamicLightEnabled"(value: boolean)
set "hexereiDynamicLightEnabled"(value: boolean)
set "item"(value: $ItemStack$$Type)
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

declare module "net.minecraft.world.entity.projectile.EvokerFangs" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
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
import { $TraceableEntity } from "net.minecraft.world.entity.TraceableEntity"
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
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $EvokerFangs extends $Entity implements $TraceableEntity {
static readonly "ATTACK_DURATION": integer
static readonly "ATTACK_TRIGGER_TICKS": integer
static readonly "LIFE_OFFSET": integer

constructor(entityType0: $EntityType$$Type<$EvokerFangs$$Type>, level1: $Level$$Type)
constructor(level0: $Level$$Type, double1: double, double2: double, double3: double, float4: float, int5: integer, livingEntity6: $LivingEntity$$Type)

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
public "getAnimationProgress"(float0: float): float
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
public "setOwner"(livingEntity0: $LivingEntity$$Type): void
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
set "dynamicLightEnabled"(value: boolean)
set "hexereiDynamicLightEnabled"(value: boolean)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "owner"(value: $LivingEntity$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "net.minecraft.world.entity.projectile.ShulkerBullet" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
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
import { $Direction$Axis$$Type } from "net.minecraft.core.Direction$Axis"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $Projectile } from "net.minecraft.world.entity.projectile.Projectile"
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
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $ShulkerBullet extends $Projectile {
constructor(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type, entity2: $Entity$$Type, axis3: $Direction$Axis$$Type)
constructor(entityType0: $EntityType$$Type<$ShulkerBullet$$Type>, level1: $Level$$Type)

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

declare module "net.minecraft.world.entity.projectile.LlamaSpit" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Llama$$Type } from "net.minecraft.world.entity.animal.horse.Llama"
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
import { $Projectile } from "net.minecraft.world.entity.projectile.Projectile"
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
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $LlamaSpit extends $Projectile {
constructor(level0: $Level$$Type, llama1: $Llama$$Type)
constructor(entityType0: $EntityType$$Type<$LlamaSpit$$Type>, level1: $Level$$Type)

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

declare module "net.minecraft.world.entity.projectile.FireworkRocketEntity" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $FireworkRocketEntityKJS } from "dev.latvian.mods.kubejs.core.FireworkRocketEntityKJS"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $ItemSupplier } from "net.minecraft.world.entity.projectile.ItemSupplier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $Projectile } from "net.minecraft.world.entity.projectile.Projectile"
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
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $FireworkRocketEntity extends $Projectile implements $ItemSupplier, $FireworkRocketEntityKJS {
constructor(level0: $Level$$Type, double1: double, double2: double, double3: double, itemStack4: $ItemStack$$Type)
constructor(entityType0: $EntityType$$Type<$FireworkRocketEntity$$Type>, level1: $Level$$Type)
constructor(level0: $Level$$Type, entity1: $Entity$$Type, double2: double, double3: double, double4: double, itemStack5: $ItemStack$$Type)
constructor(level0: $Level$$Type, itemStack1: $ItemStack$$Type, double2: double, double3: double, double4: double, boolean5: boolean)
constructor(level0: $Level$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type)
constructor(level0: $Level$$Type, itemStack1: $ItemStack$$Type, entity2: $Entity$$Type, double3: double, double4: double, double5: double, boolean6: boolean)

public "addAdditionalSaveData"(compoundTag0: $CompoundTag$$Type): void
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
public "isShotAtAngle"(): boolean
public "isWaterCreature"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(distance: double): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "readAdditionalSaveData"(compoundTag0: $CompoundTag$$Type): void
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
get "shotAtAngle"(): boolean
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

declare module "net.minecraft.world.entity.projectile.AbstractArrow$Pickup" {
import { $Enum } from "java.lang.Enum"

export class $AbstractArrow$Pickup extends $Enum<$AbstractArrow$Pickup> {
static readonly "ALLOWED": $AbstractArrow$Pickup
static readonly "CREATIVE_ONLY": $AbstractArrow$Pickup
static readonly "DISALLOWED": $AbstractArrow$Pickup

public static "byOrdinal"(int0: integer): $AbstractArrow$Pickup
public static "valueOf"(string0: string): $AbstractArrow$Pickup
public static "values"(): $AbstractArrow$Pickup[]
}
}

declare module "net.minecraft.world.entity.projectile.DragonFireball" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
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
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $AbstractHurtingProjectile } from "net.minecraft.world.entity.projectile.AbstractHurtingProjectile"
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
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $DragonFireball extends $AbstractHurtingProjectile {
static readonly "SPLASH_RANGE": float

constructor(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type, double2: double, double3: double, double4: double)
constructor(entityType0: $EntityType$$Type<$DragonFireball$$Type>, level1: $Level$$Type)

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
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
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
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
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

declare module "net.minecraft.world.entity.projectile.Snowball" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ThrowableItemProjectile } from "net.minecraft.world.entity.projectile.ThrowableItemProjectile"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
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
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $Snowball extends $ThrowableItemProjectile {
constructor(entityType0: $EntityType$$Type<$Snowball$$Type>, level1: $Level$$Type)
constructor(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type)
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

