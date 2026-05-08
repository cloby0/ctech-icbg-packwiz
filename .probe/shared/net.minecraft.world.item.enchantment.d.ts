declare module "net.minecraft.world.item.enchantment.SoulSpeedEnchantment" {
import { $Enchantment } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Enchantment$Rarity$$Type } from "net.minecraft.world.item.enchantment.Enchantment$Rarity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"

export class $SoulSpeedEnchantment extends $Enchantment {
constructor(rarity0: $Enchantment$Rarity$$Type, ...equipmentSlot1s: $EquipmentSlot$$Type[])

public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
}
}

declare module "net.minecraft.world.item.enchantment.WaterWorkerEnchantment" {
import { $Enchantment } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Enchantment$Rarity$$Type } from "net.minecraft.world.item.enchantment.Enchantment$Rarity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"

export class $WaterWorkerEnchantment extends $Enchantment {
constructor(rarity0: $Enchantment$Rarity$$Type, ...equipmentSlot1s: $EquipmentSlot$$Type[])

public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
}
}

declare module "net.minecraft.world.item.enchantment.ThornsEnchantment" {
import { $Enchantment } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Enchantment$Rarity$$Type } from "net.minecraft.world.item.enchantment.Enchantment$Rarity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"

export class $ThornsEnchantment extends $Enchantment {
constructor(rarity0: $Enchantment$Rarity$$Type, ...equipmentSlot1s: $EquipmentSlot$$Type[])

public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public static "getDamage"(int0: integer, randomSource1: $RandomSource$$Type): integer
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
public static "shouldHit"(int0: integer, randomSource1: $RandomSource$$Type): boolean
}
}

declare module "net.minecraft.world.item.enchantment.LootBonusEnchantment" {
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"

export class $LootBonusEnchantment extends $Enchantment {
public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "checkCompatibility"(enchantment0: $Enchantment$$Type): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
}
}

declare module "net.minecraft.world.item.enchantment.ArrowInfiniteEnchantment" {
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Enchantment$Rarity$$Type } from "net.minecraft.world.item.enchantment.Enchantment$Rarity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"

export class $ArrowInfiniteEnchantment extends $Enchantment {
constructor(rarity0: $Enchantment$Rarity$$Type, ...equipmentSlot1s: $EquipmentSlot$$Type[])

public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "checkCompatibility"(enchantment0: $Enchantment$$Type): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
}
}

declare module "net.minecraft.world.item.enchantment.TridentImpalerEnchantment" {
import { $Enchantment } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Enchantment$Rarity$$Type } from "net.minecraft.world.item.enchantment.Enchantment$Rarity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"

export class $TridentImpalerEnchantment extends $Enchantment {
constructor(rarity0: $Enchantment$Rarity$$Type, ...equipmentSlot1s: $EquipmentSlot$$Type[])

public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
}
}

declare module "net.minecraft.world.item.enchantment.ArrowFireEnchantment" {
import { $Enchantment } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Enchantment$Rarity$$Type } from "net.minecraft.world.item.enchantment.Enchantment$Rarity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"

export class $ArrowFireEnchantment extends $Enchantment {
constructor(rarity0: $Enchantment$Rarity$$Type, ...equipmentSlot1s: $EquipmentSlot$$Type[])

public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
}
}

declare module "net.minecraft.world.item.enchantment.ArrowDamageEnchantment" {
import { $Enchantment } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Enchantment$Rarity$$Type } from "net.minecraft.world.item.enchantment.Enchantment$Rarity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"

export class $ArrowDamageEnchantment extends $Enchantment {
constructor(rarity0: $Enchantment$Rarity$$Type, ...equipmentSlot1s: $EquipmentSlot$$Type[])

public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
}
}

declare module "net.minecraft.world.item.enchantment.QuickChargeEnchantment" {
import { $Enchantment } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Enchantment$Rarity$$Type } from "net.minecraft.world.item.enchantment.Enchantment$Rarity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"

export class $QuickChargeEnchantment extends $Enchantment {
constructor(rarity0: $Enchantment$Rarity$$Type, ...equipmentSlot1s: $EquipmentSlot$$Type[])

public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
}
}

declare module "net.minecraft.world.item.enchantment.BindingCurseEnchantment" {
import { $Enchantment } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Enchantment$Rarity$$Type } from "net.minecraft.world.item.enchantment.Enchantment$Rarity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $BindingCurseEnchantment extends $Enchantment {
constructor(rarity0: $Enchantment$Rarity$$Type, ...equipmentSlot1s: $EquipmentSlot$$Type[])

