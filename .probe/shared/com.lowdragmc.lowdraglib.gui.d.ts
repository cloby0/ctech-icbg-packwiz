declare module "com.lowdragmc.lowdraglib.gui.editor.ILDLRegister" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Component } from "net.minecraft.network.chat.Component"

export interface $ILDLRegister {
"getChatComponent"(): $Component
"getRegisterUI"(): $LDLRegister
"getTranslateKey"(): string
"group"(): string
"isLDLRegister"(): boolean
"name"(): string
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}

export namespace $ILDLRegister {
const probejs$$marker: never
}
export abstract class $ILDLRegister$$Static implements $ILDLRegister {
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.ImageWidget" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $IGuiTexture, $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $ImageWidget extends $Widget implements $IConfigurableWidget {
constructor()
constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, area: $IGuiTexture$$Type)
constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, textureSupplier: $Supplier$$Type<$IGuiTexture>)

public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "canDragIn"(dragging: any): boolean
public "deserializeInnerNBT"(nbt: $CompoundTag$$Type): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getBorder"(): integer
public "getBorderColor"(): integer
public "getChatComponent"(): $Component
public "getImage"(): $IGuiTexture
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "initTemplate"(): void
public "isLDLRegister"(): boolean
public "name"(): string
public "serializeInnerNBT"(): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setBorder"(border: integer, color: integer): $ImageWidget
public "setImage"(textureSupplier: $Supplier$$Type<$IGuiTexture>): $ImageWidget
public "setImage"(area: $IGuiTexture$$Type): $ImageWidget
public "widget"(): $Widget
get "border"(): integer
get "borderColor"(): integer
get "chatComponent"(): $Component
get "image"(): $IGuiTexture
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
set "image"(value: $Supplier$$Type<$IGuiTexture>)
set "image"(value: $IGuiTexture$$Type)
}
}

declare module "com.lowdragmc.lowdraglib.gui.graphprocessor.data.parameter.ExposedParameter" {
import { $List, $List$$Type } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $IPersistedSerializable } from "com.lowdragmc.lowdraglib.syncdata.IPersistedSerializable"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $ExposedParameter$ParameterAccessor, $ExposedParameter$ParameterAccessor$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.parameter.ExposedParameter$ParameterAccessor"

export class $ExposedParameter<T = any> implements $IPersistedSerializable {
readonly "identifier": string
readonly "type": $Class<T>

constructor(identifier: string, type: $Class$$Type<T>)

public "deserializeNBT"(tag: $CompoundTag$$Type): void
public "getAccessor"(): $ExposedParameter$ParameterAccessor
public "getDisplayName"(): string
public "getTips"(): $List<string>
public "getValue"(): T
public "setAccessor"(accessor: $ExposedParameter$ParameterAccessor$$Type): $ExposedParameter<T>
public "setDisplayName"(displayName: string): $ExposedParameter<T>
public "setTips"(tips: $List$$Type<string>): $ExposedParameter<T>
public "setValue"(value: any): void
get "accessor"(): $ExposedParameter$ParameterAccessor
get "displayName"(): string
get "tips"(): $List<string>
get "value"(): T
set "accessor"(value: $ExposedParameter$ParameterAccessor$$Type)
set "displayName"(value: string)
set "tips"(value: $List$$Type<string>)
set "value"(value: any)
}
}

declare module "com.lowdragmc.lowdraglib.gui.factory.HeldItemUIFactory$IHeldItemUIHolder" {
import { $ModularUI } from "com.lowdragmc.lowdraglib.gui.modular.ModularUI"
import { $HeldItemUIFactory$HeldItemHolder$$Type } from "com.lowdragmc.lowdraglib.gui.factory.HeldItemUIFactory$HeldItemHolder"
import { $IUIHolder$ItemUI } from "com.lowdragmc.lowdraglib.gui.modular.IUIHolder$ItemUI"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

/** @deprecated */
export interface $HeldItemUIFactory$IHeldItemUIHolder extends $IUIHolder$ItemUI {
"createUI"(player0: $Player$$Type, heldItemHolder1: $HeldItemUIFactory$HeldItemHolder$$Type): $ModularUI
}

export namespace $HeldItemUIFactory$IHeldItemUIHolder {
const probejs$$marker: never
}
export abstract class $HeldItemUIFactory$IHeldItemUIHolder$$Static implements $HeldItemUIFactory$IHeldItemUIHolder {
}
}

declare module "com.lowdragmc.lowdraglib.gui.texture.ProgressTexture" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $TransformTexture } from "com.lowdragmc.lowdraglib.gui.texture.TransformTexture"
import { $ProgressTexture$FillDirection, $ProgressTexture$FillDirection$$Type } from "com.lowdragmc.lowdraglib.gui.texture.ProgressTexture$FillDirection"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IGuiTexture, $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"

export class $ProgressTexture extends $TransformTexture {
constructor(emptyBarArea: $IGuiTexture$$Type, filledBarArea: $IGuiTexture$$Type)
constructor()

public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "copy"(): $IGuiTexture
public "createPreview"(father: $ConfiguratorGroup$$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IGuiTexture
public "getChatComponent"(): $Component
public "getEmptyBarArea"(): $IGuiTexture
public "getFillDirection"(): $ProgressTexture$FillDirection
public "getFilledBarArea"(): $IGuiTexture
public "getProgress"(): double
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "isSmoothProgress"(): boolean
public "name"(): string
public static "serializeWrapper"(texture: $IGuiTexture$$Type): $CompoundTag
public "setColor"(color: integer): $IGuiTexture
public "setFillDirection"(fillDirection: $ProgressTexture$FillDirection$$Type): $ProgressTexture
public "setProgress"(progress: double): void
public "setTexture"(emptyBarArea: $IGuiTexture$$Type, filledBarArea: $IGuiTexture$$Type): $ProgressTexture
public "setUIResource"(texturesResource: $Resource$$Type<$IGuiTexture$$Type>): void
public "transform"(xOffset: integer, yOffset: integer): $IGuiTexture
/** Client only, do not use in server scripts */
public "updateTick"(): void
get "chatComponent"(): $Component
get "emptyBarArea"(): $IGuiTexture
get "fillDirection"(): $ProgressTexture$FillDirection
get "filledBarArea"(): $IGuiTexture
get "progress"(): double
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
get "smoothProgress"(): boolean
set "color"(value: integer)
set "fillDirection"(value: $ProgressTexture$FillDirection$$Type)
set "progress"(value: double)
set "uIResource"(value: $Resource$$Type<$IGuiTexture$$Type>)
}
}

declare module "com.lowdragmc.lowdraglib.gui.editor.ui.Editor$HistoryItem" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Record } from "java.lang.Record"

export class $Editor$HistoryItem extends $Record {
constructor(name: string, date: $CompoundTag$$Type, source: any)

public "date"(): $CompoundTag
public "name"(): string
public "source"(): any
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.TankWidget" {
import { $IFluidTransfer, $IFluidTransfer$$Type } from "com.lowdragmc.lowdraglib.side.fluid.IFluidTransfer"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $ProgressTexture$FillDirection$$Type } from "com.lowdragmc.lowdraglib.gui.texture.ProgressTexture$FillDirection"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $ResourceBorderTexture } from "com.lowdragmc.lowdraglib.gui.texture.ResourceBorderTexture"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $IRecipeIngredientSlot } from "com.lowdragmc.lowdraglib.gui.ingredient.IRecipeIngredientSlot"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $List, $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $IngredientIO, $IngredientIO$$Type } from "com.lowdragmc.lowdraglib.jei.IngredientIO"
import { $FluidStack, $FluidStack$$Type } from "com.lowdragmc.lowdraglib.side.fluid.FluidStack"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $IFluidStorage$$Type } from "com.lowdragmc.lowdraglib.side.fluid.IFluidStorage"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $TankWidget extends $Widget implements $IRecipeIngredientSlot, $IConfigurableWidget {
static readonly "FLUID_SLOT_TEXTURE": $ResourceBorderTexture

constructor(fluidTank: $IFluidStorage$$Type, x: integer, y: integer, allowClickContainerFilling: boolean, allowClickContainerEmptying: boolean)
constructor(fluidTank: $IFluidStorage$$Type, x: integer, y: integer, width: integer, height: integer, allowClickContainerFilling: boolean, allowClickContainerEmptying: boolean)
constructor(fluidTank: $IFluidTransfer$$Type, tank: integer, x: integer, y: integer, allowClickContainerFilling: boolean, allowClickContainerEmptying: boolean)
constructor(fluidTank: $IFluidTransfer$$Type, tank: integer, x: integer, y: integer, width: integer, height: integer, allowClickContainerFilling: boolean, allowClickContainerEmptying: boolean)
constructor()

public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "canDragIn"(dragging: any): boolean
public "deserializeInnerNBT"(nbt: $CompoundTag$$Type): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getAdditionalToolTips"(list: $List$$Type<$Component$$Type>): $List<$Component>
public "getChatComponent"(): $Component
public "getFluid"(): $FluidStack
public "getFluidTank"(): $IFluidTransfer
public "getFullTooltipTexts"(): $List<$Component>
public "getIngredientIO"(): $IngredientIO
public "getLastFluidInTank"(): $FluidStack
public "getLastTankCapacity"(): long
public "getRegisterUI"(): $LDLRegister
public "getTank"(): integer
public "getTranslateKey"(): string
public "getXEIChance"(): float
public "getXEICurrentIngredient"(): any
public "getXEIIngredientOverMouse"(mouseX: double, mouseY: double): any
public "getXEIIngredients"(): $List<any>
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "initTemplate"(): void
public "isLDLRegister"(): boolean
public "name"(): string
public "self"(): $Widget
public "serializeInnerNBT"(): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setAllowClickDrained"(allowClickDrained: boolean): $TankWidget
public "setAllowClickFilled"(allowClickFilled: boolean): $TankWidget
public "setBackground"(background: $IGuiTexture$$Type): $TankWidget
public "setChangeListener"(changeListener: $Runnable$$Type): $TankWidget
public "setClientSideWidget"(): $TankWidget
public "setDrawHoverOverlay"(drawHoverOverlay: boolean): $TankWidget
public "setDrawHoverTips"(drawHoverTips: boolean): $TankWidget
public "setFillDirection"(fillDirection: $ProgressTexture$FillDirection$$Type): $TankWidget
public "setFluid"(fluidStack: $FluidStack$$Type, notify: boolean): $TankWidget
public "setFluid"(fluidStack: $FluidStack$$Type): $TankWidget
public "setFluidTank"(fluidTank: $IFluidStorage$$Type): $TankWidget
public "setFluidTank"(fluidTank: $IFluidTransfer$$Type, tank: integer): $TankWidget
public "setIngredientIO"(ingredientIO: $IngredientIO$$Type): $TankWidget
public "setOnAddedTooltips"(onAddedTooltips: $BiConsumer$$Type<$TankWidget$$Type, $List$$Type<$Component$$Type>>): $TankWidget
public "setShowAmount"(showAmount: boolean): $TankWidget
public "setXEIChance"(XEIChance: float): $TankWidget
public "widget"(): $Widget
get "drawHoverOverlay"(): boolean
set "drawHoverOverlay"(value: boolean)
get "chatComponent"(): $Component
get "fluid"(): $FluidStack
get "fluidTank"(): $IFluidTransfer
get "fullTooltipTexts"(): $List<$Component>
get "ingredientIO"(): $IngredientIO
get "lastFluidInTank"(): $FluidStack
get "lastTankCapacity"(): long
get "registerUI"(): $LDLRegister
get "tank"(): integer
get "translateKey"(): string
get "xEIChance"(): float
get "xEICurrentIngredient"(): any
get "xEIIngredients"(): $List<any>
get "lDLRegister"(): boolean
set "allowClickDrained"(value: boolean)
set "allowClickFilled"(value: boolean)
set "background"(value: $IGuiTexture$$Type)
set "changeListener"(value: $Runnable$$Type)
set "drawHoverTips"(value: boolean)
set "fillDirection"(value: $ProgressTexture$FillDirection$$Type)
set "fluid"(value: $FluidStack$$Type)
set "fluidTank"(value: $IFluidStorage$$Type)
set "ingredientIO"(value: $IngredientIO$$Type)
set "onAddedTooltips"(value: $BiConsumer$$Type<$TankWidget$$Type, $List$$Type<$Component$$Type>>)
set "showAmount"(value: boolean)
set "xEIChance"(value: float)
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.MenuWidget" {
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Function$$Type } from "java.util.function.Function"
import { $IGuiTexture, $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $TreeNode$$Type } from "com.lowdragmc.lowdraglib.gui.util.TreeNode"
import { $WidgetGroup } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $MenuWidget<K = any, T = any> extends $WidgetGroup {
static "BACKGROUND": $IGuiTexture
static "LEAF_TEXTURE": $IGuiTexture
static "NODE_HOVER_TEXTURE": $IGuiTexture
static "NODE_TEXTURE": $IGuiTexture

constructor(xPosition: integer, yPosition: integer, nodeHeight: integer, root: $TreeNode$$Type<K, T>)

public "canDragIn"(dragging: any): boolean
public "close"(): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "isLDLRegister"(): boolean
public "name"(): string
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setAutoClose"(autoClose: boolean): $MenuWidget<K, T>
public "setCrossLinePredicate"(crossLinePredicate: $Predicate$$Type<K>): $MenuWidget<K, T>
public "setKeyIconSupplier"(keyIconSupplier: $Function$$Type<K, $IGuiTexture>): $MenuWidget<K, T>
public "setKeyNameSupplier"(keyNameSupplier: $Function$$Type<K, string>): $MenuWidget<K, T>
public "setLeafTexture"(leafTexture: $IGuiTexture$$Type): $MenuWidget<K, T>
public "setNodeHoverTexture"(nodeHoverTexture: $IGuiTexture$$Type): $MenuWidget<K, T>
public "setNodeTexture"(nodeTexture: $IGuiTexture$$Type): $MenuWidget<K, T>
public "setOnNodeClicked"(onNodeClicked: $Consumer$$Type<$TreeNode$$Type<K, T>>): $MenuWidget<K, T>
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
set "autoClose"(value: boolean)
set "crossLinePredicate"(value: $Predicate$$Type<K>)
set "keyIconSupplier"(value: $Function$$Type<K, $IGuiTexture>)
set "keyNameSupplier"(value: $Function$$Type<K, string>)
set "leafTexture"(value: $IGuiTexture$$Type)
set "nodeHoverTexture"(value: $IGuiTexture$$Type)
set "nodeTexture"(value: $IGuiTexture$$Type)
set "onNodeClicked"(value: $Consumer$$Type<$TreeNode$$Type<K, T>>)
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.DraggableScrollableWidgetGroup$ScrollWheelDirection" {
import { $Enum } from "java.lang.Enum"

export class $DraggableScrollableWidgetGroup$ScrollWheelDirection extends $Enum<$DraggableScrollableWidgetGroup$ScrollWheelDirection> {
static readonly "HORIZONTAL": $DraggableScrollableWidgetGroup$ScrollWheelDirection
static readonly "VERTICAL": $DraggableScrollableWidgetGroup$ScrollWheelDirection

public static "valueOf"(name: string): $DraggableScrollableWidgetGroup$ScrollWheelDirection
public static "values"(): $DraggableScrollableWidgetGroup$ScrollWheelDirection[]
}
}

declare module "com.lowdragmc.lowdraglib.gui.graphprocessor.data.custom.ICustomPortIODelegate" {
import { $BaseNode$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseNode"
import { $List$$Type } from "java.util.List"
import { $NodePort$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.NodePort"
import { $PortEdge$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.PortEdge"

export interface $ICustomPortIODelegate {
"handle"(baseNode0: $BaseNode$$Type, list1: $List$$Type<$PortEdge$$Type>, nodePort2: $NodePort$$Type): void
}

export namespace $ICustomPortIODelegate {
const probejs$$marker: never
}
export abstract class $ICustomPortIODelegate$$Static implements $ICustomPortIODelegate {
}
}

declare module "com.lowdragmc.lowdraglib.gui.texture.ResourceBorderTexture$NineSliceMode" {
import { $Enum } from "java.lang.Enum"

export class $ResourceBorderTexture$NineSliceMode extends $Enum<$ResourceBorderTexture$NineSliceMode> {
static readonly "FIT": $ResourceBorderTexture$NineSliceMode
static readonly "STRETCH": $ResourceBorderTexture$NineSliceMode
static readonly "TILE": $ResourceBorderTexture$NineSliceMode

public static "valueOf"(name: string): $ResourceBorderTexture$NineSliceMode
public static "values"(): $ResourceBorderTexture$NineSliceMode[]
}
}

declare module "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseGraph$GraphChanges" {
import { $BaseNode, $BaseNode$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseNode"
import { $PortEdge, $PortEdge$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.PortEdge"

export class $BaseGraph$GraphChanges {
"addedEdge": $PortEdge
"addedNode": $BaseNode
"nodeChanged": $BaseNode
"removedEdge": $PortEdge
"removedNode": $BaseNode

constructor()

public "addedEdge"(addedEdge: $PortEdge$$Type): $BaseGraph$GraphChanges
public "addedNode"(addedNode: $BaseNode$$Type): $BaseGraph$GraphChanges
public "nodeChanged"(nodeChanged: $BaseNode$$Type): $BaseGraph$GraphChanges
public "removedEdge"(removedEdge: $PortEdge$$Type): $BaseGraph$GraphChanges
public "removedNode"(removedNode: $BaseNode$$Type): $BaseGraph$GraphChanges
}
}

declare module "com.lowdragmc.lowdraglib.gui.ingredient.Target" {
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $Rect2i } from "net.minecraft.client.renderer.Rect2i"

export interface $Target extends $Consumer<any> {
"accept"(object0: any): void
"andThen"(consumer0: $Consumer$$Type<any>): $Consumer<any>
"getArea"(): $Rect2i
get "area"(): $Rect2i
}

export namespace $Target {
const probejs$$marker: never
}
export abstract class $Target$$Static implements $Target {
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.BlockSelectorWidget" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $WidgetGroup } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $BlockSelectorWidget extends $WidgetGroup {
constructor(x: integer, y: integer, width: integer, isState: boolean)

public "canDragIn"(dragging: any): boolean
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getBlock"(): $BlockState
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "isLDLRegister"(): boolean
public "name"(): string
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setBlock"(blockState: $BlockState$$Type): $BlockSelectorWidget
public "setOnBlockStateUpdate"(onBlockStateUpdate: $Consumer$$Type<$BlockState$$Type>): $BlockSelectorWidget
get "block"(): $BlockState
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
set "block"(value: $BlockState$$Type)
set "onBlockStateUpdate"(value: $Consumer$$Type<$BlockState$$Type>)
}
}

declare module "com.lowdragmc.lowdraglib.gui.ingredient.IRecipeIngredientSlot" {
import { $List } from "java.util.List"
import { $IIngredientSlot } from "com.lowdragmc.lowdraglib.gui.ingredient.IIngredientSlot"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IngredientIO } from "com.lowdragmc.lowdraglib.jei.IngredientIO"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"

export interface $IRecipeIngredientSlot extends $IIngredientSlot {
"getFullTooltipTexts"(): $List<$Component>
"getIngredientIO"(): $IngredientIO
"getXEIChance"(): float
"getXEICurrentIngredient"(): any
"getXEIIngredientOverMouse"(mouseX: double, mouseY: double): any
"getXEIIngredients"(): $List<any>
"self"(): $Widget
get "fullTooltipTexts"(): $List<$Component>
get "ingredientIO"(): $IngredientIO
get "xEIChance"(): float
get "xEICurrentIngredient"(): any
get "xEIIngredients"(): $List<any>
}

export namespace $IRecipeIngredientSlot {
const probejs$$marker: never
}
export abstract class $IRecipeIngredientSlot$$Static implements $IRecipeIngredientSlot {
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.ProgressWidget" {
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $ProgressTexture$FillDirection$$Type } from "com.lowdragmc.lowdraglib.gui.texture.ProgressTexture$FillDirection"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $Function$$Type } from "java.util.function.Function"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $ProgressTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.ProgressTexture"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ResourceTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.ResourceTexture"
import { $DoubleSupplier, $DoubleSupplier$$Type } from "java.util.function.DoubleSupplier"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $ProgressWidget extends $Widget implements $IConfigurableWidget {
static readonly "JEIProgress": $DoubleSupplier

constructor(progressSupplier: $DoubleSupplier$$Type, x: integer, y: integer, width: integer, height: integer, fullImage: $ResourceTexture$$Type)
constructor(progressSupplier: $DoubleSupplier$$Type, x: integer, y: integer, width: integer, height: integer, progressBar: $ProgressTexture$$Type)
constructor(progressSupplier: $DoubleSupplier$$Type, x: integer, y: integer, width: integer, height: integer)
constructor()

public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "canDragIn"(dragging: any): boolean
public "deserializeInnerNBT"(nbt: $CompoundTag$$Type): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
public "getLastProgressValue"(): double
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "initTemplate"(): void
public "isLDLRegister"(): boolean
public "name"(): string
public "serializeInnerNBT"(): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setDynamicHoverTips"(dynamicHoverTips: $Function$$Type<double, string>): $ProgressWidget
public "setFillDirection"(fillDirection: $ProgressTexture$FillDirection$$Type): $ProgressWidget
public "setOverlayTexture"(overlayTexture: $IGuiTexture$$Type): $ProgressWidget
public "setProgressSupplier"(progressSupplier: $DoubleSupplier$$Type): $ProgressWidget
public "setProgressTexture"(emptyBarArea: $IGuiTexture$$Type, filledBarArea: $IGuiTexture$$Type): $ProgressWidget
public "setProgressTexture"(progressTexture: $IGuiTexture$$Type): $ProgressWidget
public "widget"(): $Widget
get "progressSupplier"(): $DoubleSupplier
set "progressSupplier"(value: $DoubleSupplier$$Type)
get "chatComponent"(): $Component
get "lastProgressValue"(): double
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
set "dynamicHoverTips"(value: $Function$$Type<double, string>)
set "fillDirection"(value: $ProgressTexture$FillDirection$$Type)
set "overlayTexture"(value: $IGuiTexture$$Type)
set "progressTexture"(value: $IGuiTexture$$Type)
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.LabelWidget" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $LabelWidget extends $Widget implements $IConfigurableWidget {
constructor()
constructor(xPosition: integer, yPosition: integer, text: string)
constructor(xPosition: integer, yPosition: integer, component: $Component$$Type)
constructor(xPosition: integer, yPosition: integer, text: $Supplier$$Type<string>)

public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "canDragIn"(dragging: any): boolean
public "deserializeInnerNBT"(nbt: $CompoundTag$$Type): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "initTemplate"(): void
public "isLDLRegister"(): boolean
public "name"(): string
public "serializeInnerNBT"(): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setColor"(color: integer): void
public "setComponent"(component: $Component$$Type): void
/** @deprecated */
public "setDropShadow"(dropShadow: boolean): $LabelWidget
public "setText"(text: string): void
/** @deprecated */
public "setTextColor"(color: integer): $LabelWidget
public "setTextProvider"(textProvider: $Supplier$$Type<string>): void
public "setTextSupplier"(textSupplier: $Supplier$$Type<string>): void
public "widget"(): $Widget
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
set "color"(value: integer)
set "component"(value: $Component$$Type)
set "dropShadow"(value: boolean)
set "text"(value: string)
set "textColor"(value: integer)
set "textProvider"(value: $Supplier$$Type<string>)
set "textSupplier"(value: $Supplier$$Type<string>)
}
}

declare module "com.lowdragmc.lowdraglib.gui.graphprocessor.processor.GraphProcessor" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $BaseNode, $BaseNode$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseNode"
import { $BaseGraph$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseGraph"
import { $BaseGraphProcessor } from "com.lowdragmc.lowdraglib.gui.graphprocessor.processor.BaseGraphProcessor"
import { $Spliterator } from "java.util.Spliterator"

export class $GraphProcessor extends $BaseGraphProcessor {
constructor(graph: $BaseGraph$$Type)

public "forEach"(consumer0: $Consumer$$Type<$BaseNode$$Type>): void
public "spliterator"(): $Spliterator<$BaseNode>
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.codeeditor.Cursor" {
import { $Record } from "java.lang.Record"

export class $Cursor extends $Record {
constructor(line: integer, column: integer)

public "column"(): integer
public "line"(): integer
}
}

declare module "com.lowdragmc.lowdraglib.gui.editor.ui.StringTabContainer" {
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"
import { $TabContainer } from "com.lowdragmc.lowdraglib.gui.widget.TabContainer"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $Editor, $Editor$$Type } from "com.lowdragmc.lowdraglib.gui.editor.ui.Editor"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Map } from "java.util.Map"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $BiConsumer, $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $WidgetGroup, $WidgetGroup$$Type } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $StringTabContainer extends $TabContainer {
static readonly "TAB_HEIGHT": integer

constructor(editor: $Editor$$Type)

public "addTab"(name: string, group: $WidgetGroup$$Type, onSelected: $Runnable$$Type, onDeselected: $Runnable$$Type): void
public "addTab"(name: string, group: $WidgetGroup$$Type, onSelected: $Runnable$$Type): void
public "addTab"(name: string, group: $WidgetGroup$$Type): void
public "addTab"(icon: $IGuiTexture$$Type, name: string, group: $WidgetGroup$$Type, onSelected: $Runnable$$Type, onDeselected: $Runnable$$Type, onRemoved: $Runnable$$Type): void
public "calculateTabSize"(): void
public "canDragIn"(dragging: any): boolean
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
public "getEditor"(): $Editor
public "getOnChanged"(): $BiConsumer<$WidgetGroup, $WidgetGroup>
public "getOnDeselected"(): $Map<$WidgetGroup, $Runnable>
public "getOnSelected"(): $Map<$WidgetGroup, $Runnable>
public "getRegisterUI"(): $LDLRegister
public "getTabGroups"(): $List<$WidgetGroup>
public "getTabIndex"(group: $WidgetGroup$$Type): integer
public "getTabIndex"(): integer
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "isLDLRegister"(): boolean
public "name"(): string
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "switchTabIndex"(index: integer): void
get "onChanged"(): $BiConsumer<$WidgetGroup, $WidgetGroup>
set "onChanged"(value: $BiConsumer$$Type<$WidgetGroup$$Type, $WidgetGroup$$Type>)
get "chatComponent"(): $Component
get "editor"(): $Editor
get "onDeselected"(): $Map<$WidgetGroup, $Runnable>
get "onSelected"(): $Map<$WidgetGroup, $Runnable>
get "registerUI"(): $LDLRegister
get "tabGroups"(): $List<$WidgetGroup>
get "tabIndex"(): integer
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.lowdraglib.gui.animation.Transform" {
import { $Animation } from "com.lowdragmc.lowdraglib.gui.animation.Animation"
import { $FloatConsumer$$Type } from "it.unimi.dsi.fastutil.floats.FloatConsumer"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"

export class $Transform extends $Animation {
constructor()

public "isIn"(): boolean
public "isOut"(): boolean
public "offset"(xOffset: integer, yOffset: integer): $Transform
public "onUpdate"(onUpdate: $FloatConsumer$$Type): $Transform
/** Client only, do not use in server scripts */
public "post"(graphics: $GuiGraphics$$Type): void
/** Client only, do not use in server scripts */
public "pre"(graphics: $GuiGraphics$$Type): void
public "scale"(scale: float): $Transform
public "setIn"(): $Animation
public "setOut"(): $Animation
public "setScale"(scale: float): $Transform
get "in"(): boolean
get "out"(): boolean
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.DialogWidget" {
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $TextFieldWidget } from "com.lowdragmc.lowdraglib.gui.widget.TextFieldWidget"
import { $Component } from "net.minecraft.network.chat.Component"
import { $BooleanConsumer$$Type } from "it.unimi.dsi.fastutil.booleans.BooleanConsumer"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $ButtonWidget } from "com.lowdragmc.lowdraglib.gui.widget.ButtonWidget"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $File, $File$$Type } from "java.io.File"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $TreeNode, $TreeNode$$Type } from "com.lowdragmc.lowdraglib.gui.util.TreeNode"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $WidgetGroup, $WidgetGroup$$Type } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $TextTexture } from "com.lowdragmc.lowdraglib.gui.texture.TextTexture"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $DialogWidget extends $WidgetGroup {
constructor(x: integer, y: integer, width: integer, height: integer)
constructor(parent: $WidgetGroup$$Type, isClient: boolean)

public "canDragIn"(dragging: any): boolean
public "close"(): void
public static "createButton"(parent: $WidgetGroup$$Type, x: integer, y: integer, width: integer, height: integer, text: string, onClick: $Runnable$$Type): $ButtonWidget
public static "createContainer"(dialog: $DialogWidget$$Type, x: integer, y: integer, width: integer, height: integer, titleText: string): $WidgetGroup
public static "createContainer"(dialog: $DialogWidget$$Type, width: integer, height: integer, titleText: string): $WidgetGroup
public static "createText"(parent: $WidgetGroup$$Type, x: integer, y: integer, width: integer, height: integer): $TextTexture
public static "createTextField"(parent: $WidgetGroup$$Type, x: integer, y: integer, width: integer, height: integer): $TextFieldWidget
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "isLDLRegister"(): boolean
public "name"(): string
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setClickClose"(clickClose: boolean): void
public "setOnClosed"(onClosed: $Runnable$$Type): $DialogWidget
public "setParentInVisible"(): $DialogWidget
public static "showCheckBox"(parent: $WidgetGroup$$Type, title: string, info: string, onClosed: $BooleanConsumer$$Type): $DialogWidget
public static "showCheckBox"(parent: $WidgetGroup$$Type, title: string, info: string, width: integer, height: integer, onClosed: $BooleanConsumer$$Type): $DialogWidget
public static "showFileDialog"(parent: $WidgetGroup$$Type, title: string, dir: $File$$Type, isSelector: boolean, valid: $Predicate$$Type<$TreeNode$$Type<$File$$Type, $File$$Type>>, result: $Consumer$$Type<$File$$Type>): $DialogWidget
public static "showItemSelector"(parent: $WidgetGroup$$Type, title: string, init: $ItemStack$$Type, itemConsumer: $Consumer$$Type<$Item$$Type>): $DialogWidget
public static "showNotification"(parent: $WidgetGroup$$Type, title: string, info: string, width: integer, height: integer, onClosed: $Runnable$$Type): $DialogWidget
public static "showNotification"(parent: $WidgetGroup$$Type, title: string, info: string): $DialogWidget
public static "showStringEditorDialog"(parent: $WidgetGroup$$Type, title: string, initial: string, predicate: $Predicate$$Type<string>, result: $Consumer$$Type<string>): $DialogWidget
public static "suffixFilter"(...suffixes: string[]): $Predicate<$TreeNode<$File, $File>>
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
set "clickClose"(value: boolean)
set "onClosed"(value: $Runnable$$Type)
}
}

