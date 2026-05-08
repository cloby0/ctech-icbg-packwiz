declare module "net.minecraft.client.searchtree.RefreshableSearchTree" {
import { $List } from "java.util.List"
import { $SearchTree } from "net.minecraft.client.searchtree.SearchTree"

export interface $RefreshableSearchTree<T = any> extends $SearchTree<T> {
"refresh"(): void
"search"(string0: string): $List<T>
}

export namespace $RefreshableSearchTree {
function empty<T>(): $RefreshableSearchTree<T>
}
export abstract class $RefreshableSearchTree$$Static<T = any> implements $RefreshableSearchTree<T> {
static "empty"<T>(): $RefreshableSearchTree<T>
}
}

declare module "net.minecraft.client.searchtree.SearchRegistry$Key" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SearchRegistry$Key<T = any> {
constructor()

}
}

declare module "net.minecraft.client.searchtree.SearchTree" {
import { $List } from "java.util.List"

export interface $SearchTree<T = any> {
"search"(string0: string): $List<T>
}

export namespace $SearchTree {
const probejs$$marker: never
}
export abstract class $SearchTree$$Static<T = any> implements $SearchTree<T> {
}
}

declare module "net.minecraft.client.searchtree.SearchRegistry" {
import { $ProfilerFiller$$Type } from "net.minecraft.util.profiling.ProfilerFiller"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $ResourceManagerReloadListener } from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $SearchRegistry$TreeBuilderSupplier$$Type } from "net.minecraft.client.searchtree.SearchRegistry$TreeBuilderSupplier"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import { $SearchRegistry$Key, $SearchRegistry$Key$$Type } from "net.minecraft.client.searchtree.SearchRegistry$Key"
import { $SearchTree } from "net.minecraft.client.searchtree.SearchTree"
import { $List$$Type } from "java.util.List"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $RecipeCollection } from "net.minecraft.client.gui.screens.recipebook.RecipeCollection"

export class $SearchRegistry implements $ResourceManagerReloadListener {
static readonly "CREATIVE_NAMES": $SearchRegistry$Key<$ItemStack>
static readonly "CREATIVE_TAGS": $SearchRegistry$Key<$ItemStack>
static readonly "RECIPE_COLLECTIONS": $SearchRegistry$Key<$RecipeCollection>

constructor()

public "getName"(): string
public "getTree"<T>(key0: $SearchRegistry$Key$$Type<T>): $SearchTree<T>
public "onResourceManagerReload"(resourceManager0: $ResourceManager$$Type): void
public "populate"<T>(key0: $SearchRegistry$Key$$Type<T>, list1: $List$$Type<T>): void
public "register"<T>(key0: $SearchRegistry$Key$$Type<T>, treeBuilderSupplier1: $SearchRegistry$TreeBuilderSupplier$$Type<T>): void
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
get "name"(): string
}
}

declare module "net.minecraft.client.searchtree.SearchRegistry$TreeBuilderSupplier" {
import { $List, $List$$Type } from "java.util.List"
import { $RefreshableSearchTree, $RefreshableSearchTree$$Type } from "net.minecraft.client.searchtree.RefreshableSearchTree"
import { $Function, $Function$$Type } from "java.util.function.Function"

export interface $SearchRegistry$TreeBuilderSupplier<T = any> extends $Function<$List<T>, $RefreshableSearchTree<T>> {
"andThen"<V>(function0: $Function$$Type<$RefreshableSearchTree$$Type<T>, V>): $Function<$List<T>, V>
"apply"(list0: $List$$Type<T>): $RefreshableSearchTree<T>
"compose"<V>(function0: $Function$$Type<V, $List<T>>): $Function<V, $RefreshableSearchTree<T>>
}

export namespace $SearchRegistry$TreeBuilderSupplier {
function identity<T>(): $Function<T, T>
}
export abstract class $SearchRegistry$TreeBuilderSupplier$$Static<T = any> implements $SearchRegistry$TreeBuilderSupplier<T> {
static "identity"<T>(): $Function<T, T>
}
}

