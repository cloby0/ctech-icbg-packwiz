declare module "net.silentchaos512.gear.api.util.IGearComponent" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $StatGearKey$$Type } from "net.silentchaos512.gear.api.util.StatGearKey"
import { $Collection } from "java.util.Collection"
import { $IStatModProvider } from "net.silentchaos512.gear.api.util.IStatModProvider"
import { $PartGearKey$$Type } from "net.silentchaos512.gear.api.util.PartGearKey"
import { $PartType$$Type } from "net.silentchaos512.gear.api.part.PartType"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"
import { $GearType$$Type } from "net.silentchaos512.gear.api.item.GearType"
import { $Container$$Type } from "net.minecraft.world.Container"
import { $ITraitProvider } from "net.silentchaos512.gear.api.util.ITraitProvider"
import { $MaterialList } from "net.silentchaos512.gear.api.material.MaterialList"
import { $TraitInstance } from "net.silentchaos512.gear.api.traits.TraitInstance"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $StatInstance } from "net.silentchaos512.gear.api.stats.StatInstance"

export interface $IGearComponent<D = any> extends $IStatModProvider<D>, $ITraitProvider<D> {
"getDisplayName"(d0: D, partType1: $PartType$$Type, itemStack2: $ItemStack$$Type): $Component
"getIngredient"(): $Ingredient
"getMaterials"(d0: D): $MaterialList
"getStat"(d0: D, partType1: $PartType$$Type, statGearKey2: $StatGearKey$$Type, itemStack3: $ItemStack$$Type): float
"getStatModifiers"(d0: D, partType1: $PartType$$Type, statGearKey2: $StatGearKey$$Type, itemStack3: $ItemStack$$Type): $Collection<$StatInstance>
"getStatModifiers"(d0: D, partType1: $PartType$$Type, statGearKey2: $StatGearKey$$Type): $Collection<$StatInstance>
"getStatUnclamped"(d0: D, partType1: $PartType$$Type, statGearKey2: $StatGearKey$$Type, itemStack3: $ItemStack$$Type): float
"getTraits"(d0: D, partGearKey1: $PartGearKey$$Type, itemStack2: $ItemStack$$Type): $Collection<$TraitInstance>
"isCraftingAllowed"(d0: D, partType1: $PartType$$Type, gearType2: $GearType$$Type, container3: $Container$$Type): boolean
"isCraftingAllowed"(d0: D, partType1: $PartType$$Type, gearType2: $GearType$$Type): boolean
get "ingredient"(): $Ingredient
}

export namespace $IGearComponent {
const probejs$$marker: never
}
export abstract class $IGearComponent$$Static<D = any> implements $IGearComponent<D> {
}
}

declare module "net.silentchaos512.gear.gear.part.PartData" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject } from "com.google.gson.JsonObject"
import { $Tier } from "net.minecraft.world.item.Tier"
import { $Component } from "net.minecraft.network.chat.Component"
import { $StatGearKey$$Type } from "net.silentchaos512.gear.api.util.StatGearKey"
import { $Collection } from "java.util.Collection"
import { $DataResource$$Type } from "net.silentchaos512.gear.api.util.DataResource"
import { $PartGearKey$$Type } from "net.silentchaos512.gear.api.util.PartGearKey"
import { $PartType, $PartType$$Type } from "net.silentchaos512.gear.api.part.PartType"
import { $GearType, $GearType$$Type } from "net.silentchaos512.gear.api.item.GearType"
import { $IMaterial$$Type } from "net.silentchaos512.gear.api.material.IMaterial"
import { $CraftingContainer$$Type } from "net.minecraft.world.inventory.CraftingContainer"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $IPartData } from "net.silentchaos512.gear.api.part.IPartData"
import { $MaterialList } from "net.silentchaos512.gear.api.material.MaterialList"
import { $TraitInstance } from "net.silentchaos512.gear.api.traits.TraitInstance"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $IGearPart, $IGearPart$$Type } from "net.silentchaos512.gear.api.part.IGearPart"
import { $StatInstance } from "net.silentchaos512.gear.api.stats.StatInstance"

export class $PartData implements $IPartData {
static readonly "NBT_ID": string

public "containsMaterial"(dataResource0: $DataResource$$Type<$IMaterial$$Type>): boolean
public static "from"(itemStack0: $ItemStack$$Type, boolean1: boolean): $PartData
public static "from"(itemStack0: $ItemStack$$Type): $PartData
public "getColor"(itemStack0: $ItemStack$$Type, int1: integer, int2: integer): integer
public "getColor"(itemStack0: $ItemStack$$Type): integer
/** @deprecated */
public "getCraftingItem"(): $ItemStack
public "getDisplayName"(itemStack0: $ItemStack$$Type): $Component
public "getDisplayName"(partType0: $PartType$$Type, itemStack1: $ItemStack$$Type): $Component
public "getDisplayName"(partType0: $PartType$$Type): $Component
public "getGearType"(): $GearType
public "getHarvestTier"(): $Tier
public "getId"(): $ResourceLocation
public "getItem"(): $ItemStack
public "getMaterialName"(itemStack0: $ItemStack$$Type): $Component
public "getMaterials"(): $MaterialList
public "getModelKey"(): string
public "getNameColor"(partType0: $PartType$$Type, gearType1: $GearType$$Type): integer
/** @deprecated */
public "getPart"(): $IGearPart
/** @deprecated */
public "getPartId"(): $ResourceLocation
public "getStat"(partType0: $PartType$$Type, statGearKey1: $StatGearKey$$Type, itemStack2: $ItemStack$$Type): float
public "getStat"(partType0: $PartType$$Type, statGearKey1: $StatGearKey$$Type): float
public "getStatModifiers"(partType0: $PartType$$Type, statGearKey1: $StatGearKey$$Type, itemStack2: $ItemStack$$Type): $Collection<$StatInstance>
public "getStatModifiers"(statGearKey0: $StatGearKey$$Type, itemStack1: $ItemStack$$Type): $Collection<$StatInstance>
public "getStatModifiers"(partType0: $PartType$$Type, statGearKey1: $StatGearKey$$Type): $Collection<$StatInstance>
public "getTier"(): integer
public "getTraits"(itemStack0: $ItemStack$$Type): $Collection<$TraitInstance>
public "getTraits"(partType0: $PartType$$Type, gearType1: $GearType$$Type, itemStack2: $ItemStack$$Type): $Collection<$TraitInstance>
public "getTraits"(): $Collection<$TraitInstance>
public "getTraits"(partGearKey0: $PartGearKey$$Type, itemStack1: $ItemStack$$Type): $Collection<$TraitInstance>
public "getTraits"(partType0: $PartType$$Type): $Collection<$TraitInstance>
public "getType"(): $PartType
public "isCraftingAllowed"(gearType0: $GearType$$Type, craftingContainer1: $CraftingContainer$$Type): boolean
public static "of"(iGearPart0: $IGearPart$$Type, itemStack1: $ItemStack$$Type): $PartData
public static "of"(iGearPart0: $IGearPart$$Type): $PartData
public static "of"(dataResource0: $DataResource$$Type<$IGearPart$$Type>, itemStack1: $ItemStack$$Type): $IPartData
public "onAddToGear"(itemStack0: $ItemStack$$Type): void
public "onRemoveFromGear"(itemStack0: $ItemStack$$Type): void
public static "read"(compoundTag0: $CompoundTag$$Type): $PartData
public "serialize"(): $JsonObject
public "write"(compoundTag0: $CompoundTag$$Type): $CompoundTag
get "craftingItem"(): $ItemStack
get "gearType"(): $GearType
get "harvestTier"(): $Tier
get "id"(): $ResourceLocation
get "item"(): $ItemStack
get "materials"(): $MaterialList
get "modelKey"(): string
get "part"(): $IGearPart
get "partId"(): $ResourceLocation
get "tier"(): integer
get "traits"(): $Collection<$TraitInstance>
get "type"(): $PartType
}
}

declare module "net.silentchaos512.utils.Color" {
import { $JsonObject$$Type } from "com.google.gson.JsonObject"

export class $Color {
static readonly "ALICEBLUE": $Color
static readonly "ANTIQUEWHITE": $Color
static readonly "AQUA": $Color
static readonly "AQUAMARINE": $Color
static readonly "AZURE": $Color
static readonly "BEIGE": $Color
static readonly "BISQUE": $Color
static readonly "BLACK": $Color
static readonly "BLANCHEDALMOND": $Color
static readonly "BLUE": $Color
static readonly "BLUEVIOLET": $Color
static readonly "BROWN": $Color
static readonly "BURLYWOOD": $Color
static readonly "CADETBLUE": $Color
static readonly "CHARTREUSE": $Color
static readonly "CHOCOLATE": $Color
static readonly "CORAL": $Color
static readonly "CORNFLOWERBLUE": $Color
static readonly "CORNSILK": $Color
static readonly "CRIMSON": $Color
static readonly "CYAN": $Color
static readonly "DARKBLUE": $Color
static readonly "DARKCYAN": $Color
static readonly "DARKGOLDENROD": $Color
static readonly "DARKGRAY": $Color
static readonly "DARKGREEN": $Color
static readonly "DARKGREY": $Color
static readonly "DARKKHAKI": $Color
static readonly "DARKMAGENTA": $Color
static readonly "DARKOLIVEGREEN": $Color
static readonly "DARKORANGE": $Color
static readonly "DARKORCHID": $Color
static readonly "DARKRED": $Color
static readonly "DARKSALMON": $Color
static readonly "DARKSEAGREEN": $Color
static readonly "DARKSLATEBLUE": $Color
static readonly "DARKSLATEGRAY": $Color
static readonly "DARKSLATEGREY": $Color
static readonly "DARKTURQUOISE": $Color
static readonly "DARKVIOLET": $Color
static readonly "DEEPPINK": $Color
static readonly "DEEPSKYBLUE": $Color
static readonly "DIMGRAY": $Color
static readonly "DIMGREY": $Color
static readonly "DODGERBLUE": $Color
static readonly "FIREBRICK": $Color
static readonly "FLORALWHITE": $Color
static readonly "FORESTGREEN": $Color
static readonly "FUCHSIA": $Color
static readonly "GAINSBORO": $Color
static readonly "GHOSTWHITE": $Color
static readonly "GOLD": $Color
static readonly "GOLDENROD": $Color
static readonly "GRAY": $Color
static readonly "GREEN": $Color
static readonly "GREENYELLOW": $Color
static readonly "GREY": $Color
static readonly "HONEYDEW": $Color
static readonly "HOTPINK": $Color
static readonly "INDIANRED": $Color
static readonly "INDIGO": $Color
static readonly "IVORY": $Color
static readonly "KHAKI": $Color
static readonly "LAVENDER": $Color
static readonly "LAVENDERBLUSH": $Color
static readonly "LAWNGREEN": $Color
static readonly "LEMONCHIFFON": $Color
static readonly "LIGHTBLUE": $Color
static readonly "LIGHTCORAL": $Color
static readonly "LIGHTCYAN": $Color
static readonly "LIGHTGOLDENRODYELLOW": $Color
static readonly "LIGHTGRAY": $Color
static readonly "LIGHTGREEN": $Color
static readonly "LIGHTGREY": $Color
static readonly "LIGHTPINK": $Color
static readonly "LIGHTSALMON": $Color
static readonly "LIGHTSEAGREEN": $Color
static readonly "LIGHTSKYBLUE": $Color
static readonly "LIGHTSLATEGRAY": $Color
static readonly "LIGHTSLATEGREY": $Color
static readonly "LIGHTSTEELBLUE": $Color
static readonly "LIGHTYELLOW": $Color
static readonly "LIME": $Color
static readonly "LIMEGREEN": $Color
static readonly "LINEN": $Color
static readonly "MAGENTA": $Color
static readonly "MAROON": $Color
static readonly "MEDIUMAQUAMARINE": $Color
static readonly "MEDIUMBLUE": $Color
static readonly "MEDIUMORCHID": $Color
static readonly "MEDIUMPURPLE": $Color
static readonly "MEDIUMSEAGREEN": $Color
static readonly "MEDIUMSLATEBLUE": $Color
static readonly "MEDIUMSPRINGGREEN": $Color
static readonly "MEDIUMTURQUOISE": $Color
static readonly "MEDIUMVIOLETRED": $Color
static readonly "MIDNIGHTBLUE": $Color
static readonly "MINTCREAM": $Color
static readonly "MISTYROSE": $Color
static readonly "MOCCASIN": $Color
static readonly "NAVAJOWHITE": $Color
static readonly "NAVY": $Color
static readonly "OLDLACE": $Color
static readonly "OLIVE": $Color
static readonly "OLIVEDRAB": $Color
static readonly "ORANGE": $Color
static readonly "ORANGERED": $Color
static readonly "ORCHID": $Color
static readonly "PALEGOLDENROD": $Color
static readonly "PALEGREEN": $Color
static readonly "PALETURQUOISE": $Color
static readonly "PALEVIOLETRED": $Color
static readonly "PAPAYAWHIP": $Color
static readonly "PEACHPUFF": $Color
static readonly "PERU": $Color
static readonly "PINK": $Color
static readonly "PLUM": $Color
static readonly "POWDERBLUE": $Color
static readonly "PURPLE": $Color
static readonly "REBECCAPURPLE": $Color
static readonly "RED": $Color
static readonly "ROSYBROWN": $Color
static readonly "ROYALBLUE": $Color
static readonly "SADDLEBROWN": $Color
static readonly "SALMON": $Color
static readonly "SANDYBROWN": $Color
static readonly "SEAGREEN": $Color
static readonly "SEASHELL": $Color
static readonly "SIENNA": $Color
static readonly "SILVER": $Color
static readonly "SKYBLUE": $Color
static readonly "SLATEBLUE": $Color
static readonly "SLATEGRAY": $Color
static readonly "SLATEGREY": $Color
static readonly "SNOW": $Color
static readonly "SPRINGGREEN": $Color
static readonly "STEELBLUE": $Color
static readonly "TAN": $Color
static readonly "TEAL": $Color
static readonly "THISTLE": $Color
static readonly "TOMATO": $Color
static readonly "TURQUOISE": $Color
static readonly "VALUE_WHITE": integer
static readonly "VIOLET": $Color
static readonly "WHEAT": $Color
static readonly "WHITE": $Color
static readonly "WHITESMOKE": $Color
static readonly "YELLOW": $Color
static readonly "YELLOWGREEN": $Color

constructor(int0: integer, int1: integer, int2: integer, int3: integer)
constructor(int0: integer, int1: integer, int2: integer)
constructor(int0: integer)
constructor(float0: float, float1: float, float2: float)
constructor(float0: float, float1: float, float2: float, float3: float)

public static "blend"(color0: $Color$$Type, color1: $Color$$Type): $Color
public static "blend"(color0: $Color$$Type, color1: $Color$$Type, float2: float): $Color
public static "blend"(int0: integer, int1: integer): integer
public static "blend"(int0: integer, int1: integer, float2: float): integer
public "blendWith"(color0: $Color$$Type): $Color
public static "format"(int0: integer): string
public static "from"(jsonObject0: $JsonObject$$Type, string1: string, int2: integer): $Color
public "getAlpha"(): float
public "getAlphaInt"(): integer
public "getBlue"(): float
public "getBlueInt"(): integer
public "getColor"(): integer
public "getGreen"(): float
public "getGreenInt"(): integer
public "getRed"(): float
public "getRedInt"(): integer
public static "parse"(string0: string): $Color
public static "parseInt"(string0: string): integer
public static "tryParse"(string0: string, int1: integer): $Color
public static "validate"(string0: string): boolean
get "alpha"(): float
get "alphaInt"(): integer
get "blue"(): float
get "blueInt"(): integer
get "color"(): integer
get "green"(): float
get "greenInt"(): integer
get "red"(): float
get "redInt"(): integer
}
}

