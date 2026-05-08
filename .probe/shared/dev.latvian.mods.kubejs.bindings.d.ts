declare module "dev.latvian.mods.kubejs.bindings.BlockWrapper" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List } from "java.util.List"
import { $BlockIDPredicate } from "dev.latvian.mods.kubejs.block.predicate.BlockIDPredicate"
import { $Direction } from "net.minecraft.core.Direction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BlockEntityPredicate } from "dev.latvian.mods.kubejs.block.predicate.BlockEntityPredicate"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $BlockPredicate, $BlockPredicate$$Type } from "dev.latvian.mods.kubejs.block.predicate.BlockPredicate"

/** Various block related helper functions */
export class $BlockWrapper {
constructor()

public static "custom"(predicate: $BlockPredicate$$Type): $BlockPredicate
public static "entity"(id: $ResourceLocation$$Type): $BlockEntityPredicate
/** Gets a Block from a block id */
public static "getBlock"(id: $ResourceLocation$$Type): $Block
/** Get a map of direction name to Direction. Functionally identical to Direction.ALL */
public static "getFacing"(): $Map<string, $Direction>
/** Gets a blocks id from the Block */
public static "getId"(block: $Block$$Type): $ResourceLocation
/** Gets a list of all blocks with tags */
public static "getTaggedIds"(tag: $ResourceLocation$$Type): $List<$ResourceLocation>
/** Gets a list of the classname of all registered blocks */
public static "getTypeList"(): $List<string>
public static "id"(id: $ResourceLocation$$Type, properties: $Map$$Type<string, any>): $BlockIDPredicate
public static "id"(id: $ResourceLocation$$Type): $BlockIDPredicate
}
}

declare module "dev.latvian.mods.kubejs.bindings.ItemWrapper" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $Collection } from "java.util.Collection"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $FireworksJS } from "dev.latvian.mods.kubejs.level.FireworksJS"

/** Various item related helper methods */
export interface $ItemWrapper {
}

export namespace $ItemWrapper {
const KJS_ARMOR_MODIFIER_UUID_PER_SLOT: $UUID[]
const KJS_BASE_ATTACK_DAMAGE_UUID: $UUID
const KJS_BASE_ATTACK_SPEED_UUID: $UUID
function exists(id: $ResourceLocation$$Type): boolean
function fireworks(properties: $Map$$Type<string, any>): $FireworksJS
function getEmpty(): $ItemStack
function getId(item: $Item$$Type): $ResourceLocation
function getItem(id: $ResourceLocation$$Type): $Item
function getList(): $List<$ItemStack>
function getTypeList(): $List<string>
function getTypeToStackMap(): $Map<$ResourceLocation, $Collection<$ItemStack>>
function getVariants(item: $ItemStack$$Type): $Collection<$ItemStack>
function isItem(o: any): boolean
function of(in_: $ItemStack$$Type): $ItemStack
function of(in_: $ItemStack$$Type, count: integer): $ItemStack
function of(in_: $ItemStack$$Type, tag: $CompoundTag$$Type): $ItemStack
function of(in_: $ItemStack$$Type, count: integer, nbt: $CompoundTag$$Type): $ItemStack
function playerHead(uuid: $UUID$$Type, textureBase64: string): $ItemStack
function playerHead(name: string): $ItemStack
function playerHeadFromSkinHash(hash: string): $ItemStack
function playerHeadFromUrl(url: string): $ItemStack
function withNBT(in_: $ItemStack$$Type, nbt: $CompoundTag$$Type): $ItemStack
}
export abstract class $ItemWrapper$$Static implements $ItemWrapper {
static readonly "KJS_ARMOR_MODIFIER_UUID_PER_SLOT": $UUID[]
static readonly "KJS_BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "KJS_BASE_ATTACK_SPEED_UUID": $UUID

/** Checks if the provided item id exists in the registry */
static "exists"(id: $ResourceLocation$$Type): boolean
/** Returns a Firework with the input properties */
static "fireworks"(properties: $Map$$Type<string, any>): $FireworksJS
/** Get the item that represents air/an empty slot */
static "getEmpty"(): $ItemStack
/** Gets an items id from the Item */
static "getId"(item: $Item$$Type): $ResourceLocation
/** Gets an Item from an item id */
static "getItem"(id: $ResourceLocation$$Type): $Item
/** Get a list of most items in the game. Items not in a creative tab are ignored */
static "getList"(): $List<$ItemStack>
/** Get a list of all the item ids in the game */
static "getTypeList"(): $List<string>
static "getTypeToStackMap"(): $Map<$ResourceLocation, $Collection<$ItemStack>>
static "getVariants"(item: $ItemStack$$Type): $Collection<$ItemStack>
/**
 * Checks if the passed in object is an ItemStack.
 * Note that this does not mean it will not function as an ItemStack if passed to something that requests one.
 */
static "isItem"(o: any): boolean
/** Returns an ItemStack of the input */
static "of"(in_: $ItemStack$$Type): $ItemStack
/** Returns an ItemStack of the input, with the specified count */
static "of"(in_: $ItemStack$$Type, count: integer): $ItemStack
/** Returns an ItemStack of the input, with the specified NBT data */
static "of"(in_: $ItemStack$$Type, tag: $CompoundTag$$Type): $ItemStack
/** Returns an ItemStack of the input, with the specified count and NBT data */
static "of"(in_: $ItemStack$$Type, count: integer, nbt: $CompoundTag$$Type): $ItemStack
static "playerHead"(uuid: $UUID$$Type, textureBase64: string): $ItemStack
static "playerHead"(name: string): $ItemStack
static "playerHeadFromSkinHash"(hash: string): $ItemStack
static "playerHeadFromUrl"(url: string): $ItemStack
/** Returns an ItemStack of the input, with the specified NBT data */
static "withNBT"(in_: $ItemStack$$Type, nbt: $CompoundTag$$Type): $ItemStack
}
}

