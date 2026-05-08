declare module "com.tterrag.registrate.providers.RegistrateAdvancementProvider" {
import { $Advancement, $Advancement$$Type } from "net.minecraft.advancements.Advancement"
import { $CompletableFuture, $CompletableFuture$$Type } from "java.util.concurrent.CompletableFuture"
import { $HolderLookup$Provider$$Type } from "net.minecraft.core.HolderLookup$Provider"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $CachedOutput$$Type } from "net.minecraft.data.CachedOutput"
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $AbstractRegistrate$$Type } from "com.tterrag.registrate.AbstractRegistrate"
import { $PackOutput$$Type } from "net.minecraft.data.PackOutput"
import { $Path$$Type } from "java.nio.file.Path"
import { $RegistrateProvider } from "com.tterrag.registrate.providers.RegistrateProvider"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export class $RegistrateAdvancementProvider implements $RegistrateProvider, $Consumer<$Advancement> {
constructor(abstractRegistrate0: $AbstractRegistrate$$Type<any>, packOutput1: $PackOutput$$Type, completableFuture2: $CompletableFuture$$Type<$HolderLookup$Provider$$Type>)

public "accept"(advancement0: $Advancement$$Type): void
public "andThen"(consumer0: $Consumer$$Type<$Advancement$$Type>): $Consumer<$Advancement>
public "desc"(string0: string, string1: string, string2: string): $MutableComponent
public "getName"(): string
public "getSide"(): $LogicalSide
public "run"(cachedOutput0: $CachedOutput$$Type): $CompletableFuture<any>
public static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
public "title"(string0: string, string1: string, string2: string): $MutableComponent
get "name"(): string
get "side"(): $LogicalSide
}
}

declare module "com.tterrag.registrate.providers.loot.RegistrateLootTableProvider$LootType" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $AbstractRegistrate$$Type } from "com.tterrag.registrate.AbstractRegistrate"
import { $RegistrateLootTables, $RegistrateLootTables$$Type } from "com.tterrag.registrate.providers.loot.RegistrateLootTables"
import { $RegistrateEntityLootTables } from "com.tterrag.registrate.providers.loot.RegistrateEntityLootTables"
import { $NonNullBiFunction$$Type } from "com.tterrag.registrate.util.nullness.NonNullBiFunction"
import { $LootContextParamSet, $LootContextParamSet$$Type } from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"
import { $RegistrateBlockLootTables } from "com.tterrag.registrate.providers.loot.RegistrateBlockLootTables"

export interface $RegistrateLootTableProvider$LootType<T extends $RegistrateLootTables = $RegistrateLootTables> {
"getLootCreator"(abstractRegistrate0: $AbstractRegistrate$$Type<any>, consumer1: $Consumer$$Type<T>): T
"getLootSet"(): $LootContextParamSet
get "lootSet"(): $LootContextParamSet
}

export namespace $RegistrateLootTableProvider$LootType {
const BLOCK: $RegistrateLootTableProvider$LootType<$RegistrateBlockLootTables>
const ENTITY: $RegistrateLootTableProvider$LootType<$RegistrateEntityLootTables>
function register<T extends $RegistrateLootTables>(string0: string, lootContextParamSet1: $LootContextParamSet$$Type, nonNullBiFunction2: $NonNullBiFunction$$Type<$AbstractRegistrate$$Type, $Consumer$$Type<T>, T>): $RegistrateLootTableProvider$LootType<T>
}
export abstract class $RegistrateLootTableProvider$LootType$$Static<T extends $RegistrateLootTables = $RegistrateLootTables> implements $RegistrateLootTableProvider$LootType<T> {
static readonly "BLOCK": $RegistrateLootTableProvider$LootType<$RegistrateBlockLootTables>
static readonly "ENTITY": $RegistrateLootTableProvider$LootType<$RegistrateEntityLootTables>

static "register"<T extends $RegistrateLootTables>(string0: string, lootContextParamSet1: $LootContextParamSet$$Type, nonNullBiFunction2: $NonNullBiFunction$$Type<$AbstractRegistrate$$Type, $Consumer$$Type<T>, T>): $RegistrateLootTableProvider$LootType<T>
}
}

declare module "com.tterrag.registrate.util.nullness.NonNullSupplier" {
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"

export interface $NonNullSupplier<T = any> extends $Supplier<T> {
"get"(): T
"lazy"(): $NonNullSupplier<T>
}

export namespace $NonNullSupplier {
function lazy<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
function of<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
function of<T>(supplier0: $Supplier$$Type<T>, nonNullSupplier1: $NonNullSupplier$$Type<string>): $NonNullSupplier<T>
}
export abstract class $NonNullSupplier$$Static<T = any> implements $NonNullSupplier<T> {
static "lazy"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
static "of"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
static "of"<T>(supplier0: $Supplier$$Type<T>, nonNullSupplier1: $NonNullSupplier$$Type<string>): $NonNullSupplier<T>
}
}

declare module "com.tterrag.registrate.providers.ProviderType" {
import { $EntityType } from "net.minecraft.world.entity.EntityType"
import { $RegistrateBlockstateProvider } from "com.tterrag.registrate.providers.RegistrateBlockstateProvider"
import { $RegistrateLangProvider } from "com.tterrag.registrate.providers.RegistrateLangProvider"
import { $RegistrateItemTagsProvider } from "com.tterrag.registrate.providers.RegistrateItemTagsProvider"
import { $RegistrateRecipeProvider } from "com.tterrag.registrate.providers.RegistrateRecipeProvider"
import { $AbstractRegistrate, $AbstractRegistrate$$Type } from "com.tterrag.registrate.AbstractRegistrate"
import { $RegistrateLootTableProvider } from "com.tterrag.registrate.providers.loot.RegistrateLootTableProvider"
import { $RegistrateGenericProvider } from "com.tterrag.registrate.providers.RegistrateGenericProvider"
import { $NonNullUnaryOperator$$Type } from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import { $RegistrateAdvancementProvider } from "com.tterrag.registrate.providers.RegistrateAdvancementProvider"
import { $GatherDataEvent, $GatherDataEvent$$Type } from "net.minecraftforge.data.event.GatherDataEvent"
import { $Map$$Type } from "java.util.Map"
import { $NonNullBiFunction, $NonNullBiFunction$$Type } from "com.tterrag.registrate.util.nullness.NonNullBiFunction"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $Fluid } from "net.minecraft.world.level.material.Fluid"
import { $NonNullFunction$$Type } from "com.tterrag.registrate.util.nullness.NonNullFunction"
import { $RegistrateTagsProvider$IntrinsicImpl } from "com.tterrag.registrate.providers.RegistrateTagsProvider$IntrinsicImpl"
import { $RegistrateItemModelProvider } from "com.tterrag.registrate.providers.RegistrateItemModelProvider"
import { $RegistrateProvider, $RegistrateProvider$$Type } from "com.tterrag.registrate.providers.RegistrateProvider"

export interface $ProviderType<T extends $RegistrateProvider = $RegistrateProvider> {
"create"(abstractRegistrate0: $AbstractRegistrate$$Type<any>, gatherDataEvent1: $GatherDataEvent$$Type, map2: $Map$$Type<$ProviderType$$Type<any>, $RegistrateProvider$$Type>): T
}

export namespace $ProviderType {
const ADVANCEMENT: $ProviderType<$RegistrateAdvancementProvider>
const BLOCKSTATE: $ProviderType<$RegistrateBlockstateProvider>
const BLOCK_TAGS: $ProviderType<$RegistrateTagsProvider$IntrinsicImpl<$Block>>
const ENTITY_TAGS: $ProviderType<$RegistrateTagsProvider$IntrinsicImpl<$EntityType<any>>>
const FLUID_TAGS: $ProviderType<$RegistrateTagsProvider$IntrinsicImpl<$Fluid>>
const GENERIC_CLIENT: $ProviderType<$RegistrateGenericProvider>
const GENERIC_SERVER: $ProviderType<$RegistrateGenericProvider>
const ITEM_MODEL: $ProviderType<$RegistrateItemModelProvider>
const ITEM_TAGS: $ProviderType<$RegistrateItemTagsProvider>
const LANG: $ProviderType<$RegistrateLangProvider>
const LOOT: $ProviderType<$RegistrateLootTableProvider>
const RECIPE: $ProviderType<$RegistrateRecipeProvider>
function register<T extends $RegistrateProvider>(string0: string, nonNullFunction1: $NonNullFunction$$Type<$ProviderType$$Type<T>, $NonNullBiFunction<$AbstractRegistrate<any>, $GatherDataEvent, T>>): $ProviderType<T>
function register<T extends $RegistrateProvider>(string0: string, nonNullBiFunction1: $NonNullBiFunction$$Type<$AbstractRegistrate$$Type<any>, $GatherDataEvent$$Type, T>): $ProviderType<T>
function register<T extends $RegistrateProvider>(string0: string, providerType1: $ProviderType$$Type<T>): $ProviderType<T>
function registerDelegate<T extends $RegistrateProvider>(string0: string, nonNullUnaryOperator1: $NonNullUnaryOperator$$Type<$ProviderType$$Type<T>>): $ProviderType<T>
}
export abstract class $ProviderType$$Static<T extends $RegistrateProvider = $RegistrateProvider> implements $ProviderType<T> {
static readonly "ADVANCEMENT": $ProviderType<$RegistrateAdvancementProvider>
static readonly "BLOCKSTATE": $ProviderType<$RegistrateBlockstateProvider>
static readonly "BLOCK_TAGS": $ProviderType<$RegistrateTagsProvider$IntrinsicImpl<$Block>>
static readonly "ENTITY_TAGS": $ProviderType<$RegistrateTagsProvider$IntrinsicImpl<$EntityType<any>>>
static readonly "FLUID_TAGS": $ProviderType<$RegistrateTagsProvider$IntrinsicImpl<$Fluid>>
static readonly "GENERIC_CLIENT": $ProviderType<$RegistrateGenericProvider>
static readonly "GENERIC_SERVER": $ProviderType<$RegistrateGenericProvider>
static readonly "ITEM_MODEL": $ProviderType<$RegistrateItemModelProvider>
static readonly "ITEM_TAGS": $ProviderType<$RegistrateItemTagsProvider>
static readonly "LANG": $ProviderType<$RegistrateLangProvider>
static readonly "LOOT": $ProviderType<$RegistrateLootTableProvider>
static readonly "RECIPE": $ProviderType<$RegistrateRecipeProvider>

static "register"<T extends $RegistrateProvider>(string0: string, nonNullFunction1: $NonNullFunction$$Type<$ProviderType$$Type<T>, $NonNullBiFunction<$AbstractRegistrate<any>, $GatherDataEvent, T>>): $ProviderType<T>
static "register"<T extends $RegistrateProvider>(string0: string, nonNullBiFunction1: $NonNullBiFunction$$Type<$AbstractRegistrate$$Type<any>, $GatherDataEvent$$Type, T>): $ProviderType<T>
static "register"<T extends $RegistrateProvider>(string0: string, providerType1: $ProviderType$$Type<T>): $ProviderType<T>
static "registerDelegate"<T extends $RegistrateProvider>(string0: string, nonNullUnaryOperator1: $NonNullUnaryOperator$$Type<$ProviderType$$Type<T>>): $ProviderType<T>
}
}

declare module "com.tterrag.registrate.builders.BlockEntityBuilder$BlockEntityFactory" {
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $BlockEntityBuilder$BlockEntityFactory<T extends $BlockEntity = $BlockEntity> {
"create"(blockEntityType0: $BlockEntityType$$Type<T>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): T
}

export namespace $BlockEntityBuilder$BlockEntityFactory {
const probejs$$marker: never
}
export abstract class $BlockEntityBuilder$BlockEntityFactory$$Static<T extends $BlockEntity = $BlockEntity> implements $BlockEntityBuilder$BlockEntityFactory<T> {
}
}

declare module "com.tterrag.registrate.builders.FluidBuilder$FluidTypeFactory" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $FluidType$Properties$$Type } from "net.minecraftforge.fluids.FluidType$Properties"
import { $FluidType } from "net.minecraftforge.fluids.FluidType"

export interface $FluidBuilder$FluidTypeFactory {
"create"(properties0: $FluidType$Properties$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): $FluidType
}

export namespace $FluidBuilder$FluidTypeFactory {
const probejs$$marker: never
}
export abstract class $FluidBuilder$FluidTypeFactory$$Static implements $FluidBuilder$FluidTypeFactory {
}
}

declare module "com.tterrag.registrate.providers.RegistrateLangProvider" {
import { $CreativeModeTab$$Type } from "net.minecraft.world.item.CreativeModeTab"
import { $EntityType } from "net.minecraft.world.entity.EntityType"
import { $Item } from "net.minecraft.world.item.Item"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $CachedOutput$$Type } from "net.minecraft.data.CachedOutput"
import { $Registry } from "net.minecraft.core.Registry"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $AbstractRegistrate$$Type } from "com.tterrag.registrate.AbstractRegistrate"
import { $PackOutput$$Type } from "net.minecraft.data.PackOutput"
import { $List$$Type } from "java.util.List"
import { $NonNullSupplier$$Type } from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import { $ItemLike } from "net.minecraft.world.level.ItemLike"
import { $LanguageProvider } from "net.minecraftforge.common.data.LanguageProvider"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $Path$$Type } from "java.nio.file.Path"
import { $RegistrateProvider } from "com.tterrag.registrate.providers.RegistrateProvider"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export class $RegistrateLangProvider extends $LanguageProvider implements $RegistrateProvider {
constructor(abstractRegistrate0: $AbstractRegistrate$$Type<any>, packOutput1: $PackOutput$$Type)

public "add"(creativeModeTab0: $CreativeModeTab$$Type, string1: string): void
public "addBlock"(nonNullSupplier0: $NonNullSupplier$$Type<$Block>): void
public "addBlockWithTooltip"(nonNullSupplier0: $NonNullSupplier$$Type<$Block>, string1: string): void
public "addBlockWithTooltip"(nonNullSupplier0: $NonNullSupplier$$Type<$Block>, string1: string, string2: string): void
public "addEntityType"(nonNullSupplier0: $NonNullSupplier$$Type<$EntityType<any>>): void
public "addItem"(nonNullSupplier0: $NonNullSupplier$$Type<$Item>): void
public "addItemWithTooltip"(nonNullSupplier0: $NonNullSupplier$$Type<$Item>, string1: string, list2: $List$$Type<string>): void
public "addTooltip"(nonNullSupplier0: $NonNullSupplier$$Type<$ItemLike>, string1: string): void
public "addTooltip"(nonNullSupplier0: $NonNullSupplier$$Type<$ItemLike>, list1: $List$$Type<string>): void
public "getAutomaticName"<T>(nonNullSupplier0: $NonNullSupplier$$Type<T>, resourceKey1: $ResourceKey$$Type<$Registry<T>>): string
public "getSide"(): $LogicalSide
public static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
public static "toEnglishName"(string0: string): string
get "side"(): $LogicalSide
}
}

declare module "com.tterrag.registrate.util.entry.EntityEntry" {
import { $AbstractRegistrate$$Type } from "com.tterrag.registrate.AbstractRegistrate"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $NonNullSupplier, $NonNullSupplier$$Type } from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import { $EntityType, $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $RegistryEntry, $RegistryEntry$$Type } from "com.tterrag.registrate.util.entry.RegistryEntry"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $RegistryObject$$Type } from "net.minecraftforge.registries.RegistryObject"

export class $EntityEntry<T extends $Entity = $Entity> extends $RegistryEntry<$EntityType<T>> {
constructor(abstractRegistrate0: $AbstractRegistrate$$Type<any>, registryObject1: $RegistryObject$$Type<$EntityType$$Type<T>>)

public static "cast"<T extends $Entity>(registryEntry0: $RegistryEntry$$Type<$EntityType$$Type<T>>): $EntityEntry<T>
public "create"(level0: $Level$$Type): T
public "is"(entity0: $Entity$$Type): boolean
public static "lazy"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public "lazy"(): $NonNullSupplier<$EntityType<T>>
public static "of"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public static "of"<T>(supplier0: $Supplier$$Type<T>, nonNullSupplier1: $NonNullSupplier$$Type<string>): $NonNullSupplier<T>
}
}

declare module "com.tterrag.registrate.builders.MenuBuilder$ScreenFactory" {
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Screen } from "net.minecraft.client.gui.screens.Screen"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $MenuAccess } from "net.minecraft.client.gui.screens.inventory.MenuAccess"

export interface $MenuBuilder$ScreenFactory<M extends $AbstractContainerMenu = $AbstractContainerMenu, T extends ($Screen & $MenuAccess<M>) = ($Screen & $MenuAccess<M>)> {
"create"(m0: M, inventory1: $Inventory$$Type, component2: $Component$$Type): T
}

export namespace $MenuBuilder$ScreenFactory {
const probejs$$marker: never
}
export abstract class $MenuBuilder$ScreenFactory$$Static<M extends $AbstractContainerMenu = $AbstractContainerMenu, T extends ($Screen & $MenuAccess<M>) = ($Screen & $MenuAccess<M>)> implements $MenuBuilder$ScreenFactory<M, T> {
}
}

declare module "com.tterrag.registrate.providers.RegistrateGenericProvider$GeneratorData" {
import { $PackOutput, $PackOutput$$Type } from "net.minecraft.data.PackOutput"
import { $CompletableFuture, $CompletableFuture$$Type } from "java.util.concurrent.CompletableFuture"
import { $Record } from "java.lang.Record"
import { $HolderLookup$Provider, $HolderLookup$Provider$$Type } from "net.minecraft.core.HolderLookup$Provider"
import { $ExistingFileHelper, $ExistingFileHelper$$Type } from "net.minecraftforge.common.data.ExistingFileHelper"

export class $RegistrateGenericProvider$GeneratorData extends $Record {
constructor(output: $PackOutput$$Type, registries: $CompletableFuture$$Type<$HolderLookup$Provider$$Type>, existingFileHelper: $ExistingFileHelper$$Type)

public "existingFileHelper"(): $ExistingFileHelper
public "output"(): $PackOutput
public "registries"(): $CompletableFuture<$HolderLookup$Provider>
}
}

declare module "com.tterrag.registrate.providers.RegistrateProvider" {
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $Path$$Type } from "java.nio.file.Path"
import { $DataProvider } from "net.minecraft.data.DataProvider"
import { $CachedOutput$$Type } from "net.minecraft.data.CachedOutput"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export interface $RegistrateProvider extends $DataProvider {
"getName"(): string
"getSide"(): $LogicalSide
"run"(cachedOutput0: $CachedOutput$$Type): $CompletableFuture<any>
get "name"(): string
get "side"(): $LogicalSide
}

export namespace $RegistrateProvider {
function saveStable(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
}
export abstract class $RegistrateProvider$$Static implements $RegistrateProvider {
static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
}
}

