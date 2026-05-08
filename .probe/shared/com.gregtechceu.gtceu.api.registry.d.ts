declare module "com.gregtechceu.gtceu.api.registry.registrate.GTBlockBuilder" {
import { $BlockBuilder, $BlockBuilder$$Type } from "com.tterrag.registrate.builders.BlockBuilder"
import { $ProviderType$$Type } from "com.tterrag.registrate.providers.ProviderType"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $RegistrateBlockLootTables$$Type } from "com.tterrag.registrate.providers.loot.RegistrateBlockLootTables"
import { $Registry } from "net.minecraft.core.Registry"
import { $BlockEntityBuilder$BlockEntityFactory$$Type } from "com.tterrag.registrate.builders.BlockEntityBuilder$BlockEntityFactory"
import { $NonNullSupplier, $NonNullSupplier$$Type } from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import { $NonNullFunction$$Type } from "com.tterrag.registrate.util.nullness.NonNullFunction"
import { $DataGenContext$$Type } from "com.tterrag.registrate.providers.DataGenContext"
import { $GTBlockstateProvider$$Type } from "com.gregtechceu.gtceu.api.registry.registrate.provider.GTBlockstateProvider"
import { $BlockColor } from "net.minecraft.client.color.block.BlockColor"
import { $Builder, $Builder$$Type } from "com.tterrag.registrate.builders.Builder"
import { $RenderType } from "net.minecraft.client.renderer.RenderType"
import { $BuilderCallback$$Type } from "com.tterrag.registrate.builders.BuilderCallback"
import { $RegistrateBlockstateProvider$$Type } from "com.tterrag.registrate.providers.RegistrateBlockstateProvider"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $NonNullConsumer$$Type } from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $AbstractRegistrate$$Type } from "com.tterrag.registrate.AbstractRegistrate"
import { $NonNullBiConsumer$$Type } from "com.tterrag.registrate.util.nullness.NonNullBiConsumer"
import { $NonNullUnaryOperator$$Type } from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import { $BlockEntityBuilder } from "com.tterrag.registrate.builders.BlockEntityBuilder"
import { $RegistryEntry } from "com.tterrag.registrate.util.entry.RegistryEntry"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $RegistrateProvider, $RegistrateProvider$$Type } from "com.tterrag.registrate.providers.RegistrateProvider"

export class $GTBlockBuilder<T extends $Block = $Block, P = any> extends $BlockBuilder<T, P> {
public "addLayer"(supplier0: $Supplier$$Type<$Supplier<$RenderType>>): $GTBlockBuilder<T, P>
public "addMiscData"<D extends $RegistrateProvider>(providerType0: $ProviderType$$Type<D>, nonNullConsumer1: $NonNullConsumer$$Type<D>): $BlockBuilder<T, P>
public "blockEntity"<BE extends $BlockEntity>(blockEntityFactory0: $BlockEntityBuilder$BlockEntityFactory$$Type<BE>): $BlockEntityBuilder<BE, $BlockBuilder<T, P>>
public "blockstate"(nonNullBiConsumer0: $NonNullBiConsumer$$Type<$DataGenContext$$Type<$Block$$Type, T>, $RegistrateBlockstateProvider$$Type>): $GTBlockBuilder<T, P>
public "build"(): P
public "color"(nonNullSupplier0: $NonNullSupplier$$Type<$Supplier<$BlockColor>>): $GTBlockBuilder<T, P>
public static "create"<T extends $Block, P>(abstractRegistrate0: $AbstractRegistrate$$Type<any>, p1: P, string2: string, builderCallback3: $BuilderCallback$$Type, nonNullFunction4: $NonNullFunction$$Type<$BlockBehaviour$Properties$$Type, T>): $GTBlockBuilder<T, P>
public "defaultBlockstate"(): $GTBlockBuilder<T, P>
public "defaultLang"(): $GTBlockBuilder<T, P>
public "exBlockstate"(nonNullBiConsumer0: $NonNullBiConsumer$$Type<$DataGenContext$$Type<$Block$$Type, $Block$$Type>, $GTBlockstateProvider$$Type>): $GTBlockBuilder<T, P>
public "get"(): $RegistryEntry<T>
public "getEntry"(): T
public "gtBlockstate"(nonNullBiConsumer0: $NonNullBiConsumer$$Type<$DataGenContext$$Type<$Block$$Type, T>, $GTBlockstateProvider$$Type>): $GTBlockBuilder<T, P>
public "initialProperties"(nonNullSupplier0: $NonNullSupplier$$Type<$Block>): $GTBlockBuilder<T, P>
public static "lazy"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public "lazy"(): $NonNullSupplier<$RegistryEntry<T>>
public "loot"(nonNullBiConsumer0: $NonNullBiConsumer$$Type<$RegistrateBlockLootTables$$Type, T>): $GTBlockBuilder<T, P>
public static "of"<T>(supplier0: $Supplier$$Type<T>): $NonNullSupplier<T>
public static "of"<T>(supplier0: $Supplier$$Type<T>, nonNullSupplier1: $NonNullSupplier$$Type<string>): $NonNullSupplier<T>
public "onRegister"(nonNullConsumer0: $NonNullConsumer$$Type<T>): $BlockBuilder<T, P>
public "onRegisterAfter"<OR>(resourceKey0: $ResourceKey$$Type<$Registry<OR>>, nonNullConsumer1: $NonNullConsumer$$Type<T>): $BlockBuilder<T, P>
public "properties"(nonNullUnaryOperator0: $NonNullUnaryOperator$$Type<$BlockBehaviour$Properties$$Type>): $GTBlockBuilder<T, P>
public "setData"<D extends $RegistrateProvider>(providerType0: $ProviderType$$Type<D>, nonNullBiConsumer1: $NonNullBiConsumer$$Type<$DataGenContext$$Type<$Block$$Type, T>, D>): $GTBlockBuilder<T, P>
public "setDataGeneric"<D extends $RegistrateProvider>(providerType0: $ProviderType$$Type<D>, nonNullBiConsumer1: $NonNullBiConsumer$$Type<$DataGenContext$$Type<$Block$$Type, $Block$$Type>, D>): $GTBlockBuilder<T, P>
public "simpleBlockEntity"<BE extends $BlockEntity>(blockEntityFactory0: $BlockEntityBuilder$BlockEntityFactory$$Type<BE>): $GTBlockBuilder<T, P>
public "simpleItem"(): $GTBlockBuilder<T, P>
public "transform"<R2, T2 extends R2, P2, S2 extends $Builder<R2, T2, P2, S2>>(nonNullFunction0: $NonNullFunction$$Type<$BlockBuilder$$Type<T, P>, S2>): S2
get "entry"(): T
}
}