declare module "dev.latvian.mods.kubejs.bindings.KMath" {
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $Quaternionf } from "org.joml.Quaternionf"
import { $Vector3f } from "org.joml.Vector3f"
import { $Matrix3f } from "org.joml.Matrix3f"
import { $Vector3d } from "org.joml.Vector3d"
import { $Vector4f } from "org.joml.Vector4f"
import { $Matrix4f } from "org.joml.Matrix4f"

export class $KMath {
static readonly "DEGREES_TO_RADIANS": double
static readonly "E": double
static readonly "PI": double
static readonly "RADIANS_TO_DEGREES": double

constructor()

public static "approach"(current: double, target: double, speed: double): double
public static "approachDegrees"(current: double, target: double, speed: double): double
public static "block"(x: double, y: double, z: double): $BlockPos
public static "ceil"(value: double): long
public static "clamp"(value: double, min: double, max: double): double
public static "clampedLerp"(value: double, min: double, max: double): double
public static "deg"(value: double): double
public static "degreesDifference"(current: double, target: double): double
public static "floor"(value: double): long
public static "isPowerOfTwo"(value: integer): boolean
public static "lerp"(value: double, min: double, max: double): double
public static "m3f"(): $Matrix3f
public static "m4f"(): $Matrix4f
public static "map"(value: double, min0: double, max0: double, min1: double, max1: double): double
public static "quaternion"(x: float, y: float, z: float, w: float): $Quaternionf
public static "rad"(value: double): double
public static "rotateIfNecessary"(current: double, target: double, max: double): double
public static "v3"(x: double, y: double, z: double): $Vec3
public static "v3d"(x: double, y: double, z: double): $Vector3d
public static "v3f"(x: float, y: float, z: float): $Vector3f
public static "v4f"(x: float, y: float, z: float, w: float): $Vector4f
public static "wrapDegrees"(d: double): double
}
}

declare module "dev.latvian.mods.kubejs.bindings.IngredientWrapper" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $InputItem } from "dev.latvian.mods.kubejs.item.InputItem"
import { $CustomIngredientActionCallback$$Type } from "dev.latvian.mods.kubejs.recipe.ingredientaction.CustomIngredientActionCallback"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Ingredient, $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

/** Various Ingredient related helper methods */
export interface $IngredientWrapper {
}

