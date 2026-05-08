declare module "com.lowdragmc.lowdraglib.side.fluid.forge.FluidTransferHelperImpl" {
import { $IFluidHandler, $IFluidHandler$$Type } from "net.minecraftforge.fluids.capability.IFluidHandler"
import { $IFluidTransfer, $IFluidTransfer$$Type } from "com.lowdragmc.lowdraglib.side.fluid.IFluidTransfer"
import { $FluidTransferHelper } from "com.lowdragmc.lowdraglib.side.fluid.FluidTransferHelper"

export class $FluidTransferHelperImpl extends $FluidTransferHelper {
constructor()

public static "toFluidHandler"(fluidTransfer: $IFluidTransfer$$Type): $IFluidHandler
public static "toFluidTransfer"(handler: $IFluidHandler$$Type): $IFluidTransfer
}
}

declare module "com.lowdragmc.lowdraglib.side.item.ItemTransferHelper" {
import { $IItemTransfer, $IItemTransfer$$Type } from "com.lowdragmc.lowdraglib.side.item.IItemTransfer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ItemTransferHelper {
constructor()

public static "canItemStacksStack"(first: $ItemStack$$Type, second: $ItemStack$$Type): boolean
public static "canItemStacksStackRelaxed"(a: $ItemStack$$Type, b: $ItemStack$$Type): boolean
public static "copyStackWithSize"(stack: $ItemStack$$Type, size: integer): $ItemStack
public static "exportToTarget"(source: $IItemTransfer$$Type, maxAmount: integer, predicate: $Predicate$$Type<$ItemStack$$Type>, level: $Level$$Type, pos: $BlockPos$$Type, direction: $Direction$$Type): void
public static "getItemTransfer"(level: $Level$$Type, pos: $BlockPos$$Type, direction: $Direction$$Type): $IItemTransfer
public static "giveItemToPlayer"(player: $Player$$Type, stack: $ItemStack$$Type): void
public static "giveItemToPlayer"(player: $Player$$Type, stack: $ItemStack$$Type, preferredSlot: integer): void
public static "importToTarget"(target: $IItemTransfer$$Type, maxAmount: integer, predicate: $Predicate$$Type<$ItemStack$$Type>, level: $Level$$Type, pos: $BlockPos$$Type, direction: $Direction$$Type): void
public static "insertItem"(dest: $IItemTransfer$$Type, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public static "insertItemStacked"(inventory: $IItemTransfer$$Type, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
}
}

declare module "com.lowdragmc.lowdraglib.side.fluid.IFluidTransfer" {
import { $FluidStack, $FluidStack$$Type } from "com.lowdragmc.lowdraglib.side.fluid.FluidStack"

export interface $IFluidTransfer {
"createSnapshot"(): any
"drain"(maxDrain: long, simulate: boolean): $FluidStack
"drain"(maxDrain: long, simulate: boolean, notifyChanges: boolean): $FluidStack
"drain"(resource: $FluidStack$$Type, simulate: boolean): $FluidStack
"drain"(resource: $FluidStack$$Type, simulate: boolean, notifyChanges: boolean): $FluidStack
"drain"(int0: integer, fluidStack1: $FluidStack$$Type, boolean2: boolean, boolean3: boolean): $FluidStack
"fill"(resource: $FluidStack$$Type, simulate: boolean, notifyChanges: boolean): long
"fill"(int0: integer, fluidStack1: $FluidStack$$Type, boolean2: boolean, boolean3: boolean): long
"fill"(resource: $FluidStack$$Type, simulate: boolean): long
"getFluidInTank"(int0: integer): $FluidStack
"getTankCapacity"(int0: integer): long
"getTanks"(): integer
"isFluidValid"(int0: integer, fluidStack1: $FluidStack$$Type): boolean
"onContentsChanged"(): void
"restoreFromSnapshot"(object0: any): void
"setFluidInTank"(int0: integer, fluidStack1: $FluidStack$$Type): void
"supportsDrain"(int0: integer): boolean
"supportsFill"(int0: integer): boolean
get "tanks"(): integer
}

export namespace $IFluidTransfer {
const EMPTY: $IFluidTransfer
}
export abstract class $IFluidTransfer$$Static implements $IFluidTransfer {
static readonly "EMPTY": $IFluidTransfer

}
}

declare module "com.lowdragmc.lowdraglib.side.fluid.FluidTransferHelper" {
import { $IFluidTransfer, $IFluidTransfer$$Type } from "com.lowdragmc.lowdraglib.side.fluid.IFluidTransfer"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $IItemTransfer$$Type } from "com.lowdragmc.lowdraglib.side.item.IItemTransfer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $FluidActionResult } from "com.lowdragmc.lowdraglib.side.fluid.FluidActionResult"
import { $FluidStack, $FluidStack$$Type } from "com.lowdragmc.lowdraglib.side.fluid.FluidStack"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $ItemStackTransfer$$Type } from "com.lowdragmc.lowdraglib.misc.ItemStackTransfer"

