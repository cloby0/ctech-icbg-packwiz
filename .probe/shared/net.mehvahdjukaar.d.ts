declare module "net.mehvahdjukaar.supplementaries.common.entities.IFluteParrot" {
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $IFluteParrot {
"supplementaries$setPartyByFlute"(player0: $Player$$Type): void
}

export namespace $IFluteParrot {
const probejs$$marker: never
}
export abstract class $IFluteParrot$$Static implements $IFluteParrot {
}
}

declare module "net.mehvahdjukaar.moonlight.core.mixins.accessor.DispenserBlockAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DispenserBlockAccessor {
}

export namespace $DispenserBlockAccessor {
const probejs$$marker: never
}
export abstract class $DispenserBlockAccessor$$Static implements $DispenserBlockAccessor {
}
}

declare module "net.mehvahdjukaar.supplementaries.mixins.forge.MobBucketItemAccessor" {
import { $EntityType } from "net.minecraft.world.entity.EntityType"

export interface $MobBucketItemAccessor {
"invokeGetFishType"(): $EntityType<any>
}

export namespace $MobBucketItemAccessor {
const probejs$$marker: never
}
export abstract class $MobBucketItemAccessor$$Static implements $MobBucketItemAccessor {
}
}

declare module "net.mehvahdjukaar.moonlight.api.map.type.MapDecorationType" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Structure } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $HolderSet } from "net.minecraft.core.HolderSet"
import { $Optional } from "java.util.Optional"
import { $CustomMapDecoration } from "net.mehvahdjukaar.moonlight.api.map.CustomMapDecoration"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $MapBlockMarker } from "net.mehvahdjukaar.moonlight.api.map.markers.MapBlockMarker"

export interface $MapDecorationType<D extends $CustomMapDecoration = $CustomMapDecoration, M extends $MapBlockMarker<D> = $MapBlockMarker<D>> {
"createEmptyMarker"(): M
"getAssociatedStructure"(): $Optional<$HolderSet<$Structure>>
"getCustomFactoryID"(): $ResourceLocation
"getDefaultMapColor"(): integer
"getWorldMarkerFromWorld"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): M
"isFromWorld"(): boolean
"loadDecorationFromBuffer"(friendlyByteBuf0: $FriendlyByteBuf$$Type): D
"loadMarkerFromNBT"(compoundTag0: $CompoundTag$$Type): M
get "associatedStructure"(): $Optional<$HolderSet<$Structure>>
get "customFactoryID"(): $ResourceLocation
get "defaultMapColor"(): integer
get "fromWorld"(): boolean
}

export namespace $MapDecorationType {
const probejs$$marker: never
}
export abstract class $MapDecorationType$$Static<D extends $CustomMapDecoration = $CustomMapDecoration, M extends $MapBlockMarker<D> = $MapBlockMarker<D>> implements $MapDecorationType<D, M> {
}
}

declare module "net.mehvahdjukaar.supplementaries.common.utils.IQuiverPlayer" {
import { $SlotReference, $SlotReference$$Type } from "net.mehvahdjukaar.supplementaries.common.utils.SlotReference"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $IQuiverEntity } from "net.mehvahdjukaar.supplementaries.api.IQuiverEntity"

export interface $IQuiverPlayer extends $IQuiverEntity {
"supplementaries$getQuiver"(): $ItemStack
"supplementaries$getQuiverSlot"(): $SlotReference
"supplementaries$hasQuiver"(): boolean
"supplementaries$setQuiver"(itemStack0: $ItemStack$$Type): void
"supplementaries$setQuiverSlot"(slotReference0: $SlotReference$$Type): void
}

export namespace $IQuiverPlayer {
const probejs$$marker: never
}
export abstract class $IQuiverPlayer$$Static implements $IQuiverPlayer {
}
}

declare module "net.mehvahdjukaar.moonlight.core.misc.IExtendedPistonTile" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $IExtendedPistonTile {
"tickMovedBlock"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
}

export namespace $IExtendedPistonTile {
const probejs$$marker: never
}
export abstract class $IExtendedPistonTile$$Static implements $IExtendedPistonTile {
}
}

declare module "net.mehvahdjukaar.moonlight.api.events.IVillagerBrainEvent" {
import { $SensorType$$Type } from "net.minecraft.world.entity.ai.sensing.SensorType"
import { $Behavior, $Behavior$$Type } from "net.minecraft.world.entity.ai.behavior.Behavior"
import { $MemoryModuleType } from "net.minecraft.world.entity.ai.memory.MemoryModuleType"
import { $ExpirableValue } from "net.minecraft.world.entity.ai.memory.ExpirableValue"
import { $Sensor$$Type } from "net.minecraft.world.entity.ai.sensing.Sensor"
import { $Pair, $Pair$$Type } from "com.mojang.datafixers.util.Pair"
import { $BehaviorControl$$Type } from "net.minecraft.world.entity.ai.behavior.BehaviorControl"
import { $Activity$$Type } from "net.minecraft.world.entity.schedule.Activity"
import { $Villager, $Villager$$Type } from "net.minecraft.world.entity.npc.Villager"
import { $ImmutableList$$Type } from "com.google.common.collect.ImmutableList"
import { $SimpleEvent } from "net.mehvahdjukaar.moonlight.api.events.SimpleEvent"
import { $VillagerBrainEventInternal } from "net.mehvahdjukaar.moonlight.core.misc.VillagerBrainEventInternal"
import { $Map } from "java.util.Map"
import { $Optional } from "java.util.Optional"

export interface $IVillagerBrainEvent extends $SimpleEvent {
"addOrReplaceActivity"(activity0: $Activity$$Type, immutableList1: $ImmutableList$$Type<$Pair$$Type<integer, $BehaviorControl$$Type<$Villager$$Type>>>): void
"addSensor"(sensorType0: $SensorType$$Type<$Sensor$$Type<$Villager$$Type>>): void
"addTaskToActivity"<P extends $Pair<integer, $Behavior<$Villager>>>(activity0: $Activity$$Type, p1: P): boolean
"getInternal"(): $VillagerBrainEventInternal
"getMemories"(): $Map<$MemoryModuleType<any>, $Optional<$ExpirableValue<any>>>
"getVillager"(): $Villager
"scheduleActivity"(activity0: $Activity$$Type, int1: integer, int2: integer): void
get "internal"(): $VillagerBrainEventInternal
get "memories"(): $Map<$MemoryModuleType<any>, $Optional<$ExpirableValue<any>>>
get "villager"(): $Villager
}

export namespace $IVillagerBrainEvent {
const probejs$$marker: never
}
export abstract class $IVillagerBrainEvent$$Static implements $IVillagerBrainEvent {
}
}

declare module "net.mehvahdjukaar.moonlight.api.misc.CodecMapRegistry" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Either } from "com.mojang.datafixers.util.Either"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $SimpleMapCodec } from "com.mojang.serialization.codecs.SimpleMapCodec"
import { $Encoder, $Encoder$$Type } from "com.mojang.serialization.Encoder"
import { $DynamicOps$$Type } from "com.mojang.serialization.DynamicOps"
import { $MapEncoder, $MapEncoder$$Type } from "com.mojang.serialization.MapEncoder"
import { $DataResult } from "com.mojang.serialization.DataResult"
import { $UnboundedMapCodec } from "com.mojang.serialization.codecs.UnboundedMapCodec"
import { $MapRegistry } from "net.mehvahdjukaar.moonlight.api.misc.MapRegistry"
import { $Decoder$Terminal, $Decoder$Terminal$$Type } from "com.mojang.serialization.Decoder$Terminal"
import { $Dynamic$$Type } from "com.mojang.serialization.Dynamic"
import { $Decoder$Boxed, $Decoder$Boxed$$Type } from "com.mojang.serialization.Decoder$Boxed"
import { $MapCodec, $MapCodec$$Type } from "com.mojang.serialization.MapCodec"
import { $Codec$ResultFunction$$Type } from "com.mojang.serialization.Codec$ResultFunction"
import { $Lifecycle$$Type } from "com.mojang.serialization.Lifecycle"
import { $Decoder, $Decoder$$Type } from "com.mojang.serialization.Decoder"
import { $MapDecoder$$Type } from "com.mojang.serialization.MapDecoder"
import { $Pair } from "com.mojang.datafixers.util.Pair"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"
import { $Decoder$Simple, $Decoder$Simple$$Type } from "com.mojang.serialization.Decoder$Simple"
import { $Optional } from "java.util.Optional"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Keyable$$Type } from "com.mojang.serialization.Keyable"
import { $Spliterator } from "java.util.Spliterator"

