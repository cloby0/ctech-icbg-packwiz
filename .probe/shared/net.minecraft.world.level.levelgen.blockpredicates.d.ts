declare module "net.minecraft.world.level.levelgen.blockpredicates.MatchingFluidsPredicate" {
import { $StateTestingPredicate } from "net.minecraft.world.level.levelgen.blockpredicates.StateTestingPredicate"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $HolderSet$$Type } from "net.minecraft.core.HolderSet"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $BlockPredicateType } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicateType"
import { $BiPredicate, $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $BlockPredicate, $BlockPredicate$$Type } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate"

export class $MatchingFluidsPredicate extends $StateTestingPredicate {
static readonly "CODEC": $Codec<$MatchingFluidsPredicate>

constructor(vec3i0: $Vec3i$$Type, holderSet1: $HolderSet$$Type<$Fluid$$Type>)

public static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "alwaysTrue"(): $BlockPredicate
public "and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
public static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
public static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
public static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
public static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public "negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "noFluid"(): $BlockPredicate
public static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
public "or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "replaceable"(): $BlockPredicate
public static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(): $BlockPredicate
public "type"(): $BlockPredicateType<any>
public static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

declare module "net.minecraft.world.level.levelgen.blockpredicates.CombiningPredicate" {
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Function$$Type } from "java.util.function.Function"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $BlockPredicateType } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicateType"
import { $BiPredicate, $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $BlockPredicate, $BlockPredicate$$Type } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate"

export class $CombiningPredicate implements $BlockPredicate {
public static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "alwaysTrue"(): $BlockPredicate
public "and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "codec"<T extends $CombiningPredicate>(function0: $Function$$Type<$List$$Type<$BlockPredicate$$Type>, T>): $Codec<T>
public static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
public static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
public static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
public static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
public static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public "negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "noFluid"(): $BlockPredicate
public static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
public "or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "replaceable"(): $BlockPredicate
public static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(): $BlockPredicate
public "test"(worldGenLevel0: $WorldGenLevel$$Type, blockPos1: $BlockPos$$Type): boolean
public "type"(): $BlockPredicateType<any>
public static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

declare module "net.minecraft.world.level.levelgen.blockpredicates.AnyOfPredicate" {
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $CombiningPredicate } from "net.minecraft.world.level.levelgen.blockpredicates.CombiningPredicate"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $BlockPredicateType } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicateType"
import { $BiPredicate, $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $BlockPredicate, $BlockPredicate$$Type } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate"

