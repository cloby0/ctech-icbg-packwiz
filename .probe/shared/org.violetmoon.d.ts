declare module "org.violetmoon.zeta.registry.LateBoundHolder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ITag$$Type } from "net.minecraftforge.registries.tags.ITag"
import { $Either } from "com.mojang.datafixers.util.Either"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Holder$Kind } from "net.minecraft.core.Holder$Kind"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $Registry, $Registry$$Type } from "net.minecraft.core.Registry"
import { $HolderOwner$$Type } from "net.minecraft.core.HolderOwner"
import { $Holder } from "net.minecraft.core.Holder"
import { $Stream } from "java.util.stream.Stream"
import { $Optional } from "java.util.Optional"

export class $LateBoundHolder<T = any> implements $Holder<T> {
readonly "key": $ResourceKey<T>

constructor(resourceKey0: $ResourceKey$$Type<T>)

public "canSerializeIn"(holderOwner0: $HolderOwner$$Type<T>): boolean
public "containsTag"(tagKey0: $TagKey$$Type<T>): boolean
public "containsTag"(iTag0: $ITag$$Type<T>): boolean
public static "direct"<T>(t0: T): $Holder<T>
public "get"(): T
public "getTagKeys"(): $Stream<$TagKey<T>>
public "is"(resourceLocation0: $ResourceLocation$$Type): boolean
public "is"(resourceKey0: $ResourceKey$$Type<T>): boolean
public "is"(predicate0: $Predicate$$Type<$ResourceKey$$Type<T>>): boolean
public "is"(tagKey0: $TagKey$$Type<T>): boolean
public "isBound"(): boolean
public "kind"(): $Holder$Kind
public "tags"(): $Stream<$TagKey<T>>
public "unwrap"(): $Either<$ResourceKey<T>, T>
public "unwrapKey"(): $Optional<$ResourceKey<T>>
public "value"(): T
get "registry"(): $Registry<T>
set "registry"(value: $Registry$$Type<T>)
get "thing"(): T
set "thing"(value: T)
get "tagKeys"(): $Stream<$TagKey<T>>
get "bound"(): boolean
}
}

declare module "org.violetmoon.zeta.event.play.ZRecipeCrawl$Visit$Shaped" {
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $ShapedRecipe, $ShapedRecipe$$Type } from "net.minecraft.world.item.crafting.ShapedRecipe"
import { $ZRecipeCrawl$Visit } from "org.violetmoon.zeta.event.play.ZRecipeCrawl$Visit"

export class $ZRecipeCrawl$Visit$Shaped extends $ZRecipeCrawl$Visit<$ShapedRecipe> {
constructor(shapedRecipe0: $ShapedRecipe$$Type, registryAccess1: $RegistryAccess$$Type)

}
}

declare module "org.violetmoon.zeta.event.bus.ZetaEventBus" {
import { $Logger$$Type } from "org.apache.logging.log4j.Logger"
import { $Annotation$$Type } from "java.lang.annotation.Annotation"
import { $Class$$Type } from "java.lang.Class"
import { $Zeta$$Type } from "org.violetmoon.zeta.Zeta"

export class $ZetaEventBus<E = any> {
constructor(class0: $Class$$Type<$Annotation$$Type>, class1: $Class$$Type<E>, logger2: $Logger$$Type, zeta3: $Zeta$$Type)

public "fire"<T extends E>(t0: T, class1: $Class$$Type<T>): T
public "fire"<T extends E>(t0: T): T
/** @deprecated */
public "fireExternal"<T extends E>(t0: T, class1: $Class$$Type<T>): T
public "subscribe"(object0: any): $ZetaEventBus<E>
public "unsubscribe"(object0: any): $ZetaEventBus<E>
}
}

declare module "org.violetmoon.quark.mixin.mixins.accessor.AccessorAbstractArrow" {
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $AccessorAbstractArrow {
"quark$getPickupItem"(): $ItemStack
}

export namespace $AccessorAbstractArrow {
const probejs$$marker: never
}
export abstract class $AccessorAbstractArrow$$Static implements $AccessorAbstractArrow {
}
}

declare module "org.violetmoon.zeta.client.HumanoidArmorModelGetter" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $HumanoidModel, $HumanoidModel$$Type } from "net.minecraft.client.model.HumanoidModel"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $HumanoidArmorModelGetter {
"getHumanoidArmorModel"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, equipmentSlot2: $EquipmentSlot$$Type, humanoidModel3: $HumanoidModel$$Type<any>): $HumanoidModel<any>
}

export namespace $HumanoidArmorModelGetter {
const probejs$$marker: never
}
export abstract class $HumanoidArmorModelGetter$$Static implements $HumanoidArmorModelGetter {
}
}

declare module "org.violetmoon.zetaimplforge.event.play.ForgeZRecipeCrawl$Visit$Shapeless" {
import { $ForgeZRecipeCrawl } from "org.violetmoon.zetaimplforge.event.play.ForgeZRecipeCrawl"
import { $ZRecipeCrawl$Visit$Shapeless, $ZRecipeCrawl$Visit$Shapeless$$Type } from "org.violetmoon.zeta.event.play.ZRecipeCrawl$Visit$Shapeless"

export class $ForgeZRecipeCrawl$Visit$Shapeless extends $ForgeZRecipeCrawl<$ZRecipeCrawl$Visit$Shapeless> {
constructor(shapeless0: $ZRecipeCrawl$Visit$Shapeless$$Type)
constructor()

}
}

declare module "org.violetmoon.zeta.recipe.IZetaCondition$IContext" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Registry } from "net.minecraft.core.Registry"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $Holder } from "net.minecraft.core.Holder"
import { $Map } from "java.util.Map"
import { $Collection } from "java.util.Collection"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export interface $IZetaCondition$IContext {
"getAllTags"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $Map<$ResourceLocation, $Collection<$Holder<T>>>
"getTag"<T>(tagKey0: $TagKey$$Type<T>): $Collection<$Holder<T>>
}

export namespace $IZetaCondition$IContext {
const probejs$$marker: never
}
export abstract class $IZetaCondition$IContext$$Static implements $IZetaCondition$IContext {
}
}

declare module "org.violetmoon.zetaimplforge.event.play.ForgeZRecipeCrawl$Visit$Cooking" {
import { $ForgeZRecipeCrawl } from "org.violetmoon.zetaimplforge.event.play.ForgeZRecipeCrawl"
import { $ZRecipeCrawl$Visit$Cooking, $ZRecipeCrawl$Visit$Cooking$$Type } from "org.violetmoon.zeta.event.play.ZRecipeCrawl$Visit$Cooking"

export class $ForgeZRecipeCrawl$Visit$Cooking extends $ForgeZRecipeCrawl<$ZRecipeCrawl$Visit$Cooking> {
constructor(cooking0: $ZRecipeCrawl$Visit$Cooking$$Type)
constructor()

}
}

declare module "org.violetmoon.quark.api.event.QuarkModuleEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $QuarkModuleEvent extends $Event {
readonly "eventName": string

constructor(string0: string)
constructor()

}
}

declare module "org.violetmoon.quark.mixin.mixins.client.accessor.AccessorModelManager" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $BakedModel } from "net.minecraft.client.resources.model.BakedModel"
import { $Map } from "java.util.Map"

export interface $AccessorModelManager {
"getBakedRegistry"(): $Map<$ResourceLocation, $BakedModel>
get "bakedRegistry"(): $Map<$ResourceLocation, $BakedModel>
}

export namespace $AccessorModelManager {
const probejs$$marker: never
}
export abstract class $AccessorModelManager$$Static implements $AccessorModelManager {
}
}

declare module "org.violetmoon.zeta.network.ZetaNetworkHandler" {
import { $ZetaMessageSerializer, $ZetaMessageSerializer$$Type } from "org.violetmoon.zeta.network.ZetaMessageSerializer"
import { $IZetaMessage, $IZetaMessage$$Type } from "org.violetmoon.zeta.network.IZetaMessage"
import { $ZetaNetworkDirection$$Type } from "org.violetmoon.zeta.network.ZetaNetworkDirection"
import { $Zeta$$Type } from "org.violetmoon.zeta.Zeta"
import { $Function$$Type } from "java.util.function.Function"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $List } from "java.util.List"
import { $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $Pair } from "org.apache.commons.lang3.tuple.Pair"
import { $Class$$Type } from "java.lang.Class"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $ZetaHandshakeMessage, $ZetaHandshakeMessage$$Type } from "org.violetmoon.zeta.network.ZetaHandshakeMessage"

export class $ZetaNetworkHandler {
constructor(zeta0: $Zeta$$Type, int1: integer)

public "getSerializer"(): $ZetaMessageSerializer
public "register"<T extends $IZetaMessage>(class0: $Class$$Type<T>, zetaNetworkDirection1: $ZetaNetworkDirection$$Type): void
public "registerLogin"<T extends $ZetaHandshakeMessage>(class0: $Class$$Type<T>, zetaNetworkDirection1: $ZetaNetworkDirection$$Type, int2: integer, boolean3: boolean, function4: $Function$$Type<boolean, $List<$Pair<string, T>>>): void
public "sendToAllPlayers"(iZetaMessage0: $IZetaMessage$$Type, minecraftServer1: $MinecraftServer$$Type): void
public "sendToPlayer"(iZetaMessage0: $IZetaMessage$$Type, serverPlayer1: $ServerPlayer$$Type): void
public "sendToPlayers"(iZetaMessage0: $IZetaMessage$$Type, iterable1: $Iterable$$Type<$ServerPlayer$$Type>): void
public "sendToServer"(iZetaMessage0: $IZetaMessage$$Type): void
public "wrapInVanilla"(iZetaMessage0: $IZetaMessage$$Type, zetaNetworkDirection1: $ZetaNetworkDirection$$Type): $Packet<any>
get "serializer"(): $ZetaMessageSerializer
set "serializer"(value: $ZetaMessageSerializer$$Type)
}
}

declare module "org.violetmoon.zeta.client.event.play.ZFirstClientTick" {
import { $IZetaLoadEvent } from "org.violetmoon.zeta.event.bus.IZetaLoadEvent"

export interface $ZFirstClientTick extends $IZetaLoadEvent {
}

export namespace $ZFirstClientTick {
const probejs$$marker: never
}
export abstract class $ZFirstClientTick$$Static implements $ZFirstClientTick {
}
}

declare module "org.violetmoon.zeta.util.RaytracingUtil" {
import { $HitResult } from "net.minecraft.world.phys.HitResult"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ClipContext$Fluid$$Type } from "net.minecraft.world.level.ClipContext$Fluid"
import { $Pair } from "org.apache.commons.lang3.tuple.Pair"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $ClipContext$Block$$Type } from "net.minecraft.world.level.ClipContext$Block"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $RaytracingUtil {
constructor()

public "getEntityParams"(entity0: $Entity$$Type): $Pair<$Vec3, $Vec3>
public "getEntityRange"(livingEntity0: $LivingEntity$$Type): double
public "rayTrace"(entity0: $Entity$$Type, level1: $Level$$Type, vec32: $Vec3$$Type, vec33: $Vec3$$Type, block4: $ClipContext$Block$$Type, fluid5: $ClipContext$Fluid$$Type, double6: double): $HitResult
public "rayTrace"(entity0: $Entity$$Type, level1: $Level$$Type, vec32: $Vec3$$Type, vec33: $Vec3$$Type, block4: $ClipContext$Block$$Type, fluid5: $ClipContext$Fluid$$Type): $HitResult
public "rayTrace"(entity0: $Entity$$Type, level1: $Level$$Type, entity2: $Entity$$Type, block3: $ClipContext$Block$$Type, fluid4: $ClipContext$Fluid$$Type, double5: double): $HitResult
public "rayTrace"(entity0: $Entity$$Type, level1: $Level$$Type, player2: $Player$$Type, block3: $ClipContext$Block$$Type, fluid4: $ClipContext$Fluid$$Type): $HitResult
}
}

declare module "org.violetmoon.zeta.event.load.ZAddReloadListener" {
import { $PreparableReloadListener$$Type } from "net.minecraft.server.packs.resources.PreparableReloadListener"
import { $ReloadableServerResources } from "net.minecraft.server.ReloadableServerResources"
import { $IZetaPlayEvent } from "org.violetmoon.zeta.event.bus.IZetaPlayEvent"
import { $RegistryAccess } from "net.minecraft.core.RegistryAccess"

export interface $ZAddReloadListener extends $IZetaPlayEvent {
"addListener"(preparableReloadListener0: $PreparableReloadListener$$Type): void
"getRegistryAccess"(): $RegistryAccess
"getServerResources"(): $ReloadableServerResources
get "registryAccess"(): $RegistryAccess
get "serverResources"(): $ReloadableServerResources
}

export namespace $ZAddReloadListener {
const probejs$$marker: never
}
export abstract class $ZAddReloadListener$$Static implements $ZAddReloadListener {
}
}

declare module "org.violetmoon.zeta.item.ext.ItemExtensionFactory" {
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $IZetaItemExtensions } from "org.violetmoon.zeta.item.ext.IZetaItemExtensions"

export interface $ItemExtensionFactory {
"get"(itemStack0: $ItemStack$$Type): $IZetaItemExtensions
"getInternal"(itemStack0: $ItemStack$$Type): $IZetaItemExtensions
}

export namespace $ItemExtensionFactory {
const probejs$$marker: never
}
export abstract class $ItemExtensionFactory$$Static implements $ItemExtensionFactory {
}
}

declare module "org.violetmoon.zeta.event.play.loading.ZGatherAdditionalFlags" {
import { $ConfigFlagManager } from "org.violetmoon.zeta.config.ConfigFlagManager"
import { $IZetaPlayEvent } from "org.violetmoon.zeta.event.bus.IZetaPlayEvent"

/** @deprecated */
export interface $ZGatherAdditionalFlags extends $IZetaPlayEvent {
"flagManager"(): $ConfigFlagManager
}

export namespace $ZGatherAdditionalFlags {
const probejs$$marker: never
}
export abstract class $ZGatherAdditionalFlags$$Static implements $ZGatherAdditionalFlags {
}
}

declare module "org.violetmoon.zeta.event.play.loading.ZGatherHints" {
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $ConfigFlagManager$$Type } from "org.violetmoon.zeta.config.ConfigFlagManager"
import { $IZetaPlayEvent } from "org.violetmoon.zeta.event.bus.IZetaPlayEvent"
import { $RegistryAccess } from "net.minecraft.core.RegistryAccess"
import { $Zeta$$Type } from "org.violetmoon.zeta.Zeta"
import { $ZetaModule$$Type } from "org.violetmoon.zeta.module.ZetaModule"

/** @deprecated */
export interface $ZGatherHints extends $IZetaPlayEvent {
"accept"(itemLike0: $ItemLike$$Type, component1: $Component$$Type): void
"gatherHintsFromModule"(zetaModule0: $ZetaModule$$Type, configFlagManager1: $ConfigFlagManager$$Type): void
"getRegistryAccess"(): $RegistryAccess
"hintItem"(zeta0: $Zeta$$Type, itemLike1: $ItemLike$$Type, string2: string, ...object3s: any[]): void
"hintItem"(zeta0: $Zeta$$Type, itemLike1: $ItemLike$$Type, ...object2s: any[]): void
get "registryAccess"(): $RegistryAccess
}

export namespace $ZGatherHints {
const probejs$$marker: never
}
export abstract class $ZGatherHints$$Static implements $ZGatherHints {
}
}

declare module "org.violetmoon.quark.mixin.mixins.accessor.AccessorLivingEntity" {
import { $Player } from "net.minecraft.world.entity.player.Player"

export interface $AccessorLivingEntity {
"quark$lastHurtByPlayer"(): $Player
"quark$lastHurtByPlayerTime"(): integer
}

export namespace $AccessorLivingEntity {
const probejs$$marker: never
}
export abstract class $AccessorLivingEntity$$Static implements $AccessorLivingEntity {
}
}

declare module "org.violetmoon.zeta.registry.RenderLayerRegistry$Layer" {
import { $Enum } from "java.lang.Enum"

export class $RenderLayerRegistry$Layer extends $Enum<$RenderLayerRegistry$Layer> {
static readonly "CUTOUT": $RenderLayerRegistry$Layer
static readonly "CUTOUT_MIPPED": $RenderLayerRegistry$Layer
static readonly "SOLID": $RenderLayerRegistry$Layer
static readonly "TRANSLUCENT": $RenderLayerRegistry$Layer

public static "valueOf"(string0: string): $RenderLayerRegistry$Layer
public static "values"(): $RenderLayerRegistry$Layer[]
}
}

