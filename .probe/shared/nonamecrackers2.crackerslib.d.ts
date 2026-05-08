declare module "nonamecrackers2.crackerslib.client.event.impl.OnConfigScreenOpened" {
import { $ModConfig$Type, $ModConfig$Type$$Type } from "net.minecraftforge.fml.config.ModConfig$Type"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $OnConfigScreenOpened extends $Event {
constructor(string0: string, type1: $ModConfig$Type$$Type)
constructor()

public "getInitialPath"(): string
public "getModId"(): string
public "getType"(): $ModConfig$Type
public "setInitialPath"(string0: string): void
get "initialPath"(): string
get "modId"(): string
get "type"(): $ModConfig$Type
set "initialPath"(value: string)
}
}

declare module "nonamecrackers2.crackerslib.client.event.impl.ConfigMenuButtonEvent" {
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $ConfigMenuButtons$Factory, $ConfigMenuButtons$Factory$$Type } from "nonamecrackers2.crackerslib.client.gui.ConfigMenuButtons$Factory"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $ConfigMenuButtonEvent extends $Event implements $IModBusEvent {
constructor(string0: string)
constructor()

public "defaultButtonWithSingleCharacter"(char0: character, int1: integer): void
public "getFactory"(): $ConfigMenuButtons$Factory
public "getModId"(): string
public "registerFactory"(factory0: $ConfigMenuButtons$Factory$$Type): void
get "factory"(): $ConfigMenuButtons$Factory
get "modId"(): string
}
}

declare module "nonamecrackers2.crackerslib.common.event.impl.OnConfigOptionSaved" {
import { $ModConfig$Type, $ModConfig$Type$$Type } from "net.minecraftforge.fml.config.ModConfig$Type"
import { $OnConfigOptionSaved$Source, $OnConfigOptionSaved$Source$$Type } from "nonamecrackers2.crackerslib.common.event.impl.OnConfigOptionSaved$Source"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$$Type } from "net.minecraftforge.common.ForgeConfigSpec$ConfigValue"

export class $OnConfigOptionSaved<T = any> extends $Event {
constructor(string0: string, type1: $ModConfig$Type$$Type, source2: $OnConfigOptionSaved$Source$$Type, configValue3: $ForgeConfigSpec$ConfigValue$$Type<T>, t4: T, boolean5: boolean)
constructor()

public "didValueChange"(): boolean
public "getConfigOption"(): $ForgeConfigSpec$ConfigValue<T>
public "getModId"(): string
public "getNewValue"(): T
public "getOverrideValue"(): T
public "getSource"(): $OnConfigOptionSaved$Source
public "getType"(): $ModConfig$Type
public "overrideValue"(t0: T): void
get "configOption"(): $ForgeConfigSpec$ConfigValue<T>
get "modId"(): string
get "newValue"(): T
get "source"(): $OnConfigOptionSaved$Source
get "type"(): $ModConfig$Type
}
}

declare module "nonamecrackers2.crackerslib.common.config.preset.ConfigPreset" {
import { $ConfigPreset$Builder } from "nonamecrackers2.crackerslib.common.config.preset.ConfigPreset$Builder"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Record } from "java.lang.Record"

export class $ConfigPreset extends $Record {
constructor(values: $Map$$Type<string, any>, name: $Component$$Type, description: $Component$$Type)

public static "builder"(component0: $Component$$Type): $ConfigPreset$Builder
public static "defaultPreset"(): $ConfigPreset
public "description"(): $Component
public "getTooltip"(boolean0: boolean): $Component
public "getValue"<T>(string0: string): T
public "hasValue"(string0: string): boolean
public "isDefault"(): boolean
public "name"(): $Component
public "values"(): $Map<string, any>
get "default"(): boolean
}
}

declare module "nonamecrackers2.crackerslib.mixin.MixinGameRendererAccessor" {
import { $Camera$$Type } from "net.minecraft.client.Camera"

export interface $MixinGameRendererAccessor {
"crackerslib$getFov"(camera0: $Camera$$Type, float1: float, boolean2: boolean): double
"crackerslib$getZoom"(): float
"crackerslib$getZoomX"(): float
"crackerslib$getZoomY"(): float
}

export namespace $MixinGameRendererAccessor {
const probejs$$marker: never
}
export abstract class $MixinGameRendererAccessor$$Static implements $MixinGameRendererAccessor {
}
}

