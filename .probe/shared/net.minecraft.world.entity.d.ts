declare module "net.minecraft.world.entity.RelativeMovement" {
import { $Enum } from "java.lang.Enum"
import { $Set, $Set$$Type } from "java.util.Set"

export class $RelativeMovement extends $Enum<$RelativeMovement> {
static readonly "ALL": $Set<$RelativeMovement>
static readonly "ROTATION": $Set<$RelativeMovement>
static readonly "X": $RelativeMovement
static readonly "X_ROT": $RelativeMovement
static readonly "Y": $RelativeMovement
static readonly "Y_ROT": $RelativeMovement
static readonly "Z": $RelativeMovement

public static "pack"(set0: $Set$$Type<$RelativeMovement$$Type>): integer
public static "unpack"(int0: integer): $Set<$RelativeMovement>
public static "valueOf"(string0: string): $RelativeMovement
public static "values"(): $RelativeMovement[]
}
}

declare module "net.minecraft.world.entity.EntityType$EntityFactory" {
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $EntityType$EntityFactory<T extends $Entity = $Entity> {
"create"(entityType0: $EntityType$$Type<T>, level1: $Level$$Type): T
}

export namespace $EntityType$EntityFactory {
const probejs$$marker: never
}
export abstract class $EntityType$EntityFactory$$Static<T extends $Entity = $Entity> implements $EntityType$EntityFactory<T> {
}
}

declare module "net.minecraft.world.entity.ExperienceOrb" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ObjectList } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ExperienceOrbAccessor } from "vazkii.botania.mixin.ExperienceOrbAccessor"
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
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $IClumpedOrb } from "com.blamejared.clumps.helper.IClumpedOrb"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $ExperienceOrbAccess } from "com.blamejared.clumps.mixin.ExperienceOrbAccess"

export class $ExperienceOrb extends $Entity implements $ExperienceOrbAccessor, $ExperienceOrbAccess, $IClumpedOrb {
constructor(entityType0: $EntityType$$Type<$ExperienceOrb$$Type>, level1: $Level$$Type)
constructor(level0: $Level$$Type, double1: double, double2: double, double3: double, int4: integer)

public "addAdditionalSaveData"(compoundTag0: $CompoundTag$$Type): void
public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public static "award"(serverLevel0: $ServerLevel$$Type, vec31: $Vec3$$Type, int2: integer): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canaryOnBlockCacheDeleted"(): void
public "canaryOnBlockCacheSet"(blockState0: $BlockState$$Type): void
public "canarySetClimbingMobCachingSectionUpdateBehavior"(boolean0: boolean): void
public "clumps$getClumpedMap"(): $Map
public "clumps$resolve"(): boolean
public "clumps$setClumpedMap"(map0: $Map$$Type): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getClassification"(boolean0: boolean): $MobCategory
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public static "getExperienceValue"(int0: integer): integer
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getIcon"(): integer
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
public "getValue"(): integer
public "handler$fcd000$clumps$repairPlayerItems"(player0: $Player$$Type, int1: integer, callbackInfoReturnable2: $CallbackInfoReturnable$$Type): void
public "handler$fcd000$merge"(experienceOrb0: $ExperienceOrb$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$fcd000$playerTouch"(player0: $Player$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$fcd001$addAdditionalSaveData"(compoundTag0: $CompoundTag$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$fcd001$readAdditionalSaveData"(compoundTag0: $CompoundTag$$Type, callbackInfo1: $CallbackInfo$$Type): void
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
public "localvar$fcd000$clumps$captureCurrentEntry"(entry0: $Map$Entry$$Type): $Map$Entry
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
get "clumps$clumpedMap"(): $Map
set "clumps$clumpedMap"(value: $Map$$Type)
get "clumps$currentEntry"(): $Map$Entry
set "clumps$currentEntry"(value: $Map$Entry$$Type)
get "value"(): integer
set "value"(value: integer)
get "block"(): $BlockContainerJS
get "displayName"(): $Component
get "facing"(): $Direction
get "icon"(): integer
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

declare module "net.minecraft.world.entity.Shearable" {
import { $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"

/** @deprecated */
export interface $Shearable {
/** @deprecated */
"readyForShearing"(): boolean
/** @deprecated */
"shear"(soundSource0: $SoundSource$$Type): void
}

export namespace $Shearable {
const probejs$$marker: never
}
export abstract class $Shearable$$Static implements $Shearable {
}
}

declare module "net.minecraft.world.entity.VariantHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $VariantHolder<T = any> {
"getVariant"(): T
"setVariant"(t0: T): void
get "variant"(): T
set "variant"(value: T)
}

export namespace $VariantHolder {
const probejs$$marker: never
}
export abstract class $VariantHolder$$Static<T = any> implements $VariantHolder<T> {
}
}

declare module "net.minecraft.world.entity.Display$RenderState" {
import { $Display$GenericInterpolator, $Display$GenericInterpolator$$Type } from "net.minecraft.world.entity.Display$GenericInterpolator"
import { $Transformation } from "com.mojang.math.Transformation"
import { $Display$FloatInterpolator, $Display$FloatInterpolator$$Type } from "net.minecraft.world.entity.Display$FloatInterpolator"
import { $Display$BillboardConstraints, $Display$BillboardConstraints$$Type } from "net.minecraft.world.entity.Display$BillboardConstraints"
import { $Record } from "java.lang.Record"

export class $Display$RenderState extends $Record {
constructor(genericInterpolator0: $Display$GenericInterpolator$$Type<$Transformation>, billboardConstraints1: $Display$BillboardConstraints$$Type, int2: integer, floatInterpolator3: $Display$FloatInterpolator$$Type, floatInterpolator4: $Display$FloatInterpolator$$Type, int5: integer)

public "billboardConstraints"(): $Display$BillboardConstraints
public "brightnessOverride"(): integer
public "glowColorOverride"(): integer
public "shadowRadius"(): $Display$FloatInterpolator
public "shadowStrength"(): $Display$FloatInterpolator
public "transformation"(): $Display$GenericInterpolator<$Transformation>
}
}

declare module "net.minecraft.world.entity.GlowSquid" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $KnockBackModifier } from "com.tacz.guns.api.entity.KnockBackModifier"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $Squid } from "net.minecraft.world.entity.animal.Squid"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $MobSpawnType$$Type } from "net.minecraft.world.entity.MobSpawnType"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $ServerLevelAccessor$$Type } from "net.minecraft.world.level.ServerLevelAccessor"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $ObjectList } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $EntityPotionEffectsJS } from "dev.latvian.mods.kubejs.entity.EntityPotionEffectsJS"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
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
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"

export class $GlowSquid extends $Squid {
constructor(entityType0: $EntityType$$Type<$GlowSquid$$Type>, level1: $Level$$Type)

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
public static "checkGlowSquideSpawnRules"(entityType0: $EntityType$$Type<$LivingEntity$$Type>, serverLevelAccessor1: $ServerLevelAccessor$$Type, mobSpawnType2: $MobSpawnType$$Type, blockPos3: $BlockPos$$Type, randomSource4: $RandomSource$$Type): boolean
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
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCachedFeetBlockState"(): $BlockState
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDarkTicksRemaining"(): integer
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
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
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
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
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
public "setDynamicLightEnabled"(boolean0: boolean): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
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
get "block"(): $BlockContainerJS
get "cachedFeetBlockState"(): $BlockState
get "chestArmorItem"(): $ItemStack
get "darkTicksRemaining"(): integer
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
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
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "dynamicLightEnabled"(value: boolean)
set "feetArmorItem"(value: $ItemStack$$Type)
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

declare module "net.minecraft.world.entity.Display$TextDisplay" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Display$TextDisplay$Align } from "net.minecraft.world.entity.Display$TextDisplay$Align"
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
import { $Display$TextDisplay$LineSplitter$$Type } from "net.minecraft.world.entity.Display$TextDisplay$LineSplitter"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $Display$TextDisplay$TextRenderState } from "net.minecraft.world.entity.Display$TextDisplay$TextRenderState"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $Display$TextDisplay$CachedInfo } from "net.minecraft.world.entity.Display$TextDisplay$CachedInfo"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Display } from "net.minecraft.world.entity.Display"
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

export class $Display$TextDisplay extends $Display {
static readonly "FLAG_ALIGN_LEFT": byte
static readonly "FLAG_ALIGN_RIGHT": byte
static readonly "FLAG_SEE_THROUGH": byte
static readonly "FLAG_SHADOW": byte
static readonly "FLAG_USE_DEFAULT_BACKGROUND": byte
static readonly "INITIAL_BACKGROUND": integer
static readonly "TAG_TEXT": string

constructor(entityType0: $EntityType$$Type<any>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "cacheDisplay"(lineSplitter0: $Display$TextDisplay$LineSplitter$$Type): $Display$TextDisplay$CachedInfo
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
public static "getAlign"(byte0: byte): $Display$TextDisplay$Align
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
public "setText"(component0: $Component$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "spawn"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public "textRenderState"(): $Display$TextDisplay$TextRenderState
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
set "text"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "net.minecraft.world.entity.SpawnPlacements$SpawnPredicate" {
import { $ServerLevelAccessor$$Type } from "net.minecraft.world.level.ServerLevelAccessor"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $MobSpawnType$$Type } from "net.minecraft.world.entity.MobSpawnType"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"

export interface $SpawnPlacements$SpawnPredicate<T extends $Entity = $Entity> {
"test"(entityType0: $EntityType$$Type<T>, serverLevelAccessor1: $ServerLevelAccessor$$Type, mobSpawnType2: $MobSpawnType$$Type, blockPos3: $BlockPos$$Type, randomSource4: $RandomSource$$Type): boolean
}

export namespace $SpawnPlacements$SpawnPredicate {
const probejs$$marker: never
}
export abstract class $SpawnPlacements$SpawnPredicate$$Static<T extends $Entity = $Entity> implements $SpawnPlacements$SpawnPredicate<T> {
}
}

declare module "net.minecraft.world.entity.MoverType" {
import { $Enum } from "java.lang.Enum"

export class $MoverType extends $Enum<$MoverType> {
static readonly "PISTON": $MoverType
static readonly "PLAYER": $MoverType
static readonly "SELF": $MoverType
static readonly "SHULKER": $MoverType
static readonly "SHULKER_BOX": $MoverType

public static "valueOf"(string0: string): $MoverType
public static "values"(): $MoverType[]
}
}

declare module "net.minecraft.world.entity.Display$BlockDisplay" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
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
import { $Display$BlockDisplay$BlockRenderState } from "net.minecraft.world.entity.Display$BlockDisplay$BlockRenderState"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Display } from "net.minecraft.world.entity.Display"
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

export class $Display$BlockDisplay extends $Display {
static readonly "TAG_BLOCK_STATE": string

constructor(entityType0: $EntityType$$Type<any>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "blockRenderState"(): $Display$BlockDisplay$BlockRenderState
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
public "getBlockState"(): $BlockState
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
get "blockState"(): $BlockState
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

declare module "net.minecraft.world.entity.Display$BillboardConstraints" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $IntFunction } from "java.util.function.IntFunction"

export class $Display$BillboardConstraints extends $Enum<$Display$BillboardConstraints> implements $StringRepresentable {
static readonly "BY_ID": $IntFunction<$Display$BillboardConstraints>
static readonly "CENTER": $Display$BillboardConstraints
static readonly "CODEC": $Codec<$Display$BillboardConstraints>
static readonly "FIXED": $Display$BillboardConstraints
static readonly "HORIZONTAL": $Display$BillboardConstraints
static readonly "VERTICAL": $Display$BillboardConstraints

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $Display$BillboardConstraints
public static "values"(): $Display$BillboardConstraints[]
get "serializedName"(): string
}
}

declare module "net.minecraft.world.entity.HasCustomInventoryScreen" {
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $HasCustomInventoryScreen {
"openCustomInventoryScreen"(player0: $Player$$Type): void
}

export namespace $HasCustomInventoryScreen {
const probejs$$marker: never
}
export abstract class $HasCustomInventoryScreen$$Static implements $HasCustomInventoryScreen {
}
}

declare module "net.minecraft.world.entity.PlayerRideable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerRideable {
}

export namespace $PlayerRideable {
const probejs$$marker: never
}
export abstract class $PlayerRideable$$Static implements $PlayerRideable {
}
}

declare module "net.minecraft.world.entity.FlyingMob" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $KnockBackModifier } from "com.tacz.guns.api.entity.KnockBackModifier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $ObjectList } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $EntityPotionEffectsJS } from "dev.latvian.mods.kubejs.entity.EntityPotionEffectsJS"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level } from "net.minecraft.world.level.Level"
import { $Mob } from "net.minecraft.world.entity.Mob"

export class $FlyingMob extends $Mob {
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
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
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
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
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
public "setDynamicLightEnabled"(boolean0: boolean): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
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
get "block"(): $BlockContainerJS
get "cachedFeetBlockState"(): $BlockState
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
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
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "dynamicLightEnabled"(value: boolean)
set "feetArmorItem"(value: $ItemStack$$Type)
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

declare module "net.minecraft.world.entity.AgeableMob" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $KnockBackModifier } from "com.tacz.guns.api.entity.KnockBackModifier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $ObjectList } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $EntityPotionEffectsJS } from "dev.latvian.mods.kubejs.entity.EntityPotionEffectsJS"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $PathfinderMob } from "net.minecraft.world.entity.PathfinderMob"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level } from "net.minecraft.world.level.Level"

export class $AgeableMob extends $PathfinderMob {
static readonly "BABY_START_AGE": integer

public "ageUp"(int0: integer, boolean1: boolean): void
public "ageUp"(int0: integer): void
public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canBreed"(): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canaryOnEquipmentChanged"(): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageHeldItem"(): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "fromLivingEntity"(livingEntity0: $LivingEntity$$Type): $KnockBackModifier
public "getAge"(): integer
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getBreedOffspring"(serverLevel0: $ServerLevel$$Type, ageableMob1: $AgeableMob$$Type): $AgeableMob
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
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
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
public static "getSpeedUpSecondsWhenFeeding"(int0: integer): integer
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
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
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
public "setAge"(int0: integer): void
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
get "age"(): integer
get "block"(): $BlockContainerJS
get "cachedFeetBlockState"(): $BlockState
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
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
get "undead"(): boolean
get "waterCreature"(): boolean
set "age"(value: integer)
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "dynamicLightEnabled"(value: boolean)
set "feetArmorItem"(value: $ItemStack$$Type)
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

declare module "net.minecraft.world.entity.OwnableEntity" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $UUID } from "java.util.UUID"
import { $EntityGetter } from "net.minecraft.world.level.EntityGetter"

export interface $OwnableEntity {
"getOwner"(): $LivingEntity
"getOwnerUUID"(): $UUID
"level"(): $EntityGetter
get "owner"(): $LivingEntity
get "ownerUUID"(): $UUID
}

export namespace $OwnableEntity {
const probejs$$marker: never
}
export abstract class $OwnableEntity$$Static implements $OwnableEntity {
}
}

declare module "net.minecraft.world.entity.TamableAnimal" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $KnockBackModifier } from "com.tacz.guns.api.entity.KnockBackModifier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $ObjectList } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $OwnableEntity } from "net.minecraft.world.entity.OwnableEntity"
import { $EntityPotionEffectsJS } from "dev.latvian.mods.kubejs.entity.EntityPotionEffectsJS"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Animal } from "net.minecraft.world.entity.animal.Animal"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level } from "net.minecraft.world.level.Level"

