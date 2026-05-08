declare module "dev.latvian.mods.kubejs.block.predicate.BlockPredicate" {
import { $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"

export interface $BlockPredicate {
"check"(blockContainerJS0: $BlockContainerJS$$Type): boolean
}

export namespace $BlockPredicate {
const probejs$$marker: never
}
export abstract class $BlockPredicate$$Static implements $BlockPredicate {
}
}

declare module "dev.latvian.mods.kubejs.block.custom.StairBlockBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ShapedBlockBuilder } from "dev.latvian.mods.kubejs.block.custom.ShapedBlockBuilder"
import { $Block } from "net.minecraft.world.level.block.Block"

export class $StairBlockBuilder extends $ShapedBlockBuilder {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $Block
}
}

declare module "dev.latvian.mods.kubejs.block.custom.FenceGateBlockBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ShapedBlockBuilder } from "dev.latvian.mods.kubejs.block.custom.ShapedBlockBuilder"
import { $WoodType$$Type } from "net.minecraft.world.level.block.state.properties.WoodType"
import { $Block } from "net.minecraft.world.level.block.Block"

export class $FenceGateBlockBuilder extends $ShapedBlockBuilder {
constructor(i: $ResourceLocation$$Type)

public "behaviour"(wt: string): $FenceGateBlockBuilder
public "behaviour"(wt: $WoodType$$Type): $FenceGateBlockBuilder
public "createObject"(): $Block
}
}

declare module "dev.latvian.mods.kubejs.block.BlockBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $BlockRightClickedEventJS$$Type } from "dev.latvian.mods.kubejs.block.BlockRightClickedEventJS"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $AfterEntityFallenOnBlockCallbackJS$$Type } from "dev.latvian.mods.kubejs.block.callbacks.AfterEntityFallenOnBlockCallbackJS"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockBehaviour$Properties } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $Function$$Type } from "java.util.function.Function"
import { $BlockItemBuilder$$Type } from "dev.latvian.mods.kubejs.block.BlockItemBuilder"
import { $MapColor$$Type } from "net.minecraft.world.level.material.MapColor"
import { $CanBeReplacedCallbackJS$$Type } from "dev.latvian.mods.kubejs.block.callbacks.CanBeReplacedCallbackJS"
import { $NoteBlockInstrument$$Type } from "net.minecraft.world.level.block.state.properties.NoteBlockInstrument"
import { $LootBuilder, $LootBuilder$$Type } from "dev.latvian.mods.kubejs.loot.LootBuilder"
import { $BuilderBase } from "dev.latvian.mods.kubejs.registry.BuilderBase"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $BlockStateRotateCallbackJS$$Type } from "dev.latvian.mods.kubejs.block.callbacks.BlockStateRotateCallbackJS"
import { $Property$$Type } from "net.minecraft.world.level.block.state.properties.Property"
import { $BlockEntityInfo$$Type } from "dev.latvian.mods.kubejs.block.entity.BlockEntityInfo"
import { $EntityFallenOnBlockCallbackJS$$Type } from "dev.latvian.mods.kubejs.block.callbacks.EntityFallenOnBlockCallbackJS"
import { $SoundType$$Type } from "net.minecraft.world.level.block.SoundType"
import { $BlockStateMirrorCallbackJS$$Type } from "dev.latvian.mods.kubejs.block.callbacks.BlockStateMirrorCallbackJS"
import { $RandomTickCallbackJS, $RandomTickCallbackJS$$Type } from "dev.latvian.mods.kubejs.block.RandomTickCallbackJS"
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $List$$Type } from "java.util.List"
import { $BlockStateModifyCallbackJS$$Type } from "dev.latvian.mods.kubejs.block.callbacks.BlockStateModifyCallbackJS"
import { $BlockExplodedCallbackJS$$Type } from "dev.latvian.mods.kubejs.block.callbacks.BlockExplodedCallbackJS"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $EntitySteppedOnBlockCallbackJS$$Type } from "dev.latvian.mods.kubejs.block.callbacks.EntitySteppedOnBlockCallbackJS"
import { $VoxelShape } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $BlockTintFunction$$Type } from "dev.latvian.mods.kubejs.block.BlockTintFunction"
import { $BlockStateModifyPlacementCallbackJS$$Type } from "dev.latvian.mods.kubejs.block.callbacks.BlockStateModifyPlacementCallbackJS"

