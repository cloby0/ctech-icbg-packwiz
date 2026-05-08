declare module "net.minecraft.world.inventory.StackedContentsCompatible" {
import { $StackedContents$$Type } from "net.minecraft.world.entity.player.StackedContents"

export interface $StackedContentsCompatible {
"fillStackedContents"(stackedContents0: $StackedContents$$Type): void
}

export namespace $StackedContentsCompatible {
const probejs$$marker: never
}
export abstract class $StackedContentsCompatible$$Static implements $StackedContentsCompatible {
}
}

declare module "net.minecraft.world.inventory.PlayerEnderChestContainer" {
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $SimpleContainer } from "net.minecraft.world.SimpleContainer"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $List } from "java.util.List"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $EnderChestBlockEntity$$Type } from "net.minecraft.world.level.block.entity.EnderChestBlockEntity"

export class $PlayerEnderChestContainer extends $SimpleContainer {
constructor()

public "asContainer"(): $Container
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
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
public "getHeight"(): integer
public "getMaxStackSize"(): integer
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isActiveChest"(enderChestBlockEntity0: $EnderChestBlockEntity$$Type): boolean
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public "setActiveChest"(enderChestBlockEntity0: $EnderChestBlockEntity$$Type): void
public "setChanged"(): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "startOpen"(player0: $Player$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "tryClear"(object0: any): void
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "maxStackSize"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
set "activeChest"(value: $EnderChestBlockEntity$$Type)
}
}

declare module "net.minecraft.world.inventory.BrewingStandMenu" {
import { $Container$$Type } from "net.minecraft.world.Container"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $ContainerData$$Type } from "net.minecraft.world.inventory.ContainerData"

export class $BrewingStandMenu extends $AbstractContainerMenu {
constructor(int0: integer, inventory1: $Inventory$$Type, container2: $Container$$Type, containerData3: $ContainerData$$Type)
constructor(int0: integer, inventory1: $Inventory$$Type)

public "getBrewingTicks"(): integer
public "getFuel"(): integer
get "brewingTicks"(): integer
get "fuel"(): integer
}
}

declare module "net.minecraft.world.inventory.InventoryMenu" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $CraftingContainer } from "net.minecraft.world.inventory.CraftingContainer"
import { $RecipeBookMenu } from "net.minecraft.world.inventory.RecipeBookMenu"
import { $EquipmentSlot } from "net.minecraft.world.entity.EquipmentSlot"
import { $AccessorInventoryMenu } from "net.darkhax.bookshelf.mixin.accessors.inventory.AccessorInventoryMenu"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $AccessorInventoryMenu as $AccessorInventoryMenu$0 } from "com.illusivesoulworks.polymorph.mixin.core.AccessorInventoryMenu"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $InventoryMenu extends $RecipeBookMenu<$CraftingContainer> implements $AccessorInventoryMenu$0, $AccessorInventoryMenu {
static readonly "ARMOR_SLOT_END": integer
static readonly "ARMOR_SLOT_START": integer
static readonly "BLOCK_ATLAS": $ResourceLocation
static readonly "CONTAINER_ID": integer
static readonly "CRAFT_SLOT_END": integer
static readonly "CRAFT_SLOT_START": integer
static readonly "EMPTY_ARMOR_SLOT_BOOTS": $ResourceLocation
static readonly "EMPTY_ARMOR_SLOT_CHESTPLATE": $ResourceLocation
static readonly "EMPTY_ARMOR_SLOT_HELMET": $ResourceLocation
static readonly "EMPTY_ARMOR_SLOT_LEGGINGS": $ResourceLocation
static readonly "EMPTY_ARMOR_SLOT_SHIELD": $ResourceLocation
static readonly "INV_SLOT_END": integer
static readonly "INV_SLOT_START": integer
static readonly "RESULT_SLOT": integer
static readonly "SHIELD_SLOT": integer
static readonly "SLOT_IDS": $EquipmentSlot[]
static readonly "TEXTURE_EMPTY_SLOTS": $ResourceLocation[]
static readonly "USE_ROW_SLOT_END": integer
static readonly "USE_ROW_SLOT_START": integer
readonly "active": boolean
readonly "owner": $Player

constructor(inventory0: $Inventory$$Type, boolean1: boolean, player2: $Player$$Type)

public "getCraftSlots"(): $CraftingContainer
public static "isHotbarSlot"(int0: integer): boolean
get "craftSlots"(): $CraftingContainer
}
}

declare module "net.minecraft.world.inventory.RecipeHolder" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $List$$Type } from "java.util.List"
import { $Recipe, $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $RecipeHolder {
"awardUsedRecipes"(player0: $Player$$Type, list1: $List$$Type<$ItemStack$$Type>): void
"getRecipeUsed"(): $Recipe<any>
"setRecipeUsed"(level0: $Level$$Type, serverPlayer1: $ServerPlayer$$Type, recipe2: $Recipe$$Type<any>): boolean
"setRecipeUsed"(recipe0: $Recipe$$Type<any>): void
get "recipeUsed"(): $Recipe<any>
set "recipeUsed"(value: $Recipe$$Type<any>)
}

export namespace $RecipeHolder {
const probejs$$marker: never
}
export abstract class $RecipeHolder$$Static implements $RecipeHolder {
}
}

