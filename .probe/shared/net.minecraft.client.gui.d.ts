declare module "net.minecraft.client.gui.screens.social.PlayerSocialManager" {
import { $PlayerInfo$$Type } from "net.minecraft.client.multiplayer.PlayerInfo"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $Set } from "java.util.Set"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $UserApiService$$Type } from "com.mojang.authlib.minecraft.UserApiService"

export class $PlayerSocialManager {
constructor(minecraft0: $Minecraft$$Type, userApiService1: $UserApiService$$Type)

public "addPlayer"(playerInfo0: $PlayerInfo$$Type): void
public "getDiscoveredUUID"(string0: string): $UUID
public "getHiddenPlayers"(): $Set<$UUID>
public "handler$hgb000$addPlayer"(info: $PlayerInfo$$Type, ci: $CallbackInfo$$Type): void
public "handler$hgb000$removePlayer"(id: $UUID$$Type, ci: $CallbackInfo$$Type): void
public "hidePlayer"(uUID0: $UUID$$Type): void
public "isBlocked"(uUID0: $UUID$$Type): boolean
public "isHidden"(uUID0: $UUID$$Type): boolean
public "removePlayer"(uUID0: $UUID$$Type): void
public "shouldHideMessageFrom"(uUID0: $UUID$$Type): boolean
public "showPlayer"(uUID0: $UUID$$Type): void
public "startOnlineMode"(): void
public "stopOnlineMode"(): void
get "hiddenPlayers"(): $Set<$UUID>
}
}

declare module "net.minecraft.client.gui.navigation.ScreenRectangle" {
import { $ScreenAxis$$Type } from "net.minecraft.client.gui.navigation.ScreenAxis"
import { $Record } from "java.lang.Record"
import { $ScreenPosition, $ScreenPosition$$Type } from "net.minecraft.client.gui.navigation.ScreenPosition"
import { $ScreenDirection$$Type } from "net.minecraft.client.gui.navigation.ScreenDirection"

export class $ScreenRectangle extends $Record {
constructor(int0: integer, int1: integer, int2: integer, int3: integer)
constructor(screenPosition0: $ScreenPosition$$Type, int1: integer, int2: integer)

public "bottom"(): integer
public static "empty"(): $ScreenRectangle
public "getBorder"(screenDirection0: $ScreenDirection$$Type): $ScreenRectangle
public "getBoundInDirection"(screenDirection0: $ScreenDirection$$Type): integer
public "getCenterInAxis"(screenAxis0: $ScreenAxis$$Type): integer
public "getLength"(screenAxis0: $ScreenAxis$$Type): integer
public "height"(): integer
public "intersection"(screenRectangle0: $ScreenRectangle$$Type): $ScreenRectangle
public "left"(): integer
public static "of"(screenAxis0: $ScreenAxis$$Type, int1: integer, int2: integer, int3: integer, int4: integer): $ScreenRectangle
public "overlaps"(screenRectangle0: $ScreenRectangle$$Type): boolean
public "overlapsInAxis"(screenRectangle0: $ScreenRectangle$$Type, screenAxis1: $ScreenAxis$$Type): boolean
public "position"(): $ScreenPosition
public "right"(): integer
public "step"(screenDirection0: $ScreenDirection$$Type): $ScreenRectangle
public "top"(): integer
public "width"(): integer
}
}

declare module "net.minecraft.client.gui.components.toasts.TutorialToast$Icons" {
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Enum } from "java.lang.Enum"

export class $TutorialToast$Icons extends $Enum<$TutorialToast$Icons> {
static readonly "MOUSE": $TutorialToast$Icons
static readonly "MOVEMENT_KEYS": $TutorialToast$Icons
static readonly "RECIPE_BOOK": $TutorialToast$Icons
static readonly "RIGHT_CLICK": $TutorialToast$Icons
static readonly "SOCIAL_INTERACTIONS": $TutorialToast$Icons
static readonly "TREE": $TutorialToast$Icons
static readonly "WOODEN_PLANKS": $TutorialToast$Icons

public "render"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer): void
public static "valueOf"(string0: string): $TutorialToast$Icons
public static "values"(): $TutorialToast$Icons[]
}
}

declare module "net.minecraft.client.gui.screens.worldselection.PresetEditor" {
import { $WorldPreset } from "net.minecraft.world.level.levelgen.presets.WorldPreset"
import { $CreateWorldScreen$$Type } from "net.minecraft.client.gui.screens.worldselection.CreateWorldScreen"
import { $Map } from "java.util.Map"
import { $Screen } from "net.minecraft.client.gui.screens.Screen"
import { $WorldCreationContext$$Type } from "net.minecraft.client.gui.screens.worldselection.WorldCreationContext"
import { $Optional } from "java.util.Optional"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"

export interface $PresetEditor {
"createEditScreen"(createWorldScreen0: $CreateWorldScreen$$Type, worldCreationContext1: $WorldCreationContext$$Type): $Screen
}

export namespace $PresetEditor {
const EDITORS: $Map<$Optional<$ResourceKey<$WorldPreset>>, $PresetEditor>
}
export abstract class $PresetEditor$$Static implements $PresetEditor {
/** @deprecated */
static readonly "EDITORS": $Map<$Optional<$ResourceKey<$WorldPreset>>, $PresetEditor>

}
}

declare module "net.minecraft.client.gui.components.toasts.ToastComponent$ToastInstance" {
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Toast } from "net.minecraft.client.gui.components.toasts.Toast"

export class $ToastComponent$ToastInstance<T extends $Toast = $Toast> {
public "getToast"(): T
public "render"(int0: integer, guiGraphics1: $GuiGraphics$$Type): boolean
get "toast"(): T
}
}

declare module "net.minecraft.client.gui.layouts.LayoutElement" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ScreenRectangle } from "net.minecraft.client.gui.navigation.ScreenRectangle"
import { $AbstractWidget$$Type } from "net.minecraft.client.gui.components.AbstractWidget"

export interface $LayoutElement {
"getHeight"(): integer
"getRectangle"(): $ScreenRectangle
"getWidth"(): integer
"getX"(): integer
"getY"(): integer
"setPosition"(int0: integer, int1: integer): void
"setX"(int0: integer): void
"setY"(int0: integer): void
"visitWidgets"(consumer0: $Consumer$$Type<$AbstractWidget$$Type>): void
get "height"(): integer
get "rectangle"(): $ScreenRectangle
get "width"(): integer
get "x"(): integer
get "y"(): integer
set "x"(value: integer)
set "y"(value: integer)
}

export namespace $LayoutElement {
const probejs$$marker: never
}
export abstract class $LayoutElement$$Static implements $LayoutElement {
}
}

declare module "net.minecraft.client.gui.components.Button$Builder" {
import { $Button$CreateNarration$$Type } from "net.minecraft.client.gui.components.Button$CreateNarration"
import { $Tooltip$$Type } from "net.minecraft.client.gui.components.Tooltip"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Button$OnPress$$Type } from "net.minecraft.client.gui.components.Button$OnPress"
import { $Function$$Type } from "java.util.function.Function"
import { $Button } from "net.minecraft.client.gui.components.Button"

export class $Button$Builder {
constructor(component0: $Component$$Type, onPress1: $Button$OnPress$$Type)

public "bounds"(int0: integer, int1: integer, int2: integer, int3: integer): $Button$Builder
public "build"(): $Button
public "build"(function0: $Function$$Type<$Button$Builder$$Type, $Button>): $Button
public "createNarration"(createNarration0: $Button$CreateNarration$$Type): $Button$Builder
public "pos"(int0: integer, int1: integer): $Button$Builder
public "size"(int0: integer, int1: integer): $Button$Builder
public "tooltip"(tooltip0: $Tooltip$$Type): $Button$Builder
public "width"(int0: integer): $Button$Builder
}
}

declare module "net.minecraft.client.gui.navigation.FocusNavigationEvent$TabNavigation" {
import { $Record } from "java.lang.Record"
import { $ScreenDirection } from "net.minecraft.client.gui.navigation.ScreenDirection"
import { $FocusNavigationEvent } from "net.minecraft.client.gui.navigation.FocusNavigationEvent"

export class $FocusNavigationEvent$TabNavigation extends $Record implements $FocusNavigationEvent {
constructor(boolean0: boolean)

public "forward"(): boolean
public "getVerticalDirectionForInitialFocus"(): $ScreenDirection
get "verticalDirectionForInitialFocus"(): $ScreenDirection
}
}

declare module "net.minecraft.client.gui.components.AbstractSelectionList$Entry" {
import { $GuiEventListener } from "net.minecraft.client.gui.components.events.GuiEventListener"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $ScreenRectangle } from "net.minecraft.client.gui.navigation.ScreenRectangle"
import { $ComponentPath } from "net.minecraft.client.gui.ComponentPath"
import { $FocusNavigationEvent$$Type } from "net.minecraft.client.gui.navigation.FocusNavigationEvent"

export class $AbstractSelectionList$Entry<E extends $AbstractSelectionList$Entry<E> = $AbstractSelectionList$Entry<E>> implements $GuiEventListener {
public "charTyped"(char0: character, int1: integer): boolean
public "getCurrentFocusPath"(): $ComponentPath
public "getRectangle"(): $ScreenRectangle
public "getTabOrderGroup"(): integer
public "isFocused"(): boolean
public "isMouseOver"(double0: double, double1: double): boolean
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "mouseClicked"(double0: double, double1: double, int2: integer): boolean
public "mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseReleased"(double0: double, double1: double, int2: integer): boolean
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
public "render"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, boolean8: boolean, float9: float): void
public "renderBack"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, boolean8: boolean, float9: float): void
public "setFocused"(boolean0: boolean): void
get "currentFocusPath"(): $ComponentPath
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
get "focused"(): boolean
set "focused"(value: boolean)
}
}

declare module "net.minecraft.client.gui.components.TabOrderedElement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TabOrderedElement {
"getTabOrderGroup"(): integer
get "tabOrderGroup"(): integer
}

export namespace $TabOrderedElement {
const probejs$$marker: never
}
export abstract class $TabOrderedElement$$Static implements $TabOrderedElement {
}
}

declare module "net.minecraft.client.gui.components.PlayerTabOverlay" {
import { $Objective$$Type } from "net.minecraft.world.scores.Objective"
import { $PlayerInfo$$Type } from "net.minecraft.client.multiplayer.PlayerInfo"
import { $Scoreboard$$Type } from "net.minecraft.world.scores.Scoreboard"
import { $Gui$$Type } from "net.minecraft.client.gui.Gui"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"

export class $PlayerTabOverlay {
static readonly "HEART_EMPTY_CONTAINER": integer
static readonly "HEART_EMPTY_CONTAINER_BLINKING": integer
static readonly "HEART_FULL": integer
static readonly "HEART_GHOST_FULL": integer
static readonly "HEART_GHOST_HALF_FULL": integer
static readonly "HEART_GOLDEN_FULL": integer
static readonly "HEART_GOLDEN_HALF_FULL": integer
static readonly "HEART_HALF_FULL": integer
static readonly "MAX_ROWS_PER_COL": integer

constructor(minecraft0: $Minecraft$$Type, gui1: $Gui$$Type)

public "getNameForDisplay"(playerInfo0: $PlayerInfo$$Type): $Component
public "render"(guiGraphics0: $GuiGraphics$$Type, int1: integer, scoreboard2: $Scoreboard$$Type, objective3: $Objective$$Type): void
public "reset"(): void
public "setFooter"(component0: $Component$$Type): void
public "setHeader"(component0: $Component$$Type): void
public "setVisible"(boolean0: boolean): void
get "visible"(): boolean
set "visible"(value: boolean)
set "footer"(value: $Component$$Type)
set "header"(value: $Component$$Type)
}
}

declare module "net.minecraft.client.gui.components.AbstractWidget" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Font$$Type } from "net.minecraft.client.gui.Font"
import { $ScreenRectangle } from "net.minecraft.client.gui.navigation.ScreenRectangle"
import { $CustomizableWidget } from "de.keksuccino.fancymenu.util.rendering.ui.widget.CustomizableWidget"
import { $IMixinAbstractWidget } from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinAbstractWidget"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $CustomizableWidget$CustomBackgroundResetBehavior, $CustomizableWidget$CustomBackgroundResetBehavior$$Type } from "de.keksuccino.fancymenu.util.rendering.ui.widget.CustomizableWidget$CustomBackgroundResetBehavior"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $NarratableEntry } from "net.minecraft.client.gui.narration.NarratableEntry"
import { $UniqueWidget } from "de.keksuccino.fancymenu.util.rendering.ui.widget.UniqueWidget"
import { $ComponentPath } from "net.minecraft.client.gui.ComponentPath"
import { $Tooltip, $Tooltip$$Type } from "net.minecraft.client.gui.components.Tooltip"
import { $LayoutElement } from "net.minecraft.client.gui.layouts.LayoutElement"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $NarrationElementOutput$$Type } from "net.minecraft.client.gui.narration.NarrationElementOutput"
import { $RenderableResource, $RenderableResource$$Type } from "de.keksuccino.fancymenu.util.resource.RenderableResource"
import { $SoundManager$$Type } from "net.minecraft.client.sounds.SoundManager"
import { $FocusNavigationEvent$$Type } from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $GuiEventListener } from "net.minecraft.client.gui.components.events.GuiEventListener"
import { $List } from "java.util.List"
import { $NarratableEntry$NarrationPriority } from "net.minecraft.client.gui.narration.NarratableEntry$NarrationPriority"
import { $Renderable } from "net.minecraft.client.gui.components.Renderable"
import { $IAudio, $IAudio$$Type } from "de.keksuccino.fancymenu.util.resource.resources.audio.IAudio"

