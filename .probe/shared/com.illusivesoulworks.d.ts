declare module "com.illusivesoulworks.polymorph.mixin.core.AccessorSmithingTransformRecipe" {
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"

export interface $AccessorSmithingTransformRecipe {
"getAddition"(): $Ingredient
"getBase"(): $Ingredient
"getTemplate"(): $Ingredient
get "addition"(): $Ingredient
get "base"(): $Ingredient
get "template"(): $Ingredient
}

export namespace $AccessorSmithingTransformRecipe {
const probejs$$marker: never
}
export abstract class $AccessorSmithingTransformRecipe$$Static implements $AccessorSmithingTransformRecipe {
}
}

declare module "com.illusivesoulworks.polymorph.mixin.core.AccessorCraftingMenu" {
import { $CraftingContainer } from "net.minecraft.world.inventory.CraftingContainer"
import { $ResultContainer } from "net.minecraft.world.inventory.ResultContainer"
import { $Player } from "net.minecraft.world.entity.player.Player"

export interface $AccessorCraftingMenu {
"getCraftSlots"(): $CraftingContainer
"getPlayer"(): $Player
"getResultSlots"(): $ResultContainer
get "craftSlots"(): $CraftingContainer
get "player"(): $Player
get "resultSlots"(): $ResultContainer
}

export namespace $AccessorCraftingMenu {
const probejs$$marker: never
}
export abstract class $AccessorCraftingMenu$$Static implements $AccessorCraftingMenu {
}
}

declare module "com.illusivesoulworks.polymorph.mixin.core.AccessorSmithingTrimRecipe" {
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"

export interface $AccessorSmithingTrimRecipe {
"getAddition"(): $Ingredient
"getBase"(): $Ingredient
"getTemplate"(): $Ingredient
get "addition"(): $Ingredient
get "base"(): $Ingredient
get "template"(): $Ingredient
}

export namespace $AccessorSmithingTrimRecipe {
const probejs$$marker: never
}
export abstract class $AccessorSmithingTrimRecipe$$Static implements $AccessorSmithingTrimRecipe {
}
}

declare module "com.illusivesoulworks.polymorph.mixin.core.AccessorAbstractFurnaceBlockEntity" {
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $AccessorAbstractFurnaceBlockEntity {
"getItems"(): $NonNullList<$ItemStack>
get "items"(): $NonNullList<$ItemStack>
}

export namespace $AccessorAbstractFurnaceBlockEntity {
const probejs$$marker: never
}
export abstract class $AccessorAbstractFurnaceBlockEntity$$Static implements $AccessorAbstractFurnaceBlockEntity {
}
}

declare module "com.illusivesoulworks.polymorph.mixin.core.AccessorInventoryMenu" {
import { $CraftingContainer } from "net.minecraft.world.inventory.CraftingContainer"
import { $ResultContainer } from "net.minecraft.world.inventory.ResultContainer"
import { $Player } from "net.minecraft.world.entity.player.Player"

export interface $AccessorInventoryMenu {
"getCraftSlots"(): $CraftingContainer
"getOwner"(): $Player
"getResultSlots"(): $ResultContainer
get "craftSlots"(): $CraftingContainer
get "owner"(): $Player
get "resultSlots"(): $ResultContainer
}

export namespace $AccessorInventoryMenu {
const probejs$$marker: never
}
export abstract class $AccessorInventoryMenu$$Static implements $AccessorInventoryMenu {
}
}

