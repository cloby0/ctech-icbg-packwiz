declare module "net.minecraft.client.InputType" {
import { $Enum } from "java.lang.Enum"

export class $InputType extends $Enum<$InputType> {
static readonly "KEYBOARD_ARROW": $InputType
static readonly "KEYBOARD_TAB": $InputType
static readonly "MOUSE": $InputType
static readonly "NONE": $InputType

public "isKeyboard"(): boolean
public "isMouse"(): boolean
public static "valueOf"(string0: string): $InputType
public static "values"(): $InputType[]
get "keyboard"(): boolean
get "mouse"(): boolean
}
}

declare module "net.minecraft.client.GameNarrator" {
import { $NarratorStatus$$Type } from "net.minecraft.client.NarratorStatus"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $Narrator } from "com.mojang.text2speech.Narrator"

export class $GameNarrator {
static readonly "NO_TITLE": $Component
readonly "narrator": $Narrator

constructor(minecraft0: $Minecraft$$Type)

public "checkStatus"(boolean0: boolean): void
public "clear"(): void
public "destroy"(): void
public "isActive"(): boolean
public "say"(component0: $Component$$Type): void
public "sayChat"(component0: $Component$$Type): void
public "sayNow"(string0: string): void
public "sayNow"(component0: $Component$$Type): void
public "updateNarratorStatus"(narratorStatus0: $NarratorStatus$$Type): void
get "active"(): boolean
}
}

declare module "net.minecraft.client.ParticleStatus" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Enum } from "java.lang.Enum"
import { $OptionEnum } from "net.minecraft.util.OptionEnum"

export class $ParticleStatus extends $Enum<$ParticleStatus> implements $OptionEnum {
static readonly "ALL": $ParticleStatus
static readonly "DECREASED": $ParticleStatus
static readonly "MINIMAL": $ParticleStatus

public static "byId"(int0: integer): $ParticleStatus
public "getCaption"(): $Component
public "getId"(): integer
public "getKey"(): string
public static "valueOf"(string0: string): $ParticleStatus
public static "values"(): $ParticleStatus[]
get "caption"(): $Component
get "id"(): integer
get "key"(): string
}
}

declare module "net.minecraft.client.OptionInstance$TooltipSupplier" {
import { $Tooltip } from "net.minecraft.client.gui.components.Tooltip"

export interface $OptionInstance$TooltipSupplier<T = any> {
"apply"(t0: T): $Tooltip
}

export namespace $OptionInstance$TooltipSupplier {
const probejs$$marker: never
}
export abstract class $OptionInstance$TooltipSupplier$$Static<T = any> implements $OptionInstance$TooltipSupplier<T> {
}
}

declare module "net.minecraft.client.KeyboardHandler" {
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"

export class $KeyboardHandler {
static readonly "DEBUG_CRASH_TIME": integer

constructor(minecraft0: $Minecraft$$Type)

public "getClipboard"(): string
public "handler$bmj000$onKeyInput"(long0: long, int1: integer, int2: integer, int3: integer, int4: integer, callbackInfo5: $CallbackInfo$$Type): void
public "handler$cge000$onChar"(window: long, codePoint: integer, modifiers: integer, info: $CallbackInfo$$Type): void
public "handler$cge000$onKey"(window: long, key: integer, scancode: integer, action: integer, modifiers: integer, info: $CallbackInfo$$Type): void
public "handler$dpp000$onKeyPress"(long0: long, int1: integer, int2: integer, int3: integer, int4: integer, callbackInfo5: $CallbackInfo$$Type): void
public "keyPress"(long0: long, int1: integer, int2: integer, int3: integer, int4: integer): void
public "setClipboard"(string0: string): void
public "setup"(long0: long): void
public "tick"(): void
get "clipboard"(): string
set "clipboard"(value: string)
set "up"(value: long)
}
}

declare module "net.minecraft.client.User$Type" {
import { $Enum } from "java.lang.Enum"

export class $User$Type extends $Enum<$User$Type> {
static readonly "LEGACY": $User$Type
static readonly "MOJANG": $User$Type
static readonly "MSA": $User$Type

public static "byName"(string0: string): $User$Type
public "getName"(): string
public static "valueOf"(string0: string): $User$Type
public static "values"(): $User$Type[]
get "name"(): string
}
}

declare module "net.minecraft.client.GuiMessage" {
import { $GuiMessageTag, $GuiMessageTag$$Type } from "net.minecraft.client.GuiMessageTag"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Record } from "java.lang.Record"
import { $MessageSignature, $MessageSignature$$Type } from "net.minecraft.network.chat.MessageSignature"

export class $GuiMessage extends $Record {
constructor(int0: integer, component1: $Component$$Type, messageSignature2: $MessageSignature$$Type, guiMessageTag3: $GuiMessageTag$$Type)

public "addedTime"(): integer
public "content"(): $Component
public "signature"(): $MessageSignature
public "tag"(): $GuiMessageTag
}
}

declare module "net.minecraft.client.OptionInstance$Enum" {
import { $Record } from "java.lang.Record"
import { $Function } from "java.util.function.Function"
import { $OptionInstance$TooltipSupplier$$Type } from "net.minecraft.client.OptionInstance$TooltipSupplier"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $OptionInstance$CycleableValueSet } from "net.minecraft.client.OptionInstance$CycleableValueSet"
import { $List, $List$$Type } from "java.util.List"
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"
import { $Options$$Type } from "net.minecraft.client.Options"
import { $CycleButton$ValueListSupplier } from "net.minecraft.client.gui.components.CycleButton$ValueListSupplier"
import { $OptionInstance } from "net.minecraft.client.OptionInstance"
import { $Optional } from "java.util.Optional"
import { $OptionInstance$CycleableValueSet$ValueSetter } from "net.minecraft.client.OptionInstance$CycleableValueSet$ValueSetter"
import { $AbstractWidget } from "net.minecraft.client.gui.components.AbstractWidget"

export class $OptionInstance$Enum<T = any> extends $Record implements $OptionInstance$CycleableValueSet<T> {
constructor(list0: $List$$Type<T>, codec1: $Codec$$Type<T>)

public "codec"(): $Codec<T>
public "createButton"(tooltipSupplier0: $OptionInstance$TooltipSupplier$$Type<T>, options1: $Options$$Type, int2: integer, int3: integer, int4: integer, consumer5: $Consumer$$Type<T>): $Function<$OptionInstance<T>, $AbstractWidget>
public "validateValue"(t0: T): $Optional<T>
public "valueListSupplier"(): $CycleButton$ValueListSupplier<T>
public "valueSetter"(): $OptionInstance$CycleableValueSet$ValueSetter<T>
public "values"(): $List<T>
}
}

declare module "net.minecraft.client.Options" {
import { $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $PlayerModelPart$$Type } from "net.minecraft.world.entity.player.PlayerModelPart"
import { $InputConstants$Key$$Type } from "com.mojang.blaze3d.platform.InputConstants$Key"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ParticleStatus } from "net.minecraft.client.ParticleStatus"
import { $IMixinOptions } from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinOptions"
import { $HumanoidArm } from "net.minecraft.world.entity.HumanoidArm"
import { $CloudStatus } from "net.minecraft.client.CloudStatus"
import { $File, $File$$Type } from "java.io.File"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $AttackIndicatorStatus } from "net.minecraft.client.AttackIndicatorStatus"
import { $PrioritizeChunkUpdates } from "net.minecraft.client.PrioritizeChunkUpdates"
import { $List, $List$$Type } from "java.util.List"
import { $NarratorStatus } from "net.minecraft.client.NarratorStatus"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $CameraType, $CameraType$$Type } from "net.minecraft.client.CameraType"
import { $PackRepository$$Type } from "net.minecraft.server.packs.repository.PackRepository"
import { $GraphicsStatus } from "net.minecraft.client.GraphicsStatus"
import { $OptionInstance } from "net.minecraft.client.OptionInstance"
import { $KeyMapping, $KeyMapping$$Type } from "net.minecraft.client.KeyMapping"
import { $TutorialSteps, $TutorialSteps$$Type } from "net.minecraft.client.tutorial.TutorialSteps"
import { $ChatVisiblity } from "net.minecraft.world.entity.player.ChatVisiblity"