export class $AbstractWidget implements $Renderable, $GuiEventListener, $LayoutElement, $NarratableEntry, $IMixinAbstractWidget, $UniqueWidget, $CustomizableWidget {
static readonly "ACCESSIBILITY_TEXTURE": $ResourceLocation
static readonly "UNSET_FG_COLOR": integer
static readonly "WIDGETS_LOCATION": $ResourceLocation

constructor(int0: integer, int1: integer, int2: integer, int3: integer, component4: $Component$$Type)

public "addFocusStateListenerFancyMenu"(consumer0: $Consumer$$Type): void
public "addHoverOrFocusStateListenerFancyMenu"(consumer0: $Consumer$$Type): void
public "addHoverStateListenerFancyMenu"(consumer0: $Consumer$$Type): void
public "addResetCustomizationsListenerFancyMenu"(runnable0: $Runnable$$Type): void
public "charTyped"(char0: character, int1: integer): boolean
public "clearFGColor"(): void
public "getCurrentFocusPath"(): $ComponentPath
public "getCustomBackgroundHoverFancyMenu"(): $RenderableResource
public "getCustomBackgroundInactiveFancyMenu"(): $RenderableResource
public "getCustomBackgroundNormalFancyMenu"(): $RenderableResource
public "getCustomBackgroundResetBehaviorFancyMenu"(): $CustomizableWidget$CustomBackgroundResetBehavior
public "getCustomClickSoundFancyMenu"(): $IAudio
public "getCustomHeightFancyMenu"(): integer
public "getCustomLabelFancyMenu"(): $Component
public "getCustomWidthFancyMenu"(): integer
public "getCustomXFancyMenu"(): integer
public "getCustomYFancyMenu"(): integer
public "getFGColor"(): integer
public "getFocusStateListenersFancyMenu"(): $List
public "getHeight"(): integer
public "getHoverLabelFancyMenu"(): $Component
public "getHoverOrFocusStateListenersFancyMenu"(): $List
public "getHoverSoundFancyMenu"(): $IAudio
public "getHoverStateListenersFancyMenu"(): $List
public "getLastFocusStateFancyMenu"(): boolean
public "getLastHoverOrFocusStateFancyMenu"(): boolean
public "getLastHoverStateFancyMenu"(): boolean
public "getMessage"(): $Component
public "getNineSliceCustomBackgroundBorderX_FancyMenu"(): integer
public "getNineSliceCustomBackgroundBorderY_FancyMenu"(): integer
public "getOriginalMessageFancyMenu"(): $Component
public "getRectangle"(): $ScreenRectangle
public "getResetCustomizationsListenersFancyMenu"(): $List
public "getTabOrderGroup"(): integer
public "getTooltip"(): $Tooltip
public "getWidgetIdentifierFancyMenu"(): string
public "getWidth"(): integer
public "getX"(): integer
public "getY"(): integer
public "isActive"(): boolean
public "isFocused"(): boolean
public "isHiddenFancyMenu"(): boolean
public "isHovered"(): boolean
public "isHoveredOrFocused"(): boolean
public "isMouseOver"(double0: double, double1: double): boolean
public "isNineSliceCustomBackgroundTexture_FancyMenu"(): boolean
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "mouseClicked"(double0: double, double1: double, int2: integer): boolean
public "mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseReleased"(double0: double, double1: double, int2: integer): boolean
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "narrationPriority"(): $NarratableEntry$NarrationPriority
public "nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
public "onClick"(double0: double, double1: double): void
public "onRelease"(double0: double, double1: double): void
public "playDownSound"(soundManager0: $SoundManager$$Type): void
public "render"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float): void
public "renderCustomBackgroundFancyMenu"(abstractWidget0: $AbstractWidget$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, int4: integer, int5: integer): boolean
public static "renderScrollingString"(guiGraphics0: $GuiGraphics$$Type, font1: $Font$$Type, component2: $Component$$Type, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer): void
public "renderTexture"(guiGraphics0: $GuiGraphics$$Type, resourceLocation1: $ResourceLocation$$Type, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, int9: integer, int10: integer): void
public "resetWidgetCustomizationsFancyMenu"(): void
public "resetWidgetSizeAndPositionFancyMenu"(): void
public "setAlpha"(float0: float): void
public "setCustomBackgroundHoverFancyMenu"(renderableResource0: $RenderableResource$$Type): void
public "setCustomBackgroundInactiveFancyMenu"(renderableResource0: $RenderableResource$$Type): void
public "setCustomBackgroundNormalFancyMenu"(renderableResource0: $RenderableResource$$Type): void
public "setCustomBackgroundResetBehaviorFancyMenu"(customBackgroundResetBehavior0: $CustomizableWidget$CustomBackgroundResetBehavior$$Type): void
public "setCustomClickSoundFancyMenu"(iAudio0: $IAudio$$Type): void
public "setCustomHeightFancyMenu"(integer0: integer): void
public "setCustomLabelFancyMenu"(component0: $Component$$Type): void
public "setCustomWidthFancyMenu"(integer0: integer): void
public "setCustomXFancyMenu"(integer0: integer): void
public "setCustomYFancyMenu"(integer0: integer): void
public "setFGColor"(int0: integer): void
public "setFocused"(boolean0: boolean): void
public "setHeight"(int0: integer): void
public "setHiddenFancyMenu"(boolean0: boolean): void
public "setHoverLabelFancyMenu"(component0: $Component$$Type): void
public "setHoverSoundFancyMenu"(iAudio0: $IAudio$$Type): void
public "setLastFocusStateFancyMenu"(boolean0: boolean): void
public "setLastHoverOrFocusStateFancyMenu"(boolean0: boolean): void
public "setLastHoverStateFancyMenu"(boolean0: boolean): void
public "setMessage"(component0: $Component$$Type): void
public "setNineSliceBorderX_FancyMenu"(int0: integer): void
public "setNineSliceBorderY_FancyMenu"(int0: integer): void
public "setNineSliceCustomBackground_FancyMenu"(boolean0: boolean): void
public "setPosition"(int0: integer, int1: integer): void
public "setTabOrderGroup"(int0: integer): void
public "setTooltip"(tooltip0: $Tooltip$$Type): void
public "setTooltipDelay"(int0: integer): void
public "setWidgetIdentifierFancyMenu"(string0: string): $AbstractWidget
public "setWidth"(int0: integer): void
public "setX"(int0: integer): void
public "setY"(int0: integer): void
public "stopCustomClickSoundFancyMenu"(): void
public "stopHoverSoundFancyMenu"(): void
public "tickFocusStateListenersFancyMenu"(boolean0: boolean): void
public "tickHoverOrFocusStateListenersFancyMenu"(boolean0: boolean): void
public "tickHoverStateListenersFancyMenu"(boolean0: boolean): void
public "updateNarration"(narrationElementOutput0: $NarrationElementOutput$$Type): void
public "visitWidgets"(consumer0: $Consumer$$Type<$AbstractWidget$$Type>): void
public static "wrapDefaultNarrationMessage"(component0: $Component$$Type): $MutableComponent
get "active"(): boolean
set "active"(value: boolean)
get "height"(): integer
set "height"(value: integer)
get "visible"(): boolean
set "visible"(value: boolean)
get "x"(): integer
set "x"(value: integer)
get "y"(): integer
set "y"(value: integer)
get "currentFocusPath"(): $ComponentPath
get "customBackgroundHoverFancyMenu"(): $RenderableResource
get "customBackgroundInactiveFancyMenu"(): $RenderableResource
get "customBackgroundNormalFancyMenu"(): $RenderableResource
get "customBackgroundResetBehaviorFancyMenu"(): $CustomizableWidget$CustomBackgroundResetBehavior
get "customClickSoundFancyMenu"(): $IAudio
get "customHeightFancyMenu"(): integer
get "customLabelFancyMenu"(): $Component
get "customWidthFancyMenu"(): integer
get "customXFancyMenu"(): integer
get "customYFancyMenu"(): integer
get "fGColor"(): integer
get "focusStateListenersFancyMenu"(): $List
get "hoverLabelFancyMenu"(): $Component
get "hoverOrFocusStateListenersFancyMenu"(): $List
get "hoverSoundFancyMenu"(): $IAudio
get "hoverStateListenersFancyMenu"(): $List
get "lastFocusStateFancyMenu"(): boolean
get "lastHoverOrFocusStateFancyMenu"(): boolean
get "lastHoverStateFancyMenu"(): boolean
get "message"(): $Component
get "nineSliceCustomBackgroundBorderX_FancyMenu"(): integer
get "nineSliceCustomBackgroundBorderY_FancyMenu"(): integer
get "originalMessageFancyMenu"(): $Component
get "rectangle"(): $ScreenRectangle
get "resetCustomizationsListenersFancyMenu"(): $List
get "tabOrderGroup"(): integer
get "tooltip"(): $Tooltip
get "widgetIdentifierFancyMenu"(): string
get "width"(): integer
get "focused"(): boolean
get "hiddenFancyMenu"(): boolean
get "hovered"(): boolean
get "hoveredOrFocused"(): boolean
get "nineSliceCustomBackgroundTexture_FancyMenu"(): boolean
set "alpha"(value: float)
set "customBackgroundHoverFancyMenu"(value: $RenderableResource$$Type)
set "customBackgroundInactiveFancyMenu"(value: $RenderableResource$$Type)
set "customBackgroundNormalFancyMenu"(value: $RenderableResource$$Type)
set "customBackgroundResetBehaviorFancyMenu"(value: $CustomizableWidget$CustomBackgroundResetBehavior$$Type)
set "customClickSoundFancyMenu"(value: $IAudio$$Type)
set "customHeightFancyMenu"(value: integer)
set "customLabelFancyMenu"(value: $Component$$Type)
set "customWidthFancyMenu"(value: integer)
set "customXFancyMenu"(value: integer)
set "customYFancyMenu"(value: integer)
set "fGColor"(value: integer)
set "focused"(value: boolean)
set "hiddenFancyMenu"(value: boolean)
set "hoverLabelFancyMenu"(value: $Component$$Type)
set "hoverSoundFancyMenu"(value: $IAudio$$Type)
set "lastFocusStateFancyMenu"(value: boolean)
set "lastHoverOrFocusStateFancyMenu"(value: boolean)
set "lastHoverStateFancyMenu"(value: boolean)
set "message"(value: $Component$$Type)
set "nineSliceBorderX_FancyMenu"(value: integer)
set "nineSliceBorderY_FancyMenu"(value: integer)
set "nineSliceCustomBackground_FancyMenu"(value: boolean)
set "tabOrderGroup"(value: integer)
set "tooltip"(value: $Tooltip$$Type)
set "tooltipDelay"(value: integer)
set "widgetIdentifierFancyMenu"(value: string)
set "width"(value: integer)
}
}

declare module "net.minecraft.client.gui.screens.worldselection.WorldCreationContext$OptionsModifier" {
import { $WorldOptions, $WorldOptions$$Type } from "net.minecraft.world.level.levelgen.WorldOptions"
import { $UnaryOperator } from "java.util.function.UnaryOperator"
import { $Function, $Function$$Type } from "java.util.function.Function"

export interface $WorldCreationContext$OptionsModifier extends $UnaryOperator<$WorldOptions> {
"andThen"<V>(function0: $Function$$Type<$WorldOptions$$Type, V>): $Function<$WorldOptions, V>
"apply"(worldOptions0: $WorldOptions$$Type): $WorldOptions
"compose"<V>(function0: $Function$$Type<V, $WorldOptions>): $Function<V, $WorldOptions>
}

export namespace $WorldCreationContext$OptionsModifier {
function identity<T>(): $UnaryOperator<T>
}
export abstract class $WorldCreationContext$OptionsModifier$$Static implements $WorldCreationContext$OptionsModifier {
static "identity"<T>(): $UnaryOperator<T>
}
}

declare module "net.minecraft.client.gui.navigation.FocusNavigationEvent" {
import { $ScreenDirection } from "net.minecraft.client.gui.navigation.ScreenDirection"

export interface $FocusNavigationEvent {
"getVerticalDirectionForInitialFocus"(): $ScreenDirection
get "verticalDirectionForInitialFocus"(): $ScreenDirection
}

export namespace $FocusNavigationEvent {
const probejs$$marker: never
}
export abstract class $FocusNavigationEvent$$Static implements $FocusNavigationEvent {
}
}

declare module "net.minecraft.client.gui.font.FontSet" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List$$Type } from "java.util.List"
import { $GlyphProvider$$Type } from "com.mojang.blaze3d.font.GlyphProvider"
import { $BakedGlyph } from "net.minecraft.client.gui.font.glyphs.BakedGlyph"
import { $GlyphInfo, $GlyphInfo$$Type } from "com.mojang.blaze3d.font.GlyphInfo"
import { $TextureManager$$Type } from "net.minecraft.client.renderer.texture.TextureManager"
import { $AutoCloseable } from "java.lang.AutoCloseable"

export class $FontSet implements $AutoCloseable {
constructor(textureManager0: $TextureManager$$Type, resourceLocation1: $ResourceLocation$$Type)

public "close"(): void
public "getGlyph"(int0: integer): $BakedGlyph
public "getGlyphInfo"(int0: integer, boolean1: boolean): $GlyphInfo
public "getRandomGlyph"(glyphInfo0: $GlyphInfo$$Type): $BakedGlyph
public "reload"(list0: $List$$Type<$GlyphProvider$$Type>): void
public "whiteGlyph"(): $BakedGlyph
}
}

declare module "net.minecraft.client.gui.screens.worldselection.WorldCreationContext" {
import { $WorldCreationContext$DimensionsUpdater$$Type } from "net.minecraft.client.gui.screens.worldselection.WorldCreationContext$DimensionsUpdater"
import { $WorldGenSettings$$Type } from "net.minecraft.world.level.levelgen.WorldGenSettings"
import { $Record } from "java.lang.Record"
import { $Registry, $Registry$$Type } from "net.minecraft.core.Registry"
import { $WorldOptions, $WorldOptions$$Type } from "net.minecraft.world.level.levelgen.WorldOptions"
import { $WorldCreationContext$OptionsModifier$$Type } from "net.minecraft.client.gui.screens.worldselection.WorldCreationContext$OptionsModifier"
import { $RegistryAccess$Frozen } from "net.minecraft.core.RegistryAccess$Frozen"
import { $LayeredRegistryAccess, $LayeredRegistryAccess$$Type } from "net.minecraft.core.LayeredRegistryAccess"
import { $LevelStem, $LevelStem$$Type } from "net.minecraft.world.level.dimension.LevelStem"
import { $ReloadableServerResources, $ReloadableServerResources$$Type } from "net.minecraft.server.ReloadableServerResources"
import { $WorldDataConfiguration, $WorldDataConfiguration$$Type } from "net.minecraft.world.level.WorldDataConfiguration"
import { $RegistryLayer, $RegistryLayer$$Type } from "net.minecraft.server.RegistryLayer"
import { $WorldDimensions, $WorldDimensions$$Type } from "net.minecraft.world.level.levelgen.WorldDimensions"

export class $WorldCreationContext extends $Record {
constructor(worldGenSettings0: $WorldGenSettings$$Type, layeredRegistryAccess1: $LayeredRegistryAccess$$Type<$RegistryLayer$$Type>, reloadableServerResources2: $ReloadableServerResources$$Type, worldDataConfiguration3: $WorldDataConfiguration$$Type)
constructor(worldOptions0: $WorldOptions$$Type, worldDimensions1: $WorldDimensions$$Type, layeredRegistryAccess2: $LayeredRegistryAccess$$Type<$RegistryLayer$$Type>, reloadableServerResources3: $ReloadableServerResources$$Type, worldDataConfiguration4: $WorldDataConfiguration$$Type)
constructor(options: $WorldOptions$$Type, datapackDimensions: $Registry$$Type<$LevelStem$$Type>, selectedDimensions: $WorldDimensions$$Type, worldgenRegistries: $LayeredRegistryAccess$$Type<$RegistryLayer$$Type>, dataPackResources: $ReloadableServerResources$$Type, dataConfiguration: $WorldDataConfiguration$$Type)

public "dataConfiguration"(): $WorldDataConfiguration
public "dataPackResources"(): $ReloadableServerResources
public "datapackDimensions"(): $Registry<$LevelStem>
public "options"(): $WorldOptions
public "selectedDimensions"(): $WorldDimensions
public "withDataConfiguration"(worldDataConfiguration0: $WorldDataConfiguration$$Type): $WorldCreationContext
public "withDimensions"(dimensionsUpdater0: $WorldCreationContext$DimensionsUpdater$$Type): $WorldCreationContext
public "withOptions"(optionsModifier0: $WorldCreationContext$OptionsModifier$$Type): $WorldCreationContext
public "withSettings"(worldOptions0: $WorldOptions$$Type, worldDimensions1: $WorldDimensions$$Type): $WorldCreationContext
public "worldgenLoadContext"(): $RegistryAccess$Frozen
public "worldgenRegistries"(): $LayeredRegistryAccess<$RegistryLayer>
}
}

declare module "net.minecraft.client.gui.components.events.ContainerEventHandler" {
import { $GuiEventListener, $GuiEventListener$$Type } from "net.minecraft.client.gui.components.events.GuiEventListener"
import { $List } from "java.util.List"
import { $Optional } from "java.util.Optional"
import { $ScreenRectangle } from "net.minecraft.client.gui.navigation.ScreenRectangle"
import { $ComponentPath } from "net.minecraft.client.gui.ComponentPath"
import { $FocusNavigationEvent$$Type } from "net.minecraft.client.gui.navigation.FocusNavigationEvent"

export interface $ContainerEventHandler extends $GuiEventListener {
"charTyped"(char0: character, int1: integer): boolean
"children"(): $List<$GuiEventListener>
"getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
"getCurrentFocusPath"(): $ComponentPath
"getFocused"(): $GuiEventListener
"getRectangle"(): $ScreenRectangle
"getTabOrderGroup"(): integer
"isDragging"(): boolean
"isFocused"(): boolean
"isMouseOver"(double0: double, double1: double): boolean
"keyPressed"(int0: integer, int1: integer, int2: integer): boolean
"keyReleased"(int0: integer, int1: integer, int2: integer): boolean
"magicalSpecialHackyFocus"(guiEventListener0: $GuiEventListener$$Type): void
"mouseClicked"(double0: double, double1: double, int2: integer): boolean
"mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
"mouseMoved"(double0: double, double1: double): void
"mouseReleased"(double0: double, double1: double, int2: integer): boolean
"mouseScrolled"(double0: double, double1: double, double2: double): boolean
"nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
"setDragging"(boolean0: boolean): void
"setFocused"(guiEventListener0: $GuiEventListener$$Type): void
"setFocused"(boolean0: boolean): void
get "currentFocusPath"(): $ComponentPath
get "focused"(): $GuiEventListener
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
get "dragging"(): boolean
get "focused"(): boolean
set "dragging"(value: boolean)
set "focused"(value: $GuiEventListener$$Type)
set "focused"(value: boolean)
}

export namespace $ContainerEventHandler {
const probejs$$marker: never
}
export abstract class $ContainerEventHandler$$Static implements $ContainerEventHandler {
}
}

declare module "net.minecraft.client.gui.components.SubtitleOverlay" {
import { $SoundEventListener } from "net.minecraft.client.sounds.SoundEventListener"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $WeighedSoundEvents$$Type } from "net.minecraft.client.sounds.WeighedSoundEvents"
import { $SoundInstance$$Type } from "net.minecraft.client.resources.sounds.SoundInstance"

export class $SubtitleOverlay implements $SoundEventListener {
constructor(minecraft0: $Minecraft$$Type)

public "onPlaySound"(soundInstance0: $SoundInstance$$Type, weighedSoundEvents1: $WeighedSoundEvents$$Type): void
public "render"(guiGraphics0: $GuiGraphics$$Type): void
}
}

declare module "net.minecraft.client.gui.narration.NarrationThunk" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List$$Type } from "java.util.List"
import { $Component$$Type } from "net.minecraft.network.chat.Component"

export class $NarrationThunk<T = any> {
static readonly "EMPTY": $NarrationThunk<any>

public static "from"(string0: string): $NarrationThunk<any>
public static "from"(list0: $List$$Type<$Component$$Type>): $NarrationThunk<any>
public static "from"(component0: $Component$$Type): $NarrationThunk<any>
public "getText"(consumer0: $Consumer$$Type<string>): void
}
}

declare module "net.minecraft.client.gui.spectator.SpectatorMenuListener" {
import { $SpectatorMenu$$Type } from "net.minecraft.client.gui.spectator.SpectatorMenu"

export interface $SpectatorMenuListener {
"onSpectatorMenuClosed"(spectatorMenu0: $SpectatorMenu$$Type): void
}

export namespace $SpectatorMenuListener {
const probejs$$marker: never
}
export abstract class $SpectatorMenuListener$$Static implements $SpectatorMenuListener {
}
}