export class $FluidTransferHelper {
constructor()

public static "destroyBlockOnFluidPlacement"(level: $Level$$Type, pos: $BlockPos$$Type): void
public static "exportToTarget"(source: $IFluidTransfer$$Type, maxAmount: integer, filter: $Predicate$$Type<$FluidStack$$Type>, level: $Level$$Type, pos: $BlockPos$$Type, direction: $Direction$$Type): void
public static "getContainerItem"(copyContainer: $ItemStackTransfer$$Type, handler: $IFluidTransfer$$Type): $ItemStack
public static "getFluidContained"(container: $ItemStack$$Type): $FluidStack
public static "getFluidTransfer"(player: $Player$$Type, hand: $InteractionHand$$Type): $IFluidTransfer
public static "getFluidTransfer"(player: $Player$$Type, slot: integer): $IFluidTransfer
/** @deprecated */
public static "getFluidTransfer"(itemStack: $ItemStack$$Type): $IFluidTransfer
public static "getFluidTransfer"(level: $Level$$Type, pos: $BlockPos$$Type, direction: $Direction$$Type): $IFluidTransfer
public static "getFluidTransfer"(itemTransfer: $IItemTransfer$$Type, slot: integer): $IFluidTransfer
public static "getFluidTransfer"(player: $Player$$Type, screenHandler: $AbstractContainerMenu$$Type): $IFluidTransfer
public static "importToTarget"(target: $IFluidTransfer$$Type, maxAmount: integer, filter: $Predicate$$Type<$FluidStack$$Type>, level: $Level$$Type, pos: $BlockPos$$Type, direction: $Direction$$Type): void
public static "interactWithFluidHandler"(player: $Player$$Type, hand: $InteractionHand$$Type, level: $Level$$Type, pos: $BlockPos$$Type, side: $Direction$$Type): boolean
public static "interactWithFluidHandler"(player: $Player$$Type, hand: $InteractionHand$$Type, handler: $IFluidTransfer$$Type): boolean
public static "transferFluids"(sourceHandler: $IFluidTransfer$$Type, destHandler: $IFluidTransfer$$Type, transferLimit: long, fluidFilter: $Predicate$$Type<$FluidStack$$Type>): long
public static "tryEmptyContainer"(container: $ItemStack$$Type, fluidDestination: $IFluidTransfer$$Type, maxAmount: integer, player: $Player$$Type, doDrain: boolean): $FluidActionResult
public static "tryEmptyContainerAndStow"(container: $ItemStack$$Type, fluidDestination: $IFluidTransfer$$Type, inventory: $IItemTransfer$$Type, maxAmount: integer, player: $Player$$Type, doDrain: boolean): $FluidActionResult
public static "tryFillContainer"(container: $ItemStack$$Type, fluidSource: $IFluidTransfer$$Type, maxAmount: integer, player: $Player$$Type, doFill: boolean): $FluidActionResult
public static "tryFillContainerAndStow"(container: $ItemStack$$Type, fluidSource: $IFluidTransfer$$Type, inventory: $IItemTransfer$$Type, maxAmount: integer, player: $Player$$Type, doFill: boolean): $FluidActionResult
public static "tryFluidTransfer"(fluidDestination: $IFluidTransfer$$Type, fluidSource: $IFluidTransfer$$Type, maxAmount: integer, doTransfer: boolean): $FluidStack
public static "tryFluidTransfer"(fluidDestination: $IFluidTransfer$$Type, fluidSource: $IFluidTransfer$$Type, resource: $FluidStack$$Type, doTransfer: boolean): $FluidStack
public static "tryPickUpFluid"(emptyContainer: $ItemStack$$Type, playerIn: $Player$$Type, level: $Level$$Type, pos: $BlockPos$$Type, side: $Direction$$Type): $FluidActionResult
public static "tryPlaceFluid"(player: $Player$$Type, level: $Level$$Type, hand: $InteractionHand$$Type, pos: $BlockPos$$Type, container: $ItemStack$$Type, resource: $FluidStack$$Type): $FluidActionResult
public static "tryPlaceFluid"(player: $Player$$Type, level: $Level$$Type, hand: $InteractionHand$$Type, pos: $BlockPos$$Type, fluidSource: $IFluidTransfer$$Type, resource: $FluidStack$$Type): boolean
}
}

