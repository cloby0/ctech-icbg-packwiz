declare module "com.gregtechceu.gtceu.api.block.IMachineBlock" {
import { $MachineDefinition$$Type } from "com.gregtechceu.gtceu.api.machine.MachineDefinition"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IMachineBlock$$Type = ($IMachineBlock | (() => $MachineDefinition$$Type));
}

declare module "com.gregtechceu.gtceu.api.block.ICoilType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ICoilType$$Type = ($ICoilType);
}

declare module "com.gregtechceu.gtceu.api.block.MaterialPipeBlock" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $IMaterialPipeType, $IMaterialPipeType$$Type } from "com.gregtechceu.gtceu.api.pipenet.IMaterialPipeType"
import { $IPipeType, $IPipeType$$Type } from "com.gregtechceu.gtceu.api.pipenet.IPipeType"
import { $LevelPipeNet, $LevelPipeNet$$Type } from "com.gregtechceu.gtceu.api.pipenet.LevelPipeNet"
import { $PipeNet, $PipeNet$$Type } from "com.gregtechceu.gtceu.api.pipenet.PipeNet"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MaterialPipeBlock$$Type<PipeType extends ($Enum<PipeType> & $IPipeType<NodeDataType> & $IMaterialPipeType<NodeDataType>) = ($Enum<PipeType> & $IPipeType<NodeDataType> & $IMaterialPipeType<NodeDataType>), NodeDataType = any, WorldPipeNetType extends $LevelPipeNet<NodeDataType, $PipeNet<NodeDataType>> = $LevelPipeNet<NodeDataType, $PipeNet<NodeDataType>>> = ($MaterialPipeBlock<PipeType, NodeDataType, WorldPipeNetType>);
}

declare module "com.gregtechceu.gtceu.api.block.IFilterType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IFilterType$$Type = ($IFilterType);
}

declare module "com.gregtechceu.gtceu.api.block.IFusionCasingType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IFusionCasingType$$Type = ($IFusionCasingType);
}

declare module "com.gregtechceu.gtceu.api.block.ActiveBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ActiveBlock$$Type = ($ActiveBlock);
}

declare module "com.gregtechceu.gtceu.api.block.PipeBlock" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $IPipeType, $IPipeType$$Type } from "com.gregtechceu.gtceu.api.pipenet.IPipeType"
import { $LevelPipeNet, $LevelPipeNet$$Type } from "com.gregtechceu.gtceu.api.pipenet.LevelPipeNet"
import { $PipeNet, $PipeNet$$Type } from "com.gregtechceu.gtceu.api.pipenet.PipeNet"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PipeBlock$$Type<PipeType extends ($Enum<PipeType> & $IPipeType<NodeDataType>) = ($Enum<PipeType> & $IPipeType<NodeDataType>), NodeDataType = any, WorldPipeNetType extends $LevelPipeNet<NodeDataType, $PipeNet<NodeDataType>> = $LevelPipeNet<NodeDataType, $PipeNet<NodeDataType>>> = ($PipeBlock<PipeType, NodeDataType, WorldPipeNetType>);
}