export class $TamableAnimal extends $Animal implements $OwnableEntity {
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
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
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
public "getOwner"(): $LivingEntity
public "getOwnerUUID"(): $UUID
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
public "isInSittingPose"(): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isOrderedToSit"(): boolean
public "isOwnedBy"(livingEntity0: $LivingEntity$$Type): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isTame"(): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
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
public "setDynamicLightEnabled"(boolean0: boolean): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setInSittingPose"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setOrderedToSit"(boolean0: boolean): void
public "setOwnerUUID"(uUID0: $UUID$$Type): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTame"(boolean0: boolean): void
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
public "tame"(player0: $Player$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
public "wantsToAttack"(livingEntity0: $LivingEntity$$Type, livingEntity1: $LivingEntity$$Type): boolean
get "block"(): $BlockContainerJS
get "cachedFeetBlockState"(): $BlockState
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
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
get "owner"(): $LivingEntity
get "ownerUUID"(): $UUID
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
get "inSittingPose"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "orderedToSit"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "dynamicLightEnabled"(value: boolean)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "inSittingPose"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "orderedToSit"(value: boolean)
set "ownerUUID"(value: $UUID$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "net.minecraft.world.entity.Entity" {
import { $Tickable } from "me.kall.doespotatotick.ext.Tickable"
import { $AABB, $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $EntityKJS } from "dev.latvian.mods.kubejs.core.EntityKJS"
import { $Object2ObjectMap$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectMap"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $IsInsideStructureTracker } from "corgitaco.corgilib.entity.IsInsideStructureTracker"
import { $FluidType, $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $Team, $Team$$Type } from "net.minecraft.world.scores.Team"
import { $RelativeMovement$$Type } from "net.minecraft.world.entity.RelativeMovement"
import { $ClientGamePacketListener } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose, $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $BalmEntity } from "net.blay09.mods.balm.api.entity.BalmEntity"
import { $AccessorEntity } from "net.darkhax.bookshelf.mixin.accessors.entity.AccessorEntity"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $LambHexereiDynamicLight } from "net.joefoxe.hexerei.light.LambHexereiDynamicLight"
import { $IRewindable } from "com.hollingsworth.arsnouveau.common.event.timed.IRewindable"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $IForgeEntity } from "net.minecraftforge.common.extensions.IForgeEntity"
import { $EntityAccessor } from "uk.co.cablepost.ftech_equipment.mixin.EntityAccessor"
import { $Set, $Set$$Type } from "java.util.Set"
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $EntityDataAccessor$$Type } from "net.minecraft.network.syncher.EntityDataAccessor"
import { $Stream } from "java.util.stream.Stream"
import { $Nameable } from "net.minecraft.world.Nameable"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityInLevelCallback, $EntityInLevelCallback$$Type } from "net.minecraft.world.level.entity.EntityInLevelCallback"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MoverType$$Type } from "net.minecraft.world.entity.MoverType"
import { $SoundSource } from "net.minecraft.sounds.SoundSource"
import { $EntityAccess } from "net.minecraft.world.level.entity.EntityAccess"
import { $CommandSourceStack } from "net.minecraft.commands.CommandSourceStack"
import { $EntityType, $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $CrashReportCategory$$Type } from "net.minecraft.CrashReportCategory"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Mirror$$Type } from "net.minecraft.world.level.block.Mirror"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $EntityAccessor as $EntityAccessor$0 } from "io.redspace.ironsspellbooks.mixin.EntityAccessor"
import { $ObjectList } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $LightningBolt$$Type } from "net.minecraft.world.entity.LightningBolt"
import { $ITeleporter$$Type } from "net.minecraftforge.common.util.ITeleporter"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $BlockCachingEntity } from "com.abdelaziz.canary.common.entity.pushable.BlockCachingEntity"
import { $EntityAnchorArgument$Anchor$$Type } from "net.minecraft.commands.arguments.EntityAnchorArgument$Anchor"
import { $ExtensionHolder } from "dev.tr7zw.transition.mc.extending.ExtensionHolder"
import { $EntityAccessor as $EntityAccessor$1 } from "com.mrcrayfish.furniture.refurbished.mixin.EntityAccessor"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $ChunkPos } from "net.minecraft.world.level.ChunkPos"
import { $SynchedEntityData } from "net.minecraft.network.syncher.SynchedEntityData"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $EntityDimensions, $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $ActivationType } from "me.wesley1808.servercore.common.config.data.activation_range.ActivationType"
import { $VecDeltaCodec } from "net.minecraft.network.protocol.game.VecDeltaCodec"
import { $SlotAccess } from "net.minecraft.world.entity.SlotAccess"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $DamageSources } from "net.minecraft.world.damagesource.DamageSources"
import { $Direction } from "net.minecraft.core.Direction"
import { $TrackedDataKey$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataKey"
import { $EntityTracker$Filterable } from "me.kall.duplicationless.data.EntityTracker$Filterable"
import { $Errorable } from "com.bawnorton.neruina.extend.Errorable"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $Triple, $Triple$$Type } from "com.supermartijn642.fusion.util.Triple"
import { $EntityAccessor as $EntityAccessor$2 } from "com.aetherteam.aether.mixin.mixins.common.accessor.EntityAccessor"
import { $LambDynamicLight } from "com.hollingsworth.arsnouveau.common.light.LambDynamicLight"
import { $DynamicGameEventListener$$Type } from "net.minecraft.world.level.gameevent.DynamicGameEventListener"
import { $IFireImmuneEntity } from "com.gregtechceu.gtceu.core.IFireImmuneEntity"
import { $Entity$RemovalReason, $Entity$RemovalReason$$Type } from "net.minecraft.world.entity.Entity$RemovalReason"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemEntity, $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $DynamicLightSource } from "toni.sodiumdynamiclights.DynamicLightSource"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $CommandSource } from "net.minecraft.commands.CommandSource"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $EntityAccessor as $EntityAccessor$3 } from "dev.tr7zw.transition.mixin.EntityAccessor"
import { $EntityExtension } from "com.supermartijn642.fusion.extensions.EntityExtension"
import { $ActivationEntity } from "me.wesley1808.servercore.common.interfaces.activation_range.ActivationEntity"
import { $EntityAccessor as $EntityAccessor$4 } from "vazkii.botania.mixin.EntityAccessor"
import { $GameEvent$$Type } from "net.minecraft.world.level.gameevent.GameEvent"
import { $AccessorEntity as $AccessorEntity$0 } from "com.railwayteam.railways.mixin.client.AccessorEntity"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $Iterable } from "java.lang.Iterable"
import { $Stack, $Stack$$Type } from "java.util.Stack"
import { $SynchedEntityData$DataValue$$Type } from "net.minecraft.network.syncher.SynchedEntityData$DataValue"
import { $IsInsideStructureTracker$Access } from "corgitaco.corgilib.entity.IsInsideStructureTracker$Access"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $PushReaction } from "net.minecraft.world.level.material.PushReaction"
import { $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $Inactive } from "me.wesley1808.servercore.common.interfaces.activation_range.Inactive"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $CapabilityProvider } from "net.minecraftforge.common.capabilities.CapabilityProvider"
import { $AccessorEntity as $AccessorEntity$1 } from "at.petrak.hexcasting.mixin.accessor.AccessorEntity"
import { $EntityAccessor as $EntityAccessor$5 } from "com.lowdragmc.lowdraglib.core.mixins.accessor.EntityAccessor"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $EntityAccessor as $EntityAccessor$6 } from "net.createmod.ponder.mixin.accessor.EntityAccessor"
import { $AccessorEntity as $AccessorEntity$2 } from "top.theillusivec4.curios.mixin.core.AccessorEntity"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $ClientboundAddEntityPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundAddEntityPacket"
import { $HitResult, $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $Vec2 } from "net.minecraft.world.phys.Vec2"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Cullable } from "dev.tr7zw.entityculling.versionless.access.Cullable"
import { $Class$$Type } from "java.lang.Class"

