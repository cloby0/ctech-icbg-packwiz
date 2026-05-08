declare module "journeymap.client.api.event.forge.FullscreenDisplayEvent$AddonButtonDisplayEvent" {
import { $FullscreenDisplayEvent } from "journeymap.client.api.event.forge.FullscreenDisplayEvent"
import { $ThemeButtonDisplay$$Type } from "journeymap.client.api.display.ThemeButtonDisplay"
import { $IFullscreen$$Type } from "journeymap.client.api.model.IFullscreen"

export class $FullscreenDisplayEvent$AddonButtonDisplayEvent extends $FullscreenDisplayEvent {
constructor(iFullscreen0: $IFullscreen$$Type, themeButtonDisplay1: $ThemeButtonDisplay$$Type)
constructor()

}
}

declare module "journeymap.client.api.model.WrappedEntity" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List, $List$$Type } from "java.util.List"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $Level } from "net.minecraft.world.level.Level"
import { $WeakReference } from "java.lang.ref.WeakReference"
import { $Biome } from "net.minecraft.world.level.biome.Biome"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"

export interface $WrappedEntity {
"getBiome"(): $Biome
"getChunkPos"(): $BlockPos
"getColor"(): integer
"getCustomName"(): $Component
"getDimension"(): $ResourceKey<$Level>
"getEntityIconLocation"(): $ResourceLocation
"getEntityId"(): string
"getEntityLivingRef"(): $WeakReference<$LivingEntity>
"getEntityToolTips"(): $List<$Component>
"getHeading"(): double
"getHostile"(): boolean
"getOwner"(): $Entity
"getPlayerName"(): string
"getPosition"(): $Vec3
"getProfession"(): string
"getUnderground"(): boolean
"isDisabled"(): boolean
"isInvisible"(): boolean
"isNpc"(): boolean
"isPassiveAnimal"(): boolean
"isSneaking"(): boolean
"setColor"(int0: integer): void
"setCustomName"(component0: $Component$$Type): void
"setCustomName"(string0: string): void
"setDisable"(boolean0: boolean): void
"setEntityIconLocation"(resourceLocation0: $ResourceLocation$$Type): void
"setEntityToolTips"(list0: $List$$Type<$Component$$Type>): void
get "biome"(): $Biome
get "chunkPos"(): $BlockPos
get "color"(): integer
get "customName"(): $Component
get "dimension"(): $ResourceKey<$Level>
get "entityIconLocation"(): $ResourceLocation
get "entityId"(): string
get "entityLivingRef"(): $WeakReference<$LivingEntity>
get "entityToolTips"(): $List<$Component>
get "heading"(): double
get "hostile"(): boolean
get "owner"(): $Entity
get "playerName"(): string
get "position"(): $Vec3
get "profession"(): string
get "underground"(): boolean
get "disabled"(): boolean
get "invisible"(): boolean
get "npc"(): boolean
get "passiveAnimal"(): boolean
get "sneaking"(): boolean
set "color"(value: integer)
set "customName"(value: $Component$$Type)
set "customName"(value: string)
set "disable"(value: boolean)
set "entityIconLocation"(value: $ResourceLocation$$Type)
set "entityToolTips"(value: $List$$Type<$Component$$Type>)
}

export namespace $WrappedEntity {
const probejs$$marker: never
}
export abstract class $WrappedEntity$$Static implements $WrappedEntity {
}
}

declare module "journeymap.client.api.display.IWaypointDisplay" {
import { $MapImage } from "journeymap.client.api.model.MapImage"

export interface $IWaypointDisplay {
"getBackgroundColor"(): integer
"getColor"(): integer
"getDisplayDimensions"(): string[]
"getIcon"(): $MapImage
get "backgroundColor"(): integer
get "color"(): integer
get "displayDimensions"(): string[]
get "icon"(): $MapImage
}

export namespace $IWaypointDisplay {
const probejs$$marker: never
}
export abstract class $IWaypointDisplay$$Static implements $IWaypointDisplay {
}
}

