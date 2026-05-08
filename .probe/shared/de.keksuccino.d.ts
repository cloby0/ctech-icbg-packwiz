declare module "de.keksuccino.konkrete.mixin.client.IMixinScreen" {
import { $GuiEventListener } from "net.minecraft.client.gui.components.events.GuiEventListener"
import { $List } from "java.util.List"
import { $Font$$Type } from "net.minecraft.client.gui.Font"
import { $Renderable } from "net.minecraft.client.gui.components.Renderable"

export interface $IMixinScreen {
"getChildrenKonkrete"(): $List<$GuiEventListener>
"getRenderablesKonkrete"(): $List<$Renderable>
"setFontKonkrete"(font0: $Font$$Type): void
get "childrenKonkrete"(): $List<$GuiEventListener>
get "renderablesKonkrete"(): $List<$Renderable>
set "fontKonkrete"(value: $Font$$Type)
}

export namespace $IMixinScreen {
const probejs$$marker: never
}
export abstract class $IMixinScreen$$Static implements $IMixinScreen {
}
}

declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinMusicManager" {
import { $SoundInstance } from "net.minecraft.client.resources.sounds.SoundInstance"

export interface $IMixinMusicManager {
"getCurrentMusic_FancyMenu"(): $SoundInstance
get "currentMusic_FancyMenu"(): $SoundInstance
}

export namespace $IMixinMusicManager {
const probejs$$marker: never
}
export abstract class $IMixinMusicManager$$Static implements $IMixinMusicManager {
}
}

declare module "de.keksuccino.konkrete.events.ScreenKeyPressedEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $ScreenKeyPressedEvent extends $Event {
readonly "keyCode": integer
readonly "modifiers": integer
readonly "scanCode": integer

constructor(int0: integer, int1: integer, int2: integer)
constructor()

}
}

declare module "de.keksuccino.fancymenu.util.rendering.ui.screen.CustomizableScreen" {
import { $GuiEventListener } from "net.minecraft.client.gui.components.events.GuiEventListener"
import { $List } from "java.util.List"

export interface $CustomizableScreen {
"removeOnInitChildrenFancyMenu"(): $List<$GuiEventListener>
}

export namespace $CustomizableScreen {
const probejs$$marker: never
}
export abstract class $CustomizableScreen$$Static implements $CustomizableScreen {
}
}

declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinGui" {
import { $Component } from "net.minecraft.network.chat.Component"

export interface $IMixinGui {
"get_subtitle_FancyMenu"(): $Component
"get_title_FancyMenu"(): $Component
get "_subtitle_FancyMenu"(): $Component
get "_title_FancyMenu"(): $Component
}

export namespace $IMixinGui {
const probejs$$marker: never
}
export abstract class $IMixinGui$$Static implements $IMixinGui {
}
}

declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinBossHealthOverlay" {
import { $LerpingBossEvent } from "net.minecraft.client.gui.components.LerpingBossEvent"
import { $Map } from "java.util.Map"
import { $UUID } from "java.util.UUID"

export interface $IMixinBossHealthOverlay {
"get_events_FancyMenu"(): $Map<$UUID, $LerpingBossEvent>
get "_events_FancyMenu"(): $Map<$UUID, $LerpingBossEvent>
}

export namespace $IMixinBossHealthOverlay {
const probejs$$marker: never
}
export abstract class $IMixinBossHealthOverlay$$Static implements $IMixinBossHealthOverlay {
}
}

declare module "de.keksuccino.melody.mixin.mixins.common.client.IMixinSoundEngine" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinSoundEngine {
"getLoadedMelody"(): boolean
get "loadedMelody"(): boolean
}

export namespace $IMixinSoundEngine {
const probejs$$marker: never
}
export abstract class $IMixinSoundEngine$$Static implements $IMixinSoundEngine {
}
}

