declare module "net.createmod.ponder.mixin.accessor.EntityAccessor" {
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $EntityAccessor {
"catnip$callSetLevel"(level0: $Level$$Type): void
}

export namespace $EntityAccessor {
const probejs$$marker: never
}
export abstract class $EntityAccessor$$Static implements $EntityAccessor {
}
}

declare module "net.createmod.catnip.animation.LerpedFloat" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $LerpedFloat$Chaser$$Type } from "net.createmod.catnip.animation.LerpedFloat$Chaser"
import { $LerpedFloat$Interpolator$$Type } from "net.createmod.catnip.animation.LerpedFloat$Interpolator"

export class $LerpedFloat {
constructor(interpolator0: $LerpedFloat$Interpolator$$Type)

public static "angular"(): $LerpedFloat
public "chase"(double0: double, double1: double, chaser2: $LerpedFloat$Chaser$$Type): $LerpedFloat
public "chaseTimed"(double0: double, int1: integer): $LerpedFloat
public "disableSmartAngleChasing"(): $LerpedFloat
public "forceNextSync"(): void
public "getChaseTarget"(): float
public "getValue"(): float
public "getValue"(float0: float): float
public static "linear"(): $LerpedFloat
public "readNBT"(compoundTag0: $CompoundTag$$Type, boolean1: boolean): void
public "setValue"(double0: double): void
public "setValueNoUpdate"(double0: double): void
public "settled"(): boolean
public "startWithValue"(double0: double): $LerpedFloat
public "tickChaser"(): void
public "updateChaseSpeed"(double0: double): boolean
public "updateChaseTarget"(float0: float): void
public "writeNBT"(): $CompoundTag
get "chaseTarget"(): float
get "value"(): float
set "value"(value: double)
set "valueNoUpdate"(value: double)
}
}

declare module "net.createmod.ponder.mixin.client.accessor.RenderTypeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderTypeAccessor {
}

export namespace $RenderTypeAccessor {
const probejs$$marker: never
}
export abstract class $RenderTypeAccessor$$Static implements $RenderTypeAccessor {
}
}

declare module "net.createmod.ponder.mixin.client.accessor.BufferBuilderAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BufferBuilderAccessor {
"catnip$getVertices"(): integer
}

export namespace $BufferBuilderAccessor {
const probejs$$marker: never
}
export abstract class $BufferBuilderAccessor$$Static implements $BufferBuilderAccessor {
}
}

declare module "net.createmod.catnip.gui.widget.AbstractSimiWidget" {
import { $List } from "java.util.List"
import { $TickableGuiEventListener } from "net.createmod.catnip.gui.TickableGuiEventListener"
import { $Component } from "net.minecraft.network.chat.Component"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $NarrationElementOutput$$Type } from "net.minecraft.client.gui.narration.NarrationElementOutput"
import { $Couple } from "net.createmod.catnip.data.Couple"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Color } from "net.createmod.catnip.theme.Color"
import { $AbstractWidget, $AbstractWidget$$Type } from "net.minecraft.client.gui.components.AbstractWidget"
import { $ComponentPath } from "net.minecraft.client.gui.ComponentPath"
import { $Runnable$$Type } from "java.lang.Runnable"

