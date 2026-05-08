declare module "vazkii.botania.mixin.client.ItemRendererAccessor" {
import { $List$$Type } from "java.util.List"
import { $BakedQuad$$Type } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export interface $ItemRendererAccessor {
"callRenderQuadList"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, list2: $List$$Type<$BakedQuad$$Type>, itemStack3: $ItemStack$$Type, int4: integer, int5: integer): void
}

export namespace $ItemRendererAccessor {
const probejs$$marker: never
}
export abstract class $ItemRendererAccessor$$Static implements $ItemRendererAccessor {
}
}

declare module "vazkii.botania.api.recipe.ElvenPortalUpdateEvent" {
import { $List, $List$$Type } from "java.util.List"
import { $AABB, $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"

export class $ElvenPortalUpdateEvent extends $Event {
constructor(blockEntity0: $BlockEntity$$Type, aABB1: $AABB$$Type, boolean2: boolean, list3: $List$$Type<$ItemStack$$Type>)
constructor()

public "getAabb"(): $AABB
public "getPortalTile"(): $BlockEntity
public "getStacksInside"(): $List<$ItemStack>
public "isOpen"(): boolean
get "aabb"(): $AABB
get "portalTile"(): $BlockEntity
get "stacksInside"(): $List<$ItemStack>
get "open"(): boolean
}
}

declare module "vazkii.botania.api.corporea.CorporeaResult" {
import { $List } from "java.util.List"
import { $Object2IntMap } from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import { $CorporeaNode } from "vazkii.botania.api.corporea.CorporeaNode"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $CorporeaResult {
"extractedCount"(): integer
"matchCountsByNode"(): $Object2IntMap<$CorporeaNode>
"matchedCount"(): integer
"stacks"(): $List<$ItemStack>
}

export namespace $CorporeaResult {
const probejs$$marker: never
}
export abstract class $CorporeaResult$$Static implements $CorporeaResult {
}
}

declare module "vazkii.botania.api.corporea.CorporeaRequestEvent" {
import { $CorporeaRequestMatcher, $CorporeaRequestMatcher$$Type } from "vazkii.botania.api.corporea.CorporeaRequestMatcher"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $CorporeaSpark, $CorporeaSpark$$Type } from "vazkii.botania.api.corporea.CorporeaSpark"

export class $CorporeaRequestEvent extends $Event {
constructor(corporeaRequestMatcher0: $CorporeaRequestMatcher$$Type, int1: integer, corporeaSpark2: $CorporeaSpark$$Type, boolean3: boolean)
constructor()

public "getCount"(): integer
public "getMatcher"(): $CorporeaRequestMatcher
public "getSpark"(): $CorporeaSpark
public "isDryRun"(): boolean
get "count"(): integer
get "matcher"(): $CorporeaRequestMatcher
get "spark"(): $CorporeaSpark
get "dryRun"(): boolean
}
}

declare module "vazkii.botania.mixin.ProjectileAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ProjectileAccessor {
"botania_getLeftOwner"(): boolean
}

export namespace $ProjectileAccessor {
const probejs$$marker: never
}
export abstract class $ProjectileAccessor$$Static implements $ProjectileAccessor {
}
}

declare module "vazkii.botania.api.corporea.CorporeaNode" {
import { $List } from "java.util.List"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level } from "net.minecraft.world.level.Level"
import { $CorporeaSpark } from "vazkii.botania.api.corporea.CorporeaSpark"
import { $CorporeaRequest$$Type } from "vazkii.botania.api.corporea.CorporeaRequest"

export interface $CorporeaNode {
"countItems"(corporeaRequest0: $CorporeaRequest$$Type): $List<$ItemStack>
"extractItems"(corporeaRequest0: $CorporeaRequest$$Type): $List<$ItemStack>
"getPos"(): $BlockPos
"getSpark"(): $CorporeaSpark
"getWorld"(): $Level
get "pos"(): $BlockPos
get "spark"(): $CorporeaSpark
get "world"(): $Level
}

export namespace $CorporeaNode {
const probejs$$marker: never
}
export abstract class $CorporeaNode$$Static implements $CorporeaNode {
}
}

declare module "vazkii.botania.api.item.SparkEntity" {
import { $DyeColor, $DyeColor$$Type } from "net.minecraft.world.item.DyeColor"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $BlockPos } from "net.minecraft.core.BlockPos"

export interface $SparkEntity {
"entity"(): $Entity
"getAttachPos"(): $BlockPos
"getNetwork"(): $DyeColor
"setNetwork"(dyeColor0: $DyeColor$$Type): void
get "attachPos"(): $BlockPos
get "network"(): $DyeColor
set "network"(value: $DyeColor$$Type)
}

