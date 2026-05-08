declare module "com.anthonyhilyard.prism.util.IColor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IColor {
"getName"(): string
"getValue"(): integer
"isAnimated"(): boolean
get "name"(): string
get "value"(): integer
get "animated"(): boolean
}

export namespace $IColor {
const probejs$$marker: never
}
export abstract class $IColor$$Static implements $IColor {
}
}

declare module "com.anthonyhilyard.iceberg.events.NewItemPickupEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $UUID$$Type } from "java.util.UUID"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $NewItemPickupEvent extends $PlayerEvent {
constructor(player0: $Player$$Type, itemStack1: $ItemStack$$Type)
constructor()
constructor(uUID0: $UUID$$Type, itemStack1: $ItemStack$$Type)

public "getItemStack"(): $ItemStack
get "itemStack"(): $ItemStack
}
}

declare module "com.anthonyhilyard.iceberg.events.RenderTooltipExtEvent$Color" {
import { $Font$$Type } from "net.minecraft.client.gui.Font"
import { $List$$Type } from "java.util.List"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $ClientTooltipComponent$$Type } from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $RenderTooltipEvent$Color } from "net.minecraftforge.client.event.RenderTooltipEvent$Color"

export class $RenderTooltipExtEvent$Color extends $RenderTooltipEvent$Color {
constructor()
constructor(itemStack0: $ItemStack$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, font4: $Font$$Type, int5: integer, int6: integer, int7: integer, list8: $List$$Type<$ClientTooltipComponent$$Type>, boolean9: boolean, int10: integer)
constructor(itemStack0: $ItemStack$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, font4: $Font$$Type, int5: integer, int6: integer, int7: integer, int8: integer, list9: $List$$Type<$ClientTooltipComponent$$Type>, boolean10: boolean, int11: integer)
constructor(itemStack0: $ItemStack$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, font4: $Font$$Type, int5: integer, int6: integer, int7: integer, list8: $List$$Type<$ClientTooltipComponent$$Type>, boolean9: boolean)

public "getIndex"(): integer
public "isComparison"(): boolean
get "index"(): integer
get "comparison"(): boolean
}
}

declare module "com.anthonyhilyard.iceberg.events.GatherComponentsExtEvent" {
import { $List$$Type } from "java.util.List"
import { $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $FormattedText$$Type } from "net.minecraft.network.chat.FormattedText"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $TooltipComponent$$Type } from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import { $RenderTooltipEvent$GatherComponents } from "net.minecraftforge.client.event.RenderTooltipEvent$GatherComponents"

export class $GatherComponentsExtEvent extends $RenderTooltipEvent$GatherComponents {
constructor(itemStack0: $ItemStack$$Type, int1: integer, int2: integer, list3: $List$$Type<$Either$$Type<$FormattedText$$Type, $TooltipComponent$$Type>>, int4: integer, int5: integer)
constructor()

public "getIndex"(): integer
get "index"(): integer
}
}

declare module "com.anthonyhilyard.iceberg.events.RenderTooltipExtEvent$Post" {
import { $Font$$Type } from "net.minecraft.client.gui.Font"
import { $List$$Type } from "java.util.List"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $ClientTooltipComponent$$Type } from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $RenderTooltipEvent } from "net.minecraftforge.client.event.RenderTooltipEvent"

export class $RenderTooltipExtEvent$Post extends $RenderTooltipEvent {
constructor(itemStack0: $ItemStack$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, font4: $Font$$Type, int5: integer, int6: integer, list7: $List$$Type<$ClientTooltipComponent$$Type>, boolean8: boolean, int9: integer)
constructor(itemStack0: $ItemStack$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, font4: $Font$$Type, int5: integer, int6: integer, list7: $List$$Type<$ClientTooltipComponent$$Type>, boolean8: boolean)
constructor()

public "getHeight"(): integer
public "getIndex"(): integer
public "getWidth"(): integer
public "isComparison"(): boolean
get "height"(): integer
get "index"(): integer
get "width"(): integer
get "comparison"(): boolean
}
}

declare module "com.anthonyhilyard.iceberg.events.RenderTooltipExtEvent$Pre" {
import { $Font$$Type } from "net.minecraft.client.gui.Font"
import { $List$$Type } from "java.util.List"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $ClientTooltipPositioner$$Type } from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner"
import { $ClientTooltipComponent$$Type } from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $RenderTooltipEvent$Pre } from "net.minecraftforge.client.event.RenderTooltipEvent$Pre"

export class $RenderTooltipExtEvent$Pre extends $RenderTooltipEvent$Pre {
constructor()
constructor(itemStack0: $ItemStack$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, int4: integer, int5: integer, font6: $Font$$Type, list7: $List$$Type<$ClientTooltipComponent$$Type>, clientTooltipPositioner8: $ClientTooltipPositioner$$Type, boolean9: boolean, int10: integer)
constructor(itemStack0: $ItemStack$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, int4: integer, int5: integer, font6: $Font$$Type, list7: $List$$Type<$ClientTooltipComponent$$Type>, clientTooltipPositioner8: $ClientTooltipPositioner$$Type, boolean9: boolean)

public "getIndex"(): integer
public "isComparison"(): boolean
get "index"(): integer
get "comparison"(): boolean
}
}

declare module "com.anthonyhilyard.iceberg.events.CriterionEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $Advancement, $Advancement$$Type } from "net.minecraft.advancements.Advancement"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $CriterionEvent extends $PlayerEvent {
constructor(player0: $Player$$Type, advancement1: $Advancement$$Type, string2: string)
constructor()

/** @deprecated */
public "getAdvancement"(): $Advancement
public "getCriterionKey"(): string
get "advancement"(): $Advancement
get "criterionKey"(): string
}
}

