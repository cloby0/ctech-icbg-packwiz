declare module "alexthw.ars_elemental.mixin.FoxInvoker" {
import { $UUID$$Type } from "java.util.UUID"

export interface $FoxInvoker {
"callAddTrustedUUID"(uUID0: $UUID$$Type): void
"callTrusts"(uUID0: $UUID$$Type): boolean
}

export namespace $FoxInvoker {
const probejs$$marker: never
}
export abstract class $FoxInvoker$$Static implements $FoxInvoker {
}
}

declare module "alexthw.ars_elemental.mixin.ZombieInvoker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ZombieInvoker {
"callStartUnderWaterConversion"(int0: integer): void
}

export namespace $ZombieInvoker {
const probejs$$marker: never
}
export abstract class $ZombieInvoker$$Static implements $ZombieInvoker {
}
}

