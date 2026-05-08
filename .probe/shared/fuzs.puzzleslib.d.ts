declare module "fuzs.puzzleslib.impl.event.LootTableModifyEvent" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LootPool$$Type } from "net.minecraft.world.level.storage.loot.LootPool"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $LootTable$$Type } from "net.minecraft.world.level.storage.loot.LootTable"
import { $LootDataManager, $LootDataManager$$Type } from "net.minecraft.world.level.storage.loot.LootDataManager"

export class $LootTableModifyEvent extends $Event {
constructor()
constructor(lootDataManager0: $LootDataManager$$Type, resourceLocation1: $ResourceLocation$$Type, lootTable2: $LootTable$$Type)

public "addPool"(lootPool0: $LootPool$$Type): void
public "getIdentifier"(): $ResourceLocation
public "getLootDataManager"(): $LootDataManager
public "removePool"(int0: integer): boolean
get "identifier"(): $ResourceLocation
get "lootDataManager"(): $LootDataManager
}
}

declare module "fuzs.puzzleslib.mixin.accessor.FireBlockForgeAccessor" {
import { $Block$$Type } from "net.minecraft.world.level.block.Block"

export interface $FireBlockForgeAccessor {
"puzzleslib$setFlammable"(block0: $Block$$Type, int1: integer, int2: integer): void
}

export namespace $FireBlockForgeAccessor {
const probejs$$marker: never
}
export abstract class $FireBlockForgeAccessor$$Static implements $FireBlockForgeAccessor {
}
}

declare module "fuzs.puzzleslib.mixin.client.accessor.ModelBakeryAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ModelBakeryAccessor {
}

export namespace $ModelBakeryAccessor {
const probejs$$marker: never
}
export abstract class $ModelBakeryAccessor$$Static implements $ModelBakeryAccessor {
}
}

declare module "fuzs.puzzleslib.mixin.client.accessor.TooltipAccessor" {
import { $List$$Type } from "java.util.List"
import { $FormattedCharSequence$$Type } from "net.minecraft.util.FormattedCharSequence"

export interface $TooltipAccessor {
"puzzleslib$setCachedTooltip"(list0: $List$$Type<$FormattedCharSequence$$Type>): void
}

export namespace $TooltipAccessor {
const probejs$$marker: never
}
export abstract class $TooltipAccessor$$Static implements $TooltipAccessor {
}
}

declare module "fuzs.puzzleslib.mixin.accessor.MobSpawnSettingsBuilderForgeAccessor" {
import { $EntityType } from "net.minecraft.world.entity.EntityType"
import { $Map } from "java.util.Map"
import { $MobSpawnSettings$MobSpawnCost } from "net.minecraft.world.level.biome.MobSpawnSettings$MobSpawnCost"

export interface $MobSpawnSettingsBuilderForgeAccessor {
"puzzleslib$getMobSpawnCosts"(): $Map<$EntityType<any>, $MobSpawnSettings$MobSpawnCost>
}

export namespace $MobSpawnSettingsBuilderForgeAccessor {
const probejs$$marker: never
}
export abstract class $MobSpawnSettingsBuilderForgeAccessor$$Static implements $MobSpawnSettingsBuilderForgeAccessor {
}
}

declare module "fuzs.puzzleslib.mixin.client.accessor.ItemColorsForgeAccessor" {
import { $Map } from "java.util.Map"
import { $Item } from "net.minecraft.world.item.Item"
import { $ItemColor } from "net.minecraft.client.color.item.ItemColor"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"

export interface $ItemColorsForgeAccessor {
"puzzleslib$getItemColors"(): $Map<$Holder$Reference<$Item>, $ItemColor>
}

export namespace $ItemColorsForgeAccessor {
const probejs$$marker: never
}
export abstract class $ItemColorsForgeAccessor$$Static implements $ItemColorsForgeAccessor {
}
}

declare module "fuzs.puzzleslib.mixin.accessor.BlockItemAccessor" {
import { $Block$$Type } from "net.minecraft.world.level.block.Block"

export interface $BlockItemAccessor {
"puzzleslib$setBlock"(block0: $Block$$Type): void
}

export namespace $BlockItemAccessor {
const probejs$$marker: never
}
export abstract class $BlockItemAccessor$$Static implements $BlockItemAccessor {
}
}

declare module "fuzs.puzzleslib.mixin.client.accessor.ItemForgeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ItemForgeAccessor {
"puzzleslib$getRenderProperties"(): any
"puzzleslib$setRenderProperties"(object0: any): void
}

export namespace $ItemForgeAccessor {
const probejs$$marker: never
}
export abstract class $ItemForgeAccessor$$Static implements $ItemForgeAccessor {
}
}

declare module "fuzs.puzzleslib.impl.data.FileHelperDataProvider" {
import { $ExistingFileHelper$$Type } from "net.minecraftforge.common.data.ExistingFileHelper"

export interface $FileHelperDataProvider {
"puzzleslib$setExistingFileHelper"(existingFileHelper0: $ExistingFileHelper$$Type): void
}

export namespace $FileHelperDataProvider {
const probejs$$marker: never
}
export abstract class $FileHelperDataProvider$$Static implements $FileHelperDataProvider {
}
}

