declare module "loaderCommon.forge.com.seibel.distanthorizons.common.wrappers.misc.IMixinServerPlayer" {
import { $ServerLevel } from "net.minecraft.server.level.ServerLevel"

export interface $IMixinServerPlayer {
"distantHorizons$getDimensionChangeDestination"(): $ServerLevel
}

export namespace $IMixinServerPlayer {
const probejs$$marker: never
}
export abstract class $IMixinServerPlayer$$Static implements $IMixinServerPlayer {
}
}

