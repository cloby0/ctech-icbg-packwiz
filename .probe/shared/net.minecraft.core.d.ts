declare module "net.minecraft.core.Holder$Kind" {
import { $Enum } from "java.lang.Enum"

export class $Holder$Kind extends $Enum<$Holder$Kind> {
static readonly "DIRECT": $Holder$Kind
static readonly "REFERENCE": $Holder$Kind

public static "valueOf"(string0: string): $Holder$Kind
public static "values"(): $Holder$Kind[]
}
}

declare module "net.minecraft.core.Direction" {
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $Quaternionf } from "org.joml.Quaternionf"
import { $Collection } from "java.util.Collection"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $Direction$AxisDirection, $Direction$AxisDirection$$Type } from "net.minecraft.core.Direction$AxisDirection"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Direction$Axis, $Direction$Axis$$Type } from "net.minecraft.core.Direction$Axis"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Stream } from "java.util.stream.Stream"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $Vec3i } from "net.minecraft.core.Vec3i"
import { $Vector3f } from "org.joml.Vector3f"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"

export class $Direction extends $Enum<$Direction> implements $StringRepresentable {
static readonly "BY_3D_DATA": $Direction[]
static readonly "CODEC": $StringRepresentable$EnumCodec<$Direction>
static readonly "DOWN": $Direction
static readonly "EAST": $Direction
static readonly "NORTH": $Direction
static readonly "SOUTH": $Direction
static readonly "UP": $Direction
static readonly "VERTICAL_CODEC": $Codec<$Direction>
static readonly "WEST": $Direction

public static "allShuffled"(randomSource0: $RandomSource$$Type): $Collection<$Direction>
public static "byName"(string0: string): $Direction
public static "from2DDataValue"(int0: integer): $Direction
public static "from3DDataValue"(int0: integer): $Direction
public static "fromAxisAndDirection"(axis0: $Direction$Axis$$Type, axisDirection1: $Direction$AxisDirection$$Type): $Direction
public static "fromDelta"(int0: integer, int1: integer, int2: integer): $Direction
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public static "fromYRot"(double0: double): $Direction
public static "get"(axisDirection0: $Direction$AxisDirection$$Type, axis1: $Direction$Axis$$Type): $Direction
public "getAxis"(): $Direction$Axis
public "getAxisDirection"(): $Direction$AxisDirection
public "getClockWise"(axis0: $Direction$Axis$$Type): $Direction
public "getClockWise"(): $Direction
public "getCounterClockWise"(axis0: $Direction$Axis$$Type): $Direction
public "getCounterClockWise"(): $Direction
public static "getFacingAxis"(entity0: $Entity$$Type, axis1: $Direction$Axis$$Type): $Direction
public "getHorizontalIndex"(): integer
public "getIndex"(): integer
public "getName"(): string
public static "getNearest"(float0: float, float1: float, float2: float): $Direction
public static "getNearest"(double0: double, double1: double, double2: double): $Direction
public "getNormal"(): $Vec3i
public "getOpposite"(): $Direction
public "getPitch"(): float
public static "getRandom"(randomSource0: $RandomSource$$Type): $Direction
public "getRotation"(): $Quaternionf
public "getSerializedName"(): string
public "getX"(): integer
public "getY"(): integer
public "getYaw"(): float
public "getZ"(): integer
public "isFacingAngle"(float0: float): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "orderedByNearest"(entity0: $Entity$$Type): $Direction[]
public static "rotate"(matrix4f0: $Matrix4f$$Type, direction1: $Direction$$Type): $Direction
public "step"(): $Vector3f
public static "stream"(): $Stream<$Direction>
public static "valueOf"(string0: string): $Direction
public static "values"(): $Direction[]
get "axis"(): $Direction$Axis
get "axisDirection"(): $Direction$AxisDirection
get "clockWise"(): $Direction
get "counterClockWise"(): $Direction
get "horizontalIndex"(): integer
get "index"(): integer
get "name"(): string
get "normal"(): $Vec3i
get "opposite"(): $Direction
get "pitch"(): float
get "rotation"(): $Quaternionf
get "serializedName"(): string
get "x"(): integer
get "y"(): integer
get "yaw"(): float
get "z"(): integer
}
}

declare module "net.minecraft.core.HolderSet" {
import { $Either } from "com.mojang.datafixers.util.Either"
import { $HolderSet$Named } from "net.minecraft.core.HolderSet$Named"
import { $Iterator } from "java.util.Iterator"
import { $HolderSet$Direct } from "net.minecraft.core.HolderSet$Direct"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $IForgeHolderSet } from "net.minecraftforge.common.extensions.IForgeHolderSet"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $Function$$Type } from "java.util.function.Function"
import { $Iterable } from "java.lang.Iterable"
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $HolderOwner$$Type } from "net.minecraft.core.HolderOwner"
import { $List, $List$$Type } from "java.util.List"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Stream } from "java.util.stream.Stream"
import { $Optional } from "java.util.Optional"
import { $IForgeHolderSet$SerializationType } from "net.minecraftforge.common.extensions.IForgeHolderSet$SerializationType"
import { $Spliterator } from "java.util.Spliterator"

export interface $HolderSet<T = any> extends $Iterable<$Holder<T>>, $IForgeHolderSet<T> {
"addInvalidationListener"(runnable0: $Runnable$$Type): void
"canSerializeIn"(holderOwner0: $HolderOwner$$Type<T>): boolean
"contains"(holder0: $Holder$$Type<T>): boolean
"forEach"(consumer0: $Consumer$$Type<$Holder$$Type<T>>): void
"get"(int0: integer): $Holder<T>
"getRandomElement"(randomSource0: $RandomSource$$Type): $Optional<$Holder<T>>
"iterator"(): $Iterator<$Holder<T>>
"serializationType"(): $IForgeHolderSet$SerializationType
"size"(): integer
"spliterator"(): $Spliterator<$Holder<T>>
"stream"(): $Stream<$Holder<T>>
"unwrap"(): $Either<$TagKey<T>, $List<$Holder<T>>>
"unwrapKey"(): $Optional<$TagKey<T>>
[Symbol.iterator](): IterableIterator<$Holder<T>>;
}

export namespace $HolderSet {
function direct<T>(...holder0s: $Holder$$Type<T>[]): $HolderSet$Direct<T>
function direct<T>(list0: $List$$Type<$Holder$$Type<T>>): $HolderSet$Direct<T>
function direct<E, T>(function0: $Function$$Type<E, $Holder<T>>, ...e1s: E[]): $HolderSet$Direct<T>
function direct<E, T>(function0: $Function$$Type<E, $Holder<T>>, list1: $List$$Type<E>): $HolderSet$Direct<T>
function emptyNamed<T>(holderOwner0: $HolderOwner$$Type<T>, tagKey1: $TagKey$$Type<T>): $HolderSet$Named<T>
}
export abstract class $HolderSet$$Static<T = any> implements $HolderSet<T> {
static "direct"<T>(...holder0s: $Holder$$Type<T>[]): $HolderSet$Direct<T>
static "direct"<T>(list0: $List$$Type<$Holder$$Type<T>>): $HolderSet$Direct<T>
static "direct"<E, T>(function0: $Function$$Type<E, $Holder<T>>, ...e1s: E[]): $HolderSet$Direct<T>
static "direct"<E, T>(function0: $Function$$Type<E, $Holder<T>>, list1: $List$$Type<E>): $HolderSet$Direct<T>
/** @deprecated */
static "emptyNamed"<T>(holderOwner0: $HolderOwner$$Type<T>, tagKey1: $TagKey$$Type<T>): $HolderSet$Named<T>
}
}

declare module "net.minecraft.core.BlockPos" {
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Position$$Type } from "net.minecraft.core.Position"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $Iterable } from "java.lang.Iterable"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $Direction$Axis$$Type } from "net.minecraft.core.Direction$Axis"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $Vec3i, $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $BoundingBox$$Type } from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import { $Optional } from "java.util.Optional"
import { $BlockPos$MutableBlockPos } from "net.minecraft.core.BlockPos$MutableBlockPos"