declare module "com.tterrag.registrate.AbstractRegistrate" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $Item$Properties$$Type } from "net.minecraft.world.item.Item$Properties"
import { $MenuBuilder$ForgeMenuFactory$$Type } from "com.tterrag.registrate.builders.MenuBuilder$ForgeMenuFactory"
import { $CreativeModeTabModifier$$Type } from "com.tterrag.registrate.util.CreativeModeTabModifier"
import { $BlockBuilder } from "com.tterrag.registrate.builders.BlockBuilder"
import { $FluidType } from "net.minecraftforge.fluids.FluidType"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $MenuBuilder } from "com.tterrag.registrate.builders.MenuBuilder"
import { $Registry } from "net.minecraft.core.Registry"
import { $ItemBuilder } from "com.tterrag.registrate.builders.ItemBuilder"
import { $NonNullSupplier$$Type } from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $MenuBuilder$MenuFactory$$Type } from "com.tterrag.registrate.builders.MenuBuilder$MenuFactory"
import { $Collection } from "java.util.Collection"
import { $Builder, $Builder$$Type } from "com.tterrag.registrate.builders.Builder"
import { $Screen, $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $BuilderCallback$$Type } from "com.tterrag.registrate.builders.BuilderCallback"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $NonNullUnaryOperator$$Type } from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import { $BlockEntityBuilder } from "com.tterrag.registrate.builders.BlockEntityBuilder"
import { $FluidBuilder } from "com.tterrag.registrate.builders.FluidBuilder"
import { $RegistryEntry } from "com.tterrag.registrate.util.entry.RegistryEntry"
import { $Optional } from "java.util.Optional"
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentBuilder$EnchantmentFactory$$Type } from "com.tterrag.registrate.builders.EnchantmentBuilder$EnchantmentFactory"
import { $CreativeModeTab } from "net.minecraft.world.item.CreativeModeTab"
import { $ForgeFlowingFluid$Properties$$Type } from "net.minecraftforge.fluids.ForgeFlowingFluid$Properties"
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $ProviderType$$Type } from "com.tterrag.registrate.providers.ProviderType"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $ForgeFlowingFluid, $ForgeFlowingFluid$$Type } from "net.minecraftforge.fluids.ForgeFlowingFluid"
import { $IEventBus } from "net.minecraftforge.eventbus.api.IEventBus"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $CreativeModeTab$Builder$$Type } from "net.minecraft.world.item.CreativeModeTab$Builder"
import { $EnchantmentBuilder } from "com.tterrag.registrate.builders.EnchantmentBuilder"
import { $BlockEntityBuilder$BlockEntityFactory$$Type } from "com.tterrag.registrate.builders.BlockEntityBuilder$BlockEntityFactory"
import { $EntityType$EntityFactory$$Type } from "net.minecraft.world.entity.EntityType$EntityFactory"
import { $EntityBuilder } from "com.tterrag.registrate.builders.EntityBuilder"
import { $MobCategory$$Type } from "net.minecraft.world.entity.MobCategory"
import { $RegistryBuilder } from "net.minecraftforge.registries.RegistryBuilder"
import { $NonNullFunction$$Type } from "com.tterrag.registrate.util.nullness.NonNullFunction"
import { $ForgeFlowingFluid$Flowing } from "net.minecraftforge.fluids.ForgeFlowingFluid$Flowing"
import { $FluidBuilder$FluidTypeFactory$$Type } from "com.tterrag.registrate.builders.FluidBuilder$FluidTypeFactory"
import { $MenuBuilder$ScreenFactory } from "com.tterrag.registrate.builders.MenuBuilder$ScreenFactory"
import { $NonNullConsumer$$Type } from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $MenuAccess, $MenuAccess$$Type } from "net.minecraft.client.gui.screens.inventory.MenuAccess"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $NoConfigBuilder } from "com.tterrag.registrate.builders.NoConfigBuilder"
import { $NonNullBiFunction$$Type } from "com.tterrag.registrate.util.nullness.NonNullBiFunction"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $AbstractRegistrateAccessor } from "com.gregtechceu.gtceu.core.mixins.registrate.AbstractRegistrateAccessor"
import { $RegistrateProvider, $RegistrateProvider$$Type } from "com.tterrag.registrate.providers.RegistrateProvider"

export class $AbstractRegistrate<S extends $AbstractRegistrate<S> = $AbstractRegistrate<S>> implements $AbstractRegistrateAccessor {
public "addDataGenerator"<T extends $RegistrateProvider>(providerType0: $ProviderType$$Type<T>, nonNullConsumer1: $NonNullConsumer$$Type<T>): S
public "addLang"(string0: string, resourceLocation1: $ResourceLocation$$Type, string2: string): $MutableComponent
public "addLang"(string0: string, resourceLocation1: $ResourceLocation$$Type, string2: string, string3: string): $MutableComponent
public "addRawLang"(string0: string, string1: string): $MutableComponent
public "addRegisterCallback"<R, T extends R>(string0: string, resourceKey1: $ResourceKey$$Type<$Registry<R>>, nonNullConsumer2: $NonNullConsumer$$Type<T>): S
public "addRegisterCallback"<R>(resourceKey0: $ResourceKey$$Type<$Registry<R>>, runnable1: $Runnable$$Type): S
public "block"<T extends $Block>(nonNullFunction0: $NonNullFunction$$Type<$BlockBehaviour$Properties$$Type, T>): $BlockBuilder<T, S>
public "block"<T extends $Block>(string0: string, nonNullFunction1: $NonNullFunction$$Type<$BlockBehaviour$Properties$$Type, T>): $BlockBuilder<T, S>
public "block"<T extends $Block, P>(p0: P, nonNullFunction1: $NonNullFunction$$Type<$BlockBehaviour$Properties$$Type, T>): $BlockBuilder<T, P>
public "block"<T extends $Block, P>(p0: P, string1: string, nonNullFunction2: $NonNullFunction$$Type<$BlockBehaviour$Properties$$Type, T>): $BlockBuilder<T, P>
public "blockEntity"<T extends $BlockEntity, P>(p0: P, string1: string, blockEntityFactory2: $BlockEntityBuilder$BlockEntityFactory$$Type<T>): $BlockEntityBuilder<T, P>
public "blockEntity"<T extends $BlockEntity, P>(p0: P, blockEntityFactory1: $BlockEntityBuilder$BlockEntityFactory$$Type<T>): $BlockEntityBuilder<T, P>
public "blockEntity"<T extends $BlockEntity>(blockEntityFactory0: $BlockEntityBuilder$BlockEntityFactory$$Type<T>): $BlockEntityBuilder<T, S>
public "blockEntity"<T extends $BlockEntity>(string0: string, blockEntityFactory1: $BlockEntityBuilder$BlockEntityFactory$$Type<T>): $BlockEntityBuilder<T, S>
public "defaultCreativeTab"<P>(p0: P, string1: string, consumer2: $Consumer$$Type<$CreativeModeTab$Builder$$Type>): $NoConfigBuilder<$CreativeModeTab, $CreativeModeTab, P>
public "defaultCreativeTab"(resourceKey0: $ResourceKey$$Type<$CreativeModeTab>): S
public "defaultCreativeTab"<P>(p0: P, string1: string): $NoConfigBuilder<$CreativeModeTab, $CreativeModeTab, P>
public "defaultCreativeTab"(consumer0: $Consumer$$Type<$CreativeModeTab$Builder$$Type>): $NoConfigBuilder<$CreativeModeTab, $CreativeModeTab, S>
public "defaultCreativeTab"(string0: string, consumer1: $Consumer$$Type<$CreativeModeTab$Builder$$Type>): $NoConfigBuilder<$CreativeModeTab, $CreativeModeTab, S>
public "defaultCreativeTab"<P>(p0: P, consumer1: $Consumer$$Type<$CreativeModeTab$Builder$$Type>): $NoConfigBuilder<$CreativeModeTab, $CreativeModeTab, P>
public "defaultCreativeTab"(string0: string): $NoConfigBuilder<$CreativeModeTab, $CreativeModeTab, S>
public "defaultCreativeTab"<P>(p0: P): $NoConfigBuilder<$CreativeModeTab, $CreativeModeTab, P>
public "defaultCreativeTab"(): $NoConfigBuilder<$CreativeModeTab, $CreativeModeTab, S>
public "enchantment"<T extends $Enchantment, P>(p0: P, string1: string, enchantmentCategory2: $EnchantmentCategory$$Type, enchantmentFactory3: $EnchantmentBuilder$EnchantmentFactory$$Type<T>): $EnchantmentBuilder<T, P>
public "enchantment"<T extends $Enchantment>(enchantmentCategory0: $EnchantmentCategory$$Type, enchantmentFactory1: $EnchantmentBuilder$EnchantmentFactory$$Type<T>): $EnchantmentBuilder<T, S>
public "enchantment"<T extends $Enchantment, P>(p0: P, enchantmentCategory1: $EnchantmentCategory$$Type, enchantmentFactory2: $EnchantmentBuilder$EnchantmentFactory$$Type<T>): $EnchantmentBuilder<T, P>
public "enchantment"<T extends $Enchantment>(string0: string, enchantmentCategory1: $EnchantmentCategory$$Type, enchantmentFactory2: $EnchantmentBuilder$EnchantmentFactory$$Type<T>): $EnchantmentBuilder<T, S>
public "entity"<T extends $Entity, P>(p0: P, string1: string, entityFactory2: $EntityType$EntityFactory$$Type<T>, mobCategory3: $MobCategory$$Type): $EntityBuilder<T, P>
public "entity"<T extends $Entity>(entityFactory0: $EntityType$EntityFactory$$Type<T>, mobCategory1: $MobCategory$$Type): $EntityBuilder<T, S>
public "entity"<T extends $Entity>(string0: string, entityFactory1: $EntityType$EntityFactory$$Type<T>, mobCategory2: $MobCategory$$Type): $EntityBuilder<T, S>
public "entity"<T extends $Entity, P>(p0: P, entityFactory1: $EntityType$EntityFactory$$Type<T>, mobCategory2: $MobCategory$$Type): $EntityBuilder<T, P>
public "entry"<R, T extends R, P, S2 extends $Builder<R, T, P, S2>>(string0: string, nonNullFunction1: $NonNullFunction$$Type<$BuilderCallback$$Type, S2>): S2
public "entry"<R, T extends R, P, S2 extends $Builder<R, T, P, S2>>(nonNullBiFunction0: $NonNullBiFunction$$Type<string, $BuilderCallback$$Type, S2>): S2
public "fluid"(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, nonNullSupplier3: $NonNullSupplier$$Type<$FluidType>): $FluidBuilder<$ForgeFlowingFluid$Flowing, S>
public "fluid"<T extends $ForgeFlowingFluid>(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, nonNullFunction3: $NonNullFunction$$Type<$ForgeFlowingFluid$Properties$$Type, T>): $FluidBuilder<T, S>
public "fluid"<T extends $ForgeFlowingFluid>(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, fluidTypeFactory3: $FluidBuilder$FluidTypeFactory$$Type, nonNullFunction4: $NonNullFunction$$Type<$ForgeFlowingFluid$Properties$$Type, T>): $FluidBuilder<T, S>
public "fluid"(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): $FluidBuilder<$ForgeFlowingFluid$Flowing, S>
public "fluid"(string0: string, nonNullSupplier1: $NonNullSupplier$$Type<$FluidType>): $FluidBuilder<$ForgeFlowingFluid$Flowing, S>
public "fluid"<P>(p0: P, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, fluidTypeFactory3: $FluidBuilder$FluidTypeFactory$$Type): $FluidBuilder<$ForgeFlowingFluid$Flowing, P>
public "fluid"<P>(p0: P, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): $FluidBuilder<$ForgeFlowingFluid$Flowing, P>
public "fluid"<P>(p0: P, nonNullSupplier1: $NonNullSupplier$$Type<$FluidType>): $FluidBuilder<$ForgeFlowingFluid$Flowing, P>
public "fluid"<P>(p0: P, fluidTypeFactory1: $FluidBuilder$FluidTypeFactory$$Type): $FluidBuilder<$ForgeFlowingFluid$Flowing, P>
public "fluid"<P>(p0: P): $FluidBuilder<$ForgeFlowingFluid$Flowing, P>
public "fluid"<T extends $ForgeFlowingFluid>(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, nonNullSupplier3: $NonNullSupplier$$Type<$FluidType>, nonNullFunction4: $NonNullFunction$$Type<$ForgeFlowingFluid$Properties$$Type, T>): $FluidBuilder<T, S>
public "fluid"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type, nonNullSupplier2: $NonNullSupplier$$Type<$FluidType>): $FluidBuilder<$ForgeFlowingFluid$Flowing, S>
public "fluid"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type, fluidTypeFactory2: $FluidBuilder$FluidTypeFactory$$Type): $FluidBuilder<$ForgeFlowingFluid$Flowing, S>
public "fluid"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type): $FluidBuilder<$ForgeFlowingFluid$Flowing, S>
public "fluid"(nonNullSupplier0: $NonNullSupplier$$Type<$FluidType>): $FluidBuilder<$ForgeFlowingFluid$Flowing, S>
public "fluid"(fluidTypeFactory0: $FluidBuilder$FluidTypeFactory$$Type): $FluidBuilder<$ForgeFlowingFluid$Flowing, S>
public "fluid"(): $FluidBuilder<$ForgeFlowingFluid$Flowing, S>
public "fluid"(string0: string, fluidTypeFactory1: $FluidBuilder$FluidTypeFactory$$Type): $FluidBuilder<$ForgeFlowingFluid$Flowing, S>
public "fluid"(string0: string): $FluidBuilder<$ForgeFlowingFluid$Flowing, S>
public "fluid"<T extends $ForgeFlowingFluid>(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type, nonNullSupplier2: $NonNullSupplier$$Type<$FluidType>, nonNullFunction3: $NonNullFunction$$Type<$ForgeFlowingFluid$Properties$$Type, T>): $FluidBuilder<T, S>
public "fluid"<T extends $ForgeFlowingFluid>(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type, fluidTypeFactory2: $FluidBuilder$FluidTypeFactory$$Type, nonNullFunction3: $NonNullFunction$$Type<$ForgeFlowingFluid$Properties$$Type, T>): $FluidBuilder<T, S>
public "fluid"<T extends $ForgeFlowingFluid>(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type, nonNullFunction2: $NonNullFunction$$Type<$ForgeFlowingFluid$Properties$$Type, T>): $FluidBuilder<T, S>
public "fluid"<P>(p0: P, string1: string, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, nonNullSupplier4: $NonNullSupplier$$Type<$FluidType>): $FluidBuilder<$ForgeFlowingFluid$Flowing, P>
public "fluid"<P>(p0: P, string1: string, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, fluidTypeFactory4: $FluidBuilder$FluidTypeFactory$$Type): $FluidBuilder<$ForgeFlowingFluid$Flowing, P>
public "fluid"<P>(p0: P, string1: string, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type): $FluidBuilder<$ForgeFlowingFluid$Flowing, P>
public "fluid"<P>(p0: P, string1: string, nonNullSupplier2: $NonNullSupplier$$Type<$FluidType>): $FluidBuilder<$ForgeFlowingFluid$Flowing, P>
public "fluid"(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, fluidTypeFactory3: $FluidBuilder$FluidTypeFactory$$Type): $FluidBuilder<$ForgeFlowingFluid$Flowing, S>
public "fluid"<T extends $ForgeFlowingFluid, P>(p0: P, string1: string, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, nonNullSupplier4: $NonNullSupplier$$Type<$FluidType>, nonNullFunction5: $NonNullFunction$$Type<$ForgeFlowingFluid$Properties$$Type, T>): $FluidBuilder<T, P>
public "fluid"<T extends $ForgeFlowingFluid, P>(p0: P, string1: string, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, fluidTypeFactory4: $FluidBuilder$FluidTypeFactory$$Type, nonNullFunction5: $NonNullFunction$$Type<$ForgeFlowingFluid$Properties$$Type, T>): $FluidBuilder<T, P>
public "fluid"<T extends $ForgeFlowingFluid, P>(p0: P, string1: string, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, nonNullFunction4: $NonNullFunction$$Type<$ForgeFlowingFluid$Properties$$Type, T>): $FluidBuilder<T, P>
public "fluid"<T extends $ForgeFlowingFluid, P>(p0: P, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, nonNullSupplier3: $NonNullSupplier$$Type<$FluidType>, nonNullFunction4: $NonNullFunction$$Type<$ForgeFlowingFluid$Properties$$Type, T>): $FluidBuilder<T, P>
public "fluid"<T extends $ForgeFlowingFluid, P>(p0: P, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, fluidTypeFactory3: $FluidBuilder$FluidTypeFactory$$Type, nonNullFunction4: $NonNullFunction$$Type<$ForgeFlowingFluid$Properties$$Type, T>): $FluidBuilder<T, P>
public "fluid"<T extends $ForgeFlowingFluid, P>(p0: P, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, nonNullFunction3: $NonNullFunction$$Type<$ForgeFlowingFluid$Properties$$Type, T>): $FluidBuilder<T, P>
public "fluid"<P>(p0: P, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, nonNullSupplier3: $NonNullSupplier$$Type<$FluidType>): $FluidBuilder<$ForgeFlowingFluid$Flowing, P>
public "fluid"<P>(p0: P, string1: string): $FluidBuilder<$ForgeFlowingFluid$Flowing, P>
public "fluid"<P>(p0: P, string1: string, fluidTypeFactory2: $FluidBuilder$FluidTypeFactory$$Type): $FluidBuilder<$ForgeFlowingFluid$Flowing, P>
public "genData"<T extends $RegistrateProvider>(providerType0: $ProviderType$$Type<T>, t1: T): void
public "generic"<R, T extends R>(string0: string, resourceKey1: $ResourceKey$$Type<$Registry<R>>, nonNullSupplier2: $NonNullSupplier$$Type<T>): $NoConfigBuilder<R, T, S>
public "generic"<R, T extends R>(resourceKey0: $ResourceKey$$Type<$Registry<R>>, nonNullSupplier1: $NonNullSupplier$$Type<T>): $NoConfigBuilder<R, T, S>
public "generic"<R, T extends R, P>(p0: P, string1: string, resourceKey2: $ResourceKey$$Type<$Registry<R>>, nonNullSupplier3: $NonNullSupplier$$Type<T>): $NoConfigBuilder<R, T, P>
public "generic"<R, T extends R, P>(p0: P, resourceKey1: $ResourceKey$$Type<$Registry<R>>, nonNullSupplier2: $NonNullSupplier$$Type<T>): $NoConfigBuilder<R, T, P>
public "get"<R, T extends R>(string0: string, resourceKey1: $ResourceKey$$Type<$Registry<R>>): $RegistryEntry<T>
public "get"<R, T extends R>(resourceKey0: $ResourceKey$$Type<$Registry<R>>): $RegistryEntry<T>
public "getAll"<R>(resourceKey0: $ResourceKey$$Type<$Registry<R>>): $Collection<$RegistryEntry<R>>
public "getDataProvider"<P extends $RegistrateProvider>(providerType0: $ProviderType$$Type<P>): $Optional<P>
public "getModEventBus"(): $IEventBus
public "getModid"(): string
public "getOptional"<R, T extends R>(string0: string, resourceKey1: $ResourceKey$$Type<$Registry<R>>): $RegistryEntry<T>
public static "isDevEnvironment"(): boolean
public "isRegistered"<R>(resourceKey0: $ResourceKey$$Type<$Registry<R>>): boolean
public "item"<T extends $Item>(nonNullFunction0: $NonNullFunction$$Type<$Item$Properties$$Type, T>): $ItemBuilder<T, S>
public "item"<T extends $Item, P>(p0: P, string1: string, nonNullFunction2: $NonNullFunction$$Type<$Item$Properties$$Type, T>): $ItemBuilder<T, P>
public "item"<T extends $Item>(string0: string, nonNullFunction1: $NonNullFunction$$Type<$Item$Properties$$Type, T>): $ItemBuilder<T, S>
public "item"<T extends $Item, P>(p0: P, nonNullFunction1: $NonNullFunction$$Type<$Item$Properties$$Type, T>): $ItemBuilder<T, P>
public "makeDatapackRegistry"<R>(string0: string, codec1: $Codec$$Type<R>, codec2: $Codec$$Type<R>): $ResourceKey<$Registry<R>>
public "makeDatapackRegistry"<R>(string0: string, codec1: $Codec$$Type<R>): $ResourceKey<$Registry<R>>
public "makeRegistry"<R>(string0: string, supplier1: $Supplier$$Type<$RegistryBuilder<R>>): $ResourceKey<$Registry<R>>
public "menu"<T extends $AbstractContainerMenu, SC extends ($Screen & $MenuAccess<T>)>(menuFactory0: $MenuBuilder$MenuFactory$$Type<T>, nonNullSupplier1: $NonNullSupplier$$Type<$MenuBuilder$ScreenFactory<T, SC>>): $MenuBuilder<T, SC, S>
public "menu"<T extends $AbstractContainerMenu, SC extends ($Screen & $MenuAccess<T>)>(string0: string, menuFactory1: $MenuBuilder$MenuFactory$$Type<T>, nonNullSupplier2: $NonNullSupplier$$Type<$MenuBuilder$ScreenFactory<T, SC>>): $MenuBuilder<T, SC, S>
public "menu"<T extends $AbstractContainerMenu, SC extends ($Screen & $MenuAccess<T>), P>(p0: P, string1: string, forgeMenuFactory2: $MenuBuilder$ForgeMenuFactory$$Type<T>, nonNullSupplier3: $NonNullSupplier$$Type<$MenuBuilder$ScreenFactory<T, SC>>): $MenuBuilder<T, SC, P>
public "menu"<T extends $AbstractContainerMenu, SC extends ($Screen & $MenuAccess<T>), P>(p0: P, forgeMenuFactory1: $MenuBuilder$ForgeMenuFactory$$Type<T>, nonNullSupplier2: $NonNullSupplier$$Type<$MenuBuilder$ScreenFactory<T, SC>>): $MenuBuilder<T, SC, P>
public "menu"<T extends $AbstractContainerMenu, SC extends ($Screen & $MenuAccess<T>), P>(p0: P, string1: string, menuFactory2: $MenuBuilder$MenuFactory$$Type<T>, nonNullSupplier3: $NonNullSupplier$$Type<$MenuBuilder$ScreenFactory<T, SC>>): $MenuBuilder<T, SC, P>
public "menu"<T extends $AbstractContainerMenu, SC extends ($Screen & $MenuAccess<T>)>(string0: string, forgeMenuFactory1: $MenuBuilder$ForgeMenuFactory$$Type<T>, nonNullSupplier2: $NonNullSupplier$$Type<$MenuBuilder$ScreenFactory<T, SC>>): $MenuBuilder<T, SC, S>
public "menu"<T extends $AbstractContainerMenu, SC extends ($Screen & $MenuAccess<T>)>(forgeMenuFactory0: $MenuBuilder$ForgeMenuFactory$$Type<T>, nonNullSupplier1: $NonNullSupplier$$Type<$MenuBuilder$ScreenFactory<T, SC>>): $MenuBuilder<T, SC, S>
public "menu"<T extends $AbstractContainerMenu, SC extends ($Screen & $MenuAccess<T>), P>(p0: P, menuFactory1: $MenuBuilder$MenuFactory$$Type<T>, nonNullSupplier2: $NonNullSupplier$$Type<$MenuBuilder$ScreenFactory<T, SC>>): $MenuBuilder<T, SC, P>
public "modifyCreativeModeTab"(resourceKey0: $ResourceKey$$Type<$CreativeModeTab>, consumer1: $Consumer$$Type<$CreativeModeTabModifier$$Type>): S
public "object"(string0: string): S
public "setDataGenerator"<P extends $RegistrateProvider, R>(builder0: $Builder$$Type<R, any, any, any>, providerType1: $ProviderType$$Type<P>, nonNullConsumer2: $NonNullConsumer$$Type<P>): S
public "setDataGenerator"<P extends $RegistrateProvider, R>(string0: string, resourceKey1: $ResourceKey$$Type<$Registry<R>>, providerType2: $ProviderType$$Type<P>, nonNullConsumer3: $NonNullConsumer$$Type<P>): S
public "simple"<R, T extends R>(string0: string, resourceKey1: $ResourceKey$$Type<$Registry<R>>, nonNullSupplier2: $NonNullSupplier$$Type<T>): $RegistryEntry<T>
public "simple"<R, T extends R, P>(p0: P, resourceKey1: $ResourceKey$$Type<$Registry<R>>, nonNullSupplier2: $NonNullSupplier$$Type<T>): $RegistryEntry<T>
public "simple"<R, T extends R, P>(p0: P, string1: string, resourceKey2: $ResourceKey$$Type<$Registry<R>>, nonNullSupplier3: $NonNullSupplier$$Type<T>): $RegistryEntry<T>
public "simple"<R, T extends R>(resourceKey0: $ResourceKey$$Type<$Registry<R>>, nonNullSupplier1: $NonNullSupplier$$Type<T>): $RegistryEntry<T>
public "skipErrors"(boolean0: boolean): S
public "transform"<R, T extends R, P, S2 extends $Builder<R, T, P, S2>>(nonNullFunction0: $NonNullFunction$$Type<S, S2>): S2
public "transform"(nonNullUnaryOperator0: $NonNullUnaryOperator$$Type<S>): S
get "modEventBus"(): $IEventBus
get "modid"(): string
}
}

