declare module "terrablender.api.RegionType" {
import { $Enum } from "java.lang.Enum"

export class $RegionType extends $Enum<$RegionType> {
static readonly "NETHER": $RegionType
static readonly "OVERWORLD": $RegionType

public static "valueOf"(string0: string): $RegionType
public static "values"(): $RegionType[]
}
}