declare module "net.minecraft.world.inventory.ContainerListener" {
import { $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $ContainerListener {
"dataChanged"(abstractContainerMenu0: $AbstractContainerMenu$$Type, int1: integer, int2: integer): void
"slotChanged"(abstractContainerMenu0: $AbstractContainerMenu$$Type, int1: integer, itemStack2: $ItemStack$$Type): void
}

export namespace $ContainerListener {
const probejs$$marker: never
}
export abstract class $ContainerListener$$Static implements $ContainerListener {
}
}

declare module "net.minecraft.world.inventory.StonecutterMenu" {
import { $List } from "java.util.List"
import { $Container } from "net.minecraft.world.Container"
import { $ContainerLevelAccess$$Type } from "net.minecraft.world.inventory.ContainerLevelAccess"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $StonecutterRecipe } from "net.minecraft.world.item.crafting.StonecutterRecipe"

export class $StonecutterMenu extends $AbstractContainerMenu {
static readonly "INPUT_SLOT": integer
static readonly "RESULT_SLOT": integer
readonly "container": $Container

constructor(int0: integer, inventory1: $Inventory$$Type)
constructor(int0: integer, inventory1: $Inventory$$Type, containerLevelAccess2: $ContainerLevelAccess$$Type)

public "getNumRecipes"(): integer
public "getRecipes"(): $List<$StonecutterRecipe>
public "getSelectedRecipeIndex"(): integer
public "hasInputItem"(): boolean
public "registerUpdateListener"(runnable0: $Runnable$$Type): void
get "numRecipes"(): integer
get "recipes"(): $List<$StonecutterRecipe>
get "selectedRecipeIndex"(): integer
}
}

declare module "net.minecraft.world.inventory.ClickAction" {
import { $Enum } from "java.lang.Enum"

export class $ClickAction extends $Enum<$ClickAction> {
static readonly "PRIMARY": $ClickAction
static readonly "SECONDARY": $ClickAction

public static "valueOf"(string0: string): $ClickAction
public static "values"(): $ClickAction[]
}
}

declare module "net.minecraft.world.inventory.ClickType" {
import { $Enum } from "java.lang.Enum"

export class $ClickType extends $Enum<$ClickType> {
static readonly "CLONE": $ClickType
static readonly "PICKUP": $ClickType
static readonly "PICKUP_ALL": $ClickType
static readonly "QUICK_CRAFT": $ClickType
static readonly "QUICK_MOVE": $ClickType
static readonly "SWAP": $ClickType
static readonly "THROW": $ClickType

public static "valueOf"(string0: string): $ClickType
public static "values"(): $ClickType[]
}
}

declare module "net.minecraft.world.inventory.CraftingContainer" {
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $StackedContents$$Type } from "net.minecraft.world.entity.player.StackedContents"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $StackedContentsCompatible } from "net.minecraft.world.inventory.StackedContentsCompatible"
import { $Set$$Type } from "java.util.Set"
import { $CraftingContainerKJS } from "dev.latvian.mods.kubejs.core.CraftingContainerKJS"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $List } from "java.util.List"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $CraftingContainer extends $Container, $StackedContentsCompatible, $CraftingContainerKJS {
"asContainer"(): $Container
"canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
"canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
"clear"(): void
"clear"(ingredient: $Ingredient$$Type): void
"clearContent"(): void
"count"(): integer
"count"(ingredient: $Ingredient$$Type): integer
"countItem"(item0: $Item$$Type): integer
"countNonEmpty"(ingredient: $Ingredient$$Type): integer
"countNonEmpty"(): integer
"extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
"fillStackedContents"(stackedContents0: $StackedContents$$Type): void
"find"(): integer
"find"(ingredient: $Ingredient$$Type): integer
"getAllItems"(): $List<$ItemStack>
"getBlock"(level: $Level$$Type): $BlockContainerJS
"getContainerSize"(): integer
"getHeight"(): integer
"getHeight"(): integer
"getItem"(int0: integer): $ItemStack
"getItems"(): $List<$ItemStack>
"getMaxStackSize"(): integer
"getMenu"(): $AbstractContainerMenu
"getSlotLimit"(slot: integer): integer
"getSlots"(): integer
"getStackInSlot"(slot: integer): $ItemStack
"getWidth"(): integer
"getWidth"(): integer
"hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
"hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
"insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
"insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
"isEmpty"(): boolean
"isEmpty"(): boolean
"isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
"isMutable"(): boolean
"kjs$self"(): $Container
"removeItem"(int0: integer, int1: integer): $ItemStack
"removeItemNoUpdate"(int0: integer): $ItemStack
"setChanged"(): void
"setChanged"(): void
"setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
"setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
"startOpen"(player0: $Player$$Type): void
"stillValid"(player0: $Player$$Type): boolean
"stopOpen"(player0: $Player$$Type): void
get "allItems"(): $List<$ItemStack>
get "containerSize"(): integer
get "height"(): integer
get "height"(): integer
get "items"(): $List<$ItemStack>
get "maxStackSize"(): integer
get "menu"(): $AbstractContainerMenu
get "slots"(): integer
get "width"(): integer
get "width"(): integer
get "empty"(): boolean
get "empty"(): boolean
get "mutable"(): boolean
}

export namespace $CraftingContainer {
function stillValidBlockEntity(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
function stillValidBlockEntity(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
function stillValidBlockEntity(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
function tryClear(object0: any): void
}
export abstract class $CraftingContainer$$Static implements $CraftingContainer {
static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
static "tryClear"(object0: any): void
}
}

declare module "net.minecraft.world.inventory.MenuType$MenuSupplier" {
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"

export interface $MenuType$MenuSupplier<T extends $AbstractContainerMenu = $AbstractContainerMenu> {
"create"(int0: integer, inventory1: $Inventory$$Type): T
}

export namespace $MenuType$MenuSupplier {
const probejs$$marker: never
}
export abstract class $MenuType$MenuSupplier$$Static<T extends $AbstractContainerMenu = $AbstractContainerMenu> implements $MenuType$MenuSupplier<T> {
}
}

declare module "net.minecraft.world.inventory.SmokerMenu" {
import { $Container$$Type } from "net.minecraft.world.Container"
import { $AbstractFurnaceMenu } from "net.minecraft.world.inventory.AbstractFurnaceMenu"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $ContainerData$$Type } from "net.minecraft.world.inventory.ContainerData"

export class $SmokerMenu extends $AbstractFurnaceMenu {
constructor(int0: integer, inventory1: $Inventory$$Type)
constructor(int0: integer, inventory1: $Inventory$$Type, container2: $Container$$Type, containerData3: $ContainerData$$Type)

}
}

declare module "net.minecraft.world.inventory.BlastFurnaceMenu" {
import { $Container$$Type } from "net.minecraft.world.Container"
import { $AbstractFurnaceMenu } from "net.minecraft.world.inventory.AbstractFurnaceMenu"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $ContainerData$$Type } from "net.minecraft.world.inventory.ContainerData"

export class $BlastFurnaceMenu extends $AbstractFurnaceMenu {
constructor(int0: integer, inventory1: $Inventory$$Type)
constructor(int0: integer, inventory1: $Inventory$$Type, container2: $Container$$Type, containerData3: $ContainerData$$Type)

}
}