declare module "net.silentchaos512.gear.api.material.IMaterialInstance" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject } from "com.google.gson.JsonObject"
import { $Tier } from "net.minecraft.world.item.Tier"
import { $IItemStat$$Type } from "net.silentchaos512.gear.api.stats.IItemStat"
import { $MaterialGrade } from "net.silentchaos512.gear.api.part.MaterialGrade"
import { $DataResource$$Type } from "net.silentchaos512.gear.api.util.DataResource"
import { $IMaterialModifier } from "net.silentchaos512.gear.api.material.modifier.IMaterialModifier"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $PartGearKey$$Type } from "net.silentchaos512.gear.api.util.PartGearKey"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"
import { $IMaterialDisplay } from "net.silentchaos512.gear.api.material.IMaterialDisplay"
import { $IMaterialCategory, $IMaterialCategory$$Type } from "net.silentchaos512.gear.api.material.IMaterialCategory"
import { $StatInstance } from "net.silentchaos512.gear.api.stats.StatInstance"
import { $IGearComponentInstance } from "net.silentchaos512.gear.api.util.IGearComponentInstance"
import { $Component } from "net.minecraft.network.chat.Component"
import { $StatGearKey, $StatGearKey$$Type } from "net.silentchaos512.gear.api.util.StatGearKey"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $PartType, $PartType$$Type } from "net.silentchaos512.gear.api.part.PartType"
import { $GearType$$Type } from "net.silentchaos512.gear.api.item.GearType"
import { $IMaterial, $IMaterial$$Type } from "net.silentchaos512.gear.api.material.IMaterial"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $MaterialList } from "net.silentchaos512.gear.api.material.MaterialList"
import { $TraitInstance } from "net.silentchaos512.gear.api.traits.TraitInstance"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $IMaterialInstance extends $IGearComponentInstance<$IMaterial> {
"allowedInPart"(partType0: $PartType$$Type): boolean
"containsMaterial"(dataResource0: $DataResource$$Type<$IMaterial$$Type>): boolean
"get"(): $IMaterial
"getCategories"(): $Collection<$IMaterialCategory>
"getDisplayName"(partType0: $PartType$$Type, itemStack1: $ItemStack$$Type): $Component
"getDisplayName"(partType0: $PartType$$Type): $Component
"getDisplayNameWithModifiers"(partType0: $PartType$$Type, itemStack1: $ItemStack$$Type): $MutableComponent
"getDisplayProperties"(): $IMaterialDisplay
/** @deprecated */
"getGrade"(): $MaterialGrade
"getHarvestTier"(): $Tier
"getId"(): $ResourceLocation
"getIngredient"(): $Ingredient
"getItem"(): $ItemStack
/** @deprecated */
"getMaterial"(): $IMaterial
/** @deprecated */
"getMaterialId"(): $ResourceLocation
"getMaterials"(): $MaterialList
"getModelKey"(): string
"getModifiers"(): $Collection<$IMaterialModifier>
"getNameColor"(partType0: $PartType$$Type, gearType1: $GearType$$Type): integer
"getPartTypes"(): $Set<$PartType>
"getStat"(partType0: $PartType$$Type, iItemStat1: $IItemStat$$Type): float
"getStat"(partType0: $PartType$$Type, statGearKey1: $StatGearKey$$Type, itemStack2: $ItemStack$$Type): float
"getStat"(partType0: $PartType$$Type, statGearKey1: $StatGearKey$$Type): float
"getStatKeys"(partType0: $PartType$$Type): $Collection<$StatGearKey>
"getStatModifiers"(partType0: $PartType$$Type, statGearKey1: $StatGearKey$$Type, itemStack2: $ItemStack$$Type): $Collection<$StatInstance>
"getStatModifiers"(partType0: $PartType$$Type, statGearKey1: $StatGearKey$$Type): $Collection<$StatInstance>
"getTier"(): integer
"getTier"(partType0: $PartType$$Type): integer
"getTraits"(partType0: $PartType$$Type, gearType1: $GearType$$Type, itemStack2: $ItemStack$$Type): $Collection<$TraitInstance>
"getTraits"(partGearKey0: $PartGearKey$$Type, itemStack1: $ItemStack$$Type): $Collection<$TraitInstance>
"getTraits"(partType0: $PartType$$Type): $Collection<$TraitInstance>
"hasAnyCategory"(collection0: $Collection$$Type<$IMaterialCategory$$Type>): boolean
"isCraftingAllowed"(partType0: $PartType$$Type, gearType1: $GearType$$Type): boolean
"isSimple"(): boolean
"onSalvage"(): $IMaterialInstance
"serialize"(): $JsonObject
"write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
"write"(compoundTag0: $CompoundTag$$Type): $CompoundTag
get "categories"(): $Collection<$IMaterialCategory>
get "displayProperties"(): $IMaterialDisplay
get "grade"(): $MaterialGrade
get "harvestTier"(): $Tier
get "id"(): $ResourceLocation
get "ingredient"(): $Ingredient
get "item"(): $ItemStack
get "material"(): $IMaterial
get "materialId"(): $ResourceLocation
get "materials"(): $MaterialList
get "modelKey"(): string
get "modifiers"(): $Collection<$IMaterialModifier>
get "partTypes"(): $Set<$PartType>
get "tier"(): integer
get "simple"(): boolean
}

export namespace $IMaterialInstance {
const probejs$$marker: never
}
export abstract class $IMaterialInstance$$Static implements $IMaterialInstance {
}
}

declare module "net.silentchaos512.gear.api.event.GearNamePrefixesEvent" {
import { $PartData$$Type } from "net.silentchaos512.gear.gear.part.PartData"
import { $Component } from "net.minecraft.network.chat.Component"
import { $GearItemEvent } from "net.silentchaos512.gear.api.event.GearItemEvent"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $GearNamePrefixesEvent extends $GearItemEvent {
constructor(itemStack0: $ItemStack$$Type, collection1: $Collection$$Type<$PartData$$Type>)
constructor()

public "getPrefixes"(): $Collection<$Component>
get "prefixes"(): $Collection<$Component>
}
}

declare module "net.silentchaos512.gear.api.stats.ItemStat$Properties" {
import { $ItemStat$DisplayFormat$$Type } from "net.silentchaos512.gear.api.stats.ItemStat$DisplayFormat"
import { $StatInstance$Operation$$Type } from "net.silentchaos512.gear.api.stats.StatInstance$Operation"
import { $Function$$Type } from "java.util.function.Function"

export class $ItemStat$Properties {
constructor()

public "affectedByGrades"(boolean0: boolean): $ItemStat$Properties
public "baseValue"(float0: float): $ItemStat$Properties
public "defaultOp"(operation0: $StatInstance$Operation$$Type): $ItemStat$Properties
public "displayAsInt"(): $ItemStat$Properties
/** @deprecated */
public "displayAsMultiplier"(): $ItemStat$Properties
public "displayFormat"(displayFormat0: $ItemStat$DisplayFormat$$Type): $ItemStat$Properties
public "hidden"(): $ItemStat$Properties
/** @deprecated */
public "missingRodFunction"(function0: $Function$$Type<float, float>): $ItemStat$Properties
public "synergyApplies"(): $ItemStat$Properties
}
}

declare module "net.silentchaos512.gear.api.material.IMaterial" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Tier } from "net.minecraft.world.item.Tier"
import { $Component } from "net.minecraft.network.chat.Component"
import { $StatGearKey, $StatGearKey$$Type } from "net.silentchaos512.gear.api.util.StatGearKey"
import { $IMaterialSerializer } from "net.silentchaos512.gear.api.material.IMaterialSerializer"
import { $SyncMaterialCraftingItemsPacket$$Type } from "net.silentchaos512.gear.network.SyncMaterialCraftingItemsPacket"
import { $Collection } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $PartGearKey$$Type } from "net.silentchaos512.gear.api.util.PartGearKey"
import { $IGearComponent } from "net.silentchaos512.gear.api.util.IGearComponent"
import { $PartType, $PartType$$Type } from "net.silentchaos512.gear.api.part.PartType"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"
import { $GearType$$Type } from "net.silentchaos512.gear.api.item.GearType"
import { $Container$$Type } from "net.minecraft.world.Container"
import { $IMaterialDisplay } from "net.silentchaos512.gear.api.material.IMaterialDisplay"
import { $IMaterialInstance, $IMaterialInstance$$Type } from "net.silentchaos512.gear.api.material.IMaterialInstance"
import { $MaterialList } from "net.silentchaos512.gear.api.material.MaterialList"
import { $TraitInstance } from "net.silentchaos512.gear.api.traits.TraitInstance"
import { $Optional } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $IMaterialCategory } from "net.silentchaos512.gear.api.material.IMaterialCategory"
import { $StatInstance } from "net.silentchaos512.gear.api.stats.StatInstance"

export interface $IMaterial extends $IGearComponent<$IMaterialInstance> {
"allowedInPart"(iMaterialInstance0: $IMaterialInstance$$Type, partType1: $PartType$$Type): boolean
"canSalvage"(): boolean
"getCategories"(iMaterialInstance0: $IMaterialInstance$$Type): $Collection<$IMaterialCategory>
/** @deprecated */
"getCategories"(): $Collection<$IMaterialCategory>
"getDisplayItem"(partType0: $PartType$$Type, int1: integer): $ItemStack
"getDisplayName"(iMaterialInstance0: $IMaterialInstance$$Type, partType1: $PartType$$Type, itemStack2: $ItemStack$$Type): $Component
"getDisplayNamePrefix"(itemStack0: $ItemStack$$Type, partType1: $PartType$$Type): $Component
"getDisplayOverride"(iMaterialInstance0: $IMaterialInstance$$Type): $IMaterialDisplay
"getDisplayProperties"(iMaterialInstance0: $IMaterialInstance$$Type): $IMaterialDisplay
"getHarvestTier"(iMaterialInstance0: $IMaterialInstance$$Type): $Tier
"getId"(): $ResourceLocation
"getIngredient"(): $Ingredient
"getMaterials"(iMaterialInstance0: $IMaterialInstance$$Type): $MaterialList
"getModelKey"(iMaterialInstance0: $IMaterialInstance$$Type): string
"getNameColor"(iMaterialInstance0: $IMaterialInstance$$Type, partType1: $PartType$$Type, gearType2: $GearType$$Type): integer
"getPackName"(): string
"getParent"(): $IMaterial
"getParentOptional"(): $Optional<$IMaterial>
"getPartSubstitute"(partType0: $PartType$$Type): $Optional<$Ingredient>
"getPartTypes"(iMaterialInstance0: $IMaterialInstance$$Type): $Set<$PartType>
"getSerializer"(): $IMaterialSerializer<any>
"getStat"(iMaterialInstance0: $IMaterialInstance$$Type, partType1: $PartType$$Type, statGearKey2: $StatGearKey$$Type, itemStack3: $ItemStack$$Type): float
"getStatKeys"(iMaterialInstance0: $IMaterialInstance$$Type, partType1: $PartType$$Type): $Collection<$StatGearKey>
"getStatModifiers"(iMaterialInstance0: $IMaterialInstance$$Type, partType1: $PartType$$Type, statGearKey2: $StatGearKey$$Type, itemStack3: $ItemStack$$Type): $Collection<$StatInstance>
"getStatModifiers"(iMaterialInstance0: $IMaterialInstance$$Type, partType1: $PartType$$Type, statGearKey2: $StatGearKey$$Type): $Collection<$StatInstance>
"getStatUnclamped"(iMaterialInstance0: $IMaterialInstance$$Type, partType1: $PartType$$Type, statGearKey2: $StatGearKey$$Type, itemStack3: $ItemStack$$Type): float
/** @deprecated */
"getTier"(partType0: $PartType$$Type): integer
"getTier"(iMaterialInstance0: $IMaterialInstance$$Type, partType1: $PartType$$Type): integer
"getTraits"(iMaterialInstance0: $IMaterialInstance$$Type, partGearKey1: $PartGearKey$$Type, itemStack2: $ItemStack$$Type): $Collection<$TraitInstance>
"hasPartSubstitutes"(): boolean
"isCraftingAllowed"(iMaterialInstance0: $IMaterialInstance$$Type, partType1: $PartType$$Type, gearType2: $GearType$$Type, container3: $Container$$Type): boolean
"isCraftingAllowed"(iMaterialInstance0: $IMaterialInstance$$Type, partType1: $PartType$$Type, gearType2: $GearType$$Type): boolean
"isSimple"(): boolean
"isVisible"(partType0: $PartType$$Type): boolean
"onSalvage"(iMaterialInstance0: $IMaterialInstance$$Type): $IMaterialInstance
"retainData"(iMaterial0: $IMaterial$$Type): void
"updateIngredient"(syncMaterialCraftingItemsPacket0: $SyncMaterialCraftingItemsPacket$$Type): void
get "categories"(): $Collection<$IMaterialCategory>
get "id"(): $ResourceLocation
get "ingredient"(): $Ingredient
get "packName"(): string
get "parent"(): $IMaterial
get "parentOptional"(): $Optional<$IMaterial>
get "serializer"(): $IMaterialSerializer<any>
get "simple"(): boolean
}

export namespace $IMaterial {
const probejs$$marker: never
}
export abstract class $IMaterial$$Static implements $IMaterial {
}
}

declare module "net.silentchaos512.gear.api.item.GearType" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $ItemStat } from "net.silentchaos512.gear.api.stats.ItemStat"
import { $ICoreItem } from "net.silentchaos512.gear.api.item.ICoreItem"
import { $Component } from "net.minecraft.network.chat.Component"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $Collection } from "java.util.Collection"
import { $GearType$Builder$$Type } from "net.silentchaos512.gear.api.item.GearType$Builder"
import { $Set } from "java.util.Set"
import { $Optional } from "java.util.Optional"
import { $GearTypeMatcher } from "net.silentchaos512.gear.api.item.GearTypeMatcher"