declare module "journeymap.client.api.model.IFullscreen" {
import { $Minecraft } from "net.minecraft.client.Minecraft"
import { $Screen } from "net.minecraft.client.gui.screens.Screen"
import { $UIState } from "journeymap.client.api.util.UIState"
import { $Context$MapType$$Type } from "journeymap.client.api.display.Context$MapType"
import { $Level } from "net.minecraft.world.level.Level"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export interface $IFullscreen {
"centerOn"(double0: double, double1: double): void
"close"(): void
"getMinecraft"(): $Minecraft
"getScreen"(): $Screen
"getUiState"(): $UIState
"toggleMapType"(): void
"updateMapType"(mapType0: $Context$MapType$$Type, integer1: integer, resourceKey2: $ResourceKey$$Type<$Level>): void
"zoomIn"(): void
"zoomOut"(): void
get "minecraft"(): $Minecraft
get "screen"(): $Screen
get "uiState"(): $UIState
}

export namespace $IFullscreen {
const probejs$$marker: never
}
export abstract class $IFullscreen$$Static implements $IFullscreen {
}
}

declare module "journeymap.client.api.display.IThemeButton" {
import { $Button } from "net.minecraft.client.gui.components.Button"

export interface $IThemeButton {
"getButton"(): $Button
"getToggled"(): boolean
"m_142518_"(): boolean
"setDrawButton"(boolean0: boolean): void
"setEnabled"(boolean0: boolean): void
"setLabels"(string0: string, string1: string): void
"setStaysOn"(boolean0: boolean): void
"setToggled"(boolean0: boolean): void
"setTooltip"(...string0s: string[]): void
"toggle"(): void
get "button"(): $Button
get "toggled"(): boolean
set "drawButton"(value: boolean)
set "enabled"(value: boolean)
set "staysOn"(value: boolean)
set "toggled"(value: boolean)
set "tooltip"(value: string[])
}

export namespace $IThemeButton {
const probejs$$marker: never
}
export abstract class $IThemeButton$$Static implements $IThemeButton {
}
}

declare module "journeymap.client.api.event.forge.EntityRadarUpdateEvent" {
import { $WrappedEntity, $WrappedEntity$$Type } from "journeymap.client.api.model.WrappedEntity"
import { $UIState, $UIState$$Type } from "journeymap.client.api.util.UIState"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $EntityRadarUpdateEvent$EntityType, $EntityRadarUpdateEvent$EntityType$$Type } from "journeymap.client.api.event.forge.EntityRadarUpdateEvent$EntityType"

export class $EntityRadarUpdateEvent extends $Event {
constructor(uIState0: $UIState$$Type, entityType1: $EntityRadarUpdateEvent$EntityType$$Type, wrappedEntity2: $WrappedEntity$$Type)
constructor()

public "getActiveUiState"(): $UIState
public "getType"(): $EntityRadarUpdateEvent$EntityType
public "getWrappedEntity"(): $WrappedEntity
get "activeUiState"(): $UIState
get "type"(): $EntityRadarUpdateEvent$EntityType
get "wrappedEntity"(): $WrappedEntity
}
}

declare module "journeymap.client.api.display.Waypoint" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $WaypointGroup, $WaypointGroup$$Type } from "journeymap.client.api.display.WaypointGroup"
import { $WaypointBase } from "journeymap.client.api.model.WaypointBase"
import { $Vector3d } from "org.joml.Vector3d"
import { $Level } from "net.minecraft.world.level.Level"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export class $Waypoint extends $WaypointBase<$Waypoint> {
static readonly "VERSION": double

constructor(string0: string, string1: string, resourceKey2: $ResourceKey$$Type<$Level>, blockPos3: $BlockPos$$Type)
constructor(string0: string, string1: string, string2: string, resourceKey3: $ResourceKey$$Type<$Level>, blockPos4: $BlockPos$$Type)
constructor(string0: string, string1: string, string2: string, blockPos3: $BlockPos$$Type)
constructor(string0: string, string1: string, string2: string, string3: string, blockPos4: $BlockPos$$Type)

public "getCenteredVec"(string0: string): $Vector3d
public "getDimension"(): string
public "getGroup"(): $WaypointGroup
public "getPosition"(): $BlockPos
public "getPosition"(string0: string): $BlockPos
public "getVec"(string0: string): $Vector3d
public "isEditable"(): boolean
public "isEnabled"(): boolean
public "isPersistent"(): boolean
public "isTeleportReady"(string0: string): boolean
public "setEditable"(boolean0: boolean): $Waypoint
public "setEnabled"(boolean0: boolean): void
public "setGroup"(waypointGroup0: $WaypointGroup$$Type): $Waypoint
public "setPersistent"(boolean0: boolean): $Waypoint
public "setPosition"(string0: string, blockPos1: $BlockPos$$Type): $Waypoint
get "dimension"(): string
get "group"(): $WaypointGroup
get "position"(): $BlockPos
get "editable"(): boolean
get "enabled"(): boolean
get "persistent"(): boolean
set "editable"(value: boolean)
set "enabled"(value: boolean)
set "group"(value: $WaypointGroup$$Type)
set "persistent"(value: boolean)
}
}