export class $BlockPos extends $Vec3i {
static readonly "CODEC": $Codec<$BlockPos>
static readonly "PACKED_Y_LENGTH": integer
static readonly "ZERO": $BlockPos

constructor(vec3i0: $Vec3i$$Type)
constructor(int0: integer, int1: integer, int2: integer)

public static "asLong"(int0: integer, int1: integer, int2: integer): long
public "asLong"(): long
public "atY"(int0: integer): $BlockPos
public "below"(int0: integer): $BlockPos
public static "betweenClosed"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): $Iterable<$BlockPos>
public static "betweenClosed"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): $Iterable<$BlockPos>
public static "betweenClosedStream"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): $Stream<$BlockPos>
public static "betweenClosedStream"(boundingBox0: $BoundingBox$$Type): $Stream<$BlockPos>
public static "betweenClosedStream"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): $Stream<$BlockPos>
public static "betweenClosedStream"(aABB0: $AABB$$Type): $Stream<$BlockPos>
public static "breadthFirstTraversal"(blockPos0: $BlockPos$$Type, int1: integer, int2: integer, biConsumer3: $BiConsumer$$Type<$BlockPos$$Type, $Consumer$$Type<$BlockPos$$Type>>, predicate4: $Predicate$$Type<$BlockPos$$Type>): integer
public static "containing"(double0: double, double1: double, double2: double): $BlockPos
public static "containing"(position0: $Position$$Type): $BlockPos
public "east"(): $BlockPos
public static "findClosestMatch"(blockPos0: $BlockPos$$Type, int1: integer, int2: integer, predicate3: $Predicate$$Type<$BlockPos$$Type>): $Optional<$BlockPos>
public "getCenter"(): $Vec3
public static "getFlatIndex"(long0: long): long
public static "getX"(long0: long): integer
public static "getY"(long0: long): integer
public static "getZ"(long0: long): integer
public "immutable"(): $BlockPos
public "multiply"(int0: integer): $BlockPos
public "mutable"(): $BlockPos$MutableBlockPos
public "north"(int0: integer): $BlockPos
public "north"(): $BlockPos
public static "of"(long0: long): $BlockPos
public static "offset"(long0: long, direction1: $Direction$$Type): long
public static "offset"(long0: long, int1: integer, int2: integer, int3: integer): long
public static "randomBetweenClosed"(randomSource0: $RandomSource$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer): $Iterable<$BlockPos>
public static "randomInCube"(randomSource0: $RandomSource$$Type, int1: integer, blockPos2: $BlockPos$$Type, int3: integer): $Iterable<$BlockPos>
public "relative"(axis0: $Direction$Axis$$Type, int1: integer): $BlockPos
public "relative"(direction0: $Direction$$Type): $BlockPos
public "rotate"(rotation0: $Rotation$$Type): $BlockPos
public "south"(): $BlockPos
public static "spiralAround"(blockPos0: $BlockPos$$Type, int1: integer, direction2: $Direction$$Type, direction3: $Direction$$Type): $Iterable<$BlockPos$MutableBlockPos>
/** @deprecated */
public static "squareOutSouthEast"(blockPos0: $BlockPos$$Type): $Stream<$BlockPos>
public "west"(int0: integer): $BlockPos
public "west"(): $BlockPos
public static "withinManhattan"(blockPos0: $BlockPos$$Type, int1: integer, int2: integer, int3: integer): $Iterable<$BlockPos>
public static "withinManhattanStream"(blockPos0: $BlockPos$$Type, int1: integer, int2: integer, int3: integer): $Stream<$BlockPos>
get "center"(): $Vec3
}
}

declare module "net.minecraft.core.AxisCycle" {
import { $Direction$Axis, $Direction$Axis$$Type } from "net.minecraft.core.Direction$Axis"
import { $Enum } from "java.lang.Enum"

export class $AxisCycle extends $Enum<$AxisCycle> {
static readonly "AXIS_VALUES": $Direction$Axis[]
static readonly "BACKWARD": $AxisCycle
static readonly "FORWARD": $AxisCycle
static readonly "NONE": $AxisCycle
static readonly "VALUES": $AxisCycle[]

public static "between"(axis0: $Direction$Axis$$Type, axis1: $Direction$Axis$$Type): $AxisCycle
public "cycle"(int0: integer, int1: integer, int2: integer, axis3: $Direction$Axis$$Type): integer
public "cycle"(axis0: $Direction$Axis$$Type): $Direction$Axis
public "cycle"(double0: double, double1: double, double2: double, axis3: $Direction$Axis$$Type): double
public "inverse"(): $AxisCycle
public static "valueOf"(string0: string): $AxisCycle
public static "values"(): $AxisCycle[]
}
}

declare module "net.minecraft.core.HolderGetter$Provider" {
import { $Registry } from "net.minecraft.core.Registry"
import { $Optional } from "java.util.Optional"
import { $HolderGetter } from "net.minecraft.core.HolderGetter"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export interface $HolderGetter$Provider {
"lookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $Optional<$HolderGetter<T>>
"lookupOrThrow"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderGetter<T>
}

export namespace $HolderGetter$Provider {
const probejs$$marker: never
}
export abstract class $HolderGetter$Provider$$Static implements $HolderGetter$Provider {
}
}

declare module "net.minecraft.core.particles.DustParticleOptions" {
import { $DustParticleOptionsBase } from "net.minecraft.core.particles.DustParticleOptionsBase"
import { $ParticleOptions$Deserializer } from "net.minecraft.core.particles.ParticleOptions$Deserializer"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $ParticleType } from "net.minecraft.core.particles.ParticleType"

export class $DustParticleOptions extends $DustParticleOptionsBase {
static readonly "CODEC": $Codec<$DustParticleOptions>
static readonly "DESERIALIZER": $ParticleOptions$Deserializer<$DustParticleOptions>
static readonly "REDSTONE": $DustParticleOptions
static readonly "REDSTONE_PARTICLE_COLOR": $Vector3f

constructor(vector3f0: $Vector3f$$Type, float1: float)

public "getType"(): $ParticleType<$DustParticleOptions>
get "type"(): $ParticleType<$DustParticleOptions>
}
}

declare module "net.minecraft.core.HolderSet$Direct" {
import { $Either } from "com.mojang.datafixers.util.Either"
import { $HolderSet$Named } from "net.minecraft.core.HolderSet$Named"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $Function$$Type } from "java.util.function.Function"
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List, $List$$Type } from "java.util.List"
import { $HolderOwner$$Type } from "net.minecraft.core.HolderOwner"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Optional } from "java.util.Optional"
import { $IForgeHolderSet$SerializationType } from "net.minecraftforge.common.extensions.IForgeHolderSet$SerializationType"
import { $HolderSet$ListBacked } from "net.minecraft.core.HolderSet$ListBacked"

export class $HolderSet$Direct<T = any> extends $HolderSet$ListBacked<T> {
public "addInvalidationListener"(runnable0: $Runnable$$Type): void
public "contains"(holder0: $Holder$$Type<T>): boolean
public static "direct"<T>(...holder0s: $Holder$$Type<T>[]): $HolderSet$Direct<T>
public static "direct"<T>(list0: $List$$Type<$Holder$$Type<T>>): $HolderSet$Direct<T>
public static "direct"<E, T>(function0: $Function$$Type<E, $Holder<T>>, ...e1s: E[]): $HolderSet$Direct<T>
public static "direct"<E, T>(function0: $Function$$Type<E, $Holder<T>>, list1: $List$$Type<E>): $HolderSet$Direct<T>
/** @deprecated */
public static "emptyNamed"<T>(holderOwner0: $HolderOwner$$Type<T>, tagKey1: $TagKey$$Type<T>): $HolderSet$Named<T>
public "forEach"(consumer0: $Consumer$$Type<$Holder$$Type<T>>): void
public "serializationType"(): $IForgeHolderSet$SerializationType
public "unwrap"(): $Either<$TagKey<T>, $List<$Holder<T>>>
public "unwrapKey"(): $Optional<$TagKey<T>>
}
}

declare module "net.minecraft.core.Holder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ITag$$Type } from "net.minecraftforge.registries.tags.ITag"
import { $Either } from "com.mojang.datafixers.util.Either"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Holder$Kind } from "net.minecraft.core.Holder$Kind"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Supplier } from "java.util.function.Supplier"
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $HolderOwner$$Type } from "net.minecraft.core.HolderOwner"
import { $Stream } from "java.util.stream.Stream"
import { $IReverseTag } from "net.minecraftforge.registries.tags.IReverseTag"
import { $Optional } from "java.util.Optional"

export interface $Holder<T = any> extends $Supplier<T>, $IReverseTag<T> {
"canSerializeIn"(holderOwner0: $HolderOwner$$Type<T>): boolean
"containsTag"(tagKey0: $TagKey$$Type<T>): boolean
"containsTag"(iTag0: $ITag$$Type<T>): boolean
"get"(): T
"getTagKeys"(): $Stream<$TagKey<T>>
"is"(resourceLocation0: $ResourceLocation$$Type): boolean
"is"(resourceKey0: $ResourceKey$$Type<T>): boolean
"is"(predicate0: $Predicate$$Type<$ResourceKey$$Type<T>>): boolean
"is"(tagKey0: $TagKey$$Type<T>): boolean
"isBound"(): boolean
"kind"(): $Holder$Kind
"tags"(): $Stream<$TagKey<T>>
"unwrap"(): $Either<$ResourceKey<T>, T>
"unwrapKey"(): $Optional<$ResourceKey<T>>
"value"(): T
get "tagKeys"(): $Stream<$TagKey<T>>
get "bound"(): boolean
}

export namespace $Holder {
function direct<T>(t0: T): $Holder<T>
}
export abstract class $Holder$$Static<T = any> implements $Holder<T> {
static "direct"<T>(t0: T): $Holder<T>
}
}

declare module "net.minecraft.core.RegistryAccess$Frozen" {
import { $Registry, $Registry$$Type } from "net.minecraft.core.Registry"
import { $HolderLookup$RegistryLookup, $HolderLookup$RegistryLookup$$Type } from "net.minecraft.core.HolderLookup$RegistryLookup"
import { $Stream, $Stream$$Type } from "java.util.stream.Stream"
import { $Optional } from "java.util.Optional"
import { $RegistryAccess$RegistryEntry } from "net.minecraft.core.RegistryAccess$RegistryEntry"
import { $Lifecycle } from "com.mojang.serialization.Lifecycle"
import { $HolderLookup$Provider } from "net.minecraft.core.HolderLookup$Provider"
import { $RegistryAccess } from "net.minecraft.core.RegistryAccess"
import { $HolderGetter$Provider } from "net.minecraft.core.HolderGetter$Provider"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export interface $RegistryAccess$Frozen extends $RegistryAccess {
"allRegistriesLifecycle"(): $Lifecycle
"asGetterLookup"(): $HolderGetter$Provider
"freeze"(): $RegistryAccess$Frozen
"lookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $Optional<$HolderLookup$RegistryLookup<T>>
"lookupOrThrow"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderLookup$RegistryLookup<T>
"registries"(): $Stream<$RegistryAccess$RegistryEntry<any>>
"registry"<E>(resourceKey0: $ResourceKey$$Type<$Registry<E>>): $Optional<$Registry<E>>
"registryOrThrow"<E>(resourceKey0: $ResourceKey$$Type<$Registry<E>>): $Registry<E>
}

export namespace $RegistryAccess$Frozen {
function create(stream0: $Stream$$Type<$HolderLookup$RegistryLookup$$Type<any>>): $HolderLookup$Provider
function fromRegistryOfRegistries(registry0: $Registry$$Type<$Registry$$Type<any>>): $RegistryAccess$Frozen
}
export abstract class $RegistryAccess$Frozen$$Static implements $RegistryAccess$Frozen {
static "create"(stream0: $Stream$$Type<$HolderLookup$RegistryLookup$$Type<any>>): $HolderLookup$Provider
static "fromRegistryOfRegistries"(registry0: $Registry$$Type<$Registry$$Type<any>>): $RegistryAccess$Frozen
}
}