declare module "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner" {
import { $Vector2ic } from "org.joml.Vector2ic"

export interface $ClientTooltipPositioner {
"positionTooltip"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): $Vector2ic
}

export namespace $ClientTooltipPositioner {
const probejs$$marker: never
}
export abstract class $ClientTooltipPositioner$$Static implements $ClientTooltipPositioner {
}
}

declare module "net.minecraft.client.gui.narration.NarratableEntry$NarrationPriority" {
import { $Enum } from "java.lang.Enum"

export class $NarratableEntry$NarrationPriority extends $Enum<$NarratableEntry$NarrationPriority> {
static readonly "FOCUSED": $NarratableEntry$NarrationPriority
static readonly "HOVERED": $NarratableEntry$NarrationPriority
static readonly "NONE": $NarratableEntry$NarrationPriority

public "isTerminal"(): boolean
public static "valueOf"(string0: string): $NarratableEntry$NarrationPriority
public static "values"(): $NarratableEntry$NarrationPriority[]
get "terminal"(): boolean
}
}

declare module "net.minecraft.client.gui.components.ContainerObjectSelectionList$Entry" {
import { $GuiEventListener, $GuiEventListener$$Type } from "net.minecraft.client.gui.components.events.GuiEventListener"
import { $List } from "java.util.List"
import { $NarratableEntry } from "net.minecraft.client.gui.narration.NarratableEntry"
import { $NarrationElementOutput$$Type } from "net.minecraft.client.gui.narration.NarrationElementOutput"
import { $Optional } from "java.util.Optional"
import { $ScreenRectangle } from "net.minecraft.client.gui.navigation.ScreenRectangle"
import { $AbstractSelectionList$Entry } from "net.minecraft.client.gui.components.AbstractSelectionList$Entry"
import { $ComponentPath } from "net.minecraft.client.gui.ComponentPath"
import { $ContainerEventHandler } from "net.minecraft.client.gui.components.events.ContainerEventHandler"
import { $FocusNavigationEvent$$Type } from "net.minecraft.client.gui.navigation.FocusNavigationEvent"

export class $ContainerObjectSelectionList$Entry<E extends $ContainerObjectSelectionList$Entry<E> = $ContainerObjectSelectionList$Entry<E>> extends $AbstractSelectionList$Entry<E> implements $ContainerEventHandler {
constructor()

public "charTyped"(char0: character, int1: integer): boolean
public "children"(): $List<$GuiEventListener>
public "focusPathAtIndex"(focusNavigationEvent0: $FocusNavigationEvent$$Type, int1: integer): $ComponentPath
public "getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
public "getCurrentFocusPath"(): $ComponentPath
public "getFocused"(): $GuiEventListener
public "getRectangle"(): $ScreenRectangle
public "getTabOrderGroup"(): integer
public "isDragging"(): boolean
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "magicalSpecialHackyFocus"(guiEventListener0: $GuiEventListener$$Type): void
public "mouseClicked"(double0: double, double1: double, int2: integer): boolean
public "mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseReleased"(double0: double, double1: double, int2: integer): boolean
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "narratables"(): $List<$NarratableEntry>
public "nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
public "setDragging"(boolean0: boolean): void
public "setFocused"(guiEventListener0: $GuiEventListener$$Type): void
public "updateNarration"(narrationElementOutput0: $NarrationElementOutput$$Type): void
get "currentFocusPath"(): $ComponentPath
get "focused"(): $GuiEventListener
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
get "dragging"(): boolean
set "dragging"(value: boolean)
set "focused"(value: $GuiEventListener$$Type)
}
}

declare module "net.minecraft.client.gui.font.FontManager$Preparation" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $List } from "java.util.List"
import { $GlyphProvider } from "com.mojang.blaze3d.font.GlyphProvider"
import { $Map } from "java.util.Map"
import { $Record } from "java.lang.Record"

export class $FontManager$Preparation extends $Record {
public "allProviders"(): $List<$GlyphProvider>
public "providers"(): $Map<$ResourceLocation, $List<$GlyphProvider>>
}
}

declare module "net.minecraft.client.gui.components.ChatComponent" {
import { $ChatComponentAccessor } from "com.hollingsworth.arsnouveau.common.mixin.ChatComponentAccessor"
import { $GuiMessageTag, $GuiMessageTag$$Type } from "net.minecraft.client.GuiMessageTag"
import { $List } from "java.util.List"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $GuiMessage } from "net.minecraft.client.GuiMessage"
import { $MessageSignature$$Type } from "net.minecraft.network.chat.MessageSignature"
import { $Style } from "net.minecraft.network.chat.Style"

export class $ChatComponent implements $ChatComponentAccessor {
readonly "allMessages": $List<$GuiMessage>

constructor(minecraft0: $Minecraft$$Type)

public "addMessage"(component0: $Component$$Type): void
public "addMessage"(component0: $Component$$Type, messageSignature1: $MessageSignature$$Type, guiMessageTag2: $GuiMessageTag$$Type): void
public "addRecentChat"(string0: string): void
public "clearMessages"(boolean0: boolean): void
public "constant$dnj000$placebo_unEscapeChatLogNewlines"(string0: string): string
public static "defaultUnfocusedPct"(): double
public "deleteMessage"(messageSignature0: $MessageSignature$$Type): void
public "getClickedComponentStyleAt"(double0: double, double1: double): $Style
public static "getHeight"(double0: double): integer
public "getHeight"(): integer
public "getLinesPerPage"(): integer
public "getMessageTagAt"(double0: double, double1: double): $GuiMessageTag
public "getRecentChat"(): $List<string>
public "getScale"(): double
public static "getWidth"(double0: double): integer
public "getWidth"(): integer
public "handleChatQueueClicked"(double0: double, double1: double): boolean
public "refreshTrimmedMessage"(): void
public "render"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, int3: integer): void
public "rescaleChat"(): void
public "resetChatScroll"(): void
public "scrollChat"(int0: integer): void
public "tick"(): void
get "height"(): integer
get "linesPerPage"(): integer
get "recentChat"(): $List<string>
get "scale"(): double
get "width"(): integer
}
}

declare module "net.minecraft.client.gui.components.AbstractButton" {
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $Font$$Type } from "net.minecraft.client.gui.Font"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $AbstractWidget, $AbstractWidget$$Type } from "net.minecraft.client.gui.components.AbstractWidget"
import { $ComponentPath } from "net.minecraft.client.gui.ComponentPath"

export class $AbstractButton extends $AbstractWidget {
constructor(int0: integer, int1: integer, int2: integer, int3: integer, component4: $Component$$Type)

public "charTyped"(char0: character, int1: integer): boolean
public "getCurrentFocusPath"(): $ComponentPath
public "getOriginalMessageFancyMenu"(): $Component
public "handler$epg000$onClickHead"(double0: double, double1: double, callbackInfo2: $CallbackInfo$$Type): void
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "onPress"(): void
public "renderCustomBackgroundFancyMenu"(abstractWidget0: $AbstractWidget$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, int4: integer, int5: integer): boolean
public "renderString"(guiGraphics0: $GuiGraphics$$Type, font1: $Font$$Type, int2: integer): void
public "setPosition"(int0: integer, int1: integer): void
public "stopCustomClickSoundFancyMenu"(): void
public "stopHoverSoundFancyMenu"(): void
public "tickFocusStateListenersFancyMenu"(boolean0: boolean): void
public "tickHoverOrFocusStateListenersFancyMenu"(boolean0: boolean): void
public "tickHoverStateListenersFancyMenu"(boolean0: boolean): void
get "currentFocusPath"(): $ComponentPath
get "originalMessageFancyMenu"(): $Component
}
}

declare module "net.minecraft.client.gui.font.FontManager" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Font } from "net.minecraft.client.gui.Font"
import { $FontManager$Preparation } from "net.minecraft.client.gui.font.FontManager$Preparation"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $ProfilerFiller$$Type } from "net.minecraft.util.profiling.ProfilerFiller"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $TextureManager$$Type } from "net.minecraft.client.renderer.texture.TextureManager"
import { $FontSet, $FontSet$$Type } from "net.minecraft.client.gui.font.FontSet"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import { $AccessorFontManager } from "net.darkhax.bookshelf.mixin.accessors.client.AccessorFontManager"
import { $Map, $Map$$Type } from "java.util.Map"
import { $PreparableReloadListener } from "net.minecraft.server.packs.resources.PreparableReloadListener"

export class $FontManager implements $PreparableReloadListener, $AutoCloseable, $AccessorFontManager {
static readonly "MISSING_FONT": $ResourceLocation

constructor(textureManager0: $TextureManager$$Type)

public "close"(): void
public "createFont"(): $Font
public "createFontFilterFishy"(): $Font
public "getName"(): string
public "prepare"(resourceManager0: $ResourceManager$$Type, executor1: $Executor$$Type): $CompletableFuture<$FontManager$Preparation>
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
public "setRenames"(map0: $Map$$Type<$ResourceLocation$$Type, $ResourceLocation$$Type>): void
get "fontSets"(): $Map<$ResourceLocation, $FontSet>
set "fontSets"(value: $Map$$Type<$ResourceLocation$$Type, $FontSet$$Type>)
get "missingFontSet"(): $FontSet
set "missingFontSet"(value: $FontSet$$Type)
get "name"(): string
set "renames"(value: $Map$$Type<$ResourceLocation$$Type, $ResourceLocation$$Type>)
}
}

declare module "net.minecraft.client.gui.screens.inventory.EffectRenderingInventoryScreen" {
import { $GuiEventListener, $GuiEventListener$$Type } from "net.minecraft.client.gui.components.events.GuiEventListener"
import { $Slot$$Type } from "net.minecraft.world.inventory.Slot"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Optional } from "java.util.Optional"
import { $AbstractContainerScreen } from "net.minecraft.client.gui.screens.inventory.AbstractContainerScreen"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $ComponentPath } from "net.minecraft.client.gui.ComponentPath"
import { $FocusNavigationEvent$$Type } from "net.minecraft.client.gui.navigation.FocusNavigationEvent"

export class $EffectRenderingInventoryScreen<T extends $AbstractContainerMenu = $AbstractContainerMenu> extends $AbstractContainerScreen<T> {
constructor(t0: T, inventory1: $Inventory$$Type, component2: $Component$$Type)

public "adastra$renderPreSlot"(graphics: $GuiGraphics$$Type, slot: $Slot$$Type): void
public "canSeeEffects"(): boolean
public "charTyped"(char0: character, int1: integer): boolean
public "getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
public "getCurrentFocusPath"(): $ComponentPath
public "getTabOrderGroup"(): integer
public "isFocused"(): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "magicalSpecialHackyFocus"(guiEventListener0: $GuiEventListener$$Type): void
public "mouseMoved"(double0: double, double1: double): void
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
public "setFocused"(boolean0: boolean): void
get "currentFocusPath"(): $ComponentPath
get "tabOrderGroup"(): integer
get "focused"(): boolean
set "focused"(value: boolean)
}
}

declare module "net.minecraft.client.gui.screens.Screen" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $AccessScreen } from "com.blamejared.controlling.mixin.AccessScreen"
import { $Font, $Font$$Type } from "net.minecraft.client.gui.Font"
import { $AbstractContainerEventHandler } from "net.minecraft.client.gui.components.events.AbstractContainerEventHandler"
import { $ScreenRectangle } from "net.minecraft.client.gui.navigation.ScreenRectangle"
import { $ScreenDirection$$Type } from "net.minecraft.client.gui.navigation.ScreenDirection"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $NarratableEntry, $NarratableEntry$$Type } from "net.minecraft.client.gui.narration.NarratableEntry"
import { $Minecraft, $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $FocusNavigationEvent$TabNavigation } from "net.minecraft.client.gui.navigation.FocusNavigationEvent$TabNavigation"
import { $ComponentPath } from "net.minecraft.client.gui.ComponentPath"
import { $Path$$Type } from "java.nio.file.Path"
import { $ScreenAccessor } from "dev.tr7zw.trender.gui.impl.mixin.client.ScreenAccessor"
import { $Music } from "net.minecraft.sounds.Music"
import { $ScreenAccessor as $ScreenAccessor$0 } from "com.mrcrayfish.furniture.refurbished.mixin.client.ScreenAccessor"
import { $Tooltip$$Type } from "net.minecraft.client.gui.components.Tooltip"
import { $Screen$DeferredTooltipRendering, $Screen$DeferredTooltipRendering$$Type } from "net.minecraft.client.gui.screens.Screen$DeferredTooltipRendering"
import { $AccessorScreen } from "vazkii.patchouli.mixin.client.AccessorScreen"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $ScreenAccessor as $ScreenAccessor$1 } from "com.aetherteam.aether.mixin.mixins.client.accessor.ScreenAccessor"
import { $FocusNavigationEvent$$Type } from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import { $Style$$Type } from "net.minecraft.network.chat.Style"
import { $GuiEventListener, $GuiEventListener$$Type } from "net.minecraft.client.gui.components.events.GuiEventListener"
import { $List, $List$$Type } from "java.util.List"
import { $Screen$NarratableSearchResult } from "net.minecraft.client.gui.screens.Screen$NarratableSearchResult"
import { $ClientTooltipPositioner$$Type } from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner"
import { $IMixinScreen } from "de.keksuccino.konkrete.mixin.client.IMixinScreen"
import { $CustomizableScreen } from "de.keksuccino.fancymenu.util.rendering.ui.screen.CustomizableScreen"
import { $ScreenAccessor as $ScreenAccessor$2 } from "com.aetherteam.cumulus.mixin.mixins.client.accessor.ScreenAccessor"
import { $Renderable, $Renderable$$Type } from "net.minecraft.client.gui.components.Renderable"
import { $FocusNavigationEvent$ArrowNavigation } from "net.minecraft.client.gui.navigation.FocusNavigationEvent$ArrowNavigation"
import { $IMixinScreen as $IMixinScreen$0 } from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinScreen"
import { $Optional } from "java.util.Optional"
import { $FormattedCharSequence$$Type } from "net.minecraft.util.FormattedCharSequence"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ScreenAccessor as $ScreenAccessor$3 } from "net.blay09.mods.balm.mixin.ScreenAccessor"

export class $Screen extends $AbstractContainerEventHandler implements $Renderable, $ScreenAccessor$3, $ScreenAccessor$2, $ScreenAccessor$1, $AccessScreen, $IMixinScreen, $ScreenAccessor$0, $ScreenAccessor, $AccessorScreen, $IMixinScreen$0, $CustomizableScreen {
static "BACKGROUND_LOCATION": $ResourceLocation
readonly "children": $List<$GuiEventListener>
readonly "narratables": $List<$NarratableEntry>
readonly "renderables": $List<$Renderable>

public "addRenderableOnly"<T extends $Renderable>(t0: T): T
public "addRenderableWidget"<T extends ($GuiEventListener & $Renderable & $NarratableEntry)>(t0: T): T
public "addWidget"<T extends ($GuiEventListener & $NarratableEntry)>(t0: T): T
public "added"(): void
public "afterKeyboardAction"(): void
public "afterMouseAction"(): void
public "afterMouseMove"(): void
public "charTyped"(char0: character, int1: integer): boolean
public "children"(): $List<$GuiEventListener>
public "createArrowEvent"(screenDirection0: $ScreenDirection$$Type): $FocusNavigationEvent$ArrowNavigation
public "createTabEvent"(): $FocusNavigationEvent$TabNavigation
public static "findNarratableWidget"(list0: $List$$Type<$NarratableEntry$$Type>, narratableEntry1: $NarratableEntry$$Type): $Screen$NarratableSearchResult
public "getBackgroundMusic"(): $Music
public "getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
public "getCurrentFocusPath"(): $ComponentPath
public "getMinecraft"(): $Minecraft
public "getNarrationMessage"(): $Component
public "getRectangle"(): $ScreenRectangle
public "getTabOrderGroup"(): integer
public "getTitle"(): $Component
public static "getTooltipFromItem"(minecraft0: $Minecraft$$Type, itemStack1: $ItemStack$$Type): $List<$Component>
public "handleComponentClicked"(style0: $Style$$Type): boolean
public "handleDelayedNarration"(): void
public "handler$chf000$afterRender"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float, callbackInfo4: $CallbackInfo$$Type): void
public "handler$dpm001$render"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float, callbackInfo4: $CallbackInfo$$Type): void
public "handler$dpm006$tick"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$eik000$onWidgetAdded"(widget: $GuiEventListener$$Type, cir: $CallbackInfoReturnable$$Type): void
public "handler$ijb000$create$xaeroPauseScreenOverride"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public static "hasAltDown"(): boolean
public static "hasControlDown"(): boolean
public static "hasShiftDown"(): boolean
public "init"(minecraft0: $Minecraft$$Type, int1: integer, int2: integer): void
public static "isCopy"(int0: integer): boolean
public static "isCut"(int0: integer): boolean
public "isFocused"(): boolean
public "isMouseOver"(double0: double, double1: double): boolean
public static "isPaste"(int0: integer): boolean
public "isPauseScreen"(): boolean
public static "isSelectAll"(int0: integer): boolean
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "magicalSpecialHackyFocus"(guiEventListener0: $GuiEventListener$$Type): void
public "mouseClicked"(double0: double, double1: double, int2: integer): boolean
public "mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseReleased"(double0: double, double1: double, int2: integer): boolean
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "narrationEnabled"(): void
public "nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
public "onClose"(): void
public "onFilesDrop"(list0: $List$$Type<$Path$$Type>): void
public "removeOnInitChildrenFancyMenu"(): $List
public "removeWidget"(guiEventListener0: $GuiEventListener$$Type): void
public "removed"(): void
public "render"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float): void
public "renderBackground"(guiGraphics0: $GuiGraphics$$Type): void
public "renderDirtBackground"(guiGraphics0: $GuiGraphics$$Type): void
public "renderWithTooltip"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float): void
public "resize"(minecraft0: $Minecraft$$Type, int1: integer, int2: integer): void
public "setFocused"(boolean0: boolean): void
public "setInitialFocus"(guiEventListener0: $GuiEventListener$$Type): void
public "setTooltipForNextRenderPass"(list0: $List$$Type<$FormattedCharSequence$$Type>): void
public "setTooltipForNextRenderPass"(list0: $List$$Type<$FormattedCharSequence$$Type>, clientTooltipPositioner1: $ClientTooltipPositioner$$Type, boolean2: boolean): void
public "setTooltipForNextRenderPass"(tooltip0: $Tooltip$$Type, clientTooltipPositioner1: $ClientTooltipPositioner$$Type, boolean2: boolean): void
public "shouldCloseOnEsc"(): boolean
public "tick"(): void
public "triggerImmediateNarration"(boolean0: boolean): void
public static "wrapScreenError"(runnable0: $Runnable$$Type, string1: string, string2: string): void
get "deferredTooltipRendering"(): $Screen$DeferredTooltipRendering
set "deferredTooltipRendering"(value: $Screen$DeferredTooltipRendering$$Type)
get "font"(): $Font
set "font"(value: $Font$$Type)
get "height"(): integer
set "height"(value: integer)
get "minecraft"(): $Minecraft
set "minecraft"(value: $Minecraft$$Type)
get "title"(): $Component
set "title"(value: $Component$$Type)
get "width"(): integer
set "width"(value: integer)
get "backgroundMusic"(): $Music
get "currentFocusPath"(): $ComponentPath
get "narrationMessage"(): $Component
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
get "focused"(): boolean
get "pauseScreen"(): boolean
set "focused"(value: boolean)
set "initialFocus"(value: $GuiEventListener$$Type)
set "tooltipForNextRenderPass"(value: $List$$Type<$FormattedCharSequence$$Type>)
}
}