export class $Options implements $IMixinOptions {
static readonly "AUTO_GUI_SCALE": integer
static readonly "DEFAULT_SOUND_DEVICE": string
static readonly "RENDER_DISTANCE_EXTREME": integer
static readonly "RENDER_DISTANCE_FAR": integer
static readonly "RENDER_DISTANCE_NORMAL": integer
static readonly "RENDER_DISTANCE_REALLY_FAR": integer
static readonly "RENDER_DISTANCE_SHORT": integer
static readonly "RENDER_DISTANCE_TINY": integer
static readonly "UNLIMITED_FRAMERATE_CUTOFF": integer
readonly "bobView": $OptionInstance<boolean>
readonly "keyAdvancements": $KeyMapping
readonly "keyAttack": $KeyMapping
readonly "keyChat": $KeyMapping
readonly "keyCommand": $KeyMapping
readonly "keyDown": $KeyMapping
readonly "keyDrop": $KeyMapping
readonly "keyFullscreen": $KeyMapping
readonly "keyHotbarSlots": $KeyMapping[]
readonly "keyInventory": $KeyMapping
readonly "keyJump": $KeyMapping
readonly "keyLeft": $KeyMapping
readonly "keyLoadHotbarActivator": $KeyMapping
readonly "keyPickItem": $KeyMapping
readonly "keyPlayerList": $KeyMapping
readonly "keyRight": $KeyMapping
readonly "keySaveHotbarActivator": $KeyMapping
readonly "keyScreenshot": $KeyMapping
readonly "keyShift": $KeyMapping
readonly "keySmoothCamera": $KeyMapping
readonly "keySocialInteractions": $KeyMapping
readonly "keySpectatorOutlines": $KeyMapping
readonly "keySprint": $KeyMapping
readonly "keySwapOffhand": $KeyMapping
readonly "keyTogglePerspective": $KeyMapping
readonly "keyUp": $KeyMapping
readonly "keyUse": $KeyMapping
"useNativeTransport": boolean

constructor(minecraft0: $Minecraft$$Type, file1: $File$$Type)

public "allowServerListing"(): $OptionInstance<boolean>
public "ambientOcclusion"(): $OptionInstance<boolean>
public "attackIndicator"(): $OptionInstance<$AttackIndicatorStatus>
public "autoJump"(): $OptionInstance<boolean>
public "autoSuggestions"(): $OptionInstance<boolean>
public "backgroundForChatOnly"(): $OptionInstance<boolean>
public "biomeBlendRadius"(): $OptionInstance<integer>
public "bobView"(): $OptionInstance<boolean>
public "broadcastOptions"(): void
public "chatColors"(): $OptionInstance<boolean>
public "chatDelay"(): $OptionInstance<double>
public "chatHeightFocused"(): $OptionInstance<double>
public "chatHeightUnfocused"(): $OptionInstance<double>
public "chatLineSpacing"(): $OptionInstance<double>
public "chatLinks"(): $OptionInstance<boolean>
public "chatLinksPrompt"(): $OptionInstance<boolean>
public "chatOpacity"(): $OptionInstance<double>
public "chatScale"(): $OptionInstance<double>
public "chatVisibility"(): $OptionInstance<$ChatVisiblity>
public "chatWidth"(): $OptionInstance<double>
public "cloudStatus"(): $OptionInstance<$CloudStatus>
public "damageTiltStrength"(): $OptionInstance<double>
public "darkMojangStudiosBackground"(): $OptionInstance<boolean>
public "darknessEffectScale"(): $OptionInstance<double>
public "directionalAudio"(): $OptionInstance<boolean>
public "discreteMouseScroll"(): $OptionInstance<boolean>
public "dumpOptionsForReport"(): string
public "enableVsync"(): $OptionInstance<boolean>
public "entityDistanceScaling"(): $OptionInstance<double>
public "entityShadows"(): $OptionInstance<boolean>
public "forceUnicodeFont"(): $OptionInstance<boolean>
public "fov"(): $OptionInstance<integer>
public "fovEffectScale"(): $OptionInstance<double>
public "framerateLimit"(): $OptionInstance<integer>
public "fullscreen"(): $OptionInstance<boolean>
public "gamma"(): $OptionInstance<double>
public static "genericValueLabel"(component0: $Component$$Type, component1: $Component$$Type): $Component
public static "genericValueLabel"(component0: $Component$$Type, int1: integer): $Component
public "getBackgroundColor"(float0: float): integer
public "getBackgroundColor"(int0: integer): integer
public "getBackgroundOpacity"(float0: float): float
public "getCameraType"(): $CameraType
public "getCloudsType"(): $CloudStatus
public "getEffectiveRenderDistance"(): integer
public "getFile"(): $File
public "getSoundSourceOptionInstance"(soundSource0: $SoundSource$$Type): $OptionInstance<double>
public "getSoundSourceVolume"(soundSource0: $SoundSource$$Type): float
public "glintSpeed"(): $OptionInstance<double>
public "glintStrength"(): $OptionInstance<double>
public "graphicsMode"(): $OptionInstance<$GraphicsStatus>
public "guiScale"(): $OptionInstance<integer>
public "handler$hhg000$onGetCameraType"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public "hideLightningFlash"(): $OptionInstance<boolean>
public "hideMatchedNames"(): $OptionInstance<boolean>
public "highContrast"(): $OptionInstance<boolean>
public "invertYMouse"(): $OptionInstance<boolean>
public "isModelPartEnabled"(playerModelPart0: $PlayerModelPart$$Type): boolean
public "load"(): void
public "load"(boolean0: boolean): void
public "loadSelectedResourcePacks"(packRepository0: $PackRepository$$Type): void
public "mainHand"(): $OptionInstance<$HumanoidArm>
public "mipmapLevels"(): $OptionInstance<integer>
public "mouseWheelSensitivity"(): $OptionInstance<double>
public "narrator"(): $OptionInstance<$NarratorStatus>
public "notificationDisplayTime"(): $OptionInstance<double>
public "onlyShowSecureChat"(): $OptionInstance<boolean>
public "operatorItemsTab"(): $OptionInstance<boolean>
public "panoramaSpeed"(): $OptionInstance<double>
public "particles"(): $OptionInstance<$ParticleStatus>
public "prioritizeChunkUpdates"(): $OptionInstance<$PrioritizeChunkUpdates>
public "rawMouseInput"(): $OptionInstance<boolean>
public "realmsNotifications"(): $OptionInstance<boolean>
public "reducedDebugInfo"(): $OptionInstance<boolean>
public "renderDistance"(): $OptionInstance<integer>
public "save"(): void
public "screenEffectScale"(): $OptionInstance<double>
public "sensitivity"(): $OptionInstance<double>
public "setCameraType"(cameraType0: $CameraType$$Type): void
public "setKey"(keyMapping0: $KeyMapping$$Type, key1: $InputConstants$Key$$Type): void
public "setServerRenderDistance"(int0: integer): void
public "showAutosaveIndicator"(): $OptionInstance<boolean>
public "showSubtitles"(): $OptionInstance<boolean>
public "simulationDistance"(): $OptionInstance<integer>
public "soundDevice"(): $OptionInstance<string>
public "telemetryOptInExtra"(): $OptionInstance<boolean>
public "textBackgroundOpacity"(): $OptionInstance<double>
public "toggleCrouch"(): $OptionInstance<boolean>
public "toggleModelPart"(playerModelPart0: $PlayerModelPart$$Type, boolean1: boolean): void
public "toggleSprint"(): $OptionInstance<boolean>
public "touchscreen"(): $OptionInstance<boolean>
public "updateResourcePacks"(packRepository0: $PackRepository$$Type): void
public "useNativeTransport"(): boolean
get "advancedItemTooltips"(): boolean
set "advancedItemTooltips"(value: boolean)
get "fullscreenVideoModeString"(): string
set "fullscreenVideoModeString"(value: string)
get "glDebugVerbosity"(): integer
set "glDebugVerbosity"(value: integer)
get "hideBundleTutorial"(): boolean
set "hideBundleTutorial"(value: boolean)
get "hideGui"(): boolean
set "hideGui"(value: boolean)
get "hideServerAddress"(): boolean
set "hideServerAddress"(value: boolean)
get "incompatibleResourcePacks"(): $List<string>
set "incompatibleResourcePacks"(value: $List$$Type<string>)
get "joinedFirstServer"(): boolean
set "joinedFirstServer"(value: boolean)
get "keyMappings"(): $KeyMapping[]
set "keyMappings"(value: $KeyMapping$$Type[])
get "languageCode"(): string
set "languageCode"(value: string)
get "lastMpIp"(): string
set "lastMpIp"(value: string)
get "onboardAccessibility"(): boolean
set "onboardAccessibility"(value: boolean)
get "overrideHeight"(): integer
set "overrideHeight"(value: integer)
get "overrideWidth"(): integer
set "overrideWidth"(value: integer)
get "pauseOnLostFocus"(): boolean
set "pauseOnLostFocus"(value: boolean)
get "renderDebug"(): boolean
set "renderDebug"(value: boolean)
get "renderDebugCharts"(): boolean
set "renderDebugCharts"(value: boolean)
get "renderFpsChart"(): boolean
set "renderFpsChart"(value: boolean)
get "resourcePacks"(): $List<string>
set "resourcePacks"(value: $List$$Type<string>)
get "skipMultiplayerWarning"(): boolean
set "skipMultiplayerWarning"(value: boolean)
get "skipRealms32bitWarning"(): boolean
set "skipRealms32bitWarning"(value: boolean)
get "smoothCamera"(): boolean
set "smoothCamera"(value: boolean)
get "syncWrites"(): boolean
set "syncWrites"(value: boolean)
get "tutorialStep"(): $TutorialSteps
set "tutorialStep"(value: $TutorialSteps$$Type)
get "cameraType"(): $CameraType
get "cloudsType"(): $CloudStatus
get "effectiveRenderDistance"(): integer
get "file"(): $File
set "cameraType"(value: $CameraType$$Type)
set "serverRenderDistance"(value: integer)
}
}

declare module "net.minecraft.client.Realms32BitWarningStatus" {
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export class $Realms32BitWarningStatus {
constructor(minecraft0: $Minecraft$$Type)

public "showRealms32BitWarningIfNeeded"(screen0: $Screen$$Type): void
}
}

declare module "net.minecraft.client.CloudStatus" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Enum } from "java.lang.Enum"
import { $OptionEnum } from "net.minecraft.util.OptionEnum"

export class $CloudStatus extends $Enum<$CloudStatus> implements $OptionEnum {
static readonly "FANCY": $CloudStatus
static readonly "FAST": $CloudStatus
static readonly "OFF": $CloudStatus

public "getCaption"(): $Component
public "getId"(): integer
public "getKey"(): string
public static "valueOf"(string0: string): $CloudStatus
public static "values"(): $CloudStatus[]
get "caption"(): $Component
get "id"(): integer
get "key"(): string
}
}

declare module "net.minecraft.client.Camera$NearPlane" {
import { $Vec3 } from "net.minecraft.world.phys.Vec3"

export class $Camera$NearPlane {
public "getBottomLeft"(): $Vec3
public "getBottomRight"(): $Vec3
public "getPointOnPlane"(float0: float, float1: float): $Vec3
public "getTopLeft"(): $Vec3
public "getTopRight"(): $Vec3
get "bottomLeft"(): $Vec3
get "bottomRight"(): $Vec3
get "topLeft"(): $Vec3
get "topRight"(): $Vec3
}
}

declare module "net.minecraft.client.GuiMessageTag$Icon" {
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Enum } from "java.lang.Enum"

export class $GuiMessageTag$Icon extends $Enum<$GuiMessageTag$Icon> {
static readonly "CHAT_MODIFIED": $GuiMessageTag$Icon
readonly "height": integer
readonly "u": integer
readonly "v": integer
readonly "width": integer

public "draw"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer): void
public static "valueOf"(string0: string): $GuiMessageTag$Icon
public static "values"(): $GuiMessageTag$Icon[]
}
}

declare module "net.minecraft.client.HotbarManager" {
import { $Hotbar } from "net.minecraft.client.player.inventory.Hotbar"
import { $DataFixer$$Type } from "com.mojang.datafixers.DataFixer"
import { $File$$Type } from "java.io.File"

export class $HotbarManager {
static readonly "NUM_HOTBAR_GROUPS": integer

constructor(file0: $File$$Type, dataFixer1: $DataFixer$$Type)

public "get"(int0: integer): $Hotbar
public "save"(): void
}
}