export namespace $SparkEntity {
const probejs$$marker: never
}
export abstract class $SparkEntity$$Static implements $SparkEntity {
}
}

declare module "vazkii.botania.mixin.WitherEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WitherEntityAccessor {
"botania_getHeadX"(int0: integer): double
"botania_getHeadY"(int0: integer): double
"botania_getHeadZ"(int0: integer): double
}

export namespace $WitherEntityAccessor {
const probejs$$marker: never
}
export abstract class $WitherEntityAccessor$$Static implements $WitherEntityAccessor {
}
}

declare module "vazkii.botania.mixin.LivingEntityAccessor" {
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"

export interface $LivingEntityAccessor {
"botania_playHurtSound"(damageSource0: $DamageSource$$Type): void
"setUseItemRemaining"(int0: integer): void
set "useItemRemaining"(value: integer)
}

export namespace $LivingEntityAccessor {
const probejs$$marker: never
}
export abstract class $LivingEntityAccessor$$Static implements $LivingEntityAccessor {
}
}

declare module "vazkii.botania.mixin.EntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EntityAccessor {
"callUnsetRemoved"(): void
}

export namespace $EntityAccessor {
const probejs$$marker: never
}
export abstract class $EntityAccessor$$Static implements $EntityAccessor {
}
}

declare module "vazkii.botania.mixin.DispenserBlockAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DispenserBlockAccessor {
}

export namespace $DispenserBlockAccessor {
const probejs$$marker: never
}
export abstract class $DispenserBlockAccessor$$Static implements $DispenserBlockAccessor {
}
}

declare module "vazkii.botania.mixin.BiomeAccessor" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"

export interface $BiomeAccessor {
"callGetTemperature"(blockPos0: $BlockPos$$Type): float
}

export namespace $BiomeAccessor {
const probejs$$marker: never
}
export abstract class $BiomeAccessor$$Static implements $BiomeAccessor {
}
}

declare module "vazkii.botania.api.mana.ManaNetworkAction" {
import { $Enum } from "java.lang.Enum"

export class $ManaNetworkAction extends $Enum<$ManaNetworkAction> {
static readonly "ADD": $ManaNetworkAction
static readonly "REMOVE": $ManaNetworkAction

public static "valueOf"(string0: string): $ManaNetworkAction
public static "values"(): $ManaNetworkAction[]
}
}

declare module "vazkii.botania.api.corporea.CorporeaRequestMatcher" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $CorporeaRequestMatcher extends $Predicate<$ItemStack> {
"and"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $Predicate<$ItemStack>
"getRequestName"(): $Component
"negate"(): $Predicate<$ItemStack>
"or"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $Predicate<$ItemStack>
"test"(itemStack0: $ItemStack$$Type): boolean
"writeToNBT"(compoundTag0: $CompoundTag$$Type): void
get "requestName"(): $Component
}

export namespace $CorporeaRequestMatcher {
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $CorporeaRequestMatcher$$Static implements $CorporeaRequestMatcher {
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "vazkii.botania.common.PlayerAccess" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

export interface $PlayerAccess {
"botania$setCritTarget"(livingEntity0: $LivingEntity$$Type): void
}

export namespace $PlayerAccess {
const probejs$$marker: never
}
export abstract class $PlayerAccess$$Static implements $PlayerAccess {
}
}

declare module "vazkii.botania.api.item.TinyPotatoRenderEvent" {
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $TinyPotatoRenderEvent extends $Event {
readonly "buffers": $MultiBufferSource
readonly "light": integer
readonly "ms": $PoseStack
readonly "name": $Component
readonly "overlay": integer
readonly "partTicks": float
readonly "tile": $BlockEntity

constructor(blockEntity0: $BlockEntity$$Type, component1: $Component$$Type, float2: float, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer, int6: integer)
constructor()

}
}

declare module "vazkii.botania.mixin.AbstractHorseAccessor" {
import { $SimpleContainer } from "net.minecraft.world.SimpleContainer"

export interface $AbstractHorseAccessor {
"botania_createInventory"(): void
"getInventory"(): $SimpleContainer
get "inventory"(): $SimpleContainer
}

export namespace $AbstractHorseAccessor {
const probejs$$marker: never
}
export abstract class $AbstractHorseAccessor$$Static implements $AbstractHorseAccessor {
}
}

declare module "vazkii.botania.mixin.FireBlockAccessor" {
import { $Block$$Type } from "net.minecraft.world.level.block.Block"

export interface $FireBlockAccessor {
"botania_register"(block0: $Block$$Type, int1: integer, int2: integer): void
}

export namespace $FireBlockAccessor {
const probejs$$marker: never
}
export abstract class $FireBlockAccessor$$Static implements $FireBlockAccessor {
}
}

declare module "vazkii.botania.mixin.MobAccessor" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $GoalSelector } from "net.minecraft.world.entity.ai.goal.GoalSelector"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"

