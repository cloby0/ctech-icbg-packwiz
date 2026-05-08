declare module "com.gregtechceu.gtceu.api.item.component.ICustomDescriptionId" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $IItemComponent } from "com.gregtechceu.gtceu.api.item.component.IItemComponent"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $ICustomDescriptionId extends $IItemComponent {
"getItemDescriptionId"(itemStack0: $ItemStack$$Type): string
"getItemName"(itemStack0: $ItemStack$$Type): $Component
"onAttached"(item0: $Item$$Type): void
}

export namespace $ICustomDescriptionId {
const probejs$$marker: never
}
export abstract class $ICustomDescriptionId$$Static implements $ICustomDescriptionId {
}
}

declare module "com.gregtechceu.gtceu.api.item.MetaMachineItem" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $ICapabilityProvider } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item$Properties$$Type } from "net.minecraft.world.item.Item$Properties"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
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
import { $IMachineBlock$$Type } from "com.gregtechceu.gtceu.api.block.IMachineBlock"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $BlockItem } from "net.minecraft.world.item.BlockItem"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $UUID$$Type } from "java.util.UUID"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $Attribute, $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $EnderMan$$Type } from "net.minecraft.world.entity.monster.EnderMan"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $MachineDefinition } from "com.gregtechceu.gtceu.api.machine.MachineDefinition"
import { $MutableToolTier$$Type } from "dev.latvian.mods.kubejs.item.MutableToolTier"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $AdditionalItemPlacement, $AdditionalItemPlacement$$Type } from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import { $FoodBuilder$$Type } from "dev.latvian.mods.kubejs.item.FoodBuilder"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $MetaMachineItem extends $BlockItem {
constructor(iMachineBlock0: $IMachineBlock$$Type, properties1: $Item$Properties$$Type)

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
public "getCraftingRemainingItem"(itemStack0: $ItemStack$$Type): $ItemStack
public "getCreativeTab"(): string
public "getCreatorModId"(itemStack0: $ItemStack$$Type): string
public "getDamage"(itemStack0: $ItemStack$$Type): integer
public "getDefaultTooltipHideFlags"(itemStack0: $ItemStack$$Type): integer
public "getDefinition"(): $MachineDefinition
public "getDigSpeed"(): float
public "getEnchantmentLevel"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): integer
public "getEnchantmentValue"(itemStack0: $ItemStack$$Type): integer
public "getEntityLifespan"(itemStack0: $ItemStack$$Type, level1: $Level$$Type): integer
public "getEquipmentSlot"(itemStack0: $ItemStack$$Type): $EquipmentSlot
public "getFoodProperties"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): $FoodProperties
public "getHighlightTip"(itemStack0: $ItemStack$$Type, component1: $Component$$Type): $Component
public "getMaxDamage"(itemStack0: $ItemStack$$Type): integer
public "getMaxStackSize"(itemStack0: $ItemStack$$Type): integer
public "getMod"(): string
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
public "moonlight$addAdditionalBehavior"(additionalItemPlacement0: $AdditionalItemPlacement$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(object0: any): void
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
get "definition"(): $MachineDefinition
get "digSpeed"(): float
get "mod"(): string
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

declare module "com.gregtechceu.gtceu.api.item.tool.MaterialToolTier" {
import { $TagKey } from "net.minecraft.tags.TagKey"
import { $ToolProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty"
import { $Tier } from "net.minecraft.world.item.Tier"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $Material, $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"

export class $MaterialToolTier implements $Tier {
readonly "material": $Material
readonly "property": $ToolProperty

constructor(material0: $Material$$Type)

public "getAttackDamageBonus"(): float
public "getEnchantmentValue"(): integer
public "getLevel"(): integer
public "getRepairIngredient"(): $Ingredient
public "getSpeed"(): float
public "getTag"(): $TagKey<$Block>
public "getUses"(): integer
get "attackDamageBonus"(): float
get "enchantmentValue"(): integer
get "level"(): integer
get "repairIngredient"(): $Ingredient
get "speed"(): float
get "tag"(): $TagKey<$Block>
get "uses"(): integer
}
}

declare module "com.gregtechceu.gtceu.api.item.tool.GTToolType$Builder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $GTToolType$ToolConstructor$$Type } from "com.gregtechceu.gtceu.api.item.tool.GTToolType$ToolConstructor"
import { $Collection$$Type } from "java.util.Collection"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $GTToolType, $GTToolType$$Type } from "com.gregtechceu.gtceu.api.item.tool.GTToolType"
import { $ToolDefinitionBuilder$$Type } from "com.gregtechceu.gtceu.api.item.tool.ToolDefinitionBuilder"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $SoundEntry$$Type } from "com.gregtechceu.gtceu.api.sound.SoundEntry"
import { $IGTToolDefinition$$Type } from "com.gregtechceu.gtceu.api.item.tool.IGTToolDefinition"
import { $GTToolType$ToolItemTagType$$Type } from "com.gregtechceu.gtceu.api.item.tool.GTToolType$ToolItemTagType"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"

export class $GTToolType$Builder {
constructor(string0: string)

public "build"(): $GTToolType
public "constructor"(toolConstructor0: $GTToolType$ToolConstructor$$Type): $GTToolType$Builder
public "defaultActions"(...toolAction0s: $ToolAction$$Type[]): $GTToolType$Builder
public "defaultActions"(collection0: $Collection$$Type<$ToolAction$$Type>): $GTToolType$Builder
public "defaultActions"(collection0: $Collection$$Type<$ToolAction$$Type>, ...toolAction1s: $ToolAction$$Type[]): $GTToolType$Builder
public "electric"(int0: integer): $GTToolType$Builder
public "harvestTag"(...tagKey0s: $TagKey$$Type<$Block$$Type>[]): $GTToolType$Builder
public "idFormat"(string0: string): $GTToolType$Builder
public "materialAmount"(long0: long): $GTToolType$Builder
public "modelLocation"(resourceLocation0: $ResourceLocation$$Type): $GTToolType$Builder
public "sound"(soundEntry0: $SoundEntry$$Type, boolean1: boolean): $GTToolType$Builder
public "sound"(soundEntry0: $SoundEntry$$Type): $GTToolType$Builder
public "symbol"(char0: character): $GTToolType$Builder
public "tier"(int0: integer): $GTToolType$Builder
public "toolClassNames"(set0: $Set$$Type<string>): $GTToolType$Builder
public "toolClassNames"(...string0s: string[]): $GTToolType$Builder
public "toolClasses"(...gTToolType0s: $GTToolType$$Type[]): $GTToolType$Builder
public "toolStats"(iGTToolDefinition0: $IGTToolDefinition$$Type): $GTToolType$Builder
public "toolStats"(unaryOperator0: $UnaryOperator$$Type<$ToolDefinitionBuilder$$Type>): $GTToolType$Builder
public "toolTag"(...tagKey0s: $TagKey$$Type<$Item$$Type>[]): $GTToolType$Builder
public "toolTag"(toolItemTagType0: $GTToolType$ToolItemTagType$$Type, ...tagKey1s: $TagKey$$Type<$Item$$Type>[]): $GTToolType$Builder
}
}