declare module "net.minecraft.core.MappedRegistry" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $HolderSet$Named } from "net.minecraft.core.HolderSet$Named"
import { $IdMap } from "net.minecraft.core.IdMap"
import { $HolderGetter } from "net.minecraft.core.HolderGetter"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Iterable } from "java.lang.Iterable"
import { $Registry, $Registry$$Type } from "net.minecraft.core.Registry"
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $HolderLookup$RegistryLookup } from "net.minecraft.core.HolderLookup$RegistryLookup"
import { $HolderOwner } from "net.minecraft.core.HolderOwner"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $DynamicOps$$Type } from "com.mojang.serialization.DynamicOps"
import { $Map$$Type } from "java.util.Map"
import { $Map$Entry } from "java.util.Map$Entry"
import { $Iterator } from "java.util.Iterator"
import { $Set } from "java.util.Set"
import { $WritableRegistry } from "net.minecraft.core.WritableRegistry"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $Lifecycle, $Lifecycle$$Type } from "com.mojang.serialization.Lifecycle"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Pair } from "com.mojang.datafixers.util.Pair"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $Optional } from "java.util.Optional"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Spliterator } from "java.util.Spliterator"

export class $MappedRegistry<T = any> implements $WritableRegistry<T>, $Registry {
constructor(resourceKey0: $ResourceKey$$Type<$Registry<T>>, lifecycle1: $Lifecycle$$Type, boolean2: boolean)
constructor(resourceKey0: $ResourceKey$$Type<$Registry<T>>, lifecycle1: $Lifecycle$$Type)

public "asHolderIdMap"(): $IdMap<$Holder<T>>
public "asLookup"(): $HolderLookup$RegistryLookup<T>
public "asTagAddingLookup"(): $HolderLookup$RegistryLookup<T>
public "bindTags"(map0: $Map$$Type<$TagKey$$Type<T>, $List$$Type<$Holder$$Type<T>>>): void
public "byId"(int0: integer): T
public "byIdOrThrow"(int0: integer): T
public "byNameCodec"(): $Codec<T>
public "containsKey"(resourceLocation0: $ResourceLocation$$Type): boolean
public "containsKey"(resourceKey0: $ResourceKey$$Type<T>): boolean
public "createIntrusiveHolder"(t0: T): $Holder$Reference<T>
public "createRegistrationLookup"(): $HolderGetter<T>
public "entrySet"(): $Set<$Map$Entry<$ResourceKey<T>, T>>
public "forEach"(consumer0: $Consumer$$Type<T>): void
public static "forStrings"(supplier0: $Supplier$$Type<$Stream<string>>): $Keyable
public "freeze"(): $Registry<T>
public "get"(resourceKey0: $ResourceKey$$Type<T>): T
public "get"(resourceLocation0: $ResourceLocation$$Type): T
public "getHolder"(int0: integer): $Optional<$Holder$Reference<T>>
public "getHolder"(resourceKey0: $ResourceKey$$Type<T>): $Optional<$Holder$Reference<T>>
public "getHolderOrThrow"(resourceKey0: $ResourceKey$$Type<T>): $Holder$Reference<T>
public "getId"(t0: T): integer
public "getKey"(t0: T): $ResourceLocation
public static "getKnownRegistries"(): $Set<$ResourceLocation>
public "getOptional"(resourceKey0: $ResourceKey$$Type<T>): $Optional<T>
public "getOptional"(resourceLocation0: $ResourceLocation$$Type): $Optional<T>
public "getOrCreateTag"(tagKey0: $TagKey$$Type): $HolderSet$Named
public "getOrThrow"(resourceKey0: $ResourceKey$$Type<T>): T
public "getRandom"(randomSource0: $RandomSource$$Type): $Optional<$Holder$Reference<T>>
public "getResourceKey"(t0: T): $Optional<$ResourceKey<T>>
public "getTag"(tagKey0: $TagKey$$Type<T>): $Optional<$HolderSet$Named<T>>
public "getTagNames"(): $Stream<$TagKey<T>>
public "getTagOrEmpty"(tagKey0: $TagKey$$Type<T>): $Iterable<$Holder<T>>
public "getTags"(): $Stream<$Pair<$TagKey<T>, $HolderSet$Named<T>>>
public "holderByNameCodec"(): $Codec<$Holder<T>>
public "holderOwner"(): $HolderOwner<T>
public "holders"(): $Stream<$Holder$Reference<T>>
public "isEmpty"(): boolean
public "iterator"(): $Iterator<T>
public "key"(): $ResourceKey<$Registry<T>>
public "keySet"(): $Set<$ResourceLocation>
public "keys"<U>(dynamicOps0: $DynamicOps$$Type<U>): $Stream<U>
public "lifecycle"(t0: T): $Lifecycle
public "register"(resourceKey0: $ResourceKey$$Type<T>, t1: T, lifecycle2: $Lifecycle$$Type): $Holder$Reference<T>
public static "register"<T>(registry0: $Registry$$Type<T>, string1: string, t2: T): T
public static "register"<V, T extends V>(registry0: $Registry$$Type<V>, resourceKey1: $ResourceKey$$Type<V>, t2: T): T
public static "register"<V, T extends V>(registry0: $Registry$$Type<V>, resourceLocation1: $ResourceLocation$$Type, t2: T): T
public static "registerForHolder"<T>(registry0: $Registry$$Type<T>, resourceKey1: $ResourceKey$$Type<T>, t2: T): $Holder$Reference<T>
public static "registerForHolder"<T>(registry0: $Registry$$Type<T>, resourceLocation1: $ResourceLocation$$Type, t2: T): $Holder$Reference<T>
public static "registerMapping"<V, T extends V>(registry0: $Registry$$Type<V>, int1: integer, string2: string, t3: T): T
public "registryKeySet"(): $Set<$ResourceKey<T>>
public "registryLifecycle"(): $Lifecycle
public "resetTags"(): void
public "size"(): integer
public "spliterator"(): $Spliterator<T>
public "stream"(): $Stream<T>
/** @deprecated */
public "unfreeze"(): void
public "wrapAsHolder"(t0: T): $Holder<T>
[Symbol.iterator](): IterableIterator<T>;
get "tagNames"(): $Stream<$TagKey<T>>
get "tags"(): $Stream<$Pair<$TagKey<T>, $HolderSet$Named<T>>>
get "empty"(): boolean
}
}

declare module "net.minecraft.core.BlockSourceImpl" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockSource } from "net.minecraft.core.BlockSource"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $ServerLevel, $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export class $BlockSourceImpl implements $BlockSource {
constructor(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type)

public "getBlockState"(): $BlockState
public "getEntity"<T extends $BlockEntity>(): T
public "getLevel"(): $ServerLevel
public "getPos"(): $BlockPos
public "x"(): double
public "y"(): double
public "z"(): double
get "blockState"(): $BlockState
get "entity"(): T
get "level"(): $ServerLevel
get "pos"(): $BlockPos
}
}

declare module "net.minecraft.core.cauldron.CauldronInteraction" {
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Object2ObjectOpenHashMap } from "it.unimi.dsi.fastutil.objects.Object2ObjectOpenHashMap"
import { $Map, $Map$$Type } from "java.util.Map"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $CauldronInteraction {
"interact"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, interactionHand4: $InteractionHand$$Type, itemStack5: $ItemStack$$Type): $InteractionResult
}

export namespace $CauldronInteraction {
const BANNER: $CauldronInteraction
const DYED_ITEM: $CauldronInteraction
const EMPTY: $Map<$Item, $CauldronInteraction>
const FILL_LAVA: $CauldronInteraction
const FILL_POWDER_SNOW: $CauldronInteraction
const FILL_WATER: $CauldronInteraction
const LAVA: $Map<$Item, $CauldronInteraction>
const POWDER_SNOW: $Map<$Item, $CauldronInteraction>
const SHULKER_BOX: $CauldronInteraction
const WATER: $Map<$Item, $CauldronInteraction>
function addDefaultInteractions(map0: $Map$$Type<$Item$$Type, $CauldronInteraction$$Type>): void
function bootStrap(): void
function emptyBucket(level0: $Level$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type, interactionHand3: $InteractionHand$$Type, itemStack4: $ItemStack$$Type, blockState5: $BlockState$$Type, soundEvent6: $SoundEvent$$Type): $InteractionResult
function fillBucket(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, interactionHand4: $InteractionHand$$Type, itemStack5: $ItemStack$$Type, itemStack6: $ItemStack$$Type, predicate7: $Predicate$$Type<$BlockState$$Type>, soundEvent8: $SoundEvent$$Type): $InteractionResult
function newInteractionMap(): $Object2ObjectOpenHashMap<$Item, $CauldronInteraction>
}
export abstract class $CauldronInteraction$$Static implements $CauldronInteraction {
static readonly "BANNER": $CauldronInteraction
static readonly "DYED_ITEM": $CauldronInteraction
static readonly "EMPTY": $Map<$Item, $CauldronInteraction>
static readonly "FILL_LAVA": $CauldronInteraction
static readonly "FILL_POWDER_SNOW": $CauldronInteraction
static readonly "FILL_WATER": $CauldronInteraction
static readonly "LAVA": $Map<$Item, $CauldronInteraction>
static readonly "POWDER_SNOW": $Map<$Item, $CauldronInteraction>
static readonly "SHULKER_BOX": $CauldronInteraction
static readonly "WATER": $Map<$Item, $CauldronInteraction>

static "addDefaultInteractions"(map0: $Map$$Type<$Item$$Type, $CauldronInteraction$$Type>): void
static "bootStrap"(): void
static "emptyBucket"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type, interactionHand3: $InteractionHand$$Type, itemStack4: $ItemStack$$Type, blockState5: $BlockState$$Type, soundEvent6: $SoundEvent$$Type): $InteractionResult
static "fillBucket"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, interactionHand4: $InteractionHand$$Type, itemStack5: $ItemStack$$Type, itemStack6: $ItemStack$$Type, predicate7: $Predicate$$Type<$BlockState$$Type>, soundEvent8: $SoundEvent$$Type): $InteractionResult
static "newInteractionMap"(): $Object2ObjectOpenHashMap<$Item, $CauldronInteraction>
}
}

