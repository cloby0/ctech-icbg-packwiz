declare module "com.tacz.guns.resource.pojo.data.gun.Ignite" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Ignite {
constructor(boolean0: boolean)
constructor(boolean0: boolean, boolean1: boolean)

public "isIgniteBlock"(): boolean
public "isIgniteEntity"(): boolean
get "igniteBlock"(): boolean
get "igniteEntity"(): boolean
}
}

declare module "com.tacz.guns.resource.pojo.data.gun.BurstData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BurstData {
constructor()

public "getBpm"(): integer
public "getCount"(): integer
public "getMinInterval"(): double
public "isContinuousShoot"(): boolean
get "bpm"(): integer
get "count"(): integer
get "minInterval"(): double
get "continuousShoot"(): boolean
}
}

declare module "com.tacz.guns.api.item.IAttachment" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AttachmentType } from "com.tacz.guns.api.item.attachment.AttachmentType"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $IAttachment {
"getAttachmentId"(itemStack0: $ItemStack$$Type): $ResourceLocation
"getLaserColor"(itemStack0: $ItemStack$$Type): integer
/** @deprecated */
"getSkinId"(itemStack0: $ItemStack$$Type): $ResourceLocation
"getType"(itemStack0: $ItemStack$$Type): $AttachmentType
"getZoomNumber"(itemStack0: $ItemStack$$Type): integer
"hasCustomLaserColor"(itemStack0: $ItemStack$$Type): boolean
"setAttachmentId"(itemStack0: $ItemStack$$Type, resourceLocation1: $ResourceLocation$$Type): void
"setLaserColor"(itemStack0: $ItemStack$$Type, int1: integer): void
/** @deprecated */
"setSkinId"(itemStack0: $ItemStack$$Type, resourceLocation1: $ResourceLocation$$Type): void
"setZoomNumber"(itemStack0: $ItemStack$$Type, int1: integer): void
}

export namespace $IAttachment {
function getIAttachmentOrNull(itemStack0: $ItemStack$$Type): $IAttachment
}
export abstract class $IAttachment$$Static implements $IAttachment {
static "getIAttachmentOrNull"(itemStack0: $ItemStack$$Type): $IAttachment
}
}

declare module "com.tacz.guns.api.event.server.AmmoHitBlockEvent" {
import { $BlockHitResult, $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $KubeJSGunEventPoster } from "com.tacz.guns.api.event.common.KubeJSGunEventPoster"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $EntityKineticBullet, $EntityKineticBullet$$Type } from "com.tacz.guns.entity.EntityKineticBullet"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $AmmoHitBlockEvent extends $Event implements $KubeJSGunEventPoster<$AmmoHitBlockEvent> {
constructor(level0: $Level$$Type, blockHitResult1: $BlockHitResult$$Type, blockState2: $BlockState$$Type, entityKineticBullet3: $EntityKineticBullet$$Type)
constructor()

public "getAmmo"(): $EntityKineticBullet
public "getHitResult"(): $BlockHitResult
public "getLevel"(): $Level
public "getState"(): $BlockState
public "postClientEventToKubeJS"(ammoHitBlockEvent0: $AmmoHitBlockEvent$$Type): void
public "postEventToKubeJS"(ammoHitBlockEvent0: $AmmoHitBlockEvent$$Type): void
public "postServerEventToKubeJS"(ammoHitBlockEvent0: $AmmoHitBlockEvent$$Type): void
get "ammo"(): $EntityKineticBullet
get "hitResult"(): $BlockHitResult
get "level"(): $Level
get "state"(): $BlockState
}
}

declare module "com.tacz.guns.resource.modifier.AttachmentCacheProperty" {
import { $GunProperty$$Type } from "com.tacz.guns.api.GunProperty"
import { $GunData$$Type } from "com.tacz.guns.resource.pojo.data.gun.GunData"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $AttachmentCacheProperty {
constructor()

public "eval"(itemStack0: $ItemStack$$Type, gunData1: $GunData$$Type): void
public "getCache"<T>(gunProperty0: $GunProperty$$Type<T>): T
public "getCache"<T>(string0: string): T
public "setCache"<T>(gunProperty0: $GunProperty$$Type<T>, t1: T): void
}
}

declare module "com.tacz.guns.api.event.common.GunReloadEvent" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $KubeJSGunEventPoster } from "com.tacz.guns.api.event.common.KubeJSGunEventPoster"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $LogicalSide, $LogicalSide$$Type } from "net.minecraftforge.fml.LogicalSide"

export class $GunReloadEvent extends $Event implements $KubeJSGunEventPoster<$GunReloadEvent> {
constructor(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, logicalSide2: $LogicalSide$$Type)
constructor()

public "getEntity"(): $LivingEntity
public "getGunItemStack"(): $ItemStack
public "getLogicalSide"(): $LogicalSide
public "postClientEventToKubeJS"(gunReloadEvent0: $GunReloadEvent$$Type): void
public "postEventToKubeJS"(gunReloadEvent0: $GunReloadEvent$$Type): void
public "postServerEventToKubeJS"(gunReloadEvent0: $GunReloadEvent$$Type): void
get "entity"(): $LivingEntity
get "gunItemStack"(): $ItemStack
get "logicalSide"(): $LogicalSide
}
}

declare module "com.tacz.guns.resource.pojo.data.gun.FeedType" {
import { $Enum } from "java.lang.Enum"

export class $FeedType extends $Enum<$FeedType> {
static readonly "FUEL": $FeedType
static readonly "INVENTORY": $FeedType
static readonly "MAGAZINE": $FeedType
static readonly "MANUAL": $FeedType

public static "valueOf"(string0: string): $FeedType
public static "values"(): $FeedType[]
}
}

declare module "com.tacz.guns.resource.pojo.data.gun.FireSound" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FireSound {
constructor()

public "getFireMultiplier"(): float
public "getSilenceMultiplier"(): float
get "fireMultiplier"(): float
get "silenceMultiplier"(): float
}
}

declare module "com.tacz.guns.resource.pojo.data.attachment.EffectData" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"

export class $EffectData {
constructor()

public "getAmplifier"(): integer
public "getEffectId"(): $ResourceLocation
public "getTime"(): integer
public "isHideParticles"(): boolean
get "amplifier"(): integer
get "effectId"(): $ResourceLocation
get "time"(): integer
get "hideParticles"(): boolean
}
}

declare module "com.tacz.guns.api.entity.ReloadState$StateType" {
import { $Enum } from "java.lang.Enum"

export class $ReloadState$StateType extends $Enum<$ReloadState$StateType> {
static readonly "EMPTY_RELOAD_FEEDING": $ReloadState$StateType
static readonly "EMPTY_RELOAD_FINISHING": $ReloadState$StateType
static readonly "NOT_RELOADING": $ReloadState$StateType
static readonly "TACTICAL_RELOAD_FEEDING": $ReloadState$StateType
static readonly "TACTICAL_RELOAD_FINISHING": $ReloadState$StateType

public "isReloadFinishing"(): boolean
public "isReloading"(): boolean
public "isReloadingEmpty"(): boolean
public "isReloadingTactical"(): boolean
public static "valueOf"(string0: string): $ReloadState$StateType
public static "values"(): $ReloadState$StateType[]
get "reloadFinishing"(): boolean
get "reloading"(): boolean
get "reloadingEmpty"(): boolean
get "reloadingTactical"(): boolean
}
}

declare module "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$GunDrawEventJS" {
import { $GunDrawEvent, $GunDrawEvent$$Type } from "com.tacz.guns.api.event.common.GunDrawEvent"
import { $GunKubeJSEvents$GunEventJS } from "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$GunEventJS"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $TimelessForgeEventWrappers$GunDrawWrapper } from "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$GunDrawWrapper"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export class $GunKubeJSEvents$GunDrawEventJS extends $GunKubeJSEvents$GunEventJS<$GunDrawEvent> implements $TimelessForgeEventWrappers$GunDrawWrapper {
constructor(gunDrawEvent0: $GunDrawEvent$$Type)

public "getCurrentGunItem"(): $ItemStack
public "getEntity"(): $LivingEntity
public "getLogicalSide"(): $LogicalSide
public "getPreviousGunItem"(): $ItemStack
get "currentGunItem"(): $ItemStack
get "entity"(): $LivingEntity
get "logicalSide"(): $LogicalSide
get "previousGunItem"(): $ItemStack
}
}

declare module "com.tacz.guns.resource.pojo.data.gun.GunMeleeData" {
import { $GunDefaultMeleeData } from "com.tacz.guns.resource.pojo.data.gun.GunDefaultMeleeData"

export class $GunMeleeData {
constructor()

public "getCooldown"(): float
public "getDefaultMeleeData"(): $GunDefaultMeleeData
public "getDistance"(): float
get "cooldown"(): float
get "defaultMeleeData"(): $GunDefaultMeleeData
get "distance"(): float
}
}

declare module "com.tacz.guns.api.event.common.EntityHurtByGunEvent$Post" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EntityHurtByGunEvent, $EntityHurtByGunEvent$$Type } from "com.tacz.guns.api.event.common.EntityHurtByGunEvent"
import { $Pair$$Type } from "org.apache.commons.lang3.tuple.Pair"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $LogicalSide$$Type } from "net.minecraftforge.fml.LogicalSide"

export class $EntityHurtByGunEvent$Post extends $EntityHurtByGunEvent {
constructor(entity0: $Entity$$Type, entity1: $Entity$$Type, livingEntity2: $LivingEntity$$Type, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type, float5: float, pair6: $Pair$$Type<$DamageSource$$Type, $DamageSource$$Type>, boolean7: boolean, float8: float, logicalSide9: $LogicalSide$$Type)
constructor()

public "postClientEventToKubeJS"(entityHurtByGunEvent0: $EntityHurtByGunEvent$$Type): void
public "postEventToKubeJS"(entityHurtByGunEvent0: $EntityHurtByGunEvent$$Type): void
public "postServerEventToKubeJS"(entityHurtByGunEvent0: $EntityHurtByGunEvent$$Type): void
}
}

declare module "com.tacz.guns.entity.shooter.ShooterDataHolder" {
import { $ReloadState$StateType, $ReloadState$StateType$$Type } from "com.tacz.guns.api.entity.ReloadState$StateType"
import { $LuaValue, $LuaValue$$Type } from "org.luaj.vm2.LuaValue"
import { $AttachmentCacheProperty, $AttachmentCacheProperty$$Type } from "com.tacz.guns.resource.modifier.AttachmentCacheProperty"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"

export class $ShooterDataHolder {
constructor()

public "initialData"(): void
get "aimingProgress"(): float
set "aimingProgress"(value: float)
get "aimingTimestamp"(): long
set "aimingTimestamp"(value: long)
get "baseTimestamp"(): long
set "baseTimestamp"(value: long)
get "boltTimestamp"(): long
set "boltTimestamp"(value: long)
get "cacheProperty"(): $AttachmentCacheProperty
set "cacheProperty"(value: $AttachmentCacheProperty$$Type)
get "currentGunItem"(): $Supplier<$ItemStack>
set "currentGunItem"(value: $Supplier$$Type<$ItemStack$$Type>)
get "currentPutAwayTimeS"(): float
set "currentPutAwayTimeS"(value: float)
get "drawTimestamp"(): long
set "drawTimestamp"(value: long)
get "heatTimestamp"(): long
set "heatTimestamp"(value: long)
get "isAiming"(): boolean
set "isAiming"(value: boolean)
get "isBolting"(): boolean
set "isBolting"(value: boolean)
get "isCrawling"(): boolean
set "isCrawling"(value: boolean)
get "knockbackStrength"(): double
set "knockbackStrength"(value: double)
get "lastShootTimestamp"(): long
set "lastShootTimestamp"(value: long)
get "meleePrepTickCount"(): integer
set "meleePrepTickCount"(value: integer)
get "meleeTimestamp"(): long
set "meleeTimestamp"(value: long)
get "reloadStateType"(): $ReloadState$StateType
set "reloadStateType"(value: $ReloadState$StateType$$Type)
get "reloadTimestamp"(): long
set "reloadTimestamp"(value: long)
get "scriptData"(): $LuaValue
set "scriptData"(value: $LuaValue$$Type)
get "shootCount"(): integer
set "shootCount"(value: integer)
get "shootTimestamp"(): long
set "shootTimestamp"(value: long)
get "sprintTimeS"(): float
set "sprintTimeS"(value: float)
get "sprintTimestamp"(): long
set "sprintTimestamp"(value: long)
}
}

declare module "com.tacz.guns.item.AmmoItem" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $ICapabilityProvider } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AmmoItemDataAccessor } from "com.tacz.guns.api.item.nbt.AmmoItemDataAccessor"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $IAmmo } from "com.tacz.guns.api.item.IAmmo"
import { $Holder } from "net.minecraft.core.Holder"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Map } from "java.util.Map"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $FoodProperties } from "net.minecraft.world.food.FoodProperties"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $UUID$$Type } from "java.util.UUID"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $Attribute, $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $EnderMan$$Type } from "net.minecraft.world.entity.monster.EnderMan"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $MutableToolTier$$Type } from "dev.latvian.mods.kubejs.item.MutableToolTier"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $FoodBuilder$$Type } from "dev.latvian.mods.kubejs.item.FoodBuilder"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $AmmoItem extends $Item implements $AmmoItemDataAccessor {
constructor()

public "addAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type, name: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "arch$holder"(): $Holder<$Item>
public "arch$registryName"(): $ResourceLocation
public "canApplyAtEnchantingTable"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
public "canContinueUsing"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "canDisableShield"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "canElytraFly"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "canEquip"(itemStack0: $ItemStack$$Type, equipmentSlot1: $EquipmentSlot$$Type, entity2: $Entity$$Type): boolean
public "canGrindstoneRepair"(itemStack0: $ItemStack$$Type): boolean
public "canPerformAction"(itemStack0: $ItemStack$$Type, toolAction1: $ToolAction$$Type): boolean
public "canWalkOnPowderedSnow"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "createEntity"(level0: $Level$$Type, entity1: $Entity$$Type, itemStack2: $ItemStack$$Type): $Entity
public "damageItem"<T extends $LivingEntity>(itemStack0: $ItemStack$$Type, int1: integer, t2: T, consumer3: $Consumer$$Type<T>): integer
public "doesSneakBypassUse"(itemStack0: $ItemStack$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "elytraFlightTick"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): boolean
public static "fillItemCategory"(): $NonNullList<$ItemStack>
public static "get"(item: $Item$$Type): $ResourceLocation
public static "get"(block: $Block$$Type): $ResourceLocation
public static "get"(state: $BlockState$$Type): $ResourceLocation
public static "get"(entity: $Entity$$Type): $ResourceLocation
public static "get"(stack: $ItemStack$$Type): $ResourceLocation
public static "get"(type: $EntityType$$Type<any>): $ResourceLocation
public "getAllEnchantments"(itemStack0: $ItemStack$$Type): $Map<$Enchantment, integer>
public "getAmmoId"(itemStack0: $ItemStack$$Type): $ResourceLocation
public "getArmorTexture"(itemStack0: $ItemStack$$Type, entity1: $Entity$$Type, equipmentSlot2: $EquipmentSlot$$Type, string3: string): string
public "getAttributeModifiers"(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
public "getAttributes"(attribute: $Attribute$$Type): $List<$AttributeModifier>
public "getBurnTime"(itemStack0: $ItemStack$$Type, recipeType1: $RecipeType$$Type<any>): integer
public "getCraftingRemainingItem"(itemStack0: $ItemStack$$Type): $ItemStack
public "getCreativeTab"(): string
public "getCreatorModId"(itemStack0: $ItemStack$$Type): string
public "getDamage"(itemStack0: $ItemStack$$Type): integer
public "getDefaultTooltipHideFlags"(itemStack0: $ItemStack$$Type): integer
public "getDigSpeed"(): float
public "getEnchantmentLevel"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): integer
public "getEnchantmentValue"(itemStack0: $ItemStack$$Type): integer
public "getEntityLifespan"(itemStack0: $ItemStack$$Type, level1: $Level$$Type): integer
public "getEquipmentSlot"(itemStack0: $ItemStack$$Type): $EquipmentSlot
public "getFoodProperties"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): $FoodProperties
public "getHighlightTip"(itemStack0: $ItemStack$$Type, component1: $Component$$Type): $Component
public static "getIAmmoOrNull"(itemStack0: $ItemStack$$Type): $IAmmo
public "getMaxDamage"(itemStack0: $ItemStack$$Type): integer
public "getMaxStackSize"(itemStack0: $ItemStack$$Type): integer
public "getMod"(): string
public "getShareTag"(itemStack0: $ItemStack$$Type): $CompoundTag
public "getSweepHitBox"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): $AABB
public "getXpRepairRatio"(itemStack0: $ItemStack$$Type): float
public "hasCraftingRemainingItem"(itemStack0: $ItemStack$$Type): boolean
public "hasCustomEntity"(itemStack0: $ItemStack$$Type): boolean
public "initCapabilities"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): $ICapabilityProvider
public "isAmmoOfGun"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "isBookEnchantable"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "isCorrectToolForDrops"(itemStack0: $ItemStack$$Type, blockState1: $BlockState$$Type): boolean
public "isDamageable"(itemStack0: $ItemStack$$Type): boolean
public "isDamaged"(itemStack0: $ItemStack$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isEnderMask"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, enderMan2: $EnderMan$$Type): boolean
public "isNotReplaceableByPickAction"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer): boolean
public "isPiglinCurrency"(itemStack0: $ItemStack$$Type): boolean
public "makesPiglinsNeutral"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
/** @deprecated */
public "onArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type): void
public "onBlockStartBreak"(itemStack0: $ItemStack$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
public "onDestroyed"(itemEntity0: $ItemEntity$$Type, damageSource1: $DamageSource$$Type): void
public "onDroppedByPlayer"(itemStack0: $ItemStack$$Type, player1: $Player$$Type): boolean
public "onEntityItemUpdate"(itemStack0: $ItemStack$$Type, itemEntity1: $ItemEntity$$Type): boolean
public "onEntitySwing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "onHorseArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, mob2: $Mob$$Type): void
public "onInventoryTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type, int3: integer, int4: integer): void
public "onItemUseFirst"(itemStack0: $ItemStack$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
public "onLeftClickEntity"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): boolean
public "onStopUsing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): void
public "readShareTag"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): void
public "removeAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type): void
public "setAmmoId"(itemStack0: $ItemStack$$Type, resourceLocation1: $ResourceLocation$$Type): void
public "setArmorKnockbackResistance"(knockbackResistance: double): void
public "setArmorProtection"(armorProtection: double): void
public "setArmorToughness"(armorToughness: double): void
public "setAttackDamage"(attackDamage: double): void
public "setAttackSpeed"(attackSpeed: double): void
public "setDamage"(itemStack0: $ItemStack$$Type, int1: integer): void
public "setDigSpeed"(speed: float): void
public "setFoodProperties"(consumer: $Consumer$$Type<$FoodBuilder$$Type>): void
public "setTier"(c: $Consumer$$Type<$MutableToolTier$$Type>): void
public "shouldCauseBlockBreakReset"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "shouldCauseReequipAnimation"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean): boolean
get "creativeTab"(): string
get "digSpeed"(): float
get "mod"(): string
set "armorKnockbackResistance"(value: double)
set "armorProtection"(value: double)
set "armorToughness"(value: double)
set "attackDamage"(value: double)
set "attackSpeed"(value: double)
set "digSpeed"(value: float)
set "foodProperties"(value: $Consumer$$Type<$FoodBuilder$$Type>)
set "tier"(value: $Consumer$$Type<$MutableToolTier$$Type>)
}
}

declare module "com.tacz.guns.api.item.nbt.AttachmentItemDataAccessor" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AttachmentType } from "com.tacz.guns.api.item.attachment.AttachmentType"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $IAttachment } from "com.tacz.guns.api.item.IAttachment"

