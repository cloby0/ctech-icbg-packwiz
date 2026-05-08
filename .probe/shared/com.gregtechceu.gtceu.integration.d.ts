declare module "com.gregtechceu.gtceu.integration.kjs.events.GTFluidVeinEventJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $BedrockFluidDefinition$Builder$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.bedrockfluid.BedrockFluidDefinition$Builder"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $BedrockFluidDefinition$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.bedrockfluid.BedrockFluidDefinition"

export class $GTFluidVeinEventJS extends $EventJS {
constructor()

public "add"(resourceLocation0: $ResourceLocation$$Type, consumer1: $Consumer$$Type<$BedrockFluidDefinition$Builder$$Type>): void
public "modify"(resourceLocation0: $ResourceLocation$$Type, consumer1: $Consumer$$Type<$BedrockFluidDefinition$$Type>): void
public "remove"(resourceLocation0: $ResourceLocation$$Type): void
}
}

declare module "com.gregtechceu.gtceu.integration.kjs.recipe.components.GTRecipeComponents$FluidIngredientJS" {
import { $FluidLike$$Type } from "dev.latvian.mods.kubejs.fluid.FluidLike"
import { $InputReplacementTransformer$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacementTransformer"
import { $FluidIngredient, $FluidIngredient$$Type } from "com.gregtechceu.gtceu.api.recipe.ingredient.FluidIngredient"
import { $OutputReplacementTransformer$Replacement } from "dev.latvian.mods.kubejs.recipe.OutputReplacementTransformer$Replacement"
import { $OutputFluid } from "dev.latvian.mods.kubejs.fluid.OutputFluid"
import { $Record } from "java.lang.Record"
import { $OutputReplacementTransformer$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacementTransformer"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $RecipeJS$$Type } from "dev.latvian.mods.kubejs.recipe.RecipeJS"
import { $InputReplacementTransformer$Replacement } from "dev.latvian.mods.kubejs.recipe.InputReplacementTransformer$Replacement"
import { $FluidStack$$Type } from "net.minecraftforge.fluids.FluidStack"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $InputFluid } from "dev.latvian.mods.kubejs.fluid.InputFluid"

export class $GTRecipeComponents$FluidIngredientJS extends $Record implements $InputFluid, $OutputFluid {
constructor(fluidStack0: $FluidStack$$Type)
constructor(tagKey0: $TagKey$$Type<$Fluid$$Type>, int1: integer, compoundTag2: $CompoundTag$$Type)
constructor(fluid0: $Fluid$$Type, int1: integer, compoundTag2: $CompoundTag$$Type)
constructor(ingredient: $FluidIngredient$$Type)

public "copy"(long0: long): $GTRecipeComponents$FluidIngredientJS
public "getAmount"(): long
public "ingredient"(): $FluidIngredient
public "isEmpty"(): boolean
public "matches"(fluidLike0: $FluidLike$$Type): boolean
public static "of"(object0: any): $GTRecipeComponents$FluidIngredientJS
public "replaceInput"(recipe: $RecipeJS$$Type, match: $ReplacementMatch$$Type, original: $InputReplacement$$Type): any
public "replaceOutput"(recipe: $RecipeJS$$Type, match: $ReplacementMatch$$Type, original: $OutputReplacement$$Type): any
public "transform"(transformer: $InputReplacementTransformer$$Type): $InputReplacementTransformer$Replacement
public "transform"(transformer: $OutputReplacementTransformer$$Type): $OutputReplacementTransformer$Replacement
get "amount"(): long
get "empty"(): boolean
}
}

declare module "com.gregtechceu.gtceu.integration.kjs.events.RegisterCapesEventJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $RegisterGTCapesEvent$$Type } from "com.gregtechceu.gtceu.api.cosmetics.event.RegisterGTCapesEvent"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $UUID$$Type } from "java.util.UUID"

/** Invoked when the server is first loaded. */
export class $RegisterCapesEventJS extends $EventJS {
constructor(registerGTCapesEvent0: $RegisterGTCapesEvent$$Type)

/**
 * Registers a cape.
 * 
 * @param id - An identifier for the cape
 * @param texture - The full path to the cape's texture in a resource pack
 */
public "registerCape"(id: $ResourceLocation$$Type, texture: $ResourceLocation$$Type): void
/**
 * Registers a cape that will always be unlocked for all players.
 * 
 * @param id - An identifier for the cape
 * @param texture - The full path to the cape's texture in a resource pack
 */
public "registerFreeCape"(id: $ResourceLocation$$Type, texture: $ResourceLocation$$Type): void
/**
 * Automatically makes a cape available to a player.
 * 
 * @param owner - The UUID of the player to give the cape to.
 * @param capeId - The cape to give
 */
public "unlockCapeFor"(owner: $UUID$$Type, capeId: $ResourceLocation$$Type): void
}
}

declare module "com.gregtechceu.gtceu.integration.kjs.events.CraftingComponentsEventJS$ComponentWrapper" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $TagPrefix$$Type } from "com.gregtechceu.gtceu.api.data.tag.TagPrefix"
import { $MaterialEntry$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.stack.MaterialEntry"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $CraftingComponent } from "com.gregtechceu.gtceu.data.recipe.CraftingComponent"

export class $CraftingComponentsEventJS$ComponentWrapper extends $CraftingComponent {
public "add"(int0: integer, object1: any): $CraftingComponentsEventJS$ComponentWrapper
public "addItem"(int0: integer, itemStack1: $ItemStack$$Type): $CraftingComponentsEventJS$ComponentWrapper
public "addMaterialEntry"(int0: integer, materialEntry1: $MaterialEntry$$Type): $CraftingComponentsEventJS$ComponentWrapper
public "addMaterialEntry"(int0: integer, tagPrefix1: $TagPrefix$$Type, material2: $Material$$Type): $CraftingComponentsEventJS$ComponentWrapper
public "addTag"(int0: integer, resourceLocation1: $ResourceLocation$$Type): $CraftingComponentsEventJS$ComponentWrapper
public static "of"(string0: string, object1: any): $CraftingComponentsEventJS$ComponentWrapper
}
}

