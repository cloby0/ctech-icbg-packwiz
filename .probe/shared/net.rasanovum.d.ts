declare module "net.rasanovum.viaromana.storage.path.legacy.ICustomDataHolder" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"

export interface $ICustomDataHolder {
"getCustomData"(): $CompoundTag
"setCustomData"(compoundTag0: $CompoundTag$$Type): void
get "customData"(): $CompoundTag
set "customData"(value: $CompoundTag$$Type)
}

export namespace $ICustomDataHolder {
const probejs$$marker: never
}
export abstract class $ICustomDataHolder$$Static implements $ICustomDataHolder {
}
}

