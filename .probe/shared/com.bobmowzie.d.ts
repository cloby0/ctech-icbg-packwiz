declare module "com.bobmowzie.mowziesmobs.server.block.ICopiedBlockProperties" {
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"

export interface $ICopiedBlockProperties {
"getBaseBlock"(): $Block
"setBaseBlock"(block0: $Block$$Type): void
get "baseBlock"(): $Block
set "baseBlock"(value: $Block$$Type)
}

export namespace $ICopiedBlockProperties {
const probejs$$marker: never
}
export abstract class $ICopiedBlockProperties$$Static implements $ICopiedBlockProperties {
}
}

