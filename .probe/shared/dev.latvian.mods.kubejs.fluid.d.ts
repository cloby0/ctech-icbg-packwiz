declare module "dev.latvian.mods.kubejs.fluid.FluidBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ArchitecturyFluidAttributes, $ArchitecturyFluidAttributes$$Type } from "dev.architectury.core.fluid.ArchitecturyFluidAttributes"
import { $FlowingFluid } from "net.minecraft.world.level.material.FlowingFluid"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $FlowingFluidBuilder, $FlowingFluidBuilder$$Type } from "dev.latvian.mods.kubejs.fluid.FlowingFluidBuilder"
import { $Color$$Type } from "dev.latvian.mods.rhino.mod.util.color.Color"
import { $FluidBlockBuilder, $FluidBlockBuilder$$Type } from "dev.latvian.mods.kubejs.fluid.FluidBlockBuilder"
import { $FluidBucketItemBuilder, $FluidBucketItemBuilder$$Type } from "dev.latvian.mods.kubejs.fluid.FluidBucketItemBuilder"
import { $BuilderBase } from "dev.latvian.mods.kubejs.registry.BuilderBase"
import { $Rarity$$Type } from "net.minecraft.world.item.Rarity"

export class $FluidBuilder extends $BuilderBase<$FlowingFluid> {
constructor(i: $ResourceLocation$$Type)

public "bucketColor"(c: $Color$$Type): $FluidBuilder
public "builtinTextures"(): $FluidBuilder
public "color"(c: $Color$$Type): $FluidBuilder
public "createAttributes"(): $ArchitecturyFluidAttributes
public "density"(density: integer): $FluidBuilder
public "displayName"(name: $Component$$Type): $BuilderBase<$FlowingFluid>
public "flowingTexture"(id: $ResourceLocation$$Type): $FluidBuilder
public "gaseous"(): $FluidBuilder
public "luminosity"(luminosity: integer): $FluidBuilder
public "noBlock"(): $FluidBuilder
public "noBucket"(): $FluidBuilder
public "rarity"(rarity: $Rarity$$Type): $FluidBuilder
public "renderType"(l: string): $FluidBuilder
public "stillTexture"(id: $ResourceLocation$$Type): $FluidBuilder
public "tag"(tag: $ResourceLocation$$Type): $BuilderBase<$FlowingFluid>
public "temperature"(temperature: integer): $FluidBuilder
public "thickTexture"(color: $Color$$Type): $FluidBuilder
public "thinTexture"(color: $Color$$Type): $FluidBuilder
public "translucent"(): $FluidBuilder
public "viscosity"(viscosity: integer): $FluidBuilder
get "attributes"(): $ArchitecturyFluidAttributes
set "attributes"(value: $ArchitecturyFluidAttributes$$Type)
get "block"(): $FluidBlockBuilder
set "block"(value: $FluidBlockBuilder$$Type)
get "bucketItem"(): $FluidBucketItemBuilder
set "bucketItem"(value: $FluidBucketItemBuilder$$Type)
get "flowingFluid"(): $FlowingFluidBuilder
set "flowingFluid"(value: $FlowingFluidBuilder$$Type)
}
}

declare module "dev.latvian.mods.kubejs.fluid.FluidWrapper" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $FluidStackJS, $FluidStackJS$$Type } from "dev.latvian.mods.kubejs.fluid.FluidStackJS"
import { $List } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Fluid, $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"

export class $FluidWrapper {
static readonly "LAVA_ID": $ResourceLocation
static readonly "WATER_ID": $ResourceLocation

constructor()

public static "exists"(id: $ResourceLocation$$Type): boolean
public static "getEmpty"(): $FluidStackJS
public static "getId"(fluid: $Fluid$$Type): $ResourceLocation
public static "getType"(id: $ResourceLocation$$Type): $Fluid
public static "getTypes"(): $List<string>
public static "lava"(): $FluidStackJS
public static "lava"(amount: integer): $FluidStackJS
public static "of"(o: $FluidStackJS$$Type, amount: integer): $FluidStackJS
public static "of"(o: $FluidStackJS$$Type): $FluidStackJS
public static "of"(o: $FluidStackJS$$Type, amount: integer, nbt: $CompoundTag$$Type): $FluidStackJS
public static "of"(o: $FluidStackJS$$Type, nbt: $CompoundTag$$Type): $FluidStackJS
public static "water"(): $FluidStackJS
public static "water"(amount: integer): $FluidStackJS
}
}

