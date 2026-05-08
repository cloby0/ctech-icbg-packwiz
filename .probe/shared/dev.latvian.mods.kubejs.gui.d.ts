declare module "dev.latvian.mods.kubejs.gui.chest.ChestMenuInventoryClickEvent$Callback" {
import { $ChestMenuInventoryClickEvent$$Type } from "dev.latvian.mods.kubejs.gui.chest.ChestMenuInventoryClickEvent"

export interface $ChestMenuInventoryClickEvent$Callback {
"onClick"(chestMenuInventoryClickEvent0: $ChestMenuInventoryClickEvent$$Type): void
}

export namespace $ChestMenuInventoryClickEvent$Callback {
const probejs$$marker: never
}
export abstract class $ChestMenuInventoryClickEvent$Callback$$Static implements $ChestMenuInventoryClickEvent$Callback {
}
}

declare module "dev.latvian.mods.kubejs.gui.chest.ChestMenuClickHandler" {
import { $ChestMenuClickEvent$$Type } from "dev.latvian.mods.kubejs.gui.chest.ChestMenuClickEvent"
import { $ClickType, $ClickType$$Type } from "net.minecraft.world.inventory.ClickType"
import { $ChestMenuClickEvent$Callback, $ChestMenuClickEvent$Callback$$Type } from "dev.latvian.mods.kubejs.gui.chest.ChestMenuClickEvent$Callback"
import { $Record } from "java.lang.Record"

export class $ChestMenuClickHandler extends $Record {
constructor(type: $ClickType$$Type, button: integer, callback: $ChestMenuClickEvent$Callback$$Type, autoHandle: boolean)

public "autoHandle"(): boolean
public "button"(): integer
public "callback"(): $ChestMenuClickEvent$Callback
public "test"(event: $ChestMenuClickEvent$$Type): boolean
public "type"(): $ClickType
}
}

declare module "dev.latvian.mods.kubejs.gui.chest.ChestMenuData" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ClickType$$Type } from "net.minecraft.world.inventory.ClickType"
import { $ChestMenuSlot, $ChestMenuSlot$$Type } from "dev.latvian.mods.kubejs.gui.chest.ChestMenuSlot"
import { $ChestMenuClickEvent$Callback, $ChestMenuClickEvent$Callback$$Type } from "dev.latvian.mods.kubejs.gui.chest.ChestMenuClickEvent$Callback"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"
import { $ChestMenuInventoryClickEvent$Callback, $ChestMenuInventoryClickEvent$Callback$$Type } from "dev.latvian.mods.kubejs.gui.chest.ChestMenuInventoryClickEvent$Callback"

export class $ChestMenuData {
readonly "player": $ServerPlayer
readonly "rows": integer
readonly "slots": $ChestMenuSlot[]

constructor(player: $ServerPlayer$$Type, title: $Component$$Type, rows: integer)

public "button"(x: integer, y: integer, stack: $ItemStack$$Type, displayName: $Component$$Type, leftClicked: $ChestMenuClickEvent$Callback$$Type): void
public "getSlot"(x: integer, y: integer): $ChestMenuSlot
public "handleClick"(index: integer, type: $ClickType$$Type, button: integer): void
public "slot"(x0: integer, y0: integer, x1: integer, y1: integer, slot: $Consumer$$Type<$ChestMenuSlot$$Type>): void
public "slot"(x: integer, y: integer, slot: $Consumer$$Type<$ChestMenuSlot$$Type>): void
public "sync"(): void
get "anyClicked"(): $ChestMenuClickEvent$Callback
set "anyClicked"(value: $ChestMenuClickEvent$Callback$$Type)
get "capturedInventory"(): $Container
set "capturedInventory"(value: $Container$$Type)
get "closed"(): $Runnable
set "closed"(value: $Runnable$$Type)
get "inventoryClicked"(): $ChestMenuInventoryClickEvent$Callback
set "inventoryClicked"(value: $ChestMenuInventoryClickEvent$Callback$$Type)
get "mouseItem"(): $ItemStack
set "mouseItem"(value: $ItemStack$$Type)
get "playerSlots"(): boolean
set "playerSlots"(value: boolean)
get "title"(): $Component
set "title"(value: $Component$$Type)
}
}

