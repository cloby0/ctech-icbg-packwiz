declare module "com.gregtechceu.gtceu.api.recipe.modifier.ModifierFunction$FunctionBuilder" {
import { $ContentModifier$$Type } from "com.gregtechceu.gtceu.api.recipe.content.ContentModifier"
import { $RecipeCondition$$Type } from "com.gregtechceu.gtceu.api.recipe.RecipeCondition"
import { $ModifierFunction } from "com.gregtechceu.gtceu.api.recipe.modifier.ModifierFunction"

export class $ModifierFunction$FunctionBuilder {
constructor()

public "addOCs"(int0: integer): $ModifierFunction$FunctionBuilder
public "batchParallels"(int0: integer): $ModifierFunction$FunctionBuilder
public "build"(): $ModifierFunction
public "conditions"(...recipeCondition0s: $RecipeCondition$$Type<any>[]): $ModifierFunction$FunctionBuilder
public "durationModifier"(contentModifier0: $ContentModifier$$Type): $ModifierFunction$FunctionBuilder
public "durationMultiplier"(double0: double): $ModifierFunction$FunctionBuilder
public "eutModifier"(contentModifier0: $ContentModifier$$Type): $ModifierFunction$FunctionBuilder
public "eutMultiplier"(double0: double): $ModifierFunction$FunctionBuilder
public "inputModifier"(contentModifier0: $ContentModifier$$Type): $ModifierFunction$FunctionBuilder
public "modifyAllContents"(contentModifier0: $ContentModifier$$Type): $ModifierFunction$FunctionBuilder
public "outputModifier"(contentModifier0: $ContentModifier$$Type): $ModifierFunction$FunctionBuilder
public "parallels"(int0: integer): $ModifierFunction$FunctionBuilder
public "subtickParallels"(int0: integer): $ModifierFunction$FunctionBuilder
public "tickInputModifier"(contentModifier0: $ContentModifier$$Type): $ModifierFunction$FunctionBuilder
public "tickOutputModifier"(contentModifier0: $ContentModifier$$Type): $ModifierFunction$FunctionBuilder
}
}

declare module "com.gregtechceu.gtceu.api.recipe.ingredient.FluidIngredient" {
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $FluidIngredient$Value, $FluidIngredient$Value$$Type } from "com.gregtechceu.gtceu.api.recipe.ingredient.FluidIngredient$Value"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $FluidStack, $FluidStack$$Type } from "net.minecraftforge.fluids.FluidStack"
import { $Fluid, $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $Comparator } from "java.util.Comparator"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $FluidIngredient implements $Predicate<$FluidStack> {
static readonly "CODEC": $Codec<$FluidIngredient>
static readonly "EMPTY": $FluidIngredient
static readonly "EMPTY_STACK_ARRAY": $FluidStack[]
static readonly "FLUID_COMPARATOR": $Comparator<$Fluid>
static readonly "VALUE_COMPARATOR": $Comparator<$FluidIngredient$Value>

public "and"(predicate0: $Predicate$$Type<$FluidStack$$Type>): $Predicate<$FluidStack>
public "copy"(): $FluidIngredient
public static "fromJson"(jsonElement0: $JsonElement$$Type, boolean1: boolean): $FluidIngredient
public static "fromJson"(jsonElement0: $JsonElement$$Type): $FluidIngredient
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $FluidIngredient
public static "fromValue"(value0: $FluidIngredient$Value$$Type, int1: integer, compoundTag2: $CompoundTag$$Type): $FluidIngredient
public static "fromValues"(list0: $List$$Type<$FluidIngredient$Value$$Type>, int1: integer, compoundTag2: $CompoundTag$$Type): $FluidIngredient
public static "fromValues"(value0s: $FluidIngredient$Value$$Type[], int1: integer, compoundTag2: $CompoundTag$$Type): $FluidIngredient
public "getAmount"(): integer
public "getNbt"(): $CompoundTag
public "getStacks"(): $FluidStack[]
public "isEmpty"(): boolean
public static "isEqual"<T>(object0: any): $Predicate<T>
public "negate"(): $Predicate<$FluidStack>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public static "of"(): $FluidIngredient
public static "of"(fluid0: $Fluid$$Type, int1: integer, compoundTag2: $CompoundTag$$Type): $FluidIngredient
public static "of"(list0: $List$$Type<$FluidStack$$Type>): $FluidIngredient
public static "of"(tagKey0: $TagKey$$Type<$Fluid$$Type>, int1: integer): $FluidIngredient
public static "of"(tagKey0: $TagKey$$Type<$Fluid$$Type>, int1: integer, compoundTag2: $CompoundTag$$Type): $FluidIngredient
public static "of"(fluid0: $Fluid$$Type, int1: integer): $FluidIngredient
public static "of"(list0: $List$$Type<$Fluid$$Type>, int1: integer, compoundTag2: $CompoundTag$$Type): $FluidIngredient
public static "of"(fluidStack0: $FluidStack$$Type): $FluidIngredient
public "or"(predicate0: $Predicate$$Type<$FluidStack$$Type>): $Predicate<$FluidStack>
public "setAmount"(int0: integer): void
public "setNbt"(compoundTag0: $CompoundTag$$Type): void
public "shrink"(int0: integer): void
public "test"(fluidStack0: $FluidStack$$Type): boolean
public "toJson"(): $JsonElement
public "toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "stacks"(): $FluidStack[]
set "stacks"(value: $FluidStack$$Type[])
get "values"(): $FluidIngredient$Value[]
set "values"(value: $FluidIngredient$Value$$Type[])
get "amount"(): integer
get "nbt"(): $CompoundTag
get "empty"(): boolean
set "amount"(value: integer)
set "nbt"(value: $CompoundTag$$Type)
}
}

declare module "com.gregtechceu.gtceu.api.recipe.ingredient.nbtpredicate.NBTPredicates" {
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $Map } from "java.util.Map"
import { $NBTPredicate, $NBTPredicate$$Type } from "com.gregtechceu.gtceu.api.recipe.ingredient.nbtpredicate.NBTPredicate"
import { $Function } from "java.util.function.Function"

export class $NBTPredicates {
static readonly "predicateCodecs": $Map<string, $Function<$JsonObject, $NBTPredicate>>

public static "all"(...nBTPredicate0s: $NBTPredicate$$Type[]): $NBTPredicate
public static "any"(...nBTPredicate0s: $NBTPredicate$$Type[]): $NBTPredicate
public static "eqBool"(string0: string, boolean1: boolean): $NBTPredicate
public static "eqByte"(string0: string, byte1: byte): $NBTPredicate
public static "eqDouble"(string0: string, double1: double): $NBTPredicate
public static "eqFloat"(string0: string, float1: float): $NBTPredicate
public static "eqInt"(string0: string, int1: integer): $NBTPredicate
public static "eqString"(string0: string, string1: string): $NBTPredicate
public static "eqTag"(string0: string, tag1: $Tag$$Type): $NBTPredicate
public static "fromJson"(jsonObject0: $JsonObject$$Type): $NBTPredicate
public static "gt"(string0: string, double1: double): $NBTPredicate
public static "gte"(string0: string, double1: double): $NBTPredicate
public static "lt"(string0: string, double1: double): $NBTPredicate
public static "lte"(string0: string, double1: double): $NBTPredicate
public static "neqBool"(string0: string, boolean1: boolean): $NBTPredicate
public static "neqByte"(string0: string, byte1: byte): $NBTPredicate
public static "neqDouble"(string0: string, double1: double): $NBTPredicate
public static "neqFloat"(string0: string, float1: float): $NBTPredicate
public static "neqInt"(string0: string, int1: integer): $NBTPredicate
public static "neqString"(string0: string, string1: string): $NBTPredicate
public static "neqTag"(string0: string, tag1: $Tag$$Type): $NBTPredicate
public static "not"(nBTPredicate0: $NBTPredicate$$Type): $NBTPredicate
}
}

declare module "com.gregtechceu.gtceu.api.recipe.OverclockingLogic$OCResult" {
import { $Record } from "java.lang.Record"
import { $ModifierFunction } from "com.gregtechceu.gtceu.api.recipe.modifier.ModifierFunction"

export class $OverclockingLogic$OCResult extends $Record {
constructor(eutMultiplier: double, durationMultiplier: double, ocLevel: integer, parallels: integer)

public "durationMultiplier"(): double
public "eutMultiplier"(): double
public "ocLevel"(): integer
public "parallels"(): integer
public "toModifier"(): $ModifierFunction
}
}

declare module "com.gregtechceu.gtceu.api.recipe.condition.RecipeConditionType$ConditionFactory" {
import { $RecipeCondition } from "com.gregtechceu.gtceu.api.recipe.RecipeCondition"

export interface $RecipeConditionType$ConditionFactory<T extends $RecipeCondition<T> = $RecipeCondition<T>> {
"createDefault"(): T
}

export namespace $RecipeConditionType$ConditionFactory {
const probejs$$marker: never
}
export abstract class $RecipeConditionType$ConditionFactory$$Static<T extends $RecipeCondition<T> = $RecipeCondition<T>> implements $RecipeConditionType$ConditionFactory<T> {
}
}