declare module "net.minecraft.client.Timer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Timer {
constructor(float0: float, long1: long)

public "advanceTime"(long0: long): integer
get "msPerTick"(): float
set "msPerTick"(value: float)
get "partialTick"(): float
set "partialTick"(value: float)
get "tickDelta"(): float
set "tickDelta"(value: float)
}
}

declare module "net.minecraft.client.OptionInstance" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $OptionInstance$Enum } from "net.minecraft.client.OptionInstance$Enum"
import { $OptionInstance$ValueSet, $OptionInstance$ValueSet$$Type } from "net.minecraft.client.OptionInstance$ValueSet"
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"
import { $Options$$Type } from "net.minecraft.client.Options"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $OptionInstance$CaptionBasedToString, $OptionInstance$CaptionBasedToString$$Type } from "net.minecraft.client.OptionInstance$CaptionBasedToString"
import { $AbstractWidget } from "net.minecraft.client.gui.components.AbstractWidget"
import { $OptionEnum, $OptionEnum$$Type } from "net.minecraft.util.OptionEnum"
import { $OptionInstance$TooltipSupplier, $OptionInstance$TooltipSupplier$$Type } from "net.minecraft.client.OptionInstance$TooltipSupplier"

export class $OptionInstance<T = any> {
static readonly "BOOLEAN_TO_STRING": $OptionInstance$CaptionBasedToString<boolean>
static readonly "BOOLEAN_VALUES": $OptionInstance$Enum<boolean>

constructor(string0: string, tooltipSupplier1: $OptionInstance$TooltipSupplier$$Type<T>, captionBasedToString2: $OptionInstance$CaptionBasedToString$$Type<T>, valueSet3: $OptionInstance$ValueSet$$Type<T>, t4: T, consumer5: $Consumer$$Type<T>)
constructor(string0: string, tooltipSupplier1: $OptionInstance$TooltipSupplier$$Type<T>, captionBasedToString2: $OptionInstance$CaptionBasedToString$$Type<T>, valueSet3: $OptionInstance$ValueSet$$Type<T>, codec4: $Codec$$Type<T>, t5: T, consumer6: $Consumer$$Type<T>)

public static "cachedConstantTooltip"<T>(component0: $Component$$Type): $OptionInstance$TooltipSupplier<T>
public "codec"(): $Codec<T>
public static "createBoolean"(string0: string, tooltipSupplier1: $OptionInstance$TooltipSupplier$$Type<boolean>, boolean2: boolean): $OptionInstance<boolean>
public static "createBoolean"(string0: string, boolean1: boolean, consumer2: $Consumer$$Type<boolean>): $OptionInstance<boolean>
public static "createBoolean"(string0: string, tooltipSupplier1: $OptionInstance$TooltipSupplier$$Type<boolean>, boolean2: boolean, consumer3: $Consumer$$Type<boolean>): $OptionInstance<boolean>
public static "createBoolean"(string0: string, boolean1: boolean): $OptionInstance<boolean>
public static "createBoolean"(string0: string, tooltipSupplier1: $OptionInstance$TooltipSupplier$$Type<boolean>, captionBasedToString2: $OptionInstance$CaptionBasedToString$$Type<boolean>, boolean3: boolean, consumer4: $Consumer$$Type<boolean>): $OptionInstance<boolean>
public "createButton"(options0: $Options$$Type, int1: integer, int2: integer, int3: integer): $AbstractWidget
public "createButton"(options0: $Options$$Type, int1: integer, int2: integer, int3: integer, consumer4: $Consumer$$Type<T>): $AbstractWidget
public static "forOptionEnum"<T extends $OptionEnum>(): $OptionInstance$CaptionBasedToString<T>
public "get"(): T
public static "noTooltip"<T>(): $OptionInstance$TooltipSupplier<T>
public "set"(t0: T): void
public "values"(): $OptionInstance$ValueSet<T>
}
}

declare module "net.minecraft.client.KeyMapping" {
import { $InputConstants$Key, $InputConstants$Key$$Type } from "com.mojang.blaze3d.platform.InputConstants$Key"
import { $AccessKeyMapping } from "com.blamejared.controlling.mixin.AccessKeyMapping"
import { $Component } from "net.minecraft.network.chat.Component"
import { $KeyMappingAccessor } from "net.blay09.mods.kuma.mixin.KeyMappingAccessor"
import { $IForgeKeyMapping } from "net.minecraftforge.client.extensions.IForgeKeyMapping"
import { $AccessorKeyMapping } from "vazkii.patchouli.mixin.client.AccessorKeyMapping"
import { $AccessorKeyMapping as $AccessorKeyMapping$0 } from "com.railwayteam.railways.mixin.conductor_possession.AccessorKeyMapping"
import { $KeyModifier, $KeyModifier$$Type } from "net.minecraftforge.client.settings.KeyModifier"
import { $Supplier } from "java.util.function.Supplier"
import { $IKeyConflictContext, $IKeyConflictContext$$Type } from "net.minecraftforge.client.settings.IKeyConflictContext"
import { $KeyMappingAccessor as $KeyMappingAccessor$0 } from "net.blay09.mods.balm.mixin.KeyMappingAccessor"
import { $Map } from "java.util.Map"
import { $Comparable } from "java.lang.Comparable"
import { $InputConstants$Type$$Type } from "com.mojang.blaze3d.platform.InputConstants$Type"

export class $KeyMapping implements $Comparable<$KeyMapping>, $IForgeKeyMapping, $KeyMappingAccessor$0, $KeyMappingAccessor, $AccessKeyMapping, $AccessorKeyMapping$0, $AccessorKeyMapping {
static readonly "ALL": $Map<string, $KeyMapping>
static readonly "CATEGORY_CREATIVE": string
static readonly "CATEGORY_GAMEPLAY": string
static readonly "CATEGORY_INTERFACE": string
static readonly "CATEGORY_INVENTORY": string
static readonly "CATEGORY_MISC": string
static readonly "CATEGORY_MOVEMENT": string
static readonly "CATEGORY_MULTIPLAYER": string

constructor(string0: string, iKeyConflictContext1: $IKeyConflictContext$$Type, key2: $InputConstants$Key$$Type, string3: string)
constructor(string0: string, int1: integer, string2: string)
constructor(string0: string, type1: $InputConstants$Type$$Type, int2: integer, string3: string)
constructor(string0: string, iKeyConflictContext1: $IKeyConflictContext$$Type, keyModifier2: $KeyModifier$$Type, type3: $InputConstants$Type$$Type, int4: integer, string5: string)
constructor(string0: string, iKeyConflictContext1: $IKeyConflictContext$$Type, type2: $InputConstants$Type$$Type, int3: integer, string4: string)
constructor(string0: string, iKeyConflictContext1: $IKeyConflictContext$$Type, keyModifier2: $KeyModifier$$Type, key3: $InputConstants$Key$$Type, string4: string)

public static "click"(key0: $InputConstants$Key$$Type): void
public "compareTo"(keyMapping0: $KeyMapping$$Type): integer
public "consumeClick"(): boolean
public static "createNameSupplier"(string0: string): $Supplier<$Component>
public "getCategory"(): string
public "getDefaultKey"(): $InputConstants$Key
public "getDefaultKeyModifier"(): $KeyModifier
public "getKeyConflictContext"(): $IKeyConflictContext
public "getKeyModifier"(): $KeyModifier
public "getName"(): string
public "getTranslatedKeyMessage"(): $Component
public "hasKeyModifierConflict"(keyMapping0: $KeyMapping$$Type): boolean
public "isActiveAndMatches"(key0: $InputConstants$Key$$Type): boolean
public "isConflictContextAndModifierActive"(): boolean
public "isDefault"(): boolean
public "isDown"(): boolean
public "isUnbound"(): boolean
public "matches"(int0: integer, int1: integer): boolean
public "matchesMouse"(int0: integer): boolean
public static "releaseAll"(): void
public static "resetMapping"(): void
public static "resetToggleKeys"(): void
public "same"(keyMapping0: $KeyMapping$$Type): boolean
public "saveString"(): string
public static "set"(key0: $InputConstants$Key$$Type, boolean1: boolean): void
public static "setAll"(): void
public "setDown"(boolean0: boolean): void
public "setKey"(key0: $InputConstants$Key$$Type): void
public "setKeyConflictContext"(iKeyConflictContext0: $IKeyConflictContext$$Type): void
public "setKeyModifierAndCode"(keyModifier0: $KeyModifier$$Type, key1: $InputConstants$Key$$Type): void
public "setToDefault"(): void
get "key"(): $InputConstants$Key
set "key"(value: $InputConstants$Key$$Type)
get "category"(): string
get "defaultKey"(): $InputConstants$Key
get "defaultKeyModifier"(): $KeyModifier
get "keyConflictContext"(): $IKeyConflictContext
get "keyModifier"(): $KeyModifier
get "name"(): string
get "translatedKeyMessage"(): $Component
get "conflictContextAndModifierActive"(): boolean
get "default"(): boolean
get "down"(): boolean
get "unbound"(): boolean
set "down"(value: boolean)
set "keyConflictContext"(value: $IKeyConflictContext$$Type)
}
}

declare module "net.minecraft.client.GraphicsStatus" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Enum } from "java.lang.Enum"
import { $OptionEnum } from "net.minecraft.util.OptionEnum"

export class $GraphicsStatus extends $Enum<$GraphicsStatus> implements $OptionEnum {
static readonly "FABULOUS": $GraphicsStatus
static readonly "FANCY": $GraphicsStatus
static readonly "FAST": $GraphicsStatus

public static "byId"(int0: integer): $GraphicsStatus
public "getCaption"(): $Component
public "getId"(): integer
public "getKey"(): string
public static "valueOf"(string0: string): $GraphicsStatus
public static "values"(): $GraphicsStatus[]
get "caption"(): $Component
get "id"(): integer
get "key"(): string
}
}

declare module "net.minecraft.client.PrioritizeChunkUpdates" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Enum } from "java.lang.Enum"
import { $OptionEnum } from "net.minecraft.util.OptionEnum"

export class $PrioritizeChunkUpdates extends $Enum<$PrioritizeChunkUpdates> implements $OptionEnum {
static readonly "NEARBY": $PrioritizeChunkUpdates
static readonly "NONE": $PrioritizeChunkUpdates
static readonly "PLAYER_AFFECTED": $PrioritizeChunkUpdates

public static "byId"(int0: integer): $PrioritizeChunkUpdates
public "getCaption"(): $Component
public "getId"(): integer
public "getKey"(): string
public static "valueOf"(string0: string): $PrioritizeChunkUpdates
public static "values"(): $PrioritizeChunkUpdates[]
get "caption"(): $Component
get "id"(): integer
get "key"(): string
}
}

