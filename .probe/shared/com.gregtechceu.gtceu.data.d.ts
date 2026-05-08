declare module "com.gregtechceu.gtceu.data.recipe.misc.alloyblast.AlloyBlastRecipeProducer" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $BlastProperty$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $FinishedRecipe$$Type } from "net.minecraft.data.recipes.FinishedRecipe"

export class $AlloyBlastRecipeProducer {
static readonly "DEFAULT_PRODUCER": $AlloyBlastRecipeProducer

constructor()

public "produce"(material0: $Material$$Type, blastProperty1: $BlastProperty$$Type, consumer2: $Consumer$$Type<$FinishedRecipe$$Type>): void
}
}

declare module "com.gregtechceu.gtceu.data.model.builder.MachineModelBuilder" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject } from "com.google.gson.JsonObject"
import { $DynamicRender } from "com.gregtechceu.gtceu.client.renderer.machine.DynamicRender"
import { $ModelFile, $ModelFile$$Type } from "net.minecraftforge.client.model.generators.ModelFile"
import { $BiFunction, $BiFunction$$Type } from "java.util.function.BiFunction"
import { $MachineRenderState$$Type } from "com.gregtechceu.gtceu.client.model.machine.MachineRenderState"
import { $BlockStateProvider$ConfiguredModelList, $BlockStateProvider$ConfiguredModelList$$Type } from "net.minecraftforge.client.model.generators.BlockStateProvider$ConfiguredModelList"
import { $MachineModelBuilder$PartBuilder } from "com.gregtechceu.gtceu.data.model.builder.MachineModelBuilder$PartBuilder"
import { $Property$$Type } from "net.minecraft.world.level.block.state.properties.Property"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ExistingFileHelper } from "net.minecraftforge.common.data.ExistingFileHelper"
import { $Function$$Type } from "java.util.function.Function"
import { $ConfiguredModel$Builder } from "net.minecraftforge.client.model.generators.ConfiguredModel$Builder"
import { $MachineModelBuilder$PartialState, $MachineModelBuilder$PartialState$$Type } from "com.gregtechceu.gtceu.data.model.builder.MachineModelBuilder$PartialState"
import { $JsonElement } from "com.google.gson.JsonElement"
import { $List } from "java.util.List"
import { $ConfiguredModel, $ConfiguredModel$$Type } from "net.minecraftforge.client.model.generators.ConfiguredModel"
import { $MachineDefinition, $MachineDefinition$$Type } from "com.gregtechceu.gtceu.api.machine.MachineDefinition"
import { $Map } from "java.util.Map"
import { $ModelBuilder, $ModelBuilder$$Type } from "net.minecraftforge.client.model.generators.ModelBuilder"
import { $SortedMap } from "java.util.SortedMap"
import { $CustomLoaderBuilder } from "net.minecraftforge.client.model.generators.CustomLoaderBuilder"

export class $MachineModelBuilder<T extends $ModelBuilder<T> = $ModelBuilder<T>> extends $CustomLoaderBuilder<T> {
public "addDynamicRenderer"(supplier0: $Supplier$$Type<$DynamicRender<any, any>>): $MachineModelBuilder<T>
public "addModels"(partialState0: $MachineModelBuilder$PartialState$$Type<T>, ...configuredModel1s: $ConfiguredModel$$Type[]): $MachineModelBuilder<T>
public "addReplaceableTextures"(...string0s: string[]): $MachineModelBuilder<T>
public "addTextureOverride"(string0: string, resourceLocation1: $ResourceLocation$$Type): $MachineModelBuilder<T>
public static "begin"<T extends $ModelBuilder<T>>(machineDefinition0: $MachineDefinition$$Type): $BiFunction<T, $ExistingFileHelper, $MachineModelBuilder<T>>
public static "configuredModelListToJSON"(configuredModelList0: $BlockStateProvider$ConfiguredModelList$$Type): $JsonElement
public static "configuredModelToJSON"(configuredModel0: $ConfiguredModel$$Type, boolean1: boolean): $JsonObject
public "forAllStates"(function0: $Function$$Type<$MachineRenderState$$Type, $ConfiguredModel[]>): $MachineModelBuilder<T>
public "forAllStatesExcept"(function0: $Function$$Type<$MachineRenderState$$Type, $ConfiguredModel[]>, ...property1s: $Property$$Type<any>[]): $MachineModelBuilder<T>
public "forAllStatesModels"(function0: $Function$$Type<$MachineRenderState$$Type, $ModelFile>): $MachineModelBuilder<T>
public "getModels"(): $Map<$MachineModelBuilder$PartialState<T>, $BlockStateProvider$ConfiguredModelList>
public "getOwner"(): $MachineDefinition
public "getParts"(): $List<$MachineModelBuilder$PartBuilder<>>
public "getReplaceableTextures"(): $List<string>
public "getTextureOverrides"(): $SortedMap<string, $ResourceLocation>
public static "modelToJson"(modelFile0: $ModelFile$$Type): $JsonElement
public "part"(modelFile0: $ModelFile$$Type): $MachineModelBuilder$PartBuilder<>
public "part"(resourceLocation0: $ResourceLocation$$Type): $MachineModelBuilder$PartBuilder<>
public "part"(): $ConfiguredModel$Builder<$MachineModelBuilder$PartBuilder<>>
public "partialState"(): $MachineModelBuilder$PartialState<T>
public "replaceForAllStates"(biFunction0: $BiFunction$$Type<$MachineRenderState$$Type, $ConfiguredModel$$Type[], $ConfiguredModel[]>): $MachineModelBuilder<T>
public "replaceForAllStatesExcept"(biFunction0: $BiFunction$$Type<$MachineRenderState$$Type, $ConfiguredModel$$Type[], $ConfiguredModel[]>, ...property1s: $Property$$Type<any>[]): $MachineModelBuilder<T>
public "replaceModels"(partialState0: $MachineModelBuilder$PartialState$$Type<T>, ...configuredModel1s: $ConfiguredModel$$Type[]): $MachineModelBuilder<T>
public "setModels"(partialState0: $MachineModelBuilder$PartialState$$Type<T>, ...configuredModel1s: $ConfiguredModel$$Type[]): $MachineModelBuilder<T>
get "models"(): $Map<$MachineModelBuilder$PartialState<T>, $BlockStateProvider$ConfiguredModelList>
get "owner"(): $MachineDefinition
get "parts"(): $List<$MachineModelBuilder$PartBuilder<>>
get "replaceableTextures"(): $List<string>
get "textureOverrides"(): $SortedMap<string, $ResourceLocation>
}
}

