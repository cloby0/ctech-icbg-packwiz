declare module "net.joefoxe.hexerei.light.LambHexereiDynamicLight" {
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $Level } from "net.minecraft.world.level.Level"

export interface $LambHexereiDynamicLight {
"dynamicLightTickH"(): void
"getDynamicLightWorldH"(): $Level
"getDynamicLightXH"(): double
"getDynamicLightYH"(): double
"getDynamicLightZH"(): double
"getLuminanceH"(): integer
"isDynamicLightEnabledH"(): boolean
"lambdynlights$scheduleTrackedChunksRebuildH"(levelRenderer0: $LevelRenderer$$Type): void
"lambdynlights$updateDynamicLightH"(levelRenderer0: $LevelRenderer$$Type): boolean
"resetDynamicLightH"(): void
"setHexereiDynamicLightEnabled"(boolean0: boolean): void
"shouldUpdateDynamicLightH"(): boolean
get "dynamicLightWorldH"(): $Level
get "dynamicLightXH"(): double
get "dynamicLightYH"(): double
get "dynamicLightZH"(): double
get "luminanceH"(): integer
get "dynamicLightEnabledH"(): boolean
set "hexereiDynamicLightEnabled"(value: boolean)
}

export namespace $LambHexereiDynamicLight {
const probejs$$marker: never
}
export abstract class $LambHexereiDynamicLight$$Static implements $LambHexereiDynamicLight {
}
}

declare module "net.joefoxe.hexerei.client.renderer.TwoHandedItemAnimation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $TwoHandedItemAnimation {
constructor()

get "bool"(): boolean
set "bool"(value: boolean)
}
}