export class $AbstractSimiWidget extends $AbstractWidget implements $TickableGuiEventListener {
static readonly "COLOR_CLICK": $Couple<$Color>
static readonly "COLOR_DISABLED": $Couple<$Color>
static readonly "COLOR_FAIL": $Couple<$Color>
static readonly "COLOR_HOVER": $Couple<$Color>
static readonly "COLOR_IDLE": $Couple<$Color>
static readonly "COLOR_SUCCESS": $Couple<$Color>
static readonly "HEADER_RGB": $Color
static readonly "HINT_RGB": $Color

public "atZLevel"<T extends $AbstractSimiWidget>(float0: float): T
public "charTyped"(char0: character, int1: integer): boolean
public "getCurrentFocusPath"(): $ComponentPath
public "getOriginalMessageFancyMenu"(): $Component
public "getToolTip"(): $List<$Component>
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "m_168797_"(narrationElementOutput0: $NarrationElementOutput$$Type): void
public "mouseMoved"(double0: double, double1: double): void
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "renderCustomBackgroundFancyMenu"(abstractWidget0: $AbstractWidget$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, int4: integer, int5: integer): boolean
public "runCallback"(double0: double, double1: double): void
public "setActive"<T extends $AbstractSimiWidget>(boolean0: boolean): T
public "setPosition"(int0: integer, int1: integer): void
public "stopCustomClickSoundFancyMenu"(): void
public "stopHoverSoundFancyMenu"(): void
public "tick"(): void
public "tickFocusStateListenersFancyMenu"(boolean0: boolean): void
public "tickHoverOrFocusStateListenersFancyMenu"(boolean0: boolean): void
public "tickHoverStateListenersFancyMenu"(boolean0: boolean): void
public "withCallback"<T extends $AbstractSimiWidget>(biConsumer0: $BiConsumer$$Type<integer, integer>): T
public "withCallback"<T extends $AbstractSimiWidget>(runnable0: $Runnable$$Type): T
get "lockedTooltipX"(): integer
set "lockedTooltipX"(value: integer)
get "lockedTooltipY"(): integer
set "lockedTooltipY"(value: integer)
get "currentFocusPath"(): $ComponentPath
get "originalMessageFancyMenu"(): $Component
get "toolTip"(): $List<$Component>
set "active"(value: boolean)
}
}

declare module "net.createmod.catnip.data.Pair" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Pair<F = any, S = any> {
public "copy"(): $Pair<F, S>
public "getFirst"(): F
public "getSecond"(): S
public static "of"<F, S>(f0: F, s1: S): $Pair<F, S>
public "setFirst"(f0: F): void
public "setSecond"(s0: S): void
public "swap"(): $Pair<S, F>
get "first"(): F
get "second"(): S
set "first"(value: F)
set "second"(value: S)
}
}

declare module "net.createmod.catnip.data.WorldAttached" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $Function$$Type } from "java.util.function.Function"

export class $WorldAttached<T = any> {
constructor(function0: $Function$$Type<$LevelAccessor$$Type, T>)

public "empty"(consumer0: $Consumer$$Type<T>): void
public "empty"(biConsumer0: $BiConsumer$$Type<$LevelAccessor$$Type, T>): void
public "get"(levelAccessor0: $LevelAccessor$$Type): T
public static "invalidateWorld"(levelAccessor0: $LevelAccessor$$Type): void
public "put"(levelAccessor0: $LevelAccessor$$Type, t1: T): void
public "replace"(levelAccessor0: $LevelAccessor$$Type): T
public "replace"(levelAccessor0: $LevelAccessor$$Type, consumer1: $Consumer$$Type<T>): T
}
}

declare module "net.createmod.catnip.animation.LerpedFloat$Interpolator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LerpedFloat$Interpolator {
"interpolate"(double0: double, double1: double, double2: double): float
}

export namespace $LerpedFloat$Interpolator {
const probejs$$marker: never
}
export abstract class $LerpedFloat$Interpolator$$Static implements $LerpedFloat$Interpolator {
}
}

declare module "net.createmod.catnip.animation.LerpedFloat$Chaser" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LerpedFloat$Chaser {
"chase"(double0: double, double1: double, double2: double): float
}

export namespace $LerpedFloat$Chaser {
const EXP: $LerpedFloat$Chaser
const IDLE: $LerpedFloat$Chaser
const LINEAR: $LerpedFloat$Chaser
function exp(double0: double): $LerpedFloat$Chaser
}
export abstract class $LerpedFloat$Chaser$$Static implements $LerpedFloat$Chaser {
static readonly "EXP": $LerpedFloat$Chaser
static readonly "IDLE": $LerpedFloat$Chaser
static readonly "LINEAR": $LerpedFloat$Chaser

static "exp"(double0: double): $LerpedFloat$Chaser
}
}

declare module "net.createmod.ponder.mixin.client.accessor.GameRendererAccessor" {
import { $Camera$$Type } from "net.minecraft.client.Camera"

export interface $GameRendererAccessor {
"catnip$callGetFov"(camera0: $Camera$$Type, float1: float, boolean2: boolean): double
}

export namespace $GameRendererAccessor {
const probejs$$marker: never
}
export abstract class $GameRendererAccessor$$Static implements $GameRendererAccessor {
}
}