declare module "net.minecraft.client.Options$FieldAccess" {
import { $OptionInstance$$Type } from "net.minecraft.client.OptionInstance"
import { $Function$$Type } from "java.util.function.Function"

export interface $Options$FieldAccess {
"process"(string0: string, float1: float): float
"process"<T>(string0: string, optionInstance1: $OptionInstance$$Type<T>): void
"process"<T>(string0: string, t1: T, function2: $Function$$Type<string, T>, function3: $Function$$Type<T, string>): T
"process"(string0: string, string1: string): string
"process"(string0: string, boolean1: boolean): boolean
"process"(string0: string, int1: integer): integer
}

export namespace $Options$FieldAccess {
const probejs$$marker: never
}
export abstract class $Options$FieldAccess$$Static implements $Options$FieldAccess {
}
}

declare module "net.minecraft.client.GuiMessage$Line" {
import { $GuiMessageTag, $GuiMessageTag$$Type } from "net.minecraft.client.GuiMessageTag"
import { $FormattedCharSequence, $FormattedCharSequence$$Type } from "net.minecraft.util.FormattedCharSequence"
import { $Record } from "java.lang.Record"

export class $GuiMessage$Line extends $Record {
constructor(int0: integer, formattedCharSequence1: $FormattedCharSequence$$Type, guiMessageTag2: $GuiMessageTag$$Type, boolean3: boolean)

public "addedTime"(): integer
public "content"(): $FormattedCharSequence
public "endOfEntry"(): boolean
public "tag"(): $GuiMessageTag
}
}

declare module "net.minecraft.client.OptionInstance$CycleableValueSet" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Options$$Type } from "net.minecraft.client.Options"
import { $CycleButton$ValueListSupplier } from "net.minecraft.client.gui.components.CycleButton$ValueListSupplier"
import { $OptionInstance$ValueSet } from "net.minecraft.client.OptionInstance$ValueSet"
import { $OptionInstance } from "net.minecraft.client.OptionInstance"
import { $Optional } from "java.util.Optional"
import { $OptionInstance$CycleableValueSet$ValueSetter } from "net.minecraft.client.OptionInstance$CycleableValueSet$ValueSetter"
import { $AbstractWidget } from "net.minecraft.client.gui.components.AbstractWidget"
import { $Function } from "java.util.function.Function"
import { $OptionInstance$TooltipSupplier$$Type } from "net.minecraft.client.OptionInstance$TooltipSupplier"

export interface $OptionInstance$CycleableValueSet<T = any> extends $OptionInstance$ValueSet<T> {
"codec"(): $Codec<T>
"createButton"(tooltipSupplier0: $OptionInstance$TooltipSupplier$$Type<T>, options1: $Options$$Type, int2: integer, int3: integer, int4: integer, consumer5: $Consumer$$Type<T>): $Function<$OptionInstance<T>, $AbstractWidget>
"validateValue"(t0: T): $Optional<T>
"valueListSupplier"(): $CycleButton$ValueListSupplier<T>
"valueSetter"(): $OptionInstance$CycleableValueSet$ValueSetter<T>
}

export namespace $OptionInstance$CycleableValueSet {
const probejs$$marker: never
}
export abstract class $OptionInstance$CycleableValueSet$$Static<T = any> implements $OptionInstance$CycleableValueSet<T> {
}
}

declare module "net.minecraft.client.ClientRecipeBook" {
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $List } from "java.util.List"
import { $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $RecipeBookCategories$$Type } from "net.minecraft.client.RecipeBookCategories"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $RecipeCollection } from "net.minecraft.client.gui.screens.recipebook.RecipeCollection"
import { $RecipeBook } from "net.minecraft.stats.RecipeBook"
import { $Iterable$$Type } from "java.lang.Iterable"

export class $ClientRecipeBook extends $RecipeBook {
constructor()

public "getCollection"(recipeBookCategories0: $RecipeBookCategories$$Type): $List<$RecipeCollection>
public "getCollections"(): $List<$RecipeCollection>
public "handler$eij000$onSetup"(iterable: $Iterable$$Type, registryAccess: $RegistryAccess$$Type, ci: $CallbackInfo$$Type): void
public "setupCollections"(iterable0: $Iterable$$Type<$Recipe$$Type<any>>, registryAccess1: $RegistryAccess$$Type): void
get "collections"(): $List<$RecipeCollection>
}
}

declare module "net.minecraft.client.DebugQueryHandler" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ClientPacketListener$$Type } from "net.minecraft.client.multiplayer.ClientPacketListener"

export class $DebugQueryHandler {
constructor(clientPacketListener0: $ClientPacketListener$$Type)

public "handleResponse"(int0: integer, compoundTag1: $CompoundTag$$Type): boolean
public "queryBlockEntityTag"(blockPos0: $BlockPos$$Type, consumer1: $Consumer$$Type<$CompoundTag$$Type>): void
public "queryEntityTag"(int0: integer, consumer1: $Consumer$$Type<$CompoundTag$$Type>): void
}
}

declare module "net.minecraft.client.Minecraft" {
import { $Font } from "net.minecraft.client.gui.Font"
import { $GameConfig$$Type } from "net.minecraft.client.main.GameConfig"
import { $IMixinMinecraft } from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinMinecraft"
import { $EntityModelSet } from "net.minecraft.client.model.geom.EntityModelSet"
import { $WindowEventHandler } from "com.mojang.blaze3d.platform.WindowEventHandler"
import { $SearchRegistry$Key$$Type } from "net.minecraft.client.searchtree.SearchRegistry$Key"
import { $AccessorMinecraft } from "com.railwayteam.railways.mixin.client.AccessorMinecraft"
import { $IForgeMinecraft } from "net.minecraftforge.client.extensions.IForgeMinecraft"
import { $Proxy } from "java.net.Proxy"
import { $WorldOpenFlows } from "net.minecraft.client.gui.screens.worldselection.WorldOpenFlows"
import { $MultiPlayerGameMode, $MultiPlayerGameMode$$Type } from "net.minecraft.client.multiplayer.MultiPlayerGameMode"
import { $Thread, $Thread$$Type } from "java.lang.Thread"
import { $MinecraftAccessor } from "me.jellysquid.mods.sodium.mixin.core.render.MinecraftAccessor"
import { $EntityRenderDispatcher } from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import { $Path } from "java.nio.file.Path"
import { $Window } from "com.mojang.blaze3d.platform.Window"
import { $ReentrantBlockableEventLoop } from "net.minecraft.util.thread.ReentrantBlockableEventLoop"
import { $ProfilerFiller } from "net.minecraft.util.profiling.ProfilerFiller"
import { $Screen, $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $ResourceManager } from "net.minecraft.server.packs.resources.ResourceManager"
import { $LevelRenderer } from "net.minecraft.client.renderer.LevelRenderer"
import { $ScheduledEvents } from "dev.latvian.mods.kubejs.util.ScheduledEvents"
import { $GpuWarnlistManager } from "net.minecraft.client.renderer.GpuWarnlistManager"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Exception$$Type } from "java.lang.Exception"
import { $RenderTarget, $RenderTarget$$Type } from "com.mojang.blaze3d.pipeline.RenderTarget"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $CrashReport, $CrashReport$$Type } from "net.minecraft.CrashReport"
import { $Throwable$$Type } from "java.lang.Throwable"
import { $ClientLevel, $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"
import { $GameNarrator } from "net.minecraft.client.GameNarrator"
import { $Gui } from "net.minecraft.client.gui.Gui"
import { $SearchTree } from "net.minecraft.client.searchtree.SearchTree"
import { $MobEffectTextureManager } from "net.minecraft.client.resources.MobEffectTextureManager"
import { $MouseHandler } from "net.minecraft.client.MouseHandler"
import { $Minecraft$ChatStatus } from "net.minecraft.client.Minecraft$ChatStatus"
import { $ModelManager } from "net.minecraft.client.resources.model.ModelManager"
import { $TemporalAmount$$Type } from "java.time.temporal.TemporalAmount"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import { $ServerData } from "net.minecraft.client.multiplayer.ServerData"
import { $Music } from "net.minecraft.sounds.Music"
import { $GameRenderer } from "net.minecraft.client.renderer.GameRenderer"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $LanguageManager, $LanguageManager$$Type } from "net.minecraft.client.resources.language.LanguageManager"
import { $SoundManager } from "net.minecraft.client.sounds.SoundManager"
import { $TextureManager } from "net.minecraft.client.renderer.texture.TextureManager"
import { $DataFixer } from "com.mojang.datafixers.DataFixer"
import { $File, $File$$Type } from "java.io.File"
import { $ItemRenderer } from "net.minecraft.client.renderer.entity.ItemRenderer"
import { $ScheduledEvents$ScheduledEvent } from "dev.latvian.mods.kubejs.util.ScheduledEvents$ScheduledEvent"
import { $Options, $Options$$Type } from "net.minecraft.client.Options"
import { $SearchRegistry } from "net.minecraft.client.searchtree.SearchRegistry"
import { $PackRepository, $PackRepository$$Type } from "net.minecraft.server.packs.repository.PackRepository"
import { $IntegratedServer } from "net.minecraft.client.server.IntegratedServer"
import { $MixinClientAccessor } from "com.samsthenerd.inline.mixin.feature.playerskins.MixinClientAccessor"
import { $ProfileKeyPairManager } from "net.minecraft.client.multiplayer.ProfileKeyPairManager"
import { $SignatureValidator } from "net.minecraft.util.SignatureValidator"
import { $ParticleEngine } from "net.minecraft.client.particle.ParticleEngine"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $DebugRenderer } from "net.minecraft.client.renderer.debug.DebugRenderer"
import { $MinecraftAccessor as $MinecraftAccessor$0 } from "vazkii.botania.mixin.client.MinecraftAccessor"
import { $WorldStem$$Type } from "net.minecraft.server.WorldStem"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $FrameTimer } from "net.minecraft.util.FrameTimer"
import { $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $Realms32BitWarningStatus } from "net.minecraft.client.Realms32BitWarningStatus"
import { $ChatListener } from "net.minecraft.client.multiplayer.chat.ChatListener"
import { $InputType, $InputType$$Type } from "net.minecraft.client.InputType"
import { $ToastComponent } from "net.minecraft.client.gui.components.toasts.ToastComponent"
import { $StoringChunkProgressListener } from "net.minecraft.server.level.progress.StoringChunkProgressListener"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $Runnable } from "java.lang.Runnable"
import { $ModCheck } from "net.minecraft.util.ModCheck"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $ClientTelemetryManager } from "net.minecraft.client.telemetry.ClientTelemetryManager"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $SkinManager } from "net.minecraft.client.resources.SkinManager"
import { $VanillaPackResources } from "net.minecraft.server.packs.VanillaPackResources"
import { $MinecraftClientAccessor } from "net.bettercombat.mixin.client.MinecraftClientAccessor"
import { $PropertyMap } from "com.mojang.authlib.properties.PropertyMap"
import { $HotbarManager } from "net.minecraft.client.HotbarManager"
import { $Locale } from "java.util.Locale"
import { $MusicManager } from "net.minecraft.client.sounds.MusicManager"
import { $User } from "net.minecraft.client.User"
import { $KeyboardHandler } from "net.minecraft.client.KeyboardHandler"
import { $ReportEnvironment$$Type } from "net.minecraft.client.multiplayer.chat.report.ReportEnvironment"
import { $PlayerSocialManager } from "net.minecraft.client.gui.screens.social.PlayerSocialManager"
import { $UUID$$Type } from "java.util.UUID"
import { $AccessorMinecraft as $AccessorMinecraft$0 } from "net.darkhax.bookshelf.mixin.accessors.client.AccessorMinecraft"
import { $MinecraftClientKJS } from "dev.latvian.mods.kubejs.core.MinecraftClientKJS"
import { $MinecraftClient_BetterCombat } from "net.bettercombat.api.MinecraftClient_BetterCombat"
import { $Timer } from "net.minecraft.client.Timer"
import { $List$$Type } from "java.util.List"
import { $SplashManager } from "net.minecraft.client.resources.SplashManager"
import { $ProcessorHandle, $ProcessorHandle$$Type } from "net.minecraft.util.thread.ProcessorHandle"
import { $DownloadedPackSource } from "net.minecraft.client.resources.DownloadedPackSource"
import { $Queue } from "java.util.Queue"
import { $BlockEntityRenderDispatcher } from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"
import { $RenderBuffers } from "net.minecraft.client.renderer.RenderBuffers"
import { $QuickPlayLog } from "net.minecraft.client.quickplay.QuickPlayLog"
import { $ScheduledEvents$Callback$$Type } from "dev.latvian.mods.kubejs.util.ScheduledEvents$Callback"
import { $Overlay, $Overlay$$Type } from "net.minecraft.client.gui.screens.Overlay"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ClientPacketListener } from "net.minecraft.client.multiplayer.ClientPacketListener"
import { $HitResult$Type$$Type } from "net.minecraft.world.phys.HitResult$Type"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $BlockRenderDispatcher, $BlockRenderDispatcher$$Type } from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import { $MinecraftSessionService } from "com.mojang.authlib.minecraft.MinecraftSessionService"
import { $LevelStorageSource } from "net.minecraft.world.level.storage.LevelStorageSource"
import { $LevelStorageSource$LevelStorageAccess$$Type } from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import { $PaintingTextureManager } from "net.minecraft.client.resources.PaintingTextureManager"
import { $FontManager, $FontManager$$Type } from "net.minecraft.client.gui.font.FontManager"
import { $ReportingContext } from "net.minecraft.client.multiplayer.chat.report.ReportingContext"
import { $BanDetails } from "com.mojang.authlib.minecraft.BanDetails"
import { $LocalPlayer, $LocalPlayer$$Type } from "net.minecraft.client.player.LocalPlayer"
import { $Tutorial } from "net.minecraft.client.tutorial.Tutorial"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $HitResult, $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockColors } from "net.minecraft.client.color.block.BlockColors"
import { $RealmsDataFetcher } from "com.mojang.realmsclient.gui.RealmsDataFetcher"