declare module "com.gregtechceu.gtceu.data.recipe.CraftingComponent" {
import { $TagPrefix$$Type } from "com.gregtechceu.gtceu.api.data.tag.TagPrefix"
import { $Map } from "java.util.Map"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"

export class $CraftingComponent {
static readonly "ALL_COMPONENTS": $Map<string, $CraftingComponent>
static readonly "EMPTY": $CraftingComponent

public "add"(int0: integer, tagPrefix1: $TagPrefix$$Type, material2: $Material$$Type): $CraftingComponent
public "add"(int0: integer, object1: any): $CraftingComponent
public static "get"(string0: string): $CraftingComponent
public "get"(int0: integer): any
public static "of"(string0: string, object1: any): $CraftingComponent
public static "of"(string0: string, tagPrefix1: $TagPrefix$$Type, material2: $Material$$Type): $CraftingComponent
public "remove"(int0: integer): void
public "setFallback"(object0: any): void
set "fallback"(value: any)
}
}

declare module "com.gregtechceu.gtceu.data.recipe.event.CraftingComponentModificationEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $CraftingComponentModificationEvent extends $Event {
constructor()

}
}

declare module "com.gregtechceu.gtceu.data.model.builder.MachineModelBuilder$PartialState" {
import { $ConfiguredModel$$Type } from "net.minecraftforge.client.model.generators.ConfiguredModel"
import { $MachineDefinition } from "com.gregtechceu.gtceu.api.machine.MachineDefinition"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $ModelFile$$Type } from "net.minecraftforge.client.model.generators.ModelFile"
import { $MachineRenderState, $MachineRenderState$$Type } from "com.gregtechceu.gtceu.client.model.machine.MachineRenderState"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $ModelBuilder } from "net.minecraftforge.client.model.generators.ModelBuilder"
import { $Property, $Property$$Type } from "net.minecraft.world.level.block.state.properties.Property"
import { $Comparator } from "java.util.Comparator"
import { $MachineModelBuilder } from "com.gregtechceu.gtceu.data.model.builder.MachineModelBuilder"
import { $SortedMap } from "java.util.SortedMap"

export class $MachineModelBuilder$PartialState<B extends $ModelBuilder<B> = $ModelBuilder<B>> implements $Predicate<$MachineRenderState> {
public "addModels"(...configuredModel0s: $ConfiguredModel$$Type[]): $MachineModelBuilder$PartialState<B>
public "and"(predicate0: $Predicate$$Type<$MachineRenderState$$Type>): $Predicate<$MachineRenderState>
public static "comparingByProperties"(): $Comparator<$MachineModelBuilder$PartialState<any>>
public "getOwner"(): $MachineDefinition
public "getSetStates"(): $SortedMap<$Property<any>, $Comparable<any>>
public static "isEqual"<T>(object0: any): $Predicate<T>
public "negate"(): $Predicate<$MachineRenderState>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public "or"(predicate0: $Predicate$$Type<$MachineRenderState$$Type>): $Predicate<$MachineRenderState>
public "setModel"(modelFile0: $ModelFile$$Type): $MachineModelBuilder<B>
public "setModels"(...configuredModel0s: $ConfiguredModel$$Type[]): $MachineModelBuilder<B>
public "test"(machineRenderState0: $MachineRenderState$$Type): boolean
public "with"<T extends $Comparable<T>>(property0: $Property$$Type<T>, t1: T): $MachineModelBuilder$PartialState<B>
get "owner"(): $MachineDefinition
get "setStates"(): $SortedMap<$Property<any>, $Comparable<any>>
set "model"(value: $ModelFile$$Type)
set "models"(value: $ConfiguredModel$$Type[])
}
}