export interface $AttachmentItemDataAccessor extends $IAttachment {
"getAttachmentId"(itemStack0: $ItemStack$$Type): $ResourceLocation
"getLaserColor"(itemStack0: $ItemStack$$Type): integer
"getSkinId"(itemStack0: $ItemStack$$Type): $ResourceLocation
"getType"(itemStack0: $ItemStack$$Type): $AttachmentType
"getZoomNumber"(itemStack0: $ItemStack$$Type): integer
"hasCustomLaserColor"(itemStack0: $ItemStack$$Type): boolean
"setAttachmentId"(itemStack0: $ItemStack$$Type, resourceLocation1: $ResourceLocation$$Type): void
"setLaserColor"(itemStack0: $ItemStack$$Type, int1: integer): void
"setSkinId"(itemStack0: $ItemStack$$Type, resourceLocation1: $ResourceLocation$$Type): void
"setZoomNumber"(itemStack0: $ItemStack$$Type, int1: integer): void
}

export namespace $AttachmentItemDataAccessor {
const ATTACHMENT_ID_TAG: string
const LASER_COLOR_TAG: string
const SKIN_ID_TAG: string
const ZOOM_NUMBER_TAG: string
function getAttachmentIdFromTag(compoundTag0: $CompoundTag$$Type): $ResourceLocation
function getIAttachmentOrNull(itemStack0: $ItemStack$$Type): $IAttachment
function getZoomNumberFromTag(compoundTag0: $CompoundTag$$Type): integer
function isAttachmentLike(compoundTag0: $CompoundTag$$Type): boolean
function setZoomNumberToTag(compoundTag0: $CompoundTag$$Type, int1: integer): void
}
export abstract class $AttachmentItemDataAccessor$$Static implements $AttachmentItemDataAccessor {
static readonly "ATTACHMENT_ID_TAG": string
static readonly "LASER_COLOR_TAG": string
static readonly "SKIN_ID_TAG": string
static readonly "ZOOM_NUMBER_TAG": string

static "getAttachmentIdFromTag"(compoundTag0: $CompoundTag$$Type): $ResourceLocation
static "getIAttachmentOrNull"(itemStack0: $ItemStack$$Type): $IAttachment
static "getZoomNumberFromTag"(compoundTag0: $CompoundTag$$Type): integer
static "isAttachmentLike"(compoundTag0: $CompoundTag$$Type): boolean
static "setZoomNumberToTag"(compoundTag0: $CompoundTag$$Type, int1: integer): void
}
}

declare module "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$AttachmentPropertyEventJS" {
import { $GunKubeJSEvents$GunEventJS } from "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$GunEventJS"
import { $AttachmentPropertyEvent, $AttachmentPropertyEvent$$Type } from "com.tacz.guns.api.event.common.AttachmentPropertyEvent"
import { $TimelessForgeEventWrappers$AttachmentPropertyWrapper } from "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$AttachmentPropertyWrapper"
import { $AttachmentCacheProperty } from "com.tacz.guns.resource.modifier.AttachmentCacheProperty"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export class $GunKubeJSEvents$AttachmentPropertyEventJS extends $GunKubeJSEvents$GunEventJS<$AttachmentPropertyEvent> implements $TimelessForgeEventWrappers$AttachmentPropertyWrapper {
constructor(attachmentPropertyEvent0: $AttachmentPropertyEvent$$Type)

public "getCacheProperty"(): $AttachmentCacheProperty
public "getGunItem"(): $ItemStack
get "cacheProperty"(): $AttachmentCacheProperty
get "gunItem"(): $ItemStack
}
}

declare module "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$EntityHurtByGunPreWrapper" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityHurtByGunEvent$Pre } from "com.tacz.guns.api.event.common.EntityHurtByGunEvent$Pre"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $GunDamageSourcePart$$Type } from "com.tacz.guns.api.event.common.GunDamageSourcePart"
import { $TimelessForgeEventWrappers$EntityHurtByGunWrapper } from "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$EntityHurtByGunWrapper"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export interface $TimelessForgeEventWrappers$EntityHurtByGunPreWrapper extends $TimelessForgeEventWrappers$EntityHurtByGunWrapper<$EntityHurtByGunEvent$Pre> {
"getAttacker"(): $LivingEntity
"getBaseAmount"(): float
"getBullet"(): $Entity
"getDamageSource"(gunDamageSourcePart0: $GunDamageSourcePart$$Type): $DamageSource
"getForgeEvent"(): $EntityHurtByGunEvent$Pre
"getGunId"(): $ResourceLocation
"getHeadshotMultiplier"(): float
"getHurtEntity"(): $Entity
"getLogicalSide"(): $LogicalSide
"isHeadShot"(): boolean
"setAttacker"(livingEntity0: $LivingEntity$$Type): void
"setBaseAmount"(float0: float): void
"setDamageSource"(gunDamageSourcePart0: $GunDamageSourcePart$$Type, damageSource1: $DamageSource$$Type): void
"setGunId"(resourceLocation0: $ResourceLocation$$Type): void
"setHeadshot"(boolean0: boolean): void
"setHeadshotMultiplier"(float0: float): void
"setHurtEntity"(entity0: $Entity$$Type): void
get "attacker"(): $LivingEntity
get "baseAmount"(): float
get "bullet"(): $Entity
get "forgeEvent"(): $EntityHurtByGunEvent$Pre
get "gunId"(): $ResourceLocation
get "headshotMultiplier"(): float
get "hurtEntity"(): $Entity
get "logicalSide"(): $LogicalSide
get "headShot"(): boolean
set "attacker"(value: $LivingEntity$$Type)
set "baseAmount"(value: float)
set "gunId"(value: $ResourceLocation$$Type)
set "headshot"(value: boolean)
set "headshotMultiplier"(value: float)
set "hurtEntity"(value: $Entity$$Type)
}

export namespace $TimelessForgeEventWrappers$EntityHurtByGunPreWrapper {
const probejs$$marker: never
}
export abstract class $TimelessForgeEventWrappers$EntityHurtByGunPreWrapper$$Static implements $TimelessForgeEventWrappers$EntityHurtByGunPreWrapper {
}
}

declare module "com.tacz.guns.api.client.gameplay.IClientPlayerGunOperator" {
import { $ShootResult } from "com.tacz.guns.api.entity.ShootResult"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $LocalPlayer$$Type } from "net.minecraft.client.player.LocalPlayer"
import { $LocalPlayerDataHolder } from "com.tacz.guns.client.gameplay.LocalPlayerDataHolder"

export interface $IClientPlayerGunOperator {
"aim"(boolean0: boolean): void
"bolt"(): void
"crawl"(boolean0: boolean): void
"draw"(itemStack0: $ItemStack$$Type): void
"fireSelect"(): void
"getClientAimingProgress"(float0: float): float
"getClientShootCoolDown"(): long
"getDataHolder"(): $LocalPlayerDataHolder
"inspect"(): void
"isAim"(): boolean
"isCrawl"(): boolean
"isReadyToDraw"(): boolean
"melee"(): void
"reload"(): void
"resetDraw"(): void
"shoot"(): $ShootResult
get "clientShootCoolDown"(): long
get "dataHolder"(): $LocalPlayerDataHolder
get "readyToDraw"(): boolean
}

export namespace $IClientPlayerGunOperator {
function fromLocalPlayer(localPlayer0: $LocalPlayer$$Type): $IClientPlayerGunOperator
}
export abstract class $IClientPlayerGunOperator$$Static implements $IClientPlayerGunOperator {
static "fromLocalPlayer"(localPlayer0: $LocalPlayer$$Type): $IClientPlayerGunOperator
}
}

declare module "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$GunEventJS" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Event, $Event$$Type } from "net.minecraftforge.eventbus.api.Event"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $TimelessForgeEventWrappers$ForgeEventWrapper } from "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$ForgeEventWrapper"

export class $GunKubeJSEvents$GunEventJS<E extends $Event = $Event> extends $EventJS implements $TimelessForgeEventWrappers$ForgeEventWrapper<E> {
constructor(e0: E)

public "getEventSubId"(): $ResourceLocation
public "getForgeEvent"(): E
get "eventSubId"(): $ResourceLocation
get "forgeEvent"(): E
}
}

declare module "com.tacz.guns.api.item.builder.BlockItemBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export class $BlockItemBuilder {
public "build"(): $ItemStack
public static "create"(itemLike0: $ItemLike$$Type): $BlockItemBuilder
public "setCount"(int0: integer): $BlockItemBuilder
public "setId"(resourceLocation0: $ResourceLocation$$Type): $BlockItemBuilder
set "count"(value: integer)
set "id"(value: $ResourceLocation$$Type)
}
}

declare module "com.tacz.guns.resource.pojo.data.gun.ExtraDamage" {
import { $ExtraDamage$DistanceDamagePair } from "com.tacz.guns.resource.pojo.data.gun.ExtraDamage$DistanceDamagePair"
import { $LinkedList } from "java.util.LinkedList"

export class $ExtraDamage {
constructor()

public "getArmorIgnore"(): float
public "getDamageAdjust"(): $LinkedList<$ExtraDamage$DistanceDamagePair>
public "getHeadShotMultiplier"(): float
get "armorIgnore"(): float
get "damageAdjust"(): $LinkedList<$ExtraDamage$DistanceDamagePair>
get "headShotMultiplier"(): float
}
}

declare module "com.tacz.guns.resource.pojo.data.gun.GunReloadData" {
import { $GunReloadTime } from "com.tacz.guns.resource.pojo.data.gun.GunReloadTime"
import { $FeedType } from "com.tacz.guns.resource.pojo.data.gun.FeedType"

export class $GunReloadData {
constructor()

public "getCooldown"(): $GunReloadTime
public "getFeed"(): $GunReloadTime
public "getType"(): $FeedType
public "isInfinite"(): boolean
get "cooldown"(): $GunReloadTime
get "feed"(): $GunReloadTime
get "type"(): $FeedType
get "infinite"(): boolean
}
}

declare module "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$AmmoHitBlockEventJS" {
import { $TimelessForgeEventWrappers$AmmoHitBlockWrapper } from "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$AmmoHitBlockWrapper"
import { $GunKubeJSEvents$GunEventJS } from "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$GunEventJS"
import { $AmmoHitBlockEvent, $AmmoHitBlockEvent$$Type } from "com.tacz.guns.api.event.server.AmmoHitBlockEvent"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $EntityKineticBullet } from "com.tacz.guns.entity.EntityKineticBullet"
import { $Level } from "net.minecraft.world.level.Level"

export class $GunKubeJSEvents$AmmoHitBlockEventJS extends $GunKubeJSEvents$GunEventJS<$AmmoHitBlockEvent> implements $TimelessForgeEventWrappers$AmmoHitBlockWrapper {
constructor(ammoHitBlockEvent0: $AmmoHitBlockEvent$$Type)

public "getAmmo"(): $EntityKineticBullet
public "getHitResult"(): $BlockHitResult
public "getLevel"(): $Level
public "getState"(): $BlockState
get "ammo"(): $EntityKineticBullet
get "hitResult"(): $BlockHitResult
get "level"(): $Level
get "state"(): $BlockState
}
}

declare module "com.tacz.guns.resource.pojo.data.gun.BulletData" {
import { $ExtraDamage } from "com.tacz.guns.resource.pojo.data.gun.ExtraDamage"
import { $ExplosionData } from "com.tacz.guns.resource.pojo.data.gun.ExplosionData"
import { $Ignite } from "com.tacz.guns.resource.pojo.data.gun.Ignite"

export class $BulletData {
constructor()

public "getBulletAmount"(): integer
public "getDamageAmount"(): float
public "getExplosionData"(): $ExplosionData
public "getExtraDamage"(): $ExtraDamage
public "getFriction"(): float
public "getGravity"(): float
public "getIgnite"(): $Ignite
public "getIgniteEntityTime"(): integer
public "getKnockback"(): float
public "getLifeSecond"(): float
public "getPierce"(): integer
public "getSpeed"(): float
public "getTracerCountInterval"(): integer
public "hasTracerAmmo"(): boolean
get "bulletAmount"(): integer
get "damageAmount"(): float
get "explosionData"(): $ExplosionData
get "extraDamage"(): $ExtraDamage
get "friction"(): float
get "gravity"(): float
get "ignite"(): $Ignite
get "igniteEntityTime"(): integer
get "knockback"(): float
get "lifeSecond"(): float
get "pierce"(): integer
get "speed"(): float
get "tracerCountInterval"(): integer
}
}

declare module "com.tacz.guns.compat.kubejs.recipe.TimelessRecipeJS" {
import { $RecipeJS } from "dev.latvian.mods.kubejs.recipe.RecipeJS"
import { $GunSmithTableResultInfo$OutputGroupName$$Type } from "com.tacz.guns.compat.kubejs.util.GunSmithTableResultInfo$OutputGroupName"
import { $GunSmithTableResultInfo, $GunSmithTableResultInfo$$Type } from "com.tacz.guns.compat.kubejs.util.GunSmithTableResultInfo"

export class $TimelessRecipeJS extends $RecipeJS {
constructor()

public "getMod"(): string
public "getResultInfo"(): $GunSmithTableResultInfo
public "outputGroup"(outputGroupName0: $GunSmithTableResultInfo$OutputGroupName$$Type): $TimelessRecipeJS
public "outputGroupName"(string0: string): $TimelessRecipeJS
public "setResultInfo"(gunSmithTableResultInfo0: $GunSmithTableResultInfo$$Type): void
get "mod"(): string
get "resultInfo"(): $GunSmithTableResultInfo
set "resultInfo"(value: $GunSmithTableResultInfo$$Type)
}
}

declare module "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$GunReloadWrapper" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $TimelessForgeEventWrappers$ForgeEventWrapper } from "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$ForgeEventWrapper"
import { $GunReloadEvent } from "com.tacz.guns.api.event.common.GunReloadEvent"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export interface $TimelessForgeEventWrappers$GunReloadWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$GunReloadEvent> {
"getEntity"(): $LivingEntity
"getForgeEvent"(): $GunReloadEvent
"getGunItemStack"(): $ItemStack
"getLogicalSide"(): $LogicalSide
get "entity"(): $LivingEntity
get "forgeEvent"(): $GunReloadEvent
get "gunItemStack"(): $ItemStack
get "logicalSide"(): $LogicalSide
}

export namespace $TimelessForgeEventWrappers$GunReloadWrapper {
const probejs$$marker: never
}
export abstract class $TimelessForgeEventWrappers$GunReloadWrapper$$Static implements $TimelessForgeEventWrappers$GunReloadWrapper {
}
}

declare module "com.tacz.guns.resource.pojo.data.gun.InaccuracyType" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Enum } from "java.lang.Enum"
import { $Map } from "java.util.Map"

export class $InaccuracyType extends $Enum<$InaccuracyType> {
static readonly "AIM": $InaccuracyType
static readonly "LIE": $InaccuracyType
static readonly "MOVE": $InaccuracyType
static readonly "SNEAK": $InaccuracyType
static readonly "STAND": $InaccuracyType

public static "getDefaultInaccuracy"(): $Map<$InaccuracyType, float>
public static "getInaccuracyType"(livingEntity0: $LivingEntity$$Type): $InaccuracyType
public "isAim"(): boolean
public static "valueOf"(string0: string): $InaccuracyType
public static "values"(): $InaccuracyType[]
get "aim"(): boolean
}
}

declare module "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$BeforeRenderHandWrapper" {
import { $TimelessForgeEventWrappers$ForgeEventWrapper } from "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$ForgeEventWrapper"
import { $BeforeRenderHandEvent } from "com.tacz.guns.api.client.event.BeforeRenderHandEvent"
import { $PoseStack } from "com.mojang.blaze3d.vertex.PoseStack"

export interface $TimelessForgeEventWrappers$BeforeRenderHandWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$BeforeRenderHandEvent> {
"getForgeEvent"(): $BeforeRenderHandEvent
"getPoseStack"(): $PoseStack
get "forgeEvent"(): $BeforeRenderHandEvent
get "poseStack"(): $PoseStack
}

export namespace $TimelessForgeEventWrappers$BeforeRenderHandWrapper {
const probejs$$marker: never
}
export abstract class $TimelessForgeEventWrappers$BeforeRenderHandWrapper$$Static implements $TimelessForgeEventWrappers$BeforeRenderHandWrapper {
}
}

declare module "com.tacz.guns.resource.pojo.data.gun.ExplosionData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ExplosionData {
constructor(boolean0: boolean, float1: float, float2: float, boolean3: boolean, float4: float, boolean5: boolean)

public "getDamage"(): float
public "getDelay"(): float
public "getRadius"(): float
public "isDestroyBlock"(): boolean
public "isExplode"(): boolean
public "isKnockback"(): boolean
get "damage"(): float
get "delay"(): float
get "radius"(): float
get "destroyBlock"(): boolean
get "explode"(): boolean
get "knockback"(): boolean
}
}

declare module "com.tacz.guns.api.item.GunTabType" {
import { $Enum } from "java.lang.Enum"

export class $GunTabType extends $Enum<$GunTabType> {
static readonly "MG": $GunTabType
static readonly "PISTOL": $GunTabType
static readonly "RIFLE": $GunTabType
static readonly "RPG": $GunTabType
static readonly "SHOTGUN": $GunTabType
static readonly "SMG": $GunTabType
static readonly "SNIPER": $GunTabType

public static "valueOf"(string0: string): $GunTabType
public static "values"(): $GunTabType[]
}
}

declare module "com.tacz.guns.api.modifier.JsonProperty" {
import { $List } from "java.util.List"
import { $Component } from "net.minecraft.network.chat.Component"

export class $JsonProperty<T = any> {
constructor(t0: T)

public "getComponents"(): $List<$Component>
public "getValue"(): T
public "initComponents"(): void
public "setValue"(t0: T): void
get "components"(): $List<$Component>
get "value"(): T
set "value"(value: T)
}
}

declare module "com.tacz.guns.compat.kubejs.util.TimelessItemWrapper" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $BlockItemBuilder$$Type } from "com.tacz.guns.api.item.builder.BlockItemBuilder"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AmmoItemBuilder$$Type } from "com.tacz.guns.api.item.builder.AmmoItemBuilder"
import { $AttachmentNbtFactory$$Type } from "com.tacz.guns.compat.kubejs.util.AttachmentNbtFactory"
import { $AmmoNbtFactory$$Type } from "com.tacz.guns.compat.kubejs.util.AmmoNbtFactory"
import { $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $AttachmentItemBuilder$$Type } from "com.tacz.guns.api.item.builder.AttachmentItemBuilder"
import { $GunNbtFactory$$Type } from "com.tacz.guns.compat.kubejs.util.GunNbtFactory"

export class $TimelessItemWrapper {
constructor()

public static "ammoItem"(item0: $Item$$Type, consumer1: $Consumer$$Type<$AmmoNbtFactory$$Type>): $ItemStack
public static "ammoItem"(consumer0: $Consumer$$Type<$AmmoItemBuilder$$Type>): $ItemStack
public static "attachmentItem"(consumer0: $Consumer$$Type<$AttachmentItemBuilder$$Type>): $ItemStack
public static "attachmentItem"(item0: $Item$$Type, consumer1: $Consumer$$Type<$AttachmentNbtFactory$$Type>): $ItemStack
public static "blockItem"(itemLike0: $ItemLike$$Type, consumer1: $Consumer$$Type<$BlockItemBuilder$$Type>): $ItemStack
public static "gunItem"(consumer0: $Consumer$$Type<$GunNbtFactory$$Type>): $ItemStack
public static "gunItem"(item0: $Item$$Type, consumer1: $Consumer$$Type<$GunNbtFactory$$Type>): $ItemStack
public static "of"(resourceLocation0: $ResourceLocation$$Type): $ItemStack
public static "of"(item0: $Item$$Type, resourceLocation1: $ResourceLocation$$Type): $ItemStack
}
}