declare module "com.lowdragmc.lowdraglib.gui.graphprocessor.data.custom.ICustomPortBehaviorDelegate" {
import { $List, $List$$Type } from "java.util.List"
import { $PortEdge$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.PortEdge"
import { $PortData } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.PortData"

export interface $ICustomPortBehaviorDelegate {
"handle"(list0: $List$$Type<$PortEdge$$Type>): $List<$PortData>
}

export namespace $ICustomPortBehaviorDelegate {
const probejs$$marker: never
}
export abstract class $ICustomPortBehaviorDelegate$$Static implements $ICustomPortBehaviorDelegate {
}
}

declare module "com.lowdragmc.lowdraglib.gui.texture.TextTexture" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $TransformTexture } from "com.lowdragmc.lowdraglib.gui.texture.TransformTexture"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $TextTexture$TextType, $TextTexture$TextType$$Type } from "com.lowdragmc.lowdraglib.gui.texture.TextTexture$TextType"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $IGuiTexture, $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"

export class $TextTexture extends $TransformTexture {
constructor(text: string)
constructor(text: string, color: integer)
constructor()
constructor(text: $Supplier$$Type<string>)
constructor(text: string, backgroundTexture: $IGuiTexture$$Type)

public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "copy"(): $IGuiTexture
public "createPreview"(father: $ConfiguratorGroup$$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IGuiTexture
public "getBackgroundTexture"(): $IGuiTexture
public "getChatComponent"(): $Component
/** Client only, do not use in server scripts */
public "getLines"(): integer
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
public static "serializeWrapper"(texture: $IGuiTexture$$Type): $CompoundTag
public "setBackgroundColor"(color: integer): $TextTexture
public "setBackgroundTexture"(backgroundTexture: $IGuiTexture$$Type): $TextTexture
public "setColor"(color: integer): $TextTexture
public "setDropShadow"(dropShadow: boolean): $TextTexture
public "setInflateBackgroundY"(inflateBackgroundX: integer, inflateBackgroundY: integer): $TextTexture
public "setInflateBackgroundY"(inflateBackground: integer): $TextTexture
public "setRollSpeed"(rollSpeed: float): void
public "setSupplier"(supplier: $Supplier$$Type<string>): $TextTexture
public "setType"(type: $TextTexture$TextType$$Type): $TextTexture
public "setUIResource"(texturesResource: $Resource$$Type<$IGuiTexture$$Type>): void
public "setWidth"(width: integer): $TextTexture
public "transform"(xOffset: integer, yOffset: integer): $IGuiTexture
public "updateText"(text: string): void
/** Client only, do not use in server scripts */
public "updateTick"(): void
get "backgroundColor"(): integer
set "backgroundColor"(value: integer)
get "backgroundTexture"(): $IGuiTexture
set "backgroundTexture"(value: $IGuiTexture$$Type)
get "color"(): integer
set "color"(value: integer)
get "dropShadow"(): boolean
set "dropShadow"(value: boolean)
get "inflateBackgroundX"(): integer
set "inflateBackgroundX"(value: integer)
get "inflateBackgroundY"(): integer
set "inflateBackgroundY"(value: integer)
get "rollSpeed"(): float
set "rollSpeed"(value: float)
get "supplier"(): $Supplier<string>
set "supplier"(value: $Supplier$$Type<string>)
get "text"(): string
set "text"(value: string)
get "type"(): $TextTexture$TextType
set "type"(value: $TextTexture$TextType$$Type)
get "width"(): integer
set "width"(value: integer)
get "chatComponent"(): $Component
get "lines"(): integer
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
set "uIResource"(value: $Resource$$Type<$IGuiTexture$$Type>)
}
}

declare module "com.lowdragmc.lowdraglib.gui.editor.data.IProject" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $ITagSerializable } from "com.lowdragmc.lowdraglib.syncdata.ITagSerializable"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Resources } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $ILDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.ILDLRegister"
import { $TreeBuilder$Menu$$Type } from "com.lowdragmc.lowdraglib.gui.util.TreeBuilder$Menu"
import { $File, $File$$Type } from "java.io.File"
import { $Editor$$Type } from "com.lowdragmc.lowdraglib.gui.editor.ui.Editor"

export interface $IProject extends $ILDLRegister, $ITagSerializable<$CompoundTag> {
"attachMenu"(editor: $Editor$$Type, name: string, menu: $TreeBuilder$Menu$$Type): void
"deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
"getChatComponent"(): $Component
"getProjectWorkSpace"(editor: $Editor$$Type): $File
"getRegisterUI"(): $LDLRegister
"getResources"(): $Resources
"getSuffix"(): string
"getTranslateKey"(): string
"group"(): string
"isLDLRegister"(): boolean
"loadProject"(file: $File$$Type): $IProject
"loadResources"(tag: $CompoundTag$$Type): $Resources
"name"(): string
"newEmptyProject"(): $IProject
"onClosed"(editor: $Editor$$Type): void
"onLoad"(editor: $Editor$$Type): void
"saveProject"(file: $File$$Type): void
"serializeNBT"(): $CompoundTag
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "resources"(): $Resources
get "suffix"(): string
get "translateKey"(): string
get "lDLRegister"(): boolean
}

export namespace $IProject {
const probejs$$marker: never
}
export abstract class $IProject$$Static implements $IProject {
}
}

declare module "com.lowdragmc.lowdraglib.gui.editor.data.UIProject" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $IProject } from "com.lowdragmc.lowdraglib.gui.editor.data.IProject"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Resources, $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $WidgetGroup, $WidgetGroup$$Type } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $Supplier } from "java.util.function.Supplier"
import { $TreeBuilder$Menu$$Type } from "com.lowdragmc.lowdraglib.gui.util.TreeBuilder$Menu"
import { $File, $File$$Type } from "java.io.File"
import { $Editor$$Type } from "com.lowdragmc.lowdraglib.gui.editor.ui.Editor"

export class $UIProject implements $IProject {
constructor(resources: $Resources$$Type, root: $WidgetGroup$$Type)
constructor(tag: $CompoundTag$$Type)

public "attachMenu"(editor: $Editor$$Type, name: string, menu: $TreeBuilder$Menu$$Type): void
public "deserializeNBT"(tag: $CompoundTag$$Type): void
public "getChatComponent"(): $Component
public "getProjectWorkSpace"(editor: $Editor$$Type): $File
public "getRegisterUI"(): $LDLRegister
public "getResources"(): $Resources
public "getSuffix"(): string
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "loadProject"(file: $File$$Type): $IProject
public "loadResources"(tag: $CompoundTag$$Type): $Resources
public static "loadUIFromFile"(location: $ResourceLocation$$Type): $Supplier<$WidgetGroup>
public static "loadUIFromTag"(tag: $CompoundTag$$Type): $Supplier<$WidgetGroup>
public "name"(): string
public "newEmptyProject"(): $UIProject
public "onClosed"(editor: $Editor$$Type): void
public "onLoad"(editor: $Editor$$Type): void
public "saveProject"(file: $File$$Type): void
public "serializeNBT"(): $CompoundTag
get "resources"(): $Resources
set "resources"(value: $Resources$$Type)
get "root"(): $WidgetGroup
set "root"(value: $WidgetGroup$$Type)
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "suffix"(): string
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.lowdraglib.gui.texture.ShaderTexture" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $UniformCache$$Type } from "com.lowdragmc.lowdraglib.client.shader.uniform.UniformCache"
import { $TransformTexture } from "com.lowdragmc.lowdraglib.gui.texture.TransformTexture"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IGuiTexture, $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"

export class $ShaderTexture extends $TransformTexture {
constructor()

public "bindTexture"(samplerName: string, id: integer): void
public "bindTexture"(samplerName: string, location: $ResourceLocation$$Type): void
public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public static "clearCache"(): void
public "copy"(): $IGuiTexture
public "createPreview"(father: $ConfiguratorGroup$$Type): void
public static "createRawShader"(rawShader: string): $ShaderTexture
public static "createShader"(location: $ResourceLocation$$Type): $ShaderTexture
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IGuiTexture
public "dispose"(): void
public "getChatComponent"(): $Component
public "getRawShader"(): string
public "getRegisterUI"(): $LDLRegister
public "getResolution"(): float
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
public static "serializeWrapper"(texture: $IGuiTexture$$Type): $CompoundTag
public "setColor"(color: integer): $ShaderTexture
public "setResolution"(resolution: float): $ShaderTexture
public "setUIResource"(texturesResource: $Resource$$Type<$IGuiTexture$$Type>): void
public "setUniformCache"(uniformCache: $Consumer$$Type<$UniformCache$$Type>): $ShaderTexture
public "transform"(xOffset: integer, yOffset: integer): $IGuiTexture
public "updateRawShader"(rawShader: string): void
public "updateShader"(location: $ResourceLocation$$Type): void
/** Client only, do not use in server scripts */
public "updateTick"(): void
get "location"(): $ResourceLocation
set "location"(value: $ResourceLocation$$Type)
get "chatComponent"(): $Component
get "rawShader"(): string
get "registerUI"(): $LDLRegister
get "resolution"(): float
get "translateKey"(): string
get "lDLRegister"(): boolean
set "color"(value: integer)
set "resolution"(value: float)
set "uIResource"(value: $Resource$$Type<$IGuiTexture$$Type>)
set "uniformCache"(value: $Consumer$$Type<$UniformCache$$Type>)
}
}

declare module "com.lowdragmc.lowdraglib.gui.editor.configurator.Configurator" {
import { $ConfigPanel, $ConfigPanel$$Type } from "com.lowdragmc.lowdraglib.gui.editor.ui.ConfigPanel"
import { $IConfiguratorContainer, $IConfiguratorContainer$$Type } from "com.lowdragmc.lowdraglib.gui.editor.IConfiguratorContainer"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $LabelWidget } from "com.lowdragmc.lowdraglib.gui.widget.LabelWidget"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $ConfigPanel$Tab, $ConfigPanel$Tab$$Type } from "com.lowdragmc.lowdraglib.gui.editor.ui.ConfigPanel$Tab"
import { $WidgetGroup } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $Configurator extends $WidgetGroup {
constructor(name: string)
constructor()

public "addListener"(listener: $Consumer$$Type<$Configurator$$Type>): void
public "canDragIn"(dragging: any): boolean
public "computeHeight"(): void
public "computeLayout"(): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
/** @deprecated */
public "getConfigPanel"(): $ConfigPanel
public "getConfiguratorContainer"(): $IConfiguratorContainer
public "getLeftWidth"(): integer
public "getListeners"(): $List<$Consumer<$Configurator>>
public "getName"(): string
public "getNameWidget"(): $LabelWidget
public "getRegisterUI"(): $LDLRegister
public "getRightWidth"(): integer
/** @deprecated */
public "getTab"(): $ConfigPanel$Tab
public "getTranslateKey"(): string
public "getWidth"(): integer
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "init"(width: integer): void
public "isInit"(): boolean
public "isLDLRegister"(): boolean
public "name"(): string
public "notifyChanges"(): void
public "notifyChanges"(source: $Configurator$$Type): void
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
/** @deprecated */
public "setConfigPanel"(configPanel: $ConfigPanel$$Type, tab: $ConfigPanel$Tab$$Type): void
public "setConfiguratorContainer"(configuratorContainer: $IConfiguratorContainer$$Type): void
public "setTips"(...tips: string[]): void
get "chatComponent"(): $Component
get "configPanel"(): $ConfigPanel
get "configuratorContainer"(): $IConfiguratorContainer
get "leftWidth"(): integer
get "listeners"(): $List<$Consumer<$Configurator>>
get "nameWidget"(): $LabelWidget
get "registerUI"(): $LDLRegister
get "rightWidth"(): integer
get "tab"(): $ConfigPanel$Tab
get "translateKey"(): string
get "width"(): integer
get "lDLRegister"(): boolean
set "configuratorContainer"(value: $IConfiguratorContainer$$Type)
set "tips"(value: string[])
}
}

declare module "com.lowdragmc.lowdraglib.gui.texture.GuiTextureGroup" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $TransformTexture } from "com.lowdragmc.lowdraglib.gui.texture.TransformTexture"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IGuiTexture, $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"

export class $GuiTextureGroup extends $TransformTexture {
constructor()
constructor(...textures: $IGuiTexture$$Type[])

public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "copy"(): $IGuiTexture
public "createPreview"(father: $ConfiguratorGroup$$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IGuiTexture
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
public static "serializeWrapper"(texture: $IGuiTexture$$Type): $CompoundTag
public "setTextures"(...textures: $IGuiTexture$$Type[]): $GuiTextureGroup
public "setUIResource"(texturesResource: $Resource$$Type<$IGuiTexture$$Type>): void
public "transform"(xOffset: integer, yOffset: integer): $IGuiTexture
/** Client only, do not use in server scripts */
public "updateTick"(): void
get "inflateHeight"(): integer
set "inflateHeight"(value: integer)
get "inflateWidth"(): integer
set "inflateWidth"(value: integer)
get "textures"(): $IGuiTexture[]
set "textures"(value: $IGuiTexture$$Type[])
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
set "uIResource"(value: $Resource$$Type<$IGuiTexture$$Type>)
}
}

declare module "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegisterClient" {
import { $Annotation } from "java.lang.annotation.Annotation"
import { $Class } from "java.lang.Class"

export interface $LDLRegisterClient extends $Annotation {
"annotationType"(): $Class<$Annotation>
"equals"(object0: any): boolean
"group"(): string
"hashCode"(): integer
"modID"(): string
"name"(): string
"priority"(): integer
"toString"(): string
}

export namespace $LDLRegisterClient {
const probejs$$marker: never
}
export abstract class $LDLRegisterClient$$Static implements $LDLRegisterClient {
}
}