export class $GearType {
static readonly "ALL": $GearType
static readonly "ARMOR": $GearType
static readonly "ARROW": $GearType
static readonly "AXE": $GearType
static readonly "BOOTS": $GearType
static readonly "BOW": $GearType
static readonly "BRACELET": $GearType
static readonly "CHESTPLATE": $GearType
static readonly "CROSSBOW": $GearType
static readonly "CURIO": $GearType
static readonly "DAGGER": $GearType
static readonly "ELYTRA": $GearType
static readonly "EXCAVATOR": $GearType
static readonly "FISHING_ROD": $GearType
static readonly "FRAGMENT": $GearType
static readonly "HAMMER": $GearType
static readonly "HARVEST_TOOL": $GearType
static readonly "HELMET": $GearType
static readonly "HOE": $GearType
static readonly "KATANA": $GearType
static readonly "KNIFE": $GearType
static readonly "LEGGINGS": $GearType
static readonly "MACHETE": $GearType
static readonly "MATTOCK": $GearType
static readonly "MELEE_WEAPON": $GearType
static readonly "NONE": $GearType
static readonly "PART": $GearType
static readonly "PAXEL": $GearType
static readonly "PICKAXE": $GearType
static readonly "PROJECTILE": $GearType
static readonly "PROSPECTOR_HAMMER": $GearType
static readonly "RANGED_WEAPON": $GearType
static readonly "RING": $GearType
static readonly "SAW": $GearType
static readonly "SHEARS": $GearType
static readonly "SHIELD": $GearType
static readonly "SHOVEL": $GearType
static readonly "SICKLE": $GearType
static readonly "SLINGSHOT": $GearType
static readonly "SPEAR": $GearType
static readonly "SWORD": $GearType
static readonly "TOOL": $GearType
static readonly "TRIDENT": $GearType
static readonly "WEAPON": $GearType

public "canPerformAction"(toolAction0: $ToolAction$$Type): boolean
public static "fromJson"(jsonObject0: $JsonObject$$Type, string1: string): $GearType
public static "get"(string0: string): $GearType
public "getAnimationFrames"(): integer
public "getArmorDurabilityMultiplier"(): float
public "getDisplayName"(): $Component
public "getDurabilityStat"(): $ItemStat
public "getExcludedStats"(): $Set<$ItemStat>
public "getItem"(): $Optional<$ICoreItem>
public "getMatcher"(boolean0: boolean): $GearTypeMatcher
public "getName"(): string
public static "getOrCreate"(string0: string): $GearType
public static "getOrCreate"(string0: string, gearType1: $GearType$$Type, consumer2: $Consumer$$Type<$GearType$Builder$$Type>): $GearType
public static "getOrCreate"(string0: string, gearType1: $GearType$$Type): $GearType
public "getParent"(): $GearType
public "getRelevantStats"(): $Collection<$ItemStat>
public "isArmor"(): boolean
public "isGear"(): boolean
public "isInvalid"(): boolean
public "matches"(string0: string): boolean
public "matches"(string0: string, boolean1: boolean): boolean
public "matches"(gearType0: $GearType$$Type): boolean
public "matches"(gearType0: $GearType$$Type, boolean1: boolean): boolean
get "animationFrames"(): integer
get "armorDurabilityMultiplier"(): float
get "displayName"(): $Component
get "durabilityStat"(): $ItemStat
get "excludedStats"(): $Set<$ItemStat>
get "item"(): $Optional<$ICoreItem>
get "name"(): string
get "parent"(): $GearType
get "relevantStats"(): $Collection<$ItemStat>
get "armor"(): boolean
get "gear"(): boolean
get "invalid"(): boolean
}
}

declare module "net.silentchaos512.gear.api.traits.ITraitConditionSerializer" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $ITraitCondition, $ITraitCondition$$Type } from "net.silentchaos512.gear.api.traits.ITraitCondition"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export interface $ITraitConditionSerializer<T extends $ITraitCondition = $ITraitCondition> {
"deserialize"(jsonObject0: $JsonObject$$Type): T
"getId"(): $ResourceLocation
"read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): T
"serialize"(t0: T, jsonObject1: $JsonObject$$Type): void
"serialize"(t0: T): $JsonObject
"write"(t0: T, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
get "id"(): $ResourceLocation
}

export namespace $ITraitConditionSerializer {
const probejs$$marker: never
}
export abstract class $ITraitConditionSerializer$$Static<T extends $ITraitCondition = $ITraitCondition> implements $ITraitConditionSerializer<T> {
}
}

declare module "net.silentchaos512.gear.gear.material.MaterialInstance" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject } from "com.google.gson.JsonObject"
import { $Tier } from "net.minecraft.world.item.Tier"
import { $IItemStat$$Type } from "net.silentchaos512.gear.api.stats.IItemStat"
import { $MaterialGrade, $MaterialGrade$$Type } from "net.silentchaos512.gear.api.part.MaterialGrade"
import { $DataResource$$Type } from "net.silentchaos512.gear.api.util.DataResource"
import { $IMaterialModifier } from "net.silentchaos512.gear.api.material.modifier.IMaterialModifier"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $PartGearKey$$Type } from "net.silentchaos512.gear.api.util.PartGearKey"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"
import { $IMaterialDisplay } from "net.silentchaos512.gear.api.material.IMaterialDisplay"
import { $IMaterialCategory, $IMaterialCategory$$Type } from "net.silentchaos512.gear.api.material.IMaterialCategory"
import { $StatInstance } from "net.silentchaos512.gear.api.stats.StatInstance"
import { $Component } from "net.minecraft.network.chat.Component"
import { $StatGearKey, $StatGearKey$$Type } from "net.silentchaos512.gear.api.util.StatGearKey"
import { $RepairContext$Type$$Type } from "net.silentchaos512.gear.gear.part.RepairContext$Type"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $PartType, $PartType$$Type } from "net.silentchaos512.gear.api.part.PartType"
import { $GearType$$Type } from "net.silentchaos512.gear.api.item.GearType"
import { $IMaterial, $IMaterial$$Type } from "net.silentchaos512.gear.api.material.IMaterial"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $MaterialList } from "net.silentchaos512.gear.api.material.MaterialList"
import { $TraitInstance } from "net.silentchaos512.gear.api.traits.TraitInstance"
import { $IMaterialInstance, $IMaterialInstance$$Type } from "net.silentchaos512.gear.api.material.IMaterialInstance"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $MaterialInstance implements $IMaterialInstance {
public "allowedInPart"(partType0: $PartType$$Type): boolean
public "canRepair"(itemStack0: $ItemStack$$Type): boolean
public "containsMaterial"(dataResource0: $DataResource$$Type<$IMaterial$$Type>): boolean
public static "from"(itemStack0: $ItemStack$$Type): $MaterialInstance
public "getCategories"(): $Collection<$IMaterialCategory>
public "getDisplayName"(partType0: $PartType$$Type, itemStack1: $ItemStack$$Type): $Component
public "getDisplayName"(partType0: $PartType$$Type): $Component
public "getDisplayNameWithModifiers"(partType0: $PartType$$Type, itemStack1: $ItemStack$$Type): $MutableComponent
public "getDisplayProperties"(): $IMaterialDisplay
public "getGrade"(): $MaterialGrade
public "getHarvestTier"(): $Tier
public "getId"(): $ResourceLocation
public "getIngredient"(): $Ingredient
public "getItem"(): $ItemStack
/** @deprecated */
public "getMaterial"(): $IMaterial
/** @deprecated */
public "getMaterialId"(): $ResourceLocation
public "getMaterials"(): $MaterialList
public "getModelKey"(): string
public "getModifiers"(): $Collection<$IMaterialModifier>
public "getNameColor"(partType0: $PartType$$Type, gearType1: $GearType$$Type): integer
public "getPartTypes"(): $Set<$PartType>
public "getPrimaryColor"(gearType0: $GearType$$Type, partType1: $PartType$$Type): integer
public "getRepairValue"(itemStack0: $ItemStack$$Type, type1: $RepairContext$Type$$Type): integer
public "getRepairValue"(itemStack0: $ItemStack$$Type): integer
public "getStat"(partType0: $PartType$$Type, statGearKey1: $StatGearKey$$Type, itemStack2: $ItemStack$$Type): float
public "getStat"(partType0: $PartType$$Type, iItemStat1: $IItemStat$$Type): float
public "getStat"(partType0: $PartType$$Type, statGearKey1: $StatGearKey$$Type): float
public "getStatKeys"(partType0: $PartType$$Type): $Collection<$StatGearKey>
public "getStatModifiers"(partType0: $PartType$$Type, statGearKey1: $StatGearKey$$Type, itemStack2: $ItemStack$$Type): $Collection<$StatInstance>
public "getStatModifiers"(partType0: $PartType$$Type, statGearKey1: $StatGearKey$$Type): $Collection<$StatInstance>
public "getTier"(partType0: $PartType$$Type): integer
public "getTier"(): integer
public "getTraits"(partGearKey0: $PartGearKey$$Type, itemStack1: $ItemStack$$Type): $Collection<$TraitInstance>
public "getTraits"(partType0: $PartType$$Type, gearType1: $GearType$$Type, itemStack2: $ItemStack$$Type): $Collection<$TraitInstance>
public "getTraits"(partType0: $PartType$$Type): $Collection<$TraitInstance>
public "hasAnyCategory"(collection0: $Collection$$Type<$IMaterialCategory$$Type>): boolean
public "isCraftingAllowed"(partType0: $PartType$$Type, gearType1: $GearType$$Type): boolean
public "isSimple"(): boolean
public static "of"(iMaterial0: $IMaterial$$Type): $MaterialInstance
public static "of"(iMaterial0: $IMaterial$$Type, materialGrade1: $MaterialGrade$$Type): $MaterialInstance
public static "of"(dataResource0: $DataResource$$Type<$IMaterial$$Type>, itemStack1: $ItemStack$$Type): $IMaterialInstance
public static "of"(iMaterial0: $IMaterial$$Type, itemStack1: $ItemStack$$Type): $MaterialInstance
public static "of"(iMaterial0: $IMaterial$$Type, materialGrade1: $MaterialGrade$$Type, itemStack2: $ItemStack$$Type): $MaterialInstance
public "onSalvage"(): $IMaterialInstance
public static "read"(compoundTag0: $CompoundTag$$Type): $MaterialInstance
public static "readShorthand"(string0: string): $MaterialInstance
public "serialize"(): $JsonObject
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "write"(compoundTag0: $CompoundTag$$Type): $CompoundTag
/** @deprecated */
public static "writeShorthand"(iMaterialInstance0: $IMaterialInstance$$Type): string
get "categories"(): $Collection<$IMaterialCategory>
get "displayProperties"(): $IMaterialDisplay
get "grade"(): $MaterialGrade
get "harvestTier"(): $Tier
get "id"(): $ResourceLocation
get "ingredient"(): $Ingredient
get "item"(): $ItemStack
get "material"(): $IMaterial
get "materialId"(): $ResourceLocation
get "materials"(): $MaterialList
get "modelKey"(): string
get "modifiers"(): $Collection<$IMaterialModifier>
get "partTypes"(): $Set<$PartType>
get "tier"(): integer
get "simple"(): boolean
}
}

declare module "net.silentchaos512.gear.api.material.modifier.IMaterialModifierType" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $IMaterialInstance$$Type } from "net.silentchaos512.gear.api.material.IMaterialInstance"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $IMaterialModifier, $IMaterialModifier$$Type } from "net.silentchaos512.gear.api.material.modifier.IMaterialModifier"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export interface $IMaterialModifierType<T extends $IMaterialModifier = $IMaterialModifier> {
"deserialize"(jsonObject0: $JsonObject$$Type): T
"getId"(): $ResourceLocation
"read"(compoundTag0: $CompoundTag$$Type): T
"read"(iMaterialInstance0: $IMaterialInstance$$Type): T
"readFromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): T
"removeModifier"(itemStack0: $ItemStack$$Type): void
"serialize"(t0: T): $JsonObject
"write"(t0: T, itemStack1: $ItemStack$$Type): void
"write"(t0: T, compoundTag1: $CompoundTag$$Type): void
"writeToNetwork"(t0: T, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
get "id"(): $ResourceLocation
}

export namespace $IMaterialModifierType {
const probejs$$marker: never
}
export abstract class $IMaterialModifierType$$Static<T extends $IMaterialModifier = $IMaterialModifier> implements $IMaterialModifierType<T> {
}
}

declare module "net.silentchaos512.gear.network.SyncMaterialCraftingItemsPacket" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $IMaterial$$Type } from "net.silentchaos512.gear.api.material.IMaterial"
import { $Collection$$Type } from "java.util.Collection"
import { $Map } from "java.util.Map"
import { $NetworkEvent$Context } from "net.minecraftforge.network.NetworkEvent$Context"
import { $Optional } from "java.util.Optional"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"
import { $PartType } from "net.silentchaos512.gear.api.part.PartType"

export class $SyncMaterialCraftingItemsPacket {
constructor()
constructor(collection0: $Collection$$Type<$IMaterial$$Type>)

public static "decode"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $SyncMaterialCraftingItemsPacket
public "encode"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "getIngredient"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Ingredient>
public "getPartSubstitutes"(resourceLocation0: $ResourceLocation$$Type): $Map<$PartType, $Ingredient>
public "handle"(supplier0: $Supplier$$Type<$NetworkEvent$Context>): void
public "isValid"(): boolean
get "valid"(): boolean
}
}

declare module "net.silentchaos512.gear.api.traits.ITraitCondition" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $IGearComponentInstance$$Type } from "net.silentchaos512.gear.api.util.IGearComponentInstance"
import { $List$$Type } from "java.util.List"
import { $ITrait$$Type } from "net.silentchaos512.gear.api.traits.ITrait"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $PartGearKey$$Type } from "net.silentchaos512.gear.api.util.PartGearKey"
import { $ITraitConditionSerializer } from "net.silentchaos512.gear.api.traits.ITraitConditionSerializer"

export interface $ITraitCondition {
"getDisplayText"(): $MutableComponent
"getId"(): $ResourceLocation
"getSerializer"(): $ITraitConditionSerializer<any>
"matches"(iTrait0: $ITrait$$Type, partGearKey1: $PartGearKey$$Type, itemStack2: $ItemStack$$Type, list3: $List$$Type<$IGearComponentInstance$$Type<any>>): boolean
get "displayText"(): $MutableComponent
get "id"(): $ResourceLocation
get "serializer"(): $ITraitConditionSerializer<any>
}

export namespace $ITraitCondition {
const probejs$$marker: never
}
export abstract class $ITraitCondition$$Static implements $ITraitCondition {
}
}

declare module "net.silentchaos512.gear.api.event.GetTraitsEvent" {
import { $ITrait, $ITrait$$Type } from "net.silentchaos512.gear.api.traits.ITrait"
import { $PartDataList$$Type } from "net.silentchaos512.gear.api.part.PartDataList"
import { $GearItemEvent } from "net.silentchaos512.gear.api.event.GearItemEvent"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $GetTraitsEvent extends $GearItemEvent {
constructor(itemStack0: $ItemStack$$Type, partDataList1: $PartDataList$$Type, map2: $Map$$Type<$ITrait$$Type, integer>)
constructor()

public "getTraits"(): $Map<$ITrait, integer>
get "traits"(): $Map<$ITrait, integer>
}
}

declare module "net.silentchaos512.gear.api.event.GetMaterialStatsEvent" {
import { $ItemStat, $ItemStat$$Type } from "net.silentchaos512.gear.api.stats.ItemStat"
import { $List } from "java.util.List"
import { $MaterialInstance, $MaterialInstance$$Type } from "net.silentchaos512.gear.gear.material.MaterialInstance"
import { $Collection$$Type } from "java.util.Collection"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $PartType, $PartType$$Type } from "net.silentchaos512.gear.api.part.PartType"
import { $StatInstance, $StatInstance$$Type } from "net.silentchaos512.gear.api.stats.StatInstance"