declare module "nonamecrackers2.crackerslib.client.event.impl.RegisterConfigScreensEvent$Builder" {
import { $ModConfig$Type$$Type } from "net.minecraftforge.fml.config.ModConfig$Type"
import { $ForgeConfigSpec$$Type } from "net.minecraftforge.common.ForgeConfigSpec"

export class $RegisterConfigScreensEvent$Builder {
public "addSpec"(type0: $ModConfig$Type$$Type, forgeConfigSpec1: $ForgeConfigSpec$$Type): $RegisterConfigScreensEvent$Builder
public "register"(): void
}
}

declare module "nonamecrackers2.crackerslib.client.gui.ConfigMenuButtons$Factory" {
import { $AbstractButton } from "net.minecraft.client.gui.components.AbstractButton"
import { $Button$OnPress$$Type } from "net.minecraft.client.gui.components.Button$OnPress"

export interface $ConfigMenuButtons$Factory {
"makeButton"(onPress0: $Button$OnPress$$Type): $AbstractButton
}

export namespace $ConfigMenuButtons$Factory {
const probejs$$marker: never
}
export abstract class $ConfigMenuButtons$Factory$$Static implements $ConfigMenuButtons$Factory {
}
}

declare module "nonamecrackers2.crackerslib.common.config.preset.ConfigPreset$Builder" {
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ConfigPreset } from "nonamecrackers2.crackerslib.common.config.preset.ConfigPreset"
import { $ForgeConfigSpec$ConfigValue$$Type } from "net.minecraftforge.common.ForgeConfigSpec$ConfigValue"

export class $ConfigPreset$Builder {
public "build"(): $ConfigPreset
public "setDescription"(component0: $Component$$Type): $ConfigPreset$Builder
public "setPreset"<T>(configValue0: $ForgeConfigSpec$ConfigValue$$Type<T>, t1: T): $ConfigPreset$Builder
public "setPreset"(string0: string, object1: any): $ConfigPreset$Builder
set "description"(value: $Component$$Type)
}
}

declare module "nonamecrackers2.crackerslib.common.event.impl.OnConfigOptionSaved$Source" {
import { $Enum } from "java.lang.Enum"

export class $OnConfigOptionSaved$Source extends $Enum<$OnConfigOptionSaved$Source> {
static readonly "COMMAND": $OnConfigOptionSaved$Source
static readonly "CONFIG_SCREEN": $OnConfigOptionSaved$Source

public static "valueOf"(string0: string): $OnConfigOptionSaved$Source
public static "values"(): $OnConfigOptionSaved$Source[]
}
}

declare module "nonamecrackers2.crackerslib.mixin.MixinBlockEntityType" {
import { $Set, $Set$$Type } from "java.util.Set"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"

export interface $MixinBlockEntityType {
"crackerslib$getValidBlocks"(): $Set<$Block>
"crackerslib$setValidBlocks"(set0: $Set$$Type<$Block$$Type>): void
}

export namespace $MixinBlockEntityType {
const probejs$$marker: never
}
export abstract class $MixinBlockEntityType$$Static implements $MixinBlockEntityType {
}
}

declare module "nonamecrackers2.crackerslib.client.gui.ConfigHomeScreen$Builder" {
import { $Tooltip$$Type } from "net.minecraft.client.gui.components.Tooltip"
import { $AbstractButton } from "net.minecraft.client.gui.components.AbstractButton"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ConfigHomeScreen$Builder$CustomHomeScreen$$Type } from "nonamecrackers2.crackerslib.client.gui.ConfigHomeScreen$Builder$CustomHomeScreen"
import { $ConfigHomeScreenFactory } from "nonamecrackers2.crackerslib.client.config.ConfigHomeScreenFactory"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $ConfigHomeScreen$Builder {
public "addExtraButton"(supplier0: $Supplier$$Type<$AbstractButton>): $ConfigHomeScreen$Builder
public "addLinkButton"(component0: $Component$$Type, string1: string, tooltip2: $Tooltip$$Type): $ConfigHomeScreen$Builder
public "addLinkButton"(component0: $Component$$Type, string1: string): $ConfigHomeScreen$Builder
public "build"(customHomeScreen0: $ConfigHomeScreen$Builder$CustomHomeScreen$$Type): $ConfigHomeScreenFactory
public "build"(): $ConfigHomeScreenFactory
public "crackersDefault"(): $ConfigHomeScreen$Builder
public "crackersDefault"(string0: string): $ConfigHomeScreen$Builder
public "standardLinks"(string0: string, string1: string, string2: string): $ConfigHomeScreen$Builder
public "totalColumns"(int0: integer): $ConfigHomeScreen$Builder
}
}