declare module "net.minecraft.client.gui.Font$DisplayMode" {
import { $Enum } from "java.lang.Enum"

export class $Font$DisplayMode extends $Enum<$Font$DisplayMode> {
static readonly "NORMAL": $Font$DisplayMode
static readonly "POLYGON_OFFSET": $Font$DisplayMode
static readonly "SEE_THROUGH": $Font$DisplayMode

public static "valueOf"(string0: string): $Font$DisplayMode
public static "values"(): $Font$DisplayMode[]
}
}

declare module "net.minecraft.client.gui.spectator.SpectatorMenuCategory" {
import { $SpectatorMenuItem } from "net.minecraft.client.gui.spectator.SpectatorMenuItem"
import { $List } from "java.util.List"
import { $Component } from "net.minecraft.network.chat.Component"

export interface $SpectatorMenuCategory {
"getItems"(): $List<$SpectatorMenuItem>
"getPrompt"(): $Component
get "items"(): $List<$SpectatorMenuItem>
get "prompt"(): $Component
}

export namespace $SpectatorMenuCategory {
const probejs$$marker: never
}
export abstract class $SpectatorMenuCategory$$Static implements $SpectatorMenuCategory {
}
}

declare module "net.minecraft.client.gui.components.EditBox" {
import { $Font, $Font$$Type } from "net.minecraft.client.gui.Font"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $IMixinEditBox } from "de.keksuccino.konkrete.mixin.client.IMixinEditBox"
import { $NarrationElementOutput$$Type } from "net.minecraft.client.gui.narration.NarrationElementOutput"
import { $EditBoxMixin } from "com.almostreliable.merequester.mixin.accessors.EditBoxMixin"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $BiFunction, $BiFunction$$Type } from "java.util.function.BiFunction"
import { $IMixinEditBox as $IMixinEditBox$0 } from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinEditBox"
import { $AccessEditBox } from "com.blamejared.searchables.mixin.AccessEditBox"
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $Renderable } from "net.minecraft.client.gui.components.Renderable"
import { $FormattedCharSequence, $FormattedCharSequence$$Type } from "net.minecraft.util.FormattedCharSequence"
import { $AbstractWidget, $AbstractWidget$$Type } from "net.minecraft.client.gui.components.AbstractWidget"
import { $ComponentPath } from "net.minecraft.client.gui.ComponentPath"

export class $EditBox extends $AbstractWidget implements $Renderable, $AccessEditBox, $IMixinEditBox, $EditBoxMixin, $IMixinEditBox$0 {
static readonly "BACKGROUND_COLOR": integer
static readonly "BACKWARDS": integer
static readonly "BORDER_COLOR": integer
static readonly "BORDER_COLOR_FOCUSED": integer
static readonly "CURSOR_APPEND_CHARACTER": string
static readonly "CURSOR_INSERT_COLOR": integer
static readonly "CURSOR_INSERT_WIDTH": integer
static readonly "DEFAULT_TEXT_COLOR": integer
static readonly "FORWARDS": integer
readonly "font": $Font
"isEditable": boolean

constructor(font0: $Font$$Type, int1: integer, int2: integer, int3: integer, int4: integer, editBox5: $EditBox$$Type, component6: $Component$$Type)
constructor(font0: $Font$$Type, int1: integer, int2: integer, int3: integer, int4: integer, component5: $Component$$Type)

public "canConsumeInput"(): boolean
public "charTyped"(char0: character, int1: integer): boolean
public "deleteChars"(int0: integer): void
public "deleteText"(int0: integer): void
public "deleteWords"(int0: integer): void
public "getCurrentFocusPath"(): $ComponentPath
public "getCursorPosition"(): integer
public "getHighlighted"(): string
public "getInnerWidth"(): integer
public "getMaxLength"(): integer
public "getOriginalMessageFancyMenu"(): $Component
public "getScreenX"(int0: integer): integer
public "getValue"(): string
public "getWordPosition"(int0: integer): integer
public "insertText"(string0: string): void
public "isBordered"(): boolean
public "isEditable"(): boolean
public "isVisible"(): boolean
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "moveCursor"(int0: integer): void
public "moveCursorTo"(int0: integer): void
public "moveCursorToEnd"(): void
public "moveCursorToStart"(): void
public "render"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float): void
public "renderCustomBackgroundFancyMenu"(abstractWidget0: $AbstractWidget$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, int4: integer, int5: integer): boolean
public "renderHighlight"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, int3: integer, int4: integer): void
public "renderWidget"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float): void
public "setBordered"(boolean0: boolean): void
public "setCanLoseFocus"(boolean0: boolean): void
public "setCursorPosition"(int0: integer): void
public "setEditable"(boolean0: boolean): void
public "setFilter"(predicate0: $Predicate$$Type<string>): void
public "setFormatter"(biFunction0: $BiFunction$$Type<string, integer, $FormattedCharSequence>): void
public "setHighlightPos"(int0: integer): void
public "setHint"(component0: $Component$$Type): void
public "setMaxLength"(int0: integer): void
public "setPosition"(int0: integer, int1: integer): void
public "setResponder"(consumer0: $Consumer$$Type<string>): void
public "setSuggestion"(string0: string): void
public "setTextColor"(int0: integer): void
public "setTextColorUneditable"(int0: integer): void
public "setValue"(string0: string): void
public "setVisible"(boolean0: boolean): void
public "stopCustomClickSoundFancyMenu"(): void
public "stopHoverSoundFancyMenu"(): void
public "tick"(): void
public "tickFocusStateListenersFancyMenu"(boolean0: boolean): void
public "tickHoverOrFocusStateListenersFancyMenu"(boolean0: boolean): void
public "tickHoverStateListenersFancyMenu"(boolean0: boolean): void
public "updateWidgetNarration"(narrationElementOutput0: $NarrationElementOutput$$Type): void
get "bordered"(): boolean
set "bordered"(value: boolean)
get "canLoseFocus"(): boolean
set "canLoseFocus"(value: boolean)
get "cursorPos"(): integer
set "cursorPos"(value: integer)
get "displayPos"(): integer
set "displayPos"(value: integer)
get "filter"(): $Predicate<string>
set "filter"(value: $Predicate$$Type<string>)
get "formatter"(): $BiFunction<string, integer, $FormattedCharSequence>
set "formatter"(value: $BiFunction$$Type<string, integer, $FormattedCharSequence$$Type>)
get "frame"(): integer
set "frame"(value: integer)
get "highlightPos"(): integer
set "highlightPos"(value: integer)
get "hint"(): $Component
set "hint"(value: $Component$$Type)
get "maxLength"(): integer
set "maxLength"(value: integer)
get "responder"(): $Consumer<string>
set "responder"(value: $Consumer$$Type<string>)
get "shiftPressed"(): boolean
set "shiftPressed"(value: boolean)
get "suggestion"(): string
set "suggestion"(value: string)
get "textColor"(): integer
set "textColor"(value: integer)
get "textColorUneditable"(): integer
set "textColorUneditable"(value: integer)
get "value"(): string
set "value"(value: string)
get "currentFocusPath"(): $ComponentPath
get "cursorPosition"(): integer
get "highlighted"(): string
get "innerWidth"(): integer
get "originalMessageFancyMenu"(): $Component
get "editable"(): boolean
get "visible"(): boolean
set "cursorPosition"(value: integer)
set "editable"(value: boolean)
set "visible"(value: boolean)
}
}

declare module "net.minecraft.client.gui.components.toasts.ToastComponent" {
import { $List } from "java.util.List"
import { $ToastComponent$ToastInstance } from "net.minecraft.client.gui.components.toasts.ToastComponent$ToastInstance"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Minecraft, $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $Toast, $Toast$$Type } from "net.minecraft.client.gui.components.toasts.Toast"
import { $Class$$Type } from "java.lang.Class"
import { $Deque } from "java.util.Deque"

export class $ToastComponent {
readonly "queued": $Deque<$Toast>
readonly "visible": $List<$ToastComponent$ToastInstance<any>>

constructor(minecraft0: $Minecraft$$Type)

public "addToast"(toast0: $Toast$$Type): void
public "clear"(): void
public "getMinecraft"(): $Minecraft
public "getNotificationDisplayTimeMultiplier"(): double
public "getToast"<T extends $Toast>(class0: $Class$$Type<T>, object1: any): T
public "render"(guiGraphics0: $GuiGraphics$$Type): void
get "minecraft"(): $Minecraft
get "notificationDisplayTimeMultiplier"(): double
}
}

declare module "net.minecraft.client.gui.narration.NarratableEntry" {
import { $NarrationSupplier } from "net.minecraft.client.gui.narration.NarrationSupplier"
import { $NarrationElementOutput$$Type } from "net.minecraft.client.gui.narration.NarrationElementOutput"
import { $NarratableEntry$NarrationPriority } from "net.minecraft.client.gui.narration.NarratableEntry$NarrationPriority"
import { $TabOrderedElement } from "net.minecraft.client.gui.components.TabOrderedElement"

export interface $NarratableEntry extends $TabOrderedElement, $NarrationSupplier {
"getTabOrderGroup"(): integer
"isActive"(): boolean
"narrationPriority"(): $NarratableEntry$NarrationPriority
"updateNarration"(narrationElementOutput0: $NarrationElementOutput$$Type): void
get "tabOrderGroup"(): integer
get "active"(): boolean
}

export namespace $NarratableEntry {
const probejs$$marker: never
}
export abstract class $NarratableEntry$$Static implements $NarratableEntry {
}
}

declare module "net.minecraft.client.gui.ComponentPath" {
import { $GuiEventListener, $GuiEventListener$$Type } from "net.minecraft.client.gui.components.events.GuiEventListener"
import { $ContainerEventHandler$$Type } from "net.minecraft.client.gui.components.events.ContainerEventHandler"

export interface $ComponentPath {
"applyFocus"(boolean0: boolean): void
"component"(): $GuiEventListener
}

export namespace $ComponentPath {
function leaf(guiEventListener0: $GuiEventListener$$Type): $ComponentPath
function path(guiEventListener0: $GuiEventListener$$Type, ...containerEventHandler1s: $ContainerEventHandler$$Type[]): $ComponentPath
function path(containerEventHandler0: $ContainerEventHandler$$Type, componentPath1: $ComponentPath$$Type): $ComponentPath
}
export abstract class $ComponentPath$$Static implements $ComponentPath {
static "leaf"(guiEventListener0: $GuiEventListener$$Type): $ComponentPath
static "path"(guiEventListener0: $GuiEventListener$$Type, ...containerEventHandler1s: $ContainerEventHandler$$Type[]): $ComponentPath
static "path"(containerEventHandler0: $ContainerEventHandler$$Type, componentPath1: $ComponentPath$$Type): $ComponentPath
}
}

declare module "net.minecraft.client.gui.screens.controls.KeyBindsList$Entry" {
import { $GuiEventListener, $GuiEventListener$$Type } from "net.minecraft.client.gui.components.events.GuiEventListener"
import { $List } from "java.util.List"
import { $Optional } from "java.util.Optional"
import { $ScreenRectangle } from "net.minecraft.client.gui.navigation.ScreenRectangle"
import { $ComponentPath } from "net.minecraft.client.gui.ComponentPath"
import { $ContainerObjectSelectionList$Entry } from "net.minecraft.client.gui.components.ContainerObjectSelectionList$Entry"

export class $KeyBindsList$Entry extends $ContainerObjectSelectionList$Entry<$KeyBindsList$Entry> {
constructor()

public "charTyped"(char0: character, int1: integer): boolean
public "children"(): $List<$GuiEventListener>
public "getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
public "getCurrentFocusPath"(): $ComponentPath
public "getRectangle"(): $ScreenRectangle
public "getTabOrderGroup"(): integer
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "magicalSpecialHackyFocus"(guiEventListener0: $GuiEventListener$$Type): void
public "mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseReleased"(double0: double, double1: double, int2: integer): boolean
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
get "currentFocusPath"(): $ComponentPath
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
}
}

declare module "net.minecraft.client.gui.spectator.SpectatorMenuItem" {
import { $SpectatorMenu$$Type } from "net.minecraft.client.gui.spectator.SpectatorMenu"
import { $Component } from "net.minecraft.network.chat.Component"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"

export interface $SpectatorMenuItem {
"getName"(): $Component
"isEnabled"(): boolean
"renderIcon"(guiGraphics0: $GuiGraphics$$Type, float1: float, int2: integer): void
"selectItem"(spectatorMenu0: $SpectatorMenu$$Type): void
get "name"(): $Component
get "enabled"(): boolean
}

export namespace $SpectatorMenuItem {
const probejs$$marker: never
}
export abstract class $SpectatorMenuItem$$Static implements $SpectatorMenuItem {
}
}

declare module "net.minecraft.client.gui.components.BossHealthOverlay" {
import { $BossHealthOverlayAccessor } from "com.aetherteam.aether.mixin.mixins.client.accessor.BossHealthOverlayAccessor"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $ClientboundBossEventPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBossEventPacket"
import { $IMixinBossHealthOverlay } from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinBossHealthOverlay"

export class $BossHealthOverlay implements $BossHealthOverlayAccessor, $IMixinBossHealthOverlay {
constructor(minecraft0: $Minecraft$$Type)

public "render"(guiGraphics0: $GuiGraphics$$Type): void
public "reset"(): void
public "shouldCreateWorldFog"(): boolean
public "shouldDarkenScreen"(): boolean
public "shouldPlayMusic"(): boolean
public "update"(clientboundBossEventPacket0: $ClientboundBossEventPacket$$Type): void
}
}

declare module "net.minecraft.client.gui.components.SplashRenderer" {
import { $Font$$Type } from "net.minecraft.client.gui.Font"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $SplashRendererAccessor } from "com.aetherteam.cumulus.mixin.mixins.client.accessor.SplashRendererAccessor"
import { $IMixinSplashRenderer } from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinSplashRenderer"

export class $SplashRenderer implements $SplashRendererAccessor, $IMixinSplashRenderer {
static readonly "CHRISTMAS": $SplashRenderer
static readonly "HALLOWEEN": $SplashRenderer
static readonly "NEW_YEAR": $SplashRenderer

constructor(string0: string)

public "render"(guiGraphics0: $GuiGraphics$$Type, int1: integer, font2: $Font$$Type, int3: integer): void
}
}

