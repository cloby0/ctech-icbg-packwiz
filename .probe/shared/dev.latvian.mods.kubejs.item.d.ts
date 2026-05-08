declare module "dev.latvian.mods.kubejs.item.custom.PickaxeItemBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $HandheldItemBuilder } from "dev.latvian.mods.kubejs.item.custom.HandheldItemBuilder"
import { $Item } from "net.minecraft.world.item.Item"

export class $PickaxeItemBuilder extends $HandheldItemBuilder {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $Item
}
}

declare module "dev.latvian.mods.kubejs.item.ItemTooltipEventJS" {
import { $ItemTooltipEventJS$StaticTooltipHandlerFromJS$$Type } from "dev.latvian.mods.kubejs.item.ItemTooltipEventJS$StaticTooltipHandlerFromJS"
import { $List$$Type } from "java.util.List"
import { $ItemTooltipEventJS$StaticTooltipHandler$$Type } from "dev.latvian.mods.kubejs.item.ItemTooltipEventJS$StaticTooltipHandler"
import { $Map$$Type } from "java.util.Map"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

/**
 * Invoked when registering handlers for item tooltips.
 * 
 * `text` can be a component or a list of components.
 */
export class $ItemTooltipEventJS extends $EventJS {
constructor(m: $Map$$Type<$Item$$Type, $List$$Type<$ItemTooltipEventJS$StaticTooltipHandler$$Type>>)

/** Adds text to all items matching the ingredient. */
public "add"(item: $Ingredient$$Type, text: any): void
/** Adds a dynamic tooltip handler to all items matching the ingredient. */
public "addAdvanced"(item: $Ingredient$$Type, handler: $ItemTooltipEventJS$StaticTooltipHandlerFromJS$$Type): void
/** Adds a dynamic tooltip handler to all items. */
public "addAdvancedToAll"(handler: $ItemTooltipEventJS$StaticTooltipHandlerFromJS$$Type): void
/** Adds text to all items. */
public "addToAll"(text: any): void
/** Is alt key pressed. */
public "isAlt"(): boolean
/** Is control key pressed. */
public "isCtrl"(): boolean
/** Is shift key pressed. */
public "isShift"(): boolean
get "alt"(): boolean
get "ctrl"(): boolean
get "shift"(): boolean
}
}

declare module "dev.latvian.mods.kubejs.item.custom.HoeItemBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $HandheldItemBuilder } from "dev.latvian.mods.kubejs.item.custom.HandheldItemBuilder"
import { $Item } from "net.minecraft.world.item.Item"

export class $HoeItemBuilder extends $HandheldItemBuilder {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $Item
}
}

declare module "dev.latvian.mods.kubejs.item.custom.ArmorItemBuilder$Helmet" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ArmorItemBuilder } from "dev.latvian.mods.kubejs.item.custom.ArmorItemBuilder"

export class $ArmorItemBuilder$Helmet extends $ArmorItemBuilder {
constructor(i: $ResourceLocation$$Type)

}
}

declare module "dev.latvian.mods.kubejs.item.custom.ArmorItemBuilder$Chestplate" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ArmorItemBuilder } from "dev.latvian.mods.kubejs.item.custom.ArmorItemBuilder"

export class $ArmorItemBuilder$Chestplate extends $ArmorItemBuilder {
constructor(i: $ResourceLocation$$Type)

}
}

declare module "dev.latvian.mods.kubejs.item.creativetab.CreativeTabIconSupplier" {
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $CreativeTabIconSupplier {
"getIcon"(): $ItemStack
get "icon"(): $ItemStack
}

export namespace $CreativeTabIconSupplier {
const DEFAULT: $CreativeTabIconSupplier
}
export abstract class $CreativeTabIconSupplier$$Static implements $CreativeTabIconSupplier {
static readonly "DEFAULT": $CreativeTabIconSupplier

}
}

declare module "dev.latvian.mods.kubejs.item.InputItem" {
import { $JsonElement } from "com.google.gson.JsonElement"
import { $InputReplacement, $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $List } from "java.util.List"
import { $IngredientSupplierKJS } from "dev.latvian.mods.kubejs.core.IngredientSupplierKJS"
import { $RecipeJS$$Type } from "dev.latvian.mods.kubejs.recipe.RecipeJS"
import { $JsonSerializable } from "dev.latvian.mods.rhino.mod.util.JsonSerializable"
import { $InputReplacementTransformer$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacementTransformer"
import { $Map } from "java.util.Map"
import { $InputReplacementTransformer$Replacement } from "dev.latvian.mods.kubejs.recipe.InputReplacementTransformer$Replacement"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $Ingredient, $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export class $InputItem implements $IngredientSupplierKJS, $InputReplacement, $JsonSerializable {
static readonly "EMPTY": $InputItem
static readonly "PARSE_CACHE": $Map<string, $InputItem>
readonly "count": integer
readonly "ingredient": $Ingredient

public "isEmpty"(): boolean
public "kjs$asIngredient"(): $Ingredient
public static "of"(o: any): $InputItem
public static "of"(ingredient: $Ingredient$$Type, count: integer): $InputItem
public "replaceInput"(recipe: $RecipeJS$$Type, match: $ReplacementMatch$$Type, original: $InputReplacement$$Type): any
public "toJson"(): $JsonElement
public "toJson"(alwaysNest: boolean): $JsonElement
public "transform"(transformer: $InputReplacementTransformer$$Type): $InputReplacementTransformer$Replacement
public "unwrap"(): $List<$InputItem>
public "validForMatching"(): boolean
public "withCount"(count: integer): $InputItem
get "empty"(): boolean
}
}

declare module "dev.latvian.mods.kubejs.item.MutableToolTier" {
import { $TagKey } from "net.minecraft.tags.TagKey"
import { $Tier, $Tier$$Type } from "net.minecraft.world.item.Tier"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $Ingredient, $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export class $MutableToolTier implements $Tier {
readonly "parent": $Tier

constructor(p: $Tier$$Type)

public "getAttackDamageBonus"(): float
public "getEnchantmentValue"(): integer
public "getLevel"(): integer
public "getSpeed"(): float
public "getTag"(): $TagKey<$Block>
public "getUses"(): integer
public "getVanillaRepairIngredient"(): $Ingredient
public "setAttackDamageBonus"(f: float): void
public "setEnchantmentValue"(i: integer): void
public "setLevel"(i: integer): void
public "setRepairIngredient"(in_: $Ingredient$$Type): void
public "setSpeed"(f: float): void
public "setUses"(i: integer): void
get "attackDamageBonus"(): float
get "enchantmentValue"(): integer
get "level"(): integer
get "speed"(): float
get "tag"(): $TagKey<$Block>
get "uses"(): integer
get "vanillaRepairIngredient"(): $Ingredient
set "attackDamageBonus"(value: float)
set "enchantmentValue"(value: integer)
set "level"(value: integer)
set "repairIngredient"(value: $Ingredient$$Type)
set "speed"(value: float)
set "uses"(value: integer)
}
}

declare module "dev.latvian.mods.kubejs.item.ItemClickedEventJS" {
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $PlayerEventJS } from "dev.latvian.mods.kubejs.player.PlayerEventJS"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

/**
 * Invoked when a player right clicks with an item **without targeting anything**.
 * 
 * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
 */
export class $ItemClickedEventJS extends $PlayerEventJS {
constructor(player: $Player$$Type, hand: $InteractionHand$$Type, item: $ItemStack$$Type)

/** The hand that the item was clicked with. */
public "getHand"(): $InteractionHand
/** The item that was clicked with. */
public "getItem"(): $ItemStack
/** The ray trace result of the click. */
public "getTarget"(): $RayTraceResultJS
get "hand"(): $InteractionHand
get "item"(): $ItemStack
get "target"(): $RayTraceResultJS
}
}