export class $Entity extends $CapabilityProvider<$Entity> implements $Nameable, $EntityAccess, $CommandSource, $IForgeEntity, $EntityAccessor$5, $BalmEntity, $ActivationEntity, $Inactive, $ExtensionHolder, $EntityAccessor$3, $Errorable, $EntityExtension, $IsInsideStructureTracker$Access, $EntityAccessor$6, $Cullable, $BlockCachingEntity, $EntityAccessor$4, $LambHexereiDynamicLight, $EntityAccessor$2, $AccessorEntity, $DynamicLightSource, $EntityTracker$Filterable, $AccessorEntity$2, $IRewindable, $LambDynamicLight, $EntityAccessor, $EntityAccessor$1, $TrackedDataContainer, $EntityKJS, $AccessorEntity$1, $AccessorEntity$0, $IFireImmuneEntity, $EntityAccessor$0, $Tickable {
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "BOARDING_COOLDOWN": integer
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "DEFAULT_BB_HEIGHT": float
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "ID_TAG": string
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "PASSENGERS_TAG": string
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "UUID_TAG": string
"blockPosition": $BlockPos
"onGround": boolean
"position": $Vec3

constructor(entityType0: $EntityType$$Type<any>, level1: $Level$$Type)

public "absMoveTo"(double0: double, double1: double, double2: double, float3: float, float4: float): void
public "absMoveTo"(double0: double, double1: double, double2: double): void
public "acceptsFailure"(): boolean
public "acceptsSuccess"(): boolean
public "addDeltaMovement"(vec30: $Vec3$$Type): void
public "addMotion"(double0: double, double1: double, double2: double): void
public "addTag"(string0: string): boolean
public "alwaysAccepts"(): boolean
public "animateHurt"(float0: float): void
public "attack"(damageSource0: $DamageSource$$Type, float1: float): boolean
public "attack"(hp: float): void
public "awardKillScore"(entity0: $Entity$$Type, int1: integer, damageSource2: $DamageSource$$Type): void
public "baseTick"(): void
public "blockPosition"(): $BlockPos
public "broadcastToPlayer"(serverPlayer0: $ServerPlayer$$Type): boolean
public "canBeCollidedWith"(): boolean
public "canBeHitByProjectile"(): boolean
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canChangeDimensions"(): boolean
public "canCollideWith"(entity0: $Entity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canFreeze"(): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canSpawnSprintParticle"(): boolean
public "canSprint"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canTrample"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, float2: float): boolean
public "canUpdate"(boolean0: boolean): void
public "canUpdate"(): boolean
public "canaryOnBlockCacheDeleted"(): void
public "canaryOnBlockCacheSet"(blockState0: $BlockState$$Type): void
public "canarySetClimbingMobCachingSectionUpdateBehavior"(boolean0: boolean): void
public "captureDrops"(collection0: $Collection$$Type<$ItemEntity$$Type>): $Collection<$ItemEntity>
public "captureDrops"(): $Collection<$ItemEntity>
public "causeFallDamage"(float0: float, float1: float, damageSource2: $DamageSource$$Type): boolean
public "celestisynth$thisEntity"(): $Entity
public "changeDimension"(serverLevel0: $ServerLevel$$Type): $Entity
public "changeDimension"(serverLevel0: $ServerLevel$$Type, iTeleporter1: $ITeleporter$$Type): $Entity
public "checkBelowWorld"(): void
public "checkDespawn"(): void
public "checkSlowFallDistance"(): void
public "chunkPosition"(): $ChunkPos
public "closerThan"(entity0: $Entity$$Type, double1: double): boolean
public "closerThan"(entity0: $Entity$$Type, double1: double, double2: double): boolean
public "collide"(vec30: $Vec3$$Type): $Vec3
public static "collideBoundingBox"(entity0: $Entity$$Type, vec31: $Vec3$$Type, aABB2: $AABB$$Type, level3: $Level$$Type, list4: $List$$Type): $Vec3
public "copyPosition"(entity0: $Entity$$Type): void
public "createCommandSourceStack"(): $CommandSourceStack
public "damageSources"(): $DamageSources
public "dampensVibrations"(): boolean
public "dataAnchor$createTrackedData"(): void
public "dataAnchor$getTrackedData"(key: $TrackedDataKey$$Type): $Optional
public "dataAnchor$getTrackedDataKeys"(): $Collection
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "discard"(): void
public "dismountTo"(double0: double, double1: double, double2: double): void
public "dismountsUnderwater"(): boolean
public "displayFireAnimation"(): boolean
public "distanceToEntity"(entity0: $Entity$$Type): float
public "distanceToEntitySqr"(entity0: $Entity$$Type): double
public "distanceToSqr"(vec30: $Vec3$$Type): double
public "doEnchantDamageEffects"(livingEntity0: $LivingEntity$$Type, entity1: $Entity$$Type): void
public "dpt$alwaysTick"(): boolean
public "dpt$checkAlwaysTick"(): boolean
public "dpt$setAlwaysTick"(alwaysTick: boolean): void
public "dpt$setTickable"(tickable: boolean): void
public "dpt$tickable"(): boolean
public "dynamicLightTick"(): void
public "dynamicLightTickH"(): void
public "ejectPassengers"(): void
public "extinguish"(): void
public "extinguishFire"(): void
public "fillCrashReportCategory"(crashReportCategory0: $CrashReportCategory$$Type): void
public "filter$initialize"(filters: $Object2ObjectMap$$Type): void
public "filter$initialized"(): boolean
public "filter$matched"(): $ObjectList
public "fireImmune"(): boolean
public "gameEvent"(gameEvent0: $GameEvent$$Type): void
public "gameEvent"(gameEvent0: $GameEvent$$Type, entity1: $Entity$$Type): void
public "getAddEntityPacket"(): $Packet<$ClientGamePacketListener>
public "getAirSupply"(): integer
public "getAllSlots"(): $Iterable<$ItemStack>
public "getArmorSlots"(): $Iterable<$ItemStack>
public "getBbHeight"(): float
public "getBbWidth"(): float
public "getBlock"(): $BlockContainerJS
public "getBlockExplosionResistance"(explosion0: $Explosion$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, fluidState4: $FluidState$$Type, float5: float): float
public "getBlockPosBelowThatAffectsMyMovement"(): $BlockPos
public "getBlockStateOn"(): $BlockState
public "getBlockX"(): integer
public "getBlockY"(): integer
public "getBlockZ"(): integer
public "getBoundingBox"(): $AABB
public "getBoundingBoxForCulling"(): $AABB
public "getCachedFeetBlockState"(): $BlockState
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getClassification"(boolean0: boolean): $MobCategory
public "getCommandSenderWorld"(): $Level
public "getControlledVehicle"(): $Entity
public "getControllingPassenger"(): $LivingEntity
public "getCustomName"(): $Component
public "getDeltaMovement"(): $Vec3
public "getDimensionChangingDelay"(): integer
public "getDimensions"(pose0: $Pose$$Type): $EntityDimensions
/** @deprecated */
public "getDimensionsForge"(pose0: $Pose$$Type): $EntityDimensions
public "getDismountLocationForPassenger"(livingEntity0: $LivingEntity$$Type): $Vec3
public "getDisplayName"(): $Component
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(double0: double, double1: double, double2: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getDynamicLightWorld"(): $Level
public "getDynamicLightWorldH"(): $Level
public "getDynamicLightX"(): double
public "getDynamicLightXH"(): double
public "getDynamicLightY"(): double
public "getDynamicLightYH"(): double
public "getDynamicLightZ"(): double
public "getDynamicLightZH"(): double
public "getEncodeId"(): string
public "getEntityData"(): $SynchedEntityData
public "getEntityType"(): $EntityType<any>
public "getExtension"(key: any, type: $Class$$Type): any
public "getEyeHeight"(): float
public "getEyeHeight"(pose0: $Pose$$Type): float
/** @deprecated */
public "getEyeHeightAccess"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getEyeInFluidType"(): $FluidType
public "getEyePosition"(): $Vec3
public "getEyePosition"(float0: float): $Vec3
public "getEyeY"(): double
public "getFabricBalmData"(): $CompoundTag
public "getFacing"(): $Direction
public "getFeetBlockState"(): $BlockState
public "getFirstPassenger"(): $Entity
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
/** @deprecated */
public "getFluidHeight"(tagKey0: $TagKey$$Type<$Fluid$$Type>): double
public "getFluidJumpThreshold"(): double
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getFluidTypeHeight"(fluidType0: $FluidType$$Type): double
public "getForgePersistentData"(): $CompoundTag
public "getForward"(): $Vec3
public "getFusionModel"(layerIndex: integer): $Triple
public "getHandHoldingItemAngle"(item0: $Item$$Type): $Vec3
public "getHandSlots"(): $Iterable<$ItemStack>
public "getHorizontalFacing"(): $Direction
public "getId"(): integer
public "getIndirectPassengers"(): $Iterable
public "getIsInsideStructureTracker"(): $IsInsideStructureTracker
public "getItem"(): $ItemStack
public "getLeashOffset"(float0: float): $Vec3
public "getLeashOffset"(): $Vec3
public "getLevel"(): $Level
/** @deprecated */
public "getLightLevelDependentMagicValue"(): float
public "getLightProbePosition"(float0: float): $Vec3
public "getLookAngle"(): $Vec3
public "getLuminance"(): integer
public "getLuminanceH"(): integer
public static "getMatched"(entity: $Entity$$Type): $ObjectList<$ResourceLocation>
public "getMaxAirSupply"(): integer
public "getMaxFallDistance"(): integer
public "getMaxHeightFluidType"(): $FluidType
public "getMotionDirection"(): $Direction
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getMotions"(): $Stack
public "getMyRidingOffset"(): double
public "getName"(): $Component
public "getName"(): $Component
public "getNameTagOffsetY"(): float
public "getNbt"(): $CompoundTag
public "getOnPos"(): $BlockPos
/** @deprecated */
public "getOnPosLegacy"(): $BlockPos
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPassengersAndSelf"(): $Stream
public "getPassengersRidingOffset"(): double
public "getPercentFrozen"(): float
public "getPersistentData"(): $CompoundTag
public "getPickRadius"(): float
public "getPickResult"(): $ItemStack
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPistonPushReaction"(): $PushReaction
public "getPitch"(): float
public "getPortalCooldown"(): integer
public "getPortalWaitTime"(): integer
public "getPose"(): $Pose
public "getPosition"(float0: float): $Vec3
public "getPositionCodec"(): $VecDeltaCodec
public "getProfile"(): $GameProfile
public "getRandomX"(double0: double): double
public "getRandomY"(): double
public "getRandomZ"(double0: double): double
public "getRemainingFireTicks"(): integer
public "getRemovalReason"(): $Entity$RemovalReason
public "getRootVehicle"(): $Entity
public "getRopeHoldPosition"(float0: float): $Vec3
public "getRotationVector"(): $Vec2
public "getScriptType"(): $ScriptType
public "getSelfAndPassengers"(): $Stream
public "getServer"(): $MinecraftServer
public "getServer"(): $MinecraftServer
public "getSlot"(int0: integer): $SlotAccess
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getSoundSource"(): $SoundSource
public "getStepHeight"(): float
public "getStringUuid"(): string
public "getTags"(): $Set<string>
public "getTeam"(): $Team
public "getTeamColor"(): integer
public "getTeamId"(): string
public "getTicksFrozen"(): integer
public "getTicksRequiredToFreeze"(): integer
public "getType"(): string
public "getUpVector"(float0: float): $Vec3
public "getUsername"(): string
public "getUuid"(): $UUID
public "getVehicle"(): $Entity
public static "getViewScale"(): double
public "getViewVector"(float0: float): $Vec3
public "getViewXRot"(float0: float): float
public "getViewYRot"(float0: float): float
public "getVisualRotationYInDegrees"(): float
public "getX"(): double
public "getX"(double0: double): double
public "getY"(double0: double): double
public "getY"(): double
public "getYHeadRot"(): float
public "getYaw"(): float
public "getZ"(): double
public "getZ"(double0: double): double
public "gtceu$setFireImmune"(boolean0: boolean): void
public "handleDamageEvent"(damageSource0: $DamageSource$$Type): void
public "handleEntityEvent"(byte0: byte): void
public "handleInsidePortal"(blockPos0: $BlockPos$$Type): void
public "handler$bcb000$celestial_core$dampensVibrations"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public "handler$bdb000$servercore$ignorePushingWhileInactive"(x: double, y: double, z: double, ci: $CallbackInfo$$Type): void
public "handler$bdb000$servercore$onPistonMove"(moverType: $MoverType$$Type, vec3: $Vec3$$Type, ci: $CallbackInfo$$Type): void
public "handler$bdb000$servercore$setupActivationStates"(type: $EntityType$$Type, level: $Level$$Type, ci: $CallbackInfo$$Type): void
public "handler$bgo000$isInvisible"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public "handler$bgo000$isInvisibleTo"(player0: $Player$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type): void
public "handler$bhn000$l2library_overrideClientGlow_isCurrentlyGlowing"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public "handler$cko000$isInsideWall"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type, float1: float, aABB2: $AABB$$Type): void
public "handler$dfe000$onRemove"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$dfe000$removed"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$dfe006$onTick"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$dpg000$getBlockSpeedFactor"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public "handler$dpg000$setWet"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public "handler$ebg001$onRemove"(ci: $CallbackInfo$$Type): void
public "handler$ebg008$onTick"(ci: $CallbackInfo$$Type): void
public "handler$egk00a$onTick"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$ehe001$removed"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$ehe002$onRemove"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$ehe00b$onTick"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$fbj000$createbigcannons$turn"(yaw: double, pitch: double, ci: $CallbackInfo$$Type): void
public "handler$hgp000$onGetEyeHeight"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public "handler$hgp000$onIsInWall"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public "handler$hgp000$onOnGround"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public "handler$hje000$isAlliedTo"(entity0: $Entity$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type): void
public "handler$hje001$isInvisibleTo"(player0: $Player$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type): void
public "handler$hkc000$changeGlowOutline"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public "hasControllingPassenger"(): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hasExactlyOnePlayerPassenger"(): boolean
public "hasGlowingTag"(): boolean
public "hasIndirectPassenger"(entity0: $Entity$$Type): boolean
public "hasPassenger"(entity0: $Entity$$Type): boolean
public "hasPassenger"(predicate0: $Predicate$$Type<$Entity$$Type>): boolean
public "hasPermissions"(int0: integer): boolean
public "hasPose"(pose0: $Pose$$Type): boolean
public "ignoreExplosion"(): boolean
public "interact"(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type): $InteractionResult
public "interactAt"(player0: $Player$$Type, vec31: $Vec3$$Type, interactionHand2: $InteractionHand$$Type): $InteractionResult
public "is"(entity0: $Entity$$Type): boolean
public "isAddedToWorld"(): boolean
public "isAlive"(): boolean
public "isAlliedTo"(team0: $Team$$Type): boolean
public "isAlwaysTicking"(): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isAttackable"(): boolean
public "isColliding"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type): boolean
public "isControlledByLocalInstance"(): boolean
public "isCrouching"(): boolean
public "isCulled"(): boolean
public "isCustomNameVisible"(): boolean
public "isDescending"(): boolean
public "isDiscrete"(): boolean
public "isDynamicLightEnabled"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEffectiveAi"(): boolean
/** @deprecated */
public "isEyeInFluid"(tagKey0: $TagKey$$Type<$Fluid$$Type>): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isForcedVisible"(): boolean
public "isFrame"(): boolean
public "isFree"(double0: double, double1: double, double2: double): boolean
public "isFreezing"(): boolean
public "isFullyFrozen"(): boolean
public "isGlowing"(): boolean
public "isIgnoringBlockTriggers"(): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>, boolean1: boolean): boolean
public "isInFluidType"(): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isInLava"(): boolean
public "isInWall"(): boolean
public "isInWater"(): boolean
public "isInWaterOrBubble"(): boolean
public "isInWaterOrRain"(): boolean
public "isInWaterRainOrBubble"(): boolean
public "isInvisible"(): boolean
public "isInvisibleTo"(player0: $Player$$Type): boolean
public "isInvulnerable"(): boolean
public "isInvulnerableTo"(damageSource0: $DamageSource$$Type): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isNoGravity"(): boolean
public "isOnFire"(): boolean
public "isOnPortalCooldown"(): boolean
public "isOnRails"(): boolean
public "isOnSameTeam"(entity0: $Entity$$Type): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isOutOfCamera"(): boolean
public "isPassenger"(): boolean
public "isPassengerOfSameVehicle"(entity0: $Entity$$Type): boolean
public "isPeacefulCreature"(): boolean
public "isPickable"(): boolean
public "isPlayer"(): boolean
public "isPushable"(): boolean
/** @deprecated */
public "isPushedByFluid"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isRemoved"(): boolean
public "isRewinding"(): boolean
public "isShiftKeyDown"(): boolean
public "isSilent"(): boolean
public "isSpectator"(): boolean
public "isSprinting"(): boolean
public "isSteppingCarefully"(): boolean
public "isSupportedBy"(blockPos0: $BlockPos$$Type): boolean
public "isSuppressingBounce"(): boolean
public "isSwimming"(): boolean
public "isUnderWater"(): boolean
public "isVehicle"(): boolean
public "isVisuallyCrawling"(): boolean
public "isVisuallySwimming"(): boolean
public "isWaterCreature"(): boolean
public "kill"(): void
public "killedEntity"(serverLevel0: $ServerLevel$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "lambdynlights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "lambdynlights$scheduleTrackedChunksRebuildH"(levelRenderer0: $LevelRenderer$$Type): void
public "lambdynlights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "lambdynlights$updateDynamicLightH"(levelRenderer0: $LevelRenderer$$Type): boolean
public "lavaHurt"(): void
public "lerpHeadTo"(float0: float, int1: integer): void
public "lerpMotion"(double0: double, double1: double, double2: double): void
public "lerpTo"(double0: double, double1: double, double2: double, float3: float, float4: float, int5: integer, boolean6: boolean): void
public "load"(compoundTag0: $CompoundTag$$Type): void
public "localvar$bfp000$apoth_checkFallDamageWithGravity"(double0: double): double
public "localvar$dpg000$fluidCollision"(vec30: $Vec3$$Type): $Vec3
public "localvar$edg001$fluidCollision"(vec30: $Vec3$$Type): $Vec3
public "lookAt"(anchor0: $EntityAnchorArgument$Anchor$$Type, vec31: $Vec3$$Type): void
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "makeStuckInBlock"(blockState0: $BlockState$$Type, vec31: $Vec3$$Type): void
public "markFusionRecomputeModels"(): void
/** @deprecated */
public "maxUpStep"(): float
public "mayInteract"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "mirror"(mirror0: $Mirror$$Type): float
public "modifyExpressionValue$ihn000$create$playerHidingAsBoxIsCrouchingNotSwimming"(boolean0: boolean, pose1: $Pose$$Type): boolean
public "modifyReturnValue$ihn000$create$onFireImmune"(boolean0: boolean): boolean
public "move"(moverType0: $MoverType$$Type, vec31: $Vec3$$Type): void
public "moveRelative"(float0: float, vec31: $Vec3$$Type): void
public "moveTo"(vec30: $Vec3$$Type): void
public "moveTo"(double0: double, double1: double, double2: double): void
public "moveTo"(blockPos0: $BlockPos$$Type, float1: float, float2: float): void
public "neruina$clearErrored"(): void
public "neruina$getTickingEntryId"(): $UUID
public "neruina$isErrored"(): boolean
public "neruina$setErrored"(): void
public "neruina$setTickingEntryId"(uUID0: $UUID$$Type): void
public "onAboveBubbleCol"(boolean0: boolean): void
public "onAddedToWorld"(): void
public "onClientRemoval"(): void
public "onGround"(): boolean
public "onInsideBubbleColumn"(boolean0: boolean): void
public "onPassengerTurned"(entity0: $Entity$$Type): void
public "onRemovedFromWorld"(): void
public "onSyncedDataUpdated"(entityDataAccessor0: $EntityDataAccessor$$Type<any>): void
public "onSyncedDataUpdated"(list0: $List$$Type<$SynchedEntityData$DataValue$$Type<any>>): void
public "onlyOpCanSetNbt"(): boolean
public "pick"(double0: double, float1: float, boolean2: boolean): $HitResult
public "playSound"(soundEvent0: $SoundEvent$$Type, float1: float, float2: float): void
public "playSound"(soundEvent0: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "playerTouch"(player0: $Player$$Type): void
public "position"(): $Vec3
public "positionRider"(entity0: $Entity$$Type): void
public "push"(entity0: $Entity$$Type): void
public "rayTrace"(distance: double): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "recreateFromPacket"(clientboundAddEntityPacket0: $ClientboundAddEntityPacket$$Type): void
public "refreshDimensions"(): void
public "remove"(removalReason0: $Entity$RemovalReason$$Type): void
public "removeTag"(string0: string): boolean
public "removeVehicle"(): void
public "resetDynamicLight"(): void
public "resetDynamicLightH"(): void
public "resetFallDistance"(): void
public "restoreFrom"(entity0: $Entity$$Type): void
public "revive"(): void
public "rideTick"(): void
public "rotate"(rotation0: $Rotation$$Type): float
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "save"(compoundTag0: $CompoundTag$$Type): boolean
public "saveAsPassenger"(compoundTag0: $CompoundTag$$Type): boolean
public "saveWithoutId"(compoundTag0: $CompoundTag$$Type): $CompoundTag
public "sdl$dynamicLightTick"(): void
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$getLuminance"(): integer
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "self"(): $Entity
public "sendSystemMessage"(component0: $Component$$Type): void
public "serializeNBT"(): $CompoundTag
public "servercore$getActivatedImmunityTick"(): integer
public "servercore$getActivatedTick"(): integer
public "servercore$getActivationType"(): $ActivationType
public "servercore$getFullTickCount"(): integer
public "servercore$inactiveTick"(): void
public "servercore$incFullTickCount"(): void
public "servercore$isExcluded"(): boolean
public "servercore$isInactive"(): boolean
public "servercore$setActivatedImmunityTick"(tick: integer): void
public "servercore$setActivatedTick"(tick: integer): void
public "servercore$setInactive"(inactive: boolean): void
public "setAirSupply"(int0: integer): void
public "setBoundingBox"(aABB0: $AABB$$Type): void
public "setCulled"(value: boolean): void
public "setCustomName"(component0: $Component$$Type): void
public "setCustomNameVisible"(boolean0: boolean): void
public "setDeltaMovement"(vec30: $Vec3$$Type): void
public "setDynamicLightEnabled"(boolean0: boolean): void
public "setExtension"(key: any, value: any): void
public "setFabricBalmData"(compoundTag0: $CompoundTag$$Type): void
public "setFusionModel"(layerIndex: integer, model: $Triple$$Type): void
public "setGlowing"(boolean0: boolean): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setId"(int0: integer): void
public "setInvisible"(boolean0: boolean): void
public "setInvulnerable"(boolean0: boolean): void
public "setIsInPowderSnow"(boolean0: boolean): void
public "setItemSlot"(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type): void
public "setLevel"(level0: $Level$$Type): void
public "setLevelCallback"(entityInLevelCallback0: $EntityInLevelCallback$$Type): void
public "setMaxUpStep"(float0: float): void
public "setMotion"(double0: double, double1: double, double2: double): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setNoGravity"(boolean0: boolean): void
public "setOldPosAndRot"(): void
public "setOnGround"(boolean0: boolean): void
public "setOnGroundWithKnownMovement"(boolean0: boolean, vec31: $Vec3$$Type): void
public "setOutOfCamera"(value: boolean): void
public "setPitch"(float0: float): void
public "setPortalCooldown"(): void
public "setPortalCooldown"(int0: integer): void
public "setPos"(double0: double, double1: double, double2: double): void
public "setPos"(vec30: $Vec3$$Type): void
public "setPosRaw"(double0: double, double1: double, double2: double): void
public "setPose"(pose0: $Pose$$Type): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPositionAndRotation"(double0: double, double1: double, double2: double, float3: float, float4: float): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRemainingFireTicks"(int0: integer): void
public "setRemoved"(removalReason0: $Entity$RemovalReason$$Type): void
public "setRewinding"(boolean0: boolean): void
public "setRotation"(yaw: float, pitch: float): void
public "setSecondsOnFire"(int0: integer): void
public "setSharedFlag"(int0: integer, boolean1: boolean): void
public "setSharedFlagOnFire"(boolean0: boolean): void
public "setShiftKeyDown"(boolean0: boolean): void
public "setSilent"(boolean0: boolean): void
public "setSprinting"(boolean0: boolean): void
public "setStatusMessage"(message: $Component$$Type): void
public "setSwimming"(boolean0: boolean): void
public "setTicksFrozen"(int0: integer): void
public "setTimeout"(): void
public "setUUID"(uUID0: $UUID$$Type): void
public static "setViewScale"(double0: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setYBodyRot"(float0: float): void
public "setYHeadRot"(float0: float): void
public "setYaw"(float0: float): void
public "setZ"(z: double): void
public "shouldBeSaved"(): boolean
public "shouldBlockExplode"(explosion0: $Explosion$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, float4: float): boolean
public "shouldFusionRecomputeModel"(layerIndex: integer): boolean
public "shouldInformAdmins"(): boolean
public "shouldRender"(double0: double, double1: double, double2: double): boolean
public "shouldRenderAtSqrDistance"(double0: double): boolean
public "shouldRiderSit"(): boolean
public "shouldShowName"(): boolean
public "shouldUpdateDynamicLight"(): boolean
public "shouldUpdateDynamicLightH"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "showVehicleHealth"(): boolean
public "skipAttackInteraction"(entity0: $Entity$$Type): boolean
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(renderer: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(renderer: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "spawnAtLocation"(itemStack0: $ItemStack$$Type): $ItemEntity
public "spawnAtLocation"(itemLike0: $ItemLike$$Type): $ItemEntity
public "spawnAtLocation"(itemLike0: $ItemLike$$Type, int1: integer): $ItemEntity
public "spawnAtLocation"(itemStack0: $ItemStack$$Type, float1: float): $ItemEntity
public "startRiding"(entity0: $Entity$$Type): boolean
public "startRiding"(entity0: $Entity$$Type, boolean1: boolean): boolean
public "startSeenByPlayer"(serverPlayer0: $ServerPlayer$$Type): void
public "stopRiding"(): void
public "stopSeenByPlayer"(serverPlayer0: $ServerPlayer$$Type): void
public "syncPacketPositionCodec"(double0: double, double1: double, double2: double): void
public "teleportRelative"(double0: double, double1: double, double2: double): void
public "teleportTo"(double0: double, double1: double, double2: double): void
public "teleportTo"(serverLevel0: $ServerLevel$$Type, double1: double, double2: double, double3: double, set4: $Set$$Type<$RelativeMovement$$Type>, float5: float, float6: float): boolean
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "teleportToWithTicket"(double0: double, double1: double, double2: double): void
public "tell"(message: $Component$$Type): void
public "thunderHit"(serverLevel0: $ServerLevel$$Type, lightningBolt1: $LightningBolt$$Type): void
public "tick"(): void
public "touchingUnloadedChunk"(): boolean
public "trackingPosition"(): $Vec3
public "turn"(double0: double, double1: double): void
public "unRide"(): void
public "updateDynamicGameEventListener"(biConsumer0: $BiConsumer$$Type<$DynamicGameEventListener$$Type<any>, $ServerLevel$$Type>): void
/** @deprecated */
public "updateFluidHeightAndDoFluidPushing"(tagKey0: $TagKey$$Type<$Fluid$$Type>, double1: double): boolean
public "updateFluidHeightAndDoFluidPushing"(predicate0: $Predicate$$Type<$FluidState$$Type>): void
/** @deprecated */
public "updateFluidHeightAndDoFluidPushing"(): void
public "updateSwimming"(): void
get "age"(): integer
set "age"(value: integer)
get "an_isRewinding"(): boolean
set "an_isRewinding"(value: boolean)
get "ars_Nouveau$motions"(): $Stack
set "ars_Nouveau$motions"(value: $Stack$$Type)
get "blocksBuilding"(): boolean
set "blocksBuilding"(value: boolean)
get "dimensions"(): $EntityDimensions
set "dimensions"(value: $EntityDimensions$$Type)
get "eyeHeight"(): float
set "eyeHeight"(value: float)
get "fallDistance"(): float
set "fallDistance"(value: float)
get "flyDist"(): float
set "flyDist"(value: float)
get "hasImpulse"(): boolean
set "hasImpulse"(value: boolean)
get "horizontalCollision"(): boolean
set "horizontalCollision"(value: boolean)
get "hurtMarked"(): boolean
set "hurtMarked"(value: boolean)
get "invulnerableTime"(): integer
set "invulnerableTime"(value: integer)
get "isInPowderSnow"(): boolean
set "isInPowderSnow"(value: boolean)
get "isInsidePortal"(): boolean
set "isInsidePortal"(value: boolean)
get "level"(): $Level
set "level"(value: $Level$$Type)
get "levelCallback"(): $EntityInLevelCallback
set "levelCallback"(value: $EntityInLevelCallback$$Type)
get "mainSupportingBlockPos"(): $Optional<$BlockPos>
set "mainSupportingBlockPos"(value: $Optional$$Type<$BlockPos$$Type>)
get "minorHorizontalCollision"(): boolean
set "minorHorizontalCollision"(value: boolean)
get "moveDist"(): float
set "moveDist"(value: float)
get "noCulling"(): boolean
set "noCulling"(value: boolean)
get "noPhysics"(): boolean
set "noPhysics"(value: boolean)
get "portalEntrancePos"(): $BlockPos
set "portalEntrancePos"(value: $BlockPos$$Type)
get "portalTime"(): integer
set "portalTime"(value: integer)
get "removalReason"(): $Entity$RemovalReason
set "removalReason"(value: $Entity$RemovalReason$$Type)
get "stepHeight"(): float
set "stepHeight"(value: float)
get "verticalCollision"(): boolean
set "verticalCollision"(value: boolean)
get "verticalCollisionBelow"(): boolean
set "verticalCollisionBelow"(value: boolean)
get "walkDist"(): float
set "walkDist"(value: float)
get "walkDistO"(): float
set "walkDistO"(value: float)
get "wasEyeInWater"(): boolean
set "wasEyeInWater"(value: boolean)
get "wasInPowderSnow"(): boolean
set "wasInPowderSnow"(value: boolean)
get "wasOnFire"(): boolean
set "wasOnFire"(value: boolean)
get "wasTouchingWater"(): boolean
set "wasTouchingWater"(value: boolean)
get "xOld"(): double
set "xOld"(value: double)
get "xRot"(): float
set "xRot"(value: float)
get "xRotO"(): float
set "xRotO"(value: float)
get "xo"(): double
set "xo"(value: double)
get "yOld"(): double
set "yOld"(value: double)
get "yRot"(): float
set "yRot"(value: float)
get "yRotO"(): float
set "yRotO"(value: float)
get "yo"(): double
set "yo"(value: double)
get "zOld"(): double
set "zOld"(value: double)
get "zo"(): double
set "zo"(value: double)
get "addEntityPacket"(): $Packet<$ClientGamePacketListener>
get "airSupply"(): integer
get "allSlots"(): $Iterable<$ItemStack>
get "armorSlots"(): $Iterable<$ItemStack>
get "bbHeight"(): float
get "bbWidth"(): float
get "block"(): $BlockContainerJS
get "blockPosBelowThatAffectsMyMovement"(): $BlockPos
get "blockStateOn"(): $BlockState
get "blockX"(): integer
get "blockY"(): integer
get "blockZ"(): integer
get "boundingBox"(): $AABB
get "boundingBoxForCulling"(): $AABB
get "cachedFeetBlockState"(): $BlockState
get "commandSenderWorld"(): $Level
get "controlledVehicle"(): $Entity
get "controllingPassenger"(): $LivingEntity
get "customName"(): $Component
get "deltaMovement"(): $Vec3
get "dimensionChangingDelay"(): integer
get "displayName"(): $Component
get "displayName"(): $Component
get "dynamicLightWorld"(): $Level
get "dynamicLightWorldH"(): $Level
get "dynamicLightX"(): double
get "dynamicLightXH"(): double
get "dynamicLightY"(): double
get "dynamicLightYH"(): double
get "dynamicLightZ"(): double
get "dynamicLightZH"(): double
get "encodeId"(): string
get "entityData"(): $SynchedEntityData
get "entityType"(): $EntityType<any>
get "eyeInFluidType"(): $FluidType
get "eyePosition"(): $Vec3
get "eyeY"(): double
get "fabricBalmData"(): $CompoundTag
get "facing"(): $Direction
get "feetBlockState"(): $BlockState
get "firstPassenger"(): $Entity
get "fluidJumpThreshold"(): double
get "forgePersistentData"(): $CompoundTag
get "forward"(): $Vec3
get "handSlots"(): $Iterable<$ItemStack>
get "horizontalFacing"(): $Direction
get "id"(): integer
get "indirectPassengers"(): $Iterable
get "isInsideStructureTracker"(): $IsInsideStructureTracker
get "item"(): $ItemStack
get "leashOffset"(): $Vec3
get "lightLevelDependentMagicValue"(): float
get "lookAngle"(): $Vec3
get "luminance"(): integer
get "luminanceH"(): integer
get "maxAirSupply"(): integer
get "maxFallDistance"(): integer
get "maxHeightFluidType"(): $FluidType
get "motionDirection"(): $Direction
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "motions"(): $Stack
get "myRidingOffset"(): double
get "name"(): $Component
get "name"(): $Component
get "nameTagOffsetY"(): float
get "nbt"(): $CompoundTag
get "onPos"(): $BlockPos
get "onPosLegacy"(): $BlockPos
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "passengersAndSelf"(): $Stream
get "passengersRidingOffset"(): double
get "percentFrozen"(): float
get "persistentData"(): $CompoundTag
get "pickRadius"(): float
get "pickResult"(): $ItemStack
get "pistonPushReaction"(): $PushReaction
get "pitch"(): float
get "portalCooldown"(): integer
get "portalWaitTime"(): integer
get "pose"(): $Pose
get "positionCodec"(): $VecDeltaCodec
get "profile"(): $GameProfile
get "randomY"(): double
get "remainingFireTicks"(): integer
get "rootVehicle"(): $Entity
get "rotationVector"(): $Vec2
get "scriptType"(): $ScriptType
get "selfAndPassengers"(): $Stream
get "server"(): $MinecraftServer
get "server"(): $MinecraftServer
get "soundSource"(): $SoundSource
get "stringUuid"(): string
get "tags"(): $Set<string>
get "team"(): $Team
get "teamColor"(): integer
get "teamId"(): string
get "ticksFrozen"(): integer
get "ticksRequiredToFreeze"(): integer
get "type"(): string
get "username"(): string
get "uuid"(): $UUID
get "vehicle"(): $Entity
get "visualRotationYInDegrees"(): float
get "x"(): double
get "y"(): double
get "yHeadRot"(): float
get "yaw"(): float
get "z"(): double
get "addedToWorld"(): boolean
get "alive"(): boolean
get "alwaysTicking"(): boolean
get "ambientCreature"(): boolean
get "animal"(): boolean
get "attackable"(): boolean
get "controlledByLocalInstance"(): boolean
get "crouching"(): boolean
get "culled"(): boolean
get "customNameVisible"(): boolean
get "descending"(): boolean
get "discrete"(): boolean
get "dynamicLightEnabled"(): boolean
get "dynamicLightEnabledH"(): boolean
get "effectiveAi"(): boolean
get "forcedVisible"(): boolean
get "frame"(): boolean
get "freezing"(): boolean
get "fullyFrozen"(): boolean
get "glowing"(): boolean
get "ignoringBlockTriggers"(): boolean
get "inFluidType"(): boolean
get "inLava"(): boolean
get "inWall"(): boolean
get "inWater"(): boolean
get "inWaterOrBubble"(): boolean
get "inWaterOrRain"(): boolean
get "inWaterRainOrBubble"(): boolean
get "invisible"(): boolean
get "invulnerable"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "noGravity"(): boolean
get "onFire"(): boolean
get "onPortalCooldown"(): boolean
get "onRails"(): boolean
get "outOfCamera"(): boolean
get "passenger"(): boolean
get "peacefulCreature"(): boolean
get "pickable"(): boolean
get "player"(): boolean
get "pushable"(): boolean
get "pushedByFluid"(): boolean
get "removed"(): boolean
get "rewinding"(): boolean
get "shiftKeyDown"(): boolean
get "silent"(): boolean
get "spectator"(): boolean
get "sprinting"(): boolean
get "steppingCarefully"(): boolean
get "suppressingBounce"(): boolean
get "swimming"(): boolean
get "underWater"(): boolean
get "vehicle"(): boolean
get "visuallyCrawling"(): boolean
get "visuallySwimming"(): boolean
get "waterCreature"(): boolean
set "airSupply"(value: integer)
set "boundingBox"(value: $AABB$$Type)
set "culled"(value: boolean)
set "customName"(value: $Component$$Type)
set "customNameVisible"(value: boolean)
set "deltaMovement"(value: $Vec3$$Type)
set "dynamicLightEnabled"(value: boolean)
set "fabricBalmData"(value: $CompoundTag$$Type)
set "glowing"(value: boolean)
set "hexereiDynamicLightEnabled"(value: boolean)
set "id"(value: integer)
set "invisible"(value: boolean)
set "invulnerable"(value: boolean)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "noGravity"(value: boolean)
set "outOfCamera"(value: boolean)
set "pitch"(value: float)
set "portalCooldown"(value: integer)
set "pos"(value: $Vec3$$Type)
set "pose"(value: $Pose$$Type)
set "remainingFireTicks"(value: integer)
set "removed"(value: $Entity$RemovalReason$$Type)
set "rewinding"(value: boolean)
set "secondsOnFire"(value: integer)
set "sharedFlagOnFire"(value: boolean)
set "shiftKeyDown"(value: boolean)
set "silent"(value: boolean)
set "sprinting"(value: boolean)
set "statusMessage"(value: $Component$$Type)
set "swimming"(value: boolean)
set "ticksFrozen"(value: integer)
set "uUID"(value: $UUID$$Type)
set "x"(value: double)
set "y"(value: double)
set "yBodyRot"(value: float)
set "yHeadRot"(value: float)
set "yaw"(value: float)
set "z"(value: double)
}
}

declare module "net.minecraft.world.entity.EntityDimensions" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"

export class $EntityDimensions {
readonly "fixed": boolean

constructor(float0: float, float1: float, boolean2: boolean)

public static "fixed"(float0: float, float1: float): $EntityDimensions
public "makeBoundingBox"(double0: double, double1: double, double2: double): $AABB
public "makeBoundingBox"(vec30: $Vec3$$Type): $AABB
public static "scalable"(float0: float, float1: float): $EntityDimensions
public "scale"(float0: float, float1: float): $EntityDimensions
public "scale"(float0: float): $EntityDimensions
get "height"(): float
set "height"(value: float)
get "width"(): float
set "width"(value: float)
}
}

declare module "net.minecraft.world.entity.SlotAccess" {
import { $Container$$Type } from "net.minecraft.world.Container"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $SlotAccess {
"get"(): $ItemStack
"set"(itemStack0: $ItemStack$$Type): boolean
}

export namespace $SlotAccess {
const NULL: $SlotAccess
function forContainer(container0: $Container$$Type, int1: integer, predicate2: $Predicate$$Type<$ItemStack$$Type>): $SlotAccess
function forContainer(container0: $Container$$Type, int1: integer): $SlotAccess
function forEquipmentSlot(livingEntity0: $LivingEntity$$Type, equipmentSlot1: $EquipmentSlot$$Type, predicate2: $Predicate$$Type<$ItemStack$$Type>): $SlotAccess
function forEquipmentSlot(livingEntity0: $LivingEntity$$Type, equipmentSlot1: $EquipmentSlot$$Type): $SlotAccess
}
export abstract class $SlotAccess$$Static implements $SlotAccess {
static readonly "NULL": $SlotAccess

static "forContainer"(container0: $Container$$Type, int1: integer, predicate2: $Predicate$$Type<$ItemStack$$Type>): $SlotAccess
static "forContainer"(container0: $Container$$Type, int1: integer): $SlotAccess
static "forEquipmentSlot"(livingEntity0: $LivingEntity$$Type, equipmentSlot1: $EquipmentSlot$$Type, predicate2: $Predicate$$Type<$ItemStack$$Type>): $SlotAccess
static "forEquipmentSlot"(livingEntity0: $LivingEntity$$Type, equipmentSlot1: $EquipmentSlot$$Type): $SlotAccess
}
}

declare module "net.minecraft.world.entity.SpawnGroupData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpawnGroupData {
}

export namespace $SpawnGroupData {
const probejs$$marker: never
}
export abstract class $SpawnGroupData$$Static implements $SpawnGroupData {
}
}