declare module "net.createmod.catnip.gui.TickableGuiEventListener" {
import { $GuiEventListener } from "net.minecraft.client.gui.components.events.GuiEventListener"
import { $ScreenRectangle } from "net.minecraft.client.gui.navigation.ScreenRectangle"
import { $ComponentPath } from "net.minecraft.client.gui.ComponentPath"
import { $FocusNavigationEvent$$Type } from "net.minecraft.client.gui.navigation.FocusNavigationEvent"

export interface $TickableGuiEventListener extends $GuiEventListener {
"charTyped"(char0: character, int1: integer): boolean
"getCurrentFocusPath"(): $ComponentPath
"getRectangle"(): $ScreenRectangle
"getTabOrderGroup"(): integer
"isFocused"(): boolean
"isMouseOver"(double0: double, double1: double): boolean
"keyPressed"(int0: integer, int1: integer, int2: integer): boolean
"keyReleased"(int0: integer, int1: integer, int2: integer): boolean
"mouseClicked"(double0: double, double1: double, int2: integer): boolean
"mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
"mouseMoved"(double0: double, double1: double): void
"mouseReleased"(double0: double, double1: double, int2: integer): boolean
"mouseScrolled"(double0: double, double1: double, double2: double): boolean
"nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
"setFocused"(boolean0: boolean): void
"tick"(): void
get "currentFocusPath"(): $ComponentPath
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
get "focused"(): boolean
set "focused"(value: boolean)
}

export namespace $TickableGuiEventListener {
const probejs$$marker: never
}
export abstract class $TickableGuiEventListener$$Static implements $TickableGuiEventListener {
}
}

declare module "net.createmod.catnip.theme.Color" {
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $Vector3f } from "org.joml.Vector3f"
import { $Couple$$Type } from "net.createmod.catnip.data.Couple"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $Style } from "net.minecraft.network.chat.Style"

export class $Color {
static readonly "BLACK": $Color
static readonly "GREEN": $Color
static readonly "PURPLE": $Color
static readonly "RED": $Color
static readonly "SPRING_GREEN": $Color
static readonly "TRANSPARENT_BLACK": $Color
static readonly "WHITE": $Color

constructor(int0: integer)
constructor(float0: float, float1: float, float2: float, float3: float)
constructor(int0: integer, int1: integer, int2: integer, int3: integer)
constructor(int0: integer, int1: integer, int2: integer)
constructor(int0: integer, boolean1: boolean)

public "asStyle"(): $Style
public "asVector"(): $Vec3
public "asVectorF"(): $Vector3f
public "brighter"(): $Color
public "copy"(): $Color
public "copy"(boolean0: boolean): $Color
public "darker"(): $Color
public "ensureMutable"(): $Color
public static "generateFromLong"(long0: long): $Color
public "getAlpha"(): integer
public "getAlphaAsFloat"(): float
public "getBlue"(): integer
public "getBlueAsFloat"(): float
public "getGreen"(): integer
public "getGreenAsFloat"(): float
public "getRGB"(): integer
public "getRed"(): integer
public "getRedAsFloat"(): float
public static "mixColors"(couple0: $Couple$$Type<$Color$$Type>, float1: float): $Color
public static "mixColors"(color0: $Color$$Type, color1: $Color$$Type, float2: float): $Color
public static "mixColors"(int0: integer, int1: integer, float2: float): integer
public "mixWith"(color0: $Color$$Type, float1: float): $Color
public "modifyValue"(unaryOperator0: $UnaryOperator$$Type<integer>): $Color
public static "rainbowColor"(int0: integer): $Color
public "scaleAlpha"(float0: float): $Color
public "scaleAlphaForText"(float0: float): $Color
public "setAlpha"(float0: float): $Color
public "setAlpha"(int0: integer): $Color
public "setBlue"(int0: integer): $Color
public "setBlue"(float0: float): $Color
public "setGreen"(float0: float): $Color
public "setGreen"(int0: integer): $Color
public "setImmutable"(): $Color
public "setRed"(float0: float): $Color
public "setRed"(int0: integer): $Color
public "setValue"(int0: integer): $Color
get "alpha"(): integer
get "alphaAsFloat"(): float
get "blue"(): integer
get "blueAsFloat"(): float
get "green"(): integer
get "greenAsFloat"(): float
get "rGB"(): integer
get "red"(): integer
get "redAsFloat"(): float
set "alpha"(value: float)
set "alpha"(value: integer)
set "blue"(value: integer)
set "blue"(value: float)
set "green"(value: float)
set "green"(value: integer)
set "red"(value: float)
set "red"(value: integer)
set "value"(value: integer)
}
}

