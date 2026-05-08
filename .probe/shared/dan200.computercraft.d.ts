declare module "dan200.computercraft.api.lua.ILuaCallback" {
import { $MethodResult } from "dan200.computercraft.api.lua.MethodResult"

export interface $ILuaCallback {
"resume"(object0s: any[]): $MethodResult
}

export namespace $ILuaCallback {
const probejs$$marker: never
}
export abstract class $ILuaCallback$$Static implements $ILuaCallback {
}
}

declare module "dan200.computercraft.api.peripheral.IPeripheral" {
import { $IComputerAccess$$Type } from "dan200.computercraft.api.peripheral.IComputerAccess"
import { $Set } from "java.util.Set"

export interface $IPeripheral {
"attach"(iComputerAccess0: $IComputerAccess$$Type): void
"detach"(iComputerAccess0: $IComputerAccess$$Type): void
"equals"(iPeripheral0: $IPeripheral$$Type): boolean
"getAdditionalTypes"(): $Set<string>
"getTarget"(): any
"getType"(): string
get "additionalTypes"(): $Set<string>
get "target"(): any
get "type"(): string
}

export namespace $IPeripheral {
const probejs$$marker: never
}
export abstract class $IPeripheral$$Static implements $IPeripheral {
}
}

declare module "dan200.computercraft.api.upgrades.UpgradeData" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Record } from "java.lang.Record"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $UpgradeBase, $UpgradeBase$$Type } from "dan200.computercraft.api.upgrades.UpgradeBase"

export class $UpgradeData<T extends $UpgradeBase = $UpgradeBase> extends $Record {
constructor(upgrade: T, data: $CompoundTag$$Type)

public "copy"(): $UpgradeData<T>
public static "copyOf"<T extends $UpgradeBase>(upgradeData0: $UpgradeData$$Type<T>): $UpgradeData<T>
public "data"(): $CompoundTag
public "getUpgradeItem"(): $ItemStack
public static "of"<T extends $UpgradeBase>(t0: T, compoundTag1: $CompoundTag$$Type): $UpgradeData<T>
public static "ofDefault"<T extends $UpgradeBase>(t0: T): $UpgradeData<T>
public "upgrade"(): T
get "upgradeItem"(): $ItemStack
}
}

declare module "dan200.computercraft.api.turtle.ITurtleAccess" {
import { $MethodResult } from "dan200.computercraft.api.lua.MethodResult"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $TurtleSide$$Type } from "dan200.computercraft.api.turtle.TurtleSide"
import { $TurtleAnimation$$Type } from "dan200.computercraft.api.turtle.TurtleAnimation"
import { $Container } from "net.minecraft.world.Container"
import { $ITurtleUpgrade, $ITurtleUpgrade$$Type } from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $UpgradeData, $UpgradeData$$Type } from "dan200.computercraft.api.upgrades.UpgradeData"
import { $TurtleCommand$$Type } from "dan200.computercraft.api.turtle.TurtleCommand"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $IPeripheral } from "dan200.computercraft.api.peripheral.IPeripheral"

export interface $ITurtleAccess {
"addFuel"(int0: integer): void
"consumeFuel"(int0: integer): boolean
"executeCommand"(turtleCommand0: $TurtleCommand$$Type): $MethodResult
"getColour"(): integer
"getDirection"(): $Direction
"getFuelLevel"(): integer
"getFuelLimit"(): integer
"getInventory"(): $Container
"getLevel"(): $Level
"getOwningPlayer"(): $GameProfile
"getPeripheral"(turtleSide0: $TurtleSide$$Type): $IPeripheral
"getPosition"(): $BlockPos
"getSelectedSlot"(): integer
"getUpgrade"(turtleSide0: $TurtleSide$$Type): $ITurtleUpgrade
"getUpgradeNBTData"(turtleSide0: $TurtleSide$$Type): $CompoundTag
"getUpgradeWithData"(turtleSide0: $TurtleSide$$Type): $UpgradeData<$ITurtleUpgrade>
"isFuelNeeded"(): boolean
"isRemoved"(): boolean
"playAnimation"(turtleAnimation0: $TurtleAnimation$$Type): void
"setColour"(int0: integer): void
"setDirection"(direction0: $Direction$$Type): void
"setFuelLevel"(int0: integer): void
"setSelectedSlot"(int0: integer): void
/** @deprecated */
"setUpgrade"(turtleSide0: $TurtleSide$$Type, iTurtleUpgrade1: $ITurtleUpgrade$$Type): void
"setUpgradeWithData"(turtleSide0: $TurtleSide$$Type, upgradeData1: $UpgradeData$$Type<$ITurtleUpgrade$$Type>): void
"teleportTo"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): boolean
"updateUpgradeNBTData"(turtleSide0: $TurtleSide$$Type): void
get "colour"(): integer
get "direction"(): $Direction
get "fuelLevel"(): integer
get "fuelLimit"(): integer
get "inventory"(): $Container
get "level"(): $Level
get "owningPlayer"(): $GameProfile
get "position"(): $BlockPos
get "selectedSlot"(): integer
get "fuelNeeded"(): boolean
get "removed"(): boolean
set "colour"(value: integer)
set "direction"(value: $Direction$$Type)
set "fuelLevel"(value: integer)
set "selectedSlot"(value: integer)
}