export interface $MobAccessor {
"botania_getAmbientSound"(): $SoundEvent
"getGoalSelector"(): $GoalSelector
"getTargetSelector"(): $GoalSelector
"setLootTable"(resourceLocation0: $ResourceLocation$$Type): void
get "goalSelector"(): $GoalSelector
get "targetSelector"(): $GoalSelector
set "lootTable"(value: $ResourceLocation$$Type)
}

export namespace $MobAccessor {
const probejs$$marker: never
}
export abstract class $MobAccessor$$Static implements $MobAccessor {
}
}

declare module "vazkii.botania.mixin.client.ModelManagerAccessor" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $BakedModel } from "net.minecraft.client.resources.model.BakedModel"
import { $Map } from "java.util.Map"

export interface $ModelManagerAccessor {
"getBakedRegistry"(): $Map<$ResourceLocation, $BakedModel>
get "bakedRegistry"(): $Map<$ResourceLocation, $BakedModel>
}

export namespace $ModelManagerAccessor {
const probejs$$marker: never
}
export abstract class $ModelManagerAccessor$$Static implements $ModelManagerAccessor {
}
}

declare module "vazkii.botania.api.corporea.CorporeaRequest" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $CorporeaRequestMatcher } from "vazkii.botania.api.corporea.CorporeaRequestMatcher"

export interface $CorporeaRequest {
"getEntity"(): $LivingEntity
"getExtracted"(): integer
"getFound"(): integer
"getMatcher"(): $CorporeaRequestMatcher
"getStillNeeded"(): integer
"trackExtracted"(int0: integer): void
"trackFound"(int0: integer): void
"trackSatisfied"(int0: integer): void
get "entity"(): $LivingEntity
get "extracted"(): integer
get "found"(): integer
get "matcher"(): $CorporeaRequestMatcher
get "stillNeeded"(): integer
}

export namespace $CorporeaRequest {
const probejs$$marker: never
}
export abstract class $CorporeaRequest$$Static implements $CorporeaRequest {
}
}

declare module "vazkii.botania.api.mana.ManaNetworkEvent" {
import { $ManaBlockType, $ManaBlockType$$Type } from "vazkii.botania.api.mana.ManaBlockType"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ManaReceiver, $ManaReceiver$$Type } from "vazkii.botania.api.mana.ManaReceiver"
import { $ManaNetworkAction, $ManaNetworkAction$$Type } from "vazkii.botania.api.mana.ManaNetworkAction"

export class $ManaNetworkEvent extends $Event {
constructor(manaReceiver0: $ManaReceiver$$Type, manaBlockType1: $ManaBlockType$$Type, manaNetworkAction2: $ManaNetworkAction$$Type)
constructor()

public "getAction"(): $ManaNetworkAction
public "getReceiver"(): $ManaReceiver
public "getType"(): $ManaBlockType
get "action"(): $ManaNetworkAction
get "receiver"(): $ManaReceiver
get "type"(): $ManaBlockType
}
}

declare module "vazkii.botania.api.mana.ManaItemHandler" {
import { $List } from "java.util.List"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $ManaItemHandler {
"dispatchMana"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer, boolean3: boolean): integer
"dispatchManaExact"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer, boolean3: boolean): boolean
"getFullDiscountForTools"(player0: $Player$$Type, itemStack1: $ItemStack$$Type): float
"getInvocationCountForTool"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer): integer
"getManaAccesories"(player0: $Player$$Type): $List<$ItemStack>
"getManaItems"(player0: $Player$$Type): $List<$ItemStack>
"hasProficiency"(player0: $Player$$Type, itemStack1: $ItemStack$$Type): boolean
"requestMana"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer, boolean3: boolean): integer
"requestManaExact"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer, boolean3: boolean): boolean
"requestManaExactForTool"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer, boolean3: boolean): boolean
"requestManaForTool"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer, boolean3: boolean): integer
}

export namespace $ManaItemHandler {
const INSTANCE: $ManaItemHandler
function instance(): $ManaItemHandler
}
export abstract class $ManaItemHandler$$Static implements $ManaItemHandler {
static readonly "INSTANCE": $ManaItemHandler

static "instance"(): $ManaItemHandler
}
}