export class $BlockBuilder extends $BuilderBase<$Block> {
constructor(i: $ResourceLocation$$Type)

/**
 * Set how this block bounces/moves entities that land on top of this. Do not use this to modify the block, use fallOn instead!
 * Use ctx.bounce(height) or ctx.setVelocity(x, y, z) to change the entities velocity.
 */
public "afterFallenOn"(callbackJS: $Consumer$$Type<$AfterEntityFallenOnBlockCallbackJS$$Type>): $BlockBuilder
/** Creates a Block Entity for this block */
public "blockEntity"(callback: $Consumer$$Type<$BlockEntityInfo$$Type>): $BlockBuilder
/**
 * Bounces entities that land on this block by bounciness * their fall velocity.
 * Do not make bounciness negative, as that is a recipe for a long and laggy trip to the void
 */
public "bounciness"(bounciness: float): $BlockBuilder
/** Set the shape of the block. */
public "box"(x0: double, y0: double, z0: double, x1: double, y1: double, z1: double, scale16: boolean): $BlockBuilder
/** Set the shape of the block. */
public "box"(x0: double, y0: double, z0: double, x1: double, y1: double, z1: double): $BlockBuilder
/** Set if the block can be replaced by something else. */
public "canBeReplaced"(callbackJS: $Predicate$$Type<$CanBeReplacedCallbackJS$$Type>): $BlockBuilder
/** Checks if the block can be waterlogged. */
public "canBeWaterlogged"(): boolean
/** Set the color of a specific layer of the block. */
public "color"(color: $BlockTintFunction$$Type): $BlockBuilder
/** Set the color of a specific layer of the block. */
public "color"(index: integer, color: $BlockTintFunction$$Type): $BlockBuilder
public "createProperties"(): $BlockBehaviour$Properties
public static "createShape"(boxes: $List$$Type<$AABB$$Type>): $VoxelShape
public "cropSoundType"(): $BlockBuilder
/** Helper method for setting the render type of the block to `cutout` correctly. */
public "defaultCutout"(): $BlockBuilder
/** Set the default state of the block. */
public "defaultState"(callbackJS: $Consumer$$Type<$BlockStateModifyCallbackJS$$Type>): $BlockBuilder
/** Helper method for setting the render type of the block to `translucent` correctly. */
public "defaultTranslucent"(): $BlockBuilder
/**
 * Sets the display name for this object, e.g. `Stone`.
 * 
 * This will be overridden by a lang file if it exists.
 */
public "displayName"(name: $Component$$Type): $BuilderBase<$Block>
/** Sets the block's map color dynamically per block state. If unset, defaults to NONE. */
public "dynamicMapColor"(m: $Function$$Type<$BlockState$$Type, any>): $BlockBuilder
/** Set how this block reacts after an explosion. Note the block has already been destroyed at this point */
public "exploded"(callbackJS: $Consumer$$Type<$BlockExplodedCallbackJS$$Type>): $BlockBuilder
/** Set what happens when an entity falls on the block. Do not use this for moving them, use bounce instead! */
public "fallenOn"(callbackJS: $Consumer$$Type<$EntityFallenOnBlockCallbackJS$$Type>): $BlockBuilder
/** Sets the block should be a full block or not, like cactus or doors. */
public "fullBlock"(f: boolean): $BlockBuilder
/** @deprecated */
public "getWaterlogged"(): boolean
public "glassSoundType"(): $BlockBuilder
public "grassSoundType"(): $BlockBuilder
public "gravelSoundType"(): $BlockBuilder
/**
 * Sets the hardness of the block. Defaults to 1.5.
 * 
 * Setting this to -1 will make the block unbreakable like bedrock.
 */
public "hardness"(h: float): $BlockBuilder
/** Note block instrument. */
public "instrument"(i: $NoteBlockInstrument$$Type): $BlockBuilder
/** Modifies the block's item representation. */
public "item"(i: $Consumer$$Type<$BlockItemBuilder$$Type>): $BlockBuilder
/** Set how high you can jump on the block. */
public "jumpFactor"(f: float): $BlockBuilder
/** Sets the light level of the block. Defaults to 0 (no light). */
public "lightLevel"(light: float): $BlockBuilder
/** Sets the block's map color. Defaults to NONE. */
public "mapColor"(m: $MapColor$$Type): $BlockBuilder
public "material"(material: string): $BlockBuilder
/** Set the callback used for determining how the block is mirrored */
public "mirrorState"(callbackJS: $Consumer$$Type<$BlockStateMirrorCallbackJS$$Type>): $BlockBuilder
/** Set the block's model. */
public "model"(m: string): $BlockBuilder
/** Makes the block not collide with entities. */
public "noCollision"(): $BlockBuilder
/** Clears all drops for the block. */
public "noDrops"(): $BlockBuilder
/** Set the block to have no corresponding item. */
public "noItem"(): $BlockBuilder
public "noSoundType"(): $BlockBuilder
/** Makes mobs not spawn on the block. */
public "noValidSpawns"(b: boolean): $BlockBuilder
/** Makes the block not be solid. */
public "notSolid"(): $BlockBuilder
/** Sets the opacity of the block. Opaque blocks do not let light through. */
public "opaque"(o: boolean): $BlockBuilder
/** Set the callback for determining the blocks state when placed. */
public "placementState"(callbackJS: $Consumer$$Type<$BlockStateModifyPlacementCallbackJS$$Type>): $BlockBuilder
/**
 * Add a blockstate property to the block.
 * 
 * For example, facing, lit, etc.
 */
public "property"(property: $Property$$Type<any>): $BlockBuilder
/** Sets random tick callback for this black. */
public "randomTick"(randomTickCallback: $Consumer$$Type<$RandomTickCallbackJS$$Type>): $BlockBuilder
/** Makes the block a redstone conductor. */
public "redstoneConductor"(b: boolean): $BlockBuilder
/** Sets the render type of the block. Can be `cutout`, `cutout_mipped`, `translucent`, or `basic`. */
public "renderType"(l: string): $BlockBuilder
/** Makes the block require a tool to have drops when broken. */
public "requiresTool"(): $BlockBuilder
/** Makes the block require a tool to have drops when broken. */
public "requiresTool"(f: boolean): $BlockBuilder
/** Sets the blast resistance of the block. Defaults to 3. */
public "resistance"(r: float): $BlockBuilder
/** Set the callback used for right-clicking on the block */
public "rightClick"(callbackJS: $Consumer$$Type<$BlockRightClickedEventJS$$Type>): $BlockBuilder
/** Set the callback used for determining how the block rotates */
public "rotateState"(callbackJS: $Consumer$$Type<$BlockStateRotateCallbackJS$$Type>): $BlockBuilder
public "sandSoundType"(): $BlockBuilder
/** @deprecated */
public "setWaterlogged"(waterlogged: boolean): $BlockBuilder
/** Set how slippery the block is. */
public "slipperiness"(f: float): $BlockBuilder
/** Sets the block's sound type. Defaults to wood. */
public "soundType"(m: $SoundType$$Type): $BlockBuilder
/**
 * Set how fast you can walk on the block.
 * 
 * Any value above 1 will make you walk insanely fast as your speed is multiplied by this value each tick.
 * 
 * Recommended values are between 0.1 and 1, useful for mimicking soul sand or ice.
 */
public "speedFactor"(f: float): $BlockBuilder
/**
 * Set what happens when an entity steps on the block
 * This is called every tick for every entity standing on the block, so be careful what you do here.
 */
public "steppedOn"(callbackJS: $Consumer$$Type<$EntitySteppedOnBlockCallbackJS$$Type>): $BlockBuilder
public "stoneSoundType"(): $BlockBuilder
/** Makes the block suffocating. */
public "suffocating"(b: boolean): $BlockBuilder
/** Tags the block with the given tag. */
public "tagBlock"(tag: $ResourceLocation$$Type): $BlockBuilder
/** Tags both the block and the item with the given tag. */
public "tagBoth"(tag: $ResourceLocation$$Type): $BlockBuilder
/** Tags the item with the given tag. */
public "tagItem"(tag: $ResourceLocation$$Type): $BlockBuilder
/** Texture a specific texture key of the block. */
public "texture"(id: string, tex: string): $BlockBuilder
/** Texture the block on all sides with the same texture. */
public "textureAll"(tex: string): $BlockBuilder
/** Texture a specific side of the block. */
public "textureSide"(direction: $Direction$$Type, tex: string): $BlockBuilder
public "transformObject"(obj: $Block$$Type): $Block
/** Makes the block transparent. */
public "transparent"(b: boolean): $BlockBuilder
/** Makes the block unbreakable. */
public "unbreakable"(): $BlockBuilder
/** Makes the block view blocking. */
public "viewBlocking"(b: boolean): $BlockBuilder
/** Makes the block can be waterlogged. */
public "waterlogged"(): $BlockBuilder
public "woodSoundType"(): $BlockBuilder
get "blockstateJson"(): $JsonObject
set "blockstateJson"(value: $JsonObject$$Type)
get "lootTable"(): $Consumer<$LootBuilder>
set "lootTable"(value: $Consumer$$Type<$LootBuilder$$Type>)
get "modelJson"(): $JsonObject
set "modelJson"(value: $JsonObject$$Type)
get "randomTickCallback"(): $Consumer<$RandomTickCallbackJS>
set "randomTickCallback"(value: $Consumer$$Type<$RandomTickCallbackJS$$Type>)
}
}