export class $CodecMapRegistry<T = any> extends $MapRegistry<$Codec<T>> {
constructor(name: string)
/** @deprecated */
constructor()

public "boxed"(): $Decoder$Boxed<$Codec<T>>
public "byIdOrThrow"(int0: integer): $Codec<T>
public static "checkRange"<N extends (number & $Comparable<N>)>(n0: N, n1: N): $Function<N, $DataResult<N>>
public "comap"<B>(function0: $Function$$Type<B, $Codec<T>>): $Encoder<B>
public "comapFlatMap"<S>(function0: $Function$$Type<$Codec$$Type<T>, $DataResult<S>>, function1: $Function$$Type<S, $Codec<T>>): $Codec<S>
public static "compoundList"<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>): $Codec<$List<$Pair<K, V>>>
public "decode"<T>(dynamic0: $Dynamic$$Type<T>): $DataResult<$Pair<$Codec<T>, T>>
public "deprecated"(int0: integer): $Codec<$Codec<T>>
public "dispatch"<E>(function0: $Function$$Type<E, $Codec<T>>, function1: $Function$$Type<$Codec$$Type<T>, $Codec<E>>): $Codec<E>
public "dispatch"<E>(string0: string, function1: $Function$$Type<E, $Codec<T>>, function2: $Function$$Type<$Codec$$Type<T>, $Codec<E>>): $Codec<E>
public "dispatchMap"<E>(function0: $Function$$Type<E, $Codec<T>>, function1: $Function$$Type<$Codec$$Type<T>, $Codec<E>>): $MapCodec<E>
public "dispatchMap"<E>(string0: string, function1: $Function$$Type<E, $Codec<T>>, function2: $Function$$Type<$Codec$$Type<T>, $Codec<E>>): $MapCodec<E>
public "dispatchStable"<E>(function0: $Function$$Type<E, $Codec<T>>, function1: $Function$$Type<$Codec$$Type<T>, $Codec<E>>): $Codec<E>
public static "doubleRange"(double0: double, double1: double): $Codec<double>
public static "either"<F, S>(codec0: $Codec$$Type<F>, codec1: $Codec$$Type<S>): $Codec<$Either<F, S>>
public static "empty"<A>(): $MapEncoder<A>
public "encodeStart"<T>(dynamicOps0: $DynamicOps$$Type<T>, codec1: $Codec$$Type<T>): $DataResult<T>
public static "error"<A>(string0: string): $Encoder<A>
public "fieldOf"(string0: string): $MapCodec<$Codec<T>>
public "flatComap"<B>(function0: $Function$$Type<B, $DataResult<$Codec<T>>>): $Encoder<B>
public "flatComapMap"<S>(function0: $Function$$Type<$Codec$$Type<T>, S>, function1: $Function$$Type<S, $DataResult<$Codec<T>>>): $Codec<S>
public "flatMap"<B>(function0: $Function$$Type<$Codec$$Type<T>, $DataResult<B>>): $Decoder<B>
public "flatXmap"<S>(function0: $Function$$Type<$Codec$$Type<T>, $DataResult<S>>, function1: $Function$$Type<S, $DataResult<$Codec<T>>>): $Codec<S>
public static "floatRange"(float0: float, float1: float): $Codec<float>
public "forEach"(consumer0: $Consumer$$Type<$Codec$$Type<T>>): void
public static "intRange"(int0: integer, int1: integer): $Codec<integer>
public static "list"<E>(codec0: $Codec$$Type<E>): $Codec<$List<E>>
public "listOf"(): $Codec<$List<$Codec<T>>>
public "map"<B>(function0: $Function$$Type<$Codec$$Type<T>, B>): $Decoder<B>
public static "mapEither"<F, S>(mapCodec0: $MapCodec$$Type<F>, mapCodec1: $MapCodec$$Type<S>): $MapCodec<$Either<F, S>>
public static "mapPair"<F, S>(mapCodec0: $MapCodec$$Type<F>, mapCodec1: $MapCodec$$Type<S>): $MapCodec<$Pair<F, S>>
public "mapResult"(resultFunction0: $Codec$ResultFunction$$Type<$Codec$$Type<T>>): $Codec<$Codec<T>>
public static "of"<A>(mapEncoder0: $MapEncoder$$Type<A>, mapDecoder1: $MapDecoder$$Type<A>): $MapCodec<A>
public static "of"<A>(encoder0: $Encoder$$Type<A>, decoder1: $Decoder$$Type<A>): $Codec<A>
public static "of"<A>(mapEncoder0: $MapEncoder$$Type<A>, mapDecoder1: $MapDecoder$$Type<A>, supplier2: $Supplier$$Type<string>): $MapCodec<A>
public static "of"<A>(encoder0: $Encoder$$Type<A>, decoder1: $Decoder$$Type<A>, string2: string): $Codec<A>
public static "ofBoxed"<A>(boxed0: $Decoder$Boxed$$Type<A>): $Decoder<A>
public static "ofSimple"<A>(simple0: $Decoder$Simple$$Type<A>): $Decoder<A>
public static "ofTerminal"<A>(terminal0: $Decoder$Terminal$$Type<A>): $Decoder<A>
public static "optionalField"<F>(string0: string, codec1: $Codec$$Type<F>): $MapCodec<$Optional<F>>
public "optionalFieldOf"(string0: string, codec1: $Codec$$Type<T>, lifecycle2: $Lifecycle$$Type): $MapCodec<$Codec<T>>
public "optionalFieldOf"(string0: string, lifecycle1: $Lifecycle$$Type, codec2: $Codec$$Type<T>, lifecycle3: $Lifecycle$$Type): $MapCodec<$Codec<T>>
public "optionalFieldOf"(string0: string, codec1: $Codec$$Type<T>): $MapCodec<$Codec<T>>
public "optionalFieldOf"(string0: string): $MapCodec<$Optional<$Codec<T>>>
public "orElse"(codec0: $Codec$$Type<T>): $Codec<$Codec<T>>
public "orElse"(consumer0: $Consumer$$Type<string>, codec1: $Codec$$Type<T>): $Codec<$Codec<T>>
public "orElse"(unaryOperator0: $UnaryOperator$$Type<string>, codec1: $Codec$$Type<T>): $Codec<$Codec<T>>
public "orElseGet"(supplier0: $Supplier$$Type<$Codec<T>>): $Codec<$Codec<T>>
public "orElseGet"(unaryOperator0: $UnaryOperator$$Type<string>, supplier1: $Supplier$$Type<$Codec<T>>): $Codec<$Codec<T>>
public "orElseGet"(consumer0: $Consumer$$Type<string>, supplier1: $Supplier$$Type<$Codec<T>>): $Codec<$Codec<T>>
public static "pair"<F, S>(codec0: $Codec$$Type<F>, codec1: $Codec$$Type<S>): $Codec<$Pair<F, S>>
public "parse"<T>(dynamic0: $Dynamic$$Type<T>): $DataResult<$Codec<T>>
public "parse"<T>(dynamicOps0: $DynamicOps$$Type<T>, t1: T): $DataResult<$Codec<T>>
public "partialDispatch"<E>(string0: string, function1: $Function$$Type<E, $DataResult<$Codec<T>>>, function2: $Function$$Type<$Codec$$Type<T>, $DataResult<$Codec<E>>>): $Codec<E>
public "register"<B extends T>(name: string, value: $Codec$$Type<B>): $Codec<B>
public "register"<B extends T>(name: $ResourceLocation$$Type, value: $Codec$$Type<B>): $Codec<B>
public "simple"(): $Decoder$Simple<$Codec<T>>
public static "simpleMap"<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>, keyable2: $Keyable$$Type): $SimpleMapCodec<K, V>
public "spliterator"(): $Spliterator<$Codec<T>>
public "stable"(): $Codec<$Codec<T>>
public "terminal"(): $Decoder$Terminal<$Codec<T>>
public static "unboundedMap"<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>): $UnboundedMapCodec<K, V>
public static "unit"<A>(supplier0: $Supplier$$Type<A>): $Codec<A>
public static "unit"<A>(a0: A): $Codec<A>
public "xmap"<S>(function0: $Function$$Type<$Codec$$Type<T>, S>, function1: $Function$$Type<S, $Codec<T>>): $Codec<S>
}
}

