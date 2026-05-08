declare module "dev.latvian.mods.kubejs.create.events.BoilerHeaterHandlerEvent" {
import { $BoilerHeaterHandlerEvent$BoilerHeaterCallback$$Type } from "dev.latvian.mods.kubejs.create.events.BoilerHeaterHandlerEvent$BoilerHeaterCallback"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $BlockStatePredicate$$Type } from "dev.latvian.mods.kubejs.block.state.BlockStatePredicate"

export class $BoilerHeaterHandlerEvent extends $EventJS {
constructor()

public "add"(block: $Block$$Type, onUpdate: $BoilerHeaterHandlerEvent$BoilerHeaterCallback$$Type): void
public "addAdvanced"(block: $BlockStatePredicate$$Type, onUpdate: $BoilerHeaterHandlerEvent$BoilerHeaterCallback$$Type): void
}
}

declare module "dev.latvian.mods.kubejs.create.custom.SandpaperItemBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Item } from "net.minecraft.world.item.Item"
import { $ItemBuilder } from "dev.latvian.mods.kubejs.item.ItemBuilder"

export class $SandpaperItemBuilder extends $ItemBuilder {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $Item
}
}

declare module "dev.latvian.mods.kubejs.create.events.SpecialSpoutHandlerEvent" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $SpecialSpoutHandlerEvent$SpoutHandler$$Type } from "dev.latvian.mods.kubejs.create.events.SpecialSpoutHandlerEvent$SpoutHandler"
import { $BlockStatePredicate$$Type } from "dev.latvian.mods.kubejs.block.state.BlockStatePredicate"

export class $SpecialSpoutHandlerEvent extends $EventJS {
constructor()

public "add"(path: $ResourceLocation$$Type, block: $BlockStatePredicate$$Type, handler: $SpecialSpoutHandlerEvent$SpoutHandler$$Type): void
}
}

declare module "dev.latvian.mods.kubejs.create.events.SpecialSpoutHandlerEvent$SpoutHandler" {
import { $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $FluidStackJS$$Type } from "dev.latvian.mods.kubejs.fluid.FluidStackJS"

export interface $SpecialSpoutHandlerEvent$SpoutHandler {
"fillBlock"(blockContainerJS0: $BlockContainerJS$$Type, fluidStackJS1: $FluidStackJS$$Type, boolean2: boolean): long
}

export namespace $SpecialSpoutHandlerEvent$SpoutHandler {
const probejs$$marker: never
}
export abstract class $SpecialSpoutHandlerEvent$SpoutHandler$$Static implements $SpecialSpoutHandlerEvent$SpoutHandler {
}
}

declare module "dev.latvian.mods.kubejs.create.ProcessingRecipeSchema$ProcessingRecipeJS" {
import { $RecipeJS } from "dev.latvian.mods.kubejs.recipe.RecipeJS"

export class $ProcessingRecipeSchema$ProcessingRecipeJS extends $RecipeJS {
constructor()

public "getMod"(): string
public "heated"(): $RecipeJS
public "superheated"(): $RecipeJS
get "mod"(): string
}
}

declare module "dev.latvian.mods.kubejs.create.ProcessingRecipeSchema$ItemApplicationRecipeJS" {
import { $RecipeJS } from "dev.latvian.mods.kubejs.recipe.RecipeJS"
import { $ProcessingRecipeSchema$ProcessingRecipeJS } from "dev.latvian.mods.kubejs.create.ProcessingRecipeSchema$ProcessingRecipeJS"

export class $ProcessingRecipeSchema$ItemApplicationRecipeJS extends $ProcessingRecipeSchema$ProcessingRecipeJS {
constructor()

public "getMod"(): string
public "keepHeldItem"(): $RecipeJS
get "mod"(): string
}
}

declare module "dev.latvian.mods.kubejs.create.SequencedAssemblyItemBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Item } from "net.minecraft.world.item.Item"
import { $ItemBuilder } from "dev.latvian.mods.kubejs.item.ItemBuilder"

export class $SequencedAssemblyItemBuilder extends $ItemBuilder {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $Item
}
}

declare module "dev.latvian.mods.kubejs.create.SequencedAssemblyRecipeSchema$SequencedAssemblyRecipeJS" {
import { $RecipeJS } from "dev.latvian.mods.kubejs.recipe.RecipeJS"

export class $SequencedAssemblyRecipeSchema$SequencedAssemblyRecipeJS extends $RecipeJS {
constructor()

public "getMod"(): string
get "mod"(): string
}
}

declare module "dev.latvian.mods.kubejs.create.events.SpecialFluidHandlerEvent$PipeHandler" {
import { $FluidStackJS$$Type } from "dev.latvian.mods.kubejs.fluid.FluidStackJS"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $SpecialFluidHandlerEvent$PipeHandler {
"apply"(level0: $Level$$Type, aABB1: $AABB$$Type, fluidStackJS2: $FluidStackJS$$Type): void
}

export namespace $SpecialFluidHandlerEvent$PipeHandler {
const probejs$$marker: never
}
export abstract class $SpecialFluidHandlerEvent$PipeHandler$$Static implements $SpecialFluidHandlerEvent$PipeHandler {
}
}

declare module "dev.latvian.mods.kubejs.create.events.BoilerHeaterHandlerEvent$BoilerHeaterCallback" {
import { $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"

export interface $BoilerHeaterHandlerEvent$BoilerHeaterCallback {
"updateHeat"(blockContainerJS0: $BlockContainerJS$$Type): float
}

export namespace $BoilerHeaterHandlerEvent$BoilerHeaterCallback {
const probejs$$marker: never
}
export abstract class $BoilerHeaterHandlerEvent$BoilerHeaterCallback$$Static implements $BoilerHeaterHandlerEvent$BoilerHeaterCallback {
}
}

declare module "dev.latvian.mods.kubejs.create.events.SpecialFluidHandlerEvent" {
import { $FluidIngredient$$Type } from "com.simibubi.create.foundation.fluid.FluidIngredient"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $SpecialFluidHandlerEvent$PipeHandler$$Type } from "dev.latvian.mods.kubejs.create.events.SpecialFluidHandlerEvent$PipeHandler"

export class $SpecialFluidHandlerEvent extends $EventJS {
constructor()

public "add"(fluidIngredient: $FluidIngredient$$Type, handler: $SpecialFluidHandlerEvent$PipeHandler$$Type): void
}
}