declare module "dev.latvian.mods.kubejs.block.callbacks.BlockStateModifyCallbackJS" {
import { $ImmutableMap } from "com.google.common.collect.ImmutableMap"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Collection } from "java.util.Collection"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Property, $Property$$Type } from "net.minecraft.world.level.block.state.properties.Property"
import { $BooleanProperty$$Type } from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import { $IntegerProperty$$Type } from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $Mirror$$Type } from "net.minecraft.world.level.block.Mirror"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $EnumProperty$$Type } from "net.minecraft.world.level.block.state.properties.EnumProperty"
import { $Map$$Type } from "java.util.Map"
import { $Optional } from "java.util.Optional"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"

export class $BlockStateModifyCallbackJS {
constructor(state: $BlockState$$Type)

/** Cycles the property */
public "cycle"<T extends $Comparable<T>>(property: $Property$$Type<T>): $BlockStateModifyCallbackJS
/** Gets the value of the pased in property */
public "get"<T extends $Comparable<T>>(property: $Property$$Type<T>): T
/** Gets the value of the passed in property as an Optional. If the property does not exist in this block the Optional will be empty */
public "getOptionalValue"<T extends $Comparable<T>>(property: $Property$$Type<T>): $Optional<T>
/** Get the properties this block has that can be changed */
public "getProperties"(): $Collection<$Property<any>>
/** Gets the state. If it has been modified, gets the new state */
public "getState"(): $BlockState
/** Gets the value of the passed in property */
public "getValue"<T extends $Comparable<T>>(property: $Property$$Type<T>): T
/** Get a map of this blocks properties to it's value */
public "getValues"(): $ImmutableMap<$Property<any>, $Comparable<any>>
/** Checks if this block has the specified property */
public "hasProperty"<T extends $Comparable<T>>(property: $Property$$Type<T>): boolean
/** Mirror the block using the specified Mirror */
public "mirror"(mirror: $Mirror$$Type): $BlockStateModifyCallbackJS
public "populateNeighbours"(map: $Map$$Type<$Map$$Type<$Property$$Type<any>, $Comparable$$Type<any>>, $BlockState$$Type>): $BlockStateModifyCallbackJS
/** Rotate the block using the specified Rotation */
public "rotate"(rotation: $Rotation$$Type): $BlockStateModifyCallbackJS
/** Sets the value of the specified boolean property */
public "set"(property: $BooleanProperty$$Type, value: boolean): $BlockStateModifyCallbackJS
/** Sets the value of the specified integer property */
public "set"(property: $IntegerProperty$$Type, value: integer): $BlockStateModifyCallbackJS
/** Sets the value of the specified enum property */
public "set"<T extends ($Enum<T> & $StringRepresentable)>(property: $EnumProperty$$Type<T>, value: string): $BlockStateModifyCallbackJS
/** Sets the value of the specified property */
public "setValue"<T extends $Comparable<T>, V extends T>(property: $Property$$Type<T>, comparable: V): $BlockStateModifyCallbackJS
/** Updates the shape of this block. Mostly used in waterloggable blocks to update the water flow */
public "updateShape"(direction: $Direction$$Type, blockState: $BlockState$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, blockPos2: $BlockPos$$Type): $BlockStateModifyCallbackJS
get "properties"(): $Collection<$Property<any>>
get "state"(): $BlockState
get "values"(): $ImmutableMap<$Property<any>, $Comparable<any>>
}
}

declare module "dev.latvian.mods.kubejs.block.custom.FenceBlockBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $MultipartShapedBlockBuilder } from "dev.latvian.mods.kubejs.block.custom.MultipartShapedBlockBuilder"

export class $FenceBlockBuilder extends $MultipartShapedBlockBuilder {
constructor(i: $ResourceLocation$$Type)

}
}

declare module "dev.latvian.mods.kubejs.block.predicate.BlockEntityPredicateDataCheck" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"

export interface $BlockEntityPredicateDataCheck {
"checkData"(compoundTag0: $CompoundTag$$Type): boolean
}

export namespace $BlockEntityPredicateDataCheck {
const probejs$$marker: never
}
export abstract class $BlockEntityPredicateDataCheck$$Static implements $BlockEntityPredicateDataCheck {
}
}

declare module "dev.latvian.mods.kubejs.block.BlockBrokenEventJS" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $IntValue$$Type } from "dev.architectury.utils.value.IntValue"
import { $PlayerEventJS } from "dev.latvian.mods.kubejs.player.PlayerEventJS"
import { $Level$$Type } from "net.minecraft.world.level.Level"

/** Invoked when a block is destroyed by a player. */
export class $BlockBrokenEventJS extends $PlayerEventJS {
constructor(entity: $ServerPlayer$$Type, level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, xp: $IntValue$$Type)

/** The block that was broken. */
public "getBlock"(): $BlockContainerJS
/** The experience dropped by the block. Always `0` on Fabric. */
public "getXp"(): integer
/** Sets the experience dropped by the block. Only works on Forge. */
public "setXp"(xp: integer): void
get "block"(): $BlockContainerJS
get "xp"(): integer
set "xp"(value: integer)
}
}

declare module "dev.latvian.mods.kubejs.block.custom.HorizontalDirectionalBlockBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BlockBuilder } from "dev.latvian.mods.kubejs.block.BlockBuilder"
import { $Block } from "net.minecraft.world.level.block.Block"

export class $HorizontalDirectionalBlockBuilder extends $BlockBuilder {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $Block
public "textureAll"(tex: string): $HorizontalDirectionalBlockBuilder
}
}

declare module "dev.latvian.mods.kubejs.block.callbacks.EntityFallenOnBlockCallbackJS" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $EntitySteppedOnBlockCallbackJS } from "dev.latvian.mods.kubejs.block.callbacks.EntitySteppedOnBlockCallbackJS"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $EntityFallenOnBlockCallbackJS extends $EntitySteppedOnBlockCallbackJS {
constructor(level: $Level$$Type, entity: $Entity$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, fallHeight: float)

/**
 * Applies fall damage to the entity as if they had fallen from the provided height, and multiplies it by the provided multiplier.
 * Note this does not force it, so entities that do not take fall damage are not affected.
 */
public "applyFallDamage"(fallHeight: float, multiplier: float): boolean
/**
 * Damages the entity using the provided damage source, using the fall height and multiplier to calculate the damage amount.
 * Note this does not force the damage, so entities that do not take fall damage are not affected.
 */
public "applyFallDamage"(fallHeight: float, multiplier: float, damageSource: $DamageSource$$Type): boolean
/**
 * Applies default fall damage to the entity.
 * Note this does not force it, so entities that do not take fall damage are not affected.
 */
public "applyFallDamage"(): boolean
/**
 * Applies fall damage to the entity, multiplier by the multiplier.
 * Note this does not force it, so entities that do not take fall damage are not affected.
 */
public "applyFallDamage"(multiplier: float): boolean
/** Get the height the entity has fallen */
public "getFallHeight"(): float
get "fallHeight"(): float
}
}

