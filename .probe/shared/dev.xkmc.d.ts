declare module "dev.xkmc.l2library.init.events.FineScrollEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $FineScrollEvent extends $Event {
constructor(int0: integer)
constructor()

get "diff"(): integer
set "diff"(value: integer)
}
}

declare module "dev.xkmc.l2itemselector.events.GenericKeyEvent" {
import { $InputConstants$Key$$Type } from "com.mojang.blaze3d.platform.InputConstants$Key"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $GenericKeyEvent extends $Event {
constructor(predicate0: $Predicate$$Type<$InputConstants$Key$$Type>, int1: integer)
constructor()

public "getAction"(): integer
public "test"(key0: $InputConstants$Key$$Type): boolean
get "action"(): integer
}
}

declare module "dev.xkmc.l2library.base.effects.ForceAddEffectEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $MobEffectEvent } from "net.minecraftforge.event.entity.living.MobEffectEvent"
import { $MobEffectInstance$$Type } from "net.minecraft.world.effect.MobEffectInstance"

export class $ForceAddEffectEvent extends $MobEffectEvent {
constructor(livingEntity0: $LivingEntity$$Type, mobEffectInstance1: $MobEffectInstance$$Type)
constructor()

}
}