export class $GetMaterialStatsEvent extends $Event {
constructor(materialInstance0: $MaterialInstance$$Type, itemStat1: $ItemStat$$Type, partType2: $PartType$$Type, collection3: $Collection$$Type<$StatInstance$$Type>)
constructor()

public "getMaterial"(): $MaterialInstance
public "getModifiers"(): $List<$StatInstance>
public "getPartType"(): $PartType
public "getStat"(): $ItemStat
get "material"(): $MaterialInstance
get "modifiers"(): $List<$StatInstance>
get "partType"(): $PartType
get "stat"(): $ItemStat
}
}

declare module "net.silentchaos512.gear.api.util.IStatModProvider" {
import { $StatGearKey$$Type } from "net.silentchaos512.gear.api.util.StatGearKey"
import { $Collection } from "java.util.Collection"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $PartType$$Type } from "net.silentchaos512.gear.api.part.PartType"
import { $StatInstance } from "net.silentchaos512.gear.api.stats.StatInstance"

export interface $IStatModProvider<D = any> {
"getStat"(d0: D, partType1: $PartType$$Type, statGearKey2: $StatGearKey$$Type, itemStack3: $ItemStack$$Type): float
"getStatModifiers"(d0: D, partType1: $PartType$$Type, statGearKey2: $StatGearKey$$Type, itemStack3: $ItemStack$$Type): $Collection<$StatInstance>
"getStatModifiers"(d0: D, partType1: $PartType$$Type, statGearKey2: $StatGearKey$$Type): $Collection<$StatInstance>
"getStatUnclamped"(d0: D, partType1: $PartType$$Type, statGearKey2: $StatGearKey$$Type, itemStack3: $ItemStack$$Type): float
}

export namespace $IStatModProvider {
const probejs$$marker: never
}
export abstract class $IStatModProvider$$Static<D = any> implements $IStatModProvider<D> {
}
}

declare module "net.silentchaos512.gear.api.material.IMaterialSerializer" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $IMaterial, $IMaterial$$Type } from "net.silentchaos512.gear.api.material.IMaterial"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export interface $IMaterialSerializer<T extends $IMaterial = $IMaterial> {
"deserialize"(resourceLocation0: $ResourceLocation$$Type, string1: string, jsonObject2: $JsonObject$$Type): T
"getName"(): $ResourceLocation
"read"(resourceLocation0: $ResourceLocation$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): T
"write"(friendlyByteBuf0: $FriendlyByteBuf$$Type, t1: T): void
get "name"(): $ResourceLocation
}

export namespace $IMaterialSerializer {
const probejs$$marker: never
}
export abstract class $IMaterialSerializer$$Static<T extends $IMaterial = $IMaterial> implements $IMaterialSerializer<T> {
}
}

declare module "net.silentchaos512.gear.api.material.IMaterialCategory" {
import { $Component } from "net.minecraft.network.chat.Component"

export interface $IMaterialCategory {
"getDisplayName"(): $Component
"getName"(): string
"matches"(iMaterialCategory0: $IMaterialCategory$$Type): boolean
get "displayName"(): $Component
get "name"(): string
}

export namespace $IMaterialCategory {
const probejs$$marker: never
}
export abstract class $IMaterialCategory$$Static implements $IMaterialCategory {
}
}

declare module "net.silentchaos512.gear.api.part.PartType" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $Collection } from "java.util.Collection"
import { $DataResource$$Type } from "net.silentchaos512.gear.api.util.DataResource"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $PartTextures } from "net.silentchaos512.gear.client.model.PartTextures"
import { $GearType$$Type } from "net.silentchaos512.gear.api.item.GearType"
import { $IMaterial$$Type } from "net.silentchaos512.gear.api.material.IMaterial"
import { $List$$Type } from "java.util.List"
import { $IPartData } from "net.silentchaos512.gear.api.part.IPartData"
import { $IMaterialInstance$$Type } from "net.silentchaos512.gear.api.material.IMaterialInstance"
import { $Optional } from "java.util.Optional"
import { $PartType$Builder$$Type } from "net.silentchaos512.gear.api.part.PartType$Builder"
import { $CompoundPartItem } from "net.silentchaos512.gear.item.CompoundPartItem"

export class $PartType {
static readonly "ADORNMENT": $PartType
static readonly "BINDING": $PartType
static readonly "COATING": $PartType
static readonly "CORD": $PartType
static readonly "FLETCHING": $PartType
static readonly "GRIP": $PartType
static readonly "LINING": $PartType
static readonly "MAIN": $PartType
static readonly "MISC_UPGRADE": $PartType
static readonly "NONE": $PartType
static readonly "ROD": $PartType
static readonly "TIP": $PartType

public static "create"(builder0: $PartType$Builder$$Type): $PartType
public static "fromJson"(jsonObject0: $JsonObject$$Type, string1: string): $PartType
public static "get"(resourceLocation0: $ResourceLocation$$Type): $PartType
public "getCompoundPartId"(gearType0: $GearType$$Type): $ResourceLocation
public "getCompoundPartItem"(gearType0: $GearType$$Type): $Optional<$CompoundPartItem>
public "getDefaultTexture"(): $PartTextures
public "getDisplayName"(int0: integer): $MutableComponent
public "getMaxPerItem"(gearType0: $GearType$$Type): integer
public "getName"(): $ResourceLocation
public static "getNonNull"(resourceLocation0: $ResourceLocation$$Type): $PartType
public "getShortName"(): string
public static "getValues"(): $Collection<$PartType>
public "isInvalid"(): boolean
public "isRemovable"(): boolean
public "isUpgrade"(): boolean
public "makeCompoundPart"(gearType0: $GearType$$Type, list1: $List$$Type<$IMaterialInstance$$Type>): $Optional<$IPartData>
public "makeCompoundPart"(gearType0: $GearType$$Type, dataResource1: $DataResource$$Type<$IMaterial$$Type>): $Optional<$IPartData>
get "defaultTexture"(): $PartTextures
get "name"(): $ResourceLocation
get "shortName"(): string
get "invalid"(): boolean
get "removable"(): boolean
get "upgrade"(): boolean
}
}

declare module "net.silentchaos512.gear.api.item.IStatItem" {
import { $ItemStat$$Type } from "net.silentchaos512.gear.api.stats.ItemStat"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $IStatItem {
"getStat"(itemStack0: $ItemStack$$Type, itemStat1: $ItemStat$$Type): float
"getStatInt"(itemStack0: $ItemStack$$Type, itemStat1: $ItemStat$$Type): integer
}

export namespace $IStatItem {
const probejs$$marker: never
}
export abstract class $IStatItem$$Static implements $IStatItem {
}
}

declare module "net.silentchaos512.gear.api.util.StatGearKey" {
import { $GearType, $GearType$$Type } from "net.silentchaos512.gear.api.item.GearType"
import { $IItemStat, $IItemStat$$Type } from "net.silentchaos512.gear.api.stats.IItemStat"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $StatGearKey {
public "getGearType"(): $GearType
public "getParent"(): $StatGearKey
public "getStat"(): $IItemStat
public static "of"(iItemStat0: $IItemStat$$Type, gearType1: $GearType$$Type): $StatGearKey
public static "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $StatGearKey
public static "read"(string0: string): $StatGearKey
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "gearType"(): $GearType
get "parent"(): $StatGearKey
get "stat"(): $IItemStat
}
}

declare module "net.silentchaos512.gear.api.traits.TraitActionContext" {
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $TraitActionContext {
constructor(player0: $Player$$Type, int1: integer, itemStack2: $ItemStack$$Type)

public "getGear"(): $ItemStack
public "getPlayer"(): $Player
public "getTraitLevel"(): integer
get "gear"(): $ItemStack
get "player"(): $Player
get "traitLevel"(): integer
}
}

declare module "net.silentchaos512.gear.client.model.PartTextures" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $GearType$$Type } from "net.silentchaos512.gear.api.item.GearType"
import { $MaterialLayer } from "net.silentchaos512.gear.api.material.MaterialLayer"
import { $List } from "java.util.List"
import { $Enum } from "java.lang.Enum"
import { $PartType } from "net.silentchaos512.gear.api.part.PartType"

export class $PartTextures extends $Enum<$PartTextures> {
static readonly "ADORNMENT_GENERIC": $PartTextures
static readonly "ADORNMENT_HIGHLIGHT": $PartTextures
static readonly "ARROW": $PartTextures
static readonly "BINDING_GENERIC": $PartTextures
static readonly "BOWSTRING_STRING": $PartTextures
static readonly "CHARGED_ARROW": $PartTextures
static readonly "CHARGED_FIREWORK": $PartTextures
static readonly "CLOTH": $PartTextures
static readonly "DUST": $PartTextures
static readonly "FLETCHING_GENERIC": $PartTextures
static readonly "GRIP_WOOL": $PartTextures
static readonly "HIGHLIGHT": $PartTextures
static readonly "LINING_CLOTH": $PartTextures
static readonly "LINING_SLIME": $PartTextures
static readonly "LINING_SLIME_HIGHLIGHT": $PartTextures
static readonly "MAIN_GENERIC_HC": $PartTextures
static readonly "MAIN_GENERIC_LC": $PartTextures
static readonly "METAL": $PartTextures
static readonly "ROD_GENERIC_HC": $PartTextures
static readonly "ROD_GENERIC_LC": $PartTextures
static readonly "SPLOTCHES": $PartTextures
static readonly "TIP_SHARP": $PartTextures
static readonly "TIP_SMOOTH": $PartTextures
static readonly "WOOD": $PartTextures

public static "byTextureId"(resourceLocation0: $ResourceLocation$$Type): $PartTextures
public "getLayer"(int0: integer): $MaterialLayer
public "getPartType"(): $PartType
public "getTexture"(): $ResourceLocation
public static "getTextures"(gearType0: $GearType$$Type): $List<$PartTextures>
public "isAnimated"(): boolean
public static "valueOf"(string0: string): $PartTextures
public static "values"(): $PartTextures[]
get "partType"(): $PartType
get "texture"(): $ResourceLocation
get "animated"(): boolean
}
}

declare module "net.silentchaos512.gear.api.stats.IItemStat" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $StatInstance$Operation } from "net.silentchaos512.gear.api.stats.StatInstance$Operation"

export interface $IItemStat {
"doesSynergyApply"(): boolean
"getBaseValue"(): float
"getDefaultOperation"(): $StatInstance$Operation
"getDefaultValue"(): float
"getMaximumValue"(): float
"getMinimumValue"(): float
"getStatId"(): $ResourceLocation
"isAffectedByGrades"(): boolean
get "baseValue"(): float
get "defaultOperation"(): $StatInstance$Operation
get "defaultValue"(): float
get "maximumValue"(): float
get "minimumValue"(): float
get "statId"(): $ResourceLocation
get "affectedByGrades"(): boolean
}

export namespace $IItemStat {
const probejs$$marker: never
}
export abstract class $IItemStat$$Static implements $IItemStat {
}
}

declare module "net.silentchaos512.gear.api.item.GearType$Builder" {
import { $GearType, $GearType$$Type } from "net.silentchaos512.gear.api.item.GearType"
import { $ItemStat } from "net.silentchaos512.gear.api.stats.ItemStat"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $Set$$Type } from "java.util.Set"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $GearType$Builder {
public "animationFrames"(int0: integer): $GearType$Builder
public "armorDurabilityMultiplier"(float0: float): $GearType$Builder
public "build"(): $GearType
public "durabilityStat"(supplier0: $Supplier$$Type<$ItemStat>): $GearType$Builder
public static "of"(string0: string, gearType1: $GearType$$Type): $GearType$Builder
public static "of"(string0: string): $GearType$Builder
public "toolActions"(...toolAction0s: $ToolAction$$Type[]): $GearType$Builder
public "toolActions"(set0: $Set$$Type<$ToolAction$$Type>): $GearType$Builder
}
}

declare module "net.silentchaos512.gear.api.event.GearItemEvent" {
import { $PartData$$Type } from "net.silentchaos512.gear.gear.part.PartData"
import { $PartDataList } from "net.silentchaos512.gear.api.part.PartDataList"
import { $Collection$$Type } from "java.util.Collection"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $GearItemEvent extends $Event {
constructor(itemStack0: $ItemStack$$Type, collection1: $Collection$$Type<$PartData$$Type>)
constructor()

public "getGear"(): $ItemStack
public "getParts"(): $PartDataList
get "gear"(): $ItemStack
get "parts"(): $PartDataList
}
}

declare module "net.silentchaos512.gear.api.part.PartDataList" {
import { $Iterator } from "java.util.Iterator"
import { $ListIterator } from "java.util.ListIterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $PartType$$Type } from "net.silentchaos512.gear.api.part.PartType"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $PartData, $PartData$$Type } from "net.silentchaos512.gear.gear.part.PartData"
import { $List } from "java.util.List"
import { $ITrait$$Type } from "net.silentchaos512.gear.api.traits.ITrait"
import { $Stream } from "java.util.stream.Stream"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $IGearPart$$Type } from "net.silentchaos512.gear.api.part.IGearPart"
import { $Comparator$$Type } from "java.util.Comparator"
import { $Spliterator } from "java.util.Spliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $PartDataList implements $List<$PartData> {
public "add"(int0: integer, partData1: $PartData$$Type): void
public "add"(partData0: $PartData$$Type): boolean
public "addAll"(collection0: $Collection$$Type<$PartData$$Type>): boolean
public "addAll"(int0: integer, collection1: $Collection$$Type<$PartData$$Type>): boolean
public "addPart"(iGearPart0: $IGearPart$$Type): boolean
public "clear"(): void
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public static "empty"(): $PartDataList
public "equals"(object0: any): boolean
public "forEach"(consumer0: $Consumer$$Type<$PartData$$Type>): void
/** @deprecated */
public static "from"(collection0: $Collection$$Type<$ItemStack$$Type>): $PartDataList
public "get"(int0: integer): $PartData
public "getMains"(): $List<$PartData>
public "getParts"(predicate0: $Predicate$$Type<$PartData$$Type>): $List<$PartData>
public "getPartsOfType"(partType0: $PartType$$Type): $List<$PartData>
public "getPartsWithTrait"(iTrait0: $ITrait$$Type): integer
public "getPrimaryMain"(): $PartData
public "getRods"(): $List<$PartData>
public "getTips"(): $List<$PartData>
/** @deprecated */
public "getUniqueParts"(boolean0: boolean): $PartDataList
public "hashCode"(): integer
public "indexOf"(object0: any): integer
public "isEmpty"(): boolean
public "iterator"(): $Iterator<$PartData>
public "lastIndexOf"(object0: any): integer
public "listIterator"(): $ListIterator<$PartData>
public "listIterator"(int0: integer): $ListIterator<$PartData>
public static "of"(collection0: $Collection$$Type<$PartData$$Type>): $PartDataList
public static "of"(...partData0s: $PartData$$Type[]): $PartDataList
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E): $List<E>
public static "of"<E>(e0: E, e1: E): $List<E>
public static "of"<E>(e0: E): $List<E>
public static "of"<E>(): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(...e0s: E[]): $List<E>
public "parallelStream"(): $Stream<$PartData>
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<$PartData$$Type>): boolean
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<$PartData$$Type>): void
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "set"(int0: integer, partData1: $PartData$$Type): $PartData
public "size"(): integer
public "sort"(comparator0: $Comparator$$Type<$PartData$$Type>): void
public "spliterator"(): $Spliterator<$PartData>
public "stream"(): $Stream<$PartData>
public "subList"(int0: integer, int1: integer): $List<$PartData>
public "toArray"(): any[]
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
[Symbol.iterator](): IterableIterator<$PartData>;
[index: number]: $PartData
get "mains"(): $List<$PartData>
get "primaryMain"(): $PartData
get "rods"(): $List<$PartData>
get "tips"(): $List<$PartData>
}
}