declare module "org.violetmoon.zeta.recipe.FlagIngredient$Serializer" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $IZetaIngredientSerializer } from "org.violetmoon.zeta.recipe.IZetaIngredientSerializer"
import { $ConfigFlagManager, $ConfigFlagManager$$Type } from "org.violetmoon.zeta.config.ConfigFlagManager"
import { $FlagIngredient, $FlagIngredient$$Type } from "org.violetmoon.zeta.recipe.FlagIngredient"
import { $Record } from "java.lang.Record"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Zeta } from "org.violetmoon.zeta.Zeta"

export class $FlagIngredient$Serializer extends $Record implements $IZetaIngredientSerializer<$FlagIngredient> {
/** @deprecated */
static "INSTANCE": $FlagIngredient$Serializer

constructor(cfm: $ConfigFlagManager$$Type)

public "cfm"(): $ConfigFlagManager
public "getID"(): $ResourceLocation
public "getZeta"(): $Zeta
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type, flagIngredient1: $FlagIngredient$$Type): void
get "iD"(): $ResourceLocation
get "zeta"(): $Zeta
}
}

declare module "org.violetmoon.zetaimplforge.api.ForgeZGatherAdvancementModifiers" {
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $ZGatherAdvancementModifiers, $ZGatherAdvancementModifiers$$Type } from "org.violetmoon.zeta.event.load.ZGatherAdvancementModifiers"
import { $Set$$Type } from "java.util.Set"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Biome$$Type } from "net.minecraft.world.level.biome.Biome"
import { $BooleanSupplier$$Type } from "java.util.function.BooleanSupplier"
import { $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $IAdvancementModifier, $IAdvancementModifier$$Type } from "org.violetmoon.zeta.api.IAdvancementModifier"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $BucketItem$$Type } from "net.minecraft.world.item.BucketItem"
import { $IAdvancementModifierDelegate } from "org.violetmoon.zeta.api.IAdvancementModifierDelegate"
import { $MobEffect$$Type } from "net.minecraft.world.effect.MobEffect"

export class $ForgeZGatherAdvancementModifiers extends $Event implements $ZGatherAdvancementModifiers, $IModBusEvent {
constructor(zGatherAdvancementModifiers0: $ZGatherAdvancementModifiers$$Type)
constructor()

public "createASeedyPlaceMod"(set0: $Set$$Type<$Block$$Type>): $IAdvancementModifier
public "createAdventuringTimeMod"(set0: $Set$$Type<$ResourceKey$$Type<$Biome$$Type>>): $IAdvancementModifier
public "createBalancedDietMod"(set0: $Set$$Type<$ItemLike$$Type>): $IAdvancementModifier
public "createFishyBusinessMod"(set0: $Set$$Type<$ItemLike$$Type>): $IAdvancementModifier
public "createFuriousCocktailMod"(booleanSupplier0: $BooleanSupplier$$Type, set1: $Set$$Type<$MobEffect$$Type>): $IAdvancementModifier
public "createGlowAndBeholdMod"(set0: $Set$$Type<$Block$$Type>): $IAdvancementModifier
public "createMonsterHunterMod"(set0: $Set$$Type<$EntityType$$Type<any>>): $IAdvancementModifier
public "createTacticalFishingMod"(set0: $Set$$Type<$BucketItem$$Type>): $IAdvancementModifier
public "createTwoByTwoMod"(set0: $Set$$Type<$EntityType$$Type<any>>): $IAdvancementModifier
public "createWaxOnWaxOffMod"(set0: $Set$$Type<$Block$$Type>, set1: $Set$$Type<$Block$$Type>): $IAdvancementModifier
public "getDelegate"(): $IAdvancementModifierDelegate
public "register"(iAdvancementModifier0: $IAdvancementModifier$$Type): void
get "delegate"(): $IAdvancementModifierDelegate
}
}

declare module "org.violetmoon.zetaimplforge.event.load.ForgeZRegister$Post" {
import { $ZRegister$Post } from "org.violetmoon.zeta.event.load.ZRegister$Post"
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $ForgeZRegister$Post extends $Event implements $ZRegister$Post, $IModBusEvent {
constructor()

}
}

declare module "org.violetmoon.zeta.api.IAdvancementModifierDelegate" {
import { $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $IAdvancementModifier } from "org.violetmoon.zeta.api.IAdvancementModifier"
import { $Set$$Type } from "java.util.Set"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $BucketItem$$Type } from "net.minecraft.world.item.BucketItem"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Biome$$Type } from "net.minecraft.world.level.biome.Biome"
import { $BooleanSupplier$$Type } from "java.util.function.BooleanSupplier"
import { $MobEffect$$Type } from "net.minecraft.world.effect.MobEffect"

export interface $IAdvancementModifierDelegate {
"createASeedyPlaceMod"(set0: $Set$$Type<$Block$$Type>): $IAdvancementModifier
"createAdventuringTimeMod"(set0: $Set$$Type<$ResourceKey$$Type<$Biome$$Type>>): $IAdvancementModifier
"createBalancedDietMod"(set0: $Set$$Type<$ItemLike$$Type>): $IAdvancementModifier
"createFishyBusinessMod"(set0: $Set$$Type<$ItemLike$$Type>): $IAdvancementModifier
"createFuriousCocktailMod"(booleanSupplier0: $BooleanSupplier$$Type, set1: $Set$$Type<$MobEffect$$Type>): $IAdvancementModifier
"createGlowAndBeholdMod"(set0: $Set$$Type<$Block$$Type>): $IAdvancementModifier
"createMonsterHunterMod"(set0: $Set$$Type<$EntityType$$Type<any>>): $IAdvancementModifier
"createTacticalFishingMod"(set0: $Set$$Type<$BucketItem$$Type>): $IAdvancementModifier
"createTwoByTwoMod"(set0: $Set$$Type<$EntityType$$Type<any>>): $IAdvancementModifier
"createWaxOnWaxOffMod"(set0: $Set$$Type<$Block$$Type>, set1: $Set$$Type<$Block$$Type>): $IAdvancementModifier
}

export namespace $IAdvancementModifierDelegate {
const probejs$$marker: never
}
export abstract class $IAdvancementModifierDelegate$$Static implements $IAdvancementModifierDelegate {
}
}

declare module "org.violetmoon.zeta.world.EntitySpawnHandler" {
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $EntitySpawnHandler$TrackedSpawnConfig, $EntitySpawnHandler$TrackedSpawnConfig$$Type } from "org.violetmoon.zeta.world.EntitySpawnHandler$TrackedSpawnConfig"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $Zeta$$Type } from "org.violetmoon.zeta.Zeta"
import { $BooleanSupplier$$Type } from "java.util.function.BooleanSupplier"
import { $SpawnPlacements$SpawnPredicate$$Type } from "net.minecraft.world.entity.SpawnPlacements$SpawnPredicate"
import { $EntitySpawnConfig$$Type } from "org.violetmoon.zeta.config.type.EntitySpawnConfig"
import { $ZConfigChanged$$Type } from "org.violetmoon.zeta.event.load.ZConfigChanged"
import { $List, $List$$Type } from "java.util.List"
import { $MobCategory$$Type } from "net.minecraft.world.entity.MobCategory"
import { $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"
import { $Mob, $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $ZetaModule$$Type } from "org.violetmoon.zeta.module.ZetaModule"

export class $EntitySpawnHandler {
constructor(zeta0: $Zeta$$Type)

public "addEgg"(entityType0: $EntityType$$Type<$Mob$$Type>, int1: integer, int2: integer, zetaModule3: $ZetaModule$$Type, booleanSupplier4: $BooleanSupplier$$Type): void
public "addEgg"(zetaModule0: $ZetaModule$$Type, entityType1: $EntityType$$Type<$Mob$$Type>, int2: integer, int3: integer, entitySpawnConfig4: $EntitySpawnConfig$$Type): void
public "refresh"(zConfigChanged0: $ZConfigChanged$$Type): void
public "registerSpawn"<T extends $Mob>(entityType0: $EntityType$$Type<T>, mobCategory1: $MobCategory$$Type, type2: $SpawnPlacements$Type$$Type, types3: $Heightmap$Types$$Type, spawnPredicate4: $SpawnPlacements$SpawnPredicate$$Type<T>, entitySpawnConfig5: $EntitySpawnConfig$$Type): void
public "track"<T extends $Mob>(entityType0: $EntityType$$Type<T>, mobCategory1: $MobCategory$$Type, entitySpawnConfig2: $EntitySpawnConfig$$Type, boolean3: boolean): void
get "trackedSpawnConfigs"(): $List<$EntitySpawnHandler$TrackedSpawnConfig>
set "trackedSpawnConfigs"(value: $List$$Type<$EntitySpawnHandler$TrackedSpawnConfig$$Type>)
}
}

declare module "org.violetmoon.zeta.network.ZetaMessageSerializer$Reader" {
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Field$$Type } from "java.lang.reflect.Field"

export interface $ZetaMessageSerializer$Reader<T = any> {
"read"(friendlyByteBuf0: $FriendlyByteBuf$$Type, field1: $Field$$Type): T
}

export namespace $ZetaMessageSerializer$Reader {
const probejs$$marker: never
}
export abstract class $ZetaMessageSerializer$Reader$$Static<T = any> implements $ZetaMessageSerializer$Reader<T> {
}
}

declare module "org.violetmoon.zeta.event.load.ZConfigChanged" {
import { $IZetaLoadEvent } from "org.violetmoon.zeta.event.bus.IZetaLoadEvent"

export interface $ZConfigChanged extends $IZetaLoadEvent {
}

export namespace $ZConfigChanged {
const probejs$$marker: never
}
export abstract class $ZConfigChanged$$Static implements $ZConfigChanged {
}
}

declare module "org.violetmoon.zeta.config.ConfigFlagManager" {
import { $ZRegister$$Type } from "org.violetmoon.zeta.event.load.ZRegister"
import { $FlagIngredient$Serializer } from "org.violetmoon.zeta.recipe.FlagIngredient$Serializer"
import { $Set } from "java.util.Set"
import { $Zeta, $Zeta$$Type } from "org.violetmoon.zeta.Zeta"
import { $ZetaModule$$Type } from "org.violetmoon.zeta.module.ZetaModule"

export class $ConfigFlagManager {
readonly "flagIngredientSerializer": $FlagIngredient$Serializer
readonly "zeta": $Zeta

constructor(zeta0: $Zeta$$Type)

public "clear"(): void
public "getAllFlags"(): $Set<string>
public "getFlag"(string0: string): boolean
public "isValidFlag"(string0: string): boolean
public "onRegister"(zRegister0: $ZRegister$$Type): void
public "putFlag"(zetaModule0: $ZetaModule$$Type, string1: string, boolean2: boolean): void
public "putModuleFlag"(zetaModule0: $ZetaModule$$Type): void
get "allFlags"(): $Set<string>
}
}

declare module "org.violetmoon.zeta.module.ZetaModuleManager" {
import { $List } from "java.util.List"
import { $Collection } from "java.util.Collection"
import { $ZetaCategory, $ZetaCategory$$Type } from "org.violetmoon.zeta.module.ZetaCategory"
import { $Optional } from "java.util.Optional"
import { $Class$$Type } from "java.lang.Class"
import { $Zeta$$Type } from "org.violetmoon.zeta.Zeta"
import { $ModuleFinder$$Type } from "org.violetmoon.zeta.module.ModuleFinder"
import { $ZetaModule, $ZetaModule$$Type } from "org.violetmoon.zeta.module.ZetaModule"
import { $Iterable$$Type } from "java.lang.Iterable"

export class $ZetaModuleManager {
constructor(zeta0: $Zeta$$Type)

public "doFinalize"(): void
public "get"<M extends $ZetaModule>(class0: $Class$$Type<M>): M
public "getCategories"(): $Collection<$ZetaCategory>
public "getCategory"(string0: string): $ZetaCategory
public "getInhabitedCategories"(): $List<$ZetaCategory>
public "getModules"(): $Collection<$ZetaModule>
public "getOptional"<M extends $ZetaModule>(class0: $Class$$Type<M>): $Optional<M>
public "initCategories"(iterable0: $Iterable$$Type<$ZetaCategory$$Type>): void
public "isEnabled"(class0: $Class$$Type<$ZetaModule$$Type>): boolean
public "isEnabledOrOverlapping"(class0: $Class$$Type<$ZetaModule$$Type>): boolean
public "load"(moduleFinder0: $ModuleFinder$$Type): void
public "modulesInCategory"(zetaCategory0: $ZetaCategory$$Type): $List<$ZetaModule>
get "categories"(): $Collection<$ZetaCategory>
get "inhabitedCategories"(): $List<$ZetaCategory>
get "modules"(): $Collection<$ZetaModule>
}
}

declare module "org.violetmoon.zeta.config.SectionDefinition$Builder" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $SectionDefinition, $SectionDefinition$$Type } from "org.violetmoon.zeta.config.SectionDefinition"
import { $ValueDefinition, $ValueDefinition$$Type } from "org.violetmoon.zeta.config.ValueDefinition"
import { $Definition$Builder } from "org.violetmoon.zeta.config.Definition$Builder"
import { $ValueDefinition$Builder$$Type } from "org.violetmoon.zeta.config.ValueDefinition$Builder"

export class $SectionDefinition$Builder extends $Definition$Builder<$SectionDefinition$Builder, $SectionDefinition> {
constructor()

public "addSubsection"(consumer0: $Consumer$$Type<$SectionDefinition$Builder$$Type>): $SectionDefinition
public "addSubsection"(sectionDefinition0: $SectionDefinition$$Type): $SectionDefinition$Builder
public "addValue"<T>(consumer0: $Consumer$$Type<$ValueDefinition$Builder$$Type<T>>): $ValueDefinition<T>
public "addValue"(valueDefinition0: $ValueDefinition$$Type<any>): $SectionDefinition$Builder
}
}

declare module "org.violetmoon.zeta.registry.RenderLayerRegistry" {
import { $RenderLayerRegistry$Layer$$Type } from "org.violetmoon.zeta.registry.RenderLayerRegistry$Layer"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"

export class $RenderLayerRegistry {
constructor()

public "finalize"(biConsumer0: $BiConsumer$$Type<$Block$$Type, $RenderLayerRegistry$Layer$$Type>): void
public "mock"(block0: $Block$$Type, block1: $Block$$Type): void
public "put"(block0: $Block$$Type, layer1: $RenderLayerRegistry$Layer$$Type): void
}
}

declare module "org.violetmoon.zetaimplforge.event.play.ForgeZRecipeCrawl" {
import { $ZRecipeCrawl, $ZRecipeCrawl$$Type } from "org.violetmoon.zeta.event.play.ZRecipeCrawl"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $IZetaPlayEvent } from "org.violetmoon.zeta.event.bus.IZetaPlayEvent"

export class $ForgeZRecipeCrawl<W extends $ZRecipeCrawl = $ZRecipeCrawl> extends $Event implements $IZetaPlayEvent {
constructor(w0: W)
constructor()

public "get"(): W
}
}

declare module "org.violetmoon.zetaimplforge.event.play.loading.ForgeZGatherHints" {
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $ConfigFlagManager$$Type } from "org.violetmoon.zeta.config.ConfigFlagManager"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ZGatherHints, $ZGatherHints$$Type } from "org.violetmoon.zeta.event.play.loading.ZGatherHints"
import { $RegistryAccess } from "net.minecraft.core.RegistryAccess"
import { $Zeta$$Type } from "org.violetmoon.zeta.Zeta"
import { $ZetaModule$$Type } from "org.violetmoon.zeta.module.ZetaModule"

/** @deprecated */
export class $ForgeZGatherHints extends $Event implements $ZGatherHints {
constructor(zGatherHints0: $ZGatherHints$$Type)
constructor()

public "accept"(itemLike0: $ItemLike$$Type, component1: $Component$$Type): void
public "gatherHintsFromModule"(zetaModule0: $ZetaModule$$Type, configFlagManager1: $ConfigFlagManager$$Type): void
public "getRegistryAccess"(): $RegistryAccess
public "hintItem"(zeta0: $Zeta$$Type, itemLike1: $ItemLike$$Type, string2: string, ...object3s: any[]): void
public "hintItem"(zeta0: $Zeta$$Type, itemLike1: $ItemLike$$Type, ...object2s: any[]): void
get "registryAccess"(): $RegistryAccess
}
}

