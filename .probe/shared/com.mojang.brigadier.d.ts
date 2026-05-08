declare module "com.mojang.brigadier.context.ParsedCommandNode" {
import { $CommandNode, $CommandNode$$Type } from "com.mojang.brigadier.tree.CommandNode"
import { $StringRange, $StringRange$$Type } from "com.mojang.brigadier.context.StringRange"

export class $ParsedCommandNode<S = any> {
constructor(commandNode0: $CommandNode$$Type<S>, stringRange1: $StringRange$$Type)

public "getNode"(): $CommandNode<S>
public "getRange"(): $StringRange
get "node"(): $CommandNode<S>
get "range"(): $StringRange
}
}

declare module "com.mojang.brigadier.SingleRedirectModifier" {
import { $CommandContext$$Type } from "com.mojang.brigadier.context.CommandContext"

export interface $SingleRedirectModifier<S = any> {
"apply"(commandContext0: $CommandContext$$Type<S>): S
}

export namespace $SingleRedirectModifier {
const probejs$$marker: never
}
export abstract class $SingleRedirectModifier$$Static<S = any> implements $SingleRedirectModifier<S> {
}
}

declare module "com.mojang.brigadier.ImmutableStringReader" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ImmutableStringReader {
"canRead"(): boolean
"canRead"(int0: integer): boolean
"getCursor"(): integer
"getRead"(): string
"getRemaining"(): string
"getRemainingLength"(): integer
"getString"(): string
"getTotalLength"(): integer
"peek"(): character
"peek"(int0: integer): character
get "cursor"(): integer
get "read"(): string
get "remaining"(): string
get "remainingLength"(): integer
get "string"(): string
get "totalLength"(): integer
}

export namespace $ImmutableStringReader {
const probejs$$marker: never
}
export abstract class $ImmutableStringReader$$Static implements $ImmutableStringReader {
}
}

declare module "com.mojang.brigadier.ResultConsumer" {
import { $CommandContext$$Type } from "com.mojang.brigadier.context.CommandContext"

export interface $ResultConsumer<S = any> {
"onCommandComplete"(commandContext0: $CommandContext$$Type<S>, boolean1: boolean, int2: integer): void
}

export namespace $ResultConsumer {
const probejs$$marker: never
}
export abstract class $ResultConsumer$$Static<S = any> implements $ResultConsumer<S> {
}
}

declare module "com.mojang.brigadier.suggestion.Suggestions" {
import { $List, $List$$Type } from "java.util.List"
import { $Suggestion, $Suggestion$$Type } from "com.mojang.brigadier.suggestion.Suggestion"
import { $Collection$$Type } from "java.util.Collection"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $StringRange, $StringRange$$Type } from "com.mojang.brigadier.context.StringRange"

export class $Suggestions {
constructor(stringRange0: $StringRange$$Type, list1: $List$$Type<$Suggestion$$Type>)

public static "create"(string0: string, collection1: $Collection$$Type<$Suggestion$$Type>): $Suggestions
public static "empty"(): $CompletableFuture<$Suggestions>
public "getList"(): $List<$Suggestion>
public "getRange"(): $StringRange
public "isEmpty"(): boolean
public static "merge"(string0: string, collection1: $Collection$$Type<$Suggestions$$Type>): $Suggestions
get "list"(): $List<$Suggestion>
get "range"(): $StringRange
}
}

declare module "com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType" {
import { $Dynamic2CommandExceptionType$Function$$Type } from "com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType$Function"
import { $CommandSyntaxException } from "com.mojang.brigadier.exceptions.CommandSyntaxException"
import { $CommandExceptionType } from "com.mojang.brigadier.exceptions.CommandExceptionType"
import { $ImmutableStringReader$$Type } from "com.mojang.brigadier.ImmutableStringReader"

export class $Dynamic2CommandExceptionType implements $CommandExceptionType {
constructor(function0: $Dynamic2CommandExceptionType$Function$$Type)

public "create"(object0: any, object1: any): $CommandSyntaxException
public "createWithContext"(immutableStringReader0: $ImmutableStringReader$$Type, object1: any, object2: any): $CommandSyntaxException
}
}

declare module "com.mojang.brigadier.context.StringRange" {
import { $ImmutableStringReader$$Type } from "com.mojang.brigadier.ImmutableStringReader"

export class $StringRange {
constructor(int0: integer, int1: integer)

public static "at"(int0: integer): $StringRange
public static "between"(int0: integer, int1: integer): $StringRange
public static "encompassing"(stringRange0: $StringRange$$Type, stringRange1: $StringRange$$Type): $StringRange
public "get"(string0: string): string
public "get"(immutableStringReader0: $ImmutableStringReader$$Type): string
public "getEnd"(): integer
public "getLength"(): integer
public "getStart"(): integer
public "isEmpty"(): boolean
get "end"(): integer
get "length"(): integer
get "start"(): integer
get "empty"(): boolean
}
}