declare module "net.silentchaos512.gear.api.traits.ITrait" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $ItemStat$$Type } from "net.silentchaos512.gear.api.stats.ItemStat"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Collection } from "java.util.Collection"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $Multimap$$Type } from "com.google.common.collect.Multimap"
import { $Function$$Type } from "java.util.function.Function"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $List$$Type } from "java.util.List"
import { $ITraitCondition } from "net.silentchaos512.gear.api.traits.ITraitCondition"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $AttributeModifier$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $ITraitSerializer } from "net.silentchaos512.gear.api.traits.ITraitSerializer"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $TooltipFlag$$Type } from "net.minecraft.world.item.TooltipFlag"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $TraitActionContext$$Type } from "net.silentchaos512.gear.api.traits.TraitActionContext"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"

export interface $ITrait {
"addInformation"(int0: integer, list1: $List$$Type<$Component$$Type>, tooltipFlag2: $TooltipFlag$$Type): void
"addInformation"(int0: integer, list1: $List$$Type<$Component$$Type>, tooltipFlag2: $TooltipFlag$$Type, function3: $Function$$Type<$Component$$Type, $Component>): void
/** @deprecated */
"addInformation"(int0: integer, list1: $List$$Type<$Component$$Type>): void
"addLootDrops"(traitActionContext0: $TraitActionContext$$Type, itemStack1: $ItemStack$$Type): $ItemStack
"getCanceledLevel"(int0: integer, iTrait1: $ITrait$$Type, int2: integer): integer
"getCancelsWithSet"(): $Collection<string>
"getConditions"(): $Collection<$ITraitCondition>
"getDescription"(int0: integer): $MutableComponent
"getDisplayName"(int0: integer): $MutableComponent
"getExtraWikiLines"(): $Collection<string>
"getId"(): $ResourceLocation
"getMaxLevel"(): integer
"getSerializer"(): $ITraitSerializer<any>
"isHidden"(): boolean
"onAttackEntity"(traitActionContext0: $TraitActionContext$$Type, livingEntity1: $LivingEntity$$Type, float2: float): float
"onDurabilityDamage"(traitActionContext0: $TraitActionContext$$Type, int1: integer): float
"onGearCrafted"(traitActionContext0: $TraitActionContext$$Type): void
/** @deprecated */
"onGetAttributeModifiers"(traitActionContext0: $TraitActionContext$$Type, multimap1: $Multimap$$Type<$Attribute$$Type, $AttributeModifier$$Type>, equipmentSlot2: $EquipmentSlot$$Type): void
"onGetAttributeModifiers"(traitActionContext0: $TraitActionContext$$Type, multimap1: $Multimap$$Type<$Attribute$$Type, $AttributeModifier$$Type>, string2: string): void
"onGetStat"(traitActionContext0: $TraitActionContext$$Type, itemStat1: $ItemStat$$Type, float2: float, float3: float): float
"onItemSwing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): void
"onItemUse"(useOnContext0: $UseOnContext$$Type, int1: integer): $InteractionResult
"onRecalculatePost"(traitActionContext0: $TraitActionContext$$Type): void
"onRecalculatePre"(traitActionContext0: $TraitActionContext$$Type): void
"onUpdate"(traitActionContext0: $TraitActionContext$$Type, boolean1: boolean): void
"retainData"(iTrait0: $ITrait$$Type): void
"showInTooltip"(tooltipFlag0: $TooltipFlag$$Type): boolean
"willCancelWith"(iTrait0: $ITrait$$Type): boolean
"write"(int0: integer): $CompoundTag
get "cancelsWithSet"(): $Collection<string>
get "conditions"(): $Collection<$ITraitCondition>
get "extraWikiLines"(): $Collection<string>
get "id"(): $ResourceLocation
get "maxLevel"(): integer
get "serializer"(): $ITraitSerializer<any>
get "hidden"(): boolean
}

export namespace $ITrait {
const probejs$$marker: never
}
export abstract class $ITrait$$Static implements $ITrait {
}
}

declare module "net.silentchaos512.gear.gear.part.RepairContext$Type" {
import { $Enum } from "java.lang.Enum"

export class $RepairContext$Type extends $Enum<$RepairContext$Type> {
static readonly "ANVIL": $RepairContext$Type
static readonly "QUICK": $RepairContext$Type

public "getBonusEfficiency"(): float
public static "valueOf"(string0: string): $RepairContext$Type
public static "values"(): $RepairContext$Type[]
get "bonusEfficiency"(): float
}
}

declare module "net.silentchaos512.gear.api.stats.StatInstance$Operation" {
import { $Enum } from "java.lang.Enum"

export class $StatInstance$Operation extends $Enum<$StatInstance$Operation> {
static readonly "ADD": $StatInstance$Operation
static readonly "AVG": $StatInstance$Operation
static readonly "MAX": $StatInstance$Operation
static readonly "MUL1": $StatInstance$Operation
static readonly "MUL2": $StatInstance$Operation

public static "byName"(string0: string): $StatInstance$Operation
public static "byNameOrNull"(string0: string): $StatInstance$Operation
public static "valueOf"(string0: string): $StatInstance$Operation
public static "values"(): $StatInstance$Operation[]
}
}

declare module "net.silentchaos512.gear.api.traits.TraitInstance" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $IGearComponentInstance$$Type } from "net.silentchaos512.gear.api.util.IGearComponentInstance"
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ITraitInstance } from "net.silentchaos512.gear.api.traits.ITraitInstance"
import { $Collection } from "java.util.Collection"
import { $DataResource$$Type } from "net.silentchaos512.gear.api.util.DataResource"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $PartGearKey$$Type } from "net.silentchaos512.gear.api.util.PartGearKey"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $List$$Type } from "java.util.List"
import { $ITraitCondition, $ITraitCondition$$Type } from "net.silentchaos512.gear.api.traits.ITraitCondition"
import { $ITrait, $ITrait$$Type } from "net.silentchaos512.gear.api.traits.ITrait"
import { $TooltipFlag$$Type } from "net.minecraft.world.item.TooltipFlag"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $LazyTraitInstance } from "net.silentchaos512.gear.api.traits.LazyTraitInstance"

export class $TraitInstance implements $ITraitInstance {
public "addInformation"(list0: $List$$Type<$Component$$Type>, tooltipFlag1: $TooltipFlag$$Type): void
public "conditionsMatch"(partGearKey0: $PartGearKey$$Type, itemStack1: $ItemStack$$Type, list2: $List$$Type<$IGearComponentInstance$$Type<any>>): boolean
public static "deserialize"(jsonObject0: $JsonObject$$Type): $TraitInstance
public "getConditions"(): $Collection<$ITraitCondition>
public "getConditionsText"(): $MutableComponent
public "getDisplayName"(): $MutableComponent
public "getLevel"(): integer
public "getTrait"(): $ITrait
public "getTraitId"(): $ResourceLocation
public static "lazy"(resourceLocation0: $ResourceLocation$$Type, int1: integer, ...iTraitCondition2s: $ITraitCondition$$Type[]): $LazyTraitInstance
public static "of"(iTrait0: $ITrait$$Type, int1: integer, ...iTraitCondition2s: $ITraitCondition$$Type[]): $TraitInstance
public static "of"(dataResource0: $DataResource$$Type<$ITrait$$Type>, int1: integer, ...iTraitCondition2s: $ITraitCondition$$Type[]): $ITraitInstance
public static "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $TraitInstance
public "serialize"(): $JsonObject
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "conditions"(): $Collection<$ITraitCondition>
get "conditionsText"(): $MutableComponent
get "displayName"(): $MutableComponent
get "level"(): integer
get "trait"(): $ITrait
get "traitId"(): $ResourceLocation
}
}

declare module "net.silentchaos512.gear.api.part.IPartData" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject } from "com.google.gson.JsonObject"
import { $IGearComponentInstance } from "net.silentchaos512.gear.api.util.IGearComponentInstance"
import { $Tier } from "net.minecraft.world.item.Tier"
import { $Component } from "net.minecraft.network.chat.Component"
import { $StatGearKey$$Type } from "net.silentchaos512.gear.api.util.StatGearKey"
import { $Collection } from "java.util.Collection"
import { $DataResource$$Type } from "net.silentchaos512.gear.api.util.DataResource"
import { $PartGearKey$$Type } from "net.silentchaos512.gear.api.util.PartGearKey"
import { $PartType, $PartType$$Type } from "net.silentchaos512.gear.api.part.PartType"
import { $GearType, $GearType$$Type } from "net.silentchaos512.gear.api.item.GearType"
import { $IMaterial$$Type } from "net.silentchaos512.gear.api.material.IMaterial"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $MaterialList } from "net.silentchaos512.gear.api.material.MaterialList"
import { $TraitInstance } from "net.silentchaos512.gear.api.traits.TraitInstance"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $IGearPart } from "net.silentchaos512.gear.api.part.IGearPart"
import { $StatInstance } from "net.silentchaos512.gear.api.stats.StatInstance"

export interface $IPartData extends $IGearComponentInstance<$IGearPart> {
"containsMaterial"(dataResource0: $DataResource$$Type<$IMaterial$$Type>): boolean
"get"(): $IGearPart
/** @deprecated */
"getCraftingItem"(): $ItemStack
"getDisplayName"(partType0: $PartType$$Type, itemStack1: $ItemStack$$Type): $Component
"getDisplayName"(partType0: $PartType$$Type): $Component
"getGearType"(): $GearType
"getHarvestTier"(): $Tier
"getId"(): $ResourceLocation
"getItem"(): $ItemStack
"getMaterials"(): $MaterialList
"getModelKey"(): string
"getNameColor"(partType0: $PartType$$Type, gearType1: $GearType$$Type): integer
/** @deprecated */
"getPart"(): $IGearPart
/** @deprecated */
"getPartId"(): $ResourceLocation
"getStat"(partType0: $PartType$$Type, statGearKey1: $StatGearKey$$Type, itemStack2: $ItemStack$$Type): float
"getStat"(partType0: $PartType$$Type, statGearKey1: $StatGearKey$$Type): float
"getStatModifiers"(partType0: $PartType$$Type, statGearKey1: $StatGearKey$$Type, itemStack2: $ItemStack$$Type): $Collection<$StatInstance>
"getStatModifiers"(statGearKey0: $StatGearKey$$Type, itemStack1: $ItemStack$$Type): $Collection<$StatInstance>
"getStatModifiers"(partType0: $PartType$$Type, statGearKey1: $StatGearKey$$Type): $Collection<$StatInstance>
"getTier"(): integer
"getTraits"(itemStack0: $ItemStack$$Type): $Collection<$TraitInstance>
"getTraits"(partType0: $PartType$$Type, gearType1: $GearType$$Type, itemStack2: $ItemStack$$Type): $Collection<$TraitInstance>
"getTraits"(): $Collection<$TraitInstance>
"getTraits"(partGearKey0: $PartGearKey$$Type, itemStack1: $ItemStack$$Type): $Collection<$TraitInstance>
"getTraits"(partType0: $PartType$$Type): $Collection<$TraitInstance>
"getType"(): $PartType
"onAddToGear"(itemStack0: $ItemStack$$Type): void
"serialize"(): $JsonObject
"write"(compoundTag0: $CompoundTag$$Type): $CompoundTag
get "craftingItem"(): $ItemStack
get "gearType"(): $GearType
get "harvestTier"(): $Tier
get "id"(): $ResourceLocation
get "item"(): $ItemStack
get "materials"(): $MaterialList
get "modelKey"(): string
get "part"(): $IGearPart
get "partId"(): $ResourceLocation
get "tier"(): integer
get "traits"(): $Collection<$TraitInstance>
get "type"(): $PartType
}

export namespace $IPartData {
const probejs$$marker: never
}
export abstract class $IPartData$$Static implements $IPartData {
}
}

declare module "net.silentchaos512.gear.api.material.modifier.IMaterialModifier" {
import { $List, $List$$Type } from "java.util.List"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $StatGearKey$$Type } from "net.silentchaos512.gear.api.util.StatGearKey"
import { $IMaterialInstance$$Type } from "net.silentchaos512.gear.api.material.IMaterialInstance"
import { $IMaterialModifierType } from "net.silentchaos512.gear.api.material.modifier.IMaterialModifierType"
import { $MutableComponent, $MutableComponent$$Type } from "net.minecraft.network.chat.MutableComponent"
import { $StatInstance, $StatInstance$$Type } from "net.silentchaos512.gear.api.stats.StatInstance"
import { $PartType$$Type } from "net.silentchaos512.gear.api.part.PartType"

export interface $IMaterialModifier {
"appendTooltip"(list0: $List$$Type<$Component$$Type>): void
"getType"(): $IMaterialModifierType<any>
"modifyMaterialName"(mutableComponent0: $MutableComponent$$Type): $MutableComponent
"modifyStats"(iMaterialInstance0: $IMaterialInstance$$Type, partType1: $PartType$$Type, statGearKey2: $StatGearKey$$Type, list3: $List$$Type<$StatInstance$$Type>): $List<$StatInstance>
get "type"(): $IMaterialModifierType<any>
}

export namespace $IMaterialModifier {
const probejs$$marker: never
}
export abstract class $IMaterialModifier$$Static implements $IMaterialModifier {
}
}

declare module "net.silentchaos512.gear.api.material.IMaterialLayerList" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $MaterialLayer, $MaterialLayer$$Type } from "net.silentchaos512.gear.api.material.MaterialLayer"
import { $List } from "java.util.List"
import { $Iterator } from "java.util.Iterator"
import { $Spliterator } from "java.util.Spliterator"
import { $Iterable } from "java.lang.Iterable"

export interface $IMaterialLayerList extends $Iterable<$MaterialLayer> {
"forEach"(consumer0: $Consumer$$Type<$MaterialLayer$$Type>): void
"getFirstLayer"(): $MaterialLayer
"getLayers"(): $List<$MaterialLayer>
"iterator"(): $Iterator<$MaterialLayer>
"spliterator"(): $Spliterator<$MaterialLayer>
[Symbol.iterator](): IterableIterator<$MaterialLayer>;
get "firstLayer"(): $MaterialLayer
get "layers"(): $List<$MaterialLayer>
}

