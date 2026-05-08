declare module "dev.architectury.extensions.injected.InjectedEntityTypeExtension" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Holder } from "net.minecraft.core.Holder"
import { $EntityType } from "net.minecraft.world.entity.EntityType"
import { $InjectedRegistryEntryExtension } from "dev.architectury.extensions.injected.InjectedRegistryEntryExtension"

export interface $InjectedEntityTypeExtension extends $InjectedRegistryEntryExtension<$EntityType<any>> {
"arch$holder"(): $Holder<$EntityType<any>>
"arch$registryName"(): $ResourceLocation
}

export namespace $InjectedEntityTypeExtension {
const probejs$$marker: never
}
export abstract class $InjectedEntityTypeExtension$$Static implements $InjectedEntityTypeExtension {
}
}

declare module "dev.architectury.event.Event" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Event<T = any> {
"clearListeners"(): void
"invoker"(): T
"isRegistered"(t0: T): boolean
"register"(t0: T): void
"unregister"(t0: T): void
}

export namespace $Event {
const probejs$$marker: never
}
export abstract class $Event$$Static<T = any> implements $Event<T> {
}
}

declare module "dev.architectury.registry.menu.MenuRegistry$ScreenFactory" {
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Screen } from "net.minecraft.client.gui.screens.Screen"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $MenuAccess } from "net.minecraft.client.gui.screens.inventory.MenuAccess"

export interface $MenuRegistry$ScreenFactory<H extends $AbstractContainerMenu = $AbstractContainerMenu, S extends ($Screen & $MenuAccess<H>) = ($Screen & $MenuAccess<H>)> {
"create"(h0: H, inventory1: $Inventory$$Type, component2: $Component$$Type): S
}

export namespace $MenuRegistry$ScreenFactory {
const probejs$$marker: never
}
export abstract class $MenuRegistry$ScreenFactory$$Static<H extends $AbstractContainerMenu = $AbstractContainerMenu, S extends ($Screen & $MenuAccess<H>) = ($Screen & $MenuAccess<H>)> implements $MenuRegistry$ScreenFactory<H, S> {
}
}

declare module "dev.architectury.registry.registries.RegistrySupplier" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Registry } from "net.minecraft.core.Registry"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"
import { $DeferredSupplier } from "dev.architectury.registry.registries.DeferredSupplier"
import { $Optional } from "java.util.Optional"
import { $Registrar } from "dev.architectury.registry.registries.Registrar"
import { $RegistrarManager } from "dev.architectury.registry.registries.RegistrarManager"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $Supplier$$Type } from "java.util.function.Supplier"

export interface $RegistrySupplier<T = any> extends $DeferredSupplier<T> {
"get"(): T
"getId"(): $ResourceLocation
"getKey"(): $ResourceKey<T>
"getOrNull"(): T
"getRegistrar"(): $Registrar<T>
"getRegistrarManager"(): $RegistrarManager
"getRegistryId"(): $ResourceLocation
"getRegistryKey"(): $ResourceKey<$Registry<T>>
"ifPresent"(action: $Consumer$$Type<T>): void
"ifPresentOrElse"(action: $Consumer$$Type<T>, emptyAction: $Runnable$$Type): void
"isPresent"(): boolean
"listen"(callback: $Consumer$$Type<T>): void
"orElse"(other: T): T
"orElseGet"(supplier: $Supplier$$Type<T>): T
"stream"(): $Stream<T>
"toOptional"(): $Optional<T>
get "id"(): $ResourceLocation
get "key"(): $ResourceKey<T>
get "orNull"(): T
get "registrar"(): $Registrar<T>
get "registrarManager"(): $RegistrarManager
get "registryId"(): $ResourceLocation
get "registryKey"(): $ResourceKey<$Registry<T>>
get "present"(): boolean
}

export namespace $RegistrySupplier {
const probejs$$marker: never
}
export abstract class $RegistrySupplier$$Static<T = any> implements $RegistrySupplier<T> {
}
}

declare module "dev.architectury.hooks.level.biome.EffectsProperties" {
import { $AmbientMoodSettings } from "net.minecraft.world.level.biome.AmbientMoodSettings"
import { $Music } from "net.minecraft.sounds.Music"
import { $Holder } from "net.minecraft.core.Holder"
import { $AmbientParticleSettings } from "net.minecraft.world.level.biome.AmbientParticleSettings"
import { $BiomeSpecialEffects$GrassColorModifier } from "net.minecraft.world.level.biome.BiomeSpecialEffects$GrassColorModifier"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $Optional } from "java.util.Optional"
import { $AmbientAdditionsSettings } from "net.minecraft.world.level.biome.AmbientAdditionsSettings"
import { $OptionalInt } from "java.util.OptionalInt"

export interface $EffectsProperties {
"getAmbientAdditionsSound"(): $Optional<$AmbientAdditionsSettings>
"getAmbientLoopSound"(): $Optional<$Holder<$SoundEvent>>
"getAmbientMoodSound"(): $Optional<$AmbientMoodSettings>
"getAmbientParticle"(): $Optional<$AmbientParticleSettings>
"getBackgroundMusic"(): $Optional<$Music>
"getFogColor"(): integer
"getFoliageColorOverride"(): $OptionalInt
"getGrassColorModifier"(): $BiomeSpecialEffects$GrassColorModifier
"getGrassColorOverride"(): $OptionalInt
"getSkyColor"(): integer
"getWaterColor"(): integer
"getWaterFogColor"(): integer
get "ambientAdditionsSound"(): $Optional<$AmbientAdditionsSettings>
get "ambientLoopSound"(): $Optional<$Holder<$SoundEvent>>
get "ambientMoodSound"(): $Optional<$AmbientMoodSettings>
get "ambientParticle"(): $Optional<$AmbientParticleSettings>
get "backgroundMusic"(): $Optional<$Music>
get "fogColor"(): integer
get "foliageColorOverride"(): $OptionalInt
get "grassColorModifier"(): $BiomeSpecialEffects$GrassColorModifier
get "grassColorOverride"(): $OptionalInt
get "skyColor"(): integer
get "waterColor"(): integer
get "waterFogColor"(): integer
}