declare module "net.minecraft.world.inventory.LoomMenu" {
import { $Slot } from "net.minecraft.world.inventory.Slot"
import { $List } from "java.util.List"
import { $Holder } from "net.minecraft.core.Holder"
import { $Operation$$Type } from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import { $ContainerLevelAccess$$Type } from "net.minecraft.world.inventory.ContainerLevelAccess"
import { $Item } from "net.minecraft.world.item.Item"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $BannerPattern } from "net.minecraft.world.level.block.entity.BannerPattern"
import { $Runnable$$Type } from "java.lang.Runnable"

export class $LoomMenu extends $AbstractContainerMenu {
constructor(int0: integer, inventory1: $Inventory$$Type, containerLevelAccess2: $ContainerLevelAccess$$Type)
constructor(int0: integer, inventory1: $Inventory$$Type)

public "getBannerSlot"(): $Slot
public "getDyeSlot"(): $Slot
public "getPatternSlot"(): $Slot
public "getResultSlot"(): $Slot
public "getSelectablePatterns"(): $List<$Holder<$BannerPattern>>
public "getSelectedBannerPatternIndex"(): integer
public "modifyExpressionValue$gof000$getLimit"(int0: integer): integer
public "registerUpdateListener"(runnable0: $Runnable$$Type): void
public "wrapOperation$hdl000$getItem"(instance: $ItemStack$$Type, original: $Operation$$Type): $Item
get "bannerSlot"(): $Slot
get "dyeSlot"(): $Slot
get "patternSlot"(): $Slot
get "resultSlot"(): $Slot
get "selectablePatterns"(): $List<$Holder<$BannerPattern>>
get "selectedBannerPatternIndex"(): integer
}
}

declare module "net.minecraft.world.inventory.DispenserMenu" {
import { $Container$$Type } from "net.minecraft.world.Container"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"

export class $DispenserMenu extends $AbstractContainerMenu {
constructor(int0: integer, inventory1: $Inventory$$Type, container2: $Container$$Type)
constructor(int0: integer, inventory1: $Inventory$$Type)

}
}

declare module "net.minecraft.world.inventory.AnvilMenu" {
import { $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $Operation$$Type } from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import { $ContainerLevelAccess$$Type } from "net.minecraft.world.inventory.ContainerLevelAccess"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ItemCombinerMenu } from "net.minecraft.world.inventory.ItemCombinerMenu"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"

export class $AnvilMenu extends $ItemCombinerMenu {
static readonly "ADDITIONAL_SLOT": integer
static readonly "INPUT_SLOT": integer
static readonly "MAX_NAME_LENGTH": integer
static readonly "RESULT_SLOT": integer

constructor(int0: integer, inventory1: $Inventory$$Type)
constructor(int0: integer, inventory1: $Inventory$$Type, containerLevelAccess2: $ContainerLevelAccess$$Type)

public static "calculateIncreasedRepairCost"(int0: integer): integer
public "getCost"(): integer
public "handler$ggj000$clearAnnihilationPlaneThreadLocal"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$ggj000$setAnnihilationPlaneThreadLocal"(callbackInfo0: $CallbackInfo$$Type): void
public "modifyExpressionValue$glp000$isValidRepairItem"(boolean0: boolean, itemStack1: $ItemStack$$Type, itemStack2: $ItemStack$$Type): boolean
public "setItemName"(string0: string): boolean
public "setMaximumCost"(int0: integer): void
public "wrapOperation$glp000$canEnchant"(enchantment0: $Enchantment$$Type, itemStack1: $ItemStack$$Type, operation2: $Operation$$Type): boolean
get "repairItemCountCost"(): integer
set "repairItemCountCost"(value: integer)
get "cost"(): integer
set "itemName"(value: string)
set "maximumCost"(value: integer)
}
}

declare module "net.minecraft.world.inventory.ContainerData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ContainerData {
"get"(int0: integer): integer
"getCount"(): integer
"set"(int0: integer, int1: integer): void
get "count"(): integer
}

export namespace $ContainerData {
const probejs$$marker: never
}
export abstract class $ContainerData$$Static implements $ContainerData {
}
}

declare module "net.minecraft.world.inventory.MenuConstructor" {
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $MenuConstructor {
"createMenu"(int0: integer, inventory1: $Inventory$$Type, player2: $Player$$Type): $AbstractContainerMenu
}

export namespace $MenuConstructor {
const probejs$$marker: never
}
export abstract class $MenuConstructor$$Static implements $MenuConstructor {
}
}

declare module "net.minecraft.world.inventory.ItemCombinerMenu" {
import { $ContainerLevelAccess$$Type } from "net.minecraft.world.inventory.ContainerLevelAccess"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $MenuType$$Type } from "net.minecraft.world.inventory.MenuType"