declare module "com.tacz.guns.api.event.common.GunFireEvent" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $KubeJSGunEventPoster } from "com.tacz.guns.api.event.common.KubeJSGunEventPoster"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $LogicalSide, $LogicalSide$$Type } from "net.minecraftforge.fml.LogicalSide"

export class $GunFireEvent extends $Event implements $KubeJSGunEventPoster<$GunFireEvent> {
constructor(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, logicalSide2: $LogicalSide$$Type)
constructor()

public "getGunItemStack"(): $ItemStack
public "getLogicalSide"(): $LogicalSide
public "getShooter"(): $LivingEntity
public "postClientEventToKubeJS"(gunFireEvent0: $GunFireEvent$$Type): void
public "postEventToKubeJS"(gunFireEvent0: $GunFireEvent$$Type): void
public "postServerEventToKubeJS"(gunFireEvent0: $GunFireEvent$$Type): void
get "gunItemStack"(): $ItemStack
get "logicalSide"(): $LogicalSide
get "shooter"(): $LivingEntity
}
}

declare module "com.tacz.guns.resource.pojo.data.gun.GunDefaultMeleeData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $GunDefaultMeleeData {
constructor()

public "getAnimationType"(): string
public "getCooldown"(): float
public "getDamage"(): float
public "getDistance"(): float
public "getKnockback"(): float
public "getPrepTime"(): float
public "getRangeAngle"(): float
get "animationType"(): string
get "cooldown"(): float
get "damage"(): float
get "distance"(): float
get "knockback"(): float
get "prepTime"(): float
get "rangeAngle"(): float
}
}

declare module "com.tacz.guns.api.event.common.GunFireSelectEvent" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $KubeJSGunEventPoster } from "com.tacz.guns.api.event.common.KubeJSGunEventPoster"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $LogicalSide, $LogicalSide$$Type } from "net.minecraftforge.fml.LogicalSide"

export class $GunFireSelectEvent extends $Event implements $KubeJSGunEventPoster<$GunFireSelectEvent> {
constructor(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, logicalSide2: $LogicalSide$$Type)
constructor()

public "getGunItemStack"(): $ItemStack
public "getLogicalSide"(): $LogicalSide
public "getShooter"(): $LivingEntity
public "postClientEventToKubeJS"(gunFireSelectEvent0: $GunFireSelectEvent$$Type): void
public "postEventToKubeJS"(gunFireSelectEvent0: $GunFireSelectEvent$$Type): void
public "postServerEventToKubeJS"(gunFireSelectEvent0: $GunFireSelectEvent$$Type): void
get "gunItemStack"(): $ItemStack
get "logicalSide"(): $LogicalSide
get "shooter"(): $LivingEntity
}
}

declare module "com.tacz.guns.api.client.other.KeepingItemRenderer" {
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $KeepingItemRenderer {
"getCurrentItem"(): $ItemStack
"keep"(itemStack0: $ItemStack$$Type, long1: long): void
get "currentItem"(): $ItemStack
}

export namespace $KeepingItemRenderer {
function getRenderer(): $KeepingItemRenderer
}
export abstract class $KeepingItemRenderer$$Static implements $KeepingItemRenderer {
static "getRenderer"(): $KeepingItemRenderer
}
}

declare module "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$GunShootWrapper" {
import { $GunShootEvent } from "com.tacz.guns.api.event.common.GunShootEvent"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $TimelessForgeEventWrappers$ForgeEventWrapper } from "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$ForgeEventWrapper"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export interface $TimelessForgeEventWrappers$GunShootWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$GunShootEvent> {
"getForgeEvent"(): $GunShootEvent
"getGunItemStack"(): $ItemStack
"getLogicalSide"(): $LogicalSide
"getShooter"(): $LivingEntity
get "forgeEvent"(): $GunShootEvent
get "gunItemStack"(): $ItemStack
get "logicalSide"(): $LogicalSide
get "shooter"(): $LivingEntity
}

export namespace $TimelessForgeEventWrappers$GunShootWrapper {
const probejs$$marker: never
}
export abstract class $TimelessForgeEventWrappers$GunShootWrapper$$Static implements $TimelessForgeEventWrappers$GunShootWrapper {
}
}

declare module "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$GunFinishReloadWrapper" {
import { $GunFinishReloadEvent } from "com.tacz.guns.api.event.common.GunFinishReloadEvent"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $TimelessForgeEventWrappers$ForgeEventWrapper } from "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$ForgeEventWrapper"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export interface $TimelessForgeEventWrappers$GunFinishReloadWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$GunFinishReloadEvent> {
"getForgeEvent"(): $GunFinishReloadEvent
"getGunItemStack"(): $ItemStack
"getLogicalSide"(): $LogicalSide
get "forgeEvent"(): $GunFinishReloadEvent
get "gunItemStack"(): $ItemStack
get "logicalSide"(): $LogicalSide
}

export namespace $TimelessForgeEventWrappers$GunFinishReloadWrapper {
const probejs$$marker: never
}
export abstract class $TimelessForgeEventWrappers$GunFinishReloadWrapper$$Static implements $TimelessForgeEventWrappers$GunFinishReloadWrapper {
}
}

declare module "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$GunFireSelectEventJS" {
import { $GunFireSelectEvent, $GunFireSelectEvent$$Type } from "com.tacz.guns.api.event.common.GunFireSelectEvent"
import { $GunKubeJSEvents$GunEventJS } from "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$GunEventJS"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $TimelessForgeEventWrappers$GunFireSelectWrapper } from "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$GunFireSelectWrapper"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export class $GunKubeJSEvents$GunFireSelectEventJS extends $GunKubeJSEvents$GunEventJS<$GunFireSelectEvent> implements $TimelessForgeEventWrappers$GunFireSelectWrapper {
constructor(gunFireSelectEvent0: $GunFireSelectEvent$$Type)

public "getGunItemStack"(): $ItemStack
public "getLogicalSide"(): $LogicalSide
public "getShooter"(): $LivingEntity
get "gunItemStack"(): $ItemStack
get "logicalSide"(): $LogicalSide
get "shooter"(): $LivingEntity
}
}

declare module "com.tacz.guns.api.event.common.AttachmentPropertyEvent" {
import { $KubeJSGunEventPoster } from "com.tacz.guns.api.event.common.KubeJSGunEventPoster"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $AttachmentCacheProperty, $AttachmentCacheProperty$$Type } from "com.tacz.guns.resource.modifier.AttachmentCacheProperty"

export class $AttachmentPropertyEvent extends $Event implements $KubeJSGunEventPoster<$AttachmentPropertyEvent> {
constructor(itemStack0: $ItemStack$$Type, attachmentCacheProperty1: $AttachmentCacheProperty$$Type)
constructor()

public "getCacheProperty"(): $AttachmentCacheProperty
public "getGunItem"(): $ItemStack
public "postClientEventToKubeJS"(attachmentPropertyEvent0: $AttachmentPropertyEvent$$Type): void
public "postEventToKubeJS"(attachmentPropertyEvent0: $AttachmentPropertyEvent$$Type): void
public "postServerEventToKubeJS"(attachmentPropertyEvent0: $AttachmentPropertyEvent$$Type): void
get "cacheProperty"(): $AttachmentCacheProperty
get "gunItem"(): $ItemStack
}
}

declare module "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$EntityHurtByGunPreEventJS" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $GunKubeJSEvents$GunEventJS } from "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$GunEventJS"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityHurtByGunEvent$Pre, $EntityHurtByGunEvent$Pre$$Type } from "com.tacz.guns.api.event.common.EntityHurtByGunEvent$Pre"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $GunDamageSourcePart$$Type } from "com.tacz.guns.api.event.common.GunDamageSourcePart"
import { $TimelessForgeEventWrappers$EntityHurtByGunPreWrapper } from "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$EntityHurtByGunPreWrapper"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export class $GunKubeJSEvents$EntityHurtByGunPreEventJS extends $GunKubeJSEvents$GunEventJS<$EntityHurtByGunEvent$Pre> implements $TimelessForgeEventWrappers$EntityHurtByGunPreWrapper {
constructor(pre0: $EntityHurtByGunEvent$Pre$$Type)

public "getAttacker"(): $LivingEntity
public "getBaseAmount"(): float
public "getBullet"(): $Entity
public "getDamageSource"(gunDamageSourcePart0: $GunDamageSourcePart$$Type): $DamageSource
public "getGunId"(): $ResourceLocation
public "getHeadshotMultiplier"(): float
public "getHurtEntity"(): $Entity
public "getLogicalSide"(): $LogicalSide
public "isHeadShot"(): boolean
public "setAttacker"(livingEntity0: $LivingEntity$$Type): void
public "setBaseAmount"(float0: float): void
public "setDamageSource"(gunDamageSourcePart0: $GunDamageSourcePart$$Type, damageSource1: $DamageSource$$Type): void
public "setGunId"(resourceLocation0: $ResourceLocation$$Type): void
public "setHeadshot"(boolean0: boolean): void
public "setHeadshotMultiplier"(float0: float): void
public "setHurtEntity"(entity0: $Entity$$Type): void
get "attacker"(): $LivingEntity
get "baseAmount"(): float
get "bullet"(): $Entity
get "gunId"(): $ResourceLocation
get "headshotMultiplier"(): float
get "hurtEntity"(): $Entity
get "logicalSide"(): $LogicalSide
get "headShot"(): boolean
set "attacker"(value: $LivingEntity$$Type)
set "baseAmount"(value: float)
set "gunId"(value: $ResourceLocation$$Type)
set "headshot"(value: boolean)
set "headshotMultiplier"(value: float)
set "hurtEntity"(value: $Entity$$Type)
}
}

declare module "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$SwapItemWithOffHandEventJS" {
import { $GunKubeJSEvents$GunEventJS } from "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$GunEventJS"
import { $SwapItemWithOffHand, $SwapItemWithOffHand$$Type } from "com.tacz.guns.api.client.event.SwapItemWithOffHand"

export class $GunKubeJSEvents$SwapItemWithOffHandEventJS extends $GunKubeJSEvents$GunEventJS<$SwapItemWithOffHand> {
constructor(swapItemWithOffHand0: $SwapItemWithOffHand$$Type)

}
}

declare module "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$AttachmentPropertyWrapper" {
import { $AttachmentPropertyEvent } from "com.tacz.guns.api.event.common.AttachmentPropertyEvent"
import { $AttachmentCacheProperty } from "com.tacz.guns.resource.modifier.AttachmentCacheProperty"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $TimelessForgeEventWrappers$ForgeEventWrapper } from "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$ForgeEventWrapper"

export interface $TimelessForgeEventWrappers$AttachmentPropertyWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$AttachmentPropertyEvent> {
"getCacheProperty"(): $AttachmentCacheProperty
"getForgeEvent"(): $AttachmentPropertyEvent
"getGunItem"(): $ItemStack
get "cacheProperty"(): $AttachmentCacheProperty
get "forgeEvent"(): $AttachmentPropertyEvent
get "gunItem"(): $ItemStack
}

export namespace $TimelessForgeEventWrappers$AttachmentPropertyWrapper {
const probejs$$marker: never
}
export abstract class $TimelessForgeEventWrappers$AttachmentPropertyWrapper$$Static implements $TimelessForgeEventWrappers$AttachmentPropertyWrapper {
}
}

declare module "com.tacz.guns.resource.pojo.data.gun.GunRecoilKeyFrame" {
import { $Comparable } from "java.lang.Comparable"

export class $GunRecoilKeyFrame implements $Comparable<$GunRecoilKeyFrame> {
constructor()

public "compareTo"(gunRecoilKeyFrame0: $GunRecoilKeyFrame$$Type): integer
public "getTime"(): float
public "getValue"(): float[]
public "setTime"(float0: float): void
public "setValue"(float0s: float[]): void
get "time"(): float
get "value"(): float[]
set "time"(value: float)
set "value"(value: float[])
}
}

declare module "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$GunFinishReloadEventJS" {
import { $GunKubeJSEvents$GunEventJS } from "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$GunEventJS"
import { $GunFinishReloadEvent, $GunFinishReloadEvent$$Type } from "com.tacz.guns.api.event.common.GunFinishReloadEvent"
import { $TimelessForgeEventWrappers$GunFinishReloadWrapper } from "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$GunFinishReloadWrapper"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export class $GunKubeJSEvents$GunFinishReloadEventJS extends $GunKubeJSEvents$GunEventJS<$GunFinishReloadEvent> implements $TimelessForgeEventWrappers$GunFinishReloadWrapper {
constructor(gunFinishReloadEvent0: $GunFinishReloadEvent$$Type)

public "getGunItemStack"(): $ItemStack
public "getLogicalSide"(): $LogicalSide
get "gunItemStack"(): $ItemStack
get "logicalSide"(): $LogicalSide
}
}

declare module "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$RenderItemInHandBobViewEventJS" {
import { $GunKubeJSEvents$GunEventJS } from "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$GunEventJS"
import { $RenderItemInHandBobEvent$BobView, $RenderItemInHandBobEvent$BobView$$Type } from "com.tacz.guns.api.client.event.RenderItemInHandBobEvent$BobView"

export class $GunKubeJSEvents$RenderItemInHandBobViewEventJS extends $GunKubeJSEvents$GunEventJS<$RenderItemInHandBobEvent$BobView> {
constructor(bobView0: $RenderItemInHandBobEvent$BobView$$Type)

}
}

declare module "com.tacz.guns.compat.kubejs.custom.CustomGunItemBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ItemBuilder } from "dev.latvian.mods.kubejs.item.ItemBuilder"

export class $CustomGunItemBuilder extends $ItemBuilder {
constructor(resourceLocation0: $ResourceLocation$$Type)

public "setTypeName"(string0: string): void
get "typeName"(): string
set "typeName"(value: string)
}
}

declare module "com.tacz.guns.api.client.event.RenderItemInHandBobEvent" {
import { $KubeJSGunEventPoster } from "com.tacz.guns.api.event.common.KubeJSGunEventPoster"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $RenderItemInHandBobEvent extends $Event implements $KubeJSGunEventPoster<$RenderItemInHandBobEvent> {
constructor()

public "postClientEventToKubeJS"(renderItemInHandBobEvent0: $RenderItemInHandBobEvent$$Type): void
public "postEventToKubeJS"(renderItemInHandBobEvent0: $RenderItemInHandBobEvent$$Type): void
public "postServerEventToKubeJS"(renderItemInHandBobEvent0: $RenderItemInHandBobEvent$$Type): void
}
}

