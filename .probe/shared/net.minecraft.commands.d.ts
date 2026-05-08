declare module "net.minecraft.commands.arguments.ResourceOrTagArgument$Info" {
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $ResourceOrTagArgument, $ResourceOrTagArgument$$Type } from "net.minecraft.commands.arguments.ResourceOrTagArgument"
import { $ArgumentTypeInfo } from "net.minecraft.commands.synchronization.ArgumentTypeInfo"
import { $ResourceOrTagArgument$Info$Template, $ResourceOrTagArgument$Info$Template$$Type } from "net.minecraft.commands.arguments.ResourceOrTagArgument$Info$Template"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ResourceOrTagArgument$Info<T = any> implements $ArgumentTypeInfo<$ResourceOrTagArgument<T>, $ResourceOrTagArgument$Info$Template<>> {
constructor()

public "serializeToJson"(template0: $ResourceOrTagArgument$Info$Template$$Type<>, jsonObject1: $JsonObject$$Type): void
public "serializeToNetwork"(template0: $ResourceOrTagArgument$Info$Template$$Type<>, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public "unpack"(resourceOrTagArgument0: $ResourceOrTagArgument$$Type<T>): $ResourceOrTagArgument$Info$Template<>
}
}

declare module "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template" {
import { $ArgumentTypeInfo } from "net.minecraft.commands.synchronization.ArgumentTypeInfo"
import { $ArgumentType } from "com.mojang.brigadier.arguments.ArgumentType"
import { $CommandBuildContext$$Type } from "net.minecraft.commands.CommandBuildContext"

export interface $ArgumentTypeInfo$Template<A extends $ArgumentType<any> = $ArgumentType<any>> {
"instantiate"(commandBuildContext0: $CommandBuildContext$$Type): A
"type"(): $ArgumentTypeInfo<A, any>
}

export namespace $ArgumentTypeInfo$Template {
const probejs$$marker: never
}
export abstract class $ArgumentTypeInfo$Template$$Static<A extends $ArgumentType<any> = $ArgumentType<any>> implements $ArgumentTypeInfo$Template<A> {
}
}

declare module "net.minecraft.commands.arguments.ResourceArgument" {
import { $Enchantment } from "net.minecraft.world.item.enchantment.Enchantment"
import { $Suggestions } from "com.mojang.brigadier.suggestion.Suggestions"
import { $CommandContext$$Type } from "com.mojang.brigadier.context.CommandContext"
import { $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $EntityType } from "net.minecraft.world.entity.EntityType"
import { $Collection } from "java.util.Collection"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $ArgumentType } from "com.mojang.brigadier.arguments.ArgumentType"
import { $Dynamic3CommandExceptionType } from "com.mojang.brigadier.exceptions.Dynamic3CommandExceptionType"
import { $CommandBuildContext$$Type } from "net.minecraft.commands.CommandBuildContext"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"
import { $Attribute } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $Registry } from "net.minecraft.core.Registry"
import { $Structure } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $Dynamic2CommandExceptionType } from "com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType"
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $StringReader$$Type } from "com.mojang.brigadier.StringReader"
import { $SuggestionsBuilder$$Type } from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import { $MobEffect } from "net.minecraft.world.effect.MobEffect"

export class $ResourceArgument<T = any> implements $ArgumentType<$Holder$Reference<T>> {
static readonly "ERROR_INVALID_RESOURCE_TYPE": $Dynamic3CommandExceptionType
static readonly "ERROR_UNKNOWN_RESOURCE": $Dynamic2CommandExceptionType

constructor(commandBuildContext0: $CommandBuildContext$$Type, resourceKey1: $ResourceKey$$Type<$Registry<T>>)

public static "getAttribute"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Holder$Reference<$Attribute>
public static "getConfiguredFeature"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Holder$Reference<$ConfiguredFeature<any, any>>
public static "getEnchantment"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Holder$Reference<$Enchantment>
public static "getEntityType"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Holder$Reference<$EntityType<any>>
public "getExamples"(): $Collection<string>
public static "getMobEffect"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Holder$Reference<$MobEffect>
public static "getResource"<T>(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string, resourceKey2: $ResourceKey$$Type<$Registry<T>>): $Holder$Reference<T>
public static "getStructure"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Holder$Reference<$Structure>
public static "getSummonableEntityType"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Holder$Reference<$EntityType<any>>
public "listSuggestions"<S>(commandContext0: $CommandContext$$Type<S>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public "parse"(stringReader0: $StringReader$$Type): $Holder$Reference<T>
public static "resource"<T>(commandBuildContext0: $CommandBuildContext$$Type, resourceKey1: $ResourceKey$$Type<$Registry<T>>): $ResourceArgument<T>
get "examples"(): $Collection<string>
}
}

declare module "net.minecraft.commands.arguments.TimeArgument$Info$Template" {
import { $ArgumentTypeInfo } from "net.minecraft.commands.synchronization.ArgumentTypeInfo"
import { $ArgumentTypeInfo$Template } from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import { $TimeArgument } from "net.minecraft.commands.arguments.TimeArgument"

export class $TimeArgument$Info$Template implements $ArgumentTypeInfo$Template<$TimeArgument> {
public "type"(): $ArgumentTypeInfo<$TimeArgument, any>
}
}

declare module "net.minecraft.commands.arguments.EntityArgument$Info" {
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $EntityArgument, $EntityArgument$$Type } from "net.minecraft.commands.arguments.EntityArgument"
import { $EntityArgument$Info$Template, $EntityArgument$Info$Template$$Type } from "net.minecraft.commands.arguments.EntityArgument$Info$Template"
import { $ArgumentTypeInfo } from "net.minecraft.commands.synchronization.ArgumentTypeInfo"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $EntityArgument$Info implements $ArgumentTypeInfo<$EntityArgument, $EntityArgument$Info$Template> {
constructor()

public "serializeToJson"(template0: $EntityArgument$Info$Template$$Type, jsonObject1: $JsonObject$$Type): void
public "serializeToNetwork"(template0: $EntityArgument$Info$Template$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public "unpack"(entityArgument0: $EntityArgument$$Type): $EntityArgument$Info$Template
}
}

declare module "net.minecraft.commands.arguments.ArgumentSignatures$Signer" {
import { $MessageSignature } from "net.minecraft.network.chat.MessageSignature"

export interface $ArgumentSignatures$Signer {
"sign"(string0: string): $MessageSignature
}

export namespace $ArgumentSignatures$Signer {
const probejs$$marker: never
}
export abstract class $ArgumentSignatures$Signer$$Static implements $ArgumentSignatures$Signer {
}
}

declare module "net.minecraft.commands.arguments.ResourceOrTagKeyArgument$Info$Template" {
import { $ArgumentTypeInfo } from "net.minecraft.commands.synchronization.ArgumentTypeInfo"
import { $ArgumentTypeInfo$Template } from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import { $ResourceOrTagKeyArgument } from "net.minecraft.commands.arguments.ResourceOrTagKeyArgument"

export class $ResourceOrTagKeyArgument$Info$Template implements $ArgumentTypeInfo$Template<$ResourceOrTagKeyArgument<T>> {
public "type"(): $ArgumentTypeInfo<$ResourceOrTagKeyArgument<T>, any>
}
}

