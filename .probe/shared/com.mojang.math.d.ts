declare module "com.mojang.math.Transformation" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Quaternionf, $Quaternionf$$Type } from "org.joml.Quaternionf"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $IForgeTransformation } from "net.minecraftforge.common.extensions.IForgeTransformation"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Matrix3f } from "org.joml.Matrix3f"
import { $Vector4f$$Type } from "org.joml.Vector4f"
import { $Matrix4f, $Matrix4f$$Type } from "org.joml.Matrix4f"

export class $Transformation implements $IForgeTransformation {
static readonly "CODEC": $Codec<$Transformation>
static readonly "EXTENDED_CODEC": $Codec<$Transformation>

constructor(vector3f0: $Vector3f$$Type, quaternionf1: $Quaternionf$$Type, vector3f2: $Vector3f$$Type, quaternionf3: $Quaternionf$$Type)
constructor(matrix4f0: $Matrix4f$$Type)

public "applyOrigin"(vector3f0: $Vector3f$$Type): $Transformation
public "blockCenterToCorner"(): $Transformation
public "blockCornerToCenter"(): $Transformation
public "compose"(transformation0: $Transformation$$Type): $Transformation
public "getLeftRotation"(): $Quaternionf
public "getMatrix"(): $Matrix4f
public "getNormalMatrix"(): $Matrix3f
public "getRightRotation"(): $Quaternionf
public "getScale"(): $Vector3f
public "getTranslation"(): $Vector3f
public static "identity"(): $Transformation
public "inverse"(): $Transformation
public "isIdentity"(): boolean
public "rotateTransform"(direction0: $Direction$$Type): $Direction
public "slerp"(transformation0: $Transformation$$Type, float1: float): $Transformation
public "transformNormal"(vector3f0: $Vector3f$$Type): void
public "transformPosition"(vector4f0: $Vector4f$$Type): void
get "leftRotation"(): $Quaternionf
get "matrix"(): $Matrix4f
get "normalMatrix"(): $Matrix3f
get "rightRotation"(): $Quaternionf
get "scale"(): $Vector3f
get "translation"(): $Vector3f
}
}

declare module "com.mojang.math.OctahedralGroup" {
import { $Direction$Axis$$Type } from "net.minecraft.core.Direction$Axis"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $FrontAndTop, $FrontAndTop$$Type } from "net.minecraft.core.FrontAndTop"
import { $Matrix3f } from "org.joml.Matrix3f"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $OctahedralGroup extends $Enum<$OctahedralGroup> implements $StringRepresentable {
static readonly "IDENTITY": $OctahedralGroup
static readonly "INVERSION": $OctahedralGroup
static readonly "INVERT_X": $OctahedralGroup
static readonly "INVERT_Y": $OctahedralGroup
static readonly "INVERT_Z": $OctahedralGroup
static readonly "ROT_120_NNN": $OctahedralGroup
static readonly "ROT_120_NNP": $OctahedralGroup
static readonly "ROT_120_NPN": $OctahedralGroup
static readonly "ROT_120_NPP": $OctahedralGroup
static readonly "ROT_120_PNN": $OctahedralGroup
static readonly "ROT_120_PNP": $OctahedralGroup
static readonly "ROT_120_PPN": $OctahedralGroup
static readonly "ROT_120_PPP": $OctahedralGroup
static readonly "ROT_180_EDGE_XY_NEG": $OctahedralGroup
static readonly "ROT_180_EDGE_XY_POS": $OctahedralGroup
static readonly "ROT_180_EDGE_XZ_NEG": $OctahedralGroup
static readonly "ROT_180_EDGE_XZ_POS": $OctahedralGroup
static readonly "ROT_180_EDGE_YZ_NEG": $OctahedralGroup
static readonly "ROT_180_EDGE_YZ_POS": $OctahedralGroup
static readonly "ROT_180_FACE_XY": $OctahedralGroup
static readonly "ROT_180_FACE_XZ": $OctahedralGroup
static readonly "ROT_180_FACE_YZ": $OctahedralGroup
static readonly "ROT_60_REF_NNN": $OctahedralGroup
static readonly "ROT_60_REF_NNP": $OctahedralGroup
static readonly "ROT_60_REF_NPN": $OctahedralGroup
static readonly "ROT_60_REF_NPP": $OctahedralGroup
static readonly "ROT_60_REF_PNN": $OctahedralGroup
static readonly "ROT_60_REF_PNP": $OctahedralGroup
static readonly "ROT_60_REF_PPN": $OctahedralGroup
static readonly "ROT_60_REF_PPP": $OctahedralGroup
static readonly "ROT_90_REF_X_NEG": $OctahedralGroup
static readonly "ROT_90_REF_X_POS": $OctahedralGroup
static readonly "ROT_90_REF_Y_NEG": $OctahedralGroup
static readonly "ROT_90_REF_Y_POS": $OctahedralGroup
static readonly "ROT_90_REF_Z_NEG": $OctahedralGroup
static readonly "ROT_90_REF_Z_POS": $OctahedralGroup
static readonly "ROT_90_X_NEG": $OctahedralGroup
static readonly "ROT_90_X_POS": $OctahedralGroup
static readonly "ROT_90_Y_NEG": $OctahedralGroup
static readonly "ROT_90_Y_POS": $OctahedralGroup
static readonly "ROT_90_Z_NEG": $OctahedralGroup
static readonly "ROT_90_Z_POS": $OctahedralGroup
static readonly "SWAP_NEG_XY": $OctahedralGroup
static readonly "SWAP_NEG_XZ": $OctahedralGroup
static readonly "SWAP_NEG_YZ": $OctahedralGroup
static readonly "SWAP_XY": $OctahedralGroup
static readonly "SWAP_XZ": $OctahedralGroup
static readonly "SWAP_YZ": $OctahedralGroup

public "compose"(octahedralGroup0: $OctahedralGroup$$Type): $OctahedralGroup
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public "inverse"(): $OctahedralGroup
public "inverts"(axis0: $Direction$Axis$$Type): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "rotate"(direction0: $Direction$$Type): $Direction
public "rotate"(frontAndTop0: $FrontAndTop$$Type): $FrontAndTop
public "transformation"(): $Matrix3f
public static "valueOf"(string0: string): $OctahedralGroup
public static "values"(): $OctahedralGroup[]
get "serializedName"(): string
}
}

declare module "com.mojang.math.Axis" {
import { $Quaternionf } from "org.joml.Quaternionf"
import { $Vector3f$$Type } from "org.joml.Vector3f"

export interface $Axis {
"rotation"(float0: float): $Quaternionf
"rotationDegrees"(float0: float): $Quaternionf
}

export namespace $Axis {
const XN: $Axis
const XP: $Axis
const YN: $Axis
const YP: $Axis
const ZN: $Axis
const ZP: $Axis
function of(vector3f0: $Vector3f$$Type): $Axis
}
export abstract class $Axis$$Static implements $Axis {
static readonly "XN": $Axis
static readonly "XP": $Axis
static readonly "YN": $Axis
static readonly "YP": $Axis
static readonly "ZN": $Axis
static readonly "ZP": $Axis

static "of"(vector3f0: $Vector3f$$Type): $Axis
}
}