public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
public "handler$ihb000$onCanEnchant"(itemStack0: $ItemStack$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type): void
}
}

declare module "net.minecraft.world.item.enchantment.TridentLoyaltyEnchantment" {
import { $Enchantment } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Enchantment$Rarity$$Type } from "net.minecraft.world.item.enchantment.Enchantment$Rarity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"

export class $TridentLoyaltyEnchantment extends $Enchantment {
constructor(rarity0: $Enchantment$Rarity$$Type, ...equipmentSlot1s: $EquipmentSlot$$Type[])

public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
}
}

declare module "net.minecraft.world.item.enchantment.FrostWalkerEnchantment" {
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Enchantment$Rarity$$Type } from "net.minecraft.world.item.enchantment.Enchantment$Rarity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"

export class $FrostWalkerEnchantment extends $Enchantment {
constructor(rarity0: $Enchantment$Rarity$$Type, ...equipmentSlot1s: $EquipmentSlot$$Type[])

public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "checkCompatibility"(enchantment0: $Enchantment$$Type): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
public static "onEntityMoved"(livingEntity0: $LivingEntity$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, int3: integer): void
}
}

declare module "net.minecraft.world.item.enchantment.WaterWalkerEnchantment" {
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Enchantment$Rarity$$Type } from "net.minecraft.world.item.enchantment.Enchantment$Rarity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"

export class $WaterWalkerEnchantment extends $Enchantment {
constructor(rarity0: $Enchantment$Rarity$$Type, ...equipmentSlot1s: $EquipmentSlot$$Type[])

public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "checkCompatibility"(enchantment0: $Enchantment$$Type): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
}
}

declare module "net.minecraft.world.item.enchantment.FishingSpeedEnchantment" {
import { $Enchantment } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"

export class $FishingSpeedEnchantment extends $Enchantment {
public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
}
}

declare module "net.minecraft.world.item.enchantment.ProtectionEnchantment" {
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Enchantment$Rarity$$Type } from "net.minecraft.world.item.enchantment.Enchantment$Rarity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $ProtectionEnchantment$Type, $ProtectionEnchantment$Type$$Type } from "net.minecraft.world.item.enchantment.ProtectionEnchantment$Type"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"

export class $ProtectionEnchantment extends $Enchantment {
readonly "type": $ProtectionEnchantment$Type

constructor(rarity0: $Enchantment$Rarity$$Type, type1: $ProtectionEnchantment$Type$$Type, ...equipmentSlot2s: $EquipmentSlot$$Type[])

public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "checkCompatibility"(enchantment0: $Enchantment$$Type): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
public static "getExplosionKnockbackAfterDampener"(livingEntity0: $LivingEntity$$Type, double1: double): double
public static "getFireAfterDampener"(livingEntity0: $LivingEntity$$Type, int1: integer): integer
}
}

declare module "net.minecraft.world.item.enchantment.UntouchingEnchantment" {
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"

export class $UntouchingEnchantment extends $Enchantment {
public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "checkCompatibility"(enchantment0: $Enchantment$$Type): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
}
}

declare module "net.minecraft.world.item.enchantment.FireAspectEnchantment" {
import { $Enchantment } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"

export class $FireAspectEnchantment extends $Enchantment {
public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
}
}

declare module "net.minecraft.world.item.enchantment.OxygenEnchantment" {
import { $Enchantment } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Enchantment$Rarity$$Type } from "net.minecraft.world.item.enchantment.Enchantment$Rarity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"

export class $OxygenEnchantment extends $Enchantment {
constructor(rarity0: $Enchantment$Rarity$$Type, ...equipmentSlot1s: $EquipmentSlot$$Type[])

public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
}
}

declare module "net.minecraft.world.item.enchantment.TridentRiptideEnchantment" {
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Enchantment$Rarity$$Type } from "net.minecraft.world.item.enchantment.Enchantment$Rarity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"

export class $TridentRiptideEnchantment extends $Enchantment {
constructor(rarity0: $Enchantment$Rarity$$Type, ...equipmentSlot1s: $EquipmentSlot$$Type[])

public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "checkCompatibility"(enchantment0: $Enchantment$$Type): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
}
}