declare module "net.minecraft.world.entity.WalkAnimationState" {
import { $WalkAnimationStateAccessor } from "com.blorb.morerelics.mixin.WalkAnimationStateAccessor"
import { $AccessorWalkAnimationState } from "com.railwayteam.railways.mixin.client.AccessorWalkAnimationState"

export class $WalkAnimationState implements $WalkAnimationStateAccessor, $AccessorWalkAnimationState {
"position": float

constructor()

public "isMoving"(): boolean
public "position"(float0: float): float
public "position"(): float
public "setSpeed"(float0: float): void
public "speed"(float0: float): float
public "speed"(): float
public "update"(float0: float, float1: float): void
get "moving"(): boolean
}
}

declare module "net.minecraft.world.entity.Pose" {
import { $Enum } from "java.lang.Enum"

export class $Pose extends $Enum<$Pose> {
static readonly "CROAKING": $Pose
static readonly "CROUCHING": $Pose
static readonly "DIGGING": $Pose
static readonly "DYING": $Pose
static readonly "EMERGING": $Pose
static readonly "FALL_FLYING": $Pose
static readonly "LONG_JUMPING": $Pose
static readonly "ROARING": $Pose
static readonly "SITTING": $Pose
static readonly "SLEEPING": $Pose
static readonly "SNIFFING": $Pose
static readonly "SPIN_ATTACK": $Pose
static readonly "STANDING": $Pose
static readonly "SWIMMING": $Pose
static readonly "USING_TONGUE": $Pose

public static "valueOf"(string0: string): $Pose
public static "values"(): $Pose[]
}
}

declare module "net.minecraft.world.entity.Display$TextDisplay$TextRenderState" {
import { $Display$IntInterpolator, $Display$IntInterpolator$$Type } from "net.minecraft.world.entity.Display$IntInterpolator"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Record } from "java.lang.Record"

export class $Display$TextDisplay$TextRenderState extends $Record {
constructor(component0: $Component$$Type, int1: integer, intInterpolator2: $Display$IntInterpolator$$Type, intInterpolator3: $Display$IntInterpolator$$Type, byte4: byte)

public "backgroundColor"(): $Display$IntInterpolator
public "flags"(): byte
public "lineWidth"(): integer
public "text"(): $Component
public "textOpacity"(): $Display$IntInterpolator
}
}

declare module "net.minecraft.world.entity.AnimationState" {
import { $Consumer$$Type } from "java.util.function.Consumer"

export class $AnimationState {
constructor()

public "animateWhen"(boolean0: boolean, int1: integer): void
public "getAccumulatedTime"(): long
public "ifStarted"(consumer0: $Consumer$$Type<$AnimationState$$Type>): void
public "isStarted"(): boolean
public "start"(int0: integer): void
public "startIfStopped"(int0: integer): void
public "stop"(): void
public "updateTime"(float0: float, float1: float): void
get "accumulatedTime"(): long
get "started"(): boolean
}
}

declare module "net.minecraft.world.entity.RiderShieldingMount" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RiderShieldingMount {
"getRiderShieldingHeight"(): double
get "riderShieldingHeight"(): double
}

export namespace $RiderShieldingMount {
const probejs$$marker: never
}
export abstract class $RiderShieldingMount$$Static implements $RiderShieldingMount {
}
}

declare module "net.minecraft.world.entity.PlayerRideableJumping" {
import { $PlayerRideable } from "net.minecraft.world.entity.PlayerRideable"

export interface $PlayerRideableJumping extends $PlayerRideable {
"canJump"(): boolean
"getJumpCooldown"(): integer
"handleStartJump"(int0: integer): void
"handleStopJump"(): void
"onPlayerJump"(int0: integer): void
get "jumpCooldown"(): integer
}

export namespace $PlayerRideableJumping {
const probejs$$marker: never
}
export abstract class $PlayerRideableJumping$$Static implements $PlayerRideableJumping {
}
}

declare module "net.minecraft.world.entity.Entity$RemovalReason" {
import { $Enum } from "java.lang.Enum"

export class $Entity$RemovalReason extends $Enum<$Entity$RemovalReason> {
static readonly "CHANGED_DIMENSION": $Entity$RemovalReason
static readonly "DISCARDED": $Entity$RemovalReason
static readonly "KILLED": $Entity$RemovalReason
static readonly "UNLOADED_TO_CHUNK": $Entity$RemovalReason
static readonly "UNLOADED_WITH_PLAYER": $Entity$RemovalReason

public "shouldDestroy"(): boolean
public "shouldSave"(): boolean
public static "valueOf"(string0: string): $Entity$RemovalReason
public static "values"(): $Entity$RemovalReason[]
}
}

declare module "net.minecraft.world.entity.NeutralMob" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $NeutralMob {
"addPersistentAngerSaveData"(compoundTag0: $CompoundTag$$Type): void
"canAttack"(livingEntity0: $LivingEntity$$Type): boolean
"forgetCurrentTargetAndRefreshUniversalAnger"(): void
"getLastHurtByMob"(): $LivingEntity
"getPersistentAngerTarget"(): $UUID
"getRemainingPersistentAngerTime"(): integer
"getTarget"(): $LivingEntity
"isAngry"(): boolean
"isAngryAt"(livingEntity0: $LivingEntity$$Type): boolean
"isAngryAtAllPlayers"(level0: $Level$$Type): boolean
"playerDied"(player0: $Player$$Type): void
"readPersistentAngerSaveData"(level0: $Level$$Type, compoundTag1: $CompoundTag$$Type): void
"setLastHurtByMob"(livingEntity0: $LivingEntity$$Type): void
"setLastHurtByPlayer"(player0: $Player$$Type): void
"setPersistentAngerTarget"(uUID0: $UUID$$Type): void
"setRemainingPersistentAngerTime"(int0: integer): void
"setTarget"(livingEntity0: $LivingEntity$$Type): void
"startPersistentAngerTimer"(): void
"stopBeingAngry"(): void
"updatePersistentAnger"(serverLevel0: $ServerLevel$$Type, boolean1: boolean): void
get "lastHurtByMob"(): $LivingEntity
get "persistentAngerTarget"(): $UUID
get "remainingPersistentAngerTime"(): integer
get "target"(): $LivingEntity
get "angry"(): boolean
set "lastHurtByMob"(value: $LivingEntity$$Type)
set "lastHurtByPlayer"(value: $Player$$Type)
set "persistentAngerTarget"(value: $UUID$$Type)
set "remainingPersistentAngerTime"(value: integer)
set "target"(value: $LivingEntity$$Type)
}