declare module "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseNode" {
import { $BaseGraph, $BaseGraph$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseGraph"
import { $IPersistedSerializable } from "com.lowdragmc.lowdraglib.syncdata.IPersistedSerializable"
import { $NodePort, $NodePort$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.NodePort"
import { $NodePortContainer$NodeOutputPortContainer } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.NodePortContainer$NodeOutputPortContainer"
import { $PortEdge, $PortEdge$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.PortEdge"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"
import { $Stack } from "java.util.Stack"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $HashSet } from "java.util.HashSet"
import { $IConfigurable } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurable"
import { $Map } from "java.util.Map"
import { $PortData$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.PortData"
import { $Method } from "java.lang.reflect.Method"
import { $Position, $Position$$Type } from "com.lowdragmc.lowdraglib.utils.Position"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Field } from "java.lang.reflect.Field"
import { $BaseNode$PortUpdate } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseNode$PortUpdate"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $NodePortContainer$NodeInputPortContainer } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.NodePortContainer$NodeInputPortContainer"
import { $BaseNode$NodeFieldInformation } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseNode$NodeFieldInformation"
import { $Class$$Type } from "java.lang.Class"
import { $ILDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.ILDLRegister"

export class $BaseNode implements $IPersistedSerializable, $ILDLRegister, $IConfigurable {
readonly "inputPorts": $NodePortContainer$NodeInputPortContainer
readonly "outputPorts": $NodePortContainer$NodeOutputPortContainer

public "GetOutputNodes"(): $List<$BaseNode>
public "InitializePorts"(): void
public "UpdateAllPortsLocal"(): boolean
public "addPort"(input: boolean, fieldName: string, portData: $PortData$$Type): void
public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "copy"(): $BaseNode
public static "createFromTag"(tag: $CompoundTag$$Type): $BaseNode
public static "createFromType"<T extends $BaseNode>(nodeType: $Class$$Type<T>, position: $Position$$Type): T
public "deserializeNBT"(tag: $CompoundTag$$Type): void
public "destroyInternal"(): void
public "disableInternal"(): void
public "findInDependencies"(condition: $Predicate$$Type<$BaseNode$$Type>): $BaseNode
public "getAllEdges"(): $List<$PortEdge>
public "getAllFields"(): $Field[]
public "getAllMethods"(): $Method[]
public "getAllPorts"(): $List<$NodePort>
public "getChatComponent"(): $Component
public "getComputeOrder"(): integer
public "getDisplayName"(): string
public "getFieldsToUpdate"(): $Stack<$BaseNode$PortUpdate>
public "getGUID"(): string
public "getGraph"(): $BaseGraph
public "getInputNodes"(): $List<$BaseNode>
public "getInputPorts"(): $NodePortContainer$NodeInputPortContainer
public "getMinWidth"(): integer
public "getNodeFields"(): $Map<string, $BaseNode$NodeFieldInformation>
public "getOnAfterEdgeConnected"(): $Consumer<$PortEdge>
public "getOnAfterEdgeDisconnected"(): $Consumer<$PortEdge>
public "getOnPortsUpdated"(): $Consumer<string>
public "getOnProcessed"(): $Runnable
public "getOutputPorts"(): $NodePortContainer$NodeOutputPortContainer
public "getPort"(fieldName: string, identifier: string): $NodePort
public "getPort"(fieldName: string): $NodePort
public "getPosition"(): $Position
public "getRegisterUI"(): $LDLRegister
public "getTitleColor"(): integer
public "getTranslateKey"(): string
public "getUpdatedFields"(): $HashSet<$BaseNode$PortUpdate>
public "group"(): string
public "initialize"(graph: $BaseGraph$$Type): void
public "isCanBeRemoved"(): boolean
public "isCanProcess"(): boolean
public "isExpanded"(): boolean
public "isFieldInput"(fieldName: string): boolean
public "isLDLRegister"(): boolean
public "name"(): string
public "newGuid"(graph: $BaseGraph$$Type): void
public "onEdgeConnected"(edge: $PortEdge$$Type): void
public "onEdgeDisconnected"(edge: $PortEdge$$Type): void
public "onProcess"(): void
public "removePort"(input: boolean, fieldName: string): void
public "removePort"(input: boolean, port: $NodePort$$Type): void
public "resetNode"(): void
public "setCanBeRemoved"(canBeRemoved: boolean): void
public "setDisplayName"(displayName: string): void
public "setExpanded"(expanded: boolean): void
public "setPosition"(position: $Position$$Type): void
public "updateAllPorts"(): boolean
public "updatePortsForField"(fieldName: string): boolean
public "updatePortsForField"(fieldName: string, sendPortUpdatedEvent: boolean): boolean
public "updatePortsForFieldLocal"(fieldName: string): boolean
public "updatePortsForFieldLocal"(fieldName: string, sendPortUpdatedEvent: boolean): boolean
get "canBeRemoved"(): boolean
set "canBeRemoved"(value: boolean)
get "expanded"(): boolean
set "expanded"(value: boolean)
get "onAfterEdgeConnected"(): $Consumer<$PortEdge>
set "onAfterEdgeConnected"(value: $Consumer$$Type<$PortEdge$$Type>)
get "onAfterEdgeDisconnected"(): $Consumer<$PortEdge>
set "onAfterEdgeDisconnected"(value: $Consumer$$Type<$PortEdge$$Type>)
get "onPortsUpdated"(): $Consumer<string>
set "onPortsUpdated"(value: $Consumer$$Type<string>)
get "onProcessed"(): $Runnable
set "onProcessed"(value: $Runnable$$Type)
get "position"(): $Position
set "position"(value: $Position$$Type)
get "allEdges"(): $List<$PortEdge>
get "allFields"(): $Field[]
get "allMethods"(): $Method[]
get "allPorts"(): $List<$NodePort>
get "chatComponent"(): $Component
get "computeOrder"(): integer
get "displayName"(): string
get "fieldsToUpdate"(): $Stack<$BaseNode$PortUpdate>
get "gUID"(): string
get "graph"(): $BaseGraph
get "inputNodes"(): $List<$BaseNode>
get "minWidth"(): integer
get "nodeFields"(): $Map<string, $BaseNode$NodeFieldInformation>
get "registerUI"(): $LDLRegister
get "titleColor"(): integer
get "translateKey"(): string
get "updatedFields"(): $HashSet<$BaseNode$PortUpdate>
get "canProcess"(): boolean
get "lDLRegister"(): boolean
set "displayName"(value: string)
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.codeeditor.language.Token" {
import { $TokenType, $TokenType$$Type } from "com.lowdragmc.lowdraglib.gui.widget.codeeditor.language.TokenType"

export class $Token {
constructor(text: string, type: $TokenType$$Type, startIndex: integer, endIndex: integer)

public "getEndIndex"(): integer
public "getStartIndex"(): integer
public "getText"(): string
public "getType"(): $TokenType
get "endIndex"(): integer
get "startIndex"(): integer
get "text"(): string
get "type"(): $TokenType
}
}

declare module "com.lowdragmc.lowdraglib.gui.texture.ItemStackTexture" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $TransformTexture } from "com.lowdragmc.lowdraglib.gui.texture.TransformTexture"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $IGuiTexture, $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"

export class $ItemStackTexture extends $TransformTexture {
constructor()
constructor(...items: $Item$$Type[])
constructor(...itemStacks: $ItemStack$$Type[])

public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "copy"(): $IGuiTexture
public "createPreview"(father: $ConfiguratorGroup$$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IGuiTexture
public "getChatComponent"(): $Component
public "getColor"(): integer
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
public static "serializeWrapper"(texture: $IGuiTexture$$Type): $CompoundTag
public "setItems"(...itemStack: $ItemStack$$Type[]): $ItemStackTexture
public "setUIResource"(texturesResource: $Resource$$Type<$IGuiTexture$$Type>): void
public "transform"(xOffset: integer, yOffset: integer): $IGuiTexture
/** Client only, do not use in server scripts */
public "updateTick"(): void
get "items"(): $ItemStack[]
set "items"(value: $ItemStack$$Type[])
get "chatComponent"(): $Component
get "color"(): integer
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
set "uIResource"(value: $Resource$$Type<$IGuiTexture$$Type>)
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.codeeditor.StyledText" {
import { $Style, $Style$$Type } from "net.minecraft.network.chat.Style"

export class $StyledText {
constructor(text: string, style: $Style$$Type)

public "getStyle"(): $Style
public "getText"(): string
get "style"(): $Style
get "text"(): string
}
}

declare module "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IConfigurable } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurable"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $AnnotationDetector$Wrapper } from "com.lowdragmc.lowdraglib.gui.editor.runtime.AnnotationDetector$Wrapper"
import { $Function } from "java.util.function.Function"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"

export interface $IConfigurableWidget extends $IConfigurable {
"buildConfigurator"(father: $ConfiguratorGroup$$Type): void
"canDragIn"(dragging: any): boolean
"deserializeInnerNBT"(nbt: $CompoundTag$$Type): void
"getChatComponent"(): $Component
"getRegisterUI"(): $LDLRegister
"getTranslateKey"(): string
"group"(): string
"handleDragging"(dragging: any): boolean
"initTemplate"(): void
"isLDLRegister"(): boolean
"name"(): string
"serializeInnerNBT"(): $CompoundTag
"serializeWrapper"(): $CompoundTag
"widget"(): $Widget
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}

export namespace $IConfigurableWidget {
const CACHE: $Function<string, $AnnotationDetector$Wrapper<$LDLRegister, $IConfigurableWidget>>
function deserializeNBT(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
function deserializeNBT(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
function deserializeWrapper(tag: $CompoundTag$$Type): $IConfigurableWidget
function serializeNBT(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
function serializeNBT(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
}
export abstract class $IConfigurableWidget$$Static implements $IConfigurableWidget {
static readonly "CACHE": $Function<string, $AnnotationDetector$Wrapper<$LDLRegister, $IConfigurableWidget>>

static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.TextFieldWidget" {
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $TextFieldWidget extends $Widget implements $IConfigurableWidget {
constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, textSupplier: $Supplier$$Type<string>, textResponder: $Consumer$$Type<string>)
constructor()

public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "canDragIn"(dragging: any): boolean
public "deserializeInnerNBT"(nbt: $CompoundTag$$Type): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
public "getCurrentString"(): string
public "getRawCurrentString"(): string
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "initTemplate"(): void
public "isLDLRegister"(): boolean
public "name"(): string
public "serializeInnerNBT"(): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setBackground"(background: $IGuiTexture$$Type): $TextFieldWidget
public "setBordered"(bordered: boolean): $TextFieldWidget
public "setCompoundTagOnly"(): $TextFieldWidget
public "setCurrentString"(currentString: any): $TextFieldWidget
public "setMaxStringLength"(maxStringLength: integer): $TextFieldWidget
public "setNumbersOnlyFloat"(minValue: float, maxValue: float): $TextFieldWidget
public "setNumbersOnlyInt"(minValue: integer, maxValue: integer): $TextFieldWidget
public "setNumbersOnlyLong"(minValue: long, maxValue: long): $TextFieldWidget
public "setResourceLocationOnly"(): $TextFieldWidget
public "setTextColor"(textColor: integer): $TextFieldWidget
public "setTextResponder"(textResponder: $Consumer$$Type<string>): $TextFieldWidget
public "setTextSupplier"(textSupplier: $Supplier$$Type<string>): $TextFieldWidget
public "setValidator"(validator: $Function$$Type<string, string>): $TextFieldWidget
public "setWheelDur"(digits: integer, wheelDur: float): $TextFieldWidget
public "setWheelDur"(wheelDur: float): $TextFieldWidget
public "widget"(): $Widget
get "chatComponent"(): $Component
get "currentString"(): string
get "rawCurrentString"(): string
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
set "background"(value: $IGuiTexture$$Type)
set "bordered"(value: boolean)
set "currentString"(value: any)
set "maxStringLength"(value: integer)
set "textColor"(value: integer)
set "textResponder"(value: $Consumer$$Type<string>)
set "textSupplier"(value: $Supplier$$Type<string>)
set "validator"(value: $Function$$Type<string, string>)
set "wheelDur"(value: float)
}
}

declare module "com.lowdragmc.lowdraglib.gui.modular.ModularUI" {
import { $Rectangle, $Rectangle$$Type } from "java.awt.Rectangle"
import { $Size$$Type } from "com.lowdragmc.lowdraglib.utils.Size"
import { $IUIHolder, $IUIHolder$$Type } from "com.lowdragmc.lowdraglib.gui.modular.IUIHolder"
import { $Widget, $Widget$$Type } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $HashMap } from "java.util.HashMap"
import { $LocalPlayer$$Type } from "net.minecraft.client.player.LocalPlayer"
import { $SlotWidget, $SlotWidget$$Type } from "com.lowdragmc.lowdraglib.gui.widget.SlotWidget"
import { $UpdateablePlayer, $UpdateablePlayer$$Type } from "dev.uncandango.alltheleaks.mixin.UpdateablePlayer"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $Slot, $Slot$$Type } from "net.minecraft.world.inventory.Slot"
import { $List } from "java.util.List"
import { $ModularUIContainer, $ModularUIContainer$$Type } from "com.lowdragmc.lowdraglib.gui.modular.ModularUIContainer"
import { $WidgetGroup, $WidgetGroup$$Type } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $ModularUIGuiContainer, $ModularUIGuiContainer$$Type } from "com.lowdragmc.lowdraglib.gui.modular.ModularUIGuiContainer"

export class $ModularUI implements $UpdateablePlayer {
readonly "holder": $IUIHolder
readonly "mainGroup": $WidgetGroup

constructor(size: $Size$$Type, holder: $IUIHolder$$Type, entityPlayer: $Player$$Type)
constructor(width: integer, height: integer, holder: $IUIHolder$$Type, entityPlayer: $Player$$Type)
constructor(mainGroup: $WidgetGroup$$Type, holder: $IUIHolder$$Type, entityPlayer: $Player$$Type)
constructor(holder: $IUIHolder$$Type, entityPlayer: $Player$$Type)

public "addNativeSlot"(slotHandle: $Slot$$Type, slotWidget: $SlotWidget$$Type): void
public "atl$onClientPlayerUpdated"(localPlayer0: $LocalPlayer$$Type): void
public "background"(...textures: $IGuiTexture$$Type[]): $ModularUI
public "getFirstWidgetById"(regex: string): $Widget
public "getFlatVisibleWidgetCollection"(): $List<$Widget>
public "getFlatWidgetCollection"(): $List<$Widget>
public "getGuiLeft"(): integer
public "getGuiTop"(): integer
public "getHeight"(): integer
public "getModularUIContainer"(): $ModularUIContainer
/** Client only, do not use in server scripts */
public "getModularUIGui"(): $ModularUIGuiContainer
public "getScreenHeight"(): integer
public "getScreenWidth"(): integer
public "getSlotMap"(): $HashMap<$Slot, $SlotWidget>
public "getTickCount"(): long
public "getWidgetsById"(regex: string): $List<$Widget>
public "getWidth"(): integer
public "initWidgets"(): void
public "isFullScreen"(): boolean
public static "register"<O extends $UpdateablePlayer<any>>(o0: O): void
public "registerCloseListener"(runnable: $Runnable$$Type): void
public "removeNativeSlot"(slotHandle: $Slot$$Type): void
public "setFullScreen"(): void
public "setModularUIContainer"(container: $ModularUIContainer$$Type): void
/** Client only, do not use in server scripts */
public "setModularUIGui"(modularUIGuiContainer: $ModularUIGuiContainer$$Type): void
/** Client only, do not use in server scripts */
public "setSize"(width: integer, height: integer): void
public "toScreenCoords"(widgetRect: $Rectangle$$Type): $Rectangle
public "triggerCloseListeners"(): void
/** Client only, do not use in server scripts */
public "updateScreenSize"(screenWidth: integer, screenHeight: integer): void
public "widget"(widget: $Widget$$Type): $ModularUI
get "entityPlayer"(): $Player
set "entityPlayer"(value: $Player$$Type)
get "flatVisibleWidgetCollection"(): $List<$Widget>
get "flatWidgetCollection"(): $List<$Widget>
get "guiLeft"(): integer
get "guiTop"(): integer
get "height"(): integer
get "modularUIContainer"(): $ModularUIContainer
get "modularUIGui"(): $ModularUIGuiContainer
get "screenHeight"(): integer
get "screenWidth"(): integer
get "slotMap"(): $HashMap<$Slot, $SlotWidget>
get "tickCount"(): long
get "width"(): integer
get "fullScreen"(): boolean
set "modularUIContainer"(value: $ModularUIContainer$$Type)
set "modularUIGui"(value: $ModularUIGuiContainer$$Type)
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.DraggableWidgetGroup" {
import { $Position$$Type } from "com.lowdragmc.lowdraglib.utils.Position"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $Component } from "net.minecraft.network.chat.Component"
import { $DraggableScrollableWidgetGroup$IDraggable } from "com.lowdragmc.lowdraglib.gui.widget.DraggableScrollableWidgetGroup$IDraggable"
import { $Size$$Type } from "com.lowdragmc.lowdraglib.utils.Size"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $WidgetGroup } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $DraggableWidgetGroup extends $WidgetGroup implements $DraggableScrollableWidgetGroup$IDraggable {
constructor(x: integer, y: integer, width: integer, height: integer)
constructor()
constructor(position: $Position$$Type)
constructor(position: $Position$$Type, size: $Size$$Type)

public "allowDrag"(mouseX: double, mouseY: double, button: integer): boolean
public "allowSelected"(mouseX: double, mouseY: double, button: integer): boolean
public "canDragIn"(dragging: any): boolean
public "canDragOutRange"(): boolean
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "dragging"(mouseX: double, mouseY: double, deltaX: double, deltaY: double): boolean
public "endDrag"(mouseX: double, mouseY: double): void
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "isLDLRegister"(): boolean
public "isSelected"(): boolean
public "name"(): string
public "onSelected"(): void
public "onUnSelected"(): void
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setOnDragging"(onDragging: $Consumer$$Type<$DraggableWidgetGroup$$Type>): $DraggableWidgetGroup
public "setOnEndDrag"(onEndDrag: $Consumer$$Type<$DraggableWidgetGroup$$Type>): $DraggableWidgetGroup
public "setOnSelected"(onSelected: $Consumer$$Type<$DraggableWidgetGroup$$Type>): $DraggableWidgetGroup
public "setOnStartDrag"(onStartDrag: $Consumer$$Type<$DraggableWidgetGroup$$Type>): $DraggableWidgetGroup
public "setOnUnSelected"(onUnSelected: $Consumer$$Type<$DraggableWidgetGroup$$Type>): $DraggableWidgetGroup
public "setSelectedTexture"(selectedTexture: $IGuiTexture$$Type): $DraggableWidgetGroup
public "setSelectedTexture"(border: integer, color: integer): $DraggableWidgetGroup
public "startDrag"(mouseX: double, mouseY: double): void
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
get "selected"(): boolean
set "onDragging"(value: $Consumer$$Type<$DraggableWidgetGroup$$Type>)
set "onEndDrag"(value: $Consumer$$Type<$DraggableWidgetGroup$$Type>)
set "onStartDrag"(value: $Consumer$$Type<$DraggableWidgetGroup$$Type>)
set "selectedTexture"(value: $IGuiTexture$$Type)
}
}

declare module "com.lowdragmc.lowdraglib.gui.modular.ModularUIContainer" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Slot$$Type } from "net.minecraft.world.inventory.Slot"
import { $List$$Type } from "java.util.List"
import { $WidgetUIAccess } from "com.lowdragmc.lowdraglib.gui.modular.WidgetUIAccess"
import { $CPacketUIClientAction$$Type } from "com.lowdragmc.lowdraglib.networking.c2s.CPacketUIClientAction"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Widget$$Type } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $ModularUI, $ModularUI$$Type } from "com.lowdragmc.lowdraglib.gui.modular.ModularUI"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $MenuType } from "net.minecraft.world.inventory.MenuType"

export class $ModularUIContainer extends $AbstractContainerMenu implements $WidgetUIAccess {
static readonly "MENUTYPE": $MenuType<$ModularUIContainer>

constructor(modularUI: $ModularUI$$Type, windowID: integer)

public "attemptMergeStack"(itemStack: $ItemStack$$Type, fromContainer: boolean, simulate: boolean): boolean
public "getModularUI"(): $ModularUI
public "handleClientAction"(packet: $CPacketUIClientAction$$Type): void
public static "mergeItemStack"(itemStack: $ItemStack$$Type, slots: $List$$Type<$Slot$$Type>, simulate: boolean): boolean
public "removeSlot"(slotHandle: $Slot$$Type): void
public "writeClientAction"(widget: $Widget$$Type, updateId: integer, payloadWriter: $Consumer$$Type<$FriendlyByteBuf$$Type>): void
public "writeUpdateInfo"(widget: $Widget$$Type, updateId: integer, payloadWriter: $Consumer$$Type<$FriendlyByteBuf$$Type>): void
get "modularUI"(): $ModularUI
}
}

declare module "com.lowdragmc.lowdraglib.gui.factory.UIFactory" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Map } from "java.util.Map"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $UIFactory<T = any> {
static readonly "FACTORIES": $Map<$ResourceLocation, $UIFactory<any>>
readonly "uiFactoryId": $ResourceLocation

constructor(uiFactoryId: $ResourceLocation$$Type)

/** Client only, do not use in server scripts */
public "initClientUI"(serializedHolder: $FriendlyByteBuf$$Type, windowId: integer): void
public static "register"(factory: $UIFactory$$Type<any>): void
}
}

declare module "com.lowdragmc.lowdraglib.gui.modular.WidgetUIAccess" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Widget$$Type } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export interface $WidgetUIAccess {
"attemptMergeStack"(itemStack0: $ItemStack$$Type, boolean1: boolean, boolean2: boolean): boolean
"writeClientAction"(widget0: $Widget$$Type, int1: integer, consumer2: $Consumer$$Type<$FriendlyByteBuf$$Type>): void
"writeUpdateInfo"(widget0: $Widget$$Type, int1: integer, consumer2: $Consumer$$Type<$FriendlyByteBuf$$Type>): void
}

export namespace $WidgetUIAccess {
const probejs$$marker: never
}
export abstract class $WidgetUIAccess$$Static implements $WidgetUIAccess {
}
}

declare module "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurable" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Component } from "net.minecraft.network.chat.Component"
import { $ILDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.ILDLRegister"

export interface $IConfigurable extends $ILDLRegister {
"buildConfigurator"(father: $ConfiguratorGroup$$Type): void
"getChatComponent"(): $Component
"getRegisterUI"(): $LDLRegister
"getTranslateKey"(): string
"group"(): string
"isLDLRegister"(): boolean
"name"(): string
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}

export namespace $IConfigurable {
const probejs$$marker: never
}
export abstract class $IConfigurable$$Static implements $IConfigurable {
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.SwitchWidget" {
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $ClickData$$Type } from "com.lowdragmc.lowdraglib.gui.util.ClickData"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $SwitchWidget extends $Widget implements $IConfigurableWidget {
constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, onPressed: $BiConsumer$$Type<$ClickData$$Type, boolean>)
constructor()

public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "canDragIn"(dragging: any): boolean
public "deserializeInnerNBT"(nbt: $CompoundTag$$Type): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "initTemplate"(): void
public "isLDLRegister"(): boolean
public "isPressed"(): boolean
public "name"(): string
public "serializeInnerNBT"(): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setBaseTexture"(...baseTexture: $IGuiTexture$$Type[]): $SwitchWidget
public "setHoverBorderTexture"(border: integer, color: integer): $SwitchWidget
public "setOnPressCallback"(onPressCallback: $BiConsumer$$Type<$ClickData$$Type, boolean>): void
public "setPressed"(isPressed: boolean): $SwitchWidget
public "setPressedTexture"(...pressedTexture: $IGuiTexture$$Type[]): $SwitchWidget
public "setSupplier"(supplier: $Supplier$$Type<boolean>): $SwitchWidget
public "setTexture"(baseTexture: $IGuiTexture$$Type, pressedTexture: $IGuiTexture$$Type): $SwitchWidget
public "widget"(): $Widget
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
get "pressed"(): boolean
set "baseTexture"(value: $IGuiTexture$$Type[])
set "onPressCallback"(value: $BiConsumer$$Type<$ClickData$$Type, boolean>)
set "pressed"(value: boolean)
set "pressedTexture"(value: $IGuiTexture$$Type[])
set "supplier"(value: $Supplier$$Type<boolean>)
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.custom.PlayerInventoryWidget" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $WidgetGroup } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $IGuiTexture, $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerInventoryWidget extends $WidgetGroup {
constructor()

public "canDragIn"(dragging: any): boolean
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getSlotBackground"(): $IGuiTexture
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "isAllowCustomBackground"(): boolean
public "isLDLRegister"(): boolean
public "name"(): string
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setAllowCustomBackground"(allowCustomBackground: boolean): void
/** @deprecated */
public "setPlayer"(entityPlayer: $Player$$Type): void
public "setSlotBackground"(slotBackground: $IGuiTexture$$Type): void
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "slotBackground"(): $IGuiTexture
get "translateKey"(): string
get "allowCustomBackground"(): boolean
get "lDLRegister"(): boolean
set "allowCustomBackground"(value: boolean)
set "player"(value: $Player$$Type)
set "slotBackground"(value: $IGuiTexture$$Type)
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.DraggableScrollableWidgetGroup$ISelected" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DraggableScrollableWidgetGroup$ISelected {
"allowSelected"(double0: double, double1: double, int2: integer): boolean
"onSelected"(): void
"onUnSelected"(): void
}

export namespace $DraggableScrollableWidgetGroup$ISelected {
const probejs$$marker: never
}
export abstract class $DraggableScrollableWidgetGroup$ISelected$$Static implements $DraggableScrollableWidgetGroup$ISelected {
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.HsbColorWidget" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $IntConsumer$$Type } from "java.util.function.IntConsumer"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $IntSupplier$$Type } from "java.util.function.IntSupplier"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $HsbColorWidget extends $Widget implements $IConfigurableWidget {
constructor()
constructor(x: integer, y: integer, width: integer, height: integer)

public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "canDragIn"(dragging: any): boolean
public "deserializeInnerNBT"(nbt: $CompoundTag$$Type): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "initTemplate"(): void
public "isLDLRegister"(): boolean
public "isMouseOverAlphaSlider"(mouseX: double, mouseY: double): boolean
public "isMouseOverColorSlider"(mouseX: double, mouseY: double): boolean
public "isMouseOverMain"(mouseX: double, mouseY: double): boolean
public "isShowAlpha"(): boolean
public "isShowRGB"(): boolean
public "name"(): string
public "serializeInnerNBT"(): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setBarWidth"(barWidth: integer): $HsbColorWidget
public "setColor"(argb: integer): $HsbColorWidget
public "setColorSupplier"(colorSupplier: $IntSupplier$$Type): $HsbColorWidget
public "setGap"(gap: integer): $HsbColorWidget
public "setOnChanged"(onChanged: $IntConsumer$$Type): $HsbColorWidget
public "setShowAlpha"(showAlpha: boolean): $HsbColorWidget
public "setShowRGB"(showRGB: boolean): $HsbColorWidget
public "widget"(): $Widget
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
get "showAlpha"(): boolean
get "showRGB"(): boolean
set "barWidth"(value: integer)
set "color"(value: integer)
set "colorSupplier"(value: $IntSupplier$$Type)
set "gap"(value: integer)
set "onChanged"(value: $IntConsumer$$Type)
set "showAlpha"(value: boolean)
set "showRGB"(value: boolean)
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.SelectableWidgetGroup" {
import { $Position$$Type } from "com.lowdragmc.lowdraglib.utils.Position"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Size$$Type } from "com.lowdragmc.lowdraglib.utils.Size"
import { $DraggableScrollableWidgetGroup$ISelected } from "com.lowdragmc.lowdraglib.gui.widget.DraggableScrollableWidgetGroup$ISelected"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $WidgetGroup } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $SelectableWidgetGroup extends $WidgetGroup implements $DraggableScrollableWidgetGroup$ISelected {
constructor(position: $Position$$Type)
constructor(x: integer, y: integer, width: integer, height: integer)
constructor(position: $Position$$Type, size: $Size$$Type)

public "allowSelected"(mouseX: double, mouseY: double, button: integer): boolean
public "canDragIn"(dragging: any): boolean
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
public "getPrefab"<T>(): T
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "isLDLRegister"(): boolean
public "isOverlayUnderWidgets"(): boolean
public "isSelected"(): boolean
public "name"(): string
public "onSelected"(): void
public "onUnSelected"(): void
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setOnSelected"(onSelected: $Consumer$$Type<$SelectableWidgetGroup$$Type>): $SelectableWidgetGroup
public "setOnUnSelected"(onUnSelected: $Consumer$$Type<$SelectableWidgetGroup$$Type>): $SelectableWidgetGroup
public "setOverlayUnderWidgets"(overlayUnderWidgets: boolean): void
public "setPrefab"(prefab: any): void
public "setSelectedTexture"(selectedTexture: $IGuiTexture$$Type): $SelectableWidgetGroup
public "setSelectedTexture"(border: integer, color: integer): $SelectableWidgetGroup
get "chatComponent"(): $Component
get "prefab"(): T
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
get "overlayUnderWidgets"(): boolean
get "selected"(): boolean
set "overlayUnderWidgets"(value: boolean)
set "prefab"(value: any)
set "selectedTexture"(value: $IGuiTexture$$Type)
}
}

