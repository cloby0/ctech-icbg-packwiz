declare module "net.potionstudios.biomeswevegone.world.level.levelgen.surfacerules.BandsContext" {
import { $BandsRuleSource$$Type } from "net.potionstudios.biomeswevegone.world.level.levelgen.surfacerules.BandsRuleSource"
import { $SimpleWeightedRandomList$$Type } from "net.minecraft.util.random.SimpleWeightedRandomList"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export interface $BandsContext {
"getBandsState"(bandsRuleSource0: $BandsRuleSource$$Type, simpleWeightedRandomList1: $SimpleWeightedRandomList$$Type<$BlockState$$Type>, intProvider2: $IntProvider$$Type, intProvider3: $IntProvider$$Type, int4: integer, int5: integer, int6: integer, float7: float, int8: integer): $BlockState
}

export namespace $BandsContext {
const probejs$$marker: never
}
export abstract class $BandsContext$$Static implements $BandsContext {
}
}

declare module "net.potionstudios.biomeswevegone.world.level.levelgen.surfacerules.BandsRuleSource" {
import { $Registry$$Type } from "net.minecraft.core.Registry"
import { $SimpleWeightedRandomList, $SimpleWeightedRandomList$$Type } from "net.minecraft.util.random.SimpleWeightedRandomList"
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"
import { $KeyDispatchDataCodec } from "net.minecraft.util.KeyDispatchDataCodec"
import { $IntProvider, $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $SurfaceRules$RuleSource, $SurfaceRules$RuleSource$$Type } from "net.minecraft.world.level.levelgen.SurfaceRules$RuleSource"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $SurfaceRules$Context, $SurfaceRules$Context$$Type } from "net.minecraft.world.level.levelgen.SurfaceRules$Context"
import { $Record } from "java.lang.Record"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $SurfaceRules$SurfaceRule, $SurfaceRules$SurfaceRule$$Type } from "net.minecraft.world.level.levelgen.SurfaceRules$SurfaceRule"

export class $BandsRuleSource extends $Record implements $SurfaceRules$RuleSource {
static readonly "CODEC": $KeyDispatchDataCodec<$BandsRuleSource>

constructor(bandStates: $SimpleWeightedRandomList$$Type<$BlockState$$Type>, bandSizeProvider: $IntProvider$$Type, bandsCountProvider: $IntProvider$$Type, frequency: float, noiseScale: integer)

public "andThen"<V>(function0: $Function$$Type<$SurfaceRules$SurfaceRule$$Type, V>): $Function<$SurfaceRules$Context, V>
public "apply"(context: $SurfaceRules$Context$$Type): $SurfaceRules$SurfaceRule
public "bandSizeProvider"(): $IntProvider
public "bandStates"(): $SimpleWeightedRandomList<$BlockState>
public "bandsCountProvider"(): $IntProvider
public static "bootstrap"(registry0: $Registry$$Type<$Codec$$Type<$SurfaceRules$RuleSource$$Type>>): $Codec<$SurfaceRules$RuleSource>
public "codec"(): $KeyDispatchDataCodec<$SurfaceRules$RuleSource>
public "compose"<V>(function0: $Function$$Type<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$SurfaceRule>
public "frequency"(): float
public static "identity"<T>(): $Function<T, T>
public "noiseScale"(): integer
}
}

