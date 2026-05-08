declare module "net.minecraft.world.entity.player.PlayerModelPart" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Enum } from "java.lang.Enum"

export class $PlayerModelPart extends $Enum<$PlayerModelPart> {
static readonly "CAPE": $PlayerModelPart
static readonly "HAT": $PlayerModelPart
static readonly "JACKET": $PlayerModelPart
static readonly "LEFT_PANTS_LEG": $PlayerModelPart
static readonly "LEFT_SLEEVE": $PlayerModelPart
static readonly "RIGHT_PANTS_LEG": $PlayerModelPart
static readonly "RIGHT_SLEEVE": $PlayerModelPart

public "getBit"(): integer
public "getId"(): string
public "getMask"(): integer
public "getName"(): $Component
public static "valueOf"(string0: string): $PlayerModelPart
public static "values"(): $PlayerModelPart[]
get "bit"(): integer
get "id"(): string
get "mask"(): integer
get "name"(): $Component
}
}

declare module "net.minecraft.world.entity.player.Inventory" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Iterator$$Type } from "java.util.Iterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $StackedContents$$Type } from "net.minecraft.world.entity.player.StackedContents"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Set$$Type } from "java.util.Set"
import { $InventoryAccessor } from "vazkii.botania.mixin.InventoryAccessor"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $List, $List$$Type } from "java.util.List"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $Nameable } from "net.minecraft.world.Nameable"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $ListTag, $ListTag$$Type } from "net.minecraft.nbt.ListTag"

export class $Inventory implements $Container, $Nameable, $InventoryAccessor {
static readonly "ALL_ARMOR_SLOTS": integer[]
static readonly "HELMET_SLOT_ONLY": integer[]
static readonly "INVENTORY_SIZE": integer
static readonly "NOT_FOUND_INDEX": integer
static readonly "POP_TIME_DURATION": integer
static readonly "SLOT_OFFHAND": integer
readonly "armor": $NonNullList<$ItemStack>
readonly "compartments": $List<$NonNullList<$ItemStack>>
readonly "items": $NonNullList<$ItemStack>
readonly "offhand": $NonNullList<$ItemStack>
readonly "player": $Player

constructor(player0: $Player$$Type)

public "add"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "add"(itemStack0: $ItemStack$$Type): boolean
public "addResource"(itemStack0: $ItemStack$$Type): integer
public "addResource"(int0: integer, itemStack1: $ItemStack$$Type): integer
public "asContainer"(): $Container
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "clearContent"(): void
public "clearOrCountMatchingItems"(predicate0: $Predicate$$Type<$ItemStack$$Type>, int1: integer, container2: $Container$$Type): integer
public "contains"(itemStack0: $ItemStack$$Type): boolean
public "contains"(tagKey0: $TagKey$$Type<$Item$$Type>): boolean
public "count"(): integer
public "count"(ingredient: $Ingredient$$Type): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "dropAll"(): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "fillStackedContents"(stackedContents0: $StackedContents$$Type): void
public "find"(): integer
public "find"(ingredient: $Ingredient$$Type): integer
public "findSlotMatchingItem"(itemStack0: $ItemStack$$Type): integer
public "findSlotMatchingUnusedItem"(itemStack0: $ItemStack$$Type): integer
public "getAllItems"(): $List<$ItemStack>
public "getArmor"(int0: integer): $ItemStack
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getContainerSize"(): integer
public "getCustomName"(): $Component
public "getDestroySpeed"(blockState0: $BlockState$$Type): float
public "getDisplayName"(): $Component
public "getFreeSlot"(): integer
public "getHeight"(): integer
public "getItem"(int0: integer): $ItemStack
public "getMaxStackSize"(): integer
public "getName"(): $Component
public "getSelected"(): $ItemStack
public static "getSelectionSize"(): integer
public "getSlotLimit"(slot: integer): integer
public "getSlotWithRemainingSpace"(itemStack0: $ItemStack$$Type): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getSuitableHotbarSlot"(): integer
public "getTimesChanged"(): integer
public "getWidth"(): integer
public "handler$bgp000$celestisynth$pickSlot"(int0: integer, callbackInfo1: $CallbackInfo$$Type): void
public "handler$bgp000$celestisynth$setPickedItem"(itemStack0: $ItemStack$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$bgp000$celestisynth$swapPaint"(double0: double, callbackInfo1: $CallbackInfo$$Type): void
public "handler$fpm000$fireDropEvent"(ci: $CallbackInfo$$Type, var1: $Iterator$$Type, list: $List$$Type, i: integer): void
public "handler$fpm000$restoreNotDropped"(ci: $CallbackInfo$$Type, var1: $Iterator$$Type, list: $List$$Type, i: integer): void
public "hasAnyMatching"(predicate0: $Predicate$$Type): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasRemainingSpaceForItem"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "hurtArmor"(damageSource0: $DamageSource$$Type, float1: float, int2s: integer[]): void
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isEmpty"(): boolean
public static "isHotbarSlot"(int0: integer): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public "load"(listTag0: $ListTag$$Type): void
public "pickSlot"(int0: integer): void
public "placeItemBackInInventory"(itemStack0: $ItemStack$$Type): void
public "placeItemBackInInventory"(itemStack0: $ItemStack$$Type, boolean1: boolean): void
public "removeFromSelected"(boolean0: boolean): $ItemStack
public "removeItem"(int0: integer, int1: integer): $ItemStack
public "removeItem"(itemStack0: $ItemStack$$Type): void
public "removeItemNoUpdate"(int0: integer): $ItemStack
public "replaceWith"(inventory0: $Inventory$$Type): void
public "save"(listTag0: $ListTag$$Type): $ListTag
public "setChanged"(): void
public "setChanged"(): void
public "setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setPickedItem"(itemStack0: $ItemStack$$Type): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "startOpen"(player0: $Player$$Type): void
public "stillValid"(player0: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public "stopOpen"(player0: $Player$$Type): void
public "swapPaint"(double0: double): void
public "tick"(): void
public static "tryClear"(object0: any): void
get "selected"(): integer
set "selected"(value: integer)
get "allItems"(): $List<$ItemStack>
get "containerSize"(): integer
get "customName"(): $Component
get "displayName"(): $Component
get "freeSlot"(): integer
get "height"(): integer
get "maxStackSize"(): integer
get "name"(): $Component
get "slots"(): integer
get "suitableHotbarSlot"(): integer
get "timesChanged"(): integer
get "width"(): integer
get "empty"(): boolean
get "empty"(): boolean
get "mutable"(): boolean
set "pickedItem"(value: $ItemStack$$Type)
}
}

declare module "net.minecraft.world.entity.player.Player$BedSleepingProblem" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Enum } from "java.lang.Enum"