declare module "org.violetmoon.zeta.recipe.IZetaIngredientSerializer" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Zeta } from "org.violetmoon.zeta.Zeta"
import { $Ingredient, $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export interface $IZetaIngredientSerializer<T extends $Ingredient = $Ingredient> {
"getID"(): $ResourceLocation
"getZeta"(): $Zeta
"parse"(jsonObject0: $JsonObject$$Type): T
"parse"(friendlyByteBuf0: $FriendlyByteBuf$$Type): T
"write"(friendlyByteBuf0: $FriendlyByteBuf$$Type, t1: T): void
get "iD"(): $ResourceLocation
get "zeta"(): $Zeta
}

export namespace $IZetaIngredientSerializer {
const probejs$$marker: never
}
export abstract class $IZetaIngredientSerializer$$Static<T extends $Ingredient = $Ingredient> implements $IZetaIngredientSerializer<T> {
}
}

declare module "org.violetmoon.quark.content.experimental.hax.PseudoAccessorMerchantOffer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PseudoAccessorMerchantOffer {
"quark$getTier"(): integer
"quark$setTier"(int0: integer): void
}

export namespace $PseudoAccessorMerchantOffer {
const probejs$$marker: never
}
export abstract class $PseudoAccessorMerchantOffer$$Static implements $PseudoAccessorMerchantOffer {
}
}

declare module "org.violetmoon.quark.mixin.mixins.accessor.AccessorSinglePoolElement" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Either } from "com.mojang.datafixers.util.Either"
import { $StructureTemplate } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate"

export interface $AccessorSinglePoolElement {
"getTemplate"(): $Either<$ResourceLocation, $StructureTemplate>
get "template"(): $Either<$ResourceLocation, $StructureTemplate>
}

export namespace $AccessorSinglePoolElement {
const probejs$$marker: never
}
export abstract class $AccessorSinglePoolElement$$Static implements $AccessorSinglePoolElement {
}
}

declare module "org.violetmoon.zeta.event.play.ZRecipeCrawl$Visit$Custom" {
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $CustomRecipe, $CustomRecipe$$Type } from "net.minecraft.world.item.crafting.CustomRecipe"
import { $ZRecipeCrawl$Visit } from "org.violetmoon.zeta.event.play.ZRecipeCrawl$Visit"

export class $ZRecipeCrawl$Visit$Custom extends $ZRecipeCrawl$Visit<$CustomRecipe> {
constructor(customRecipe0: $CustomRecipe$$Type, registryAccess1: $RegistryAccess$$Type)

}
}

declare module "org.violetmoon.zeta.util.NameChanger" {
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"

export class $NameChanger {
constructor()

public "changeBlock"(block0: $Block$$Type, string1: string, boolean2: boolean): void
public "changeItem"(item0: $Item$$Type, string1: string, boolean2: boolean): void
}
}

declare module "org.violetmoon.zeta.event.play.ZRecipeCrawl" {
import { $IZetaPlayEvent } from "org.violetmoon.zeta.event.bus.IZetaPlayEvent"

export class $ZRecipeCrawl implements $IZetaPlayEvent {
constructor()

}
}

declare module "org.violetmoon.zetaimplforge.mixin.mixins.WeatheringCopperMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WeatheringCopperMixin {
}

export namespace $WeatheringCopperMixin {
const probejs$$marker: never
}
export abstract class $WeatheringCopperMixin$$Static implements $WeatheringCopperMixin {
}
}

declare module "org.violetmoon.zeta.event.play.ZRecipeCrawl$Starting" {
import { $ZRecipeCrawl } from "org.violetmoon.zeta.event.play.ZRecipeCrawl"

export class $ZRecipeCrawl$Starting extends $ZRecipeCrawl {
constructor()

}
}

declare module "org.violetmoon.zeta.event.play.ZRecipeCrawl$Digest" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ZRecipeCrawl } from "org.violetmoon.zeta.event.play.ZRecipeCrawl"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Multimap$$Type } from "com.google.common.collect.Multimap"

export class $ZRecipeCrawl$Digest extends $ZRecipeCrawl {
constructor(multimap0: $Multimap$$Type<$Item$$Type, $ItemStack$$Type>, multimap1: $Multimap$$Type<$Item$$Type, $ItemStack$$Type>)

public "get"(item0: $Item$$Type, boolean1: boolean): $Collection<$ItemStack>
public "has"(item0: $Item$$Type, boolean1: boolean): boolean
public "recursivelyFindCraftedItems"(collection0: $Collection$$Type<$Item$$Type>, collection1: $Collection$$Type<$Item$$Type>, collection2: $Collection$$Type<$Item$$Type>, consumer3: $Consumer$$Type<$Item$$Type>): void
public "recursivelyFindCraftedItemsFromStrings"(collection0: $Collection$$Type<string>, collection1: $Collection$$Type<string>, collection2: $Collection$$Type<string>, consumer3: $Consumer$$Type<$Item$$Type>): void
}
}

declare module "org.violetmoon.quark.api.event.ModuleLoadedEvent" {
import { $QuarkModuleEvent } from "org.violetmoon.quark.api.event.QuarkModuleEvent"

export class $ModuleLoadedEvent extends $QuarkModuleEvent {
constructor(string0: string)
constructor()

}
}

declare module "org.violetmoon.zeta.registry.DyeablesRegistry" {
import { $ZRegister$Post$$Type } from "org.violetmoon.zeta.event.load.ZRegister$Post"
import { $List$$Type } from "java.util.List"
import { $ZRegister$$Type } from "org.violetmoon.zeta.event.load.ZRegister"
import { $DyeableLeatherItem } from "net.minecraft.world.item.DyeableLeatherItem"
import { $Map } from "java.util.Map"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $DyeItem$$Type } from "net.minecraft.world.item.DyeItem"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ZetaModule$$Type } from "org.violetmoon.zeta.module.ZetaModule"
import { $BooleanSupplier, $BooleanSupplier$$Type } from "java.util.function.BooleanSupplier"

export class $DyeablesRegistry {
readonly "SURROGATE": $DyeableLeatherItem
readonly "dyeableConditions": $Map<$Item, $BooleanSupplier>

constructor()

public "applyDye"(itemStack0: $ItemStack$$Type, int1: integer): void
public "dyeItem"(itemStack0: $ItemStack$$Type, list1: $List$$Type<$DyeItem$$Type>): $ItemStack
public "getColor"(itemStack0: $ItemStack$$Type): integer
public "getDye"(itemStack0: $ItemStack$$Type): integer
public "isDyeable"(itemStack0: $ItemStack$$Type): boolean
public "isDyed"(itemStack0: $ItemStack$$Type): boolean
public "register"(item0: $Item$$Type, booleanSupplier1: $BooleanSupplier$$Type): void
public "register"(zRegister0: $ZRegister$$Type): void
public "register"(item0: $Item$$Type): void
public "register"(item0: $Item$$Type, zetaModule1: $ZetaModule$$Type): void
public "registerPost"(post0: $ZRegister$Post$$Type): void
}
}

declare module "org.violetmoon.quark.api.event.UsageTickerEvent$Pass" {
import { $Enum } from "java.lang.Enum"

export class $UsageTickerEvent$Pass extends $Enum<$UsageTickerEvent$Pass> {
static readonly "LOGICAL": $UsageTickerEvent$Pass
static readonly "RENDERING": $UsageTickerEvent$Pass

public static "valueOf"(string0: string): $UsageTickerEvent$Pass
public static "values"(): $UsageTickerEvent$Pass[]
}
}

declare module "org.violetmoon.quark.mixin.mixins.accessor.AccessorServerGamePacketListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorServerGamePacketListener {
"setAboveGroundTickCount"(int0: integer): void
set "aboveGroundTickCount"(value: integer)
}

export namespace $AccessorServerGamePacketListener {
const probejs$$marker: never
}
export abstract class $AccessorServerGamePacketListener$$Static implements $AccessorServerGamePacketListener {
}
}

declare module "org.violetmoon.zeta.mixin.mixins.AccessorLootTable" {
import { $List } from "java.util.List"
import { $LootPool } from "net.minecraft.world.level.storage.loot.LootPool"

export interface $AccessorLootTable {
"zeta$getPools"(): $List<$LootPool>
}

export namespace $AccessorLootTable {
const probejs$$marker: never
}
export abstract class $AccessorLootTable$$Static implements $AccessorLootTable {
}
}

declare module "org.violetmoon.zeta.event.load.ZGatherAdvancementModifiers" {
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Set$$Type } from "java.util.Set"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Biome$$Type } from "net.minecraft.world.level.biome.Biome"
import { $BooleanSupplier$$Type } from "java.util.function.BooleanSupplier"
import { $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $IAdvancementModifier, $IAdvancementModifier$$Type } from "org.violetmoon.zeta.api.IAdvancementModifier"
import { $IZetaLoadEvent } from "org.violetmoon.zeta.event.bus.IZetaLoadEvent"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $BucketItem$$Type } from "net.minecraft.world.item.BucketItem"
import { $IAdvancementModifierDelegate } from "org.violetmoon.zeta.api.IAdvancementModifierDelegate"
import { $MobEffect$$Type } from "net.minecraft.world.effect.MobEffect"

export interface $ZGatherAdvancementModifiers extends $IZetaLoadEvent {
"createASeedyPlaceMod"(set0: $Set$$Type<$Block$$Type>): $IAdvancementModifier
"createAdventuringTimeMod"(set0: $Set$$Type<$ResourceKey$$Type<$Biome$$Type>>): $IAdvancementModifier
"createBalancedDietMod"(set0: $Set$$Type<$ItemLike$$Type>): $IAdvancementModifier
"createFishyBusinessMod"(set0: $Set$$Type<$ItemLike$$Type>): $IAdvancementModifier
"createFuriousCocktailMod"(booleanSupplier0: $BooleanSupplier$$Type, set1: $Set$$Type<$MobEffect$$Type>): $IAdvancementModifier
"createGlowAndBeholdMod"(set0: $Set$$Type<$Block$$Type>): $IAdvancementModifier
"createMonsterHunterMod"(set0: $Set$$Type<$EntityType$$Type<any>>): $IAdvancementModifier
"createTacticalFishingMod"(set0: $Set$$Type<$BucketItem$$Type>): $IAdvancementModifier
"createTwoByTwoMod"(set0: $Set$$Type<$EntityType$$Type<any>>): $IAdvancementModifier
"createWaxOnWaxOffMod"(set0: $Set$$Type<$Block$$Type>, set1: $Set$$Type<$Block$$Type>): $IAdvancementModifier
"getDelegate"(): $IAdvancementModifierDelegate
"register"(iAdvancementModifier0: $IAdvancementModifier$$Type): void
get "delegate"(): $IAdvancementModifierDelegate
}

export namespace $ZGatherAdvancementModifiers {
const probejs$$marker: never
}
export abstract class $ZGatherAdvancementModifiers$$Static implements $ZGatherAdvancementModifiers {
}
}

declare module "org.violetmoon.zeta.network.ZetaMessageSerializer$Writer" {
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Field$$Type } from "java.lang.reflect.Field"

export interface $ZetaMessageSerializer$Writer<T = any> {
"write"(friendlyByteBuf0: $FriendlyByteBuf$$Type, field1: $Field$$Type, t2: T): void
}

export namespace $ZetaMessageSerializer$Writer {
const probejs$$marker: never
}
export abstract class $ZetaMessageSerializer$Writer$$Static<T = any> implements $ZetaMessageSerializer$Writer<T> {
}
}

declare module "org.violetmoon.zeta.event.load.ZGatherAdditionalFlags" {
import { $ConfigFlagManager } from "org.violetmoon.zeta.config.ConfigFlagManager"
import { $IZetaLoadEvent } from "org.violetmoon.zeta.event.bus.IZetaLoadEvent"

export interface $ZGatherAdditionalFlags extends $IZetaLoadEvent {
"flagManager"(): $ConfigFlagManager
}

export namespace $ZGatherAdditionalFlags {
const probejs$$marker: never
}
export abstract class $ZGatherAdditionalFlags$$Static implements $ZGatherAdditionalFlags {
}
}

declare module "org.violetmoon.zeta.registry.PottedPlantRegistry" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"

export interface $PottedPlantRegistry {
"addPot"(resourceLocation0: $ResourceLocation$$Type, block1: $Block$$Type): void
}

export namespace $PottedPlantRegistry {
const probejs$$marker: never
}
export abstract class $PottedPlantRegistry$$Static implements $PottedPlantRegistry {
}
}

declare module "org.violetmoon.zeta.event.load.ZModulesReady" {
import { $IZetaLoadEvent } from "org.violetmoon.zeta.event.bus.IZetaLoadEvent"

export interface $ZModulesReady extends $IZetaLoadEvent {
}

export namespace $ZModulesReady {
const probejs$$marker: never
}
export abstract class $ZModulesReady$$Static implements $ZModulesReady {
}
}

declare module "org.violetmoon.zetaimplforge.client.event.play.ForgeZEarlyRender" {
import { $ZEarlyRender } from "org.violetmoon.zeta.client.event.play.ZEarlyRender"
import { $GuiGraphics } from "net.minecraft.client.gui.GuiGraphics"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $ForgeZEarlyRender extends $Event implements $ZEarlyRender {
constructor()

public "guiGraphics"(): $GuiGraphics
}
}

declare module "org.violetmoon.zetaimplforge.event.play.ForgeZRecipeCrawl$Visit$Custom" {
import { $ForgeZRecipeCrawl } from "org.violetmoon.zetaimplforge.event.play.ForgeZRecipeCrawl"
import { $ZRecipeCrawl$Visit$Custom, $ZRecipeCrawl$Visit$Custom$$Type } from "org.violetmoon.zeta.event.play.ZRecipeCrawl$Visit$Custom"

export class $ForgeZRecipeCrawl$Visit$Custom extends $ForgeZRecipeCrawl<$ZRecipeCrawl$Visit$Custom> {
constructor(custom0: $ZRecipeCrawl$Visit$Custom$$Type)
constructor()

}
}

declare module "org.violetmoon.zeta.registry.BrewingRegistry" {
import { $Zeta$$Type } from "org.violetmoon.zeta.Zeta"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Potion$$Type } from "net.minecraft.world.item.alchemy.Potion"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"
import { $MobEffect$$Type } from "net.minecraft.world.effect.MobEffect"

export class $BrewingRegistry {
constructor(zeta0: $Zeta$$Type)

public "addNegation"(string0: string, potion1: $Potion$$Type, potion2: $Potion$$Type, potion3: $Potion$$Type, potion4: $Potion$$Type, potion5: $Potion$$Type, potion6: $Potion$$Type): void
public "addPotionMix"(string0: string, supplier1: $Supplier$$Type<$Ingredient>, potion2: $Potion$$Type, potion3: $Potion$$Type, potion4: $Potion$$Type): void
public "addPotionMix"(string0: string, supplier1: $Supplier$$Type<$Ingredient>, mobEffect2: $MobEffect$$Type, mobEffect3: $MobEffect$$Type): void
public "addPotionMix"(string0: string, supplier1: $Supplier$$Type<$Ingredient>, mobEffect2: $MobEffect$$Type, int3: integer, int4: integer, int5: integer): void
public "addPotionMix"(string0: string, supplier1: $Supplier$$Type<$Ingredient>, mobEffect2: $MobEffect$$Type): void
public "addPotionMix"(string0: string, supplier1: $Supplier$$Type<$Ingredient>, mobEffect2: $MobEffect$$Type, mobEffect3: $MobEffect$$Type, int4: integer, int5: integer, int6: integer): void
public static "glowstone"(): $Ingredient
public "isEnabled"(potion0: $Potion$$Type): boolean
public static "redstone"(): $Ingredient
public static "spiderEye"(): $Ingredient
}
}

declare module "org.violetmoon.quark.api.event.ModuleStateChangedEvent" {
import { $QuarkModuleEvent } from "org.violetmoon.quark.api.event.QuarkModuleEvent"

export class $ModuleStateChangedEvent extends $QuarkModuleEvent {
readonly "enabled": boolean

constructor(string0: string, boolean1: boolean)
constructor()

}
}

