declare module "wootrevived.api.WootFactoryMob" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $WootFactoryMob$Properties$$Type } from "wootrevived.api.WootFactoryMob$Properties"
import { $EntityType, $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $HolderLookup$Provider$$Type } from "net.minecraft.core.HolderLookup$Provider"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $WootFactoryMob$Phase$$Type } from "wootrevived.api.WootFactoryMob$Phase"
import { $WootDropsProperties$$Type } from "wootrevived.api.interfaces.WootDropsProperties"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $Tier } from "wootrevived.api.enums.Tier"
import { $FluidStack } from "net.minecraftforge.fluids.FluidStack"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export class $WootFactoryMob<T extends $Entity = $Entity> {
constructor(entityType0: $EntityType$$Type<T>, properties1: $WootFactoryMob$Properties$$Type)

public "getDisplayName"(compoundTag0: $CompoundTag$$Type, provider1: $HolderLookup$Provider$$Type): $MutableComponent
public "getEntityType"(): $EntityType<T>
public "getImportFluids"(compoundTag0: $CompoundTag$$Type, provider1: $HolderLookup$Provider$$Type): $List<$FluidStack>
public "getImportItems"(compoundTag0: $CompoundTag$$Type, provider1: $HolderLookup$Provider$$Type): $List<$ItemStack>
public "getSpawnTickRate"(): integer
public "getTier"(): $Tier
public "getTooltipKillName"(compoundTag0: $CompoundTag$$Type, provider1: $HolderLookup$Provider$$Type): $MutableComponent
public "getVitalityFuelCost"(): integer
public "isBlacklisted"(): boolean
public "isSame"(compoundTag0: $CompoundTag$$Type, compoundTag1: $CompoundTag$$Type, provider2: $HolderLookup$Provider$$Type): boolean
public "isSimulationDisabled"(): boolean
public "loadEntity"(compoundTag0: $CompoundTag$$Type, serverLevel1: $ServerLevel$$Type): $LivingEntity
public "modifyDrops"(phase0: $WootFactoryMob$Phase$$Type, wootDropsProperties1: $WootDropsProperties$$Type): void
public "saveTag"(compoundTag0: $CompoundTag$$Type, provider1: $HolderLookup$Provider$$Type): $CompoundTag
get "entityType"(): $EntityType<T>
get "spawnTickRate"(): integer
get "tier"(): $Tier
get "vitalityFuelCost"(): integer
get "blacklisted"(): boolean
get "simulationDisabled"(): boolean
}
}

declare module "wootrevived.api.WootFactoryMob$Phase" {
import { $Enum } from "java.lang.Enum"

export class $WootFactoryMob$Phase extends $Enum<$WootFactoryMob$Phase> {
static readonly "AFTER_DROP_CALLBACKS": $WootFactoryMob$Phase
static readonly "AFTER_UPGRADES": $WootFactoryMob$Phase
static readonly "BEFORE_DROP_CALLBACKS": $WootFactoryMob$Phase

public "isAfterDropCallback"(): boolean
public "isAfterUpgrades"(): boolean
public "isBeforeDropCallback"(): boolean
public static "valueOf"(string0: string): $WootFactoryMob$Phase
public static "values"(): $WootFactoryMob$Phase[]
get "afterDropCallback"(): boolean
get "afterUpgrades"(): boolean
get "beforeDropCallback"(): boolean
}
}

declare module "wootrevived.api.enums.Tier" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $Tier extends $Enum<$Tier> implements $StringRepresentable {
static readonly "INVALID": $Tier
static readonly "TIER_1": $Tier
static readonly "TIER_2": $Tier
static readonly "TIER_3": $Tier
static readonly "TIER_4": $Tier
static readonly "TIER_5": $Tier

public "defaultVitalityCost"(): integer
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public "isFactoryTierValid"(tier0: $Tier$$Type): boolean
public "isMobTierValid"(tier0: $Tier$$Type): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $Tier
public static "values"(): $Tier[]
get "serializedName"(): string
}
}