declare module "com.gregtechceu.gtceu.api.registry.GTRegistries" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $IGlobalLootModifier } from "net.minecraftforge.common.loot.IGlobalLootModifier"
import { $GTRecipeType } from "com.gregtechceu.gtceu.api.recipe.GTRecipeType"
import { $GTRegistry$String } from "com.gregtechceu.gtceu.api.registry.GTRegistry$String"
import { $DimensionMarker } from "com.gregtechceu.gtceu.api.data.DimensionMarker"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"
import { $Function } from "java.util.function.Function"
import { $GTRecipeCategory } from "com.gregtechceu.gtceu.api.recipe.category.GTRecipeCategory"
import { $IEventBus$$Type } from "net.minecraftforge.eventbus.api.IEventBus"
import { $Registry$$Type } from "net.minecraft.core.Registry"
import { $PlacementModifierType } from "net.minecraft.world.level.levelgen.placement.PlacementModifierType"
import { $BedrockFluidDefinition } from "com.gregtechceu.gtceu.api.data.worldgen.bedrockfluid.BedrockFluidDefinition"
import { $GTRegistry$RL } from "com.gregtechceu.gtceu.api.registry.GTRegistry$RL"
import { $TrunkPlacerType } from "net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacerType"
import { $GTRegistry } from "com.gregtechceu.gtceu.api.registry.GTRegistry"
import { $FluidIngredient } from "com.gregtechceu.gtceu.api.recipe.ingredient.FluidIngredient"
import { $ChanceLogic } from "com.gregtechceu.gtceu.api.recipe.chance.logic.ChanceLogic"
import { $GTOreDefinition } from "com.gregtechceu.gtceu.api.data.worldgen.GTOreDefinition"
import { $RegistryAccess, $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $CoverDefinition } from "com.gregtechceu.gtceu.api.cover.CoverDefinition"
import { $DeferredRegister } from "net.minecraftforge.registries.DeferredRegister"
import { $RecipeCapability } from "com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability"
import { $BedrockOreDefinition } from "com.gregtechceu.gtceu.api.data.worldgen.bedrockore.BedrockOreDefinition"
import { $Element } from "com.gregtechceu.gtceu.api.data.chemical.Element"
import { $Codec } from "com.mojang.serialization.Codec"
import { $MachineDefinition } from "com.gregtechceu.gtceu.api.machine.MachineDefinition"
import { $SoundEntry } from "com.gregtechceu.gtceu.api.sound.SoundEntry"
import { $RecipeConditionType } from "com.gregtechceu.gtceu.api.recipe.condition.RecipeConditionType"

export class $GTRegistries {
static readonly "BEDROCK_FLUID_DEFINITIONS": $GTRegistry$RL<$BedrockFluidDefinition>
static readonly "BEDROCK_ORE_DEFINITIONS": $GTRegistry$RL<$BedrockOreDefinition>
static readonly "CHANCE_LOGICS": $GTRegistry$String<$ChanceLogic>
static readonly "COVERS": $GTRegistry$RL<$CoverDefinition>
static readonly "DIMENSION_MARKERS": $GTRegistry$RL<$DimensionMarker>
static readonly "ELEMENTS": $GTRegistry$String<$Element>
static readonly "FLUID_SERIALIZERS": $GTRegistry<string, $Function<$FriendlyByteBuf, $FluidIngredient>>
static readonly "GLOBAL_LOOT_MODIFIES": $DeferredRegister<$Codec<$IGlobalLootModifier>>
static readonly "MACHINES": $GTRegistry$RL<$MachineDefinition>
static readonly "ORE_VEINS": $GTRegistry$RL<$GTOreDefinition>
static readonly "PLACEMENT_MODIFIER": $DeferredRegister<$PlacementModifierType<any>>
static readonly "RECIPE_CAPABILITIES": $GTRegistry$String<$RecipeCapability<any>>
static readonly "RECIPE_CATEGORIES": $GTRegistry$RL<$GTRecipeCategory>
static readonly "RECIPE_CONDITIONS": $GTRegistry$String<$RecipeConditionType<any>>
static readonly "RECIPE_TYPES": $GTRegistry$RL<$GTRecipeType>
static readonly "SOUNDS": $GTRegistry$RL<$SoundEntry>
static readonly "TRUNK_PLACER_TYPE": $DeferredRegister<$TrunkPlacerType<any>>

constructor()

public static "builtinRegistry"(): $RegistryAccess
public static "init"(iEventBus0: $IEventBus$$Type): void
public static "register"<V, T extends V>(registry0: $Registry$$Type<V>, resourceLocation1: $ResourceLocation$$Type, t2: T): T
public static "updateFrozenRegistry"(registryAccess0: $RegistryAccess$$Type): void
}
}