declare module "com.gregtechceu.gtceu.data.recipe.GTCraftingComponents" {
import { $CraftingComponent } from "com.gregtechceu.gtceu.data.recipe.CraftingComponent"

export class $GTCraftingComponents {
static "BETTER_CIRCUIT": $CraftingComponent
static "CABLE": $CraftingComponent
static "CABLE_DOUBLE": $CraftingComponent
static "CABLE_HEX": $CraftingComponent
static "CABLE_OCT": $CraftingComponent
static "CABLE_QUAD": $CraftingComponent
static "CABLE_TIER_UP": $CraftingComponent
static "CABLE_TIER_UP_DOUBLE": $CraftingComponent
static "CABLE_TIER_UP_HEX": $CraftingComponent
static "CABLE_TIER_UP_OCT": $CraftingComponent
static "CABLE_TIER_UP_QUAD": $CraftingComponent
static "CASING": $CraftingComponent
static "CIRCUIT": $CraftingComponent
static "COIL_ELECTRIC": $CraftingComponent
static "COIL_HEATING": $CraftingComponent
static "COIL_HEATING_DOUBLE": $CraftingComponent
static "CONVEYOR": $CraftingComponent
static "CRATE": $CraftingComponent
static "DRUM": $CraftingComponent
static "EMITTER": $CraftingComponent
static "FIELD_GENERATOR": $CraftingComponent
static "FRAME": $CraftingComponent
static "GLASS": $CraftingComponent
static "GRINDER": $CraftingComponent
static "HULL": $CraftingComponent
static "HULL_PLATE": $CraftingComponent
static "MOTOR": $CraftingComponent
static "PIPE_LARGE": $CraftingComponent
static "PIPE_NONUPLE": $CraftingComponent
static "PIPE_NORMAL": $CraftingComponent
static "PIPE_REACTOR": $CraftingComponent
static "PISTON": $CraftingComponent
static "PLATE": $CraftingComponent
static "POWER_COMPONENT": $CraftingComponent
static "PUMP": $CraftingComponent
static "ROBOT_ARM": $CraftingComponent
static "ROD_DISTILLATION": $CraftingComponent
static "ROD_ELECTROMAGNETIC": $CraftingComponent
static "ROD_MAGNETIC": $CraftingComponent
static "ROD_RADIOACTIVE": $CraftingComponent
static "ROTOR": $CraftingComponent
static "SAWBLADE": $CraftingComponent
static "SENSOR": $CraftingComponent
static "SENSOR_EMITTER_GEM": $CraftingComponent
static "SMALL_SPRING_TRANSFORMER": $CraftingComponent
static "SPRING": $CraftingComponent
static "SPRING_TRANSFORMER": $CraftingComponent
static "VOLTAGE_COIL": $CraftingComponent
static "WIRE_ELECTRIC": $CraftingComponent
static "WIRE_HEX": $CraftingComponent
static "WIRE_OCT": $CraftingComponent
static "WIRE_QUAD": $CraftingComponent

constructor()

public static "init"(): void
}
}

