declare module "com.glodblock.github.extendedae.util.MutableSlot" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MutableSlot {
"setXPos"(int0: integer): void
"setYPos"(int0: integer): void
set "xPos"(value: integer)
set "yPos"(value: integer)
}

export namespace $MutableSlot {
const probejs$$marker: never
}
export abstract class $MutableSlot$$Static implements $MutableSlot {
}
}

declare module "com.glodblock.github.extendedae.util.RecipeManagerAccessor" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $Recipe, $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $Map } from "java.util.Map"
import { $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"

export interface $RecipeManagerAccessor {
"getByType"<C extends $Container, T extends $Recipe<C>>(recipeType0: $RecipeType$$Type<T>): $Map<$ResourceLocation, T>
}

export namespace $RecipeManagerAccessor {
const probejs$$marker: never
}
export abstract class $RecipeManagerAccessor$$Static implements $RecipeManagerAccessor {
}
}