declare module "com.gregtechceu.gtceu.api.registry.registrate.GTRegistrate" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $MetaMachineItem } from "com.gregtechceu.gtceu.api.item.MetaMachineItem"
import { $CreativeModeTab, $CreativeModeTab$$Type } from "net.minecraft.world.item.CreativeModeTab"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Item$Properties$$Type } from "net.minecraft.world.item.Item$Properties"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $CreativeModeTab$Builder$$Type } from "net.minecraft.world.item.CreativeModeTab$Builder"
import { $NonNullFunction$$Type } from "com.tterrag.registrate.util.nullness.NonNullFunction"
import { $MultiblockMachineDefinition, $MultiblockMachineDefinition$$Type } from "com.gregtechceu.gtceu.api.machine.MultiblockMachineDefinition"
import { $MultiblockMachineBuilder } from "com.gregtechceu.gtceu.api.registry.registrate.MultiblockMachineBuilder"
import { $IMachineBlock, $IMachineBlock$$Type } from "com.gregtechceu.gtceu.api.block.IMachineBlock"
import { $MachineBuilder } from "com.gregtechceu.gtceu.api.registry.registrate.MachineBuilder"
import { $MetaMachine } from "com.gregtechceu.gtceu.api.machine.MetaMachine"
import { $TriFunction$$Type } from "org.apache.commons.lang3.function.TriFunction"
import { $GTBlockBuilder } from "com.gregtechceu.gtceu.api.registry.registrate.GTBlockBuilder"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $AbstractRegistrate } from "com.tterrag.registrate.AbstractRegistrate"
import { $SoundEntryBuilder } from "com.gregtechceu.gtceu.api.registry.registrate.SoundEntryBuilder"
import { $IGTFluidBuilder } from "com.gregtechceu.gtceu.api.registry.registrate.IGTFluidBuilder"
import { $MultiblockControllerMachine } from "com.gregtechceu.gtceu.api.machine.multiblock.MultiblockControllerMachine"
import { $MachineDefinition, $MachineDefinition$$Type } from "com.gregtechceu.gtceu.api.machine.MachineDefinition"
import { $NoConfigBuilder } from "com.tterrag.registrate.builders.NoConfigBuilder"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $IMachineBlockEntity, $IMachineBlockEntity$$Type } from "com.gregtechceu.gtceu.api.machine.IMachineBlockEntity"
import { $RegistryEntry, $RegistryEntry$$Type } from "com.tterrag.registrate.util.entry.RegistryEntry"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"

export class $GTRegistrate extends $AbstractRegistrate<$GTRegistrate> {
public "block"<T extends $Block, P>(p0: P, nonNullFunction1: $NonNullFunction$$Type<$BlockBehaviour$Properties$$Type, T>): $GTBlockBuilder<T, P>
public "block"<T extends $Block>(string0: string, nonNullFunction1: $NonNullFunction$$Type<$BlockBehaviour$Properties$$Type, T>): $GTBlockBuilder<T, $GTRegistrate>
public static "create"(string0: string): $GTRegistrate
public "createFluid"(string0: string, string1: string, material2: $Material$$Type, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type): $IGTFluidBuilder
public "creativeModeTab"(supplier0: $Supplier$$Type<$RegistryEntry<$CreativeModeTab>>): void
public "creativeModeTab"(): $RegistryEntry<$CreativeModeTab>
public "creativeModeTab"(registryEntry0: $RegistryEntry$$Type<$CreativeModeTab$$Type>): void
public "defaultCreativeTab"<P>(p0: P, string1: string, consumer2: $Consumer$$Type<$CreativeModeTab$Builder$$Type>): $NoConfigBuilder<$CreativeModeTab, $CreativeModeTab, P>
public static "fluid"(gTRegistrate0: $GTRegistrate$$Type, material1: $Material$$Type, string2: string, string3: string, resourceLocation4: $ResourceLocation$$Type, resourceLocation5: $ResourceLocation$$Type): $IGTFluidBuilder
public "isInCreativeTab"(registryEntry0: $RegistryEntry$$Type<any>, registryEntry1: $RegistryEntry$$Type<$CreativeModeTab$$Type>): boolean
public "machine"<DEFINITION extends $MachineDefinition>(string0: string, function1: $Function$$Type<$ResourceLocation$$Type, DEFINITION>, function2: $Function$$Type<$IMachineBlockEntity$$Type, $MetaMachine>, biFunction3: $BiFunction$$Type<$BlockBehaviour$Properties$$Type, DEFINITION, $IMachineBlock>, biFunction4: $BiFunction$$Type<$IMachineBlock$$Type, $Item$Properties$$Type, $MetaMachineItem>, triFunction5: $TriFunction$$Type<$BlockEntityType$$Type<any>, $BlockPos$$Type, $BlockState$$Type, $IMachineBlockEntity>): $MachineBuilder<DEFINITION, any>
public "machine"(string0: string, function1: $Function$$Type<$IMachineBlockEntity$$Type, $MetaMachine>): $MachineBuilder<$MachineDefinition, any>
public "multiblock"(string0: string, function1: $Function$$Type<$IMachineBlockEntity$$Type, $MultiblockControllerMachine>): $MultiblockMachineBuilder<$MultiblockMachineDefinition, any>
public "multiblock"(string0: string, function1: $Function$$Type<$IMachineBlockEntity$$Type, $MultiblockControllerMachine>, biFunction2: $BiFunction$$Type<$BlockBehaviour$Properties$$Type, $MultiblockMachineDefinition$$Type, $IMachineBlock>, biFunction3: $BiFunction$$Type<$IMachineBlock$$Type, $Item$Properties$$Type, $MetaMachineItem>, triFunction4: $TriFunction$$Type<$BlockEntityType$$Type<any>, $BlockPos$$Type, $BlockState$$Type, $IMachineBlockEntity>): $MultiblockMachineBuilder<$MultiblockMachineDefinition, any>
public "registerRegistrate"(): void
public "setCreativeTab"(registryEntry0: $RegistryEntry$$Type<any>, registryEntry1: $RegistryEntry$$Type<$CreativeModeTab$$Type>): void
public "sound"(string0: string): $SoundEntryBuilder
public "sound"(resourceLocation0: $ResourceLocation$$Type): $SoundEntryBuilder
}
}