declare module "com.mojang.brigadier.Command" {
import { $CommandContext$$Type } from "com.mojang.brigadier.context.CommandContext"

export interface $Command<S = any> {
"run"(commandContext0: $CommandContext$$Type<S>): integer
}

export namespace $Command {
const SINGLE_SUCCESS: integer
}
export abstract class $Command$$Static<S = any> implements $Command<S> {
static readonly "SINGLE_SUCCESS": integer

}
}

declare module "com.mojang.brigadier.ParseResults" {
import { $CommandContextBuilder, $CommandContextBuilder$$Type } from "com.mojang.brigadier.context.CommandContextBuilder"
import { $Map, $Map$$Type } from "java.util.Map"
import { $CommandNode, $CommandNode$$Type } from "com.mojang.brigadier.tree.CommandNode"
import { $CommandSyntaxException, $CommandSyntaxException$$Type } from "com.mojang.brigadier.exceptions.CommandSyntaxException"
import { $ImmutableStringReader, $ImmutableStringReader$$Type } from "com.mojang.brigadier.ImmutableStringReader"

export class $ParseResults<S = any> {
constructor(commandContextBuilder0: $CommandContextBuilder$$Type<S>, immutableStringReader1: $ImmutableStringReader$$Type, map2: $Map$$Type<$CommandNode$$Type<S>, $CommandSyntaxException$$Type>)
constructor(commandContextBuilder0: $CommandContextBuilder$$Type<S>)

public "getContext"(): $CommandContextBuilder<S>
public "getExceptions"(): $Map<$CommandNode<S>, $CommandSyntaxException>
public "getReader"(): $ImmutableStringReader
get "context"(): $CommandContextBuilder<S>
get "exceptions"(): $Map<$CommandNode<S>, $CommandSyntaxException>
get "reader"(): $ImmutableStringReader
}
}

declare module "com.mojang.brigadier.tree.RootCommandNode" {
import { $CommandNode } from "com.mojang.brigadier.tree.CommandNode"
import { $ArgumentBuilder } from "com.mojang.brigadier.builder.ArgumentBuilder"

export class $RootCommandNode<S = any> extends $CommandNode<S> {
constructor()

public "createBuilder"(): $ArgumentBuilder<S, any>
public "isValidInput"(string0: string): boolean
}
}

declare module "com.mojang.brigadier.context.CommandContext" {
import { $List, $List$$Type } from "java.util.List"
import { $ParsedCommandNode, $ParsedCommandNode$$Type } from "com.mojang.brigadier.context.ParsedCommandNode"
import { $Command, $Command$$Type } from "com.mojang.brigadier.Command"
import { $Map$$Type } from "java.util.Map"
import { $CommandNode, $CommandNode$$Type } from "com.mojang.brigadier.tree.CommandNode"
import { $Class$$Type } from "java.lang.Class"
import { $ParsedArgument$$Type } from "com.mojang.brigadier.context.ParsedArgument"
import { $RedirectModifier, $RedirectModifier$$Type } from "com.mojang.brigadier.RedirectModifier"
import { $StringRange, $StringRange$$Type } from "com.mojang.brigadier.context.StringRange"

export class $CommandContext<S = any> {
constructor(s0: S, string1: string, map2: $Map$$Type<string, $ParsedArgument$$Type<S, any>>, command3: $Command$$Type<S>, commandNode4: $CommandNode$$Type<S>, list5: $List$$Type<$ParsedCommandNode$$Type<S>>, stringRange6: $StringRange$$Type, commandContext7: $CommandContext$$Type<S>, redirectModifier8: $RedirectModifier$$Type<S>, boolean9: boolean)

public "copyFor"(s0: S): $CommandContext<S>
public "getArgument"<V>(string0: string, class1: $Class$$Type<V>): V
public "getChild"(): $CommandContext<S>
public "getCommand"(): $Command<S>
public "getInput"(): string
public "getLastChild"(): $CommandContext<S>
public "getNodes"(): $List<$ParsedCommandNode<S>>
public "getRange"(): $StringRange
public "getRedirectModifier"(): $RedirectModifier<S>
public "getRootNode"(): $CommandNode<S>
public "getSource"(): S
public "hasNodes"(): boolean
public "isForked"(): boolean
get "child"(): $CommandContext<S>
get "command"(): $Command<S>
get "input"(): string
get "lastChild"(): $CommandContext<S>
get "nodes"(): $List<$ParsedCommandNode<S>>
get "range"(): $StringRange
get "redirectModifier"(): $RedirectModifier<S>
get "rootNode"(): $CommandNode<S>
get "source"(): S
get "forked"(): boolean
}
}