declare module "net.mehvahdjukaar.supplementaries.common.utils.SlotReference" {
import { $SlotReference$Empty } from "net.mehvahdjukaar.supplementaries.common.utils.SlotReference$Empty"
import { $Codec } from "com.mojang.serialization.Codec"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $CodecMapRegistry } from "net.mehvahdjukaar.moonlight.api.misc.CodecMapRegistry"
import { $Item } from "net.minecraft.world.item.Item"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $IQuiverEntity$$Type } from "net.mehvahdjukaar.supplementaries.api.IQuiverEntity"

export interface $SlotReference {
"get"(livingEntity0: $LivingEntity$$Type): $ItemStack
"getCodec"(): $Codec<$SlotReference>
"getItem"(player: $LivingEntity$$Type): $Item
"isEmpty"(): boolean
get "codec"(): $Codec<$SlotReference>
get "empty"(): boolean
}

export namespace $SlotReference {
const EMPTY: $SlotReference$Empty
const REGISTRY: $CodecMapRegistry<$SlotReference>
const STREAM_CODEC: $Codec<$SlotReference>
function decode(buf: $FriendlyByteBuf$$Type): $SlotReference
function encode(buf: $FriendlyByteBuf$$Type, slotReference: $SlotReference$$Type): void
function hand(pUsedHand: $InteractionHand$$Type): $SlotReference
function inv(invSlot: integer): $SlotReference
function quiver(e: $IQuiverEntity$$Type): $SlotReference
function slot(equipmentSlot: $EquipmentSlot$$Type): $SlotReference
}
export abstract class $SlotReference$$Static implements $SlotReference {
static readonly "EMPTY": $SlotReference$Empty
static readonly "REGISTRY": $CodecMapRegistry<$SlotReference>
static readonly "STREAM_CODEC": $Codec<$SlotReference>

static "decode"(buf: $FriendlyByteBuf$$Type): $SlotReference
static "encode"(buf: $FriendlyByteBuf$$Type, slotReference: $SlotReference$$Type): void
static "hand"(pUsedHand: $InteractionHand$$Type): $SlotReference
static "inv"(invSlot: integer): $SlotReference
static "quiver"(e: $IQuiverEntity$$Type): $SlotReference
static "slot"(equipmentSlot: $EquipmentSlot$$Type): $SlotReference
}
}

declare module "net.mehvahdjukaar.vista.common.tv.enderman.ITVAngeredEnderman" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITVAngeredEnderman {
"vista$isAngry"(): boolean
"vista$setAngry"(boolean0: boolean): void
}

export namespace $ITVAngeredEnderman {
const probejs$$marker: never
}
export abstract class $ITVAngeredEnderman$$Static implements $ITVAngeredEnderman {
}
}

declare module "net.mehvahdjukaar.supplementaries.api.IAntiqueTextProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IAntiqueTextProvider {
"supp$hasAntiqueInk"(): boolean
"supp$setAntiqueInk"(boolean0: boolean): void
}

export namespace $IAntiqueTextProvider {
const probejs$$marker: never
}
export abstract class $IAntiqueTextProvider$$Static implements $IAntiqueTextProvider {
}
}

declare module "net.mehvahdjukaar.supplementaries.common.utils.SlotReference$Empty" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Item } from "net.minecraft.world.item.Item"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $SlotReference, $SlotReference$$Type } from "net.mehvahdjukaar.supplementaries.common.utils.SlotReference"
import { $Record } from "java.lang.Record"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $IQuiverEntity$$Type } from "net.mehvahdjukaar.supplementaries.api.IQuiverEntity"

export class $SlotReference$Empty extends $Record implements $SlotReference {
static readonly "CODEC": $Codec<$SlotReference$Empty>

constructor()

public static "decode"(buf: $FriendlyByteBuf$$Type): $SlotReference
public static "encode"(buf: $FriendlyByteBuf$$Type, slotReference: $SlotReference$$Type): void
public "get"(player: $LivingEntity$$Type): $ItemStack
public "getCodec"(): $Codec<$SlotReference$Empty>
public "getItem"(player: $LivingEntity$$Type): $Item
public static "hand"(pUsedHand: $InteractionHand$$Type): $SlotReference
public static "inv"(invSlot: integer): $SlotReference
public "isEmpty"(): boolean
public static "quiver"(e: $IQuiverEntity$$Type): $SlotReference
public static "slot"(equipmentSlot: $EquipmentSlot$$Type): $SlotReference
get "codec"(): $Codec<$SlotReference$Empty>
get "empty"(): boolean
}
}

declare module "net.mehvahdjukaar.moonlight.api.map.CustomMapData$Type" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CustomMapData } from "net.mehvahdjukaar.moonlight.api.map.CustomMapData"
import { $MapItemSavedData$$Type } from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"
import { $Record } from "java.lang.Record"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"

export class $CustomMapData$Type<T extends $CustomMapData<any> = $CustomMapData<any>> extends $Record {
constructor(id: $ResourceLocation$$Type, factory: $Supplier$$Type<T>)

public "factory"(): $Supplier<T>
public "get"(mapData: $MapItemSavedData$$Type): T
public "id"(): $ResourceLocation
}
}

declare module "net.mehvahdjukaar.supplementaries.common.entities.ISlimeable" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

export interface $ISlimeable {
"supp$getSlimedTicks"(): integer
"supp$setSlimedTicks"(int0: integer, boolean1: boolean): void
}

export namespace $ISlimeable {
function getAlpha(le: $LivingEntity$$Type, partialTicks: float): float
function tickEntity(entity: $LivingEntity$$Type): void
}
export abstract class $ISlimeable$$Static implements $ISlimeable {
static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
static "tickEntity"(entity: $LivingEntity$$Type): void
}
}

declare module "net.mehvahdjukaar.moonlight.api.map.CustomMapData" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MapItemSavedData$$Type } from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"
import { $CustomMapData$Type } from "net.mehvahdjukaar.moonlight.api.map.CustomMapData$Type"
import { $CustomMapData$DirtyCounter, $CustomMapData$DirtyCounter$$Type } from "net.mehvahdjukaar.moonlight.api.map.CustomMapData$DirtyCounter"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $CustomMapData<H extends $CustomMapData$DirtyCounter = $CustomMapData$DirtyCounter> {
"createDirtyCounter"(): H
"getType"(): $CustomMapData$Type<any>
"load"(compoundTag0: $CompoundTag$$Type): void
"loadUpdateTag"(compoundTag0: $CompoundTag$$Type): void
"onItemTooltip"(data: $MapItemSavedData$$Type, stack: $ItemStack$$Type): $Component
"onItemUpdate"(data: $MapItemSavedData$$Type, entity: $Entity$$Type): boolean
"persistOnCopyOrLock"(): boolean
"persistOnRescale"(): boolean
"save"(compoundTag0: $CompoundTag$$Type): void
"saveToUpdateTag"(compoundTag0: $CompoundTag$$Type, h1: H): void
"setDirty"(data: $MapItemSavedData$$Type, dirtySetter: $Consumer$$Type<H>): void
get "type"(): $CustomMapData$Type<any>
}

export namespace $CustomMapData {
const probejs$$marker: never
}
export abstract class $CustomMapData$$Static<H extends $CustomMapData$DirtyCounter = $CustomMapData$DirtyCounter> implements $CustomMapData<H> {
}
}

declare module "net.mehvahdjukaar.moonlight.api.map.CustomMapDecoration" {
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $MapDecorationType, $MapDecorationType$$Type } from "net.mehvahdjukaar.moonlight.api.map.type.MapDecorationType"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $CustomMapDecoration {
constructor(type: $MapDecorationType$$Type<any, any>, buffer: $FriendlyByteBuf$$Type)
constructor(type: $MapDecorationType$$Type<any, any>, x: byte, y: byte, rot: byte, displayName: $Component$$Type)

public "getDisplayName"(): $Component
public "getRot"(): byte
public "getType"(): $MapDecorationType<any, any>
public "getX"(): byte
public "getY"(): byte
public "saveToBuffer"(buffer: $FriendlyByteBuf$$Type): void
public "setDisplayName"(displayName: $Component$$Type): void
public "setRot"(rot: byte): void
public "setX"(x: byte): void
public "setY"(y: byte): void
get "displayName"(): $Component
get "rot"(): byte
get "type"(): $MapDecorationType<any, any>
get "x"(): byte
get "y"(): byte
set "displayName"(value: $Component$$Type)
set "rot"(value: byte)
set "x"(value: byte)
set "y"(value: byte)
}
}

declare module "net.mehvahdjukaar.supplementaries.mixins.forge.FireBlockAccessor" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $FireBlockAccessor {
"invokeTryCatchFire"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, int2: integer, randomSource3: $RandomSource$$Type, int4: integer, direction5: $Direction$$Type): void
}