export namespace $EffectsProperties {
const probejs$$marker: never
}
export abstract class $EffectsProperties$$Static implements $EffectsProperties {
}
}

declare module "dev.architectury.utils.value.IntValue" {
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $IntConsumer, $IntConsumer$$Type } from "it.unimi.dsi.fastutil.ints.IntConsumer"
import { $IntSupplier } from "java.util.function.IntSupplier"
import { $Value } from "dev.architectury.utils.value.Value"

export interface $IntValue extends $Value<integer>, $IntSupplier, $IntConsumer {
/** @deprecated */
"accept"(integer0: integer): void
"accept"(int0: integer): void
"andThen"(intConsumer0: $IntConsumer$$Type): $IntConsumer
/** @deprecated */
"andThen"(consumer0: $Consumer$$Type<integer>): $Consumer<integer>
"get"(): integer
"getAsInt"(): integer
get "asInt"(): integer
}

export namespace $IntValue {
const probejs$$marker: never
}
export abstract class $IntValue$$Static implements $IntValue {
}
}

declare module "dev.architectury.event.events.common.CommandPerformEvent" {
import { $Throwable, $Throwable$$Type } from "java.lang.Throwable"
import { $EventActor } from "dev.architectury.event.EventActor"
import { $CommandSourceStack, $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $ParseResults, $ParseResults$$Type } from "com.mojang.brigadier.ParseResults"
import { $Event } from "dev.architectury.event.Event"

export class $CommandPerformEvent {
static readonly "EVENT": $Event<$EventActor<$CommandPerformEvent>>

constructor(results: $ParseResults$$Type<$CommandSourceStack$$Type>, throwable: $Throwable$$Type)

public "getResults"(): $ParseResults<$CommandSourceStack>
public "getThrowable"(): $Throwable
public "setResults"(results: $ParseResults$$Type<$CommandSourceStack$$Type>): void
public "setThrowable"(throwable: $Throwable$$Type): void
get "results"(): $ParseResults<$CommandSourceStack>
get "throwable"(): $Throwable
set "results"(value: $ParseResults$$Type<$CommandSourceStack$$Type>)
set "throwable"(value: $Throwable$$Type)
}
}

declare module "dev.architectury.extensions.injected.InjectedGameEventExtension" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Holder } from "net.minecraft.core.Holder"
import { $GameEvent } from "net.minecraft.world.level.gameevent.GameEvent"
import { $InjectedRegistryEntryExtension } from "dev.architectury.extensions.injected.InjectedRegistryEntryExtension"

export interface $InjectedGameEventExtension extends $InjectedRegistryEntryExtension<$GameEvent> {
"arch$holder"(): $Holder<$GameEvent>
"arch$registryName"(): $ResourceLocation
}

export namespace $InjectedGameEventExtension {
const probejs$$marker: never
}
export abstract class $InjectedGameEventExtension$$Static implements $InjectedGameEventExtension {
}
}

declare module "dev.architectury.extensions.injected.InjectedRegistryEntryExtension" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Holder } from "net.minecraft.core.Holder"

export interface $InjectedRegistryEntryExtension<T = any> {
"arch$holder"(): $Holder<T>
"arch$registryName"(): $ResourceLocation
}

export namespace $InjectedRegistryEntryExtension {
const probejs$$marker: never
}
export abstract class $InjectedRegistryEntryExtension$$Static<T = any> implements $InjectedRegistryEntryExtension<T> {
}
}

declare module "dev.architectury.utils.value.Value" {
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $Supplier } from "java.util.function.Supplier"

export interface $Value<T = any> extends $Supplier<T>, $Consumer<T> {
"accept"(t0: T): void
"andThen"(consumer0: $Consumer$$Type<T>): $Consumer<T>
"get"(): T
}

export namespace $Value {
const probejs$$marker: never
}
export abstract class $Value$$Static<T = any> implements $Value<T> {
}
}

declare module "dev.architectury.utils.OptionalSupplier" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"
import { $Optional } from "java.util.Optional"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"

export interface $OptionalSupplier<T = any> extends $Supplier<T> {
"get"(): T
"getOrNull"(): T
"ifPresent"(action: $Consumer$$Type<T>): void
"ifPresentOrElse"(action: $Consumer$$Type<T>, emptyAction: $Runnable$$Type): void
"isPresent"(): boolean
"orElse"(other: T): T
"orElseGet"(supplier: $Supplier$$Type<T>): T
"stream"(): $Stream<T>
"toOptional"(): $Optional<T>
get "orNull"(): T
get "present"(): boolean
}

export namespace $OptionalSupplier {
const probejs$$marker: never
}
export abstract class $OptionalSupplier$$Static<T = any> implements $OptionalSupplier<T> {
}
}

declare module "dev.architectury.extensions.injected.InjectedItemExtension" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Holder } from "net.minecraft.core.Holder"
import { $Item } from "net.minecraft.world.item.Item"
import { $InjectedRegistryEntryExtension } from "dev.architectury.extensions.injected.InjectedRegistryEntryExtension"

