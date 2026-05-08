declare module "com.Gabou.sereneseasonsplus.util.ISnowTrackedChunk" {
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Map } from "java.util.Map"
import { $Set } from "java.util.Set"

export interface $ISnowTrackedChunk {
"sereneseasonsplus$getAvailableSnowColumns"(): integer
"sereneseasonsplus$getDestroyedColumns"(): $Set<long>
"sereneseasonsplus$getDestroyedStormId"(): integer
"sereneseasonsplus$getIceColumns"(): $Set<$BlockPos>
"sereneseasonsplus$getLastProgressTick"(): integer
"sereneseasonsplus$getLastWinterId"(): integer
"sereneseasonsplus$getSnowColumns"(): $Map<$BlockPos, integer>
"sereneseasonsplus$getStormIdApplied"(): integer
"sereneseasonsplus$getStormProgress"(): float
"sereneseasonsplus$getSurfaceHeight"(): integer
"sereneseasonsplus$getTotalSnowLayers"(): integer
"sereneseasonsplus$getTrackedColumnCount"(): integer
"sereneseasonsplus$setAvailableSnowColumns"(int0: integer): void
"sereneseasonsplus$setDestroyedStormId"(int0: integer): void
"sereneseasonsplus$setLastProgressTick"(int0: integer): void
"sereneseasonsplus$setLastWinterId"(int0: integer): void
"sereneseasonsplus$setStormIdApplied"(int0: integer): void
"sereneseasonsplus$setStormProgress"(float0: float): void
"sereneseasonsplus$setSurfaceHeight"(int0: integer): void
}

export namespace $ISnowTrackedChunk {
const probejs$$marker: never
}
export abstract class $ISnowTrackedChunk$$Static implements $ISnowTrackedChunk {
}
}

declare module "com.Gabou.sereneseasonsplus.util.MinecraftServerAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MinecraftServerAccess {
"sereneseasonsplus$tempsEcoule"(): boolean
}

export namespace $MinecraftServerAccess {
const probejs$$marker: never
}
export abstract class $MinecraftServerAccess$$Static implements $MinecraftServerAccess {
}
}

