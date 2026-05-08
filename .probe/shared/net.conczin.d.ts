declare module "net.conczin.immersive_optimization.mixin.ServerLevelAccessor" {
import { $EntityTickList } from "net.minecraft.world.level.entity.EntityTickList"

export interface $ServerLevelAccessor {
"getEntityTickList"(): $EntityTickList
get "entityTickList"(): $EntityTickList
}

export namespace $ServerLevelAccessor {
const probejs$$marker: never
}
export abstract class $ServerLevelAccessor$$Static implements $ServerLevelAccessor {
}
}

declare module "net.conczin.immersive_optimization.mixin.EntityTickListAccessor" {
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $Int2ObjectMap } from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"

export interface $EntityTickListAccessor {
"getActive"(): $Int2ObjectMap<$Entity>
get "active"(): $Int2ObjectMap<$Entity>
}

export namespace $EntityTickListAccessor {
const probejs$$marker: never
}
export abstract class $EntityTickListAccessor$$Static implements $EntityTickListAccessor {
}
}