declare module "com.gregtechceu.gtceu.api.registry.registrate.BuilderBase" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $DataJsonGenerator$$Type } from "dev.latvian.mods.kubejs.generator.DataJsonGenerator"
import { $LangEventJS$$Type } from "dev.latvian.mods.kubejs.client.LangEventJS"
import { $Supplier } from "java.util.function.Supplier"
import { $AssetJsonGenerator$$Type } from "dev.latvian.mods.kubejs.generator.AssetJsonGenerator"

export class $BuilderBase<T = any> implements $Supplier<T> {
constructor(resourceLocation0: $ResourceLocation$$Type)

public "generateAssetJsons"(assetJsonGenerator0: $AssetJsonGenerator$$Type): void
public "generateDataJsons"(dataJsonGenerator0: $DataJsonGenerator$$Type): void
public "generateLang"(langEventJS0: $LangEventJS$$Type): void
public "get"(): T
public "register"(): T
get "id"(): $ResourceLocation
set "id"(value: $ResourceLocation$$Type)
}
}

declare module "com.gregtechceu.gtceu.api.registry.registrate.SoundEntryBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $SoundEntry } from "com.gregtechceu.gtceu.api.sound.SoundEntry"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $SoundEntryBuilder {
constructor(resourceLocation0: $ResourceLocation$$Type)

public "addVariant"(resourceLocation0: $ResourceLocation$$Type): $SoundEntryBuilder
public "addVariant"(string0: string): $SoundEntryBuilder
public "attenuationDistance"(int0: integer): $SoundEntryBuilder
public "build"(): $SoundEntry
public "category"(soundSource0: $SoundSource$$Type): $SoundEntryBuilder
public "noSubtitle"(): $SoundEntryBuilder
public "playExisting"(soundEvent0: $SoundEvent$$Type, float1: float, float2: float): $SoundEntryBuilder
public "playExisting"(soundEvent0: $SoundEvent$$Type): $SoundEntryBuilder
public "playExisting"(supplier0: $Supplier$$Type<$SoundEvent>, float1: float, float2: float): $SoundEntryBuilder
public "subtitle"(string0: string): $SoundEntryBuilder
}
}

declare module "com.gregtechceu.gtceu.api.registry.registrate.IGTFluidBuilder" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $RegistryEntry } from "com.tterrag.registrate.util.entry.RegistryEntry"
import { $Fluid, $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $FluidState$$Type } from "com.gregtechceu.gtceu.api.fluids.FluidState"
import { $Supplier } from "java.util.function.Supplier"

export interface $IGTFluidBuilder {
"burnTime"(int0: integer): $IGTFluidBuilder
"color"(int0: integer): $IGTFluidBuilder
"density"(int0: integer): $IGTFluidBuilder
"hasBlock"(boolean0: boolean): $IGTFluidBuilder
"hasBucket"(boolean0: boolean): $IGTFluidBuilder
"luminance"(int0: integer): $IGTFluidBuilder
"onFluidRegister"(consumer0: $Consumer$$Type<$Fluid$$Type>): $IGTFluidBuilder
"register"(): $RegistryEntry<$Fluid>
"registerFluid"(): $Supplier<$Fluid>
"state"(fluidState0: $FluidState$$Type): $IGTFluidBuilder
"temperature"(int0: integer): $IGTFluidBuilder
"viscosity"(int0: integer): $IGTFluidBuilder
}

export namespace $IGTFluidBuilder {
const probejs$$marker: never
}
export abstract class $IGTFluidBuilder$$Static implements $IGTFluidBuilder {
}
}

declare module "com.gregtechceu.gtceu.api.registry.registrate.MachineBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $MetaMachineItem, $MetaMachineItem$$Type } from "com.gregtechceu.gtceu.api.item.MetaMachineItem"
import { $GTRegistrate$$Type } from "com.gregtechceu.gtceu.api.registry.registrate.GTRegistrate"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Item$Properties$$Type } from "net.minecraft.world.item.Item$Properties"
import { $BlockBuilder$$Type } from "com.tterrag.registrate.builders.BlockBuilder"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $BooleanSupplier$$Type } from "java.util.function.BooleanSupplier"
import { $GTRecipe, $GTRecipe$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipe"
import { $ItemBuilder$$Type } from "com.tterrag.registrate.builders.ItemBuilder"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $Map, $Map$$Type } from "java.util.Map"
import { $GTBlockstateProvider, $GTBlockstateProvider$$Type } from "com.gregtechceu.gtceu.api.registry.registrate.provider.GTBlockstateProvider"
import { $EditableMachineUI, $EditableMachineUI$$Type } from "com.gregtechceu.gtceu.api.gui.editor.EditableMachineUI"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $TriFunction$$Type } from "org.apache.commons.lang3.function.TriFunction"
import { $Property, $Property$$Type } from "net.minecraft.world.level.block.state.properties.Property"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $RecipeCapability$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability"
import { $List$$Type } from "java.util.List"
import { $NonNullUnaryOperator$$Type } from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $IRecipeLogicMachine, $IRecipeLogicMachine$$Type } from "com.gregtechceu.gtceu.api.machine.feature.IRecipeLogicMachine"
import { $IMachineBlockEntity, $IMachineBlockEntity$$Type } from "com.gregtechceu.gtceu.api.machine.IMachineBlockEntity"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $GTRecipeType, $GTRecipeType$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipeType"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Function$$Type } from "java.util.function.Function"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $BuilderBase } from "com.gregtechceu.gtceu.api.registry.registrate.BuilderBase"
import { $BiPredicate, $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $DataGenContext, $DataGenContext$$Type } from "com.tterrag.registrate.providers.DataGenContext"
import { $PartAbility$$Type } from "com.gregtechceu.gtceu.api.machine.multiblock.PartAbility"
import { $IMachineBlock, $IMachineBlock$$Type } from "com.gregtechceu.gtceu.api.block.IMachineBlock"
import { $RotationState$$Type } from "com.gregtechceu.gtceu.api.data.RotationState"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $MetaMachine } from "com.gregtechceu.gtceu.api.machine.MetaMachine"
import { $MachineBuilder$ModelInitializer, $MachineBuilder$ModelInitializer$$Type } from "com.gregtechceu.gtceu.api.registry.registrate.MachineBuilder$ModelInitializer"
import { $NonNullConsumer$$Type } from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $NonNullBiConsumer, $NonNullBiConsumer$$Type } from "com.tterrag.registrate.util.nullness.NonNullBiConsumer"
import { $MachineDefinition } from "com.gregtechceu.gtceu.api.machine.MachineDefinition"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $RecipeModifier$$Type } from "com.gregtechceu.gtceu.api.recipe.modifier.RecipeModifier"
import { $Reference2IntMap$$Type } from "it.unimi.dsi.fastutil.objects.Reference2IntMap"