declare module "net.minecraft.world.item.enchantment.SweepingEdgeEnchantment" {
import { $Enchantment } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Enchantment$Rarity$$Type } from "net.minecraft.world.item.enchantment.Enchantment$Rarity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $SweepingEdgeEnchantment extends $Enchantment {
constructor(rarity0: $Enchantment$Rarity$$Type, ...equipmentSlot1s: $EquipmentSlot$$Type[])

public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
public static "getSweepingDamageRatio"(int0: integer): float
public "handler$cbh000$getMaxLevel_DisableSweeping"(cir: $CallbackInfoReturnable$$Type): void
}
}

declare module "net.minecraft.world.item.enchantment.Enchantment$Rarity" {
import { $Enum } from "java.lang.Enum"

export class $Enchantment$Rarity extends $Enum<$Enchantment$Rarity> {
static readonly "COMMON": $Enchantment$Rarity
static readonly "RARE": $Enchantment$Rarity
static readonly "UNCOMMON": $Enchantment$Rarity
static readonly "VERY_RARE": $Enchantment$Rarity

public "getWeight"(): integer
public static "valueOf"(string0: string): $Enchantment$Rarity
public static "values"(): $Enchantment$Rarity[]
get "weight"(): integer
}
}

declare module "net.minecraft.world.item.enchantment.SwiftSneakEnchantment" {
import { $Enchantment } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Enchantment$Rarity$$Type } from "net.minecraft.world.item.enchantment.Enchantment$Rarity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"

export class $SwiftSneakEnchantment extends $Enchantment {
constructor(rarity0: $Enchantment$Rarity$$Type, ...equipmentSlot1s: $EquipmentSlot$$Type[])

public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
}
}

declare module "net.minecraft.world.item.enchantment.EnchantmentCategory" {
import { $IExtensibleEnum } from "net.minecraftforge.common.IExtensibleEnum"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $EnchantmentCategory extends $Enum<$EnchantmentCategory> implements $IExtensibleEnum {
static readonly "ARMOR": $EnchantmentCategory
static readonly "ARMOR_CHEST": $EnchantmentCategory
static readonly "ARMOR_FEET": $EnchantmentCategory
static readonly "ARMOR_HEAD": $EnchantmentCategory
static readonly "ARMOR_LEGS": $EnchantmentCategory
static readonly "BOW": $EnchantmentCategory
static readonly "BREAKABLE": $EnchantmentCategory
static readonly "CROSSBOW": $EnchantmentCategory
static readonly "DIGGER": $EnchantmentCategory
static readonly "FISHING_ROD": $EnchantmentCategory
static readonly "TRIDENT": $EnchantmentCategory
static readonly "VANISHABLE": $EnchantmentCategory
static readonly "WEAPON": $EnchantmentCategory
static readonly "WEARABLE": $EnchantmentCategory

public "canEnchant"(item0: $Item$$Type): boolean
public static "create"(string0: string, predicate1: $Predicate$$Type<$Item$$Type>): $EnchantmentCategory
public static "createCodecForExtensibleEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, E>): $Codec<E>
/** @deprecated */
public "init"(): void
public static "valueOf"(string0: string): $EnchantmentCategory
public static "values"(): $EnchantmentCategory[]
}
}

declare module "net.minecraft.world.item.enchantment.DiggingEnchantment" {
import { $Enchantment } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"

export class $DiggingEnchantment extends $Enchantment {
public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
}
}

declare module "net.minecraft.world.item.enchantment.DigDurabilityEnchantment" {
import { $Enchantment } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $DigDurabilityEnchantment extends $Enchantment {
public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
public "handler$ggp000$enchantPlane"(itemStack0: $ItemStack$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type): void
public static "shouldIgnoreDurabilityDrop"(itemStack0: $ItemStack$$Type, int1: integer, randomSource2: $RandomSource$$Type): boolean
}
}

declare module "net.minecraft.world.item.enchantment.MultiShotEnchantment" {
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Enchantment$Rarity$$Type } from "net.minecraft.world.item.enchantment.Enchantment$Rarity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"

export class $MultiShotEnchantment extends $Enchantment {
constructor(rarity0: $Enchantment$Rarity$$Type, ...equipmentSlot1s: $EquipmentSlot$$Type[])

public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "checkCompatibility"(enchantment0: $Enchantment$$Type): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
}
}