declare module "com.tacz.guns.entity.EntityKineticBullet" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EntityType, $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $TagKey } from "net.minecraft.tags.TagKey"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $IEntityAdditionalSpawnData } from "net.minecraftforge.entity.IEntityAdditionalSpawnData"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Projectile, $Projectile$$Type } from "net.minecraft.world.entity.projectile.Projectile"
import { $BulletData$$Type } from "com.tacz.guns.resource.pojo.data.gun.BulletData"
import { $ObjectList } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $GunData$$Type } from "com.tacz.guns.resource.pojo.data.gun.GunData"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $Optional } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Vector2d$$Type } from "org.joml.Vector2d"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $EntityKineticBullet extends $Projectile implements $IEntityAdditionalSpawnData {
static readonly "PRETEND_MELEE_DAMAGE_ON": $TagKey<$EntityType<any>>
static readonly "TRACER_COLOR_OVERRIDER_KEY": string
static readonly "TRACER_SIZE_OVERRIDER_KEY": string
static readonly "TYPE": $EntityType<$EntityKineticBullet>
static readonly "USE_MAGIC_DAMAGE_ON": $TagKey<$EntityType<any>>
static readonly "USE_VOID_DAMAGE_ON": $TagKey<$EntityType<any>>

constructor(entityType0: $EntityType$$Type<$Projectile$$Type>, double1: double, double2: double, double3: double, level4: $Level$$Type)
constructor(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type, itemStack2: $ItemStack$$Type, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type, resourceLocation5: $ResourceLocation$$Type, boolean6: boolean, gunData7: $GunData$$Type, bulletData8: $BulletData$$Type)
constructor(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type, itemStack2: $ItemStack$$Type, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type, boolean5: boolean, gunData6: $GunData$$Type, bulletData7: $BulletData$$Type)
constructor(entityType0: $EntityType$$Type<$Projectile$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "applyShotgunDamageSpread"(int0: integer): void
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
public "getAmmoId"(): $ResourceLocation
public "getBlock"(): $BlockContainerJS
public "getCameraXRot"(): float
public "getCameraYRot"(): float
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getClassification"(boolean0: boolean): $MobCategory
public "getDamage"(vec30: $Vec3$$Type): float
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFirstPersonRenderOffset"(): $Vector3f
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getGunDisplayId"(): $ResourceLocation
public "getGunId"(): $ResourceLocation
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
public "getRandom"(): $RandomSource
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTracerColorOverride"(): $Optional<float[]>
public "getTracerSizeOverride"(): float
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
public "isTracerAmmo"(): boolean
public "isWaterCreature"(): boolean
public "m_150171_"(entity0: $Entity$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(distance: double): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "readSpawnData"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "self"(): $Entity
public "serializeNBT"(): $CompoundTag
public "setCameraXRot"(float0: float): void
public "setCameraYRot"(float0: float): void
public "setDynamicLightEnabled"(boolean0: boolean): void
public "setFirstPersonRenderOffset"(vector3f0: $Vector3f$$Type): void
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
public "shoot"(double0: double, double1: double, float2: float, vector2d3: $Vector2d$$Type): void
public "shootFromRotation"(entity0: $Entity$$Type, float1: float, float2: float, float3: float, float4: float, vector2d5: $Vector2d$$Type): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "spawn"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public "writeSpawnData"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "ammoId"(): $ResourceLocation
get "block"(): $BlockContainerJS
get "cameraXRot"(): float
get "cameraYRot"(): float
get "displayName"(): $Component
get "facing"(): $Direction
get "firstPersonRenderOffset"(): $Vector3f
get "gunDisplayId"(): $ResourceLocation
get "gunId"(): $ResourceLocation
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
get "random"(): $RandomSource
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "tracerColorOverride"(): $Optional<float[]>
get "tracerSizeOverride"(): float
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
get "tracerAmmo"(): boolean
get "waterCreature"(): boolean
set "cameraXRot"(value: float)
set "cameraYRot"(value: float)
set "dynamicLightEnabled"(value: boolean)
set "firstPersonRenderOffset"(value: $Vector3f$$Type)
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

declare module "com.tacz.guns.api.item.gun.AbstractGunItem" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $IItemHandler$$Type } from "net.minecraftforge.items.IItemHandler"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $GunTabType$$Type } from "com.tacz.guns.api.item.GunTabType"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $FireMode, $FireMode$$Type } from "com.tacz.guns.api.item.gun.FireMode"
import { $Holder } from "net.minecraft.core.Holder"
import { $ShooterDataHolder$$Type } from "com.tacz.guns.entity.shooter.ShooterDataHolder"
import { $Map } from "java.util.Map"
import { $Projectile$$Type } from "net.minecraft.world.entity.projectile.Projectile"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"
import { $AttachmentType$$Type } from "com.tacz.guns.api.item.attachment.AttachmentType"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $UUID$$Type } from "java.util.UUID"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $EnderMan$$Type } from "net.minecraft.world.entity.monster.EnderMan"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $FoodBuilder$$Type } from "dev.latvian.mods.kubejs.item.FoodBuilder"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $ICapabilityProvider } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ReloadState } from "com.tacz.guns.api.entity.ReloadState"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $IGun } from "com.tacz.guns.api.item.IGun"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $IAnimationItem } from "com.tacz.guns.api.item.IAnimationItem"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $FoodProperties } from "net.minecraft.world.food.FoodProperties"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $GunProperty$$Type } from "com.tacz.guns.api.GunProperty"
import { $Attribute, $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $MutableToolTier$$Type } from "dev.latvian.mods.kubejs.item.MutableToolTier"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Class$$Type } from "java.lang.Class"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $AbstractGunItem extends $Item implements $IGun, $IAnimationItem {
public "addAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type, name: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "addDummyAmmoAmount"(itemStack0: $ItemStack$$Type, int1: integer): void
public "allowAttachment"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "allowAttachmentType"(itemStack0: $ItemStack$$Type, attachmentType1: $AttachmentType$$Type): boolean
public "arch$holder"(): $Holder<$Item>
public "arch$registryName"(): $ResourceLocation
public "canApplyAtEnchantingTable"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
public "canContinueUsing"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "canDisableShield"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "canElytraFly"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "canEquip"(itemStack0: $ItemStack$$Type, equipmentSlot1: $EquipmentSlot$$Type, entity2: $Entity$$Type): boolean
public "canGrindstoneRepair"(itemStack0: $ItemStack$$Type): boolean
public "canPerformAction"(itemStack0: $ItemStack$$Type, toolAction1: $ToolAction$$Type): boolean
public "canReload"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type): boolean
public "canWalkOnPowderedSnow"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "createEntity"(level0: $Level$$Type, entity1: $Entity$$Type, itemStack2: $ItemStack$$Type): $Entity
public "damageItem"<T extends $LivingEntity>(itemStack0: $ItemStack$$Type, int1: integer, t2: T, consumer3: $Consumer$$Type<T>): integer
public "doBulletSpread"(shooterDataHolder0: $ShooterDataHolder$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, projectile3: $Projectile$$Type, int4: integer, float5: float, float6: float, float7: float, float8: float): void
public "doesSneakBypassUse"(itemStack0: $ItemStack$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "dropAllAmmo"(player0: $Player$$Type, itemStack1: $ItemStack$$Type): void
public "elytraFlightTick"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): boolean
public static "fillItemCategory"(gunTabType0: $GunTabType$$Type): $NonNullList<$ItemStack>
public "findAndExtractDummyAmmo"(itemStack0: $ItemStack$$Type, int1: integer): integer
public "findAndExtractInventoryAmmo"(iItemHandler0: $IItemHandler$$Type, itemStack1: $ItemStack$$Type, int2: integer): integer
/** @deprecated */
public "findAndExtractInventoryAmmos"(iItemHandler0: $IItemHandler$$Type, itemStack1: $ItemStack$$Type, int2: integer): integer
public "fireSelect"(shooterDataHolder0: $ShooterDataHolder$$Type, itemStack1: $ItemStack$$Type): void
public static "get"(item: $Item$$Type): $ResourceLocation
public static "get"(block: $Block$$Type): $ResourceLocation
public static "get"(state: $BlockState$$Type): $ResourceLocation
public static "get"(entity: $Entity$$Type): $ResourceLocation
public static "get"(stack: $ItemStack$$Type): $ResourceLocation
public static "get"(type: $EntityType$$Type<any>): $ResourceLocation
public "getAimingZoom"(itemStack0: $ItemStack$$Type): float
public "getAllEnchantments"(itemStack0: $ItemStack$$Type): $Map<$Enchantment, integer>
public "getArmorTexture"(itemStack0: $ItemStack$$Type, entity1: $Entity$$Type, equipmentSlot2: $EquipmentSlot$$Type, string3: string): string
public "getAttachment"(itemStack0: $ItemStack$$Type, attachmentType1: $AttachmentType$$Type): $ItemStack
public "getAttachmentId"(itemStack0: $ItemStack$$Type, attachmentType1: $AttachmentType$$Type): $ResourceLocation
public "getAttachmentTag"(itemStack0: $ItemStack$$Type, attachmentType1: $AttachmentType$$Type): $CompoundTag
public "getAttributeModifiers"(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
public "getAttributes"(attribute: $Attribute$$Type): $List<$AttributeModifier>
public "getBuiltInAttachmentId"(itemStack0: $ItemStack$$Type, attachmentType1: $AttachmentType$$Type): $ResourceLocation
public "getBuiltinAttachment"(itemStack0: $ItemStack$$Type, attachmentType1: $AttachmentType$$Type): $ItemStack
public "getBurnTime"(itemStack0: $ItemStack$$Type, recipeType1: $RecipeType$$Type<any>): integer
public "getCraftingRemainingItem"(itemStack0: $ItemStack$$Type): $ItemStack
public "getCreativeTab"(): string
public "getCreatorModId"(itemStack0: $ItemStack$$Type): string
public "getCurrentAmmoCount"(itemStack0: $ItemStack$$Type): integer
public "getDamage"(itemStack0: $ItemStack$$Type): integer
public "getDefaultTooltipHideFlags"(itemStack0: $ItemStack$$Type): integer
public "getDigSpeed"(): float
public "getDummyAmmoAmount"(itemStack0: $ItemStack$$Type): integer
public "getEnchantmentLevel"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): integer
public "getEnchantmentValue"(itemStack0: $ItemStack$$Type): integer
public "getEntityLifespan"(itemStack0: $ItemStack$$Type, level1: $Level$$Type): integer
public "getEquipmentSlot"(itemStack0: $ItemStack$$Type): $EquipmentSlot
public "getExp"(int0: integer): integer
public "getExp"(itemStack0: $ItemStack$$Type): integer
public "getExpCurrentLevel"(itemStack0: $ItemStack$$Type): integer
public "getExpToNextLevel"(itemStack0: $ItemStack$$Type): integer
public "getFireMode"(itemStack0: $ItemStack$$Type): $FireMode
public "getFoodProperties"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): $FoodProperties
public "getGunDisplayId"(itemStack0: $ItemStack$$Type): $ResourceLocation
public "getGunId"(itemStack0: $ItemStack$$Type): $ResourceLocation
public "getHeatAmount"(itemStack0: $ItemStack$$Type): float
public "getHighlightTip"(itemStack0: $ItemStack$$Type, component1: $Component$$Type): $Component
public static "getIGunOrNull"(itemStack0: $ItemStack$$Type): $IGun
public "getLaserColor"(itemStack0: $ItemStack$$Type): integer
public "getLevel"(itemStack0: $ItemStack$$Type): integer
public "getLevel"(int0: integer): integer
public static "getMainHandFireMode"(livingEntity0: $LivingEntity$$Type): $FireMode
/** @deprecated */
public static "getMainhandFireMode"(livingEntity0: $LivingEntity$$Type): $FireMode
public "getMaxDamage"(itemStack0: $ItemStack$$Type): integer
public "getMaxDummyAmmoAmount"(itemStack0: $ItemStack$$Type): integer
public "getMaxLevel"(): integer
public "getMaxStackSize"(itemStack0: $ItemStack$$Type): integer
public "getMod"(): string
public "getRPM"(itemStack0: $ItemStack$$Type): integer
public "getShareTag"(itemStack0: $ItemStack$$Type): $CompoundTag
public "getSweepHitBox"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): $AABB
public "getXpRepairRatio"(itemStack0: $ItemStack$$Type): float
public "hasAttachmentLock"(itemStack0: $ItemStack$$Type): boolean
public "hasBulletInBarrel"(itemStack0: $ItemStack$$Type): boolean
public "hasCraftingRemainingItem"(itemStack0: $ItemStack$$Type): boolean
public "hasCustomEntity"(itemStack0: $ItemStack$$Type): boolean
public "hasCustomLaserColor"(itemStack0: $ItemStack$$Type): boolean
public "hasHeatData"(itemStack0: $ItemStack$$Type): boolean
public "hasInventoryAmmo"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean): boolean
public "hasMaxDummyAmmo"(itemStack0: $ItemStack$$Type): boolean
public "initCapabilities"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): $ICapabilityProvider
public "installAttachment"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): void
public "interruptReload"(shooterDataHolder0: $ShooterDataHolder$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type): void
public "isBookEnchantable"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "isCanCrawl"(itemStack0: $ItemStack$$Type): boolean
public "isCorrectToolForDrops"(itemStack0: $ItemStack$$Type, blockState1: $BlockState$$Type): boolean
public "isDamageable"(itemStack0: $ItemStack$$Type): boolean
public "isDamaged"(itemStack0: $ItemStack$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isEnderMask"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, enderMan2: $EnderMan$$Type): boolean
public "isNotReplaceableByPickAction"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer): boolean
public "isOverheatLocked"(itemStack0: $ItemStack$$Type): boolean
public "isPiglinCurrency"(itemStack0: $ItemStack$$Type): boolean
public "isSame"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "lerpInaccuracy"(itemStack0: $ItemStack$$Type): float
public "lerpRPM"(itemStack0: $ItemStack$$Type): float
public static "mainHandHoldGun"(livingEntity0: $LivingEntity$$Type): boolean
/** @deprecated */
public static "mainhandHoldGun"(livingEntity0: $LivingEntity$$Type): boolean
public "makesPiglinsNeutral"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public static "matchesIgnoreCount"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "melee"(shooterDataHolder0: $ShooterDataHolder$$Type, livingEntity1: $LivingEntity$$Type, itemStack2: $ItemStack$$Type): void
public "modifyProperty"<T>(shooterDataHolder0: $ShooterDataHolder$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, gunProperty3: $GunProperty$$Type<any>, class4: $Class$$Type<T>, t5: T): T
public "modifyProperty"<T>(shooterDataHolder0: $ShooterDataHolder$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, string3: string, class4: $Class$$Type<T>, t5: T): T
public "modifyProperty"<T>(shooterDataHolder0: $ShooterDataHolder$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, string3: string, string4: string, class5: $Class$$Type<T>, t6: T): T
/** @deprecated */
public "onArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type): void
public "onBlockStartBreak"(itemStack0: $ItemStack$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
public "onDestroyed"(itemEntity0: $ItemEntity$$Type, damageSource1: $DamageSource$$Type): void
public "onDroppedByPlayer"(itemStack0: $ItemStack$$Type, player1: $Player$$Type): boolean
public "onEntityItemUpdate"(itemStack0: $ItemStack$$Type, itemEntity1: $ItemEntity$$Type): boolean
public "onEntitySwing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "onHorseArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, mob2: $Mob$$Type): void
public "onInventoryTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type, int3: integer, int4: integer): void
public "onItemUseFirst"(itemStack0: $ItemStack$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
public "onLeftClickEntity"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): boolean
public "onStopUsing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): void
public "readShareTag"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): void
public "reduceCurrentAmmoCount"(itemStack0: $ItemStack$$Type): void
public "removeAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type): void
public "setArmorKnockbackResistance"(knockbackResistance: double): void
public "setArmorProtection"(armorProtection: double): void
public "setArmorToughness"(armorToughness: double): void
public "setAttachmentLock"(itemStack0: $ItemStack$$Type, boolean1: boolean): void
public "setAttackDamage"(attackDamage: double): void
public "setAttackSpeed"(attackSpeed: double): void
public "setBulletInBarrel"(itemStack0: $ItemStack$$Type, boolean1: boolean): void
public "setCurrentAmmoCount"(itemStack0: $ItemStack$$Type, int1: integer): void
public "setDamage"(itemStack0: $ItemStack$$Type, int1: integer): void
public "setDigSpeed"(speed: float): void
public "setDummyAmmoAmount"(itemStack0: $ItemStack$$Type, int1: integer): void
public "setFireMode"(itemStack0: $ItemStack$$Type, fireMode1: $FireMode$$Type): void
public "setFoodProperties"(consumer: $Consumer$$Type<$FoodBuilder$$Type>): void
public "setGunDisplayId"(itemStack0: $ItemStack$$Type, resourceLocation1: $ResourceLocation$$Type): void
public "setGunId"(itemStack0: $ItemStack$$Type, resourceLocation1: $ResourceLocation$$Type): void
public "setHeatAmount"(itemStack0: $ItemStack$$Type, float1: float): void
public "setLaserColor"(itemStack0: $ItemStack$$Type, int1: integer): void
public "setMaxDummyAmmoAmount"(itemStack0: $ItemStack$$Type, int1: integer): void
public "setOverheatLocked"(itemStack0: $ItemStack$$Type, boolean1: boolean): void
public "setTier"(c: $Consumer$$Type<$MutableToolTier$$Type>): void
public "shoot"(shooterDataHolder0: $ShooterDataHolder$$Type, itemStack1: $ItemStack$$Type, supplier2: $Supplier$$Type<float>, supplier3: $Supplier$$Type<float>, livingEntity4: $LivingEntity$$Type): void
public "shouldCauseBlockBreakReset"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "shouldCauseReequipAnimation"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean): boolean
public "startBolt"(shooterDataHolder0: $ShooterDataHolder$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type): boolean
public "startReload"(shooterDataHolder0: $ShooterDataHolder$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type): boolean
public "tickBolt"(shooterDataHolder0: $ShooterDataHolder$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type): boolean
public "tickHeat"(shooterDataHolder0: $ShooterDataHolder$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type): void
public "tickReload"(shooterDataHolder0: $ShooterDataHolder$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type): $ReloadState
public "unloadAttachment"(itemStack0: $ItemStack$$Type, attachmentType1: $AttachmentType$$Type): void
public "useDummyAmmo"(itemStack0: $ItemStack$$Type): boolean
public "useInventoryAmmo"(itemStack0: $ItemStack$$Type): boolean
get "creativeTab"(): string
get "digSpeed"(): float
get "maxLevel"(): integer
get "mod"(): string
set "armorKnockbackResistance"(value: double)
set "armorProtection"(value: double)
set "armorToughness"(value: double)
set "attackDamage"(value: double)
set "attackSpeed"(value: double)
set "digSpeed"(value: float)
set "foodProperties"(value: $Consumer$$Type<$FoodBuilder$$Type>)
set "tier"(value: $Consumer$$Type<$MutableToolTier$$Type>)
}
}

declare module "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$GunDrawWrapper" {
import { $GunDrawEvent } from "com.tacz.guns.api.event.common.GunDrawEvent"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $TimelessForgeEventWrappers$ForgeEventWrapper } from "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$ForgeEventWrapper"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export interface $TimelessForgeEventWrappers$GunDrawWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$GunDrawEvent> {
"getCurrentGunItem"(): $ItemStack
"getEntity"(): $LivingEntity
"getForgeEvent"(): $GunDrawEvent
"getLogicalSide"(): $LogicalSide
"getPreviousGunItem"(): $ItemStack
get "currentGunItem"(): $ItemStack
get "entity"(): $LivingEntity
get "forgeEvent"(): $GunDrawEvent
get "logicalSide"(): $LogicalSide
get "previousGunItem"(): $ItemStack
}

export namespace $TimelessForgeEventWrappers$GunDrawWrapper {
const probejs$$marker: never
}
export abstract class $TimelessForgeEventWrappers$GunDrawWrapper$$Static implements $TimelessForgeEventWrappers$GunDrawWrapper {
}
}

declare module "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$EntityKillByGunWrapper" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $DamageSource } from "net.minecraft.world.damagesource.DamageSource"
import { $EntityKillByGunEvent } from "com.tacz.guns.api.event.common.EntityKillByGunEvent"
import { $GunDamageSourcePart$$Type } from "com.tacz.guns.api.event.common.GunDamageSourcePart"
import { $TimelessForgeEventWrappers$ForgeEventWrapper } from "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$ForgeEventWrapper"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export interface $TimelessForgeEventWrappers$EntityKillByGunWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$EntityKillByGunEvent> {
"getAttacker"(): $LivingEntity
"getBaseDamage"(): float
"getBullet"(): $Entity
"getDamageSource"(gunDamageSourcePart0: $GunDamageSourcePart$$Type): $DamageSource
"getForgeEvent"(): $EntityKillByGunEvent
"getGunDisplayId"(): $ResourceLocation
"getGunId"(): $ResourceLocation
"getHeadshotMultiplier"(): float
"getKilledEntity"(): $LivingEntity
"getLogicalSide"(): $LogicalSide
"isHeadShot"(): boolean
get "attacker"(): $LivingEntity
get "baseDamage"(): float
get "bullet"(): $Entity
get "forgeEvent"(): $EntityKillByGunEvent
get "gunDisplayId"(): $ResourceLocation
get "gunId"(): $ResourceLocation
get "headshotMultiplier"(): float
get "killedEntity"(): $LivingEntity
get "logicalSide"(): $LogicalSide
get "headShot"(): boolean
}

export namespace $TimelessForgeEventWrappers$EntityKillByGunWrapper {
const probejs$$marker: never
}
export abstract class $TimelessForgeEventWrappers$EntityKillByGunWrapper$$Static implements $TimelessForgeEventWrappers$EntityKillByGunWrapper {
}
}

declare module "com.tacz.guns.api.client.event.RenderLevelBobEvent$BobView" {
import { $RenderLevelBobEvent, $RenderLevelBobEvent$$Type } from "com.tacz.guns.api.client.event.RenderLevelBobEvent"

export class $RenderLevelBobEvent$BobView extends $RenderLevelBobEvent {
constructor()

public "postClientEventToKubeJS"(renderLevelBobEvent0: $RenderLevelBobEvent$$Type): void
public "postEventToKubeJS"(renderLevelBobEvent0: $RenderLevelBobEvent$$Type): void
public "postServerEventToKubeJS"(renderLevelBobEvent0: $RenderLevelBobEvent$$Type): void
}
}

declare module "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$ForgeEventWrapper" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export interface $TimelessForgeEventWrappers$ForgeEventWrapper<E extends $Event = $Event> {
"getForgeEvent"(): E
get "forgeEvent"(): E
}

export namespace $TimelessForgeEventWrappers$ForgeEventWrapper {
const probejs$$marker: never
}
export abstract class $TimelessForgeEventWrappers$ForgeEventWrapper$$Static<E extends $Event = $Event> implements $TimelessForgeEventWrappers$ForgeEventWrapper<E> {
}
}

declare module "com.tacz.guns.api.item.attachment.AttachmentType" {
import { $Enum } from "java.lang.Enum"

export class $AttachmentType extends $Enum<$AttachmentType> {
static readonly "EXTENDED_MAG": $AttachmentType
static readonly "GRIP": $AttachmentType
static readonly "LASER": $AttachmentType
static readonly "MUZZLE": $AttachmentType
static readonly "NONE": $AttachmentType
static readonly "SCOPE": $AttachmentType
static readonly "STOCK": $AttachmentType

public static "valueOf"(string0: string): $AttachmentType
public static "values"(): $AttachmentType[]
}
}

declare module "com.tacz.guns.api.event.common.GunShootEvent" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $KubeJSGunEventPoster } from "com.tacz.guns.api.event.common.KubeJSGunEventPoster"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $LogicalSide, $LogicalSide$$Type } from "net.minecraftforge.fml.LogicalSide"

export class $GunShootEvent extends $Event implements $KubeJSGunEventPoster<$GunShootEvent> {
constructor(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, logicalSide2: $LogicalSide$$Type)
constructor()

public "getGunItemStack"(): $ItemStack
public "getLogicalSide"(): $LogicalSide
public "getShooter"(): $LivingEntity
public "postClientEventToKubeJS"(gunShootEvent0: $GunShootEvent$$Type): void
public "postEventToKubeJS"(gunShootEvent0: $GunShootEvent$$Type): void
public "postServerEventToKubeJS"(gunShootEvent0: $GunShootEvent$$Type): void
get "gunItemStack"(): $ItemStack
get "logicalSide"(): $LogicalSide
get "shooter"(): $LivingEntity
}
}

declare module "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$RenderItemInHandBobHurtEventJS" {
import { $GunKubeJSEvents$GunEventJS } from "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$GunEventJS"
import { $RenderItemInHandBobEvent$BobHurt, $RenderItemInHandBobEvent$BobHurt$$Type } from "com.tacz.guns.api.client.event.RenderItemInHandBobEvent$BobHurt"

export class $GunKubeJSEvents$RenderItemInHandBobHurtEventJS extends $GunKubeJSEvents$GunEventJS<$RenderItemInHandBobEvent$BobHurt> {
constructor(bobHurt0: $RenderItemInHandBobEvent$BobHurt$$Type)

}
}