declare module "de.keksuccino.melody.mixin.mixins.common.client.IMixinSoundManager" {
import { $SoundEngine } from "net.minecraft.client.sounds.SoundEngine"

export interface $IMixinSoundManager {
"getSoundEngineMelody"(): $SoundEngine
get "soundEngineMelody"(): $SoundEngine
}

export namespace $IMixinSoundManager {
const probejs$$marker: never
}
export abstract class $IMixinSoundManager$$Static implements $IMixinSoundManager {
}
}

declare module "de.keksuccino.fancymenu.util.rendering.ui.widget.CustomizableWidget$CustomBackgroundResetBehavior" {
import { $Enum } from "java.lang.Enum"

export class $CustomizableWidget$CustomBackgroundResetBehavior extends $Enum<$CustomizableWidget$CustomBackgroundResetBehavior> {
static readonly "RESET_NEVER": $CustomizableWidget$CustomBackgroundResetBehavior
static readonly "RESET_ON_HOVER": $CustomizableWidget$CustomBackgroundResetBehavior
static readonly "RESET_ON_HOVER_AND_UNHOVER": $CustomizableWidget$CustomBackgroundResetBehavior
static readonly "RESET_ON_UNHOVER": $CustomizableWidget$CustomBackgroundResetBehavior

public static "valueOf"(string0: string): $CustomizableWidget$CustomBackgroundResetBehavior
public static "values"(): $CustomizableWidget$CustomBackgroundResetBehavior[]
}
}

declare module "de.keksuccino.fancymenu.util.resource.resources.audio.IAudio" {
import { $SoundSource, $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $PlayableResourceWithAudio } from "de.keksuccino.fancymenu.util.resource.resources.audio.PlayableResourceWithAudio"
import { $InputStream } from "java.io.InputStream"

export interface $IAudio extends $PlayableResourceWithAudio {
"close"(): void
"getDuration"(): float
"getPlayTime"(): float
"getSoundChannel"(): $SoundSource
"getVolume"(): float
"isClosed"(): boolean
"isLoadingCompleted"(): boolean
"isLoadingFailed"(): boolean
"isPaused"(): boolean
"isPlaying"(): boolean
"isReady"(): boolean
"open"(): $InputStream
"pause"(): void
"play"(): void
"setSoundChannel"(soundSource0: $SoundSource$$Type): void
"setVolume"(float0: float): void
"stop"(): void
"waitForLoadingCompletedOrFailed"(long0: long): void
"waitForReady"(long0: long): void
get "duration"(): float
get "playTime"(): float
get "soundChannel"(): $SoundSource
get "volume"(): float
get "closed"(): boolean
get "loadingCompleted"(): boolean
get "loadingFailed"(): boolean
get "paused"(): boolean
get "playing"(): boolean
get "ready"(): boolean
set "soundChannel"(value: $SoundSource$$Type)
set "volume"(value: float)
}

export namespace $IAudio {
const probejs$$marker: never
}
export abstract class $IAudio$$Static implements $IAudio {
}
}

declare module "de.keksuccino.konkrete.events.ScreenKeyReleasedEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $ScreenKeyReleasedEvent extends $Event {
readonly "keyCode": integer
readonly "modifiers": integer
readonly "scanCode": integer

constructor(int0: integer, int1: integer, int2: integer)
constructor()

}
}

declare module "de.keksuccino.konkrete.events.ScreenMouseClickedEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $ScreenMouseClickedEvent extends $Event {
readonly "mouseButton": integer
readonly "mouseX": double
readonly "mouseY": double

constructor(double0: double, double1: double, int2: integer)
constructor()

}
}

declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinSplashRenderer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinSplashRenderer {
"getSplashFancyMenu"(): string
get "splashFancyMenu"(): string
}

export namespace $IMixinSplashRenderer {
const probejs$$marker: never
}
export abstract class $IMixinSplashRenderer$$Static implements $IMixinSplashRenderer {
}
}