declare module "com.gregtechceu.gtceu.api.item.component.IItemComponent" {
import { $Item$$Type } from "net.minecraft.world.item.Item"

export interface $IItemComponent {
"onAttached"(item0: $Item$$Type): void
}

export namespace $IItemComponent {
const probejs$$marker: never
}
export abstract class $IItemComponent$$Static implements $IItemComponent {
}
}

declare module "com.gregtechceu.gtceu.api.item.IGTTool" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $InteractionResultHolder } from "net.minecraft.world.InteractionResultHolder"
import { $Item } from "net.minecraft.world.item.Item"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $Map } from "java.util.Map"
import { $NonNullList$$Type } from "net.minecraft.core.NonNullList"
import { $ModularUI } from "com.lowdragmc.lowdraglib.gui.modular.ModularUI"
import { $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"
import { $Set } from "java.util.Set"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $EnderMan$$Type } from "net.minecraft.world.entity.monster.EnderMan"
import { $GTToolType, $GTToolType$$Type } from "com.gregtechceu.gtceu.api.item.tool.GTToolType"
import { $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Material } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $ToolProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty"
import { $HeldItemUIFactory$IHeldItemUIHolder } from "com.lowdragmc.lowdraglib.gui.factory.HeldItemUIFactory$IHeldItemUIHolder"
import { $ICapabilityProvider } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $CreativeModeTab$$Type } from "net.minecraft.world.item.CreativeModeTab"
import { $IForgeItem } from "net.minecraftforge.common.extensions.IForgeItem"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $ItemLike } from "net.minecraft.world.level.ItemLike"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $HeldItemUIFactory$HeldItemHolder$$Type } from "com.lowdragmc.lowdraglib.gui.factory.HeldItemUIFactory$HeldItemHolder"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $FoodProperties } from "net.minecraft.world.food.FoodProperties"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Attribute } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $SoundEntry } from "com.gregtechceu.gtceu.api.sound.SoundEntry"
import { $IGTToolDefinition } from "com.gregtechceu.gtceu.api.item.tool.IGTToolDefinition"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $TooltipFlag$$Type } from "net.minecraft.world.item.TooltipFlag"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $ItemColor } from "net.minecraft.client.color.item.ItemColor"