declare module "com.gregtechceu.gtceu.integration.kjs.helpers.MachineModifiers" {
import { $RecipeModifier } from "com.gregtechceu.gtceu.api.recipe.modifier.RecipeModifier"

export class $MachineModifiers {
static "FUSION_REACTOR": $RecipeModifier
static "LARGE_BOILER": $RecipeModifier
static "LARGE_COMBUSTION_ENGINE": $RecipeModifier
static "LARGE_TURBINE": $RecipeModifier
static "SIMPLE_GENERATOR": $RecipeModifier
static "SIMPLE_STEAM": $RecipeModifier
static "STEAM_BOILER": $RecipeModifier
static "STEAM_PARALLEL_MULTIBLOCK": $RecipeModifier

constructor()

}
}

declare module "com.gregtechceu.gtceu.integration.kjs.events.GTBedrockOreVeinEventJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $BedrockOreDefinition$Builder$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.bedrockore.BedrockOreDefinition$Builder"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $BedrockOreDefinition$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.bedrockore.BedrockOreDefinition"

export class $GTBedrockOreVeinEventJS extends $EventJS {
constructor()

public "add"(resourceLocation0: $ResourceLocation$$Type, consumer1: $Consumer$$Type<$BedrockOreDefinition$Builder$$Type>): void
public "modify"(resourceLocation0: $ResourceLocation$$Type, consumer1: $Consumer$$Type<$BedrockOreDefinition$$Type>): void
public "remove"(resourceLocation0: $ResourceLocation$$Type): void
}
}

declare module "com.gregtechceu.gtceu.integration.kjs.helpers.MachineConstructors" {
import { $MultiblockControllerMachine } from "com.gregtechceu.gtceu.api.machine.multiblock.MultiblockControllerMachine"
import { $IMachineBlockEntity$$Type } from "com.gregtechceu.gtceu.api.machine.IMachineBlockEntity"

export class $MachineConstructors {
constructor()

public static "createFusionReactor"(iMachineBlockEntity0: $IMachineBlockEntity$$Type, int1: integer): $MultiblockControllerMachine
public static "createLargeCombustionEngine"(iMachineBlockEntity0: $IMachineBlockEntity$$Type, int1: integer): $MultiblockControllerMachine
public static "createLargeTurbine"(iMachineBlockEntity0: $IMachineBlockEntity$$Type, int1: integer): $MultiblockControllerMachine
public static "createSteamMultiblock"(iMachineBlockEntity0: $IMachineBlockEntity$$Type, int1: integer): $MultiblockControllerMachine
}
}

declare module "com.gregtechceu.gtceu.integration.kjs.events.MaterialModificationEventJS" {
import { $StartupEventJS } from "dev.latvian.mods.kubejs.event.StartupEventJS"

export class $MaterialModificationEventJS extends $StartupEventJS {
constructor()

}
}

declare module "com.gregtechceu.gtceu.integration.kjs.recipe.GTShapedRecipeSchema$ShapedRecipeJS" {
import { $RecipeJS } from "dev.latvian.mods.kubejs.recipe.RecipeJS"

export class $GTShapedRecipeSchema$ShapedRecipeJS extends $RecipeJS {
constructor()

public "addMaterialInfo"(): $GTShapedRecipeSchema$ShapedRecipeJS
public "getMod"(): string
public "isAddMaterialInfo"(): boolean
get "mod"(): string
}
}

declare module "com.gregtechceu.gtceu.integration.kjs.events.GTRegistryEventJS" {
import { $BuilderBase } from "com.gregtechceu.gtceu.api.registry.registrate.BuilderBase"
import { $GTRegistryInfo$$Type } from "com.gregtechceu.gtceu.integration.kjs.GTRegistryInfo"
import { $StartupEventJS } from "dev.latvian.mods.kubejs.event.StartupEventJS"

export class $GTRegistryEventJS<K = any, V = any> extends $StartupEventJS {
constructor(gTRegistryInfo0: $GTRegistryInfo$$Type<K, V>)

public "create"(string0: string, string1: string): $BuilderBase<V>
public "create"(string0: string): $BuilderBase<V>
}
}