declare module "de.keksuccino.fancymenu.util.resource.Resource" {
import { $Closeable } from "java.io.Closeable"
import { $InputStream } from "java.io.InputStream"

export interface $Resource extends $Closeable {
"close"(): void
"isClosed"(): boolean
"isLoadingCompleted"(): boolean
"isLoadingFailed"(): boolean
"isReady"(): boolean
"open"(): $InputStream
"waitForLoadingCompletedOrFailed"(long0: long): void
"waitForReady"(long0: long): void
get "closed"(): boolean
get "loadingCompleted"(): boolean
get "loadingFailed"(): boolean
get "ready"(): boolean
}

export namespace $Resource {
const probejs$$marker: never
}
export abstract class $Resource$$Static implements $Resource {
}
}

declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinOptions" {
import { $PlayerModelPart } from "net.minecraft.world.entity.player.PlayerModelPart"
import { $Options$FieldAccess$$Type } from "net.minecraft.client.Options$FieldAccess"
import { $Set } from "java.util.Set"

export interface $IMixinOptions {
"getModelPartsFancyMenu"(): $Set<$PlayerModelPart>
"invokeProcessOptionsFancyMenu"(fieldAccess0: $Options$FieldAccess$$Type): void
get "modelPartsFancyMenu"(): $Set<$PlayerModelPart>
}

export namespace $IMixinOptions {
const probejs$$marker: never
}
export abstract class $IMixinOptions$$Static implements $IMixinOptions {
}
}

declare module "de.keksuccino.konkrete.mixin.client.IMixinEditBox" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinEditBox {
"getHightlightPosKonkrete"(): integer
"getIsEditableKonkrete"(): boolean
"getMaxLengthKonkrete"(): integer
"onValueChangeKonkrete"(string0: string): void
get "hightlightPosKonkrete"(): integer
get "isEditableKonkrete"(): boolean
get "maxLengthKonkrete"(): integer
}

export namespace $IMixinEditBox {
const probejs$$marker: never
}
export abstract class $IMixinEditBox$$Static implements $IMixinEditBox {
}
}

declare module "de.keksuccino.fancymenu.util.rendering.AspectRatio" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AspectRatio {
constructor(int0: integer, int1: integer)

public "getAspectRatioHeight"(int0: integer): integer
public "getAspectRatioSizeByMaximumSize"(int0: integer, int1: integer): integer[]
public "getAspectRatioSizeByMinimumSize"(int0: integer, int1: integer): integer[]
public "getAspectRatioWidth"(int0: integer): integer
public "getInputHeight"(): integer
public "getInputWidth"(): integer
get "inputHeight"(): integer
get "inputWidth"(): integer
}
}

declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinGuiGraphics" {
import { $MultiBufferSource$BufferSource } from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"

export interface $IMixinGuiGraphics {
"getBufferSource_FancyMenu"(): $MultiBufferSource$BufferSource
get "bufferSource_FancyMenu"(): $MultiBufferSource$BufferSource
}

export namespace $IMixinGuiGraphics {
const probejs$$marker: never
}
export abstract class $IMixinGuiGraphics$$Static implements $IMixinGuiGraphics {
}
}

declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinButton" {
import { $Button$OnPress$$Type } from "net.minecraft.client.gui.components.Button$OnPress"

export interface $IMixinButton {
"setPressActionFancyMenu"(onPress0: $Button$OnPress$$Type): void
set "pressActionFancyMenu"(value: $Button$OnPress$$Type)
}

export namespace $IMixinButton {
const probejs$$marker: never
}
export abstract class $IMixinButton$$Static implements $IMixinButton {
}
}

declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinEditBox" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $BiFunction } from "java.util.function.BiFunction"
import { $FormattedCharSequence } from "net.minecraft.util.FormattedCharSequence"