declare module "dev.latvian.mods.kubejs.item.ItemStackSet" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $Iterator } from "java.util.Iterator"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Spliterator } from "java.util.Spliterator"
import { $Iterable } from "java.lang.Iterable"

export class $ItemStackSet implements $Iterable<$ItemStack> {
constructor(initialSize: integer)
constructor()
constructor(...items: $ItemStack$$Type[])

public "add"(stack: $ItemStack$$Type): void
public "addItem"(item: $Item$$Type): void
public "contains"(stack: $ItemStack$$Type): boolean
public "forEach"(action: $Consumer$$Type<$ItemStack$$Type>): void
public "getFirst"(): $ItemStack
public "isEmpty"(): boolean
public "iterator"(): $Iterator<$ItemStack>
public "remove"(stack: $ItemStack$$Type): void
public "size"(): integer
public "spliterator"(): $Spliterator<$ItemStack>
public "toArray"(): $ItemStack[]
public "toList"(): $List<$ItemStack>
[Symbol.iterator](): IterableIterator<$ItemStack>;
get "first"(): $ItemStack
get "empty"(): boolean
}
}

declare module "dev.latvian.mods.kubejs.item.ItemBuilder$HurtEnemyContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Record } from "java.lang.Record"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $ItemBuilder$HurtEnemyContext extends $Record {
constructor(getItem: $ItemStack$$Type, getTarget: $LivingEntity$$Type, getAttacker: $LivingEntity$$Type)

public "getAttacker"(): $LivingEntity
public "getItem"(): $ItemStack
public "getTarget"(): $LivingEntity
get "attacker"(): $LivingEntity
get "item"(): $ItemStack
get "target"(): $LivingEntity
}
}

declare module "dev.latvian.mods.kubejs.item.custom.ArmorItemBuilder$Leggings" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ArmorItemBuilder } from "dev.latvian.mods.kubejs.item.custom.ArmorItemBuilder"

export class $ArmorItemBuilder$Leggings extends $ArmorItemBuilder {
constructor(i: $ResourceLocation$$Type)

}
}

declare module "dev.latvian.mods.kubejs.item.custom.ItemArmorTierRegistryEventJS" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $MutableArmorTier$$Type } from "dev.latvian.mods.kubejs.item.MutableArmorTier"
import { $StartupEventJS } from "dev.latvian.mods.kubejs.event.StartupEventJS"

/** Invoked when the game is starting up and the armor tier registry is being built. */
export class $ItemArmorTierRegistryEventJS extends $StartupEventJS {
constructor()

/** Adds a new armor tier with a parent tier specified by string. */
public "add"(id: string, parent: string, tier: $Consumer$$Type<$MutableArmorTier$$Type>): void
/** Adds a new armor tier. */
public "add"(id: string, tier: $Consumer$$Type<$MutableArmorTier$$Type>): void
}
}

declare module "dev.latvian.mods.kubejs.item.custom.SwordItemBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $HandheldItemBuilder } from "dev.latvian.mods.kubejs.item.custom.HandheldItemBuilder"
import { $Item } from "net.minecraft.world.item.Item"

export class $SwordItemBuilder extends $HandheldItemBuilder {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $Item
}
}

declare module "dev.latvian.mods.kubejs.item.ItemBuilder$NameCallback" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $ItemBuilder$NameCallback {
"apply"(itemStack0: $ItemStack$$Type): $Component
}

export namespace $ItemBuilder$NameCallback {
const probejs$$marker: never
}
export abstract class $ItemBuilder$NameCallback$$Static implements $ItemBuilder$NameCallback {
}
}

declare module "dev.latvian.mods.kubejs.item.custom.ArmorItemBuilder" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $MutableArmorTier, $MutableArmorTier$$Type } from "dev.latvian.mods.kubejs.item.MutableArmorTier"
import { $ArmorMaterial$$Type } from "net.minecraft.world.item.ArmorMaterial"
import { $ArmorItem$Type } from "net.minecraft.world.item.ArmorItem$Type"
import { $ItemBuilder } from "dev.latvian.mods.kubejs.item.ItemBuilder"

export class $ArmorItemBuilder extends $ItemBuilder {
readonly "armorType": $ArmorItem$Type

public "modifyTier"(callback: $Consumer$$Type<$MutableArmorTier$$Type>): $ArmorItemBuilder
public "tier"(t: $ArmorMaterial$$Type): $ArmorItemBuilder
get "armorTier"(): $MutableArmorTier
set "armorTier"(value: $MutableArmorTier$$Type)
}
}

declare module "dev.latvian.mods.kubejs.item.ItemTooltipEventJS$StaticTooltipHandler" {
import { $List$$Type } from "java.util.List"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $ItemTooltipEventJS$StaticTooltipHandler {
"tooltip"(itemStack0: $ItemStack$$Type, boolean1: boolean, list2: $List$$Type<$Component$$Type>): void
}

export namespace $ItemTooltipEventJS$StaticTooltipHandler {
const probejs$$marker: never
}
export abstract class $ItemTooltipEventJS$StaticTooltipHandler$$Static implements $ItemTooltipEventJS$StaticTooltipHandler {
}
}