declare module "vazkii.botania.mixin.AnimalAccessor" {
import { $UUID$$Type } from "java.util.UUID"

export interface $AnimalAccessor {
"botania_setLoveCause"(uUID0: $UUID$$Type): void
}

export namespace $AnimalAccessor {
const probejs$$marker: never
}
export abstract class $AnimalAccessor$$Static implements $AnimalAccessor {
}
}

declare module "vazkii.botania.mixin.HopperBlockEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $HopperBlockEntityAccessor {
}

export namespace $HopperBlockEntityAccessor {
const probejs$$marker: never
}
export abstract class $HopperBlockEntityAccessor$$Static implements $HopperBlockEntityAccessor {
}
}

declare module "vazkii.botania.forge.mixin.client.ModelBakeryForgeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ModelBakeryForgeAccessor {
}

export namespace $ModelBakeryForgeAccessor {
const probejs$$marker: never
}
export abstract class $ModelBakeryForgeAccessor$$Static implements $ModelBakeryForgeAccessor {
}
}

declare module "vazkii.botania.mixin.client.AbstractContainerScreenAccessor" {
import { $Slot } from "net.minecraft.world.inventory.Slot"

export interface $AbstractContainerScreenAccessor {
"getHoveredSlot"(): $Slot
get "hoveredSlot"(): $Slot
}

export namespace $AbstractContainerScreenAccessor {
const probejs$$marker: never
}
export abstract class $AbstractContainerScreenAccessor$$Static implements $AbstractContainerScreenAccessor {
}
}

declare module "vazkii.botania.api.corporea.CorporeaSpark" {
import { $DyeColor, $DyeColor$$Type } from "net.minecraft.world.item.DyeColor"
import { $List, $List$$Type } from "java.util.List"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $SparkEntity } from "vazkii.botania.api.item.SparkEntity"
import { $Set, $Set$$Type } from "java.util.Set"
import { $CorporeaNode } from "vazkii.botania.api.corporea.CorporeaNode"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $CorporeaSpark extends $SparkEntity {
"entity"(): $Entity
"getAttachPos"(): $BlockPos
"getConnections"(): $Set<$CorporeaSpark>
"getMaster"(): $CorporeaSpark
"getNetwork"(): $DyeColor
"getRelatives"(): $List<$CorporeaSpark>
"getSparkNode"(): $CorporeaNode
"introduceNearbyTo"(set0: $Set$$Type<$CorporeaSpark$$Type>, corporeaSpark1: $CorporeaSpark$$Type): void
"isCreative"(): boolean
"isMaster"(): boolean
"onItemExtracted"(itemStack0: $ItemStack$$Type): void
"onItemsRequested"(list0: $List$$Type<$ItemStack$$Type>): void
"setNetwork"(dyeColor0: $DyeColor$$Type): void
get "attachPos"(): $BlockPos
get "connections"(): $Set<$CorporeaSpark>
get "master"(): $CorporeaSpark
get "network"(): $DyeColor
get "relatives"(): $List<$CorporeaSpark>
get "sparkNode"(): $CorporeaNode
get "creative"(): boolean
get "master"(): boolean
set "network"(value: $DyeColor$$Type)
}

export namespace $CorporeaSpark {
const probejs$$marker: never
}
export abstract class $CorporeaSpark$$Static implements $CorporeaSpark {
}
}

declare module "vazkii.botania.mixin.ItemEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ItemEntityAccessor {
"getPickupDelay"(): integer
"setAge"(int0: integer): void
get "pickupDelay"(): integer
set "age"(value: integer)
}

export namespace $ItemEntityAccessor {
const probejs$$marker: never
}
export abstract class $ItemEntityAccessor$$Static implements $ItemEntityAccessor {
}
}

declare module "vazkii.botania.mixin.BlockPropertiesAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockPropertiesAccessor {
"botania_setHasCollision"(boolean0: boolean): void
"botania_setIsRandomlyTicking"(boolean0: boolean): void
"botania_setReplaceable"(boolean0: boolean): void
}

export namespace $BlockPropertiesAccessor {
const probejs$$marker: never
}
export abstract class $BlockPropertiesAccessor$$Static implements $BlockPropertiesAccessor {
}
}

declare module "vazkii.botania.mixin.RecipeManagerAccessor" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $Recipe, $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $Map } from "java.util.Map"
import { $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"

export interface $RecipeManagerAccessor {
"botania_getAll"<C extends $Container, T extends $Recipe<C>>(recipeType0: $RecipeType$$Type<T>): $Map<$ResourceLocation, T>
}

export namespace $RecipeManagerAccessor {
const probejs$$marker: never
}
export abstract class $RecipeManagerAccessor$$Static implements $RecipeManagerAccessor {
}
}