export class $Player$BedSleepingProblem extends $Enum<$Player$BedSleepingProblem> {
static readonly "NOT_POSSIBLE_HERE": $Player$BedSleepingProblem
static readonly "NOT_POSSIBLE_NOW": $Player$BedSleepingProblem
static readonly "NOT_SAFE": $Player$BedSleepingProblem
static readonly "OBSTRUCTED": $Player$BedSleepingProblem
static readonly "OTHER_PROBLEM": $Player$BedSleepingProblem
static readonly "TOO_FAR_AWAY": $Player$BedSleepingProblem

public "getMessage"(): $Component
public static "valueOf"(string0: string): $Player$BedSleepingProblem
public static "values"(): $Player$BedSleepingProblem[]
get "message"(): $Component
}
}

declare module "net.minecraft.world.entity.player.Abilities" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $IEntityOwned } from "dev.shadowsoffire.attributeslib.util.IEntityOwned"

export class $Abilities implements $IEntityOwned {
constructor()

public "addSaveData"(compoundTag0: $CompoundTag$$Type): void
public "getFlyingSpeed"(): float
public "getOwner"(): $LivingEntity
public "getWalkingSpeed"(): float
public "loadSaveData"(compoundTag0: $CompoundTag$$Type): void
public "setFlyingSpeed"(float0: float): void
public "setOwner"(livingEntity0: $LivingEntity$$Type): void
public "setWalkingSpeed"(float0: float): void
get "flying"(): boolean
set "flying"(value: boolean)
get "instabuild"(): boolean
set "instabuild"(value: boolean)
get "invulnerable"(): boolean
set "invulnerable"(value: boolean)
get "mayBuild"(): boolean
set "mayBuild"(value: boolean)
get "mayfly"(): boolean
set "mayfly"(value: boolean)
get "flyingSpeed"(): float
get "owner"(): $LivingEntity
get "walkingSpeed"(): float
set "flyingSpeed"(value: float)
set "owner"(value: $LivingEntity$$Type)
set "walkingSpeed"(value: float)
}
}

declare module "net.minecraft.world.entity.player.ChatVisiblity" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Enum } from "java.lang.Enum"
import { $OptionEnum } from "net.minecraft.util.OptionEnum"

export class $ChatVisiblity extends $Enum<$ChatVisiblity> implements $OptionEnum {
static readonly "FULL": $ChatVisiblity
static readonly "HIDDEN": $ChatVisiblity
static readonly "SYSTEM": $ChatVisiblity

public static "byId"(int0: integer): $ChatVisiblity
public "getCaption"(): $Component
public "getId"(): integer
public "getKey"(): string
public static "valueOf"(string0: string): $ChatVisiblity
public static "values"(): $ChatVisiblity[]
get "caption"(): $Component
get "id"(): integer
get "key"(): string
}
}

declare module "net.minecraft.world.entity.player.ProfilePublicKey" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Duration, $Duration$$Type } from "java.time.Duration"
import { $SignatureValidator, $SignatureValidator$$Type } from "net.minecraft.util.SignatureValidator"
import { $Record } from "java.lang.Record"
import { $UUID$$Type } from "java.util.UUID"
import { $ProfilePublicKey$Data, $ProfilePublicKey$Data$$Type } from "net.minecraft.world.entity.player.ProfilePublicKey$Data"

