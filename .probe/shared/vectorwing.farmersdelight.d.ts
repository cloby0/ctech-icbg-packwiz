declare module "vectorwing.farmersdelight.common.mixin.accessor.RecipeManagerAccessor" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $Recipe, $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $Map } from "java.util.Map"
import { $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"

export interface $RecipeManagerAccessor {
"getRecipeMap"<C extends $Container, T extends $Recipe<C>>(recipeType0: $RecipeType$$Type<T>): $Map<$ResourceLocation, $Recipe<C>>
}

export namespace $RecipeManagerAccessor {
const probejs$$marker: never
}
export abstract class $RecipeManagerAccessor$$Static implements $RecipeManagerAccessor {
}
}