export interface $InjectedItemExtension extends $InjectedRegistryEntryExtension<$Item> {
"arch$holder"(): $Holder<$Item>
"arch$registryName"(): $ResourceLocation
}

export namespace $InjectedItemExtension {
const probejs$$marker: never
}
export abstract class $InjectedItemExtension$$Static implements $InjectedItemExtension {
}
}

declare module "dev.architectury.event.CompoundEventResult" {
import { $InteractionResultHolder } from "net.minecraft.world.InteractionResultHolder"
import { $EventResult } from "dev.architectury.event.EventResult"

export class $CompoundEventResult<T = any> {
public "asMinecraft"(): $InteractionResultHolder<T>
public static "interrupt"<T>(value: boolean, object: T): $CompoundEventResult<T>
public static "interruptDefault"<T>(object: T): $CompoundEventResult<T>
public static "interruptFalse"<T>(object: T): $CompoundEventResult<T>
public static "interruptTrue"<T>(object: T): $CompoundEventResult<T>
public "interruptsFurtherEvaluation"(): boolean
public "isEmpty"(): boolean
public "isFalse"(): boolean
public "isPresent"(): boolean
public "isTrue"(): boolean
public "object"(): T
public static "pass"<T>(): $CompoundEventResult<T>
public "result"(): $EventResult
public "value"(): boolean
get "empty"(): boolean
get "false"(): boolean
get "present"(): boolean
get "true"(): boolean
}
}

declare module "dev.architectury.extensions.injected.InjectedBlockExtension" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Holder } from "net.minecraft.core.Holder"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $InjectedRegistryEntryExtension } from "dev.architectury.extensions.injected.InjectedRegistryEntryExtension"

export interface $InjectedBlockExtension extends $InjectedRegistryEntryExtension<$Block> {
"arch$holder"(): $Holder<$Block>
"arch$registryName"(): $ResourceLocation
}

export namespace $InjectedBlockExtension {
const probejs$$marker: never
}
export abstract class $InjectedBlockExtension$$Static implements $InjectedBlockExtension {
}
}

declare module "dev.architectury.extensions.injected.InjectedLiquidBlockExtension" {
import { $FlowingFluid } from "net.minecraft.world.level.material.FlowingFluid"

export interface $InjectedLiquidBlockExtension {
"arch$getFluid"(): $FlowingFluid
}

export namespace $InjectedLiquidBlockExtension {
const probejs$$marker: never
}
export abstract class $InjectedLiquidBlockExtension$$Static implements $InjectedLiquidBlockExtension {
}
}

declare module "dev.architectury.registry.registries.Registrar" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Map$Entry } from "java.util.Map$Entry"
import { $Iterator } from "java.util.Iterator"
import { $Set } from "java.util.Set"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Iterable } from "java.lang.Iterable"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Registry } from "net.minecraft.core.Registry"
import { $Optional } from "java.util.Optional"
import { $RegistrySupplier, $RegistrySupplier$$Type } from "dev.architectury.registry.registries.RegistrySupplier"
import { $Spliterator } from "java.util.Spliterator"

export interface $Registrar<T = any> extends $Iterable<T> {
"byRawId"(int0: integer): T
"contains"(resourceLocation0: $ResourceLocation$$Type): boolean
"containsValue"(t0: T): boolean
"delegate"(resourceLocation0: $ResourceLocation$$Type): $RegistrySupplier<T>
"entrySet"(): $Set<$Map$Entry<$ResourceKey<T>, T>>
"forEach"(consumer0: $Consumer$$Type<T>): void
"get"(resourceLocation0: $ResourceLocation$$Type): T
"getId"(t0: T): $ResourceLocation
"getIds"(): $Set<$ResourceLocation>
"getKey"(t0: T): $Optional<$ResourceKey<T>>
"getRawId"(t0: T): integer
"iterator"(): $Iterator<T>
"key"(): $ResourceKey<$Registry<T>>
"listen"(resourceLocation0: $ResourceLocation$$Type, consumer1: $Consumer$$Type<T>): void
"listen"<R extends T>(supplier: $RegistrySupplier$$Type<R>, callback: $Consumer$$Type<R>): void
"register"<E extends T>(resourceLocation0: $ResourceLocation$$Type, supplier1: $Supplier$$Type<E>): $RegistrySupplier<E>
"spliterator"(): $Spliterator<T>
"wrap"<R extends T>(obj: R): $RegistrySupplier<R>
[Symbol.iterator](): IterableIterator<T>;
get "ids"(): $Set<$ResourceLocation>
}

export namespace $Registrar {
const probejs$$marker: never
}
export abstract class $Registrar$$Static<T = any> implements $Registrar<T> {
}
}