declare module "net.minecraft.client.gui.spectator.SpectatorMenu" {
import { $SpectatorMenuItem } from "net.minecraft.client.gui.spectator.SpectatorMenuItem"
import { $List } from "java.util.List"
import { $SpectatorPage } from "net.minecraft.client.gui.spectator.categories.SpectatorPage"
import { $SpectatorMenuListener$$Type } from "net.minecraft.client.gui.spectator.SpectatorMenuListener"
import { $SpectatorMenuCategory, $SpectatorMenuCategory$$Type } from "net.minecraft.client.gui.spectator.SpectatorMenuCategory"

export class $SpectatorMenu {
static readonly "EMPTY_SLOT": $SpectatorMenuItem

constructor(spectatorMenuListener0: $SpectatorMenuListener$$Type)

public "exit"(): void
public "getCurrentPage"(): $SpectatorPage
public "getItem"(int0: integer): $SpectatorMenuItem
public "getItems"(): $List<$SpectatorMenuItem>
public "getSelectedCategory"(): $SpectatorMenuCategory
public "getSelectedItem"(): $SpectatorMenuItem
public "getSelectedSlot"(): integer
public "selectCategory"(spectatorMenuCategory0: $SpectatorMenuCategory$$Type): void
public "selectSlot"(int0: integer): void
get "currentPage"(): $SpectatorPage
get "items"(): $List<$SpectatorMenuItem>
get "selectedCategory"(): $SpectatorMenuCategory
get "selectedItem"(): $SpectatorMenuItem
get "selectedSlot"(): integer
}
}

declare module "net.minecraft.client.gui.components.events.AbstractContainerEventHandler" {
import { $GuiEventListener, $GuiEventListener$$Type } from "net.minecraft.client.gui.components.events.GuiEventListener"
import { $List } from "java.util.List"
import { $Optional } from "java.util.Optional"
import { $ScreenRectangle } from "net.minecraft.client.gui.navigation.ScreenRectangle"
import { $ComponentPath } from "net.minecraft.client.gui.ComponentPath"
import { $ContainerEventHandler } from "net.minecraft.client.gui.components.events.ContainerEventHandler"
import { $FocusNavigationEvent$$Type } from "net.minecraft.client.gui.navigation.FocusNavigationEvent"

export class $AbstractContainerEventHandler implements $ContainerEventHandler {
constructor()

public "charTyped"(char0: character, int1: integer): boolean
public "children"(): $List<$GuiEventListener>
public "getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
public "getCurrentFocusPath"(): $ComponentPath
public "getFocused"(): $GuiEventListener
public "getRectangle"(): $ScreenRectangle
public "getTabOrderGroup"(): integer
public "isDragging"(): boolean
public "isFocused"(): boolean
public "isMouseOver"(double0: double, double1: double): boolean
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "magicalSpecialHackyFocus"(guiEventListener0: $GuiEventListener$$Type): void
public "mouseClicked"(double0: double, double1: double, int2: integer): boolean
public "mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseReleased"(double0: double, double1: double, int2: integer): boolean
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
public "setDragging"(boolean0: boolean): void
public "setFocused"(guiEventListener0: $GuiEventListener$$Type): void
public "setFocused"(boolean0: boolean): void
get "currentFocusPath"(): $ComponentPath
get "focused"(): $GuiEventListener
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
get "dragging"(): boolean
get "focused"(): boolean
set "dragging"(value: boolean)
set "focused"(value: $GuiEventListener$$Type)
set "focused"(value: boolean)
}
}

declare module "net.minecraft.client.gui.font.GlyphRenderTypes" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $Record } from "java.lang.Record"
import { $Font$DisplayMode$$Type } from "net.minecraft.client.gui.Font$DisplayMode"

export class $GlyphRenderTypes extends $Record {
constructor(renderType0: $RenderType$$Type, renderType1: $RenderType$$Type, renderType2: $RenderType$$Type)

public static "createForColorTexture"(resourceLocation0: $ResourceLocation$$Type): $GlyphRenderTypes
public static "createForIntensityTexture"(resourceLocation0: $ResourceLocation$$Type): $GlyphRenderTypes
public "normal"(): $RenderType
public "polygonOffset"(): $RenderType
public "seeThrough"(): $RenderType
public "select"(displayMode0: $Font$DisplayMode$$Type): $RenderType
}
}

declare module "net.minecraft.client.gui.components.LerpingBossEvent" {
import { $BossEvent$BossBarOverlay$$Type } from "net.minecraft.world.BossEvent$BossBarOverlay"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $BossEvent$BossBarColor$$Type } from "net.minecraft.world.BossEvent$BossBarColor"
import { $UUID$$Type } from "java.util.UUID"
import { $BossEvent } from "net.minecraft.world.BossEvent"

export class $LerpingBossEvent extends $BossEvent {
constructor(uUID0: $UUID$$Type, component1: $Component$$Type, float2: float, bossBarColor3: $BossEvent$BossBarColor$$Type, bossBarOverlay4: $BossEvent$BossBarOverlay$$Type, boolean5: boolean, boolean6: boolean, boolean7: boolean)

}
}

declare module "net.minecraft.client.gui.screens.recipebook.RecipeCollection" {
import { $List, $List$$Type } from "java.util.List"
import { $Recipe, $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $StackedContents$$Type } from "net.minecraft.world.entity.player.StackedContents"
import { $RegistryAccess, $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $RecipeBook$$Type } from "net.minecraft.stats.RecipeBook"

export class $RecipeCollection {
constructor(registryAccess0: $RegistryAccess$$Type, list1: $List$$Type<$Recipe$$Type<any>>)

public "canCraft"(stackedContents0: $StackedContents$$Type, int1: integer, int2: integer, recipeBook3: $RecipeBook$$Type): void
public "getDisplayRecipes"(boolean0: boolean): $List<$Recipe<any>>
public "getRecipes"(boolean0: boolean): $List<$Recipe<any>>
public "getRecipes"(): $List<$Recipe<any>>
public "hasCraftable"(): boolean
public "hasFitting"(): boolean
public "hasKnownRecipes"(): boolean
public "hasSingleResultItem"(): boolean
public "isCraftable"(recipe0: $Recipe$$Type<any>): boolean
public "registryAccess"(): $RegistryAccess
public "updateKnownRecipes"(recipeBook0: $RecipeBook$$Type): void
get "recipes"(): $List<$Recipe<any>>
}
}

declare module "net.minecraft.client.gui.components.Button" {
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $NarrationElementOutput$$Type } from "net.minecraft.client.gui.narration.NarrationElementOutput"
import { $Button$Builder } from "net.minecraft.client.gui.components.Button$Builder"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $IMixinButton } from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinButton"
import { $AbstractButton } from "net.minecraft.client.gui.components.AbstractButton"
import { $ButtonAccessor } from "net.mehvahdjukaar.moonlight.core.mixins.forge.ButtonAccessor"
import { $AbstractWidget$$Type } from "net.minecraft.client.gui.components.AbstractWidget"
import { $ComponentPath } from "net.minecraft.client.gui.ComponentPath"
import { $Button$OnPress, $Button$OnPress$$Type } from "net.minecraft.client.gui.components.Button$OnPress"
import { $ButtonAccessor as $ButtonAccessor$0 } from "com.aetherteam.aether.mixin.mixins.client.accessor.ButtonAccessor"

export class $Button extends $AbstractButton implements $ButtonAccessor$0, $ButtonAccessor, $IMixinButton {
static readonly "DEFAULT_HEIGHT": integer
static readonly "DEFAULT_WIDTH": integer
static readonly "SMALL_WIDTH": integer

public static "builder"(component0: $Component$$Type, onPress1: $Button$OnPress$$Type): $Button$Builder
public "charTyped"(char0: character, int1: integer): boolean
public "getCurrentFocusPath"(): $ComponentPath
public "getOriginalMessageFancyMenu"(): $Component
public "handler$eii000$onPress"(ci: $CallbackInfo$$Type): void
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "renderCustomBackgroundFancyMenu"(abstractWidget0: $AbstractWidget$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, int4: integer, int5: integer): boolean
public "setPosition"(int0: integer, int1: integer): void
public "stopCustomClickSoundFancyMenu"(): void
public "stopHoverSoundFancyMenu"(): void
public "tickFocusStateListenersFancyMenu"(boolean0: boolean): void
public "tickHoverOrFocusStateListenersFancyMenu"(boolean0: boolean): void
public "tickHoverStateListenersFancyMenu"(boolean0: boolean): void
public "updateWidgetNarration"(narrationElementOutput0: $NarrationElementOutput$$Type): void
get "onPress"(): $Button$OnPress
set "onPress"(value: $Button$OnPress$$Type)
get "currentFocusPath"(): $ComponentPath
get "originalMessageFancyMenu"(): $Component
}
}

declare module "net.minecraft.client.gui.navigation.FocusNavigationEvent$ArrowNavigation" {
import { $Record } from "java.lang.Record"
import { $ScreenDirection, $ScreenDirection$$Type } from "net.minecraft.client.gui.navigation.ScreenDirection"
import { $FocusNavigationEvent } from "net.minecraft.client.gui.navigation.FocusNavigationEvent"

export class $FocusNavigationEvent$ArrowNavigation extends $Record implements $FocusNavigationEvent {
constructor(screenDirection0: $ScreenDirection$$Type)

public "direction"(): $ScreenDirection
public "getVerticalDirectionForInitialFocus"(): $ScreenDirection
get "verticalDirectionForInitialFocus"(): $ScreenDirection
}
}

declare module "net.minecraft.client.gui.screens.worldselection.WorldOpenFlows" {
import { $WorldData$$Type } from "net.minecraft.world.level.storage.WorldData"
import { $CreateWorldScreen$$Type } from "net.minecraft.client.gui.screens.worldselection.CreateWorldScreen"
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $WorldCreationContext } from "net.minecraft.client.gui.screens.worldselection.WorldCreationContext"
import { $Lifecycle$$Type } from "com.mojang.serialization.Lifecycle"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $Function$$Type } from "java.util.function.Function"
import { $Pair } from "com.mojang.datafixers.util.Pair"
import { $LevelSettings, $LevelSettings$$Type } from "net.minecraft.world.level.LevelSettings"
import { $WorldOptions$$Type } from "net.minecraft.world.level.levelgen.WorldOptions"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $LayeredRegistryAccess$$Type } from "net.minecraft.core.LayeredRegistryAccess"
import { $ReloadableServerResources$$Type } from "net.minecraft.server.ReloadableServerResources"
import { $RegistryLayer$$Type } from "net.minecraft.server.RegistryLayer"
import { $LevelStorageSource$$Type } from "net.minecraft.world.level.storage.LevelStorageSource"
import { $WorldDimensions } from "net.minecraft.world.level.levelgen.WorldDimensions"
import { $LevelStorageSource$LevelStorageAccess$$Type } from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import { $WorldStem } from "net.minecraft.server.WorldStem"

export class $WorldOpenFlows {
constructor(minecraft0: $Minecraft$$Type, levelStorageSource1: $LevelStorageSource$$Type)

public static "confirmWorldCreation"(minecraft0: $Minecraft$$Type, createWorldScreen1: $CreateWorldScreen$$Type, lifecycle2: $Lifecycle$$Type, runnable3: $Runnable$$Type, boolean4: boolean): void
public "createFreshLevel"(string0: string, levelSettings1: $LevelSettings$$Type, worldOptions2: $WorldOptions$$Type, function3: $Function$$Type<$RegistryAccess$$Type, $WorldDimensions>): void
public "createLevelFromExistingSettings"(levelStorageAccess0: $LevelStorageSource$LevelStorageAccess$$Type, reloadableServerResources1: $ReloadableServerResources$$Type, layeredRegistryAccess2: $LayeredRegistryAccess$$Type<$RegistryLayer$$Type>, worldData3: $WorldData$$Type): void
public "loadLevel"(screen0: $Screen$$Type, string1: string): void
public "loadWorldStem"(levelStorageAccess0: $LevelStorageSource$LevelStorageAccess$$Type, boolean1: boolean): $WorldStem
public "recreateWorldData"(levelStorageAccess0: $LevelStorageSource$LevelStorageAccess$$Type): $Pair<$LevelSettings, $WorldCreationContext>
}
}

declare module "net.minecraft.client.gui.Gui" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Objective$$Type } from "net.minecraft.world.scores.Objective"
import { $Font } from "net.minecraft.client.gui.Font"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $ChatComponent } from "net.minecraft.client.gui.components.ChatComponent"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PlayerRideableJumping$$Type } from "net.minecraft.world.entity.PlayerRideableJumping"
import { $ItemRenderer$$Type } from "net.minecraft.client.renderer.entity.ItemRenderer"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $PlayerTabOverlay } from "net.minecraft.client.gui.components.PlayerTabOverlay"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $GuiAccessor } from "com.aetherteam.aether.mixin.mixins.client.accessor.GuiAccessor"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Minecraft, $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $BossHealthOverlay } from "net.minecraft.client.gui.components.BossHealthOverlay"
import { $GuiAccessor as $GuiAccessor$0 } from "com.simibubi.create.foundation.mixin.accessor.GuiAccessor"
import { $IMixinGui } from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinGui"
import { $SpectatorGui } from "net.minecraft.client.gui.components.spectator.SpectatorGui"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $GuiAccessor as $GuiAccessor$1 } from "gg.moonflower.etched.core.mixin.client.GuiAccessor"

export class $Gui implements $GuiAccessor$1, $GuiAccessor, $IMixinGui, $GuiAccessor$0 {
static readonly "GUI_ICONS_LOCATION": $ResourceLocation
readonly "minecraft": $Minecraft

constructor(minecraft0: $Minecraft$$Type, itemRenderer1: $ItemRenderer$$Type)

public "clear"(): void
public "clearCache"(): void
public "displayScoreboardSidebar"(guiGraphics0: $GuiGraphics$$Type, objective1: $Objective$$Type): void
public "getBossOverlay"(): $BossHealthOverlay
public "getChat"(): $ChatComponent
public "getFont"(): $Font
public "getGuiTicks"(): integer
public "getSpectatorGui"(): $SpectatorGui
public "getTabList"(): $PlayerTabOverlay
public "handler$cac000$setNowPlaying"(displayName: $Component$$Type, ci: $CallbackInfo$$Type): void
public "handler$fdi000$renderSlot"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float, player4: $Player$$Type, itemStack5: $ItemStack$$Type, int6: integer, callbackInfo7: $CallbackInfo$$Type): void
public "handler$foh000$onRenderEffectsEnter"(guiGraphics: $GuiGraphics$$Type, info: $CallbackInfo$$Type): void
public "handler$foh000$onRenderEffectsReturn"(guiGraphics: $GuiGraphics$$Type, info: $CallbackInfo$$Type): void
public "handler$hah000$changeArmorItem"(guiGraphics0: $GuiGraphics$$Type, resourceLocation1: $ResourceLocation$$Type, float2: float, callbackInfo3: $CallbackInfo$$Type): void
public "handler$hke000$irons_spellbooks$disableJumpBar"(playerRideableJumping0: $PlayerRideableJumping$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, callbackInfo3: $CallbackInfo$$Type): void
public "handler$hke000$irons_spellbooks$disableXpBar"(guiGraphics0: $GuiGraphics$$Type, int1: integer, callbackInfo2: $CallbackInfo$$Type): void
public "isShowingChatDisabledByPlayer"(): boolean
public "onDisconnected"(): void
public "render"(guiGraphics0: $GuiGraphics$$Type, float1: float): void
public "renderCrosshair"(guiGraphics0: $GuiGraphics$$Type): void
public "renderDemoOverlay"(guiGraphics0: $GuiGraphics$$Type): void
public "renderEffects"(guiGraphics0: $GuiGraphics$$Type): void
public "renderExperienceBar"(guiGraphics0: $GuiGraphics$$Type, int1: integer): void
public "renderHotbar"(float0: float, guiGraphics1: $GuiGraphics$$Type): void
public "renderJumpMeter"(playerRideableJumping0: $PlayerRideableJumping$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer): void
public "renderSelectedItemName"(guiGraphics0: $GuiGraphics$$Type): void
public "renderSelectedItemName"(guiGraphics0: $GuiGraphics$$Type, int1: integer): void
public "renderSpyglassOverlay"(guiGraphics0: $GuiGraphics$$Type, float1: float): void
public "renderVignette"(guiGraphics0: $GuiGraphics$$Type, entity1: $Entity$$Type): void
public "resetTitleTimes"(): void
public "setChatDisabledByPlayerShown"(boolean0: boolean): void
public "setNowPlaying"(component0: $Component$$Type): void
public "setOverlayMessage"(component0: $Component$$Type, boolean1: boolean): void
public "setSubtitle"(component0: $Component$$Type): void
public "setTimes"(int0: integer, int1: integer, int2: integer): void
public "setTitle"(component0: $Component$$Type): void
public "tick"(boolean0: boolean): void
get "screenHeight"(): integer
set "screenHeight"(value: integer)
get "screenWidth"(): integer
set "screenWidth"(value: integer)
get "toolHighlightTimer"(): integer
set "toolHighlightTimer"(value: integer)
get "vignetteBrightness"(): float
set "vignetteBrightness"(value: float)
get "bossOverlay"(): $BossHealthOverlay
get "chat"(): $ChatComponent
get "font"(): $Font
get "guiTicks"(): integer
get "spectatorGui"(): $SpectatorGui
get "tabList"(): $PlayerTabOverlay
get "showingChatDisabledByPlayer"(): boolean
set "chatDisabledByPlayerShown"(value: boolean)
set "nowPlaying"(value: $Component$$Type)
set "subtitle"(value: $Component$$Type)
set "title"(value: $Component$$Type)
}
}

