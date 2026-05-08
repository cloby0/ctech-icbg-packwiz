declare module "dev.latvian.mods.kubejs.forge.ForgeEventConsumer" {
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $Event, $Event$$Type } from "net.minecraftforge.eventbus.api.Event"

export interface $ForgeEventConsumer extends $Consumer<$Event> {
"accept"(event0: $Event$$Type): void
"andThen"(consumer0: $Consumer$$Type<$Event$$Type>): $Consumer<$Event>
}

export namespace $ForgeEventConsumer {
const probejs$$marker: never
}
export abstract class $ForgeEventConsumer$$Static implements $ForgeEventConsumer {
}
}

declare module "dev.latvian.mods.kubejs.forge.GenericForgeEventConsumer" {
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $GenericEvent, $GenericEvent$$Type } from "net.minecraftforge.eventbus.api.GenericEvent"

export interface $GenericForgeEventConsumer extends $Consumer<$GenericEvent<any>> {
"accept"(genericEvent0: $GenericEvent$$Type<any>): void
"andThen"(consumer0: $Consumer$$Type<$GenericEvent$$Type<any>>): $Consumer<$GenericEvent<any>>
}

export namespace $GenericForgeEventConsumer {
const probejs$$marker: never
}
export abstract class $GenericForgeEventConsumer$$Static implements $GenericForgeEventConsumer {
}
}