declare module "vazkii.botania.mixin.client.MinecraftAccessor" {
import { $ItemColors } from "net.minecraft.client.color.item.ItemColors"

export interface $MinecraftAccessor {
"getItemColors"(): $ItemColors
get "itemColors"(): $ItemColors
}

export namespace $MinecraftAccessor {
const probejs$$marker: never
}
export abstract class $MinecraftAccessor$$Static implements $MinecraftAccessor {
}
}

declare module "vazkii.botania.api.mana.ManaProficiencyEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ManaProficiencyEvent extends $Event {
constructor(player0: $Player$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean)
constructor()

public "getEntityPlayer"(): $Player
public "getTool"(): $ItemStack
public "isProficient"(): boolean
public "setProficient"(boolean0: boolean): void
get "entityPlayer"(): $Player
get "tool"(): $ItemStack
get "proficient"(): boolean
set "proficient"(value: boolean)
}
}

declare module "vazkii.botania.mixin.StatsAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $StatsAccessor {
}

export namespace $StatsAccessor {
const probejs$$marker: never
}
export abstract class $StatsAccessor$$Static implements $StatsAccessor {
}
}

declare module "vazkii.botania.api.corporea.CorporeaHelper" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Set } from "java.util.Set"
import { $CorporeaNode } from "vazkii.botania.api.corporea.CorporeaNode"
import { $CorporeaSpark, $CorporeaSpark$$Type } from "vazkii.botania.api.corporea.CorporeaSpark"
import { $Function$$Type } from "java.util.function.Function"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $CorporeaResult } from "vazkii.botania.api.corporea.CorporeaResult"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $CorporeaRequestMatcher, $CorporeaRequestMatcher$$Type } from "vazkii.botania.api.corporea.CorporeaRequestMatcher"
import { $Class$$Type } from "java.lang.Class"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $CorporeaHelper {
"createMatcher"(itemStack0: $ItemStack$$Type, boolean1: boolean): $CorporeaRequestMatcher
"createMatcher"(string0: string): $CorporeaRequestMatcher
"doesBlockHaveSpark"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): boolean
"getNodesOnNetwork"(corporeaSpark0: $CorporeaSpark$$Type): $Set<$CorporeaNode>
"getSparkForBlock"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): $CorporeaSpark
"registerRequestMatcher"<T extends $CorporeaRequestMatcher>(resourceLocation0: $ResourceLocation$$Type, class1: $Class$$Type<T>, function2: $Function$$Type<$CompoundTag$$Type, T>): void
"requestItem"(corporeaRequestMatcher0: $CorporeaRequestMatcher$$Type, int1: integer, corporeaSpark2: $CorporeaSpark$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): $CorporeaResult
"signalStrengthForRequestSize"(int0: integer): integer
}

export namespace $CorporeaHelper {
const INSTANCE: $CorporeaHelper
function instance(): $CorporeaHelper
}
export abstract class $CorporeaHelper$$Static implements $CorporeaHelper {
static readonly "INSTANCE": $CorporeaHelper

static "instance"(): $CorporeaHelper
}
}

declare module "vazkii.botania.mixin.ServerPlayerGameModeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ServerPlayerGameModeAccessor {
"botania_isDestroyingBlock"(): boolean
}

export namespace $ServerPlayerGameModeAccessor {
const probejs$$marker: never
}
export abstract class $ServerPlayerGameModeAccessor$$Static implements $ServerPlayerGameModeAccessor {
}
}