declare module "wootrevived.api.WootFactoryMob$Properties" {
import { $Tier$$Type } from "wootrevived.api.enums.Tier"

export class $WootFactoryMob$Properties {
constructor()

public "blacklist"(boolean0: boolean): $WootFactoryMob$Properties
public "disabledSimulation"(boolean0: boolean): $WootFactoryMob$Properties
public "rate"(int0: integer): $WootFactoryMob$Properties
public "tier"(tier0: $Tier$$Type): $WootFactoryMob$Properties
public "vitalityCost"(int0: integer): $WootFactoryMob$Properties
}
}

declare module "wootrevived.api.interfaces.WootDropsProperties" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $HolderLookup$Provider } from "net.minecraft.core.HolderLookup$Provider"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"
import { $ServerLevel } from "net.minecraft.server.level.ServerLevel"
import { $List } from "java.util.List"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Tier } from "wootrevived.api.enums.Tier"
import { $FluidStack } from "net.minecraftforge.fluids.FluidStack"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level } from "net.minecraft.world.level.Level"
import { $WootFactoryMob } from "wootrevived.api.WootFactoryMob"

export interface $WootDropsProperties {
"doSimulateChargedCreeper"(): boolean
"getDimension"(): $ResourceKey<$Level>
"getEntity"(): $LivingEntity
"getExperience"(): integer
"getFactoryMob"(): $WootFactoryMob<any>
"getFactoryMobTag"(): $CompoundTag
"getFactoryTier"(): $Tier
"getFluidDrops"(): $List<$FluidStack>
"getHeartLevel"(): $ServerLevel
"getHeartPos"(): $BlockPos
"getItemDrops"(): $List<$ItemStack>
"getLevel"(): $ServerLevel
"getLookupProvider"(): $HolderLookup$Provider
"getLuck"(): float
"getMainHandItem"(): $ItemStack
"getOffHandItem"(): $ItemStack
"getRandom"(): $RandomSource
"isEnderDragonAlreadyKilled"(): boolean
"isInFire"(): boolean
"setExperience"(int0: integer): void
get "dimension"(): $ResourceKey<$Level>
get "entity"(): $LivingEntity
get "experience"(): integer
get "factoryMob"(): $WootFactoryMob<any>
get "factoryMobTag"(): $CompoundTag
get "factoryTier"(): $Tier
get "fluidDrops"(): $List<$FluidStack>
get "heartLevel"(): $ServerLevel
get "heartPos"(): $BlockPos
get "itemDrops"(): $List<$ItemStack>
get "level"(): $ServerLevel
get "lookupProvider"(): $HolderLookup$Provider
get "luck"(): float
get "mainHandItem"(): $ItemStack
get "offHandItem"(): $ItemStack
get "random"(): $RandomSource
get "enderDragonAlreadyKilled"(): boolean
get "inFire"(): boolean
set "experience"(value: integer)
}

export namespace $WootDropsProperties {
const probejs$$marker: never
}
export abstract class $WootDropsProperties$$Static implements $WootDropsProperties {
}
}

declare module "wootrevived.api.registrations.WootFactoryMobRegistration" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $WootDropsProperties$$Type } from "wootrevived.api.interfaces.WootDropsProperties"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $WootFactoryMob$$Type } from "wootrevived.api.WootFactoryMob"

export class $WootFactoryMobRegistration {
constructor()

public "registerDropsModifier"(entityType0: $EntityType$$Type<any>, consumer1: $Consumer$$Type<$WootDropsProperties$$Type>): void
public "registerFactoryMob"(wootFactoryMob0: $WootFactoryMob$$Type<any>): void
public "registerGlobalDropsModifier"(consumer0: $Consumer$$Type<$WootDropsProperties$$Type>): void
}
}