declare module "com.mojang.brigadier.context.SuggestionContext" {
import { $CommandNode, $CommandNode$$Type } from "com.mojang.brigadier.tree.CommandNode"

export class $SuggestionContext<S = any> {
readonly "parent": $CommandNode<S>
readonly "startPos": integer

constructor(commandNode0: $CommandNode$$Type<S>, int1: integer)

}
}

declare module "com.mojang.brigadier.suggestion.SuggestionProvider" {
import { $Suggestions } from "com.mojang.brigadier.suggestion.Suggestions"
import { $CommandContext$$Type } from "com.mojang.brigadier.context.CommandContext"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $SuggestionsBuilder$$Type } from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export interface $SuggestionProvider<S = any> {
"getSuggestions"(commandContext0: $CommandContext$$Type<S>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
}

export namespace $SuggestionProvider {
const probejs$$marker: never
}
export abstract class $SuggestionProvider$$Static<S = any> implements $SuggestionProvider<S> {
}
}

declare module "com.mojang.brigadier.exceptions.BuiltInExceptionProvider" {
import { $Dynamic2CommandExceptionType } from "com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType"
import { $DynamicCommandExceptionType } from "com.mojang.brigadier.exceptions.DynamicCommandExceptionType"
import { $SimpleCommandExceptionType } from "com.mojang.brigadier.exceptions.SimpleCommandExceptionType"

export interface $BuiltInExceptionProvider {
"dispatcherExpectedArgumentSeparator"(): $SimpleCommandExceptionType
"dispatcherParseException"(): $DynamicCommandExceptionType
"dispatcherUnknownArgument"(): $SimpleCommandExceptionType
"dispatcherUnknownCommand"(): $SimpleCommandExceptionType
"doubleTooHigh"(): $Dynamic2CommandExceptionType
"doubleTooLow"(): $Dynamic2CommandExceptionType
"floatTooHigh"(): $Dynamic2CommandExceptionType
"floatTooLow"(): $Dynamic2CommandExceptionType
"integerTooHigh"(): $Dynamic2CommandExceptionType
"integerTooLow"(): $Dynamic2CommandExceptionType
"literalIncorrect"(): $DynamicCommandExceptionType
"longTooHigh"(): $Dynamic2CommandExceptionType
"longTooLow"(): $Dynamic2CommandExceptionType
"readerExpectedBool"(): $SimpleCommandExceptionType
"readerExpectedDouble"(): $SimpleCommandExceptionType
"readerExpectedEndOfQuote"(): $SimpleCommandExceptionType
"readerExpectedFloat"(): $SimpleCommandExceptionType
"readerExpectedInt"(): $SimpleCommandExceptionType
"readerExpectedLong"(): $SimpleCommandExceptionType
"readerExpectedStartOfQuote"(): $SimpleCommandExceptionType
"readerExpectedSymbol"(): $DynamicCommandExceptionType
"readerInvalidBool"(): $DynamicCommandExceptionType
"readerInvalidDouble"(): $DynamicCommandExceptionType
"readerInvalidEscape"(): $DynamicCommandExceptionType
"readerInvalidFloat"(): $DynamicCommandExceptionType
"readerInvalidInt"(): $DynamicCommandExceptionType
"readerInvalidLong"(): $DynamicCommandExceptionType
}

export namespace $BuiltInExceptionProvider {
const probejs$$marker: never
}
export abstract class $BuiltInExceptionProvider$$Static implements $BuiltInExceptionProvider {
}
}

declare module "com.mojang.brigadier.Message" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Message {
"getString"(): string
get "string"(): string
}

export namespace $Message {
const probejs$$marker: never
}
export abstract class $Message$$Static implements $Message {
}
}

declare module "com.mojang.brigadier.tree.LiteralCommandNode" {
import { $Command$$Type } from "com.mojang.brigadier.Command"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $CommandNode, $CommandNode$$Type } from "com.mojang.brigadier.tree.CommandNode"
import { $RedirectModifier$$Type } from "com.mojang.brigadier.RedirectModifier"
import { $LiteralArgumentBuilder } from "com.mojang.brigadier.builder.LiteralArgumentBuilder"

export class $LiteralCommandNode<S = any> extends $CommandNode<S> {
constructor(string0: string, command1: $Command$$Type<S>, predicate2: $Predicate$$Type<S>, commandNode3: $CommandNode$$Type<S>, redirectModifier4: $RedirectModifier$$Type<S>, boolean5: boolean)

public "createBuilder"(): $LiteralArgumentBuilder<S>
public "getLiteral"(): string
public "isValidInput"(string0: string): boolean
get "literal"(): string
}
}