export namespace $FireBlockAccessor {
const probejs$$marker: never
}
export abstract class $FireBlockAccessor$$Static implements $FireBlockAccessor {
}
}

declare module "net.mehvahdjukaar.supplementaries.client.IModelPartExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IModelPartExtension {
"supp$getTextHeight"(): integer
"supp$getTextWidth"(): integer
"supp$setDimensions"(int0: integer, int1: integer): void
}

export namespace $IModelPartExtension {
const probejs$$marker: never
}
export abstract class $IModelPartExtension$$Static implements $IModelPartExtension {
}
}

declare module "net.mehvahdjukaar.supplementaries.common.items.forge.ShulkerShellItem" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Equipable } from "net.minecraft.world.item.Equipable"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $ICapabilityProvider } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $InteractionResultHolder } from "net.minecraft.world.InteractionResultHolder"
import { $Item$Properties$$Type } from "net.minecraft.world.item.Item$Properties"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $ArmorItem } from "net.minecraft.world.item.ArmorItem"
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
import { $MutableToolTier$$Type } from "dev.latvian.mods.kubejs.item.MutableToolTier"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $FoodBuilder$$Type } from "dev.latvian.mods.kubejs.item.FoodBuilder"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $ShulkerShellItem extends $ArmorItem {
constructor(properties: $Item$Properties$$Type)

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
public static "get"(itemStack0: $ItemStack$$Type): $Equipable
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
public "getDigSpeed"(): float
public "getEnchantmentLevel"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): integer
public "getEnchantmentValue"(itemStack0: $ItemStack$$Type): integer
public "getEntityLifespan"(itemStack0: $ItemStack$$Type, level1: $Level$$Type): integer
public "getEquipmentSlot"(itemStack0: $ItemStack$$Type): $EquipmentSlot
public "getFoodProperties"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): $FoodProperties
public "getHighlightTip"(itemStack0: $ItemStack$$Type, component1: $Component$$Type): $Component
public "getMaxDamage"(itemStack0: $ItemStack$$Type): integer
public "getMaxStackSize"(stack: $ItemStack$$Type): integer
public "getMod"(): string
public "getShareTag"(itemStack0: $ItemStack$$Type): $CompoundTag
public "getSweepHitBox"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): $AABB
public "getXpRepairRatio"(itemStack0: $ItemStack$$Type): float
public "hasCraftingRemainingItem"(itemStack0: $ItemStack$$Type): boolean
public "hasCustomEntity"(itemStack0: $ItemStack$$Type): boolean
public "initCapabilities"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): $ICapabilityProvider
public "isBookEnchantable"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "isCorrectToolForDrops"(itemStack0: $ItemStack$$Type, blockState1: $BlockState$$Type): boolean
public "isDamageable"(stack: $ItemStack$$Type): boolean
public "isDamaged"(itemStack0: $ItemStack$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isEnderMask"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, enderMan2: $EnderMan$$Type): boolean
public "isNotReplaceableByPickAction"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer): boolean
public "isPiglinCurrency"(itemStack0: $ItemStack$$Type): boolean
public "kjs$getMutableAttributeMap"(): $Multimap<$Attribute, $AttributeModifier>
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
public "swapWithEquipmentSlot"(item0: $Item$$Type, level1: $Level$$Type, player2: $Player$$Type, interactionHand3: $InteractionHand$$Type): $InteractionResultHolder<$ItemStack>
get "creativeTab"(): string
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

declare module "net.mehvahdjukaar.moonlight.api.events.ILightningStruckBlockEvent" {
import { $LightningBolt, $LightningBolt$$Type } from "net.minecraft.world.entity.LightningBolt"
import { $SimpleEvent } from "net.mehvahdjukaar.moonlight.api.events.SimpleEvent"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $LevelAccessor, $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"

export interface $ILightningStruckBlockEvent extends $SimpleEvent {
"getEntity"(): $LightningBolt
"getLevel"(): $LevelAccessor
"getPos"(): $BlockPos
"getState"(): $BlockState
get "entity"(): $LightningBolt
get "level"(): $LevelAccessor
get "pos"(): $BlockPos
get "state"(): $BlockState
}

export namespace $ILightningStruckBlockEvent {
function create(state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, entity: $LightningBolt$$Type): $ILightningStruckBlockEvent
}
export abstract class $ILightningStruckBlockEvent$$Static implements $ILightningStruckBlockEvent {
static "create"(state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, entity: $LightningBolt$$Type): $ILightningStruckBlockEvent
}
}

declare module "net.mehvahdjukaar.moonlight.api.events.forge.VillagerBrainEvent" {
import { $SensorType$$Type } from "net.minecraft.world.entity.ai.sensing.SensorType"
import { $Behavior, $Behavior$$Type } from "net.minecraft.world.entity.ai.behavior.Behavior"
import { $MemoryModuleType } from "net.minecraft.world.entity.ai.memory.MemoryModuleType"
import { $ExpirableValue } from "net.minecraft.world.entity.ai.memory.ExpirableValue"
import { $Sensor$$Type } from "net.minecraft.world.entity.ai.sensing.Sensor"
import { $Pair, $Pair$$Type } from "com.mojang.datafixers.util.Pair"
import { $BehaviorControl$$Type } from "net.minecraft.world.entity.ai.behavior.BehaviorControl"
import { $Activity$$Type } from "net.minecraft.world.entity.schedule.Activity"
import { $Villager, $Villager$$Type } from "net.minecraft.world.entity.npc.Villager"
import { $ImmutableList$$Type } from "com.google.common.collect.ImmutableList"
import { $VillagerBrainEventInternal } from "net.mehvahdjukaar.moonlight.core.misc.VillagerBrainEventInternal"
import { $Map } from "java.util.Map"
import { $IVillagerBrainEvent } from "net.mehvahdjukaar.moonlight.api.events.IVillagerBrainEvent"
import { $Brain$$Type } from "net.minecraft.world.entity.ai.Brain"
import { $Optional } from "java.util.Optional"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $VillagerBrainEvent extends $Event implements $IVillagerBrainEvent {
constructor(brain: $Brain$$Type<$Villager$$Type>, villager: $Villager$$Type)
constructor()

public "addOrReplaceActivity"(activity: $Activity$$Type, activityPackage: $ImmutableList$$Type<$Pair$$Type<integer, $BehaviorControl$$Type<$Villager$$Type>>>): void
public "addSensor"(newSensor: $SensorType$$Type<$Sensor$$Type<$Villager$$Type>>): void
public "addTaskToActivity"<P extends $Pair<integer, $Behavior<$Villager>>>(activity: $Activity$$Type, task: P): boolean
public "getInternal"(): $VillagerBrainEventInternal
public "getMemories"(): $Map<$MemoryModuleType<any>, $Optional<$ExpirableValue<any>>>
public "getVillager"(): $Villager
public "scheduleActivity"(activity: $Activity$$Type, startTime: integer, endTime: integer): void
get "internal"(): $VillagerBrainEventInternal
get "memories"(): $Map<$MemoryModuleType<any>, $Optional<$ExpirableValue<any>>>
get "villager"(): $Villager
}
}

declare module "net.mehvahdjukaar.moonlight.api.map.markers.MapBlockMarker" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $MapItemSavedData$$Type } from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $MapDecorationType } from "net.mehvahdjukaar.moonlight.api.map.type.MapDecorationType"
import { $CustomMapDecoration } from "net.mehvahdjukaar.moonlight.api.map.CustomMapDecoration"

export class $MapBlockMarker<D extends $CustomMapDecoration = $CustomMapDecoration> {
static readonly "HAS_SMALL_TEXTURE_FLAG": integer

public "createDecorationFromMarker"(data: $MapItemSavedData$$Type): D
public "getFlags"(): integer
public "getMarkerId"(): string
public "getName"(): $Component
public "getPos"(): $BlockPos
public "getRotation"(): float
public "getType"(): $MapDecorationType<D, any>
public "getTypeId"(): string
public "hasFlag"(flag: integer): boolean
public "loadFromNBT"(compound: $CompoundTag$$Type): void
public "saveToNBT"(): $CompoundTag
/** @deprecated */
public "saveToNBT"(compound: $CompoundTag$$Type): $CompoundTag
public "setName"(name: $Component$$Type): void
public "setPersistent"(persistent: boolean): void
public "setPos"(pos: $BlockPos$$Type): void
public "setRotation"(rot: integer): void
public "shouldRefresh"(): boolean
public "shouldSave"(): boolean
get "flags"(): integer
get "markerId"(): string
get "name"(): $Component
get "pos"(): $BlockPos
get "rotation"(): float
get "type"(): $MapDecorationType<D, any>
get "typeId"(): string
set "name"(value: $Component$$Type)
set "persistent"(value: boolean)
set "pos"(value: $BlockPos$$Type)
set "rotation"(value: integer)
}
}