export class $Minecraft extends $ReentrantBlockableEventLoop<$Runnable> implements $WindowEventHandler, $IForgeMinecraft, $MinecraftClientAccessor, $MinecraftClient_BetterCombat, $MinecraftAccessor$0, $AccessorMinecraft$0, $MinecraftClientKJS, $AccessorMinecraft, $IMixinMinecraft, $MixinClientAccessor, $MinecraftAccessor {
static readonly "ALT_FONT": $ResourceLocation
static readonly "DEFAULT_FONT": $ResourceLocation
static readonly "ON_OSX": boolean
static readonly "UNIFORM_FONT": $ResourceLocation
static readonly "UPDATE_DRIVERS_ADVICE": string
readonly "debugRenderer": $DebugRenderer
readonly "font": $Font
readonly "fontFilterFishy": $Font
static "fps": integer
readonly "frameTimer": $FrameTimer
readonly "gameDirectory": $File
readonly "gameRenderer": $GameRenderer
readonly "gui": $Gui
readonly "keyboardHandler": $KeyboardHandler
readonly "levelRenderer": $LevelRenderer
readonly "mouseHandler": $MouseHandler
readonly "options": $Options
readonly "particleEngine": $ParticleEngine
readonly "progressTasks": $Queue<$Runnable>
readonly "textureManager": $TextureManager
readonly "timer": $Timer

constructor(gameConfig0: $GameConfig$$Type)

public "addCustomNbtData"(itemStack0: $ItemStack$$Type, blockEntity1: $BlockEntity$$Type): void
public "allowsMultiplayer"(): boolean
public "allowsRealms"(): boolean
public "allowsTelemetry"(): boolean
public "ask"<Source>(function0: $Function$$Type<$ProcessorHandle$$Type<Source>, $Runnable>): $CompletableFuture<Source>
public "askEither"<Source>(function0: $Function$$Type<$ProcessorHandle$$Type<$Either$$Type<Source, $Exception$$Type>>, $Runnable>): $CompletableFuture<Source>
public "cancelUpswing"(): void
public static "checkModStatus"(): $ModCheck
public "clearLevel"(): void
public "clearLevel"(screen0: $Screen$$Type): void
public "clearResourcePacksOnError"(throwable0: $Throwable$$Type, component1: $Component$$Type): void
public "close"(): void
public static "crash"(crashReport0: $CrashReport$$Type): void
public "createSearchTrees"(): void
public "createWorldOpenFlows"(): $WorldOpenFlows
public "cursorEntered"(): void
public "debugClientMetricsStart"(consumer0: $Consumer$$Type<$Component$$Type>): boolean
public "debugFpsMeterKeyPress"(int0: integer): void
public "delayCrash"(crashReport0: $CrashReport$$Type): void
public "delayCrashRaw"(crashReport0: $CrashReport$$Type): void
public "delayTextureReload"(): $CompletableFuture<void>
public "destroy"(): void
public "doWorldLoad"(string0: string, levelStorageAccess1: $LevelStorageSource$LevelStorageAccess$$Type, packRepository2: $PackRepository$$Type, worldStem3: $WorldStem$$Type, boolean4: boolean): void
public "emergencySave"(): void
public "extraTelemetryAvailable"(): boolean
public "fillReport"(crashReport0: $CrashReport$$Type): $CrashReport
public static "fillReport"(minecraft0: $Minecraft$$Type, languageManager1: $LanguageManager$$Type, string2: string, options3: $Options$$Type, crashReport4: $CrashReport$$Type): void
public "forceSetScreen"(screen0: $Screen$$Type): void
public "getBlockColors"(): $BlockColors
public "getBlockEntityRenderDispatcher"(): $BlockEntityRenderDispatcher
public "getBlockRenderer"(): $BlockRenderDispatcher
public "getCameraEntity"(): $Entity
public "getChatListener"(): $ChatListener
public "getChatStatus"(): $Minecraft$ChatStatus
public "getComboCount"(): integer
public "getConnection"(): $ClientPacketListener
public "getCurrentScreen"(): $Screen
public "getCurrentServer"(): $ServerData
public "getCurrentWorldName"(): string
public "getCursorTarget"(): $Entity
public "getDeltaFrameTime"(): float
public "getDisplayName"(): $Component
public "getDownloadedPackSource"(): $DownloadedPackSource
public "getEntityModels"(): $EntityModelSet
public "getEntityRenderDispatcher"(): $EntityRenderDispatcher
public "getFixerUpper"(): $DataFixer
public "getFps"(): integer
public "getFrameTime"(): float
public "getFrameTimeNs"(): long
public "getFrameTimer"(): $FrameTimer
public "getGpuUtilization"(): double
public "getGpuWarnlistManager"(): $GpuWarnlistManager
public "getHotbarManager"(): $HotbarManager
public static "getInstance"(): $Minecraft
public "getItemRenderer"(): $ItemRenderer
public "getLanguageManager"(): $LanguageManager
public "getLastInputType"(): $InputType
public "getLaunchedVersion"(): string
public "getLevelSource"(): $LevelStorageSource
public "getLocale"(): $Locale
public "getMainRenderTarget"(): $RenderTarget
public "getMinecraftSessionService"(): $MinecraftSessionService
public "getMobEffectTextures"(): $MobEffectTextureManager
public "getModelManager"(): $ModelManager
public "getMusicManager"(): $MusicManager
public "getName"(): $Component
public "getNarrator"(): $GameNarrator
public "getOverlay"(): $Overlay
public "getPaintingTextures"(): $PaintingTextureManager
public "getPartialTick"(): float
public "getPlayerSocialManager"(): $PlayerSocialManager
public "getProfileKeyPairManager"(): $ProfileKeyPairManager
public "getProfileKeySignatureValidator"(): $SignatureValidator
public "getProfileProperties"(): $PropertyMap
public "getProfiler"(): $ProfilerFiller
public "getProgressListener"(): $StoringChunkProgressListener
public "getProxy"(): $Proxy
public "getRealms32BitWarningStatus"(): $Realms32BitWarningStatus
public "getReportingContext"(): $ReportingContext
public "getResourceManager"(): $ResourceManager
public "getResourcePackDirectory"(): $Path
public "getResourcePackRepository"(): $PackRepository
public "getScheduledEvents"(): $ScheduledEvents
public "getSearchTree"<T>(key0: $SearchRegistry$Key$$Type<T>): $SearchTree<T>
public "getSearchTreeManager"(): $SearchRegistry
public "getSingleplayerServer"(): $IntegratedServer
public "getSituationalMusic"(): $Music
public "getSkinManager"(): $SkinManager
public "getSoundManager"(): $SoundManager
public "getSplashManager"(): $SplashManager
public "getSwingProgress"(): float
public "getTelemetryManager"(): $ClientTelemetryManager
public "getTextureAtlas"(resourceLocation0: $ResourceLocation$$Type): $Function<$ResourceLocation, $TextureAtlasSprite>
public "getTextureManager"(): $TextureManager
public "getToasts"(): $ToastComponent
public "getTutorial"(): $Tutorial
public "getUpswingTicks"(): integer
public "getUser"(): $User
public "getVanillaPackResources"(): $VanillaPackResources
public "getVersionType"(): string
public "getWindow"(): $Window
public "grabPanoramixScreenshot"(file0: $File$$Type, int1: integer, int2: integer): $Component
public "handler$bgk000$fillReport"(theCrash: $CrashReport$$Type, ci: $CallbackInfoReturnable$$Type): void
public "handler$bmk000$onBeginTick"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$bmk000$onEndTick"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$bmk000$onStartUseItem"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$chd000$reloadCursorsOnResize"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$feb000$simpleclouds$appendCrashReportDetails_fillReport"(crashReport0: $CrashReport$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type): void
public "handler$feb000$simpleclouds$beforeMainTitleScreen_setInitialScreen"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$feb000$simpleclouds$onClientLevelChange_setLevel"(clientLevel0: $ClientLevel$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$fef000$simpleclouds$onVRStateSwitched_vivecrafft$switchVRSate"(boolean0: boolean, callbackInfo1: $CallbackInfo$$Type): void
public "handler$ghe000$pickColor"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$gic000$pickBlock"(callbackInfo0: $CallbackInfo$$Type, boolean1: boolean, blockEntity2: $BlockEntity$$Type, type3: $HitResult$Type$$Type, itemStack4: $ItemStack$$Type, inventory5: $Inventory$$Type, int6: integer): void
public "handler$hkg000$irons_spellbooks$changeGlowOutline"(entity0: $Entity$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type): void
public "hasSingleplayerServer"(): boolean
public "hasTargetsInReach"(): boolean
public "is64Bit"(): boolean
public "isAltDown"(): boolean
public "isBlocked"(uUID0: $UUID$$Type): boolean
public "isConnectedToRealms"(): boolean
public "isCtrlDown"(): boolean
public "isDemo"(): boolean
public "isEnforceUnicode"(): boolean
public "isKeyDown"(key: integer): boolean
public "isLocalServer"(): boolean
public "isPaused"(): boolean
public "isRunning"(): boolean
public "isShiftDown"(): boolean
public "isSingleplayer"(): boolean
public "isTextFilteringEnabled"(): boolean
public "isWeaponSwingInProgress"(): boolean
public "isWindowActive"(): boolean
public "multiplayerBan"(): $BanDetails
public static "of"<Msg>(string0: string, consumer1: $Consumer$$Type<Msg>): $ProcessorHandle<Msg>
public "openChatScreen"(string0: string): void
public "pauseGame"(boolean0: boolean): void
public "popGuiLayer"(): void
public "populateSearchTree"<T>(key0: $SearchRegistry$Key$$Type<T>, list1: $List$$Type<T>): void
public "prepareForMultiplayer"(): void
public "pushGuiLayer"(screen0: $Screen$$Type): void
public "quickPlayLog"(): $QuickPlayLog
public "realmsDataFetcher"(): $RealmsDataFetcher
public "redirect$bmk000$startUseItem_getItemInHand"(localPlayer0: $LocalPlayer$$Type, interactionHand1: $InteractionHand$$Type): $ItemStack
public "redirect$glm000$fixUpdateURLs"(renderTarget0: $RenderTarget$$Type, boolean1: boolean): void
public "reloadResourcePacks"(): $CompletableFuture<void>
public "renderBuffers"(): $RenderBuffers
public static "renderNames"(): boolean
public "renderOnThread"(): boolean
public "resizeDisplay"(): void
public "run"(): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "schedule"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleInTicks"(ticks: long, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleRepeating"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleRepeatingInTicks"(ticks: long, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "self"(): $Minecraft
public "setCameraEntity"(entity0: $Entity$$Type): void
public "setConnectedToRealms"(boolean0: boolean): void
public "setCurrentScreen"(gui: $Screen$$Type): void
public "setLastInputType"(inputType0: $InputType$$Type): void
public "setLevel"(clientLevel0: $ClientLevel$$Type): void
public "setOverlay"(overlay0: $Overlay$$Type): void
public "setScreen"(screen0: $Screen$$Type): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTitle"(t: string): void
public "setWindowActive"(boolean0: boolean): void
public "shouldEntityAppearGlowing"(entity0: $Entity$$Type): boolean
public "shouldShowBanNotice"(): boolean
public "showOnlyReducedInfo"(): boolean
public "startUseItem"(): void
public "stop"(): void
public "telemetryOptInExtra"(): boolean
public "tell"(message: $Component$$Type): void
public "tick"(): void
public "updateMaxMipLevel"(int0: integer): void
public "updateReportEnvironment"(reportEnvironment0: $ReportEnvironment$$Type): void
public "updateTitle"(): void
public static "useAmbientOcclusion"(): boolean
public static "useFancyGraphics"(): boolean
public static "useShaderTransparency"(): boolean
get "blockRenderer"(): $BlockRenderDispatcher
set "blockRenderer"(value: $BlockRenderDispatcher$$Type)
get "cameraEntity"(): $Entity
set "cameraEntity"(value: $Entity$$Type)
get "chunkPath"(): boolean
set "chunkPath"(value: boolean)
get "chunkVisibility"(): boolean
set "chunkVisibility"(value: boolean)
get "crosshairPickEntity"(): $Entity
set "crosshairPickEntity"(value: $Entity$$Type)
get "fontManager"(): $FontManager
set "fontManager"(value: $FontManager$$Type)
get "fpsString"(): string
set "fpsString"(value: string)
get "gameMode"(): $MultiPlayerGameMode
set "gameMode"(value: $MultiPlayerGameMode$$Type)
get "gameThread"(): $Thread
set "gameThread"(value: $Thread$$Type)
get "hitResult"(): $HitResult
set "hitResult"(value: $HitResult$$Type)
get "level"(): $ClientLevel
set "level"(value: $ClientLevel$$Type)
get "mainRenderTarget"(): $RenderTarget
set "mainRenderTarget"(value: $RenderTarget$$Type)
get "missTime"(): integer
set "missTime"(value: integer)
get "noRender"(): boolean
set "noRender"(value: boolean)
get "pausePartialTick"(): float
set "pausePartialTick"(value: float)
get "player"(): $LocalPlayer
set "player"(value: $LocalPlayer$$Type)
get "screen"(): $Screen
set "screen"(value: $Screen$$Type)
get "smartCull"(): boolean
set "smartCull"(value: boolean)
get "wireframe"(): boolean
set "wireframe"(value: boolean)
get "blockColors"(): $BlockColors
get "blockEntityRenderDispatcher"(): $BlockEntityRenderDispatcher
get "chatListener"(): $ChatListener
get "chatStatus"(): $Minecraft$ChatStatus
get "comboCount"(): integer
get "connection"(): $ClientPacketListener
get "currentScreen"(): $Screen
get "currentServer"(): $ServerData
get "currentWorldName"(): string
get "cursorTarget"(): $Entity
get "deltaFrameTime"(): float
get "displayName"(): $Component
get "downloadedPackSource"(): $DownloadedPackSource
get "entityModels"(): $EntityModelSet
get "entityRenderDispatcher"(): $EntityRenderDispatcher
get "fixerUpper"(): $DataFixer
get "frameTime"(): float
get "frameTimeNs"(): long
get "gpuUtilization"(): double
get "gpuWarnlistManager"(): $GpuWarnlistManager
get "hotbarManager"(): $HotbarManager
get "itemRenderer"(): $ItemRenderer
get "languageManager"(): $LanguageManager
get "lastInputType"(): $InputType
get "launchedVersion"(): string
get "levelSource"(): $LevelStorageSource
get "locale"(): $Locale
get "minecraftSessionService"(): $MinecraftSessionService
get "mobEffectTextures"(): $MobEffectTextureManager
get "modelManager"(): $ModelManager
get "musicManager"(): $MusicManager
get "name"(): $Component
get "narrator"(): $GameNarrator
get "overlay"(): $Overlay
get "paintingTextures"(): $PaintingTextureManager
get "partialTick"(): float
get "playerSocialManager"(): $PlayerSocialManager
get "profileKeyPairManager"(): $ProfileKeyPairManager
get "profileKeySignatureValidator"(): $SignatureValidator
get "profileProperties"(): $PropertyMap
get "profiler"(): $ProfilerFiller
get "progressListener"(): $StoringChunkProgressListener
get "proxy"(): $Proxy
get "realms32BitWarningStatus"(): $Realms32BitWarningStatus
get "reportingContext"(): $ReportingContext
get "resourceManager"(): $ResourceManager
get "resourcePackDirectory"(): $Path
get "resourcePackRepository"(): $PackRepository
get "scheduledEvents"(): $ScheduledEvents
get "searchTreeManager"(): $SearchRegistry
get "singleplayerServer"(): $IntegratedServer
get "situationalMusic"(): $Music
get "skinManager"(): $SkinManager
get "soundManager"(): $SoundManager
get "splashManager"(): $SplashManager
get "swingProgress"(): float
get "telemetryManager"(): $ClientTelemetryManager
get "toasts"(): $ToastComponent
get "tutorial"(): $Tutorial
get "upswingTicks"(): integer
get "user"(): $User
get "vanillaPackResources"(): $VanillaPackResources
get "versionType"(): string
get "window"(): $Window
get "64Bit"(): boolean
get "altDown"(): boolean
get "connectedToRealms"(): boolean
get "ctrlDown"(): boolean
get "demo"(): boolean
get "enforceUnicode"(): boolean
get "localServer"(): boolean
get "paused"(): boolean
get "running"(): boolean
get "shiftDown"(): boolean
get "singleplayer"(): boolean
get "textFilteringEnabled"(): boolean
get "weaponSwingInProgress"(): boolean
get "windowActive"(): boolean
set "connectedToRealms"(value: boolean)
set "currentScreen"(value: $Screen$$Type)
set "lastInputType"(value: $InputType$$Type)
set "overlay"(value: $Overlay$$Type)
set "statusMessage"(value: $Component$$Type)
set "title"(value: string)
set "windowActive"(value: boolean)
}
}

