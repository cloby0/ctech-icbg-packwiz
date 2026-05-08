declare module "net.minecraft.client.player.AbstractClientPlayer" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AbstractClientPlayerAccessor } from "dev.engine_room.flywheel.backend.mixin.AbstractClientPlayerAccessor"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile, $GameProfile$$Type } from "com.mojang.authlib.GameProfile"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $AbstractClientPlayerAccessor as $AbstractClientPlayerAccessor$0 } from "com.gregtechceu.gtceu.core.mixins.client.AbstractClientPlayerAccessor"
import { $KnockBackModifier } from "com.tacz.guns.api.entity.KnockBackModifier"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $AnimationApplier } from "dev.kosmx.playerAnim.impl.animation.AnimationApplier"
import { $Map } from "java.util.Map"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $NotificationBuilder$$Type } from "dev.latvian.mods.kubejs.util.NotificationBuilder"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $ObjectOpenCustomHashSet } from "it.unimi.dsi.fastutil.objects.ObjectOpenCustomHashSet"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $PlayerStatsJS } from "dev.latvian.mods.kubejs.player.PlayerStatsJS"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $PlayerAttackAnimatable } from "net.bettercombat.client.animation.PlayerAttackAnimatable"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level } from "net.minecraft.world.level.Level"
import { $PlayerInfo, $PlayerInfo$$Type } from "net.minecraft.client.multiplayer.PlayerInfo"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $ClientLevel, $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"
import { $Trackable } from "dev.uncandango.alltheleaks.mixin.Trackable"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $AnimatedHand$$Type } from "net.bettercombat.logic.AnimatedHand"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $ClientPlayerKJS } from "dev.latvian.mods.kubejs.core.ClientPlayerKJS"
import { $WeakReference } from "java.lang.ref.WeakReference"
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
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $Class } from "java.lang.Class"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"

