declare module "com.gregtechceu.gtceu.api.registry.registrate.GTBlockBuilder" {
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GTBlockBuilder$$Type<T extends $Block = $Block, P = any> = ($GTBlockBuilder<T, P>);
}

declare module "com.gregtechceu.gtceu.api.registry.GTRegistries" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GTRegistries$$Type = ($GTRegistries);
}

declare module "com.gregtechceu.gtceu.api.registry.registrate.GTRegistrate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GTRegistrate$$Type = ($GTRegistrate);
}

declare module "com.gregtechceu.gtceu.api.registry.registrate.BuilderBase" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BuilderBase$$Type<T = any> = ($BuilderBase<T>);
}

declare module "com.gregtechceu.gtceu.api.registry.registrate.SoundEntryBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SoundEntryBuilder$$Type = ($SoundEntryBuilder);
}

declare module "com.gregtechceu.gtceu.api.registry.registrate.IGTFluidBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IGTFluidBuilder$$Type = ($IGTFluidBuilder);
}

declare module "com.gregtechceu.gtceu.api.registry.registrate.MachineBuilder" {
import { $MachineDefinition, $MachineDefinition$$Type } from "com.gregtechceu.gtceu.api.machine.MachineDefinition"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MachineBuilder$$Type<DEFINITION extends $MachineDefinition = $MachineDefinition, TYPE extends $MachineBuilder<DEFINITION, TYPE> = $MachineBuilder<DEFINITION, TYPE>> = ($MachineBuilder<DEFINITION, TYPE>);
}

declare module "com.gregtechceu.gtceu.api.registry.registrate.MachineBuilder$ModelInitializer" {
import { $Block } from "net.minecraft.world.level.block.Block"
import { $DataGenContext } from "com.tterrag.registrate.providers.DataGenContext"
import { $MachineModelBuilder } from "com.gregtechceu.gtceu.data.model.builder.MachineModelBuilder"
import { $BlockModelBuilder } from "net.minecraftforge.client.model.generators.BlockModelBuilder"
import { $GTBlockstateProvider } from "com.gregtechceu.gtceu.api.registry.registrate.provider.GTBlockstateProvider"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MachineBuilder$ModelInitializer$$Type = ($MachineBuilder$ModelInitializer | ((arg0: $DataGenContext<$Block, $Block>, arg1: $GTBlockstateProvider, arg2: $MachineModelBuilder<$BlockModelBuilder>) => void));
}

declare module "com.gregtechceu.gtceu.api.registry.registrate.provider.GTBlockstateProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GTBlockstateProvider$$Type = ($GTBlockstateProvider);
}

declare module "com.gregtechceu.gtceu.api.registry.registrate.MultiblockMachineBuilder" {
import { $MultiblockMachineDefinition, $MultiblockMachineDefinition$$Type } from "com.gregtechceu.gtceu.api.machine.MultiblockMachineDefinition"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MultiblockMachineBuilder$$Type<DEFINITION extends $MultiblockMachineDefinition = $MultiblockMachineDefinition, TYPE extends $MultiblockMachineBuilder<DEFINITION, TYPE> = $MultiblockMachineBuilder<DEFINITION, TYPE>> = ($MultiblockMachineBuilder<DEFINITION, TYPE>);
}

declare module "com.gregtechceu.gtceu.api.registry.GTRegistry$String" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GTRegistry$String$$Type<V = any> = ($GTRegistry$String<V>);
}

declare module "com.gregtechceu.gtceu.api.registry.GTRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GTRegistry$$Type<K = any, V = any> = ($GTRegistry<K, V>);
}

declare module "com.gregtechceu.gtceu.api.registry.GTRegistry$RL" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GTRegistry$RL$$Type<V = any> = ($GTRegistry$RL<V>);
}