export class $ItemCombinerMenu extends $AbstractContainerMenu {
constructor(menuType0: $MenuType$$Type<any>, int1: integer, inventory2: $Inventory$$Type, containerLevelAccess3: $ContainerLevelAccess$$Type)

public "createResult"(): void
public "getResultSlot"(): integer
public "getSlotToQuickMoveTo"(itemStack0: $ItemStack$$Type): integer
get "resultSlot"(): integer
}
}

declare module "net.minecraft.world.inventory.CartographyTableMenu" {
import { $MapItemSavedData$$Type } from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $Slot$$Type } from "net.minecraft.world.inventory.Slot"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $Container } from "net.minecraft.world.Container"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ContainerLevelAccess$$Type } from "net.minecraft.world.inventory.ContainerLevelAccess"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $CartographyTableMenu extends $AbstractContainerMenu {
static readonly "ADDITIONAL_SLOT": integer
static readonly "MAP_SLOT": integer
static readonly "RESULT_SLOT": integer
readonly "container": $Container

constructor(int0: integer, inventory1: $Inventory$$Type, containerLevelAccess2: $ContainerLevelAccess$$Type)
constructor(int0: integer, inventory1: $Inventory$$Type)

public "handler$hch000$getItem"(player: $Player$$Type, index: integer, cir: $CallbackInfoReturnable$$Type, itemStack: $ItemStack$$Type, slot: $Slot$$Type, itemStack2: $ItemStack$$Type): void
public "handler$hch000$getItem"(mapStack: $ItemStack$$Type, firstSlotStack: $ItemStack$$Type, resultSlotStack: $ItemStack$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, ci: $CallbackInfo$$Type, mapItemSavedData: $MapItemSavedData$$Type): void
}
}

declare module "net.minecraft.world.inventory.HopperMenu" {
import { $Container$$Type } from "net.minecraft.world.Container"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"

export class $HopperMenu extends $AbstractContainerMenu {
static readonly "CONTAINER_SIZE": integer

constructor(int0: integer, inventory1: $Inventory$$Type, container2: $Container$$Type)
constructor(int0: integer, inventory1: $Inventory$$Type)

}
}

declare module "net.minecraft.world.inventory.BeaconMenu" {
import { $Container$$Type } from "net.minecraft.world.Container"
import { $ContainerLevelAccess$$Type } from "net.minecraft.world.inventory.ContainerLevelAccess"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Optional$$Type } from "java.util.Optional"
import { $ContainerData$$Type } from "net.minecraft.world.inventory.ContainerData"
import { $MobEffect, $MobEffect$$Type } from "net.minecraft.world.effect.MobEffect"

export class $BeaconMenu extends $AbstractContainerMenu {
constructor(int0: integer, container1: $Container$$Type, containerData2: $ContainerData$$Type, containerLevelAccess3: $ContainerLevelAccess$$Type)
constructor(int0: integer, container1: $Container$$Type)

public "getLevels"(): integer
public "getPrimaryEffect"(): $MobEffect
public "getSecondaryEffect"(): $MobEffect
public "hasPayment"(): boolean
public "updateEffects"(optional0: $Optional$$Type<$MobEffect$$Type>, optional1: $Optional$$Type<$MobEffect$$Type>): void
get "levels"(): integer
get "primaryEffect"(): $MobEffect
get "secondaryEffect"(): $MobEffect
}
}

declare module "net.minecraft.world.inventory.CraftingMenu" {
import { $CraftingContainer } from "net.minecraft.world.inventory.CraftingContainer"
import { $RecipeBookMenu } from "net.minecraft.world.inventory.RecipeBookMenu"
import { $ContainerLevelAccess$$Type } from "net.minecraft.world.inventory.ContainerLevelAccess"
import { $AccessorCraftingMenu } from "com.illusivesoulworks.polymorph.mixin.core.AccessorCraftingMenu"
import { $CraftingMenuAccess } from "snownee.lychee.mixin.CraftingMenuAccess"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $Player } from "net.minecraft.world.entity.player.Player"
import { $AccessorCraftingMenu as $AccessorCraftingMenu$0 } from "net.darkhax.bookshelf.mixin.accessors.inventory.AccessorCraftingMenu"

export class $CraftingMenu extends $RecipeBookMenu<$CraftingContainer> implements $AccessorCraftingMenu, $AccessorCraftingMenu$0, $CraftingMenuAccess {
static readonly "RESULT_SLOT": integer
readonly "player": $Player

constructor(int0: integer, inventory1: $Inventory$$Type, containerLevelAccess2: $ContainerLevelAccess$$Type)
constructor(int0: integer, inventory1: $Inventory$$Type)

}
}

declare module "net.minecraft.world.inventory.DataSlot" {
import { $ContainerData$$Type } from "net.minecraft.world.inventory.ContainerData"

export class $DataSlot {
constructor()

public "checkAndClearUpdateFlag"(): boolean
public static "forContainer"(containerData0: $ContainerData$$Type, int1: integer): $DataSlot
public "get"(): integer
public "set"(int0: integer): void
public static "shared"(int0s: integer[], int1: integer): $DataSlot
public static "standalone"(): $DataSlot
}
}

declare module "net.minecraft.world.inventory.SmithingMenu" {
import { $ContainerLevelAccess$$Type } from "net.minecraft.world.inventory.ContainerLevelAccess"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ItemCombinerMenu } from "net.minecraft.world.inventory.ItemCombinerMenu"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"

export class $SmithingMenu extends $ItemCombinerMenu {
static readonly "ADDITIONAL_SLOT": integer
static readonly "ADDITIONAL_SLOT_X_PLACEMENT": integer
static readonly "BASE_SLOT": integer
static readonly "BASE_SLOT_X_PLACEMENT": integer
static readonly "RESULT_SLOT": integer
static readonly "SLOT_Y_PLACEMENT": integer
static readonly "TEMPLATE_SLOT": integer
static readonly "TEMPLATE_SLOT_X_PLACEMENT": integer

constructor(int0: integer, inventory1: $Inventory$$Type)
constructor(int0: integer, inventory1: $Inventory$$Type, containerLevelAccess2: $ContainerLevelAccess$$Type)

public "canMoveIntoInputSlots"(itemStack0: $ItemStack$$Type): boolean
}
}

