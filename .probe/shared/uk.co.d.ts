declare module "uk.co.cablepost.ftech_equipment.mixin.EntityAccessor" {
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"

export interface $EntityAccessor {
"getPositionDirect"(): $Vec3
"setPositionDirect"(vec30: $Vec3$$Type): void
get "positionDirect"(): $Vec3
set "positionDirect"(value: $Vec3$$Type)
}

export namespace $EntityAccessor {
const probejs$$marker: never
}
export abstract class $EntityAccessor$$Static implements $EntityAccessor {
}
}

declare module "uk.co.cablepost.ftech_equipment.mixin.PlayerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerAccessor {
"getAttackStrengthTicker"(): integer
"setAttackStrengthTicker"(int0: integer): void
get "attackStrengthTicker"(): integer
set "attackStrengthTicker"(value: integer)
}

export namespace $PlayerAccessor {
const probejs$$marker: never
}
export abstract class $PlayerAccessor$$Static implements $PlayerAccessor {
}
}

