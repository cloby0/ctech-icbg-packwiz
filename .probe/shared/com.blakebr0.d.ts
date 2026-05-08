declare module "com.blakebr0.cucumber.event.RegisterRecipesEvent" {
import { $RecipeManager, $RecipeManager$$Type } from "net.minecraft.world.item.crafting.RecipeManager"
import { $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

/** @deprecated */
export class $RegisterRecipesEvent extends $Event {
constructor(recipeManager0: $RecipeManager$$Type)
constructor()

public "getRecipeManager"(): $RecipeManager
public "register"(recipe0: $Recipe$$Type<any>): void
get "recipeManager"(): $RecipeManager
}
}

declare module "com.blakebr0.cucumber.event.ScytheHarvestCropEvent" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $LevelAccessor, $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ScytheHarvestCropEvent extends $Event {
constructor(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, itemStack3: $ItemStack$$Type, player4: $Player$$Type)
constructor()

public "getItemStack"(): $ItemStack
public "getLevel"(): $LevelAccessor
public "getPlayer"(): $Player
public "getPos"(): $BlockPos
public "getState"(): $BlockState
get "itemStack"(): $ItemStack
get "level"(): $LevelAccessor
get "player"(): $Player
get "pos"(): $BlockPos
get "state"(): $BlockState
}
}

declare module "com.blakebr0.cucumber.event.RecipeManagerLoadingEvent" {
import { $List$$Type } from "java.util.List"
import { $RecipeManager, $RecipeManager$$Type } from "net.minecraft.world.item.crafting.RecipeManager"
import { $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $RecipeManagerLoadingEvent extends $Event {
constructor()
constructor(recipeManager0: $RecipeManager$$Type, list1: $List$$Type<$Recipe$$Type<any>>)

public "addRecipe"(recipe0: $Recipe$$Type<any>): void
public "getRecipeManager"(): $RecipeManager
get "recipeManager"(): $RecipeManager
}
}