declare module "net.minecraft.client.MouseHandler" {
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $MouseHandlerAccessor } from "com.lowdragmc.lowdraglib.core.mixins.accessor.MouseHandlerAccessor"
import { $Operation$$Type } from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $MouseHandlerAccessor as $MouseHandlerAccessor$0 } from "com.simibubi.create.foundation.mixin.accessor.MouseHandlerAccessor"
import { $MouseHandlerAccessor as $MouseHandlerAccessor$1 } from "net.blay09.mods.balm.mixin.MouseHandlerAccessor"
import { $AccessorMouseHandler } from "at.petrak.hexcasting.mixin.accessor.client.AccessorMouseHandler"
import { $LocalPlayer$$Type } from "net.minecraft.client.player.LocalPlayer"

export class $MouseHandler implements $MouseHandlerAccessor, $MouseHandlerAccessor$1, $AccessorMouseHandler, $MouseHandlerAccessor$0 {
constructor(minecraft0: $Minecraft$$Type)

public "cursorEntered"(): void
public "getXVelocity"(): double
public "getYVelocity"(): double
public "grabMouse"(): void
public "handler$den000$turnPlayer"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$eaa000$onKeyPress"(callbackInfo0: $CallbackInfo$$Type): void
public "isLeftPressed"(): boolean
public "isMiddlePressed"(): boolean
public "isMouseGrabbed"(): boolean
public "isRightPressed"(): boolean
public "releaseMouse"(): void
public "setIgnoreFirstMove"(): void
public "setup"(long0: long): void
public "turnPlayer"(): void
public "wrapOperation$epm000$reduceSensitivity"(localPlayer0: $LocalPlayer$$Type, double1: double, double2: double, operation3: $Operation$$Type): void
public "xpos"(): double
public "ypos"(): double
get "mouseGrabbed"(): boolean
set "mouseGrabbed"(value: boolean)
get "xVelocity"(): double
get "yVelocity"(): double
get "leftPressed"(): boolean
get "middlePressed"(): boolean
get "rightPressed"(): boolean
set "up"(value: long)
}
}

