declare module "com.prunoideae.custom.brew.BrewBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Color, $Color$$Type } from "dev.latvian.mods.rhino.mod.util.color.Color"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Brew } from "vazkii.botania.api.brew.Brew"
import { $Function$$Type } from "java.util.function.Function"
import { $BuilderBase } from "dev.latvian.mods.kubejs.registry.BuilderBase"

export class $BrewBuilder extends $BuilderBase<$Brew> {
constructor(i: $ResourceLocation$$Type)

public "color"(color: $Color$$Type): $BrewBuilder
public "color"(colorProvider: $Function$$Type<$ItemStack$$Type, $Color>): $BrewBuilder
public "cost"(cost: integer): $BrewBuilder
public "effect"(effect: $ResourceLocation$$Type, duration: integer, amplifier: integer, ambient: boolean): $BrewBuilder
public "effect"(effect: $ResourceLocation$$Type, duration: integer, amplifier: integer, ambient: boolean, visible: boolean): $BrewBuilder
public "effect"(effect: $ResourceLocation$$Type, duration: integer, amplifier: integer, ambient: boolean, visible: boolean, showIcon: boolean): $BrewBuilder
public "effect"(effect: $ResourceLocation$$Type): $BrewBuilder
public "effect"(effect: $ResourceLocation$$Type, duration: integer): $BrewBuilder
public "effect"(effect: $ResourceLocation$$Type, duration: integer, amplifier: integer): $BrewBuilder
public "noIncense"(): $BrewBuilder
public "noPendant"(): $BrewBuilder
}
}

declare module "com.prunoideae.custom.brew.BasicBrewJS$Builder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BrewBuilder } from "com.prunoideae.custom.brew.BrewBuilder"
import { $Brew } from "vazkii.botania.api.brew.Brew"

export class $BasicBrewJS$Builder extends $BrewBuilder {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $Brew
}
}

declare module "com.prunoideae.custom.item.RuneItemBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Item } from "net.minecraft.world.item.Item"
import { $ItemBuilder } from "dev.latvian.mods.kubejs.item.ItemBuilder"

export class $RuneItemBuilder extends $ItemBuilder {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $Item
}
}