declare module "dev.latvian.mods.kubejs.block.callbacks.BlockExplodedCallbackJS" {
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $List } from "java.util.List"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $DamageSource } from "net.minecraft.world.damagesource.DamageSource"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $Explosion, $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $Player } from "net.minecraft.world.entity.player.Player"

export class $BlockExplodedCallbackJS {
constructor(level: $Level$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type)

public "getAffectedPlayers"(): $List<$Player>
public "getBlock"(): $BlockContainerJS
public "getBlockState"(): $BlockState
public "getCause"(): $Entity
public "getDamageSource"(): $DamageSource
public "getExplosion"(): $Explosion
public "getIgniter"(): $LivingEntity
public "getLevel"(): $Level
public "getRadius"(): float
get "affectedPlayers"(): $List<$Player>
get "block"(): $BlockContainerJS
get "blockState"(): $BlockState
get "cause"(): $Entity
get "damageSource"(): $DamageSource
get "explosion"(): $Explosion
get "igniter"(): $LivingEntity
get "level"(): $Level
get "radius"(): float
}
}

declare module "dev.latvian.mods.kubejs.block.BlockModificationEventJS" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $BlockStatePredicate$$Type } from "dev.latvian.mods.kubejs.block.state.BlockStatePredicate"

export class $BlockModificationEventJS extends $EventJS {
constructor()

/**
 * Modifies blocks that match the given predicate.
 * 
 * **NOTE**: tag predicates are not supported at this time.
 */
public "modify"(predicate: $BlockStatePredicate$$Type, c: $Consumer$$Type<$Block$$Type>): void
}
}

declare module "dev.latvian.mods.kubejs.block.custom.ButtonBlockBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ShapedBlockBuilder } from "dev.latvian.mods.kubejs.block.custom.ShapedBlockBuilder"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $BlockSetType$$Type } from "net.minecraft.world.level.block.state.properties.BlockSetType"

export class $ButtonBlockBuilder extends $ShapedBlockBuilder {
constructor(i: $ResourceLocation$$Type)

public "arrowsCanPress"(b: boolean): $ButtonBlockBuilder
public "behaviour"(wt: string): $ButtonBlockBuilder
public "behaviour"(wt: $BlockSetType$$Type): $ButtonBlockBuilder
public "createObject"(): $Block
public "ticksToStayPressed"(t: integer): $ButtonBlockBuilder
}
}

declare module "dev.latvian.mods.kubejs.block.BlockRightClickedEventJS" {
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $PlayerEventJS } from "dev.latvian.mods.kubejs.player.PlayerEventJS"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

/** Invoked when a player right clicks on a block. */
export class $BlockRightClickedEventJS extends $PlayerEventJS {
constructor(player: $Player$$Type, hand: $InteractionHand$$Type, pos: $BlockPos$$Type, direction: $Direction$$Type)

/** The block that was right clicked. */
public "getBlock"(): $BlockContainerJS
/** The face of the block being right clicked. */
public "getFacing"(): $Direction
/** The hand that was used to right click the block. */
public "getHand"(): $InteractionHand
/** The position of the block that was right clicked. */
public "getItem"(): $ItemStack
get "block"(): $BlockContainerJS
get "facing"(): $Direction
get "hand"(): $InteractionHand
get "item"(): $ItemStack
}
}

declare module "dev.latvian.mods.kubejs.block.custom.CarpetBlockBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ShapedBlockBuilder } from "dev.latvian.mods.kubejs.block.custom.ShapedBlockBuilder"

export class $CarpetBlockBuilder extends $ShapedBlockBuilder {
constructor(i: $ResourceLocation$$Type)

public "texture"(texture: string): $CarpetBlockBuilder
}
}

declare module "dev.latvian.mods.kubejs.block.custom.WallBlockBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $MultipartShapedBlockBuilder } from "dev.latvian.mods.kubejs.block.custom.MultipartShapedBlockBuilder"
import { $Block } from "net.minecraft.world.level.block.Block"

export class $WallBlockBuilder extends $MultipartShapedBlockBuilder {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $Block
}
}

declare module "dev.latvian.mods.kubejs.block.custom.PressurePlateBlockBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ShapedBlockBuilder } from "dev.latvian.mods.kubejs.block.custom.ShapedBlockBuilder"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $BlockSetType$$Type } from "net.minecraft.world.level.block.state.properties.BlockSetType"

export class $PressurePlateBlockBuilder extends $ShapedBlockBuilder {
constructor(i: $ResourceLocation$$Type)

public "behaviour"(wt: string): $PressurePlateBlockBuilder
public "behaviour"(wt: $BlockSetType$$Type): $PressurePlateBlockBuilder
public "createObject"(): $Block
}
}

declare module "dev.latvian.mods.kubejs.block.custom.SlabBlockBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ShapedBlockBuilder } from "dev.latvian.mods.kubejs.block.custom.ShapedBlockBuilder"
import { $Block } from "net.minecraft.world.level.block.Block"

export class $SlabBlockBuilder extends $ShapedBlockBuilder {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $Block
}
}

declare module "dev.latvian.mods.kubejs.block.DetectorBlock$Builder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BlockBuilder } from "dev.latvian.mods.kubejs.block.BlockBuilder"

export class $DetectorBlock$Builder extends $BlockBuilder {
constructor(i: $ResourceLocation$$Type)

public "detectorId"(id: string): $DetectorBlock$Builder
}
}

declare module "dev.latvian.mods.kubejs.block.entity.BlockEntityInfo" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockBuilder$$Type } from "dev.latvian.mods.kubejs.block.BlockBuilder"
import { $Map$$Type } from "java.util.Map"
import { $BlockEntityEventCallback$$Type } from "dev.latvian.mods.kubejs.block.entity.BlockEntityEventCallback"
import { $BlockEntityCallback$$Type } from "dev.latvian.mods.kubejs.block.entity.BlockEntityCallback"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export class $BlockEntityInfo {
constructor(blockBuilder: $BlockBuilder$$Type)

public "attach"(type: string, args: $Map$$Type<string, any>): void
public "clientTick"(callback: $BlockEntityCallback$$Type): void
public "clientTick"(frequency: integer, offset: integer, callback: $BlockEntityCallback$$Type): void
public "enableSync"(): void
public "eventHandler"(eventId: integer, callback: $BlockEntityEventCallback$$Type): void
public "initialData"(data: $CompoundTag$$Type): void
public "inventory"(width: integer, height: integer): void
public "inventory"(width: integer, height: integer, inputFilter: $Ingredient$$Type): void
public "rightClickOpensInventory"(): void
public "serverTick"(callback: $BlockEntityCallback$$Type): void
public "serverTick"(frequency: integer, offset: integer, callback: $BlockEntityCallback$$Type): void
public "tick"(callback: $BlockEntityCallback$$Type): void
public "tick"(frequency: integer, offset: integer, callback: $BlockEntityCallback$$Type): void
}
}

