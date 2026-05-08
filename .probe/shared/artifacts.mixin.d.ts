declare module "artifacts.mixin.gamerule.BooleanValueInvoker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BooleanValueInvoker {
}

export namespace $BooleanValueInvoker {
const probejs$$marker: never
}
export abstract class $BooleanValueInvoker$$Static implements $BooleanValueInvoker {
}
}

declare module "artifacts.mixin.accessors.client.LivingEntityRendererAccessor" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $RenderLayerParent } from "net.minecraft.client.renderer.entity.RenderLayerParent"
import { $List } from "java.util.List"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $RenderLayer } from "net.minecraft.client.renderer.entity.layers.RenderLayer"
import { $EntityModel } from "net.minecraft.client.model.EntityModel"

export interface $LivingEntityRendererAccessor<T extends $LivingEntity = $LivingEntity, M extends $EntityModel<T> = $EntityModel<T>> extends $RenderLayerParent<T, M> {
"getLayers"(): $List<$RenderLayer<T, M>>
"getModel"(): M
"getTextureLocation"(t0: T): $ResourceLocation
get "layers"(): $List<$RenderLayer<T, M>>
get "model"(): M
}

export namespace $LivingEntityRendererAccessor {
const probejs$$marker: never
}
export abstract class $LivingEntityRendererAccessor$$Static<T extends $LivingEntity = $LivingEntity, M extends $EntityModel<T> = $EntityModel<T>> implements $LivingEntityRendererAccessor<T, M> {
}
}

declare module "artifacts.mixin.accessors.MobAccessor" {
import { $GoalSelector } from "net.minecraft.world.entity.ai.goal.GoalSelector"

export interface $MobAccessor {
"getGoalSelector"(): $GoalSelector
get "goalSelector"(): $GoalSelector
}

export namespace $MobAccessor {
const probejs$$marker: never
}
export abstract class $MobAccessor$$Static implements $MobAccessor {
}
}

declare module "artifacts.mixin.accessors.LivingEntityAccessor" {
import { $Player } from "net.minecraft.world.entity.player.Player"

export interface $LivingEntityAccessor {
"getLastHurtByPlayer"(): $Player
"getLastHurtByPlayerTime"(): integer
get "lastHurtByPlayer"(): $Player
get "lastHurtByPlayerTime"(): integer
}

export namespace $LivingEntityAccessor {
const probejs$$marker: never
}
export abstract class $LivingEntityAccessor$$Static implements $LivingEntityAccessor {
}
}

declare module "artifacts.mixin.gamerule.IntegerValueInvoker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntegerValueInvoker {
}

export namespace $IntegerValueInvoker {
const probejs$$marker: never
}
export abstract class $IntegerValueInvoker$$Static implements $IntegerValueInvoker {
}
}