declare module "com.gregtechceu.gtceu.api.recipe.ingredient.FluidIngredient$Value" {
import { $JsonObject } from "com.google.gson.JsonObject"
import { $Collection } from "java.util.Collection"
import { $Fluid } from "net.minecraft.world.level.material.Fluid"

export interface $FluidIngredient$Value {
"getFluids"(): $Collection<$Fluid>
"serialize"(): $JsonObject
get "fluids"(): $Collection<$Fluid>
}

export namespace $FluidIngredient$Value {
const probejs$$marker: never
}
export abstract class $FluidIngredient$Value$$Static implements $FluidIngredient$Value {
}
}

declare module "com.gregtechceu.gtceu.api.recipe.lookup.RecipeDB$RecipeIterator" {
import { $GTRecipe, $GTRecipe$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipe"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List$$Type } from "java.util.List"
import { $Iterator } from "java.util.Iterator"
import { $AbstractMapIngredient$$Type } from "com.gregtechceu.gtceu.api.recipe.lookup.ingredient.AbstractMapIngredient"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $RecipeDB$$Type } from "com.gregtechceu.gtceu.api.recipe.lookup.RecipeDB"

export class $RecipeDB$RecipeIterator implements $Iterator<$GTRecipe> {
constructor(recipeDB0: $RecipeDB$$Type, list1: $List$$Type<$List$$Type<$AbstractMapIngredient$$Type>>, predicate2: $Predicate$$Type<$GTRecipe$$Type>)

public "forEachRemaining"(consumer0: $Consumer$$Type<$GTRecipe$$Type>): void
public "hasNext"(): boolean
public "remove"(): void
public "reset"(): void
}
}

declare module "com.gregtechceu.gtceu.api.recipe.chance.boost.ChanceBoostFunction" {
import { $Content$$Type } from "com.gregtechceu.gtceu.api.recipe.content.Content"

export interface $ChanceBoostFunction {
"getBoostedChance"(content0: $Content$$Type, int1: integer, int2: integer): integer
}

export namespace $ChanceBoostFunction {
const NONE: $ChanceBoostFunction
const OVERCLOCK: $ChanceBoostFunction
}
export abstract class $ChanceBoostFunction$$Static implements $ChanceBoostFunction {
static readonly "NONE": $ChanceBoostFunction
static readonly "OVERCLOCK": $ChanceBoostFunction

}
}

