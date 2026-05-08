declare module "net.minecraftforge.data.event.GatherDataEvent" {
import { $GatherDataEvent$DataGeneratorConfig$$Type } from "net.minecraftforge.data.event.GatherDataEvent$DataGeneratorConfig"
import { $ModContainer, $ModContainer$$Type } from "net.minecraftforge.fml.ModContainer"
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Collection } from "java.util.Collection"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $HolderLookup$Provider } from "net.minecraft.core.HolderLookup$Provider"
import { $DataGenerator, $DataGenerator$$Type } from "net.minecraft.data.DataGenerator"
import { $ExistingFileHelper, $ExistingFileHelper$$Type } from "net.minecraftforge.common.data.ExistingFileHelper"
import { $Path } from "java.nio.file.Path"

export class $GatherDataEvent extends $Event implements $IModBusEvent {
constructor(modContainer0: $ModContainer$$Type, dataGenerator1: $DataGenerator$$Type, dataGeneratorConfig2: $GatherDataEvent$DataGeneratorConfig$$Type, existingFileHelper3: $ExistingFileHelper$$Type)
constructor()

public "getExistingFileHelper"(): $ExistingFileHelper
public "getGenerator"(): $DataGenerator
public "getInputs"(): $Collection<$Path>
public "getLookupProvider"(): $CompletableFuture<$HolderLookup$Provider>
public "getModContainer"(): $ModContainer
public "includeClient"(): boolean
public "includeDev"(): boolean
public "includeReports"(): boolean
public "includeServer"(): boolean
public "validate"(): boolean
get "existingFileHelper"(): $ExistingFileHelper
get "generator"(): $DataGenerator
get "inputs"(): $Collection<$Path>
get "lookupProvider"(): $CompletableFuture<$HolderLookup$Provider>
get "modContainer"(): $ModContainer
}
}

declare module "net.minecraftforge.data.event.GatherDataEvent$DataGeneratorConfig" {
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $Set, $Set$$Type } from "java.util.Set"
import { $CompletableFuture$$Type } from "java.util.concurrent.CompletableFuture"
import { $HolderLookup$Provider$$Type } from "net.minecraft.core.HolderLookup$Provider"
import { $Path, $Path$$Type } from "java.nio.file.Path"
import { $DataGenerator } from "net.minecraft.data.DataGenerator"
import { $Function$$Type } from "java.util.function.Function"

export class $GatherDataEvent$DataGeneratorConfig {
constructor(set0: $Set$$Type<string>, path1: $Path$$Type, collection2: $Collection$$Type<$Path$$Type>, completableFuture3: $CompletableFuture$$Type<$HolderLookup$Provider$$Type>, boolean4: boolean, boolean5: boolean, boolean6: boolean, boolean7: boolean, boolean8: boolean, boolean9: boolean)

public "getInputs"(): $Collection<$Path>
public "getMods"(): $Set<string>
public "isFlat"(): boolean
public "makeGenerator"(function0: $Function$$Type<$Path$$Type, $Path>, boolean1: boolean): $DataGenerator
public "runAll"(): void
get "inputs"(): $Collection<$Path>
get "mods"(): $Set<string>
get "flat"(): boolean
}
}