declare module "net.createmod.ponder.mixin.client.accessor.ParticleEngineAccessor" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $ParticleProvider } from "net.minecraft.client.particle.ParticleProvider"
import { $Map } from "java.util.Map"

export interface $ParticleEngineAccessor {
"ponder$getProviders"(): $Map<$ResourceLocation, $ParticleProvider<any>>
}

export namespace $ParticleEngineAccessor {
const probejs$$marker: never
}
export abstract class $ParticleEngineAccessor$$Static implements $ParticleEngineAccessor {
}
}

declare module "net.createmod.catnip.levelWrappers.WrappedLevel" {
import { $ExplosionJS } from "dev.latvian.mods.kubejs.level.ExplosionJS"
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $ChunkSource, $ChunkSource$$Type } from "net.minecraft.world.level.chunk.ChunkSource"
import { $Registry } from "net.minecraft.core.Registry"
import { $ClipBlockStateContext$$Type } from "net.minecraft.world.level.ClipBlockStateContext"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $TargetingConditions$$Type } from "net.minecraft.world.entity.ai.targeting.TargetingConditions"
import { $Holder } from "net.minecraft.core.Holder"
import { $Map } from "java.util.Map"
import { $LightLayer$$Type } from "net.minecraft.world.level.LightLayer"
import { $GameEvent$Context$$Type } from "net.minecraft.world.level.gameevent.GameEvent$Context"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $UUID$$Type } from "java.util.UUID"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $ChunkAccess } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $FeatureFlagSet } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List, $List$$Type } from "java.util.List"
import { $ObjectOpenCustomHashSet } from "it.unimi.dsi.fastutil.objects.ObjectOpenCustomHashSet"
import { $Stream } from "java.util.stream.Stream"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Optional } from "java.util.Optional"
import { $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $CollisionContext$$Type } from "net.minecraft.world.phys.shapes.CollisionContext"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $GameEvent$$Type } from "net.minecraft.world.level.gameevent.GameEvent"
import { $Biome } from "net.minecraft.world.level.biome.Biome"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $Trackable } from "dev.uncandango.alltheleaks.mixin.Trackable"
import { $Iterable } from "java.lang.Iterable"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $ColorResolver$$Type } from "net.minecraft.world.level.ColorResolver"
import { $ClipContext$$Type } from "net.minecraft.world.level.ClipContext"
import { $Fluid, $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $WeakReference } from "java.lang.ref.WeakReference"
import { $Difficulty } from "net.minecraft.world.Difficulty"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $HolderLookup } from "net.minecraft.core.HolderLookup"
import { $ModelDataManager } from "net.minecraftforge.client.model.data.ModelDataManager"
import { $LevelTickAccess } from "net.minecraft.world.ticks.LevelTickAccess"
import { $FireworksJS$$Type } from "dev.latvian.mods.kubejs.level.FireworksJS"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $TickPriority$$Type } from "net.minecraft.world.ticks.TickPriority"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Class, $Class$$Type } from "java.lang.Class"