declare module "net.mehvahdjukaar.moonlight.api.events.forge.FireConsumeBlockEvent" {
import { $IFireConsumeBlockEvent } from "net.mehvahdjukaar.moonlight.api.events.IFireConsumeBlockEvent"
import { $BlockEvent } from "net.minecraftforge.event.level.BlockEvent"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $LevelAccessor } from "net.minecraft.world.level.LevelAccessor"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $FireConsumeBlockEvent extends $BlockEvent implements $IFireConsumeBlockEvent {
constructor(world: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, chance: integer, age: integer, face: $Direction$$Type)
constructor()

public static "create"(pos: $BlockPos$$Type, level: $Level$$Type, state: $BlockState$$Type, chance: integer, age: integer, face: $Direction$$Type): $IFireConsumeBlockEvent
public "getAge"(): integer
public "getChance"(): integer
public "getFace"(): $Direction
public "getFinalState"(): $BlockState
public "getLevel"(): $LevelAccessor
public "getPos"(): $BlockPos
public "getState"(): $BlockState
public "setFinalState"(state: $BlockState$$Type): void
get "age"(): integer
get "chance"(): integer
get "face"(): $Direction
get "finalState"(): $BlockState
get "level"(): $LevelAccessor
get "pos"(): $BlockPos
get "state"(): $BlockState
set "finalState"(value: $BlockState$$Type)
}
}

declare module "net.mehvahdjukaar.moonlight.core.mixins.forge.ButtonAccessor" {
import { $Button$OnPress, $Button$OnPress$$Type } from "net.minecraft.client.gui.components.Button$OnPress"

export interface $ButtonAccessor {
"getOnPress"(): $Button$OnPress
"setOnPress"(onPress0: $Button$OnPress$$Type): void
get "onPress"(): $Button$OnPress
set "onPress"(value: $Button$OnPress$$Type)
}

export namespace $ButtonAccessor {
const probejs$$marker: never
}
export abstract class $ButtonAccessor$$Static implements $ButtonAccessor {
}
}

declare module "net.mehvahdjukaar.moonlight.api.map.ExpandedMapData" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $CustomMapData } from "net.mehvahdjukaar.moonlight.api.map.CustomMapData"
import { $MapItemSavedData } from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $CustomMapData$Type$$Type } from "net.mehvahdjukaar.moonlight.api.map.CustomMapData$Type"
import { $Map } from "java.util.Map"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $CustomMapData$DirtyCounter, $CustomMapData$DirtyCounter$$Type } from "net.mehvahdjukaar.moonlight.api.map.CustomMapData$DirtyCounter"
import { $CustomMapDecoration } from "net.mehvahdjukaar.moonlight.api.map.CustomMapDecoration"
import { $MapBlockMarker, $MapBlockMarker$$Type } from "net.mehvahdjukaar.moonlight.api.map.markers.MapBlockMarker"

export interface $ExpandedMapData {
"addCustomMarker"<M extends $MapBlockMarker<any>>(m0: M): void
"copy"(): $MapItemSavedData
"getCustomData"(): $Map<$ResourceLocation, $CustomMapData<any>>
"getCustomDecorations"(): $Map<string, $CustomMapDecoration>
"getCustomMarkers"(): $Map<string, $MapBlockMarker<any>>
"getVanillaDecorationSize"(): integer
"removeCustomMarker"(string0: string): boolean
"resetCustomDecoration"(): void
"setCustomDataDirty"<H extends $CustomMapData$DirtyCounter>(type0: $CustomMapData$Type$$Type<any>, consumer1: $Consumer$$Type<H>): void
"setCustomDecorationsDirty"(): void
"toggleCustomDecoration"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type): boolean
get "customData"(): $Map<$ResourceLocation, $CustomMapData<any>>
get "customDecorations"(): $Map<string, $CustomMapDecoration>
get "customMarkers"(): $Map<string, $MapBlockMarker<any>>
get "vanillaDecorationSize"(): integer
}

export namespace $ExpandedMapData {
const probejs$$marker: never
}
export abstract class $ExpandedMapData$$Static implements $ExpandedMapData {
}
}

declare module "net.mehvahdjukaar.supplementaries.mixins.LivingEntityAccessor" {
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $LivingEntityAccessor {
"invokeShouldDropLoot"(): boolean
"setUseItem"(itemStack0: $ItemStack$$Type): void
set "useItem"(value: $ItemStack$$Type)
}

export namespace $LivingEntityAccessor {
const probejs$$marker: never
}
export abstract class $LivingEntityAccessor$$Static implements $LivingEntityAccessor {
}
}

declare module "net.mehvahdjukaar.moonlight.api.events.IDropItemOnDeathEvent" {
import { $SimpleEvent } from "net.mehvahdjukaar.moonlight.api.events.SimpleEvent"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $IDropItemOnDeathEvent extends $SimpleEvent {
"getItemStack"(): $ItemStack
"getPlayer"(): $Player
"getReturnItemStack"(): $ItemStack
"isBeforeDrop"(): boolean
"isCanceled"(): boolean
"setCanceled"(boolean0: boolean): void
"setReturnItemStack"(itemStack0: $ItemStack$$Type): void
get "itemStack"(): $ItemStack
get "player"(): $Player
get "returnItemStack"(): $ItemStack
get "beforeDrop"(): boolean
get "canceled"(): boolean
set "canceled"(value: boolean)
set "returnItemStack"(value: $ItemStack$$Type)
}

export namespace $IDropItemOnDeathEvent {
function create(itemStack: $ItemStack$$Type, player: $Player$$Type, beforeDrop: boolean): $IDropItemOnDeathEvent
}
export abstract class $IDropItemOnDeathEvent$$Static implements $IDropItemOnDeathEvent {
static "create"(itemStack: $ItemStack$$Type, player: $Player$$Type, beforeDrop: boolean): $IDropItemOnDeathEvent
}
}

declare module "net.mehvahdjukaar.moonlight.api.events.forge.DropItemOnDeathEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $IDropItemOnDeathEvent } from "net.mehvahdjukaar.moonlight.api.events.IDropItemOnDeathEvent"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $DropItemOnDeathEvent extends $Event implements $IDropItemOnDeathEvent {
constructor(itemStack: $ItemStack$$Type, player: $Player$$Type, beforeDrop: boolean)
constructor()

public static "create"(itemStack: $ItemStack$$Type, player: $Player$$Type, beforeDrop: boolean): $IDropItemOnDeathEvent
public "getItemStack"(): $ItemStack
public "getPlayer"(): $Player
public "getReturnItemStack"(): $ItemStack
public "isBeforeDrop"(): boolean
public "isCanceled"(): boolean
public "setCanceled"(boolean0: boolean): void
public "setReturnItemStack"(stack: $ItemStack$$Type): void
get "itemStack"(): $ItemStack
get "player"(): $Player
get "returnItemStack"(): $ItemStack
get "beforeDrop"(): boolean
get "canceled"(): boolean
set "canceled"(value: boolean)
set "returnItemStack"(value: $ItemStack$$Type)
}
}

declare module "net.mehvahdjukaar.moonlight.core.misc.VillagerBrainEventInternal" {
import { $SensorType$$Type } from "net.minecraft.world.entity.ai.sensing.SensorType"
import { $Behavior, $Behavior$$Type } from "net.minecraft.world.entity.ai.behavior.Behavior"
import { $MemoryModuleType } from "net.minecraft.world.entity.ai.memory.MemoryModuleType"
import { $ExpirableValue } from "net.minecraft.world.entity.ai.memory.ExpirableValue"
import { $Sensor$$Type } from "net.minecraft.world.entity.ai.sensing.Sensor"
import { $Pair, $Pair$$Type } from "com.mojang.datafixers.util.Pair"
import { $BehaviorControl$$Type } from "net.minecraft.world.entity.ai.behavior.BehaviorControl"
import { $Activity$$Type } from "net.minecraft.world.entity.schedule.Activity"
import { $Villager, $Villager$$Type } from "net.minecraft.world.entity.npc.Villager"
import { $ImmutableList$$Type } from "com.google.common.collect.ImmutableList"
import { $Map } from "java.util.Map"
import { $Brain$$Type } from "net.minecraft.world.entity.ai.Brain"
import { $Optional } from "java.util.Optional"

export class $VillagerBrainEventInternal {
constructor(brain: $Brain$$Type<$Villager$$Type>, villager: $Villager$$Type)

public "addOrReplaceActivity"(activity: $Activity$$Type, activityPackage: $ImmutableList$$Type<$Pair$$Type<integer, $BehaviorControl$$Type<$Villager$$Type>>>): void
public "addSensor"(newSensor: $SensorType$$Type<$Sensor$$Type<$Villager$$Type>>): void
public "addTaskToActivity"<P extends $Pair<integer, $Behavior<$Villager>>>(activity: $Activity$$Type, task: P): boolean
public "getMemories"(): $Map<$MemoryModuleType<any>, $Optional<$ExpirableValue<any>>>
public "getVillager"(): $Villager
public "scheduleActivity"(activity: $Activity$$Type, startTime: integer, endTime: integer): void
get "memories"(): $Map<$MemoryModuleType<any>, $Optional<$ExpirableValue<any>>>
get "villager"(): $Villager
}
}