declare module "dev.latvian.mods.kubejs.item.FoodEatenEventJS" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $EntityEventJS } from "dev.latvian.mods.kubejs.entity.EntityEventJS"

/** Invoked when an entity eats food. */
export class $FoodEatenEventJS extends $EntityEventJS {
constructor(e: $LivingEntity$$Type, is: $ItemStack$$Type)

/** The food that was eaten. */
public "getItem"(): $ItemStack
get "item"(): $ItemStack
}
}

declare module "dev.latvian.mods.kubejs.item.custom.ShearsItemBuilder" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ItemBuilder } from "dev.latvian.mods.kubejs.item.ItemBuilder"

export class $ShearsItemBuilder extends $ItemBuilder {
static readonly "TAG": $ResourceLocation

constructor(i: $ResourceLocation$$Type)

public static "isCustomShears"(stack: $ItemStack$$Type): boolean
public "speedBaseline"(f: float): $ShearsItemBuilder
}
}

declare module "dev.latvian.mods.kubejs.item.custom.SmithingTemplateItemBuilder" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List } from "java.util.List"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $SmithingTemplateItem } from "net.minecraft.world.item.SmithingTemplateItem"
import { $ItemBuilder } from "dev.latvian.mods.kubejs.item.ItemBuilder"

export class $SmithingTemplateItemBuilder extends $ItemBuilder {
readonly "appliesToEmptyIcons": $List<$ResourceLocation>
readonly "ingredientsSlotEmptyIcons": $List<$ResourceLocation>

constructor(i: $ResourceLocation$$Type)

/** Adds the specified texture location to the list of base slot icons that the smithing table cycles through when this smithing template is put in. */
public "addAppliesToSlotIcon"(location: $ResourceLocation$$Type): $SmithingTemplateItemBuilder
/** Adds the specified texture location to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in */
public "addIngredientsSlotIcon"(location: $ResourceLocation$$Type): $SmithingTemplateItemBuilder
/**
 * Sets the description text that shows in the item tooltip to describe what it can be applied to.
 * Using 'Armor' or 'Diamond Equipment' will use the vanilla language keys so it is translated into other languages automatically.
 * THIS IS PURELY VISUAL
 * 
 * If you wish to apply non standard formatting (like change the colour) set the `ingredientsText` field.
 */
public "appliesTo"(text: string): $SmithingTemplateItemBuilder
/**
 * Sets the description text that shows when you hover over the base item slot when this item is put in smithing table as a template.
 * Using 'Add a piece of armor' or 'Add diamond armor, weapon, or tool' will use the vanilla language keys so it is translated into other languages automatically.
 * 
 * If you wish to apply non standard formatting (like change the colour) set the `appliesToSlotDescriptionText` field.
 */
public "appliesToSlotDescription"(text: string): $SmithingTemplateItemBuilder
/** Adds all armor icons to the list of base slot icons that the smithing table cycles through when this smithing template is put in */
public "armorIcons"(): $SmithingTemplateItemBuilder
/** Adds a axe to the list of base item slot icons that the smithing table cycles through when this smithing template is put in */
public "axeIcon"(): $SmithingTemplateItemBuilder
/** Adds boots to the list of base item slot icons that the smithing table cycles through when this smithing template is put in */
public "bootsIcon"(): $SmithingTemplateItemBuilder
/** Adds a chestplate to the list of base item slot icons that the smithing table cycles through when this smithing template is put in */
public "chestplateIcon"(): $SmithingTemplateItemBuilder
public "createObject"(): $SmithingTemplateItem
/** Adds a dust, diamond, emerald, quartz, lapis lazuli and amethyst shard icons to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in */
public "crystalIcons"(): $SmithingTemplateItemBuilder
/** Adds a diamond to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in */
public "diamondIcon"(): $SmithingTemplateItemBuilder
/**
 * Sets the name for this smithing template.
 * Note that the normal display name for all smithing templates is the same and cannot be changed, this instead sets the name in the tooltip (see vanilla smithing templates for what this looks like).
 * 
 * This will be overridden by a lang file if it exists.
 */
public "displayName"(name: $Component$$Type): $SmithingTemplateItemBuilder
/** Adds a dust to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in */
public "dustIcon"(): $SmithingTemplateItemBuilder
/** Adds an emerald to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in */
public "emeraldIcon"(): $SmithingTemplateItemBuilder
/** Adds all armor and basic tool icons to the list of base slot icons that the smithing table cycles through when this smithing template is put in */
public "equipmentIcons"(): $SmithingTemplateItemBuilder
/** Adds a helmet to the list of base item slot icons that the smithing table cycles through when this smithing template is put in */
public "helmetIcon"(): $SmithingTemplateItemBuilder
/** Adds a hoe to the list of base item slot icons that the smithing table cycles through when this smithing template is put in */
public "hoeIcon"(): $SmithingTemplateItemBuilder
/** Adds an ingot, dust, diamond, emerald, quartz, lapis lazuli and amethyst shard icons to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in */
public "ingotAndCrystalIcons"(): $SmithingTemplateItemBuilder
/** Adds an ingot to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in */
public "ingotIcon"(): $SmithingTemplateItemBuilder
/**
 * Sets the description text that shows in the item tooltip to describe what ingredients can be added.
 * Using 'Ingots & Crystals' or 'Netherite Ingot' will use the vanilla language keys so it is translated into other languages automatically.
 * THIS IS PURELY VISUAL
 * 
 * If you wish to apply non standard formatting (like change the colour) set the `ingredientsText` field.
 */
public "ingredients"(text: string): $SmithingTemplateItemBuilder
/**
 * Sets the description text that shows when you hover over the ingredient slot when this item is put in smithing table as a template.
 * Using 'Add ingot or crystal' or 'Add Netherite Ingot' will use the vanilla language keys so it is translated into other languages automatically.
 * 
 * If you wish to apply non standard formatting (like change the colour) set the `ingredientSlotDescriptionText` field.
 */
public "ingredientsSlotDescription"(text: string): $SmithingTemplateItemBuilder
/** Adds a lapis lazuli to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in */
public "lapisIcon"(): $SmithingTemplateItemBuilder
/** Adds leggings to the list of base item slot icons that the smithing table cycles through when this smithing template is put in */
public "leggingsIcon"(): $SmithingTemplateItemBuilder
/** Adds a pickaxe to the list of base item slot icons that the smithing table cycles through when this smithing template is put in */
public "pickaxeIcon"(): $SmithingTemplateItemBuilder
/** Adds a quartz to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in */
public "quartzIcon"(): $SmithingTemplateItemBuilder
/** Adds an amethyst shard to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in */
public "shardIcon"(): $SmithingTemplateItemBuilder
/** Adds a shovel to the list of base item slot icons that the smithing table cycles through when this smithing template is put in */
public "shovelIcon"(): $SmithingTemplateItemBuilder
/** Adds a sword to the list of base item slot icons that the smithing table cycles through when this smithing template is put in */
public "swordIcon"(): $SmithingTemplateItemBuilder
/** Adds all basic tool icons to the list of base slot icons that the smithing table cycles through when this smithing template is put in */
public "toolIcons"(): $SmithingTemplateItemBuilder
get "appliesToSlotDescriptionText"(): $Component
set "appliesToSlotDescriptionText"(value: $Component$$Type)
get "appliesToText"(): $Component
set "appliesToText"(value: $Component$$Type)
get "ingredientSlotDescriptionText"(): $Component
set "ingredientSlotDescriptionText"(value: $Component$$Type)
get "ingredientsText"(): $Component
set "ingredientsText"(value: $Component$$Type)
}
}