declare module "com.tacz.guns.resource.pojo.data.gun.ExtraDamage$DistanceDamagePair" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ExtraDamage$DistanceDamagePair {
constructor(float0: float, float1: float)

public "getDamage"(): float
public "getDistance"(): float
get "damage"(): float
get "distance"(): float
}
}

declare module "com.tacz.guns.resource.pojo.data.gun.MoveSpeed" {
import { $List$$Type } from "java.util.List"

export class $MoveSpeed {
constructor()
constructor(float0: float, float1: float, float2: float)

public "getAimMultiplier"(): float
public "getBaseMultiplier"(): float
public "getReloadMultiplier"(): float
public static "of"(moveSpeed0: $MoveSpeed$$Type, list1: $List$$Type<$MoveSpeed$$Type>): $MoveSpeed
get "aimMultiplier"(): float
get "baseMultiplier"(): float
get "reloadMultiplier"(): float
}
}

declare module "com.tacz.guns.api.event.common.GunFinishReloadEvent" {
import { $KubeJSGunEventPoster } from "com.tacz.guns.api.event.common.KubeJSGunEventPoster"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $LogicalSide, $LogicalSide$$Type } from "net.minecraftforge.fml.LogicalSide"

export class $GunFinishReloadEvent extends $Event implements $KubeJSGunEventPoster<$GunFinishReloadEvent> {
constructor(itemStack0: $ItemStack$$Type, logicalSide1: $LogicalSide$$Type)
constructor()

public "getGunItemStack"(): $ItemStack
public "getLogicalSide"(): $LogicalSide
public "postClientEventToKubeJS"(gunFinishReloadEvent0: $GunFinishReloadEvent$$Type): void
public "postEventToKubeJS"(gunFinishReloadEvent0: $GunFinishReloadEvent$$Type): void
public "postServerEventToKubeJS"(gunFinishReloadEvent0: $GunFinishReloadEvent$$Type): void
get "gunItemStack"(): $ItemStack
get "logicalSide"(): $LogicalSide
}
}

declare module "com.tacz.guns.api.item.gun.FireMode" {
import { $Enum } from "java.lang.Enum"

export class $FireMode extends $Enum<$FireMode> {
static readonly "AUTO": $FireMode
static readonly "BURST": $FireMode
static readonly "SEMI": $FireMode
static readonly "UNKNOWN": $FireMode

public static "valueOf"(string0: string): $FireMode
public static "values"(): $FireMode[]
}
}

declare module "com.tacz.guns.api.event.common.KubeJSGunEventPoster" {
import { $Event, $Event$$Type } from "net.minecraftforge.eventbus.api.Event"

export interface $KubeJSGunEventPoster<E extends $Event = $Event> {
"postClientEventToKubeJS"(e0: E): void
"postEventToKubeJS"(e0: E): void
"postServerEventToKubeJS"(e0: E): void
}

export namespace $KubeJSGunEventPoster {
const probejs$$marker: never
}
export abstract class $KubeJSGunEventPoster$$Static<E extends $Event = $Event> implements $KubeJSGunEventPoster<E> {
}
}

declare module "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$RenderLevelBobViewEventJS" {
import { $GunKubeJSEvents$GunEventJS } from "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$GunEventJS"
import { $RenderLevelBobEvent$BobView, $RenderLevelBobEvent$BobView$$Type } from "com.tacz.guns.api.client.event.RenderLevelBobEvent$BobView"

export class $GunKubeJSEvents$RenderLevelBobViewEventJS extends $GunKubeJSEvents$GunEventJS<$RenderLevelBobEvent$BobView> {
constructor(bobView0: $RenderLevelBobEvent$BobView$$Type)

}
}

declare module "com.tacz.guns.resource.pojo.data.attachment.AttachmentData" {
import { $JsonProperty, $JsonProperty$$Type } from "com.tacz.guns.api.modifier.JsonProperty"
import { $MeleeData } from "com.tacz.guns.resource.pojo.data.attachment.MeleeData"
import { $Map } from "java.util.Map"

export class $AttachmentData {
constructor()

public "addModifier"(string0: string, jsonProperty1: $JsonProperty$$Type<any>): void
public "getExtendedMagLevel"(): integer
public "getMeleeData"(): $MeleeData
public "getModifier"(): $Map<string, $JsonProperty<any>>
public "getWeight"(): float
get "extendedMagLevel"(): integer
get "meleeData"(): $MeleeData
get "modifier"(): $Map<string, $JsonProperty<any>>
get "weight"(): float
}
}

declare module "com.tacz.guns.compat.kubejs.util.GunNbtFactory" {
import { $AbstractGunItem, $AbstractGunItem$$Type } from "com.tacz.guns.api.item.gun.AbstractGunItem"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $TimelessItemNbtFactory } from "com.tacz.guns.compat.kubejs.util.TimelessItemNbtFactory"
import { $AttachmentType$$Type } from "com.tacz.guns.api.item.attachment.AttachmentType"
import { $EnumMap$$Type } from "java.util.EnumMap"
import { $FireMode$$Type } from "com.tacz.guns.api.item.gun.FireMode"

export class $GunNbtFactory extends $TimelessItemNbtFactory<$AbstractGunItem, $GunNbtFactory> {
constructor()
constructor(abstractGunItem0: $AbstractGunItem$$Type)

public "putAllAttachment"(enumMap0: $EnumMap$$Type<$AttachmentType$$Type, $ResourceLocation$$Type>): $GunNbtFactory
public "putAttachment"(attachmentType0: $AttachmentType$$Type, resourceLocation1: $ResourceLocation$$Type): $GunNbtFactory
public "setAmmoCount"(int0: integer): $GunNbtFactory
public "setBulletInBarrel"(boolean0: boolean): $GunNbtFactory
public "setFireMode"(fireMode0: $FireMode$$Type): $GunNbtFactory
set "ammoCount"(value: integer)
set "bulletInBarrel"(value: boolean)
set "fireMode"(value: $FireMode$$Type)
}
}

declare module "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$GunShootEventJS" {
import { $GunShootEvent, $GunShootEvent$$Type } from "com.tacz.guns.api.event.common.GunShootEvent"
import { $GunKubeJSEvents$GunEventJS } from "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$GunEventJS"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $TimelessForgeEventWrappers$GunShootWrapper } from "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$GunShootWrapper"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export class $GunKubeJSEvents$GunShootEventJS extends $GunKubeJSEvents$GunEventJS<$GunShootEvent> implements $TimelessForgeEventWrappers$GunShootWrapper {
constructor(gunShootEvent0: $GunShootEvent$$Type)

public "getGunItemStack"(): $ItemStack
public "getLogicalSide"(): $LogicalSide
public "getShooter"(): $LivingEntity
get "gunItemStack"(): $ItemStack
get "logicalSide"(): $LogicalSide
get "shooter"(): $LivingEntity
}
}

declare module "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$AmmoHitBlockWrapper" {
import { $AmmoHitBlockEvent } from "com.tacz.guns.api.event.server.AmmoHitBlockEvent"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $EntityKineticBullet } from "com.tacz.guns.entity.EntityKineticBullet"
import { $TimelessForgeEventWrappers$ForgeEventWrapper } from "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$ForgeEventWrapper"
import { $Level } from "net.minecraft.world.level.Level"

export interface $TimelessForgeEventWrappers$AmmoHitBlockWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$AmmoHitBlockEvent> {
"getAmmo"(): $EntityKineticBullet
"getForgeEvent"(): $AmmoHitBlockEvent
"getHitResult"(): $BlockHitResult
"getLevel"(): $Level
"getState"(): $BlockState
get "ammo"(): $EntityKineticBullet
get "forgeEvent"(): $AmmoHitBlockEvent
get "hitResult"(): $BlockHitResult
get "level"(): $Level
get "state"(): $BlockState
}

export namespace $TimelessForgeEventWrappers$AmmoHitBlockWrapper {
const probejs$$marker: never
}
export abstract class $TimelessForgeEventWrappers$AmmoHitBlockWrapper$$Static implements $TimelessForgeEventWrappers$AmmoHitBlockWrapper {
}
}

declare module "com.tacz.guns.compat.kubejs.util.TimelessItemNbtFactory" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export class $TimelessItemNbtFactory<T extends $Item = $Item, S extends $TimelessItemNbtFactory<T, S> = $TimelessItemNbtFactory<T, S>> {
constructor(t0: T)

public "build"(): $ItemStack
public "setCount"(int0: integer): S
public "setId"(resourceLocation0: $ResourceLocation$$Type): S
set "count"(value: integer)
set "id"(value: $ResourceLocation$$Type)
}
}

declare module "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$GunFireWrapper" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $GunFireEvent } from "com.tacz.guns.api.event.common.GunFireEvent"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $TimelessForgeEventWrappers$ForgeEventWrapper } from "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$ForgeEventWrapper"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export interface $TimelessForgeEventWrappers$GunFireWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$GunFireEvent> {
"getForgeEvent"(): $GunFireEvent
"getGunItemStack"(): $ItemStack
"getLogicalSide"(): $LogicalSide
"getShooter"(): $LivingEntity
get "forgeEvent"(): $GunFireEvent
get "gunItemStack"(): $ItemStack
get "logicalSide"(): $LogicalSide
get "shooter"(): $LivingEntity
}

export namespace $TimelessForgeEventWrappers$GunFireWrapper {
const probejs$$marker: never
}
export abstract class $TimelessForgeEventWrappers$GunFireWrapper$$Static implements $TimelessForgeEventWrappers$GunFireWrapper {
}
}

declare module "com.tacz.guns.resource.pojo.data.attachment.Modifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Modifier {
constructor()

public "getAddend"(): double
public "getFunction"(): string
public "getMultiplier"(): double
public "getPercent"(): double
/** @deprecated */
public "setAddend"(double0: double): void
/** @deprecated */
public "setPercent"(double0: double): void
get "addend"(): double
get "function"(): string
get "multiplier"(): double
get "percent"(): double
set "addend"(value: double)
set "percent"(value: double)
}
}

declare module "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$EntityHurtByGunPostEventJS" {
import { $EntityHurtByGunEvent$Post, $EntityHurtByGunEvent$Post$$Type } from "com.tacz.guns.api.event.common.EntityHurtByGunEvent$Post"
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $GunKubeJSEvents$GunEventJS } from "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$GunEventJS"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $DamageSource } from "net.minecraft.world.damagesource.DamageSource"
import { $GunDamageSourcePart$$Type } from "com.tacz.guns.api.event.common.GunDamageSourcePart"
import { $TimelessForgeEventWrappers$EntityHurtByGunWrapper } from "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$EntityHurtByGunWrapper"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export class $GunKubeJSEvents$EntityHurtByGunPostEventJS extends $GunKubeJSEvents$GunEventJS<$EntityHurtByGunEvent$Post> implements $TimelessForgeEventWrappers$EntityHurtByGunWrapper<$EntityHurtByGunEvent$Post> {
constructor(post0: $EntityHurtByGunEvent$Post$$Type)

public "getAttacker"(): $LivingEntity
public "getBaseAmount"(): float
public "getBullet"(): $Entity
public "getDamageSource"(gunDamageSourcePart0: $GunDamageSourcePart$$Type): $DamageSource
public "getGunId"(): $ResourceLocation
public "getHeadshotMultiplier"(): float
public "getHurtEntity"(): $Entity
public "getLogicalSide"(): $LogicalSide
public "isHeadShot"(): boolean
get "attacker"(): $LivingEntity
get "baseAmount"(): float
get "bullet"(): $Entity
get "gunId"(): $ResourceLocation
get "headshotMultiplier"(): float
get "hurtEntity"(): $Entity
get "logicalSide"(): $LogicalSide
get "headShot"(): boolean
}
}

declare module "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$GunReloadEventJS" {
import { $TimelessForgeEventWrappers$GunReloadWrapper } from "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$GunReloadWrapper"
import { $GunKubeJSEvents$GunEventJS } from "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$GunEventJS"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $GunReloadEvent, $GunReloadEvent$$Type } from "com.tacz.guns.api.event.common.GunReloadEvent"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export class $GunKubeJSEvents$GunReloadEventJS extends $GunKubeJSEvents$GunEventJS<$GunReloadEvent> implements $TimelessForgeEventWrappers$GunReloadWrapper {
constructor(gunReloadEvent0: $GunReloadEvent$$Type)

public "getEntity"(): $LivingEntity
public "getGunItemStack"(): $ItemStack
public "getLogicalSide"(): $LogicalSide
get "entity"(): $LivingEntity
get "gunItemStack"(): $ItemStack
get "logicalSide"(): $LogicalSide
}
}

declare module "com.tacz.guns.api.item.builder.AmmoItemBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export class $AmmoItemBuilder {
public "build"(): $ItemStack
public static "create"(): $AmmoItemBuilder
public "setCount"(int0: integer): $AmmoItemBuilder
public "setId"(resourceLocation0: $ResourceLocation$$Type): $AmmoItemBuilder
set "count"(value: integer)
set "id"(value: $ResourceLocation$$Type)
}
}

declare module "com.tacz.guns.api.entity.ReloadState" {
import { $ReloadState$StateType, $ReloadState$StateType$$Type } from "com.tacz.guns.api.entity.ReloadState$StateType"

export class $ReloadState {
static readonly "NOT_RELOADING_COUNTDOWN": integer

constructor()
constructor(reloadState0: $ReloadState$$Type)

public "getCountDown"(): long
public "getStateType"(): $ReloadState$StateType
public "setCountDown"(long0: long): void
public "setStateType"(stateType0: $ReloadState$StateType$$Type): void
get "countDown"(): long
get "stateType"(): $ReloadState$StateType
set "countDown"(value: long)
set "stateType"(value: $ReloadState$StateType$$Type)
}
}

declare module "com.tacz.guns.api.item.IGun" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AttachmentType$$Type } from "com.tacz.guns.api.item.attachment.AttachmentType"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ShooterDataHolder$$Type } from "com.tacz.guns.entity.shooter.ShooterDataHolder"
import { $GunProperty$$Type } from "com.tacz.guns.api.GunProperty"
import { $FireMode, $FireMode$$Type } from "com.tacz.guns.api.item.gun.FireMode"
import { $Class$$Type } from "java.lang.Class"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $IGun {
"addDummyAmmoAmount"(itemStack0: $ItemStack$$Type, int1: integer): void
"allowAttachment"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
"allowAttachmentType"(itemStack0: $ItemStack$$Type, attachmentType1: $AttachmentType$$Type): boolean
"dropAllAmmo"(player0: $Player$$Type, itemStack1: $ItemStack$$Type): void
"getAimingZoom"(itemStack0: $ItemStack$$Type): float
"getAttachment"(itemStack0: $ItemStack$$Type, attachmentType1: $AttachmentType$$Type): $ItemStack
"getAttachmentId"(itemStack0: $ItemStack$$Type, attachmentType1: $AttachmentType$$Type): $ResourceLocation
"getAttachmentTag"(itemStack0: $ItemStack$$Type, attachmentType1: $AttachmentType$$Type): $CompoundTag
"getBuiltInAttachmentId"(itemStack0: $ItemStack$$Type, attachmentType1: $AttachmentType$$Type): $ResourceLocation
"getBuiltinAttachment"(itemStack0: $ItemStack$$Type, attachmentType1: $AttachmentType$$Type): $ItemStack
"getCurrentAmmoCount"(itemStack0: $ItemStack$$Type): integer
"getDummyAmmoAmount"(itemStack0: $ItemStack$$Type): integer
"getExp"(int0: integer): integer
"getExp"(itemStack0: $ItemStack$$Type): integer
"getExpCurrentLevel"(itemStack0: $ItemStack$$Type): integer
"getExpToNextLevel"(itemStack0: $ItemStack$$Type): integer
"getFireMode"(itemStack0: $ItemStack$$Type): $FireMode
"getGunDisplayId"(itemStack0: $ItemStack$$Type): $ResourceLocation
"getGunId"(itemStack0: $ItemStack$$Type): $ResourceLocation
"getHeatAmount"(itemStack0: $ItemStack$$Type): float
"getLaserColor"(itemStack0: $ItemStack$$Type): integer
"getLevel"(itemStack0: $ItemStack$$Type): integer
"getLevel"(int0: integer): integer
"getMaxDummyAmmoAmount"(itemStack0: $ItemStack$$Type): integer
"getMaxLevel"(): integer
"getRPM"(itemStack0: $ItemStack$$Type): integer
"hasAttachmentLock"(itemStack0: $ItemStack$$Type): boolean
"hasBulletInBarrel"(itemStack0: $ItemStack$$Type): boolean
"hasCustomLaserColor"(itemStack0: $ItemStack$$Type): boolean
"hasHeatData"(itemStack0: $ItemStack$$Type): boolean
"hasInventoryAmmo"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean): boolean
"hasMaxDummyAmmo"(itemStack0: $ItemStack$$Type): boolean
"installAttachment"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): void
"isCanCrawl"(itemStack0: $ItemStack$$Type): boolean
"isOverheatLocked"(itemStack0: $ItemStack$$Type): boolean
"lerpInaccuracy"(itemStack0: $ItemStack$$Type): float
"lerpRPM"(itemStack0: $ItemStack$$Type): float
"modifyProperty"<T>(shooterDataHolder0: $ShooterDataHolder$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, gunProperty3: $GunProperty$$Type<any>, class4: $Class$$Type<T>, t5: T): T
"modifyProperty"<T>(shooterDataHolder0: $ShooterDataHolder$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, string3: string, class4: $Class$$Type<T>, t5: T): T
"modifyProperty"<T>(shooterDataHolder0: $ShooterDataHolder$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, string3: string, string4: string, class5: $Class$$Type<T>, t6: T): T
"reduceCurrentAmmoCount"(itemStack0: $ItemStack$$Type): void
"setAttachmentLock"(itemStack0: $ItemStack$$Type, boolean1: boolean): void
"setBulletInBarrel"(itemStack0: $ItemStack$$Type, boolean1: boolean): void
"setCurrentAmmoCount"(itemStack0: $ItemStack$$Type, int1: integer): void
"setDummyAmmoAmount"(itemStack0: $ItemStack$$Type, int1: integer): void
"setFireMode"(itemStack0: $ItemStack$$Type, fireMode1: $FireMode$$Type): void
"setGunDisplayId"(itemStack0: $ItemStack$$Type, resourceLocation1: $ResourceLocation$$Type): void
"setGunId"(itemStack0: $ItemStack$$Type, resourceLocation1: $ResourceLocation$$Type): void
"setHeatAmount"(itemStack0: $ItemStack$$Type, float1: float): void
"setLaserColor"(itemStack0: $ItemStack$$Type, int1: integer): void
"setMaxDummyAmmoAmount"(itemStack0: $ItemStack$$Type, int1: integer): void
"setOverheatLocked"(itemStack0: $ItemStack$$Type, boolean1: boolean): void
"unloadAttachment"(itemStack0: $ItemStack$$Type, attachmentType1: $AttachmentType$$Type): void
"useDummyAmmo"(itemStack0: $ItemStack$$Type): boolean
"useInventoryAmmo"(itemStack0: $ItemStack$$Type): boolean
get "maxLevel"(): integer
}

export namespace $IGun {
function getIGunOrNull(itemStack0: $ItemStack$$Type): $IGun
function getMainHandFireMode(livingEntity0: $LivingEntity$$Type): $FireMode
function getMainhandFireMode(livingEntity0: $LivingEntity$$Type): $FireMode
function mainHandHoldGun(livingEntity0: $LivingEntity$$Type): boolean
function mainhandHoldGun(livingEntity0: $LivingEntity$$Type): boolean
}
export abstract class $IGun$$Static implements $IGun {
static "getIGunOrNull"(itemStack0: $ItemStack$$Type): $IGun
static "getMainHandFireMode"(livingEntity0: $LivingEntity$$Type): $FireMode
/** @deprecated */
static "getMainhandFireMode"(livingEntity0: $LivingEntity$$Type): $FireMode
static "mainHandHoldGun"(livingEntity0: $LivingEntity$$Type): boolean
/** @deprecated */
static "mainhandHoldGun"(livingEntity0: $LivingEntity$$Type): boolean
}
}