declare module "net.minecraft.world.inventory.MerchantMenu" {
import { $MerchantOffers, $MerchantOffers$$Type } from "net.minecraft.world.item.trading.MerchantOffers"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Merchant$$Type } from "net.minecraft.world.item.trading.Merchant"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"

export class $MerchantMenu extends $AbstractContainerMenu {
constructor(int0: integer, inventory1: $Inventory$$Type)
constructor(int0: integer, inventory1: $Inventory$$Type, merchant2: $Merchant$$Type)

public "canRestock"(): boolean
public "getFutureTraderXp"(): integer
public "getOffers"(): $MerchantOffers
public "getTraderLevel"(): integer
public "getTraderXp"(): integer
public "moveFromInventoryToPaymentSlot"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setCanRestock"(boolean0: boolean): void
public "setMerchantLevel"(int0: integer): void
public "setOffers"(merchantOffers0: $MerchantOffers$$Type): void
public "setSelectionHint"(int0: integer): void
public "setShowProgressBar"(boolean0: boolean): void
public "setXp"(int0: integer): void
public "showProgressBar"(): boolean
public "tryMoveItems"(int0: integer): void
get "futureTraderXp"(): integer
get "offers"(): $MerchantOffers
get "traderLevel"(): integer
get "traderXp"(): integer
set "merchantLevel"(value: integer)
set "offers"(value: $MerchantOffers$$Type)
set "selectionHint"(value: integer)
set "xp"(value: integer)
}
}

declare module "net.minecraft.world.inventory.ShulkerBoxMenu" {
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"

export class $ShulkerBoxMenu extends $AbstractContainerMenu {
readonly "container": $Container

constructor(int0: integer, inventory1: $Inventory$$Type, container2: $Container$$Type)
constructor(int0: integer, inventory1: $Inventory$$Type)

}
}

declare module "net.minecraft.world.inventory.ContainerLevelAccess" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Optional } from "java.util.Optional"
import { $ContainerLevelAccessMixin } from "com.railwayteam.railways.forge.mixin.ContainerLevelAccessMixin"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $ContainerLevelAccess extends $ContainerLevelAccessMixin {
"evaluate"<T>(biFunction0: $BiFunction$$Type<$Level$$Type, $BlockPos$$Type, T>, t1: T): T
"evaluate"<T>(biFunction0: $BiFunction$$Type<$Level$$Type, $BlockPos$$Type, T>): $Optional<T>
"execute"(biConsumer0: $BiConsumer$$Type<$Level$$Type, $BlockPos$$Type>): void
}

export namespace $ContainerLevelAccess {
const NULL: $ContainerLevelAccess
function create(level0: $Level$$Type, blockPos1: $BlockPos$$Type): $ContainerLevelAccess
}
export abstract class $ContainerLevelAccess$$Static implements $ContainerLevelAccess {
static readonly "NULL": $ContainerLevelAccess

static "create"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): $ContainerLevelAccess
}
}

declare module "net.minecraft.world.inventory.RecipeBookMenu" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $List } from "java.util.List"
import { $Container } from "net.minecraft.world.Container"
import { $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $StackedContents$$Type } from "net.minecraft.world.entity.player.StackedContents"
import { $RecipeBookType } from "net.minecraft.world.inventory.RecipeBookType"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $RecipeBookCategories } from "net.minecraft.client.RecipeBookCategories"
import { $MenuType$$Type } from "net.minecraft.world.inventory.MenuType"

export class $RecipeBookMenu<C extends $Container = $Container> extends $AbstractContainerMenu {
constructor(menuType0: $MenuType$$Type<any>, int1: integer)

public "clearCraftingContent"(): void
public "fillCraftSlotsStackedContents"(stackedContents0: $StackedContents$$Type): void
public "getGridHeight"(): integer
public "getGridWidth"(): integer
public "getRecipeBookCategories"(): $List<$RecipeBookCategories>
public "getRecipeBookType"(): $RecipeBookType
public "getResultSlotIndex"(): integer
public "getSize"(): integer
public "handlePlacement"(boolean0: boolean, recipe1: $Recipe$$Type<any>, serverPlayer2: $ServerPlayer$$Type): void
public "recipeMatches"(recipe0: $Recipe$$Type<C>): boolean
public "shouldMoveToInventory"(int0: integer): boolean
get "gridHeight"(): integer
get "gridWidth"(): integer
get "recipeBookCategories"(): $List<$RecipeBookCategories>
get "recipeBookType"(): $RecipeBookType
get "resultSlotIndex"(): integer
get "size"(): integer
}
}

declare module "net.minecraft.world.inventory.AbstractFurnaceMenu" {
import { $Container } from "net.minecraft.world.Container"
import { $RecipeBookMenu } from "net.minecraft.world.inventory.RecipeBookMenu"

export class $AbstractFurnaceMenu extends $RecipeBookMenu<$Container> {
static readonly "DATA_COUNT": integer
static readonly "FUEL_SLOT": integer
static readonly "INGREDIENT_SLOT": integer
static readonly "RESULT_SLOT": integer
static readonly "SLOT_COUNT": integer

public "getBurnProgress"(): integer
public "getLitProgress"(): integer
public "isLit"(): boolean
get "burnProgress"(): integer
get "litProgress"(): integer
get "lit"(): boolean
}
}

declare module "net.minecraft.world.inventory.tooltip.TooltipComponent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TooltipComponent {
}

export namespace $TooltipComponent {
const probejs$$marker: never
}
export abstract class $TooltipComponent$$Static implements $TooltipComponent {
}
}