declare module "com.lowdragmc.lowdraglib.side.item.IItemTransfer" {
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $IItemTransfer {
"createSnapshot"(): any
"extractItem"(int0: integer, int1: integer, boolean2: boolean, boolean3: boolean): $ItemStack
"extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
"getSlotLimit"(int0: integer): integer
"getSlots"(): integer
"getStackInSlot"(int0: integer): $ItemStack
"insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
"insertItem"(int0: integer, itemStack1: $ItemStack$$Type, boolean2: boolean, boolean3: boolean): $ItemStack
"isItemValid"(int0: integer, itemStack1: $ItemStack$$Type): boolean
"onContentsChanged"(): void
"restoreFromSnapshot"(object0: any): void
"setStackInSlot"(index: integer, stack: $ItemStack$$Type): void
get "slots"(): integer
}

export namespace $IItemTransfer {
const EMPTY: $IItemTransfer
}
export abstract class $IItemTransfer$$Static implements $IItemTransfer {
static readonly "EMPTY": $IItemTransfer

}
}

declare module "com.lowdragmc.lowdraglib.side.fluid.FluidStack" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Fluid, $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $FluidStack {
public "copy"(amount: long): $FluidStack
public "copy"(): $FluidStack
public static "create"(fluid: $Fluid$$Type, amount: long, nbt: $CompoundTag$$Type): $FluidStack
public static "create"(stack: $FluidStack$$Type, amount: long): $FluidStack
public static "create"(fluid: $Fluid$$Type, amount: long): $FluidStack
public static "empty"(): $FluidStack
public "getAmount"(): long
public "getDisplayName"(): $Component
public "getFluid"(): $Fluid
public "getRawFluid"(): $Fluid
public "getTag"(): $CompoundTag
public "grow"(amount: long): void
public "hasTag"(): boolean
public "isEmpty"(): boolean
public "isFluidEqual"(other: $FluidStack$$Type): boolean
public "isFluidStackEqual"(other: $FluidStack$$Type): boolean
public static "loadFromTag"(nbt: $CompoundTag$$Type): $FluidStack
public static "readFromBuf"(buf: $FriendlyByteBuf$$Type): $FluidStack
public "saveToTag"(nbt: $CompoundTag$$Type): $CompoundTag
public "setAmount"(amount: long): void
public "setFluid"(fluid: $Fluid$$Type): void
public "setTag"(tag: $CompoundTag$$Type): void
public "shrink"(amount: long): void
public "writeToBuf"(buf: $FriendlyByteBuf$$Type): void
get "amount"(): long
get "displayName"(): $Component
get "fluid"(): $Fluid
get "rawFluid"(): $Fluid
get "tag"(): $CompoundTag
set "amount"(value: long)
set "fluid"(value: $Fluid$$Type)
set "tag"(value: $CompoundTag$$Type)
}
}