declare module "net.minecraft.commands.arguments.ResourceOrTagArgument$Info$Template" {
import { $ResourceOrTagArgument } from "net.minecraft.commands.arguments.ResourceOrTagArgument"
import { $ArgumentTypeInfo } from "net.minecraft.commands.synchronization.ArgumentTypeInfo"
import { $ArgumentTypeInfo$Template } from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"

export class $ResourceOrTagArgument$Info$Template implements $ArgumentTypeInfo$Template<$ResourceOrTagArgument<T>> {
public "type"(): $ArgumentTypeInfo<$ResourceOrTagArgument<T>, any>
}
}

declare module "net.minecraft.commands.arguments.ScoreHolderArgument" {
import { $Suggestions } from "com.mojang.brigadier.suggestion.Suggestions"
import { $CommandSourceStack, $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $CommandContext$$Type } from "com.mojang.brigadier.context.CommandContext"
import { $Collection } from "java.util.Collection"
import { $ScoreHolderArgument$Result } from "net.minecraft.commands.arguments.ScoreHolderArgument$Result"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $StringReader$$Type } from "com.mojang.brigadier.StringReader"
import { $SuggestionProvider } from "com.mojang.brigadier.suggestion.SuggestionProvider"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ArgumentType } from "com.mojang.brigadier.arguments.ArgumentType"
import { $SuggestionsBuilder$$Type } from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export class $ScoreHolderArgument implements $ArgumentType<$ScoreHolderArgument$Result> {
static readonly "SUGGEST_SCORE_HOLDERS": $SuggestionProvider<$CommandSourceStack>

constructor(boolean0: boolean)

public "getExamples"(): $Collection<string>
public static "getName"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): string
public static "getNames"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Collection<string>
public static "getNames"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string, supplier2: $Supplier$$Type<$Collection<string>>): $Collection<string>
public static "getNamesWithDefaultWildcard"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Collection<string>
public "listSuggestions"<S>(commandContext0: $CommandContext$$Type<S>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public "parse"(stringReader0: $StringReader$$Type): $ScoreHolderArgument$Result
public static "scoreHolder"(): $ScoreHolderArgument
public static "scoreHolders"(): $ScoreHolderArgument
get "examples"(): $Collection<string>
}
}

declare module "net.minecraft.commands.arguments.ResourceArgument$Info" {
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $ResourceArgument, $ResourceArgument$$Type } from "net.minecraft.commands.arguments.ResourceArgument"
import { $ArgumentTypeInfo } from "net.minecraft.commands.synchronization.ArgumentTypeInfo"
import { $ResourceArgument$Info$Template, $ResourceArgument$Info$Template$$Type } from "net.minecraft.commands.arguments.ResourceArgument$Info$Template"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ResourceArgument$Info<T = any> implements $ArgumentTypeInfo<$ResourceArgument<T>, $ResourceArgument$Info$Template<>> {
constructor()

public "serializeToJson"(template0: $ResourceArgument$Info$Template$$Type<>, jsonObject1: $JsonObject$$Type): void
public "serializeToNetwork"(template0: $ResourceArgument$Info$Template$$Type<>, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public "unpack"(resourceArgument0: $ResourceArgument$$Type<T>): $ResourceArgument$Info$Template<>
}
}

declare module "net.minecraft.commands.arguments.ResourceOrTagKeyArgument$Result" {
import { $Registry } from "net.minecraft.core.Registry"
import { $TagKey } from "net.minecraft.tags.TagKey"
import { $Either } from "com.mojang.datafixers.util.Either"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Optional } from "java.util.Optional"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export interface $ResourceOrTagKeyArgument$Result<T = any> extends $Predicate<$Holder<T>> {
"and"(predicate0: $Predicate$$Type<$Holder$$Type<T>>): $Predicate<$Holder<T>>
"asPrintable"(): string
"cast"<E>(resourceKey0: $ResourceKey$$Type<$Registry<E>>): $Optional<$ResourceOrTagKeyArgument$Result<E>>
"negate"(): $Predicate<$Holder<T>>
"or"(predicate0: $Predicate$$Type<$Holder$$Type<T>>): $Predicate<$Holder<T>>
"test"(holder0: $Holder$$Type<T>): boolean
"unwrap"(): $Either<$ResourceKey<T>, $TagKey<T>>
}