export namespace $IngredientWrapper {
const all: $Ingredient
const none: $Ingredient
function custom(parent: $Ingredient$$Type, predicate: $Predicate$$Type<$ItemStack$$Type>): $Ingredient
function custom(predicate: $Predicate$$Type<$ItemStack$$Type>): $Ingredient
function customNBT(in_: $Ingredient$$Type, predicate: $Predicate$$Type<$CompoundTag$$Type>): $Ingredient
function isIngredient(o: any): boolean
function of(ingredient: $Ingredient$$Type, count: integer): $InputItem
function of(ingredient: $Ingredient$$Type): $Ingredient
function registerCustomIngredientAction(id: string, callback: $CustomIngredientActionCallback$$Type): void
}
export abstract class $IngredientWrapper$$Static implements $IngredientWrapper {
/** An ingredient that matches everything */
static readonly "all": $Ingredient
/** A completely empty ingredient that will only match air */
static readonly "none": $Ingredient

/** Make a custom ingredient where items must match both the parent ingredient and the custom predicate function */
static "custom"(parent: $Ingredient$$Type, predicate: $Predicate$$Type<$ItemStack$$Type>): $Ingredient
/** Make a custom ingredient where a match must match the provided predicate function */
static "custom"(predicate: $Predicate$$Type<$ItemStack$$Type>): $Ingredient
/** Make a custom ingredient where an item must match both the parent ingredient and the item's nbt must match the custom predicate function */
static "customNBT"(in_: $Ingredient$$Type, predicate: $Predicate$$Type<$CompoundTag$$Type>): $Ingredient
/**
 * Checks if the passed in object is an Ingredient.
 * Note that this does not mean it will not function as an Ingredient if passed to something that requests one.
 */
static "isIngredient"(o: any): boolean
/** Returns an ingredient of the input, with the specified count */
static "of"(ingredient: $Ingredient$$Type, count: integer): $InputItem
/** Returns an ingredient of the input */
static "of"(ingredient: $Ingredient$$Type): $Ingredient
/** Register a custom ingredient action for use in recipes with Recipe#customIngredientAction */
static "registerCustomIngredientAction"(id: string, callback: $CustomIngredientActionCallback$$Type): void
}
}

declare module "dev.latvian.mods.kubejs.bindings.UtilsWrapper" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Stat } from "net.minecraft.stats.Stat"
import { $CreativeModeTab } from "net.minecraft.world.item.CreativeModeTab"
import { $RegistryInfo } from "dev.latvian.mods.kubejs.registry.RegistryInfo"
import { $ParticleOptions } from "net.minecraft.core.particles.ParticleOptions"
import { $Collection$$Type } from "java.util.Collection"
import { $DustParticleOptions } from "net.minecraft.core.particles.DustParticleOptions"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $Random, $Random$$Type } from "java.util.Random"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $List } from "java.util.List"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $Map } from "java.util.Map"
import { $Pattern } from "java.util.regex.Pattern"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $CountingMap } from "dev.latvian.mods.rhino.mod.util.CountingMap"
import { $Lazy } from "dev.latvian.mods.kubejs.util.Lazy"

/** A collection of utilities */
export interface $UtilsWrapper {
}