declare module "com.mojang.brigadier.builder.RequiredArgumentBuilder" {
import { $ArgumentCommandNode } from "com.mojang.brigadier.tree.ArgumentCommandNode"
import { $SuggestionProvider, $SuggestionProvider$$Type } from "com.mojang.brigadier.suggestion.SuggestionProvider"
import { $ArgumentType, $ArgumentType$$Type } from "com.mojang.brigadier.arguments.ArgumentType"
import { $ArgumentBuilder } from "com.mojang.brigadier.builder.ArgumentBuilder"

export class $RequiredArgumentBuilder<S = any, T = any> extends $ArgumentBuilder<S, $RequiredArgumentBuilder<S, T>> {
public static "argument"<S, T>(string0: string, argumentType1: $ArgumentType$$Type<T>): $RequiredArgumentBuilder<S, T>
public "build"(): $ArgumentCommandNode<S, T>
public "getName"(): string
public "getSuggestionsProvider"(): $SuggestionProvider<S>
public "getType"(): $ArgumentType<T>
public "suggests"(suggestionProvider0: $SuggestionProvider$$Type<S>): $RequiredArgumentBuilder<S, T>
get "name"(): string
get "suggestionsProvider"(): $SuggestionProvider<S>
get "type"(): $ArgumentType<T>
}
}

declare module "com.mojang.brigadier.suggestion.Suggestion" {
import { $Message, $Message$$Type } from "com.mojang.brigadier.Message"
import { $Comparable } from "java.lang.Comparable"
import { $StringRange, $StringRange$$Type } from "com.mojang.brigadier.context.StringRange"

export class $Suggestion implements $Comparable<$Suggestion> {
constructor(stringRange0: $StringRange$$Type, string1: string)
constructor(stringRange0: $StringRange$$Type, string1: string, message2: $Message$$Type)

public "apply"(string0: string): string
public "compareTo"(suggestion0: $Suggestion$$Type): integer
public "compareToIgnoreCase"(suggestion0: $Suggestion$$Type): integer
public "expand"(string0: string, stringRange1: $StringRange$$Type): $Suggestion
public "getRange"(): $StringRange
public "getText"(): string
public "getTooltip"(): $Message
get "range"(): $StringRange
get "text"(): string
get "tooltip"(): $Message
}
}

declare module "com.mojang.brigadier.RedirectModifier" {
import { $CommandContext$$Type } from "com.mojang.brigadier.context.CommandContext"
import { $Collection } from "java.util.Collection"

export interface $RedirectModifier<S = any> {
"apply"(commandContext0: $CommandContext$$Type<S>): $Collection<S>
}

export namespace $RedirectModifier {
const probejs$$marker: never
}
export abstract class $RedirectModifier$$Static<S = any> implements $RedirectModifier<S> {
}
}

declare module "com.mojang.brigadier.tree.ArgumentCommandNode" {
import { $Command$$Type } from "com.mojang.brigadier.Command"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $CommandNode, $CommandNode$$Type } from "com.mojang.brigadier.tree.CommandNode"
import { $RedirectModifier$$Type } from "com.mojang.brigadier.RedirectModifier"
import { $SuggestionProvider, $SuggestionProvider$$Type } from "com.mojang.brigadier.suggestion.SuggestionProvider"
import { $ArgumentType, $ArgumentType$$Type } from "com.mojang.brigadier.arguments.ArgumentType"

export class $ArgumentCommandNode<S = any, T = any> extends $CommandNode<S> {
constructor(string0: string, argumentType1: $ArgumentType$$Type<T>, command2: $Command$$Type<S>, predicate3: $Predicate$$Type<S>, commandNode4: $CommandNode$$Type<S>, redirectModifier5: $RedirectModifier$$Type<S>, boolean6: boolean, suggestionProvider7: $SuggestionProvider$$Type<S>)

public "getCustomSuggestions"(): $SuggestionProvider<S>
public "getType"(): $ArgumentType<T>
public "isValidInput"(string0: string): boolean
get "customSuggestions"(): $SuggestionProvider<S>
get "type"(): $ArgumentType<T>
}
}

declare module "com.mojang.brigadier.builder.ArgumentBuilder" {
import { $SingleRedirectModifier$$Type } from "com.mojang.brigadier.SingleRedirectModifier"
import { $Command, $Command$$Type } from "com.mojang.brigadier.Command"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection } from "java.util.Collection"
import { $CommandNode, $CommandNode$$Type } from "com.mojang.brigadier.tree.CommandNode"
import { $RedirectModifier, $RedirectModifier$$Type } from "com.mojang.brigadier.RedirectModifier"

