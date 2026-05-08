declare module "com.lowdragmc.mbd2.api.recipe.event.FuelRecipeUIEvent" {
import { $MBDRecipeType$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipeType"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $MBDRecipe, $MBDRecipe$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipe"
import { $Component } from "net.minecraft.network.chat.Component"
import { $RecipeTypeEvent } from "com.lowdragmc.mbd2.api.recipe.event.RecipeTypeEvent"
import { $WidgetGroup, $WidgetGroup$$Type } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"

export class $FuelRecipeUIEvent extends $RecipeTypeEvent {
constructor(mBDRecipeType0: $MBDRecipeType$$Type, mBDRecipe1: $MBDRecipe$$Type, widgetGroup2: $WidgetGroup$$Type)
constructor()

public "getChatComponent"(): $Component
public "getRecipe"(): $MBDRecipe
public "getRegisterUI"(): $LDLRegister
public "getRoot"(): $WidgetGroup
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
get "recipe"(): $MBDRecipe
set "recipe"(value: $MBDRecipe$$Type)
get "root"(): $WidgetGroup
set "root"(value: $WidgetGroup$$Type)
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineOnLoadEventJS" {
import { $MBDMachineEvents$MachineEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineEventJS"
import { $MachineOnLoadEvent, $MachineOnLoadEvent$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineOnLoadEvent"

export class $MBDMachineEvents$MachineOnLoadEventJS extends $MBDMachineEvents$MachineEventJS<$MachineOnLoadEvent> {
constructor(machineOnLoadEvent0: $MachineOnLoadEvent$$Type)

}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineCustomKeyframeEvent" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $CustomInstructionKeyframeEvent, $CustomInstructionKeyframeEvent$$Type } from "software.bernie.geckolib.core.keyframe.event.CustomInstructionKeyframeEvent"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MachineEvent } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"
import { $AnimatableMachine, $AnimatableMachine$$Type } from "com.lowdragmc.mbd2.integration.geckolib.AnimatableMachine"

export class $MachineCustomKeyframeEvent extends $MachineEvent {
constructor(mBDMachine0: $MBDMachine$$Type, customInstructionKeyframeEvent1: $CustomInstructionKeyframeEvent$$Type<$AnimatableMachine$$Type>)
constructor()

public "getChatComponent"(): $Component
public "getEvent"(): $CustomInstructionKeyframeEvent<$AnimatableMachine>
public "getInstruction"(): string
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
public "setEvent"(customInstructionKeyframeEvent0: $CustomInstructionKeyframeEvent$$Type<$AnimatableMachine$$Type>): void
public "setInstruction"(string0: string): void
get "event"(): $CustomInstructionKeyframeEvent<$AnimatableMachine>
set "event"(value: $CustomInstructionKeyframeEvent$$Type<$AnimatableMachine$$Type>)
get "instruction"(): string
set "instruction"(value: string)
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineOnRecipeFinishEventJS" {
import { $MBDMachineEvents$MachineEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineEventJS"
import { $MachineOnRecipeFinishEvent, $MachineOnRecipeFinishEvent$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineOnRecipeFinishEvent"

export class $MBDMachineEvents$MachineOnRecipeFinishEventJS extends $MBDMachineEvents$MachineEventJS<$MachineOnRecipeFinishEvent> {
constructor(machineOnRecipeFinishEvent0: $MachineOnRecipeFinishEvent$$Type)

}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.ConfigBlockProperties$ConfigBlockPropertiesBuilder" {
import { $RotationState$$Type } from "com.lowdragmc.mbd2.api.block.RotationState"
import { $ConfigBlockProperties$RenderTypes$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigBlockProperties$RenderTypes"
import { $ConfigBlockProperties$BlockSound$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigBlockProperties$BlockSound"
import { $ConfigBlockProperties } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigBlockProperties"

export class $ConfigBlockProperties$ConfigBlockPropertiesBuilder {
public "blockSound"(blockSound0: $ConfigBlockProperties$BlockSound$$Type): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "build"(): $ConfigBlockProperties
public "canBeWaterlogged"(boolean0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "canOcclude"(boolean0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "collisionShapeFullBlock"(boolean0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "destroyTime"(float0: float): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "emissive"(boolean0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "explosionResistance"(float0: float): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "forceSolid"(boolean0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "friction"(float0: float): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "hasCollision"(boolean0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "ignitedByLava"(boolean0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "isAir"(boolean0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "isSuffocating"(boolean0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "jumpFactor"(float0: float): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "noParticleOnBreak"(boolean0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "renderTypes"(renderTypes0: $ConfigBlockProperties$RenderTypes$$Type): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "replaceable"(boolean0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "rotationState"(rotationState0: $RotationState$$Type): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "speedFactor"(float0: float): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "transparent"(boolean0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "useAO"(boolean0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
}
}

declare module "com.lowdragmc.mbd2.api.registry.MBDRegistry" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Map$Entry } from "java.util.Map$Entry"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Tag, $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $Iterator } from "java.util.Iterator"
import { $Map } from "java.util.Map"
import { $Set } from "java.util.Set"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Spliterator } from "java.util.Spliterator"
import { $Iterable } from "java.lang.Iterable"

export class $MBDRegistry<K = any, V = any> implements $Iterable<V> {
static readonly "REGISTERED": $Map<$ResourceLocation, $MBDRegistry<any, any>>

constructor(resourceLocation0: $ResourceLocation$$Type)

public "codec"(): $Codec<V>
public "containKey"(k0: K): boolean
public "containValue"(v0: V): boolean
public "entries"(): $Set<$Map$Entry<K, V>>
public "forEach"(consumer0: $Consumer$$Type<V>): void
public "freeze"(): void
public "get"(k0: K): V
public "getKey"(v0: V): K
public "getOrDefault"(k0: K, v1: V): V
public "getOrDefaultKey"(v0: V, k1: K): K
public "getRegistryName"(): $ResourceLocation
public "isFrozen"(): boolean
public "iterator"(): $Iterator<V>
public "keys"(): $Set<K>
public "loadFromNBT"(tag0: $Tag$$Type): V
public "readBuf"(friendlyByteBuf0: $FriendlyByteBuf$$Type): V
public "register"(k0: K, v1: V): void
public "registerOrOverride"(k0: K, v1: V): V
public "registry"(): $Map<K, V>
public "remove"(k0: K): boolean
public "replace"(k0: K, v1: V): V
public "saveToNBT"(v0: V): $Tag
public "spliterator"(): $Spliterator<V>
public "unfreeze"(): void
public "values"(): $Set<V>
public "writeBuf"(v0: V, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
[Symbol.iterator](): IterableIterator<V>;
get "registryName"(): $ResourceLocation
get "frozen"(): boolean
}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineCustomDataUpdateEventJS" {
import { $MBDMachineEvents$MachineEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineEventJS"
import { $MachineCustomDataUpdateEvent, $MachineCustomDataUpdateEvent$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineCustomDataUpdateEvent"

export class $MBDMachineEvents$MachineCustomDataUpdateEventJS extends $MBDMachineEvents$MachineEventJS<$MachineCustomDataUpdateEvent> {
constructor(machineCustomDataUpdateEvent0: $MachineCustomDataUpdateEvent$$Type)

}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDRecipeTypeEvents$FuelRecipeUIEventJS" {
import { $FuelRecipeUIEvent, $FuelRecipeUIEvent$$Type } from "com.lowdragmc.mbd2.api.recipe.event.FuelRecipeUIEvent"
import { $MBDRecipeTypeEvents$RecipeTypeEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDRecipeTypeEvents$RecipeTypeEventJS"

export class $MBDRecipeTypeEvents$FuelRecipeUIEventJS extends $MBDRecipeTypeEvents$RecipeTypeEventJS<$FuelRecipeUIEvent> {
constructor(fuelRecipeUIEvent0: $FuelRecipeUIEvent$$Type)

}
}

declare module "com.lowdragmc.mbd2.client.MachineSound" {
import { $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $SoundBufferLibrary$$Type } from "net.minecraft.client.sounds.SoundBufferLibrary"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $AudioStream } from "net.minecraft.client.sounds.AudioStream"
import { $AbstractTickableSoundInstance } from "net.minecraft.client.resources.sounds.AbstractTickableSoundInstance"
import { $Sound$$Type } from "net.minecraft.client.resources.sounds.Sound"
import { $BooleanSupplier, $BooleanSupplier$$Type } from "java.util.function.BooleanSupplier"

export class $MachineSound extends $AbstractTickableSoundInstance {
readonly "loop": boolean
readonly "loopWithShuffle": boolean
readonly "predicate": $BooleanSupplier

constructor(soundEvent0: $SoundEvent$$Type, soundSource1: $SoundSource$$Type, booleanSupplier2: $BooleanSupplier$$Type, blockPos3: $BlockPos$$Type, boolean4: boolean, boolean5: boolean, int6: integer, float7: float, float8: float)

public "canPlaySound"(): boolean
public "canStartSilent"(): boolean
public static "createUnseededRandom"(): $RandomSource
public "getStream"(soundBufferLibrary0: $SoundBufferLibrary$$Type, sound1: $Sound$$Type, boolean2: boolean): $CompletableFuture<$AudioStream>
public "play"(): void
public "release"(): void
public "tick"(): void
}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineOnRecipeWorkingEventJS" {
import { $MBDMachineEvents$MachineEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineEventJS"
import { $MachineOnRecipeWorkingEvent, $MachineOnRecipeWorkingEvent$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineOnRecipeWorkingEvent"

export class $MBDMachineEvents$MachineOnRecipeWorkingEventJS extends $MBDMachineEvents$MachineEventJS<$MachineOnRecipeWorkingEvent> {
constructor(machineOnRecipeWorkingEvent0: $MachineOnRecipeWorkingEvent$$Type)

}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineEventJS" {
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $MachineEvent, $MachineEvent$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent"

export class $MBDMachineEvents$MachineEventJS<E extends $MachineEvent = $MachineEvent> extends $EventJS {
readonly "event": E

constructor(e0: E)

public "getEvent"(): E
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineDropsEvent" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $List, $List$$Type } from "java.util.List"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MachineEvent } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"

export class $MachineDropsEvent extends $MachineEvent {
readonly "entity": $Entity

constructor(mBDMachine0: $MBDMachine$$Type, entity1: $Entity$$Type, list2: $List$$Type<$ItemStack$$Type>)
constructor()

public "getChatComponent"(): $Component
public "getDrops"(): $List<$ItemStack>
public "getEntity"(): $Entity
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
get "drops"(): $List<$ItemStack>
set "drops"(value: $List$$Type<$ItemStack$$Type>)
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.api.recipe.ingredient.FluidIngredient$Value" {
import { $JsonObject } from "com.google.gson.JsonObject"
import { $Collection } from "java.util.Collection"
import { $Fluid } from "net.minecraft.world.level.material.Fluid"

export interface $FluidIngredient$Value {
"copy"(): $FluidIngredient$Value
"getStacks"(): $Collection<$Fluid>
"serialize"(): $JsonObject
get "stacks"(): $Collection<$Fluid>
}

export namespace $FluidIngredient$Value {
const probejs$$marker: never
}
export abstract class $FluidIngredient$Value$$Static implements $FluidIngredient$Value {
}
}

declare module "com.lowdragmc.mbd2.api.recipe.MBDRecipe$ActionResult" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Record } from "java.lang.Record"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"

export class $MBDRecipe$ActionResult extends $Record {
static readonly "FAIL_NO_REASON": $MBDRecipe$ActionResult
static readonly "SUCCESS": $MBDRecipe$ActionResult

constructor(isSuccess: boolean, reason: $Supplier$$Type<$Component>, expectingRate: float)

public "expectingRate"(): float
public static "fail"(supplier0: $Supplier$$Type<$Component>): $MBDRecipe$ActionResult
public static "fail"(supplier0: $Supplier$$Type<$Component>, float1: float): $MBDRecipe$ActionResult
public "isSuccess"(): boolean
public "reason"(): $Supplier<$Component>
get "success"(): boolean
}
}

declare module "com.lowdragmc.mbd2.api.block.RotationState" {
import { $Enum } from "java.lang.Enum"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Optional } from "java.util.Optional"
import { $DirectionProperty } from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $RotationState extends $Enum<$RotationState> implements $Predicate<$Direction> {
static readonly "ALL": $RotationState
static readonly "NONE": $RotationState
static readonly "NON_Y_AXIS": $RotationState
static readonly "Y_AXIS": $RotationState
readonly "defaultDirection": $Direction
readonly "property": $Optional<$DirectionProperty>

public "and"(predicate0: $Predicate$$Type<$Direction$$Type>): $Predicate<$Direction>
public static "isEqual"<T>(object0: any): $Predicate<T>
public "negate"(): $Predicate<$Direction>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public "or"(predicate0: $Predicate$$Type<$Direction$$Type>): $Predicate<$Direction>
public "test"(direction0: $Direction$$Type): boolean
public static "valueOf"(string0: string): $RotationState
public static "values"(): $RotationState[]
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.MBDMachineDefinition$ConfigMachineSettingsFactory" {
import { $ConfigMachineSettings } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigMachineSettings"
import { $Supplier } from "java.util.function.Supplier"

export interface $MBDMachineDefinition$ConfigMachineSettingsFactory extends $Supplier<$ConfigMachineSettings> {
"get"(): $ConfigMachineSettings
}

export namespace $MBDMachineDefinition$ConfigMachineSettingsFactory {
const probejs$$marker: never
}
export abstract class $MBDMachineDefinition$ConfigMachineSettingsFactory$$Static implements $MBDMachineDefinition$ConfigMachineSettingsFactory {
}
}

declare module "com.lowdragmc.mbd2.api.recipe.event.TransferProxyRecipeEvent" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $MBDRecipeType$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipeType"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $MBDRecipe, $MBDRecipe$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipe"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Recipe, $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $RecipeTypeEvent } from "com.lowdragmc.mbd2.api.recipe.event.RecipeTypeEvent"
import { $RecipeType, $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"

export class $TransferProxyRecipeEvent extends $RecipeTypeEvent {
readonly "proxyRecipe": $Recipe<any>
readonly "proxyRecipeId": $ResourceLocation
readonly "proxyType": $RecipeType<any>
readonly "proxyTypeId": $ResourceLocation

constructor(mBDRecipeType0: $MBDRecipeType$$Type, resourceLocation1: $ResourceLocation$$Type, recipeType2: $RecipeType$$Type<any>, resourceLocation3: $ResourceLocation$$Type, recipe4: $Recipe$$Type<any>, mBDRecipe5: $MBDRecipe$$Type)
constructor()

public "getChatComponent"(): $Component
public "getMbdRecipe"(): $MBDRecipe
public "getProxyRecipe"(): $Recipe<any>
public "getProxyRecipeId"(): $ResourceLocation
public "getProxyType"(): $RecipeType<any>
public "getProxyTypeId"(): $ResourceLocation
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
get "mbdRecipe"(): $MBDRecipe
set "mbdRecipe"(value: $MBDRecipe$$Type)
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.common.trait.ITrait" {
import { $TraitDefinition } from "com.lowdragmc.mbd2.common.trait.TraitDefinition"
import { $List, $List$$Type } from "java.util.List"
import { $IRecipeHandlerTrait } from "com.lowdragmc.mbd2.api.capability.recipe.IRecipeHandlerTrait"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ICapabilityProviderTrait } from "com.lowdragmc.mbd2.common.trait.ICapabilityProviderTrait"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MBDMachine } from "com.lowdragmc.mbd2.common.machine.MBDMachine"

export interface $ITrait {
"clientTick"(): void
"getCapabilityProviderTraits"(): $List<$ICapabilityProviderTrait<any>>
"getDefinition"(): $TraitDefinition
"getMachine"(): $MBDMachine
"getRecipeHandlerTraits"(): $List<$IRecipeHandlerTrait<any>>
"onChunkUnloaded"(): void
"onLoadingTraitInPreview"(): void
"onMachineDrop"(entity0: $Entity$$Type, list1: $List$$Type<$ItemStack$$Type>): void
"onMachineLoad"(): void
"onMachineRemoved"(): void
"onMachineUnLoad"(): void
"onNeighborChanged"(block0: $Block$$Type, blockPos1: $BlockPos$$Type, boolean2: boolean): void
"serverTick"(): void
get "capabilityProviderTraits"(): $List<$ICapabilityProviderTrait<any>>
get "definition"(): $TraitDefinition
get "machine"(): $MBDMachine
get "recipeHandlerTraits"(): $List<$IRecipeHandlerTrait<any>>
}

export namespace $ITrait {
const probejs$$marker: never
}
export abstract class $ITrait$$Static implements $ITrait {
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.ConfigMachineSettings$ConfigMachineSettingsBuilder" {
import { $TraitDefinition$$Type } from "com.lowdragmc.mbd2.common.trait.TraitDefinition"
import { $ConfigMachineSettings } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigMachineSettings"
import { $Collection$$Type } from "java.util.Collection"
import { $ConfigMachineSettings$SignalConnection$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigMachineSettings$SignalConnection"

export class $ConfigMachineSettings$ConfigMachineSettingsBuilder {
public "build"(): $ConfigMachineSettings
public "clearTraitDefinitions"(): $ConfigMachineSettings$ConfigMachineSettingsBuilder
public "dropMachineItem"(boolean0: boolean): $ConfigMachineSettings$ConfigMachineSettingsBuilder
public "hasUI"(boolean0: boolean): $ConfigMachineSettings$ConfigMachineSettingsBuilder
public "machineLevel"(int0: integer): $ConfigMachineSettings$ConfigMachineSettingsBuilder
public "signalConnection"(signalConnection0: $ConfigMachineSettings$SignalConnection$$Type): $ConfigMachineSettings$ConfigMachineSettingsBuilder
public "traitDefinition"(traitDefinition0: $TraitDefinition$$Type): $ConfigMachineSettings$ConfigMachineSettingsBuilder
public "traitDefinitions"(collection0: $Collection$$Type<$TraitDefinition$$Type>): $ConfigMachineSettings$ConfigMachineSettingsBuilder
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.toggle.ToggleAABB" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $AABB, $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $Component } from "net.minecraft.network.chat.Component"
import { $ToggleObject } from "com.lowdragmc.mbd2.common.machine.definition.config.toggle.ToggleObject"

export class $ToggleAABB extends $ToggleObject<$AABB> {
constructor()
constructor(boolean0: boolean)
constructor(aABB0: $AABB$$Type)
constructor(aABB0: $AABB$$Type, boolean1: boolean)

public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
public "setValue"(aABB0: $AABB$$Type): void
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
set "value"(value: $AABB$$Type)
}
}

declare module "com.lowdragmc.mbd2.common.event.MBDRegistryEvent$TraitType" {
import { $TraitDefinition$$Type } from "com.lowdragmc.mbd2.common.trait.TraitDefinition"
import { $MBDRegistryEvent } from "com.lowdragmc.mbd2.common.event.MBDRegistryEvent"
import { $Class$$Type } from "java.lang.Class"

export class $MBDRegistryEvent$TraitType extends $MBDRegistryEvent {
constructor()

public "register"(class0: $Class$$Type<$TraitDefinition$$Type>): void
}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineRecipeStatusChangedEventJS" {
import { $MachineRecipeStatusChangedEvent, $MachineRecipeStatusChangedEvent$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineRecipeStatusChangedEvent"
import { $MBDMachineEvents$MachineEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineEventJS"

export class $MBDMachineEvents$MachineRecipeStatusChangedEventJS extends $MBDMachineEvents$MachineEventJS<$MachineRecipeStatusChangedEvent> {
constructor(machineRecipeStatusChangedEvent0: $MachineRecipeStatusChangedEvent$$Type)

}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.toggle.ToggleObject" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IToggleConfigurable } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IToggleConfigurable"

export class $ToggleObject<T = any> implements $IToggleConfigurable {
constructor()

public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "getValue"(): T
public "group"(): string
public "isEnable"(): boolean
public "isLDLRegister"(): boolean
public "name"(): string
public static "of"<T>(boolean0: boolean, t1: T): $ToggleObject<T>
public static "ofDisabled"<T>(t0: T): $ToggleObject<T>
public static "ofDisabled"<T>(): $ToggleObject<T>
public "setEnable"(boolean0: boolean): void
public "setValue"(t0: T): void
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "value"(): T
get "enable"(): boolean
get "lDLRegister"(): boolean
set "enable"(value: boolean)
set "value"(value: T)
}
}

declare module "com.lowdragmc.mbd2.api.recipe.RecipeLogic" {
import { $IFieldUpdateListener$$Type } from "com.lowdragmc.lowdraglib.syncdata.IFieldUpdateListener"
import { $MBDRecipe, $MBDRecipe$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipe"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $FieldManagedStorage } from "com.lowdragmc.lowdraglib.syncdata.field.FieldManagedStorage"
import { $RecipeLogic$Status, $RecipeLogic$Status$$Type } from "com.lowdragmc.mbd2.api.recipe.RecipeLogic$Status"
import { $IEnhancedManaged } from "com.lowdragmc.lowdraglib.syncdata.IEnhancedManaged"
import { $List, $List$$Type } from "java.util.List"
import { $RecipeManager } from "net.minecraft.world.item.crafting.RecipeManager"
import { $MBDRecipe$ActionResult } from "com.lowdragmc.mbd2.api.recipe.MBDRecipe$ActionResult"
import { $IMachine, $IMachine$$Type } from "com.lowdragmc.mbd2.api.machine.IMachine"
import { $IRef$$Type } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"
import { $ManagedFieldHolder } from "com.lowdragmc.lowdraglib.syncdata.field.ManagedFieldHolder"
import { $ISubscription } from "com.lowdragmc.lowdraglib.syncdata.ISubscription"

export class $RecipeLogic implements $IEnhancedManaged {
static readonly "MANAGED_FIELD_HOLDER": $ManagedFieldHolder
readonly "machine": $IMachine

constructor(iMachine0: $IMachine$$Type)

public "addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$$Type<T>): $ISubscription
public "findAndHandleRecipe"(): void
public "getDuration"(): integer
public "getFieldHolder"(): $ManagedFieldHolder
public "getFuelMaxTime"(): integer
public "getFuelProgressPercent"(): double
public "getFuelTime"(): integer
public "getLastFuelRecipe"(): $MBDRecipe
public "getLastOriginRecipe"(): $MBDRecipe
public "getLastRecipe"(): $MBDRecipe
public "getMachine"(): $IMachine
public "getMaxProgress"(): integer
public "getProgress"(): integer
public "getProgressPercent"(): double
public "getRecipeManager"(): $RecipeManager
public "getStatus"(): $RecipeLogic$Status
public "getSyncStorage"(): $FieldManagedStorage
public "getTotalContinuousRunningTime"(): long
public "getWaitingReason"(): $Component
public "handleFuelRecipe"(): boolean
public "handleRecipeWorking"(): void
public "handleTickRecipe"(mBDRecipe0: $MBDRecipe$$Type): $MBDRecipe$ActionResult
public "inValid"(): void
public "interruptRecipe"(): void
public "isActive"(): boolean
public "isConsumeInputsAfterWorking"(): boolean
/** @deprecated */
public "isHasNotEnoughEnergy"(): boolean
public "isIdle"(): boolean
public "isRecipeDirty"(): boolean
public "isSuspend"(): boolean
public "isWaiting"(): boolean
public "isWorking"(): boolean
public "markDirty"(name: string): void
public "markLastRecipeDirty"(): void
public "needFuel"(): boolean
public "onChanged"(): void
public "onPersistedChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "onRecipeFinish"(): void
public "onSyncChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "resetRecipeLogic"(): void
public "scheduleRender"(fieldName: string, newValue: any, oldValue: any): void
public "scheduleRenderUpdate"(): void
public "serverTick"(): void
public "setConsumeInputsAfterWorking"(boolean0: boolean): void
public "setDuration"(int0: integer): void
public "setFuelMaxTime"(int0: integer): void
public "setFuelTime"(int0: integer): void
public "setLastFuelRecipe"(mBDRecipe0: $MBDRecipe$$Type): void
public "setLastRecipe"(mBDRecipe0: $MBDRecipe$$Type): void
public "setProgress"(int0: integer): void
public "setStatus"(status0: $RecipeLogic$Status$$Type): void
public "setTotalContinuousRunningTime"(long0: long): void
public "setWaiting"(component0: $Component$$Type): void
public "setWorkingEnabled"(boolean0: boolean): void
public "setupRecipe"(mBDRecipe0: $MBDRecipe$$Type): void
get "lastFailedMatches"(): $List<$MBDRecipe>
set "lastFailedMatches"(value: $List$$Type<$MBDRecipe$$Type>)
get "duration"(): integer
get "fieldHolder"(): $ManagedFieldHolder
get "fuelMaxTime"(): integer
get "fuelProgressPercent"(): double
get "fuelTime"(): integer
get "lastFuelRecipe"(): $MBDRecipe
get "lastOriginRecipe"(): $MBDRecipe
get "lastRecipe"(): $MBDRecipe
get "maxProgress"(): integer
get "progress"(): integer
get "progressPercent"(): double
get "recipeManager"(): $RecipeManager
get "status"(): $RecipeLogic$Status
get "syncStorage"(): $FieldManagedStorage
get "totalContinuousRunningTime"(): long
get "waitingReason"(): $Component
get "active"(): boolean
get "consumeInputsAfterWorking"(): boolean
get "hasNotEnoughEnergy"(): boolean
get "idle"(): boolean
get "recipeDirty"(): boolean
get "suspend"(): boolean
get "waiting"(): boolean
get "working"(): boolean
set "consumeInputsAfterWorking"(value: boolean)
set "duration"(value: integer)
set "fuelMaxTime"(value: integer)
set "fuelTime"(value: integer)
set "lastFuelRecipe"(value: $MBDRecipe$$Type)
set "lastRecipe"(value: $MBDRecipe$$Type)
set "progress"(value: integer)
set "status"(value: $RecipeLogic$Status$$Type)
set "totalContinuousRunningTime"(value: long)
set "waiting"(value: $Component$$Type)
set "workingEnabled"(value: boolean)
set "upRecipe"(value: $MBDRecipe$$Type)
}
}

declare module "com.lowdragmc.mbd2.integration.geckolib.AnimationStage" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $ITagSerializable } from "com.lowdragmc.lowdraglib.syncdata.ITagSerializable"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IConfigurable } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurable"
import { $AnimationStage$LoopType, $AnimationStage$LoopType$$Type } from "com.lowdragmc.mbd2.integration.geckolib.AnimationStage$LoopType"

export class $AnimationStage implements $IConfigurable, $ITagSerializable<$CompoundTag> {
static readonly "WAIT": string

constructor()

public "buildConfigurator"(configuratorGroup0: $ConfiguratorGroup$$Type): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getAdditionalTicks"(): integer
public "getAnimationName"(): string
public "getChatComponent"(): $Component
public "getLoopType"(): $AnimationStage$LoopType
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "isWait"(): boolean
public "name"(): string
public "serializeNBT"(): $CompoundTag
public "setAdditionalTicks"(int0: integer): $AnimationStage
public "setAnimationName"(string0: string): $AnimationStage
public "setLoopType"(loopType0: $AnimationStage$LoopType$$Type): $AnimationStage
public "setWait"(boolean0: boolean): $AnimationStage
get "additionalTicks"(): integer
get "animationName"(): string
get "chatComponent"(): $Component
get "loopType"(): $AnimationStage$LoopType
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
get "wait"(): boolean
set "additionalTicks"(value: integer)
set "animationName"(value: string)
set "loopType"(value: $AnimationStage$LoopType$$Type)
set "wait"(value: boolean)
}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineBeforeRecipeWorkingEventJS" {
import { $MachineBeforeRecipeWorkingEvent, $MachineBeforeRecipeWorkingEvent$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineBeforeRecipeWorkingEvent"
import { $MBDMachineEvents$MachineEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineEventJS"

export class $MBDMachineEvents$MachineBeforeRecipeWorkingEventJS extends $MBDMachineEvents$MachineEventJS<$MachineBeforeRecipeWorkingEvent> {
constructor(machineBeforeRecipeWorkingEvent0: $MachineBeforeRecipeWorkingEvent$$Type)

}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineDropsEventJS" {
import { $MachineDropsEvent, $MachineDropsEvent$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineDropsEvent"
import { $MBDMachineEvents$MachineEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineEventJS"

export class $MBDMachineEvents$MachineDropsEventJS extends $MBDMachineEvents$MachineEventJS<$MachineDropsEvent> {
constructor(machineDropsEvent0: $MachineDropsEvent$$Type)

}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineFuelRecipeModifyEvent" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $MBDRecipe, $MBDRecipe$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipe"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MachineEvent } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"

export class $MachineFuelRecipeModifyEvent extends $MachineEvent {
constructor(mBDMachine0: $MBDMachine$$Type, mBDRecipe1: $MBDRecipe$$Type)
constructor()

public "getChatComponent"(): $Component
public "getRecipe"(): $MBDRecipe
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
public "setRecipe"(mBDRecipe0: $MBDRecipe$$Type): void
get "recipe"(): $MBDRecipe
set "recipe"(value: $MBDRecipe$$Type)
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.integration.geckolib.GeckolibRendererModel" {
import { $GeckolibRenderer$$Type } from "com.lowdragmc.mbd2.integration.geckolib.GeckolibRenderer"
import { $AnimationState$$Type } from "software.bernie.geckolib.core.animation.AnimationState"
import { $GeoAnimatable, $GeoAnimatable$$Type } from "software.bernie.geckolib.core.animatable.GeoAnimatable"
import { $GeoModel } from "software.bernie.geckolib.model.GeoModel"

export class $GeckolibRendererModel extends $GeoModel<$GeoAnimatable> {
constructor(geckolibRenderer0: $GeckolibRenderer$$Type)

public "setCustomAnimations"(geoAnimatable0: $GeoAnimatable$$Type, long1: long, animationState2: $AnimationState$$Type<$GeoAnimatable$$Type>): void
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineNeighborChangedEvent" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Component } from "net.minecraft.network.chat.Component"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $MachineEvent } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"

export class $MachineNeighborChangedEvent extends $MachineEvent {
readonly "block": $Block
readonly "fromPos": $BlockPos

constructor(mBDMachine0: $MBDMachine$$Type, block1: $Block$$Type, blockPos2: $BlockPos$$Type)
constructor()

public "getBlock"(): $Block
public "getChatComponent"(): $Component
public "getFromPos"(): $BlockPos
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.common.item.MBDGadgetsItem" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $HeldItemUIFactory$IHeldItemUIHolder } from "com.lowdragmc.lowdraglib.gui.factory.HeldItemUIFactory$IHeldItemUIHolder"
import { $ICapabilityProvider } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $Holder } from "net.minecraft.core.Holder"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Map } from "java.util.Map"
import { $ModularUI } from "com.lowdragmc.lowdraglib.gui.modular.ModularUI"
import { $HeldItemUIFactory$HeldItemHolder$$Type } from "com.lowdragmc.lowdraglib.gui.factory.HeldItemUIFactory$HeldItemHolder"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $FoodProperties } from "net.minecraft.world.food.FoodProperties"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $UUID$$Type } from "java.util.UUID"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $Attribute, $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $EnderMan$$Type } from "net.minecraft.world.entity.monster.EnderMan"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $MutableToolTier$$Type } from "dev.latvian.mods.kubejs.item.MutableToolTier"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $FoodBuilder$$Type } from "dev.latvian.mods.kubejs.item.FoodBuilder"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $MBDGadgetsItem extends $Item implements $HeldItemUIFactory$IHeldItemUIHolder {
constructor()

public "addAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type, name: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "arch$holder"(): $Holder<$Item>
public "arch$registryName"(): $ResourceLocation
public "canApplyAtEnchantingTable"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
public "canContinueUsing"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "canDisableShield"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "canElytraFly"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "canEquip"(itemStack0: $ItemStack$$Type, equipmentSlot1: $EquipmentSlot$$Type, entity2: $Entity$$Type): boolean
public "canGrindstoneRepair"(itemStack0: $ItemStack$$Type): boolean
public "canPerformAction"(itemStack0: $ItemStack$$Type, toolAction1: $ToolAction$$Type): boolean
public "canWalkOnPowderedSnow"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "createEntity"(level0: $Level$$Type, entity1: $Entity$$Type, itemStack2: $ItemStack$$Type): $Entity
public "createUI"(player0: $Player$$Type, heldItemHolder1: $HeldItemUIFactory$HeldItemHolder$$Type): $ModularUI
public "damageItem"<T extends $LivingEntity>(itemStack0: $ItemStack$$Type, int1: integer, t2: T, consumer3: $Consumer$$Type<T>): integer
public "doesSneakBypassUse"(itemStack0: $ItemStack$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "elytraFlightTick"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): boolean
public static "get"(item: $Item$$Type): $ResourceLocation
public static "get"(block: $Block$$Type): $ResourceLocation
public static "get"(state: $BlockState$$Type): $ResourceLocation
public static "get"(entity: $Entity$$Type): $ResourceLocation
public static "get"(stack: $ItemStack$$Type): $ResourceLocation
public static "get"(type: $EntityType$$Type<any>): $ResourceLocation
public "getAllEnchantments"(itemStack0: $ItemStack$$Type): $Map<$Enchantment, integer>
public "getArmorTexture"(itemStack0: $ItemStack$$Type, entity1: $Entity$$Type, equipmentSlot2: $EquipmentSlot$$Type, string3: string): string
public "getAttributeModifiers"(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
public "getAttributes"(attribute: $Attribute$$Type): $List<$AttributeModifier>
public "getBurnTime"(itemStack0: $ItemStack$$Type, recipeType1: $RecipeType$$Type<any>): integer
public "getCraftingRemainingItem"(itemStack0: $ItemStack$$Type): $ItemStack
public "getCreativeTab"(): string
public "getCreatorModId"(itemStack0: $ItemStack$$Type): string
public "getDamage"(itemStack0: $ItemStack$$Type): integer
public "getDefaultTooltipHideFlags"(itemStack0: $ItemStack$$Type): integer
public "getDigSpeed"(): float
public "getEnchantmentLevel"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): integer
public "getEnchantmentValue"(itemStack0: $ItemStack$$Type): integer
public "getEntityLifespan"(itemStack0: $ItemStack$$Type, level1: $Level$$Type): integer
public "getEquipmentSlot"(itemStack0: $ItemStack$$Type): $EquipmentSlot
public "getFoodProperties"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): $FoodProperties
public "getHighlightTip"(itemStack0: $ItemStack$$Type, component1: $Component$$Type): $Component
public "getMaxDamage"(itemStack0: $ItemStack$$Type): integer
public "getMaxStackSize"(itemStack0: $ItemStack$$Type): integer
public "getMod"(): string
public "getRecipe"(itemStack0: $ItemStack$$Type): $ResourceLocation
public "getShareTag"(itemStack0: $ItemStack$$Type): $CompoundTag
public "getSweepHitBox"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): $AABB
public "getXpRepairRatio"(itemStack0: $ItemStack$$Type): float
public "hasCraftingRemainingItem"(itemStack0: $ItemStack$$Type): boolean
public "hasCustomEntity"(itemStack0: $ItemStack$$Type): boolean
public "initCapabilities"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): $ICapabilityProvider
public "isBookEnchantable"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "isCorrectToolForDrops"(itemStack0: $ItemStack$$Type, blockState1: $BlockState$$Type): boolean
public "isDamageable"(itemStack0: $ItemStack$$Type): boolean
public "isDamaged"(itemStack0: $ItemStack$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isEnderMask"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, enderMan2: $EnderMan$$Type): boolean
public "isMultiblockBuilder"(itemStack0: $ItemStack$$Type): boolean
public "isMultiblockDebugger"(itemStack0: $ItemStack$$Type): boolean
public "isNotReplaceableByPickAction"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer): boolean
public "isPiglinCurrency"(itemStack0: $ItemStack$$Type): boolean
public "isRecipeDebugger"(itemStack0: $ItemStack$$Type): boolean
public "makesPiglinsNeutral"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
/** @deprecated */
public "onArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type): void
public "onBlockStartBreak"(itemStack0: $ItemStack$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
public "onDestroyed"(itemEntity0: $ItemEntity$$Type, damageSource1: $DamageSource$$Type): void
public "onDroppedByPlayer"(itemStack0: $ItemStack$$Type, player1: $Player$$Type): boolean
public "onEntityItemUpdate"(itemStack0: $ItemStack$$Type, itemEntity1: $ItemEntity$$Type): boolean
public "onEntitySwing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "onHorseArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, mob2: $Mob$$Type): void
public "onInventoryTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type, int3: integer, int4: integer): void
public "onItemUseFirst"(itemStack0: $ItemStack$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
public "onLeftClickEntity"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): boolean
public "onStopUsing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): void
public "readShareTag"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): void
public "removeAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type): void
public "setArmorKnockbackResistance"(knockbackResistance: double): void
public "setArmorProtection"(armorProtection: double): void
public "setArmorToughness"(armorToughness: double): void
public "setAttackDamage"(attackDamage: double): void
public "setAttackSpeed"(attackSpeed: double): void
public "setDamage"(itemStack0: $ItemStack$$Type, int1: integer): void
public "setDigSpeed"(speed: float): void
public "setFoodProperties"(consumer: $Consumer$$Type<$FoodBuilder$$Type>): void
public "setRecipe"(itemStack0: $ItemStack$$Type, resourceLocation1: $ResourceLocation$$Type): void
public "setTier"(c: $Consumer$$Type<$MutableToolTier$$Type>): void
public "shouldCauseBlockBreakReset"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "shouldCauseReequipAnimation"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean): boolean
get "creativeTab"(): string
get "digSpeed"(): float
get "mod"(): string
set "armorKnockbackResistance"(value: double)
set "armorProtection"(value: double)
set "armorToughness"(value: double)
set "attackDamage"(value: double)
set "attackSpeed"(value: double)
set "digSpeed"(value: float)
set "foodProperties"(value: $Consumer$$Type<$FoodBuilder$$Type>)
set "tier"(value: $Consumer$$Type<$MutableToolTier$$Type>)
}
}

declare module "com.lowdragmc.mbd2.integration.create.machine.CreateMachineState$Builder" {
import { $CreateMachineState } from "com.lowdragmc.mbd2.integration.create.machine.CreateMachineState"
import { $IModelRenderer$$Type } from "com.lowdragmc.lowdraglib.client.renderer.impl.IModelRenderer"
import { $MachineState$Builder } from "com.lowdragmc.mbd2.common.machine.definition.config.MachineState$Builder"

export class $CreateMachineState$Builder extends $MachineState$Builder<$CreateMachineState> {
constructor()

public "rotationRenderer"(iModelRenderer0: $IModelRenderer$$Type): $CreateMachineState$Builder
}
}

declare module "com.lowdragmc.mbd2.api.recipe.content.ContentModifier" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IConfigurable } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurable"

export class $ContentModifier implements $IConfigurable {
static readonly "IDENTITY": $ContentModifier

constructor(double0: double, double1: double)

public static "addition"(double0: double): $ContentModifier
public "apply"(number0: number): number
public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "getAddition"(): double
public "getChatComponent"(): $Component
public "getMultiplier"(): double
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public static "identity"(): $ContentModifier
public "isIdentity"(): boolean
public "isLDLRegister"(): boolean
public "merge"(contentModifier0: $ContentModifier$$Type): $ContentModifier
public static "multiplier"(double0: double): $ContentModifier
public "name"(): string
public static "of"(double0: double, double1: double): $ContentModifier
public "setAddition"(double0: double): void
public "setMultiplier"(double0: double): void
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.toggle.ToggleLightValue" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Component } from "net.minecraft.network.chat.Component"
import { $ToggleObject } from "com.lowdragmc.mbd2.common.machine.definition.config.toggle.ToggleObject"

export class $ToggleLightValue extends $ToggleObject<integer> {
constructor()
constructor(boolean0: boolean)
constructor(int0: integer)
constructor(int0: integer, boolean1: boolean)

public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
public "setValue"(integer0: integer): void
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
set "value"(value: integer)
}
}

declare module "com.lowdragmc.mbd2.integration.geckolib.AnimationStage$LoopType" {
import { $Enum } from "java.lang.Enum"
import { $Animation$LoopType } from "software.bernie.geckolib.core.animation.Animation$LoopType"

export class $AnimationStage$LoopType extends $Enum<$AnimationStage$LoopType> {
static readonly "DEFAULT": $AnimationStage$LoopType
static readonly "HOLD_ON_LAST_FRAME": $AnimationStage$LoopType
static readonly "LOOP": $AnimationStage$LoopType
static readonly "PLAY_ONCE": $AnimationStage$LoopType
readonly "type": $Animation$LoopType

public static "valueOf"(string0: string): $AnimationStage$LoopType
public static "values"(): $AnimationStage$LoopType[]
}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDRecipeTypeRegistryEventJS" {
import { $MBDRecipeType } from "com.lowdragmc.mbd2.api.recipe.MBDRecipeType"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $StartupEventJS } from "dev.latvian.mods.kubejs.event.StartupEventJS"

export class $MBDRecipeTypeRegistryEventJS extends $StartupEventJS {
constructor()

public "createRecipeType"(resourceLocation0: $ResourceLocation$$Type): $MBDRecipeType
public "getRecipeType"(resourceLocation0: $ResourceLocation$$Type): $MBDRecipeType
public "removeRecipeType"(resourceLocation0: $ResourceLocation$$Type): void
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineUseCatalystEvent" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MachineEvent } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $MachineUseCatalystEvent extends $MachineEvent {
readonly "catalyst": $ItemStack
readonly "hand": $InteractionHand
readonly "player": $Player

constructor(mBDMachine0: $MBDMachine$$Type, itemStack1: $ItemStack$$Type, player2: $Player$$Type, interactionHand3: $InteractionHand$$Type)
constructor()

public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.ConfigItemProperties" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $IPersistedSerializable } from "com.lowdragmc.lowdraglib.syncdata.IPersistedSerializable"
import { $Item$Properties, $Item$Properties$$Type } from "net.minecraft.world.item.Item$Properties"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $ToggleRenderer } from "com.lowdragmc.mbd2.common.machine.definition.config.toggle.ToggleRenderer"
import { $List } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $IConfigurable } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurable"
import { $ToggleCreativeTab } from "com.lowdragmc.mbd2.common.machine.definition.config.toggle.ToggleCreativeTab"
import { $ConfigItemProperties$ConfigItemPropertiesBuilder } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigItemProperties$ConfigItemPropertiesBuilder"
import { $Rarity } from "net.minecraft.world.item.Rarity"

export class $ConfigItemProperties implements $IConfigurable, $IPersistedSerializable {
public "apply"(properties0: $Item$Properties$$Type): $Item$Properties
public "buildConfigurator"(configuratorGroup0: $ConfiguratorGroup$$Type): void
public static "builder"(): $ConfigItemProperties$ConfigItemPropertiesBuilder
public "creativeTab"(): $ToggleCreativeTab
public "deserializeNBT"(tag: $CompoundTag$$Type): void
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isGui3d"(): boolean
public "isLDLRegister"(): boolean
public "itemTooltips"(): $List<$Component>
public "maxStackSize"(): integer
public "name"(): string
public "rarity"(): $Rarity
public "renderer"(): $ToggleRenderer
public "useBlockLight"(): boolean
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "gui3d"(): boolean
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.api.recipe.MBDRecipe" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $RecipeLogic$$Type } from "com.lowdragmc.mbd2.api.recipe.RecipeLogic"
import { $IO$$Type } from "com.lowdragmc.mbd2.api.capability.recipe.IO"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $Content, $Content$$Type } from "com.lowdragmc.mbd2.api.recipe.content.Content"
import { $IRecipeCapabilityHolder$$Type } from "com.lowdragmc.mbd2.api.capability.recipe.IRecipeCapabilityHolder"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $RecipeCondition, $RecipeCondition$$Type } from "com.lowdragmc.mbd2.api.recipe.RecipeCondition"
import { $MBDRecipe$ActionResult } from "com.lowdragmc.mbd2.api.recipe.MBDRecipe$ActionResult"
import { $Map, $Map$$Type } from "java.util.Map"
import { $RecipeCapability, $RecipeCapability$$Type } from "com.lowdragmc.mbd2.api.capability.recipe.RecipeCapability"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ContentModifier$$Type } from "com.lowdragmc.mbd2.api.recipe.content.ContentModifier"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $Pair } from "com.mojang.datafixers.util.Pair"
import { $MBDRecipeType, $MBDRecipeType$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipeType"
import { $List, $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Recipe } from "net.minecraft.world.item.crafting.Recipe"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $MBDRecipe implements $Recipe<$Container> {
readonly "conditions": $List<$RecipeCondition>
readonly "id": $ResourceLocation
readonly "inputs": $Map<$RecipeCapability<any>, $List<$Content>>
readonly "outputs": $Map<$RecipeCapability<any>, $List<$Content>>

constructor(mBDRecipeType0: $MBDRecipeType$$Type, resourceLocation1: $ResourceLocation$$Type, map2: $Map$$Type<$RecipeCapability$$Type<any>, $List$$Type<$Content$$Type>>, map3: $Map$$Type<$RecipeCapability$$Type<any>, $List$$Type<$Content$$Type>>, list4: $List$$Type<$RecipeCondition$$Type>, compoundTag5: $CompoundTag$$Type, int6: integer, boolean7: boolean, boolean8: boolean, int9: integer)

public static "accurateParallel"(iRecipeCapabilityHolder0: $IRecipeCapabilityHolder$$Type, mBDRecipe1: $MBDRecipe$$Type, int2: integer, boolean3: boolean): $Pair<$MBDRecipe, integer>
public "assemble"(container0: $Container$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public "checkConditions"(recipeLogic0: $RecipeLogic$$Type): $MBDRecipe$ActionResult
public "copy"(contentModifier0: $ContentModifier$$Type, boolean1: boolean, iO2: $IO$$Type): $MBDRecipe
public "copy"(resourceLocation0: $ResourceLocation$$Type): $MBDRecipe
public "copy"(): $MBDRecipe
public "copy"(contentModifier0: $ContentModifier$$Type): $MBDRecipe
public "copy"(contentModifier0: $ContentModifier$$Type, boolean1: boolean): $MBDRecipe
public "copyContents"(map0: $Map$$Type<$RecipeCapability$$Type<any>, $List$$Type<$Content$$Type>>, boolean1: boolean, contentModifier2: $ContentModifier$$Type): $Map<$RecipeCapability<any>, $List<$Content>>
public "deepCopied"(resourceLocation0: $ResourceLocation$$Type): $MBDRecipe
public "getGroup"(): string
public "getId"(): $ResourceLocation
public "getIngredients"(): $NonNullList<$Ingredient>
public "getInputContents"(recipeCapability0: $RecipeCapability$$Type<any>): $List<$Content>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getOutputContents"(recipeCapability0: $RecipeCapability$$Type<any>): $List<$Content>
public "getRemainingItems"(container0: $Container$$Type): $NonNullList<$ItemStack>
public "getResultItem"(registryAccess0: $RegistryAccess$$Type): $ItemStack
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "handlePost"(map0: $Map$$Type<$RecipeCapability$$Type<any>, $List$$Type<$Content$$Type>>, iRecipeCapabilityHolder1: $IRecipeCapabilityHolder$$Type, iO2: $IO$$Type): void
public "handlePre"(map0: $Map$$Type<$RecipeCapability$$Type<any>, $List$$Type<$Content$$Type>>, iRecipeCapabilityHolder1: $IRecipeCapabilityHolder$$Type, iO2: $IO$$Type): void
public "handleRecipe"(boolean0: boolean, iO1: $IO$$Type, iRecipeCapabilityHolder2: $IRecipeCapabilityHolder$$Type, map3: $Map$$Type<$RecipeCapability$$Type<any>, $List$$Type<$Content$$Type>>): boolean
public "handleRecipeIO"(iO0: $IO$$Type, iRecipeCapabilityHolder1: $IRecipeCapabilityHolder$$Type): boolean
public "handleTickRecipeIO"(iO0: $IO$$Type, iRecipeCapabilityHolder1: $IRecipeCapabilityHolder$$Type): boolean
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "hasTick"(): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "matchRecipe"(iRecipeCapabilityHolder0: $IRecipeCapabilityHolder$$Type): $MBDRecipe$ActionResult
public "matchRecipe"(boolean0: boolean, iO1: $IO$$Type, iRecipeCapabilityHolder2: $IRecipeCapabilityHolder$$Type, map3: $Map$$Type<$RecipeCapability$$Type<any>, $List$$Type<$Content$$Type>>, boolean4: boolean): $MBDRecipe$ActionResult
public "matchTickRecipe"(iRecipeCapabilityHolder0: $IRecipeCapabilityHolder$$Type): $MBDRecipe$ActionResult
public "matches"(container0: $Container$$Type, level1: $Level$$Type): boolean
public "postWorking"(iRecipeCapabilityHolder0: $IRecipeCapabilityHolder$$Type): void
public "preWorking"(iRecipeCapabilityHolder0: $IRecipeCapabilityHolder$$Type): void
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
public "toBuilder"(): any
get "data"(): $CompoundTag
set "data"(value: $CompoundTag$$Type)
get "duration"(): integer
set "duration"(value: integer)
get "isFuel"(): boolean
set "isFuel"(value: boolean)
get "isXEIHidden"(): boolean
set "isXEIHidden"(value: boolean)
get "priority"(): integer
set "priority"(value: integer)
get "recipeType"(): $MBDRecipeType
set "recipeType"(value: $MBDRecipeType$$Type)
get "group"(): string
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineFuelBurningFinishEventJS" {
import { $MBDMachineEvents$MachineEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineEventJS"
import { $MachineFuelBurningFinishEvent, $MachineFuelBurningFinishEvent$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineFuelBurningFinishEvent"

export class $MBDMachineEvents$MachineFuelBurningFinishEventJS extends $MBDMachineEvents$MachineEventJS<$MachineFuelBurningFinishEvent> {
constructor(machineFuelBurningFinishEvent0: $MachineFuelBurningFinishEvent$$Type)

}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.ConfigBlockProperties$RenderTypes" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $IPersistedSerializable } from "com.lowdragmc.lowdraglib.syncdata.IPersistedSerializable"

export class $ConfigBlockProperties$RenderTypes implements $IPersistedSerializable {
constructor()

public "cutout"(boolean0: boolean): $ConfigBlockProperties$RenderTypes
public "cutout"(): boolean
public "cutoutMipped"(): boolean
public "cutoutMipped"(boolean0: boolean): $ConfigBlockProperties$RenderTypes
public "deserializeNBT"(tag: $CompoundTag$$Type): void
public "solid"(boolean0: boolean): $ConfigBlockProperties$RenderTypes
public "solid"(): boolean
public "translucent"(boolean0: boolean): $ConfigBlockProperties$RenderTypes
public "translucent"(): boolean
}
}

declare module "com.lowdragmc.mbd2.integration.geckolib.AnimatableMachine" {
import { $GeckolibRenderer, $GeckolibRenderer$$Type } from "com.lowdragmc.mbd2.integration.geckolib.GeckolibRenderer"
import { $AnimatableManager$ControllerRegistrar$$Type } from "software.bernie.geckolib.core.animation.AnimatableManager$ControllerRegistrar"
import { $AnimatableInstanceCache } from "software.bernie.geckolib.core.animatable.instance.AnimatableInstanceCache"
import { $GeoAnimatable } from "software.bernie.geckolib.core.animatable.GeoAnimatable"
import { $MBDMachine, $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"

export class $AnimatableMachine implements $GeoAnimatable {
constructor(mBDMachine0: $MBDMachine$$Type, geckolibRenderer1: $GeckolibRenderer$$Type)

public "animatableCacheOverride"(): $AnimatableInstanceCache
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "getBoneResetTime"(): double
public "getMachine"(): $MBDMachine
public "getRenderer"(): $GeckolibRenderer
public "getTick"(object0: any): double
public "registerControllers"(controllerRegistrar0: $AnimatableManager$ControllerRegistrar$$Type): void
public "shouldPlayAnimsWhileGamePaused"(): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "boneResetTime"(): double
get "machine"(): $MBDMachine
get "renderer"(): $GeckolibRenderer
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineStructureFormedEvent" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MachineEvent } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"

export class $MachineStructureFormedEvent extends $MachineEvent {
constructor(mBDMachine0: $MBDMachine$$Type)
constructor()

public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.ConfigMachineSettings" {
import { $TraitDefinition, $TraitDefinition$$Type } from "com.lowdragmc.mbd2.common.trait.TraitDefinition"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IPersistedSerializable } from "com.lowdragmc.lowdraglib.syncdata.IPersistedSerializable"
import { $IConfigurable } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurable"
import { $ConfigMachineSettings$ConfigMachineSettingsBuilder } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigMachineSettings$ConfigMachineSettingsBuilder"
import { $ConfigMachineSettings$SignalConnection } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigMachineSettings$SignalConnection"

export class $ConfigMachineSettings implements $IPersistedSerializable, $IConfigurable {
public "addTraitDefinition"(traitDefinition0: $TraitDefinition$$Type): void
public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public static "builder"(): $ConfigMachineSettings$ConfigMachineSettingsBuilder
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "dropMachineItem"(): boolean
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "hasUI"(): boolean
public "isLDLRegister"(): boolean
public "machineLevel"(): integer
public "name"(): string
public "removeTraitDefinition"(traitDefinition0: $TraitDefinition$$Type): void
public "serializeNBT"(): $CompoundTag
public "signalConnection"(): $ConfigMachineSettings$SignalConnection
public "traitDefinitions"(): $List<$TraitDefinition>
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.api.registry.MBDRegistry$RL" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $MBDRegistry } from "com.lowdragmc.mbd2.api.registry.MBDRegistry"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Spliterator } from "java.util.Spliterator"

export class $MBDRegistry$RL<V = any> extends $MBDRegistry<$ResourceLocation, V> {
constructor(resourceLocation0: $ResourceLocation$$Type)

public "codec"(): $Codec<V>
public "forEach"(consumer0: $Consumer$$Type<V>): void
public "loadFromNBT"(tag0: $Tag$$Type): V
public "readBuf"(friendlyByteBuf0: $FriendlyByteBuf$$Type): V
public "spliterator"(): $Spliterator<V>
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.ConfigMachineEvents" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $BaseGraph } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseGraph"
import { $MachineEventGraphProcessor } from "com.lowdragmc.mbd2.common.graphprocessor.MachineEventGraphProcessor"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IConfigurable } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurable"
import { $IPersistedSerializable } from "com.lowdragmc.lowdraglib.syncdata.IPersistedSerializable"
import { $Map } from "java.util.Map"
import { $Class } from "java.lang.Class"
import { $MachineEvent, $MachineEvent$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent"

export class $ConfigMachineEvents implements $IConfigurable, $IPersistedSerializable {
readonly "eventGraphs": $Map<$Class<$MachineEvent>, $BaseGraph>
readonly "machineEvents": $Map<string, $Class<$MachineEvent>>

constructor()

public "buildConfigurator"(configuratorGroup0: $ConfiguratorGroup$$Type): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getChatComponent"(): $Component
public "getEventGraphs"(): $Map<$Class<$MachineEvent>, $BaseGraph>
public "getMachineEvents"(): $Map<string, $Class<$MachineEvent>>
public "getProcessorCache"(): $Map<$Class<$MachineEvent>, $MachineEventGraphProcessor>
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
public "postGraphEvent"(machineEvent0: $MachineEvent$$Type): void
public "registerEventGroup"(string0: string): $ConfigMachineEvents
public "serializeNBT"(): $CompoundTag
get "chatComponent"(): $Component
get "processorCache"(): $Map<$Class<$MachineEvent>, $MachineEventGraphProcessor>
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.ConfigBlockProperties$BlockSound" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IPersistedSerializable } from "com.lowdragmc.lowdraglib.syncdata.IPersistedSerializable"
import { $Configurator } from "com.lowdragmc.lowdraglib.gui.editor.configurator.Configurator"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $ForgeSoundType } from "net.minecraftforge.common.util.ForgeSoundType"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $IConfigurable } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurable"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"

export class $ConfigBlockProperties$BlockSound implements $IPersistedSerializable, $IConfigurable {
constructor()

public "breakSound"(resourceLocation0: $ResourceLocation$$Type): $ConfigBlockProperties$BlockSound
public "breakSound"(): $ResourceLocation
public "breakSoundEvent"(): $SoundEvent
public "breakSoundEvent"(soundEvent0: $SoundEvent$$Type): $ConfigBlockProperties$BlockSound
public "buildConfigurator"(configuratorGroup0: $ConfiguratorGroup$$Type): void
/** Client only, do not use in server scripts */
public "createSoundConfigurator"(string0: string, consumer1: $Consumer$$Type<$ResourceLocation$$Type>, supplier2: $Supplier$$Type<$ResourceLocation>): $Configurator
public "createSoundType"(): $ForgeSoundType
public "deserializeNBT"(tag: $CompoundTag$$Type): void
public "fallSound"(resourceLocation0: $ResourceLocation$$Type): $ConfigBlockProperties$BlockSound
public "fallSound"(): $ResourceLocation
public "fallSoundEvent"(soundEvent0: $SoundEvent$$Type): $ConfigBlockProperties$BlockSound
public "fallSoundEvent"(): $SoundEvent
public "getBreakSoundEvent"(): $SoundEvent
public "getChatComponent"(): $Component
public "getFallSoundEvent"(): $SoundEvent
public "getHitSoundEvent"(): $SoundEvent
public "getPlaceSoundEvent"(): $SoundEvent
public "getRegisterUI"(): $LDLRegister
public "getStepSoundEvent"(): $SoundEvent
public "getTranslateKey"(): string
public "group"(): string
public "hitSound"(): $ResourceLocation
public "hitSound"(resourceLocation0: $ResourceLocation$$Type): $ConfigBlockProperties$BlockSound
public "hitSoundEvent"(): $SoundEvent
public "hitSoundEvent"(soundEvent0: $SoundEvent$$Type): $ConfigBlockProperties$BlockSound
public "isLDLRegister"(): boolean
public "name"(): string
public "pitchIn"(): float
public "pitchIn"(float0: float): $ConfigBlockProperties$BlockSound
public "placeSound"(): $ResourceLocation
public "placeSound"(resourceLocation0: $ResourceLocation$$Type): $ConfigBlockProperties$BlockSound
public "placeSoundEvent"(soundEvent0: $SoundEvent$$Type): $ConfigBlockProperties$BlockSound
public "placeSoundEvent"(): $SoundEvent
public "stepSound"(resourceLocation0: $ResourceLocation$$Type): $ConfigBlockProperties$BlockSound
public "stepSound"(): $ResourceLocation
public "stepSoundEvent"(): $SoundEvent
public "stepSoundEvent"(soundEvent0: $SoundEvent$$Type): $ConfigBlockProperties$BlockSound
public "volumeIn"(): float
public "volumeIn"(float0: float): $ConfigBlockProperties$BlockSound
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineRemovedEventJS" {
import { $MBDMachineEvents$MachineEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineEventJS"
import { $MachineRemovedEvent, $MachineRemovedEvent$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineRemovedEvent"

export class $MBDMachineEvents$MachineRemovedEventJS extends $MBDMachineEvents$MachineEventJS<$MachineRemovedEvent> {
constructor(machineRemovedEvent0: $MachineRemovedEvent$$Type)

}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.ConfigPartSettings$ConfigPartSettingsBuilder" {
import { $List$$Type } from "java.util.List"
import { $ConfigPartSettings } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigPartSettings"
import { $RecipeModifier$RecipeModifiers$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.RecipeModifier$RecipeModifiers"
import { $ConfigPartSettings$ProxyCapability$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigPartSettings$ProxyCapability"

export class $ConfigPartSettings$ConfigPartSettingsBuilder {
public "build"(): $ConfigPartSettings
public "canShare"(boolean0: boolean): $ConfigPartSettings$ConfigPartSettingsBuilder
public "enable"(boolean0: boolean): $ConfigPartSettings$ConfigPartSettingsBuilder
public "proxyControllerCapabilities"(list0: $List$$Type<$ConfigPartSettings$ProxyCapability$$Type>): $ConfigPartSettings$ConfigPartSettingsBuilder
public "recipeModifiers"(recipeModifiers0: $RecipeModifier$RecipeModifiers$$Type): $ConfigPartSettings$ConfigPartSettingsBuilder
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.MBDMachineDefinition" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $StateMachine } from "com.lowdragmc.mbd2.common.machine.definition.config.StateMachine"
import { $IMachineBlockEntity$$Type } from "com.lowdragmc.mbd2.api.blockentity.IMachineBlockEntity"
import { $BlockEntityRendererProvider } from "net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider"
import { $IPersistedSerializable } from "com.lowdragmc.lowdraglib.syncdata.IPersistedSerializable"
import { $MBDMachineDefinition$ConfigMachineSettingsFactory } from "com.lowdragmc.mbd2.common.machine.definition.MBDMachineDefinition$ConfigMachineSettingsFactory"
import { $Item } from "net.minecraft.world.item.Item"
import { $ConfigPartSettings } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigPartSettings"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $MBDMachineDefinition$ConfigPartSettingsFactory } from "com.lowdragmc.mbd2.common.machine.definition.MBDMachineDefinition$ConfigPartSettingsFactory"
import { $Deque$$Type } from "java.util.Deque"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $Function } from "java.util.function.Function"
import { $MBDMachineDefinition$Builder } from "com.lowdragmc.mbd2.common.machine.definition.MBDMachineDefinition$Builder"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $ConfigMachineSettings } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigMachineSettings"
import { $IConfigurable } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurable"
import { $WidgetGroup } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $ConfigItemProperties } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigItemProperties"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ConfigRecipeLogicSettings } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigRecipeLogicSettings"
import { $IRenderer } from "com.lowdragmc.lowdraglib.client.renderer.IRenderer"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $ConfigMachineEvents } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigMachineEvents"
import { $EntityRenderersEvent$RegisterRenderers$$Type } from "net.minecraftforge.client.event.EntityRenderersEvent$RegisterRenderers"
import { $File, $File$$Type } from "java.io.File"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $MachineState } from "com.lowdragmc.mbd2.common.machine.definition.config.MachineState"
import { $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockEntityType } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $RegisterEvent$$Type } from "net.minecraftforge.registries.RegisterEvent"
import { $MBDMachine } from "com.lowdragmc.mbd2.common.machine.MBDMachine"
import { $ConfigBlockProperties } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigBlockProperties"

export class $MBDMachineDefinition implements $IConfigurable, $IPersistedSerializable {
public "allowPartSettings"(): boolean
public "appendHoverText"(itemStack0: $ItemStack$$Type, list1: $List$$Type<$Component$$Type>): void
public "asStack"(int0: integer): $ItemStack
public "asStack"(): $ItemStack
public "block"(): $Block
public "blockEntityType"(): $BlockEntityType<any>
public "blockProperties"(): $ConfigBlockProperties
public "blockRenderer"(): $IRenderer
public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public static "builder"(): $MBDMachineDefinition$Builder
public static "clear"(): void
/** Client only, do not use in server scripts */
public "createBESRR"(): $BlockEntityRendererProvider<$BlockEntity>
public "createBlock"(): $Block
public "createBlockEntity"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type): $BlockEntity
/** Client only, do not use in server scripts */
public "createBlockRenderer"(): $IRenderer
public static "createDefault"(): $MBDMachineDefinition
public "createDefaultRootState"(): $MachineState
public "createItem"(block0: $Block$$Type): $Item
/** Client only, do not use in server scripts */
public "createItemRenderer"(): $IRenderer
public "createMachine"(iMachineBlockEntity0: $IMachineBlockEntity$$Type): $MBDMachine
public "createMachineEvents"(): $ConfigMachineEvents
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public static "get"(): $MBDMachineDefinition
public "getChatComponent"(): $Component
public "getDescriptionId"(): string
public "getRegisterUI"(): $LDLRegister
public "getState"(string0: string): $MachineState
public "getTranslateKey"(): string
public "group"(): string
public "id"(): $ResourceLocation
/** Client only, do not use in server scripts */
public "initRenderer"(registerRenderers0: $EntityRenderersEvent$RegisterRenderers$$Type): void
public "isCreatedFromProjectFile"(): boolean
public "isLDLRegister"(): boolean
public "item"(): $Item
public "itemProperties"(): $ConfigItemProperties
public "itemRenderer"(): $IRenderer
public "loadFactory"(): void
public "loadProductiveTag"(file0: $File$$Type, compoundTag1: $CompoundTag$$Type, deque2: $Deque$$Type<$Runnable$$Type>): $MBDMachineDefinition
public "machineEvents"(): $ConfigMachineEvents
public "machineSettings"(): $ConfigMachineSettings
public "machineSettingsFactory"(): $MBDMachineDefinition$ConfigMachineSettingsFactory
public "name"(): string
public "onRegistry"(registerEvent0: $RegisterEvent$$Type): void
public "partSettings"(): $ConfigPartSettings
public "partSettingsFactory"(): $MBDMachineDefinition$ConfigPartSettingsFactory
public "projectFile"(): $File
public "recipeLogicSettings"(): $ConfigRecipeLogicSettings
public "reloadFromProjectFile"(): void
public "serializeNBT"(): $CompoundTag
public static "set"(mBDMachineDefinition0: $MBDMachineDefinition$$Type): void
public "stateMachine"(): $StateMachine<any>
public "uiCreator"(): $Function<$MBDMachine, $WidgetGroup>
get "chatComponent"(): $Component
get "descriptionId"(): string
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "createdFromProjectFile"(): boolean
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.RecipeModifier" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $ContentModifier } from "com.lowdragmc.mbd2.api.recipe.content.ContentModifier"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $RecipeCondition } from "com.lowdragmc.mbd2.api.recipe.RecipeCondition"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IConfigurable } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurable"
import { $IPersistedSerializable } from "com.lowdragmc.lowdraglib.syncdata.IPersistedSerializable"
import { $IO } from "com.lowdragmc.mbd2.api.capability.recipe.IO"

export class $RecipeModifier implements $IConfigurable, $IPersistedSerializable {
readonly "contentModifier": $ContentModifier
readonly "durationModifier": $ContentModifier
readonly "recipeConditions": $List<$RecipeCondition>
readonly "targetContent": $IO

constructor()

public "buildConfigurator"(configuratorGroup0: $ConfiguratorGroup$$Type): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
public "serializeNBT"(): $CompoundTag
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.api.capability.recipe.IO" {
import { $Enum } from "java.lang.Enum"
import { $IGuiTexture } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"

export class $IO extends $Enum<$IO> {
static readonly "BOTH": $IO
static readonly "IN": $IO
static readonly "NONE": $IO
static readonly "OUT": $IO
readonly "icon": $IGuiTexture
readonly "name": string

public "getIcon"(): $IGuiTexture
public "getName"(): string
public "getTooltip"(): string
public "support"(iO0: $IO$$Type): boolean
public static "valueOf"(string0: string): $IO
public static "values"(): $IO[]
get "tooltip"(): string
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.event.MachinePlacedEvent" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MachineEvent } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"

export class $MachinePlacedEvent extends $MachineEvent {
readonly "itemStack": $ItemStack
readonly "player": $LivingEntity

constructor(mBDMachine0: $MBDMachine$$Type, livingEntity1: $LivingEntity$$Type, itemStack2: $ItemStack$$Type)
constructor()

public "getChatComponent"(): $Component
public "getItemStack"(): $ItemStack
public "getPlayer"(): $LivingEntity
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.common.machine.MBDMachine" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $IMachineBlockEntity, $IMachineBlockEntity$$Type } from "com.lowdragmc.mbd2.api.blockentity.IMachineBlockEntity"
import { $IFieldUpdateListener$$Type } from "com.lowdragmc.lowdraglib.syncdata.IFieldUpdateListener"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $RecipeLogic } from "com.lowdragmc.mbd2.api.recipe.RecipeLogic"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $ITrait } from "com.lowdragmc.mbd2.common.trait.ITrait"
import { $IO } from "com.lowdragmc.mbd2.api.capability.recipe.IO"
import { $IUIHolder } from "com.lowdragmc.lowdraglib.gui.modular.IUIHolder"
import { $TraitDefinition$$Type } from "com.lowdragmc.mbd2.common.trait.TraitDefinition"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $Map } from "java.util.Map"
import { $RecipeCapability } from "com.lowdragmc.mbd2.api.capability.recipe.RecipeCapability"
import { $Vector3f$$Type } from "org.joml.Vector3f"
import { $IMachine } from "com.lowdragmc.mbd2.api.machine.IMachine"
import { $MachineSound } from "com.lowdragmc.mbd2.client.MachineSound"
import { $ModularUI } from "com.lowdragmc.lowdraglib.gui.modular.ModularUI"
import { $MBDRecipe, $MBDRecipe$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipe"
import { $FieldManagedStorage } from "com.lowdragmc.lowdraglib.syncdata.field.FieldManagedStorage"
import { $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $RecipeLogic$Status$$Type } from "com.lowdragmc.mbd2.api.recipe.RecipeLogic$Status"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $MachineState } from "com.lowdragmc.mbd2.common.machine.definition.config.MachineState"
import { $MBDRecipeType } from "com.lowdragmc.mbd2.api.recipe.MBDRecipeType"
import { $List, $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $MBDMachineDefinition, $MBDMachineDefinition$$Type } from "com.lowdragmc.mbd2.common.machine.definition.MBDMachineDefinition"
import { $Optional } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $VoxelShape } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $CollisionContext$$Type } from "net.minecraft.world.phys.shapes.CollisionContext"
import { $ICapabilityProvider } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $IRef$$Type } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"
import { $IRecipeHandler } from "com.lowdragmc.mbd2.api.capability.recipe.IRecipeHandler"
import { $ContentModifier } from "com.lowdragmc.mbd2.api.recipe.content.ContentModifier"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $IRenderer } from "com.lowdragmc.lowdraglib.client.renderer.IRenderer"
import { $IEnhancedManaged } from "com.lowdragmc.lowdraglib.syncdata.IEnhancedManaged"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Class$$Type } from "java.lang.Class"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $ManagedFieldHolder } from "com.lowdragmc.lowdraglib.syncdata.field.ManagedFieldHolder"
import { $Table } from "com.google.common.collect.Table"
import { $ISubscription } from "com.lowdragmc.lowdraglib.syncdata.ISubscription"

export class $MBDMachine implements $IMachine, $IEnhancedManaged, $ICapabilityProvider, $IUIHolder {
constructor(iMachineBlockEntity0: $IMachineBlockEntity$$Type, mBDMachineDefinition1: $MBDMachineDefinition$$Type, ...object2s: any[])

public "addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$$Type<T>): $ISubscription
public "afterWorking"(): void
public "alwaysReSearchRecipe"(): boolean
public "alwaysTryModifyRecipe"(): boolean
public "animateTick"(randomSource0: $RandomSource$$Type): void
public "applyParallel"(mBDRecipe0: $MBDRecipe$$Type, int1: integer): $MBDRecipe
public "beforeWorking"(mBDRecipe0: $MBDRecipe$$Type): boolean
public "canConnectRedstone"(direction0: $Direction$$Type): boolean
/** Client only, do not use in server scripts */
public "clientTick"(): void
public "consumeInputsAfterWorking"(mBDRecipe0: $MBDRecipe$$Type): boolean
public "createUI"(player0: $Player$$Type): $ModularUI
public "dampingWhenWaiting"(): boolean
public "detach"(): void
public "doModifyRecipe"(mBDRecipe0: $MBDRecipe$$Type): $MBDRecipe
public "emitPhotonFx"(string0: string, resourceLocation1: $ResourceLocation$$Type, vector3f2: $Vector3f$$Type, vector3f3: $Vector3f$$Type, int4: integer, boolean5: boolean, boolean6: boolean): void
public "getAdditionalTraits"(): $List<$ITrait>
public "getAnalogOutputSignal"(): byte
public "getAnimatableMachine"(): $Map<$IRenderer, any>
public "getAppearance"(blockState0: $BlockState$$Type, direction1: $Direction$$Type, blockState2: $BlockState$$Type, blockPos3: $BlockPos$$Type): $BlockState
public "getBlockState"(): $BlockState
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChanceTier"(): integer
/** Client only, do not use in server scripts */
public "getCurrentSound"(): $MachineSound
public "getCustomData"(): $CompoundTag
public "getCustomName"(): $Component
public "getDefinition"(): $MBDMachineDefinition
public "getDropItem"(): $ItemStack
public "getDynamicMachineLevel"(): integer
public "getFieldHolder"(): $ManagedFieldHolder
public "getFrontFacing"(): $Optional<$Direction>
public "getHolder"(): $BlockEntity
public "getLevel"(): $Level
public "getMachineHolder"(): $IMachineBlockEntity
public "getMachineLevel"(): integer
public "getMachineState"(): $MachineState
public "getMachineStateName"(): string
public "getMaxParallel"(mBDRecipe0: $MBDRecipe$$Type): $ContentModifier
public "getModifiedRecipe"(mBDRecipe0: $MBDRecipe$$Type): $MBDRecipe
public "getOffset"(): long
public "getOffsetTimer"(): long
public "getOutputDirectSignal"(): byte[]
public "getOutputDirectSignal"(direction0: $Direction$$Type): integer
public "getOutputSignal"(direction0: $Direction$$Type): integer
public "getOutputSignal"(): byte[]
public "getPhotonFXs"(): $Map<string, any>
public "getPos"(): $BlockPos
public "getRecipeCapabilitiesProxy"(): $Table<$IO, $RecipeCapability<any>, $List<$IRecipeHandler<any>>>
public "getRecipeDampingValue"(): integer
public "getRecipeLogic"(): $RecipeLogic
public "getRecipeType"(): $MBDRecipeType
public "getRenderBoundingBox"(): $AABB
public "getShape"(collisionContext0: $CollisionContext$$Type): $VoxelShape
public "getSyncStorage"(): $FieldManagedStorage
public "getTraitByDefinition"(traitDefinition0: $TraitDefinition$$Type): $ITrait
public "getTraitByName"(string0: string): $ITrait
public "getTraitByName"<T>(class0: $Class$$Type<T>, string1: string): T
public "hasFrontFacing"(): boolean
public "hasProxies"(): boolean
public "initCapabilitiesProxy"(): void
public "isDisableRendering"(): boolean
public "isFacingValid"(direction0: $Direction$$Type): boolean
public "isInValid"(): boolean
public "isInvalid"(): boolean
public "isRemote"(): boolean
public "killPhotonFx"(string0: string, boolean1: boolean): void
public "loadAdditionalTraits"(): void
public "loadCustomPersistedData"(compoundTag0: $CompoundTag$$Type): void
public "markAsDirty"(): void
public "markDirty"(): void
public "markDirty"(name: string): void
public "modifyFuelRecipe"(mBDRecipe0: $MBDRecipe$$Type): $MBDRecipe
public "notifyBlockUpdate"(): void
public "notifyRecipeStatusChanged"(status0: $RecipeLogic$Status$$Type, status1: $RecipeLogic$Status$$Type): void
public static "ofMachine"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $Optional<$IMachine>
public static "ofMachine"(blockEntity0: $BlockEntity$$Type): $Optional<$IMachine>
public "onChanged"(): void
public "onChunkUnloaded"(): void
public "onConsumeInputsAfterWorking"(): void
public "onDrops"(entity0: $Entity$$Type, list1: $List$$Type<$ItemStack$$Type>): void
public "onFuelBurningFinish"(mBDRecipe0: $MBDRecipe$$Type): void
public "onLoad"(): void
public "onMachinePlaced"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type): void
public "onMachineRemoved"(): void
public "onNeighborChanged"(block0: $Block$$Type, blockPos1: $BlockPos$$Type, boolean2: boolean): void
public "onPersistedChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "onRecipeFinish"(): void
public "onRotated"(direction0: $Direction$$Type, direction1: $Direction$$Type): void
public "onSyncChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "onUnload"(): void
public "onUse"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, interactionHand4: $InteractionHand$$Type, blockHitResult5: $BlockHitResult$$Type): $InteractionResult
public "onWaiting"(): void
public "onWorking"(): boolean
public "openUI"(player0: $Player$$Type): $InteractionResult
/** Client only, do not use in server scripts */
public "playStateSound"(string0: string): void
public "runRecipeLogic"(): boolean
public "saveCustomPersistedData"(compoundTag0: $CompoundTag$$Type, boolean1: boolean): void
public "scheduleRender"(fieldName: string, newValue: any, oldValue: any): void
public "scheduleRenderUpdate"(): void
public "serverTick"(): void
public "setAnalogOutputSignal"(int0: integer): void
public "setCustomData"(compoundTag0: $CompoundTag$$Type): void
public "setCustomName"(component0: $Component$$Type): void
public "setFrontFacing"(direction0: $Direction$$Type): void
public "setMachineLevel"(int0: integer): void
public "setMachineState"(string0: string): void
public "setOutputDirectSignal"(int0: integer, direction1: $Direction$$Type): void
public "setOutputSignal"(int0: integer, direction1: $Direction$$Type): void
public "shouldOpenUI"(interactionHand0: $InteractionHand$$Type, blockHitResult1: $BlockHitResult$$Type): boolean
public "triggerGeckolibAnim"(string0: string, float1: float): void
public "triggerGeckolibAnim"(string0: string, string1: string, float2: float): void
public "updateCustomData"(compoundTag0: $CompoundTag$$Type, compoundTag1: $CompoundTag$$Type): void
public "updateSignal"(): void
public "updateState"(string0: string, string1: string): void
get "additionalTraits"(): $List<$ITrait>
get "analogOutputSignal"(): byte
get "animatableMachine"(): $Map<$IRenderer, any>
get "blockState"(): $BlockState
get "chanceTier"(): integer
get "currentSound"(): $MachineSound
get "customData"(): $CompoundTag
get "customName"(): $Component
get "definition"(): $MBDMachineDefinition
get "dropItem"(): $ItemStack
get "dynamicMachineLevel"(): integer
get "fieldHolder"(): $ManagedFieldHolder
get "frontFacing"(): $Optional<$Direction>
get "holder"(): $BlockEntity
get "level"(): $Level
get "machineHolder"(): $IMachineBlockEntity
get "machineLevel"(): integer
get "machineState"(): $MachineState
get "machineStateName"(): string
get "offset"(): long
get "offsetTimer"(): long
get "outputDirectSignal"(): byte[]
get "outputSignal"(): byte[]
get "photonFXs"(): $Map<string, any>
get "pos"(): $BlockPos
get "recipeCapabilitiesProxy"(): $Table<$IO, $RecipeCapability<any>, $List<$IRecipeHandler<any>>>
get "recipeDampingValue"(): integer
get "recipeLogic"(): $RecipeLogic
get "recipeType"(): $MBDRecipeType
get "renderBoundingBox"(): $AABB
get "syncStorage"(): $FieldManagedStorage
get "disableRendering"(): boolean
get "inValid"(): boolean
get "invalid"(): boolean
get "remote"(): boolean
set "analogOutputSignal"(value: integer)
set "customData"(value: $CompoundTag$$Type)
set "customName"(value: $Component$$Type)
set "frontFacing"(value: $Direction$$Type)
set "machineLevel"(value: integer)
set "machineState"(value: string)
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.ConfigItemProperties$ConfigItemPropertiesBuilder" {
import { $ConfigItemProperties } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigItemProperties"
import { $ToggleRenderer$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.toggle.ToggleRenderer"
import { $List$$Type } from "java.util.List"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ToggleCreativeTab$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.toggle.ToggleCreativeTab"
import { $Rarity$$Type } from "net.minecraft.world.item.Rarity"

export class $ConfigItemProperties$ConfigItemPropertiesBuilder {
public "build"(): $ConfigItemProperties
public "creativeTab"(toggleCreativeTab0: $ToggleCreativeTab$$Type): $ConfigItemProperties$ConfigItemPropertiesBuilder
public "isGui3d"(boolean0: boolean): $ConfigItemProperties$ConfigItemPropertiesBuilder
public "itemTooltips"(list0: $List$$Type<$Component$$Type>): $ConfigItemProperties$ConfigItemPropertiesBuilder
public "maxStackSize"(int0: integer): $ConfigItemProperties$ConfigItemPropertiesBuilder
public "rarity"(rarity0: $Rarity$$Type): $ConfigItemProperties$ConfigItemPropertiesBuilder
public "renderer"(toggleRenderer0: $ToggleRenderer$$Type): $ConfigItemProperties$ConfigItemPropertiesBuilder
public "useBlockLight"(boolean0: boolean): $ConfigItemProperties$ConfigItemPropertiesBuilder
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineClientTickEvent" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MachineEvent } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"

export class $MachineClientTickEvent extends $MachineEvent {
constructor(mBDMachine0: $MBDMachine$$Type)
constructor()

public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineStructureInvalidEvent" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MachineEvent } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"

export class $MachineStructureInvalidEvent extends $MachineEvent {
constructor(mBDMachine0: $MBDMachine$$Type)
constructor()

public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.RecipeModifier$RecipeModifiers" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $List } from "java.util.List"
import { $ContentModifier } from "com.lowdragmc.mbd2.api.recipe.content.ContentModifier"
import { $ITagSerializable } from "com.lowdragmc.lowdraglib.syncdata.ITagSerializable"
import { $MBDRecipe, $MBDRecipe$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipe"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IConfigurable } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurable"
import { $RecipeLogic$$Type } from "com.lowdragmc.mbd2.api.recipe.RecipeLogic"
import { $RecipeModifier } from "com.lowdragmc.mbd2.common.machine.definition.config.RecipeModifier"
import { $ListTag, $ListTag$$Type } from "net.minecraft.nbt.ListTag"

export class $RecipeModifier$RecipeModifiers implements $ITagSerializable<$ListTag>, $IConfigurable {
readonly "recipeModifiers": $List<$RecipeModifier>

constructor()

public "applyModifiers"(recipeLogic0: $RecipeLogic$$Type, mBDRecipe1: $MBDRecipe$$Type): $MBDRecipe
public "buildConfigurator"(configuratorGroup0: $ConfiguratorGroup$$Type): void
public "deserializeNBT"(listTag0: $ListTag$$Type): void
public "getChatComponent"(): $Component
public "getMaxParallel"(recipeLogic0: $RecipeLogic$$Type, mBDRecipe1: $MBDRecipe$$Type): $ContentModifier
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineOpenUIEvent" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MachineEvent } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $MachineOpenUIEvent extends $MachineEvent {
readonly "player": $Player

constructor(mBDMachine0: $MBDMachine$$Type, player1: $Player$$Type)
constructor()

public "getChatComponent"(): $Component
public "getPlayer"(): $Player
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.ConfigPartSettings" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $ConfigPartSettings$ConfigPartSettingsBuilder } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigPartSettings$ConfigPartSettingsBuilder"
import { $List } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IPersistedSerializable } from "com.lowdragmc.lowdraglib.syncdata.IPersistedSerializable"
import { $RecipeModifier$RecipeModifiers } from "com.lowdragmc.mbd2.common.machine.definition.config.RecipeModifier$RecipeModifiers"
import { $ConfigPartSettings$ProxyCapability } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigPartSettings$ProxyCapability"
import { $IToggleConfigurable } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IToggleConfigurable"

export class $ConfigPartSettings implements $IToggleConfigurable, $IPersistedSerializable {
public "buildConfigurator"(configuratorGroup0: $ConfiguratorGroup$$Type): void
public static "builder"(): $ConfigPartSettings$ConfigPartSettingsBuilder
public "canShare"(): boolean
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "enable"(): boolean
public "enable"(boolean0: boolean): $ConfigPartSettings
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isEnable"(): boolean
public "isLDLRegister"(): boolean
public "name"(): string
public "proxyControllerCapabilities"(): $List<$ConfigPartSettings$ProxyCapability>
public "recipeModifiers"(): $RecipeModifier$RecipeModifiers
public "setEnable"(boolean0: boolean): void
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineNeighborChangedEventJS" {
import { $MBDMachineEvents$MachineEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineEventJS"
import { $MachineNeighborChangedEvent, $MachineNeighborChangedEvent$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineNeighborChangedEvent"

export class $MBDMachineEvents$MachineNeighborChangedEventJS extends $MBDMachineEvents$MachineEventJS<$MachineNeighborChangedEvent> {
constructor(machineNeighborChangedEvent0: $MachineNeighborChangedEvent$$Type)

}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineRecipeModifyEvent" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $MBDRecipe, $MBDRecipe$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipe"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MachineEvent } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"

export class $MachineRecipeModifyEvent extends $MachineEvent {
constructor(mBDMachine0: $MBDMachine$$Type, mBDRecipe1: $MBDRecipe$$Type)
constructor()

public "getChatComponent"(): $Component
public "getRecipe"(): $MBDRecipe
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
public "setRecipe"(mBDRecipe0: $MBDRecipe$$Type): void
get "recipe"(): $MBDRecipe
set "recipe"(value: $MBDRecipe$$Type)
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.common.event.MBDRegistryEvent$RecipeCondition" {
import { $MBDRegistryEvent } from "com.lowdragmc.mbd2.common.event.MBDRegistryEvent"
import { $RecipeCondition$$Type } from "com.lowdragmc.mbd2.api.recipe.RecipeCondition"
import { $Class$$Type } from "java.lang.Class"

export class $MBDRegistryEvent$RecipeCondition extends $MBDRegistryEvent {
constructor()

public "register"(string0: string, class1: $Class$$Type<$RecipeCondition$$Type>): void
}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineOnConsumeInputsAfterWorkingEventJS" {
import { $MBDMachineEvents$MachineEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineEventJS"
import { $MachineOnConsumeInputsAfterWorkingEvent, $MachineOnConsumeInputsAfterWorkingEvent$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineOnConsumeInputsAfterWorkingEvent"

export class $MBDMachineEvents$MachineOnConsumeInputsAfterWorkingEventJS extends $MBDMachineEvents$MachineEventJS<$MachineOnConsumeInputsAfterWorkingEvent> {
constructor(machineOnConsumeInputsAfterWorkingEvent0: $MachineOnConsumeInputsAfterWorkingEvent$$Type)

}
}

declare module "com.lowdragmc.mbd2.common.gui.editor.machine.MachineScenePanel" {
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $Component } from "net.minecraft.network.chat.Component"
import { $BooleanConsumer$$Type } from "it.unimi.dsi.fastutil.booleans.BooleanConsumer"
import { $TrackedDummyWorld } from "com.lowdragmc.lowdraglib.utils.TrackedDummyWorld"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $SceneWidget, $SceneWidget$$Type } from "com.lowdragmc.lowdraglib.gui.widget.SceneWidget"
import { $BooleanSupplier$$Type } from "java.util.function.BooleanSupplier"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $MachineEditor, $MachineEditor$$Type } from "com.lowdragmc.mbd2.common.gui.editor.MachineEditor"
import { $WidgetGroup } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $MBDMachine } from "com.lowdragmc.mbd2.common.machine.MBDMachine"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $MachineScenePanel extends $WidgetGroup {
constructor(machineEditor0: $MachineEditor$$Type)

public "addButton"(iGuiTexture0: $IGuiTexture$$Type, string1: string, runnable2: $Runnable$$Type): void
public "addSwitch"(iGuiTexture0: $IGuiTexture$$Type, iGuiTexture1: $IGuiTexture$$Type, string2: string, booleanSupplier3: $BooleanSupplier$$Type, booleanConsumer4: $BooleanConsumer$$Type): void
public "canDragIn"(dragging: any): boolean
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getButtonGroup"(): $WidgetGroup
public "getChatComponent"(): $Component
public "getEditor"(): $MachineEditor
public "getLevel"(): $TrackedDummyWorld
public "getPreviewMachine"(): $MBDMachine
public "getRegisterUI"(): $LDLRegister
public "getScene"(): $SceneWidget
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "isDrawRenderingBoxFrameLines"(): boolean
public "isDrawShapeFrameLines"(): boolean
public "isLDLRegister"(): boolean
public "name"(): string
public "prepareButtonGroup"(): void
public "refreshButtonGroupPosition"(): void
public "reloadAdditionalTraits"(): void
public "renderAfterWorld"(sceneWidget0: $SceneWidget$$Type): void
public "resetScene"(): void
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setDrawRenderingBoxFrameLines"(boolean0: boolean): void
public "setDrawShapeFrameLines"(boolean0: boolean): void
get "buttonGroup"(): $WidgetGroup
get "chatComponent"(): $Component
get "editor"(): $MachineEditor
get "level"(): $TrackedDummyWorld
get "previewMachine"(): $MBDMachine
get "registerUI"(): $LDLRegister
get "scene"(): $SceneWidget
get "translateKey"(): string
get "drawRenderingBoxFrameLines"(): boolean
get "drawShapeFrameLines"(): boolean
get "lDLRegister"(): boolean
set "drawRenderingBoxFrameLines"(value: boolean)
set "drawShapeFrameLines"(value: boolean)
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineRecipeModifyEvent$After" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $MBDRecipe$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipe"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MachineRecipeModifyEvent } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineRecipeModifyEvent"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"

export class $MachineRecipeModifyEvent$After extends $MachineRecipeModifyEvent {
constructor(mBDMachine0: $MBDMachine$$Type, mBDRecipe1: $MBDRecipe$$Type)
constructor()

public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.common.event.MBDRegistryEvent$Machine" {
import { $MBDRegistryEvent } from "com.lowdragmc.mbd2.common.event.MBDRegistryEvent"
import { $MBDMachineDefinition$$Type } from "com.lowdragmc.mbd2.common.machine.definition.MBDMachineDefinition"
import { $Class$$Type } from "java.lang.Class"
import { $File$$Type } from "java.io.File"

export class $MBDRegistryEvent$Machine extends $MBDRegistryEvent {
constructor()

public "register"(mBDMachineDefinition0: $MBDMachineDefinition$$Type): void
public "registerFromFile"(string0: string, file1: $File$$Type): void
public "registerFromResource"(class0: $Class$$Type<any>, string1: string, string2: string): void
}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineRegistryEventJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $MBDMachineDefinition } from "com.lowdragmc.mbd2.common.machine.definition.MBDMachineDefinition"
import { $Map } from "java.util.Map"
import { $Supplier } from "java.util.function.Supplier"
import { $StartupEventJS } from "dev.latvian.mods.kubejs.event.StartupEventJS"
import { $MBDMachineDefinition$Builder } from "com.lowdragmc.mbd2.common.machine.definition.MBDMachineDefinition$Builder"

export class $MBDMachineRegistryEventJS extends $StartupEventJS {
static readonly "BUILDERS": $Map<string, $Supplier<$MBDMachineDefinition$Builder>>

constructor()

public "create"(string0: string, resourceLocation1: $ResourceLocation$$Type): $MBDMachineDefinition$Builder
public "getMachine"(resourceLocation0: $ResourceLocation$$Type): $MBDMachineDefinition
public "removeMachine"(resourceLocation0: $ResourceLocation$$Type): void
}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineAfterRecipeWorkingEventJS" {
import { $MBDMachineEvents$MachineEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineEventJS"
import { $MachineAfterRecipeWorkingEvent, $MachineAfterRecipeWorkingEvent$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineAfterRecipeWorkingEvent"

export class $MBDMachineEvents$MachineAfterRecipeWorkingEventJS extends $MBDMachineEvents$MachineEventJS<$MachineAfterRecipeWorkingEvent> {
constructor(machineAfterRecipeWorkingEvent0: $MachineAfterRecipeWorkingEvent$$Type)

}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.ConfigPartSettings$ProxyCapability" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IConfigurable } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurable"
import { $IPersistedSerializable } from "com.lowdragmc.lowdraglib.syncdata.IPersistedSerializable"
import { $ToggleAutoIO } from "com.lowdragmc.mbd2.common.trait.ToggleAutoIO"
import { $CapabilityIO } from "com.lowdragmc.mbd2.common.trait.CapabilityIO"

export class $ConfigPartSettings$ProxyCapability implements $IConfigurable, $IPersistedSerializable {
constructor()

public "autoIO"(): $ToggleAutoIO
public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "capabilityIO"(): $CapabilityIO
public "deserializeNBT"(tag: $CompoundTag$$Type): void
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
public "traitNameFilter"(): string
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.toggle.ToggleMachineSound" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SoundSource, $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Configurator } from "com.lowdragmc.lowdraglib.gui.editor.configurator.Configurator"
import { $IToggleConfigurable } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IToggleConfigurable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $BooleanSupplier$$Type } from "java.util.function.BooleanSupplier"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $MachineSound } from "com.lowdragmc.mbd2.client.MachineSound"

export class $ToggleMachineSound implements $IToggleConfigurable {
constructor()

public "buildConfigurator"(configuratorGroup0: $ConfiguratorGroup$$Type): void
/** Client only, do not use in server scripts */
public "createMachineSound"(blockPos0: $BlockPos$$Type, booleanSupplier1: $BooleanSupplier$$Type): $MachineSound
/** Client only, do not use in server scripts */
public "createSoundConfigurator"(string0: string, consumer1: $Consumer$$Type<$ResourceLocation$$Type>, supplier2: $Supplier$$Type<$ResourceLocation>): $Configurator
public "getChatComponent"(): $Component
public "getDelay"(): integer
public "getPitch"(): float
public "getRegisterUI"(): $LDLRegister
public "getSound"(): $ResourceLocation
public "getSoundEvent"(): $SoundEvent
public "getSoundSource"(): $SoundSource
public "getTranslateKey"(): string
public "getVolume"(): float
public "group"(): string
public "isEnable"(): boolean
public "isLDLRegister"(): boolean
public "isLoop"(): boolean
public "isLoopWithShuffle"(): boolean
public "name"(): string
public "setDelay"(int0: integer): void
public "setEnable"(boolean0: boolean): void
public "setLoop"(boolean0: boolean): void
public "setLoopWithShuffle"(boolean0: boolean): void
public "setPitch"(float0: float): void
public "setSound"(resourceLocation0: $ResourceLocation$$Type): void
public "setSoundEvent"(soundEvent0: $SoundEvent$$Type): void
public "setSoundSource"(soundSource0: $SoundSource$$Type): void
public "setVolume"(float0: float): void
get "chatComponent"(): $Component
get "delay"(): integer
get "pitch"(): float
get "registerUI"(): $LDLRegister
get "sound"(): $ResourceLocation
get "soundEvent"(): $SoundEvent
get "soundSource"(): $SoundSource
get "translateKey"(): string
get "volume"(): float
get "enable"(): boolean
get "lDLRegister"(): boolean
get "loop"(): boolean
get "loopWithShuffle"(): boolean
set "delay"(value: integer)
set "enable"(value: boolean)
set "loop"(value: boolean)
set "loopWithShuffle"(value: boolean)
set "pitch"(value: float)
set "sound"(value: $ResourceLocation$$Type)
set "soundEvent"(value: $SoundEvent$$Type)
set "soundSource"(value: $SoundSource$$Type)
set "volume"(value: float)
}
}

declare module "com.lowdragmc.mbd2.api.recipe.MBDRecipeBuilder" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $MBDRecipe, $MBDRecipe$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipe"
import { $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $FinishedRecipe, $FinishedRecipe$$Type } from "net.minecraft.data.recipes.FinishedRecipe"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Content } from "com.lowdragmc.mbd2.api.recipe.content.Content"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $MBDRecipeType, $MBDRecipeType$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipeType"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $List } from "java.util.List"
import { $FluidIngredient$$Type } from "com.lowdragmc.mbd2.api.recipe.ingredient.FluidIngredient"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $RecipeCondition, $RecipeCondition$$Type } from "com.lowdragmc.mbd2.api.recipe.RecipeCondition"
import { $ItemLike } from "net.minecraft.world.level.ItemLike"
import { $Map } from "java.util.Map"
import { $RecipeCapability, $RecipeCapability$$Type } from "com.lowdragmc.mbd2.api.capability.recipe.RecipeCapability"
import { $FluidStack$$Type } from "com.lowdragmc.lowdraglib.side.fluid.FluidStack"
import { $BiConsumer, $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $MBDRecipeBuilder {
"chance": float
readonly "conditions": $List<$RecipeCondition>
"duration": integer
"id": $ResourceLocation
readonly "input": $Map<$RecipeCapability<any>, $List<$Content>>
"isFuel": boolean
"isXEIHidden": boolean
"onSave": $BiConsumer<$MBDRecipeBuilder, $Consumer<$FinishedRecipe>>
readonly "output": $Map<$RecipeCapability<any>, $List<$Content>>
"perTick": boolean
"priority": integer
"recipeType": $MBDRecipeType
"slotName": string
"tierChanceBoost": float
"uiName": string

constructor(mBDRecipe0: $MBDRecipe$$Type, mBDRecipeType1: $MBDRecipeType$$Type)
constructor(resourceLocation0: $ResourceLocation$$Type, mBDRecipeType1: $MBDRecipeType$$Type)

public "addCondition"(recipeCondition0: $RecipeCondition$$Type): $MBDRecipeBuilder
public "addData"(string0: string, tag1: $Tag$$Type): $MBDRecipeBuilder
public "addData"(string0: string, int1: integer): $MBDRecipeBuilder
public "addData"(string0: string, long1: long): $MBDRecipeBuilder
public "addData"(string0: string, string1: string): $MBDRecipeBuilder
public "addData"(string0: string, float1: float): $MBDRecipeBuilder
public "addData"(string0: string, boolean1: boolean): $MBDRecipeBuilder
public "biome"(resourceLocation0: $ResourceLocation$$Type): $MBDRecipeBuilder
public "biome"(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean): $MBDRecipeBuilder
public "blastFurnaceTemp"(int0: integer): $MBDRecipeBuilder
public "build"(): $FinishedRecipe
public "buildRawRecipe"(): $MBDRecipe
public "chance"(float0: float): $MBDRecipeBuilder
public "copy"(string0: string): $MBDRecipeBuilder
public "copy"(resourceLocation0: $ResourceLocation$$Type): $MBDRecipeBuilder
public "copyFrom"(mBDRecipeBuilder0: $MBDRecipeBuilder$$Type): $MBDRecipeBuilder
public "dimension"(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean): $MBDRecipeBuilder
public "dimension"(resourceLocation0: $ResourceLocation$$Type): $MBDRecipeBuilder
public "disableDistilleryRecipes"(boolean0: boolean): $MBDRecipeBuilder
public "duration"(int0: integer): $MBDRecipeBuilder
public "explosivesAmount"(int0: integer): $MBDRecipeBuilder
public "explosivesType"(itemStack0: $ItemStack$$Type): $MBDRecipeBuilder
public "fusionStartEU"(long0: long): $MBDRecipeBuilder
public "id"(resourceLocation0: $ResourceLocation$$Type): $MBDRecipeBuilder
public "input"<T>(recipeCapability0: $RecipeCapability$$Type<T>, ...t1s: T[]): $MBDRecipeBuilder
public "inputFluids"(...fluidIngredient0s: $FluidIngredient$$Type[]): $MBDRecipeBuilder
public "inputFluids"(...fluidStack0s: $FluidStack$$Type[]): $MBDRecipeBuilder
public "inputItems"(tagKey0: $TagKey$$Type<$Item$$Type>): $MBDRecipeBuilder
public "inputItems"(item0: $Item$$Type): $MBDRecipeBuilder
public "inputItems"(supplier0: $Supplier$$Type<$Item>, int1: integer): $MBDRecipeBuilder
public "inputItems"(supplier0: $Supplier$$Type<$Item>): $MBDRecipeBuilder
public "inputItems"(...ingredient0s: $Ingredient$$Type[]): $MBDRecipeBuilder
public "inputItems"(...itemStack0s: $ItemStack$$Type[]): $MBDRecipeBuilder
public "inputItems"(item0: $Item$$Type, int1: integer): $MBDRecipeBuilder
public "inputItems"(tagKey0: $TagKey$$Type<$Item$$Type>, int1: integer): $MBDRecipeBuilder
public "inputs"<T>(recipeCapability0: $RecipeCapability$$Type<T>, ...object1s: any[]): $MBDRecipeBuilder
public "isFuel"(boolean0: boolean): $MBDRecipeBuilder
public "isXEIHidden"(boolean0: boolean): $MBDRecipeBuilder
public "itemOutputs"(...itemStack0s: $ItemStack$$Type[]): $MBDRecipeBuilder
public "notConsumable"(supplier0: $Supplier$$Type<$Item>): $MBDRecipeBuilder
public "notConsumable"(item0: $Item$$Type): $MBDRecipeBuilder
public "notConsumable"(itemStack0: $ItemStack$$Type): $MBDRecipeBuilder
public static "of"(resourceLocation0: $ResourceLocation$$Type, mBDRecipeType1: $MBDRecipeType$$Type): $MBDRecipeBuilder
public static "ofRaw"(): $MBDRecipeBuilder
public "onSave"(biConsumer0: $BiConsumer$$Type<$MBDRecipeBuilder$$Type, $Consumer$$Type<$FinishedRecipe$$Type>>): $MBDRecipeBuilder
public "output"<T>(recipeCapability0: $RecipeCapability$$Type<T>, ...t1s: T[]): $MBDRecipeBuilder
public "outputFluids"(...fluidStack0s: $FluidStack$$Type[]): $MBDRecipeBuilder
public "outputFluids"(...fluidIngredient0s: $FluidIngredient$$Type[]): $MBDRecipeBuilder
public "outputItems"(...itemStack0s: $ItemStack$$Type[]): $MBDRecipeBuilder
public "outputItems"(supplier0: $Supplier$$Type<$ItemLike>): $MBDRecipeBuilder
public "outputItems"(item0: $Item$$Type): $MBDRecipeBuilder
public "outputItems"(item0: $Item$$Type, int1: integer): $MBDRecipeBuilder
public "outputItems"(supplier0: $Supplier$$Type<$ItemLike>, int1: integer): $MBDRecipeBuilder
public "outputs"<T>(recipeCapability0: $RecipeCapability$$Type<T>, ...object1s: any[]): $MBDRecipeBuilder
public "perTick"(boolean0: boolean): $MBDRecipeBuilder
public "posY"(int0: integer, int1: integer): $MBDRecipeBuilder
public "posY"(int0: integer, int1: integer, boolean2: boolean): $MBDRecipeBuilder
public "priority"(int0: integer): $MBDRecipeBuilder
public "rain"(float0: float, float1: float): $MBDRecipeBuilder
public "rain"(float0: float, float1: float, boolean2: boolean): $MBDRecipeBuilder
public "recipeType"(mBDRecipeType0: $MBDRecipeType$$Type): $MBDRecipeBuilder
public "removeInputs"<T>(recipeCapability0: $RecipeCapability$$Type<T>): $MBDRecipeBuilder
public "removeOutputs"<T>(recipeCapability0: $RecipeCapability$$Type<T>): $MBDRecipeBuilder
public "save"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>): void
public "saveAsBuiltinRecipe"(): $MBDRecipe
public "slotName"(string0: string): $MBDRecipeBuilder
public "solderMultiplier"(int0: integer): $MBDRecipeBuilder
public "thunder"(float0: float, float1: float, boolean2: boolean): $MBDRecipeBuilder
public "thunder"(float0: float, float1: float): $MBDRecipeBuilder
public "tierChanceBoost"(float0: float): $MBDRecipeBuilder
public "uiName"(string0: string): $MBDRecipeBuilder
get "data"(): $CompoundTag
set "data"(value: $CompoundTag$$Type)
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineRecipeModifyEvent$Before" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $MBDRecipe$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipe"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MachineRecipeModifyEvent } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineRecipeModifyEvent"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"

export class $MachineRecipeModifyEvent$Before extends $MachineRecipeModifyEvent {
constructor(mBDMachine0: $MBDMachine$$Type, mBDRecipe1: $MBDRecipe$$Type)
constructor()

public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.toggle.ToggleShape" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $ITagSerializable } from "com.lowdragmc.lowdraglib.syncdata.ITagSerializable"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $ToggleObject } from "com.lowdragmc.mbd2.common.machine.definition.config.toggle.ToggleObject"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"

export class $ToggleShape extends $ToggleObject<$VoxelShape> implements $ITagSerializable<$CompoundTag> {
static readonly "BLOCK": $AABB

constructor(voxelShape0: $VoxelShape$$Type)
constructor(voxelShape0: $VoxelShape$$Type, boolean1: boolean)
constructor(boolean0: boolean)
constructor()

public "buildConfigurator"(configuratorGroup0: $ConfiguratorGroup$$Type): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "getValue"(): $VoxelShape
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
public "setValue"(voxelShape0: $VoxelShape$$Type): void
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "value"(): $VoxelShape
get "lDLRegister"(): boolean
set "value"(value: $VoxelShape$$Type)
}
}

declare module "com.lowdragmc.mbd2.common.event.MBDRegistryEvent$MachineDefinitionType" {
import { $MBDRegistryEvent } from "com.lowdragmc.mbd2.common.event.MBDRegistryEvent"
import { $MBDMachineDefinition, $MBDMachineDefinition$$Type } from "com.lowdragmc.mbd2.common.machine.definition.MBDMachineDefinition"
import { $Class$$Type } from "java.lang.Class"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $MBDRegistryEvent$MachineDefinitionType extends $MBDRegistryEvent {
constructor()

public "register"<T extends $MBDMachineDefinition>(class0: $Class$$Type<T>, supplier1: $Supplier$$Type<T>): void
}
}

declare module "com.lowdragmc.mbd2.api.capability.recipe.IRecipeHandler" {
import { $List, $List$$Type } from "java.util.List"
import { $MBDRecipe$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipe"
import { $RecipeCapability } from "com.lowdragmc.mbd2.api.capability.recipe.RecipeCapability"
import { $Set } from "java.util.Set"
import { $IO$$Type } from "com.lowdragmc.mbd2.api.capability.recipe.IO"
import { $IRecipeCapabilityHolder$$Type } from "com.lowdragmc.mbd2.api.capability.recipe.IRecipeCapabilityHolder"

export interface $IRecipeHandler<K = any> {
"copyContent"(object0: any): K
"getRecipeCapability"(): $RecipeCapability<K>
"getSlotNames"(): $Set<string>
"handleRecipe"(iO0: $IO$$Type, mBDRecipe1: $MBDRecipe$$Type, list2: $List$$Type<any>, string3: string, boolean4: boolean): $List<K>
"handleRecipeInner"(iO0: $IO$$Type, mBDRecipe1: $MBDRecipe$$Type, list2: $List$$Type<K>, string3: string, boolean4: boolean): $List<K>
"isDistinct"(): boolean
"postWorking"(iRecipeCapabilityHolder0: $IRecipeCapabilityHolder$$Type, iO1: $IO$$Type, mBDRecipe2: $MBDRecipe$$Type): void
"preWorking"(iRecipeCapabilityHolder0: $IRecipeCapabilityHolder$$Type, iO1: $IO$$Type, mBDRecipe2: $MBDRecipe$$Type): void
get "recipeCapability"(): $RecipeCapability<K>
get "slotNames"(): $Set<string>
get "distinct"(): boolean
}

export namespace $IRecipeHandler {
const probejs$$marker: never
}
export abstract class $IRecipeHandler$$Static<K = any> implements $IRecipeHandler<K> {
}
}

declare module "com.lowdragmc.mbd2.api.recipe.MBDRecipeType$UICreator" {
import { $MBDRecipe$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipe"
import { $WidgetGroup } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"

export interface $MBDRecipeType$UICreator {
"create"(mBDRecipe0: $MBDRecipe$$Type): $WidgetGroup
}

export namespace $MBDRecipeType$UICreator {
const DEFAULT: $MBDRecipeType$UICreator
}
export abstract class $MBDRecipeType$UICreator$$Static implements $MBDRecipeType$UICreator {
static readonly "DEFAULT": $MBDRecipeType$UICreator

}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineOnLoadEvent" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MachineEvent } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"

export class $MachineOnLoadEvent extends $MachineEvent {
constructor(mBDMachine0: $MBDMachine$$Type)
constructor()

public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.common.event.MBDRegistryEvent" {
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $MBDRegistryEvent extends $Event implements $IModBusEvent {
constructor()

}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.MachineState$Builder" {
import { $MachineState, $MachineState$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.MachineState"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List$$Type } from "java.util.List"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $IRenderer$$Type } from "com.lowdragmc.lowdraglib.client.renderer.IRenderer"
import { $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"

export class $MachineState$Builder<T extends $MachineState = $MachineState> {
public "build"(): T
public "child"(machineState0: $MachineState$$Type): $MachineState$Builder<T>
public "children"(list0: $List$$Type<$MachineState$$Type>): $MachineState$Builder<T>
public "lightLevel"(integer0: integer): $MachineState$Builder<T>
public "modelRenderer"(resourceLocation0: $ResourceLocation$$Type): $MachineState$Builder<T>
public "name"(string0: string): $MachineState$Builder<T>
public "renderer"(iRenderer0: $IRenderer$$Type): $MachineState$Builder<T>
public "renderingBox"(aABB0: $AABB$$Type): $MachineState$Builder<T>
public "shape"(voxelShape0: $VoxelShape$$Type): $MachineState$Builder<T>
}
}

declare module "com.lowdragmc.mbd2.api.recipe.MBDRecipeType" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Deque$$Type } from "java.util.Deque"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $IRecipeCapabilityHolder$$Type } from "com.lowdragmc.mbd2.api.capability.recipe.IRecipeCapabilityHolder"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $IConfigurable } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurable"
import { $ItemLike } from "net.minecraft.world.level.ItemLike"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $RecipeType, $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"
import { $WidgetGroup, $WidgetGroup$$Type } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $ITagSerializable } from "com.lowdragmc.lowdraglib.syncdata.ITagSerializable"
import { $MBDRecipe, $MBDRecipe$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipe"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Size, $Size$$Type } from "com.lowdragmc.lowdraglib.utils.Size"
import { $MBDRecipeBuilder, $MBDRecipeBuilder$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipeBuilder"
import { $FinishedRecipe$$Type } from "net.minecraft.data.recipes.FinishedRecipe"
import { $IGuiTexture, $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $File, $File$$Type } from "java.io.File"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Recipe, $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $RecipeManager$$Type } from "net.minecraft.world.item.crafting.RecipeManager"
import { $MBDRecipeType$UICreator, $MBDRecipeType$UICreator$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipeType$UICreator"

export class $MBDRecipeType implements $RecipeType<$MBDRecipe>, $ITagSerializable<$CompoundTag>, $IConfigurable {
static readonly "DUMMY": $MBDRecipeType

constructor(resourceLocation0: $ResourceLocation$$Type, ...recipeType1s: $RecipeType$$Type<any>[])

public "bindXEIRecipeUI"(widgetGroup0: $WidgetGroup$$Type, mBDRecipe1: $MBDRecipe$$Type): void
public "buildConfigurator"(configuratorGroup0: $ConfiguratorGroup$$Type): void
public "copyFrom"(mBDRecipeBuilder0: $MBDRecipeBuilder$$Type): $MBDRecipeBuilder
public static "createDefault"(): $MBDRecipeType
public "createFuelUI"(mBDRecipe0: $MBDRecipe$$Type): $WidgetGroup
public "createRecipeUI"(mBDRecipe0: $MBDRecipe$$Type): $WidgetGroup
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getBuiltinRecipes"(): $Map<$ResourceLocation, $MBDRecipe>
public "getChatComponent"(): $Component
public "getFuelIcon"(): $IGuiTexture
public "getFuelRegistryName"(): $ResourceLocation
public "getFuelUICreator"(): $MBDRecipeType$UICreator
public "getFuelUISize"(): $Size
public "getIcon"(): $IGuiTexture
public "getProjectFile"(): $File
/** @deprecated */
public "getProxyRecipes"(): $Map<$RecipeType<any>, $List<$MBDRecipe>>
public "getRecipeBuilder"(): $MBDRecipeBuilder
public "getRegisterUI"(): $LDLRegister
public "getRegistryName"(): $ResourceLocation
public "getTranslateKey"(): string
public "getUiCreator"(): $MBDRecipeType$UICreator
public "getUiSize"(): $Size
public "group"(): string
public "isCreatedFromProjectFile"(): boolean
public "isLDLRegister"(): boolean
public "isProxyRecipeXEIVisible"(): boolean
public "isRequireFuelForWorking"(): boolean
public "isXEIVisible"(): boolean
public "loadProductiveTag"(file0: $File$$Type, compoundTag1: $CompoundTag$$Type, deque2: $Deque$$Type<$Runnable$$Type>): $MBDRecipeType
public "name"(): string
public "onRecipeBuild"(biConsumer0: $BiConsumer$$Type<$MBDRecipeBuilder$$Type, $Consumer$$Type<$FinishedRecipe$$Type>>): $MBDRecipeType
public "onRecipeManagerLoaded"(map0: $Map$$Type<$RecipeType$$Type<any>, $Map$$Type<$ResourceLocation$$Type, $Recipe$$Type<any>>>): void
public "onRecipeManagerLoadedKjs"(map0: $Map$$Type<$ResourceLocation$$Type, $Recipe$$Type<any>>): void
public "prepareBuilder"(consumer0: $Consumer$$Type<$MBDRecipeBuilder$$Type>): $MBDRecipeType
public "recipeBuilder"(supplier0: $Supplier$$Type<$ItemLike>, ...object1s: any[]): $MBDRecipeBuilder
public "recipeBuilder"(resourceLocation0: $ResourceLocation$$Type, ...object1s: any[]): $MBDRecipeBuilder
public "recipeBuilder"(string0: string, ...object1s: any[]): $MBDRecipeBuilder
public "recipeBuilder"(): any
public static "register"<T extends $Recipe<any>>(string0: string): $RecipeType<T>
public "reloadFromProjectFile"(): void
public "searchFuelRecipe"(recipeManager0: $RecipeManager$$Type, iRecipeCapabilityHolder1: $IRecipeCapabilityHolder$$Type): $List<$MBDRecipe>
public "searchRecipe"(recipeManager0: $RecipeManager$$Type, iRecipeCapabilityHolder1: $IRecipeCapabilityHolder$$Type): $List<$MBDRecipe>
public "setFuelIcon"(iGuiTexture0: $IGuiTexture$$Type): $MBDRecipeType
public "setFuelUICreator"(uICreator0: $MBDRecipeType$UICreator$$Type): $MBDRecipeType
public "setFuelUISize"(size0: $Size$$Type): $MBDRecipeType
public "setIcon"(iGuiTexture0: $IGuiTexture$$Type): $MBDRecipeType
public "setProjectFile"(file0: $File$$Type): $MBDRecipeType
public "setProxyRecipeXEIVisible"(boolean0: boolean): $MBDRecipeType
public "setRecipeBuilder"(mBDRecipeBuilder0: $MBDRecipeBuilder$$Type): $MBDRecipeType
public "setRequireFuelForWorking"(boolean0: boolean): $MBDRecipeType
public "setUiCreator"(uICreator0: $MBDRecipeType$UICreator$$Type): $MBDRecipeType
public "setUiSize"(size0: $Size$$Type): $MBDRecipeType
public "setXEIVisible"(boolean0: boolean): $MBDRecipeType
public static "simple"<T extends $Recipe<any>>(resourceLocation0: $ResourceLocation$$Type): $RecipeType<T>
public "toMBDrecipe"(recipeType0: $RecipeType$$Type<any>, resourceLocation1: $ResourceLocation$$Type, recipe2: $Recipe$$Type<any>): $MBDRecipe
get "builtinRecipes"(): $Map<$ResourceLocation, $MBDRecipe>
get "chatComponent"(): $Component
get "fuelIcon"(): $IGuiTexture
get "fuelRegistryName"(): $ResourceLocation
get "fuelUICreator"(): $MBDRecipeType$UICreator
get "fuelUISize"(): $Size
get "icon"(): $IGuiTexture
get "projectFile"(): $File
get "proxyRecipes"(): $Map<$RecipeType<any>, $List<$MBDRecipe>>
get "registerUI"(): $LDLRegister
get "registryName"(): $ResourceLocation
get "translateKey"(): string
get "uiCreator"(): $MBDRecipeType$UICreator
get "uiSize"(): $Size
get "createdFromProjectFile"(): boolean
get "lDLRegister"(): boolean
get "proxyRecipeXEIVisible"(): boolean
get "requireFuelForWorking"(): boolean
get "xEIVisible"(): boolean
set "fuelIcon"(value: $IGuiTexture$$Type)
set "fuelUICreator"(value: $MBDRecipeType$UICreator$$Type)
set "fuelUISize"(value: $Size$$Type)
set "icon"(value: $IGuiTexture$$Type)
set "projectFile"(value: $File$$Type)
set "proxyRecipeXEIVisible"(value: boolean)
set "requireFuelForWorking"(value: boolean)
set "uiCreator"(value: $MBDRecipeType$UICreator$$Type)
set "uiSize"(value: $Size$$Type)
set "xEIVisible"(value: boolean)
}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachinePlacedEventJS" {
import { $MBDMachineEvents$MachineEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineEventJS"
import { $MachinePlacedEvent, $MachinePlacedEvent$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachinePlacedEvent"

export class $MBDMachineEvents$MachinePlacedEventJS extends $MBDMachineEvents$MachineEventJS<$MachinePlacedEvent> {
constructor(machinePlacedEvent0: $MachinePlacedEvent$$Type)

}
}

declare module "com.lowdragmc.mbd2.core.mixins.IngredientAccessor" {
import { $Ingredient$Value, $Ingredient$Value$$Type } from "net.minecraft.world.item.crafting.Ingredient$Value"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $IngredientAccessor {
"getValues"(): $Ingredient$Value[]
"setItemStacks"(itemStack0s: $ItemStack$$Type[]): void
"setValues"(value0s: $Ingredient$Value$$Type[]): void
get "values"(): $Ingredient$Value[]
set "itemStacks"(value: $ItemStack$$Type[])
set "values"(value: $Ingredient$Value$$Type[])
}

export namespace $IngredientAccessor {
const probejs$$marker: never
}
export abstract class $IngredientAccessor$$Static implements $IngredientAccessor {
}
}

declare module "com.lowdragmc.mbd2.api.capability.recipe.RecipeCapability" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List$$Type } from "java.util.List"
import { $ContentModifier$$Type } from "com.lowdragmc.mbd2.api.recipe.content.ContentModifier"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IngredientIO$$Type } from "com.lowdragmc.lowdraglib.jei.IngredientIO"
import { $Widget, $Widget$$Type } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $IContentSerializer } from "com.lowdragmc.mbd2.api.recipe.content.IContentSerializer"
import { $Content$$Type } from "com.lowdragmc.mbd2.api.recipe.content.Content"

export class $RecipeCapability<T = any> {
readonly "name": string
readonly "serializer": $IContentSerializer<T>

public "bindXEIWidget"(widget0: $Widget$$Type, content1: $Content$$Type, ingredientIO2: $IngredientIO$$Type): void
public "calculateAmount"(list0: $List$$Type<T>): double
public "copyContent"(object0: any, contentModifier1: $ContentModifier$$Type): T
public "copyContent"(object0: any): T
public "copyInner"(t0: T): T
public "copyWithModifier"(t0: T, contentModifier1: $ContentModifier$$Type): T
public "createContentConfigurator"(configuratorGroup0: $ConfiguratorGroup$$Type, supplier1: $Supplier$$Type<T>, consumer2: $Consumer$$Type<T>): void
public "createDefaultContent"(): T
public "createPreviewWidget"(t0: T): $Widget
public "createXEITemplate"(): $Widget
public "deepCopyContent"(object0: any): T
public "deepCopyContent"(object0: any, contentModifier1: $ContentModifier$$Type): T
public "getLeftErrorInfo"(list0: $List$$Type<T>): $Component
public "getTraslateComponent"(): $Component
public "of"(object0: any): T
get "traslateComponent"(): $Component
}
}

declare module "com.lowdragmc.mbd2.integration.create.machine.CreateMachineState" {
import { $MachineState, $MachineState$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.MachineState"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $CreateMachineState$Builder } from "com.lowdragmc.mbd2.integration.create.machine.CreateMachineState$Builder"
import { $List$$Type } from "java.util.List"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IRenderer, $IRenderer$$Type } from "com.lowdragmc.lowdraglib.client.renderer.IRenderer"
import { $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"

export class $CreateMachineState extends $MachineState {
constructor(string0: string, list1: $List$$Type<$MachineState$$Type>, iRenderer2: $IRenderer$$Type, voxelShape3: $VoxelShape$$Type, integer4: integer, aABB5: $AABB$$Type, iRenderer6: $IRenderer$$Type)

public "buildConfigurator"(configuratorGroup0: $ConfiguratorGroup$$Type): void
public static "builder"(): $CreateMachineState$Builder
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getRotationRenderer"(): $IRenderer
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "rotationRenderer"(): $IRenderer
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineOpenUIEventJS" {
import { $MachineOpenUIEvent, $MachineOpenUIEvent$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineOpenUIEvent"
import { $MBDMachineEvents$MachineEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineEventJS"

export class $MBDMachineEvents$MachineOpenUIEventJS extends $MBDMachineEvents$MachineEventJS<$MachineOpenUIEvent> {
constructor(machineOpenUIEvent0: $MachineOpenUIEvent$$Type)

}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineOnRecipeFinishEvent" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $MBDRecipe, $MBDRecipe$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipe"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MachineEvent } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"

export class $MachineOnRecipeFinishEvent extends $MachineEvent {
readonly "recipe": $MBDRecipe

constructor(mBDMachine0: $MBDMachine$$Type, mBDRecipe1: $MBDRecipe$$Type)
constructor()

public "getChatComponent"(): $Component
public "getRecipe"(): $MBDRecipe
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineTickEvent" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MachineEvent } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"

export class $MachineTickEvent extends $MachineEvent {
constructor(mBDMachine0: $MBDMachine$$Type)
constructor()

public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineStructureInvalidEventJS" {
import { $MBDMachineEvents$MachineEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineEventJS"
import { $MachineStructureInvalidEvent, $MachineStructureInvalidEvent$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineStructureInvalidEvent"

export class $MBDMachineEvents$MachineStructureInvalidEventJS extends $MBDMachineEvents$MachineEventJS<$MachineStructureInvalidEvent> {
constructor(machineStructureInvalidEvent0: $MachineStructureInvalidEvent$$Type)

}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.ConfigRecipeLogicSettings" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $MBDRecipeType } from "com.lowdragmc.mbd2.api.recipe.MBDRecipeType"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IPersistedSerializable } from "com.lowdragmc.lowdraglib.syncdata.IPersistedSerializable"
import { $RecipeModifier$RecipeModifiers } from "com.lowdragmc.mbd2.common.machine.definition.config.RecipeModifier$RecipeModifiers"
import { $IToggleConfigurable } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IToggleConfigurable"
import { $ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder"

export class $ConfigRecipeLogicSettings implements $IToggleConfigurable, $IPersistedSerializable {
public "alwaysModifyRecipe"(): boolean
public "alwaysSearchRecipe"(): boolean
public "buildConfigurator"(configuratorGroup0: $ConfiguratorGroup$$Type): void
public static "builder"(): $ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder
public "consumeInputsAfterWorking"(): boolean
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getChatComponent"(): $Component
public "getRecipeType"(): $MBDRecipeType
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isEnable"(): boolean
public "isLDLRegister"(): boolean
public "name"(): string
public "recipeDampingValue"(): integer
public "recipeModifiers"(): $RecipeModifier$RecipeModifiers
public "recipeType"(): $ResourceLocation
public "serializeNBT"(): $CompoundTag
public "setEnable"(boolean0: boolean): void
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "enable"(): boolean
get "lDLRegister"(): boolean
set "enable"(value: boolean)
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ConfigRecipeLogicSettings } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigRecipeLogicSettings"
import { $RecipeModifier$RecipeModifiers$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.RecipeModifier$RecipeModifiers"

export class $ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder {
public "alwaysModifyRecipe"(boolean0: boolean): $ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder
public "alwaysSearchRecipe"(boolean0: boolean): $ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder
public "build"(): $ConfigRecipeLogicSettings
public "consumeInputsAfterWorking"(boolean0: boolean): $ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder
public "enable"(boolean0: boolean): $ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder
public "recipeDampingValue"(int0: integer): $ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder
public "recipeModifiers"(recipeModifiers0: $RecipeModifier$RecipeModifiers$$Type): $ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder
public "recipeType"(resourceLocation0: $ResourceLocation$$Type): $ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder
}
}

declare module "com.lowdragmc.mbd2.api.capability.recipe.IRecipeCapabilityHolder" {
import { $IRecipeHandler } from "com.lowdragmc.mbd2.api.capability.recipe.IRecipeHandler"
import { $List } from "java.util.List"
import { $RecipeCapability } from "com.lowdragmc.mbd2.api.capability.recipe.RecipeCapability"
import { $IO } from "com.lowdragmc.mbd2.api.capability.recipe.IO"
import { $Table } from "com.google.common.collect.Table"

export interface $IRecipeCapabilityHolder {
"getChanceTier"(): integer
"getRecipeCapabilitiesProxy"(): $Table<$IO, $RecipeCapability<any>, $List<$IRecipeHandler<any>>>
"hasProxies"(): boolean
get "chanceTier"(): integer
get "recipeCapabilitiesProxy"(): $Table<$IO, $RecipeCapability<any>, $List<$IRecipeHandler<any>>>
}

export namespace $IRecipeCapabilityHolder {
const probejs$$marker: never
}
export abstract class $IRecipeCapabilityHolder$$Static implements $IRecipeCapabilityHolder {
}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDRecipeTypeEvents$RecipeTypeEventJS" {
import { $RecipeTypeEvent, $RecipeTypeEvent$$Type } from "com.lowdragmc.mbd2.api.recipe.event.RecipeTypeEvent"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"

export class $MBDRecipeTypeEvents$RecipeTypeEventJS<E extends $RecipeTypeEvent = $RecipeTypeEvent> extends $EventJS {
readonly "event": E

constructor(e0: E)

public "getEvent"(): E
}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineUIEventJS" {
import { $MBDMachineEvents$MachineEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineEventJS"
import { $MachineUIEvent, $MachineUIEvent$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineUIEvent"

export class $MBDMachineEvents$MachineUIEventJS extends $MBDMachineEvents$MachineEventJS<$MachineUIEvent> {
constructor(machineUIEvent0: $MachineUIEvent$$Type)

}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.StateMachine" {
import { $MachineState, $MachineState$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.MachineState"
import { $ITagSerializable } from "com.lowdragmc.lowdraglib.syncdata.ITagSerializable"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $MachineState$Builder } from "com.lowdragmc.mbd2.common.machine.definition.config.MachineState$Builder"
import { $IRenderer$$Type } from "com.lowdragmc.lowdraglib.client.renderer.IRenderer"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $StateMachine<T extends $MachineState = $MachineState> implements $ITagSerializable<$CompoundTag> {
constructor(t0: T)

public static "createDefault"<T extends $MachineState>(supplier0: $Supplier$$Type<$MachineState$Builder<T>>): T
public static "createMultiblockDefault"<T extends $MachineState>(supplier0: $Supplier$$Type<$MachineState$Builder<T>>, iRenderer1: $IRenderer$$Type): T
public static "createSingleDefault"<T extends $MachineState>(supplier0: $Supplier$$Type<$MachineState$Builder<T>>, iRenderer1: $IRenderer$$Type): T
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getRootState"(): T
public "getState"(string0: string): T
public "hasState"(string0: string): boolean
public "initStateMachine"(): void
get "rootState"(): T
}
}

declare module "com.lowdragmc.mbd2.common.trait.AutoIO" {
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $IO, $IO$$Type } from "com.lowdragmc.mbd2.api.capability.recipe.IO"

export class $AutoIO {
constructor()

public "getBackIO"(): $IO
public "getBottomIO"(): $IO
public "getFrontIO"(): $IO
public "getIO"(direction0: $Direction$$Type, direction1: $Direction$$Type): $IO
public "getInterval"(): integer
public "getLeftIO"(): $IO
public "getRightIO"(): $IO
public "getTopIO"(): $IO
public "setBackIO"(iO0: $IO$$Type): void
public "setBottomIO"(iO0: $IO$$Type): void
public "setFrontIO"(iO0: $IO$$Type): void
public "setInterval"(int0: integer): void
public "setLeftIO"(iO0: $IO$$Type): void
public "setRightIO"(iO0: $IO$$Type): void
public "setTopIO"(iO0: $IO$$Type): void
get "backIO"(): $IO
get "bottomIO"(): $IO
get "frontIO"(): $IO
get "interval"(): integer
get "leftIO"(): $IO
get "rightIO"(): $IO
get "topIO"(): $IO
set "backIO"(value: $IO$$Type)
set "bottomIO"(value: $IO$$Type)
set "frontIO"(value: $IO$$Type)
set "interval"(value: integer)
set "leftIO"(value: $IO$$Type)
set "rightIO"(value: $IO$$Type)
set "topIO"(value: $IO$$Type)
}
}

declare module "com.lowdragmc.mbd2.api.registry.MBDRegistries" {
import { $MBDRegistry$String } from "com.lowdragmc.mbd2.api.registry.MBDRegistry$String"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $MBDRecipeType } from "com.lowdragmc.mbd2.api.recipe.MBDRecipeType"
import { $TraitDefinition } from "com.lowdragmc.mbd2.common.trait.TraitDefinition"
import { $RecipeCondition } from "com.lowdragmc.mbd2.api.recipe.RecipeCondition"
import { $MBDMachineDefinition } from "com.lowdragmc.mbd2.common.machine.definition.MBDMachineDefinition"
import { $RecipeCapability } from "com.lowdragmc.mbd2.api.capability.recipe.RecipeCapability"
import { $Class } from "java.lang.Class"
import { $AnnotationDetector$Wrapper } from "com.lowdragmc.lowdraglib.gui.editor.runtime.AnnotationDetector$Wrapper"
import { $MBDRegistry$RL } from "com.lowdragmc.mbd2.api.registry.MBDRegistry$RL"
import { $MBDGadgetsItem } from "com.lowdragmc.mbd2.common.item.MBDGadgetsItem"

export class $MBDRegistries {
static readonly "MACHINE_DEFINITIONS": $MBDRegistry$RL<$MBDMachineDefinition>
static readonly "MACHINE_DEFINITION_TYPES": $MBDRegistry$String<$AnnotationDetector$Wrapper<$LDLRegister, $MBDMachineDefinition>>
static readonly "RECIPE_CAPABILITIES": $MBDRegistry$String<$RecipeCapability<any>>
static readonly "RECIPE_CONDITIONS": $MBDRegistry$String<$Class<$RecipeCondition>>
static readonly "RECIPE_TYPES": $MBDRegistry$RL<$MBDRecipeType>
static readonly "TRAIT_DEFINITION_TYPES": $MBDRegistry$String<$AnnotationDetector$Wrapper<$LDLRegister, $TraitDefinition>>

constructor()

public static "FAKE_MACHINE"(): $MBDMachineDefinition
public static "GADGETS_ITEM"(): $MBDGadgetsItem
}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineTickEventJS" {
import { $MachineTickEvent, $MachineTickEvent$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineTickEvent"
import { $MBDMachineEvents$MachineEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineEventJS"

export class $MBDMachineEvents$MachineTickEventJS extends $MBDMachineEvents$MachineEventJS<$MachineTickEvent> {
constructor(machineTickEvent0: $MachineTickEvent$$Type)

}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDRecipeTypeEvents$RecipeUIEventJS" {
import { $RecipeUIEvent, $RecipeUIEvent$$Type } from "com.lowdragmc.mbd2.api.recipe.event.RecipeUIEvent"
import { $MBDRecipeTypeEvents$RecipeTypeEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDRecipeTypeEvents$RecipeTypeEventJS"

export class $MBDRecipeTypeEvents$RecipeUIEventJS extends $MBDRecipeTypeEvents$RecipeTypeEventJS<$RecipeUIEvent> {
constructor(recipeUIEvent0: $RecipeUIEvent$$Type)

}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineFuelBurningFinishEvent" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $MBDRecipe, $MBDRecipe$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipe"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MachineEvent } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"

export class $MachineFuelBurningFinishEvent extends $MachineEvent {
readonly "recipe": $MBDRecipe

constructor()
constructor(mBDMachine0: $MBDMachine$$Type, mBDRecipe1: $MBDRecipe$$Type)

public "getChatComponent"(): $Component
public "getRecipe"(): $MBDRecipe
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.integration.geckolib.GeckolibRenderer" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $StaticAnimatable } from "com.lowdragmc.mbd2.integration.geckolib.StaticAnimatable"
import { $LDLRegisterClient } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegisterClient"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Animation } from "com.lowdragmc.mbd2.integration.geckolib.Animation"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $GeoModel } from "software.bernie.geckolib.model.GeoModel"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $ItemDisplayContext, $ItemDisplayContext$$Type } from "net.minecraft.world.item.ItemDisplayContext"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $ISerializableRenderer, $ISerializableRenderer$$Type } from "com.lowdragmc.lowdraglib.client.renderer.ISerializableRenderer"
import { $GeoRenderLayer } from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import { $Map } from "java.util.Map"
import { $Vector3f$$Type } from "org.joml.Vector3f"
import { $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $GeoQuad$$Type } from "software.bernie.geckolib.cache.object.GeoQuad"
import { $Matrix4f, $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $BakedModel, $BakedModel$$Type } from "net.minecraft.client.resources.model.BakedModel"
import { $GeoBone$$Type } from "software.bernie.geckolib.cache.object.GeoBone"
import { $GeoRenderer } from "software.bernie.geckolib.renderer.GeoRenderer"
import { $RawAnimation } from "software.bernie.geckolib.core.animation.RawAnimation"
import { $Component } from "net.minecraft.network.chat.Component"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $BakedQuad } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $Color } from "software.bernie.geckolib.core.object.Color"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $GeoCube$$Type } from "software.bernie.geckolib.cache.object.GeoCube"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $GeoAnimatable, $GeoAnimatable$$Type } from "software.bernie.geckolib.core.animatable.GeoAnimatable"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $GeckolibRendererModel } from "com.lowdragmc.mbd2.integration.geckolib.GeckolibRendererModel"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"

export class $GeckolibRenderer implements $ISerializableRenderer, $GeoRenderer<$GeoAnimatable> {
static readonly "DEFAULT_ANIMATION_PATH": $ResourceLocation
static readonly "DEFAULT_ITEM_TRANSFORM_MODEL": $ResourceLocation
static readonly "DEFAULT_MODEL_PATH": $ResourceLocation
static readonly "DEFAULT_TEXTURE_PATH": $ResourceLocation

constructor()
constructor(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type)

public "actuallyRender"(poseStack0: $PoseStack$$Type, geoAnimatable1: $GeoAnimatable$$Type, bakedGeoModel2: $BakedGeoModel$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, float7: float, int8: integer, int9: integer, float10: float, float11: float, float12: float, float13: float): void
public "applyRenderLayers"(poseStack0: $PoseStack$$Type, geoAnimatable1: $GeoAnimatable$$Type, bakedGeoModel2: $BakedGeoModel$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
public "applyRenderLayersForBone"(poseStack0: $PoseStack$$Type, geoAnimatable1: $GeoAnimatable$$Type, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
public "buildConfigurator"(configuratorGroup0: $ConfiguratorGroup$$Type): void
public "checkAnimationAvailable"(): boolean
public "checkModelAvailable"(): boolean
public "checkTextureAvailable"(): boolean
public "createPreview"(father: $ConfiguratorGroup$$Type): void
public "createVerticesOfQuad"(geoQuad0: $GeoQuad$$Type, matrix4f1: $Matrix4f$$Type, vector3f2: $Vector3f$$Type, vertexConsumer3: $VertexConsumer$$Type, int4: integer, int5: integer, float6: float, float7: float, float8: float, float9: float): void
public "defaultRender"(poseStack0: $PoseStack$$Type, geoAnimatable1: $GeoAnimatable$$Type, multiBufferSource2: $MultiBufferSource$$Type, renderType3: $RenderType$$Type, vertexConsumer4: $VertexConsumer$$Type, float5: float, float6: float, int7: integer): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $ISerializableRenderer
public "doPostRenderCleanup"(): void
public "fireCompileRenderLayersEvent"(): void
public "firePostRenderEvent"(poseStack0: $PoseStack$$Type, bakedGeoModel1: $BakedGeoModel$$Type, multiBufferSource2: $MultiBufferSource$$Type, float3: float, int4: integer): void
public "firePreRenderEvent"(poseStack0: $PoseStack$$Type, bakedGeoModel1: $BakedGeoModel$$Type, multiBufferSource2: $MultiBufferSource$$Type, float3: float, int4: integer): boolean
public "getAnimatable"(): $GeoAnimatable
public "getAnimatableFromMachine"(mBDMachine0: $MBDMachine$$Type): $GeoAnimatable
public "getAnimationCache"(): $Map<string, $RawAnimation>
public "getAnimationPath"(): $ResourceLocation
public "getAnimations"(): $List<$Animation>
public "getBlockRenderTranslations"(): $Matrix4f
public "getChatComponent"(): $Component
public "getCurrentItemStack"(): $ItemStack
public "getGeoModel"(): $GeoModel<$GeoAnimatable>
public "getInstanceId"(geoAnimatable0: $GeoAnimatable$$Type): long
public "getItemModel"(): $BakedModel
public "getModel"(): $GeckolibRendererModel
public "getModelPath"(): $ResourceLocation
public "getModelRenderTranslations"(): $Matrix4f
public "getMotionAnimThreshold"(geoAnimatable0: $GeoAnimatable$$Type): float
public "getPackedOverlay"(geoAnimatable0: $GeoAnimatable$$Type, float1: float, float2: float): integer
/** @deprecated */
public "getPackedOverlay"(geoAnimatable0: $GeoAnimatable$$Type, float1: float): integer
public "getParticleTexture"(): $TextureAtlasSprite
public "getRawAnimation"(string0: string): $RawAnimation
/** @deprecated */
public "getRegisterUI"(): $LDLRegister
public "getRegisterUIClient"(): $LDLRegisterClient
public "getRenderColor"(geoAnimatable0: $GeoAnimatable$$Type, float1: float, int2: integer): $Color
public "getRenderLayers"(): $List<$GeoRenderLayer<$GeoAnimatable>>
public "getRenderPerspective"(): $ItemDisplayContext
public "getRenderType"(geoAnimatable0: $GeoAnimatable$$Type, resourceLocation1: $ResourceLocation$$Type, multiBufferSource2: $MultiBufferSource$$Type, float3: float): $RenderType
public "getScaleHeight"(): float
public "getScaleWidth"(): float
public "getStaticAnimatable"(): $StaticAnimatable
public "getTextureLocation"(geoAnimatable0: $GeoAnimatable$$Type): $ResourceLocation
public "getTexturePath"(): $ResourceLocation
public "getTranslateKey"(): string
/** Client only, do not use in server scripts */
public "getViewDistance"(): integer
public "group"(): string
public "hasAnimation"(string0: string): boolean
public "hasTESR"(blockEntity0: $BlockEntity$$Type): boolean
public "initRenderer"(): void
/** Client only, do not use in server scripts */
public "isGlobalRenderer"(blockEntity: $BlockEntity$$Type): boolean
/** Client only, do not use in server scripts */
public "isGui3d"(): boolean
public "isLDLRegister"(): boolean
public "isRaw"(): boolean
public "isScheduleStateAnimation"(): boolean
public "isUseEntityGuiLighting"(): boolean
public "isUseGlowingLayer"(): boolean
public "isUseTranslucent"(): boolean
public "name"(): string
/** Client only, do not use in server scripts */
public "onAdditionalModel"(registry: $Consumer$$Type<$ResourceLocation$$Type>): void
public "onPrepareTextureAtlas"(resourceLocation0: $ResourceLocation$$Type, consumer1: $Consumer$$Type<$ResourceLocation$$Type>): void
public "postRender"(poseStack0: $PoseStack$$Type, geoAnimatable1: $GeoAnimatable$$Type, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, vertexConsumer4: $VertexConsumer$$Type, boolean5: boolean, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
public "preApplyRenderLayers"(poseStack0: $PoseStack$$Type, geoAnimatable1: $GeoAnimatable$$Type, bakedGeoModel2: $BakedGeoModel$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
public "preRender"(poseStack0: $PoseStack$$Type, geoAnimatable1: $GeoAnimatable$$Type, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, vertexConsumer4: $VertexConsumer$$Type, boolean5: boolean, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
/** Client only, do not use in server scripts */
public "reBakeCustomQuads"(): boolean
/** Client only, do not use in server scripts */
public "reBakeCustomQuadsOffset"(): float
public "reRender"(bakedGeoModel0: $BakedGeoModel$$Type, poseStack1: $PoseStack$$Type, multiBufferSource2: $MultiBufferSource$$Type, geoAnimatable3: $GeoAnimatable$$Type, renderType4: $RenderType$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
/** Client only, do not use in server scripts */
public "registerEvent"(): void
public "render"(blockEntity0: $BlockEntity$$Type, float1: float, poseStack2: $PoseStack$$Type, multiBufferSource3: $MultiBufferSource$$Type, int4: integer, int5: integer): void
public "renderChildBones"(poseStack0: $PoseStack$$Type, geoAnimatable1: $GeoAnimatable$$Type, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, float7: float, int8: integer, int9: integer, float10: float, float11: float, float12: float, float13: float): void
public "renderCube"(poseStack0: $PoseStack$$Type, geoCube1: $GeoCube$$Type, vertexConsumer2: $VertexConsumer$$Type, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float): void
public "renderCubesOfBone"(poseStack0: $PoseStack$$Type, geoBone1: $GeoBone$$Type, vertexConsumer2: $VertexConsumer$$Type, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float): void
public "renderFinal"(poseStack0: $PoseStack$$Type, geoAnimatable1: $GeoAnimatable$$Type, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, vertexConsumer4: $VertexConsumer$$Type, float5: float, int6: integer, int7: integer, float8: float, float9: float, float10: float, float11: float): void
public "renderItem"(itemStack0: $ItemStack$$Type, itemDisplayContext1: $ItemDisplayContext$$Type, boolean2: boolean, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer, int6: integer, bakedModel7: $BakedModel$$Type): void
/** Client only, do not use in server scripts */
public "renderModel"(level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, side: $Direction$$Type, rand: $RandomSource$$Type): $List<$BakedQuad>
public "renderRecursively"(poseStack0: $PoseStack$$Type, geoAnimatable1: $GeoAnimatable$$Type, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, float7: float, int8: integer, int9: integer, float10: float, float11: float, float12: float, float13: float): void
public "scaleModelForRender"(float0: float, float1: float, poseStack2: $PoseStack$$Type, geoAnimatable3: $GeoAnimatable$$Type, bakedGeoModel4: $BakedGeoModel$$Type, boolean5: boolean, float6: float, int7: integer, int8: integer): void
public "serializeNBT"(): $CompoundTag
public static "serializeWrapper"(renderer: $ISerializableRenderer$$Type): $CompoundTag
public "setAnimationPath"(resourceLocation0: $ResourceLocation$$Type): void
public "setItemTransformModel"(resourceLocation0: $ResourceLocation$$Type): void
public "setModelPath"(resourceLocation0: $ResourceLocation$$Type): void
public "setTexturePath"(resourceLocation0: $ResourceLocation$$Type): void
/** Client only, do not use in server scripts */
public "shouldRender"(blockEntity: $BlockEntity$$Type, cameraPos: $Vec3$$Type): boolean
public "updateAnimatedTextureFrame"(geoAnimatable0: $GeoAnimatable$$Type): void
/** Client only, do not use in server scripts */
public "useAO"(): boolean
/** Client only, do not use in server scripts */
public "useAO"(state: $BlockState$$Type): boolean
/** Client only, do not use in server scripts */
public "useBlockLight"(stack: $ItemStack$$Type): boolean
get "animatable"(): $GeoAnimatable
get "animationCache"(): $Map<string, $RawAnimation>
get "animationPath"(): $ResourceLocation
get "animations"(): $List<$Animation>
get "blockRenderTranslations"(): $Matrix4f
get "chatComponent"(): $Component
get "currentItemStack"(): $ItemStack
get "geoModel"(): $GeoModel<$GeoAnimatable>
get "itemModel"(): $BakedModel
get "model"(): $GeckolibRendererModel
get "modelPath"(): $ResourceLocation
get "modelRenderTranslations"(): $Matrix4f
get "particleTexture"(): $TextureAtlasSprite
get "registerUI"(): $LDLRegister
get "registerUIClient"(): $LDLRegisterClient
get "renderLayers"(): $List<$GeoRenderLayer<$GeoAnimatable>>
get "renderPerspective"(): $ItemDisplayContext
get "scaleHeight"(): float
get "scaleWidth"(): float
get "staticAnimatable"(): $StaticAnimatable
get "texturePath"(): $ResourceLocation
get "translateKey"(): string
get "viewDistance"(): integer
get "gui3d"(): boolean
get "lDLRegister"(): boolean
get "raw"(): boolean
get "scheduleStateAnimation"(): boolean
get "useEntityGuiLighting"(): boolean
get "useGlowingLayer"(): boolean
get "useTranslucent"(): boolean
set "animationPath"(value: $ResourceLocation$$Type)
set "itemTransformModel"(value: $ResourceLocation$$Type)
set "modelPath"(value: $ResourceLocation$$Type)
set "texturePath"(value: $ResourceLocation$$Type)
}
}

declare module "com.lowdragmc.mbd2.core.mixins.RecipeManagerAccessor" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Recipe } from "net.minecraft.world.item.crafting.Recipe"
import { $Map } from "java.util.Map"
import { $RecipeType } from "net.minecraft.world.item.crafting.RecipeType"

export interface $RecipeManagerAccessor {
"getRawRecipes"(): $Map<$RecipeType<any>, $Map<$ResourceLocation, $Recipe<any>>>
get "rawRecipes"(): $Map<$RecipeType<any>, $Map<$ResourceLocation, $Recipe<any>>>
}

export namespace $RecipeManagerAccessor {
const probejs$$marker: never
}
export abstract class $RecipeManagerAccessor$$Static implements $RecipeManagerAccessor {
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineCustomDataUpdateEvent" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MachineEvent } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"

export class $MachineCustomDataUpdateEvent extends $MachineEvent {
readonly "newValue": $CompoundTag
readonly "oldValue": $CompoundTag

constructor()
constructor(mBDMachine0: $MBDMachine$$Type, compoundTag1: $CompoundTag$$Type, compoundTag2: $CompoundTag$$Type)

public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.core.mixins.LevelRendererAccessor" {
import { $RenderBuffers } from "net.minecraft.client.renderer.RenderBuffers"

export interface $LevelRendererAccessor {
"getRenderBuffers"(): $RenderBuffers
get "renderBuffers"(): $RenderBuffers
}

export namespace $LevelRendererAccessor {
const probejs$$marker: never
}
export abstract class $LevelRendererAccessor$$Static implements $LevelRendererAccessor {
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.toggle.ToggleCreativeTab" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Component } from "net.minecraft.network.chat.Component"
import { $ToggleObject } from "com.lowdragmc.mbd2.common.machine.definition.config.toggle.ToggleObject"

export class $ToggleCreativeTab extends $ToggleObject<$ResourceLocation> {
static readonly "DEFAULT": $ResourceLocation

constructor()
constructor(boolean0: boolean)
constructor(resourceLocation0: $ResourceLocation$$Type)
constructor(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean)

public "buildConfigurator"(configuratorGroup0: $ConfiguratorGroup$$Type): void
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "getValue"(): $ResourceLocation
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
public "setValue"(resourceLocation0: $ResourceLocation$$Type): void
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "value"(): $ResourceLocation
get "lDLRegister"(): boolean
set "value"(value: $ResourceLocation$$Type)
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineBeforeRecipeWorkingEvent" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $MBDRecipe, $MBDRecipe$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipe"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MachineEvent } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"

export class $MachineBeforeRecipeWorkingEvent extends $MachineEvent {
readonly "recipe": $MBDRecipe

constructor()
constructor(mBDMachine0: $MBDMachine$$Type, mBDRecipe1: $MBDRecipe$$Type)

public "getChatComponent"(): $Component
public "getRecipe"(): $MBDRecipe
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineStateChangedEventJS" {
import { $MBDMachineEvents$MachineEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineEventJS"
import { $MachineStateChangedEvent, $MachineStateChangedEvent$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineStateChangedEvent"

export class $MBDMachineEvents$MachineStateChangedEventJS extends $MBDMachineEvents$MachineEventJS<$MachineStateChangedEvent> {
constructor(machineStateChangedEvent0: $MachineStateChangedEvent$$Type)

}
}

declare module "com.lowdragmc.mbd2.integration.geckolib.Animation" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $AnimationStage, $AnimationStage$$Type } from "com.lowdragmc.mbd2.integration.geckolib.AnimationStage"
import { $List, $List$$Type } from "java.util.List"
import { $ITagSerializable } from "com.lowdragmc.lowdraglib.syncdata.ITagSerializable"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $RawAnimation } from "software.bernie.geckolib.core.animation.RawAnimation"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IConfigurable } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurable"

export class $Animation implements $IConfigurable, $ITagSerializable<$CompoundTag> {
constructor()

public "buildConfigurator"(configuratorGroup0: $ConfiguratorGroup$$Type): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getChatComponent"(): $Component
public "getName"(): string
public "getRegisterUI"(): $LDLRegister
public "getStages"(): $List<$AnimationStage>
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
public "setName"(string0: string): $Animation
public "setStages"(list0: $List$$Type<$AnimationStage$$Type>): $Animation
public "toRawAnimation"(): $RawAnimation
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "stages"(): $List<$AnimationStage>
get "translateKey"(): string
get "lDLRegister"(): boolean
set "stages"(value: $List$$Type<$AnimationStage$$Type>)
}
}

declare module "com.lowdragmc.mbd2.common.trait.ICapabilityProviderTrait" {
import { $List$$Type } from "java.util.List"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $IO, $IO$$Type } from "com.lowdragmc.mbd2.api.capability.recipe.IO"
import { $Capability } from "net.minecraftforge.common.capabilities.Capability"

export interface $ICapabilityProviderTrait<T = any> {
"getCapContent"(iO0: $IO$$Type): T
"getCapability"(): $Capability<T>
"getCapabilityIO"(direction0: $Direction$$Type): $IO
"mergeContents"(list0: $List$$Type<T>): T
get "capability"(): $Capability<T>
}

export namespace $ICapabilityProviderTrait {
const probejs$$marker: never
}
export abstract class $ICapabilityProviderTrait$$Static<T = any> implements $ICapabilityProviderTrait<T> {
}
}

declare module "com.lowdragmc.mbd2.api.registry.MBDRegistry$String" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $MBDRegistry } from "com.lowdragmc.mbd2.api.registry.MBDRegistry"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Spliterator } from "java.util.Spliterator"

export class $MBDRegistry$String<V = any> extends $MBDRegistry<string, V> {
constructor(resourceLocation0: $ResourceLocation$$Type)

public "codec"(): $Codec<V>
public "forEach"(consumer0: $Consumer$$Type<V>): void
public "loadFromNBT"(tag0: $Tag$$Type): V
public "readBuf"(friendlyByteBuf0: $FriendlyByteBuf$$Type): V
public "spliterator"(): $Spliterator<V>
}
}

declare module "com.lowdragmc.mbd2.api.recipe.RecipeCondition" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $MBDRecipe$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipe"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IConfigurable } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurable"
import { $RecipeLogic$$Type } from "com.lowdragmc.mbd2.api.recipe.RecipeLogic"
import { $Class$$Type } from "java.lang.Class"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $IGuiTexture } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"

export class $RecipeCondition implements $IConfigurable {
constructor()

public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "copy"(): $RecipeCondition
public static "create"(class0: $Class$$Type<$RecipeCondition$$Type>): $RecipeCondition
public "deserialize"(jsonObject0: $JsonObject$$Type): $RecipeCondition
public "fromNBT"(compoundTag0: $CompoundTag$$Type): $RecipeCondition
public "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $RecipeCondition
public "getChatComponent"(): $Component
public "getIcon"(): $IGuiTexture
public "getRegisterUI"(): $LDLRegister
public "getTooltips"(): $Component
public "getTranslateKey"(): string
public "getTranslationKey"(): string
public "getType"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "isOr"(): boolean
public "isReverse"(): boolean
public "name"(): string
public "serialize"(): $JsonObject
public "setReverse"(boolean0: boolean): $RecipeCondition
public "test"(mBDRecipe0: $MBDRecipe$$Type, recipeLogic1: $RecipeLogic$$Type): boolean
public "toNBT"(): $CompoundTag
public "toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "chatComponent"(): $Component
get "icon"(): $IGuiTexture
get "registerUI"(): $LDLRegister
get "tooltips"(): $Component
get "translateKey"(): string
get "translationKey"(): string
get "type"(): string
get "lDLRegister"(): boolean
get "or"(): boolean
get "reverse"(): boolean
set "reverse"(value: boolean)
}
}

declare module "com.lowdragmc.mbd2.common.trait.CapabilityIO" {
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $IO, $IO$$Type } from "com.lowdragmc.mbd2.api.capability.recipe.IO"

export class $CapabilityIO {
constructor()

public "getBackIO"(): $IO
public "getBottomIO"(): $IO
public "getFrontIO"(): $IO
public "getIO"(direction0: $Direction$$Type, direction1: $Direction$$Type): $IO
public "getInternal"(): $IO
public "getLeftIO"(): $IO
public "getRightIO"(): $IO
public "getTopIO"(): $IO
public "setBackIO"(iO0: $IO$$Type): void
public "setBottomIO"(iO0: $IO$$Type): void
public "setFrontIO"(iO0: $IO$$Type): void
public "setInternal"(iO0: $IO$$Type): void
public "setLeftIO"(iO0: $IO$$Type): void
public "setRightIO"(iO0: $IO$$Type): void
public "setTopIO"(iO0: $IO$$Type): void
get "backIO"(): $IO
get "bottomIO"(): $IO
get "frontIO"(): $IO
get "internal"(): $IO
get "leftIO"(): $IO
get "rightIO"(): $IO
get "topIO"(): $IO
set "backIO"(value: $IO$$Type)
set "bottomIO"(value: $IO$$Type)
set "frontIO"(value: $IO$$Type)
set "internal"(value: $IO$$Type)
set "leftIO"(value: $IO$$Type)
set "rightIO"(value: $IO$$Type)
set "topIO"(value: $IO$$Type)
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineRecipeStatusChangedEvent" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Component } from "net.minecraft.network.chat.Component"
import { $RecipeLogic$Status, $RecipeLogic$Status$$Type } from "com.lowdragmc.mbd2.api.recipe.RecipeLogic$Status"
import { $MachineEvent } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"

export class $MachineRecipeStatusChangedEvent extends $MachineEvent {
readonly "newStatus": $RecipeLogic$Status
readonly "oldStatus": $RecipeLogic$Status

constructor(mBDMachine0: $MBDMachine$$Type, status1: $RecipeLogic$Status$$Type, status2: $RecipeLogic$Status$$Type)
constructor()

public "getChatComponent"(): $Component
public "getNewStatus"(): $RecipeLogic$Status
public "getOldStatus"(): $RecipeLogic$Status
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineOnRecipeWaitingEvent" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $MBDRecipe, $MBDRecipe$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipe"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MachineEvent } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"

export class $MachineOnRecipeWaitingEvent extends $MachineEvent {
readonly "recipe": $MBDRecipe

constructor()
constructor(mBDMachine0: $MBDMachine$$Type, mBDRecipe1: $MBDRecipe$$Type)

public "getChatComponent"(): $Component
public "getRecipe"(): $MBDRecipe
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.ConfigMachineSettings$SignalConnection" {
import { $Direction$$Type } from "net.minecraft.core.Direction"

export class $ConfigMachineSettings$SignalConnection {
constructor()

public "backConnection"(boolean0: boolean): $ConfigMachineSettings$SignalConnection
public "backConnection"(): boolean
public "bottomConnection"(): boolean
public "bottomConnection"(boolean0: boolean): $ConfigMachineSettings$SignalConnection
public "frontConnection"(boolean0: boolean): $ConfigMachineSettings$SignalConnection
public "frontConnection"(): boolean
public "getConnection"(direction0: $Direction$$Type, direction1: $Direction$$Type): boolean
public "leftConnection"(boolean0: boolean): $ConfigMachineSettings$SignalConnection
public "leftConnection"(): boolean
public "rightConnection"(boolean0: boolean): $ConfigMachineSettings$SignalConnection
public "rightConnection"(): boolean
public "topConnection"(boolean0: boolean): $ConfigMachineSettings$SignalConnection
public "topConnection"(): boolean
}
}

declare module "com.lowdragmc.mbd2.common.graphprocessor.MachineEventGraphProcessor" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $BaseNode, $BaseNode$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseNode"
import { $TriggerProcessor } from "com.lowdragmc.lowdraglib.gui.graphprocessor.processor.TriggerProcessor"
import { $BaseGraph$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.BaseGraph"
import { $Class$$Type } from "java.lang.Class"
import { $MachineEvent$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent"
import { $Spliterator } from "java.util.Spliterator"

export class $MachineEventGraphProcessor extends $TriggerProcessor {
constructor(class0: $Class$$Type<$MachineEvent$$Type>, baseGraph1: $BaseGraph$$Type)

public "forEach"(consumer0: $Consumer$$Type<$BaseNode$$Type>): void
public "postEvent"(machineEvent0: $MachineEvent$$Type): void
public "spliterator"(): $Spliterator<$BaseNode>
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.MBDMachineDefinition$ConfigPartSettingsFactory" {
import { $ConfigPartSettings } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigPartSettings"
import { $Supplier } from "java.util.function.Supplier"

export interface $MBDMachineDefinition$ConfigPartSettingsFactory extends $Supplier<$ConfigPartSettings> {
"get"(): $ConfigPartSettings
}

export namespace $MBDMachineDefinition$ConfigPartSettingsFactory {
const probejs$$marker: never
}
export abstract class $MBDMachineDefinition$ConfigPartSettingsFactory$$Static implements $MBDMachineDefinition$ConfigPartSettingsFactory {
}
}

declare module "com.lowdragmc.mbd2.common.trait.ToggleAutoIO" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Component } from "net.minecraft.network.chat.Component"
import { $AutoIO } from "com.lowdragmc.mbd2.common.trait.AutoIO"
import { $IToggleConfigurable } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IToggleConfigurable"

export class $ToggleAutoIO extends $AutoIO implements $IToggleConfigurable {
constructor()

public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isEnable"(): boolean
public "isLDLRegister"(): boolean
public "name"(): string
public "setEnable"(boolean0: boolean): void
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "enable"(): boolean
get "lDLRegister"(): boolean
set "enable"(value: boolean)
}
}

declare module "com.lowdragmc.mbd2.api.blockentity.IMachineBlockEntity" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $IRPCBlockEntity } from "com.lowdragmc.lowdraglib.syncdata.blockentity.IRPCBlockEntity"
import { $SPacketRPCMethodPayload } from "com.lowdragmc.lowdraglib.networking.s2c.SPacketRPCMethodPayload"
import { $RPCMethodMeta } from "com.lowdragmc.lowdraglib.syncdata.field.RPCMethodMeta"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $IManaged$$Type } from "com.lowdragmc.lowdraglib.syncdata.IManaged"
import { $IManagedStorage } from "com.lowdragmc.lowdraglib.syncdata.IManagedStorage"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockEntityType } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Nameable } from "net.minecraft.world.Nameable"
import { $IMachine } from "com.lowdragmc.mbd2.api.machine.IMachine"
import { $IAutoPersistBlockEntity } from "com.lowdragmc.lowdraglib.syncdata.blockentity.IAutoPersistBlockEntity"
import { $IRef } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"
import { $Level } from "net.minecraft.world.level.Level"
import { $IAsyncAutoSyncBlockEntity } from "com.lowdragmc.lowdraglib.syncdata.blockentity.IAsyncAutoSyncBlockEntity"

export interface $IMachineBlockEntity extends $IAsyncAutoSyncBlockEntity, $IRPCBlockEntity, $IAutoPersistBlockEntity, $Nameable {
"asyncTick"(periodID: long): void
"defaultServerTick"(): void
"generateRpcPacket"(managed: $IManaged$$Type, methodName: string, ...args: any[]): $SPacketRPCMethodPayload
"getBlockEntityType"(): $BlockEntityType<any>
"getCurrentPos"(): $BlockPos
"getCustomName"(): $Component
"getDisplayName"(): $Component
"getMetaMachine"(): $IMachine
"getName"(): $Component
"getNonLazyFields"(): $IRef[]
"getOffset"(): long
"getOffsetTimer"(): long
"getRPCMethod"(managed: $IManaged$$Type, methodName: string): $RPCMethodMeta
"getRootStorage"(): $IManagedStorage
"getSelf"(): $BlockEntity
"getSyncTag"(): string
"hasCustomName"(): boolean
"isAsyncSyncing"(): boolean
"level"(): $Level
"loadCustomPersistedData"(compoundTag0: $CompoundTag$$Type): void
"loadManagedPersistentData"(tag: $CompoundTag$$Type): void
"notifyBlockUpdate"(): void
"onInValid"(): void
"onValid"(): void
"pos"(): $BlockPos
"readCustomSyncData"(tag: $CompoundTag$$Type): void
"rpcToPlayer"(managed: $IManaged$$Type, player: $ServerPlayer$$Type, methodName: string, ...args: any[]): void
"rpcToTracking"(managed: $IManaged$$Type, methodName: string, ...args: any[]): void
"saveCustomPersistedData"(compoundTag0: $CompoundTag$$Type, boolean1: boolean): void
"saveManagedPersistentData"(tag: $CompoundTag$$Type, forDrop: boolean): void
"scheduleRenderUpdate"(): void
"self"(): $BlockEntity
"setAsyncSyncing"(syncing: boolean): void
"syncNow"(force: boolean): void
"useAsyncThread"(): boolean
"writeCustomSyncData"(tag: $CompoundTag$$Type): void
get "blockEntityType"(): $BlockEntityType<any>
get "currentPos"(): $BlockPos
get "customName"(): $Component
get "displayName"(): $Component
get "metaMachine"(): $IMachine
get "name"(): $Component
get "nonLazyFields"(): $IRef[]
get "offset"(): long
get "offsetTimer"(): long
get "rootStorage"(): $IManagedStorage
get "syncTag"(): string
get "asyncSyncing"(): boolean
set "asyncSyncing"(value: boolean)
}

export namespace $IMachineBlockEntity {
const probejs$$marker: never
}
export abstract class $IMachineBlockEntity$$Static implements $IMachineBlockEntity {
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.MBDMachineDefinition$Builder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ConfigItemProperties$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigItemProperties"
import { $MachineState$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.MachineState"
import { $MBDMachineDefinition$ConfigMachineSettingsFactory$$Type } from "com.lowdragmc.mbd2.common.machine.definition.MBDMachineDefinition$ConfigMachineSettingsFactory"
import { $ConfigRecipeLogicSettings$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigRecipeLogicSettings"
import { $MBDMachineDefinition } from "com.lowdragmc.mbd2.common.machine.definition.MBDMachineDefinition"
import { $MBDMachineDefinition$ConfigPartSettingsFactory$$Type } from "com.lowdragmc.mbd2.common.machine.definition.MBDMachineDefinition$ConfigPartSettingsFactory"
import { $ConfigBlockProperties$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigBlockProperties"

export class $MBDMachineDefinition$Builder {
public "blockProperties"(configBlockProperties0: $ConfigBlockProperties$$Type): $MBDMachineDefinition$Builder
public "build"(): $MBDMachineDefinition
public "id"(resourceLocation0: $ResourceLocation$$Type): $MBDMachineDefinition$Builder
public "itemProperties"(configItemProperties0: $ConfigItemProperties$$Type): $MBDMachineDefinition$Builder
public "machineSettings"(configMachineSettingsFactory0: $MBDMachineDefinition$ConfigMachineSettingsFactory$$Type): $MBDMachineDefinition$Builder
public "partSettings"(configPartSettingsFactory0: $MBDMachineDefinition$ConfigPartSettingsFactory$$Type): $MBDMachineDefinition$Builder
public "recipeLogicSettings"(configRecipeLogicSettings0: $ConfigRecipeLogicSettings$$Type): $MBDMachineDefinition$Builder
public "rootState"(machineState0: $MachineState$$Type): $MBDMachineDefinition$Builder
}
}

declare module "com.lowdragmc.mbd2.api.recipe.content.Content" {
import { $List$$Type } from "java.util.List"
import { $ContentModifier$$Type } from "com.lowdragmc.mbd2.api.recipe.content.ContentModifier"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $RecipeCapability$$Type } from "com.lowdragmc.mbd2.api.capability.recipe.RecipeCapability"
import { $IGuiTexture } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"

export class $Content {
constructor(object0: any, boolean1: boolean, float2: float, float3: float, string4: string, string5: string)
constructor(object0: any, boolean1: boolean, float2: float, float3: float)

public "appendTooltip"(list0: $List$$Type<$Component$$Type>): void
public "copy"(recipeCapability0: $RecipeCapability$$Type<any>, contentModifier1: $ContentModifier$$Type): $Content
public "createOverlay"(): $IGuiTexture
public "deepCopy"(recipeCapability0: $RecipeCapability$$Type<any>, contentModifier1: $ContentModifier$$Type): $Content
/** Client only, do not use in server scripts */
public "drawSmallString"(guiGraphics0: $GuiGraphics$$Type, float1: float, float2: float, int3: integer, int4: integer, int5: integer, string6: string, int7: integer): void
public "getContent"(): any
get "chance"(): float
set "chance"(value: float)
get "content"(): any
set "content"(value: any)
get "perTick"(): boolean
set "perTick"(value: boolean)
get "slotName"(): string
set "slotName"(value: string)
get "tierChanceBoost"(): float
set "tierChanceBoost"(value: float)
get "uiName"(): string
set "uiName"(value: string)
}
}

declare module "com.lowdragmc.mbd2.integration.geckolib.StaticAnimatable" {
import { $AnimatableManager$ControllerRegistrar$$Type } from "software.bernie.geckolib.core.animation.AnimatableManager$ControllerRegistrar"
import { $AnimatableInstanceCache } from "software.bernie.geckolib.core.animatable.instance.AnimatableInstanceCache"
import { $GeoAnimatable } from "software.bernie.geckolib.core.animatable.GeoAnimatable"

export class $StaticAnimatable implements $GeoAnimatable {
constructor()

public "animatableCacheOverride"(): $AnimatableInstanceCache
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "getBoneResetTime"(): double
public "getTick"(object0: any): double
public "registerControllers"(controllerRegistrar0: $AnimatableManager$ControllerRegistrar$$Type): void
public "shouldPlayAnimsWhileGamePaused"(): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "boneResetTime"(): double
}
}

declare module "com.lowdragmc.mbd2.api.recipe.RecipeLogic$Status" {
import { $Enum } from "java.lang.Enum"

export class $RecipeLogic$Status extends $Enum<$RecipeLogic$Status> {
static readonly "IDLE": $RecipeLogic$Status
static readonly "SUSPEND": $RecipeLogic$Status
static readonly "WAITING": $RecipeLogic$Status
static readonly "WORKING": $RecipeLogic$Status

public static "valueOf"(string0: string): $RecipeLogic$Status
public static "values"(): $RecipeLogic$Status[]
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineOnRecipeWorkingEvent" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $MBDRecipe, $MBDRecipe$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipe"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MachineEvent } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"

export class $MachineOnRecipeWorkingEvent extends $MachineEvent {
readonly "progress": integer
readonly "recipe": $MBDRecipe

constructor(mBDMachine0: $MBDMachine$$Type, mBDRecipe1: $MBDRecipe$$Type, int2: integer)
constructor()

public "getChatComponent"(): $Component
public "getProgress"(): integer
public "getRecipe"(): $MBDRecipe
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineOnRecipeWaitingEventJS" {
import { $MachineOnRecipeWaitingEvent, $MachineOnRecipeWaitingEvent$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineOnRecipeWaitingEvent"
import { $MBDMachineEvents$MachineEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineEventJS"

export class $MBDMachineEvents$MachineOnRecipeWaitingEventJS extends $MBDMachineEvents$MachineEventJS<$MachineOnRecipeWaitingEvent> {
constructor(machineOnRecipeWaitingEvent0: $MachineOnRecipeWaitingEvent$$Type)

}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineOnConsumeInputsAfterWorkingEvent" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $MBDRecipe, $MBDRecipe$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipe"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MachineEvent } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"

export class $MachineOnConsumeInputsAfterWorkingEvent extends $MachineEvent {
readonly "recipe": $MBDRecipe

constructor(mBDMachine0: $MBDMachine$$Type, mBDRecipe1: $MBDRecipe$$Type)
constructor()

public "getChatComponent"(): $Component
public "getRecipe"(): $MBDRecipe
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.api.recipe.ingredient.FluidIngredient" {
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $FluidIngredient$Value, $FluidIngredient$Value$$Type } from "com.lowdragmc.mbd2.api.recipe.ingredient.FluidIngredient$Value"
import { $Stream$$Type } from "java.util.stream.Stream"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $FluidStack, $FluidStack$$Type } from "com.lowdragmc.lowdraglib.side.fluid.FluidStack"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $FluidIngredient implements $Predicate<$FluidStack> {
static readonly "EMPTY": $FluidIngredient

constructor(stream0: $Stream$$Type<$FluidIngredient$Value$$Type>, long1: long, compoundTag2: $CompoundTag$$Type)

public "and"(predicate0: $Predicate$$Type<$FluidStack$$Type>): $Predicate<$FluidStack>
public "copy"(long0: long): $FluidIngredient
public "copy"(): $FluidIngredient
public static "fromJson"(jsonElement0: $JsonElement$$Type, boolean1: boolean): $FluidIngredient
public static "fromJson"(jsonElement0: $JsonElement$$Type): $FluidIngredient
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $FluidIngredient
public static "fromValues"(stream0: $Stream$$Type<$FluidIngredient$Value$$Type>, long1: long, compoundTag2: $CompoundTag$$Type): $FluidIngredient
public "getAmount"(): long
public "getNbt"(): $CompoundTag
public "getStacks"(): $FluidStack[]
public "isEmpty"(): boolean
public static "isEqual"<T>(object0: any): $Predicate<T>
public "negate"(): $Predicate<$FluidStack>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public static "of"(tagKey0: $TagKey$$Type<$Fluid$$Type>, long1: long, compoundTag2: $CompoundTag$$Type): $FluidIngredient
public static "of"(): $FluidIngredient
public static "of"(tagKey0: $TagKey$$Type<$Fluid$$Type>, long1: long): $FluidIngredient
public static "of"(stream0: $Stream$$Type<$Fluid$$Type>, long1: long, compoundTag2: $CompoundTag$$Type): $FluidIngredient
public static "of"(...fluidStack0s: $FluidStack$$Type[]): $FluidIngredient
public static "of"(long0: long, ...fluid1s: $Fluid$$Type[]): $FluidIngredient
public "or"(predicate0: $Predicate$$Type<$FluidStack$$Type>): $Predicate<$FluidStack>
public "setAmount"(long0: long): void
public "setNbt"(compoundTag0: $CompoundTag$$Type): void
public "test"(fluidStack0: $FluidStack$$Type): boolean
public "toJson"(): $JsonElement
public "toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "stacks"(): $FluidStack[]
set "stacks"(value: $FluidStack$$Type[])
get "values"(): $FluidIngredient$Value[]
set "values"(value: $FluidIngredient$Value$$Type[])
get "amount"(): long
get "nbt"(): $CompoundTag
get "empty"(): boolean
set "amount"(value: long)
set "nbt"(value: $CompoundTag$$Type)
}
}

declare module "com.lowdragmc.mbd2.common.gui.editor.MachineEditor" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $LDLRegisterClient } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegisterClient"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $ConfigPanel$Tab } from "com.lowdragmc.lowdraglib.gui.editor.ui.ConfigPanel$Tab"
import { $ILDLRegisterClient } from "com.lowdragmc.lowdraglib.gui.editor.ILDLRegisterClient"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"
import { $Editor } from "com.lowdragmc.lowdraglib.gui.editor.ui.Editor"

export class $MachineEditor extends $Editor implements $ILDLRegisterClient {
static readonly "BASIC": $ConfigPanel$Tab
static readonly "RESOURCE": $ConfigPanel$Tab
static readonly "SECOND": $ConfigPanel$Tab

constructor()

public "canDragIn"(dragging: any): boolean
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
/** @deprecated */
public "getRegisterUI"(): $LDLRegister
public "getRegisterUIClient"(): $LDLRegisterClient
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "isLDLRegister"(): boolean
public "name"(): string
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "registerUIClient"(): $LDLRegisterClient
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineRightClickEventJS" {
import { $MBDMachineEvents$MachineEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineEventJS"
import { $MachineRightClickEvent, $MachineRightClickEvent$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineRightClickEvent"

export class $MBDMachineEvents$MachineRightClickEventJS extends $MBDMachineEvents$MachineEventJS<$MachineRightClickEvent> {
constructor(machineRightClickEvent0: $MachineRightClickEvent$$Type)

}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineRemovedEvent" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MachineEvent } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"

export class $MachineRemovedEvent extends $MachineEvent {
constructor(mBDMachine0: $MBDMachine$$Type)
constructor()

public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineStructureFormedEventJS" {
import { $MBDMachineEvents$MachineEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineEventJS"
import { $MachineStructureFormedEvent, $MachineStructureFormedEvent$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineStructureFormedEvent"

export class $MBDMachineEvents$MachineStructureFormedEventJS extends $MBDMachineEvents$MachineEventJS<$MachineStructureFormedEvent> {
constructor(machineStructureFormedEvent0: $MachineStructureFormedEvent$$Type)

}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.ConfigBlockProperties" {
import { $StateMachine$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.StateMachine"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IPersistedSerializable } from "com.lowdragmc.lowdraglib.syncdata.IPersistedSerializable"
import { $ConfigBlockProperties$RenderTypes } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigBlockProperties$RenderTypes"
import { $BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $RotationState } from "com.lowdragmc.mbd2.api.block.RotationState"
import { $IConfigurable } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurable"
import { $ConfigBlockProperties$BlockSound } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigBlockProperties$BlockSound"
import { $ConfigBlockProperties$ConfigBlockPropertiesBuilder } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigBlockProperties$ConfigBlockPropertiesBuilder"

export class $ConfigBlockProperties implements $IPersistedSerializable, $IConfigurable {
public "apply"(stateMachine0: $StateMachine$$Type<any>, properties1: $BlockBehaviour$Properties$$Type): $BlockBehaviour$Properties
public "blockSound"(): $ConfigBlockProperties$BlockSound
public "buildConfigurator"(configuratorGroup0: $ConfiguratorGroup$$Type): void
public static "builder"(): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "canBeWaterlogged"(): boolean
public "canOcclude"(): boolean
public "collisionShapeFullBlock"(): boolean
public "deserializeNBT"(tag: $CompoundTag$$Type): void
public "destroyTime"(): float
public "emissive"(): boolean
public "explosionResistance"(): float
public "forceSolid"(): boolean
public "friction"(): float
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "hasCollision"(): boolean
public "ignitedByLava"(): boolean
public "isAir"(): boolean
public "isLDLRegister"(): boolean
public "isSuffocating"(): boolean
public "jumpFactor"(): float
public "name"(): string
public "noParticleOnBreak"(): boolean
public "renderTypes"(): $ConfigBlockProperties$RenderTypes
public "replaceable"(): boolean
public "rotationState"(): $RotationState
public "speedFactor"(): float
public "transparent"(): boolean
public "useAO"(): boolean
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "air"(): boolean
get "lDLRegister"(): boolean
get "suffocating"(): boolean
}
}

declare module "com.lowdragmc.mbd2.common.trait.TraitDefinition" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $ITrait } from "com.lowdragmc.mbd2.common.trait.ITrait"
import { $IRenderer } from "com.lowdragmc.lowdraglib.client.renderer.IRenderer"
import { $IGuiTexture } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $IConfigurable } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurable"
import { $IAutoPersistedSerializable } from "com.lowdragmc.lowdraglib.syncdata.IAutoPersistedSerializable"
import { $IMachine$$Type } from "com.lowdragmc.mbd2.api.machine.IMachine"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"
import { $MachineTraitPanel$$Type } from "com.lowdragmc.mbd2.common.gui.editor.machine.MachineTraitPanel"

export class $TraitDefinition implements $IConfigurable, $IAutoPersistedSerializable {
constructor()

public "allowMultiple"(): boolean
public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "createTrait"(mBDMachine0: $MBDMachine$$Type): $ITrait
public static "deserializeDefinition"(compoundTag0: $CompoundTag$$Type): $TraitDefinition
public "deserializeNBT"(tag: $CompoundTag$$Type): void
public "getBESRenderer"(iMachine0: $IMachine$$Type): $IRenderer
public "getChatComponent"(): $Component
public "getIcon"(): $IGuiTexture
public "getName"(): string
public "getPriority"(): integer
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
/** Client only, do not use in server scripts */
public "renderAfterWorldInTraitPanel"(machineTraitPanel0: $MachineTraitPanel$$Type): void
public static "serializeDefinition"(traitDefinition0: $TraitDefinition$$Type): $CompoundTag
public "setName"(string0: string): void
public "setPriority"(int0: integer): void
get "chatComponent"(): $Component
get "icon"(): $IGuiTexture
get "priority"(): integer
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
set "priority"(value: integer)
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineUIEvent" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MachineEvent } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent"
import { $WidgetGroup, $WidgetGroup$$Type } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $MachineUIEvent extends $MachineEvent {
constructor(mBDMachine0: $MBDMachine$$Type, widgetGroup1: $WidgetGroup$$Type, player2: $Player$$Type)
constructor()

public "getChatComponent"(): $Component
public "getPlayer"(): $Player
public "getRegisterUI"(): $LDLRegister
public "getRoot"(): $WidgetGroup
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
public "setPlayer"(player0: $Player$$Type): void
public "setRoot"(widgetGroup0: $WidgetGroup$$Type): void
get "player"(): $Player
set "player"(value: $Player$$Type)
get "root"(): $WidgetGroup
set "root"(value: $WidgetGroup$$Type)
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineUseCatalystEventJS" {
import { $MachineUseCatalystEvent, $MachineUseCatalystEvent$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineUseCatalystEvent"
import { $MBDMachineEvents$MachineEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineEventJS"

export class $MBDMachineEvents$MachineUseCatalystEventJS extends $MBDMachineEvents$MachineEventJS<$MachineUseCatalystEvent> {
constructor(machineUseCatalystEvent0: $MachineUseCatalystEvent$$Type)

}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.MachineState" {
import { $StateMachine } from "com.lowdragmc.mbd2.common.machine.definition.config.StateMachine"
import { $ToggleLightValue } from "com.lowdragmc.mbd2.common.machine.definition.config.toggle.ToggleLightValue"
import { $AABB, $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $Component } from "net.minecraft.network.chat.Component"
import { $IPersistedSerializable } from "com.lowdragmc.lowdraglib.syncdata.IPersistedSerializable"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $ToggleAABB } from "com.lowdragmc.mbd2.common.machine.definition.config.toggle.ToggleAABB"
import { $IRenderer, $IRenderer$$Type } from "com.lowdragmc.lowdraglib.client.renderer.IRenderer"
import { $MachineState$Builder } from "com.lowdragmc.mbd2.common.machine.definition.config.MachineState$Builder"
import { $ToggleShape } from "com.lowdragmc.mbd2.common.machine.definition.config.toggle.ToggleShape"
import { $BooleanSupplier$$Type } from "java.util.function.BooleanSupplier"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $ToggleRenderer } from "com.lowdragmc.mbd2.common.machine.definition.config.toggle.ToggleRenderer"
import { $ToggleMachineSound } from "com.lowdragmc.mbd2.common.machine.definition.config.toggle.ToggleMachineSound"
import { $List, $List$$Type } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $IConfigurable } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurable"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Map } from "java.util.Map"
import { $MachineSound } from "com.lowdragmc.mbd2.client.MachineSound"
import { $Comparable } from "java.lang.Comparable"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"

export class $MachineState implements $IConfigurable, $IPersistedSerializable, $Comparable<$MachineState> {
constructor(string0: string, list1: $List$$Type<$MachineState$$Type>, iRenderer2: $IRenderer$$Type, voxelShape3: $VoxelShape$$Type, integer4: integer, aABB5: $AABB$$Type)

public "addChild"(string0: string): $MachineState
public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public static "builder"(): $MachineState$Builder<$MachineState>
public "children"(): $List<$MachineState>
public "compareTo"(machineState0: $MachineState$$Type): integer
/** Client only, do not use in server scripts */
public "createMachineSound"(blockPos0: $BlockPos$$Type, booleanSupplier1: $BooleanSupplier$$Type): $MachineSound
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getChatComponent"(): $Component
public "getDepth"(): integer
public "getLightLevel"(): integer
/** Client only, do not use in server scripts */
public "getRealRenderer"(): $IRenderer
public "getRegisterUI"(): $LDLRegister
/** Client only, do not use in server scripts */
public "getRenderer"(): $IRenderer
public "getRenderingBox"(direction0: $Direction$$Type): $AABB
public "getShape"(direction0: $Direction$$Type): $VoxelShape
public "getTranslateKey"(): string
public "group"(): string
public "isGlobalVisible"(): boolean
public "isGlobalVisible"(boolean0: boolean): $MachineState
public "isLDLRegister"(): boolean
public "isRoot"(): boolean
public "lightLevel"(): $ToggleLightValue
public "machineSound"(): $ToggleMachineSound
public "name"(): string
public "parent"(): $MachineState
public "removeChild"(machineState0: $MachineState$$Type): void
public "renderer"(): $ToggleRenderer
public "renderingBox"(): $ToggleAABB
public "renderingBoxCache"(): $Map<$Direction, $AABB>
public "renderingRadius"(int0: integer): $MachineState
public "renderingRadius"(): integer
public "shape"(): $ToggleShape
public "shapeCache"(): $Map<$Direction, $VoxelShape>
public "stateMachine"(): $StateMachine<any>
get "chatComponent"(): $Component
get "depth"(): integer
get "realRenderer"(): $IRenderer
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "globalVisible"(): boolean
get "lDLRegister"(): boolean
get "root"(): boolean
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineAfterRecipeWorkingEvent" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $MBDRecipe, $MBDRecipe$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipe"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MachineEvent } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"

export class $MachineAfterRecipeWorkingEvent extends $MachineEvent {
readonly "recipe": $MBDRecipe

constructor()
constructor(mBDMachine0: $MBDMachine$$Type, mBDRecipe1: $MBDRecipe$$Type)

public "getChatComponent"(): $Component
public "getRecipe"(): $MBDRecipe
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineRecipeModifyEventBeforeJS" {
import { $MBDMachineEvents$MachineEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineEventJS"
import { $MachineRecipeModifyEvent$Before, $MachineRecipeModifyEvent$Before$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineRecipeModifyEvent$Before"

export class $MBDMachineEvents$MachineRecipeModifyEventBeforeJS extends $MBDMachineEvents$MachineEventJS<$MachineRecipeModifyEvent$Before> {
constructor(before0: $MachineRecipeModifyEvent$Before$$Type)

}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.toggle.ToggleRenderer" {
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Component } from "net.minecraft.network.chat.Component"
import { $ToggleObject } from "com.lowdragmc.mbd2.common.machine.definition.config.toggle.ToggleObject"
import { $IRenderer, $IRenderer$$Type } from "com.lowdragmc.lowdraglib.client.renderer.IRenderer"

export class $ToggleRenderer extends $ToggleObject<$IRenderer> {
constructor()
constructor(boolean0: boolean)
constructor(iRenderer0: $IRenderer$$Type)
constructor(iRenderer0: $IRenderer$$Type, boolean1: boolean)

public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
public "setValue"(iRenderer0: $IRenderer$$Type): void
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
set "value"(value: $IRenderer$$Type)
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineRightClickEvent" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Component } from "net.minecraft.network.chat.Component"
import { $BlockHitResult, $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $InteractionResult, $InteractionResult$$Type } from "net.minecraft.world.InteractionResult"
import { $MachineEvent } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent"
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $MachineRightClickEvent extends $MachineEvent {
readonly "hand": $InteractionHand
readonly "heldItem": $ItemStack
readonly "hit": $BlockHitResult
readonly "player": $Player

constructor(mBDMachine0: $MBDMachine$$Type, player1: $Player$$Type, interactionHand2: $InteractionHand$$Type, blockHitResult3: $BlockHitResult$$Type)
constructor()

public "getChatComponent"(): $Component
public "getHand"(): $InteractionHand
public "getHeldItem"(): $ItemStack
public "getHit"(): $BlockHitResult
public "getInteractionResult"(): $InteractionResult
public "getPlayer"(): $Player
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
public "setInteractionResult"(interactionResult0: $InteractionResult$$Type): void
get "interactionResult"(): $InteractionResult
set "interactionResult"(value: $InteractionResult$$Type)
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineClientTickEventJS" {
import { $MBDMachineEvents$MachineEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineEventJS"
import { $MachineClientTickEvent, $MachineClientTickEvent$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineClientTickEvent"

export class $MBDMachineEvents$MachineClientTickEventJS extends $MBDMachineEvents$MachineEventJS<$MachineClientTickEvent> {
constructor(machineClientTickEvent0: $MachineClientTickEvent$$Type)

}
}

declare module "com.lowdragmc.mbd2.api.recipe.content.IContentSerializer" {
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $ContentModifier$$Type } from "com.lowdragmc.mbd2.api.recipe.content.ContentModifier"
import { $Tag, $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Content, $Content$$Type } from "com.lowdragmc.mbd2.api.recipe.content.Content"

export interface $IContentSerializer<T = any> {
"copyInner"(t0: T): T
"copyWithModifier"(t0: T, contentModifier1: $ContentModifier$$Type): T
"deepCopyInner"(t0: T): T
"fromJson"(jsonElement0: $JsonElement$$Type): T
"fromJsonContent"(jsonElement0: $JsonElement$$Type): $Content
"fromNBT"(tag0: $Tag$$Type): T
"fromNBT"(compoundTag0: $CompoundTag$$Type): $Content
"fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): T
"fromNetworkContent"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $Content
"of"(object0: any): T
"toJson"(t0: T): $JsonElement
"toJsonContent"(content0: $Content$$Type): $JsonElement
"toNBT"(content0: $Content$$Type): $CompoundTag
"toNBT"(t0: T): $Tag
"toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type, t1: T): void
"toNetworkContent"(friendlyByteBuf0: $FriendlyByteBuf$$Type, content1: $Content$$Type): void
}

export namespace $IContentSerializer {
const probejs$$marker: never
}
export abstract class $IContentSerializer$$Static<T = any> implements $IContentSerializer<T> {
}
}

declare module "com.lowdragmc.mbd2.api.recipe.event.RecipeTypeEvent" {
import { $MBDRecipeType, $MBDRecipeType$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipeType"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ILDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.ILDLRegister"

export class $RecipeTypeEvent extends $Event implements $ILDLRegister {
readonly "recipeType": $MBDRecipeType

constructor(mBDRecipeType0: $MBDRecipeType$$Type)
constructor()

public "getChatComponent"(): $Component
public "getRecipeType"(): $MBDRecipeType
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
public "postCustomEvent"(): $RecipeTypeEvent
public "postKubeJSEvent"(): $RecipeTypeEvent
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineStateChangedEvent" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MachineEvent } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent"
import { $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"

export class $MachineStateChangedEvent extends $MachineEvent {
readonly "newState": string
readonly "oldState": string

constructor(mBDMachine0: $MBDMachine$$Type, string1: string, string2: string)
constructor()

public "getChatComponent"(): $Component
public "getNewState"(): string
public "getOldState"(): string
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.common.gui.editor.machine.MachineTraitPanel" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $MachineEditor$$Type } from "com.lowdragmc.mbd2.common.gui.editor.MachineEditor"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $MachineScenePanel } from "com.lowdragmc.mbd2.common.gui.editor.machine.MachineScenePanel"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $MachineTraitPanel extends $MachineScenePanel {
constructor(machineEditor0: $MachineEditor$$Type)

public "canDragIn"(dragging: any): boolean
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "isLDLRegister"(): boolean
public "name"(): string
public "onPanelDeselected"(): void
public "onPanelSelected"(): void
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.api.recipe.event.RecipeUIEvent" {
import { $MBDRecipeType$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipeType"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $MBDRecipe, $MBDRecipe$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipe"
import { $Component } from "net.minecraft.network.chat.Component"
import { $RecipeTypeEvent } from "com.lowdragmc.mbd2.api.recipe.event.RecipeTypeEvent"
import { $WidgetGroup, $WidgetGroup$$Type } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"

export class $RecipeUIEvent extends $RecipeTypeEvent {
constructor(mBDRecipeType0: $MBDRecipeType$$Type, mBDRecipe1: $MBDRecipe$$Type, widgetGroup2: $WidgetGroup$$Type)
constructor()

public "getChatComponent"(): $Component
public "getRecipe"(): $MBDRecipe
public "getRegisterUI"(): $LDLRegister
public "getRoot"(): $WidgetGroup
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
get "recipe"(): $MBDRecipe
set "recipe"(value: $MBDRecipe$$Type)
get "root"(): $WidgetGroup
set "root"(value: $WidgetGroup$$Type)
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineFuelRecipeModifyEventJS" {
import { $MBDMachineEvents$MachineEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineEventJS"
import { $MachineFuelRecipeModifyEvent, $MachineFuelRecipeModifyEvent$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineFuelRecipeModifyEvent"

export class $MBDMachineEvents$MachineFuelRecipeModifyEventJS extends $MBDMachineEvents$MachineEventJS<$MachineFuelRecipeModifyEvent> {
constructor(machineFuelRecipeModifyEvent0: $MachineFuelRecipeModifyEvent$$Type)

}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDRecipeTypeEvents$TransferProxyRecipeEventJS" {
import { $MBDRecipeTypeEvents$RecipeTypeEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDRecipeTypeEvents$RecipeTypeEventJS"
import { $TransferProxyRecipeEvent, $TransferProxyRecipeEvent$$Type } from "com.lowdragmc.mbd2.api.recipe.event.TransferProxyRecipeEvent"

export class $MBDRecipeTypeEvents$TransferProxyRecipeEventJS extends $MBDRecipeTypeEvents$RecipeTypeEventJS<$TransferProxyRecipeEvent> {
constructor(transferProxyRecipeEvent0: $TransferProxyRecipeEvent$$Type)

}
}

declare module "com.lowdragmc.mbd2.common.event.MBDRegistryEvent$MBDRecipeType" {
import { $MBDRecipeType$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipeType"
import { $MBDRegistryEvent } from "com.lowdragmc.mbd2.common.event.MBDRegistryEvent"
import { $Class$$Type } from "java.lang.Class"
import { $File$$Type } from "java.io.File"

export class $MBDRegistryEvent$MBDRecipeType extends $MBDRegistryEvent {
constructor()

public "register"(mBDRecipeType0: $MBDRecipeType$$Type): void
public "registerFromFile"(file0: $File$$Type): void
public "registerFromResource"(class0: $Class$$Type<any>, string1: string): void
}
}

declare module "com.lowdragmc.mbd2.common.event.MBDRegistryEvent$RecipeCapability" {
import { $MBDRegistryEvent } from "com.lowdragmc.mbd2.common.event.MBDRegistryEvent"
import { $RecipeCapability$$Type } from "com.lowdragmc.mbd2.api.capability.recipe.RecipeCapability"

export class $MBDRegistryEvent$RecipeCapability extends $MBDRegistryEvent {
constructor()

public "register"(string0: string, recipeCapability1: $RecipeCapability$$Type<any>): void
}
}

declare module "com.lowdragmc.mbd2.api.capability.recipe.IRecipeHandlerTrait" {
import { $IRecipeHandler } from "com.lowdragmc.mbd2.api.capability.recipe.IRecipeHandler"
import { $List, $List$$Type } from "java.util.List"
import { $MBDRecipe$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipe"
import { $RecipeCapability } from "com.lowdragmc.mbd2.api.capability.recipe.RecipeCapability"
import { $IO, $IO$$Type } from "com.lowdragmc.mbd2.api.capability.recipe.IO"
import { $Set } from "java.util.Set"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $ISubscription } from "com.lowdragmc.lowdraglib.syncdata.ISubscription"
import { $IRecipeCapabilityHolder$$Type } from "com.lowdragmc.mbd2.api.capability.recipe.IRecipeCapabilityHolder"

export interface $IRecipeHandlerTrait<K = any> extends $IRecipeHandler<K> {
"addChangedListener"(runnable0: $Runnable$$Type): $ISubscription
"compatibleWith"(iO0: $IO$$Type): boolean
"copyContent"(object0: any): K
"getHandlerIO"(): $IO
"getRecipeCapability"(): $RecipeCapability<K>
"getSlotNames"(): $Set<string>
"handleRecipe"(iO0: $IO$$Type, mBDRecipe1: $MBDRecipe$$Type, list2: $List$$Type<any>, string3: string, boolean4: boolean): $List<K>
"handleRecipeInner"(iO0: $IO$$Type, mBDRecipe1: $MBDRecipe$$Type, list2: $List$$Type<K>, string3: string, boolean4: boolean): $List<K>
"isDistinct"(): boolean
"postWorking"(iRecipeCapabilityHolder0: $IRecipeCapabilityHolder$$Type, iO1: $IO$$Type, mBDRecipe2: $MBDRecipe$$Type): void
"preWorking"(iRecipeCapabilityHolder0: $IRecipeCapabilityHolder$$Type, iO1: $IO$$Type, mBDRecipe2: $MBDRecipe$$Type): void
get "handlerIO"(): $IO
get "recipeCapability"(): $RecipeCapability<K>
get "slotNames"(): $Set<string>
get "distinct"(): boolean
}

export namespace $IRecipeHandlerTrait {
const probejs$$marker: never
}
export abstract class $IRecipeHandlerTrait$$Static<K = any> implements $IRecipeHandlerTrait<K> {
}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineCustomKeyframeEventJS" {
import { $MachineCustomKeyframeEvent, $MachineCustomKeyframeEvent$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineCustomKeyframeEvent"
import { $MBDMachineEvents$MachineEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineEventJS"

export class $MBDMachineEvents$MachineCustomKeyframeEventJS extends $MBDMachineEvents$MachineEventJS<$MachineCustomKeyframeEvent> {
constructor(machineCustomKeyframeEvent0: $MachineCustomKeyframeEvent$$Type)

}
}

declare module "com.lowdragmc.mbd2.api.machine.IMachine" {
import { $IRecipeHandler } from "com.lowdragmc.mbd2.api.capability.recipe.IRecipeHandler"
import { $ContentModifier } from "com.lowdragmc.mbd2.api.recipe.content.ContentModifier"
import { $MBDRecipe, $MBDRecipe$$Type } from "com.lowdragmc.mbd2.api.recipe.MBDRecipe"
import { $Component } from "net.minecraft.network.chat.Component"
import { $RecipeLogic } from "com.lowdragmc.mbd2.api.recipe.RecipeLogic"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $IO } from "com.lowdragmc.mbd2.api.capability.recipe.IO"
import { $RecipeLogic$Status$$Type } from "com.lowdragmc.mbd2.api.recipe.RecipeLogic$Status"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $IRecipeCapabilityHolder } from "com.lowdragmc.mbd2.api.capability.recipe.IRecipeCapabilityHolder"
import { $MBDRecipeType } from "com.lowdragmc.mbd2.api.recipe.MBDRecipeType"
import { $List } from "java.util.List"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $RecipeCapability } from "com.lowdragmc.mbd2.api.capability.recipe.RecipeCapability"
import { $Optional } from "java.util.Optional"
import { $Level } from "net.minecraft.world.level.Level"
import { $Table } from "com.google.common.collect.Table"

export interface $IMachine extends $IRecipeCapabilityHolder {
"afterWorking"(): void
"alwaysReSearchRecipe"(): boolean
"alwaysTryModifyRecipe"(): boolean
"applyParallel"(mBDRecipe0: $MBDRecipe$$Type, int1: integer): $MBDRecipe
"beforeWorking"(mBDRecipe0: $MBDRecipe$$Type): boolean
"consumeInputsAfterWorking"(mBDRecipe0: $MBDRecipe$$Type): boolean
"dampingWhenWaiting"(): boolean
"doModifyRecipe"(mBDRecipe0: $MBDRecipe$$Type): $MBDRecipe
"getBlockState"(): $BlockState
"getChanceTier"(): integer
"getCustomName"(): $Component
"getFrontFacing"(): $Optional<$Direction>
"getHolder"(): $BlockEntity
"getLevel"(): $Level
"getMachineLevel"(): integer
"getMaxParallel"(mBDRecipe0: $MBDRecipe$$Type): $ContentModifier
"getModifiedRecipe"(mBDRecipe0: $MBDRecipe$$Type): $MBDRecipe
"getOffset"(): long
"getOffsetTimer"(): long
"getPos"(): $BlockPos
"getRecipeCapabilitiesProxy"(): $Table<$IO, $RecipeCapability<any>, $List<$IRecipeHandler<any>>>
"getRecipeDampingValue"(): integer
"getRecipeLogic"(): $RecipeLogic
"getRecipeType"(): $MBDRecipeType
"hasFrontFacing"(): boolean
"hasProxies"(): boolean
"isFacingValid"(direction0: $Direction$$Type): boolean
"isInValid"(): boolean
"loadCustomPersistedData"(compoundTag0: $CompoundTag$$Type): void
"markDirty"(): void
"modifyFuelRecipe"(mBDRecipe0: $MBDRecipe$$Type): $MBDRecipe
"notifyBlockUpdate"(): void
"notifyRecipeStatusChanged"(status0: $RecipeLogic$Status$$Type, status1: $RecipeLogic$Status$$Type): void
"onChunkUnloaded"(): void
"onConsumeInputsAfterWorking"(): void
"onFuelBurningFinish"(mBDRecipe0: $MBDRecipe$$Type): void
"onLoad"(): void
"onRecipeFinish"(): void
"onRotated"(direction0: $Direction$$Type, direction1: $Direction$$Type): void
"onUnload"(): void
"onWaiting"(): void
"onWorking"(): boolean
"runRecipeLogic"(): boolean
"saveCustomPersistedData"(compoundTag0: $CompoundTag$$Type, boolean1: boolean): void
"scheduleRenderUpdate"(): void
"setFrontFacing"(direction0: $Direction$$Type): void
get "blockState"(): $BlockState
get "chanceTier"(): integer
get "customName"(): $Component
get "frontFacing"(): $Optional<$Direction>
get "holder"(): $BlockEntity
get "level"(): $Level
get "machineLevel"(): integer
get "offset"(): long
get "offsetTimer"(): long
get "pos"(): $BlockPos
get "recipeCapabilitiesProxy"(): $Table<$IO, $RecipeCapability<any>, $List<$IRecipeHandler<any>>>
get "recipeDampingValue"(): integer
get "recipeLogic"(): $RecipeLogic
get "recipeType"(): $MBDRecipeType
get "inValid"(): boolean
set "frontFacing"(value: $Direction$$Type)
}

export namespace $IMachine {
function ofMachine(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $Optional<$IMachine>
function ofMachine(blockEntity0: $BlockEntity$$Type): $Optional<$IMachine>
}
export abstract class $IMachine$$Static implements $IMachine {
static "ofMachine"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $Optional<$IMachine>
static "ofMachine"(blockEntity0: $BlockEntity$$Type): $Optional<$IMachine>
}
}

declare module "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineEvent" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $List } from "java.util.List"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Map$$Type } from "java.util.Map"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Class$$Type } from "java.lang.Class"
import { $ILDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.ILDLRegister"
import { $MBDMachine, $MBDMachine$$Type } from "com.lowdragmc.mbd2.common.machine.MBDMachine"
import { $ExposedParameter, $ExposedParameter$$Type } from "com.lowdragmc.lowdraglib.gui.graphprocessor.data.parameter.ExposedParameter"

export class $MachineEvent extends $Event implements $ILDLRegister {
readonly "machine": $MBDMachine

constructor(mBDMachine0: $MBDMachine$$Type)
constructor()

public "bindParameters"(map0: $Map$$Type<string, $ExposedParameter$$Type>): void
public "gatherParameters"(map0: $Map$$Type<string, $ExposedParameter$$Type>): void
public "getChatComponent"(): $Component
public static "getExposedParameters"(class0: $Class$$Type<$MachineEvent$$Type>): $List<$ExposedParameter<any>>
public "getMachine"(): $MBDMachine
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "name"(): string
public "postCustomEvent"(): $MachineEvent
public "postKubeJSEvent"(): $MachineEvent
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineRecipeModifyEventAfterJS" {
import { $MachineRecipeModifyEvent$After, $MachineRecipeModifyEvent$After$$Type } from "com.lowdragmc.mbd2.common.machine.definition.config.event.MachineRecipeModifyEvent$After"
import { $MBDMachineEvents$MachineEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents$MachineEventJS"

export class $MBDMachineEvents$MachineRecipeModifyEventAfterJS extends $MBDMachineEvents$MachineEventJS<$MachineRecipeModifyEvent$After> {
constructor(after0: $MachineRecipeModifyEvent$After$$Type)

}
}