declare module "nonamecrackers2.crackerslib.client.gui.ConfigHomeScreen$Builder$CustomHomeScreen" {
import { $List$$Type } from "java.util.List"
import { $AbstractButton$$Type } from "net.minecraft.client.gui.components.AbstractButton"
import { $ModConfig$Type$$Type } from "net.minecraftforge.fml.config.ModConfig$Type"
import { $Map$$Type } from "java.util.Map"
import { $ForgeConfigSpec$$Type } from "net.minecraftforge.common.ForgeConfigSpec"
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $TitleLogo$$Type } from "nonamecrackers2.crackerslib.client.gui.title.TitleLogo"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ConfigHomeScreen } from "nonamecrackers2.crackerslib.client.gui.ConfigHomeScreen"

export interface $ConfigHomeScreen$Builder$CustomHomeScreen {
"build"(string0: string, map1: $Map$$Type<$ModConfig$Type$$Type, $ForgeConfigSpec$$Type>, titleLogo2: $TitleLogo$$Type, boolean3: boolean, boolean4: boolean, screen5: $Screen$$Type, list6: $List$$Type<$Supplier$$Type<$AbstractButton$$Type>>, int7: integer): $ConfigHomeScreen
}

export namespace $ConfigHomeScreen$Builder$CustomHomeScreen {
const probejs$$marker: never
}
export abstract class $ConfigHomeScreen$Builder$CustomHomeScreen$$Static implements $ConfigHomeScreen$Builder$CustomHomeScreen {
}
}

declare module "nonamecrackers2.crackerslib.client.event.impl.AddConfigEntryToMenuEvent" {
import { $ModConfig$Type, $ModConfig$Type$$Type } from "net.minecraftforge.fml.config.ModConfig$Type"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ForgeConfigSpec$ConfigValue$$Type } from "net.minecraftforge.common.ForgeConfigSpec$ConfigValue"

export class $AddConfigEntryToMenuEvent extends $Event {
constructor(string0: string, type1: $ModConfig$Type$$Type, string2: string)
constructor()

public "getModId"(): string
public "getType"(): $ModConfig$Type
public "getValuePath"(): string
public "isValue"(configValue0: $ForgeConfigSpec$ConfigValue$$Type<any>): boolean
get "modId"(): string
get "type"(): $ModConfig$Type
get "valuePath"(): string
}
}

declare module "nonamecrackers2.crackerslib.client.config.ConfigHomeScreenFactory" {
import { $ModConfig$Type$$Type } from "net.minecraftforge.fml.config.ModConfig$Type"
import { $Map$$Type } from "java.util.Map"
import { $ForgeConfigSpec$$Type } from "net.minecraftforge.common.ForgeConfigSpec"
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $ConfigHomeScreen } from "nonamecrackers2.crackerslib.client.gui.ConfigHomeScreen"

export interface $ConfigHomeScreenFactory {
"build"(string0: string, map1: $Map$$Type<$ModConfig$Type$$Type, $ForgeConfigSpec$$Type>, boolean2: boolean, boolean3: boolean, screen4: $Screen$$Type): $ConfigHomeScreen
}

export namespace $ConfigHomeScreenFactory {
const probejs$$marker: never
}
export abstract class $ConfigHomeScreenFactory$$Static implements $ConfigHomeScreenFactory {
}
}