export class $ProfilePublicKey extends $Record {
static readonly "EXPIRED_PROFILE_PUBLIC_KEY": $Component
static readonly "EXPIRY_GRACE_PERIOD": $Duration
static readonly "TRUSTED_CODEC": $Codec<$ProfilePublicKey>

constructor(data0: $ProfilePublicKey$Data$$Type)

public "createSignatureValidator"(): $SignatureValidator
public static "createValidated"(signatureValidator0: $SignatureValidator$$Type, uUID1: $UUID$$Type, data2: $ProfilePublicKey$Data$$Type, duration3: $Duration$$Type): $ProfilePublicKey
public "data"(): $ProfilePublicKey$Data
}
}

declare module "net.minecraft.world.entity.player.Player" {
import { $GameProfile, $GameProfile$$Type } from "com.mojang.authlib.GameProfile"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $PlayerEntityAccessor } from "net.bettercombat.mixin.PlayerEntityAccessor"
import { $MixinAccessPlayerModelParts } from "com.samsthenerd.inline.mixin.feature.playerskins.MixinAccessPlayerModelParts"
import { $LocalRef$$Type } from "com.llamalad7.mixinextras.sugar.ref.LocalRef"
import { $IAnimation, $IAnimation$$Type } from "dev.kosmx.playerAnim.api.layered.IAnimation"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose, $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $WardenSpawnTracker } from "net.minecraft.world.entity.monster.warden.WardenSpawnTracker"
import { $Map } from "java.util.Map"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $NotificationBuilder$$Type } from "dev.latvian.mods.kubejs.util.NotificationBuilder"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $EntityPlayer_BetterCombat } from "net.bettercombat.api.EntityPlayer_BetterCombat"
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $ObjectOpenCustomHashSet } from "it.unimi.dsi.fastutil.objects.ObjectOpenCustomHashSet"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $MenuProvider$$Type } from "net.minecraft.world.MenuProvider"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $GameType$$Type } from "net.minecraft.world.level.GameType"
import { $BaseCommandBlock$$Type } from "net.minecraft.world.level.BaseCommandBlock"
import { $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $FishingHook, $FishingHook$$Type } from "net.minecraft.world.entity.projectile.FishingHook"
import { $PlayerAttackProperties } from "net.bettercombat.logic.PlayerAttackProperties"
import { $FoodData } from "net.minecraft.world.food.FoodData"
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $HumanoidArm$$Type } from "net.minecraft.world.entity.HumanoidArm"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $KubeJSInventoryListener } from "dev.latvian.mods.kubejs.player.KubeJSInventoryListener"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $Container$$Type } from "net.minecraft.world.Container"
import { $ObjectList } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $PlayerMixinSupport } from "org.thecelestialworkshop.celestisynth.api.mixin.PlayerMixinSupport"
import { $ClickAction$$Type } from "net.minecraft.world.inventory.ClickAction"
import { $EntityPotionEffectsJS } from "dev.latvian.mods.kubejs.entity.EntityPotionEffectsJS"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Abilities } from "net.minecraft.world.entity.player.Abilities"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $EntityDimensions, $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $IQuiverEntity } from "net.mehvahdjukaar.supplementaries.api.IQuiverEntity"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Either } from "com.mojang.datafixers.util.Either"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $MerchantOffers$$Type } from "net.minecraft.world.item.trading.MerchantOffers"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $IForgePlayer } from "net.minecraftforge.common.extensions.IForgePlayer"
import { $ISupportTransmog } from "io.redspace.ironslib.game.client.ISupportTransmog"
import { $Inventory } from "net.minecraft.world.entity.player.Inventory"
import { $KnockBackModifier } from "com.tacz.guns.api.entity.KnockBackModifier"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $Player$BedSleepingProblem } from "net.minecraft.world.entity.player.Player$BedSleepingProblem"
import { $AnimationApplier } from "dev.kosmx.playerAnim.impl.animation.AnimationApplier"
import { $IFlying } from "dev.shadowsoffire.attributeslib.util.IFlying"
import { $JigsawBlockEntity$$Type } from "net.minecraft.world.level.block.entity.JigsawBlockEntity"
import { $Stat$$Type } from "net.minecraft.stats.Stat"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $InventoryKJS } from "dev.latvian.mods.kubejs.core.InventoryKJS"
import { $InventoryMenu, $InventoryMenu$$Type } from "net.minecraft.world.inventory.InventoryMenu"
import { $AttributeSupplier$Builder } from "net.minecraft.world.entity.ai.attributes.AttributeSupplier$Builder"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $ItemCooldowns } from "net.minecraft.world.item.ItemCooldowns"
import { $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemEntity } from "net.minecraft.world.entity.item.ItemEntity"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $DynamicLightSource } from "toni.sodiumdynamiclights.DynamicLightSource"
import { $PlayerStatsJS } from "dev.latvian.mods.kubejs.player.PlayerStatsJS"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $PlayerAccessor } from "io.redspace.ironslib.mixin.PlayerAccessor"
import { $PlayerEnderChestContainer } from "net.minecraft.world.inventory.PlayerEnderChestContainer"
import { $Unit } from "net.minecraft.util.Unit"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $OptionalInt } from "java.util.OptionalInt"
import { $Trackable } from "dev.uncandango.alltheleaks.mixin.Trackable"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $PlayerKJS } from "dev.latvian.mods.kubejs.core.PlayerKJS"
import { $WeakReference } from "java.lang.ref.WeakReference"
import { $SignBlockEntity$$Type } from "net.minecraft.world.level.block.entity.SignBlockEntity"
import { $PlayerModelPart$$Type } from "net.minecraft.world.entity.player.PlayerModelPart"
import { $PlayerAccessor as $PlayerAccessor$0 } from "com.aetherteam.aether.mixin.mixins.common.accessor.PlayerAccessor"
import { $AttachedData } from "dev.latvian.mods.kubejs.util.AttachedData"
import { $AnimationStack } from "dev.kosmx.playerAnim.api.layered.AnimationStack"
import { $IAnimatedPlayer } from "dev.kosmx.playerAnim.impl.IAnimatedPlayer"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $GlobalPos, $GlobalPos$$Type } from "net.minecraft.core.GlobalPos"
import { $StructureBlockEntity$$Type } from "net.minecraft.world.level.block.entity.StructureBlockEntity"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $Scoreboard } from "net.minecraft.world.scores.Scoreboard"
import { $Stages } from "dev.latvian.mods.kubejs.stages.Stages"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $PlayerAccess } from "vazkii.botania.common.PlayerAccess"
import { $Operation$$Type } from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import { $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $CommandBlockEntity$$Type } from "net.minecraft.world.level.block.entity.CommandBlockEntity"
import { $AttackHand } from "net.bettercombat.api.AttackHand"
import { $AbstractHorse$$Type } from "net.minecraft.world.entity.animal.horse.AbstractHorse"
import { $Class } from "java.lang.Class"
import { $LocalBooleanRef$$Type } from "com.llamalad7.mixinextras.sugar.ref.LocalBooleanRef"

