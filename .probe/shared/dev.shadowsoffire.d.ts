declare module "dev.shadowsoffire.placebo.events.AnvilLandEvent" {
import { $FallingBlockEntity, $FallingBlockEntity$$Type } from "net.minecraft.world.entity.item.FallingBlockEntity"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $AnvilLandEvent extends $Event {
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, fallingBlockEntity4: $FallingBlockEntity$$Type)
constructor()

public "getEntity"(): $FallingBlockEntity
public "getLevel"(): $Level
public "getNewState"(): $BlockState
public "getOldState"(): $BlockState
public "getPos"(): $BlockPos
get "entity"(): $FallingBlockEntity
get "level"(): $Level
get "newState"(): $BlockState
get "oldState"(): $BlockState
get "pos"(): $BlockPos
}
}

declare module "dev.shadowsoffire.placebo.events.ItemUseEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Direction } from "net.minecraft.core.Direction"
import { $InteractionResult, $InteractionResult$$Type } from "net.minecraft.world.InteractionResult"
import { $UseOnContext, $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $InteractionHand } from "net.minecraft.world.InteractionHand"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level } from "net.minecraft.world.level.Level"

export class $ItemUseEvent extends $PlayerEvent {
constructor(useOnContext0: $UseOnContext$$Type)
constructor()

public "getCancellationResult"(): $InteractionResult
public "getContext"(): $UseOnContext
public "getFace"(): $Direction
public "getHand"(): $InteractionHand
public "getItemStack"(): $ItemStack
public "getLevel"(): $Level
public "getPos"(): $BlockPos
public "setCancellationResult"(interactionResult0: $InteractionResult$$Type): void
get "cancellationResult"(): $InteractionResult
get "context"(): $UseOnContext
get "face"(): $Direction
get "hand"(): $InteractionHand
get "itemStack"(): $ItemStack
get "level"(): $Level
get "pos"(): $BlockPos
set "cancellationResult"(value: $InteractionResult$$Type)
}
}

declare module "dev.shadowsoffire.attributeslib.api.client.GatherEffectScreenTooltipsEvent" {
import { $List, $List$$Type } from "java.util.List"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $EffectRenderingInventoryScreen, $EffectRenderingInventoryScreen$$Type } from "net.minecraft.client.gui.screens.inventory.EffectRenderingInventoryScreen"
import { $MobEffectInstance, $MobEffectInstance$$Type } from "net.minecraft.world.effect.MobEffectInstance"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $GatherEffectScreenTooltipsEvent extends $Event {
constructor(effectRenderingInventoryScreen0: $EffectRenderingInventoryScreen$$Type<any>, mobEffectInstance1: $MobEffectInstance$$Type, list2: $List$$Type<$Component$$Type>)
constructor()

public "getEffectInstance"(): $MobEffectInstance
public "getScreen"(): $EffectRenderingInventoryScreen<any>
public "getTooltip"(): $List<$Component>
get "effectInstance"(): $MobEffectInstance
get "screen"(): $EffectRenderingInventoryScreen<any>
get "tooltip"(): $List<$Component>
}
}

declare module "dev.shadowsoffire.attributeslib.api.IFormattableAttribute" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $AttributeModifier$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $TooltipFlag$$Type } from "net.minecraft.world.item.TooltipFlag"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $UUID } from "java.util.UUID"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $Attribute, $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"

export interface $IFormattableAttribute {
"addBonusTooltips"(itemStack0: $ItemStack$$Type, consumer1: $Consumer$$Type<$Component$$Type>, tooltipFlag2: $TooltipFlag$$Type): void
"getBaseUUID"(): $UUID
"getBonusBaseValue"(itemStack0: $ItemStack$$Type): double
"getDebugInfo"(attributeModifier0: $AttributeModifier$$Type, tooltipFlag1: $TooltipFlag$$Type): $Component
"ths"(): $Attribute
"toBaseComponent"(double0: double, double1: double, boolean2: boolean, tooltipFlag3: $TooltipFlag$$Type): $MutableComponent
"toComponent"(attributeModifier0: $AttributeModifier$$Type, tooltipFlag1: $TooltipFlag$$Type): $MutableComponent
"toValueComponent"(operation0: $AttributeModifier$Operation$$Type, double1: double, tooltipFlag2: $TooltipFlag$$Type): $MutableComponent
get "baseUUID"(): $UUID
}