declare module "com.gregtechceu.gtceu.integration.kjs.recipe.GTRecipeSchema$GTRecipeJS" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $TagPrefix$$Type } from "com.gregtechceu.gtceu.api.data.tag.TagPrefix"
import { $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $Biome } from "net.minecraft.world.level.biome.Biome"
import { $GTRecipeCategory$$Type } from "com.gregtechceu.gtceu.api.recipe.category.GTRecipeCategory"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $FluidStackJS$$Type } from "dev.latvian.mods.kubejs.fluid.FluidStackJS"
import { $ResearchRecipeBuilder$StationRecipeBuilder$$Type } from "com.gregtechceu.gtceu.api.recipe.ResearchRecipeBuilder$StationRecipeBuilder"
import { $RecipeCondition$$Type } from "com.gregtechceu.gtceu.api.recipe.RecipeCondition"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $GTRecipeBuilder$ResearchRecipeEntry } from "com.gregtechceu.gtceu.data.recipe.builder.GTRecipeBuilder$ResearchRecipeEntry"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $MaterialStack, $MaterialStack$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.stack.MaterialStack"
import { $CleanroomType$$Type } from "com.gregtechceu.gtceu.api.machine.multiblock.CleanroomType"
import { $EnergyStack$$Type } from "com.gregtechceu.gtceu.api.recipe.ingredient.EnergyStack"
import { $InputItem$$Type } from "dev.latvian.mods.kubejs.item.InputItem"
import { $Collection } from "java.util.Collection"
import { $ChanceLogic$$Type } from "com.gregtechceu.gtceu.api.recipe.chance.logic.ChanceLogic"
import { $MedicalCondition$$Type } from "com.gregtechceu.gtceu.api.data.medicalcondition.MedicalCondition"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $RecipeCapability$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability"
import { $ExtendedOutputItem$$Type } from "com.gregtechceu.gtceu.integration.kjs.recipe.components.ExtendedOutputItem"
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $ResearchRecipeBuilder$ScannerRecipeBuilder$$Type } from "com.gregtechceu.gtceu.api.recipe.ResearchRecipeBuilder$ScannerRecipeBuilder"
import { $GTRecipeComponents$FluidIngredientJS$$Type } from "com.gregtechceu.gtceu.integration.kjs.recipe.components.GTRecipeComponents$FluidIngredientJS"
import { $List, $List$$Type } from "java.util.List"
import { $RecipeJS } from "dev.latvian.mods.kubejs.recipe.RecipeJS"
import { $MachineDefinition$$Type } from "com.gregtechceu.gtceu.api.machine.MachineDefinition"
import { $EnergyStack$WithIO$$Type } from "com.gregtechceu.gtceu.api.recipe.ingredient.EnergyStack$WithIO"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $MaterialEntry$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.stack.MaterialEntry"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $NBTPredicate$$Type } from "com.gregtechceu.gtceu.api.recipe.ingredient.nbtpredicate.NBTPredicate"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"