declare module "dev.latvian.mods.kubejs.item.FoodBuilder" {
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $FoodProperties, $FoodProperties$$Type } from "net.minecraft.world.food.FoodProperties"
import { $FoodEatenEventJS, $FoodEatenEventJS$$Type } from "dev.latvian.mods.kubejs.item.FoodEatenEventJS"
import { $MobEffect$$Type } from "net.minecraft.world.effect.MobEffect"

export class $FoodBuilder {
"eaten": $Consumer<$FoodEatenEventJS>

constructor()
constructor(properties: $FoodProperties$$Type)

/** Sets whether the food is always edible. */
public "alwaysEdible"(flag: boolean): $FoodBuilder
/** Sets the food is always edible. */
public "alwaysEdible"(): $FoodBuilder
public "build"(): $FoodProperties
/**
 * Sets a callback that is called when the food is eaten.
 * 
 * Note: This is currently not having effect in `ItemEvents.modification`,
 * as firing this callback requires an `ItemBuilder` instance in the `Item`.
 */
public "eaten"(e: $Consumer$$Type<$FoodEatenEventJS$$Type>): $FoodBuilder
/**
 * Adds an effect to the food. Note that the effect duration is in ticks (20 ticks = 1 second).
 * 
 * @param mobEffectId - The id of the effect. Can be either a string or a ResourceLocation.
 * @param duration - The duration of the effect in ticks.
 * @param amplifier - The amplifier of the effect. 0 means level 1, 1 means level 2, etc.
 * @param probability - The probability of the effect being applied. 1 = 100%.
 */
public "effect"(mobEffectId: $ResourceLocation$$Type, duration: integer, amplifier: integer, probability: float): $FoodBuilder
/** Sets the food is fast to eat (having half of the eating time). */
public "fastToEat"(): $FoodBuilder
/** Sets whether the food is fast to eat (having half of the eating time). */
public "fastToEat"(flag: boolean): $FoodBuilder
/** Sets the hunger restored. */
public "hunger"(h: integer): $FoodBuilder
/** Sets the food is meat. */
public "meat"(): $FoodBuilder
/** Sets whether the food is meat. */
public "meat"(flag: boolean): $FoodBuilder
/** Removes an effect from the food. */
public "removeEffect"(mobEffect: $MobEffect$$Type): $FoodBuilder
/** Sets the saturation modifier. Note that the saturation restored is hunger * saturation. */
public "saturation"(s: float): $FoodBuilder
}
}

declare module "dev.latvian.mods.kubejs.item.ItemBuilder$ReleaseUsingCallback" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $ItemBuilder$ReleaseUsingCallback {
"releaseUsing"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, livingEntity2: $LivingEntity$$Type, int3: integer): void
}

export namespace $ItemBuilder$ReleaseUsingCallback {
const probejs$$marker: never
}
export abstract class $ItemBuilder$ReleaseUsingCallback$$Static implements $ItemBuilder$ReleaseUsingCallback {
}
}

declare module "dev.latvian.mods.kubejs.item.ItemModificationEventJS" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

/** Invoked after all items are registered to modify them. */
export class $ItemModificationEventJS extends $EventJS {
constructor()

/**
 * Modifies items matching the given ingredient.
 * 
 * **NOTE**: tag ingredients are not supported at this time.
 */
public "modify"(in_: $Ingredient$$Type, c: $Consumer$$Type<$Item$$Type>): void
}
}

declare module "dev.latvian.mods.kubejs.item.custom.ArmorItemBuilder$Boots" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ArmorItemBuilder } from "dev.latvian.mods.kubejs.item.custom.ArmorItemBuilder"

export class $ArmorItemBuilder$Boots extends $ArmorItemBuilder {
constructor(i: $ResourceLocation$$Type)

}
}

declare module "dev.latvian.mods.kubejs.item.custom.RecordItemJS$Builder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $ItemBuilder } from "dev.latvian.mods.kubejs.item.ItemBuilder"

export class $RecordItemJS$Builder extends $ItemBuilder {
constructor(i: $ResourceLocation$$Type)

/** Sets the redstone output of the jukebox when this record is played. */
public "analogOutput"(o: integer): $RecordItemJS$Builder
public "getSoundEvent"(): $SoundEvent
/**
 * Sets the song that will play when this record is played.
 * 
 * @param s - The location of sound event.
 * @param seconds - The length of the song in seconds.
 */
public "song"(s: $ResourceLocation$$Type, seconds: integer): $RecordItemJS$Builder
get "soundEvent"(): $SoundEvent
}
}

declare module "dev.latvian.mods.kubejs.item.custom.ItemToolTierRegistryEventJS" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $MutableToolTier$$Type } from "dev.latvian.mods.kubejs.item.MutableToolTier"
import { $StartupEventJS } from "dev.latvian.mods.kubejs.event.StartupEventJS"

/** Invoked when the game is starting up and the item tool tiers are being registered. */
export class $ItemToolTierRegistryEventJS extends $StartupEventJS {
constructor()

/** Adds a new tool tier. */
public "add"(id: string, tier: $Consumer$$Type<$MutableToolTier$$Type>): void
}
}

declare module "dev.latvian.mods.kubejs.item.forge.ItemDestroyedEventJS" {
import { $PlayerDestroyItemEvent$$Type } from "net.minecraftforge.event.entity.player.PlayerDestroyItemEvent"
import { $InteractionHand } from "net.minecraft.world.InteractionHand"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $PlayerEventJS } from "dev.latvian.mods.kubejs.player.PlayerEventJS"