declare module "net.minecraft.core.RegistryAccess" {
import { $Registry, $Registry$$Type } from "net.minecraft.core.Registry"
import { $HolderLookup$RegistryLookup, $HolderLookup$RegistryLookup$$Type } from "net.minecraft.core.HolderLookup$RegistryLookup"
import { $Logger } from "org.slf4j.Logger"
import { $Stream, $Stream$$Type } from "java.util.stream.Stream"
import { $RegistryAccess$Frozen } from "net.minecraft.core.RegistryAccess$Frozen"
import { $Optional } from "java.util.Optional"
import { $RegistryAccess$RegistryEntry } from "net.minecraft.core.RegistryAccess$RegistryEntry"
import { $Lifecycle } from "com.mojang.serialization.Lifecycle"
import { $HolderLookup$Provider } from "net.minecraft.core.HolderLookup$Provider"
import { $HolderGetter$Provider } from "net.minecraft.core.HolderGetter$Provider"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export interface $RegistryAccess extends $HolderLookup$Provider {
"allRegistriesLifecycle"(): $Lifecycle
"asGetterLookup"(): $HolderGetter$Provider
"freeze"(): $RegistryAccess$Frozen
"lookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $Optional<$HolderLookup$RegistryLookup<T>>
"lookupOrThrow"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderLookup$RegistryLookup<T>
"registries"(): $Stream<$RegistryAccess$RegistryEntry<any>>
"registry"<E>(resourceKey0: $ResourceKey$$Type<$Registry<E>>): $Optional<$Registry<E>>
"registryOrThrow"<E>(resourceKey0: $ResourceKey$$Type<$Registry<E>>): $Registry<E>
}

export namespace $RegistryAccess {
const EMPTY: $RegistryAccess$Frozen
const LOGGER: $Logger
function create(stream0: $Stream$$Type<$HolderLookup$RegistryLookup$$Type<any>>): $HolderLookup$Provider
function fromRegistryOfRegistries(registry0: $Registry$$Type<$Registry$$Type<any>>): $RegistryAccess$Frozen
}
export abstract class $RegistryAccess$$Static implements $RegistryAccess {
static readonly "EMPTY": $RegistryAccess$Frozen
static readonly "LOGGER": $Logger

static "create"(stream0: $Stream$$Type<$HolderLookup$RegistryLookup$$Type<any>>): $HolderLookup$Provider
static "fromRegistryOfRegistries"(registry0: $Registry$$Type<$Registry$$Type<any>>): $RegistryAccess$Frozen
}
}

declare module "net.minecraft.core.Direction$Axis" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $Direction$Plane } from "net.minecraft.core.Direction$Plane"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $Direction$Axis extends $Enum<$Direction$Axis> implements $StringRepresentable, $Predicate<$Direction> {
static readonly "CODEC": $StringRepresentable$EnumCodec<$Direction$Axis>
static readonly "VALUES": $Direction$Axis[]
static readonly "X": $Direction$Axis
static readonly "Y": $Direction$Axis
static readonly "Z": $Direction$Axis

public "and"(predicate0: $Predicate$$Type<$Direction$$Type>): $Predicate<$Direction>
public static "byName"(string0: string): $Direction$Axis
public "choose"(int0: integer, int1: integer, int2: integer): integer
public "choose"(double0: double, double1: double, double2: double): double
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getName"(): string
public "getPlane"(): $Direction$Plane
public static "getRandom"(randomSource0: $RandomSource$$Type): $Direction$Axis
public "getSerializedName"(): string
public static "isEqual"<T>(object0: any): $Predicate<T>
public "isHorizontal"(): boolean
public "isVertical"(): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "negate"(): $Predicate<$Direction>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public "or"(predicate0: $Predicate$$Type<$Direction$$Type>): $Predicate<$Direction>
public "test"(direction0: $Direction$$Type): boolean
public static "valueOf"(string0: string): $Direction$Axis
public static "values"(): $Direction$Axis[]
get "name"(): string
get "plane"(): $Direction$Plane
get "serializedName"(): string
get "horizontal"(): boolean
get "vertical"(): boolean
}
}

declare module "net.minecraft.core.HolderLookup$RegistryLookup" {
import { $HolderSet$Named } from "net.minecraft.core.HolderSet$Named"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $HolderLookup } from "net.minecraft.core.HolderLookup"
import { $Lifecycle } from "com.mojang.serialization.Lifecycle"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $Registry } from "net.minecraft.core.Registry"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $HolderOwner, $HolderOwner$$Type } from "net.minecraft.core.HolderOwner"
import { $Stream } from "java.util.stream.Stream"
import { $Optional } from "java.util.Optional"

export interface $HolderLookup$RegistryLookup<T = any> extends $HolderLookup<T>, $HolderOwner<T> {
"canSerializeIn"(holderOwner0: $HolderOwner$$Type<T>): boolean
"filterElements"(predicate0: $Predicate$$Type<T>): $HolderLookup<T>
"filterFeatures"(featureFlagSet0: $FeatureFlagSet$$Type): $HolderLookup<T>
"get"(resourceKey0: $ResourceKey$$Type<T>): $Optional<$Holder$Reference<T>>
"get"(tagKey0: $TagKey$$Type<T>): $Optional<$HolderSet$Named<T>>
"getOrThrow"(resourceKey0: $ResourceKey$$Type<T>): $Holder$Reference<T>
"getOrThrow"(tagKey0: $TagKey$$Type<T>): $HolderSet$Named<T>
"key"(): $ResourceKey<$Registry<T>>
"listElementIds"(): $Stream<$ResourceKey<T>>
"listElements"(): $Stream<$Holder$Reference<T>>
"listTagIds"(): $Stream<$TagKey<T>>
"listTags"(): $Stream<$HolderSet$Named<T>>
"registryLifecycle"(): $Lifecycle
}

export namespace $HolderLookup$RegistryLookup {
const probejs$$marker: never
}
export abstract class $HolderLookup$RegistryLookup$$Static<T = any> implements $HolderLookup$RegistryLookup<T> {
}
}

declare module "net.minecraft.core.IdMap" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Iterator } from "java.util.Iterator"
import { $Spliterator } from "java.util.Spliterator"
import { $Iterable } from "java.lang.Iterable"

export interface $IdMap<T = any> extends $Iterable<T> {
"byId"(int0: integer): T
"byIdOrThrow"(int0: integer): T
"forEach"(consumer0: $Consumer$$Type<T>): void
"getId"(t0: T): integer
"iterator"(): $Iterator<T>
"size"(): integer
"spliterator"(): $Spliterator<T>
[Symbol.iterator](): IterableIterator<T>;
}

export namespace $IdMap {
const DEFAULT: integer
}
export abstract class $IdMap$$Static<T = any> implements $IdMap<T> {
static readonly "DEFAULT": integer

}
}

declare module "net.minecraft.core.particles.DustParticleOptionsBase" {
import { $ParticleOptions } from "net.minecraft.core.particles.ParticleOptions"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $ParticleType } from "net.minecraft.core.particles.ParticleType"
import { $StringReader$$Type } from "com.mojang.brigadier.StringReader"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $DustParticleOptionsBase implements $ParticleOptions {
static readonly "MAX_SCALE": float
static readonly "MIN_SCALE": float

constructor(vector3f0: $Vector3f$$Type, float1: float)

public "getColor"(): $Vector3f
public "getScale"(): float
public "getType"(): $ParticleType<any>
public static "readVector3f"(stringReader0: $StringReader$$Type): $Vector3f
public static "readVector3f"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $Vector3f
public "writeToNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "writeToString"(): string
get "color"(): $Vector3f
get "scale"(): float
get "type"(): $ParticleType<any>
}
}

declare module "net.minecraft.core.particles.SimpleParticleType" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $ParticleOptions } from "net.minecraft.core.particles.ParticleOptions"
import { $ParticleType } from "net.minecraft.core.particles.ParticleType"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $SimpleParticleType extends $ParticleType<$SimpleParticleType> implements $ParticleOptions {
constructor(boolean0: boolean)

public "codec"(): $Codec<$SimpleParticleType>
public "writeToNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "writeToString"(): string
}
}

declare module "net.minecraft.core.Vec3i" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Direction$Axis$$Type } from "net.minecraft.core.Direction$Axis"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Position$$Type } from "net.minecraft.core.Position"
import { $Comparable } from "java.lang.Comparable"