declare module "dev.latvian.mods.kubejs.block.callbacks.AfterEntityFallenOnBlockCallbackJS" {
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $EntitySteppedOnBlockCallbackJS } from "dev.latvian.mods.kubejs.block.callbacks.EntitySteppedOnBlockCallbackJS"

export class $AfterEntityFallenOnBlockCallbackJS extends $EntitySteppedOnBlockCallbackJS {
constructor(blockGetter: $BlockGetter$$Type, entity: $Entity$$Type)

/**
 * Bounce the entity upwards by bounciness * their fall velocity.
 * Do not make bounciness negative, as that is a recipe for a long and laggy trip to the void
 */
public "bounce"(bounciness: float): void
/** Returns the Vec3 of the entity's velocity. Use .x, .y and .z to get the respective components of that */
public "getVelocity"(): $Vec3
/** Sets the entity's velocity */
public "setVelocity"(x: float, y: float, z: float): void
/** Sets the entity's velocity */
public "setVelocity"(vec: $Vec3$$Type): void
get "velocity"(): $Vec3
set "velocity"(value: $Vec3$$Type)
}
}

declare module "dev.latvian.mods.kubejs.block.callbacks.EntitySteppedOnBlockCallbackJS" {
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $EntitySteppedOnBlockCallbackJS {
constructor(level: $Level$$Type, entity: $Entity$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type)

/** Returns the block */
public "getBlock"(): $BlockContainerJS
/** Returns the entity */
public "getEntity"(): $Entity
/** Returns the level */
public "getLevel"(): $Level
/** Returns the block's position */
public "getPos"(): $BlockPos
/** Returns the BlockState */
public "getState"(): $BlockState
/** Returns if the entity is suppressing bouncing (for players this is true if the player is crouching) */
public "isSuppressingBounce"(): boolean
get "block"(): $BlockContainerJS
get "entity"(): $Entity
get "level"(): $Level
get "pos"(): $BlockPos
get "state"(): $BlockState
get "suppressingBounce"(): boolean
}
}

declare module "dev.latvian.mods.kubejs.block.BlockLeftClickedEventJS" {
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $PlayerEventJS } from "dev.latvian.mods.kubejs.player.PlayerEventJS"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

/** Invoked when a player left clicks on a block. */
export class $BlockLeftClickedEventJS extends $PlayerEventJS {
constructor(player: $Player$$Type, hand: $InteractionHand$$Type, pos: $BlockPos$$Type, direction: $Direction$$Type)

/** The block that was left clicked. */
public "getBlock"(): $BlockContainerJS
/** The face of the block that was left clicked. */
public "getFacing"(): $Direction
/** The item that was used to left click the block. */
public "getItem"(): $ItemStack
get "block"(): $BlockContainerJS
get "facing"(): $Direction
get "item"(): $ItemStack
}
}

declare module "dev.latvian.mods.kubejs.block.BlockPlacedEventJS" {
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $EntityEventJS } from "dev.latvian.mods.kubejs.entity.EntityEventJS"

/** Invoked when a block is placed. */
export class $BlockPlacedEventJS extends $EntityEventJS {
constructor(entity: $Entity$$Type, level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type)

/** The block that is placed. */
public "getBlock"(): $BlockContainerJS
get "block"(): $BlockContainerJS
}
}

declare module "dev.latvian.mods.kubejs.block.callbacks.BlockStateRotateCallbackJS" {
import { $Rotation, $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $BlockStateModifyCallbackJS } from "dev.latvian.mods.kubejs.block.callbacks.BlockStateModifyCallbackJS"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export class $BlockStateRotateCallbackJS extends $BlockStateModifyCallbackJS {
constructor(state: $BlockState$$Type, rotation: $Rotation$$Type)

/** Get the Rotation that this block is being rotated by */
public "getRotation"(): $Rotation
/** Rotates the specified direction */
public "rotate"(dir: $Direction$$Type): $Direction
get "rotation"(): $Rotation
}
}

declare module "dev.latvian.mods.kubejs.block.entity.BlockEntityAttachment" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockEntityAttachment {
"onRemove"(newState: $BlockState$$Type): void
"readAttachment"(tag: $CompoundTag$$Type): void
"writeAttachment"(): $CompoundTag
}

export namespace $BlockEntityAttachment {
const EMPTY_ARRAY: $BlockEntityAttachment[]
}
export abstract class $BlockEntityAttachment$$Static implements $BlockEntityAttachment {
static readonly "EMPTY_ARRAY": $BlockEntityAttachment[]

}
}

declare module "dev.latvian.mods.kubejs.block.BlockItemBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BlockBuilder, $BlockBuilder$$Type } from "dev.latvian.mods.kubejs.block.BlockBuilder"
import { $ItemBuilder } from "dev.latvian.mods.kubejs.item.ItemBuilder"

export class $BlockItemBuilder extends $ItemBuilder {
constructor(i: $ResourceLocation$$Type)

get "blockBuilder"(): $BlockBuilder
set "blockBuilder"(value: $BlockBuilder$$Type)
}
}

declare module "dev.latvian.mods.kubejs.block.DetectorBlockEventJS" {
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $LevelEventJS } from "dev.latvian.mods.kubejs.level.LevelEventJS"

/**
 * Invoked when a detector block registered in KubeJS receives a block update.
 * 
 * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
 */
export class $DetectorBlockEventJS extends $LevelEventJS {
constructor(i: string, l: $Level$$Type, p: $BlockPos$$Type, pow: boolean)

/** The detector block. */
public "getBlock"(): $BlockContainerJS
/** The id of the detector block when it was registered. */
public "getDetectorId"(): string
/** If the detector block is powered. */
public "isPowered"(): boolean
get "block"(): $BlockContainerJS
get "detectorId"(): string
get "powered"(): boolean
}
}

declare module "dev.latvian.mods.kubejs.block.custom.MultipartShapedBlockBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ShapedBlockBuilder } from "dev.latvian.mods.kubejs.block.custom.ShapedBlockBuilder"

export class $MultipartShapedBlockBuilder extends $ShapedBlockBuilder {
constructor(i: $ResourceLocation$$Type, ...suffixes: string[])

}
}

declare module "dev.latvian.mods.kubejs.block.entity.BlockEntityCallback" {
import { $BlockEntityJS$$Type } from "dev.latvian.mods.kubejs.block.entity.BlockEntityJS"

export interface $BlockEntityCallback {
"accept"(blockEntityJS0: $BlockEntityJS$$Type): void
}

export namespace $BlockEntityCallback {
const probejs$$marker: never
}
export abstract class $BlockEntityCallback$$Static implements $BlockEntityCallback {
}
}