declare module "nonamecrackers2.crackerslib.client.event.impl.RegisterConfigScreensEvent" {
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $RegisterConfigScreensEvent$Builder } from "nonamecrackers2.crackerslib.client.event.impl.RegisterConfigScreensEvent$Builder"
import { $ConfigHomeScreenFactory$$Type } from "nonamecrackers2.crackerslib.client.config.ConfigHomeScreenFactory"

export class $RegisterConfigScreensEvent extends $Event implements $IModBusEvent {
constructor(string0: string)
constructor()

public "builder"(configHomeScreenFactory0: $ConfigHomeScreenFactory$$Type): $RegisterConfigScreensEvent$Builder
}
}

declare module "nonamecrackers2.crackerslib.client.gui.title.TitleLogo" {
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"

export interface $TitleLogo {
"blit"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float): void
"getHeight"(): integer
"getWidth"(): integer
get "height"(): integer
get "width"(): integer
}

export namespace $TitleLogo {
const probejs$$marker: never
}
export abstract class $TitleLogo$$Static implements $TitleLogo {
}
}

declare module "nonamecrackers2.crackerslib.client.gui.ConfigHomeScreen" {
import { $ForgeConfigSpec$$Type } from "net.minecraftforge.common.ForgeConfigSpec"
import { $Screen, $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $TitleLogo$$Type } from "nonamecrackers2.crackerslib.client.gui.title.TitleLogo"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $FocusNavigationEvent$$Type } from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import { $GuiEventListener, $GuiEventListener$$Type } from "net.minecraft.client.gui.components.events.GuiEventListener"
import { $List$$Type } from "java.util.List"
import { $AbstractButton$$Type } from "net.minecraft.client.gui.components.AbstractButton"
import { $ModConfig$Type$$Type } from "net.minecraftforge.fml.config.ModConfig$Type"
import { $Map$$Type } from "java.util.Map"
import { $ConfigHomeScreen$Builder } from "nonamecrackers2.crackerslib.client.gui.ConfigHomeScreen$Builder"
import { $Optional } from "java.util.Optional"
import { $ComponentPath } from "net.minecraft.client.gui.ComponentPath"

export class $ConfigHomeScreen extends $Screen {
constructor(string0: string, map1: $Map$$Type<$ModConfig$Type$$Type, $ForgeConfigSpec$$Type>, titleLogo2: $TitleLogo$$Type, boolean3: boolean, boolean4: boolean, screen5: $Screen$$Type, list6: $List$$Type<$Supplier$$Type<$AbstractButton$$Type>>, int7: integer)

public static "builder"(titleLogo0: $TitleLogo$$Type): $ConfigHomeScreen$Builder
public "charTyped"(char0: character, int1: integer): boolean
public "getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
public "getCurrentFocusPath"(): $ComponentPath
public "getTabOrderGroup"(): integer
public "isFocused"(): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "magicalSpecialHackyFocus"(guiEventListener0: $GuiEventListener$$Type): void
public "mouseClicked"(double0: double, double1: double, int2: integer): boolean
public "mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseReleased"(double0: double, double1: double, int2: integer): boolean
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
public "setFocused"(boolean0: boolean): void
get "currentFocusPath"(): $ComponentPath
get "tabOrderGroup"(): integer
get "focused"(): boolean
set "focused"(value: boolean)
}
}

declare module "nonamecrackers2.crackerslib.common.config.preset.RegisterConfigPresetsEvent" {
import { $ModConfig$Type$$Type } from "net.minecraftforge.fml.config.ModConfig$Type"
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ConfigPreset$$Type } from "nonamecrackers2.crackerslib.common.config.preset.ConfigPreset"
import { $ForgeConfigSpec$ConfigValue$$Type } from "net.minecraftforge.common.ForgeConfigSpec$ConfigValue"

export class $RegisterConfigPresetsEvent extends $Event implements $IModBusEvent {
constructor(string0: string)
constructor()

public "exclude"(string0: string): $RegisterConfigPresetsEvent
public "exclude"(configValue0: $ForgeConfigSpec$ConfigValue$$Type<any>): $RegisterConfigPresetsEvent
public "getModId"(): string
public "registerPreset"(type0: $ModConfig$Type$$Type, configPreset1: $ConfigPreset$$Type): void
get "modId"(): string
}
}

