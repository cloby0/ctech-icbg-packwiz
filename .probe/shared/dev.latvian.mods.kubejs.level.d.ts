declare module "dev.latvian.mods.kubejs.level.gen.properties.RemoveOresProperties" {
import { $BiomeFilter, $BiomeFilter$$Type } from "dev.latvian.mods.kubejs.level.gen.filter.biome.BiomeFilter"
import { $GenerationStep$Decoration, $GenerationStep$Decoration$$Type } from "net.minecraft.world.level.levelgen.GenerationStep$Decoration"
import { $BlockStatePredicate, $BlockStatePredicate$$Type } from "dev.latvian.mods.kubejs.block.state.BlockStatePredicate"

export class $RemoveOresProperties {
constructor()

get "biomes"(): $BiomeFilter
set "biomes"(value: $BiomeFilter$$Type)
get "blocks"(): $BlockStatePredicate
set "blocks"(value: $BlockStatePredicate$$Type)
get "worldgenLayer"(): $GenerationStep$Decoration
set "worldgenLayer"(value: $GenerationStep$Decoration$$Type)
}
}

declare module "dev.latvian.mods.kubejs.level.gen.RemoveWorldgenEventJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $RemoveOresProperties$$Type } from "dev.latvian.mods.kubejs.level.gen.properties.RemoveOresProperties"
import { $MobCategory$$Type } from "net.minecraft.world.entity.MobCategory"
import { $RemoveSpawnsProperties$$Type } from "dev.latvian.mods.kubejs.level.gen.properties.RemoveSpawnsProperties"
import { $BiomeFilter$$Type } from "dev.latvian.mods.kubejs.level.gen.filter.biome.BiomeFilter"
import { $GenerationStep$Decoration$$Type } from "net.minecraft.world.level.levelgen.GenerationStep$Decoration"
import { $StartupEventJS } from "dev.latvian.mods.kubejs.event.StartupEventJS"

export class $RemoveWorldgenEventJS extends $StartupEventJS {
constructor()

public "printFeatures"(type: $GenerationStep$Decoration$$Type): void
public "printFeatures"(type: $GenerationStep$Decoration$$Type, filter: $BiomeFilter$$Type): void
public "printFeatures"(): void
public "printFeaturesForType"(type: $GenerationStep$Decoration$$Type, filter: $BiomeFilter$$Type, afterRemoval: boolean): void
public "printFiltered"(): void
public "printFiltered"(type: $GenerationStep$Decoration$$Type, filter: $BiomeFilter$$Type): void
public "printFiltered"(type: $GenerationStep$Decoration$$Type): void
public "printSpawns"(): void
public "printSpawns"(category: $MobCategory$$Type): void
public "removeAllFeatures"(filter: $BiomeFilter$$Type, type: $GenerationStep$Decoration$$Type): void
public "removeAllFeatures"(): void
public "removeAllFeatures"(filter: $BiomeFilter$$Type): void
public "removeAllSpawns"(): void
public "removeFeatureById"(filter: $BiomeFilter$$Type, decoration: $GenerationStep$Decoration$$Type, ids: $ResourceLocation$$Type[]): void
public "removeFeatureById"(type: $GenerationStep$Decoration$$Type, ids: $ResourceLocation$$Type[]): void
public "removeOres"(p: $Consumer$$Type<$RemoveOresProperties$$Type>): void
public "removeSpawns"(p: $Consumer$$Type<$RemoveSpawnsProperties$$Type>): void
}
}

declare module "dev.latvian.mods.kubejs.level.gen.properties.RemoveSpawnsProperties" {
import { $MobFilter, $MobFilter$$Type } from "dev.latvian.mods.kubejs.level.gen.filter.mob.MobFilter"
import { $BiomeFilter, $BiomeFilter$$Type } from "dev.latvian.mods.kubejs.level.gen.filter.biome.BiomeFilter"

export class $RemoveSpawnsProperties {
constructor()

get "biomes"(): $BiomeFilter
set "biomes"(value: $BiomeFilter$$Type)
get "mobs"(): $MobFilter
set "mobs"(value: $MobFilter$$Type)
}
}