declare module "net.mehvahdjukaar.moonlight.api.item.additional_placements.BlockPlacerItem" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $ICapabilityProvider } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item$Properties$$Type } from "net.minecraft.world.item.Item$Properties"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $Holder } from "net.minecraft.core.Holder"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Map } from "java.util.Map"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $FoodProperties, $FoodProperties$$Type } from "net.minecraft.world.food.FoodProperties"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $BlockItem } from "net.minecraft.world.item.BlockItem"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $UUID$$Type } from "java.util.UUID"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $SoundType$$Type } from "net.minecraft.world.level.block.SoundType"
import { $Attribute, $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $EnderMan$$Type } from "net.minecraft.world.entity.monster.EnderMan"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $MutableToolTier$$Type } from "dev.latvian.mods.kubejs.item.MutableToolTier"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $AdditionalItemPlacement, $AdditionalItemPlacement$$Type } from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import { $FoodBuilder$$Type } from "dev.latvian.mods.kubejs.item.FoodBuilder"
import { $BlockPlaceContext$$Type } from "net.minecraft.world.item.context.BlockPlaceContext"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $BlockPlacerItem extends $BlockItem {
constructor(pBlock: $Block$$Type, pProperties: $Item$Properties$$Type)

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
public static "get"(): $BlockPlacerItem
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
public "m_40610_"(pContext: $BlockPlaceContext$$Type, pState: $BlockState$$Type): boolean
public "makesPiglinsNeutral"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "mimicGetPlacementState"(pContext: $BlockPlaceContext$$Type, toPlace: $Block$$Type): $BlockState
public "mimicPlace"(pContext: $BlockPlaceContext$$Type, toPlace: $Block$$Type, overrideSound: $SoundType$$Type): $InteractionResult
public "mimicUseOn"(pContext: $UseOnContext$$Type, toPlace: $Block$$Type, foodProperties: $FoodProperties$$Type): $InteractionResult
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

declare module "net.mehvahdjukaar.moonlight.api.misc.MapRegistry" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Either } from "com.mojang.datafixers.util.Either"
import { $IdMap } from "net.minecraft.core.IdMap"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $SimpleMapCodec } from "com.mojang.serialization.codecs.SimpleMapCodec"
import { $Encoder, $Encoder$$Type } from "com.mojang.serialization.Encoder"
import { $DynamicOps$$Type } from "com.mojang.serialization.DynamicOps"
import { $MapEncoder, $MapEncoder$$Type } from "com.mojang.serialization.MapEncoder"
import { $DataResult } from "com.mojang.serialization.DataResult"
import { $UnboundedMapCodec } from "com.mojang.serialization.codecs.UnboundedMapCodec"
import { $Map$Entry } from "java.util.Map$Entry"
import { $Decoder$Terminal, $Decoder$Terminal$$Type } from "com.mojang.serialization.Decoder$Terminal"
import { $Dynamic$$Type } from "com.mojang.serialization.Dynamic"
import { $Iterator } from "java.util.Iterator"
import { $Decoder$Boxed, $Decoder$Boxed$$Type } from "com.mojang.serialization.Decoder$Boxed"
import { $CodecMapRegistry } from "net.mehvahdjukaar.moonlight.api.misc.CodecMapRegistry"
import { $MapCodec, $MapCodec$$Type } from "com.mojang.serialization.MapCodec"
import { $Set } from "java.util.Set"
import { $Codec$ResultFunction$$Type } from "com.mojang.serialization.Codec$ResultFunction"
import { $Lifecycle$$Type } from "com.mojang.serialization.Lifecycle"
import { $Decoder, $Decoder$$Type } from "com.mojang.serialization.Decoder"
import { $MapDecoder$$Type } from "com.mojang.serialization.MapDecoder"
import { $Pair } from "com.mojang.datafixers.util.Pair"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"
import { $Decoder$Simple, $Decoder$Simple$$Type } from "com.mojang.serialization.Decoder$Simple"
import { $Optional } from "java.util.Optional"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Keyable$$Type } from "com.mojang.serialization.Keyable"
import { $Spliterator } from "java.util.Spliterator"