export class $MachineBuilder<DEFINITION extends $MachineDefinition = $MachineDefinition, TYPE extends $MachineBuilder<DEFINITION, TYPE> = $MachineBuilder<DEFINITION, TYPE>> extends $BuilderBase<DEFINITION> {
constructor(gTRegistrate0: $GTRegistrate$$Type, string1: string, function2: $Function$$Type<$ResourceLocation$$Type, DEFINITION>, function3: $Function$$Type<$IMachineBlockEntity$$Type, $MetaMachine>, biFunction4: $BiFunction$$Type<$BlockBehaviour$Properties$$Type, DEFINITION, $IMachineBlock>, biFunction5: $BiFunction$$Type<$IMachineBlock$$Type, $Item$Properties$$Type, $MetaMachineItem>, triFunction6: $TriFunction$$Type<$BlockEntityType$$Type<any>, $BlockPos$$Type, $BlockState$$Type, $IMachineBlockEntity>)

public "abilities"(...partAbility0s: $PartAbility$$Type[]): TYPE
public "addOutputLimit"(recipeCapability0: $RecipeCapability$$Type<any>, int1: integer): TYPE
public "afterWorking"(): $Consumer<$IRecipeLogicMachine>
public "afterWorking"(consumer0: $Consumer$$Type<$IRecipeLogicMachine$$Type>): TYPE
public "allowCoverOnFront"(boolean0: boolean): TYPE
public "allowExtendedFacing"(boolean0: boolean): TYPE
public "alwaysTryModifyRecipe"(boolean0: boolean): TYPE
public "appearance"(supplier0: $Supplier$$Type<$BlockState>): TYPE
public "appearanceBlock"(supplier0: $Supplier$$Type<$Block>): TYPE
public "beforeWorking"(): $BiPredicate<$IRecipeLogicMachine, $GTRecipe>
public "beforeWorking"(biPredicate0: $BiPredicate$$Type<$IRecipeLogicMachine$$Type, $GTRecipe$$Type>): TYPE
public "blockBuilder"(consumer0: $Consumer$$Type<$BlockBuilder$$Type<$Block$$Type, any>>): TYPE
public "blockModel"(): $NonNullBiConsumer<$DataGenContext<$Block, $Block>, $GTBlockstateProvider>
public "blockModel"(nonNullBiConsumer0: $NonNullBiConsumer$$Type<$DataGenContext$$Type<$Block$$Type, $Block$$Type>, $GTBlockstateProvider$$Type>): TYPE
public "blockProp"(nonNullUnaryOperator0: $NonNullUnaryOperator$$Type<$BlockBehaviour$Properties$$Type>): TYPE
public "clearModelProperties"(): TYPE
public "colorOverlaySteamHullModel"(resourceLocation0: $ResourceLocation$$Type): TYPE
public "colorOverlaySteamHullModel"(string0: string, resourceLocation1: $ResourceLocation$$Type, string2: string): TYPE
public "colorOverlaySteamHullModel"(string0: string, string1: string, string2: string): TYPE
public "colorOverlaySteamHullModel"(string0: string): TYPE
public "colorOverlaySteamHullModel"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): TYPE
public "colorOverlayTieredHullModel"(resourceLocation0: $ResourceLocation$$Type): TYPE
public "colorOverlayTieredHullModel"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): TYPE
public "colorOverlayTieredHullModel"(string0: string, string1: string, string2: string): TYPE
public "colorOverlayTieredHullModel"(string0: string): TYPE
public "conditionalTooltip"(component0: $Component$$Type, booleanSupplier1: $BooleanSupplier$$Type): TYPE
public "conditionalTooltip"(component0: $Component$$Type, boolean1: boolean): TYPE
public "defaultModel"(): TYPE
public "editableUI"(editableMachineUI0: $EditableMachineUI$$Type): TYPE
public "editableUI"(): $EditableMachineUI
public "getThis"(): TYPE
public "hasBER"(boolean0: boolean): TYPE
public "itemBuilder"(consumer0: $Consumer$$Type<$ItemBuilder$$Type<$MetaMachineItem$$Type, any>>): TYPE
public "itemColor"(biFunction0: $BiFunction$$Type<$ItemStack$$Type, integer, integer>): TYPE
public "itemProp"(nonNullUnaryOperator0: $NonNullUnaryOperator$$Type<$Item$Properties$$Type>): TYPE
public "langValue"(): string
public "langValue"(string0: string): TYPE
public "machine"(function0: $Function$$Type<$IMachineBlockEntity$$Type, $MetaMachine>): TYPE
public "model"(modelInitializer0: $MachineBuilder$ModelInitializer$$Type): TYPE
public "model"(): $MachineBuilder$ModelInitializer
public "modelProperties"(): $Map<$Property<any>, $Comparable<any>>
public "modelProperties"(collection0: $Collection$$Type<$Property$$Type<any>>): TYPE
public "modelProperties"(...property0s: $Property$$Type<any>[]): TYPE
public "modelProperties"(map0: $Map$$Type<$Property$$Type<any>, $Comparable$$Type<any>>): TYPE
public "modelProperty"<T extends $Comparable<T>>(property0: $Property$$Type<T>, t1: T): TYPE
public "modelProperty"(property0: $Property$$Type<any>): TYPE
public "modelPropertyBool"(property0: $Property$$Type<boolean>, boolean1: boolean): TYPE
public "modelPropertyEnum"<T extends ($Enum<T> & $Comparable<T>)>(property0: $Property$$Type<T>, t1: T): TYPE
public "modelPropertyInt"(property0: $Property$$Type<integer>, int1: integer): TYPE
public "multiblockPreviewRenderer"(boolean0: boolean, boolean1: boolean): TYPE
public "noRecipeModifier"(): TYPE
public "onBlockEntityRegister"(nonNullConsumer0: $NonNullConsumer$$Type<$BlockEntityType$$Type<$BlockEntity$$Type>>): TYPE
public "onWaiting"(): $Consumer<$IRecipeLogicMachine>
public "onWaiting"(consumer0: $Consumer$$Type<$IRecipeLogicMachine$$Type>): TYPE
public "onWorking"(): $Predicate<$IRecipeLogicMachine>
public "onWorking"(predicate0: $Predicate$$Type<$IRecipeLogicMachine$$Type>): TYPE
public "overlaySteamHullModel"(resourceLocation0: $ResourceLocation$$Type): TYPE
public "overlaySteamHullModel"(string0: string): TYPE
public "overlayTieredHullModel"(string0: string): TYPE
public "overlayTieredHullModel"(resourceLocation0: $ResourceLocation$$Type): TYPE
public "paintingColor"(int0: integer): TYPE
public "recipeModifier"(recipeModifier0: $RecipeModifier$$Type): TYPE
public "recipeModifier"(recipeModifier0: $RecipeModifier$$Type, boolean1: boolean): TYPE
public "recipeModifiers"(...recipeModifier0s: $RecipeModifier$$Type[]): TYPE
public "recipeModifiers"(boolean0: boolean, ...recipeModifier1s: $RecipeModifier$$Type[]): TYPE
public "recipeOutputLimits"(reference2IntMap0: $Reference2IntMap$$Type<$RecipeCapability$$Type<any>>): TYPE
public "recipeType"(gTRecipeType0: $GTRecipeType$$Type): TYPE
public "recipeTypes"(...gTRecipeType0s: $GTRecipeType$$Type[]): TYPE
public "recipeTypes"(): $GTRecipeType[]
public "regressWhenWaiting"(): boolean
public "regressWhenWaiting"(boolean0: boolean): TYPE
public "removeModelProperty"(property0: $Property$$Type<any>): TYPE
public "renderMultiblockWorldPreview"(boolean0: boolean): TYPE
public "renderMultiblockXEIPreview"(boolean0: boolean): TYPE
public "rotationState"(rotationState0: $RotationState$$Type): TYPE
public "shape"(voxelShape0: $VoxelShape$$Type): TYPE
public "sidedOverlayCasingModel"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type): TYPE
public "sidedWorkableCasingModel"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type): TYPE
public "simpleGeneratorModel"(resourceLocation0: $ResourceLocation$$Type): TYPE
public "simpleModel"(resourceLocation0: $ResourceLocation$$Type): TYPE
public "tier"(int0: integer): TYPE
public "tier"(): integer
public "tieredHullModel"(resourceLocation0: $ResourceLocation$$Type): TYPE
public "tooltipBuilder"(biConsumer0: $BiConsumer$$Type<$ItemStack$$Type, $List$$Type<$Component$$Type>>): TYPE
public "tooltips"(list0: $List$$Type<$Component$$Type>): TYPE
public "tooltips"(...component0s: $Component$$Type[]): TYPE
public "workableCasingModel"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type): TYPE
public "workableSteamHullModel"(boolean0: boolean, resourceLocation1: $ResourceLocation$$Type): TYPE
public "workableTieredHullModel"(resourceLocation0: $ResourceLocation$$Type): TYPE
get "this"(): TYPE
}
}