declare module "com.tterrag.registrate.builders.NoConfigBuilder" {
import { $Builder, $Builder$$Type } from "com.tterrag.registrate.builders.Builder"
import { $BuilderCallback$$Type } from "com.tterrag.registrate.builders.BuilderCallback"
import { $ProviderType$$Type } from "com.tterrag.registrate.providers.ProviderType"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $NonNullConsumer$$Type } from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Registry } from "net.minecraft.core.Registry"
import { $AbstractRegistrate$$Type } from "com.tterrag.registrate.AbstractRegistrate"
import { $NonNullBiConsumer$$Type } from "com.tterrag.registrate.util.nullness.NonNullBiConsumer"
import { $AbstractBuilder } from "com.tterrag.registrate.builders.AbstractBuilder"
import { $NonNullSupplier, $NonNullSupplier$$Type } from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import { $RegistryEntry } from "com.tterrag.registrate.util.entry.RegistryEntry"
import { $NonNullFunction$$Type } from "com.tterrag.registrate.util.nullness.NonNullFunction"
import { $DataGenContext$$Type } from "com.tterrag.registrate.providers.DataGenContext"
import { $RegistrateProvider, $RegistrateProvider$$Type } from "com.tterrag.registrate.providers.RegistrateProvider"

export class $NoConfigBuilder<R = any, T extends R = R, P = any> extends $AbstractBuilder<R, T, P, $NoConfigBuilder<R, T, P>> {
constructor(abstractRegistrate0: $AbstractRegistrate$$Type<any>, p1: P, string2: string, builderCallback3: $BuilderCallback$$Type, resourceKey4: $ResourceKey$$Type<$Registry<R>>, nonNullSupplier5: $NonNullSupplier$$Type<T>)

public "addMiscData"<D extends $RegistrateProvider>(providerType0: $ProviderType$$Type<D>, nonNullConsumer1: $NonNullConsumer$$Type<D>): $NoConfigBuilder<R, T, P>
public "build"(): P
public "get"(): $RegistryEntry<T>
public "getEntry"(): T
public static "lazy"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public "lazy"(): $NonNullSupplier<$RegistryEntry<T>>
public static "of"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public static "of"<T>(supplier0: $Supplier$$Type<T>, nonNullSupplier1: $NonNullSupplier$$Type<string>): $NonNullSupplier<T>
public "onRegister"(nonNullConsumer0: $NonNullConsumer$$Type<T>): $NoConfigBuilder<R, T, P>
public "onRegisterAfter"<OR>(resourceKey0: $ResourceKey$$Type<$Registry<OR>>, nonNullConsumer1: $NonNullConsumer$$Type<T>): $NoConfigBuilder<R, T, P>
public "setData"<D extends $RegistrateProvider>(providerType0: $ProviderType$$Type<D>, nonNullBiConsumer1: $NonNullBiConsumer$$Type<$DataGenContext$$Type<R, T>, D>): $NoConfigBuilder<R, T, P>
public "transform"<R2, T2 extends R2, P2, S2 extends $Builder<R2, T2, P2, S2>>(nonNullFunction0: $NonNullFunction$$Type<$NoConfigBuilder$$Type<R, T, P>, S2>): S2
get "entry"(): T
}
}

declare module "com.tterrag.registrate.util.entry.BlockEntry" {
import { $AbstractRegistrate$$Type } from "com.tterrag.registrate.AbstractRegistrate"
import { $NonNullSupplier, $NonNullSupplier$$Type } from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import { $RegistryEntry$$Type } from "com.tterrag.registrate.util.entry.RegistryEntry"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemProviderEntry } from "com.tterrag.registrate.util.entry.ItemProviderEntry"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $RegistryObject$$Type } from "net.minecraftforge.registries.RegistryObject"

export class $BlockEntry<T extends $Block = $Block> extends $ItemProviderEntry<T> {
constructor(abstractRegistrate0: $AbstractRegistrate$$Type<any>, registryObject1: $RegistryObject$$Type<T>)

public static "cast"<T extends $Block>(registryEntry0: $RegistryEntry$$Type<T>): $BlockEntry<T>
public "getDefaultState"(): $BlockState
public "has"(blockState0: $BlockState$$Type): boolean
public static "lazy"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public "lazy"(): $NonNullSupplier<T>
public static "of"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public static "of"<T>(supplier0: $Supplier$$Type<T>, nonNullSupplier1: $NonNullSupplier$$Type<string>): $NonNullSupplier<T>
get "defaultState"(): $BlockState
}
}

declare module "com.tterrag.registrate.util.entry.ItemProviderEntry" {
import { $AbstractRegistrate$$Type } from "com.tterrag.registrate.AbstractRegistrate"
import { $NonNullSupplier, $NonNullSupplier$$Type } from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import { $ItemLike } from "net.minecraft.world.level.ItemLike"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $RegistryEntry } from "com.tterrag.registrate.util.entry.RegistryEntry"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $RegistryObject$$Type } from "net.minecraftforge.registries.RegistryObject"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $ItemProviderEntry<T extends $ItemLike = $ItemLike> extends $RegistryEntry<T> implements $ItemLike {
constructor(abstractRegistrate0: $AbstractRegistrate$$Type<any>, registryObject1: $RegistryObject$$Type<T>)

public "asItem"(): $Item
public "asStack"(int0: integer): $ItemStack
public "asStack"(): $ItemStack
public "handler$him000$isInOverride"(itemStack0: $ItemStack$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type): void
public "is"(item0: $Item$$Type): boolean
public "isIn"(itemStack0: $ItemStack$$Type): boolean
public static "lazy"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public "lazy"(): $NonNullSupplier<T>
public static "of"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public static "of"<T>(supplier0: $Supplier$$Type<T>, nonNullSupplier1: $NonNullSupplier$$Type<string>): $NonNullSupplier<T>
}
}

declare module "com.tterrag.registrate.builders.MenuBuilder" {
import { $MenuBuilder$ForgeMenuFactory$$Type } from "com.tterrag.registrate.builders.MenuBuilder$ForgeMenuFactory"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Builder, $Builder$$Type } from "com.tterrag.registrate.builders.Builder"
import { $Screen } from "net.minecraft.client.gui.screens.Screen"
import { $MenuBuilder$ScreenFactory } from "com.tterrag.registrate.builders.MenuBuilder$ScreenFactory"
import { $BuilderCallback$$Type } from "com.tterrag.registrate.builders.BuilderCallback"
import { $ProviderType$$Type } from "com.tterrag.registrate.providers.ProviderType"
import { $NonNullConsumer$$Type } from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import { $MenuType, $MenuType$$Type } from "net.minecraft.world.inventory.MenuType"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $MenuAccess } from "net.minecraft.client.gui.screens.inventory.MenuAccess"
import { $Registry } from "net.minecraft.core.Registry"
import { $AbstractRegistrate$$Type } from "com.tterrag.registrate.AbstractRegistrate"
import { $NonNullBiConsumer$$Type } from "com.tterrag.registrate.util.nullness.NonNullBiConsumer"
import { $AbstractBuilder } from "com.tterrag.registrate.builders.AbstractBuilder"
import { $NonNullSupplier, $NonNullSupplier$$Type } from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import { $RegistryEntry } from "com.tterrag.registrate.util.entry.RegistryEntry"
import { $NonNullFunction$$Type } from "com.tterrag.registrate.util.nullness.NonNullFunction"
import { $MenuBuilder$MenuFactory$$Type } from "com.tterrag.registrate.builders.MenuBuilder$MenuFactory"
import { $DataGenContext$$Type } from "com.tterrag.registrate.providers.DataGenContext"
import { $RegistrateProvider, $RegistrateProvider$$Type } from "com.tterrag.registrate.providers.RegistrateProvider"

export class $MenuBuilder<T extends $AbstractContainerMenu = $AbstractContainerMenu, S extends ($Screen & $MenuAccess<T>) = ($Screen & $MenuAccess<T>), P = any> extends $AbstractBuilder<$MenuType<any>, $MenuType<T>, P, $MenuBuilder<T, S, P>> {
constructor(abstractRegistrate0: $AbstractRegistrate$$Type<any>, p1: P, string2: string, builderCallback3: $BuilderCallback$$Type, forgeMenuFactory4: $MenuBuilder$ForgeMenuFactory$$Type<T>, nonNullSupplier5: $NonNullSupplier$$Type<$MenuBuilder$ScreenFactory<T, S>>)
constructor(abstractRegistrate0: $AbstractRegistrate$$Type<any>, p1: P, string2: string, builderCallback3: $BuilderCallback$$Type, menuFactory4: $MenuBuilder$MenuFactory$$Type<T>, nonNullSupplier5: $NonNullSupplier$$Type<$MenuBuilder$ScreenFactory<T, S>>)

public "addMiscData"<D extends $RegistrateProvider>(providerType0: $ProviderType$$Type<D>, nonNullConsumer1: $NonNullConsumer$$Type<D>): $MenuBuilder<T, S, P>
public "build"(): P
public "get"(): $RegistryEntry<$MenuType<T>>
public "getEntry"(): $MenuType<T>
public static "lazy"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public "lazy"(): $NonNullSupplier<$RegistryEntry<$MenuType<T>>>
public static "of"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public static "of"<T>(supplier0: $Supplier$$Type<T>, nonNullSupplier1: $NonNullSupplier$$Type<string>): $NonNullSupplier<T>
public "onRegister"(nonNullConsumer0: $NonNullConsumer$$Type<$MenuType$$Type<T>>): $MenuBuilder<T, S, P>
public "onRegisterAfter"<OR>(resourceKey0: $ResourceKey$$Type<$Registry<OR>>, nonNullConsumer1: $NonNullConsumer$$Type<$MenuType$$Type<T>>): $MenuBuilder<T, S, P>
public "setData"<D extends $RegistrateProvider>(providerType0: $ProviderType$$Type<D>, nonNullBiConsumer1: $NonNullBiConsumer$$Type<$DataGenContext$$Type<$MenuType$$Type<any>, $MenuType$$Type<T>>, D>): $MenuBuilder<T, S, P>
public "transform"<R2, T2 extends R2, P2, S2 extends $Builder<R2, T2, P2, S2>>(nonNullFunction0: $NonNullFunction$$Type<$MenuBuilder$$Type<T, S, P>, S2>): S2
get "entry"(): $MenuType<T>
}
}

declare module "com.tterrag.registrate.builders.BlockEntityBuilder" {
import { $Builder, $Builder$$Type } from "com.tterrag.registrate.builders.Builder"
import { $BuilderCallback$$Type } from "com.tterrag.registrate.builders.BuilderCallback"
import { $ProviderType$$Type } from "com.tterrag.registrate.providers.ProviderType"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $NonNullConsumer$$Type } from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $BlockEntityRenderer } from "net.minecraft.client.renderer.blockentity.BlockEntityRenderer"
import { $Registry } from "net.minecraft.core.Registry"
import { $AbstractRegistrate$$Type } from "com.tterrag.registrate.AbstractRegistrate"
import { $NonNullBiConsumer$$Type } from "com.tterrag.registrate.util.nullness.NonNullBiConsumer"
import { $AbstractBuilder } from "com.tterrag.registrate.builders.AbstractBuilder"
import { $BlockEntityBuilder$BlockEntityFactory$$Type } from "com.tterrag.registrate.builders.BlockEntityBuilder$BlockEntityFactory"
import { $NonNullSupplier, $NonNullSupplier$$Type } from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import { $BlockEntityType, $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockEntityRendererProvider$Context } from "net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider$Context"
import { $RegistryEntry } from "com.tterrag.registrate.util.entry.RegistryEntry"
import { $NonNullFunction, $NonNullFunction$$Type } from "com.tterrag.registrate.util.nullness.NonNullFunction"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $DataGenContext$$Type } from "com.tterrag.registrate.providers.DataGenContext"
import { $RegistrateProvider, $RegistrateProvider$$Type } from "com.tterrag.registrate.providers.RegistrateProvider"