declare module "com.lowdragmc.lowdraglib.gui.graphprocessor.data.PortEdge" {
import { $BaseNode, $BaseNode$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseNode"
import { $BaseGraph$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseGraph"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $IPersistedSerializable } from "com.lowdragmc.lowdraglib.syncdata.IPersistedSerializable"
import { $NodePort, $NodePort$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.NodePort"

export class $PortEdge implements $IPersistedSerializable {
constructor()

public "copy"(): $PortEdge
public static "createNewEdge"(graph: $BaseGraph$$Type, inputPort: $NodePort$$Type, outputPort: $NodePort$$Type): $PortEdge
public "deserializeNBT"(tag: $CompoundTag$$Type): void
public "initialize"(owner: $BaseGraph$$Type): void
public "onBeforeSerialize"(): void
public "serializeNBT"(): $CompoundTag
get "GUID"(): string
set "GUID"(value: string)
get "inputFieldName"(): string
set "inputFieldName"(value: string)
get "inputNode"(): $BaseNode
set "inputNode"(value: $BaseNode$$Type)
get "inputNodeGUID"(): string
set "inputNodeGUID"(value: string)
get "inputPort"(): $NodePort
set "inputPort"(value: $NodePort$$Type)
get "inputPortIdentifier"(): string
set "inputPortIdentifier"(value: string)
get "outputFieldName"(): string
set "outputFieldName"(value: string)
get "outputNode"(): $BaseNode
set "outputNode"(value: $BaseNode$$Type)
get "outputNodeGUID"(): string
set "outputNodeGUID"(value: string)
get "outputPort"(): $NodePort
set "outputPort"(value: $NodePort$$Type)
get "outputPortIdentifier"(): string
set "outputPortIdentifier"(value: string)
get "passThroughBuffer"(): any
set "passThroughBuffer"(value: any)
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.PhantomSlotWidget" {
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $Component } from "net.minecraft.network.chat.Component"
import { $ClickType$$Type } from "net.minecraft.world.inventory.ClickType"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $SlotWidget } from "com.lowdragmc.lowdraglib.gui.widget.SlotWidget"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $Target } from "com.lowdragmc.lowdraglib.gui.ingredient.Target"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Slot$$Type } from "net.minecraft.world.inventory.Slot"
import { $IGhostIngredientTarget } from "com.lowdragmc.lowdraglib.gui.ingredient.IGhostIngredientTarget"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $IItemTransfer$$Type } from "com.lowdragmc.lowdraglib.side.item.IItemTransfer"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $PhantomSlotWidget extends $SlotWidget implements $IGhostIngredientTarget, $IConfigurableWidget {
constructor()
constructor(itemHandler: $IItemTransfer$$Type, slotIndex: integer, xPosition: integer, yPosition: integer)

public "areItemsEqual"(itemStack1: $ItemStack$$Type, itemStack2: $ItemStack$$Type): boolean
public "canDragIn"(dragging: any): boolean
public "deserializeInnerNBT"(nbt: $CompoundTag$$Type): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
public "getMaxStackSize"(): integer
/** Client only, do not use in server scripts */
public "getPhantomTargets"(ingredient: any): $List<$Target>
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "initTemplate"(): void
public "isClearSlotOnRightClick"(): boolean
public "isLDLRegister"(): boolean
public "kjs$self"(): $SlotWidget
public "name"(): string
public "self"(): $Widget
public "serializeInnerNBT"(): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setClearSlotOnRightClick"(clearSlotOnRightClick: boolean): $PhantomSlotWidget
public "setMaxStackSize"(maxStackSize: integer): void
public "slotClickPhantom"(slot: $Slot$$Type, mouseButton: integer, clickTypeIn: $ClickType$$Type, stackHeld: $ItemStack$$Type): $ItemStack
public "widget"(): $Widget
get "chatComponent"(): $Component
get "maxStackSize"(): integer
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "clearSlotOnRightClick"(): boolean
get "lDLRegister"(): boolean
set "clearSlotOnRightClick"(value: boolean)
set "maxStackSize"(value: integer)
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.layout.Align" {
import { $Enum } from "java.lang.Enum"

export class $Align extends $Enum<$Align> {
static readonly "BOTTOM_CENTER": $Align
static readonly "BOTTOM_LEFT": $Align
static readonly "BOTTOM_RIGHT": $Align
static readonly "CENTER": $Align
static readonly "LEFT_CENTER": $Align
static readonly "NONE": $Align
static readonly "RIGHT_CENTER": $Align
static readonly "TOP_CENTER": $Align
static readonly "TOP_LEFT": $Align
static readonly "TOP_RIGHT": $Align

public static "valueOf"(name: string): $Align
public static "values"(): $Align[]
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.codeeditor.language.FoldingManager" {
import { $List } from "java.util.List"
import { $FoldableRegion } from "com.lowdragmc.lowdraglib.gui.widget.codeeditor.FoldableRegion"
import { $Document$$Type } from "com.lowdragmc.lowdraglib.gui.widget.codeeditor.Document"

export class $FoldingManager {
constructor()

public "getRegions"(): $List<$FoldableRegion>
public "isLineVisible"(line: integer): boolean
public "toggleFold"(line: integer): void
public "updateFoldingRegions"(document: $Document$$Type): void
get "regions"(): $List<$FoldableRegion>
}
}

declare module "com.lowdragmc.lowdraglib.gui.texture.ColorRectTexture" {
import { $Color$$Type } from "java.awt.Color"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $TransformTexture } from "com.lowdragmc.lowdraglib.gui.texture.TransformTexture"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IGuiTexture, $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"

export class $ColorRectTexture extends $TransformTexture {
constructor(color: integer)
constructor()
constructor(color: $Color$$Type)

public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "copy"(): $IGuiTexture
public "createPreview"(father: $ConfiguratorGroup$$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IGuiTexture
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
public static "serializeWrapper"(texture: $IGuiTexture$$Type): $CompoundTag
public "setBottomRadius"(radius: float): $ColorRectTexture
public "setColor"(color: integer): $ColorRectTexture
public "setLeftRadius"(radius: float): $ColorRectTexture
public "setRadius"(radius: float): $ColorRectTexture
public "setRadiusLB"(radiusLB: float): $ColorRectTexture
public "setRadiusLT"(radiusLT: float): $ColorRectTexture
public "setRadiusRB"(radiusRB: float): $ColorRectTexture
public "setRadiusRT"(radiusRT: float): $ColorRectTexture
public "setRightRadius"(radius: float): $ColorRectTexture
public "setTopRadius"(radius: float): $ColorRectTexture
public "setUIResource"(texturesResource: $Resource$$Type<$IGuiTexture$$Type>): void
public "transform"(xOffset: integer, yOffset: integer): $IGuiTexture
/** Client only, do not use in server scripts */
public "updateTick"(): void
get "color"(): integer
set "color"(value: integer)
get "radiusLB"(): float
set "radiusLB"(value: float)
get "radiusLT"(): float
set "radiusLT"(value: float)
get "radiusRB"(): float
set "radiusRB"(value: float)
get "radiusRT"(): float
set "radiusRT"(value: float)
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
set "bottomRadius"(value: float)
set "leftRadius"(value: float)
set "radius"(value: float)
set "rightRadius"(value: float)
set "topRadius"(value: float)
set "uIResource"(value: $Resource$$Type<$IGuiTexture$$Type>)
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.codeeditor.language.LanguageDefinition" {
import { $List, $List$$Type } from "java.util.List"
import { $ILanguageDefinition } from "com.lowdragmc.lowdraglib.gui.widget.codeeditor.language.ILanguageDefinition"
import { $Matcher$$Type } from "java.util.regex.Matcher"
import { $Set, $Set$$Type } from "java.util.Set"
import { $Pattern } from "java.util.regex.Pattern"
import { $TokenType, $TokenType$$Type } from "com.lowdragmc.lowdraglib.gui.widget.codeeditor.language.TokenType"

export class $LanguageDefinition implements $ILanguageDefinition {
constructor(name: string, typesInOrder: $List$$Type<$TokenType$$Type>, indentations: $Set$$Type<string>)

public "compileTokenPattern"(): $LanguageDefinition
public "getIndentations"(): $Set<string>
public "getName"(): string
public "getTokenPattern"(): $Pattern
public "getTokenType"(matcher: $Matcher$$Type): $TokenType
public "getTypesInOrder"(): $List<$TokenType>
public "shouldIncreaseIndentation"(trimmedLine: string): boolean
get "indentations"(): $Set<string>
get "name"(): string
get "tokenPattern"(): $Pattern
get "typesInOrder"(): $List<$TokenType>
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.codeeditor.language.SyntaxParser" {
import { $ILanguageDefinition, $ILanguageDefinition$$Type } from "com.lowdragmc.lowdraglib.gui.widget.codeeditor.language.ILanguageDefinition"
import { $List } from "java.util.List"
import { $Token } from "com.lowdragmc.lowdraglib.gui.widget.codeeditor.language.Token"

export class $SyntaxParser {
constructor()

public "getLanguageDefinition"(): $ILanguageDefinition
public "parseLine"(lineText: string): $List<$Token>
public "setLanguageDefinition"(languageDefinition: $ILanguageDefinition$$Type): void
get "languageDefinition"(): $ILanguageDefinition
set "languageDefinition"(value: $ILanguageDefinition$$Type)
}
}

declare module "com.lowdragmc.lowdraglib.gui.editor.ui.ToolPanel" {
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Size$$Type } from "com.lowdragmc.lowdraglib.utils.Size"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $Function$$Type } from "java.util.function.Function"
import { $TabContainer } from "com.lowdragmc.lowdraglib.gui.widget.TabContainer"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $Editor, $Editor$$Type } from "com.lowdragmc.lowdraglib.gui.editor.ui.Editor"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ResourceTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.ResourceTexture"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $WidgetGroup, $WidgetGroup$$Type } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $ToolPanel extends $WidgetGroup {
/** @deprecated */
static readonly "WIDTH": integer

constructor(editor: $Editor$$Type)

public "addNewToolBox"(name: string, texture: $ResourceTexture$$Type, toolBoxSupplier: $Function$$Type<$Size$$Type, $WidgetGroup>): void
/** @deprecated */
public "addNewToolBox"(name: string, texture: $ResourceTexture$$Type, toolBox: $WidgetGroup$$Type): void
public "canDragIn"(dragging: any): boolean
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
public "getEditor"(): $Editor
public "getRegisterUI"(): $LDLRegister
public "getTabContainer"(): $TabContainer
public "getToolBoxes"(): $List<$Widget>
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "hide"(animate: boolean): void
public "hide"(): void
public "isLDLRegister"(): boolean
public "isShow"(): boolean
public "name"(): string
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setTitle"(title: string): void
public "show"(): void
public "show"(animate: boolean): void
get "chatComponent"(): $Component
get "editor"(): $Editor
get "registerUI"(): $LDLRegister
get "tabContainer"(): $TabContainer
get "toolBoxes"(): $List<$Widget>
get "translateKey"(): string
get "lDLRegister"(): boolean
set "title"(value: string)
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.codeeditor.CodeEditor" {
import { $Cursor, $Cursor$$Type } from "com.lowdragmc.lowdraglib.gui.widget.codeeditor.Cursor"
import { $List, $List$$Type } from "java.util.List"
import { $ILanguageDefinition$$Type } from "com.lowdragmc.lowdraglib.gui.widget.codeeditor.language.ILanguageDefinition"
import { $FoldingManager } from "com.lowdragmc.lowdraglib.gui.widget.codeeditor.language.FoldingManager"
import { $SyntaxParser } from "com.lowdragmc.lowdraglib.gui.widget.codeeditor.language.SyntaxParser"
import { $StyledLine } from "com.lowdragmc.lowdraglib.gui.widget.codeeditor.StyledLine"
import { $StyleManager } from "com.lowdragmc.lowdraglib.gui.widget.codeeditor.language.StyleManager"
import { $Selection } from "com.lowdragmc.lowdraglib.gui.widget.codeeditor.Selection"
import { $Document } from "com.lowdragmc.lowdraglib.gui.widget.codeeditor.Document"

export class $CodeEditor {
static readonly "stopQuickMoveChars": $List<character>

constructor()

public "backspace"(): void
public "clearSelection"(): void
public "copySelection"(): string
public "cutSelection"(): string
public "deleteForwardText"(): void
public "deleteSelection"(): void
public "deleteText"(): void
public "endSelection"(): void
public "enter"(): void
public "getCursor"(): $Cursor
public "getDocument"(): $Document
public "getFoldingManager"(): $FoldingManager
public "getIndentString"(): string
public "getLines"(): $List<string>
public "getSelection"(): $Selection
public "getStyleManager"(): $StyleManager
public "getStyledLines"(): $List<$StyledLine>
public "getSyntaxParser"(): $SyntaxParser
public "getVisibleLinesCache"(): $List<$StyledLine>
public "getVisibleStyledLines"(): $List<$StyledLine>
public "insertText"(text: string): void
public "isSelecting"(): boolean
public "isSelectionValid"(): boolean
public "moveCursorDown"(): void
public "moveCursorEnd"(): void
public "moveCursorLeft"(ctrl: boolean): void
public "moveCursorLeft"(): void
public "moveCursorRight"(): void
public "moveCursorRight"(ctrl: boolean): void
public "moveCursorStart"(): void
public "moveCursorUp"(): void
public "pasteText"(text: string): void
public "replaceSelection"(text: string): void
public "selectAll"(): void
public "selectLine"(location: $Cursor$$Type): void
public "selectWord"(location: $Cursor$$Type): void
public "setCursor"(line: integer, column: integer): void
public "setCursor"(cursor: $Cursor$$Type): void
public "setCursorColumn"(column: integer): void
public "setCursorLine"(line: integer): void
public "setIndentString"(indentString: string): void
/**
 * Sets the formatter to use the provided languageDef.
 * Use with any of `EditorLanguages.`, or with `new EditorLanguageDefinition(...)`.
 */
public "setLanguageDefinition"(languageDefinition: $ILanguageDefinition$$Type): void
/** Sets the formatter to unformatted text */
public "setLanguageDefinitionUnformatted"(): void
public "setLines"(lines: $List$$Type<string>): void
public "startSelection"(): void
public "updateSelection"(): void
get "cursor"(): $Cursor
get "document"(): $Document
get "foldingManager"(): $FoldingManager
get "indentString"(): string
get "lines"(): $List<string>
get "selection"(): $Selection
get "styleManager"(): $StyleManager
get "styledLines"(): $List<$StyledLine>
get "syntaxParser"(): $SyntaxParser
get "visibleLinesCache"(): $List<$StyledLine>
get "visibleStyledLines"(): $List<$StyledLine>
get "selecting"(): boolean
get "selectionValid"(): boolean
set "cursor"(value: $Cursor$$Type)
set "cursorColumn"(value: integer)
set "cursorLine"(value: integer)
set "indentString"(value: string)
set "languageDefinition"(value: $ILanguageDefinition$$Type)
set "lines"(value: $List$$Type<string>)
}
}

declare module "com.lowdragmc.lowdraglib.gui.graphprocessor.data.NodePortContainer" {
import { $BaseNode$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseNode"
import { $List } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $NodePort } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.NodePort"
import { $Collection$$Type } from "java.util.Collection"
import { $PortEdge$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.PortEdge"
import { $IntFunction$$Type } from "java.util.function.IntFunction"
import { $ArrayList } from "java.util.ArrayList"

export class $NodePortContainer extends $ArrayList<$NodePort> {
constructor(node: $BaseNode$$Type)

public "add"(edge: $PortEdge$$Type): void
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E): $List<E>
public static "of"<E>(e0: E, e1: E): $List<E>
public static "of"<E>(e0: E): $List<E>
public static "of"<E>(): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(...e0s: E[]): $List<E>
public "parallelStream"(): $Stream<$NodePort>
public "remove"(edge: $PortEdge$$Type): void
public "stream"(): $Stream<$NodePort>
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
}
}

declare module "com.lowdragmc.lowdraglib.gui.texture.ProgressTexture$FillDirection" {
import { $Enum } from "java.lang.Enum"

export class $ProgressTexture$FillDirection extends $Enum<$ProgressTexture$FillDirection> {
static readonly "ALWAYS_FULL": $ProgressTexture$FillDirection
static readonly "DOWN_TO_UP": $ProgressTexture$FillDirection
static readonly "LEFT_TO_RIGHT": $ProgressTexture$FillDirection
static readonly "RIGHT_TO_LEFT": $ProgressTexture$FillDirection
static readonly "UP_TO_DOWN": $ProgressTexture$FillDirection

public "getDrawnHeight"(progress: double): double
public "getDrawnU"(progress: double): double
public "getDrawnV"(progress: double): double
public "getDrawnWidth"(progress: double): double
public static "valueOf"(name: string): $ProgressTexture$FillDirection
public static "values"(): $ProgressTexture$FillDirection[]
}
}

declare module "com.lowdragmc.lowdraglib.gui.graphprocessor.data.PortData" {
import { $List, $List$$Type } from "java.util.List"
import { $Class, $Class$$Type } from "java.lang.Class"

export class $PortData {
"acceptMultipleEdges": boolean
"displayName": string
"displayType": $Class
"identifier": string
"portColor": integer
"tooltip": $List<string>

constructor()

public "CopyFrom"(other: $PortData$$Type): void
public "acceptMultipleEdges"(acceptMultipleEdges: boolean): $PortData
public "displayName"(displayName: string): $PortData
public "displayType"(displayType: $Class$$Type): $PortData
public "identifier"(identifier: string): $PortData
public "portColor"(portColor: integer): $PortData
public "tooltip"(tooltip: $List$$Type<string>): $PortData
}
}

declare module "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseNode$PortUpdate" {
import { $BaseNode } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseNode"
import { $List } from "java.util.List"
import { $Record } from "java.lang.Record"

export class $BaseNode$PortUpdate extends $Record {
public "fieldNames"(): $List<string>
public "node"(): $BaseNode
}
}

declare module "com.lowdragmc.lowdraglib.gui.modular.IUIHolder" {
import { $ModularUI } from "com.lowdragmc.lowdraglib.gui.modular.ModularUI"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $IUIHolder {
"createUI"(player0: $Player$$Type): $ModularUI
"isInvalid"(): boolean
"isRemote"(): boolean
"markAsDirty"(): void
get "invalid"(): boolean
get "remote"(): boolean
}

export namespace $IUIHolder {
const EMPTY: $IUIHolder
}
export abstract class $IUIHolder$$Static implements $IUIHolder {
static readonly "EMPTY": $IUIHolder

}
}

declare module "com.lowdragmc.lowdraglib.gui.animation.Animation" {
import { $Position$$Type } from "com.lowdragmc.lowdraglib.utils.Position"
import { $FloatConsumer$$Type } from "it.unimi.dsi.fastutil.floats.FloatConsumer"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Size$$Type } from "com.lowdragmc.lowdraglib.utils.Size"
import { $IEase$$Type } from "com.lowdragmc.lowdraglib.utils.interpolate.IEase"
import { $Widget, $Widget$$Type } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"

export class $Animation {
constructor()

public "appendOnFinish"(onFinish: $Runnable$$Type): $Animation
public "delay"(delay: long): $Animation
/** Client only, do not use in server scripts */
public "drawInBackground"(graphics: $GuiGraphics$$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
/** Client only, do not use in server scripts */
public "drawInForeground"(graphics: $GuiGraphics$$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "duration"(duration: long): $Animation
public "ease"(ease: $IEase$$Type): $Animation
public "getOnFinish"(): $Runnable
public "getWidget"(): $Widget
public "isFinish"(): boolean
public "onFinish"(onFinish: $Runnable$$Type): $Animation
public "onUpdate"(onUpdate: $FloatConsumer$$Type): $Animation
public "position"(position: $Position$$Type): $Animation
public "setWidget"(widget: $Widget$$Type): $Animation
public "size"(size: $Size$$Type): $Animation
get "widget"(): $Widget
get "finish"(): boolean
set "widget"(value: $Widget$$Type)
}
}

declare module "com.lowdragmc.lowdraglib.gui.texture.TransformTexture" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IGuiTexture, $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"

export class $TransformTexture implements $IGuiTexture {
constructor()

public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "copy"(): $IGuiTexture
public "createPreview"(father: $ConfiguratorGroup$$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IGuiTexture
/** Client only, do not use in server scripts */
public "draw"(graphics: $GuiGraphics$$Type, mouseX: integer, mouseY: integer, x: float, y: float, width: integer, height: integer): void
/** Client only, do not use in server scripts */
public "drawSubArea"(graphics: $GuiGraphics$$Type, x: float, y: float, width: float, height: float, drawnU: float, drawnV: float, drawnWidth: float, drawnHeight: float): void
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getRotation"(): float
public "getScale"(): float
public "getTranslateKey"(): string
public "getXOffset"(): float
public "getYOffset"(): float
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
public static "serializeWrapper"(texture: $IGuiTexture$$Type): $CompoundTag
public "setColor"(color: integer): $IGuiTexture
public "setUIResource"(texturesResource: $Resource$$Type<$IGuiTexture$$Type>): void
public "transform"(xOffset: float, yOffset: float): $TransformTexture
public "transform"(xOffset: integer, yOffset: integer): $IGuiTexture
/** Client only, do not use in server scripts */
public "updateTick"(): void
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "rotation"(): float
get "scale"(): float
get "translateKey"(): string
get "xOffset"(): float
get "yOffset"(): float
get "lDLRegister"(): boolean
set "color"(value: integer)
set "uIResource"(value: $Resource$$Type<$IGuiTexture$$Type>)
}
}

declare module "com.lowdragmc.lowdraglib.gui.editor.ui.ConfigPanel$Tab" {
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $ConfiguratorGroup, $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ResourceTexture, $ResourceTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.ResourceTexture"

export class $ConfigPanel$Tab {
static readonly "RESOURCE": $ConfigPanel$Tab
static readonly "WIDGET": $ConfigPanel$Tab
readonly "configurable": $Consumer<$ConfiguratorGroup>
readonly "icon": $ResourceTexture
readonly "tooltip": $Component

public static "createTab"(icon: $ResourceTexture$$Type, tooltip: $Component$$Type, configurable: $Consumer$$Type<$ConfiguratorGroup$$Type>): $ConfigPanel$Tab
public static "createTab"(icon: $ResourceTexture$$Type, tooltip: $Component$$Type): $ConfigPanel$Tab
}
}

declare module "com.lowdragmc.lowdraglib.gui.util.TreeNode" {
import { $List } from "java.util.List"
import { $Predicate$$Type } from "java.util.function.Predicate"

export class $TreeNode<T = any, K = any> {
readonly "dimension": integer

constructor(dimension: integer, key: T)

public "addContent"(key: T, content: K): void
public "createChild"(childKey: T): $TreeNode<T, K>
public "getChild"(key: T): $TreeNode<T, K>
public "getChildren"(): $List<$TreeNode<T, K>>
public "getContent"(): K
public "getKey"(): T
public "getOrCreateChild"(childKey: T): $TreeNode<T, K>
public "isLeaf"(): boolean
public "removeChild"(key: T): void
public "setValid"(valid: $Predicate$$Type<$TreeNode$$Type<T, K>>): $TreeNode<T, K>
get "children"(): $List<$TreeNode<T, K>>
get "content"(): K
get "key"(): T
get "leaf"(): boolean
set "valid"(value: $Predicate$$Type<$TreeNode$$Type<T, K>>)
}
}

declare module "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseNode$NodeFieldInformation" {
import { $ICustomPortBehaviorDelegate, $ICustomPortBehaviorDelegate$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.custom.ICustomPortBehaviorDelegate"
import { $Field, $Field$$Type } from "java.lang.reflect.Field"

export class $BaseNode$NodeFieldInformation {
constructor(info: $Field$$Type, name: string, color: integer, input: boolean, isMultiple: boolean, tooltips: string[], priority: integer, behavior: $ICustomPortBehaviorDelegate$$Type)

get "behavior"(): $ICustomPortBehaviorDelegate
set "behavior"(value: $ICustomPortBehaviorDelegate$$Type)
get "color"(): integer
set "color"(value: integer)
get "fieldName"(): string
set "fieldName"(value: string)
get "info"(): $Field
set "info"(value: $Field$$Type)
get "input"(): boolean
set "input"(value: boolean)
get "isMultiple"(): boolean
set "isMultiple"(value: boolean)
get "name"(): string
set "name"(value: string)
get "priority"(): integer
set "priority"(value: integer)
get "tooltips"(): string[]
set "tooltips"(value: string[])
}
}

declare module "com.lowdragmc.lowdraglib.gui.texture.AnimationTexture" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $TransformTexture } from "com.lowdragmc.lowdraglib.gui.texture.TransformTexture"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IGuiTexture, $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"

export class $AnimationTexture extends $TransformTexture {
constructor(imageLocation: $ResourceLocation$$Type)
constructor(imageLocation: string)
constructor()

public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "copy"(): $AnimationTexture
public "createPreview"(father: $ConfiguratorGroup$$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IGuiTexture
public "getAnimation"(): integer
public "getCellSize"(): integer
public "getChatComponent"(): $Component
public "getColor"(): integer
public "getFrom"(): integer
public "getRegisterUI"(): $LDLRegister
public "getTo"(): integer
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
public static "serializeWrapper"(texture: $IGuiTexture$$Type): $CompoundTag
public "setAnimation"(from: integer, to: integer): $AnimationTexture
public "setAnimation"(animation: integer): $AnimationTexture
public "setCellSize"(cellSize: integer): $AnimationTexture
public "setColor"(color: integer): $AnimationTexture
public "setTexture"(imageLocation: string): $AnimationTexture
public "setUIResource"(texturesResource: $Resource$$Type<$IGuiTexture$$Type>): void
public "transform"(xOffset: integer, yOffset: integer): $IGuiTexture
/** Client only, do not use in server scripts */
public "updateTick"(): void
get "imageLocation"(): $ResourceLocation
set "imageLocation"(value: $ResourceLocation$$Type)
get "animation"(): integer
get "cellSize"(): integer
get "chatComponent"(): $Component
get "color"(): integer
get "from"(): integer
get "registerUI"(): $LDLRegister
get "to"(): integer
get "translateKey"(): string
get "lDLRegister"(): boolean
set "animation"(value: integer)
set "cellSize"(value: integer)
set "color"(value: integer)
set "texture"(value: string)
set "uIResource"(value: $Resource$$Type<$IGuiTexture$$Type>)
}
}

declare module "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseGraph$ComputeOrderType" {
import { $Enum } from "java.lang.Enum"

export class $BaseGraph$ComputeOrderType extends $Enum<$BaseGraph$ComputeOrderType> {
static readonly "BreadthFirst": $BaseGraph$ComputeOrderType
static readonly "DepthFirst": $BaseGraph$ComputeOrderType

public static "valueOf"(name: string): $BaseGraph$ComputeOrderType
public static "values"(): $BaseGraph$ComputeOrderType[]
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.codeeditor.language.Languages" {
import { $LanguageDefinition } from "com.lowdragmc.lowdraglib.gui.widget.codeeditor.language.LanguageDefinition"

export interface $Languages {
}

export namespace $Languages {
const JAVASCRIPT: $LanguageDefinition
const UNFORMATTED: $LanguageDefinition
}
export abstract class $Languages$$Static implements $Languages {
static readonly "JAVASCRIPT": $LanguageDefinition
static readonly "UNFORMATTED": $LanguageDefinition

}
}

declare module "com.lowdragmc.lowdraglib.gui.editor.ui.ResourcePanel" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Resource, $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Map } from "java.util.Map"
import { $Resources, $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $WidgetGroup } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $Editor, $Editor$$Type } from "com.lowdragmc.lowdraglib.gui.editor.ui.Editor"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"
import { $ResourceContainer } from "com.lowdragmc.lowdraglib.gui.editor.ui.resource.ResourceContainer"

export class $ResourcePanel extends $WidgetGroup {
static readonly "HEIGHT": integer

constructor(editor: $Editor$$Type)

public "canDragIn"(dragging: any): boolean
public "clear"(): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
public "getContainerMap"(): $Map<$Resource, $ResourceContainer>
public "getEditor"(): $Editor
public "getRegisterUI"(): $LDLRegister
public "getResources"(): $Resources
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "hide"(): void
public "isLDLRegister"(): boolean
public "isShow"(): boolean
public "loadResource"(resources: $Resources$$Type, merge: boolean): void
public "name"(): string
public "rebuildResource"(resourceName: string): void
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "show"(): void
get "chatComponent"(): $Component
get "containerMap"(): $Map<$Resource, $ResourceContainer>
get "editor"(): $Editor
get "registerUI"(): $LDLRegister
get "resources"(): $Resources
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.lowdraglib.gui.editor.ColorPattern" {
import { $ColorRectTexture } from "com.lowdragmc.lowdraglib.gui.texture.ColorRectTexture"
import { $Enum } from "java.lang.Enum"
import { $ColorBorderTexture } from "com.lowdragmc.lowdraglib.gui.texture.ColorBorderTexture"

export class $ColorPattern extends $Enum<$ColorPattern> {
static readonly "BLACK": $ColorPattern
static readonly "BLUE": $ColorPattern
static readonly "BRIGHT_RED": $ColorPattern
static readonly "BROWN": $ColorPattern
static readonly "CYAN": $ColorPattern
static readonly "DARK_GRAY": $ColorPattern
static readonly "GRAY": $ColorPattern
static readonly "GREEN": $ColorPattern
static readonly "LIGHT_BLUE": $ColorPattern
static readonly "LIGHT_GRAY": $ColorPattern
static readonly "LIME": $ColorPattern
static readonly "MAGENTA": $ColorPattern
static readonly "ORANGE": $ColorPattern
static readonly "PINK": $ColorPattern
static readonly "PURPLE": $ColorPattern
static readonly "RED": $ColorPattern
static readonly "SEAL_BLACK": $ColorPattern
static readonly "T_BLACK": $ColorPattern
static readonly "T_BLUE": $ColorPattern
static readonly "T_BRIGHT_RED": $ColorPattern
static readonly "T_BROWN": $ColorPattern
static readonly "T_CYAN": $ColorPattern
static readonly "T_DARK_GRAY": $ColorPattern
static readonly "T_GRAY": $ColorPattern
static readonly "T_GREEN": $ColorPattern
static readonly "T_LIGHT_BLUE": $ColorPattern
static readonly "T_LIGHT_GRAY": $ColorPattern
static readonly "T_LIME": $ColorPattern
static readonly "T_MAGENTA": $ColorPattern
static readonly "T_ORANGE": $ColorPattern
static readonly "T_PINK": $ColorPattern
static readonly "T_PURPLE": $ColorPattern
static readonly "T_RED": $ColorPattern
static readonly "T_SEAL_BLACK": $ColorPattern
static readonly "T_WHITE": $ColorPattern
static readonly "T_YELLOW": $ColorPattern
static readonly "WHITE": $ColorPattern
static readonly "YELLOW": $ColorPattern
readonly "color": integer

public "borderTexture"(border: integer): $ColorBorderTexture
public static "generateRainbowColor"(): integer
public static "generateRainbowColor"(tick: long): integer
public static "rainbowRectTexture"(): $ColorRectTexture
public static "rainbowRectTexture"(border: integer): $ColorBorderTexture
public "rectTexture"(): $ColorRectTexture
public static "valueOf"(name: string): $ColorPattern
public static "values"(): $ColorPattern[]
}
}

