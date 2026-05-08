declare module "net.minecraftforge.api.distmarker.Dist" {
import { $Enum } from "java.lang.Enum"

export class $Dist extends $Enum<$Dist> {
static readonly "CLIENT": $Dist
static readonly "DEDICATED_SERVER": $Dist

public "isClient"(): boolean
public "isDedicatedServer"(): boolean
public static "valueOf"(string0: string): $Dist
public static "values"(): $Dist[]
get "client"(): boolean
get "dedicatedServer"(): boolean
}
}