export class $AbstractClientPlayer extends $Player implements $PlayerAttackAnimatable, $AbstractClientPlayerAccessor, $ClientPlayerKJS, $AbstractClientPlayerAccessor$0 {
readonly "clientLevel": $ClientLevel

constructor(clientLevel0: $ClientLevel$$Type, gameProfile1: $GameProfile$$Type)

public "addExhaustion"(exhaustion: float): void
public "addFood"(f: integer, m: float): void
public "addItemCooldown"(item: $Item$$Type, ticks: integer): void
public "addXP"(xp: integer): void
public "addXPLevels"(l: integer): void
public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "boostElytraFlight"(): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canReach"(vec30: $Vec3$$Type, double1: double): boolean
public "canReach"(blockPos0: $BlockPos$$Type, double1: double): boolean
public "canReach"(entity0: $Entity$$Type, double1: double): boolean
public "canReachRaw"(blockPos0: $BlockPos$$Type, double1: double): boolean
public "canReachRaw"(entity0: $Entity$$Type, double1: double): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "clearNullReferences"(): void
public static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>
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
/** @deprecated */
public "getAnimation"(): $AnimationApplier
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getBlockReach"(): double
public "getCachedFeetBlockState"(): $BlockState
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getCloakTextureLocation"(): $ResourceLocation
public "getDefaultMovementSpeed"(): double
public "getDeltaMovementLerped"(float0: float): $Vec3
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getElytraTextureLocation"(): $ResourceLocation
public "getEntityReach"(): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFieldOfViewModifier"(): float
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getFoodLevel"(): integer
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public static "getMatched"(entity: $Entity$$Type): $ObjectList<$ResourceLocation>
public "getModelName"(): string
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getMouseItem"(): $ItemStack
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getOpenInventory"(): $AbstractContainerMenu
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPlayerInfo"(): $PlayerInfo
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getSaturation"(): float
public "getScriptType"(): $ScriptType
public "getSelectedSlot"(): integer
public "getServer"(): $MinecraftServer
public static "getSkinLocation"(string0: string): $ResourceLocation
public "getSkinTextureLocation"(): $ResourceLocation
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStats"(): $PlayerStatsJS
public "getStepHeight"(): float
public static "getSummary"(): $Map<$Class<any>, $Map<$Class<any>, long>>
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "getXp"(): integer
public "getXpLevel"(): integer
public "give"(item: $ItemStack$$Type): void
public "giveInHand"(item: $ItemStack$$Type): void
public "handler$gkn000$modifyFov"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isCapeLoaded"(): boolean
public "isCloseEnough"(entity0: $Entity$$Type, double1: double): boolean
public "isDynamicLightEnabled"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isElytraLoaded"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFake"(): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLeftHanded"(): boolean
public "isLiving"(): boolean
public "isMiningBlock"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isSelf"(): boolean
public "isSkinLoaded"(): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "jumpInFluid"(fluidType0: $FluidType$$Type): void
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "notify"(notification: $NotificationBuilder$$Type): void
public "notify"(title: $Component$$Type, text: $Component$$Type): void
public "paint"(tag: $CompoundTag$$Type): void
public "playAttackAnimation"(name: string, animatedHand: $AnimatedHand$$Type, length: float, upswing: float): void
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public static "registerSkinTexture"(resourceLocation0: $ResourceLocation$$Type, string1: string): void
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
public "sendData"(channel: string, data: $CompoundTag$$Type): void
public "sendData"(channel: string): void
public "sendInventoryUpdate"(): void
public "serializeNBT"(): $CompoundTag
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setDynamicLightEnabled"(boolean0: boolean): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setFoodLevel"(foodLevel: integer): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMouseItem"(item: $ItemStack$$Type): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setSaturation"(saturation: float): void
public "setSelectedSlot"(index: integer): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setXp"(xp: integer): void
public "setXpLevel"(l: integer): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public static "startTracking"(object0: any): void
public "startTracking"(): void
public "stopAttackAnimation"(length: float): void
public "supplementaries$hasQuiver"(): boolean
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
public "updateAnimationsOnTick"(): void
public "wrap"(): $WeakReference<$Trackable>
get "elytraRotX"(): float
set "elytraRotX"(value: float)
get "elytraRotY"(): float
set "elytraRotY"(value: float)
get "elytraRotZ"(): float
set "elytraRotZ"(value: float)
get "playerInfo"(): $PlayerInfo
set "playerInfo"(value: $PlayerInfo$$Type)
get "animation"(): $AnimationApplier
get "block"(): $BlockContainerJS
get "blockReach"(): double
get "cachedFeetBlockState"(): $BlockState
get "chestArmorItem"(): $ItemStack
get "cloakTextureLocation"(): $ResourceLocation
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "elytraTextureLocation"(): $ResourceLocation
get "entityReach"(): double
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "fieldOfViewModifier"(): float
get "foodLevel"(): integer
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "modelName"(): string
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "mouseItem"(): $ItemStack
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "openInventory"(): $AbstractContainerMenu
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "saturation"(): float
get "scriptType"(): $ScriptType
get "selectedSlot"(): integer
get "server"(): $MinecraftServer
get "skinTextureLocation"(): $ResourceLocation
get "stats"(): $PlayerStatsJS
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "xp"(): integer
get "xpLevel"(): integer
get "ambientCreature"(): boolean
get "animal"(): boolean
get "capeLoaded"(): boolean
get "dynamicLightEnabled"(): boolean
get "dynamicLightEnabledH"(): boolean
get "elytraLoaded"(): boolean
get "fake"(): boolean
get "frame"(): boolean
get "leftHanded"(): boolean
get "living"(): boolean
get "miningBlock"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "skinLoaded"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "dynamicLightEnabled"(value: boolean)
set "feetArmorItem"(value: $ItemStack$$Type)
set "foodLevel"(value: integer)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "mouseItem"(value: $ItemStack$$Type)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "saturation"(value: float)
set "selectedSlot"(value: integer)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "xp"(value: integer)
set "xpLevel"(value: integer)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "net.minecraft.client.player.inventory.Hotbar" {
import { $Iterator } from "java.util.Iterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $ForwardingList } from "com.google.common.collect.ForwardingList"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Comparator$$Type } from "java.util.Comparator"
import { $Spliterator } from "java.util.Spliterator"
import { $ListTag, $ListTag$$Type } from "net.minecraft.nbt.ListTag"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $Hotbar extends $ForwardingList<$ItemStack> {
constructor()

public "add"(itemStack0: $ItemStack$$Type): boolean
public "addAll"(collection0: $Collection$$Type<$ItemStack$$Type>): boolean
public "clear"(): void
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "createTag"(): $ListTag
public "forEach"(consumer0: $Consumer$$Type<$ItemStack$$Type>): void
public "fromTag"(listTag0: $ListTag$$Type): void
public "iterator"(): $Iterator<$ItemStack>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E): $List<E>
public static "of"<E>(e0: E, e1: E): $List<E>
public static "of"<E>(e0: E): $List<E>
public static "of"<E>(): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(...e0s: E[]): $List<E>
public "parallelStream"(): $Stream<$ItemStack>
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<$ItemStack$$Type>): void
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "size"(): integer
public "sort"(comparator0: $Comparator$$Type<$ItemStack$$Type>): void
public "spliterator"(): $Spliterator<$ItemStack>
public "stream"(): $Stream<$ItemStack>
public "toArray"(): any[]
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
}
}

