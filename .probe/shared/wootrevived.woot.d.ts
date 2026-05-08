declare module "wootrevived.woot.mixins.impl.LivingEntityMixin" {
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"

export interface $LivingEntityMixin {
"woot$dropCustomDeathLoot"(damageSource0: $DamageSource$$Type, int1: integer, boolean2: boolean): void
"woot$dropEquipment"(): void
"woot$dropExperience"(): void
"woot$dropFromLootTable"(damageSource0: $DamageSource$$Type, boolean1: boolean): void
}

export namespace $LivingEntityMixin {
const probejs$$marker: never
}
export abstract class $LivingEntityMixin$$Static implements $LivingEntityMixin {
}
}

declare module "wootrevived.woot.compat.kubejs.mobs.WootDropsPropertiesJS" {
import { $WootDropsProperties, $WootDropsProperties$$Type } from "wootrevived.api.interfaces.WootDropsProperties"
import { $FluidStackJS, $FluidStackJS$$Type } from "dev.latvian.mods.kubejs.fluid.FluidStackJS"
import { $OutputItem, $OutputItem$$Type } from "dev.latvian.mods.kubejs.item.OutputItem"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $StartupEventJS } from "dev.latvian.mods.kubejs.event.StartupEventJS"

export class $WootDropsPropertiesJS extends $StartupEventJS {
constructor(wootDropsProperties0: $WootDropsProperties$$Type)

public "doSimulateChargedCreeper"(): boolean
public "getDimension"(): string
public "getEnchantmentLevel"(string0: string, string1: string): integer
public "getEnchantmentLevel"(string0: string): integer
public "getExperience"(): integer
public "getFactoryTier"(): string
public "getFluidDrops"(): $FluidStackJS[]
public "getItemDrops"(): $OutputItem[]
public "getLuck"(): float
public "getRandom"(): $RandomSource
public "getRawProperties"(): $WootDropsProperties
public "isEnderDragonAlreadyKilled"(): boolean
public "isInFire"(): boolean
public "setExperience"(int0: integer): void
public "setFluidDrops"(fluidStackJS0s: $FluidStackJS$$Type[]): void
public "setItemDrops"(outputItem0s: $OutputItem$$Type[]): void
get "dimension"(): string
get "experience"(): integer
get "factoryTier"(): string
get "fluidDrops"(): $FluidStackJS[]
get "itemDrops"(): $OutputItem[]
get "luck"(): float
get "random"(): $RandomSource
get "rawProperties"(): $WootDropsProperties
get "enderDragonAlreadyKilled"(): boolean
get "inFire"(): boolean
set "experience"(value: integer)
set "fluidDrops"(value: $FluidStackJS$$Type[])
set "itemDrops"(value: $OutputItem$$Type[])
}
}

declare module "wootrevived.woot.compat.kubejs.mobs.WootFactoryMobEventJS" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $WootFactoryMobRegistration$$Type } from "wootrevived.api.registrations.WootFactoryMobRegistration"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $WootDropsPropertiesJS$$Type } from "wootrevived.woot.compat.kubejs.mobs.WootDropsPropertiesJS"
import { $WootFactoryMobEventJS$FactoryMobBuilderJS } from "wootrevived.woot.compat.kubejs.mobs.WootFactoryMobEventJS$FactoryMobBuilderJS"
import { $StartupEventJS } from "dev.latvian.mods.kubejs.event.StartupEventJS"

export class $WootFactoryMobEventJS extends $StartupEventJS {
constructor(wootFactoryMobRegistration0: $WootFactoryMobRegistration$$Type, entityType1: $EntityType$$Type<any>)

public "blacklistMob"(): void
public "factoryMobPatcher"(): $WootFactoryMobEventJS$FactoryMobBuilderJS<any>
public "registerDropsModifier"(consumer0: $Consumer$$Type<$WootDropsPropertiesJS$$Type>): void
}
}

declare module "wootrevived.woot.mixins.impl.EndDragonFightMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EndDragonFightMixin {
"woot$getDragonKilled"(): boolean
"woot$setDragonKilled"(boolean0: boolean): void
}

export namespace $EndDragonFightMixin {
const probejs$$marker: never
}
export abstract class $EndDragonFightMixin$$Static implements $EndDragonFightMixin {
}
}

declare module "wootrevived.woot.mixins.impl.GuiGraphicsMixin" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"

export interface $GuiGraphicsMixin {
"woot$innerBlit"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, float6: float, float7: float, float8: float, float9: float, float10: float, float11: float, float12: float, float13: float): void
}

export namespace $GuiGraphicsMixin {
const probejs$$marker: never
}
export abstract class $GuiGraphicsMixin$$Static implements $GuiGraphicsMixin {
}
}

declare module "wootrevived.woot.mixins.accessors.ServerLevelMixinAccessor" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $PersistentEntitySectionManager, $PersistentEntitySectionManager$$Type } from "net.minecraft.world.level.entity.PersistentEntitySectionManager"

