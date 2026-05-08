declare module "com.bawnorton.neruina.extend.Errorable" {
import { $UUID, $UUID$$Type } from "java.util.UUID"

export interface $Errorable {
"neruina$clearErrored"(): void
"neruina$getTickingEntryId"(): $UUID
"neruina$isErrored"(): boolean
"neruina$setErrored"(): void
"neruina$setTickingEntryId"(uUID0: $UUID$$Type): void
}

export namespace $Errorable {
const probejs$$marker: never
}
export abstract class $Errorable$$Static implements $Errorable {
}
}

declare module "com.bawnorton.neruina.extend.CrashReportCategoryExtender" {
import { $Throwable$$Type } from "java.lang.Throwable"

export interface $CrashReportCategoryExtender {
"neruin$setStacktrace"(throwable0: $Throwable$$Type): void
}

export namespace $CrashReportCategoryExtender {
const probejs$$marker: never
}
export abstract class $CrashReportCategoryExtender$$Static implements $CrashReportCategoryExtender {
}
}

declare module "com.bawnorton.neruina.mixin.accessor.LevelChunkAccessor" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"

export interface $LevelChunkAccessor {
"neruina$removeBlockEntityTicker"(blockPos0: $BlockPos$$Type): void
}

export namespace $LevelChunkAccessor {
const probejs$$marker: never
}
export abstract class $LevelChunkAccessor$$Static implements $LevelChunkAccessor {
}
}

