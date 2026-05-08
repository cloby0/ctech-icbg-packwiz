declare module "rbasamoyai.createbigcannons.remix.CustomBlockDamageDisplay" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"

export interface $CustomBlockDamageDisplay {
"createbigcannons$trackCustomProgress"(blockPos0: $BlockPos$$Type, int1: integer): void
}

export namespace $CustomBlockDamageDisplay {
const probejs$$marker: never
}
export abstract class $CustomBlockDamageDisplay$$Static implements $CustomBlockDamageDisplay {
}
}

declare module "rbasamoyai.createbigcannons.mixin.client.CameraAccessor" {
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"

export interface $CameraAccessor {
"callSetPosition"(vec30: $Vec3$$Type): void
}

export namespace $CameraAccessor {
const probejs$$marker: never
}
export abstract class $CameraAccessor$$Static implements $CameraAccessor {
}
}

declare module "rbasamoyai.createbigcannons.mixin.client.ClientLevelAccessor" {
import { $LevelRenderer } from "net.minecraft.client.renderer.LevelRenderer"

export interface $ClientLevelAccessor {
"getLevelRenderer"(): $LevelRenderer
get "levelRenderer"(): $LevelRenderer
}

export namespace $ClientLevelAccessor {
const probejs$$marker: never
}
export abstract class $ClientLevelAccessor$$Static implements $ClientLevelAccessor {
}
}

declare module "rbasamoyai.createbigcannons.mixin.client.Blaze3DAudioChannelAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Blaze3DAudioChannelAccessor {
"getSource"(): integer
get "source"(): integer
}

export namespace $Blaze3DAudioChannelAccessor {
const probejs$$marker: never
}
export abstract class $Blaze3DAudioChannelAccessor$$Static implements $Blaze3DAudioChannelAccessor {
}
}

declare module "rbasamoyai.createbigcannons.mixin.TagAppenderAccessor" {
import { $TagBuilder } from "net.minecraft.tags.TagBuilder"

export interface $TagAppenderAccessor {
"getBuilder"(): $TagBuilder
get "builder"(): $TagBuilder
}

export namespace $TagAppenderAccessor {
const probejs$$marker: never
}
export abstract class $TagAppenderAccessor$$Static implements $TagAppenderAccessor {
}
}