declare module "dev.latvian.mods.kubejs.level.BlockContainerJS" {
import { $ExplosionJS } from "dev.latvian.mods.kubejs.level.ExplosionJS"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SpecialEquality } from "dev.latvian.mods.rhino.util.SpecialEquality"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Collection } from "java.util.Collection"
import { $InventoryKJS } from "dev.latvian.mods.kubejs.core.InventoryKJS"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $FireworksJS$$Type } from "dev.latvian.mods.kubejs.level.FireworksJS"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $List } from "java.util.List"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $BlockContainerJS implements $SpecialEquality {
readonly "minecraftLevel": $Level

constructor(blockEntity: $BlockEntity$$Type)
constructor(w: $Level$$Type, p: $BlockPos$$Type)

public "canSeeSkyFromBelowWater"(): boolean
public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public "clearCache"(): void
public "createEntity"(type: $EntityType$$Type<any>): $Entity
public "createExplosion"(): $ExplosionJS
public "getBiomeId"(): $ResourceLocation
public "getBlockLight"(): integer
public "getBlockState"(): $BlockState
public "getCanSeeSky"(): boolean
public "getDimension"(): $ResourceLocation
public "getDown"(): $BlockContainerJS
public "getDrops"(): $List<$ItemStack>
public "getDrops"(entity: $Entity$$Type, heldItem: $ItemStack$$Type): $List<$ItemStack>
public "getEast"(): $BlockContainerJS
public "getEntity"(): $BlockEntity
public "getEntityData"(): $CompoundTag
public "getEntityId"(): string
public "getId"(): string
public "getInventory"(): $InventoryKJS
public "getInventory"(facing: $Direction$$Type): $InventoryKJS
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public "getLight"(): integer
public "getNorth"(): $BlockContainerJS
public "getPlayersInRadius"(radius: double): $EntityArrayList
public "getPlayersInRadius"(): $EntityArrayList
public "getPos"(): $BlockPos
public "getProperties"(): $Map<string, string>
public "getSkyLight"(): integer
public "getSouth"(): $BlockContainerJS
public "getTags"(): $Collection<$ResourceLocation>
public "getTypeData"(): $CompoundTag
public "getUp"(): $BlockContainerJS
public "getWest"(): $BlockContainerJS
public "getX"(): integer
public "getY"(): integer
public "getZ"(): integer
public "hasTag"(tag: $ResourceLocation$$Type): boolean
public "mergeEntityData"(tag: $CompoundTag$$Type): void
public "offset"(x: integer, y: integer, z: integer): $BlockContainerJS
public "offset"(f: $Direction$$Type, d: integer): $BlockContainerJS
public "offset"(f: $Direction$$Type): $BlockContainerJS
public "popItem"(item: $ItemStack$$Type): void
public "popItemFromFace"(item: $ItemStack$$Type, dir: $Direction$$Type): void
public "set"(id: $ResourceLocation$$Type, properties: $Map$$Type<any, any>, flags: integer): void
public "set"(id: $ResourceLocation$$Type, properties: $Map$$Type<any, any>): void
public "set"(id: $ResourceLocation$$Type): void
public "setBlockState"(state: $BlockState$$Type, flags: integer): void
public "setEntityData"(tag: $CompoundTag$$Type): void
public "spawnFireworks"(fireworks: $FireworksJS$$Type): void
public "spawnLightning"(): void
public "spawnLightning"(effectOnly: boolean): void
public "spawnLightning"(effectOnly: boolean, player: $ServerPlayer$$Type): void
public "specialEquals"(o: any, shallow: boolean): boolean
get "biomeId"(): $ResourceLocation
get "blockLight"(): integer
get "blockState"(): $BlockState
get "canSeeSky"(): boolean
get "dimension"(): $ResourceLocation
get "down"(): $BlockContainerJS
get "drops"(): $List<$ItemStack>
get "east"(): $BlockContainerJS
get "entity"(): $BlockEntity
get "entityData"(): $CompoundTag
get "entityId"(): string
get "id"(): string
get "inventory"(): $InventoryKJS
get "item"(): $ItemStack
get "level"(): $Level
get "light"(): integer
get "north"(): $BlockContainerJS
get "playersInRadius"(): $EntityArrayList
get "pos"(): $BlockPos
get "properties"(): $Map<string, string>
get "skyLight"(): integer
get "south"(): $BlockContainerJS
get "tags"(): $Collection<$ResourceLocation>
get "typeData"(): $CompoundTag
get "up"(): $BlockContainerJS
get "west"(): $BlockContainerJS
get "x"(): integer
get "y"(): integer
get "z"(): integer
set "entityData"(value: $CompoundTag$$Type)
}
}