export interface $IGTTool extends $HeldItemUIFactory$IHeldItemUIHolder, $ItemLike, $IForgeItem {
"asItem"(): $Item
"canApplyAtEnchantingTable"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
"canContinueUsing"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
"canDisableShield"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, livingEntity3: $LivingEntity$$Type): boolean
"canElytraFly"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
"canEquip"(itemStack0: $ItemStack$$Type, equipmentSlot1: $EquipmentSlot$$Type, entity2: $Entity$$Type): boolean
"canGrindstoneRepair"(itemStack0: $ItemStack$$Type): boolean
"canPerformAction"(itemStack0: $ItemStack$$Type, toolAction1: $ToolAction$$Type): boolean
"canPlaySound"(itemStack0: $ItemStack$$Type): boolean
"canWalkOnPowderedSnow"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
"createEntity"(level0: $Level$$Type, entity1: $Entity$$Type, itemStack2: $ItemStack$$Type): $Entity
"createUI"(player0: $Player$$Type, heldItemHolder1: $HeldItemUIFactory$HeldItemHolder$$Type): $ModularUI
"damageItem"<T extends $LivingEntity>(itemStack0: $ItemStack$$Type, int1: integer, t2: T, consumer3: $Consumer$$Type<T>): integer
"definition$appendHoverText"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, list2: $List$$Type<$Component$$Type>, tooltipFlag3: $TooltipFlag$$Type): void
"definition$canApplyAtEnchantingTable"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
"definition$canDestroyBlockInCreative"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, itemStack2: $ItemStack$$Type, player3: $Player$$Type): boolean
"definition$canDisableShield"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, livingEntity3: $LivingEntity$$Type): boolean
"definition$canPerformAction"(itemStack0: $ItemStack$$Type, toolAction1: $ToolAction$$Type): boolean
"definition$doesSneakBypassUse"(itemStack0: $ItemStack$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
"definition$fillItemCategory"(creativeModeTab0: $CreativeModeTab$$Type, nonNullList1: $NonNullList$$Type<$ItemStack$$Type>): void
"definition$getAllEnchantments"(itemStack0: $ItemStack$$Type): $Map<$Enchantment, integer>
"definition$getCraftingRemainingItem"(itemStack0: $ItemStack$$Type): $ItemStack
"definition$getDamage"(itemStack0: $ItemStack$$Type): integer
"definition$getDefaultAttributeModifiers"(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
"definition$getDestroySpeed"(itemStack0: $ItemStack$$Type, blockState1: $BlockState$$Type): float
"definition$getDurabilityForDisplay"(itemStack0: $ItemStack$$Type): double
"definition$getEnchantmentLevel"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): integer
"definition$getHarvestLevel"(itemStack0: $ItemStack$$Type, gTToolType1: $GTToolType$$Type, player2: $Player$$Type, blockState3: $BlockState$$Type): integer
"definition$getMaxDamage"(itemStack0: $ItemStack$$Type): integer
"definition$hasCraftingRemainingItem"(itemStack0: $ItemStack$$Type): boolean
"definition$hurtEnemy"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, livingEntity2: $LivingEntity$$Type): boolean
"definition$init"(): void
"definition$initCapabilities"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): $ICapabilityProvider
"definition$isCorrectToolForDrops"(itemStack0: $ItemStack$$Type, blockState1: $BlockState$$Type): boolean
"definition$isFoil"(itemStack0: $ItemStack$$Type): boolean
"definition$isValidRepairItem"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
"definition$mineBlock"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, blockState2: $BlockState$$Type, blockPos3: $BlockPos$$Type, livingEntity4: $LivingEntity$$Type): boolean
"definition$onBlockStartBreak"(itemStack0: $ItemStack$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
"definition$onEntitySwing"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type): boolean
"definition$onItemUse"(useOnContext0: $UseOnContext$$Type): $InteractionResult
"definition$onItemUseFirst"(itemStack0: $ItemStack$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
"definition$shouldCauseBlockBreakReset"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
"definition$shouldCauseReequipAnimation"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean): boolean
"definition$shouldOpenUIAfterUse"(useOnContext0: $UseOnContext$$Type): boolean
"definition$use"(level0: $Level$$Type, player1: $Player$$Type, interactionHand2: $InteractionHand$$Type): $InteractionResultHolder<$ItemStack>
"doesSneakBypassUse"(itemStack0: $ItemStack$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
"elytraFlightTick"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): boolean
"get"(): $ItemStack
"get"(long0: long): $ItemStack
"get"(long0: long, long1: long): $ItemStack
"getAllEnchantments"(itemStack0: $ItemStack$$Type): $Map<$Enchantment, integer>
"getArmorTexture"(itemStack0: $ItemStack$$Type, entity1: $Entity$$Type, equipmentSlot2: $EquipmentSlot$$Type, string3: string): string
"getAttributeModifiers"(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
"getBurnTime"(itemStack0: $ItemStack$$Type, recipeType1: $RecipeType$$Type<any>): integer
"getCharge"(itemStack0: $ItemStack$$Type): long
"getCraftingRemainingItem"(itemStack0: $ItemStack$$Type): $ItemStack
"getCreatorModId"(itemStack0: $ItemStack$$Type): string
"getDamage"(itemStack0: $ItemStack$$Type): integer
"getDefaultEnchantments"(itemStack0: $ItemStack$$Type): $Map<$Enchantment, integer>
"getDefaultTooltipHideFlags"(itemStack0: $ItemStack$$Type): integer
"getElectricTier"(): integer
"getEnchantmentLevel"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): integer
"getEnchantmentValue"(itemStack0: $ItemStack$$Type): integer
"getEntityLifespan"(itemStack0: $ItemStack$$Type, level1: $Level$$Type): integer
"getEquipmentSlot"(itemStack0: $ItemStack$$Type): $EquipmentSlot
"getFoodProperties"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): $FoodProperties
"getHighlightTip"(itemStack0: $ItemStack$$Type, component1: $Component$$Type): $Component
"getMaterial"(): $Material
"getMaterialAttackDamage"(): float
"getMaterialAttackSpeed"(): float
"getMaterialDurability"(): integer
"getMaterialEnchantability"(): integer
"getMaterialHarvestLevel"(): integer
"getMaterialToolSpeed"(): float
"getMaxCharge"(itemStack0: $ItemStack$$Type): long
"getMaxDamage"(itemStack0: $ItemStack$$Type): integer
"getMaxStackSize"(itemStack0: $ItemStack$$Type): integer
"getProspectingDepth"(): integer
"getRaw"(): $ItemStack
"getShareTag"(itemStack0: $ItemStack$$Type): $CompoundTag
"getSound"(): $SoundEntry
"getSweepHitBox"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): $AABB
"getToolClassNames"(itemStack0: $ItemStack$$Type): $Set<string>
"getToolClasses"(itemStack0: $ItemStack$$Type): $Set<$GTToolType>
"getToolProperty"(): $ToolProperty
"getToolStats"(): $IGTToolDefinition
"getToolType"(): $GTToolType
"getTotalAttackDamage"(itemStack0: $ItemStack$$Type): float
"getTotalAttackSpeed"(itemStack0: $ItemStack$$Type): float
"getTotalEnchantability"(itemStack0: $ItemStack$$Type): integer
"getTotalHarvestLevel"(itemStack0: $ItemStack$$Type): integer
"getTotalMaxDurability"(itemStack0: $ItemStack$$Type): integer
"getTotalToolSpeed"(itemStack0: $ItemStack$$Type): float
"getXpRepairRatio"(itemStack0: $ItemStack$$Type): float
"hasCraftingRemainingItem"(itemStack0: $ItemStack$$Type): boolean
"hasCustomEntity"(itemStack0: $ItemStack$$Type): boolean
"initCapabilities"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): $ICapabilityProvider
"isBookEnchantable"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
"isCorrectToolForDrops"(itemStack0: $ItemStack$$Type, blockState1: $BlockState$$Type): boolean
"isDamageable"(itemStack0: $ItemStack$$Type): boolean
"isDamaged"(itemStack0: $ItemStack$$Type): boolean
"isElectric"(): boolean
"isEnderMask"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, enderMan2: $EnderMan$$Type): boolean
"isNotReplaceableByPickAction"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer): boolean
"isPiglinCurrency"(itemStack0: $ItemStack$$Type): boolean
"isRepairable"(itemStack0: $ItemStack$$Type): boolean
"makesPiglinsNeutral"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
/** @deprecated */
"onArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type): void
"onBlockStartBreak"(itemStack0: $ItemStack$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
"onDestroyed"(itemEntity0: $ItemEntity$$Type, damageSource1: $DamageSource$$Type): void
"onDroppedByPlayer"(itemStack0: $ItemStack$$Type, player1: $Player$$Type): boolean
"onEntityItemUpdate"(itemStack0: $ItemStack$$Type, itemEntity1: $ItemEntity$$Type): boolean
"onEntitySwing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
"onHorseArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, mob2: $Mob$$Type): void
"onInventoryTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type, int3: integer, int4: integer): void
"onItemUseFirst"(itemStack0: $ItemStack$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
"onLeftClickEntity"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): boolean
"onStopUsing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): void
"playCraftingSound"(player0: $Player$$Type, itemStack1: $ItemStack$$Type): void
"playSound"(player0: $Player$$Type): void
"playSoundOnBlockDestroy"(): boolean
"readShareTag"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): void
"setDamage"(itemStack0: $ItemStack$$Type, int1: integer): void
"setLastCraftingSoundTime"(itemStack0: $ItemStack$$Type): void
"shouldCauseBlockBreakReset"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
"shouldCauseReequipAnimation"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean): boolean
get "electricTier"(): integer
get "material"(): $Material
get "materialAttackDamage"(): float
get "materialAttackSpeed"(): float
get "materialDurability"(): integer
get "materialEnchantability"(): integer
get "materialHarvestLevel"(): integer
get "materialToolSpeed"(): float
get "prospectingDepth"(): integer
get "raw"(): $ItemStack
get "sound"(): $SoundEntry
get "toolProperty"(): $ToolProperty
get "toolStats"(): $IGTToolDefinition
get "toolType"(): $GTToolType
get "electric"(): boolean
set "lastCraftingSoundTime"(value: $ItemStack$$Type)
}

export namespace $IGTTool {
const AUTOSMELT_ENCHANT_IDS: $Set<$ResourceLocation>
const COFH_SMASHING_ENCHANT_ID: $ResourceLocation
function tintColor(): $ItemColor
}
export abstract class $IGTTool$$Static implements $IGTTool {
static readonly "AUTOSMELT_ENCHANT_IDS": $Set<$ResourceLocation>
static readonly "COFH_SMASHING_ENCHANT_ID": $ResourceLocation

/** Client only, do not use in server scripts */
static "tintColor"(): $ItemColor
}
}

declare module "com.gregtechceu.gtceu.api.item.armor.IArmorLogic" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EnumMap } from "java.util.EnumMap"
import { $UUID } from "java.util.UUID"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $Attribute } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $ArmorComponentItem$$Type } from "com.gregtechceu.gtceu.api.item.armor.ArmorComponentItem"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $HumanoidModel, $HumanoidModel$$Type } from "net.minecraft.client.model.HumanoidModel"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $ArmorItem$Type } from "net.minecraft.world.item.ArmorItem$Type"