declare module "com.gregtechceu.gtceu.api.registry.registrate.MachineBuilder$ModelInitializer" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $DataGenContext$$Type } from "com.tterrag.registrate.providers.DataGenContext"
import { $MachineModelBuilder$$Type } from "com.gregtechceu.gtceu.data.model.builder.MachineModelBuilder"
import { $BlockModelBuilder$$Type } from "net.minecraftforge.client.model.generators.BlockModelBuilder"
import { $GTBlockstateProvider$$Type } from "com.gregtechceu.gtceu.api.registry.registrate.provider.GTBlockstateProvider"

export interface $MachineBuilder$ModelInitializer {
"andThen"(consumer0: $Consumer$$Type<$MachineModelBuilder$$Type<$BlockModelBuilder$$Type>>): $MachineBuilder$ModelInitializer
"andThen"(modelInitializer0: $MachineBuilder$ModelInitializer$$Type): $MachineBuilder$ModelInitializer
"compose"(modelInitializer0: $MachineBuilder$ModelInitializer$$Type): $MachineBuilder$ModelInitializer
"compose"(unaryOperator0: $UnaryOperator$$Type<$MachineModelBuilder$$Type<$BlockModelBuilder$$Type>>): $MachineBuilder$ModelInitializer
"configureModel"(dataGenContext0: $DataGenContext$$Type<$Block$$Type, $Block$$Type>, gTBlockstateProvider1: $GTBlockstateProvider$$Type, machineModelBuilder2: $MachineModelBuilder$$Type<$BlockModelBuilder$$Type>): void
}

export namespace $MachineBuilder$ModelInitializer {
const probejs$$marker: never
}
export abstract class $MachineBuilder$ModelInitializer$$Static implements $MachineBuilder$ModelInitializer {
}
}

