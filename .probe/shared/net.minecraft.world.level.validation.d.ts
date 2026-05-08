declare module "net.minecraft.world.level.validation.DirectoryValidator" {
import { $List, $List$$Type } from "java.util.List"
import { $ForbiddenSymlinkInfo, $ForbiddenSymlinkInfo$$Type } from "net.minecraft.world.level.validation.ForbiddenSymlinkInfo"
import { $PathAllowList$$Type } from "net.minecraft.world.level.validation.PathAllowList"
import { $Path$$Type } from "java.nio.file.Path"

export class $DirectoryValidator {
constructor(pathAllowList0: $PathAllowList$$Type)

public "validateSave"(path0: $Path$$Type, boolean1: boolean): $List<$ForbiddenSymlinkInfo>
public "validateSymlink"(path0: $Path$$Type, list1: $List$$Type<$ForbiddenSymlinkInfo$$Type>): void
}
}

declare module "net.minecraft.world.level.validation.PathAllowList$EntryType" {
import { $PathMatcher } from "java.nio.file.PathMatcher"
import { $FileSystem$$Type } from "java.nio.file.FileSystem"

export interface $PathAllowList$EntryType {
"compile"(fileSystem0: $FileSystem$$Type, string1: string): $PathMatcher
}

export namespace $PathAllowList$EntryType {
const FILESYSTEM: $PathAllowList$EntryType
const PREFIX: $PathAllowList$EntryType
}
export abstract class $PathAllowList$EntryType$$Static implements $PathAllowList$EntryType {
static readonly "FILESYSTEM": $PathAllowList$EntryType
static readonly "PREFIX": $PathAllowList$EntryType

}
}

declare module "net.minecraft.world.level.validation.ForbiddenSymlinkInfo" {
import { $Record } from "java.lang.Record"
import { $Path, $Path$$Type } from "java.nio.file.Path"

export class $ForbiddenSymlinkInfo extends $Record {
constructor(path0: $Path$$Type, path1: $Path$$Type)

public "link"(): $Path
public "target"(): $Path
}
}

declare module "net.minecraft.world.level.validation.PathAllowList" {
import { $List$$Type } from "java.util.List"
import { $PathAllowList$ConfigEntry$$Type } from "net.minecraft.world.level.validation.PathAllowList$ConfigEntry"
import { $PathMatcher } from "java.nio.file.PathMatcher"
import { $BufferedReader$$Type } from "java.io.BufferedReader"
import { $FileSystem$$Type } from "java.nio.file.FileSystem"
import { $Path$$Type } from "java.nio.file.Path"

export class $PathAllowList implements $PathMatcher {
constructor(list0: $List$$Type<$PathAllowList$ConfigEntry$$Type>)

public "getForFileSystem"(fileSystem0: $FileSystem$$Type): $PathMatcher
public "matches"(path0: $Path$$Type): boolean
public static "readPlain"(bufferedReader0: $BufferedReader$$Type): $PathAllowList
}
}

declare module "net.minecraft.world.level.validation.PathAllowList$ConfigEntry" {
import { $PathMatcher } from "java.nio.file.PathMatcher"
import { $Record } from "java.lang.Record"
import { $PathAllowList$EntryType, $PathAllowList$EntryType$$Type } from "net.minecraft.world.level.validation.PathAllowList$EntryType"
import { $FileSystem$$Type } from "java.nio.file.FileSystem"

export class $PathAllowList$ConfigEntry extends $Record {
constructor(entryType0: $PathAllowList$EntryType$$Type, string1: string)

public "compile"(fileSystem0: $FileSystem$$Type): $PathMatcher
public "pattern"(): string
public "type"(): $PathAllowList$EntryType
}
}

