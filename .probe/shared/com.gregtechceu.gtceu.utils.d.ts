declare module "com.gregtechceu.gtceu.utils.input.SyncedKeyMappingEvent" {
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $SyncedKeyMappingEvent extends $Event implements $IModBusEvent {
constructor()

}
}

declare module "com.gregtechceu.gtceu.utils.FacingPos" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"

export class $FacingPos {
constructor(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type)

public "getFacing"(): $Direction
public "getPos"(): $BlockPos
get "facing"(): $Direction
get "pos"(): $BlockPos
}
}

declare module "com.gregtechceu.gtceu.utils.WeightedEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WeightedEntry {
"weight"(): integer
}

export namespace $WeightedEntry {
const probejs$$marker: never
}
export abstract class $WeightedEntry$$Static implements $WeightedEntry {
}
}