declare module "net.minecraft.world.inventory.ResultContainer" {
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $RecipeHolder } from "net.minecraft.world.inventory.RecipeHolder"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $List, $List$$Type } from "java.util.List"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $Recipe, $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $ResultContainer implements $Container, $RecipeHolder {
constructor()

public "asContainer"(): $Container
public "awardUsedRecipes"(player0: $Player$$Type, list1: $List$$Type<$ItemStack$$Type>): void
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
public "getRecipeUsed"(): $Recipe<any>
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
public "setRecipeUsed"(recipe0: $Recipe$$Type<any>): void
public "setRecipeUsed"(level0: $Level$$Type, serverPlayer1: $ServerPlayer$$Type, recipe2: $Recipe$$Type<any>): boolean
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
get "recipeUsed"(): $Recipe<any>
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "empty"(): boolean
get "mutable"(): boolean
set "recipeUsed"(value: $Recipe$$Type<any>)
}
}

declare module "net.minecraft.world.inventory.RecipeBookType" {
import { $IExtensibleEnum } from "net.minecraftforge.common.IExtensibleEnum"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $RecipeBookType extends $Enum<$RecipeBookType> implements $IExtensibleEnum {
static readonly "BLAST_FURNACE": $RecipeBookType
static readonly "CRAFTING": $RecipeBookType
static readonly "FURNACE": $RecipeBookType
static readonly "SMOKER": $RecipeBookType

public static "create"(string0: string): $RecipeBookType
public static "createCodecForExtensibleEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, E>): $Codec<E>
public "init"(): void
public static "valueOf"(string0: string): $RecipeBookType
public static "values"(): $RecipeBookType[]
}
}

declare module "net.minecraft.world.inventory.Slot" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $IMovableSlot } from "net.oktawia.crazyae2addonslite.interfaces.IMovableSlot"
import { $SlotAccessor } from "com.lowdragmc.lowdraglib.core.mixins.accessor.SlotAccessor"
import { $SlotAccessor as $SlotAccessor$0 } from "earth.terrarium.adastra.mixins.common.SlotAccessor"
import { $SlotAccessor as $SlotAccessor$1 } from "net.blay09.mods.balm.mixin.SlotAccessor"
import { $Pair } from "com.mojang.datafixers.util.Pair"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $SlotMixin } from "com.almostreliable.merequester.mixin.accessors.SlotMixin"
import { $MutableSlot } from "com.glodblock.github.extendedae.util.MutableSlot"
import { $Optional } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $Slot implements $SlotAccessor, $SlotAccessor$1, $SlotAccessor$0, $SlotMixin, $MutableSlot, $IMovableSlot {
readonly "container": $Container
readonly "slot": integer

constructor(container0: $Container$$Type, int1: integer, int2: integer, int3: integer)

public "allowModification"(player0: $Player$$Type): boolean
public "getContainerSlot"(): integer
public "getItem"(): $ItemStack
public "getMaxStackSize"(): integer
public "getMaxStackSize"(itemStack0: $ItemStack$$Type): integer
public "getNoItemIcon"(): $Pair<$ResourceLocation, $ResourceLocation>
public "getSlotIndex"(): integer
public "hasItem"(): boolean
public "isActive"(): boolean
public "isHighlightable"(): boolean
public "isSameInventory"(slot0: $Slot$$Type): boolean
public "mayPickup"(player0: $Player$$Type): boolean
public "mayPlace"(itemStack0: $ItemStack$$Type): boolean
public "onQuickCraft"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): void
public "onTake"(player0: $Player$$Type, itemStack1: $ItemStack$$Type): void
public "remove"(int0: integer): $ItemStack
public "safeInsert"(itemStack0: $ItemStack$$Type, int1: integer): $ItemStack
public "safeInsert"(itemStack0: $ItemStack$$Type): $ItemStack
public "safeTake"(int0: integer, int1: integer, player2: $Player$$Type): $ItemStack
public "set"(itemStack0: $ItemStack$$Type): void
public "setBackground"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type): $Slot
public "setByPlayer"(itemStack0: $ItemStack$$Type): void
public "setChanged"(): void
public "setX"(int0: integer): void
public "setXPos"(int0: integer): void
public "setY"(int0: integer): void
public "setYPos"(int0: integer): void
public "tryRemove"(int0: integer, int1: integer, player2: $Player$$Type): $Optional<$ItemStack>
get "index"(): integer
set "index"(value: integer)
get "x"(): integer
set "x"(value: integer)
get "y"(): integer
set "y"(value: integer)
get "containerSlot"(): integer
get "item"(): $ItemStack
get "maxStackSize"(): integer
get "noItemIcon"(): $Pair<$ResourceLocation, $ResourceLocation>
get "slotIndex"(): integer
get "active"(): boolean
get "highlightable"(): boolean
set "byPlayer"(value: $ItemStack$$Type)
set "xPos"(value: integer)
set "yPos"(value: integer)
}
}

declare module "net.minecraft.world.inventory.GrindstoneMenu" {
import { $ContainerLevelAccess$$Type } from "net.minecraft.world.inventory.ContainerLevelAccess"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"

export class $GrindstoneMenu extends $AbstractContainerMenu {
static readonly "ADDITIONAL_SLOT": integer
static readonly "INPUT_SLOT": integer
static readonly "MAX_NAME_LENGTH": integer
static readonly "RESULT_SLOT": integer

constructor(int0: integer, inventory1: $Inventory$$Type)
constructor(int0: integer, inventory1: $Inventory$$Type, containerLevelAccess2: $ContainerLevelAccess$$Type)

}
}