export class $ItemDestroyedEventJS extends $PlayerEventJS {
constructor(e: $PlayerDestroyItemEvent$$Type)

public "getHand"(): $InteractionHand
public "getItem"(): $ItemStack
get "hand"(): $InteractionHand
get "item"(): $ItemStack
}
}

declare module "dev.latvian.mods.kubejs.item.MutableArmorTier" {
import { $ArmorMaterial, $ArmorMaterial$$Type } from "net.minecraft.world.item.ArmorMaterial"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $ArmorItem$Type$$Type } from "net.minecraft.world.item.ArmorItem$Type"
import { $Ingredient, $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export class $MutableArmorTier implements $ArmorMaterial {
readonly "parent": $ArmorMaterial

constructor(id: string, p: $ArmorMaterial$$Type)

public "getDefenseForType"(equipmentSlot: $ArmorItem$Type$$Type): integer
public "getDurabilityForType"(equipmentSlot: $ArmorItem$Type$$Type): integer
public "getEnchantmentValue"(): integer
public "getEquipSound"(): $SoundEvent
public "getKnockbackResistance"(): float
public "getName"(): string
public "getToughness"(): float
public "getVanillaRepairIngredient"(): $Ingredient
public "setDurabilityMultiplier"(m: integer): void
public "setEnchantmentValue"(i: integer): void
public "setEquipSound"(e: $SoundEvent$$Type): void
public "setKnockbackResistance"(f: float): void
public "setName"(name: string): void
public "setRepairIngredient"(in_: $Ingredient$$Type): void
public "setSlotProtections"(p: integer[]): void
public "setToughness"(f: float): void
get "enchantmentValue"(): integer
get "equipSound"(): $SoundEvent
get "knockbackResistance"(): float
get "name"(): string
get "toughness"(): float
get "vanillaRepairIngredient"(): $Ingredient
set "durabilityMultiplier"(value: integer)
set "enchantmentValue"(value: integer)
set "equipSound"(value: $SoundEvent$$Type)
set "knockbackResistance"(value: float)
set "name"(value: string)
set "repairIngredient"(value: $Ingredient$$Type)
set "slotProtections"(value: integer[])
set "toughness"(value: float)
}
}

declare module "dev.latvian.mods.kubejs.item.custom.BasicItemJS$Builder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Item } from "net.minecraft.world.item.Item"
import { $ItemBuilder } from "dev.latvian.mods.kubejs.item.ItemBuilder"

export class $BasicItemJS$Builder extends $ItemBuilder {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $Item
}
}

declare module "dev.latvian.mods.kubejs.item.ItemCraftedEventJS" {
import { $Container$$Type } from "net.minecraft.world.Container"
import { $InventoryKJS } from "dev.latvian.mods.kubejs.core.InventoryKJS"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $PlayerEventJS } from "dev.latvian.mods.kubejs.player.PlayerEventJS"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

/** Invoked when a player crafts an item. */
export class $ItemCraftedEventJS extends $PlayerEventJS {
constructor(player: $Player$$Type, crafted: $ItemStack$$Type, container: $Container$$Type)

/** The inventory that the item was crafted in. */
public "getInventory"(): $InventoryKJS
/** The item that was crafted. */
public "getItem"(): $ItemStack
get "inventory"(): $InventoryKJS
get "item"(): $ItemStack
}
}

declare module "dev.latvian.mods.kubejs.item.custom.ShovelItemBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $HandheldItemBuilder } from "dev.latvian.mods.kubejs.item.custom.HandheldItemBuilder"
import { $Item } from "net.minecraft.world.item.Item"

export class $ShovelItemBuilder extends $HandheldItemBuilder {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $Item
}
}

declare module "dev.latvian.mods.kubejs.item.creativetab.CreativeTabCallback" {
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $CreativeModeTab$TabVisibility$$Type } from "net.minecraft.world.item.CreativeModeTab$TabVisibility"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export interface $CreativeTabCallback {
"addAfter"(itemStack0: $ItemStack$$Type, itemStack1s: $ItemStack$$Type[], tabVisibility2: $CreativeModeTab$TabVisibility$$Type): void
"addBefore"(itemStack0: $ItemStack$$Type, itemStack1s: $ItemStack$$Type[], tabVisibility2: $CreativeModeTab$TabVisibility$$Type): void
"remove"(ingredient0: $Ingredient$$Type, boolean1: boolean, boolean2: boolean): void
}

export namespace $CreativeTabCallback {
const probejs$$marker: never
}
export abstract class $CreativeTabCallback$$Static implements $CreativeTabCallback {
}
}

declare module "dev.latvian.mods.kubejs.item.OutputItem" {
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $RecipeJS$$Type } from "dev.latvian.mods.kubejs.recipe.RecipeJS"
import { $InputItem } from "dev.latvian.mods.kubejs.item.InputItem"
import { $IntProvider, $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $OutputReplacementTransformer$Replacement } from "dev.latvian.mods.kubejs.recipe.OutputReplacementTransformer$Replacement"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $OutputReplacementTransformer$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacementTransformer"
import { $OutputReplacement, $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"

export class $OutputItem implements $OutputReplacement {
static readonly "EMPTY": $OutputItem
readonly "chance": double
readonly "item": $ItemStack
readonly "rolls": $IntProvider

public "getChance"(): double
public "getCount"(): integer
public "getNbt"(): $CompoundTag
public "hasChance"(): boolean
/** @deprecated */
public "ignoreNBT"(): $InputItem
public "isEmpty"(): boolean
public static "of"(from: any): $OutputItem
public static "of"(item: $ItemStack$$Type, chance: double): $OutputItem
public "replaceOutput"(recipe: $RecipeJS$$Type, match: $ReplacementMatch$$Type, original: $OutputReplacement$$Type): any
public "strongNBT"(): $InputItem
public "transform"(transformer: $OutputReplacementTransformer$$Type): $OutputReplacementTransformer$Replacement
public "weakNBT"(): $InputItem
public "withChance"(chance: double): $OutputItem
public "withCount"(count: integer): $OutputItem
public "withRolls"(min: integer, max: integer): $OutputItem
public "withRolls"(rolls: $IntProvider$$Type): $OutputItem
get "count"(): integer
get "nbt"(): $CompoundTag
get "empty"(): boolean
}
}