declare module "journeymap.client.api.model.WaypointBase" {
import { $Displayable } from "journeymap.client.api.display.Displayable"
import { $MapImage, $MapImage$$Type } from "journeymap.client.api.model.MapImage"
import { $IWaypointDisplay } from "journeymap.client.api.display.IWaypointDisplay"

export class $WaypointBase<T extends $WaypointBase = $WaypointBase> extends $Displayable implements $IWaypointDisplay {
public "clearBackgroundColor"(): T
public "clearColor"(): T
public "clearDisplayDimensions"(): T
public "clearIcon"(): T
public "getBackgroundColor"(): integer
public "getColor"(): integer
public "getDisplayDimensions"(): string[]
public "getIcon"(): $MapImage
public "getName"(): string
public "hasBackgroundColor"(): boolean
public "hasColor"(): boolean
public "hasDisplayDimensions"(): boolean
public "hasIcon"(): boolean
public "isDirty"(): boolean
public "isDisplayed"(string0: string): boolean
public "setBackgroundColor"(int0: integer): T
public "setColor"(int0: integer): T
public "setDirty"(boolean0: boolean): T
public "setDirty"(): T
public "setDisplayDimensions"(...string0s: string[]): T
public "setDisplayed"(string0: string, boolean1: boolean): void
public "setIcon"(mapImage0: $MapImage$$Type): T
public "setName"(string0: string): T
get "backgroundColor"(): integer
get "color"(): integer
get "displayDimensions"(): string[]
get "icon"(): $MapImage
get "name"(): string
get "dirty"(): boolean
set "backgroundColor"(value: integer)
set "color"(value: integer)
set "dirty"(value: boolean)
set "displayDimensions"(value: string[])
set "icon"(value: $MapImage$$Type)
set "name"(value: string)
}
}

declare module "journeymap.client.api.display.CustomToolBarBuilder" {
import { $IThemeToolBar } from "journeymap.client.api.display.IThemeToolBar"
import { $IThemeButton, $IThemeButton$$Type } from "journeymap.client.api.display.IThemeButton"
import { $IThemeButton$Action$$Type } from "journeymap.client.api.display.IThemeButton$Action"

export interface $CustomToolBarBuilder {
"getNewToolbar"(...iThemeButton0s: $IThemeButton$$Type[]): $IThemeToolBar
"getThemeButton"(string0: string, string1: string, action2: $IThemeButton$Action$$Type): $IThemeButton
"getThemeButton"(string0: string, string1: string, string2: string, action3: $IThemeButton$Action$$Type): $IThemeButton
"getThemeToggleButton"(string0: string, string1: string, action2: $IThemeButton$Action$$Type): $IThemeButton
"getThemeToggleButton"(string0: string, string1: string, string2: string, action3: $IThemeButton$Action$$Type): $IThemeButton
}

export namespace $CustomToolBarBuilder {
const probejs$$marker: never
}
export abstract class $CustomToolBarBuilder$$Static implements $CustomToolBarBuilder {
}
}