declare module "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseGraph" {
import { $BaseNode, $BaseNode$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseNode"
import { $IPersistedSerializable } from "com.lowdragmc.lowdraglib.syncdata.IPersistedSerializable"
import { $NodePort$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.NodePort"
import { $PortEdge, $PortEdge$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.PortEdge"
import { $Set } from "java.util.Set"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $ExposedParameter, $ExposedParameter$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.parameter.ExposedParameter"
import { $HashSet } from "java.util.HashSet"
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $List, $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BaseGraph$GraphChanges, $BaseGraph$GraphChanges$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseGraph$GraphChanges"
import { $BaseGraph$ComputeOrderType$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseGraph$ComputeOrderType"
import { $Map } from "java.util.Map"
import { $Class$$Type } from "java.lang.Class"

export class $BaseGraph implements $IPersistedSerializable {
readonly "edges": $List<$PortEdge>
readonly "edgesPerGUID": $Map<string, $PortEdge>
readonly "exposedParameters": $Map<string, $ExposedParameter>
readonly "graphOutputs": $Set<$BaseNode>
static readonly "invalidComputeOrder": integer
static readonly "loopComputeOrder": integer
readonly "nodes": $List<$BaseNode>
readonly "nodesPerGUID": $Map<string, $BaseNode>
readonly "usedGUIDs": $HashSet<$UUID>

constructor()
constructor(exposedParameters: $List$$Type<$ExposedParameter$$Type<any>>)

public "addGUID"(guid: $UUID$$Type): void
public "addGUID"(guid: string): void
public "addNode"(node: $BaseNode$$Type): $BaseNode
public static "areTypesConnectable"(from: $Class$$Type, to: $Class$$Type): boolean
public "connect"(inputPort: $NodePort$$Type, outputPort: $NodePort$$Type, autoDisconnectInputs: boolean): $PortEdge
public "connect"(inputPort: $NodePort$$Type, outputPort: $NodePort$$Type): $PortEdge
public "deserializeNBT"(tag: $CompoundTag$$Type): void
public "disconnect"(inputNode: $BaseNode$$Type, inputFieldName: string, outputNode: $BaseNode$$Type, outputFieldName: string): void
public "disconnect"(edge: $PortEdge$$Type): void
public "disconnect"(edgeGUID: string): void
public "getDepth"(): integer
public "getExposedParameterFromIdentifier"(parameterIdentifier: string): $ExposedParameter<any>
public "initialize"(): void
public "newGUID"(): $UUID
public "notifyNodeChanged"(node: $BaseNode$$Type): void
public "onAssetDeleted"(): void
public "removeNode"(node: $BaseNode$$Type): void
public "resetNodes"(): void
public "serializeNBT"(): $CompoundTag
public "updateComputeOrder"(type: $BaseGraph$ComputeOrderType$$Type): void
public "updateExposedParameter"(identifier: string, input: any): void
get "onGraphChanges"(): $Consumer<$BaseGraph$GraphChanges>
set "onGraphChanges"(value: $Consumer$$Type<$BaseGraph$GraphChanges$$Type>)
get "onParameterValueUpdated"(): $Consumer<$ExposedParameter>
set "onParameterValueUpdated"(value: $Consumer$$Type<$ExposedParameter$$Type>)
get "depth"(): integer
}
}

declare module "com.lowdragmc.lowdraglib.gui.texture.ResourceBorderTexture" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ResourceBorderTexture$NineSliceMode, $ResourceBorderTexture$NineSliceMode$$Type } from "com.lowdragmc.lowdraglib.gui.texture.ResourceBorderTexture$NineSliceMode"
import { $Component } from "net.minecraft.network.chat.Component"
import { $ResourceTexture } from "com.lowdragmc.lowdraglib.gui.texture.ResourceTexture"
import { $Size, $Size$$Type } from "com.lowdragmc.lowdraglib.utils.Size"
import { $IGuiTexture, $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"

export class $ResourceBorderTexture extends $ResourceTexture {
static readonly "BAR": $ResourceBorderTexture
static readonly "BORDERED_BACKGROUND": $ResourceBorderTexture
static readonly "BORDERED_BACKGROUND_BLUE": $ResourceBorderTexture
static readonly "BORDERED_BACKGROUND_INVERSE": $ResourceBorderTexture
static readonly "BUTTON_COMMON": $ResourceBorderTexture
static readonly "SELECTED": $ResourceBorderTexture
static readonly "VANILLA_BUTTON_NORMAL": $ResourceBorderTexture
static readonly "VANILLA_BUTTON_PRESSED": $ResourceBorderTexture
static readonly "VANILLA_BUTTON_SELECTED": $ResourceBorderTexture

constructor(imageLocation: string, imageWidth: integer, imageHeight: integer, cornerWidth: integer, cornerHeight: integer, sliceMode: $ResourceBorderTexture$NineSliceMode$$Type)
constructor(imageLocation: string, imageWidth: integer, imageHeight: integer, cornerWidth: integer, cornerHeight: integer)
constructor()

public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IGuiTexture
public "getChatComponent"(): $Component
public "getMode"(): $ResourceBorderTexture$NineSliceMode
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
public static "serializeWrapper"(texture: $IGuiTexture$$Type): $CompoundTag
public "setBorderSize"(width: integer, height: integer): $ResourceBorderTexture
public "setColor"(color: integer): $ResourceBorderTexture
public "setImageSize"(width: integer, height: integer): $ResourceBorderTexture
public "setSliceMode"(mode: $ResourceBorderTexture$NineSliceMode$$Type): $ResourceBorderTexture
public "setUIResource"(texturesResource: $Resource$$Type<$IGuiTexture$$Type>): void
public "transform"(xOffset: integer, yOffset: integer): $IGuiTexture
/** Client only, do not use in server scripts */
public "updateTick"(): void
get "borderSize"(): $Size
set "borderSize"(value: $Size$$Type)
get "imageSize"(): $Size
set "imageSize"(value: $Size$$Type)
get "mode"(): $ResourceBorderTexture$NineSliceMode
set "mode"(value: $ResourceBorderTexture$NineSliceMode$$Type)
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
set "color"(value: integer)
set "sliceMode"(value: $ResourceBorderTexture$NineSliceMode$$Type)
set "uIResource"(value: $Resource$$Type<$IGuiTexture$$Type>)
}
}

declare module "com.lowdragmc.lowdraglib.gui.editor.ui.MenuPanel" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Map } from "java.util.Map"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $MenuTab, $MenuTab$$Type } from "com.lowdragmc.lowdraglib.gui.editor.ui.menu.MenuTab"
import { $WidgetGroup } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $Editor, $Editor$$Type } from "com.lowdragmc.lowdraglib.gui.editor.ui.Editor"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $MenuPanel extends $WidgetGroup {
static readonly "HEIGHT": integer

constructor(editor: $Editor$$Type)

public "canDragIn"(dragging: any): boolean
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
public "getEditor"(): $Editor
public "getRegisterUI"(): $LDLRegister
public "getTab"<T extends $MenuTab>(name: string): T
public "getTabs"(): $Map<string, $MenuTab>
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "isLDLRegister"(): boolean
public "name"(): string
public "saveMenuData"(): void
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
get "chatComponent"(): $Component
get "editor"(): $Editor
get "registerUI"(): $LDLRegister
get "tabs"(): $Map<string, $MenuTab>
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.lowdraglib.gui.editor.configurator.IToggleConfigurable" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IConfigurable } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurable"

export interface $IToggleConfigurable extends $IConfigurable {
"buildConfigurator"(father: $ConfiguratorGroup$$Type): void
"getChatComponent"(): $Component
"getRegisterUI"(): $LDLRegister
"getTranslateKey"(): string
"group"(): string
"isEnable"(): boolean
"isLDLRegister"(): boolean
"name"(): string
"setEnable"(boolean0: boolean): void
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "enable"(): boolean
get "lDLRegister"(): boolean
set "enable"(value: boolean)
}

export namespace $IToggleConfigurable {
const probejs$$marker: never
}
export abstract class $IToggleConfigurable$$Static implements $IToggleConfigurable {
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.SlotWidget" {
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $ResourceBorderTexture } from "com.lowdragmc.lowdraglib.gui.texture.ResourceBorderTexture"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $Function$$Type } from "java.util.function.Function"
import { $IRecipeIngredientSlot } from "com.lowdragmc.lowdraglib.gui.ingredient.IRecipeIngredientSlot"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $ISlotWidgetKJS } from "com.lowdragmc.lowdraglib.kjs.forge.ISlotWidgetKJS"
import { $Container$$Type } from "net.minecraft.world.Container"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $IItemHandlerModifiable$$Type } from "net.minecraftforge.items.IItemHandlerModifiable"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ClickType$$Type } from "net.minecraft.world.inventory.ClickType"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $Slot } from "net.minecraft.world.inventory.Slot"
import { $List, $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $IItemTransfer$$Type } from "com.lowdragmc.lowdraglib.side.item.IItemTransfer"
import { $IngredientIO, $IngredientIO$$Type } from "com.lowdragmc.lowdraglib.jei.IngredientIO"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $SlotWidget extends $Widget implements $IRecipeIngredientSlot, $IConfigurableWidget, $ISlotWidgetKJS {
static readonly "ITEM_SLOT_TEXTURE": $ResourceBorderTexture

constructor(inventory: $Container$$Type, slotIndex: integer, xPosition: integer, yPosition: integer, canTakeItems: boolean, canPutItems: boolean)
constructor(itemHandler: $IItemTransfer$$Type, slotIndex: integer, xPosition: integer, yPosition: integer, canTakeItems: boolean, canPutItems: boolean)
constructor()
constructor(itemHandler: $IItemTransfer$$Type, slotIndex: integer, xPosition: integer, yPosition: integer)
constructor(inventory: $Container$$Type, slotIndex: integer, xPosition: integer, yPosition: integer)

public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "canDragIn"(dragging: any): boolean
public "canMergeSlot"(stack: $ItemStack$$Type): boolean
public "canPutStack"(stack: $ItemStack$$Type): boolean
public "canTakeStack"(player: $Player$$Type): boolean
public "deserializeInnerNBT"(nbt: $CompoundTag$$Type): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getAdditionalToolTips"(list: $List$$Type<$Component$$Type>): $List<$Component>
public "getChatComponent"(): $Component
public "getFullTooltipTexts"(): $List<$Component>
public "getHandler"(): $Slot
public "getIngredientIO"(): $IngredientIO
public "getItem"(): $ItemStack
public "getLastItem"(): $ItemStack
public "getRealStack"(itemStack: $ItemStack$$Type): $ItemStack
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "getXEIChance"(): float
public "getXEICurrentIngredient"(): any
public "getXEIIngredientOverMouse"(mouseX: double, mouseY: double): any
public "getXEIIngredients"(): $List<any>
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "initTemplate"(): void
public "isEnabled"(): boolean
public "isLDLRegister"(): boolean
public "kjs$self"(): $SlotWidget
public "name"(): string
public "onSlotChanged"(): void
public "self"(): $Widget
public "serializeInnerNBT"(): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setBackgroundTexture"(backgroundTexture: $IGuiTexture$$Type): $SlotWidget
public "setCanPutItems"(canPutItems: boolean): $SlotWidget
public "setCanTakeItems"(canTakeItems: boolean): $SlotWidget
public "setChangeListener"(changeListener: $Runnable$$Type): $SlotWidget
public "setContainerSlot"(inventory: $Container$$Type, slotIndex: integer): $SlotWidget
public "setDrawHoverOverlay"(drawHoverOverlay: boolean): $SlotWidget
public "setDrawHoverTips"(drawHoverTips: boolean): $SlotWidget
public "setHandlerSlot"(itemHandler: $IItemTransfer$$Type, slotIndex: integer): $SlotWidget
public "setHandlerSlot"(itemHandler: $IItemHandlerModifiable$$Type, slot: integer): void
public "setIngredientIO"(ingredientIO: $IngredientIO$$Type): $SlotWidget
public "setItem"(stack: $ItemStack$$Type, notify: boolean): void
public "setItem"(stack: $ItemStack$$Type): void
public "setItemHook"(itemHook: $Function$$Type<$ItemStack$$Type, $ItemStack>): $SlotWidget
public "setLocationInfo"(isPlayerContainer: boolean, isPlayerHotBar: boolean): $SlotWidget
public "setOnAddedTooltips"(onAddedTooltips: $BiConsumer$$Type<$SlotWidget$$Type, $List$$Type<$Component$$Type>>): $SlotWidget
public "setXEIChance"(XEIChance: float): $SlotWidget
public "slotClick"(dragType: integer, clickTypeIn: $ClickType$$Type, player: $Player$$Type): $ItemStack
public "widget"(): $Widget
get "drawHoverOverlay"(): boolean
set "drawHoverOverlay"(value: boolean)
get "drawHoverTips"(): boolean
set "drawHoverTips"(value: boolean)
get "isPlayerContainer"(): boolean
set "isPlayerContainer"(value: boolean)
get "isPlayerHotBar"(): boolean
set "isPlayerHotBar"(value: boolean)
get "chatComponent"(): $Component
get "fullTooltipTexts"(): $List<$Component>
get "handler"(): $Slot
get "ingredientIO"(): $IngredientIO
get "item"(): $ItemStack
get "lastItem"(): $ItemStack
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "xEIChance"(): float
get "xEICurrentIngredient"(): any
get "xEIIngredients"(): $List<any>
get "enabled"(): boolean
get "lDLRegister"(): boolean
set "backgroundTexture"(value: $IGuiTexture$$Type)
set "canPutItems"(value: boolean)
set "canTakeItems"(value: boolean)
set "changeListener"(value: $Runnable$$Type)
set "ingredientIO"(value: $IngredientIO$$Type)
set "item"(value: $ItemStack$$Type)
set "itemHook"(value: $Function$$Type<$ItemStack$$Type, $ItemStack>)
set "onAddedTooltips"(value: $BiConsumer$$Type<$SlotWidget$$Type, $List$$Type<$Component$$Type>>)
set "xEIChance"(value: float)
}
}

declare module "com.lowdragmc.lowdraglib.gui.graphprocessor.processor.BaseGraphProcessor" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $BaseNode, $BaseNode$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseNode"
import { $BaseGraph$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseGraph"
import { $Iterator } from "java.util.Iterator"
import { $Spliterator } from "java.util.Spliterator"
import { $Iterable } from "java.lang.Iterable"

export class $BaseGraphProcessor implements $Iterable<$BaseNode> {
constructor(graph: $BaseGraph$$Type)

public "forEach"(consumer0: $Consumer$$Type<$BaseNode$$Type>): void
public "iterator"(): $Iterator<$BaseNode>
public "run"(): void
public "spliterator"(): $Spliterator<$BaseNode>
public "updateComputeOrder"(): void
[Symbol.iterator](): IterableIterator<$BaseNode>;
}
}

declare module "com.lowdragmc.lowdraglib.gui.util.TreeBuilder" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $TreeNode } from "com.lowdragmc.lowdraglib.gui.util.TreeNode"

export class $TreeBuilder<K = any, V = any> {
constructor(key: K)

public "branch"(key: K, builderConsumer: $Consumer$$Type<$TreeBuilder$$Type<K, V>>): $TreeBuilder<K, V>
public "build"(): $TreeNode<K, V>
public "endBranch"(): $TreeBuilder<K, V>
public "leaf"(key: K, content: V): $TreeBuilder<K, V>
public "remove"(key: K): $TreeBuilder<K, V>
public static "start"<K, V>(key: K): $TreeBuilder<K, V>
public "startBranch"(key: K): $TreeBuilder<K, V>
}
}

declare module "com.lowdragmc.lowdraglib.gui.ingredient.IIngredientSlot" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IIngredientSlot {
"getXEIIngredientOverMouse"(double0: double, double1: double): any
}

export namespace $IIngredientSlot {
const probejs$$marker: never
}
export abstract class $IIngredientSlot$$Static implements $IIngredientSlot {
}
}

declare module "com.lowdragmc.lowdraglib.gui.graphprocessor.data.NodePortContainer$NodeOutputPortContainer" {
import { $BaseNode$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseNode"
import { $List } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $NodePort } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.NodePort"
import { $NodePortContainer } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.NodePortContainer"
import { $Collection$$Type } from "java.util.Collection"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $NodePortContainer$NodeOutputPortContainer extends $NodePortContainer {
constructor(node: $BaseNode$$Type)

public "PushDatas"(): void
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E): $List<E>
public static "of"<E>(e0: E, e1: E): $List<E>
public static "of"<E>(e0: E): $List<E>
public static "of"<E>(): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(...e0s: E[]): $List<E>
public "parallelStream"(): $Stream<$NodePort>
public "stream"(): $Stream<$NodePort>
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
}
}

declare module "com.lowdragmc.lowdraglib.gui.graphprocessor.data.NodePort" {
import { $ICustomPortIODelegate } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.custom.ICustomPortIODelegate"
import { $BaseNode, $BaseNode$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseNode"
import { $List } from "java.util.List"
import { $NodePort$IPushDataDelegate } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.NodePort$IPushDataDelegate"
import { $Map } from "java.util.Map"
import { $PortEdge, $PortEdge$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.PortEdge"
import { $Class } from "java.lang.Class"
import { $PortData, $PortData$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.PortData"
import { $Field, $Field$$Type } from "java.lang.reflect.Field"
import { $Table } from "com.google.common.collect.Table"

export class $NodePort {
static "EMPTY": $ICustomPortIODelegate
static readonly "customPortIODelegateTable": $Table<$Class<$BaseNode>, string, $ICustomPortIODelegate>

constructor(owner: $BaseNode$$Type, fieldName: string, portData: $PortData$$Type)
constructor(owner: $BaseNode$$Type, fieldOwner: any, fieldName: string, portData: $PortData$$Type)

public "PullData"(): void
public "PushData"(): void
public "add"(edge: $PortEdge$$Type): void
public "getCustomPortIOMethod"(): $ICustomPortIODelegate
public "getEdgeWithRemoteCustomIO"(): $List<$PortEdge>
public "getEdges"(): $List<$PortEdge>
public "getPushDataDelegates"(): $Map<$PortEdge, $NodePort$IPushDataDelegate>
public "remove"(edge: $PortEdge$$Type): void
public "resetToDefault"(): void
public static "setFieldDefault"(fieldInfo: $Field$$Type, fieldOwner: any): void
get "fieldInfo"(): $Field
set "fieldInfo"(value: $Field$$Type)
get "fieldName"(): string
set "fieldName"(value: string)
get "fieldOwner"(): any
set "fieldOwner"(value: any)
get "owner"(): $BaseNode
set "owner"(value: $BaseNode$$Type)
get "portData"(): $PortData
set "portData"(value: $PortData$$Type)
get "customPortIOMethod"(): $ICustomPortIODelegate
get "edgeWithRemoteCustomIO"(): $List<$PortEdge>
get "edges"(): $List<$PortEdge>
get "pushDataDelegates"(): $Map<$PortEdge, $NodePort$IPushDataDelegate>
}
}

declare module "com.lowdragmc.lowdraglib.gui.texture.ResourceTexture" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $TransformTexture } from "com.lowdragmc.lowdraglib.gui.texture.TransformTexture"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IGuiTexture, $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $IntSupplier$$Type } from "java.util.function.IntSupplier"

export class $ResourceTexture extends $TransformTexture {
constructor(imageLocation: string)
constructor(imageLocation: $ResourceLocation$$Type, offsetX: float, offsetY: float, width: float, height: float)
constructor(imageLocation: $ResourceLocation$$Type)
constructor()

public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "createPreview"(father: $ConfiguratorGroup$$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IGuiTexture
public static "fromSpirit"(texture: $ResourceLocation$$Type): $ResourceTexture
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getSubTexture"(offsetX: double, offsetY: double, width: double, height: double): $ResourceTexture
public "getSubTexture"(offsetX: float, offsetY: float, width: float, height: float): $ResourceTexture
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
public static "serializeWrapper"(texture: $IGuiTexture$$Type): $CompoundTag
public "setColor"(color: integer): $ResourceTexture
public "setDynamicColor"(color: $IntSupplier$$Type): $ResourceTexture
public "setImageHeight"(height: float): $ResourceTexture
public "setImageOffset"(x: float, y: float): $ResourceTexture
public "setImageOffsetX"(x: float): $ResourceTexture
public "setImageOffsetY"(y: float): $ResourceTexture
public "setImageWidth"(width: float): $ResourceTexture
public "setImageWidthHeight"(width: float, height: float): $ResourceTexture
public "setUIResource"(texturesResource: $Resource$$Type<$IGuiTexture$$Type>): void
public "transform"(xOffset: integer, yOffset: integer): $IGuiTexture
/** Client only, do not use in server scripts */
public "updateTick"(): void
get "imageHeight"(): float
set "imageHeight"(value: float)
get "imageLocation"(): $ResourceLocation
set "imageLocation"(value: $ResourceLocation$$Type)
get "imageWidth"(): float
set "imageWidth"(value: float)
get "offsetX"(): float
set "offsetX"(value: float)
get "offsetY"(): float
set "offsetY"(value: float)
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
set "color"(value: integer)
set "dynamicColor"(value: $IntSupplier$$Type)
set "imageOffsetX"(value: float)
set "imageOffsetY"(value: float)
set "uIResource"(value: $Resource$$Type<$IGuiTexture$$Type>)
}
}

declare module "com.lowdragmc.lowdraglib.gui.modular.ModularUIGuiContainer" {
import { $Font, $Font$$Type } from "net.minecraft.client.gui.Font"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Rect2i } from "net.minecraft.client.renderer.Rect2i"
import { $Set } from "java.util.Set"
import { $Widget, $Widget$$Type } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $AbstractContainerScreen } from "net.minecraft.client.gui.screens.inventory.AbstractContainerScreen"
import { $FocusNavigationEvent$$Type } from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $GuiEventListener, $GuiEventListener$$Type } from "net.minecraft.client.gui.components.events.GuiEventListener"
import { $Slot, $Slot$$Type } from "net.minecraft.world.inventory.Slot"
import { $List, $List$$Type } from "java.util.List"
import { $ModularUIContainer } from "com.lowdragmc.lowdraglib.gui.modular.ModularUIContainer"
import { $SPacketUIWidgetUpdate$$Type } from "com.lowdragmc.lowdraglib.networking.s2c.SPacketUIWidgetUpdate"
import { $Optional } from "java.util.Optional"
import { $ModularUI, $ModularUI$$Type } from "com.lowdragmc.lowdraglib.gui.modular.ModularUI"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ComponentPath } from "net.minecraft.client.gui.ComponentPath"
import { $TooltipComponent, $TooltipComponent$$Type } from "net.minecraft.world.inventory.tooltip.TooltipComponent"

export class $ModularUIGuiContainer extends $AbstractContainerScreen<$ModularUIContainer> {
readonly "modularUI": $ModularUI

constructor(modularUI: $ModularUI$$Type, windowId: integer)

public "adastra$renderPreSlot"(graphics: $GuiGraphics$$Type, slot: $Slot$$Type): void
public "charTyped"(codePoint: character, modifiers: integer): boolean
public "getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
public "getCurrentFocusPath"(): $ComponentPath
public "getDraggingElement"(): any
public "getGuiExtraAreas"(): $List<$Rect2i>
public "getQuickCraftSlots"(): $Set<$Slot>
public "getQuickCrafting"(): boolean
public "getTabOrderGroup"(): integer
public "handleWidgetUpdate"(packet: $SPacketUIWidgetUpdate$$Type): void
public "isButtonPressed"(button: integer): boolean
public "isFocused"(): boolean
public "keyReleased"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "m_181908_"(): void
public "m_7856_"(): void
public "magicalSpecialHackyFocus"(guiEventListener0: $GuiEventListener$$Type): void
public "mouseMoved"(mouseX: double, mouseY: double): void
public "mouseScrolled"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
public "renderFloatingItem"(graphics: $GuiGraphics$$Type, stack: $ItemStack$$Type, x: integer, y: integer, amountText: string): void
public "setDraggingElement"(element: any, renderer: $IGuiTexture$$Type): boolean
public "setFocused"(boolean0: boolean): void
public "setHoverTooltip"(tooltipTexts: $List$$Type<$Component$$Type>, tooltipStack: $ItemStack$$Type, tooltipFont: $Font$$Type, tooltipComponent: $TooltipComponent$$Type): void
public "setHoveredSlot"(hoveredSlot: $Slot$$Type): void
public "superCharTyped"(codePoint: character, modifiers: integer): boolean
public "superKeyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "superKeyReleased"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "superMouseClicked"(mouseX: double, mouseY: double, mouseButton: integer): void
public "superMouseDragged"(pMouseX: double, pMouseY: double, pButton: integer, pDragX: double, pDragY: double): void
public "superMouseMoved"(mouseX: double, mouseY: double): void
public "superMouseReleased"(mouseX: double, mouseY: double, state: integer): void
public "superMouseScrolled"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "switchFocus"(widget: $Widget$$Type): boolean
get "dragSplittingButton"(): integer
set "dragSplittingButton"(value: integer)
get "dragSplittingLimit"(): integer
set "dragSplittingLimit"(value: integer)
get "focused"(): boolean
set "focused"(value: boolean)
get "lastFocus"(): $Widget
set "lastFocus"(value: $Widget$$Type)
get "tooltipComponent"(): $TooltipComponent
set "tooltipComponent"(value: $TooltipComponent$$Type)
get "tooltipFont"(): $Font
set "tooltipFont"(value: $Font$$Type)
get "tooltipStack"(): $ItemStack
set "tooltipStack"(value: $ItemStack$$Type)
get "tooltipTexts"(): $List<$Component>
set "tooltipTexts"(value: $List$$Type<$Component$$Type>)
get "currentFocusPath"(): $ComponentPath
get "draggingElement"(): any
get "guiExtraAreas"(): $List<$Rect2i>
get "quickCraftSlots"(): $Set<$Slot>
get "quickCrafting"(): boolean
get "tabOrderGroup"(): integer
set "hoveredSlot"(value: $Slot$$Type)
}
}

