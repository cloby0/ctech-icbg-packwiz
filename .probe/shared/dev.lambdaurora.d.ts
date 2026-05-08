declare module "dev.lambdaurora.lambdynlights.api.DynamicLightHandler" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Creeper, $Creeper$$Type } from "net.minecraft.world.entity.monster.Creeper"
import { $Function$$Type } from "java.util.function.Function"

export interface $DynamicLightHandler<T = any> {
"getLuminance"(t0: T): integer
"isWaterSensitive"(lightSource: T): boolean
}

export namespace $DynamicLightHandler {
function makeCreeperEntityHandler<T extends $Creeper>(handler: $DynamicLightHandler$$Type<T>): $DynamicLightHandler<T>
function makeHandler<T extends $LivingEntity>(luminance: $Function$$Type<T, integer>, waterSensitive: $Function$$Type<T, boolean>): $DynamicLightHandler<T>
function makeLivingEntityHandler<T extends $LivingEntity>(handler: $DynamicLightHandler$$Type<T>): $DynamicLightHandler<T>
}
export abstract class $DynamicLightHandler$$Static<T = any> implements $DynamicLightHandler<T> {
static "makeCreeperEntityHandler"<T extends $Creeper>(handler: $DynamicLightHandler$$Type<T>): $DynamicLightHandler<T>
static "makeHandler"<T extends $LivingEntity>(luminance: $Function$$Type<T, integer>, waterSensitive: $Function$$Type<T, boolean>): $DynamicLightHandler<T>
static "makeLivingEntityHandler"<T extends $LivingEntity>(handler: $DynamicLightHandler$$Type<T>): $DynamicLightHandler<T>
}
}