export namespace $ResourceOrTagKeyArgument$Result {
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $ResourceOrTagKeyArgument$Result$$Static<T = any> implements $ResourceOrTagKeyArgument$Result<T> {
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "net.minecraft.commands.arguments.ScoreHolderArgument$Info$Template" {
import { $ArgumentTypeInfo } from "net.minecraft.commands.synchronization.ArgumentTypeInfo"
import { $ArgumentTypeInfo$Template } from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import { $ScoreHolderArgument } from "net.minecraft.commands.arguments.ScoreHolderArgument"

export class $ScoreHolderArgument$Info$Template implements $ArgumentTypeInfo$Template<$ScoreHolderArgument> {
public "type"(): $ArgumentTypeInfo<$ScoreHolderArgument, any>
}
}

declare module "net.minecraft.commands.arguments.ArgumentSignatures$Entry" {
import { $Record } from "java.lang.Record"
import { $MessageSignature, $MessageSignature$$Type } from "net.minecraft.network.chat.MessageSignature"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ArgumentSignatures$Entry extends $Record {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(string0: string, messageSignature1: $MessageSignature$$Type)

public "name"(): string
public "signature"(): $MessageSignature
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
}
}

declare module "net.minecraft.commands.SharedSuggestionProvider" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Suggestions } from "com.mojang.brigadier.suggestion.Suggestions"
import { $CommandContext$$Type } from "com.mojang.brigadier.context.CommandContext"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $SharedSuggestionProvider$ElementSuggestionType$$Type } from "net.minecraft.commands.SharedSuggestionProvider$ElementSuggestionType"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $RegistryAccess } from "net.minecraft.core.RegistryAccess"
import { $Function$$Type } from "java.util.function.Function"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $SharedSuggestionProvider$TextCoordinates, $SharedSuggestionProvider$TextCoordinates$$Type } from "net.minecraft.commands.SharedSuggestionProvider$TextCoordinates"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Registry, $Registry$$Type } from "net.minecraft.core.Registry"
import { $FeatureFlagSet } from "net.minecraft.world.flag.FeatureFlagSet"
import { $Stream, $Stream$$Type } from "java.util.stream.Stream"
import { $Message } from "com.mojang.brigadier.Message"
import { $Level } from "net.minecraft.world.level.Level"
import { $SuggestionsBuilder$$Type } from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export interface $SharedSuggestionProvider {
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

export namespace $SharedSuggestionProvider {
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
export abstract class $SharedSuggestionProvider$$Static implements $SharedSuggestionProvider {
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

declare module "net.minecraft.commands.arguments.ResourceKeyArgument$Info$Template" {
import { $ResourceKeyArgument } from "net.minecraft.commands.arguments.ResourceKeyArgument"
import { $ArgumentTypeInfo } from "net.minecraft.commands.synchronization.ArgumentTypeInfo"
import { $ArgumentTypeInfo$Template } from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"

export class $ResourceKeyArgument$Info$Template implements $ArgumentTypeInfo$Template<$ResourceKeyArgument<T>> {
public "type"(): $ArgumentTypeInfo<$ResourceKeyArgument<T>, any>
}
}

declare module "net.minecraft.commands.SharedSuggestionProvider$TextCoordinates" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SharedSuggestionProvider$TextCoordinates {
static readonly "DEFAULT_GLOBAL": $SharedSuggestionProvider$TextCoordinates
static readonly "DEFAULT_LOCAL": $SharedSuggestionProvider$TextCoordinates
readonly "x": string
readonly "y": string
readonly "z": string

constructor(string0: string, string1: string, string2: string)

}
}

declare module "net.minecraft.commands.arguments.EntityArgument" {
import { $Suggestions } from "com.mojang.brigadier.suggestion.Suggestions"
import { $CommandContext$$Type } from "com.mojang.brigadier.context.CommandContext"
import { $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $Collection } from "java.util.Collection"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $EntitySelector } from "net.minecraft.commands.arguments.selector.EntitySelector"
import { $ArgumentType } from "com.mojang.brigadier.arguments.ArgumentType"
import { $SimpleCommandExceptionType } from "com.mojang.brigadier.exceptions.SimpleCommandExceptionType"
import { $ServerPlayer } from "net.minecraft.server.level.ServerPlayer"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $StringReader$$Type } from "com.mojang.brigadier.StringReader"
import { $SuggestionsBuilder$$Type } from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export class $EntityArgument implements $ArgumentType<$EntitySelector> {
static readonly "ERROR_NOT_SINGLE_ENTITY": $SimpleCommandExceptionType
static readonly "ERROR_NOT_SINGLE_PLAYER": $SimpleCommandExceptionType
static readonly "ERROR_ONLY_PLAYERS_ALLOWED": $SimpleCommandExceptionType
static readonly "ERROR_SELECTORS_NOT_ALLOWED": $SimpleCommandExceptionType
static readonly "NO_ENTITIES_FOUND": $SimpleCommandExceptionType
static readonly "NO_PLAYERS_FOUND": $SimpleCommandExceptionType

public static "entities"(): $EntityArgument
public static "entity"(): $EntityArgument
public static "getEntities"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Collection<$Entity>
public static "getEntity"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Entity
public "getExamples"(): $Collection<string>
public static "getOptionalEntities"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Collection<$Entity>
public static "getOptionalPlayers"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Collection<$ServerPlayer>
public static "getPlayer"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $ServerPlayer
public static "getPlayers"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Collection<$ServerPlayer>
public "listSuggestions"<S>(commandContext0: $CommandContext$$Type<S>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public "parse"(stringReader0: $StringReader$$Type): $EntitySelector
public static "player"(): $EntityArgument
public static "players"(): $EntityArgument
get "examples"(): $Collection<string>
}
}

declare module "net.minecraft.commands.arguments.ResourceOrTagKeyArgument" {
import { $Registry } from "net.minecraft.core.Registry"
import { $ResourceOrTagKeyArgument$Result } from "net.minecraft.commands.arguments.ResourceOrTagKeyArgument$Result"
import { $Suggestions } from "com.mojang.brigadier.suggestion.Suggestions"
import { $CommandContext$$Type } from "com.mojang.brigadier.context.CommandContext"
import { $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $DynamicCommandExceptionType$$Type } from "com.mojang.brigadier.exceptions.DynamicCommandExceptionType"
import { $Collection } from "java.util.Collection"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $ArgumentType } from "com.mojang.brigadier.arguments.ArgumentType"
import { $SuggestionsBuilder$$Type } from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export class $ResourceOrTagKeyArgument<T = any> implements $ArgumentType<$ResourceOrTagKeyArgument$Result<T>> {
constructor(resourceKey0: $ResourceKey$$Type<$Registry<T>>)

public "getExamples"(): $Collection<string>
public static "getResourceOrTagKey"<T>(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string, resourceKey2: $ResourceKey$$Type<$Registry<T>>, dynamicCommandExceptionType3: $DynamicCommandExceptionType$$Type): $ResourceOrTagKeyArgument$Result<T>
public "listSuggestions"<S>(commandContext0: $CommandContext$$Type<S>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public static "resourceOrTagKey"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $ResourceOrTagKeyArgument<T>
get "examples"(): $Collection<string>
}
}

declare module "net.minecraft.commands.arguments.ArgumentSignatures" {
import { $List, $List$$Type } from "java.util.List"
import { $ArgumentSignatures$Signer$$Type } from "net.minecraft.commands.arguments.ArgumentSignatures$Signer"
import { $SignableCommand$$Type } from "net.minecraft.network.chat.SignableCommand"
import { $Record } from "java.lang.Record"
import { $ArgumentSignatures$Entry, $ArgumentSignatures$Entry$$Type } from "net.minecraft.commands.arguments.ArgumentSignatures$Entry"
import { $MessageSignature } from "net.minecraft.network.chat.MessageSignature"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ArgumentSignatures extends $Record {
static readonly "EMPTY": $ArgumentSignatures

constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(list0: $List$$Type<$ArgumentSignatures$Entry$$Type>)

public "entries"(): $List<$ArgumentSignatures$Entry>
public "get"(string0: string): $MessageSignature
public static "signCommand"(signableCommand0: $SignableCommand$$Type<any>, signer1: $ArgumentSignatures$Signer$$Type): $ArgumentSignatures
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
}
}

declare module "net.minecraft.commands.arguments.TimeArgument$Info" {
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $TimeArgument$Info$Template, $TimeArgument$Info$Template$$Type } from "net.minecraft.commands.arguments.TimeArgument$Info$Template"
import { $ArgumentTypeInfo } from "net.minecraft.commands.synchronization.ArgumentTypeInfo"
import { $TimeArgument, $TimeArgument$$Type } from "net.minecraft.commands.arguments.TimeArgument"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $TimeArgument$Info implements $ArgumentTypeInfo<$TimeArgument, $TimeArgument$Info$Template> {
constructor()

public "serializeToJson"(template0: $TimeArgument$Info$Template$$Type, jsonObject1: $JsonObject$$Type): void
public "serializeToNetwork"(template0: $TimeArgument$Info$Template$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public "unpack"(timeArgument0: $TimeArgument$$Type): $TimeArgument$Info$Template
}
}

declare module "net.minecraft.commands.Commands$ParseFunction" {
import { $StringReader$$Type } from "com.mojang.brigadier.StringReader"

export interface $Commands$ParseFunction {
"parse"(stringReader0: $StringReader$$Type): void
}

export namespace $Commands$ParseFunction {
const probejs$$marker: never
}
export abstract class $Commands$ParseFunction$$Static implements $Commands$ParseFunction {
}
}

declare module "net.minecraft.commands.arguments.ScoreHolderArgument$Info" {
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $ArgumentTypeInfo } from "net.minecraft.commands.synchronization.ArgumentTypeInfo"
import { $ScoreHolderArgument$Info$Template, $ScoreHolderArgument$Info$Template$$Type } from "net.minecraft.commands.arguments.ScoreHolderArgument$Info$Template"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ScoreHolderArgument, $ScoreHolderArgument$$Type } from "net.minecraft.commands.arguments.ScoreHolderArgument"

export class $ScoreHolderArgument$Info implements $ArgumentTypeInfo<$ScoreHolderArgument, $ScoreHolderArgument$Info$Template> {
constructor()

public "serializeToJson"(template0: $ScoreHolderArgument$Info$Template$$Type, jsonObject1: $JsonObject$$Type): void
public "serializeToNetwork"(template0: $ScoreHolderArgument$Info$Template$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public "unpack"(scoreHolderArgument0: $ScoreHolderArgument$$Type): $ScoreHolderArgument$Info$Template
}
}

