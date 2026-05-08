declare module "net.minecraft.world.effect.MobEffectInstance$FactorData" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $MobEffectInstance$$Type } from "net.minecraft.world.effect.MobEffectInstance"

export class $MobEffectInstance$FactorData {
static readonly "CODEC": $Codec<$MobEffectInstance$FactorData>

constructor(int0: integer, float1: float, float2: float, float3: float, int4: integer, float5: float, boolean6: boolean)
constructor(int0: integer)

public "getFactor"(livingEntity0: $LivingEntity$$Type, float1: float): float
public "tick"(mobEffectInstance0: $MobEffectInstance$$Type): void
}
}

declare module "net.minecraft.world.effect.AbsoptionMobEffect" {
import { $List } from "java.util.List"
import { $MobEffectInstance$$Type } from "net.minecraft.world.effect.MobEffectInstance"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $MobEffect } from "net.minecraft.world.effect.MobEffect"

export class $AbsoptionMobEffect extends $MobEffect {
public "getCurativeItems"(): $List<$ItemStack>
public "getSortOrder"(mobEffectInstance0: $MobEffectInstance$$Type): integer
get "curativeItems"(): $List<$ItemStack>
}
}

declare module "net.minecraft.world.effect.MobEffectInstance" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $IForgeMobEffectInstance } from "net.minecraftforge.common.extensions.IForgeMobEffectInstance"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $List, $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $MobEffectInstanceAccessor } from "com.simibubi.create.foundation.mixin.accessor.MobEffectInstanceAccessor"
import { $MobEffectInstance$FactorData, $MobEffectInstance$FactorData$$Type } from "net.minecraft.world.effect.MobEffectInstance$FactorData"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $Comparable } from "java.lang.Comparable"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $AccessorMobEffectInstance } from "net.darkhax.bookshelf.mixin.accessors.effect.AccessorMobEffectInstance"
import { $MobEffect, $MobEffect$$Type } from "net.minecraft.world.effect.MobEffect"

export class $MobEffectInstance implements $Comparable<$MobEffectInstance>, $IForgeMobEffectInstance, $AccessorMobEffectInstance, $MobEffectInstanceAccessor {
static readonly "INFINITE_DURATION": integer
"showIcon": boolean

constructor(mobEffect0: $MobEffect$$Type, int1: integer, int2: integer, boolean3: boolean, boolean4: boolean, boolean5: boolean, mobEffectInstance6: $MobEffectInstance$$Type, optional7: $Optional$$Type<$MobEffectInstance$FactorData$$Type>)
constructor(mobEffect0: $MobEffect$$Type)
constructor(mobEffect0: $MobEffect$$Type, int1: integer, int2: integer, boolean3: boolean, boolean4: boolean)
constructor(mobEffect0: $MobEffect$$Type, int1: integer, int2: integer)
constructor(mobEffect0: $MobEffect$$Type, int1: integer)
constructor(mobEffect0: $MobEffect$$Type, int1: integer, int2: integer, boolean3: boolean, boolean4: boolean, boolean5: boolean)
constructor(mobEffectInstance0: $MobEffectInstance$$Type)

public "addCurativeItem"(itemStack0: $ItemStack$$Type): void
public "applyEffect"(livingEntity0: $LivingEntity$$Type): void
public "compareTo"(mobEffectInstance0: $MobEffectInstance$$Type): integer
public "endsWithin"(int0: integer): boolean
public "getAmplifier"(): integer
public "getCurativeItems"(): $List<$ItemStack>
public "getDescriptionId"(): string
public "getDuration"(): integer
public "getEffect"(): $MobEffect
public "getFactorData"(): $Optional<$MobEffectInstance$FactorData>
public "isAmbient"(): boolean
public "isCurativeItem"(itemStack0: $ItemStack$$Type): boolean
public "isInfiniteDuration"(): boolean
public "isVisible"(): boolean
public static "load"(compoundTag0: $CompoundTag$$Type): $MobEffectInstance
public "mapDuration"(int2IntFunction0: $Int2IntFunction$$Type): integer
public "save"(compoundTag0: $CompoundTag$$Type): $CompoundTag
public "setCurativeItems"(list0: $List$$Type<$ItemStack$$Type>): void
public "showIcon"(): boolean
public "tick"(livingEntity0: $LivingEntity$$Type, runnable1: $Runnable$$Type): boolean
public "update"(mobEffectInstance0: $MobEffectInstance$$Type): boolean
public "writeCurativeItems"(compoundTag0: $CompoundTag$$Type): void
get "ambient"(): boolean
set "ambient"(value: boolean)
get "amplifier"(): integer
set "amplifier"(value: integer)
get "duration"(): integer
set "duration"(value: integer)
get "visible"(): boolean
set "visible"(value: boolean)
get "curativeItems"(): $List<$ItemStack>
get "descriptionId"(): string
get "effect"(): $MobEffect
get "factorData"(): $Optional<$MobEffectInstance$FactorData>
get "infiniteDuration"(): boolean
set "curativeItems"(value: $List$$Type<$ItemStack$$Type>)
}
}