declare module "org.violetmoon.zeta.network.IZetaMessage" {
import { $IZetaNetworkEventContext$$Type } from "org.violetmoon.zeta.network.IZetaNetworkEventContext"

export interface $IZetaMessage {
"receive"(iZetaNetworkEventContext0: $IZetaNetworkEventContext$$Type): boolean
}

export namespace $IZetaMessage {
const probejs$$marker: never
}
export abstract class $IZetaMessage$$Static implements $IZetaMessage {
}
}

declare module "org.violetmoon.zeta.util.zetalist.IZeta" {
import { $Zeta } from "org.violetmoon.zeta.Zeta"

export interface $IZeta {
"asZeta"(): $Zeta
}

export namespace $IZeta {
const probejs$$marker: never
}
export abstract class $IZeta$$Static implements $IZeta {
}
}

declare module "org.violetmoon.quark.content.client.resources.AttributeSlot" {
import { $Enum } from "java.lang.Enum"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"

export class $AttributeSlot extends $Enum<$AttributeSlot> {
static readonly "CHEST": $AttributeSlot
static readonly "FEET": $AttributeSlot
static readonly "HEAD": $AttributeSlot
static readonly "LEGS": $AttributeSlot
static readonly "MAINHAND": $AttributeSlot
static readonly "OFFHAND": $AttributeSlot
static readonly "POTION": $AttributeSlot

public static "fromCanonicalSlot"(equipmentSlot0: $EquipmentSlot$$Type): $AttributeSlot
public "getCanonicalSlot"(): $EquipmentSlot
public "getTranslationKey"(): string
public "hasCanonicalSlot"(): boolean
public static "valueOf"(string0: string): $AttributeSlot
public static "values"(): $AttributeSlot[]
get "canonicalSlot"(): $EquipmentSlot
get "translationKey"(): string
}
}

declare module "org.violetmoon.zeta.config.SectionDefinition" {
import { $SectionDefinition$Builder$$Type } from "org.violetmoon.zeta.config.SectionDefinition$Builder"
import { $Definition } from "org.violetmoon.zeta.config.Definition"
import { $Map } from "java.util.Map"
import { $Collection } from "java.util.Collection"
import { $Class$$Type } from "java.lang.Class"
import { $ValueDefinition } from "org.violetmoon.zeta.config.ValueDefinition"
import { $Iterable } from "java.lang.Iterable"

export class $SectionDefinition extends $Definition {
readonly "subsections": $Map<string, $SectionDefinition>
readonly "values": $Map<string, $ValueDefinition<any>>

constructor(builder0: $SectionDefinition$Builder$$Type)

public "finish"(): void
public "getAllChildren"(): $Iterable<$Definition>
public "getSubsections"(): $Collection<$SectionDefinition>
public "getValue"(string0: string): $ValueDefinition<any>
public "getValue"<T>(string0: string, class1: $Class$$Type<T>): $ValueDefinition<T>
public "getValueErased"<T>(string0: string, class1: $Class$$Type<any>): $ValueDefinition<T>
public "getValues"(): $Collection<$ValueDefinition<any>>
get "allChildren"(): $Iterable<$Definition>
}
}

declare module "org.violetmoon.zeta.block.IZetaBlock" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $CreativeModeTab } from "net.minecraft.world.item.CreativeModeTab"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $IZetaBlockExtensions } from "org.violetmoon.zeta.block.ext.IZetaBlockExtensions"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $SoundType } from "net.minecraft.world.level.block.SoundType"
import { $BooleanSupplier$$Type } from "java.util.function.BooleanSupplier"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $IDisableable } from "org.violetmoon.zeta.module.IDisableable"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $ZetaModule } from "org.violetmoon.zeta.module.ZetaModule"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export interface $IZetaBlock extends $IZetaBlockExtensions, $IDisableable<$IZetaBlock> {
"canStickToZeta"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
"canSustainPlantZeta"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, string4: string): boolean
"collisionExtendsVerticallyZeta"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
"doesConditionApply"(): boolean
"getBeaconColorMultiplierZeta"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): float[]
"getBlock"(): $Block
"getEnchantPowerBonusZeta"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
"getFireSpreadSpeedZeta"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
"getFlammabilityZeta"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
"getLightEmissionZeta"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
"getModule"(): $ZetaModule
"getSoundTypeZeta"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
"getToolModifiedStateZeta"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type, string2: string, boolean3: boolean): $BlockState
"isConduitFrameZeta"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): boolean
"isEnabled"(): boolean
"isFlammableZeta"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
"isLadderZeta"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
"isScaffoldingZeta"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
"isStickyBlockZeta"(blockState0: $BlockState$$Type): boolean
"makesOpenTrapdoorAboveClimbableZeta"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
"setCondition"(booleanSupplier0: $BooleanSupplier$$Type): $IZetaBlock
"setCreativeTab"(resourceKey0: $ResourceKey$$Type<$CreativeModeTab>): $Block
"setCreativeTab"(resourceKey0: $ResourceKey$$Type<$CreativeModeTab>, itemLike1: $ItemLike$$Type, boolean2: boolean): $Block
"shouldDisplayFluidOverlayZeta"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
get "block"(): $Block
get "module"(): $ZetaModule
get "enabled"(): boolean
set "condition"(value: $BooleanSupplier$$Type)
set "creativeTab"(value: $ResourceKey$$Type<$CreativeModeTab>)
}

export namespace $IZetaBlock {
function isEnabled(block0: $Block$$Type): boolean
function isEnabled(item0: $Item$$Type): boolean
}
export abstract class $IZetaBlock$$Static implements $IZetaBlock {
static "isEnabled"(block0: $Block$$Type): boolean
static "isEnabled"(item0: $Item$$Type): boolean
}
}

declare module "org.violetmoon.zeta.module.ModuleFinder" {
import { $Stream } from "java.util.stream.Stream"
import { $Supplier } from "java.util.function.Supplier"
import { $ZetaLoadModuleAnnotationData } from "org.violetmoon.zeta.module.ZetaLoadModuleAnnotationData"

export interface $ModuleFinder extends $Supplier<$Stream<$ZetaLoadModuleAnnotationData>> {
"and"(moduleFinder0: $ModuleFinder$$Type): $ModuleFinder
"get"(): $Stream<$ZetaLoadModuleAnnotationData>
}

export namespace $ModuleFinder {
const probejs$$marker: never
}
export abstract class $ModuleFinder$$Static implements $ModuleFinder {
}
}

declare module "org.violetmoon.zeta.advancement.ManualTrigger" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $SimpleCriterionTrigger } from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import { $ManualTrigger$Instance } from "org.violetmoon.zeta.advancement.ManualTrigger$Instance"

export class $ManualTrigger extends $SimpleCriterionTrigger<$ManualTrigger$Instance> {
constructor(resourceLocation0: $ResourceLocation$$Type)

public "getId"(): $ResourceLocation
public "trigger"(serverPlayer0: $ServerPlayer$$Type): void
get "id"(): $ResourceLocation
}
}

declare module "org.violetmoon.zetaimplforge.event.play.ForgeZScreenshot" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ZScreenshot } from "org.violetmoon.zeta.client.event.play.ZScreenshot"

export class $ForgeZScreenshot extends $Event implements $ZScreenshot {
constructor()

}
}

declare module "org.violetmoon.zetaimplforge.event.load.ForgeZFirstClientTick" {
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ZFirstClientTick } from "org.violetmoon.zeta.client.event.play.ZFirstClientTick"

export class $ForgeZFirstClientTick extends $Event implements $ZFirstClientTick, $IModBusEvent {
constructor()

}
}

declare module "org.violetmoon.zeta.event.bus.IZetaLoadEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IZetaLoadEvent {
}

export namespace $IZetaLoadEvent {
const probejs$$marker: never
}
export abstract class $IZetaLoadEvent$$Static implements $IZetaLoadEvent {
}
}

declare module "org.violetmoon.quark.api.event.UsageTickerEvent" {
import { $UsageTickerEvent$Pass } from "org.violetmoon.quark.api.event.UsageTickerEvent$Pass"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $UsageTickerEvent extends $Event {
readonly "currentCount": integer
readonly "currentRealStack": $ItemStack
readonly "currentStack": $ItemStack
readonly "pass": $UsageTickerEvent$Pass
readonly "player": $Player
readonly "slot": $EquipmentSlot

constructor(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type, itemStack2: $ItemStack$$Type, int3: integer, boolean4: boolean, player5: $Player$$Type)
constructor()

}
}

declare module "org.violetmoon.zeta.registry.CraftingExtensionsRegistry" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $IZetaIngredientSerializer, $IZetaIngredientSerializer$$Type } from "org.violetmoon.zeta.recipe.IZetaIngredientSerializer"
import { $IZetaConditionSerializer, $IZetaConditionSerializer$$Type } from "org.violetmoon.zeta.recipe.IZetaConditionSerializer"
import { $IZetaCondition, $IZetaCondition$$Type } from "org.violetmoon.zeta.recipe.IZetaCondition"
import { $Ingredient, $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export interface $CraftingExtensionsRegistry {
"getID"(iZetaIngredientSerializer0: $IZetaIngredientSerializer$$Type<any>): $ResourceLocation
"registerConditionSerializer"<T extends $IZetaCondition>(iZetaConditionSerializer0: $IZetaConditionSerializer$$Type<T>): $IZetaConditionSerializer<T>
"registerIngredientSerializer"<T extends $Ingredient>(resourceLocation0: $ResourceLocation$$Type, iZetaIngredientSerializer1: $IZetaIngredientSerializer$$Type<T>): $IZetaIngredientSerializer<T>
}

export namespace $CraftingExtensionsRegistry {
const probejs$$marker: never
}
export abstract class $CraftingExtensionsRegistry$$Static implements $CraftingExtensionsRegistry {
}
}

declare module "org.violetmoon.zeta.client.event.play.ZEarlyRender" {
import { $GuiGraphics } from "net.minecraft.client.gui.GuiGraphics"
import { $IZetaPlayEvent } from "org.violetmoon.zeta.event.bus.IZetaPlayEvent"

export interface $ZEarlyRender extends $IZetaPlayEvent {
"guiGraphics"(): $GuiGraphics
}

export namespace $ZEarlyRender {
const probejs$$marker: never
}
export abstract class $ZEarlyRender$$Static implements $ZEarlyRender {
}
}

declare module "org.violetmoon.zeta.config.type.EntitySpawnConfig" {
import { $IConfigType } from "org.violetmoon.zeta.config.type.IConfigType"
import { $IBiomeConfig, $IBiomeConfig$$Type } from "org.violetmoon.zeta.config.type.IBiomeConfig"
import { $ConfigFlagManager$$Type } from "org.violetmoon.zeta.config.ConfigFlagManager"
import { $ZetaModule$$Type } from "org.violetmoon.zeta.module.ZetaModule"

export class $EntitySpawnConfig implements $IConfigType {
constructor(int0: integer, int1: integer, int2: integer, iBiomeConfig3: $IBiomeConfig$$Type)

public "isEnabled"(): boolean
public "onReload"(zetaModule0: $ZetaModule$$Type, configFlagManager1: $ConfigFlagManager$$Type): void
get "biomes"(): $IBiomeConfig
set "biomes"(value: $IBiomeConfig$$Type)
get "maxGroupSize"(): integer
set "maxGroupSize"(value: integer)
get "minGroupSize"(): integer
set "minGroupSize"(value: integer)
get "spawnWeight"(): integer
set "spawnWeight"(value: integer)
get "enabled"(): boolean
}
}

declare module "org.violetmoon.zeta.recipe.IZetaCondition" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $IZetaCondition$IContext$$Type } from "org.violetmoon.zeta.recipe.IZetaCondition$IContext"

export interface $IZetaCondition {
"getID"(): $ResourceLocation
"test"(iContext0: $IZetaCondition$IContext$$Type): boolean
get "iD"(): $ResourceLocation
}

export namespace $IZetaCondition {
const probejs$$marker: never
}
export abstract class $IZetaCondition$$Static implements $IZetaCondition {
}
}

declare module "org.violetmoon.quark.api.event.SimpleHarvestEvent$ActionType" {
import { $Enum } from "java.lang.Enum"

export class $SimpleHarvestEvent$ActionType extends $Enum<$SimpleHarvestEvent$ActionType> {
static readonly "CLICK": $SimpleHarvestEvent$ActionType
static readonly "HARVEST": $SimpleHarvestEvent$ActionType
static readonly "NONE": $SimpleHarvestEvent$ActionType

public static "valueOf"(string0: string): $SimpleHarvestEvent$ActionType
public static "values"(): $SimpleHarvestEvent$ActionType[]
}
}

declare module "org.violetmoon.zeta.event.play.ZFurnaceFuelBurnTime" {
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $IZetaPlayEvent } from "org.violetmoon.zeta.event.bus.IZetaPlayEvent"

export interface $ZFurnaceFuelBurnTime extends $IZetaPlayEvent {
"getItemStack"(): $ItemStack
"setBurnTime"(int0: integer): void
get "itemStack"(): $ItemStack
set "burnTime"(value: integer)
}

export namespace $ZFurnaceFuelBurnTime {
const probejs$$marker: never
}
export abstract class $ZFurnaceFuelBurnTime$$Static implements $ZFurnaceFuelBurnTime {
}
}

declare module "org.violetmoon.zetaimplforge.event.load.ForgeZConfigChange" {
import { $ZConfigChanged } from "org.violetmoon.zeta.event.load.ZConfigChanged"
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $ForgeZConfigChange extends $Event implements $ZConfigChanged, $IModBusEvent {
constructor()

}
}

declare module "org.violetmoon.zeta.config.type.IConfigType" {
import { $ConfigFlagManager$$Type } from "org.violetmoon.zeta.config.ConfigFlagManager"
import { $ZetaModule$$Type } from "org.violetmoon.zeta.module.ZetaModule"

export interface $IConfigType {
"onReload"(zetaModule0: $ZetaModule$$Type, configFlagManager1: $ConfigFlagManager$$Type): void
}

export namespace $IConfigType {
const probejs$$marker: never
}
export abstract class $IConfigType$$Static implements $IConfigType {
}
}

declare module "org.violetmoon.zeta.recipe.IZetaConditionSerializer" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $IZetaCondition, $IZetaCondition$$Type } from "org.violetmoon.zeta.recipe.IZetaCondition"

export interface $IZetaConditionSerializer<T extends $IZetaCondition = $IZetaCondition> {
"getID"(): $ResourceLocation
"getJson"(t0: T): $JsonObject
"read"(jsonObject0: $JsonObject$$Type): T
"write"(jsonObject0: $JsonObject$$Type, t1: T): void
get "iD"(): $ResourceLocation
}

export namespace $IZetaConditionSerializer {
const probejs$$marker: never
}
export abstract class $IZetaConditionSerializer$$Static<T extends $IZetaCondition = $IZetaCondition> implements $IZetaConditionSerializer<T> {
}
}

declare module "org.violetmoon.zetaimplforge.event.play.ForgeZRecipeCrawl$Digest" {
import { $ForgeZRecipeCrawl } from "org.violetmoon.zetaimplforge.event.play.ForgeZRecipeCrawl"
import { $ZRecipeCrawl$Digest, $ZRecipeCrawl$Digest$$Type } from "org.violetmoon.zeta.event.play.ZRecipeCrawl$Digest"

export class $ForgeZRecipeCrawl$Digest extends $ForgeZRecipeCrawl<$ZRecipeCrawl$Digest> {
constructor(digest0: $ZRecipeCrawl$Digest$$Type)
constructor()

}
}

declare module "org.violetmoon.zetaimplforge.mixin.mixins.client.AccessorBlockColors" {
import { $BlockColor } from "net.minecraft.client.color.block.BlockColor"
import { $Map } from "java.util.Map"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"

export interface $AccessorBlockColors {
"zeta$getBlockColors"(): $Map<$Holder$Reference<$Block>, $BlockColor>
}

export namespace $AccessorBlockColors {
const probejs$$marker: never
}
export abstract class $AccessorBlockColors$$Static implements $AccessorBlockColors {
}
}

declare module "org.violetmoon.zeta.registry.ZetaRegistry" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Holder$Direct } from "net.minecraft.core.Holder$Direct"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Collection } from "java.util.Collection"
import { $RegistryOps$RegistryInfoLookup$$Type } from "net.minecraft.resources.RegistryOps$RegistryInfoLookup"
import { $WritableRegistry$$Type } from "net.minecraft.core.WritableRegistry"
import { $Zeta$$Type } from "org.violetmoon.zeta.Zeta"
import { $Supplier } from "java.util.function.Supplier"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Function$$Type } from "java.util.function.Function"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Registry, $Registry$$Type } from "net.minecraft.core.Registry"
import { $LateBoundHolder } from "org.violetmoon.zeta.registry.LateBoundHolder"
import { $Holder } from "net.minecraft.core.Holder"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"

