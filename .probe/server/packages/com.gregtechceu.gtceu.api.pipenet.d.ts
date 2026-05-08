declare module "com.gregtechceu.gtceu.api.pipenet.IPipeNode" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $IPipeType, $IPipeType$$Type } from "com.gregtechceu.gtceu.api.pipenet.IPipeType"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IPipeNode$$Type<PipeType extends ($Enum<PipeType> & $IPipeType<NodeDataType>) = ($Enum<PipeType> & $IPipeType<NodeDataType>), NodeDataType = any> = ($IPipeNode<PipeType, NodeDataType>);
}

declare module "com.gregtechceu.gtceu.api.pipenet.longdistance.LongDistanceNetwork" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LongDistanceNetwork$$Type = ($LongDistanceNetwork);
}

declare module "com.gregtechceu.gtceu.api.pipenet.longdistance.LongDistancePipeBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LongDistancePipeBlock$$Type = ($LongDistancePipeBlock);
}

declare module "com.gregtechceu.gtceu.api.pipenet.longdistance.LongDistanceNetwork$WorldData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LongDistanceNetwork$WorldData$$Type = ($LongDistanceNetwork$WorldData);
}

declare module "com.gregtechceu.gtceu.api.pipenet.longdistance.ILDEndpoint" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ILDEndpoint$$Type = ($ILDEndpoint);
}

declare module "com.gregtechceu.gtceu.api.pipenet.longdistance.ILDNetworkPart" {
import { $LongDistancePipeType$$Type } from "com.gregtechceu.gtceu.api.pipenet.longdistance.LongDistancePipeType"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ILDNetworkPart$$Type = ($ILDNetworkPart | (() => $LongDistancePipeType$$Type));
}

declare module "com.gregtechceu.gtceu.api.pipenet.IPipeType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IPipeType$$Type<NodeDataType = any> = ($IPipeType<NodeDataType>);
}

declare module "com.gregtechceu.gtceu.api.pipenet.IMaterialPipeType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IMaterialPipeType$$Type<NodeDataType = any> = ($IMaterialPipeType<NodeDataType>);
}

declare module "com.gregtechceu.gtceu.api.pipenet.LevelPipeNet" {
import { $PipeNet, $PipeNet$$Type } from "com.gregtechceu.gtceu.api.pipenet.PipeNet"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LevelPipeNet$$Type<NodeDataType = any, T extends $PipeNet<NodeDataType> = $PipeNet<NodeDataType>> = ($LevelPipeNet<NodeDataType, T>);
}

declare module "com.gregtechceu.gtceu.api.pipenet.IAttachData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IAttachData$$Type = ($IAttachData);
}

declare module "com.gregtechceu.gtceu.api.pipenet.Node" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Node$$Type<NodeDataType = any> = ($Node<NodeDataType>);
}

declare module "com.gregtechceu.gtceu.api.pipenet.IRoutePath" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IRoutePath$$Type<T = any> = ($IRoutePath<T>);
}

declare module "com.gregtechceu.gtceu.api.pipenet.PipeNet" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PipeNet$$Type<NodeDataType = any> = ($PipeNet<NodeDataType>);
}

declare module "com.gregtechceu.gtceu.api.pipenet.longdistance.LongDistancePipeType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LongDistancePipeType$$Type = ($LongDistancePipeType);
}