declare module "net.minecraft.world.effect.MobEffectCategory" {
import { $Enum } from "java.lang.Enum"
import { $ChatFormatting } from "net.minecraft.ChatFormatting"

export class $MobEffectCategory extends $Enum<$MobEffectCategory> {
static readonly "BENEFICIAL": $MobEffectCategory
static readonly "HARMFUL": $MobEffectCategory
static readonly "NEUTRAL": $MobEffectCategory

public "getTooltipFormatting"(): $ChatFormatting
public static "valueOf"(string0: string): $MobEffectCategory
public static "values"(): $MobEffectCategory[]
get "tooltipFormatting"(): $ChatFormatting
}
}

declare module "net.minecraft.world.effect.InstantenousMobEffect" {
import { $List } from "java.util.List"
import { $MobEffectInstance$$Type } from "net.minecraft.world.effect.MobEffectInstance"
import { $MobEffectCategory$$Type } from "net.minecraft.world.effect.MobEffectCategory"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $MobEffect } from "net.minecraft.world.effect.MobEffect"

export class $InstantenousMobEffect extends $MobEffect {
constructor(mobEffectCategory0: $MobEffectCategory$$Type, int1: integer)

public "getCurativeItems"(): $List<$ItemStack>
public "getSortOrder"(mobEffectInstance0: $MobEffectInstance$$Type): integer
get "curativeItems"(): $List<$ItemStack>
}
}

declare module "net.minecraft.world.effect.HealthBoostMobEffect" {
import { $List } from "java.util.List"
import { $MobEffectInstance$$Type } from "net.minecraft.world.effect.MobEffectInstance"
import { $MobEffectCategory$$Type } from "net.minecraft.world.effect.MobEffectCategory"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $MobEffect } from "net.minecraft.world.effect.MobEffect"

export class $HealthBoostMobEffect extends $MobEffect {
constructor(mobEffectCategory0: $MobEffectCategory$$Type, int1: integer)

public "getCurativeItems"(): $List<$ItemStack>
public "getSortOrder"(mobEffectInstance0: $MobEffectInstance$$Type): integer
get "curativeItems"(): $List<$ItemStack>
}
}

declare module "net.minecraft.world.effect.AttackDamageMobEffect" {
import { $List } from "java.util.List"
import { $MobEffectInstance$$Type } from "net.minecraft.world.effect.MobEffectInstance"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $MobEffect } from "net.minecraft.world.effect.MobEffect"

export class $AttackDamageMobEffect extends $MobEffect {
public "getCurativeItems"(): $List<$ItemStack>
public "getSortOrder"(mobEffectInstance0: $MobEffectInstance$$Type): integer
get "curativeItems"(): $List<$ItemStack>
}
}