declare module "net.minecraft.client.gui.screens.inventory.AbstractContainerScreen" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $AbstractContainerScreenAccessor } from "yalter.mousetweaks.mixin.AbstractContainerScreenAccessor"
import { $AbstractContainerScreenAccessor as $AbstractContainerScreenAccessor$0 } from "vazkii.botania.mixin.client.AbstractContainerScreenAccessor"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $InternalCursorProvider } from "io.github.fishstiz.minecraftcursor.cursor.handler.InternalCursorProvider"
import { $ComponentPath } from "net.minecraft.client.gui.ComponentPath"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $ClickType$$Type } from "net.minecraft.world.inventory.ClickType"
import { $Screen } from "net.minecraft.client.gui.screens.Screen"
import { $CursorType } from "io.github.fishstiz.minecraftcursor.api.CursorType"
import { $MenuAccess } from "net.minecraft.client.gui.screens.inventory.MenuAccess"
import { $FocusNavigationEvent$$Type } from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import { $GuiEventListener, $GuiEventListener$$Type } from "net.minecraft.client.gui.components.events.GuiEventListener"
import { $Slot, $Slot$$Type } from "net.minecraft.world.inventory.Slot"
import { $AbstractContainerScreenAccessor as $AbstractContainerScreenAccessor$1 } from "net.blay09.mods.balm.mixin.AbstractContainerScreenAccessor"
import { $AbstractContainerScreenExtension } from "earth.terrarium.adastra.client.screens.base.AbstractContainerScreenExtension"
import { $AbstractContainerScreenAccessor as $AbstractContainerScreenAccessor$2 } from "com.lowdragmc.lowdraglib.core.mixins.accessor.AbstractContainerScreenAccessor"
import { $Optional } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $HandledScreenAccessor } from "dev.emi.emi.mixin.accessor.HandledScreenAccessor"

export class $AbstractContainerScreen<T extends $AbstractContainerMenu = $AbstractContainerMenu> extends $Screen implements $MenuAccess<T>, $AbstractContainerScreenAccessor$2, $AbstractContainerScreenAccessor$1, $AbstractContainerScreenAccessor, $HandledScreenAccessor, $InternalCursorProvider, $AbstractContainerScreenAccessor$0, $AbstractContainerScreenExtension {
static readonly "INVENTORY_LOCATION": $ResourceLocation
static readonly "SLOT_ITEM_BLIT_OFFSET": integer

constructor(t0: T, inventory1: $Inventory$$Type, component2: $Component$$Type)

public "adastra$renderPreSlot"(graphics: $GuiGraphics$$Type, slot: $Slot$$Type): void
public "charTyped"(char0: character, int1: integer): boolean
public "clearDraggingState"(): void
public "findSlot"(double0: double, double1: double): $Slot
public "getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
public "getCurrentFocusPath"(): $ComponentPath
public "getGuiLeft"(): integer
public "getGuiTop"(): integer
public "getMenu"(): T
public "getSlotColor"(int0: integer): integer
public "getSlotUnderMouse"(): $Slot
public "getTabOrderGroup"(): integer
public "getXSize"(): integer
public "getYSize"(): integer
public "handler$bgh000$apoth_superMouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double, callbackInfoReturnable5: $CallbackInfoReturnable$$Type): void
public "handler$bmg000$l2library$onClose$trackClose"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$fdh000$renderSlot"(guiGraphics0: $GuiGraphics$$Type, slot1: $Slot$$Type, callbackInfo2: $CallbackInfo$$Type): void
public "isFocused"(): boolean
public "isHovering"(slot0: $Slot$$Type, double1: double, double2: double): boolean
public "isHovering"(int0: integer, int1: integer, int2: integer, int3: integer, double4: double, double5: double): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "magicalSpecialHackyFocus"(guiEventListener0: $GuiEventListener$$Type): void
public "minecraft_cursor$getCursorType"(double0: double, double1: double): $CursorType
public "mouseClicked"(double0: double, double1: double, int2: integer): boolean
public "mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseReleased"(double0: double, double1: double, int2: integer): boolean
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
public "recalculateQuickCraftRemaining"(): void
public "renderFloatingItem"(guiGraphics0: $GuiGraphics$$Type, itemStack1: $ItemStack$$Type, int2: integer, int3: integer, string4: string): void
public "renderSlot"(guiGraphics0: $GuiGraphics$$Type, slot1: $Slot$$Type): void
public static "renderSlotHighlight"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, int3: integer, int4: integer): void
public static "renderSlotHighlight"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, int3: integer): void
public "setFocused"(boolean0: boolean): void
public "slotClicked"(slot0: $Slot$$Type, int1: integer, int2: integer, clickType3: $ClickType$$Type): void
get "clickedSlot"(): $Slot
set "clickedSlot"(value: $Slot$$Type)
get "doubleclick"(): boolean
set "doubleclick"(value: boolean)
get "draggingItem"(): $ItemStack
set "draggingItem"(value: $ItemStack$$Type)
get "hoveredSlot"(): $Slot
set "hoveredSlot"(value: $Slot$$Type)
get "imageHeight"(): integer
set "imageHeight"(value: integer)
get "imageWidth"(): integer
set "imageWidth"(value: integer)
get "isSplittingStack"(): boolean
set "isSplittingStack"(value: boolean)
get "lastClickButton"(): integer
set "lastClickButton"(value: integer)
get "lastClickSlot"(): $Slot
set "lastClickSlot"(value: $Slot$$Type)
get "lastClickTime"(): long
set "lastClickTime"(value: long)
get "lastQuickMoved"(): $ItemStack
set "lastQuickMoved"(value: $ItemStack$$Type)
get "leftPos"(): integer
set "leftPos"(value: integer)
get "quickCraftingButton"(): integer
set "quickCraftingButton"(value: integer)
get "quickCraftingRemainder"(): integer
set "quickCraftingRemainder"(value: integer)
get "quickCraftingType"(): integer
set "quickCraftingType"(value: integer)
get "quickdropSlot"(): $Slot
set "quickdropSlot"(value: $Slot$$Type)
get "quickdropTime"(): long
set "quickdropTime"(value: long)
get "skipNextRelease"(): boolean
set "skipNextRelease"(value: boolean)
get "snapbackEnd"(): $Slot
set "snapbackEnd"(value: $Slot$$Type)
get "snapbackItem"(): $ItemStack
set "snapbackItem"(value: $ItemStack$$Type)
get "snapbackStartX"(): integer
set "snapbackStartX"(value: integer)
get "snapbackStartY"(): integer
set "snapbackStartY"(value: integer)
get "snapbackTime"(): long
set "snapbackTime"(value: long)
get "topPos"(): integer
set "topPos"(value: integer)
get "currentFocusPath"(): $ComponentPath
get "guiLeft"(): integer
get "guiTop"(): integer
get "menu"(): T
get "slotUnderMouse"(): $Slot
get "tabOrderGroup"(): integer
get "xSize"(): integer
get "ySize"(): integer
get "focused"(): boolean
set "focused"(value: boolean)
}
}

declare module "net.minecraft.client.gui.navigation.ScreenAxis" {
import { $Enum } from "java.lang.Enum"
import { $ScreenDirection } from "net.minecraft.client.gui.navigation.ScreenDirection"

export class $ScreenAxis extends $Enum<$ScreenAxis> {
static readonly "HORIZONTAL": $ScreenAxis
static readonly "VERTICAL": $ScreenAxis

public "getDirection"(boolean0: boolean): $ScreenDirection
public "getNegative"(): $ScreenDirection
public "getPositive"(): $ScreenDirection
public "orthogonal"(): $ScreenAxis
public static "valueOf"(string0: string): $ScreenAxis
public static "values"(): $ScreenAxis[]
get "negative"(): $ScreenDirection
get "positive"(): $ScreenDirection
}
}

declare module "net.minecraft.client.gui.components.toasts.Toast$Visibility" {
import { $Enum } from "java.lang.Enum"
import { $SoundManager$$Type } from "net.minecraft.client.sounds.SoundManager"

export class $Toast$Visibility extends $Enum<$Toast$Visibility> {
static readonly "HIDE": $Toast$Visibility
static readonly "SHOW": $Toast$Visibility

public "playSound"(soundManager0: $SoundManager$$Type): void
public static "valueOf"(string0: string): $Toast$Visibility
public static "values"(): $Toast$Visibility[]
}
}

declare module "net.minecraft.client.gui.navigation.ScreenDirection" {
import { $ScreenAxis } from "net.minecraft.client.gui.navigation.ScreenAxis"
import { $Enum } from "java.lang.Enum"
import { $IntComparator } from "it.unimi.dsi.fastutil.ints.IntComparator"

export class $ScreenDirection extends $Enum<$ScreenDirection> {
static readonly "DOWN": $ScreenDirection
static readonly "LEFT": $ScreenDirection
static readonly "RIGHT": $ScreenDirection
static readonly "UP": $ScreenDirection

public "coordinateValueComparator"(): $IntComparator
public "getAxis"(): $ScreenAxis
public "getOpposite"(): $ScreenDirection
public "isAfter"(int0: integer, int1: integer): boolean
public "isBefore"(int0: integer, int1: integer): boolean
public "isPositive"(): boolean
public static "valueOf"(string0: string): $ScreenDirection
public static "values"(): $ScreenDirection[]
get "axis"(): $ScreenAxis
get "opposite"(): $ScreenDirection
get "positive"(): boolean
}
}

declare module "net.minecraft.client.gui.components.spectator.SpectatorGui" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $SpectatorMenu$$Type } from "net.minecraft.client.gui.spectator.SpectatorMenu"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $SpectatorMenuListener } from "net.minecraft.client.gui.spectator.SpectatorMenuListener"

export class $SpectatorGui implements $SpectatorMenuListener {
static readonly "SPECTATOR_LOCATION": $ResourceLocation

constructor(minecraft0: $Minecraft$$Type)

public "isMenuActive"(): boolean
public "onHotbarSelected"(int0: integer): void
public "onMouseMiddleClick"(): void
public "onMouseScrolled"(int0: integer): void
public "onSpectatorMenuClosed"(spectatorMenu0: $SpectatorMenu$$Type): void
public "renderHotbar"(guiGraphics0: $GuiGraphics$$Type): void
public "renderTooltip"(guiGraphics0: $GuiGraphics$$Type): void
get "menuActive"(): boolean
}
}

declare module "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent" {
import { $Font$$Type } from "net.minecraft.client.gui.Font"
import { $MultiBufferSource$BufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $FormattedCharSequence$$Type } from "net.minecraft.util.FormattedCharSequence"
import { $TooltipComponent$$Type } from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"

export interface $ClientTooltipComponent {
"getHeight"(): integer
"getWidth"(font0: $Font$$Type): integer
"renderImage"(font0: $Font$$Type, int1: integer, int2: integer, guiGraphics3: $GuiGraphics$$Type): void
"renderText"(font0: $Font$$Type, int1: integer, int2: integer, matrix4f3: $Matrix4f$$Type, bufferSource4: $MultiBufferSource$BufferSource$$Type): void
get "height"(): integer
}

export namespace $ClientTooltipComponent {
function create(tooltipComponent0: $TooltipComponent$$Type): $ClientTooltipComponent
function create(formattedCharSequence0: $FormattedCharSequence$$Type): $ClientTooltipComponent
}
export abstract class $ClientTooltipComponent$$Static implements $ClientTooltipComponent {
static "create"(tooltipComponent0: $TooltipComponent$$Type): $ClientTooltipComponent
static "create"(formattedCharSequence0: $FormattedCharSequence$$Type): $ClientTooltipComponent
}
}

declare module "net.minecraft.client.gui.components.Renderable" {
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"

export interface $Renderable {
"render"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float): void
}

export namespace $Renderable {
const probejs$$marker: never
}
export abstract class $Renderable$$Static implements $Renderable {
}
}

declare module "net.minecraft.client.gui.Font" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $StringSplitter, $StringSplitter$$Type } from "net.minecraft.client.StringSplitter"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $FontSet } from "net.minecraft.client.gui.font.FontSet"
import { $FontAccessor } from "com.simibubi.create.foundation.mixin.accessor.FontAccessor"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Font$DisplayMode$$Type } from "net.minecraft.client.gui.Font$DisplayMode"
import { $List } from "java.util.List"
import { $FontAccess } from "com.kipti.bnb.mixin_accessor.FontAccess"
import { $FormattedText, $FormattedText$$Type } from "net.minecraft.network.chat.FormattedText"
import { $FormattedCharSequence, $FormattedCharSequence$$Type } from "net.minecraft.util.FormattedCharSequence"
import { $IAntiqueTextProvider } from "net.mehvahdjukaar.supplementaries.api.IAntiqueTextProvider"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $IForgeFont } from "net.minecraftforge.client.extensions.IForgeFont"

export class $Font implements $IForgeFont, $FontAccess, $IAntiqueTextProvider, $FontAccessor {
static readonly "ALPHA_CUTOFF": integer
readonly "filterFishyGlyphs": boolean
readonly "fonts": $Function<$ResourceLocation, $FontSet>
readonly "lineHeight": integer
readonly "random": $RandomSource

constructor(function0: $Function$$Type<$ResourceLocation$$Type, $FontSet>, boolean1: boolean)

public "bidirectionalShaping"(string0: string): string
public "bits_n_bobs$getFontSet"(resourceLocation0: $ResourceLocation$$Type): $FontSet
public "drawInBatch"(string0: string, float1: float, float2: float, int3: integer, boolean4: boolean, matrix4f5: $Matrix4f$$Type, multiBufferSource6: $MultiBufferSource$$Type, displayMode7: $Font$DisplayMode$$Type, int8: integer, int9: integer): integer
public "drawInBatch"(component0: $Component$$Type, float1: float, float2: float, int3: integer, boolean4: boolean, matrix4f5: $Matrix4f$$Type, multiBufferSource6: $MultiBufferSource$$Type, displayMode7: $Font$DisplayMode$$Type, int8: integer, int9: integer): integer
public "drawInBatch"(string0: string, float1: float, float2: float, int3: integer, boolean4: boolean, matrix4f5: $Matrix4f$$Type, multiBufferSource6: $MultiBufferSource$$Type, displayMode7: $Font$DisplayMode$$Type, int8: integer, int9: integer, boolean10: boolean): integer
public "drawInBatch"(formattedCharSequence0: $FormattedCharSequence$$Type, float1: float, float2: float, int3: integer, boolean4: boolean, matrix4f5: $Matrix4f$$Type, multiBufferSource6: $MultiBufferSource$$Type, displayMode7: $Font$DisplayMode$$Type, int8: integer, int9: integer): integer
public "drawInBatch8xOutline"(formattedCharSequence0: $FormattedCharSequence$$Type, float1: float, float2: float, int3: integer, int4: integer, matrix4f5: $Matrix4f$$Type, multiBufferSource6: $MultiBufferSource$$Type, int7: integer): void
public "ellipsize"(formattedText0: $FormattedText$$Type, int1: integer): $FormattedText
public "getFontSet"(resourceLocation0: $ResourceLocation$$Type): $FontSet
public "getSplitter"(): $StringSplitter
public "isBidirectional"(): boolean
public "plainSubstrByWidth"(string0: string, int1: integer, boolean2: boolean): string
public "plainSubstrByWidth"(string0: string, int1: integer): string
public "renderText"(string0: string, float1: float, float2: float, int3: integer, boolean4: boolean, matrix4f5: $Matrix4f$$Type, multiBufferSource6: $MultiBufferSource$$Type, displayMode7: $Font$DisplayMode$$Type, int8: integer, int9: integer): float
public "self"(): $Font
public "split"(formattedText0: $FormattedText$$Type, int1: integer): $List<$FormattedCharSequence>
public "substrByWidth"(formattedText0: $FormattedText$$Type, int1: integer): $FormattedText
public "supp$hasAntiqueInk"(): boolean
public "supp$setAntiqueInk"(hasInk: boolean): void
public "width"(formattedText0: $FormattedText$$Type): integer
public "width"(string0: string): integer
public "width"(formattedCharSequence0: $FormattedCharSequence$$Type): integer
public "wordWrapHeight"(string0: string, int1: integer): integer
public "wordWrapHeight"(formattedText0: $FormattedText$$Type, int1: integer): integer
get "splitter"(): $StringSplitter
set "splitter"(value: $StringSplitter$$Type)
get "bidirectional"(): boolean
}
}

declare module "net.minecraft.client.gui.narration.NarratedElementType" {
import { $Enum } from "java.lang.Enum"

export class $NarratedElementType extends $Enum<$NarratedElementType> {
static readonly "HINT": $NarratedElementType
static readonly "POSITION": $NarratedElementType
static readonly "TITLE": $NarratedElementType
static readonly "USAGE": $NarratedElementType

public static "valueOf"(string0: string): $NarratedElementType
public static "values"(): $NarratedElementType[]
}
}

