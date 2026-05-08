declare module "be.florens.expandability.api.forge.LivingFluidCollisionEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $FluidState, $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"

export class $LivingFluidCollisionEvent extends $LivingEvent {
constructor(entity: $LivingEntity$$Type, fluidState: $FluidState$$Type)
constructor()

public "getFluidState"(): $FluidState
get "fluidState"(): $FluidState
}
}

declare module "be.florens.expandability.api.forge.PlayerSwimEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerSwimEvent extends $PlayerEvent {
constructor(player: $Player$$Type)
constructor()

}
}