declare module "dev.latvian.mods.kubejs.item.ItemTooltipEventJS$StaticTooltipHandlerFromJS" {
import { $List$$Type } from "java.util.List"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $ItemTooltipEventJS$StaticTooltipHandlerFromJS {
"accept"(itemStack0: $ItemStack$$Type, boolean1: boolean, list2: $List$$Type<any>): void
}

export namespace $ItemTooltipEventJS$StaticTooltipHandlerFromJS {
const probejs$$marker: never
}
export abstract class $ItemTooltipEventJS$StaticTooltipHandlerFromJS$$Static implements $ItemTooltipEventJS$StaticTooltipHandlerFromJS {
}
}

declare module "dev.latvian.mods.kubejs.item.ItemBuilder$UseCallback" {
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $ItemBuilder$UseCallback {
"use"(level0: $Level$$Type, player1: $Player$$Type, interactionHand2: $InteractionHand$$Type): boolean
}

export namespace $ItemBuilder$UseCallback {
const probejs$$marker: never
}
export abstract class $ItemBuilder$UseCallback$$Static implements $ItemBuilder$UseCallback {
}
}

declare module "dev.latvian.mods.kubejs.item.creativetab.CreativeTabEvent" {
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $CreativeModeTab, $CreativeModeTab$$Type } from "net.minecraft.world.item.CreativeModeTab"
import { $CreativeTabCallback$$Type } from "dev.latvian.mods.kubejs.item.creativetab.CreativeTabCallback"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $CreativeModeTab$TabVisibility$$Type } from "net.minecraft.world.item.CreativeModeTab$TabVisibility"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export class $CreativeTabEvent extends $EventJS {
readonly "showRestrictedItems": boolean
readonly "tab": $CreativeModeTab

constructor(tab: $CreativeModeTab$$Type, showRestrictedItems: boolean, callback: $CreativeTabCallback$$Type)

public "add"(items: $ItemStack$$Type[]): void
public "add"(items: $ItemStack$$Type[], visibility: $CreativeModeTab$TabVisibility$$Type): void
public "addAfter"(order: $ItemStack$$Type, items: $ItemStack$$Type[], visibility: $CreativeModeTab$TabVisibility$$Type): void
public "addAfter"(order: $ItemStack$$Type, items: $ItemStack$$Type[]): void
public "addBefore"(order: $ItemStack$$Type, items: $ItemStack$$Type[], visibility: $CreativeModeTab$TabVisibility$$Type): void
public "addBefore"(order: $ItemStack$$Type, items: $ItemStack$$Type[]): void
public "remove"(filter: $Ingredient$$Type): void
public "removeDisplay"(filter: $Ingredient$$Type): void
public "removeSearch"(filter: $Ingredient$$Type): void
public "setDisplayName"(component: $Component$$Type): void
public "setIcon"(icon: $ItemStack$$Type): void
set "displayName"(value: $Component$$Type)
set "icon"(value: $ItemStack$$Type)
}
}

declare module "dev.latvian.mods.kubejs.item.ItemTintFunction" {
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $Color } from "dev.latvian.mods.rhino.mod.util.color.Color"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $ItemTintFunction {
"getColor"(itemStack0: $ItemStack$$Type, int1: integer): $Color
}

export namespace $ItemTintFunction {
const BLOCK: $ItemTintFunction
const DISPLAY_COLOR_NBT: $ItemTintFunction
const MAP: $ItemTintFunction
const POTION: $ItemTintFunction
function of(cx: $Context$$Type, o: any): $ItemTintFunction
}
export abstract class $ItemTintFunction$$Static implements $ItemTintFunction {
static readonly "BLOCK": $ItemTintFunction
static readonly "DISPLAY_COLOR_NBT": $ItemTintFunction
static readonly "MAP": $ItemTintFunction
static readonly "POTION": $ItemTintFunction

static "of"(cx: $Context$$Type, o: any): $ItemTintFunction
}
}

declare module "dev.latvian.mods.kubejs.item.ItemEntityInteractedEventJS" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $PlayerEventJS } from "dev.latvian.mods.kubejs.player.PlayerEventJS"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

/** Invoked when a player right clicks on an entity. */
export class $ItemEntityInteractedEventJS extends $PlayerEventJS {
constructor(player: $Player$$Type, entity: $Entity$$Type, hand: $InteractionHand$$Type)

/** The hand that was used to interact with the entity. */
public "getHand"(): $InteractionHand
/** The item that was used to interact with the entity. */
public "getItem"(): $ItemStack
/** The entity that was interacted with. */
public "getTarget"(): $Entity
get "hand"(): $InteractionHand
get "item"(): $ItemStack
get "target"(): $Entity
}
}

declare module "dev.latvian.mods.kubejs.item.custom.HandheldItemBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Tier$$Type } from "net.minecraft.world.item.Tier"
import { $MutableToolTier$$Type } from "dev.latvian.mods.kubejs.item.MutableToolTier"
import { $ItemBuilder } from "dev.latvian.mods.kubejs.item.ItemBuilder"

export class $HandheldItemBuilder extends $ItemBuilder {
constructor(i: $ResourceLocation$$Type, d: float, s: float)

/**
 * Sets the base attack damage of the tool. Different tools have different baselines.
 * 
 * For example, a sword has a baseline of 3, while an axe has a baseline of 6.
 * 
 * The actual damage is the sum of the baseline and the attackDamageBonus from tier.
 */
public "attackDamageBaseline"(f: float): $HandheldItemBuilder
/** Sets the attack damage bonus of the tool. */
public "attackDamageBonus"(f: float): $HandheldItemBuilder
/** Modifies the tool tier. */
public "modifyTier"(callback: $Consumer$$Type<$MutableToolTier$$Type>): $HandheldItemBuilder
/** Sets the attack speed of the tool. */
public "speed"(f: float): $HandheldItemBuilder
/**
 * Sets the base attack speed of the tool. Different tools have different baselines.
 * 
 * For example, a sword has a baseline of -2.4, while an axe has a baseline of -3.1.
 * 
 * The actual speed is the sum of the baseline and the speed from tier + 4 (bare hand).
 */
public "speedBaseline"(f: float): $HandheldItemBuilder
public "tier"(t: $Tier$$Type): $HandheldItemBuilder
}
}

declare module "dev.latvian.mods.kubejs.item.creativetab.CreativeTabContentSupplier" {
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $CreativeTabContentSupplier {
"getContent"(boolean0: boolean): $ItemStack[]
}

export namespace $CreativeTabContentSupplier {
const DEFAULT: $CreativeTabContentSupplier
}
export abstract class $CreativeTabContentSupplier$$Static implements $CreativeTabContentSupplier {
static readonly "DEFAULT": $CreativeTabContentSupplier

}
}

