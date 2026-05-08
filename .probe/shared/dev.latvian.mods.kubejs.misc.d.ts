declare module "dev.latvian.mods.kubejs.misc.PoiTypeBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $PoiType } from "net.minecraft.world.entity.ai.village.poi.PoiType"
import { $BuilderBase } from "dev.latvian.mods.kubejs.registry.BuilderBase"

export class $PoiTypeBuilder extends $BuilderBase<$PoiType> {
constructor(i: $ResourceLocation$$Type)

public "block"(r: $Block$$Type): $PoiTypeBuilder
public "blocks"(r: $BlockState$$Type[]): $PoiTypeBuilder
public "maxTickets"(i: integer): $PoiTypeBuilder
public "validRange"(i: integer): $PoiTypeBuilder
}
}

declare module "dev.latvian.mods.kubejs.misc.PotionBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $MobEffectInstance$$Type } from "net.minecraft.world.effect.MobEffectInstance"
import { $Potion } from "net.minecraft.world.item.alchemy.Potion"
import { $MobEffect$$Type } from "net.minecraft.world.effect.MobEffect"
import { $BuilderBase } from "dev.latvian.mods.kubejs.registry.BuilderBase"

export class $PotionBuilder extends $BuilderBase<$Potion> {
constructor(i: $ResourceLocation$$Type)

public "addEffect"(effect: $MobEffectInstance$$Type): $PotionBuilder
public "effect"(effect: $MobEffect$$Type, duration: integer, amplifier: integer, ambient: boolean, visible: boolean, showIcon: boolean): $PotionBuilder
public "effect"(effect: $MobEffect$$Type, duration: integer, amplifier: integer): $PotionBuilder
public "effect"(effect: $MobEffect$$Type, duration: integer, amplifier: integer, ambient: boolean, visible: boolean): $PotionBuilder
public "effect"(effect: $MobEffect$$Type): $PotionBuilder
public "effect"(effect: $MobEffect$$Type, duration: integer, amplifier: integer, ambient: boolean, visible: boolean, showIcon: boolean, hiddenEffect: $MobEffectInstance$$Type): $PotionBuilder
public "effect"(effect: $MobEffect$$Type, duration: integer): $PotionBuilder
}
}

declare module "dev.latvian.mods.kubejs.misc.EnchantmentBuilder$PostFunction" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"

export interface $EnchantmentBuilder$PostFunction {
"apply"(livingEntity0: $LivingEntity$$Type, entity1: $Entity$$Type, int2: integer): void
}

export namespace $EnchantmentBuilder$PostFunction {
const probejs$$marker: never
}
export abstract class $EnchantmentBuilder$PostFunction$$Static implements $EnchantmentBuilder$PostFunction {
}
}

declare module "dev.latvian.mods.kubejs.misc.VillagerProfessionBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $VillagerProfession } from "net.minecraft.world.entity.npc.VillagerProfession"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $BuilderBase } from "dev.latvian.mods.kubejs.registry.BuilderBase"

export class $VillagerProfessionBuilder extends $BuilderBase<$VillagerProfession> {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $VillagerProfession
public "poiType"(t: $ResourceLocation$$Type): $VillagerProfessionBuilder
public "poiTypeTag"(t: $ResourceLocation$$Type): $VillagerProfessionBuilder
public "requestedItems"(t: $Item$$Type[]): $VillagerProfessionBuilder
public "secondaryPoi"(t: $Block$$Type[]): $VillagerProfessionBuilder
public "workSound"(t: $SoundEvent$$Type): $VillagerProfessionBuilder
}
}

declare module "dev.latvian.mods.kubejs.misc.PaintingVariantBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $PaintingVariant } from "net.minecraft.world.entity.decoration.PaintingVariant"
import { $BuilderBase } from "dev.latvian.mods.kubejs.registry.BuilderBase"

export class $PaintingVariantBuilder extends $BuilderBase<$PaintingVariant> {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $PaintingVariant
public "height"(height: integer): $PaintingVariantBuilder
public "width"(width: integer): $PaintingVariantBuilder
}
}