declare module "dev.architectury.event.events.client.ClientCommandRegistrationEvent$ClientCommandSourceStack" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SharedSuggestionProvider } from "net.minecraft.commands.SharedSuggestionProvider"
import { $ClientLevel } from "net.minecraft.client.multiplayer.ClientLevel"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $Registry, $Registry$$Type } from "net.minecraft.core.Registry"
import { $Message } from "com.mojang.brigadier.Message"
import { $SuggestionsBuilder$$Type } from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import { $Suggestions } from "com.mojang.brigadier.suggestion.Suggestions"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $CommandContext$$Type } from "com.mojang.brigadier.context.CommandContext"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $SharedSuggestionProvider$ElementSuggestionType$$Type } from "net.minecraft.commands.SharedSuggestionProvider$ElementSuggestionType"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $LocalPlayer } from "net.minecraft.client.player.LocalPlayer"
import { $RegistryAccess } from "net.minecraft.core.RegistryAccess"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $SharedSuggestionProvider$TextCoordinates, $SharedSuggestionProvider$TextCoordinates$$Type } from "net.minecraft.commands.SharedSuggestionProvider$TextCoordinates"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $FeatureFlagSet } from "net.minecraft.world.flag.FeatureFlagSet"
import { $Stream, $Stream$$Type } from "java.util.stream.Stream"
import { $Vec2 } from "net.minecraft.world.phys.Vec2"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $Level } from "net.minecraft.world.level.Level"

export interface $ClientCommandRegistrationEvent$ClientCommandSourceStack extends $SharedSuggestionProvider {
"arch$getLevel"(): $ClientLevel
"arch$getPlayer"(): $LocalPlayer
"arch$getPosition"(): $Vec3
"arch$getRotation"(): $Vec2
"arch$sendFailure"(component0: $Component$$Type): void
"arch$sendSuccess"(supplier0: $Supplier$$Type<$Component>, boolean1: boolean): void
"customSuggestion"(commandContext0: $CommandContext$$Type<any>): $CompletableFuture<$Suggestions>
"enabledFeatures"(): $FeatureFlagSet
"getAbsoluteCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
"getAllTeams"(): $Collection<string>
"getAvailableSounds"(): $Stream<$ResourceLocation>
"getCustomTabSugggestions"(): $Collection<string>
"getOnlinePlayerNames"(): $Collection<string>
"getRecipeNames"(): $Stream<$ResourceLocation>
"getRelevantCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
"getSelectedEntities"(): $Collection<string>
"hasPermission"(int0: integer): boolean
"levels"(): $Set<$ResourceKey<$Level>>
"registryAccess"(): $RegistryAccess
"suggestRegistryElements"(registry0: $Registry$$Type<any>, elementSuggestionType1: $SharedSuggestionProvider$ElementSuggestionType$$Type, suggestionsBuilder2: $SuggestionsBuilder$$Type): void
"suggestRegistryElements"(resourceKey0: $ResourceKey$$Type<$Registry<any>>, elementSuggestionType1: $SharedSuggestionProvider$ElementSuggestionType$$Type, suggestionsBuilder2: $SuggestionsBuilder$$Type, commandContext3: $CommandContext$$Type<any>): $CompletableFuture<$Suggestions>
get "absoluteCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
get "allTeams"(): $Collection<string>
get "availableSounds"(): $Stream<$ResourceLocation>
get "customTabSugggestions"(): $Collection<string>
get "onlinePlayerNames"(): $Collection<string>
get "recipeNames"(): $Stream<$ResourceLocation>
get "relevantCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
get "selectedEntities"(): $Collection<string>
}