declare module "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IConfigurable } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurable"
import { $AnnotationDetector$Wrapper } from "com.lowdragmc.lowdraglib.gui.editor.runtime.AnnotationDetector$Wrapper"
import { $Function } from "java.util.function.Function"

export interface $IGuiTexture extends $IConfigurable {
"buildConfigurator"(father: $ConfiguratorGroup$$Type): void
"copy"(): $IGuiTexture
"createPreview"(father: $ConfiguratorGroup$$Type): void
/** Client only, do not use in server scripts */
"draw"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float, float4: float, int5: integer, int6: integer): void
/** Client only, do not use in server scripts */
"drawSubArea"(graphics: $GuiGraphics$$Type, x: float, y: float, width: float, height: float, drawnU: float, drawnV: float, drawnWidth: float, drawnHeight: float): void
"getChatComponent"(): $Component
"getRegisterUI"(): $LDLRegister
"getTranslateKey"(): string
"group"(): string
"isLDLRegister"(): boolean
"name"(): string
"rotate"(degree: float): $IGuiTexture
"scale"(scale: float): $IGuiTexture
"setColor"(color: integer): $IGuiTexture
"setUIResource"(texturesResource: $Resource$$Type<$IGuiTexture$$Type>): void
"transform"(xOffset: integer, yOffset: integer): $IGuiTexture
/** Client only, do not use in server scripts */
"updateTick"(): void
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
set "color"(value: integer)
set "uIResource"(value: $Resource$$Type<$IGuiTexture$$Type>)
}

export namespace $IGuiTexture {
const CACHE: $Function<string, $AnnotationDetector$Wrapper<$LDLRegister, $IGuiTexture>>
const EMPTY: $IGuiTexture
const MISSING_TEXTURE: $IGuiTexture
function deserializeWrapper(tag: $CompoundTag$$Type): $IGuiTexture
function serializeWrapper(texture: $IGuiTexture$$Type): $CompoundTag
}
export abstract class $IGuiTexture$$Static implements $IGuiTexture {
static readonly "CACHE": $Function<string, $AnnotationDetector$Wrapper<$LDLRegister, $IGuiTexture>>
static readonly "EMPTY": $IGuiTexture
static readonly "MISSING_TEXTURE": $IGuiTexture

static "deserializeWrapper"(tag: $CompoundTag$$Type): $IGuiTexture
static "serializeWrapper"(texture: $IGuiTexture$$Type): $CompoundTag
}
}

declare module "com.lowdragmc.lowdraglib.gui.util.TreeBuilder$Menu" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $TreeBuilder } from "com.lowdragmc.lowdraglib.gui.util.TreeBuilder"
import { $Tuple, $Tuple$$Type } from "net.minecraft.util.Tuple"
import { $TreeNode$$Type } from "com.lowdragmc.lowdraglib.gui.util.TreeNode"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"
import { $IGuiTexture, $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"

export class $TreeBuilder$Menu extends $TreeBuilder<$Tuple<$IGuiTexture, string>, $Runnable> {
static "CROSS_LINE": $Tuple<$IGuiTexture, string>

public "branch"(icon: $IGuiTexture$$Type, name: string, menuConsumer: $Consumer$$Type<$TreeBuilder$Menu$$Type>): $TreeBuilder$Menu
public "branch"(name: string, menuConsumer: $Consumer$$Type<$TreeBuilder$Menu$$Type>): $TreeBuilder$Menu
public "crossLine"(): $TreeBuilder$Menu
public "endBranch"(): $TreeBuilder$Menu
public static "getIcon"(key: $Tuple$$Type<$IGuiTexture$$Type, string>): $IGuiTexture
public static "getName"(key: $Tuple$$Type<$IGuiTexture$$Type, string>): string
public static "handle"(node: $TreeNode$$Type<$Tuple$$Type<$IGuiTexture$$Type, string>, $Runnable$$Type>): void
public static "isCrossLine"(key: $Tuple$$Type<$IGuiTexture$$Type, string>): boolean
public "leaf"(name: string, runnable: $Runnable$$Type): $TreeBuilder$Menu
public "leaf"(icon: $IGuiTexture$$Type, name: string, runnable: $Runnable$$Type): $TreeBuilder$Menu
public "remove"(name: string): $TreeBuilder$Menu
public static "start"(): $TreeBuilder$Menu
}
}

declare module "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $Configurator, $Configurator$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.Configurator"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $ConfiguratorGroup extends $Configurator {
constructor(name: string, isCollapse: boolean)
constructor(name: string)

public "addConfigurator"(index: integer, configurator: $Configurator$$Type): void
public "addConfigurators"(...configurators: $Configurator$$Type[]): void
public "canDragIn"(dragging: any): boolean
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
public "getConfigurators"(): $List<$Configurator>
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "isCollapse"(): boolean
public "isLDLRegister"(): boolean
public "name"(): string
public "removeAllConfigurators"(): void
public "removeConfigurator"(configurator: $Configurator$$Type): void
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setCanCollapse"(canCollapse: boolean): void
public "setCollapse"(collapse: boolean): void
get "chatComponent"(): $Component
get "configurators"(): $List<$Configurator>
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "collapse"(): boolean
get "lDLRegister"(): boolean
set "canCollapse"(value: boolean)
set "collapse"(value: boolean)
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.TabContainer" {
import { $BiMap } from "com.google.common.collect.BiMap"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $TabButton, $TabButton$$Type } from "com.lowdragmc.lowdraglib.gui.widget.TabButton"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ResourceTexture } from "com.lowdragmc.lowdraglib.gui.texture.ResourceTexture"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $BiConsumer, $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $WidgetGroup, $WidgetGroup$$Type } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $TabContainer extends $WidgetGroup {
static readonly "TABS_LEFT": $ResourceTexture
readonly "buttonGroup": $WidgetGroup
readonly "containerGroup": $WidgetGroup
readonly "tabs": $BiMap<$TabButton, $WidgetGroup>

constructor()
constructor(x: integer, y: integer, width: integer, height: integer)

public "addTab"(tabButton: $TabButton$$Type, tabWidget: $WidgetGroup$$Type): void
public "canDragIn"(dragging: any): boolean
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "isLDLRegister"(): boolean
public "name"(): string
public "removeTab"(tabButton: $TabButton$$Type): void
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setOnChanged"(onChanged: $BiConsumer$$Type<$WidgetGroup$$Type, $WidgetGroup$$Type>): $TabContainer
public "switchTag"(tabWidget: $WidgetGroup$$Type): void
get "focus"(): $WidgetGroup
set "focus"(value: $WidgetGroup$$Type)
get "onChanged"(): $BiConsumer<$WidgetGroup, $WidgetGroup>
set "onChanged"(value: $BiConsumer$$Type<$WidgetGroup$$Type, $WidgetGroup$$Type>)
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.codeeditor.Document" {
import { $List } from "java.util.List"

export class $Document {
constructor()

public "deleteLine"(index: integer): void
public "deleteText"(line: integer, column: integer, length: integer): void
public "getLine"(line: integer): string
public "getLineCount"(): integer
public "getLines"(): $List<string>
public "insertLine"(index: integer, text: string): void
public "insertText"(line: integer, column: integer, text: string): void
public "setLine"(index: integer, text: string): void
get "lineCount"(): integer
get "lines"(): $List<string>
}
}

declare module "com.lowdragmc.lowdraglib.gui.ingredient.IGhostIngredientTarget" {
import { $List } from "java.util.List"
import { $Target } from "com.lowdragmc.lowdraglib.gui.ingredient.Target"

export interface $IGhostIngredientTarget {
/** Client only, do not use in server scripts */
"getPhantomTargets"(object0: any): $List<$Target>
}

export namespace $IGhostIngredientTarget {
const probejs$$marker: never
}
export abstract class $IGhostIngredientTarget$$Static implements $IGhostIngredientTarget {
}
}

declare module "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister" {
import { $Annotation } from "java.lang.annotation.Annotation"
import { $Class } from "java.lang.Class"

export interface $LDLRegister extends $Annotation {
"annotationType"(): $Class<$Annotation>
"equals"(object0: any): boolean
"group"(): string
"hashCode"(): integer
"modID"(): string
"name"(): string
"priority"(): integer
"toString"(): string
}

export namespace $LDLRegister {
const probejs$$marker: never
}
export abstract class $LDLRegister$$Static implements $LDLRegister {
}
}

declare module "com.lowdragmc.lowdraglib.gui.editor.ui.ConfigPanel" {
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $Component } from "net.minecraft.network.chat.Component"
import { $HsbColorWidget } from "com.lowdragmc.lowdraglib.gui.widget.HsbColorWidget"
import { $Configurator$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.Configurator"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $Editor, $Editor$$Type } from "com.lowdragmc.lowdraglib.gui.editor.ui.Editor"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $IConfigurable, $IConfigurable$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurable"
import { $Map } from "java.util.Map"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $ConfigPanel$Tab, $ConfigPanel$Tab$$Type } from "com.lowdragmc.lowdraglib.gui.editor.ui.ConfigPanel$Tab"
import { $WidgetGroup } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $ConfigPanel extends $WidgetGroup {
static readonly "WIDTH": integer

constructor(editor: $Editor$$Type)
constructor(editor: $Editor$$Type, tabs: $List$$Type<$ConfigPanel$Tab$$Type>)

public "canDragIn"(dragging: any): boolean
public "clearAllConfigurators"(): void
public "clearAllConfigurators"(tab: $ConfigPanel$Tab$$Type): void
public "computeLayout"(tab: $ConfigPanel$Tab$$Type): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
public "getEditor"(): $Editor
public "getFocus"(): $Map<$ConfigPanel$Tab, $IConfigurable>
public "getPalette"(): $HsbColorWidget
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "isLDLRegister"(): boolean
public "name"(): string
public "onConfiguratorChangeUpdate"(tab: $ConfigPanel$Tab$$Type, configurator: $Configurator$$Type): void
public "openConfigurator"(tab: $ConfigPanel$Tab$$Type, configurable: $IConfigurable$$Type): void
public "reloadTabs"(tabs: $List$$Type<$ConfigPanel$Tab$$Type>): void
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "switchTag"(tab: $ConfigPanel$Tab$$Type): void
get "chatComponent"(): $Component
get "editor"(): $Editor
get "focus"(): $Map<$ConfigPanel$Tab, $IConfigurable>
get "palette"(): $HsbColorWidget
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.codeeditor.language.TokenType" {
import { $Matcher, $Matcher$$Type } from "java.util.regex.Matcher"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"

export class $TokenType implements $Predicate<$Matcher> {
readonly "name": string

constructor(name: string)

public "and"(predicate0: $Predicate$$Type<$Matcher$$Type>): $Predicate<$Matcher>
public "getMatcher"(): $Predicate<$Matcher>
public "getPattern"(): string
public "hasPattern"(): boolean
public static "isEqual"<T>(object0: any): $Predicate<T>
public "negate"(): $Predicate<$Matcher>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public "or"(predicate0: $Predicate$$Type<$Matcher$$Type>): $Predicate<$Matcher>
public "setMatcher"(matcher: $Predicate$$Type<$Matcher$$Type>): $TokenType
public "setPattern"(pattern: string): $TokenType
public "test"(matcher: $Matcher$$Type): boolean
get "matcher"(): $Predicate<$Matcher>
get "pattern"(): string
set "matcher"(value: $Predicate$$Type<$Matcher$$Type>)
set "pattern"(value: string)
}
}

declare module "com.lowdragmc.lowdraglib.gui.util.ClickData" {
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClickData {
readonly "button": integer
readonly "isCtrlClick": boolean
readonly "isRemote": boolean
readonly "isShiftClick": boolean

/** Client only, do not use in server scripts */
constructor()

public static "readFromBuf"(buf: $FriendlyByteBuf$$Type): $ClickData
/** Client only, do not use in server scripts */
public "writeToBuf"(buf: $FriendlyByteBuf$$Type): void
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.codeeditor.CodeEditorWidget" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Cursor } from "com.lowdragmc.lowdraglib.gui.widget.codeeditor.Cursor"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $CodeEditor } from "com.lowdragmc.lowdraglib.gui.widget.codeeditor.CodeEditor"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IGuiTexture, $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $List, $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $WidgetGroup } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $CodeEditorWidget extends $WidgetGroup {
static readonly "MONO_BOLD": $ResourceLocation
readonly "codeEditor": $CodeEditor

constructor(x: integer, y: integer, width: integer, height: integer)

/** Client only, do not use in server scripts */
public "adaptCursor"(): void
public "canConsumeInput"(): boolean
public "canDragIn"(dragging: any): boolean
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
public "getClickCount"(): integer
public "getCodeEditor"(): $CodeEditor
public "getCursor"(mouseX: double, mouseY: double): $Cursor
public "getDoubleClickMarginMillis"(): long
public "getLastClickMillis"(): long
public "getLastDeltaX"(): double
public "getLastDeltaY"(): double
public "getLines"(): $List<string>
public "getOnTextChanged"(): $Consumer<$List<string>>
public "getRegisterUI"(): $LDLRegister
public "getScrollXOffset"(): integer
public "getScrollYOffset"(): integer
public "getTranslateKey"(): string
public "getXBarB"(): $IGuiTexture
public "getXBarF"(): $IGuiTexture
public "getYBarB"(): $IGuiTexture
public "getYBarF"(): $IGuiTexture
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "isDraggingXBar"(): boolean
public "isDraggingYBar"(): boolean
public "isHoveringXBar"(): boolean
public "isHoveringYBar"(): boolean
public "isLDLRegister"(): boolean
public "name"(): string
public "notifyChanged"(): void
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setDoubleClickMarginMillis"(doubleClickMarginMillis: long): void
public "setLines"(lines: $List$$Type<string>): void
public "setOnTextChanged"(onTextChanged: $Consumer$$Type<$List$$Type<string>>): void
get "chatComponent"(): $Component
get "clickCount"(): integer
get "doubleClickMarginMillis"(): long
get "lastClickMillis"(): long
get "lastDeltaX"(): double
get "lastDeltaY"(): double
get "lines"(): $List<string>
get "onTextChanged"(): $Consumer<$List<string>>
get "registerUI"(): $LDLRegister
get "scrollXOffset"(): integer
get "scrollYOffset"(): integer
get "translateKey"(): string
get "xBarB"(): $IGuiTexture
get "xBarF"(): $IGuiTexture
get "yBarB"(): $IGuiTexture
get "yBarF"(): $IGuiTexture
get "draggingXBar"(): boolean
get "draggingYBar"(): boolean
get "hoveringXBar"(): boolean
get "hoveringYBar"(): boolean
get "lDLRegister"(): boolean
set "doubleClickMarginMillis"(value: long)
set "lines"(value: $List$$Type<string>)
set "onTextChanged"(value: $Consumer$$Type<$List$$Type<string>>)
}
}

declare module "com.lowdragmc.lowdraglib.gui.graphprocessor.data.parameter.ExposedParameter$ParameterAccessor" {
import { $Enum } from "java.lang.Enum"

export class $ExposedParameter$ParameterAccessor extends $Enum<$ExposedParameter$ParameterAccessor> {
static readonly "Get": $ExposedParameter$ParameterAccessor
static readonly "Set": $ExposedParameter$ParameterAccessor

public static "valueOf"(name: string): $ExposedParameter$ParameterAccessor
public static "values"(): $ExposedParameter$ParameterAccessor[]
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.DraggableScrollableWidgetGroup" {
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Set } from "java.util.Set"
import { $Widget$$Type } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $DraggableScrollableWidgetGroup$ScrollWheelDirection, $DraggableScrollableWidgetGroup$ScrollWheelDirection$$Type } from "com.lowdragmc.lowdraglib.gui.widget.DraggableScrollableWidgetGroup$ScrollWheelDirection"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $BiConsumer } from "java.util.function.BiConsumer"
import { $WidgetGroup } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $DraggableScrollableWidgetGroup extends $WidgetGroup {
constructor()
constructor(x: integer, y: integer, width: integer, height: integer)

public "canDragIn"(dragging: any): boolean
public "computeMax"(): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
public "getMoveCallbacks"(): $Set<$BiConsumer<integer, integer>>
public "getRegisterUI"(): $LDLRegister
public "getScrollWheelDirection"(): $DraggableScrollableWidgetGroup$ScrollWheelDirection
public "getScrollXOffset"(): integer
public "getScrollYOffset"(): integer
public "getTranslateKey"(): string
public "getWidgetBottomHeight"(): integer
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "isDraggable"(): boolean
public "isLDLRegister"(): boolean
public "isScrollable"(): boolean
public "isShiftToggleDirection"(): boolean
public "isUseScissor"(): boolean
public "name"(): string
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setBackground"(background: $IGuiTexture$$Type): $DraggableScrollableWidgetGroup
public "setDraggable"(draggable: boolean): $DraggableScrollableWidgetGroup
public "setScrollWheelDirection"(scrollWheelDirection: $DraggableScrollableWidgetGroup$ScrollWheelDirection$$Type): $DraggableScrollableWidgetGroup
public "setScrollXOffset"(scrollXOffset: integer): void
public "setScrollYOffset"(scrollYOffset: integer): void
public "setScrollable"(scrollable: boolean): $DraggableScrollableWidgetGroup
public "setSelected"(widget: $Widget$$Type): void
public "setShiftToggleDirection"(shiftToggleDirection: boolean): $DraggableScrollableWidgetGroup
public "setUseScissor"(useScissor: boolean): $DraggableScrollableWidgetGroup
public "setXBarStyle"(background: $IGuiTexture$$Type, bar: $IGuiTexture$$Type): $DraggableScrollableWidgetGroup
public "setXScrollBarHeight"(xBar: integer): $DraggableScrollableWidgetGroup
public "setYBarStyle"(background: $IGuiTexture$$Type, bar: $IGuiTexture$$Type): $DraggableScrollableWidgetGroup
public "setYScrollBarWidth"(yBar: integer): $DraggableScrollableWidgetGroup
get "chatComponent"(): $Component
get "moveCallbacks"(): $Set<$BiConsumer<integer, integer>>
get "registerUI"(): $LDLRegister
get "scrollWheelDirection"(): $DraggableScrollableWidgetGroup$ScrollWheelDirection
get "scrollXOffset"(): integer
get "scrollYOffset"(): integer
get "translateKey"(): string
get "widgetBottomHeight"(): integer
get "draggable"(): boolean
get "lDLRegister"(): boolean
get "scrollable"(): boolean
get "shiftToggleDirection"(): boolean
get "useScissor"(): boolean
set "background"(value: $IGuiTexture$$Type)
set "draggable"(value: boolean)
set "scrollWheelDirection"(value: $DraggableScrollableWidgetGroup$ScrollWheelDirection$$Type)
set "scrollXOffset"(value: integer)
set "scrollYOffset"(value: integer)
set "scrollable"(value: boolean)
set "selected"(value: $Widget$$Type)
set "shiftToggleDirection"(value: boolean)
set "useScissor"(value: boolean)
set "xScrollBarHeight"(value: integer)
set "yScrollBarWidth"(value: integer)
}
}

declare module "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource" {
import { $StaticResource } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.StaticResource"
import { $Either, $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $Map$Entry } from "java.util.Map$Entry"
import { $Stream } from "java.util.stream.Stream"
import { $Tag, $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Map } from "java.util.Map"
import { $ResourcePanel$$Type } from "com.lowdragmc.lowdraglib.gui.editor.ui.ResourcePanel"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $File, $File$$Type } from "java.io.File"
import { $ResourceContainer } from "com.lowdragmc.lowdraglib.gui.editor.ui.resource.ResourceContainer"

export class $Resource<T = any> {
constructor(staticLocation: $File$$Type)
constructor()

public "addBuiltinResource"(key: string, resource: T): void
public "addResource"(key: $Either$$Type<string, $File$$Type>, resource: T): void
public "addStaticResource"(file: $File$$Type, resource: T): void
public "allResources"(): $Stream<$Map$Entry<$Either<string, $File>, T>>
public "buildDefault"(): void
public "createContainer"(resourcePanel0: $ResourcePanel$$Type): $ResourceContainer<T, $Widget>
public "deserialize"(tag0: $Tag$$Type): T
public "deserializeNBT"(nbt: $CompoundTag$$Type): void
public "getBuiltinResource"(key: string): T
public "getBuiltinResourceOrDefault"(key: string, defaultValue: T): T
public "getBuiltinResources"(): $Map<string, T>
public "getResource"(key: $Either$$Type<string, $File$$Type>): T
public "getResourceName"(key: $Either$$Type<string, $File$$Type>): string
public "getResourceOrDefault"(key: $Either$$Type<string, $File$$Type>, defaultValue: T): T
public "getStaticLocation"(): $File
public "getStaticResource"(file: $File$$Type): T
public "getStaticResource"(): $StaticResource<T>
public "getStaticResourceFile"(name: string): $File
public "getStaticResourceName"(file: $File$$Type): string
public "getStaticResourceOrDefault"(file: $File$$Type, defaultValue: T): T
public "getStaticResourceSuffix"(): string
public "hasBuiltinResource"(key: string): boolean
public "hasResource"(key: $Either$$Type<string, $File$$Type>): boolean
public "hasStaticResource"(file: $File$$Type): boolean
public "loadAndUpdateStaticResource"(): boolean
public "merge"(resource: $Resource$$Type<T>): void
public "name"(): string
public "onLoad"(): void
public "removeBuiltinResource"(key: string): T
public "removeResource"(key: $Either$$Type<string, $File$$Type>): T
public "removeStaticResource"(file: $File$$Type): T
public "serialize"(t0: T): $Tag
public "serializeNBT"(): $CompoundTag
public "supportBuiltInResource"(): boolean
public "supportStaticResource"(): boolean
public "unLoad"(): void
get "builtinResources"(): $Map<string, T>
get "staticLocation"(): $File
get "staticResource"(): $StaticResource<T>
get "staticResourceSuffix"(): string
}
}

declare module "com.lowdragmc.lowdraglib.gui.graphprocessor.data.NodePortContainer$NodeInputPortContainer" {
import { $BaseNode$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseNode"
import { $List } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $NodePort } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.NodePort"
import { $NodePortContainer } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.NodePortContainer"
import { $Collection$$Type } from "java.util.Collection"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $NodePortContainer$NodeInputPortContainer extends $NodePortContainer {
constructor(node: $BaseNode$$Type)

public "PullDatas"(): void
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E): $List<E>
public static "of"<E>(e0: E, e1: E): $List<E>
public static "of"<E>(e0: E): $List<E>
public static "of"<E>(): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(...e0s: E[]): $List<E>
public "parallelStream"(): $Stream<$NodePort>
public "stream"(): $Stream<$NodePort>
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
}
}

declare module "com.lowdragmc.lowdraglib.gui.factory.HeldItemUIFactory$HeldItemHolder" {
import { $IUIHolder } from "com.lowdragmc.lowdraglib.gui.modular.IUIHolder"
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $ModularUI } from "com.lowdragmc.lowdraglib.gui.modular.ModularUI"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $HeldItemUIFactory$HeldItemHolder implements $IUIHolder {
constructor(player: $Player$$Type, hand: $InteractionHand$$Type)

public "createUI"(entityPlayer: $Player$$Type): $ModularUI
public "getHand"(): $InteractionHand
public "getHeld"(): $ItemStack
public "getPlayer"(): $Player
public "isInvalid"(): boolean
public "isRemote"(): boolean
public "markAsDirty"(): void
get "hand"(): $InteractionHand
set "hand"(value: $InteractionHand$$Type)
get "held"(): $ItemStack
set "held"(value: $ItemStack$$Type)
get "player"(): $Player
set "player"(value: $Player$$Type)
get "invalid"(): boolean
get "remote"(): boolean
}
}

declare module "com.lowdragmc.lowdraglib.gui.editor.ui.Editor" {
import { $ConfigPanel } from "com.lowdragmc.lowdraglib.gui.editor.ui.ConfigPanel"
import { $StringTabContainer } from "com.lowdragmc.lowdraglib.gui.editor.ui.StringTabContainer"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $MenuWidget } from "com.lowdragmc.lowdraglib.gui.widget.MenuWidget"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $Editor$HistoryItem, $Editor$HistoryItem$$Type } from "com.lowdragmc.lowdraglib.gui.editor.ui.Editor$HistoryItem"
import { $ResourcePanel } from "com.lowdragmc.lowdraglib.gui.editor.ui.ResourcePanel"
import { $TreeNode$$Type } from "com.lowdragmc.lowdraglib.gui.util.TreeNode"
import { $WidgetGroup } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"
import { $IProject, $IProject$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.IProject"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MenuPanel } from "com.lowdragmc.lowdraglib.gui.editor.ui.MenuPanel"
import { $BooleanConsumer$$Type } from "it.unimi.dsi.fastutil.booleans.BooleanConsumer"
import { $File, $File$$Type } from "java.io.File"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $TreeBuilder$Menu$$Type } from "com.lowdragmc.lowdraglib.gui.util.TreeBuilder$Menu"
import { $DialogWidget, $DialogWidget$$Type } from "com.lowdragmc.lowdraglib.gui.widget.DialogWidget"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ILDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.ILDLRegister"
import { $ToolPanel } from "com.lowdragmc.lowdraglib.gui.editor.ui.ToolPanel"