export namespace $NeutralMob {
const TAG_ANGER_TIME: string
const TAG_ANGRY_AT: string
}
export abstract class $NeutralMob$$Static implements $NeutralMob {
static readonly "TAG_ANGER_TIME": string
static readonly "TAG_ANGRY_AT": string

}
}

declare module "net.minecraft.world.entity.Display$TextDisplay$CachedInfo" {
import { $List, $List$$Type } from "java.util.List"
import { $Display$TextDisplay$CachedLine, $Display$TextDisplay$CachedLine$$Type } from "net.minecraft.world.entity.Display$TextDisplay$CachedLine"
import { $Record } from "java.lang.Record"

export class $Display$TextDisplay$CachedInfo extends $Record {
constructor(list0: $List$$Type<$Display$TextDisplay$CachedLine$$Type>, int1: integer)

public "lines"(): $List<$Display$TextDisplay$CachedLine>
public "width"(): integer
}
}

declare module "net.minecraft.world.entity.Display$IntInterpolator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Display$IntInterpolator {
"get"(float0: float): integer
}

export namespace $Display$IntInterpolator {
function constant(int0: integer): $Display$IntInterpolator
}
export abstract class $Display$IntInterpolator$$Static implements $Display$IntInterpolator {
static "constant"(int0: integer): $Display$IntInterpolator
}
}

declare module "net.minecraft.world.entity.EquipmentSlot$Type" {
import { $Enum } from "java.lang.Enum"

export class $EquipmentSlot$Type extends $Enum<$EquipmentSlot$Type> {
static readonly "ARMOR": $EquipmentSlot$Type
static readonly "HAND": $EquipmentSlot$Type

public static "valueOf"(string0: string): $EquipmentSlot$Type
public static "values"(): $EquipmentSlot$Type[]
}
}

declare module "net.minecraft.world.entity.AreaEffectCloud" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Direction } from "net.minecraft.core.Direction"
import { $ParticleOptions, $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"
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
import { $Potion, $Potion$$Type } from "net.minecraft.world.item.alchemy.Potion"
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

export class $AreaEffectCloud extends $Entity implements $TraceableEntity {
static readonly "DEFAULT_WIDTH": float
static readonly "HEIGHT": float

constructor(entityType0: $EntityType$$Type<$AreaEffectCloud$$Type>, level1: $Level$$Type)
constructor(level0: $Level$$Type, double1: double, double2: double, double3: double)

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
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getDuration"(): integer
public "getDurationOnUse"(): integer
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
public "getParticle"(): $ParticleOptions
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotion"(): $Potion
public "getProfile"(): $GameProfile
public "getRadius"(): float
public "getRadiusOnUse"(): float
public "getRadiusPerTick"(): float
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getType"(): string
public "getWaitTime"(): integer
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
public "isWaiting"(): boolean
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
public "setDuration"(int0: integer): void
public "setDurationOnUse"(int0: integer): void
public "setDynamicLightEnabled"(boolean0: boolean): void
public "setFixedColor"(int0: integer): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOwner"(livingEntity0: $LivingEntity$$Type): void
public "setParticle"(particleOptions0: $ParticleOptions$$Type): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setPotion"(potion0: $Potion$$Type): void
public "setRadius"(float0: float): void
public "setRadiusOnUse"(float0: float): void
public "setRadiusPerTick"(float0: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setWaitTime"(int0: integer): void
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
get "duration"(): integer
get "durationOnUse"(): integer
get "facing"(): $Direction
get "item"(): $ItemStack
get "level"(): $Level
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "particle"(): $ParticleOptions
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potion"(): $Potion
get "profile"(): $GameProfile
get "radius"(): float
get "radiusOnUse"(): float
get "radiusPerTick"(): float
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "type"(): string
get "waitTime"(): integer
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
get "waiting"(): boolean
get "waterCreature"(): boolean
set "duration"(value: integer)
set "durationOnUse"(value: integer)
set "dynamicLightEnabled"(value: boolean)
set "fixedColor"(value: integer)
set "hexereiDynamicLightEnabled"(value: boolean)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "owner"(value: $LivingEntity$$Type)
set "particle"(value: $ParticleOptions$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "potion"(value: $Potion$$Type)
set "radius"(value: float)
set "radiusOnUse"(value: float)
set "radiusPerTick"(value: float)
set "statusMessage"(value: $Component$$Type)
set "waitTime"(value: integer)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "net.minecraft.world.entity.Display$BlockDisplay$BlockRenderState" {
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Record } from "java.lang.Record"

export class $Display$BlockDisplay$BlockRenderState extends $Record {
constructor(blockState0: $BlockState$$Type)

public "blockState"(): $BlockState
}
}

declare module "net.minecraft.world.entity.Display" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Direction } from "net.minecraft.core.Direction"
import { $Quaternionf } from "org.joml.Quaternionf"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $Display$BillboardConstraints$$Type } from "net.minecraft.world.entity.Display$BillboardConstraints"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $Display$RenderState } from "net.minecraft.world.entity.Display$RenderState"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $ObjectList } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $Transformation$$Type } from "com.mojang.math.Transformation"
import { $DisplayAccessor } from "dev.tr7zw.entityculling.mixin.DisplayAccessor"
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

export class $Display extends $Entity implements $DisplayAccessor {
static readonly "NO_BRIGHTNESS_OVERRIDE": integer
static readonly "TAG_BILLBOARD": string
static readonly "TAG_BRIGHTNESS": string
static readonly "TAG_GLOW_COLOR_OVERRIDE": string
static readonly "TAG_HEIGHT": string
static readonly "TAG_INTERPOLATION_DURATION": string
static readonly "TAG_SHADOW_RADIUS": string
static readonly "TAG_SHADOW_STRENGTH": string
static readonly "TAG_START_INTERPOLATION": string
static readonly "TAG_TRANSFORMATION": string
static readonly "TAG_VIEW_RANGE": string
static readonly "TAG_WIDTH": string

constructor(entityType0: $EntityType$$Type<any>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "calculateInterpolationProgress"(float0: float): float
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
public "orientation"(): $Quaternionf
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(distance: double): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "renderState"(): $Display$RenderState
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "self"(): $Entity
public "serializeNBT"(): $CompoundTag
public "setBillboardConstraints"(billboardConstraints0: $Display$BillboardConstraints$$Type): void
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
public "setTransformation"(transformation0: $Transformation$$Type): void
public "setViewRange"(float0: float): void
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
set "billboardConstraints"(value: $Display$BillboardConstraints$$Type)
set "dynamicLightEnabled"(value: boolean)
set "hexereiDynamicLightEnabled"(value: boolean)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "transformation"(value: $Transformation$$Type)
set "viewRange"(value: float)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "net.minecraft.world.entity.Display$ItemDisplay" {
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
import { $Display } from "net.minecraft.world.entity.Display"
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
import { $Display$ItemDisplay$ItemRenderState } from "net.minecraft.world.entity.Display$ItemDisplay$ItemRenderState"

export class $Display$ItemDisplay extends $Display {
constructor(entityType0: $EntityType$$Type<any>, level1: $Level$$Type)

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
public "itemRenderState"(): $Display$ItemDisplay$ItemRenderState
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

declare module "net.minecraft.world.entity.Display$TextDisplay$Align" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $Display$TextDisplay$Align extends $Enum<$Display$TextDisplay$Align> implements $StringRepresentable {
static readonly "CENTER": $Display$TextDisplay$Align
static readonly "CODEC": $Codec<$Display$TextDisplay$Align>
static readonly "LEFT": $Display$TextDisplay$Align
static readonly "RIGHT": $Display$TextDisplay$Align

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $Display$TextDisplay$Align
public static "values"(): $Display$TextDisplay$Align[]
get "serializedName"(): string
}
}

declare module "net.minecraft.world.entity.Display$FloatInterpolator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Display$FloatInterpolator {
"get"(float0: float): float
}

export namespace $Display$FloatInterpolator {
function constant(float0: float): $Display$FloatInterpolator
}
export abstract class $Display$FloatInterpolator$$Static implements $Display$FloatInterpolator {
static "constant"(float0: float): $Display$FloatInterpolator
}
}

declare module "net.minecraft.world.entity.MobCategory" {
import { $IExtensibleEnum } from "net.minecraftforge.common.IExtensibleEnum"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $IMobCategory } from "me.wesley1808.servercore.common.interfaces.IMobCategory"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $MobCategory extends $Enum<$MobCategory> implements $StringRepresentable, $IExtensibleEnum, $IMobCategory {
static readonly "AMBIENT": $MobCategory
static readonly "AXOLOTLS": $MobCategory
static readonly "CODEC": $Codec<$MobCategory>
static readonly "CREATURE": $MobCategory
static readonly "MISC": $MobCategory
static readonly "MONSTER": $MobCategory
static readonly "UNDERGROUND_WATER_CREATURE": $MobCategory
static readonly "WATER_AMBIENT": $MobCategory
static readonly "WATER_CREATURE": $MobCategory

public static "byName"(string0: string): $MobCategory
public static "create"(string0: string, string1: string, int2: integer, boolean3: boolean, boolean4: boolean, int5: integer): $MobCategory
public static "createCodecForExtensibleEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, E>): $Codec<E>
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getDespawnDistance"(): integer
public "getMaxInstancesPerChunk"(): integer
public "getName"(): string
public "getNoDespawnDistance"(): integer
public static "getOriginalCapacity"(category: $MobCategory$$Type): integer
public "getSerializedName"(): string
public static "getSpawnInterval"(category: $MobCategory$$Type): integer
/** @deprecated */
public "init"(): void
public "isFriendly"(): boolean
public "isPersistent"(): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "modifyCapacity"(category: $MobCategory$$Type, modifier: double): void
public static "of"(category: $MobCategory$$Type): $IMobCategory
public static "reload"(): void
public "servercore$getOriginalCapacity"(): integer
public "servercore$getSpawnInterval"(): integer
public "servercore$modifyCapacity"(modifier: double): void
public "servercore$modifySpawningConfig"(max: integer, interval: integer): void
public static "valueOf"(string0: string): $MobCategory
public static "values"(): $MobCategory[]
get "despawnDistance"(): integer
get "maxInstancesPerChunk"(): integer
get "name"(): string
get "noDespawnDistance"(): integer
get "serializedName"(): string
get "friendly"(): boolean
get "persistent"(): boolean
}
}

declare module "net.minecraft.world.entity.LerpingModel" {
import { $Map } from "java.util.Map"
import { $Vector3f } from "org.joml.Vector3f"

export interface $LerpingModel {
"getModelRotationValues"(): $Map<string, $Vector3f>
get "modelRotationValues"(): $Map<string, $Vector3f>
}

export namespace $LerpingModel {
const probejs$$marker: never
}
export abstract class $LerpingModel$$Static implements $LerpingModel {
}
}

declare module "net.minecraft.world.entity.EquipmentSlot" {
import { $Enum } from "java.lang.Enum"
import { $EquipmentSlot$Type, $EquipmentSlot$Type$$Type } from "net.minecraft.world.entity.EquipmentSlot$Type"

export class $EquipmentSlot extends $Enum<$EquipmentSlot> {
static readonly "CHEST": $EquipmentSlot
static readonly "FEET": $EquipmentSlot
static readonly "HEAD": $EquipmentSlot
static readonly "LEGS": $EquipmentSlot
static readonly "MAINHAND": $EquipmentSlot
static readonly "OFFHAND": $EquipmentSlot

public static "byName"(string0: string): $EquipmentSlot
public static "byTypeAndIndex"(type0: $EquipmentSlot$Type$$Type, int1: integer): $EquipmentSlot
public "getFilterFlag"(): integer
public "getIndex"(int0: integer): integer
public "getIndex"(): integer
public "getName"(): string
public "getType"(): $EquipmentSlot$Type
public "isArmor"(): boolean
public static "valueOf"(string0: string): $EquipmentSlot
public static "values"(): $EquipmentSlot[]
get "filterFlag"(): integer
get "index"(): integer
get "name"(): string
get "type"(): $EquipmentSlot$Type
get "armor"(): boolean
}
}

declare module "net.minecraft.world.entity.Display$TextDisplay$LineSplitter" {
import { $Display$TextDisplay$CachedInfo } from "net.minecraft.world.entity.Display$TextDisplay$CachedInfo"
import { $Component$$Type } from "net.minecraft.network.chat.Component"

export interface $Display$TextDisplay$LineSplitter {
"split"(component0: $Component$$Type, int1: integer): $Display$TextDisplay$CachedInfo
}

export namespace $Display$TextDisplay$LineSplitter {
const probejs$$marker: never
}
export abstract class $Display$TextDisplay$LineSplitter$$Static implements $Display$TextDisplay$LineSplitter {
}
}

declare module "net.minecraft.world.entity.LightningBolt" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $ObjectList } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Set } from "java.util.Set"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $List$$Type } from "java.util.List"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Stream } from "java.util.stream.Stream"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $LightningBolt extends $Entity {
readonly "hitEntities": $Set<$Entity>

constructor(entityType0: $EntityType$$Type<$LightningBolt$$Type>, level1: $Level$$Type)

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
public static "clearCopperOnLightningStrike"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getBlock"(): $BlockContainerJS
public "getBlocksSetOnFire"(): integer
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getCause"(): $ServerPlayer
public "getClassification"(boolean0: boolean): $MobCategory
public "getDamage"(): float
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHitEntities"(): $Stream<$Entity>
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
public "getStrikePosition"(): $BlockPos
public "getTeamId"(): string
public "getType"(): string
public "handler$eie000$handleLightning"(ci: $CallbackInfo$$Type, list: $List$$Type): void
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
public "powerLightningRod"(): void
public "rayTrace"(distance: double): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "self"(): $Entity
public "serializeNBT"(): $CompoundTag
public "setCause"(serverPlayer0: $ServerPlayer$$Type): void
public "setDamage"(float0: float): void
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
public "setVisualOnly"(boolean0: boolean): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "spawn"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
get "flashes"(): integer
set "flashes"(value: integer)
get "life"(): integer
set "life"(value: integer)
get "seed"(): long
set "seed"(value: long)
get "visualOnly"(): boolean
set "visualOnly"(value: boolean)
get "block"(): $BlockContainerJS
get "blocksSetOnFire"(): integer
get "cause"(): $ServerPlayer
get "damage"(): float
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
get "strikePosition"(): $BlockPos
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
set "cause"(value: $ServerPlayer$$Type)
set "damage"(value: float)
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

declare module "net.minecraft.world.entity.MobSpawnType" {
import { $Enum } from "java.lang.Enum"

export class $MobSpawnType extends $Enum<$MobSpawnType> {
static readonly "BREEDING": $MobSpawnType
static readonly "BUCKET": $MobSpawnType
static readonly "CHUNK_GENERATION": $MobSpawnType
static readonly "COMMAND": $MobSpawnType
static readonly "CONVERSION": $MobSpawnType
static readonly "DISPENSER": $MobSpawnType
static readonly "EVENT": $MobSpawnType
static readonly "JOCKEY": $MobSpawnType
static readonly "MOB_SUMMONED": $MobSpawnType
static readonly "NATURAL": $MobSpawnType
static readonly "PATROL": $MobSpawnType
static readonly "REINFORCEMENT": $MobSpawnType
static readonly "SPAWNER": $MobSpawnType
static readonly "SPAWN_EGG": $MobSpawnType
static readonly "STRUCTURE": $MobSpawnType
static readonly "TRIGGERED": $MobSpawnType

public static "valueOf"(string0: string): $MobSpawnType
public static "values"(): $MobSpawnType[]
}
}

declare module "net.minecraft.world.entity.Interaction" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
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
import { $Attackable } from "net.minecraft.world.entity.Attackable"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $Targeting } from "net.minecraft.world.entity.Targeting"
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

export class $Interaction extends $Entity implements $Attackable, $Targeting {
constructor(entityType0: $EntityType$$Type<any>, level1: $Level$$Type)

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
public "getLastAttacker"(): $LivingEntity
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
public "getTarget"(): $LivingEntity
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
get "lastAttacker"(): $LivingEntity
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
get "target"(): $LivingEntity
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

declare module "net.minecraft.world.entity.PowerableMob" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PowerableMob {
"isPowered"(): boolean
get "powered"(): boolean
}

export namespace $PowerableMob {
const probejs$$marker: never
}
export abstract class $PowerableMob$$Static implements $PowerableMob {
}
}