export class $GTRecipeSchema$GTRecipeJS extends $RecipeJS {
"chance": integer
"maxChance": integer
"onSave": $Consumer<$GTRecipeSchema$GTRecipeJS>
"perTick": boolean
"tierChanceBoost": integer

constructor()

public "CWUt"(int0: integer): $GTRecipeSchema$GTRecipeJS
public "EUt"(withIO0: $EnergyStack$WithIO$$Type): $GTRecipeSchema$GTRecipeJS
public "EUt"(long0: long, long1: long): $GTRecipeSchema$GTRecipeJS
public "addCondition"(recipeCondition0: $RecipeCondition$$Type): $GTRecipeSchema$GTRecipeJS
public "addData"(string0: string, tag1: $Tag$$Type): $GTRecipeSchema$GTRecipeJS
public "addDataBool"(string0: string, boolean1: boolean): $GTRecipeSchema$GTRecipeJS
public "addDataNumber"(string0: string, double1: double): $GTRecipeSchema$GTRecipeJS
public "addDataString"(string0: string, string1: string): $GTRecipeSchema$GTRecipeJS
public "addMaterialInfo"(boolean0: boolean, boolean1: boolean): $GTRecipeSchema$GTRecipeJS
public "addMaterialInfo"(boolean0: boolean): $GTRecipeSchema$GTRecipeJS
public "adjacentBlockTag"(boolean0: boolean, ...resourceLocation1s: $ResourceLocation$$Type[]): $GTRecipeSchema$GTRecipeJS
public "adjacentBlockTag"(...resourceLocation0s: $ResourceLocation$$Type[]): $GTRecipeSchema$GTRecipeJS
public "adjacentBlocks"(...block0s: $Block$$Type[]): $GTRecipeSchema$GTRecipeJS
public "adjacentBlocks"(boolean0: boolean, ...block1s: $Block$$Type[]): $GTRecipeSchema$GTRecipeJS
public "adjacentFluidTag"(boolean0: boolean, ...resourceLocation1s: $ResourceLocation$$Type[]): $GTRecipeSchema$GTRecipeJS
public "adjacentFluidTag"(...resourceLocation0s: $ResourceLocation$$Type[]): $GTRecipeSchema$GTRecipeJS
public "adjacentFluids"(boolean0: boolean, ...fluid1s: $Fluid$$Type[]): $GTRecipeSchema$GTRecipeJS
public "adjacentFluids"(...fluid0s: $Fluid$$Type[]): $GTRecipeSchema$GTRecipeJS
public "biome"(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean): $GTRecipeSchema$GTRecipeJS
public "biome"(resourceKey0: $ResourceKey$$Type<$Biome>, boolean1: boolean): $GTRecipeSchema$GTRecipeJS
public "biome"(resourceKey0: $ResourceKey$$Type<$Biome>): $GTRecipeSchema$GTRecipeJS
public "biome"(resourceLocation0: $ResourceLocation$$Type): $GTRecipeSchema$GTRecipeJS
public "biomeTag"(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean): $GTRecipeSchema$GTRecipeJS
public "biomeTag"(resourceLocation0: $ResourceLocation$$Type): $GTRecipeSchema$GTRecipeJS
public "blastFurnaceTemp"(int0: integer): $GTRecipeSchema$GTRecipeJS
public "category"(gTRecipeCategory0: $GTRecipeCategory$$Type): $GTRecipeSchema$GTRecipeJS
public "chance"(int0: integer): $GTRecipeSchema$GTRecipeJS
public "chancedFluidInput"(fluidIngredientJS0: $GTRecipeComponents$FluidIngredientJS$$Type, int1: integer, int2: integer): $GTRecipeSchema$GTRecipeJS
public "chancedFluidInputLogic"(chanceLogic0: $ChanceLogic$$Type): $GTRecipeSchema$GTRecipeJS
public "chancedFluidOutput"(fluidStackJS0: $FluidStackJS$$Type, int1: integer, int2: integer): $GTRecipeSchema$GTRecipeJS
public "chancedFluidOutput"(fluidStackJS0: $FluidStackJS$$Type, string1: string, int2: integer): $GTRecipeSchema$GTRecipeJS
public "chancedFluidOutputLogic"(chanceLogic0: $ChanceLogic$$Type): $GTRecipeSchema$GTRecipeJS
public "chancedInput"(inputItem0: $InputItem$$Type, int1: integer, int2: integer): $GTRecipeSchema$GTRecipeJS
public "chancedInputLogic"(recipeCapability0: $RecipeCapability$$Type<any>, chanceLogic1: $ChanceLogic$$Type): $GTRecipeSchema$GTRecipeJS
public "chancedItemInputLogic"(chanceLogic0: $ChanceLogic$$Type): $GTRecipeSchema$GTRecipeJS
public "chancedItemOutputLogic"(chanceLogic0: $ChanceLogic$$Type): $GTRecipeSchema$GTRecipeJS
public "chancedOutput"(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type, int2: integer, int3: integer): $GTRecipeSchema$GTRecipeJS
public "chancedOutput"(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type, int2: integer, string3: string, int4: integer): $GTRecipeSchema$GTRecipeJS
public "chancedOutput"(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type, int2: integer, int3: integer, int4: integer): $GTRecipeSchema$GTRecipeJS
public "chancedOutput"(extendedOutputItem0: $ExtendedOutputItem$$Type, string1: string, int2: integer): $GTRecipeSchema$GTRecipeJS
public "chancedOutput"(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type, string2: string, int3: integer): $GTRecipeSchema$GTRecipeJS
public "chancedOutput"(extendedOutputItem0: $ExtendedOutputItem$$Type, int1: integer, int2: integer): $GTRecipeSchema$GTRecipeJS
public "chancedOutputLogic"(recipeCapability0: $RecipeCapability$$Type<any>, chanceLogic1: $ChanceLogic$$Type): $GTRecipeSchema$GTRecipeJS
public "chancedTickInputLogic"(recipeCapability0: $RecipeCapability$$Type<any>, chanceLogic1: $ChanceLogic$$Type): $GTRecipeSchema$GTRecipeJS
public "chancedTickOutputLogic"(recipeCapability0: $RecipeCapability$$Type<any>, chanceLogic1: $ChanceLogic$$Type): $GTRecipeSchema$GTRecipeJS
public "circuit"(int0: integer): $GTRecipeSchema$GTRecipeJS
public "cleanroom"(cleanroomType0: $CleanroomType$$Type): $GTRecipeSchema$GTRecipeJS
public "daytime"(): $GTRecipeSchema$GTRecipeJS
public "daytime"(boolean0: boolean): $GTRecipeSchema$GTRecipeJS
public "dimension"(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean): $GTRecipeSchema$GTRecipeJS
public "dimension"(resourceLocation0: $ResourceLocation$$Type): $GTRecipeSchema$GTRecipeJS
public "disableDistilleryRecipes"(boolean0: boolean): $GTRecipeSchema$GTRecipeJS
public "durationIsTotalCWU"(boolean0: boolean): $GTRecipeSchema$GTRecipeJS
public "environmentalHazard"(medicalCondition0: $MedicalCondition$$Type, boolean1: boolean): $GTRecipeSchema$GTRecipeJS
public "environmentalHazard"(medicalCondition0: $MedicalCondition$$Type): $GTRecipeSchema$GTRecipeJS
public "explosivesAmount"(int0: integer): $GTRecipeSchema$GTRecipeJS
public "explosivesType"(itemStack0: $ItemStack$$Type): $GTRecipeSchema$GTRecipeJS
public "ftbQuest"(string0: string): $GTRecipeSchema$GTRecipeJS
public "ftbQuest"(string0: string, boolean1: boolean): $GTRecipeSchema$GTRecipeJS
public "fusionStartEU"(long0: long): $GTRecipeSchema$GTRecipeJS
public "gameStage"(string0: string, boolean1: boolean): $GTRecipeSchema$GTRecipeJS
public "gameStage"(string0: string): $GTRecipeSchema$GTRecipeJS
public "getMod"(): string
public "heraclesQuest"(string0: string): $GTRecipeSchema$GTRecipeJS
public "heraclesQuest"(string0: string, boolean1: boolean): $GTRecipeSchema$GTRecipeJS
public "hideDuration"(boolean0: boolean): $GTRecipeSchema$GTRecipeJS
public "idWithoutType"(): $ResourceLocation
public "input"<T>(recipeCapability0: $RecipeCapability$$Type<T>, ...object1s: any[]): $GTRecipeSchema$GTRecipeJS
public "inputCWU"(int0: integer): $GTRecipeSchema$GTRecipeJS
public "inputEU"(energyStack0: $EnergyStack$$Type): $GTRecipeSchema$GTRecipeJS
public "inputEU"(long0: long, long1: long): $GTRecipeSchema$GTRecipeJS
public "inputFluids"(...fluidIngredientJS0s: $GTRecipeComponents$FluidIngredientJS$$Type[]): $GTRecipeSchema$GTRecipeJS
public "inputFluidsRanged"(fluidStackJS0: $FluidStackJS$$Type, intProvider1: $IntProvider$$Type): $GTRecipeSchema$GTRecipeJS
public "inputFluidsRanged"(fluidStackJS0: $FluidStackJS$$Type, int1: integer, int2: integer): $GTRecipeSchema$GTRecipeJS
public "inputItemNbtPredicate"(itemStack0: $ItemStack$$Type, nBTPredicate1: $NBTPredicate$$Type): $GTRecipeSchema$GTRecipeJS
public "inputItems"(machineDefinition0: $MachineDefinition$$Type, int1: integer): $GTRecipeSchema$GTRecipeJS
public "inputItems"(supplier0: $Supplier$$Type<$Item>, int1: integer): $GTRecipeSchema$GTRecipeJS
public "inputItems"(supplier0: $Supplier$$Type<$Item>): $GTRecipeSchema$GTRecipeJS
public "inputItems"(item0: $Item$$Type): $GTRecipeSchema$GTRecipeJS
public "inputItems"(item0: $Item$$Type, int1: integer): $GTRecipeSchema$GTRecipeJS
public "inputItems"(materialEntry0: $MaterialEntry$$Type): $GTRecipeSchema$GTRecipeJS
public "inputItems"(materialEntry0: $MaterialEntry$$Type, int1: integer): $GTRecipeSchema$GTRecipeJS
public "inputItems"(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type, int2: integer): $GTRecipeSchema$GTRecipeJS
public "inputItems"(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type): $GTRecipeSchema$GTRecipeJS
public "inputItems"(machineDefinition0: $MachineDefinition$$Type): $GTRecipeSchema$GTRecipeJS
public "inputItems"(...inputItem0s: $InputItem$$Type[]): $GTRecipeSchema$GTRecipeJS
public "inputItems"(...itemStack0s: $ItemStack$$Type[]): $GTRecipeSchema$GTRecipeJS
public "inputItems"(tagKey0: $TagKey$$Type<$Item$$Type>, int1: integer): $GTRecipeSchema$GTRecipeJS
public "inputItemsRanged"(ingredient0: $Ingredient$$Type, int1: integer, int2: integer): $GTRecipeSchema$GTRecipeJS
public "inputItemsRanged"(itemStack0: $ItemStack$$Type, int1: integer, int2: integer): $GTRecipeSchema$GTRecipeJS
public "itemInput"(materialEntry0: $MaterialEntry$$Type): $GTRecipeSchema$GTRecipeJS
public "itemInput"(materialEntry0: $MaterialEntry$$Type, int1: integer): $GTRecipeSchema$GTRecipeJS
public "itemInputs"(...inputItem0s: $InputItem$$Type[]): $GTRecipeSchema$GTRecipeJS
public "itemInputsRanged"(extendedOutputItem0: $ExtendedOutputItem$$Type, int1: integer, int2: integer): $GTRecipeSchema$GTRecipeJS
public "itemInputsRanged"(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type, int2: integer, int3: integer): $GTRecipeSchema$GTRecipeJS
public "itemOutput"(materialEntry0: $MaterialEntry$$Type, int1: integer): $GTRecipeSchema$GTRecipeJS
public "itemOutput"(materialEntry0: $MaterialEntry$$Type): $GTRecipeSchema$GTRecipeJS
public "itemOutputs"(...extendedOutputItem0s: $ExtendedOutputItem$$Type[]): $GTRecipeSchema$GTRecipeJS
public "itemOutputsRanged"(extendedOutputItem0: $ExtendedOutputItem$$Type, int1: integer, int2: integer): $GTRecipeSchema$GTRecipeJS
public "maxChance"(int0: integer): $GTRecipeSchema$GTRecipeJS
public "notConsumable"(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type): $GTRecipeSchema$GTRecipeJS
public "notConsumable"(inputItem0: $InputItem$$Type): $GTRecipeSchema$GTRecipeJS
public "notConsumableFluid"(fluidIngredientJS0: $GTRecipeComponents$FluidIngredientJS$$Type): $GTRecipeSchema$GTRecipeJS
public "onSave"(consumer0: $Consumer$$Type<$GTRecipeSchema$GTRecipeJS$$Type>): $GTRecipeSchema$GTRecipeJS
public "output"<T>(recipeCapability0: $RecipeCapability$$Type<T>, ...object1s: any[]): $GTRecipeSchema$GTRecipeJS
public "outputCWU"(int0: integer): $GTRecipeSchema$GTRecipeJS
public "outputEU"(long0: long, long1: long): $GTRecipeSchema$GTRecipeJS
public "outputEU"(energyStack0: $EnergyStack$$Type): $GTRecipeSchema$GTRecipeJS
public "outputFluids"(...fluidStackJS0s: $FluidStackJS$$Type[]): $GTRecipeSchema$GTRecipeJS
public "outputFluidsRanged"(fluidStackJS0: $FluidStackJS$$Type, intProvider1: $IntProvider$$Type): $GTRecipeSchema$GTRecipeJS
public "outputFluidsRanged"(fluidStackJS0: $FluidStackJS$$Type, int1: integer, int2: integer): $GTRecipeSchema$GTRecipeJS
public "outputItems"(item0: $Item$$Type, int1: integer): $GTRecipeSchema$GTRecipeJS
public "outputItems"(machineDefinition0: $MachineDefinition$$Type): $GTRecipeSchema$GTRecipeJS
public "outputItems"(item0: $Item$$Type): $GTRecipeSchema$GTRecipeJS
public "outputItems"(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type): $GTRecipeSchema$GTRecipeJS
public "outputItems"(machineDefinition0: $MachineDefinition$$Type, int1: integer): $GTRecipeSchema$GTRecipeJS
public "outputItems"(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type, int2: integer): $GTRecipeSchema$GTRecipeJS
public "outputItems"(...extendedOutputItem0s: $ExtendedOutputItem$$Type[]): $GTRecipeSchema$GTRecipeJS
public "outputItemsRanged"(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type, int2: integer, int3: integer): $GTRecipeSchema$GTRecipeJS
public "outputItemsRanged"(itemStack0: $ItemStack$$Type, int1: integer, int2: integer): $GTRecipeSchema$GTRecipeJS
public "outputItemsRanged"(ingredient0: $Ingredient$$Type, int1: integer, int2: integer): $GTRecipeSchema$GTRecipeJS
public "perTick"(boolean0: boolean): $GTRecipeSchema$GTRecipeJS
public "posY"(int0: integer, int1: integer): $GTRecipeSchema$GTRecipeJS
public "posY"(int0: integer, int1: integer, boolean2: boolean): $GTRecipeSchema$GTRecipeJS
public "rain"(float0: float): $GTRecipeSchema$GTRecipeJS
public "rain"(float0: float, boolean1: boolean): $GTRecipeSchema$GTRecipeJS
public "removePreviousMaterialInfo"(): $GTRecipeSchema$GTRecipeJS
public "researchRecipeEntries"(): $Collection<$GTRecipeBuilder$ResearchRecipeEntry>
public "researchScan"(boolean0: boolean): $GTRecipeSchema$GTRecipeJS
public "researchWithoutRecipe"(string0: string, itemStack1: $ItemStack$$Type): $GTRecipeSchema$GTRecipeJS
public "researchWithoutRecipe"(string0: string): $GTRecipeSchema$GTRecipeJS
public "scannerResearch"(itemStack0: $ItemStack$$Type): $GTRecipeSchema$GTRecipeJS
public "scannerResearch"(unaryOperator0: $UnaryOperator$$Type<$ResearchRecipeBuilder$ScannerRecipeBuilder$$Type>): $GTRecipeSchema$GTRecipeJS
public "solderMultiplier"(int0: integer): $GTRecipeSchema$GTRecipeJS
public "stationResearch"(unaryOperator0: $UnaryOperator$$Type<$ResearchRecipeBuilder$StationRecipeBuilder$$Type>): $GTRecipeSchema$GTRecipeJS
public "thunder"(float0: float, boolean1: boolean): $GTRecipeSchema$GTRecipeJS
public "thunder"(float0: float): $GTRecipeSchema$GTRecipeJS
public "tierChanceBoost"(int0: integer): $GTRecipeSchema$GTRecipeJS
public "totalCWU"(int0: integer): $GTRecipeSchema$GTRecipeJS
get "fluidMaterialInfo"(): boolean
set "fluidMaterialInfo"(value: boolean)
get "fluidMaterialStacks"(): $List<$MaterialStack>
set "fluidMaterialStacks"(value: $List$$Type<$MaterialStack$$Type>)
get "itemMaterialInfo"(): boolean
set "itemMaterialInfo"(value: boolean)
get "itemMaterialStacks"(): $List<$MaterialStack>
set "itemMaterialStacks"(value: $List$$Type<$MaterialStack$$Type>)
get "removeMaterialInfo"(): boolean
set "removeMaterialInfo"(value: boolean)
get "tempItemStacks"(): $List<$ItemStack>
set "tempItemStacks"(value: $List$$Type<$ItemStack$$Type>)
get "mod"(): string
}
}

