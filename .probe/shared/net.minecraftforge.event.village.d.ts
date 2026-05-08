declare module "net.minecraftforge.event.village.VillageSiegeEvent" {
import { $VillageSiege, $VillageSiege$$Type } from "net.minecraft.world.entity.ai.village.VillageSiege"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $VillageSiegeEvent extends $Event {
constructor(villageSiege0: $VillageSiege$$Type, level1: $Level$$Type, player2: $Player$$Type, vec33: $Vec3$$Type)
constructor()

public "getAttemptedSpawnPos"(): $Vec3
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getSiege"(): $VillageSiege
get "attemptedSpawnPos"(): $Vec3
get "level"(): $Level
get "player"(): $Player
get "siege"(): $VillageSiege
}
}

declare module "net.minecraftforge.event.village.WandererTradesEvent" {
import { $List, $List$$Type } from "java.util.List"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $VillagerTrades$ItemListing, $VillagerTrades$ItemListing$$Type } from "net.minecraft.world.entity.npc.VillagerTrades$ItemListing"

export class $WandererTradesEvent extends $Event {
constructor()
constructor(list0: $List$$Type<$VillagerTrades$ItemListing$$Type>, list1: $List$$Type<$VillagerTrades$ItemListing$$Type>)

public "getGenericTrades"(): $List<$VillagerTrades$ItemListing>
public "getRareTrades"(): $List<$VillagerTrades$ItemListing>
get "genericTrades"(): $List<$VillagerTrades$ItemListing>
get "rareTrades"(): $List<$VillagerTrades$ItemListing>
}
}

declare module "net.minecraftforge.event.village.VillagerTradesEvent" {
import { $List, $List$$Type } from "java.util.List"
import { $Int2ObjectMap, $Int2ObjectMap$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"
import { $VillagerProfession, $VillagerProfession$$Type } from "net.minecraft.world.entity.npc.VillagerProfession"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $VillagerTrades$ItemListing, $VillagerTrades$ItemListing$$Type } from "net.minecraft.world.entity.npc.VillagerTrades$ItemListing"

export class $VillagerTradesEvent extends $Event {
constructor(int2ObjectMap0: $Int2ObjectMap$$Type<$List$$Type<$VillagerTrades$ItemListing$$Type>>, villagerProfession1: $VillagerProfession$$Type)
constructor()

public "getTrades"(): $Int2ObjectMap<$List<$VillagerTrades$ItemListing>>
public "getType"(): $VillagerProfession
get "trades"(): $Int2ObjectMap<$List<$VillagerTrades$ItemListing>>
get "type"(): $VillagerProfession
}
}