export namespace $ClientCommandRegistrationEvent$ClientCommandSourceStack {
function filterResources<T>(iterable0: $Iterable$$Type<T>, string1: string, function2: $Function$$Type<T, $ResourceLocation>, consumer3: $Consumer$$Type<T>): void
function filterResources<T>(iterable0: $Iterable$$Type<T>, string1: string, string2: string, function3: $Function$$Type<T, $ResourceLocation>, consumer4: $Consumer$$Type<T>): void
function matchesSubStr(string0: string, string1: string): boolean
function suggest<T>(iterable0: $Iterable$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, string>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
function suggest(iterable0: $Iterable$$Type<string>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
function suggest(string0s: string[], suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
function suggest(stream0: $Stream$$Type<string>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
function suggest2DCoordinates(string0: string, collection1: $Collection$$Type<$SharedSuggestionProvider$TextCoordinates$$Type>, suggestionsBuilder2: $SuggestionsBuilder$$Type, predicate3: $Predicate$$Type<string>): $CompletableFuture<$Suggestions>
function suggestCoordinates(string0: string, collection1: $Collection$$Type<$SharedSuggestionProvider$TextCoordinates$$Type>, suggestionsBuilder2: $SuggestionsBuilder$$Type, predicate3: $Predicate$$Type<string>): $CompletableFuture<$Suggestions>
function suggestResource<T>(iterable0: $Iterable$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, $ResourceLocation>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
function suggestResource<T>(stream0: $Stream$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, $ResourceLocation>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
function suggestResource(iterable0: $Iterable$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type, string2: string): $CompletableFuture<$Suggestions>
function suggestResource(stream0: $Stream$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type, string2: string): $CompletableFuture<$Suggestions>
function suggestResource(iterable0: $Iterable$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
function suggestResource(stream0: $Stream$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
}
export abstract class $ClientCommandRegistrationEvent$ClientCommandSourceStack$$Static implements $ClientCommandRegistrationEvent$ClientCommandSourceStack {
static "filterResources"<T>(iterable0: $Iterable$$Type<T>, string1: string, function2: $Function$$Type<T, $ResourceLocation>, consumer3: $Consumer$$Type<T>): void
static "filterResources"<T>(iterable0: $Iterable$$Type<T>, string1: string, string2: string, function3: $Function$$Type<T, $ResourceLocation>, consumer4: $Consumer$$Type<T>): void
static "matchesSubStr"(string0: string, string1: string): boolean
static "suggest"<T>(iterable0: $Iterable$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, string>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
static "suggest"(iterable0: $Iterable$$Type<string>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
static "suggest"(string0s: string[], suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
static "suggest"(stream0: $Stream$$Type<string>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
static "suggest2DCoordinates"(string0: string, collection1: $Collection$$Type<$SharedSuggestionProvider$TextCoordinates$$Type>, suggestionsBuilder2: $SuggestionsBuilder$$Type, predicate3: $Predicate$$Type<string>): $CompletableFuture<$Suggestions>
static "suggestCoordinates"(string0: string, collection1: $Collection$$Type<$SharedSuggestionProvider$TextCoordinates$$Type>, suggestionsBuilder2: $SuggestionsBuilder$$Type, predicate3: $Predicate$$Type<string>): $CompletableFuture<$Suggestions>
static "suggestResource"<T>(iterable0: $Iterable$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, $ResourceLocation>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
static "suggestResource"<T>(stream0: $Stream$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, $ResourceLocation>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
static "suggestResource"(iterable0: $Iterable$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type, string2: string): $CompletableFuture<$Suggestions>
static "suggestResource"(stream0: $Stream$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type, string2: string): $CompletableFuture<$Suggestions>
static "suggestResource"(iterable0: $Iterable$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
static "suggestResource"(stream0: $Stream$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
}
}

declare module "dev.architectury.event.EventActor" {
import { $EventResult } from "dev.architectury.event.EventResult"

export interface $EventActor<T = any> {
"act"(t0: T): $EventResult
}

export namespace $EventActor {
const probejs$$marker: never
}
export abstract class $EventActor$$Static<T = any> implements $EventActor<T> {
}
}

declare module "dev.architectury.hooks.level.biome.SpawnProperties" {
import { $List } from "java.util.List"
import { $MobSpawnSettings$SpawnerData } from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"
import { $EntityType } from "net.minecraft.world.entity.EntityType"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $Map } from "java.util.Map"
import { $MobSpawnSettings$MobSpawnCost } from "net.minecraft.world.level.biome.MobSpawnSettings$MobSpawnCost"

export interface $SpawnProperties {
"getCreatureProbability"(): float
"getMobSpawnCosts"(): $Map<$EntityType<any>, $MobSpawnSettings$MobSpawnCost>
"getSpawners"(): $Map<$MobCategory, $List<$MobSpawnSettings$SpawnerData>>
get "creatureProbability"(): float
get "mobSpawnCosts"(): $Map<$EntityType<any>, $MobSpawnSettings$MobSpawnCost>
get "spawners"(): $Map<$MobCategory, $List<$MobSpawnSettings$SpawnerData>>
}

export namespace $SpawnProperties {
const probejs$$marker: never
}
export abstract class $SpawnProperties$$Static implements $SpawnProperties {
}
}

declare module "dev.architectury.registry.level.biome.BiomeModifications$BiomeContext" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $Optional } from "java.util.Optional"
import { $BiomeProperties } from "dev.architectury.hooks.level.biome.BiomeProperties"
import { $Biome$$Type } from "net.minecraft.world.level.biome.Biome"

export interface $BiomeModifications$BiomeContext {
"getKey"(): $Optional<$ResourceLocation>
"getProperties"(): $BiomeProperties
"hasTag"(tagKey0: $TagKey$$Type<$Biome$$Type>): boolean
get "key"(): $Optional<$ResourceLocation>
get "properties"(): $BiomeProperties
}

export namespace $BiomeModifications$BiomeContext {
const probejs$$marker: never
}
export abstract class $BiomeModifications$BiomeContext$$Static implements $BiomeModifications$BiomeContext {
}
}

declare module "dev.architectury.event.events.common.ChatEvent$ChatComponent" {
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"

export interface $ChatEvent$ChatComponent {
"get"(): $Component
"set"(component0: $Component$$Type): void
}

export namespace $ChatEvent$ChatComponent {
const probejs$$marker: never
}
export abstract class $ChatEvent$ChatComponent$$Static implements $ChatEvent$ChatComponent {
}
}

declare module "dev.architectury.utils.Env" {
import { $Enum } from "java.lang.Enum"
import { $Dist } from "net.minecraftforge.api.distmarker.Dist"

export class $Env extends $Enum<$Env> {
static readonly "CLIENT": $Env
static readonly "SERVER": $Env

public static "fromPlatform"(type: any): $Env
public "toPlatform"(): $Dist
public static "valueOf"(name: string): $Env
public static "values"(): $Env[]
}
}

declare module "dev.architectury.fluid.FluidStack" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Fluid, $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"

export class $FluidStack {
public static "bucketAmount"(): long
public "copy"(): $FluidStack
public "copyWithAmount"(amount: long): $FluidStack
public static "create"(fluid: $Fluid$$Type, amount: long, tag: $CompoundTag$$Type): $FluidStack
public static "create"(fluid: $Supplier$$Type<$Fluid>, amount: long): $FluidStack
public static "create"(fluid: $Supplier$$Type<$Fluid>, amount: long, tag: $CompoundTag$$Type): $FluidStack
public static "create"(fluid: $Fluid$$Type, amount: long): $FluidStack
public static "create"(stack: $FluidStack$$Type, amount: long): $FluidStack
public static "empty"(): $FluidStack
public "getAmount"(): long
public "getChildTag"(childName: string): $CompoundTag
public "getFluid"(): $Fluid
public "getName"(): $Component
public "getOrCreateChildTag"(childName: string): $CompoundTag
public "getOrCreateTag"(): $CompoundTag
public "getRawFluid"(): $Fluid
public "getRawFluidSupplier"(): $Supplier<$Fluid>
public "getTag"(): $CompoundTag
public "getTranslationKey"(): string
public "grow"(amount: long): void
public "hasTag"(): boolean
public static "init"(): void
public "isEmpty"(): boolean
public "isFluidEqual"(other: $FluidStack$$Type): boolean
public "isFluidStackEqual"(other: $FluidStack$$Type): boolean
public "isTagEqual"(other: $FluidStack$$Type): boolean
public static "read"(buf: $FriendlyByteBuf$$Type): $FluidStack
public static "read"(tag: $CompoundTag$$Type): $FluidStack
public "removeChildTag"(childName: string): void
public "setAmount"(amount: long): void
public "setTag"(tag: $CompoundTag$$Type): void
public "shrink"(amount: long): void
public "write"(buf: $FriendlyByteBuf$$Type): void
public "write"(tag: $CompoundTag$$Type): $CompoundTag
get "amount"(): long
get "fluid"(): $Fluid
get "name"(): $Component
get "orCreateTag"(): $CompoundTag
get "rawFluid"(): $Fluid
get "rawFluidSupplier"(): $Supplier<$Fluid>
get "tag"(): $CompoundTag
get "translationKey"(): string
set "amount"(value: long)
set "tag"(value: $CompoundTag$$Type)
}
}

declare module "dev.architectury.extensions.injected.InjectedItemPropertiesExtension" {
import { $DeferredSupplier$$Type } from "dev.architectury.registry.registries.DeferredSupplier"
import { $CreativeModeTab, $CreativeModeTab$$Type } from "net.minecraft.world.item.CreativeModeTab"
import { $Item$Properties } from "net.minecraft.world.item.Item$Properties"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export interface $InjectedItemPropertiesExtension {
"arch$tab"(tab: $CreativeModeTab$$Type): $Item$Properties
"arch$tab"(tab: $DeferredSupplier$$Type<$CreativeModeTab$$Type>): $Item$Properties
"arch$tab"(tab: $ResourceKey$$Type<$CreativeModeTab>): $Item$Properties
}

export namespace $InjectedItemPropertiesExtension {
const probejs$$marker: never
}
export abstract class $InjectedItemPropertiesExtension$$Static implements $InjectedItemPropertiesExtension {
}
}

declare module "dev.architectury.core.fluid.ArchitecturyFluidAttributes" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Item } from "net.minecraft.world.item.Item"
import { $LiquidBlock } from "net.minecraft.world.level.block.LiquidBlock"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Fluid } from "net.minecraft.world.level.material.Fluid"
import { $FluidStack$$Type } from "dev.architectury.fluid.FluidStack"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $Rarity } from "net.minecraft.world.item.Rarity"

export interface $ArchitecturyFluidAttributes {
"canConvertToSource"(): boolean
"getBlock"(): $LiquidBlock
"getBucketItem"(): $Item
/** @deprecated */
"getColor"(fluidStack0: $FluidStack$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): integer
"getColor"(stack: $FluidStack$$Type): integer
"getColor"(): integer
"getColor"(state: $FluidState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): integer
"getDensity"(fluidStack0: $FluidStack$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): integer
"getDensity"(stack: $FluidStack$$Type): integer
"getDensity"(): integer
"getDropOff"(levelReader0: $LevelReader$$Type): integer
"getDropOff"(): integer
"getEmptySound"(stack: $FluidStack$$Type): $SoundEvent
"getEmptySound"(): $SoundEvent
"getEmptySound"(fluidStack0: $FluidStack$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): $SoundEvent
"getExplosionResistance"(): float
"getFillSound"(fluidStack0: $FluidStack$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): $SoundEvent
"getFillSound"(stack: $FluidStack$$Type): $SoundEvent
"getFillSound"(): $SoundEvent
"getFlowingFluid"(): $Fluid
"getFlowingTexture"(): $ResourceLocation
/** @deprecated */
"getFlowingTexture"(fluidStack0: $FluidStack$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): $ResourceLocation
"getFlowingTexture"(state: $FluidState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): $ResourceLocation
"getFlowingTexture"(stack: $FluidStack$$Type): $ResourceLocation
"getLuminosity"(fluidStack0: $FluidStack$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): integer
"getLuminosity"(): integer
"getLuminosity"(stack: $FluidStack$$Type): integer
"getName"(stack: $FluidStack$$Type): $Component
"getName"(): $Component
"getOverlayTexture"(state: $FluidState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): $ResourceLocation
"getOverlayTexture"(stack: $FluidStack$$Type): $ResourceLocation
"getOverlayTexture"(): $ResourceLocation
"getRarity"(fluidStack0: $FluidStack$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): $Rarity
"getRarity"(stack: $FluidStack$$Type): $Rarity
"getRarity"(): $Rarity
"getSlopeFindDistance"(): integer
"getSlopeFindDistance"(levelReader0: $LevelReader$$Type): integer
"getSourceFluid"(): $Fluid
/** @deprecated */
"getSourceTexture"(fluidStack0: $FluidStack$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): $ResourceLocation
"getSourceTexture"(stack: $FluidStack$$Type): $ResourceLocation
"getSourceTexture"(state: $FluidState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): $ResourceLocation
"getSourceTexture"(): $ResourceLocation
"getTemperature"(fluidStack0: $FluidStack$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): integer
"getTemperature"(stack: $FluidStack$$Type): integer
"getTemperature"(): integer
"getTickDelay"(): integer
"getTickDelay"(levelReader0: $LevelReader$$Type): integer
"getTranslationKey"(): string
"getTranslationKey"(fluidStack0: $FluidStack$$Type): string
"getViscosity"(stack: $FluidStack$$Type): integer
"getViscosity"(): integer
"getViscosity"(fluidStack0: $FluidStack$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): integer
"isLighterThanAir"(fluidStack0: $FluidStack$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): boolean
"isLighterThanAir"(): boolean
"isLighterThanAir"(stack: $FluidStack$$Type): boolean
get "block"(): $LiquidBlock
get "bucketItem"(): $Item
get "color"(): integer
get "density"(): integer
get "dropOff"(): integer
get "emptySound"(): $SoundEvent
get "explosionResistance"(): float
get "fillSound"(): $SoundEvent
get "flowingFluid"(): $Fluid
get "flowingTexture"(): $ResourceLocation
get "luminosity"(): integer
get "name"(): $Component
get "overlayTexture"(): $ResourceLocation
get "rarity"(): $Rarity
get "slopeFindDistance"(): integer
get "sourceFluid"(): $Fluid
get "sourceTexture"(): $ResourceLocation
get "temperature"(): integer
get "tickDelay"(): integer
get "translationKey"(): string
get "viscosity"(): integer
get "lighterThanAir"(): boolean
}

export namespace $ArchitecturyFluidAttributes {
const probejs$$marker: never
}
export abstract class $ArchitecturyFluidAttributes$$Static implements $ArchitecturyFluidAttributes {
}
}

declare module "dev.architectury.event.EventResult" {
import { $InteractionResult } from "net.minecraft.world.InteractionResult"

export class $EventResult {
public "asMinecraft"(): $InteractionResult
public static "interrupt"(value: boolean): $EventResult
public static "interruptDefault"(): $EventResult
public static "interruptFalse"(): $EventResult
public static "interruptTrue"(): $EventResult
public "interruptsFurtherEvaluation"(): boolean
public "isEmpty"(): boolean
public "isFalse"(): boolean
public "isPresent"(): boolean
public "isTrue"(): boolean
public static "pass"(): $EventResult
public "value"(): boolean
get "empty"(): boolean
get "false"(): boolean
get "present"(): boolean
get "true"(): boolean
}
}

declare module "dev.architectury.registry.registries.options.RegistrarOption" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RegistrarOption {
}

export namespace $RegistrarOption {
const probejs$$marker: never
}
export abstract class $RegistrarOption$$Static implements $RegistrarOption {
}
}

declare module "dev.architectury.event.forge.EventHandlerImplCommon$LevelEventAttachment" {
import { $LevelAccessor, $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"

export interface $EventHandlerImplCommon$LevelEventAttachment {
"architectury$attachLevel"(levelAccessor0: $LevelAccessor$$Type): void
"architectury$getAttachedLevel"(): $LevelAccessor
}

export namespace $EventHandlerImplCommon$LevelEventAttachment {
const probejs$$marker: never
}
export abstract class $EventHandlerImplCommon$LevelEventAttachment$$Static implements $EventHandlerImplCommon$LevelEventAttachment {
}
}

declare module "dev.architectury.extensions.injected.InjectedBucketItemExtension" {
import { $Fluid } from "net.minecraft.world.level.material.Fluid"

export interface $InjectedBucketItemExtension {
"arch$getFluid"(): $Fluid
}

export namespace $InjectedBucketItemExtension {
const probejs$$marker: never
}
export abstract class $InjectedBucketItemExtension$$Static implements $InjectedBucketItemExtension {
}
}

declare module "dev.architectury.hooks.level.biome.GenerationProperties" {
import { $List } from "java.util.List"
import { $Holder } from "net.minecraft.core.Holder"
import { $PlacedFeature } from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import { $GenerationStep$Carving$$Type } from "net.minecraft.world.level.levelgen.GenerationStep$Carving"
import { $ConfiguredWorldCarver } from "net.minecraft.world.level.levelgen.carver.ConfiguredWorldCarver"
import { $Iterable } from "java.lang.Iterable"
import { $GenerationStep$Decoration$$Type } from "net.minecraft.world.level.levelgen.GenerationStep$Decoration"

export interface $GenerationProperties {
"getCarvers"(carving0: $GenerationStep$Carving$$Type): $Iterable<$Holder<$ConfiguredWorldCarver<any>>>
"getFeatures"(decoration0: $GenerationStep$Decoration$$Type): $Iterable<$Holder<$PlacedFeature>>
"getFeatures"(): $List<$Iterable<$Holder<$PlacedFeature>>>
get "features"(): $List<$Iterable<$Holder<$PlacedFeature>>>
}

export namespace $GenerationProperties {
const probejs$$marker: never
}
export abstract class $GenerationProperties$$Static implements $GenerationProperties {
}
}

declare module "dev.architectury.hooks.level.biome.BiomeProperties" {
import { $ClimateProperties } from "dev.architectury.hooks.level.biome.ClimateProperties"
import { $SpawnProperties } from "dev.architectury.hooks.level.biome.SpawnProperties"
import { $EffectsProperties } from "dev.architectury.hooks.level.biome.EffectsProperties"
import { $GenerationProperties } from "dev.architectury.hooks.level.biome.GenerationProperties"

export interface $BiomeProperties {
"getClimateProperties"(): $ClimateProperties
"getEffectsProperties"(): $EffectsProperties
"getGenerationProperties"(): $GenerationProperties
"getSpawnProperties"(): $SpawnProperties
get "climateProperties"(): $ClimateProperties
get "effectsProperties"(): $EffectsProperties
get "generationProperties"(): $GenerationProperties
get "spawnProperties"(): $SpawnProperties
}

export namespace $BiomeProperties {
const probejs$$marker: never
}
export abstract class $BiomeProperties$$Static implements $BiomeProperties {
}
}

declare module "dev.architectury.registry.registries.RegistrarManager" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Registry, $Registry$$Type } from "net.minecraft.core.Registry"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $RegistrarBuilder } from "dev.architectury.registry.registries.RegistrarBuilder"
import { $Registrar, $Registrar$$Type } from "dev.architectury.registry.registries.Registrar"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export class $RegistrarManager {
public "builder"<T>(registryId: $ResourceLocation$$Type, ...typeGetter: T[]): $RegistrarBuilder<T>
public "forRegistry"<T>(key: $ResourceKey$$Type<$Registry<T>>, callback: $Consumer$$Type<$Registrar$$Type<T>>): void
public static "get"(modId: string): $RegistrarManager
/** @deprecated */
public "get"<T>(registry: $Registry$$Type<T>): $Registrar<T>
public "get"<T>(key: $ResourceKey$$Type<$Registry<T>>): $Registrar<T>
/** @deprecated */
public static "getId"<T>(object: T, fallback: $Registry$$Type<T>): $ResourceLocation
public static "getId"<T>(object: T, fallback: $ResourceKey$$Type<$Registry<T>>): $ResourceLocation
public "getModId"(): string
get "modId"(): string
}
}

declare module "dev.architectury.registry.registries.DeferredSupplier" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Registry } from "net.minecraft.core.Registry"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"
import { $Optional } from "java.util.Optional"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $OptionalSupplier } from "dev.architectury.utils.OptionalSupplier"

export interface $DeferredSupplier<T = any> extends $OptionalSupplier<T> {
"get"(): T
"getId"(): $ResourceLocation
"getKey"(): $ResourceKey<T>
"getOrNull"(): T
"getRegistryId"(): $ResourceLocation
"getRegistryKey"(): $ResourceKey<$Registry<T>>
"ifPresent"(action: $Consumer$$Type<T>): void
"ifPresentOrElse"(action: $Consumer$$Type<T>, emptyAction: $Runnable$$Type): void
"isPresent"(): boolean
"orElse"(other: T): T
"orElseGet"(supplier: $Supplier$$Type<T>): T
"stream"(): $Stream<T>
"toOptional"(): $Optional<T>
get "id"(): $ResourceLocation
get "key"(): $ResourceKey<T>
get "orNull"(): T
get "registryId"(): $ResourceLocation
get "registryKey"(): $ResourceKey<$Registry<T>>
get "present"(): boolean
}

export namespace $DeferredSupplier {
const probejs$$marker: never
}
export abstract class $DeferredSupplier$$Static<T = any> implements $DeferredSupplier<T> {
}
}

declare module "dev.architectury.impl.ItemPropertiesExtensionImpl" {
import { $DeferredSupplier } from "dev.architectury.registry.registries.DeferredSupplier"
import { $CreativeModeTab } from "net.minecraft.world.item.CreativeModeTab"

export interface $ItemPropertiesExtensionImpl {
"arch$getTab"(): $CreativeModeTab
"arch$getTabSupplier"(): $DeferredSupplier<$CreativeModeTab>
}

export namespace $ItemPropertiesExtensionImpl {
const probejs$$marker: never
}
export abstract class $ItemPropertiesExtensionImpl$$Static implements $ItemPropertiesExtensionImpl {
}
}

declare module "dev.architectury.extensions.injected.InjectedFluidExtension" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Holder } from "net.minecraft.core.Holder"
import { $Fluid } from "net.minecraft.world.level.material.Fluid"
import { $InjectedRegistryEntryExtension } from "dev.architectury.extensions.injected.InjectedRegistryEntryExtension"