declare module "com.tacz.guns.resource.pojo.data.gun.GunRecoil" {
import { $PolynomialSplineFunction } from "org.apache.commons.math3.analysis.polynomials.PolynomialSplineFunction"
import { $GunRecoilKeyFrame, $GunRecoilKeyFrame$$Type } from "com.tacz.guns.resource.pojo.data.gun.GunRecoilKeyFrame"

export class $GunRecoil {
constructor()

public "genPitchSplineFunction"(float0: float): $PolynomialSplineFunction
public "genYawSplineFunction"(float0: float): $PolynomialSplineFunction
public "getPitch"(): $GunRecoilKeyFrame[]
public "getYaw"(): $GunRecoilKeyFrame[]
public "setPitch"(gunRecoilKeyFrame0s: $GunRecoilKeyFrame$$Type[]): void
public "setYaw"(gunRecoilKeyFrame0s: $GunRecoilKeyFrame$$Type[]): void
get "pitch"(): $GunRecoilKeyFrame[]
get "yaw"(): $GunRecoilKeyFrame[]
set "pitch"(value: $GunRecoilKeyFrame$$Type[])
set "yaw"(value: $GunRecoilKeyFrame$$Type[])
}
}

declare module "com.tacz.guns.api.GunProperties" {
import { $MoveSpeed } from "com.tacz.guns.resource.pojo.data.gun.MoveSpeed"
import { $Pair } from "it.unimi.dsi.fastutil.Pair"
import { $ExtraDamage$DistanceDamagePair } from "com.tacz.guns.resource.pojo.data.gun.ExtraDamage$DistanceDamagePair"
import { $Map } from "java.util.Map"
import { $InaccuracyType } from "com.tacz.guns.resource.pojo.data.gun.InaccuracyType"
import { $ParameterizedCachePair } from "com.tacz.guns.api.modifier.ParameterizedCachePair"
import { $GunProperty } from "com.tacz.guns.api.GunProperty"
import { $ExplosionData } from "com.tacz.guns.resource.pojo.data.gun.ExplosionData"
import { $Ignite } from "com.tacz.guns.resource.pojo.data.gun.Ignite"
import { $LinkedList } from "java.util.LinkedList"

export class $GunProperties {
static readonly "ADS_TIME": $GunProperty<float>
/** @deprecated */
static readonly "AIM_INACCURACY": $GunProperty<$Map<$InaccuracyType, float>>
static readonly "AMMO_SPEED": $GunProperty<float>
static readonly "ARMOR_IGNORE": $GunProperty<float>
static readonly "DAMAGE": $GunProperty<$LinkedList<$ExtraDamage$DistanceDamagePair>>
static readonly "EFFECTIVE_RANGE": $GunProperty<float>
static readonly "EXPLOSION": $GunProperty<$ExplosionData>
static readonly "HEADSHOT_MULTIPLIER": $GunProperty<float>
static readonly "IGNITE": $GunProperty<$Ignite>
static readonly "INACCURACY": $GunProperty<$Map<$InaccuracyType, float>>
static readonly "KNOCKBACK": $GunProperty<float>
static readonly "MOVE_SPEED": $GunProperty<$MoveSpeed>
static readonly "PIERCE": $GunProperty<integer>
static readonly "RECOIL": $GunProperty<$ParameterizedCachePair<float, float>>
static readonly "ROUNDS_PER_MINUTE": $GunProperty<integer>
static readonly "SILENCE": $GunProperty<$Pair<integer, boolean>>
static readonly "WEIGHT": $GunProperty<float>

public static "all"(): $Map<string, $GunProperty<any>>
public static "allCacheModifiableByScript"(): $Map<string, $GunProperty<any>>
}
}

declare module "com.tacz.guns.api.client.event.BeforeRenderHandEvent" {
import { $KubeJSGunEventPoster } from "com.tacz.guns.api.event.common.KubeJSGunEventPoster"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $BeforeRenderHandEvent extends $Event implements $KubeJSGunEventPoster<$BeforeRenderHandEvent> {
constructor()
constructor(poseStack0: $PoseStack$$Type)

public "getPoseStack"(): $PoseStack
public "postClientEventToKubeJS"(beforeRenderHandEvent0: $BeforeRenderHandEvent$$Type): void
public "postEventToKubeJS"(beforeRenderHandEvent0: $BeforeRenderHandEvent$$Type): void
public "postServerEventToKubeJS"(beforeRenderHandEvent0: $BeforeRenderHandEvent$$Type): void
get "poseStack"(): $PoseStack
}
}

declare module "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$EntityKillByGunEventJS" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $GunKubeJSEvents$GunEventJS } from "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$GunEventJS"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $DamageSource } from "net.minecraft.world.damagesource.DamageSource"
import { $EntityKillByGunEvent, $EntityKillByGunEvent$$Type } from "com.tacz.guns.api.event.common.EntityKillByGunEvent"
import { $GunDamageSourcePart$$Type } from "com.tacz.guns.api.event.common.GunDamageSourcePart"
import { $TimelessForgeEventWrappers$EntityKillByGunWrapper } from "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$EntityKillByGunWrapper"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export class $GunKubeJSEvents$EntityKillByGunEventJS extends $GunKubeJSEvents$GunEventJS<$EntityKillByGunEvent> implements $TimelessForgeEventWrappers$EntityKillByGunWrapper {
constructor(entityKillByGunEvent0: $EntityKillByGunEvent$$Type)

public "getAttacker"(): $LivingEntity
public "getBaseDamage"(): float
public "getBullet"(): $Entity
public "getDamageSource"(gunDamageSourcePart0: $GunDamageSourcePart$$Type): $DamageSource
public "getGunDisplayId"(): $ResourceLocation
public "getGunId"(): $ResourceLocation
public "getHeadshotMultiplier"(): float
public "getKilledEntity"(): $LivingEntity
public "getLogicalSide"(): $LogicalSide
public "isHeadShot"(): boolean
get "attacker"(): $LivingEntity
get "baseDamage"(): float
get "bullet"(): $Entity
get "gunDisplayId"(): $ResourceLocation
get "gunId"(): $ResourceLocation
get "headshotMultiplier"(): float
get "killedEntity"(): $LivingEntity
get "logicalSide"(): $LogicalSide
get "headShot"(): boolean
}
}

declare module "com.tacz.guns.compat.kubejs.util.GunSmithTableResultInfo" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $GunSmithTableResultInfo$OutputGroupName$$Type } from "com.tacz.guns.compat.kubejs.util.GunSmithTableResultInfo$OutputGroupName"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $GunSmithTableResultInfo {
public static "create"(): $GunSmithTableResultInfo
public static "createFromItemStack"(itemStack0: $ItemStack$$Type): $GunSmithTableResultInfo
public static "createFromJson"(jsonObject0: $JsonObject$$Type): $GunSmithTableResultInfo
public "getCount"(): integer
public "getCustomItem"(): $JsonObject
public "getId"(): $ResourceLocation
public "getNbt"(): $CompoundTag
public "getType"(): string
public static "of"(object0: any): $GunSmithTableResultInfo
public "setCount"(int0: integer): $GunSmithTableResultInfo
public "setCustomItem"(jsonObject0: $JsonObject$$Type): $GunSmithTableResultInfo
public "setGroup"(outputGroupName0: $GunSmithTableResultInfo$OutputGroupName$$Type): $GunSmithTableResultInfo
public "setGroupName"(string0: string): $GunSmithTableResultInfo
public "setId"(resourceLocation0: $ResourceLocation$$Type): $GunSmithTableResultInfo
public "setNbt"(compoundTag0: $CompoundTag$$Type): $GunSmithTableResultInfo
public "setType"(string0: string): $GunSmithTableResultInfo
public "toJson"(): $JsonObject
get "count"(): integer
get "customItem"(): $JsonObject
get "id"(): $ResourceLocation
get "nbt"(): $CompoundTag
get "type"(): string
set "count"(value: integer)
set "customItem"(value: $JsonObject$$Type)
set "group"(value: $GunSmithTableResultInfo$OutputGroupName$$Type)
set "groupName"(value: string)
set "id"(value: $ResourceLocation$$Type)
set "nbt"(value: $CompoundTag$$Type)
set "type"(value: string)
}
}

declare module "com.tacz.guns.resource.pojo.data.gun.GunFireModeAdjustData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $GunFireModeAdjustData {
constructor()

public "getAimInaccuracy"(): float
public "getArmorIgnore"(): float
public "getDamageAmount"(): float
public "getHeadShotMultiplier"(): float
public "getKnockback"(): float
public "getOtherInaccuracy"(): float
public "getRoundsPerMinute"(): integer
public "getSpeed"(): float
get "aimInaccuracy"(): float
get "armorIgnore"(): float
get "damageAmount"(): float
get "headShotMultiplier"(): float
get "knockback"(): float
get "otherInaccuracy"(): float
get "roundsPerMinute"(): integer
get "speed"(): float
}
}

declare module "com.tacz.guns.api.modifier.ParameterizedCachePair" {
import { $List$$Type } from "java.util.List"
import { $Modifier$$Type } from "com.tacz.guns.resource.pojo.data.attachment.Modifier"
import { $Pair } from "it.unimi.dsi.fastutil.Pair"
import { $Comparator } from "java.util.Comparator"
import { $ParameterizedCache, $ParameterizedCache$$Type } from "com.tacz.guns.api.modifier.ParameterizedCache"

export class $ParameterizedCachePair<L = any, R = any> implements $Pair<$ParameterizedCache<L>, $ParameterizedCache<R>> {
public "first"(): $ParameterizedCache<L>
public "first"(parameterizedCache0: $ParameterizedCache$$Type<L>): $Pair<$ParameterizedCache<L>, $ParameterizedCache<R>>
public "key"(parameterizedCache0: $ParameterizedCache$$Type<L>): $Pair<$ParameterizedCache<L>, $ParameterizedCache<R>>
public "key"(): $ParameterizedCache<L>
public "left"(parameterizedCache0: $ParameterizedCache$$Type<L>): $Pair<$ParameterizedCache<L>, $ParameterizedCache<R>>
public static "lexComparator"<L, R>(): $Comparator<$Pair<L, R>>
public static "of"<L, R>(list0: $List$$Type<$Modifier$$Type>, list1: $List$$Type<$Modifier$$Type>, l2: L, r3: R): $ParameterizedCachePair<L, R>
public static "of"<L, R>(l0: L, r1: R): $ParameterizedCachePair<L, R>
public "right"(parameterizedCache0: $ParameterizedCache$$Type<R>): $Pair<$ParameterizedCache<L>, $ParameterizedCache<R>>
public "second"(): $ParameterizedCache<R>
public "second"(parameterizedCache0: $ParameterizedCache$$Type<R>): $Pair<$ParameterizedCache<L>, $ParameterizedCache<R>>
public "value"(): $ParameterizedCache<R>
public "value"(parameterizedCache0: $ParameterizedCache$$Type<R>): $Pair<$ParameterizedCache<L>, $ParameterizedCache<R>>
}
}

declare module "com.tacz.guns.api.item.IAnimationItem" {
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $IAnimationItem {
"isSame"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
}

export namespace $IAnimationItem {
function matchesIgnoreCount(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
}
export abstract class $IAnimationItem$$Static implements $IAnimationItem {
static "matchesIgnoreCount"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
}
}

declare module "com.tacz.guns.resource.pojo.data.gun.GunHeatData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $GunHeatData {
constructor()

public "getCoolingDelay"(): long
public "getCoolingMultiplier"(): float
public "getHeatMax"(): float
public "getHeatPerShot"(): float
public "getMaxInaccuracy"(): float
public "getMaxRpmMod"(): float
public "getMinInaccuracy"(): float
public "getMinRpmMod"(): float
public "getOverHeatTime"(): long
get "coolingDelay"(): long
get "coolingMultiplier"(): float
get "heatMax"(): float
get "heatPerShot"(): float
get "maxInaccuracy"(): float
get "maxRpmMod"(): float
get "minInaccuracy"(): float
get "minRpmMod"(): float
get "overHeatTime"(): long
}
}

declare module "com.tacz.guns.api.client.event.RenderLevelBobEvent$BobHurt" {
import { $RenderLevelBobEvent, $RenderLevelBobEvent$$Type } from "com.tacz.guns.api.client.event.RenderLevelBobEvent"

export class $RenderLevelBobEvent$BobHurt extends $RenderLevelBobEvent {
constructor()

public "postClientEventToKubeJS"(renderLevelBobEvent0: $RenderLevelBobEvent$$Type): void
public "postEventToKubeJS"(renderLevelBobEvent0: $RenderLevelBobEvent$$Type): void
public "postServerEventToKubeJS"(renderLevelBobEvent0: $RenderLevelBobEvent$$Type): void
}
}

declare module "com.tacz.guns.resource.pojo.data.gun.GunReloadTime" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $GunReloadTime {
constructor()

public "getEmptyTime"(): float
public "getTacticalTime"(): float
get "emptyTime"(): float
get "tacticalTime"(): float
}
}

declare module "com.tacz.guns.api.event.common.EntityKillByGunEvent" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Pair$$Type } from "org.apache.commons.lang3.tuple.Pair"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $GunDamageSourcePart$$Type } from "com.tacz.guns.api.event.common.GunDamageSourcePart"
import { $KubeJSGunEventPoster } from "com.tacz.guns.api.event.common.KubeJSGunEventPoster"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $LogicalSide, $LogicalSide$$Type } from "net.minecraftforge.fml.LogicalSide"

export class $EntityKillByGunEvent extends $Event implements $KubeJSGunEventPoster<$EntityKillByGunEvent> {
constructor(entity0: $Entity$$Type, livingEntity1: $LivingEntity$$Type, livingEntity2: $LivingEntity$$Type, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type, float5: float, pair6: $Pair$$Type<$DamageSource$$Type, $DamageSource$$Type>, boolean7: boolean, float8: float, logicalSide9: $LogicalSide$$Type)
constructor()

public "getAttacker"(): $LivingEntity
public "getBaseDamage"(): float
public "getBullet"(): $Entity
public "getDamageSource"(gunDamageSourcePart0: $GunDamageSourcePart$$Type): $DamageSource
public "getGunDisplayId"(): $ResourceLocation
public "getGunId"(): $ResourceLocation
public "getHeadshotMultiplier"(): float
public "getKilledEntity"(): $LivingEntity
public "getLogicalSide"(): $LogicalSide
public "isHeadShot"(): boolean
public "postClientEventToKubeJS"(entityKillByGunEvent0: $EntityKillByGunEvent$$Type): void
public "postEventToKubeJS"(entityKillByGunEvent0: $EntityKillByGunEvent$$Type): void
public "postServerEventToKubeJS"(entityKillByGunEvent0: $EntityKillByGunEvent$$Type): void
get "attacker"(): $LivingEntity
get "baseDamage"(): float
get "bullet"(): $Entity
get "gunDisplayId"(): $ResourceLocation
get "gunId"(): $ResourceLocation
get "headshotMultiplier"(): float
get "killedEntity"(): $LivingEntity
get "logicalSide"(): $LogicalSide
get "headShot"(): boolean
}
}

declare module "com.tacz.guns.api.entity.KnockBackModifier" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

export interface $KnockBackModifier {
"getKnockBackStrength"(): double
"resetKnockBackStrength"(): void
"setKnockBackStrength"(double0: double): void
get "knockBackStrength"(): double
set "knockBackStrength"(value: double)
}

export namespace $KnockBackModifier {
function fromLivingEntity(livingEntity0: $LivingEntity$$Type): $KnockBackModifier
}
export abstract class $KnockBackModifier$$Static implements $KnockBackModifier {
static "fromLivingEntity"(livingEntity0: $LivingEntity$$Type): $KnockBackModifier
}
}

declare module "com.tacz.guns.api.client.event.RenderLevelBobEvent" {
import { $KubeJSGunEventPoster } from "com.tacz.guns.api.event.common.KubeJSGunEventPoster"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $RenderLevelBobEvent extends $Event implements $KubeJSGunEventPoster<$RenderLevelBobEvent> {
constructor()

public "postClientEventToKubeJS"(renderLevelBobEvent0: $RenderLevelBobEvent$$Type): void
public "postEventToKubeJS"(renderLevelBobEvent0: $RenderLevelBobEvent$$Type): void
public "postServerEventToKubeJS"(renderLevelBobEvent0: $RenderLevelBobEvent$$Type): void
}
}

declare module "com.tacz.guns.api.client.event.RenderItemInHandBobEvent$BobView" {
import { $RenderItemInHandBobEvent, $RenderItemInHandBobEvent$$Type } from "com.tacz.guns.api.client.event.RenderItemInHandBobEvent"

export class $RenderItemInHandBobEvent$BobView extends $RenderItemInHandBobEvent {
constructor()

public "postClientEventToKubeJS"(renderItemInHandBobEvent0: $RenderItemInHandBobEvent$$Type): void
public "postEventToKubeJS"(renderItemInHandBobEvent0: $RenderItemInHandBobEvent$$Type): void
public "postServerEventToKubeJS"(renderItemInHandBobEvent0: $RenderItemInHandBobEvent$$Type): void
}
}

declare module "com.tacz.guns.compat.kubejs.util.GunSmithTableResultInfo$OutputGroupName" {
import { $Enum } from "java.lang.Enum"

export class $GunSmithTableResultInfo$OutputGroupName extends $Enum<$GunSmithTableResultInfo$OutputGroupName> {
static readonly "AMMO": $GunSmithTableResultInfo$OutputGroupName
static readonly "EXTENDED_MAG": $GunSmithTableResultInfo$OutputGroupName
static readonly "GRIP": $GunSmithTableResultInfo$OutputGroupName
static readonly "MG": $GunSmithTableResultInfo$OutputGroupName
static readonly "MUZZLE": $GunSmithTableResultInfo$OutputGroupName
static readonly "PISTOL": $GunSmithTableResultInfo$OutputGroupName
static readonly "RIFLE": $GunSmithTableResultInfo$OutputGroupName
static readonly "RPG": $GunSmithTableResultInfo$OutputGroupName
static readonly "SCOPE": $GunSmithTableResultInfo$OutputGroupName
static readonly "SHOTGUN": $GunSmithTableResultInfo$OutputGroupName
static readonly "SMG": $GunSmithTableResultInfo$OutputGroupName
static readonly "SNIPER": $GunSmithTableResultInfo$OutputGroupName
static readonly "STOCK": $GunSmithTableResultInfo$OutputGroupName

public "getName"(): string
public static "valueOf"(string0: string): $GunSmithTableResultInfo$OutputGroupName
public static "values"(): $GunSmithTableResultInfo$OutputGroupName[]
get "name"(): string
}
}

declare module "com.tacz.guns.resource.pojo.data.gun.GunData" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $GunMeleeData } from "com.tacz.guns.resource.pojo.data.gun.GunMeleeData"
import { $GunHeatData } from "com.tacz.guns.resource.pojo.data.gun.GunHeatData"
import { $AttachmentType } from "com.tacz.guns.api.item.attachment.AttachmentType"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AttachmentData } from "com.tacz.guns.resource.pojo.data.attachment.AttachmentData"
import { $FireMode, $FireMode$$Type } from "com.tacz.guns.api.item.gun.FireMode"
import { $Bolt } from "com.tacz.guns.resource.pojo.data.gun.Bolt"
import { $FireSound } from "com.tacz.guns.resource.pojo.data.gun.FireSound"
import { $List } from "java.util.List"
import { $MoveSpeed } from "com.tacz.guns.resource.pojo.data.gun.MoveSpeed"
import { $Map, $Map$$Type } from "java.util.Map"
import { $GunFireModeAdjustData } from "com.tacz.guns.resource.pojo.data.gun.GunFireModeAdjustData"
import { $InaccuracyType, $InaccuracyType$$Type } from "com.tacz.guns.resource.pojo.data.gun.InaccuracyType"
import { $GunReloadData } from "com.tacz.guns.resource.pojo.data.gun.GunReloadData"
import { $BulletData } from "com.tacz.guns.resource.pojo.data.gun.BulletData"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $BurstData } from "com.tacz.guns.resource.pojo.data.gun.BurstData"
import { $GunRecoil } from "com.tacz.guns.resource.pojo.data.gun.GunRecoil"