declare module "fuzs.puzzleslib.mixin.accessor.LootTableForgeAccessor" {
import { $List } from "java.util.List"
import { $LootPool } from "net.minecraft.world.level.storage.loot.LootPool"

export interface $LootTableForgeAccessor {
"puzzleslib$getPools"(): $List<$LootPool>
}

export namespace $LootTableForgeAccessor {
const probejs$$marker: never
}
export abstract class $LootTableForgeAccessor$$Static implements $LootTableForgeAccessor {
}
}

declare module "fuzs.puzzleslib.mixin.client.accessor.BlockColorsForgeAccessor" {
import { $BlockColor } from "net.minecraft.client.color.block.BlockColor"
import { $Map } from "java.util.Map"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"

export interface $BlockColorsForgeAccessor {
"puzzleslib$getBlockColors"(): $Map<$Holder$Reference<$Block>, $BlockColor>
}

export namespace $BlockColorsForgeAccessor {
const probejs$$marker: never
}
export abstract class $BlockColorsForgeAccessor$$Static implements $BlockColorsForgeAccessor {
}
}

declare module "fuzs.puzzleslib.mixin.accessor.BlockAccessor" {
import { $Item$$Type } from "net.minecraft.world.item.Item"

export interface $BlockAccessor {
"puzzleslib$setItem"(item0: $Item$$Type): void
}

export namespace $BlockAccessor {
const probejs$$marker: never
}
export abstract class $BlockAccessor$$Static implements $BlockAccessor {
}
}

declare module "fuzs.puzzleslib.mixin.accessor.SimpleContainerAccessor" {
import { $NonNullList$$Type } from "net.minecraft.core.NonNullList"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $SimpleContainerAccessor {
"puzzleslib$setItems"(nonNullList0: $NonNullList$$Type<$ItemStack$$Type>): void
"puzzleslib$setSize"(int0: integer): void
}

export namespace $SimpleContainerAccessor {
const probejs$$marker: never
}
export abstract class $SimpleContainerAccessor$$Static implements $SimpleContainerAccessor {
}
}

declare module "fuzs.puzzleslib.mixin.accessor.ForgeRegistryForgeAccessor" {
import { $IForgeRegistry$AddCallback, $IForgeRegistry$AddCallback$$Type } from "net.minecraftforge.registries.IForgeRegistry$AddCallback"

export interface $ForgeRegistryForgeAccessor<V = any> {
"puzzleslib$getAdd"(): $IForgeRegistry$AddCallback<V>
"puzzleslib$setAdd"(addCallback0: $IForgeRegistry$AddCallback$$Type<V>): void
}

export namespace $ForgeRegistryForgeAccessor {
const probejs$$marker: never
}
export abstract class $ForgeRegistryForgeAccessor$$Static<V = any> implements $ForgeRegistryForgeAccessor<V> {
}
}

declare module "fuzs.puzzleslib.mixin.accessor.AbstractContainerMenuAccessor" {
import { $Slot, $Slot$$Type } from "net.minecraft.world.inventory.Slot"

export interface $AbstractContainerMenuAccessor {
"puzzleslib$callAddSlot"(slot0: $Slot$$Type): $Slot
}

export namespace $AbstractContainerMenuAccessor {
const probejs$$marker: never
}
export abstract class $AbstractContainerMenuAccessor$$Static implements $AbstractContainerMenuAccessor {
}
}

declare module "fuzs.puzzleslib.mixin.accessor.BiomeSpecialEffectsBuilderForgeAccessor" {
import { $AmbientMoodSettings$$Type } from "net.minecraft.world.level.biome.AmbientMoodSettings"
import { $Music$$Type } from "net.minecraft.sounds.Music"
import { $Holder$$Type } from "net.minecraft.core.Holder"
import { $AmbientParticleSettings$$Type } from "net.minecraft.world.level.biome.AmbientParticleSettings"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Optional$$Type } from "java.util.Optional"
import { $AmbientAdditionsSettings$$Type } from "net.minecraft.world.level.biome.AmbientAdditionsSettings"

export interface $BiomeSpecialEffectsBuilderForgeAccessor {
"puzzleslib$setAmbientAdditionsSettings"(optional0: $Optional$$Type<$AmbientAdditionsSettings$$Type>): void
"puzzleslib$setAmbientLoopSoundEvent"(optional0: $Optional$$Type<$Holder$$Type<$SoundEvent$$Type>>): void
"puzzleslib$setAmbientMoodSettings"(optional0: $Optional$$Type<$AmbientMoodSettings$$Type>): void
"puzzleslib$setAmbientParticle"(optional0: $Optional$$Type<$AmbientParticleSettings$$Type>): void
"puzzleslib$setBackgroundMusic"(optional0: $Optional$$Type<$Music$$Type>): void
"puzzleslib$setFoliageColorOverride"(optional0: $Optional$$Type<integer>): void
"puzzleslib$setGrassColorOverride"(optional0: $Optional$$Type<integer>): void
}

export namespace $BiomeSpecialEffectsBuilderForgeAccessor {
const probejs$$marker: never
}
export abstract class $BiomeSpecialEffectsBuilderForgeAccessor$$Static implements $BiomeSpecialEffectsBuilderForgeAccessor {
}
}