declare module "dev.latvian.mods.kubejs.level.gen.AddWorldgenEventJS" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $AddOreProperties$$Type } from "dev.latvian.mods.kubejs.level.gen.properties.AddOreProperties"
import { $MobCategory$$Type } from "net.minecraft.world.entity.MobCategory"
import { $BiomeFilter$$Type } from "dev.latvian.mods.kubejs.level.gen.filter.biome.BiomeFilter"
import { JClass } from "zzzank.probejs.generated.JClass"
import { $AddSpawnProperties$$Type } from "dev.latvian.mods.kubejs.level.gen.properties.AddSpawnProperties"
import { $VerticalAnchor, $VerticalAnchor$$Static } from "net.minecraft.world.level.levelgen.VerticalAnchor"
import { $StartupEventJS } from "dev.latvian.mods.kubejs.event.StartupEventJS"
import { $AddLakeProperties$$Type } from "dev.latvian.mods.kubejs.level.gen.properties.AddLakeProperties"

export class $AddWorldgenEventJS extends $StartupEventJS {
readonly "anchors": (JClass<$VerticalAnchor> & (typeof $VerticalAnchor$$Static))

constructor()

public "addLake"(p: $Consumer$$Type<$AddLakeProperties$$Type>): void
public "addOre"(p: $Consumer$$Type<$AddOreProperties$$Type>): void
public "addSpawn"(p: $Consumer$$Type<$AddSpawnProperties$$Type>): void
public "addSpawn"(filter: $BiomeFilter$$Type, category: $MobCategory$$Type, spawn: string): void
public "addSpawn"(category: $MobCategory$$Type, spawn: string): void
}
}

declare module "dev.latvian.mods.kubejs.level.gen.properties.AddLakeProperties" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BiomeFilter, $BiomeFilter$$Type } from "dev.latvian.mods.kubejs.level.gen.filter.biome.BiomeFilter"
import { $GenerationStep$Decoration, $GenerationStep$Decoration$$Type } from "net.minecraft.world.level.levelgen.GenerationStep$Decoration"
import { $BlockStatePredicate, $BlockStatePredicate$$Type } from "dev.latvian.mods.kubejs.block.state.BlockStatePredicate"

export class $AddLakeProperties {
constructor()

public "setInner"(p: $BlockStatePredicate$$Type): void
public "setOuter"(p: $BlockStatePredicate$$Type): void
get "barrier"(): $BlockStatePredicate
set "barrier"(value: $BlockStatePredicate$$Type)
get "biomes"(): $BiomeFilter
set "biomes"(value: $BiomeFilter$$Type)
get "chance"(): integer
set "chance"(value: integer)
get "fluid"(): $BlockStatePredicate
set "fluid"(value: $BlockStatePredicate$$Type)
get "id"(): $ResourceLocation
set "id"(value: $ResourceLocation$$Type)
get "retrogen"(): integer
set "retrogen"(value: integer)
get "worldgenLayer"(): $GenerationStep$Decoration
set "worldgenLayer"(value: $GenerationStep$Decoration$$Type)
set "inner"(value: $BlockStatePredicate$$Type)
set "outer"(value: $BlockStatePredicate$$Type)
}
}

declare module "dev.latvian.mods.kubejs.level.gen.properties.AddSpawnProperties" {
import { $MobCategory, $MobCategory$$Type } from "net.minecraft.world.entity.MobCategory"
import { $EntityType, $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BiomeFilter, $BiomeFilter$$Type } from "dev.latvian.mods.kubejs.level.gen.filter.biome.BiomeFilter"

export class $AddSpawnProperties {
constructor()

public "setCategory"(s: string): void
public "setEntity"(s: string): void
get "_category"(): $MobCategory
set "_category"(value: $MobCategory$$Type)
get "_entity"(): $EntityType<any>
set "_entity"(value: $EntityType$$Type<any>)
get "biomes"(): $BiomeFilter
set "biomes"(value: $BiomeFilter$$Type)
get "maxCount"(): integer
set "maxCount"(value: integer)
get "minCount"(): integer
set "minCount"(value: integer)
get "weight"(): integer
set "weight"(value: integer)
set "category"(value: string)
set "entity"(value: string)
}
}

