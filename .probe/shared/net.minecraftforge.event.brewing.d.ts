declare module "net.minecraftforge.event.brewing.PotionBrewEvent$Post" {
import { $PotionBrewEvent } from "net.minecraftforge.event.brewing.PotionBrewEvent"
import { $NonNullList$$Type } from "net.minecraft.core.NonNullList"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $PotionBrewEvent$Post extends $PotionBrewEvent {
constructor(nonNullList0: $NonNullList$$Type<$ItemStack$$Type>)
constructor()

}
}

declare module "net.minecraftforge.event.brewing.PlayerBrewedPotionEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerBrewedPotionEvent extends $PlayerEvent {
constructor(player0: $Player$$Type, itemStack1: $ItemStack$$Type)
constructor()

public "getStack"(): $ItemStack
get "stack"(): $ItemStack
}
}

declare module "net.minecraftforge.event.brewing.PotionBrewEvent$Pre" {
import { $PotionBrewEvent } from "net.minecraftforge.event.brewing.PotionBrewEvent"
import { $NonNullList$$Type } from "net.minecraft.core.NonNullList"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $PotionBrewEvent$Pre extends $PotionBrewEvent {
constructor(nonNullList0: $NonNullList$$Type<$ItemStack$$Type>)
constructor()

}
}

declare module "net.minecraftforge.event.brewing.PotionBrewEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $PotionBrewEvent extends $Event {
constructor()

public "getItem"(int0: integer): $ItemStack
public "getLength"(): integer
public "setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
get "length"(): integer
}
}

