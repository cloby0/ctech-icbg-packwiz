declare module "me.wesley1808.servercore.common.utils.statistics.Statistics" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $List } from "java.util.List"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Map } from "java.util.Map"
import { $TickingBlockEntity, $TickingBlockEntity$$Type } from "net.minecraft.world.level.block.entity.TickingBlockEntity"
import { $StatisticEntry } from "me.wesley1808.servercore.common.utils.statistics.entry.StatisticEntry"
import { $Iterable$$Type } from "java.lang.Iterable"

export class $Statistics {
constructor(server: $MinecraftServer$$Type)

public "getAllBlockEntities"(): $List<$TickingBlockEntity>
public "getAllEntities"(): $List<$Entity>
public "getBlockEntitiesByPlayer"(players: $Iterable$$Type<$ServerPlayer$$Type>): $Map<string, $StatisticEntry<$TickingBlockEntity>>
public "getBlockEntitiesByType"(blockEntities: $Iterable$$Type<$TickingBlockEntity$$Type>): $Map<string, $StatisticEntry<$TickingBlockEntity>>
public "getBlockEntitiesNear"(player: $ServerPlayer$$Type): $List<$TickingBlockEntity>
public "getChunkCount"(onlyLoaded: boolean): integer
public "getEntitiesByPlayer"(players: $Iterable$$Type<$ServerPlayer$$Type>): $Map<string, $StatisticEntry<$Entity>>
public "getEntitiesByType"(entities: $Iterable$$Type<$Entity$$Type>): $Map<string, $StatisticEntry<$Entity>>
public "getEntitiesNear"(player: $ServerPlayer$$Type): $List<$Entity>
public static "getInstance"(server: $MinecraftServer$$Type): $Statistics
get "allBlockEntities"(): $List<$TickingBlockEntity>
get "allEntities"(): $List<$Entity>
}
}

declare module "me.wesley1808.servercore.common.utils.statistics.entry.StatisticEntry" {
import { $Comparable } from "java.lang.Comparable"

export class $StatisticEntry<T = any> implements $Comparable<$StatisticEntry<T>> {
constructor()

public "compareTo"(other: $StatisticEntry$$Type<T>): integer
public "formatValue"(): string
public "increment"(value: T): void
}
}

declare module "me.wesley1808.servercore.common.interfaces.activation_range.ActivationEntity" {
import { $ActivationType } from "me.wesley1808.servercore.common.config.data.activation_range.ActivationType"

export interface $ActivationEntity {
"servercore$getActivatedImmunityTick"(): integer
"servercore$getActivatedTick"(): integer
"servercore$getActivationType"(): $ActivationType
"servercore$getFullTickCount"(): integer
"servercore$incFullTickCount"(): void
"servercore$isExcluded"(): boolean
"servercore$isInactive"(): boolean
"servercore$setActivatedImmunityTick"(int0: integer): void
"servercore$setActivatedTick"(int0: integer): void
"servercore$setInactive"(boolean0: boolean): void
}

export namespace $ActivationEntity {
const probejs$$marker: never
}
export abstract class $ActivationEntity$$Static implements $ActivationEntity {
}
}

declare module "me.wesley1808.servercore.common.interfaces.IMinecraftServer" {
import { $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $Statistics } from "me.wesley1808.servercore.common.utils.statistics.Statistics"
import { $DynamicManager } from "me.wesley1808.servercore.common.dynamic.DynamicManager"

export interface $IMinecraftServer {
"servercore$getDynamicManager"(): $DynamicManager
"servercore$getStatistics"(): $Statistics
"servercore$onStarted"(minecraftServer0: $MinecraftServer$$Type): void
}

export namespace $IMinecraftServer {
function onStarted(server: $MinecraftServer$$Type): void
}
export abstract class $IMinecraftServer$$Static implements $IMinecraftServer {
static "onStarted"(server: $MinecraftServer$$Type): void
}
}

declare module "me.wesley1808.servercore.common.interfaces.activation_range.Inactive" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Inactive {
"servercore$inactiveTick"(): void
}

export namespace $Inactive {
const probejs$$marker: never
}
export abstract class $Inactive$$Static implements $Inactive {
}
}

declare module "me.wesley1808.servercore.common.interfaces.IMobCategory" {
import { $MobCategory$$Type } from "net.minecraft.world.entity.MobCategory"

export interface $IMobCategory {
"servercore$getOriginalCapacity"(): integer
"servercore$getSpawnInterval"(): integer
"servercore$modifyCapacity"(double0: double): void
"servercore$modifySpawningConfig"(int0: integer, int1: integer): void
}

export namespace $IMobCategory {
function getOriginalCapacity(category: $MobCategory$$Type): integer
function getSpawnInterval(category: $MobCategory$$Type): integer
function modifyCapacity(category: $MobCategory$$Type, modifier: double): void
function of(category: $MobCategory$$Type): $IMobCategory
function reload(): void
}
export abstract class $IMobCategory$$Static implements $IMobCategory {
static "getOriginalCapacity"(category: $MobCategory$$Type): integer
static "getSpawnInterval"(category: $MobCategory$$Type): integer
static "modifyCapacity"(category: $MobCategory$$Type, modifier: double): void
static "of"(category: $MobCategory$$Type): $IMobCategory
static "reload"(): void
}
}

declare module "me.wesley1808.servercore.common.interfaces.chunk.ILevelChunk" {
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"

export interface $ILevelChunk {
"servercore$shouldDoLightning"(randomSource0: $RandomSource$$Type, int1: integer): integer
}

export namespace $ILevelChunk {
const probejs$$marker: never
}
export abstract class $ILevelChunk$$Static implements $ILevelChunk {
}
}

declare module "me.wesley1808.servercore.common.dynamic.DynamicManager" {
import { $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"

export class $DynamicManager {
constructor(server: $MinecraftServer$$Type)

public "getAverageTickTime"(): double
public static "getInstance"(server: $MinecraftServer$$Type): $DynamicManager
public static "modifyMobcaps"(percentage: integer): void
public "modifySimulationDistance"(distance: integer): void
public "modifyViewDistance"(distance: integer): void
public static "update"(server: $MinecraftServer$$Type): void
get "averageTickTime"(): double
}
}

declare module "me.wesley1808.servercore.common.interfaces.chunk.IServerLevel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IServerLevel {
"servercore$resetIceAndSnowTick"(): void
}

export namespace $IServerLevel {
const probejs$$marker: never
}
export abstract class $IServerLevel$$Static implements $IServerLevel {
}
}

declare module "me.wesley1808.servercore.common.config.data.activation_range.ActivationType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ActivationType {
"activationRange"(): integer
"extraHeightDown"(): boolean
"extraHeightUp"(): boolean
"tickInterval"(): integer
"wakeupInterval"(): integer
}

export namespace $ActivationType {
const probejs$$marker: never
}
export abstract class $ActivationType$$Static implements $ActivationType {
}
}