export class $Editor extends $WidgetGroup implements $ILDLRegister {
/** Client only, do not use in server scripts */
static "INSTANCE": $Editor

constructor(modID: string)
constructor(workSpace: $File$$Type)

public "addAutoHistory"(name: string, source: any): void
public "addRawHistory"(name: string, date: $CompoundTag$$Type): void
public "addRawHistory"(name: string, date: $CompoundTag$$Type, source: any): void
public "askToSaveProject"(result: $BooleanConsumer$$Type): void
public "canDragIn"(dragging: any): boolean
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
public "getConfigPanel"(): $ConfigPanel
public "getCopied"(): any
public "getCopyType"(): string
public "getCurrentHistory"(): $Editor$HistoryItem
public "getCurrentProject"(): $IProject
public "getCurrentProjectFile"(): $File
public "getFloatView"(): $WidgetGroup
public "getHistory"(): $List<$Editor$HistoryItem>
public "getMenuPanel"(): $MenuPanel
public "getRegisterUI"(): $LDLRegister
public "getResourcePanel"(): $ResourcePanel
public "getTabPages"(): $StringTabContainer
public "getToolPanel"(): $ToolPanel
public "getTranslateKey"(): string
public "getWorkSpace"(): $File
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "ifCopiedPresent"(copyType: string, consumer: $Consumer$$Type<any>): void
public "initEditorViews"(): void
public "isCurrentProjectSaved"(): boolean
public "isLDLRegister"(): boolean
public "isWaitingForSave"(): boolean
public "jumpToHistory"(historyItem: $Editor$HistoryItem$$Type): void
public "loadProject"(project: $IProject$$Type): void
public "name"(): string
public "openDialog"(dialog: $DialogWidget$$Type): $DialogWidget
public "openMenu"<T, C>(posX: double, posY: double, menuNode: $TreeNode$$Type<T, C>): $MenuWidget<T, C>
public "openMenu"(posX: double, posY: double, menuBuilder: $TreeBuilder$Menu$$Type): void
public "saveAsProject"(result: $BooleanConsumer$$Type): void
public "saveProject"(result: $BooleanConsumer$$Type): void
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setCopy"(copyType: string, copied: any): void
public "setCurrentProjectFile"(currentProjectFile: $File$$Type): void
get "chatComponent"(): $Component
get "configPanel"(): $ConfigPanel
get "copied"(): any
get "copyType"(): string
get "currentHistory"(): $Editor$HistoryItem
get "currentProject"(): $IProject
get "currentProjectFile"(): $File
get "floatView"(): $WidgetGroup
get "history"(): $List<$Editor$HistoryItem>
get "menuPanel"(): $MenuPanel
get "registerUI"(): $LDLRegister
get "resourcePanel"(): $ResourcePanel
get "tabPages"(): $StringTabContainer
get "toolPanel"(): $ToolPanel
get "translateKey"(): string
get "workSpace"(): $File
get "currentProjectSaved"(): boolean
get "lDLRegister"(): boolean
get "waitingForSave"(): boolean
set "currentProjectFile"(value: $File$$Type)
}
}

declare module "com.lowdragmc.lowdraglib.gui.editor.IConfiguratorContainer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IConfiguratorContainer {
"computeLayout"(): void
}

export namespace $IConfiguratorContainer {
const probejs$$marker: never
}
export abstract class $IConfiguratorContainer$$Static implements $IConfiguratorContainer {
}
}

declare module "com.lowdragmc.lowdraglib.gui.editor.ILDLRegisterClient" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Component } from "net.minecraft.network.chat.Component"
import { $LDLRegisterClient } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegisterClient"
import { $ILDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.ILDLRegister"

export interface $ILDLRegisterClient extends $ILDLRegister {
"getChatComponent"(): $Component
/** @deprecated */
"getRegisterUI"(): $LDLRegister
"getRegisterUIClient"(): $LDLRegisterClient
"getTranslateKey"(): string
"group"(): string
"isLDLRegister"(): boolean
"name"(): string
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "registerUIClient"(): $LDLRegisterClient
get "translateKey"(): string
get "lDLRegister"(): boolean
}

export namespace $ILDLRegisterClient {
const probejs$$marker: never
}
export abstract class $ILDLRegisterClient$$Static implements $ILDLRegisterClient {
}
}

declare module "com.lowdragmc.lowdraglib.gui.editor.runtime.AnnotationDetector$Wrapper" {
import { $Annotation, $Annotation$$Type } from "java.lang.annotation.Annotation"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $Record } from "java.lang.Record"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"

export class $AnnotationDetector$Wrapper<A extends $Annotation = $Annotation, T = any> extends $Record {
constructor(annotation: A, clazz: $Class$$Type<T>, creator: $Supplier$$Type<T>)

public "annotation"(): A
public "clazz"(): $Class<T>
public "creator"(): $Supplier<T>
}
}

declare module "com.lowdragmc.lowdraglib.gui.modular.IUIHolder$ItemUI" {
import { $ModularUI } from "com.lowdragmc.lowdraglib.gui.modular.ModularUI"
import { $HeldItemUIFactory$HeldItemHolder$$Type } from "com.lowdragmc.lowdraglib.gui.factory.HeldItemUIFactory$HeldItemHolder"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $IUIHolder$ItemUI {
"createUI"(player0: $Player$$Type, heldItemHolder1: $HeldItemUIFactory$HeldItemHolder$$Type): $ModularUI
}

export namespace $IUIHolder$ItemUI {
const probejs$$marker: never
}
export abstract class $IUIHolder$ItemUI$$Static implements $IUIHolder$ItemUI {
}
}

declare module "com.lowdragmc.lowdraglib.gui.texture.ColorBorderTexture" {
import { $Color$$Type } from "java.awt.Color"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $TransformTexture } from "com.lowdragmc.lowdraglib.gui.texture.TransformTexture"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IGuiTexture, $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"

export class $ColorBorderTexture extends $TransformTexture {
constructor(border: integer, color: integer)
constructor()
constructor(border: integer, color: $Color$$Type)

public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "copy"(): $IGuiTexture
public "createPreview"(father: $ConfiguratorGroup$$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IGuiTexture
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
public static "serializeWrapper"(texture: $IGuiTexture$$Type): $CompoundTag
public "setBorder"(border: integer): $ColorBorderTexture
public "setBottomRadius"(radius: float): $ColorBorderTexture
public "setBottomRadiusInner"(radius: float): $ColorBorderTexture
public "setBottomRadiusOuter"(radius: float): $ColorBorderTexture
public "setLeftRadius"(radius: float): $ColorBorderTexture
public "setLeftRadiusInner"(radius: float): $ColorBorderTexture
public "setLeftRadiusOuter"(radius: float): $ColorBorderTexture
public "setRadius"(radius: float): $ColorBorderTexture
public "setRadiusLBInner"(radiusLBInner: float): void
public "setRadiusLBOuter"(radiusLBOuter: float): void
public "setRadiusLTInner"(radiusLTInner: float): void
public "setRadiusLTOuter"(radiusLTOuter: float): void
public "setRadiusRBInner"(radiusRBInner: float): void
public "setRadiusRBOuter"(radiusRBOuter: float): void
public "setRadiusRTInner"(radiusRTInner: float): void
public "setRadiusRTOuter"(radiusRTOuter: float): void
public "setRightRadius"(radius: float): $ColorBorderTexture
public "setRightRadiusInner"(radius: float): $ColorBorderTexture
public "setRightRadiusOuter"(radius: float): $ColorBorderTexture
public "setTopRadius"(radius: float): $ColorBorderTexture
public "setTopRadiusInner"(radius: float): $ColorBorderTexture
public "setTopRadiusOuter"(radius: float): $ColorBorderTexture
public "setUIResource"(texturesResource: $Resource$$Type<$IGuiTexture$$Type>): void
public "transform"(xOffset: integer, yOffset: integer): $IGuiTexture
/** Client only, do not use in server scripts */
public "updateTick"(): void
get "border"(): integer
set "border"(value: integer)
get "color"(): integer
set "color"(value: integer)
get "radiusLBInner"(): float
set "radiusLBInner"(value: float)
get "radiusLBOuter"(): float
set "radiusLBOuter"(value: float)
get "radiusLTInner"(): float
set "radiusLTInner"(value: float)
get "radiusLTOuter"(): float
set "radiusLTOuter"(value: float)
get "radiusRBInner"(): float
set "radiusRBInner"(value: float)
get "radiusRBOuter"(): float
set "radiusRBOuter"(value: float)
get "radiusRTInner"(): float
set "radiusRTInner"(value: float)
get "radiusRTOuter"(): float
set "radiusRTOuter"(value: float)
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
set "bottomRadius"(value: float)
set "bottomRadiusInner"(value: float)
set "bottomRadiusOuter"(value: float)
set "leftRadius"(value: float)
set "leftRadiusInner"(value: float)
set "leftRadiusOuter"(value: float)
set "radius"(value: float)
set "rightRadius"(value: float)
set "rightRadiusInner"(value: float)
set "rightRadiusOuter"(value: float)
set "topRadius"(value: float)
set "topRadiusInner"(value: float)
set "topRadiusOuter"(value: float)
set "uIResource"(value: $Resource$$Type<$IGuiTexture$$Type>)
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.codeeditor.FoldableRegion" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FoldableRegion {
constructor(startLine: integer, endLine: integer)

public "getEndLine"(): integer
public "getStartLine"(): integer
public "isCollapsed"(): boolean
public "toggle"(): void
get "endLine"(): integer
get "startLine"(): integer
get "collapsed"(): boolean
}
}

declare module "com.lowdragmc.lowdraglib.gui.graphprocessor.data.NodePort$IPushDataDelegate" {
import { $PortEdge$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.PortEdge"

export interface $NodePort$IPushDataDelegate {
"pushData"(portEdge0: $PortEdge$$Type): void
}

export namespace $NodePort$IPushDataDelegate {
const probejs$$marker: never
}
export abstract class $NodePort$IPushDataDelegate$$Static implements $NodePort$IPushDataDelegate {
}
}

declare module "com.lowdragmc.lowdraglib.gui.editor.data.resource.StaticResource" {
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"

export class $StaticResource<T = any> {
static "EMPTY": $StaticResource

constructor(resource: $Resource$$Type<T>)

public static "empty"<T>(): $StaticResource<T>
public "isStaticResourceLoaded"(): boolean
public "loadAndUpdateStaticResource"(): boolean
get "staticResourceLoaded"(): boolean
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.PhantomFluidWidget" {
import { $IFluidTransfer$$Type } from "com.lowdragmc.lowdraglib.side.fluid.IFluidTransfer"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $Target } from "com.lowdragmc.lowdraglib.gui.ingredient.Target"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $IGhostIngredientTarget } from "com.lowdragmc.lowdraglib.gui.ingredient.IGhostIngredientTarget"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $FluidStack, $FluidStack$$Type } from "com.lowdragmc.lowdraglib.side.fluid.FluidStack"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $TankWidget } from "com.lowdragmc.lowdraglib.gui.widget.TankWidget"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

/** @deprecated */
export class $PhantomFluidWidget extends $TankWidget implements $IGhostIngredientTarget, $IConfigurableWidget {
constructor(fluidTank: $IFluidTransfer$$Type, tank: integer, x: integer, y: integer, width: integer, height: integer, phantomFluidGetter: $Supplier$$Type<$FluidStack>, phantomFluidSetter: $Consumer$$Type<$FluidStack$$Type>)
constructor()

public "canDragIn"(dragging: any): boolean
public static "checkJEIIngredient"(ingredient: any): any
public "deserializeInnerNBT"(nbt: $CompoundTag$$Type): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public static "drainFrom"(ingredient: any): $FluidStack
public "getChatComponent"(): $Component
public "getLastPhantomStack"(): $FluidStack
/** Client only, do not use in server scripts */
public "getPhantomTargets"(ingredient: any): $List<$Target>
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "initTemplate"(): void
public "isLDLRegister"(): boolean
public "name"(): string
public "self"(): $Widget
public "serializeInnerNBT"(): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setPhantomFluidGetter"(phantomFluidGetter: $Supplier$$Type<$FluidStack>): void
public "setPhantomFluidSetter"(phantomFluidSetter: $Consumer$$Type<$FluidStack$$Type>): void
public "widget"(): $Widget
get "chatComponent"(): $Component
get "lastPhantomStack"(): $FluidStack
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
set "phantomFluidGetter"(value: $Supplier$$Type<$FluidStack>)
set "phantomFluidSetter"(value: $Consumer$$Type<$FluidStack$$Type>)
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.codeeditor.language.StyleManager" {
import { $Map } from "java.util.Map"
import { $Style, $Style$$Type } from "net.minecraft.network.chat.Style"
import { $TokenType$$Type } from "com.lowdragmc.lowdraglib.gui.widget.codeeditor.language.TokenType"

export class $StyleManager {
constructor()

public "getDefaultStyle"(): $Style
public "getStyleForTokenType"(type: $TokenType$$Type): $Style
public "getStyleMap"(): $Map<string, $Style>
public "setDefaultStyle"(defaultStyle: $Style$$Type): void
get "defaultStyle"(): $Style
set "defaultStyle"(value: $Style$$Type)
get "styleMap"(): $Map<string, $Style>
}
}

declare module "com.lowdragmc.lowdraglib.gui.editor.data.Resources" {
import { $Resource, $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Map, $Map$$Type } from "java.util.Map"

export class $Resources {
readonly "resources": $Map<string, $Resource<any>>

constructor(resources: $Map$$Type<string, $Resource$$Type<any>>)

/** @deprecated */
public static "defaultResource"(): $Resources
public "deserializeNBT"(nbt: $CompoundTag$$Type): void
public "dispose"(): void
public static "emptyResource"(): $Resources
public static "fromNBT"(tag: $CompoundTag$$Type): $Resources
public "load"(): void
public "merge"(resources: $Resources$$Type): void
public static "of"(...resources: $Resource$$Type<any>[]): $Resources
public "serializeNBT"(): $CompoundTag
}
}

declare module "com.lowdragmc.lowdraglib.gui.graphprocessor.processor.TriggerProcessor" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $BaseNode, $BaseNode$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseNode"
import { $BaseGraph$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseGraph"
import { $GraphProcessor } from "com.lowdragmc.lowdraglib.gui.graphprocessor.processor.GraphProcessor"
import { $Spliterator } from "java.util.Spliterator"

export class $TriggerProcessor extends $GraphProcessor {
constructor(graph: $BaseGraph$$Type)

public "forEach"(consumer0: $Consumer$$Type<$BaseNode$$Type>): void
public "spliterator"(): $Spliterator<$BaseNode>
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.codeeditor.Selection" {
import { $Cursor, $Cursor$$Type } from "com.lowdragmc.lowdraglib.gui.widget.codeeditor.Cursor"

export class $Selection {
constructor(start: $Cursor$$Type, end: $Cursor$$Type)

public "clear"(): void
public "getEnd"(): $Cursor
public "getSelectionRange"(): integer[]
public "getStart"(): $Cursor
public "hasSelection"(): boolean
public "isSelecting"(): boolean
public "setSelecting"(isSelecting: boolean): void
public "updateEnd"(newEnd: $Cursor$$Type): void
get "end"(): $Cursor
get "selectionRange"(): integer[]
get "start"(): $Cursor
get "selecting"(): boolean
set "selecting"(value: boolean)
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.SceneWidget" {
import { $BlockPosFace, $BlockPosFace$$Type } from "com.lowdragmc.lowdraglib.utils.BlockPosFace"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $BiConsumer, $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $WidgetGroup } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $ParticleManager } from "com.lowdragmc.lowdraglib.client.scene.ParticleManager"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $TrackedDummyWorld } from "com.lowdragmc.lowdraglib.utils.TrackedDummyWorld"
import { $Collection$$Type } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $ISceneBlockRenderHook$$Type } from "com.lowdragmc.lowdraglib.client.scene.ISceneBlockRenderHook"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $WorldSceneRenderer, $WorldSceneRenderer$$Type } from "com.lowdragmc.lowdraglib.client.scene.WorldSceneRenderer"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $SceneWidget extends $WidgetGroup {
constructor(x: integer, y: integer, width: integer, height: integer, world: $Level$$Type, useFBO: boolean)
constructor(x: integer, y: integer, width: integer, height: integer, world: $Level$$Type)

public "camZoom"(): float
public "canDragIn"(dragging: any): boolean
/** Client only, do not use in server scripts */
public "createScene"(world: $Level$$Type): void
/** Client only, do not use in server scripts */
public "createScene"(world: $Level$$Type, useFBOSceneRenderer: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
/** Client only, do not use in server scripts */
public "drawFacingBorder"(poseStack: $PoseStack$$Type, posFace: $BlockPosFace$$Type, color: integer): void
/** Client only, do not use in server scripts */
public "drawFacingBorder"(poseStack: $PoseStack$$Type, posFace: $BlockPosFace$$Type, color: integer, inner: integer): void
public "getCenter"(): $Vector3f
public "getChatComponent"(): $Component
public "getClickPosFace"(): $BlockPosFace
public "getCore"(): $Set<$BlockPos>
public "getCurrentMouseX"(): integer
public "getCurrentMouseY"(): integer
/** Client only, do not use in server scripts */
public "getDummyWorld"(): $TrackedDummyWorld
public "getHoverItem"(): $ItemStack
public "getHoverPosFace"(): $BlockPosFace
public "getOnSelected"(): $BiConsumer<$BlockPos, $Direction>
/** Client only, do not use in server scripts */
public "getParticleManager"(): $ParticleManager
public "getRange"(): float
public "getRegisterUI"(): $LDLRegister
/** Client only, do not use in server scripts */
public "getRenderer"(): $WorldSceneRenderer
public "getRotationPitch"(): float
public "getRotationYaw"(): float
public "getSelectedPosFace"(): $BlockPosFace
public "getTranslateKey"(): string
public "getZoom"(): float
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "isAutoReleased"(): boolean
public "isDraggable"(): boolean
public "isDragging"(): boolean
public "isHoverTips"(): boolean
public "isIntractable"(): boolean
public "isLDLRegister"(): boolean
public "isRenderFacing"(): boolean
public "isRenderSelect"(): boolean
public "isScalable"(): boolean
public "isUseCache"(): boolean
public "isUseOrtho"(): boolean
public "name"(): string
public "needCompileCache"(): void
public "releaseCacheBuffer"(): void
/** Client only, do not use in server scripts */
public "renderBlockOverLay"(renderer: $WorldSceneRenderer$$Type): void
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setAfterWorldRender"(afterWorldRender: $Consumer$$Type<$SceneWidget$$Type>): $SceneWidget
public "setBeforeWorldRender"(beforeWorldRender: $Consumer$$Type<$SceneWidget$$Type>): $SceneWidget
public "setCameraYawAndPitch"(rotationYaw: float, rotationPitch: float): $SceneWidget
public "setCameraYawAndPitchAnima"(rotationYaw: float, rotationPitch: float, dur: integer): void
public "setCenter"(center: $Vector3f$$Type): $SceneWidget
public "setClearColor"(color: integer): $SceneWidget
public "setDraggable"(draggable: boolean): $SceneWidget
public "setHoverTips"(hoverTips: boolean): $SceneWidget
public "setIntractable"(intractable: boolean): $SceneWidget
public "setOnAddedTooltips"(onAddedTooltips: $BiConsumer$$Type<$SceneWidget$$Type, $List$$Type<$Component$$Type>>): $SceneWidget
public "setOnSelected"(onSelected: $BiConsumer$$Type<$BlockPos$$Type, $Direction$$Type>): $SceneWidget
public "setOrthoRange"(range: float): $SceneWidget
public "setRenderFacing"(renderFacing: boolean): $SceneWidget
public "setRenderSelect"(renderSelect: boolean): $SceneWidget
public "setRenderedCore"(blocks: $Collection$$Type<$BlockPos$$Type>): $SceneWidget
public "setRenderedCore"(blocks: $Collection$$Type<$BlockPos$$Type>, renderHook: $ISceneBlockRenderHook$$Type): $SceneWidget
public "setScalable"(scalable: boolean): $SceneWidget
public "setZoom"(zoom: float): $SceneWidget
public "useCacheBuffer"(): $SceneWidget
public "useCacheBuffer"(autoReleased: boolean): $SceneWidget
public "useOrtho"(): $SceneWidget
public "useOrtho"(useOrtho: boolean): $SceneWidget
get "center"(): $Vector3f
get "chatComponent"(): $Component
get "clickPosFace"(): $BlockPosFace
get "core"(): $Set<$BlockPos>
get "currentMouseX"(): integer
get "currentMouseY"(): integer
get "dummyWorld"(): $TrackedDummyWorld
get "hoverItem"(): $ItemStack
get "hoverPosFace"(): $BlockPosFace
get "onSelected"(): $BiConsumer<$BlockPos, $Direction>
get "particleManager"(): $ParticleManager
get "range"(): float
get "registerUI"(): $LDLRegister
get "renderer"(): $WorldSceneRenderer
get "rotationPitch"(): float
get "rotationYaw"(): float
get "selectedPosFace"(): $BlockPosFace
get "translateKey"(): string
get "zoom"(): float
get "autoReleased"(): boolean
get "draggable"(): boolean
get "dragging"(): boolean
get "hoverTips"(): boolean
get "intractable"(): boolean
get "lDLRegister"(): boolean
get "renderFacing"(): boolean
get "renderSelect"(): boolean
get "scalable"(): boolean
get "useCache"(): boolean
set "afterWorldRender"(value: $Consumer$$Type<$SceneWidget$$Type>)
set "beforeWorldRender"(value: $Consumer$$Type<$SceneWidget$$Type>)
set "center"(value: $Vector3f$$Type)
set "clearColor"(value: integer)
set "draggable"(value: boolean)
set "hoverTips"(value: boolean)
set "intractable"(value: boolean)
set "onAddedTooltips"(value: $BiConsumer$$Type<$SceneWidget$$Type, $List$$Type<$Component$$Type>>)
set "onSelected"(value: $BiConsumer$$Type<$BlockPos$$Type, $Direction$$Type>)
set "orthoRange"(value: float)
set "renderFacing"(value: boolean)
set "renderSelect"(value: boolean)
set "renderedCore"(value: $Collection$$Type<$BlockPos$$Type>)
set "scalable"(value: boolean)
set "zoom"(value: float)
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup" {
import { $Position$$Type } from "com.lowdragmc.lowdraglib.utils.Position"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $IIngredientSlot } from "com.lowdragmc.lowdraglib.gui.ingredient.IIngredientSlot"
import { $IConfigurableWidgetGroup } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidgetGroup"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Size$$Type } from "com.lowdragmc.lowdraglib.utils.Size"
import { $Widget, $Widget$$Type } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $Target } from "com.lowdragmc.lowdraglib.gui.ingredient.Target"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $IGhostIngredientTarget } from "com.lowdragmc.lowdraglib.gui.ingredient.IGhostIngredientTarget"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $Layout, $Layout$$Type } from "com.lowdragmc.lowdraglib.gui.widget.layout.Layout"
import { $Class$$Type } from "java.lang.Class"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"
import { $Transform$$Type } from "com.lowdragmc.lowdraglib.gui.animation.Transform"

export class $WidgetGroup extends $Widget implements $IGhostIngredientTarget, $IIngredientSlot, $IConfigurableWidgetGroup {
readonly "widgets": $List<$Widget>

constructor()
constructor(x: integer, y: integer, width: integer, height: integer)
constructor(position: $Position$$Type)
constructor(position: $Position$$Type, size: $Size$$Type)

public "acceptWidget"(widget: $IConfigurableWidget$$Type): void
public "addWidget"(widget: $Widget$$Type): $WidgetGroup
public "addWidget"<T extends $Widget>(widget: T, callback: $Consumer$$Type<T>): $WidgetGroup
public "addWidget"(index: integer, widget: $Widget$$Type): $WidgetGroup
public "addWidgetAnima"(widget: $Widget$$Type, animation: $Transform$$Type): void
public "addWidgets"(...widgets: $Widget$$Type[]): $WidgetGroup
public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "canDragIn"(dragging: any): boolean
public "canWidgetAccepted"(widget: $IConfigurableWidget$$Type): boolean
public "clearAllWidgets"(): void
public "deserializeInnerNBT"(nbt: $CompoundTag$$Type): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getAllWidgetSize"(): integer
public "getChatComponent"(): $Component
public "getContainedWidgets"(includeHidden: boolean): $List<$Widget>
public "getFirstWidgetById"(regex: string): $Widget
public "getLayout"(): $Layout
public "getLayoutPadding"(): integer
public "getPhantomTargets"(ingredient: any): $List<$Target>
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "getWidgetsById"(regex: string): $List<$Widget>
public "getWidgetsByType"<T extends $Widget>(clazz: $Class$$Type<T>): $List<T>
public "getXEIIngredientOverMouse"(mouseX: double, mouseY: double): any
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "initTemplate"(): void
public "isAllowXEIIngredientOverMouse"(): boolean
public "isChild"(widget: $Widget$$Type): boolean
public "isDynamicSized"(): boolean
public "isLDLRegister"(): boolean
public "name"(): string
public "onWidgetRemoved"(widget: $IConfigurableWidget$$Type): void
public "removeWidget"(widget: $Widget$$Type): void
public "removeWidgetAnima"(widget: $Widget$$Type, animation: $Transform$$Type): void
public "serializeInnerNBT"(): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setAllowXEIIngredientOverMouse"(allowXEIIngredientOverMouse: boolean): void
public "setDynamicSized"(dynamicSized: boolean): void
public "setLayout"(layout: $Layout$$Type): void
public "setLayoutPadding"(layoutPadding: integer): void
public "setVisible"(visible: boolean): $WidgetGroup
public "waitToAdded"(widget: $Widget$$Type): void
public "waitToRemoved"(widget: $Widget$$Type): void
get "allWidgetSize"(): integer
get "chatComponent"(): $Component
get "layout"(): $Layout
get "layoutPadding"(): integer
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "allowXEIIngredientOverMouse"(): boolean
get "dynamicSized"(): boolean
get "lDLRegister"(): boolean
set "allowXEIIngredientOverMouse"(value: boolean)
set "dynamicSized"(value: boolean)
set "layout"(value: $Layout$$Type)
set "layoutPadding"(value: integer)
set "visible"(value: boolean)
}
}