declare module "dev.latvian.mods.kubejs.item.ItemModelPropertiesEventJS" {
import { $ClampedItemPropertyFunction$$Type } from "net.minecraft.client.renderer.item.ClampedItemPropertyFunction"
import { $StartupEventJS } from "dev.latvian.mods.kubejs.event.StartupEventJS"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export class $ItemModelPropertiesEventJS extends $StartupEventJS {
constructor()

/**
 * Register a model property for an item. Model properties are used to change the appearance of an item in the world.
 * 
 * More about model properties: https://minecraft.fandom.com/wiki/Model#Item_predicates
 */
public "register"(ingredient: $Ingredient$$Type, overwriteId: string, callback: $ClampedItemPropertyFunction$$Type): void
/** Register a model property for all items. */
public "registerAll"(overwriteId: string, callback: $ClampedItemPropertyFunction$$Type): void
}
}

declare module "dev.latvian.mods.kubejs.item.ItemPickedUpEventJS" {
import { $ItemEntity, $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $PlayerEventJS } from "dev.latvian.mods.kubejs.player.PlayerEventJS"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

/** Invoked when a player picks up an item. Cancelling (in `ItemEvents.canPickUp`) will prevent the item from being picked up. */
export class $ItemPickedUpEventJS extends $PlayerEventJS {
constructor(player: $Player$$Type, entity: $ItemEntity$$Type, stack: $ItemStack$$Type)

/** The item that was picked up. */
public "getItem"(): $ItemStack
/** The item entity that was picked up. */
public "getItemEntity"(): $ItemEntity
get "item"(): $ItemStack
get "itemEntity"(): $ItemEntity
}
}

declare module "dev.latvian.mods.kubejs.item.ItemBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $Tier } from "net.minecraft.world.item.Tier"
import { $Item$Properties } from "net.minecraft.world.item.Item$Properties"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $ItemBuilder$ReleaseUsingCallback$$Type } from "dev.latvian.mods.kubejs.item.ItemBuilder$ReleaseUsingCallback"
import { $Function$$Type } from "java.util.function.Function"
import { $ItemBuilder$FinishUsingCallback$$Type } from "dev.latvian.mods.kubejs.item.ItemBuilder$FinishUsingCallback"
import { $ItemBuilder$HurtEnemyContext$$Type } from "dev.latvian.mods.kubejs.item.ItemBuilder$HurtEnemyContext"
import { $ArmorMaterial } from "net.minecraft.world.item.ArmorMaterial"
import { $Map } from "java.util.Map"
import { $ItemTintFunction$$Type } from "dev.latvian.mods.kubejs.item.ItemTintFunction"
import { $ItemBuilder$NameCallback$$Type } from "dev.latvian.mods.kubejs.item.ItemBuilder$NameCallback"
import { $Color } from "dev.latvian.mods.rhino.mod.util.color.Color"
import { $ItemBuilder$UseCallback$$Type } from "dev.latvian.mods.kubejs.item.ItemBuilder$UseCallback"
import { $UseAnim$$Type } from "net.minecraft.world.item.UseAnim"
import { $BuilderBase } from "dev.latvian.mods.kubejs.registry.BuilderBase"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection } from "java.util.Collection"
import { $ToIntFunction$$Type } from "java.util.function.ToIntFunction"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $FoodBuilder$$Type } from "dev.latvian.mods.kubejs.item.FoodBuilder"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Rarity$$Type } from "net.minecraft.world.item.Rarity"