declare module "net.minecraft.commands.arguments.ResourceKeyArgument$Info" {
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $ResourceKeyArgument, $ResourceKeyArgument$$Type } from "net.minecraft.commands.arguments.ResourceKeyArgument"
import { $ArgumentTypeInfo } from "net.minecraft.commands.synchronization.ArgumentTypeInfo"
import { $ResourceKeyArgument$Info$Template, $ResourceKeyArgument$Info$Template$$Type } from "net.minecraft.commands.arguments.ResourceKeyArgument$Info$Template"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ResourceKeyArgument$Info<T = any> implements $ArgumentTypeInfo<$ResourceKeyArgument<T>, $ResourceKeyArgument$Info$Template<>> {
constructor()

public "serializeToJson"(template0: $ResourceKeyArgument$Info$Template$$Type<>, jsonObject1: $JsonObject$$Type): void
public "serializeToNetwork"(template0: $ResourceKeyArgument$Info$Template$$Type<>, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public "unpack"(resourceKeyArgument0: $ResourceKeyArgument$$Type<T>): $ResourceKeyArgument$Info$Template<>
}
}

declare module "net.minecraft.commands.CommandSource" {
import { $Component$$Type } from "net.minecraft.network.chat.Component"

export interface $CommandSource {
"acceptsFailure"(): boolean
"acceptsSuccess"(): boolean
"alwaysAccepts"(): boolean
"sendSystemMessage"(component0: $Component$$Type): void
"shouldInformAdmins"(): boolean
}

export namespace $CommandSource {
const NULL: $CommandSource
}
export abstract class $CommandSource$$Static implements $CommandSource {
static readonly "NULL": $CommandSource

}
}

declare module "net.minecraft.commands.arguments.selector.EntitySelector" {
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $Component } from "net.minecraft.network.chat.Component"
import { $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $UUID$$Type } from "java.util.UUID"
import { $Function$$Type } from "java.util.function.Function"
import { $ServerPlayer } from "net.minecraft.server.level.ServerPlayer"
import { $List, $List$$Type } from "java.util.List"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $MinMaxBounds$Doubles$$Type } from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BiConsumer, $BiConsumer$$Type } from "java.util.function.BiConsumer"

export class $EntitySelector {
static readonly "INFINITE": integer
static readonly "ORDER_ARBITRARY": $BiConsumer<$Vec3, $List<$Entity>>
readonly "predicate": $Predicate<$Entity>

constructor(int0: integer, boolean1: boolean, boolean2: boolean, predicate3: $Predicate$$Type<$Entity$$Type>, doubles4: $MinMaxBounds$Doubles$$Type, function5: $Function$$Type<$Vec3$$Type, $Vec3>, aABB6: $AABB$$Type, biConsumer7: $BiConsumer$$Type<$Vec3$$Type, $List$$Type<$Entity$$Type>>, boolean8: boolean, string9: string, uUID10: $UUID$$Type, entityType11: $EntityType$$Type<any>, boolean12: boolean)

public "findEntities"(commandSourceStack0: $CommandSourceStack$$Type): $List<$Entity>
public "findPlayers"(commandSourceStack0: $CommandSourceStack$$Type): $List<$ServerPlayer>
public "findSingleEntity"(commandSourceStack0: $CommandSourceStack$$Type): $Entity
public "findSinglePlayer"(commandSourceStack0: $CommandSourceStack$$Type): $ServerPlayer
public "getMaxResults"(): integer
public "includesEntities"(): boolean
public "isSelfSelector"(): boolean
public "isWorldLimited"(): boolean
public static "joinNames"(list0: $List$$Type<$Entity$$Type>): $Component
public "usesSelector"(): boolean
get "maxResults"(): integer
get "selfSelector"(): boolean
get "worldLimited"(): boolean
}
}

declare module "net.minecraft.commands.Commands$CommandSelection" {
import { $Enum } from "java.lang.Enum"

export class $Commands$CommandSelection extends $Enum<$Commands$CommandSelection> {
static readonly "ALL": $Commands$CommandSelection
static readonly "DEDICATED": $Commands$CommandSelection
static readonly "INTEGRATED": $Commands$CommandSelection
readonly "includeDedicated": boolean
readonly "includeIntegrated": boolean

public static "valueOf"(string0: string): $Commands$CommandSelection
public static "values"(): $Commands$CommandSelection[]
}
}

declare module "net.minecraft.commands.synchronization.SingletonArgumentInfo" {
import { $SingletonArgumentInfo$Template, $SingletonArgumentInfo$Template$$Type } from "net.minecraft.commands.synchronization.SingletonArgumentInfo$Template"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $ArgumentTypeInfo } from "net.minecraft.commands.synchronization.ArgumentTypeInfo"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ArgumentType, $ArgumentType$$Type } from "com.mojang.brigadier.arguments.ArgumentType"
import { $Function$$Type } from "java.util.function.Function"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $CommandBuildContext$$Type } from "net.minecraft.commands.CommandBuildContext"

export class $SingletonArgumentInfo<A extends $ArgumentType<any> = $ArgumentType<any>> implements $ArgumentTypeInfo<A, $SingletonArgumentInfo$Template<>> {
public static "contextAware"<T extends $ArgumentType<any>>(function0: $Function$$Type<$CommandBuildContext$$Type, T>): $SingletonArgumentInfo<T>
public static "contextFree"<T extends $ArgumentType<any>>(supplier0: $Supplier$$Type<T>): $SingletonArgumentInfo<T>
public "serializeToJson"(template0: $SingletonArgumentInfo$Template$$Type<>, jsonObject1: $JsonObject$$Type): void
public "serializeToNetwork"(template0: $SingletonArgumentInfo$Template$$Type<>, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public "unpack"(a0: A): $SingletonArgumentInfo$Template<>
}
}

declare module "net.minecraft.commands.CommandBuildContext$MissingTagAccessPolicy" {
import { $Enum } from "java.lang.Enum"

export class $CommandBuildContext$MissingTagAccessPolicy extends $Enum<$CommandBuildContext$MissingTagAccessPolicy> {
static readonly "CREATE_NEW": $CommandBuildContext$MissingTagAccessPolicy
static readonly "FAIL": $CommandBuildContext$MissingTagAccessPolicy

public static "valueOf"(string0: string): $CommandBuildContext$MissingTagAccessPolicy
public static "values"(): $CommandBuildContext$MissingTagAccessPolicy[]
}
}

declare module "net.minecraft.commands.arguments.ResourceArgument$Info$Template" {
import { $ArgumentTypeInfo } from "net.minecraft.commands.synchronization.ArgumentTypeInfo"
import { $ResourceArgument } from "net.minecraft.commands.arguments.ResourceArgument"
import { $ArgumentTypeInfo$Template } from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"

export class $ResourceArgument$Info$Template implements $ArgumentTypeInfo$Template<$ResourceArgument<T>> {
public "type"(): $ArgumentTypeInfo<$ResourceArgument<T>, any>
}
}

declare module "net.minecraft.commands.arguments.ResourceOrTagArgument$Result" {
import { $Registry } from "net.minecraft.core.Registry"
import { $Either } from "com.mojang.datafixers.util.Either"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $HolderSet$Named } from "net.minecraft.core.HolderSet$Named"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Optional } from "java.util.Optional"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"