export class $ZetaRegistry {
constructor(zeta0: $Zeta$$Type)

public "assignBlockColor"(string0: string, consumer1: $Consumer$$Type<$Block$$Type>): void
public "assignItemColor"(string0: string, consumer1: $Consumer$$Type<$Item$$Type>): void
public "clearDeferCache"(resourceLocation0: $ResourceLocation$$Type): void
public "getDefers"(resourceLocation0: $ResourceLocation$$Type): $Collection<$Supplier<any>>
public "getRegisteredObjects"<O>(resourceKey0: $ResourceKey$$Type<$Registry<O>>): $Collection<$Holder<O>>
public "getRegistryName"<T>(t0: T, registry1: $Registry$$Type<T>): $ResourceLocation
public "newResourceLocation"(string0: string): $ResourceLocation
public "performDynamicRegistration"<T>(registryInfoLookup0: $RegistryOps$RegistryInfoLookup$$Type, resourceKey1: $ResourceKey$$Type<$Registry<any>>, writableRegistry2: $WritableRegistry$$Type<T>): void
public "register"<T>(t0: T, resourceLocation1: $ResourceLocation$$Type, resourceKey2: $ResourceKey$$Type<$Registry<T>>): void
public "register"<T>(t0: T, string1: string, resourceKey2: $ResourceKey$$Type<$Registry<T>>): void
public "registerBlock"(block0: $Block$$Type, string1: string): void
public "registerBlock"(block0: $Block$$Type, string1: string, boolean2: boolean): void
public "registerBlock"(block0: $Block$$Type, resourceLocation1: $ResourceLocation$$Type): void
public "registerBlock"(block0: $Block$$Type, resourceLocation1: $ResourceLocation$$Type, boolean2: boolean): void
public "registerDynamic"<T>(t0: T, string1: string, resourceKey2: $ResourceKey$$Type<$Registry<T>>): $Holder$Direct<T>
/** @deprecated */
public "registerDynamic"<T>(t0: T, resourceLocation1: $ResourceLocation$$Type, resourceKey2: $ResourceKey$$Type<$Registry<T>>): $Holder$Direct<T>
/** @deprecated */
public "registerDynamic"<T>(t0: T, resourceKey1: $ResourceKey$$Type<T>, resourceKey2: $ResourceKey$$Type<$Registry<T>>): $Holder$Direct<T>
public "registerDynamicF"<T>(function0: $Function$$Type<$RegistryOps$RegistryInfoLookup$$Type, T>, resourceLocation1: $ResourceLocation$$Type, resourceKey2: $ResourceKey$$Type<$Registry<T>>): $LateBoundHolder<T>
public "registerDynamicF"<T>(function0: $Function$$Type<$RegistryOps$RegistryInfoLookup$$Type, T>, resourceKey1: $ResourceKey$$Type<T>, resourceKey2: $ResourceKey$$Type<$Registry<T>>): $LateBoundHolder<T>
public "registerDynamicF"<T>(function0: $Function$$Type<$RegistryOps$RegistryInfoLookup$$Type, T>, string1: string, resourceKey2: $ResourceKey$$Type<$Registry<T>>): $LateBoundHolder<T>
public "registerItem"(item0: $Item$$Type, resourceLocation1: $ResourceLocation$$Type): void
public "registerItem"(item0: $Item$$Type, string1: string): void
public "validateColorsProviders"(): void
}
}

declare module "org.violetmoon.zeta.network.ZetaNetworkDirection" {
import { $Enum } from "java.lang.Enum"

export class $ZetaNetworkDirection extends $Enum<$ZetaNetworkDirection> {
static readonly "LOGIN_TO_CLIENT": $ZetaNetworkDirection
static readonly "LOGIN_TO_SERVER": $ZetaNetworkDirection
static readonly "PLAY_TO_CLIENT": $ZetaNetworkDirection
static readonly "PLAY_TO_SERVER": $ZetaNetworkDirection

public "isLogin"(): boolean
public static "valueOf"(string0: string): $ZetaNetworkDirection
public static "values"(): $ZetaNetworkDirection[]
get "login"(): boolean
}
}

declare module "org.violetmoon.zeta.api.IMutableAdvancement" {
import { $Criterion, $Criterion$$Type } from "net.minecraft.advancements.Criterion"

export interface $IMutableAdvancement {
"addOrCriterion"(string0: string, criterion1: $Criterion$$Type): void
"addRequiredCriterion"(string0: string, criterion1: $Criterion$$Type): void
"getCriterion"(string0: string): $Criterion
}

export namespace $IMutableAdvancement {
const probejs$$marker: never
}
export abstract class $IMutableAdvancement$$Static implements $IMutableAdvancement {
}
}

declare module "org.violetmoon.zeta.advancement.ManualTrigger$Instance" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ContextAwarePredicate$$Type } from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import { $AbstractCriterionTriggerInstance } from "net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance"

export class $ManualTrigger$Instance extends $AbstractCriterionTriggerInstance {
constructor(resourceLocation0: $ResourceLocation$$Type, contextAwarePredicate1: $ContextAwarePredicate$$Type)

}
}

declare module "org.violetmoon.zeta.util.handler.FuelHandler" {
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ZLoadComplete$$Type } from "org.violetmoon.zeta.event.load.ZLoadComplete"
import { $Zeta$$Type } from "org.violetmoon.zeta.Zeta"
import { $ZFurnaceFuelBurnTime$$Type } from "org.violetmoon.zeta.event.play.ZFurnaceFuelBurnTime"

export class $FuelHandler {
constructor(zeta0: $Zeta$$Type)

public "addAllWoods"(zLoadComplete0: $ZLoadComplete$$Type): void
public "addFuel"(block0: $Block$$Type, int1: integer): void
public "addFuel"(item0: $Item$$Type, int1: integer): void
public "addWood"(block0: $Block$$Type): void
public "getFuel"(zFurnaceFuelBurnTime0: $ZFurnaceFuelBurnTime$$Type): void
}
}

declare module "org.violetmoon.zeta.network.ZetaHandshakeMessage" {
import { $IZetaMessage } from "org.violetmoon.zeta.network.IZetaMessage"
import { $IZetaNetworkEventContext$$Type } from "org.violetmoon.zeta.network.IZetaNetworkEventContext"
import { $IntSupplier } from "java.util.function.IntSupplier"

export class $ZetaHandshakeMessage implements $IntSupplier, $IZetaMessage {
constructor()

public "getAsInt"(): integer
public "getLoginIndex"(): integer
public "receive"(iZetaNetworkEventContext0: $IZetaNetworkEventContext$$Type): boolean
public "setLoginIndex"(int0: integer): void
get "asInt"(): integer
get "loginIndex"(): integer
set "loginIndex"(value: integer)
}
}

declare module "org.violetmoon.zeta.config.ValueDefinition" {
import { $Definition } from "org.violetmoon.zeta.config.Definition"
import { $Predicate } from "java.util.function.Predicate"
import { $Class$$Type } from "java.lang.Class"
import { $ValueDefinition$Builder$$Type } from "org.violetmoon.zeta.config.ValueDefinition$Builder"

export class $ValueDefinition<T = any> extends $Definition {
readonly "defaultValue": T
readonly "validator": $Predicate<any>

constructor(builder0: $ValueDefinition$Builder$$Type<T>)

public "downcast"<X>(class0: $Class$$Type<X>): $ValueDefinition<X>
public "isOfType"(class0: $Class$$Type<any>): boolean
public "validate"(object0: any): boolean
}
}

declare module "org.violetmoon.zeta.item.ext.IZetaItemExtensions" {
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $EnderMan$$Type } from "net.minecraft.world.entity.monster.EnderMan"
import { $IZetaItemExtensionsMixin } from "org.violetmoon.quark.mixin.mixins.IZetaItemExtensionsMixin"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Map } from "java.util.Map"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"

export interface $IZetaItemExtensions extends $IZetaItemExtensionsMixin {
"canApplyAtEnchantingTableZeta"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
"canElytraFlyZeta"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
"canEquipZeta"(itemStack0: $ItemStack$$Type, equipmentSlot1: $EquipmentSlot$$Type, entity2: $Entity$$Type): boolean
"canShearZeta"(itemStack0: $ItemStack$$Type): boolean
"damageItemZeta"<T extends $LivingEntity>(itemStack0: $ItemStack$$Type, int1: integer, t2: T, consumer3: $Consumer$$Type<T>): integer
"doesSneakBypassUseZeta"(itemStack0: $ItemStack$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
"getAllEnchantmentsZeta"(itemStack0: $ItemStack$$Type): $Map<$Enchantment, integer>
"getArmorTextureZeta"(itemStack0: $ItemStack$$Type, entity1: $Entity$$Type, equipmentSlot2: $EquipmentSlot$$Type, string3: string): string
"getBurnTimeZeta"(itemStack0: $ItemStack$$Type, recipeType1: $RecipeType$$Type<any>): integer
"getDefaultTooltipHideFlagsZeta"(itemStack0: $ItemStack$$Type): integer
"getEnchantmentLevelZeta"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): integer
"getEnchantmentValueZeta"(itemStack0: $ItemStack$$Type): integer
"getMaxDamageZeta"(itemStack0: $ItemStack$$Type): integer
"isBookEnchantableZeta"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
"isEnderMaskZeta"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, enderMan2: $EnderMan$$Type): boolean
"isRepairableZeta"(itemStack0: $ItemStack$$Type): boolean
"onEntityItemUpdateZeta"(itemStack0: $ItemStack$$Type, itemEntity1: $ItemEntity$$Type): boolean
"onItemUseFirstZeta"(itemStack0: $ItemStack$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
"shouldCauseReequipAnimationZeta"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean): boolean
}

export namespace $IZetaItemExtensions {
const probejs$$marker: never
}
export abstract class $IZetaItemExtensions$$Static implements $IZetaItemExtensions {
}
}

declare module "org.violetmoon.zeta.capability.ZetaCapability" {
import { $Record } from "java.lang.Record"

export class $ZetaCapability<T = any> extends $Record {
constructor(id: string)

public "id"(): string
}
}

declare module "org.violetmoon.zetaimplforge.client.IZetaForgeItemStuff" {
import { $BlockEntityWithoutLevelRenderer$$Type } from "net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer"
import { $HumanoidArmorModelGetter$$Type } from "org.violetmoon.zeta.client.HumanoidArmorModelGetter"

export interface $IZetaForgeItemStuff {
"zeta$setBlockEntityWithoutLevelRenderer"(blockEntityWithoutLevelRenderer0: $BlockEntityWithoutLevelRenderer$$Type): void
"zeta$setHumanoidArmorModel"(humanoidArmorModelGetter0: $HumanoidArmorModelGetter$$Type): void
}

export namespace $IZetaForgeItemStuff {
const probejs$$marker: never
}
export abstract class $IZetaForgeItemStuff$$Static implements $IZetaForgeItemStuff {
}
}

declare module "org.violetmoon.zeta.config.ValueDefinition$Builder" {
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ValueDefinition } from "org.violetmoon.zeta.config.ValueDefinition"
import { $Definition$Builder } from "org.violetmoon.zeta.config.Definition$Builder"

export class $ValueDefinition$Builder<T = any> extends $Definition$Builder<$ValueDefinition$Builder<T>, $ValueDefinition<T>> {
constructor()

public "defaultValue"(t0: T): $ValueDefinition$Builder<T>
public "validator"(predicate0: $Predicate$$Type<any>): $ValueDefinition$Builder<T>
}
}

declare module "org.violetmoon.zeta.module.ZetaModule" {
import { $List } from "java.util.List"
import { $ZGatherHints$$Type } from "org.violetmoon.zeta.event.load.ZGatherHints"
import { $ZetaCategory } from "org.violetmoon.zeta.module.ZetaCategory"
import { $Zeta, $Zeta$$Type } from "org.violetmoon.zeta.Zeta"

export class $ZetaModule {
/** @deprecated */
"category": $ZetaCategory
/** @deprecated */
"description": string
/** @deprecated */
"disabledByOverlap": boolean
/** @deprecated */
"displayName": string
/** @deprecated */
"enabledByDefault": boolean
/** @deprecated */
"ignoreAntiOverlap": boolean
/** @deprecated */
"zeta": $Zeta

constructor()

public "addAnnotationHints"(zGatherHints0: $ZGatherHints$$Type): void
public "antiOverlap"(): $List<string>
public "category"(): $ZetaCategory
public "description"(): string
public "disabledByOverlap"(): boolean
public "displayName"(): string
public "enabledByDefault"(): boolean
public "ignoreAntiOverlap"(): boolean
public "isEnabled"(): boolean
public "lowerCaseName"(): string
public "postConstruct"(): void
public "setEnabled"(zeta0: $Zeta$$Type, boolean1: boolean): void
public "setEnabledByDefault"(boolean0: boolean): void
public "setIgnoreAntiOverlap"(boolean0: boolean): void
public "zeta"(): $Zeta
/** @deprecated */
get "enabled"(): boolean
/** @deprecated */
set "enabled"(value: boolean)
/** @deprecated */
get "lowercaseName"(): string
/** @deprecated */
set "lowercaseName"(value: string)
}
}

declare module "org.violetmoon.zetaimplforge.event.load.ForgeZModulesReady" {
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ZModulesReady } from "org.violetmoon.zeta.event.load.ZModulesReady"

export class $ForgeZModulesReady extends $Event implements $ZModulesReady, $IModBusEvent {
constructor()

}
}

declare module "org.violetmoon.quark.api.event.SimpleHarvestEvent" {
import { $SimpleHarvestEvent$ActionType, $SimpleHarvestEvent$ActionType$$Type } from "org.violetmoon.quark.api.event.SimpleHarvestEvent$ActionType"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $SimpleHarvestEvent extends $Event {
readonly "blockState": $BlockState
readonly "entity": $Entity
readonly "hand": $InteractionHand
readonly "level": $Level
readonly "pos": $BlockPos

constructor(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, level2: $Level$$Type, interactionHand3: $InteractionHand$$Type, entity4: $Entity$$Type, actionType5: $SimpleHarvestEvent$ActionType$$Type)
constructor()

public "getAction"(): $SimpleHarvestEvent$ActionType
public "getTargetPos"(): $BlockPos
public "setAction"(actionType0: $SimpleHarvestEvent$ActionType$$Type): void
public "setTargetPos"(blockPos0: $BlockPos$$Type): void
get "action"(): $SimpleHarvestEvent$ActionType
get "targetPos"(): $BlockPos
set "action"(value: $SimpleHarvestEvent$ActionType$$Type)
set "targetPos"(value: $BlockPos$$Type)
}
}

declare module "org.violetmoon.zeta.event.bus.IZetaPlayEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IZetaPlayEvent {
}

export namespace $IZetaPlayEvent {
const probejs$$marker: never
}
export abstract class $IZetaPlayEvent$$Static implements $IZetaPlayEvent {
}
}

declare module "org.violetmoon.zeta.block.ext.BlockExtensionFactory" {
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $IZetaBlockExtensions } from "org.violetmoon.zeta.block.ext.IZetaBlockExtensions"

export interface $BlockExtensionFactory {
"get"(block0: $Block$$Type): $IZetaBlockExtensions
"get"(blockState0: $BlockState$$Type): $IZetaBlockExtensions
"getInternal"(block0: $Block$$Type): $IZetaBlockExtensions
}

export namespace $BlockExtensionFactory {
const DEFAULT: $BlockExtensionFactory
}
export abstract class $BlockExtensionFactory$$Static implements $BlockExtensionFactory {
static readonly "DEFAULT": $BlockExtensionFactory

}
}

declare module "org.violetmoon.zeta.advancement.AdvancementModifierRegistry" {
import { $ZAddReloadListener$$Type } from "org.violetmoon.zeta.event.load.ZAddReloadListener"
import { $IAdvancementModifier$$Type } from "org.violetmoon.zeta.api.IAdvancementModifier"
import { $ManualTrigger } from "org.violetmoon.zeta.advancement.ManualTrigger"
import { $Zeta$$Type } from "org.violetmoon.zeta.Zeta"

export class $AdvancementModifierRegistry {
constructor(zeta0: $Zeta$$Type)

public "addListeners"(zAddReloadListener0: $ZAddReloadListener$$Type): void
public "addModifier"(iAdvancementModifier0: $IAdvancementModifier$$Type): void
public "registerManualTrigger"(string0: string): $ManualTrigger
}
}