declare module "net.minecraft.client.OptionInstance$CaptionBasedToString" {
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"

export interface $OptionInstance$CaptionBasedToString<T = any> {
"toString"(component0: $Component$$Type, t1: T): $Component
}

export namespace $OptionInstance$CaptionBasedToString {
const probejs$$marker: never
}
export abstract class $OptionInstance$CaptionBasedToString$$Static<T = any> implements $OptionInstance$CaptionBasedToString<T> {
}
}

declare module "net.minecraft.client.StringSplitter$LinePosConsumer" {
import { $Style$$Type } from "net.minecraft.network.chat.Style"

export interface $StringSplitter$LinePosConsumer {
"accept"(style0: $Style$$Type, int1: integer, int2: integer): void
}

export namespace $StringSplitter$LinePosConsumer {
const probejs$$marker: never
}
export abstract class $StringSplitter$LinePosConsumer$$Static implements $StringSplitter$LinePosConsumer {
}
}

declare module "net.minecraft.client.Minecraft$ChatStatus" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Enum } from "java.lang.Enum"

export class $Minecraft$ChatStatus extends $Enum<$Minecraft$ChatStatus> {
static readonly "DISABLED_BY_LAUNCHER": $Minecraft$ChatStatus
static readonly "DISABLED_BY_OPTIONS": $Minecraft$ChatStatus
static readonly "DISABLED_BY_PROFILE": $Minecraft$ChatStatus
static readonly "ENABLED": $Minecraft$ChatStatus

public "getMessage"(): $Component
public "isChatAllowed"(boolean0: boolean): boolean
public static "valueOf"(string0: string): $Minecraft$ChatStatus
public static "values"(): $Minecraft$ChatStatus[]
get "message"(): $Component
}
}

declare module "net.minecraft.client.CameraType" {
import { $Enum } from "java.lang.Enum"

export class $CameraType extends $Enum<$CameraType> {
static readonly "FIRST_PERSON": $CameraType
static readonly "THIRD_PERSON_BACK": $CameraType
static readonly "THIRD_PERSON_FRONT": $CameraType

public "cycle"(): $CameraType
public "isFirstPerson"(): boolean
public "isMirrored"(): boolean
public static "valueOf"(string0: string): $CameraType
public static "values"(): $CameraType[]
get "firstPerson"(): boolean
get "mirrored"(): boolean
}
}

declare module "net.minecraft.client.User" {
import { $PropertyMap$$Type } from "com.mojang.authlib.properties.PropertyMap"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $User$Type, $User$Type$$Type } from "net.minecraft.client.User$Type"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $UUID } from "java.util.UUID"

export class $User {
constructor(string0: string, string1: string, string2: string, optional3: $Optional$$Type<string>, optional4: $Optional$$Type<string>, type5: $User$Type$$Type)

public "getAccessToken"(): string
public "getClientId"(): $Optional<string>
public "getGameProfile"(): $GameProfile
public "getName"(): string
public "getProfileId"(): $UUID
public "getSessionId"(): string
public "getType"(): $User$Type
public "getUuid"(): string
public "getXuid"(): $Optional<string>
public "hasCachedProperties"(): boolean
public "setProperties"(propertyMap0: $PropertyMap$$Type): void
get "accessToken"(): string
get "clientId"(): $Optional<string>
get "gameProfile"(): $GameProfile
get "name"(): string
get "profileId"(): $UUID
get "sessionId"(): string
get "type"(): $User$Type
get "uuid"(): string
get "xuid"(): $Optional<string>
set "properties"(value: $PropertyMap$$Type)
}
}

declare module "net.minecraft.client.StringSplitter$WidthProvider" {
import { $Style$$Type } from "net.minecraft.network.chat.Style"

export interface $StringSplitter$WidthProvider {
"getWidth"(int0: integer, style1: $Style$$Type): float
}

export namespace $StringSplitter$WidthProvider {
const probejs$$marker: never
}
export abstract class $StringSplitter$WidthProvider$$Static implements $StringSplitter$WidthProvider {
}
}

declare module "net.minecraft.client.GuiMessageTag" {
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Record } from "java.lang.Record"
import { $GuiMessageTag$Icon, $GuiMessageTag$Icon$$Type } from "net.minecraft.client.GuiMessageTag$Icon"

export class $GuiMessageTag extends $Record {
constructor(int0: integer, icon1: $GuiMessageTag$Icon$$Type, component2: $Component$$Type, string3: string)

public static "chatModified"(string0: string): $GuiMessageTag
public static "chatNotSecure"(): $GuiMessageTag
public "icon"(): $GuiMessageTag$Icon
public "indicatorColor"(): integer
public "logTag"(): string
public static "system"(): $GuiMessageTag
public static "systemSinglePlayer"(): $GuiMessageTag
public "text"(): $Component
}
}

declare module "net.minecraft.client.OptionInstance$CycleableValueSet$ValueSetter" {
import { $OptionInstance$$Type } from "net.minecraft.client.OptionInstance"

export interface $OptionInstance$CycleableValueSet$ValueSetter<T = any> {
"set"(optionInstance0: $OptionInstance$$Type<T>, t1: T): void
}

export namespace $OptionInstance$CycleableValueSet$ValueSetter {
const probejs$$marker: never
}
export abstract class $OptionInstance$CycleableValueSet$ValueSetter$$Static<T = any> implements $OptionInstance$CycleableValueSet$ValueSetter<T> {
}
}

declare module "net.minecraft.client.RecipeBookCategories" {
import { $List } from "java.util.List"
import { $IExtensibleEnum } from "net.minecraftforge.common.IExtensibleEnum"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $Map } from "java.util.Map"
import { $RecipeBookType$$Type } from "net.minecraft.world.inventory.RecipeBookType"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $RecipeBookCategories extends $Enum<$RecipeBookCategories> implements $IExtensibleEnum {
static readonly "AGGREGATE_CATEGORIES": $Map<$RecipeBookCategories, $List<$RecipeBookCategories>>
static readonly "BLAST_FURNACE_BLOCKS": $RecipeBookCategories
static readonly "BLAST_FURNACE_CATEGORIES": $List<$RecipeBookCategories>
static readonly "BLAST_FURNACE_MISC": $RecipeBookCategories
static readonly "BLAST_FURNACE_SEARCH": $RecipeBookCategories
static readonly "CAMPFIRE": $RecipeBookCategories
static readonly "CRAFTING_BUILDING_BLOCKS": $RecipeBookCategories
static readonly "CRAFTING_CATEGORIES": $List<$RecipeBookCategories>
static readonly "CRAFTING_EQUIPMENT": $RecipeBookCategories
static readonly "CRAFTING_MISC": $RecipeBookCategories
static readonly "CRAFTING_REDSTONE": $RecipeBookCategories
static readonly "CRAFTING_SEARCH": $RecipeBookCategories
static readonly "FURNACE_BLOCKS": $RecipeBookCategories
static readonly "FURNACE_CATEGORIES": $List<$RecipeBookCategories>
static readonly "FURNACE_FOOD": $RecipeBookCategories
static readonly "FURNACE_MISC": $RecipeBookCategories
static readonly "FURNACE_SEARCH": $RecipeBookCategories
static readonly "SMITHING": $RecipeBookCategories
static readonly "SMOKER_CATEGORIES": $List<$RecipeBookCategories>
static readonly "SMOKER_FOOD": $RecipeBookCategories
static readonly "SMOKER_SEARCH": $RecipeBookCategories
static readonly "STONECUTTER": $RecipeBookCategories
static readonly "UNKNOWN": $RecipeBookCategories

public static "create"(string0: string, ...itemStack1s: $ItemStack$$Type[]): $RecipeBookCategories
public static "createCodecForExtensibleEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, E>): $Codec<E>
public static "getCategories"(recipeBookType0: $RecipeBookType$$Type): $List<$RecipeBookCategories>
public "getIconItems"(): $List<$ItemStack>
/** @deprecated */
public "init"(): void
public static "valueOf"(string0: string): $RecipeBookCategories
public static "values"(): $RecipeBookCategories[]
get "iconItems"(): $List<$ItemStack>
}
}

