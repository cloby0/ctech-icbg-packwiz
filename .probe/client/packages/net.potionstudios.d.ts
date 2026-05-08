declare module "net.potionstudios.biomeswevegone.world.level.levelgen.surfacerules.BandsContext" {
import { $BandsRuleSource } from "net.potionstudios.biomeswevegone.world.level.levelgen.surfacerules.BandsRuleSource"
import { $SimpleWeightedRandomList } from "net.minecraft.util.random.SimpleWeightedRandomList"
import { $IntProvider } from "net.minecraft.util.valueproviders.IntProvider"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BandsContext$$Type = ($BandsContext | ((arg0: $BandsRuleSource, arg1: $SimpleWeightedRandomList<$BlockState>, arg2: $IntProvider, arg3: $IntProvider, arg4: integer, arg5: integer, arg6: integer, arg7: float, arg8: integer) => $BlockState$$Type));
}

declare module "net.potionstudios.biomeswevegone.world.level.levelgen.surfacerules.BandsRuleSource" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BandsRuleSource$$Type = ($BandsRuleSource);
}

