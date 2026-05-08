declare module "com.lowdragmc.lowdraglib.jei.IngredientIO" {
import { $Enum } from "java.lang.Enum"

export class $IngredientIO extends $Enum<$IngredientIO> {
static readonly "BOTH": $IngredientIO
static readonly "CATALYST": $IngredientIO
static readonly "INPUT": $IngredientIO
static readonly "OUTPUT": $IngredientIO
static readonly "RENDER_ONLY": $IngredientIO

public static "valueOf"(name: string): $IngredientIO
public static "values"(): $IngredientIO[]
}
}