declare module "org.violetmoon.zeta.module.ZetaLoadModuleAnnotationData" {
import { $ZetaLoadModule$$Type } from "org.violetmoon.zeta.module.ZetaLoadModule"
import { $Map$$Type } from "java.util.Map"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $Record } from "java.lang.Record"

export class $ZetaLoadModuleAnnotationData extends $Record {
constructor(clazz: $Class$$Type<any>, category: string, name: string, description: string, antiOverlap: string[], enabledByDefault: boolean, clientReplacement: boolean, loadPhase: integer)

public "antiOverlap"(): string[]
public "category"(): string
public "clazz"(): $Class<any>
public "clientReplacement"(): boolean
public "description"(): string
public "enabledByDefault"(): boolean
public static "fromAnnotation"(class0: $Class$$Type<any>, zetaLoadModule1: $ZetaLoadModule$$Type): $ZetaLoadModuleAnnotationData
public static "fromForgeThing"(class0: $Class$$Type<any>, map1: $Map$$Type<string, any>): $ZetaLoadModuleAnnotationData
public "loadPhase"(): integer
public "name"(): string
}
}

declare module "org.violetmoon.zetaimplforge.event.play.ForgeZRecipeCrawl$Reset" {
import { $ForgeZRecipeCrawl } from "org.violetmoon.zetaimplforge.event.play.ForgeZRecipeCrawl"
import { $ZRecipeCrawl$Reset, $ZRecipeCrawl$Reset$$Type } from "org.violetmoon.zeta.event.play.ZRecipeCrawl$Reset"

export class $ForgeZRecipeCrawl$Reset extends $ForgeZRecipeCrawl<$ZRecipeCrawl$Reset> {
constructor(reset0: $ZRecipeCrawl$Reset$$Type)
constructor()

}
}

declare module "org.violetmoon.zeta.recipe.FlagIngredient" {
import { $JsonElement } from "com.google.gson.JsonElement"
import { $InputItem } from "dev.latvian.mods.kubejs.item.InputItem"
import { $IZetaIngredientSerializer, $IZetaIngredientSerializer$$Type } from "org.violetmoon.zeta.recipe.IZetaIngredientSerializer"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $IZetaIngredient } from "org.violetmoon.zeta.recipe.IZetaIngredient"
import { $ConfigFlagManager$$Type } from "org.violetmoon.zeta.config.ConfigFlagManager"
import { $ItemStackSet } from "dev.latvian.mods.kubejs.item.ItemStackSet"
import { $Set } from "java.util.Set"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Ingredient, $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export class $FlagIngredient extends $Ingredient implements $IZetaIngredient<$FlagIngredient> {
constructor(ingredient0: $Ingredient$$Type, string1: string, configFlagManager2: $ConfigFlagManager$$Type, iZetaIngredientSerializer3: $IZetaIngredientSerializer$$Type<$FlagIngredient$$Type>)

public "and"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $Predicate<$ItemStack>
public "and"(ingredient: $Ingredient$$Type): $Ingredient
public "asIngredient"(): $Ingredient
public "asStack"(): $InputItem
public "canBeUsedForMatching"(): boolean
public "getDisplayStacks"(): $ItemStackSet
public "getFirst"(): $ItemStack
public "getItemIds"(): $Set<string>
public "getItemTypes"(): $Set<$Item>
public "getStacks"(): $ItemStackSet
public static "isEqual"<T>(object0: any): $Predicate<T>
public "isWildcard"(): boolean
public "negate"(): $Predicate<$ItemStack>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public "or"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $Predicate<$ItemStack>
public "or"(ingredient: $Ingredient$$Type): $Ingredient
public "subtract"(subtracted: $Ingredient$$Type): $Ingredient
public "testItem"(item: $Item$$Type): boolean
public "toJson"(): $JsonElement
public "withCount"(count: integer): $InputItem
public "zetaGetSerializer"(): $IZetaIngredientSerializer<$FlagIngredient>
get "displayStacks"(): $ItemStackSet
get "first"(): $ItemStack
get "itemIds"(): $Set<string>
get "itemTypes"(): $Set<$Item>
get "stacks"(): $ItemStackSet
get "wildcard"(): boolean
}
}

declare module "org.violetmoon.zeta.util.RegistryUtil" {
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $Registry$$Type } from "net.minecraft.core.Registry"
import { $List } from "java.util.List"
import { $Collection$$Type } from "java.util.Collection"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $Zeta$$Type } from "org.violetmoon.zeta.Zeta"
import { $Function$$Type } from "java.util.function.Function"
import { $IZetaBlock$$Type } from "org.violetmoon.zeta.block.IZetaBlock"

export class $RegistryUtil {
constructor(zeta0: $Zeta$$Type)

public static "getTagValues"<T>(registryAccess0: $RegistryAccess$$Type, tagKey1: $TagKey$$Type<T>): $List<T>
public "inherit"(block0: $Block$$Type, string1: string): string
public "inherit"(block0: $Block$$Type, function1: $Function$$Type<string, string>): string
public "inheritQuark"(iZetaBlock0: $IZetaBlock$$Type, string1: string): string
public static "massRegistryGet"<T>(collection0: $Collection$$Type<string>, registry1: $Registry$$Type<T>): $List<T>
}
}

declare module "org.violetmoon.zeta.event.play.ZRecipeCrawl$Visit" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Recipe, $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $ZRecipeCrawl } from "org.violetmoon.zeta.event.play.ZRecipeCrawl"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"

export class $ZRecipeCrawl$Visit<T extends $Recipe<any> = $Recipe<any>> extends $ZRecipeCrawl {
readonly "ingredients": $NonNullList<$Ingredient>
readonly "output": $ItemStack
readonly "recipe": T
readonly "recipeID": $ResourceLocation

constructor(t0: T, registryAccess1: $RegistryAccess$$Type)

}
}

declare module "org.violetmoon.zeta.module.ZetaLoadModule" {
import { $Annotation } from "java.lang.annotation.Annotation"
import { $Class } from "java.lang.Class"

export interface $ZetaLoadModule extends $Annotation {
"annotationType"(): $Class<$Annotation>
"antiOverlap"(): string[]
"category"(): string
"clientReplacement"(): boolean
"description"(): string
"enabledByDefault"(): boolean
"equals"(object0: any): boolean
"hashCode"(): integer
"loadPhase"(): integer
"name"(): string
"toString"(): string
}

export namespace $ZetaLoadModule {
const probejs$$marker: never
}
export abstract class $ZetaLoadModule$$Static implements $ZetaLoadModule {
}
}

declare module "org.violetmoon.zetaimplforge.event.play.ForgeZRecipeCrawl$Starting" {
import { $ZRecipeCrawl$Starting, $ZRecipeCrawl$Starting$$Type } from "org.violetmoon.zeta.event.play.ZRecipeCrawl$Starting"
import { $ForgeZRecipeCrawl } from "org.violetmoon.zetaimplforge.event.play.ForgeZRecipeCrawl"

export class $ForgeZRecipeCrawl$Starting extends $ForgeZRecipeCrawl<$ZRecipeCrawl$Starting> {
constructor(starting0: $ZRecipeCrawl$Starting$$Type)
constructor()

}
}

declare module "org.violetmoon.zeta.client.event.play.ZScreenshot" {
import { $IZetaPlayEvent } from "org.violetmoon.zeta.event.bus.IZetaPlayEvent"

export interface $ZScreenshot extends $IZetaPlayEvent {
}

export namespace $ZScreenshot {
const probejs$$marker: never
}
export abstract class $ZScreenshot$$Static implements $ZScreenshot {
}
}

declare module "org.violetmoon.zeta.block.ext.IZetaBlockExtensions" {
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $SoundType } from "net.minecraft.world.level.block.SoundType"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export interface $IZetaBlockExtensions {
"canStickToZeta"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
"canSustainPlantZeta"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, string4: string): boolean
"collisionExtendsVerticallyZeta"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
"getBeaconColorMultiplierZeta"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): float[]
"getEnchantPowerBonusZeta"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
"getFireSpreadSpeedZeta"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
"getFlammabilityZeta"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
"getLightEmissionZeta"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
"getSoundTypeZeta"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
"getToolModifiedStateZeta"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type, string2: string, boolean3: boolean): $BlockState
"isConduitFrameZeta"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): boolean
"isFlammableZeta"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
"isLadderZeta"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
"isScaffoldingZeta"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
"isStickyBlockZeta"(blockState0: $BlockState$$Type): boolean
"makesOpenTrapdoorAboveClimbableZeta"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
"shouldDisplayFluidOverlayZeta"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
}

export namespace $IZetaBlockExtensions {
const DEFAULT: $IZetaBlockExtensions
}
export abstract class $IZetaBlockExtensions$$Static implements $IZetaBlockExtensions {
static readonly "DEFAULT": $IZetaBlockExtensions

}
}

declare module "org.violetmoon.zetaimplforge.event.play.ForgeZRecipeCrawl$Visit$Misc" {
import { $ForgeZRecipeCrawl } from "org.violetmoon.zetaimplforge.event.play.ForgeZRecipeCrawl"
import { $ZRecipeCrawl$Visit$Misc, $ZRecipeCrawl$Visit$Misc$$Type } from "org.violetmoon.zeta.event.play.ZRecipeCrawl$Visit$Misc"

export class $ForgeZRecipeCrawl$Visit$Misc extends $ForgeZRecipeCrawl<$ZRecipeCrawl$Visit$Misc> {
constructor(misc0: $ZRecipeCrawl$Visit$Misc$$Type)
constructor()

}
}

declare module "org.violetmoon.zeta.registry.VariantRegistry" {
import { $List } from "java.util.List"
import { $CreativeModeTab } from "net.minecraft.world.item.CreativeModeTab"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Zeta$$Type } from "org.violetmoon.zeta.Zeta"
import { $Function$$Type } from "java.util.function.Function"
import { $BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $FlowerPotBlock } from "net.minecraft.world.level.block.FlowerPotBlock"
import { $IZetaBlock, $IZetaBlock$$Type } from "org.violetmoon.zeta.block.IZetaBlock"

export class $VariantRegistry {
readonly "slabs": $List<$Block>
readonly "stairs": $List<$Block>
readonly "walls": $List<$Block>

constructor(zeta0: $Zeta$$Type)

public "addFlowerPot"(block0: $Block$$Type, string1: string, function2: $Function$$Type<$BlockBehaviour$Properties$$Type, $BlockBehaviour$Properties>): $FlowerPotBlock
public "addSlab"(iZetaBlock0: $IZetaBlock$$Type, resourceKey1: $ResourceKey$$Type<$CreativeModeTab>): $IZetaBlock
public "addSlabAndStairs"(iZetaBlock0: $IZetaBlock$$Type, resourceKey1: $ResourceKey$$Type<$CreativeModeTab>): $IZetaBlock
public "addSlabStairsWall"(iZetaBlock0: $IZetaBlock$$Type, resourceKey1: $ResourceKey$$Type<$CreativeModeTab>): $Block
public "addStairs"(iZetaBlock0: $IZetaBlock$$Type, resourceKey1: $ResourceKey$$Type<$CreativeModeTab>): $IZetaBlock
public "addWall"(iZetaBlock0: $IZetaBlock$$Type, resourceKey1: $ResourceKey$$Type<$CreativeModeTab>): $IZetaBlock
public static "realStateCopy"(iZetaBlock0: $IZetaBlock$$Type): $BlockBehaviour$Properties
}
}

declare module "org.violetmoon.zeta.recipe.IZetaIngredient" {
import { $IZetaIngredientSerializer } from "org.violetmoon.zeta.recipe.IZetaIngredientSerializer"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"

export interface $IZetaIngredient<T extends $Ingredient = $Ingredient> {
"zetaGetSerializer"(): $IZetaIngredientSerializer<T>
}

export namespace $IZetaIngredient {
const probejs$$marker: never
}
export abstract class $IZetaIngredient$$Static<T extends $Ingredient = $Ingredient> implements $IZetaIngredient<T> {
}
}

declare module "org.violetmoon.zeta.util.ZetaCommonProxy" {
import { $Zeta$$Type } from "org.violetmoon.zeta.Zeta"
import { $Runnable$$Type } from "java.lang.Runnable"

export class $ZetaCommonProxy {
constructor(zeta0: $Zeta$$Type)

public "tryToExecuteOnMainThread"(runnable0: $Runnable$$Type): void
}
}

declare module "org.violetmoon.zeta.api.IAdvancementModifier" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Set } from "java.util.Set"
import { $IMutableAdvancement$$Type } from "org.violetmoon.zeta.api.IMutableAdvancement"
import { $BooleanSupplier$$Type } from "java.util.function.BooleanSupplier"

export interface $IAdvancementModifier {
"apply"(resourceLocation0: $ResourceLocation$$Type, iMutableAdvancement1: $IMutableAdvancement$$Type): boolean
"getTargets"(): $Set<$ResourceLocation>
"isActive"(): boolean
"setCondition"(booleanSupplier0: $BooleanSupplier$$Type): $IAdvancementModifier
get "targets"(): $Set<$ResourceLocation>
get "active"(): boolean
set "condition"(value: $BooleanSupplier$$Type)
}

export namespace $IAdvancementModifier {
const probejs$$marker: never
}
export abstract class $IAdvancementModifier$$Static implements $IAdvancementModifier {
}
}

declare module "org.violetmoon.zetaimplforge.event.play.ForgeZRecipeCrawl$Visit$Shaped" {
import { $ForgeZRecipeCrawl } from "org.violetmoon.zetaimplforge.event.play.ForgeZRecipeCrawl"
import { $ZRecipeCrawl$Visit$Shaped, $ZRecipeCrawl$Visit$Shaped$$Type } from "org.violetmoon.zeta.event.play.ZRecipeCrawl$Visit$Shaped"

export class $ForgeZRecipeCrawl$Visit$Shaped extends $ForgeZRecipeCrawl<$ZRecipeCrawl$Visit$Shaped> {
constructor(shaped0: $ZRecipeCrawl$Visit$Shaped$$Type)
constructor()

}
}

declare module "org.violetmoon.zeta.event.play.ZRecipeCrawl$Visit$Shapeless" {
import { $ShapelessRecipe, $ShapelessRecipe$$Type } from "net.minecraft.world.item.crafting.ShapelessRecipe"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $ZRecipeCrawl$Visit } from "org.violetmoon.zeta.event.play.ZRecipeCrawl$Visit"

export class $ZRecipeCrawl$Visit$Shapeless extends $ZRecipeCrawl$Visit<$ShapelessRecipe> {
constructor(shapelessRecipe0: $ShapelessRecipe$$Type, registryAccess1: $RegistryAccess$$Type)

}
}

declare module "org.violetmoon.zeta.config.Definition$Builder" {
import { $List$$Type } from "java.util.List"
import { $Definition } from "org.violetmoon.zeta.config.Definition"

export class $Definition$Builder<B extends $Definition$Builder<B, T> = $Definition$Builder<B, T>, T extends $Definition = $Definition> {
constructor()

public "build"(): T
public "comment"(string0: string): B
public "comment"(list0: $List$$Type<string>): B
public "englishDisplayName"(string0: string): B
public "hint"(object0: any): B
public "lowercaseName"(string0: string): B
public "name"(string0: string): B
}
}

declare module "org.violetmoon.zeta.event.load.ZGatherHints" {
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $ConfigFlagManager$$Type } from "org.violetmoon.zeta.config.ConfigFlagManager"
import { $IZetaLoadEvent } from "org.violetmoon.zeta.event.bus.IZetaLoadEvent"
import { $RegistryAccess } from "net.minecraft.core.RegistryAccess"
import { $ZetaModule$$Type } from "org.violetmoon.zeta.module.ZetaModule"

export interface $ZGatherHints extends $IZetaLoadEvent {
"accept"(itemLike0: $ItemLike$$Type, component1: $Component$$Type): void
"gatherHintsFromModule"(zetaModule0: $ZetaModule$$Type, configFlagManager1: $ConfigFlagManager$$Type): void
"getRegistryAccess"(): $RegistryAccess
"hintItem"(itemLike0: $ItemLike$$Type, string1: string, ...object2s: any[]): void
"hintItem"(itemLike0: $ItemLike$$Type, ...object1s: any[]): void
get "registryAccess"(): $RegistryAccess
}

