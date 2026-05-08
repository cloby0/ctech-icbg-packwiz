declare module "net.minecraft.world.flag.FeatureElement" {
import { $Registry } from "net.minecraft.core.Registry"
import { $FeatureFlagSet, $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $Set } from "java.util.Set"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"

export interface $FeatureElement {
"isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
"requiredFeatures"(): $FeatureFlagSet
}

export namespace $FeatureElement {
const FILTERED_REGISTRIES: $Set<$ResourceKey<$Registry<$FeatureElement>>>
}
export abstract class $FeatureElement$$Static implements $FeatureElement {
static readonly "FILTERED_REGISTRIES": $Set<$ResourceKey<$Registry<$FeatureElement>>>

}
}

declare module "net.minecraft.world.flag.FeatureFlagSet" {
import { $FeatureFlag$$Type } from "net.minecraft.world.flag.FeatureFlag"

export class $FeatureFlagSet {
static readonly "MAX_CONTAINER_SIZE": integer

public "contains"(featureFlag0: $FeatureFlag$$Type): boolean
public "isSubsetOf"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "join"(featureFlagSet0: $FeatureFlagSet$$Type): $FeatureFlagSet
public static "of"(featureFlag0: $FeatureFlag$$Type): $FeatureFlagSet
public static "of"(): $FeatureFlagSet
public static "of"(featureFlag0: $FeatureFlag$$Type, ...featureFlag1s: $FeatureFlag$$Type[]): $FeatureFlagSet
}
}

declare module "net.minecraft.world.flag.FeatureFlag" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FeatureFlag {
}
}