export class $ArgumentBuilder<S = any, T extends $ArgumentBuilder<S, T> = $ArgumentBuilder<S, T>> {
constructor()

public "build"(): $CommandNode<S>
public "executes"(command0: $Command$$Type<S>): T
public "fork"(commandNode0: $CommandNode$$Type<S>, redirectModifier1: $RedirectModifier$$Type<S>): T
public "forward"(commandNode0: $CommandNode$$Type<S>, redirectModifier1: $RedirectModifier$$Type<S>, boolean2: boolean): T
public "getArguments"(): $Collection<$CommandNode<S>>
public "getCommand"(): $Command<S>
public "getRedirect"(): $CommandNode<S>
public "getRedirectModifier"(): $RedirectModifier<S>
public "getRequirement"(): $Predicate<S>
public "isFork"(): boolean
public "redirect"(commandNode0: $CommandNode$$Type<S>, singleRedirectModifier1: $SingleRedirectModifier$$Type<S>): T
public "redirect"(commandNode0: $CommandNode$$Type<S>): T
public "requires"(predicate0: $Predicate$$Type<S>): T
public "then"(argumentBuilder0: $ArgumentBuilder$$Type<S, any>): T
public "then"(commandNode0: $CommandNode$$Type<S>): T
get "arguments"(): $Collection<$CommandNode<S>>
get "command"(): $Command<S>
get "redirectModifier"(): $RedirectModifier<S>
get "requirement"(): $Predicate<S>
}
}

declare module "com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType$Function" {
import { $Message } from "com.mojang.brigadier.Message"

export interface $Dynamic2CommandExceptionType$Function {
"apply"(object0: any, object1: any): $Message
}

export namespace $Dynamic2CommandExceptionType$Function {
const probejs$$marker: never
}
export abstract class $Dynamic2CommandExceptionType$Function$$Static implements $Dynamic2CommandExceptionType$Function {
}
}

declare module "com.mojang.brigadier.exceptions.DynamicCommandExceptionType" {
import { $Message } from "com.mojang.brigadier.Message"
import { $Function$$Type } from "java.util.function.Function"
import { $CommandSyntaxException } from "com.mojang.brigadier.exceptions.CommandSyntaxException"
import { $CommandExceptionType } from "com.mojang.brigadier.exceptions.CommandExceptionType"
import { $ImmutableStringReader$$Type } from "com.mojang.brigadier.ImmutableStringReader"

export class $DynamicCommandExceptionType implements $CommandExceptionType {
constructor(function0: $Function$$Type<any, $Message>)

public "create"(object0: any): $CommandSyntaxException
public "createWithContext"(immutableStringReader0: $ImmutableStringReader$$Type, object1: any): $CommandSyntaxException
}
}

declare module "com.mojang.brigadier.AmbiguityConsumer" {
import { $Collection$$Type } from "java.util.Collection"
import { $CommandNode$$Type } from "com.mojang.brigadier.tree.CommandNode"

export interface $AmbiguityConsumer<S = any> {
"ambiguous"(commandNode0: $CommandNode$$Type<S>, commandNode1: $CommandNode$$Type<S>, commandNode2: $CommandNode$$Type<S>, collection3: $Collection$$Type<string>): void
}

export namespace $AmbiguityConsumer {
const probejs$$marker: never
}
export abstract class $AmbiguityConsumer$$Static<S = any> implements $AmbiguityConsumer<S> {
}
}

declare module "com.mojang.brigadier.arguments.ArgumentType" {
import { $Suggestions } from "com.mojang.brigadier.suggestion.Suggestions"
import { $CommandContext$$Type } from "com.mojang.brigadier.context.CommandContext"
import { $Collection } from "java.util.Collection"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $StringReader$$Type } from "com.mojang.brigadier.StringReader"
import { $SuggestionsBuilder$$Type } from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export interface $ArgumentType<T = any> {
"getExamples"(): $Collection<string>
"listSuggestions"<S>(commandContext0: $CommandContext$$Type<S>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
"parse"(stringReader0: $StringReader$$Type): T
get "examples"(): $Collection<string>
}

export namespace $ArgumentType {
const probejs$$marker: never
}
export abstract class $ArgumentType$$Static<T = any> implements $ArgumentType<T> {
}
}

declare module "com.mojang.brigadier.exceptions.CommandSyntaxException" {
import { $Message, $Message$$Type } from "com.mojang.brigadier.Message"
import { $BuiltInExceptionProvider } from "com.mojang.brigadier.exceptions.BuiltInExceptionProvider"
import { $CommandExceptionType, $CommandExceptionType$$Type } from "com.mojang.brigadier.exceptions.CommandExceptionType"
import { $Exception } from "java.lang.Exception"

export class $CommandSyntaxException extends $Exception {
static "BUILT_IN_EXCEPTIONS": $BuiltInExceptionProvider
static readonly "CONTEXT_AMOUNT": integer
static "ENABLE_COMMAND_STACK_TRACES": boolean

constructor(commandExceptionType0: $CommandExceptionType$$Type, message1: $Message$$Type, string2: string, int3: integer)
constructor(commandExceptionType0: $CommandExceptionType$$Type, message1: $Message$$Type)

public "getContext"(): string
public "getCursor"(): integer
public "getInput"(): string
public "getRawMessage"(): $Message
public "getType"(): $CommandExceptionType
get "context"(): string
get "cursor"(): integer
get "input"(): string
get "rawMessage"(): $Message
get "type"(): $CommandExceptionType
}
}