export interface $IArmorLogic {
"addToolComponents"(armorComponentItem0: $ArmorComponentItem$$Type): void
"canBreakWithDamage"(itemStack0: $ItemStack$$Type): boolean
"damageArmor"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, damageSource2: $DamageSource$$Type, int3: integer, equipmentSlot4: $EquipmentSlot$$Type): integer
"getArmorDisplay"(player0: $Player$$Type, itemStack1: $ItemStack$$Type, equipmentSlot2: $EquipmentSlot$$Type): integer
"getArmorLayerColor"(itemStack0: $ItemStack$$Type, int1: integer): integer
"getArmorLayersAmount"(itemStack0: $ItemStack$$Type): integer
"getArmorModel"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, equipmentSlot2: $EquipmentSlot$$Type, humanoidModel3: $HumanoidModel$$Type<any>): $HumanoidModel<any>
"getArmorTexture"(itemStack0: $ItemStack$$Type, entity1: $Entity$$Type, equipmentSlot2: $EquipmentSlot$$Type, string3: string): $ResourceLocation
"getArmorType"(): $ArmorItem$Type
"getAttributeModifiers"(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
"getHeatResistance"(): float
"isPPE"(): boolean
"isValidArmor"(itemStack0: $ItemStack$$Type, entity1: $Entity$$Type, equipmentSlot2: $EquipmentSlot$$Type): boolean
"onArmorTick"(level0: $Level$$Type, player1: $Player$$Type, itemStack2: $ItemStack$$Type): void
"onEquip"(player0: $Player$$Type): void
"onUnequip"(player0: $Player$$Type): void
/** Client only, do not use in server scripts */
"renderHelmetOverlay"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, float2: float): void
get "armorType"(): $ArmorItem$Type
get "heatResistance"(): float
get "pPE"(): boolean
}

export namespace $IArmorLogic {
const ARMOR_MODIFIER_UUID_PER_TYPE: $EnumMap<$ArmorItem$Type, $UUID>
const ATTACK_DAMAGE_MODIFIER: $UUID
const ATTACK_SPEED_MODIFIER: $UUID
}
export abstract class $IArmorLogic$$Static implements $IArmorLogic {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<$ArmorItem$Type, $UUID>
static readonly "ATTACK_DAMAGE_MODIFIER": $UUID
static readonly "ATTACK_SPEED_MODIFIER": $UUID

}
}

declare module "com.gregtechceu.gtceu.api.item.tool.GTToolType" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $GTToolType$ToolConstructor, $GTToolType$ToolConstructor$$Type } from "com.gregtechceu.gtceu.api.item.tool.GTToolType$ToolConstructor"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set, $Set$$Type } from "java.util.Set"
import { $GTToolType$Builder } from "com.gregtechceu.gtceu.api.item.tool.GTToolType$Builder"
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $List, $List$$Type } from "java.util.List"
import { $ToolAction, $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $SoundEntry, $SoundEntry$$Type } from "com.gregtechceu.gtceu.api.sound.SoundEntry"
import { $IGTToolDefinition, $IGTToolDefinition$$Type } from "com.gregtechceu.gtceu.api.item.tool.IGTToolDefinition"
import { $Map } from "java.util.Map"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $GTToolType {
static readonly "AXE": $GTToolType
static readonly "BUTCHERY_KNIFE": $GTToolType
static readonly "BUZZSAW": $GTToolType
static readonly "CHAINSAW_HV": $GTToolType
static readonly "CHAINSAW_IV": $GTToolType
static readonly "CHAINSAW_LV": $GTToolType
static readonly "CROWBAR": $GTToolType
static readonly "DRILL_EV": $GTToolType
static readonly "DRILL_HV": $GTToolType
static readonly "DRILL_IV": $GTToolType
static readonly "DRILL_LV": $GTToolType
static readonly "DRILL_MV": $GTToolType
static readonly "FILE": $GTToolType
static readonly "HARD_HAMMER": $GTToolType
static readonly "HOE": $GTToolType
static readonly "KNIFE": $GTToolType
static readonly "MINING_HAMMER": $GTToolType
static readonly "MORTAR": $GTToolType
static readonly "PICKAXE": $GTToolType
static readonly "PLUNGER": $GTToolType
static readonly "SAW": $GTToolType
static readonly "SCREWDRIVER": $GTToolType
static readonly "SCREWDRIVER_HV": $GTToolType
static readonly "SCREWDRIVER_IV": $GTToolType
static readonly "SCREWDRIVER_LV": $GTToolType
static readonly "SCYTHE": $GTToolType
static readonly "SHEARS": $GTToolType
static readonly "SHOVEL": $GTToolType
static readonly "SOFT_MALLET": $GTToolType
static readonly "SPADE": $GTToolType
static readonly "SWORD": $GTToolType
static readonly "WIRE_CUTTER": $GTToolType
static readonly "WIRE_CUTTER_HV": $GTToolType
static readonly "WIRE_CUTTER_IV": $GTToolType
static readonly "WIRE_CUTTER_LV": $GTToolType
static readonly "WRENCH": $GTToolType
static readonly "WRENCH_HV": $GTToolType
static readonly "WRENCH_IV": $GTToolType
static readonly "WRENCH_LV": $GTToolType
readonly "constructor": $GTToolType$ToolConstructor
readonly "craftingTags": $List<$TagKey<$Item>>
readonly "defaultAbilities": $Set<$ToolAction>
readonly "electricTier": integer
readonly "harvestTags": $List<$TagKey<$Block>>
readonly "idFormat": string
readonly "itemTags": $List<$TagKey<$Item>>
readonly "matchTags": $List<$TagKey<$Item>>
readonly "materialAmount": long
readonly "modelLocation": $ResourceLocation
readonly "name": string
readonly "playSoundOnBlockDestroy": boolean
readonly "soundEntry": $SoundEntry
readonly "symbol": character
readonly "toolClassNames": $Set<string>
readonly "toolClasses": $Set<$GTToolType>
readonly "toolDefinition": $IGTToolDefinition

constructor(string0: string, string1: string, char2: character, set3: $Set$$Type<$GTToolType$$Type>, toolConstructor4: $GTToolType$ToolConstructor$$Type, iGTToolDefinition5: $IGTToolDefinition$$Type, list6: $List$$Type<$TagKey$$Type<$Item$$Type>>, list7: $List$$Type<$TagKey$$Type<$Item$$Type>>, list8: $List$$Type<$TagKey$$Type<$Item$$Type>>, list9: $List$$Type<$TagKey$$Type<$Block$$Type>>, set10: $Set$$Type<$ToolAction$$Type>, set11: $Set$$Type<string>, resourceLocation12: $ResourceLocation$$Type, soundEntry13: $SoundEntry$$Type, boolean14: boolean, int15: integer, long16: long)

public static "builder"(string0: string): $GTToolType$Builder
public static "getTypes"(): $Map<string, $GTToolType>
public "getUnlocalizedName"(): string
public "is"(itemStack0: $ItemStack$$Type): boolean
get "unlocalizedName"(): string
}
}