declare module "dev.latvian.mods.kubejs.fluid.FluidLike" {
import { $ReplacementMatch } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"

export interface $FluidLike extends $ReplacementMatch {
"copy"(amount: long): $FluidLike
"getAmount"(): long
"isEmpty"(): boolean
"matches"(other: $FluidLike$$Type): boolean
get "amount"(): long
get "empty"(): boolean
}

export namespace $FluidLike {
function of(o: any): $ReplacementMatch
}
export abstract class $FluidLike$$Static implements $FluidLike {
static "of"(o: any): $ReplacementMatch
}
}

declare module "dev.latvian.mods.kubejs.fluid.OutputFluid" {
import { $FluidLike, $FluidLike$$Type } from "dev.latvian.mods.kubejs.fluid.FluidLike"
import { $RecipeJS$$Type } from "dev.latvian.mods.kubejs.recipe.RecipeJS"
import { $OutputReplacementTransformer$Replacement } from "dev.latvian.mods.kubejs.recipe.OutputReplacementTransformer$Replacement"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $OutputReplacementTransformer$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacementTransformer"
import { $OutputReplacement, $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"

export interface $OutputFluid extends $FluidLike, $OutputReplacement {
"copy"(amount: long): $FluidLike
"getAmount"(): long
"isEmpty"(): boolean
"matches"(other: $FluidLike$$Type): boolean
"replaceOutput"(recipe: $RecipeJS$$Type, match: $ReplacementMatch$$Type, original: $OutputReplacement$$Type): any
"transform"(transformer: $OutputReplacementTransformer$$Type): $OutputReplacementTransformer$Replacement
get "amount"(): long
get "empty"(): boolean
}

export namespace $OutputFluid {
function of(o: any): $OutputReplacement
}
export abstract class $OutputFluid$$Static implements $OutputFluid {
static "of"(o: any): $OutputReplacement
}
}

declare module "dev.latvian.mods.kubejs.fluid.FluidBucketItemBuilder" {
import { $FluidBuilder, $FluidBuilder$$Type } from "dev.latvian.mods.kubejs.fluid.FluidBuilder"
import { $BucketItem } from "net.minecraft.world.item.BucketItem"
import { $ItemBuilder } from "dev.latvian.mods.kubejs.item.ItemBuilder"

export class $FluidBucketItemBuilder extends $ItemBuilder {
readonly "fluidBuilder": $FluidBuilder

constructor(b: $FluidBuilder$$Type)

public "createObject"(): $BucketItem
}
}

declare module "dev.latvian.mods.kubejs.fluid.FlowingFluidBuilder" {
import { $FlowingFluid } from "net.minecraft.world.level.material.FlowingFluid"
import { $FluidBuilder, $FluidBuilder$$Type } from "dev.latvian.mods.kubejs.fluid.FluidBuilder"
import { $BuilderBase } from "dev.latvian.mods.kubejs.registry.BuilderBase"

export class $FlowingFluidBuilder extends $BuilderBase<$FlowingFluid> {
readonly "fluidBuilder": $FluidBuilder

constructor(b: $FluidBuilder$$Type)

}
}

declare module "dev.latvian.mods.kubejs.fluid.FluidStackJS" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject } from "com.google.gson.JsonObject"
import { $FluidLike$$Type } from "dev.latvian.mods.kubejs.fluid.FluidLike"
import { $InputReplacementTransformer$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacementTransformer"
import { $Collection } from "java.util.Collection"
import { $OutputReplacementTransformer$Replacement } from "dev.latvian.mods.kubejs.recipe.OutputReplacementTransformer$Replacement"
import { $OutputFluid } from "dev.latvian.mods.kubejs.fluid.OutputFluid"
import { $OutputReplacementTransformer$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacementTransformer"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $RecipeJS$$Type } from "dev.latvian.mods.kubejs.recipe.RecipeJS"
import { $InputReplacementTransformer$Replacement } from "dev.latvian.mods.kubejs.recipe.InputReplacementTransformer$Replacement"
import { $Fluid } from "net.minecraft.world.level.material.Fluid"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $FluidStack } from "dev.architectury.fluid.FluidStack"
import { $WrappedJS } from "dev.latvian.mods.kubejs.util.WrappedJS"
import { $InputFluid } from "dev.latvian.mods.kubejs.fluid.InputFluid"

export class $FluidStackJS implements $WrappedJS, $InputFluid, $OutputFluid {
constructor()

public "copy"(): $FluidStackJS
public static "fromJson"(e: $JsonElement$$Type): $FluidStackJS
public "getAmount"(): long
public "getChance"(): double
public "getFluid"(): $Fluid
public "getFluidStack"(): $FluidStack
public "getId"(): string
public "getNbt"(): $CompoundTag
public "getTags"(): $Collection<$ResourceLocation>
public "hasChance"(): boolean
public "hasTag"(tag: $ResourceLocation$$Type): boolean
public "isEmpty"(): boolean
public "matches"(other: $FluidLike$$Type): boolean
public static "of"(o: any, amount: long, nbt: $CompoundTag$$Type): $FluidStackJS
public static "of"(o: any): $FluidStackJS
public "removeChance"(): void
public "replaceInput"(recipe: $RecipeJS$$Type, match: $ReplacementMatch$$Type, original: $InputReplacement$$Type): any
public "replaceOutput"(recipe: $RecipeJS$$Type, match: $ReplacementMatch$$Type, original: $OutputReplacement$$Type): any
public "setAmount"(long0: long): void
public "setChance"(c: double): void
public "setNbt"(compoundTag0: $CompoundTag$$Type): void
public "strongEquals"(o: any): boolean
public "toJson"(): $JsonObject
public "toNBT"(): $CompoundTag
public "transform"(transformer: $InputReplacementTransformer$$Type): $InputReplacementTransformer$Replacement
public "transform"(transformer: $OutputReplacementTransformer$$Type): $OutputReplacementTransformer$Replacement
public "withAmount"(amount: long): $FluidStackJS
public "withChance"(c: double): $FluidStackJS
public "withNBT"(nbt: $CompoundTag$$Type): $FluidStackJS
get "amount"(): long
get "chance"(): double
get "fluid"(): $Fluid
get "fluidStack"(): $FluidStack
get "id"(): string
get "nbt"(): $CompoundTag
get "tags"(): $Collection<$ResourceLocation>
get "empty"(): boolean
set "amount"(value: long)
set "chance"(value: double)
set "nbt"(value: $CompoundTag$$Type)
}
}