export interface $ServerLevelMixinAccessor {
"woot$getEntityManager"(): $PersistentEntitySectionManager<$Entity>
"woot$setEntityManager"(persistentEntitySectionManager0: $PersistentEntitySectionManager$$Type<$Entity$$Type>): void
}

export namespace $ServerLevelMixinAccessor {
const probejs$$marker: never
}
export abstract class $ServerLevelMixinAccessor$$Static implements $ServerLevelMixinAccessor {
}
}

declare module "wootrevived.woot.mixins.impl.PersistentEntitySectionManagerMixin" {
import { $LevelCallback } from "net.minecraft.world.level.entity.LevelCallback"
import { $EntityPersistentStorage } from "net.minecraft.world.level.entity.EntityPersistentStorage"

export interface $PersistentEntitySectionManagerMixin {
"woot$getCallbacks"<T>(): $LevelCallback<T>
"woot$getPermanentStorage"<T>(): $EntityPersistentStorage<T>
}

export namespace $PersistentEntitySectionManagerMixin {
const probejs$$marker: never
}
export abstract class $PersistentEntitySectionManagerMixin$$Static implements $PersistentEntitySectionManagerMixin {
}
}

declare module "wootrevived.woot.compat.kubejs.mobs.WootFactoryMobEventJS$FactoryMobBuilderJS" {
import { $FluidStackJS$$Type } from "dev.latvian.mods.kubejs.fluid.FluidStackJS"
import { $OutputItem$$Type } from "dev.latvian.mods.kubejs.item.OutputItem"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $WootFactoryMobRegistration$$Type } from "wootrevived.api.registrations.WootFactoryMobRegistration"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $WootDropsPropertiesJS$$Type } from "wootrevived.woot.compat.kubejs.mobs.WootDropsPropertiesJS"

export class $WootFactoryMobEventJS$FactoryMobBuilderJS<T extends $Entity = $Entity> {
constructor(wootFactoryMobRegistration0: $WootFactoryMobRegistration$$Type, entityType1: $EntityType$$Type<T>)

public "blacklist"(boolean0: boolean): $WootFactoryMobEventJS$FactoryMobBuilderJS<T>
public "disabledSimulation"(boolean0: boolean): $WootFactoryMobEventJS$FactoryMobBuilderJS<T>
public "modifyDrops"(biConsumer0: $BiConsumer$$Type<string, $WootDropsPropertiesJS$$Type>): $WootFactoryMobEventJS$FactoryMobBuilderJS<T>
public "patch"(): void
public "rate"(int0: integer): $WootFactoryMobEventJS$FactoryMobBuilderJS<T>
public "setImportFluids"(fluidStackJS0s: $FluidStackJS$$Type[]): $WootFactoryMobEventJS$FactoryMobBuilderJS<T>
public "setImportItems"(outputItem0s: $OutputItem$$Type[]): $WootFactoryMobEventJS$FactoryMobBuilderJS<T>
public "tier"(string0: string): $WootFactoryMobEventJS$FactoryMobBuilderJS<T>
public "vitalityCost"(int0: integer): $WootFactoryMobEventJS$FactoryMobBuilderJS<T>
set "importFluids"(value: $FluidStackJS$$Type[])
set "importItems"(value: $OutputItem$$Type[])
}
}

declare module "wootrevived.woot.mixins.impl.EnderDragonMixin" {
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $EnderDragonMixin {
"woot$setUnlimitedLastHurtByPlayer"(player0: $Player$$Type): void
"woot$tickDeath"(): void
}

export namespace $EnderDragonMixin {
const probejs$$marker: never
}
export abstract class $EnderDragonMixin$$Static implements $EnderDragonMixin {
}
}

declare module "wootrevived.woot.mixins.accessors.LevelMixinAccessor" {
import { $Holder$$Type } from "net.minecraft.core.Holder"
import { $DimensionType, $DimensionType$$Type } from "net.minecraft.world.level.dimension.DimensionType"
import { $Level } from "net.minecraft.world.level.Level"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export interface $LevelMixinAccessor {
"woot$setDimension"(resourceKey0: $ResourceKey$$Type<$Level>, resourceKey1: $ResourceKey$$Type<$DimensionType>, holder2: $Holder$$Type<$DimensionType$$Type>): void
}

export namespace $LevelMixinAccessor {
const probejs$$marker: never
}
export abstract class $LevelMixinAccessor$$Static implements $LevelMixinAccessor {
}
}

declare module "wootrevived.woot.mixins.impl.CreeperMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CreeperMixin {
"woot$setDroppedSkulls"(int0: integer): void
}

export namespace $CreeperMixin {
const probejs$$marker: never
}
export abstract class $CreeperMixin$$Static implements $CreeperMixin {
}
}

