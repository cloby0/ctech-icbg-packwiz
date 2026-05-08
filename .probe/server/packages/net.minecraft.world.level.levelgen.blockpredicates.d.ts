declare module "net.minecraft.world.level.levelgen.blockpredicates.MatchingFluidsPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MatchingFluidsPredicate$$Type = ($MatchingFluidsPredicate);
}

declare module "net.minecraft.world.level.levelgen.blockpredicates.CombiningPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CombiningPredicate$$Type = ($CombiningPredicate);
}

declare module "net.minecraft.world.level.levelgen.blockpredicates.AnyOfPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AnyOfPredicate$$Type = ($AnyOfPredicate);
}

declare module "net.minecraft.world.level.levelgen.blockpredicates.WouldSurvivePredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WouldSurvivePredicate$$Type = ($WouldSurvivePredicate);
}

declare module "net.minecraft.world.level.levelgen.blockpredicates.MatchingBlocksPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MatchingBlocksPredicate$$Type = ($MatchingBlocksPredicate);
}

declare module "net.minecraft.world.level.levelgen.blockpredicates.HasSturdyFacePredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HasSturdyFacePredicate$$Type = ($HasSturdyFacePredicate);
}

declare module "net.minecraft.world.level.levelgen.blockpredicates.ReplaceablePredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ReplaceablePredicate$$Type = ($ReplaceablePredicate);
}

declare module "net.minecraft.world.level.levelgen.blockpredicates.SolidPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SolidPredicate$$Type = ($SolidPredicate);
}

declare module "net.minecraft.world.level.levelgen.blockpredicates.TrueBlockPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TrueBlockPredicate$$Type = ($TrueBlockPredicate);
}

declare module "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockPredicate$$Type = ($BlockPredicate);
}

declare module "net.minecraft.world.level.levelgen.blockpredicates.StateTestingPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StateTestingPredicate$$Type = ($StateTestingPredicate);
}

declare module "net.minecraft.world.level.levelgen.blockpredicates.AllOfPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AllOfPredicate$$Type = ($AllOfPredicate);
}

declare module "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicateType" {
import { $MatchingBlockTagPredicate } from "net.minecraft.world.level.levelgen.blockpredicates.MatchingBlockTagPredicate"
import { $InsideWorldBoundsPredicate } from "net.minecraft.world.level.levelgen.blockpredicates.InsideWorldBoundsPredicate"
import { $MatchingFluidsPredicate } from "net.minecraft.world.level.levelgen.blockpredicates.MatchingFluidsPredicate"
import { $ReplaceablePredicate } from "net.minecraft.world.level.levelgen.blockpredicates.ReplaceablePredicate"
import { $TrueBlockPredicate } from "net.minecraft.world.level.levelgen.blockpredicates.TrueBlockPredicate"
import { $AllOfPredicate } from "net.minecraft.world.level.levelgen.blockpredicates.AllOfPredicate"
import { $NotPredicate } from "net.minecraft.world.level.levelgen.blockpredicates.NotPredicate"
import { $WouldSurvivePredicate } from "net.minecraft.world.level.levelgen.blockpredicates.WouldSurvivePredicate"
import { $AnyOfPredicate } from "net.minecraft.world.level.levelgen.blockpredicates.AnyOfPredicate"
import { $MatchingBlocksPredicate } from "net.minecraft.world.level.levelgen.blockpredicates.MatchingBlocksPredicate"
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"
import { $SolidPredicate } from "net.minecraft.world.level.levelgen.blockpredicates.SolidPredicate"
import { $HasSturdyFacePredicate } from "net.minecraft.world.level.levelgen.blockpredicates.HasSturdyFacePredicate"
import { $BlockPredicate, $BlockPredicate$$Type } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate"

export interface $BlockPredicateType<P extends $BlockPredicate = $BlockPredicate> {
"codec"(): $Codec<P>
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.BlockPredicateType
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.BlockPredicateTypeTag
}

export namespace $BlockPredicateType {
const ALL_OF: $BlockPredicateType<$AllOfPredicate>
const ANY_OF: $BlockPredicateType<$AnyOfPredicate>
const HAS_STURDY_FACE: $BlockPredicateType<$HasSturdyFacePredicate>
const INSIDE_WORLD_BOUNDS: $BlockPredicateType<$InsideWorldBoundsPredicate>
const MATCHING_BLOCKS: $BlockPredicateType<$MatchingBlocksPredicate>
const MATCHING_BLOCK_TAG: $BlockPredicateType<$MatchingBlockTagPredicate>
const MATCHING_FLUIDS: $BlockPredicateType<$MatchingFluidsPredicate>
const NOT: $BlockPredicateType<$NotPredicate>
const REPLACEABLE: $BlockPredicateType<$ReplaceablePredicate>
const SOLID: $BlockPredicateType<$SolidPredicate>
const TRUE: $BlockPredicateType<$TrueBlockPredicate>
const WOULD_SURVIVE: $BlockPredicateType<$WouldSurvivePredicate>
}
export abstract class $BlockPredicateType$$Static<P extends $BlockPredicate = $BlockPredicate> implements $BlockPredicateType<P> {
static readonly "ALL_OF": $BlockPredicateType<$AllOfPredicate>
static readonly "ANY_OF": $BlockPredicateType<$AnyOfPredicate>
static readonly "HAS_STURDY_FACE": $BlockPredicateType<$HasSturdyFacePredicate>
static readonly "INSIDE_WORLD_BOUNDS": $BlockPredicateType<$InsideWorldBoundsPredicate>
static readonly "MATCHING_BLOCKS": $BlockPredicateType<$MatchingBlocksPredicate>
static readonly "MATCHING_BLOCK_TAG": $BlockPredicateType<$MatchingBlockTagPredicate>
static readonly "MATCHING_FLUIDS": $BlockPredicateType<$MatchingFluidsPredicate>
static readonly "NOT": $BlockPredicateType<$NotPredicate>
static readonly "REPLACEABLE": $BlockPredicateType<$ReplaceablePredicate>
static readonly "SOLID": $BlockPredicateType<$SolidPredicate>
static readonly "TRUE": $BlockPredicateType<$TrueBlockPredicate>
static readonly "WOULD_SURVIVE": $BlockPredicateType<$WouldSurvivePredicate>

}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockPredicateType$$Type<P extends $BlockPredicate = $BlockPredicate> = ($BlockPredicateType<P> | Special.BlockPredicateType | (() => $Codec$$Type<P>));
}

declare module "net.minecraft.world.level.levelgen.blockpredicates.MatchingBlockTagPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MatchingBlockTagPredicate$$Type = ($MatchingBlockTagPredicate);
}

declare module "net.minecraft.world.level.levelgen.blockpredicates.NotPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NotPredicate$$Type = ($NotPredicate);
}

declare module "net.minecraft.world.level.levelgen.blockpredicates.InsideWorldBoundsPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InsideWorldBoundsPredicate$$Type = ($InsideWorldBoundsPredicate);
}