declare module "com.gregtechceu.gtceu.data.recipe.builder.GTRecipeBuilder" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $TagPrefix$$Type } from "com.gregtechceu.gtceu.api.data.tag.TagPrefix"
import { $GTRecipeType, $GTRecipeType$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipeType"
import { $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $HolderSet$$Type } from "net.minecraft.core.HolderSet"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $Biome, $Biome$$Type } from "net.minecraft.world.level.biome.Biome"
import { $GTRecipeCategory, $GTRecipeCategory$$Type } from "com.gregtechceu.gtceu.api.recipe.category.GTRecipeCategory"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $GTRecipe, $GTRecipe$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipe"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $ResearchRecipeBuilder$StationRecipeBuilder$$Type } from "com.gregtechceu.gtceu.api.recipe.ResearchRecipeBuilder$StationRecipeBuilder"
import { $RecipeCondition, $RecipeCondition$$Type } from "com.gregtechceu.gtceu.api.recipe.RecipeCondition"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $ItemLike } from "net.minecraft.world.level.ItemLike"
import { $Map, $Map$$Type } from "java.util.Map"
import { $GTRecipeBuilder$ResearchRecipeEntry } from "com.gregtechceu.gtceu.data.recipe.builder.GTRecipeBuilder$ResearchRecipeEntry"
import { $BiConsumer, $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $MaterialStack$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.stack.MaterialStack"
import { $CleanroomType$$Type } from "com.gregtechceu.gtceu.api.machine.multiblock.CleanroomType"
import { $IntProviderFluidIngredient$$Type } from "com.gregtechceu.gtceu.api.recipe.ingredient.IntProviderFluidIngredient"
import { $EnergyStack } from "com.gregtechceu.gtceu.api.recipe.ingredient.EnergyStack"
import { $IntProviderIngredient$$Type } from "com.gregtechceu.gtceu.api.recipe.ingredient.IntProviderIngredient"
import { $Content, $Content$$Type } from "com.gregtechceu.gtceu.api.recipe.content.Content"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $FluidIngredient$$Type } from "com.gregtechceu.gtceu.api.recipe.ingredient.FluidIngredient"
import { $ChanceLogic, $ChanceLogic$$Type } from "com.gregtechceu.gtceu.api.recipe.chance.logic.ChanceLogic"
import { $MedicalCondition$$Type } from "com.gregtechceu.gtceu.api.data.medicalcondition.MedicalCondition"
import { $RecipeCapability, $RecipeCapability$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability"
import { $FinishedRecipe, $FinishedRecipe$$Type } from "net.minecraft.data.recipes.FinishedRecipe"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $ResearchRecipeBuilder$ScannerRecipeBuilder$$Type } from "com.gregtechceu.gtceu.api.recipe.ResearchRecipeBuilder$ScannerRecipeBuilder"
import { $List, $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $MachineDefinition$$Type } from "com.gregtechceu.gtceu.api.machine.MachineDefinition"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $FluidStack$$Type } from "net.minecraftforge.fluids.FluidStack"
import { $MaterialEntry$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.stack.MaterialEntry"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $NBTPredicate$$Type } from "com.gregtechceu.gtceu.api.recipe.ingredient.nbtpredicate.NBTPredicate"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $Level } from "net.minecraft.world.level.Level"

export class $GTRecipeBuilder {
"chance": integer
readonly "conditions": $List<$RecipeCondition<any>>
"duration": integer
"id": $ResourceLocation
readonly "input": $Map<$RecipeCapability<any>, $List<$Content>>
readonly "inputChanceLogic": $Map<$RecipeCapability<any>, $ChanceLogic>
"maxChance": integer
"onSave": $BiConsumer<$GTRecipeBuilder, $Consumer<$FinishedRecipe>>
readonly "output": $Map<$RecipeCapability<any>, $List<$Content>>
readonly "outputChanceLogic": $Map<$RecipeCapability<any>, $ChanceLogic>
"perTick": boolean
"recipeType": $GTRecipeType
readonly "tickInput": $Map<$RecipeCapability<any>, $List<$Content>>
readonly "tickInputChanceLogic": $Map<$RecipeCapability<any>, $ChanceLogic>
readonly "tickOutput": $Map<$RecipeCapability<any>, $List<$Content>>
readonly "tickOutputChanceLogic": $Map<$RecipeCapability<any>, $ChanceLogic>
"tierChanceBoost": integer

constructor(gTRecipe0: $GTRecipe$$Type, gTRecipeType1: $GTRecipeType$$Type)
constructor(resourceLocation0: $ResourceLocation$$Type, gTRecipeType1: $GTRecipeType$$Type)

public "CWUt"(int0: integer): $GTRecipeBuilder
public "EUt"(long0: long, long1: long): $GTRecipeBuilder
public "EUt"(long0: long): $GTRecipeBuilder
public "EUt"(): $EnergyStack
public "addCondition"(recipeCondition0: $RecipeCondition$$Type<any>): $GTRecipeBuilder
public "addData"(string0: string, float1: float): $GTRecipeBuilder
public "addData"(string0: string, boolean1: boolean): $GTRecipeBuilder
public "addData"(string0: string, tag1: $Tag$$Type): $GTRecipeBuilder
public "addData"(string0: string, int1: integer): $GTRecipeBuilder
public "addData"(string0: string, long1: long): $GTRecipeBuilder
public "addData"(string0: string, string1: string): $GTRecipeBuilder
public "addMaterialInfo"(boolean0: boolean, boolean1: boolean): $GTRecipeBuilder
public "addMaterialInfo"(boolean0: boolean): $GTRecipeBuilder
/** @deprecated */
public "adjacentBlock"(collection0: $Collection$$Type<$HolderSet$$Type<$Block$$Type>>, boolean1: boolean): $GTRecipeBuilder
/** @deprecated */
public "adjacentBlock"(...block0s: $Block$$Type[]): $GTRecipeBuilder
/** @deprecated */
public "adjacentBlock"(boolean0: boolean, ...block1s: $Block$$Type[]): $GTRecipeBuilder
/** @deprecated */
public "adjacentBlock"(collection0: $Collection$$Type<$HolderSet$$Type<$Block$$Type>>): $GTRecipeBuilder
/** @deprecated */
public "adjacentBlock"(boolean0: boolean, ...tagKey1s: $TagKey$$Type<$Block$$Type>[]): $GTRecipeBuilder
/** @deprecated */
public "adjacentBlock"(...tagKey0s: $TagKey$$Type<$Block$$Type>[]): $GTRecipeBuilder
/** @deprecated */
public "adjacentBlockTag"(...tagKey0s: $TagKey$$Type<$Block$$Type>[]): $GTRecipeBuilder
/** @deprecated */
public "adjacentBlockTag"(boolean0: boolean, ...tagKey1s: $TagKey$$Type<$Block$$Type>[]): $GTRecipeBuilder
public "adjacentBlocks"(boolean0: boolean, ...tagKey1s: $TagKey$$Type<$Block$$Type>[]): $GTRecipeBuilder
public "adjacentBlocks"(collection0: $Collection$$Type<$HolderSet$$Type<$Block$$Type>>): $GTRecipeBuilder
public "adjacentBlocks"(collection0: $Collection$$Type<$HolderSet$$Type<$Block$$Type>>, boolean1: boolean): $GTRecipeBuilder
public "adjacentBlocks"(...tagKey0s: $TagKey$$Type<$Block$$Type>[]): $GTRecipeBuilder
public "adjacentBlocks"(boolean0: boolean, ...block1s: $Block$$Type[]): $GTRecipeBuilder
public "adjacentBlocks"(...block0s: $Block$$Type[]): $GTRecipeBuilder
/** @deprecated */
public "adjacentFluid"(boolean0: boolean, ...tagKey1s: $TagKey$$Type<$Fluid$$Type>[]): $GTRecipeBuilder
/** @deprecated */
public "adjacentFluid"(...fluid0s: $Fluid$$Type[]): $GTRecipeBuilder
/** @deprecated */
public "adjacentFluid"(collection0: $Collection$$Type<$HolderSet$$Type<$Fluid$$Type>>): $GTRecipeBuilder
/** @deprecated */
public "adjacentFluid"(collection0: $Collection$$Type<$HolderSet$$Type<$Fluid$$Type>>, boolean1: boolean): $GTRecipeBuilder
/** @deprecated */
public "adjacentFluid"(boolean0: boolean, ...fluid1s: $Fluid$$Type[]): $GTRecipeBuilder
/** @deprecated */
public "adjacentFluid"(...tagKey0s: $TagKey$$Type<$Fluid$$Type>[]): $GTRecipeBuilder
/** @deprecated */
public "adjacentFluidTag"(...tagKey0s: $TagKey$$Type<$Fluid$$Type>[]): $GTRecipeBuilder
/** @deprecated */
public "adjacentFluidTag"(boolean0: boolean, ...tagKey1s: $TagKey$$Type<$Fluid$$Type>[]): $GTRecipeBuilder
public "adjacentFluids"(...fluid0s: $Fluid$$Type[]): $GTRecipeBuilder
public "adjacentFluids"(collection0: $Collection$$Type<$HolderSet$$Type<$Fluid$$Type>>, boolean1: boolean): $GTRecipeBuilder
public "adjacentFluids"(boolean0: boolean, ...tagKey1s: $TagKey$$Type<$Fluid$$Type>[]): $GTRecipeBuilder
public "adjacentFluids"(collection0: $Collection$$Type<$HolderSet$$Type<$Fluid$$Type>>): $GTRecipeBuilder
public "adjacentFluids"(boolean0: boolean, ...fluid1s: $Fluid$$Type[]): $GTRecipeBuilder
public "adjacentFluids"(...tagKey0s: $TagKey$$Type<$Fluid$$Type>[]): $GTRecipeBuilder
public "biome"(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean): $GTRecipeBuilder
public "biome"(resourceKey0: $ResourceKey$$Type<$Biome>): $GTRecipeBuilder
public "biome"(resourceKey0: $ResourceKey$$Type<$Biome>, boolean1: boolean): $GTRecipeBuilder
public "biome"(resourceLocation0: $ResourceLocation$$Type): $GTRecipeBuilder
public "biomeTag"(tagKey0: $TagKey$$Type<$Biome$$Type>): $GTRecipeBuilder
public "biomeTag"(tagKey0: $TagKey$$Type<$Biome$$Type>, boolean1: boolean): $GTRecipeBuilder
public "blastFurnaceTemp"(int0: integer): $GTRecipeBuilder
public "build"(): $FinishedRecipe
public "buildRawRecipe"(): $GTRecipe
public "capabilitiesToJson"(map0: $Map$$Type<$RecipeCapability$$Type<any>, $List$$Type<$Content$$Type>>): $JsonObject
public "category"(gTRecipeCategory0: $GTRecipeCategory$$Type): $GTRecipeBuilder
public "chance"(int0: integer): $GTRecipeBuilder
public "chanceLogicsToJson"(map0: $Map$$Type<$RecipeCapability$$Type<any>, $ChanceLogic$$Type>): $JsonObject
public "chancedFluidInputLogic"(chanceLogic0: $ChanceLogic$$Type): $GTRecipeBuilder
public "chancedFluidOutput"(fluidStack0: $FluidStack$$Type, string1: string, int2: integer): $GTRecipeBuilder
public "chancedFluidOutputLogic"(chanceLogic0: $ChanceLogic$$Type): $GTRecipeBuilder
public "chancedInput"(ingredient0: $Ingredient$$Type, int1: integer, int2: integer): $GTRecipeBuilder
public "chancedInput"(fluidIngredient0: $FluidIngredient$$Type, int1: integer, int2: integer): $GTRecipeBuilder
public "chancedInput"(itemStack0: $ItemStack$$Type, int1: integer, int2: integer): $GTRecipeBuilder
public "chancedInput"(fluidStack0: $FluidStack$$Type, int1: integer, int2: integer): $GTRecipeBuilder
public "chancedInputLogic"(recipeCapability0: $RecipeCapability$$Type<any>, chanceLogic1: $ChanceLogic$$Type): $GTRecipeBuilder
public "chancedItemInputLogic"(chanceLogic0: $ChanceLogic$$Type): $GTRecipeBuilder
public "chancedItemOutputLogic"(chanceLogic0: $ChanceLogic$$Type): $GTRecipeBuilder
public "chancedOutput"(item0: $Item$$Type, int1: integer, string2: string, int3: integer): $GTRecipeBuilder
public "chancedOutput"(item0: $Item$$Type, string1: string, int2: integer): $GTRecipeBuilder
public "chancedOutput"(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type, string2: string, int3: integer): $GTRecipeBuilder
public "chancedOutput"(ingredient0: $Ingredient$$Type, int1: integer, int2: integer): $GTRecipeBuilder
public "chancedOutput"(fluidIngredient0: $FluidIngredient$$Type, int1: integer, int2: integer): $GTRecipeBuilder
public "chancedOutput"(fluidStack0: $FluidStack$$Type, int1: integer, int2: integer): $GTRecipeBuilder
public "chancedOutput"(itemStack0: $ItemStack$$Type, int1: integer, int2: integer): $GTRecipeBuilder
public "chancedOutput"(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type, int2: integer, int3: integer): $GTRecipeBuilder
public "chancedOutput"(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type, int2: integer, string3: string, int4: integer): $GTRecipeBuilder
public "chancedOutput"(itemStack0: $ItemStack$$Type, string1: string, int2: integer): $GTRecipeBuilder
public "chancedOutput"(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type, int2: integer, int3: integer, int4: integer): $GTRecipeBuilder
public "chancedOutputLogic"(recipeCapability0: $RecipeCapability$$Type<any>, chanceLogic1: $ChanceLogic$$Type): $GTRecipeBuilder
public "chancedTickInputLogic"(recipeCapability0: $RecipeCapability$$Type<any>, chanceLogic1: $ChanceLogic$$Type): $GTRecipeBuilder
public "chancedTickOutputLogic"(recipeCapability0: $RecipeCapability$$Type<any>, chanceLogic1: $ChanceLogic$$Type): $GTRecipeBuilder
public "circuitMeta"(int0: integer): $GTRecipeBuilder
public "cleanroom"(cleanroomType0: $CleanroomType$$Type): $GTRecipeBuilder
public "copy"(string0: string): $GTRecipeBuilder
public "copy"(resourceLocation0: $ResourceLocation$$Type): $GTRecipeBuilder
public "copyFrom"(gTRecipeBuilder0: $GTRecipeBuilder$$Type): $GTRecipeBuilder
public "daytime"(): $GTRecipeBuilder
public "daytime"(boolean0: boolean): $GTRecipeBuilder
public "dimension"(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean): $GTRecipeBuilder
public "dimension"(resourceKey0: $ResourceKey$$Type<$Level>): $GTRecipeBuilder
public "dimension"(resourceLocation0: $ResourceLocation$$Type): $GTRecipeBuilder
public "dimension"(resourceKey0: $ResourceKey$$Type<$Level>, boolean1: boolean): $GTRecipeBuilder
public "disableDistilleryRecipes"(boolean0: boolean): $GTRecipeBuilder
public "duration"(int0: integer): $GTRecipeBuilder
public "durationIsTotalCWU"(boolean0: boolean): $GTRecipeBuilder
public "environmentalHazard"(medicalCondition0: $MedicalCondition$$Type): $GTRecipeBuilder
public "environmentalHazard"(medicalCondition0: $MedicalCondition$$Type, boolean1: boolean): $GTRecipeBuilder
public "explosivesAmount"(int0: integer): $GTRecipeBuilder
public "explosivesType"(itemStack0: $ItemStack$$Type): $GTRecipeBuilder
public "ftbQuest"(string0: string): $GTRecipeBuilder
public "ftbQuest"(string0: string, boolean1: boolean): $GTRecipeBuilder
public "fusionStartEU"(long0: long): $GTRecipeBuilder
public "gameStage"(string0: string, boolean1: boolean): $GTRecipeBuilder
public "gameStage"(string0: string): $GTRecipeBuilder
public "getSolderMultiplier"(): integer
public "heraclesQuest"(string0: string): $GTRecipeBuilder
public "heraclesQuest"(string0: string, boolean1: boolean): $GTRecipeBuilder
public "hideDuration"(boolean0: boolean): $GTRecipeBuilder
public "id"(resourceLocation0: $ResourceLocation$$Type): $GTRecipeBuilder
public "input"<T>(recipeCapability0: $RecipeCapability$$Type<T>, t1: T): $GTRecipeBuilder
public "input"<T>(recipeCapability0: $RecipeCapability$$Type<T>, ...t1s: T[]): $GTRecipeBuilder
public "inputCWU"(int0: integer): $GTRecipeBuilder
public "inputEU"(long0: long, long1: long): $GTRecipeBuilder
public "inputEU"(long0: long): $GTRecipeBuilder
public "inputFluids"(material0: $Material$$Type, int1: integer): $GTRecipeBuilder
public "inputFluids"(fluidStack0: $FluidStack$$Type): $GTRecipeBuilder
public "inputFluids"(...fluidStack0s: $FluidStack$$Type[]): $GTRecipeBuilder
public "inputFluids"(...fluidIngredient0s: $FluidIngredient$$Type[]): $GTRecipeBuilder
public "inputFluidsRanged"(fluidStack0: $FluidStack$$Type, intProvider1: $IntProvider$$Type): $GTRecipeBuilder
public "inputFluidsRanged"(intProviderFluidIngredient0: $IntProviderFluidIngredient$$Type): $GTRecipeBuilder
public "inputItemNbtPredicate"(itemStack0: $ItemStack$$Type, nBTPredicate1: $NBTPredicate$$Type): $GTRecipeBuilder
public "inputItemRanged"(intProviderIngredient0: $IntProviderIngredient$$Type): $GTRecipeBuilder
public "inputItems"(materialEntry0: $MaterialEntry$$Type): $GTRecipeBuilder
public "inputItems"(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type): $GTRecipeBuilder
public "inputItems"(supplier0: $Supplier$$Type<$Item>, int1: integer): $GTRecipeBuilder
public "inputItems"(supplier0: $Supplier$$Type<$Item>): $GTRecipeBuilder
public "inputItems"(item0: $Item$$Type): $GTRecipeBuilder
public "inputItems"(itemStack0: $ItemStack$$Type): $GTRecipeBuilder
public "inputItems"(machineDefinition0: $MachineDefinition$$Type, int1: integer): $GTRecipeBuilder
public "inputItems"(machineDefinition0: $MachineDefinition$$Type): $GTRecipeBuilder
public "inputItems"(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type, int2: integer): $GTRecipeBuilder
public "inputItems"(materialEntry0: $MaterialEntry$$Type, int1: integer): $GTRecipeBuilder
public "inputItems"(ingredient0: $Ingredient$$Type, int1: integer): $GTRecipeBuilder
public "inputItems"(...ingredient0s: $Ingredient$$Type[]): $GTRecipeBuilder
public "inputItems"(ingredient0: $Ingredient$$Type): $GTRecipeBuilder
public "inputItems"(object0: any, int1: integer): $GTRecipeBuilder
public "inputItems"(object0: any): $GTRecipeBuilder
public "inputItems"(tagKey0: $TagKey$$Type<$Item$$Type>): $GTRecipeBuilder
public "inputItems"(item0: $Item$$Type, int1: integer): $GTRecipeBuilder
public "inputItems"(...itemStack0s: $ItemStack$$Type[]): $GTRecipeBuilder
public "inputItems"(tagKey0: $TagKey$$Type<$Item$$Type>, int1: integer): $GTRecipeBuilder
public "inputItemsRanged"(item0: $Item$$Type, intProvider1: $IntProvider$$Type): $GTRecipeBuilder
public "inputItemsRanged"(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type, intProvider2: $IntProvider$$Type): $GTRecipeBuilder
public "inputItemsRanged"(supplier0: $Supplier$$Type<$ItemLike>, intProvider1: $IntProvider$$Type): $GTRecipeBuilder
public "inputItemsRanged"(machineDefinition0: $MachineDefinition$$Type, intProvider1: $IntProvider$$Type): $GTRecipeBuilder
public "inputItemsRanged"(itemStack0: $ItemStack$$Type, intProvider1: $IntProvider$$Type): $GTRecipeBuilder
public "maxChance"(int0: integer): $GTRecipeBuilder
public "notConsumable"(supplier0: $Supplier$$Type<$Item>): $GTRecipeBuilder
public "notConsumable"(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type): $GTRecipeBuilder
public "notConsumable"(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type, int2: integer): $GTRecipeBuilder
public "notConsumable"(itemStack0: $ItemStack$$Type): $GTRecipeBuilder
public "notConsumable"(ingredient0: $Ingredient$$Type): $GTRecipeBuilder
public "notConsumable"(item0: $Item$$Type): $GTRecipeBuilder
public "notConsumableFluid"(fluidStack0: $FluidStack$$Type): $GTRecipeBuilder
public "notConsumableFluid"(fluidIngredient0: $FluidIngredient$$Type): $GTRecipeBuilder
public static "of"(resourceLocation0: $ResourceLocation$$Type, gTRecipeType1: $GTRecipeType$$Type): $GTRecipeBuilder
public static "ofRaw"(): $GTRecipeBuilder
public "onSave"(biConsumer0: $BiConsumer$$Type<$GTRecipeBuilder$$Type, $Consumer$$Type<$FinishedRecipe$$Type>>): $GTRecipeBuilder
public "output"<T>(recipeCapability0: $RecipeCapability$$Type<T>, ...t1s: T[]): $GTRecipeBuilder
public "output"<T>(recipeCapability0: $RecipeCapability$$Type<T>, t1: T): $GTRecipeBuilder
public "outputCWU"(int0: integer): $GTRecipeBuilder
public "outputEU"(long0: long): $GTRecipeBuilder
public "outputEU"(long0: long, long1: long): $GTRecipeBuilder
public "outputFluids"(...fluidIngredient0s: $FluidIngredient$$Type[]): $GTRecipeBuilder
public "outputFluids"(fluidStack0: $FluidStack$$Type): $GTRecipeBuilder
public "outputFluids"(...fluidStack0s: $FluidStack$$Type[]): $GTRecipeBuilder
public "outputFluidsRanged"(intProviderFluidIngredient0: $IntProviderFluidIngredient$$Type): $GTRecipeBuilder
public "outputFluidsRanged"(fluidStack0: $FluidStack$$Type, intProvider1: $IntProvider$$Type): $GTRecipeBuilder
public "outputItemRanged"(intProviderIngredient0: $IntProviderIngredient$$Type): $GTRecipeBuilder
public "outputItems"(materialEntry0: $MaterialEntry$$Type): $GTRecipeBuilder
public "outputItems"(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type, int2: integer): $GTRecipeBuilder
public "outputItems"(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type): $GTRecipeBuilder
public "outputItems"(supplier0: $Supplier$$Type<$ItemLike>, int1: integer): $GTRecipeBuilder
public "outputItems"(materialEntry0: $MaterialEntry$$Type, int1: integer): $GTRecipeBuilder
public "outputItems"(machineDefinition0: $MachineDefinition$$Type): $GTRecipeBuilder
public "outputItems"(machineDefinition0: $MachineDefinition$$Type, int1: integer): $GTRecipeBuilder
public "outputItems"(object0: any, int1: integer): $GTRecipeBuilder
public "outputItems"(itemStack0: $ItemStack$$Type): $GTRecipeBuilder
public "outputItems"(object0: any): $GTRecipeBuilder
public "outputItems"(item0: $Item$$Type, int1: integer): $GTRecipeBuilder
public "outputItems"(item0: $Item$$Type): $GTRecipeBuilder
public "outputItems"(supplier0: $Supplier$$Type<$ItemLike>): $GTRecipeBuilder
public "outputItems"(...itemStack0s: $ItemStack$$Type[]): $GTRecipeBuilder
public "outputItemsRanged"(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type, intProvider2: $IntProvider$$Type): $GTRecipeBuilder
public "outputItemsRanged"(machineDefinition0: $MachineDefinition$$Type, intProvider1: $IntProvider$$Type): $GTRecipeBuilder
public "outputItemsRanged"(itemStack0: $ItemStack$$Type, intProvider1: $IntProvider$$Type): $GTRecipeBuilder
public "outputItemsRanged"(item0: $Item$$Type, intProvider1: $IntProvider$$Type): $GTRecipeBuilder
public "outputItemsRanged"(supplier0: $Supplier$$Type<$ItemLike>, intProvider1: $IntProvider$$Type): $GTRecipeBuilder
public "perTick"(boolean0: boolean): $GTRecipeBuilder
public "posY"(int0: integer, int1: integer, boolean2: boolean): $GTRecipeBuilder
public "posY"(int0: integer, int1: integer): $GTRecipeBuilder
public "rain"(float0: float): $GTRecipeBuilder
public "rain"(float0: float, boolean1: boolean): $GTRecipeBuilder
public "recipeType"(gTRecipeType0: $GTRecipeType$$Type): $GTRecipeBuilder
public "removePreviousMaterialInfo"(): $GTRecipeBuilder
public "researchRecipeEntries"(): $Collection<$GTRecipeBuilder$ResearchRecipeEntry>
public "researchScan"(boolean0: boolean): $GTRecipeBuilder
public "researchWithoutRecipe"(string0: string, itemStack1: $ItemStack$$Type): $GTRecipeBuilder
public "researchWithoutRecipe"(string0: string): $GTRecipeBuilder
public "save"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>): void
public "scannerResearch"(unaryOperator0: $UnaryOperator$$Type<$ResearchRecipeBuilder$ScannerRecipeBuilder$$Type>): $GTRecipeBuilder
public "scannerResearch"(itemStack0: $ItemStack$$Type): $GTRecipeBuilder
public "setTempFluidMaterialStacks"(list0: $List$$Type<$MaterialStack$$Type>): $GTRecipeBuilder
public "setTempItemMaterialStacks"(list0: $List$$Type<$MaterialStack$$Type>): $GTRecipeBuilder
public "setTempItemStacks"(list0: $List$$Type<$ItemStack$$Type>): $GTRecipeBuilder
public "solderMultiplier"(int0: integer): $GTRecipeBuilder
public "stationResearch"(unaryOperator0: $UnaryOperator$$Type<$ResearchRecipeBuilder$StationRecipeBuilder$$Type>): $GTRecipeBuilder
public "thunder"(float0: float): $GTRecipeBuilder
public "thunder"(float0: float, boolean1: boolean): $GTRecipeBuilder
public "tierChanceBoost"(int0: integer): $GTRecipeBuilder
public "toJson"(jsonObject0: $JsonObject$$Type): void
public "totalCWU"(int0: integer): $GTRecipeBuilder
get "data"(): $CompoundTag
set "data"(value: $CompoundTag$$Type)
get "recipeCategory"(): $GTRecipeCategory
set "recipeCategory"(value: $GTRecipeCategory$$Type)
set "tempFluidMaterialStacks"(value: $List$$Type<$MaterialStack$$Type>)
set "tempItemMaterialStacks"(value: $List$$Type<$MaterialStack$$Type>)
set "tempItemStacks"(value: $List$$Type<$ItemStack$$Type>)
}
}

