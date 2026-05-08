declare module "com.lowdragmc.lowdraglib.kjs.ui.ItemUIJSFactory" {
import { $UIFactory } from "com.lowdragmc.lowdraglib.gui.factory.UIFactory"
import { $ItemUIJSFactory$ItemAccess } from "com.lowdragmc.lowdraglib.kjs.ui.ItemUIJSFactory$ItemAccess"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ItemUIJSFactory extends $UIFactory<$ItemUIJSFactory$ItemAccess> {
static readonly "INSTANCE": $ItemUIJSFactory

public "openUI"(player: $Player$$Type, hand: $InteractionHand$$Type, uiName: string): boolean
}
}

declare module "com.lowdragmc.lowdraglib.kjs.ui.UIEvents$BlockUIEventJS" {
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $UIEvents$BlockUIEventJS extends $EventJS {
constructor(level: $Level$$Type, pos: $BlockPos$$Type, block: $BlockContainerJS$$Type, player: $Player$$Type)

public "getBlock"(): $BlockContainerJS
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getPos"(): $BlockPos
get "block"(): $BlockContainerJS
set "block"(value: $BlockContainerJS$$Type)
get "level"(): $Level
set "level"(value: $Level$$Type)
get "player"(): $Player
set "player"(value: $Player$$Type)
get "pos"(): $BlockPos
set "pos"(value: $BlockPos$$Type)
}
}

declare module "com.lowdragmc.lowdraglib.kjs.ui.UIEvents$ItemUIEventJS" {
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $UIEvents$ItemUIEventJS extends $EventJS {
constructor(player: $Player$$Type, hand: $InteractionHand$$Type, held: $ItemStack$$Type)

public "getHand"(): $InteractionHand
public "getHeld"(): $ItemStack
public "getPlayer"(): $Player
get "hand"(): $InteractionHand
set "hand"(value: $InteractionHand$$Type)
get "held"(): $ItemStack
set "held"(value: $ItemStack$$Type)
get "player"(): $Player
set "player"(value: $Player$$Type)
}
}

declare module "com.lowdragmc.lowdraglib.kjs.forge.ISlotWidgetKJS" {
import { $IItemHandlerModifiable$$Type } from "net.minecraftforge.items.IItemHandlerModifiable"
import { $SlotWidget } from "com.lowdragmc.lowdraglib.gui.widget.SlotWidget"

export interface $ISlotWidgetKJS {
"kjs$self"(): $SlotWidget
"kjs$setHandlerSlot"(itemHandler: $IItemHandlerModifiable$$Type, slot: integer): void
}

export namespace $ISlotWidgetKJS {
const probejs$$marker: never
}
export abstract class $ISlotWidgetKJS$$Static implements $ISlotWidgetKJS {
}
}

declare module "com.lowdragmc.lowdraglib.kjs.ui.ItemUIJSFactory$ItemAccess" {
import { $Record } from "java.lang.Record"
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"

export class $ItemUIJSFactory$ItemAccess extends $Record {
constructor(hand: $InteractionHand$$Type, uiName: string)

public "hand"(): $InteractionHand
public "uiName"(): string
}
}

declare module "com.lowdragmc.lowdraglib.kjs.ui.BlockUIJSFactory$BlockAccess" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Record } from "java.lang.Record"

export class $BlockUIJSFactory$BlockAccess extends $Record {
constructor(pos: $BlockPos$$Type, uiName: string)

public "pos"(): $BlockPos
public "uiName"(): string
}
}

declare module "com.lowdragmc.lowdraglib.kjs.ui.BlockUIJSFactory" {
import { $UIFactory } from "com.lowdragmc.lowdraglib.gui.factory.UIFactory"
import { $BlockUIJSFactory$BlockAccess } from "com.lowdragmc.lowdraglib.kjs.ui.BlockUIJSFactory$BlockAccess"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $BlockUIJSFactory extends $UIFactory<$BlockUIJSFactory$BlockAccess> {
static readonly "INSTANCE": $BlockUIJSFactory

/** Opens a UI for a player at a specific block position. */
public "openUI"(player: $Player$$Type, pos: $BlockPos$$Type, uiName: string): boolean
}
}

