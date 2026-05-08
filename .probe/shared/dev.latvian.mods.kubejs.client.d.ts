declare module "dev.latvian.mods.kubejs.client.ClientInitEventJS" {
import { $ClientEventJS } from "dev.latvian.mods.kubejs.client.ClientEventJS"
import { $BlockEntityRendererProvider$$Type } from "net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $EntityRendererProvider$$Type } from "net.minecraft.client.renderer.entity.EntityRendererProvider"
import { $MenuRegistry$ScreenFactory$$Type } from "dev.architectury.registry.menu.MenuRegistry$ScreenFactory"
import { $MenuType$$Type } from "net.minecraft.world.inventory.MenuType"

export class $ClientInitEventJS extends $ClientEventJS {
constructor()

public "registerBlockEntityRenderer"(type: $BlockEntityType$$Type<any>, renderer: $BlockEntityRendererProvider$$Type): void
public "registerEntityRenderer"(type: $EntityType$$Type<any>, renderer: $EntityRendererProvider$$Type): void
public "registerMenuScreen"(type: $MenuType$$Type<any>, screenFactory: $MenuRegistry$ScreenFactory$$Type): void
}
}

declare module "dev.latvian.mods.kubejs.client.VariantBlockStateGenerator$Model" {
import { $JsonObject } from "com.google.gson.JsonObject"

export class $VariantBlockStateGenerator$Model {
constructor()

public "model"(s: string): $VariantBlockStateGenerator$Model
public "toJson"(): $JsonObject
public "uvlock"(): $VariantBlockStateGenerator$Model
public "x"(_x: integer): $VariantBlockStateGenerator$Model
public "y"(_y: integer): $VariantBlockStateGenerator$Model
}
}

declare module "dev.latvian.mods.kubejs.client.AtlasSpriteRegistryEventJS" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"

export class $AtlasSpriteRegistryEventJS extends $EventJS {
constructor(registry: $Consumer$$Type<$ResourceLocation$$Type>)

public "register"(id: $ResourceLocation$$Type): void
}
}

declare module "dev.latvian.mods.kubejs.client.VariantBlockStateGenerator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $JsonObject } from "com.google.gson.JsonObject"
import { $VariantBlockStateGenerator$Variant$$Type } from "dev.latvian.mods.kubejs.client.VariantBlockStateGenerator$Variant"

export class $VariantBlockStateGenerator {
constructor()

public "simpleVariant"(key: string, model: string): void
public "toJson"(): $JsonObject
public "variant"(key: string, consumer: $Consumer$$Type<$VariantBlockStateGenerator$Variant$$Type>): void
}
}

declare module "dev.latvian.mods.kubejs.client.GenerateClientAssetsEventJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $ModelGenerator$$Type } from "dev.latvian.mods.kubejs.client.ModelGenerator"
import { $VariantBlockStateGenerator$$Type } from "dev.latvian.mods.kubejs.client.VariantBlockStateGenerator"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $MultipartBlockStateGenerator$$Type } from "dev.latvian.mods.kubejs.client.MultipartBlockStateGenerator"
import { $AssetJsonGenerator, $AssetJsonGenerator$$Type } from "dev.latvian.mods.kubejs.generator.AssetJsonGenerator"

export class $GenerateClientAssetsEventJS extends $EventJS {
readonly "generator": $AssetJsonGenerator

constructor(gen: $AssetJsonGenerator$$Type)

public "add"(location: $ResourceLocation$$Type, json: $JsonElement$$Type): void
public "addBlockState"(id: $ResourceLocation$$Type, consumer: $Consumer$$Type<$VariantBlockStateGenerator$$Type>): void
public "addLang"(key: string, value: string): void
public "addModel"(type: string, id: $ResourceLocation$$Type, consumer: $Consumer$$Type<$ModelGenerator$$Type>): void
public "addMultipartBlockState"(id: $ResourceLocation$$Type, consumer: $Consumer$$Type<$MultipartBlockStateGenerator$$Type>): void
public "defaultHandheldItemModel"(id: $ResourceLocation$$Type): void
public "defaultItemModel"(id: $ResourceLocation$$Type): void
public "stencil"(target: $ResourceLocation$$Type, stencil: string, colors: $JsonObject$$Type): void
}
}

