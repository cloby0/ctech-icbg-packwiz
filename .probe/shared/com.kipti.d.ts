declare module "com.kipti.bnb.mixin_accessor.FlywheelAccessibleKineticNetwork" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FlywheelAccessibleKineticNetwork {
"bits_n_bobs$getFlywheelStressAbsoptionCapacity"(): float
"bits_n_bobs$getFlywheelStressReleaseCapacity"(): float
"bits_n_bobs$updateFlywheelStresses"(): void
}

export namespace $FlywheelAccessibleKineticNetwork {
const probejs$$marker: never
}
export abstract class $FlywheelAccessibleKineticNetwork$$Static implements $FlywheelAccessibleKineticNetwork {
}
}

declare module "com.kipti.bnb.mixin_accessor.FontAccess" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $FontSet } from "net.minecraft.client.gui.font.FontSet"

export interface $FontAccess {
"bits_n_bobs$getFontSet"(resourceLocation0: $ResourceLocation$$Type): $FontSet
}

export namespace $FontAccess {
const probejs$$marker: never
}
export abstract class $FontAccess$$Static implements $FontAccess {
}
}

declare module "com.kipti.bnb.mixin_accessor.ReverseRenderableBakedGlyph" {
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"

export interface $ReverseRenderableBakedGlyph {
"bits_n_bobs$renderReverse"(boolean0: boolean, float1: float, float2: float, matrix4f3: $Matrix4f$$Type, vertexConsumer4: $VertexConsumer$$Type, float5: float, float6: float, float7: float, float8: float, int9: integer): void
}

export namespace $ReverseRenderableBakedGlyph {
const probejs$$marker: never
}
export abstract class $ReverseRenderableBakedGlyph$$Static implements $ReverseRenderableBakedGlyph {
}
}

