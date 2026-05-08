declare module "dev.latvian.mods.kubejs.net.NetworkEventJS" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $PlayerEventJS } from "dev.latvian.mods.kubejs.player.PlayerEventJS"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

/**
 * Invoked when a network packet is received.
 * 
 * Note that the behaviour of this event is depending on the **script type**.
 * 
 * In `server_scripts`, this event is invoked on the server side when a packet is received from a client.
 * 
 * In `client_scripts`, this event is invoked on the client side when a packet is received from the server.
 */
export class $NetworkEventJS extends $PlayerEventJS {
constructor(p: $Player$$Type, c: string, d: $CompoundTag$$Type)

/** The channel of the packet. */
public "getChannel"(): string
/** The data of the packet. */
public "getData"(): $CompoundTag
get "channel"(): string
get "data"(): $CompoundTag
}
}