declare module "dev.latvian.mods.kubejs.client.DebugInfoEventJS" {
import { $ClientEventJS } from "dev.latvian.mods.kubejs.client.ClientEventJS"
import { $List, $List$$Type } from "java.util.List"

/** Invoked when the debug info is rendered. */
export class $DebugInfoEventJS extends $ClientEventJS {
constructor(l: $List$$Type<string>)

/** The lines of debug info. Mutating this list will change the debug info. */
public "getLines"(): $List<string>
/** Whether the debug info should be rendered. */
public "getShowDebug"(): boolean
get "lines"(): $List<string>
get "showDebug"(): boolean
}
}

declare module "dev.latvian.mods.kubejs.client.painter.PainterObjectStorage" {
import { $ScreenPainterObject } from "dev.latvian.mods.kubejs.client.painter.screen.ScreenPainterObject"
import { $PainterObject } from "dev.latvian.mods.kubejs.client.painter.PainterObject"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Collection } from "java.util.Collection"
import { $Painter, $Painter$$Type } from "dev.latvian.mods.kubejs.client.painter.Painter"

export class $PainterObjectStorage {
readonly "painter": $Painter

constructor(p: $Painter$$Type)

public "clear"(): void
public "createScreenObjects"(): $ScreenPainterObject[]
public "getObject"(key: string): $PainterObject
public "getObjects"(): $Collection<$PainterObject>
public "handle"(root: $CompoundTag$$Type): void
public "remove"(id: string): void
get "objects"(): $Collection<$PainterObject>
}
}

declare module "dev.latvian.mods.kubejs.client.LangEventJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Map, $Map$$Type } from "java.util.Map"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Pattern } from "java.util.regex.Pattern"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $LangEventJS$Key, $LangEventJS$Key$$Type } from "dev.latvian.mods.kubejs.client.LangEventJS$Key"

export class $LangEventJS extends $EventJS {
static readonly "PATTERN": $Pattern
readonly "lang": string
readonly "map": $Map<$LangEventJS$Key, string>

constructor(lang: string, map: $Map$$Type<$LangEventJS$Key$$Type, string>)

public "add"(namespace: string, key: string, value: string): void
public "add"(key: string, value: string): void
public "addAll"(map: $Map$$Type<string, string>): void
public "addAll"(namespace: string, map: $Map$$Type<string, string>): void
public "renameBiome"(id: $ResourceLocation$$Type, name: string): void
public "renameBlock"(block: $Block$$Type, name: string): void
public "renameEntity"(id: $ResourceLocation$$Type, name: string): void
public "renameItem"(item: $ItemStack$$Type, name: string): void
}
}

declare module "dev.latvian.mods.kubejs.client.ClientEventJS" {
import { $PlayerEventJS } from "dev.latvian.mods.kubejs.player.PlayerEventJS"

export class $ClientEventJS extends $PlayerEventJS {
constructor()

}
}

declare module "dev.latvian.mods.kubejs.client.painter.Painter" {
import { $MutableNumberUnit } from "dev.latvian.mods.unit.MutableNumberUnit"
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $UnitContext } from "dev.latvian.mods.unit.UnitContext"
import { $PainterObject } from "dev.latvian.mods.kubejs.client.painter.PainterObject"
import { $VariableSet } from "dev.latvian.mods.unit.VariableSet"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Unit, $Unit$$Type } from "dev.latvian.mods.unit.Unit"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $ConsoleJS$$Type } from "dev.latvian.mods.kubejs.util.ConsoleJS"
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $UnitVariables } from "dev.latvian.mods.unit.UnitVariables"