export namespace $ZGatherHints {
const probejs$$marker: never
}
export abstract class $ZGatherHints$$Static implements $ZGatherHints {
}
}

declare module "org.violetmoon.zetaimplforge.event.load.ForgeZGatherHints" {
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $ZGatherHints, $ZGatherHints$$Type } from "org.violetmoon.zeta.event.load.ZGatherHints"
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $ConfigFlagManager$$Type } from "org.violetmoon.zeta.config.ConfigFlagManager"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $RegistryAccess } from "net.minecraft.core.RegistryAccess"
import { $ZetaModule$$Type } from "org.violetmoon.zeta.module.ZetaModule"

export class $ForgeZGatherHints extends $Event implements $ZGatherHints, $IModBusEvent {
constructor(zGatherHints0: $ZGatherHints$$Type)
constructor()

public "accept"(itemLike0: $ItemLike$$Type, component1: $Component$$Type): void
public "gatherHintsFromModule"(zetaModule0: $ZetaModule$$Type, configFlagManager1: $ConfigFlagManager$$Type): void
public "getRegistryAccess"(): $RegistryAccess
public "hintItem"(itemLike0: $ItemLike$$Type, ...object1s: any[]): void
public "hintItem"(itemLike0: $ItemLike$$Type, string1: string, ...object2s: any[]): void
get "registryAccess"(): $RegistryAccess
}
}

declare module "org.violetmoon.quark.mixin.mixins.accessor.AccessorMerchantOffer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorMerchantOffer {
"quark$setRewardExp"(boolean0: boolean): void
}

export namespace $AccessorMerchantOffer {
const probejs$$marker: never
}
export abstract class $AccessorMerchantOffer$$Static implements $AccessorMerchantOffer {
}
}

declare module "org.violetmoon.zetaimplforge.event.load.ForgeZRegister" {
import { $ZRegister } from "org.violetmoon.zeta.event.load.ZRegister"
import { $ZetaRegistry } from "org.violetmoon.zeta.registry.ZetaRegistry"
import { $VariantRegistry } from "org.violetmoon.zeta.registry.VariantRegistry"
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $BrewingRegistry } from "org.violetmoon.zeta.registry.BrewingRegistry"
import { $RenderLayerRegistry } from "org.violetmoon.zeta.registry.RenderLayerRegistry"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $CraftingExtensionsRegistry } from "org.violetmoon.zeta.registry.CraftingExtensionsRegistry"
import { $Zeta$$Type } from "org.violetmoon.zeta.Zeta"
import { $AdvancementModifierRegistry } from "org.violetmoon.zeta.advancement.AdvancementModifierRegistry"

export class $ForgeZRegister extends $Event implements $ZRegister, $IModBusEvent {
constructor(zeta0: $Zeta$$Type)
constructor()

public "getAdvancementModifierRegistry"(): $AdvancementModifierRegistry
public "getBrewingRegistry"(): $BrewingRegistry
public "getCraftingExtensionsRegistry"(): $CraftingExtensionsRegistry
public "getRegistry"(): $ZetaRegistry
public "getRenderLayerRegistry"(): $RenderLayerRegistry
public "getVariantRegistry"(): $VariantRegistry
get "advancementModifierRegistry"(): $AdvancementModifierRegistry
get "brewingRegistry"(): $BrewingRegistry
get "craftingExtensionsRegistry"(): $CraftingExtensionsRegistry
get "registry"(): $ZetaRegistry
get "renderLayerRegistry"(): $RenderLayerRegistry
get "variantRegistry"(): $VariantRegistry
}
}

declare module "org.violetmoon.zeta.util.ZetaSide" {
import { $Enum } from "java.lang.Enum"

export class $ZetaSide extends $Enum<$ZetaSide> {
static readonly "CLIENT": $ZetaSide
static readonly "SERVER": $ZetaSide

public static "fromClient"(boolean0: boolean): $ZetaSide
public static "valueOf"(string0: string): $ZetaSide
public static "values"(): $ZetaSide[]
}
}

declare module "org.violetmoon.zeta.module.ZetaCategory" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"

export class $ZetaCategory {
readonly "icon": $Supplier<$ItemStack>
readonly "name": string
readonly "requiredMod": string

constructor(string0: string, supplier1: $Supplier$$Type<$ItemStack>, string2: string)
constructor(string0: string, item1: $Item$$Type)
constructor(string0: string, item1: $Item$$Type, string2: string)

public "getDisabledTooltip"(): $Component
public "isAddon"(): boolean
public "requiredModsLoaded"(): boolean
public static "unknownCategory"(string0: string): $ZetaCategory
get "disabledTooltip"(): $Component
get "addon"(): boolean
}
}

declare module "org.violetmoon.zeta.network.ZetaMessageSerializer" {
import { $ZetaMessageSerializer$Reader$$Type } from "org.violetmoon.zeta.network.ZetaMessageSerializer$Reader"
import { $Class$$Type } from "java.lang.Class"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ZetaMessageSerializer$Writer$$Type } from "org.violetmoon.zeta.network.ZetaMessageSerializer$Writer"

export class $ZetaMessageSerializer {
constructor()

public "instantiateAndReadObject"<T>(class0: $Class$$Type<T>, friendlyByteBuf1: $FriendlyByteBuf$$Type): T
public "mapHandlers"<T>(class0: $Class$$Type<T>, reader1: $ZetaMessageSerializer$Reader$$Type<T>, writer2: $ZetaMessageSerializer$Writer$$Type<T>): void
public "readObject"(object0: any, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public "writeObject"(object0: any, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
}
}

declare module "org.violetmoon.zeta.world.EntitySpawnHandler$TrackedSpawnConfig" {
import { $EntitySpawnConfig } from "org.violetmoon.zeta.config.type.EntitySpawnConfig"
import { $MobSpawnSettings$SpawnerData } from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $EntityType } from "net.minecraft.world.entity.EntityType"

export class $EntitySpawnHandler$TrackedSpawnConfig {
readonly "classification": $MobCategory
readonly "config": $EntitySpawnConfig
readonly "entityType": $EntityType<any>
readonly "secondary": boolean

public "getEntry"(): $MobSpawnSettings$SpawnerData
get "entry"(): $MobSpawnSettings$SpawnerData
}
}

declare module "org.violetmoon.quark.api.event.UsageTickerEvent$GetStack" {
import { $UsageTickerEvent } from "org.violetmoon.quark.api.event.UsageTickerEvent"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $UsageTickerEvent$GetStack extends $UsageTickerEvent {
constructor(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type, itemStack2: $ItemStack$$Type, int3: integer, boolean4: boolean, player5: $Player$$Type)
constructor()

public "getResultStack"(): $ItemStack
public "setResultStack"(itemStack0: $ItemStack$$Type): void
get "resultStack"(): $ItemStack
set "resultStack"(value: $ItemStack$$Type)
}
}

declare module "org.violetmoon.quark.mixin.mixins.accessor.AccessorTemptingSensor" {
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"

export interface $AccessorTemptingSensor {
"quark$getTemptations"(): $Ingredient
}

export namespace $AccessorTemptingSensor {
const probejs$$marker: never
}
export abstract class $AccessorTemptingSensor$$Static implements $AccessorTemptingSensor {
}
}

declare module "org.violetmoon.zeta.event.play.ZRecipeCrawl$Visit$Cooking" {
import { $AbstractCookingRecipe, $AbstractCookingRecipe$$Type } from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $ZRecipeCrawl$Visit } from "org.violetmoon.zeta.event.play.ZRecipeCrawl$Visit"

export class $ZRecipeCrawl$Visit$Cooking extends $ZRecipeCrawl$Visit<$AbstractCookingRecipe> {
constructor(abstractCookingRecipe0: $AbstractCookingRecipe$$Type, registryAccess1: $RegistryAccess$$Type)

}
}

declare module "org.violetmoon.quark.mixin.mixins.accessor.AccessorBlockItem" {
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockPlaceContext$$Type } from "net.minecraft.world.item.context.BlockPlaceContext"

export interface $AccessorBlockItem {
"quark$getPlacementState"(blockPlaceContext0: $BlockPlaceContext$$Type): $BlockState
}

export namespace $AccessorBlockItem {
const probejs$$marker: never
}
export abstract class $AccessorBlockItem$$Static implements $AccessorBlockItem {
}
}

declare module "org.violetmoon.zeta.mixin.mixins.AccessorPistonStructureResolver" {
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Direction } from "net.minecraft.core.Direction"
import { $Level } from "net.minecraft.world.level.Level"

export interface $AccessorPistonStructureResolver {
"zeta$extending"(): boolean
"zeta$level"(): $Level
"zeta$pistonDirection"(): $Direction
"zeta$pistonPos"(): $BlockPos
"zeta$startPos"(): $BlockPos
}

export namespace $AccessorPistonStructureResolver {
const probejs$$marker: never
}
export abstract class $AccessorPistonStructureResolver$$Static implements $AccessorPistonStructureResolver {
}
}

declare module "org.violetmoon.zeta.config.type.IBiomeConfig" {
import { $Holder$$Type } from "net.minecraft.core.Holder"
import { $Biome$$Type } from "net.minecraft.world.level.biome.Biome"

export interface $IBiomeConfig {
"canSpawn"(holder0: $Holder$$Type<$Biome$$Type>): boolean
}

export namespace $IBiomeConfig {
const probejs$$marker: never
}
export abstract class $IBiomeConfig$$Static implements $IBiomeConfig {
}
}

declare module "org.violetmoon.zeta.event.load.ZLoadComplete" {
import { $IZetaLoadEvent } from "org.violetmoon.zeta.event.bus.IZetaLoadEvent"
import { $Runnable$$Type } from "java.lang.Runnable"

export interface $ZLoadComplete extends $IZetaLoadEvent {
"enqueueWork"(runnable0: $Runnable$$Type): void
}

export namespace $ZLoadComplete {
const probejs$$marker: never
}
export abstract class $ZLoadComplete$$Static implements $ZLoadComplete {
}
}

declare module "org.violetmoon.zeta.config.ConfigManager" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $IZetaConfigInternals$$Type } from "org.violetmoon.zeta.config.IZetaConfigInternals"
import { $SectionDefinition } from "org.violetmoon.zeta.config.SectionDefinition"
import { $ZetaCategory$$Type } from "org.violetmoon.zeta.module.ZetaCategory"
import { $ConfigFlagManager } from "org.violetmoon.zeta.config.ConfigFlagManager"
import { $ValueDefinition } from "org.violetmoon.zeta.config.ValueDefinition"
import { $Zeta$$Type } from "org.violetmoon.zeta.Zeta"
import { $ZetaModule$$Type } from "org.violetmoon.zeta.module.ZetaModule"

export class $ConfigManager {
constructor(zeta0: $Zeta$$Type, object1: any)

public "addOnReloadListener"(string0: string, consumer1: $Consumer$$Type<$IZetaConfigInternals$$Type>): void
public "getCategoryEnabledOption"(zetaCategory0: $ZetaCategory$$Type): $ValueDefinition<boolean>
public "getCategorySection"(zetaCategory0: $ZetaCategory$$Type): $SectionDefinition
public "getConfigFlagManager"(): $ConfigFlagManager
public "getGeneralSection"(): $SectionDefinition
public "getModuleEnabledOption"(zetaModule0: $ZetaModule$$Type): $ValueDefinition<boolean>
public "getRootConfig"(): $SectionDefinition
public "isCategoryEnabled"(zetaCategory0: $ZetaCategory$$Type): boolean
public "onReload"(): void
get "configFlagManager"(): $ConfigFlagManager
get "generalSection"(): $SectionDefinition
get "rootConfig"(): $SectionDefinition
}
}

declare module "org.violetmoon.zeta.event.play.ZRecipeCrawl$Visit$Misc" {
import { $Recipe, $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $ZRecipeCrawl$Visit } from "org.violetmoon.zeta.event.play.ZRecipeCrawl$Visit"

export class $ZRecipeCrawl$Visit$Misc extends $ZRecipeCrawl$Visit<$Recipe<any>> {
constructor(recipe0: $Recipe$$Type<any>, registryAccess1: $RegistryAccess$$Type)

}
}

declare module "org.violetmoon.zeta.network.IZetaNetworkEventContext" {
import { $ServerPlayer } from "net.minecraft.server.level.ServerPlayer"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ZetaHandshakeMessage$$Type } from "org.violetmoon.zeta.network.ZetaHandshakeMessage"
import { $Runnable$$Type } from "java.lang.Runnable"

export interface $IZetaNetworkEventContext {
"enqueueWork"(runnable0: $Runnable$$Type): $CompletableFuture<void>
"getSender"(): $ServerPlayer
"reply"(zetaHandshakeMessage0: $ZetaHandshakeMessage$$Type): void
get "sender"(): $ServerPlayer
}

export namespace $IZetaNetworkEventContext {
const probejs$$marker: never
}
export abstract class $IZetaNetworkEventContext$$Static implements $IZetaNetworkEventContext {
}
}

declare module "org.violetmoon.quark.api.event.GatherToolClassesEvent" {
import { $Set, $Set$$Type } from "java.util.Set"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $GatherToolClassesEvent extends $Event {
readonly "classes": $Set<string>
readonly "stack": $ItemStack

constructor(itemStack0: $ItemStack$$Type, set1: $Set$$Type<string>)
constructor()

}
}

declare module "org.violetmoon.zeta.config.Definition" {
import { $List, $List$$Type } from "java.util.List"
import { $SectionDefinition, $SectionDefinition$$Type } from "org.violetmoon.zeta.config.SectionDefinition"
import { $Definition$Builder$$Type } from "org.violetmoon.zeta.config.Definition$Builder"
import { $Function$$Type } from "java.util.function.Function"

export class $Definition {
readonly "comment": $List<string>
readonly "englishDisplayName": string
readonly "hint": any
readonly "lowercaseName": string
readonly "name": string

constructor(builder0: $Definition$Builder$$Type<any, $Definition$$Type>)

public "commentToArray"(): string[]
public "commentToString"(): string
public "getTranslatedComment"(function0: $Function$$Type<string, string>): $List<string>
public "getTranslatedDisplayName"(function0: $Function$$Type<string, string>): string
public "setParent"(sectionDefinition0: $SectionDefinition$$Type): void
get "parent"(): $SectionDefinition
set "parent"(value: $SectionDefinition$$Type)
get "path"(): $List<string>
set "path"(value: $List$$Type<string>)
}
}

declare module "org.violetmoon.quark.mixin.mixins.IForgeItemMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IForgeItemMixin {
}

export namespace $IForgeItemMixin {
const probejs$$marker: never
}
export abstract class $IForgeItemMixin$$Static implements $IForgeItemMixin {
}
}

declare module "org.violetmoon.zeta.event.load.ZRegister" {
import { $ZetaRegistry } from "org.violetmoon.zeta.registry.ZetaRegistry"
import { $VariantRegistry } from "org.violetmoon.zeta.registry.VariantRegistry"
import { $BrewingRegistry } from "org.violetmoon.zeta.registry.BrewingRegistry"
import { $RenderLayerRegistry } from "org.violetmoon.zeta.registry.RenderLayerRegistry"
import { $IZetaLoadEvent } from "org.violetmoon.zeta.event.bus.IZetaLoadEvent"
import { $CraftingExtensionsRegistry } from "org.violetmoon.zeta.registry.CraftingExtensionsRegistry"
import { $AdvancementModifierRegistry } from "org.violetmoon.zeta.advancement.AdvancementModifierRegistry"

export interface $ZRegister extends $IZetaLoadEvent {
"getAdvancementModifierRegistry"(): $AdvancementModifierRegistry
"getBrewingRegistry"(): $BrewingRegistry
"getCraftingExtensionsRegistry"(): $CraftingExtensionsRegistry
"getRegistry"(): $ZetaRegistry
"getRenderLayerRegistry"(): $RenderLayerRegistry
"getVariantRegistry"(): $VariantRegistry
get "advancementModifierRegistry"(): $AdvancementModifierRegistry
get "brewingRegistry"(): $BrewingRegistry
get "craftingExtensionsRegistry"(): $CraftingExtensionsRegistry
get "registry"(): $ZetaRegistry
get "renderLayerRegistry"(): $RenderLayerRegistry
get "variantRegistry"(): $VariantRegistry
}

export namespace $ZRegister {
const probejs$$marker: never
}
export abstract class $ZRegister$$Static implements $ZRegister {
}
}