export namespace $ITurtleAccess {
const probejs$$marker: never
}
export abstract class $ITurtleAccess$$Static implements $ITurtleAccess {
}
}

declare module "dan200.computercraft.api.client.turtle.RegisterTurtleModellersEvent" {
import { $ITurtleUpgrade, $ITurtleUpgrade$$Type } from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import { $TurtleUpgradeSerialiser$$Type } from "dan200.computercraft.api.turtle.TurtleUpgradeSerialiser"
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $TurtleUpgradeModeller$$Type } from "dan200.computercraft.api.client.turtle.TurtleUpgradeModeller"
import { $RegisterTurtleUpgradeModeller } from "dan200.computercraft.api.client.turtle.RegisterTurtleUpgradeModeller"

export class $RegisterTurtleModellersEvent extends $Event implements $IModBusEvent, $RegisterTurtleUpgradeModeller {
constructor()

public "register"<T extends $ITurtleUpgrade>(turtleUpgradeSerialiser0: $TurtleUpgradeSerialiser$$Type<T>, turtleUpgradeModeller1: $TurtleUpgradeModeller$$Type<T>): void
}
}

declare module "dan200.computercraft.api.turtle.TurtleCommand" {
import { $ITurtleAccess$$Type } from "dan200.computercraft.api.turtle.ITurtleAccess"
import { $TurtleCommandResult } from "dan200.computercraft.api.turtle.TurtleCommandResult"

export interface $TurtleCommand {
"execute"(iTurtleAccess0: $ITurtleAccess$$Type): $TurtleCommandResult
}

export namespace $TurtleCommand {
const probejs$$marker: never
}
export abstract class $TurtleCommand$$Static implements $TurtleCommand {
}
}

declare module "dan200.computercraft.api.turtle.TurtleUpgradeType" {
import { $Enum } from "java.lang.Enum"

export class $TurtleUpgradeType extends $Enum<$TurtleUpgradeType> {
static readonly "BOTH": $TurtleUpgradeType
static readonly "PERIPHERAL": $TurtleUpgradeType
static readonly "TOOL": $TurtleUpgradeType

public "isPeripheral"(): boolean
public "isTool"(): boolean
public static "valueOf"(string0: string): $TurtleUpgradeType
public static "values"(): $TurtleUpgradeType[]
get "peripheral"(): boolean
get "tool"(): boolean
}
}

declare module "dan200.computercraft.api.upgrades.UpgradeBase" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $UpgradeBase {
"getCraftingItem"(): $ItemStack
"getUnlocalisedAdjective"(): string
"getUpgradeData"(itemStack0: $ItemStack$$Type): $CompoundTag
"getUpgradeID"(): $ResourceLocation
"getUpgradeItem"(compoundTag0: $CompoundTag$$Type): $ItemStack
"isItemSuitable"(itemStack0: $ItemStack$$Type): boolean
get "craftingItem"(): $ItemStack
get "unlocalisedAdjective"(): string
get "upgradeID"(): $ResourceLocation
}