export class $Painter implements $UnitVariables {
static readonly "INSTANCE": $Painter
readonly "defaultLineSizeUnit": $MutableNumberUnit
readonly "deltaUnit": $MutableNumberUnit
readonly "id": string
readonly "mouseXUnit": $MutableNumberUnit
readonly "mouseYUnit": $MutableNumberUnit
readonly "screenHeightUnit": $MutableNumberUnit
readonly "screenWidthUnit": $MutableNumberUnit
readonly "unitContext": $UnitContext

constructor(id: string)

public "clear"(): void
public "getObject"(key: string): $PainterObject
public "getVariables"(): $VariableSet
public "guiScreenDraw"(screen: $Screen$$Type, graphics: $GuiGraphics$$Type, mouseX: integer, mouseY: integer, delta: float): void
public "inGameScreenDraw"(graphics: $GuiGraphics$$Type, delta: float): void
public "make"(type: string): $PainterObject
public "paint"(root: $CompoundTag$$Type): void
public "registerBuiltinObjects"(): void
public "setVariable"(key: string, variable: $Unit$$Type): void
public "unitOf"(console: $ConsoleJS$$Type, o: any): $Unit
public "unitOf"(cx: $Context$$Type, o: any): $Unit
get "variables"(): $VariableSet
}
}

declare module "dev.latvian.mods.kubejs.client.LangEventJS$Key" {
import { $Record } from "java.lang.Record"

export class $LangEventJS$Key extends $Record {
constructor(namespace: string, lang: string, key: string)

public "key"(): string
public "lang"(): string
public "namespace"(): string
}
}

declare module "dev.latvian.mods.kubejs.client.painter.PaintEventJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Font } from "net.minecraft.client.gui.Font"
import { $ShaderInstance } from "net.minecraft.client.renderer.ShaderInstance"
import { $GuiGraphics, $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Quaternionf$$Type } from "org.joml.Quaternionf"
import { $BufferBuilder } from "com.mojang.blaze3d.vertex.BufferBuilder"
import { $Screen, $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $VertexFormat$Mode$$Type } from "com.mojang.blaze3d.vertex.VertexFormat$Mode"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $PoseStack } from "com.mojang.blaze3d.vertex.PoseStack"
import { $VertexFormat$$Type } from "com.mojang.blaze3d.vertex.VertexFormat"
import { $ClientEventJS } from "dev.latvian.mods.kubejs.client.ClientEventJS"
import { $Tesselator } from "com.mojang.blaze3d.vertex.Tesselator"
import { $Minecraft, $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $Matrix4f, $Matrix4f$$Type } from "org.joml.Matrix4f"

export class $PaintEventJS extends $ClientEventJS {
readonly "buffer": $BufferBuilder
readonly "delta": float
readonly "font": $Font
readonly "graphics": $GuiGraphics
readonly "matrices": $PoseStack
readonly "mc": $Minecraft
readonly "screen": $Screen
readonly "tesselator": $Tesselator

constructor(m: $Minecraft$$Type, g: $GuiGraphics$$Type, d: float, s: $Screen$$Type)

public "begin"(type: $VertexFormat$Mode$$Type, format: $VertexFormat$$Type): void
public "beginQuads"(texture: boolean): void
public "beginQuads"(format: $VertexFormat$$Type): void
public "bindTextureForSetup"(tex: $ResourceLocation$$Type): void
public "blend"(enabled: boolean): void
public "end"(): void
public "getMatrix"(): $Matrix4f
public "multiply"(q: $Quaternionf$$Type): void
public "multiplyWithMatrix"(m: $Matrix4f$$Type): void
public "pop"(): void
public "push"(): void
public "resetShaderColor"(): void
public "scale"(x: float, y: float, z: float): void
public "setPositionColorShader"(): void
public "setPositionColorTextureShader"(): void
public "setShaderColor"(r: float, g: float, b: float, a: float): void
public "setShaderInstance"(shader: $Supplier$$Type<$ShaderInstance>): void
public "setShaderTexture"(tex: $ResourceLocation$$Type): void
public "translate"(x: double, y: double, z: double): void
public "vertex"(m: $Matrix4f$$Type, x: float, y: float, z: float, col: integer, u: float, v: float): void
public "vertex"(m: $Matrix4f$$Type, x: float, y: float, z: float, col: integer): void
get "matrix"(): $Matrix4f
set "shaderInstance"(value: $Supplier$$Type<$ShaderInstance>)
set "shaderTexture"(value: $ResourceLocation$$Type)
}
}