declare module "com.mojang.brigadier.exceptions.SimpleCommandExceptionType" {
import { $Message$$Type } from "com.mojang.brigadier.Message"
import { $CommandSyntaxException } from "com.mojang.brigadier.exceptions.CommandSyntaxException"
import { $CommandExceptionType } from "com.mojang.brigadier.exceptions.CommandExceptionType"
import { $ImmutableStringReader$$Type } from "com.mojang.brigadier.ImmutableStringReader"

export class $SimpleCommandExceptionType implements $CommandExceptionType {
constructor(message0: $Message$$Type)

public "create"(): $CommandSyntaxException
public "createWithContext"(immutableStringReader0: $ImmutableStringReader$$Type): $CommandSyntaxException
}
}

declare module "com.mojang.brigadier.context.CommandContextBuilder" {
import { $List } from "java.util.List"
import { $CommandDispatcher, $CommandDispatcher$$Type } from "com.mojang.brigadier.CommandDispatcher"
import { $ParsedCommandNode } from "com.mojang.brigadier.context.ParsedCommandNode"
import { $CommandContext } from "com.mojang.brigadier.context.CommandContext"
import { $Command, $Command$$Type } from "com.mojang.brigadier.Command"
import { $Map } from "java.util.Map"
import { $CommandNode, $CommandNode$$Type } from "com.mojang.brigadier.tree.CommandNode"
import { $ParsedArgument, $ParsedArgument$$Type } from "com.mojang.brigadier.context.ParsedArgument"
import { $SuggestionContext } from "com.mojang.brigadier.context.SuggestionContext"
import { $StringRange, $StringRange$$Type } from "com.mojang.brigadier.context.StringRange"

export class $CommandContextBuilder<S = any> {
constructor(commandDispatcher0: $CommandDispatcher$$Type<S>, s1: S, commandNode2: $CommandNode$$Type<S>, int3: integer)

public "build"(string0: string): $CommandContext<S>
public "copy"(): $CommandContextBuilder<S>
public "findSuggestionContext"(int0: integer): $SuggestionContext<S>
public "getArguments"(): $Map<string, $ParsedArgument<S, any>>
public "getChild"(): $CommandContextBuilder<S>
public "getCommand"(): $Command<S>
public "getDispatcher"(): $CommandDispatcher<S>
public "getLastChild"(): $CommandContextBuilder<S>
public "getNodes"(): $List<$ParsedCommandNode<S>>
public "getRange"(): $StringRange
public "getRootNode"(): $CommandNode<S>
public "getSource"(): S
public "withArgument"(string0: string, parsedArgument1: $ParsedArgument$$Type<S, any>): $CommandContextBuilder<S>
public "withChild"(commandContextBuilder0: $CommandContextBuilder$$Type<S>): $CommandContextBuilder<S>
public "withCommand"(command0: $Command$$Type<S>): $CommandContextBuilder<S>
public "withNode"(commandNode0: $CommandNode$$Type<S>, stringRange1: $StringRange$$Type): $CommandContextBuilder<S>
public "withSource"(s0: S): $CommandContextBuilder<S>
get "arguments"(): $Map<string, $ParsedArgument<S, any>>
get "child"(): $CommandContextBuilder<S>
get "command"(): $Command<S>
get "dispatcher"(): $CommandDispatcher<S>
get "lastChild"(): $CommandContextBuilder<S>
get "nodes"(): $List<$ParsedCommandNode<S>>
get "range"(): $StringRange
get "rootNode"(): $CommandNode<S>
get "source"(): S
}
}

declare module "com.mojang.brigadier.exceptions.Dynamic3CommandExceptionType$Function" {
import { $Message } from "com.mojang.brigadier.Message"

export interface $Dynamic3CommandExceptionType$Function {
"apply"(object0: any, object1: any, object2: any): $Message
}

export namespace $Dynamic3CommandExceptionType$Function {
const probejs$$marker: never
}
export abstract class $Dynamic3CommandExceptionType$Function$$Static implements $Dynamic3CommandExceptionType$Function {
}
}

declare module "com.mojang.brigadier.exceptions.Dynamic3CommandExceptionType" {
import { $Dynamic3CommandExceptionType$Function$$Type } from "com.mojang.brigadier.exceptions.Dynamic3CommandExceptionType$Function"
import { $CommandSyntaxException } from "com.mojang.brigadier.exceptions.CommandSyntaxException"
import { $CommandExceptionType } from "com.mojang.brigadier.exceptions.CommandExceptionType"
import { $ImmutableStringReader$$Type } from "com.mojang.brigadier.ImmutableStringReader"

export class $Dynamic3CommandExceptionType implements $CommandExceptionType {
constructor(function0: $Dynamic3CommandExceptionType$Function$$Type)

public "create"(object0: any, object1: any, object2: any): $CommandSyntaxException
public "createWithContext"(immutableStringReader0: $ImmutableStringReader$$Type, object1: any, object2: any, object3: any): $CommandSyntaxException
}
}

