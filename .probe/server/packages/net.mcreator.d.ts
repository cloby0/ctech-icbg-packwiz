declare module "net.mcreator.ars_technica.mixin.RegistryEntryAccessorMixin" {
import { $ItemLike, $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $RegistryObject$$Type } from "net.minecraftforge.registries.RegistryObject"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistryEntryAccessorMixin$$Type<T extends $ItemLike = $ItemLike> = ($RegistryEntryAccessorMixin<T> | (() => $RegistryObject$$Type<T>));
}