export class $WrappedLevel extends $Level {
constructor(level0: $Level$$Type)

public "addFreshEntity"(entity0: $Entity$$Type): boolean
public "blockUpdated"(blockPos0: $BlockPos$$Type, block1: $Block$$Type): void
public "canSeeSky"(blockPos0: $BlockPos$$Type): boolean
public "canSeeSkyFromBelowWater"(blockPos0: $BlockPos$$Type): boolean
public static "clearNullReferences"(): void
public "clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
public "collidesWithSuffocatingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
public "containsAnyLiquid"(aABB0: $AABB$$Type): boolean
public static "create"(int0: integer, int1: integer): $LevelHeightAccessor
public "createEntity"(type: $EntityType$$Type<any>): $Entity
public "createEntityList"(entities: $Collection$$Type<$Entity$$Type>): $EntityArrayList
public "createExplosion"(x: double, y: double, z: double): $ExplosionJS
public static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>
public "dayTime"(): long
public "destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
public "destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type): boolean
public "enabledFeatures"(): $FeatureFlagSet
public "findFreePosition"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type, vec32: $Vec3$$Type, double3: double, double4: double, double5: double): $Optional<$Vec3>
public "findSupportingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Optional<$BlockPos>
public "gameEvent"(gameEvent0: $GameEvent$$Type, vec31: $Vec3$$Type, context2: $GameEvent$Context$$Type): void
public "gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, blockPos2: $BlockPos$$Type): void
public "gameEvent"(gameEvent0: $GameEvent$$Type, blockPos1: $BlockPos$$Type, context2: $GameEvent$Context$$Type): void
public "gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, vec32: $Vec3$$Type): void
public static "getAllLoadedEntities"(level: $Level$$Type): $Iterable<$Entity>
public "getBestNeighborSignal"(blockPos0: $BlockPos$$Type): integer
public "getBiome"(blockPos0: $BlockPos$$Type): $Holder<$Biome>
public "getBlock"(x: integer, y: integer, z: integer): $BlockContainerJS
public "getBlock"(blockEntity: $BlockEntity$$Type): $BlockContainerJS
public "getBlock"(pos: $BlockPos$$Type): $BlockContainerJS
public "getBlockCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
public "getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
public "getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
public "getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockStatesIfLoaded"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockTicks"(): $LevelTickAccess<$Block>
public "getBlockTint"(blockPos0: $BlockPos$$Type, colorResolver1: $ColorResolver$$Type): integer
public "getBrightness"(lightLayer0: $LightLayer$$Type, blockPos1: $BlockPos$$Type): integer
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChunkSource"(): $ChunkSource
public "getCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getControlInputSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, boolean2: boolean): integer
public "getDifficulty"(): $Difficulty
public "getDimension"(): $ResourceLocation
public "getDirectSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
public "getDirectSignalTo"(blockPos0: $BlockPos$$Type): integer
public "getDisplayName"(): $Component
public "getEntities"(): $EntityArrayList
public "getEntities"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$Entity>
public "getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type): $List<T>
public "getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>): $List<T>
public "getEntitiesWithin"(aabb: $AABB$$Type): $EntityArrayList
public "getEntityCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$VoxelShape>
public "getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getFluidTicks"(): $LevelTickAccess<$Fluid>
public "getHeightmapPos"(types0: $Heightmap$Types$$Type, blockPos1: $BlockPos$$Type): $BlockPos
public "getLevel"(): $Level
public "getLightEmission"(blockPos0: $BlockPos$$Type): integer
/** @deprecated */
public "getLightLevelDependentMagicValue"(blockPos0: $BlockPos$$Type): float
public "getLoadedChunk"(int0: integer, int1: integer): $ChunkAccess
public "getMaxLightLevel"(): integer
public "getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type): integer
public "getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "getModelDataManager"(): $ModelDataManager
public "getMoonBrightness"(): float
public "getMoonPhase"(): integer
public "getName"(): $Component
public "getNearbyEntities"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, aABB3: $AABB$$Type): $List<T>
public "getNearbyPlayers"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, aABB2: $AABB$$Type): $List<$Player>
public "getNearestEntity"<T extends $LivingEntity>(list0: $List$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double): T
public "getNearestEntity"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double, aABB6: $AABB$$Type): T
public "getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, predicate4: $Predicate$$Type<$Entity$$Type>): $Player
public "getNearestPlayer"(entity0: $Entity$$Type, double1: double): $Player
public "getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, double2: double, double3: double, double4: double): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, double1: double, double2: double, double3: double): $Player
public "getNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
public "getPartEntities"(): $Collection<$PartEntity<any>>
public "getPathfindingCostFromLightLevels"(blockPos0: $BlockPos$$Type): float
public "getPlayerByUUID"(uUID0: $UUID$$Type): $Player
public "getPlayers"(): $EntityArrayList
public "getRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "getShade"(direction0: $Direction$$Type, boolean1: boolean): float
public "getShade"(float0: float, float1: float, float2: float, boolean3: boolean): float
public "getSide"(): $ScriptType
public "getSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
public static "getSummary"(): $Map<$Class<any>, $Map<$Class<any>, long>>
public "getTimeOfDay"(float0: float): float
public "getUncachedNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
public "hasChunk"(int0: integer, int1: integer): boolean
/** @deprecated */
public "hasChunkAt"(blockPos0: $BlockPos$$Type): boolean
/** @deprecated */
public "hasChunkAt"(int0: integer, int1: integer): boolean
/** @deprecated */
public "hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): boolean
/** @deprecated */
public "hasChunksAt"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): boolean
/** @deprecated */
public "hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer): boolean
public "hasNearbyAlivePlayer"(double0: double, double1: double, double2: double, double3: double): boolean
public "hasNeighborSignal"(blockPos0: $BlockPos$$Type): boolean
public "hasSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): boolean
public "holderLookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderLookup<T>
public "isAreaLoaded"(blockPos0: $BlockPos$$Type, int1: integer): boolean
public "isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
public "isEmptyBlock"(blockPos0: $BlockPos$$Type): boolean
public "isOverworld"(): boolean
public "isUnobstructed"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type): boolean
public "isUnobstructed"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, collisionContext2: $CollisionContext$$Type): boolean
public "isUnobstructed"(entity0: $Entity$$Type): boolean
public "isWaterAt"(blockPos0: $BlockPos$$Type): boolean
public "levelEvent"(player0: $Player$$Type, int1: integer, blockPos2: $BlockPos$$Type, int3: integer): void
public "levelEvent"(int0: integer, blockPos1: $BlockPos$$Type, int2: integer): void
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "noCollision"(entity0: $Entity$$Type): boolean
public "noCollision"(aABB0: $AABB$$Type): boolean
public "playSound"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, soundEvent2: $SoundEvent$$Type, soundSource3: $SoundSource$$Type): void
public "players"(): $List<$Player>
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer): void
public "self"(): $Level
public "setChunkSource"(chunkSource0: $ChunkSource$$Type): void
public "setStatusMessage"(message: $Component$$Type): void
public "spawnFireworks"(x: double, y: double, z: double, f: $FireworksJS$$Type): void
public "spawnParticles"(options: $ParticleOptions$$Type, overrideLimiter: boolean, x: double, y: double, z: double, vx: double, vy: double, vz: double, count: integer, speed: double): void
public static "startTracking"(object0: any): void
public "startTracking"(): void
public "tell"(message: $Component$$Type): void
public static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
public "wrap"(): $WeakReference<$Trackable>
get "blockTicks"(): $LevelTickAccess<$Block>
get "chunkSource"(): $ChunkSource
get "difficulty"(): $Difficulty
get "dimension"(): $ResourceLocation
get "displayName"(): $Component
get "entities"(): $EntityArrayList
get "fluidTicks"(): $LevelTickAccess<$Fluid>
get "level"(): $Level
get "maxLightLevel"(): integer
get "modelDataManager"(): $ModelDataManager
get "moonBrightness"(): float
get "moonPhase"(): integer
get "name"(): $Component
get "partEntities"(): $Collection<$PartEntity<any>>
get "side"(): $ScriptType
get "overworld"(): boolean
set "chunkSource"(value: $ChunkSource$$Type)
set "statusMessage"(value: $Component$$Type)
}
}