export interface $InjectedFluidExtension extends $InjectedRegistryEntryExtension<$Fluid> {
"arch$holder"(): $Holder<$Fluid>
"arch$registryName"(): $ResourceLocation
}

export namespace $InjectedFluidExtension {
const probejs$$marker: never
}
export abstract class $InjectedFluidExtension$$Static implements $InjectedFluidExtension {
}
}

declare module "dev.architectury.hooks.level.biome.ClimateProperties" {
import { $Biome$TemperatureModifier } from "net.minecraft.world.level.biome.Biome$TemperatureModifier"

export interface $ClimateProperties {
"getDownfall"(): float
"getTemperature"(): float
"getTemperatureModifier"(): $Biome$TemperatureModifier
"hasPrecipitation"(): boolean
get "downfall"(): float
get "temperature"(): float
get "temperatureModifier"(): $Biome$TemperatureModifier
}

export namespace $ClimateProperties {
const probejs$$marker: never
}
export abstract class $ClimateProperties$$Static implements $ClimateProperties {
}
}

declare module "dev.architectury.registry.registries.RegistrarBuilder" {
import { $Registrar } from "dev.architectury.registry.registries.Registrar"
import { $RegistrarOption$$Type } from "dev.architectury.registry.registries.options.RegistrarOption"

export interface $RegistrarBuilder<T = any> {
"build"(): $Registrar<T>
"option"(registrarOption0: $RegistrarOption$$Type): $RegistrarBuilder<T>
"saveToDisc"(): $RegistrarBuilder<T>
"syncToClients"(): $RegistrarBuilder<T>
}

export namespace $RegistrarBuilder {
const probejs$$marker: never
}
export abstract class $RegistrarBuilder$$Static<T = any> implements $RegistrarBuilder<T> {
}
}