declare module "journeymap.client.api.event.forge.FullscreenDisplayEvent$MapTypeButtonDisplayEvent" {
import { $FullscreenDisplayEvent } from "journeymap.client.api.event.forge.FullscreenDisplayEvent"
import { $ThemeButtonDisplay$$Type } from "journeymap.client.api.display.ThemeButtonDisplay"
import { $IFullscreen$$Type } from "journeymap.client.api.model.IFullscreen"

/** @deprecated */
export class $FullscreenDisplayEvent$MapTypeButtonDisplayEvent extends $FullscreenDisplayEvent {
constructor(iFullscreen0: $IFullscreen$$Type, themeButtonDisplay1: $ThemeButtonDisplay$$Type)
constructor()

}
}

declare module "journeymap.client.api.event.forge.PopupMenuEvent$FullscreenPopupMenuEvent" {
import { $IFullscreen$$Type } from "journeymap.client.api.model.IFullscreen"
import { $ModPopupMenu$$Type } from "journeymap.client.api.display.ModPopupMenu"
import { $PopupMenuEvent } from "journeymap.client.api.event.forge.PopupMenuEvent"

export class $PopupMenuEvent$FullscreenPopupMenuEvent extends $PopupMenuEvent {
constructor(modPopupMenu0: $ModPopupMenu$$Type, iFullscreen1: $IFullscreen$$Type)
constructor()

}
}

declare module "journeymap.client.api.event.forge.FullscreenDisplayEvent$CustomToolbarEvent" {
import { $CustomToolBarBuilder, $CustomToolBarBuilder$$Type } from "journeymap.client.api.display.CustomToolBarBuilder"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $IFullscreen, $IFullscreen$$Type } from "journeymap.client.api.model.IFullscreen"

/** @deprecated */
export class $FullscreenDisplayEvent$CustomToolbarEvent extends $Event {
constructor()
constructor(iFullscreen0: $IFullscreen$$Type, customToolBarBuilder1: $CustomToolBarBuilder$$Type)

public "getCustomToolBarBuilder"(): $CustomToolBarBuilder
public "getFullscreen"(): $IFullscreen
get "customToolBarBuilder"(): $CustomToolBarBuilder
get "fullscreen"(): $IFullscreen
}
}

declare module "journeymap.client.api.event.forge.PopupMenuEvent$WaypointPopupMenuEvent" {
import { $Waypoint, $Waypoint$$Type } from "journeymap.client.api.display.Waypoint"
import { $IFullscreen$$Type } from "journeymap.client.api.model.IFullscreen"
import { $ModPopupMenu$$Type } from "journeymap.client.api.display.ModPopupMenu"
import { $PopupMenuEvent } from "journeymap.client.api.event.forge.PopupMenuEvent"

export class $PopupMenuEvent$WaypointPopupMenuEvent extends $PopupMenuEvent {
constructor(modPopupMenu0: $ModPopupMenu$$Type, iFullscreen1: $IFullscreen$$Type, waypoint2: $Waypoint$$Type)
constructor()

public "getWaypoint"(): $Waypoint
get "waypoint"(): $Waypoint
}
}

declare module "journeymap.client.api.event.forge.EntityRadarUpdateEvent$EntityType" {
import { $Enum } from "java.lang.Enum"

export class $EntityRadarUpdateEvent$EntityType extends $Enum<$EntityRadarUpdateEvent$EntityType> {
static readonly "MOB": $EntityRadarUpdateEvent$EntityType
static readonly "PLAYER": $EntityRadarUpdateEvent$EntityType

public static "valueOf"(string0: string): $EntityRadarUpdateEvent$EntityType
public static "values"(): $EntityRadarUpdateEvent$EntityType[]
}
}

declare module "journeymap.client.api.display.DisplayType" {
import { $Displayable, $Displayable$$Type } from "journeymap.client.api.display.Displayable"
import { $Enum } from "java.lang.Enum"
import { $Class, $Class$$Type } from "java.lang.Class"

export class $DisplayType extends $Enum<$DisplayType> {
static readonly "Image": $DisplayType
static readonly "Marker": $DisplayType
static readonly "Polygon": $DisplayType
static readonly "Waypoint": $DisplayType
static readonly "WaypointGroup": $DisplayType

public "getImplClass"(): $Class<$Displayable>
public static "of"(class0: $Class$$Type<$Displayable$$Type>): $DisplayType
public static "valueOf"(string0: string): $DisplayType
public static "values"(): $DisplayType[]
get "implClass"(): $Class<$Displayable>
}
}