export namespace $UpgradeBase {
function getDefaultAdjective(resourceLocation0: $ResourceLocation$$Type): string
}
export abstract class $UpgradeBase$$Static implements $UpgradeBase {
static "getDefaultAdjective"(resourceLocation0: $ResourceLocation$$Type): string
}
}

declare module "dan200.computercraft.api.turtle.TurtleSide" {
import { $Enum } from "java.lang.Enum"

export class $TurtleSide extends $Enum<$TurtleSide> {
static readonly "LEFT": $TurtleSide
static readonly "RIGHT": $TurtleSide

public static "valueOf"(string0: string): $TurtleSide
public static "values"(): $TurtleSide[]
}
}

declare module "dan200.computercraft.api.peripheral.IComputerAccess" {
import { $WritableMount$$Type } from "dan200.computercraft.api.filesystem.WritableMount"
import { $Map } from "java.util.Map"
import { $Mount$$Type } from "dan200.computercraft.api.filesystem.Mount"
import { $IPeripheral } from "dan200.computercraft.api.peripheral.IPeripheral"
import { $WorkMonitor } from "dan200.computercraft.api.peripheral.WorkMonitor"

export interface $IComputerAccess {
"getAttachmentName"(): string
"getAvailablePeripheral"(string0: string): $IPeripheral
"getAvailablePeripherals"(): $Map<string, $IPeripheral>
"getID"(): integer
"getMainThreadMonitor"(): $WorkMonitor
"mount"(string0: string, mount1: $Mount$$Type): string
"mount"(string0: string, mount1: $Mount$$Type, string2: string): string
"mountWritable"(string0: string, writableMount1: $WritableMount$$Type): string
"mountWritable"(string0: string, writableMount1: $WritableMount$$Type, string2: string): string
"queueEvent"(string0: string, ...object1s: any[]): void
"unmount"(string0: string): void
get "attachmentName"(): string
get "availablePeripherals"(): $Map<string, $IPeripheral>
get "iD"(): integer
get "mainThreadMonitor"(): $WorkMonitor
}

export namespace $IComputerAccess {
const probejs$$marker: never
}
export abstract class $IComputerAccess$$Static implements $IComputerAccess {
}
}

declare module "dan200.computercraft.api.turtle.TurtleUpgradeSerialiser" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Registry } from "net.minecraft.core.Registry"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $ITurtleUpgrade, $ITurtleUpgrade$$Type } from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import { $UpgradeSerialiser } from "dan200.computercraft.api.upgrades.UpgradeSerialiser"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"
import { $Function$$Type } from "java.util.function.Function"

export interface $TurtleUpgradeSerialiser<T extends $ITurtleUpgrade = $ITurtleUpgrade> extends $UpgradeSerialiser<T> {
"fromJson"(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type): T
"fromNetwork"(resourceLocation0: $ResourceLocation$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): T
"toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type, t1: T): void
}

export namespace $TurtleUpgradeSerialiser {
function registryId(): $ResourceKey<$Registry<$TurtleUpgradeSerialiser<any>>>
function simple<T extends $ITurtleUpgrade>(function0: $Function$$Type<$ResourceLocation$$Type, T>): $TurtleUpgradeSerialiser<T>
function simpleWithCustomItem<T extends $ITurtleUpgrade>(biFunction0: $BiFunction$$Type<$ResourceLocation$$Type, $ItemStack$$Type, T>): $TurtleUpgradeSerialiser<T>
}
export abstract class $TurtleUpgradeSerialiser$$Static<T extends $ITurtleUpgrade = $ITurtleUpgrade> implements $TurtleUpgradeSerialiser<T> {
static "registryId"(): $ResourceKey<$Registry<$TurtleUpgradeSerialiser<any>>>
static "simple"<T extends $ITurtleUpgrade>(function0: $Function$$Type<$ResourceLocation$$Type, T>): $TurtleUpgradeSerialiser<T>
static "simpleWithCustomItem"<T extends $ITurtleUpgrade>(biFunction0: $BiFunction$$Type<$ResourceLocation$$Type, $ItemStack$$Type, T>): $TurtleUpgradeSerialiser<T>
}
}