export class $GunData {
constructor()

public "canSlide"(): boolean
public "getAimTime"(): float
public "getAllowAttachments"(): $List<$AttachmentType>
public "getAmmoAmount"(): integer
public "getAmmoId"(): $ResourceLocation
public "getBolt"(): $Bolt
public "getBoltActionTime"(): float
public "getBoltFeedTime"(): float
public "getBuiltInAttachments"(): $Map<$AttachmentType, $ResourceLocation>
public "getBulletData"(): $BulletData
public "getBurstData"(): $BurstData
public "getBurstShootInterval"(): long
public "getCrawlRecoilMultiplier"(): float
public "getDrawTime"(): float
public "getExclusiveAttachments"(): $Map<$ResourceLocation, $AttachmentData>
public "getExtendedMagAmmoAmount"(): integer[]
public "getFireModeAdjustData"(fireMode0: $FireMode$$Type): $GunFireModeAdjustData
public "getFireModeSet"(): $List<$FireMode>
public "getFireSound"(): $FireSound
public "getHeatData"(): $GunHeatData
public "getHurtBobTweakMultiplier"(): float
public "getInaccuracy"(): $Map<$InaccuracyType, float>
public "getInaccuracy"(inaccuracyType0: $InaccuracyType$$Type, float1: float): float
public "getInaccuracy"(inaccuracyType0: $InaccuracyType$$Type): float
public "getMeleeData"(): $GunMeleeData
public "getMoveSpeed"(): $MoveSpeed
public "getPutAwayTime"(): float
public "getRecoil"(): $GunRecoil
public "getReloadData"(): $GunReloadData
public "getRoundsPerMinute"(fireMode0: $FireMode$$Type): integer
public "getRoundsPerMinute"(): integer
public "getScript"(): $ResourceLocation
public "getScriptParam"(): $Map<string, any>
public "getShootInterval"(livingEntity0: $LivingEntity$$Type, fireMode1: $FireMode$$Type, itemStack2: $ItemStack$$Type): long
public "getSprintTime"(): float
public "getWeight"(): float
public "hasHeatData"(): boolean
public "isCanCrawl"(): boolean
public "setInaccuracy"(map0: $Map$$Type<$InaccuracyType$$Type, float>): void
get "aimTime"(): float
get "allowAttachments"(): $List<$AttachmentType>
get "ammoAmount"(): integer
get "ammoId"(): $ResourceLocation
get "bolt"(): $Bolt
get "boltActionTime"(): float
get "boltFeedTime"(): float
get "builtInAttachments"(): $Map<$AttachmentType, $ResourceLocation>
get "bulletData"(): $BulletData
get "burstData"(): $BurstData
get "burstShootInterval"(): long
get "crawlRecoilMultiplier"(): float
get "drawTime"(): float
get "exclusiveAttachments"(): $Map<$ResourceLocation, $AttachmentData>
get "extendedMagAmmoAmount"(): integer[]
get "fireModeSet"(): $List<$FireMode>
get "fireSound"(): $FireSound
get "heatData"(): $GunHeatData
get "hurtBobTweakMultiplier"(): float
get "inaccuracy"(): $Map<$InaccuracyType, float>
get "meleeData"(): $GunMeleeData
get "moveSpeed"(): $MoveSpeed
get "putAwayTime"(): float
get "recoil"(): $GunRecoil
get "reloadData"(): $GunReloadData
get "roundsPerMinute"(): integer
get "script"(): $ResourceLocation
get "scriptParam"(): $Map<string, any>
get "sprintTime"(): float
get "weight"(): float
get "canCrawl"(): boolean
set "inaccuracy"(value: $Map$$Type<$InaccuracyType$$Type, float>)
}
}

declare module "com.tacz.guns.api.entity.ShootResult" {
import { $Enum } from "java.lang.Enum"

export class $ShootResult extends $Enum<$ShootResult> {
static readonly "COOL_DOWN": $ShootResult
static readonly "FORGE_EVENT_CANCEL": $ShootResult
static readonly "ID_NOT_EXIST": $ShootResult
static readonly "IS_BOLTING": $ShootResult
static readonly "IS_DRAWING": $ShootResult
static readonly "IS_MELEE": $ShootResult
static readonly "IS_RELOADING": $ShootResult
static readonly "IS_SPRINTING": $ShootResult
static readonly "NEED_BOLT": $ShootResult
static readonly "NETWORK_FAIL": $ShootResult
static readonly "NOT_DRAW": $ShootResult
static readonly "NOT_GUN": $ShootResult
static readonly "NO_AMMO": $ShootResult
static readonly "OVERHEATED": $ShootResult
static readonly "SUCCESS": $ShootResult
static readonly "UNKNOWN_FAIL": $ShootResult

public static "valueOf"(string0: string): $ShootResult
public static "values"(): $ShootResult[]
}
}

declare module "com.tacz.guns.api.event.common.EntityHurtByGunEvent$Pre" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EntityHurtByGunEvent, $EntityHurtByGunEvent$$Type } from "com.tacz.guns.api.event.common.EntityHurtByGunEvent"
import { $Pair$$Type } from "org.apache.commons.lang3.tuple.Pair"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $GunDamageSourcePart$$Type } from "com.tacz.guns.api.event.common.GunDamageSourcePart"
import { $LogicalSide$$Type } from "net.minecraftforge.fml.LogicalSide"

export class $EntityHurtByGunEvent$Pre extends $EntityHurtByGunEvent {
constructor(entity0: $Entity$$Type, entity1: $Entity$$Type, livingEntity2: $LivingEntity$$Type, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type, float5: float, pair6: $Pair$$Type<$DamageSource$$Type, $DamageSource$$Type>, boolean7: boolean, float8: float, logicalSide9: $LogicalSide$$Type)
constructor()

public "postClientEventToKubeJS"(entityHurtByGunEvent0: $EntityHurtByGunEvent$$Type): void
public "postEventToKubeJS"(entityHurtByGunEvent0: $EntityHurtByGunEvent$$Type): void
public "postServerEventToKubeJS"(entityHurtByGunEvent0: $EntityHurtByGunEvent$$Type): void
public "setAttacker"(livingEntity0: $LivingEntity$$Type): void
public "setBaseAmount"(float0: float): void
public "setDamageSource"(gunDamageSourcePart0: $GunDamageSourcePart$$Type, damageSource1: $DamageSource$$Type): void
public "setGunId"(resourceLocation0: $ResourceLocation$$Type): void
public "setHeadshot"(boolean0: boolean): void
public "setHeadshotMultiplier"(float0: float): void
public "setHurtEntity"(entity0: $Entity$$Type): void
set "attacker"(value: $LivingEntity$$Type)
set "baseAmount"(value: float)
set "gunId"(value: $ResourceLocation$$Type)
set "headshot"(value: boolean)
set "headshotMultiplier"(value: float)
set "hurtEntity"(value: $Entity$$Type)
}
}

declare module "com.tacz.guns.api.item.builder.AttachmentItemBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export class $AttachmentItemBuilder {
public "build"(): $ItemStack
public static "create"(): $AttachmentItemBuilder
public "setCount"(int0: integer): $AttachmentItemBuilder
public "setId"(resourceLocation0: $ResourceLocation$$Type): $AttachmentItemBuilder
/** @deprecated */
public "setSkinId"(resourceLocation0: $ResourceLocation$$Type): $AttachmentItemBuilder
set "count"(value: integer)
set "id"(value: $ResourceLocation$$Type)
set "skinId"(value: $ResourceLocation$$Type)
}
}

declare module "com.tacz.guns.resource.pojo.data.attachment.MeleeData" {
import { $List } from "java.util.List"
import { $EffectData } from "com.tacz.guns.resource.pojo.data.attachment.EffectData"

export class $MeleeData {
constructor()

public "getCooldown"(): float
public "getDamage"(): float
public "getDistance"(): float
public "getEffects"(): $List<$EffectData>
public "getKnockback"(): float
public "getPrepTime"(): float
public "getRangeAngle"(): float
get "cooldown"(): float
get "damage"(): float
get "distance"(): float
get "effects"(): $List<$EffectData>
get "knockback"(): float
get "prepTime"(): float
get "rangeAngle"(): float
}
}

declare module "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$GunFireSelectWrapper" {
import { $GunFireSelectEvent } from "com.tacz.guns.api.event.common.GunFireSelectEvent"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $TimelessForgeEventWrappers$ForgeEventWrapper } from "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$ForgeEventWrapper"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export interface $TimelessForgeEventWrappers$GunFireSelectWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$GunFireSelectEvent> {
"getForgeEvent"(): $GunFireSelectEvent
"getGunItemStack"(): $ItemStack
"getLogicalSide"(): $LogicalSide
"getShooter"(): $LivingEntity
get "forgeEvent"(): $GunFireSelectEvent
get "gunItemStack"(): $ItemStack
get "logicalSide"(): $LogicalSide
get "shooter"(): $LivingEntity
}

export namespace $TimelessForgeEventWrappers$GunFireSelectWrapper {
const probejs$$marker: never
}
export abstract class $TimelessForgeEventWrappers$GunFireSelectWrapper$$Static implements $TimelessForgeEventWrappers$GunFireSelectWrapper {
}
}

declare module "com.tacz.guns.api.item.IAmmo" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $IAmmo {
"getAmmoId"(itemStack0: $ItemStack$$Type): $ResourceLocation
"isAmmoOfGun"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
"setAmmoId"(itemStack0: $ItemStack$$Type, resourceLocation1: $ResourceLocation$$Type): void
}

export namespace $IAmmo {
function getIAmmoOrNull(itemStack0: $ItemStack$$Type): $IAmmo
}
export abstract class $IAmmo$$Static implements $IAmmo {
static "getIAmmoOrNull"(itemStack0: $ItemStack$$Type): $IAmmo
}
}

declare module "com.tacz.guns.mixin.client.StairBlockAccessor" {
import { $Block } from "net.minecraft.world.level.block.Block"

export interface $StairBlockAccessor {
"invokeGetModelBlock"(): $Block
}

export namespace $StairBlockAccessor {
const probejs$$marker: never
}
export abstract class $StairBlockAccessor$$Static implements $StairBlockAccessor {
}
}

declare module "com.tacz.guns.api.event.common.GunMeleeEvent" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $KubeJSGunEventPoster } from "com.tacz.guns.api.event.common.KubeJSGunEventPoster"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $LogicalSide, $LogicalSide$$Type } from "net.minecraftforge.fml.LogicalSide"

export class $GunMeleeEvent extends $Event implements $KubeJSGunEventPoster<$GunMeleeEvent> {
constructor(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, logicalSide2: $LogicalSide$$Type)
constructor()

public "getGunItemStack"(): $ItemStack
public "getLogicalSide"(): $LogicalSide
public "getShooter"(): $LivingEntity
public "postClientEventToKubeJS"(gunMeleeEvent0: $GunMeleeEvent$$Type): void
public "postEventToKubeJS"(gunMeleeEvent0: $GunMeleeEvent$$Type): void
public "postServerEventToKubeJS"(gunMeleeEvent0: $GunMeleeEvent$$Type): void
get "gunItemStack"(): $ItemStack
get "logicalSide"(): $LogicalSide
get "shooter"(): $LivingEntity
}
}

declare module "com.tacz.guns.compat.kubejs.util.AttachmentNbtFactory" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $TimelessItemNbtFactory } from "com.tacz.guns.compat.kubejs.util.TimelessItemNbtFactory"
import { $AttachmentItem, $AttachmentItem$$Type } from "com.tacz.guns.item.AttachmentItem"

export class $AttachmentNbtFactory extends $TimelessItemNbtFactory<$AttachmentItem, $AttachmentNbtFactory> {
constructor()
constructor(attachmentItem0: $AttachmentItem$$Type)

/** @deprecated */
public "setSkinId"(resourceLocation0: $ResourceLocation$$Type): void
set "skinId"(value: $ResourceLocation$$Type)
}
}

declare module "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$GunMeleeWrapper" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $GunMeleeEvent } from "com.tacz.guns.api.event.common.GunMeleeEvent"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $TimelessForgeEventWrappers$ForgeEventWrapper } from "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$ForgeEventWrapper"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export interface $TimelessForgeEventWrappers$GunMeleeWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$GunMeleeEvent> {
"getForgeEvent"(): $GunMeleeEvent
"getGunItemStack"(): $ItemStack
"getLogicalSide"(): $LogicalSide
"getShooter"(): $LivingEntity
get "forgeEvent"(): $GunMeleeEvent
get "gunItemStack"(): $ItemStack
get "logicalSide"(): $LogicalSide
get "shooter"(): $LivingEntity
}

export namespace $TimelessForgeEventWrappers$GunMeleeWrapper {
const probejs$$marker: never
}
export abstract class $TimelessForgeEventWrappers$GunMeleeWrapper$$Static implements $TimelessForgeEventWrappers$GunMeleeWrapper {
}
}

declare module "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$GunMeleeEventJS" {
import { $TimelessForgeEventWrappers$GunMeleeWrapper } from "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$GunMeleeWrapper"
import { $GunKubeJSEvents$GunEventJS } from "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$GunEventJS"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $GunMeleeEvent, $GunMeleeEvent$$Type } from "com.tacz.guns.api.event.common.GunMeleeEvent"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export class $GunKubeJSEvents$GunMeleeEventJS extends $GunKubeJSEvents$GunEventJS<$GunMeleeEvent> implements $TimelessForgeEventWrappers$GunMeleeWrapper {
constructor(gunMeleeEvent0: $GunMeleeEvent$$Type)

public "getGunItemStack"(): $ItemStack
public "getLogicalSide"(): $LogicalSide
public "getShooter"(): $LivingEntity
get "gunItemStack"(): $ItemStack
get "logicalSide"(): $LogicalSide
get "shooter"(): $LivingEntity
}
}

declare module "com.tacz.guns.api.event.common.EntityHurtByGunEvent" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $DamageSource } from "net.minecraft.world.damagesource.DamageSource"
import { $GunDamageSourcePart$$Type } from "com.tacz.guns.api.event.common.GunDamageSourcePart"
import { $KubeJSGunEventPoster } from "com.tacz.guns.api.event.common.KubeJSGunEventPoster"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export class $EntityHurtByGunEvent extends $Event implements $KubeJSGunEventPoster<$EntityHurtByGunEvent> {
constructor()

public "getAmount"(): float
public "getAttacker"(): $LivingEntity
public "getBaseAmount"(): float
public "getBullet"(): $Entity
public "getDamageSource"(gunDamageSourcePart0: $GunDamageSourcePart$$Type): $DamageSource
public "getGunDisplayId"(): $ResourceLocation
public "getGunId"(): $ResourceLocation
public "getHeadshotMultiplier"(): float
public "getHurtEntity"(): $Entity
public "getLogicalSide"(): $LogicalSide
public "isHeadShot"(): boolean
public "postClientEventToKubeJS"(entityHurtByGunEvent0: $EntityHurtByGunEvent$$Type): void
public "postEventToKubeJS"(entityHurtByGunEvent0: $EntityHurtByGunEvent$$Type): void
public "postServerEventToKubeJS"(entityHurtByGunEvent0: $EntityHurtByGunEvent$$Type): void
get "amount"(): float
get "attacker"(): $LivingEntity
get "baseAmount"(): float
get "bullet"(): $Entity
get "gunDisplayId"(): $ResourceLocation
get "gunId"(): $ResourceLocation
get "headshotMultiplier"(): float
get "hurtEntity"(): $Entity
get "logicalSide"(): $LogicalSide
get "headShot"(): boolean
}
}

declare module "com.tacz.guns.api.item.nbt.AmmoItemDataAccessor" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $IAmmo } from "com.tacz.guns.api.item.IAmmo"

export interface $AmmoItemDataAccessor extends $IAmmo {
"getAmmoId"(itemStack0: $ItemStack$$Type): $ResourceLocation
"isAmmoOfGun"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
"setAmmoId"(itemStack0: $ItemStack$$Type, resourceLocation1: $ResourceLocation$$Type): void
}

export namespace $AmmoItemDataAccessor {
const AMMO_ID_TAG: string
function getIAmmoOrNull(itemStack0: $ItemStack$$Type): $IAmmo
}
export abstract class $AmmoItemDataAccessor$$Static implements $AmmoItemDataAccessor {
static readonly "AMMO_ID_TAG": string

static "getIAmmoOrNull"(itemStack0: $ItemStack$$Type): $IAmmo
}
}

declare module "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$GunFireEventJS" {
import { $GunKubeJSEvents$GunEventJS } from "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$GunEventJS"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $GunFireEvent, $GunFireEvent$$Type } from "com.tacz.guns.api.event.common.GunFireEvent"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $TimelessForgeEventWrappers$GunFireWrapper } from "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$GunFireWrapper"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export class $GunKubeJSEvents$GunFireEventJS extends $GunKubeJSEvents$GunEventJS<$GunFireEvent> implements $TimelessForgeEventWrappers$GunFireWrapper {
constructor(gunFireEvent0: $GunFireEvent$$Type)

public "getGunItemStack"(): $ItemStack
public "getLogicalSide"(): $LogicalSide
public "getShooter"(): $LivingEntity
get "gunItemStack"(): $ItemStack
get "logicalSide"(): $LogicalSide
get "shooter"(): $LivingEntity
}
}

declare module "com.tacz.guns.api.client.event.RenderItemInHandBobEvent$BobHurt" {
import { $RenderItemInHandBobEvent, $RenderItemInHandBobEvent$$Type } from "com.tacz.guns.api.client.event.RenderItemInHandBobEvent"

export class $RenderItemInHandBobEvent$BobHurt extends $RenderItemInHandBobEvent {
constructor()

public "postClientEventToKubeJS"(renderItemInHandBobEvent0: $RenderItemInHandBobEvent$$Type): void
public "postEventToKubeJS"(renderItemInHandBobEvent0: $RenderItemInHandBobEvent$$Type): void
public "postServerEventToKubeJS"(renderItemInHandBobEvent0: $RenderItemInHandBobEvent$$Type): void
}
}

declare module "com.tacz.guns.client.gameplay.LocalPlayerDataHolder" {
import { $IGunOperator, $IGunOperator$$Type } from "com.tacz.guns.api.entity.IGunOperator"
import { $ScheduledFuture, $ScheduledFuture$$Type } from "java.util.concurrent.ScheduledFuture"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $ScheduledExecutorService } from "java.util.concurrent.ScheduledExecutorService"
import { $LocalPlayer$$Type } from "net.minecraft.client.player.LocalPlayer"

export class $LocalPlayerDataHolder {
static readonly "SCHEDULED_EXECUTOR_SERVICE": $ScheduledExecutorService
static "clientClickButtonTimestamp": long
static "oldAimingProgress": float

constructor(localPlayer0: $LocalPlayer$$Type)

public "lockState"(predicate0: $Predicate$$Type<$IGunOperator$$Type>): void
public "reset"(): void
public "tickStateLock"(): void
get "clientAimingProgress"(): float
set "clientAimingProgress"(value: float)
get "clientAimingTimestamp"(): long
set "clientAimingTimestamp"(value: long)
get "clientBaseTimestamp"(): long
set "clientBaseTimestamp"(value: long)
get "clientDrawTimestamp"(): long
set "clientDrawTimestamp"(value: long)
get "clientIsAiming"(): boolean
set "clientIsAiming"(value: boolean)
get "clientLastShootTimestamp"(): long
set "clientLastShootTimestamp"(value: long)
get "clientShootTimestamp"(): long
set "clientShootTimestamp"(value: long)
get "clientStateLock"(): boolean
set "clientStateLock"(value: boolean)
get "drawFuture"(): $ScheduledFuture<any>
set "drawFuture"(value: $ScheduledFuture$$Type<any>)
get "isBolting"(): boolean
set "isBolting"(value: boolean)
get "isShootRecorded"(): boolean
set "isShootRecorded"(value: boolean)
get "lockTimestamp"(): long
set "lockTimestamp"(value: long)
get "lockedCondition"(): $Predicate<$IGunOperator>
set "lockedCondition"(value: $Predicate$$Type<$IGunOperator$$Type>)
}
}