declare module "net.minecraft.client.player.LocalPlayer" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ShootResult } from "com.tacz.guns.api.entity.ShootResult"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction } from "net.minecraft.core.Direction"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $SlotReference, $SlotReference$$Type } from "net.mehvahdjukaar.supplementaries.common.utils.SlotReference"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $KnockBackModifier } from "com.tacz.guns.api.entity.KnockBackModifier"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $AnimationApplier } from "dev.kosmx.playerAnim.impl.animation.AnimationApplier"
import { $Map } from "java.util.Map"
import { $AbstractClientPlayer } from "net.minecraft.client.player.AbstractClientPlayer"
import { $IClientPlayerGunOperator } from "com.tacz.guns.api.client.gameplay.IClientPlayerGunOperator"
import { $Input, $Input$$Type } from "net.minecraft.client.player.Input"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $NotificationBuilder$$Type } from "dev.latvian.mods.kubejs.util.NotificationBuilder"
import { $ClientRecipeBook, $ClientRecipeBook$$Type } from "net.minecraft.client.ClientRecipeBook"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $ObjectOpenCustomHashSet } from "it.unimi.dsi.fastutil.objects.ObjectOpenCustomHashSet"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $PlayerStatsJS } from "dev.latvian.mods.kubejs.player.PlayerStatsJS"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $IQuiverPlayer } from "net.mehvahdjukaar.supplementaries.common.utils.IQuiverPlayer"
import { $Level } from "net.minecraft.world.level.Level"
import { $MoverType$$Type } from "net.minecraft.world.entity.MoverType"
import { $GameType$$Type } from "net.minecraft.world.level.GameType"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"
import { $ClientPacketListener, $ClientPacketListener$$Type } from "net.minecraft.client.multiplayer.ClientPacketListener"
import { $Trackable } from "dev.uncandango.alltheleaks.mixin.Trackable"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $WeakReference } from "java.lang.ref.WeakReference"
import { $LocalPlayerDataHolder } from "com.tacz.guns.client.gameplay.LocalPlayerDataHolder"
import { $ObjectList } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $EntityPotionEffectsJS } from "dev.latvian.mods.kubejs.entity.EntityPotionEffectsJS"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $Logger } from "org.slf4j.Logger"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $PlayerRideableJumping } from "net.minecraft.world.entity.PlayerRideableJumping"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $Operation$$Type } from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $Class } from "java.lang.Class"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $StatsCounter, $StatsCounter$$Type } from "net.minecraft.stats.StatsCounter"