export class $BlockEntityBuilder<T extends $BlockEntity = $BlockEntity, P = any> extends $AbstractBuilder<$BlockEntityType<any>, $BlockEntityType<T>, P, $BlockEntityBuilder<T, P>> {
public "addMiscData"<D extends $RegistrateProvider>(providerType0: $ProviderType$$Type<D>, nonNullConsumer1: $NonNullConsumer$$Type<D>): $BlockEntityBuilder<T, P>
public "build"(): P
public static "create"<T extends $BlockEntity, P>(abstractRegistrate0: $AbstractRegistrate$$Type<any>, p1: P, string2: string, builderCallback3: $BuilderCallback$$Type, blockEntityFactory4: $BlockEntityBuilder$BlockEntityFactory$$Type<T>): $BlockEntityBuilder<T, P>
public "get"(): $RegistryEntry<$BlockEntityType<T>>
public "getEntry"(): $BlockEntityType<T>
public static "lazy"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public "lazy"(): $NonNullSupplier<$RegistryEntry<$BlockEntityType<T>>>
public static "of"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public static "of"<T>(supplier0: $Supplier$$Type<T>, nonNullSupplier1: $NonNullSupplier$$Type<string>): $NonNullSupplier<T>
public "onRegister"(nonNullConsumer0: $NonNullConsumer$$Type<$BlockEntityType$$Type<T>>): $BlockEntityBuilder<T, P>
public "onRegisterAfter"<OR>(resourceKey0: $ResourceKey$$Type<$Registry<OR>>, nonNullConsumer1: $NonNullConsumer$$Type<$BlockEntityType$$Type<T>>): $BlockEntityBuilder<T, P>
public "renderer"(nonNullSupplier0: $NonNullSupplier$$Type<$NonNullFunction<$BlockEntityRendererProvider$Context, $BlockEntityRenderer<T>>>): $BlockEntityBuilder<T, P>
public "setData"<D extends $RegistrateProvider>(providerType0: $ProviderType$$Type<D>, nonNullBiConsumer1: $NonNullBiConsumer$$Type<$DataGenContext$$Type<$BlockEntityType$$Type<any>, $BlockEntityType$$Type<T>>, D>): $BlockEntityBuilder<T, P>
public "transform"<R2, T2 extends R2, P2, S2 extends $Builder<R2, T2, P2, S2>>(nonNullFunction0: $NonNullFunction$$Type<$BlockEntityBuilder$$Type<T, P>, S2>): S2
public "validBlock"(nonNullSupplier0: $NonNullSupplier$$Type<$Block>): $BlockEntityBuilder<T, P>
public "validBlocks"(...nonNullSupplier0s: $NonNullSupplier$$Type<$Block$$Type>[]): $BlockEntityBuilder<T, P>
get "entry"(): $BlockEntityType<T>
}
}

declare module "com.tterrag.registrate.providers.RegistrateItemTagsProvider" {
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $CompletableFuture, $CompletableFuture$$Type } from "java.util.concurrent.CompletableFuture"
import { $ProviderType$$Type } from "com.tterrag.registrate.providers.ProviderType"
import { $HolderLookup$Provider$$Type } from "net.minecraft.core.HolderLookup$Provider"
import { $ExistingFileHelper$$Type } from "net.minecraftforge.common.data.ExistingFileHelper"
import { $CachedOutput$$Type } from "net.minecraft.data.CachedOutput"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $AbstractRegistrate$$Type } from "com.tterrag.registrate.AbstractRegistrate"
import { $PackOutput$$Type } from "net.minecraft.data.PackOutput"
import { $TagsProvider$TagLookup$$Type } from "net.minecraft.data.tags.TagsProvider$TagLookup"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $RegistrateTagsProvider$IntrinsicImpl } from "com.tterrag.registrate.providers.RegistrateTagsProvider$IntrinsicImpl"
import { $Path$$Type } from "java.nio.file.Path"

export class $RegistrateItemTagsProvider extends $RegistrateTagsProvider$IntrinsicImpl<$Item> {
constructor(abstractRegistrate0: $AbstractRegistrate$$Type<any>, providerType1: $ProviderType$$Type<$RegistrateItemTagsProvider>, string2: string, packOutput3: $PackOutput$$Type, completableFuture4: $CompletableFuture$$Type<$HolderLookup$Provider$$Type>, completableFuture5: $CompletableFuture$$Type<$TagsProvider$TagLookup$$Type<$Block$$Type>>, existingFileHelper6: $ExistingFileHelper$$Type)

public "copy"(tagKey0: $TagKey$$Type<$Block$$Type>, tagKey1: $TagKey$$Type<$Item$$Type>): void
public static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
}
}

declare module "com.tterrag.registrate.providers.loot.RegistrateLootTables" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ValidationContext$$Type } from "net.minecraft.world.level.storage.loot.ValidationContext"
import { $Map$$Type } from "java.util.Map"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $LootTable$Builder$$Type } from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import { $LootTable$$Type } from "net.minecraft.world.level.storage.loot.LootTable"
import { $LootTableSubProvider } from "net.minecraft.data.loot.LootTableSubProvider"

export interface $RegistrateLootTables extends $LootTableSubProvider {
"generate"(biConsumer0: $BiConsumer$$Type<$ResourceLocation$$Type, $LootTable$Builder$$Type>): void
"validate"(map0: $Map$$Type<$ResourceLocation$$Type, $LootTable$$Type>, validationContext1: $ValidationContext$$Type): void
}

export namespace $RegistrateLootTables {
const probejs$$marker: never
}
export abstract class $RegistrateLootTables$$Static implements $RegistrateLootTables {
}
}

declare module "com.tterrag.registrate.builders.MenuBuilder$ForgeMenuFactory" {
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $MenuType$$Type } from "net.minecraft.world.inventory.MenuType"

export interface $MenuBuilder$ForgeMenuFactory<T extends $AbstractContainerMenu = $AbstractContainerMenu> {
"create"(menuType0: $MenuType$$Type<T>, int1: integer, inventory2: $Inventory$$Type, friendlyByteBuf3: $FriendlyByteBuf$$Type): T
}

export namespace $MenuBuilder$ForgeMenuFactory {
const probejs$$marker: never
}
export abstract class $MenuBuilder$ForgeMenuFactory$$Static<T extends $AbstractContainerMenu = $AbstractContainerMenu> implements $MenuBuilder$ForgeMenuFactory<T> {
}
}

declare module "com.tterrag.registrate.providers.RegistrateGenericProvider$Generator" {
import { $RegistrateGenericProvider$GeneratorData$$Type } from "com.tterrag.registrate.providers.RegistrateGenericProvider$GeneratorData"
import { $DataProvider } from "net.minecraft.data.DataProvider"

export interface $RegistrateGenericProvider$Generator {
"generate"(generatorData0: $RegistrateGenericProvider$GeneratorData$$Type): $DataProvider
}

export namespace $RegistrateGenericProvider$Generator {
const probejs$$marker: never
}
export abstract class $RegistrateGenericProvider$Generator$$Static implements $RegistrateGenericProvider$Generator {
}
}

declare module "com.tterrag.registrate.util.nullness.NonNullConsumer" {
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"

export interface $NonNullConsumer<T = any> extends $Consumer<T> {
"accept"(t0: T): void
"andThen"(nonNullConsumer0: $NonNullConsumer$$Type<T>): $NonNullConsumer<T>
"andThen"(consumer0: $Consumer$$Type<T>): $Consumer<T>
}

export namespace $NonNullConsumer {
function noop<T>(): $NonNullConsumer<T>
}
export abstract class $NonNullConsumer$$Static<T = any> implements $NonNullConsumer<T> {
static "noop"<T>(): $NonNullConsumer<T>
}
}

declare module "com.tterrag.registrate.providers.RegistrateTagsProvider" {
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $Path$$Type } from "java.nio.file.Path"
import { $RegistrateProvider } from "com.tterrag.registrate.providers.RegistrateProvider"
import { $CachedOutput$$Type } from "net.minecraft.data.CachedOutput"
import { $TagsProvider$TagAppender } from "net.minecraft.data.tags.TagsProvider$TagAppender"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export interface $RegistrateTagsProvider<T = any> extends $RegistrateProvider {
"addTag"(tagKey0: $TagKey$$Type<T>): $TagsProvider$TagAppender<T>
"getName"(): string
"getSide"(): $LogicalSide
"run"(cachedOutput0: $CachedOutput$$Type): $CompletableFuture<any>
get "name"(): string
get "side"(): $LogicalSide
}

export namespace $RegistrateTagsProvider {
function saveStable(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
}
export abstract class $RegistrateTagsProvider$$Static<T = any> implements $RegistrateTagsProvider<T> {
static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
}
}

declare module "com.tterrag.registrate.builders.EntityBuilder" {
import { $EntityType$Builder$$Type } from "net.minecraft.world.entity.EntityType$Builder"
import { $EntityType, $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $ProviderType$$Type } from "com.tterrag.registrate.providers.ProviderType"
import { $SpawnEggItem } from "net.minecraft.world.item.SpawnEggItem"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Registry } from "net.minecraft.core.Registry"
import { $ItemBuilder } from "com.tterrag.registrate.builders.ItemBuilder"
import { $SpawnPlacements$SpawnPredicate$$Type } from "net.minecraft.world.entity.SpawnPlacements$SpawnPredicate"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $NonNullSupplier, $NonNullSupplier$$Type } from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import { $EntityType$EntityFactory$$Type } from "net.minecraft.world.entity.EntityType$EntityFactory"
import { $MobCategory$$Type } from "net.minecraft.world.entity.MobCategory"
import { $RegistrateEntityLootTables$$Type } from "com.tterrag.registrate.providers.loot.RegistrateEntityLootTables"
import { $NonNullFunction, $NonNullFunction$$Type } from "com.tterrag.registrate.util.nullness.NonNullFunction"
import { $DataGenContext$$Type } from "com.tterrag.registrate.providers.DataGenContext"
import { $EntityRenderer } from "net.minecraft.client.renderer.entity.EntityRenderer"
import { $EntityEntry } from "com.tterrag.registrate.util.entry.EntityEntry"
import { $Builder, $Builder$$Type } from "com.tterrag.registrate.builders.Builder"
import { $BuilderCallback$$Type } from "com.tterrag.registrate.builders.BuilderCallback"
import { $NonNullConsumer$$Type } from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $AttributeSupplier$Builder } from "net.minecraft.world.entity.ai.attributes.AttributeSupplier$Builder"
import { $AbstractRegistrate$$Type } from "com.tterrag.registrate.AbstractRegistrate"
import { $NonNullBiConsumer$$Type } from "com.tterrag.registrate.util.nullness.NonNullBiConsumer"
import { $AbstractBuilder } from "com.tterrag.registrate.builders.AbstractBuilder"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityRendererProvider$Context } from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import { $RegistryEntry } from "com.tterrag.registrate.util.entry.RegistryEntry"
import { $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"
import { $RegistrateProvider, $RegistrateProvider$$Type } from "com.tterrag.registrate.providers.RegistrateProvider"

export class $EntityBuilder<T extends $Entity = $Entity, P = any> extends $AbstractBuilder<$EntityType<any>, $EntityType<T>, P, $EntityBuilder<T, P>> {
public "addMiscData"<D extends $RegistrateProvider>(providerType0: $ProviderType$$Type<D>, nonNullConsumer1: $NonNullConsumer$$Type<D>): $EntityBuilder<T, P>
public "attributes"(supplier0: $Supplier$$Type<$AttributeSupplier$Builder>): $EntityBuilder<T, P>
public "build"(): P
public static "create"<T extends $Entity, P>(abstractRegistrate0: $AbstractRegistrate$$Type<any>, p1: P, string2: string, builderCallback3: $BuilderCallback$$Type, entityFactory4: $EntityType$EntityFactory$$Type<T>, mobCategory5: $MobCategory$$Type): $EntityBuilder<T, P>
public "defaultLang"(): $EntityBuilder<T, P>
/** @deprecated */
public "defaultSpawnEgg"(int0: integer, int1: integer): $EntityBuilder<T, P>
public "get"(): $RegistryEntry<$EntityType<T>>
public "getEntry"(): $EntityType<T>
public "lang"(string0: string): $EntityBuilder<T, P>
public static "lazy"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public "lazy"(): $NonNullSupplier<$RegistryEntry<$EntityType<T>>>
public "loot"(nonNullBiConsumer0: $NonNullBiConsumer$$Type<$RegistrateEntityLootTables$$Type, $EntityType$$Type<T>>): $EntityBuilder<T, P>
public static "of"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public static "of"<T>(supplier0: $Supplier$$Type<T>, nonNullSupplier1: $NonNullSupplier$$Type<string>): $NonNullSupplier<T>
public "onRegister"(nonNullConsumer0: $NonNullConsumer$$Type<$EntityType$$Type<T>>): $EntityBuilder<T, P>
public "onRegisterAfter"<OR>(resourceKey0: $ResourceKey$$Type<$Registry<OR>>, nonNullConsumer1: $NonNullConsumer$$Type<$EntityType$$Type<T>>): $EntityBuilder<T, P>
public "properties"(nonNullConsumer0: $NonNullConsumer$$Type<$EntityType$Builder$$Type<T>>): $EntityBuilder<T, P>
public "register"(): $EntityEntry<T>
public "renderer"(nonNullSupplier0: $NonNullSupplier$$Type<$NonNullFunction<$EntityRendererProvider$Context, $EntityRenderer<T>>>): $EntityBuilder<T, P>
public "setData"<D extends $RegistrateProvider>(providerType0: $ProviderType$$Type<D>, nonNullBiConsumer1: $NonNullBiConsumer$$Type<$DataGenContext$$Type<$EntityType$$Type<any>, $EntityType$$Type<T>>, D>): $EntityBuilder<T, P>
/** @deprecated */
public "spawnEgg"(int0: integer, int1: integer): $ItemBuilder<$SpawnEggItem, $EntityBuilder<T, P>>
public "spawnPlacement"(type0: $SpawnPlacements$Type$$Type, types1: $Heightmap$Types$$Type, spawnPredicate2: $SpawnPlacements$SpawnPredicate$$Type<T>): $EntityBuilder<T, P>
public "tag"(...tagKey0s: $TagKey$$Type<$EntityType$$Type<any>>[]): $EntityBuilder<T, P>
public "transform"<R2, T2 extends R2, P2, S2 extends $Builder<R2, T2, P2, S2>>(nonNullFunction0: $NonNullFunction$$Type<$EntityBuilder$$Type<T, P>, S2>): S2
get "entry"(): $EntityType<T>
}
}

declare module "com.tterrag.registrate.providers.RegistrateGenericProvider" {
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $RegistrateGenericProvider$Generator$$Type } from "com.tterrag.registrate.providers.RegistrateGenericProvider$Generator"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $Path$$Type } from "java.nio.file.Path"
import { $RegistrateProvider } from "com.tterrag.registrate.providers.RegistrateProvider"
import { $CachedOutput$$Type } from "net.minecraft.data.CachedOutput"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export class $RegistrateGenericProvider implements $RegistrateProvider {
public "add"(generator0: $RegistrateGenericProvider$Generator$$Type): $RegistrateGenericProvider
public "getName"(): string
public "getSide"(): $LogicalSide
public "run"(cachedOutput0: $CachedOutput$$Type): $CompletableFuture<any>
public static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
get "name"(): string
get "side"(): $LogicalSide
}
}

declare module "com.tterrag.registrate.util.entry.RegistryEntry" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Throwable, $Throwable$$Type } from "java.lang.Throwable"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Function$$Type } from "java.util.function.Function"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $IForgeRegistry$$Type } from "net.minecraftforge.registries.IForgeRegistry"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $Registry } from "net.minecraft.core.Registry"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $AbstractRegistrate$$Type } from "com.tterrag.registrate.AbstractRegistrate"
import { $Holder } from "net.minecraft.core.Holder"
import { $NonNullSupplier, $NonNullSupplier$$Type } from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import { $Stream } from "java.util.stream.Stream"
import { $Optional } from "java.util.Optional"
import { $RegisterEvent$$Type } from "net.minecraftforge.registries.RegisterEvent"
import { $RegistryEntryAccessorMixin } from "net.mcreator.ars_technica.mixin.RegistryEntryAccessorMixin"
import { $RegistryObject$$Type } from "net.minecraftforge.registries.RegistryObject"

export class $RegistryEntry<T = any> implements $NonNullSupplier<T>, $RegistryEntryAccessorMixin {
constructor(abstractRegistrate0: $AbstractRegistrate$$Type<any>, registryObject1: $RegistryObject$$Type<T>)

public static "empty"<T>(): $RegistryEntry<T>
public "filter"(predicate0: $Predicate$$Type<T>): $RegistryEntry<T>
public "flatMap"<U>(function0: $Function$$Type<T, $Optional<U>>): $Optional<U>
public "get"(): T
public "getHolder"(): $Optional<$Holder<T>>
public "getId"(): $ResourceLocation
public "getKey"(): $ResourceKey<T>
public "getSibling"<R, E extends R>(iForgeRegistry0: $IForgeRegistry$$Type<R>): $RegistryEntry<E>
public "getSibling"<R, E extends R>(resourceKey0: $ResourceKey$$Type<$Registry<R>>): $RegistryEntry<E>
public "getUnchecked"(): T
public "ifPresent"(consumer0: $Consumer$$Type<T>): void
public "is"<R>(r0: R): boolean
public "isPresent"(): boolean
public static "lazy"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public "lazy"(): $NonNullSupplier<T>
public "lazyMap"<U>(function0: $Function$$Type<T, U>): $Supplier<U>
public "map"<U>(function0: $Function$$Type<T, U>): $Optional<U>
public static "of"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public static "of"<T>(supplier0: $Supplier$$Type<T>, nonNullSupplier1: $NonNullSupplier$$Type<string>): $NonNullSupplier<T>
public "orElse"(t0: T): T
public "orElseGet"(supplier0: $Supplier$$Type<T>): T
public "orElseThrow"<X extends $Throwable>(supplier0: $Supplier$$Type<X>): T
public "stream"(): $Stream<T>
public "updateReference"(registerEvent0: $RegisterEvent$$Type): void
/** @deprecated */
public "updateReference"(iForgeRegistry0: $IForgeRegistry$$Type<T>): void
get "holder"(): $Optional<$Holder<T>>
get "id"(): $ResourceLocation
get "key"(): $ResourceKey<T>
get "unchecked"(): T
get "present"(): boolean
}
}

declare module "com.tterrag.registrate.util.nullness.NonNullBiFunction" {
import { $BiFunction } from "java.util.function.BiFunction"
import { $Function$$Type } from "java.util.function.Function"

export interface $NonNullBiFunction<T = any, U = any, R = any> extends $BiFunction<T, U, R> {
"andThen"<V>(function0: $Function$$Type<R, V>): $BiFunction<T, U, V>
"apply"(t0: T, u1: U): R
}

export namespace $NonNullBiFunction {
const probejs$$marker: never
}
export abstract class $NonNullBiFunction$$Static<T = any, U = any, R = any> implements $NonNullBiFunction<T, U, R> {
}
}

declare module "com.tterrag.registrate.providers.loot.RegistrateEntityLootTables" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $FrogVariant$$Type } from "net.minecraft.world.entity.animal.FrogVariant"
import { $ValidationContext$$Type } from "net.minecraft.world.level.storage.loot.ValidationContext"
import { $RegistrateLootTables } from "com.tterrag.registrate.providers.loot.RegistrateLootTables"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $LootTable$Builder, $LootTable$Builder$$Type } from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $AbstractRegistrate$$Type } from "com.tterrag.registrate.AbstractRegistrate"
import { $VanillaEntityLoot } from "net.minecraft.data.loot.packs.VanillaEntityLoot"
import { $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $Map$$Type } from "java.util.Map"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $LootTable$$Type } from "net.minecraft.world.level.storage.loot.LootTable"
import { $LootItemCondition$Builder } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder"

