declare module "com.xiaoyue.celestial_core.events.DamageItemEvent" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $DamageItemEvent extends $Event {
constructor(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, int2: integer)
constructor()

public "getAmount"(): integer
public "getEntity"(): $LivingEntity
public "getRandom"(): $RandomSource
public "getStack"(): $ItemStack
public "setAmount"(int0: integer): void
get "amount"(): integer
get "entity"(): $LivingEntity
get "random"(): $RandomSource
get "stack"(): $ItemStack
set "amount"(value: integer)
}
}

declare module "com.xiaoyue.celestial_enchantments.mixin.MixinTrident" {
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $MixinTrident {
"getTridentItem"(): $ItemStack
get "tridentItem"(): $ItemStack
}

export namespace $MixinTrident {
const probejs$$marker: never
}
export abstract class $MixinTrident$$Static implements $MixinTrident {
}
}

declare module "com.xiaoyue.celestial_core.events.LivingJumpEvent" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent$LivingJumpEvent } from "net.minecraftforge.event.entity.living.LivingEvent$LivingJumpEvent"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $LivingJumpEvent extends $Event {
constructor(livingEntity0: $LivingEntity$$Type, float1: float)
constructor()

public "getEntity"(): $LivingEntity
public "getForgeEvent"(): $LivingEvent$LivingJumpEvent
public "getJumpPower"(): float
public "setJumpPower"(float0: float): void
get "entity"(): $LivingEntity
get "forgeEvent"(): $LivingEvent$LivingJumpEvent
get "jumpPower"(): float
set "jumpPower"(value: float)
}
}