declare module "net.minecraft.world.entity.LivingEntity" {
import { $ShootResult } from "com.tacz.guns.api.entity.ShootResult"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $LivingEntityAccessor } from "com.simibubi.create.foundation.mixin.accessor.LivingEntityAccessor"
import { $MobType } from "net.minecraft.world.entity.MobType"
import { $LivingEntityMixin } from "wootrevived.woot.mixins.impl.LivingEntityMixin"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Holder$$Type } from "net.minecraft.core.Holder"
import { $Pose, $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $ShooterDataHolder } from "com.tacz.guns.entity.shooter.ShooterDataHolder"
import { $AccessorLivingEntity } from "at.petrak.hexcasting.mixin.accessor.AccessorLivingEntity"
import { $Map } from "java.util.Map"
import { $ICapeDataProvider } from "io.redspace.ironslib.game.client.ICapeDataProvider"
import { $ISlimeable } from "net.mehvahdjukaar.supplementaries.common.entities.ISlimeable"
import { $LivingEntityAccessor as $LivingEntityAccessor$0 } from "net.mehvahdjukaar.supplementaries.mixins.LivingEntityAccessor"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $LivingEntityInvoker } from "org.thecelestialworkshop.celestisynth.mixin.LivingEntityInvoker"
import { $CombatTracker } from "net.minecraft.world.damagesource.CombatTracker"
import { $Attackable } from "net.minecraft.world.entity.Attackable"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $AccessorLivingEntity as $AccessorLivingEntity$0 } from "net.darkhax.bookshelf.mixin.accessors.entity.AccessorLivingEntity"
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $ICitadelDataEntity } from "com.github.alexthe666.citadel.server.entity.ICitadelDataEntity"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $LivingEntityAccessor as $LivingEntityAccessor$1 } from "earth.terrarium.adastra.mixins.common.LivingEntityAccessor"
import { $LivingEntityAccessor as $LivingEntityAccessor$2 } from "net.bettercombat.mixin.LivingEntityAccessor"
import { $IGunOperator } from "com.tacz.guns.api.entity.IGunOperator"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $HumanoidArm } from "net.minecraft.world.entity.HumanoidArm"
import { $ConfigurableKnockback } from "net.bettercombat.logic.knockback.ConfigurableKnockback"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $AttributeInstance } from "net.minecraft.world.entity.ai.attributes.AttributeInstance"
import { $LivingEntityAccessor as $LivingEntityAccessor$3 } from "io.redspace.ironsspellbooks.mixin.LivingEntityAccessor"
import { $ObjectList } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $EntityPotionEffectsJS } from "dev.latvian.mods.kubejs.entity.EntityPotionEffectsJS"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $LivingEntityExtensions } from "artifacts.extensions.pocketpiston.LivingEntityExtensions"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $BlockCachingEntity } from "com.abdelaziz.canary.common.entity.pushable.BlockCachingEntity"
import { $LivingEntityAccessor as $LivingEntityAccessor$4 } from "artifacts.mixin.accessors.LivingEntityAccessor"
import { $MobEffectInstance, $MobEffectInstance$$Type } from "net.minecraft.world.effect.MobEffectInstance"
import { $ITransmogPreview } from "io.redspace.ironslib.patreon.transmog.ITransmogPreview"
import { $LivingEntityAccessor as $LivingEntityAccessor$5 } from "com.aetherteam.aether.mixin.mixins.common.accessor.LivingEntityAccessor"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $WalkAnimationState, $WalkAnimationState$$Type } from "net.minecraft.world.entity.WalkAnimationState"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Brain } from "net.minecraft.world.entity.ai.Brain"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $IArmorCapeProvider$CapeData } from "io.redspace.ironsspellbooks.item.armor.IArmorCapeProvider$CapeData"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $LivingEntity$Fallsounds } from "net.minecraft.world.entity.LivingEntity$Fallsounds"
import { $KnockBackModifier } from "com.tacz.guns.api.entity.KnockBackModifier"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $IForgeLivingEntity } from "net.minecraftforge.common.extensions.IForgeLivingEntity"
import { $TargetingConditions$$Type } from "net.minecraft.world.entity.ai.targeting.TargetingConditions"
import { $EquipmentEntity } from "com.abdelaziz.canary.common.entity.EquipmentEntity"
import { $AttributeMap } from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $AttributeSupplier$Builder } from "net.minecraft.world.entity.ai.attributes.AttributeSupplier$Builder"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $PlayerAccessor } from "uk.co.cablepost.ftech_equipment.mixin.PlayerAccessor"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $DynamicLightSource } from "toni.sodiumdynamiclights.DynamicLightSource"
import { $Optional } from "java.util.Optional"
import { $LivingEntityKJS } from "dev.latvian.mods.kubejs.core.LivingEntityKJS"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $LivingEntityAccessor as $LivingEntityAccessor$6 } from "me.kall.doespotatotick.mixin.access.LivingEntityAccessor"
import { $IProperShieldUser } from "com.aizistral.enigmaticlegacy.api.quack.IProperShieldUser"
import { $ReloadState } from "com.tacz.guns.api.entity.ReloadState"
import { $CapeData } from "io.redspace.ironslib.game.client.CapeData"
import { $MagicData } from "io.redspace.ironsspellbooks.api.magic.MagicData"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $ImmutableList } from "com.google.common.collect.ImmutableList"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $AttachmentCacheProperty, $AttachmentCacheProperty$$Type } from "com.tacz.guns.resource.modifier.AttachmentCacheProperty"
import { $LivingEntityAccessor as $LivingEntityAccessor$7 } from "vazkii.botania.mixin.LivingEntityAccessor"
import { $AccessorLivingEntity as $AccessorLivingEntity$1 } from "org.violetmoon.quark.mixin.mixins.accessor.AccessorLivingEntity"
import { $LivingAccessor } from "com.hollingsworth.arsnouveau.common.mixin.LivingAccessor"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $MagicData$IExtendedEntity } from "io.redspace.ironsspellbooks.api.magic.MagicData$IExtendedEntity"
import { $Operation$$Type } from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $MobEffect, $MobEffect$$Type } from "net.minecraft.world.effect.MobEffect"