declare module "dev.latvian.mods.kubejs.level.ExplosionEventJS$Before" {
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $ExplosionEventJS } from "dev.latvian.mods.kubejs.level.ExplosionEventJS"

/** Invoked right before an explosion happens. */
export class $ExplosionEventJS$Before extends $ExplosionEventJS {
constructor(level: $Level$$Type, explosion: $Explosion$$Type)

/** Returns the size of the explosion. */
public "getSize"(): float
/** Sets the size of the explosion. */
public "setSize"(s: float): void
get "size"(): float
set "size"(value: float)
}
}

declare module "dev.latvian.mods.kubejs.level.FireworksJS$Shape" {
import { $Enum } from "java.lang.Enum"

export class $FireworksJS$Shape extends $Enum<$FireworksJS$Shape> {
static readonly "BURST": $FireworksJS$Shape
static readonly "CREEPER": $FireworksJS$Shape
static readonly "LARGE_BALL": $FireworksJS$Shape
static readonly "SMALL_BALL": $FireworksJS$Shape
static readonly "STAR": $FireworksJS$Shape
static readonly "VALUES": $FireworksJS$Shape[]
readonly "type": integer

public static "get"(name: string): $FireworksJS$Shape
public static "valueOf"(name: string): $FireworksJS$Shape
public static "values"(): $FireworksJS$Shape[]
}
}

declare module "dev.latvian.mods.kubejs.level.gen.filter.mob.MobFilter" {
import { $BiPredicate, $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$$Type } from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"
import { $MobCategory, $MobCategory$$Type } from "net.minecraft.world.entity.MobCategory"

export interface $MobFilter extends $BiPredicate<$MobCategory, $MobSpawnSettings$SpawnerData> {
"and"(biPredicate0: $BiPredicate$$Type<$MobCategory$$Type, $MobSpawnSettings$SpawnerData$$Type>): $BiPredicate<$MobCategory, $MobSpawnSettings$SpawnerData>
"negate"(): $BiPredicate<$MobCategory, $MobSpawnSettings$SpawnerData>
"or"(biPredicate0: $BiPredicate$$Type<$MobCategory$$Type, $MobSpawnSettings$SpawnerData$$Type>): $BiPredicate<$MobCategory, $MobSpawnSettings$SpawnerData>
"test"(mobCategory0: $MobCategory$$Type, spawnerData1: $MobSpawnSettings$SpawnerData$$Type): boolean
}

export namespace $MobFilter {
const ALWAYS_FALSE: $MobFilter
const ALWAYS_TRUE: $MobFilter
function idFilter(cx: $Context$$Type, s: string): $MobFilter
function of(cx: $Context$$Type, o: any): $MobFilter
}
export abstract class $MobFilter$$Static implements $MobFilter {
static readonly "ALWAYS_FALSE": $MobFilter
static readonly "ALWAYS_TRUE": $MobFilter

static "idFilter"(cx: $Context$$Type, s: string): $MobFilter
static "of"(cx: $Context$$Type, o: any): $MobFilter
}
}

declare module "dev.latvian.mods.kubejs.level.ExplosionEventJS" {
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $LevelEventJS } from "dev.latvian.mods.kubejs.level.LevelEventJS"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"

export class $ExplosionEventJS extends $LevelEventJS {
constructor(level: $Level$$Type, explosion: $Explosion$$Type)

public "getBlock"(): $BlockContainerJS
public "getExploder"(): $LivingEntity
public "getPosition"(): $Vec3
public "getX"(): double
public "getY"(): double
public "getZ"(): double
get "block"(): $BlockContainerJS
get "exploder"(): $LivingEntity
get "position"(): $Vec3
get "x"(): double
get "y"(): double
get "z"(): double
}
}