export class $RegistrateEntityLootTables extends $VanillaEntityLoot implements $RegistrateLootTables {
constructor(abstractRegistrate0: $AbstractRegistrate$$Type<any>, consumer1: $Consumer$$Type<$RegistrateEntityLootTables$$Type>)

public static "createSheepTable"(itemLike0: $ItemLike$$Type): $LootTable$Builder
public "generate"(biConsumer0: $BiConsumer$$Type<$ResourceLocation$$Type, $LootTable$Builder$$Type>): void
public "m_245309_"(entityType0: $EntityType$$Type<any>, builder1: $LootTable$Builder$$Type): void
public "m_245552_"(entityType0: $EntityType$$Type<any>): boolean
public "m_247253_"(frogVariant0: $FrogVariant$$Type): $LootItemCondition$Builder
public "m_247520_"(entityType0: $EntityType$$Type<any>, resourceLocation1: $ResourceLocation$$Type, builder2: $LootTable$Builder$$Type): void
public "validate"(map0: $Map$$Type<$ResourceLocation$$Type, $LootTable$$Type>, validationContext1: $ValidationContext$$Type): void
}
}

declare module "com.tterrag.registrate.builders.ItemBuilder" {
import { $CreativeModeTab } from "net.minecraft.world.item.CreativeModeTab"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $Item$Properties, $Item$Properties$$Type } from "net.minecraft.world.item.Item$Properties"
import { $CreativeModeTabModifier$$Type } from "com.tterrag.registrate.util.CreativeModeTabModifier"
import { $ProviderType$$Type } from "com.tterrag.registrate.providers.ProviderType"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $Registry } from "net.minecraft.core.Registry"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $RegistrateRecipeProvider$$Type } from "com.tterrag.registrate.providers.RegistrateRecipeProvider"
import { $NonNullSupplier, $NonNullSupplier$$Type } from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import { $NonNullFunction$$Type } from "com.tterrag.registrate.util.nullness.NonNullFunction"
import { $DataGenContext$$Type } from "com.tterrag.registrate.providers.DataGenContext"
import { $RegistrateItemModelProvider$$Type } from "com.tterrag.registrate.providers.RegistrateItemModelProvider"
import { $Builder, $Builder$$Type } from "com.tterrag.registrate.builders.Builder"
import { $BuilderCallback$$Type } from "com.tterrag.registrate.builders.BuilderCallback"
import { $NonNullConsumer$$Type } from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $AbstractRegistrate$$Type } from "com.tterrag.registrate.AbstractRegistrate"
import { $NonNullBiConsumer$$Type } from "com.tterrag.registrate.util.nullness.NonNullBiConsumer"
import { $AbstractBuilder } from "com.tterrag.registrate.builders.AbstractBuilder"
import { $NonNullUnaryOperator$$Type } from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import { $RegistryEntry } from "com.tterrag.registrate.util.entry.RegistryEntry"
import { $RegistrateProvider, $RegistrateProvider$$Type } from "com.tterrag.registrate.providers.RegistrateProvider"
import { $ItemColor } from "net.minecraft.client.color.item.ItemColor"

export class $ItemBuilder<T extends $Item = $Item, P = any> extends $AbstractBuilder<$Item, T, P, $ItemBuilder<T, P>> {
public "addMiscData"<D extends $RegistrateProvider>(providerType0: $ProviderType$$Type<D>, nonNullConsumer1: $NonNullConsumer$$Type<D>): $ItemBuilder<T, P>
public "build"(): P
public "color"(nonNullSupplier0: $NonNullSupplier$$Type<$Supplier<$ItemColor>>): $ItemBuilder<T, P>
public static "create"<T extends $Item, P>(abstractRegistrate0: $AbstractRegistrate$$Type<any>, p1: P, string2: string, builderCallback3: $BuilderCallback$$Type, nonNullFunction4: $NonNullFunction$$Type<$Item$Properties$$Type, T>): $ItemBuilder<T, P>
public "defaultLang"(): $ItemBuilder<T, P>
public "defaultModel"(): $ItemBuilder<T, P>
public "get"(): $RegistryEntry<T>
public "getEntry"(): T
public "initialProperties"(nonNullSupplier0: $NonNullSupplier$$Type<$Item$Properties>): $ItemBuilder<T, P>
public "lang"(string0: string): $ItemBuilder<T, P>
public static "lazy"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public "lazy"(): $NonNullSupplier<$RegistryEntry<T>>
public "model"(nonNullBiConsumer0: $NonNullBiConsumer$$Type<$DataGenContext$$Type<$Item$$Type, T>, $RegistrateItemModelProvider$$Type>): $ItemBuilder<T, P>
public static "of"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public static "of"<T>(supplier0: $Supplier$$Type<T>, nonNullSupplier1: $NonNullSupplier$$Type<string>): $NonNullSupplier<T>
public "onRegister"(nonNullConsumer0: $NonNullConsumer$$Type<T>): $ItemBuilder<T, P>
public "onRegisterAfter"<OR>(resourceKey0: $ResourceKey$$Type<$Registry<OR>>, nonNullConsumer1: $NonNullConsumer$$Type<T>): $ItemBuilder<T, P>
public "properties"(nonNullUnaryOperator0: $NonNullUnaryOperator$$Type<$Item$Properties$$Type>): $ItemBuilder<T, P>
public "recipe"(nonNullBiConsumer0: $NonNullBiConsumer$$Type<$DataGenContext$$Type<$Item$$Type, T>, $RegistrateRecipeProvider$$Type>): $ItemBuilder<T, P>
public "removeTab"(resourceKey0: $ResourceKey$$Type<$CreativeModeTab>): $ItemBuilder<T, P>
public "setData"<D extends $RegistrateProvider>(providerType0: $ProviderType$$Type<D>, nonNullBiConsumer1: $NonNullBiConsumer$$Type<$DataGenContext$$Type<$Item$$Type, T>, D>): $ItemBuilder<T, P>
public "tab"(resourceKey0: $ResourceKey$$Type<$CreativeModeTab>): $ItemBuilder<T, P>
public "tab"(resourceKey0: $ResourceKey$$Type<$CreativeModeTab>, nonNullBiConsumer1: $NonNullBiConsumer$$Type<$DataGenContext$$Type<$Item$$Type, T>, $CreativeModeTabModifier$$Type>): $ItemBuilder<T, P>
/** @deprecated */
public "tab"(resourceKey0: $ResourceKey$$Type<$CreativeModeTab>, consumer1: $Consumer$$Type<$CreativeModeTabModifier$$Type>): $ItemBuilder<T, P>
public "tag"(...tagKey0s: $TagKey$$Type<$Item$$Type>[]): $ItemBuilder<T, P>
public "transform"<R2, T2 extends R2, P2, S2 extends $Builder<R2, T2, P2, S2>>(nonNullFunction0: $NonNullFunction$$Type<$ItemBuilder$$Type<T, P>, S2>): S2
get "entry"(): T
}
}

declare module "com.tterrag.registrate.providers.RegistrateTagsProvider$IntrinsicImpl" {
import { $CompletableFuture, $CompletableFuture$$Type } from "java.util.concurrent.CompletableFuture"
import { $ProviderType$$Type } from "com.tterrag.registrate.providers.ProviderType"
import { $HolderLookup$Provider$$Type } from "net.minecraft.core.HolderLookup$Provider"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Function$$Type } from "java.util.function.Function"
import { $ExistingFileHelper$$Type } from "net.minecraftforge.common.data.ExistingFileHelper"
import { $CachedOutput$$Type } from "net.minecraft.data.CachedOutput"
import { $Registry } from "net.minecraft.core.Registry"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $RegistrateTagsProvider } from "com.tterrag.registrate.providers.RegistrateTagsProvider"
import { $AbstractRegistrate$$Type } from "com.tterrag.registrate.AbstractRegistrate"
import { $PackOutput$$Type } from "net.minecraft.data.PackOutput"
import { $IntrinsicHolderTagsProvider$IntrinsicTagAppender } from "net.minecraft.data.tags.IntrinsicHolderTagsProvider$IntrinsicTagAppender"
import { $Path$$Type } from "java.nio.file.Path"
import { $IntrinsicHolderTagsProvider } from "net.minecraft.data.tags.IntrinsicHolderTagsProvider"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export class $RegistrateTagsProvider$IntrinsicImpl<T = any> extends $IntrinsicHolderTagsProvider<T> implements $RegistrateTagsProvider<T> {
constructor(abstractRegistrate0: $AbstractRegistrate$$Type<any>, providerType1: $ProviderType$$Type<$RegistrateTagsProvider$IntrinsicImpl<T>>, string2: string, packOutput3: $PackOutput$$Type, resourceKey4: $ResourceKey$$Type<$Registry<T>>, completableFuture5: $CompletableFuture$$Type<$HolderLookup$Provider$$Type>, function6: $Function$$Type<T, $ResourceKey<T>>, existingFileHelper7: $ExistingFileHelper$$Type)

public "addTag"(tagKey0: $TagKey$$Type<T>): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>
public "getSide"(): $LogicalSide
public static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
get "side"(): $LogicalSide
}
}

declare module "com.tterrag.registrate.builders.MenuBuilder$MenuFactory" {
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $MenuType$$Type } from "net.minecraft.world.inventory.MenuType"

export interface $MenuBuilder$MenuFactory<T extends $AbstractContainerMenu = $AbstractContainerMenu> {
"create"(menuType0: $MenuType$$Type<T>, int1: integer, inventory2: $Inventory$$Type): T
}

export namespace $MenuBuilder$MenuFactory {
const probejs$$marker: never
}
export abstract class $MenuBuilder$MenuFactory$$Static<T extends $AbstractContainerMenu = $AbstractContainerMenu> implements $MenuBuilder$MenuFactory<T> {
}
}

declare module "com.tterrag.registrate.builders.FluidBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ForgeFlowingFluid$Properties$$Type } from "net.minecraftforge.fluids.ForgeFlowingFluid$Properties"
import { $Item$Properties$$Type } from "net.minecraft.world.item.Item$Properties"
import { $BlockBuilder } from "com.tterrag.registrate.builders.BlockBuilder"
import { $FluidType } from "net.minecraftforge.fluids.FluidType"
import { $ProviderType$$Type } from "com.tterrag.registrate.providers.ProviderType"
import { $LiquidBlock, $LiquidBlock$$Type } from "net.minecraft.world.level.block.LiquidBlock"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ForgeFlowingFluid, $ForgeFlowingFluid$$Type } from "net.minecraftforge.fluids.ForgeFlowingFluid"
import { $ItemBuilder } from "com.tterrag.registrate.builders.ItemBuilder"
import { $Registry } from "net.minecraft.core.Registry"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $NonNullSupplier, $NonNullSupplier$$Type } from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import { $NonNullFunction$$Type } from "com.tterrag.registrate.util.nullness.NonNullFunction"
import { $ForgeFlowingFluid$Flowing } from "net.minecraftforge.fluids.ForgeFlowingFluid$Flowing"
import { $Fluid, $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $DataGenContext$$Type } from "com.tterrag.registrate.providers.DataGenContext"
import { $FluidBuilder$FluidTypeFactory$$Type } from "com.tterrag.registrate.builders.FluidBuilder$FluidTypeFactory"
import { $Builder, $Builder$$Type } from "com.tterrag.registrate.builders.Builder"
import { $BuilderCallback$$Type } from "com.tterrag.registrate.builders.BuilderCallback"
import { $RenderType } from "net.minecraft.client.renderer.RenderType"
import { $NonNullConsumer$$Type } from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $AbstractRegistrate$$Type } from "com.tterrag.registrate.AbstractRegistrate"
import { $NonNullBiConsumer$$Type } from "com.tterrag.registrate.util.nullness.NonNullBiConsumer"
import { $AbstractBuilder } from "com.tterrag.registrate.builders.AbstractBuilder"
import { $NonNullBiFunction$$Type } from "com.tterrag.registrate.util.nullness.NonNullBiFunction"
import { $RegistryEntry } from "com.tterrag.registrate.util.entry.RegistryEntry"
import { $FluidType$Properties$$Type } from "net.minecraftforge.fluids.FluidType$Properties"
import { $BucketItem, $BucketItem$$Type } from "net.minecraft.world.item.BucketItem"
import { $RegistrateProvider, $RegistrateProvider$$Type } from "com.tterrag.registrate.providers.RegistrateProvider"

export class $FluidBuilder<T extends $ForgeFlowingFluid = $ForgeFlowingFluid, P = any> extends $AbstractBuilder<$Fluid, T, P, $FluidBuilder<T, P>> {
constructor(abstractRegistrate0: $AbstractRegistrate$$Type<any>, p1: P, string2: string, builderCallback3: $BuilderCallback$$Type, resourceLocation4: $ResourceLocation$$Type, resourceLocation5: $ResourceLocation$$Type, nonNullSupplier6: $NonNullSupplier$$Type<$FluidType>, nonNullFunction7: $NonNullFunction$$Type<$ForgeFlowingFluid$Properties$$Type, T>)
constructor(abstractRegistrate0: $AbstractRegistrate$$Type<any>, p1: P, string2: string, builderCallback3: $BuilderCallback$$Type, resourceLocation4: $ResourceLocation$$Type, resourceLocation5: $ResourceLocation$$Type, fluidTypeFactory6: $FluidBuilder$FluidTypeFactory$$Type, nonNullFunction7: $NonNullFunction$$Type<$ForgeFlowingFluid$Properties$$Type, T>)

public "addMiscData"<D extends $RegistrateProvider>(providerType0: $ProviderType$$Type<D>, nonNullConsumer1: $NonNullConsumer$$Type<D>): $FluidBuilder<T, P>
public "block"<B extends $LiquidBlock>(nonNullBiFunction0: $NonNullBiFunction$$Type<$NonNullSupplier$$Type<T>, $BlockBehaviour$Properties$$Type, B>): $BlockBuilder<B, $FluidBuilder<T, P>>
public "block"(): $BlockBuilder<$LiquidBlock, $FluidBuilder<T, P>>
public "bucket"<I extends $BucketItem>(nonNullBiFunction0: $NonNullBiFunction$$Type<$Supplier$$Type<$ForgeFlowingFluid$$Type>, $Item$Properties$$Type, I>): $ItemBuilder<I, $FluidBuilder<T, P>>
public "bucket"(): $ItemBuilder<$BucketItem, $FluidBuilder<T, P>>
public "build"(): P
public static "create"<P>(abstractRegistrate0: $AbstractRegistrate$$Type<any>, p1: P, string2: string, builderCallback3: $BuilderCallback$$Type, resourceLocation4: $ResourceLocation$$Type, resourceLocation5: $ResourceLocation$$Type): $FluidBuilder<$ForgeFlowingFluid$Flowing, P>
public static "create"<T extends $ForgeFlowingFluid, P>(abstractRegistrate0: $AbstractRegistrate$$Type<any>, p1: P, string2: string, builderCallback3: $BuilderCallback$$Type, resourceLocation4: $ResourceLocation$$Type, resourceLocation5: $ResourceLocation$$Type, nonNullSupplier6: $NonNullSupplier$$Type<$FluidType>, nonNullFunction7: $NonNullFunction$$Type<$ForgeFlowingFluid$Properties$$Type, T>): $FluidBuilder<T, P>
public static "create"<T extends $ForgeFlowingFluid, P>(abstractRegistrate0: $AbstractRegistrate$$Type<any>, p1: P, string2: string, builderCallback3: $BuilderCallback$$Type, resourceLocation4: $ResourceLocation$$Type, resourceLocation5: $ResourceLocation$$Type, fluidTypeFactory6: $FluidBuilder$FluidTypeFactory$$Type, nonNullFunction7: $NonNullFunction$$Type<$ForgeFlowingFluid$Properties$$Type, T>): $FluidBuilder<T, P>
public static "create"<T extends $ForgeFlowingFluid, P>(abstractRegistrate0: $AbstractRegistrate$$Type<any>, p1: P, string2: string, builderCallback3: $BuilderCallback$$Type, resourceLocation4: $ResourceLocation$$Type, resourceLocation5: $ResourceLocation$$Type, nonNullFunction6: $NonNullFunction$$Type<$ForgeFlowingFluid$Properties$$Type, T>): $FluidBuilder<T, P>
public static "create"<P>(abstractRegistrate0: $AbstractRegistrate$$Type<any>, p1: P, string2: string, builderCallback3: $BuilderCallback$$Type, resourceLocation4: $ResourceLocation$$Type, resourceLocation5: $ResourceLocation$$Type, nonNullSupplier6: $NonNullSupplier$$Type<$FluidType>): $FluidBuilder<$ForgeFlowingFluid$Flowing, P>
public static "create"<P>(abstractRegistrate0: $AbstractRegistrate$$Type<any>, p1: P, string2: string, builderCallback3: $BuilderCallback$$Type, resourceLocation4: $ResourceLocation$$Type, resourceLocation5: $ResourceLocation$$Type, fluidTypeFactory6: $FluidBuilder$FluidTypeFactory$$Type): $FluidBuilder<$ForgeFlowingFluid$Flowing, P>
public "defaultBlock"(): $FluidBuilder<T, P>
public "defaultBucket"(): $FluidBuilder<T, P>
public "defaultLang"(): $FluidBuilder<T, P>
public "defaultSource"(): $FluidBuilder<T, P>
public "fluidProperties"(nonNullConsumer0: $NonNullConsumer$$Type<$ForgeFlowingFluid$Properties$$Type>): $FluidBuilder<T, P>
public "get"(): $RegistryEntry<T>
public "getEntry"(): T
public "lang"(string0: string): $FluidBuilder<T, P>
public static "lazy"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public "lazy"(): $NonNullSupplier<$RegistryEntry<T>>
public "noBlock"(): $FluidBuilder<T, P>
public "noBucket"(): $FluidBuilder<T, P>
public static "of"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public static "of"<T>(supplier0: $Supplier$$Type<T>, nonNullSupplier1: $NonNullSupplier$$Type<string>): $NonNullSupplier<T>
public "onRegister"(nonNullConsumer0: $NonNullConsumer$$Type<T>): $FluidBuilder<T, P>
public "onRegisterAfter"<OR>(resourceKey0: $ResourceKey$$Type<$Registry<OR>>, nonNullConsumer1: $NonNullConsumer$$Type<T>): $FluidBuilder<T, P>
public "properties"(nonNullConsumer0: $NonNullConsumer$$Type<$FluidType$Properties$$Type>): $FluidBuilder<T, P>
public "removeTag"(...tagKey0s: $TagKey$$Type<$Fluid$$Type>[]): $FluidBuilder<T, P>
public "renderType"(supplier0: $Supplier$$Type<$RenderType>): $FluidBuilder<T, P>
public "setData"<D extends $RegistrateProvider>(providerType0: $ProviderType$$Type<D>, nonNullBiConsumer1: $NonNullBiConsumer$$Type<$DataGenContext$$Type<$Fluid$$Type, T>, D>): $FluidBuilder<T, P>
public "source"(nonNullFunction0: $NonNullFunction$$Type<$ForgeFlowingFluid$Properties$$Type, $ForgeFlowingFluid>): $FluidBuilder<T, P>
public "tag"(...tagKey0s: $TagKey$$Type<$Fluid$$Type>[]): $FluidBuilder<T, P>
public "transform"<R2, T2 extends R2, P2, S2 extends $Builder<R2, T2, P2, S2>>(nonNullFunction0: $NonNullFunction$$Type<$FluidBuilder$$Type<T, P>, S2>): S2
get "entry"(): T
}
}

