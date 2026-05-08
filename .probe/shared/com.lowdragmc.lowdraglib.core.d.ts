declare module "com.lowdragmc.lowdraglib.core.mixins.accessor.MouseHandlerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MouseHandlerAccessor {
"ldlib$getActiveButton"(): integer
}

export namespace $MouseHandlerAccessor {
const probejs$$marker: never
}
export abstract class $MouseHandlerAccessor$$Static implements $MouseHandlerAccessor {
}
}

declare module "com.lowdragmc.lowdraglib.core.mixins.accessor.VertexFormatAccessor" {
import { $IntList } from "it.unimi.dsi.fastutil.ints.IntList"

export interface $VertexFormatAccessor {
"getOffsets"(): $IntList
get "offsets"(): $IntList
}

export namespace $VertexFormatAccessor {
const probejs$$marker: never
}
export abstract class $VertexFormatAccessor$$Static implements $VertexFormatAccessor {
}
}

declare module "com.lowdragmc.lowdraglib.core.mixins.accessor.EntityAccessor" {
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $EntityAccessor {
"invokeSetLevel"(level0: $Level$$Type): void
}

export namespace $EntityAccessor {
const probejs$$marker: never
}
export abstract class $EntityAccessor$$Static implements $EntityAccessor {
}
}

declare module "com.lowdragmc.lowdraglib.core.mixins.accessor.ServerPlayerAccessor" {
import { $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"

export interface $ServerPlayerAccessor {
"callInitMenu"(abstractContainerMenu0: $AbstractContainerMenu$$Type): void
"callNextContainerCounter"(): void
"getContainerCounter"(): integer
get "containerCounter"(): integer
}

export namespace $ServerPlayerAccessor {
const probejs$$marker: never
}
export abstract class $ServerPlayerAccessor$$Static implements $ServerPlayerAccessor {
}
}

declare module "com.lowdragmc.lowdraglib.core.mixins.accessor.SlotAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SlotAccessor {
"getX"(): integer
"getY"(): integer
"setX"(int0: integer): void
"setY"(int0: integer): void
get "x"(): integer
get "y"(): integer
set "x"(value: integer)
set "y"(value: integer)
}

export namespace $SlotAccessor {
const probejs$$marker: never
}
export abstract class $SlotAccessor$$Static implements $SlotAccessor {
}
}

declare module "com.lowdragmc.lowdraglib.core.mixins.accessor.AbstractContainerMenuAccessor" {
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $AbstractContainerMenuAccessor {
"getLastSlots"(): $NonNullList<$ItemStack>
"getRemoteSlots"(): $NonNullList<$ItemStack>
get "lastSlots"(): $NonNullList<$ItemStack>
get "remoteSlots"(): $NonNullList<$ItemStack>
}

export namespace $AbstractContainerMenuAccessor {
const probejs$$marker: never
}
export abstract class $AbstractContainerMenuAccessor$$Static implements $AbstractContainerMenuAccessor {
}
}

declare module "com.lowdragmc.lowdraglib.core.mixins.accessor.ParticleEngineAccessor" {
import { $ParticleOptions, $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"
import { $Particle } from "net.minecraft.client.particle.Particle"

export interface $ParticleEngineAccessor {
"invokeMakeParticle"<T extends $ParticleOptions>(t0: T, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double): $Particle
}

export namespace $ParticleEngineAccessor {
const probejs$$marker: never
}
export abstract class $ParticleEngineAccessor$$Static implements $ParticleEngineAccessor {
}
}

declare module "com.lowdragmc.lowdraglib.core.mixins.accessor.ModelBakeryAccessor" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $UnbakedModel } from "net.minecraft.client.resources.model.UnbakedModel"
import { $Map } from "java.util.Map"

export interface $ModelBakeryAccessor {
"getTopLevelModels"(): $Map<$ResourceLocation, $UnbakedModel>
"invokeGetModel"(resourceLocation0: $ResourceLocation$$Type): $UnbakedModel
get "topLevelModels"(): $Map<$ResourceLocation, $UnbakedModel>
}

export namespace $ModelBakeryAccessor {
const probejs$$marker: never
}
export abstract class $ModelBakeryAccessor$$Static implements $ModelBakeryAccessor {
}
}

declare module "com.lowdragmc.lowdraglib.core.mixins.accessor.AbstractContainerScreenAccessor" {
import { $Slot } from "net.minecraft.world.inventory.Slot"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $AbstractContainerScreenAccessor {
"getDraggingItem"(): $ItemStack
"getQuickCraftingRemainder"(): integer
"getSnapbackEnd"(): $Slot
"getSnapbackItem"(): $ItemStack
"getSnapbackStartX"(): integer
"getSnapbackStartY"(): integer
"getSnapbackTime"(): long
"isSplittingStack"(): boolean
"setSnapbackItem"(itemStack0: $ItemStack$$Type): void
get "draggingItem"(): $ItemStack
get "quickCraftingRemainder"(): integer
get "snapbackEnd"(): $Slot
get "snapbackItem"(): $ItemStack
get "snapbackStartX"(): integer
get "snapbackStartY"(): integer
get "snapbackTime"(): long
get "splittingStack"(): boolean
set "snapbackItem"(value: $ItemStack$$Type)
}

export namespace $AbstractContainerScreenAccessor {
const probejs$$marker: never
}
export abstract class $AbstractContainerScreenAccessor$$Static implements $AbstractContainerScreenAccessor {
}
}