declare module "dev.latvian.mods.kubejs.block.RandomTickCallbackJS" {
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $RandomSource, $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $Level } from "net.minecraft.world.level.Level"

export class $RandomTickCallbackJS {
constructor(containerJS: $BlockContainerJS$$Type, random: $RandomSource$$Type)

public "getLevel"(): $Level
public "getServer"(): $MinecraftServer
get "block"(): $BlockContainerJS
set "block"(value: $BlockContainerJS$$Type)
get "random"(): $RandomSource
set "random"(value: $RandomSource$$Type)
get "level"(): $Level
get "server"(): $MinecraftServer
}
}

declare module "dev.latvian.mods.kubejs.block.custom.BasicBlockJS$Builder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BlockBuilder } from "dev.latvian.mods.kubejs.block.BlockBuilder"
import { $Block } from "net.minecraft.world.level.block.Block"

export class $BasicBlockJS$Builder extends $BlockBuilder {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $Block
}
}

declare module "dev.latvian.mods.kubejs.block.callbacks.BlockStateMirrorCallbackJS" {
import { $Rotation } from "net.minecraft.world.level.block.Rotation"
import { $BlockStateModifyCallbackJS } from "dev.latvian.mods.kubejs.block.callbacks.BlockStateModifyCallbackJS"
import { $Mirror, $Mirror$$Type } from "net.minecraft.world.level.block.Mirror"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export class $BlockStateMirrorCallbackJS extends $BlockStateModifyCallbackJS {
constructor(state: $BlockState$$Type, mirror: $Mirror$$Type)

/** Gets the Mirror */
public "getMirror"(): $Mirror
/** Gets the rotation of the direction passed in relative to this mirror */
public "getRotation"(dir: $Direction$$Type): $Rotation
/** Mirrors the direction passed in */
public "mirror"(dir: $Direction$$Type): $Direction
}
}

declare module "dev.latvian.mods.kubejs.block.state.BlockStatePredicate" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $List$$Type } from "java.util.List"
import { $OreConfiguration$TargetBlockState$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration$TargetBlockState"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection } from "java.util.Collection"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Set } from "java.util.Set"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ReplacementMatch } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $RuleTest } from "net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest"

export interface $BlockStatePredicate extends $Predicate<$BlockState>, $ReplacementMatch {
"and"(predicate0: $Predicate$$Type<$BlockState$$Type>): $Predicate<$BlockState>
"asRuleTest"(): $RuleTest
"check"(targetStates: $List$$Type<$OreConfiguration$TargetBlockState$$Type>): boolean
"getBlockIds"(): $Set<$ResourceLocation>
"getBlockStates"(): $Collection<$BlockState>
"getBlocks"(): $Collection<$Block>
"negate"(): $Predicate<$BlockState>
"or"(predicate0: $Predicate$$Type<$BlockState$$Type>): $Predicate<$BlockState>
"test"(blockState0: $BlockState$$Type): boolean
"testBlock"(block: $Block$$Type): boolean
get "blockIds"(): $Set<$ResourceLocation>
get "blockStates"(): $Collection<$BlockState>
get "blocks"(): $Collection<$Block>
}

export namespace $BlockStatePredicate {
const AIR_ID: $ResourceLocation
function fromString(s: string): $BlockStatePredicate
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
function of(o: any): $BlockStatePredicate
function ruleTestOf(o: any): $RuleTest
}
export abstract class $BlockStatePredicate$$Static implements $BlockStatePredicate {
static readonly "AIR_ID": $ResourceLocation

static "fromString"(s: string): $BlockStatePredicate
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
static "of"(o: any): $BlockStatePredicate
static "ruleTestOf"(o: any): $RuleTest
}
}

declare module "dev.latvian.mods.kubejs.block.custom.FallingBlockBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BlockBuilder } from "dev.latvian.mods.kubejs.block.BlockBuilder"
import { $Color$$Type } from "dev.latvian.mods.rhino.mod.util.color.Color"

export class $FallingBlockBuilder extends $BlockBuilder {
constructor(i: $ResourceLocation$$Type)

public "dustColor"(color: $Color$$Type): $FallingBlockBuilder
}
}

declare module "dev.latvian.mods.kubejs.block.predicate.BlockEntityPredicate" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $BlockEntityPredicateDataCheck$$Type } from "dev.latvian.mods.kubejs.block.predicate.BlockEntityPredicateDataCheck"
import { $BlockPredicate } from "dev.latvian.mods.kubejs.block.predicate.BlockPredicate"

export class $BlockEntityPredicate implements $BlockPredicate {
constructor(i: $ResourceLocation$$Type)

public "check"(block: $BlockContainerJS$$Type): boolean
public "data"(cd: $BlockEntityPredicateDataCheck$$Type): $BlockEntityPredicate
}
}

declare module "dev.latvian.mods.kubejs.block.custom.ShapedBlockBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BlockBuilder } from "dev.latvian.mods.kubejs.block.BlockBuilder"

export class $ShapedBlockBuilder extends $BlockBuilder {
constructor(i: $ResourceLocation$$Type, ...suffixes: string[])

}
}

declare module "dev.latvian.mods.kubejs.block.custom.CropBlockBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $CropBlockBuilder$SurviveCallback$$Type } from "dev.latvian.mods.kubejs.block.custom.CropBlockBuilder$SurviveCallback"
import { $BlockBuilder } from "dev.latvian.mods.kubejs.block.BlockBuilder"
import { $ToDoubleFunction$$Type } from "java.util.function.ToDoubleFunction"
import { $ToIntFunction$$Type } from "java.util.function.ToIntFunction"
import { $CropBlockBuilder$ShapeBuilder$$Type } from "dev.latvian.mods.kubejs.block.custom.CropBlockBuilder$ShapeBuilder"
import { $RandomTickCallbackJS$$Type } from "dev.latvian.mods.kubejs.block.RandomTickCallbackJS"

export class $CropBlockBuilder extends $BlockBuilder {
constructor(i: $ResourceLocation$$Type)

/** Set the age of the crop. Note that the box will be the same for all ages (A full block size). */
public "age"(age: integer): $CropBlockBuilder
/** Set the age of the crop and the shape of the crop at that age. */
public "age"(age: integer, builder: $Consumer$$Type<$CropBlockBuilder$ShapeBuilder$$Type>): $CropBlockBuilder
public "bonemeal"(bonemealCallback: $ToIntFunction$$Type<$RandomTickCallbackJS$$Type>): $CropBlockBuilder
/** Add a crop output with a specific chance. */
public "crop"(output: any, chance: double): $CropBlockBuilder
/** Add a crop output with a 100% chance. */
public "crop"(output: any): $CropBlockBuilder
/** Set if the crop should drop seeds when harvested. */
public "dropSeed"(dropSeed: boolean): $CropBlockBuilder
public "growTick"(growSpeedCallback: $ToDoubleFunction$$Type<$RandomTickCallbackJS$$Type>): $CropBlockBuilder
public "survive"(surviveCallback: $CropBlockBuilder$SurviveCallback$$Type): $CropBlockBuilder
}
}