export class $Vec3i implements $Comparable<$Vec3i> {
static readonly "CODEC": $Codec<$Vec3i>
static readonly "ZERO": $Vec3i

constructor(int0: integer, int1: integer, int2: integer)

public "above"(int0: integer): $Vec3i
public "above"(): $Vec3i
public "below"(int0: integer): $Vec3i
public "below"(): $Vec3i
public "closerThan"(vec3i0: $Vec3i$$Type, double1: double): boolean
public "closerToCenterThan"(position0: $Position$$Type, double1: double): boolean
public "compareTo"(vec3i0: $Vec3i$$Type): integer
public "cross"(vec3i0: $Vec3i$$Type): $Vec3i
public "distManhattan"(vec3i0: $Vec3i$$Type): integer
public "distSqr"(vec3i0: $Vec3i$$Type): double
public "distToCenterSqr"(double0: double, double1: double, double2: double): double
public "distToCenterSqr"(position0: $Position$$Type): double
public "distToLowCornerSqr"(double0: double, double1: double, double2: double): double
public "east"(int0: integer): $Vec3i
public "east"(): $Vec3i
public "get"(axis0: $Direction$Axis$$Type): integer
public "getX"(): integer
public "getY"(): integer
public "getZ"(): integer
public "multiply"(int0: integer): $Vec3i
public "north"(int0: integer): $Vec3i
public "north"(): $Vec3i
public "offset"(vec3i0: $Vec3i$$Type): $Vec3i
public "offset"(int0: integer, int1: integer, int2: integer): $Vec3i
public static "offsetCodec"(int0: integer): $Codec<$Vec3i>
public "relative"(direction0: $Direction$$Type, int1: integer): $Vec3i
public "relative"(axis0: $Direction$Axis$$Type, int1: integer): $Vec3i
public "relative"(direction0: $Direction$$Type): $Vec3i
public "south"(int0: integer): $Vec3i
public "south"(): $Vec3i
public "subtract"(vec3i0: $Vec3i$$Type): $Vec3i
public "toShortString"(): string
public "west"(int0: integer): $Vec3i
public "west"(): $Vec3i
get "x"(): integer
get "y"(): integer
get "z"(): integer
}
}

declare module "net.minecraft.core.BlockPos$MutableBlockPos" {
import { $Direction$Axis$$Type } from "net.minecraft.core.Direction$Axis"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $AxisCycle$$Type } from "net.minecraft.core.AxisCycle"

export class $BlockPos$MutableBlockPos extends $BlockPos {
constructor()
constructor(int0: integer, int1: integer, int2: integer)
constructor(double0: double, double1: double, double2: double)

public "clamp"(axis0: $Direction$Axis$$Type, int1: integer, int2: integer): $BlockPos$MutableBlockPos
public "move"(direction0: $Direction$$Type, int1: integer): $BlockPos$MutableBlockPos
public "move"(int0: integer, int1: integer, int2: integer): $BlockPos$MutableBlockPos
public "move"(vec3i0: $Vec3i$$Type): $BlockPos$MutableBlockPos
public "move"(direction0: $Direction$$Type): $BlockPos$MutableBlockPos
public "set"(double0: double, double1: double, double2: double): $BlockPos$MutableBlockPos
public "set"(vec3i0: $Vec3i$$Type): $BlockPos$MutableBlockPos
public "set"(long0: long): $BlockPos$MutableBlockPos
public "set"(axisCycle0: $AxisCycle$$Type, int1: integer, int2: integer, int3: integer): $BlockPos$MutableBlockPos
public "set"(int0: integer, int1: integer, int2: integer): $BlockPos$MutableBlockPos
public "setWithOffset"(vec3i0: $Vec3i$$Type, int1: integer, int2: integer, int3: integer): $BlockPos$MutableBlockPos
public "setWithOffset"(vec3i0: $Vec3i$$Type, vec3i1: $Vec3i$$Type): $BlockPos$MutableBlockPos
public "setWithOffset"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPos$MutableBlockPos
public "setX"(int0: integer): $BlockPos$MutableBlockPos
public "setZ"(int0: integer): $BlockPos$MutableBlockPos
set "x"(value: integer)
set "z"(value: integer)
}
}

declare module "net.minecraft.core.HolderOwner" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $HolderOwner<T = any> {
"canSerializeIn"(holderOwner0: $HolderOwner$$Type<T>): boolean
}

export namespace $HolderOwner {
const probejs$$marker: never
}
export abstract class $HolderOwner$$Static<T = any> implements $HolderOwner<T> {
}
}

declare module "net.minecraft.core.HolderGetter" {
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $HolderSet$Named } from "net.minecraft.core.HolderSet$Named"
import { $Optional } from "java.util.Optional"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"

export interface $HolderGetter<T = any> {
"get"(resourceKey0: $ResourceKey$$Type<T>): $Optional<$Holder$Reference<T>>
"get"(tagKey0: $TagKey$$Type<T>): $Optional<$HolderSet$Named<T>>
"getOrThrow"(resourceKey0: $ResourceKey$$Type<T>): $Holder$Reference<T>
"getOrThrow"(tagKey0: $TagKey$$Type<T>): $HolderSet$Named<T>
}

export namespace $HolderGetter {
const probejs$$marker: never
}
export abstract class $HolderGetter$$Static<T = any> implements $HolderGetter<T> {
}
}

declare module "net.minecraft.core.Direction$Plane" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $Direction$Axis } from "net.minecraft.core.Direction$Axis"
import { $Stream } from "java.util.stream.Stream"
import { $Iterator } from "java.util.Iterator"
import { $Enum } from "java.lang.Enum"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $Spliterator } from "java.util.Spliterator"
import { $Iterable } from "java.lang.Iterable"

export class $Direction$Plane extends $Enum<$Direction$Plane> implements $Iterable<$Direction>, $Predicate<$Direction> {
static readonly "HORIZONTAL": $Direction$Plane
static readonly "VERTICAL": $Direction$Plane

public "and"(predicate0: $Predicate$$Type<$Direction$$Type>): $Predicate<$Direction>
public "forEach"(consumer0: $Consumer$$Type<$Direction$$Type>): void
public "getRandomAxis"(randomSource0: $RandomSource$$Type): $Direction$Axis
public "getRandomDirection"(randomSource0: $RandomSource$$Type): $Direction
public static "isEqual"<T>(object0: any): $Predicate<T>
public "iterator"(): $Iterator<$Direction>
public "negate"(): $Predicate<$Direction>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public "or"(predicate0: $Predicate$$Type<$Direction$$Type>): $Predicate<$Direction>
public "shuffledCopy"(randomSource0: $RandomSource$$Type): $List<$Direction>
public "spliterator"(): $Spliterator<$Direction>
public "stream"(): $Stream<$Direction>
public "test"(direction0: $Direction$$Type): boolean
public static "valueOf"(string0: string): $Direction$Plane
public static "values"(): $Direction$Plane[]
[Symbol.iterator](): IterableIterator<$Direction>;
}
}

declare module "net.minecraft.core.Holder$Reference$Type" {
import { $Enum } from "java.lang.Enum"

export class $Holder$Reference$Type extends $Enum<$Holder$Reference$Type> {
static readonly "INTRUSIVE": $Holder$Reference$Type
static readonly "STAND_ALONE": $Holder$Reference$Type

public static "valueOf"(string0: string): $Holder$Reference$Type
public static "values"(): $Holder$Reference$Type[]
}
}

declare module "net.minecraft.core.HolderSet$ListBacked" {
import { $Either } from "com.mojang.datafixers.util.Either"
import { $HolderSet$Named } from "net.minecraft.core.HolderSet$Named"
import { $Iterator } from "java.util.Iterator"
import { $HolderSet } from "net.minecraft.core.HolderSet"
import { $HolderSet$Direct } from "net.minecraft.core.HolderSet$Direct"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $Function$$Type } from "java.util.function.Function"
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $HolderOwner$$Type } from "net.minecraft.core.HolderOwner"
import { $List, $List$$Type } from "java.util.List"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Stream } from "java.util.stream.Stream"
import { $Optional } from "java.util.Optional"
import { $IForgeHolderSet$SerializationType } from "net.minecraftforge.common.extensions.IForgeHolderSet$SerializationType"
import { $Spliterator } from "java.util.Spliterator"

export class $HolderSet$ListBacked<T = any> implements $HolderSet<T> {
constructor()

public "addInvalidationListener"(runnable0: $Runnable$$Type): void
public "canSerializeIn"(holderOwner0: $HolderOwner$$Type<T>): boolean
public "contains"(holder0: $Holder$$Type<T>): boolean
public static "direct"<T>(...holder0s: $Holder$$Type<T>[]): $HolderSet$Direct<T>
public static "direct"<T>(list0: $List$$Type<$Holder$$Type<T>>): $HolderSet$Direct<T>
public static "direct"<E, T>(function0: $Function$$Type<E, $Holder<T>>, ...e1s: E[]): $HolderSet$Direct<T>
public static "direct"<E, T>(function0: $Function$$Type<E, $Holder<T>>, list1: $List$$Type<E>): $HolderSet$Direct<T>
/** @deprecated */
public static "emptyNamed"<T>(holderOwner0: $HolderOwner$$Type<T>, tagKey1: $TagKey$$Type<T>): $HolderSet$Named<T>
public "forEach"(consumer0: $Consumer$$Type<$Holder$$Type<T>>): void
public "get"(int0: integer): $Holder<T>
public "getRandomElement"(randomSource0: $RandomSource$$Type): $Optional<$Holder<T>>
public "iterator"(): $Iterator<$Holder<T>>
public "serializationType"(): $IForgeHolderSet$SerializationType
public "size"(): integer
public "spliterator"(): $Spliterator<$Holder<T>>
public "stream"(): $Stream<$Holder<T>>
public "unwrap"(): $Either<$TagKey<T>, $List<$Holder<T>>>
public "unwrapKey"(): $Optional<$TagKey<T>>
[Symbol.iterator](): IterableIterator<$Holder<T>>;
}
}

