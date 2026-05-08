declare module "net.minecraftforge.event.furnace.FurnaceFuelBurnTimeEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $RecipeType, $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"

export class $FurnaceFuelBurnTimeEvent extends $Event {
constructor(itemStack0: $ItemStack$$Type, int1: integer, recipeType2: $RecipeType$$Type<any>)
constructor()

public "getBurnTime"(): integer
public "getItemStack"(): $ItemStack
public "getRecipeType"(): $RecipeType<any>
public "setBurnTime"(int0: integer): void
get "burnTime"(): integer
get "itemStack"(): $ItemStack
get "recipeType"(): $RecipeType<any>
set "burnTime"(value: integer)
}
}

