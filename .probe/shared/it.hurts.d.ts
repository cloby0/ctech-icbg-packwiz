declare module "it.hurts.sskirillss.relics.api.events.common.ContainerSlotClickEvent" {
import { $Slot, $Slot$$Type } from "net.minecraft.world.inventory.Slot"
import { $PlayerContainerEvent } from "net.minecraftforge.event.entity.player.PlayerContainerEvent"
import { $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $ClickAction, $ClickAction$$Type } from "net.minecraft.world.inventory.ClickAction"

export class $ContainerSlotClickEvent extends $PlayerContainerEvent {
constructor(player0: $Player$$Type, abstractContainerMenu1: $AbstractContainerMenu$$Type, slot2: $Slot$$Type, clickAction3: $ClickAction$$Type, itemStack4: $ItemStack$$Type, itemStack5: $ItemStack$$Type)
constructor()

public "getAction"(): $ClickAction
public "getHeldStack"(): $ItemStack
public "getSlot"(): $Slot
public "getSlotStack"(): $ItemStack
get "action"(): $ClickAction
get "heldStack"(): $ItemStack
get "slot"(): $Slot
get "slotStack"(): $ItemStack
}
}

declare module "it.hurts.sskirillss.relics.api.events.common.FluidCollisionEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $FluidState, $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"

export class $FluidCollisionEvent extends $LivingEvent {
constructor(livingEntity0: $LivingEntity$$Type, fluidState1: $FluidState$$Type)
constructor()

public "getFluid"(): $FluidState
get "fluid"(): $FluidState
}
}

declare module "it.hurts.sskirillss.relics.api.events.common.LivingSlippingEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export class $LivingSlippingEvent extends $LivingEvent {
constructor(livingEntity0: $LivingEntity$$Type, blockState1: $BlockState$$Type, float2: float)
constructor()

public "getFriction"(): float
public "getState"(): $BlockState
public "setFriction"(float0: float): void
get "friction"(): float
get "state"(): $BlockState
set "friction"(value: float)
}
}

declare module "it.hurts.sskirillss.relics.api.events.common.EntityBlockSpeedFactorEvent" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $EntityEvent } from "net.minecraftforge.event.entity.EntityEvent"

export class $EntityBlockSpeedFactorEvent extends $EntityEvent {
constructor(entity0: $Entity$$Type, blockState1: $BlockState$$Type, float2: float)
constructor()

public "getSpeedFactor"(): float
public "getState"(): $BlockState
public "setSpeedFactor"(float0: float): void
get "speedFactor"(): float
get "state"(): $BlockState
set "speedFactor"(value: float)
}
}

declare module "it.hurts.sskirillss.relics.api.events.leveling.ExperienceAddEvent" {
import { $RelicEvent } from "it.hurts.sskirillss.relics.api.events.base.RelicEvent"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $ExperienceAddEvent extends $RelicEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, int2: integer)

public "getAmount"(): integer
public "setAmount"(int0: integer): void
get "amount"(): integer
set "amount"(value: integer)
}
}

declare module "it.hurts.sskirillss.relics.api.events.common.TooltipDisplayEvent" {
import { $GuiGraphics, $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $TooltipDisplayEvent extends $Event {
constructor()
constructor(itemStack0: $ItemStack$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, int4: integer, int5: integer)

public "getGraphics"(): $GuiGraphics
public "getHeight"(): integer
public "getStack"(): $ItemStack
public "getWidth"(): integer
public "getX"(): integer
public "getY"(): integer
get "graphics"(): $GuiGraphics
get "height"(): integer
get "stack"(): $ItemStack
get "width"(): integer
get "x"(): integer
get "y"(): integer
}
}

declare module "it.hurts.sskirillss.relics.api.events.base.RelicEvent" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $RelicEvent extends $Event {
constructor(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type)
constructor()

public "getEntity"(): $LivingEntity
public "getStack"(): $ItemStack
get "entity"(): $LivingEntity
get "stack"(): $ItemStack
}
}