declare module "net.createmod.ponder.api.VirtualBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $VirtualBlockEntity {
"isVirtual"(): boolean
"markVirtual"(): void
get "virtual"(): boolean
}

export namespace $VirtualBlockEntity {
const probejs$$marker: never
}
export abstract class $VirtualBlockEntity$$Static implements $VirtualBlockEntity {
}
}

declare module "net.createmod.catnip.lang.LangBuilder" {
import { $List$$Type } from "java.util.List"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ChatFormatting$$Type } from "net.minecraft.ChatFormatting"
import { $Color$$Type } from "net.createmod.catnip.theme.Color"
import { $MutableComponent, $MutableComponent$$Type } from "net.minecraft.network.chat.MutableComponent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $LangBuilder {
static readonly "DEFAULT_SPACE_WIDTH": float

constructor(string0: string)

public "add"(component0: $Component$$Type): $LangBuilder
public "add"(mutableComponent0: $MutableComponent$$Type): $LangBuilder
public "add"(langBuilder0: $LangBuilder$$Type): $LangBuilder
public "addTo"(list0: $List$$Type<$MutableComponent$$Type>): void
public "color"(color0: $Color$$Type): $LangBuilder
public "color"(int0: integer): $LangBuilder
public "component"(): $MutableComponent
public "forGoggles"(list0: $List$$Type<$MutableComponent$$Type>, int1: integer): void
public "forGoggles"(list0: $List$$Type<$MutableComponent$$Type>): void
public "json"(): string
public "newLine"(): $LangBuilder
public static "resolveBuilders"(object0s: any[]): any[]
public "sendChat"(player0: $Player$$Type): void
public "sendStatus"(player0: $Player$$Type): void
public "space"(): $LangBuilder
public "string"(): string
public "style"(chatFormatting0: $ChatFormatting$$Type): $LangBuilder
public "text"(string0: string): $LangBuilder
public "text"(int0: integer, string1: string): $LangBuilder
public "text"(chatFormatting0: $ChatFormatting$$Type, string1: string): $LangBuilder
public "translate"(string0: string, ...object1s: any[]): $LangBuilder
}
}

