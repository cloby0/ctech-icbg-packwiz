declare module "studio.fantasyit.ars_botania.api.IReceiveOrGiveSource" {
import { $ISourceTile } from "com.hollingsworth.arsnouveau.api.source.ISourceTile"

export interface $IReceiveOrGiveSource extends $ISourceTile {
"addSource"(int0: integer): integer
"canAcceptSource"(): boolean
"getMaxSource"(): integer
"getSource"(): integer
"getTransferRate"(): integer
"removeSource"(int0: integer): integer
"setMaxSource"(int0: integer): void
"setSource"(int0: integer): integer
get "maxSource"(): integer
get "source"(): integer
get "transferRate"(): integer
set "maxSource"(value: integer)
set "source"(value: integer)
}

export namespace $IReceiveOrGiveSource {
const probejs$$marker: never
}
export abstract class $IReceiveOrGiveSource$$Static implements $IReceiveOrGiveSource {
}
}