declare module "com.gregtechceu.gtceu.api.item.tool.IToolGridHighlight" {
import { $GTToolType$$Type } from "com.gregtechceu.gtceu.api.item.tool.GTToolType"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ResourceTexture } from "com.lowdragmc.lowdraglib.gui.texture.ResourceTexture"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $IToolGridHighlight {
"shouldRenderGrid"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, itemStack3: $ItemStack$$Type, set4: $Set$$Type<$GTToolType$$Type>): boolean
"sideTips"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, set3: $Set$$Type<$GTToolType$$Type>, direction4: $Direction$$Type): $ResourceTexture
}

export namespace $IToolGridHighlight {
const probejs$$marker: never
}
export abstract class $IToolGridHighlight$$Static implements $IToolGridHighlight {
}
}

declare module "com.gregtechceu.gtceu.api.item.armor.ArmorComponentItem" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Equipable } from "net.minecraft.world.item.Equipable"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $InteractionResultHolder } from "net.minecraft.world.InteractionResultHolder"
import { $Item$Properties$$Type } from "net.minecraft.world.item.Item$Properties"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $ArmorItem } from "net.minecraft.world.item.ArmorItem"
import { $Holder } from "net.minecraft.core.Holder"
import { $Map } from "java.util.Map"
import { $NonNullList$$Type } from "net.minecraft.core.NonNullList"
import { $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"
import { $ArmorItem$Type$$Type } from "net.minecraft.world.item.ArmorItem$Type"
import { $IComponentItem } from "com.gregtechceu.gtceu.api.item.IComponentItem"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $UUID$$Type } from "java.util.UUID"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $EnderMan$$Type } from "net.minecraft.world.entity.monster.EnderMan"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $FoodBuilder$$Type } from "dev.latvian.mods.kubejs.item.FoodBuilder"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $ICapabilityProvider } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $CreativeModeTab$$Type } from "net.minecraft.world.item.CreativeModeTab"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $ArmorMaterial$$Type } from "net.minecraft.world.item.ArmorMaterial"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $FoodProperties } from "net.minecraft.world.food.FoodProperties"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $IArmorLogic, $IArmorLogic$$Type } from "com.gregtechceu.gtceu.api.item.armor.IArmorLogic"
import { $Attribute, $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $MutableToolTier$$Type } from "dev.latvian.mods.kubejs.item.MutableToolTier"
import { $IItemComponent, $IItemComponent$$Type } from "com.gregtechceu.gtceu.api.item.component.IItemComponent"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $ArmorComponentItem extends $ArmorItem implements $IComponentItem {
constructor(armorMaterial0: $ArmorMaterial$$Type, type1: $ArmorItem$Type$$Type, properties2: $Item$Properties$$Type)

public "addAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type, name: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "arch$holder"(): $Holder<$Item>
public "arch$registryName"(): $ResourceLocation
public "asItem"(): $Item
public "attachComponents"(...iItemComponent0s: $IItemComponent$$Type[]): void
public "canApplyAtEnchantingTable"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
public "canContinueUsing"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "canDisableShield"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "canElytraFly"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "canEquip"(itemStack0: $ItemStack$$Type, equipmentSlot1: $EquipmentSlot$$Type, entity2: $Entity$$Type): boolean
public "canGrindstoneRepair"(itemStack0: $ItemStack$$Type): boolean
public "canPerformAction"(itemStack0: $ItemStack$$Type, toolAction1: $ToolAction$$Type): boolean
public "canWalkOnPowderedSnow"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "createEntity"(level0: $Level$$Type, entity1: $Entity$$Type, itemStack2: $ItemStack$$Type): $Entity
public "damageItem"<T extends $LivingEntity>(itemStack0: $ItemStack$$Type, int1: integer, t2: T, consumer3: $Consumer$$Type<T>): integer
public "doesSneakBypassUse"(itemStack0: $ItemStack$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "elytraFlightTick"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): boolean
public "fillItemCategory"(creativeModeTab0: $CreativeModeTab$$Type, nonNullList1: $NonNullList$$Type<$ItemStack$$Type>): void
public static "get"(itemStack0: $ItemStack$$Type): $Equipable
public static "get"(item: $Item$$Type): $ResourceLocation
public static "get"(block: $Block$$Type): $ResourceLocation
public static "get"(state: $BlockState$$Type): $ResourceLocation
public static "get"(entity: $Entity$$Type): $ResourceLocation
public static "get"(stack: $ItemStack$$Type): $ResourceLocation
public static "get"(type: $EntityType$$Type<any>): $ResourceLocation
public "getAllEnchantments"(itemStack0: $ItemStack$$Type): $Map<$Enchantment, integer>
public "getArmorDisplay"(player0: $Player$$Type, itemStack1: $ItemStack$$Type, equipmentSlot2: $EquipmentSlot$$Type): integer
public "getArmorLogic"(): $IArmorLogic
public "getArmorTexture"(itemStack0: $ItemStack$$Type, entity1: $Entity$$Type, equipmentSlot2: $EquipmentSlot$$Type, string3: string): string
public "getAttributeModifiers"(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
public "getAttributes"(attribute: $Attribute$$Type): $List<$AttributeModifier>
public "getBurnTime"(itemStack0: $ItemStack$$Type, recipeType1: $RecipeType$$Type<any>): integer
public "getComponents"(): $List<$IItemComponent>
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
public "getHighlightTip"(itemStack0: $ItemStack$$Type, component1: $Component$$Type): $Component
public "getMaxDamage"(itemStack0: $ItemStack$$Type): integer
public "getMaxStackSize"(itemStack0: $ItemStack$$Type): integer
public "getMod"(): string
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
public "isRepairable"(itemStack0: $ItemStack$$Type): boolean
public "kjs$getMutableAttributeMap"(): $Multimap<$Attribute, $AttributeModifier>
public "makesPiglinsNeutral"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
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
public "setArmorLogic"(iArmorLogic0: $IArmorLogic$$Type): $ArmorComponentItem
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
public "swapWithEquipmentSlot"(item0: $Item$$Type, level1: $Level$$Type, player2: $Player$$Type, interactionHand3: $InteractionHand$$Type): $InteractionResultHolder<$ItemStack>
get "armorLogic"(): $IArmorLogic
get "components"(): $List<$IItemComponent>
get "creativeTab"(): string
get "digSpeed"(): float
get "mod"(): string
set "armorKnockbackResistance"(value: double)
set "armorLogic"(value: $IArmorLogic$$Type)
set "armorProtection"(value: double)
set "armorToughness"(value: double)
set "attackDamage"(value: double)
set "attackSpeed"(value: double)
set "digSpeed"(value: float)
set "foodProperties"(value: $Consumer$$Type<$FoodBuilder$$Type>)
set "tier"(value: $Consumer$$Type<$MutableToolTier$$Type>)
}
}