declare module "com.gregtechceu.gtceu.integration.kjs.events.CraftingComponentsEventJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CraftingComponentsEventJS$ComponentWrapper } from "com.gregtechceu.gtceu.integration.kjs.events.CraftingComponentsEventJS$ComponentWrapper"
import { $Map$$Type } from "java.util.Map"
import { $MaterialEntry$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.stack.MaterialEntry"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $CraftingComponent$$Type } from "com.gregtechceu.gtceu.data.recipe.CraftingComponent"
import { $StartupEventJS } from "dev.latvian.mods.kubejs.event.StartupEventJS"

export class $CraftingComponentsEventJS extends $StartupEventJS {
constructor()

public "createItem"(string0: string, itemStack1: $ItemStack$$Type): $CraftingComponentsEventJS$ComponentWrapper
public "createMaterialEntry"(string0: string, materialEntry1: $MaterialEntry$$Type): $CraftingComponentsEventJS$ComponentWrapper
public "createTag"(string0: string, resourceLocation1: $ResourceLocation$$Type): $CraftingComponentsEventJS$ComponentWrapper
public "removeTier"(craftingComponent0: $CraftingComponent$$Type, int1: integer): void
public "removeTiers"(craftingComponent0: $CraftingComponent$$Type, ...int1s: integer[]): void
public "set"(craftingComponent0: $CraftingComponent$$Type, map1: $Map$$Type<any, any>): void
public "setFallbackItem"(craftingComponent0: $CraftingComponent$$Type, itemStack1: $ItemStack$$Type): void
public "setFallbackMaterialEntry"(craftingComponent0: $CraftingComponent$$Type, materialEntry1: $MaterialEntry$$Type): void
public "setFallbackTag"(craftingComponent0: $CraftingComponent$$Type, resourceLocation1: $ResourceLocation$$Type): void
public "setItem"(craftingComponent0: $CraftingComponent$$Type, int1: integer, itemStack2: $ItemStack$$Type): void
public "setItems"(craftingComponent0: $CraftingComponent$$Type, map1: $Map$$Type<any, any>): void
public "setMaterialEntries"(craftingComponent0: $CraftingComponent$$Type, map1: $Map$$Type<any, any>): void
public "setMaterialEntry"(craftingComponent0: $CraftingComponent$$Type, int1: integer, materialEntry2: $MaterialEntry$$Type): void
public "setTag"(craftingComponent0: $CraftingComponent$$Type, int1: integer, resourceLocation2: $ResourceLocation$$Type): void
public "setTags"(craftingComponent0: $CraftingComponent$$Type, map1: $Map$$Type<any, any>): void
}
}