declare module "com.tterrag.registrate.builders.AbstractBuilder" {
import { $Builder, $Builder$$Type } from "com.tterrag.registrate.builders.Builder"
import { $BuilderCallback$$Type } from "com.tterrag.registrate.builders.BuilderCallback"
import { $ProviderType$$Type } from "com.tterrag.registrate.providers.ProviderType"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $NonNullConsumer$$Type } from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Registry } from "net.minecraft.core.Registry"
import { $NonNullFunction$$Type } from "net.minecraftforge.common.util.NonNullFunction"
import { $RegistrateTagsProvider, $RegistrateTagsProvider$$Type } from "com.tterrag.registrate.providers.RegistrateTagsProvider"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $AbstractRegistrate, $AbstractRegistrate$$Type } from "com.tterrag.registrate.AbstractRegistrate"
import { $NonNullBiConsumer$$Type } from "com.tterrag.registrate.util.nullness.NonNullBiConsumer"
import { $NonNullSupplier, $NonNullSupplier$$Type } from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import { $RegistryEntry } from "com.tterrag.registrate.util.entry.RegistryEntry"
import { $NonNullFunction$$Type as $NonNullFunction$0$$Type } from "com.tterrag.registrate.util.nullness.NonNullFunction"
import { $DataGenContext$$Type } from "com.tterrag.registrate.providers.DataGenContext"
import { $TagsProvider, $TagsProvider$$Type } from "net.minecraft.data.tags.TagsProvider"
import { $RegistrateProvider, $RegistrateProvider$$Type } from "com.tterrag.registrate.providers.RegistrateProvider"

export class $AbstractBuilder<R = any, T extends R = R, P = any, S extends $AbstractBuilder<R, T, P, S> = $AbstractBuilder<R, T, P, S>> implements $Builder<R, T, P, S> {
constructor(abstractRegistrate0: $AbstractRegistrate$$Type<any>, p1: P, string2: string, builderCallback3: $BuilderCallback$$Type, resourceKey4: $ResourceKey$$Type<$Registry<R>>)

public "addMiscData"<D extends $RegistrateProvider>(providerType0: $ProviderType$$Type<D>, nonNullConsumer1: $NonNullConsumer$$Type<D>): S
public "asSupplier"(): $NonNullSupplier<T>
public "build"(): P
public "get"(): $RegistryEntry<T>
public "getEntry"(): T
public "getName"(): string
public "getOwner"(): $AbstractRegistrate<any>
public "getParent"(): P
public "getRegistryKey"(): $ResourceKey<$Registry<R>>
public "lang"(nonNullFunction0: $NonNullFunction$$Type<T, string>, string1: string): S
public "lang"(nonNullFunction0: $NonNullFunction$$Type<T, string>): S
public static "lazy"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public "lazy"(): $NonNullSupplier<$RegistryEntry<T>>
public static "of"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public static "of"<T>(supplier0: $Supplier$$Type<T>, nonNullSupplier1: $NonNullSupplier$$Type<string>): $NonNullSupplier<T>
public "onRegister"(nonNullConsumer0: $NonNullConsumer$$Type<T>): S
public "onRegisterAfter"<OR>(resourceKey0: $ResourceKey$$Type<$Registry<OR>>, nonNullConsumer1: $NonNullConsumer$$Type<T>): S
public "register"(): $RegistryEntry<T>
public "removeTag"<TP extends ($TagsProvider<R> & $RegistrateTagsProvider<R>)>(providerType0: $ProviderType$$Type<TP>, ...tagKey1s: $TagKey$$Type<R>[]): S
public "setData"<D extends $RegistrateProvider>(providerType0: $ProviderType$$Type<D>, nonNullBiConsumer1: $NonNullBiConsumer$$Type<$DataGenContext$$Type<R, T>, D>): S
public "tag"<TP extends ($TagsProvider<R> & $RegistrateTagsProvider<R>)>(providerType0: $ProviderType$$Type<TP>, ...tagKey1s: $TagKey$$Type<R>[]): S
public "transform"<R2, T2 extends R2, P2, S2 extends $Builder<R2, T2, P2, S2>>(nonNullFunction0: $NonNullFunction$0$$Type<S, S2>): S2
get "entry"(): T
get "name"(): string
get "owner"(): $AbstractRegistrate<any>
get "parent"(): P
get "registryKey"(): $ResourceKey<$Registry<R>>
}
}

declare module "com.tterrag.registrate.util.CreativeModeTabModifier" {
import { $FeatureFlagSet } from "net.minecraft.world.flag.FeatureFlagSet"
import { $CreativeModeTab$Output } from "net.minecraft.world.item.CreativeModeTab$Output"
import { $ItemLike, $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $Collection$$Type } from "java.util.Collection"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $CreativeModeTab$TabVisibility$$Type } from "net.minecraft.world.item.CreativeModeTab$TabVisibility"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $BooleanSupplier$$Type } from "java.util.function.BooleanSupplier"

export class $CreativeModeTabModifier implements $CreativeModeTab$Output {
constructor(supplier0: $Supplier$$Type<$FeatureFlagSet>, booleanSupplier1: $BooleanSupplier$$Type, biConsumer2: $BiConsumer$$Type<$ItemStack$$Type, $CreativeModeTab$TabVisibility$$Type>)

public "accept"(itemStack0: $ItemStack$$Type, tabVisibility1: $CreativeModeTab$TabVisibility$$Type): void
public "accept"(supplier0: $Supplier$$Type<$ItemLike>, tabVisibility1: $CreativeModeTab$TabVisibility$$Type): void
public "accept"(supplier0: $Supplier$$Type<$ItemLike>): void
public "accept"(itemStack0: $ItemStack$$Type): void
public "accept"(itemLike0: $ItemLike$$Type, tabVisibility1: $CreativeModeTab$TabVisibility$$Type): void
public "accept"(itemLike0: $ItemLike$$Type): void
public "acceptAll"(collection0: $Collection$$Type<$ItemStack$$Type>, tabVisibility1: $CreativeModeTab$TabVisibility$$Type): void
public "acceptAll"(collection0: $Collection$$Type<$ItemStack$$Type>): void
public "getFlags"(): $FeatureFlagSet
public "hasPermissions"(): boolean
get "flags"(): $FeatureFlagSet
}
}

declare module "com.tterrag.registrate.util.DataIngredient" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $InputItem } from "dev.latvian.mods.kubejs.item.InputItem"
import { $IIngredientSerializer } from "net.minecraftforge.common.crafting.IIngredientSerializer"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $InventoryChangeTrigger$TriggerInstance } from "net.minecraft.advancements.critereon.InventoryChangeTrigger$TriggerInstance"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $ItemStackSet } from "dev.latvian.mods.kubejs.item.ItemStackSet"
import { $Set } from "java.util.Set"
import { $Ingredient, $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $JsonElement } from "com.google.gson.JsonElement"
import { $RegistrateRecipeProvider$$Type } from "com.tterrag.registrate.providers.RegistrateRecipeProvider"
import { $NonNullSupplier$$Type } from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import { $ItemLike, $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ItemPredicate$$Type } from "net.minecraft.advancements.critereon.ItemPredicate"

export class $DataIngredient extends $Ingredient {
public "and"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $Predicate<$ItemStack>
public "and"(ingredient: $Ingredient$$Type): $Ingredient
public "asIngredient"(): $Ingredient
public "asStack"(): $InputItem
public "canBeUsedForMatching"(): boolean
public "getCritereon"(registrateRecipeProvider0: $RegistrateRecipeProvider$$Type): $InventoryChangeTrigger$TriggerInstance
public "getDisplayStacks"(): $ItemStackSet
public "getFirst"(): $ItemStack
public "getId"(): $ResourceLocation
public "getItemIds"(): $Set<string>
public "getItemTypes"(): $Set<$Item>
public "getSerializer"(): $IIngredientSerializer<$DataIngredient>
public "getStacks"(): $ItemStackSet
public static "ingredient"(ingredient0: $Ingredient$$Type, itemLike1: $ItemLike$$Type): $DataIngredient
public static "ingredient"(ingredient0: $Ingredient$$Type, tagKey1: $TagKey$$Type<$Item$$Type>): $DataIngredient
public static "ingredient"(ingredient0: $Ingredient$$Type, resourceLocation1: $ResourceLocation$$Type, ...itemPredicate2s: $ItemPredicate$$Type[]): $DataIngredient
public static "isEqual"<T>(object0: any): $Predicate<T>
public "isWildcard"(): boolean
public static "items"<T extends $ItemLike>(nonNullSupplier0: $NonNullSupplier$$Type<T>, ...nonNullSupplier1s: $NonNullSupplier$$Type<T>[]): $DataIngredient
public static "items"<T extends $ItemLike>(t0: T, ...t1s: T[]): $DataIngredient
public "negate"(): $Predicate<$ItemStack>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public "or"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $Predicate<$ItemStack>
public "or"(ingredient: $Ingredient$$Type): $Ingredient
public static "stacks"(itemStack0: $ItemStack$$Type, ...itemStack1s: $ItemStack$$Type[]): $DataIngredient
public "subtract"(subtracted: $Ingredient$$Type): $Ingredient
public static "tag"(tagKey0: $TagKey$$Type<$Item$$Type>): $DataIngredient
public "testItem"(item: $Item$$Type): boolean
public "toJson"(): $JsonElement
public "withCount"(count: integer): $InputItem
get "displayStacks"(): $ItemStackSet
get "first"(): $ItemStack
get "id"(): $ResourceLocation
get "itemIds"(): $Set<string>
get "itemTypes"(): $Set<$Item>
get "serializer"(): $IIngredientSerializer<$DataIngredient>
get "wildcard"(): boolean
}
}

declare module "com.tterrag.registrate.util.entry.ItemEntry" {
import { $AbstractRegistrate$$Type } from "com.tterrag.registrate.AbstractRegistrate"
import { $NonNullSupplier, $NonNullSupplier$$Type } from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $RegistryEntry$$Type } from "com.tterrag.registrate.util.entry.RegistryEntry"
import { $ItemProviderEntry } from "com.tterrag.registrate.util.entry.ItemProviderEntry"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $RegistryObject$$Type } from "net.minecraftforge.registries.RegistryObject"

export class $ItemEntry<T extends $Item = $Item> extends $ItemProviderEntry<T> {
constructor(abstractRegistrate0: $AbstractRegistrate$$Type<any>, registryObject1: $RegistryObject$$Type<T>)

public static "cast"<T extends $Item>(registryEntry0: $RegistryEntry$$Type<T>): $ItemEntry<T>
public static "lazy"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public "lazy"(): $NonNullSupplier<T>
public static "of"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public static "of"<T>(supplier0: $Supplier$$Type<T>, nonNullSupplier1: $NonNullSupplier$$Type<string>): $NonNullSupplier<T>
}
}

declare module "com.tterrag.registrate.providers.RegistrateRecipeProvider" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $ShapedRecipeBuilder } from "net.minecraft.data.recipes.ShapedRecipeBuilder"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $RecipeProvider } from "net.minecraft.data.recipes.RecipeProvider"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $RecipeBuilder } from "net.minecraft.data.recipes.RecipeBuilder"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $PackOutput$$Type } from "net.minecraft.data.PackOutput"
import { $MinMaxBounds$Ints$$Type } from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import { $NonNullSupplier$$Type } from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import { $ItemLike, $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $ShapelessRecipeBuilder } from "net.minecraft.data.recipes.ShapelessRecipeBuilder"
import { $RecipeCategory$$Type } from "net.minecraft.data.recipes.RecipeCategory"
import { $AbstractCookingRecipe$$Type } from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import { $ItemPredicate$$Type } from "net.minecraft.advancements.critereon.ItemPredicate"
import { $Path$$Type } from "java.nio.file.Path"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"
import { $RecipeSerializer$$Type } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $InventoryChangeTrigger$TriggerInstance } from "net.minecraft.advancements.critereon.InventoryChangeTrigger$TriggerInstance"
import { $BlockFamily$$Type } from "net.minecraft.data.BlockFamily"
import { $DataIngredient$$Type } from "com.tterrag.registrate.util.DataIngredient"
import { $FinishedRecipe, $FinishedRecipe$$Type } from "net.minecraft.data.recipes.FinishedRecipe"
import { $CachedOutput$$Type } from "net.minecraft.data.CachedOutput"
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $EnterBlockTrigger$TriggerInstance } from "net.minecraft.advancements.critereon.EnterBlockTrigger$TriggerInstance"
import { $AbstractRegistrate$$Type } from "com.tterrag.registrate.AbstractRegistrate"
import { $List$$Type } from "java.util.List"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $BlockFamily$Variant$$Type } from "net.minecraft.data.BlockFamily$Variant"
import { $RegistrateProvider } from "com.tterrag.registrate.providers.RegistrateProvider"

