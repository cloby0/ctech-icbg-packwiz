declare module "net.mcreator.ars_technica.mixin.RegistryEntryAccessorMixin" {
import { $ItemLike } from "net.minecraft.world.level.ItemLike"
import { $RegistryObject } from "net.minecraftforge.registries.RegistryObject"

export interface $RegistryEntryAccessorMixin<T extends $ItemLike = $ItemLike> {
"getDelegate"(): $RegistryObject<T>
get "delegate"(): $RegistryObject<T>
}

export namespace $RegistryEntryAccessorMixin {
const probejs$$marker: never
}
export abstract class $RegistryEntryAccessorMixin$$Static<T extends $ItemLike = $ItemLike> implements $RegistryEntryAccessorMixin<T> {
}
}