declare module "dev.latvian.mods.kubejs.fluid.FluidBlockBuilder" {
import { $BlockBuilder } from "dev.latvian.mods.kubejs.block.BlockBuilder"
import { $FluidBuilder$$Type } from "dev.latvian.mods.kubejs.fluid.FluidBuilder"

export class $FluidBlockBuilder extends $BlockBuilder {
constructor(b: $FluidBuilder$$Type)

}
}

declare module "dev.latvian.mods.kubejs.fluid.InputFluid" {
import { $InputReplacement, $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $FluidLike, $FluidLike$$Type } from "dev.latvian.mods.kubejs.fluid.FluidLike"
import { $RecipeJS$$Type } from "dev.latvian.mods.kubejs.recipe.RecipeJS"
import { $InputReplacementTransformer$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacementTransformer"
import { $InputReplacementTransformer$Replacement } from "dev.latvian.mods.kubejs.recipe.InputReplacementTransformer$Replacement"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"

export interface $InputFluid extends $FluidLike, $InputReplacement {
"copy"(amount: long): $FluidLike
"getAmount"(): long
"isEmpty"(): boolean
"matches"(other: $FluidLike$$Type): boolean
"replaceInput"(recipe: $RecipeJS$$Type, match: $ReplacementMatch$$Type, original: $InputReplacement$$Type): any
"transform"(transformer: $InputReplacementTransformer$$Type): $InputReplacementTransformer$Replacement
get "amount"(): long
get "empty"(): boolean
}

export namespace $InputFluid {
function of(o: any): $InputReplacement
}
export abstract class $InputFluid$$Static implements $InputFluid {
static "of"(o: any): $InputReplacement
}
}