declare module "net.createmod.catnip.data.Couple" {
import { $Iterator } from "java.util.Iterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $Iterable } from "java.lang.Iterable"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Stream } from "java.util.stream.Stream"
import { $Pair } from "net.createmod.catnip.data.Pair"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Spliterator } from "java.util.Spliterator"
import { $ListTag, $ListTag$$Type } from "net.minecraft.nbt.ListTag"

export class $Couple<T = any> extends $Pair<T, T> implements $Iterable<T> {
public "both"(predicate0: $Predicate$$Type<T>): boolean
public static "create"<T>(t0: T, t1: T): $Couple<T>
public static "create"<T>(supplier0: $Supplier$$Type<T>): $Couple<T>
public static "createWithContext"<T>(function0: $Function$$Type<boolean, T>): $Couple<T>
public static "deserializeEach"<S>(listTag0: $ListTag$$Type, function1: $Function$$Type<$CompoundTag$$Type, S>): $Couple<S>
public "either"(predicate0: $Predicate$$Type<T>): boolean
public "forEach"(consumer0: $Consumer$$Type<T>): void
public "forEachWithContext"(biConsumer0: $BiConsumer$$Type<T, boolean>): void
public "forEachWithParams"<S>(biConsumer0: $BiConsumer$$Type<T, S>, couple1: $Couple$$Type<S>): void
public "get"(boolean0: boolean): T
public "iterator"(): $Iterator<T>
public "map"<S>(function0: $Function$$Type<T, S>): $Couple<S>
public "mapNotNull"<S>(function0: $Function$$Type<T, S>): $Couple<S>
public "mapNotNullWithParam"<S, R>(biFunction0: $BiFunction$$Type<T, R, S>, r1: R): $Couple<S>
public "mapWithContext"<S>(biFunction0: $BiFunction$$Type<T, boolean, S>): $Couple<S>
public "mapWithParams"<S, R>(biFunction0: $BiFunction$$Type<T, R, S>, couple1: $Couple$$Type<R>): $Couple<S>
public "replace"(function0: $Function$$Type<T, T>): void
public "replaceWithContext"(biFunction0: $BiFunction$$Type<T, boolean, T>): void
public "replaceWithParams"<S>(biFunction0: $BiFunction$$Type<T, S, T>, couple1: $Couple$$Type<S>): void
public "serializeEach"(function0: $Function$$Type<T, $CompoundTag>): $ListTag
public "set"(boolean0: boolean, t1: T): void
public "spliterator"(): $Spliterator<T>
public "stream"(): $Stream<T>
[Symbol.iterator](): IterableIterator<T>;
}
}

