declare module "at.petrak.hexcasting.mixin.accessor.client.AccessorMouseHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorMouseHandler {
"hex$getAccumulatedScroll"(): double
"hex$setAccumulatedScroll"(double0: double): void
}

export namespace $AccessorMouseHandler {
const probejs$$marker: never
}
export abstract class $AccessorMouseHandler$$Static implements $AccessorMouseHandler {
}
}

declare module "at.petrak.hexcasting.mixin.accessor.client.AccessorBlockEntityRenderDispatcher" {
import { $Supplier } from "java.util.function.Supplier"
import { $BlockRenderDispatcher } from "net.minecraft.client.renderer.block.BlockRenderDispatcher"

export interface $AccessorBlockEntityRenderDispatcher {
"hex$getBlockRenderDispatcher"(): $Supplier<$BlockRenderDispatcher>
}

export namespace $AccessorBlockEntityRenderDispatcher {
const probejs$$marker: never
}
export abstract class $AccessorBlockEntityRenderDispatcher$$Static implements $AccessorBlockEntityRenderDispatcher {
}
}

declare module "at.petrak.hexcasting.mixin.accessor.AccessorAbstractArrow" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorAbstractArrow {
"hex$isInGround"(): boolean
}

export namespace $AccessorAbstractArrow {
const probejs$$marker: never
}
export abstract class $AccessorAbstractArrow$$Static implements $AccessorAbstractArrow {
}
}

declare module "at.petrak.hexcasting.mixin.accessor.client.AccessorEmptyTextureStateShard" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Optional } from "java.util.Optional"

export interface $AccessorEmptyTextureStateShard {
"hex$cutoutTexture"(): $Optional<$ResourceLocation>
}

export namespace $AccessorEmptyTextureStateShard {
const probejs$$marker: never
}
export abstract class $AccessorEmptyTextureStateShard$$Static implements $AccessorEmptyTextureStateShard {
}
}

declare module "at.petrak.hexcasting.mixin.accessor.client.AccessorRenderStateShard" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorRenderStateShard {
"hex$name"(): string
}

export namespace $AccessorRenderStateShard {
const probejs$$marker: never
}
export abstract class $AccessorRenderStateShard$$Static implements $AccessorRenderStateShard {
}
}

declare module "at.petrak.hexcasting.mixin.accessor.client.AccessorCompositeRenderType" {
import { $RenderType$CompositeState } from "net.minecraft.client.renderer.RenderType$CompositeState"

export interface $AccessorCompositeRenderType {
"hex$state"(): $RenderType$CompositeState
}

export namespace $AccessorCompositeRenderType {
const probejs$$marker: never
}
export abstract class $AccessorCompositeRenderType$$Static implements $AccessorCompositeRenderType {
}
}

declare module "at.petrak.hexcasting.forge.datagen.TagsProviderEFHSetter" {
import { $ExistingFileHelper$$Type } from "net.minecraftforge.common.data.ExistingFileHelper"

export interface $TagsProviderEFHSetter {
"setEFH"(existingFileHelper0: $ExistingFileHelper$$Type): void
set "eFH"(value: $ExistingFileHelper$$Type)
}

export namespace $TagsProviderEFHSetter {
const probejs$$marker: never
}
export abstract class $TagsProviderEFHSetter$$Static implements $TagsProviderEFHSetter {
}
}

declare module "at.petrak.hexcasting.mixin.accessor.AccessorVillager" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"

export interface $AccessorVillager {
"hex$releaseAllPois"(): void
"hex$tellWitnessesThatIWasMurdered"(entity0: $Entity$$Type): void
}

export namespace $AccessorVillager {
const probejs$$marker: never
}
export abstract class $AccessorVillager$$Static implements $AccessorVillager {
}
}

declare module "at.petrak.hexcasting.mixin.accessor.AccessorEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorEntity {
"hex$markHurt"(): void
}

export namespace $AccessorEntity {
const probejs$$marker: never
}
export abstract class $AccessorEntity$$Static implements $AccessorEntity {
}
}

declare module "at.petrak.hexcasting.mixin.accessor.AccessorLivingEntity" {
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"

export interface $AccessorLivingEntity {
"hex$checkTotemDeathProtection"(damageSource0: $DamageSource$$Type): boolean
"hex$getDeathSound"(): $SoundEvent
"hex$getLastHurt"(): float
"hex$getSoundVolume"(): float
"hex$playHurtSound"(damageSource0: $DamageSource$$Type): void
"hex$setLastDamageSource"(damageSource0: $DamageSource$$Type): void
"hex$setLastDamageStamp"(long0: long): void
"hex$setLastHurt"(float0: float): void
}

export namespace $AccessorLivingEntity {
const probejs$$marker: never
}
export abstract class $AccessorLivingEntity$$Static implements $AccessorLivingEntity {
}
}

declare module "at.petrak.hexcasting.mixin.accessor.AccessorLootTable" {
import { $LootContext$$Type } from "net.minecraft.world.level.storage.loot.LootContext"
import { $LootItemFunction, $LootItemFunction$$Type } from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $AccessorLootTable {
"hex$getFunctions"(): $LootItemFunction[]
"hex$setCompositeFunction"(biFunction0: $BiFunction$$Type<$ItemStack$$Type, $LootContext$$Type, $ItemStack>): void
"hex$setFunctions"(lootItemFunction0s: $LootItemFunction$$Type[]): void
}

export namespace $AccessorLootTable {
const probejs$$marker: never
}
export abstract class $AccessorLootTable$$Static implements $AccessorLootTable {
}
}

declare module "at.petrak.hexcasting.mixin.accessor.AccessorUseOnContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorUseOnContext {
}

export namespace $AccessorUseOnContext {
const probejs$$marker: never
}
export abstract class $AccessorUseOnContext$$Static implements $AccessorUseOnContext {
}
}

declare module "at.petrak.hexcasting.mixin.accessor.client.AccessorRenderType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorRenderType {
}

export namespace $AccessorRenderType {
const probejs$$marker: never
}
export abstract class $AccessorRenderType$$Static implements $AccessorRenderType {
}
}

declare module "at.petrak.paucal.api.mixin.AccessorTagsProvider" {
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $TagBuilder } from "net.minecraft.tags.TagBuilder"

export interface $AccessorTagsProvider<T = any> {
"paucal$getOrCreateRawBuilder"(tagKey0: $TagKey$$Type<T>): $TagBuilder
}

export namespace $AccessorTagsProvider {
const probejs$$marker: never
}
export abstract class $AccessorTagsProvider$$Static<T = any> implements $AccessorTagsProvider<T> {
}
}