export interface $IMixinEditBox {
"getBorderedFancyMenu"(): boolean
"getDisplayPosFancyMenu"(): integer
"getFormatterFancyMenu"(): $BiFunction<string, integer, $FormattedCharSequence>
"getFrameFancyMenu"(): integer
"getHighlightPosFancyMenu"(): integer
"getHintFancyMenu"(): $Component
"getIsEditableFancyMenu"(): boolean
"getMaxLengthFancyMenu"(): integer
"getSuggestionFancyMenu"(): string
"getTextColorFancyMenu"(): integer
"getTextColorUneditableFancyMenu"(): integer
"invokeDeleteTextFancyMenu"(int0: integer): void
"invokeRenderHighlightFancyMenu"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, int3: integer, int4: integer): void
"setDisplayPosFancyMenu"(int0: integer): void
"setShiftPressedFancyMenu"(boolean0: boolean): void
get "borderedFancyMenu"(): boolean
get "displayPosFancyMenu"(): integer
get "formatterFancyMenu"(): $BiFunction<string, integer, $FormattedCharSequence>
get "frameFancyMenu"(): integer
get "highlightPosFancyMenu"(): integer
get "hintFancyMenu"(): $Component
get "isEditableFancyMenu"(): boolean
get "maxLengthFancyMenu"(): integer
get "suggestionFancyMenu"(): string
get "textColorFancyMenu"(): integer
get "textColorUneditableFancyMenu"(): integer
set "displayPosFancyMenu"(value: integer)
set "shiftPressedFancyMenu"(value: boolean)
}

export namespace $IMixinEditBox {
const probejs$$marker: never
}
export abstract class $IMixinEditBox$$Static implements $IMixinEditBox {
}
}

declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinAbstractWidget" {
import { $Component$$Type } from "net.minecraft.network.chat.Component"

export interface $IMixinAbstractWidget {
"getAlphaFancyMenu"(): float
"setHeightFancyMenu"(int0: integer): void
"setMessageFieldFancyMenu"(component0: $Component$$Type): void
get "alphaFancyMenu"(): float
set "heightFancyMenu"(value: integer)
set "messageFieldFancyMenu"(value: $Component$$Type)
}

export namespace $IMixinAbstractWidget {
const probejs$$marker: never
}
export abstract class $IMixinAbstractWidget$$Static implements $IMixinAbstractWidget {
}
}

declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinScreen" {
import { $GuiEventListener, $GuiEventListener$$Type } from "net.minecraft.client.gui.components.events.GuiEventListener"
import { $List } from "java.util.List"
import { $NarratableEntry } from "net.minecraft.client.gui.narration.NarratableEntry"
import { $Renderable } from "net.minecraft.client.gui.components.Renderable"

export interface $IMixinScreen {
"getChildrenFancyMenu"(): $List<$GuiEventListener>
"getNarratablesFancyMenu"(): $List<$NarratableEntry>
"getRenderablesFancyMenu"(): $List<$Renderable>
"get_initialized_FancyMenu"(): boolean
"invokeRemoveWidgetFancyMenu"(guiEventListener0: $GuiEventListener$$Type): void
"invoke_clearFocus_FancyMenu"(): void
"invoke_init_FancyMenu"(): void
get "childrenFancyMenu"(): $List<$GuiEventListener>
get "narratablesFancyMenu"(): $List<$NarratableEntry>
get "renderablesFancyMenu"(): $List<$Renderable>
get "_initialized_FancyMenu"(): boolean
}

export namespace $IMixinScreen {
const probejs$$marker: never
}
export abstract class $IMixinScreen$$Static implements $IMixinScreen {
}
}

declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinMinecraft" {
import { $ResourceLoadStateTracker } from "net.minecraft.client.ResourceLoadStateTracker"

export interface $IMixinMinecraft {
"getPausePartialTickFancyMenu"(): float
"getReloadStateTrackerFancyMenu"(): $ResourceLoadStateTracker
"openChatScreenFancyMenu"(string0: string): void
get "pausePartialTickFancyMenu"(): float
get "reloadStateTrackerFancyMenu"(): $ResourceLoadStateTracker
}

export namespace $IMixinMinecraft {
const probejs$$marker: never
}
export abstract class $IMixinMinecraft$$Static implements $IMixinMinecraft {
}
}