export class $MapRegistry<T = any> implements $IdMap<T>, $Codec<T> {
constructor(name: string)

public "boxed"(): $Decoder$Boxed<T>
public "byId"(id: integer): T
public "byIdOrThrow"(int0: integer): T
public static "checkRange"<N extends (number & $Comparable<N>)>(n0: N, n1: N): $Function<N, $DataResult<N>>
public "clear"(): void
public "comap"<B>(function0: $Function$$Type<B, T>): $Encoder<B>
public "comapFlatMap"<S>(function0: $Function$$Type<T, $DataResult<S>>, function1: $Function$$Type<S, T>): $Codec<S>
public static "compoundList"<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>): $Codec<$List<$Pair<K, V>>>
public "contains"(id: integer): boolean
public "containsKey"(name: $ResourceLocation$$Type): boolean
public "decode"<U>(ops: $DynamicOps$$Type<U>, json: U): $DataResult<$Pair<T, U>>
public "decode"<T>(dynamic0: $Dynamic$$Type<T>): $DataResult<$Pair<T, T>>
public "deprecated"(int0: integer): $Codec<T>
public "dispatch"<E>(type: $Function$$Type<E, T>): $Codec<E>
public "dispatch"<E>(function0: $Function$$Type<E, T>, function1: $Function$$Type<T, $Codec<E>>): $Codec<E>
public "dispatch"<E>(string0: string, function1: $Function$$Type<E, T>, function2: $Function$$Type<T, $Codec<E>>): $Codec<E>
public "dispatchMap"<E>(function0: $Function$$Type<E, T>, function1: $Function$$Type<T, $Codec<E>>): $MapCodec<E>
public "dispatchMap"<E>(string0: string, function1: $Function$$Type<E, T>, function2: $Function$$Type<T, $Codec<E>>): $MapCodec<E>
public "dispatchStable"<E>(function0: $Function$$Type<E, T>, function1: $Function$$Type<T, $Codec<E>>): $Codec<E>
public static "doubleRange"(double0: double, double1: double): $Codec<double>
public static "either"<F, S>(codec0: $Codec$$Type<F>, codec1: $Codec$$Type<S>): $Codec<$Either<F, S>>
public static "empty"<A>(): $MapEncoder<A>
public "encode"<U>(object: T, ops: $DynamicOps$$Type<U>, prefix: U): $DataResult<U>
public "encodeStart"<T>(dynamicOps0: $DynamicOps$$Type<T>, t1: T): $DataResult<T>
public static "error"<A>(string0: string): $Encoder<A>
public "fieldOf"(string0: string): $MapCodec<T>
public "flatComap"<B>(function0: $Function$$Type<B, $DataResult<T>>): $Encoder<B>
public "flatComapMap"<S>(function0: $Function$$Type<T, S>, function1: $Function$$Type<S, $DataResult<T>>): $Codec<S>
public "flatMap"<B>(function0: $Function$$Type<T, $DataResult<B>>): $Decoder<B>
public "flatXmap"<S>(function0: $Function$$Type<T, $DataResult<S>>, function1: $Function$$Type<S, $DataResult<T>>): $Codec<S>
public static "floatRange"(float0: float, float1: float): $Codec<float>
public "forEach"(consumer0: $Consumer$$Type<T>): void
public "getEntries"(): $Set<$Map$Entry<$ResourceLocation, T>>
public "getId"(value: T): integer
public "getKey"(value: T): $ResourceLocation
public "getValue"(name: string): T
public "getValue"(name: $ResourceLocation$$Type): T
public "getValueOrDefault"(parse: $ResourceLocation$$Type, defaultType: T): T
public "getValues"(): $Set<T>
public static "intRange"(int0: integer, int1: integer): $Codec<integer>
public "iterator"(): $Iterator<T>
public "keySet"(): $Set<$ResourceLocation>
public static "list"<E>(codec0: $Codec$$Type<E>): $Codec<$List<E>>
public "listOf"(): $Codec<$List<T>>
public "map"<B>(function0: $Function$$Type<T, B>): $Decoder<B>
public static "mapEither"<F, S>(mapCodec0: $MapCodec$$Type<F>, mapCodec1: $MapCodec$$Type<S>): $MapCodec<$Either<F, S>>
public static "mapPair"<F, S>(mapCodec0: $MapCodec$$Type<F>, mapCodec1: $MapCodec$$Type<S>): $MapCodec<$Pair<F, S>>
public "mapResult"(resultFunction0: $Codec$ResultFunction$$Type<T>): $Codec<T>
public static "of"<A>(mapEncoder0: $MapEncoder$$Type<A>, mapDecoder1: $MapDecoder$$Type<A>): $MapCodec<A>
public static "of"<A>(encoder0: $Encoder$$Type<A>, decoder1: $Decoder$$Type<A>): $Codec<A>
public static "of"<A>(mapEncoder0: $MapEncoder$$Type<A>, mapDecoder1: $MapDecoder$$Type<A>, supplier2: $Supplier$$Type<string>): $MapCodec<A>
public static "of"<A>(encoder0: $Encoder$$Type<A>, decoder1: $Decoder$$Type<A>, string2: string): $Codec<A>
public static "ofBoxed"<A>(boxed0: $Decoder$Boxed$$Type<A>): $Decoder<A>
public static "ofCodec"<B>(name: string): $CodecMapRegistry<B>
public static "ofCodec"<B>(): $CodecMapRegistry<B>
public static "ofSimple"<A>(simple0: $Decoder$Simple$$Type<A>): $Decoder<A>
public static "ofTerminal"<A>(terminal0: $Decoder$Terminal$$Type<A>): $Decoder<A>
public static "optionalField"<F>(string0: string, codec1: $Codec$$Type<F>): $MapCodec<$Optional<F>>
public "optionalFieldOf"(string0: string, t1: T, lifecycle2: $Lifecycle$$Type): $MapCodec<T>
public "optionalFieldOf"(string0: string, lifecycle1: $Lifecycle$$Type, t2: T, lifecycle3: $Lifecycle$$Type): $MapCodec<T>
public "optionalFieldOf"(string0: string, t1: T): $MapCodec<T>
public "optionalFieldOf"(string0: string): $MapCodec<$Optional<T>>
public "orElse"(t0: T): $Codec<T>
public "orElse"(consumer0: $Consumer$$Type<string>, t1: T): $Codec<T>
public "orElse"(unaryOperator0: $UnaryOperator$$Type<string>, t1: T): $Codec<T>
public "orElseGet"(supplier0: $Supplier$$Type<T>): $Codec<T>
public "orElseGet"(unaryOperator0: $UnaryOperator$$Type<string>, supplier1: $Supplier$$Type<T>): $Codec<T>
public "orElseGet"(consumer0: $Consumer$$Type<string>, supplier1: $Supplier$$Type<T>): $Codec<T>
public static "pair"<F, S>(codec0: $Codec$$Type<F>, codec1: $Codec$$Type<S>): $Codec<$Pair<F, S>>
public "parse"<T>(dynamic0: $Dynamic$$Type<T>): $DataResult<T>
public "parse"<T>(dynamicOps0: $DynamicOps$$Type<T>, t1: T): $DataResult<T>
public "partialDispatch"<E>(string0: string, function1: $Function$$Type<E, $DataResult<T>>, function2: $Function$$Type<T, $DataResult<$Codec<E>>>): $Codec<E>
public "register"<B extends T>(name: string, value: B): T
public "register"<B extends T>(name: $ResourceLocation$$Type, value: B): T
public "simple"(): $Decoder$Simple<T>
public static "simpleMap"<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>, keyable2: $Keyable$$Type): $SimpleMapCodec<K, V>
public "size"(): integer
public "spliterator"(): $Spliterator<T>
public "stable"(): $Codec<T>
public "terminal"(): $Decoder$Terminal<T>
public static "unboundedMap"<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>): $UnboundedMapCodec<K, V>
public static "unit"<A>(supplier0: $Supplier$$Type<A>): $Codec<A>
public static "unit"<A>(a0: A): $Codec<A>
public "xmap"<S>(function0: $Function$$Type<T, S>, function1: $Function$$Type<S, T>): $Codec<S>
[Symbol.iterator](): IterableIterator<T>;
get "entries"(): $Set<$Map$Entry<$ResourceLocation, T>>
get "values"(): $Set<T>
}
}

declare module "net.mehvahdjukaar.supplementaries.mixins.AgeableListAccessor" {
import { $Iterable } from "java.lang.Iterable"
import { $ModelPart } from "net.minecraft.client.model.geom.ModelPart"

export interface $AgeableListAccessor {
"invokeBodyParts"(): $Iterable<$ModelPart>
}

export namespace $AgeableListAccessor {
const probejs$$marker: never
}
export abstract class $AgeableListAccessor$$Static implements $AgeableListAccessor {
}
}

declare module "net.mehvahdjukaar.moonlight.core.mixins.accessor.BrainAccessor" {
import { $SensorType } from "net.minecraft.world.entity.ai.sensing.SensorType"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Behavior } from "net.minecraft.world.entity.ai.behavior.Behavior"
import { $Map } from "java.util.Map"
import { $Set } from "java.util.Set"
import { $Sensor } from "net.minecraft.world.entity.ai.sensing.Sensor"
import { $Activity } from "net.minecraft.world.entity.schedule.Activity"

export interface $BrainAccessor<E extends $LivingEntity = $LivingEntity> {
"getAvailableBehaviorsByPriority"(): $Map<integer, $Map<$Activity, $Set<$Behavior<E>>>>
"getSensors"(): $Map<$SensorType<$Sensor<E>>, $Sensor<E>>
get "availableBehaviorsByPriority"(): $Map<integer, $Map<$Activity, $Set<$Behavior<E>>>>
get "sensors"(): $Map<$SensorType<$Sensor<E>>, $Sensor<E>>
}

export namespace $BrainAccessor {
const probejs$$marker: never
}
export abstract class $BrainAccessor$$Static<E extends $LivingEntity = $LivingEntity> implements $BrainAccessor<E> {
}
}

declare module "net.mehvahdjukaar.moonlight.api.events.forge.LightningStruckBlockEvent" {
import { $LightningBolt, $LightningBolt$$Type } from "net.minecraft.world.entity.LightningBolt"
import { $BlockEvent } from "net.minecraftforge.event.level.BlockEvent"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $LevelAccessor, $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $ILightningStruckBlockEvent } from "net.mehvahdjukaar.moonlight.api.events.ILightningStruckBlockEvent"

export class $LightningStruckBlockEvent extends $BlockEvent implements $ILightningStruckBlockEvent {
constructor(state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, entity: $LightningBolt$$Type)
constructor()

public static "create"(state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, entity: $LightningBolt$$Type): $ILightningStruckBlockEvent
public "getEntity"(): $LightningBolt
public "getLevel"(): $LevelAccessor
public "getPos"(): $BlockPos
public "getState"(): $BlockState
get "entity"(): $LightningBolt
get "level"(): $LevelAccessor
get "pos"(): $BlockPos
get "state"(): $BlockState
}
}

declare module "net.mehvahdjukaar.moonlight.core.misc.IMapDataPacketExtension" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $MapItemSavedData$MapPatch } from "net.minecraft.world.level.saveddata.maps.MapItemSavedData$MapPatch"
import { $Collection$$Type } from "java.util.Collection"
import { $CustomMapDecoration$$Type } from "net.mehvahdjukaar.moonlight.api.map.CustomMapDecoration"
import { $Level } from "net.minecraft.world.level.Level"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"

export interface $IMapDataPacketExtension {
"moonlight$getColorPatch"(): $MapItemSavedData$MapPatch
"moonlight$getCustomMapDataTag"(): $CompoundTag
"moonlight$getDimension"(): $ResourceKey<$Level>
"moonlight$sendCustomDecorations"(collection0: $Collection$$Type<$CustomMapDecoration$$Type>): void
"moonlight$sendCustomMapDataTag"(compoundTag0: $CompoundTag$$Type): void
}