declare module "org.violetmoon.zetaimplforge.event.load.ForgeZGatherAdditionalFlags" {
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $ZGatherAdditionalFlags, $ZGatherAdditionalFlags$$Type } from "org.violetmoon.zeta.event.load.ZGatherAdditionalFlags"
import { $ConfigFlagManager } from "org.violetmoon.zeta.config.ConfigFlagManager"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $ForgeZGatherAdditionalFlags extends $Event implements $ZGatherAdditionalFlags, $IModBusEvent {
constructor()
constructor(zGatherAdditionalFlags0: $ZGatherAdditionalFlags$$Type)

public "flagManager"(): $ConfigFlagManager
}
}

declare module "org.violetmoon.zetaimplforge.event.play.ForgeZRecipeCrawl$Visit" {
import { $ForgeZRecipeCrawl } from "org.violetmoon.zetaimplforge.event.play.ForgeZRecipeCrawl"
import { $Recipe } from "net.minecraft.world.item.crafting.Recipe"
import { $ZRecipeCrawl$Visit, $ZRecipeCrawl$Visit$$Type } from "org.violetmoon.zeta.event.play.ZRecipeCrawl$Visit"

export class $ForgeZRecipeCrawl$Visit<T extends $Recipe<any> = $Recipe<any>> extends $ForgeZRecipeCrawl<$ZRecipeCrawl$Visit<T>> {
constructor(visit0: $ZRecipeCrawl$Visit$$Type<T>)
constructor()

}
}

declare module "org.violetmoon.quark.mixin.mixins.client.accessor.AccessorMultiPlayerGameMode" {
import { $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $LocalPlayer$$Type } from "net.minecraft.client.player.LocalPlayer"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"

export interface $AccessorMultiPlayerGameMode {
"quark$performUseItemOn"(localPlayer0: $LocalPlayer$$Type, interactionHand1: $InteractionHand$$Type, blockHitResult2: $BlockHitResult$$Type): $InteractionResult
}

export namespace $AccessorMultiPlayerGameMode {
const probejs$$marker: never
}
export abstract class $AccessorMultiPlayerGameMode$$Static implements $AccessorMultiPlayerGameMode {
}
}

declare module "org.violetmoon.quark.content.client.hax.PseudoAccessorItemStack" {
import { $List$$Type } from "java.util.List"
import { $AttributeSlot } from "org.violetmoon.quark.content.client.resources.AttributeSlot"
import { $AttributeModifier, $AttributeModifier$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $Map } from "java.util.Map"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $Pair$$Type } from "com.mojang.datafixers.util.Pair"
import { $Attribute, $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"

export interface $PseudoAccessorItemStack {
"quark$capturePotionAttributes"(list0: $List$$Type<$Pair$$Type<$Attribute$$Type, $AttributeModifier$$Type>>): void
"quark$getCapturedAttributes"(): $Map<$AttributeSlot, $Multimap<$Attribute, $AttributeModifier>>
}

export namespace $PseudoAccessorItemStack {
const probejs$$marker: never
}
export abstract class $PseudoAccessorItemStack$$Static implements $PseudoAccessorItemStack {
}
}

declare module "org.violetmoon.zeta.config.IZetaConfigInternals" {
import { $ValueDefinition$$Type } from "org.violetmoon.zeta.config.ValueDefinition"

export interface $IZetaConfigInternals {
"flush"(): void
"get"<T>(valueDefinition0: $ValueDefinition$$Type<T>): T
"set"<T>(valueDefinition0: $ValueDefinition$$Type<T>, t1: T): void
}

export namespace $IZetaConfigInternals {
const probejs$$marker: never
}
export abstract class $IZetaConfigInternals$$Static implements $IZetaConfigInternals {
}
}

declare module "org.violetmoon.zeta.event.load.ZRegister$Post" {
import { $IZetaLoadEvent } from "org.violetmoon.zeta.event.bus.IZetaLoadEvent"

export interface $ZRegister$Post extends $IZetaLoadEvent {
}

export namespace $ZRegister$Post {
const probejs$$marker: never
}
export abstract class $ZRegister$Post$$Static implements $ZRegister$Post {
}
}

declare module "org.violetmoon.zeta.event.play.ZRecipeCrawl$Reset" {
import { $ZRecipeCrawl } from "org.violetmoon.zeta.event.play.ZRecipeCrawl"

export class $ZRecipeCrawl$Reset extends $ZRecipeCrawl {
constructor()

}
}

declare module "org.violetmoon.quark.mixin.mixins.accessor.AccessorAbstractChestedHorse" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorAbstractChestedHorse {
"quark$playChestEquipsSound"(): void
}

export namespace $AccessorAbstractChestedHorse {
const probejs$$marker: never
}
export abstract class $AccessorAbstractChestedHorse$$Static implements $AccessorAbstractChestedHorse {
}
}

declare module "org.violetmoon.zetaimplforge.mixin.mixins.client.AccessorItemColors" {
import { $Map } from "java.util.Map"
import { $Item } from "net.minecraft.world.item.Item"
import { $ItemColor } from "net.minecraft.client.color.item.ItemColor"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"

export interface $AccessorItemColors {
"zeta$getItemColors"(): $Map<$Holder$Reference<$Item>, $ItemColor>
}

export namespace $AccessorItemColors {
const probejs$$marker: never
}
export abstract class $AccessorItemColors$$Static implements $AccessorItemColors {
}
}

declare module "org.violetmoon.zetaimplforge.event.play.loading.ForgeZGatherAdditionalFlags" {
import { $ConfigFlagManager } from "org.violetmoon.zeta.config.ConfigFlagManager"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ZGatherAdditionalFlags, $ZGatherAdditionalFlags$$Type } from "org.violetmoon.zeta.event.play.loading.ZGatherAdditionalFlags"

/** @deprecated */
export class $ForgeZGatherAdditionalFlags extends $Event implements $ZGatherAdditionalFlags {
constructor()
constructor(zGatherAdditionalFlags0: $ZGatherAdditionalFlags$$Type)

public "flagManager"(): $ConfigFlagManager
}
}

declare module "org.violetmoon.zeta.capability.ZetaCapabilityManager" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ZetaCapability$$Type } from "org.violetmoon.zeta.capability.ZetaCapability"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $ZetaCapabilityManager {
"attachCapability"<T>(object0: any, resourceLocation1: $ResourceLocation$$Type, zetaCapability2: $ZetaCapability$$Type<T>, t3: T): void
"getCapability"<T>(zetaCapability0: $ZetaCapability$$Type<T>, level1: $Level$$Type): T
"getCapability"<T>(zetaCapability0: $ZetaCapability$$Type<T>, blockEntity1: $BlockEntity$$Type): T
"getCapability"<T>(zetaCapability0: $ZetaCapability$$Type<T>, itemStack1: $ItemStack$$Type): T
"hasCapability"<T>(zetaCapability0: $ZetaCapability$$Type<T>, level1: $Level$$Type): boolean
"hasCapability"<T>(zetaCapability0: $ZetaCapability$$Type<T>, itemStack1: $ItemStack$$Type): boolean
"hasCapability"<T>(zetaCapability0: $ZetaCapability$$Type<T>, blockEntity1: $BlockEntity$$Type): boolean
"register"(zetaCapability0: $ZetaCapability$$Type<any>, object1: any): $ZetaCapabilityManager
}

export namespace $ZetaCapabilityManager {
const probejs$$marker: never
}
export abstract class $ZetaCapabilityManager$$Static implements $ZetaCapabilityManager {
}
}

declare module "org.violetmoon.quark.mixin.mixins.IZetaItemExtensionsMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IZetaItemExtensionsMixin {
}

export namespace $IZetaItemExtensionsMixin {
const probejs$$marker: never
}
export abstract class $IZetaItemExtensionsMixin$$Static implements $IZetaItemExtensionsMixin {
}
}

declare module "org.violetmoon.quark.api.event.UsageTickerEvent$GetCount" {
import { $UsageTickerEvent } from "org.violetmoon.quark.api.event.UsageTickerEvent"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $UsageTickerEvent$GetCount extends $UsageTickerEvent {
constructor(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type, itemStack2: $ItemStack$$Type, int3: integer, boolean4: boolean, player5: $Player$$Type)
constructor()

public "getResultCount"(): integer
public "setResultCount"(int0: integer): void
get "resultCount"(): integer
set "resultCount"(value: integer)
}
}

declare module "org.violetmoon.zeta.module.IDisableable" {
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ZetaModule } from "org.violetmoon.zeta.module.ZetaModule"
import { $BooleanSupplier$$Type } from "java.util.function.BooleanSupplier"

export interface $IDisableable<SELF = any> {
"doesConditionApply"(): boolean
"getModule"(): $ZetaModule
"isEnabled"(): boolean
"setCondition"(booleanSupplier0: $BooleanSupplier$$Type): SELF
get "module"(): $ZetaModule
get "enabled"(): boolean
set "condition"(value: $BooleanSupplier$$Type)
}

export namespace $IDisableable {
function isEnabled(block0: $Block$$Type): boolean
function isEnabled(item0: $Item$$Type): boolean
}
export abstract class $IDisableable$$Static<SELF = any> implements $IDisableable<SELF> {
static "isEnabled"(block0: $Block$$Type): boolean
static "isEnabled"(item0: $Item$$Type): boolean
}
}

declare module "org.violetmoon.zeta.Zeta" {
import { $DyeablesRegistry } from "org.violetmoon.zeta.registry.DyeablesRegistry"
import { $SectionDefinition$$Type } from "org.violetmoon.zeta.config.SectionDefinition"
import { $VariantRegistry } from "org.violetmoon.zeta.registry.VariantRegistry"
import { $BrewingRegistry } from "org.violetmoon.zeta.registry.BrewingRegistry"
import { $ZetaCapabilityManager } from "org.violetmoon.zeta.capability.ZetaCapabilityManager"
import { $RegistryUtil } from "org.violetmoon.zeta.util.RegistryUtil"
import { $ItemExtensionFactory } from "org.violetmoon.zeta.item.ext.ItemExtensionFactory"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $ZetaSide, $ZetaSide$$Type } from "org.violetmoon.zeta.util.ZetaSide"
import { $IZetaConfigInternals, $IZetaConfigInternals$$Type } from "org.violetmoon.zeta.config.IZetaConfigInternals"
import { $ZetaCommonProxy } from "org.violetmoon.zeta.util.ZetaCommonProxy"
import { $ConfigManager, $ConfigManager$$Type } from "org.violetmoon.zeta.config.ConfigManager"
import { $ZetaCategory$$Type } from "org.violetmoon.zeta.module.ZetaCategory"
import { $ZetaEventBus } from "org.violetmoon.zeta.event.bus.ZetaEventBus"
import { $ZetaNetworkHandler, $ZetaNetworkHandler$$Type } from "org.violetmoon.zeta.network.ZetaNetworkHandler"
import { $CraftingExtensionsRegistry } from "org.violetmoon.zeta.registry.CraftingExtensionsRegistry"
import { $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $BlockExtensionFactory } from "org.violetmoon.zeta.block.ext.BlockExtensionFactory"
import { $IZeta } from "org.violetmoon.zeta.util.zetalist.IZeta"
import { $NameChanger } from "org.violetmoon.zeta.util.NameChanger"
import { $ModuleFinder$$Type } from "org.violetmoon.zeta.module.ModuleFinder"
import { $AdvancementModifierRegistry } from "org.violetmoon.zeta.advancement.AdvancementModifierRegistry"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $Logger, $Logger$$Type } from "org.apache.logging.log4j.Logger"
import { $FuelHandler } from "org.violetmoon.zeta.util.handler.FuelHandler"
import { $RaytracingUtil } from "org.violetmoon.zeta.util.RaytracingUtil"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ZetaRegistry } from "org.violetmoon.zeta.registry.ZetaRegistry"
import { $IZetaLoadEvent } from "org.violetmoon.zeta.event.bus.IZetaLoadEvent"
import { $PottedPlantRegistry } from "org.violetmoon.zeta.registry.PottedPlantRegistry"
import { $RenderLayerRegistry } from "org.violetmoon.zeta.registry.RenderLayerRegistry"
import { $ZetaModuleManager } from "org.violetmoon.zeta.module.ZetaModuleManager"
import { $IZetaPlayEvent } from "org.violetmoon.zeta.event.bus.IZetaPlayEvent"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $EntitySpawnHandler, $EntitySpawnHandler$$Type } from "org.violetmoon.zeta.world.EntitySpawnHandler"

export class $Zeta implements $IZeta {
readonly "advancementModifierRegistry": $AdvancementModifierRegistry
readonly "blockExtensions": $BlockExtensionFactory
readonly "brewingRegistry": $BrewingRegistry
readonly "capabilityManager": $ZetaCapabilityManager
readonly "craftingExtensions": $CraftingExtensionsRegistry
readonly "dyeables": $DyeablesRegistry
readonly "fuel": $FuelHandler
readonly "isProduction": boolean
readonly "itemExtensions": $ItemExtensionFactory
readonly "loadBus": $ZetaEventBus<$IZetaLoadEvent>
readonly "log": $Logger
readonly "modid": string
readonly "modules": $ZetaModuleManager
readonly "nameChanger": $NameChanger
readonly "playBus": $ZetaEventBus<$IZetaPlayEvent>
readonly "pottedPlantRegistry": $PottedPlantRegistry
readonly "proxy": $ZetaCommonProxy
readonly "raytracingUtil": $RaytracingUtil
/** @deprecated */
readonly "registry": $ZetaRegistry
readonly "registryUtil": $RegistryUtil
readonly "renderLayerRegistry": $RenderLayerRegistry
readonly "side": $ZetaSide
readonly "variantRegistry": $VariantRegistry

constructor(string0: string, logger1: $Logger$$Type, zetaSide2: $ZetaSide$$Type, boolean3: boolean)

public "asZeta"(): $Zeta
public "createAdvancementModifierRegistry"(): $AdvancementModifierRegistry
public "createBlockExtensionFactory"(): $BlockExtensionFactory
public "createBrewingRegistry"(): $BrewingRegistry
public "createCapabilityManager"(): $ZetaCapabilityManager
public "createCraftingExtensionsRegistry"(): $CraftingExtensionsRegistry
public "createDyeablesRegistry"(): $DyeablesRegistry
public "createEntitySpawnHandler"(): $EntitySpawnHandler
public "createFuelHandler"(): $FuelHandler
public "createItemExtensionFactory"(): $ItemExtensionFactory
public "createModuleManager"(): $ZetaModuleManager
public "createNameChanger"(): $NameChanger
public "createNetworkHandler"(int0: integer): $ZetaNetworkHandler
public "createPottedPlantRegistry"(): $PottedPlantRegistry
public "createProxy"(zetaSide0: $ZetaSide$$Type): $ZetaCommonProxy
public "createRaytracingUtil"(): $RaytracingUtil
public "createRegistry"(): $ZetaRegistry
public "createRenderLayerRegistry"(): $RenderLayerRegistry
public "fireRightClickBlock"(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, blockPos2: $BlockPos$$Type, blockHitResult3: $BlockHitResult$$Type): boolean
public "getModDisplayName"(string0: string): string
public "isModLoaded"(string0: string): boolean
public "loadModules"(iterable0: $Iterable$$Type<$ZetaCategory$$Type>, moduleFinder1: $ModuleFinder$$Type, object2: any): void
public "makeConfigInternals"(sectionDefinition0: $SectionDefinition$$Type): $IZetaConfigInternals
public "modIntegration"<T>(string0: string, supplier1: $Supplier$$Type<$Supplier<T>>, supplier2: $Supplier$$Type<$Supplier<T>>): T
public "start"(): void
get "configInternals"(): $IZetaConfigInternals
set "configInternals"(value: $IZetaConfigInternals$$Type)
get "configManager"(): $ConfigManager
set "configManager"(value: $ConfigManager$$Type)
get "entitySpawn"(): $EntitySpawnHandler
set "entitySpawn"(value: $EntitySpawnHandler$$Type)
get "network"(): $ZetaNetworkHandler
set "network"(value: $ZetaNetworkHandler$$Type)
}
}