declare module "com.lowdragmc.lowdraglib.gui.texture.TextTexture$TextType" {
import { $Enum } from "java.lang.Enum"

export class $TextTexture$TextType extends $Enum<$TextTexture$TextType> {
static readonly "HIDE": $TextTexture$TextType
static readonly "LEFT": $TextTexture$TextType
static readonly "LEFT_HIDE": $TextTexture$TextType
static readonly "LEFT_OVERFLOW": $TextTexture$TextType
static readonly "LEFT_POP_OUT": $TextTexture$TextType
static readonly "LEFT_POP_OUT_BG": $TextTexture$TextType
static readonly "LEFT_ROLL": $TextTexture$TextType
static readonly "LEFT_ROLL_ALWAYS": $TextTexture$TextType
static readonly "NORMAL": $TextTexture$TextType
static readonly "OVERFLOW": $TextTexture$TextType
static readonly "POP_OUT": $TextTexture$TextType
static readonly "POP_OUT_BG": $TextTexture$TextType
static readonly "RIGHT": $TextTexture$TextType
static readonly "RIGHT_HIDE": $TextTexture$TextType
static readonly "RIGHT_OVERFLOW": $TextTexture$TextType
static readonly "RIGHT_POP_OUT": $TextTexture$TextType
static readonly "RIGHT_POP_OUT_BG": $TextTexture$TextType
static readonly "ROLL": $TextTexture$TextType
static readonly "ROLL_ALWAYS": $TextTexture$TextType
readonly "customBackground": boolean

public static "valueOf"(name: string): $TextTexture$TextType
public static "values"(): $TextTexture$TextType[]
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.layout.Layout" {
import { $Enum } from "java.lang.Enum"

export class $Layout extends $Enum<$Layout> {
static readonly "HORIZONTAL_BOTTOM": $Layout
static readonly "HORIZONTAL_CENTER": $Layout
static readonly "HORIZONTAL_TOP": $Layout
static readonly "NONE": $Layout
static readonly "VERTICAL_CENTER": $Layout
static readonly "VERTICAL_LEFT": $Layout
static readonly "VERTICAL_RIGHT": $Layout

public static "valueOf"(name: string): $Layout
public static "values"(): $Layout[]
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.codeeditor.language.ILanguageDefinition" {
import { $Matcher$$Type } from "java.util.regex.Matcher"
import { $Pattern } from "java.util.regex.Pattern"
import { $TokenType } from "com.lowdragmc.lowdraglib.gui.widget.codeeditor.language.TokenType"

export interface $ILanguageDefinition {
"getName"(): string
"getTokenPattern"(): $Pattern
"getTokenType"(matcher0: $Matcher$$Type): $TokenType
"shouldIncreaseIndentation"(string0: string): boolean
get "name"(): string
get "tokenPattern"(): $Pattern
}

export namespace $ILanguageDefinition {
const probejs$$marker: never
}
export abstract class $ILanguageDefinition$$Static implements $ILanguageDefinition {
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.TreeListWidget" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List$$Type } from "java.util.List"
import { $TreeNode, $TreeNode$$Type } from "com.lowdragmc.lowdraglib.gui.util.TreeNode"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $Function$$Type } from "java.util.function.Function"
import { $IGuiTexture, $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"

export class $TreeListWidget<K = any, T = any> extends $Widget {
constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, root: $TreeNode$$Type<K, T>, onSelected: $Consumer$$Type<$TreeNode$$Type<K, T>>)

public "canSelectNode"(canSelectNode: boolean): $TreeListWidget<K, T>
public "jumpTo"(path: $List$$Type<K>): $TreeNode<K, T>
public "setBackground"(background: $IGuiTexture$$Type): $TreeListWidget<K, T>
public "setContentIconSupplier"(contentIconSupplier: $Function$$Type<T, $IGuiTexture>): $TreeListWidget<K, T>
public "setContentNameSupplier"(contentNameSupplier: $Function$$Type<T, string>): $TreeListWidget<K, T>
public "setKeyIconSupplier"(keyIconSupplier: $Function$$Type<K, $IGuiTexture>): $TreeListWidget<K, T>
public "setKeyNameSupplier"(keyNameSupplier: $Function$$Type<K, string>): $TreeListWidget<K, T>
public "setLeafTexture"(leafTexture: $IGuiTexture$$Type): $TreeListWidget<K, T>
public "setLineHeight"(lineHeight: integer): $TreeListWidget<K, T>
public "setNodeTexture"(nodeTexture: $IGuiTexture$$Type): $TreeListWidget<K, T>
public "setOnDoubleClickLeaf"(onDoubleClickLeaf: $Consumer$$Type<$TreeNode$$Type<K, T>>): $TreeListWidget<K, T>
public "setOnSelected"(onSelected: $Consumer$$Type<$TreeNode$$Type<K, T>>): $TreeListWidget<K, T>
set "background"(value: $IGuiTexture$$Type)
set "contentIconSupplier"(value: $Function$$Type<T, $IGuiTexture>)
set "contentNameSupplier"(value: $Function$$Type<T, string>)
set "keyIconSupplier"(value: $Function$$Type<K, $IGuiTexture>)
set "keyNameSupplier"(value: $Function$$Type<K, string>)
set "leafTexture"(value: $IGuiTexture$$Type)
set "lineHeight"(value: integer)
set "nodeTexture"(value: $IGuiTexture$$Type)
set "onDoubleClickLeaf"(value: $Consumer$$Type<$TreeNode$$Type<K, T>>)
set "onSelected"(value: $Consumer$$Type<$TreeNode$$Type<K, T>>)
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.TextBoxWidget" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $List, $List$$Type } from "java.util.List"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $TextBoxWidget extends $Widget implements $IConfigurableWidget {
readonly "content": $List<string>

constructor()
constructor(x: integer, y: integer, width: integer, content: $List$$Type<string>)

public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "canDragIn"(dragging: any): boolean
public "deserializeInnerNBT"(nbt: $CompoundTag$$Type): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
public "getMaxContentWidth"(): integer
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "initTemplate"(): void
public "isLDLRegister"(): boolean
public "name"(): string
public "serializeInnerNBT"(): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setCenter"(center: boolean): $TextBoxWidget
public "setContent"(content: $List$$Type<string>): $TextBoxWidget
public "setFontColor"(fontColor: integer): $TextBoxWidget
public "setFontSize"(fontSize: integer): $TextBoxWidget
public "setShadow"(shadow: boolean): $TextBoxWidget
public "setSpace"(space: integer): $TextBoxWidget
public "widget"(): $Widget
get "constrainWidth"(): boolean
set "constrainWidth"(value: boolean)
get "fontColor"(): integer
set "fontColor"(value: integer)
get "fontSize"(): integer
set "fontSize"(value: integer)
get "isCenter"(): boolean
set "isCenter"(value: boolean)
get "isShadow"(): boolean
set "isShadow"(value: boolean)
get "space"(): integer
set "space"(value: integer)
get "chatComponent"(): $Component
get "maxContentWidth"(): integer
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
set "center"(value: boolean)
set "shadow"(value: boolean)
}
}

declare module "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidgetGroup" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export interface $IConfigurableWidgetGroup extends $IConfigurableWidget {
"acceptWidget"(widget: $IConfigurableWidget$$Type): void
"buildConfigurator"(father: $ConfiguratorGroup$$Type): void
"canDragIn"(dragging: any): boolean
"canWidgetAccepted"(widget: $IConfigurableWidget$$Type): boolean
"deserializeInnerNBT"(nbt: $CompoundTag$$Type): void
"getChatComponent"(): $Component
"getRegisterUI"(): $LDLRegister
"getTranslateKey"(): string
"group"(): string
"handleDragging"(dragging: any): boolean
"initTemplate"(): void
"isLDLRegister"(): boolean
"name"(): string
"onWidgetRemoved"(widget: $IConfigurableWidget$$Type): void
"serializeInnerNBT"(): $CompoundTag
"serializeWrapper"(): $CompoundTag
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}

export namespace $IConfigurableWidgetGroup {
function deserializeNBT(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
function deserializeNBT(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
function deserializeWrapper(tag: $CompoundTag$$Type): $IConfigurableWidget
function serializeNBT(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
function serializeNBT(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
}
export abstract class $IConfigurableWidgetGroup$$Static implements $IConfigurableWidgetGroup {
static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.DraggableScrollableWidgetGroup$IDraggable" {
import { $DraggableScrollableWidgetGroup$ISelected } from "com.lowdragmc.lowdraglib.gui.widget.DraggableScrollableWidgetGroup$ISelected"

export interface $DraggableScrollableWidgetGroup$IDraggable extends $DraggableScrollableWidgetGroup$ISelected {
"allowDrag"(mouseX: double, mouseY: double, button: integer): boolean
"allowSelected"(double0: double, double1: double, int2: integer): boolean
"canDragOutRange"(): boolean
"dragging"(mouseX: double, mouseY: double, deltaX: double, deltaY: double): boolean
"endDrag"(mouseX: double, mouseY: double): void
"onSelected"(): void
"onUnSelected"(): void
"startDrag"(mouseX: double, mouseY: double): void
}

export namespace $DraggableScrollableWidgetGroup$IDraggable {
const probejs$$marker: never
}
export abstract class $DraggableScrollableWidgetGroup$IDraggable$$Static implements $DraggableScrollableWidgetGroup$IDraggable {
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.TabButton" {
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $Component } from "net.minecraft.network.chat.Component"
import { $SwitchWidget } from "com.lowdragmc.lowdraglib.gui.widget.SwitchWidget"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $TabContainer$$Type } from "com.lowdragmc.lowdraglib.gui.widget.TabContainer"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $ClickData$$Type } from "com.lowdragmc.lowdraglib.gui.util.ClickData"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $TabButton extends $SwitchWidget {
constructor()
constructor(xPosition: integer, yPosition: integer, width: integer, height: integer)

public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "canDragIn"(dragging: any): boolean
public "deserializeInnerNBT"(nbt: $CompoundTag$$Type): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "isLDLRegister"(): boolean
public "name"(): string
public "onPressed"(clickData: $ClickData$$Type, isPressed: boolean): void
public "serializeInnerNBT"(): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setContainer"(container: $TabContainer$$Type): void
public "setHoverBorderTexture"(border: integer, color: integer): $TabButton
public "setHoverTexture"(...hoverTexture: $IGuiTexture$$Type[]): $TabButton
public "setTexture"(baseTexture: $IGuiTexture$$Type, pressedTexture: $IGuiTexture$$Type): $TabButton
public "widget"(): $Widget
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
set "container"(value: $TabContainer$$Type)
set "hoverTexture"(value: $IGuiTexture$$Type[])
}
}

declare module "com.lowdragmc.lowdraglib.gui.editor.ui.resource.ResourceContainer" {
import { $Resource, $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $Either, $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $Position$$Type } from "com.lowdragmc.lowdraglib.utils.Position"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $TriFunction$$Type } from "org.apache.commons.lang3.function.TriFunction"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $IGuiTexture, $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $File, $File$$Type } from "java.io.File"
import { $TreeBuilder$Menu$$Type } from "com.lowdragmc.lowdraglib.gui.util.TreeBuilder$Menu"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Map } from "java.util.Map"
import { $ResourcePanel, $ResourcePanel$$Type } from "com.lowdragmc.lowdraglib.gui.editor.ui.ResourcePanel"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $WidgetGroup } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $ResourceContainer<T = any, C extends $Widget = $Widget> extends $WidgetGroup {
constructor(resource: $Resource$$Type<T>, panel: $ResourcePanel$$Type)

public "canDragIn"(dragging: any): boolean
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
public "getPanel"(): $ResourcePanel
public "getRegisterUI"(): $LDLRegister
public "getResource"(): $Resource<T>
public "getSelected"(): $Either<string, $File>
public "getTranslateKey"(): string
public "getWidgetSupplier"(): $Function<$Either<string, $File>, C>
public "getWidgets"(): $Map<$Either<string, $File>, C>
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "isLDLRegister"(): boolean
public "name"(): string
public "reBuild"(): void
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setCanEdit"(canEdit: $Predicate$$Type<$Either$$Type<string, $File$$Type>>): $ResourceContainer<T, C>
public "setCanGlobalChange"(canGlobalChange: $Predicate$$Type<$Either$$Type<string, $File$$Type>>): $ResourceContainer<T, C>
public "setCanRemove"(canRemove: $Predicate$$Type<$Either$$Type<string, $File$$Type>>): $ResourceContainer<T, C>
public "setDragging"<D>(draggingMapping: $Function$$Type<$Either$$Type<string, $File$$Type>, D>, draggingRenderer: $TriFunction$$Type<$Either$$Type<string, $File$$Type>, D, $Position$$Type, $IGuiTexture>): $ResourceContainer<T, C>
public "setDragging"<D>(draggingMapping: $Function$$Type<$Either$$Type<string, $File$$Type>, D>, draggingRenderer: $Function$$Type<D, $IGuiTexture>): $ResourceContainer<T, C>
public "setNameSupplier"(nameSupplier: $Supplier$$Type<string>): $ResourceContainer<T, C>
public "setOnAdd"(onAdd: $Function$$Type<string, T>): $ResourceContainer<T, C>
public "setOnEdit"(onEdit: $Consumer$$Type<$Either$$Type<string, $File$$Type>>): $ResourceContainer<T, C>
public "setOnGlobalChange"(onGlobalChange: $Consumer$$Type<$Either$$Type<string, $File$$Type>>): $ResourceContainer<T, C>
public "setOnMenu"(onMenu: $BiConsumer$$Type<$Either$$Type<string, $File$$Type>, $TreeBuilder$Menu$$Type>): $ResourceContainer<T, C>
public "setOnRemove"(onRemove: $Consumer$$Type<$Either$$Type<string, $File$$Type>>): $ResourceContainer<T, C>
public "setRenamePredicate"(renamePredicate: $Predicate$$Type<string>): $ResourceContainer<T, C>
public "setWidgetSupplier"(widgetSupplier: $Function$$Type<$Either$$Type<string, $File$$Type>, C>): $ResourceContainer<T, C>
get "chatComponent"(): $Component
get "panel"(): $ResourcePanel
get "registerUI"(): $LDLRegister
get "resource"(): $Resource<T>
get "selected"(): $Either<string, $File>
get "translateKey"(): string
get "widgetSupplier"(): $Function<$Either<string, $File>, C>
get "widgets"(): $Map<$Either<string, $File>, C>
get "lDLRegister"(): boolean
set "canEdit"(value: $Predicate$$Type<$Either$$Type<string, $File$$Type>>)
set "canGlobalChange"(value: $Predicate$$Type<$Either$$Type<string, $File$$Type>>)
set "canRemove"(value: $Predicate$$Type<$Either$$Type<string, $File$$Type>>)
set "nameSupplier"(value: $Supplier$$Type<string>)
set "onAdd"(value: $Function$$Type<string, T>)
set "onEdit"(value: $Consumer$$Type<$Either$$Type<string, $File$$Type>>)
set "onGlobalChange"(value: $Consumer$$Type<$Either$$Type<string, $File$$Type>>)
set "onMenu"(value: $BiConsumer$$Type<$Either$$Type<string, $File$$Type>, $TreeBuilder$Menu$$Type>)
set "onRemove"(value: $Consumer$$Type<$Either$$Type<string, $File$$Type>>)
set "renamePredicate"(value: $Predicate$$Type<string>)
set "widgetSupplier"(value: $Function$$Type<$Either$$Type<string, $File$$Type>, C>)
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.ButtonWidget" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ClickData$$Type } from "com.lowdragmc.lowdraglib.gui.util.ClickData"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $ButtonWidget extends $Widget implements $IConfigurableWidget {
constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, buttonTexture: $IGuiTexture$$Type, onPressed: $Consumer$$Type<$ClickData$$Type>)
constructor()
constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, onPressed: $Consumer$$Type<$ClickData$$Type>)

public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "canDragIn"(dragging: any): boolean
public "deserializeInnerNBT"(nbt: $CompoundTag$$Type): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "initTemplate"(): void
public "isClicked"(): boolean
public "isLDLRegister"(): boolean
public "name"(): string
public "serializeInnerNBT"(): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setButtonTexture"(...buttonTexture: $IGuiTexture$$Type[]): $ButtonWidget
public "setClickedTexture"(...clickedTexture: $IGuiTexture$$Type[]): $ButtonWidget
public "setHoverBorderTexture"(border: integer, color: integer): $ButtonWidget
public "setHoverTexture"(...hoverTexture: $IGuiTexture$$Type[]): $ButtonWidget
public "setOnPressCallback"(onPressCallback: $Consumer$$Type<$ClickData$$Type>): $ButtonWidget
public "widget"(): $Widget
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "clicked"(): boolean
get "lDLRegister"(): boolean
set "buttonTexture"(value: $IGuiTexture$$Type[])
set "clickedTexture"(value: $IGuiTexture$$Type[])
set "hoverTexture"(value: $IGuiTexture$$Type[])
set "onPressCallback"(value: $Consumer$$Type<$ClickData$$Type>)
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.codeeditor.StyledLine" {
import { $List, $List$$Type } from "java.util.List"
import { $Font$$Type } from "net.minecraft.client.gui.Font"
import { $StyledText, $StyledText$$Type } from "com.lowdragmc.lowdraglib.gui.widget.codeeditor.StyledText"
import { $Record } from "java.lang.Record"
import { $Style$$Type } from "net.minecraft.network.chat.Style"

export class $StyledLine extends $Record {
constructor(line: integer, text: $List$$Type<$StyledText$$Type>)

public "getWidth"(font: $Font$$Type, style: $Style$$Type): integer
public "line"(): integer
public "text"(): $List<$StyledText>
}
}

declare module "com.lowdragmc.lowdraglib.gui.editor.ui.menu.MenuTab" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $ILDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.ILDLRegister"
import { $TreeBuilder$Menu, $TreeBuilder$Menu$$Type } from "com.lowdragmc.lowdraglib.gui.util.TreeBuilder$Menu"

export class $MenuTab implements $ILDLRegister {
public "appendMenu"(menu: $TreeBuilder$Menu$$Type): $TreeBuilder$Menu
/** Client only, do not use in server scripts */
public "createTabWidget"(): $Widget
public "deserializeNBT"(nbt: $CompoundTag$$Type): void
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
public static "registerMenuHook"(menuName: string, consumer: $BiConsumer$$Type<$MenuTab$$Type, $TreeBuilder$Menu$$Type>): void
public "serializeNBT"(): $CompoundTag
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.lowdraglib.gui.widget.Widget" {
import { $Rect } from "com.lowdragmc.lowdraglib.utils.Rect"
import { $Position, $Position$$Type } from "com.lowdragmc.lowdraglib.utils.Position"
import { $Animation, $Animation$$Type } from "com.lowdragmc.lowdraglib.gui.animation.Animation"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Rect2i, $Rect2i$$Type } from "net.minecraft.client.renderer.Rect2i"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Size, $Size$$Type } from "com.lowdragmc.lowdraglib.utils.Size"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $IGuiTexture, $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List, $List$$Type } from "java.util.List"
import { $WidgetUIAccess$$Type } from "com.lowdragmc.lowdraglib.gui.modular.WidgetUIAccess"
import { $Align, $Align$$Type } from "com.lowdragmc.lowdraglib.gui.widget.layout.Align"
import { $ModularUI, $ModularUI$$Type } from "com.lowdragmc.lowdraglib.gui.modular.ModularUI"
import { $WidgetGroup, $WidgetGroup$$Type } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"

export class $Widget {
constructor(x: integer, y: integer, width: integer, height: integer)
constructor(selfPosition: $Position$$Type, size: $Size$$Type)

public "addSelfPosition"(addX: integer, addY: integer): $Position
public "animation"(animation: $Animation$$Type): void
public "appendHoverTooltips"(...tooltipText: string[]): $Widget
public "appendHoverTooltips"(...tooltipText: $Component$$Type[]): $Widget
public "appendHoverTooltips"(tooltipText: $List$$Type<$Component$$Type>): $Widget
/** Client only, do not use in server scripts */
public "charTyped"(codePoint: character, modifiers: integer): boolean
public "detectAndSendChanges"(): void
/** Client only, do not use in server scripts */
public "drawInBackground"(graphics: $GuiGraphics$$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
/** Client only, do not use in server scripts */
public "drawInForeground"(graphics: $GuiGraphics$$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
/** Client only, do not use in server scripts */
public "drawOverlay"(graphics: $GuiGraphics$$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "getAlign"(): $Align
public "getAnimation"(): $Animation
public "getBackgroundTexture"(): $IGuiTexture
public "getGui"(): $ModularUI
/** Client only, do not use in server scripts */
public "getGuiExtraAreas"(guiRect: $Rect2i$$Type, list: $List$$Type<$Rect2i$$Type>): $List<$Rect2i>
public "getHoverElement"(mouseX: double, mouseY: double): $Widget
public "getId"(): string
public "getOverlay"(): $IGuiTexture
public "getParent"(): $WidgetGroup
public "getParentPosition"(): $Position
public "getPosition"(): $Position
public "getPositionX"(): integer
public "getPositionY"(): integer
public "getRect"(): $Rect
public "getSelfPosition"(): $Position
public "getSelfPositionX"(): integer
public "getSelfPositionY"(): integer
public "getSize"(): $Size
public "getSizeHeight"(): integer
public "getSizeWidth"(): integer
public "getTooltipTexts"(): $List<$Component>
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$$Type): void
public "inAnimate"(): boolean
public "initWidget"(): void
public "isActive"(): boolean
/** Client only, do not use in server scripts */
public static "isAltDown"(): boolean
public "isClientSideWidget"(): boolean
/** Client only, do not use in server scripts */
public static "isCtrlDown"(): boolean
public "isFocus"(): boolean
public "isInitialized"(): boolean
/** Client only, do not use in server scripts */
public static "isKeyDown"(keyCode: integer): boolean
/** Client only, do not use in server scripts */
public "isMouseDown"(button: integer): boolean
public static "isMouseOver"(x: integer, y: integer, width: integer, height: integer, mouseX: double, mouseY: double): boolean
public "isMouseOverElement"(mouseX: double, mouseY: double): boolean
public "isParent"(widgetGroup: $WidgetGroup$$Type): boolean
public "isRemote"(): boolean
/** Client only, do not use in server scripts */
public static "isShiftDown"(): boolean
public "isVisible"(): boolean
/** Client only, do not use in server scripts */
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
/** Client only, do not use in server scripts */
public "keyReleased"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
/** Client only, do not use in server scripts */
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
/** Client only, do not use in server scripts */
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
/** Client only, do not use in server scripts */
public "mouseMoved"(mouseX: double, mouseY: double): boolean
/** Client only, do not use in server scripts */
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
/** Client only, do not use in server scripts */
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
/** Client only, do not use in server scripts */
public "onFocusChanged"(lastFocus: $Widget$$Type, focus: $Widget$$Type): void
/** Client only, do not use in server scripts */
public "onScreenSizeUpdate"(screenWidth: integer, screenHeight: integer): void
/** Client only, do not use in server scripts */
public static "playButtonClickSound"(): void
public "readInitialData"(buffer: $FriendlyByteBuf$$Type): void
/** Client only, do not use in server scripts */
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$$Type): void
public "setActive"(isActive: boolean): $Widget
public "setAlign"(align: $Align$$Type): $Widget
public "setBackground"(...backgroundTexture: $IGuiTexture$$Type[]): $Widget
public "setClientSideWidget"(): $Widget
public "setDraggingConsumer"(draggingAccept: $Predicate$$Type<any>, draggingIn: $Consumer$$Type<any>, draggingOut: $Consumer$$Type<any>, draggingSuccess: $Consumer$$Type<any>): $Widget
public "setDraggingProvider"<T>(draggingProvider: $Supplier$$Type<T>, draggingRenderer: $BiFunction$$Type<T, $Position$$Type, $IGuiTexture>): $Widget
public "setDrawBackgroundWhenHover"(drawBackgroundWhenHover: boolean): $Widget
/** Client only, do not use in server scripts */
public "setFocus"(focus: boolean): void
public "setGui"(gui: $ModularUI$$Type): void
public "setHoverTexture"(...hoverTexture: $IGuiTexture$$Type[]): $Widget
public "setHoverTooltips"(...tooltipText: $Component$$Type[]): $Widget
public "setId"(id: string): $Widget
public "setOverlay"(overlay: $IGuiTexture$$Type): $Widget
public "setParentPosition"(parentPosition: $Position$$Type): void
public "setSelfPosition"(x: integer, y: integer): void
public "setSelfPosition"(selfPosition: $Position$$Type): void
public "setSelfPositionX"(x: integer): void
public "setSelfPositionY"(y: integer): void
public "setSize"(size: $Size$$Type): void
public "setSize"(width: integer, height: integer): void
public "setSizeHeight"(height: integer): void
public "setSizeWidth"(width: integer): void
public "setUiAccess"(uiAccess: $WidgetUIAccess$$Type): $Widget
public "setVisible"(isVisible: boolean): $Widget
/** Client only, do not use in server scripts */
public "toRectangleBox"(): $Rect2i
/** Client only, do not use in server scripts */
public "updateScreen"(): void
public "writeInitialData"(buffer: $FriendlyByteBuf$$Type): void
get "align"(): $Align
get "backgroundTexture"(): $IGuiTexture
get "gui"(): $ModularUI
get "id"(): string
get "overlay"(): $IGuiTexture
get "parent"(): $WidgetGroup
get "parentPosition"(): $Position
get "position"(): $Position
get "positionX"(): integer
get "positionY"(): integer
get "rect"(): $Rect
get "selfPosition"(): $Position
get "selfPositionX"(): integer
get "selfPositionY"(): integer
get "size"(): $Size
get "sizeHeight"(): integer
get "sizeWidth"(): integer
get "tooltipTexts"(): $List<$Component>
get "active"(): boolean
get "clientSideWidget"(): boolean
get "focus"(): boolean
get "initialized"(): boolean
get "remote"(): boolean
get "visible"(): boolean
set "active"(value: boolean)
set "align"(value: $Align$$Type)
set "background"(value: $IGuiTexture$$Type[])
set "drawBackgroundWhenHover"(value: boolean)
set "focus"(value: boolean)
set "gui"(value: $ModularUI$$Type)
set "hoverTexture"(value: $IGuiTexture$$Type[])
set "hoverTooltips"(value: $Component$$Type[])
set "id"(value: string)
set "overlay"(value: $IGuiTexture$$Type)
set "parentPosition"(value: $Position$$Type)
set "selfPosition"(value: $Position$$Type)
set "selfPositionX"(value: integer)
set "selfPositionY"(value: integer)
set "size"(value: $Size$$Type)
set "sizeHeight"(value: integer)
set "sizeWidth"(value: integer)
set "uiAccess"(value: $WidgetUIAccess$$Type)
set "visible"(value: boolean)
}
}