declare module "com.gregtechceu.gtceu.api.registry.registrate.provider.GTBlockstateProvider" {
import { $BlockStateGenerator, $BlockStateGenerator$$Type } from "net.minecraft.data.models.blockstates.BlockStateGenerator"
import { $RotationState$$Type } from "com.gregtechceu.gtceu.api.data.RotationState"
import { $MultiPartGenerator } from "net.minecraft.data.models.blockstates.MultiPartGenerator"
import { $ExistingFileHelper$ResourceType } from "net.minecraftforge.common.data.ExistingFileHelper$ResourceType"
import { $Variant, $Variant$$Type } from "net.minecraft.data.models.blockstates.Variant"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ProviderType$$Type } from "com.tterrag.registrate.providers.ProviderType"
import { $RegistrateBlockstateProvider } from "com.tterrag.registrate.providers.RegistrateBlockstateProvider"
import { $ExistingFileHelper, $ExistingFileHelper$$Type } from "net.minecraftforge.common.data.ExistingFileHelper"
import { $MultiVariantGenerator } from "net.minecraft.data.models.blockstates.MultiVariantGenerator"
import { $CachedOutput$$Type } from "net.minecraft.data.CachedOutput"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $AbstractRegistrate$$Type } from "com.tterrag.registrate.AbstractRegistrate"
import { $PackOutput$$Type } from "net.minecraft.data.PackOutput"
import { $MachineDefinition$$Type } from "com.gregtechceu.gtceu.api.machine.MachineDefinition"
import { $GatherDataEvent$$Type } from "net.minecraftforge.data.event.GatherDataEvent"
import { $Map$$Type } from "java.util.Map"
import { $Optional } from "java.util.Optional"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ExtendedBlockModelRotation$$Type } from "com.gregtechceu.gtceu.client.util.ExtendedBlockModelRotation"
import { $PropertyDispatch } from "net.minecraft.data.models.blockstates.PropertyDispatch"
import { $RegistrateProvider$$Type } from "com.tterrag.registrate.providers.RegistrateProvider"
import { $Path$$Type } from "java.nio.file.Path"

export class $GTBlockstateProvider extends $RegistrateBlockstateProvider {
static readonly "MODEL": $ExistingFileHelper$ResourceType
static readonly "TEXTURE": $ExistingFileHelper$ResourceType
static readonly "Z_ROT_PROPERTY_NAME": string

constructor(abstractRegistrate0: $AbstractRegistrate$$Type<any>, gatherDataEvent1: $GatherDataEvent$$Type, map2: $Map$$Type<$ProviderType$$Type<any>, $RegistrateProvider$$Type>)
constructor(abstractRegistrate0: $AbstractRegistrate$$Type<any>, packOutput1: $PackOutput$$Type, existingFileHelper2: $ExistingFileHelper$$Type)

public "addVanillaGenerator"<T extends $BlockStateGenerator>(block0: $Block$$Type, t1: T): T
public static "applyOrientation"(variant0: $Variant$$Type, extendedBlockModelRotation1: $ExtendedBlockModelRotation$$Type): $Variant
public static "applyRotation"(variant0: $Variant$$Type, int1: integer, int2: integer, int3: integer): $Variant
public static "createFacingDispatch"(rotationState0: $RotationState$$Type, boolean1: boolean): $PropertyDispatch
public static "createFacingDispatch"(machineDefinition0: $MachineDefinition$$Type): $PropertyDispatch
public static "getCurrentProvider"(): $GTBlockstateProvider
public "getExistingFileHelper"(): $ExistingFileHelper
public "getExistingMultiVariantGenerator"(block0: $Block$$Type): $Optional<$MultiVariantGenerator>
public "getExistingMultipartGenerator"(block0: $Block$$Type): $Optional<$MultiPartGenerator>
public "multiPartGenerator"(block0: $Block$$Type): $MultiPartGenerator
public "multiVariantGenerator"(block0: $Block$$Type): $MultiVariantGenerator
public "multiVariantGenerator"(block0: $Block$$Type, variant1: $Variant$$Type): $MultiVariantGenerator
public static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
get "existingFileHelper"(): $ExistingFileHelper
}
}

declare module "com.gregtechceu.gtceu.api.registry.registrate.MultiblockMachineBuilder" {
import { $IMultiPart, $IMultiPart$$Type } from "com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiPart"
import { $MetaMachineItem } from "com.gregtechceu.gtceu.api.item.MetaMachineItem"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $GTRegistrate$$Type } from "com.gregtechceu.gtceu.api.registry.registrate.GTRegistrate"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Item$Properties$$Type } from "net.minecraft.world.item.Item$Properties"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $IMultiController, $IMultiController$$Type } from "com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiController"
import { $Function$$Type } from "java.util.function.Function"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ItemLike } from "net.minecraft.world.level.ItemLike"
import { $BiConsumer, $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $MultiblockMachineDefinition, $MultiblockMachineDefinition$$Type } from "com.gregtechceu.gtceu.api.machine.MultiblockMachineDefinition"
import { $BlockPattern } from "com.gregtechceu.gtceu.api.pattern.BlockPattern"
import { $IMachineBlock, $IMachineBlock$$Type } from "com.gregtechceu.gtceu.api.block.IMachineBlock"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $MachineBuilder } from "com.gregtechceu.gtceu.api.registry.registrate.MachineBuilder"
import { $TriFunction$$Type } from "org.apache.commons.lang3.function.TriFunction"
import { $MultiblockShapeInfo } from "com.gregtechceu.gtceu.api.pattern.MultiblockShapeInfo"
import { $List, $List$$Type } from "java.util.List"
import { $MultiblockControllerMachine, $MultiblockControllerMachine$$Type } from "com.gregtechceu.gtceu.api.machine.multiblock.MultiblockControllerMachine"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $IMachineBlockEntity, $IMachineBlockEntity$$Type } from "com.gregtechceu.gtceu.api.machine.IMachineBlockEntity"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Comparator, $Comparator$$Type } from "java.util.Comparator"