export interface $ResourceOrTagArgument$Result<T = any> extends $Predicate<$Holder<T>> {
"and"(predicate0: $Predicate$$Type<$Holder$$Type<T>>): $Predicate<$Holder<T>>
"asPrintable"(): string
"cast"<E>(resourceKey0: $ResourceKey$$Type<$Registry<E>>): $Optional<$ResourceOrTagArgument$Result<E>>
"negate"(): $Predicate<$Holder<T>>
"or"(predicate0: $Predicate$$Type<$Holder$$Type<T>>): $Predicate<$Holder<T>>
"test"(holder0: $Holder$$Type<T>): boolean
"unwrap"(): $Either<$Holder$Reference<T>, $HolderSet$Named<T>>
}

export namespace $ResourceOrTagArgument$Result {
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $ResourceOrTagArgument$Result$$Static<T = any> implements $ResourceOrTagArgument$Result<T> {
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "net.minecraft.commands.CommandBuildContext$Configurable" {
import { $Registry } from "net.minecraft.core.Registry"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $HolderLookup } from "net.minecraft.core.HolderLookup"
import { $HolderLookup$Provider$$Type } from "net.minecraft.core.HolderLookup$Provider"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $CommandBuildContext$MissingTagAccessPolicy$$Type } from "net.minecraft.commands.CommandBuildContext$MissingTagAccessPolicy"
import { $CommandBuildContext } from "net.minecraft.commands.CommandBuildContext"

export interface $CommandBuildContext$Configurable extends $CommandBuildContext {
"holderLookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderLookup<T>
"missingTagAccessPolicy"(missingTagAccessPolicy0: $CommandBuildContext$MissingTagAccessPolicy$$Type): void
}

export namespace $CommandBuildContext$Configurable {
function configurable(registryAccess0: $RegistryAccess$$Type, featureFlagSet1: $FeatureFlagSet$$Type): $CommandBuildContext$Configurable
function simple(provider0: $HolderLookup$Provider$$Type, featureFlagSet1: $FeatureFlagSet$$Type): $CommandBuildContext
}
export abstract class $CommandBuildContext$Configurable$$Static implements $CommandBuildContext$Configurable {
static "configurable"(registryAccess0: $RegistryAccess$$Type, featureFlagSet1: $FeatureFlagSet$$Type): $CommandBuildContext$Configurable
static "simple"(provider0: $HolderLookup$Provider$$Type, featureFlagSet1: $FeatureFlagSet$$Type): $CommandBuildContext
}
}

declare module "net.minecraft.commands.arguments.ResourceOrTagArgument" {
import { $Registry } from "net.minecraft.core.Registry"
import { $Suggestions } from "com.mojang.brigadier.suggestion.Suggestions"
import { $ResourceOrTagArgument$Result } from "net.minecraft.commands.arguments.ResourceOrTagArgument$Result"
import { $CommandContext$$Type } from "com.mojang.brigadier.context.CommandContext"
import { $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $Collection } from "java.util.Collection"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $ArgumentType } from "com.mojang.brigadier.arguments.ArgumentType"
import { $CommandBuildContext$$Type } from "net.minecraft.commands.CommandBuildContext"
import { $SuggestionsBuilder$$Type } from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export class $ResourceOrTagArgument<T = any> implements $ArgumentType<$ResourceOrTagArgument$Result<T>> {
constructor(commandBuildContext0: $CommandBuildContext$$Type, resourceKey1: $ResourceKey$$Type<$Registry<T>>)

public "getExamples"(): $Collection<string>
public static "getResourceOrTag"<T>(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string, resourceKey2: $ResourceKey$$Type<$Registry<T>>): $ResourceOrTagArgument$Result<T>
public "listSuggestions"<S>(commandContext0: $CommandContext$$Type<S>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public static "resourceOrTag"<T>(commandBuildContext0: $CommandBuildContext$$Type, resourceKey1: $ResourceKey$$Type<$Registry<T>>): $ResourceOrTagArgument<T>
get "examples"(): $Collection<string>
}
}

declare module "net.minecraft.commands.synchronization.SingletonArgumentInfo$Template" {
import { $ArgumentTypeInfo } from "net.minecraft.commands.synchronization.ArgumentTypeInfo"
import { $ArgumentTypeInfo$Template } from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import { $SingletonArgumentInfo$$Type } from "net.minecraft.commands.synchronization.SingletonArgumentInfo"
import { $Function$$Type } from "java.util.function.Function"
import { $ArgumentType } from "com.mojang.brigadier.arguments.ArgumentType"
import { $CommandBuildContext$$Type } from "net.minecraft.commands.CommandBuildContext"

export class $SingletonArgumentInfo$Template implements $ArgumentTypeInfo$Template<A> {
constructor(singletonArgumentInfo0: $SingletonArgumentInfo$$Type, function1: $Function$$Type)

public "instantiate"(commandBuildContext0: $CommandBuildContext$$Type): A
public "type"(): $ArgumentTypeInfo<A, any>
}
}

declare module "net.minecraft.commands.arguments.ResourceKeyArgument" {
import { $Suggestions } from "com.mojang.brigadier.suggestion.Suggestions"
import { $CommandContext$$Type } from "com.mojang.brigadier.context.CommandContext"
import { $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $Collection } from "java.util.Collection"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $ArgumentType } from "com.mojang.brigadier.arguments.ArgumentType"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"
import { $Registry } from "net.minecraft.core.Registry"
import { $Structure } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $StructureTemplatePool } from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import { $StringReader$$Type } from "com.mojang.brigadier.StringReader"
import { $SuggestionsBuilder$$Type } from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export class $ResourceKeyArgument<T = any> implements $ArgumentType<$ResourceKey<T>> {
constructor(resourceKey0: $ResourceKey$$Type<$Registry<T>>)

public static "getConfiguredFeature"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Holder$Reference<$ConfiguredFeature<any, any>>
public "getExamples"(): $Collection<string>
public static "getStructure"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Holder$Reference<$Structure>
public static "getStructureTemplatePool"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Holder$Reference<$StructureTemplatePool>
public static "key"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $ResourceKeyArgument<T>
public "listSuggestions"<S>(commandContext0: $CommandContext$$Type<S>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public "parse"(stringReader0: $StringReader$$Type): $ResourceKey<T>
get "examples"(): $Collection<string>
}
}

declare module "net.minecraft.commands.Commands" {
import { $RequiredArgumentBuilder } from "com.mojang.brigadier.builder.RequiredArgumentBuilder"
import { $CommandDispatcher } from "com.mojang.brigadier.CommandDispatcher"
import { $CommandSourceStack, $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $Predicate } from "java.util.function.Predicate"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $HolderLookup$Provider$$Type } from "net.minecraft.core.HolderLookup$Provider"
import { $ArgumentType$$Type } from "com.mojang.brigadier.arguments.ArgumentType"
import { $CommandBuildContext, $CommandBuildContext$$Type } from "net.minecraft.commands.CommandBuildContext"
import { $LiteralArgumentBuilder } from "com.mojang.brigadier.builder.LiteralArgumentBuilder"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Commands$ParseFunction$$Type } from "net.minecraft.commands.Commands$ParseFunction"
import { $Commands$CommandSelection$$Type } from "net.minecraft.commands.Commands$CommandSelection"
import { $ParseResults, $ParseResults$$Type } from "com.mojang.brigadier.ParseResults"
import { $CommandSyntaxException } from "com.mojang.brigadier.exceptions.CommandSyntaxException"