declare module "net.minecraft.world.item.enchantment.EnchantmentInstance" {
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $WeightedEntry$IntrusiveBase } from "net.minecraft.util.random.WeightedEntry$IntrusiveBase"
import { $WeightedEntry$Wrapper } from "net.minecraft.util.random.WeightedEntry$Wrapper"

export class $EnchantmentInstance extends $WeightedEntry$IntrusiveBase {
readonly "enchantment": $Enchantment
readonly "level": integer

constructor(enchantment0: $Enchantment$$Type, int1: integer)

public static "wrap"<T>(t0: T, int1: integer): $WeightedEntry$Wrapper<T>
}
}

declare module "net.minecraft.world.item.enchantment.DamageEnchantment" {
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Enchantment$Rarity$$Type } from "net.minecraft.world.item.enchantment.Enchantment$Rarity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"

export class $DamageEnchantment extends $Enchantment {
static readonly "ALL": integer
static readonly "ARTHROPODS": integer
static readonly "UNDEAD": integer
readonly "type": integer

constructor(rarity0: $Enchantment$Rarity$$Type, int1: integer, ...equipmentSlot2s: $EquipmentSlot$$Type[])

public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "checkCompatibility"(enchantment0: $Enchantment$$Type): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
}
}

declare module "net.minecraft.world.item.enchantment.ArrowKnockbackEnchantment" {
import { $Enchantment } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Enchantment$Rarity$$Type } from "net.minecraft.world.item.enchantment.Enchantment$Rarity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"

export class $ArrowKnockbackEnchantment extends $Enchantment {
constructor(rarity0: $Enchantment$Rarity$$Type, ...equipmentSlot1s: $EquipmentSlot$$Type[])

public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
}
}

declare module "net.minecraft.world.item.enchantment.KnockbackEnchantment" {
import { $Enchantment } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"

export class $KnockbackEnchantment extends $Enchantment {
public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
}
}

declare module "net.minecraft.world.item.enchantment.MendingEnchantment" {
import { $Enchantment } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Enchantment$Rarity$$Type } from "net.minecraft.world.item.enchantment.Enchantment$Rarity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"

export class $MendingEnchantment extends $Enchantment {
constructor(rarity0: $Enchantment$Rarity$$Type, ...equipmentSlot1s: $EquipmentSlot$$Type[])

public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
}
}

declare module "net.minecraft.world.item.enchantment.TridentChannelingEnchantment" {
import { $Enchantment } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Enchantment$Rarity$$Type } from "net.minecraft.world.item.enchantment.Enchantment$Rarity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"

export class $TridentChannelingEnchantment extends $Enchantment {
constructor(rarity0: $Enchantment$Rarity$$Type, ...equipmentSlot1s: $EquipmentSlot$$Type[])

public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
}
}

declare module "net.minecraft.world.item.enchantment.ProtectionEnchantment$Type" {
import { $Enum } from "java.lang.Enum"

export class $ProtectionEnchantment$Type extends $Enum<$ProtectionEnchantment$Type> {
static readonly "ALL": $ProtectionEnchantment$Type
static readonly "EXPLOSION": $ProtectionEnchantment$Type
static readonly "FALL": $ProtectionEnchantment$Type
static readonly "FIRE": $ProtectionEnchantment$Type
static readonly "PROJECTILE": $ProtectionEnchantment$Type

public "getLevelCost"(): integer
public "getMinCost"(): integer
public static "valueOf"(string0: string): $ProtectionEnchantment$Type
public static "values"(): $ProtectionEnchantment$Type[]
get "levelCost"(): integer
get "minCost"(): integer
}
}

declare module "net.minecraft.world.item.enchantment.ArrowPiercingEnchantment" {
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Enchantment$Rarity$$Type } from "net.minecraft.world.item.enchantment.Enchantment$Rarity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"

export class $ArrowPiercingEnchantment extends $Enchantment {
constructor(rarity0: $Enchantment$Rarity$$Type, ...equipmentSlot1s: $EquipmentSlot$$Type[])

public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "checkCompatibility"(enchantment0: $Enchantment$$Type): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
}
}

declare module "net.minecraft.world.item.enchantment.VanishingCurseEnchantment" {
import { $Enchantment } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Enchantment$Rarity$$Type } from "net.minecraft.world.item.enchantment.Enchantment$Rarity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"

export class $VanishingCurseEnchantment extends $Enchantment {
constructor(rarity0: $Enchantment$Rarity$$Type, ...equipmentSlot1s: $EquipmentSlot$$Type[])

public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
}
}