declare module "dev.latvian.mods.kubejs.misc.SoundEventBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $BuilderBase } from "dev.latvian.mods.kubejs.registry.BuilderBase"

export class $SoundEventBuilder extends $BuilderBase<$SoundEvent> {
constructor(i: $ResourceLocation$$Type)

}
}

declare module "dev.latvian.mods.kubejs.misc.BasicMobEffect$Builder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $MobEffectBuilder } from "dev.latvian.mods.kubejs.misc.MobEffectBuilder"
import { $MobEffect } from "net.minecraft.world.effect.MobEffect"

export class $BasicMobEffect$Builder extends $MobEffectBuilder {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $MobEffect
}
}

declare module "dev.latvian.mods.kubejs.misc.ParticleTypeBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ParticleOptions$Deserializer$$Type } from "net.minecraft.core.particles.ParticleOptions$Deserializer"
import { $ParticleType } from "net.minecraft.core.particles.ParticleType"
import { $BuilderBase } from "dev.latvian.mods.kubejs.registry.BuilderBase"

export class $ParticleTypeBuilder extends $BuilderBase<$ParticleType<any>> {
constructor(i: $ResourceLocation$$Type)

public "deserializer"(d: $ParticleOptions$Deserializer$$Type): $ParticleTypeBuilder
public "overrideLimiter"(o: boolean): $ParticleTypeBuilder
}
}

declare module "dev.latvian.mods.kubejs.misc.EnchantmentBuilder$DamageBonusFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EnchantmentBuilder$DamageBonusFunction {
"getDamageBonus"(int0: integer, string1: string): float
}

export namespace $EnchantmentBuilder$DamageBonusFunction {
const probejs$$marker: never
}
export abstract class $EnchantmentBuilder$DamageBonusFunction$$Static implements $EnchantmentBuilder$DamageBonusFunction {
}
}

declare module "dev.latvian.mods.kubejs.misc.VillagerTypeBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $VillagerType } from "net.minecraft.world.entity.npc.VillagerType"
import { $BuilderBase } from "dev.latvian.mods.kubejs.registry.BuilderBase"

export class $VillagerTypeBuilder extends $BuilderBase<$VillagerType> {
constructor(i: $ResourceLocation$$Type)

}
}

declare module "dev.latvian.mods.kubejs.misc.EnchantmentBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Enchantment } from "net.minecraft.world.item.enchantment.Enchantment"
import { $Enchantment$Rarity$$Type } from "net.minecraft.world.item.enchantment.Enchantment$Rarity"
import { $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $EnchantmentBuilder$DamageProtectionFunction$$Type } from "dev.latvian.mods.kubejs.misc.EnchantmentBuilder$DamageProtectionFunction"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Object2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2BooleanFunction"
import { $EnchantmentBuilder$DamageBonusFunction$$Type } from "dev.latvian.mods.kubejs.misc.EnchantmentBuilder$DamageBonusFunction"
import { $EnchantmentBuilder$PostFunction$$Type } from "dev.latvian.mods.kubejs.misc.EnchantmentBuilder$PostFunction"
import { $BuilderBase } from "dev.latvian.mods.kubejs.registry.BuilderBase"

