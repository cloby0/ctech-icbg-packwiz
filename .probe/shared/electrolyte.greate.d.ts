declare module "electrolyte.greate.content.gtceu.material.GreateMaterialFlags" {
import { $MaterialFlag } from "com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialFlag"

export class $GreateMaterialFlags {
static readonly "GENERATE_ALLOY": $MaterialFlag
static readonly "GENERATE_WHISK": $MaterialFlag

constructor()

}
}

declare module "electrolyte.greate.content.gtceu.material.CogwheelProperty" {
import { $IMaterialProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.IMaterialProperty"
import { $MaterialProperties$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.MaterialProperties"
import { $Material, $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"

export class $CogwheelProperty implements $IMaterialProperty {
constructor(material0: $Material$$Type)

public "getPreviousMaterial"(): $Material
public "setPreviousMaterial"(material0: $Material$$Type): void
public "verifyProperty"(materialProperties0: $MaterialProperties$$Type): void
get "previousMaterial"(): $Material
set "previousMaterial"(value: $Material$$Type)
}
}

declare module "electrolyte.greate.GreateValues" {
import { $Material, $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"

export class $GreateValues {
static "BM": $Material[]
static readonly "SN": string[]
static readonly "SNF": string[]
static readonly "STRESS_NAMES": string[]
static "TM": $Material[]

constructor()

public static "getMaxCapacityFromMaterial"(material0: $Material$$Type): float
}
}

declare module "electrolyte.greate.compat.kubejs.TieredProcessingRecipeSchema$TieredProcessingRecipeJS" {
import { $RecipeJS } from "dev.latvian.mods.kubejs.recipe.RecipeJS"
import { $ProcessingRecipeSchema$ProcessingRecipeJS } from "dev.latvian.mods.kubejs.create.ProcessingRecipeSchema$ProcessingRecipeJS"

export class $TieredProcessingRecipeSchema$TieredProcessingRecipeJS extends $ProcessingRecipeSchema$ProcessingRecipeJS {
constructor()

public "circuitNumber"(object0: any): $RecipeJS
public "getMod"(): string
public "recipeTier"(object0: any): $RecipeJS
get "mod"(): string
}
}

declare module "electrolyte.greate.content.gtceu.material.KineticProperty" {
import { $IMaterialProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.IMaterialProperty"
import { $MaterialProperties$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.MaterialProperties"

export class $KineticProperty implements $IMaterialProperty {
constructor(int0: integer, int1: integer)

public "getMaxCapacity"(): float
public "getTier"(): integer
public "setMaxCapacity"(float0: float): void
public "setTier"(int0: integer): void
public "verifyProperty"(materialProperties0: $MaterialProperties$$Type): void
get "maxCapacity"(): float
get "tier"(): integer
set "maxCapacity"(value: float)
set "tier"(value: integer)
}
}

declare module "electrolyte.greate.content.gtceu.material.GreatePropertyKeys" {
import { $PropertyKey } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey"
import { $KineticProperty } from "electrolyte.greate.content.gtceu.material.KineticProperty"
import { $CogwheelProperty } from "electrolyte.greate.content.gtceu.material.CogwheelProperty"
import { $BeltProperty } from "electrolyte.greate.content.gtceu.material.BeltProperty"

export class $GreatePropertyKeys {
static readonly "BELT": $PropertyKey<$BeltProperty>
static readonly "COGWHEEL": $PropertyKey<$CogwheelProperty>
static readonly "KINETIC": $PropertyKey<$KineticProperty>

constructor()

}
}

declare module "electrolyte.greate.content.gtceu.material.BeltProperty" {
import { $IMaterialProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.IMaterialProperty"
import { $List, $List$$Type } from "java.util.List"
import { $MaterialProperties$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.MaterialProperties"
import { $Material, $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"

export class $BeltProperty implements $IMaterialProperty {
constructor(list0: $List$$Type<$Material$$Type>)
constructor(list0: $List$$Type<$Material$$Type>, int1: integer)

public "getMaxLength"(): integer
public "getValidShafts"(): $List<$Material>
public "setMaxLength"(int0: integer): void
public "setValidShafts"(list0: $List$$Type<$Material$$Type>): void
public "verifyProperty"(materialProperties0: $MaterialProperties$$Type): void
get "maxLength"(): integer
get "validShafts"(): $List<$Material>
set "maxLength"(value: integer)
set "validShafts"(value: $List$$Type<$Material$$Type>)
}
}

declare module "electrolyte.greate.foundation.data.recipe.GreateCraftingComponents" {
import { $CraftingComponent } from "com.gregtechceu.gtceu.data.recipe.CraftingComponent"

export class $GreateCraftingComponents {
static "ALLOY": $CraftingComponent
static "COGWHEEL": $CraftingComponent
static "GEARBOX": $CraftingComponent
static "LARGE_COGWHEEL": $CraftingComponent
static "PUMP": $CraftingComponent
static "SHAFT": $CraftingComponent
static "VERTICAL_GEARBOX": $CraftingComponent

constructor()

public static "register"(): void
}
}