export class $LivingEntity extends $Entity implements $Attackable, $IForgeLivingEntity, $LivingEntityInvoker, $ICapeDataProvider, $ITransmogPreview, $LivingEntityAccessor$2, $ConfigurableKnockback, $BlockCachingEntity, $EquipmentEntity, $LivingEntityAccessor$7, $LivingEntityAccessor$1, $LivingEntityAccessor$5, $ICitadelDataEntity, $AccessorLivingEntity$0, $DynamicLightSource, $LivingAccessor, $PlayerAccessor, $LivingEntityKJS, $KnockBackModifier, $IGunOperator, $LivingEntityMixin, $LivingEntityAccessor$4, $LivingEntityExtensions, $AccessorLivingEntity, $AccessorLivingEntity$1, $LivingEntityAccessor$0, $ISlimeable, $LivingEntityAccessor$3, $MagicData$IExtendedEntity, $LivingEntityAccessor$6, $IProperShieldUser, $LivingEntityAccessor {
static readonly "ARMOR_SLOTS": integer
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "DEATH_DURATION": integer
static readonly "DEFAULT_BASE_GRAVITY": double
static readonly "EQUIPMENT_SLOT_OFFSET": integer
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
static readonly "HAND_SLOTS": integer
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
static readonly "SWING_DURATION": integer
static readonly "USE_ITEM_INTERVAL": integer
readonly "activeEffects": $Map<$MobEffect, $MobEffectInstance>
readonly "invulnerableDuration": integer
readonly "rotA": float
readonly "timeOffs": float

public "addAdditionalSaveData"(compoundTag0: $CompoundTag$$Type): void
public "addEffect"(mobEffectInstance0: $MobEffectInstance$$Type): boolean
public "addEffect"(mobEffectInstance0: $MobEffectInstance$$Type, entity1: $Entity$$Type): boolean
public "aiStep"(): void
public "aim"(boolean0: boolean): void
public "alwaysAccepts"(): boolean
public static "areAllEffectsAmbient"(collection0: $Collection$$Type<$MobEffectInstance$$Type>): boolean
public "artifacts$getPocketPistonLength"(): float
public "attack"(hp: float): void
public "attackable"(): boolean
public "bolt"(): void
public "breakItem"(itemStack0: $ItemStack$$Type): void
public "broadcastBreakEvent"(interactionHand0: $InteractionHand$$Type): void
public "broadcastBreakEvent"(equipmentSlot0: $EquipmentSlot$$Type): void
public "calculateEntityAnimation"(boolean0: boolean): void
public "canAttack"(livingEntity0: $LivingEntity$$Type): boolean
public "canAttack"(livingEntity0: $LivingEntity$$Type, targetingConditions1: $TargetingConditions$$Type): boolean
public "canAttackType"(entityType0: $EntityType$$Type<any>): boolean
public "canBeAffected"(mobEffectInstance0: $MobEffectInstance$$Type): boolean
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canBeSeenAsEnemy"(): boolean
public "canBeSeenByAnyone"(): boolean
/** @deprecated */
public "canBreatheUnderwater"(): boolean
public "canDisableShield"(): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canSpawnSoulSpeedParticle"(): boolean
public "canStandOnFluid"(fluidState0: $FluidState$$Type): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canTakeItem"(itemStack0: $ItemStack$$Type): boolean
public "canaryOnBlockCacheDeleted"(): void
public "canaryOnBlockCacheSet"(blockState0: $BlockState$$Type): void
public "canaryOnEquipmentChanged"(): void
public "canarySetClimbingMobCachingSectionUpdateBehavior"(boolean0: boolean): void
public "cancelReload"(): void
public "clearSleepingPos"(): void
public "consumesAmmoOrNot"(): boolean
public "crawl"(boolean0: boolean): void
public static "createLivingAttributes"(): $AttributeSupplier$Builder
public "curePotionEffects"(itemStack0: $ItemStack$$Type): boolean
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageHeldItem"(): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "die"(damageSource0: $DamageSource$$Type): void
public "doHurtTarget"(entity0: $Entity$$Type): boolean
public "draw"(supplier0: $Supplier$$Type): void
public "eat"(level0: $Level$$Type, itemStack1: $ItemStack$$Type): $ItemStack
public "equipmentHasChanged"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "fireSelect"(): void
public "foodEaten"(is: $ItemStack$$Type): void
public "forceAddEffect"(mobEffectInstance0: $MobEffectInstance$$Type, entity1: $Entity$$Type): void
public static "fromLivingEntity"(livingEntity0: $LivingEntity$$Type): $KnockBackModifier
public "getAbsorptionAmount"(): float
public "getActiveEffects"(): $Collection<$MobEffectInstance>
public "getActiveEffectsMap"(): $Map<$MobEffect, $MobEffectInstance>
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getArmorCoverPercentage"(): float
public "getArmorValue"(): integer
public "getArrowCount"(): integer
public "getAttackAnim"(float0: float): float
public "getAttribute"(attribute0: $Attribute$$Type): $AttributeInstance
public "getAttributeBaseValue"(attribute0: $Attribute$$Type): double
public "getAttributeBaseValue"(holder0: $Holder$$Type<$Attribute$$Type>): double
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getAttributeValue"(attribute0: $Attribute$$Type): double
public "getAttributeValue"(holder0: $Holder$$Type<$Attribute$$Type>): double
public "getAttributes"(): $AttributeMap
public "getBedOrientation"(): $Direction
public "getBlock"(): $BlockContainerJS
public "getBrain"(): $Brain<any>
public "getCacheProperty"(): $AttachmentCacheProperty
public "getCachedFeetBlockState"(): $BlockState
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getCitadelEntityData"(): $CompoundTag
public "getClassification"(boolean0: boolean): $MobCategory
public "getCombatTracker"(): $CombatTracker
public "getCurrentSwingDuration"(): integer
public "getDataHolder"(): $ShooterDataHolder
public "getDefaultMovementSpeed"(): double
public "getDismountPoses"(): $ImmutableList<$Pose>
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEatingSound"(itemStack0: $ItemStack$$Type): $SoundEvent
public "getEffect"(mobEffect0: $MobEffect$$Type): $MobEffectInstance
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
public static "getEquipmentSlotForItem"(itemStack0: $ItemStack$$Type): $EquipmentSlot
public "getExperienceReward"(): integer
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFallFlyingTicks"(): integer
public "getFallSounds"(): $LivingEntity$Fallsounds
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidFallingAdjustedMovement"(double0: double, boolean1: boolean, vec32: $Vec3$$Type): $Vec3
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHealth"(): float
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getHurtDir"(): float
public "getItem"(): $ItemStack
public "getItemBySlot"(equipmentSlot0: $EquipmentSlot$$Type): $ItemStack
public "getItemInHand"(interactionHand0: $InteractionHand$$Type): $ItemStack
public "getJumpBoostPower"(): float
public "getKillCredit"(): $LivingEntity
public "getKnockBackStrength"(): double
public "getLastAttacker"(): $LivingEntity
public "getLastClimbablePos"(): $Optional<$BlockPos>
public "getLastDamageSource"(): $DamageSource
public "getLastHurtByMob"(): $LivingEntity
public "getLastHurtByMobTimestamp"(): integer
public "getLastHurtMob"(): $LivingEntity
public "getLastHurtMobTimestamp"(): integer
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getLocalBoundsForPose"(pose0: $Pose$$Type): $AABB
public "getLootTable"(): $ResourceLocation
public "getLootTableSeed"(): long
public "getMainArm"(): $HumanoidArm
public "getMainHandItem"(): $ItemStack
public "getMainHandItem"(): $ItemStack
public static "getMatched"(entity: $Entity$$Type): $ObjectList<$ResourceLocation>
public "getMaxHealth"(): float
public "getMobType"(): $MobType
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getNoActionTime"(): integer
public "getOffHandItem"(): $ItemStack
public "getOffhandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProcessedSprintStatus"(boolean0: boolean): boolean
public "getProfile"(): $GameProfile
public "getProjectile"(itemStack0: $ItemStack$$Type): $ItemStack
public "getRandom"(): $RandomSource
public "getReachDistance"(): double
public "getScale"(): float
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSleepingPos"(): $Optional<$BlockPos>
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getSpeed"(): float
public "getStepHeight"(): float
public "getStingerCount"(): integer
public "getSwimAmount"(float0: float): float
public "getSynAimingProgress"(): float
public "getSynDrawCoolDown"(): long
public "getSynIsAiming"(): boolean
public "getSynIsBolting"(): boolean
public "getSynMeleeCoolDown"(): long
public "getSynReloadState"(): $ReloadState
public "getSynShootCoolDown"(): long
public "getSynSprintTime"(): float
public "getTeamId"(): string
public "getTicksUsingItem"(): integer
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "getUseItem"(): $ItemStack
public "getUseItemRemainingTicks"(): integer
public "getUsedItemHand"(): $InteractionHand
public "getVisibilityPercent"(entity0: $Entity$$Type): double
public "getVoicePitch"(): float
public "handleRelativeFrictionAndCalculateMovement"(vec30: $Vec3$$Type, float1: float): $Vec3
public "handler$bce000$celestial_core$canBeSeenAsEnemy$hidden"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public "handler$bgc000$apoth_onEffectUpdateAddAttribute"(mobEffectInstance0: $MobEffectInstance$$Type, boolean1: boolean, entity2: $Entity$$Type, callbackInfo3: $CallbackInfo$$Type): void
public "handler$bgc000$apoth_onEffectUpdateRemoveAttribute"(mobEffectInstance0: $MobEffectInstance$$Type, boolean1: boolean, entity2: $Entity$$Type, callbackInfo3: $CallbackInfo$$Type): void
public "handler$bgc000$apoth_ownedAttrMap"(entityType0: $EntityType$$Type, level1: $Level$$Type, callbackInfo2: $CallbackInfo$$Type): void
public "handler$caa001$onTick"(ci: $CallbackInfo$$Type): void
public "handler$cbd000$getAttributeValue_Inject"(attribute: $Attribute$$Type, cir: $CallbackInfoReturnable$$Type): void
public "handler$dcf000$adastra$hurt"(source: $DamageSource$$Type, amount: float, cir: $CallbackInfoReturnable$$Type): void
public "handler$dcf000$adastra$tick"(ci: $CallbackInfo$$Type): void
public "handler$dcf000$adastra$travel"(travelVector: $Vec3$$Type, ci: $CallbackInfo$$Type): void
public "handler$ebb000$l2damagetracker$checkTotemDeathProtection$addCustomTotem"(damageSource0: $DamageSource$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type): void
public "handler$edn000$CMcanAttack"(livingEntity0: $LivingEntity$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type): void
public "handler$efc000$curio$canFreeze"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public "handler$hha000$onClimbable"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public "handler$hha000$onSetSprinting"(boolean0: boolean, callbackInfo1: $CallbackInfo$$Type): void
public "handler$hjk000$irons_spellbooks$changeSummonHurtCredit"(damageSource0: $DamageSource$$Type, float1: float, callbackInfoReturnable2: $CallbackInfoReturnable$$Type): void
public "handler$hjk000$irons_spellbooks$isCurrentlyGlowing"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public "handler$hjk000$irons_spellbooks$onEffectAdded"(mobEffectInstance0: $MobEffectInstance$$Type, entity1: $Entity$$Type, callbackInfo2: $CallbackInfo$$Type): void
public "handler$hjk000$irons_spellbooks$onEffectRemoved"(mobEffectInstance0: $MobEffectInstance$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$hjk000$irons_spellbooks$onEffectUpdated"(mobEffectInstance0: $MobEffectInstance$$Type, boolean1: boolean, entity2: $Entity$$Type, callbackInfo3: $CallbackInfo$$Type): void
public "handler$hjk000$irons_spellbooks$readDataAttachment"(compoundTag0: $CompoundTag$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$hjk000$irons_spellbooks$saveDataAttachment"(compoundTag0: $CompoundTag$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$hjk000$irons_spellbooks$updateInvisibilityStatus"(callbackInfo0: $CallbackInfo$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hasEffect"(mobEffect0: $MobEffect$$Type): boolean
public "hasItemInSlot"(equipmentSlot0: $EquipmentSlot$$Type): boolean
public "hasLineOfSight"(entity0: $Entity$$Type): boolean
public "heal"(float0: float): void
public "indicateDamage"(double0: double, double1: double): void
public "initialData"(): void
public "irons_lib$getCapeData"(): $CapeData
public "irons_lib$isTransmogPreview"(): boolean
public "irons_lib$setTransmogPreview"(boolean0: boolean): void
public "irons_spellbooks$getCapData"(): $IArmorCapeProvider$CapeData
public "irons_spellbooks$getMagicData"(): $MagicData
public "isActuallyReallyBlocking"(): boolean
public "isAffectedByPotions"(): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isAutoSpinAttack"(): boolean
public "isBaby"(): boolean
public "isBlocking"(): boolean
public "isDamageSourceBlocked"(damageSource0: $DamageSource$$Type): boolean
public "isDeadOrDying"(): boolean
public "isDynamicLightEnabled"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFallFlying"(): boolean
public "isFrame"(): boolean
public "isHolding"(item0: $Item$$Type): boolean
public "isHolding"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isInvertedHealAndHarm"(): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isSensitiveToWater"(): boolean
public "isSleeping"(): boolean
public "isSuppressingSlidingDownLadder"(): boolean
public "isUndead"(): boolean
public "isUsingItem"(): boolean
public "isWaterCreature"(): boolean
public "jumpInFluid"(fluidType0: $FluidType$$Type): void
public "knockback"(double0: double, double1: double, double2: double): void
public "localvar$cbd000$takeKnockback_HEAD_changeStrength"(knockbackStrength: double): double
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "melee"(): void
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "modifyExpressionValue$egg000$eytraValidOverride"(boolean0: boolean): boolean
public "modifyExpressionValue$egg001$elytraOverride"(boolean0: boolean): boolean
public "modifyReturnValue$bce000$celestial_core$getJumpPower"(float0: float): float
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "needCheckAmmo"(): boolean
public "nextBulletIsTracer"(int0: integer): boolean
public "onClimbable"(): boolean
public "onEffectAdded"(mobEffectInstance0: $MobEffectInstance$$Type, entity1: $Entity$$Type): void
public "onEffectRemoved"(mobEffectInstance0: $MobEffectInstance$$Type): void
public "onEffectUpdated"(mobEffectInstance0: $MobEffectInstance$$Type, boolean1: boolean, entity2: $Entity$$Type): void
public "onEnterCombat"(): void
public "onEquipItem"(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type, itemStack2: $ItemStack$$Type): void
public "onItemPickup"(itemEntity0: $ItemEntity$$Type): void
public "onLeaveCombat"(): void
public "parCool$isLivingOnCustomLadder"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "randomTeleport"(double0: double, double1: double, double2: double, boolean3: boolean): boolean
public "rarcompat$travel"(vec30: $Vec3$$Type, mob1: $Mob$$Type): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "readAdditionalSaveData"(compoundTag0: $CompoundTag$$Type): void
public "redirect$bgc000$apoth_applyArmorPen"(float0: float, float1: float, float2: float, damageSource3: $DamageSource$$Type, float4: float): float
public "redirect$bgc000$apoth_applyProtPen"(float0: float, float1: float, damageSource2: $DamageSource$$Type, float3: float): float
public "redirect$bgc000$apoth_sunderingApplyEffect"(float0: float, float1: float, damageSource2: $DamageSource$$Type, float3: float): float
public "redirect$bgc000$apoth_sunderingGetAmplifier"(mobEffectInstance0: $MobEffectInstance$$Type): integer
public "redirect$bgc000$apoth_sunderingHasEffect"(livingEntity0: $LivingEntity$$Type, mobEffect1: $MobEffect$$Type): boolean
public "releaseUsingItem"(): void
public "reload"(): void
public "removeAllEffects"(): boolean
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
public "removeEffect"(mobEffect0: $MobEffect$$Type): boolean
public "removeEffectNoUpdate"(mobEffect0: $MobEffect$$Type): $MobEffectInstance
public static "resetForwardDirectionOfRelativePortalPosition"(vec30: $Vec3$$Type): $Vec3
public "resetKnockBackStrength"(): void
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
public "sendEffectToPassengers"(mobEffectInstance0: $MobEffectInstance$$Type): void
public "serializeNBT"(): $CompoundTag
public "setAbsorptionAmount"(float0: float): void
public "setArrowCount"(int0: integer): void
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setCitadelEntityData"(compoundTag0: $CompoundTag$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setDiscardFriction"(boolean0: boolean): void
public "setDynamicLightEnabled"(boolean0: boolean): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHealth"(float0: float): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setItemInHand"(interactionHand0: $InteractionHand$$Type, itemStack1: $ItemStack$$Type): void
public "setJumping"(boolean0: boolean): void
public "setKnockBackStrength"(double0: double): void
public "setKnockbackMultiplier_BetterCombat"(value: float): void
public "setLastHurtByMob"(livingEntity0: $LivingEntity$$Type): void
public "setLastHurtByPlayer"(player0: $Player$$Type): void
public "setLastHurtMob"(entity0: $Entity$$Type): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setLivingEntityFlag"(int0: integer, boolean1: boolean): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setNoActionTime"(int0: integer): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRecordPlayingNearby"(blockPos0: $BlockPos$$Type, boolean1: boolean): void
public "setRotation"(yaw: float, pitch: float): void
public "setSleepingPos"(blockPos0: $BlockPos$$Type): void
public "setSpeed"(float0: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setStingerCount"(int0: integer): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shoot"(supplier0: $Supplier$$Type, supplier1: $Supplier$$Type, long2: long): $ShootResult
public "shoot"(supplier0: $Supplier$$Type, supplier1: $Supplier$$Type): $ShootResult
public "shouldDiscardFriction"(): boolean
public "shouldDropExperience"(): boolean
public "shouldRiderFaceForward"(player0: $Player$$Type): boolean
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "skipDropExperience"(): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "spawnItemParticles"(itemStack0: $ItemStack$$Type, int1: integer): void
public "startSleeping"(blockPos0: $BlockPos$$Type): void
public "startUsingItem"(interactionHand0: $InteractionHand$$Type): void
public "stopSleeping"(): void
public "stopUsingItem"(): void
public "supp$getSlimedTicks"(): integer
public "supp$setSlimedTicks"(newSlimedTicks: integer, sync: boolean): void
public "swing"(interactionHand0: $InteractionHand$$Type, boolean1: boolean): void
public "swing"(interactionHand0: $InteractionHand$$Type): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "take"(entity0: $Entity$$Type, int1: integer): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
public "travel"(vec30: $Vec3$$Type): void
public "updateCacheProperty"(attachmentCacheProperty0: $AttachmentCacheProperty$$Type): void
public "updatingUsingItem"(): void
public "wasExperienceConsumed"(): boolean
public "wrapOperation$ebb000$l2damagetracker$actuallyHurt$moveLivingDamagePost"(livingEntity0: $LivingEntity$$Type, damageSource1: $DamageSource$$Type, float2: float, operation3: $Operation$$Type): float
public "wrapOperation$ebb000$l2damagetracker$actuallyHurt$moveLivingDamagePre"(livingEntity0: $LivingEntity$$Type, damageSource1: $DamageSource$$Type, float2: float, operation3: $Operation$$Type): float
public "wrapOperation$fdg000$travel"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type, original: $Operation$$Type): float
public "wrapOperation$hgg000$onTravel"(instance: $LivingEntity$$Type, state: $FluidState$$Type, original: $Operation$$Type): boolean
public "zoom"(): void
get "attackAnim"(): float
set "attackAnim"(value: float)
get "attackStrengthTicker"(): integer
set "attackStrengthTicker"(value: integer)
get "dead"(): boolean
set "dead"(value: boolean)
get "deathTime"(): integer
set "deathTime"(value: integer)
get "effectsDirty"(): boolean
set "effectsDirty"(value: boolean)
get "hurtDuration"(): integer
set "hurtDuration"(value: integer)
get "hurtTime"(): integer
set "hurtTime"(value: integer)
get "jumping"(): boolean
set "jumping"(value: boolean)
get "lastDamageSource"(): $DamageSource
set "lastDamageSource"(value: $DamageSource$$Type)
get "lastDamageStamp"(): long
set "lastDamageStamp"(value: long)
get "lastHurt"(): float
set "lastHurt"(value: float)
get "lastHurtByPlayerTime"(): integer
set "lastHurtByPlayerTime"(value: integer)
get "oAttackAnim"(): float
set "oAttackAnim"(value: float)
get "removeArrowTime"(): integer
set "removeArrowTime"(value: integer)
get "removeStingerTime"(): integer
set "removeStingerTime"(value: integer)
get "swingTime"(): integer
set "swingTime"(value: integer)
get "swinging"(): boolean
set "swinging"(value: boolean)
get "swingingArm"(): $InteractionHand
set "swingingArm"(value: $InteractionHand$$Type)
get "walkAnimation"(): $WalkAnimationState
set "walkAnimation"(value: $WalkAnimationState$$Type)
get "xxa"(): float
set "xxa"(value: float)
get "yBodyRot"(): float
set "yBodyRot"(value: float)
get "yBodyRotO"(): float
set "yBodyRotO"(value: float)
get "yHeadRot"(): float
set "yHeadRot"(value: float)
get "yHeadRotO"(): float
set "yHeadRotO"(value: float)
get "yya"(): float
set "yya"(value: float)
get "zza"(): float
set "zza"(value: float)
get "absorptionAmount"(): float
get "activeEffectsMap"(): $Map<$MobEffect, $MobEffectInstance>
get "armorCoverPercentage"(): float
get "armorValue"(): integer
get "arrowCount"(): integer
get "attributes"(): $AttributeMap
get "bedOrientation"(): $Direction
get "block"(): $BlockContainerJS
get "brain"(): $Brain<any>
get "cacheProperty"(): $AttachmentCacheProperty
get "cachedFeetBlockState"(): $BlockState
get "chestArmorItem"(): $ItemStack
get "citadelEntityData"(): $CompoundTag
get "combatTracker"(): $CombatTracker
get "currentSwingDuration"(): integer
get "dataHolder"(): $ShooterDataHolder
get "defaultMovementSpeed"(): double
get "dismountPoses"(): $ImmutableList<$Pose>
get "displayName"(): $Component
get "experienceReward"(): integer
get "facing"(): $Direction
get "fallFlyingTicks"(): integer
get "fallSounds"(): $LivingEntity$Fallsounds
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "health"(): float
get "hurtDir"(): float
get "item"(): $ItemStack
get "jumpBoostPower"(): float
get "killCredit"(): $LivingEntity
get "knockBackStrength"(): double
get "lastAttacker"(): $LivingEntity
get "lastClimbablePos"(): $Optional<$BlockPos>
get "lastHurtByMob"(): $LivingEntity
get "lastHurtByMobTimestamp"(): integer
get "lastHurtMob"(): $LivingEntity
get "lastHurtMobTimestamp"(): integer
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "lootTable"(): $ResourceLocation
get "lootTableSeed"(): long
get "mainArm"(): $HumanoidArm
get "mainHandItem"(): $ItemStack
get "mainHandItem"(): $ItemStack
get "maxHealth"(): float
get "mobType"(): $MobType
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "noActionTime"(): integer
get "offHandItem"(): $ItemStack
get "offhandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "random"(): $RandomSource
get "reachDistance"(): double
get "scale"(): float
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "sleepingPos"(): $Optional<$BlockPos>
get "speed"(): float
get "stepHeight"(): float
get "stingerCount"(): integer
get "synAimingProgress"(): float
get "synDrawCoolDown"(): long
get "synIsAiming"(): boolean
get "synIsBolting"(): boolean
get "synMeleeCoolDown"(): long
get "synReloadState"(): $ReloadState
get "synShootCoolDown"(): long
get "synSprintTime"(): float
get "teamId"(): string
get "ticksUsingItem"(): integer
get "totalMovementSpeed"(): double
get "type"(): string
get "useItem"(): $ItemStack
get "useItemRemainingTicks"(): integer
get "usedItemHand"(): $InteractionHand
get "voicePitch"(): float
get "actuallyReallyBlocking"(): boolean
get "affectedByPotions"(): boolean
get "ambientCreature"(): boolean
get "animal"(): boolean
get "autoSpinAttack"(): boolean
get "baby"(): boolean
get "blocking"(): boolean
get "deadOrDying"(): boolean
get "dynamicLightEnabled"(): boolean
get "dynamicLightEnabledH"(): boolean
get "fallFlying"(): boolean
get "frame"(): boolean
get "invertedHealAndHarm"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "sensitiveToWater"(): boolean
get "sleeping"(): boolean
get "suppressingSlidingDownLadder"(): boolean
get "undead"(): boolean
get "usingItem"(): boolean
get "waterCreature"(): boolean
set "absorptionAmount"(value: float)
set "arrowCount"(value: integer)
set "chestArmorItem"(value: $ItemStack$$Type)
set "citadelEntityData"(value: $CompoundTag$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "discardFriction"(value: boolean)
set "dynamicLightEnabled"(value: boolean)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "health"(value: float)
set "hexereiDynamicLightEnabled"(value: boolean)
set "knockBackStrength"(value: double)
set "knockbackMultiplier_BetterCombat"(value: float)
set "lastHurtByMob"(value: $LivingEntity$$Type)
set "lastHurtByPlayer"(value: $Player$$Type)
set "lastHurtMob"(value: $Entity$$Type)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "noActionTime"(value: integer)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "sleepingPos"(value: $BlockPos$$Type)
set "speed"(value: float)
set "statusMessage"(value: $Component$$Type)
set "stingerCount"(value: integer)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "net.minecraft.world.entity.Targeting" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"

export interface $Targeting {
"getTarget"(): $LivingEntity
get "target"(): $LivingEntity
}

export namespace $Targeting {
const probejs$$marker: never
}
export abstract class $Targeting$$Static implements $Targeting {
}
}

declare module "net.minecraft.world.entity.Marker" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $LycheeContext, $LycheeContext$$Type } from "snownee.lychee.core.LycheeContext"
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
import { $Delay$LycheeMarker } from "snownee.lychee.core.post.Delay$LycheeMarker"
import { $ILycheeRecipe$$Type } from "snownee.lychee.core.recipe.ILycheeRecipe"
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

export class $Marker extends $Entity implements $Delay$LycheeMarker {
constructor(entityType0: $EntityType$$Type<any>, level1: $Level$$Type)

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
public "getEntity"(): $Marker
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
public "lychee$addDelay"(int0: integer): void
public "lychee$getContext"(): $LycheeContext
public "lychee$setContext"(iLycheeRecipe0: $ILycheeRecipe$$Type, lycheeContext1: $LycheeContext$$Type): void
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
get "entity"(): $Marker
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

declare module "net.minecraft.world.entity.Display$TextDisplay$CachedLine" {
import { $FormattedCharSequence, $FormattedCharSequence$$Type } from "net.minecraft.util.FormattedCharSequence"
import { $Record } from "java.lang.Record"

export class $Display$TextDisplay$CachedLine extends $Record {
constructor(formattedCharSequence0: $FormattedCharSequence$$Type, int1: integer)

public "contents"(): $FormattedCharSequence
public "width"(): integer
}
}

declare module "net.minecraft.world.entity.ReputationEventHandler" {
import { $ReputationEventType$$Type } from "net.minecraft.world.entity.ai.village.ReputationEventType"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"

export interface $ReputationEventHandler {
"onReputationEventFrom"(reputationEventType0: $ReputationEventType$$Type, entity1: $Entity$$Type): void
}

export namespace $ReputationEventHandler {
const probejs$$marker: never
}
export abstract class $ReputationEventHandler$$Static implements $ReputationEventHandler {
}
}

declare module "net.minecraft.world.entity.TraceableEntity" {
import { $Entity } from "net.minecraft.world.entity.Entity"

export interface $TraceableEntity {
"getOwner"(): $Entity
get "owner"(): $Entity
}

export namespace $TraceableEntity {
const probejs$$marker: never
}
export abstract class $TraceableEntity$$Static implements $TraceableEntity {
}
}

declare module "net.minecraft.world.entity.Display$ItemDisplay$ItemRenderState" {
import { $Record } from "java.lang.Record"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ItemDisplayContext, $ItemDisplayContext$$Type } from "net.minecraft.world.item.ItemDisplayContext"

export class $Display$ItemDisplay$ItemRenderState extends $Record {
constructor(itemStack0: $ItemStack$$Type, itemDisplayContext1: $ItemDisplayContext$$Type)

public "itemStack"(): $ItemStack
public "itemTransform"(): $ItemDisplayContext
}
}

declare module "net.minecraft.world.entity.LivingEntity$Fallsounds" {
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Record } from "java.lang.Record"

export class $LivingEntity$Fallsounds extends $Record {
constructor(small: $SoundEvent$$Type, big: $SoundEvent$$Type)

public "big"(): $SoundEvent
public "small"(): $SoundEvent
}
}

declare module "net.minecraft.world.entity.EntityType$Builder" {
import { $FeatureFlag$$Type } from "net.minecraft.world.flag.FeatureFlag"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityType$EntityFactory$$Type } from "net.minecraft.world.entity.EntityType$EntityFactory"
import { $PlayMessages$SpawnEntity$$Type } from "net.minecraftforge.network.PlayMessages$SpawnEntity"
import { $EntityType } from "net.minecraft.world.entity.EntityType"
import { $MobCategory$$Type } from "net.minecraft.world.entity.MobCategory"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $EntityType$Builder<T extends $Entity = $Entity> {
public "build"(string0: string): $EntityType<T>
public "canSpawnFarFromPlayer"(): $EntityType$Builder<T>
public "clientTrackingRange"(int0: integer): $EntityType$Builder<T>
public static "createNothing"<T extends $Entity>(mobCategory0: $MobCategory$$Type): $EntityType$Builder<T>
public "fireImmune"(): $EntityType$Builder<T>
public "immuneTo"(...block0s: $Block$$Type[]): $EntityType$Builder<T>
public "noSave"(): $EntityType$Builder<T>
public "noSummon"(): $EntityType$Builder<T>
public static "of"<T extends $Entity>(entityFactory0: $EntityType$EntityFactory$$Type<T>, mobCategory1: $MobCategory$$Type): $EntityType$Builder<T>
public "requiredFeatures"(...featureFlag0s: $FeatureFlag$$Type[]): $EntityType$Builder<T>
public "setCustomClientFactory"(biFunction0: $BiFunction$$Type<$PlayMessages$SpawnEntity$$Type, $Level$$Type, T>): $EntityType$Builder<T>
public "setShouldReceiveVelocityUpdates"(boolean0: boolean): $EntityType$Builder<T>
public "setTrackingRange"(int0: integer): $EntityType$Builder<T>
public "setUpdateInterval"(int0: integer): $EntityType$Builder<T>
public "sized"(float0: float, float1: float): $EntityType$Builder<T>
public "updateInterval"(int0: integer): $EntityType$Builder<T>
set "customClientFactory"(value: $BiFunction$$Type<$PlayMessages$SpawnEntity$$Type, $Level$$Type, T>)
set "shouldReceiveVelocityUpdates"(value: boolean)
set "trackingRange"(value: integer)
}
}

declare module "net.minecraft.world.entity.Attackable" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"

export interface $Attackable {
"getLastAttacker"(): $LivingEntity
get "lastAttacker"(): $LivingEntity
}

export namespace $Attackable {
const probejs$$marker: never
}
export abstract class $Attackable$$Static implements $Attackable {
}
}