declare module "com.lowdragmc.lowdraglib.side.fluid.IFluidStorage" {
import { $IFluidTransfer } from "com.lowdragmc.lowdraglib.side.fluid.IFluidTransfer"
import { $FluidStack, $FluidStack$$Type } from "com.lowdragmc.lowdraglib.side.fluid.FluidStack"

export interface $IFluidStorage extends $IFluidTransfer {
"createSnapshot"(): any
"drain"(maxDrain: long, simulate: boolean): $FluidStack
"drain"(maxDrain: long, simulate: boolean, notifyChanges: boolean): $FluidStack
"drain"(resource: $FluidStack$$Type, simulate: boolean): $FluidStack
"drain"(resource: $FluidStack$$Type, simulate: boolean, notifyChanges: boolean): $FluidStack
"drain"(int0: integer, fluidStack1: $FluidStack$$Type, boolean2: boolean, boolean3: boolean): $FluidStack
"fill"(resource: $FluidStack$$Type, simulate: boolean, notifyChanges: boolean): long
"fill"(int0: integer, fluidStack1: $FluidStack$$Type, boolean2: boolean, boolean3: boolean): long
"fill"(resource: $FluidStack$$Type, simulate: boolean): long
"getCapacity"(): long
"getFluid"(): $FluidStack
"getFluidAmount"(): long
"getFluidInTank"(tank: integer): $FluidStack
"getTankCapacity"(tank: integer): long
"getTanks"(): integer
"isFluidValid"(fluidStack0: $FluidStack$$Type): boolean
"isFluidValid"(tank: integer, stack: $FluidStack$$Type): boolean
"onContentsChanged"(): void
"restoreFromSnapshot"(object0: any): void
"setFluid"(fluidStack0: $FluidStack$$Type): void
"setFluidInTank"(tank: integer, fluidStack: $FluidStack$$Type): void
"supportsDrain"(int0: integer): boolean
"supportsFill"(int0: integer): boolean
get "capacity"(): long
get "fluid"(): $FluidStack
get "fluidAmount"(): long
get "tanks"(): integer
set "fluid"(value: $FluidStack$$Type)
}

export namespace $IFluidStorage {
const EMPTY: $IFluidStorage
}
export abstract class $IFluidStorage$$Static implements $IFluidStorage {
static readonly "EMPTY": $IFluidStorage

}
}

declare module "com.lowdragmc.lowdraglib.side.fluid.FluidActionResult" {
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $FluidActionResult {
static readonly "FAILURE": $FluidActionResult
readonly "result": $ItemStack
readonly "success": boolean

constructor(result: $ItemStack$$Type)

public "getResult"(): $ItemStack
public "isSuccess"(): boolean
}
}

declare module "com.lowdragmc.lowdraglib.side.item.forge.ItemTransferHelperImpl" {
import { $IItemHandler, $IItemHandler$$Type } from "net.minecraftforge.items.IItemHandler"
import { $IItemTransfer, $IItemTransfer$$Type } from "com.lowdragmc.lowdraglib.side.item.IItemTransfer"
import { $ItemTransferHelper } from "com.lowdragmc.lowdraglib.side.item.ItemTransferHelper"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $ItemTransferHelperImpl extends $ItemTransferHelper {
constructor()

public static "insertItem"(handler: $IItemHandler$$Type, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public static "insertToEmpty"(handler: $IItemHandler$$Type, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public static "insertToEmpty"(handler: $IItemTransfer$$Type, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public static "toItemHandler"(itemTransfer: $IItemTransfer$$Type): $IItemHandler
public static "toItemTransfer"(handler: $IItemHandler$$Type): $IItemTransfer
}
}

