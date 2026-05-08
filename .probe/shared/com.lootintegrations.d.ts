declare module "com.lootintegrations.loot.INoMapContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $INoMapContext {
"areMapsDisabled"(): boolean
"disabledMaps"(): void
}

export namespace $INoMapContext {
const probejs$$marker: never
}
export abstract class $INoMapContext$$Static implements $INoMapContext {
}
}

declare module "com.lootintegrations.loot.ILootTableID" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"

export interface $ILootTableID {
"getID"(): $ResourceLocation
"setId"(resourceLocation0: $ResourceLocation$$Type): void
get "iD"(): $ResourceLocation
set "id"(value: $ResourceLocation$$Type)
}

export namespace $ILootTableID {
const probejs$$marker: never
}
export abstract class $ILootTableID$$Static implements $ILootTableID {
}
}