declare module "dan200.computercraft.api.client.turtle.RegisterTurtleUpgradeModeller" {
import { $ITurtleUpgrade, $ITurtleUpgrade$$Type } from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import { $TurtleUpgradeSerialiser$$Type } from "dan200.computercraft.api.turtle.TurtleUpgradeSerialiser"
import { $TurtleUpgradeModeller$$Type } from "dan200.computercraft.api.client.turtle.TurtleUpgradeModeller"

export interface $RegisterTurtleUpgradeModeller {
"register"<T extends $ITurtleUpgrade>(turtleUpgradeSerialiser0: $TurtleUpgradeSerialiser$$Type<T>, turtleUpgradeModeller1: $TurtleUpgradeModeller$$Type<T>): void
}

export namespace $RegisterTurtleUpgradeModeller {
const probejs$$marker: never
}
export abstract class $RegisterTurtleUpgradeModeller$$Static implements $RegisterTurtleUpgradeModeller {
}
}

declare module "dan200.computercraft.api.peripheral.WorkMonitor" {
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $Runnable$$Type } from "java.lang.Runnable"

export interface $WorkMonitor {
"canWork"(): boolean
"runWork"(runnable0: $Runnable$$Type): boolean
"shouldWork"(): boolean
"trackWork"(long0: long, timeUnit1: $TimeUnit$$Type): void
}

export namespace $WorkMonitor {
const probejs$$marker: never
}
export abstract class $WorkMonitor$$Static implements $WorkMonitor {
}
}

declare module "dan200.computercraft.api.client.turtle.TurtleUpgradeModeller" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ITurtleAccess$$Type } from "dan200.computercraft.api.turtle.ITurtleAccess"
import { $ITurtleUpgrade, $ITurtleUpgrade$$Type } from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Collection } from "java.util.Collection"
import { $TransformedModel } from "dan200.computercraft.api.client.TransformedModel"
import { $TurtleSide$$Type } from "dan200.computercraft.api.turtle.TurtleSide"
import { $ModelResourceLocation$$Type } from "net.minecraft.client.resources.model.ModelResourceLocation"

export interface $TurtleUpgradeModeller<T extends $ITurtleUpgrade = $ITurtleUpgrade> {
"getDependencies"(): $Collection<$ResourceLocation>
"getModel"(t0: T, compoundTag1: $CompoundTag$$Type, turtleSide2: $TurtleSide$$Type): $TransformedModel
"getModel"(t0: T, iTurtleAccess1: $ITurtleAccess$$Type, turtleSide2: $TurtleSide$$Type): $TransformedModel
get "dependencies"(): $Collection<$ResourceLocation>
}

export namespace $TurtleUpgradeModeller {
function flatItem<T extends $ITurtleUpgrade>(): $TurtleUpgradeModeller<T>
function sided<T extends $ITurtleUpgrade>(modelResourceLocation0: $ModelResourceLocation$$Type, modelResourceLocation1: $ModelResourceLocation$$Type): $TurtleUpgradeModeller<T>
function sided<T extends $ITurtleUpgrade>(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type): $TurtleUpgradeModeller<T>
}
export abstract class $TurtleUpgradeModeller$$Static<T extends $ITurtleUpgrade = $ITurtleUpgrade> implements $TurtleUpgradeModeller<T> {
static "flatItem"<T extends $ITurtleUpgrade>(): $TurtleUpgradeModeller<T>
static "sided"<T extends $ITurtleUpgrade>(modelResourceLocation0: $ModelResourceLocation$$Type, modelResourceLocation1: $ModelResourceLocation$$Type): $TurtleUpgradeModeller<T>
static "sided"<T extends $ITurtleUpgrade>(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type): $TurtleUpgradeModeller<T>
}
}

declare module "dan200.computercraft.api.turtle.TurtleVerb" {
import { $Enum } from "java.lang.Enum"

export class $TurtleVerb extends $Enum<$TurtleVerb> {
static readonly "ATTACK": $TurtleVerb
static readonly "DIG": $TurtleVerb

public static "valueOf"(string0: string): $TurtleVerb
public static "values"(): $TurtleVerb[]
}
}

declare module "dan200.computercraft.api.turtle.TurtleCommandResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $TurtleCommandResult {
public static "failure"(string0: string): $TurtleCommandResult
public static "failure"(): $TurtleCommandResult
public "getErrorMessage"(): string
public "getResults"(): any[]
public "isSuccess"(): boolean
public static "success"(object0s: any[]): $TurtleCommandResult
public static "success"(): $TurtleCommandResult
get "errorMessage"(): string
get "results"(): any[]
}
}