declare module "com.gregtechceu.gtceu.data.model.builder.MachineModelBuilder$PartBuilder" {
import { $JsonObject } from "com.google.gson.JsonObject"
import { $List } from "java.util.List"
import { $MachineDefinition$$Type } from "com.gregtechceu.gtceu.api.machine.MachineDefinition"
import { $MachineModelBuilder$PartBuilder$ConditionGroup } from "com.gregtechceu.gtceu.data.model.builder.MachineModelBuilder$PartBuilder$ConditionGroup"
import { $BlockStateProvider$ConfiguredModelList, $BlockStateProvider$ConfiguredModelList$$Type } from "net.minecraftforge.client.model.generators.BlockStateProvider$ConfiguredModelList"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Property, $Property$$Type } from "net.minecraft.world.level.block.state.properties.Property"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $MachineModelBuilder } from "com.gregtechceu.gtceu.data.model.builder.MachineModelBuilder"

export class $MachineModelBuilder$PartBuilder {
readonly "conditions": $Multimap<$Property<any>, $Comparable<any>>
readonly "nestedConditionGroups": $List<$MachineModelBuilder$PartBuilder$ConditionGroup<>>
"useOr": boolean

public "canApplyTo"(machineDefinition0: $MachineDefinition$$Type): boolean
public "condition"<T extends $Comparable<T>>(property0: $Property$$Type<T>, ...t1s: T[]): $MachineModelBuilder$PartBuilder<>
public "end"(): $MachineModelBuilder<T>
public "nestedGroup"(): $MachineModelBuilder$PartBuilder$ConditionGroup<>
public "toJson"(): $JsonObject
public "useOr"(): $MachineModelBuilder$PartBuilder<>
get "models"(): $BlockStateProvider$ConfiguredModelList
set "models"(value: $BlockStateProvider$ConfiguredModelList$$Type)
}
}