export class $EnchantmentBuilder extends $BuilderBase<$Enchantment> {
constructor(i: $ResourceLocation$$Type)

public "armor"(): $EnchantmentBuilder
public "armorChest"(): $EnchantmentBuilder
public "armorFeet"(): $EnchantmentBuilder
public "armorHead"(): $EnchantmentBuilder
public "armorLegs"(): $EnchantmentBuilder
public "bow"(): $EnchantmentBuilder
public "breakable"(): $EnchantmentBuilder
public "canEnchant"(i: $Object2BooleanFunction$$Type<$ItemStack$$Type>): $EnchantmentBuilder
public "category"(c: $EnchantmentCategory$$Type): $EnchantmentBuilder
public "checkCompatibility"(i: $Object2BooleanFunction$$Type<$ResourceLocation$$Type>): $EnchantmentBuilder
public "createObject"(): $Enchantment
public "crossbow"(): $EnchantmentBuilder
public "curse"(): $EnchantmentBuilder
public "damageBonus"(i: $EnchantmentBuilder$DamageBonusFunction$$Type): $EnchantmentBuilder
public "damageProtection"(i: $EnchantmentBuilder$DamageProtectionFunction$$Type): $EnchantmentBuilder
public "fishingRod"(): $EnchantmentBuilder
public "maxCost"(i: $Int2IntFunction$$Type): $EnchantmentBuilder
public "maxLevel"(i: integer): $EnchantmentBuilder
public "minCost"(i: $Int2IntFunction$$Type): $EnchantmentBuilder
public "minLevel"(i: integer): $EnchantmentBuilder
public "postAttack"(i: $EnchantmentBuilder$PostFunction$$Type): $EnchantmentBuilder
public "postHurt"(i: $EnchantmentBuilder$PostFunction$$Type): $EnchantmentBuilder
public "rare"(): $EnchantmentBuilder
public "rarity"(r: $Enchantment$Rarity$$Type): $EnchantmentBuilder
public "slots"(s: $EquipmentSlot$$Type[]): $EnchantmentBuilder
public "treasureOnly"(): $EnchantmentBuilder
public "trident"(): $EnchantmentBuilder
public "uncommon"(): $EnchantmentBuilder
public "undiscoverable"(): $EnchantmentBuilder
public "untradeable"(): $EnchantmentBuilder
public "vanishable"(): $EnchantmentBuilder
public "veryRare"(): $EnchantmentBuilder
public "weapon"(): $EnchantmentBuilder
public "wearable"(): $EnchantmentBuilder
}
}

declare module "dev.latvian.mods.kubejs.misc.CustomStatBuilder" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BuilderBase } from "dev.latvian.mods.kubejs.registry.BuilderBase"

export class $CustomStatBuilder extends $BuilderBase<$ResourceLocation> {
constructor(i: $ResourceLocation$$Type)

}
}

declare module "dev.latvian.mods.kubejs.misc.EnchantmentBuilder$DamageProtectionFunction" {
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"

export interface $EnchantmentBuilder$DamageProtectionFunction {
"getDamageProtection"(int0: integer, damageSource1: $DamageSource$$Type): integer
}

export namespace $EnchantmentBuilder$DamageProtectionFunction {
const probejs$$marker: never
}
export abstract class $EnchantmentBuilder$DamageProtectionFunction$$Static implements $EnchantmentBuilder$DamageProtectionFunction {
}
}

declare module "dev.latvian.mods.kubejs.misc.MobEffectBuilder$EffectTickCallback" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

export interface $MobEffectBuilder$EffectTickCallback {
"applyEffectTick"(livingEntity0: $LivingEntity$$Type, int1: integer): void
}

export namespace $MobEffectBuilder$EffectTickCallback {
const probejs$$marker: never
}
export abstract class $MobEffectBuilder$EffectTickCallback$$Static implements $MobEffectBuilder$EffectTickCallback {
}
}

declare module "dev.latvian.mods.kubejs.misc.MobEffectBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $Color$$Type } from "dev.latvian.mods.rhino.mod.util.color.Color"
import { $MobEffectCategory$$Type } from "net.minecraft.world.effect.MobEffectCategory"
import { $MobEffectBuilder$EffectTickCallback$$Type } from "dev.latvian.mods.kubejs.misc.MobEffectBuilder$EffectTickCallback"
import { $BuilderBase } from "dev.latvian.mods.kubejs.registry.BuilderBase"
import { $MobEffect } from "net.minecraft.world.effect.MobEffect"

export class $MobEffectBuilder extends $BuilderBase<$MobEffect> {
constructor(i: $ResourceLocation$$Type)

public "beneficial"(): $MobEffectBuilder
public "category"(c: $MobEffectCategory$$Type): $MobEffectBuilder
public "color"(col: $Color$$Type): $MobEffectBuilder
public "effectTick"(effectTick: $MobEffectBuilder$EffectTickCallback$$Type): $MobEffectBuilder
public "harmful"(): $MobEffectBuilder
public "modifyAttribute"(attribute: $ResourceLocation$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): $MobEffectBuilder
}
}