declare module "dev.latvian.mods.kubejs.level.gen.properties.AddOreProperties" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List, $List$$Type } from "java.util.List"
import { $HeightRangePlacement, $HeightRangePlacement$$Type } from "net.minecraft.world.level.levelgen.placement.HeightRangePlacement"
import { $OreConfiguration$TargetBlockState, $OreConfiguration$TargetBlockState$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration$TargetBlockState"
import { $IntProvider, $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $BiomeFilter, $BiomeFilter$$Type } from "dev.latvian.mods.kubejs.level.gen.filter.biome.BiomeFilter"
import { $VerticalAnchor, $VerticalAnchor$$Type } from "net.minecraft.world.level.levelgen.VerticalAnchor"
import { $GenerationStep$Decoration, $GenerationStep$Decoration$$Type } from "net.minecraft.world.level.levelgen.GenerationStep$Decoration"
import { $RuleTest$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest"
import { $BlockStatePredicate$$Type } from "dev.latvian.mods.kubejs.block.state.BlockStatePredicate"

export class $AddOreProperties {
"chance": integer
"count": $IntProvider
"size": integer
"squared": boolean

constructor()

/** @deprecated */
public "aboveBottom"(y: integer): $VerticalAnchor
public "addTarget"(ruleTest: $RuleTest$$Type, targetState: $BlockStatePredicate$$Type): void
/** @deprecated */
public "belowTop"(y: integer): $VerticalAnchor
/** @deprecated */
public "bottom"(): $VerticalAnchor
public "chance"(c: integer): $AddOreProperties
public "count"(min: integer, max: integer): $AddOreProperties
public "count"(c: integer): $AddOreProperties
public "count"(c: $IntProvider$$Type): $AddOreProperties
public "size"(s: integer): $AddOreProperties
public "squared"(): $AddOreProperties
/** @deprecated */
public "top"(): $VerticalAnchor
public "triangleHeight"(min: integer, max: integer): $AddOreProperties
public "triangleHeight"(absolute: $VerticalAnchor$$Type, absolute1: $VerticalAnchor$$Type): $AddOreProperties
public "uniformHeight"(absolute: $VerticalAnchor$$Type, absolute1: $VerticalAnchor$$Type): $AddOreProperties
public "uniformHeight"(min: integer, max: integer): $AddOreProperties
get "biomes"(): $BiomeFilter
set "biomes"(value: $BiomeFilter$$Type)
get "height"(): $HeightRangePlacement
set "height"(value: $HeightRangePlacement$$Type)
get "id"(): $ResourceLocation
set "id"(value: $ResourceLocation$$Type)
get "noSurface"(): float
set "noSurface"(value: float)
get "retrogen"(): integer
set "retrogen"(value: integer)
get "targets"(): $List<$OreConfiguration$TargetBlockState>
set "targets"(value: $List$$Type<$OreConfiguration$TargetBlockState$$Type>)
get "worldgenLayer"(): $GenerationStep$Decoration
set "worldgenLayer"(value: $GenerationStep$Decoration$$Type)
}
}

declare module "dev.latvian.mods.kubejs.level.ExplosionEventJS$After" {
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $List, $List$$Type } from "java.util.List"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $ExplosionEventJS } from "dev.latvian.mods.kubejs.level.ExplosionEventJS"

/** Invoked right after an explosion happens. */
export class $ExplosionEventJS$After extends $ExplosionEventJS {
constructor(level: $Level$$Type, explosion: $Explosion$$Type, affectedEntities: $List$$Type<$Entity$$Type>)

/** Gets a list of all blocks affected by the explosion. */
public "getAffectedBlocks"(): $List<$BlockContainerJS>
/** Gets a list of all entities affected by the explosion. */
public "getAffectedEntities"(): $EntityArrayList
/** Remove a block from the list of affected blocks. */
public "removeAffectedBlock"(block: $BlockContainerJS$$Type): void
/** Remove an entity from the list of affected entities. */
public "removeAffectedEntity"(entity: $Entity$$Type): void
/** Remove all blocks from the list of affected blocks. */
public "removeAllAffectedBlocks"(): void
/** Remove all entities from the list of affected entities. */
public "removeAllAffectedEntities"(): void
/** Remove all knockback from all affected *players*. */
public "removeKnockback"(): void
get "affectedBlocks"(): $List<$BlockContainerJS>
get "affectedEntities"(): $EntityArrayList
}
}

declare module "dev.latvian.mods.kubejs.level.gen.filter.biome.BiomeFilter" {
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $BiomeModifications$BiomeContext, $BiomeModifications$BiomeContext$$Type } from "dev.architectury.registry.level.biome.BiomeModifications$BiomeContext"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"