declare module "vazkii.botania.common.impl.corporea.CorporeaHelperImpl" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $CorporeaHelper } from "vazkii.botania.api.corporea.CorporeaHelper"
import { $Set } from "java.util.Set"
import { $CorporeaNode } from "vazkii.botania.api.corporea.CorporeaNode"
import { $CorporeaSpark, $CorporeaSpark$$Type } from "vazkii.botania.api.corporea.CorporeaSpark"
import { $Function$$Type } from "java.util.function.Function"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $CorporeaResult } from "vazkii.botania.api.corporea.CorporeaResult"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $CorporeaRequestMatcher, $CorporeaRequestMatcher$$Type } from "vazkii.botania.api.corporea.CorporeaRequestMatcher"
import { $Class$$Type } from "java.lang.Class"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $CorporeaHelperImpl implements $CorporeaHelper {
constructor()

public "clearCache"(): void
public "createMatcher"(itemStack0: $ItemStack$$Type, boolean1: boolean): $CorporeaRequestMatcher
public "createMatcher"(string0: string): $CorporeaRequestMatcher
public "doesBlockHaveSpark"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): boolean
public "getNodesOnNetwork"(corporeaSpark0: $CorporeaSpark$$Type): $Set<$CorporeaNode>
public "getSparkForBlock"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): $CorporeaSpark
public static "instance"(): $CorporeaHelper
public "registerRequestMatcher"<T extends $CorporeaRequestMatcher>(resourceLocation0: $ResourceLocation$$Type, class1: $Class$$Type<T>, function2: $Function$$Type<$CompoundTag$$Type, T>): void
public "requestItem"(corporeaRequestMatcher0: $CorporeaRequestMatcher$$Type, int1: integer, corporeaSpark2: $CorporeaSpark$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): $CorporeaResult
public "signalStrengthForRequestSize"(int0: integer): integer
}
}

declare module "vazkii.botania.mixin.AbstractCauldronBlockAccessor" {
import { $Map } from "java.util.Map"
import { $Item } from "net.minecraft.world.item.Item"
import { $CauldronInteraction } from "net.minecraft.core.cauldron.CauldronInteraction"

export interface $AbstractCauldronBlockAccessor {
"botania_getInteractions"(): $Map<$Item, $CauldronInteraction>
}

export namespace $AbstractCauldronBlockAccessor {
const probejs$$marker: never
}
export abstract class $AbstractCauldronBlockAccessor$$Static implements $AbstractCauldronBlockAccessor {
}
}

declare module "vazkii.botania.common.impl.mana.ManaItemHandlerImpl" {
import { $List } from "java.util.List"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ManaItemHandler } from "vazkii.botania.api.mana.ManaItemHandler"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ManaItemHandlerImpl implements $ManaItemHandler {
constructor()

public "dispatchMana"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer, boolean3: boolean): integer
public "dispatchManaExact"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer, boolean3: boolean): boolean
public "getFullDiscountForTools"(player0: $Player$$Type, itemStack1: $ItemStack$$Type): float
public "getInvocationCountForTool"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer): integer
public "getManaAccesories"(player0: $Player$$Type): $List<$ItemStack>
public "getManaItems"(player0: $Player$$Type): $List<$ItemStack>
public "hasProficiency"(player0: $Player$$Type, itemStack1: $ItemStack$$Type): boolean
public static "instance"(): $ManaItemHandler
public "requestMana"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer, boolean3: boolean): integer
public "requestManaExact"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer, boolean3: boolean): boolean
public "requestManaExactForTool"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer, boolean3: boolean): boolean
public "requestManaForTool"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer, boolean3: boolean): integer
}
}

declare module "vazkii.botania.mixin.CreeperAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CreeperAccessor {
"setCurrentFuseTime"(int0: integer): void
set "currentFuseTime"(value: integer)
}

export namespace $CreeperAccessor {
const probejs$$marker: never
}
export abstract class $CreeperAccessor$$Static implements $CreeperAccessor {
}
}

declare module "vazkii.botania.mixin.LevelAccessor" {
import { $NeighborUpdater } from "net.minecraft.world.level.redstone.NeighborUpdater"

export interface $LevelAccessor {
"getNeighborUpdater"(): $NeighborUpdater
get "neighborUpdater"(): $NeighborUpdater
}

export namespace $LevelAccessor {
const probejs$$marker: never
}
export abstract class $LevelAccessor$$Static implements $LevelAccessor {
}
}

declare module "vazkii.botania.api.corporea.CorporeaIndexRequestEvent" {
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $CorporeaRequestMatcher, $CorporeaRequestMatcher$$Type } from "vazkii.botania.api.corporea.CorporeaRequestMatcher"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $CorporeaSpark, $CorporeaSpark$$Type } from "vazkii.botania.api.corporea.CorporeaSpark"

export class $CorporeaIndexRequestEvent extends $Event {
constructor(serverPlayer0: $ServerPlayer$$Type, corporeaRequestMatcher1: $CorporeaRequestMatcher$$Type, int2: integer, corporeaSpark3: $CorporeaSpark$$Type)
constructor()

public "getIndexSpark"(): $CorporeaSpark
public "getMatcher"(): $CorporeaRequestMatcher
public "getRequestCount"(): integer
public "getRequester"(): $ServerPlayer
get "indexSpark"(): $CorporeaSpark
get "matcher"(): $CorporeaRequestMatcher
get "requestCount"(): integer
get "requester"(): $ServerPlayer
}
}