export class $RegistrateRecipeProvider extends $RecipeProvider implements $RegistrateProvider, $Consumer<$FinishedRecipe> {
static readonly "DEFAULT_BLAST_TIME": integer
static readonly "DEFAULT_CAMPFIRE_TIME": integer
static readonly "DEFAULT_SMELT_TIME": integer
static readonly "DEFAULT_SMOKE_TIME": integer

constructor(abstractRegistrate0: $AbstractRegistrate$$Type<any>, packOutput1: $PackOutput$$Type)

public "accept"(finishedRecipe0: $FinishedRecipe$$Type): void
public "andThen"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>): $Consumer<$FinishedRecipe>
public static "banner"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "bedFromPlanksAndWool"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public "blasting"<T extends $ItemLike>(dataIngredient0: $DataIngredient$$Type, recipeCategory1: $RecipeCategory$$Type, supplier2: $Supplier$$Type<T>, float3: float, int4: integer): void
public "blasting"<T extends $ItemLike>(dataIngredient0: $DataIngredient$$Type, recipeCategory1: $RecipeCategory$$Type, supplier2: $Supplier$$Type<T>, float3: float): void
public static "buttonBuilder"(itemLike0: $ItemLike$$Type, ingredient1: $Ingredient$$Type): $RecipeBuilder
public "campfire"<T extends $ItemLike>(dataIngredient0: $DataIngredient$$Type, recipeCategory1: $RecipeCategory$$Type, supplier2: $Supplier$$Type<T>, float3: float): void
public "campfire"<T extends $ItemLike>(dataIngredient0: $DataIngredient$$Type, recipeCategory1: $RecipeCategory$$Type, supplier2: $Supplier$$Type<T>, float3: float, int4: integer): void
public static "candle"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "carpet"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "chestBoat"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "chiseled"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type): void
public static "chiseledBuilder"(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type, ingredient2: $Ingredient$$Type): $ShapedRecipeBuilder
public static "colorBlockWithDye"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, list1: $List$$Type<$Item$$Type>, list2: $List$$Type<$Item$$Type>, string3: string): void
public static "coloredTerracottaFromTerracottaAndDye"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "concretePowder"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "cookRecipes"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, string1: string, recipeSerializer2: $RecipeSerializer$$Type<$AbstractCookingRecipe$$Type>, int3: integer): void
public "cooking"<T extends $ItemLike>(dataIngredient0: $DataIngredient$$Type, recipeCategory1: $RecipeCategory$$Type, supplier2: $Supplier$$Type<T>, float3: float, int4: integer, recipeSerializer5: $RecipeSerializer$$Type<$AbstractCookingRecipe$$Type>): void
public "cooking"<T extends $ItemLike>(dataIngredient0: $DataIngredient$$Type, recipeCategory1: $RecipeCategory$$Type, supplier2: $Supplier$$Type<T>, float3: float, int4: integer, string5: string, recipeSerializer6: $RecipeSerializer$$Type<$AbstractCookingRecipe$$Type>): void
public static "copySmithingTemplate"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, tagKey2: $TagKey$$Type<$Item$$Type>): void
public static "copySmithingTemplate"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "cut"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type): void
public static "cutBuilder"(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type, ingredient2: $Ingredient$$Type): $ShapedRecipeBuilder
public "door"<T extends $ItemLike>(dataIngredient0: $DataIngredient$$Type, recipeCategory1: $RecipeCategory$$Type, supplier2: $Supplier$$Type<T>, string3: string): void
public static "doorBuilder"(itemLike0: $ItemLike$$Type, ingredient1: $Ingredient$$Type): $RecipeBuilder
public "fence"<T extends $ItemLike>(dataIngredient0: $DataIngredient$$Type, recipeCategory1: $RecipeCategory$$Type, supplier2: $Supplier$$Type<T>, string3: string): void
public static "fenceBuilder"(itemLike0: $ItemLike$$Type, ingredient1: $Ingredient$$Type): $RecipeBuilder
public "fenceGate"<T extends $ItemLike>(dataIngredient0: $DataIngredient$$Type, recipeCategory1: $RecipeCategory$$Type, supplier2: $Supplier$$Type<T>, string3: string): void
public static "fenceGateBuilder"(itemLike0: $ItemLike$$Type, ingredient1: $Ingredient$$Type): $RecipeBuilder
public "food"<T extends $ItemLike>(dataIngredient0: $DataIngredient$$Type, recipeCategory1: $RecipeCategory$$Type, supplier2: $Supplier$$Type<T>, float3: float): void
public static "generateRecipes"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, blockFamily1: $BlockFamily$$Type): void
public static "getBaseBlock"(blockFamily0: $BlockFamily$$Type, variant1: $BlockFamily$Variant$$Type): $Block
public static "getBlastingRecipeName"(itemLike0: $ItemLike$$Type): string
public static "getConversionRecipeName"(itemLike0: $ItemLike$$Type, itemLike1: $ItemLike$$Type): string
public static "getHasName"(itemLike0: $ItemLike$$Type): string
public static "getItemName"(itemLike0: $ItemLike$$Type): string
public "getSide"(): $LogicalSide
public static "getSimpleRecipeName"(itemLike0: $ItemLike$$Type): string
public static "getSmeltingRecipeName"(itemLike0: $ItemLike$$Type): string
public static "hangingSign"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "has"(itemLike0: $ItemLike$$Type): $InventoryChangeTrigger$TriggerInstance
public static "has"(tagKey0: $TagKey$$Type<$Item$$Type>): $InventoryChangeTrigger$TriggerInstance
public static "has"(ints0: $MinMaxBounds$Ints$$Type, itemLike1: $ItemLike$$Type): $InventoryChangeTrigger$TriggerInstance
public static "insideOf"(block0: $Block$$Type): $EnterBlockTrigger$TriggerInstance
public static "inventoryTrigger"(...itemPredicate0s: $ItemPredicate$$Type[]): $InventoryChangeTrigger$TriggerInstance
public static "mosaicBuilder"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type): void
public static "netheriteSmithing"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, item1: $Item$$Type, recipeCategory2: $RecipeCategory$$Type, item3: $Item$$Type): void
public static "nineBlockStorageRecipes"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, recipeCategory3: $RecipeCategory$$Type, itemLike4: $ItemLike$$Type): void
public static "nineBlockStorageRecipesRecipesWithCustomUnpacking"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, recipeCategory3: $RecipeCategory$$Type, itemLike4: $ItemLike$$Type, string5: string, string6: string): void
public static "nineBlockStorageRecipesWithCustomPacking"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, recipeCategory3: $RecipeCategory$$Type, itemLike4: $ItemLike$$Type, string5: string, string6: string): void
public static "oreBlasting"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, list1: $List$$Type<$ItemLike$$Type>, recipeCategory2: $RecipeCategory$$Type, itemLike3: $ItemLike$$Type, float4: float, int5: integer, string6: string): void
public static "oreCooking"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeSerializer1: $RecipeSerializer$$Type<$AbstractCookingRecipe$$Type>, list2: $List$$Type<$ItemLike$$Type>, recipeCategory3: $RecipeCategory$$Type, itemLike4: $ItemLike$$Type, float5: float, int6: integer, string7: string, string8: string): void
public static "oreSmelting"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, list1: $List$$Type<$ItemLike$$Type>, recipeCategory2: $RecipeCategory$$Type, itemLike3: $ItemLike$$Type, float4: float, int5: integer, string6: string): void
public "planks"<T extends $ItemLike>(dataIngredient0: $DataIngredient$$Type, recipeCategory1: $RecipeCategory$$Type, supplier2: $Supplier$$Type<T>): void
public static "planksFromLog"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, tagKey2: $TagKey$$Type<$Item$$Type>, int3: integer): void
public static "planksFromLogs"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, tagKey2: $TagKey$$Type<$Item$$Type>, int3: integer): void
public static "polished"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type): void
public static "polishedBuilder"(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type, ingredient2: $Ingredient$$Type): $RecipeBuilder
public static "pressurePlate"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "pressurePlateBuilder"(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type, ingredient2: $Ingredient$$Type): $RecipeBuilder
public "safeId"(itemLike0: $ItemLike$$Type): $ResourceLocation
public "safeId"(resourceLocation0: $ResourceLocation$$Type): $ResourceLocation
public "safeId"(dataIngredient0: $DataIngredient$$Type): $ResourceLocation
public "safeName"(dataIngredient0: $DataIngredient$$Type): string
public "safeName"(itemLike0: $ItemLike$$Type): string
public "safeName"(resourceLocation0: $ResourceLocation$$Type): string
public "saveAdvancement"(cachedOutput0: $CachedOutput$$Type, finishedRecipe1: $FinishedRecipe$$Type, jsonObject2: $JsonObject$$Type): $CompletableFuture<any>
public static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
public static "signBuilder"(itemLike0: $ItemLike$$Type, ingredient1: $Ingredient$$Type): $RecipeBuilder
public static "simpleCookingRecipe"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, string1: string, recipeSerializer2: $RecipeSerializer$$Type<$AbstractCookingRecipe$$Type>, int3: integer, itemLike4: $ItemLike$$Type, itemLike5: $ItemLike$$Type, float6: float): void
public "singleItem"<T extends $ItemLike>(dataIngredient0: $DataIngredient$$Type, recipeCategory1: $RecipeCategory$$Type, supplier2: $Supplier$$Type<T>, int3: integer, int4: integer): void
public "singleItemUnfinished"<T extends $ItemLike>(dataIngredient0: $DataIngredient$$Type, recipeCategory1: $RecipeCategory$$Type, supplier2: $Supplier$$Type<T>, int3: integer, int4: integer): $ShapelessRecipeBuilder
public static "slab"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type): void
public "slab"<T extends $ItemLike>(dataIngredient0: $DataIngredient$$Type, recipeCategory1: $RecipeCategory$$Type, supplier2: $Supplier$$Type<T>, string3: string, boolean4: boolean): void
public static "slabBuilder"(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type, ingredient2: $Ingredient$$Type): $RecipeBuilder
public "smelting"<T extends $ItemLike>(dataIngredient0: $DataIngredient$$Type, recipeCategory1: $RecipeCategory$$Type, supplier2: $Supplier$$Type<T>, float3: float, int4: integer): void
public "smelting"<T extends $ItemLike>(dataIngredient0: $DataIngredient$$Type, recipeCategory1: $RecipeCategory$$Type, supplier2: $Supplier$$Type<T>, float3: float): void
public "smeltingAndBlasting"<T extends $ItemLike>(dataIngredient0: $DataIngredient$$Type, recipeCategory1: $RecipeCategory$$Type, supplier2: $Supplier$$Type<T>, float3: float): void
public static "smeltingResultFromBase"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public "smoking"<T extends $ItemLike>(dataIngredient0: $DataIngredient$$Type, recipeCategory1: $RecipeCategory$$Type, supplier2: $Supplier$$Type<T>, float3: float): void
public "smoking"<T extends $ItemLike>(dataIngredient0: $DataIngredient$$Type, recipeCategory1: $RecipeCategory$$Type, supplier2: $Supplier$$Type<T>, float3: float, int4: integer): void
public "square"<T extends $ItemLike>(dataIngredient0: $DataIngredient$$Type, recipeCategory1: $RecipeCategory$$Type, supplier2: $Supplier$$Type<T>, boolean3: boolean): void
public static "stainedGlassFromGlassAndDye"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "stainedGlassPaneFromGlassPaneAndDye"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "stainedGlassPaneFromStainedGlass"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "stairBuilder"(itemLike0: $ItemLike$$Type, ingredient1: $Ingredient$$Type): $RecipeBuilder
public "stairs"<T extends $ItemLike>(dataIngredient0: $DataIngredient$$Type, recipeCategory1: $RecipeCategory$$Type, supplier2: $Supplier$$Type<T>, string3: string, boolean4: boolean): void
public static "stonecutterResultFromBase"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type): void
public static "stonecutterResultFromBase"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type, int4: integer): void
public "stonecutting"<T extends $ItemLike>(dataIngredient0: $DataIngredient$$Type, recipeCategory1: $RecipeCategory$$Type, supplier2: $Supplier$$Type<T>, int3: integer): void
public "stonecutting"<T extends $ItemLike>(dataIngredient0: $DataIngredient$$Type, recipeCategory1: $RecipeCategory$$Type, supplier2: $Supplier$$Type<T>): void
public "storage"<T extends $ItemLike>(dataIngredient0: $DataIngredient$$Type, recipeCategory1: $RecipeCategory$$Type, nonNullSupplier2: $NonNullSupplier$$Type<T>, dataIngredient3: $DataIngredient$$Type, nonNullSupplier4: $NonNullSupplier$$Type<T>): void
public "storage"<T extends $ItemLike>(nonNullSupplier0: $NonNullSupplier$$Type<T>, recipeCategory1: $RecipeCategory$$Type, nonNullSupplier2: $NonNullSupplier$$Type<T>): void
/** @deprecated */
public "storage"<T extends $ItemLike>(dataIngredient0: $DataIngredient$$Type, recipeCategory1: $RecipeCategory$$Type, nonNullSupplier2: $NonNullSupplier$$Type<T>): void
public static "threeByThreePacker"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type, string4: string): void
public static "threeByThreePacker"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type): void
public "trapDoor"<T extends $ItemLike>(dataIngredient0: $DataIngredient$$Type, recipeCategory1: $RecipeCategory$$Type, supplier2: $Supplier$$Type<T>, string3: string): void
public static "trapdoorBuilder"(itemLike0: $ItemLike$$Type, ingredient1: $Ingredient$$Type): $RecipeBuilder
public static "trimSmithing"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, item1: $Item$$Type, resourceLocation2: $ResourceLocation$$Type): void
public static "twoByTwoPacker"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type): void
public "wall"<T extends $ItemLike>(dataIngredient0: $DataIngredient$$Type, recipeCategory1: $RecipeCategory$$Type, supplier2: $Supplier$$Type<T>): void
public static "wall"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type): void
public static "wallBuilder"(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type, ingredient2: $Ingredient$$Type): $RecipeBuilder
public static "waxRecipes"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>): void
public static "woodFromLogs"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "woodenBoat"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
get "side"(): $LogicalSide
}
}

declare module "com.tterrag.registrate.providers.RegistrateItemModelProvider" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ItemModelBuilder } from "net.minecraftforge.client.model.generators.ItemModelBuilder"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ExistingFileHelper$$Type } from "net.minecraftforge.common.data.ExistingFileHelper"
import { $CachedOutput$$Type } from "net.minecraft.data.CachedOutput"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $AbstractRegistrate$$Type } from "com.tterrag.registrate.AbstractRegistrate"
import { $PackOutput$$Type } from "net.minecraft.data.PackOutput"
import { $NonNullSupplier$$Type } from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import { $ItemLike } from "net.minecraft.world.level.ItemLike"
import { $ItemModelProvider } from "net.minecraftforge.client.model.generators.ItemModelProvider"
import { $Path$$Type } from "java.nio.file.Path"
import { $RegistrateProvider } from "com.tterrag.registrate.providers.RegistrateProvider"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export class $RegistrateItemModelProvider extends $ItemModelProvider implements $RegistrateProvider {
constructor(abstractRegistrate0: $AbstractRegistrate$$Type<any>, packOutput1: $PackOutput$$Type, existingFileHelper2: $ExistingFileHelper$$Type)

public "blockItem"(nonNullSupplier0: $NonNullSupplier$$Type<$ItemLike>, string1: string): $ItemModelBuilder
public "blockItem"(nonNullSupplier0: $NonNullSupplier$$Type<$ItemLike>): $ItemModelBuilder
public "blockSprite"(nonNullSupplier0: $NonNullSupplier$$Type<$ItemLike>): $ItemModelBuilder
public "blockSprite"(nonNullSupplier0: $NonNullSupplier$$Type<$ItemLike>, resourceLocation1: $ResourceLocation$$Type): $ItemModelBuilder
public "blockWithInventoryModel"(nonNullSupplier0: $NonNullSupplier$$Type<$ItemLike>): $ItemModelBuilder
public "generated"(nonNullSupplier0: $NonNullSupplier$$Type<$ItemLike>): $ItemModelBuilder
public "generated"(nonNullSupplier0: $NonNullSupplier$$Type<$ItemLike>, ...resourceLocation1s: $ResourceLocation$$Type[]): $ItemModelBuilder
public "getSide"(): $LogicalSide
public "handheld"(nonNullSupplier0: $NonNullSupplier$$Type<$ItemLike>, resourceLocation1: $ResourceLocation$$Type): $ItemModelBuilder
public "handheld"(nonNullSupplier0: $NonNullSupplier$$Type<$ItemLike>): $ItemModelBuilder
public "itemTexture"(nonNullSupplier0: $NonNullSupplier$$Type<$ItemLike>): $ResourceLocation
public "modid"(nonNullSupplier0: $NonNullSupplier$$Type<$ItemLike>): string
public "name"(nonNullSupplier0: $NonNullSupplier$$Type<$ItemLike>): string
public "run"(cachedOutput0: $CachedOutput$$Type): $CompletableFuture<any>
public static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
get "side"(): $LogicalSide
}
}

declare module "com.tterrag.registrate.builders.BuilderCallback" {
import { $Registry } from "net.minecraft.core.Registry"
import { $NonNullSupplier$$Type } from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import { $Builder$$Type } from "com.tterrag.registrate.builders.Builder"
import { $RegistryEntry } from "com.tterrag.registrate.util.entry.RegistryEntry"
import { $NonNullFunction$$Type } from "com.tterrag.registrate.util.nullness.NonNullFunction"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $RegistryObject$$Type } from "net.minecraftforge.registries.RegistryObject"

export interface $BuilderCallback {
"accept"<R, T extends R>(string0: string, resourceKey1: $ResourceKey$$Type<$Registry<R>>, builder2: $Builder$$Type<R, T, any, any>, nonNullSupplier3: $NonNullSupplier$$Type<T>): $RegistryEntry<T>
"accept"<R, T extends R>(string0: string, resourceKey1: $ResourceKey$$Type<$Registry<R>>, builder2: $Builder$$Type<R, T, any, any>, nonNullSupplier3: $NonNullSupplier$$Type<T>, nonNullFunction4: $NonNullFunction$$Type<$RegistryObject$$Type<T>, $RegistryEntry<T>>): $RegistryEntry<T>
}

export namespace $BuilderCallback {
const probejs$$marker: never
}
export abstract class $BuilderCallback$$Static implements $BuilderCallback {
}
}

declare module "com.tterrag.registrate.builders.EnchantmentBuilder" {
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentBuilder$EnchantmentFactory$$Type } from "com.tterrag.registrate.builders.EnchantmentBuilder$EnchantmentFactory"
import { $Enchantment$Rarity$$Type } from "net.minecraft.world.item.enchantment.Enchantment$Rarity"
import { $Builder, $Builder$$Type } from "com.tterrag.registrate.builders.Builder"
import { $BuilderCallback$$Type } from "com.tterrag.registrate.builders.BuilderCallback"
import { $ProviderType$$Type } from "com.tterrag.registrate.providers.ProviderType"
import { $NonNullConsumer$$Type } from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Registry } from "net.minecraft.core.Registry"
import { $AbstractRegistrate$$Type } from "com.tterrag.registrate.AbstractRegistrate"
import { $NonNullBiConsumer$$Type } from "com.tterrag.registrate.util.nullness.NonNullBiConsumer"
import { $AbstractBuilder } from "com.tterrag.registrate.builders.AbstractBuilder"
import { $NonNullSupplier, $NonNullSupplier$$Type } from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $RegistryEntry } from "com.tterrag.registrate.util.entry.RegistryEntry"
import { $NonNullFunction$$Type } from "com.tterrag.registrate.util.nullness.NonNullFunction"
import { $DataGenContext$$Type } from "com.tterrag.registrate.providers.DataGenContext"
import { $RegistrateProvider, $RegistrateProvider$$Type } from "com.tterrag.registrate.providers.RegistrateProvider"

export class $EnchantmentBuilder<T extends $Enchantment = $Enchantment, P = any> extends $AbstractBuilder<$Enchantment, T, P, $EnchantmentBuilder<T, P>> {
public "addArmorSlots"(): $EnchantmentBuilder<T, P>
public "addMiscData"<D extends $RegistrateProvider>(providerType0: $ProviderType$$Type<D>, nonNullConsumer1: $NonNullConsumer$$Type<D>): $EnchantmentBuilder<T, P>
public "addSlots"(...equipmentSlot0s: $EquipmentSlot$$Type[]): $EnchantmentBuilder<T, P>
public "build"(): P
public static "create"<T extends $Enchantment, P>(abstractRegistrate0: $AbstractRegistrate$$Type<any>, p1: P, string2: string, builderCallback3: $BuilderCallback$$Type, enchantmentCategory4: $EnchantmentCategory$$Type, enchantmentFactory5: $EnchantmentBuilder$EnchantmentFactory$$Type<T>): $EnchantmentBuilder<T, P>
public "defaultLang"(): $EnchantmentBuilder<T, P>
public "get"(): $RegistryEntry<T>
public "getEntry"(): T
public "lang"(string0: string): $EnchantmentBuilder<T, P>
public static "lazy"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public "lazy"(): $NonNullSupplier<$RegistryEntry<T>>
public static "of"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public static "of"<T>(supplier0: $Supplier$$Type<T>, nonNullSupplier1: $NonNullSupplier$$Type<string>): $NonNullSupplier<T>
public "onRegister"(nonNullConsumer0: $NonNullConsumer$$Type<T>): $EnchantmentBuilder<T, P>
public "onRegisterAfter"<OR>(resourceKey0: $ResourceKey$$Type<$Registry<OR>>, nonNullConsumer1: $NonNullConsumer$$Type<T>): $EnchantmentBuilder<T, P>
public "rarity"(rarity0: $Enchantment$Rarity$$Type): $EnchantmentBuilder<T, P>
public "setData"<D extends $RegistrateProvider>(providerType0: $ProviderType$$Type<D>, nonNullBiConsumer1: $NonNullBiConsumer$$Type<$DataGenContext$$Type<$Enchantment$$Type, T>, D>): $EnchantmentBuilder<T, P>
public "transform"<R2, T2 extends R2, P2, S2 extends $Builder<R2, T2, P2, S2>>(nonNullFunction0: $NonNullFunction$$Type<$EnchantmentBuilder$$Type<T, P>, S2>): S2
get "entry"(): T
}
}

declare module "com.tterrag.registrate.builders.EnchantmentBuilder$EnchantmentFactory" {
import { $Enchantment } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Enchantment$Rarity$$Type } from "net.minecraft.world.item.enchantment.Enchantment$Rarity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"

export interface $EnchantmentBuilder$EnchantmentFactory<T extends $Enchantment = $Enchantment> {
"create"(rarity0: $Enchantment$Rarity$$Type, enchantmentCategory1: $EnchantmentCategory$$Type, ...equipmentSlot2s: $EquipmentSlot$$Type[]): T
}

export namespace $EnchantmentBuilder$EnchantmentFactory {
const probejs$$marker: never
}
export abstract class $EnchantmentBuilder$EnchantmentFactory$$Static<T extends $Enchantment = $Enchantment> implements $EnchantmentBuilder$EnchantmentFactory<T> {
}
}

declare module "com.tterrag.registrate.providers.loot.RegistrateLootTableProvider" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $RegistrateLootTables, $RegistrateLootTables$$Type } from "com.tterrag.registrate.providers.loot.RegistrateLootTables"
import { $LootTableProvider } from "net.minecraft.data.loot.LootTableProvider"
import { $LootTable$Builder$$Type } from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $NonNullConsumer$$Type } from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import { $CachedOutput$$Type } from "net.minecraft.data.CachedOutput"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $RegistrateLootTableProvider$LootType$$Type } from "com.tterrag.registrate.providers.loot.RegistrateLootTableProvider$LootType"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $AbstractRegistrate$$Type } from "com.tterrag.registrate.AbstractRegistrate"
import { $PackOutput$$Type } from "net.minecraft.data.PackOutput"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $LootContextParamSet$$Type } from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"
import { $Path$$Type } from "java.nio.file.Path"
import { $RegistrateProvider } from "com.tterrag.registrate.providers.RegistrateProvider"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export class $RegistrateLootTableProvider extends $LootTableProvider implements $RegistrateProvider {
constructor(abstractRegistrate0: $AbstractRegistrate$$Type<any>, packOutput1: $PackOutput$$Type)

public "addLootAction"(lootContextParamSet0: $LootContextParamSet$$Type, consumer1: $Consumer$$Type<$BiConsumer$$Type<$ResourceLocation$$Type, $LootTable$Builder$$Type>>): void
public "addLootAction"<T extends $RegistrateLootTables>(lootType0: $RegistrateLootTableProvider$LootType$$Type<T>, nonNullConsumer1: $NonNullConsumer$$Type<T>): void
public "getSide"(): $LogicalSide
public static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
get "side"(): $LogicalSide
}
}