export class $Player extends $LivingEntity implements $IForgePlayer, $IAnimatedPlayer, $IFlying, $PlayerMixinSupport, $PlayerAccessor, $ISupportTransmog, $PlayerEntityAccessor, $PlayerAttackProperties, $EntityPlayer_BetterCombat, $Trackable, $PlayerAccess, $PlayerAccessor$0, $DynamicLightSource, $IQuiverEntity, $MixinAccessPlayerModelParts, $PlayerKJS {
static readonly "CROUCH_BB_HEIGHT": float
static readonly "DEFAULT_EYE_HEIGHT": float
static readonly "ENDER_SLOT_OFFSET": integer
static readonly "MAX_HEALTH": integer
static readonly "MAX_NAME_LENGTH": integer
static readonly "PERSISTED_NBT_TAG": string
static readonly "SLEEP_DURATION": integer
static readonly "STANDING_DIMENSIONS": $EntityDimensions
static readonly "SWIMMING_BB_HEIGHT": float
static readonly "SWIMMING_BB_WIDTH": float
static readonly "WAKE_UP_DURATION": integer
readonly "abilities": $Abilities
readonly "inventory": $Inventory

constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, float2: float, gameProfile3: $GameProfile$$Type)

public "addExhaustion"(exhaustion: float): void
public "addFood"(f: integer, m: float): void
public "addItem"(itemStack0: $ItemStack$$Type): boolean
public "addItemCooldown"(item: $Item$$Type, ticks: integer): void
public "addXP"(xp: integer): void
public "addXPLevels"(l: integer): void
public "alwaysAccepts"(): boolean
public "atl$getBaseClass"(): $Class
public "attack"(entity0: $Entity$$Type): void
public "attack"(hp: float): void
public "awardRecipes"(collection0: $Collection$$Type<$Recipe$$Type<any>>): integer
public "awardRecipesByKey"(resourceLocation0s: $ResourceLocation$$Type[]): void
public "awardStat"(resourceLocation0: $ResourceLocation$$Type): void
public "awardStat"(stat0: $Stat$$Type<any>): void
public "awardStat"(resourceLocation0: $ResourceLocation$$Type, int1: integer): void
public "awardStat"(stat0: $Stat$$Type<any>, int1: integer): void
public "blockActionRestricted"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, gameType2: $GameType$$Type): boolean
public "boostElytraFlight"(): void
public "botania$setCritTarget"(livingEntity0: $LivingEntity$$Type): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEat"(boolean0: boolean): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHarmPlayer"(player0: $Player$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canReach"(vec30: $Vec3$$Type, double1: double): boolean
public "canReach"(blockPos0: $BlockPos$$Type, double1: double): boolean
public "canReach"(entity0: $Entity$$Type, double1: double): boolean
public "canReachRaw"(blockPos0: $BlockPos$$Type, double1: double): boolean
public "canReachRaw"(entity0: $Entity$$Type, double1: double): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canUseGameMasterBlocks"(): boolean
public "causeFoodExhaustion"(float0: float): void
public "checkMovementStatistics"(double0: double, double1: double, double2: double): void
public static "clearNullReferences"(): void
public "closeMenu"(): void
public static "createAttributes"(): $AttributeSupplier$Builder
public static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>
public "crit"(entity0: $Entity$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageHeldItem"(): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "disableShield"(boolean0: boolean): void
public "displayClientMessage"(component0: $Component$$Type, boolean1: boolean): void
public "drop"(itemStack0: $ItemStack$$Type, boolean1: boolean): $ItemEntity
public "drop"(itemStack0: $ItemStack$$Type, boolean1: boolean, boolean2: boolean): $ItemEntity
public static "findRespawnPositionAndUseSpawnBlock"(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type, float2: float, boolean3: boolean, boolean4: boolean): $Optional<$Vec3>
public "foodEaten"(is: $ItemStack$$Type): void
public static "fromLivingEntity"(livingEntity0: $LivingEntity$$Type): $KnockBackModifier
public "getAbilities"(): $Abilities
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAndDestroyFlyingCache"(): boolean
/** @deprecated */
public "getAnimation"(): $AnimationApplier
public "getAnimationStack"(): $AnimationStack
public "getAttackStrengthScale"(float0: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getBlockReach"(): double
public "getCachedFeetBlockState"(): $BlockState
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChantColor"(): integer
public "getChantMark"(): integer
public "getChantMessage"(): string
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getComboCount"(): integer
public "getCooldowns"(): $ItemCooldowns
public "getCraftingGrid"(): $InventoryKJS
public "getCurrentAttack"(): $AttackHand
public "getCurrentItemAttackStrengthDelay"(): float
public "getData"(): $AttachedData
public "getDefaultMovementSpeed"(): double
/** @deprecated */
public "getDestroySpeed"(blockState0: $BlockState$$Type): float
public "getDigSpeed"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type): float
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEnchantmentSeed"(): integer
public "getEnderChestInventory"(): $PlayerEnderChestContainer
public "getEntityReach"(): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getFoodData"(): $FoodData
public "getFoodLevel"(): integer
public "getForcedPose"(): $Pose
public "getGameProfile"(): $GameProfile
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getInventory"(): $InventoryKJS
public "getInventory"(): $Inventory
public "getInventoryChangeListener"(): $KubeJSInventoryListener
public "getItem"(): $ItemStack
public "getLastDeathLocation"(): $Optional<$GlobalPos>
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getLuck"(): float
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
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getPrefixes"(): $Collection<$MutableComponent>
public "getProfile"(): $GameProfile
public "getPulseScale"(): integer
public "getPulseTimeSpeed"(): integer
public "getReachDistance"(): double
public "getSaturation"(): float
public "getScore"(): integer
public "getScoreboard"(): $Scoreboard
public "getScreenShakeDuration"(): integer
public "getScreenShakeFadeoutBegin"(): integer
public "getScreenShakeIntensity"(): float
public "getScriptType"(): $ScriptType
public "getSelectedSlot"(): integer
public "getServer"(): $MinecraftServer
public "getShoulderEntityLeft"(): $CompoundTag
public "getShoulderEntityRight"(): $CompoundTag
public "getSleepTimer"(): integer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStages"(): $Stages
public "getStandingEyeHeight"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getStats"(): $PlayerStatsJS
public "getStepHeight"(): float
public "getSuffixes"(): $Collection<$MutableComponent>
public static "getSummary"(): $Map<$Class<any>, $Map<$Class<any>, long>>
public "getTeamId"(): string
public "getTexturePulseImage"(): string
public "getTexturePulseMark"(): integer
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "getWardenSpawnTracker"(): $Optional<$WardenSpawnTracker>
public "getXp"(): integer
public "getXpLevel"(): integer
public "getXpNeededForNextLevel"(): integer
public "give"(item: $ItemStack$$Type): void
public "giveExperienceLevels"(int0: integer): void
public "giveExperiencePoints"(int0: integer): void
public "giveInHand"(item: $ItemStack$$Type): void
public "handler$bge000$apoth_cacheFlying"(compoundTag0: $CompoundTag$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$bge000$apoth_ownedAbilities"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, float2: float, gameProfile3: $GameProfile$$Type, callbackInfo4: $CallbackInfo$$Type): void
public "handler$bhc000$celestisynth$attack"(entity0: $Entity$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$bhc000$celestisynth$tick"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$cbe000$getEquippedStack_Pre"(slot: $EquipmentSlot$$Type, cir: $CallbackInfoReturnable$$Type): void
public "handler$cbe000$post_Tick"(ci: $CallbackInfo$$Type): void
public "handler$ebc000$l2damagetracker$attack$allowSweep"(entity0: $Entity$$Type, callbackInfo1: $CallbackInfo$$Type, localBooleanRef2: $LocalBooleanRef$$Type): void
public "handler$ebc000$l2damagetracker$attack$critParticle"(entity0: $Entity$$Type, callbackInfo1: $CallbackInfo$$Type, localBooleanRef2: $LocalBooleanRef$$Type, localRef3: $LocalRef$$Type): void
public "handler$hhb000$getDimensions"(pose0: $Pose$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type): void
public "handler$hhb000$getStandingEyeHeight"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type, callbackInfoReturnable2: $CallbackInfoReturnable$$Type): void
public "handler$hhb000$onIsStayingOnGroundSurface"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public "handler$hhb000$onJumpFromGround"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$hhb000$onTryToStartFallFlying"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public "hasContainerOpen"(): boolean
public "hasCorrectToolForDrops"(blockState0: $BlockState$$Type): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "increaseScore"(int0: integer): void
public "interactOn"(entity0: $Entity$$Type, interactionHand1: $InteractionHand$$Type): $InteractionResult
public "irons_lib$getArmorBySlotRaw"(equipmentSlot0: $EquipmentSlot$$Type): $ItemStack
public "isAffectedByFluids"(): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isCloseEnough"(entity0: $Entity$$Type, double1: double): boolean
public "isCreative"(): boolean
public "isDynamicLightEnabled"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFake"(): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
public "isHurt"(): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isLocalPlayer"(): boolean
public "isMiningBlock"(): boolean
public "isModelPartShown"(playerModelPart0: $PlayerModelPart$$Type): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isReducedDebugInfo"(): boolean
public "isScoping"(): boolean
public "isSecondaryUseActive"(): boolean
public "isSleepingLongEnough"(): boolean
public "isTextFilteringEnabled"(): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "jumpFromGround"(): void
public "jumpInFluid"(fluidType0: $FluidType$$Type): void
public "magicCrit"(entity0: $Entity$$Type): void
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "markFlying"(): void
public "mayBuild"(): boolean
public "mayUseItemAt"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, itemStack2: $ItemStack$$Type): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modify$cbe000$getHand"(hand: $InteractionHand$$Type): $InteractionHand
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "modifyExpressionValue$egf000$elytraOverride"(boolean0: boolean): boolean
public "modifyReturnValue$zpi000$vista$modifyIsScoping"(original: boolean): boolean
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "notify"(builder: $NotificationBuilder$$Type): void
public "notify"(title: $Component$$Type, text: $Component$$Type): void
public "onEnchantmentPerformed"(itemStack0: $ItemStack$$Type, int1: integer): void
public "onUpdateAbilities"(): void
public "openCommandBlock"(commandBlockEntity0: $CommandBlockEntity$$Type): void
public "openHorseInventory"(abstractHorse0: $AbstractHorse$$Type, container1: $Container$$Type): void
public "openItemGui"(itemStack0: $ItemStack$$Type, interactionHand1: $InteractionHand$$Type): void
public "openJigsawBlock"(jigsawBlockEntity0: $JigsawBlockEntity$$Type): void
public "openMenu"(menuProvider0: $MenuProvider$$Type): $OptionalInt
public "openMinecartCommandBlock"(baseCommandBlock0: $BaseCommandBlock$$Type): void
public "openStructureBlock"(structureBlockEntity0: $StructureBlockEntity$$Type): void
public "openTextEdit"(signBlockEntity0: $SignBlockEntity$$Type, boolean1: boolean): void
public "paint"(renderer: $CompoundTag$$Type): void
public "playNotifySound"(soundEvent0: $SoundEvent$$Type, soundSource1: $SoundSource$$Type, float2: float, float3: float): void
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "playerAnimator_getAnimation"(id: $ResourceLocation$$Type): $IAnimation
public "playerAnimator_getAnimation"(): $AnimationApplier
public "playerAnimator_setAnimation"(id: $ResourceLocation$$Type, animation: $IAnimation$$Type): $IAnimation
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "redirect$cbe000$getMainHandStack_Redirect"(instance: $Player$$Type): $ItemStack
public "redirect$cbe000$setStackInHand_Redirect"(instance: $Player$$Type, handArg: $InteractionHand$$Type, itemStack: $ItemStack$$Type): void
public "refreshDisplayName"(): void
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
public "resetAttackStrengthTicker"(): void
public "resetRecipes"(collection0: $Collection$$Type<$Recipe$$Type<any>>): integer
public "resetStat"(stat0: $Stat$$Type<any>): void
public "respawn"(): void
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
public "sendMerchantOffers"(int0: integer, merchantOffers1: $MerchantOffers$$Type, int2: integer, int3: integer, boolean4: boolean, boolean5: boolean): void
public "serializeNBT"(): $CompoundTag
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChantColor"(int0: integer): void
public "setChantMark"(int0: integer): void
public "setChantMessage"(string0: string): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setComboCount"(comboCount: integer): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setDynamicLightEnabled"(boolean0: boolean): void
public "setEntityOnShoulder"(compoundTag0: $CompoundTag$$Type): boolean
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setFoodLevel"(foodLevel: integer): void
public "setForcedPose"(pose0: $Pose$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLastDeathLocation"(optional0: $Optional$$Type<$GlobalPos$$Type>): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainArm"(humanoidArm0: $HumanoidArm$$Type): void
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
public "setPulseScale"(int0: integer): void
public "setPulseTimeSpeed"(int0: integer): void
public "setReducedDebugInfo"(boolean0: boolean): void
public "setRotation"(yaw: float, pitch: float): void
public "setSaturation"(saturation: float): void
public "setScore"(int0: integer): void
public "setScreenShakeDuration"(int0: integer): void
public "setScreenShakeFadeoutBegin"(int0: integer): void
public "setScreenShakeIntensity"(float0: float): void
public "setSelectedSlot"(index: integer): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTexturePulseImage"(string0: string): void
public "setTexturePulseMark"(int0: integer): void
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
public "startAutoSpinAttack"(int0: integer): void
public "startFallFlying"(): void
public "startSleepInBed"(blockPos0: $BlockPos$$Type): $Either<$Player$BedSleepingProblem, $Unit>
public static "startTracking"(object0: any): void
public "startTracking"(): void
public "stopFallFlying"(): void
public "stopSleepInBed"(boolean0: boolean, boolean1: boolean): void
public "supplementaries$getQuiver"(): $ItemStack
public "supplementaries$hasQuiver"(): boolean
public "supplementaries$setQuiver"(quiver: $ItemStack$$Type): void
public "sweepAttack"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
public "triggerRecipeCrafted"(recipe0: $Recipe$$Type<any>, list1: $List$$Type<$ItemStack$$Type>): void
public "tryToStartFallFlying"(): boolean
public "updateTutorialInventoryAction"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, clickAction2: $ClickAction$$Type): void
public "wrap"(): $WeakReference<$Trackable>
public "wrapOperation$ebc000$l2damagetracker$actuallyHurt$moveLivingDamagePre"(player0: $Player$$Type, damageSource1: $DamageSource$$Type, float2: float, operation3: $Operation$$Type): float
public "wrapOperation$ebc001$l2damagetracker$actuallyHurt$moveLivingDamagePost"(livingEntity0: $LivingEntity$$Type, damageSource1: $DamageSource$$Type, float2: float, operation3: $Operation$$Type): float
get "bob"(): float
set "bob"(value: float)
get "containerMenu"(): $AbstractContainerMenu
set "containerMenu"(value: $AbstractContainerMenu$$Type)
get "experienceLevel"(): integer
set "experienceLevel"(value: integer)
get "experienceProgress"(): float
set "experienceProgress"(value: float)
get "fishing"(): $FishingHook
set "fishing"(value: $FishingHook$$Type)
get "hurtDir"(): float
set "hurtDir"(value: float)
get "inventoryMenu"(): $InventoryMenu
set "inventoryMenu"(value: $InventoryMenu$$Type)
get "oBob"(): float
set "oBob"(value: float)
get "sleepCounter"(): integer
set "sleepCounter"(value: integer)
get "takeXpDelay"(): integer
set "takeXpDelay"(value: integer)
get "totalExperience"(): integer
set "totalExperience"(value: integer)
get "xCloak"(): double
set "xCloak"(value: double)
get "xCloakO"(): double
set "xCloakO"(value: double)
get "yCloak"(): double
set "yCloak"(value: double)
get "yCloakO"(): double
set "yCloakO"(value: double)
get "zCloak"(): double
set "zCloak"(value: double)
get "zCloakO"(): double
set "zCloakO"(value: double)
get "andDestroyFlyingCache"(): boolean
get "animation"(): $AnimationApplier
get "animationStack"(): $AnimationStack
get "block"(): $BlockContainerJS
get "blockReach"(): double
get "cachedFeetBlockState"(): $BlockState
get "chantColor"(): integer
get "chantMark"(): integer
get "chantMessage"(): string
get "chestArmorItem"(): $ItemStack
get "comboCount"(): integer
get "cooldowns"(): $ItemCooldowns
get "craftingGrid"(): $InventoryKJS
get "currentAttack"(): $AttackHand
get "currentItemAttackStrengthDelay"(): float
get "data"(): $AttachedData
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "enchantmentSeed"(): integer
get "enderChestInventory"(): $PlayerEnderChestContainer
get "entityReach"(): double
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "foodData"(): $FoodData
get "foodLevel"(): integer
get "forcedPose"(): $Pose
get "gameProfile"(): $GameProfile
get "headArmorItem"(): $ItemStack
get "inventoryChangeListener"(): $KubeJSInventoryListener
get "item"(): $ItemStack
get "lastDeathLocation"(): $Optional<$GlobalPos>
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "luck"(): float
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
get "potionEffects"(): $EntityPotionEffectsJS
get "prefixes"(): $Collection<$MutableComponent>
get "profile"(): $GameProfile
get "pulseScale"(): integer
get "pulseTimeSpeed"(): integer
get "reachDistance"(): double
get "saturation"(): float
get "score"(): integer
get "scoreboard"(): $Scoreboard
get "screenShakeDuration"(): integer
get "screenShakeFadeoutBegin"(): integer
get "screenShakeIntensity"(): float
get "scriptType"(): $ScriptType
get "selectedSlot"(): integer
get "server"(): $MinecraftServer
get "shoulderEntityLeft"(): $CompoundTag
get "shoulderEntityRight"(): $CompoundTag
get "sleepTimer"(): integer
get "stages"(): $Stages
get "stats"(): $PlayerStatsJS
get "stepHeight"(): float
get "suffixes"(): $Collection<$MutableComponent>
get "teamId"(): string
get "texturePulseImage"(): string
get "texturePulseMark"(): integer
get "totalMovementSpeed"(): double
get "type"(): string
get "wardenSpawnTracker"(): $Optional<$WardenSpawnTracker>
get "xp"(): integer
get "xpLevel"(): integer
get "xpNeededForNextLevel"(): integer
get "affectedByFluids"(): boolean
get "ambientCreature"(): boolean
get "animal"(): boolean
get "creative"(): boolean
get "dynamicLightEnabled"(): boolean
get "dynamicLightEnabledH"(): boolean
get "fake"(): boolean
get "frame"(): boolean
get "hurt"(): boolean
get "living"(): boolean
get "localPlayer"(): boolean
get "miningBlock"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "reducedDebugInfo"(): boolean
get "scoping"(): boolean
get "secondaryUseActive"(): boolean
get "sleepingLongEnough"(): boolean
get "textFilteringEnabled"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chantColor"(value: integer)
set "chantMark"(value: integer)
set "chantMessage"(value: string)
set "chestArmorItem"(value: $ItemStack$$Type)
set "comboCount"(value: integer)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "dynamicLightEnabled"(value: boolean)
set "entityOnShoulder"(value: $CompoundTag$$Type)
set "feetArmorItem"(value: $ItemStack$$Type)
set "foodLevel"(value: integer)
set "forcedPose"(value: $Pose$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "lastDeathLocation"(value: $Optional$$Type<$GlobalPos$$Type>)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainArm"(value: $HumanoidArm$$Type)
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
set "pulseScale"(value: integer)
set "pulseTimeSpeed"(value: integer)
set "reducedDebugInfo"(value: boolean)
set "saturation"(value: float)
set "score"(value: integer)
set "screenShakeDuration"(value: integer)
set "screenShakeFadeoutBegin"(value: integer)
set "screenShakeIntensity"(value: float)
set "selectedSlot"(value: integer)
set "statusMessage"(value: $Component$$Type)
set "texturePulseImage"(value: string)
set "texturePulseMark"(value: integer)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "xp"(value: integer)
set "xpLevel"(value: integer)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "net.minecraft.world.entity.player.ProfileKeyPair" {
import { $ProfilePublicKey, $ProfilePublicKey$$Type } from "net.minecraft.world.entity.player.ProfilePublicKey"
import { $Codec } from "com.mojang.serialization.Codec"
import { $PrivateKey, $PrivateKey$$Type } from "java.security.PrivateKey"
import { $Record } from "java.lang.Record"
import { $Instant, $Instant$$Type } from "java.time.Instant"

export class $ProfileKeyPair extends $Record {
static readonly "CODEC": $Codec<$ProfileKeyPair>

constructor(privateKey0: $PrivateKey$$Type, profilePublicKey1: $ProfilePublicKey$$Type, instant2: $Instant$$Type)

public "dueRefresh"(): boolean
public "privateKey"(): $PrivateKey
public "publicKey"(): $ProfilePublicKey
public "refreshedAfter"(): $Instant
}
}

declare module "net.minecraft.world.entity.player.StackedContents" {
import { $IntList$$Type } from "it.unimi.dsi.fastutil.ints.IntList"
import { $Int2IntMap } from "it.unimi.dsi.fastutil.ints.Int2IntMap"
import { $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $StackedContents {
readonly "contents": $Int2IntMap

constructor()

public "accountSimpleStack"(itemStack0: $ItemStack$$Type): void
public "accountStack"(itemStack0: $ItemStack$$Type, int1: integer): void
public "accountStack"(itemStack0: $ItemStack$$Type): void
public "canCraft"(recipe0: $Recipe$$Type<any>, intList1: $IntList$$Type): boolean
public "canCraft"(recipe0: $Recipe$$Type<any>, intList1: $IntList$$Type, int2: integer): boolean
public "clear"(): void
public static "fromStackingIndex"(int0: integer): $ItemStack
public "getBiggestCraftableStack"(recipe0: $Recipe$$Type<any>, intList1: $IntList$$Type): integer
public "getBiggestCraftableStack"(recipe0: $Recipe$$Type<any>, int1: integer, intList2: $IntList$$Type): integer
public static "getStackingIndex"(itemStack0: $ItemStack$$Type): integer
}
}

declare module "net.minecraft.world.entity.player.ProfilePublicKey$Data" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Duration$$Type } from "java.time.Duration"
import { $PublicKey, $PublicKey$$Type } from "java.security.PublicKey"
import { $Record } from "java.lang.Record"
import { $Instant, $Instant$$Type } from "java.time.Instant"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ProfilePublicKey$Data extends $Record {
static readonly "CODEC": $Codec<$ProfilePublicKey$Data>

constructor(instant0: $Instant$$Type, publicKey1: $PublicKey$$Type, byte2s: byte[])
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "expiresAt"(): $Instant
public "hasExpired"(duration0: $Duration$$Type): boolean
public "hasExpired"(): boolean
public "key"(): $PublicKey
public "keySignature"(): byte[]
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
}
}