declare module "dev.latvian.mods.kubejs.client.VariantBlockStateGenerator$Variant" {
import { $JsonElement } from "com.google.gson.JsonElement"
import { $VariantBlockStateGenerator$Model } from "dev.latvian.mods.kubejs.client.VariantBlockStateGenerator$Model"

export class $VariantBlockStateGenerator$Variant {
constructor()

public "model"(s: string): $VariantBlockStateGenerator$Model
public "toJson"(): $JsonElement
}
}

declare module "dev.latvian.mods.kubejs.client.painter.screen.PaintScreenEventJS" {
import { $VariableSet } from "dev.latvian.mods.unit.VariableSet"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $FormattedCharSequence$$Type } from "net.minecraft.util.FormattedCharSequence"
import { $AlignMode$$Type } from "dev.latvian.mods.kubejs.client.painter.screen.AlignMode"
import { $PaintEventJS } from "dev.latvian.mods.kubejs.client.painter.PaintEventJS"
import { $UnitVariables } from "dev.latvian.mods.unit.UnitVariables"
import { $Painter, $Painter$$Type } from "dev.latvian.mods.kubejs.client.painter.Painter"

export class $PaintScreenEventJS extends $PaintEventJS implements $UnitVariables {
readonly "height": integer
readonly "inventory": boolean
readonly "mouseX": integer
readonly "mouseY": integer
readonly "painter": $Painter
readonly "width": integer

constructor(m: $Minecraft$$Type, graphics: $GuiGraphics$$Type, painter: $Painter$$Type, d: float)
constructor(m: $Minecraft$$Type, s: $Screen$$Type, graphics: $GuiGraphics$$Type, painter: $Painter$$Type, mx: integer, my: integer, d: float)

public "alignX"(x: float, w: float, alignX: $AlignMode$$Type): float
public "alignY"(y: float, h: float, alignY: $AlignMode$$Type): float
public "getVariables"(): $VariableSet
public "rawText"(text: $FormattedCharSequence$$Type, x: integer, y: integer, color: integer, shadow: boolean): void
public "rectangle"(x: float, y: float, z: float, w: float, h: float, color: integer, u0: float, v0: float, u1: float, v1: float): void
public "rectangle"(x: float, y: float, z: float, w: float, h: float, color: integer): void
public "rotateDeg"(angle: float): void
public "rotateRad"(angle: float): void
public "scale"(x: float, y: float): void
public "scale"(scale: float): void
public "text"(text: $Component$$Type, x: integer, y: integer, color: integer, shadow: boolean): void
public "translate"(x: double, y: double): void
get "variables"(): $VariableSet
}
}

declare module "dev.latvian.mods.kubejs.client.ModelGenerator$Element" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $JsonObject } from "com.google.gson.JsonObject"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $ModelGenerator$Face$$Type } from "dev.latvian.mods.kubejs.client.ModelGenerator$Face"

export class $ModelGenerator$Element {
constructor()

public "box"(b: $AABB$$Type): $ModelGenerator$Element
public "face"(direction: $Direction$$Type, consumer: $Consumer$$Type<$ModelGenerator$Face$$Type>): void
public "toJson"(): $JsonObject
}
}

declare module "dev.latvian.mods.kubejs.client.painter.PainterObject" {
import { $PainterObjectStorage, $PainterObjectStorage$$Type } from "dev.latvian.mods.kubejs.client.painter.PainterObjectStorage"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Unit, $Unit$$Type } from "dev.latvian.mods.unit.Unit"
import { $SpecialEquality } from "dev.latvian.mods.rhino.util.SpecialEquality"

export class $PainterObject implements $SpecialEquality {
"id": string

constructor()

public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public "id"(i: string): $PainterObject
public "specialEquals"(o: any, shallow: boolean): boolean
public "update"(tag: $CompoundTag$$Type): void
get "parent"(): $PainterObjectStorage
set "parent"(value: $PainterObjectStorage$$Type)
get "visible"(): $Unit
set "visible"(value: $Unit$$Type)
}
}