declare module "com.gregtechceu.gtceu.integration.kjs.GTRegistryInfo$BuilderType" {
import { $BuilderBase, $BuilderBase$$Type } from "com.gregtechceu.gtceu.api.registry.registrate.BuilderBase"
import { $GTRegistryInfo$BuilderFactory, $GTRegistryInfo$BuilderFactory$$Type } from "com.gregtechceu.gtceu.integration.kjs.GTRegistryInfo$BuilderFactory"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $Record } from "java.lang.Record"

export class $GTRegistryInfo$BuilderType<T = any> extends $Record {
constructor(type: string, builderClass: $Class$$Type<$BuilderBase$$Type<T>>, factory: $GTRegistryInfo$BuilderFactory$$Type<T>)

public "builderClass"(): $Class<$BuilderBase<T>>
public "factory"(): $GTRegistryInfo$BuilderFactory<T>
public "type"(): string
}
}

declare module "com.gregtechceu.gtceu.integration.kjs.builders.block.ActiveBlockBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BlockBuilder } from "dev.latvian.mods.kubejs.block.BlockBuilder"

export class $ActiveBlockBuilder extends $BlockBuilder {
constructor(resourceLocation0: $ResourceLocation$$Type)

public "bloom"(string0: string): $ActiveBlockBuilder
public "firebox"(string0: string, string1: string, string2: string): $ActiveBlockBuilder
public "simple"(string0: string): $ActiveBlockBuilder
}
}