declare module "de.keksuccino.fancymenu.util.resource.PlayableResource" {
import { $InputStream } from "java.io.InputStream"
import { $Resource } from "de.keksuccino.fancymenu.util.resource.Resource"

export interface $PlayableResource extends $Resource {
"close"(): void
"isClosed"(): boolean
"isLoadingCompleted"(): boolean
"isLoadingFailed"(): boolean
"isPaused"(): boolean
"isPlaying"(): boolean
"isReady"(): boolean
"open"(): $InputStream
"pause"(): void
"play"(): void
"stop"(): void
"waitForLoadingCompletedOrFailed"(long0: long): void
"waitForReady"(long0: long): void
get "closed"(): boolean
get "loadingCompleted"(): boolean
get "loadingFailed"(): boolean
get "paused"(): boolean
get "playing"(): boolean
get "ready"(): boolean
}

export namespace $PlayableResource {
const probejs$$marker: never
}
export abstract class $PlayableResource$$Static implements $PlayableResource {
}
}

declare module "de.keksuccino.fancymenu.util.resource.resources.audio.PlayableResourceWithAudio" {
import { $PlayableResource } from "de.keksuccino.fancymenu.util.resource.PlayableResource"
import { $InputStream } from "java.io.InputStream"

export interface $PlayableResourceWithAudio extends $PlayableResource {
"close"(): void
"getVolume"(): float
"isClosed"(): boolean
"isLoadingCompleted"(): boolean
"isLoadingFailed"(): boolean
"isPaused"(): boolean
"isPlaying"(): boolean
"isReady"(): boolean
"open"(): $InputStream
"pause"(): void
"play"(): void
"setVolume"(float0: float): void
"stop"(): void
"waitForLoadingCompletedOrFailed"(long0: long): void
"waitForReady"(long0: long): void
get "volume"(): float
get "closed"(): boolean
get "loadingCompleted"(): boolean
get "loadingFailed"(): boolean
get "paused"(): boolean
get "playing"(): boolean
get "ready"(): boolean
set "volume"(value: float)
}

export namespace $PlayableResourceWithAudio {
const probejs$$marker: never
}
export abstract class $PlayableResourceWithAudio$$Static implements $PlayableResourceWithAudio {
}
}

declare module "de.keksuccino.konkrete.events.ScreenTickEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $ScreenTickEvent extends $Event {
constructor()

}
}

declare module "de.keksuccino.fancymenu.util.rendering.ui.widget.CustomizableWidget" {
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $RenderableResource, $RenderableResource$$Type } from "de.keksuccino.fancymenu.util.resource.RenderableResource"
import { $AbstractWidget$$Type } from "net.minecraft.client.gui.components.AbstractWidget"
import { $IAudio, $IAudio$$Type } from "de.keksuccino.fancymenu.util.resource.resources.audio.IAudio"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"
import { $CustomizableWidget$CustomBackgroundResetBehavior, $CustomizableWidget$CustomBackgroundResetBehavior$$Type } from "de.keksuccino.fancymenu.util.rendering.ui.widget.CustomizableWidget$CustomBackgroundResetBehavior"