declare module "com.gregtechceu.gtceu.api.recipe.chance.logic.ChanceLogic" {
import { $List, $List$$Type } from "java.util.List"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Object2IntMap$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import { $Content, $Content$$Type } from "com.gregtechceu.gtceu.api.recipe.content.Content"
import { $ChanceBoostFunction$$Type } from "com.gregtechceu.gtceu.api.recipe.chance.boost.ChanceBoostFunction"
import { $RecipeCapability$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability"

export class $ChanceLogic {
static readonly "AND": $ChanceLogic
/** @deprecated */
static readonly "FIRST": $ChanceLogic
static readonly "NONE": $ChanceLogic
static readonly "OR": $ChanceLogic
static readonly "XOR": $ChanceLogic

constructor(string0: string)

public static "getMaxChancedValue"(): integer
public "getTranslation"(): $Component
public static "init"(): void
public "roll"(recipeCapability0: $RecipeCapability$$Type<any>, list1: $List$$Type<$Content$$Type>, chanceBoostFunction2: $ChanceBoostFunction$$Type, int3: integer, int4: integer, object2IntMap5: $Object2IntMap$$Type<any>, int6: integer): $List<$Content>
public "roll"(recipeCapability0: $RecipeCapability$$Type<any>, list1: $List$$Type<$Content$$Type>, chanceBoostFunction2: $ChanceBoostFunction$$Type, int3: integer, int4: integer, int5: integer): $List<$Content>
get "translation"(): $Component
}
}

declare module "com.gregtechceu.gtceu.api.recipe.content.Content" {
import { $ContentModifier$$Type } from "com.gregtechceu.gtceu.api.recipe.content.ContentModifier"
import { $Codec } from "com.mojang.serialization.Codec"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $ChanceBoostFunction$$Type } from "com.gregtechceu.gtceu.api.recipe.chance.boost.ChanceBoostFunction"
import { $RecipeCapability$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability"
import { $IGuiTexture } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"

export class $Content {
readonly "chance": integer
readonly "content": any
readonly "maxChance": integer
readonly "tierChanceBoost": integer

constructor(object0: any, int1: integer, int2: integer, int3: integer)

public static "codec"<T>(recipeCapability0: $RecipeCapability$$Type<T>): $Codec<$Content>
public "copy"(recipeCapability0: $RecipeCapability$$Type<any>): $Content
public "copy"(recipeCapability0: $RecipeCapability$$Type<any>, contentModifier1: $ContentModifier$$Type): $Content
public "copyChanced"(recipeCapability0: $RecipeCapability$$Type<any>, contentModifier1: $ContentModifier$$Type): $Content
public "createOverlay"(boolean0: boolean, int1: integer, int2: integer, chanceBoostFunction3: $ChanceBoostFunction$$Type): $IGuiTexture
/** Client only, do not use in server scripts */
public "drawChance"(guiGraphics0: $GuiGraphics$$Type, float1: float, float2: float, int3: integer, int4: integer, int5: integer, int6: integer, chanceBoostFunction7: $ChanceBoostFunction$$Type): void
/** Client only, do not use in server scripts */
public "drawFluidAmount"(guiGraphics0: $GuiGraphics$$Type, float1: float, float2: float, int3: integer, int4: integer): void
/** Client only, do not use in server scripts */
public "drawRangeAmount"(guiGraphics0: $GuiGraphics$$Type, float1: float, float2: float, int3: integer, int4: integer): void
/** Client only, do not use in server scripts */
public "drawTick"(guiGraphics0: $GuiGraphics$$Type, float1: float, float2: float, int3: integer, int4: integer): void
public "getContent"(): any
public "isChanced"(): boolean
get "chanced"(): boolean
}
}

declare module "com.gregtechceu.gtceu.api.recipe.ingredient.nbtpredicate.NBTPredicate" {
import { $JsonObject } from "com.google.gson.JsonObject"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"

export class $NBTPredicate implements $Predicate<$CompoundTag> {
constructor()

public "and"(predicate0: $Predicate$$Type<$CompoundTag$$Type>): $Predicate<$CompoundTag>
public "getType"(): string
public static "isEqual"<T>(object0: any): $Predicate<T>
public "negate"(): $Predicate<$CompoundTag>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public "or"(predicate0: $Predicate$$Type<$CompoundTag$$Type>): $Predicate<$CompoundTag>
public "test"(compoundTag0: $CompoundTag$$Type): boolean
public "toJson"(): $JsonObject
get "type"(): string
}
}

declare module "com.gregtechceu.gtceu.api.recipe.ResearchRecipeBuilder$StationRecipeBuilder" {
import { $ResearchRecipeBuilder } from "com.gregtechceu.gtceu.api.recipe.ResearchRecipeBuilder"

export class $ResearchRecipeBuilder$StationRecipeBuilder extends $ResearchRecipeBuilder<$ResearchRecipeBuilder$StationRecipeBuilder> {
static readonly "DEFAULT_STATION_EUT": integer
static readonly "DEFAULT_STATION_TOTAL_CWUT": integer

constructor()

public "CWUt"(int0: integer): $ResearchRecipeBuilder$StationRecipeBuilder
public "CWUt"(int0: integer, int1: integer): $ResearchRecipeBuilder$StationRecipeBuilder
}
}

declare module "com.gregtechceu.gtceu.api.recipe.ingredient.EnergyStack$WithIO" {
import { $IO, $IO$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.IO"
import { $Codec } from "com.mojang.serialization.Codec"
import { $EnergyStack, $EnergyStack$$Type } from "com.gregtechceu.gtceu.api.recipe.ingredient.EnergyStack"
import { $Record } from "java.lang.Record"

export class $EnergyStack$WithIO extends $Record {
static readonly "CODEC": $Codec<$EnergyStack$WithIO>
static readonly "EMPTY": $EnergyStack$WithIO

constructor(stack: $EnergyStack$$Type, io: $IO$$Type)
constructor(long0: long, long1: long, iO2: $IO$$Type)

public "amperage"(): long
public static "fromVA"(long0: long, long1: long): $EnergyStack$WithIO
public static "fromVoltage"(long0: long): $EnergyStack$WithIO
public "getTotalEU"(): long
public "io"(): $IO
public "isEmpty"(): boolean
public "isInput"(): boolean
public "isOutput"(): boolean
public "signedVoltage"(): long
public "stack"(): $EnergyStack
public "voltage"(): long
public "withIo"(iO0: $IO$$Type): $EnergyStack$WithIO
public "withStack"(energyStack0: $EnergyStack$$Type): $EnergyStack$WithIO
get "totalEU"(): long
get "empty"(): boolean
get "input"(): boolean
get "output"(): boolean
}
}

declare module "com.gregtechceu.gtceu.api.recipe.ui.GTRecipeTypeUI$RecipeHolder" {
import { $IO, $IO$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.IO"
import { $List, $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $RecipeCondition, $RecipeCondition$$Type } from "com.gregtechceu.gtceu.api.recipe.RecipeCondition"
import { $DoubleSupplier, $DoubleSupplier$$Type } from "java.util.function.DoubleSupplier"
import { $Record } from "java.lang.Record"
import { $Table, $Table$$Type } from "com.google.common.collect.Table"
import { $RecipeCapability, $RecipeCapability$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability"

export class $GTRecipeTypeUI$RecipeHolder extends $Record {
constructor(progressSupplier: $DoubleSupplier$$Type, storages: $Table$$Type<$IO$$Type, $RecipeCapability$$Type<any>, any>, data: $CompoundTag$$Type, conditions: $List$$Type<$RecipeCondition$$Type<any>>, isSteam: boolean, isHighPressure: boolean)

public "conditions"(): $List<$RecipeCondition<any>>
public "data"(): $CompoundTag
public "isHighPressure"(): boolean
public "isSteam"(): boolean
public "progressSupplier"(): $DoubleSupplier
public "storages"(): $Table<$IO, $RecipeCapability<any>, any>
get "highPressure"(): boolean
get "steam"(): boolean
}
}

declare module "com.gregtechceu.gtceu.api.recipe.OverclockingLogic" {
import { $GTRecipe$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipe"
import { $OverclockingLogic$OCResult } from "com.gregtechceu.gtceu.api.recipe.OverclockingLogic$OCResult"
import { $OverclockingLogic$OCParams$$Type } from "com.gregtechceu.gtceu.api.recipe.OverclockingLogic$OCParams"
import { $MetaMachine$$Type } from "com.gregtechceu.gtceu.api.machine.MetaMachine"
import { $ModifierFunction } from "com.gregtechceu.gtceu.api.recipe.modifier.ModifierFunction"

export interface $OverclockingLogic {
"getModifier"(metaMachine0: $MetaMachine$$Type, gTRecipe1: $GTRecipe$$Type, long2: long): $ModifierFunction
"getModifier"(metaMachine0: $MetaMachine$$Type, gTRecipe1: $GTRecipe$$Type, long2: long, boolean3: boolean): $ModifierFunction
"runOverclockingLogic"(oCParams0: $OverclockingLogic$OCParams$$Type, long1: long): $OverclockingLogic$OCResult
}

export namespace $OverclockingLogic {
const COIL_EUT_DISCOUNT_TEMPERATURE: integer
const NON_PERFECT_OVERCLOCK: $OverclockingLogic
const NON_PERFECT_OVERCLOCK_SUBTICK: $OverclockingLogic
const PERFECT_DURATION_FACTOR: double
const PERFECT_DURATION_FACTOR_INV: double
const PERFECT_HALF_DURATION_FACTOR: double
const PERFECT_HALF_DURATION_FACTOR_INV: double
const PERFECT_HALF_VOLTAGE_FACTOR: double
const PERFECT_OVERCLOCK: $OverclockingLogic
const PERFECT_OVERCLOCK_SUBTICK: $OverclockingLogic
const STD_DURATION_FACTOR: double
const STD_DURATION_FACTOR_INV: double
const STD_VOLTAGE_FACTOR: double
function create(double0: double, double1: double, boolean2: boolean): $OverclockingLogic
function getCoilEUtDiscount(int0: integer, int1: integer): double
function heatingCoilOC(oCParams0: $OverclockingLogic$OCParams$$Type, long1: long, int2: integer, int3: integer): $OverclockingLogic$OCResult
function standardOC(oCParams0: $OverclockingLogic$OCParams$$Type, long1: long, double2: double, double3: double): $OverclockingLogic$OCResult
function subTickNonParallelOC(oCParams0: $OverclockingLogic$OCParams$$Type, long1: long, double2: double, double3: double): $OverclockingLogic$OCResult
function subTickParallelOC(oCParams0: $OverclockingLogic$OCParams$$Type, long1: long, double2: double, double3: double): $OverclockingLogic$OCResult
}
export abstract class $OverclockingLogic$$Static implements $OverclockingLogic {
static readonly "COIL_EUT_DISCOUNT_TEMPERATURE": integer
static readonly "NON_PERFECT_OVERCLOCK": $OverclockingLogic
static readonly "NON_PERFECT_OVERCLOCK_SUBTICK": $OverclockingLogic
static readonly "PERFECT_DURATION_FACTOR": double
static readonly "PERFECT_DURATION_FACTOR_INV": double
static readonly "PERFECT_HALF_DURATION_FACTOR": double
static readonly "PERFECT_HALF_DURATION_FACTOR_INV": double
static readonly "PERFECT_HALF_VOLTAGE_FACTOR": double
static readonly "PERFECT_OVERCLOCK": $OverclockingLogic
static readonly "PERFECT_OVERCLOCK_SUBTICK": $OverclockingLogic
static readonly "STD_DURATION_FACTOR": double
static readonly "STD_DURATION_FACTOR_INV": double
static readonly "STD_VOLTAGE_FACTOR": double

static "create"(double0: double, double1: double, boolean2: boolean): $OverclockingLogic
static "getCoilEUtDiscount"(int0: integer, int1: integer): double
static "heatingCoilOC"(oCParams0: $OverclockingLogic$OCParams$$Type, long1: long, int2: integer, int3: integer): $OverclockingLogic$OCResult
static "standardOC"(oCParams0: $OverclockingLogic$OCParams$$Type, long1: long, double2: double, double3: double): $OverclockingLogic$OCResult
static "subTickNonParallelOC"(oCParams0: $OverclockingLogic$OCParams$$Type, long1: long, double2: double, double3: double): $OverclockingLogic$OCResult
static "subTickParallelOC"(oCParams0: $OverclockingLogic$OCParams$$Type, long1: long, double2: double, double3: double): $OverclockingLogic$OCResult
}
}

declare module "com.gregtechceu.gtceu.api.recipe.modifier.ModifierFunction" {
import { $GTRecipe, $GTRecipe$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipe"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ModifierFunction$FunctionBuilder } from "com.gregtechceu.gtceu.api.recipe.modifier.ModifierFunction$FunctionBuilder"

export interface $ModifierFunction {
"andThen"(modifierFunction0: $ModifierFunction$$Type): $ModifierFunction
"apply"(gTRecipe0: $GTRecipe$$Type): $GTRecipe
"compose"(modifierFunction0: $ModifierFunction$$Type): $ModifierFunction
"getFailReason"(): $Component
get "failReason"(): $Component
}

export namespace $ModifierFunction {
const DEFAULT_FAILURE: $Component
const IDENTITY: $ModifierFunction
const NULL: $ModifierFunction
function builder(): $ModifierFunction$FunctionBuilder
function cancel(component0: $Component$$Type): $ModifierFunction
}
export abstract class $ModifierFunction$$Static implements $ModifierFunction {
static readonly "DEFAULT_FAILURE": $Component
static readonly "IDENTITY": $ModifierFunction
static readonly "NULL": $ModifierFunction

static "builder"(): $ModifierFunction$FunctionBuilder
static "cancel"(component0: $Component$$Type): $ModifierFunction
}
}

declare module "com.gregtechceu.gtceu.api.recipe.ingredient.IntProviderFluidIngredient" {
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $IRangedIngredient } from "com.gregtechceu.gtceu.api.recipe.ingredient.IRangedIngredient"
import { $Codec } from "com.mojang.serialization.Codec"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $IntProvider, $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $FluidIngredient, $FluidIngredient$$Type } from "com.gregtechceu.gtceu.api.recipe.ingredient.FluidIngredient"
import { $FluidStack, $FluidStack$$Type } from "net.minecraftforge.fluids.FluidStack"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $IntProviderFluidIngredient extends $FluidIngredient implements $IRangedIngredient {
static readonly "CODEC": $Codec<$IntProviderFluidIngredient>

public "and"(predicate0: $Predicate$$Type<$FluidStack$$Type>): $Predicate<$FluidStack>
public "copy"(): $IntProviderFluidIngredient
public static "fromJson"(jsonElement0: $JsonElement$$Type): $IntProviderFluidIngredient
public static "fromNBT"(compoundTag0: $CompoundTag$$Type): $IntProviderFluidIngredient
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $IntProviderFluidIngredient
public "getCountProvider"(): $IntProvider
public "getInner"(): $FluidIngredient
public "getMaxSizeStack"(): $FluidStack
public "getMidRoll"(): double
public "getSampledCount"(): integer
public static "isEqual"<T>(object0: any): $Predicate<T>
public "isRolled"(): boolean
public "negate"(): $Predicate<$FluidStack>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public static "of"(fluidIngredient0: $FluidIngredient$$Type, intProvider1: $IntProvider$$Type): $IntProviderFluidIngredient
public static "of"(fluidStack0: $FluidStack$$Type, int1: integer, int2: integer): $IntProviderFluidIngredient
public "or"(predicate0: $Predicate$$Type<$FluidStack$$Type>): $Predicate<$FluidStack>
public "reset"(): void
public "rollSampledCount"(randomSource0: $RandomSource$$Type): integer
public "rollSampledCount"(): integer
public "setFluidStacks"(fluidStack0s: $FluidStack$$Type[]): void
public "setSampledCount"(int0: integer): void
public "toNBT"(): $CompoundTag
get "countProvider"(): $IntProvider
get "inner"(): $FluidIngredient
get "maxSizeStack"(): $FluidStack
get "midRoll"(): double
get "sampledCount"(): integer
get "rolled"(): boolean
set "fluidStacks"(value: $FluidStack$$Type[])
set "sampledCount"(value: integer)
}
}

declare module "com.gregtechceu.gtceu.api.recipe.OverclockingLogic$OCParams" {
import { $Record } from "java.lang.Record"

export class $OverclockingLogic$OCParams extends $Record {
constructor(eut: long, duration: integer, ocAmount: integer, maxParallels: integer)

public "duration"(): integer
public "eut"(): long
public "maxParallels"(): integer
public "ocAmount"(): integer
}
}

declare module "com.gregtechceu.gtceu.api.recipe.lookup.RecipeDB" {
import { $GTRecipe, $GTRecipe$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipe"
import { $List$$Type } from "java.util.List"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $AbstractMapIngredient$$Type } from "com.gregtechceu.gtceu.api.recipe.lookup.ingredient.AbstractMapIngredient"
import { $RecipeDB$RecipeIterator } from "com.gregtechceu.gtceu.api.recipe.lookup.RecipeDB$RecipeIterator"
import { $Map$$Type } from "java.util.Map"
import { $RecipeCapability$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability"
import { $IRecipeCapabilityHolder$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.IRecipeCapabilityHolder"

export class $RecipeDB {
constructor()

public "clear"(): void
public "find"(iRecipeCapabilityHolder0: $IRecipeCapabilityHolder$$Type): $GTRecipe
public "find"(iRecipeCapabilityHolder0: $IRecipeCapabilityHolder$$Type, predicate1: $Predicate$$Type<$GTRecipe$$Type>): $GTRecipe
public "find"(list0: $List$$Type<$List$$Type<$AbstractMapIngredient$$Type>>, predicate1: $Predicate$$Type<$GTRecipe$$Type>): $GTRecipe
public "find"(map0: $Map$$Type<$RecipeCapability$$Type<any>, $List$$Type<any>>, predicate1: $Predicate$$Type<$GTRecipe$$Type>): $GTRecipe
public "iterator"(iRecipeCapabilityHolder0: $IRecipeCapabilityHolder$$Type, predicate1: $Predicate$$Type<$GTRecipe$$Type>): $RecipeDB$RecipeIterator
}
}

declare module "com.gregtechceu.gtceu.api.recipe.ui.GTRecipeTypeUI" {
import { $ProgressTexture$FillDirection$$Type } from "com.lowdragmc.lowdraglib.gui.texture.ProgressTexture$FillDirection"
import { $SteamTexture$$Type } from "com.gregtechceu.gtceu.api.gui.SteamTexture"
import { $GTRecipeType$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipeType"
import { $Size } from "com.lowdragmc.lowdraglib.utils.Size"
import { $IEditableUI } from "com.gregtechceu.gtceu.api.gui.editor.IEditableUI"
import { $RecipeCapability$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability"
import { $IGuiTexture, $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $GTRecipe$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipe"
import { $IO$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.IO"
import { $List$$Type } from "java.util.List"
import { $ProgressTexture, $ProgressTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.ProgressTexture"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $RecipeCondition$$Type } from "com.gregtechceu.gtceu.api.recipe.RecipeCondition"
import { $ResourceTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.ResourceTexture"
import { $DoubleSupplier$$Type } from "java.util.function.DoubleSupplier"
import { $GTRecipeTypeUI$RecipeHolder } from "com.gregtechceu.gtceu.api.recipe.ui.GTRecipeTypeUI$RecipeHolder"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $WidgetGroup, $WidgetGroup$$Type } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $Table$$Type } from "com.google.common.collect.Table"
import { $Byte2ObjectMap, $Byte2ObjectMap$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectMap"

export class $GTRecipeTypeUI {
constructor(gTRecipeType0: $GTRecipeType$$Type)

public "appendJEIUI"(gTRecipe0: $GTRecipe$$Type, widgetGroup1: $WidgetGroup$$Type): void
public "createEditableUITemplate"(boolean0: boolean, boolean1: boolean): $IEditableUI<$WidgetGroup, $GTRecipeTypeUI$RecipeHolder>
public "createUITemplate"(doubleSupplier0: $DoubleSupplier$$Type, table1: $Table$$Type<$IO$$Type, $RecipeCapability$$Type<any>, any>, compoundTag2: $CompoundTag$$Type, list3: $List$$Type<$RecipeCondition$$Type<any>>, boolean4: boolean, boolean5: boolean): $WidgetGroup
public "createUITemplate"(doubleSupplier0: $DoubleSupplier$$Type, table1: $Table$$Type<$IO$$Type, $RecipeCapability$$Type<any>, any>, compoundTag2: $CompoundTag$$Type, list3: $List$$Type<$RecipeCondition$$Type<any>>): $WidgetGroup
public "getCustomUI"(): $CompoundTag
public "getJEISize"(): $Size
public "getMaxTooltips"(): integer
public "getOriginalWidth"(): integer
public "getProgressBarTexture"(): $ProgressTexture
public "getPropertyHeightShift"(): integer
public "getSlotOverlays"(): $Byte2ObjectMap<$IGuiTexture>
public "hasCustomUI"(): boolean
public "reloadCustomUI"(): void
public "setMaxTooltips"(int0: integer): void
public "setProgressBar"(resourceTexture0: $ResourceTexture$$Type, fillDirection1: $ProgressTexture$FillDirection$$Type): $GTRecipeTypeUI
public "setProgressBarTexture"(progressTexture0: $ProgressTexture$$Type): void
public "setSlotOverlay"(boolean0: boolean, boolean1: boolean, iGuiTexture2: $IGuiTexture$$Type): $GTRecipeTypeUI
public "setSlotOverlay"(boolean0: boolean, boolean1: boolean, boolean2: boolean, iGuiTexture3: $IGuiTexture$$Type): $GTRecipeTypeUI
public "setSlotOverlays"(byte2ObjectMap0: $Byte2ObjectMap$$Type<$IGuiTexture$$Type>): void
public "setSteamMoveType"(fillDirection0: $ProgressTexture$FillDirection$$Type): void
public "setSteamProgressBarTexture"(steamTexture0: $SteamTexture$$Type): void
public "setUiBuilder"(biConsumer0: $BiConsumer$$Type<$GTRecipe$$Type, $WidgetGroup$$Type>): void
get "customUI"(): $CompoundTag
get "jEISize"(): $Size
get "maxTooltips"(): integer
get "originalWidth"(): integer
get "progressBarTexture"(): $ProgressTexture
get "propertyHeightShift"(): integer
get "slotOverlays"(): $Byte2ObjectMap<$IGuiTexture>
set "maxTooltips"(value: integer)
set "progressBarTexture"(value: $ProgressTexture$$Type)
set "slotOverlays"(value: $Byte2ObjectMap$$Type<$IGuiTexture$$Type>)
set "steamMoveType"(value: $ProgressTexture$FillDirection$$Type)
set "steamProgressBarTexture"(value: $SteamTexture$$Type)
set "uiBuilder"(value: $BiConsumer$$Type<$GTRecipe$$Type, $WidgetGroup$$Type>)
}
}

declare module "com.gregtechceu.gtceu.api.recipe.ResearchRecipeBuilder$ScannerRecipeBuilder" {
import { $ResearchRecipeBuilder } from "com.gregtechceu.gtceu.api.recipe.ResearchRecipeBuilder"

export class $ResearchRecipeBuilder$ScannerRecipeBuilder extends $ResearchRecipeBuilder<$ResearchRecipeBuilder$ScannerRecipeBuilder> {
static readonly "DEFAULT_SCANNER_DURATION": integer
static readonly "DEFAULT_SCANNER_EUT": integer

constructor()

public "duration"(int0: integer): $ResearchRecipeBuilder$ScannerRecipeBuilder
}
}

declare module "com.gregtechceu.gtceu.api.recipe.content.ContentModifier" {
import { $List, $List$$Type } from "java.util.List"
import { $Content, $Content$$Type } from "com.gregtechceu.gtceu.api.recipe.content.Content"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Record } from "java.lang.Record"
import { $RecipeCapability, $RecipeCapability$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability"

export class $ContentModifier extends $Record {
static readonly "IDENTITY": $ContentModifier

constructor(multiplier: double, addition: double)

public "addition"(): double
public static "addition"(double0: double): $ContentModifier
public "apply"(int0: integer): integer
public "apply"(double0: double): double
public "apply"(long0: long): long
public "apply"(float0: float): float
public "applyContents"(map0: $Map$$Type<$RecipeCapability$$Type<any>, $List$$Type<$Content$$Type>>): $Map<$RecipeCapability<any>, $List<$Content>>
public "multiplier"(): double
public static "multiplier"(double0: double): $ContentModifier
}
}

declare module "com.gregtechceu.gtceu.api.recipe.ingredient.SizedIngredient" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $IIngredientSerializer } from "net.minecraftforge.common.crafting.IIngredientSerializer"
import { $InputItem } from "dev.latvian.mods.kubejs.item.InputItem"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $ItemStackSet } from "dev.latvian.mods.kubejs.item.ItemStackSet"
import { $Set } from "java.util.Set"
import { $Ingredient, $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $JsonElement } from "com.google.gson.JsonElement"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $SizedIngredient extends $Ingredient {
static readonly "SERIALIZER": $IIngredientSerializer<$SizedIngredient>
static readonly "TYPE": $ResourceLocation

public "and"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $Predicate<$ItemStack>
public "and"(ingredient: $Ingredient$$Type): $Ingredient
public "asIngredient"(): $Ingredient
public "asStack"(): $InputItem
public "canBeUsedForMatching"(): boolean
public static "copy"(ingredient0: $Ingredient$$Type): $Ingredient
public static "create"(tagKey0: $TagKey$$Type<$Item$$Type>, int1: integer): $SizedIngredient
public static "create"(ingredient0: $Ingredient$$Type): $SizedIngredient
public static "create"(itemStack0: $ItemStack$$Type): $SizedIngredient
public static "create"(ingredient0: $Ingredient$$Type, int1: integer): $SizedIngredient
public static "fromJson"(jsonObject0: $JsonObject$$Type): $SizedIngredient
public "getAmount"(): integer
public "getDisplayStacks"(): $ItemStackSet
public "getFirst"(): $ItemStack
public "getInner"(): $Ingredient
public static "getInner"(ingredient0: $Ingredient$$Type): $Ingredient
public "getItemIds"(): $Set<string>
public "getItemTypes"(): $Set<$Item>
public "getStacks"(): $ItemStackSet
public static "isEqual"<T>(object0: any): $Predicate<T>
public "isWildcard"(): boolean
public "negate"(): $Predicate<$ItemStack>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public "or"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $Predicate<$ItemStack>
public "or"(ingredient: $Ingredient$$Type): $Ingredient
public "setAmount"(int0: integer): void
public "subtract"(subtracted: $Ingredient$$Type): $Ingredient
public "testItem"(item: $Item$$Type): boolean
public "toJson"(): $JsonElement
public "withCount"(count: integer): $InputItem
get "amount"(): integer
get "displayStacks"(): $ItemStackSet
get "first"(): $ItemStack
get "inner"(): $Ingredient
get "itemIds"(): $Set<string>
get "itemTypes"(): $Set<$Item>
get "stacks"(): $ItemStackSet
get "wildcard"(): boolean
set "amount"(value: integer)
}
}

declare module "com.gregtechceu.gtceu.api.recipe.category.GTRecipeCategory" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $GTRecipe$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipe"
import { $GTRecipeType, $GTRecipeType$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipeType"
import { $IGuiTexture, $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"

export class $GTRecipeCategory {
static readonly "DEFAULT": $GTRecipeCategory
readonly "name": string
readonly "registryKey": $ResourceLocation

constructor(gTRecipeType0: $GTRecipeType$$Type)
constructor(string0: string, gTRecipeType1: $GTRecipeType$$Type)

public "addRecipe"(gTRecipe0: $GTRecipe$$Type): void
public "getIcon"(): $IGuiTexture
public "getLanguageKey"(): string
public "getRecipeType"(): $GTRecipeType
public "isXEIVisible"(): boolean
public static "registerDefault"(gTRecipeType0: $GTRecipeType$$Type): $GTRecipeCategory
public "setIcon"(iGuiTexture0: $IGuiTexture$$Type): $GTRecipeCategory
public "setXEIVisible"(boolean0: boolean): $GTRecipeCategory
public "shouldRegisterDisplays"(): boolean
get "icon"(): $IGuiTexture
get "languageKey"(): string
get "recipeType"(): $GTRecipeType
get "xEIVisible"(): boolean
set "icon"(value: $IGuiTexture$$Type)
set "xEIVisible"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.api.recipe.lookup.ingredient.AbstractMapIngredient" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AbstractMapIngredient {
public "isSpecialIngredient"(): boolean
get "specialIngredient"(): boolean
}
}

declare module "com.gregtechceu.gtceu.api.recipe.modifier.RecipeModifier" {
import { $GTRecipe, $GTRecipe$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipe"
import { $MetaMachine$$Type } from "com.gregtechceu.gtceu.api.machine.MetaMachine"
import { $Class$$Type } from "java.lang.Class"
import { $ModifierFunction } from "com.gregtechceu.gtceu.api.recipe.modifier.ModifierFunction"

export interface $RecipeModifier {
"applyModifier"(metaMachine0: $MetaMachine$$Type, gTRecipe1: $GTRecipe$$Type): $GTRecipe
"getModifier"(metaMachine0: $MetaMachine$$Type, gTRecipe1: $GTRecipe$$Type): $ModifierFunction
}

export namespace $RecipeModifier {
const NO_MODIFIER: $RecipeModifier
function nullWrongType(class0: $Class$$Type<any>, metaMachine1: $MetaMachine$$Type): $ModifierFunction
}
export abstract class $RecipeModifier$$Static implements $RecipeModifier {
static readonly "NO_MODIFIER": $RecipeModifier

static "nullWrongType"(class0: $Class$$Type<any>, metaMachine1: $MetaMachine$$Type): $ModifierFunction
}
}

declare module "com.gregtechceu.gtceu.api.recipe.RecipeCondition" {
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $Component } from "net.minecraft.network.chat.Component"
import { $RecordCodecBuilder$Instance$$Type } from "com.mojang.serialization.codecs.RecordCodecBuilder$Instance"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Function$$Type } from "java.util.function.Function"
import { $IGuiTexture } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $GTRecipe$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipe"
import { $RecordCodecBuilder$Mu } from "com.mojang.serialization.codecs.RecordCodecBuilder$Mu"
import { $Codec } from "com.mojang.serialization.Codec"
import { $RecipeLogic$$Type } from "com.gregtechceu.gtceu.api.machine.trait.RecipeLogic"
import { $Products$P1 } from "com.mojang.datafixers.Products$P1"
import { $RecipeConditionType } from "com.gregtechceu.gtceu.api.recipe.condition.RecipeConditionType"

export class $RecipeCondition<T extends $RecipeCondition<T> = $RecipeCondition<T>> {
static readonly "CODEC": $Codec<$RecipeCondition<any>>

constructor()
constructor(boolean0: boolean)

public "check"(gTRecipe0: $GTRecipe$$Type, recipeLogic1: $RecipeLogic$$Type): boolean
public "createTemplate"(): T
public static "deserialize"(jsonObject0: $JsonObject$$Type): $RecipeCondition<any>
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $RecipeCondition<any>
public "getInValidTexture"(): $IGuiTexture
public "getTooltips"(): $Component
public "getTranslationKey"(): string
public "getType"(): $RecipeConditionType<T>
public "getValidTexture"(): $IGuiTexture
public "isOr"(): boolean
public static "isReverse"<RC extends $RecipeCondition<RC>>(instance0: $RecordCodecBuilder$Instance$$Type<RC>): $Products$P1<$RecordCodecBuilder$Mu<RC>, boolean>
public "isReverse"(): boolean
public "serialize"(): $JsonObject
public "setReverse"(boolean0: boolean): $RecipeCondition<T>
public static "simpleCodec"<RC extends $RecipeCondition<RC>>(function0: $Function$$Type<boolean, RC>): $Codec<RC>
public "toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "inValidTexture"(): $IGuiTexture
get "tooltips"(): $Component
get "translationKey"(): string
get "type"(): $RecipeConditionType<T>
get "validTexture"(): $IGuiTexture
get "or"(): boolean
get "reverse"(): boolean
set "reverse"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.api.recipe.GTRecipe" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ContentModifier$$Type } from "com.gregtechceu.gtceu.api.recipe.content.ContentModifier"
import { $GTRecipeType, $GTRecipeType$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipeType"
import { $GTRecipeCategory, $GTRecipeCategory$$Type } from "com.gregtechceu.gtceu.api.recipe.category.GTRecipeCategory"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"
import { $IO$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.IO"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $RecipeCondition, $RecipeCondition$$Type } from "com.gregtechceu.gtceu.api.recipe.RecipeCondition"
import { $Map, $Map$$Type } from "java.util.Map"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $EnergyStack } from "com.gregtechceu.gtceu.api.recipe.ingredient.EnergyStack"
import { $Content, $Content$$Type } from "com.gregtechceu.gtceu.api.recipe.content.Content"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $ChanceLogic, $ChanceLogic$$Type } from "com.gregtechceu.gtceu.api.recipe.chance.logic.ChanceLogic"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $RecipeCapability, $RecipeCapability$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability"
import { $List, $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Recipe } from "net.minecraft.world.item.crafting.Recipe"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $GTRecipe implements $Recipe<$Container> {
readonly "conditions": $List<$RecipeCondition<any>>
readonly "ingredientActions": $List<any>
readonly "inputChanceLogics": $Map<$RecipeCapability<any>, $ChanceLogic>
readonly "inputs": $Map<$RecipeCapability<any>, $List<$Content>>
readonly "outputChanceLogics": $Map<$RecipeCapability<any>, $ChanceLogic>
readonly "outputs": $Map<$RecipeCapability<any>, $List<$Content>>
readonly "recipeCategory": $GTRecipeCategory
readonly "recipeType": $GTRecipeType
readonly "tickInputChanceLogics": $Map<$RecipeCapability<any>, $ChanceLogic>
readonly "tickInputs": $Map<$RecipeCapability<any>, $List<$Content>>
readonly "tickOutputChanceLogics": $Map<$RecipeCapability<any>, $ChanceLogic>
readonly "tickOutputs": $Map<$RecipeCapability<any>, $List<$Content>>

constructor(gTRecipeType0: $GTRecipeType$$Type, map1: $Map$$Type<$RecipeCapability$$Type<any>, $List$$Type<$Content$$Type>>, map2: $Map$$Type<$RecipeCapability$$Type<any>, $List$$Type<$Content$$Type>>, map3: $Map$$Type<$RecipeCapability$$Type<any>, $List$$Type<$Content$$Type>>, map4: $Map$$Type<$RecipeCapability$$Type<any>, $List$$Type<$Content$$Type>>, map5: $Map$$Type<$RecipeCapability$$Type<any>, $ChanceLogic$$Type>, map6: $Map$$Type<$RecipeCapability$$Type<any>, $ChanceLogic$$Type>, map7: $Map$$Type<$RecipeCapability$$Type<any>, $ChanceLogic$$Type>, map8: $Map$$Type<$RecipeCapability$$Type<any>, $ChanceLogic$$Type>, list9: $List$$Type<$RecipeCondition$$Type<any>>, list10: $List$$Type<any>, compoundTag11: $CompoundTag$$Type, int12: integer, gTRecipeCategory13: $GTRecipeCategory$$Type, int14: integer)
constructor(gTRecipeType0: $GTRecipeType$$Type, resourceLocation1: $ResourceLocation$$Type, map2: $Map$$Type<$RecipeCapability$$Type<any>, $List$$Type<$Content$$Type>>, map3: $Map$$Type<$RecipeCapability$$Type<any>, $List$$Type<$Content$$Type>>, map4: $Map$$Type<$RecipeCapability$$Type<any>, $List$$Type<$Content$$Type>>, map5: $Map$$Type<$RecipeCapability$$Type<any>, $List$$Type<$Content$$Type>>, map6: $Map$$Type<$RecipeCapability$$Type<any>, $ChanceLogic$$Type>, map7: $Map$$Type<$RecipeCapability$$Type<any>, $ChanceLogic$$Type>, map8: $Map$$Type<$RecipeCapability$$Type<any>, $ChanceLogic$$Type>, map9: $Map$$Type<$RecipeCapability$$Type<any>, $ChanceLogic$$Type>, list10: $List$$Type<$RecipeCondition$$Type<any>>, list11: $List$$Type<any>, compoundTag12: $CompoundTag$$Type, int13: integer, gTRecipeCategory14: $GTRecipeCategory$$Type, int15: integer)

public "assemble"(container0: $Container$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public "copy"(contentModifier0: $ContentModifier$$Type, boolean1: boolean): $GTRecipe
public "copy"(contentModifier0: $ContentModifier$$Type): $GTRecipe
public "copy"(): $GTRecipe
public "getChanceLogicForCapability"(recipeCapability0: $RecipeCapability$$Type<any>, iO1: $IO$$Type, boolean2: boolean): $ChanceLogic
public "getGroup"(): string
public "getId"(): $ResourceLocation
public "getIngredients"(): $NonNullList<$Ingredient>
public "getInputContents"(recipeCapability0: $RecipeCapability$$Type<any>): $List<$Content>
public "getInputEUt"(): $EnergyStack
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getOutputContents"(recipeCapability0: $RecipeCapability$$Type<any>): $List<$Content>
public "getOutputEUt"(): $EnergyStack
public "getRemainingItems"(container0: $Container$$Type): $NonNullList<$ItemStack>
public "getResultItem"(registryAccess0: $RegistryAccess$$Type): $ItemStack
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getTickInputContents"(recipeCapability0: $RecipeCapability$$Type<any>): $List<$Content>
public "getTickOutputContents"(recipeCapability0: $RecipeCapability$$Type<any>): $List<$Content>
public "getToastSymbol"(): $ItemStack
public "getTotalRuns"(): integer
public "getType"(): $GTRecipeType
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "hasTick"(): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "matches"(container0: $Container$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "setId"(resourceLocation0: $ResourceLocation$$Type): void
public "showNotification"(): boolean
get "batchParallels"(): integer
set "batchParallels"(value: integer)
get "data"(): $CompoundTag
set "data"(value: $CompoundTag$$Type)
get "duration"(): integer
set "duration"(value: integer)
get "groupColor"(): integer
set "groupColor"(value: integer)
get "id"(): $ResourceLocation
set "id"(value: $ResourceLocation$$Type)
get "ocLevel"(): integer
set "ocLevel"(value: integer)
get "parallels"(): integer
set "parallels"(value: integer)
get "subtickParallels"(): integer
set "subtickParallels"(value: integer)
get "group"(): string
get "ingredients"(): $NonNullList<$Ingredient>
get "inputEUt"(): $EnergyStack
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "outputEUt"(): $EnergyStack
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "totalRuns"(): integer
get "type"(): $GTRecipeType
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
}
}

declare module "com.gregtechceu.gtceu.api.recipe.lookup.RecipeAdditionHandler" {
import { $GTRecipe$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipe"
import { $RecipeDB$$Type } from "com.gregtechceu.gtceu.api.recipe.lookup.RecipeDB"

export class $RecipeAdditionHandler {
constructor(recipeDB0: $RecipeDB$$Type)

public "addStaging"(gTRecipe0: $GTRecipe$$Type): void
public "beginStaging"(): void
public "completeStaging"(): void
}
}

declare module "com.gregtechceu.gtceu.api.recipe.content.IContentSerializer" {
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Tag, $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $Content, $Content$$Type } from "com.gregtechceu.gtceu.api.recipe.content.Content"
import { $Class } from "java.lang.Class"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export interface $IContentSerializer<T = any> {
"codec"(): $Codec<T>
"contentClass"(): $Class<T>
"defaultValue"(): T
"fromJson"(jsonElement0: $JsonElement$$Type): T
"fromJsonContent"(jsonElement0: $JsonElement$$Type): $Content
"fromNbt"(tag0: $Tag$$Type): T
"fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): T
"fromNetworkContent"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $Content
"of"(object0: any): T
"toJson"(t0: T): $JsonElement
"toJsonContent"(content0: $Content$$Type): $JsonElement
"toNbt"(t0: T): $Tag
"toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type, t1: T): void
"toNetworkContent"(friendlyByteBuf0: $FriendlyByteBuf$$Type, content1: $Content$$Type): void
}

export namespace $IContentSerializer {
const probejs$$marker: never
}
export abstract class $IContentSerializer$$Static<T = any> implements $IContentSerializer<T> {
}
}

declare module "com.gregtechceu.gtceu.api.recipe.ActionResult" {
import { $IO, $IO$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.IO"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Record } from "java.lang.Record"
import { $RecipeCapability, $RecipeCapability$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability"

export class $ActionResult extends $Record {
static readonly "FAIL_NO_CAPABILITIES": $ActionResult
static readonly "FAIL_NO_REASON": $ActionResult
static readonly "PASS_NO_CONTENTS": $ActionResult
static readonly "SUCCESS": $ActionResult

constructor(isSuccess: boolean, reason: $Component$$Type, capability: $RecipeCapability$$Type<any>, io: $IO$$Type)

public "capability"(): $RecipeCapability<any>
public static "fail"(component0: $Component$$Type, recipeCapability1: $RecipeCapability$$Type<any>, iO2: $IO$$Type): $ActionResult
public "io"(): $IO
public "isSuccess"(): boolean
public "reason"(): $Component
get "success"(): boolean
}
}

declare module "com.gregtechceu.gtceu.api.recipe.GTRecipeType" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $GTRecipeBuilder, $GTRecipeBuilder$$Type } from "com.gregtechceu.gtceu.data.recipe.builder.GTRecipeBuilder"
import { $ProgressTexture$FillDirection$$Type } from "com.lowdragmc.lowdraglib.gui.texture.ProgressTexture$FillDirection"
import { $SteamTexture$$Type } from "com.gregtechceu.gtceu.api.gui.SteamTexture"
import { $GTRecipeType$ICustomRecipeLogic, $GTRecipeType$ICustomRecipeLogic$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipeType$ICustomRecipeLogic"
import { $RecipeDB } from "com.gregtechceu.gtceu.api.recipe.lookup.RecipeDB"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $GTRecipeCategory, $GTRecipeCategory$$Type } from "com.gregtechceu.gtceu.api.recipe.category.GTRecipeCategory"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $GTRecipe, $GTRecipe$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipe"
import { $IO$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.IO"
import { $Map } from "java.util.Map"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $RecipeType, $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"
import { $RecipeAdditionHandler } from "com.gregtechceu.gtceu.api.recipe.lookup.RecipeAdditionHandler"
import { $WidgetGroup$$Type } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $IRecipeCapabilityHolder$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.IRecipeCapabilityHolder"
import { $Iterator } from "java.util.Iterator"
import { $ChanceBoostFunction, $ChanceBoostFunction$$Type } from "com.gregtechceu.gtceu.api.recipe.chance.boost.ChanceBoostFunction"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $RecipeCapability, $RecipeCapability$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability"
import { $FinishedRecipe$$Type } from "net.minecraft.data.recipes.FinishedRecipe"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $GTRecipeTypeUI, $GTRecipeTypeUI$$Type } from "com.gregtechceu.gtceu.api.recipe.ui.GTRecipeTypeUI"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $SoundEntry, $SoundEntry$$Type } from "com.gregtechceu.gtceu.api.sound.SoundEntry"
import { $Recipe, $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $ResourceTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.ResourceTexture"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Object2IntSortedMap } from "it.unimi.dsi.fastutil.objects.Object2IntSortedMap"

export class $GTRecipeType implements $RecipeType<$GTRecipe> {
readonly "group": string
readonly "maxInputs": $Object2IntSortedMap<$RecipeCapability<any>>
readonly "maxOutputs": $Object2IntSortedMap<$RecipeCapability<any>>
readonly "registryName": $ResourceLocation

constructor(resourceLocation0: $ResourceLocation$$Type, string1: string, ...recipeType2s: $RecipeType$$Type<any>[])

public "addCustomRecipeLogic"(iCustomRecipeLogic0: $GTRecipeType$ICustomRecipeLogic$$Type): $GTRecipeType
public "addDataInfo"(function0: $Function$$Type<$CompoundTag$$Type, string>): $GTRecipeType
public "addDataStickEntry"(string0: string, gTRecipe1: $GTRecipe$$Type): void
public "addToCategoryMap"(gTRecipeCategory0: $GTRecipeCategory$$Type, gTRecipe1: $GTRecipe$$Type): void
public "addToMainCategory"(gTRecipe0: $GTRecipe$$Type): void
public "buildRepresentativeRecipes"(): void
public "copyFrom"(gTRecipeBuilder0: $GTRecipeBuilder$$Type): $GTRecipeBuilder
public "db"(): $RecipeDB
public "getAdditionHandler"(): $RecipeAdditionHandler
public "getCategories"(): $Set<$GTRecipeCategory>
public "getCategory"(): $GTRecipeCategory
public "getCategoryMap"(): $Map<$GTRecipeCategory, $Set<$GTRecipe>>
public "getChanceFunction"(): $ChanceBoostFunction
public "getCustomRecipeLogicRunners"(): $List<$GTRecipeType$ICustomRecipeLogic>
public "getDataInfos"(): $List<$Function<$CompoundTag, string>>
public "getDataStickEntry"(string0: string): $Collection<$GTRecipe>
public "getIconSupplier"(): $Supplier<$ItemStack>
public "getMaxInputs"(recipeCapability0: $RecipeCapability$$Type<any>): integer
public "getMaxOutputs"(recipeCapability0: $RecipeCapability$$Type<any>): integer
public "getMinRecipeConditions"(): integer
public "getProxyRecipes"(): $Map<$RecipeType<any>, $List<$GTRecipe>>
public "getRecipeUI"(): $GTRecipeTypeUI
public "getRecipesInCategory"(gTRecipeCategory0: $GTRecipeCategory$$Type): $Set<$GTRecipe>
public "getSmallRecipeMap"(): $GTRecipeType
public "getSound"(): $SoundEntry
public "getVoltageTextOffset"(): integer
public "isHasResearchSlot"(): boolean
public "isOffsetVoltageText"(): boolean
public "isScanner"(): boolean
public "onRecipeBuild"(biConsumer0: $BiConsumer$$Type<$GTRecipeBuilder$$Type, $Consumer$$Type<$FinishedRecipe$$Type>>): $GTRecipeType
public "prepareBuilder"(consumer0: $Consumer$$Type<$GTRecipeBuilder$$Type>): $GTRecipeType
public "recipeBuilder"(string0: string, ...object1s: any[]): $GTRecipeBuilder
public "recipeBuilder"(resourceLocation0: $ResourceLocation$$Type): $GTRecipeBuilder
public "recipeBuilder"(resourceLocation0: $ResourceLocation$$Type, ...object1s: any[]): $GTRecipeBuilder
public "recipeBuilder"(string0: string): $GTRecipeBuilder
public static "register"<T extends $Recipe<any>>(string0: string): $RecipeType<T>
public "removeDataStickEntry"(string0: string, gTRecipe1: $GTRecipe$$Type): boolean
public "searchRecipe"(iRecipeCapabilityHolder0: $IRecipeCapabilityHolder$$Type, predicate1: $Predicate$$Type<$GTRecipe$$Type>): $Iterator<$GTRecipe>
public "setChanceFunction"(chanceBoostFunction0: $ChanceBoostFunction$$Type): $GTRecipeType
public "setEUIO"(iO0: $IO$$Type): $GTRecipeType
public "setHasResearchSlot"(boolean0: boolean): $GTRecipeType
public "setIconSupplier"(supplier0: $Supplier$$Type<$ItemStack>): $GTRecipeType
public "setMaxIOSize"(int0: integer, int1: integer, int2: integer, int3: integer): $GTRecipeType
public "setMaxSize"(iO0: $IO$$Type, recipeCapability1: $RecipeCapability$$Type<any>, int2: integer): $GTRecipeType
public "setMaxTooltips"(int0: integer): $GTRecipeType
public "setMinRecipeConditions"(int0: integer): void
public "setOffsetVoltageText"(boolean0: boolean): $GTRecipeType
public "setProgressBar"(resourceTexture0: $ResourceTexture$$Type, fillDirection1: $ProgressTexture$FillDirection$$Type): $GTRecipeType
public "setRecipeBuilder"(gTRecipeBuilder0: $GTRecipeBuilder$$Type): $GTRecipeType
public "setRecipeUI"(gTRecipeTypeUI0: $GTRecipeTypeUI$$Type): $GTRecipeType
public "setScanner"(boolean0: boolean): $GTRecipeType
public "setSlotOverlay"(boolean0: boolean, boolean1: boolean, iGuiTexture2: $IGuiTexture$$Type): $GTRecipeType
public "setSlotOverlay"(boolean0: boolean, boolean1: boolean, boolean2: boolean, iGuiTexture3: $IGuiTexture$$Type): $GTRecipeType
public "setSmallRecipeMap"(gTRecipeType0: $GTRecipeType$$Type): $GTRecipeType
public "setSound"(soundEntry0: $SoundEntry$$Type): $GTRecipeType
public "setSteamProgressBar"(steamTexture0: $SteamTexture$$Type, fillDirection1: $ProgressTexture$FillDirection$$Type): $GTRecipeType
public "setUiBuilder"(biConsumer0: $BiConsumer$$Type<$GTRecipe$$Type, $WidgetGroup$$Type>): $GTRecipeType
public "setVoltageTextOffset"(int0: integer): $GTRecipeType
public "setXEIVisible"(boolean0: boolean): $GTRecipeType
public static "simple"<T extends $Recipe<any>>(resourceLocation0: $ResourceLocation$$Type): $RecipeType<T>
public "toGTrecipe"(resourceLocation0: $ResourceLocation$$Type, recipe1: $Recipe$$Type<any>): $GTRecipe
get "additionHandler"(): $RecipeAdditionHandler
get "categories"(): $Set<$GTRecipeCategory>
get "category"(): $GTRecipeCategory
get "categoryMap"(): $Map<$GTRecipeCategory, $Set<$GTRecipe>>
get "chanceFunction"(): $ChanceBoostFunction
get "customRecipeLogicRunners"(): $List<$GTRecipeType$ICustomRecipeLogic>
get "dataInfos"(): $List<$Function<$CompoundTag, string>>
get "iconSupplier"(): $Supplier<$ItemStack>
get "minRecipeConditions"(): integer
get "proxyRecipes"(): $Map<$RecipeType<any>, $List<$GTRecipe>>
get "recipeUI"(): $GTRecipeTypeUI
get "smallRecipeMap"(): $GTRecipeType
get "sound"(): $SoundEntry
get "voltageTextOffset"(): integer
get "hasResearchSlot"(): boolean
get "offsetVoltageText"(): boolean
get "scanner"(): boolean
set "chanceFunction"(value: $ChanceBoostFunction$$Type)
set "eUIO"(value: $IO$$Type)
set "hasResearchSlot"(value: boolean)
set "iconSupplier"(value: $Supplier$$Type<$ItemStack>)
set "maxTooltips"(value: integer)
set "minRecipeConditions"(value: integer)
set "offsetVoltageText"(value: boolean)
set "recipeUI"(value: $GTRecipeTypeUI$$Type)
set "scanner"(value: boolean)
set "smallRecipeMap"(value: $GTRecipeType$$Type)
set "sound"(value: $SoundEntry$$Type)
set "uiBuilder"(value: $BiConsumer$$Type<$GTRecipe$$Type, $WidgetGroup$$Type>)
set "voltageTextOffset"(value: integer)
set "xEIVisible"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.api.recipe.ingredient.IRangedIngredient" {
import { $IntProvider } from "net.minecraft.util.valueproviders.IntProvider"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"

export interface $IRangedIngredient {
"getCountProvider"(): $IntProvider
"getMidRoll"(): double
"getSampledCount"(): integer
"isRolled"(): boolean
"reset"(): void
"rollSampledCount"(randomSource0: $RandomSource$$Type): integer
"rollSampledCount"(): integer
"setSampledCount"(int0: integer): void
get "countProvider"(): $IntProvider
get "midRoll"(): double
get "sampledCount"(): integer
get "rolled"(): boolean
set "sampledCount"(value: integer)
}

export namespace $IRangedIngredient {
const probejs$$marker: never
}
export abstract class $IRangedIngredient$$Static implements $IRangedIngredient {
}
}

declare module "com.gregtechceu.gtceu.api.recipe.condition.RecipeConditionType" {
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"
import { $RecipeCondition } from "com.gregtechceu.gtceu.api.recipe.RecipeCondition"
import { $RecipeConditionType$ConditionFactory, $RecipeConditionType$ConditionFactory$$Type } from "com.gregtechceu.gtceu.api.recipe.condition.RecipeConditionType$ConditionFactory"

export class $RecipeConditionType<T extends $RecipeCondition<T> = $RecipeCondition<T>> {
readonly "codec": $Codec<T>
readonly "factory": $RecipeConditionType$ConditionFactory<T>

constructor(conditionFactory0: $RecipeConditionType$ConditionFactory$$Type<T>, codec1: $Codec$$Type<T>)

public "getCodec"(): $Codec<T>
}
}

declare module "com.gregtechceu.gtceu.api.recipe.GTRecipeType$ICustomRecipeLogic" {
import { $GTRecipe } from "com.gregtechceu.gtceu.api.recipe.GTRecipe"
import { $IRecipeCapabilityHolder$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.IRecipeCapabilityHolder"

export interface $GTRecipeType$ICustomRecipeLogic {
"buildRepresentativeRecipes"(): void
"createCustomRecipe"(iRecipeCapabilityHolder0: $IRecipeCapabilityHolder$$Type): $GTRecipe
}

export namespace $GTRecipeType$ICustomRecipeLogic {
const probejs$$marker: never
}
export abstract class $GTRecipeType$ICustomRecipeLogic$$Static implements $GTRecipeType$ICustomRecipeLogic {
}
}

declare module "com.gregtechceu.gtceu.api.recipe.ingredient.IntProviderIngredient" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $IIngredientSerializer } from "net.minecraftforge.common.crafting.IIngredientSerializer"
import { $InputItem } from "dev.latvian.mods.kubejs.item.InputItem"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $ItemStackSet } from "dev.latvian.mods.kubejs.item.ItemStackSet"
import { $Set } from "java.util.Set"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $Ingredient, $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $JsonElement } from "com.google.gson.JsonElement"
import { $IRangedIngredient } from "com.gregtechceu.gtceu.api.recipe.ingredient.IRangedIngredient"
import { $IntProvider, $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $IntProviderIngredient extends $Ingredient implements $IRangedIngredient {
static readonly "EMPTY_STACK_ARRAY": $ItemStack[]
static readonly "SERIALIZER": $IIngredientSerializer<$IntProviderIngredient>
static readonly "TYPE": $ResourceLocation

public "and"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $Predicate<$ItemStack>
public "and"(ingredient: $Ingredient$$Type): $Ingredient
public "asIngredient"(): $Ingredient
public "asStack"(): $InputItem
public "canBeUsedForMatching"(): boolean
public static "fromJson"(jsonObject0: $JsonObject$$Type): $IntProviderIngredient
public "getCountProvider"(): $IntProvider
public "getDisplayStacks"(): $ItemStackSet
public "getFirst"(): $ItemStack
public "getInner"(): $Ingredient
public "getItemIds"(): $Set<string>
public "getItemTypes"(): $Set<$Item>
public "getMaxSizeStack"(): $ItemStack
public "getMidRoll"(): double
public "getSampledCount"(): integer
public "getStacks"(): $ItemStackSet
public static "isEqual"<T>(object0: any): $Predicate<T>
public "isRolled"(): boolean
public "isWildcard"(): boolean
public "negate"(): $Predicate<$ItemStack>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public static "of"(ingredient0: $Ingredient$$Type, intProvider1: $IntProvider$$Type): $IntProviderIngredient
public static "of"(itemStack0: $ItemStack$$Type, intProvider1: $IntProvider$$Type): $IntProviderIngredient
public "or"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $Predicate<$ItemStack>
public "or"(ingredient: $Ingredient$$Type): $Ingredient
public "reset"(): void
public "rollSampledCount"(randomSource0: $RandomSource$$Type): integer
public "rollSampledCount"(): integer
public "setSampledCount"(int0: integer): void
public "subtract"(subtracted: $Ingredient$$Type): $Ingredient
public "testItem"(item: $Item$$Type): boolean
public "toJson"(): $JsonElement
public "withCount"(count: integer): $InputItem
get "countProvider"(): $IntProvider
get "displayStacks"(): $ItemStackSet
get "first"(): $ItemStack
get "inner"(): $Ingredient
get "itemIds"(): $Set<string>
get "itemTypes"(): $Set<$Item>
get "maxSizeStack"(): $ItemStack
get "midRoll"(): double
get "sampledCount"(): integer
get "stacks"(): $ItemStackSet
get "rolled"(): boolean
get "wildcard"(): boolean
set "sampledCount"(value: integer)
}
}

declare module "com.gregtechceu.gtceu.api.recipe.ingredient.EnergyStack" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Record } from "java.lang.Record"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $EnergyStack extends $Record {
static readonly "CODEC": $Codec<$EnergyStack>
static readonly "EMPTY": $EnergyStack
static readonly "MAX": $EnergyStack

constructor(long0: long)
constructor(voltage: long, amperage: long)

public "add"(long0: long, long1: long): $EnergyStack
public "addAmperage"(long0: long): $EnergyStack
public "addVoltage"(long0: long): $EnergyStack
public "amperage"(): long
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $EnergyStack
public "getTotalEU"(): long
public "isEmpty"(): boolean
public "multiplyAmperage"(long0: long): $EnergyStack
public "multiplyVoltage"(double0: double): $EnergyStack
public "multiplyVoltage"(long0: long): $EnergyStack
public static "sum"(energyStack0: $EnergyStack$$Type, energyStack1: $EnergyStack$$Type): $EnergyStack
public "toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "voltage"(): long
public "withAmperage"(long0: long): $EnergyStack
public "withVoltage"(long0: long): $EnergyStack
get "totalEU"(): long
get "empty"(): boolean
}
}

declare module "com.gregtechceu.gtceu.api.recipe.ResearchRecipeBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $GTRecipeBuilder$ResearchRecipeEntry } from "com.gregtechceu.gtceu.data.recipe.builder.GTRecipeBuilder$ResearchRecipeEntry"
import { $FluidStack$$Type } from "net.minecraftforge.fluids.FluidStack"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $ResearchRecipeBuilder<T extends $ResearchRecipeBuilder<T> = $ResearchRecipeBuilder<T>> {
constructor()

public "EUt"(long0: long, long1: long): T
public "EUt"(long0: long): T
public "build"(resourceLocation0: $ResourceLocation$$Type): $GTRecipeBuilder$ResearchRecipeEntry
public "dataStack"(itemStack0: $ItemStack$$Type): T
public "getDefaultDataItem"(): $ItemStack
public "researchFluidStack"(fluidStack0: $FluidStack$$Type): T
public "researchId"(string0: string): T
public "researchStack"(itemStack0: $ItemStack$$Type): T
get "defaultDataItem"(): $ItemStack
}
}