export class $Commands {
static readonly "LEVEL_ADMINS": integer
static readonly "LEVEL_ALL": integer
static readonly "LEVEL_GAMEMASTERS": integer
static readonly "LEVEL_MODERATORS": integer
static readonly "LEVEL_OWNERS": integer

constructor(commandSelection0: $Commands$CommandSelection$$Type, commandBuildContext1: $CommandBuildContext$$Type)

public static "argument"<T>(string0: string, argumentType1: $ArgumentType$$Type<T>): $RequiredArgumentBuilder<$CommandSourceStack, T>
public static "createValidationContext"(provider0: $HolderLookup$Provider$$Type): $CommandBuildContext
public static "createValidator"(parseFunction0: $Commands$ParseFunction$$Type): $Predicate<string>
public "getDispatcher"(): $CommandDispatcher<$CommandSourceStack>
public static "getParseException"<S>(parseResults0: $ParseResults$$Type<S>): $CommandSyntaxException
public static "literal"(string0: string): $LiteralArgumentBuilder<$CommandSourceStack>
public static "mapSource"<S>(parseResults0: $ParseResults$$Type<S>, unaryOperator1: $UnaryOperator$$Type<S>): $ParseResults<S>
public "performCommand"(parseResults0: $ParseResults$$Type<$CommandSourceStack$$Type>, string1: string): integer
public "performPrefixedCommand"(commandSourceStack0: $CommandSourceStack$$Type, string1: string): integer
public "sendCommands"(serverPlayer0: $ServerPlayer$$Type): void
public static "validate"(): void
get "dispatcher"(): $CommandDispatcher<$CommandSourceStack>
}
}

declare module "net.minecraft.commands.CommandFunction" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List$$Type } from "java.util.List"
import { $CommandDispatcher$$Type } from "com.mojang.brigadier.CommandDispatcher"
import { $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $CommandFunction$Entry, $CommandFunction$Entry$$Type } from "net.minecraft.commands.CommandFunction$Entry"

export class $CommandFunction {
constructor(resourceLocation0: $ResourceLocation$$Type, entry1s: $CommandFunction$Entry$$Type[])

public static "fromLines"(resourceLocation0: $ResourceLocation$$Type, commandDispatcher1: $CommandDispatcher$$Type<$CommandSourceStack$$Type>, commandSourceStack2: $CommandSourceStack$$Type, list3: $List$$Type<string>): $CommandFunction
public "getEntries"(): $CommandFunction$Entry[]
public "getId"(): $ResourceLocation
get "entries"(): $CommandFunction$Entry[]
get "id"(): $ResourceLocation
}
}

declare module "net.minecraft.commands.CommandFunction$Entry" {
import { $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $ServerFunctionManager$QueuedCommand$$Type } from "net.minecraft.server.ServerFunctionManager$QueuedCommand"
import { $ServerFunctionManager$$Type } from "net.minecraft.server.ServerFunctionManager"
import { $Deque$$Type } from "java.util.Deque"
import { $ServerFunctionManager$TraceCallbacks$$Type } from "net.minecraft.server.ServerFunctionManager$TraceCallbacks"

export interface $CommandFunction$Entry {
"execute"(serverFunctionManager0: $ServerFunctionManager$$Type, commandSourceStack1: $CommandSourceStack$$Type, deque2: $Deque$$Type<$ServerFunctionManager$QueuedCommand$$Type>, int3: integer, int4: integer, traceCallbacks5: $ServerFunctionManager$TraceCallbacks$$Type): void
}

export namespace $CommandFunction$Entry {
const probejs$$marker: never
}
export abstract class $CommandFunction$Entry$$Static implements $CommandFunction$Entry {
}
}

declare module "net.minecraft.commands.arguments.ResourceOrTagKeyArgument$Info" {
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $ArgumentTypeInfo } from "net.minecraft.commands.synchronization.ArgumentTypeInfo"
import { $ResourceOrTagKeyArgument, $ResourceOrTagKeyArgument$$Type } from "net.minecraft.commands.arguments.ResourceOrTagKeyArgument"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ResourceOrTagKeyArgument$Info$Template, $ResourceOrTagKeyArgument$Info$Template$$Type } from "net.minecraft.commands.arguments.ResourceOrTagKeyArgument$Info$Template"

export class $ResourceOrTagKeyArgument$Info<T = any> implements $ArgumentTypeInfo<$ResourceOrTagKeyArgument<T>, $ResourceOrTagKeyArgument$Info$Template<>> {
constructor()

public "serializeToJson"(template0: $ResourceOrTagKeyArgument$Info$Template$$Type<>, jsonObject1: $JsonObject$$Type): void
public "serializeToNetwork"(template0: $ResourceOrTagKeyArgument$Info$Template$$Type<>, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public "unpack"(resourceOrTagKeyArgument0: $ResourceOrTagKeyArgument$$Type<T>): $ResourceOrTagKeyArgument$Info$Template<>
}
}

declare module "net.minecraft.commands.CommandSourceStack" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $IForgeCommandSourceStack } from "net.minecraftforge.common.extensions.IForgeCommandSourceStack"
import { $SharedSuggestionProvider } from "net.minecraft.commands.SharedSuggestionProvider"
import { $IntConsumer, $IntConsumer$$Type } from "java.util.function.IntConsumer"
import { $ClientLevel } from "net.minecraft.client.multiplayer.ClientLevel"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ServerLevel, $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $SimpleCommandExceptionType } from "com.mojang.brigadier.exceptions.SimpleCommandExceptionType"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $Registry, $Registry$$Type } from "net.minecraft.core.Registry"
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $MinecraftServer, $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $TaskChainer, $TaskChainer$$Type } from "net.minecraft.util.TaskChainer"
import { $Message } from "com.mojang.brigadier.Message"
import { $SuggestionsBuilder$$Type } from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import { $Suggestions } from "com.mojang.brigadier.suggestion.Suggestions"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $CommandContext$$Type } from "com.mojang.brigadier.context.CommandContext"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $SharedSuggestionProvider$ElementSuggestionType$$Type } from "net.minecraft.commands.SharedSuggestionProvider$ElementSuggestionType"
import { $EntityAnchorArgument$Anchor, $EntityAnchorArgument$Anchor$$Type } from "net.minecraft.commands.arguments.EntityAnchorArgument$Anchor"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $ChatType$Bound$$Type } from "net.minecraft.network.chat.ChatType$Bound"
import { $Advancement } from "net.minecraft.advancements.Advancement"
import { $Set } from "java.util.Set"
import { $OutgoingChatMessage$$Type } from "net.minecraft.network.chat.OutgoingChatMessage"
import { $LazyComponentKJS$$Type } from "dev.latvian.mods.kubejs.core.LazyComponentKJS"
import { $LocalPlayer } from "net.minecraft.client.player.LocalPlayer"
import { $RegistryAccess } from "net.minecraft.core.RegistryAccess"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $BinaryOperator$$Type } from "java.util.function.BinaryOperator"
import { $ClientCommandRegistrationEvent$ClientCommandSourceStack } from "dev.architectury.event.events.client.ClientCommandRegistrationEvent$ClientCommandSourceStack"
import { $SharedSuggestionProvider$TextCoordinates, $SharedSuggestionProvider$TextCoordinates$$Type } from "net.minecraft.commands.SharedSuggestionProvider$TextCoordinates"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $FeatureFlagSet } from "net.minecraft.world.flag.FeatureFlagSet"
import { $Scoreboard } from "net.minecraft.world.scores.Scoreboard"
import { $CommandSigningContext, $CommandSigningContext$$Type } from "net.minecraft.commands.CommandSigningContext"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Stream, $Stream$$Type } from "java.util.stream.Stream"
import { $Vec2, $Vec2$$Type } from "net.minecraft.world.phys.Vec2"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $RecipeManager } from "net.minecraft.world.item.crafting.RecipeManager"
import { $CommandSource, $CommandSource$$Type } from "net.minecraft.commands.CommandSource"
import { $Level } from "net.minecraft.world.level.Level"
import { $ResultConsumer$$Type } from "com.mojang.brigadier.ResultConsumer"