declare module "dev.latvian.mods.kubejs.block.predicate.BlockIDPredicate" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $List } from "java.util.List"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockIDPredicate$PropertyObject } from "dev.latvian.mods.kubejs.block.predicate.BlockIDPredicate$PropertyObject"
import { $BlockPredicate } from "dev.latvian.mods.kubejs.block.predicate.BlockPredicate"

export class $BlockIDPredicate implements $BlockPredicate {
constructor(i: $ResourceLocation$$Type)

public "check"(b: $BlockContainerJS$$Type): boolean
public "checkState"(state: $BlockState$$Type): boolean
public "getBlockProperties"(): $List<$BlockIDPredicate$PropertyObject>
public "getBlockState"(): $BlockState
public "with"(key: string, value: string): $BlockIDPredicate
get "blockProperties"(): $List<$BlockIDPredicate$PropertyObject>
get "blockState"(): $BlockState
}
}

declare module "dev.latvian.mods.kubejs.block.BlockTintFunction" {
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Color } from "dev.latvian.mods.rhino.mod.util.color.Color"
import { $BlockTintFunction$Fixed } from "dev.latvian.mods.kubejs.block.BlockTintFunction$Fixed"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export interface $BlockTintFunction {
"getColor"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, int3: integer): $Color
}

export namespace $BlockTintFunction {
const BIRCH_FOLIAGE: $BlockTintFunction$Fixed
const DEFAULT_FOLIAGE_COLOR: $Color
const EVERGREEN_FOLIAGE: $BlockTintFunction$Fixed
const FOLIAGE: $BlockTintFunction
const GRASS: $BlockTintFunction
const MANGROVE_FOLIAGE: $BlockTintFunction$Fixed
const REDSTONE: $BlockTintFunction
const REDSTONE_COLORS: $Color[]
const WATER: $BlockTintFunction
function of(cx: $Context$$Type, o: any): $BlockTintFunction
}
export abstract class $BlockTintFunction$$Static implements $BlockTintFunction {
static readonly "BIRCH_FOLIAGE": $BlockTintFunction$Fixed
static readonly "DEFAULT_FOLIAGE_COLOR": $Color
static readonly "EVERGREEN_FOLIAGE": $BlockTintFunction$Fixed
static readonly "FOLIAGE": $BlockTintFunction
static readonly "GRASS": $BlockTintFunction
static readonly "MANGROVE_FOLIAGE": $BlockTintFunction$Fixed
static readonly "REDSTONE": $BlockTintFunction
static readonly "REDSTONE_COLORS": $Color[]
static readonly "WATER": $BlockTintFunction

static "of"(cx: $Context$$Type, o: any): $BlockTintFunction
}
}

declare module "dev.latvian.mods.kubejs.block.custom.CropBlockBuilder$SurviveCallback" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"

export interface $CropBlockBuilder$SurviveCallback {
"survive"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
}

export namespace $CropBlockBuilder$SurviveCallback {
const probejs$$marker: never
}
export abstract class $CropBlockBuilder$SurviveCallback$$Static implements $CropBlockBuilder$SurviveCallback {
}
}

declare module "dev.latvian.mods.kubejs.block.custom.CropBlockBuilder$ShapeBuilder" {
import { $List } from "java.util.List"
import { $VoxelShape } from "net.minecraft.world.phys.shapes.VoxelShape"

export class $CropBlockBuilder$ShapeBuilder {
constructor(age: integer)

public "getShapes"(): $List<$VoxelShape>
/**
 * Describe the shape of the crop at a specific age.
 * 
 * min/max coordinates are double values between 0 and 16.
 */
public "shape"(age: integer, minX: double, minY: double, minZ: double, maxX: double, maxY: double, maxZ: double): $CropBlockBuilder$ShapeBuilder
get "shapes"(): $List<$VoxelShape>
}
}

declare module "dev.latvian.mods.kubejs.block.predicate.BlockIDPredicate$PropertyObject" {
import { $Record } from "java.lang.Record"
import { $Property, $Property$$Type } from "net.minecraft.world.level.block.state.properties.Property"

export class $BlockIDPredicate$PropertyObject extends $Record {
constructor(property: $Property$$Type<any>, value: any)

public "property"(): $Property<any>
public "value"(): any
}
}

declare module "dev.latvian.mods.kubejs.block.entity.BlockEntityEventCallback" {
import { $BlockEntityJS$$Type } from "dev.latvian.mods.kubejs.block.entity.BlockEntityJS"

export interface $BlockEntityEventCallback {
"accept"(blockEntityJS0: $BlockEntityJS$$Type, int1: integer): void
}

export namespace $BlockEntityEventCallback {
const probejs$$marker: never
}
export abstract class $BlockEntityEventCallback$$Static implements $BlockEntityEventCallback {
}
}

declare module "dev.latvian.mods.kubejs.block.BlockTintFunction$Fixed" {
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Color, $Color$$Type } from "dev.latvian.mods.rhino.mod.util.color.Color"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Record } from "java.lang.Record"
import { $BlockTintFunction } from "dev.latvian.mods.kubejs.block.BlockTintFunction"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export class $BlockTintFunction$Fixed extends $Record implements $BlockTintFunction {
constructor(color: $Color$$Type)

public "color"(): $Color
public "getColor"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, index: integer): $Color
public static "of"(cx: $Context$$Type, o: any): $BlockTintFunction
}
}

declare module "dev.latvian.mods.kubejs.block.callbacks.BlockStateModifyPlacementCallbackJS" {
import { $Direction } from "net.minecraft.core.Direction"
import { $Player } from "net.minecraft.world.entity.player.Player"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $BlockStateModifyCallbackJS } from "dev.latvian.mods.kubejs.block.callbacks.BlockStateModifyCallbackJS"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $FluidState } from "net.minecraft.world.level.material.FluidState"
import { $BlockPlaceContext, $BlockPlaceContext$$Type } from "net.minecraft.world.item.context.BlockPlaceContext"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $InteractionHand } from "net.minecraft.world.InteractionHand"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level } from "net.minecraft.world.level.Level"