export class $LocalPlayer extends $AbstractClientPlayer implements $IClientPlayerGunOperator, $IQuiverPlayer {
static readonly "LOGGER": $Logger
readonly "connection": $ClientPacketListener

constructor(minecraft0: $Minecraft$$Type, clientLevel1: $ClientLevel$$Type, clientPacketListener2: $ClientPacketListener$$Type, statsCounter3: $StatsCounter$$Type, clientRecipeBook4: $ClientRecipeBook$$Type, boolean5: boolean, boolean6: boolean)

public "addExhaustion"(exhaustion: float): void
public "addFood"(f: integer, m: float): void
public "addItemCooldown"(item: $Item$$Type, ticks: integer): void
public "addXP"(xp: integer): void
public "addXPLevels"(l: integer): void
public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "boostElytraFlight"(): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canReach"(vec30: $Vec3$$Type, double1: double): boolean
public "canReach"(blockPos0: $BlockPos$$Type, double1: double): boolean
public "canReach"(entity0: $Entity$$Type, double1: double): boolean
public "canReachRaw"(blockPos0: $BlockPos$$Type, double1: double): boolean
public "canReachRaw"(entity0: $Entity$$Type, double1: double): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "clearNullReferences"(): void
public "clientSideCloseContainer"(): void
public static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageHeldItem"(): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "draw"(itemStack0: $ItemStack$$Type): void
public "drop"(boolean0: boolean): boolean
public "foodEaten"(is: $ItemStack$$Type): void
public static "fromLivingEntity"(livingEntity0: $LivingEntity$$Type): $KnockBackModifier
public static "fromLocalPlayer"(localPlayer0: $LocalPlayer$$Type): $IClientPlayerGunOperator
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
/** @deprecated */
public "getAnimation"(): $AnimationApplier
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getBlockReach"(): double
public "getCachedFeetBlockState"(): $BlockState
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getClientAimingProgress"(float0: float): float
public "getClientShootCoolDown"(): long
public "getCurrentMood"(): float
public "getDataHolder"(): $LocalPlayerDataHolder
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEntityReach"(): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getFoodLevel"(): integer
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getJumpRidingScale"(): float
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public static "getMatched"(entity: $Entity$$Type): $ObjectList<$ResourceLocation>
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getMouseItem"(): $ItemStack
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getOpenInventory"(): $AbstractContainerMenu
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPermissionLevel"(): integer
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getRecipeBook"(): $ClientRecipeBook
public "getSaturation"(): float
public "getScriptType"(): $ScriptType
public "getSelectedSlot"(): integer
public "getServer"(): $MinecraftServer
public "getServerBrand"(): string
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStats"(): $PlayerStatsJS
public "getStatsCounter"(): $StatsCounter
public "getStepHeight"(): float
public static "getSummary"(): $Map<$Class<any>, $Map<$Class<any>, long>>
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "getWaterVision"(): float
public "getXp"(): integer
public "getXpLevel"(): integer
public "give"(item: $ItemStack$$Type): void
public "giveInHand"(item: $ItemStack$$Type): void
public "handler$bki000$caelus$checkFlight"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$epl000$onRespawn"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$epl000$onTickClientSide"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$fcf000$journeymap_handleEntityEvent"(byte0: byte, callbackInfo1: $CallbackInfo$$Type): void
public "handler$hhf000$onAiStep"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$hhf000$onIsShiftKeyDown"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public "handler$hhf000$onMove"(moverType0: $MoverType$$Type, vec31: $Vec3$$Type, callbackInfo2: $CallbackInfo$$Type): void
public "handler$iik000$create$noSwimmingWithHeavyBootsOn"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hurtTo"(float0: float): void
public "inspect"(): void
public "isAim"(): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isAutoJumpEnabled"(): boolean
public "isCloseEnough"(entity0: $Entity$$Type, double1: double): boolean
public "isCrawl"(): boolean
public "isDynamicLightEnabled"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFake"(): boolean
public "isFrame"(): boolean
public "isHandsBusy"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMiningBlock"(): boolean
public "isMonster"(): boolean
public "isMovingSlowly"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isReadyToDraw"(): boolean
public "isSelf"(): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "jumpInFluid"(fluidType0: $FluidType$$Type): void
public "jumpableVehicle"(): $PlayerRideableJumping
public "localvar$bki000$caelus$affixEmptyStack"(itemStack0: $ItemStack$$Type): $ItemStack
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "modifyExpressionValue$eha002$elytraOverride"(boolean0: boolean): boolean
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "notify"(notification: $NotificationBuilder$$Type): void
public "notify"(title: $Component$$Type, text: $Component$$Type): void
public "onGameModeChanged"(gameType0: $GameType$$Type): void
public "paint"(tag: $CompoundTag$$Type): void
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
public "removeRecipeHighlight"(recipe0: $Recipe$$Type<any>): void
public "resetDraw"(): void
public "resetPos"(): void
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
public "sendData"(channel: string, data: $CompoundTag$$Type): void
public "sendData"(channel: string): void
public "sendInventoryUpdate"(): void
public "sendOpenInventory"(): void
public "serializeNBT"(): $CompoundTag
public "serverAiStep"(): void
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setDynamicLightEnabled"(boolean0: boolean): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setExperienceValues"(float0: float, int1: integer, int2: integer): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setFoodLevel"(foodLevel: integer): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMouseItem"(item: $ItemStack$$Type): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPermissionLevel"(int0: integer): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setSaturation"(saturation: float): void
public "setSelectedSlot"(index: integer): void
public "setServerBrand"(string0: string): void
public "setShowDeathScreen"(boolean0: boolean): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setXp"(xp: integer): void
public "setXpLevel"(l: integer): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shoot"(): $ShootResult
public "shouldRiderSit"(): boolean
public "shouldShowDeathScreen"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public static "startTracking"(object0: any): void
public "startTracking"(): void
public "supplementaries$getQuiverSlot"(): $SlotReference
public "supplementaries$hasQuiver"(): boolean
public "supplementaries$setQuiverSlot"(slotReference0: $SlotReference$$Type): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
public "updateSyncFields"(localPlayer0: $LocalPlayer$$Type): void
public "wrap"(): $WeakReference<$Trackable>
public "wrapOperation$epl000$swapSprintStatus"(localPlayer0: $LocalPlayer$$Type, boolean1: boolean, operation2: $Operation$$Type): void
public "wrapOperation$zpp000$suppl$preventMovementWhileOperatingCannon"(instance: $Input$$Type, isSneaking: boolean, sneakingSpeedMultiplier: float, original: $Operation$$Type): void
public "wrapWithCondition$hfi000$suppl$preventMovementWhileOperatingCannon"(instance: $Input$$Type, bl: boolean, f: float): boolean
get "handsBusy"(): boolean
set "handsBusy"(value: boolean)
get "input"(): $Input
set "input"(value: $Input$$Type)
get "oSpinningEffectIntensity"(): float
set "oSpinningEffectIntensity"(value: float)
get "spinningEffectIntensity"(): float
set "spinningEffectIntensity"(value: float)
get "waterVisionTime"(): integer
set "waterVisionTime"(value: integer)
get "xBob"(): float
set "xBob"(value: float)
get "xBobO"(): float
set "xBobO"(value: float)
get "xRotLast"(): float
set "xRotLast"(value: float)
get "yBob"(): float
set "yBob"(value: float)
get "yBobO"(): float
set "yBobO"(value: float)
get "yRotLast"(): float
set "yRotLast"(value: float)
get "animation"(): $AnimationApplier
get "block"(): $BlockContainerJS
get "blockReach"(): double
get "cachedFeetBlockState"(): $BlockState
get "chestArmorItem"(): $ItemStack
get "clientShootCoolDown"(): long
get "currentMood"(): float
get "dataHolder"(): $LocalPlayerDataHolder
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "entityReach"(): double
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "foodLevel"(): integer
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "jumpRidingScale"(): float
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "mouseItem"(): $ItemStack
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "openInventory"(): $AbstractContainerMenu
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "permissionLevel"(): integer
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "recipeBook"(): $ClientRecipeBook
get "saturation"(): float
get "scriptType"(): $ScriptType
get "selectedSlot"(): integer
get "server"(): $MinecraftServer
get "serverBrand"(): string
get "stats"(): $PlayerStatsJS
get "statsCounter"(): $StatsCounter
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "waterVision"(): float
get "xp"(): integer
get "xpLevel"(): integer
get "aim"(): boolean
get "ambientCreature"(): boolean
get "animal"(): boolean
get "autoJumpEnabled"(): boolean
get "crawl"(): boolean
get "dynamicLightEnabled"(): boolean
get "dynamicLightEnabledH"(): boolean
get "fake"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "miningBlock"(): boolean
get "monster"(): boolean
get "movingSlowly"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "readyToDraw"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "dynamicLightEnabled"(value: boolean)
set "feetArmorItem"(value: $ItemStack$$Type)
set "foodLevel"(value: integer)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "mouseItem"(value: $ItemStack$$Type)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "permissionLevel"(value: integer)
set "position"(value: $BlockContainerJS$$Type)
set "saturation"(value: float)
set "selectedSlot"(value: integer)
set "serverBrand"(value: string)
set "showDeathScreen"(value: boolean)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "xp"(value: integer)
set "xpLevel"(value: integer)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "net.minecraft.client.player.Input" {
import { $Vec2 } from "net.minecraft.world.phys.Vec2"

export class $Input {
constructor()

public "getMoveVector"(): $Vec2
public "hasForwardImpulse"(): boolean
public "tick"(boolean0: boolean, float1: float): void
get "down"(): boolean
set "down"(value: boolean)
get "forwardImpulse"(): float
set "forwardImpulse"(value: float)
get "jumping"(): boolean
set "jumping"(value: boolean)
get "left"(): boolean
set "left"(value: boolean)
get "leftImpulse"(): float
set "leftImpulse"(value: float)
get "right"(): boolean
set "right"(value: boolean)
get "shiftKeyDown"(): boolean
set "shiftKeyDown"(value: boolean)
get "up"(): boolean
set "up"(value: boolean)
get "moveVector"(): $Vec2
}
}

