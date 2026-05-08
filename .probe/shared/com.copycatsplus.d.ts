declare module "com.copycatsplus.copycats.mixin.copycat.VoxelShapeAccessor" {
import { $Direction$Axis$$Type } from "net.minecraft.core.Direction$Axis"
import { $DoubleList } from "it.unimi.dsi.fastutil.doubles.DoubleList"
import { $DiscreteVoxelShape, $DiscreteVoxelShape$$Type } from "net.minecraft.world.phys.shapes.DiscreteVoxelShape"

export interface $VoxelShapeAccessor {
"copycats$callGetCoords"(axis0: $Direction$Axis$$Type): $DoubleList
"copycats$getShape"(): $DiscreteVoxelShape
"copycats$setShape"(discreteVoxelShape0: $DiscreteVoxelShape$$Type): void
}

export namespace $VoxelShapeAccessor {
const probejs$$marker: never
}
export abstract class $VoxelShapeAccessor$$Static implements $VoxelShapeAccessor {
}
}

declare module "com.copycatsplus.copycats.mixin.foundation.copycat.BlockEntityAccessor" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"

export interface $BlockEntityAccessor {
"callSaveMetadata"(compoundTag0: $CompoundTag$$Type): void
}

export namespace $BlockEntityAccessor {
const probejs$$marker: never
}
export abstract class $BlockEntityAccessor$$Static implements $BlockEntityAccessor {
}
}

