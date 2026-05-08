declare module "dev.cheos.armorpointspp.mixin.IRegisterGuiOverlaysEventMixin" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $List } from "java.util.List"
import { $Map } from "java.util.Map"
import { $IGuiOverlay } from "net.minecraftforge.client.gui.overlay.IGuiOverlay"

export interface $IRegisterGuiOverlaysEventMixin {
"getOrderedOverlays"(): $List<$ResourceLocation>
"getOverlays"(): $Map<$ResourceLocation, $IGuiOverlay>
get "orderedOverlays"(): $List<$ResourceLocation>
get "overlays"(): $Map<$ResourceLocation, $IGuiOverlay>
}

export namespace $IRegisterGuiOverlaysEventMixin {
const probejs$$marker: never
}
export abstract class $IRegisterGuiOverlaysEventMixin$$Static implements $IRegisterGuiOverlaysEventMixin {
}
}