declare module "com.gregtechceu.gtceu.api.item.tool.behavior.IToolBehavior" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $InteractionResultHolder } from "net.minecraft.world.InteractionResultHolder"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List$$Type } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $IGTTool$$Type } from "com.gregtechceu.gtceu.api.item.IGTTool"
import { $TooltipFlag$$Type } from "net.minecraft.world.item.TooltipFlag"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $IToolBehavior {
"addBehaviorNBT"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): void
/** Client only, do not use in server scripts */
"addInformation"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, list2: $List$$Type<$Component$$Type>, tooltipFlag3: $TooltipFlag$$Type): void
"canDisableShield"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, livingEntity3: $LivingEntity$$Type): boolean
"canPerformAction"(itemStack0: $ItemStack$$Type, toolAction1: $ToolAction$$Type): boolean
"hitEntity"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, livingEntity2: $LivingEntity$$Type): void
"init"(iGTTool0: $IGTTool$$Type): void
"onBlockDestroyed"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, blockState2: $BlockState$$Type, blockPos3: $BlockPos$$Type, livingEntity4: $LivingEntity$$Type): void
"onBlockStartBreak"(itemStack0: $ItemStack$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): void
"onEntitySwing"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type): void
"onItemRightClick"(level0: $Level$$Type, player1: $Player$$Type, interactionHand2: $InteractionHand$$Type): $InteractionResultHolder<$ItemStack>
"onItemUse"(useOnContext0: $UseOnContext$$Type): $InteractionResult
"onItemUseFirst"(itemStack0: $ItemStack$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
"shouldOpenUIAfterUse"(useOnContext0: $UseOnContext$$Type): boolean
}

export namespace $IToolBehavior {
const probejs$$marker: never
}
export abstract class $IToolBehavior$$Static implements $IToolBehavior {
}
}

declare module "com.gregtechceu.gtceu.api.item.tool.GTToolType$ToolItemTagType" {
import { $Enum } from "java.lang.Enum"

export class $GTToolType$ToolItemTagType extends $Enum<$GTToolType$ToolItemTagType> {
static readonly "CRAFTING": $GTToolType$ToolItemTagType
static readonly "MATCH": $GTToolType$ToolItemTagType
static readonly "NONE": $GTToolType$ToolItemTagType

public static "valueOf"(string0: string): $GTToolType$ToolItemTagType
public static "values"(): $GTToolType$ToolItemTagType[]
}
}

declare module "com.gregtechceu.gtceu.api.item.tool.ToolDefinitionBuilder" {
import { $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $IGTToolDefinition } from "com.gregtechceu.gtceu.api.item.tool.IGTToolDefinition"
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $AoESymmetrical$$Type } from "com.gregtechceu.gtceu.api.item.tool.aoe.AoESymmetrical"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $IToolBehavior$$Type } from "com.gregtechceu.gtceu.api.item.tool.behavior.IToolBehavior"

export class $ToolDefinitionBuilder {
constructor()

public "aoe"(int0: integer, int1: integer, int2: integer): $ToolDefinitionBuilder
public "aoe"(aoESymmetrical0: $AoESymmetrical$$Type): $ToolDefinitionBuilder
public "attackDamage"(float0: float): $ToolDefinitionBuilder
public "attackSpeed"(float0: float): $ToolDefinitionBuilder
public "attacking"(): $ToolDefinitionBuilder
public "baseDurability"(int0: integer): $ToolDefinitionBuilder
public "baseEfficiency"(float0: float): $ToolDefinitionBuilder
public "baseQuality"(int0: integer): $ToolDefinitionBuilder
public "baseQuality"(): $ToolDefinitionBuilder
public "behaviors"(...iToolBehavior0s: $IToolBehavior$$Type[]): $ToolDefinitionBuilder
public "blockBreaking"(): $ToolDefinitionBuilder
public "brokenStack"(supplier0: $Supplier$$Type<$ItemStack>): $ToolDefinitionBuilder
public "build"(): $IGTToolDefinition
public "canApplyEnchantment"(...enchantmentCategory0s: $EnchantmentCategory$$Type[]): $ToolDefinitionBuilder
public "canApplyEnchantment"(biPredicate0: $BiPredicate$$Type<$ItemStack$$Type, $Enchantment$$Type>): $ToolDefinitionBuilder
public "cannotAttack"(): $ToolDefinitionBuilder
public "crafting"(): $ToolDefinitionBuilder
public "damagePerAction"(int0: integer): $ToolDefinitionBuilder
public "damagePerCraftingAction"(int0: integer): $ToolDefinitionBuilder
public "defaultEnchantment"(enchantment0: $Enchantment$$Type, int1: integer): $ToolDefinitionBuilder
public "durabilityMultiplier"(float0: float): $ToolDefinitionBuilder
public "effectiveBlocks"(...block0s: $Block$$Type[]): $ToolDefinitionBuilder
public "effectiveStates"(predicate0: $Predicate$$Type<$BlockState$$Type>): $ToolDefinitionBuilder
public "efficiencyMultiplier"(float0: float): $ToolDefinitionBuilder
public "noEnchant"(): $ToolDefinitionBuilder
public "sneakBypassUse"(): $ToolDefinitionBuilder
}
}

declare module "com.gregtechceu.gtceu.api.item.tool.aoe.AoESymmetrical" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"

export class $AoESymmetrical {
static readonly "ZERO": $AoESymmetrical
readonly "column": integer
readonly "layer": integer
readonly "row": integer

public static "decreaseColumn"(compoundTag0: $CompoundTag$$Type, aoESymmetrical1: $AoESymmetrical$$Type): void
public static "decreaseLayer"(compoundTag0: $CompoundTag$$Type, aoESymmetrical1: $AoESymmetrical$$Type): void
public static "decreaseRow"(compoundTag0: $CompoundTag$$Type, aoESymmetrical1: $AoESymmetrical$$Type): void
public static "getColumn"(compoundTag0: $CompoundTag$$Type, aoESymmetrical1: $AoESymmetrical$$Type): integer
public static "getLayer"(compoundTag0: $CompoundTag$$Type, aoESymmetrical1: $AoESymmetrical$$Type): integer
public static "getRow"(compoundTag0: $CompoundTag$$Type, aoESymmetrical1: $AoESymmetrical$$Type): integer
public static "increaseColumn"(compoundTag0: $CompoundTag$$Type, aoESymmetrical1: $AoESymmetrical$$Type): void
public static "increaseLayer"(compoundTag0: $CompoundTag$$Type, aoESymmetrical1: $AoESymmetrical$$Type): void
public static "increaseRow"(compoundTag0: $CompoundTag$$Type, aoESymmetrical1: $AoESymmetrical$$Type): void
public "isZero"(): boolean
public static "of"(int0: integer, int1: integer, int2: integer): $AoESymmetrical
public static "read"(compoundTag0: $CompoundTag$$Type, aoESymmetrical1: $AoESymmetrical$$Type): $AoESymmetrical
public static "readMax"(compoundTag0: $CompoundTag$$Type): $AoESymmetrical
get "zero"(): boolean
}
}

