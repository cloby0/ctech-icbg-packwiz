declare module "com.lowdragmc.lowdraglib.misc.ItemStackTransfer" {
import { $ITagSerializable } from "com.lowdragmc.lowdraglib.syncdata.ITagSerializable"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $IItemTransfer } from "com.lowdragmc.lowdraglib.side.item.IItemTransfer"
import { $IContentChangeAware } from "com.lowdragmc.lowdraglib.syncdata.IContentChangeAware"
import { $NonNullList$$Type } from "net.minecraft.core.NonNullList"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"
import { $Function$$Type } from "java.util.function.Function"

export class $ItemStackTransfer implements $IItemTransfer, $ITagSerializable<$CompoundTag>, $IContentChangeAware {
constructor(stacks: $NonNullList$$Type<$ItemStack$$Type>)
constructor(size: integer)
constructor()
constructor(stack: $ItemStack$$Type)

public "copy"(): $ItemStackTransfer
public "createSnapshot"(): any
public "deserializeNBT"(nbt: $CompoundTag$$Type): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean, notifyChanges: boolean): $ItemStack
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "getOnContentsChanged"(): $Runnable
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean, notifyChanges: boolean): $ItemStack
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "onContentsChanged"(): void
public "onContentsChanged"(slot: integer): void
public "restoreFromSnapshot"(snapshot: any): void
public "setFilter"(filter: $Function$$Type<$ItemStack$$Type, boolean>): void
public "setOnContentsChanged"(onContentsChanged: $Runnable$$Type): void
public "setSize"(size: integer): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
get "slots"(): integer
set "filter"(value: $Function$$Type<$ItemStack$$Type, boolean>)
set "size"(value: integer)
}
}

declare module "com.lowdragmc.lowdraglib.misc.FluidStorage" {
import { $ITagSerializable } from "com.lowdragmc.lowdraglib.syncdata.ITagSerializable"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $IContentChangeAware } from "com.lowdragmc.lowdraglib.syncdata.IContentChangeAware"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $FluidStack, $FluidStack$$Type } from "com.lowdragmc.lowdraglib.side.fluid.FluidStack"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"
import { $IFluidStorage } from "com.lowdragmc.lowdraglib.side.fluid.IFluidStorage"

export class $FluidStorage implements $IFluidStorage, $IContentChangeAware, $ITagSerializable<$CompoundTag> {
constructor(capacity: long, validator: $Predicate$$Type<$FluidStack$$Type>)
constructor(fluidStack: $FluidStack$$Type)
constructor(capacity: long)

public "copy"(): $FluidStorage
public "createSnapshot"(): any
public "deserializeNBT"(nbt: $CompoundTag$$Type): void
public "drain"(tank: integer, resource: $FluidStack$$Type, simulate: boolean, notifyChange: boolean): $FluidStack
public "drain"(maxDrain: long, simulate: boolean): $FluidStack
public "drain"(maxDrain: long, simulate: boolean, notifyChanges: boolean): $FluidStack
public "drain"(resource: $FluidStack$$Type, simulate: boolean): $FluidStack
public "drain"(resource: $FluidStack$$Type, simulate: boolean, notifyChanges: boolean): $FluidStack
public "fill"(tank: integer, resource: $FluidStack$$Type, simulate: boolean, notifyChange: boolean): long
public "fill"(resource: $FluidStack$$Type, simulate: boolean, notifyChanges: boolean): long
public "fill"(resource: $FluidStack$$Type, simulate: boolean): long
public "getCapacity"(): long
public "getFluid"(): $FluidStack
public "getFluidAmount"(): long
public "getFluidInTank"(tank: integer): $FluidStack
public "getOnContentsChanged"(): $Runnable
public "getTankCapacity"(tank: integer): long
public "getTanks"(): integer
public "isFluidValid"(stack: $FluidStack$$Type): boolean
public "isFluidValid"(tank: integer, stack: $FluidStack$$Type): boolean
public "onContentsChanged"(): void
public "restoreFromSnapshot"(snapshot: any): void
public "serializeNBT"(): $CompoundTag
public "setCapacity"(capacity: long): void
public "setFluid"(fluid: $FluidStack$$Type): void
public "setFluidInTank"(tank: integer, fluidStack: $FluidStack$$Type): void
public "setOnContentsChanged"(onContentsChanged: $Runnable$$Type): void
public "setValidator"(validator: $Predicate$$Type<$FluidStack$$Type>): void
public "supportsDrain"(tank: integer): boolean
public "supportsFill"(tank: integer): boolean
get "capacity"(): long
get "fluid"(): $FluidStack
get "fluidAmount"(): long
get "tanks"(): integer
set "capacity"(value: long)
set "fluid"(value: $FluidStack$$Type)
set "validator"(value: $Predicate$$Type<$FluidStack$$Type>)
}
}