export interface $CustomizableWidget {
"addFocusStateListenerFancyMenu"(consumer0: $Consumer$$Type<boolean>): void
"addHoverOrFocusStateListenerFancyMenu"(consumer0: $Consumer$$Type<boolean>): void
"addHoverStateListenerFancyMenu"(consumer0: $Consumer$$Type<boolean>): void
"addResetCustomizationsListenerFancyMenu"(runnable0: $Runnable$$Type): void
"getCustomBackgroundHoverFancyMenu"(): $RenderableResource
"getCustomBackgroundInactiveFancyMenu"(): $RenderableResource
"getCustomBackgroundNormalFancyMenu"(): $RenderableResource
"getCustomBackgroundResetBehaviorFancyMenu"(): $CustomizableWidget$CustomBackgroundResetBehavior
"getCustomClickSoundFancyMenu"(): $IAudio
"getCustomHeightFancyMenu"(): integer
"getCustomLabelFancyMenu"(): $Component
"getCustomWidthFancyMenu"(): integer
"getCustomXFancyMenu"(): integer
"getCustomYFancyMenu"(): integer
"getFocusStateListenersFancyMenu"(): $List<$Consumer<boolean>>
"getHoverLabelFancyMenu"(): $Component
"getHoverOrFocusStateListenersFancyMenu"(): $List<$Consumer<boolean>>
"getHoverSoundFancyMenu"(): $IAudio
"getHoverStateListenersFancyMenu"(): $List<$Consumer<boolean>>
"getLastFocusStateFancyMenu"(): boolean
"getLastHoverOrFocusStateFancyMenu"(): boolean
"getLastHoverStateFancyMenu"(): boolean
"getNineSliceCustomBackgroundBorderX_FancyMenu"(): integer
"getNineSliceCustomBackgroundBorderY_FancyMenu"(): integer
"getOriginalMessageFancyMenu"(): $Component
"getResetCustomizationsListenersFancyMenu"(): $List<$Runnable>
"isHiddenFancyMenu"(): boolean
"isNineSliceCustomBackgroundTexture_FancyMenu"(): boolean
"renderCustomBackgroundFancyMenu"(abstractWidget0: $AbstractWidget$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, int4: integer, int5: integer): boolean
"resetWidgetCustomizationsFancyMenu"(): void
"resetWidgetSizeAndPositionFancyMenu"(): void
"setCustomBackgroundHoverFancyMenu"(renderableResource0: $RenderableResource$$Type): void
"setCustomBackgroundInactiveFancyMenu"(renderableResource0: $RenderableResource$$Type): void
"setCustomBackgroundNormalFancyMenu"(renderableResource0: $RenderableResource$$Type): void
"setCustomBackgroundResetBehaviorFancyMenu"(customBackgroundResetBehavior0: $CustomizableWidget$CustomBackgroundResetBehavior$$Type): void
"setCustomClickSoundFancyMenu"(iAudio0: $IAudio$$Type): void
"setCustomHeightFancyMenu"(integer0: integer): void
"setCustomLabelFancyMenu"(component0: $Component$$Type): void
"setCustomWidthFancyMenu"(integer0: integer): void
"setCustomXFancyMenu"(integer0: integer): void
"setCustomYFancyMenu"(integer0: integer): void
"setHiddenFancyMenu"(boolean0: boolean): void
"setHoverLabelFancyMenu"(component0: $Component$$Type): void
"setHoverSoundFancyMenu"(iAudio0: $IAudio$$Type): void
"setLastFocusStateFancyMenu"(boolean0: boolean): void
"setLastHoverOrFocusStateFancyMenu"(boolean0: boolean): void
"setLastHoverStateFancyMenu"(boolean0: boolean): void
"setNineSliceBorderX_FancyMenu"(int0: integer): void
"setNineSliceBorderY_FancyMenu"(int0: integer): void
"setNineSliceCustomBackground_FancyMenu"(boolean0: boolean): void
"stopCustomClickSoundFancyMenu"(): void
"stopHoverSoundFancyMenu"(): void
"tickFocusStateListenersFancyMenu"(boolean0: boolean): void
"tickHoverOrFocusStateListenersFancyMenu"(boolean0: boolean): void
"tickHoverStateListenersFancyMenu"(boolean0: boolean): void
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
get "focusStateListenersFancyMenu"(): $List<$Consumer<boolean>>
get "hoverLabelFancyMenu"(): $Component
get "hoverOrFocusStateListenersFancyMenu"(): $List<$Consumer<boolean>>
get "hoverSoundFancyMenu"(): $IAudio
get "hoverStateListenersFancyMenu"(): $List<$Consumer<boolean>>
get "lastFocusStateFancyMenu"(): boolean
get "lastHoverOrFocusStateFancyMenu"(): boolean
get "lastHoverStateFancyMenu"(): boolean
get "nineSliceCustomBackgroundBorderX_FancyMenu"(): integer
get "nineSliceCustomBackgroundBorderY_FancyMenu"(): integer
get "originalMessageFancyMenu"(): $Component
get "resetCustomizationsListenersFancyMenu"(): $List<$Runnable>
get "hiddenFancyMenu"(): boolean
get "nineSliceCustomBackgroundTexture_FancyMenu"(): boolean
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
set "hiddenFancyMenu"(value: boolean)
set "hoverLabelFancyMenu"(value: $Component$$Type)
set "hoverSoundFancyMenu"(value: $IAudio$$Type)
set "lastFocusStateFancyMenu"(value: boolean)
set "lastHoverOrFocusStateFancyMenu"(value: boolean)
set "lastHoverStateFancyMenu"(value: boolean)
set "nineSliceBorderX_FancyMenu"(value: integer)
set "nineSliceBorderY_FancyMenu"(value: integer)
set "nineSliceCustomBackground_FancyMenu"(value: boolean)
}