declare module "com.gregtechceu.gtceu.api.item.IComponentItem" {
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $ICapabilityProvider } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $CreativeModeTab$$Type } from "net.minecraft.world.item.CreativeModeTab"
import { $Item } from "net.minecraft.world.item.Item"
import { $IForgeItem } from "net.minecraftforge.common.extensions.IForgeItem"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $ItemLike } from "net.minecraft.world.level.ItemLike"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Map } from "java.util.Map"
import { $NonNullList$$Type } from "net.minecraft.core.NonNullList"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"
import { $FoodProperties } from "net.minecraft.world.food.FoodProperties"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $Attribute } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $EnderMan$$Type } from "net.minecraft.world.entity.monster.EnderMan"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $IItemComponent, $IItemComponent$$Type } from "com.gregtechceu.gtceu.api.item.component.IItemComponent"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export interface $IComponentItem extends $ItemLike, $IForgeItem {
"asItem"(): $Item
"attachComponents"(...iItemComponent0s: $IItemComponent$$Type[]): void
"canApplyAtEnchantingTable"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
"canContinueUsing"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
"canDisableShield"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, livingEntity3: $LivingEntity$$Type): boolean
"canElytraFly"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
"canEquip"(itemStack0: $ItemStack$$Type, equipmentSlot1: $EquipmentSlot$$Type, entity2: $Entity$$Type): boolean
"canGrindstoneRepair"(itemStack0: $ItemStack$$Type): boolean
"canPerformAction"(itemStack0: $ItemStack$$Type, toolAction1: $ToolAction$$Type): boolean
"canWalkOnPowderedSnow"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
"createEntity"(level0: $Level$$Type, entity1: $Entity$$Type, itemStack2: $ItemStack$$Type): $Entity
"damageItem"<T extends $LivingEntity>(itemStack0: $ItemStack$$Type, int1: integer, t2: T, consumer3: $Consumer$$Type<T>): integer
"doesSneakBypassUse"(itemStack0: $ItemStack$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
"elytraFlightTick"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): boolean
"fillItemCategory"(creativeModeTab0: $CreativeModeTab$$Type, nonNullList1: $NonNullList$$Type<$ItemStack$$Type>): void
"getAllEnchantments"(itemStack0: $ItemStack$$Type): $Map<$Enchantment, integer>
"getArmorTexture"(itemStack0: $ItemStack$$Type, entity1: $Entity$$Type, equipmentSlot2: $EquipmentSlot$$Type, string3: string): string
"getAttributeModifiers"(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
"getBurnTime"(itemStack0: $ItemStack$$Type, recipeType1: $RecipeType$$Type<any>): integer
"getComponents"(): $List<$IItemComponent>
"getCraftingRemainingItem"(itemStack0: $ItemStack$$Type): $ItemStack
"getCreatorModId"(itemStack0: $ItemStack$$Type): string
"getDamage"(itemStack0: $ItemStack$$Type): integer
"getDefaultTooltipHideFlags"(itemStack0: $ItemStack$$Type): integer
"getEnchantmentLevel"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): integer
"getEnchantmentValue"(itemStack0: $ItemStack$$Type): integer
"getEntityLifespan"(itemStack0: $ItemStack$$Type, level1: $Level$$Type): integer
"getEquipmentSlot"(itemStack0: $ItemStack$$Type): $EquipmentSlot
"getFoodProperties"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): $FoodProperties
"getHighlightTip"(itemStack0: $ItemStack$$Type, component1: $Component$$Type): $Component
"getMaxDamage"(itemStack0: $ItemStack$$Type): integer
"getMaxStackSize"(itemStack0: $ItemStack$$Type): integer
"getShareTag"(itemStack0: $ItemStack$$Type): $CompoundTag
"getSweepHitBox"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): $AABB
"getXpRepairRatio"(itemStack0: $ItemStack$$Type): float
"hasCraftingRemainingItem"(itemStack0: $ItemStack$$Type): boolean
"hasCustomEntity"(itemStack0: $ItemStack$$Type): boolean
"initCapabilities"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): $ICapabilityProvider
"isBookEnchantable"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
"isCorrectToolForDrops"(itemStack0: $ItemStack$$Type, blockState1: $BlockState$$Type): boolean
"isDamageable"(itemStack0: $ItemStack$$Type): boolean
"isDamaged"(itemStack0: $ItemStack$$Type): boolean
"isEnderMask"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, enderMan2: $EnderMan$$Type): boolean
"isNotReplaceableByPickAction"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer): boolean
"isPiglinCurrency"(itemStack0: $ItemStack$$Type): boolean
"isRepairable"(itemStack0: $ItemStack$$Type): boolean
"makesPiglinsNeutral"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
/** @deprecated */
"onArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type): void
"onBlockStartBreak"(itemStack0: $ItemStack$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
"onDestroyed"(itemEntity0: $ItemEntity$$Type, damageSource1: $DamageSource$$Type): void
"onDroppedByPlayer"(itemStack0: $ItemStack$$Type, player1: $Player$$Type): boolean
"onEntityItemUpdate"(itemStack0: $ItemStack$$Type, itemEntity1: $ItemEntity$$Type): boolean
"onEntitySwing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
"onHorseArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, mob2: $Mob$$Type): void
"onInventoryTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type, int3: integer, int4: integer): void
"onItemUseFirst"(itemStack0: $ItemStack$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
"onLeftClickEntity"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): boolean
"onStopUsing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): void
"readShareTag"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): void
"setDamage"(itemStack0: $ItemStack$$Type, int1: integer): void
"shouldCauseBlockBreakReset"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
"shouldCauseReequipAnimation"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean): boolean
get "components"(): $List<$IItemComponent>
}

export namespace $IComponentItem {
const probejs$$marker: never
}
export abstract class $IComponentItem$$Static implements $IComponentItem {
}
}

declare module "com.gregtechceu.gtceu.api.item.tool.GTToolType$ToolConstructor" {
import { $GTToolType$$Type } from "com.gregtechceu.gtceu.api.item.tool.GTToolType"
import { $MaterialToolTier$$Type } from "com.gregtechceu.gtceu.api.item.tool.MaterialToolTier"
import { $IGTToolDefinition$$Type } from "com.gregtechceu.gtceu.api.item.tool.IGTToolDefinition"
import { $IGTTool } from "com.gregtechceu.gtceu.api.item.IGTTool"
import { $Item$Properties$$Type } from "net.minecraft.world.item.Item$Properties"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"

export interface $GTToolType$ToolConstructor {
"apply"(gTToolType0: $GTToolType$$Type, materialToolTier1: $MaterialToolTier$$Type, material2: $Material$$Type, iGTToolDefinition3: $IGTToolDefinition$$Type, properties4: $Item$Properties$$Type): $IGTTool
}

export namespace $GTToolType$ToolConstructor {
const probejs$$marker: never
}
export abstract class $GTToolType$ToolConstructor$$Static implements $GTToolType$ToolConstructor {
}
}