export interface $BiomeFilter extends $Predicate<$BiomeModifications$BiomeContext> {
"and"(predicate0: $Predicate$$Type<$BiomeModifications$BiomeContext$$Type>): $Predicate<$BiomeModifications$BiomeContext>
"negate"(): $Predicate<$BiomeModifications$BiomeContext>
"or"(predicate0: $Predicate$$Type<$BiomeModifications$BiomeContext$$Type>): $Predicate<$BiomeModifications$BiomeContext>
"test"(biomeContext0: $BiomeModifications$BiomeContext$$Type): boolean
}

export namespace $BiomeFilter {
const ALWAYS_FALSE: $BiomeFilter
const ALWAYS_TRUE: $BiomeFilter
function idFilter(cx: $Context$$Type, s: string): $BiomeFilter
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
function of(cx: $Context$$Type, o: any): $BiomeFilter
}
export abstract class $BiomeFilter$$Static implements $BiomeFilter {
static readonly "ALWAYS_FALSE": $BiomeFilter
static readonly "ALWAYS_TRUE": $BiomeFilter

static "idFilter"(cx: $Context$$Type, s: string): $BiomeFilter
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
static "of"(cx: $Context$$Type, o: any): $BiomeFilter
}
}

declare module "dev.latvian.mods.kubejs.level.SimpleLevelEventJS" {
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $LevelEventJS } from "dev.latvian.mods.kubejs.level.LevelEventJS"

export class $SimpleLevelEventJS extends $LevelEventJS {
constructor(l: $Level$$Type)

}
}

declare module "dev.latvian.mods.kubejs.level.ExplosionJS" {
import { $Level$ExplosionInteraction, $Level$ExplosionInteraction$$Type } from "net.minecraft.world.level.Level$ExplosionInteraction"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"

export class $ExplosionJS {
"causesFire": boolean
"exploder": $Entity
"explosionMode": $Level$ExplosionInteraction
"strength": float
readonly "x": double
readonly "y": double
readonly "z": double

constructor(l: $LevelAccessor$$Type, _x: double, _y: double, _z: double)

public "causesFire"(b: boolean): $ExplosionJS
public "explode"(): void
public "exploder"(entity: $Entity$$Type): $ExplosionJS
public "explosionMode"(mode: $Level$ExplosionInteraction$$Type): $ExplosionJS
public "strength"(f: float): $ExplosionJS
}
}

declare module "dev.latvian.mods.kubejs.level.FireworksJS" {
import { $FireworkRocketEntity } from "net.minecraft.world.entity.projectile.FireworkRocketEntity"
import { $List } from "java.util.List"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $FireworksJS$Explosion } from "dev.latvian.mods.kubejs.level.FireworksJS$Explosion"

export class $FireworksJS {
readonly "explosions": $List<$FireworksJS$Explosion>

constructor()

public "createFireworkRocket"(w: $Level$$Type, x: double, y: double, z: double): $FireworkRocketEntity
public static "of"(o: any): $FireworksJS
get "flight"(): integer
set "flight"(value: integer)
get "lifetime"(): integer
set "lifetime"(value: integer)
}
}

declare module "dev.latvian.mods.kubejs.level.FireworksJS$Explosion" {
import { $FireworksJS$Shape, $FireworksJS$Shape$$Type } from "dev.latvian.mods.kubejs.level.FireworksJS$Shape"
import { $IntOpenHashSet } from "it.unimi.dsi.fastutil.ints.IntOpenHashSet"

export class $FireworksJS$Explosion {
readonly "colors": $IntOpenHashSet
readonly "fadeColors": $IntOpenHashSet

constructor()

get "flicker"(): boolean
set "flicker"(value: boolean)
get "shape"(): $FireworksJS$Shape
set "shape"(value: $FireworksJS$Shape$$Type)
get "trail"(): boolean
set "trail"(value: boolean)
}
}

declare module "dev.latvian.mods.kubejs.level.LevelEventJS" {
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $Level } from "net.minecraft.world.level.Level"

export class $LevelEventJS extends $EventJS {
constructor()

public "getLevel"(): $Level
public "getServer"(): $MinecraftServer
get "level"(): $Level
get "server"(): $MinecraftServer
}
}

