declare module "com.mojang.text2speech.Narrator" {
import { $Logger } from "org.slf4j.Logger"

export interface $Narrator {
"active"(): boolean
"clear"(): void
"destroy"(): void
"say"(string0: string, boolean1: boolean): void
}

export namespace $Narrator {
const EMPTY: $Narrator
const LOGGER: $Logger
function getNarrator(): $Narrator
}
export abstract class $Narrator$$Static implements $Narrator {
static readonly "EMPTY": $Narrator
static readonly "LOGGER": $Logger

static "getNarrator"(): $Narrator
}
}

