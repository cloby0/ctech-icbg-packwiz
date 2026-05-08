declare module "net.minecraft.world.food.FoodProperties" {
import { $List } from "java.util.List"
import { $MobEffectInstance } from "net.minecraft.world.effect.MobEffectInstance"
import { $Supplier } from "java.util.function.Supplier"
import { $Pair } from "com.mojang.datafixers.util.Pair"

export class $FoodProperties {
readonly "effects": $List<$Pair<$Supplier<$MobEffectInstance>, float>>

public "canAlwaysEat"(): boolean
public "getEffects"(): $List<$Pair<$MobEffectInstance, float>>
public "getNutrition"(): integer
public "getSaturationModifier"(): float
public "isFastFood"(): boolean
public "isMeat"(): boolean
get "nutrition"(): integer
get "saturationModifier"(): float
get "fastFood"(): boolean
get "meat"(): boolean
}
}

declare module "net.minecraft.world.food.FoodData" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $FoodData {
constructor()

public "addAdditionalSaveData"(compoundTag0: $CompoundTag$$Type): void
public "addExhaustion"(float0: float): void
/** @deprecated */
public "eat"(item0: $Item$$Type, itemStack1: $ItemStack$$Type): void
public "eat"(item0: $Item$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type): void
public "eat"(int0: integer, float1: float): void
public "getExhaustionLevel"(): float
public "getFoodLevel"(): integer
public "getLastFoodLevel"(): integer
public "getSaturationLevel"(): float
public "needsFood"(): boolean
public "readAdditionalSaveData"(compoundTag0: $CompoundTag$$Type): void
public "setExhaustion"(float0: float): void
public "setFoodLevel"(int0: integer): void
public "setSaturation"(float0: float): void
public "tick"(player0: $Player$$Type): void
get "foodLevel"(): integer
set "foodLevel"(value: integer)
get "saturationLevel"(): float
set "saturationLevel"(value: float)
get "exhaustionLevel"(): float
get "lastFoodLevel"(): integer
set "exhaustion"(value: float)
set "saturation"(value: float)
}
}