declare module "net.minecraft.core.dispenser.DispenseItemBehavior" {
import { $Logger } from "org.slf4j.Logger"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockSource$$Type } from "net.minecraft.core.BlockSource"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $DispenseItemBehavior {
"dispense"(blockSource0: $BlockSource$$Type, itemStack1: $ItemStack$$Type): $ItemStack
}

export namespace $DispenseItemBehavior {
const LOGGER: $Logger
const NOOP: $DispenseItemBehavior
function bootStrap(): void
function setEntityPokingOutOfBlock(blockSource0: $BlockSource$$Type, entity1: $Entity$$Type, direction2: $Direction$$Type): void
}
export abstract class $DispenseItemBehavior$$Static implements $DispenseItemBehavior {
static readonly "LOGGER": $Logger
static readonly "NOOP": $DispenseItemBehavior

static "bootStrap"(): void
static "setEntityPokingOutOfBlock"(blockSource0: $BlockSource$$Type, entity1: $Entity$$Type, direction2: $Direction$$Type): void
}
}

declare module "net.minecraft.core.HolderLookup" {
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $Stream } from "java.util.stream.Stream"
import { $HolderSet$Named } from "net.minecraft.core.HolderSet$Named"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Optional } from "java.util.Optional"
import { $HolderGetter } from "net.minecraft.core.HolderGetter"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"

export interface $HolderLookup<T = any> extends $HolderGetter<T> {
"filterElements"(predicate0: $Predicate$$Type<T>): $HolderLookup<T>
"get"(resourceKey0: $ResourceKey$$Type<T>): $Optional<$Holder$Reference<T>>
"get"(tagKey0: $TagKey$$Type<T>): $Optional<$HolderSet$Named<T>>
"getOrThrow"(resourceKey0: $ResourceKey$$Type<T>): $Holder$Reference<T>
"getOrThrow"(tagKey0: $TagKey$$Type<T>): $HolderSet$Named<T>
"listElementIds"(): $Stream<$ResourceKey<T>>
"listElements"(): $Stream<$Holder$Reference<T>>
"listTagIds"(): $Stream<$TagKey<T>>
"listTags"(): $Stream<$HolderSet$Named<T>>
}

export namespace $HolderLookup {
const probejs$$marker: never
}
export abstract class $HolderLookup$$Static<T = any> implements $HolderLookup<T> {
}
}

declare module "net.minecraft.core.Rotations" {
import { $ListTag, $ListTag$$Type } from "net.minecraft.nbt.ListTag"

export class $Rotations {
constructor(float0: float, float1: float, float2: float)
constructor(listTag0: $ListTag$$Type)

public "getWrappedX"(): float
public "getWrappedY"(): float
public "getWrappedZ"(): float
public "getX"(): float
public "getY"(): float
public "getZ"(): float
public "save"(): $ListTag
get "wrappedX"(): float
get "wrappedY"(): float
get "wrappedZ"(): float
get "x"(): float
get "y"(): float
get "z"(): float
}
}

declare module "net.minecraft.core.Direction8" {
import { $Enum } from "java.lang.Enum"
import { $Direction } from "net.minecraft.core.Direction"
import { $Set } from "java.util.Set"

export class $Direction8 extends $Enum<$Direction8> {
static readonly "EAST": $Direction8
static readonly "NORTH": $Direction8
static readonly "NORTH_EAST": $Direction8
static readonly "NORTH_WEST": $Direction8
static readonly "SOUTH": $Direction8
static readonly "SOUTH_EAST": $Direction8
static readonly "SOUTH_WEST": $Direction8
static readonly "WEST": $Direction8

public "getDirections"(): $Set<$Direction>
public "getStepX"(): integer
public "getStepZ"(): integer
public static "valueOf"(string0: string): $Direction8
public static "values"(): $Direction8[]
get "directions"(): $Set<$Direction>
get "stepX"(): integer
get "stepZ"(): integer
}
}

declare module "net.minecraft.core.Direction$AxisDirection" {
import { $Enum } from "java.lang.Enum"

export class $Direction$AxisDirection extends $Enum<$Direction$AxisDirection> {
static readonly "NEGATIVE": $Direction$AxisDirection
static readonly "POSITIVE": $Direction$AxisDirection

public "getName"(): string
public "getStep"(): integer
public "opposite"(): $Direction$AxisDirection
public static "valueOf"(string0: string): $Direction$AxisDirection
public static "values"(): $Direction$AxisDirection[]
get "name"(): string
get "step"(): integer
}
}

declare module "net.minecraft.core.IdMapper" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Iterator } from "java.util.Iterator"
import { $IdMap } from "net.minecraft.core.IdMap"
import { $Spliterator } from "java.util.Spliterator"

export class $IdMapper<T = any> implements $IdMap<T> {
constructor()
constructor(int0: integer)

public "add"(t0: T): void
public "addMapping"(t0: T, int1: integer): void
public "byId"(int0: integer): T
public "byIdOrThrow"(int0: integer): T
public "contains"(int0: integer): boolean
public "forEach"(consumer0: $Consumer$$Type<T>): void
public "getId"(t0: T): integer
public "iterator"(): $Iterator<T>
public "size"(): integer
public "spliterator"(): $Spliterator<T>
[Symbol.iterator](): IterableIterator<T>;
}
}

declare module "net.minecraft.core.FrontAndTop" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $FrontAndTop extends $Enum<$FrontAndTop> implements $StringRepresentable {
static readonly "DOWN_EAST": $FrontAndTop
static readonly "DOWN_NORTH": $FrontAndTop
static readonly "DOWN_SOUTH": $FrontAndTop
static readonly "DOWN_WEST": $FrontAndTop
static readonly "EAST_UP": $FrontAndTop
static readonly "NORTH_UP": $FrontAndTop
static readonly "SOUTH_UP": $FrontAndTop
static readonly "UP_EAST": $FrontAndTop
static readonly "UP_NORTH": $FrontAndTop
static readonly "UP_SOUTH": $FrontAndTop
static readonly "UP_WEST": $FrontAndTop
static readonly "WEST_UP": $FrontAndTop

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public static "fromFrontAndTop"(direction0: $Direction$$Type, direction1: $Direction$$Type): $FrontAndTop
public "front"(): $Direction
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "top"(): $Direction
public static "valueOf"(string0: string): $FrontAndTop
public static "values"(): $FrontAndTop[]
get "serializedName"(): string
}
}

declare module "net.minecraft.core.Position" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Position {
"x"(): double
"y"(): double
"z"(): double
}

export namespace $Position {
const probejs$$marker: never
}
export abstract class $Position$$Static implements $Position {
}
}

declare module "net.minecraft.core.particles.ParticleOptions$Deserializer" {
import { $ParticleOptions } from "net.minecraft.core.particles.ParticleOptions"
import { $ParticleType$$Type } from "net.minecraft.core.particles.ParticleType"
import { $StringReader$$Type } from "com.mojang.brigadier.StringReader"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

/** @deprecated */
export interface $ParticleOptions$Deserializer<T extends $ParticleOptions = $ParticleOptions> {
"fromCommand"(particleType0: $ParticleType$$Type<T>, stringReader1: $StringReader$$Type): T
"fromNetwork"(particleType0: $ParticleType$$Type<T>, friendlyByteBuf1: $FriendlyByteBuf$$Type): T
}

export namespace $ParticleOptions$Deserializer {
const probejs$$marker: never
}
export abstract class $ParticleOptions$Deserializer$$Static<T extends $ParticleOptions = $ParticleOptions> implements $ParticleOptions$Deserializer<T> {
}
}

declare module "net.minecraft.core.HolderSet$Named" {
import { $Either } from "com.mojang.datafixers.util.Either"
import { $HolderSet$Direct } from "net.minecraft.core.HolderSet$Direct"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $Function$$Type } from "java.util.function.Function"
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List, $List$$Type } from "java.util.List"
import { $HolderOwner$$Type } from "net.minecraft.core.HolderOwner"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Optional } from "java.util.Optional"
import { $IForgeHolderSet$SerializationType } from "net.minecraftforge.common.extensions.IForgeHolderSet$SerializationType"
import { $HolderSet$ListBacked } from "net.minecraft.core.HolderSet$ListBacked"

export class $HolderSet$Named<T = any> extends $HolderSet$ListBacked<T> {
public "addInvalidationListener"(runnable0: $Runnable$$Type): void
public "bind"(list0: $List$$Type<$Holder$$Type<T>>): void
public "contains"(holder0: $Holder$$Type<T>): boolean
public static "direct"<T>(...holder0s: $Holder$$Type<T>[]): $HolderSet$Direct<T>
public static "direct"<T>(list0: $List$$Type<$Holder$$Type<T>>): $HolderSet$Direct<T>
public static "direct"<E, T>(function0: $Function$$Type<E, $Holder<T>>, ...e1s: E[]): $HolderSet$Direct<T>
public static "direct"<E, T>(function0: $Function$$Type<E, $Holder<T>>, list1: $List$$Type<E>): $HolderSet$Direct<T>
/** @deprecated */
public static "emptyNamed"<T>(holderOwner0: $HolderOwner$$Type<T>, tagKey1: $TagKey$$Type<T>): $HolderSet$Named<T>
public "forEach"(consumer0: $Consumer$$Type<$Holder$$Type<T>>): void
public "key"(): $TagKey<T>
public "serializationType"(): $IForgeHolderSet$SerializationType
public "unwrap"(): $Either<$TagKey<T>, $List<$Holder<T>>>
public "unwrapKey"(): $Optional<$TagKey<T>>
get "contents"(): $List<$Holder<T>>
set "contents"(value: $List$$Type<$Holder$$Type<T>>)
}
}