declare module "vazkii.botania.mixin.MushroomCowAccessor" {
import { $MobEffect, $MobEffect$$Type } from "net.minecraft.world.effect.MobEffect"

export interface $MushroomCowAccessor {
"getEffect"(): $MobEffect
"getEffectDuration"(): integer
"setEffect"(mobEffect0: $MobEffect$$Type): void
"setEffectDuration"(int0: integer): void
get "effect"(): $MobEffect
get "effectDuration"(): integer
set "effect"(value: $MobEffect$$Type)
set "effectDuration"(value: integer)
}

export namespace $MushroomCowAccessor {
const probejs$$marker: never
}
export abstract class $MushroomCowAccessor$$Static implements $MushroomCowAccessor {
}
}

declare module "vazkii.botania.mixin.InventoryAccessor" {
import { $List } from "java.util.List"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $InventoryAccessor {
"getCompartments"(): $List<$NonNullList<$ItemStack>>
get "compartments"(): $List<$NonNullList<$ItemStack>>
}

export namespace $InventoryAccessor {
const probejs$$marker: never
}
export abstract class $InventoryAccessor$$Static implements $InventoryAccessor {
}
}

declare module "vazkii.botania.mixin.AbstractFurnaceBlockEntityAccessor" {
import { $Container } from "net.minecraft.world.Container"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $RecipeManager$CachedCheck } from "net.minecraft.world.item.crafting.RecipeManager$CachedCheck"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $AbstractCookingRecipe } from "net.minecraft.world.item.crafting.AbstractCookingRecipe"

export interface $AbstractFurnaceBlockEntityAccessor {
"getCookingProgress"(): integer
"getCookingTotalTime"(): integer
"getItems"(): $NonNullList<$ItemStack>
"getLitTime"(): integer
"getQuickCheck"(): $RecipeManager$CachedCheck<$Container, $AbstractCookingRecipe>
"setCookingProgress"(int0: integer): void
"setLitTime"(int0: integer): void
get "cookingProgress"(): integer
get "cookingTotalTime"(): integer
get "items"(): $NonNullList<$ItemStack>
get "litTime"(): integer
get "quickCheck"(): $RecipeManager$CachedCheck<$Container, $AbstractCookingRecipe>
set "cookingProgress"(value: integer)
set "litTime"(value: integer)
}

export namespace $AbstractFurnaceBlockEntityAccessor {
const probejs$$marker: never
}
export abstract class $AbstractFurnaceBlockEntityAccessor$$Static implements $AbstractFurnaceBlockEntityAccessor {
}
}

declare module "vazkii.botania.mixin.ExperienceOrbAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExperienceOrbAccessor {
"botania_getCount"(): integer
"botania_setCount"(int0: integer): void
}

export namespace $ExperienceOrbAccessor {
const probejs$$marker: never
}
export abstract class $ExperienceOrbAccessor$$Static implements $ExperienceOrbAccessor {
}
}

declare module "vazkii.botania.mixin.RandomizableContainerBlockEntityAccessor" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"

export interface $RandomizableContainerBlockEntityAccessor {
"getLootTable"(): $ResourceLocation
get "lootTable"(): $ResourceLocation
}

export namespace $RandomizableContainerBlockEntityAccessor {
const probejs$$marker: never
}
export abstract class $RandomizableContainerBlockEntityAccessor$$Static implements $RandomizableContainerBlockEntityAccessor {
}
}

declare module "vazkii.botania.forge.mixin.AbstractFurnaceBlockEntityForgeAccessor" {
import { $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $NonNullList$$Type } from "net.minecraft.core.NonNullList"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"

export interface $AbstractFurnaceBlockEntityForgeAccessor {
"callCanBurn"(registryAccess0: $RegistryAccess$$Type, recipe1: $Recipe$$Type<any>, nonNullList2: $NonNullList$$Type<$ItemStack$$Type>, int3: integer): boolean
}

export namespace $AbstractFurnaceBlockEntityForgeAccessor {
const probejs$$marker: never
}
export abstract class $AbstractFurnaceBlockEntityForgeAccessor$$Static implements $AbstractFurnaceBlockEntityForgeAccessor {
}
}

declare module "vazkii.botania.mixin.GrowingPlantBodyBlockMixin" {
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"

export interface $GrowingPlantBodyBlockMixin {
"botania_getHeadPos"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, block2: $Block$$Type): $Optional<$BlockPos>
}

export namespace $GrowingPlantBodyBlockMixin {
const probejs$$marker: never
}
export abstract class $GrowingPlantBodyBlockMixin$$Static implements $GrowingPlantBodyBlockMixin {
}
}

