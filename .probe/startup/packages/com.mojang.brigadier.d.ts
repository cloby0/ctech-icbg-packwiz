declare module "com.mojang.brigadier.context.ParsedCommandNode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ParsedCommandNode$$Type<S = any> = ($ParsedCommandNode<S>);
}

declare module "com.mojang.brigadier.SingleRedirectModifier" {
import { $CommandContext } from "com.mojang.brigadier.context.CommandContext"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SingleRedirectModifier$$Type<S = any> = ($SingleRedirectModifier<S> | ((arg0: $CommandContext<S>) => S));
}

declare module "com.mojang.brigadier.ImmutableStringReader" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ImmutableStringReader$$Type = ($ImmutableStringReader);
}

declare module "com.mojang.brigadier.ResultConsumer" {
import { $CommandContext } from "com.mojang.brigadier.context.CommandContext"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ResultConsumer$$Type<S = any> = ($ResultConsumer<S> | ((arg0: $CommandContext<S>, arg1: boolean, arg2: integer) => void));
}

declare module "com.mojang.brigadier.suggestion.Suggestions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Suggestions$$Type = ($Suggestions);
}

declare module "com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Dynamic2CommandExceptionType$$Type = ($Dynamic2CommandExceptionType);
}

declare module "com.mojang.brigadier.context.StringRange" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StringRange$$Type = ($StringRange);
}

declare module "com.mojang.brigadier.Command" {
import { $CommandContext } from "com.mojang.brigadier.context.CommandContext"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Command$$Type<S = any> = ($Command<S> | ((arg0: $CommandContext<S>) => integer));
}

declare module "com.mojang.brigadier.ParseResults" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ParseResults$$Type<S = any> = ($ParseResults<S>);
}

declare module "com.mojang.brigadier.tree.RootCommandNode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RootCommandNode$$Type<S = any> = ($RootCommandNode<S>);
}

declare module "com.mojang.brigadier.context.CommandContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CommandContext$$Type<S = any> = ($CommandContext<S>);
}

declare module "com.mojang.brigadier.context.SuggestionContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SuggestionContext$$Type<S = any> = ($SuggestionContext<S>);
}

declare module "com.mojang.brigadier.suggestion.SuggestionProvider" {
import { $Suggestions$$Type } from "com.mojang.brigadier.suggestion.Suggestions"
import { $CommandContext } from "com.mojang.brigadier.context.CommandContext"
import { $CompletableFuture$$Type } from "java.util.concurrent.CompletableFuture"
import { $SuggestionsBuilder } from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SuggestionProvider$$Type<S = any> = ($SuggestionProvider<S> | ((arg0: $CommandContext<S>, arg1: $SuggestionsBuilder) => $CompletableFuture$$Type<$Suggestions$$Type>));
}

declare module "com.mojang.brigadier.exceptions.BuiltInExceptionProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BuiltInExceptionProvider$$Type = ($BuiltInExceptionProvider);
}

declare module "com.mojang.brigadier.Message" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Message$$Type = ($Message | (() => string));
}

declare module "com.mojang.brigadier.tree.LiteralCommandNode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LiteralCommandNode$$Type<S = any> = ($LiteralCommandNode<S>);
}

declare module "com.mojang.brigadier.builder.RequiredArgumentBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RequiredArgumentBuilder$$Type<S = any, T = any> = ($RequiredArgumentBuilder<S, T>);
}

declare module "com.mojang.brigadier.suggestion.Suggestion" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Suggestion$$Type = ($Suggestion);
}

declare module "com.mojang.brigadier.RedirectModifier" {
import { $CommandContext } from "com.mojang.brigadier.context.CommandContext"
import { $Collection$$Type } from "java.util.Collection"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RedirectModifier$$Type<S = any> = ($RedirectModifier<S> | ((arg0: $CommandContext<S>) => $Collection$$Type<S>));
}

declare module "com.mojang.brigadier.tree.ArgumentCommandNode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ArgumentCommandNode$$Type<S = any, T = any> = ($ArgumentCommandNode<S, T>);
}

declare module "com.mojang.brigadier.builder.ArgumentBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ArgumentBuilder$$Type<S = any, T extends $ArgumentBuilder<S, T> = $ArgumentBuilder<S, T>> = ($ArgumentBuilder<S, T>);
}

declare module "com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType$Function" {
import { $Message$$Type } from "com.mojang.brigadier.Message"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Dynamic2CommandExceptionType$Function$$Type = ($Dynamic2CommandExceptionType$Function | ((arg0: any, arg1: any) => $Message$$Type));
}

declare module "com.mojang.brigadier.exceptions.DynamicCommandExceptionType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DynamicCommandExceptionType$$Type = ($DynamicCommandExceptionType);
}

declare module "com.mojang.brigadier.AmbiguityConsumer" {
import { $Collection } from "java.util.Collection"
import { $CommandNode } from "com.mojang.brigadier.tree.CommandNode"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AmbiguityConsumer$$Type<S = any> = ($AmbiguityConsumer<S> | ((arg0: $CommandNode<S>, arg1: $CommandNode<S>, arg2: $CommandNode<S>, arg3: $Collection<string>) => void));
}

declare module "com.mojang.brigadier.arguments.ArgumentType" {
import { $StringReader } from "com.mojang.brigadier.StringReader"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ArgumentType$$Type<T = any> = ($ArgumentType<T> | ((arg0: $StringReader) => T));
}

declare module "com.mojang.brigadier.exceptions.CommandSyntaxException" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CommandSyntaxException$$Type = ($CommandSyntaxException);
}

declare module "com.mojang.brigadier.exceptions.SimpleCommandExceptionType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SimpleCommandExceptionType$$Type = ($SimpleCommandExceptionType);
}

declare module "com.mojang.brigadier.context.CommandContextBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CommandContextBuilder$$Type<S = any> = ($CommandContextBuilder<S>);
}

declare module "com.mojang.brigadier.exceptions.Dynamic3CommandExceptionType$Function" {
import { $Message$$Type } from "com.mojang.brigadier.Message"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Dynamic3CommandExceptionType$Function$$Type = ($Dynamic3CommandExceptionType$Function | ((arg0: any, arg1: any, arg2: any) => $Message$$Type));
}

declare module "com.mojang.brigadier.exceptions.Dynamic3CommandExceptionType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Dynamic3CommandExceptionType$$Type = ($Dynamic3CommandExceptionType);
}

declare module "com.mojang.brigadier.exceptions.CommandExceptionType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CommandExceptionType$$Type = ($CommandExceptionType);
}

declare module "com.mojang.brigadier.context.ParsedArgument" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ParsedArgument$$Type<S = any, T = any> = ($ParsedArgument<S, T>);
}

declare module "com.mojang.brigadier.CommandDispatcher" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CommandDispatcher$$Type<S = any> = ($CommandDispatcher<S>);
}

declare module "com.mojang.brigadier.suggestion.SuggestionsBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SuggestionsBuilder$$Type = ($SuggestionsBuilder);
}

declare module "com.mojang.brigadier.tree.CommandNode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CommandNode$$Type<S = any> = ($CommandNode<S>);
}

declare module "com.mojang.brigadier.StringReader" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StringReader$$Type = ($StringReader);
}

declare module "com.mojang.brigadier.builder.LiteralArgumentBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LiteralArgumentBuilder$$Type<S = any> = ($LiteralArgumentBuilder<S>);
}