export namespace $CustomizableWidget {
const probejs$$marker: never
}
export abstract class $CustomizableWidget$$Static implements $CustomizableWidget {
}
}

declare module "de.keksuccino.fancymenu.util.resource.RenderableResource" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $AspectRatio } from "de.keksuccino.fancymenu.util.rendering.AspectRatio"
import { $InputStream } from "java.io.InputStream"
import { $Resource } from "de.keksuccino.fancymenu.util.resource.Resource"

export interface $RenderableResource extends $Resource {
"close"(): void
"getAspectRatio"(): $AspectRatio
"getHeight"(): integer
"getResourceLocation"(): $ResourceLocation
"getWidth"(): integer
"isClosed"(): boolean
"isLoadingCompleted"(): boolean
"isLoadingFailed"(): boolean
"isReady"(): boolean
"open"(): $InputStream
"reset"(): void
"waitForLoadingCompletedOrFailed"(long0: long): void
"waitForReady"(long0: long): void
get "aspectRatio"(): $AspectRatio
get "height"(): integer
get "resourceLocation"(): $ResourceLocation
get "width"(): integer
get "closed"(): boolean
get "loadingCompleted"(): boolean
get "loadingFailed"(): boolean
get "ready"(): boolean
}

export namespace $RenderableResource {
const FULLY_TRANSPARENT_TEXTURE: $ResourceLocation
const MISSING_TEXTURE_LOCATION: $ResourceLocation
}
export abstract class $RenderableResource$$Static implements $RenderableResource {
static readonly "FULLY_TRANSPARENT_TEXTURE": $ResourceLocation
static readonly "MISSING_TEXTURE_LOCATION": $ResourceLocation

}
}

declare module "de.keksuccino.konkrete.events.ScreenCharTypedEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $ScreenCharTypedEvent extends $Event {
readonly "character": character
readonly "modifiers": integer

constructor(char0: character, int1: integer)
constructor()

}
}

declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinPlayerModel" {
import { $ModelPart } from "net.minecraft.client.model.geom.ModelPart"

export interface $IMixinPlayerModel {
"getCloakFancyMenu"(): $ModelPart
get "cloakFancyMenu"(): $ModelPart
}

export namespace $IMixinPlayerModel {
const probejs$$marker: never
}
export abstract class $IMixinPlayerModel$$Static implements $IMixinPlayerModel {
}
}

declare module "de.keksuccino.fancymenu.util.rendering.ui.widget.UniqueWidget" {
import { $AbstractWidget } from "net.minecraft.client.gui.components.AbstractWidget"

export interface $UniqueWidget {
"getWidgetIdentifierFancyMenu"(): string
"setWidgetIdentifierFancyMenu"(string0: string): $AbstractWidget
get "widgetIdentifierFancyMenu"(): string
set "widgetIdentifierFancyMenu"(value: string)
}

export namespace $UniqueWidget {
const probejs$$marker: never
}
export abstract class $UniqueWidget$$Static implements $UniqueWidget {
}
}