declare module "journeymap.client.api.util.UIState" {
import { $AABB, $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Context$UI, $Context$UI$$Type } from "journeymap.client.api.display.Context$UI"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $Context$MapType, $Context$MapType$$Type } from "journeymap.client.api.display.Context$MapType"
import { $Level } from "net.minecraft.world.level.Level"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Rectangle2D$Double, $Rectangle2D$Double$$Type } from "java.awt.geom.Rectangle2D$Double"

export class $UIState {
readonly "active": boolean
readonly "blockBounds": $AABB
readonly "blockSize": double
readonly "chunkY": integer
readonly "dimension": $ResourceKey<$Level>
readonly "displayBounds": $Rectangle2D$Double
readonly "mapCenter": $BlockPos
readonly "mapType": $Context$MapType
readonly "ui": $Context$UI
readonly "zoom": integer

constructor(uI0: $Context$UI$$Type, boolean1: boolean, resourceKey2: $ResourceKey$$Type<$Level>, int3: integer, mapType4: $Context$MapType$$Type, blockPos5: $BlockPos$$Type, integer6: integer, aABB7: $AABB$$Type, double8: $Rectangle2D$Double$$Type)

public static "newInactive"(uIState0: $UIState$$Type): $UIState
public static "newInactive"(uI0: $Context$UI$$Type, minecraft1: $Minecraft$$Type): $UIState
}
}

declare module "journeymap.client.api.display.ModPopupMenu$Action" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"

export interface $ModPopupMenu$Action {
"doAction"(blockPos0: $BlockPos$$Type): void
}

export namespace $ModPopupMenu$Action {
const probejs$$marker: never
}
export abstract class $ModPopupMenu$Action$$Static implements $ModPopupMenu$Action {
}
}

declare module "journeymap.client.api.model.MapImage" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $NativeImage, $NativeImage$$Type } from "com.mojang.blaze3d.platform.NativeImage"

export class $MapImage {
constructor(nativeImage0: $NativeImage$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, float6: float)
constructor(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer)
constructor(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, float6: float)
constructor(nativeImage0: $NativeImage$$Type)

public "centerAnchors"(): $MapImage
public "getAnchorX"(): double
public "getAnchorY"(): double
public "getColor"(): integer
public "getDisplayHeight"(): double
public "getDisplayWidth"(): double
public "getImage"(): $NativeImage
public "getImageLocation"(): $ResourceLocation
public "getOpacity"(): float
public "getRotation"(): integer
public "getTextureHeight"(): integer
public "getTextureWidth"(): integer
public "getTextureX"(): integer
public "getTextureY"(): integer
public "setAnchorX"(double0: double): $MapImage
public "setAnchorY"(double0: double): $MapImage
public "setColor"(int0: integer): $MapImage
public "setDisplayHeight"(double0: double): $MapImage
public "setDisplayWidth"(double0: double): $MapImage
public "setOpacity"(float0: float): $MapImage
public "setRotation"(int0: integer): $MapImage
get "anchorX"(): double
get "anchorY"(): double
get "color"(): integer
get "displayHeight"(): double
get "displayWidth"(): double
get "image"(): $NativeImage
get "imageLocation"(): $ResourceLocation
get "opacity"(): float
get "rotation"(): integer
get "textureHeight"(): integer
get "textureWidth"(): integer
get "textureX"(): integer
get "textureY"(): integer
set "anchorX"(value: double)
set "anchorY"(value: double)
set "color"(value: integer)
set "displayHeight"(value: double)
set "displayWidth"(value: double)
set "opacity"(value: float)
set "rotation"(value: integer)
}
}

declare module "journeymap.client.api.event.forge.FullscreenDisplayEvent" {
import { $ThemeButtonDisplay } from "journeymap.client.api.display.ThemeButtonDisplay"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $IFullscreen } from "journeymap.client.api.model.IFullscreen"