declare module "com.gregtechceu.gtceu.integration.kjs.builders.block.CoilBlockBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BlockBuilder } from "dev.latvian.mods.kubejs.block.BlockBuilder"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $Material } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $CoilBlockBuilder extends $BlockBuilder {
constructor(resourceLocation0: $ResourceLocation$$Type)

public "coilMaterial"(supplier0: $Supplier$$Type<$Material>): $CoilBlockBuilder
public "createObject"(): $Block
public "energyDiscount"(int0: integer): $CoilBlockBuilder
public "level"(int0: integer): $CoilBlockBuilder
public "temperature"(int0: integer): $CoilBlockBuilder
public "texture"(string0: string): $CoilBlockBuilder
public "tier"(int0: integer): $CoilBlockBuilder
}
}

declare module "com.gregtechceu.gtceu.integration.kjs.recipe.components.ExtendedOutputItem" {
import { $OutputItem, $OutputItem$$Type } from "dev.latvian.mods.kubejs.item.OutputItem"
import { $SizedIngredient, $SizedIngredient$$Type } from "com.gregtechceu.gtceu.api.recipe.ingredient.SizedIngredient"
import { $RecipeJS$$Type } from "dev.latvian.mods.kubejs.recipe.RecipeJS"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $OutputReplacementTransformer$Replacement } from "dev.latvian.mods.kubejs.recipe.OutputReplacementTransformer$Replacement"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $OutputReplacementTransformer$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacementTransformer"
import { $OutputReplacement } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export class $ExtendedOutputItem extends $OutputItem implements $OutputReplacement {
constructor(ingredient0: $Ingredient$$Type, int1: integer, intProvider2: $IntProvider$$Type)
constructor(itemStack0: $ItemStack$$Type, intProvider1: $IntProvider$$Type)

public static "fromOutputItem"(outputItem0: $OutputItem$$Type): $ExtendedOutputItem
public static "of"(object0: any, recipeJS1: $RecipeJS$$Type): $ExtendedOutputItem
public static "of"(ingredient0: $Ingredient$$Type, int1: integer): $ExtendedOutputItem
public static "of"(object0: any): $ExtendedOutputItem
public "transform"(transformer: $OutputReplacementTransformer$$Type): $OutputReplacementTransformer$Replacement
get "ingredient"(): $SizedIngredient
set "ingredient"(value: $SizedIngredient$$Type)
}
}

declare module "com.gregtechceu.gtceu.integration.kjs.GTRegistryInfo$BuilderFactory" {
import { $BuilderBase } from "com.gregtechceu.gtceu.api.registry.registrate.BuilderBase"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"

export interface $GTRegistryInfo$BuilderFactory<T = any> {
"createBuilder"(resourceLocation0: $ResourceLocation$$Type): $BuilderBase<T>
}

export namespace $GTRegistryInfo$BuilderFactory {
const probejs$$marker: never
}
export abstract class $GTRegistryInfo$BuilderFactory$$Static<T = any> implements $GTRegistryInfo$BuilderFactory<T> {
}
}