declare module "net.minecraft.core.particles.ParticleGroup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ParticleGroup {
static readonly "SPORE_BLOSSOM": $ParticleGroup

constructor(int0: integer)

public "getLimit"(): integer
get "limit"(): integer
}
}

declare module "net.minecraft.core.LayeredRegistryAccess" {
import { $List$$Type } from "java.util.List"
import { $RegistryAccess$Frozen, $RegistryAccess$Frozen$$Type } from "net.minecraft.core.RegistryAccess$Frozen"

export class $LayeredRegistryAccess<T = any> {
constructor(list0: $List$$Type<T>)

public "compositeAccess"(): $RegistryAccess$Frozen
public "getAccessForLoading"(t0: T): $RegistryAccess$Frozen
public "getAccessFrom"(t0: T): $RegistryAccess$Frozen
public "getLayer"(t0: T): $RegistryAccess$Frozen
public "replaceFrom"(t0: T, ...frozen1s: $RegistryAccess$Frozen$$Type[]): $LayeredRegistryAccess<T>
public "replaceFrom"(t0: T, list1: $List$$Type<$RegistryAccess$Frozen$$Type>): $LayeredRegistryAccess<T>
}
}

declare module "net.minecraft.core.SectionPos" {
import { $ChunkPos, $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $EntityAccess$$Type } from "net.minecraft.world.level.entity.EntityAccess"
import { $Stream } from "java.util.stream.Stream"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Vec3i } from "net.minecraft.core.Vec3i"
import { $Position$$Type } from "net.minecraft.core.Position"
import { $LongConsumer$$Type } from "it.unimi.dsi.fastutil.longs.LongConsumer"
import { $ChunkAccess$$Type } from "net.minecraft.world.level.chunk.ChunkAccess"

export class $SectionPos extends $Vec3i {
static readonly "SECTION_BITS": integer
static readonly "SECTION_HALF_SIZE": integer
static readonly "SECTION_MASK": integer
static readonly "SECTION_MAX_INDEX": integer
static readonly "SECTION_SIZE": integer

public static "aroundAndAtBlockPos"(blockPos0: $BlockPos$$Type, longConsumer1: $LongConsumer$$Type): void
public static "aroundAndAtBlockPos"(int0: integer, int1: integer, int2: integer, longConsumer3: $LongConsumer$$Type): void
public static "aroundAndAtBlockPos"(long0: long, longConsumer1: $LongConsumer$$Type): void
public static "aroundChunk"(chunkPos0: $ChunkPos$$Type, int1: integer, int2: integer, int3: integer): $Stream<$SectionPos>
public "asLong"(): long
public static "asLong"(int0: integer, int1: integer, int2: integer): long
public static "asLong"(blockPos0: $BlockPos$$Type): long
public static "betweenClosedStream"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): $Stream<$SectionPos>
public static "blockToSection"(long0: long): long
public static "blockToSectionCoord"(double0: double): integer
public static "blockToSectionCoord"(int0: integer): integer
public "blocksInside"(): $Stream<$BlockPos>
public static "bottomOf"(chunkAccess0: $ChunkAccess$$Type): $SectionPos
public "center"(): $BlockPos
public "chunk"(): $ChunkPos
public static "cube"(sectionPos0: $SectionPos$$Type, int1: integer): $Stream<$SectionPos>
public static "getZeroNode"(int0: integer, int1: integer): long
public static "getZeroNode"(long0: long): long
public "maxBlockX"(): integer
public "maxBlockY"(): integer
public "maxBlockZ"(): integer
public "minBlockX"(): integer
public "minBlockY"(): integer
public "minBlockZ"(): integer
public static "of"(blockPos0: $BlockPos$$Type): $SectionPos
public static "of"(int0: integer, int1: integer, int2: integer): $SectionPos
public static "of"(long0: long): $SectionPos
public static "of"(entityAccess0: $EntityAccess$$Type): $SectionPos
public static "of"(chunkPos0: $ChunkPos$$Type, int1: integer): $SectionPos
public static "of"(position0: $Position$$Type): $SectionPos
public static "offset"(long0: long, direction1: $Direction$$Type): long
public static "offset"(long0: long, int1: integer, int2: integer, int3: integer): long
public "offset"(int0: integer, int1: integer, int2: integer): $SectionPos
public "origin"(): $BlockPos
public static "posToSectionCoord"(double0: double): integer
public "relativeToBlockPos"(short0: short): $BlockPos
public "relativeToBlockX"(short0: short): integer
public "relativeToBlockY"(short0: short): integer
public "relativeToBlockZ"(short0: short): integer
public static "sectionRelative"(int0: integer): integer
public static "sectionRelativePos"(blockPos0: $BlockPos$$Type): short
public static "sectionRelativeX"(short0: short): integer
public static "sectionRelativeY"(short0: short): integer
public static "sectionRelativeZ"(short0: short): integer
public static "sectionToBlockCoord"(int0: integer): integer
public static "sectionToBlockCoord"(int0: integer, int1: integer): integer
public "x"(): integer
public static "x"(long0: long): integer
public static "y"(long0: long): integer
public "y"(): integer
public "z"(): integer
public static "z"(long0: long): integer
}
}

declare module "net.minecraft.core.RegistryAccess$RegistryEntry" {
import { $Registry, $Registry$$Type } from "net.minecraft.core.Registry"
import { $Record } from "java.lang.Record"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export class $RegistryAccess$RegistryEntry<T = any> extends $Record {
constructor(resourceKey0: $ResourceKey$$Type<$Registry<T>>, registry1: $Registry$$Type<T>)

public "key"(): $ResourceKey<$Registry<T>>
public "value"(): $Registry<T>
}
}

declare module "net.minecraft.core.BlockSource" {
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Position } from "net.minecraft.core.Position"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $ServerLevel } from "net.minecraft.server.level.ServerLevel"

export interface $BlockSource extends $Position {
"getBlockState"(): $BlockState
"getEntity"<T extends $BlockEntity>(): T
"getLevel"(): $ServerLevel
"getPos"(): $BlockPos
"x"(): double
"y"(): double
"z"(): double
get "blockState"(): $BlockState
get "entity"(): T
get "level"(): $ServerLevel
get "pos"(): $BlockPos
}

export namespace $BlockSource {
const probejs$$marker: never
}
export abstract class $BlockSource$$Static implements $BlockSource {
}
}

declare module "net.minecraft.core.Holder$Reference" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ITag$$Type } from "net.minecraftforge.registries.tags.ITag"
import { $Either } from "com.mojang.datafixers.util.Either"
import { $Holder$Reference$Type } from "net.minecraft.core.Holder$Reference$Type"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $Holder$Kind } from "net.minecraft.core.Holder$Kind"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $HolderOwner$$Type } from "net.minecraft.core.HolderOwner"
import { $Holder } from "net.minecraft.core.Holder"
import { $Stream } from "java.util.stream.Stream"
import { $Optional } from "java.util.Optional"

export class $Holder$Reference<T = any> implements $Holder<T> {
public "bindKey"(resourceKey0: $ResourceKey$$Type<T>): void
public "bindTags"(collection0: $Collection$$Type<$TagKey$$Type<T>>): void
public "bindValue"(t0: T): void
public "canSerializeIn"(holderOwner0: $HolderOwner$$Type<T>): boolean
public "containsTag"(tagKey0: $TagKey$$Type<T>): boolean
public "containsTag"(iTag0: $ITag$$Type<T>): boolean
/** @deprecated */
public static "createIntrusive"<T>(holderOwner0: $HolderOwner$$Type<T>, t1: T): $Holder$Reference<T>
public static "createStandAlone"<T>(holderOwner0: $HolderOwner$$Type<T>, resourceKey1: $ResourceKey$$Type<T>): $Holder$Reference<T>
public static "direct"<T>(t0: T): $Holder<T>
public "get"(): T
public "getTagKeys"(): $Stream<$TagKey<T>>
public "getType"(): $Holder$Reference$Type
public "is"(resourceLocation0: $ResourceLocation$$Type): boolean
public "is"(resourceKey0: $ResourceKey$$Type<T>): boolean
public "is"(predicate0: $Predicate$$Type<$ResourceKey$$Type<T>>): boolean
public "is"(tagKey0: $TagKey$$Type<T>): boolean
public "isBound"(): boolean
public "key"(): $ResourceKey<T>
public "kind"(): $Holder$Kind
public "tags"(): $Stream<$TagKey<T>>
public "unwrap"(): $Either<$ResourceKey<T>, T>
public "unwrapKey"(): $Optional<$ResourceKey<T>>
public "value"(): T
get "tagKeys"(): $Stream<$TagKey<T>>
get "type"(): $Holder$Reference$Type
get "bound"(): boolean
}
}

declare module "net.minecraft.core.GlobalPos" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Level } from "net.minecraft.world.level.Level"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export class $GlobalPos {
static readonly "CODEC": $Codec<$GlobalPos>

public "dimension"(): $ResourceKey<$Level>
public static "of"(resourceKey0: $ResourceKey$$Type<$Level>, blockPos1: $BlockPos$$Type): $GlobalPos
public "pos"(): $BlockPos
}
}

declare module "net.minecraft.core.Holder$Direct" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ITag$$Type } from "net.minecraftforge.registries.tags.ITag"
import { $Either } from "com.mojang.datafixers.util.Either"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Holder$Kind } from "net.minecraft.core.Holder$Kind"
import { $Record } from "java.lang.Record"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $HolderOwner$$Type } from "net.minecraft.core.HolderOwner"
import { $Holder } from "net.minecraft.core.Holder"
import { $Stream } from "java.util.stream.Stream"
import { $Optional } from "java.util.Optional"