declare module "dan200.computercraft.api.filesystem.WritableMount" {
import { $SeekableByteChannel } from "java.nio.channels.SeekableByteChannel"
import { $List$$Type } from "java.util.List"
import { $OpenOption$$Type } from "java.nio.file.OpenOption"
import { $Mount } from "dan200.computercraft.api.filesystem.Mount"
import { $Set$$Type } from "java.util.Set"
import { $BasicFileAttributes } from "java.nio.file.attribute.BasicFileAttributes"

export interface $WritableMount extends $Mount {
"delete"(string0: string): void
"exists"(string0: string): boolean
"getAttributes"(string0: string): $BasicFileAttributes
"getCapacity"(): long
"getRemainingSpace"(): long
"getSize"(string0: string): long
"isDirectory"(string0: string): boolean
"isReadOnly"(string0: string): boolean
"list"(string0: string, list1: $List$$Type<string>): void
"makeDirectory"(string0: string): void
"openFile"(string0: string, set1: $Set$$Type<$OpenOption$$Type>): $SeekableByteChannel
/** @deprecated */
"openForAppend"(string0: string): $SeekableByteChannel
"openForRead"(string0: string): $SeekableByteChannel
/** @deprecated */
"openForWrite"(string0: string): $SeekableByteChannel
"rename"(string0: string, string1: string): void
get "capacity"(): long
get "remainingSpace"(): long
}

export namespace $WritableMount {
const probejs$$marker: never
}
export abstract class $WritableMount$$Static implements $WritableMount {
}
}

declare module "dan200.computercraft.api.client.TransformedModel" {
import { $BakedModel, $BakedModel$$Type } from "net.minecraft.client.resources.model.BakedModel"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Transformation, $Transformation$$Type } from "com.mojang.math.Transformation"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ModelResourceLocation$$Type } from "net.minecraft.client.resources.model.ModelResourceLocation"

export class $TransformedModel {
constructor(bakedModel0: $BakedModel$$Type, transformation1: $Transformation$$Type)
constructor(bakedModel0: $BakedModel$$Type)

public "getMatrix"(): $Transformation
public "getModel"(): $BakedModel
public static "of"(resourceLocation0: $ResourceLocation$$Type): $TransformedModel
public static "of"(modelResourceLocation0: $ModelResourceLocation$$Type): $TransformedModel
public static "of"(itemStack0: $ItemStack$$Type, transformation1: $Transformation$$Type): $TransformedModel
get "matrix"(): $Transformation
get "model"(): $BakedModel
}
}

declare module "dan200.computercraft.api.turtle.ITurtleUpgrade" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ITurtleAccess$$Type } from "dan200.computercraft.api.turtle.ITurtleAccess"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TurtleUpgradeType } from "dan200.computercraft.api.turtle.TurtleUpgradeType"
import { $TurtleCommandResult } from "dan200.computercraft.api.turtle.TurtleCommandResult"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $TurtleVerb$$Type } from "dan200.computercraft.api.turtle.TurtleVerb"
import { $TurtleSide$$Type } from "dan200.computercraft.api.turtle.TurtleSide"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $IPeripheral } from "dan200.computercraft.api.peripheral.IPeripheral"
import { $UpgradeBase } from "dan200.computercraft.api.upgrades.UpgradeBase"

export interface $ITurtleUpgrade extends $UpgradeBase {
"createPeripheral"(iTurtleAccess0: $ITurtleAccess$$Type, turtleSide1: $TurtleSide$$Type): $IPeripheral
"getCraftingItem"(): $ItemStack
"getPersistedData"(compoundTag0: $CompoundTag$$Type): $CompoundTag
"getType"(): $TurtleUpgradeType
"getUnlocalisedAdjective"(): string
"getUpgradeData"(itemStack0: $ItemStack$$Type): $CompoundTag
"getUpgradeID"(): $ResourceLocation
"getUpgradeItem"(compoundTag0: $CompoundTag$$Type): $ItemStack
"isItemSuitable"(itemStack0: $ItemStack$$Type): boolean
"update"(iTurtleAccess0: $ITurtleAccess$$Type, turtleSide1: $TurtleSide$$Type): void
"useTool"(iTurtleAccess0: $ITurtleAccess$$Type, turtleSide1: $TurtleSide$$Type, turtleVerb2: $TurtleVerb$$Type, direction3: $Direction$$Type): $TurtleCommandResult
get "craftingItem"(): $ItemStack
get "type"(): $TurtleUpgradeType
get "unlocalisedAdjective"(): string
get "upgradeID"(): $ResourceLocation
}