export namespace $IFormattableAttribute {
function isNullOrAddition(operation0: $AttributeModifier$Operation$$Type): boolean
function toBaseComponent(attribute0: $Attribute$$Type, double1: double, double2: double, boolean3: boolean, tooltipFlag4: $TooltipFlag$$Type): $MutableComponent
function toComponent(attribute0: $Attribute$$Type, attributeModifier1: $AttributeModifier$$Type, tooltipFlag2: $TooltipFlag$$Type): $MutableComponent
function toValueComponent(attribute0: $Attribute$$Type, operation1: $AttributeModifier$Operation$$Type, double2: double, tooltipFlag3: $TooltipFlag$$Type): $MutableComponent
}
export abstract class $IFormattableAttribute$$Static implements $IFormattableAttribute {
static "isNullOrAddition"(operation0: $AttributeModifier$Operation$$Type): boolean
static "toBaseComponent"(attribute0: $Attribute$$Type, double1: double, double2: double, boolean3: boolean, tooltipFlag4: $TooltipFlag$$Type): $MutableComponent
static "toComponent"(attribute0: $Attribute$$Type, attributeModifier1: $AttributeModifier$$Type, tooltipFlag2: $TooltipFlag$$Type): $MutableComponent
static "toValueComponent"(attribute0: $Attribute$$Type, operation1: $AttributeModifier$Operation$$Type, double2: double, tooltipFlag3: $TooltipFlag$$Type): $MutableComponent
}
}

declare module "dev.shadowsoffire.attributeslib.api.client.GatherSkippedAttributeTooltipsEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $Set$$Type } from "java.util.Set"
import { $TooltipFlag, $TooltipFlag$$Type } from "net.minecraft.world.item.TooltipFlag"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $UUID$$Type } from "java.util.UUID"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $GatherSkippedAttributeTooltipsEvent extends $PlayerEvent {
constructor(itemStack0: $ItemStack$$Type, player1: $Player$$Type, set2: $Set$$Type<$UUID$$Type>, tooltipFlag3: $TooltipFlag$$Type)
constructor()

public "getFlags"(): $TooltipFlag
public "getStack"(): $ItemStack
public "skipUUID"(uUID0: $UUID$$Type): void
get "flags"(): $TooltipFlag
get "stack"(): $ItemStack
}
}

declare module "dev.shadowsoffire.placebo.util.CachedObject$CachedObjectSource" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ToIntFunction$$Type } from "java.util.function.ToIntFunction"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Function$$Type } from "java.util.function.Function"

export interface $CachedObject$CachedObjectSource {
"getOrCreate"<T>(resourceLocation0: $ResourceLocation$$Type, function1: $Function$$Type<$ItemStack$$Type, T>): T
"getOrCreate"<T>(resourceLocation0: $ResourceLocation$$Type, function1: $Function$$Type<$ItemStack$$Type, T>, toIntFunction2: $ToIntFunction$$Type<$ItemStack$$Type>): T
}

export namespace $CachedObject$CachedObjectSource {
function getOrCreate<T>(itemStack0: $ItemStack$$Type, resourceLocation1: $ResourceLocation$$Type, function2: $Function$$Type<$ItemStack$$Type, T>): T
function getOrCreate<T>(itemStack0: $ItemStack$$Type, resourceLocation1: $ResourceLocation$$Type, function2: $Function$$Type<$ItemStack$$Type, T>, toIntFunction3: $ToIntFunction$$Type<$ItemStack$$Type>): T
}
export abstract class $CachedObject$CachedObjectSource$$Static implements $CachedObject$CachedObjectSource {
static "getOrCreate"<T>(itemStack0: $ItemStack$$Type, resourceLocation1: $ResourceLocation$$Type, function2: $Function$$Type<$ItemStack$$Type, T>): T
static "getOrCreate"<T>(itemStack0: $ItemStack$$Type, resourceLocation1: $ResourceLocation$$Type, function2: $Function$$Type<$ItemStack$$Type, T>, toIntFunction3: $ToIntFunction$$Type<$ItemStack$$Type>): T
}
}