declare module "net.minecraft.client.gui.screens.worldselection.CreateWorldScreen" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $CreateWorldScreenAccessor } from "com.aetherteam.cumulus.mixin.mixins.client.accessor.CreateWorldScreenAccessor"
import { $Screen, $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $WorldCreationContext$$Type } from "net.minecraft.client.gui.screens.worldselection.WorldCreationContext"
import { $FocusNavigationEvent$$Type } from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import { $GuiEventListener, $GuiEventListener$$Type } from "net.minecraft.client.gui.components.events.GuiEventListener"
import { $WorldCreationUiState } from "net.minecraft.client.gui.screens.worldselection.WorldCreationUiState"
import { $LevelSettings$$Type } from "net.minecraft.world.level.LevelSettings"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $Optional } from "java.util.Optional"
import { $ComponentPath } from "net.minecraft.client.gui.ComponentPath"
import { $Path, $Path$$Type } from "java.nio.file.Path"

export class $CreateWorldScreen extends $Screen implements $CreateWorldScreenAccessor {
static "FOOTER_SEPERATOR": $ResourceLocation
static "HEADER_SEPERATOR": $ResourceLocation
static "LIGHT_DIRT_BACKGROUND": $ResourceLocation

public "charTyped"(char0: character, int1: integer): boolean
public static "createFromExisting"(minecraft0: $Minecraft$$Type, screen1: $Screen$$Type, levelSettings2: $LevelSettings$$Type, worldCreationContext3: $WorldCreationContext$$Type, path4: $Path$$Type): $CreateWorldScreen
public static "createTempDataPackDirFromExistingWorld"(path0: $Path$$Type, minecraft1: $Minecraft$$Type): $Path
public "getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
public "getCurrentFocusPath"(): $ComponentPath
public "getTabOrderGroup"(): integer
public "getUiState"(): $WorldCreationUiState
public "isFocused"(): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "magicalSpecialHackyFocus"(guiEventListener0: $GuiEventListener$$Type): void
public "mouseClicked"(double0: double, double1: double, int2: integer): boolean
public "mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseReleased"(double0: double, double1: double, int2: integer): boolean
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
public static "openFresh"(minecraft0: $Minecraft$$Type, screen1: $Screen$$Type): void
public "popScreen"(): void
public "repositionElements"(): void
public "setFocused"(boolean0: boolean): void
get "currentFocusPath"(): $ComponentPath
get "tabOrderGroup"(): integer
get "uiState"(): $WorldCreationUiState
get "focused"(): boolean
set "focused"(value: boolean)
}
}

declare module "net.minecraft.client.gui.components.CycleButton$ValueListSupplier" {
import { $List, $List$$Type } from "java.util.List"
import { $Collection$$Type } from "java.util.Collection"
import { $BooleanSupplier$$Type } from "java.util.function.BooleanSupplier"

export interface $CycleButton$ValueListSupplier<T = any> {
"getDefaultList"(): $List<T>
"getSelectedList"(): $List<T>
get "defaultList"(): $List<T>
get "selectedList"(): $List<T>
}

export namespace $CycleButton$ValueListSupplier {
function create<T>(collection0: $Collection$$Type<T>): $CycleButton$ValueListSupplier<T>
function create<T>(booleanSupplier0: $BooleanSupplier$$Type, list1: $List$$Type<T>, list2: $List$$Type<T>): $CycleButton$ValueListSupplier<T>
}
export abstract class $CycleButton$ValueListSupplier$$Static<T = any> implements $CycleButton$ValueListSupplier<T> {
static "create"<T>(collection0: $Collection$$Type<T>): $CycleButton$ValueListSupplier<T>
static "create"<T>(booleanSupplier0: $BooleanSupplier$$Type, list1: $List$$Type<T>, list2: $List$$Type<T>): $CycleButton$ValueListSupplier<T>
}
}

declare module "net.minecraft.client.gui.font.glyphs.BakedGlyph$Effect" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BakedGlyph$Effect {
constructor(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float)

}
}

declare module "net.minecraft.client.gui.screens.worldselection.WorldCreationUiState$SelectedGameMode" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Enum } from "java.lang.Enum"
import { $GameType } from "net.minecraft.world.level.GameType"

export class $WorldCreationUiState$SelectedGameMode extends $Enum<$WorldCreationUiState$SelectedGameMode> {
static readonly "CREATIVE": $WorldCreationUiState$SelectedGameMode
static readonly "DEBUG": $WorldCreationUiState$SelectedGameMode
static readonly "HARDCORE": $WorldCreationUiState$SelectedGameMode
static readonly "SURVIVAL": $WorldCreationUiState$SelectedGameMode
readonly "displayName": $Component
readonly "gameType": $GameType

public "getInfo"(): $Component
public static "valueOf"(string0: string): $WorldCreationUiState$SelectedGameMode
public static "values"(): $WorldCreationUiState$SelectedGameMode[]
get "info"(): $Component
}
}

declare module "net.minecraft.client.gui.font.glyphs.BakedGlyph" {
import { $ReverseRenderableBakedGlyph } from "com.kipti.bnb.mixin_accessor.ReverseRenderableBakedGlyph"
import { $GlyphRenderTypes$$Type } from "net.minecraft.client.gui.font.GlyphRenderTypes"
import { $BakedGlyph$Effect$$Type } from "net.minecraft.client.gui.font.glyphs.BakedGlyph$Effect"
import { $RenderType } from "net.minecraft.client.renderer.RenderType"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $Font$DisplayMode$$Type } from "net.minecraft.client.gui.Font$DisplayMode"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"

export class $BakedGlyph implements $ReverseRenderableBakedGlyph {
constructor(glyphRenderTypes0: $GlyphRenderTypes$$Type, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float)

public "bits_n_bobs$renderReverse"(boolean0: boolean, float1: float, float2: float, matrix4f3: $Matrix4f$$Type, vertexConsumer4: $VertexConsumer$$Type, float5: float, float6: float, float7: float, float8: float, int9: integer): void
public "render"(boolean0: boolean, float1: float, float2: float, matrix4f3: $Matrix4f$$Type, vertexConsumer4: $VertexConsumer$$Type, float5: float, float6: float, float7: float, float8: float, int9: integer): void
public "renderEffect"(effect0: $BakedGlyph$Effect$$Type, matrix4f1: $Matrix4f$$Type, vertexConsumer2: $VertexConsumer$$Type, int3: integer): void
public "renderType"(displayMode0: $Font$DisplayMode$$Type): $RenderType
}
}

declare module "net.minecraft.client.gui.components.events.GuiEventListener" {
import { $ScreenRectangle } from "net.minecraft.client.gui.navigation.ScreenRectangle"
import { $ComponentPath } from "net.minecraft.client.gui.ComponentPath"
import { $TabOrderedElement } from "net.minecraft.client.gui.components.TabOrderedElement"
import { $FocusNavigationEvent$$Type } from "net.minecraft.client.gui.navigation.FocusNavigationEvent"

export interface $GuiEventListener extends $TabOrderedElement {
"charTyped"(char0: character, int1: integer): boolean
"getCurrentFocusPath"(): $ComponentPath
"getRectangle"(): $ScreenRectangle
"getTabOrderGroup"(): integer
"isFocused"(): boolean
"isMouseOver"(double0: double, double1: double): boolean
"keyPressed"(int0: integer, int1: integer, int2: integer): boolean
"keyReleased"(int0: integer, int1: integer, int2: integer): boolean
"mouseClicked"(double0: double, double1: double, int2: integer): boolean
"mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
"mouseMoved"(double0: double, double1: double): void
"mouseReleased"(double0: double, double1: double, int2: integer): boolean
"mouseScrolled"(double0: double, double1: double, double2: double): boolean
"nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
"setFocused"(boolean0: boolean): void
get "currentFocusPath"(): $ComponentPath
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
get "focused"(): boolean
set "focused"(value: boolean)
}

export namespace $GuiEventListener {
const DOUBLE_CLICK_THRESHOLD_MS: long
}
export abstract class $GuiEventListener$$Static implements $GuiEventListener {
static readonly "DOUBLE_CLICK_THRESHOLD_MS": long

}
}

declare module "net.minecraft.client.gui.screens.worldselection.WorldCreationContext$DimensionsUpdater" {
import { $RegistryAccess$Frozen, $RegistryAccess$Frozen$$Type } from "net.minecraft.core.RegistryAccess$Frozen"
import { $BiFunction } from "java.util.function.BiFunction"
import { $WorldDimensions, $WorldDimensions$$Type } from "net.minecraft.world.level.levelgen.WorldDimensions"
import { $Function$$Type } from "java.util.function.Function"

export interface $WorldCreationContext$DimensionsUpdater extends $BiFunction<$RegistryAccess$Frozen, $WorldDimensions, $WorldDimensions> {
"andThen"<V>(function0: $Function$$Type<$WorldDimensions$$Type, V>): $BiFunction<$RegistryAccess$Frozen, $WorldDimensions, V>
"apply"(frozen0: $RegistryAccess$Frozen$$Type, worldDimensions1: $WorldDimensions$$Type): $WorldDimensions
}

export namespace $WorldCreationContext$DimensionsUpdater {
const probejs$$marker: never
}
export abstract class $WorldCreationContext$DimensionsUpdater$$Static implements $WorldCreationContext$DimensionsUpdater {
}
}

declare module "net.minecraft.client.gui.components.toasts.Toast" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Toast$Visibility } from "net.minecraft.client.gui.components.toasts.Toast$Visibility"
import { $ToastComponent$$Type } from "net.minecraft.client.gui.components.toasts.ToastComponent"

export interface $Toast {
"getToken"(): any
"height"(): integer
"render"(guiGraphics0: $GuiGraphics$$Type, toastComponent1: $ToastComponent$$Type, long2: long): $Toast$Visibility
"slotCount"(): integer
"width"(): integer
get "token"(): any
}

export namespace $Toast {
const NO_TOKEN: any
const SLOT_HEIGHT: integer
const TEXTURE: $ResourceLocation
}
export abstract class $Toast$$Static implements $Toast {
static readonly "NO_TOKEN": any
static readonly "SLOT_HEIGHT": integer
static readonly "TEXTURE": $ResourceLocation

}
}

declare module "net.minecraft.client.gui.narration.NarrationSupplier" {
import { $NarrationElementOutput$$Type } from "net.minecraft.client.gui.narration.NarrationElementOutput"

export interface $NarrationSupplier {
"updateNarration"(narrationElementOutput0: $NarrationElementOutput$$Type): void
}

export namespace $NarrationSupplier {
const probejs$$marker: never
}
export abstract class $NarrationSupplier$$Static implements $NarrationSupplier {
}
}

declare module "net.minecraft.client.gui.screens.Overlay" {
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Renderable } from "net.minecraft.client.gui.components.Renderable"

export class $Overlay implements $Renderable {
constructor()

public "isPauseScreen"(): boolean
public "render"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float): void
get "pauseScreen"(): boolean
}
}

declare module "net.minecraft.client.gui.navigation.ScreenPosition" {
import { $ScreenAxis$$Type } from "net.minecraft.client.gui.navigation.ScreenAxis"
import { $Record } from "java.lang.Record"
import { $ScreenDirection$$Type } from "net.minecraft.client.gui.navigation.ScreenDirection"

export class $ScreenPosition extends $Record {
constructor(int0: integer, int1: integer)

public "getCoordinate"(screenAxis0: $ScreenAxis$$Type): integer
public static "of"(screenAxis0: $ScreenAxis$$Type, int1: integer, int2: integer): $ScreenPosition
public "step"(screenDirection0: $ScreenDirection$$Type): $ScreenPosition
public "x"(): integer
public "y"(): integer
}
}

declare module "net.minecraft.client.gui.GuiGraphics" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import { $Font$$Type } from "net.minecraft.client.gui.Font"
import { $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $IForgeGuiGraphics } from "net.minecraftforge.client.extensions.IForgeGuiGraphics"
import { $GuiGraphicsMixin } from "wootrevived.woot.mixins.impl.GuiGraphicsMixin"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $RenderTooltipEvent$Pre$$Type } from "net.minecraftforge.client.event.RenderTooltipEvent$Pre"
import { $GuiGraphicsAccessor } from "com.gregtechceu.gtceu.core.mixins.client.GuiGraphicsAccessor"
import { $Vector2ic$$Type } from "org.joml.Vector2ic"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $Minecraft, $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $TooltipComponent$$Type } from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import { $TextureAtlasSprite$$Type } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $DrawContextAccessor } from "dev.emi.emi.mixin.accessor.DrawContextAccessor"
import { $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $Style$$Type } from "net.minecraft.network.chat.Style"
import { $List$$Type } from "java.util.List"
import { $FormattedText$$Type } from "net.minecraft.network.chat.FormattedText"
import { $ClientTooltipPositioner$$Type } from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner"
import { $ClientTooltipComponent$$Type } from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"
import { $FormattedCharSequence$$Type } from "net.minecraft.util.FormattedCharSequence"
import { $Optional$$Type } from "java.util.Optional"
import { $DrawContextAccessor as $DrawContextAccessor$0 } from "dev.tr7zw.trender.gui.impl.mixin.client.DrawContextAccessor"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $IMixinGuiGraphics } from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinGuiGraphics"

