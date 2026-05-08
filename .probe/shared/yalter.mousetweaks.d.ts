declare module "yalter.mousetweaks.mixin.AbstractContainerScreenAccessor" {
import { $Slot, $Slot$$Type } from "net.minecraft.world.inventory.Slot"
import { $ClickType$$Type } from "net.minecraft.world.inventory.ClickType"

export interface $AbstractContainerScreenAccessor {
"mousetweaks$getIsQuickCrafting"(): boolean
"mousetweaks$getQuickCraftingButton"(): integer
"mousetweaks$invokeFindSlot"(double0: double, double1: double): $Slot
"mousetweaks$invokeSlotClicked"(slot0: $Slot$$Type, int1: integer, int2: integer, clickType3: $ClickType$$Type): void
"mousetweaks$setIsQuickCrafting"(boolean0: boolean): void
"mousetweaks$setSkipNextRelease"(boolean0: boolean): void
}

export namespace $AbstractContainerScreenAccessor {
const probejs$$marker: never
}
export abstract class $AbstractContainerScreenAccessor$$Static implements $AbstractContainerScreenAccessor {
}
}