declare module "com.tterrag.registrate.builders.BlockBuilder" {
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $Item$Properties$$Type } from "net.minecraft.world.item.Item$Properties"
import { $ProviderType$$Type } from "com.tterrag.registrate.providers.ProviderType"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $RegistrateBlockLootTables$$Type } from "com.tterrag.registrate.providers.loot.RegistrateBlockLootTables"
import { $ItemBuilder } from "com.tterrag.registrate.builders.ItemBuilder"
import { $Registry } from "net.minecraft.core.Registry"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $RegistrateRecipeProvider$$Type } from "com.tterrag.registrate.providers.RegistrateRecipeProvider"
import { $BlockEntityBuilder$BlockEntityFactory$$Type } from "com.tterrag.registrate.builders.BlockEntityBuilder$BlockEntityFactory"
import { $NonNullSupplier, $NonNullSupplier$$Type } from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import { $NonNullFunction$$Type } from "com.tterrag.registrate.util.nullness.NonNullFunction"
import { $DataGenContext$$Type } from "com.tterrag.registrate.providers.DataGenContext"
import { $BlockColor } from "net.minecraft.client.color.block.BlockColor"
import { $BlockItem } from "net.minecraft.world.item.BlockItem"
import { $Builder, $Builder$$Type } from "com.tterrag.registrate.builders.Builder"
import { $RenderType } from "net.minecraft.client.renderer.RenderType"
import { $BuilderCallback$$Type } from "com.tterrag.registrate.builders.BuilderCallback"
import { $RegistrateBlockstateProvider$$Type } from "com.tterrag.registrate.providers.RegistrateBlockstateProvider"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $NonNullConsumer$$Type } from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $AbstractRegistrate$$Type } from "com.tterrag.registrate.AbstractRegistrate"
import { $NonNullBiConsumer$$Type } from "com.tterrag.registrate.util.nullness.NonNullBiConsumer"
import { $AbstractBuilder } from "com.tterrag.registrate.builders.AbstractBuilder"
import { $NonNullUnaryOperator$$Type } from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import { $BlockEntityBuilder } from "com.tterrag.registrate.builders.BlockEntityBuilder"
import { $RegistryEntry } from "com.tterrag.registrate.util.entry.RegistryEntry"
import { $NonNullBiFunction$$Type } from "com.tterrag.registrate.util.nullness.NonNullBiFunction"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $RegistrateProvider, $RegistrateProvider$$Type } from "com.tterrag.registrate.providers.RegistrateProvider"

export class $BlockBuilder<T extends $Block = $Block, P = any> extends $AbstractBuilder<$Block, T, P, $BlockBuilder<T, P>> {
/** @deprecated */
public "addLayer"(supplier0: $Supplier$$Type<$Supplier<$RenderType>>): $BlockBuilder<T, P>
public "addMiscData"<D extends $RegistrateProvider>(providerType0: $ProviderType$$Type<D>, nonNullConsumer1: $NonNullConsumer$$Type<D>): $BlockBuilder<T, P>
public "blockEntity"<BE extends $BlockEntity>(blockEntityFactory0: $BlockEntityBuilder$BlockEntityFactory$$Type<BE>): $BlockEntityBuilder<BE, $BlockBuilder<T, P>>
public "blockstate"(nonNullBiConsumer0: $NonNullBiConsumer$$Type<$DataGenContext$$Type<$Block$$Type, T>, $RegistrateBlockstateProvider$$Type>): $BlockBuilder<T, P>
public "build"(): P
public "color"(nonNullSupplier0: $NonNullSupplier$$Type<$Supplier<$BlockColor>>): $BlockBuilder<T, P>
public static "create"<T extends $Block, P>(abstractRegistrate0: $AbstractRegistrate$$Type<any>, p1: P, string2: string, builderCallback3: $BuilderCallback$$Type, nonNullFunction4: $NonNullFunction$$Type<$BlockBehaviour$Properties$$Type, T>): $BlockBuilder<T, P>
public "defaultBlockstate"(): $BlockBuilder<T, P>
public "defaultLang"(): $BlockBuilder<T, P>
public "defaultLoot"(): $BlockBuilder<T, P>
public "get"(): $RegistryEntry<T>
public "getEntry"(): T
public "initialProperties"(nonNullSupplier0: $NonNullSupplier$$Type<$Block>): $BlockBuilder<T, P>
public "item"<I extends $Item>(nonNullBiFunction0: $NonNullBiFunction$$Type<T, $Item$Properties$$Type, I>): $ItemBuilder<I, $BlockBuilder<T, P>>
public "item"(): $ItemBuilder<$BlockItem, $BlockBuilder<T, P>>
public "lang"(string0: string): $BlockBuilder<T, P>
public static "lazy"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public "lazy"(): $NonNullSupplier<$RegistryEntry<T>>
public "loot"(nonNullBiConsumer0: $NonNullBiConsumer$$Type<$RegistrateBlockLootTables$$Type, T>): $BlockBuilder<T, P>
public static "of"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public static "of"<T>(supplier0: $Supplier$$Type<T>, nonNullSupplier1: $NonNullSupplier$$Type<string>): $NonNullSupplier<T>
public "onRegister"(nonNullConsumer0: $NonNullConsumer$$Type<T>): $BlockBuilder<T, P>
public "onRegisterAfter"<OR>(resourceKey0: $ResourceKey$$Type<$Registry<OR>>, nonNullConsumer1: $NonNullConsumer$$Type<T>): $BlockBuilder<T, P>
public "properties"(nonNullUnaryOperator0: $NonNullUnaryOperator$$Type<$BlockBehaviour$Properties$$Type>): $BlockBuilder<T, P>
public "recipe"(nonNullBiConsumer0: $NonNullBiConsumer$$Type<$DataGenContext$$Type<$Block$$Type, T>, $RegistrateRecipeProvider$$Type>): $BlockBuilder<T, P>
public "setData"<D extends $RegistrateProvider>(providerType0: $ProviderType$$Type<D>, nonNullBiConsumer1: $NonNullBiConsumer$$Type<$DataGenContext$$Type<$Block$$Type, T>, D>): $BlockBuilder<T, P>
public "simpleBlockEntity"<BE extends $BlockEntity>(blockEntityFactory0: $BlockEntityBuilder$BlockEntityFactory$$Type<BE>): $BlockBuilder<T, P>
public "simpleItem"(): $BlockBuilder<T, P>
public "tag"(...tagKey0s: $TagKey$$Type<$Block$$Type>[]): $BlockBuilder<T, P>
public "transform"<R2, T2 extends R2, P2, S2 extends $Builder<R2, T2, P2, S2>>(nonNullFunction0: $NonNullFunction$$Type<$BlockBuilder$$Type<T, P>, S2>): S2
get "entry"(): T
}
}

declare module "com.tterrag.registrate.util.nullness.NonNullUnaryOperator" {
import { $NonNullFunction, $NonNullFunction$$Type } from "com.tterrag.registrate.util.nullness.NonNullFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"

export interface $NonNullUnaryOperator<T = any> extends $NonNullFunction<T, T> {
"andThen"<V>(nonNullUnaryOperator0: $NonNullUnaryOperator$$Type<T>): $NonNullUnaryOperator<T>
"andThen"<V>(nonNullFunction0: $NonNullFunction$$Type<T, V>): $NonNullFunction<T, V>
"andThen"<V>(function0: $Function$$Type<T, V>): $Function<T, V>
"apply"(t0: T): T
"compose"<V>(function0: $Function$$Type<V, T>): $Function<V, T>
}

export namespace $NonNullUnaryOperator {
function identity<T>(): $NonNullUnaryOperator<T>
}
export abstract class $NonNullUnaryOperator$$Static<T = any> implements $NonNullUnaryOperator<T> {
static "identity"<T>(): $NonNullUnaryOperator<T>
}
}

declare module "com.tterrag.registrate.providers.loot.RegistrateBlockLootTables" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ValidationContext$$Type } from "net.minecraft.world.level.storage.loot.ValidationContext"
import { $RegistrateLootTables } from "com.tterrag.registrate.providers.loot.RegistrateLootTables"
import { $LootTable$Builder, $LootTable$Builder$$Type } from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import { $VanillaBlockLoot } from "net.minecraft.data.loot.packs.VanillaBlockLoot"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $AbstractRegistrate$$Type } from "com.tterrag.registrate.AbstractRegistrate"
import { $FunctionUserBuilder, $FunctionUserBuilder$$Type } from "net.minecraft.world.level.storage.loot.functions.FunctionUserBuilder"
import { $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $Map$$Type } from "java.util.Map"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $LootTable$$Type } from "net.minecraft.world.level.storage.loot.LootTable"
import { $LootItemCondition$Builder$$Type } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder"
import { $LootPoolEntryContainer$Builder$$Type } from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer$Builder"
import { $ConditionUserBuilder, $ConditionUserBuilder$$Type } from "net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder"

export class $RegistrateBlockLootTables extends $VanillaBlockLoot implements $RegistrateLootTables {
constructor(abstractRegistrate0: $AbstractRegistrate$$Type<any>, consumer1: $Consumer$$Type<$RegistrateBlockLootTables$$Type>)

public "applyExplosionCondition"<T extends $ConditionUserBuilder<T>>(itemLike0: $ItemLike$$Type, conditionUserBuilder1: $ConditionUserBuilder$$Type<T>): T
public "applyExplosionDecay"<T extends $FunctionUserBuilder<T>>(itemLike0: $ItemLike$$Type, functionUserBuilder1: $FunctionUserBuilder$$Type<T>): T
public static "createBeeHiveDrop"(block0: $Block$$Type): $LootTable$Builder
public static "createBeeNestDrop"(block0: $Block$$Type): $LootTable$Builder
public static "createCandleCakeDrops"(block0: $Block$$Type): $LootTable$Builder
public static "createCaveVinesDrop"(block0: $Block$$Type): $LootTable$Builder
public static "createDoublePlantShearsDrop"(block0: $Block$$Type): $LootTable$Builder
public static "createSelfDropDispatchTable"(block0: $Block$$Type, builder1: $LootItemCondition$Builder$$Type, builder2: $LootPoolEntryContainer$Builder$$Type<any>): $LootTable$Builder
public static "createShearsDispatchTable"(block0: $Block$$Type, builder1: $LootPoolEntryContainer$Builder$$Type<any>): $LootTable$Builder
public static "createShearsOnlyDrop"(itemLike0: $ItemLike$$Type): $LootTable$Builder
public static "createSilkTouchDispatchTable"(block0: $Block$$Type, builder1: $LootPoolEntryContainer$Builder$$Type<any>): $LootTable$Builder
public static "createSilkTouchOnlyTable"(itemLike0: $ItemLike$$Type): $LootTable$Builder
public static "createSilkTouchOrShearsDispatchTable"(block0: $Block$$Type, builder1: $LootPoolEntryContainer$Builder$$Type<any>): $LootTable$Builder
public "generate"(biConsumer0: $BiConsumer$$Type<$ResourceLocation$$Type, $LootTable$Builder$$Type>): void
public "validate"(map0: $Map$$Type<$ResourceLocation$$Type, $LootTable$$Type>, validationContext1: $ValidationContext$$Type): void
}
}

declare module "com.tterrag.registrate.util.nullness.NonNullBiConsumer" {
import { $BiConsumer, $BiConsumer$$Type } from "java.util.function.BiConsumer"

export interface $NonNullBiConsumer<T = any, U = any> extends $BiConsumer<T, U> {
"accept"(t0: T, u1: U): void
"andThen"(biConsumer0: $BiConsumer$$Type<T, U>): $BiConsumer<T, U>
}

export namespace $NonNullBiConsumer {
function noop<T, U>(): $NonNullBiConsumer<T, U>
}
export abstract class $NonNullBiConsumer$$Static<T = any, U = any> implements $NonNullBiConsumer<T, U> {
static "noop"<T, U>(): $NonNullBiConsumer<T, U>
}
}

declare module "com.tterrag.registrate.providers.DataGenContext" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Registry } from "net.minecraft.core.Registry"
import { $NonNullSupplier, $NonNullSupplier$$Type } from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import { $Builder$$Type } from "com.tterrag.registrate.builders.Builder"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $DataGenContext<R = any, E extends R = R> implements $NonNullSupplier<E> {
constructor(nonNullSupplier0: $NonNullSupplier$$Type<E>, string1: string, resourceLocation2: $ResourceLocation$$Type)

public static "from"<R, E extends R>(builder0: $Builder$$Type<R, E, any, any>): $DataGenContext<R, E>
/** @deprecated */
public static "from"<R, E extends R>(builder0: $Builder$$Type<R, E, any, any>, resourceKey1: $ResourceKey$$Type<$Registry<R>>): $DataGenContext<R, E>
public "get"(): E
public "getEntry"(): E
public "getId"(): $ResourceLocation
public "getName"(): string
public "lazy"(): $NonNullSupplier<E>
public static "lazy"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public static "of"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public static "of"<T>(supplier0: $Supplier$$Type<T>, nonNullSupplier1: $NonNullSupplier$$Type<string>): $NonNullSupplier<T>
get "entry"(): E
get "id"(): $ResourceLocation
get "name"(): string
}
}

declare module "com.tterrag.registrate.providers.RegistrateBlockstateProvider" {
import { $MultiPartBlockStateBuilder } from "net.minecraftforge.client.model.generators.MultiPartBlockStateBuilder"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ExistingFileHelper$$Type } from "net.minecraftforge.common.data.ExistingFileHelper"
import { $CachedOutput$$Type } from "net.minecraft.data.CachedOutput"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $AbstractRegistrate$$Type } from "com.tterrag.registrate.AbstractRegistrate"
import { $PackOutput$$Type } from "net.minecraft.data.PackOutput"
import { $VariantBlockStateBuilder } from "net.minecraftforge.client.model.generators.VariantBlockStateBuilder"
import { $BlockStateProvider } from "net.minecraftforge.client.model.generators.BlockStateProvider"
import { $Optional } from "java.util.Optional"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Path$$Type } from "java.nio.file.Path"
import { $RegistrateProvider } from "com.tterrag.registrate.providers.RegistrateProvider"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export class $RegistrateBlockstateProvider extends $BlockStateProvider implements $RegistrateProvider {
constructor(abstractRegistrate0: $AbstractRegistrate$$Type<any>, packOutput1: $PackOutput$$Type, existingFileHelper2: $ExistingFileHelper$$Type)

public "getExistingMultipartBuilder"(block0: $Block$$Type): $Optional<$MultiPartBlockStateBuilder>
public "getExistingVariantBuilder"(block0: $Block$$Type): $Optional<$VariantBlockStateBuilder>
public "getSide"(): $LogicalSide
public static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
get "side"(): $LogicalSide
}
}

declare module "com.tterrag.registrate.util.nullness.NonNullFunction" {
import { $Function, $Function$$Type } from "java.util.function.Function"

export interface $NonNullFunction<T = any, R = any> extends $Function<T, R> {
"andThen"<V>(nonNullFunction0: $NonNullFunction$$Type<R, V>): $NonNullFunction<T, V>
"andThen"<V>(function0: $Function$$Type<R, V>): $Function<T, V>
"apply"(t0: T): R
"compose"<V>(function0: $Function$$Type<V, T>): $Function<V, R>
}

export namespace $NonNullFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $NonNullFunction$$Static<T = any, R = any> implements $NonNullFunction<T, R> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "com.tterrag.registrate.builders.Builder" {
import { $ProviderType$$Type } from "com.tterrag.registrate.providers.ProviderType"
import { $NonNullConsumer$$Type } from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Registry } from "net.minecraft.core.Registry"
import { $AbstractRegistrate } from "com.tterrag.registrate.AbstractRegistrate"
import { $NonNullBiConsumer$$Type } from "com.tterrag.registrate.util.nullness.NonNullBiConsumer"
import { $NonNullSupplier, $NonNullSupplier$$Type } from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import { $RegistryEntry } from "com.tterrag.registrate.util.entry.RegistryEntry"
import { $NonNullFunction$$Type } from "com.tterrag.registrate.util.nullness.NonNullFunction"
import { $DataGenContext$$Type } from "com.tterrag.registrate.providers.DataGenContext"
import { $RegistrateProvider, $RegistrateProvider$$Type } from "com.tterrag.registrate.providers.RegistrateProvider"

export interface $Builder<R = any, T extends R = R, P = any, S extends $Builder<R, T, P, S> = $Builder<R, T, P, S>> extends $NonNullSupplier<$RegistryEntry<T>> {
"addMiscData"<D extends $RegistrateProvider>(providerType0: $ProviderType$$Type<D>, nonNullConsumer1: $NonNullConsumer$$Type<D>): S
"asSupplier"(): $NonNullSupplier<T>
"build"(): P
"get"(): $RegistryEntry<T>
"getEntry"(): T
"getName"(): string
"getOwner"(): $AbstractRegistrate<any>
"getParent"(): P
"getRegistryKey"(): $ResourceKey<$Registry<R>>
"lazy"(): $NonNullSupplier<$RegistryEntry<T>>
"onRegister"(nonNullConsumer0: $NonNullConsumer$$Type<T>): S
"onRegisterAfter"<OR>(resourceKey0: $ResourceKey$$Type<$Registry<OR>>, nonNullConsumer1: $NonNullConsumer$$Type<T>): S
"register"(): $RegistryEntry<T>
"setData"<D extends $RegistrateProvider>(providerType0: $ProviderType$$Type<D>, nonNullBiConsumer1: $NonNullBiConsumer$$Type<$DataGenContext$$Type<R, T>, D>): S
"transform"<R2, T2 extends R2, P2, S2 extends $Builder<R2, T2, P2, S2>>(nonNullFunction0: $NonNullFunction$$Type<S, S2>): S2
get "entry"(): T
get "name"(): string
get "owner"(): $AbstractRegistrate<any>
get "parent"(): P
get "registryKey"(): $ResourceKey<$Registry<R>>
}

export namespace $Builder {
function lazy<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
function of<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
function of<T>(supplier0: $Supplier$$Type<T>, nonNullSupplier1: $NonNullSupplier$$Type<string>): $NonNullSupplier<T>
}
export abstract class $Builder$$Static<R = any, T extends R = R, P = any, S extends $Builder<R, T, P, S> = $Builder<R, T, P, S>> implements $Builder<R, T, P, S> {
static "lazy"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
static "of"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
static "of"<T>(supplier0: $Supplier$$Type<T>, nonNullSupplier1: $NonNullSupplier$$Type<string>): $NonNullSupplier<T>
}
}