export class $FullscreenDisplayEvent extends $Event {
constructor()

public "getFullscreen"(): $IFullscreen
public "getThemeButtonDisplay"(): $ThemeButtonDisplay
get "fullscreen"(): $IFullscreen
get "themeButtonDisplay"(): $ThemeButtonDisplay
}
}

declare module "journeymap.client.api.event.forge.PopupMenuEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $PopupMenuEvent$Layer, $PopupMenuEvent$Layer$$Type } from "journeymap.client.api.event.forge.PopupMenuEvent$Layer"
import { $IFullscreen, $IFullscreen$$Type } from "journeymap.client.api.model.IFullscreen"
import { $ModPopupMenu, $ModPopupMenu$$Type } from "journeymap.client.api.display.ModPopupMenu"

export class $PopupMenuEvent extends $Event {
constructor(modPopupMenu0: $ModPopupMenu$$Type, layer1: $PopupMenuEvent$Layer$$Type, iFullscreen2: $IFullscreen$$Type)
constructor()

public "getFullscreen"(): $IFullscreen
public "getLayer"(): $PopupMenuEvent$Layer
public "getPopupMenu"(): $ModPopupMenu
get "fullscreen"(): $IFullscreen
get "layer"(): $PopupMenuEvent$Layer
get "popupMenu"(): $ModPopupMenu
}
}

declare module "journeymap.client.api.display.Context$MapType" {
import { $Enum } from "java.lang.Enum"
import { $Context } from "journeymap.client.api.display.Context"

export class $Context$MapType extends $Enum<$Context$MapType> implements $Context {
static readonly "Any": $Context$MapType
static readonly "Biome": $Context$MapType
static readonly "Day": $Context$MapType
static readonly "Night": $Context$MapType
static readonly "Topo": $Context$MapType
static readonly "Underground": $Context$MapType

public static "valueOf"(string0: string): $Context$MapType
public static "values"(): $Context$MapType[]
}
}

declare module "journeymap.client.api.display.Displayable" {
import { $DisplayType } from "journeymap.client.api.display.DisplayType"
import { $Comparable } from "java.lang.Comparable"

export class $Displayable implements $Comparable<$Displayable> {
public static "clampOpacity"(float0: float): float
public static "clampRGB"(int0: integer): integer
public "compareTo"(displayable0: $Displayable$$Type): integer
public "getDisplayOrder"(): integer
public "getDisplayType"(): $DisplayType
public "getGuid"(): string
public "getId"(): string
public "getModId"(): string
get "displayOrder"(): integer
get "displayType"(): $DisplayType
get "guid"(): string
get "id"(): string
get "modId"(): string
}
}

declare module "journeymap.client.api.display.Context$UI" {
import { $Enum } from "java.lang.Enum"
import { $Context } from "journeymap.client.api.display.Context"

export class $Context$UI extends $Enum<$Context$UI> implements $Context {
static readonly "Any": $Context$UI
static readonly "Fullscreen": $Context$UI
static readonly "Minimap": $Context$UI
static readonly "Webmap": $Context$UI

public static "valueOf"(string0: string): $Context$UI
public static "values"(): $Context$UI[]
}
}

declare module "journeymap.client.api.event.forge.PopupMenuEvent$Layer" {
import { $Enum } from "java.lang.Enum"

export class $PopupMenuEvent$Layer extends $Enum<$PopupMenuEvent$Layer> {
static readonly "FULLSCREEN": $PopupMenuEvent$Layer
static readonly "WAYPOINT": $PopupMenuEvent$Layer

public static "valueOf"(string0: string): $PopupMenuEvent$Layer
public static "values"(): $PopupMenuEvent$Layer[]
}
}

declare module "journeymap.client.api.display.IThemeButton$Action" {
import { $IThemeButton$$Type } from "journeymap.client.api.display.IThemeButton"

export interface $IThemeButton$Action {
"doAction"(iThemeButton0: $IThemeButton$$Type): void
}

export namespace $IThemeButton$Action {
const probejs$$marker: never
}
export abstract class $IThemeButton$Action$$Static implements $IThemeButton$Action {
}
}

