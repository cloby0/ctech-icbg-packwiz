declare module "org.thecelestialworkshop.celestisynth.mixin.RecipeManagerAccessor" {
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

declare module "org.thecelestialworkshop.celestisynth.mixin.LivingEntityInvoker" {
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"

export interface $LivingEntityInvoker {
"invokeActuallyHurt"(damageSource0: $DamageSource$$Type, float1: float): void
}

export namespace $LivingEntityInvoker {
const probejs$$marker: never
}
export abstract class $LivingEntityInvoker$$Static implements $LivingEntityInvoker {
}
}

declare module "org.thecelestialworkshop.celestisynth.api.mixin.PlayerMixinSupport" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerMixinSupport {
"getChantColor"(): integer
"getChantMark"(): integer
"getChantMessage"(): string
"getPulseScale"(): integer
"getPulseTimeSpeed"(): integer
"getScreenShakeDuration"(): integer
"getScreenShakeFadeoutBegin"(): integer
"getScreenShakeIntensity"(): float
"getTexturePulseImage"(): string
"getTexturePulseMark"(): integer
"setChantColor"(int0: integer): void
"setChantMark"(int0: integer): void
"setChantMessage"(string0: string): void
"setPulseScale"(int0: integer): void
"setPulseTimeSpeed"(int0: integer): void
"setScreenShakeDuration"(int0: integer): void
"setScreenShakeFadeoutBegin"(int0: integer): void
"setScreenShakeIntensity"(float0: float): void
"setTexturePulseImage"(string0: string): void
"setTexturePulseMark"(int0: integer): void
get "chantColor"(): integer
get "chantMark"(): integer
get "chantMessage"(): string
get "pulseScale"(): integer
get "pulseTimeSpeed"(): integer
get "screenShakeDuration"(): integer
get "screenShakeFadeoutBegin"(): integer
get "screenShakeIntensity"(): float
get "texturePulseImage"(): string
get "texturePulseMark"(): integer
set "chantColor"(value: integer)
set "chantMark"(value: integer)
set "chantMessage"(value: string)
set "pulseScale"(value: integer)
set "pulseTimeSpeed"(value: integer)
set "screenShakeDuration"(value: integer)
set "screenShakeFadeoutBegin"(value: integer)
set "screenShakeIntensity"(value: float)
set "texturePulseImage"(value: string)
set "texturePulseMark"(value: integer)
}

export namespace $PlayerMixinSupport {
const probejs$$marker: never
}
export abstract class $PlayerMixinSupport$$Static implements $PlayerMixinSupport {
}
}