export class $GuiGraphics implements $IForgeGuiGraphics, $DrawContextAccessor, $DrawContextAccessor$0, $GuiGraphicsMixin, $GuiGraphicsAccessor, $IMixinGuiGraphics {
static readonly "MAX_GUI_Z": float
static readonly "MIN_GUI_Z": float
"bufferSource": $MultiBufferSource$BufferSource
"pose": $PoseStack

constructor(minecraft0: $Minecraft$$Type, poseStack1: $PoseStack$$Type, bufferSource2: $MultiBufferSource$BufferSource$$Type)
constructor(minecraft0: $Minecraft$$Type, bufferSource1: $MultiBufferSource$BufferSource$$Type)

public "blit"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, float3: float, float4: float, int5: integer, int6: integer, int7: integer, int8: integer): void
public "blit"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, float5: float, float6: float, int7: integer, int8: integer, int9: integer, int10: integer): void
public "blit"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, textureAtlasSprite5: $TextureAtlasSprite$$Type): void
public "blit"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, textureAtlasSprite5: $TextureAtlasSprite$$Type, float6: float, float7: float, float8: float, float9: float): void
public "blit"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer): void
public "blit"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, float4: float, float5: float, int6: integer, int7: integer, int8: integer, int9: integer): void
public "blitInscribed"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, boolean7: boolean, boolean8: boolean): void
public "blitInscribed"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer): void
public "blitNineSliced"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, int9: integer): void
public "blitNineSliced"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, int9: integer, int10: integer, int11: integer, int12: integer): void
public "blitNineSliced"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, int9: integer, int10: integer): void
public "blitNineSlicedSized"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, int9: integer, int10: integer, int11: integer, int12: integer, int13: integer, int14: integer): void
public "blitNineSlicedSized"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, int9: integer, int10: integer, int11: integer, int12: integer): void
public "blitNineSlicedSized"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, int9: integer, int10: integer, int11: integer): void
public "blitRepeating"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer): void
public "blitRepeating"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, int9: integer, int10: integer): void
public "blitWithBorder"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, int9: integer, int10: integer, int11: integer, int12: integer): void
public "blitWithBorder"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, int9: integer): void
public "bufferSource"(): $MultiBufferSource$BufferSource
public "disableScissor"(): void
public "drawCenteredString"(font0: $Font$$Type, string1: string, int2: integer, int3: integer, int4: integer): void
public "drawCenteredString"(font0: $Font$$Type, component1: $Component$$Type, int2: integer, int3: integer, int4: integer): void
public "drawCenteredString"(font0: $Font$$Type, formattedCharSequence1: $FormattedCharSequence$$Type, int2: integer, int3: integer, int4: integer): void
/** @deprecated */
public "drawManaged"(runnable0: $Runnable$$Type): void
public "drawString"(font0: $Font$$Type, component1: $Component$$Type, int2: integer, int3: integer, int4: integer, boolean5: boolean): integer
public "drawString"(font0: $Font$$Type, string1: string, int2: integer, int3: integer, int4: integer): integer
public "drawString"(font0: $Font$$Type, formattedCharSequence1: $FormattedCharSequence$$Type, int2: integer, int3: integer, int4: integer): integer
public "drawString"(font0: $Font$$Type, string1: string, int2: integer, int3: integer, int4: integer, boolean5: boolean): integer
public "drawString"(font0: $Font$$Type, string1: string, float2: float, float3: float, int4: integer, boolean5: boolean): integer
public "drawString"(font0: $Font$$Type, formattedCharSequence1: $FormattedCharSequence$$Type, float2: float, float3: float, int4: integer, boolean5: boolean): integer
public "drawString"(font0: $Font$$Type, formattedCharSequence1: $FormattedCharSequence$$Type, int2: integer, int3: integer, int4: integer, boolean5: boolean): integer
public "drawString"(font0: $Font$$Type, component1: $Component$$Type, int2: integer, int3: integer, int4: integer): integer
public "drawWordWrap"(font0: $Font$$Type, formattedText1: $FormattedText$$Type, int2: integer, int3: integer, int4: integer, int5: integer): void
public "enableScissor"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "fill"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer): void
public "fill"(renderType0: $RenderType$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): void
public "fill"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): void
public "fill"(renderType0: $RenderType$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer): void
public "fillGradient"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): void
public "fillGradient"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer): void
public "fillGradient"(renderType0: $RenderType$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer): void
public "flush"(): void
/** @deprecated */
public "flushIfManaged"(): void
/** @deprecated */
public "flushIfUnmanaged"(): void
public "getColorFromFormattingCharacter"(char0: character, boolean1: boolean): integer
public "guiHeight"(): integer
public "guiWidth"(): integer
public "hLine"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "hLine"(renderType0: $RenderType$$Type, int1: integer, int2: integer, int3: integer, int4: integer): void
public "handler$dpo000$onTooltipRender"(font0: $Font$$Type, list1: $List$$Type, int2: integer, int3: integer, clientTooltipPositioner4: $ClientTooltipPositioner$$Type, callbackInfo5: $CallbackInfo$$Type, pre6: $RenderTooltipEvent$Pre$$Type, int7: integer, int8: integer, int9: integer, int10: integer, vector2ic11: $Vector2ic$$Type): void
public "handler$gid000$renderGuiItemOverlay"(font0: $Font$$Type, itemStack1: $ItemStack$$Type, int2: integer, int3: integer, callbackInfo4: $CallbackInfo$$Type): void
public "innerBlit"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, float6: float, float7: float, float8: float, float9: float): void
public "pose"(): $PoseStack
public "renderComponentHoverEffect"(font0: $Font$$Type, style1: $Style$$Type, int2: integer, int3: integer): void
public "renderComponentTooltip"(font0: $Font$$Type, list1: $List$$Type<$FormattedText$$Type>, int2: integer, int3: integer, itemStack4: $ItemStack$$Type): void
public "renderComponentTooltip"(font0: $Font$$Type, list1: $List$$Type<$Component$$Type>, int2: integer, int3: integer): void
public "renderComponentTooltipFromElements"(font0: $Font$$Type, list1: $List$$Type<$Either$$Type<$FormattedText$$Type, $TooltipComponent$$Type>>, int2: integer, int3: integer, itemStack4: $ItemStack$$Type): void
public "renderFakeItem"(itemStack0: $ItemStack$$Type, int1: integer, int2: integer): void
public "renderItem"(itemStack0: $ItemStack$$Type, int1: integer, int2: integer): void
public "renderItem"(itemStack0: $ItemStack$$Type, int1: integer, int2: integer, int3: integer): void
public "renderItem"(itemStack0: $ItemStack$$Type, int1: integer, int2: integer, int3: integer, int4: integer): void
public "renderItem"(livingEntity0: $LivingEntity$$Type, level1: $Level$$Type, itemStack2: $ItemStack$$Type, int3: integer, int4: integer, int5: integer, int6: integer): void
public "renderItem"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, int2: integer, int3: integer, int4: integer): void
public "renderItemDecorations"(font0: $Font$$Type, itemStack1: $ItemStack$$Type, int2: integer, int3: integer): void
public "renderItemDecorations"(font0: $Font$$Type, itemStack1: $ItemStack$$Type, int2: integer, int3: integer, string4: string): void
public "renderOutline"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer): void
public "renderTooltip"(font0: $Font$$Type, itemStack1: $ItemStack$$Type, int2: integer, int3: integer): void
public "renderTooltip"(font0: $Font$$Type, list1: $List$$Type<$Component$$Type>, optional2: $Optional$$Type<$TooltipComponent$$Type>, int3: integer, int4: integer): void
public "renderTooltip"(font0: $Font$$Type, list1: $List$$Type<$Component$$Type>, optional2: $Optional$$Type<$TooltipComponent$$Type>, itemStack3: $ItemStack$$Type, int4: integer, int5: integer): void
public "renderTooltip"(font0: $Font$$Type, component1: $Component$$Type, int2: integer, int3: integer): void
public "renderTooltip"(font0: $Font$$Type, list1: $List$$Type<$FormattedCharSequence$$Type>, int2: integer, int3: integer): void
public "renderTooltip"(font0: $Font$$Type, list1: $List$$Type<$FormattedCharSequence$$Type>, clientTooltipPositioner2: $ClientTooltipPositioner$$Type, int3: integer, int4: integer): void
public "renderTooltipInternal"(font0: $Font$$Type, list1: $List$$Type<$ClientTooltipComponent$$Type>, int2: integer, int3: integer, clientTooltipPositioner4: $ClientTooltipPositioner$$Type): void
public "setColor"(float0: float, float1: float, float2: float, float3: float): void
public "vLine"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "vLine"(renderType0: $RenderType$$Type, int1: integer, int2: integer, int3: integer, int4: integer): void
get "minecraft"(): $Minecraft
set "minecraft"(value: $Minecraft$$Type)
get "tooltipStack"(): $ItemStack
set "tooltipStack"(value: $ItemStack$$Type)
}
}

declare module "net.minecraft.client.gui.screens.Screen$DeferredTooltipRendering" {
import { $List } from "java.util.List"
import { $ClientTooltipPositioner } from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner"
import { $FormattedCharSequence } from "net.minecraft.util.FormattedCharSequence"
import { $Record } from "java.lang.Record"

export class $Screen$DeferredTooltipRendering extends $Record {
public "positioner"(): $ClientTooltipPositioner
public "tooltip"(): $List<$FormattedCharSequence>
}
}

declare module "net.minecraft.client.gui.narration.NarrationElementOutput" {
import { $NarrationThunk$$Type } from "net.minecraft.client.gui.narration.NarrationThunk"
import { $NarratedElementType$$Type } from "net.minecraft.client.gui.narration.NarratedElementType"
import { $Component$$Type } from "net.minecraft.network.chat.Component"

export interface $NarrationElementOutput {
"add"(narratedElementType0: $NarratedElementType$$Type, narrationThunk1: $NarrationThunk$$Type<any>): void
"add"(narratedElementType0: $NarratedElementType$$Type, ...component1s: $Component$$Type[]): void
"add"(narratedElementType0: $NarratedElementType$$Type, component1: $Component$$Type): void
"add"(narratedElementType0: $NarratedElementType$$Type, string1: string): void
"nest"(): $NarrationElementOutput
}

export namespace $NarrationElementOutput {
const probejs$$marker: never
}
export abstract class $NarrationElementOutput$$Static implements $NarrationElementOutput {
}
}

declare module "net.minecraft.client.gui.screens.worldselection.WorldCreationUiState" {
import { $WorldPreset$$Type } from "net.minecraft.world.level.levelgen.presets.WorldPreset"
import { $WorldCreationContext$DimensionsUpdater$$Type } from "net.minecraft.client.gui.screens.worldselection.WorldCreationContext$DimensionsUpdater"
import { $WorldCreationContext, $WorldCreationContext$$Type } from "net.minecraft.client.gui.screens.worldselection.WorldCreationContext"
import { $GameRules, $GameRules$$Type } from "net.minecraft.world.level.GameRules"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $OptionalLong$$Type } from "java.util.OptionalLong"
import { $PresetEditor } from "net.minecraft.client.gui.screens.worldselection.PresetEditor"
import { $List } from "java.util.List"
import { $WorldCreationUiState$WorldTypeEntry, $WorldCreationUiState$WorldTypeEntry$$Type } from "net.minecraft.client.gui.screens.worldselection.WorldCreationUiState$WorldTypeEntry"
import { $Optional$$Type } from "java.util.Optional"
import { $WorldCreationUiState$SelectedGameMode, $WorldCreationUiState$SelectedGameMode$$Type } from "net.minecraft.client.gui.screens.worldselection.WorldCreationUiState$SelectedGameMode"
import { $Path$$Type } from "java.nio.file.Path"
import { $Difficulty, $Difficulty$$Type } from "net.minecraft.world.Difficulty"

export class $WorldCreationUiState {
constructor(path0: $Path$$Type, worldCreationContext1: $WorldCreationContext$$Type, optional2: $Optional$$Type<$ResourceKey$$Type<$WorldPreset$$Type>>, optionalLong3: $OptionalLong$$Type)

public "addListener"(consumer0: $Consumer$$Type<$WorldCreationUiState$$Type>): void
public "getAltPresetList"(): $List<$WorldCreationUiState$WorldTypeEntry>
public "getDifficulty"(): $Difficulty
public "getGameMode"(): $WorldCreationUiState$SelectedGameMode
public "getGameRules"(): $GameRules
public "getName"(): string
public "getNormalPresetList"(): $List<$WorldCreationUiState$WorldTypeEntry>
public "getPresetEditor"(): $PresetEditor
public "getSeed"(): string
public "getSettings"(): $WorldCreationContext
public "getTargetFolder"(): string
public "getWorldType"(): $WorldCreationUiState$WorldTypeEntry
public "isAllowCheats"(): boolean
public "isBonusChest"(): boolean
public "isDebug"(): boolean
public "isGenerateStructures"(): boolean
public "isHardcore"(): boolean
public "onChanged"(): void
public "setAllowCheats"(boolean0: boolean): void
public "setBonusChest"(boolean0: boolean): void
public "setDifficulty"(difficulty0: $Difficulty$$Type): void
public "setGameMode"(selectedGameMode0: $WorldCreationUiState$SelectedGameMode$$Type): void
public "setGameRules"(gameRules0: $GameRules$$Type): void
public "setGenerateStructures"(boolean0: boolean): void
public "setName"(string0: string): void
public "setSeed"(string0: string): void
public "setSettings"(worldCreationContext0: $WorldCreationContext$$Type): void
public "setWorldType"(worldTypeEntry0: $WorldCreationUiState$WorldTypeEntry$$Type): void
public "updateDimensions"(dimensionsUpdater0: $WorldCreationContext$DimensionsUpdater$$Type): void
get "altPresetList"(): $List<$WorldCreationUiState$WorldTypeEntry>
get "difficulty"(): $Difficulty
get "gameMode"(): $WorldCreationUiState$SelectedGameMode
get "gameRules"(): $GameRules
get "name"(): string
get "normalPresetList"(): $List<$WorldCreationUiState$WorldTypeEntry>
get "presetEditor"(): $PresetEditor
get "seed"(): string
get "settings"(): $WorldCreationContext
get "targetFolder"(): string
get "worldType"(): $WorldCreationUiState$WorldTypeEntry
get "allowCheats"(): boolean
get "bonusChest"(): boolean
get "debug"(): boolean
get "generateStructures"(): boolean
get "hardcore"(): boolean
set "allowCheats"(value: boolean)
set "bonusChest"(value: boolean)
set "difficulty"(value: $Difficulty$$Type)
set "gameMode"(value: $WorldCreationUiState$SelectedGameMode$$Type)
set "gameRules"(value: $GameRules$$Type)
set "generateStructures"(value: boolean)
set "name"(value: string)
set "seed"(value: string)
set "settings"(value: $WorldCreationContext$$Type)
set "worldType"(value: $WorldCreationUiState$WorldTypeEntry$$Type)
}
}

declare module "net.minecraft.client.gui.screens.worldselection.WorldCreationUiState$WorldTypeEntry" {
import { $WorldPreset, $WorldPreset$$Type } from "net.minecraft.world.level.levelgen.presets.WorldPreset"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Record } from "java.lang.Record"

export class $WorldCreationUiState$WorldTypeEntry extends $Record {
constructor(preset: $Holder$$Type<$WorldPreset$$Type>)

public "describePreset"(): $Component
public "isAmplified"(): boolean
public "preset"(): $Holder<$WorldPreset>
get "amplified"(): boolean
}
}

declare module "net.minecraft.client.gui.components.Button$CreateNarration" {
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $Supplier$$Type } from "java.util.function.Supplier"

export interface $Button$CreateNarration {
"createNarrationMessage"(supplier0: $Supplier$$Type<$MutableComponent>): $MutableComponent
}

export namespace $Button$CreateNarration {
const probejs$$marker: never
}
export abstract class $Button$CreateNarration$$Static implements $Button$CreateNarration {
}
}

declare module "net.minecraft.client.gui.components.Tooltip" {
import { $NarrationSupplier } from "net.minecraft.client.gui.narration.NarrationSupplier"
import { $TooltipAccessor } from "fuzs.puzzleslib.mixin.client.accessor.TooltipAccessor"
import { $List, $List$$Type } from "java.util.List"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $NarrationElementOutput$$Type } from "net.minecraft.client.gui.narration.NarrationElementOutput"
import { $FormattedCharSequence, $FormattedCharSequence$$Type } from "net.minecraft.util.FormattedCharSequence"

export class $Tooltip implements $NarrationSupplier, $TooltipAccessor {
public static "create"(component0: $Component$$Type): $Tooltip
public static "create"(component0: $Component$$Type, component1: $Component$$Type): $Tooltip
public static "splitTooltip"(minecraft0: $Minecraft$$Type, component1: $Component$$Type): $List<$FormattedCharSequence>
public "toCharSequence"(minecraft0: $Minecraft$$Type): $List<$FormattedCharSequence>
public "updateNarration"(narrationElementOutput0: $NarrationElementOutput$$Type): void
get "cachedTooltip"(): $List<$FormattedCharSequence>
set "cachedTooltip"(value: $List$$Type<$FormattedCharSequence$$Type>)
}
}

declare module "net.minecraft.client.gui.screens.inventory.MenuAccess" {
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"

export interface $MenuAccess<T extends $AbstractContainerMenu = $AbstractContainerMenu> {
"getMenu"(): T
get "menu"(): T
}

export namespace $MenuAccess {
const probejs$$marker: never
}
export abstract class $MenuAccess$$Static<T extends $AbstractContainerMenu = $AbstractContainerMenu> implements $MenuAccess<T> {
}
}

declare module "net.minecraft.client.gui.screens.Screen$NarratableSearchResult" {
import { $NarratableEntry, $NarratableEntry$$Type } from "net.minecraft.client.gui.narration.NarratableEntry"
import { $NarratableEntry$NarrationPriority, $NarratableEntry$NarrationPriority$$Type } from "net.minecraft.client.gui.narration.NarratableEntry$NarrationPriority"

export class $Screen$NarratableSearchResult {
readonly "entry": $NarratableEntry
readonly "index": integer
readonly "priority": $NarratableEntry$NarrationPriority

constructor(narratableEntry0: $NarratableEntry$$Type, int1: integer, narrationPriority2: $NarratableEntry$NarrationPriority$$Type)

}
}

declare module "net.minecraft.client.gui.components.Button$OnPress" {
import { $Button$$Type } from "net.minecraft.client.gui.components.Button"

export interface $Button$OnPress {
"onPress"(button0: $Button$$Type): void
}

export namespace $Button$OnPress {
const probejs$$marker: never
}
export abstract class $Button$OnPress$$Static implements $Button$OnPress {
}
}

declare module "net.minecraft.client.gui.spectator.categories.SpectatorPage" {
import { $SpectatorMenuItem, $SpectatorMenuItem$$Type } from "net.minecraft.client.gui.spectator.SpectatorMenuItem"
import { $List$$Type } from "java.util.List"

export class $SpectatorPage {
static readonly "NO_SELECTION": integer

constructor(list0: $List$$Type<$SpectatorMenuItem$$Type>, int1: integer)

public "getItem"(int0: integer): $SpectatorMenuItem
public "getSelectedSlot"(): integer
get "selectedSlot"(): integer
}
}

declare module "net.minecraft.client.gui.MapRenderer" {
import { $MapItemSavedData$$Type } from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"
import { $TextureManager$$Type } from "net.minecraft.client.renderer.texture.TextureManager"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $MapRenderer implements $AutoCloseable {
constructor(textureManager0: $TextureManager$$Type)

public "close"(): void
public "render"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, int2: integer, mapItemSavedData3: $MapItemSavedData$$Type, boolean4: boolean, int5: integer): void
public "resetData"(): void
public "update"(int0: integer, mapItemSavedData1: $MapItemSavedData$$Type): void
}
}

declare module "net.minecraft.client.gui.components.toasts.TutorialToast" {
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Toast$Visibility } from "net.minecraft.client.gui.components.toasts.Toast$Visibility"
import { $Toast } from "net.minecraft.client.gui.components.toasts.Toast"
import { $ToastComponent$$Type } from "net.minecraft.client.gui.components.toasts.ToastComponent"
import { $TutorialToast$Icons$$Type } from "net.minecraft.client.gui.components.toasts.TutorialToast$Icons"

export class $TutorialToast implements $Toast {
static readonly "PROGRESS_BAR_HEIGHT": integer
static readonly "PROGRESS_BAR_WIDTH": integer
static readonly "PROGRESS_BAR_X": integer
static readonly "PROGRESS_BAR_Y": integer

constructor(icons0: $TutorialToast$Icons$$Type, component1: $Component$$Type, component2: $Component$$Type, boolean3: boolean)

public "getToken"(): any
public "height"(): integer
public "hide"(): void
public "render"(guiGraphics0: $GuiGraphics$$Type, toastComponent1: $ToastComponent$$Type, long2: long): $Toast$Visibility
public "slotCount"(): integer
public "updateProgress"(float0: float): void
public "width"(): integer
get "token"(): any
}
}