declare module "dev.shadowsoffire.attributeslib.mixin.AttributeInstanceAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AttributeInstanceAccessor {
"getCachedValue"(): double
get "cachedValue"(): double
}

export namespace $AttributeInstanceAccessor {
const probejs$$marker: never
}
export abstract class $AttributeInstanceAccessor$$Static implements $AttributeInstanceAccessor {
}
}

declare module "dev.shadowsoffire.placebo.events.GetEnchantmentLevelEvent" {
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $GetEnchantmentLevelEvent extends $Event {
constructor(itemStack0: $ItemStack$$Type, map1: $Map$$Type<$Enchantment$$Type, integer>)
constructor()

public "getEnchantments"(): $Map<$Enchantment, integer>
public "getStack"(): $ItemStack
get "enchantments"(): $Map<$Enchantment, integer>
get "stack"(): $ItemStack
}
}

declare module "dev.shadowsoffire.attributeslib.api.AttributeChangedValueEvent" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AttributeInstance, $AttributeInstance$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeInstance"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $AttributeChangedValueEvent extends $Event {
constructor(livingEntity0: $LivingEntity$$Type, attributeInstance1: $AttributeInstance$$Type, double2: double, double3: double)
constructor()

public "getAttributeInstance"(): $AttributeInstance
public "getEntity"(): $LivingEntity
public "getNewValue"(): double
public "getOldValue"(): double
get "attributeInstance"(): $AttributeInstance
get "entity"(): $LivingEntity
get "newValue"(): double
get "oldValue"(): double
}
}

declare module "dev.shadowsoffire.attributeslib.util.IAttributeManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IAttributeManager {
"areAttributesUpdating"(): boolean
"setAttributesUpdating"(boolean0: boolean): void
set "attributesUpdating"(value: boolean)
}

export namespace $IAttributeManager {
const probejs$$marker: never
}
export abstract class $IAttributeManager$$Static implements $IAttributeManager {
}
}

declare module "dev.shadowsoffire.attributeslib.api.client.AddAttributeTooltipsEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $List, $List$$Type } from "java.util.List"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ListIterator, $ListIterator$$Type } from "java.util.ListIterator"
import { $TooltipFlag, $TooltipFlag$$Type } from "net.minecraft.world.item.TooltipFlag"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $AddAttributeTooltipsEvent extends $PlayerEvent {
constructor(itemStack0: $ItemStack$$Type, player1: $Player$$Type, list2: $List$$Type<$Component$$Type>, listIterator3: $ListIterator$$Type<$Component$$Type>, tooltipFlag4: $TooltipFlag$$Type)
constructor()

public "getAttributeTooltipIterator"(): $ListIterator<$Component>
public "getFlags"(): $TooltipFlag
public "getStack"(): $ItemStack
public "getTooltip"(): $List<$Component>
get "attributeTooltipIterator"(): $ListIterator<$Component>
get "flags"(): $TooltipFlag
get "stack"(): $ItemStack
get "tooltip"(): $List<$Component>
}
}

declare module "dev.shadowsoffire.placebo.mixin.AbstractContainerMenuInvoker" {
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $AbstractContainerMenuInvoker {
"_moveItemStackTo"(itemStack0: $ItemStack$$Type, int1: integer, int2: integer, boolean3: boolean): boolean
}

export namespace $AbstractContainerMenuInvoker {
const probejs$$marker: never
}
export abstract class $AbstractContainerMenuInvoker$$Static implements $AbstractContainerMenuInvoker {
}
}

declare module "dev.shadowsoffire.attributeslib.util.IFlying" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IFlying {
"getAndDestroyFlyingCache"(): boolean
"markFlying"(): void
get "andDestroyFlyingCache"(): boolean
}

export namespace $IFlying {
const probejs$$marker: never
}
export abstract class $IFlying$$Static implements $IFlying {
}
}

declare module "dev.shadowsoffire.attributeslib.util.IEntityOwned" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

export interface $IEntityOwned {
"getOwner"(): $LivingEntity
"setOwner"(livingEntity0: $LivingEntity$$Type): void
get "owner"(): $LivingEntity
set "owner"(value: $LivingEntity$$Type)
}

export namespace $IEntityOwned {
const probejs$$marker: never
}
export abstract class $IEntityOwned$$Static implements $IEntityOwned {
}
}