export class $Holder$Direct<T = any> extends $Record implements $Holder<T> {
constructor(value: T)

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
get "tagKeys"(): $Stream<$TagKey<T>>
get "bound"(): boolean
}
}

declare module "net.minecraft.core.HolderLookup$Provider" {
import { $Registry } from "net.minecraft.core.Registry"
import { $HolderLookup$RegistryLookup, $HolderLookup$RegistryLookup$$Type } from "net.minecraft.core.HolderLookup$RegistryLookup"
import { $Stream$$Type } from "java.util.stream.Stream"
import { $Optional } from "java.util.Optional"
import { $HolderGetter$Provider } from "net.minecraft.core.HolderGetter$Provider"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export interface $HolderLookup$Provider {
"asGetterLookup"(): $HolderGetter$Provider
"lookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $Optional<$HolderLookup$RegistryLookup<T>>
"lookupOrThrow"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderLookup$RegistryLookup<T>
}

export namespace $HolderLookup$Provider {
function create(stream0: $Stream$$Type<$HolderLookup$RegistryLookup$$Type<any>>): $HolderLookup$Provider
}
export abstract class $HolderLookup$Provider$$Static implements $HolderLookup$Provider {
static "create"(stream0: $Stream$$Type<$HolderLookup$RegistryLookup$$Type<any>>): $HolderLookup$Provider
}
}

declare module "net.minecraft.core.NonNullList" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $AbstractList } from "java.util.AbstractList"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $Comparator$$Type } from "java.util.Comparator"
import { $Spliterator } from "java.util.Spliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $NonNullList<E = any> extends $AbstractList<E> {
public "addAll"(collection0: $Collection$$Type<E>): boolean
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public static "create"<E>(): $NonNullList<E>
public static "createWithCapacity"<E>(int0: integer): $NonNullList<E>
public "forEach"(consumer0: $Consumer$$Type<E>): void
public "get"(int0: integer): E
public "isEmpty"(): boolean
public static "of"<E>(e0: E, ...e1s: E[]): $NonNullList<E>
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
public "parallelStream"(): $Stream<E>
public "remove"(int0: integer): E
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<E>): boolean
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<E>): void
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "set"(int0: integer, e1: E): E
public "sort"(comparator0: $Comparator$$Type<E>): void
public "spliterator"(): $Spliterator<E>
public "stream"(): $Stream<E>
public "toArray"(): any[]
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
public static "withSize"<E>(int0: integer, e1: E): $NonNullList<E>
get "empty"(): boolean
}
}

declare module "net.minecraft.core.WritableRegistry" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $HolderSet$Named } from "net.minecraft.core.HolderSet$Named"
import { $IdMap } from "net.minecraft.core.IdMap"
import { $HolderGetter } from "net.minecraft.core.HolderGetter"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Iterable } from "java.lang.Iterable"
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $Registry, $Registry$$Type } from "net.minecraft.core.Registry"
import { $HolderLookup$RegistryLookup } from "net.minecraft.core.HolderLookup$RegistryLookup"
import { $HolderOwner } from "net.minecraft.core.HolderOwner"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $DynamicOps$$Type } from "com.mojang.serialization.DynamicOps"
import { $Map$$Type } from "java.util.Map"
import { $Map$Entry } from "java.util.Map$Entry"
import { $Iterator } from "java.util.Iterator"
import { $Set } from "java.util.Set"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $Lifecycle, $Lifecycle$$Type } from "com.mojang.serialization.Lifecycle"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Pair } from "com.mojang.datafixers.util.Pair"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $Optional } from "java.util.Optional"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Spliterator } from "java.util.Spliterator"

export interface $WritableRegistry<T = any> extends $Registry<T> {
"asHolderIdMap"(): $IdMap<$Holder<T>>
"asLookup"(): $HolderLookup$RegistryLookup<T>
"asTagAddingLookup"(): $HolderLookup$RegistryLookup<T>
"bindTags"(map0: $Map$$Type<$TagKey$$Type<T>, $List$$Type<$Holder$$Type<T>>>): void
"byId"(int0: integer): T
"byIdOrThrow"(int0: integer): T
"byNameCodec"(): $Codec<T>
"containsKey"(resourceLocation0: $ResourceLocation$$Type): boolean
"containsKey"(resourceKey0: $ResourceKey$$Type<T>): boolean
"createIntrusiveHolder"(t0: T): $Holder$Reference<T>
"createRegistrationLookup"(): $HolderGetter<T>
"entrySet"(): $Set<$Map$Entry<$ResourceKey<T>, T>>
"forEach"(consumer0: $Consumer$$Type<T>): void
"freeze"(): $Registry<T>
"get"(resourceKey0: $ResourceKey$$Type<T>): T
"get"(resourceLocation0: $ResourceLocation$$Type): T
"getHolder"(int0: integer): $Optional<$Holder$Reference<T>>
"getHolder"(resourceKey0: $ResourceKey$$Type<T>): $Optional<$Holder$Reference<T>>
"getHolderOrThrow"(resourceKey0: $ResourceKey$$Type<T>): $Holder$Reference<T>
"getId"(t0: T): integer
"getKey"(t0: T): $ResourceLocation
"getOptional"(resourceKey0: $ResourceKey$$Type<T>): $Optional<T>
"getOptional"(resourceLocation0: $ResourceLocation$$Type): $Optional<T>
"getOrCreateTag"(tagKey0: $TagKey$$Type<T>): $HolderSet$Named<T>
"getOrThrow"(resourceKey0: $ResourceKey$$Type<T>): T
"getRandom"(randomSource0: $RandomSource$$Type): $Optional<$Holder$Reference<T>>
"getResourceKey"(t0: T): $Optional<$ResourceKey<T>>
"getTag"(tagKey0: $TagKey$$Type<T>): $Optional<$HolderSet$Named<T>>
"getTagNames"(): $Stream<$TagKey<T>>
"getTagOrEmpty"(tagKey0: $TagKey$$Type<T>): $Iterable<$Holder<T>>
"getTags"(): $Stream<$Pair<$TagKey<T>, $HolderSet$Named<T>>>
"holderByNameCodec"(): $Codec<$Holder<T>>
"holderOwner"(): $HolderOwner<T>
"holders"(): $Stream<$Holder$Reference<T>>
"isEmpty"(): boolean
"iterator"(): $Iterator<T>
"key"(): $ResourceKey<$Registry<T>>
"keySet"(): $Set<$ResourceLocation>
"keys"<U>(dynamicOps0: $DynamicOps$$Type<U>): $Stream<U>
"lifecycle"(t0: T): $Lifecycle
"register"(resourceKey0: $ResourceKey$$Type<T>, t1: T, lifecycle2: $Lifecycle$$Type): $Holder$Reference<T>
"registerMapping"(int0: integer, resourceKey1: $ResourceKey$$Type<T>, t2: T, lifecycle3: $Lifecycle$$Type): $Holder<T>
"registryKeySet"(): $Set<$ResourceKey<T>>
"registryLifecycle"(): $Lifecycle
"resetTags"(): void
"size"(): integer
"spliterator"(): $Spliterator<T>
"stream"(): $Stream<T>
"wrapAsHolder"(t0: T): $Holder<T>
[Symbol.iterator](): IterableIterator<T>;
get "tagNames"(): $Stream<$TagKey<T>>
get "tags"(): $Stream<$Pair<$TagKey<T>, $HolderSet$Named<T>>>
get "empty"(): boolean
}

export namespace $WritableRegistry {
function forStrings(supplier0: $Supplier$$Type<$Stream<string>>): $Keyable
function register<T>(registry0: $Registry$$Type<T>, string1: string, t2: T): T
function register<V, T extends V>(registry0: $Registry$$Type<V>, resourceKey1: $ResourceKey$$Type<V>, t2: T): T
function register<V, T extends V>(registry0: $Registry$$Type<V>, resourceLocation1: $ResourceLocation$$Type, t2: T): T
function registerForHolder<T>(registry0: $Registry$$Type<T>, resourceKey1: $ResourceKey$$Type<T>, t2: T): $Holder$Reference<T>
function registerForHolder<T>(registry0: $Registry$$Type<T>, resourceLocation1: $ResourceLocation$$Type, t2: T): $Holder$Reference<T>
function registerMapping<V, T extends V>(registry0: $Registry$$Type<V>, int1: integer, string2: string, t3: T): T
}
export abstract class $WritableRegistry$$Static<T = any> implements $WritableRegistry<T> {
static "forStrings"(supplier0: $Supplier$$Type<$Stream<string>>): $Keyable
static "register"<T>(registry0: $Registry$$Type<T>, string1: string, t2: T): T
static "register"<V, T extends V>(registry0: $Registry$$Type<V>, resourceKey1: $ResourceKey$$Type<V>, t2: T): T
static "register"<V, T extends V>(registry0: $Registry$$Type<V>, resourceLocation1: $ResourceLocation$$Type, t2: T): T
static "registerForHolder"<T>(registry0: $Registry$$Type<T>, resourceKey1: $ResourceKey$$Type<T>, t2: T): $Holder$Reference<T>
static "registerForHolder"<T>(registry0: $Registry$$Type<T>, resourceLocation1: $ResourceLocation$$Type, t2: T): $Holder$Reference<T>
static "registerMapping"<V, T extends V>(registry0: $Registry$$Type<V>, int1: integer, string2: string, t3: T): T
}
}

declare module "net.minecraft.core.particles.ParticleOptions" {
import { $ParticleType } from "net.minecraft.core.particles.ParticleType"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export interface $ParticleOptions {
"getType"(): $ParticleType<any>
"writeToNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
"writeToString"(): string
get "type"(): $ParticleType<any>
}

export namespace $ParticleOptions {
const probejs$$marker: never
}
export abstract class $ParticleOptions$$Static implements $ParticleOptions {
}
}