declare module "journeymap.client.api.display.Context" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Context {
}

export namespace $Context {
const probejs$$marker: never
}
export abstract class $Context$$Static implements $Context {
}
}

declare module "journeymap.client.api.display.ModPopupMenu" {
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $ModPopupMenu$Action$$Type } from "journeymap.client.api.display.ModPopupMenu$Action"

export interface $ModPopupMenu {
"addMenuItem"(string0: string, action1: $ModPopupMenu$Action$$Type): $ModPopupMenu
"addMenuItemScreen"(string0: string, screen1: $Screen$$Type): $ModPopupMenu
"createSubItemList"(string0: string): $ModPopupMenu
}

export namespace $ModPopupMenu {
const probejs$$marker: never
}
export abstract class $ModPopupMenu$$Static implements $ModPopupMenu {
}
}

declare module "journeymap.client.api.display.WaypointGroup" {
import { $WaypointBase } from "journeymap.client.api.model.WaypointBase"
import { $IWaypointDisplay$$Type } from "journeymap.client.api.display.IWaypointDisplay"

export class $WaypointGroup extends $WaypointBase<$WaypointGroup> {
static readonly "VERSION": double

constructor(string0: string, string1: string)
constructor(string0: string, string1: string, string2: string)

public "setDefaultDisplay"(iWaypointDisplay0: $IWaypointDisplay$$Type): $WaypointGroup
public "setDisplayOrder"(int0: integer): $WaypointGroup
set "defaultDisplay"(value: $IWaypointDisplay$$Type)
set "displayOrder"(value: integer)
}
}

declare module "journeymap.client.api.display.ThemeButtonDisplay" {
import { $IThemeButton } from "journeymap.client.api.display.IThemeButton"
import { $IThemeButton$Action$$Type } from "journeymap.client.api.display.IThemeButton$Action"

export interface $ThemeButtonDisplay {
"addThemeButton"(string0: string, string1: string, string2: string, action3: $IThemeButton$Action$$Type): $IThemeButton
"addThemeButton"(string0: string, string1: string, action2: $IThemeButton$Action$$Type): $IThemeButton
"addThemeToggleButton"(string0: string, string1: string, boolean2: boolean, action3: $IThemeButton$Action$$Type): $IThemeButton
"addThemeToggleButton"(string0: string, string1: string, string2: string, boolean3: boolean, action4: $IThemeButton$Action$$Type): $IThemeButton
}

export namespace $ThemeButtonDisplay {
const probejs$$marker: never
}
export abstract class $ThemeButtonDisplay$$Static implements $ThemeButtonDisplay {
}
}

declare module "journeymap.client.api.display.IThemeToolBar" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IThemeToolBar {
"getBottomY"(): integer
"getCenterX"(): integer
"getHeight"(): integer
"getMiddleY"(): integer
"getRightX"(): integer
"getWidth"(): integer
"getX"(): integer
"getY"(): integer
"isMouseOver"(): boolean
"setLayoutCenteredHorizontal"(int0: integer, int1: integer, int2: integer, boolean3: boolean): void
"setLayoutCenteredVertical"(int0: integer, int1: integer, int2: integer, boolean3: boolean): void
"setLayoutDistributedHorizontal"(int0: integer, int1: integer, int2: integer, boolean3: boolean): void
"setLayoutHorizontal"(int0: integer, int1: integer, int2: integer, boolean3: boolean): void
"setLayoutVertical"(int0: integer, int1: integer, int2: integer, boolean3: boolean): void
"setPosition"(int0: integer, int1: integer): void
"setReverse"(): void
get "bottomY"(): integer
get "centerX"(): integer
get "height"(): integer
get "middleY"(): integer
get "rightX"(): integer
get "width"(): integer
get "x"(): integer
get "y"(): integer
get "mouseOver"(): boolean
}

export namespace $IThemeToolBar {
const probejs$$marker: never
}
export abstract class $IThemeToolBar$$Static implements $IThemeToolBar {
}
}