declare module "net.minecraft.world.entity.MobType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MobType {
static readonly "ARTHROPOD": $MobType
static readonly "ILLAGER": $MobType
static readonly "UNDEAD": $MobType
static readonly "UNDEFINED": $MobType
static readonly "WATER": $MobType

constructor()

}
}

declare module "net.minecraft.world.entity.Mob" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction } from "net.minecraft.core.Direction"
import { $Item } from "net.minecraft.world.item.Item"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $KnockBackModifier } from "com.tacz.guns.api.entity.KnockBackModifier"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $IMobRememberSpawnReason } from "com.izofar.takesapillage.util.IMobRememberSpawnReason"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $JumpControl } from "net.minecraft.world.entity.ai.control.JumpControl"
import { $PathNavigation, $PathNavigation$$Type } from "net.minecraft.world.entity.ai.navigation.PathNavigation"
import { $EquipmentEntity } from "com.abdelaziz.canary.common.entity.EquipmentEntity"
import { $DifficultyInstance$$Type } from "net.minecraft.world.DifficultyInstance"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $MoveControl, $MoveControl$$Type } from "net.minecraft.world.entity.ai.control.MoveControl"
import { $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $AttributeSupplier$Builder } from "net.minecraft.world.entity.ai.attributes.AttributeSupplier$Builder"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $MobAccessorMixin } from "com.hollingsworth.arsnouveau.common.mixin.jar.MobAccessorMixin"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level } from "net.minecraft.world.level.Level"
import { $LookControl, $LookControl$$Type } from "net.minecraft.world.entity.ai.control.LookControl"
import { $SpawnGroupData, $SpawnGroupData$$Type } from "net.minecraft.world.entity.SpawnGroupData"
import { $Goal$$Type } from "net.minecraft.world.entity.ai.goal.Goal"
import { $GoalSelector } from "net.minecraft.world.entity.ai.goal.GoalSelector"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $MobSpawnType, $MobSpawnType$$Type } from "net.minecraft.world.entity.MobSpawnType"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $AccessorMob } from "net.darkhax.bookshelf.mixin.accessors.entity.AccessorMob"
import { $MobAccessor } from "vazkii.botania.mixin.MobAccessor"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $ServerLevelAccessor$$Type } from "net.minecraft.world.level.ServerLevelAccessor"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $MobAccessor as $MobAccessor$0 } from "com.hollingsworth.arsnouveau.common.mixin.MobAccessor"
import { $Sensing } from "net.minecraft.world.entity.ai.sensing.Sensing"
import { $ObjectList } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $EquipmentEntity$EquipmentTrackingEntity } from "com.abdelaziz.canary.common.entity.EquipmentEntity$EquipmentTrackingEntity"
import { $MobAccessor as $MobAccessor$1 } from "artifacts.mixin.accessors.MobAccessor"
import { $EntityPotionEffectsJS } from "dev.latvian.mods.kubejs.entity.EntityPotionEffectsJS"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $Targeting } from "net.minecraft.world.entity.Targeting"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $NavigatingEntity } from "com.abdelaziz.canary.common.entity.NavigatingEntity"
import { $ProjectileWeaponItem$$Type } from "net.minecraft.world.item.ProjectileWeaponItem"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"

export class $Mob extends $LivingEntity implements $Targeting, $NavigatingEntity, $EquipmentEntity$EquipmentTrackingEntity, $EquipmentEntity, $MobAccessor, $AccessorMob, $IMobRememberSpawnReason, $MobAccessor$0, $MobAccessorMixin, $MobAccessor$1 {
static readonly "DEFAULT_EQUIPMENT_DROP_CHANCE": float
static readonly "LEASH_TAG": string
static readonly "MAX_ENCHANTED_ARMOR_CHANCE": float
static readonly "MAX_ENCHANTED_WEAPON_CHANCE": float
static readonly "MAX_PICKUP_LOOT_CHANCE": float
static readonly "MAX_WEARING_ARMOR_CHANCE": float
static readonly "PRESERVE_ITEM_DROP_CHANCE": integer
static readonly "UPDATE_GOAL_SELECTOR_EVERY_N_TICKS": integer
readonly "goalSelector": $GoalSelector
readonly "targetSelector": $GoalSelector

public "alwaysAccepts"(): boolean
public "ate"(): void
public "attack"(hp: float): void
public "canBeLeashed"(player0: $Player$$Type): boolean
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFireProjectileWeapon"(projectileWeaponItem0: $ProjectileWeaponItem$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHoldItem"(itemStack0: $ItemStack$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canPickUpLoot"(): boolean
public "canReplaceEqualItem"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canaryOnEquipmentChanged"(): void
public static "checkMobSpawnRules"(entityType0: $EntityType$$Type<$Mob$$Type>, levelAccessor1: $LevelAccessor$$Type, mobSpawnType2: $MobSpawnType$$Type, blockPos3: $BlockPos$$Type, randomSource4: $RandomSource$$Type): boolean
public "checkSpawnObstruction"(levelReader0: $LevelReader$$Type): boolean
public "checkSpawnRules"(levelAccessor0: $LevelAccessor$$Type, mobSpawnType1: $MobSpawnType$$Type): boolean
public "clearRestriction"(): void
public "convertTo"<T extends $Mob>(entityType0: $EntityType$$Type<T>, boolean1: boolean): T
public static "createMobAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageHeldItem"(): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "dropLeash"(boolean0: boolean, boolean1: boolean): void
public "equipItemIfPossible"(itemStack0: $ItemStack$$Type): $ItemStack
/** @deprecated */
public "finalizeSpawn"(serverLevelAccessor0: $ServerLevelAccessor$$Type, difficultyInstance1: $DifficultyInstance$$Type, mobSpawnType2: $MobSpawnType$$Type, spawnGroupData3: $SpawnGroupData$$Type, compoundTag4: $CompoundTag$$Type): $SpawnGroupData
public "foodEaten"(is: $ItemStack$$Type): void
public static "fromLivingEntity"(livingEntity0: $LivingEntity$$Type): $KnockBackModifier
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAmbientSoundInterval"(): integer
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
public static "getEquipmentForSlot"(equipmentSlot0: $EquipmentSlot$$Type, int1: integer): $Item
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeadRotSpeed"(): integer
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getJumpControl"(): $JumpControl
public "getLeashHolder"(): $Entity
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getLookControl"(): $LookControl
public "getMainHandItem"(): $ItemStack
public static "getMatched"(entity: $Entity$$Type): $ObjectList<$ResourceLocation>
public "getMaxHeadXRot"(): integer
public "getMaxHeadYRot"(): integer
public "getMaxSpawnClusterSize"(): integer
public "getMeleeAttackRangeSqr"(livingEntity0: $LivingEntity$$Type): double
public "getMobSpawnType"(): $MobSpawnType
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getMoveControl"(): $MoveControl
public "getName"(): $Component
public "getNavigation"(): $PathNavigation
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPathfindingMalus"(blockPathTypes0: $BlockPathTypes$$Type): float
public "getPerceivedTargetDistanceSquareForMeleeAttack"(livingEntity0: $LivingEntity$$Type): double
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getRegisteredNavigation"(): $PathNavigation
public "getRestrictCenter"(): $BlockPos
public "getRestrictRadius"(): float
public "getScriptType"(): $ScriptType
public "getSensing"(): $Sensing
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getSpawnType"(): $MobSpawnType
public "getStepHeight"(): float
public "getTarget"(): $LivingEntity
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "handler$dcg000$adastra$checkSpawnObstruction"(levelReader: $LevelReader$$Type, cir: $CallbackInfoReturnable$$Type): void
public "handler$ibn001$getControllingPassenger"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hasRestriction"(): boolean
public "isAggressive"(): boolean
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
public "isLeashed"(): boolean
public "isLeftHanded"(): boolean
public "isLiving"(): boolean
public "isMaxGroupSizeReached"(int0: integer): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isNoAi"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPersistenceRequired"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isRegisteredToWorld"(): boolean
public "isSpawnCancelled"(): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "isWithinMeleeAttackRange"(livingEntity0: $LivingEntity$$Type): boolean
public "isWithinRestriction"(): boolean
public "isWithinRestriction"(blockPos0: $BlockPos$$Type): boolean
public "jumpInFluid"(fluidType0: $FluidType$$Type): void
public "lookAt"(entity0: $Entity$$Type, float1: float, float2: float): void
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "onPathfindingDone"(): void
public "onPathfindingStart"(): void
public "playAmbientSound"(): void
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "redirect$fph000$fixSpawnAnimX"(instance: $Mob$$Type, v: double): double
public "removeAllGoals"(predicate0: $Predicate$$Type<$Goal$$Type>): void
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
public "removeFreeWill"(): void
public "removeWhenFarAway"(double0: double): boolean
public "requiresCustomPersistence"(): boolean
public "restrictTo"(blockPos0: $BlockPos$$Type, int1: integer): void
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
public "setAggressive"(boolean0: boolean): void
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setBaby"(boolean0: boolean): void
public "setCanPickUpLoot"(boolean0: boolean): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setDelayedLeashHolderId"(int0: integer): void
public "setDropChance"(equipmentSlot0: $EquipmentSlot$$Type, float1: float): void
public "setDynamicLightEnabled"(boolean0: boolean): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setGuaranteedDrop"(equipmentSlot0: $EquipmentSlot$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLeashedTo"(entity0: $Entity$$Type, boolean1: boolean): void
public "setLeftHanded"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setNoAi"(boolean0: boolean): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPathfindingMalus"(blockPathTypes0: $BlockPathTypes$$Type, float1: float): void
public "setPersistenceRequired"(): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRegisteredToWorld"(pathNavigation0: $PathNavigation$$Type): void
public "setRotation"(yaw: float, pitch: float): void
public "setSpawnCancelled"(boolean0: boolean): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTarget"(livingEntity0: $LivingEntity$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setXxa"(float0: float): void
public "setY"(y: double): void
public "setYya"(float0: float): void
public "setZ"(z: double): void
public "setZza"(float0: float): void
public "shouldDespawnInPeaceful"(): boolean
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "spawnAnim"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
public "updateNavigationRegistration"(): void
public "wantsToPickUp"(itemStack0: $ItemStack$$Type): boolean
get "ambientSoundTime"(): integer
set "ambientSoundTime"(value: integer)
get "leashHolder"(): $Entity
set "leashHolder"(value: $Entity$$Type)
get "lookControl"(): $LookControl
set "lookControl"(value: $LookControl$$Type)
get "lootTable"(): $ResourceLocation
set "lootTable"(value: $ResourceLocation$$Type)
get "moveControl"(): $MoveControl
set "moveControl"(value: $MoveControl$$Type)
get "navigation"(): $PathNavigation
set "navigation"(value: $PathNavigation$$Type)
get "xpReward"(): integer
set "xpReward"(value: integer)
get "ambientSoundInterval"(): integer
get "block"(): $BlockContainerJS
get "cachedFeetBlockState"(): $BlockState
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "headRotSpeed"(): integer
get "item"(): $ItemStack
get "jumpControl"(): $JumpControl
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "maxHeadXRot"(): integer
get "maxHeadYRot"(): integer
get "maxSpawnClusterSize"(): integer
get "mobSpawnType"(): $MobSpawnType
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
get "registeredNavigation"(): $PathNavigation
get "restrictCenter"(): $BlockPos
get "restrictRadius"(): float
get "scriptType"(): $ScriptType
get "sensing"(): $Sensing
get "server"(): $MinecraftServer
get "spawnType"(): $MobSpawnType
get "stepHeight"(): float
get "target"(): $LivingEntity
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "aggressive"(): boolean
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabled"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "leashed"(): boolean
get "leftHanded"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "noAi"(): boolean
get "peacefulCreature"(): boolean
get "persistenceRequired"(): boolean
get "player"(): boolean
get "registeredToWorld"(): boolean
get "spawnCancelled"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
get "withinRestriction"(): boolean
set "aggressive"(value: boolean)
set "baby"(value: boolean)
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "delayedLeashHolderId"(value: integer)
set "dynamicLightEnabled"(value: boolean)
set "feetArmorItem"(value: $ItemStack$$Type)
set "guaranteedDrop"(value: $EquipmentSlot$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "leftHanded"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "noAi"(value: boolean)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "registeredToWorld"(value: $PathNavigation$$Type)
set "spawnCancelled"(value: boolean)
set "statusMessage"(value: $Component$$Type)
set "target"(value: $LivingEntity$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "xxa"(value: float)
set "y"(value: double)
set "yya"(value: float)
set "z"(value: double)
set "zza"(value: float)
}
}

declare module "net.minecraft.world.entity.PathfinderMob" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $KnockBackModifier } from "com.tacz.guns.api.entity.KnockBackModifier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $ObjectList } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $EntityPotionEffectsJS } from "dev.latvian.mods.kubejs.entity.EntityPotionEffectsJS"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level } from "net.minecraft.world.level.Level"
import { $Mob } from "net.minecraft.world.entity.Mob"

export class $PathfinderMob extends $Mob {
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
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
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
public "getWalkTargetValue"(blockPos0: $BlockPos$$Type): float
public "getWalkTargetValue"(blockPos0: $BlockPos$$Type, levelReader1: $LevelReader$$Type): float
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
public "isPathFinding"(): boolean
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
public "setDynamicLightEnabled"(boolean0: boolean): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
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
get "block"(): $BlockContainerJS
get "cachedFeetBlockState"(): $BlockState
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
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
get "pathFinding"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "dynamicLightEnabled"(value: boolean)
set "feetArmorItem"(value: $ItemStack$$Type)
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

declare module "net.minecraft.world.entity.HumanoidArm" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Enum } from "java.lang.Enum"
import { $OptionEnum } from "net.minecraft.util.OptionEnum"

export class $HumanoidArm extends $Enum<$HumanoidArm> implements $OptionEnum {
static readonly "LEFT": $HumanoidArm
static readonly "RIGHT": $HumanoidArm

public "getCaption"(): $Component
public "getId"(): integer
public "getKey"(): string
public "getOpposite"(): $HumanoidArm
public static "valueOf"(string0: string): $HumanoidArm
public static "values"(): $HumanoidArm[]
get "caption"(): $Component
get "id"(): integer
get "key"(): string
get "opposite"(): $HumanoidArm
}
}

declare module "net.minecraft.world.entity.SpawnPlacements$Type" {
import { $TriPredicate$$Type } from "net.minecraftforge.common.util.TriPredicate"
import { $IExtensibleEnum } from "net.minecraftforge.common.IExtensibleEnum"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $SpawnPlacements$Type extends $Enum<$SpawnPlacements$Type> implements $IExtensibleEnum {
static readonly "IN_LAVA": $SpawnPlacements$Type
static readonly "IN_WATER": $SpawnPlacements$Type
static readonly "NO_RESTRICTIONS": $SpawnPlacements$Type
static readonly "ON_GROUND": $SpawnPlacements$Type

public "canSpawnAt"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, entityType2: $EntityType$$Type<any>): boolean
public static "create"(string0: string, triPredicate1: $TriPredicate$$Type<$LevelReader$$Type, $BlockPos$$Type, $EntityType$$Type<$Mob$$Type>>): $SpawnPlacements$Type
public static "createCodecForExtensibleEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, E>): $Codec<E>
/** @deprecated */
public "init"(): void
public static "valueOf"(string0: string): $SpawnPlacements$Type
public static "values"(): $SpawnPlacements$Type[]
}
}

declare module "net.minecraft.world.entity.Entity$MoveFunction" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"

export interface $Entity$MoveFunction {
"accept"(entity0: $Entity$$Type, double1: double, double2: double, double3: double): void
}

export namespace $Entity$MoveFunction {
const probejs$$marker: never
}
export abstract class $Entity$MoveFunction$$Static implements $Entity$MoveFunction {
}
}

declare module "net.minecraft.world.entity.ItemSteerable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ItemSteerable {
"boost"(): boolean
}

export namespace $ItemSteerable {
const probejs$$marker: never
}
export abstract class $ItemSteerable$$Static implements $ItemSteerable {
}
}

declare module "net.minecraft.world.entity.Display$GenericInterpolator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Display$GenericInterpolator<T = any> {
"get"(float0: float): T
}

export namespace $Display$GenericInterpolator {
function constant<T>(t0: T): $Display$GenericInterpolator<T>
}
export abstract class $Display$GenericInterpolator$$Static<T = any> implements $Display$GenericInterpolator<T> {
static "constant"<T>(t0: T): $Display$GenericInterpolator<T>
}
}

declare module "net.minecraft.world.entity.Saddleable" {
import { $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"

export interface $Saddleable {
"equipSaddle"(soundSource0: $SoundSource$$Type): void
"getSaddleSoundEvent"(): $SoundEvent
"isSaddleable"(): boolean
"isSaddled"(): boolean
get "saddleSoundEvent"(): $SoundEvent
get "saddleable"(): boolean
get "saddled"(): boolean
}

export namespace $Saddleable {
const probejs$$marker: never
}
export abstract class $Saddleable$$Static implements $Saddleable {
}
}

