declare module "com.bawnorton.neruina.extend.Errorable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Errorable$$Type = ($Errorable);
}

declare module "com.bawnorton.neruina.extend.CrashReportCategoryExtender" {
import { $Throwable } from "java.lang.Throwable"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CrashReportCategoryExtender$$Type = ($CrashReportCategoryExtender | ((arg0: $Throwable) => void));
}

declare module "com.bawnorton.neruina.mixin.accessor.LevelChunkAccessor" {
import { $BlockPos } from "net.minecraft.core.BlockPos"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LevelChunkAccessor$$Type = ($LevelChunkAccessor | ((arg0: $BlockPos) => void));
}