export class $BlockStateModifyPlacementCallbackJS extends $BlockStateModifyCallbackJS {
readonly "context": $BlockPlaceContext
readonly "minecraftBlock": $Block

constructor(context: $BlockPlaceContext$$Type, block: $Block$$Type)

/** Returns if the block being placed thinks it can be placed here. This is used for replacement checks, like placing blocks in water or tall grass */
public "canPlace"(): boolean
/** Gets the position in the block-space of where it was clicked */
public "getClickLocation"(): $Vec3
/** Gets the clicked block */
public "getClickedBlock"(): $BlockContainerJS
/** Gets the facing direction of the clicked block face */
public "getClickedFace"(): $Direction
/** Gets the clicked position in world */
public "getClickedPos"(): $BlockPos
/** Gets the FluidSate at the clicked position */
public "getFluidStateAtClickedPos"(): $FluidState
/** Gets the hand that is placing the block */
public "getHand"(): $InteractionHand
/** Gets the nearest horizontal direction to where the player is looking. NORTH if there is no player */
public "getHorizontalDirection"(): $Direction
/** Gets the item being placed */
public "getItem"(): $ItemStack
/** Gets the level */
public "getLevel"(): $Level
/** Gets the direction closes to where the player is currently looking */
public "getNearestLookingDirection"(): $Direction
/** Gets an array of all directions, ordered by which the player is looking closest to */
public "getNearestLookingDirections"(): $Direction[]
/** Gets the vertical direction (UP/DOWN) closest to where the player is currently looking */
public "getNearestLookingVerticalDirection"(): $Direction
/** Gets the player placing the block, if available */
public "getPlayer"(): $Player
/** Get the horizontal rotation of the player */
public "getRotation"(): float
/** Checks if the position clicked has a specified fluid there */
public "isClickedPosIn"(fluid: $Fluid$$Type): boolean
/** Checks if this block is in water */
public "isInWater"(): boolean
/** Returns if the hit posiiton in the block-space is inside the 1x1x1 cube of the block */
public "isInside"(): boolean
/**
 * Checks if the block currently occupying the position this is being placed in is the same block type.
 * Used for things like candles, where multiple can be in the same block-space.
 */
public "isReplacingSelf"(): boolean
/** Returns if the player is using the 'secondary' function of this item. Basically checks if they are holding shift */
public "isSecondaryUseActive"(): boolean
/** Returns if the block being placed is replacing the block clicked */
public "replacingClickedOnBlock"(): boolean
/** Set if this block is waterlogged or not */
public "waterlogged"(waterlogged: boolean): $BlockStateModifyPlacementCallbackJS
/** Set this block as waterlogged if it is in water */
public "waterlogged"(): $BlockStateModifyPlacementCallbackJS
get "block"(): $BlockContainerJS
set "block"(value: $BlockContainerJS$$Type)
get "clickLocation"(): $Vec3
get "clickedBlock"(): $BlockContainerJS
get "clickedFace"(): $Direction
get "clickedPos"(): $BlockPos
get "fluidStateAtClickedPos"(): $FluidState
get "hand"(): $InteractionHand
get "horizontalDirection"(): $Direction
get "item"(): $ItemStack
get "level"(): $Level
get "nearestLookingDirection"(): $Direction
get "nearestLookingDirections"(): $Direction[]
get "nearestLookingVerticalDirection"(): $Direction
get "player"(): $Player
get "rotation"(): float
get "inWater"(): boolean
get "inside"(): boolean
get "replacingSelf"(): boolean
get "secondaryUseActive"(): boolean
}
}

declare module "dev.latvian.mods.kubejs.block.callbacks.CanBeReplacedCallbackJS" {
import { $Direction } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Player } from "net.minecraft.world.entity.player.Player"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $FluidState } from "net.minecraft.world.level.material.FluidState"
import { $BlockPlaceContext$$Type } from "net.minecraft.world.item.context.BlockPlaceContext"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $InteractionHand } from "net.minecraft.world.InteractionHand"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level } from "net.minecraft.world.level.Level"

export class $CanBeReplacedCallbackJS {
constructor(blockPlaceContext: $BlockPlaceContext$$Type, state: $BlockState$$Type)

public "canBeReplaced"(): boolean
public "getClickLocation"(): $Vec3
public "getClickedBlock"(): $BlockContainerJS
public "getClickedFace"(): $Direction
public "getClickedPos"(): $BlockPos
public "getFluidStateAtClickedPos"(): $FluidState
public "getHand"(): $InteractionHand
public "getHorizontalDirection"(): $Direction
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public "getNearestLookingDirection"(): $Direction
public "getNearestLookingDirections"(): $Direction[]
public "getNearestLookingVerticalDirection"(): $Direction
public "getPlayer"(): $Player
public "getRotation"(): float
public "isClickedPosIn"(fluid: $Fluid$$Type): boolean
public "isInside"(): boolean
public "isSecondaryUseActive"(): boolean
get "clickLocation"(): $Vec3
get "clickedBlock"(): $BlockContainerJS
get "clickedFace"(): $Direction
get "clickedPos"(): $BlockPos
get "fluidStateAtClickedPos"(): $FluidState
get "hand"(): $InteractionHand
get "horizontalDirection"(): $Direction
get "item"(): $ItemStack
get "level"(): $Level
get "nearestLookingDirection"(): $Direction
get "nearestLookingDirections"(): $Direction[]
get "nearestLookingVerticalDirection"(): $Direction
get "player"(): $Player
get "rotation"(): float
get "inside"(): boolean
get "secondaryUseActive"(): boolean
}
}

declare module "dev.latvian.mods.kubejs.block.entity.BlockEntityJS" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $InventoryKJS, $InventoryKJS$$Type } from "dev.latvian.mods.kubejs.core.InventoryKJS"
import { $BlockEntityAttachment } from "dev.latvian.mods.kubejs.block.entity.BlockEntityAttachment"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $BlockEntityInfo, $BlockEntityInfo$$Type } from "dev.latvian.mods.kubejs.block.entity.BlockEntityInfo"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"

export class $BlockEntityJS extends $BlockEntity {
readonly "attachments": $BlockEntityAttachment[]
readonly "info": $BlockEntityInfo
readonly "x": integer
readonly "y": integer
readonly "z": integer

constructor(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, entityInfo: $BlockEntityInfo$$Type)

public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getModelData"(): $ModelData
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "save"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sendEvent"(eventId: integer, data: integer): void
public "sync"(): void
get "cycle"(): integer
set "cycle"(value: integer)
get "data"(): $CompoundTag
set "data"(value: $CompoundTag$$Type)
get "inventory"(): $InventoryKJS
set "inventory"(value: $InventoryKJS$$Type)
get "placerId"(): $UUID
set "placerId"(value: $UUID$$Type)
get "tick"(): integer
set "tick"(value: integer)
get "block"(): $BlockContainerJS
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
}
}

declare module "dev.latvian.mods.kubejs.block.FarmlandTrampledEventJS" {
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $EntityEventJS } from "dev.latvian.mods.kubejs.entity.EntityEventJS"

/** Invoked when an entity attempts to trample farmland. */
export class $FarmlandTrampledEventJS extends $EntityEventJS {
constructor(l: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, d: float, e: $Entity$$Type)

/** The farmland block. */
public "getBlock"(): $BlockContainerJS
/** The distance of the entity from the block. */
public "getDistance"(): float
get "block"(): $BlockContainerJS
get "distance"(): float
}
}