export class $MultiblockMachineBuilder<DEFINITION extends $MultiblockMachineDefinition = $MultiblockMachineDefinition, TYPE extends $MultiblockMachineBuilder<DEFINITION, TYPE> = $MultiblockMachineBuilder<DEFINITION, TYPE>> extends $MachineBuilder<DEFINITION, TYPE> {
constructor(gTRegistrate0: $GTRegistrate$$Type, string1: string, function2: $Function$$Type<$IMachineBlockEntity$$Type, $MultiblockControllerMachine>, biFunction3: $BiFunction$$Type<$BlockBehaviour$Properties$$Type, DEFINITION, $IMachineBlock>, biFunction4: $BiFunction$$Type<$IMachineBlock$$Type, $Item$Properties$$Type, $MetaMachineItem>, triFunction5: $TriFunction$$Type<$BlockEntityType$$Type<any>, $BlockPos$$Type, $BlockState$$Type, $IMachineBlockEntity>)

public "additionalDisplay"(biConsumer0: $BiConsumer$$Type<$IMultiController$$Type, $List$$Type<$Component$$Type>>): TYPE
public "additionalDisplay"(): $BiConsumer<$IMultiController, $List<$Component>>
public "allowFlip"(boolean0: boolean): TYPE
public "generator"(boolean0: boolean): TYPE
public "partAppearance"(triFunction0: $TriFunction$$Type<$IMultiController$$Type, $IMultiPart$$Type, $Direction$$Type, $BlockState>): TYPE
public "partSorter"(comparator0: $Comparator$$Type<$IMultiPart$$Type>): TYPE
public "partSorter"(function0: $Function$$Type<$MultiblockControllerMachine$$Type, $Comparator<$IMultiPart>>): TYPE
public "pattern"(function0: $Function$$Type<$MultiblockMachineDefinition$$Type, $BlockPattern>): TYPE
public "recoveryItems"(supplier0: $Supplier$$Type<$ItemLike[]>): TYPE
public "recoveryStacks"(supplier0: $Supplier$$Type<$ItemStack[]>): TYPE
public "shapeInfo"(function0: $Function$$Type<$MultiblockMachineDefinition$$Type, $MultiblockShapeInfo>): TYPE
public "shapeInfos"(function0: $Function$$Type<$MultiblockMachineDefinition$$Type, $List<$MultiblockShapeInfo>>): TYPE
}
}

declare module "com.gregtechceu.gtceu.api.registry.GTRegistry$String" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $GTRegistry } from "com.gregtechceu.gtceu.api.registry.GTRegistry"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Spliterator } from "java.util.Spliterator"

export class $GTRegistry$String<V = any> extends $GTRegistry<string, V> {
constructor(resourceLocation0: $ResourceLocation$$Type)

public "codec"(): $Codec<V>
public "forEach"(consumer0: $Consumer$$Type<V>): void
public "loadFromNBT"(tag0: $Tag$$Type): V
public "readBuf"(friendlyByteBuf0: $FriendlyByteBuf$$Type): V
public "spliterator"(): $Spliterator<V>
}
}

declare module "com.gregtechceu.gtceu.api.registry.GTRegistry" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Map$Entry } from "java.util.Map$Entry"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Tag, $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $Iterator } from "java.util.Iterator"
import { $Map } from "java.util.Map"
import { $Set } from "java.util.Set"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Spliterator } from "java.util.Spliterator"
import { $Iterable } from "java.lang.Iterable"

export class $GTRegistry<K = any, V = any> implements $Iterable<V> {
static readonly "REGISTERED": $Map<$ResourceLocation, $GTRegistry<any, any>>

constructor(resourceLocation0: $ResourceLocation$$Type)

public "clear"(): void
public "codec"(): $Codec<V>
public "containKey"(k0: K): boolean
public "containValue"(v0: V): boolean
public "entries"(): $Set<$Map$Entry<K, V>>
public "forEach"(consumer0: $Consumer$$Type<V>): void
public "freeze"(): void
public "get"(k0: K): V
public "getKey"(v0: V): K
public "getOrDefault"(k0: K, v1: V): V
public "getOrDefaultKey"(v0: V, k1: K): K
public "getRegistryName"(): $ResourceLocation
public "isFrozen"(): boolean
public "iterator"(): $Iterator<V>
public "keys"(): $Set<K>
public "loadFromNBT"(tag0: $Tag$$Type): V
public "readBuf"(friendlyByteBuf0: $FriendlyByteBuf$$Type): V
public "register"<T extends V>(k0: K, t1: T): T
public "registerOrOverride"<T extends V>(k0: K, t1: T): T
public "registry"(): $Map<K, V>
public "remap"(k0: K, k1: K): void
public "remove"(k0: K): boolean
public "replace"<T extends V>(k0: K, t1: T): T
public "saveToNBT"(v0: V): $Tag
public "spliterator"(): $Spliterator<V>
public "unfreeze"(): void
public "values"(): $Set<V>
public "writeBuf"(v0: V, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
[Symbol.iterator](): IterableIterator<V>;
get "registryName"(): $ResourceLocation
get "frozen"(): boolean
}
}

declare module "com.gregtechceu.gtceu.api.registry.GTRegistry$RL" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $GTRegistry } from "com.gregtechceu.gtceu.api.registry.GTRegistry"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Spliterator } from "java.util.Spliterator"

export class $GTRegistry$RL<V = any> extends $GTRegistry<$ResourceLocation, V> {
constructor(resourceLocation0: $ResourceLocation$$Type)

public "codec"(): $Codec<V>
public "forEach"(consumer0: $Consumer$$Type<V>): void
public "loadFromNBT"(tag0: $Tag$$Type): V
public "readBuf"(friendlyByteBuf0: $FriendlyByteBuf$$Type): V
public "spliterator"(): $Spliterator<V>
}
}

