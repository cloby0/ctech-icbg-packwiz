declare module "net.minecraftforge.items.IItemHandlerModifiable" {
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $IItemHandler } from "net.minecraftforge.items.IItemHandler"
import { $List } from "java.util.List"
import { $Container } from "net.minecraft.world.Container"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export interface $IItemHandlerModifiable extends $IItemHandler {
"asContainer"(): $Container
"clear"(ingredient: $Ingredient$$Type): void
"clear"(): void
"count"(): integer
"count"(ingredient: $Ingredient$$Type): integer
"countNonEmpty"(ingredient: $Ingredient$$Type): integer
"countNonEmpty"(): integer
"extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
"extractItem"(int0: integer, int1: integer, boolean2: boolean): $ItemStack
"find"(): integer
"find"(ingredient: $Ingredient$$Type): integer
"getAllItems"(): $List<$ItemStack>
"getBlock"(level: $Level$$Type): $BlockContainerJS
"getHeight"(): integer
"getSlotLimit"(i: integer): integer
"getSlotLimit"(int0: integer): integer
"getSlots"(): integer
"getSlots"(): integer
"getStackInSlot"(i: integer): $ItemStack
"getStackInSlot"(int0: integer): $ItemStack
"getWidth"(): integer
"insertItem"(i: integer, itemStack: $ItemStack$$Type, b: boolean): $ItemStack
"insertItem"(int0: integer, itemStack1: $ItemStack$$Type, boolean2: boolean): $ItemStack
"insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
"isEmpty"(): boolean
"isItemValid"(i: integer, itemStack: $ItemStack$$Type): boolean
"isItemValid"(int0: integer, itemStack1: $ItemStack$$Type): boolean
"isMutable"(): boolean
"kjs$self"(): $IItemHandler
"setChanged"(): void
"setStackInSlot"(int0: integer, itemStack1: $ItemStack$$Type): void
"setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "slots"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}

export namespace $IItemHandlerModifiable {
const probejs$$marker: never
}
export abstract class $IItemHandlerModifiable$$Static implements $IItemHandlerModifiable {
}
}

declare module "net.minecraftforge.items.IItemHandler" {
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $List } from "java.util.List"
import { $Container } from "net.minecraft.world.Container"
import { $InventoryKJS } from "dev.latvian.mods.kubejs.core.InventoryKJS"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export interface $IItemHandler extends $InventoryKJS {
"asContainer"(): $Container
"clear"(ingredient: $Ingredient$$Type): void
"clear"(): void
"count"(): integer
"count"(ingredient: $Ingredient$$Type): integer
"countNonEmpty"(ingredient: $Ingredient$$Type): integer
"countNonEmpty"(): integer
"extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
"extractItem"(int0: integer, int1: integer, boolean2: boolean): $ItemStack
"find"(): integer
"find"(ingredient: $Ingredient$$Type): integer
"getAllItems"(): $List<$ItemStack>
"getBlock"(level: $Level$$Type): $BlockContainerJS
"getHeight"(): integer
"getSlotLimit"(i: integer): integer
"getSlotLimit"(int0: integer): integer
"getSlots"(): integer
"getSlots"(): integer
"getStackInSlot"(i: integer): $ItemStack
"getStackInSlot"(int0: integer): $ItemStack
"getWidth"(): integer
"insertItem"(i: integer, itemStack: $ItemStack$$Type, b: boolean): $ItemStack
"insertItem"(int0: integer, itemStack1: $ItemStack$$Type, boolean2: boolean): $ItemStack
"insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
"isEmpty"(): boolean
"isItemValid"(i: integer, itemStack: $ItemStack$$Type): boolean
"isItemValid"(int0: integer, itemStack1: $ItemStack$$Type): boolean
"isMutable"(): boolean
"kjs$self"(): $IItemHandler
"setChanged"(): void
"setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "slots"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}

export namespace $IItemHandler {
const probejs$$marker: never
}
export abstract class $IItemHandler$$Static implements $IItemHandler {
}
}