export namespace $IMapDataPacketExtension {
const probejs$$marker: never
}
export abstract class $IMapDataPacketExtension$$Static implements $IMapDataPacketExtension {
}
}

declare module "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement" {
import { $FoodProperties$$Type } from "net.minecraft.world.food.FoodProperties"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockPlaceContext, $BlockPlaceContext$$Type } from "net.minecraft.world.item.context.BlockPlaceContext"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $BlockPlacerItem } from "net.mehvahdjukaar.moonlight.api.item.additional_placements.BlockPlacerItem"

export class $AdditionalItemPlacement {
constructor(placeable: $Block$$Type)

public static "getBlockPlacer"(): $BlockPlacerItem
public "getPlacedBlock"(): $Block
public "overrideGetPlacementState"(pContext: $BlockPlaceContext$$Type): $BlockState
public "overridePlace"(pContext: $BlockPlaceContext$$Type): $InteractionResult
public "overrideUpdatePlacementContext"(context: $BlockPlaceContext$$Type): $BlockPlaceContext
public "overrideUseOn"(pContext: $UseOnContext$$Type, foodProperties: $FoodProperties$$Type): $InteractionResult
get "placedBlock"(): $Block
}
}

declare module "net.mehvahdjukaar.moonlight.api.events.IFireConsumeBlockEvent" {
import { $SimpleEvent } from "net.mehvahdjukaar.moonlight.api.events.SimpleEvent"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $LevelAccessor } from "net.minecraft.world.level.LevelAccessor"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $IFireConsumeBlockEvent extends $SimpleEvent {
"getAge"(): integer
"getChance"(): integer
"getFace"(): $Direction
"getFinalState"(): $BlockState
"getLevel"(): $LevelAccessor
"getPos"(): $BlockPos
"getState"(): $BlockState
"setFinalState"(blockState0: $BlockState$$Type): void
get "age"(): integer
get "chance"(): integer
get "face"(): $Direction
get "finalState"(): $BlockState
get "level"(): $LevelAccessor
get "pos"(): $BlockPos
get "state"(): $BlockState
set "finalState"(value: $BlockState$$Type)
}

export namespace $IFireConsumeBlockEvent {
function create(pos: $BlockPos$$Type, level: $Level$$Type, state: $BlockState$$Type, chance: integer, age: integer, face: $Direction$$Type): $IFireConsumeBlockEvent
}
export abstract class $IFireConsumeBlockEvent$$Static implements $IFireConsumeBlockEvent {
static "create"(pos: $BlockPos$$Type, level: $Level$$Type, state: $BlockState$$Type, chance: integer, age: integer, face: $Direction$$Type): $IFireConsumeBlockEvent
}
}

declare module "net.mehvahdjukaar.moonlight.core.misc.IExtendedItem" {
import { $AdditionalItemPlacement, $AdditionalItemPlacement$$Type } from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export interface $IExtendedItem {
"moonlight$addAdditionalBehavior"(additionalItemPlacement0: $AdditionalItemPlacement$$Type): void
"moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
"moonlight$getClientAnimationExtension"(): any
"moonlight$setClientAnimationExtension"(object0: any): void
}

export namespace $IExtendedItem {
const probejs$$marker: never
}
export abstract class $IExtendedItem$$Static implements $IExtendedItem {
}
}

declare module "net.mehvahdjukaar.moonlight.core.misc.IHoldingPlayerExtension" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $CustomMapData$Type$$Type } from "net.mehvahdjukaar.moonlight.api.map.CustomMapData$Type"
import { $CustomMapData$DirtyCounter, $CustomMapData$DirtyCounter$$Type } from "net.mehvahdjukaar.moonlight.api.map.CustomMapData$DirtyCounter"

export interface $IHoldingPlayerExtension {
"moonlight$setCustomDataDirty"<H extends $CustomMapData$DirtyCounter>(type0: $CustomMapData$Type$$Type<any>, consumer1: $Consumer$$Type<H>): void
"moonlight$setCustomMarkersDirty"(): void
}

export namespace $IHoldingPlayerExtension {
const probejs$$marker: never
}
export abstract class $IHoldingPlayerExtension$$Static implements $IHoldingPlayerExtension {
}
}

declare module "net.mehvahdjukaar.supplementaries.common.block.IConvertableHorse" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IConvertableHorse {
"supp$isConverting"(): boolean
}

export namespace $IConvertableHorse {
const probejs$$marker: never
}
export abstract class $IConvertableHorse$$Static implements $IConvertableHorse {
}
}

declare module "net.mehvahdjukaar.supplementaries.common.entities.goals.ISuppEvoker" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

export interface $ISuppEvoker {
"supplementaries$getCustomWololoo"(): $LivingEntity
"supplementaries$setCustomWololoo"(livingEntity0: $LivingEntity$$Type): void
"supplementaries$setSpellCastingTime"(int0: integer): void
}

export namespace $ISuppEvoker {
const probejs$$marker: never
}
export abstract class $ISuppEvoker$$Static implements $ISuppEvoker {
}
}

declare module "net.mehvahdjukaar.supplementaries.common.entities.dispenser_minecart.ILevelEventRedirect" {
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $ILevelEventRedirect {
"supp$setRedirected"(boolean0: boolean, vec31: $Vec3$$Type): void
}

export namespace $ILevelEventRedirect {
function supp$tryRedirect(serverLevel: $ServerLevel$$Type, pPlayer: $Player$$Type, vec3: $Vec3$$Type, pType: integer, pPos: $BlockPos$$Type, pData: integer): boolean
}
export abstract class $ILevelEventRedirect$$Static implements $ILevelEventRedirect {
static "supp$tryRedirect"(serverLevel: $ServerLevel$$Type, pPlayer: $Player$$Type, vec3: $Vec3$$Type, pType: integer, pPos: $BlockPos$$Type, pData: integer): boolean
}
}

declare module "net.mehvahdjukaar.supplementaries.common.entities.IPartyCreeper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPartyCreeper {
"supplementaries$isFestive"(): boolean
"supplementaries$setFestive"(boolean0: boolean): void
}

export namespace $IPartyCreeper {
const probejs$$marker: never
}
export abstract class $IPartyCreeper$$Static implements $IPartyCreeper {
}
}

declare module "net.mehvahdjukaar.moonlight.core.mixins.accessor.DispenserBlockEntityAccessor" {
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $DispenserBlockEntityAccessor {
"getItems"(): $NonNullList<$ItemStack>
get "items"(): $NonNullList<$ItemStack>
}

export namespace $DispenserBlockEntityAccessor {
const probejs$$marker: never
}
export abstract class $DispenserBlockEntityAccessor$$Static implements $DispenserBlockEntityAccessor {
}
}

declare module "net.mehvahdjukaar.moonlight.api.map.CustomMapData$DirtyCounter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CustomMapData$DirtyCounter {
"clearDirty"(): void
"isDirty"(): boolean
get "dirty"(): boolean
}

export namespace $CustomMapData$DirtyCounter {
const probejs$$marker: never
}
export abstract class $CustomMapData$DirtyCounter$$Static implements $CustomMapData$DirtyCounter {
}
}

declare module "net.mehvahdjukaar.moonlight.api.block.IBlockHolder" {
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export interface $IBlockHolder {
"getHeldBlock"(): $BlockState
"getHeldBlock"(int0: integer): $BlockState
"setHeldBlock"(blockState0: $BlockState$$Type, int1: integer): boolean
"setHeldBlock"(state: $BlockState$$Type): boolean
get "heldBlock"(): $BlockState
set "heldBlock"(value: $BlockState$$Type)
}

export namespace $IBlockHolder {
const probejs$$marker: never
}
export abstract class $IBlockHolder$$Static implements $IBlockHolder {
}
}

declare module "net.mehvahdjukaar.moonlight.api.events.SimpleEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SimpleEvent {
}

export namespace $SimpleEvent {
const probejs$$marker: never
}
export abstract class $SimpleEvent$$Static implements $SimpleEvent {
}
}

declare module "net.mehvahdjukaar.supplementaries.api.IQuiverEntity" {
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $IQuiverEntity {
"supplementaries$getQuiver"(): $ItemStack
"supplementaries$hasQuiver"(): boolean
"supplementaries$setQuiver"(itemStack0: $ItemStack$$Type): void
}

export namespace $IQuiverEntity {
const probejs$$marker: never
}
export abstract class $IQuiverEntity$$Static implements $IQuiverEntity {
}
}

