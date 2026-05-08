declare module "net.zepalesque.redux.mixin.common.world.PerlinNoiseAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PerlinNoiseAccessor {
"callMaxValue"(): double
}

export namespace $PerlinNoiseAccessor {
const probejs$$marker: never
}
export abstract class $PerlinNoiseAccessor$$Static implements $PerlinNoiseAccessor {
}
}

declare module "net.zepalesque.redux.mixin.client.render.RenderAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderAccessor {
"setShadowRadius"(float0: float): void
set "shadowRadius"(value: float)
}

export namespace $RenderAccessor {
const probejs$$marker: never
}
export abstract class $RenderAccessor$$Static implements $RenderAccessor {
}
}

declare module "net.zepalesque.redux.mixin.client.audio.SoundEngineAccessor" {
import { $Map } from "java.util.Map"
import { $SoundInstance } from "net.minecraft.client.resources.sounds.SoundInstance"
import { $ChannelAccess$ChannelHandle } from "net.minecraft.client.sounds.ChannelAccess$ChannelHandle"

export interface $SoundEngineAccessor {
"redux$getInstanceToChannel"(): $Map<$SoundInstance, $ChannelAccess$ChannelHandle>
"redux$loaded"(): boolean
}

export namespace $SoundEngineAccessor {
const probejs$$marker: never
}
export abstract class $SoundEngineAccessor$$Static implements $SoundEngineAccessor {
}
}

declare module "net.zepalesque.redux.mixin.common.world.NoiseSettingsAccessor" {
import { $SurfaceRules$RuleSource$$Type } from "net.minecraft.world.level.levelgen.SurfaceRules$RuleSource"

export interface $NoiseSettingsAccessor {
"redux$setSurfaceRule"(ruleSource0: $SurfaceRules$RuleSource$$Type): void
}

export namespace $NoiseSettingsAccessor {
const probejs$$marker: never
}
export abstract class $NoiseSettingsAccessor$$Static implements $NoiseSettingsAccessor {
}
}

declare module "net.zepalesque.redux.mixin.common.block.ReduxWallBlockAccessor" {
import { $Map, $Map$$Type } from "java.util.Map"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"

export interface $ReduxWallBlockAccessor {
"getCollisionShapeByIndex"(): $Map<$BlockState, $VoxelShape>
"getShapeByIndex"(): $Map<$BlockState, $VoxelShape>
"setCollisionShapeByIndex"(map0: $Map$$Type<$BlockState$$Type, $VoxelShape$$Type>): void
"setShapeByIndex"(map0: $Map$$Type<$BlockState$$Type, $VoxelShape$$Type>): void
get "collisionShapeByIndex"(): $Map<$BlockState, $VoxelShape>
get "shapeByIndex"(): $Map<$BlockState, $VoxelShape>
set "collisionShapeByIndex"(value: $Map$$Type<$BlockState$$Type, $VoxelShape$$Type>)
set "shapeByIndex"(value: $Map$$Type<$BlockState$$Type, $VoxelShape$$Type>)
}

export namespace $ReduxWallBlockAccessor {
const probejs$$marker: never
}
export abstract class $ReduxWallBlockAccessor$$Static implements $ReduxWallBlockAccessor {
}
}

declare module "net.zepalesque.redux.mixin.client.audio.MusicManagerAccessor" {
import { $SoundInstance } from "net.minecraft.client.resources.sounds.SoundInstance"

export interface $MusicManagerAccessor {
"redux$getCurrentMusic"(): $SoundInstance
}

export namespace $MusicManagerAccessor {
const probejs$$marker: never
}
export abstract class $MusicManagerAccessor$$Static implements $MusicManagerAccessor {
}
}