declare module "dev.latvian.mods.kubejs.gui.chest.ChestMenuSlot" {
import { $ChestMenuData, $ChestMenuData$$Type } from "dev.latvian.mods.kubejs.gui.chest.ChestMenuData"
import { $List } from "java.util.List"
import { $ChestMenuClickHandler } from "dev.latvian.mods.kubejs.gui.chest.ChestMenuClickHandler"
import { $ClickType$$Type } from "net.minecraft.world.inventory.ClickType"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ChestMenuClickEvent$Callback$$Type } from "dev.latvian.mods.kubejs.gui.chest.ChestMenuClickEvent$Callback"
import { $InventoryKJS, $InventoryKJS$$Type } from "dev.latvian.mods.kubejs.core.InventoryKJS"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $ChestMenuSlot {
readonly "clickHandlers": $List<$ChestMenuClickHandler>
"clicked": integer
readonly "gui": $ChestMenuData
readonly "index": integer
readonly "x": integer
readonly "y": integer

constructor(gui: $ChestMenuData$$Type, index: integer)

public "clicked"(type: $ClickType$$Type, button: integer, callback: $ChestMenuClickEvent$Callback$$Type, autoHandle: boolean): void
public "getItem"(): $ItemStack
public "resetClickHandlers"(): void
public "setDoubleClicked"(callback: $ChestMenuClickEvent$Callback$$Type): void
public "setItem"(stack: $ItemStack$$Type): void
public "setLeftClicked"(callback: $ChestMenuClickEvent$Callback$$Type): void
public "setMiddleClicked"(callback: $ChestMenuClickEvent$Callback$$Type): void
public "setRightClicked"(callback: $ChestMenuClickEvent$Callback$$Type): void
public "setShiftLeftClicked"(callback: $ChestMenuClickEvent$Callback$$Type): void
public "setShiftRightClicked"(callback: $ChestMenuClickEvent$Callback$$Type): void
public "setSwapped"(callback: $ChestMenuClickEvent$Callback$$Type): void
public "setThrown"(callback: $ChestMenuClickEvent$Callback$$Type): void
get "data"(): $Map<string, any>
set "data"(value: $Map$$Type<string, any>)
get "inventory"(): $InventoryKJS
set "inventory"(value: $InventoryKJS$$Type)
get "inventorySlot"(): integer
set "inventorySlot"(value: integer)
get "item"(): $ItemStack
set "doubleClicked"(value: $ChestMenuClickEvent$Callback$$Type)
set "item"(value: $ItemStack$$Type)
set "leftClicked"(value: $ChestMenuClickEvent$Callback$$Type)
set "middleClicked"(value: $ChestMenuClickEvent$Callback$$Type)
set "rightClicked"(value: $ChestMenuClickEvent$Callback$$Type)
set "shiftLeftClicked"(value: $ChestMenuClickEvent$Callback$$Type)
set "shiftRightClicked"(value: $ChestMenuClickEvent$Callback$$Type)
set "swapped"(value: $ChestMenuClickEvent$Callback$$Type)
set "thrown"(value: $ChestMenuClickEvent$Callback$$Type)
}
}

declare module "dev.latvian.mods.kubejs.gui.chest.ChestMenuClickEvent" {
import { $ClickType, $ClickType$$Type } from "net.minecraft.world.inventory.ClickType"
import { $ChestMenuSlot, $ChestMenuSlot$$Type } from "dev.latvian.mods.kubejs.gui.chest.ChestMenuSlot"

export class $ChestMenuClickEvent {
readonly "button": integer
readonly "slot": $ChestMenuSlot
readonly "type": $ClickType

constructor(slot: $ChestMenuSlot$$Type, type: $ClickType$$Type, button: integer)

public "setHandled"(): void
}
}

declare module "dev.latvian.mods.kubejs.gui.chest.ChestMenuInventoryClickEvent" {
import { $Slot$$Type } from "net.minecraft.world.inventory.Slot"
import { $ClickType, $ClickType$$Type } from "net.minecraft.world.inventory.ClickType"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $ChestMenuInventoryClickEvent {
readonly "button": integer
readonly "type": $ClickType

constructor(slot: $Slot$$Type, type: $ClickType$$Type, button: integer)

public "getIndex"(): integer
public "getItem"(): $ItemStack
public "setItem"(item: $ItemStack$$Type): void
get "index"(): integer
get "item"(): $ItemStack
set "item"(value: $ItemStack$$Type)
}
}

declare module "dev.latvian.mods.kubejs.gui.KubeJSGUI" {
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $InventoryKJS, $InventoryKJS$$Type } from "dev.latvian.mods.kubejs.core.InventoryKJS"
import { $SimpleContainer } from "net.minecraft.world.SimpleContainer"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $KubeJSGUI {
static readonly "EMPTY_CONTAINER": $SimpleContainer

constructor(buf: $FriendlyByteBuf$$Type)
constructor()

public "setInventory"(inv: $InventoryKJS$$Type): void
public "write"(buf: $FriendlyByteBuf$$Type): void
get "height"(): integer
set "height"(value: integer)
get "inventory"(): $InventoryKJS
set "inventory"(value: $InventoryKJS$$Type)
get "inventoryHeight"(): integer
set "inventoryHeight"(value: integer)
get "inventoryLabelX"(): integer
set "inventoryLabelX"(value: integer)
get "inventoryLabelY"(): integer
set "inventoryLabelY"(value: integer)
get "inventoryWidth"(): integer
set "inventoryWidth"(value: integer)
get "playerSlotsX"(): integer
set "playerSlotsX"(value: integer)
get "playerSlotsY"(): integer
set "playerSlotsY"(value: integer)
get "title"(): $Component
set "title"(value: $Component$$Type)
get "width"(): integer
set "width"(value: integer)
}
}

declare module "dev.latvian.mods.kubejs.gui.chest.ChestMenuClickEvent$Callback" {
import { $ChestMenuClickEvent$$Type } from "dev.latvian.mods.kubejs.gui.chest.ChestMenuClickEvent"

export interface $ChestMenuClickEvent$Callback {
"onClick"(chestMenuClickEvent0: $ChestMenuClickEvent$$Type): void
}

export namespace $ChestMenuClickEvent$Callback {
const probejs$$marker: never
}
export abstract class $ChestMenuClickEvent$Callback$$Static implements $ChestMenuClickEvent$Callback {
}
}