declare module "com.gregtechceu.gtceu.integration.kjs.GTRegistryInfo" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $IWorldGenLayer } from "com.gregtechceu.gtceu.api.data.worldgen.IWorldGenLayer"
import { $TagPrefix } from "com.gregtechceu.gtceu.api.data.tag.TagPrefix"
import { $GTRecipeType } from "com.gregtechceu.gtceu.api.recipe.GTRecipeType"
import { $GTRegistryInfo$BuilderFactory$$Type } from "com.gregtechceu.gtceu.integration.kjs.GTRegistryInfo$BuilderFactory"
import { $Set } from "java.util.Set"
import { $GTRegistry$$Type } from "com.gregtechceu.gtceu.api.registry.GTRegistry"
import { $DimensionMarker } from "com.gregtechceu.gtceu.api.data.DimensionMarker"
import { $GTRecipeCategory } from "com.gregtechceu.gtceu.api.recipe.category.GTRecipeCategory"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $Element } from "com.gregtechceu.gtceu.api.data.chemical.Element"
import { $BuilderBase, $BuilderBase$$Type } from "com.gregtechceu.gtceu.api.registry.registrate.BuilderBase"
import { $List } from "java.util.List"
import { $MachineDefinition } from "com.gregtechceu.gtceu.api.machine.MachineDefinition"
import { $Map } from "java.util.Map"
import { $MaterialIconSet } from "com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialIconSet"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $GTRegistryInfo$BuilderType } from "com.gregtechceu.gtceu.integration.kjs.GTRegistryInfo$BuilderType"
import { $Material } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $MaterialIconType } from "com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialIconType"

export class $GTRegistryInfo<K = any, V = any> {
static readonly "ALL_BUILDERS": $List<$BuilderBase<any>>
static readonly "DIMENSION_MARKER": $GTRegistryInfo<$ResourceLocation, $DimensionMarker>
static readonly "ELEMENT": $GTRegistryInfo<string, $Element>
static readonly "EXTRA_IDS": $Set<$ResourceLocation>
static readonly "MACHINE": $GTRegistryInfo<$ResourceLocation, $MachineDefinition>
static readonly "MAP": $Map<$ResourceLocation, $GTRegistryInfo<any, any>>
static readonly "MATERIAL": $GTRegistryInfo<string, $Material>
static readonly "MATERIAL_ICON_SET": $GTRegistryInfo<string, $MaterialIconSet>
static readonly "MATERIAL_ICON_TYPE": $GTRegistryInfo<string, $MaterialIconType>
static readonly "POST_AT": $Map<$ResourceLocation, $List<$GTRegistryInfo<any, any>>>
static readonly "RECIPE_CATEGORY": $GTRegistryInfo<$ResourceLocation, $GTRecipeCategory>
static readonly "RECIPE_TYPE": $GTRegistryInfo<$ResourceLocation, $GTRecipeType>
static readonly "TAG_PREFIX": $GTRegistryInfo<string, $TagPrefix>
static readonly "WORLD_GEN_LAYER": $GTRegistryInfo<string, $IWorldGenLayer>
readonly "objectBaseClass": $Class<V>
readonly "objects": $Map<$ResourceLocation, $BuilderBase<V>>
readonly "registryKey": $ResourceLocation
readonly "registryValues": $Supplier<$Map<K, V>>
readonly "types": $Map<string, $GTRegistryInfo$BuilderType<V>>

public static "add"<K, V>(resourceLocation0: $ResourceLocation$$Type, supplier1: $Supplier$$Type<$Map<K, V>>, class2: $Class$$Type<any>): $GTRegistryInfo<K, V>
public static "add"<K, V>(gTRegistry0: $GTRegistry$$Type<K, V>, class1: $Class$$Type<any>): $GTRegistryInfo<K, V>
public "addBuilder"(builderBase0: $BuilderBase$$Type<V>): void
public "addType"(string0: string, class1: $Class$$Type<$BuilderBase$$Type<V>>, builderFactory2: $GTRegistryInfo$BuilderFactory$$Type<V>, boolean3: boolean): void
public "getDefaultType"(): $GTRegistryInfo$BuilderType<V>
public "postEvent"(): void
public static "registerFor"(resourceLocation0: $ResourceLocation$$Type): void
get "current"(): $BuilderBase<V>
set "current"(value: $BuilderBase$$Type<V>)
get "defaultType"(): $GTRegistryInfo$BuilderType<V>
}
}

declare module "com.gregtechceu.gtceu.integration.kjs.events.GTOreVeinEventJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $GTOreDefinition$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.GTOreDefinition"

export class $GTOreVeinEventJS extends $EventJS {
constructor()

public "add"(resourceLocation0: $ResourceLocation$$Type, consumer1: $Consumer$$Type<$GTOreDefinition$$Type>): void
public "modify"(resourceLocation0: $ResourceLocation$$Type, consumer1: $Consumer$$Type<$GTOreDefinition$$Type>): void
public "modifyAll"(biConsumer0: $BiConsumer$$Type<$ResourceLocation$$Type, $GTOreDefinition$$Type>): void
public "remove"(resourceLocation0: $ResourceLocation$$Type): void
public "removeAll"(): void
public "removeAll"(biPredicate0: $BiPredicate$$Type<$ResourceLocation$$Type, $GTOreDefinition$$Type>): void
}
}