declare module "net.minecraft.world.inventory.ContainerSynchronizer" {
import { $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $NonNullList$$Type } from "net.minecraft.core.NonNullList"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $ContainerSynchronizer {
"sendCarriedChange"(abstractContainerMenu0: $AbstractContainerMenu$$Type, itemStack1: $ItemStack$$Type): void
"sendDataChange"(abstractContainerMenu0: $AbstractContainerMenu$$Type, int1: integer, int2: integer): void
"sendInitialData"(abstractContainerMenu0: $AbstractContainerMenu$$Type, nonNullList1: $NonNullList$$Type<$ItemStack$$Type>, itemStack2: $ItemStack$$Type, int3s: integer[]): void
"sendSlotChange"(abstractContainerMenu0: $AbstractContainerMenu$$Type, int1: integer, itemStack2: $ItemStack$$Type): void
}

export namespace $ContainerSynchronizer {
const probejs$$marker: never
}
export abstract class $ContainerSynchronizer$$Static implements $ContainerSynchronizer {
}
}

declare module "net.minecraft.world.inventory.AbstractContainerMenu" {
import { $AbstractContainerMenuAccessor } from "fuzs.puzzleslib.mixin.accessor.AbstractContainerMenuAccessor"
import { $ClickType$$Type } from "net.minecraft.world.inventory.ClickType"
import { $ContainerSynchronizer$$Type } from "net.minecraft.world.inventory.ContainerSynchronizer"
import { $AbstractContainerMenuInvoker } from "dev.shadowsoffire.placebo.mixin.AbstractContainerMenuInvoker"
import { $Set, $Set$$Type } from "java.util.Set"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $AbstractContainerMenuAccessor as $AbstractContainerMenuAccessor$0 } from "com.lowdragmc.lowdraglib.core.mixins.accessor.AbstractContainerMenuAccessor"
import { $OptionalInt } from "java.util.OptionalInt"
import { $MenuType, $MenuType$$Type } from "net.minecraft.world.inventory.MenuType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $AbstractContainerMenuAccessor as $AbstractContainerMenuAccessor$1 } from "com.aetherteam.aether.mixin.mixins.common.accessor.AbstractContainerMenuAccessor"
import { $Slot, $Slot$$Type } from "net.minecraft.world.inventory.Slot"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $List, $List$$Type } from "java.util.List"
import { $Container$$Type } from "net.minecraft.world.Container"
import { $ContainerListener, $ContainerListener$$Type } from "net.minecraft.world.inventory.ContainerListener"
import { $NonNullList, $NonNullList$$Type } from "net.minecraft.core.NonNullList"
import { $DataSlot, $DataSlot$$Type } from "net.minecraft.world.inventory.DataSlot"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ClickAction$$Type } from "net.minecraft.world.inventory.ClickAction"

export class $AbstractContainerMenu implements $AbstractContainerMenuAccessor$0, $AbstractContainerMenuAccessor, $AbstractContainerMenuAccessor$1, $AbstractContainerMenuInvoker {
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_HEADER_END": integer
static readonly "QUICKCRAFT_HEADER_START": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "containerListeners": $List<$ContainerListener>
readonly "quickcraftSlots": $Set<$Slot>
readonly "slots": $NonNullList<$Slot>

public "addDataSlot"(dataSlot0: $DataSlot$$Type): $DataSlot
public "addSlot"(slot0: $Slot$$Type): $Slot
public "addSlotListener"(containerListener0: $ContainerListener$$Type): void
public "broadcastChanges"(): void
public "broadcastFullState"(): void
public "canDragTo"(slot0: $Slot$$Type): boolean
public static "canItemQuickReplace"(slot0: $Slot$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean): boolean
public "canTakeItemForPickAll"(itemStack0: $ItemStack$$Type, slot1: $Slot$$Type): boolean
public "clickMenuButton"(player0: $Player$$Type, int1: integer): boolean
public "clicked"(int0: integer, int1: integer, clickType2: $ClickType$$Type, player3: $Player$$Type): void
public "doClick"(int0: integer, int1: integer, clickType2: $ClickType$$Type, player3: $Player$$Type): void
public "findSlot"(container0: $Container$$Type, int1: integer): $OptionalInt
public "getCarried"(): $ItemStack
public "getItems"(): $NonNullList<$ItemStack>
public static "getQuickCraftPlaceCount"(set0: $Set$$Type<$Slot$$Type>, int1: integer, itemStack2: $ItemStack$$Type): integer
public static "getQuickcraftHeader"(int0: integer): integer
public static "getQuickcraftMask"(int0: integer, int1: integer): integer
public static "getQuickcraftType"(int0: integer): integer
public static "getRedstoneSignalFromBlockEntity"(blockEntity0: $BlockEntity$$Type): integer
public static "getRedstoneSignalFromContainer"(container0: $Container$$Type): integer
public "getSlot"(int0: integer): $Slot
public "getStateId"(): integer
public "getType"(): $MenuType<any>
public "handler$gkh000$CLONE"(int0: integer, int1: integer, clickType2: $ClickType$$Type, player3: $Player$$Type, callbackInfo4: $CallbackInfo$$Type): void
public "incrementStateId"(): integer
public "initializeContents"(int0: integer, list1: $List$$Type<$ItemStack$$Type>, itemStack2: $ItemStack$$Type): void
public static "isValidQuickcraftType"(int0: integer, player1: $Player$$Type): boolean
public "isValidSlotIndex"(int0: integer): boolean
public "quickMoveStack"(player0: $Player$$Type, int1: integer): $ItemStack
public "removeSlotListener"(containerListener0: $ContainerListener$$Type): void
public "removed"(player0: $Player$$Type): void
public "resumeRemoteUpdates"(): void
public "sendAllDataToRemote"(): void
public "setCarried"(itemStack0: $ItemStack$$Type): void
public "setData"(int0: integer, int1: integer): void
public "setItem"(int0: integer, int1: integer, itemStack2: $ItemStack$$Type): void
public "setRemoteCarried"(itemStack0: $ItemStack$$Type): void
public "setRemoteSlot"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setRemoteSlotNoCopy"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setSynchronizer"(containerSynchronizer0: $ContainerSynchronizer$$Type): void
public "slotsChanged"(container0: $Container$$Type): void
public "stillValid"(player0: $Player$$Type): boolean
public "suppressRemoteUpdates"(): void
public "transferState"(abstractContainerMenu0: $AbstractContainerMenu$$Type): void
public "tryItemClickBehaviourOverride"(player0: $Player$$Type, clickAction1: $ClickAction$$Type, slot2: $Slot$$Type, itemStack3: $ItemStack$$Type, itemStack4: $ItemStack$$Type): boolean
public "updateDataSlotListeners"(int0: integer, int1: integer): void
get "containerId"(): integer
set "containerId"(value: integer)
get "lastSlots"(): $NonNullList<$ItemStack>
set "lastSlots"(value: $NonNullList$$Type<$ItemStack$$Type>)
get "menuType"(): $MenuType<any>
set "menuType"(value: $MenuType$$Type<any>)
get "quickcraftStatus"(): integer
set "quickcraftStatus"(value: integer)
get "quickcraftType"(): integer
set "quickcraftType"(value: integer)
get "remoteSlots"(): $NonNullList<$ItemStack>
set "remoteSlots"(value: $NonNullList$$Type<$ItemStack$$Type>)
get "stateId"(): integer
set "stateId"(value: integer)
get "carried"(): $ItemStack
get "items"(): $NonNullList<$ItemStack>
get "type"(): $MenuType<any>
set "carried"(value: $ItemStack$$Type)
set "remoteCarried"(value: $ItemStack$$Type)
set "synchronizer"(value: $ContainerSynchronizer$$Type)
}
}