export namespace $IMaterialLayerList {
const probejs$$marker: never
}
export abstract class $IMaterialLayerList$$Static implements $IMaterialLayerList {
}
}

declare module "net.silentchaos512.gear.api.event.GetStatModifierEvent" {
import { $PartData, $PartData$$Type } from "net.silentchaos512.gear.gear.part.PartData"
import { $ItemStat, $ItemStat$$Type } from "net.silentchaos512.gear.api.stats.ItemStat"
import { $List, $List$$Type } from "java.util.List"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $StatInstance, $StatInstance$$Type } from "net.silentchaos512.gear.api.stats.StatInstance"

export class $GetStatModifierEvent extends $Event {
constructor(partData0: $PartData$$Type, itemStat1: $ItemStat$$Type, list2: $List$$Type<$StatInstance$$Type>)
constructor()

public "getModifiers"(): $List<$StatInstance>
public "getPart"(): $PartData
public "getStat"(): $ItemStat
get "modifiers"(): $List<$StatInstance>
get "part"(): $PartData
get "stat"(): $ItemStat
}
}

declare module "net.silentchaos512.gear.api.stats.StatInstance" {
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $ItemStat$$Type } from "net.silentchaos512.gear.api.stats.ItemStat"
import { $StatGearKey, $StatGearKey$$Type } from "net.silentchaos512.gear.api.util.StatGearKey"
import { $StatInstance$Operation, $StatInstance$Operation$$Type } from "net.silentchaos512.gear.api.stats.StatInstance$Operation"
import { $Collection$$Type } from "java.util.Collection"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $IGearPart$$Type } from "net.silentchaos512.gear.api.part.IGearPart"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $PartType$$Type } from "net.silentchaos512.gear.api.part.PartType"

export class $StatInstance {
static readonly "DEFAULT_KEY": $StatGearKey

public "copy"(): $StatInstance
public "copySetValue"(float0: float): $StatInstance
public "getFormattedText"(itemStat0: $ItemStat$$Type, int1: integer, boolean2: boolean): $MutableComponent
public "getKey"(): $StatGearKey
public static "getMaterialWeightedAverageMod"(collection0: $Collection$$Type<$StatInstance$$Type>, operation1: $StatInstance$Operation$$Type): $StatInstance
public "getOp"(): $StatInstance$Operation
public "getPreferredDecimalPlaces"(itemStat0: $ItemStat$$Type, int1: integer): integer
public "getSource"(): string
public "getValue"(): float
public static "getWeightedAverageMod"(collection0: $Collection$$Type<$StatInstance$$Type>, operation1: $StatInstance$Operation$$Type): $StatInstance
/** @deprecated */
public static "of"(float0: float): $StatInstance
/** @deprecated */
public static "of"(float0: float, operation1: $StatInstance$Operation$$Type): $StatInstance
public static "of"(float0: float, operation1: $StatInstance$Operation$$Type, statGearKey2: $StatGearKey$$Type): $StatInstance
public static "read"(statGearKey0: $StatGearKey$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): $StatInstance
public static "read"(statGearKey0: $StatGearKey$$Type, jsonElement1: $JsonElement$$Type): $StatInstance
public "serialize"(): $JsonElement
public "shouldList"(partType0: $PartType$$Type, itemStat1: $ItemStat$$Type, boolean2: boolean): boolean
public "shouldList"(iGearPart0: $IGearPart$$Type, itemStat1: $ItemStat$$Type, boolean2: boolean): boolean
/** @deprecated */
public static "withSource"(float0: float, string1: string): $StatInstance
/** @deprecated */
public static "withSource"(float0: float, operation1: $StatInstance$Operation$$Type, string2: string): $StatInstance
public static "withSource"(float0: float, operation1: $StatInstance$Operation$$Type, statGearKey2: $StatGearKey$$Type, string3: string): $StatInstance
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "key"(): $StatGearKey
get "op"(): $StatInstance$Operation
get "source"(): string
get "value"(): float
}
}

declare module "net.silentchaos512.gear.api.util.PartGearKey" {
import { $GearType, $GearType$$Type } from "net.silentchaos512.gear.api.item.GearType"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IPartData$$Type } from "net.silentchaos512.gear.api.part.IPartData"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $PartType, $PartType$$Type } from "net.silentchaos512.gear.api.part.PartType"

export class $PartGearKey {
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $PartGearKey
public "getDisplayName"(): $Component
public "getGearType"(): $GearType
public "getParent"(): $PartGearKey
public "getPartType"(): $PartType
public static "of"(gearType0: $GearType$$Type, iPartData1: $IPartData$$Type): $PartGearKey
public static "of"(gearType0: $GearType$$Type, partType1: $PartType$$Type): $PartGearKey
public static "ofAll"(partType0: $PartType$$Type): $PartGearKey
public static "read"(string0: string): $PartGearKey
public "toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "displayName"(): $Component
get "gearType"(): $GearType
get "parent"(): $PartGearKey
get "partType"(): $PartType
}
}

declare module "net.silentchaos512.gear.api.traits.ITraitInstance" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $IGearComponentInstance$$Type } from "net.silentchaos512.gear.api.util.IGearComponentInstance"
import { $JsonObject } from "com.google.gson.JsonObject"
import { $List$$Type } from "java.util.List"
import { $ITraitCondition } from "net.silentchaos512.gear.api.traits.ITraitCondition"
import { $ITrait } from "net.silentchaos512.gear.api.traits.ITrait"
import { $Collection } from "java.util.Collection"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $PartGearKey$$Type } from "net.silentchaos512.gear.api.util.PartGearKey"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"

export interface $ITraitInstance {
"conditionsMatch"(partGearKey0: $PartGearKey$$Type, itemStack1: $ItemStack$$Type, list2: $List$$Type<$IGearComponentInstance$$Type<any>>): boolean
"getConditions"(): $Collection<$ITraitCondition>
"getConditionsText"(): $MutableComponent
"getLevel"(): integer
"getTrait"(): $ITrait
"getTraitId"(): $ResourceLocation
"serialize"(): $JsonObject
get "conditions"(): $Collection<$ITraitCondition>
get "conditionsText"(): $MutableComponent
get "level"(): integer
get "trait"(): $ITrait
get "traitId"(): $ResourceLocation
}

export namespace $ITraitInstance {
const probejs$$marker: never
}
export abstract class $ITraitInstance$$Static implements $ITraitInstance {
}
}

declare module "net.silentchaos512.gear.api.stats.ItemStat" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $GearType$$Type } from "net.silentchaos512.gear.api.item.GearType"
import { $IItemStat } from "net.silentchaos512.gear.api.stats.IItemStat"
import { $ItemStat$DisplayFormat } from "net.silentchaos512.gear.api.stats.ItemStat$DisplayFormat"
import { $Color, $Color$$Type } from "net.silentchaos512.utils.Color"
import { $ChatFormatting$$Type } from "net.minecraft.ChatFormatting"
import { $StatInstance$Operation, $StatInstance$Operation$$Type } from "net.silentchaos512.gear.api.stats.StatInstance$Operation"
import { $Collection$$Type } from "java.util.Collection"
import { $ItemStat$Properties$$Type } from "net.silentchaos512.gear.api.stats.ItemStat$Properties"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $StatInstance, $StatInstance$$Type } from "net.silentchaos512.gear.api.stats.StatInstance"

export class $ItemStat implements $IItemStat {
constructor(resourceLocation0: $ResourceLocation$$Type, float1: float, float2: float, float3: float, color4: $Color$$Type, properties5: $ItemStat$Properties$$Type)
constructor(resourceLocation0: $ResourceLocation$$Type, float1: float, float2: float, float3: float, chatFormatting4: $ChatFormatting$$Type, properties5: $ItemStat$Properties$$Type)

public "clampValue"(float0: float): float
public "compute"(collection0: $Collection$$Type<$StatInstance$$Type>): float
/** @deprecated */
public "compute"(float0: float, boolean1: boolean, collection2: $Collection$$Type<$StatInstance$$Type>): float
public "compute"(float0: float, boolean1: boolean, gearType2: $GearType$$Type, gearType3: $GearType$$Type, collection4: $Collection$$Type<$StatInstance$$Type>): float
public "compute"(float0: float, collection1: $Collection$$Type<$StatInstance$$Type>): float
public "compute"(float0: float, boolean1: boolean, gearType2: $GearType$$Type, collection3: $Collection$$Type<$StatInstance$$Type>): float
public "computeForDisplay"(float0: float, gearType1: $GearType$$Type, collection2: $Collection$$Type<$StatInstance$$Type>): $StatInstance
public "doesSynergyApply"(): boolean
public "getBaseValue"(): float
public "getDefaultOperation"(): $StatInstance$Operation
public "getDefaultValue"(): float
public "getDisplayFormat"(): $ItemStat$DisplayFormat
public "getDisplayName"(): $MutableComponent
public static "getMaterialWeightedAverage"(collection0: $Collection$$Type<$StatInstance$$Type>, operation1: $StatInstance$Operation$$Type): float
public "getMaximumValue"(): float
public "getMinimumValue"(): float
public "getNameColor"(): $Color
public "getStatId"(): $ResourceLocation
public static "getWeightedAverage"(collection0: $Collection$$Type<$StatInstance$$Type>, operation1: $StatInstance$Operation$$Type): float
public "isAffectedByGrades"(): boolean
public "isDisplayAsInt"(): boolean
/** @deprecated */
public "isDisplayAsMultiplier"(): boolean
public "isVisible"(): boolean
/** @deprecated */
public "withMissingRodEffect"(float0: float): float
get "baseValue"(): float
get "defaultOperation"(): $StatInstance$Operation
get "defaultValue"(): float
get "displayFormat"(): $ItemStat$DisplayFormat
get "displayName"(): $MutableComponent
get "maximumValue"(): float
get "minimumValue"(): float
get "nameColor"(): $Color
get "statId"(): $ResourceLocation
get "affectedByGrades"(): boolean
get "displayAsInt"(): boolean
get "displayAsMultiplier"(): boolean
get "visible"(): boolean
}
}

declare module "net.silentchaos512.gear.api.material.IMaterialDisplay" {
import { $GearType$$Type } from "net.silentchaos512.gear.api.item.GearType"
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $IPartData$$Type } from "net.silentchaos512.gear.api.part.IPartData"
import { $IMaterialInstance$$Type } from "net.silentchaos512.gear.api.material.IMaterialInstance"
import { $IMaterialLayerList } from "net.silentchaos512.gear.api.material.IMaterialLayerList"
import { $PartType$$Type } from "net.silentchaos512.gear.api.part.PartType"

export interface $IMaterialDisplay {
"getLayerColor"(gearType0: $GearType$$Type, iPartData1: $IPartData$$Type, iMaterialInstance2: $IMaterialInstance$$Type, int3: integer): integer
"getLayerColor"(gearType0: $GearType$$Type, partType1: $PartType$$Type, iMaterialInstance2: $IMaterialInstance$$Type, int3: integer): integer
"getLayerList"(gearType0: $GearType$$Type, iPartData1: $IPartData$$Type, iMaterialInstance2: $IMaterialInstance$$Type): $IMaterialLayerList
"getLayerList"(gearType0: $GearType$$Type, partType1: $PartType$$Type, iMaterialInstance2: $IMaterialInstance$$Type): $IMaterialLayerList
"getMaterialId"(): $ResourceLocation
get "materialId"(): $ResourceLocation
}

export namespace $IMaterialDisplay {
const probejs$$marker: never
}
export abstract class $IMaterialDisplay$$Static implements $IMaterialDisplay {
}
}

declare module "net.silentchaos512.gear.api.material.MaterialList" {
import { $Iterator } from "java.util.Iterator"
import { $ListIterator } from "java.util.ListIterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $IMaterialInstance, $IMaterialInstance$$Type } from "net.silentchaos512.gear.api.material.IMaterialInstance"
import { $Comparator$$Type } from "java.util.Comparator"
import { $Spliterator } from "java.util.Spliterator"
import { $ListTag, $ListTag$$Type } from "net.minecraft.nbt.ListTag"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $MaterialList implements $List<$IMaterialInstance> {
public "add"(iMaterialInstance0: $IMaterialInstance$$Type): boolean
public "add"(int0: integer, iMaterialInstance1: $IMaterialInstance$$Type): void
public "addAll"(collection0: $Collection$$Type<$IMaterialInstance$$Type>): boolean
public "addAll"(int0: integer, collection1: $Collection$$Type<$IMaterialInstance$$Type>): boolean
public "clear"(): void
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public static "deserializeFirst"(listTag0: $ListTag$$Type): $IMaterialInstance
public static "deserializeNbt"(listTag0: $ListTag$$Type): $MaterialList
public static "empty"(): $MaterialList
public "equals"(object0: any): boolean
public "forEach"(consumer0: $Consumer$$Type<$IMaterialInstance$$Type>): void
public "getModelKey"(): string
public "hashCode"(): integer
public "indexOf"(object0: any): integer
public "isEmpty"(): boolean
public "iterator"(): $Iterator<$IMaterialInstance>
public "lastIndexOf"(object0: any): integer
public "listIterator"(): $ListIterator<$IMaterialInstance>
public "listIterator"(int0: integer): $ListIterator<$IMaterialInstance>
public static "of"(collection0: $Collection$$Type<$IMaterialInstance$$Type>): $MaterialList
public static "of"(...iMaterialInstance0s: $IMaterialInstance$$Type[]): $MaterialList
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E): $List<E>
public static "of"<E>(e0: E, e1: E): $List<E>
public static "of"<E>(e0: E): $List<E>
public static "of"<E>(): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(...e0s: E[]): $List<E>
public "parallelStream"(): $Stream<$IMaterialInstance>
public "remove"(object0: any): boolean
public "remove"(int0: integer): $IMaterialInstance
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<$IMaterialInstance$$Type>): boolean
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<$IMaterialInstance$$Type>): void
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "serializeNbt"(): $ListTag
public "set"(int0: integer, iMaterialInstance1: $IMaterialInstance$$Type): $IMaterialInstance
public "size"(): integer
public "sort"(comparator0: $Comparator$$Type<$IMaterialInstance$$Type>): void
public "spliterator"(): $Spliterator<$IMaterialInstance>
public "stream"(): $Stream<$IMaterialInstance>
public "subList"(int0: integer, int1: integer): $List<$IMaterialInstance>
public "toArray"<T>(t0s: T[]): T[]
public "toArray"(): any[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
[Symbol.iterator](): IterableIterator<$IMaterialInstance>;
[index: number]: $IMaterialInstance
get "modelKey"(): string
}
}

declare module "net.silentchaos512.gear.api.item.GearTypeMatcher" {
import { $GearType, $GearType$$Type } from "net.silentchaos512.gear.api.item.GearType"
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $GearTypeMatcher implements $Predicate<$GearType> {
static readonly "ALL": $GearTypeMatcher

constructor(boolean0: boolean, ...gearType1s: $GearType$$Type[])

public "and"(predicate0: $Predicate$$Type<$GearType$$Type>): $Predicate<$GearType>
public static "deserialize"(jsonObject0: $JsonObject$$Type): $GearTypeMatcher
public static "isEqual"<T>(object0: any): $Predicate<T>
public "negate"(): $Predicate<$GearType>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public "or"(predicate0: $Predicate$$Type<$GearType$$Type>): $Predicate<$GearType>
public static "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $GearTypeMatcher
public "serialize"(): $JsonObject
public "test"(gearType0: $GearType$$Type): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
}
}