declare module "com.gregtechceu.gtceu.data.recipe.builder.GTRecipeBuilder$ResearchRecipeEntry" {
import { $EnergyStack, $EnergyStack$$Type } from "com.gregtechceu.gtceu.api.recipe.ingredient.EnergyStack"
import { $FluidStack, $FluidStack$$Type } from "net.minecraftforge.fluids.FluidStack"
import { $Record } from "java.lang.Record"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $GTRecipeBuilder$ResearchRecipeEntry extends $Record {
constructor(researchId: string, researchItem: $ItemStack$$Type, researchFluid: $FluidStack$$Type, dataStack: $ItemStack$$Type, duration: integer, EUt: $EnergyStack$$Type, CWUt: integer)

public "CWUt"(): integer
public "EUt"(): $EnergyStack
public "dataStack"(): $ItemStack
public "duration"(): integer
public "researchFluid"(): $FluidStack
public "researchId"(): string
public "researchItem"(): $ItemStack
}
}

declare module "com.gregtechceu.gtceu.data.pack.event.RegisterDynamicResourcesEvent" {
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $RegisterDynamicResourcesEvent extends $Event implements $IModBusEvent {
constructor()

}
}

declare module "com.gregtechceu.gtceu.data.model.builder.MachineModelBuilder$PartBuilder$ConditionGroup" {
import { $JsonObject } from "com.google.gson.JsonObject"
import { $List } from "java.util.List"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $MachineModelBuilder$PartBuilder, $MachineModelBuilder$PartBuilder$$Type } from "com.gregtechceu.gtceu.data.model.builder.MachineModelBuilder$PartBuilder"
import { $Property, $Property$$Type } from "net.minecraft.world.level.block.state.properties.Property"
import { $Multimap } from "com.google.common.collect.Multimap"

export class $MachineModelBuilder$PartBuilder$ConditionGroup {
readonly "conditions": $Multimap<$Property<any>, $Comparable<any>>
readonly "nestedConditionGroups": $List<$MachineModelBuilder$PartBuilder$ConditionGroup<>>
"useOr": boolean

constructor(partBuilder0: $MachineModelBuilder$PartBuilder$$Type)

public "condition"<T extends $Comparable<T>>(property0: $Property$$Type<T>, ...t1s: T[]): $MachineModelBuilder$PartBuilder$ConditionGroup<>
public "end"(): $MachineModelBuilder$PartBuilder<>
public "endNestedGroup"(): $MachineModelBuilder$PartBuilder$ConditionGroup<>
public "nestedGroup"(): $MachineModelBuilder$PartBuilder$ConditionGroup<>
public "toJson"(): $JsonObject
public "useOr"(): $MachineModelBuilder$PartBuilder$ConditionGroup<>
}
}