export class $ItemBuilder extends $BuilderBase<$Item> {
static readonly "ARMOR_TIERS": $Map<string, $ArmorMaterial>
static readonly "TOOL_TIERS": $Map<string, $Tier>
"modelJson": $JsonObject
"parentModel": string
"texture": string
"textureJson": $JsonObject

constructor(i: $ResourceLocation$$Type)

/** Determines the color of the item's durability bar. Defaulted to vanilla behavior. */
public "barColor"(barColor: $Function$$Type<$ItemStack$$Type, $Color>): $ItemBuilder
/**
 * Determines the width of the item's durability bar. Defaulted to vanilla behavior.
 * 
 * The function should return a value between 0 and 13 (max width of the bar).
 */
public "barWidth"(barWidth: $ToIntFunction$$Type<$ItemStack$$Type>): $ItemBuilder
/** Sets the item's burn time. Default is 0 (Not a fuel). */
public "burnTime"(v: integer): $ItemBuilder
/** Colorizes item's texture of the given index. Index is used when you have multiple layers, e.g. a crushed ore (of rock + ore). */
public "color"(index: integer, color: $ItemTintFunction$$Type): $ItemBuilder
/** Colorizes item's texture of the given index. Useful for coloring items, like GT ores ore dusts. */
public "color"(callback: $ItemTintFunction$$Type): $ItemBuilder
/** Sets the item's container item, e.g. a bucket for a milk bucket. */
public "containerItem"(id: $ResourceLocation$$Type): $ItemBuilder
public "createItemProperties"(): $Item$Properties
/**
 * When players finish using the item.
 * 
 * This is called only when `useDuration` ticks have passed.
 * 
 * For example, when eating food, this is called when the player has finished eating the food, so hunger is restored.
 */
public "finishUsing"(finishUsing: $ItemBuilder$FinishUsingCallback$$Type): $ItemBuilder
/** Makes the item fire resistant like netherite tools. */
public "fireResistant"(): $ItemBuilder
/** Makes the item fire resistant like netherite tools (or not). */
public "fireResistant"(isFireResistant: boolean): $ItemBuilder
/** Set the food properties of the item. */
public "food"(b: $Consumer$$Type<$FoodBuilder$$Type>): $ItemBuilder
/** Makes the item glow like enchanted, even if it's not enchanted. */
public "glow"(v: boolean): $ItemBuilder
/** @deprecated */
public "group"(g: string): $ItemBuilder
/**
 * Gets called when the item is used to hurt an entity.
 * 
 * For example, when using a sword to hit a mob, this is called.
 */
public "hurtEnemy"(context: $Predicate$$Type<$ItemBuilder$HurtEnemyContext$$Type>): $ItemBuilder
/** Sets the item's max damage. Default is 0 (No durability). */
public "maxDamage"(v: integer): $ItemBuilder
/** Sets the item's max stack size. Default is 64. */
public "maxStackSize"(v: integer): $ItemBuilder
/** Directly set the item's model json. */
public "modelJson"(json: $JsonObject$$Type): $ItemBuilder
/**
 * Adds an attribute modifier to the item.
 * 
 * An attribute modifier is something like a damage boost or a speed boost.
 * On tools, they're applied when the item is held, on armor, they're
 * applied when the item is worn.
 * 
 * @param attribute - The resource location of the attribute, e.g. 'generic.attack_damage'
 * @param identifier - A unique identifier for the modifier. Modifiers are considered the same if they have the same identifier.
 * @param d - The amount of the modifier.
 * @param operation - The operation to apply the modifier with. Can be ADDITION, MULTIPLY_BASE, or MULTIPLY_TOTAL.
 */
public "modifyAttribute"(attribute: $ResourceLocation$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): $ItemBuilder
/** Sets the item's name dynamically. */
public "name"(name: $ItemBuilder$NameCallback$$Type): $ItemBuilder
/** Sets the item's model (parent). */
public "parentModel"(m: string): $ItemBuilder
/** Sets the item's rarity. */
public "rarity"(v: $Rarity$$Type): $ItemBuilder
/**
 * When players did not finish using the item but released the right mouse button halfway through.
 * 
 * An example is the bow, where the arrow is shot when the player releases the right mouse button.
 * 
 * To ensure the bow won't finish using, Minecraft sets the `useDuration` to a very high number (1h).
 */
public "releaseUsing"(releaseUsing: $ItemBuilder$ReleaseUsingCallback$$Type): $ItemBuilder
/**
 * Adds subtypes to the item. The function should return a collection of item stacks, each with a different subtype.
 * 
 * Each subtype will appear as a separate item in JEI and the creative inventory.
 */
public "subtypes"(fn: $Function$$Type<$ItemStack$$Type, $Collection<$ItemStack>>): $ItemBuilder
/** Sets the item's texture (layer0). */
public "texture"(tex: string): $ItemBuilder
/** Sets the item's texture by given key. */
public "texture"(key: string, tex: string): $ItemBuilder
/** Directlys set the item's texture json. */
public "textureJson"(json: $JsonObject$$Type): $ItemBuilder
public static "toArmorMaterial"(o: any): $ArmorMaterial
public static "toToolTier"(o: any): $Tier
/** Adds a tooltip to the item. */
public "tooltip"(text: $Component$$Type): $ItemBuilder
public "transformObject"(obj: $Item$$Type): $Item
/** Makes the item not stackable, equivalent to setting the item's max stack size to 1. */
public "unstackable"(): $ItemBuilder
/**
 * Determines if player will start using the item.
 * 
 * For example, when eating food, returning true will make the player start eating the food.
 */
public "use"(use: $ItemBuilder$UseCallback$$Type): $ItemBuilder
/** Determines the animation of the item when used, e.g. eating food. */
public "useAnimation"(animation: $UseAnim$$Type): $ItemBuilder
/**
 * The duration when the item is used.
 * 
 * For example, when eating food, this is the time it takes to eat the food.
 * This can change the eating speed, or be used for other things (like making a custom bow).
 */
public "useDuration"(useDuration: $ToIntFunction$$Type<$ItemStack$$Type>): $ItemBuilder
}
}

declare module "dev.latvian.mods.kubejs.item.ItemStackKey" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $ItemStackKey {
static "EMPTY": $ItemStackKey

constructor(item: $Item$$Type, tag: $CompoundTag$$Type)

public static "of"(stack: $ItemStack$$Type): $ItemStackKey
}
}

declare module "dev.latvian.mods.kubejs.item.custom.AxeItemBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $HandheldItemBuilder } from "dev.latvian.mods.kubejs.item.custom.HandheldItemBuilder"
import { $Item } from "net.minecraft.world.item.Item"

export class $AxeItemBuilder extends $HandheldItemBuilder {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $Item
}
}

declare module "dev.latvian.mods.kubejs.item.ItemSmeltedEventJS" {
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $PlayerEventJS } from "dev.latvian.mods.kubejs.player.PlayerEventJS"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

/** Invoked when an item is smelted by a player. */
export class $ItemSmeltedEventJS extends $PlayerEventJS {
constructor(player: $Player$$Type, smelted: $ItemStack$$Type)

/** The item that was smelted. */
public "getItem"(): $ItemStack
get "item"(): $ItemStack
}
}

declare module "dev.latvian.mods.kubejs.item.ItemDroppedEventJS" {
import { $ItemEntity, $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $PlayerEventJS } from "dev.latvian.mods.kubejs.player.PlayerEventJS"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

/** Invoked when a player drops an item. */
export class $ItemDroppedEventJS extends $PlayerEventJS {
constructor(player: $Player$$Type, entity: $ItemEntity$$Type)

/** The item that was dropped. */
public "getItem"(): $ItemStack
/** The item entity that was spawned when dropping. */
public "getItemEntity"(): $ItemEntity
get "item"(): $ItemStack
get "itemEntity"(): $ItemEntity
}
}

declare module "dev.latvian.mods.kubejs.item.ItemBuilder$FinishUsingCallback" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $ItemBuilder$FinishUsingCallback {
"finishUsingItem"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, livingEntity2: $LivingEntity$$Type): $ItemStack
}

export namespace $ItemBuilder$FinishUsingCallback {
const probejs$$marker: never
}
export abstract class $ItemBuilder$FinishUsingCallback$$Static implements $ItemBuilder$FinishUsingCallback {
}
}

declare module "dev.latvian.mods.kubejs.item.creativetab.CreativeTabBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CreativeModeTab } from "net.minecraft.world.item.CreativeModeTab"
import { $CreativeTabContentSupplier$$Type } from "dev.latvian.mods.kubejs.item.creativetab.CreativeTabContentSupplier"
import { $CreativeTabIconSupplier$$Type } from "dev.latvian.mods.kubejs.item.creativetab.CreativeTabIconSupplier"
import { $BuilderBase } from "dev.latvian.mods.kubejs.registry.BuilderBase"

export class $CreativeTabBuilder extends $BuilderBase<$CreativeModeTab> {
constructor(i: $ResourceLocation$$Type)

public "content"(content: $CreativeTabContentSupplier$$Type): $CreativeTabBuilder
public "createObject"(): $CreativeModeTab
public "icon"(icon: $CreativeTabIconSupplier$$Type): $CreativeTabBuilder
}
}