declare module "dev.latvian.mods.kubejs.client.MultipartBlockStateGenerator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $JsonObject } from "com.google.gson.JsonObject"
import { $MultipartBlockStateGenerator$Part$$Type } from "dev.latvian.mods.kubejs.client.MultipartBlockStateGenerator$Part"

export class $MultipartBlockStateGenerator {
constructor()

public "part"(when: string, model: string): void
public "part"(when: string, consumer: $Consumer$$Type<$MultipartBlockStateGenerator$Part$$Type>): void
public "toJson"(): $JsonObject
}
}

declare module "dev.latvian.mods.kubejs.client.ModelGenerator$Face" {
import { $JsonObject } from "com.google.gson.JsonObject"
import { $Direction$$Type } from "net.minecraft.core.Direction"

export class $ModelGenerator$Face {
constructor()

public "cull"(): $ModelGenerator$Face
public "cull"(d: $Direction$$Type): $ModelGenerator$Face
public "tex"(t: string): $ModelGenerator$Face
public "tintindex"(i: integer): $ModelGenerator$Face
public "toJson"(): $JsonObject
public "uv"(u0: double, v0: double, u1: double, v1: double): $ModelGenerator$Face
}
}

declare module "dev.latvian.mods.kubejs.client.painter.screen.AlignMode" {
import { $Enum } from "java.lang.Enum"

export class $AlignMode extends $Enum<$AlignMode> {
static readonly "CENTER": $AlignMode
static readonly "END": $AlignMode
static readonly "START": $AlignMode

public static "valueOf"(name: string): $AlignMode
public static "values"(): $AlignMode[]
}
}

declare module "dev.latvian.mods.kubejs.client.ModelGenerator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $ModelGenerator$Element$$Type } from "dev.latvian.mods.kubejs.client.ModelGenerator$Element"

export class $ModelGenerator {
constructor()

public "element"(consumer: $Consumer$$Type<$ModelGenerator$Element$$Type>): void
public "parent"(s: string): void
public "texture"(name: string, texture: string): void
public "textures"(json: $JsonObject$$Type): void
public "toJson"(): $JsonObject
}
}

declare module "dev.latvian.mods.kubejs.client.painter.screen.ScreenPainterObject" {
import { $Unit, $Unit$$Type } from "dev.latvian.mods.unit.Unit"
import { $PainterObject } from "dev.latvian.mods.kubejs.client.painter.PainterObject"
import { $ScreenDrawMode } from "dev.latvian.mods.kubejs.client.painter.screen.ScreenDrawMode"
import { $PaintScreenEventJS$$Type } from "dev.latvian.mods.kubejs.client.painter.screen.PaintScreenEventJS"

export class $ScreenPainterObject extends $PainterObject {
"draw": $ScreenDrawMode

constructor()

public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public "draw"(paintScreenEventJS0: $PaintScreenEventJS$$Type): void
public "preDraw"(event: $PaintScreenEventJS$$Type): void
get "x"(): $Unit
set "x"(value: $Unit$$Type)
get "y"(): $Unit
set "y"(value: $Unit$$Type)
get "z"(): $Unit
set "z"(value: $Unit$$Type)
}
}

declare module "dev.latvian.mods.kubejs.client.MultipartBlockStateGenerator$Part" {
import { $JsonObject } from "com.google.gson.JsonObject"
import { $VariantBlockStateGenerator$Model } from "dev.latvian.mods.kubejs.client.VariantBlockStateGenerator$Model"

export class $MultipartBlockStateGenerator$Part {
constructor()

public "model"(s: string): $VariantBlockStateGenerator$Model
public "toJson"(): $JsonObject
}
}

declare module "dev.latvian.mods.kubejs.client.painter.screen.ScreenDrawMode" {
import { $Enum } from "java.lang.Enum"

export class $ScreenDrawMode extends $Enum<$ScreenDrawMode> {
static readonly "ALWAYS": $ScreenDrawMode
static readonly "GUI": $ScreenDrawMode
static readonly "INGAME": $ScreenDrawMode

public "gui"(): boolean
public "ingame"(): boolean
public static "valueOf"(name: string): $ScreenDrawMode
public static "values"(): $ScreenDrawMode[]
}
}