declare module "com.mojang.brigadier.exceptions.CommandExceptionType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CommandExceptionType {
}

export namespace $CommandExceptionType {
const probejs$$marker: never
}
export abstract class $CommandExceptionType$$Static implements $CommandExceptionType {
}
}

declare module "com.mojang.brigadier.context.ParsedArgument" {
import { $StringRange } from "com.mojang.brigadier.context.StringRange"

export class $ParsedArgument<S = any, T = any> {
constructor(int0: integer, int1: integer, t2: T)

public "getRange"(): $StringRange
public "getResult"(): T
get "range"(): $StringRange
get "result"(): T
}
}

declare module "com.mojang.brigadier.CommandDispatcher" {
import { $LiteralCommandNode } from "com.mojang.brigadier.tree.LiteralCommandNode"
import { $Suggestions } from "com.mojang.brigadier.suggestion.Suggestions"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $LiteralArgumentBuilder$$Type } from "com.mojang.brigadier.builder.LiteralArgumentBuilder"
import { $AmbiguityConsumer$$Type } from "com.mojang.brigadier.AmbiguityConsumer"
import { $Map } from "java.util.Map"
import { $ParseResults, $ParseResults$$Type } from "com.mojang.brigadier.ParseResults"
import { $CommandNode, $CommandNode$$Type } from "com.mojang.brigadier.tree.CommandNode"
import { $StringReader$$Type } from "com.mojang.brigadier.StringReader"
import { $ResultConsumer$$Type } from "com.mojang.brigadier.ResultConsumer"
import { $RootCommandNode, $RootCommandNode$$Type } from "com.mojang.brigadier.tree.RootCommandNode"

export class $CommandDispatcher<S = any> {
static readonly "ARGUMENT_SEPARATOR": string
static readonly "ARGUMENT_SEPARATOR_CHAR": character

constructor()
constructor(rootCommandNode0: $RootCommandNode$$Type<S>)

public "execute"(string0: string, s1: S): integer
public "execute"(stringReader0: $StringReader$$Type, s1: S): integer
public "execute"(parseResults0: $ParseResults$$Type<S>): integer
public "findAmbiguities"(ambiguityConsumer0: $AmbiguityConsumer$$Type<S>): void
public "findNode"(collection0: $Collection$$Type<string>): $CommandNode<S>
public "getAllUsage"(commandNode0: $CommandNode$$Type<S>, s1: S, boolean2: boolean): string[]
public "getCompletionSuggestions"(parseResults0: $ParseResults$$Type<S>): $CompletableFuture<$Suggestions>
public "getCompletionSuggestions"(parseResults0: $ParseResults$$Type<S>, int1: integer): $CompletableFuture<$Suggestions>
public "getPath"(commandNode0: $CommandNode$$Type<S>): $Collection<string>
public "getRoot"(): $RootCommandNode<S>
public "getSmartUsage"(commandNode0: $CommandNode$$Type<S>, s1: S): $Map<$CommandNode<S>, string>
public "parse"(string0: string, s1: S): $ParseResults<S>
public "parse"(stringReader0: $StringReader$$Type, s1: S): $ParseResults<S>
public "register"(literalArgumentBuilder0: $LiteralArgumentBuilder$$Type<S>): $LiteralCommandNode<S>
public "setConsumer"(resultConsumer0: $ResultConsumer$$Type<S>): void
get "root"(): $RootCommandNode<S>
set "consumer"(value: $ResultConsumer$$Type<S>)
}
}

declare module "com.mojang.brigadier.suggestion.SuggestionsBuilder" {
import { $Suggestions } from "com.mojang.brigadier.suggestion.Suggestions"
import { $Message$$Type } from "com.mojang.brigadier.Message"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"

export class $SuggestionsBuilder {
constructor(string0: string, string1: string, int2: integer)
constructor(string0: string, int1: integer)

public "add"(suggestionsBuilder0: $SuggestionsBuilder$$Type): $SuggestionsBuilder
public "build"(): $Suggestions
public "buildFuture"(): $CompletableFuture<$Suggestions>
public "createOffset"(int0: integer): $SuggestionsBuilder
public "getInput"(): string
public "getRemaining"(): string
public "getRemainingLowerCase"(): string
public "getStart"(): integer
public "restart"(): $SuggestionsBuilder
public "suggest"(string0: string): $SuggestionsBuilder
public "suggest"(string0: string, message1: $Message$$Type): $SuggestionsBuilder
public "suggest"(int0: integer): $SuggestionsBuilder
public "suggest"(int0: integer, message1: $Message$$Type): $SuggestionsBuilder
get "input"(): string
get "remaining"(): string
get "remainingLowerCase"(): string
get "start"(): integer
}
}

