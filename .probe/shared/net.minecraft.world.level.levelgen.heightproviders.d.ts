declare module "net.minecraft.world.level.levelgen.heightproviders.UniformHeight" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $VerticalAnchor, $VerticalAnchor$$Type } from "net.minecraft.world.level.levelgen.VerticalAnchor"
import { $HeightProvider } from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"

export class $UniformHeight extends $HeightProvider {
static readonly "CODEC": $Codec<$UniformHeight>
readonly "maxInclusive": $VerticalAnchor
readonly "minInclusive": $VerticalAnchor

public static "of"(verticalAnchor0: $VerticalAnchor$$Type, verticalAnchor1: $VerticalAnchor$$Type): $UniformHeight
}
}

declare module "net.minecraft.world.level.levelgen.heightproviders.VeryBiasedToBottomHeight" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $VerticalAnchor$$Type } from "net.minecraft.world.level.levelgen.VerticalAnchor"
import { $HeightProvider } from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"

export class $VeryBiasedToBottomHeight extends $HeightProvider {
static readonly "CODEC": $Codec<$VeryBiasedToBottomHeight>

public static "of"(verticalAnchor0: $VerticalAnchor$$Type, verticalAnchor1: $VerticalAnchor$$Type, int2: integer): $VeryBiasedToBottomHeight
}
}

declare module "net.minecraft.world.level.levelgen.heightproviders.ConstantHeight" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $VerticalAnchor, $VerticalAnchor$$Type } from "net.minecraft.world.level.levelgen.VerticalAnchor"
import { $HeightProvider } from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"

export class $ConstantHeight extends $HeightProvider {
static readonly "CODEC": $Codec<$ConstantHeight>
static readonly "ZERO": $ConstantHeight

public "getValue"(): $VerticalAnchor
public static "of"(verticalAnchor0: $VerticalAnchor$$Type): $ConstantHeight
get "value"(): $VerticalAnchor
}
}

declare module "net.minecraft.world.level.levelgen.heightproviders.HeightProvider" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $WorldGenerationContext$$Type } from "net.minecraft.world.level.levelgen.WorldGenerationContext"
import { $HeightProviderType } from "net.minecraft.world.level.levelgen.heightproviders.HeightProviderType"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"

export class $HeightProvider {
static readonly "CODEC": $Codec<$HeightProvider>

constructor()

public "getType"(): $HeightProviderType<any>
public "sample"(randomSource0: $RandomSource$$Type, worldGenerationContext1: $WorldGenerationContext$$Type): integer
get "type"(): $HeightProviderType<any>
}
}

declare module "net.minecraft.world.level.levelgen.heightproviders.BiasedToBottomHeight" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $VerticalAnchor$$Type } from "net.minecraft.world.level.levelgen.VerticalAnchor"
import { $HeightProvider } from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"

export class $BiasedToBottomHeight extends $HeightProvider {
static readonly "CODEC": $Codec<$BiasedToBottomHeight>

public static "of"(verticalAnchor0: $VerticalAnchor$$Type, verticalAnchor1: $VerticalAnchor$$Type, int2: integer): $BiasedToBottomHeight
}
}

declare module "net.minecraft.world.level.levelgen.heightproviders.WeightedListHeight" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $SimpleWeightedRandomList$$Type } from "net.minecraft.util.random.SimpleWeightedRandomList"
import { $HeightProvider, $HeightProvider$$Type } from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"

export class $WeightedListHeight extends $HeightProvider {
static readonly "CODEC": $Codec<$WeightedListHeight>

constructor(simpleWeightedRandomList0: $SimpleWeightedRandomList$$Type<$HeightProvider$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.heightproviders.TrapezoidHeight" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $VerticalAnchor$$Type } from "net.minecraft.world.level.levelgen.VerticalAnchor"
import { $HeightProvider } from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"

export class $TrapezoidHeight extends $HeightProvider {
static readonly "CODEC": $Codec<$TrapezoidHeight>

public static "of"(verticalAnchor0: $VerticalAnchor$$Type, verticalAnchor1: $VerticalAnchor$$Type, int2: integer): $TrapezoidHeight
public static "of"(verticalAnchor0: $VerticalAnchor$$Type, verticalAnchor1: $VerticalAnchor$$Type): $TrapezoidHeight
}
}