declare module "com.gregtechceu.gtceu.api.item.tool.IGTToolDefinition" {
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $List } from "java.util.List"
import { $Object2IntMap } from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $AoESymmetrical } from "com.gregtechceu.gtceu.api.item.tool.aoe.AoESymmetrical"
import { $IToolBehavior } from "com.gregtechceu.gtceu.api.item.tool.behavior.IToolBehavior"

export interface $IGTToolDefinition {
"canApplyEnchantment"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
"doesSneakBypassUse"(): boolean
"getAoEDefinition"(itemStack0: $ItemStack$$Type): $AoESymmetrical
"getAttackSpeed"(itemStack0: $ItemStack$$Type): float
"getBaseDamage"(itemStack0: $ItemStack$$Type): float
"getBaseDurability"(itemStack0: $ItemStack$$Type): integer
"getBaseEfficiency"(itemStack0: $ItemStack$$Type): float
"getBaseQuality"(itemStack0: $ItemStack$$Type): integer
"getBehaviors"(): $List<$IToolBehavior>
"getBrokenStack"(): $ItemStack
"getDamagePerAction"(itemStack0: $ItemStack$$Type): integer
"getDamagePerCraftingAction"(itemStack0: $ItemStack$$Type): integer
"getDefaultEnchantments"(itemStack0: $ItemStack$$Type): $Object2IntMap<$Enchantment>
"getDurabilityMultiplier"(itemStack0: $ItemStack$$Type): float
"getEfficiencyMultiplier"(itemStack0: $ItemStack$$Type): float
"getToolDamagePerAttack"(itemStack0: $ItemStack$$Type): integer
"getToolDamagePerBlockBreak"(itemStack0: $ItemStack$$Type): integer
"getToolDamagePerCraft"(itemStack0: $ItemStack$$Type): integer
"isEnchantable"(itemStack0: $ItemStack$$Type): boolean
"isSuitableForAttacking"(itemStack0: $ItemStack$$Type): boolean
"isSuitableForBlockBreak"(itemStack0: $ItemStack$$Type): boolean
"isSuitableForCrafting"(itemStack0: $ItemStack$$Type): boolean
"isToolEffective"(blockState0: $BlockState$$Type): boolean
get "behaviors"(): $List<$IToolBehavior>
get "brokenStack"(): $ItemStack
}

export namespace $IGTToolDefinition {
const probejs$$marker: never
}
export abstract class $IGTToolDefinition$$Static implements $IGTToolDefinition {
}
}

declare module "com.gregtechceu.gtceu.api.item.ComponentItem" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $Item$Properties$$Type } from "net.minecraft.world.item.Item$Properties"
import { $Holder } from "net.minecraft.core.Holder"
import { $Map } from "java.util.Map"
import { $NonNullList$$Type } from "net.minecraft.core.NonNullList"
import { $ModularUI } from "com.lowdragmc.lowdraglib.gui.modular.ModularUI"
import { $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"
import { $IComponentItem } from "com.gregtechceu.gtceu.api.item.IComponentItem"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $UUID$$Type } from "java.util.UUID"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $EnderMan$$Type } from "net.minecraft.world.entity.monster.EnderMan"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $FoodBuilder$$Type } from "dev.latvian.mods.kubejs.item.FoodBuilder"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $HeldItemUIFactory$IHeldItemUIHolder } from "com.lowdragmc.lowdraglib.gui.factory.HeldItemUIFactory$IHeldItemUIHolder"
import { $ICapabilityProvider } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $CreativeModeTab$$Type } from "net.minecraft.world.item.CreativeModeTab"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $IItemRendererProvider } from "com.lowdragmc.lowdraglib.client.renderer.IItemRendererProvider"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $HeldItemUIFactory$HeldItemHolder$$Type } from "com.lowdragmc.lowdraglib.gui.factory.HeldItemUIFactory$HeldItemHolder"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $FoodProperties } from "net.minecraft.world.food.FoodProperties"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $IRenderer } from "com.lowdragmc.lowdraglib.client.renderer.IRenderer"
import { $Attribute, $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $MutableToolTier$$Type } from "dev.latvian.mods.kubejs.item.MutableToolTier"
import { $IItemComponent, $IItemComponent$$Type } from "com.gregtechceu.gtceu.api.item.component.IItemComponent"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $ComponentItem extends $Item implements $HeldItemUIFactory$IHeldItemUIHolder, $IItemRendererProvider, $IComponentItem {
public "addAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type, name: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "arch$holder"(): $Holder<$Item>
public "arch$registryName"(): $ResourceLocation
public "attachComponents"(...iItemComponent0s: $IItemComponent$$Type[]): void
public "attachComponents"(iItemComponent0: $IItemComponent$$Type): void
public "burnTime"(int0: integer): void
public "canApplyAtEnchantingTable"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
public "canContinueUsing"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "canDisableShield"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "canElytraFly"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "canEquip"(itemStack0: $ItemStack$$Type, equipmentSlot1: $EquipmentSlot$$Type, entity2: $Entity$$Type): boolean
public "canGrindstoneRepair"(itemStack0: $ItemStack$$Type): boolean
public "canPerformAction"(itemStack0: $ItemStack$$Type, toolAction1: $ToolAction$$Type): boolean
public "canWalkOnPowderedSnow"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public static "create"(properties0: $Item$Properties$$Type): $ComponentItem
public "createEntity"(level0: $Level$$Type, entity1: $Entity$$Type, itemStack2: $ItemStack$$Type): $Entity
public "createUI"(player0: $Player$$Type, heldItemHolder1: $HeldItemUIFactory$HeldItemHolder$$Type): $ModularUI
public "damageItem"<T extends $LivingEntity>(itemStack0: $ItemStack$$Type, int1: integer, t2: T, consumer3: $Consumer$$Type<T>): integer
public "doesSneakBypassUse"(itemStack0: $ItemStack$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "elytraFlightTick"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): boolean
public "fillItemCategory"(creativeModeTab0: $CreativeModeTab$$Type, nonNullList1: $NonNullList$$Type<$ItemStack$$Type>): void
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
public "getChargedStack"(long0: long): $ItemStack
public "getComponents"(): $List<$IItemComponent>
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
public "getHighlightTip"(itemStack0: $ItemStack$$Type, component1: $Component$$Type): $Component
public "getInfiniteChargedStack"(): $ItemStack
public "getMaxDamage"(itemStack0: $ItemStack$$Type): integer
public "getMaxStackSize"(itemStack0: $ItemStack$$Type): integer
public "getMod"(): string
public "getRenderer"(itemStack0: $ItemStack$$Type): $IRenderer
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
get "components"(): $List<$IItemComponent>
get "creativeTab"(): string
get "digSpeed"(): float
get "infiniteChargedStack"(): $ItemStack
get "mod"(): string
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