export namespace $ITurtleUpgrade {
function getDefaultAdjective(resourceLocation0: $ResourceLocation$$Type): string
}
export abstract class $ITurtleUpgrade$$Static implements $ITurtleUpgrade {
static "getDefaultAdjective"(resourceLocation0: $ResourceLocation$$Type): string
}
}

declare module "dan200.computercraft.api.turtle.TurtleAnimation" {
import { $Enum } from "java.lang.Enum"

export class $TurtleAnimation extends $Enum<$TurtleAnimation> {
static readonly "MOVE_BACK": $TurtleAnimation
static readonly "MOVE_DOWN": $TurtleAnimation
static readonly "MOVE_FORWARD": $TurtleAnimation
static readonly "MOVE_UP": $TurtleAnimation
static readonly "NONE": $TurtleAnimation
static readonly "SHORT_WAIT": $TurtleAnimation
static readonly "SWING_LEFT_TOOL": $TurtleAnimation
static readonly "SWING_RIGHT_TOOL": $TurtleAnimation
static readonly "TURN_LEFT": $TurtleAnimation
static readonly "TURN_RIGHT": $TurtleAnimation
static readonly "WAIT": $TurtleAnimation

public static "valueOf"(string0: string): $TurtleAnimation
public static "values"(): $TurtleAnimation[]
}
}

declare module "dan200.computercraft.api.filesystem.Mount" {
import { $SeekableByteChannel } from "java.nio.channels.SeekableByteChannel"
import { $List$$Type } from "java.util.List"
import { $BasicFileAttributes } from "java.nio.file.attribute.BasicFileAttributes"

export interface $Mount {
"exists"(string0: string): boolean
"getAttributes"(string0: string): $BasicFileAttributes
"getSize"(string0: string): long
"isDirectory"(string0: string): boolean
"list"(string0: string, list1: $List$$Type<string>): void
"openForRead"(string0: string): $SeekableByteChannel
}

export namespace $Mount {
const probejs$$marker: never
}
export abstract class $Mount$$Static implements $Mount {
}
}

declare module "dan200.computercraft.api.upgrades.UpgradeSerialiser" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $UpgradeBase, $UpgradeBase$$Type } from "dan200.computercraft.api.upgrades.UpgradeBase"

export interface $UpgradeSerialiser<T extends $UpgradeBase = $UpgradeBase> {
"fromJson"(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type): T
"fromNetwork"(resourceLocation0: $ResourceLocation$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): T
"toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type, t1: T): void
}

export namespace $UpgradeSerialiser {
const probejs$$marker: never
}
export abstract class $UpgradeSerialiser$$Static<T extends $UpgradeBase = $UpgradeBase> implements $UpgradeSerialiser<T> {
}
}

declare module "dan200.computercraft.api.lua.MethodResult" {
import { $ILuaCallback, $ILuaCallback$$Type } from "dan200.computercraft.api.lua.ILuaCallback"

export class $MethodResult {
public "adjustError"(int0: integer): $MethodResult
public "getCallback"(): $ILuaCallback
public "getErrorAdjust"(): integer
public "getResult"(): any[]
public static "of"(): $MethodResult
public static "of"(object0: any): $MethodResult
public static "of"(...object0s: any[]): $MethodResult
public static "pullEvent"(string0: string, iLuaCallback1: $ILuaCallback$$Type): $MethodResult
public static "pullEventRaw"(string0: string, iLuaCallback1: $ILuaCallback$$Type): $MethodResult
public static "yield"(object0s: any[], iLuaCallback1: $ILuaCallback$$Type): $MethodResult
get "callback"(): $ILuaCallback
get "errorAdjust"(): integer
get "result"(): any[]
}
}

