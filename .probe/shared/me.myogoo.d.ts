declare module "me.myogoo.extendedterminal.event.RecipeManagerLoadingEvent" {
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