declare module "net.silentchaos512.gear.api.traits.LazyTraitInstance" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $IGearComponentInstance$$Type } from "net.silentchaos512.gear.api.util.IGearComponentInstance"
import { $JsonObject } from "com.google.gson.JsonObject"
import { $List$$Type } from "java.util.List"
import { $ITraitCondition } from "net.silentchaos512.gear.api.traits.ITraitCondition"
import { $ITrait } from "net.silentchaos512.gear.api.traits.ITrait"
import { $ImmutableList } from "com.google.common.collect.ImmutableList"
import { $ITraitInstance } from "net.silentchaos512.gear.api.traits.ITraitInstance"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $PartGearKey$$Type } from "net.silentchaos512.gear.api.util.PartGearKey"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"

export class $LazyTraitInstance implements $ITraitInstance {
public "conditionsMatch"(partGearKey0: $PartGearKey$$Type, itemStack1: $ItemStack$$Type, list2: $List$$Type<$IGearComponentInstance$$Type<any>>): boolean
public "getConditions"(): $ImmutableList<$ITraitCondition>
public "getConditionsText"(): $MutableComponent
public "getLevel"(): integer
public "getTrait"(): $ITrait
public "getTraitId"(): $ResourceLocation
public "serialize"(): $JsonObject
get "conditions"(): $ImmutableList<$ITraitCondition>
get "conditionsText"(): $MutableComponent
get "level"(): integer
get "trait"(): $ITrait
get "traitId"(): $ResourceLocation
}
}

declare module "net.silentchaos512.gear.api.part.IGearPart" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Tier } from "net.minecraft.world.item.Tier"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $StatGearKey$$Type } from "net.silentchaos512.gear.api.util.StatGearKey"
import { $Collection } from "java.util.Collection"
import { $PartGearKey$$Type } from "net.silentchaos512.gear.api.util.PartGearKey"
import { $IGearComponent } from "net.silentchaos512.gear.api.util.IGearComponent"
import { $PartType, $PartType$$Type } from "net.silentchaos512.gear.api.part.PartType"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"
import { $GearType, $GearType$$Type } from "net.silentchaos512.gear.api.item.GearType"
import { $PartData, $PartData$$Type } from "net.silentchaos512.gear.gear.part.PartData"
import { $List$$Type } from "java.util.List"
import { $Container$$Type } from "net.minecraft.world.Container"
import { $IPartData, $IPartData$$Type } from "net.silentchaos512.gear.api.part.IPartData"
import { $IPartSerializer } from "net.silentchaos512.gear.api.part.IPartSerializer"
import { $MaterialList } from "net.silentchaos512.gear.api.material.MaterialList"
import { $TraitInstance } from "net.silentchaos512.gear.api.traits.TraitInstance"
import { $TooltipFlag$$Type } from "net.minecraft.world.item.TooltipFlag"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $StatInstance } from "net.silentchaos512.gear.api.stats.StatInstance"

export interface $IGearPart extends $IGearComponent<$IPartData> {
/** Client only, do not use in server scripts */
"addInformation"(partData0: $PartData$$Type, itemStack1: $ItemStack$$Type, list2: $List$$Type<$Component$$Type>, tooltipFlag3: $TooltipFlag$$Type): void
"canAddToGear"(itemStack0: $ItemStack$$Type, partData1: $PartData$$Type): boolean
"getColor"(partData0: $PartData$$Type, itemStack1: $ItemStack$$Type, int2: integer, int3: integer): integer
"getDisplayName"(partData0: $PartData$$Type): $Component
"getDisplayName"(partData0: $PartData$$Type, itemStack1: $ItemStack$$Type): $Component
"getDisplayName"(iPartData0: $IPartData$$Type, partType1: $PartType$$Type, itemStack2: $ItemStack$$Type): $Component
"getDisplayNamePrefix"(partData0: $PartData$$Type, itemStack1: $ItemStack$$Type): $Component
"getGearType"(): $GearType
"getHarvestTier"(iPartData0: $IPartData$$Type): $Tier
"getId"(): $ResourceLocation
"getIngredient"(): $Ingredient
"getMaterialName"(partData0: $PartData$$Type, itemStack1: $ItemStack$$Type): $Component
"getMaterials"(iPartData0: $IPartData$$Type): $MaterialList
"getModelKey"(partData0: $PartData$$Type): string
"getPackName"(): string
"getSalvageLossRate"(partData0: $PartData$$Type, itemStack1: $ItemStack$$Type, double2: double): double
"getSerializer"(): $IPartSerializer<any>
"getStat"(iPartData0: $IPartData$$Type, partType1: $PartType$$Type, statGearKey2: $StatGearKey$$Type, itemStack3: $ItemStack$$Type): float
"getStatModifiers"(iPartData0: $IPartData$$Type, partType1: $PartType$$Type, statGearKey2: $StatGearKey$$Type, itemStack3: $ItemStack$$Type): $Collection<$StatInstance>
"getStatModifiers"(iPartData0: $IPartData$$Type, partType1: $PartType$$Type, statGearKey2: $StatGearKey$$Type): $Collection<$StatInstance>
"getStatUnclamped"(iPartData0: $IPartData$$Type, partType1: $PartType$$Type, statGearKey2: $StatGearKey$$Type, itemStack3: $ItemStack$$Type): float
"getTier"(): integer
"getTier"(partData0: $PartData$$Type): integer
"getTraits"(iPartData0: $IPartData$$Type, partGearKey1: $PartGearKey$$Type, itemStack2: $ItemStack$$Type): $Collection<$TraitInstance>
"getType"(): $PartType
"isCraftingAllowed"(iPartData0: $IPartData$$Type, gearType1: $GearType$$Type): boolean
"isCraftingAllowed"(iPartData0: $IPartData$$Type, partType1: $PartType$$Type, gearType2: $GearType$$Type, container3: $Container$$Type): boolean
"isCraftingAllowed"(iPartData0: $IPartData$$Type, partType1: $PartType$$Type, gearType2: $GearType$$Type): boolean
"isVisible"(): boolean
"onAddToGear"(itemStack0: $ItemStack$$Type, partData1: $PartData$$Type): void
"onGearDamaged"(partData0: $PartData$$Type, itemStack1: $ItemStack$$Type, int2: integer): void
"onRemoveFromGear"(itemStack0: $ItemStack$$Type, partData1: $PartData$$Type): void
"randomizeData"(gearType0: $GearType$$Type, int1: integer): $PartData
"replacesExistingInPosition"(partData0: $PartData$$Type): boolean
"retainData"(iGearPart0: $IGearPart$$Type): void
get "gearType"(): $GearType
get "id"(): $ResourceLocation
get "ingredient"(): $Ingredient
get "packName"(): string
get "serializer"(): $IPartSerializer<any>
get "tier"(): integer
get "type"(): $PartType
get "visible"(): boolean
}

export namespace $IGearPart {
const probejs$$marker: never
}
export abstract class $IGearPart$$Static implements $IGearPart {
}
}

declare module "net.silentchaos512.gear.api.util.DataResource" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $IMaterial } from "net.silentchaos512.gear.api.material.IMaterial"
import { $Stream } from "java.util.stream.Stream"
import { $ITrait } from "net.silentchaos512.gear.api.traits.ITrait"
import { $Optional } from "java.util.Optional"
import { $IGearPart } from "net.silentchaos512.gear.api.part.IGearPart"
import { $Function$$Type } from "java.util.function.Function"

export class $DataResource<T = any> {
constructor(resourceLocation0: $ResourceLocation$$Type, function1: $Function$$Type<$ResourceLocation$$Type, T>)

public "get"(): T
public "getId"(): $ResourceLocation
public "ifPresent"(consumer0: $Consumer$$Type<T>): void
public "isPresent"(): boolean
public "map"<U>(function0: $Function$$Type<T, U>): $Optional<U>
public static "material"(string0: string): $DataResource<$IMaterial>
public static "material"(resourceLocation0: $ResourceLocation$$Type): $DataResource<$IMaterial>
public static "part"(string0: string): $DataResource<$IGearPart>
public static "part"(resourceLocation0: $ResourceLocation$$Type): $DataResource<$IGearPart>
public "stream"(): $Stream<T>
public static "trait"(resourceLocation0: $ResourceLocation$$Type): $DataResource<$ITrait>
public static "trait"(string0: string): $DataResource<$ITrait>
get "id"(): $ResourceLocation
get "present"(): boolean
}
}

declare module "net.silentchaos512.gear.item.CompoundPartItem" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $ICapabilityProvider } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item$Properties$$Type } from "net.minecraft.world.item.Item$Properties"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $MaterialInstance } from "net.silentchaos512.gear.gear.material.MaterialInstance"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $Holder } from "net.minecraft.core.Holder"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Map } from "java.util.Map"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $FoodProperties } from "net.minecraft.world.food.FoodProperties"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Collection$$Type } from "java.util.Collection"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $UUID$$Type } from "java.util.UUID"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $PartType, $PartType$$Type } from "net.silentchaos512.gear.api.part.PartType"
import { $Attribute, $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $EnderMan$$Type } from "net.minecraft.world.entity.monster.EnderMan"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $GearType } from "net.silentchaos512.gear.api.item.GearType"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $MutableToolTier$$Type } from "dev.latvian.mods.kubejs.item.MutableToolTier"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $IMaterialInstance$$Type } from "net.silentchaos512.gear.api.material.IMaterialInstance"
import { $MaterialList, $MaterialList$$Type } from "net.silentchaos512.gear.api.material.MaterialList"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $FoodBuilder$$Type } from "dev.latvian.mods.kubejs.item.FoodBuilder"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $CompoundPartItem extends $Item {
constructor(partType0: $PartType$$Type, properties1: $Item$Properties$$Type)

public "addAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type, name: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "arch$holder"(): $Holder<$Item>
public "arch$registryName"(): $ResourceLocation
public "canApplyAtEnchantingTable"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
public "canContinueUsing"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "canDisableShield"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "canElytraFly"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "canEquip"(itemStack0: $ItemStack$$Type, equipmentSlot1: $EquipmentSlot$$Type, entity2: $Entity$$Type): boolean
public "canGrindstoneRepair"(itemStack0: $ItemStack$$Type): boolean
public "canPerformAction"(itemStack0: $ItemStack$$Type, toolAction1: $ToolAction$$Type): boolean
public "canWalkOnPowderedSnow"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "create"(collection0: $Collection$$Type<$IMaterialInstance$$Type>): $ItemStack
public "create"(iMaterialInstance0: $IMaterialInstance$$Type): $ItemStack
public "create"(materialList0: $MaterialList$$Type, int1: integer): $ItemStack
public "create"(iMaterialInstance0: $IMaterialInstance$$Type, int1: integer): $ItemStack
public "create"(materialList0: $MaterialList$$Type): $ItemStack
public "createEntity"(level0: $Level$$Type, entity1: $Entity$$Type, itemStack2: $ItemStack$$Type): $Entity
public "damageItem"<T extends $LivingEntity>(itemStack0: $ItemStack$$Type, int1: integer, t2: T, consumer3: $Consumer$$Type<T>): integer
public "doesSneakBypassUse"(itemStack0: $ItemStack$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "elytraFlightTick"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): boolean
public static "get"(item: $Item$$Type): $ResourceLocation
public static "get"(block: $Block$$Type): $ResourceLocation
public static "get"(state: $BlockState$$Type): $ResourceLocation
public static "get"(entity: $Entity$$Type): $ResourceLocation
public static "get"(stack: $ItemStack$$Type): $ResourceLocation
public static "get"(type: $EntityType$$Type<any>): $ResourceLocation
public "getAllEnchantments"(itemStack0: $ItemStack$$Type): $Map<$Enchantment, integer>
public "getArmorTexture"(itemStack0: $ItemStack$$Type, entity1: $Entity$$Type, equipmentSlot2: $EquipmentSlot$$Type, string3: string): string
public "getAttributeModifiers"(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
public "getAttributes"(attribute: $Attribute$$Type): $List<$AttributeModifier>
public "getBurnTime"(itemStack0: $ItemStack$$Type, recipeType1: $RecipeType$$Type<any>): integer
public "getColor"(itemStack0: $ItemStack$$Type, int1: integer): integer
public "getColorWeight"(int0: integer, int1: integer): integer
public "getCraftedCount"(itemStack0: $ItemStack$$Type): integer
public "getCraftingRemainingItem"(itemStack0: $ItemStack$$Type): $ItemStack
public "getCreativeTab"(): string
public "getCreatorModId"(itemStack0: $ItemStack$$Type): string
public "getDamage"(itemStack0: $ItemStack$$Type): integer
public "getDefaultTooltipHideFlags"(itemStack0: $ItemStack$$Type): integer
public "getDigSpeed"(): float
public "getEnchantmentLevel"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): integer
public "getEnchantmentValue"(itemStack0: $ItemStack$$Type): integer
public "getEntityLifespan"(itemStack0: $ItemStack$$Type, level1: $Level$$Type): integer
public "getEquipmentSlot"(itemStack0: $ItemStack$$Type): $EquipmentSlot
public "getFoodProperties"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): $FoodProperties
public "getGearType"(): $GearType
public "getHighlightTip"(itemStack0: $ItemStack$$Type, component1: $Component$$Type): $Component
public static "getMaterials"(itemStack0: $ItemStack$$Type): $MaterialList
public "getMaxDamage"(itemStack0: $ItemStack$$Type): integer
public "getMaxStackSize"(itemStack0: $ItemStack$$Type): integer
public "getMod"(): string
public static "getModelKey"(itemStack0: $ItemStack$$Type): string
public "getPartType"(): $PartType
public static "getPrimaryMaterial"(itemStack0: $ItemStack$$Type): $MaterialInstance
public "getShareTag"(itemStack0: $ItemStack$$Type): $CompoundTag
public "getSweepHitBox"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): $AABB
public "getXpRepairRatio"(itemStack0: $ItemStack$$Type): float
public "hasCraftingRemainingItem"(itemStack0: $ItemStack$$Type): boolean
public "hasCustomEntity"(itemStack0: $ItemStack$$Type): boolean
public "initCapabilities"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): $ICapabilityProvider
public "isBookEnchantable"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "isCorrectToolForDrops"(itemStack0: $ItemStack$$Type, blockState1: $BlockState$$Type): boolean
public "isDamageable"(itemStack0: $ItemStack$$Type): boolean
public "isDamaged"(itemStack0: $ItemStack$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isEnderMask"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, enderMan2: $EnderMan$$Type): boolean
public "isNotReplaceableByPickAction"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer): boolean
public "isPiglinCurrency"(itemStack0: $ItemStack$$Type): boolean
public "makesPiglinsNeutral"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
/** @deprecated */
public "onArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type): void
public "onBlockStartBreak"(itemStack0: $ItemStack$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
public "onDestroyed"(itemEntity0: $ItemEntity$$Type, damageSource1: $DamageSource$$Type): void
public "onDroppedByPlayer"(itemStack0: $ItemStack$$Type, player1: $Player$$Type): boolean
public "onEntityItemUpdate"(itemStack0: $ItemStack$$Type, itemEntity1: $ItemEntity$$Type): boolean
public "onEntitySwing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "onHorseArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, mob2: $Mob$$Type): void
public "onInventoryTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type, int3: integer, int4: integer): void
public "onItemUseFirst"(itemStack0: $ItemStack$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
public "onLeftClickEntity"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): boolean
public "onStopUsing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): void
public "readShareTag"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): void
public "removeAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type): void
public "setArmorKnockbackResistance"(knockbackResistance: double): void
public "setArmorProtection"(armorProtection: double): void
public "setArmorToughness"(armorToughness: double): void
public "setAttackDamage"(attackDamage: double): void
public "setAttackSpeed"(attackSpeed: double): void
public "setDamage"(itemStack0: $ItemStack$$Type, int1: integer): void
public "setDigSpeed"(speed: float): void
public "setFoodProperties"(consumer: $Consumer$$Type<$FoodBuilder$$Type>): void
public "setTier"(c: $Consumer$$Type<$MutableToolTier$$Type>): void
public "shouldCauseBlockBreakReset"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "shouldCauseReequipAnimation"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean): boolean
get "creativeTab"(): string
get "digSpeed"(): float
get "gearType"(): $GearType
get "mod"(): string
get "partType"(): $PartType
set "armorKnockbackResistance"(value: double)
set "armorProtection"(value: double)
set "armorToughness"(value: double)
set "attackDamage"(value: double)
set "attackSpeed"(value: double)
set "digSpeed"(value: float)
set "foodProperties"(value: $Consumer$$Type<$FoodBuilder$$Type>)
set "tier"(value: $Consumer$$Type<$MutableToolTier$$Type>)
}
}