export class $CommandSourceStack implements $SharedSuggestionProvider, $IForgeCommandSourceStack, $ClientCommandRegistrationEvent$ClientCommandSourceStack {
static readonly "ERROR_NOT_ENTITY": $SimpleCommandExceptionType
static readonly "ERROR_NOT_PLAYER": $SimpleCommandExceptionType
readonly "source": $CommandSource

constructor(commandSource0: $CommandSource$$Type, vec31: $Vec3$$Type, vec22: $Vec2$$Type, serverLevel3: $ServerLevel$$Type, int4: integer, string5: string, component6: $Component$$Type, minecraftServer7: $MinecraftServer$$Type, entity8: $Entity$$Type)

public "arch$getLevel"(): $ClientLevel
public "arch$getPlayer"(): $LocalPlayer
public "arch$getPosition"(): $Vec3
public "arch$getRotation"(): $Vec2
public "arch$sendFailure"(message: $Component$$Type): void
public "arch$sendSuccess"(message: $Supplier$$Type, broadcastToAdmins: boolean): void
public "customSuggestion"(commandContext0: $CommandContext$$Type<any>): $CompletableFuture<$Suggestions>
public "enabledFeatures"(): $FeatureFlagSet
public "facing"(entity0: $Entity$$Type, anchor1: $EntityAnchorArgument$Anchor$$Type): $CommandSourceStack
public "facing"(vec30: $Vec3$$Type): $CommandSourceStack
public static "filterResources"<T>(iterable0: $Iterable$$Type<T>, string1: string, function2: $Function$$Type<T, $ResourceLocation>, consumer3: $Consumer$$Type<T>): void
public static "filterResources"<T>(iterable0: $Iterable$$Type<T>, string1: string, string2: string, function3: $Function$$Type<T, $ResourceLocation>, consumer4: $Consumer$$Type<T>): void
public "getAbsoluteCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
public "getAdvancement"(resourceLocation0: $ResourceLocation$$Type): $Advancement
public "getAllTeams"(): $Collection<string>
public "getAnchor"(): $EntityAnchorArgument$Anchor
public "getAvailableSounds"(): $Stream<$ResourceLocation>
public "getChatMessageChainer"(): $TaskChainer
public "getCustomTabSugggestions"(): $Collection<string>
public "getDisplayName"(): $Component
public "getEntity"(): $Entity
public "getEntityOrException"(): $Entity
public "getLevel"(): $ServerLevel
public "getOnlinePlayerNames"(): $Collection<string>
public "getPlayer"(): $ServerPlayer
public "getPlayerOrException"(): $ServerPlayer
public "getPosition"(): $Vec3
public "getRecipeManager"(): $RecipeManager
public "getRecipeNames"(): $Stream<$ResourceLocation>
public "getRelevantCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
public "getReturnValueConsumer"(): $IntConsumer
public "getRotation"(): $Vec2
public "getScoreboard"(): $Scoreboard
public "getSelectedEntities"(): $Collection<string>
public "getServer"(): $MinecraftServer
public "getSigningContext"(): $CommandSigningContext
public "getTextName"(): string
public "getUnsidedLevel"(): $Level
public "hasPermission"(int0: integer): boolean
public "isPlayer"(): boolean
public "levels"(): $Set<$ResourceKey<$Level>>
public static "matchesSubStr"(string0: string, string1: string): boolean
public "onCommandComplete"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, boolean1: boolean, int2: integer): void
public "registryAccess"(): $RegistryAccess
public "sendChatMessage"(outgoingChatMessage0: $OutgoingChatMessage$$Type, boolean1: boolean, bound2: $ChatType$Bound$$Type): void
public "sendFailure"(component0: $Component$$Type): void
public "sendSuccess"(component: $Component$$Type, broadcastToAdmins: boolean): void
public "sendSuccessLazy"(component: $LazyComponentKJS$$Type, broadcastToAdmins: boolean): void
public "sendSystemMessage"(component0: $Component$$Type): void
public "shouldFilterMessageTo"(serverPlayer0: $ServerPlayer$$Type): boolean
public static "suggest"<T>(iterable0: $Iterable$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, string>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
public static "suggest"(iterable0: $Iterable$$Type<string>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public static "suggest"(string0s: string[], suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public static "suggest"(stream0: $Stream$$Type<string>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public static "suggest2DCoordinates"(string0: string, collection1: $Collection$$Type<$SharedSuggestionProvider$TextCoordinates$$Type>, suggestionsBuilder2: $SuggestionsBuilder$$Type, predicate3: $Predicate$$Type<string>): $CompletableFuture<$Suggestions>
public static "suggestCoordinates"(string0: string, collection1: $Collection$$Type<$SharedSuggestionProvider$TextCoordinates$$Type>, suggestionsBuilder2: $SuggestionsBuilder$$Type, predicate3: $Predicate$$Type<string>): $CompletableFuture<$Suggestions>
public "suggestRegistryElements"(resourceKey0: $ResourceKey$$Type<$Registry<any>>, elementSuggestionType1: $SharedSuggestionProvider$ElementSuggestionType$$Type, suggestionsBuilder2: $SuggestionsBuilder$$Type, commandContext3: $CommandContext$$Type<any>): $CompletableFuture<$Suggestions>
public "suggestRegistryElements"(registry0: $Registry$$Type<any>, elementSuggestionType1: $SharedSuggestionProvider$ElementSuggestionType$$Type, suggestionsBuilder2: $SuggestionsBuilder$$Type): void
public static "suggestResource"<T>(iterable0: $Iterable$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, $ResourceLocation>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
public static "suggestResource"<T>(stream0: $Stream$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, $ResourceLocation>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
public static "suggestResource"(iterable0: $Iterable$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type, string2: string): $CompletableFuture<$Suggestions>
public static "suggestResource"(stream0: $Stream$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type, string2: string): $CompletableFuture<$Suggestions>
public static "suggestResource"(iterable0: $Iterable$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public static "suggestResource"(stream0: $Stream$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public "withAnchor"(anchor0: $EntityAnchorArgument$Anchor$$Type): $CommandSourceStack
public "withCallback"(resultConsumer0: $ResultConsumer$$Type<$CommandSourceStack$$Type>, binaryOperator1: $BinaryOperator$$Type<$ResultConsumer$$Type<$CommandSourceStack$$Type>>): $CommandSourceStack
public "withCallback"(resultConsumer0: $ResultConsumer$$Type<$CommandSourceStack$$Type>): $CommandSourceStack
public "withChatMessageChainer"(taskChainer0: $TaskChainer$$Type): $CommandSourceStack
public "withEntity"(entity0: $Entity$$Type): $CommandSourceStack
public "withLevel"(serverLevel0: $ServerLevel$$Type): $CommandSourceStack
public "withMaximumPermission"(int0: integer): $CommandSourceStack
public "withPermission"(int0: integer): $CommandSourceStack
public "withPosition"(vec30: $Vec3$$Type): $CommandSourceStack
public "withReturnValueConsumer"(intConsumer0: $IntConsumer$$Type): $CommandSourceStack
public "withRotation"(vec20: $Vec2$$Type): $CommandSourceStack
public "withSigningContext"(commandSigningContext0: $CommandSigningContext$$Type): $CommandSourceStack
public "withSource"(commandSource0: $CommandSource$$Type): $CommandSourceStack
public "withSuppressedOutput"(): $CommandSourceStack
get "absoluteCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
get "allTeams"(): $Collection<string>
get "anchor"(): $EntityAnchorArgument$Anchor
get "availableSounds"(): $Stream<$ResourceLocation>
get "chatMessageChainer"(): $TaskChainer
get "customTabSugggestions"(): $Collection<string>
get "displayName"(): $Component
get "entity"(): $Entity
get "entityOrException"(): $Entity
get "level"(): $ServerLevel
get "onlinePlayerNames"(): $Collection<string>
get "player"(): $ServerPlayer
get "playerOrException"(): $ServerPlayer
get "position"(): $Vec3
get "recipeManager"(): $RecipeManager
get "recipeNames"(): $Stream<$ResourceLocation>
get "relevantCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
get "returnValueConsumer"(): $IntConsumer
get "rotation"(): $Vec2
get "scoreboard"(): $Scoreboard
get "selectedEntities"(): $Collection<string>
get "server"(): $MinecraftServer
get "signingContext"(): $CommandSigningContext
get "textName"(): string
get "unsidedLevel"(): $Level
get "player"(): boolean
}
}

declare module "net.minecraft.commands.arguments.TimeArgument" {
import { $Suggestions } from "com.mojang.brigadier.suggestion.Suggestions"
import { $CommandContext$$Type } from "com.mojang.brigadier.context.CommandContext"
import { $Collection } from "java.util.Collection"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ArgumentType } from "com.mojang.brigadier.arguments.ArgumentType"
import { $SuggestionsBuilder$$Type } from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export class $TimeArgument implements $ArgumentType<integer> {
public "getExamples"(): $Collection<string>
public "listSuggestions"<S>(commandContext0: $CommandContext$$Type<S>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public static "time"(): $TimeArgument
public static "time"(int0: integer): $TimeArgument
get "examples"(): $Collection<string>
}
}

declare module "net.minecraft.commands.CommandBuildContext" {
import { $Registry } from "net.minecraft.core.Registry"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $HolderLookup } from "net.minecraft.core.HolderLookup"
import { $HolderLookup$Provider$$Type } from "net.minecraft.core.HolderLookup$Provider"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $CommandBuildContext$Configurable } from "net.minecraft.commands.CommandBuildContext$Configurable"

export interface $CommandBuildContext {
"holderLookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderLookup<T>
}

export namespace $CommandBuildContext {
function configurable(registryAccess0: $RegistryAccess$$Type, featureFlagSet1: $FeatureFlagSet$$Type): $CommandBuildContext$Configurable
function simple(provider0: $HolderLookup$Provider$$Type, featureFlagSet1: $FeatureFlagSet$$Type): $CommandBuildContext
}
export abstract class $CommandBuildContext$$Static implements $CommandBuildContext {
static "configurable"(registryAccess0: $RegistryAccess$$Type, featureFlagSet1: $FeatureFlagSet$$Type): $CommandBuildContext$Configurable
static "simple"(provider0: $HolderLookup$Provider$$Type, featureFlagSet1: $FeatureFlagSet$$Type): $CommandBuildContext
}
}

declare module "net.minecraft.commands.arguments.EntityAnchorArgument$Anchor" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Enum } from "java.lang.Enum"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"

export class $EntityAnchorArgument$Anchor extends $Enum<$EntityAnchorArgument$Anchor> {
static readonly "EYES": $EntityAnchorArgument$Anchor
static readonly "FEET": $EntityAnchorArgument$Anchor

public "apply"(commandSourceStack0: $CommandSourceStack$$Type): $Vec3
public "apply"(entity0: $Entity$$Type): $Vec3
public static "getByName"(string0: string): $EntityAnchorArgument$Anchor
public static "valueOf"(string0: string): $EntityAnchorArgument$Anchor
public static "values"(): $EntityAnchorArgument$Anchor[]
}
}

declare module "net.minecraft.commands.CommandFunction$CacheableFunction" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CommandFunction, $CommandFunction$$Type } from "net.minecraft.commands.CommandFunction"
import { $Optional } from "java.util.Optional"
import { $ServerFunctionManager$$Type } from "net.minecraft.server.ServerFunctionManager"

export class $CommandFunction$CacheableFunction {
static readonly "NONE": $CommandFunction$CacheableFunction

constructor(resourceLocation0: $ResourceLocation$$Type)
constructor(commandFunction0: $CommandFunction$$Type)

public "get"(serverFunctionManager0: $ServerFunctionManager$$Type): $Optional<$CommandFunction>
public "getId"(): $ResourceLocation
get "id"(): $ResourceLocation
}
}