declare module "net.minecraft.world.inventory.EnchantmentMenu" {
import { $EnchantmentInstance } from "net.minecraft.world.item.enchantment.EnchantmentInstance"
import { $List } from "java.util.List"
import { $Container } from "net.minecraft.world.Container"
import { $ContainerLevelAccess, $ContainerLevelAccess$$Type } from "net.minecraft.world.inventory.ContainerLevelAccess"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $DataSlot } from "net.minecraft.world.inventory.DataSlot"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $EnchantmentMenu extends $AbstractContainerMenu {
readonly "access": $ContainerLevelAccess
readonly "costs": integer[]
readonly "enchantClue": integer[]
readonly "enchantSlots": $Container
readonly "enchantmentSeed": $DataSlot
readonly "levelClue": integer[]

constructor(int0: integer, inventory1: $Inventory$$Type, containerLevelAccess2: $ContainerLevelAccess$$Type)
constructor(int0: integer, inventory1: $Inventory$$Type)

public "getEnchantmentList"(itemStack0: $ItemStack$$Type, int1: integer, int2: integer): $List<$EnchantmentInstance>
public "getEnchantmentSeed"(): integer
public "getGoldCount"(): integer
/** Client only, do not use in server scripts */
public "handler$igb000$onGetLapisAmount"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
get "goldCount"(): integer
}
}

declare module "net.minecraft.world.inventory.FurnaceMenu" {
import { $Container$$Type } from "net.minecraft.world.Container"
import { $AbstractFurnaceMenu } from "net.minecraft.world.inventory.AbstractFurnaceMenu"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $ContainerData$$Type } from "net.minecraft.world.inventory.ContainerData"

export class $FurnaceMenu extends $AbstractFurnaceMenu {
constructor(int0: integer, inventory1: $Inventory$$Type)
constructor(int0: integer, inventory1: $Inventory$$Type, container2: $Container$$Type, containerData3: $ContainerData$$Type)

}
}

declare module "net.minecraft.world.inventory.ChestMenu" {
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $MenuType$$Type } from "net.minecraft.world.inventory.MenuType"

export class $ChestMenu extends $AbstractContainerMenu {
constructor(menuType0: $MenuType$$Type<any>, int1: integer, inventory2: $Inventory$$Type, container3: $Container$$Type, int4: integer)

public static "fiveRows"(int0: integer, inventory1: $Inventory$$Type): $ChestMenu
public static "fourRows"(int0: integer, inventory1: $Inventory$$Type): $ChestMenu
public "getContainer"(): $Container
public "getRowCount"(): integer
public static "oneRow"(int0: integer, inventory1: $Inventory$$Type): $ChestMenu
public static "sixRows"(int0: integer, inventory1: $Inventory$$Type): $ChestMenu
public static "sixRows"(int0: integer, inventory1: $Inventory$$Type, container2: $Container$$Type): $ChestMenu
public static "threeRows"(int0: integer, inventory1: $Inventory$$Type): $ChestMenu
public static "threeRows"(int0: integer, inventory1: $Inventory$$Type, container2: $Container$$Type): $ChestMenu
public static "twoRows"(int0: integer, inventory1: $Inventory$$Type): $ChestMenu
get "container"(): $Container
get "rowCount"(): integer
}
}

declare module "net.minecraft.world.inventory.LecternMenu" {
import { $Container$$Type } from "net.minecraft.world.Container"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $ContainerData$$Type } from "net.minecraft.world.inventory.ContainerData"

export class $LecternMenu extends $AbstractContainerMenu {
static readonly "BUTTON_NEXT_PAGE": integer
static readonly "BUTTON_PAGE_JUMP_RANGE_START": integer
static readonly "BUTTON_PREV_PAGE": integer
static readonly "BUTTON_TAKE_BOOK": integer

constructor(int0: integer, container1: $Container$$Type, containerData2: $ContainerData$$Type)
constructor(int0: integer)

public "getBook"(): $ItemStack
public "getPage"(): integer
get "book"(): $ItemStack
get "page"(): integer
}
}