declare module "com.mojang.brigadier.tree.CommandNode" {
import { $Suggestions } from "com.mojang.brigadier.suggestion.Suggestions"
import { $CommandContext$$Type } from "com.mojang.brigadier.context.CommandContext"
import { $Command } from "com.mojang.brigadier.Command"
import { $Predicate } from "java.util.function.Predicate"
import { $CommandContextBuilder$$Type } from "com.mojang.brigadier.context.CommandContextBuilder"
import { $Collection } from "java.util.Collection"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $RedirectModifier } from "com.mojang.brigadier.RedirectModifier"
import { $AmbiguityConsumer$$Type } from "com.mojang.brigadier.AmbiguityConsumer"
import { $Comparable } from "java.lang.Comparable"
import { $StringReader$$Type } from "com.mojang.brigadier.StringReader"
import { $ArgumentBuilder } from "com.mojang.brigadier.builder.ArgumentBuilder"
import { $SuggestionsBuilder$$Type } from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export class $CommandNode<S = any> implements $Comparable<$CommandNode<S>> {
public "addChild"(commandNode0: $CommandNode$$Type<S>): void
public "canUse"(s0: S): boolean
public "compareTo"(commandNode0: $CommandNode$$Type<S>): integer
public "createBuilder"(): $ArgumentBuilder<S, any>
public "findAmbiguities"(ambiguityConsumer0: $AmbiguityConsumer$$Type<S>): void
public "getChild"(string0: string): $CommandNode<S>
public "getChildren"(): $Collection<$CommandNode<S>>
public "getCommand"(): $Command<S>
public "getExamples"(): $Collection<string>
public "getName"(): string
public "getRedirect"(): $CommandNode<S>
public "getRedirectModifier"(): $RedirectModifier<S>
public "getRelevantNodes"(stringReader0: $StringReader$$Type): $Collection<$CommandNode<S>>
public "getRequirement"(): $Predicate<S>
public "getUsageText"(): string
public "isFork"(): boolean
public "listSuggestions"(commandContext0: $CommandContext$$Type<S>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public "parse"(stringReader0: $StringReader$$Type, commandContextBuilder1: $CommandContextBuilder$$Type<S>): void
get "children"(): $Collection<$CommandNode<S>>
get "command"(): $Command<S>
get "examples"(): $Collection<string>
get "name"(): string
get "redirect"(): $CommandNode<S>
get "redirectModifier"(): $RedirectModifier<S>
get "requirement"(): $Predicate<S>
get "usageText"(): string
get "fork"(): boolean
}
}

declare module "com.mojang.brigadier.StringReader" {
import { $ImmutableStringReader } from "com.mojang.brigadier.ImmutableStringReader"

export class $StringReader implements $ImmutableStringReader {
constructor(string0: string)
constructor(stringReader0: $StringReader$$Type)

public "canRead"(int0: integer): boolean
public "canRead"(): boolean
public "expect"(char0: character): void
public "getCursor"(): integer
public "getRead"(): string
public "getRemaining"(): string
public "getRemainingLength"(): integer
public "getString"(): string
public "getTotalLength"(): integer
public static "isAllowedInUnquotedString"(char0: character): boolean
public static "isAllowedNumber"(char0: character): boolean
public static "isQuotedStringStart"(char0: character): boolean
public "peek"(int0: integer): character
public "peek"(): character
public "read"(): character
public "readBoolean"(): boolean
public "readDouble"(): double
public "readFloat"(): float
public "readInt"(): integer
public "readLong"(): long
public "readQuotedString"(): string
public "readString"(): string
public "readStringUntil"(char0: character): string
public "readUnquotedString"(): string
public "setCursor"(int0: integer): void
public "skip"(): void
public "skipWhitespace"(): void
get "cursor"(): integer
get "remaining"(): string
get "remainingLength"(): integer
get "string"(): string
get "totalLength"(): integer
set "cursor"(value: integer)
}
}

declare module "com.mojang.brigadier.builder.LiteralArgumentBuilder" {
import { $LiteralCommandNode } from "com.mojang.brigadier.tree.LiteralCommandNode"
import { $ArgumentBuilder } from "com.mojang.brigadier.builder.ArgumentBuilder"

export class $LiteralArgumentBuilder<S = any> extends $ArgumentBuilder<S, $LiteralArgumentBuilder<S>> {
public "build"(): $LiteralCommandNode<S>
public "getLiteral"(): string
public static "literal"<S>(string0: string): $LiteralArgumentBuilder<S>
}
}