declare module "net.minecraftforge.items.ItemStackHandler" {
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $IItemHandler } from "net.minecraftforge.items.IItemHandler"
import { $List } from "java.util.List"
import { $Container } from "net.minecraft.world.Container"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $NonNullList$$Type } from "net.minecraft.core.NonNullList"
import { $IItemHandlerModifiable } from "net.minecraftforge.items.IItemHandlerModifiable"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $INBTSerializable } from "net.minecraftforge.common.util.INBTSerializable"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export class $ItemStackHandler implements $IItemHandler, $IItemHandlerModifiable, $INBTSerializable<$CompoundTag> {
constructor()
constructor(int0: integer)
constructor(nonNullList0: $NonNullList$$Type<$ItemStack$$Type>)

public "asContainer"(): $Container
public "clear"(ingredient: $Ingredient$$Type): void
public "clear"(): void
public "count"(): integer
public "count"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "extractItem"(int0: integer, int1: integer, boolean2: boolean): $ItemStack
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "find"(): integer
public "find"(ingredient: $Ingredient$$Type): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getHeight"(): integer
public "getSlotLimit"(int0: integer): integer
public "getSlotLimit"(i: integer): integer
public "getSlots"(): integer
public "getSlots"(): integer
public "getStackInSlot"(int0: integer): $ItemStack
public "getStackInSlot"(i: integer): $ItemStack
public "getWidth"(): integer
public "insertItem"(int0: integer, itemStack1: $ItemStack$$Type, boolean2: boolean): $ItemStack
public "insertItem"(i: integer, itemStack: $ItemStack$$Type, b: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "isItemValid"(i: integer, itemStack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $IItemHandler
public "serializeNBT"(): $CompoundTag
public "setChanged"(): void
public "setSize"(int0: integer): void
public "setStackInSlot"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "slots"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
set "size"(value: integer)
}
}

declare module "net.minecraftforge.items.wrapper.CombinedInvWrapper" {
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $IItemHandler } from "net.minecraftforge.items.IItemHandler"
import { $List } from "java.util.List"
import { $Container } from "net.minecraft.world.Container"
import { $IItemHandlerModifiable, $IItemHandlerModifiable$$Type } from "net.minecraftforge.items.IItemHandlerModifiable"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export class $CombinedInvWrapper implements $IItemHandlerModifiable {
constructor(...iItemHandlerModifiable0s: $IItemHandlerModifiable$$Type[])

public "asContainer"(): $Container
public "clear"(ingredient: $Ingredient$$Type): void
public "clear"(): void
public "count"(): integer
public "count"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "extractItem"(int0: integer, int1: integer, boolean2: boolean): $ItemStack
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "find"(): integer
public "find"(ingredient: $Ingredient$$Type): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getHeight"(): integer
public "getSlotLimit"(int0: integer): integer
public "getSlotLimit"(i: integer): integer
public "getSlots"(): integer
public "getSlots"(): integer
public "getStackInSlot"(int0: integer): $ItemStack
public "getStackInSlot"(i: integer): $ItemStack
public "getWidth"(): integer
public "insertItem"(int0: integer, itemStack1: $ItemStack$$Type, boolean2: boolean): $ItemStack
public "insertItem"(i: integer, itemStack: $ItemStack$$Type, b: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "isItemValid"(i: integer, itemStack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $IItemHandler
public "setChanged"(): void
public "setStackInSlot"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "slots"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "net.minecraftforge.items.wrapper.RecipeWrapper" {
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $List } from "java.util.List"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $IItemHandlerModifiable$$Type } from "net.minecraftforge.items.IItemHandlerModifiable"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $RecipeWrapper implements $Container {
constructor(iItemHandlerModifiable0: $IItemHandlerModifiable$$Type)

public "asContainer"(): $Container
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "clearContent"(): void
public "count"(): integer
public "count"(ingredient: $Ingredient$$Type): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(): integer
public "find"(ingredient: $Ingredient$$Type): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getContainerSize"(): integer
public "getHeight"(): integer
public "getItem"(int0: integer): $ItemStack
public "getMaxStackSize"(): integer
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public "removeItem"(int0: integer, int1: integer): $ItemStack
public "removeItemNoUpdate"(int0: integer): $ItemStack
public "setChanged"(): void
public "setChanged"(): void
public "setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "startOpen"(player0: $Player$$Type): void
public "stillValid"(player0: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "tryClear"(object0: any): void
get "allItems"(): $List<$ItemStack>
get "containerSize"(): integer
get "height"(): integer
get "maxStackSize"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "empty"(): boolean
get "mutable"(): boolean
}
}