export class $AnyOfPredicate extends $CombiningPredicate {
static readonly "CODEC": $Codec<$AnyOfPredicate>

constructor(list0: $List$$Type<$BlockPredicate$$Type>)

public static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "alwaysTrue"(): $BlockPredicate
public "and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
public static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
public static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
public static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
public static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public "negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "noFluid"(): $BlockPredicate
public static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
public "or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "replaceable"(): $BlockPredicate
public static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(): $BlockPredicate
public "test"(worldGenLevel0: $WorldGenLevel$$Type, blockPos1: $BlockPos$$Type): boolean
public "type"(): $BlockPredicateType<any>
public static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

declare module "net.minecraft.world.level.levelgen.blockpredicates.WouldSurvivePredicate" {
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $BlockPredicateType } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicateType"
import { $BiPredicate, $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $BlockPredicate, $BlockPredicate$$Type } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate"

export class $WouldSurvivePredicate implements $BlockPredicate {
static readonly "CODEC": $Codec<$WouldSurvivePredicate>

public static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "alwaysTrue"(): $BlockPredicate
public "and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
public static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
public static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
public static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
public static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public "negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "noFluid"(): $BlockPredicate
public static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
public "or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "replaceable"(): $BlockPredicate
public static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(): $BlockPredicate
public "test"(worldGenLevel0: $WorldGenLevel$$Type, blockPos1: $BlockPos$$Type): boolean
public "type"(): $BlockPredicateType<any>
public static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

declare module "net.minecraft.world.level.levelgen.blockpredicates.MatchingBlocksPredicate" {
import { $StateTestingPredicate } from "net.minecraft.world.level.levelgen.blockpredicates.StateTestingPredicate"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $HolderSet$$Type } from "net.minecraft.core.HolderSet"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $BlockPredicateType } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicateType"
import { $BiPredicate, $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $BlockPredicate, $BlockPredicate$$Type } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate"

export class $MatchingBlocksPredicate extends $StateTestingPredicate {
static readonly "CODEC": $Codec<$MatchingBlocksPredicate>

constructor(vec3i0: $Vec3i$$Type, holderSet1: $HolderSet$$Type<$Block$$Type>)

public static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "alwaysTrue"(): $BlockPredicate
public "and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
public static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
public static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
public static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
public static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public "negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "noFluid"(): $BlockPredicate
public static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
public "or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "replaceable"(): $BlockPredicate
public static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(): $BlockPredicate
public "type"(): $BlockPredicateType<any>
public static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

declare module "net.minecraft.world.level.levelgen.blockpredicates.HasSturdyFacePredicate" {
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $BlockPredicateType } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicateType"
import { $BiPredicate, $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $BlockPredicate, $BlockPredicate$$Type } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate"

export class $HasSturdyFacePredicate implements $BlockPredicate {
static readonly "CODEC": $Codec<$HasSturdyFacePredicate>

constructor(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type)

public static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "alwaysTrue"(): $BlockPredicate
public "and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
public static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
public static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
public static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
public static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public "negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "noFluid"(): $BlockPredicate
public static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
public "or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "replaceable"(): $BlockPredicate
public static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(): $BlockPredicate
public "test"(worldGenLevel0: $WorldGenLevel$$Type, blockPos1: $BlockPos$$Type): boolean
public "type"(): $BlockPredicateType<any>
public static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

declare module "net.minecraft.world.level.levelgen.blockpredicates.ReplaceablePredicate" {
import { $StateTestingPredicate } from "net.minecraft.world.level.levelgen.blockpredicates.StateTestingPredicate"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $BlockPredicateType } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicateType"
import { $BiPredicate, $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $BlockPredicate, $BlockPredicate$$Type } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate"

export class $ReplaceablePredicate extends $StateTestingPredicate {
static readonly "CODEC": $Codec<$ReplaceablePredicate>

constructor(vec3i0: $Vec3i$$Type)

public static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "alwaysTrue"(): $BlockPredicate
public "and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
public static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
public static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
public static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
public static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public "negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "noFluid"(): $BlockPredicate
public static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
public "or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "replaceable"(): $BlockPredicate
public static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(): $BlockPredicate
public "type"(): $BlockPredicateType<any>
public static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

declare module "net.minecraft.world.level.levelgen.blockpredicates.SolidPredicate" {
import { $StateTestingPredicate } from "net.minecraft.world.level.levelgen.blockpredicates.StateTestingPredicate"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $BlockPredicateType } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicateType"
import { $BiPredicate, $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $BlockPredicate, $BlockPredicate$$Type } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate"

/** @deprecated */
export class $SolidPredicate extends $StateTestingPredicate {
static readonly "CODEC": $Codec<$SolidPredicate>

constructor(vec3i0: $Vec3i$$Type)

public static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "alwaysTrue"(): $BlockPredicate
public "and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
public static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
public static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
public static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
public static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public "negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "noFluid"(): $BlockPredicate
public static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
public "or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "replaceable"(): $BlockPredicate
public static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(): $BlockPredicate
public "type"(): $BlockPredicateType<any>
public static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

declare module "net.minecraft.world.level.levelgen.blockpredicates.TrueBlockPredicate" {
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $BlockPredicateType } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicateType"
import { $BiPredicate, $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $BlockPredicate, $BlockPredicate$$Type } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate"

export class $TrueBlockPredicate implements $BlockPredicate {
static readonly "CODEC": $Codec<$TrueBlockPredicate>
static "INSTANCE": $TrueBlockPredicate

public static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "alwaysTrue"(): $BlockPredicate
public "and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
public static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
public static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
public static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
public static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public "negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "noFluid"(): $BlockPredicate
public static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
public "or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "replaceable"(): $BlockPredicate
public static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(): $BlockPredicate
public "test"(worldGenLevel0: $WorldGenLevel$$Type, blockPos1: $BlockPos$$Type): boolean
public "type"(): $BlockPredicateType<any>
public static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

declare module "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate" {
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $BlockPredicateType } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicateType"
import { $BiPredicate, $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"

export interface $BlockPredicate extends $BiPredicate<$WorldGenLevel, $BlockPos> {
"and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
"negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
"or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
"test"(worldGenLevel0: $WorldGenLevel$$Type, blockPos1: $BlockPos$$Type): boolean
"type"(): $BlockPredicateType<any>
}

export namespace $BlockPredicate {
const CODEC: $Codec<$BlockPredicate>
const ONLY_IN_AIR_OR_WATER_PREDICATE: $BlockPredicate
const ONLY_IN_AIR_PREDICATE: $BlockPredicate
function allOf(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
function allOf(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
function allOf(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
function alwaysTrue(): $BlockPredicate
function anyOf(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
function anyOf(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
function anyOf(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
function hasSturdyFace(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
function hasSturdyFace(direction0: $Direction$$Type): $BlockPredicate
function insideWorld(vec3i0: $Vec3i$$Type): $BlockPredicate
function matchesBlocks(...block0s: $Block$$Type[]): $BlockPredicate
function matchesBlocks(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
function matchesBlocks(list0: $List$$Type<$Block$$Type>): $BlockPredicate
function matchesBlocks(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
function matchesFluids(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
function matchesFluids(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
function matchesFluids(...fluid0s: $Fluid$$Type[]): $BlockPredicate
function matchesTag(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
function matchesTag(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
function noFluid(): $BlockPredicate
function noFluid(vec3i0: $Vec3i$$Type): $BlockPredicate
function not(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
function replaceable(vec3i0: $Vec3i$$Type): $BlockPredicate
function replaceable(): $BlockPredicate
function solid(vec3i0: $Vec3i$$Type): $BlockPredicate
function solid(): $BlockPredicate
function wouldSurvive(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
export abstract class $BlockPredicate$$Static implements $BlockPredicate {
static readonly "CODEC": $Codec<$BlockPredicate>
static readonly "ONLY_IN_AIR_OR_WATER_PREDICATE": $BlockPredicate
static readonly "ONLY_IN_AIR_PREDICATE": $BlockPredicate

static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
static "alwaysTrue"(): $BlockPredicate
static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
static "noFluid"(): $BlockPredicate
static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
static "replaceable"(): $BlockPredicate
static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
static "solid"(): $BlockPredicate
static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

declare module "net.minecraft.world.level.levelgen.blockpredicates.StateTestingPredicate" {
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $BlockPredicateType } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicateType"
import { $BiPredicate, $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $List$$Type } from "java.util.List"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $BlockPredicate, $BlockPredicate$$Type } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate"

export class $StateTestingPredicate implements $BlockPredicate {
public static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "alwaysTrue"(): $BlockPredicate
public "and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
public static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
public static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
public static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
public static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public "negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "noFluid"(): $BlockPredicate
public static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
public "or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "replaceable"(): $BlockPredicate
public static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(): $BlockPredicate
public "test"(worldGenLevel0: $WorldGenLevel$$Type, blockPos1: $BlockPos$$Type): boolean
public "type"(): $BlockPredicateType<any>
public static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

declare module "net.minecraft.world.level.levelgen.blockpredicates.AllOfPredicate" {
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $CombiningPredicate } from "net.minecraft.world.level.levelgen.blockpredicates.CombiningPredicate"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $BlockPredicateType } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicateType"
import { $BiPredicate, $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $BlockPredicate, $BlockPredicate$$Type } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate"

export class $AllOfPredicate extends $CombiningPredicate {
static readonly "CODEC": $Codec<$AllOfPredicate>

constructor(list0: $List$$Type<$BlockPredicate$$Type>)

public static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "alwaysTrue"(): $BlockPredicate
public "and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
public static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
public static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
public static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
public static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public "negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "noFluid"(): $BlockPredicate
public static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
public "or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "replaceable"(): $BlockPredicate
public static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(): $BlockPredicate
public "test"(worldGenLevel0: $WorldGenLevel$$Type, blockPos1: $BlockPos$$Type): boolean
public "type"(): $BlockPredicateType<any>
public static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

declare module "net.minecraft.world.level.levelgen.blockpredicates.MatchingBlockTagPredicate" {
import { $StateTestingPredicate } from "net.minecraft.world.level.levelgen.blockpredicates.StateTestingPredicate"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $BlockPredicateType } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicateType"
import { $BiPredicate, $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $BlockPredicate, $BlockPredicate$$Type } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate"

export class $MatchingBlockTagPredicate extends $StateTestingPredicate {
static readonly "CODEC": $Codec<$MatchingBlockTagPredicate>

public static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "alwaysTrue"(): $BlockPredicate
public "and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
public static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
public static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
public static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
public static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public "negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "noFluid"(): $BlockPredicate
public static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
public "or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "replaceable"(): $BlockPredicate
public static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(): $BlockPredicate
public "type"(): $BlockPredicateType<any>
public static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

declare module "net.minecraft.world.level.levelgen.blockpredicates.NotPredicate" {
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $BlockPredicateType } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicateType"
import { $BiPredicate, $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $BlockPredicate, $BlockPredicate$$Type } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate"

export class $NotPredicate implements $BlockPredicate {
static readonly "CODEC": $Codec<$NotPredicate>

constructor(blockPredicate0: $BlockPredicate$$Type)

public static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "alwaysTrue"(): $BlockPredicate
public "and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
public static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
public static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
public static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
public static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public "negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "noFluid"(): $BlockPredicate
public static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
public "or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "replaceable"(): $BlockPredicate
public static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(): $BlockPredicate
public "test"(worldGenLevel0: $WorldGenLevel$$Type, blockPos1: $BlockPos$$Type): boolean
public "type"(): $BlockPredicateType<any>
public static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

declare module "net.minecraft.world.level.levelgen.blockpredicates.InsideWorldBoundsPredicate" {
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $BlockPredicateType } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicateType"
import { $BiPredicate, $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $BlockPredicate, $BlockPredicate$$Type } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate"

export class $InsideWorldBoundsPredicate implements $BlockPredicate {
static readonly "CODEC": $Codec<$InsideWorldBoundsPredicate>

constructor(vec3i0: $Vec3i$$Type)

public static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "alwaysTrue"(): $BlockPredicate
public "and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
public static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
public static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
public static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
public static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public "negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "noFluid"(): $BlockPredicate
public static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
public "or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "replaceable"(): $BlockPredicate
public static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(): $BlockPredicate
public "test"(worldGenLevel0: $WorldGenLevel$$Type, blockPos1: $BlockPos$$Type): boolean
public "type"(): $BlockPredicateType<any>
public static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