export namespace $UtilsWrapper {
const ERROR_PARTICLE: $DustParticleOptions
function copy(o: any): any
function emptyList<T>(): $List<T>
function emptyMap<K, V>(): $Map<K, V>
function expiringLazy<T>(supplier: $Supplier$$Type<T>, time: long): $Lazy<T>
function findCreativeTab(id: $ResourceLocation$$Type): $CreativeModeTab
function getRandom(): $Random
function getRegistry(id: $ResourceLocation$$Type): $RegistryInfo<any>
function getRegistryIds(id: $ResourceLocation$$Type): $List<$ResourceLocation>
function getServer(): $MinecraftServer
function getSound(id: $ResourceLocation$$Type): $SoundEvent
function getStat(id: $ResourceLocation$$Type): $Stat<$ResourceLocation>
function getSystemTime(): long
function id(namespace: string, path: string): $ResourceLocation
function id(id: $ResourceLocation$$Type): $ResourceLocation
function isWrapped(o: any): boolean
function lazy<T>(supplier: $Supplier$$Type<T>): $Lazy<T>
function newCountingMap(): $CountingMap
function newList(): $List<any>
function newMap(): $Map<any, any>
function newRandom(seed: long): $Random
function parseBlockState(o: any): $BlockState
function parseDouble(object: any, def: double): double
function parseInt(object: any, def: integer): integer
function particleOptions(o: any): $ParticleOptions
function queueIO(runnable: $Runnable$$Type): void
function randomOf(random: $Random$$Type, objects: $Collection$$Type<any>): any
function regex(s: any): $Pattern
function regex(pattern: string, flags: integer): $Pattern
function rollChestLoot(id: $ResourceLocation$$Type, entity: $Entity$$Type): $List<$ItemStack>
function rollChestLoot(id: $ResourceLocation$$Type): $List<$ItemStack>
function runAsync(task: $Runnable$$Type): $CompletableFuture<void>
function snakeCaseToCamelCase(string: string): string
function snakeCaseToTitleCase(string: string): string
function supplyAsync(task: $Supplier$$Type<any>): $CompletableFuture<any>
function toTitleCase(s: string): string
function toTitleCase(s: string, ignoreSpecial: boolean): string
}
export abstract class $UtilsWrapper$$Static implements $UtilsWrapper {
static readonly "ERROR_PARTICLE": $DustParticleOptions

/** Returns a copy the object if possible, or the object itself if not */
static "copy"(o: any): any
/** Get an immutable empty list */
static "emptyList"<T>(): $List<T>
/** Get an immutable empty map */
static "emptyMap"<K, V>(): $Map<K, V>
/** Returns a lazy value with the supplier function as its value factory, that will expire after the specified number of milliseconds */
static "expiringLazy"<T>(supplier: $Supplier$$Type<T>, time: long): $Lazy<T>
/** Returns the creative tab associated with the id */
static "findCreativeTab"(id: $ResourceLocation$$Type): $CreativeModeTab
/** Get a Random, for generating random numbers. Note this will always return the same Random instance */
static "getRandom"(): $Random
/** Gets the specified registry */
static "getRegistry"(id: $ResourceLocation$$Type): $RegistryInfo<any>
/** Gets all ids from the registry with the specified id */
static "getRegistryIds"(id: $ResourceLocation$$Type): $List<$ResourceLocation>
/** Get the server. Null if there is no server (startup or client) */
static "getServer"(): $MinecraftServer
/** Gets a SoundEvent from the id */
static "getSound"(id: $ResourceLocation$$Type): $SoundEvent
/**
 * Returns a Stat of the passed in ResourceLocation.
 * Note that this requires the same ResourceLocation to get the same stat, so should not be used unless you want to make your own stat, and are storing an actual ResourceLocation somewhere to access it.
 */
static "getStat"(id: $ResourceLocation$$Type): $Stat<$ResourceLocation>
/** Gets the current system time, in milliseconds */
static "getSystemTime"(): long
/** Returns a ResourceLocation with the specified namepsace and path */
static "id"(namespace: string, path: string): $ResourceLocation
/** Typewraps the input string to a ResourceLocation. Format should be namespace:path */
static "id"(id: $ResourceLocation$$Type): $ResourceLocation
/** Checks if the passed in object is an instance of WrappedJS */
static "isWrapped"(o: any): boolean
/** Returns a lazy value with the supplier function as its value factory */
static "lazy"<T>(supplier: $Supplier$$Type<T>): $Lazy<T>
/** Returns a new counting map */
static "newCountingMap"(): $CountingMap
/** Returns a new mutable list */
static "newList"(): $List<any>
/** Returns a new mutable map */
static "newMap"(): $Map<any, any>
/** Get a new random with the specified seed */
static "newRandom"(seed: long): $Random
/** Parses a block state from the input string. May throw for invalid inputs! */
static "parseBlockState"(o: any): $BlockState
/** Tries to parse the first parameter as a double and returns that. The second parameter is returned if parsing fails */
static "parseDouble"(object: any, def: double): double
/** Tries to parse the first parameter as an integer, and returns that. The second parameter is returned if parsing fails */
static "parseInt"(object: any, def: integer): integer
static "particleOptions"(o: any): $ParticleOptions
/** Immediately run the passed runnable function in a try-catch block, and log the exception if it throws */
static "queueIO"(runnable: $Runnable$$Type): void
/** Gets a random object from the list using the passed in random */
static "randomOf"(random: $Random$$Type, objects: $Collection$$Type<any>): any
/** Returns a regex pattern of the input */
static "regex"(s: any): $Pattern
/** Returns a regex pattern of the input with the specified flags */
static "regex"(pattern: string, flags: integer): $Pattern
/** Returns the results of rolling the specified loot table with the entity as a parameter (it does not have to be a chest loot table) */
static "rollChestLoot"(id: $ResourceLocation$$Type, entity: $Entity$$Type): $List<$ItemStack>
/** Returns the results of rolling the specified loot table (it does not have to be a chest loot table) */
static "rollChestLoot"(id: $ResourceLocation$$Type): $List<$ItemStack>
/** Runs the provided runnable function in KubeJS' background thread and returns its CompletableFuture */
static "runAsync"(task: $Runnable$$Type): $CompletableFuture<void>
/** Returns the provided snake_case_string in camelCase */
static "snakeCaseToCamelCase"(string: string): string
/** Returns the provided snake_case_string in Title Case */
static "snakeCaseToTitleCase"(string: string): string
/** Runs the provided supplier function in KubeJS' background thread and returns its CompletableFuture */
static "supplyAsync"(task: $Supplier$$Type<any>): $CompletableFuture<any>
/** Capitalises the first letter of the string unless it is "a", "an", "the", "of", "on", "in", "and", "or", "but" or "for" */
static "toTitleCase"(s: string): string
/** Capitalises the first letter of the string. If ignoreSpecial is true, it will also capitalise articles and prepositions */
static "toTitleCase"(s: string, ignoreSpecial: boolean): string
}
}