declare module "net.minecraft.client.ResourceLoadStateTracker" {
import { $Throwable$$Type } from "java.lang.Throwable"
import { $List$$Type } from "java.util.List"
import { $ResourceLoadStateTracker$ReloadReason$$Type } from "net.minecraft.client.ResourceLoadStateTracker$ReloadReason"
import { $CrashReport$$Type } from "net.minecraft.CrashReport"
import { $PackResources$$Type } from "net.minecraft.server.packs.PackResources"

export class $ResourceLoadStateTracker {
constructor()

public "fillCrashReport"(crashReport0: $CrashReport$$Type): void
public "finishReload"(): void
public "startRecovery"(throwable0: $Throwable$$Type): void
public "startReload"(reloadReason0: $ResourceLoadStateTracker$ReloadReason$$Type, list1: $List$$Type<$PackResources$$Type>): void
}
}

declare module "net.minecraft.client.NarratorStatus" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Enum } from "java.lang.Enum"

export class $NarratorStatus extends $Enum<$NarratorStatus> {
static readonly "ALL": $NarratorStatus
static readonly "CHAT": $NarratorStatus
static readonly "OFF": $NarratorStatus
static readonly "SYSTEM": $NarratorStatus

public static "byId"(int0: integer): $NarratorStatus
public "getId"(): integer
public "getName"(): $Component
public "shouldNarrateChat"(): boolean
public "shouldNarrateSystem"(): boolean
public static "valueOf"(string0: string): $NarratorStatus
public static "values"(): $NarratorStatus[]
get "id"(): integer
get "name"(): $Component
}
}

declare module "net.minecraft.client.ResourceLoadStateTracker$ReloadReason" {
import { $Enum } from "java.lang.Enum"

export class $ResourceLoadStateTracker$ReloadReason extends $Enum<$ResourceLoadStateTracker$ReloadReason> {
static readonly "INITIAL": $ResourceLoadStateTracker$ReloadReason
static readonly "MANUAL": $ResourceLoadStateTracker$ReloadReason
static readonly "UNKNOWN": $ResourceLoadStateTracker$ReloadReason

public static "valueOf"(string0: string): $ResourceLoadStateTracker$ReloadReason
public static "values"(): $ResourceLoadStateTracker$ReloadReason[]
}
}

declare module "net.minecraft.client.OptionInstance$ValueSet" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Options$$Type } from "net.minecraft.client.Options"
import { $OptionInstance } from "net.minecraft.client.OptionInstance"
import { $Optional } from "java.util.Optional"
import { $AbstractWidget } from "net.minecraft.client.gui.components.AbstractWidget"
import { $Function } from "java.util.function.Function"
import { $OptionInstance$TooltipSupplier$$Type } from "net.minecraft.client.OptionInstance$TooltipSupplier"

export interface $OptionInstance$ValueSet<T = any> {
"codec"(): $Codec<T>
"createButton"(tooltipSupplier0: $OptionInstance$TooltipSupplier$$Type<T>, options1: $Options$$Type, int2: integer, int3: integer, int4: integer, consumer5: $Consumer$$Type<T>): $Function<$OptionInstance<T>, $AbstractWidget>
"validateValue"(t0: T): $Optional<T>
}

export namespace $OptionInstance$ValueSet {
const probejs$$marker: never
}
export abstract class $OptionInstance$ValueSet$$Static<T = any> implements $OptionInstance$ValueSet<T> {
}
}

declare module "net.minecraft.client.StringSplitter" {
import { $List } from "java.util.List"
import { $StringSplitter$WidthProvider$$Type } from "net.minecraft.client.StringSplitter$WidthProvider"
import { $FormattedText, $FormattedText$$Type } from "net.minecraft.network.chat.FormattedText"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $FormattedCharSequence$$Type } from "net.minecraft.util.FormattedCharSequence"
import { $StringSplitter$LinePosConsumer$$Type } from "net.minecraft.client.StringSplitter$LinePosConsumer"
import { $Style, $Style$$Type } from "net.minecraft.network.chat.Style"

export class $StringSplitter {
constructor(widthProvider0: $StringSplitter$WidthProvider$$Type)

public "componentStyleAtWidth"(formattedText0: $FormattedText$$Type, int1: integer): $Style
public "componentStyleAtWidth"(formattedCharSequence0: $FormattedCharSequence$$Type, int1: integer): $Style
public "findLineBreak"(string0: string, int1: integer, style2: $Style$$Type): integer
public "formattedHeadByWidth"(string0: string, int1: integer, style2: $Style$$Type): string
public "formattedIndexByWidth"(string0: string, int1: integer, style2: $Style$$Type): integer
public static "getWordPosition"(string0: string, int1: integer, int2: integer, boolean3: boolean): integer
public "headByWidth"(formattedText0: $FormattedText$$Type, int1: integer, style2: $Style$$Type): $FormattedText
public "plainHeadByWidth"(string0: string, int1: integer, style2: $Style$$Type): string
public "plainIndexAtWidth"(string0: string, int1: integer, style2: $Style$$Type): integer
public "plainTailByWidth"(string0: string, int1: integer, style2: $Style$$Type): string
public "splitLines"(string0: string, int1: integer, style2: $Style$$Type): $List<$FormattedText>
public "splitLines"(formattedText0: $FormattedText$$Type, int1: integer, style2: $Style$$Type): $List<$FormattedText>
public "splitLines"(string0: string, int1: integer, style2: $Style$$Type, boolean3: boolean, linePosConsumer4: $StringSplitter$LinePosConsumer$$Type): void
public "splitLines"(formattedText0: $FormattedText$$Type, int1: integer, style2: $Style$$Type, biConsumer3: $BiConsumer$$Type<$FormattedText$$Type, boolean>): void
public "splitLines"(formattedText0: $FormattedText$$Type, int1: integer, style2: $Style$$Type, formattedText3: $FormattedText$$Type): $List<$FormattedText>
public "stringWidth"(string0: string): float
public "stringWidth"(formattedText0: $FormattedText$$Type): float
public "stringWidth"(formattedCharSequence0: $FormattedCharSequence$$Type): float
}
}

declare module "net.minecraft.client.AttackIndicatorStatus" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Enum } from "java.lang.Enum"
import { $OptionEnum } from "net.minecraft.util.OptionEnum"

export class $AttackIndicatorStatus extends $Enum<$AttackIndicatorStatus> implements $OptionEnum {
static readonly "CROSSHAIR": $AttackIndicatorStatus
static readonly "HOTBAR": $AttackIndicatorStatus
static readonly "OFF": $AttackIndicatorStatus

public static "byId"(int0: integer): $AttackIndicatorStatus
public "getCaption"(): $Component
public "getId"(): integer
public "getKey"(): string
public static "valueOf"(string0: string): $AttackIndicatorStatus
public static "values"(): $AttackIndicatorStatus[]
get "caption"(): $Component
get "id"(): integer
get "key"(): string
}
}

declare module "net.minecraft.client.Camera" {
import { $FogType } from "net.minecraft.world.level.material.FogType"
import { $Quaternionf } from "org.joml.Quaternionf"
import { $CameraAccessor } from "rbasamoyai.createbigcannons.mixin.client.CameraAccessor"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $BlockGetter, $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Camera$NearPlane } from "net.minecraft.client.Camera$NearPlane"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Vector3f } from "org.joml.Vector3f"
import { $CameraAccessor as $CameraAccessor$0 } from "dev.kosmx.playerAnim.mixin.firstPerson.CameraAccessor"
import { $BlockPos$MutableBlockPos } from "net.minecraft.core.BlockPos$MutableBlockPos"

export class $Camera implements $CameraAccessor$0, $CameraAccessor {
static readonly "FOG_DISTANCE_SCALE": float
readonly "blockPosition": $BlockPos$MutableBlockPos

constructor()

public "getBlockAtCamera"(): $BlockState
public "getBlockPosition"(): $BlockPos
public "getEntity"(): $Entity
public "getFluidInCamera"(): $FogType
public "getLeftVector"(): $Vector3f
public "getLookVector"(): $Vector3f
public "getMaxZoom"(double0: double): double
public "getNearPlane"(): $Camera$NearPlane
public "getPosition"(): $Vec3
public "getUpVector"(): $Vector3f
public "getXRot"(): float
public "getYRot"(): float
public "handler$ddn000$adastra$update"(area: $BlockGetter$$Type, focusedEntity: $Entity$$Type, thirdPerson: boolean, inverseView: boolean, tickDelta: float, ci: $CallbackInfo$$Type): void
public "handler$dpn000$onRotationUpdate"(float0: float, float1: float, callbackInfo2: $CallbackInfo$$Type): void
public "handler$heo000$supplementaries$setupCannonCamera"(level: $BlockGetter$$Type, entity: $Entity$$Type, detached: boolean, thirdPersonReverse: boolean, partialTick: float, ci: $CallbackInfo$$Type): void
public "handler$zpj000$vista$setupCannonCamera"(level: $BlockGetter$$Type, entity: $Entity$$Type, detached: boolean, thirdPersonReverse: boolean, partialTick: float, ci: $CallbackInfo$$Type): void
public "isDetached"(): boolean
public "isInitialized"(): boolean
public "move"(double0: double, double1: double, double2: double): void
public "reset"(): void
public "rotation"(): $Quaternionf
public "setAnglesInternal"(float0: float, float1: float): void
public "setPosition"(vec30: $Vec3$$Type): void
public "setRotation"(float0: float, float1: float): void
public "setup"(blockGetter0: $BlockGetter$$Type, entity1: $Entity$$Type, boolean2: boolean, boolean3: boolean, float4: float): void
public "tick"(): void
get "entity"(): $Entity
set "entity"(value: $Entity$$Type)
get "initialized"(): boolean
set "initialized"(value: boolean)
get "level"(): $BlockGetter
set "level"(value: $BlockGetter$$Type)
get "blockAtCamera"(): $BlockState
get "fluidInCamera"(): $FogType
get "leftVector"(): $Vector3f
get "lookVector"(): $Vector3f
get "nearPlane"(): $Camera$NearPlane
get "position"(): $Vec3
get "upVector"(): $Vector3f
get "xRot"(): float
get "yRot"(): float
get "detached"(): boolean
set "position"(value: $Vec3$$Type)
}
}

