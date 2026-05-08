declare module "vazkii.patchouli.mixin.AccessorSmithingTrimRecipe" {
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"

export interface $AccessorSmithingTrimRecipe {
"getAddition"(): $Ingredient
"getBase"(): $Ingredient
"getTemplate"(): $Ingredient
get "addition"(): $Ingredient
get "base"(): $Ingredient
get "template"(): $Ingredient
}

export namespace $AccessorSmithingTrimRecipe {
const probejs$$marker: never
}
export abstract class $AccessorSmithingTrimRecipe$$Static implements $AccessorSmithingTrimRecipe {
}
}

declare module "vazkii.patchouli.api.BookContentsReloadEvent" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $BookContentsReloadEvent extends $Event {
constructor()
constructor(resourceLocation0: $ResourceLocation$$Type)

public "getBook"(): $ResourceLocation
get "book"(): $ResourceLocation
}
}

declare module "vazkii.patchouli.mixin.AccessorSmithingTransformRecipe" {
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"

export interface $AccessorSmithingTransformRecipe {
"getAddition"(): $Ingredient
"getBase"(): $Ingredient
"getTemplate"(): $Ingredient
get "addition"(): $Ingredient
get "base"(): $Ingredient
get "template"(): $Ingredient
}

export namespace $AccessorSmithingTransformRecipe {
const probejs$$marker: never
}
export abstract class $AccessorSmithingTransformRecipe$$Static implements $AccessorSmithingTransformRecipe {
}
}

declare module "vazkii.patchouli.mixin.client.AccessorScreen" {
import { $List } from "java.util.List"
import { $NarratableEntry } from "net.minecraft.client.gui.narration.NarratableEntry"
import { $Renderable } from "net.minecraft.client.gui.components.Renderable"

export interface $AccessorScreen {
"getNarratables"(): $List<$NarratableEntry>
"getRenderables"(): $List<$Renderable>
get "narratables"(): $List<$NarratableEntry>
get "renderables"(): $List<$Renderable>
}

export namespace $AccessorScreen {
const probejs$$marker: never
}
export abstract class $AccessorScreen$$Static implements $AccessorScreen {
}
}

declare module "vazkii.patchouli.mixin.client.AccessorClientAdvancements" {
import { $AdvancementProgress } from "net.minecraft.advancements.AdvancementProgress"
import { $Map } from "java.util.Map"
import { $Advancement } from "net.minecraft.advancements.Advancement"

export interface $AccessorClientAdvancements {
"getProgress"(): $Map<$Advancement, $AdvancementProgress>
get "progress"(): $Map<$Advancement, $AdvancementProgress>
}

export namespace $AccessorClientAdvancements {
const probejs$$marker: never
}
export abstract class $AccessorClientAdvancements$$Static implements $AccessorClientAdvancements {
}
}

declare module "vazkii.patchouli.mixin.client.AccessorKeyMapping" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorKeyMapping {
}

export namespace $AccessorKeyMapping {
const probejs$$marker: never
}
export abstract class $AccessorKeyMapping$$Static implements $AccessorKeyMapping {
}
}

declare module "vazkii.patchouli.mixin.client.AccessorMultiBufferSource" {
import { $Map } from "java.util.Map"
import { $BufferBuilder } from "com.mojang.blaze3d.vertex.BufferBuilder"
import { $RenderType } from "net.minecraft.client.renderer.RenderType"

export interface $AccessorMultiBufferSource {
"getFallbackBuffer"(): $BufferBuilder
"getFixedBuffers"(): $Map<$RenderType, $BufferBuilder>
get "fallbackBuffer"(): $BufferBuilder
get "fixedBuffers"(): $Map<$RenderType, $BufferBuilder>
}

export namespace $AccessorMultiBufferSource {
const probejs$$marker: never
}
export abstract class $AccessorMultiBufferSource$$Static implements $AccessorMultiBufferSource {
}
}

declare module "vazkii.patchouli.api.BookDrawScreenEvent" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $GuiGraphics, $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Screen, $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $BookDrawScreenEvent extends $Event {
constructor(resourceLocation0: $ResourceLocation$$Type, screen1: $Screen$$Type, int2: integer, int3: integer, float4: float, guiGraphics5: $GuiGraphics$$Type)
constructor()

public "getBook"(): $ResourceLocation
public "getGraphics"(): $GuiGraphics
public "getMouseX"(): integer
public "getMouseY"(): integer
public "getPartialTicks"(): float
public "getScreen"(): $Screen
get "book"(): $ResourceLocation
get "graphics"(): $GuiGraphics
get "mouseX"(): integer
get "mouseY"(): integer
get "partialTicks"(): float
get "screen"(): $Screen
}
}