declare module "vazkii.botania.mixin.PistonBaseBlockAccessor" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $PistonBaseBlockAccessor {
"botania_moveBlocks"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, boolean3: boolean): boolean
}

export namespace $PistonBaseBlockAccessor {
const probejs$$marker: never
}
export abstract class $PistonBaseBlockAccessor$$Static implements $PistonBaseBlockAccessor {
}
}

declare module "vazkii.botania.api.mana.ManaItemsEvent" {
import { $List, $List$$Type } from "java.util.List"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ManaItemsEvent extends $Event {
constructor(player0: $Player$$Type, list1: $List$$Type<$ItemStack$$Type>)
constructor()

public "getItems"(): $List<$ItemStack>
public "getPlayer"(): $Player
get "items"(): $List<$ItemStack>
get "player"(): $Player
}
}

declare module "vazkii.botania.client.core.SkyblockWorldInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SkyblockWorldInfo {
"isGardenOfGlass"(): boolean
"markGardenOfGlass"(): void
get "gardenOfGlass"(): boolean
}

export namespace $SkyblockWorldInfo {
const probejs$$marker: never
}
export abstract class $SkyblockWorldInfo$$Static implements $SkyblockWorldInfo {
}
}

declare module "vazkii.botania.mixin.client.RenderTypeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderTypeAccessor {
}

export namespace $RenderTypeAccessor {
const probejs$$marker: never
}
export abstract class $RenderTypeAccessor$$Static implements $RenderTypeAccessor {
}
}

declare module "vazkii.botania.api.mana.ManaBlockType" {
import { $Enum } from "java.lang.Enum"

export class $ManaBlockType extends $Enum<$ManaBlockType> {
static readonly "COLLECTOR": $ManaBlockType
static readonly "POOL": $ManaBlockType

public static "valueOf"(string0: string): $ManaBlockType
public static "values"(): $ManaBlockType[]
}
}

declare module "vazkii.botania.api.mana.ManaDiscountEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ManaDiscountEvent extends $Event {
constructor(player0: $Player$$Type, float1: float, itemStack2: $ItemStack$$Type)
constructor()

public "getDiscount"(): float
public "getEntityPlayer"(): $Player
public "getTool"(): $ItemStack
public "setDiscount"(float0: float): void
get "discount"(): float
get "entityPlayer"(): $Player
get "tool"(): $ItemStack
set "discount"(value: float)
}
}

declare module "vazkii.botania.api.mana.ManaReceiver" {
import { $IReceiveOrGiveSource } from "studio.fantasyit.ars_botania.api.IReceiveOrGiveSource"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Level } from "net.minecraft.world.level.Level"

export interface $ManaReceiver extends $IReceiveOrGiveSource {
"addSource"(int0: integer): integer
"canAcceptSource"(): boolean
"canReceiveManaFromBursts"(): boolean
"getCurrentMana"(): integer
"getManaReceiverLevel"(): $Level
"getManaReceiverPos"(): $BlockPos
"getMaxSource"(): integer
"getSource"(): integer
"getTransferRate"(): integer
"isFull"(): boolean
"receiveMana"(int0: integer): void
"removeSource"(int0: integer): integer
"setMaxSource"(int0: integer): void
"setSource"(int0: integer): integer
get "currentMana"(): integer
get "manaReceiverLevel"(): $Level
get "manaReceiverPos"(): $BlockPos
get "maxSource"(): integer
get "source"(): integer
get "transferRate"(): integer
get "full"(): boolean
set "maxSource"(value: integer)
set "source"(value: integer)
}

export namespace $ManaReceiver {
const probejs$$marker: never
}
export abstract class $ManaReceiver$$Static implements $ManaReceiver {
}
}

declare module "vazkii.botania.mixin.BundleItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BundleItemAccessor {
}

export namespace $BundleItemAccessor {
const probejs$$marker: never
}
export abstract class $BundleItemAccessor$$Static implements $BundleItemAccessor {
}
}

declare module "vazkii.botania.mixin.RecipeProviderAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RecipeProviderAccessor {
}

export namespace $RecipeProviderAccessor {
const probejs$$marker: never
}
export abstract class $RecipeProviderAccessor$$Static implements $RecipeProviderAccessor {
}
}

declare module "vazkii.botania.mixin.client.LevelRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LevelRendererAccessor {
}

export namespace $LevelRendererAccessor {
const probejs$$marker: never
}
export abstract class $LevelRendererAccessor$$Static implements $LevelRendererAccessor {
}
}