declare module "net.silentchaos512.gear.api.util.IGearComponentInstance" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Tier } from "net.minecraft.world.item.Tier"
import { $Component } from "net.minecraft.network.chat.Component"
import { $StatGearKey$$Type } from "net.silentchaos512.gear.api.util.StatGearKey"
import { $Collection } from "java.util.Collection"
import { $DataResource$$Type } from "net.silentchaos512.gear.api.util.DataResource"
import { $PartGearKey$$Type } from "net.silentchaos512.gear.api.util.PartGearKey"
import { $IGearComponent } from "net.silentchaos512.gear.api.util.IGearComponent"
import { $PartType$$Type } from "net.silentchaos512.gear.api.part.PartType"
import { $GearType$$Type } from "net.silentchaos512.gear.api.item.GearType"
import { $IMaterial$$Type } from "net.silentchaos512.gear.api.material.IMaterial"
import { $MaterialList } from "net.silentchaos512.gear.api.material.MaterialList"
import { $TraitInstance } from "net.silentchaos512.gear.api.traits.TraitInstance"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $StatInstance } from "net.silentchaos512.gear.api.stats.StatInstance"

export interface $IGearComponentInstance<T extends $IGearComponent<any> = $IGearComponent<any>> {
"containsMaterial"(dataResource0: $DataResource$$Type<$IMaterial$$Type>): boolean
"get"(): T
"getDisplayName"(partType0: $PartType$$Type, itemStack1: $ItemStack$$Type): $Component
"getDisplayName"(partType0: $PartType$$Type): $Component
"getHarvestTier"(): $Tier
"getId"(): $ResourceLocation
"getItem"(): $ItemStack
"getMaterials"(): $MaterialList
"getNameColor"(partType0: $PartType$$Type, gearType1: $GearType$$Type): integer
"getStat"(partType0: $PartType$$Type, statGearKey1: $StatGearKey$$Type): float
"getStat"(partType0: $PartType$$Type, statGearKey1: $StatGearKey$$Type, itemStack2: $ItemStack$$Type): float
"getStatModifiers"(partType0: $PartType$$Type, statGearKey1: $StatGearKey$$Type, itemStack2: $ItemStack$$Type): $Collection<$StatInstance>
"getStatModifiers"(partType0: $PartType$$Type, statGearKey1: $StatGearKey$$Type): $Collection<$StatInstance>
"getTraits"(partGearKey0: $PartGearKey$$Type, itemStack1: $ItemStack$$Type): $Collection<$TraitInstance>
"getTraits"(partType0: $PartType$$Type, gearType1: $GearType$$Type, itemStack2: $ItemStack$$Type): $Collection<$TraitInstance>
"getTraits"(partType0: $PartType$$Type): $Collection<$TraitInstance>
get "harvestTier"(): $Tier
get "id"(): $ResourceLocation
get "item"(): $ItemStack
get "materials"(): $MaterialList
}

export namespace $IGearComponentInstance {
const probejs$$marker: never
}
export abstract class $IGearComponentInstance$$Static<T extends $IGearComponent<any> = $IGearComponent<any>> implements $IGearComponentInstance<T> {
}
}

declare module "net.silentchaos512.gear.api.traits.ITraitSerializer" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $ITrait, $ITrait$$Type } from "net.silentchaos512.gear.api.traits.ITrait"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export interface $ITraitSerializer<T extends $ITrait = $ITrait> {
"getName"(): $ResourceLocation
"read"(resourceLocation0: $ResourceLocation$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): T
"read"(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type): T
"write"(friendlyByteBuf0: $FriendlyByteBuf$$Type, t1: T): void
get "name"(): $ResourceLocation
}

export namespace $ITraitSerializer {
const probejs$$marker: never
}
export abstract class $ITraitSerializer$$Static<T extends $ITrait = $ITrait> implements $ITraitSerializer<T> {
}
}

declare module "net.silentchaos512.gear.api.item.ICoreItem" {
import { $ItemStat, $ItemStat$$Type } from "net.silentchaos512.gear.api.stats.ItemStat"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $IStatItem } from "net.silentchaos512.gear.api.item.IStatItem"
import { $Item } from "net.minecraft.world.item.Item"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"
import { $PartType, $PartType$$Type } from "net.silentchaos512.gear.api.part.PartType"
import { $GearType } from "net.silentchaos512.gear.api.item.GearType"
import { $PartData$$Type } from "net.silentchaos512.gear.gear.part.PartData"
import { $IPartData$$Type } from "net.silentchaos512.gear.api.part.IPartData"
import { $ItemLike } from "net.minecraft.world.level.ItemLike"
import { $Optional } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ItemColor } from "net.minecraft.client.color.item.ItemColor"
import { $StatInstance } from "net.silentchaos512.gear.api.stats.StatInstance"

export interface $ICoreItem extends $ItemLike, $IStatItem {
"asItem"(): $Item
"construct"(collection0: $Collection$$Type<$IPartData$$Type>): $ItemStack
/** Client only, do not use in server scripts */
"getAnimationFrame"(itemStack0: $ItemStack$$Type, clientLevel1: $ClientLevel$$Type, livingEntity2: $LivingEntity$$Type): integer
"getAnimationFrames"(): integer
/** @deprecated */
"getBaseStatModifier"(itemStat0: $ItemStat$$Type): $Optional<$StatInstance>
"getDurabilityStat"(): $ItemStat
"getExcludedStats"(itemStack0: $ItemStack$$Type): $Set<$ItemStat>
"getGearType"(): $GearType
/** Client only, do not use in server scripts */
"getItemColors"(): $ItemColor
"getRelevantStats"(itemStack0: $ItemStack$$Type): $Set<$ItemStat>
"getRenderParts"(): $Collection<$PartType>
"getRepairModifier"(itemStack0: $ItemStack$$Type): float
"getRequiredParts"(): $Collection<$PartType>
"getStat"(itemStack0: $ItemStack$$Type, itemStat1: $ItemStat$$Type): float
"getStatInt"(itemStack0: $ItemStack$$Type, itemStat1: $ItemStat$$Type): integer
/** @deprecated */
"getStatModifier"(itemStat0: $ItemStat$$Type): $Optional<$StatInstance>
/** @deprecated */
"hasTexturesFor"(partType0: $PartType$$Type): boolean
"isValidSlot"(string0: string): boolean
"requiresPartOfType"(partType0: $PartType$$Type): boolean
"supportsPart"(itemStack0: $ItemStack$$Type, partData1: $PartData$$Type): boolean
get "animationFrames"(): integer
get "durabilityStat"(): $ItemStat
get "gearType"(): $GearType
get "itemColors"(): $ItemColor
get "renderParts"(): $Collection<$PartType>
get "requiredParts"(): $Collection<$PartType>
}

export namespace $ICoreItem {
const probejs$$marker: never
}
export abstract class $ICoreItem$$Static implements $ICoreItem {
}
}

declare module "net.silentchaos512.gear.api.material.MaterialLayer" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $GearType$$Type } from "net.silentchaos512.gear.api.item.GearType"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $PartGearKey$$Type } from "net.silentchaos512.gear.api.util.PartGearKey"
import { $PartType, $PartType$$Type } from "net.silentchaos512.gear.api.part.PartType"
import { $PartTextures$$Type } from "net.silentchaos512.gear.client.model.PartTextures"

export class $MaterialLayer {
constructor(resourceLocation0: $ResourceLocation$$Type, int1: integer)
constructor(resourceLocation0: $ResourceLocation$$Type, int1: integer, boolean2: boolean)
constructor(resourceLocation0: $ResourceLocation$$Type, partType1: $PartType$$Type, int2: integer, boolean3: boolean)
constructor(partTextures0: $PartTextures$$Type, int1: integer)

public static "deserialize"(partGearKey0: $PartGearKey$$Type, jsonElement1: $JsonElement$$Type): $MaterialLayer
public "getColor"(): integer
public "getPartType"(): $PartType
public "getTexture"(gearType0: $GearType$$Type, int1: integer): $ResourceLocation
public "getTexture"(string0: string, int1: integer): $ResourceLocation
public "getTextureId"(): $ResourceLocation
public "isAnimated"(): boolean
public static "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $MaterialLayer
public "serialize"(): $JsonElement
public "withColor"(int0: integer): $MaterialLayer
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "color"(): integer
get "partType"(): $PartType
get "textureId"(): $ResourceLocation
get "animated"(): boolean
}
}

declare module "net.silentchaos512.gear.api.stats.ItemStat$DisplayFormat" {
import { $Enum } from "java.lang.Enum"

export class $ItemStat$DisplayFormat extends $Enum<$ItemStat$DisplayFormat> {
static readonly "MULTIPLIER": $ItemStat$DisplayFormat
static readonly "PERCENTAGE": $ItemStat$DisplayFormat
static readonly "UNIT": $ItemStat$DisplayFormat

public static "valueOf"(string0: string): $ItemStat$DisplayFormat
public static "values"(): $ItemStat$DisplayFormat[]
}
}

declare module "net.silentchaos512.gear.api.part.IPartSerializer" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $IGearPart, $IGearPart$$Type } from "net.silentchaos512.gear.api.part.IGearPart"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export interface $IPartSerializer<T extends $IGearPart = $IGearPart> {
"getName"(): $ResourceLocation
"read"(resourceLocation0: $ResourceLocation$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): T
"read"(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type): T
"write"(friendlyByteBuf0: $FriendlyByteBuf$$Type, t1: T): void
get "name"(): $ResourceLocation
}

export namespace $IPartSerializer {
const probejs$$marker: never
}
export abstract class $IPartSerializer$$Static<T extends $IGearPart = $IGearPart> implements $IPartSerializer<T> {
}
}

declare module "net.silentchaos512.gear.api.util.ITraitProvider" {
import { $TraitInstance } from "net.silentchaos512.gear.api.traits.TraitInstance"
import { $Collection } from "java.util.Collection"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $PartGearKey$$Type } from "net.silentchaos512.gear.api.util.PartGearKey"

export interface $ITraitProvider<D = any> {
"getTraits"(d0: D, partGearKey1: $PartGearKey$$Type, itemStack2: $ItemStack$$Type): $Collection<$TraitInstance>
}

export namespace $ITraitProvider {
const probejs$$marker: never
}
export abstract class $ITraitProvider$$Static<D = any> implements $ITraitProvider<D> {
}
}

declare module "net.silentchaos512.gear.api.part.PartType$Builder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $GearType$$Type } from "net.silentchaos512.gear.api.item.GearType"
import { $Optional } from "java.util.Optional"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $CompoundPartItem } from "net.silentchaos512.gear.item.CompoundPartItem"
import { $Function$$Type } from "java.util.function.Function"
import { $PartTextures$$Type } from "net.silentchaos512.gear.client.model.PartTextures"

export class $PartType$Builder {
public "alias"(string0: string): $PartType$Builder
public static "builder"(resourceLocation0: $ResourceLocation$$Type): $PartType$Builder
public "compoundPartItem"(supplier0: $Supplier$$Type<$CompoundPartItem>): $PartType$Builder
public "compoundPartItem"(function0: $Function$$Type<$GearType$$Type, $Optional<$CompoundPartItem>>): $PartType$Builder
public "defaultTexture"(partTextures0: $PartTextures$$Type): $PartType$Builder
public "isRemovable"(boolean0: boolean): $PartType$Builder
public "isUpgrade"(boolean0: boolean): $PartType$Builder
public "maxPerItem"(int0: integer): $PartType$Builder
public "maxPerItem"(function0: $Function$$Type<$GearType$$Type, integer>): $PartType$Builder
}
}

declare module "net.silentchaos512.gear.api.part.MaterialGrade" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Enum } from "java.lang.Enum"
import { $Random$$Type } from "java.util.Random"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"

export class $MaterialGrade extends $Enum<$MaterialGrade> {
static readonly "A": $MaterialGrade
static readonly "B": $MaterialGrade
static readonly "C": $MaterialGrade
static readonly "D": $MaterialGrade
static readonly "E": $MaterialGrade
static readonly "MAX": $MaterialGrade
static readonly "NONE": $MaterialGrade
static readonly "S": $MaterialGrade
static readonly "SS": $MaterialGrade
static readonly "SSS": $MaterialGrade
readonly "bonusPercent": integer

public "copyWithGrade"(itemStack0: $ItemStack$$Type): $ItemStack
public static "fromNbt"(compoundTag0: $CompoundTag$$Type): $MaterialGrade
public static "fromStack"(itemStack0: $ItemStack$$Type): $MaterialGrade
public static "fromString"(string0: string): $MaterialGrade
public "getDisplayName"(): $MutableComponent
public static "getMax"(): $MaterialGrade
public static "selectRandom"(random0: $Random$$Type, materialGrade1: $MaterialGrade$$Type, double2: double, materialGrade3: $MaterialGrade$$Type): $MaterialGrade
public static "selectWithCatalyst"(random0: $Random$$Type, int1: integer): $MaterialGrade
public "setGradeOnStack"(itemStack0: $ItemStack$$Type): void
public static "valueOf"(string0: string): $MaterialGrade
public static "values"(): $MaterialGrade[]
public "writeToNbt"(compoundTag0: $CompoundTag$$Type): void
get "displayName"(): $MutableComponent
set "gradeOnStack"(value: $ItemStack$$Type)
}
}