declare module "com.tacz.guns.compat.kubejs.util.AmmoNbtFactory" {
import { $AmmoItem, $AmmoItem$$Type } from "com.tacz.guns.item.AmmoItem"
import { $TimelessItemNbtFactory } from "com.tacz.guns.compat.kubejs.util.TimelessItemNbtFactory"

export class $AmmoNbtFactory extends $TimelessItemNbtFactory<$AmmoItem, $AmmoNbtFactory> {
constructor()
constructor(ammoItem0: $AmmoItem$$Type)

}
}

declare module "com.tacz.guns.api.entity.IGunOperator" {
import { $ShootResult } from "com.tacz.guns.api.entity.ShootResult"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ShooterDataHolder } from "com.tacz.guns.entity.shooter.ShooterDataHolder"
import { $ReloadState } from "com.tacz.guns.api.entity.ReloadState"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $AttachmentCacheProperty, $AttachmentCacheProperty$$Type } from "com.tacz.guns.resource.modifier.AttachmentCacheProperty"
import { $Supplier$$Type } from "java.util.function.Supplier"

export interface $IGunOperator {
"aim"(boolean0: boolean): void
"bolt"(): void
"cancelReload"(): void
"consumesAmmoOrNot"(): boolean
"crawl"(boolean0: boolean): void
"draw"(supplier0: $Supplier$$Type<$ItemStack>): void
"fireSelect"(): void
"getCacheProperty"(): $AttachmentCacheProperty
"getDataHolder"(): $ShooterDataHolder
"getProcessedSprintStatus"(boolean0: boolean): boolean
"getSynAimingProgress"(): float
"getSynDrawCoolDown"(): long
"getSynIsAiming"(): boolean
"getSynIsBolting"(): boolean
"getSynMeleeCoolDown"(): long
"getSynReloadState"(): $ReloadState
"getSynShootCoolDown"(): long
"getSynSprintTime"(): float
"initialData"(): void
"melee"(): void
"needCheckAmmo"(): boolean
"nextBulletIsTracer"(int0: integer): boolean
"reload"(): void
"shoot"(supplier0: $Supplier$$Type<float>, supplier1: $Supplier$$Type<float>): $ShootResult
"shoot"(supplier0: $Supplier$$Type<float>, supplier1: $Supplier$$Type<float>, long2: long): $ShootResult
"updateCacheProperty"(attachmentCacheProperty0: $AttachmentCacheProperty$$Type): void
"zoom"(): void
get "cacheProperty"(): $AttachmentCacheProperty
get "dataHolder"(): $ShooterDataHolder
get "synAimingProgress"(): float
get "synDrawCoolDown"(): long
get "synIsAiming"(): boolean
get "synIsBolting"(): boolean
get "synMeleeCoolDown"(): long
get "synReloadState"(): $ReloadState
get "synShootCoolDown"(): long
get "synSprintTime"(): float
}

export namespace $IGunOperator {
function fromLivingEntity(livingEntity0: $LivingEntity$$Type): $IGunOperator
}
export abstract class $IGunOperator$$Static implements $IGunOperator {
static "fromLivingEntity"(livingEntity0: $LivingEntity$$Type): $IGunOperator
}
}

declare module "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$BeforeRenderHandEventJS" {
import { $TimelessForgeEventWrappers$BeforeRenderHandWrapper } from "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$BeforeRenderHandWrapper"
import { $GunKubeJSEvents$GunEventJS } from "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$GunEventJS"
import { $BeforeRenderHandEvent, $BeforeRenderHandEvent$$Type } from "com.tacz.guns.api.client.event.BeforeRenderHandEvent"
import { $PoseStack } from "com.mojang.blaze3d.vertex.PoseStack"

export class $GunKubeJSEvents$BeforeRenderHandEventJS extends $GunKubeJSEvents$GunEventJS<$BeforeRenderHandEvent> implements $TimelessForgeEventWrappers$BeforeRenderHandWrapper {
constructor(beforeRenderHandEvent0: $BeforeRenderHandEvent$$Type)

public "getPoseStack"(): $PoseStack
get "poseStack"(): $PoseStack
}
}

declare module "com.tacz.guns.resource.pojo.data.gun.Bolt" {
import { $Enum } from "java.lang.Enum"

export class $Bolt extends $Enum<$Bolt> {
static readonly "CLOSED_BOLT": $Bolt
static readonly "MANUAL_ACTION": $Bolt
static readonly "OPEN_BOLT": $Bolt

public static "valueOf"(string0: string): $Bolt
public static "values"(): $Bolt[]
}
}

declare module "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$EntityHurtByGunWrapper" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $EntityHurtByGunEvent } from "com.tacz.guns.api.event.common.EntityHurtByGunEvent"
import { $DamageSource } from "net.minecraft.world.damagesource.DamageSource"
import { $GunDamageSourcePart$$Type } from "com.tacz.guns.api.event.common.GunDamageSourcePart"
import { $TimelessForgeEventWrappers$ForgeEventWrapper } from "com.tacz.guns.compat.kubejs.events.TimelessForgeEventWrappers$ForgeEventWrapper"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export interface $TimelessForgeEventWrappers$EntityHurtByGunWrapper<E extends $EntityHurtByGunEvent = $EntityHurtByGunEvent> extends $TimelessForgeEventWrappers$ForgeEventWrapper<E> {
"getAttacker"(): $LivingEntity
"getBaseAmount"(): float
"getBullet"(): $Entity
"getDamageSource"(gunDamageSourcePart0: $GunDamageSourcePart$$Type): $DamageSource
"getForgeEvent"(): E
"getGunId"(): $ResourceLocation
"getHeadshotMultiplier"(): float
"getHurtEntity"(): $Entity
"getLogicalSide"(): $LogicalSide
"isHeadShot"(): boolean
get "attacker"(): $LivingEntity
get "baseAmount"(): float
get "bullet"(): $Entity
get "forgeEvent"(): E
get "gunId"(): $ResourceLocation
get "headshotMultiplier"(): float
get "hurtEntity"(): $Entity
get "logicalSide"(): $LogicalSide
get "headShot"(): boolean
}

export namespace $TimelessForgeEventWrappers$EntityHurtByGunWrapper {
const probejs$$marker: never
}
export abstract class $TimelessForgeEventWrappers$EntityHurtByGunWrapper$$Static<E extends $EntityHurtByGunEvent = $EntityHurtByGunEvent> implements $TimelessForgeEventWrappers$EntityHurtByGunWrapper<E> {
}
}

declare module "com.tacz.guns.api.client.event.SwapItemWithOffHand" {
import { $KubeJSGunEventPoster } from "com.tacz.guns.api.event.common.KubeJSGunEventPoster"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $SwapItemWithOffHand extends $Event implements $KubeJSGunEventPoster<$SwapItemWithOffHand> {
constructor()

public "postClientEventToKubeJS"(swapItemWithOffHand0: $SwapItemWithOffHand$$Type): void
public "postEventToKubeJS"(swapItemWithOffHand0: $SwapItemWithOffHand$$Type): void
public "postServerEventToKubeJS"(swapItemWithOffHand0: $SwapItemWithOffHand$$Type): void
}
}

declare module "com.tacz.guns.api.GunProperty" {
import { $Class, $Class$$Type } from "java.lang.Class"
import { $Record } from "java.lang.Record"
import { $TypeToken$$Type } from "com.google.common.reflect.TypeToken"

export class $GunProperty<T = any> extends $Record {
constructor(name: string, type: $Class$$Type<T>)

public "name"(): string
public static "of"<T>(string0: string, typeToken1: $TypeToken$$Type<T>): $GunProperty<T>
public static "of"<T>(string0: string, class1: $Class$$Type<T>): $GunProperty<T>
public "type"(): $Class<T>
}
}

declare module "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$RenderLevelBobHurtEventJS" {
import { $GunKubeJSEvents$GunEventJS } from "com.tacz.guns.compat.kubejs.events.GunKubeJSEvents$GunEventJS"
import { $RenderLevelBobEvent$BobHurt, $RenderLevelBobEvent$BobHurt$$Type } from "com.tacz.guns.api.client.event.RenderLevelBobEvent$BobHurt"

export class $GunKubeJSEvents$RenderLevelBobHurtEventJS extends $GunKubeJSEvents$GunEventJS<$RenderLevelBobEvent$BobHurt> {
constructor(bobHurt0: $RenderLevelBobEvent$BobHurt$$Type)

}
}

declare module "com.tacz.guns.api.modifier.ParameterizedCache" {
import { $List$$Type } from "java.util.List"
import { $Modifier$$Type } from "com.tacz.guns.resource.pojo.data.attachment.Modifier"

export class $ParameterizedCache<T = any> {
constructor(list0: $List$$Type<$Modifier$$Type>, t1: T)

public "eval"(double0: double, double1: double, double2: double, double3: double): double
public "eval"(double0: double): double
public "getDefaultValue"(): T
public static "of"<T>(t0: T): $ParameterizedCache<T>
public static "of"<T>(list0: $List$$Type<$Modifier$$Type>, t1: T): $ParameterizedCache<T>
get "defaultValue"(): T
}
}

declare module "com.tacz.guns.api.event.common.GunDrawEvent" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $KubeJSGunEventPoster } from "com.tacz.guns.api.event.common.KubeJSGunEventPoster"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $LogicalSide, $LogicalSide$$Type } from "net.minecraftforge.fml.LogicalSide"

export class $GunDrawEvent extends $Event implements $KubeJSGunEventPoster<$GunDrawEvent> {
constructor(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, itemStack2: $ItemStack$$Type, logicalSide3: $LogicalSide$$Type)
constructor()

public "getCurrentGunItem"(): $ItemStack
public "getEntity"(): $LivingEntity
public "getLogicalSide"(): $LogicalSide
public "getPreviousGunItem"(): $ItemStack
public "postClientEventToKubeJS"(gunDrawEvent0: $GunDrawEvent$$Type): void
public "postEventToKubeJS"(gunDrawEvent0: $GunDrawEvent$$Type): void
public "postServerEventToKubeJS"(gunDrawEvent0: $GunDrawEvent$$Type): void
get "currentGunItem"(): $ItemStack
get "entity"(): $LivingEntity
get "logicalSide"(): $LogicalSide
get "previousGunItem"(): $ItemStack
}
}

declare module "com.tacz.guns.api.event.common.GunDamageSourcePart" {
import { $Enum } from "java.lang.Enum"

export class $GunDamageSourcePart extends $Enum<$GunDamageSourcePart> {
static readonly "ARMOR_PIERCING": $GunDamageSourcePart
static readonly "NON_ARMOR_PIERCING": $GunDamageSourcePart

public static "valueOf"(string0: string): $GunDamageSourcePart
public static "values"(): $GunDamageSourcePart[]
}
}

declare module "com.tacz.guns.item.AttachmentItem" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $ICapabilityProvider } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $IAttachment } from "com.tacz.guns.api.item.IAttachment"
import { $Holder } from "net.minecraft.core.Holder"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Map } from "java.util.Map"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $FoodProperties } from "net.minecraft.world.food.FoodProperties"
import { $AttachmentType, $AttachmentType$$Type } from "com.tacz.guns.api.item.attachment.AttachmentType"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $UUID$$Type } from "java.util.UUID"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $Attribute, $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $EnderMan$$Type } from "net.minecraft.world.entity.monster.EnderMan"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $AttachmentItemDataAccessor } from "com.tacz.guns.api.item.nbt.AttachmentItemDataAccessor"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $MutableToolTier$$Type } from "dev.latvian.mods.kubejs.item.MutableToolTier"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $FoodBuilder$$Type } from "dev.latvian.mods.kubejs.item.FoodBuilder"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $AttachmentItem extends $Item implements $AttachmentItemDataAccessor {
constructor()

public "addAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type, name: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "arch$holder"(): $Holder<$Item>
public "arch$registryName"(): $ResourceLocation
public "canApplyAtEnchantingTable"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
public "canContinueUsing"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "canDisableShield"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "canElytraFly"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "canEquip"(itemStack0: $ItemStack$$Type, equipmentSlot1: $EquipmentSlot$$Type, entity2: $Entity$$Type): boolean
public "canGrindstoneRepair"(itemStack0: $ItemStack$$Type): boolean
public "canPerformAction"(itemStack0: $ItemStack$$Type, toolAction1: $ToolAction$$Type): boolean
public "canWalkOnPowderedSnow"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "createEntity"(level0: $Level$$Type, entity1: $Entity$$Type, itemStack2: $ItemStack$$Type): $Entity
public "damageItem"<T extends $LivingEntity>(itemStack0: $ItemStack$$Type, int1: integer, t2: T, consumer3: $Consumer$$Type<T>): integer
public "doesSneakBypassUse"(itemStack0: $ItemStack$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "elytraFlightTick"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): boolean
public static "fillItemCategory"(attachmentType0: $AttachmentType$$Type): $NonNullList<$ItemStack>
public static "get"(item: $Item$$Type): $ResourceLocation
public static "get"(block: $Block$$Type): $ResourceLocation
public static "get"(state: $BlockState$$Type): $ResourceLocation
public static "get"(entity: $Entity$$Type): $ResourceLocation
public static "get"(stack: $ItemStack$$Type): $ResourceLocation
public static "get"(type: $EntityType$$Type<any>): $ResourceLocation
public "getAllEnchantments"(itemStack0: $ItemStack$$Type): $Map<$Enchantment, integer>
public "getArmorTexture"(itemStack0: $ItemStack$$Type, entity1: $Entity$$Type, equipmentSlot2: $EquipmentSlot$$Type, string3: string): string
public "getAttachmentId"(itemStack0: $ItemStack$$Type): $ResourceLocation
public static "getAttachmentIdFromTag"(compoundTag0: $CompoundTag$$Type): $ResourceLocation
public "getAttributeModifiers"(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
public "getAttributes"(attribute: $Attribute$$Type): $List<$AttributeModifier>
public "getBurnTime"(itemStack0: $ItemStack$$Type, recipeType1: $RecipeType$$Type<any>): integer
public "getCraftingRemainingItem"(itemStack0: $ItemStack$$Type): $ItemStack
public "getCreativeTab"(): string
public "getCreatorModId"(itemStack0: $ItemStack$$Type): string
public "getDamage"(itemStack0: $ItemStack$$Type): integer
public "getDefaultTooltipHideFlags"(itemStack0: $ItemStack$$Type): integer
public "getDigSpeed"(): float
public "getEnchantmentLevel"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): integer
public "getEnchantmentValue"(itemStack0: $ItemStack$$Type): integer
public "getEntityLifespan"(itemStack0: $ItemStack$$Type, level1: $Level$$Type): integer
public "getEquipmentSlot"(itemStack0: $ItemStack$$Type): $EquipmentSlot
public "getFoodProperties"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): $FoodProperties
public "getHighlightTip"(itemStack0: $ItemStack$$Type, component1: $Component$$Type): $Component
public static "getIAttachmentOrNull"(itemStack0: $ItemStack$$Type): $IAttachment
public "getLaserColor"(itemStack0: $ItemStack$$Type): integer
public "getMaxDamage"(itemStack0: $ItemStack$$Type): integer
public "getMaxStackSize"(itemStack0: $ItemStack$$Type): integer
public "getMod"(): string
public "getShareTag"(itemStack0: $ItemStack$$Type): $CompoundTag
public "getSkinId"(itemStack0: $ItemStack$$Type): $ResourceLocation
public "getSweepHitBox"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): $AABB
public "getType"(itemStack0: $ItemStack$$Type): $AttachmentType
public "getXpRepairRatio"(itemStack0: $ItemStack$$Type): float
public "getZoomNumber"(itemStack0: $ItemStack$$Type): integer
public static "getZoomNumberFromTag"(compoundTag0: $CompoundTag$$Type): integer
public "hasCraftingRemainingItem"(itemStack0: $ItemStack$$Type): boolean
public "hasCustomEntity"(itemStack0: $ItemStack$$Type): boolean
public "hasCustomLaserColor"(itemStack0: $ItemStack$$Type): boolean
public "initCapabilities"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): $ICapabilityProvider
public static "isAttachmentLike"(compoundTag0: $CompoundTag$$Type): boolean
public "isBookEnchantable"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "isCorrectToolForDrops"(itemStack0: $ItemStack$$Type, blockState1: $BlockState$$Type): boolean
public "isDamageable"(itemStack0: $ItemStack$$Type): boolean
public "isDamaged"(itemStack0: $ItemStack$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isEnderMask"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, enderMan2: $EnderMan$$Type): boolean
public "isNotReplaceableByPickAction"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer): boolean
public "isPiglinCurrency"(itemStack0: $ItemStack$$Type): boolean
public "makesPiglinsNeutral"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
/** @deprecated */
public "onArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type): void
public "onBlockStartBreak"(itemStack0: $ItemStack$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
public "onDestroyed"(itemEntity0: $ItemEntity$$Type, damageSource1: $DamageSource$$Type): void
public "onDroppedByPlayer"(itemStack0: $ItemStack$$Type, player1: $Player$$Type): boolean
public "onEntityItemUpdate"(itemStack0: $ItemStack$$Type, itemEntity1: $ItemEntity$$Type): boolean
public "onEntitySwing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "onHorseArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, mob2: $Mob$$Type): void
public "onInventoryTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type, int3: integer, int4: integer): void
public "onItemUseFirst"(itemStack0: $ItemStack$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
public "onLeftClickEntity"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): boolean
public "onStopUsing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): void
public "readShareTag"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): void
public "removeAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type): void
public "setArmorKnockbackResistance"(knockbackResistance: double): void
public "setArmorProtection"(armorProtection: double): void
public "setArmorToughness"(armorToughness: double): void
public "setAttachmentId"(itemStack0: $ItemStack$$Type, resourceLocation1: $ResourceLocation$$Type): void
public "setAttackDamage"(attackDamage: double): void
public "setAttackSpeed"(attackSpeed: double): void
public "setDamage"(itemStack0: $ItemStack$$Type, int1: integer): void
public "setDigSpeed"(speed: float): void
public "setFoodProperties"(consumer: $Consumer$$Type<$FoodBuilder$$Type>): void
public "setLaserColor"(itemStack0: $ItemStack$$Type, int1: integer): void
public "setSkinId"(itemStack0: $ItemStack$$Type, resourceLocation1: $ResourceLocation$$Type): void
public "setTier"(c: $Consumer$$Type<$MutableToolTier$$Type>): void
public "setZoomNumber"(itemStack0: $ItemStack$$Type, int1: integer): void
public static "setZoomNumberToTag"(compoundTag0: $CompoundTag$$Type, int1: integer): void
public "shouldCauseBlockBreakReset"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "shouldCauseReequipAnimation"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean): boolean
get "creativeTab"(): string
get "digSpeed"(): float
get "mod"(): string
set "armorKnockbackResistance"(value: double)
set "armorProtection"(value: double)
set "armorToughness"(value: double)
set "attackDamage"(value: double)
set "attackSpeed"(value: double)
set "digSpeed"(value: float)
set "foodProperties"(value: $Consumer$$Type<$FoodBuilder$$Type>)
set "tier"(value: $Consumer$$Type<$MutableToolTier$$Type>)
}
}