declare module "net.minecraft.commands.SharedSuggestionProvider$ElementSuggestionType" {
import { $Enum } from "java.lang.Enum"

export class $SharedSuggestionProvider$ElementSuggestionType extends $Enum<$SharedSuggestionProvider$ElementSuggestionType> {
static readonly "ALL": $SharedSuggestionProvider$ElementSuggestionType
static readonly "ELEMENTS": $SharedSuggestionProvider$ElementSuggestionType
static readonly "TAGS": $SharedSuggestionProvider$ElementSuggestionType

public "shouldSuggestElements"(): boolean
public "shouldSuggestTags"(): boolean
public static "valueOf"(string0: string): $SharedSuggestionProvider$ElementSuggestionType
public static "values"(): $SharedSuggestionProvider$ElementSuggestionType[]
}
}

declare module "net.minecraft.commands.CommandSigningContext" {
import { $PlayerChatMessage } from "net.minecraft.network.chat.PlayerChatMessage"

export interface $CommandSigningContext {
"getArgument"(string0: string): $PlayerChatMessage
}

export namespace $CommandSigningContext {
const ANONYMOUS: $CommandSigningContext
}
export abstract class $CommandSigningContext$$Static implements $CommandSigningContext {
static readonly "ANONYMOUS": $CommandSigningContext

}
}

declare module "net.minecraft.commands.arguments.EntityArgument$Info$Template" {
import { $EntityArgument } from "net.minecraft.commands.arguments.EntityArgument"
import { $ArgumentTypeInfo } from "net.minecraft.commands.synchronization.ArgumentTypeInfo"
import { $ArgumentTypeInfo$Template } from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"

export class $EntityArgument$Info$Template implements $ArgumentTypeInfo$Template<$EntityArgument> {
public "type"(): $ArgumentTypeInfo<$EntityArgument, any>
}
}

declare module "net.minecraft.commands.arguments.ScoreHolderArgument$Result" {
import { $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $Collection } from "java.util.Collection"
import { $Supplier$$Type } from "java.util.function.Supplier"

export interface $ScoreHolderArgument$Result {
"getNames"(commandSourceStack0: $CommandSourceStack$$Type, supplier1: $Supplier$$Type<$Collection<string>>): $Collection<string>
}

export namespace $ScoreHolderArgument$Result {
const probejs$$marker: never
}
export abstract class $ScoreHolderArgument$Result$$Static implements $ScoreHolderArgument$Result {
}
}

