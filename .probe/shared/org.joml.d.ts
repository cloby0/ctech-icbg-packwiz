declare module "org.joml.Quaternionfc" {
import { $Matrix4x3d, $Matrix4x3d$$Type } from "org.joml.Matrix4x3d"
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Quaternionf, $Quaternionf$$Type } from "org.joml.Quaternionf"
import { $Quaterniond, $Quaterniond$$Type } from "org.joml.Quaterniond"
import { $AxisAngle4f, $AxisAngle4f$$Type } from "org.joml.AxisAngle4f"
import { $Vector4dc$$Type } from "org.joml.Vector4dc"
import { $Matrix4x3f, $Matrix4x3f$$Type } from "org.joml.Matrix4x3f"
import { $AxisAngle4d, $AxisAngle4d$$Type } from "org.joml.AxisAngle4d"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $Vector3dc$$Type } from "org.joml.Vector3dc"
import { $Vector4fc$$Type } from "org.joml.Vector4fc"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Matrix3f, $Matrix3f$$Type } from "org.joml.Matrix3f"
import { $Vector3d, $Vector3d$$Type } from "org.joml.Vector3d"
import { $Vector4f, $Vector4f$$Type } from "org.joml.Vector4f"
import { $Matrix3d, $Matrix3d$$Type } from "org.joml.Matrix3d"
import { $Matrix4f, $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $Vector4d, $Vector4d$$Type } from "org.joml.Vector4d"
import { $Matrix4d, $Matrix4d$$Type } from "org.joml.Matrix4d"

export interface $Quaternionfc {
"add"(float0: float, float1: float, float2: float, float3: float, quaternionf4: $Quaternionf$$Type): $Quaternionf
"add"(quaternionfc0: $Quaternionfc$$Type, quaternionf1: $Quaternionf$$Type): $Quaternionf
"angle"(): float
"conjugate"(quaternionf0: $Quaternionf$$Type): $Quaternionf
"conjugateBy"(quaternionfc0: $Quaternionfc$$Type, quaternionf1: $Quaternionf$$Type): $Quaternionf
"difference"(quaternionfc0: $Quaternionfc$$Type, quaternionf1: $Quaternionf$$Type): $Quaternionf
"div"(quaternionfc0: $Quaternionfc$$Type, quaternionf1: $Quaternionf$$Type): $Quaternionf
"equals"(quaternionfc0: $Quaternionfc$$Type, float1: float): boolean
"equals"(float0: float, float1: float, float2: float, float3: float): boolean
"get"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"get"(axisAngle4d0: $AxisAngle4d$$Type): $AxisAngle4d
"get"(quaterniond0: $Quaterniond$$Type): $Quaterniond
"get"(quaternionf0: $Quaternionf$$Type): $Quaternionf
"get"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"get"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"get"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"get"(axisAngle4f0: $AxisAngle4f$$Type): $AxisAngle4f
"get"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"get"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"getAsMatrix3f"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"getAsMatrix3f"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"getAsMatrix4f"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"getAsMatrix4f"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"getAsMatrix4x3f"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"getAsMatrix4x3f"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"getEulerAnglesXYZ"(vector3f0: $Vector3f$$Type): $Vector3f
"getEulerAnglesYXZ"(vector3f0: $Vector3f$$Type): $Vector3f
"getEulerAnglesZXY"(vector3f0: $Vector3f$$Type): $Vector3f
"getEulerAnglesZYX"(vector3f0: $Vector3f$$Type): $Vector3f
"integrate"(float0: float, float1: float, float2: float, float3: float, quaternionf4: $Quaternionf$$Type): $Quaternionf
"invert"(quaternionf0: $Quaternionf$$Type): $Quaternionf
"isFinite"(): boolean
"lengthSquared"(): float
"lookAlong"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, quaternionf2: $Quaternionf$$Type): $Quaternionf
"lookAlong"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, quaternionf6: $Quaternionf$$Type): $Quaternionf
"mul"(quaternionfc0: $Quaternionfc$$Type, quaternionf1: $Quaternionf$$Type): $Quaternionf
"mul"(float0: float, float1: float, float2: float, float3: float, quaternionf4: $Quaternionf$$Type): $Quaternionf
"mul"(float0: float, quaternionf1: $Quaternionf$$Type): $Quaternionf
"nlerp"(quaternionfc0: $Quaternionfc$$Type, float1: float, quaternionf2: $Quaternionf$$Type): $Quaternionf
"nlerpIterative"(quaternionfc0: $Quaternionfc$$Type, float1: float, float2: float, quaternionf3: $Quaternionf$$Type): $Quaternionf
"normalize"(quaternionf0: $Quaternionf$$Type): $Quaternionf
"normalizedPositiveX"(vector3f0: $Vector3f$$Type): $Vector3f
"normalizedPositiveY"(vector3f0: $Vector3f$$Type): $Vector3f
"normalizedPositiveZ"(vector3f0: $Vector3f$$Type): $Vector3f
"positiveX"(vector3f0: $Vector3f$$Type): $Vector3f
"positiveY"(vector3f0: $Vector3f$$Type): $Vector3f
"positiveZ"(vector3f0: $Vector3f$$Type): $Vector3f
"premul"(quaternionfc0: $Quaternionfc$$Type, quaternionf1: $Quaternionf$$Type): $Quaternionf
"premul"(float0: float, float1: float, float2: float, float3: float, quaternionf4: $Quaternionf$$Type): $Quaternionf
"rotateAxis"(float0: float, float1: float, float2: float, float3: float, quaternionf4: $Quaternionf$$Type): $Quaternionf
"rotateAxis"(float0: float, vector3fc1: $Vector3fc$$Type, quaternionf2: $Quaternionf$$Type): $Quaternionf
"rotateLocalX"(float0: float, quaternionf1: $Quaternionf$$Type): $Quaternionf
"rotateLocalY"(float0: float, quaternionf1: $Quaternionf$$Type): $Quaternionf
"rotateLocalZ"(float0: float, quaternionf1: $Quaternionf$$Type): $Quaternionf
"rotateTo"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, quaternionf2: $Quaternionf$$Type): $Quaternionf
"rotateTo"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, quaternionf6: $Quaternionf$$Type): $Quaternionf
"rotateX"(float0: float, quaternionf1: $Quaternionf$$Type): $Quaternionf
"rotateXYZ"(float0: float, float1: float, float2: float, quaternionf3: $Quaternionf$$Type): $Quaternionf
"rotateY"(float0: float, quaternionf1: $Quaternionf$$Type): $Quaternionf
"rotateYXZ"(float0: float, float1: float, float2: float, quaternionf3: $Quaternionf$$Type): $Quaternionf
"rotateZ"(float0: float, quaternionf1: $Quaternionf$$Type): $Quaternionf
"rotateZYX"(float0: float, float1: float, float2: float, quaternionf3: $Quaternionf$$Type): $Quaternionf
"scale"(float0: float, quaternionf1: $Quaternionf$$Type): $Quaternionf
"slerp"(quaternionfc0: $Quaternionfc$$Type, float1: float, quaternionf2: $Quaternionf$$Type): $Quaternionf
"transform"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"transform"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
"transform"(double0: double, double1: double, double2: double, vector4d3: $Vector4d$$Type): $Vector4d
"transform"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
"transform"(vector4f0: $Vector4f$$Type): $Vector4f
"transform"(vector3f0: $Vector3f$$Type): $Vector3f
"transform"(float0: float, float1: float, float2: float, vector3d3: $Vector3d$$Type): $Vector3d
"transform"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
"transform"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"transform"(vector4d0: $Vector4d$$Type): $Vector4d
"transform"(float0: float, float1: float, float2: float, vector4f3: $Vector4f$$Type): $Vector4f
"transform"(vector3d0: $Vector3d$$Type): $Vector3d
"transform"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"transformInverse"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"transformInverse"(vector4f0: $Vector4f$$Type): $Vector4f
"transformInverse"(vector3f0: $Vector3f$$Type): $Vector3f
"transformInverse"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
"transformInverse"(vector4d0: $Vector4d$$Type): $Vector4d
"transformInverse"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"transformInverse"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
"transformInverse"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"transformInverse"(double0: double, double1: double, double2: double, vector4d3: $Vector4d$$Type): $Vector4d
"transformInverse"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
"transformInverse"(float0: float, float1: float, float2: float, vector3d3: $Vector3d$$Type): $Vector3d
"transformInverse"(vector3d0: $Vector3d$$Type): $Vector3d
"transformInverse"(float0: float, float1: float, float2: float, vector4f3: $Vector4f$$Type): $Vector4f
"transformInverseUnit"(vector4d0: $Vector4d$$Type): $Vector4d
"transformInverseUnit"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"transformInverseUnit"(vector3f0: $Vector3f$$Type): $Vector3f
"transformInverseUnit"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"transformInverseUnit"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
"transformInverseUnit"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"transformInverseUnit"(vector4f0: $Vector4f$$Type): $Vector4f
"transformInverseUnit"(float0: float, float1: float, float2: float, vector3d3: $Vector3d$$Type): $Vector3d
"transformInverseUnit"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
"transformInverseUnit"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
"transformInverseUnit"(double0: double, double1: double, double2: double, vector4d3: $Vector4d$$Type): $Vector4d
"transformInverseUnit"(float0: float, float1: float, float2: float, vector4f3: $Vector4f$$Type): $Vector4f
"transformPositiveX"(vector3d0: $Vector3d$$Type): $Vector3d
"transformPositiveX"(vector4d0: $Vector4d$$Type): $Vector4d
"transformPositiveX"(vector4f0: $Vector4f$$Type): $Vector4f
"transformPositiveX"(vector3f0: $Vector3f$$Type): $Vector3f
"transformPositiveY"(vector3f0: $Vector3f$$Type): $Vector3f
"transformPositiveY"(vector4d0: $Vector4d$$Type): $Vector4d
"transformPositiveY"(vector4f0: $Vector4f$$Type): $Vector4f
"transformPositiveY"(vector3d0: $Vector3d$$Type): $Vector3d
"transformPositiveZ"(vector3d0: $Vector3d$$Type): $Vector3d
"transformPositiveZ"(vector4f0: $Vector4f$$Type): $Vector4f
"transformPositiveZ"(vector3f0: $Vector3f$$Type): $Vector3f
"transformPositiveZ"(vector4d0: $Vector4d$$Type): $Vector4d
"transformUnit"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
"transformUnit"(vector4f0: $Vector4f$$Type): $Vector4f
"transformUnit"(double0: double, double1: double, double2: double, vector4d3: $Vector4d$$Type): $Vector4d
"transformUnit"(float0: float, float1: float, float2: float, vector4f3: $Vector4f$$Type): $Vector4f
"transformUnit"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"transformUnit"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
"transformUnit"(float0: float, float1: float, float2: float, vector3d3: $Vector3d$$Type): $Vector3d
"transformUnit"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"transformUnit"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
"transformUnit"(vector4d0: $Vector4d$$Type): $Vector4d
"transformUnit"(vector3f0: $Vector3f$$Type): $Vector3f
"transformUnit"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"transformUnitPositiveX"(vector4d0: $Vector4d$$Type): $Vector4d
"transformUnitPositiveX"(vector3f0: $Vector3f$$Type): $Vector3f
"transformUnitPositiveX"(vector3d0: $Vector3d$$Type): $Vector3d
"transformUnitPositiveX"(vector4f0: $Vector4f$$Type): $Vector4f
"transformUnitPositiveY"(vector4d0: $Vector4d$$Type): $Vector4d
"transformUnitPositiveY"(vector3d0: $Vector3d$$Type): $Vector3d
"transformUnitPositiveY"(vector3f0: $Vector3f$$Type): $Vector3f
"transformUnitPositiveY"(vector4f0: $Vector4f$$Type): $Vector4f
"transformUnitPositiveZ"(vector3f0: $Vector3f$$Type): $Vector3f
"transformUnitPositiveZ"(vector4f0: $Vector4f$$Type): $Vector4f
"transformUnitPositiveZ"(vector4d0: $Vector4d$$Type): $Vector4d
"transformUnitPositiveZ"(vector3d0: $Vector3d$$Type): $Vector3d
"w"(): float
"x"(): float
"y"(): float
"z"(): float
get "finite"(): boolean
}

export namespace $Quaternionfc {
const probejs$$marker: never
}
export abstract class $Quaternionfc$$Static implements $Quaternionfc {
}
}

declare module "org.joml.Quaterniondc" {
import { $Quaternionf, $Quaternionf$$Type } from "org.joml.Quaternionf"
import { $Quaterniond, $Quaterniond$$Type } from "org.joml.Quaterniond"
import { $AxisAngle4f, $AxisAngle4f$$Type } from "org.joml.AxisAngle4f"
import { $Vector4dc$$Type } from "org.joml.Vector4dc"
import { $AxisAngle4d, $AxisAngle4d$$Type } from "org.joml.AxisAngle4d"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $Vector3dc$$Type } from "org.joml.Vector3dc"
import { $Vector4fc$$Type } from "org.joml.Vector4fc"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Matrix3f, $Matrix3f$$Type } from "org.joml.Matrix3f"
import { $Vector3d, $Vector3d$$Type } from "org.joml.Vector3d"
import { $Vector4f, $Vector4f$$Type } from "org.joml.Vector4f"
import { $Matrix3d, $Matrix3d$$Type } from "org.joml.Matrix3d"
import { $Matrix4f, $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $Vector4d, $Vector4d$$Type } from "org.joml.Vector4d"
import { $Matrix4d, $Matrix4d$$Type } from "org.joml.Matrix4d"

export interface $Quaterniondc {
"add"(quaterniondc0: $Quaterniondc$$Type, quaterniond1: $Quaterniond$$Type): $Quaterniond
"add"(double0: double, double1: double, double2: double, double3: double, quaterniond4: $Quaterniond$$Type): $Quaterniond
"angle"(): double
"conjugate"(quaterniond0: $Quaterniond$$Type): $Quaterniond
"conjugateBy"(quaterniondc0: $Quaterniondc$$Type, quaterniond1: $Quaterniond$$Type): $Quaterniond
"difference"(quaterniondc0: $Quaterniondc$$Type, quaterniond1: $Quaterniond$$Type): $Quaterniond
"div"(quaterniondc0: $Quaterniondc$$Type, quaterniond1: $Quaterniond$$Type): $Quaterniond
"dot"(quaterniondc0: $Quaterniondc$$Type): double
"equals"(quaterniondc0: $Quaterniondc$$Type, double1: double): boolean
"equals"(double0: double, double1: double, double2: double, double3: double): boolean
"get"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"get"(axisAngle4f0: $AxisAngle4f$$Type): $AxisAngle4f
"get"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"get"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"get"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"get"(quaternionf0: $Quaternionf$$Type): $Quaternionf
"get"(quaterniond0: $Quaterniond$$Type): $Quaterniond
"get"(axisAngle4d0: $AxisAngle4d$$Type): $AxisAngle4d
"getEulerAnglesXYZ"(vector3d0: $Vector3d$$Type): $Vector3d
"getEulerAnglesYXZ"(vector3d0: $Vector3d$$Type): $Vector3d
"getEulerAnglesZXY"(vector3d0: $Vector3d$$Type): $Vector3d
"getEulerAnglesZYX"(vector3d0: $Vector3d$$Type): $Vector3d
"integrate"(double0: double, double1: double, double2: double, double3: double, quaterniond4: $Quaterniond$$Type): $Quaterniond
"invert"(quaterniond0: $Quaterniond$$Type): $Quaterniond
"isFinite"(): boolean
"lengthSquared"(): double
"lookAlong"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, quaterniond6: $Quaterniond$$Type): $Quaterniond
"lookAlong"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, quaterniond2: $Quaterniond$$Type): $Quaterniond
"mul"(double0: double, double1: double, double2: double, double3: double, quaterniond4: $Quaterniond$$Type): $Quaterniond
"mul"(double0: double, quaterniond1: $Quaterniond$$Type): $Quaterniond
"mul"(quaterniondc0: $Quaterniondc$$Type, quaterniond1: $Quaterniond$$Type): $Quaterniond
"nlerp"(quaterniondc0: $Quaterniondc$$Type, double1: double, quaterniond2: $Quaterniond$$Type): $Quaterniond
"nlerpIterative"(quaterniondc0: $Quaterniondc$$Type, double1: double, double2: double, quaterniond3: $Quaterniond$$Type): $Quaterniond
"normalize"(quaterniond0: $Quaterniond$$Type): $Quaterniond
"normalizedPositiveX"(vector3d0: $Vector3d$$Type): $Vector3d
"normalizedPositiveY"(vector3d0: $Vector3d$$Type): $Vector3d
"normalizedPositiveZ"(vector3d0: $Vector3d$$Type): $Vector3d
"positiveX"(vector3d0: $Vector3d$$Type): $Vector3d
"positiveY"(vector3d0: $Vector3d$$Type): $Vector3d
"positiveZ"(vector3d0: $Vector3d$$Type): $Vector3d
"premul"(double0: double, double1: double, double2: double, double3: double, quaterniond4: $Quaterniond$$Type): $Quaterniond
"premul"(quaterniondc0: $Quaterniondc$$Type, quaterniond1: $Quaterniond$$Type): $Quaterniond
"rotateAxis"(double0: double, double1: double, double2: double, double3: double, quaterniond4: $Quaterniond$$Type): $Quaterniond
"rotateAxis"(double0: double, vector3dc1: $Vector3dc$$Type, quaterniond2: $Quaterniond$$Type): $Quaterniond
"rotateLocalX"(double0: double, quaterniond1: $Quaterniond$$Type): $Quaterniond
"rotateLocalY"(double0: double, quaterniond1: $Quaterniond$$Type): $Quaterniond
"rotateLocalZ"(double0: double, quaterniond1: $Quaterniond$$Type): $Quaterniond
"rotateTo"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, quaterniond6: $Quaterniond$$Type): $Quaterniond
"rotateTo"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, quaterniond2: $Quaterniond$$Type): $Quaterniond
"rotateX"(double0: double, quaterniond1: $Quaterniond$$Type): $Quaterniond
"rotateXYZ"(double0: double, double1: double, double2: double, quaterniond3: $Quaterniond$$Type): $Quaterniond
"rotateY"(double0: double, quaterniond1: $Quaterniond$$Type): $Quaterniond
"rotateYXZ"(double0: double, double1: double, double2: double, quaterniond3: $Quaterniond$$Type): $Quaterniond
"rotateZ"(double0: double, quaterniond1: $Quaterniond$$Type): $Quaterniond
"rotateZYX"(double0: double, double1: double, double2: double, quaterniond3: $Quaterniond$$Type): $Quaterniond
"scale"(double0: double, quaterniond1: $Quaterniond$$Type): $Quaterniond
"slerp"(quaterniondc0: $Quaterniondc$$Type, double1: double, quaterniond2: $Quaterniond$$Type): $Quaterniond
"transform"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"transform"(double0: double, double1: double, double2: double, vector4f3: $Vector4f$$Type): $Vector4f
"transform"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"transform"(vector4d0: $Vector4d$$Type): $Vector4d
"transform"(vector3d0: $Vector3d$$Type): $Vector3d
"transform"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
"transform"(double0: double, double1: double, double2: double, vector3f3: $Vector3f$$Type): $Vector3f
"transform"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"transform"(vector4f0: $Vector4f$$Type): $Vector4f
"transform"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
"transform"(vector3f0: $Vector3f$$Type): $Vector3f
"transform"(double0: double, double1: double, double2: double, vector4d3: $Vector4d$$Type): $Vector4d
"transformInverse"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
"transformInverse"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"transformInverse"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"transformInverse"(double0: double, double1: double, double2: double, vector4d3: $Vector4d$$Type): $Vector4d
"transformInverse"(vector3d0: $Vector3d$$Type): $Vector3d
"transformInverse"(double0: double, double1: double, double2: double, vector3f3: $Vector3f$$Type): $Vector3f
"transformInverse"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
"transformInverse"(double0: double, double1: double, double2: double, vector4f3: $Vector4f$$Type): $Vector4f
"transformInverse"(vector3f0: $Vector3f$$Type): $Vector3f
"transformInverse"(vector4f0: $Vector4f$$Type): $Vector4f
"transformInverse"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"transformInverse"(vector4d0: $Vector4d$$Type): $Vector4d
"transformInverseUnit"(double0: double, double1: double, double2: double, vector3f3: $Vector3f$$Type): $Vector3f
"transformInverseUnit"(vector3d0: $Vector3d$$Type): $Vector3d
"transformInverseUnit"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"transformInverseUnit"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
"transformInverseUnit"(vector4f0: $Vector4f$$Type): $Vector4f
"transformInverseUnit"(double0: double, double1: double, double2: double, vector4f3: $Vector4f$$Type): $Vector4f
"transformInverseUnit"(vector3f0: $Vector3f$$Type): $Vector3f
"transformInverseUnit"(vector4d0: $Vector4d$$Type): $Vector4d
"transformInverseUnit"(double0: double, double1: double, double2: double, vector4d3: $Vector4d$$Type): $Vector4d
"transformInverseUnit"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"transformInverseUnit"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"transformInverseUnit"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
"transformPositiveX"(vector4d0: $Vector4d$$Type): $Vector4d
"transformPositiveX"(vector4f0: $Vector4f$$Type): $Vector4f
"transformPositiveX"(vector3f0: $Vector3f$$Type): $Vector3f
"transformPositiveX"(vector3d0: $Vector3d$$Type): $Vector3d
"transformPositiveY"(vector4f0: $Vector4f$$Type): $Vector4f
"transformPositiveY"(vector3d0: $Vector3d$$Type): $Vector3d
"transformPositiveY"(vector3f0: $Vector3f$$Type): $Vector3f
"transformPositiveY"(vector4d0: $Vector4d$$Type): $Vector4d
"transformPositiveZ"(vector4f0: $Vector4f$$Type): $Vector4f
"transformPositiveZ"(vector4d0: $Vector4d$$Type): $Vector4d
"transformPositiveZ"(vector3d0: $Vector3d$$Type): $Vector3d
"transformPositiveZ"(vector3f0: $Vector3f$$Type): $Vector3f
"transformUnit"(vector3f0: $Vector3f$$Type): $Vector3f
"transformUnit"(double0: double, double1: double, double2: double, vector4f3: $Vector4f$$Type): $Vector4f
"transformUnit"(double0: double, double1: double, double2: double, vector4d3: $Vector4d$$Type): $Vector4d
"transformUnit"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"transformUnit"(vector4f0: $Vector4f$$Type): $Vector4f
"transformUnit"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"transformUnit"(double0: double, double1: double, double2: double, vector3f3: $Vector3f$$Type): $Vector3f
"transformUnit"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
"transformUnit"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"transformUnit"(vector3d0: $Vector3d$$Type): $Vector3d
"transformUnit"(vector4d0: $Vector4d$$Type): $Vector4d
"transformUnit"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
"transformUnitPositiveX"(vector3d0: $Vector3d$$Type): $Vector3d
"transformUnitPositiveX"(vector4f0: $Vector4f$$Type): $Vector4f
"transformUnitPositiveX"(vector3f0: $Vector3f$$Type): $Vector3f
"transformUnitPositiveX"(vector4d0: $Vector4d$$Type): $Vector4d
"transformUnitPositiveY"(vector4d0: $Vector4d$$Type): $Vector4d
"transformUnitPositiveY"(vector4f0: $Vector4f$$Type): $Vector4f
"transformUnitPositiveY"(vector3d0: $Vector3d$$Type): $Vector3d
"transformUnitPositiveY"(vector3f0: $Vector3f$$Type): $Vector3f
"transformUnitPositiveZ"(vector4f0: $Vector4f$$Type): $Vector4f
"transformUnitPositiveZ"(vector3f0: $Vector3f$$Type): $Vector3f
"transformUnitPositiveZ"(vector3d0: $Vector3d$$Type): $Vector3d
"transformUnitPositiveZ"(vector4d0: $Vector4d$$Type): $Vector4d
"w"(): double
"x"(): double
"y"(): double
"z"(): double
get "finite"(): boolean
}

export namespace $Quaterniondc {
const probejs$$marker: never
}
export abstract class $Quaterniondc$$Static implements $Quaterniondc {
}
}

declare module "org.joml.Matrix4x3d" {
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Quaternionf, $Quaternionf$$Type } from "org.joml.Quaternionf"
import { $ObjectOutput$$Type } from "java.io.ObjectOutput"
import { $Quaterniond, $Quaterniond$$Type } from "org.joml.Quaterniond"
import { $Matrix4dc$$Type } from "org.joml.Matrix4dc"
import { $Matrix3dc$$Type } from "org.joml.Matrix3dc"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $NumberFormat$$Type } from "java.text.NumberFormat"
import { $Matrix3fc$$Type } from "org.joml.Matrix3fc"
import { $Quaterniondc$$Type } from "org.joml.Quaterniondc"
import { $Vector3d, $Vector3d$$Type } from "org.joml.Vector3d"
import { $Matrix4d, $Matrix4d$$Type } from "org.joml.Matrix4d"
import { $Quaternionfc$$Type } from "org.joml.Quaternionfc"
import { $Cloneable } from "java.lang.Cloneable"
import { $Externalizable } from "java.io.Externalizable"
import { $DoubleBuffer, $DoubleBuffer$$Type } from "java.nio.DoubleBuffer"
import { $AxisAngle4f$$Type } from "org.joml.AxisAngle4f"
import { $Vector4dc$$Type } from "org.joml.Vector4dc"
import { $AxisAngle4d$$Type } from "org.joml.AxisAngle4d"
import { $Matrix4x3fc$$Type } from "org.joml.Matrix4x3fc"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $Matrix4x3dc, $Matrix4x3dc$$Type } from "org.joml.Matrix4x3dc"
import { $Vector3dc$$Type } from "org.joml.Vector3dc"
import { $ObjectInput$$Type } from "java.io.ObjectInput"
import { $Matrix3d, $Matrix3d$$Type } from "org.joml.Matrix3d"
import { $Vector4d, $Vector4d$$Type } from "org.joml.Vector4d"

export class $Matrix4x3d implements $Externalizable, $Cloneable, $Matrix4x3dc {
constructor(matrix3fc0: $Matrix3fc$$Type)
constructor(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double, double9: double, double10: double, double11: double)
constructor()
constructor(doubleBuffer0: $DoubleBuffer$$Type)
constructor(matrix4x3fc0: $Matrix4x3fc$$Type)
constructor(matrix4x3dc0: $Matrix4x3dc$$Type)
constructor(matrix3dc0: $Matrix3dc$$Type)

public "add"(matrix4x3fc0: $Matrix4x3fc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "add"(matrix4x3fc0: $Matrix4x3fc$$Type): $Matrix4x3d
public "add"(matrix4x3dc0: $Matrix4x3dc$$Type): $Matrix4x3d
public "add"(matrix4x3dc0: $Matrix4x3dc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "arcball"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4x3d
public "arcball"(double0: double, vector3dc1: $Vector3dc$$Type, double2: double, double3: double): $Matrix4x3d
public "arcball"(double0: double, vector3dc1: $Vector3dc$$Type, double2: double, double3: double, matrix4x3d4: $Matrix4x3d$$Type): $Matrix4x3d
public "arcball"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4x3d6: $Matrix4x3d$$Type): $Matrix4x3d
public "assume"(int0: integer): $Matrix4x3d
public "billboardCylindrical"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3dc2: $Vector3dc$$Type): $Matrix4x3d
public "billboardSpherical"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type): $Matrix4x3d
public "billboardSpherical"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3dc2: $Vector3dc$$Type): $Matrix4x3d
public "clone"(): any
public "cofactor3x3"(): $Matrix4x3d
public "cofactor3x3"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "cofactor3x3"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "determinant"(): double
public "determineProperties"(): $Matrix4x3d
public "equals"(matrix4x3dc0: $Matrix4x3dc$$Type, double1: double): boolean
public "fma"(matrix4x3fc0: $Matrix4x3fc$$Type, double1: double, matrix4x3d2: $Matrix4x3d$$Type): $Matrix4x3d
public "fma"(matrix4x3fc0: $Matrix4x3fc$$Type, double1: double): $Matrix4x3d
public "fma"(matrix4x3dc0: $Matrix4x3dc$$Type, double1: double, matrix4x3d2: $Matrix4x3d$$Type): $Matrix4x3d
public "fma"(matrix4x3dc0: $Matrix4x3dc$$Type, double1: double): $Matrix4x3d
public "frustumPlane"(int0: integer, vector4d1: $Vector4d$$Type): $Vector4d
public "get"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "get"(double0s: double[], int1: integer): double[]
public "get"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
public "get"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
public "get"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "get"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "get"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "get"(float0s: float[]): float[]
public "get"(float0s: float[], int1: integer): float[]
public "get"(double0s: double[]): double[]
public "get4x4"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "get4x4"(float0s: float[], int1: integer): float[]
public "get4x4"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "get4x4"(float0s: float[]): float[]
public "get4x4"(double0s: double[], int1: integer): double[]
public "get4x4"(double0s: double[]): double[]
public "get4x4"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
public "get4x4"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
public "getColumn"(int0: integer, vector3d1: $Vector3d$$Type): $Vector3d
public "getEulerAnglesXYZ"(vector3d0: $Vector3d$$Type): $Vector3d
public "getEulerAnglesZYX"(vector3d0: $Vector3d$$Type): $Vector3d
public "getFloats"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "getFloats"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "getNormalizedRotation"(quaternionf0: $Quaternionf$$Type): $Quaternionf
public "getNormalizedRotation"(quaterniond0: $Quaterniond$$Type): $Quaterniond
public "getRow"(int0: integer, vector4d1: $Vector4d$$Type): $Vector4d
public "getScale"(vector3d0: $Vector3d$$Type): $Vector3d
public "getToAddress"(long0: long): $Matrix4x3dc
public "getTranslation"(vector3d0: $Vector3d$$Type): $Vector3d
public "getTransposed"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "getTransposed"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "getTransposed"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
public "getTransposed"(double0s: double[]): double[]
public "getTransposed"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
public "getTransposed"(double0s: double[], int1: integer): double[]
public "getTransposed"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "getTransposed"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "getTransposedFloats"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "getTransposedFloats"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "getUnnormalizedRotation"(quaternionf0: $Quaternionf$$Type): $Quaternionf
public "getUnnormalizedRotation"(quaterniond0: $Quaterniond$$Type): $Quaterniond
public "identity"(): $Matrix4x3d
public "invert"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "invert"(): $Matrix4x3d
public "invertOrtho"(): $Matrix4x3d
public "invertOrtho"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "isFinite"(): boolean
public "lerp"(matrix4x3dc0: $Matrix4x3dc$$Type, double1: double): $Matrix4x3d
public "lerp"(matrix4x3dc0: $Matrix4x3dc$$Type, double1: double, matrix4x3d2: $Matrix4x3d$$Type): $Matrix4x3d
public "lookAlong"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4x3d6: $Matrix4x3d$$Type): $Matrix4x3d
public "lookAlong"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type): $Matrix4x3d
public "lookAlong"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, matrix4x3d2: $Matrix4x3d$$Type): $Matrix4x3d
public "lookAlong"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4x3d
public "lookAt"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double): $Matrix4x3d
public "lookAt"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double, matrix4x3d9: $Matrix4x3d$$Type): $Matrix4x3d
public "lookAt"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3dc2: $Vector3dc$$Type): $Matrix4x3d
public "lookAt"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3dc2: $Vector3dc$$Type, matrix4x3d3: $Matrix4x3d$$Type): $Matrix4x3d
public "lookAtLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double, matrix4x3d9: $Matrix4x3d$$Type): $Matrix4x3d
public "lookAtLH"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3dc2: $Vector3dc$$Type): $Matrix4x3d
public "lookAtLH"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3dc2: $Vector3dc$$Type, matrix4x3d3: $Matrix4x3d$$Type): $Matrix4x3d
public "lookAtLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double): $Matrix4x3d
public "m00"(): double
public "m00"(double0: double): $Matrix4x3d
public "m01"(): double
public "m01"(double0: double): $Matrix4x3d
public "m02"(double0: double): $Matrix4x3d
public "m02"(): double
public "m10"(): double
public "m10"(double0: double): $Matrix4x3d
public "m11"(): double
public "m11"(double0: double): $Matrix4x3d
public "m12"(double0: double): $Matrix4x3d
public "m12"(): double
public "m20"(double0: double): $Matrix4x3d
public "m20"(): double
public "m21"(): double
public "m21"(double0: double): $Matrix4x3d
public "m22"(double0: double): $Matrix4x3d
public "m22"(): double
public "m30"(): double
public "m30"(double0: double): $Matrix4x3d
public "m31"(double0: double): $Matrix4x3d
public "m31"(): double
public "m32"(double0: double): $Matrix4x3d
public "m32"(): double
public "mapXZY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapXZY"(): $Matrix4x3d
public "mapXZnY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapXZnY"(): $Matrix4x3d
public "mapXnYnZ"(): $Matrix4x3d
public "mapXnYnZ"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapXnZY"(): $Matrix4x3d
public "mapXnZY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapXnZnY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapXnZnY"(): $Matrix4x3d
public "mapYXZ"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapYXZ"(): $Matrix4x3d
public "mapYXnZ"(): $Matrix4x3d
public "mapYXnZ"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapYZX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapYZX"(): $Matrix4x3d
public "mapYZnX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapYZnX"(): $Matrix4x3d
public "mapYnXZ"(): $Matrix4x3d
public "mapYnXZ"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapYnXnZ"(): $Matrix4x3d
public "mapYnXnZ"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapYnZX"(): $Matrix4x3d
public "mapYnZX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapYnZnX"(): $Matrix4x3d
public "mapYnZnX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapZXY"(): $Matrix4x3d
public "mapZXY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapZXnY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapZXnY"(): $Matrix4x3d
public "mapZYX"(): $Matrix4x3d
public "mapZYX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapZYnX"(): $Matrix4x3d
public "mapZYnX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapZnXY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapZnXY"(): $Matrix4x3d
public "mapZnXnY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapZnXnY"(): $Matrix4x3d
public "mapZnYX"(): $Matrix4x3d
public "mapZnYX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapZnYnX"(): $Matrix4x3d
public "mapZnYnX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapnXYnZ"(): $Matrix4x3d
public "mapnXYnZ"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapnXZY"(): $Matrix4x3d
public "mapnXZY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapnXZnY"(): $Matrix4x3d
public "mapnXZnY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapnXnYZ"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapnXnYZ"(): $Matrix4x3d
public "mapnXnYnZ"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapnXnYnZ"(): $Matrix4x3d
public "mapnXnZY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapnXnZY"(): $Matrix4x3d
public "mapnXnZnY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapnXnZnY"(): $Matrix4x3d
public "mapnYXZ"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapnYXZ"(): $Matrix4x3d
public "mapnYXnZ"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapnYXnZ"(): $Matrix4x3d
public "mapnYZX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapnYZX"(): $Matrix4x3d
public "mapnYZnX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapnYZnX"(): $Matrix4x3d
public "mapnYnXZ"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapnYnXZ"(): $Matrix4x3d
public "mapnYnXnZ"(): $Matrix4x3d
public "mapnYnXnZ"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapnYnZX"(): $Matrix4x3d
public "mapnYnZX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapnYnZnX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapnYnZnX"(): $Matrix4x3d
public "mapnZXY"(): $Matrix4x3d
public "mapnZXY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapnZXnY"(): $Matrix4x3d
public "mapnZXnY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapnZYX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapnZYX"(): $Matrix4x3d
public "mapnZYnX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapnZYnX"(): $Matrix4x3d
public "mapnZnXY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapnZnXY"(): $Matrix4x3d
public "mapnZnXnY"(): $Matrix4x3d
public "mapnZnXnY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapnZnYX"(): $Matrix4x3d
public "mapnZnYX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapnZnYnX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "mapnZnYnX"(): $Matrix4x3d
public "mul"(matrix4x3fc0: $Matrix4x3fc$$Type): $Matrix4x3d
public "mul"(matrix4x3dc0: $Matrix4x3dc$$Type): $Matrix4x3d
public "mul"(matrix4x3dc0: $Matrix4x3dc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "mul"(matrix4x3fc0: $Matrix4x3fc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "mul3x3"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double): $Matrix4x3d
public "mul3x3"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double, matrix4x3d9: $Matrix4x3d$$Type): $Matrix4x3d
public "mulComponentWise"(matrix4x3dc0: $Matrix4x3dc$$Type): $Matrix4x3d
public "mulComponentWise"(matrix4x3dc0: $Matrix4x3dc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "mulOrtho"(matrix4x3dc0: $Matrix4x3dc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "mulOrtho"(matrix4x3dc0: $Matrix4x3dc$$Type): $Matrix4x3d
public "mulTranslation"(matrix4x3dc0: $Matrix4x3dc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "mulTranslation"(matrix4x3fc0: $Matrix4x3fc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "negateX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "negateX"(): $Matrix4x3d
public "negateY"(): $Matrix4x3d
public "negateY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "negateZ"(): $Matrix4x3d
public "negateZ"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "normal"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "normal"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "normal"(): $Matrix4x3d
public "normalize3x3"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "normalize3x3"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "normalize3x3"(): $Matrix4x3d
public "normalizedPositiveX"(vector3d0: $Vector3d$$Type): $Vector3d
public "normalizedPositiveY"(vector3d0: $Vector3d$$Type): $Vector3d
public "normalizedPositiveZ"(vector3d0: $Vector3d$$Type): $Vector3d
public "obliqueZ"(double0: double, double1: double): $Matrix4x3d
public "obliqueZ"(double0: double, double1: double, matrix4x3d2: $Matrix4x3d$$Type): $Matrix4x3d
public "origin"(vector3d0: $Vector3d$$Type): $Vector3d
public "ortho"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4x3d
public "ortho"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean): $Matrix4x3d
public "ortho"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4x3d6: $Matrix4x3d$$Type): $Matrix4x3d
public "ortho"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean, matrix4x3d7: $Matrix4x3d$$Type): $Matrix4x3d
public "ortho2D"(double0: double, double1: double, double2: double, double3: double): $Matrix4x3d
public "ortho2D"(double0: double, double1: double, double2: double, double3: double, matrix4x3d4: $Matrix4x3d$$Type): $Matrix4x3d
public "ortho2DLH"(double0: double, double1: double, double2: double, double3: double, matrix4x3d4: $Matrix4x3d$$Type): $Matrix4x3d
public "ortho2DLH"(double0: double, double1: double, double2: double, double3: double): $Matrix4x3d
public "orthoLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean): $Matrix4x3d
public "orthoLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4x3d
public "orthoLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean, matrix4x3d7: $Matrix4x3d$$Type): $Matrix4x3d
public "orthoLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4x3d6: $Matrix4x3d$$Type): $Matrix4x3d
public "orthoSymmetric"(double0: double, double1: double, double2: double, double3: double): $Matrix4x3d
public "orthoSymmetric"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Matrix4x3d
public "orthoSymmetric"(double0: double, double1: double, double2: double, double3: double, matrix4x3d4: $Matrix4x3d$$Type): $Matrix4x3d
public "orthoSymmetric"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean, matrix4x3d5: $Matrix4x3d$$Type): $Matrix4x3d
public "orthoSymmetricLH"(double0: double, double1: double, double2: double, double3: double): $Matrix4x3d
public "orthoSymmetricLH"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Matrix4x3d
public "orthoSymmetricLH"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean, matrix4x3d5: $Matrix4x3d$$Type): $Matrix4x3d
public "orthoSymmetricLH"(double0: double, double1: double, double2: double, double3: double, matrix4x3d4: $Matrix4x3d$$Type): $Matrix4x3d
public "pick"(double0: double, double1: double, double2: double, double3: double, int4s: integer[]): $Matrix4x3d
public "pick"(double0: double, double1: double, double2: double, double3: double, int4s: integer[], matrix4x3d5: $Matrix4x3d$$Type): $Matrix4x3d
public "positiveX"(vector3d0: $Vector3d$$Type): $Vector3d
public "positiveY"(vector3d0: $Vector3d$$Type): $Vector3d
public "positiveZ"(vector3d0: $Vector3d$$Type): $Vector3d
public "properties"(): integer
public "readExternal"(objectInput0: $ObjectInput$$Type): void
public "reflect"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, matrix4x3d2: $Matrix4x3d$$Type): $Matrix4x3d
public "reflect"(quaterniondc0: $Quaterniondc$$Type, vector3dc1: $Vector3dc$$Type, matrix4x3d2: $Matrix4x3d$$Type): $Matrix4x3d
public "reflect"(double0: double, double1: double, double2: double, double3: double): $Matrix4x3d
public "reflect"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4x3d
public "reflect"(quaterniondc0: $Quaterniondc$$Type, vector3dc1: $Vector3dc$$Type): $Matrix4x3d
public "reflect"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type): $Matrix4x3d
public "reflect"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4x3d6: $Matrix4x3d$$Type): $Matrix4x3d
public "reflect"(double0: double, double1: double, double2: double, double3: double, matrix4x3d4: $Matrix4x3d$$Type): $Matrix4x3d
public "reflection"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type): $Matrix4x3d
public "reflection"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4x3d
public "reflection"(double0: double, double1: double, double2: double, double3: double): $Matrix4x3d
public "reflection"(quaterniondc0: $Quaterniondc$$Type, vector3dc1: $Vector3dc$$Type): $Matrix4x3d
public "rotate"(axisAngle4f0: $AxisAngle4f$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "rotate"(double0: double, vector3dc1: $Vector3dc$$Type): $Matrix4x3d
public "rotate"(double0: double, vector3fc1: $Vector3fc$$Type): $Matrix4x3d
public "rotate"(axisAngle4d0: $AxisAngle4d$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "rotate"(axisAngle4d0: $AxisAngle4d$$Type): $Matrix4x3d
public "rotate"(double0: double, vector3fc1: $Vector3fc$$Type, matrix4x3d2: $Matrix4x3d$$Type): $Matrix4x3d
public "rotate"(axisAngle4f0: $AxisAngle4f$$Type): $Matrix4x3d
public "rotate"(quaterniondc0: $Quaterniondc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "rotate"(double0: double, double1: double, double2: double, double3: double, matrix4x3d4: $Matrix4x3d$$Type): $Matrix4x3d
public "rotate"(quaternionfc0: $Quaternionfc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "rotate"(quaterniondc0: $Quaterniondc$$Type): $Matrix4x3d
public "rotate"(quaternionfc0: $Quaternionfc$$Type): $Matrix4x3d
public "rotate"(double0: double, vector3dc1: $Vector3dc$$Type, matrix4x3d2: $Matrix4x3d$$Type): $Matrix4x3d
public "rotate"(double0: double, double1: double, double2: double, double3: double): $Matrix4x3d
public "rotateAround"(quaterniondc0: $Quaterniondc$$Type, double1: double, double2: double, double3: double): $Matrix4x3d
public "rotateAround"(quaterniondc0: $Quaterniondc$$Type, double1: double, double2: double, double3: double, matrix4x3d4: $Matrix4x3d$$Type): $Matrix4x3d
public "rotateLocal"(quaterniondc0: $Quaterniondc$$Type): $Matrix4x3d
public "rotateLocal"(quaternionfc0: $Quaternionfc$$Type): $Matrix4x3d
public "rotateLocal"(quaternionfc0: $Quaternionfc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "rotateLocal"(quaterniondc0: $Quaterniondc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "rotateLocal"(double0: double, double1: double, double2: double, double3: double, matrix4x3d4: $Matrix4x3d$$Type): $Matrix4x3d
public "rotateLocal"(double0: double, double1: double, double2: double, double3: double): $Matrix4x3d
public "rotateLocalX"(double0: double): $Matrix4x3d
public "rotateLocalX"(double0: double, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "rotateLocalY"(double0: double): $Matrix4x3d
public "rotateLocalY"(double0: double, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "rotateLocalZ"(double0: double): $Matrix4x3d
public "rotateLocalZ"(double0: double, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "rotateTowards"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4x3d6: $Matrix4x3d$$Type): $Matrix4x3d
public "rotateTowards"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4x3d
public "rotateTowards"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type): $Matrix4x3d
public "rotateTowards"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, matrix4x3d2: $Matrix4x3d$$Type): $Matrix4x3d
public "rotateTranslation"(double0: double, double1: double, double2: double, double3: double, matrix4x3d4: $Matrix4x3d$$Type): $Matrix4x3d
public "rotateTranslation"(quaternionfc0: $Quaternionfc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "rotateTranslation"(quaterniondc0: $Quaterniondc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "rotateX"(double0: double, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "rotateX"(double0: double): $Matrix4x3d
public "rotateXYZ"(double0: double, double1: double, double2: double, matrix4x3d3: $Matrix4x3d$$Type): $Matrix4x3d
public "rotateXYZ"(vector3d0: $Vector3d$$Type): $Matrix4x3d
public "rotateXYZ"(double0: double, double1: double, double2: double): $Matrix4x3d
public "rotateY"(double0: double, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "rotateY"(double0: double): $Matrix4x3d
public "rotateYXZ"(double0: double, double1: double, double2: double, matrix4x3d3: $Matrix4x3d$$Type): $Matrix4x3d
public "rotateYXZ"(vector3d0: $Vector3d$$Type): $Matrix4x3d
public "rotateYXZ"(double0: double, double1: double, double2: double): $Matrix4x3d
public "rotateZ"(double0: double): $Matrix4x3d
public "rotateZ"(double0: double, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "rotateZYX"(double0: double, double1: double, double2: double, matrix4x3d3: $Matrix4x3d$$Type): $Matrix4x3d
public "rotateZYX"(double0: double, double1: double, double2: double): $Matrix4x3d
public "rotateZYX"(vector3d0: $Vector3d$$Type): $Matrix4x3d
public "rotation"(quaterniondc0: $Quaterniondc$$Type): $Matrix4x3d
public "rotation"(axisAngle4f0: $AxisAngle4f$$Type): $Matrix4x3d
public "rotation"(axisAngle4d0: $AxisAngle4d$$Type): $Matrix4x3d
public "rotation"(quaternionfc0: $Quaternionfc$$Type): $Matrix4x3d
public "rotation"(double0: double, vector3fc1: $Vector3fc$$Type): $Matrix4x3d
public "rotation"(double0: double, vector3dc1: $Vector3dc$$Type): $Matrix4x3d
public "rotation"(double0: double, double1: double, double2: double, double3: double): $Matrix4x3d
public "rotationAround"(quaterniondc0: $Quaterniondc$$Type, double1: double, double2: double, double3: double): $Matrix4x3d
public "rotationTowards"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type): $Matrix4x3d
public "rotationTowards"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4x3d
public "rotationX"(double0: double): $Matrix4x3d
public "rotationXYZ"(double0: double, double1: double, double2: double): $Matrix4x3d
public "rotationY"(double0: double): $Matrix4x3d
public "rotationYXZ"(double0: double, double1: double, double2: double): $Matrix4x3d
public "rotationZ"(double0: double): $Matrix4x3d
public "rotationZYX"(double0: double, double1: double, double2: double): $Matrix4x3d
public "scale"(double0: double, double1: double, double2: double): $Matrix4x3d
public "scale"(double0: double, double1: double, double2: double, matrix4x3d3: $Matrix4x3d$$Type): $Matrix4x3d
public "scale"(double0: double, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "scale"(double0: double): $Matrix4x3d
public "scale"(vector3dc0: $Vector3dc$$Type): $Matrix4x3d
public "scale"(vector3dc0: $Vector3dc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "scaleAround"(double0: double, double1: double, double2: double, double3: double): $Matrix4x3d
public "scaleAround"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4x3d6: $Matrix4x3d$$Type): $Matrix4x3d
public "scaleAround"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4x3d
public "scaleAround"(double0: double, double1: double, double2: double, double3: double, matrix4x3d4: $Matrix4x3d$$Type): $Matrix4x3d
public "scaleLocal"(double0: double, double1: double, double2: double, matrix4x3d3: $Matrix4x3d$$Type): $Matrix4x3d
public "scaleLocal"(double0: double, double1: double, double2: double): $Matrix4x3d
public "scaleXY"(double0: double, double1: double): $Matrix4x3d
public "scaleXY"(double0: double, double1: double, matrix4x3d2: $Matrix4x3d$$Type): $Matrix4x3d
public "scaling"(double0: double, double1: double, double2: double): $Matrix4x3d
public "scaling"(double0: double): $Matrix4x3d
public "scaling"(vector3dc0: $Vector3dc$$Type): $Matrix4x3d
public "set"(axisAngle4f0: $AxisAngle4f$$Type): $Matrix4x3d
public "set"(axisAngle4d0: $AxisAngle4d$$Type): $Matrix4x3d
public "set"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3dc2: $Vector3dc$$Type, vector3dc3: $Vector3dc$$Type): $Matrix4x3d
public "set"(matrix3fc0: $Matrix3fc$$Type): $Matrix4x3d
public "set"(matrix4dc0: $Matrix4dc$$Type): $Matrix4x3d
public "set"(matrix4x3fc0: $Matrix4x3fc$$Type): $Matrix4x3d
public "set"(matrix4x3dc0: $Matrix4x3dc$$Type): $Matrix4x3d
public "set"(matrix3dc0: $Matrix3dc$$Type): $Matrix4x3d
public "set"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $Matrix4x3d
public "set"(floatBuffer0: $FloatBuffer$$Type): $Matrix4x3d
public "set"(doubleBuffer0: $DoubleBuffer$$Type): $Matrix4x3d
public "set"(float0s: float[]): $Matrix4x3d
public "set"(byteBuffer0: $ByteBuffer$$Type): $Matrix4x3d
public "set"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $Matrix4x3d
public "set"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $Matrix4x3d
public "set"(quaternionfc0: $Quaternionfc$$Type): $Matrix4x3d
public "set"(quaterniondc0: $Quaterniondc$$Type): $Matrix4x3d
public "set"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double, double9: double, double10: double, double11: double): $Matrix4x3d
public "set"(double0s: double[], int1: integer): $Matrix4x3d
public "set"(double0s: double[]): $Matrix4x3d
public "set"(float0s: float[], int1: integer): $Matrix4x3d
public "set3x3"(matrix4x3dc0: $Matrix4x3dc$$Type): $Matrix4x3d
public "set3x3"(matrix3dc0: $Matrix3dc$$Type): $Matrix4x3d
public "set3x3"(matrix3fc0: $Matrix3fc$$Type): $Matrix4x3d
public "setColumn"(int0: integer, vector3dc1: $Vector3dc$$Type): $Matrix4x3d
public "setFloats"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $Matrix4x3d
public "setFloats"(byteBuffer0: $ByteBuffer$$Type): $Matrix4x3d
public "setFromAddress"(long0: long): $Matrix4x3d
public "setLookAlong"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4x3d
public "setLookAlong"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type): $Matrix4x3d
public "setLookAt"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double): $Matrix4x3d
public "setLookAt"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3dc2: $Vector3dc$$Type): $Matrix4x3d
public "setLookAtLH"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3dc2: $Vector3dc$$Type): $Matrix4x3d
public "setLookAtLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double): $Matrix4x3d
public "setOrtho"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4x3d
public "setOrtho"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean): $Matrix4x3d
public "setOrtho2D"(double0: double, double1: double, double2: double, double3: double): $Matrix4x3d
public "setOrtho2DLH"(double0: double, double1: double, double2: double, double3: double): $Matrix4x3d
public "setOrthoLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean): $Matrix4x3d
public "setOrthoLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4x3d
public "setOrthoSymmetric"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Matrix4x3d
public "setOrthoSymmetric"(double0: double, double1: double, double2: double, double3: double): $Matrix4x3d
public "setOrthoSymmetricLH"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Matrix4x3d
public "setOrthoSymmetricLH"(double0: double, double1: double, double2: double, double3: double): $Matrix4x3d
public "setRotationXYZ"(double0: double, double1: double, double2: double): $Matrix4x3d
public "setRotationYXZ"(double0: double, double1: double, double2: double): $Matrix4x3d
public "setRotationZYX"(double0: double, double1: double, double2: double): $Matrix4x3d
public "setRow"(int0: integer, vector4dc1: $Vector4dc$$Type): $Matrix4x3d
public "setTranslation"(double0: double, double1: double, double2: double): $Matrix4x3d
public "setTranslation"(vector3dc0: $Vector3dc$$Type): $Matrix4x3d
public "shadow"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, matrix4x3d8: $Matrix4x3d$$Type): $Matrix4x3d
public "shadow"(double0: double, double1: double, double2: double, double3: double, matrix4x3dc4: $Matrix4x3dc$$Type): $Matrix4x3d
public "shadow"(double0: double, double1: double, double2: double, double3: double, matrix4x3dc4: $Matrix4x3dc$$Type, matrix4x3d5: $Matrix4x3d$$Type): $Matrix4x3d
public "shadow"(vector4dc0: $Vector4dc$$Type, matrix4x3dc1: $Matrix4x3dc$$Type): $Matrix4x3d
public "shadow"(vector4dc0: $Vector4dc$$Type, matrix4x3dc1: $Matrix4x3dc$$Type, matrix4x3d2: $Matrix4x3d$$Type): $Matrix4x3d
public "shadow"(vector4dc0: $Vector4dc$$Type, double1: double, double2: double, double3: double, double4: double): $Matrix4x3d
public "shadow"(vector4dc0: $Vector4dc$$Type, double1: double, double2: double, double3: double, double4: double, matrix4x3d5: $Matrix4x3d$$Type): $Matrix4x3d
public "shadow"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double): $Matrix4x3d
public "sub"(matrix4x3fc0: $Matrix4x3fc$$Type): $Matrix4x3d
public "sub"(matrix4x3fc0: $Matrix4x3fc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "sub"(matrix4x3dc0: $Matrix4x3dc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "sub"(matrix4x3dc0: $Matrix4x3dc$$Type): $Matrix4x3d
public "swap"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "toString"(numberFormat0: $NumberFormat$$Type): string
public "transform"(vector4d0: $Vector4d$$Type): $Vector4d
public "transform"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "transformAab"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3d2: $Vector3d$$Type, vector3d3: $Vector3d$$Type): $Matrix4x3d
public "transformAab"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, vector3d6: $Vector3d$$Type, vector3d7: $Vector3d$$Type): $Matrix4x3d
public "transformDirection"(vector3d0: $Vector3d$$Type): $Vector3d
public "transformDirection"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "transformPosition"(vector3d0: $Vector3d$$Type): $Vector3d
public "transformPosition"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "translate"(vector3dc0: $Vector3dc$$Type): $Matrix4x3d
public "translate"(vector3fc0: $Vector3fc$$Type): $Matrix4x3d
public "translate"(double0: double, double1: double, double2: double): $Matrix4x3d
public "translate"(vector3dc0: $Vector3dc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "translate"(vector3fc0: $Vector3fc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "translate"(double0: double, double1: double, double2: double, matrix4x3d3: $Matrix4x3d$$Type): $Matrix4x3d
public "translateLocal"(double0: double, double1: double, double2: double, matrix4x3d3: $Matrix4x3d$$Type): $Matrix4x3d
public "translateLocal"(vector3dc0: $Vector3dc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "translateLocal"(vector3fc0: $Vector3fc$$Type): $Matrix4x3d
public "translateLocal"(vector3dc0: $Vector3dc$$Type): $Matrix4x3d
public "translateLocal"(vector3fc0: $Vector3fc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
public "translateLocal"(double0: double, double1: double, double2: double): $Matrix4x3d
public "translation"(double0: double, double1: double, double2: double): $Matrix4x3d
public "translation"(vector3fc0: $Vector3fc$$Type): $Matrix4x3d
public "translation"(vector3dc0: $Vector3dc$$Type): $Matrix4x3d
public "translationRotate"(vector3dc0: $Vector3dc$$Type, quaterniondc1: $Quaterniondc$$Type): $Matrix4x3d
public "translationRotate"(double0: double, double1: double, double2: double, quaterniondc3: $Quaterniondc$$Type): $Matrix4x3d
public "translationRotate"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double): $Matrix4x3d
public "translationRotateInvert"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double): $Matrix4x3d
public "translationRotateInvert"(vector3dc0: $Vector3dc$$Type, quaterniondc1: $Quaterniondc$$Type): $Matrix4x3d
public "translationRotateMul"(double0: double, double1: double, double2: double, quaternionfc3: $Quaternionfc$$Type, matrix4x3dc4: $Matrix4x3dc$$Type): $Matrix4x3d
public "translationRotateMul"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, matrix4x3dc7: $Matrix4x3dc$$Type): $Matrix4x3d
public "translationRotateScale"(vector3dc0: $Vector3dc$$Type, quaterniondc1: $Quaterniondc$$Type, vector3dc2: $Vector3dc$$Type): $Matrix4x3d
public "translationRotateScale"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double, double9: double): $Matrix4x3d
public "translationRotateScale"(vector3fc0: $Vector3fc$$Type, quaternionfc1: $Quaternionfc$$Type, vector3fc2: $Vector3fc$$Type): $Matrix4x3d
public "translationRotateScaleMul"(vector3dc0: $Vector3dc$$Type, quaterniondc1: $Quaterniondc$$Type, vector3dc2: $Vector3dc$$Type, matrix4x3dc3: $Matrix4x3dc$$Type): $Matrix4x3d
public "translationRotateScaleMul"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double, double9: double, matrix4x3dc10: $Matrix4x3dc$$Type): $Matrix4x3d
public "translationRotateTowards"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double): $Matrix4x3d
public "translationRotateTowards"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3dc2: $Vector3dc$$Type): $Matrix4x3d
public "transpose3x3"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "transpose3x3"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "transpose3x3"(): $Matrix4x3d
public "writeExternal"(objectOutput0: $ObjectOutput$$Type): void
public "zero"(): $Matrix4x3d
get "finite"(): boolean
set "3x3"(value: $Matrix4x3dc$$Type)
set "3x3"(value: $Matrix3dc$$Type)
set "3x3"(value: $Matrix3fc$$Type)
set "floats"(value: $ByteBuffer$$Type)
set "fromAddress"(value: long)
}
}

declare module "org.joml.Matrix4x3f" {
import { $Matrix4x3d, $Matrix4x3d$$Type } from "org.joml.Matrix4x3d"
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Quaternionf, $Quaternionf$$Type } from "org.joml.Quaternionf"
import { $ObjectOutput$$Type } from "java.io.ObjectOutput"
import { $Quaterniond, $Quaterniond$$Type } from "org.joml.Quaterniond"
import { $Matrix4fc$$Type } from "org.joml.Matrix4fc"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $NumberFormat$$Type } from "java.text.NumberFormat"
import { $Matrix3fc$$Type } from "org.joml.Matrix3fc"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Quaterniondc$$Type } from "org.joml.Quaterniondc"
import { $Matrix4f, $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $Matrix4d, $Matrix4d$$Type } from "org.joml.Matrix4d"
import { $Quaternionfc$$Type } from "org.joml.Quaternionfc"
import { $Cloneable } from "java.lang.Cloneable"
import { $Externalizable } from "java.io.Externalizable"
import { $AxisAngle4f, $AxisAngle4f$$Type } from "org.joml.AxisAngle4f"
import { $AxisAngle4d, $AxisAngle4d$$Type } from "org.joml.AxisAngle4d"
import { $Matrix4x3fc, $Matrix4x3fc$$Type } from "org.joml.Matrix4x3fc"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $Vector4fc$$Type } from "org.joml.Vector4fc"
import { $Matrix3f, $Matrix3f$$Type } from "org.joml.Matrix3f"
import { $ObjectInput$$Type } from "java.io.ObjectInput"
import { $Vector4f, $Vector4f$$Type } from "org.joml.Vector4f"

export class $Matrix4x3f implements $Externalizable, $Cloneable, $Matrix4x3fc {
constructor()
constructor(matrix4x3fc0: $Matrix4x3fc$$Type)
constructor(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3fc2: $Vector3fc$$Type, vector3fc3: $Vector3fc$$Type)
constructor(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, float9: float, float10: float, float11: float)
constructor(matrix3fc0: $Matrix3fc$$Type)
constructor(floatBuffer0: $FloatBuffer$$Type)

public "add"(matrix4x3fc0: $Matrix4x3fc$$Type): $Matrix4x3f
public "add"(matrix4x3fc0: $Matrix4x3fc$$Type, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
public "arcball"(float0: float, vector3fc1: $Vector3fc$$Type, float2: float, float3: float, matrix4x3f4: $Matrix4x3f$$Type): $Matrix4x3f
public "arcball"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4x3f6: $Matrix4x3f$$Type): $Matrix4x3f
public "arcball"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4x3f
public "arcball"(float0: float, vector3fc1: $Vector3fc$$Type, float2: float, float3: float): $Matrix4x3f
public "assume"(int0: integer): $Matrix4x3f
public "billboardCylindrical"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3fc2: $Vector3fc$$Type): $Matrix4x3f
public "billboardSpherical"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type): $Matrix4x3f
public "billboardSpherical"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3fc2: $Vector3fc$$Type): $Matrix4x3f
public "clone"(): any
public "cofactor3x3"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "cofactor3x3"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "cofactor3x3"(): $Matrix4x3f
public "determinant"(): float
public "determineProperties"(): $Matrix4x3f
public "equals"(matrix4x3fc0: $Matrix4x3fc$$Type, float1: float): boolean
public "fma"(matrix4x3fc0: $Matrix4x3fc$$Type, float1: float, matrix4x3f2: $Matrix4x3f$$Type): $Matrix4x3f
public "fma"(matrix4x3fc0: $Matrix4x3fc$$Type, float1: float): $Matrix4x3f
public "frustumPlane"(int0: integer, vector4f1: $Vector4f$$Type): $Vector4f
public "get"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "get"(float0s: float[], int1: integer): float[]
public "get"(float0s: float[]): float[]
public "get"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "get"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "get"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "get"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "get"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "get3x4"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "get3x4"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "get3x4"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "get3x4"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "get4x4"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "get4x4"(float0s: float[]): float[]
public "get4x4"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "get4x4"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "get4x4"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "get4x4"(float0s: float[], int1: integer): float[]
public "getColumn"(int0: integer, vector3f1: $Vector3f$$Type): $Vector3f
public "getEulerAnglesXYZ"(vector3f0: $Vector3f$$Type): $Vector3f
public "getEulerAnglesZYX"(vector3f0: $Vector3f$$Type): $Vector3f
public "getNormalizedRotation"(quaternionf0: $Quaternionf$$Type): $Quaternionf
public "getNormalizedRotation"(quaterniond0: $Quaterniond$$Type): $Quaterniond
public "getRotation"(axisAngle4d0: $AxisAngle4d$$Type): $AxisAngle4d
public "getRotation"(axisAngle4f0: $AxisAngle4f$$Type): $AxisAngle4f
public "getRow"(int0: integer, vector4f1: $Vector4f$$Type): $Vector4f
public "getScale"(vector3f0: $Vector3f$$Type): $Vector3f
public "getToAddress"(long0: long): $Matrix4x3fc
public "getTranslation"(vector3f0: $Vector3f$$Type): $Vector3f
public "getTransposed"(float0s: float[]): float[]
public "getTransposed"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "getTransposed"(float0s: float[], int1: integer): float[]
public "getTransposed"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "getTransposed"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "getTransposed"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "getUnnormalizedRotation"(quaterniond0: $Quaterniond$$Type): $Quaterniond
public "getUnnormalizedRotation"(quaternionf0: $Quaternionf$$Type): $Quaternionf
public "identity"(): $Matrix4x3f
public "invert"(): $Matrix4x3f
public "invert"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "invert"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "invertOrtho"(): $Matrix4x3f
public "invertOrtho"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "isFinite"(): boolean
public "lerp"(matrix4x3fc0: $Matrix4x3fc$$Type, float1: float, matrix4x3f2: $Matrix4x3f$$Type): $Matrix4x3f
public "lerp"(matrix4x3fc0: $Matrix4x3fc$$Type, float1: float): $Matrix4x3f
public "lookAlong"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4x3f
public "lookAlong"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4x3f6: $Matrix4x3f$$Type): $Matrix4x3f
public "lookAlong"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type): $Matrix4x3f
public "lookAlong"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, matrix4x3f2: $Matrix4x3f$$Type): $Matrix4x3f
public "lookAt"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float): $Matrix4x3f
public "lookAt"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, matrix4x3f9: $Matrix4x3f$$Type): $Matrix4x3f
public "lookAt"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3fc2: $Vector3fc$$Type, matrix4x3f3: $Matrix4x3f$$Type): $Matrix4x3f
public "lookAt"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3fc2: $Vector3fc$$Type): $Matrix4x3f
public "lookAtLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, matrix4x3f9: $Matrix4x3f$$Type): $Matrix4x3f
public "lookAtLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float): $Matrix4x3f
public "lookAtLH"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3fc2: $Vector3fc$$Type, matrix4x3f3: $Matrix4x3f$$Type): $Matrix4x3f
public "lookAtLH"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3fc2: $Vector3fc$$Type): $Matrix4x3f
public "m00"(): float
public "m00"(float0: float): $Matrix4x3f
public "m01"(): float
public "m01"(float0: float): $Matrix4x3f
public "m02"(): float
public "m02"(float0: float): $Matrix4x3f
public "m10"(): float
public "m10"(float0: float): $Matrix4x3f
public "m11"(float0: float): $Matrix4x3f
public "m11"(): float
public "m12"(float0: float): $Matrix4x3f
public "m12"(): float
public "m20"(): float
public "m20"(float0: float): $Matrix4x3f
public "m21"(float0: float): $Matrix4x3f
public "m21"(): float
public "m22"(): float
public "m22"(float0: float): $Matrix4x3f
public "m30"(): float
public "m30"(float0: float): $Matrix4x3f
public "m31"(): float
public "m31"(float0: float): $Matrix4x3f
public "m32"(float0: float): $Matrix4x3f
public "m32"(): float
public "mapXZY"(): $Matrix4x3f
public "mapXZY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapXZnY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapXZnY"(): $Matrix4x3f
public "mapXnYnZ"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapXnYnZ"(): $Matrix4x3f
public "mapXnZY"(): $Matrix4x3f
public "mapXnZY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapXnZnY"(): $Matrix4x3f
public "mapXnZnY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapYXZ"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapYXZ"(): $Matrix4x3f
public "mapYXnZ"(): $Matrix4x3f
public "mapYXnZ"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapYZX"(): $Matrix4x3f
public "mapYZX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapYZnX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapYZnX"(): $Matrix4x3f
public "mapYnXZ"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapYnXZ"(): $Matrix4x3f
public "mapYnXnZ"(): $Matrix4x3f
public "mapYnXnZ"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapYnZX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapYnZX"(): $Matrix4x3f
public "mapYnZnX"(): $Matrix4x3f
public "mapYnZnX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapZXY"(): $Matrix4x3f
public "mapZXY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapZXnY"(): $Matrix4x3f
public "mapZXnY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapZYX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapZYX"(): $Matrix4x3f
public "mapZYnX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapZYnX"(): $Matrix4x3f
public "mapZnXY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapZnXY"(): $Matrix4x3f
public "mapZnXnY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapZnXnY"(): $Matrix4x3f
public "mapZnYX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapZnYX"(): $Matrix4x3f
public "mapZnYnX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapZnYnX"(): $Matrix4x3f
public "mapnXYnZ"(): $Matrix4x3f
public "mapnXYnZ"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapnXZY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapnXZY"(): $Matrix4x3f
public "mapnXZnY"(): $Matrix4x3f
public "mapnXZnY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapnXnYZ"(): $Matrix4x3f
public "mapnXnYZ"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapnXnYnZ"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapnXnYnZ"(): $Matrix4x3f
public "mapnXnZY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapnXnZY"(): $Matrix4x3f
public "mapnXnZnY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapnXnZnY"(): $Matrix4x3f
public "mapnYXZ"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapnYXZ"(): $Matrix4x3f
public "mapnYXnZ"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapnYXnZ"(): $Matrix4x3f
public "mapnYZX"(): $Matrix4x3f
public "mapnYZX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapnYZnX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapnYZnX"(): $Matrix4x3f
public "mapnYnXZ"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapnYnXZ"(): $Matrix4x3f
public "mapnYnXnZ"(): $Matrix4x3f
public "mapnYnXnZ"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapnYnZX"(): $Matrix4x3f
public "mapnYnZX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapnYnZnX"(): $Matrix4x3f
public "mapnYnZnX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapnZXY"(): $Matrix4x3f
public "mapnZXY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapnZXnY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapnZXnY"(): $Matrix4x3f
public "mapnZYX"(): $Matrix4x3f
public "mapnZYX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapnZYnX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapnZYnX"(): $Matrix4x3f
public "mapnZnXY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapnZnXY"(): $Matrix4x3f
public "mapnZnXnY"(): $Matrix4x3f
public "mapnZnXnY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapnZnYX"(): $Matrix4x3f
public "mapnZnYX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapnZnYnX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "mapnZnYnX"(): $Matrix4x3f
public "mul"(matrix4x3fc0: $Matrix4x3fc$$Type, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
public "mul"(matrix4x3fc0: $Matrix4x3fc$$Type): $Matrix4x3f
public "mul3x3"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, matrix4x3f9: $Matrix4x3f$$Type): $Matrix4x3f
public "mul3x3"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float): $Matrix4x3f
public "mulComponentWise"(matrix4x3fc0: $Matrix4x3fc$$Type): $Matrix4x3f
public "mulComponentWise"(matrix4x3fc0: $Matrix4x3fc$$Type, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
public "mulOrtho"(matrix4x3fc0: $Matrix4x3fc$$Type): $Matrix4x3f
public "mulOrtho"(matrix4x3fc0: $Matrix4x3fc$$Type, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
public "mulTranslation"(matrix4x3fc0: $Matrix4x3fc$$Type, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
public "negateX"(): $Matrix4x3f
public "negateX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "negateY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "negateY"(): $Matrix4x3f
public "negateZ"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "negateZ"(): $Matrix4x3f
public "normal"(): $Matrix4x3f
public "normal"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "normal"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "normalize3x3"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "normalize3x3"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "normalize3x3"(): $Matrix4x3f
public "normalizedPositiveX"(vector3f0: $Vector3f$$Type): $Vector3f
public "normalizedPositiveY"(vector3f0: $Vector3f$$Type): $Vector3f
public "normalizedPositiveZ"(vector3f0: $Vector3f$$Type): $Vector3f
public "obliqueZ"(float0: float, float1: float, matrix4x3f2: $Matrix4x3f$$Type): $Matrix4x3f
public "obliqueZ"(float0: float, float1: float): $Matrix4x3f
public "origin"(vector3f0: $Vector3f$$Type): $Vector3f
public "ortho"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean, matrix4x3f7: $Matrix4x3f$$Type): $Matrix4x3f
public "ortho"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4x3f6: $Matrix4x3f$$Type): $Matrix4x3f
public "ortho"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean): $Matrix4x3f
public "ortho"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4x3f
public "ortho2D"(float0: float, float1: float, float2: float, float3: float): $Matrix4x3f
public "ortho2D"(float0: float, float1: float, float2: float, float3: float, matrix4x3f4: $Matrix4x3f$$Type): $Matrix4x3f
public "ortho2DLH"(float0: float, float1: float, float2: float, float3: float): $Matrix4x3f
public "ortho2DLH"(float0: float, float1: float, float2: float, float3: float, matrix4x3f4: $Matrix4x3f$$Type): $Matrix4x3f
public "orthoLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4x3f
public "orthoLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean, matrix4x3f7: $Matrix4x3f$$Type): $Matrix4x3f
public "orthoLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean): $Matrix4x3f
public "orthoLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4x3f6: $Matrix4x3f$$Type): $Matrix4x3f
public "orthoSymmetric"(float0: float, float1: float, float2: float, float3: float): $Matrix4x3f
public "orthoSymmetric"(float0: float, float1: float, float2: float, float3: float, boolean4: boolean, matrix4x3f5: $Matrix4x3f$$Type): $Matrix4x3f
public "orthoSymmetric"(float0: float, float1: float, float2: float, float3: float, matrix4x3f4: $Matrix4x3f$$Type): $Matrix4x3f
public "orthoSymmetric"(float0: float, float1: float, float2: float, float3: float, boolean4: boolean): $Matrix4x3f
public "orthoSymmetricLH"(float0: float, float1: float, float2: float, float3: float, matrix4x3f4: $Matrix4x3f$$Type): $Matrix4x3f
public "orthoSymmetricLH"(float0: float, float1: float, float2: float, float3: float, boolean4: boolean): $Matrix4x3f
public "orthoSymmetricLH"(float0: float, float1: float, float2: float, float3: float, boolean4: boolean, matrix4x3f5: $Matrix4x3f$$Type): $Matrix4x3f
public "orthoSymmetricLH"(float0: float, float1: float, float2: float, float3: float): $Matrix4x3f
public "pick"(float0: float, float1: float, float2: float, float3: float, int4s: integer[]): $Matrix4x3f
public "pick"(float0: float, float1: float, float2: float, float3: float, int4s: integer[], matrix4x3f5: $Matrix4x3f$$Type): $Matrix4x3f
public "positiveX"(vector3f0: $Vector3f$$Type): $Vector3f
public "positiveY"(vector3f0: $Vector3f$$Type): $Vector3f
public "positiveZ"(vector3f0: $Vector3f$$Type): $Vector3f
public "properties"(): integer
public "readExternal"(objectInput0: $ObjectInput$$Type): void
public "reflect"(quaternionfc0: $Quaternionfc$$Type, vector3fc1: $Vector3fc$$Type, matrix4x3f2: $Matrix4x3f$$Type): $Matrix4x3f
public "reflect"(quaternionfc0: $Quaternionfc$$Type, vector3fc1: $Vector3fc$$Type): $Matrix4x3f
public "reflect"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type): $Matrix4x3f
public "reflect"(float0: float, float1: float, float2: float, float3: float): $Matrix4x3f
public "reflect"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4x3f
public "reflect"(float0: float, float1: float, float2: float, float3: float, matrix4x3f4: $Matrix4x3f$$Type): $Matrix4x3f
public "reflect"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, matrix4x3f2: $Matrix4x3f$$Type): $Matrix4x3f
public "reflect"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4x3f6: $Matrix4x3f$$Type): $Matrix4x3f
public "reflection"(float0: float, float1: float, float2: float, float3: float): $Matrix4x3f
public "reflection"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type): $Matrix4x3f
public "reflection"(quaternionfc0: $Quaternionfc$$Type, vector3fc1: $Vector3fc$$Type): $Matrix4x3f
public "reflection"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4x3f
public "rotate"(axisAngle4f0: $AxisAngle4f$$Type): $Matrix4x3f
public "rotate"(quaternionfc0: $Quaternionfc$$Type): $Matrix4x3f
public "rotate"(float0: float, float1: float, float2: float, float3: float): $Matrix4x3f
public "rotate"(quaternionfc0: $Quaternionfc$$Type, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
public "rotate"(float0: float, float1: float, float2: float, float3: float, matrix4x3f4: $Matrix4x3f$$Type): $Matrix4x3f
public "rotate"(float0: float, vector3fc1: $Vector3fc$$Type, matrix4x3f2: $Matrix4x3f$$Type): $Matrix4x3f
public "rotate"(float0: float, vector3fc1: $Vector3fc$$Type): $Matrix4x3f
public "rotate"(axisAngle4f0: $AxisAngle4f$$Type, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
public "rotateAround"(quaternionfc0: $Quaternionfc$$Type, float1: float, float2: float, float3: float): $Matrix4x3f
public "rotateAround"(quaternionfc0: $Quaternionfc$$Type, float1: float, float2: float, float3: float, matrix4x3f4: $Matrix4x3f$$Type): $Matrix4x3f
public "rotateLocal"(quaternionfc0: $Quaternionfc$$Type): $Matrix4x3f
public "rotateLocal"(quaternionfc0: $Quaternionfc$$Type, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
public "rotateLocal"(float0: float, float1: float, float2: float, float3: float): $Matrix4x3f
public "rotateLocal"(float0: float, float1: float, float2: float, float3: float, matrix4x3f4: $Matrix4x3f$$Type): $Matrix4x3f
public "rotateLocalX"(float0: float): $Matrix4x3f
public "rotateLocalX"(float0: float, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
public "rotateLocalY"(float0: float): $Matrix4x3f
public "rotateLocalY"(float0: float, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
public "rotateLocalZ"(float0: float): $Matrix4x3f
public "rotateLocalZ"(float0: float, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
public "rotateTowards"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, matrix4x3f2: $Matrix4x3f$$Type): $Matrix4x3f
public "rotateTowards"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type): $Matrix4x3f
public "rotateTowards"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4x3f
public "rotateTowards"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4x3f6: $Matrix4x3f$$Type): $Matrix4x3f
public "rotateTranslation"(quaternionfc0: $Quaternionfc$$Type, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
public "rotateTranslation"(float0: float, float1: float, float2: float, float3: float, matrix4x3f4: $Matrix4x3f$$Type): $Matrix4x3f
public "rotateX"(float0: float): $Matrix4x3f
public "rotateX"(float0: float, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
public "rotateXYZ"(vector3f0: $Vector3f$$Type): $Matrix4x3f
public "rotateXYZ"(float0: float, float1: float, float2: float, matrix4x3f3: $Matrix4x3f$$Type): $Matrix4x3f
public "rotateXYZ"(float0: float, float1: float, float2: float): $Matrix4x3f
public "rotateY"(float0: float, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
public "rotateY"(float0: float): $Matrix4x3f
public "rotateYXZ"(vector3f0: $Vector3f$$Type): $Matrix4x3f
public "rotateYXZ"(float0: float, float1: float, float2: float): $Matrix4x3f
public "rotateYXZ"(float0: float, float1: float, float2: float, matrix4x3f3: $Matrix4x3f$$Type): $Matrix4x3f
public "rotateZ"(float0: float, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
public "rotateZ"(float0: float): $Matrix4x3f
public "rotateZYX"(float0: float, float1: float, float2: float, matrix4x3f3: $Matrix4x3f$$Type): $Matrix4x3f
public "rotateZYX"(float0: float, float1: float, float2: float): $Matrix4x3f
public "rotateZYX"(vector3f0: $Vector3f$$Type): $Matrix4x3f
public "rotation"(float0: float, vector3fc1: $Vector3fc$$Type): $Matrix4x3f
public "rotation"(axisAngle4f0: $AxisAngle4f$$Type): $Matrix4x3f
public "rotation"(float0: float, float1: float, float2: float, float3: float): $Matrix4x3f
public "rotation"(quaternionfc0: $Quaternionfc$$Type): $Matrix4x3f
public "rotationAround"(quaternionfc0: $Quaternionfc$$Type, float1: float, float2: float, float3: float): $Matrix4x3f
public "rotationTowards"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type): $Matrix4x3f
public "rotationTowards"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4x3f
public "rotationX"(float0: float): $Matrix4x3f
public "rotationXYZ"(float0: float, float1: float, float2: float): $Matrix4x3f
public "rotationY"(float0: float): $Matrix4x3f
public "rotationYXZ"(float0: float, float1: float, float2: float): $Matrix4x3f
public "rotationZ"(float0: float): $Matrix4x3f
public "rotationZYX"(float0: float, float1: float, float2: float): $Matrix4x3f
public "scale"(float0: float, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
public "scale"(float0: float): $Matrix4x3f
public "scale"(float0: float, float1: float, float2: float, matrix4x3f3: $Matrix4x3f$$Type): $Matrix4x3f
public "scale"(float0: float, float1: float, float2: float): $Matrix4x3f
public "scale"(vector3fc0: $Vector3fc$$Type): $Matrix4x3f
public "scale"(vector3fc0: $Vector3fc$$Type, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
public "scaleAround"(float0: float, float1: float, float2: float, float3: float, matrix4x3f4: $Matrix4x3f$$Type): $Matrix4x3f
public "scaleAround"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4x3f6: $Matrix4x3f$$Type): $Matrix4x3f
public "scaleAround"(float0: float, float1: float, float2: float, float3: float): $Matrix4x3f
public "scaleAround"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4x3f
public "scaleLocal"(float0: float, float1: float, float2: float): $Matrix4x3f
public "scaleLocal"(float0: float, float1: float, float2: float, matrix4x3f3: $Matrix4x3f$$Type): $Matrix4x3f
public "scaleXY"(float0: float, float1: float): $Matrix4x3f
public "scaleXY"(float0: float, float1: float, matrix4x3f2: $Matrix4x3f$$Type): $Matrix4x3f
public "scaling"(vector3fc0: $Vector3fc$$Type): $Matrix4x3f
public "scaling"(float0: float, float1: float, float2: float): $Matrix4x3f
public "scaling"(float0: float): $Matrix4x3f
public "set"(matrix3fc0: $Matrix3fc$$Type): $Matrix4x3f
public "set"(axisAngle4d0: $AxisAngle4d$$Type): $Matrix4x3f
public "set"(axisAngle4f0: $AxisAngle4f$$Type): $Matrix4x3f
public "set"(matrix4fc0: $Matrix4fc$$Type): $Matrix4x3f
public "set"(matrix4x3fc0: $Matrix4x3fc$$Type): $Matrix4x3f
public "set"(float0s: float[]): $Matrix4x3f
public "set"(floatBuffer0: $FloatBuffer$$Type): $Matrix4x3f
public "set"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $Matrix4x3f
public "set"(byteBuffer0: $ByteBuffer$$Type): $Matrix4x3f
public "set"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $Matrix4x3f
public "set"(quaternionfc0: $Quaternionfc$$Type): $Matrix4x3f
public "set"(quaterniondc0: $Quaterniondc$$Type): $Matrix4x3f
public "set"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3fc2: $Vector3fc$$Type, vector3fc3: $Vector3fc$$Type): $Matrix4x3f
public "set"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, float9: float, float10: float, float11: float): $Matrix4x3f
public "set"(float0s: float[], int1: integer): $Matrix4x3f
public "set3x3"(matrix3fc0: $Matrix3fc$$Type): $Matrix4x3f
public "set3x3"(matrix4x3fc0: $Matrix4x3fc$$Type): $Matrix4x3f
public "setColumn"(int0: integer, vector3fc1: $Vector3fc$$Type): $Matrix4x3f
public "setFromAddress"(long0: long): $Matrix4x3f
public "setLookAlong"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4x3f
public "setLookAlong"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type): $Matrix4x3f
public "setLookAt"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3fc2: $Vector3fc$$Type): $Matrix4x3f
public "setLookAt"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float): $Matrix4x3f
public "setLookAtLH"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3fc2: $Vector3fc$$Type): $Matrix4x3f
public "setLookAtLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float): $Matrix4x3f
public "setOrtho"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean): $Matrix4x3f
public "setOrtho"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4x3f
public "setOrtho2D"(float0: float, float1: float, float2: float, float3: float): $Matrix4x3f
public "setOrtho2DLH"(float0: float, float1: float, float2: float, float3: float): $Matrix4x3f
public "setOrthoLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean): $Matrix4x3f
public "setOrthoLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4x3f
public "setOrthoSymmetric"(float0: float, float1: float, float2: float, float3: float): $Matrix4x3f
public "setOrthoSymmetric"(float0: float, float1: float, float2: float, float3: float, boolean4: boolean): $Matrix4x3f
public "setOrthoSymmetricLH"(float0: float, float1: float, float2: float, float3: float, boolean4: boolean): $Matrix4x3f
public "setOrthoSymmetricLH"(float0: float, float1: float, float2: float, float3: float): $Matrix4x3f
public "setRotationXYZ"(float0: float, float1: float, float2: float): $Matrix4x3f
public "setRotationYXZ"(float0: float, float1: float, float2: float): $Matrix4x3f
public "setRotationZYX"(float0: float, float1: float, float2: float): $Matrix4x3f
public "setRow"(int0: integer, vector4fc1: $Vector4fc$$Type): $Matrix4x3f
public "setTranslation"(float0: float, float1: float, float2: float): $Matrix4x3f
public "setTranslation"(vector3fc0: $Vector3fc$$Type): $Matrix4x3f
public "shadow"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, matrix4x3f8: $Matrix4x3f$$Type): $Matrix4x3f
public "shadow"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float): $Matrix4x3f
public "shadow"(vector4fc0: $Vector4fc$$Type, float1: float, float2: float, float3: float, float4: float, matrix4x3f5: $Matrix4x3f$$Type): $Matrix4x3f
public "shadow"(vector4fc0: $Vector4fc$$Type, float1: float, float2: float, float3: float, float4: float): $Matrix4x3f
public "shadow"(float0: float, float1: float, float2: float, float3: float, matrix4x3f4: $Matrix4x3f$$Type): $Matrix4x3f
public "shadow"(vector4fc0: $Vector4fc$$Type, matrix4x3fc1: $Matrix4x3fc$$Type): $Matrix4x3f
public "shadow"(vector4fc0: $Vector4fc$$Type, matrix4x3fc1: $Matrix4x3fc$$Type, matrix4x3f2: $Matrix4x3f$$Type): $Matrix4x3f
public "shadow"(float0: float, float1: float, float2: float, float3: float, matrix4x3fc4: $Matrix4x3fc$$Type, matrix4x3f5: $Matrix4x3f$$Type): $Matrix4x3f
public "sub"(matrix4x3fc0: $Matrix4x3fc$$Type, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
public "sub"(matrix4x3fc0: $Matrix4x3fc$$Type): $Matrix4x3f
public "swap"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "toString"(numberFormat0: $NumberFormat$$Type): string
public "transform"(vector4f0: $Vector4f$$Type): $Vector4f
public "transform"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
public "transformAab"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, vector3f6: $Vector3f$$Type, vector3f7: $Vector3f$$Type): $Matrix4x3f
public "transformAab"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3f2: $Vector3f$$Type, vector3f3: $Vector3f$$Type): $Matrix4x3f
public "transformDirection"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "transformDirection"(vector3f0: $Vector3f$$Type): $Vector3f
public "transformPosition"(vector3f0: $Vector3f$$Type): $Vector3f
public "transformPosition"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "translate"(vector3fc0: $Vector3fc$$Type, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
public "translate"(float0: float, float1: float, float2: float): $Matrix4x3f
public "translate"(vector3fc0: $Vector3fc$$Type): $Matrix4x3f
public "translate"(float0: float, float1: float, float2: float, matrix4x3f3: $Matrix4x3f$$Type): $Matrix4x3f
public "translateLocal"(float0: float, float1: float, float2: float): $Matrix4x3f
public "translateLocal"(vector3fc0: $Vector3fc$$Type, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
public "translateLocal"(vector3fc0: $Vector3fc$$Type): $Matrix4x3f
public "translateLocal"(float0: float, float1: float, float2: float, matrix4x3f3: $Matrix4x3f$$Type): $Matrix4x3f
public "translation"(float0: float, float1: float, float2: float): $Matrix4x3f
public "translation"(vector3fc0: $Vector3fc$$Type): $Matrix4x3f
public "translationRotate"(vector3fc0: $Vector3fc$$Type, quaternionfc1: $Quaternionfc$$Type): $Matrix4x3f
public "translationRotate"(float0: float, float1: float, float2: float, quaternionfc3: $Quaternionfc$$Type): $Matrix4x3f
public "translationRotate"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float): $Matrix4x3f
public "translationRotateInvert"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float): $Matrix4x3f
public "translationRotateInvert"(vector3fc0: $Vector3fc$$Type, quaternionfc1: $Quaternionfc$$Type): $Matrix4x3f
public "translationRotateMul"(float0: float, float1: float, float2: float, quaternionfc3: $Quaternionfc$$Type, matrix4x3fc4: $Matrix4x3fc$$Type): $Matrix4x3f
public "translationRotateMul"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, matrix4x3fc7: $Matrix4x3fc$$Type): $Matrix4x3f
public "translationRotateScale"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, float9: float): $Matrix4x3f
public "translationRotateScale"(vector3fc0: $Vector3fc$$Type, quaternionfc1: $Quaternionfc$$Type, vector3fc2: $Vector3fc$$Type): $Matrix4x3f
public "translationRotateScaleMul"(vector3fc0: $Vector3fc$$Type, quaternionfc1: $Quaternionfc$$Type, vector3fc2: $Vector3fc$$Type, matrix4x3f3: $Matrix4x3f$$Type): $Matrix4x3f
public "translationRotateScaleMul"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, float9: float, matrix4x3f10: $Matrix4x3f$$Type): $Matrix4x3f
public "translationRotateTowards"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float): $Matrix4x3f
public "translationRotateTowards"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3fc2: $Vector3fc$$Type): $Matrix4x3f
public "transpose3x3"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "transpose3x3"(): $Matrix4x3f
public "transpose3x3"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "withLookAtUp"(float0: float, float1: float, float2: float): $Matrix4x3f
public "withLookAtUp"(vector3fc0: $Vector3fc$$Type): $Matrix4x3f
public "withLookAtUp"(float0: float, float1: float, float2: float, matrix4x3f3: $Matrix4x3f$$Type): $Matrix4x3f
public "withLookAtUp"(vector3fc0: $Vector3fc$$Type, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
public "writeExternal"(objectOutput0: $ObjectOutput$$Type): void
public "zero"(): $Matrix4x3f
get "finite"(): boolean
set "3x3"(value: $Matrix3fc$$Type)
set "3x3"(value: $Matrix4x3fc$$Type)
set "fromAddress"(value: long)
}
}

declare module "org.joml.Vector2ic" {
import { $Vector2i, $Vector2i$$Type } from "org.joml.Vector2i"
import { $IntBuffer, $IntBuffer$$Type } from "java.nio.IntBuffer"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export interface $Vector2ic {
"absolute"(vector2i0: $Vector2i$$Type): $Vector2i
"add"(vector2ic0: $Vector2ic$$Type, vector2i1: $Vector2i$$Type): $Vector2i
"add"(int0: integer, int1: integer, vector2i2: $Vector2i$$Type): $Vector2i
"distance"(int0: integer, int1: integer): double
"distance"(vector2ic0: $Vector2ic$$Type): double
"distanceSquared"(int0: integer, int1: integer): long
"distanceSquared"(vector2ic0: $Vector2ic$$Type): long
"div"(int0: integer, vector2i1: $Vector2i$$Type): $Vector2i
"div"(float0: float, vector2i1: $Vector2i$$Type): $Vector2i
"equals"(int0: integer, int1: integer): boolean
"get"(int0: integer): integer
"get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"get"(int0: integer, intBuffer1: $IntBuffer$$Type): $IntBuffer
"get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"get"(intBuffer0: $IntBuffer$$Type): $IntBuffer
"getToAddress"(long0: long): $Vector2ic
"gridDistance"(int0: integer, int1: integer): long
"gridDistance"(vector2ic0: $Vector2ic$$Type): long
"length"(): double
"lengthSquared"(): long
"max"(vector2ic0: $Vector2ic$$Type, vector2i1: $Vector2i$$Type): $Vector2i
"maxComponent"(): integer
"min"(vector2ic0: $Vector2ic$$Type, vector2i1: $Vector2i$$Type): $Vector2i
"minComponent"(): integer
"mul"(vector2ic0: $Vector2ic$$Type, vector2i1: $Vector2i$$Type): $Vector2i
"mul"(int0: integer, int1: integer, vector2i2: $Vector2i$$Type): $Vector2i
"mul"(int0: integer, vector2i1: $Vector2i$$Type): $Vector2i
"negate"(vector2i0: $Vector2i$$Type): $Vector2i
"sub"(int0: integer, int1: integer, vector2i2: $Vector2i$$Type): $Vector2i
"sub"(vector2ic0: $Vector2ic$$Type, vector2i1: $Vector2i$$Type): $Vector2i
"x"(): integer
"y"(): integer
}

export namespace $Vector2ic {
const probejs$$marker: never
}
export abstract class $Vector2ic$$Static implements $Vector2ic {
}
}

declare module "org.joml.Vector2dc" {
import { $Vector2i, $Vector2i$$Type } from "org.joml.Vector2i"
import { $Vector2fc$$Type } from "org.joml.Vector2fc"
import { $Matrix2fc$$Type } from "org.joml.Matrix2fc"
import { $Matrix3x2dc$$Type } from "org.joml.Matrix3x2dc"
import { $DoubleBuffer, $DoubleBuffer$$Type } from "java.nio.DoubleBuffer"
import { $Vector2f, $Vector2f$$Type } from "org.joml.Vector2f"
import { $Vector2d, $Vector2d$$Type } from "org.joml.Vector2d"
import { $Matrix2dc$$Type } from "org.joml.Matrix2dc"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export interface $Vector2dc {
"absolute"(vector2d0: $Vector2d$$Type): $Vector2d
"add"(vector2dc0: $Vector2dc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
"add"(double0: double, double1: double, vector2d2: $Vector2d$$Type): $Vector2d
"add"(vector2fc0: $Vector2fc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
"angle"(vector2dc0: $Vector2dc$$Type): double
"ceil"(vector2d0: $Vector2d$$Type): $Vector2d
"distance"(vector2fc0: $Vector2fc$$Type): double
"distance"(vector2dc0: $Vector2dc$$Type): double
"distance"(double0: double, double1: double): double
"distanceSquared"(vector2fc0: $Vector2fc$$Type): double
"distanceSquared"(double0: double, double1: double): double
"distanceSquared"(vector2dc0: $Vector2dc$$Type): double
"div"(vector2fc0: $Vector2fc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
"div"(vector2dc0: $Vector2dc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
"div"(double0: double, vector2d1: $Vector2d$$Type): $Vector2d
"div"(double0: double, double1: double, vector2d2: $Vector2d$$Type): $Vector2d
"dot"(vector2dc0: $Vector2dc$$Type): double
"equals"(vector2dc0: $Vector2dc$$Type, double1: double): boolean
"equals"(double0: double, double1: double): boolean
"floor"(vector2d0: $Vector2d$$Type): $Vector2d
"fma"(vector2dc0: $Vector2dc$$Type, vector2dc1: $Vector2dc$$Type, vector2d2: $Vector2d$$Type): $Vector2d
"fma"(double0: double, vector2dc1: $Vector2dc$$Type, vector2d2: $Vector2d$$Type): $Vector2d
"get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"get"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
"get"(vector2d0: $Vector2d$$Type): $Vector2d
"get"(vector2f0: $Vector2f$$Type): $Vector2f
"get"(int0: integer, vector2i1: $Vector2i$$Type): $Vector2i
"get"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
"get"(int0: integer): double
"get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"getToAddress"(long0: long): $Vector2dc
"isFinite"(): boolean
"length"(): double
"lengthSquared"(): double
"lerp"(vector2dc0: $Vector2dc$$Type, double1: double, vector2d2: $Vector2d$$Type): $Vector2d
"max"(vector2dc0: $Vector2dc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
"maxComponent"(): integer
"min"(vector2dc0: $Vector2dc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
"minComponent"(): integer
"mul"(double0: double, vector2d1: $Vector2d$$Type): $Vector2d
"mul"(matrix2fc0: $Matrix2fc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
"mul"(matrix2dc0: $Matrix2dc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
"mul"(vector2dc0: $Vector2dc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
"mul"(double0: double, double1: double, vector2d2: $Vector2d$$Type): $Vector2d
"mulDirection"(matrix3x2dc0: $Matrix3x2dc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
"mulPosition"(matrix3x2dc0: $Matrix3x2dc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
"mulTranspose"(matrix2dc0: $Matrix2dc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
"mulTranspose"(matrix2fc0: $Matrix2fc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
"negate"(vector2d0: $Vector2d$$Type): $Vector2d
"normalize"(double0: double, vector2d1: $Vector2d$$Type): $Vector2d
"normalize"(vector2d0: $Vector2d$$Type): $Vector2d
"round"(vector2d0: $Vector2d$$Type): $Vector2d
"sub"(vector2dc0: $Vector2dc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
"sub"(double0: double, double1: double, vector2d2: $Vector2d$$Type): $Vector2d
"sub"(vector2fc0: $Vector2fc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
"x"(): double
"y"(): double
get "finite"(): boolean
}

export namespace $Vector2dc {
const probejs$$marker: never
}
export abstract class $Vector2dc$$Static implements $Vector2dc {
}
}

declare module "org.joml.Vector2fc" {
import { $Vector2i, $Vector2i$$Type } from "org.joml.Vector2i"
import { $Matrix3x2fc$$Type } from "org.joml.Matrix3x2fc"
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Matrix2fc$$Type } from "org.joml.Matrix2fc"
import { $Vector2f, $Vector2f$$Type } from "org.joml.Vector2f"
import { $Vector2d, $Vector2d$$Type } from "org.joml.Vector2d"
import { $Matrix2dc$$Type } from "org.joml.Matrix2dc"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export interface $Vector2fc {
"absolute"(vector2f0: $Vector2f$$Type): $Vector2f
"add"(float0: float, float1: float, vector2f2: $Vector2f$$Type): $Vector2f
"add"(vector2fc0: $Vector2fc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
"angle"(vector2fc0: $Vector2fc$$Type): float
"ceil"(vector2f0: $Vector2f$$Type): $Vector2f
"distance"(vector2fc0: $Vector2fc$$Type): float
"distance"(float0: float, float1: float): float
"distanceSquared"(vector2fc0: $Vector2fc$$Type): float
"distanceSquared"(float0: float, float1: float): float
"div"(vector2fc0: $Vector2fc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
"div"(float0: float, float1: float, vector2f2: $Vector2f$$Type): $Vector2f
"div"(float0: float, vector2f1: $Vector2f$$Type): $Vector2f
"dot"(vector2fc0: $Vector2fc$$Type): float
"equals"(vector2fc0: $Vector2fc$$Type, float1: float): boolean
"equals"(float0: float, float1: float): boolean
"floor"(vector2f0: $Vector2f$$Type): $Vector2f
"fma"(float0: float, vector2fc1: $Vector2fc$$Type, vector2f2: $Vector2f$$Type): $Vector2f
"fma"(vector2fc0: $Vector2fc$$Type, vector2fc1: $Vector2fc$$Type, vector2f2: $Vector2f$$Type): $Vector2f
"get"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"get"(int0: integer, vector2i1: $Vector2i$$Type): $Vector2i
"get"(int0: integer): float
"get"(vector2f0: $Vector2f$$Type): $Vector2f
"get"(vector2d0: $Vector2d$$Type): $Vector2d
"get"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"getToAddress"(long0: long): $Vector2fc
"isFinite"(): boolean
"length"(): float
"lengthSquared"(): float
"lerp"(vector2fc0: $Vector2fc$$Type, float1: float, vector2f2: $Vector2f$$Type): $Vector2f
"max"(vector2fc0: $Vector2fc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
"maxComponent"(): integer
"min"(vector2fc0: $Vector2fc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
"minComponent"(): integer
"mul"(matrix2fc0: $Matrix2fc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
"mul"(float0: float, vector2f1: $Vector2f$$Type): $Vector2f
"mul"(float0: float, float1: float, vector2f2: $Vector2f$$Type): $Vector2f
"mul"(matrix2dc0: $Matrix2dc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
"mul"(vector2fc0: $Vector2fc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
"mulDirection"(matrix3x2fc0: $Matrix3x2fc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
"mulPosition"(matrix3x2fc0: $Matrix3x2fc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
"mulTranspose"(matrix2fc0: $Matrix2fc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
"negate"(vector2f0: $Vector2f$$Type): $Vector2f
"normalize"(float0: float, vector2f1: $Vector2f$$Type): $Vector2f
"normalize"(vector2f0: $Vector2f$$Type): $Vector2f
"round"(vector2f0: $Vector2f$$Type): $Vector2f
"sub"(vector2fc0: $Vector2fc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
"sub"(float0: float, float1: float, vector2f2: $Vector2f$$Type): $Vector2f
"x"(): float
"y"(): float
get "finite"(): boolean
}

export namespace $Vector2fc {
const probejs$$marker: never
}
export abstract class $Vector2fc$$Static implements $Vector2fc {
}
}

declare module "org.joml.Quaternionf" {
import { $Matrix4x3d, $Matrix4x3d$$Type } from "org.joml.Matrix4x3d"
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $ObjectOutput$$Type } from "java.io.ObjectOutput"
import { $Quaterniond, $Quaterniond$$Type } from "org.joml.Quaterniond"
import { $Matrix4dc$$Type } from "org.joml.Matrix4dc"
import { $Matrix4x3f, $Matrix4x3f$$Type } from "org.joml.Matrix4x3f"
import { $Matrix3dc$$Type } from "org.joml.Matrix3dc"
import { $Matrix4fc$$Type } from "org.joml.Matrix4fc"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $NumberFormat$$Type } from "java.text.NumberFormat"
import { $Matrix3fc$$Type } from "org.joml.Matrix3fc"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Quaterniondc$$Type } from "org.joml.Quaterniondc"
import { $Vector3d, $Vector3d$$Type } from "org.joml.Vector3d"
import { $Matrix4f, $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $Quaternionfc, $Quaternionfc$$Type } from "org.joml.Quaternionfc"
import { $Matrix4d, $Matrix4d$$Type } from "org.joml.Matrix4d"
import { $Cloneable } from "java.lang.Cloneable"
import { $Externalizable } from "java.io.Externalizable"
import { $AxisAngle4f, $AxisAngle4f$$Type } from "org.joml.AxisAngle4f"
import { $Vector4dc$$Type } from "org.joml.Vector4dc"
import { $AxisAngle4d, $AxisAngle4d$$Type } from "org.joml.AxisAngle4d"
import { $Matrix4x3fc$$Type } from "org.joml.Matrix4x3fc"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $Matrix4x3dc$$Type } from "org.joml.Matrix4x3dc"
import { $Vector3dc$$Type } from "org.joml.Vector3dc"
import { $Vector4fc$$Type } from "org.joml.Vector4fc"
import { $Matrix3f, $Matrix3f$$Type } from "org.joml.Matrix3f"
import { $ObjectInput$$Type } from "java.io.ObjectInput"
import { $Vector4f, $Vector4f$$Type } from "org.joml.Vector4f"
import { $Matrix3d, $Matrix3d$$Type } from "org.joml.Matrix3d"
import { $Vector4d, $Vector4d$$Type } from "org.joml.Vector4d"

export class $Quaternionf implements $Externalizable, $Cloneable, $Quaternionfc {
"w": float
"x": float
"y": float
"z": float

constructor(float0: float, float1: float, float2: float, float3: float)
constructor(quaternionfc0: $Quaternionfc$$Type)
constructor(quaterniondc0: $Quaterniondc$$Type)
constructor(axisAngle4f0: $AxisAngle4f$$Type)
constructor(axisAngle4d0: $AxisAngle4d$$Type)
constructor(double0: double, double1: double, double2: double, double3: double)
constructor()

public "add"(float0: float, float1: float, float2: float, float3: float, quaternionf4: $Quaternionf$$Type): $Quaternionf
public "add"(quaternionfc0: $Quaternionfc$$Type, quaternionf1: $Quaternionf$$Type): $Quaternionf
public "add"(quaternionfc0: $Quaternionfc$$Type): $Quaternionf
public "add"(float0: float, float1: float, float2: float, float3: float): $Quaternionf
public "angle"(): float
public "clone"(): any
public "conjugate"(quaternionf0: $Quaternionf$$Type): $Quaternionf
public "conjugate"(): $Quaternionf
public "conjugateBy"(quaternionfc0: $Quaternionfc$$Type, quaternionf1: $Quaternionf$$Type): $Quaternionf
public "conjugateBy"(quaternionfc0: $Quaternionfc$$Type): $Quaternionf
public "difference"(quaternionf0: $Quaternionf$$Type): $Quaternionf
public "difference"(quaternionfc0: $Quaternionfc$$Type, quaternionf1: $Quaternionf$$Type): $Quaternionf
public "div"(quaternionfc0: $Quaternionfc$$Type): $Quaternionf
public "div"(quaternionfc0: $Quaternionfc$$Type, quaternionf1: $Quaternionf$$Type): $Quaternionf
public "dot"(quaternionf0: $Quaternionf$$Type): float
public "equals"(float0: float, float1: float, float2: float, float3: float): boolean
public "equals"(quaternionfc0: $Quaternionfc$$Type, float1: float): boolean
public "fromAxisAngleDeg"(float0: float, float1: float, float2: float, float3: float): $Quaternionf
public "fromAxisAngleDeg"(vector3fc0: $Vector3fc$$Type, float1: float): $Quaternionf
public "fromAxisAngleRad"(vector3fc0: $Vector3fc$$Type, float1: float): $Quaternionf
public "fromAxisAngleRad"(float0: float, float1: float, float2: float, float3: float): $Quaternionf
public "get"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "get"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "get"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "get"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "get"(axisAngle4f0: $AxisAngle4f$$Type): $AxisAngle4f
public "get"(axisAngle4d0: $AxisAngle4d$$Type): $AxisAngle4d
public "get"(quaterniond0: $Quaterniond$$Type): $Quaterniond
public "get"(quaternionf0: $Quaternionf$$Type): $Quaternionf
public "get"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "get"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "getAsMatrix3f"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "getAsMatrix3f"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "getAsMatrix4f"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "getAsMatrix4f"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "getAsMatrix4x3f"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "getAsMatrix4x3f"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "getEulerAnglesXYZ"(vector3f0: $Vector3f$$Type): $Vector3f
public "getEulerAnglesYXZ"(vector3f0: $Vector3f$$Type): $Vector3f
public "getEulerAnglesZXY"(vector3f0: $Vector3f$$Type): $Vector3f
public "getEulerAnglesZYX"(vector3f0: $Vector3f$$Type): $Vector3f
public "identity"(): $Quaternionf
public "integrate"(float0: float, float1: float, float2: float, float3: float, quaternionf4: $Quaternionf$$Type): $Quaternionf
public "integrate"(float0: float, float1: float, float2: float, float3: float): $Quaternionf
public "invert"(): $Quaternionf
public "invert"(quaternionf0: $Quaternionf$$Type): $Quaternionf
public "isFinite"(): boolean
public "lengthSquared"(): float
public "lookAlong"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, quaternionf6: $Quaternionf$$Type): $Quaternionf
public "lookAlong"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, quaternionf2: $Quaternionf$$Type): $Quaternionf
public "lookAlong"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Quaternionf
public "lookAlong"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type): $Quaternionf
public "mul"(float0: float, float1: float, float2: float, float3: float, quaternionf4: $Quaternionf$$Type): $Quaternionf
public "mul"(float0: float, quaternionf1: $Quaternionf$$Type): $Quaternionf
public "mul"(float0: float): $Quaternionf
public "mul"(quaternionfc0: $Quaternionfc$$Type, quaternionf1: $Quaternionf$$Type): $Quaternionf
public "mul"(quaternionfc0: $Quaternionfc$$Type): $Quaternionf
public "mul"(float0: float, float1: float, float2: float, float3: float): $Quaternionf
public "nlerp"(quaternionfc0: $Quaternionfc$$Type, float1: float, quaternionf2: $Quaternionf$$Type): $Quaternionf
public "nlerp"(quaternionfc0: $Quaternionfc$$Type, float1: float): $Quaternionf
public static "nlerp"(quaternionfc0s: $Quaternionfc$$Type[], float1s: float[], quaternionf2: $Quaternionf$$Type): $Quaternionfc
public static "nlerpIterative"(quaternionf0s: $Quaternionf$$Type[], float1s: float[], float2: float, quaternionf3: $Quaternionf$$Type): $Quaternionfc
public "nlerpIterative"(quaternionfc0: $Quaternionfc$$Type, float1: float, float2: float): $Quaternionf
public "nlerpIterative"(quaternionfc0: $Quaternionfc$$Type, float1: float, float2: float, quaternionf3: $Quaternionf$$Type): $Quaternionf
public "normalize"(): $Quaternionf
public "normalize"(quaternionf0: $Quaternionf$$Type): $Quaternionf
public "normalizedPositiveX"(vector3f0: $Vector3f$$Type): $Vector3f
public "normalizedPositiveY"(vector3f0: $Vector3f$$Type): $Vector3f
public "normalizedPositiveZ"(vector3f0: $Vector3f$$Type): $Vector3f
public "positiveX"(vector3f0: $Vector3f$$Type): $Vector3f
public "positiveY"(vector3f0: $Vector3f$$Type): $Vector3f
public "positiveZ"(vector3f0: $Vector3f$$Type): $Vector3f
public "premul"(float0: float, float1: float, float2: float, float3: float, quaternionf4: $Quaternionf$$Type): $Quaternionf
public "premul"(quaternionfc0: $Quaternionfc$$Type): $Quaternionf
public "premul"(quaternionfc0: $Quaternionfc$$Type, quaternionf1: $Quaternionf$$Type): $Quaternionf
public "premul"(float0: float, float1: float, float2: float, float3: float): $Quaternionf
public "readExternal"(objectInput0: $ObjectInput$$Type): void
public "rotateAxis"(float0: float, vector3fc1: $Vector3fc$$Type): $Quaternionf
public "rotateAxis"(float0: float, vector3fc1: $Vector3fc$$Type, quaternionf2: $Quaternionf$$Type): $Quaternionf
public "rotateAxis"(float0: float, float1: float, float2: float, float3: float, quaternionf4: $Quaternionf$$Type): $Quaternionf
public "rotateAxis"(float0: float, float1: float, float2: float, float3: float): $Quaternionf
public "rotateLocalX"(float0: float): $Quaternionf
public "rotateLocalX"(float0: float, quaternionf1: $Quaternionf$$Type): $Quaternionf
public "rotateLocalY"(float0: float): $Quaternionf
public "rotateLocalY"(float0: float, quaternionf1: $Quaternionf$$Type): $Quaternionf
public "rotateLocalZ"(float0: float, quaternionf1: $Quaternionf$$Type): $Quaternionf
public "rotateLocalZ"(float0: float): $Quaternionf
public "rotateTo"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Quaternionf
public "rotateTo"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type): $Quaternionf
public "rotateTo"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, quaternionf6: $Quaternionf$$Type): $Quaternionf
public "rotateTo"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, quaternionf2: $Quaternionf$$Type): $Quaternionf
public "rotateX"(float0: float, quaternionf1: $Quaternionf$$Type): $Quaternionf
public "rotateX"(float0: float): $Quaternionf
public "rotateXYZ"(float0: float, float1: float, float2: float, quaternionf3: $Quaternionf$$Type): $Quaternionf
public "rotateXYZ"(float0: float, float1: float, float2: float): $Quaternionf
public "rotateY"(float0: float, quaternionf1: $Quaternionf$$Type): $Quaternionf
public "rotateY"(float0: float): $Quaternionf
public "rotateYXZ"(float0: float, float1: float, float2: float): $Quaternionf
public "rotateYXZ"(float0: float, float1: float, float2: float, quaternionf3: $Quaternionf$$Type): $Quaternionf
public "rotateZ"(float0: float, quaternionf1: $Quaternionf$$Type): $Quaternionf
public "rotateZ"(float0: float): $Quaternionf
public "rotateZYX"(float0: float, float1: float, float2: float): $Quaternionf
public "rotateZYX"(float0: float, float1: float, float2: float, quaternionf3: $Quaternionf$$Type): $Quaternionf
public "rotationAxis"(axisAngle4f0: $AxisAngle4f$$Type): $Quaternionf
public "rotationAxis"(float0: float, float1: float, float2: float, float3: float): $Quaternionf
public "rotationAxis"(float0: float, vector3fc1: $Vector3fc$$Type): $Quaternionf
public "rotationTo"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type): $Quaternionf
public "rotationTo"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Quaternionf
public "rotationX"(float0: float): $Quaternionf
public "rotationXYZ"(float0: float, float1: float, float2: float): $Quaternionf
public "rotationY"(float0: float): $Quaternionf
public "rotationYXZ"(float0: float, float1: float, float2: float): $Quaternionf
public "rotationZ"(float0: float): $Quaternionf
public "rotationZYX"(float0: float, float1: float, float2: float): $Quaternionf
public "scale"(float0: float): $Quaternionf
public "scale"(float0: float, quaternionf1: $Quaternionf$$Type): $Quaternionf
public "scaling"(float0: float): $Quaternionf
public "set"(axisAngle4d0: $AxisAngle4d$$Type): $Quaternionf
public "set"(axisAngle4f0: $AxisAngle4f$$Type): $Quaternionf
public "set"(quaterniondc0: $Quaterniondc$$Type): $Quaternionf
public "set"(quaternionfc0: $Quaternionfc$$Type): $Quaternionf
public "set"(float0: float, float1: float, float2: float, float3: float): $Quaternionf
public "setAngleAxis"(double0: double, double1: double, double2: double, double3: double): $Quaternionf
public "setAngleAxis"(float0: float, float1: float, float2: float, float3: float): $Quaternionf
public "setFromNormalized"(matrix4fc0: $Matrix4fc$$Type): $Quaternionf
public "setFromNormalized"(matrix4dc0: $Matrix4dc$$Type): $Quaternionf
public "setFromNormalized"(matrix4x3dc0: $Matrix4x3dc$$Type): $Quaternionf
public "setFromNormalized"(matrix4x3fc0: $Matrix4x3fc$$Type): $Quaternionf
public "setFromNormalized"(matrix3dc0: $Matrix3dc$$Type): $Quaternionf
public "setFromNormalized"(matrix3fc0: $Matrix3fc$$Type): $Quaternionf
public "setFromUnnormalized"(matrix4fc0: $Matrix4fc$$Type): $Quaternionf
public "setFromUnnormalized"(matrix3fc0: $Matrix3fc$$Type): $Quaternionf
public "setFromUnnormalized"(matrix4x3dc0: $Matrix4x3dc$$Type): $Quaternionf
public "setFromUnnormalized"(matrix4x3fc0: $Matrix4x3fc$$Type): $Quaternionf
public "setFromUnnormalized"(matrix3dc0: $Matrix3dc$$Type): $Quaternionf
public "setFromUnnormalized"(matrix4dc0: $Matrix4dc$$Type): $Quaternionf
public "slerp"(quaternionfc0: $Quaternionfc$$Type, float1: float, quaternionf2: $Quaternionf$$Type): $Quaternionf
public "slerp"(quaternionfc0: $Quaternionfc$$Type, float1: float): $Quaternionf
public static "slerp"(quaternionf0s: $Quaternionf$$Type[], float1s: float[], quaternionf2: $Quaternionf$$Type): $Quaternionfc
public "toString"(numberFormat0: $NumberFormat$$Type): string
public "transform"(vector4d0: $Vector4d$$Type): $Vector4d
public "transform"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "transform"(vector3d0: $Vector3d$$Type): $Vector3d
public "transform"(float0: float, float1: float, float2: float, vector4f3: $Vector4f$$Type): $Vector4f
public "transform"(double0: double, double1: double, double2: double, vector4d3: $Vector4d$$Type): $Vector4d
public "transform"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "transform"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
public "transform"(float0: float, float1: float, float2: float, vector3d3: $Vector3d$$Type): $Vector3d
public "transform"(vector4f0: $Vector4f$$Type): $Vector4f
public "transform"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "transform"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
public "transform"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
public "transform"(vector3f0: $Vector3f$$Type): $Vector3f
public "transformInverse"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
public "transformInverse"(vector4f0: $Vector4f$$Type): $Vector4f
public "transformInverse"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
public "transformInverse"(float0: float, float1: float, float2: float, vector4f3: $Vector4f$$Type): $Vector4f
public "transformInverse"(vector3d0: $Vector3d$$Type): $Vector3d
public "transformInverse"(vector3f0: $Vector3f$$Type): $Vector3f
public "transformInverse"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
public "transformInverse"(float0: float, float1: float, float2: float, vector3d3: $Vector3d$$Type): $Vector3d
public "transformInverse"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "transformInverse"(vector4d0: $Vector4d$$Type): $Vector4d
public "transformInverse"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "transformInverse"(double0: double, double1: double, double2: double, vector4d3: $Vector4d$$Type): $Vector4d
public "transformInverse"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "transformInverseUnit"(float0: float, float1: float, float2: float, vector3d3: $Vector3d$$Type): $Vector3d
public "transformInverseUnit"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "transformInverseUnit"(vector4d0: $Vector4d$$Type): $Vector4d
public "transformInverseUnit"(double0: double, double1: double, double2: double, vector4d3: $Vector4d$$Type): $Vector4d
public "transformInverseUnit"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
public "transformInverseUnit"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "transformInverseUnit"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "transformInverseUnit"(vector3f0: $Vector3f$$Type): $Vector3f
public "transformInverseUnit"(float0: float, float1: float, float2: float, vector4f3: $Vector4f$$Type): $Vector4f
public "transformInverseUnit"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
public "transformInverseUnit"(vector4f0: $Vector4f$$Type): $Vector4f
public "transformInverseUnit"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
public "transformPositiveX"(vector3f0: $Vector3f$$Type): $Vector3f
public "transformPositiveX"(vector4f0: $Vector4f$$Type): $Vector4f
public "transformPositiveX"(vector3d0: $Vector3d$$Type): $Vector3d
public "transformPositiveX"(vector4d0: $Vector4d$$Type): $Vector4d
public "transformPositiveY"(vector4d0: $Vector4d$$Type): $Vector4d
public "transformPositiveY"(vector3d0: $Vector3d$$Type): $Vector3d
public "transformPositiveY"(vector4f0: $Vector4f$$Type): $Vector4f
public "transformPositiveY"(vector3f0: $Vector3f$$Type): $Vector3f
public "transformPositiveZ"(vector4d0: $Vector4d$$Type): $Vector4d
public "transformPositiveZ"(vector3d0: $Vector3d$$Type): $Vector3d
public "transformPositiveZ"(vector3f0: $Vector3f$$Type): $Vector3f
public "transformPositiveZ"(vector4f0: $Vector4f$$Type): $Vector4f
public "transformUnit"(float0: float, float1: float, float2: float, vector3d3: $Vector3d$$Type): $Vector3d
public "transformUnit"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
public "transformUnit"(float0: float, float1: float, float2: float, vector4f3: $Vector4f$$Type): $Vector4f
public "transformUnit"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
public "transformUnit"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "transformUnit"(vector4f0: $Vector4f$$Type): $Vector4f
public "transformUnit"(vector3f0: $Vector3f$$Type): $Vector3f
public "transformUnit"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "transformUnit"(double0: double, double1: double, double2: double, vector4d3: $Vector4d$$Type): $Vector4d
public "transformUnit"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "transformUnit"(vector4d0: $Vector4d$$Type): $Vector4d
public "transformUnit"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
public "transformUnitPositiveX"(vector4d0: $Vector4d$$Type): $Vector4d
public "transformUnitPositiveX"(vector4f0: $Vector4f$$Type): $Vector4f
public "transformUnitPositiveX"(vector3f0: $Vector3f$$Type): $Vector3f
public "transformUnitPositiveX"(vector3d0: $Vector3d$$Type): $Vector3d
public "transformUnitPositiveY"(vector3d0: $Vector3d$$Type): $Vector3d
public "transformUnitPositiveY"(vector4f0: $Vector4f$$Type): $Vector4f
public "transformUnitPositiveY"(vector3f0: $Vector3f$$Type): $Vector3f
public "transformUnitPositiveY"(vector4d0: $Vector4d$$Type): $Vector4d
public "transformUnitPositiveZ"(vector4f0: $Vector4f$$Type): $Vector4f
public "transformUnitPositiveZ"(vector4d0: $Vector4d$$Type): $Vector4d
public "transformUnitPositiveZ"(vector3f0: $Vector3f$$Type): $Vector3f
public "transformUnitPositiveZ"(vector3d0: $Vector3d$$Type): $Vector3d
public "w"(): float
public "writeExternal"(objectOutput0: $ObjectOutput$$Type): void
public "x"(): float
public "y"(): float
public "z"(): float
get "finite"(): boolean
set "fromNormalized"(value: $Matrix4fc$$Type)
set "fromNormalized"(value: $Matrix4dc$$Type)
set "fromNormalized"(value: $Matrix4x3dc$$Type)
set "fromNormalized"(value: $Matrix4x3fc$$Type)
set "fromNormalized"(value: $Matrix3dc$$Type)
set "fromNormalized"(value: $Matrix3fc$$Type)
set "fromUnnormalized"(value: $Matrix4fc$$Type)
set "fromUnnormalized"(value: $Matrix3fc$$Type)
set "fromUnnormalized"(value: $Matrix4x3dc$$Type)
set "fromUnnormalized"(value: $Matrix4x3fc$$Type)
set "fromUnnormalized"(value: $Matrix3dc$$Type)
set "fromUnnormalized"(value: $Matrix4dc$$Type)
}
}

declare module "org.joml.Quaterniond" {
import { $Quaternionf, $Quaternionf$$Type } from "org.joml.Quaternionf"
import { $ObjectOutput$$Type } from "java.io.ObjectOutput"
import { $Matrix4dc$$Type } from "org.joml.Matrix4dc"
import { $Matrix3dc$$Type } from "org.joml.Matrix3dc"
import { $Matrix4fc$$Type } from "org.joml.Matrix4fc"
import { $NumberFormat$$Type } from "java.text.NumberFormat"
import { $Matrix3fc$$Type } from "org.joml.Matrix3fc"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Quaterniondc, $Quaterniondc$$Type } from "org.joml.Quaterniondc"
import { $Vector3d, $Vector3d$$Type } from "org.joml.Vector3d"
import { $Matrix4f, $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $Quaternionfc$$Type } from "org.joml.Quaternionfc"
import { $Matrix4d, $Matrix4d$$Type } from "org.joml.Matrix4d"
import { $Cloneable } from "java.lang.Cloneable"
import { $Externalizable } from "java.io.Externalizable"
import { $AxisAngle4f, $AxisAngle4f$$Type } from "org.joml.AxisAngle4f"
import { $Vector4dc$$Type } from "org.joml.Vector4dc"
import { $AxisAngle4d, $AxisAngle4d$$Type } from "org.joml.AxisAngle4d"
import { $Matrix4x3fc$$Type } from "org.joml.Matrix4x3fc"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $Vector3dc$$Type } from "org.joml.Vector3dc"
import { $Matrix4x3dc$$Type } from "org.joml.Matrix4x3dc"
import { $Vector4fc$$Type } from "org.joml.Vector4fc"
import { $Matrix3f, $Matrix3f$$Type } from "org.joml.Matrix3f"
import { $ObjectInput$$Type } from "java.io.ObjectInput"
import { $Vector4f, $Vector4f$$Type } from "org.joml.Vector4f"
import { $Matrix3d, $Matrix3d$$Type } from "org.joml.Matrix3d"
import { $Vector4d, $Vector4d$$Type } from "org.joml.Vector4d"

export class $Quaterniond implements $Externalizable, $Cloneable, $Quaterniondc {
"w": double
"x": double
"y": double
"z": double

constructor(double0: double, double1: double, double2: double, double3: double)
constructor(quaterniondc0: $Quaterniondc$$Type)
constructor(quaternionfc0: $Quaternionfc$$Type)
constructor(axisAngle4f0: $AxisAngle4f$$Type)
constructor(axisAngle4d0: $AxisAngle4d$$Type)
constructor()

public "add"(double0: double, double1: double, double2: double, double3: double, quaterniond4: $Quaterniond$$Type): $Quaterniond
public "add"(quaterniondc0: $Quaterniondc$$Type): $Quaterniond
public "add"(double0: double, double1: double, double2: double, double3: double): $Quaterniond
public "add"(quaterniondc0: $Quaterniondc$$Type, quaterniond1: $Quaterniond$$Type): $Quaterniond
public "angle"(): double
public "clone"(): any
public "conjugate"(): $Quaterniond
public "conjugate"(quaterniond0: $Quaterniond$$Type): $Quaterniond
public "conjugateBy"(quaterniondc0: $Quaterniondc$$Type, quaterniond1: $Quaterniond$$Type): $Quaterniond
public "conjugateBy"(quaterniondc0: $Quaterniondc$$Type): $Quaterniond
public "difference"(quaterniondc0: $Quaterniondc$$Type, quaterniond1: $Quaterniond$$Type): $Quaterniond
public "difference"(quaterniondc0: $Quaterniondc$$Type): $Quaterniond
public "div"(quaterniondc0: $Quaterniondc$$Type): $Quaterniond
public "div"(quaterniondc0: $Quaterniondc$$Type, quaterniond1: $Quaterniond$$Type): $Quaterniond
public "dot"(quaterniondc0: $Quaterniondc$$Type): double
public "equals"(double0: double, double1: double, double2: double, double3: double): boolean
public "equals"(quaterniondc0: $Quaterniondc$$Type, double1: double): boolean
public "fromAxisAngleDeg"(double0: double, double1: double, double2: double, double3: double): $Quaterniond
public "fromAxisAngleDeg"(vector3dc0: $Vector3dc$$Type, double1: double): $Quaterniond
public "fromAxisAngleRad"(double0: double, double1: double, double2: double, double3: double): $Quaterniond
public "fromAxisAngleRad"(vector3dc0: $Vector3dc$$Type, double1: double): $Quaterniond
public "get"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "get"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "get"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "get"(axisAngle4f0: $AxisAngle4f$$Type): $AxisAngle4f
public "get"(axisAngle4d0: $AxisAngle4d$$Type): $AxisAngle4d
public "get"(quaternionf0: $Quaternionf$$Type): $Quaternionf
public "get"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "get"(quaterniond0: $Quaterniond$$Type): $Quaterniond
public "getEulerAnglesXYZ"(vector3d0: $Vector3d$$Type): $Vector3d
public "getEulerAnglesYXZ"(vector3d0: $Vector3d$$Type): $Vector3d
public "getEulerAnglesZXY"(vector3d0: $Vector3d$$Type): $Vector3d
public "getEulerAnglesZYX"(vector3d0: $Vector3d$$Type): $Vector3d
public "identity"(): $Quaterniond
public "integrate"(double0: double, double1: double, double2: double, double3: double, quaterniond4: $Quaterniond$$Type): $Quaterniond
public "integrate"(double0: double, double1: double, double2: double, double3: double): $Quaterniond
public "invert"(quaterniond0: $Quaterniond$$Type): $Quaterniond
public "invert"(): $Quaterniond
public "isFinite"(): boolean
public "lengthSquared"(): double
public "lookAlong"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type): $Quaterniond
public "lookAlong"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, quaterniond6: $Quaterniond$$Type): $Quaterniond
public "lookAlong"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Quaterniond
public "lookAlong"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, quaterniond2: $Quaterniond$$Type): $Quaterniond
public "mul"(double0: double, quaterniond1: $Quaterniond$$Type): $Quaterniond
public "mul"(quaterniondc0: $Quaterniondc$$Type): $Quaterniond
public "mul"(quaterniondc0: $Quaterniondc$$Type, quaterniond1: $Quaterniond$$Type): $Quaterniond
public "mul"(double0: double, double1: double, double2: double, double3: double): $Quaterniond
public "mul"(double0: double, double1: double, double2: double, double3: double, quaterniond4: $Quaterniond$$Type): $Quaterniond
public "mul"(double0: double): $Quaterniond
public "nlerp"(quaterniondc0: $Quaterniondc$$Type, double1: double, quaterniond2: $Quaterniond$$Type): $Quaterniond
public "nlerp"(quaterniondc0: $Quaterniondc$$Type, double1: double): $Quaterniond
public static "nlerp"(quaterniond0s: $Quaterniond$$Type[], double1s: double[], quaterniond2: $Quaterniond$$Type): $Quaterniondc
public static "nlerpIterative"(quaterniondc0s: $Quaterniondc$$Type[], double1s: double[], double2: double, quaterniond3: $Quaterniond$$Type): $Quaterniond
public "nlerpIterative"(quaterniondc0: $Quaterniondc$$Type, double1: double, double2: double, quaterniond3: $Quaterniond$$Type): $Quaterniond
public "nlerpIterative"(quaterniondc0: $Quaterniondc$$Type, double1: double, double2: double): $Quaterniond
public "normalize"(): $Quaterniond
public "normalize"(quaterniond0: $Quaterniond$$Type): $Quaterniond
public "normalizedPositiveX"(vector3d0: $Vector3d$$Type): $Vector3d
public "normalizedPositiveY"(vector3d0: $Vector3d$$Type): $Vector3d
public "normalizedPositiveZ"(vector3d0: $Vector3d$$Type): $Vector3d
public "positiveX"(vector3d0: $Vector3d$$Type): $Vector3d
public "positiveY"(vector3d0: $Vector3d$$Type): $Vector3d
public "positiveZ"(vector3d0: $Vector3d$$Type): $Vector3d
public "premul"(double0: double, double1: double, double2: double, double3: double): $Quaterniond
public "premul"(quaterniondc0: $Quaterniondc$$Type, quaterniond1: $Quaterniond$$Type): $Quaterniond
public "premul"(quaterniondc0: $Quaterniondc$$Type): $Quaterniond
public "premul"(double0: double, double1: double, double2: double, double3: double, quaterniond4: $Quaterniond$$Type): $Quaterniond
public "readExternal"(objectInput0: $ObjectInput$$Type): void
public "rotateAxis"(double0: double, double1: double, double2: double, double3: double, quaterniond4: $Quaterniond$$Type): $Quaterniond
public "rotateAxis"(double0: double, double1: double, double2: double, double3: double): $Quaterniond
public "rotateAxis"(double0: double, vector3dc1: $Vector3dc$$Type): $Quaterniond
public "rotateAxis"(double0: double, vector3dc1: $Vector3dc$$Type, quaterniond2: $Quaterniond$$Type): $Quaterniond
public "rotateLocalX"(double0: double, quaterniond1: $Quaterniond$$Type): $Quaterniond
public "rotateLocalX"(double0: double): $Quaterniond
public "rotateLocalY"(double0: double, quaterniond1: $Quaterniond$$Type): $Quaterniond
public "rotateLocalY"(double0: double): $Quaterniond
public "rotateLocalZ"(double0: double, quaterniond1: $Quaterniond$$Type): $Quaterniond
public "rotateLocalZ"(double0: double): $Quaterniond
public "rotateTo"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Quaterniond
public "rotateTo"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type): $Quaterniond
public "rotateTo"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, quaterniond6: $Quaterniond$$Type): $Quaterniond
public "rotateTo"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, quaterniond2: $Quaterniond$$Type): $Quaterniond
public "rotateX"(double0: double, quaterniond1: $Quaterniond$$Type): $Quaterniond
public "rotateX"(double0: double): $Quaterniond
public "rotateXYZ"(double0: double, double1: double, double2: double): $Quaterniond
public "rotateXYZ"(double0: double, double1: double, double2: double, quaterniond3: $Quaterniond$$Type): $Quaterniond
public "rotateY"(double0: double, quaterniond1: $Quaterniond$$Type): $Quaterniond
public "rotateY"(double0: double): $Quaterniond
public "rotateYXZ"(double0: double, double1: double, double2: double): $Quaterniond
public "rotateYXZ"(double0: double, double1: double, double2: double, quaterniond3: $Quaterniond$$Type): $Quaterniond
public "rotateZ"(double0: double): $Quaterniond
public "rotateZ"(double0: double, quaterniond1: $Quaterniond$$Type): $Quaterniond
public "rotateZYX"(double0: double, double1: double, double2: double): $Quaterniond
public "rotateZYX"(double0: double, double1: double, double2: double, quaterniond3: $Quaterniond$$Type): $Quaterniond
public "rotationAxis"(double0: double, double1: double, double2: double, double3: double): $Quaterniond
public "rotationAxis"(axisAngle4f0: $AxisAngle4f$$Type): $Quaterniond
public "rotationTo"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Quaterniond
public "rotationTo"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type): $Quaterniond
public "rotationX"(double0: double): $Quaterniond
public "rotationXYZ"(double0: double, double1: double, double2: double): $Quaterniond
public "rotationY"(double0: double): $Quaterniond
public "rotationYXZ"(double0: double, double1: double, double2: double): $Quaterniond
public "rotationZ"(double0: double): $Quaterniond
public "rotationZYX"(double0: double, double1: double, double2: double): $Quaterniond
public "scale"(double0: double): $Quaterniond
public "scale"(double0: double, quaterniond1: $Quaterniond$$Type): $Quaterniond
public "scaling"(double0: double): $Quaterniond
public "set"(axisAngle4f0: $AxisAngle4f$$Type): $Quaterniond
public "set"(double0: double, double1: double, double2: double, double3: double): $Quaterniond
public "set"(quaternionfc0: $Quaternionfc$$Type): $Quaterniond
public "set"(quaterniondc0: $Quaterniondc$$Type): $Quaterniond
public "set"(axisAngle4d0: $AxisAngle4d$$Type): $Quaterniond
public "setAngleAxis"(double0: double, double1: double, double2: double, double3: double): $Quaterniond
public "setAngleAxis"(double0: double, vector3dc1: $Vector3dc$$Type): $Quaterniond
public "setFromNormalized"(matrix3fc0: $Matrix3fc$$Type): $Quaterniond
public "setFromNormalized"(matrix3dc0: $Matrix3dc$$Type): $Quaterniond
public "setFromNormalized"(matrix4fc0: $Matrix4fc$$Type): $Quaterniond
public "setFromNormalized"(matrix4x3fc0: $Matrix4x3fc$$Type): $Quaterniond
public "setFromNormalized"(matrix4x3dc0: $Matrix4x3dc$$Type): $Quaterniond
public "setFromNormalized"(matrix4dc0: $Matrix4dc$$Type): $Quaterniond
public "setFromUnnormalized"(matrix4dc0: $Matrix4dc$$Type): $Quaterniond
public "setFromUnnormalized"(matrix4x3dc0: $Matrix4x3dc$$Type): $Quaterniond
public "setFromUnnormalized"(matrix3fc0: $Matrix3fc$$Type): $Quaterniond
public "setFromUnnormalized"(matrix3dc0: $Matrix3dc$$Type): $Quaterniond
public "setFromUnnormalized"(matrix4fc0: $Matrix4fc$$Type): $Quaterniond
public "setFromUnnormalized"(matrix4x3fc0: $Matrix4x3fc$$Type): $Quaterniond
public static "slerp"(quaterniond0s: $Quaterniond$$Type[], double1s: double[], quaterniond2: $Quaterniond$$Type): $Quaterniondc
public "slerp"(quaterniondc0: $Quaterniondc$$Type, double1: double, quaterniond2: $Quaterniond$$Type): $Quaterniond
public "slerp"(quaterniondc0: $Quaterniondc$$Type, double1: double): $Quaterniond
public "toString"(numberFormat0: $NumberFormat$$Type): string
public "transform"(vector4f0: $Vector4f$$Type): $Vector4f
public "transform"(vector3f0: $Vector3f$$Type): $Vector3f
public "transform"(double0: double, double1: double, double2: double, vector4d3: $Vector4d$$Type): $Vector4d
public "transform"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "transform"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
public "transform"(double0: double, double1: double, double2: double, vector3f3: $Vector3f$$Type): $Vector3f
public "transform"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "transform"(vector3d0: $Vector3d$$Type): $Vector3d
public "transform"(double0: double, double1: double, double2: double, vector4f3: $Vector4f$$Type): $Vector4f
public "transform"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "transform"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
public "transform"(vector4d0: $Vector4d$$Type): $Vector4d
public "transformInverse"(vector4f0: $Vector4f$$Type): $Vector4f
public "transformInverse"(vector3d0: $Vector3d$$Type): $Vector3d
public "transformInverse"(vector4d0: $Vector4d$$Type): $Vector4d
public "transformInverse"(double0: double, double1: double, double2: double, vector4d3: $Vector4d$$Type): $Vector4d
public "transformInverse"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "transformInverse"(vector3f0: $Vector3f$$Type): $Vector3f
public "transformInverse"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
public "transformInverse"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "transformInverse"(double0: double, double1: double, double2: double, vector4f3: $Vector4f$$Type): $Vector4f
public "transformInverse"(double0: double, double1: double, double2: double, vector3f3: $Vector3f$$Type): $Vector3f
public "transformInverse"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
public "transformInverse"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "transformInverseUnit"(vector3d0: $Vector3d$$Type): $Vector3d
public "transformInverseUnit"(vector4f0: $Vector4f$$Type): $Vector4f
public "transformInverseUnit"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
public "transformInverseUnit"(double0: double, double1: double, double2: double, vector3f3: $Vector3f$$Type): $Vector3f
public "transformInverseUnit"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "transformInverseUnit"(double0: double, double1: double, double2: double, vector4f3: $Vector4f$$Type): $Vector4f
public "transformInverseUnit"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "transformInverseUnit"(vector4d0: $Vector4d$$Type): $Vector4d
public "transformInverseUnit"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
public "transformInverseUnit"(double0: double, double1: double, double2: double, vector4d3: $Vector4d$$Type): $Vector4d
public "transformInverseUnit"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "transformInverseUnit"(vector3f0: $Vector3f$$Type): $Vector3f
public "transformPositiveX"(vector4f0: $Vector4f$$Type): $Vector4f
public "transformPositiveX"(vector3f0: $Vector3f$$Type): $Vector3f
public "transformPositiveX"(vector3d0: $Vector3d$$Type): $Vector3d
public "transformPositiveX"(vector4d0: $Vector4d$$Type): $Vector4d
public "transformPositiveY"(vector3f0: $Vector3f$$Type): $Vector3f
public "transformPositiveY"(vector3d0: $Vector3d$$Type): $Vector3d
public "transformPositiveY"(vector4f0: $Vector4f$$Type): $Vector4f
public "transformPositiveY"(vector4d0: $Vector4d$$Type): $Vector4d
public "transformPositiveZ"(vector4f0: $Vector4f$$Type): $Vector4f
public "transformPositiveZ"(vector4d0: $Vector4d$$Type): $Vector4d
public "transformPositiveZ"(vector3f0: $Vector3f$$Type): $Vector3f
public "transformPositiveZ"(vector3d0: $Vector3d$$Type): $Vector3d
public "transformUnit"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
public "transformUnit"(double0: double, double1: double, double2: double, vector4f3: $Vector4f$$Type): $Vector4f
public "transformUnit"(vector3f0: $Vector3f$$Type): $Vector3f
public "transformUnit"(double0: double, double1: double, double2: double, vector4d3: $Vector4d$$Type): $Vector4d
public "transformUnit"(double0: double, double1: double, double2: double, vector3f3: $Vector3f$$Type): $Vector3f
public "transformUnit"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "transformUnit"(vector4f0: $Vector4f$$Type): $Vector4f
public "transformUnit"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "transformUnit"(vector3d0: $Vector3d$$Type): $Vector3d
public "transformUnit"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "transformUnit"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
public "transformUnit"(vector4d0: $Vector4d$$Type): $Vector4d
public "transformUnitPositiveX"(vector4d0: $Vector4d$$Type): $Vector4d
public "transformUnitPositiveX"(vector3d0: $Vector3d$$Type): $Vector3d
public "transformUnitPositiveX"(vector4f0: $Vector4f$$Type): $Vector4f
public "transformUnitPositiveX"(vector3f0: $Vector3f$$Type): $Vector3f
public "transformUnitPositiveY"(vector3f0: $Vector3f$$Type): $Vector3f
public "transformUnitPositiveY"(vector4f0: $Vector4f$$Type): $Vector4f
public "transformUnitPositiveY"(vector4d0: $Vector4d$$Type): $Vector4d
public "transformUnitPositiveY"(vector3d0: $Vector3d$$Type): $Vector3d
public "transformUnitPositiveZ"(vector4f0: $Vector4f$$Type): $Vector4f
public "transformUnitPositiveZ"(vector3f0: $Vector3f$$Type): $Vector3f
public "transformUnitPositiveZ"(vector3d0: $Vector3d$$Type): $Vector3d
public "transformUnitPositiveZ"(vector4d0: $Vector4d$$Type): $Vector4d
public "w"(): double
public "writeExternal"(objectOutput0: $ObjectOutput$$Type): void
public "x"(): double
public "y"(): double
public "z"(): double
get "finite"(): boolean
set "fromNormalized"(value: $Matrix3fc$$Type)
set "fromNormalized"(value: $Matrix3dc$$Type)
set "fromNormalized"(value: $Matrix4fc$$Type)
set "fromNormalized"(value: $Matrix4x3fc$$Type)
set "fromNormalized"(value: $Matrix4x3dc$$Type)
set "fromNormalized"(value: $Matrix4dc$$Type)
set "fromUnnormalized"(value: $Matrix4dc$$Type)
set "fromUnnormalized"(value: $Matrix4x3dc$$Type)
set "fromUnnormalized"(value: $Matrix3fc$$Type)
set "fromUnnormalized"(value: $Matrix3dc$$Type)
set "fromUnnormalized"(value: $Matrix4fc$$Type)
set "fromUnnormalized"(value: $Matrix4x3fc$$Type)
}
}

declare module "org.joml.Matrix2dc" {
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Matrix2fc$$Type } from "org.joml.Matrix2fc"
import { $DoubleBuffer, $DoubleBuffer$$Type } from "java.nio.DoubleBuffer"
import { $Vector2dc$$Type } from "org.joml.Vector2dc"
import { $Matrix3x2d, $Matrix3x2d$$Type } from "org.joml.Matrix3x2d"
import { $Vector2d, $Vector2d$$Type } from "org.joml.Vector2d"
import { $Matrix3d, $Matrix3d$$Type } from "org.joml.Matrix3d"
import { $Matrix2d, $Matrix2d$$Type } from "org.joml.Matrix2d"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export interface $Matrix2dc {
"add"(matrix2dc0: $Matrix2dc$$Type, matrix2d1: $Matrix2d$$Type): $Matrix2d
"determinant"(): double
"equals"(matrix2dc0: $Matrix2dc$$Type, double1: double): boolean
"get"(int0: integer, int1: integer): double
"get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"get"(matrix3x2d0: $Matrix3x2d$$Type): $Matrix3x2d
"get"(double0s: double[], int1: integer): double[]
"get"(double0s: double[]): double[]
"get"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
"get"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
"get"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"get"(matrix2d0: $Matrix2d$$Type): $Matrix2d
"getColumn"(int0: integer, vector2d1: $Vector2d$$Type): $Vector2d
"getFloats"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"getFloats"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"getRotation"(): double
"getRow"(int0: integer, vector2d1: $Vector2d$$Type): $Vector2d
"getScale"(vector2d0: $Vector2d$$Type): $Vector2d
"getToAddress"(long0: long): $Matrix2dc
"getTransposed"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"getTransposed"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
"getTransposed"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
"getTransposed"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"getTransposed"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"getTransposed"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"getTransposedFloats"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"getTransposedFloats"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"invert"(matrix2d0: $Matrix2d$$Type): $Matrix2d
"isFinite"(): boolean
"lerp"(matrix2dc0: $Matrix2dc$$Type, double1: double, matrix2d2: $Matrix2d$$Type): $Matrix2d
"m00"(): double
"m01"(): double
"m10"(): double
"m11"(): double
"mul"(matrix2fc0: $Matrix2fc$$Type, matrix2d1: $Matrix2d$$Type): $Matrix2d
"mul"(matrix2dc0: $Matrix2dc$$Type, matrix2d1: $Matrix2d$$Type): $Matrix2d
"mulComponentWise"(matrix2dc0: $Matrix2dc$$Type, matrix2d1: $Matrix2d$$Type): $Matrix2d
"mulLocal"(matrix2dc0: $Matrix2dc$$Type, matrix2d1: $Matrix2d$$Type): $Matrix2d
"normal"(matrix2d0: $Matrix2d$$Type): $Matrix2d
"normalizedPositiveX"(vector2d0: $Vector2d$$Type): $Vector2d
"normalizedPositiveY"(vector2d0: $Vector2d$$Type): $Vector2d
"positiveX"(vector2d0: $Vector2d$$Type): $Vector2d
"positiveY"(vector2d0: $Vector2d$$Type): $Vector2d
"rotate"(double0: double, matrix2d1: $Matrix2d$$Type): $Matrix2d
"rotateLocal"(double0: double, matrix2d1: $Matrix2d$$Type): $Matrix2d
"scale"(vector2dc0: $Vector2dc$$Type, matrix2d1: $Matrix2d$$Type): $Matrix2d
"scale"(double0: double, double1: double, matrix2d2: $Matrix2d$$Type): $Matrix2d
"scale"(double0: double, matrix2d1: $Matrix2d$$Type): $Matrix2d
"scaleLocal"(double0: double, double1: double, matrix2d2: $Matrix2d$$Type): $Matrix2d
"sub"(matrix2dc0: $Matrix2dc$$Type, matrix2d1: $Matrix2d$$Type): $Matrix2d
"transform"(vector2dc0: $Vector2dc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
"transform"(vector2d0: $Vector2d$$Type): $Vector2d
"transform"(double0: double, double1: double, vector2d2: $Vector2d$$Type): $Vector2d
"transformTranspose"(vector2dc0: $Vector2dc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
"transformTranspose"(double0: double, double1: double, vector2d2: $Vector2d$$Type): $Vector2d
"transformTranspose"(vector2d0: $Vector2d$$Type): $Vector2d
"transpose"(matrix2d0: $Matrix2d$$Type): $Matrix2d
get "rotation"(): double
get "finite"(): boolean
}

export namespace $Matrix2dc {
const probejs$$marker: never
}
export abstract class $Matrix2dc$$Static implements $Matrix2dc {
}
}

declare module "org.joml.Matrix2fc" {
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Vector2fc$$Type } from "org.joml.Vector2fc"
import { $Vector2f, $Vector2f$$Type } from "org.joml.Vector2f"
import { $Matrix3f, $Matrix3f$$Type } from "org.joml.Matrix3f"
import { $Matrix2f, $Matrix2f$$Type } from "org.joml.Matrix2f"
import { $Matrix3x2f, $Matrix3x2f$$Type } from "org.joml.Matrix3x2f"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export interface $Matrix2fc {
"add"(matrix2fc0: $Matrix2fc$$Type, matrix2f1: $Matrix2f$$Type): $Matrix2f
"determinant"(): float
"equals"(matrix2fc0: $Matrix2fc$$Type, float1: float): boolean
"get"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"get"(float0s: float[], int1: integer): float[]
"get"(matrix2f0: $Matrix2f$$Type): $Matrix2f
"get"(matrix3x2f0: $Matrix3x2f$$Type): $Matrix3x2f
"get"(int0: integer, int1: integer): float
"get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"get"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"get"(float0s: float[]): float[]
"get"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"getColumn"(int0: integer, vector2f1: $Vector2f$$Type): $Vector2f
"getRotation"(): float
"getRow"(int0: integer, vector2f1: $Vector2f$$Type): $Vector2f
"getScale"(vector2f0: $Vector2f$$Type): $Vector2f
"getToAddress"(long0: long): $Matrix2fc
"getTransposed"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"getTransposed"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"getTransposed"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"getTransposed"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"invert"(matrix2f0: $Matrix2f$$Type): $Matrix2f
"isFinite"(): boolean
"lerp"(matrix2fc0: $Matrix2fc$$Type, float1: float, matrix2f2: $Matrix2f$$Type): $Matrix2f
"m00"(): float
"m01"(): float
"m10"(): float
"m11"(): float
"mul"(matrix2fc0: $Matrix2fc$$Type, matrix2f1: $Matrix2f$$Type): $Matrix2f
"mulComponentWise"(matrix2fc0: $Matrix2fc$$Type, matrix2f1: $Matrix2f$$Type): $Matrix2f
"mulLocal"(matrix2fc0: $Matrix2fc$$Type, matrix2f1: $Matrix2f$$Type): $Matrix2f
"normal"(matrix2f0: $Matrix2f$$Type): $Matrix2f
"normalizedPositiveX"(vector2f0: $Vector2f$$Type): $Vector2f
"normalizedPositiveY"(vector2f0: $Vector2f$$Type): $Vector2f
"positiveX"(vector2f0: $Vector2f$$Type): $Vector2f
"positiveY"(vector2f0: $Vector2f$$Type): $Vector2f
"rotate"(float0: float, matrix2f1: $Matrix2f$$Type): $Matrix2f
"rotateLocal"(float0: float, matrix2f1: $Matrix2f$$Type): $Matrix2f
"scale"(float0: float, float1: float, matrix2f2: $Matrix2f$$Type): $Matrix2f
"scale"(vector2fc0: $Vector2fc$$Type, matrix2f1: $Matrix2f$$Type): $Matrix2f
"scale"(float0: float, matrix2f1: $Matrix2f$$Type): $Matrix2f
"scaleLocal"(float0: float, float1: float, matrix2f2: $Matrix2f$$Type): $Matrix2f
"sub"(matrix2fc0: $Matrix2fc$$Type, matrix2f1: $Matrix2f$$Type): $Matrix2f
"transform"(float0: float, float1: float, vector2f2: $Vector2f$$Type): $Vector2f
"transform"(vector2f0: $Vector2f$$Type): $Vector2f
"transform"(vector2fc0: $Vector2fc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
"transformTranspose"(vector2f0: $Vector2f$$Type): $Vector2f
"transformTranspose"(vector2fc0: $Vector2fc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
"transformTranspose"(float0: float, float1: float, vector2f2: $Vector2f$$Type): $Vector2f
"transpose"(matrix2f0: $Matrix2f$$Type): $Matrix2f
get "rotation"(): float
get "finite"(): boolean
}

export namespace $Matrix2fc {
const probejs$$marker: never
}
export abstract class $Matrix2fc$$Static implements $Matrix2fc {
}
}

declare module "org.joml.Matrix4x3fc" {
import { $Matrix4x3d, $Matrix4x3d$$Type } from "org.joml.Matrix4x3d"
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Quaternionf, $Quaternionf$$Type } from "org.joml.Quaternionf"
import { $Quaterniond, $Quaterniond$$Type } from "org.joml.Quaterniond"
import { $AxisAngle4f, $AxisAngle4f$$Type } from "org.joml.AxisAngle4f"
import { $Matrix4x3f, $Matrix4x3f$$Type } from "org.joml.Matrix4x3f"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $AxisAngle4d, $AxisAngle4d$$Type } from "org.joml.AxisAngle4d"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $Vector4fc$$Type } from "org.joml.Vector4fc"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Matrix3f, $Matrix3f$$Type } from "org.joml.Matrix3f"
import { $Vector4f, $Vector4f$$Type } from "org.joml.Vector4f"
import { $Matrix4f, $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $Matrix4d, $Matrix4d$$Type } from "org.joml.Matrix4d"
import { $Quaternionfc$$Type } from "org.joml.Quaternionfc"

export interface $Matrix4x3fc {
"add"(matrix4x3fc0: $Matrix4x3fc$$Type, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
"arcball"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4x3f6: $Matrix4x3f$$Type): $Matrix4x3f
"arcball"(float0: float, vector3fc1: $Vector3fc$$Type, float2: float, float3: float, matrix4x3f4: $Matrix4x3f$$Type): $Matrix4x3f
"cofactor3x3"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"cofactor3x3"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"determinant"(): float
"equals"(matrix4x3fc0: $Matrix4x3fc$$Type, float1: float): boolean
"fma"(matrix4x3fc0: $Matrix4x3fc$$Type, float1: float, matrix4x3f2: $Matrix4x3f$$Type): $Matrix4x3f
"frustumPlane"(int0: integer, vector4f1: $Vector4f$$Type): $Vector4f
"get"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"get"(float0s: float[]): float[]
"get"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"get"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"get"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"get"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"get"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"get"(float0s: float[], int1: integer): float[]
"get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"get3x4"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"get3x4"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"get3x4"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"get3x4"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"get4x4"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"get4x4"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"get4x4"(float0s: float[], int1: integer): float[]
"get4x4"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"get4x4"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"get4x4"(float0s: float[]): float[]
"getColumn"(int0: integer, vector3f1: $Vector3f$$Type): $Vector3f
"getEulerAnglesXYZ"(vector3f0: $Vector3f$$Type): $Vector3f
"getEulerAnglesZYX"(vector3f0: $Vector3f$$Type): $Vector3f
"getNormalizedRotation"(quaterniond0: $Quaterniond$$Type): $Quaterniond
"getNormalizedRotation"(quaternionf0: $Quaternionf$$Type): $Quaternionf
"getRotation"(axisAngle4f0: $AxisAngle4f$$Type): $AxisAngle4f
"getRotation"(axisAngle4d0: $AxisAngle4d$$Type): $AxisAngle4d
"getRow"(int0: integer, vector4f1: $Vector4f$$Type): $Vector4f
"getScale"(vector3f0: $Vector3f$$Type): $Vector3f
"getToAddress"(long0: long): $Matrix4x3fc
"getTranslation"(vector3f0: $Vector3f$$Type): $Vector3f
"getTransposed"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"getTransposed"(float0s: float[]): float[]
"getTransposed"(float0s: float[], int1: integer): float[]
"getTransposed"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"getTransposed"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"getTransposed"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"getUnnormalizedRotation"(quaternionf0: $Quaternionf$$Type): $Quaternionf
"getUnnormalizedRotation"(quaterniond0: $Quaterniond$$Type): $Quaterniond
"invert"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"invert"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"invertOrtho"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"isFinite"(): boolean
"lerp"(matrix4x3fc0: $Matrix4x3fc$$Type, float1: float, matrix4x3f2: $Matrix4x3f$$Type): $Matrix4x3f
"lookAlong"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, matrix4x3f2: $Matrix4x3f$$Type): $Matrix4x3f
"lookAlong"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4x3f6: $Matrix4x3f$$Type): $Matrix4x3f
"lookAt"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, matrix4x3f9: $Matrix4x3f$$Type): $Matrix4x3f
"lookAt"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3fc2: $Vector3fc$$Type, matrix4x3f3: $Matrix4x3f$$Type): $Matrix4x3f
"lookAtLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, matrix4x3f9: $Matrix4x3f$$Type): $Matrix4x3f
"lookAtLH"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3fc2: $Vector3fc$$Type, matrix4x3f3: $Matrix4x3f$$Type): $Matrix4x3f
"m00"(): float
"m01"(): float
"m02"(): float
"m10"(): float
"m11"(): float
"m12"(): float
"m20"(): float
"m21"(): float
"m22"(): float
"m30"(): float
"m31"(): float
"m32"(): float
"mapXZY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapXZnY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapXnYnZ"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapXnZY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapXnZnY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapYXZ"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapYXnZ"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapYZX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapYZnX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapYnXZ"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapYnXnZ"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapYnZX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapYnZnX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapZXY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapZXnY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapZYX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapZYnX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapZnXY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapZnXnY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapZnYX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapZnYnX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapnXYnZ"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapnXZY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapnXZnY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapnXnYZ"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapnXnYnZ"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapnXnZY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapnXnZnY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapnYXZ"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapnYXnZ"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapnYZX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapnYZnX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapnYnXZ"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapnYnXnZ"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapnYnZX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapnYnZnX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapnZXY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapnZXnY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapnZYX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapnZYnX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapnZnXY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapnZnXnY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapnZnYX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mapnZnYnX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"mul"(matrix4x3fc0: $Matrix4x3fc$$Type, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
"mul3x3"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, matrix4x3f9: $Matrix4x3f$$Type): $Matrix4x3f
"mulComponentWise"(matrix4x3fc0: $Matrix4x3fc$$Type, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
"mulOrtho"(matrix4x3fc0: $Matrix4x3fc$$Type, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
"mulTranslation"(matrix4x3fc0: $Matrix4x3fc$$Type, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
"negateX"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"negateY"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"negateZ"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"normal"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"normal"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"normalize3x3"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"normalize3x3"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"normalizedPositiveX"(vector3f0: $Vector3f$$Type): $Vector3f
"normalizedPositiveY"(vector3f0: $Vector3f$$Type): $Vector3f
"normalizedPositiveZ"(vector3f0: $Vector3f$$Type): $Vector3f
"obliqueZ"(float0: float, float1: float, matrix4x3f2: $Matrix4x3f$$Type): $Matrix4x3f
"origin"(vector3f0: $Vector3f$$Type): $Vector3f
"ortho"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean, matrix4x3f7: $Matrix4x3f$$Type): $Matrix4x3f
"ortho"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4x3f6: $Matrix4x3f$$Type): $Matrix4x3f
"ortho2D"(float0: float, float1: float, float2: float, float3: float, matrix4x3f4: $Matrix4x3f$$Type): $Matrix4x3f
"ortho2DLH"(float0: float, float1: float, float2: float, float3: float, matrix4x3f4: $Matrix4x3f$$Type): $Matrix4x3f
"orthoLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4x3f6: $Matrix4x3f$$Type): $Matrix4x3f
"orthoLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean, matrix4x3f7: $Matrix4x3f$$Type): $Matrix4x3f
"orthoSymmetric"(float0: float, float1: float, float2: float, float3: float, boolean4: boolean, matrix4x3f5: $Matrix4x3f$$Type): $Matrix4x3f
"orthoSymmetric"(float0: float, float1: float, float2: float, float3: float, matrix4x3f4: $Matrix4x3f$$Type): $Matrix4x3f
"orthoSymmetricLH"(float0: float, float1: float, float2: float, float3: float, boolean4: boolean, matrix4x3f5: $Matrix4x3f$$Type): $Matrix4x3f
"orthoSymmetricLH"(float0: float, float1: float, float2: float, float3: float, matrix4x3f4: $Matrix4x3f$$Type): $Matrix4x3f
"pick"(float0: float, float1: float, float2: float, float3: float, int4s: integer[], matrix4x3f5: $Matrix4x3f$$Type): $Matrix4x3f
"positiveX"(vector3f0: $Vector3f$$Type): $Vector3f
"positiveY"(vector3f0: $Vector3f$$Type): $Vector3f
"positiveZ"(vector3f0: $Vector3f$$Type): $Vector3f
"properties"(): integer
"reflect"(quaternionfc0: $Quaternionfc$$Type, vector3fc1: $Vector3fc$$Type, matrix4x3f2: $Matrix4x3f$$Type): $Matrix4x3f
"reflect"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, matrix4x3f2: $Matrix4x3f$$Type): $Matrix4x3f
"reflect"(float0: float, float1: float, float2: float, float3: float, matrix4x3f4: $Matrix4x3f$$Type): $Matrix4x3f
"reflect"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4x3f6: $Matrix4x3f$$Type): $Matrix4x3f
"rotate"(axisAngle4f0: $AxisAngle4f$$Type, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
"rotate"(float0: float, vector3fc1: $Vector3fc$$Type, matrix4x3f2: $Matrix4x3f$$Type): $Matrix4x3f
"rotate"(quaternionfc0: $Quaternionfc$$Type, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
"rotate"(float0: float, float1: float, float2: float, float3: float, matrix4x3f4: $Matrix4x3f$$Type): $Matrix4x3f
"rotateAround"(quaternionfc0: $Quaternionfc$$Type, float1: float, float2: float, float3: float, matrix4x3f4: $Matrix4x3f$$Type): $Matrix4x3f
"rotateLocal"(quaternionfc0: $Quaternionfc$$Type, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
"rotateLocal"(float0: float, float1: float, float2: float, float3: float, matrix4x3f4: $Matrix4x3f$$Type): $Matrix4x3f
"rotateTowards"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, matrix4x3f2: $Matrix4x3f$$Type): $Matrix4x3f
"rotateTowards"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4x3f6: $Matrix4x3f$$Type): $Matrix4x3f
"rotateTranslation"(quaternionfc0: $Quaternionfc$$Type, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
"rotateTranslation"(float0: float, float1: float, float2: float, float3: float, matrix4x3f4: $Matrix4x3f$$Type): $Matrix4x3f
"rotateX"(float0: float, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
"rotateXYZ"(float0: float, float1: float, float2: float, matrix4x3f3: $Matrix4x3f$$Type): $Matrix4x3f
"rotateY"(float0: float, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
"rotateYXZ"(float0: float, float1: float, float2: float, matrix4x3f3: $Matrix4x3f$$Type): $Matrix4x3f
"rotateZ"(float0: float, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
"rotateZYX"(float0: float, float1: float, float2: float, matrix4x3f3: $Matrix4x3f$$Type): $Matrix4x3f
"scale"(float0: float, float1: float, float2: float, matrix4x3f3: $Matrix4x3f$$Type): $Matrix4x3f
"scale"(float0: float, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
"scale"(vector3fc0: $Vector3fc$$Type, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
"scaleAround"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4x3f6: $Matrix4x3f$$Type): $Matrix4x3f
"scaleAround"(float0: float, float1: float, float2: float, float3: float, matrix4x3f4: $Matrix4x3f$$Type): $Matrix4x3f
"scaleLocal"(float0: float, float1: float, float2: float, matrix4x3f3: $Matrix4x3f$$Type): $Matrix4x3f
"scaleXY"(float0: float, float1: float, matrix4x3f2: $Matrix4x3f$$Type): $Matrix4x3f
"shadow"(vector4fc0: $Vector4fc$$Type, float1: float, float2: float, float3: float, float4: float, matrix4x3f5: $Matrix4x3f$$Type): $Matrix4x3f
"shadow"(vector4fc0: $Vector4fc$$Type, matrix4x3fc1: $Matrix4x3fc$$Type, matrix4x3f2: $Matrix4x3f$$Type): $Matrix4x3f
"shadow"(float0: float, float1: float, float2: float, float3: float, matrix4x3fc4: $Matrix4x3fc$$Type, matrix4x3f5: $Matrix4x3f$$Type): $Matrix4x3f
"shadow"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, matrix4x3f8: $Matrix4x3f$$Type): $Matrix4x3f
"sub"(matrix4x3fc0: $Matrix4x3fc$$Type, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
"transform"(vector4f0: $Vector4f$$Type): $Vector4f
"transform"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
"transformAab"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, vector3f6: $Vector3f$$Type, vector3f7: $Vector3f$$Type): $Matrix4x3f
"transformAab"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3f2: $Vector3f$$Type, vector3f3: $Vector3f$$Type): $Matrix4x3f
"transformDirection"(vector3f0: $Vector3f$$Type): $Vector3f
"transformDirection"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"transformPosition"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"transformPosition"(vector3f0: $Vector3f$$Type): $Vector3f
"translate"(float0: float, float1: float, float2: float, matrix4x3f3: $Matrix4x3f$$Type): $Matrix4x3f
"translate"(vector3fc0: $Vector3fc$$Type, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
"translateLocal"(float0: float, float1: float, float2: float, matrix4x3f3: $Matrix4x3f$$Type): $Matrix4x3f
"translateLocal"(vector3fc0: $Vector3fc$$Type, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
"transpose3x3"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"transpose3x3"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"withLookAtUp"(float0: float, float1: float, float2: float, matrix4x3f3: $Matrix4x3f$$Type): $Matrix4x3f
"withLookAtUp"(vector3fc0: $Vector3fc$$Type, matrix4x3f1: $Matrix4x3f$$Type): $Matrix4x3f
get "finite"(): boolean
}

export namespace $Matrix4x3fc {
const PLANE_NX: integer
const PLANE_NY: integer
const PLANE_NZ: integer
const PLANE_PX: integer
const PLANE_PY: integer
const PLANE_PZ: integer
const PROPERTY_IDENTITY: byte
const PROPERTY_ORTHONORMAL: byte
const PROPERTY_TRANSLATION: byte
}
export abstract class $Matrix4x3fc$$Static implements $Matrix4x3fc {
static readonly "PLANE_NX": integer
static readonly "PLANE_NY": integer
static readonly "PLANE_NZ": integer
static readonly "PLANE_PX": integer
static readonly "PLANE_PY": integer
static readonly "PLANE_PZ": integer
static readonly "PROPERTY_IDENTITY": byte
static readonly "PROPERTY_ORTHONORMAL": byte
static readonly "PROPERTY_TRANSLATION": byte

}
}

declare module "org.joml.Matrix3dc" {
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Quaternionf, $Quaternionf$$Type } from "org.joml.Quaternionf"
import { $DoubleBuffer, $DoubleBuffer$$Type } from "java.nio.DoubleBuffer"
import { $Quaterniond, $Quaterniond$$Type } from "org.joml.Quaterniond"
import { $AxisAngle4f, $AxisAngle4f$$Type } from "org.joml.AxisAngle4f"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $AxisAngle4d$$Type } from "org.joml.AxisAngle4d"
import { $Matrix3fc$$Type } from "org.joml.Matrix3fc"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $Vector3dc$$Type } from "org.joml.Vector3dc"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Quaterniondc$$Type } from "org.joml.Quaterniondc"
import { $Vector3d, $Vector3d$$Type } from "org.joml.Vector3d"
import { $Matrix3d, $Matrix3d$$Type } from "org.joml.Matrix3d"
import { $Quaternionfc$$Type } from "org.joml.Quaternionfc"

export interface $Matrix3dc {
"add"(matrix3dc0: $Matrix3dc$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
"cofactor"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"determinant"(): double
"equals"(matrix3dc0: $Matrix3dc$$Type, double1: double): boolean
"get"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"get"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"get"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"get"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
"get"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
"get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"get"(int0: integer, int1: integer): double
"get"(float0s: float[]): float[]
"get"(float0s: float[], int1: integer): float[]
"get"(double0s: double[]): double[]
"get"(double0s: double[], int1: integer): double[]
"getColumn"(int0: integer, vector3d1: $Vector3d$$Type): $Vector3d
"getEulerAnglesXYZ"(vector3d0: $Vector3d$$Type): $Vector3d
"getEulerAnglesZYX"(vector3d0: $Vector3d$$Type): $Vector3d
"getFloats"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"getFloats"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"getNormalizedRotation"(quaternionf0: $Quaternionf$$Type): $Quaternionf
"getNormalizedRotation"(quaterniond0: $Quaterniond$$Type): $Quaterniond
"getRotation"(axisAngle4f0: $AxisAngle4f$$Type): $AxisAngle4f
"getRow"(int0: integer, vector3d1: $Vector3d$$Type): $Vector3d
"getRowColumn"(int0: integer, int1: integer): double
"getScale"(vector3d0: $Vector3d$$Type): $Vector3d
"getToAddress"(long0: long): $Matrix3dc
"getTransposed"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
"getTransposed"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"getTransposed"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"getTransposed"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
"getTransposed"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"getTransposed"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"getTransposedFloats"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"getTransposedFloats"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"getUnnormalizedRotation"(quaternionf0: $Quaternionf$$Type): $Quaternionf
"getUnnormalizedRotation"(quaterniond0: $Quaterniond$$Type): $Quaterniond
"invert"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"isFinite"(): boolean
"lerp"(matrix3dc0: $Matrix3dc$$Type, double1: double, matrix3d2: $Matrix3d$$Type): $Matrix3d
"lookAlong"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, matrix3d2: $Matrix3d$$Type): $Matrix3d
"lookAlong"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix3d6: $Matrix3d$$Type): $Matrix3d
"m00"(): double
"m01"(): double
"m02"(): double
"m10"(): double
"m11"(): double
"m12"(): double
"m20"(): double
"m21"(): double
"m22"(): double
"mapXZY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapXZnY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapXnYnZ"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapXnZY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapXnZnY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapYXZ"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapYXnZ"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapYZX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapYZnX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapYnXZ"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapYnXnZ"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapYnZX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapYnZnX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapZXY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapZXnY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapZYX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapZYnX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapZnXY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapZnXnY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapZnYX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapZnYnX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapnXYnZ"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapnXZY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapnXZnY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapnXnYZ"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapnXnYnZ"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapnXnZY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapnXnZnY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapnYXZ"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapnYXnZ"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapnYZX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapnYZnX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapnYnXZ"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapnYnXnZ"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapnYnZX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapnYnZnX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapnZXY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapnZXnY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapnZYX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapnZYnX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapnZnXY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapnZnXnY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapnZnYX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mapnZnYnX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"mul"(matrix3dc0: $Matrix3dc$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
"mul"(matrix3fc0: $Matrix3fc$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
"mulComponentWise"(matrix3dc0: $Matrix3dc$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
"mulLocal"(matrix3dc0: $Matrix3dc$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
"negateX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"negateY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"negateZ"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"normal"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"normalizedPositiveX"(vector3d0: $Vector3d$$Type): $Vector3d
"normalizedPositiveY"(vector3d0: $Vector3d$$Type): $Vector3d
"normalizedPositiveZ"(vector3d0: $Vector3d$$Type): $Vector3d
"obliqueZ"(double0: double, double1: double, matrix3d2: $Matrix3d$$Type): $Matrix3d
"positiveX"(vector3d0: $Vector3d$$Type): $Vector3d
"positiveY"(vector3d0: $Vector3d$$Type): $Vector3d
"positiveZ"(vector3d0: $Vector3d$$Type): $Vector3d
"quadraticFormProduct"(double0: double, double1: double, double2: double): double
"quadraticFormProduct"(vector3dc0: $Vector3dc$$Type): double
"quadraticFormProduct"(vector3fc0: $Vector3fc$$Type): double
"reflect"(vector3dc0: $Vector3dc$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
"reflect"(quaterniondc0: $Quaterniondc$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
"reflect"(double0: double, double1: double, double2: double, matrix3d3: $Matrix3d$$Type): $Matrix3d
"rotate"(quaternionfc0: $Quaternionfc$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
"rotate"(axisAngle4f0: $AxisAngle4f$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
"rotate"(double0: double, vector3dc1: $Vector3dc$$Type, matrix3d2: $Matrix3d$$Type): $Matrix3d
"rotate"(double0: double, vector3fc1: $Vector3fc$$Type, matrix3d2: $Matrix3d$$Type): $Matrix3d
"rotate"(double0: double, double1: double, double2: double, double3: double, matrix3d4: $Matrix3d$$Type): $Matrix3d
"rotate"(quaterniondc0: $Quaterniondc$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
"rotate"(axisAngle4d0: $AxisAngle4d$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
"rotateLocal"(double0: double, double1: double, double2: double, double3: double, matrix3d4: $Matrix3d$$Type): $Matrix3d
"rotateLocal"(quaternionfc0: $Quaternionfc$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
"rotateLocal"(quaterniondc0: $Quaterniondc$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
"rotateLocalX"(double0: double, matrix3d1: $Matrix3d$$Type): $Matrix3d
"rotateLocalY"(double0: double, matrix3d1: $Matrix3d$$Type): $Matrix3d
"rotateLocalZ"(double0: double, matrix3d1: $Matrix3d$$Type): $Matrix3d
"rotateTowards"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, matrix3d2: $Matrix3d$$Type): $Matrix3d
"rotateTowards"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix3d6: $Matrix3d$$Type): $Matrix3d
"rotateX"(double0: double, matrix3d1: $Matrix3d$$Type): $Matrix3d
"rotateXYZ"(double0: double, double1: double, double2: double, matrix3d3: $Matrix3d$$Type): $Matrix3d
"rotateY"(double0: double, matrix3d1: $Matrix3d$$Type): $Matrix3d
"rotateYXZ"(double0: double, double1: double, double2: double, matrix3d3: $Matrix3d$$Type): $Matrix3d
"rotateZ"(double0: double, matrix3d1: $Matrix3d$$Type): $Matrix3d
"rotateZYX"(double0: double, double1: double, double2: double, matrix3d3: $Matrix3d$$Type): $Matrix3d
"scale"(vector3dc0: $Vector3dc$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
"scale"(double0: double, matrix3d1: $Matrix3d$$Type): $Matrix3d
"scale"(double0: double, double1: double, double2: double, matrix3d3: $Matrix3d$$Type): $Matrix3d
"scaleLocal"(double0: double, double1: double, double2: double, matrix3d3: $Matrix3d$$Type): $Matrix3d
"sub"(matrix3dc0: $Matrix3dc$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
"transform"(vector3d0: $Vector3d$$Type): $Vector3d
"transform"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"transform"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"transform"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
"transform"(vector3f0: $Vector3f$$Type): $Vector3f
"transformTranspose"(vector3d0: $Vector3d$$Type): $Vector3d
"transformTranspose"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
"transformTranspose"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"transpose"(matrix3d0: $Matrix3d$$Type): $Matrix3d
get "finite"(): boolean
}

export namespace $Matrix3dc {
const probejs$$marker: never
}
export abstract class $Matrix3dc$$Static implements $Matrix3dc {
}
}

declare module "org.joml.Matrix4x3dc" {
import { $Matrix4x3d, $Matrix4x3d$$Type } from "org.joml.Matrix4x3d"
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Quaternionf, $Quaternionf$$Type } from "org.joml.Quaternionf"
import { $DoubleBuffer, $DoubleBuffer$$Type } from "java.nio.DoubleBuffer"
import { $Quaterniond, $Quaterniond$$Type } from "org.joml.Quaterniond"
import { $AxisAngle4f$$Type } from "org.joml.AxisAngle4f"
import { $Vector4dc$$Type } from "org.joml.Vector4dc"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $AxisAngle4d$$Type } from "org.joml.AxisAngle4d"
import { $Matrix4x3fc$$Type } from "org.joml.Matrix4x3fc"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $Vector3dc$$Type } from "org.joml.Vector3dc"
import { $Quaterniondc$$Type } from "org.joml.Quaterniondc"
import { $Vector3d, $Vector3d$$Type } from "org.joml.Vector3d"
import { $Matrix3d, $Matrix3d$$Type } from "org.joml.Matrix3d"
import { $Vector4d, $Vector4d$$Type } from "org.joml.Vector4d"
import { $Matrix4d, $Matrix4d$$Type } from "org.joml.Matrix4d"
import { $Quaternionfc$$Type } from "org.joml.Quaternionfc"

export interface $Matrix4x3dc {
"add"(matrix4x3fc0: $Matrix4x3fc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
"add"(matrix4x3dc0: $Matrix4x3dc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
"arcball"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4x3d6: $Matrix4x3d$$Type): $Matrix4x3d
"arcball"(double0: double, vector3dc1: $Vector3dc$$Type, double2: double, double3: double, matrix4x3d4: $Matrix4x3d$$Type): $Matrix4x3d
"cofactor3x3"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"cofactor3x3"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"determinant"(): double
"equals"(matrix4x3dc0: $Matrix4x3dc$$Type, double1: double): boolean
"fma"(matrix4x3dc0: $Matrix4x3dc$$Type, double1: double, matrix4x3d2: $Matrix4x3d$$Type): $Matrix4x3d
"fma"(matrix4x3fc0: $Matrix4x3fc$$Type, double1: double, matrix4x3d2: $Matrix4x3d$$Type): $Matrix4x3d
"frustumPlane"(int0: integer, vector4d1: $Vector4d$$Type): $Vector4d
"get"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"get"(double0s: double[], int1: integer): double[]
"get"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"get"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
"get"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
"get"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"get"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"get"(float0s: float[]): float[]
"get"(double0s: double[]): double[]
"get"(float0s: float[], int1: integer): float[]
"get4x4"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"get4x4"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"get4x4"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
"get4x4"(float0s: float[], int1: integer): float[]
"get4x4"(float0s: float[]): float[]
"get4x4"(double0s: double[]): double[]
"get4x4"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
"get4x4"(double0s: double[], int1: integer): double[]
"getColumn"(int0: integer, vector3d1: $Vector3d$$Type): $Vector3d
"getEulerAnglesXYZ"(vector3d0: $Vector3d$$Type): $Vector3d
"getEulerAnglesZYX"(vector3d0: $Vector3d$$Type): $Vector3d
"getFloats"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"getFloats"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"getNormalizedRotation"(quaterniond0: $Quaterniond$$Type): $Quaterniond
"getNormalizedRotation"(quaternionf0: $Quaternionf$$Type): $Quaternionf
"getRow"(int0: integer, vector4d1: $Vector4d$$Type): $Vector4d
"getScale"(vector3d0: $Vector3d$$Type): $Vector3d
"getToAddress"(long0: long): $Matrix4x3dc
"getTranslation"(vector3d0: $Vector3d$$Type): $Vector3d
"getTransposed"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
"getTransposed"(double0s: double[]): double[]
"getTransposed"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"getTransposed"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
"getTransposed"(double0s: double[], int1: integer): double[]
"getTransposed"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"getTransposed"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"getTransposed"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"getTransposedFloats"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"getTransposedFloats"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"getUnnormalizedRotation"(quaterniond0: $Quaterniond$$Type): $Quaterniond
"getUnnormalizedRotation"(quaternionf0: $Quaternionf$$Type): $Quaternionf
"invert"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"invertOrtho"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"isFinite"(): boolean
"lerp"(matrix4x3dc0: $Matrix4x3dc$$Type, double1: double, matrix4x3d2: $Matrix4x3d$$Type): $Matrix4x3d
"lookAlong"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4x3d6: $Matrix4x3d$$Type): $Matrix4x3d
"lookAlong"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, matrix4x3d2: $Matrix4x3d$$Type): $Matrix4x3d
"lookAt"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double, matrix4x3d9: $Matrix4x3d$$Type): $Matrix4x3d
"lookAt"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3dc2: $Vector3dc$$Type, matrix4x3d3: $Matrix4x3d$$Type): $Matrix4x3d
"lookAtLH"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3dc2: $Vector3dc$$Type, matrix4x3d3: $Matrix4x3d$$Type): $Matrix4x3d
"lookAtLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double, matrix4x3d9: $Matrix4x3d$$Type): $Matrix4x3d
"m00"(): double
"m01"(): double
"m02"(): double
"m10"(): double
"m11"(): double
"m12"(): double
"m20"(): double
"m21"(): double
"m22"(): double
"m30"(): double
"m31"(): double
"m32"(): double
"mapXZY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapXZnY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapXnYnZ"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapXnZY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapXnZnY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapYXZ"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapYXnZ"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapYZX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapYZnX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapYnXZ"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapYnXnZ"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapYnZX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapYnZnX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapZXY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapZXnY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapZYX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapZYnX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapZnXY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapZnXnY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapZnYX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapZnYnX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapnXYnZ"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapnXZY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapnXZnY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapnXnYZ"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapnXnYnZ"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapnXnZY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapnXnZnY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapnYXZ"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapnYXnZ"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapnYZX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapnYZnX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapnYnXZ"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapnYnXnZ"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapnYnZX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapnYnZnX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapnZXY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapnZXnY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapnZYX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapnZYnX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapnZnXY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapnZnXnY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapnZnYX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mapnZnYnX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"mul"(matrix4x3dc0: $Matrix4x3dc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
"mul"(matrix4x3fc0: $Matrix4x3fc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
"mul3x3"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double, matrix4x3d9: $Matrix4x3d$$Type): $Matrix4x3d
"mulComponentWise"(matrix4x3dc0: $Matrix4x3dc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
"mulOrtho"(matrix4x3dc0: $Matrix4x3dc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
"mulTranslation"(matrix4x3dc0: $Matrix4x3dc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
"mulTranslation"(matrix4x3fc0: $Matrix4x3fc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
"negateX"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"negateY"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"negateZ"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"normal"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"normal"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"normalize3x3"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"normalize3x3"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"normalizedPositiveX"(vector3d0: $Vector3d$$Type): $Vector3d
"normalizedPositiveY"(vector3d0: $Vector3d$$Type): $Vector3d
"normalizedPositiveZ"(vector3d0: $Vector3d$$Type): $Vector3d
"obliqueZ"(double0: double, double1: double, matrix4x3d2: $Matrix4x3d$$Type): $Matrix4x3d
"origin"(vector3d0: $Vector3d$$Type): $Vector3d
"ortho"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4x3d6: $Matrix4x3d$$Type): $Matrix4x3d
"ortho"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean, matrix4x3d7: $Matrix4x3d$$Type): $Matrix4x3d
"ortho2D"(double0: double, double1: double, double2: double, double3: double, matrix4x3d4: $Matrix4x3d$$Type): $Matrix4x3d
"ortho2DLH"(double0: double, double1: double, double2: double, double3: double, matrix4x3d4: $Matrix4x3d$$Type): $Matrix4x3d
"orthoLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean, matrix4x3d7: $Matrix4x3d$$Type): $Matrix4x3d
"orthoLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4x3d6: $Matrix4x3d$$Type): $Matrix4x3d
"orthoSymmetric"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean, matrix4x3d5: $Matrix4x3d$$Type): $Matrix4x3d
"orthoSymmetric"(double0: double, double1: double, double2: double, double3: double, matrix4x3d4: $Matrix4x3d$$Type): $Matrix4x3d
"orthoSymmetricLH"(double0: double, double1: double, double2: double, double3: double, matrix4x3d4: $Matrix4x3d$$Type): $Matrix4x3d
"orthoSymmetricLH"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean, matrix4x3d5: $Matrix4x3d$$Type): $Matrix4x3d
"pick"(double0: double, double1: double, double2: double, double3: double, int4s: integer[], matrix4x3d5: $Matrix4x3d$$Type): $Matrix4x3d
"positiveX"(vector3d0: $Vector3d$$Type): $Vector3d
"positiveY"(vector3d0: $Vector3d$$Type): $Vector3d
"positiveZ"(vector3d0: $Vector3d$$Type): $Vector3d
"properties"(): integer
"reflect"(double0: double, double1: double, double2: double, double3: double, matrix4x3d4: $Matrix4x3d$$Type): $Matrix4x3d
"reflect"(quaterniondc0: $Quaterniondc$$Type, vector3dc1: $Vector3dc$$Type, matrix4x3d2: $Matrix4x3d$$Type): $Matrix4x3d
"reflect"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4x3d6: $Matrix4x3d$$Type): $Matrix4x3d
"reflect"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, matrix4x3d2: $Matrix4x3d$$Type): $Matrix4x3d
"rotate"(axisAngle4d0: $AxisAngle4d$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
"rotate"(double0: double, double1: double, double2: double, double3: double, matrix4x3d4: $Matrix4x3d$$Type): $Matrix4x3d
"rotate"(quaterniondc0: $Quaterniondc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
"rotate"(double0: double, vector3fc1: $Vector3fc$$Type, matrix4x3d2: $Matrix4x3d$$Type): $Matrix4x3d
"rotate"(axisAngle4f0: $AxisAngle4f$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
"rotate"(double0: double, vector3dc1: $Vector3dc$$Type, matrix4x3d2: $Matrix4x3d$$Type): $Matrix4x3d
"rotate"(quaternionfc0: $Quaternionfc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
"rotateAround"(quaterniondc0: $Quaterniondc$$Type, double1: double, double2: double, double3: double, matrix4x3d4: $Matrix4x3d$$Type): $Matrix4x3d
"rotateLocal"(quaternionfc0: $Quaternionfc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
"rotateLocal"(quaterniondc0: $Quaterniondc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
"rotateLocal"(double0: double, double1: double, double2: double, double3: double, matrix4x3d4: $Matrix4x3d$$Type): $Matrix4x3d
"rotateTowards"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4x3d6: $Matrix4x3d$$Type): $Matrix4x3d
"rotateTowards"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, matrix4x3d2: $Matrix4x3d$$Type): $Matrix4x3d
"rotateTranslation"(quaterniondc0: $Quaterniondc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
"rotateTranslation"(quaternionfc0: $Quaternionfc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
"rotateTranslation"(double0: double, double1: double, double2: double, double3: double, matrix4x3d4: $Matrix4x3d$$Type): $Matrix4x3d
"rotateX"(double0: double, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
"rotateXYZ"(double0: double, double1: double, double2: double, matrix4x3d3: $Matrix4x3d$$Type): $Matrix4x3d
"rotateY"(double0: double, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
"rotateYXZ"(double0: double, double1: double, double2: double, matrix4x3d3: $Matrix4x3d$$Type): $Matrix4x3d
"rotateZ"(double0: double, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
"rotateZYX"(double0: double, double1: double, double2: double, matrix4x3d3: $Matrix4x3d$$Type): $Matrix4x3d
"scale"(double0: double, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
"scale"(double0: double, double1: double, double2: double, matrix4x3d3: $Matrix4x3d$$Type): $Matrix4x3d
"scale"(vector3dc0: $Vector3dc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
"scaleAround"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4x3d6: $Matrix4x3d$$Type): $Matrix4x3d
"scaleAround"(double0: double, double1: double, double2: double, double3: double, matrix4x3d4: $Matrix4x3d$$Type): $Matrix4x3d
"scaleLocal"(double0: double, double1: double, double2: double, matrix4x3d3: $Matrix4x3d$$Type): $Matrix4x3d
"scaleXY"(double0: double, double1: double, matrix4x3d2: $Matrix4x3d$$Type): $Matrix4x3d
"shadow"(vector4dc0: $Vector4dc$$Type, matrix4x3dc1: $Matrix4x3dc$$Type, matrix4x3d2: $Matrix4x3d$$Type): $Matrix4x3d
"shadow"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, matrix4x3d8: $Matrix4x3d$$Type): $Matrix4x3d
"shadow"(double0: double, double1: double, double2: double, double3: double, matrix4x3dc4: $Matrix4x3dc$$Type, matrix4x3d5: $Matrix4x3d$$Type): $Matrix4x3d
"shadow"(vector4dc0: $Vector4dc$$Type, double1: double, double2: double, double3: double, double4: double, matrix4x3d5: $Matrix4x3d$$Type): $Matrix4x3d
"sub"(matrix4x3dc0: $Matrix4x3dc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
"sub"(matrix4x3fc0: $Matrix4x3fc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
"transform"(vector4d0: $Vector4d$$Type): $Vector4d
"transform"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"transformAab"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, vector3d6: $Vector3d$$Type, vector3d7: $Vector3d$$Type): $Matrix4x3d
"transformAab"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3d2: $Vector3d$$Type, vector3d3: $Vector3d$$Type): $Matrix4x3d
"transformDirection"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"transformDirection"(vector3d0: $Vector3d$$Type): $Vector3d
"transformPosition"(vector3d0: $Vector3d$$Type): $Vector3d
"transformPosition"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"translate"(double0: double, double1: double, double2: double, matrix4x3d3: $Matrix4x3d$$Type): $Matrix4x3d
"translate"(vector3fc0: $Vector3fc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
"translate"(vector3dc0: $Vector3dc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
"translateLocal"(double0: double, double1: double, double2: double, matrix4x3d3: $Matrix4x3d$$Type): $Matrix4x3d
"translateLocal"(vector3dc0: $Vector3dc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
"translateLocal"(vector3fc0: $Vector3fc$$Type, matrix4x3d1: $Matrix4x3d$$Type): $Matrix4x3d
"transpose3x3"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"transpose3x3"(matrix3d0: $Matrix3d$$Type): $Matrix3d
get "finite"(): boolean
}

export namespace $Matrix4x3dc {
const PLANE_NX: integer
const PLANE_NY: integer
const PLANE_NZ: integer
const PLANE_PX: integer
const PLANE_PY: integer
const PLANE_PZ: integer
const PROPERTY_IDENTITY: byte
const PROPERTY_ORTHONORMAL: byte
const PROPERTY_TRANSLATION: byte
}
export abstract class $Matrix4x3dc$$Static implements $Matrix4x3dc {
static readonly "PLANE_NX": integer
static readonly "PLANE_NY": integer
static readonly "PLANE_NZ": integer
static readonly "PLANE_PX": integer
static readonly "PLANE_PY": integer
static readonly "PLANE_PZ": integer
static readonly "PROPERTY_IDENTITY": byte
static readonly "PROPERTY_ORTHONORMAL": byte
static readonly "PROPERTY_TRANSLATION": byte

}
}

declare module "org.joml.Matrix3fc" {
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Quaternionf, $Quaternionf$$Type } from "org.joml.Quaternionf"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Quaterniond, $Quaterniond$$Type } from "org.joml.Quaterniond"
import { $AxisAngle4f, $AxisAngle4f$$Type } from "org.joml.AxisAngle4f"
import { $Matrix3f, $Matrix3f$$Type } from "org.joml.Matrix3f"
import { $Matrix4f, $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $Quaternionfc$$Type } from "org.joml.Quaternionfc"

export interface $Matrix3fc {
"add"(matrix3fc0: $Matrix3fc$$Type, matrix3f1: $Matrix3f$$Type): $Matrix3f
"cofactor"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"determinant"(): float
"equals"(matrix3fc0: $Matrix3fc$$Type, float1: float): boolean
"get"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"get"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"get"(int0: integer, int1: integer): float
"get"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"get"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"get"(float0s: float[], int1: integer): float[]
"get"(float0s: float[]): float[]
"get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"get3x4"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"get3x4"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"get3x4"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"get3x4"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"getColumn"(int0: integer, vector3f1: $Vector3f$$Type): $Vector3f
"getEulerAnglesXYZ"(vector3f0: $Vector3f$$Type): $Vector3f
"getEulerAnglesZYX"(vector3f0: $Vector3f$$Type): $Vector3f
"getNormalizedRotation"(quaterniond0: $Quaterniond$$Type): $Quaterniond
"getNormalizedRotation"(quaternionf0: $Quaternionf$$Type): $Quaternionf
"getRotation"(axisAngle4f0: $AxisAngle4f$$Type): $AxisAngle4f
"getRow"(int0: integer, vector3f1: $Vector3f$$Type): $Vector3f
"getRowColumn"(int0: integer, int1: integer): float
"getScale"(vector3f0: $Vector3f$$Type): $Vector3f
"getToAddress"(long0: long): $Matrix3fc
"getTransposed"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"getTransposed"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"getTransposed"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"getTransposed"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"getUnnormalizedRotation"(quaterniond0: $Quaterniond$$Type): $Quaterniond
"getUnnormalizedRotation"(quaternionf0: $Quaternionf$$Type): $Quaternionf
"invert"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"isFinite"(): boolean
"lerp"(matrix3fc0: $Matrix3fc$$Type, float1: float, matrix3f2: $Matrix3f$$Type): $Matrix3f
"lookAlong"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, matrix3f2: $Matrix3f$$Type): $Matrix3f
"lookAlong"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix3f6: $Matrix3f$$Type): $Matrix3f
"m00"(): float
"m01"(): float
"m02"(): float
"m10"(): float
"m11"(): float
"m12"(): float
"m20"(): float
"m21"(): float
"m22"(): float
"mapXZY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapXZnY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapXnYnZ"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapXnZY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapXnZnY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapYXZ"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapYXnZ"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapYZX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapYZnX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapYnXZ"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapYnXnZ"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapYnZX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapYnZnX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapZXY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapZXnY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapZYX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapZYnX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapZnXY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapZnXnY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapZnYX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapZnYnX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapnXYnZ"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapnXZY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapnXZnY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapnXnYZ"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapnXnYnZ"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapnXnZY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapnXnZnY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapnYXZ"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapnYXnZ"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapnYZX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapnYZnX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapnYnXZ"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapnYnXnZ"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapnYnZX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapnYnZnX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapnZXY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapnZXnY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapnZYX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapnZYnX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapnZnXY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapnZnXnY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapnZnYX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mapnZnYnX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"mul"(matrix3fc0: $Matrix3fc$$Type, matrix3f1: $Matrix3f$$Type): $Matrix3f
"mulComponentWise"(matrix3fc0: $Matrix3fc$$Type, matrix3f1: $Matrix3f$$Type): $Matrix3f
"mulLocal"(matrix3fc0: $Matrix3fc$$Type, matrix3f1: $Matrix3f$$Type): $Matrix3f
"negateX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"negateY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"negateZ"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"normal"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"normalizedPositiveX"(vector3f0: $Vector3f$$Type): $Vector3f
"normalizedPositiveY"(vector3f0: $Vector3f$$Type): $Vector3f
"normalizedPositiveZ"(vector3f0: $Vector3f$$Type): $Vector3f
"obliqueZ"(float0: float, float1: float, matrix3f2: $Matrix3f$$Type): $Matrix3f
"positiveX"(vector3f0: $Vector3f$$Type): $Vector3f
"positiveY"(vector3f0: $Vector3f$$Type): $Vector3f
"positiveZ"(vector3f0: $Vector3f$$Type): $Vector3f
"quadraticFormProduct"(float0: float, float1: float, float2: float): float
"quadraticFormProduct"(vector3fc0: $Vector3fc$$Type): float
"reflect"(quaternionfc0: $Quaternionfc$$Type, matrix3f1: $Matrix3f$$Type): $Matrix3f
"reflect"(float0: float, float1: float, float2: float, matrix3f3: $Matrix3f$$Type): $Matrix3f
"reflect"(vector3fc0: $Vector3fc$$Type, matrix3f1: $Matrix3f$$Type): $Matrix3f
"rotate"(quaternionfc0: $Quaternionfc$$Type, matrix3f1: $Matrix3f$$Type): $Matrix3f
"rotate"(axisAngle4f0: $AxisAngle4f$$Type, matrix3f1: $Matrix3f$$Type): $Matrix3f
"rotate"(float0: float, vector3fc1: $Vector3fc$$Type, matrix3f2: $Matrix3f$$Type): $Matrix3f
"rotate"(float0: float, float1: float, float2: float, float3: float, matrix3f4: $Matrix3f$$Type): $Matrix3f
"rotateLocal"(quaternionfc0: $Quaternionfc$$Type, matrix3f1: $Matrix3f$$Type): $Matrix3f
"rotateLocal"(float0: float, float1: float, float2: float, float3: float, matrix3f4: $Matrix3f$$Type): $Matrix3f
"rotateLocalX"(float0: float, matrix3f1: $Matrix3f$$Type): $Matrix3f
"rotateLocalY"(float0: float, matrix3f1: $Matrix3f$$Type): $Matrix3f
"rotateLocalZ"(float0: float, matrix3f1: $Matrix3f$$Type): $Matrix3f
"rotateTowards"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, matrix3f2: $Matrix3f$$Type): $Matrix3f
"rotateTowards"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix3f6: $Matrix3f$$Type): $Matrix3f
"rotateX"(float0: float, matrix3f1: $Matrix3f$$Type): $Matrix3f
"rotateXYZ"(float0: float, float1: float, float2: float, matrix3f3: $Matrix3f$$Type): $Matrix3f
"rotateY"(float0: float, matrix3f1: $Matrix3f$$Type): $Matrix3f
"rotateYXZ"(float0: float, float1: float, float2: float, matrix3f3: $Matrix3f$$Type): $Matrix3f
"rotateZ"(float0: float, matrix3f1: $Matrix3f$$Type): $Matrix3f
"rotateZYX"(float0: float, float1: float, float2: float, matrix3f3: $Matrix3f$$Type): $Matrix3f
"scale"(float0: float, float1: float, float2: float, matrix3f3: $Matrix3f$$Type): $Matrix3f
"scale"(vector3fc0: $Vector3fc$$Type, matrix3f1: $Matrix3f$$Type): $Matrix3f
"scale"(float0: float, matrix3f1: $Matrix3f$$Type): $Matrix3f
"scaleLocal"(float0: float, float1: float, float2: float, matrix3f3: $Matrix3f$$Type): $Matrix3f
"sub"(matrix3fc0: $Matrix3fc$$Type, matrix3f1: $Matrix3f$$Type): $Matrix3f
"transform"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
"transform"(vector3f0: $Vector3f$$Type): $Vector3f
"transform"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"transformTranspose"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
"transformTranspose"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"transformTranspose"(vector3f0: $Vector3f$$Type): $Vector3f
"transpose"(matrix3f0: $Matrix3f$$Type): $Matrix3f
get "finite"(): boolean
}

export namespace $Matrix3fc {
const probejs$$marker: never
}
export abstract class $Matrix3fc$$Static implements $Matrix3fc {
}
}

declare module "org.joml.Vector4fc" {
import { $Matrix4x3fc$$Type } from "org.joml.Matrix4x3fc"
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Vector4i, $Vector4i$$Type } from "org.joml.Vector4i"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Vector4f, $Vector4f$$Type } from "org.joml.Vector4f"
import { $Matrix4fc$$Type } from "org.joml.Matrix4fc"
import { $Vector4d, $Vector4d$$Type } from "org.joml.Vector4d"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $Quaternionfc$$Type } from "org.joml.Quaternionfc"

export interface $Vector4fc {
"absolute"(vector4f0: $Vector4f$$Type): $Vector4f
"add"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
"add"(float0: float, float1: float, float2: float, float3: float, vector4f4: $Vector4f$$Type): $Vector4f
"angle"(vector4fc0: $Vector4fc$$Type): float
"angleCos"(vector4fc0: $Vector4fc$$Type): float
"ceil"(vector4f0: $Vector4f$$Type): $Vector4f
"distance"(vector4fc0: $Vector4fc$$Type): float
"distance"(float0: float, float1: float, float2: float, float3: float): float
"distanceSquared"(float0: float, float1: float, float2: float, float3: float): float
"distanceSquared"(vector4fc0: $Vector4fc$$Type): float
"div"(float0: float, vector4f1: $Vector4f$$Type): $Vector4f
"div"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
"div"(float0: float, float1: float, float2: float, float3: float, vector4f4: $Vector4f$$Type): $Vector4f
"dot"(vector4fc0: $Vector4fc$$Type): float
"dot"(float0: float, float1: float, float2: float, float3: float): float
"equals"(vector4fc0: $Vector4fc$$Type, float1: float): boolean
"equals"(float0: float, float1: float, float2: float, float3: float): boolean
"floor"(vector4f0: $Vector4f$$Type): $Vector4f
"fma"(vector4fc0: $Vector4fc$$Type, vector4fc1: $Vector4fc$$Type, vector4f2: $Vector4f$$Type): $Vector4f
"fma"(float0: float, vector4fc1: $Vector4fc$$Type, vector4f2: $Vector4f$$Type): $Vector4f
"get"(int0: integer, vector4i1: $Vector4i$$Type): $Vector4i
"get"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"get"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"get"(int0: integer): float
"get"(vector4f0: $Vector4f$$Type): $Vector4f
"get"(vector4d0: $Vector4d$$Type): $Vector4d
"getToAddress"(long0: long): $Vector4fc
"hermite"(vector4fc0: $Vector4fc$$Type, vector4fc1: $Vector4fc$$Type, vector4fc2: $Vector4fc$$Type, float3: float, vector4f4: $Vector4f$$Type): $Vector4f
"isFinite"(): boolean
"length"(): float
"lengthSquared"(): float
"lerp"(vector4fc0: $Vector4fc$$Type, float1: float, vector4f2: $Vector4f$$Type): $Vector4f
"max"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
"maxComponent"(): integer
"min"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
"minComponent"(): integer
"mul"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
"mul"(matrix4fc0: $Matrix4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
"mul"(matrix4x3fc0: $Matrix4x3fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
"mul"(float0: float, vector4f1: $Vector4f$$Type): $Vector4f
"mul"(float0: float, float1: float, float2: float, float3: float, vector4f4: $Vector4f$$Type): $Vector4f
"mulAdd"(vector4fc0: $Vector4fc$$Type, vector4fc1: $Vector4fc$$Type, vector4f2: $Vector4f$$Type): $Vector4f
"mulAdd"(float0: float, vector4fc1: $Vector4fc$$Type, vector4f2: $Vector4f$$Type): $Vector4f
"mulAffine"(matrix4fc0: $Matrix4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
"mulAffineTranspose"(matrix4fc0: $Matrix4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
"mulProject"(matrix4fc0: $Matrix4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
"mulProject"(matrix4fc0: $Matrix4fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"mulTranspose"(matrix4fc0: $Matrix4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
"negate"(vector4f0: $Vector4f$$Type): $Vector4f
"normalize"(vector4f0: $Vector4f$$Type): $Vector4f
"normalize"(float0: float, vector4f1: $Vector4f$$Type): $Vector4f
"normalize3"(vector4f0: $Vector4f$$Type): $Vector4f
"rotate"(quaternionfc0: $Quaternionfc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
"rotateAxis"(float0: float, float1: float, float2: float, float3: float, vector4f4: $Vector4f$$Type): $Vector4f
"rotateX"(float0: float, vector4f1: $Vector4f$$Type): $Vector4f
"rotateY"(float0: float, vector4f1: $Vector4f$$Type): $Vector4f
"rotateZ"(float0: float, vector4f1: $Vector4f$$Type): $Vector4f
"round"(vector4f0: $Vector4f$$Type): $Vector4f
"smoothStep"(vector4fc0: $Vector4fc$$Type, float1: float, vector4f2: $Vector4f$$Type): $Vector4f
"sub"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
"sub"(float0: float, float1: float, float2: float, float3: float, vector4f4: $Vector4f$$Type): $Vector4f
"w"(): float
"x"(): float
"y"(): float
"z"(): float
get "finite"(): boolean
}

export namespace $Vector4fc {
const probejs$$marker: never
}
export abstract class $Vector4fc$$Static implements $Vector4fc {
}
}

declare module "org.joml.Vector4ic" {
import { $IntBuffer, $IntBuffer$$Type } from "java.nio.IntBuffer"
import { $Vector4i, $Vector4i$$Type } from "org.joml.Vector4i"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export interface $Vector4ic {
"absolute"(vector4i0: $Vector4i$$Type): $Vector4i
"add"(int0: integer, int1: integer, int2: integer, int3: integer, vector4i4: $Vector4i$$Type): $Vector4i
"add"(vector4ic0: $Vector4ic$$Type, vector4i1: $Vector4i$$Type): $Vector4i
"distance"(vector4ic0: $Vector4ic$$Type): double
"distance"(int0: integer, int1: integer, int2: integer, int3: integer): double
"distanceSquared"(vector4ic0: $Vector4ic$$Type): integer
"distanceSquared"(int0: integer, int1: integer, int2: integer, int3: integer): integer
"div"(float0: float, vector4i1: $Vector4i$$Type): $Vector4i
"div"(vector4ic0: $Vector4ic$$Type, vector4i1: $Vector4i$$Type): $Vector4i
"div"(int0: integer, vector4i1: $Vector4i$$Type): $Vector4i
"dot"(vector4ic0: $Vector4ic$$Type): integer
"equals"(int0: integer, int1: integer, int2: integer, int3: integer): boolean
"get"(int0: integer): integer
"get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"get"(int0: integer, intBuffer1: $IntBuffer$$Type): $IntBuffer
"get"(intBuffer0: $IntBuffer$$Type): $IntBuffer
"getToAddress"(long0: long): $Vector4ic
"gridDistance"(int0: integer, int1: integer, int2: integer, int3: integer): long
"gridDistance"(vector4ic0: $Vector4ic$$Type): long
"length"(): double
"lengthSquared"(): long
"max"(vector4ic0: $Vector4ic$$Type, vector4i1: $Vector4i$$Type): $Vector4i
"maxComponent"(): integer
"min"(vector4ic0: $Vector4ic$$Type, vector4i1: $Vector4i$$Type): $Vector4i
"minComponent"(): integer
"mul"(int0: integer, vector4i1: $Vector4i$$Type): $Vector4i
"mul"(vector4ic0: $Vector4ic$$Type, vector4i1: $Vector4i$$Type): $Vector4i
"negate"(vector4i0: $Vector4i$$Type): $Vector4i
"sub"(vector4ic0: $Vector4ic$$Type, vector4i1: $Vector4i$$Type): $Vector4i
"sub"(int0: integer, int1: integer, int2: integer, int3: integer, vector4i4: $Vector4i$$Type): $Vector4i
"w"(): integer
"x"(): integer
"y"(): integer
"z"(): integer
}

export namespace $Vector4ic {
const probejs$$marker: never
}
export abstract class $Vector4ic$$Static implements $Vector4ic {
}
}

declare module "org.joml.Matrix4dc" {
import { $Matrix4x3d, $Matrix4x3d$$Type } from "org.joml.Matrix4x3d"
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Quaternionf, $Quaternionf$$Type } from "org.joml.Quaternionf"
import { $Quaterniond, $Quaterniond$$Type } from "org.joml.Quaterniond"
import { $Matrix4fc$$Type } from "org.joml.Matrix4fc"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Quaterniondc$$Type } from "org.joml.Quaterniondc"
import { $Vector3d, $Vector3d$$Type } from "org.joml.Vector3d"
import { $Matrix4d, $Matrix4d$$Type } from "org.joml.Matrix4d"
import { $Quaternionfc$$Type } from "org.joml.Quaternionfc"
import { $Matrix3x2fc$$Type } from "org.joml.Matrix3x2fc"
import { $Matrix3x2dc$$Type } from "org.joml.Matrix3x2dc"
import { $DoubleBuffer, $DoubleBuffer$$Type } from "java.nio.DoubleBuffer"
import { $AxisAngle4f$$Type } from "org.joml.AxisAngle4f"
import { $Vector4dc$$Type } from "org.joml.Vector4dc"
import { $AxisAngle4d$$Type } from "org.joml.AxisAngle4d"
import { $Matrix4x3fc$$Type } from "org.joml.Matrix4x3fc"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $Vector3dc$$Type } from "org.joml.Vector3dc"
import { $Matrix4x3dc$$Type } from "org.joml.Matrix4x3dc"
import { $Vector2dc$$Type } from "org.joml.Vector2dc"
import { $Matrix3d, $Matrix3d$$Type } from "org.joml.Matrix3d"
import { $Vector4d, $Vector4d$$Type } from "org.joml.Vector4d"

export interface $Matrix4dc {
"add"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"add4x3"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"add4x3"(matrix4fc0: $Matrix4fc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"arcball"(double0: double, vector3dc1: $Vector3dc$$Type, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
"arcball"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4d6: $Matrix4d$$Type): $Matrix4d
"cofactor3x3"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"cofactor3x3"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"determinant"(): double
"determinant3x3"(): double
"determinantAffine"(): double
"equals"(matrix4dc0: $Matrix4dc$$Type, double1: double): boolean
"fma4x3"(matrix4dc0: $Matrix4dc$$Type, double1: double, matrix4d2: $Matrix4d$$Type): $Matrix4d
"frustum"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4d6: $Matrix4d$$Type): $Matrix4d
"frustum"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean, matrix4d7: $Matrix4d$$Type): $Matrix4d
"frustumCorner"(int0: integer, vector3d1: $Vector3d$$Type): $Vector3d
"frustumLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4d6: $Matrix4d$$Type): $Matrix4d
"frustumLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean, matrix4d7: $Matrix4d$$Type): $Matrix4d
"frustumPlane"(int0: integer, vector4d1: $Vector4d$$Type): $Vector4d
"frustumRayDir"(double0: double, double1: double, vector3d2: $Vector3d$$Type): $Vector3d
"get"(double0s: double[]): double[]
"get"(float0s: float[]): float[]
"get"(float0s: float[], int1: integer): float[]
"get"(double0s: double[], int1: integer): double[]
"get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"get"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"get"(int0: integer, int1: integer): double
"get"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"get"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"get"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
"get"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
"get3x3"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"get4x3"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
"get4x3Transposed"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"get4x3Transposed"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
"get4x3Transposed"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
"get4x3Transposed"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"getColumn"(int0: integer, vector3d1: $Vector3d$$Type): $Vector3d
"getColumn"(int0: integer, vector4d1: $Vector4d$$Type): $Vector4d
"getEulerAnglesXYZ"(vector3d0: $Vector3d$$Type): $Vector3d
"getEulerAnglesZYX"(vector3d0: $Vector3d$$Type): $Vector3d
"getFloats"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"getFloats"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"getNormalizedRotation"(quaterniond0: $Quaterniond$$Type): $Quaterniond
"getNormalizedRotation"(quaternionf0: $Quaternionf$$Type): $Quaternionf
"getRow"(int0: integer, vector4d1: $Vector4d$$Type): $Vector4d
"getRow"(int0: integer, vector3d1: $Vector3d$$Type): $Vector3d
"getRowColumn"(int0: integer, int1: integer): double
"getScale"(vector3d0: $Vector3d$$Type): $Vector3d
"getToAddress"(long0: long): $Matrix4dc
"getTranslation"(vector3d0: $Vector3d$$Type): $Vector3d
"getTransposed"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"getTransposed"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
"getTransposed"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
"getTransposed"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"getTransposed"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"getTransposed"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"getTransposedFloats"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"getTransposedFloats"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"getUnnormalizedRotation"(quaterniond0: $Quaterniond$$Type): $Quaterniond
"getUnnormalizedRotation"(quaternionf0: $Quaternionf$$Type): $Quaternionf
"invert"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"invertAffine"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"invertFrustum"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"invertOrtho"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"invertPerspective"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"invertPerspectiveView"(matrix4x3dc0: $Matrix4x3dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"invertPerspectiveView"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"isAffine"(): boolean
"isFinite"(): boolean
"lerp"(matrix4dc0: $Matrix4dc$$Type, double1: double, matrix4d2: $Matrix4d$$Type): $Matrix4d
"lookAlong"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4d6: $Matrix4d$$Type): $Matrix4d
"lookAlong"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, matrix4d2: $Matrix4d$$Type): $Matrix4d
"lookAt"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double, matrix4d9: $Matrix4d$$Type): $Matrix4d
"lookAt"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3dc2: $Vector3dc$$Type, matrix4d3: $Matrix4d$$Type): $Matrix4d
"lookAtLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double, matrix4d9: $Matrix4d$$Type): $Matrix4d
"lookAtLH"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3dc2: $Vector3dc$$Type, matrix4d3: $Matrix4d$$Type): $Matrix4d
"lookAtPerspective"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double, matrix4d9: $Matrix4d$$Type): $Matrix4d
"lookAtPerspectiveLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double, matrix4d9: $Matrix4d$$Type): $Matrix4d
"m00"(): double
"m01"(): double
"m02"(): double
"m03"(): double
"m10"(): double
"m11"(): double
"m12"(): double
"m13"(): double
"m20"(): double
"m21"(): double
"m22"(): double
"m23"(): double
"m30"(): double
"m31"(): double
"m32"(): double
"m33"(): double
"mapXZY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapXZnY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapXnYnZ"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapXnZY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapXnZnY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapYXZ"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapYXnZ"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapYZX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapYZnX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapYnXZ"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapYnXnZ"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapYnZX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapYnZnX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapZXY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapZXnY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapZYX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapZYnX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapZnXY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapZnXnY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapZnYX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapZnYnX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapnXYnZ"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapnXZY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapnXZnY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapnXnYZ"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapnXnYnZ"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapnXnZY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapnXnZnY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapnYXZ"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapnYXnZ"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapnYZX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapnYZnX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapnYnXZ"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapnYnXnZ"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapnYnZX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapnYnZnX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapnZXY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapnZXnY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapnZYX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapnZYnX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapnZnXY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapnZnXnY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapnZnYX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mapnZnYnX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"mul"(matrix4x3dc0: $Matrix4x3dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"mul"(matrix4x3fc0: $Matrix4x3fc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"mul"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double, double9: double, double10: double, double11: double, double12: double, double13: double, double14: double, double15: double, matrix4d16: $Matrix4d$$Type): $Matrix4d
"mul"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"mul"(matrix3x2fc0: $Matrix3x2fc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"mul"(matrix3x2dc0: $Matrix3x2dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"mul"(matrix4fc0: $Matrix4fc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"mul0"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"mul3x3"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double, matrix4d9: $Matrix4d$$Type): $Matrix4d
"mul4x3ComponentWise"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"mulAffine"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"mulAffineR"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"mulComponentWise"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"mulLocal"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"mulLocalAffine"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"mulOrthoAffine"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"mulPerspectiveAffine"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"mulPerspectiveAffine"(matrix4x3dc0: $Matrix4x3dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"mulTranslationAffine"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"negateX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"negateY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"negateZ"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"normal"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"normal"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"normalize3x3"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"normalize3x3"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"normalizedPositiveX"(vector3d0: $Vector3d$$Type): $Vector3d
"normalizedPositiveY"(vector3d0: $Vector3d$$Type): $Vector3d
"normalizedPositiveZ"(vector3d0: $Vector3d$$Type): $Vector3d
"obliqueZ"(double0: double, double1: double, matrix4d2: $Matrix4d$$Type): $Matrix4d
"origin"(vector3d0: $Vector3d$$Type): $Vector3d
"originAffine"(vector3d0: $Vector3d$$Type): $Vector3d
"ortho"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean, matrix4d7: $Matrix4d$$Type): $Matrix4d
"ortho"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4d6: $Matrix4d$$Type): $Matrix4d
"ortho2D"(double0: double, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
"ortho2DLH"(double0: double, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
"orthoCrop"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"orthoLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4d6: $Matrix4d$$Type): $Matrix4d
"orthoLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean, matrix4d7: $Matrix4d$$Type): $Matrix4d
"orthoSymmetric"(double0: double, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
"orthoSymmetric"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean, matrix4d5: $Matrix4d$$Type): $Matrix4d
"orthoSymmetricLH"(double0: double, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
"orthoSymmetricLH"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean, matrix4d5: $Matrix4d$$Type): $Matrix4d
"perspective"(double0: double, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
"perspective"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean, matrix4d5: $Matrix4d$$Type): $Matrix4d
"perspectiveFar"(): double
"perspectiveFov"(): double
"perspectiveFrustumSlice"(double0: double, double1: double, matrix4d2: $Matrix4d$$Type): $Matrix4d
"perspectiveInvOrigin"(vector3d0: $Vector3d$$Type): $Vector3d
"perspectiveLH"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean, matrix4d5: $Matrix4d$$Type): $Matrix4d
"perspectiveLH"(double0: double, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
"perspectiveNear"(): double
"perspectiveOffCenter"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean, matrix4d7: $Matrix4d$$Type): $Matrix4d
"perspectiveOffCenter"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4d6: $Matrix4d$$Type): $Matrix4d
"perspectiveOffCenterFov"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4d6: $Matrix4d$$Type): $Matrix4d
"perspectiveOffCenterFov"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean, matrix4d7: $Matrix4d$$Type): $Matrix4d
"perspectiveOffCenterFovLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean, matrix4d7: $Matrix4d$$Type): $Matrix4d
"perspectiveOffCenterFovLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4d6: $Matrix4d$$Type): $Matrix4d
"perspectiveOrigin"(vector3d0: $Vector3d$$Type): $Vector3d
"perspectiveRect"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean, matrix4d5: $Matrix4d$$Type): $Matrix4d
"perspectiveRect"(double0: double, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
"pick"(double0: double, double1: double, double2: double, double3: double, int4s: integer[], matrix4d5: $Matrix4d$$Type): $Matrix4d
"positiveX"(vector3d0: $Vector3d$$Type): $Vector3d
"positiveY"(vector3d0: $Vector3d$$Type): $Vector3d
"positiveZ"(vector3d0: $Vector3d$$Type): $Vector3d
"project"(vector3dc0: $Vector3dc$$Type, int1s: integer[], vector3d2: $Vector3d$$Type): $Vector3d
"project"(vector3dc0: $Vector3dc$$Type, int1s: integer[], vector4d2: $Vector4d$$Type): $Vector4d
"project"(double0: double, double1: double, double2: double, int3s: integer[], vector3d4: $Vector3d$$Type): $Vector3d
"project"(double0: double, double1: double, double2: double, int3s: integer[], vector4d4: $Vector4d$$Type): $Vector4d
"projectedGridRange"(matrix4dc0: $Matrix4dc$$Type, double1: double, double2: double, matrix4d3: $Matrix4d$$Type): $Matrix4d
"properties"(): integer
"reflect"(quaterniondc0: $Quaterniondc$$Type, vector3dc1: $Vector3dc$$Type, matrix4d2: $Matrix4d$$Type): $Matrix4d
"reflect"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4d6: $Matrix4d$$Type): $Matrix4d
"reflect"(double0: double, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
"reflect"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, matrix4d2: $Matrix4d$$Type): $Matrix4d
"rotate"(quaterniondc0: $Quaterniondc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"rotate"(quaternionfc0: $Quaternionfc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"rotate"(axisAngle4d0: $AxisAngle4d$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"rotate"(double0: double, vector3dc1: $Vector3dc$$Type, matrix4d2: $Matrix4d$$Type): $Matrix4d
"rotate"(double0: double, vector3fc1: $Vector3fc$$Type, matrix4d2: $Matrix4d$$Type): $Matrix4d
"rotate"(axisAngle4f0: $AxisAngle4f$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"rotate"(double0: double, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
"rotateAffine"(quaternionfc0: $Quaternionfc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"rotateAffine"(double0: double, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
"rotateAffine"(quaterniondc0: $Quaterniondc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"rotateAffineXYZ"(double0: double, double1: double, double2: double, matrix4d3: $Matrix4d$$Type): $Matrix4d
"rotateAffineYXZ"(double0: double, double1: double, double2: double, matrix4d3: $Matrix4d$$Type): $Matrix4d
"rotateAffineZYX"(double0: double, double1: double, double2: double, matrix4d3: $Matrix4d$$Type): $Matrix4d
"rotateAround"(quaterniondc0: $Quaterniondc$$Type, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
"rotateAroundAffine"(quaterniondc0: $Quaterniondc$$Type, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
"rotateAroundLocal"(quaterniondc0: $Quaterniondc$$Type, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
"rotateLocal"(quaternionfc0: $Quaternionfc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"rotateLocal"(quaterniondc0: $Quaterniondc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"rotateLocal"(double0: double, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
"rotateLocalX"(double0: double, matrix4d1: $Matrix4d$$Type): $Matrix4d
"rotateLocalY"(double0: double, matrix4d1: $Matrix4d$$Type): $Matrix4d
"rotateLocalZ"(double0: double, matrix4d1: $Matrix4d$$Type): $Matrix4d
"rotateTowards"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, matrix4d2: $Matrix4d$$Type): $Matrix4d
"rotateTowards"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4d6: $Matrix4d$$Type): $Matrix4d
"rotateTowardsXY"(double0: double, double1: double, matrix4d2: $Matrix4d$$Type): $Matrix4d
"rotateTranslation"(quaternionfc0: $Quaternionfc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"rotateTranslation"(quaterniondc0: $Quaterniondc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"rotateTranslation"(double0: double, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
"rotateX"(double0: double, matrix4d1: $Matrix4d$$Type): $Matrix4d
"rotateXYZ"(double0: double, double1: double, double2: double, matrix4d3: $Matrix4d$$Type): $Matrix4d
"rotateY"(double0: double, matrix4d1: $Matrix4d$$Type): $Matrix4d
"rotateYXZ"(double0: double, double1: double, double2: double, matrix4d3: $Matrix4d$$Type): $Matrix4d
"rotateZ"(double0: double, matrix4d1: $Matrix4d$$Type): $Matrix4d
"rotateZYX"(double0: double, double1: double, double2: double, matrix4d3: $Matrix4d$$Type): $Matrix4d
"scale"(double0: double, double1: double, double2: double, matrix4d3: $Matrix4d$$Type): $Matrix4d
"scale"(double0: double, matrix4d1: $Matrix4d$$Type): $Matrix4d
"scale"(vector3dc0: $Vector3dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"scaleAround"(double0: double, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
"scaleAround"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4d6: $Matrix4d$$Type): $Matrix4d
"scaleAroundLocal"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4d6: $Matrix4d$$Type): $Matrix4d
"scaleAroundLocal"(double0: double, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
"scaleLocal"(double0: double, double1: double, double2: double, matrix4d3: $Matrix4d$$Type): $Matrix4d
"scaleLocal"(double0: double, matrix4d1: $Matrix4d$$Type): $Matrix4d
"scaleXY"(double0: double, double1: double, matrix4d2: $Matrix4d$$Type): $Matrix4d
"shadow"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, matrix4d8: $Matrix4d$$Type): $Matrix4d
"shadow"(double0: double, double1: double, double2: double, double3: double, matrix4dc4: $Matrix4dc$$Type, matrix4d5: $Matrix4d$$Type): $Matrix4d
"shadow"(vector4dc0: $Vector4dc$$Type, matrix4dc1: $Matrix4dc$$Type, matrix4d2: $Matrix4d$$Type): $Matrix4d
"shadow"(vector4dc0: $Vector4dc$$Type, double1: double, double2: double, double3: double, double4: double, matrix4d5: $Matrix4d$$Type): $Matrix4d
"sub"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"sub4x3"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"testAab"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): boolean
"testPoint"(double0: double, double1: double, double2: double): boolean
"testSphere"(double0: double, double1: double, double2: double, double3: double): boolean
"tile"(int0: integer, int1: integer, int2: integer, int3: integer, matrix4d4: $Matrix4d$$Type): $Matrix4d
"transform"(vector4d0: $Vector4d$$Type): $Vector4d
"transform"(double0: double, double1: double, double2: double, double3: double, vector4d4: $Vector4d$$Type): $Vector4d
"transform"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"transformAab"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3d2: $Vector3d$$Type, vector3d3: $Vector3d$$Type): $Matrix4d
"transformAab"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, vector3d6: $Vector3d$$Type, vector3d7: $Vector3d$$Type): $Matrix4d
"transformAffine"(double0: double, double1: double, double2: double, double3: double, vector4d4: $Vector4d$$Type): $Vector4d
"transformAffine"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"transformAffine"(vector4d0: $Vector4d$$Type): $Vector4d
"transformDirection"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
"transformDirection"(double0: double, double1: double, double2: double, vector3f3: $Vector3f$$Type): $Vector3f
"transformDirection"(vector3d0: $Vector3d$$Type): $Vector3d
"transformDirection"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"transformDirection"(vector3f0: $Vector3f$$Type): $Vector3f
"transformDirection"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"transformPosition"(vector3d0: $Vector3d$$Type): $Vector3d
"transformPosition"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"transformPosition"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
"transformProject"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"transformProject"(vector4d0: $Vector4d$$Type): $Vector4d
"transformProject"(double0: double, double1: double, double2: double, double3: double, vector3d4: $Vector3d$$Type): $Vector3d
"transformProject"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
"transformProject"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"transformProject"(vector3d0: $Vector3d$$Type): $Vector3d
"transformProject"(double0: double, double1: double, double2: double, double3: double, vector4d4: $Vector4d$$Type): $Vector4d
"transformProject"(vector4dc0: $Vector4dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"transformTranspose"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"transformTranspose"(vector4d0: $Vector4d$$Type): $Vector4d
"transformTranspose"(double0: double, double1: double, double2: double, double3: double, vector4d4: $Vector4d$$Type): $Vector4d
"translate"(double0: double, double1: double, double2: double, matrix4d3: $Matrix4d$$Type): $Matrix4d
"translate"(vector3fc0: $Vector3fc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"translate"(vector3dc0: $Vector3dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"translateLocal"(vector3fc0: $Vector3fc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"translateLocal"(vector3dc0: $Vector3dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"translateLocal"(double0: double, double1: double, double2: double, matrix4d3: $Matrix4d$$Type): $Matrix4d
"transpose"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"transpose3x3"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"transpose3x3"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"unproject"(double0: double, double1: double, double2: double, int3s: integer[], vector3d4: $Vector3d$$Type): $Vector3d
"unproject"(vector3dc0: $Vector3dc$$Type, int1s: integer[], vector3d2: $Vector3d$$Type): $Vector3d
"unproject"(double0: double, double1: double, double2: double, int3s: integer[], vector4d4: $Vector4d$$Type): $Vector4d
"unproject"(vector3dc0: $Vector3dc$$Type, int1s: integer[], vector4d2: $Vector4d$$Type): $Vector4d
"unprojectInv"(double0: double, double1: double, double2: double, int3s: integer[], vector3d4: $Vector3d$$Type): $Vector3d
"unprojectInv"(vector3dc0: $Vector3dc$$Type, int1s: integer[], vector4d2: $Vector4d$$Type): $Vector4d
"unprojectInv"(double0: double, double1: double, double2: double, int3s: integer[], vector4d4: $Vector4d$$Type): $Vector4d
"unprojectInv"(vector3dc0: $Vector3dc$$Type, int1s: integer[], vector3d2: $Vector3d$$Type): $Vector3d
"unprojectInvRay"(double0: double, double1: double, int2s: integer[], vector3d3: $Vector3d$$Type, vector3d4: $Vector3d$$Type): $Matrix4d
"unprojectInvRay"(vector2dc0: $Vector2dc$$Type, int1s: integer[], vector3d2: $Vector3d$$Type, vector3d3: $Vector3d$$Type): $Matrix4d
"unprojectRay"(double0: double, double1: double, int2s: integer[], vector3d3: $Vector3d$$Type, vector3d4: $Vector3d$$Type): $Matrix4d
"unprojectRay"(vector2dc0: $Vector2dc$$Type, int1s: integer[], vector3d2: $Vector3d$$Type, vector3d3: $Vector3d$$Type): $Matrix4d
"withLookAtUp"(vector3dc0: $Vector3dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
"withLookAtUp"(double0: double, double1: double, double2: double, matrix4d3: $Matrix4d$$Type): $Matrix4d
get "affine"(): boolean
get "finite"(): boolean
}

export namespace $Matrix4dc {
const CORNER_NXNYNZ: integer
const CORNER_NXNYPZ: integer
const CORNER_NXPYNZ: integer
const CORNER_NXPYPZ: integer
const CORNER_PXNYNZ: integer
const CORNER_PXNYPZ: integer
const CORNER_PXPYNZ: integer
const CORNER_PXPYPZ: integer
const PLANE_NX: integer
const PLANE_NY: integer
const PLANE_NZ: integer
const PLANE_PX: integer
const PLANE_PY: integer
const PLANE_PZ: integer
const PROPERTY_AFFINE: byte
const PROPERTY_IDENTITY: byte
const PROPERTY_ORTHONORMAL: byte
const PROPERTY_PERSPECTIVE: byte
const PROPERTY_TRANSLATION: byte
}
export abstract class $Matrix4dc$$Static implements $Matrix4dc {
static readonly "CORNER_NXNYNZ": integer
static readonly "CORNER_NXNYPZ": integer
static readonly "CORNER_NXPYNZ": integer
static readonly "CORNER_NXPYPZ": integer
static readonly "CORNER_PXNYNZ": integer
static readonly "CORNER_PXNYPZ": integer
static readonly "CORNER_PXPYNZ": integer
static readonly "CORNER_PXPYPZ": integer
static readonly "PLANE_NX": integer
static readonly "PLANE_NY": integer
static readonly "PLANE_NZ": integer
static readonly "PLANE_PX": integer
static readonly "PLANE_PY": integer
static readonly "PLANE_PZ": integer
static readonly "PROPERTY_AFFINE": byte
static readonly "PROPERTY_IDENTITY": byte
static readonly "PROPERTY_ORTHONORMAL": byte
static readonly "PROPERTY_PERSPECTIVE": byte
static readonly "PROPERTY_TRANSLATION": byte

}
}

declare module "org.joml.Matrix3x2d" {
import { $Cloneable } from "java.lang.Cloneable"
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Externalizable } from "java.io.Externalizable"
import { $Matrix3x2dc, $Matrix3x2dc$$Type } from "org.joml.Matrix3x2dc"
import { $DoubleBuffer, $DoubleBuffer$$Type } from "java.nio.DoubleBuffer"
import { $ObjectOutput$$Type } from "java.io.ObjectOutput"
import { $Matrix2dc$$Type } from "org.joml.Matrix2dc"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $NumberFormat$$Type } from "java.text.NumberFormat"
import { $Matrix2fc$$Type } from "org.joml.Matrix2fc"
import { $Vector2fc$$Type } from "org.joml.Vector2fc"
import { $Vector3dc$$Type } from "org.joml.Vector3dc"
import { $Vector2dc$$Type } from "org.joml.Vector2dc"
import { $ObjectInput$$Type } from "java.io.ObjectInput"
import { $Vector3d, $Vector3d$$Type } from "org.joml.Vector3d"
import { $Vector2d, $Vector2d$$Type } from "org.joml.Vector2d"

export class $Matrix3x2d implements $Matrix3x2dc, $Cloneable, $Externalizable {
"m00": double
"m01": double
"m10": double
"m11": double
"m20": double
"m21": double

constructor(matrix2dc0: $Matrix2dc$$Type)
constructor(matrix2fc0: $Matrix2fc$$Type)
constructor(matrix3x2dc0: $Matrix3x2dc$$Type)
constructor(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double)
constructor(doubleBuffer0: $DoubleBuffer$$Type)
constructor()

public "clone"(): any
public "determinant"(): double
public "equals"(matrix3x2dc0: $Matrix3x2dc$$Type, double1: double): boolean
public "get"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
public "get"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
public "get"(matrix3x2d0: $Matrix3x2d$$Type): $Matrix3x2d
public "get"(double0s: double[], int1: integer): double[]
public "get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "get"(double0s: double[]): double[]
public "get3x3"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "get3x3"(double0s: double[], int1: integer): double[]
public "get3x3"(double0s: double[]): double[]
public "get3x3"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
public "get3x3"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
public "get3x3"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "get4x4"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
public "get4x4"(double0s: double[]): double[]
public "get4x4"(double0s: double[], int1: integer): double[]
public "get4x4"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
public "get4x4"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "get4x4"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "getToAddress"(long0: long): $Matrix3x2dc
public "getTransposed"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "getTransposed"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "getTransposed"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "getTransposed"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "getTransposed"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
public "getTransposed"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
public "getTransposedFloats"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "getTransposedFloats"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "identity"(): $Matrix3x2d
public "invert"(): $Matrix3x2d
public "invert"(matrix3x2d0: $Matrix3x2d$$Type): $Matrix3x2d
public "isFinite"(): boolean
public "m00"(): double
public "m01"(): double
public "m10"(): double
public "m11"(): double
public "m20"(): double
public "m21"(): double
public "mul"(matrix3x2dc0: $Matrix3x2dc$$Type, matrix3x2d1: $Matrix3x2d$$Type): $Matrix3x2d
public "mul"(matrix3x2dc0: $Matrix3x2dc$$Type): $Matrix3x2d
public "mulLocal"(matrix3x2dc0: $Matrix3x2dc$$Type, matrix3x2d1: $Matrix3x2d$$Type): $Matrix3x2d
public "mulLocal"(matrix3x2dc0: $Matrix3x2dc$$Type): $Matrix3x2d
public "normalizedPositiveX"(vector2d0: $Vector2d$$Type): $Vector2d
public "normalizedPositiveY"(vector2d0: $Vector2d$$Type): $Vector2d
public "origin"(vector2d0: $Vector2d$$Type): $Vector2d
public "positiveX"(vector2d0: $Vector2d$$Type): $Vector2d
public "positiveY"(vector2d0: $Vector2d$$Type): $Vector2d
public "readExternal"(objectInput0: $ObjectInput$$Type): void
public "rotate"(double0: double): $Matrix3x2d
public "rotate"(double0: double, matrix3x2d1: $Matrix3x2d$$Type): $Matrix3x2d
public "rotateAbout"(double0: double, double1: double, double2: double, matrix3x2d3: $Matrix3x2d$$Type): $Matrix3x2d
public "rotateAbout"(double0: double, double1: double, double2: double): $Matrix3x2d
public "rotateLocal"(double0: double): $Matrix3x2d
public "rotateLocal"(double0: double, matrix3x2d1: $Matrix3x2d$$Type): $Matrix3x2d
public "rotateTo"(vector2dc0: $Vector2dc$$Type, vector2dc1: $Vector2dc$$Type, matrix3x2d2: $Matrix3x2d$$Type): $Matrix3x2d
public "rotateTo"(vector2dc0: $Vector2dc$$Type, vector2dc1: $Vector2dc$$Type): $Matrix3x2d
public "rotation"(double0: double): $Matrix3x2d
public "scale"(double0: double, double1: double, matrix3x2d2: $Matrix3x2d$$Type): $Matrix3x2d
public "scale"(double0: double, double1: double): $Matrix3x2d
public "scale"(vector2fc0: $Vector2fc$$Type): $Matrix3x2d
public "scale"(vector2dc0: $Vector2dc$$Type, matrix3x2d1: $Matrix3x2d$$Type): $Matrix3x2d
public "scale"(vector2dc0: $Vector2dc$$Type): $Matrix3x2d
public "scale"(vector2fc0: $Vector2fc$$Type, matrix3x2d1: $Matrix3x2d$$Type): $Matrix3x2d
public "scale"(double0: double, matrix3x2d1: $Matrix3x2d$$Type): $Matrix3x2d
public "scale"(double0: double): $Matrix3x2d
public "scaleAround"(double0: double, double1: double, double2: double, matrix3x2d3: $Matrix3x2d$$Type): $Matrix3x2d
public "scaleAround"(double0: double, double1: double, double2: double, double3: double): $Matrix3x2d
public "scaleAround"(double0: double, double1: double, double2: double, double3: double, matrix3x2d4: $Matrix3x2d$$Type): $Matrix3x2d
public "scaleAround"(double0: double, double1: double, double2: double): $Matrix3x2d
public "scaleAroundLocal"(double0: double, double1: double, double2: double, matrix3x2d3: $Matrix3x2d$$Type): $Matrix3x2d
public "scaleAroundLocal"(double0: double, double1: double, double2: double, double3: double, matrix3x2d4: $Matrix3x2d$$Type): $Matrix3x2d
public "scaleAroundLocal"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix3x2d
public "scaleAroundLocal"(double0: double, double1: double, double2: double): $Matrix3x2d
public "scaleLocal"(double0: double, double1: double): $Matrix3x2d
public "scaleLocal"(double0: double, matrix3x2d1: $Matrix3x2d$$Type): $Matrix3x2d
public "scaleLocal"(double0: double): $Matrix3x2d
public "scaleLocal"(double0: double, double1: double, matrix3x2d2: $Matrix3x2d$$Type): $Matrix3x2d
public "scaling"(double0: double, double1: double): $Matrix3x2d
public "scaling"(double0: double): $Matrix3x2d
public "set"(doubleBuffer0: $DoubleBuffer$$Type): $Matrix3x2d
public "set"(double0s: double[]): $Matrix3x2d
public "set"(byteBuffer0: $ByteBuffer$$Type): $Matrix3x2d
public "set"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $Matrix3x2d
public "set"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $Matrix3x2d
public "set"(matrix3x2dc0: $Matrix3x2dc$$Type): $Matrix3x2d
public "set"(matrix2dc0: $Matrix2dc$$Type): $Matrix3x2d
public "set"(matrix2fc0: $Matrix2fc$$Type): $Matrix3x2d
public "set"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix3x2d
public "setFromAddress"(long0: long): $Matrix3x2d
public "setTranslation"(vector2dc0: $Vector2dc$$Type): $Matrix3x2d
public "setTranslation"(double0: double, double1: double): $Matrix3x2d
public "setView"(double0: double, double1: double, double2: double, double3: double): $Matrix3x2d
public "span"(vector2d0: $Vector2d$$Type, vector2d1: $Vector2d$$Type, vector2d2: $Vector2d$$Type): $Matrix3x2d
public "testAar"(double0: double, double1: double, double2: double, double3: double): boolean
public "testCircle"(double0: double, double1: double, double2: double): boolean
public "testPoint"(double0: double, double1: double): boolean
public "toString"(numberFormat0: $NumberFormat$$Type): string
public "transform"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
public "transform"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "transform"(vector3d0: $Vector3d$$Type): $Vector3d
public "transformDirection"(vector2d0: $Vector2d$$Type): $Vector2d
public "transformDirection"(vector2dc0: $Vector2dc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
public "transformDirection"(double0: double, double1: double, vector2d2: $Vector2d$$Type): $Vector2d
public "transformPosition"(vector2d0: $Vector2d$$Type): $Vector2d
public "transformPosition"(double0: double, double1: double, vector2d2: $Vector2d$$Type): $Vector2d
public "transformPosition"(vector2dc0: $Vector2dc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
public "translate"(double0: double, double1: double, matrix3x2d2: $Matrix3x2d$$Type): $Matrix3x2d
public "translate"(vector2dc0: $Vector2dc$$Type): $Matrix3x2d
public "translate"(vector2dc0: $Vector2dc$$Type, matrix3x2d1: $Matrix3x2d$$Type): $Matrix3x2d
public "translate"(double0: double, double1: double): $Matrix3x2d
public "translateLocal"(double0: double, double1: double): $Matrix3x2d
public "translateLocal"(vector2dc0: $Vector2dc$$Type): $Matrix3x2d
public "translateLocal"(vector2dc0: $Vector2dc$$Type, matrix3x2d1: $Matrix3x2d$$Type): $Matrix3x2d
public "translateLocal"(double0: double, double1: double, matrix3x2d2: $Matrix3x2d$$Type): $Matrix3x2d
public "translation"(double0: double, double1: double): $Matrix3x2d
public "translation"(vector2dc0: $Vector2dc$$Type): $Matrix3x2d
public "unproject"(double0: double, double1: double, int2s: integer[], vector2d3: $Vector2d$$Type): $Vector2d
public "unprojectInv"(double0: double, double1: double, int2s: integer[], vector2d3: $Vector2d$$Type): $Vector2d
public "view"(double0: double, double1: double, double2: double, double3: double, matrix3x2d4: $Matrix3x2d$$Type): $Matrix3x2d
public "view"(double0: double, double1: double, double2: double, double3: double): $Matrix3x2d
public "viewArea"(double0s: double[]): double[]
public "writeExternal"(objectOutput0: $ObjectOutput$$Type): void
public "zero"(): $Matrix3x2d
get "finite"(): boolean
set "fromAddress"(value: long)
}
}

declare module "org.joml.Matrix3x2f" {
import { $Cloneable } from "java.lang.Cloneable"
import { $Matrix3x2fc, $Matrix3x2fc$$Type } from "org.joml.Matrix3x2fc"
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Externalizable } from "java.io.Externalizable"
import { $ObjectOutput$$Type } from "java.io.ObjectOutput"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $NumberFormat$$Type } from "java.text.NumberFormat"
import { $Matrix2fc$$Type } from "org.joml.Matrix2fc"
import { $Vector2fc$$Type } from "org.joml.Vector2fc"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Vector2f, $Vector2f$$Type } from "org.joml.Vector2f"
import { $ObjectInput$$Type } from "java.io.ObjectInput"

export class $Matrix3x2f implements $Matrix3x2fc, $Externalizable, $Cloneable {
"m00": float
"m01": float
"m10": float
"m11": float
"m20": float
"m21": float

constructor(matrix2fc0: $Matrix2fc$$Type)
constructor(matrix3x2fc0: $Matrix3x2fc$$Type)
constructor(floatBuffer0: $FloatBuffer$$Type)
constructor(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float)
constructor()

public "clone"(): any
public "determinant"(): float
public "equals"(matrix3x2fc0: $Matrix3x2fc$$Type, float1: float): boolean
public "get"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "get"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "get"(matrix3x2f0: $Matrix3x2f$$Type): $Matrix3x2f
public "get"(float0s: float[], int1: integer): float[]
public "get"(float0s: float[]): float[]
public "get3x3"(float0s: float[], int1: integer): float[]
public "get3x3"(float0s: float[]): float[]
public "get3x3"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "get3x3"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "get3x3"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "get3x3"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "get4x4"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "get4x4"(float0s: float[]): float[]
public "get4x4"(float0s: float[], int1: integer): float[]
public "get4x4"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "get4x4"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "get4x4"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "getToAddress"(long0: long): $Matrix3x2fc
public "identity"(): $Matrix3x2f
public "invert"(matrix3x2f0: $Matrix3x2f$$Type): $Matrix3x2f
public "invert"(): $Matrix3x2f
public "isFinite"(): boolean
public "m00"(): float
public "m01"(): float
public "m10"(): float
public "m11"(): float
public "m20"(): float
public "m21"(): float
public "mul"(matrix3x2fc0: $Matrix3x2fc$$Type, matrix3x2f1: $Matrix3x2f$$Type): $Matrix3x2f
public "mul"(matrix3x2fc0: $Matrix3x2fc$$Type): $Matrix3x2f
public "mulLocal"(matrix3x2fc0: $Matrix3x2fc$$Type, matrix3x2f1: $Matrix3x2f$$Type): $Matrix3x2f
public "mulLocal"(matrix3x2fc0: $Matrix3x2fc$$Type): $Matrix3x2f
public "normalizedPositiveX"(vector2f0: $Vector2f$$Type): $Vector2f
public "normalizedPositiveY"(vector2f0: $Vector2f$$Type): $Vector2f
public "origin"(vector2f0: $Vector2f$$Type): $Vector2f
public "positiveX"(vector2f0: $Vector2f$$Type): $Vector2f
public "positiveY"(vector2f0: $Vector2f$$Type): $Vector2f
public "readExternal"(objectInput0: $ObjectInput$$Type): void
public "rotate"(float0: float): $Matrix3x2f
public "rotate"(float0: float, matrix3x2f1: $Matrix3x2f$$Type): $Matrix3x2f
public "rotateAbout"(float0: float, float1: float, float2: float, matrix3x2f3: $Matrix3x2f$$Type): $Matrix3x2f
public "rotateAbout"(float0: float, float1: float, float2: float): $Matrix3x2f
public "rotateLocal"(float0: float): $Matrix3x2f
public "rotateLocal"(float0: float, matrix3x2f1: $Matrix3x2f$$Type): $Matrix3x2f
public "rotateTo"(vector2fc0: $Vector2fc$$Type, vector2fc1: $Vector2fc$$Type, matrix3x2f2: $Matrix3x2f$$Type): $Matrix3x2f
public "rotateTo"(vector2fc0: $Vector2fc$$Type, vector2fc1: $Vector2fc$$Type): $Matrix3x2f
public "rotation"(float0: float): $Matrix3x2f
public "scale"(float0: float, matrix3x2f1: $Matrix3x2f$$Type): $Matrix3x2f
public "scale"(vector2fc0: $Vector2fc$$Type, matrix3x2f1: $Matrix3x2f$$Type): $Matrix3x2f
public "scale"(vector2fc0: $Vector2fc$$Type): $Matrix3x2f
public "scale"(float0: float, float1: float): $Matrix3x2f
public "scale"(float0: float, float1: float, matrix3x2f2: $Matrix3x2f$$Type): $Matrix3x2f
public "scale"(float0: float): $Matrix3x2f
public "scaleAround"(float0: float, float1: float, float2: float, float3: float): $Matrix3x2f
public "scaleAround"(float0: float, float1: float, float2: float, matrix3x2f3: $Matrix3x2f$$Type): $Matrix3x2f
public "scaleAround"(float0: float, float1: float, float2: float): $Matrix3x2f
public "scaleAround"(float0: float, float1: float, float2: float, float3: float, matrix3x2f4: $Matrix3x2f$$Type): $Matrix3x2f
public "scaleAroundLocal"(float0: float, float1: float, float2: float, float3: float, matrix3x2f4: $Matrix3x2f$$Type): $Matrix3x2f
public "scaleAroundLocal"(float0: float, float1: float, float2: float): $Matrix3x2f
public "scaleAroundLocal"(float0: float, float1: float, float2: float, matrix3x2f3: $Matrix3x2f$$Type): $Matrix3x2f
public "scaleAroundLocal"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix3x2f
public "scaleLocal"(float0: float, float1: float, matrix3x2f2: $Matrix3x2f$$Type): $Matrix3x2f
public "scaleLocal"(float0: float, float1: float): $Matrix3x2f
public "scaleLocal"(float0: float): $Matrix3x2f
public "scaleLocal"(float0: float, matrix3x2f1: $Matrix3x2f$$Type): $Matrix3x2f
public "scaling"(float0: float): $Matrix3x2f
public "scaling"(float0: float, float1: float): $Matrix3x2f
public "set"(float0s: float[]): $Matrix3x2f
public "set"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix3x2f
public "set"(matrix2fc0: $Matrix2fc$$Type): $Matrix3x2f
public "set"(matrix3x2fc0: $Matrix3x2fc$$Type): $Matrix3x2f
public "set"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $Matrix3x2f
public "set"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $Matrix3x2f
public "set"(byteBuffer0: $ByteBuffer$$Type): $Matrix3x2f
public "set"(floatBuffer0: $FloatBuffer$$Type): $Matrix3x2f
public "setFromAddress"(long0: long): $Matrix3x2f
public "setTranslation"(vector2f0: $Vector2f$$Type): $Matrix3x2f
public "setTranslation"(float0: float, float1: float): $Matrix3x2f
public "setView"(float0: float, float1: float, float2: float, float3: float): $Matrix3x2f
public "shearX"(float0: float): $Matrix3x2f
public "shearX"(float0: float, matrix3x2f1: $Matrix3x2f$$Type): $Matrix3x2f
public "shearY"(float0: float): $Matrix3x2f
public "shearY"(float0: float, matrix3x2f1: $Matrix3x2f$$Type): $Matrix3x2f
public "span"(vector2f0: $Vector2f$$Type, vector2f1: $Vector2f$$Type, vector2f2: $Vector2f$$Type): $Matrix3x2f
public "testAar"(float0: float, float1: float, float2: float, float3: float): boolean
public "testCircle"(float0: float, float1: float, float2: float): boolean
public "testPoint"(float0: float, float1: float): boolean
public "toString"(numberFormat0: $NumberFormat$$Type): string
public "transform"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
public "transform"(vector3f0: $Vector3f$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "transform"(vector3f0: $Vector3f$$Type): $Vector3f
public "transformDirection"(vector2fc0: $Vector2fc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
public "transformDirection"(vector2f0: $Vector2f$$Type): $Vector2f
public "transformDirection"(float0: float, float1: float, vector2f2: $Vector2f$$Type): $Vector2f
public "transformPosition"(float0: float, float1: float, vector2f2: $Vector2f$$Type): $Vector2f
public "transformPosition"(vector2fc0: $Vector2fc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
public "transformPosition"(vector2f0: $Vector2f$$Type): $Vector2f
public "translate"(vector2fc0: $Vector2fc$$Type, matrix3x2f1: $Matrix3x2f$$Type): $Matrix3x2f
public "translate"(float0: float, float1: float): $Matrix3x2f
public "translate"(vector2fc0: $Vector2fc$$Type): $Matrix3x2f
public "translate"(float0: float, float1: float, matrix3x2f2: $Matrix3x2f$$Type): $Matrix3x2f
public "translateLocal"(float0: float, float1: float): $Matrix3x2f
public "translateLocal"(vector2fc0: $Vector2fc$$Type, matrix3x2f1: $Matrix3x2f$$Type): $Matrix3x2f
public "translateLocal"(vector2fc0: $Vector2fc$$Type): $Matrix3x2f
public "translateLocal"(float0: float, float1: float, matrix3x2f2: $Matrix3x2f$$Type): $Matrix3x2f
public "translation"(float0: float, float1: float): $Matrix3x2f
public "translation"(vector2fc0: $Vector2fc$$Type): $Matrix3x2f
public "unproject"(float0: float, float1: float, int2s: integer[], vector2f3: $Vector2f$$Type): $Vector2f
public "unprojectInv"(float0: float, float1: float, int2s: integer[], vector2f3: $Vector2f$$Type): $Vector2f
public "view"(float0: float, float1: float, float2: float, float3: float, matrix3x2f4: $Matrix3x2f$$Type): $Matrix3x2f
public "view"(float0: float, float1: float, float2: float, float3: float): $Matrix3x2f
public "viewArea"(float0s: float[]): float[]
public "writeExternal"(objectOutput0: $ObjectOutput$$Type): void
public "zero"(): $Matrix3x2f
get "finite"(): boolean
set "fromAddress"(value: long)
}
}

declare module "org.joml.Matrix4fc" {
import { $Matrix3x2fc$$Type } from "org.joml.Matrix3x2fc"
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Quaternionf, $Quaternionf$$Type } from "org.joml.Quaternionf"
import { $Quaterniond, $Quaterniond$$Type } from "org.joml.Quaterniond"
import { $AxisAngle4f, $AxisAngle4f$$Type } from "org.joml.AxisAngle4f"
import { $Matrix4x3f, $Matrix4x3f$$Type } from "org.joml.Matrix4x3f"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $AxisAngle4d, $AxisAngle4d$$Type } from "org.joml.AxisAngle4d"
import { $Matrix4x3fc$$Type } from "org.joml.Matrix4x3fc"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $Vector2fc$$Type } from "org.joml.Vector2fc"
import { $Vector4fc$$Type } from "org.joml.Vector4fc"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Matrix3f, $Matrix3f$$Type } from "org.joml.Matrix3f"
import { $Vector4f, $Vector4f$$Type } from "org.joml.Vector4f"
import { $Matrix3d, $Matrix3d$$Type } from "org.joml.Matrix3d"
import { $Matrix4f, $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $Matrix4d, $Matrix4d$$Type } from "org.joml.Matrix4d"
import { $Quaternionfc$$Type } from "org.joml.Quaternionfc"

export interface $Matrix4fc {
"add"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
"add4x3"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
"arcball"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4f6: $Matrix4f$$Type): $Matrix4f
"arcball"(float0: float, vector3fc1: $Vector3fc$$Type, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
"cofactor3x3"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"cofactor3x3"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"determinant"(): float
"determinant3x3"(): float
"determinantAffine"(): float
"equals"(matrix4fc0: $Matrix4fc$$Type, float1: float): boolean
"fma4x3"(matrix4fc0: $Matrix4fc$$Type, float1: float, matrix4f2: $Matrix4f$$Type): $Matrix4f
"frustum"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4f6: $Matrix4f$$Type): $Matrix4f
"frustum"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean, matrix4f7: $Matrix4f$$Type): $Matrix4f
"frustumAabb"(vector3f0: $Vector3f$$Type, vector3f1: $Vector3f$$Type): $Matrix4f
"frustumCorner"(int0: integer, vector3f1: $Vector3f$$Type): $Vector3f
"frustumLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean, matrix4f7: $Matrix4f$$Type): $Matrix4f
"frustumLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4f6: $Matrix4f$$Type): $Matrix4f
"frustumPlane"(int0: integer, vector4f1: $Vector4f$$Type): $Vector4f
"frustumRayDir"(float0: float, float1: float, vector3f2: $Vector3f$$Type): $Vector3f
"get"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"get"(float0s: float[], int1: integer): float[]
"get"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"get"(matrix4d0: $Matrix4d$$Type): $Matrix4d
"get"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"get"(int0: integer, int1: integer): float
"get"(float0s: float[]): float[]
"get3x3"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"get3x3"(matrix3d0: $Matrix3d$$Type): $Matrix3d
"get3x4"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"get3x4"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"get3x4"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"get3x4"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"get4x3"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
"get4x3"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"get4x3"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"get4x3"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"get4x3"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"get4x3Transposed"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"get4x3Transposed"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"get4x3Transposed"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"get4x3Transposed"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"getColumn"(int0: integer, vector3f1: $Vector3f$$Type): $Vector3f
"getColumn"(int0: integer, vector4f1: $Vector4f$$Type): $Vector4f
"getEulerAnglesXYZ"(vector3f0: $Vector3f$$Type): $Vector3f
"getEulerAnglesZYX"(vector3f0: $Vector3f$$Type): $Vector3f
"getNormalizedRotation"(quaterniond0: $Quaterniond$$Type): $Quaterniond
"getNormalizedRotation"(quaternionf0: $Quaternionf$$Type): $Quaternionf
"getRotation"(axisAngle4f0: $AxisAngle4f$$Type): $AxisAngle4f
"getRotation"(axisAngle4d0: $AxisAngle4d$$Type): $AxisAngle4d
"getRow"(int0: integer, vector3f1: $Vector3f$$Type): $Vector3f
"getRow"(int0: integer, vector4f1: $Vector4f$$Type): $Vector4f
"getRowColumn"(int0: integer, int1: integer): float
"getScale"(vector3f0: $Vector3f$$Type): $Vector3f
"getToAddress"(long0: long): $Matrix4fc
"getTranslation"(vector3f0: $Vector3f$$Type): $Vector3f
"getTransposed"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"getTransposed"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"getTransposed"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"getTransposed"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"getUnnormalizedRotation"(quaternionf0: $Quaternionf$$Type): $Quaternionf
"getUnnormalizedRotation"(quaterniond0: $Quaterniond$$Type): $Quaterniond
"invert"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"invertAffine"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"invertFrustum"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"invertOrtho"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"invertPerspective"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"invertPerspectiveView"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
"invertPerspectiveView"(matrix4x3fc0: $Matrix4x3fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
"isAffine"(): boolean
"isFinite"(): boolean
"lerp"(matrix4fc0: $Matrix4fc$$Type, float1: float, matrix4f2: $Matrix4f$$Type): $Matrix4f
"lookAlong"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, matrix4f2: $Matrix4f$$Type): $Matrix4f
"lookAlong"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4f6: $Matrix4f$$Type): $Matrix4f
"lookAt"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, matrix4f9: $Matrix4f$$Type): $Matrix4f
"lookAt"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3fc2: $Vector3fc$$Type, matrix4f3: $Matrix4f$$Type): $Matrix4f
"lookAtLH"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3fc2: $Vector3fc$$Type, matrix4f3: $Matrix4f$$Type): $Matrix4f
"lookAtLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, matrix4f9: $Matrix4f$$Type): $Matrix4f
"lookAtPerspective"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, matrix4f9: $Matrix4f$$Type): $Matrix4f
"lookAtPerspectiveLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, matrix4f9: $Matrix4f$$Type): $Matrix4f
"m00"(): float
"m01"(): float
"m02"(): float
"m03"(): float
"m10"(): float
"m11"(): float
"m12"(): float
"m13"(): float
"m20"(): float
"m21"(): float
"m22"(): float
"m23"(): float
"m30"(): float
"m31"(): float
"m32"(): float
"m33"(): float
"mapXZY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapXZnY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapXnYnZ"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapXnZY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapXnZnY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapYXZ"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapYXnZ"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapYZX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapYZnX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapYnXZ"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapYnXnZ"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapYnZX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapYnZnX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapZXY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapZXnY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapZYX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapZYnX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapZnXY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapZnXnY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapZnYX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapZnYnX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapnXYnZ"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapnXZY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapnXZnY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapnXnYZ"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapnXnYnZ"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapnXnZY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapnXnZnY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapnYXZ"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapnYXnZ"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapnYZX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapnYZnX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapnYnXZ"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapnYnXnZ"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapnYnZX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapnYnZnX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapnZXY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapnZXnY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapnZYX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapnZYnX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapnZnXY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapnZnXnY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapnZnYX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mapnZnYnX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"mul"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
"mul"(matrix3x2fc0: $Matrix3x2fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
"mul"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, float9: float, float10: float, float11: float, float12: float, float13: float, float14: float, float15: float, matrix4f16: $Matrix4f$$Type): $Matrix4f
"mul"(matrix4x3fc0: $Matrix4x3fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
"mul0"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
"mul3x3"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, matrix4f9: $Matrix4f$$Type): $Matrix4f
"mul4x3ComponentWise"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
"mulAffine"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
"mulAffineR"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
"mulComponentWise"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
"mulLocal"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
"mulLocalAffine"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
"mulOrthoAffine"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
"mulPerspectiveAffine"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
"mulPerspectiveAffine"(matrix4x3fc0: $Matrix4x3fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
"mulTranslationAffine"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
"negateX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"negateY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"negateZ"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"normal"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"normal"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"normalize3x3"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"normalize3x3"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"normalizedPositiveX"(vector3f0: $Vector3f$$Type): $Vector3f
"normalizedPositiveY"(vector3f0: $Vector3f$$Type): $Vector3f
"normalizedPositiveZ"(vector3f0: $Vector3f$$Type): $Vector3f
"obliqueZ"(float0: float, float1: float, matrix4f2: $Matrix4f$$Type): $Matrix4f
"origin"(vector3f0: $Vector3f$$Type): $Vector3f
"originAffine"(vector3f0: $Vector3f$$Type): $Vector3f
"ortho"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4f6: $Matrix4f$$Type): $Matrix4f
"ortho"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean, matrix4f7: $Matrix4f$$Type): $Matrix4f
"ortho2D"(float0: float, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
"ortho2DLH"(float0: float, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
"orthoCrop"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
"orthoLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean, matrix4f7: $Matrix4f$$Type): $Matrix4f
"orthoLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4f6: $Matrix4f$$Type): $Matrix4f
"orthoSymmetric"(float0: float, float1: float, float2: float, float3: float, boolean4: boolean, matrix4f5: $Matrix4f$$Type): $Matrix4f
"orthoSymmetric"(float0: float, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
"orthoSymmetricLH"(float0: float, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
"orthoSymmetricLH"(float0: float, float1: float, float2: float, float3: float, boolean4: boolean, matrix4f5: $Matrix4f$$Type): $Matrix4f
"perspective"(float0: float, float1: float, float2: float, float3: float, boolean4: boolean, matrix4f5: $Matrix4f$$Type): $Matrix4f
"perspective"(float0: float, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
"perspectiveFar"(): float
"perspectiveFov"(): float
"perspectiveFrustumSlice"(float0: float, float1: float, matrix4f2: $Matrix4f$$Type): $Matrix4f
"perspectiveInvOrigin"(vector3f0: $Vector3f$$Type): $Vector3f
"perspectiveLH"(float0: float, float1: float, float2: float, float3: float, boolean4: boolean, matrix4f5: $Matrix4f$$Type): $Matrix4f
"perspectiveLH"(float0: float, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
"perspectiveNear"(): float
"perspectiveOffCenter"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4f6: $Matrix4f$$Type): $Matrix4f
"perspectiveOffCenter"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean, matrix4f7: $Matrix4f$$Type): $Matrix4f
"perspectiveOffCenterFov"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4f6: $Matrix4f$$Type): $Matrix4f
"perspectiveOffCenterFov"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean, matrix4f7: $Matrix4f$$Type): $Matrix4f
"perspectiveOffCenterFovLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean, matrix4f7: $Matrix4f$$Type): $Matrix4f
"perspectiveOffCenterFovLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4f6: $Matrix4f$$Type): $Matrix4f
"perspectiveOrigin"(vector3f0: $Vector3f$$Type): $Vector3f
"perspectiveRect"(float0: float, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
"perspectiveRect"(float0: float, float1: float, float2: float, float3: float, boolean4: boolean, matrix4f5: $Matrix4f$$Type): $Matrix4f
"pick"(float0: float, float1: float, float2: float, float3: float, int4s: integer[], matrix4f5: $Matrix4f$$Type): $Matrix4f
"positiveX"(vector3f0: $Vector3f$$Type): $Vector3f
"positiveY"(vector3f0: $Vector3f$$Type): $Vector3f
"positiveZ"(vector3f0: $Vector3f$$Type): $Vector3f
"project"(float0: float, float1: float, float2: float, int3s: integer[], vector4f4: $Vector4f$$Type): $Vector4f
"project"(vector3fc0: $Vector3fc$$Type, int1s: integer[], vector3f2: $Vector3f$$Type): $Vector3f
"project"(vector3fc0: $Vector3fc$$Type, int1s: integer[], vector4f2: $Vector4f$$Type): $Vector4f
"project"(float0: float, float1: float, float2: float, int3s: integer[], vector3f4: $Vector3f$$Type): $Vector3f
"projectedGridRange"(matrix4fc0: $Matrix4fc$$Type, float1: float, float2: float, matrix4f3: $Matrix4f$$Type): $Matrix4f
"properties"(): integer
"reflect"(quaternionfc0: $Quaternionfc$$Type, vector3fc1: $Vector3fc$$Type, matrix4f2: $Matrix4f$$Type): $Matrix4f
"reflect"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, matrix4f2: $Matrix4f$$Type): $Matrix4f
"reflect"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4f6: $Matrix4f$$Type): $Matrix4f
"reflect"(float0: float, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
"rotate"(float0: float, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
"rotate"(float0: float, vector3fc1: $Vector3fc$$Type, matrix4f2: $Matrix4f$$Type): $Matrix4f
"rotate"(quaternionfc0: $Quaternionfc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
"rotate"(axisAngle4f0: $AxisAngle4f$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
"rotateAffine"(quaternionfc0: $Quaternionfc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
"rotateAffine"(float0: float, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
"rotateAffineXYZ"(float0: float, float1: float, float2: float, matrix4f3: $Matrix4f$$Type): $Matrix4f
"rotateAffineYXZ"(float0: float, float1: float, float2: float, matrix4f3: $Matrix4f$$Type): $Matrix4f
"rotateAffineZYX"(float0: float, float1: float, float2: float, matrix4f3: $Matrix4f$$Type): $Matrix4f
"rotateAround"(quaternionfc0: $Quaternionfc$$Type, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
"rotateAroundAffine"(quaternionfc0: $Quaternionfc$$Type, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
"rotateAroundLocal"(quaternionfc0: $Quaternionfc$$Type, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
"rotateLocal"(float0: float, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
"rotateLocal"(quaternionfc0: $Quaternionfc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
"rotateLocalX"(float0: float, matrix4f1: $Matrix4f$$Type): $Matrix4f
"rotateLocalY"(float0: float, matrix4f1: $Matrix4f$$Type): $Matrix4f
"rotateLocalZ"(float0: float, matrix4f1: $Matrix4f$$Type): $Matrix4f
"rotateTowards"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, matrix4f2: $Matrix4f$$Type): $Matrix4f
"rotateTowards"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4f6: $Matrix4f$$Type): $Matrix4f
"rotateTowardsXY"(float0: float, float1: float, matrix4f2: $Matrix4f$$Type): $Matrix4f
"rotateTranslation"(quaternionfc0: $Quaternionfc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
"rotateTranslation"(float0: float, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
"rotateX"(float0: float, matrix4f1: $Matrix4f$$Type): $Matrix4f
"rotateXYZ"(float0: float, float1: float, float2: float, matrix4f3: $Matrix4f$$Type): $Matrix4f
"rotateY"(float0: float, matrix4f1: $Matrix4f$$Type): $Matrix4f
"rotateYXZ"(float0: float, float1: float, float2: float, matrix4f3: $Matrix4f$$Type): $Matrix4f
"rotateZ"(float0: float, matrix4f1: $Matrix4f$$Type): $Matrix4f
"rotateZYX"(float0: float, float1: float, float2: float, matrix4f3: $Matrix4f$$Type): $Matrix4f
"scale"(vector3fc0: $Vector3fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
"scale"(float0: float, float1: float, float2: float, matrix4f3: $Matrix4f$$Type): $Matrix4f
"scale"(float0: float, matrix4f1: $Matrix4f$$Type): $Matrix4f
"scaleAround"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4f6: $Matrix4f$$Type): $Matrix4f
"scaleAround"(float0: float, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
"scaleAroundLocal"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4f6: $Matrix4f$$Type): $Matrix4f
"scaleAroundLocal"(float0: float, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
"scaleLocal"(float0: float, matrix4f1: $Matrix4f$$Type): $Matrix4f
"scaleLocal"(float0: float, float1: float, float2: float, matrix4f3: $Matrix4f$$Type): $Matrix4f
"scaleXY"(float0: float, float1: float, matrix4f2: $Matrix4f$$Type): $Matrix4f
"shadow"(float0: float, float1: float, float2: float, float3: float, matrix4fc4: $Matrix4fc$$Type, matrix4f5: $Matrix4f$$Type): $Matrix4f
"shadow"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, matrix4f8: $Matrix4f$$Type): $Matrix4f
"shadow"(vector4f0: $Vector4f$$Type, matrix4fc1: $Matrix4fc$$Type, matrix4f2: $Matrix4f$$Type): $Matrix4f
"shadow"(vector4f0: $Vector4f$$Type, float1: float, float2: float, float3: float, float4: float, matrix4f5: $Matrix4f$$Type): $Matrix4f
"sub"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
"sub4x3"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
"testAab"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): boolean
"testPoint"(float0: float, float1: float, float2: float): boolean
"testSphere"(float0: float, float1: float, float2: float, float3: float): boolean
"tile"(int0: integer, int1: integer, int2: integer, int3: integer, matrix4f4: $Matrix4f$$Type): $Matrix4f
"transform"(float0: float, float1: float, float2: float, float3: float, vector4f4: $Vector4f$$Type): $Vector4f
"transform"(vector4f0: $Vector4f$$Type): $Vector4f
"transform"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
"transformAab"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3f2: $Vector3f$$Type, vector3f3: $Vector3f$$Type): $Matrix4f
"transformAab"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, vector3f6: $Vector3f$$Type, vector3f7: $Vector3f$$Type): $Matrix4f
"transformAffine"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
"transformAffine"(vector4f0: $Vector4f$$Type): $Vector4f
"transformAffine"(float0: float, float1: float, float2: float, float3: float, vector4f4: $Vector4f$$Type): $Vector4f
"transformDirection"(vector3f0: $Vector3f$$Type): $Vector3f
"transformDirection"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"transformDirection"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
"transformPosition"(vector3f0: $Vector3f$$Type): $Vector3f
"transformPosition"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"transformPosition"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
"transformProject"(vector4f0: $Vector4f$$Type): $Vector4f
"transformProject"(vector3f0: $Vector3f$$Type): $Vector3f
"transformProject"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
"transformProject"(float0: float, float1: float, float2: float, float3: float, vector4f4: $Vector4f$$Type): $Vector4f
"transformProject"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"transformProject"(vector4fc0: $Vector4fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"transformProject"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
"transformProject"(float0: float, float1: float, float2: float, float3: float, vector3f4: $Vector3f$$Type): $Vector3f
"transformTranspose"(vector4f0: $Vector4f$$Type): $Vector4f
"transformTranspose"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
"transformTranspose"(float0: float, float1: float, float2: float, float3: float, vector4f4: $Vector4f$$Type): $Vector4f
"translate"(float0: float, float1: float, float2: float, matrix4f3: $Matrix4f$$Type): $Matrix4f
"translate"(vector3fc0: $Vector3fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
"translateLocal"(vector3fc0: $Vector3fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
"translateLocal"(float0: float, float1: float, float2: float, matrix4f3: $Matrix4f$$Type): $Matrix4f
"transpose"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"transpose3x3"(matrix4f0: $Matrix4f$$Type): $Matrix4f
"transpose3x3"(matrix3f0: $Matrix3f$$Type): $Matrix3f
"unproject"(float0: float, float1: float, float2: float, int3s: integer[], vector4f4: $Vector4f$$Type): $Vector4f
"unproject"(float0: float, float1: float, float2: float, int3s: integer[], vector3f4: $Vector3f$$Type): $Vector3f
"unproject"(vector3fc0: $Vector3fc$$Type, int1s: integer[], vector3f2: $Vector3f$$Type): $Vector3f
"unproject"(vector3fc0: $Vector3fc$$Type, int1s: integer[], vector4f2: $Vector4f$$Type): $Vector4f
"unprojectInv"(vector3fc0: $Vector3fc$$Type, int1s: integer[], vector3f2: $Vector3f$$Type): $Vector3f
"unprojectInv"(float0: float, float1: float, float2: float, int3s: integer[], vector4f4: $Vector4f$$Type): $Vector4f
"unprojectInv"(vector3fc0: $Vector3fc$$Type, int1s: integer[], vector4f2: $Vector4f$$Type): $Vector4f
"unprojectInv"(float0: float, float1: float, float2: float, int3s: integer[], vector3f4: $Vector3f$$Type): $Vector3f
"unprojectInvRay"(vector2fc0: $Vector2fc$$Type, int1s: integer[], vector3f2: $Vector3f$$Type, vector3f3: $Vector3f$$Type): $Matrix4f
"unprojectInvRay"(float0: float, float1: float, int2s: integer[], vector3f3: $Vector3f$$Type, vector3f4: $Vector3f$$Type): $Matrix4f
"unprojectRay"(vector2fc0: $Vector2fc$$Type, int1s: integer[], vector3f2: $Vector3f$$Type, vector3f3: $Vector3f$$Type): $Matrix4f
"unprojectRay"(float0: float, float1: float, int2s: integer[], vector3f3: $Vector3f$$Type, vector3f4: $Vector3f$$Type): $Matrix4f
"withLookAtUp"(float0: float, float1: float, float2: float, matrix4f3: $Matrix4f$$Type): $Matrix4f
"withLookAtUp"(vector3fc0: $Vector3fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
get "affine"(): boolean
get "finite"(): boolean
}

export namespace $Matrix4fc {
const CORNER_NXNYNZ: integer
const CORNER_NXNYPZ: integer
const CORNER_NXPYNZ: integer
const CORNER_NXPYPZ: integer
const CORNER_PXNYNZ: integer
const CORNER_PXNYPZ: integer
const CORNER_PXPYNZ: integer
const CORNER_PXPYPZ: integer
const PLANE_NX: integer
const PLANE_NY: integer
const PLANE_NZ: integer
const PLANE_PX: integer
const PLANE_PY: integer
const PLANE_PZ: integer
const PROPERTY_AFFINE: byte
const PROPERTY_IDENTITY: byte
const PROPERTY_ORTHONORMAL: byte
const PROPERTY_PERSPECTIVE: byte
const PROPERTY_TRANSLATION: byte
}
export abstract class $Matrix4fc$$Static implements $Matrix4fc {
static readonly "CORNER_NXNYNZ": integer
static readonly "CORNER_NXNYPZ": integer
static readonly "CORNER_NXPYNZ": integer
static readonly "CORNER_NXPYPZ": integer
static readonly "CORNER_PXNYNZ": integer
static readonly "CORNER_PXNYPZ": integer
static readonly "CORNER_PXPYNZ": integer
static readonly "CORNER_PXPYPZ": integer
static readonly "PLANE_NX": integer
static readonly "PLANE_NY": integer
static readonly "PLANE_NZ": integer
static readonly "PLANE_PX": integer
static readonly "PLANE_PY": integer
static readonly "PLANE_PZ": integer
static readonly "PROPERTY_AFFINE": byte
static readonly "PROPERTY_IDENTITY": byte
static readonly "PROPERTY_ORTHONORMAL": byte
static readonly "PROPERTY_PERSPECTIVE": byte
static readonly "PROPERTY_TRANSLATION": byte

}
}

declare module "org.joml.Vector4dc" {
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $DoubleBuffer, $DoubleBuffer$$Type } from "java.nio.DoubleBuffer"
import { $Matrix4dc$$Type } from "org.joml.Matrix4dc"
import { $Matrix4fc$$Type } from "org.joml.Matrix4fc"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $Matrix4x3fc$$Type } from "org.joml.Matrix4x3fc"
import { $Vector4i, $Vector4i$$Type } from "org.joml.Vector4i"
import { $Matrix4x3dc$$Type } from "org.joml.Matrix4x3dc"
import { $Vector4fc$$Type } from "org.joml.Vector4fc"
import { $Quaterniondc$$Type } from "org.joml.Quaterniondc"
import { $Vector3d, $Vector3d$$Type } from "org.joml.Vector3d"
import { $Vector4f, $Vector4f$$Type } from "org.joml.Vector4f"
import { $Vector4d, $Vector4d$$Type } from "org.joml.Vector4d"

export interface $Vector4dc {
"absolute"(vector4d0: $Vector4d$$Type): $Vector4d
"add"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"add"(vector4fc0: $Vector4fc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"add"(double0: double, double1: double, double2: double, double3: double, vector4d4: $Vector4d$$Type): $Vector4d
"angle"(vector4dc0: $Vector4dc$$Type): double
"angleCos"(vector4dc0: $Vector4dc$$Type): double
"ceil"(vector4d0: $Vector4d$$Type): $Vector4d
"distance"(vector4dc0: $Vector4dc$$Type): double
"distance"(double0: double, double1: double, double2: double, double3: double): double
"distanceSquared"(vector4dc0: $Vector4dc$$Type): double
"distanceSquared"(double0: double, double1: double, double2: double, double3: double): double
"div"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"div"(double0: double, vector4d1: $Vector4d$$Type): $Vector4d
"dot"(vector4dc0: $Vector4dc$$Type): double
"dot"(double0: double, double1: double, double2: double, double3: double): double
"equals"(vector4dc0: $Vector4dc$$Type, double1: double): boolean
"equals"(double0: double, double1: double, double2: double, double3: double): boolean
"floor"(vector4d0: $Vector4d$$Type): $Vector4d
"fma"(vector4dc0: $Vector4dc$$Type, vector4dc1: $Vector4dc$$Type, vector4d2: $Vector4d$$Type): $Vector4d
"fma"(double0: double, vector4dc1: $Vector4dc$$Type, vector4d2: $Vector4d$$Type): $Vector4d
"get"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"get"(vector4d0: $Vector4d$$Type): $Vector4d
"get"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"get"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
"get"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
"get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"get"(int0: integer): double
"get"(int0: integer, vector4i1: $Vector4i$$Type): $Vector4i
"get"(vector4f0: $Vector4f$$Type): $Vector4f
"getToAddress"(long0: long): $Vector4dc
"getf"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"getf"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"hermite"(vector4dc0: $Vector4dc$$Type, vector4dc1: $Vector4dc$$Type, vector4dc2: $Vector4dc$$Type, double3: double, vector4d4: $Vector4d$$Type): $Vector4d
"isFinite"(): boolean
"length"(): double
"lengthSquared"(): double
"lerp"(vector4dc0: $Vector4dc$$Type, double1: double, vector4d2: $Vector4d$$Type): $Vector4d
"max"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"maxComponent"(): integer
"min"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"minComponent"(): integer
"mul"(double0: double, vector4d1: $Vector4d$$Type): $Vector4d
"mul"(matrix4dc0: $Matrix4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"mul"(vector4fc0: $Vector4fc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"mul"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"mul"(matrix4fc0: $Matrix4fc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"mul"(matrix4x3dc0: $Matrix4x3dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"mul"(matrix4x3fc0: $Matrix4x3fc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"mulAdd"(vector4dc0: $Vector4dc$$Type, vector4dc1: $Vector4dc$$Type, vector4d2: $Vector4d$$Type): $Vector4d
"mulAdd"(double0: double, vector4dc1: $Vector4dc$$Type, vector4d2: $Vector4d$$Type): $Vector4d
"mulAffine"(matrix4dc0: $Matrix4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"mulAffineTranspose"(matrix4dc0: $Matrix4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"mulProject"(matrix4dc0: $Matrix4dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"mulProject"(matrix4dc0: $Matrix4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"mulTranspose"(matrix4dc0: $Matrix4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"negate"(vector4d0: $Vector4d$$Type): $Vector4d
"normalize"(vector4d0: $Vector4d$$Type): $Vector4d
"normalize"(double0: double, vector4d1: $Vector4d$$Type): $Vector4d
"normalize3"(vector4d0: $Vector4d$$Type): $Vector4d
"rotate"(quaterniondc0: $Quaterniondc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"rotateAxis"(double0: double, double1: double, double2: double, double3: double, vector4d4: $Vector4d$$Type): $Vector4d
"rotateX"(double0: double, vector4d1: $Vector4d$$Type): $Vector4d
"rotateY"(double0: double, vector4d1: $Vector4d$$Type): $Vector4d
"rotateZ"(double0: double, vector4d1: $Vector4d$$Type): $Vector4d
"round"(vector4d0: $Vector4d$$Type): $Vector4d
"smoothStep"(vector4dc0: $Vector4dc$$Type, double1: double, vector4d2: $Vector4d$$Type): $Vector4d
"sub"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"sub"(vector4fc0: $Vector4fc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
"sub"(double0: double, double1: double, double2: double, double3: double, vector4d4: $Vector4d$$Type): $Vector4d
"w"(): double
"x"(): double
"y"(): double
"z"(): double
get "finite"(): boolean
}

export namespace $Vector4dc {
const probejs$$marker: never
}
export abstract class $Vector4dc$$Static implements $Vector4dc {
}
}

declare module "org.joml.Vector3dc" {
import { $Matrix3x2fc$$Type } from "org.joml.Matrix3x2fc"
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Matrix3x2dc$$Type } from "org.joml.Matrix3x2dc"
import { $DoubleBuffer, $DoubleBuffer$$Type } from "java.nio.DoubleBuffer"
import { $Quaterniond, $Quaterniond$$Type } from "org.joml.Quaterniond"
import { $Matrix4dc$$Type } from "org.joml.Matrix4dc"
import { $Matrix3dc$$Type } from "org.joml.Matrix3dc"
import { $Matrix4fc$$Type } from "org.joml.Matrix4fc"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $Matrix4x3fc$$Type } from "org.joml.Matrix4x3fc"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $Matrix3fc$$Type } from "org.joml.Matrix3fc"
import { $Matrix4x3dc$$Type } from "org.joml.Matrix4x3dc"
import { $Vector3i, $Vector3i$$Type } from "org.joml.Vector3i"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Quaterniondc$$Type } from "org.joml.Quaterniondc"
import { $Vector3d, $Vector3d$$Type } from "org.joml.Vector3d"

export interface $Vector3dc {
"absolute"(vector3d0: $Vector3d$$Type): $Vector3d
"add"(vector3fc0: $Vector3fc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"add"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"add"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
"angle"(vector3dc0: $Vector3dc$$Type): double
"angleCos"(vector3dc0: $Vector3dc$$Type): double
"angleSigned"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): double
"angleSigned"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type): double
"ceil"(vector3d0: $Vector3d$$Type): $Vector3d
"cross"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
"cross"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"distance"(double0: double, double1: double, double2: double): double
"distance"(vector3dc0: $Vector3dc$$Type): double
"distanceSquared"(vector3dc0: $Vector3dc$$Type): double
"distanceSquared"(double0: double, double1: double, double2: double): double
"div"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"div"(vector3fc0: $Vector3fc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"div"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
"div"(double0: double, vector3d1: $Vector3d$$Type): $Vector3d
"dot"(double0: double, double1: double, double2: double): double
"dot"(vector3dc0: $Vector3dc$$Type): double
"equals"(vector3dc0: $Vector3dc$$Type, double1: double): boolean
"equals"(double0: double, double1: double, double2: double): boolean
"floor"(vector3d0: $Vector3d$$Type): $Vector3d
"fma"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3d2: $Vector3d$$Type): $Vector3d
"fma"(double0: double, vector3fc1: $Vector3fc$$Type, vector3d2: $Vector3d$$Type): $Vector3d
"fma"(vector3dc0: $Vector3dc$$Type, vector3fc1: $Vector3fc$$Type, vector3d2: $Vector3d$$Type): $Vector3d
"fma"(double0: double, vector3dc1: $Vector3dc$$Type, vector3d2: $Vector3d$$Type): $Vector3d
"fma"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3d2: $Vector3d$$Type): $Vector3d
"get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"get"(vector3d0: $Vector3d$$Type): $Vector3d
"get"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
"get"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"get"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"get"(vector3f0: $Vector3f$$Type): $Vector3f
"get"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
"get"(int0: integer): double
"get"(int0: integer, vector3i1: $Vector3i$$Type): $Vector3i
"getToAddress"(long0: long): $Vector3dc
"getf"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"getf"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"half"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
"half"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"hermite"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3dc2: $Vector3dc$$Type, double3: double, vector3d4: $Vector3d$$Type): $Vector3d
"isFinite"(): boolean
"length"(): double
"lengthSquared"(): double
"lerp"(vector3dc0: $Vector3dc$$Type, double1: double, vector3d2: $Vector3d$$Type): $Vector3d
"max"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"maxComponent"(): integer
"min"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"minComponent"(): integer
"mul"(matrix3x2dc0: $Matrix3x2dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"mul"(matrix3fc0: $Matrix3fc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"mul"(matrix3x2fc0: $Matrix3x2fc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"mul"(matrix3dc0: $Matrix3dc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"mul"(matrix3dc0: $Matrix3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"mul"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"mul"(vector3fc0: $Vector3fc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"mul"(double0: double, vector3d1: $Vector3d$$Type): $Vector3d
"mul"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
"mulAdd"(double0: double, vector3dc1: $Vector3dc$$Type, vector3d2: $Vector3d$$Type): $Vector3d
"mulAdd"(vector3fc0: $Vector3fc$$Type, vector3dc1: $Vector3dc$$Type, vector3d2: $Vector3d$$Type): $Vector3d
"mulAdd"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3d2: $Vector3d$$Type): $Vector3d
"mulDirection"(matrix4fc0: $Matrix4fc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"mulDirection"(matrix4x3fc0: $Matrix4x3fc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"mulDirection"(matrix4dc0: $Matrix4dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"mulDirection"(matrix4x3dc0: $Matrix4x3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"mulPosition"(matrix4dc0: $Matrix4dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"mulPosition"(matrix4fc0: $Matrix4fc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"mulPosition"(matrix4x3dc0: $Matrix4x3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"mulPosition"(matrix4x3fc0: $Matrix4x3fc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"mulPositionW"(matrix4fc0: $Matrix4fc$$Type, vector3d1: $Vector3d$$Type): double
"mulPositionW"(matrix4dc0: $Matrix4dc$$Type, vector3d1: $Vector3d$$Type): double
"mulProject"(matrix4dc0: $Matrix4dc$$Type, double1: double, vector3d2: $Vector3d$$Type): $Vector3d
"mulProject"(matrix4fc0: $Matrix4fc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"mulProject"(matrix4dc0: $Matrix4dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"mulTranspose"(matrix3dc0: $Matrix3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"mulTranspose"(matrix3fc0: $Matrix3fc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"mulTransposeDirection"(matrix4fc0: $Matrix4fc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"mulTransposeDirection"(matrix4dc0: $Matrix4dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"mulTransposePosition"(matrix4dc0: $Matrix4dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"mulTransposePosition"(matrix4fc0: $Matrix4fc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"negate"(vector3d0: $Vector3d$$Type): $Vector3d
"normalize"(vector3d0: $Vector3d$$Type): $Vector3d
"normalize"(double0: double, vector3d1: $Vector3d$$Type): $Vector3d
"orthogonalize"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"orthogonalizeUnit"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"reflect"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
"reflect"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"rotate"(quaterniondc0: $Quaterniondc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"rotateAxis"(double0: double, double1: double, double2: double, double3: double, vector3d4: $Vector3d$$Type): $Vector3d
"rotateX"(double0: double, vector3d1: $Vector3d$$Type): $Vector3d
"rotateY"(double0: double, vector3d1: $Vector3d$$Type): $Vector3d
"rotateZ"(double0: double, vector3d1: $Vector3d$$Type): $Vector3d
"rotationTo"(vector3dc0: $Vector3dc$$Type, quaterniond1: $Quaterniond$$Type): $Quaterniond
"rotationTo"(double0: double, double1: double, double2: double, quaterniond3: $Quaterniond$$Type): $Quaterniond
"round"(vector3d0: $Vector3d$$Type): $Vector3d
"smoothStep"(vector3dc0: $Vector3dc$$Type, double1: double, vector3d2: $Vector3d$$Type): $Vector3d
"sub"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"sub"(vector3fc0: $Vector3fc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"sub"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
"x"(): double
"y"(): double
"z"(): double
get "finite"(): boolean
}

export namespace $Vector3dc {
const probejs$$marker: never
}
export abstract class $Vector3dc$$Static implements $Vector3dc {
}
}

declare module "org.joml.Vector3fc" {
import { $Matrix3x2fc$$Type } from "org.joml.Matrix3x2fc"
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Quaternionf, $Quaternionf$$Type } from "org.joml.Quaternionf"
import { $Matrix4dc$$Type } from "org.joml.Matrix4dc"
import { $Matrix3dc$$Type } from "org.joml.Matrix3dc"
import { $Matrix4fc$$Type } from "org.joml.Matrix4fc"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $Matrix4x3fc$$Type } from "org.joml.Matrix4x3fc"
import { $Matrix3fc$$Type } from "org.joml.Matrix3fc"
import { $Vector3i, $Vector3i$$Type } from "org.joml.Vector3i"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Vector3d, $Vector3d$$Type } from "org.joml.Vector3d"
import { $Quaternionfc$$Type } from "org.joml.Quaternionfc"

export interface $Vector3fc {
"absolute"(vector3f0: $Vector3f$$Type): $Vector3f
"add"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"add"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
"angle"(vector3fc0: $Vector3fc$$Type): float
"angleCos"(vector3fc0: $Vector3fc$$Type): float
"angleSigned"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): float
"angleSigned"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type): float
"ceil"(vector3f0: $Vector3f$$Type): $Vector3f
"cross"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
"cross"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"distance"(float0: float, float1: float, float2: float): float
"distance"(vector3fc0: $Vector3fc$$Type): float
"distanceSquared"(float0: float, float1: float, float2: float): float
"distanceSquared"(vector3fc0: $Vector3fc$$Type): float
"div"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
"div"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"div"(float0: float, vector3f1: $Vector3f$$Type): $Vector3f
"dot"(float0: float, float1: float, float2: float): float
"dot"(vector3fc0: $Vector3fc$$Type): float
"equals"(vector3fc0: $Vector3fc$$Type, float1: float): boolean
"equals"(float0: float, float1: float, float2: float): boolean
"floor"(vector3f0: $Vector3f$$Type): $Vector3f
"fma"(float0: float, vector3fc1: $Vector3fc$$Type, vector3f2: $Vector3f$$Type): $Vector3f
"fma"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3f2: $Vector3f$$Type): $Vector3f
"get"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"get"(int0: integer): float
"get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"get"(vector3f0: $Vector3f$$Type): $Vector3f
"get"(vector3d0: $Vector3d$$Type): $Vector3d
"get"(int0: integer, vector3i1: $Vector3i$$Type): $Vector3i
"get"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"getToAddress"(long0: long): $Vector3fc
"half"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
"half"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"hermite"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3fc2: $Vector3fc$$Type, float3: float, vector3f4: $Vector3f$$Type): $Vector3f
"isFinite"(): boolean
"length"(): float
"lengthSquared"(): float
"lerp"(vector3fc0: $Vector3fc$$Type, float1: float, vector3f2: $Vector3f$$Type): $Vector3f
"max"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"maxComponent"(): integer
"min"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"minComponent"(): integer
"mul"(matrix3x2fc0: $Matrix3x2fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"mul"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
"mul"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"mul"(matrix3fc0: $Matrix3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"mul"(matrix3dc0: $Matrix3dc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"mul"(float0: float, vector3f1: $Vector3f$$Type): $Vector3f
"mulAdd"(float0: float, vector3fc1: $Vector3fc$$Type, vector3f2: $Vector3f$$Type): $Vector3f
"mulAdd"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3f2: $Vector3f$$Type): $Vector3f
"mulDirection"(matrix4fc0: $Matrix4fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"mulDirection"(matrix4x3fc0: $Matrix4x3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"mulDirection"(matrix4dc0: $Matrix4dc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"mulPosition"(matrix4x3fc0: $Matrix4x3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"mulPosition"(matrix4fc0: $Matrix4fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"mulPositionW"(matrix4fc0: $Matrix4fc$$Type, vector3f1: $Vector3f$$Type): float
"mulProject"(matrix4fc0: $Matrix4fc$$Type, float1: float, vector3f2: $Vector3f$$Type): $Vector3f
"mulProject"(matrix4fc0: $Matrix4fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"mulTranspose"(matrix3fc0: $Matrix3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"mulTransposeDirection"(matrix4fc0: $Matrix4fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"mulTransposePosition"(matrix4fc0: $Matrix4fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"negate"(vector3f0: $Vector3f$$Type): $Vector3f
"normalize"(float0: float, vector3f1: $Vector3f$$Type): $Vector3f
"normalize"(vector3f0: $Vector3f$$Type): $Vector3f
"orthogonalize"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"orthogonalizeUnit"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"reflect"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"reflect"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
"rotate"(quaternionfc0: $Quaternionfc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"rotateAxis"(float0: float, float1: float, float2: float, float3: float, vector3f4: $Vector3f$$Type): $Vector3f
"rotateX"(float0: float, vector3f1: $Vector3f$$Type): $Vector3f
"rotateY"(float0: float, vector3f1: $Vector3f$$Type): $Vector3f
"rotateZ"(float0: float, vector3f1: $Vector3f$$Type): $Vector3f
"rotationTo"(float0: float, float1: float, float2: float, quaternionf3: $Quaternionf$$Type): $Quaternionf
"rotationTo"(vector3fc0: $Vector3fc$$Type, quaternionf1: $Quaternionf$$Type): $Quaternionf
"round"(vector3f0: $Vector3f$$Type): $Vector3f
"smoothStep"(vector3fc0: $Vector3fc$$Type, float1: float, vector3f2: $Vector3f$$Type): $Vector3f
"sub"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
"sub"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"x"(): float
"y"(): float
"z"(): float
get "finite"(): boolean
}

export namespace $Vector3fc {
const probejs$$marker: never
}
export abstract class $Vector3fc$$Static implements $Vector3fc {
}
}

declare module "org.joml.Vector3ic" {
import { $IntBuffer, $IntBuffer$$Type } from "java.nio.IntBuffer"
import { $Vector3i, $Vector3i$$Type } from "org.joml.Vector3i"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export interface $Vector3ic {
"absolute"(vector3i0: $Vector3i$$Type): $Vector3i
"add"(int0: integer, int1: integer, int2: integer, vector3i3: $Vector3i$$Type): $Vector3i
"add"(vector3ic0: $Vector3ic$$Type, vector3i1: $Vector3i$$Type): $Vector3i
"distance"(int0: integer, int1: integer, int2: integer): double
"distance"(vector3ic0: $Vector3ic$$Type): double
"distanceSquared"(int0: integer, int1: integer, int2: integer): long
"distanceSquared"(vector3ic0: $Vector3ic$$Type): long
"div"(int0: integer, vector3i1: $Vector3i$$Type): $Vector3i
"div"(float0: float, vector3i1: $Vector3i$$Type): $Vector3i
"equals"(int0: integer, int1: integer, int2: integer): boolean
"get"(intBuffer0: $IntBuffer$$Type): $IntBuffer
"get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"get"(int0: integer, intBuffer1: $IntBuffer$$Type): $IntBuffer
"get"(int0: integer): integer
"get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"getToAddress"(long0: long): $Vector3ic
"gridDistance"(int0: integer, int1: integer, int2: integer): long
"gridDistance"(vector3ic0: $Vector3ic$$Type): long
"length"(): double
"lengthSquared"(): long
"max"(vector3ic0: $Vector3ic$$Type, vector3i1: $Vector3i$$Type): $Vector3i
"maxComponent"(): integer
"min"(vector3ic0: $Vector3ic$$Type, vector3i1: $Vector3i$$Type): $Vector3i
"minComponent"(): integer
"mul"(vector3ic0: $Vector3ic$$Type, vector3i1: $Vector3i$$Type): $Vector3i
"mul"(int0: integer, int1: integer, int2: integer, vector3i3: $Vector3i$$Type): $Vector3i
"mul"(int0: integer, vector3i1: $Vector3i$$Type): $Vector3i
"negate"(vector3i0: $Vector3i$$Type): $Vector3i
"sub"(vector3ic0: $Vector3ic$$Type, vector3i1: $Vector3i$$Type): $Vector3i
"sub"(int0: integer, int1: integer, int2: integer, vector3i3: $Vector3i$$Type): $Vector3i
"x"(): integer
"y"(): integer
"z"(): integer
}

export namespace $Vector3ic {
const probejs$$marker: never
}
export abstract class $Vector3ic$$Static implements $Vector3ic {
}
}

declare module "org.joml.Vector3i" {
import { $Cloneable } from "java.lang.Cloneable"
import { $Externalizable } from "java.io.Externalizable"
import { $ObjectOutput$$Type } from "java.io.ObjectOutput"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $NumberFormat$$Type } from "java.text.NumberFormat"
import { $Vector2ic$$Type } from "org.joml.Vector2ic"
import { $Vector3ic, $Vector3ic$$Type } from "org.joml.Vector3ic"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $Vector2fc$$Type } from "org.joml.Vector2fc"
import { $IntBuffer, $IntBuffer$$Type } from "java.nio.IntBuffer"
import { $Vector3dc$$Type } from "org.joml.Vector3dc"
import { $Vector2dc$$Type } from "org.joml.Vector2dc"
import { $ObjectInput$$Type } from "java.io.ObjectInput"

export class $Vector3i implements $Externalizable, $Cloneable, $Vector3ic {
"x": integer
"y": integer
"z": integer

constructor(vector2ic0: $Vector2ic$$Type, int1: integer)
constructor(float0: float, float1: float, float2: float, int3: integer)
constructor(double0: double, double1: double, double2: double, int3: integer)
constructor(vector2fc0: $Vector2fc$$Type, float1: float, int2: integer)
constructor()
constructor(int0: integer)
constructor(int0: integer, int1: integer, int2: integer)
constructor(vector3ic0: $Vector3ic$$Type)
constructor(byteBuffer0: $ByteBuffer$$Type)
constructor(int0: integer, byteBuffer1: $ByteBuffer$$Type)
constructor(intBuffer0: $IntBuffer$$Type)
constructor(int0: integer, intBuffer1: $IntBuffer$$Type)
constructor(vector3fc0: $Vector3fc$$Type, int1: integer)
constructor(vector2dc0: $Vector2dc$$Type, float1: float, int2: integer)
constructor(vector3dc0: $Vector3dc$$Type, int1: integer)
constructor(int0s: integer[])

public "absolute"(): $Vector3i
public "absolute"(vector3i0: $Vector3i$$Type): $Vector3i
public "add"(vector3ic0: $Vector3ic$$Type): $Vector3i
public "add"(vector3ic0: $Vector3ic$$Type, vector3i1: $Vector3i$$Type): $Vector3i
public "add"(int0: integer, int1: integer, int2: integer): $Vector3i
public "add"(int0: integer, int1: integer, int2: integer, vector3i3: $Vector3i$$Type): $Vector3i
public "clone"(): any
public "distance"(int0: integer, int1: integer, int2: integer): double
public static "distance"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): double
public "distance"(vector3ic0: $Vector3ic$$Type): double
public static "distanceSquared"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): long
public "distanceSquared"(int0: integer, int1: integer, int2: integer): long
public "distanceSquared"(vector3ic0: $Vector3ic$$Type): long
public "div"(int0: integer): $Vector3i
public "div"(int0: integer, vector3i1: $Vector3i$$Type): $Vector3i
public "div"(float0: float, vector3i1: $Vector3i$$Type): $Vector3i
public "div"(float0: float): $Vector3i
public "equals"(int0: integer, int1: integer, int2: integer): boolean
public "get"(intBuffer0: $IntBuffer$$Type): $IntBuffer
public "get"(int0: integer, intBuffer1: $IntBuffer$$Type): $IntBuffer
public "get"(int0: integer): integer
public "get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "getToAddress"(long0: long): $Vector3ic
public "gridDistance"(int0: integer, int1: integer, int2: integer): long
public "gridDistance"(vector3ic0: $Vector3ic$$Type): long
public static "length"(int0: integer, int1: integer, int2: integer): double
public "length"(): double
public static "lengthSquared"(int0: integer, int1: integer, int2: integer): long
public "lengthSquared"(): long
public "max"(vector3ic0: $Vector3ic$$Type, vector3i1: $Vector3i$$Type): $Vector3i
public "max"(vector3ic0: $Vector3ic$$Type): $Vector3i
public "maxComponent"(): integer
public "min"(vector3ic0: $Vector3ic$$Type, vector3i1: $Vector3i$$Type): $Vector3i
public "min"(vector3ic0: $Vector3ic$$Type): $Vector3i
public "minComponent"(): integer
public "mul"(int0: integer): $Vector3i
public "mul"(int0: integer, int1: integer, int2: integer, vector3i3: $Vector3i$$Type): $Vector3i
public "mul"(int0: integer, int1: integer, int2: integer): $Vector3i
public "mul"(vector3ic0: $Vector3ic$$Type, vector3i1: $Vector3i$$Type): $Vector3i
public "mul"(vector3ic0: $Vector3ic$$Type): $Vector3i
public "mul"(int0: integer, vector3i1: $Vector3i$$Type): $Vector3i
public "negate"(): $Vector3i
public "negate"(vector3i0: $Vector3i$$Type): $Vector3i
public "readExternal"(objectInput0: $ObjectInput$$Type): void
public "set"(int0s: integer[]): $Vector3i
public "set"(vector3dc0: $Vector3dc$$Type): $Vector3i
public "set"(int0: integer): $Vector3i
public "set"(int0: integer, intBuffer1: $IntBuffer$$Type): $Vector3i
public "set"(intBuffer0: $IntBuffer$$Type): $Vector3i
public "set"(vector3ic0: $Vector3ic$$Type): $Vector3i
public "set"(byteBuffer0: $ByteBuffer$$Type): $Vector3i
public "set"(int0: integer, int1: integer, int2: integer): $Vector3i
public "set"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $Vector3i
public "set"(vector3dc0: $Vector3dc$$Type, int1: integer): $Vector3i
public "set"(vector2ic0: $Vector2ic$$Type, int1: integer): $Vector3i
public "set"(vector3fc0: $Vector3fc$$Type, int1: integer): $Vector3i
public "setComponent"(int0: integer, int1: integer): $Vector3i
public "setFromAddress"(long0: long): $Vector3i
public "sub"(vector3ic0: $Vector3ic$$Type): $Vector3i
public "sub"(int0: integer, int1: integer, int2: integer, vector3i3: $Vector3i$$Type): $Vector3i
public "sub"(int0: integer, int1: integer, int2: integer): $Vector3i
public "sub"(vector3ic0: $Vector3ic$$Type, vector3i1: $Vector3i$$Type): $Vector3i
public "toString"(numberFormat0: $NumberFormat$$Type): string
public "writeExternal"(objectOutput0: $ObjectOutput$$Type): void
public "x"(): integer
public "y"(): integer
public "z"(): integer
public "zero"(): $Vector3i
set "fromAddress"(value: long)
}
}

declare module "org.joml.Vector3f" {
import { $Cloneable } from "java.lang.Cloneable"
import { $Matrix3x2fc$$Type } from "org.joml.Matrix3x2fc"
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Externalizable } from "java.io.Externalizable"
import { $Quaternionf, $Quaternionf$$Type } from "org.joml.Quaternionf"
import { $ObjectOutput$$Type } from "java.io.ObjectOutput"
import { $Matrix4dc$$Type } from "org.joml.Matrix4dc"
import { $Matrix3dc$$Type } from "org.joml.Matrix3dc"
import { $Matrix4fc$$Type } from "org.joml.Matrix4fc"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $NumberFormat$$Type } from "java.text.NumberFormat"
import { $Vector2ic$$Type } from "org.joml.Vector2ic"
import { $Matrix4x3fc$$Type } from "org.joml.Matrix4x3fc"
import { $Vector3ic$$Type } from "org.joml.Vector3ic"
import { $Vector3fc, $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $Matrix3fc$$Type } from "org.joml.Matrix3fc"
import { $Vector2fc$$Type } from "org.joml.Vector2fc"
import { $Vector3dc$$Type } from "org.joml.Vector3dc"
import { $Vector3i, $Vector3i$$Type } from "org.joml.Vector3i"
import { $Vector2dc$$Type } from "org.joml.Vector2dc"
import { $Vector3d, $Vector3d$$Type } from "org.joml.Vector3d"
import { $ObjectInput$$Type } from "java.io.ObjectInput"
import { $Quaternionfc$$Type } from "org.joml.Quaternionfc"

export class $Vector3f implements $Externalizable, $Cloneable, $Vector3fc {
"x": float
"y": float
"z": float

constructor(floatBuffer0: $FloatBuffer$$Type)
constructor(vector2fc0: $Vector2fc$$Type, float1: float)
constructor(vector2ic0: $Vector2ic$$Type, float1: float)
constructor(float0s: float[])
constructor(byteBuffer0: $ByteBuffer$$Type)
constructor(int0: integer, byteBuffer1: $ByteBuffer$$Type)
constructor()
constructor(float0: float)
constructor(float0: float, float1: float, float2: float)
constructor(int0: integer, floatBuffer1: $FloatBuffer$$Type)
constructor(vector3ic0: $Vector3ic$$Type)
constructor(vector3fc0: $Vector3fc$$Type)

public "absolute"(): $Vector3f
public "absolute"(vector3f0: $Vector3f$$Type): $Vector3f
public "add"(vector3fc0: $Vector3fc$$Type): $Vector3f
public "add"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "add"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
public "add"(float0: float, float1: float, float2: float): $Vector3f
public "angle"(vector3fc0: $Vector3fc$$Type): float
public "angleCos"(vector3fc0: $Vector3fc$$Type): float
public "angleSigned"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): float
public "angleSigned"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type): float
public "ceil"(): $Vector3f
public "ceil"(vector3f0: $Vector3f$$Type): $Vector3f
public "clone"(): any
public "cross"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
public "cross"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "cross"(float0: float, float1: float, float2: float): $Vector3f
public "cross"(vector3fc0: $Vector3fc$$Type): $Vector3f
public "distance"(float0: float, float1: float, float2: float): float
public "distance"(vector3fc0: $Vector3fc$$Type): float
public static "distance"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): float
public "distanceSquared"(vector3fc0: $Vector3fc$$Type): float
public "distanceSquared"(float0: float, float1: float, float2: float): float
public static "distanceSquared"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): float
public "div"(vector3fc0: $Vector3fc$$Type): $Vector3f
public "div"(float0: float, vector3f1: $Vector3f$$Type): $Vector3f
public "div"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "div"(float0: float, float1: float, float2: float): $Vector3f
public "div"(float0: float): $Vector3f
public "div"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
public "dot"(float0: float, float1: float, float2: float): float
public "dot"(vector3fc0: $Vector3fc$$Type): float
public "equals"(vector3fc0: $Vector3fc$$Type, float1: float): boolean
public "equals"(float0: float, float1: float, float2: float): boolean
public "floor"(vector3f0: $Vector3f$$Type): $Vector3f
public "floor"(): $Vector3f
public "fma"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type): $Vector3f
public "fma"(float0: float, vector3fc1: $Vector3fc$$Type): $Vector3f
public "fma"(float0: float, vector3fc1: $Vector3fc$$Type, vector3f2: $Vector3f$$Type): $Vector3f
public "fma"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3f2: $Vector3f$$Type): $Vector3f
public "get"(int0: integer, vector3i1: $Vector3i$$Type): $Vector3i
public "get"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "get"(int0: integer): float
public "get"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "get"(vector3d0: $Vector3d$$Type): $Vector3d
public "get"(vector3f0: $Vector3f$$Type): $Vector3f
public "get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "getToAddress"(long0: long): $Vector3fc
public "half"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
public "half"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "half"(float0: float, float1: float, float2: float): $Vector3f
public "half"(vector3fc0: $Vector3fc$$Type): $Vector3f
public "hermite"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3fc2: $Vector3fc$$Type, float3: float, vector3f4: $Vector3f$$Type): $Vector3f
public "isFinite"(): boolean
public "length"(): float
public static "length"(float0: float, float1: float, float2: float): float
public static "lengthSquared"(float0: float, float1: float, float2: float): float
public "lengthSquared"(): float
public "lerp"(vector3fc0: $Vector3fc$$Type, float1: float, vector3f2: $Vector3f$$Type): $Vector3f
public "lerp"(vector3fc0: $Vector3fc$$Type, float1: float): $Vector3f
public "max"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "max"(vector3fc0: $Vector3fc$$Type): $Vector3f
public "maxComponent"(): integer
public "min"(vector3fc0: $Vector3fc$$Type): $Vector3f
public "min"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "minComponent"(): integer
public "mul"(matrix3fc0: $Matrix3fc$$Type): $Vector3f
public "mul"(matrix3fc0: $Matrix3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "mul"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "mul"(vector3fc0: $Vector3fc$$Type): $Vector3f
public "mul"(matrix3x2fc0: $Matrix3x2fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "mul"(float0: float): $Vector3f
public "mul"(matrix3dc0: $Matrix3dc$$Type): $Vector3f
public "mul"(matrix3x2fc0: $Matrix3x2fc$$Type): $Vector3f
public "mul"(float0: float, vector3f1: $Vector3f$$Type): $Vector3f
public "mul"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
public "mul"(matrix3dc0: $Matrix3dc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "mul"(float0: float, float1: float, float2: float): $Vector3f
public "mulAdd"(float0: float, vector3fc1: $Vector3fc$$Type, vector3f2: $Vector3f$$Type): $Vector3f
public "mulAdd"(float0: float, vector3fc1: $Vector3fc$$Type): $Vector3f
public "mulAdd"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3f2: $Vector3f$$Type): $Vector3f
public "mulAdd"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type): $Vector3f
public "mulDirection"(matrix4x3fc0: $Matrix4x3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "mulDirection"(matrix4fc0: $Matrix4fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "mulDirection"(matrix4dc0: $Matrix4dc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "mulDirection"(matrix4x3fc0: $Matrix4x3fc$$Type): $Vector3f
public "mulDirection"(matrix4dc0: $Matrix4dc$$Type): $Vector3f
public "mulDirection"(matrix4fc0: $Matrix4fc$$Type): $Vector3f
public "mulPosition"(matrix4fc0: $Matrix4fc$$Type): $Vector3f
public "mulPosition"(matrix4x3fc0: $Matrix4x3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "mulPosition"(matrix4fc0: $Matrix4fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "mulPosition"(matrix4x3fc0: $Matrix4x3fc$$Type): $Vector3f
public "mulPositionW"(matrix4fc0: $Matrix4fc$$Type, vector3f1: $Vector3f$$Type): float
public "mulPositionW"(matrix4fc0: $Matrix4fc$$Type): float
public "mulProject"(matrix4fc0: $Matrix4fc$$Type): $Vector3f
public "mulProject"(matrix4fc0: $Matrix4fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "mulProject"(matrix4fc0: $Matrix4fc$$Type, float1: float, vector3f2: $Vector3f$$Type): $Vector3f
public "mulTranspose"(matrix3fc0: $Matrix3fc$$Type): $Vector3f
public "mulTranspose"(matrix3fc0: $Matrix3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "mulTransposeDirection"(matrix4fc0: $Matrix4fc$$Type): $Vector3f
public "mulTransposeDirection"(matrix4fc0: $Matrix4fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "mulTransposePosition"(matrix4fc0: $Matrix4fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "mulTransposePosition"(matrix4fc0: $Matrix4fc$$Type): $Vector3f
public "negate"(): $Vector3f
public "negate"(vector3f0: $Vector3f$$Type): $Vector3f
public "normalize"(float0: float, vector3f1: $Vector3f$$Type): $Vector3f
public "normalize"(float0: float): $Vector3f
public "normalize"(vector3f0: $Vector3f$$Type): $Vector3f
public "normalize"(): $Vector3f
public "orthogonalize"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "orthogonalize"(vector3fc0: $Vector3fc$$Type): $Vector3f
public "orthogonalizeUnit"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "orthogonalizeUnit"(vector3fc0: $Vector3fc$$Type): $Vector3f
public "readExternal"(objectInput0: $ObjectInput$$Type): void
public "reflect"(vector3fc0: $Vector3fc$$Type): $Vector3f
public "reflect"(float0: float, float1: float, float2: float): $Vector3f
public "reflect"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
public "reflect"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "rotate"(quaternionfc0: $Quaternionfc$$Type): $Vector3f
public "rotate"(quaternionfc0: $Quaternionfc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "rotateAxis"(float0: float, float1: float, float2: float, float3: float): $Vector3f
public "rotateAxis"(float0: float, float1: float, float2: float, float3: float, vector3f4: $Vector3f$$Type): $Vector3f
public "rotateX"(float0: float): $Vector3f
public "rotateX"(float0: float, vector3f1: $Vector3f$$Type): $Vector3f
public "rotateY"(float0: float, vector3f1: $Vector3f$$Type): $Vector3f
public "rotateY"(float0: float): $Vector3f
public "rotateZ"(float0: float): $Vector3f
public "rotateZ"(float0: float, vector3f1: $Vector3f$$Type): $Vector3f
public "rotationTo"(vector3fc0: $Vector3fc$$Type, quaternionf1: $Quaternionf$$Type): $Quaternionf
public "rotationTo"(float0: float, float1: float, float2: float, quaternionf3: $Quaternionf$$Type): $Quaternionf
public "round"(vector3f0: $Vector3f$$Type): $Vector3f
public "round"(): $Vector3f
public "set"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $Vector3f
public "set"(double0: double): $Vector3f
public "set"(double0: double, double1: double, double2: double): $Vector3f
public "set"(float0s: float[]): $Vector3f
public "set"(vector2ic0: $Vector2ic$$Type, float1: float): $Vector3f
public "set"(vector2dc0: $Vector2dc$$Type, float1: float): $Vector3f
public "set"(float0: float, float1: float, float2: float): $Vector3f
public "set"(float0: float): $Vector3f
public "set"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $Vector3f
public "set"(byteBuffer0: $ByteBuffer$$Type): $Vector3f
public "set"(floatBuffer0: $FloatBuffer$$Type): $Vector3f
public "set"(vector3fc0: $Vector3fc$$Type): $Vector3f
public "set"(vector2fc0: $Vector2fc$$Type, float1: float): $Vector3f
public "set"(vector3ic0: $Vector3ic$$Type): $Vector3f
public "set"(vector3dc0: $Vector3dc$$Type): $Vector3f
public "setComponent"(int0: integer, float1: float): $Vector3f
public "setFromAddress"(long0: long): $Vector3f
public "smoothStep"(vector3fc0: $Vector3fc$$Type, float1: float, vector3f2: $Vector3f$$Type): $Vector3f
public "sub"(float0: float, float1: float, float2: float): $Vector3f
public "sub"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
public "sub"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "sub"(vector3fc0: $Vector3fc$$Type): $Vector3f
public "toString"(numberFormat0: $NumberFormat$$Type): string
public "writeExternal"(objectOutput0: $ObjectOutput$$Type): void
public "x"(): float
public "y"(): float
public "z"(): float
public "zero"(): $Vector3f
get "finite"(): boolean
set "fromAddress"(value: long)
}
}

declare module "org.joml.Vector3d" {
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $ObjectOutput$$Type } from "java.io.ObjectOutput"
import { $Quaterniond, $Quaterniond$$Type } from "org.joml.Quaterniond"
import { $Matrix4dc$$Type } from "org.joml.Matrix4dc"
import { $Matrix3dc$$Type } from "org.joml.Matrix3dc"
import { $Matrix4fc$$Type } from "org.joml.Matrix4fc"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $NumberFormat$$Type } from "java.text.NumberFormat"
import { $Vector2ic$$Type } from "org.joml.Vector2ic"
import { $Vector3ic$$Type } from "org.joml.Vector3ic"
import { $Matrix3fc$$Type } from "org.joml.Matrix3fc"
import { $Vector3i, $Vector3i$$Type } from "org.joml.Vector3i"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Quaterniondc$$Type } from "org.joml.Quaterniondc"
import { $Cloneable } from "java.lang.Cloneable"
import { $Matrix3x2fc$$Type } from "org.joml.Matrix3x2fc"
import { $Externalizable } from "java.io.Externalizable"
import { $Matrix3x2dc$$Type } from "org.joml.Matrix3x2dc"
import { $DoubleBuffer, $DoubleBuffer$$Type } from "java.nio.DoubleBuffer"
import { $Matrix4x3fc$$Type } from "org.joml.Matrix4x3fc"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $Vector2fc$$Type } from "org.joml.Vector2fc"
import { $Vector3dc, $Vector3dc$$Type } from "org.joml.Vector3dc"
import { $Matrix4x3dc$$Type } from "org.joml.Matrix4x3dc"
import { $Vector2dc$$Type } from "org.joml.Vector2dc"
import { $ObjectInput$$Type } from "java.io.ObjectInput"

export class $Vector3d implements $Externalizable, $Cloneable, $Vector3dc {
"x": double
"y": double
"z": double

constructor(float0s: float[])
constructor(int0: integer, doubleBuffer1: $DoubleBuffer$$Type)
constructor(vector2dc0: $Vector2dc$$Type, double1: double)
constructor(vector3dc0: $Vector3dc$$Type)
constructor(doubleBuffer0: $DoubleBuffer$$Type)
constructor(int0: integer, byteBuffer1: $ByteBuffer$$Type)
constructor(byteBuffer0: $ByteBuffer$$Type)
constructor(double0s: double[])
constructor(vector3fc0: $Vector3fc$$Type)
constructor(double0: double, double1: double, double2: double)
constructor(double0: double)
constructor()
constructor(vector2ic0: $Vector2ic$$Type, double1: double)
constructor(vector2fc0: $Vector2fc$$Type, double1: double)
constructor(vector3ic0: $Vector3ic$$Type)

public "absolute"(): $Vector3d
public "absolute"(vector3d0: $Vector3d$$Type): $Vector3d
public "add"(vector3dc0: $Vector3dc$$Type): $Vector3d
public "add"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
public "add"(double0: double, double1: double, double2: double): $Vector3d
public "add"(vector3fc0: $Vector3fc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "add"(vector3fc0: $Vector3fc$$Type): $Vector3d
public "add"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "angle"(vector3dc0: $Vector3dc$$Type): double
public "angleCos"(vector3dc0: $Vector3dc$$Type): double
public "angleSigned"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): double
public "angleSigned"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type): double
public "ceil"(): $Vector3d
public "ceil"(vector3d0: $Vector3d$$Type): $Vector3d
public "clone"(): any
public "cross"(double0: double, double1: double, double2: double): $Vector3d
public "cross"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
public "cross"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "cross"(vector3dc0: $Vector3dc$$Type): $Vector3d
public static "distance"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): double
public "distance"(double0: double, double1: double, double2: double): double
public "distance"(vector3dc0: $Vector3dc$$Type): double
public "distanceSquared"(double0: double, double1: double, double2: double): double
public "distanceSquared"(vector3dc0: $Vector3dc$$Type): double
public static "distanceSquared"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): double
public "div"(vector3fc0: $Vector3fc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "div"(vector3fc0: $Vector3fc$$Type): $Vector3d
public "div"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "div"(vector3d0: $Vector3d$$Type): $Vector3d
public "div"(double0: double, vector3d1: $Vector3d$$Type): $Vector3d
public "div"(double0: double): $Vector3d
public "div"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
public "div"(double0: double, double1: double, double2: double): $Vector3d
public "dot"(vector3dc0: $Vector3dc$$Type): double
public "dot"(double0: double, double1: double, double2: double): double
public "equals"(double0: double, double1: double, double2: double): boolean
public "equals"(vector3dc0: $Vector3dc$$Type, double1: double): boolean
public "floor"(vector3d0: $Vector3d$$Type): $Vector3d
public "floor"(): $Vector3d
public "fma"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type): $Vector3d
public "fma"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3d2: $Vector3d$$Type): $Vector3d
public "fma"(double0: double, vector3fc1: $Vector3fc$$Type): $Vector3d
public "fma"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type): $Vector3d
public "fma"(double0: double, vector3dc1: $Vector3dc$$Type): $Vector3d
public "fma"(double0: double, vector3fc1: $Vector3fc$$Type, vector3d2: $Vector3d$$Type): $Vector3d
public "fma"(vector3dc0: $Vector3dc$$Type, vector3fc1: $Vector3fc$$Type, vector3d2: $Vector3d$$Type): $Vector3d
public "fma"(double0: double, vector3dc1: $Vector3dc$$Type, vector3d2: $Vector3d$$Type): $Vector3d
public "fma"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3d2: $Vector3d$$Type): $Vector3d
public "get"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
public "get"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
public "get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "get"(vector3d0: $Vector3d$$Type): $Vector3d
public "get"(vector3f0: $Vector3f$$Type): $Vector3f
public "get"(int0: integer, vector3i1: $Vector3i$$Type): $Vector3i
public "get"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "get"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "get"(int0: integer): double
public "getToAddress"(long0: long): $Vector3dc
public "getf"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "getf"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "half"(vector3dc0: $Vector3dc$$Type): $Vector3d
public "half"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
public "half"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "half"(double0: double, double1: double, double2: double): $Vector3d
public "hermite"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3dc2: $Vector3dc$$Type, double3: double, vector3d4: $Vector3d$$Type): $Vector3d
public "isFinite"(): boolean
public "length"(): double
public static "length"(double0: double, double1: double, double2: double): double
public static "lengthSquared"(double0: double, double1: double, double2: double): double
public "lengthSquared"(): double
public "lerp"(vector3dc0: $Vector3dc$$Type, double1: double): $Vector3d
public "lerp"(vector3dc0: $Vector3dc$$Type, double1: double, vector3d2: $Vector3d$$Type): $Vector3d
public "max"(vector3dc0: $Vector3dc$$Type): $Vector3d
public "max"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "maxComponent"(): integer
public "min"(vector3dc0: $Vector3dc$$Type): $Vector3d
public "min"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "minComponent"(): integer
public "mul"(matrix3dc0: $Matrix3dc$$Type): $Vector3d
public "mul"(matrix3x2dc0: $Matrix3x2dc$$Type): $Vector3d
public "mul"(matrix3fc0: $Matrix3fc$$Type): $Vector3d
public "mul"(matrix3x2dc0: $Matrix3x2dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "mul"(matrix3x2fc0: $Matrix3x2fc$$Type): $Vector3d
public "mul"(matrix3fc0: $Matrix3fc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "mul"(matrix3x2fc0: $Matrix3x2fc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "mul"(matrix3dc0: $Matrix3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "mul"(matrix3dc0: $Matrix3dc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "mul"(vector3dc0: $Vector3dc$$Type): $Vector3d
public "mul"(double0: double): $Vector3d
public "mul"(vector3fc0: $Vector3fc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "mul"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "mul"(double0: double, vector3d1: $Vector3d$$Type): $Vector3d
public "mul"(double0: double, double1: double, double2: double): $Vector3d
public "mul"(vector3fc0: $Vector3fc$$Type): $Vector3d
public "mul"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
public "mulAdd"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type): $Vector3d
public "mulAdd"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3d2: $Vector3d$$Type): $Vector3d
public "mulAdd"(vector3fc0: $Vector3fc$$Type, vector3dc1: $Vector3dc$$Type, vector3d2: $Vector3d$$Type): $Vector3d
public "mulAdd"(double0: double, vector3dc1: $Vector3dc$$Type, vector3d2: $Vector3d$$Type): $Vector3d
public "mulAdd"(double0: double, vector3dc1: $Vector3dc$$Type): $Vector3d
public "mulDirection"(matrix4x3fc0: $Matrix4x3fc$$Type): $Vector3d
public "mulDirection"(matrix4dc0: $Matrix4dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "mulDirection"(matrix4fc0: $Matrix4fc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "mulDirection"(matrix4x3dc0: $Matrix4x3dc$$Type): $Vector3d
public "mulDirection"(matrix4dc0: $Matrix4dc$$Type): $Vector3d
public "mulDirection"(matrix4fc0: $Matrix4fc$$Type): $Vector3d
public "mulDirection"(matrix4x3dc0: $Matrix4x3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "mulDirection"(matrix4x3fc0: $Matrix4x3fc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "mulPosition"(matrix4dc0: $Matrix4dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "mulPosition"(matrix4fc0: $Matrix4fc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "mulPosition"(matrix4x3dc0: $Matrix4x3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "mulPosition"(matrix4x3fc0: $Matrix4x3fc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "mulPosition"(matrix4fc0: $Matrix4fc$$Type): $Vector3d
public "mulPosition"(matrix4dc0: $Matrix4dc$$Type): $Vector3d
public "mulPosition"(matrix4x3fc0: $Matrix4x3fc$$Type): $Vector3d
public "mulPosition"(matrix4x3dc0: $Matrix4x3dc$$Type): $Vector3d
public "mulPositionW"(matrix4dc0: $Matrix4dc$$Type): double
public "mulPositionW"(matrix4dc0: $Matrix4dc$$Type, vector3d1: $Vector3d$$Type): double
public "mulPositionW"(matrix4fc0: $Matrix4fc$$Type, vector3d1: $Vector3d$$Type): double
public "mulPositionW"(matrix4fc0: $Matrix4fc$$Type): double
public "mulProject"(matrix4fc0: $Matrix4fc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "mulProject"(matrix4dc0: $Matrix4dc$$Type): $Vector3d
public "mulProject"(matrix4dc0: $Matrix4dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "mulProject"(matrix4fc0: $Matrix4fc$$Type): $Vector3d
public "mulProject"(matrix4dc0: $Matrix4dc$$Type, double1: double, vector3d2: $Vector3d$$Type): $Vector3d
public "mulTranspose"(matrix3dc0: $Matrix3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "mulTranspose"(matrix3fc0: $Matrix3fc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "mulTranspose"(matrix3dc0: $Matrix3dc$$Type): $Vector3d
public "mulTranspose"(matrix3fc0: $Matrix3fc$$Type): $Vector3d
public "mulTransposeDirection"(matrix4fc0: $Matrix4fc$$Type): $Vector3d
public "mulTransposeDirection"(matrix4fc0: $Matrix4fc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "mulTransposeDirection"(matrix4dc0: $Matrix4dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "mulTransposeDirection"(matrix4dc0: $Matrix4dc$$Type): $Vector3d
public "mulTransposePosition"(matrix4fc0: $Matrix4fc$$Type): $Vector3d
public "mulTransposePosition"(matrix4fc0: $Matrix4fc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "mulTransposePosition"(matrix4dc0: $Matrix4dc$$Type): $Vector3d
public "mulTransposePosition"(matrix4dc0: $Matrix4dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "negate"(vector3d0: $Vector3d$$Type): $Vector3d
public "negate"(): $Vector3d
public "normalize"(): $Vector3d
public "normalize"(double0: double, vector3d1: $Vector3d$$Type): $Vector3d
public "normalize"(vector3d0: $Vector3d$$Type): $Vector3d
public "normalize"(double0: double): $Vector3d
public "orthogonalize"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "orthogonalize"(vector3dc0: $Vector3dc$$Type): $Vector3d
public "orthogonalizeUnit"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "orthogonalizeUnit"(vector3dc0: $Vector3dc$$Type): $Vector3d
public "readExternal"(objectInput0: $ObjectInput$$Type): void
public "reflect"(vector3dc0: $Vector3dc$$Type): $Vector3d
public "reflect"(double0: double, double1: double, double2: double): $Vector3d
public "reflect"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
public "reflect"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "rotate"(quaterniondc0: $Quaterniondc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "rotate"(quaterniondc0: $Quaterniondc$$Type): $Vector3d
public "rotateAxis"(double0: double, double1: double, double2: double, double3: double, vector3d4: $Vector3d$$Type): $Vector3d
public "rotateAxis"(double0: double, double1: double, double2: double, double3: double): $Vector3d
public "rotateX"(double0: double, vector3d1: $Vector3d$$Type): $Vector3d
public "rotateX"(double0: double): $Vector3d
public "rotateY"(double0: double): $Vector3d
public "rotateY"(double0: double, vector3d1: $Vector3d$$Type): $Vector3d
public "rotateZ"(double0: double, vector3d1: $Vector3d$$Type): $Vector3d
public "rotateZ"(double0: double): $Vector3d
public "rotationTo"(vector3dc0: $Vector3dc$$Type, quaterniond1: $Quaterniond$$Type): $Quaterniond
public "rotationTo"(double0: double, double1: double, double2: double, quaterniond3: $Quaterniond$$Type): $Quaterniond
public "round"(): $Vector3d
public "round"(vector3d0: $Vector3d$$Type): $Vector3d
public "set"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $Vector3d
public "set"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $Vector3d
public "set"(double0: double): $Vector3d
public "set"(vector2dc0: $Vector2dc$$Type, double1: double): $Vector3d
public "set"(vector3ic0: $Vector3ic$$Type): $Vector3d
public "set"(vector3dc0: $Vector3dc$$Type): $Vector3d
public "set"(vector2fc0: $Vector2fc$$Type, double1: double): $Vector3d
public "set"(vector3fc0: $Vector3fc$$Type): $Vector3d
public "set"(vector2ic0: $Vector2ic$$Type, double1: double): $Vector3d
public "set"(byteBuffer0: $ByteBuffer$$Type): $Vector3d
public "set"(float0s: float[]): $Vector3d
public "set"(double0s: double[]): $Vector3d
public "set"(doubleBuffer0: $DoubleBuffer$$Type): $Vector3d
public "set"(double0: double, double1: double, double2: double): $Vector3d
public "setComponent"(int0: integer, double1: double): $Vector3d
public "setFromAddress"(long0: long): $Vector3d
public "smoothStep"(vector3dc0: $Vector3dc$$Type, double1: double, vector3d2: $Vector3d$$Type): $Vector3d
public "sub"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "sub"(vector3dc0: $Vector3dc$$Type): $Vector3d
public "sub"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
public "sub"(double0: double, double1: double, double2: double): $Vector3d
public "sub"(vector3fc0: $Vector3fc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "sub"(vector3fc0: $Vector3fc$$Type): $Vector3d
public "toString"(numberFormat0: $NumberFormat$$Type): string
public "writeExternal"(objectOutput0: $ObjectOutput$$Type): void
public "x"(): double
public "y"(): double
public "z"(): double
public "zero"(): $Vector3d
get "finite"(): boolean
set "fromAddress"(value: long)
}
}

declare module "org.joml.Vector2i" {
import { $Vector2ic, $Vector2ic$$Type } from "org.joml.Vector2ic"
import { $Cloneable } from "java.lang.Cloneable"
import { $Vector2fc$$Type } from "org.joml.Vector2fc"
import { $IntBuffer, $IntBuffer$$Type } from "java.nio.IntBuffer"
import { $Externalizable } from "java.io.Externalizable"
import { $Vector2dc$$Type } from "org.joml.Vector2dc"
import { $ObjectOutput$$Type } from "java.io.ObjectOutput"
import { $ObjectInput$$Type } from "java.io.ObjectInput"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $NumberFormat$$Type } from "java.text.NumberFormat"

export class $Vector2i implements $Externalizable, $Cloneable, $Vector2ic {
"x": integer
"y": integer

constructor(vector2fc0: $Vector2fc$$Type, int1: integer)
constructor(vector2dc0: $Vector2dc$$Type, int1: integer)
constructor()
constructor(int0s: integer[])
constructor(double0: double, double1: double, int2: integer)
constructor(float0: float, float1: float, int2: integer)
constructor(int0: integer, int1: integer)
constructor(int0: integer)
constructor(vector2ic0: $Vector2ic$$Type)
constructor(int0: integer, intBuffer1: $IntBuffer$$Type)
constructor(intBuffer0: $IntBuffer$$Type)
constructor(int0: integer, byteBuffer1: $ByteBuffer$$Type)
constructor(byteBuffer0: $ByteBuffer$$Type)

public "absolute"(): $Vector2i
public "absolute"(vector2i0: $Vector2i$$Type): $Vector2i
public "add"(int0: integer, int1: integer): $Vector2i
public "add"(vector2ic0: $Vector2ic$$Type, vector2i1: $Vector2i$$Type): $Vector2i
public "add"(int0: integer, int1: integer, vector2i2: $Vector2i$$Type): $Vector2i
public "add"(vector2ic0: $Vector2ic$$Type): $Vector2i
public "clone"(): any
public "distance"(int0: integer, int1: integer): double
public static "distance"(int0: integer, int1: integer, int2: integer, int3: integer): double
public "distance"(vector2ic0: $Vector2ic$$Type): double
public static "distanceSquared"(int0: integer, int1: integer, int2: integer, int3: integer): long
public "distanceSquared"(vector2ic0: $Vector2ic$$Type): long
public "distanceSquared"(int0: integer, int1: integer): long
public "div"(int0: integer, vector2i1: $Vector2i$$Type): $Vector2i
public "div"(float0: float, vector2i1: $Vector2i$$Type): $Vector2i
public "div"(float0: float): $Vector2i
public "div"(int0: integer): $Vector2i
public "equals"(int0: integer, int1: integer): boolean
public "get"(int0: integer): integer
public "get"(int0: integer, intBuffer1: $IntBuffer$$Type): $IntBuffer
public "get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "get"(intBuffer0: $IntBuffer$$Type): $IntBuffer
public "getToAddress"(long0: long): $Vector2ic
public "gridDistance"(vector2ic0: $Vector2ic$$Type): long
public "gridDistance"(int0: integer, int1: integer): long
public "length"(): double
public static "length"(int0: integer, int1: integer): double
public "lengthSquared"(): long
public static "lengthSquared"(int0: integer, int1: integer): long
public "max"(vector2ic0: $Vector2ic$$Type, vector2i1: $Vector2i$$Type): $Vector2i
public "max"(vector2ic0: $Vector2ic$$Type): $Vector2i
public "maxComponent"(): integer
public "min"(vector2ic0: $Vector2ic$$Type, vector2i1: $Vector2i$$Type): $Vector2i
public "min"(vector2ic0: $Vector2ic$$Type): $Vector2i
public "minComponent"(): integer
public "mul"(int0: integer, vector2i1: $Vector2i$$Type): $Vector2i
public "mul"(int0: integer, int1: integer): $Vector2i
public "mul"(int0: integer, int1: integer, vector2i2: $Vector2i$$Type): $Vector2i
public "mul"(vector2ic0: $Vector2ic$$Type, vector2i1: $Vector2i$$Type): $Vector2i
public "mul"(vector2ic0: $Vector2ic$$Type): $Vector2i
public "mul"(int0: integer): $Vector2i
public "negate"(): $Vector2i
public "negate"(vector2i0: $Vector2i$$Type): $Vector2i
public "readExternal"(objectInput0: $ObjectInput$$Type): void
public "set"(vector2ic0: $Vector2ic$$Type): $Vector2i
public "set"(vector2dc0: $Vector2dc$$Type): $Vector2i
public "set"(int0: integer, int1: integer): $Vector2i
public "set"(int0: integer): $Vector2i
public "set"(int0: integer, intBuffer1: $IntBuffer$$Type): $Vector2i
public "set"(byteBuffer0: $ByteBuffer$$Type): $Vector2i
public "set"(int0s: integer[]): $Vector2i
public "set"(vector2fc0: $Vector2fc$$Type, int1: integer): $Vector2i
public "set"(vector2dc0: $Vector2dc$$Type, int1: integer): $Vector2i
public "set"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $Vector2i
public "set"(intBuffer0: $IntBuffer$$Type): $Vector2i
public "setComponent"(int0: integer, int1: integer): $Vector2i
public "setFromAddress"(long0: long): $Vector2i
public "sub"(int0: integer, int1: integer): $Vector2i
public "sub"(vector2ic0: $Vector2ic$$Type, vector2i1: $Vector2i$$Type): $Vector2i
public "sub"(int0: integer, int1: integer, vector2i2: $Vector2i$$Type): $Vector2i
public "sub"(vector2ic0: $Vector2ic$$Type): $Vector2i
public "toString"(numberFormat0: $NumberFormat$$Type): string
public "writeExternal"(objectOutput0: $ObjectOutput$$Type): void
public "x"(): integer
public "y"(): integer
public "zero"(): $Vector2i
set "fromAddress"(value: long)
}
}

declare module "org.joml.Vector2f" {
import { $Cloneable } from "java.lang.Cloneable"
import { $Matrix3x2fc$$Type } from "org.joml.Matrix3x2fc"
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Externalizable } from "java.io.Externalizable"
import { $ObjectOutput$$Type } from "java.io.ObjectOutput"
import { $Matrix2dc$$Type } from "org.joml.Matrix2dc"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $NumberFormat$$Type } from "java.text.NumberFormat"
import { $Vector2ic$$Type } from "org.joml.Vector2ic"
import { $Vector2i, $Vector2i$$Type } from "org.joml.Vector2i"
import { $Vector2fc, $Vector2fc$$Type } from "org.joml.Vector2fc"
import { $Matrix2fc$$Type } from "org.joml.Matrix2fc"
import { $Vector2dc$$Type } from "org.joml.Vector2dc"
import { $ObjectInput$$Type } from "java.io.ObjectInput"
import { $Vector2d, $Vector2d$$Type } from "org.joml.Vector2d"

export class $Vector2f implements $Externalizable, $Cloneable, $Vector2fc {
"x": float
"y": float

constructor(float0s: float[])
constructor(vector2ic0: $Vector2ic$$Type)
constructor(vector2fc0: $Vector2fc$$Type)
constructor(float0: float, float1: float)
constructor(float0: float)
constructor()
constructor(int0: integer, floatBuffer1: $FloatBuffer$$Type)
constructor(floatBuffer0: $FloatBuffer$$Type)
constructor(int0: integer, byteBuffer1: $ByteBuffer$$Type)
constructor(byteBuffer0: $ByteBuffer$$Type)

public "absolute"(): $Vector2f
public "absolute"(vector2f0: $Vector2f$$Type): $Vector2f
public "add"(float0: float, float1: float, vector2f2: $Vector2f$$Type): $Vector2f
public "add"(vector2fc0: $Vector2fc$$Type): $Vector2f
public "add"(vector2fc0: $Vector2fc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
public "add"(float0: float, float1: float): $Vector2f
public "angle"(vector2fc0: $Vector2fc$$Type): float
public "ceil"(vector2f0: $Vector2f$$Type): $Vector2f
public "ceil"(): $Vector2f
public "clone"(): any
public static "distance"(float0: float, float1: float, float2: float, float3: float): float
public "distance"(vector2fc0: $Vector2fc$$Type): float
public "distance"(float0: float, float1: float): float
public static "distanceSquared"(float0: float, float1: float, float2: float, float3: float): float
public "distanceSquared"(float0: float, float1: float): float
public "distanceSquared"(vector2fc0: $Vector2fc$$Type): float
public "div"(float0: float, float1: float): $Vector2f
public "div"(float0: float, float1: float, vector2f2: $Vector2f$$Type): $Vector2f
public "div"(vector2fc0: $Vector2fc$$Type): $Vector2f
public "div"(vector2fc0: $Vector2fc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
public "div"(float0: float): $Vector2f
public "div"(float0: float, vector2f1: $Vector2f$$Type): $Vector2f
public "dot"(vector2fc0: $Vector2fc$$Type): float
public "equals"(vector2fc0: $Vector2fc$$Type, float1: float): boolean
public "equals"(float0: float, float1: float): boolean
public "floor"(): $Vector2f
public "floor"(vector2f0: $Vector2f$$Type): $Vector2f
public "fma"(float0: float, vector2fc1: $Vector2fc$$Type, vector2f2: $Vector2f$$Type): $Vector2f
public "fma"(vector2fc0: $Vector2fc$$Type, vector2fc1: $Vector2fc$$Type): $Vector2f
public "fma"(float0: float, vector2fc1: $Vector2fc$$Type): $Vector2f
public "fma"(vector2fc0: $Vector2fc$$Type, vector2fc1: $Vector2fc$$Type, vector2f2: $Vector2f$$Type): $Vector2f
public "get"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "get"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "get"(int0: integer, vector2i1: $Vector2i$$Type): $Vector2i
public "get"(int0: integer): float
public "get"(vector2f0: $Vector2f$$Type): $Vector2f
public "get"(vector2d0: $Vector2d$$Type): $Vector2d
public "get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "getToAddress"(long0: long): $Vector2fc
public "isFinite"(): boolean
public static "length"(float0: float, float1: float): float
public "length"(): float
public static "lengthSquared"(float0: float, float1: float): float
public "lengthSquared"(): float
public "lerp"(vector2fc0: $Vector2fc$$Type, float1: float): $Vector2f
public "lerp"(vector2fc0: $Vector2fc$$Type, float1: float, vector2f2: $Vector2f$$Type): $Vector2f
public "max"(vector2fc0: $Vector2fc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
public "max"(vector2fc0: $Vector2fc$$Type): $Vector2f
public "maxComponent"(): integer
public "min"(vector2fc0: $Vector2fc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
public "min"(vector2fc0: $Vector2fc$$Type): $Vector2f
public "minComponent"(): integer
public "mul"(matrix2fc0: $Matrix2fc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
public "mul"(matrix2dc0: $Matrix2dc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
public "mul"(matrix2dc0: $Matrix2dc$$Type): $Vector2f
public "mul"(float0: float, float1: float): $Vector2f
public "mul"(vector2fc0: $Vector2fc$$Type): $Vector2f
public "mul"(float0: float, vector2f1: $Vector2f$$Type): $Vector2f
public "mul"(float0: float): $Vector2f
public "mul"(float0: float, float1: float, vector2f2: $Vector2f$$Type): $Vector2f
public "mul"(matrix2fc0: $Matrix2fc$$Type): $Vector2f
public "mul"(vector2fc0: $Vector2fc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
public "mulDirection"(matrix3x2fc0: $Matrix3x2fc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
public "mulDirection"(matrix3x2fc0: $Matrix3x2fc$$Type): $Vector2f
public "mulPosition"(matrix3x2fc0: $Matrix3x2fc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
public "mulPosition"(matrix3x2fc0: $Matrix3x2fc$$Type): $Vector2f
public "mulTranspose"(matrix2fc0: $Matrix2fc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
public "mulTranspose"(matrix2fc0: $Matrix2fc$$Type): $Vector2f
public "negate"(): $Vector2f
public "negate"(vector2f0: $Vector2f$$Type): $Vector2f
public "normalize"(vector2f0: $Vector2f$$Type): $Vector2f
public "normalize"(float0: float): $Vector2f
public "normalize"(float0: float, vector2f1: $Vector2f$$Type): $Vector2f
public "normalize"(): $Vector2f
public "perpendicular"(): $Vector2f
public "readExternal"(objectInput0: $ObjectInput$$Type): void
public "round"(): $Vector2f
public "round"(vector2f0: $Vector2f$$Type): $Vector2f
public "set"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $Vector2f
public "set"(byteBuffer0: $ByteBuffer$$Type): $Vector2f
public "set"(vector2ic0: $Vector2ic$$Type): $Vector2f
public "set"(double0: double, double1: double): $Vector2f
public "set"(float0s: float[]): $Vector2f
public "set"(float0: float): $Vector2f
public "set"(float0: float, float1: float): $Vector2f
public "set"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $Vector2f
public "set"(floatBuffer0: $FloatBuffer$$Type): $Vector2f
public "set"(double0: double): $Vector2f
public "set"(vector2fc0: $Vector2fc$$Type): $Vector2f
public "set"(vector2dc0: $Vector2dc$$Type): $Vector2f
public "setComponent"(int0: integer, float1: float): $Vector2f
public "setFromAddress"(long0: long): $Vector2f
public "sub"(vector2fc0: $Vector2fc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
public "sub"(float0: float, float1: float): $Vector2f
public "sub"(vector2fc0: $Vector2fc$$Type): $Vector2f
public "sub"(float0: float, float1: float, vector2f2: $Vector2f$$Type): $Vector2f
public "toString"(numberFormat0: $NumberFormat$$Type): string
public "writeExternal"(objectOutput0: $ObjectOutput$$Type): void
public "x"(): float
public "y"(): float
public "zero"(): $Vector2f
get "finite"(): boolean
set "fromAddress"(value: long)
}
}

declare module "org.joml.Vector2d" {
import { $Cloneable } from "java.lang.Cloneable"
import { $Externalizable } from "java.io.Externalizable"
import { $Matrix3x2dc$$Type } from "org.joml.Matrix3x2dc"
import { $DoubleBuffer, $DoubleBuffer$$Type } from "java.nio.DoubleBuffer"
import { $ObjectOutput$$Type } from "java.io.ObjectOutput"
import { $Matrix2dc$$Type } from "org.joml.Matrix2dc"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $NumberFormat$$Type } from "java.text.NumberFormat"
import { $Vector2ic$$Type } from "org.joml.Vector2ic"
import { $Vector2i, $Vector2i$$Type } from "org.joml.Vector2i"
import { $Vector2fc$$Type } from "org.joml.Vector2fc"
import { $Matrix2fc$$Type } from "org.joml.Matrix2fc"
import { $Vector2dc, $Vector2dc$$Type } from "org.joml.Vector2dc"
import { $Vector2f, $Vector2f$$Type } from "org.joml.Vector2f"
import { $ObjectInput$$Type } from "java.io.ObjectInput"

export class $Vector2d implements $Externalizable, $Cloneable, $Vector2dc {
"x": double
"y": double

constructor()
constructor(vector2ic0: $Vector2ic$$Type)
constructor(double0s: double[])
constructor(float0s: float[])
constructor(byteBuffer0: $ByteBuffer$$Type)
constructor(doubleBuffer0: $DoubleBuffer$$Type)
constructor(int0: integer, doubleBuffer1: $DoubleBuffer$$Type)
constructor(int0: integer, byteBuffer1: $ByteBuffer$$Type)
constructor(double0: double)
constructor(double0: double, double1: double)
constructor(vector2fc0: $Vector2fc$$Type)
constructor(vector2dc0: $Vector2dc$$Type)

public "absolute"(vector2d0: $Vector2d$$Type): $Vector2d
public "absolute"(): $Vector2d
public "add"(double0: double, double1: double, vector2d2: $Vector2d$$Type): $Vector2d
public "add"(vector2fc0: $Vector2fc$$Type): $Vector2d
public "add"(double0: double, double1: double): $Vector2d
public "add"(vector2dc0: $Vector2dc$$Type): $Vector2d
public "add"(vector2fc0: $Vector2fc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
public "add"(vector2dc0: $Vector2dc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
public "angle"(vector2dc0: $Vector2dc$$Type): double
public "ceil"(vector2d0: $Vector2d$$Type): $Vector2d
public "ceil"(): $Vector2d
public "clone"(): any
public static "distance"(double0: double, double1: double, double2: double, double3: double): double
public "distance"(vector2dc0: $Vector2dc$$Type): double
public "distance"(double0: double, double1: double): double
public "distance"(vector2fc0: $Vector2fc$$Type): double
public "distanceSquared"(double0: double, double1: double): double
public "distanceSquared"(vector2fc0: $Vector2fc$$Type): double
public "distanceSquared"(vector2dc0: $Vector2dc$$Type): double
public static "distanceSquared"(double0: double, double1: double, double2: double, double3: double): double
public "div"(vector2dc0: $Vector2dc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
public "div"(double0: double, vector2d1: $Vector2d$$Type): $Vector2d
public "div"(vector2fc0: $Vector2fc$$Type): $Vector2d
public "div"(double0: double, double1: double): $Vector2d
public "div"(vector2d0: $Vector2d$$Type): $Vector2d
public "div"(double0: double): $Vector2d
public "div"(vector2fc0: $Vector2fc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
public "div"(double0: double, double1: double, vector2d2: $Vector2d$$Type): $Vector2d
public "dot"(vector2dc0: $Vector2dc$$Type): double
public "equals"(double0: double, double1: double): boolean
public "equals"(vector2dc0: $Vector2dc$$Type, double1: double): boolean
public "floor"(): $Vector2d
public "floor"(vector2d0: $Vector2d$$Type): $Vector2d
public "fma"(vector2dc0: $Vector2dc$$Type, vector2dc1: $Vector2dc$$Type): $Vector2d
public "fma"(double0: double, vector2dc1: $Vector2dc$$Type): $Vector2d
public "fma"(vector2dc0: $Vector2dc$$Type, vector2dc1: $Vector2dc$$Type, vector2d2: $Vector2d$$Type): $Vector2d
public "fma"(double0: double, vector2dc1: $Vector2dc$$Type, vector2d2: $Vector2d$$Type): $Vector2d
public "get"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
public "get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "get"(vector2d0: $Vector2d$$Type): $Vector2d
public "get"(vector2f0: $Vector2f$$Type): $Vector2f
public "get"(int0: integer, vector2i1: $Vector2i$$Type): $Vector2i
public "get"(int0: integer): double
public "get"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
public "get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "getToAddress"(long0: long): $Vector2dc
public "isFinite"(): boolean
public "length"(): double
public static "length"(double0: double, double1: double): double
public "lengthSquared"(): double
public static "lengthSquared"(double0: double, double1: double): double
public "lerp"(vector2dc0: $Vector2dc$$Type, double1: double): $Vector2d
public "lerp"(vector2dc0: $Vector2dc$$Type, double1: double, vector2d2: $Vector2d$$Type): $Vector2d
public "max"(vector2dc0: $Vector2dc$$Type): $Vector2d
public "max"(vector2dc0: $Vector2dc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
public "maxComponent"(): integer
public "min"(vector2dc0: $Vector2dc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
public "min"(vector2dc0: $Vector2dc$$Type): $Vector2d
public "minComponent"(): integer
public "mul"(double0: double, vector2d1: $Vector2d$$Type): $Vector2d
public "mul"(double0: double, double1: double): $Vector2d
public "mul"(matrix2dc0: $Matrix2dc$$Type): $Vector2d
public "mul"(double0: double): $Vector2d
public "mul"(matrix2dc0: $Matrix2dc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
public "mul"(matrix2fc0: $Matrix2fc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
public "mul"(matrix2fc0: $Matrix2fc$$Type): $Vector2d
public "mul"(vector2dc0: $Vector2dc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
public "mul"(vector2dc0: $Vector2dc$$Type): $Vector2d
public "mul"(double0: double, double1: double, vector2d2: $Vector2d$$Type): $Vector2d
public "mulDirection"(matrix3x2dc0: $Matrix3x2dc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
public "mulDirection"(matrix3x2dc0: $Matrix3x2dc$$Type): $Vector2d
public "mulPosition"(matrix3x2dc0: $Matrix3x2dc$$Type): $Vector2d
public "mulPosition"(matrix3x2dc0: $Matrix3x2dc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
public "mulTranspose"(matrix2fc0: $Matrix2fc$$Type): $Vector2d
public "mulTranspose"(matrix2fc0: $Matrix2fc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
public "mulTranspose"(matrix2dc0: $Matrix2dc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
public "mulTranspose"(matrix2dc0: $Matrix2dc$$Type): $Vector2d
public "negate"(vector2d0: $Vector2d$$Type): $Vector2d
public "negate"(): $Vector2d
public "normalize"(vector2d0: $Vector2d$$Type): $Vector2d
public "normalize"(double0: double): $Vector2d
public "normalize"(): $Vector2d
public "normalize"(double0: double, vector2d1: $Vector2d$$Type): $Vector2d
public "perpendicular"(): $Vector2d
public "readExternal"(objectInput0: $ObjectInput$$Type): void
public "round"(vector2d0: $Vector2d$$Type): $Vector2d
public "round"(): $Vector2d
public "set"(vector2ic0: $Vector2ic$$Type): $Vector2d
public "set"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $Vector2d
public "set"(byteBuffer0: $ByteBuffer$$Type): $Vector2d
public "set"(vector2dc0: $Vector2dc$$Type): $Vector2d
public "set"(double0: double, double1: double): $Vector2d
public "set"(double0s: double[]): $Vector2d
public "set"(float0s: float[]): $Vector2d
public "set"(double0: double): $Vector2d
public "set"(vector2fc0: $Vector2fc$$Type): $Vector2d
public "set"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $Vector2d
public "set"(doubleBuffer0: $DoubleBuffer$$Type): $Vector2d
public "setComponent"(int0: integer, double1: double): $Vector2d
public "setFromAddress"(long0: long): $Vector2d
public "sub"(vector2dc0: $Vector2dc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
public "sub"(vector2fc0: $Vector2fc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
public "sub"(double0: double, double1: double, vector2d2: $Vector2d$$Type): $Vector2d
public "sub"(double0: double, double1: double): $Vector2d
public "sub"(vector2fc0: $Vector2fc$$Type): $Vector2d
public "sub"(vector2dc0: $Vector2dc$$Type): $Vector2d
public "toString"(numberFormat0: $NumberFormat$$Type): string
public "writeExternal"(objectOutput0: $ObjectOutput$$Type): void
public "x"(): double
public "y"(): double
public "zero"(): $Vector2d
get "finite"(): boolean
set "fromAddress"(value: long)
}
}

declare module "org.joml.Vector4i" {
import { $Cloneable } from "java.lang.Cloneable"
import { $Externalizable } from "java.io.Externalizable"
import { $ObjectOutput$$Type } from "java.io.ObjectOutput"
import { $Vector4dc$$Type } from "org.joml.Vector4dc"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $NumberFormat$$Type } from "java.text.NumberFormat"
import { $Vector2ic$$Type } from "org.joml.Vector2ic"
import { $Vector4ic, $Vector4ic$$Type } from "org.joml.Vector4ic"
import { $Vector3ic$$Type } from "org.joml.Vector3ic"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $IntBuffer, $IntBuffer$$Type } from "java.nio.IntBuffer"
import { $Vector4fc$$Type } from "org.joml.Vector4fc"
import { $ObjectInput$$Type } from "java.io.ObjectInput"

export class $Vector4i implements $Externalizable, $Cloneable, $Vector4ic {
"w": integer
"x": integer
"y": integer
"z": integer

constructor()
constructor(vector2ic0: $Vector2ic$$Type, int1: integer, int2: integer)
constructor(vector3ic0: $Vector3ic$$Type, int1: integer)
constructor(vector4ic0: $Vector4ic$$Type)
constructor(int0: integer)
constructor(vector3fc0: $Vector3fc$$Type, float1: float, int2: integer)
constructor(vector4fc0: $Vector4fc$$Type, int1: integer)
constructor(vector4dc0: $Vector4dc$$Type, int1: integer)
constructor(int0: integer, intBuffer1: $IntBuffer$$Type)
constructor(intBuffer0: $IntBuffer$$Type)
constructor(int0: integer, byteBuffer1: $ByteBuffer$$Type)
constructor(int0: integer, int1: integer, int2: integer, int3: integer)
constructor(int0s: integer[])
constructor(byteBuffer0: $ByteBuffer$$Type)

public "absolute"(): $Vector4i
public "absolute"(vector4i0: $Vector4i$$Type): $Vector4i
public "add"(int0: integer, int1: integer, int2: integer, int3: integer, vector4i4: $Vector4i$$Type): $Vector4i
public "add"(int0: integer, int1: integer, int2: integer, int3: integer): $Vector4i
public "add"(vector4ic0: $Vector4ic$$Type, vector4i1: $Vector4i$$Type): $Vector4i
public "add"(vector4ic0: $Vector4ic$$Type): $Vector4i
public "clone"(): any
public static "distance"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer): double
public "distance"(vector4ic0: $Vector4ic$$Type): double
public "distance"(int0: integer, int1: integer, int2: integer, int3: integer): double
public static "distanceSquared"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer): long
public "distanceSquared"(int0: integer, int1: integer, int2: integer, int3: integer): integer
public "distanceSquared"(vector4ic0: $Vector4ic$$Type): integer
public "div"(vector4ic0: $Vector4ic$$Type, vector4i1: $Vector4i$$Type): $Vector4i
public "div"(vector4ic0: $Vector4ic$$Type): $Vector4i
public "div"(int0: integer, vector4i1: $Vector4i$$Type): $Vector4i
public "div"(int0: integer): $Vector4i
public "div"(float0: float, vector4i1: $Vector4i$$Type): $Vector4i
public "div"(float0: float): $Vector4i
public "dot"(vector4ic0: $Vector4ic$$Type): integer
public "equals"(int0: integer, int1: integer, int2: integer, int3: integer): boolean
public "get"(intBuffer0: $IntBuffer$$Type): $IntBuffer
public "get"(int0: integer, intBuffer1: $IntBuffer$$Type): $IntBuffer
public "get"(int0: integer): integer
public "get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "getToAddress"(long0: long): $Vector4ic
public "gridDistance"(int0: integer, int1: integer, int2: integer, int3: integer): long
public "gridDistance"(vector4ic0: $Vector4ic$$Type): long
public static "length"(int0: integer, int1: integer, int2: integer, int3: integer): double
public "length"(): double
public static "lengthSquared"(int0: integer, int1: integer, int2: integer, int3: integer): long
public "lengthSquared"(): long
public "max"(vector4ic0: $Vector4ic$$Type, vector4i1: $Vector4i$$Type): $Vector4i
public "max"(vector4ic0: $Vector4ic$$Type): $Vector4i
public "maxComponent"(): integer
public "min"(vector4ic0: $Vector4ic$$Type): $Vector4i
public "min"(vector4ic0: $Vector4ic$$Type, vector4i1: $Vector4i$$Type): $Vector4i
public "minComponent"(): integer
public "mul"(int0: integer, vector4i1: $Vector4i$$Type): $Vector4i
public "mul"(int0: integer): $Vector4i
public "mul"(vector4ic0: $Vector4ic$$Type): $Vector4i
public "mul"(vector4ic0: $Vector4ic$$Type, vector4i1: $Vector4i$$Type): $Vector4i
public "negate"(): $Vector4i
public "negate"(vector4i0: $Vector4i$$Type): $Vector4i
public "readExternal"(objectInput0: $ObjectInput$$Type): void
public "set"(byteBuffer0: $ByteBuffer$$Type): $Vector4i
public "set"(int0s: integer[]): $Vector4i
public "set"(int0: integer, int1: integer, int2: integer, int3: integer): $Vector4i
public "set"(vector4ic0: $Vector4ic$$Type): $Vector4i
public "set"(int0: integer): $Vector4i
public "set"(int0: integer, intBuffer1: $IntBuffer$$Type): $Vector4i
public "set"(intBuffer0: $IntBuffer$$Type): $Vector4i
public "set"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $Vector4i
public "set"(vector4fc0: $Vector4fc$$Type, int1: integer): $Vector4i
public "set"(vector3ic0: $Vector3ic$$Type, int1: integer): $Vector4i
public "set"(vector2ic0: $Vector2ic$$Type, int1: integer, int2: integer): $Vector4i
public "set"(vector4dc0: $Vector4dc$$Type): $Vector4i
public "set"(vector4dc0: $Vector4dc$$Type, int1: integer): $Vector4i
public "setComponent"(int0: integer, int1: integer): $Vector4i
public "setFromAddress"(long0: long): $Vector4i
public "sub"(vector4ic0: $Vector4ic$$Type, vector4i1: $Vector4i$$Type): $Vector4i
public "sub"(int0: integer, int1: integer, int2: integer, int3: integer, vector4i4: $Vector4i$$Type): $Vector4i
public "sub"(vector4ic0: $Vector4ic$$Type): $Vector4i
public "sub"(int0: integer, int1: integer, int2: integer, int3: integer): $Vector4i
public "toString"(numberFormat0: $NumberFormat$$Type): string
public "w"(): integer
public "writeExternal"(objectOutput0: $ObjectOutput$$Type): void
public "x"(): integer
public "y"(): integer
public "z"(): integer
public "zero"(): $Vector4i
set "fromAddress"(value: long)
}
}

declare module "org.joml.Vector4f" {
import { $Cloneable } from "java.lang.Cloneable"
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Externalizable } from "java.io.Externalizable"
import { $ObjectOutput$$Type } from "java.io.ObjectOutput"
import { $Vector4dc$$Type } from "org.joml.Vector4dc"
import { $Matrix4fc$$Type } from "org.joml.Matrix4fc"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $NumberFormat$$Type } from "java.text.NumberFormat"
import { $Vector2ic$$Type } from "org.joml.Vector2ic"
import { $Matrix4x3fc$$Type } from "org.joml.Matrix4x3fc"
import { $Vector4ic$$Type } from "org.joml.Vector4ic"
import { $Vector3ic$$Type } from "org.joml.Vector3ic"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $Vector2fc$$Type } from "org.joml.Vector2fc"
import { $Vector4i, $Vector4i$$Type } from "org.joml.Vector4i"
import { $Vector4fc, $Vector4fc$$Type } from "org.joml.Vector4fc"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $ObjectInput$$Type } from "java.io.ObjectInput"
import { $Vector4d, $Vector4d$$Type } from "org.joml.Vector4d"
import { $Quaternionfc$$Type } from "org.joml.Quaternionfc"

export class $Vector4f implements $Externalizable, $Cloneable, $Vector4fc {
"w": float
"x": float
"y": float
"z": float

constructor()
constructor(vector3ic0: $Vector3ic$$Type, float1: float)
constructor(float0s: float[])
constructor(byteBuffer0: $ByteBuffer$$Type)
constructor(int0: integer, byteBuffer1: $ByteBuffer$$Type)
constructor(floatBuffer0: $FloatBuffer$$Type)
constructor(vector2ic0: $Vector2ic$$Type, float1: float, float2: float)
constructor(vector2fc0: $Vector2fc$$Type, float1: float, float2: float)
constructor(float0: float)
constructor(float0: float, float1: float, float2: float, float3: float)
constructor(vector3fc0: $Vector3fc$$Type, float1: float)
constructor(vector4fc0: $Vector4fc$$Type)
constructor(int0: integer, floatBuffer1: $FloatBuffer$$Type)
constructor(vector4ic0: $Vector4ic$$Type)

public "absolute"(vector4f0: $Vector4f$$Type): $Vector4f
public "absolute"(): $Vector4f
public "add"(vector4fc0: $Vector4fc$$Type): $Vector4f
public "add"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
public "add"(float0: float, float1: float, float2: float, float3: float): $Vector4f
public "add"(float0: float, float1: float, float2: float, float3: float, vector4f4: $Vector4f$$Type): $Vector4f
public "angle"(vector4fc0: $Vector4fc$$Type): float
public "angleCos"(vector4fc0: $Vector4fc$$Type): float
public "ceil"(vector4f0: $Vector4f$$Type): $Vector4f
public "ceil"(): $Vector4f
public "clone"(): any
public "distance"(vector4fc0: $Vector4fc$$Type): float
public "distance"(float0: float, float1: float, float2: float, float3: float): float
public static "distance"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float): float
public "distanceSquared"(vector4fc0: $Vector4fc$$Type): float
public "distanceSquared"(float0: float, float1: float, float2: float, float3: float): float
public static "distanceSquared"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float): float
public "div"(vector4fc0: $Vector4fc$$Type): $Vector4f
public "div"(float0: float, float1: float, float2: float, float3: float, vector4f4: $Vector4f$$Type): $Vector4f
public "div"(float0: float, float1: float, float2: float, float3: float): $Vector4f
public "div"(float0: float): $Vector4f
public "div"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
public "div"(float0: float, vector4f1: $Vector4f$$Type): $Vector4f
public "dot"(vector4fc0: $Vector4fc$$Type): float
public "dot"(float0: float, float1: float, float2: float, float3: float): float
public "equals"(vector4fc0: $Vector4fc$$Type, float1: float): boolean
public "equals"(float0: float, float1: float, float2: float, float3: float): boolean
public "floor"(): $Vector4f
public "floor"(vector4f0: $Vector4f$$Type): $Vector4f
public "fma"(float0: float, vector4fc1: $Vector4fc$$Type, vector4f2: $Vector4f$$Type): $Vector4f
public "fma"(float0: float, vector4fc1: $Vector4fc$$Type): $Vector4f
public "fma"(vector4fc0: $Vector4fc$$Type, vector4fc1: $Vector4fc$$Type): $Vector4f
public "fma"(vector4fc0: $Vector4fc$$Type, vector4fc1: $Vector4fc$$Type, vector4f2: $Vector4f$$Type): $Vector4f
public "get"(vector4f0: $Vector4f$$Type): $Vector4f
public "get"(int0: integer, vector4i1: $Vector4i$$Type): $Vector4i
public "get"(int0: integer): float
public "get"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "get"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "get"(vector4d0: $Vector4d$$Type): $Vector4d
public "getToAddress"(long0: long): $Vector4fc
public "hermite"(vector4fc0: $Vector4fc$$Type, vector4fc1: $Vector4fc$$Type, vector4fc2: $Vector4fc$$Type, float3: float, vector4f4: $Vector4f$$Type): $Vector4f
public "isFinite"(): boolean
public static "length"(float0: float, float1: float, float2: float, float3: float): float
public "length"(): float
public "lengthSquared"(): float
public static "lengthSquared"(int0: integer, int1: integer, int2: integer, int3: integer): float
public static "lengthSquared"(float0: float, float1: float, float2: float, float3: float): float
public "lerp"(vector4fc0: $Vector4fc$$Type, float1: float, vector4f2: $Vector4f$$Type): $Vector4f
public "lerp"(vector4fc0: $Vector4fc$$Type, float1: float): $Vector4f
public "max"(vector4fc0: $Vector4fc$$Type): $Vector4f
public "max"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
public "maxComponent"(): integer
public "min"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
public "min"(vector4fc0: $Vector4fc$$Type): $Vector4f
public "minComponent"(): integer
public "mul"(matrix4x3fc0: $Matrix4x3fc$$Type): $Vector4f
public "mul"(matrix4x3fc0: $Matrix4x3fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
public "mul"(matrix4fc0: $Matrix4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
public "mul"(matrix4fc0: $Matrix4fc$$Type): $Vector4f
public "mul"(vector4fc0: $Vector4fc$$Type): $Vector4f
public "mul"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
public "mul"(float0: float, vector4f1: $Vector4f$$Type): $Vector4f
public "mul"(float0: float, float1: float, float2: float, float3: float): $Vector4f
public "mul"(float0: float, float1: float, float2: float, float3: float, vector4f4: $Vector4f$$Type): $Vector4f
public "mul"(float0: float): $Vector4f
public "mulAdd"(vector4fc0: $Vector4fc$$Type, vector4fc1: $Vector4fc$$Type, vector4f2: $Vector4f$$Type): $Vector4f
public "mulAdd"(float0: float, vector4fc1: $Vector4fc$$Type): $Vector4f
public "mulAdd"(float0: float, vector4fc1: $Vector4fc$$Type, vector4f2: $Vector4f$$Type): $Vector4f
public "mulAdd"(vector4fc0: $Vector4fc$$Type, vector4fc1: $Vector4fc$$Type): $Vector4f
public "mulAffine"(matrix4fc0: $Matrix4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
public "mulAffineTranspose"(matrix4fc0: $Matrix4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
public "mulProject"(matrix4fc0: $Matrix4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
public "mulProject"(matrix4fc0: $Matrix4fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "mulProject"(matrix4fc0: $Matrix4fc$$Type): $Vector4f
public "mulTranspose"(matrix4fc0: $Matrix4fc$$Type): $Vector4f
public "mulTranspose"(matrix4fc0: $Matrix4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
public "negate"(): $Vector4f
public "negate"(vector4f0: $Vector4f$$Type): $Vector4f
public "normalize"(float0: float, vector4f1: $Vector4f$$Type): $Vector4f
public "normalize"(): $Vector4f
public "normalize"(float0: float): $Vector4f
public "normalize"(vector4f0: $Vector4f$$Type): $Vector4f
public "normalize3"(vector4f0: $Vector4f$$Type): $Vector4f
public "normalize3"(): $Vector4f
public "readExternal"(objectInput0: $ObjectInput$$Type): void
public "rotate"(quaternionfc0: $Quaternionfc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
public "rotate"(quaternionfc0: $Quaternionfc$$Type): $Vector4f
public "rotateAbout"(float0: float, float1: float, float2: float, float3: float): $Vector4f
public "rotateAxis"(float0: float, float1: float, float2: float, float3: float, vector4f4: $Vector4f$$Type): $Vector4f
public "rotateX"(float0: float, vector4f1: $Vector4f$$Type): $Vector4f
public "rotateX"(float0: float): $Vector4f
public "rotateY"(float0: float, vector4f1: $Vector4f$$Type): $Vector4f
public "rotateY"(float0: float): $Vector4f
public "rotateZ"(float0: float): $Vector4f
public "rotateZ"(float0: float, vector4f1: $Vector4f$$Type): $Vector4f
public "round"(vector4f0: $Vector4f$$Type): $Vector4f
public "round"(): $Vector4f
public "set"(float0: float, float1: float, float2: float, float3: float): $Vector4f
public "set"(float0: float, float1: float, float2: float): $Vector4f
public "set"(double0: double): $Vector4f
public "set"(float0: float): $Vector4f
public "set"(vector2ic0: $Vector2ic$$Type, float1: float, float2: float): $Vector4f
public "set"(vector2fc0: $Vector2fc$$Type, float1: float, float2: float): $Vector4f
public "set"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $Vector4f
public "set"(floatBuffer0: $FloatBuffer$$Type): $Vector4f
public "set"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $Vector4f
public "set"(byteBuffer0: $ByteBuffer$$Type): $Vector4f
public "set"(float0s: float[]): $Vector4f
public "set"(double0: double, double1: double, double2: double, double3: double): $Vector4f
public "set"(vector3fc0: $Vector3fc$$Type, float1: float): $Vector4f
public "set"(vector4dc0: $Vector4dc$$Type): $Vector4f
public "set"(vector4ic0: $Vector4ic$$Type): $Vector4f
public "set"(vector4fc0: $Vector4fc$$Type): $Vector4f
public "set"(vector3ic0: $Vector3ic$$Type, float1: float): $Vector4f
public "setComponent"(int0: integer, float1: float): $Vector4f
public "setFromAddress"(long0: long): $Vector4f
public "smoothStep"(vector4fc0: $Vector4fc$$Type, float1: float, vector4f2: $Vector4f$$Type): $Vector4f
public "sub"(float0: float, float1: float, float2: float, float3: float, vector4f4: $Vector4f$$Type): $Vector4f
public "sub"(vector4fc0: $Vector4fc$$Type): $Vector4f
public "sub"(float0: float, float1: float, float2: float, float3: float): $Vector4f
public "sub"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
public "toString"(numberFormat0: $NumberFormat$$Type): string
public "w"(): float
public "writeExternal"(objectOutput0: $ObjectOutput$$Type): void
public "x"(): float
public "y"(): float
public "z"(): float
public "zero"(): $Vector4f
get "finite"(): boolean
set "fromAddress"(value: long)
}
}

declare module "org.joml.Vector4d" {
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $ObjectOutput$$Type } from "java.io.ObjectOutput"
import { $Matrix4dc$$Type } from "org.joml.Matrix4dc"
import { $Matrix4fc$$Type } from "org.joml.Matrix4fc"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $NumberFormat$$Type } from "java.text.NumberFormat"
import { $Vector2ic$$Type } from "org.joml.Vector2ic"
import { $Vector4ic$$Type } from "org.joml.Vector4ic"
import { $Vector3ic$$Type } from "org.joml.Vector3ic"
import { $Quaterniondc$$Type } from "org.joml.Quaterniondc"
import { $Vector3d, $Vector3d$$Type } from "org.joml.Vector3d"
import { $Cloneable } from "java.lang.Cloneable"
import { $Externalizable } from "java.io.Externalizable"
import { $DoubleBuffer, $DoubleBuffer$$Type } from "java.nio.DoubleBuffer"
import { $Vector4dc, $Vector4dc$$Type } from "org.joml.Vector4dc"
import { $Matrix4x3fc$$Type } from "org.joml.Matrix4x3fc"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $Vector2fc$$Type } from "org.joml.Vector2fc"
import { $Vector3dc$$Type } from "org.joml.Vector3dc"
import { $Vector4i, $Vector4i$$Type } from "org.joml.Vector4i"
import { $Matrix4x3dc$$Type } from "org.joml.Matrix4x3dc"
import { $Vector2dc$$Type } from "org.joml.Vector2dc"
import { $Vector4fc$$Type } from "org.joml.Vector4fc"
import { $ObjectInput$$Type } from "java.io.ObjectInput"
import { $Vector4f, $Vector4f$$Type } from "org.joml.Vector4f"

export class $Vector4d implements $Externalizable, $Cloneable, $Vector4dc {
"w": double
"x": double
"y": double
"z": double

constructor()
constructor(vector3ic0: $Vector3ic$$Type, double1: double)
constructor(double0: double, double1: double, double2: double, double3: double)
constructor(float0s: float[])
constructor(double0s: double[])
constructor(byteBuffer0: $ByteBuffer$$Type)
constructor(int0: integer, doubleBuffer1: $DoubleBuffer$$Type)
constructor(vector2ic0: $Vector2ic$$Type, double1: double, double2: double)
constructor(vector2dc0: $Vector2dc$$Type, double1: double, double2: double)
constructor(double0: double)
constructor(vector4fc0: $Vector4fc$$Type)
constructor(vector3fc0: $Vector3fc$$Type, double1: double)
constructor(vector2fc0: $Vector2fc$$Type, double1: double, double2: double)
constructor(vector3dc0: $Vector3dc$$Type, double1: double)
constructor(vector4ic0: $Vector4ic$$Type)
constructor(vector4dc0: $Vector4dc$$Type)
constructor(doubleBuffer0: $DoubleBuffer$$Type)
constructor(int0: integer, byteBuffer1: $ByteBuffer$$Type)

public "absolute"(): $Vector4d
public "absolute"(vector4d0: $Vector4d$$Type): $Vector4d
public "add"(vector4fc0: $Vector4fc$$Type): $Vector4d
public "add"(vector4dc0: $Vector4dc$$Type): $Vector4d
public "add"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "add"(vector4fc0: $Vector4fc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "add"(double0: double, double1: double, double2: double, double3: double): $Vector4d
public "add"(double0: double, double1: double, double2: double, double3: double, vector4d4: $Vector4d$$Type): $Vector4d
public "angle"(vector4dc0: $Vector4dc$$Type): double
public "angleCos"(vector4dc0: $Vector4dc$$Type): double
public "ceil"(vector4d0: $Vector4d$$Type): $Vector4d
public "ceil"(): $Vector4d
public "clone"(): any
public "distance"(double0: double, double1: double, double2: double, double3: double): double
public "distance"(vector4dc0: $Vector4dc$$Type): double
public static "distance"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double): double
public static "distanceSquared"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double): double
public "distanceSquared"(double0: double, double1: double, double2: double, double3: double): double
public "distanceSquared"(vector4dc0: $Vector4dc$$Type): double
public "div"(vector4dc0: $Vector4dc$$Type): $Vector4d
public "div"(double0: double, vector4d1: $Vector4d$$Type): $Vector4d
public "div"(double0: double): $Vector4d
public "div"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "dot"(double0: double, double1: double, double2: double, double3: double): double
public "dot"(vector4dc0: $Vector4dc$$Type): double
public "equals"(double0: double, double1: double, double2: double, double3: double): boolean
public "equals"(vector4dc0: $Vector4dc$$Type, double1: double): boolean
public "floor"(): $Vector4d
public "floor"(vector4d0: $Vector4d$$Type): $Vector4d
public "fma"(double0: double, vector4dc1: $Vector4dc$$Type): $Vector4d
public "fma"(vector4dc0: $Vector4dc$$Type, vector4dc1: $Vector4dc$$Type, vector4d2: $Vector4d$$Type): $Vector4d
public "fma"(double0: double, vector4dc1: $Vector4dc$$Type, vector4d2: $Vector4d$$Type): $Vector4d
public "fma"(vector4dc0: $Vector4dc$$Type, vector4dc1: $Vector4dc$$Type): $Vector4d
public "get"(int0: integer, vector4i1: $Vector4i$$Type): $Vector4i
public "get"(int0: integer): double
public "get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "get"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
public "get"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
public "get"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "get"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "get"(vector4f0: $Vector4f$$Type): $Vector4f
public "get"(vector4d0: $Vector4d$$Type): $Vector4d
public "getToAddress"(long0: long): $Vector4dc
public "getf"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "getf"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "hermite"(vector4dc0: $Vector4dc$$Type, vector4dc1: $Vector4dc$$Type, vector4dc2: $Vector4dc$$Type, double3: double, vector4d4: $Vector4d$$Type): $Vector4d
public "isFinite"(): boolean
public static "length"(double0: double, double1: double, double2: double, double3: double): double
public "length"(): double
public "lengthSquared"(): double
public static "lengthSquared"(double0: double, double1: double, double2: double, double3: double): double
public "lerp"(vector4dc0: $Vector4dc$$Type, double1: double): $Vector4d
public "lerp"(vector4dc0: $Vector4dc$$Type, double1: double, vector4d2: $Vector4d$$Type): $Vector4d
public "max"(vector4dc0: $Vector4dc$$Type): $Vector4d
public "max"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "maxComponent"(): integer
public "min"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "min"(vector4dc0: $Vector4dc$$Type): $Vector4d
public "minComponent"(): integer
public "mul"(matrix4dc0: $Matrix4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "mul"(double0: double): $Vector4d
public "mul"(matrix4fc0: $Matrix4fc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "mul"(matrix4fc0: $Matrix4fc$$Type): $Vector4d
public "mul"(matrix4dc0: $Matrix4dc$$Type): $Vector4d
public "mul"(vector4dc0: $Vector4dc$$Type): $Vector4d
public "mul"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "mul"(vector4fc0: $Vector4fc$$Type): $Vector4d
public "mul"(vector4fc0: $Vector4fc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "mul"(matrix4x3fc0: $Matrix4x3fc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "mul"(matrix4x3fc0: $Matrix4x3fc$$Type): $Vector4d
public "mul"(matrix4x3dc0: $Matrix4x3dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "mul"(matrix4x3dc0: $Matrix4x3dc$$Type): $Vector4d
public "mul"(double0: double, vector4d1: $Vector4d$$Type): $Vector4d
public "mulAdd"(vector4dc0: $Vector4dc$$Type, vector4dc1: $Vector4dc$$Type, vector4d2: $Vector4d$$Type): $Vector4d
public "mulAdd"(double0: double, vector4dc1: $Vector4dc$$Type, vector4d2: $Vector4d$$Type): $Vector4d
public "mulAdd"(vector4dc0: $Vector4dc$$Type, vector4dc1: $Vector4dc$$Type): $Vector4d
public "mulAdd"(double0: double, vector4dc1: $Vector4dc$$Type): $Vector4d
public "mulAffine"(matrix4dc0: $Matrix4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "mulAffineTranspose"(matrix4dc0: $Matrix4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "mulProject"(matrix4dc0: $Matrix4dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "mulProject"(matrix4dc0: $Matrix4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "mulProject"(matrix4dc0: $Matrix4dc$$Type): $Vector4d
public "mulTranspose"(matrix4dc0: $Matrix4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "mulTranspose"(matrix4dc0: $Matrix4dc$$Type): $Vector4d
public "negate"(): $Vector4d
public "negate"(vector4d0: $Vector4d$$Type): $Vector4d
public "normalize"(double0: double, vector4d1: $Vector4d$$Type): $Vector4d
public "normalize"(double0: double): $Vector4d
public "normalize"(): $Vector4d
public "normalize"(vector4d0: $Vector4d$$Type): $Vector4d
public "normalize3"(): $Vector4d
public "normalize3"(vector4d0: $Vector4d$$Type): $Vector4d
public "readExternal"(objectInput0: $ObjectInput$$Type): void
public "rotate"(quaterniondc0: $Quaterniondc$$Type): $Vector4d
public "rotate"(quaterniondc0: $Quaterniondc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "rotateAxis"(double0: double, double1: double, double2: double, double3: double): $Vector4d
public "rotateAxis"(double0: double, double1: double, double2: double, double3: double, vector4d4: $Vector4d$$Type): $Vector4d
public "rotateX"(double0: double, vector4d1: $Vector4d$$Type): $Vector4d
public "rotateX"(double0: double): $Vector4d
public "rotateY"(double0: double): $Vector4d
public "rotateY"(double0: double, vector4d1: $Vector4d$$Type): $Vector4d
public "rotateZ"(double0: double): $Vector4d
public "rotateZ"(double0: double, vector4d1: $Vector4d$$Type): $Vector4d
public "round"(vector4d0: $Vector4d$$Type): $Vector4d
public "round"(): $Vector4d
public "set"(double0: double): $Vector4d
public "set"(vector2fc0: $Vector2fc$$Type, double1: double, double2: double): $Vector4d
public "set"(double0: double, double1: double, double2: double, double3: double): $Vector4d
public "set"(double0: double, double1: double, double2: double): $Vector4d
public "set"(vector2ic0: $Vector2ic$$Type, double1: double, double2: double): $Vector4d
public "set"(vector2dc0: $Vector2dc$$Type, double1: double, double2: double): $Vector4d
public "set"(vector3fc0: $Vector3fc$$Type, double1: double): $Vector4d
public "set"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $Vector4d
public "set"(doubleBuffer0: $DoubleBuffer$$Type): $Vector4d
public "set"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $Vector4d
public "set"(byteBuffer0: $ByteBuffer$$Type): $Vector4d
public "set"(float0s: float[]): $Vector4d
public "set"(double0s: double[]): $Vector4d
public "set"(vector4dc0: $Vector4dc$$Type): $Vector4d
public "set"(vector4fc0: $Vector4fc$$Type): $Vector4d
public "set"(vector4ic0: $Vector4ic$$Type): $Vector4d
public "set"(vector3dc0: $Vector3dc$$Type, double1: double): $Vector4d
public "set"(vector3ic0: $Vector3ic$$Type, double1: double): $Vector4d
public "setComponent"(int0: integer, double1: double): $Vector4d
public "setFromAddress"(long0: long): $Vector4d
public "smoothStep"(vector4dc0: $Vector4dc$$Type, double1: double, vector4d2: $Vector4d$$Type): $Vector4d
public "sub"(vector4dc0: $Vector4dc$$Type): $Vector4d
public "sub"(double0: double, double1: double, double2: double, double3: double, vector4d4: $Vector4d$$Type): $Vector4d
public "sub"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "sub"(double0: double, double1: double, double2: double, double3: double): $Vector4d
public "sub"(vector4fc0: $Vector4fc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "sub"(vector4fc0: $Vector4fc$$Type): $Vector4d
public "toString"(numberFormat0: $NumberFormat$$Type): string
public "w"(): double
public "writeExternal"(objectOutput0: $ObjectOutput$$Type): void
public "x"(): double
public "y"(): double
public "z"(): double
public "zero"(): $Vector4d
get "finite"(): boolean
set "fromAddress"(value: long)
}
}

declare module "org.joml.Matrix3x2dc" {
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Vector2fc$$Type } from "org.joml.Vector2fc"
import { $Vector3dc$$Type } from "org.joml.Vector3dc"
import { $DoubleBuffer, $DoubleBuffer$$Type } from "java.nio.DoubleBuffer"
import { $Vector2dc$$Type } from "org.joml.Vector2dc"
import { $Matrix3x2d, $Matrix3x2d$$Type } from "org.joml.Matrix3x2d"
import { $Vector3d, $Vector3d$$Type } from "org.joml.Vector3d"
import { $Vector2d, $Vector2d$$Type } from "org.joml.Vector2d"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export interface $Matrix3x2dc {
"determinant"(): double
"equals"(matrix3x2dc0: $Matrix3x2dc$$Type, double1: double): boolean
"get"(matrix3x2d0: $Matrix3x2d$$Type): $Matrix3x2d
"get"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
"get"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
"get"(double0s: double[]): double[]
"get"(double0s: double[], int1: integer): double[]
"get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"get3x3"(double0s: double[]): double[]
"get3x3"(double0s: double[], int1: integer): double[]
"get3x3"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
"get3x3"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
"get3x3"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"get3x3"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"get4x4"(double0s: double[]): double[]
"get4x4"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
"get4x4"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
"get4x4"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"get4x4"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"get4x4"(double0s: double[], int1: integer): double[]
"getToAddress"(long0: long): $Matrix3x2dc
"getTransposed"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"getTransposed"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"getTransposed"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
"getTransposed"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
"getTransposed"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"getTransposed"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"getTransposedFloats"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"getTransposedFloats"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"invert"(matrix3x2d0: $Matrix3x2d$$Type): $Matrix3x2d
"isFinite"(): boolean
"m00"(): double
"m01"(): double
"m10"(): double
"m11"(): double
"m20"(): double
"m21"(): double
"mul"(matrix3x2dc0: $Matrix3x2dc$$Type, matrix3x2d1: $Matrix3x2d$$Type): $Matrix3x2d
"mulLocal"(matrix3x2dc0: $Matrix3x2dc$$Type, matrix3x2d1: $Matrix3x2d$$Type): $Matrix3x2d
"normalizedPositiveX"(vector2d0: $Vector2d$$Type): $Vector2d
"normalizedPositiveY"(vector2d0: $Vector2d$$Type): $Vector2d
"origin"(vector2d0: $Vector2d$$Type): $Vector2d
"positiveX"(vector2d0: $Vector2d$$Type): $Vector2d
"positiveY"(vector2d0: $Vector2d$$Type): $Vector2d
"rotate"(double0: double, matrix3x2d1: $Matrix3x2d$$Type): $Matrix3x2d
"rotateAbout"(double0: double, double1: double, double2: double, matrix3x2d3: $Matrix3x2d$$Type): $Matrix3x2d
"rotateLocal"(double0: double, matrix3x2d1: $Matrix3x2d$$Type): $Matrix3x2d
"rotateTo"(vector2dc0: $Vector2dc$$Type, vector2dc1: $Vector2dc$$Type, matrix3x2d2: $Matrix3x2d$$Type): $Matrix3x2d
"scale"(double0: double, double1: double, matrix3x2d2: $Matrix3x2d$$Type): $Matrix3x2d
"scale"(vector2dc0: $Vector2dc$$Type, matrix3x2d1: $Matrix3x2d$$Type): $Matrix3x2d
"scale"(vector2fc0: $Vector2fc$$Type, matrix3x2d1: $Matrix3x2d$$Type): $Matrix3x2d
"scale"(double0: double, matrix3x2d1: $Matrix3x2d$$Type): $Matrix3x2d
"scaleAround"(double0: double, double1: double, double2: double, double3: double, matrix3x2d4: $Matrix3x2d$$Type): $Matrix3x2d
"scaleAround"(double0: double, double1: double, double2: double, matrix3x2d3: $Matrix3x2d$$Type): $Matrix3x2d
"scaleAroundLocal"(double0: double, double1: double, double2: double, double3: double, matrix3x2d4: $Matrix3x2d$$Type): $Matrix3x2d
"scaleAroundLocal"(double0: double, double1: double, double2: double, matrix3x2d3: $Matrix3x2d$$Type): $Matrix3x2d
"scaleLocal"(double0: double, double1: double, matrix3x2d2: $Matrix3x2d$$Type): $Matrix3x2d
"scaleLocal"(double0: double, matrix3x2d1: $Matrix3x2d$$Type): $Matrix3x2d
"testAar"(double0: double, double1: double, double2: double, double3: double): boolean
"testCircle"(double0: double, double1: double, double2: double): boolean
"testPoint"(double0: double, double1: double): boolean
"transform"(vector3d0: $Vector3d$$Type): $Vector3d
"transform"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
"transform"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
"transformDirection"(vector2d0: $Vector2d$$Type): $Vector2d
"transformDirection"(double0: double, double1: double, vector2d2: $Vector2d$$Type): $Vector2d
"transformDirection"(vector2dc0: $Vector2dc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
"transformPosition"(vector2d0: $Vector2d$$Type): $Vector2d
"transformPosition"(vector2dc0: $Vector2dc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
"transformPosition"(double0: double, double1: double, vector2d2: $Vector2d$$Type): $Vector2d
"translate"(vector2dc0: $Vector2dc$$Type, matrix3x2d1: $Matrix3x2d$$Type): $Matrix3x2d
"translate"(double0: double, double1: double, matrix3x2d2: $Matrix3x2d$$Type): $Matrix3x2d
"translateLocal"(double0: double, double1: double, matrix3x2d2: $Matrix3x2d$$Type): $Matrix3x2d
"translateLocal"(vector2dc0: $Vector2dc$$Type, matrix3x2d1: $Matrix3x2d$$Type): $Matrix3x2d
"unproject"(double0: double, double1: double, int2s: integer[], vector2d3: $Vector2d$$Type): $Vector2d
"unprojectInv"(double0: double, double1: double, int2s: integer[], vector2d3: $Vector2d$$Type): $Vector2d
"view"(double0: double, double1: double, double2: double, double3: double, matrix3x2d4: $Matrix3x2d$$Type): $Matrix3x2d
"viewArea"(double0s: double[]): double[]
get "finite"(): boolean
}

export namespace $Matrix3x2dc {
const probejs$$marker: never
}
export abstract class $Matrix3x2dc$$Static implements $Matrix3x2dc {
}
}

declare module "org.joml.Matrix3x2fc" {
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Vector2fc$$Type } from "org.joml.Vector2fc"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Vector2f, $Vector2f$$Type } from "org.joml.Vector2f"
import { $Matrix3x2f, $Matrix3x2f$$Type } from "org.joml.Matrix3x2f"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export interface $Matrix3x2fc {
"determinant"(): float
"equals"(matrix3x2fc0: $Matrix3x2fc$$Type, float1: float): boolean
"get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"get"(float0s: float[], int1: integer): float[]
"get"(float0s: float[]): float[]
"get"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"get"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"get"(matrix3x2f0: $Matrix3x2f$$Type): $Matrix3x2f
"get3x3"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"get3x3"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"get3x3"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"get3x3"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"get3x3"(float0s: float[]): float[]
"get3x3"(float0s: float[], int1: integer): float[]
"get4x4"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
"get4x4"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
"get4x4"(float0s: float[], int1: integer): float[]
"get4x4"(float0s: float[]): float[]
"get4x4"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
"get4x4"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
"getToAddress"(long0: long): $Matrix3x2fc
"invert"(matrix3x2f0: $Matrix3x2f$$Type): $Matrix3x2f
"isFinite"(): boolean
"m00"(): float
"m01"(): float
"m10"(): float
"m11"(): float
"m20"(): float
"m21"(): float
"mul"(matrix3x2fc0: $Matrix3x2fc$$Type, matrix3x2f1: $Matrix3x2f$$Type): $Matrix3x2f
"mulLocal"(matrix3x2fc0: $Matrix3x2fc$$Type, matrix3x2f1: $Matrix3x2f$$Type): $Matrix3x2f
"normalizedPositiveX"(vector2f0: $Vector2f$$Type): $Vector2f
"normalizedPositiveY"(vector2f0: $Vector2f$$Type): $Vector2f
"origin"(vector2f0: $Vector2f$$Type): $Vector2f
"positiveX"(vector2f0: $Vector2f$$Type): $Vector2f
"positiveY"(vector2f0: $Vector2f$$Type): $Vector2f
"rotate"(float0: float, matrix3x2f1: $Matrix3x2f$$Type): $Matrix3x2f
"rotateAbout"(float0: float, float1: float, float2: float, matrix3x2f3: $Matrix3x2f$$Type): $Matrix3x2f
"rotateLocal"(float0: float, matrix3x2f1: $Matrix3x2f$$Type): $Matrix3x2f
"rotateTo"(vector2fc0: $Vector2fc$$Type, vector2fc1: $Vector2fc$$Type, matrix3x2f2: $Matrix3x2f$$Type): $Matrix3x2f
"scale"(vector2fc0: $Vector2fc$$Type, matrix3x2f1: $Matrix3x2f$$Type): $Matrix3x2f
"scale"(float0: float, float1: float, matrix3x2f2: $Matrix3x2f$$Type): $Matrix3x2f
"scale"(float0: float, matrix3x2f1: $Matrix3x2f$$Type): $Matrix3x2f
"scaleAround"(float0: float, float1: float, float2: float, matrix3x2f3: $Matrix3x2f$$Type): $Matrix3x2f
"scaleAround"(float0: float, float1: float, float2: float, float3: float, matrix3x2f4: $Matrix3x2f$$Type): $Matrix3x2f
"scaleAroundLocal"(float0: float, float1: float, float2: float, float3: float, matrix3x2f4: $Matrix3x2f$$Type): $Matrix3x2f
"scaleAroundLocal"(float0: float, float1: float, float2: float, matrix3x2f3: $Matrix3x2f$$Type): $Matrix3x2f
"scaleLocal"(float0: float, float1: float, matrix3x2f2: $Matrix3x2f$$Type): $Matrix3x2f
"scaleLocal"(float0: float, matrix3x2f1: $Matrix3x2f$$Type): $Matrix3x2f
"testAar"(float0: float, float1: float, float2: float, float3: float): boolean
"testCircle"(float0: float, float1: float, float2: float): boolean
"testPoint"(float0: float, float1: float): boolean
"transform"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
"transform"(vector3f0: $Vector3f$$Type): $Vector3f
"transform"(vector3f0: $Vector3f$$Type, vector3f1: $Vector3f$$Type): $Vector3f
"transformDirection"(float0: float, float1: float, vector2f2: $Vector2f$$Type): $Vector2f
"transformDirection"(vector2fc0: $Vector2fc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
"transformDirection"(vector2f0: $Vector2f$$Type): $Vector2f
"transformPosition"(float0: float, float1: float, vector2f2: $Vector2f$$Type): $Vector2f
"transformPosition"(vector2f0: $Vector2f$$Type): $Vector2f
"transformPosition"(vector2fc0: $Vector2fc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
"translate"(float0: float, float1: float, matrix3x2f2: $Matrix3x2f$$Type): $Matrix3x2f
"translate"(vector2fc0: $Vector2fc$$Type, matrix3x2f1: $Matrix3x2f$$Type): $Matrix3x2f
"translateLocal"(float0: float, float1: float, matrix3x2f2: $Matrix3x2f$$Type): $Matrix3x2f
"translateLocal"(vector2fc0: $Vector2fc$$Type, matrix3x2f1: $Matrix3x2f$$Type): $Matrix3x2f
"unproject"(float0: float, float1: float, int2s: integer[], vector2f3: $Vector2f$$Type): $Vector2f
"unprojectInv"(float0: float, float1: float, int2s: integer[], vector2f3: $Vector2f$$Type): $Vector2f
"view"(float0: float, float1: float, float2: float, float3: float, matrix3x2f4: $Matrix3x2f$$Type): $Matrix3x2f
"viewArea"(float0s: float[]): float[]
get "finite"(): boolean
}

export namespace $Matrix3x2fc {
const probejs$$marker: never
}
export abstract class $Matrix3x2fc$$Static implements $Matrix3x2fc {
}
}

declare module "org.joml.Matrix2f" {
import { $Cloneable } from "java.lang.Cloneable"
import { $Matrix3x2fc$$Type } from "org.joml.Matrix3x2fc"
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Externalizable } from "java.io.Externalizable"
import { $ObjectOutput$$Type } from "java.io.ObjectOutput"
import { $Matrix3x2f, $Matrix3x2f$$Type } from "org.joml.Matrix3x2f"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $NumberFormat$$Type } from "java.text.NumberFormat"
import { $Matrix3fc$$Type } from "org.joml.Matrix3fc"
import { $Vector2fc$$Type } from "org.joml.Vector2fc"
import { $Matrix2fc, $Matrix2fc$$Type } from "org.joml.Matrix2fc"
import { $Vector2f, $Vector2f$$Type } from "org.joml.Vector2f"
import { $Matrix3f, $Matrix3f$$Type } from "org.joml.Matrix3f"
import { $ObjectInput$$Type } from "java.io.ObjectInput"

export class $Matrix2f implements $Externalizable, $Cloneable, $Matrix2fc {
"m00": float
"m01": float
"m10": float
"m11": float

constructor()
constructor(vector2fc0: $Vector2fc$$Type, vector2fc1: $Vector2fc$$Type)
constructor(floatBuffer0: $FloatBuffer$$Type)
constructor(matrix2fc0: $Matrix2fc$$Type)
constructor(float0: float, float1: float, float2: float, float3: float)
constructor(matrix3fc0: $Matrix3fc$$Type)

public "add"(matrix2fc0: $Matrix2fc$$Type): $Matrix2f
public "add"(matrix2fc0: $Matrix2fc$$Type, matrix2f1: $Matrix2f$$Type): $Matrix2f
public "clone"(): any
public "determinant"(): float
public "equals"(matrix2fc0: $Matrix2fc$$Type, float1: float): boolean
public "get"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "get"(matrix3x2f0: $Matrix3x2f$$Type): $Matrix3x2f
public "get"(matrix2f0: $Matrix2f$$Type): $Matrix2f
public "get"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "get"(float0s: float[]): float[]
public "get"(float0s: float[], int1: integer): float[]
public "get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "get"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "get"(int0: integer, int1: integer): float
public "getColumn"(int0: integer, vector2f1: $Vector2f$$Type): $Vector2f
public "getRotation"(): float
public "getRow"(int0: integer, vector2f1: $Vector2f$$Type): $Vector2f
public "getScale"(vector2f0: $Vector2f$$Type): $Vector2f
public "getToAddress"(long0: long): $Matrix2fc
public "getTransposed"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "getTransposed"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "getTransposed"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "getTransposed"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "identity"(): $Matrix2f
public "invert"(): $Matrix2f
public "invert"(matrix2f0: $Matrix2f$$Type): $Matrix2f
public "isFinite"(): boolean
public "lerp"(matrix2fc0: $Matrix2fc$$Type, float1: float, matrix2f2: $Matrix2f$$Type): $Matrix2f
public "lerp"(matrix2fc0: $Matrix2fc$$Type, float1: float): $Matrix2f
public "m00"(): float
public "m00"(float0: float): $Matrix2f
public "m01"(): float
public "m01"(float0: float): $Matrix2f
public "m10"(): float
public "m10"(float0: float): $Matrix2f
public "m11"(): float
public "m11"(float0: float): $Matrix2f
public "mul"(matrix2fc0: $Matrix2fc$$Type, matrix2f1: $Matrix2f$$Type): $Matrix2f
public "mul"(matrix2fc0: $Matrix2fc$$Type): $Matrix2f
public "mulComponentWise"(matrix2fc0: $Matrix2fc$$Type): $Matrix2f
public "mulComponentWise"(matrix2fc0: $Matrix2fc$$Type, matrix2f1: $Matrix2f$$Type): $Matrix2f
public "mulLocal"(matrix2fc0: $Matrix2fc$$Type, matrix2f1: $Matrix2f$$Type): $Matrix2f
public "mulLocal"(matrix2fc0: $Matrix2fc$$Type): $Matrix2f
public "normal"(): $Matrix2f
public "normal"(matrix2f0: $Matrix2f$$Type): $Matrix2f
public "normalizedPositiveX"(vector2f0: $Vector2f$$Type): $Vector2f
public "normalizedPositiveY"(vector2f0: $Vector2f$$Type): $Vector2f
public "positiveX"(vector2f0: $Vector2f$$Type): $Vector2f
public "positiveY"(vector2f0: $Vector2f$$Type): $Vector2f
public "readExternal"(objectInput0: $ObjectInput$$Type): void
public "rotate"(float0: float, matrix2f1: $Matrix2f$$Type): $Matrix2f
public "rotate"(float0: float): $Matrix2f
public "rotateLocal"(float0: float, matrix2f1: $Matrix2f$$Type): $Matrix2f
public "rotateLocal"(float0: float): $Matrix2f
public "rotation"(float0: float): $Matrix2f
public "scale"(float0: float): $Matrix2f
public "scale"(float0: float, matrix2f1: $Matrix2f$$Type): $Matrix2f
public "scale"(float0: float, float1: float): $Matrix2f
public "scale"(float0: float, float1: float, matrix2f2: $Matrix2f$$Type): $Matrix2f
public "scale"(vector2fc0: $Vector2fc$$Type): $Matrix2f
public "scale"(vector2fc0: $Vector2fc$$Type, matrix2f1: $Matrix2f$$Type): $Matrix2f
public "scaleLocal"(float0: float, float1: float): $Matrix2f
public "scaleLocal"(float0: float, float1: float, matrix2f2: $Matrix2f$$Type): $Matrix2f
public "scaling"(vector2fc0: $Vector2fc$$Type): $Matrix2f
public "scaling"(float0: float): $Matrix2f
public "scaling"(float0: float, float1: float): $Matrix2f
public "set"(matrix3fc0: $Matrix3fc$$Type): $Matrix2f
public "set"(float0: float, float1: float, float2: float, float3: float): $Matrix2f
public "set"(float0s: float[]): $Matrix2f
public "set"(matrix3x2fc0: $Matrix3x2fc$$Type): $Matrix2f
public "set"(matrix2fc0: $Matrix2fc$$Type): $Matrix2f
public "set"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $Matrix2f
public "set"(int0: integer, int1: integer, float2: float): $Matrix2f
public "set"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $Matrix2f
public "set"(byteBuffer0: $ByteBuffer$$Type): $Matrix2f
public "set"(vector2fc0: $Vector2fc$$Type, vector2fc1: $Vector2fc$$Type): $Matrix2f
public "set"(floatBuffer0: $FloatBuffer$$Type): $Matrix2f
public "setColumn"(int0: integer, vector2fc1: $Vector2fc$$Type): $Matrix2f
public "setColumn"(int0: integer, float1: float, float2: float): $Matrix2f
public "setFromAddress"(long0: long): $Matrix2f
public "setRow"(int0: integer, vector2fc1: $Vector2fc$$Type): $Matrix2f
public "setRow"(int0: integer, float1: float, float2: float): $Matrix2f
public "sub"(matrix2fc0: $Matrix2fc$$Type, matrix2f1: $Matrix2f$$Type): $Matrix2f
public "sub"(matrix2fc0: $Matrix2fc$$Type): $Matrix2f
public "swap"(matrix2f0: $Matrix2f$$Type): $Matrix2f
public "toString"(numberFormat0: $NumberFormat$$Type): string
public "transform"(float0: float, float1: float, vector2f2: $Vector2f$$Type): $Vector2f
public "transform"(vector2fc0: $Vector2fc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
public "transform"(vector2f0: $Vector2f$$Type): $Vector2f
public "transformTranspose"(vector2fc0: $Vector2fc$$Type, vector2f1: $Vector2f$$Type): $Vector2f
public "transformTranspose"(float0: float, float1: float, vector2f2: $Vector2f$$Type): $Vector2f
public "transformTranspose"(vector2f0: $Vector2f$$Type): $Vector2f
public "transpose"(): $Matrix2f
public "transpose"(matrix2f0: $Matrix2f$$Type): $Matrix2f
public "writeExternal"(objectOutput0: $ObjectOutput$$Type): void
public "zero"(): $Matrix2f
get "finite"(): boolean
set "fromAddress"(value: long)
}
}

declare module "org.joml.Matrix2d" {
import { $Cloneable } from "java.lang.Cloneable"
import { $Matrix3x2fc$$Type } from "org.joml.Matrix3x2fc"
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Externalizable } from "java.io.Externalizable"
import { $Matrix3x2dc$$Type } from "org.joml.Matrix3x2dc"
import { $DoubleBuffer, $DoubleBuffer$$Type } from "java.nio.DoubleBuffer"
import { $ObjectOutput$$Type } from "java.io.ObjectOutput"
import { $Matrix3x2d, $Matrix3x2d$$Type } from "org.joml.Matrix3x2d"
import { $Matrix3dc$$Type } from "org.joml.Matrix3dc"
import { $Matrix2dc, $Matrix2dc$$Type } from "org.joml.Matrix2dc"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $NumberFormat$$Type } from "java.text.NumberFormat"
import { $Matrix3fc$$Type } from "org.joml.Matrix3fc"
import { $Matrix2fc$$Type } from "org.joml.Matrix2fc"
import { $Vector2dc$$Type } from "org.joml.Vector2dc"
import { $ObjectInput$$Type } from "java.io.ObjectInput"
import { $Vector2d, $Vector2d$$Type } from "org.joml.Vector2d"
import { $Matrix3d, $Matrix3d$$Type } from "org.joml.Matrix3d"

export class $Matrix2d implements $Externalizable, $Cloneable, $Matrix2dc {
"m00": double
"m01": double
"m10": double
"m11": double

constructor(matrix3fc0: $Matrix3fc$$Type)
constructor(double0: double, double1: double, double2: double, double3: double)
constructor()
constructor(vector2dc0: $Vector2dc$$Type, vector2dc1: $Vector2dc$$Type)
constructor(doubleBuffer0: $DoubleBuffer$$Type)
constructor(matrix2dc0: $Matrix2dc$$Type)
constructor(matrix2fc0: $Matrix2fc$$Type)
constructor(matrix3dc0: $Matrix3dc$$Type)

public "add"(matrix2dc0: $Matrix2dc$$Type, matrix2d1: $Matrix2d$$Type): $Matrix2d
public "add"(matrix2dc0: $Matrix2dc$$Type): $Matrix2d
public "clone"(): any
public "determinant"(): double
public "equals"(matrix2dc0: $Matrix2dc$$Type, double1: double): boolean
public "get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "get"(double0s: double[], int1: integer): double[]
public "get"(double0s: double[]): double[]
public "get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "get"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
public "get"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
public "get"(int0: integer, int1: integer): double
public "get"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "get"(matrix3x2d0: $Matrix3x2d$$Type): $Matrix3x2d
public "get"(matrix2d0: $Matrix2d$$Type): $Matrix2d
public "getColumn"(int0: integer, vector2d1: $Vector2d$$Type): $Vector2d
public "getFloats"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "getFloats"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "getRotation"(): double
public "getRow"(int0: integer, vector2d1: $Vector2d$$Type): $Vector2d
public "getScale"(vector2d0: $Vector2d$$Type): $Vector2d
public "getToAddress"(long0: long): $Matrix2dc
public "getTransposed"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
public "getTransposed"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "getTransposed"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
public "getTransposed"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "getTransposed"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "getTransposed"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "getTransposedFloats"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "getTransposedFloats"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "identity"(): $Matrix2d
public "invert"(matrix2d0: $Matrix2d$$Type): $Matrix2d
public "invert"(): $Matrix2d
public "isFinite"(): boolean
public "lerp"(matrix2dc0: $Matrix2dc$$Type, double1: double, matrix2d2: $Matrix2d$$Type): $Matrix2d
public "lerp"(matrix2dc0: $Matrix2dc$$Type, double1: double): $Matrix2d
public "m00"(double0: double): $Matrix2d
public "m00"(): double
public "m01"(double0: double): $Matrix2d
public "m01"(): double
public "m10"(double0: double): $Matrix2d
public "m10"(): double
public "m11"(double0: double): $Matrix2d
public "m11"(): double
public "mul"(matrix2dc0: $Matrix2dc$$Type, matrix2d1: $Matrix2d$$Type): $Matrix2d
public "mul"(matrix2fc0: $Matrix2fc$$Type): $Matrix2d
public "mul"(matrix2fc0: $Matrix2fc$$Type, matrix2d1: $Matrix2d$$Type): $Matrix2d
public "mul"(matrix2dc0: $Matrix2dc$$Type): $Matrix2d
public "mulComponentWise"(matrix2dc0: $Matrix2dc$$Type): $Matrix2d
public "mulComponentWise"(matrix2dc0: $Matrix2dc$$Type, matrix2d1: $Matrix2d$$Type): $Matrix2d
public "mulLocal"(matrix2dc0: $Matrix2dc$$Type, matrix2d1: $Matrix2d$$Type): $Matrix2d
public "mulLocal"(matrix2dc0: $Matrix2dc$$Type): $Matrix2d
public "normal"(matrix2d0: $Matrix2d$$Type): $Matrix2d
public "normal"(): $Matrix2d
public "normalizedPositiveX"(vector2d0: $Vector2d$$Type): $Vector2d
public "normalizedPositiveY"(vector2d0: $Vector2d$$Type): $Vector2d
public "positiveX"(vector2d0: $Vector2d$$Type): $Vector2d
public "positiveY"(vector2d0: $Vector2d$$Type): $Vector2d
public "readExternal"(objectInput0: $ObjectInput$$Type): void
public "rotate"(double0: double): $Matrix2d
public "rotate"(double0: double, matrix2d1: $Matrix2d$$Type): $Matrix2d
public "rotateLocal"(double0: double, matrix2d1: $Matrix2d$$Type): $Matrix2d
public "rotateLocal"(double0: double): $Matrix2d
public "rotation"(double0: double): $Matrix2d
public "scale"(vector2dc0: $Vector2dc$$Type, matrix2d1: $Matrix2d$$Type): $Matrix2d
public "scale"(double0: double): $Matrix2d
public "scale"(double0: double, matrix2d1: $Matrix2d$$Type): $Matrix2d
public "scale"(vector2dc0: $Vector2dc$$Type): $Matrix2d
public "scale"(double0: double, double1: double, matrix2d2: $Matrix2d$$Type): $Matrix2d
public "scale"(double0: double, double1: double): $Matrix2d
public "scaleLocal"(double0: double, double1: double): $Matrix2d
public "scaleLocal"(double0: double, double1: double, matrix2d2: $Matrix2d$$Type): $Matrix2d
public "scaling"(vector2dc0: $Vector2dc$$Type): $Matrix2d
public "scaling"(double0: double): $Matrix2d
public "scaling"(double0: double, double1: double): $Matrix2d
public "set"(double0: double, double1: double, double2: double, double3: double): $Matrix2d
public "set"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $Matrix2d
public "set"(doubleBuffer0: $DoubleBuffer$$Type): $Matrix2d
public "set"(int0: integer, int1: integer, double2: double): $Matrix2d
public "set"(double0s: double[]): $Matrix2d
public "set"(vector2dc0: $Vector2dc$$Type, vector2dc1: $Vector2dc$$Type): $Matrix2d
public "set"(matrix2dc0: $Matrix2dc$$Type): $Matrix2d
public "set"(matrix2fc0: $Matrix2fc$$Type): $Matrix2d
public "set"(matrix3x2dc0: $Matrix3x2dc$$Type): $Matrix2d
public "set"(matrix3x2fc0: $Matrix3x2fc$$Type): $Matrix2d
public "set"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $Matrix2d
public "set"(byteBuffer0: $ByteBuffer$$Type): $Matrix2d
public "set"(matrix3fc0: $Matrix3fc$$Type): $Matrix2d
public "set"(matrix3dc0: $Matrix3dc$$Type): $Matrix2d
public "setColumn"(int0: integer, double1: double, double2: double): $Matrix2d
public "setColumn"(int0: integer, vector2dc1: $Vector2dc$$Type): $Matrix2d
public "setFromAddress"(long0: long): $Matrix2d
public "setRow"(int0: integer, double1: double, double2: double): $Matrix2d
public "setRow"(int0: integer, vector2dc1: $Vector2dc$$Type): $Matrix2d
public "sub"(matrix2dc0: $Matrix2dc$$Type): $Matrix2d
public "sub"(matrix2dc0: $Matrix2dc$$Type, matrix2d1: $Matrix2d$$Type): $Matrix2d
public "swap"(matrix2d0: $Matrix2d$$Type): $Matrix2d
public "toString"(numberFormat0: $NumberFormat$$Type): string
public "transform"(vector2d0: $Vector2d$$Type): $Vector2d
public "transform"(vector2dc0: $Vector2dc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
public "transform"(double0: double, double1: double, vector2d2: $Vector2d$$Type): $Vector2d
public "transformTranspose"(double0: double, double1: double, vector2d2: $Vector2d$$Type): $Vector2d
public "transformTranspose"(vector2dc0: $Vector2dc$$Type, vector2d1: $Vector2d$$Type): $Vector2d
public "transformTranspose"(vector2d0: $Vector2d$$Type): $Vector2d
public "transpose"(): $Matrix2d
public "transpose"(matrix2d0: $Matrix2d$$Type): $Matrix2d
public "writeExternal"(objectOutput0: $ObjectOutput$$Type): void
public "zero"(): $Matrix2d
get "finite"(): boolean
set "fromAddress"(value: long)
}
}

declare module "org.joml.Matrix3f" {
import { $Cloneable } from "java.lang.Cloneable"
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Externalizable } from "java.io.Externalizable"
import { $Quaternionf, $Quaternionf$$Type } from "org.joml.Quaternionf"
import { $ObjectOutput$$Type } from "java.io.ObjectOutput"
import { $Quaterniond, $Quaterniond$$Type } from "org.joml.Quaterniond"
import { $AxisAngle4f, $AxisAngle4f$$Type } from "org.joml.AxisAngle4f"
import { $Matrix4fc$$Type } from "org.joml.Matrix4fc"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $AxisAngle4d$$Type } from "org.joml.AxisAngle4d"
import { $NumberFormat$$Type } from "java.text.NumberFormat"
import { $Matrix4x3fc$$Type } from "org.joml.Matrix4x3fc"
import { $Matrix3fc, $Matrix3fc$$Type } from "org.joml.Matrix3fc"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $Matrix2fc$$Type } from "org.joml.Matrix2fc"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Quaterniondc$$Type } from "org.joml.Quaterniondc"
import { $ObjectInput$$Type } from "java.io.ObjectInput"
import { $Matrix4f, $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $Quaternionfc$$Type } from "org.joml.Quaternionfc"

export class $Matrix3f implements $Externalizable, $Cloneable, $Matrix3fc {
"m00": float
"m01": float
"m02": float
"m10": float
"m11": float
"m12": float
"m20": float
"m21": float
"m22": float

constructor(matrix2fc0: $Matrix2fc$$Type)
constructor()
constructor(matrix3fc0: $Matrix3fc$$Type)
constructor(matrix4fc0: $Matrix4fc$$Type)
constructor(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float)
constructor(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3fc2: $Vector3fc$$Type)
constructor(floatBuffer0: $FloatBuffer$$Type)

public "add"(matrix3fc0: $Matrix3fc$$Type): $Matrix3f
public "add"(matrix3fc0: $Matrix3fc$$Type, matrix3f1: $Matrix3f$$Type): $Matrix3f
public "clone"(): any
public "cofactor"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "cofactor"(): $Matrix3f
public "determinant"(): float
public "equals"(matrix3fc0: $Matrix3fc$$Type, float1: float): boolean
public "get"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "get"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "get"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "get"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "get"(float0s: float[], int1: integer): float[]
public "get"(float0s: float[]): float[]
public "get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "get"(int0: integer, int1: integer): float
public "get3x4"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "get3x4"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "get3x4"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "get3x4"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "getColumn"(int0: integer, vector3f1: $Vector3f$$Type): $Vector3f
public "getEulerAnglesXYZ"(vector3f0: $Vector3f$$Type): $Vector3f
public "getEulerAnglesZYX"(vector3f0: $Vector3f$$Type): $Vector3f
public "getNormalizedRotation"(quaternionf0: $Quaternionf$$Type): $Quaternionf
public "getNormalizedRotation"(quaterniond0: $Quaterniond$$Type): $Quaterniond
public "getRotation"(axisAngle4f0: $AxisAngle4f$$Type): $AxisAngle4f
public "getRow"(int0: integer, vector3f1: $Vector3f$$Type): $Vector3f
public "getRowColumn"(int0: integer, int1: integer): float
public "getScale"(vector3f0: $Vector3f$$Type): $Vector3f
public "getToAddress"(long0: long): $Matrix3fc
public "getTransposed"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "getTransposed"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "getTransposed"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "getTransposed"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "getUnnormalizedRotation"(quaternionf0: $Quaternionf$$Type): $Quaternionf
public "getUnnormalizedRotation"(quaterniond0: $Quaterniond$$Type): $Quaterniond
public "identity"(): $Matrix3f
public "invert"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "invert"(): $Matrix3f
public "isFinite"(): boolean
public "lerp"(matrix3fc0: $Matrix3fc$$Type, float1: float): $Matrix3f
public "lerp"(matrix3fc0: $Matrix3fc$$Type, float1: float, matrix3f2: $Matrix3f$$Type): $Matrix3f
public "lookAlong"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type): $Matrix3f
public "lookAlong"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, matrix3f2: $Matrix3f$$Type): $Matrix3f
public "lookAlong"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix3f
public "lookAlong"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix3f6: $Matrix3f$$Type): $Matrix3f
public "m00"(): float
public "m00"(float0: float): $Matrix3f
public "m01"(): float
public "m01"(float0: float): $Matrix3f
public "m02"(): float
public "m02"(float0: float): $Matrix3f
public "m10"(): float
public "m10"(float0: float): $Matrix3f
public "m11"(float0: float): $Matrix3f
public "m11"(): float
public "m12"(float0: float): $Matrix3f
public "m12"(): float
public "m20"(): float
public "m20"(float0: float): $Matrix3f
public "m21"(float0: float): $Matrix3f
public "m21"(): float
public "m22"(float0: float): $Matrix3f
public "m22"(): float
public "mapXZY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapXZY"(): $Matrix3f
public "mapXZnY"(): $Matrix3f
public "mapXZnY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapXnYnZ"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapXnYnZ"(): $Matrix3f
public "mapXnZY"(): $Matrix3f
public "mapXnZY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapXnZnY"(): $Matrix3f
public "mapXnZnY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapYXZ"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapYXZ"(): $Matrix3f
public "mapYXnZ"(): $Matrix3f
public "mapYXnZ"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapYZX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapYZX"(): $Matrix3f
public "mapYZnX"(): $Matrix3f
public "mapYZnX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapYnXZ"(): $Matrix3f
public "mapYnXZ"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapYnXnZ"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapYnXnZ"(): $Matrix3f
public "mapYnZX"(): $Matrix3f
public "mapYnZX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapYnZnX"(): $Matrix3f
public "mapYnZnX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapZXY"(): $Matrix3f
public "mapZXY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapZXnY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapZXnY"(): $Matrix3f
public "mapZYX"(): $Matrix3f
public "mapZYX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapZYnX"(): $Matrix3f
public "mapZYnX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapZnXY"(): $Matrix3f
public "mapZnXY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapZnXnY"(): $Matrix3f
public "mapZnXnY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapZnYX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapZnYX"(): $Matrix3f
public "mapZnYnX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapZnYnX"(): $Matrix3f
public "mapnXYnZ"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapnXYnZ"(): $Matrix3f
public "mapnXZY"(): $Matrix3f
public "mapnXZY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapnXZnY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapnXZnY"(): $Matrix3f
public "mapnXnYZ"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapnXnYZ"(): $Matrix3f
public "mapnXnYnZ"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapnXnYnZ"(): $Matrix3f
public "mapnXnZY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapnXnZY"(): $Matrix3f
public "mapnXnZnY"(): $Matrix3f
public "mapnXnZnY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapnYXZ"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapnYXZ"(): $Matrix3f
public "mapnYXnZ"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapnYXnZ"(): $Matrix3f
public "mapnYZX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapnYZX"(): $Matrix3f
public "mapnYZnX"(): $Matrix3f
public "mapnYZnX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapnYnXZ"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapnYnXZ"(): $Matrix3f
public "mapnYnXnZ"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapnYnXnZ"(): $Matrix3f
public "mapnYnZX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapnYnZX"(): $Matrix3f
public "mapnYnZnX"(): $Matrix3f
public "mapnYnZnX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapnZXY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapnZXY"(): $Matrix3f
public "mapnZXnY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapnZXnY"(): $Matrix3f
public "mapnZYX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapnZYX"(): $Matrix3f
public "mapnZYnX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapnZYnX"(): $Matrix3f
public "mapnZnXY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapnZnXY"(): $Matrix3f
public "mapnZnXnY"(): $Matrix3f
public "mapnZnXnY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapnZnYX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mapnZnYX"(): $Matrix3f
public "mapnZnYnX"(): $Matrix3f
public "mapnZnYnX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "mul"(matrix3fc0: $Matrix3fc$$Type): $Matrix3f
public "mul"(matrix3fc0: $Matrix3fc$$Type, matrix3f1: $Matrix3f$$Type): $Matrix3f
public "mulComponentWise"(matrix3fc0: $Matrix3fc$$Type): $Matrix3f
public "mulComponentWise"(matrix3fc0: $Matrix3fc$$Type, matrix3f1: $Matrix3f$$Type): $Matrix3f
public "mulLocal"(matrix3fc0: $Matrix3fc$$Type): $Matrix3f
public "mulLocal"(matrix3fc0: $Matrix3fc$$Type, matrix3f1: $Matrix3f$$Type): $Matrix3f
public "negateX"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "negateX"(): $Matrix3f
public "negateY"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "negateY"(): $Matrix3f
public "negateZ"(): $Matrix3f
public "negateZ"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "normal"(): $Matrix3f
public "normal"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "normalizedPositiveX"(vector3f0: $Vector3f$$Type): $Vector3f
public "normalizedPositiveY"(vector3f0: $Vector3f$$Type): $Vector3f
public "normalizedPositiveZ"(vector3f0: $Vector3f$$Type): $Vector3f
public "obliqueZ"(float0: float, float1: float, matrix3f2: $Matrix3f$$Type): $Matrix3f
public "obliqueZ"(float0: float, float1: float): $Matrix3f
public "positiveX"(vector3f0: $Vector3f$$Type): $Vector3f
public "positiveY"(vector3f0: $Vector3f$$Type): $Vector3f
public "positiveZ"(vector3f0: $Vector3f$$Type): $Vector3f
public "quadraticFormProduct"(vector3fc0: $Vector3fc$$Type): float
public "quadraticFormProduct"(float0: float, float1: float, float2: float): float
public "readExternal"(objectInput0: $ObjectInput$$Type): void
public "reflect"(float0: float, float1: float, float2: float, matrix3f3: $Matrix3f$$Type): $Matrix3f
public "reflect"(vector3fc0: $Vector3fc$$Type, matrix3f1: $Matrix3f$$Type): $Matrix3f
public "reflect"(quaternionfc0: $Quaternionfc$$Type): $Matrix3f
public "reflect"(vector3fc0: $Vector3fc$$Type): $Matrix3f
public "reflect"(quaternionfc0: $Quaternionfc$$Type, matrix3f1: $Matrix3f$$Type): $Matrix3f
public "reflect"(float0: float, float1: float, float2: float): $Matrix3f
public "reflection"(vector3fc0: $Vector3fc$$Type): $Matrix3f
public "reflection"(quaternionfc0: $Quaternionfc$$Type): $Matrix3f
public "reflection"(float0: float, float1: float, float2: float): $Matrix3f
public "rotate"(float0: float, float1: float, float2: float, float3: float, matrix3f4: $Matrix3f$$Type): $Matrix3f
public "rotate"(axisAngle4f0: $AxisAngle4f$$Type, matrix3f1: $Matrix3f$$Type): $Matrix3f
public "rotate"(float0: float, vector3fc1: $Vector3fc$$Type): $Matrix3f
public "rotate"(float0: float, vector3fc1: $Vector3fc$$Type, matrix3f2: $Matrix3f$$Type): $Matrix3f
public "rotate"(quaternionfc0: $Quaternionfc$$Type, matrix3f1: $Matrix3f$$Type): $Matrix3f
public "rotate"(quaternionfc0: $Quaternionfc$$Type): $Matrix3f
public "rotate"(axisAngle4f0: $AxisAngle4f$$Type): $Matrix3f
public "rotate"(float0: float, float1: float, float2: float, float3: float): $Matrix3f
public "rotateLocal"(float0: float, float1: float, float2: float, float3: float): $Matrix3f
public "rotateLocal"(float0: float, float1: float, float2: float, float3: float, matrix3f4: $Matrix3f$$Type): $Matrix3f
public "rotateLocal"(quaternionfc0: $Quaternionfc$$Type, matrix3f1: $Matrix3f$$Type): $Matrix3f
public "rotateLocal"(quaternionfc0: $Quaternionfc$$Type): $Matrix3f
public "rotateLocalX"(float0: float): $Matrix3f
public "rotateLocalX"(float0: float, matrix3f1: $Matrix3f$$Type): $Matrix3f
public "rotateLocalY"(float0: float, matrix3f1: $Matrix3f$$Type): $Matrix3f
public "rotateLocalY"(float0: float): $Matrix3f
public "rotateLocalZ"(float0: float): $Matrix3f
public "rotateLocalZ"(float0: float, matrix3f1: $Matrix3f$$Type): $Matrix3f
public "rotateTowards"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix3f6: $Matrix3f$$Type): $Matrix3f
public "rotateTowards"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix3f
public "rotateTowards"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type): $Matrix3f
public "rotateTowards"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, matrix3f2: $Matrix3f$$Type): $Matrix3f
public "rotateX"(float0: float, matrix3f1: $Matrix3f$$Type): $Matrix3f
public "rotateX"(float0: float): $Matrix3f
public "rotateXYZ"(vector3f0: $Vector3f$$Type): $Matrix3f
public "rotateXYZ"(float0: float, float1: float, float2: float, matrix3f3: $Matrix3f$$Type): $Matrix3f
public "rotateXYZ"(float0: float, float1: float, float2: float): $Matrix3f
public "rotateY"(float0: float): $Matrix3f
public "rotateY"(float0: float, matrix3f1: $Matrix3f$$Type): $Matrix3f
public "rotateYXZ"(float0: float, float1: float, float2: float): $Matrix3f
public "rotateYXZ"(float0: float, float1: float, float2: float, matrix3f3: $Matrix3f$$Type): $Matrix3f
public "rotateYXZ"(vector3f0: $Vector3f$$Type): $Matrix3f
public "rotateZ"(float0: float, matrix3f1: $Matrix3f$$Type): $Matrix3f
public "rotateZ"(float0: float): $Matrix3f
public "rotateZYX"(float0: float, float1: float, float2: float): $Matrix3f
public "rotateZYX"(vector3f0: $Vector3f$$Type): $Matrix3f
public "rotateZYX"(float0: float, float1: float, float2: float, matrix3f3: $Matrix3f$$Type): $Matrix3f
public "rotation"(float0: float, vector3fc1: $Vector3fc$$Type): $Matrix3f
public "rotation"(float0: float, float1: float, float2: float, float3: float): $Matrix3f
public "rotation"(quaternionfc0: $Quaternionfc$$Type): $Matrix3f
public "rotation"(axisAngle4f0: $AxisAngle4f$$Type): $Matrix3f
public "rotationTowards"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix3f
public "rotationTowards"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type): $Matrix3f
public "rotationX"(float0: float): $Matrix3f
public "rotationXYZ"(float0: float, float1: float, float2: float): $Matrix3f
public "rotationY"(float0: float): $Matrix3f
public "rotationYXZ"(float0: float, float1: float, float2: float): $Matrix3f
public "rotationZ"(float0: float): $Matrix3f
public "rotationZYX"(float0: float, float1: float, float2: float): $Matrix3f
public "scale"(float0: float): $Matrix3f
public "scale"(vector3fc0: $Vector3fc$$Type, matrix3f1: $Matrix3f$$Type): $Matrix3f
public "scale"(vector3fc0: $Vector3fc$$Type): $Matrix3f
public "scale"(float0: float, float1: float, float2: float): $Matrix3f
public "scale"(float0: float, matrix3f1: $Matrix3f$$Type): $Matrix3f
public "scale"(float0: float, float1: float, float2: float, matrix3f3: $Matrix3f$$Type): $Matrix3f
public "scaleLocal"(float0: float, float1: float, float2: float, matrix3f3: $Matrix3f$$Type): $Matrix3f
public "scaleLocal"(float0: float, float1: float, float2: float): $Matrix3f
public "scaling"(vector3fc0: $Vector3fc$$Type): $Matrix3f
public "scaling"(float0: float, float1: float, float2: float): $Matrix3f
public "scaling"(float0: float): $Matrix3f
public "set"(axisAngle4f0: $AxisAngle4f$$Type): $Matrix3f
public "set"(matrix2fc0: $Matrix2fc$$Type): $Matrix3f
public "set"(matrix4fc0: $Matrix4fc$$Type): $Matrix3f
public "set"(matrix4x3fc0: $Matrix4x3fc$$Type): $Matrix3f
public "set"(matrix3fc0: $Matrix3fc$$Type): $Matrix3f
public "set"(int0: integer, int1: integer, float2: float): $Matrix3f
public "set"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3fc2: $Vector3fc$$Type): $Matrix3f
public "set"(floatBuffer0: $FloatBuffer$$Type): $Matrix3f
public "set"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $Matrix3f
public "set"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $Matrix3f
public "set"(byteBuffer0: $ByteBuffer$$Type): $Matrix3f
public "set"(axisAngle4d0: $AxisAngle4d$$Type): $Matrix3f
public "set"(quaternionfc0: $Quaternionfc$$Type): $Matrix3f
public "set"(quaterniondc0: $Quaterniondc$$Type): $Matrix3f
public "set"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float): $Matrix3f
public "set"(float0s: float[]): $Matrix3f
public "setColumn"(int0: integer, float1: float, float2: float, float3: float): $Matrix3f
public "setColumn"(int0: integer, vector3fc1: $Vector3fc$$Type): $Matrix3f
public "setFromAddress"(long0: long): $Matrix3f
public "setLookAlong"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type): $Matrix3f
public "setLookAlong"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix3f
public "setRow"(int0: integer, vector3fc1: $Vector3fc$$Type): $Matrix3f
public "setRow"(int0: integer, float1: float, float2: float, float3: float): $Matrix3f
public "setRowColumn"(int0: integer, int1: integer, float2: float): $Matrix3f
public "setSkewSymmetric"(float0: float, float1: float, float2: float): $Matrix3f
public "setTransposed"(matrix3fc0: $Matrix3fc$$Type): $Matrix3f
public "sub"(matrix3fc0: $Matrix3fc$$Type): $Matrix3f
public "sub"(matrix3fc0: $Matrix3fc$$Type, matrix3f1: $Matrix3f$$Type): $Matrix3f
public "swap"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "toString"(numberFormat0: $NumberFormat$$Type): string
public "transform"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "transform"(vector3f0: $Vector3f$$Type): $Vector3f
public "transform"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
public "transformTranspose"(vector3f0: $Vector3f$$Type): $Vector3f
public "transformTranspose"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "transformTranspose"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
public "transpose"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "transpose"(): $Matrix3f
public "writeExternal"(objectOutput0: $ObjectOutput$$Type): void
public "zero"(): $Matrix3f
get "finite"(): boolean
set "fromAddress"(value: long)
set "transposed"(value: $Matrix3fc$$Type)
}
}

declare module "org.joml.Matrix3d" {
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Quaternionf, $Quaternionf$$Type } from "org.joml.Quaternionf"
import { $ObjectOutput$$Type } from "java.io.ObjectOutput"
import { $Quaterniond, $Quaterniond$$Type } from "org.joml.Quaterniond"
import { $Matrix4dc$$Type } from "org.joml.Matrix4dc"
import { $Matrix3dc, $Matrix3dc$$Type } from "org.joml.Matrix3dc"
import { $Matrix4fc$$Type } from "org.joml.Matrix4fc"
import { $Matrix2dc$$Type } from "org.joml.Matrix2dc"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $NumberFormat$$Type } from "java.text.NumberFormat"
import { $Matrix3fc$$Type } from "org.joml.Matrix3fc"
import { $Matrix2fc$$Type } from "org.joml.Matrix2fc"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Quaterniondc$$Type } from "org.joml.Quaterniondc"
import { $Vector3d, $Vector3d$$Type } from "org.joml.Vector3d"
import { $Quaternionfc$$Type } from "org.joml.Quaternionfc"
import { $Cloneable } from "java.lang.Cloneable"
import { $Externalizable } from "java.io.Externalizable"
import { $DoubleBuffer, $DoubleBuffer$$Type } from "java.nio.DoubleBuffer"
import { $AxisAngle4f, $AxisAngle4f$$Type } from "org.joml.AxisAngle4f"
import { $AxisAngle4d$$Type } from "org.joml.AxisAngle4d"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $Vector3dc$$Type } from "org.joml.Vector3dc"
import { $Matrix4x3dc$$Type } from "org.joml.Matrix4x3dc"
import { $ObjectInput$$Type } from "java.io.ObjectInput"

export class $Matrix3d implements $Externalizable, $Cloneable, $Matrix3dc {
"m00": double
"m01": double
"m02": double
"m10": double
"m11": double
"m12": double
"m20": double
"m21": double
"m22": double

constructor(matrix3fc0: $Matrix3fc$$Type)
constructor(matrix3dc0: $Matrix3dc$$Type)
constructor(matrix2fc0: $Matrix2fc$$Type)
constructor()
constructor(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3dc2: $Vector3dc$$Type)
constructor(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double)
constructor(matrix4dc0: $Matrix4dc$$Type)
constructor(matrix4fc0: $Matrix4fc$$Type)
constructor(doubleBuffer0: $DoubleBuffer$$Type)
constructor(matrix2dc0: $Matrix2dc$$Type)

public "add"(matrix3dc0: $Matrix3dc$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
public "add"(matrix3dc0: $Matrix3dc$$Type): $Matrix3d
public "clone"(): any
public "cofactor"(): $Matrix3d
public "cofactor"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "determinant"(): double
public "equals"(matrix3dc0: $Matrix3dc$$Type, double1: double): boolean
public "get"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "get"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "get"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
public "get"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
public "get"(double0s: double[]): double[]
public "get"(float0s: float[], int1: integer): float[]
public "get"(float0s: float[]): float[]
public "get"(double0s: double[], int1: integer): double[]
public "get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "get"(int0: integer, int1: integer): double
public "get"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "getColumn"(int0: integer, vector3d1: $Vector3d$$Type): $Vector3d
public "getEulerAnglesXYZ"(vector3d0: $Vector3d$$Type): $Vector3d
public "getEulerAnglesZYX"(vector3d0: $Vector3d$$Type): $Vector3d
public "getFloats"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "getFloats"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "getNormalizedRotation"(quaternionf0: $Quaternionf$$Type): $Quaternionf
public "getNormalizedRotation"(quaterniond0: $Quaterniond$$Type): $Quaterniond
public "getRotation"(axisAngle4f0: $AxisAngle4f$$Type): $AxisAngle4f
public "getRow"(int0: integer, vector3d1: $Vector3d$$Type): $Vector3d
public "getRowColumn"(int0: integer, int1: integer): double
public "getScale"(vector3d0: $Vector3d$$Type): $Vector3d
public "getToAddress"(long0: long): $Matrix3dc
public "getTransposed"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "getTransposed"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
public "getTransposed"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "getTransposed"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "getTransposed"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "getTransposed"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
public "getTransposedFloats"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "getTransposedFloats"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "getUnnormalizedRotation"(quaternionf0: $Quaternionf$$Type): $Quaternionf
public "getUnnormalizedRotation"(quaterniond0: $Quaterniond$$Type): $Quaterniond
public "identity"(): $Matrix3d
public "invert"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "invert"(): $Matrix3d
public "isFinite"(): boolean
public "lerp"(matrix3dc0: $Matrix3dc$$Type, double1: double, matrix3d2: $Matrix3d$$Type): $Matrix3d
public "lerp"(matrix3dc0: $Matrix3dc$$Type, double1: double): $Matrix3d
public "lookAlong"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type): $Matrix3d
public "lookAlong"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, matrix3d2: $Matrix3d$$Type): $Matrix3d
public "lookAlong"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix3d6: $Matrix3d$$Type): $Matrix3d
public "lookAlong"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix3d
public "m00"(double0: double): $Matrix3d
public "m00"(): double
public "m01"(): double
public "m01"(double0: double): $Matrix3d
public "m02"(): double
public "m02"(double0: double): $Matrix3d
public "m10"(): double
public "m10"(double0: double): $Matrix3d
public "m11"(double0: double): $Matrix3d
public "m11"(): double
public "m12"(double0: double): $Matrix3d
public "m12"(): double
public "m20"(double0: double): $Matrix3d
public "m20"(): double
public "m21"(): double
public "m21"(double0: double): $Matrix3d
public "m22"(): double
public "m22"(double0: double): $Matrix3d
public "mapXZY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapXZY"(): $Matrix3d
public "mapXZnY"(): $Matrix3d
public "mapXZnY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapXnYnZ"(): $Matrix3d
public "mapXnYnZ"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapXnZY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapXnZY"(): $Matrix3d
public "mapXnZnY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapXnZnY"(): $Matrix3d
public "mapYXZ"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapYXZ"(): $Matrix3d
public "mapYXnZ"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapYXnZ"(): $Matrix3d
public "mapYZX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapYZX"(): $Matrix3d
public "mapYZnX"(): $Matrix3d
public "mapYZnX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapYnXZ"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapYnXZ"(): $Matrix3d
public "mapYnXnZ"(): $Matrix3d
public "mapYnXnZ"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapYnZX"(): $Matrix3d
public "mapYnZX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapYnZnX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapYnZnX"(): $Matrix3d
public "mapZXY"(): $Matrix3d
public "mapZXY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapZXnY"(): $Matrix3d
public "mapZXnY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapZYX"(): $Matrix3d
public "mapZYX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapZYnX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapZYnX"(): $Matrix3d
public "mapZnXY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapZnXY"(): $Matrix3d
public "mapZnXnY"(): $Matrix3d
public "mapZnXnY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapZnYX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapZnYX"(): $Matrix3d
public "mapZnYnX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapZnYnX"(): $Matrix3d
public "mapnXYnZ"(): $Matrix3d
public "mapnXYnZ"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapnXZY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapnXZY"(): $Matrix3d
public "mapnXZnY"(): $Matrix3d
public "mapnXZnY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapnXnYZ"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapnXnYZ"(): $Matrix3d
public "mapnXnYnZ"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapnXnYnZ"(): $Matrix3d
public "mapnXnZY"(): $Matrix3d
public "mapnXnZY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapnXnZnY"(): $Matrix3d
public "mapnXnZnY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapnYXZ"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapnYXZ"(): $Matrix3d
public "mapnYXnZ"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapnYXnZ"(): $Matrix3d
public "mapnYZX"(): $Matrix3d
public "mapnYZX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapnYZnX"(): $Matrix3d
public "mapnYZnX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapnYnXZ"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapnYnXZ"(): $Matrix3d
public "mapnYnXnZ"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapnYnXnZ"(): $Matrix3d
public "mapnYnZX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapnYnZX"(): $Matrix3d
public "mapnYnZnX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapnYnZnX"(): $Matrix3d
public "mapnZXY"(): $Matrix3d
public "mapnZXY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapnZXnY"(): $Matrix3d
public "mapnZXnY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapnZYX"(): $Matrix3d
public "mapnZYX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapnZYnX"(): $Matrix3d
public "mapnZYnX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapnZnXY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapnZnXY"(): $Matrix3d
public "mapnZnXnY"(): $Matrix3d
public "mapnZnXnY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapnZnYX"(): $Matrix3d
public "mapnZnYX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mapnZnYnX"(): $Matrix3d
public "mapnZnYnX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "mul"(matrix3dc0: $Matrix3dc$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
public "mul"(matrix3fc0: $Matrix3fc$$Type): $Matrix3d
public "mul"(matrix3dc0: $Matrix3dc$$Type): $Matrix3d
public "mul"(matrix3fc0: $Matrix3fc$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
public "mulComponentWise"(matrix3dc0: $Matrix3dc$$Type): $Matrix3d
public "mulComponentWise"(matrix3dc0: $Matrix3dc$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
public "mulLocal"(matrix3dc0: $Matrix3dc$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
public "mulLocal"(matrix3dc0: $Matrix3dc$$Type): $Matrix3d
public "negateX"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "negateX"(): $Matrix3d
public "negateY"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "negateY"(): $Matrix3d
public "negateZ"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "negateZ"(): $Matrix3d
public "normal"(): $Matrix3d
public "normal"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "normalizedPositiveX"(vector3d0: $Vector3d$$Type): $Vector3d
public "normalizedPositiveY"(vector3d0: $Vector3d$$Type): $Vector3d
public "normalizedPositiveZ"(vector3d0: $Vector3d$$Type): $Vector3d
public "obliqueZ"(double0: double, double1: double, matrix3d2: $Matrix3d$$Type): $Matrix3d
public "obliqueZ"(double0: double, double1: double): $Matrix3d
public "positiveX"(vector3d0: $Vector3d$$Type): $Vector3d
public "positiveY"(vector3d0: $Vector3d$$Type): $Vector3d
public "positiveZ"(vector3d0: $Vector3d$$Type): $Vector3d
public "quadraticFormProduct"(double0: double, double1: double, double2: double): double
public "quadraticFormProduct"(vector3fc0: $Vector3fc$$Type): double
public "quadraticFormProduct"(vector3dc0: $Vector3dc$$Type): double
public "readExternal"(objectInput0: $ObjectInput$$Type): void
public "reflect"(vector3dc0: $Vector3dc$$Type): $Matrix3d
public "reflect"(double0: double, double1: double, double2: double): $Matrix3d
public "reflect"(double0: double, double1: double, double2: double, matrix3d3: $Matrix3d$$Type): $Matrix3d
public "reflect"(vector3dc0: $Vector3dc$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
public "reflect"(quaterniondc0: $Quaterniondc$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
public "reflect"(quaterniondc0: $Quaterniondc$$Type): $Matrix3d
public "reflection"(vector3dc0: $Vector3dc$$Type): $Matrix3d
public "reflection"(quaterniondc0: $Quaterniondc$$Type): $Matrix3d
public "reflection"(double0: double, double1: double, double2: double): $Matrix3d
public "rotate"(double0: double, double1: double, double2: double, double3: double, matrix3d4: $Matrix3d$$Type): $Matrix3d
public "rotate"(quaterniondc0: $Quaterniondc$$Type): $Matrix3d
public "rotate"(quaternionfc0: $Quaternionfc$$Type): $Matrix3d
public "rotate"(double0: double, vector3fc1: $Vector3fc$$Type, matrix3d2: $Matrix3d$$Type): $Matrix3d
public "rotate"(double0: double, double1: double, double2: double, double3: double): $Matrix3d
public "rotate"(axisAngle4d0: $AxisAngle4d$$Type): $Matrix3d
public "rotate"(axisAngle4d0: $AxisAngle4d$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
public "rotate"(double0: double, vector3dc1: $Vector3dc$$Type): $Matrix3d
public "rotate"(double0: double, vector3dc1: $Vector3dc$$Type, matrix3d2: $Matrix3d$$Type): $Matrix3d
public "rotate"(double0: double, vector3fc1: $Vector3fc$$Type): $Matrix3d
public "rotate"(quaterniondc0: $Quaterniondc$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
public "rotate"(quaternionfc0: $Quaternionfc$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
public "rotate"(axisAngle4f0: $AxisAngle4f$$Type): $Matrix3d
public "rotate"(axisAngle4f0: $AxisAngle4f$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
public "rotateLocal"(quaterniondc0: $Quaterniondc$$Type): $Matrix3d
public "rotateLocal"(quaternionfc0: $Quaternionfc$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
public "rotateLocal"(quaternionfc0: $Quaternionfc$$Type): $Matrix3d
public "rotateLocal"(quaterniondc0: $Quaterniondc$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
public "rotateLocal"(double0: double, double1: double, double2: double, double3: double, matrix3d4: $Matrix3d$$Type): $Matrix3d
public "rotateLocal"(double0: double, double1: double, double2: double, double3: double): $Matrix3d
public "rotateLocalX"(double0: double): $Matrix3d
public "rotateLocalX"(double0: double, matrix3d1: $Matrix3d$$Type): $Matrix3d
public "rotateLocalY"(double0: double, matrix3d1: $Matrix3d$$Type): $Matrix3d
public "rotateLocalY"(double0: double): $Matrix3d
public "rotateLocalZ"(double0: double): $Matrix3d
public "rotateLocalZ"(double0: double, matrix3d1: $Matrix3d$$Type): $Matrix3d
public "rotateTowards"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix3d
public "rotateTowards"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type): $Matrix3d
public "rotateTowards"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix3d6: $Matrix3d$$Type): $Matrix3d
public "rotateTowards"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, matrix3d2: $Matrix3d$$Type): $Matrix3d
public "rotateX"(double0: double): $Matrix3d
public "rotateX"(double0: double, matrix3d1: $Matrix3d$$Type): $Matrix3d
public "rotateXYZ"(double0: double, double1: double, double2: double, matrix3d3: $Matrix3d$$Type): $Matrix3d
public "rotateXYZ"(double0: double, double1: double, double2: double): $Matrix3d
public "rotateY"(double0: double, matrix3d1: $Matrix3d$$Type): $Matrix3d
public "rotateY"(double0: double): $Matrix3d
public "rotateYXZ"(double0: double, double1: double, double2: double): $Matrix3d
public "rotateYXZ"(double0: double, double1: double, double2: double, matrix3d3: $Matrix3d$$Type): $Matrix3d
public "rotateYXZ"(vector3d0: $Vector3d$$Type): $Matrix3d
public "rotateZ"(double0: double): $Matrix3d
public "rotateZ"(double0: double, matrix3d1: $Matrix3d$$Type): $Matrix3d
public "rotateZYX"(double0: double, double1: double, double2: double): $Matrix3d
public "rotateZYX"(double0: double, double1: double, double2: double, matrix3d3: $Matrix3d$$Type): $Matrix3d
public "rotation"(axisAngle4f0: $AxisAngle4f$$Type): $Matrix3d
public "rotation"(double0: double, vector3fc1: $Vector3fc$$Type): $Matrix3d
public "rotation"(double0: double, vector3dc1: $Vector3dc$$Type): $Matrix3d
public "rotation"(quaterniondc0: $Quaterniondc$$Type): $Matrix3d
public "rotation"(quaternionfc0: $Quaternionfc$$Type): $Matrix3d
public "rotation"(double0: double, double1: double, double2: double, double3: double): $Matrix3d
public "rotation"(axisAngle4d0: $AxisAngle4d$$Type): $Matrix3d
public "rotationTowards"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix3d
public "rotationTowards"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type): $Matrix3d
public "rotationX"(double0: double): $Matrix3d
public "rotationXYZ"(double0: double, double1: double, double2: double): $Matrix3d
public "rotationY"(double0: double): $Matrix3d
public "rotationYXZ"(double0: double, double1: double, double2: double): $Matrix3d
public "rotationZ"(double0: double): $Matrix3d
public "rotationZYX"(double0: double, double1: double, double2: double): $Matrix3d
public "scale"(double0: double, double1: double, double2: double, matrix3d3: $Matrix3d$$Type): $Matrix3d
public "scale"(double0: double): $Matrix3d
public "scale"(double0: double, matrix3d1: $Matrix3d$$Type): $Matrix3d
public "scale"(double0: double, double1: double, double2: double): $Matrix3d
public "scale"(vector3dc0: $Vector3dc$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
public "scale"(vector3dc0: $Vector3dc$$Type): $Matrix3d
public "scaleLocal"(double0: double, double1: double, double2: double): $Matrix3d
public "scaleLocal"(double0: double, double1: double, double2: double, matrix3d3: $Matrix3d$$Type): $Matrix3d
public "scaling"(vector3dc0: $Vector3dc$$Type): $Matrix3d
public "scaling"(double0: double): $Matrix3d
public "scaling"(double0: double, double1: double, double2: double): $Matrix3d
public "set"(matrix4fc0: $Matrix4fc$$Type): $Matrix3d
public "set"(matrix4dc0: $Matrix4dc$$Type): $Matrix3d
public "set"(matrix2fc0: $Matrix2fc$$Type): $Matrix3d
public "set"(matrix2dc0: $Matrix2dc$$Type): $Matrix3d
public "set"(int0: integer, int1: integer, double2: double): $Matrix3d
public "set"(matrix3dc0: $Matrix3dc$$Type): $Matrix3d
public "set"(matrix3fc0: $Matrix3fc$$Type): $Matrix3d
public "set"(matrix4x3dc0: $Matrix4x3dc$$Type): $Matrix3d
public "set"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $Matrix3d
public "set"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $Matrix3d
public "set"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $Matrix3d
public "set"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3dc2: $Vector3dc$$Type): $Matrix3d
public "set"(byteBuffer0: $ByteBuffer$$Type): $Matrix3d
public "set"(floatBuffer0: $FloatBuffer$$Type): $Matrix3d
public "set"(doubleBuffer0: $DoubleBuffer$$Type): $Matrix3d
public "set"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double): $Matrix3d
public "set"(axisAngle4f0: $AxisAngle4f$$Type): $Matrix3d
public "set"(quaternionfc0: $Quaternionfc$$Type): $Matrix3d
public "set"(axisAngle4d0: $AxisAngle4d$$Type): $Matrix3d
public "set"(double0s: double[]): $Matrix3d
public "set"(float0s: float[]): $Matrix3d
public "set"(quaterniondc0: $Quaterniondc$$Type): $Matrix3d
public "setColumn"(int0: integer, double1: double, double2: double, double3: double): $Matrix3d
public "setColumn"(int0: integer, vector3dc1: $Vector3dc$$Type): $Matrix3d
public "setFloats"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $Matrix3d
public "setFloats"(byteBuffer0: $ByteBuffer$$Type): $Matrix3d
public "setFromAddress"(long0: long): $Matrix3d
public "setLookAlong"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix3d
public "setLookAlong"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type): $Matrix3d
public "setRow"(int0: integer, double1: double, double2: double, double3: double): $Matrix3d
public "setRow"(int0: integer, vector3dc1: $Vector3dc$$Type): $Matrix3d
public "setRowColumn"(int0: integer, int1: integer, double2: double): $Matrix3d
public "setSkewSymmetric"(double0: double, double1: double, double2: double): $Matrix3d
public "setTransposed"(matrix3dc0: $Matrix3dc$$Type): $Matrix3d
public "setTransposed"(matrix3fc0: $Matrix3fc$$Type): $Matrix3d
public "sub"(matrix3dc0: $Matrix3dc$$Type, matrix3d1: $Matrix3d$$Type): $Matrix3d
public "sub"(matrix3dc0: $Matrix3dc$$Type): $Matrix3d
public "swap"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "toString"(numberFormat0: $NumberFormat$$Type): string
public "transform"(vector3d0: $Vector3d$$Type): $Vector3d
public "transform"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
public "transform"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "transform"(vector3f0: $Vector3f$$Type): $Vector3f
public "transform"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "transformTranspose"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
public "transformTranspose"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "transformTranspose"(vector3d0: $Vector3d$$Type): $Vector3d
public "transpose"(): $Matrix3d
public "transpose"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "writeExternal"(objectOutput0: $ObjectOutput$$Type): void
public "zero"(): $Matrix3d
get "finite"(): boolean
set "floats"(value: $ByteBuffer$$Type)
set "fromAddress"(value: long)
set "transposed"(value: $Matrix3dc$$Type)
set "transposed"(value: $Matrix3fc$$Type)
}
}

declare module "org.joml.Matrix4f" {
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Quaternionf, $Quaternionf$$Type } from "org.joml.Quaternionf"
import { $ObjectOutput$$Type } from "java.io.ObjectOutput"
import { $Quaterniond, $Quaterniond$$Type } from "org.joml.Quaterniond"
import { $Matrix4dc$$Type } from "org.joml.Matrix4dc"
import { $Matrix4x3f, $Matrix4x3f$$Type } from "org.joml.Matrix4x3f"
import { $Matrix4fc, $Matrix4fc$$Type } from "org.joml.Matrix4fc"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $NumberFormat$$Type } from "java.text.NumberFormat"
import { $Matrix3fc$$Type } from "org.joml.Matrix3fc"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Quaterniondc$$Type } from "org.joml.Quaterniondc"
import { $Matrix4d, $Matrix4d$$Type } from "org.joml.Matrix4d"
import { $Quaternionfc$$Type } from "org.joml.Quaternionfc"
import { $Cloneable } from "java.lang.Cloneable"
import { $Matrix3x2fc$$Type } from "org.joml.Matrix3x2fc"
import { $Externalizable } from "java.io.Externalizable"
import { $AxisAngle4f, $AxisAngle4f$$Type } from "org.joml.AxisAngle4f"
import { $AxisAngle4d, $AxisAngle4d$$Type } from "org.joml.AxisAngle4d"
import { $Matrix4x3fc$$Type } from "org.joml.Matrix4x3fc"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $Vector2fc$$Type } from "org.joml.Vector2fc"
import { $Vector4fc$$Type } from "org.joml.Vector4fc"
import { $Matrix3f, $Matrix3f$$Type } from "org.joml.Matrix3f"
import { $ObjectInput$$Type } from "java.io.ObjectInput"
import { $Vector4f, $Vector4f$$Type } from "org.joml.Vector4f"
import { $Matrix3d, $Matrix3d$$Type } from "org.joml.Matrix3d"

export class $Matrix4f implements $Externalizable, $Cloneable, $Matrix4fc {
constructor(floatBuffer0: $FloatBuffer$$Type)
constructor(matrix4fc0: $Matrix4fc$$Type)
constructor(vector4fc0: $Vector4fc$$Type, vector4fc1: $Vector4fc$$Type, vector4fc2: $Vector4fc$$Type, vector4fc3: $Vector4fc$$Type)
constructor()
constructor(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, float9: float, float10: float, float11: float, float12: float, float13: float, float14: float, float15: float)
constructor(matrix3fc0: $Matrix3fc$$Type)
constructor(matrix4x3fc0: $Matrix4x3fc$$Type)
constructor(matrix4dc0: $Matrix4dc$$Type)

public "add"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "add"(matrix4fc0: $Matrix4fc$$Type): $Matrix4f
public "add4x3"(matrix4fc0: $Matrix4fc$$Type): $Matrix4f
public "add4x3"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "affineSpan"(vector3f0: $Vector3f$$Type, vector3f1: $Vector3f$$Type, vector3f2: $Vector3f$$Type, vector3f3: $Vector3f$$Type): $Matrix4f
public "arcball"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4f
public "arcball"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4f6: $Matrix4f$$Type): $Matrix4f
public "arcball"(float0: float, vector3fc1: $Vector3fc$$Type, float2: float, float3: float): $Matrix4f
public "arcball"(float0: float, vector3fc1: $Vector3fc$$Type, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
public "assume"(int0: integer): $Matrix4f
public "billboardCylindrical"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3fc2: $Vector3fc$$Type): $Matrix4f
public "billboardSpherical"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type): $Matrix4f
public "billboardSpherical"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3fc2: $Vector3fc$$Type): $Matrix4f
public "clone"(): any
public "cofactor3x3"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "cofactor3x3"(): $Matrix4f
public "cofactor3x3"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "determinant"(): float
public "determinant3x3"(): float
public "determinantAffine"(): float
public "determineProperties"(): $Matrix4f
public "equals"(matrix4fc0: $Matrix4fc$$Type, float1: float): boolean
public "fma4x3"(matrix4fc0: $Matrix4fc$$Type, float1: float): $Matrix4f
public "fma4x3"(matrix4fc0: $Matrix4fc$$Type, float1: float, matrix4f2: $Matrix4f$$Type): $Matrix4f
public "frustum"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean, matrix4f7: $Matrix4f$$Type): $Matrix4f
public "frustum"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4f
public "frustum"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4f6: $Matrix4f$$Type): $Matrix4f
public "frustum"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean): $Matrix4f
public "frustumAabb"(vector3f0: $Vector3f$$Type, vector3f1: $Vector3f$$Type): $Matrix4f
public "frustumCorner"(int0: integer, vector3f1: $Vector3f$$Type): $Vector3f
public "frustumLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean, matrix4f7: $Matrix4f$$Type): $Matrix4f
public "frustumLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean): $Matrix4f
public "frustumLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4f6: $Matrix4f$$Type): $Matrix4f
public "frustumLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4f
public "frustumPlane"(int0: integer, vector4f1: $Vector4f$$Type): $Vector4f
public "frustumRayDir"(float0: float, float1: float, vector3f2: $Vector3f$$Type): $Vector3f
public "get"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "get"(float0s: float[]): float[]
public "get"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "get"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "get"(float0s: float[], int1: integer): float[]
public "get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "get"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "get"(int0: integer, int1: integer): float
public "get3x3"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "get3x3"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "get3x4"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "get3x4"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "get3x4"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "get3x4"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "get4x3"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "get4x3"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "get4x3"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "get4x3"(matrix4x3f0: $Matrix4x3f$$Type): $Matrix4x3f
public "get4x3"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "get4x3Transposed"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "get4x3Transposed"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "get4x3Transposed"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "get4x3Transposed"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "getColumn"(int0: integer, vector4f1: $Vector4f$$Type): $Vector4f
public "getColumn"(int0: integer, vector3f1: $Vector3f$$Type): $Vector3f
public "getEulerAnglesXYZ"(vector3f0: $Vector3f$$Type): $Vector3f
public "getEulerAnglesZYX"(vector3f0: $Vector3f$$Type): $Vector3f
public "getNormalizedRotation"(quaterniond0: $Quaterniond$$Type): $Quaterniond
public "getNormalizedRotation"(quaternionf0: $Quaternionf$$Type): $Quaternionf
public "getRotation"(axisAngle4d0: $AxisAngle4d$$Type): $AxisAngle4d
public "getRotation"(axisAngle4f0: $AxisAngle4f$$Type): $AxisAngle4f
public "getRow"(int0: integer, vector3f1: $Vector3f$$Type): $Vector3f
public "getRow"(int0: integer, vector4f1: $Vector4f$$Type): $Vector4f
public "getRowColumn"(int0: integer, int1: integer): float
public "getScale"(vector3f0: $Vector3f$$Type): $Vector3f
public "getToAddress"(long0: long): $Matrix4fc
public "getTranslation"(vector3f0: $Vector3f$$Type): $Vector3f
public "getTransposed"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "getTransposed"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "getTransposed"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "getTransposed"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "getUnnormalizedRotation"(quaternionf0: $Quaternionf$$Type): $Quaternionf
public "getUnnormalizedRotation"(quaterniond0: $Quaterniond$$Type): $Quaterniond
public "identity"(): $Matrix4f
public "invert"(): $Matrix4f
public "invert"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "invertAffine"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "invertAffine"(): $Matrix4f
public "invertFrustum"(): $Matrix4f
public "invertFrustum"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "invertOrtho"(): $Matrix4f
public "invertOrtho"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "invertPerspective"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "invertPerspective"(): $Matrix4f
public "invertPerspectiveView"(matrix4x3fc0: $Matrix4x3fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "invertPerspectiveView"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "isAffine"(): boolean
public "isFinite"(): boolean
public "lerp"(matrix4fc0: $Matrix4fc$$Type, float1: float): $Matrix4f
public "lerp"(matrix4fc0: $Matrix4fc$$Type, float1: float, matrix4f2: $Matrix4f$$Type): $Matrix4f
public "lookAlong"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4f
public "lookAlong"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4f6: $Matrix4f$$Type): $Matrix4f
public "lookAlong"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type): $Matrix4f
public "lookAlong"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, matrix4f2: $Matrix4f$$Type): $Matrix4f
public "lookAt"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float): $Matrix4f
public "lookAt"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, matrix4f9: $Matrix4f$$Type): $Matrix4f
public "lookAt"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3fc2: $Vector3fc$$Type): $Matrix4f
public "lookAt"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3fc2: $Vector3fc$$Type, matrix4f3: $Matrix4f$$Type): $Matrix4f
public "lookAtLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float): $Matrix4f
public "lookAtLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, matrix4f9: $Matrix4f$$Type): $Matrix4f
public "lookAtLH"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3fc2: $Vector3fc$$Type): $Matrix4f
public "lookAtLH"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3fc2: $Vector3fc$$Type, matrix4f3: $Matrix4f$$Type): $Matrix4f
public "lookAtPerspective"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, matrix4f9: $Matrix4f$$Type): $Matrix4f
public "lookAtPerspectiveLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, matrix4f9: $Matrix4f$$Type): $Matrix4f
public "m00"(): float
public "m00"(float0: float): $Matrix4f
public "m01"(float0: float): $Matrix4f
public "m01"(): float
public "m02"(float0: float): $Matrix4f
public "m02"(): float
public "m03"(float0: float): $Matrix4f
public "m03"(): float
public "m10"(): float
public "m10"(float0: float): $Matrix4f
public "m11"(): float
public "m11"(float0: float): $Matrix4f
public "m12"(float0: float): $Matrix4f
public "m12"(): float
public "m13"(float0: float): $Matrix4f
public "m13"(): float
public "m20"(float0: float): $Matrix4f
public "m20"(): float
public "m21"(): float
public "m21"(float0: float): $Matrix4f
public "m22"(float0: float): $Matrix4f
public "m22"(): float
public "m23"(float0: float): $Matrix4f
public "m23"(): float
public "m30"(): float
public "m30"(float0: float): $Matrix4f
public "m31"(float0: float): $Matrix4f
public "m31"(): float
public "m32"(float0: float): $Matrix4f
public "m32"(): float
public "m33"(float0: float): $Matrix4f
public "m33"(): float
public "mapXZY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapXZY"(): $Matrix4f
public "mapXZnY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapXZnY"(): $Matrix4f
public "mapXnYnZ"(): $Matrix4f
public "mapXnYnZ"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapXnZY"(): $Matrix4f
public "mapXnZY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapXnZnY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapXnZnY"(): $Matrix4f
public "mapYXZ"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapYXZ"(): $Matrix4f
public "mapYXnZ"(): $Matrix4f
public "mapYXnZ"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapYZX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapYZX"(): $Matrix4f
public "mapYZnX"(): $Matrix4f
public "mapYZnX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapYnXZ"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapYnXZ"(): $Matrix4f
public "mapYnXnZ"(): $Matrix4f
public "mapYnXnZ"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapYnZX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapYnZX"(): $Matrix4f
public "mapYnZnX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapYnZnX"(): $Matrix4f
public "mapZXY"(): $Matrix4f
public "mapZXY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapZXnY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapZXnY"(): $Matrix4f
public "mapZYX"(): $Matrix4f
public "mapZYX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapZYnX"(): $Matrix4f
public "mapZYnX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapZnXY"(): $Matrix4f
public "mapZnXY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapZnXnY"(): $Matrix4f
public "mapZnXnY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapZnYX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapZnYX"(): $Matrix4f
public "mapZnYnX"(): $Matrix4f
public "mapZnYnX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapnXYnZ"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapnXYnZ"(): $Matrix4f
public "mapnXZY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapnXZY"(): $Matrix4f
public "mapnXZnY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapnXZnY"(): $Matrix4f
public "mapnXnYZ"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapnXnYZ"(): $Matrix4f
public "mapnXnYnZ"(): $Matrix4f
public "mapnXnYnZ"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapnXnZY"(): $Matrix4f
public "mapnXnZY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapnXnZnY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapnXnZnY"(): $Matrix4f
public "mapnYXZ"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapnYXZ"(): $Matrix4f
public "mapnYXnZ"(): $Matrix4f
public "mapnYXnZ"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapnYZX"(): $Matrix4f
public "mapnYZX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapnYZnX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapnYZnX"(): $Matrix4f
public "mapnYnXZ"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapnYnXZ"(): $Matrix4f
public "mapnYnXnZ"(): $Matrix4f
public "mapnYnXnZ"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapnYnZX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapnYnZX"(): $Matrix4f
public "mapnYnZnX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapnYnZnX"(): $Matrix4f
public "mapnZXY"(): $Matrix4f
public "mapnZXY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapnZXnY"(): $Matrix4f
public "mapnZXnY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapnZYX"(): $Matrix4f
public "mapnZYX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapnZYnX"(): $Matrix4f
public "mapnZYnX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapnZnXY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapnZnXY"(): $Matrix4f
public "mapnZnXnY"(): $Matrix4f
public "mapnZnXnY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapnZnYX"(): $Matrix4f
public "mapnZnYX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mapnZnYnX"(): $Matrix4f
public "mapnZnYnX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "mul"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, float9: float, float10: float, float11: float, float12: float, float13: float, float14: float, float15: float, matrix4f16: $Matrix4f$$Type): $Matrix4f
public "mul"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, float9: float, float10: float, float11: float, float12: float, float13: float, float14: float, float15: float): $Matrix4f
public "mul"(matrix4fc0: $Matrix4fc$$Type): $Matrix4f
public "mul"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "mul"(matrix3x2fc0: $Matrix3x2fc$$Type): $Matrix4f
public "mul"(matrix3x2fc0: $Matrix3x2fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "mul"(matrix4x3fc0: $Matrix4x3fc$$Type): $Matrix4f
public "mul"(matrix4x3fc0: $Matrix4x3fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "mul0"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "mul0"(matrix4fc0: $Matrix4fc$$Type): $Matrix4f
public "mul3x3"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, matrix4f9: $Matrix4f$$Type): $Matrix4f
public "mul3x3"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float): $Matrix4f
public "mul4x3ComponentWise"(matrix4fc0: $Matrix4fc$$Type): $Matrix4f
public "mul4x3ComponentWise"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "mulAffine"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "mulAffine"(matrix4fc0: $Matrix4fc$$Type): $Matrix4f
public "mulAffineR"(matrix4fc0: $Matrix4fc$$Type): $Matrix4f
public "mulAffineR"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "mulComponentWise"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "mulComponentWise"(matrix4fc0: $Matrix4fc$$Type): $Matrix4f
public "mulLocal"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "mulLocal"(matrix4fc0: $Matrix4fc$$Type): $Matrix4f
public "mulLocalAffine"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "mulLocalAffine"(matrix4fc0: $Matrix4fc$$Type): $Matrix4f
public "mulOrthoAffine"(matrix4fc0: $Matrix4fc$$Type): $Matrix4f
public "mulOrthoAffine"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "mulPerspectiveAffine"(matrix4x3fc0: $Matrix4x3fc$$Type): $Matrix4f
public "mulPerspectiveAffine"(matrix4fc0: $Matrix4fc$$Type): $Matrix4f
public "mulPerspectiveAffine"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "mulPerspectiveAffine"(matrix4x3fc0: $Matrix4x3fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "mulTranslationAffine"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "negateX"(): $Matrix4f
public "negateX"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "negateY"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "negateY"(): $Matrix4f
public "negateZ"(): $Matrix4f
public "negateZ"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "normal"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "normal"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "normal"(): $Matrix4f
public "normalize3x3"(): $Matrix4f
public "normalize3x3"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "normalize3x3"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "normalizedPositiveX"(vector3f0: $Vector3f$$Type): $Vector3f
public "normalizedPositiveY"(vector3f0: $Vector3f$$Type): $Vector3f
public "normalizedPositiveZ"(vector3f0: $Vector3f$$Type): $Vector3f
public "obliqueZ"(float0: float, float1: float): $Matrix4f
public "obliqueZ"(float0: float, float1: float, matrix4f2: $Matrix4f$$Type): $Matrix4f
public "origin"(vector3f0: $Vector3f$$Type): $Vector3f
public "originAffine"(vector3f0: $Vector3f$$Type): $Vector3f
public "ortho"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4f
public "ortho"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean): $Matrix4f
public "ortho"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4f6: $Matrix4f$$Type): $Matrix4f
public "ortho"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean, matrix4f7: $Matrix4f$$Type): $Matrix4f
public "ortho2D"(float0: float, float1: float, float2: float, float3: float): $Matrix4f
public "ortho2D"(float0: float, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
public "ortho2DLH"(float0: float, float1: float, float2: float, float3: float): $Matrix4f
public "ortho2DLH"(float0: float, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
public "orthoCrop"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "orthoLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4f6: $Matrix4f$$Type): $Matrix4f
public "orthoLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean): $Matrix4f
public "orthoLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean, matrix4f7: $Matrix4f$$Type): $Matrix4f
public "orthoLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4f
public "orthoSymmetric"(float0: float, float1: float, float2: float, float3: float): $Matrix4f
public "orthoSymmetric"(float0: float, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
public "orthoSymmetric"(float0: float, float1: float, float2: float, float3: float, boolean4: boolean): $Matrix4f
public "orthoSymmetric"(float0: float, float1: float, float2: float, float3: float, boolean4: boolean, matrix4f5: $Matrix4f$$Type): $Matrix4f
public "orthoSymmetricLH"(float0: float, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
public "orthoSymmetricLH"(float0: float, float1: float, float2: float, float3: float): $Matrix4f
public "orthoSymmetricLH"(float0: float, float1: float, float2: float, float3: float, boolean4: boolean, matrix4f5: $Matrix4f$$Type): $Matrix4f
public "orthoSymmetricLH"(float0: float, float1: float, float2: float, float3: float, boolean4: boolean): $Matrix4f
public "perspective"(float0: float, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
public "perspective"(float0: float, float1: float, float2: float, float3: float, boolean4: boolean): $Matrix4f
public "perspective"(float0: float, float1: float, float2: float, float3: float): $Matrix4f
public "perspective"(float0: float, float1: float, float2: float, float3: float, boolean4: boolean, matrix4f5: $Matrix4f$$Type): $Matrix4f
public "perspectiveFar"(): float
public "perspectiveFov"(): float
public "perspectiveFrustumSlice"(float0: float, float1: float, matrix4f2: $Matrix4f$$Type): $Matrix4f
public "perspectiveInvOrigin"(vector3f0: $Vector3f$$Type): $Vector3f
public "perspectiveLH"(float0: float, float1: float, float2: float, float3: float, boolean4: boolean, matrix4f5: $Matrix4f$$Type): $Matrix4f
public "perspectiveLH"(float0: float, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
public "perspectiveLH"(float0: float, float1: float, float2: float, float3: float, boolean4: boolean): $Matrix4f
public "perspectiveLH"(float0: float, float1: float, float2: float, float3: float): $Matrix4f
public "perspectiveNear"(): float
public "perspectiveOffCenter"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4f
public "perspectiveOffCenter"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4f6: $Matrix4f$$Type): $Matrix4f
public "perspectiveOffCenter"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean, matrix4f7: $Matrix4f$$Type): $Matrix4f
public "perspectiveOffCenter"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean): $Matrix4f
public "perspectiveOffCenterFov"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4f
public "perspectiveOffCenterFov"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean, matrix4f7: $Matrix4f$$Type): $Matrix4f
public "perspectiveOffCenterFov"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4f6: $Matrix4f$$Type): $Matrix4f
public "perspectiveOffCenterFov"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean): $Matrix4f
public "perspectiveOffCenterFovLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4f
public "perspectiveOffCenterFovLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean, matrix4f7: $Matrix4f$$Type): $Matrix4f
public "perspectiveOffCenterFovLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4f6: $Matrix4f$$Type): $Matrix4f
public "perspectiveOffCenterFovLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean): $Matrix4f
public static "perspectiveOffCenterViewFromRectangle"(vector3f0: $Vector3f$$Type, vector3f1: $Vector3f$$Type, vector3f2: $Vector3f$$Type, vector3f3: $Vector3f$$Type, float4: float, boolean5: boolean, matrix4f6: $Matrix4f$$Type, matrix4f7: $Matrix4f$$Type): void
public "perspectiveOrigin"(vector3f0: $Vector3f$$Type): $Vector3f
public "perspectiveRect"(float0: float, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
public "perspectiveRect"(float0: float, float1: float, float2: float, float3: float, boolean4: boolean, matrix4f5: $Matrix4f$$Type): $Matrix4f
public "perspectiveRect"(float0: float, float1: float, float2: float, float3: float, boolean4: boolean): $Matrix4f
public "perspectiveRect"(float0: float, float1: float, float2: float, float3: float): $Matrix4f
public "pick"(float0: float, float1: float, float2: float, float3: float, int4s: integer[]): $Matrix4f
public "pick"(float0: float, float1: float, float2: float, float3: float, int4s: integer[], matrix4f5: $Matrix4f$$Type): $Matrix4f
public "positiveX"(vector3f0: $Vector3f$$Type): $Vector3f
public "positiveY"(vector3f0: $Vector3f$$Type): $Vector3f
public "positiveZ"(vector3f0: $Vector3f$$Type): $Vector3f
public "project"(vector3fc0: $Vector3fc$$Type, int1s: integer[], vector4f2: $Vector4f$$Type): $Vector4f
public "project"(float0: float, float1: float, float2: float, int3s: integer[], vector4f4: $Vector4f$$Type): $Vector4f
public "project"(vector3fc0: $Vector3fc$$Type, int1s: integer[], vector3f2: $Vector3f$$Type): $Vector3f
public "project"(float0: float, float1: float, float2: float, int3s: integer[], vector3f4: $Vector3f$$Type): $Vector3f
public "projectedGridRange"(matrix4fc0: $Matrix4fc$$Type, float1: float, float2: float, matrix4f3: $Matrix4f$$Type): $Matrix4f
public "properties"(): integer
public "readExternal"(objectInput0: $ObjectInput$$Type): void
public "reflect"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4f6: $Matrix4f$$Type): $Matrix4f
public "reflect"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, matrix4f2: $Matrix4f$$Type): $Matrix4f
public "reflect"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type): $Matrix4f
public "reflect"(quaternionfc0: $Quaternionfc$$Type, vector3fc1: $Vector3fc$$Type): $Matrix4f
public "reflect"(float0: float, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
public "reflect"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4f
public "reflect"(quaternionfc0: $Quaternionfc$$Type, vector3fc1: $Vector3fc$$Type, matrix4f2: $Matrix4f$$Type): $Matrix4f
public "reflect"(float0: float, float1: float, float2: float, float3: float): $Matrix4f
public "reflection"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4f
public "reflection"(float0: float, float1: float, float2: float, float3: float): $Matrix4f
public "reflection"(quaternionfc0: $Quaternionfc$$Type, vector3fc1: $Vector3fc$$Type): $Matrix4f
public "reflection"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type): $Matrix4f
public "rotate"(float0: float, vector3fc1: $Vector3fc$$Type, matrix4f2: $Matrix4f$$Type): $Matrix4f
public "rotate"(quaternionfc0: $Quaternionfc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "rotate"(quaternionfc0: $Quaternionfc$$Type): $Matrix4f
public "rotate"(float0: float, vector3fc1: $Vector3fc$$Type): $Matrix4f
public "rotate"(axisAngle4f0: $AxisAngle4f$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "rotate"(axisAngle4f0: $AxisAngle4f$$Type): $Matrix4f
public "rotate"(float0: float, float1: float, float2: float, float3: float): $Matrix4f
public "rotate"(float0: float, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
public "rotateAffine"(quaternionfc0: $Quaternionfc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "rotateAffine"(quaternionfc0: $Quaternionfc$$Type): $Matrix4f
public "rotateAffine"(float0: float, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
public "rotateAffine"(float0: float, float1: float, float2: float, float3: float): $Matrix4f
public "rotateAffineXYZ"(float0: float, float1: float, float2: float, matrix4f3: $Matrix4f$$Type): $Matrix4f
public "rotateAffineXYZ"(float0: float, float1: float, float2: float): $Matrix4f
public "rotateAffineYXZ"(float0: float, float1: float, float2: float): $Matrix4f
public "rotateAffineYXZ"(float0: float, float1: float, float2: float, matrix4f3: $Matrix4f$$Type): $Matrix4f
public "rotateAffineZYX"(float0: float, float1: float, float2: float, matrix4f3: $Matrix4f$$Type): $Matrix4f
public "rotateAffineZYX"(float0: float, float1: float, float2: float): $Matrix4f
public "rotateAround"(quaternionfc0: $Quaternionfc$$Type, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
public "rotateAround"(quaternionfc0: $Quaternionfc$$Type, float1: float, float2: float, float3: float): $Matrix4f
public "rotateAroundAffine"(quaternionfc0: $Quaternionfc$$Type, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
public "rotateAroundLocal"(quaternionfc0: $Quaternionfc$$Type, float1: float, float2: float, float3: float): $Matrix4f
public "rotateAroundLocal"(quaternionfc0: $Quaternionfc$$Type, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
public "rotateLocal"(float0: float, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
public "rotateLocal"(float0: float, float1: float, float2: float, float3: float): $Matrix4f
public "rotateLocal"(quaternionfc0: $Quaternionfc$$Type): $Matrix4f
public "rotateLocal"(quaternionfc0: $Quaternionfc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "rotateLocalX"(float0: float, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "rotateLocalX"(float0: float): $Matrix4f
public "rotateLocalY"(float0: float): $Matrix4f
public "rotateLocalY"(float0: float, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "rotateLocalZ"(float0: float): $Matrix4f
public "rotateLocalZ"(float0: float, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "rotateTowards"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4f6: $Matrix4f$$Type): $Matrix4f
public "rotateTowards"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4f
public "rotateTowards"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type): $Matrix4f
public "rotateTowards"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, matrix4f2: $Matrix4f$$Type): $Matrix4f
public "rotateTowardsXY"(float0: float, float1: float): $Matrix4f
public "rotateTowardsXY"(float0: float, float1: float, matrix4f2: $Matrix4f$$Type): $Matrix4f
public "rotateTranslation"(float0: float, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
public "rotateTranslation"(quaternionfc0: $Quaternionfc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "rotateX"(float0: float, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "rotateX"(float0: float): $Matrix4f
public "rotateXYZ"(float0: float, float1: float, float2: float): $Matrix4f
public "rotateXYZ"(vector3fc0: $Vector3fc$$Type): $Matrix4f
public "rotateXYZ"(float0: float, float1: float, float2: float, matrix4f3: $Matrix4f$$Type): $Matrix4f
public "rotateY"(float0: float): $Matrix4f
public "rotateY"(float0: float, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "rotateYXZ"(vector3f0: $Vector3f$$Type): $Matrix4f
public "rotateYXZ"(float0: float, float1: float, float2: float): $Matrix4f
public "rotateYXZ"(float0: float, float1: float, float2: float, matrix4f3: $Matrix4f$$Type): $Matrix4f
public "rotateZ"(float0: float): $Matrix4f
public "rotateZ"(float0: float, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "rotateZYX"(float0: float, float1: float, float2: float, matrix4f3: $Matrix4f$$Type): $Matrix4f
public "rotateZYX"(float0: float, float1: float, float2: float): $Matrix4f
public "rotateZYX"(vector3f0: $Vector3f$$Type): $Matrix4f
public "rotation"(axisAngle4f0: $AxisAngle4f$$Type): $Matrix4f
public "rotation"(quaternionfc0: $Quaternionfc$$Type): $Matrix4f
public "rotation"(float0: float, float1: float, float2: float, float3: float): $Matrix4f
public "rotation"(float0: float, vector3fc1: $Vector3fc$$Type): $Matrix4f
public "rotationAround"(quaternionfc0: $Quaternionfc$$Type, float1: float, float2: float, float3: float): $Matrix4f
public "rotationTowards"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type): $Matrix4f
public "rotationTowards"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4f
public "rotationTowardsXY"(float0: float, float1: float): $Matrix4f
public "rotationX"(float0: float): $Matrix4f
public "rotationXYZ"(float0: float, float1: float, float2: float): $Matrix4f
public "rotationY"(float0: float): $Matrix4f
public "rotationYXZ"(float0: float, float1: float, float2: float): $Matrix4f
public "rotationZ"(float0: float): $Matrix4f
public "rotationZYX"(float0: float, float1: float, float2: float): $Matrix4f
public "scale"(float0: float): $Matrix4f
public "scale"(float0: float, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "scale"(vector3fc0: $Vector3fc$$Type): $Matrix4f
public "scale"(float0: float, float1: float, float2: float): $Matrix4f
public "scale"(float0: float, float1: float, float2: float, matrix4f3: $Matrix4f$$Type): $Matrix4f
public "scale"(vector3fc0: $Vector3fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "scaleAround"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4f6: $Matrix4f$$Type): $Matrix4f
public "scaleAround"(float0: float, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
public "scaleAround"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4f
public "scaleAround"(float0: float, float1: float, float2: float, float3: float): $Matrix4f
public "scaleAroundLocal"(float0: float, float1: float, float2: float, float3: float): $Matrix4f
public "scaleAroundLocal"(float0: float, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
public "scaleAroundLocal"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4f
public "scaleAroundLocal"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, matrix4f6: $Matrix4f$$Type): $Matrix4f
public "scaleLocal"(float0: float, float1: float, float2: float): $Matrix4f
public "scaleLocal"(float0: float): $Matrix4f
public "scaleLocal"(float0: float, float1: float, float2: float, matrix4f3: $Matrix4f$$Type): $Matrix4f
public "scaleLocal"(float0: float, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "scaleXY"(float0: float, float1: float): $Matrix4f
public "scaleXY"(float0: float, float1: float, matrix4f2: $Matrix4f$$Type): $Matrix4f
public "scaling"(float0: float): $Matrix4f
public "scaling"(float0: float, float1: float, float2: float): $Matrix4f
public "scaling"(vector3fc0: $Vector3fc$$Type): $Matrix4f
public "set"(matrix3fc0: $Matrix3fc$$Type): $Matrix4f
public "set"(axisAngle4f0: $AxisAngle4f$$Type): $Matrix4f
public "set"(axisAngle4d0: $AxisAngle4d$$Type): $Matrix4f
public "set"(matrix4x3fc0: $Matrix4x3fc$$Type): $Matrix4f
public "set"(matrix4fc0: $Matrix4fc$$Type): $Matrix4f
public "set"(matrix4dc0: $Matrix4dc$$Type): $Matrix4f
public "set"(floatBuffer0: $FloatBuffer$$Type): $Matrix4f
public "set"(byteBuffer0: $ByteBuffer$$Type): $Matrix4f
public "set"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $Matrix4f
public "set"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $Matrix4f
public "set"(vector4fc0: $Vector4fc$$Type, vector4fc1: $Vector4fc$$Type, vector4fc2: $Vector4fc$$Type, vector4fc3: $Vector4fc$$Type): $Matrix4f
public "set"(int0: integer, int1: integer, float2: float): $Matrix4f
public "set"(quaterniondc0: $Quaterniondc$$Type): $Matrix4f
public "set"(quaternionfc0: $Quaternionfc$$Type): $Matrix4f
public "set"(float0s: float[], int1: integer): $Matrix4f
public "set"(float0s: float[]): $Matrix4f
public "set"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, float9: float, float10: float, float11: float, float12: float, float13: float, float14: float, float15: float): $Matrix4f
public "set3x3"(matrix3fc0: $Matrix3fc$$Type): $Matrix4f
public "set3x3"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "set4x3"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "set4x3"(matrix4x3fc0: $Matrix4x3fc$$Type): $Matrix4f
public "setColumn"(int0: integer, vector4fc1: $Vector4fc$$Type): $Matrix4f
public "setFromAddress"(long0: long): $Matrix4f
public "setFromIntrinsic"(float0: float, float1: float, float2: float, float3: float, float4: float, int5: integer, int6: integer, float7: float, float8: float): $Matrix4f
public "setFrustum"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4f
public "setFrustum"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean): $Matrix4f
public "setFrustumLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean): $Matrix4f
public "setFrustumLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4f
public "setLookAlong"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4f
public "setLookAlong"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type): $Matrix4f
public "setLookAt"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float): $Matrix4f
public "setLookAt"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3fc2: $Vector3fc$$Type): $Matrix4f
public "setLookAtLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float): $Matrix4f
public "setLookAtLH"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3fc2: $Vector3fc$$Type): $Matrix4f
public "setOrtho"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4f
public "setOrtho"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean): $Matrix4f
public "setOrtho2D"(float0: float, float1: float, float2: float, float3: float): $Matrix4f
public "setOrtho2DLH"(float0: float, float1: float, float2: float, float3: float): $Matrix4f
public "setOrthoLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4f
public "setOrthoLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean): $Matrix4f
public "setOrthoSymmetric"(float0: float, float1: float, float2: float, float3: float, boolean4: boolean): $Matrix4f
public "setOrthoSymmetric"(float0: float, float1: float, float2: float, float3: float): $Matrix4f
public "setOrthoSymmetricLH"(float0: float, float1: float, float2: float, float3: float, boolean4: boolean): $Matrix4f
public "setOrthoSymmetricLH"(float0: float, float1: float, float2: float, float3: float): $Matrix4f
public "setPerspective"(float0: float, float1: float, float2: float, float3: float, boolean4: boolean): $Matrix4f
public "setPerspective"(float0: float, float1: float, float2: float, float3: float): $Matrix4f
public "setPerspectiveLH"(float0: float, float1: float, float2: float, float3: float, boolean4: boolean): $Matrix4f
public "setPerspectiveLH"(float0: float, float1: float, float2: float, float3: float): $Matrix4f
public "setPerspectiveOffCenter"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4f
public "setPerspectiveOffCenter"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean): $Matrix4f
public "setPerspectiveOffCenterFov"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean): $Matrix4f
public "setPerspectiveOffCenterFov"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4f
public "setPerspectiveOffCenterFovLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean): $Matrix4f
public "setPerspectiveOffCenterFovLH"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $Matrix4f
public "setPerspectiveRect"(float0: float, float1: float, float2: float, float3: float, boolean4: boolean): $Matrix4f
public "setPerspectiveRect"(float0: float, float1: float, float2: float, float3: float): $Matrix4f
public "setRotationXYZ"(float0: float, float1: float, float2: float): $Matrix4f
public "setRotationYXZ"(float0: float, float1: float, float2: float): $Matrix4f
public "setRotationZYX"(float0: float, float1: float, float2: float): $Matrix4f
public "setRow"(int0: integer, vector4fc1: $Vector4fc$$Type): $Matrix4f
public "setRowColumn"(int0: integer, int1: integer, float2: float): $Matrix4f
public "setTranslation"(float0: float, float1: float, float2: float): $Matrix4f
public "setTranslation"(vector3fc0: $Vector3fc$$Type): $Matrix4f
public "setTransposed"(floatBuffer0: $FloatBuffer$$Type): $Matrix4f
public "setTransposed"(byteBuffer0: $ByteBuffer$$Type): $Matrix4f
public "setTransposed"(matrix4fc0: $Matrix4fc$$Type): $Matrix4f
public "setTransposed"(float0s: float[], int1: integer): $Matrix4f
public "setTransposed"(float0s: float[]): $Matrix4f
public "setTransposedFromAddress"(long0: long): $Matrix4f
public "shadow"(float0: float, float1: float, float2: float, float3: float, matrix4f4: $Matrix4f$$Type): $Matrix4f
public "shadow"(vector4f0: $Vector4f$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "shadow"(float0: float, float1: float, float2: float, float3: float, matrix4fc4: $Matrix4fc$$Type, matrix4f5: $Matrix4f$$Type): $Matrix4f
public "shadow"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, matrix4f8: $Matrix4f$$Type): $Matrix4f
public "shadow"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float): $Matrix4f
public "shadow"(vector4f0: $Vector4f$$Type, float1: float, float2: float, float3: float, float4: float): $Matrix4f
public "shadow"(vector4f0: $Vector4f$$Type, float1: float, float2: float, float3: float, float4: float, matrix4f5: $Matrix4f$$Type): $Matrix4f
public "shadow"(vector4f0: $Vector4f$$Type, matrix4fc1: $Matrix4fc$$Type, matrix4f2: $Matrix4f$$Type): $Matrix4f
public "sub"(matrix4fc0: $Matrix4fc$$Type): $Matrix4f
public "sub"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "sub4x3"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "sub4x3"(matrix4fc0: $Matrix4fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "swap"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "testAab"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): boolean
public "testPoint"(float0: float, float1: float, float2: float): boolean
public "testSphere"(float0: float, float1: float, float2: float, float3: float): boolean
public "tile"(int0: integer, int1: integer, int2: integer, int3: integer, matrix4f4: $Matrix4f$$Type): $Matrix4f
public "tile"(int0: integer, int1: integer, int2: integer, int3: integer): $Matrix4f
public "toString"(numberFormat0: $NumberFormat$$Type): string
public "transform"(vector4f0: $Vector4f$$Type): $Vector4f
public "transform"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
public "transform"(float0: float, float1: float, float2: float, float3: float, vector4f4: $Vector4f$$Type): $Vector4f
public "transformAab"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, vector3f6: $Vector3f$$Type, vector3f7: $Vector3f$$Type): $Matrix4f
public "transformAab"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3f2: $Vector3f$$Type, vector3f3: $Vector3f$$Type): $Matrix4f
public "transformAffine"(float0: float, float1: float, float2: float, float3: float, vector4f4: $Vector4f$$Type): $Vector4f
public "transformAffine"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
public "transformAffine"(vector4f0: $Vector4f$$Type): $Vector4f
public "transformDirection"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
public "transformDirection"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "transformDirection"(vector3f0: $Vector3f$$Type): $Vector3f
public "transformPosition"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
public "transformPosition"(vector3f0: $Vector3f$$Type): $Vector3f
public "transformPosition"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "transformProject"(float0: float, float1: float, float2: float, float3: float, vector3f4: $Vector3f$$Type): $Vector3f
public "transformProject"(vector3f0: $Vector3f$$Type): $Vector3f
public "transformProject"(vector4fc0: $Vector4fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "transformProject"(float0: float, float1: float, float2: float, vector3f3: $Vector3f$$Type): $Vector3f
public "transformProject"(float0: float, float1: float, float2: float, float3: float, vector4f4: $Vector4f$$Type): $Vector4f
public "transformProject"(vector4f0: $Vector4f$$Type): $Vector4f
public "transformProject"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
public "transformProject"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "transformTranspose"(float0: float, float1: float, float2: float, float3: float, vector4f4: $Vector4f$$Type): $Vector4f
public "transformTranspose"(vector4f0: $Vector4f$$Type): $Vector4f
public "transformTranspose"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
public "translate"(vector3fc0: $Vector3fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "translate"(float0: float, float1: float, float2: float, matrix4f3: $Matrix4f$$Type): $Matrix4f
public "translate"(float0: float, float1: float, float2: float): $Matrix4f
public "translate"(vector3fc0: $Vector3fc$$Type): $Matrix4f
public "translateLocal"(float0: float, float1: float, float2: float): $Matrix4f
public "translateLocal"(float0: float, float1: float, float2: float, matrix4f3: $Matrix4f$$Type): $Matrix4f
public "translateLocal"(vector3fc0: $Vector3fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "translateLocal"(vector3fc0: $Vector3fc$$Type): $Matrix4f
public "translation"(float0: float, float1: float, float2: float): $Matrix4f
public "translation"(vector3fc0: $Vector3fc$$Type): $Matrix4f
public "translationRotate"(float0: float, float1: float, float2: float, quaternionfc3: $Quaternionfc$$Type): $Matrix4f
public "translationRotate"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float): $Matrix4f
public "translationRotate"(vector3fc0: $Vector3fc$$Type, quaternionfc1: $Quaternionfc$$Type): $Matrix4f
public "translationRotateInvert"(vector3fc0: $Vector3fc$$Type, quaternionfc1: $Quaternionfc$$Type): $Matrix4f
public "translationRotateInvert"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float): $Matrix4f
public "translationRotateScale"(vector3fc0: $Vector3fc$$Type, quaternionfc1: $Quaternionfc$$Type, float2: float): $Matrix4f
public "translationRotateScale"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float): $Matrix4f
public "translationRotateScale"(vector3fc0: $Vector3fc$$Type, quaternionfc1: $Quaternionfc$$Type, vector3fc2: $Vector3fc$$Type): $Matrix4f
public "translationRotateScale"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, float9: float): $Matrix4f
public "translationRotateScaleInvert"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, float9: float): $Matrix4f
public "translationRotateScaleInvert"(vector3fc0: $Vector3fc$$Type, quaternionfc1: $Quaternionfc$$Type, vector3fc2: $Vector3fc$$Type): $Matrix4f
public "translationRotateScaleInvert"(vector3fc0: $Vector3fc$$Type, quaternionfc1: $Quaternionfc$$Type, float2: float): $Matrix4f
public "translationRotateScaleMulAffine"(vector3fc0: $Vector3fc$$Type, quaternionfc1: $Quaternionfc$$Type, vector3fc2: $Vector3fc$$Type, matrix4f3: $Matrix4f$$Type): $Matrix4f
public "translationRotateScaleMulAffine"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, float9: float, matrix4f10: $Matrix4f$$Type): $Matrix4f
public "translationRotateTowards"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float): $Matrix4f
public "translationRotateTowards"(vector3fc0: $Vector3fc$$Type, vector3fc1: $Vector3fc$$Type, vector3fc2: $Vector3fc$$Type): $Matrix4f
public "transpose"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "transpose"(): $Matrix4f
public "transpose3x3"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "transpose3x3"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "transpose3x3"(): $Matrix4f
public "trapezoidCrop"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float): $Matrix4f
public "unproject"(vector3fc0: $Vector3fc$$Type, int1s: integer[], vector4f2: $Vector4f$$Type): $Vector4f
public "unproject"(float0: float, float1: float, float2: float, int3s: integer[], vector4f4: $Vector4f$$Type): $Vector4f
public "unproject"(float0: float, float1: float, float2: float, int3s: integer[], vector3f4: $Vector3f$$Type): $Vector3f
public "unproject"(vector3fc0: $Vector3fc$$Type, int1s: integer[], vector3f2: $Vector3f$$Type): $Vector3f
public "unprojectInv"(float0: float, float1: float, float2: float, int3s: integer[], vector4f4: $Vector4f$$Type): $Vector4f
public "unprojectInv"(float0: float, float1: float, float2: float, int3s: integer[], vector3f4: $Vector3f$$Type): $Vector3f
public "unprojectInv"(vector3fc0: $Vector3fc$$Type, int1s: integer[], vector3f2: $Vector3f$$Type): $Vector3f
public "unprojectInv"(vector3fc0: $Vector3fc$$Type, int1s: integer[], vector4f2: $Vector4f$$Type): $Vector4f
public "unprojectInvRay"(float0: float, float1: float, int2s: integer[], vector3f3: $Vector3f$$Type, vector3f4: $Vector3f$$Type): $Matrix4f
public "unprojectInvRay"(vector2fc0: $Vector2fc$$Type, int1s: integer[], vector3f2: $Vector3f$$Type, vector3f3: $Vector3f$$Type): $Matrix4f
public "unprojectRay"(vector2fc0: $Vector2fc$$Type, int1s: integer[], vector3f2: $Vector3f$$Type, vector3f3: $Vector3f$$Type): $Matrix4f
public "unprojectRay"(float0: float, float1: float, int2s: integer[], vector3f3: $Vector3f$$Type, vector3f4: $Vector3f$$Type): $Matrix4f
public "withLookAtUp"(float0: float, float1: float, float2: float, matrix4f3: $Matrix4f$$Type): $Matrix4f
public "withLookAtUp"(float0: float, float1: float, float2: float): $Matrix4f
public "withLookAtUp"(vector3fc0: $Vector3fc$$Type, matrix4f1: $Matrix4f$$Type): $Matrix4f
public "withLookAtUp"(vector3fc0: $Vector3fc$$Type): $Matrix4f
public "writeExternal"(objectOutput0: $ObjectOutput$$Type): void
public "zero"(): $Matrix4f
get "affine"(): boolean
get "finite"(): boolean
set "3x3"(value: $Matrix3fc$$Type)
set "3x3"(value: $Matrix4f$$Type)
set "4x3"(value: $Matrix4f$$Type)
set "4x3"(value: $Matrix4x3fc$$Type)
set "fromAddress"(value: long)
set "transposed"(value: $FloatBuffer$$Type)
set "transposed"(value: $ByteBuffer$$Type)
set "transposed"(value: $Matrix4fc$$Type)
set "transposed"(value: float[])
set "transposedFromAddress"(value: long)
}
}

declare module "org.joml.Matrix4d" {
import { $Matrix4x3d, $Matrix4x3d$$Type } from "org.joml.Matrix4x3d"
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Quaternionf, $Quaternionf$$Type } from "org.joml.Quaternionf"
import { $ObjectOutput$$Type } from "java.io.ObjectOutput"
import { $Quaterniond, $Quaterniond$$Type } from "org.joml.Quaterniond"
import { $Matrix4dc, $Matrix4dc$$Type } from "org.joml.Matrix4dc"
import { $Matrix3dc$$Type } from "org.joml.Matrix3dc"
import { $Matrix4fc$$Type } from "org.joml.Matrix4fc"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $NumberFormat$$Type } from "java.text.NumberFormat"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Quaterniondc$$Type } from "org.joml.Quaterniondc"
import { $Vector3d, $Vector3d$$Type } from "org.joml.Vector3d"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $Quaternionfc$$Type } from "org.joml.Quaternionfc"
import { $Cloneable } from "java.lang.Cloneable"
import { $Matrix3x2fc$$Type } from "org.joml.Matrix3x2fc"
import { $Externalizable } from "java.io.Externalizable"
import { $Matrix3x2dc$$Type } from "org.joml.Matrix3x2dc"
import { $DoubleBuffer, $DoubleBuffer$$Type } from "java.nio.DoubleBuffer"
import { $AxisAngle4f$$Type } from "org.joml.AxisAngle4f"
import { $Vector4dc$$Type } from "org.joml.Vector4dc"
import { $AxisAngle4d$$Type } from "org.joml.AxisAngle4d"
import { $Matrix4x3fc$$Type } from "org.joml.Matrix4x3fc"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $Matrix4x3dc$$Type } from "org.joml.Matrix4x3dc"
import { $Vector3dc$$Type } from "org.joml.Vector3dc"
import { $Vector2dc$$Type } from "org.joml.Vector2dc"
import { $ObjectInput$$Type } from "java.io.ObjectInput"
import { $Matrix3d, $Matrix3d$$Type } from "org.joml.Matrix3d"
import { $Vector4d, $Vector4d$$Type } from "org.joml.Vector4d"

export class $Matrix4d implements $Externalizable, $Cloneable, $Matrix4dc {
constructor()
constructor(vector4d0: $Vector4d$$Type, vector4d1: $Vector4d$$Type, vector4d2: $Vector4d$$Type, vector4d3: $Vector4d$$Type)
constructor(doubleBuffer0: $DoubleBuffer$$Type)
constructor(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double, double9: double, double10: double, double11: double, double12: double, double13: double, double14: double, double15: double)
constructor(matrix3dc0: $Matrix3dc$$Type)
constructor(matrix4x3dc0: $Matrix4x3dc$$Type)
constructor(matrix4x3fc0: $Matrix4x3fc$$Type)
constructor(matrix4fc0: $Matrix4fc$$Type)
constructor(matrix4dc0: $Matrix4dc$$Type)

public "add"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "add"(matrix4dc0: $Matrix4dc$$Type): $Matrix4d
public "add4x3"(matrix4dc0: $Matrix4dc$$Type): $Matrix4d
public "add4x3"(matrix4fc0: $Matrix4fc$$Type): $Matrix4d
public "add4x3"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "add4x3"(matrix4fc0: $Matrix4fc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "affineSpan"(vector3d0: $Vector3d$$Type, vector3d1: $Vector3d$$Type, vector3d2: $Vector3d$$Type, vector3d3: $Vector3d$$Type): $Matrix4d
public "arcball"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4d
public "arcball"(double0: double, vector3dc1: $Vector3dc$$Type, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
public "arcball"(double0: double, vector3dc1: $Vector3dc$$Type, double2: double, double3: double): $Matrix4d
public "arcball"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4d6: $Matrix4d$$Type): $Matrix4d
public "assume"(int0: integer): $Matrix4d
public "billboardCylindrical"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3dc2: $Vector3dc$$Type): $Matrix4d
public "billboardSpherical"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type): $Matrix4d
public "billboardSpherical"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3dc2: $Vector3dc$$Type): $Matrix4d
public "clone"(): any
public "cofactor3x3"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "cofactor3x3"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "cofactor3x3"(): $Matrix4d
public "determinant"(): double
public "determinant3x3"(): double
public "determinantAffine"(): double
public "determineProperties"(): $Matrix4d
public "equals"(matrix4dc0: $Matrix4dc$$Type, double1: double): boolean
public "fma4x3"(matrix4dc0: $Matrix4dc$$Type, double1: double, matrix4d2: $Matrix4d$$Type): $Matrix4d
public "fma4x3"(matrix4dc0: $Matrix4dc$$Type, double1: double): $Matrix4d
public "frustum"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4d6: $Matrix4d$$Type): $Matrix4d
public "frustum"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean, matrix4d7: $Matrix4d$$Type): $Matrix4d
public "frustum"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4d
public "frustum"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean): $Matrix4d
public "frustumAabb"(vector3d0: $Vector3d$$Type, vector3d1: $Vector3d$$Type): $Matrix4d
public "frustumCorner"(int0: integer, vector3d1: $Vector3d$$Type): $Vector3d
public "frustumLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4d6: $Matrix4d$$Type): $Matrix4d
public "frustumLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean): $Matrix4d
public "frustumLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4d
public "frustumLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean, matrix4d7: $Matrix4d$$Type): $Matrix4d
public "frustumPlane"(int0: integer, vector4d1: $Vector4d$$Type): $Vector4d
public "frustumRayDir"(double0: double, double1: double, vector3d2: $Vector3d$$Type): $Vector3d
public "get"(double0s: double[], int1: integer): double[]
public "get"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "get"(double0s: double[]): double[]
public "get"(float0s: float[], int1: integer): float[]
public "get"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "get"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
public "get"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
public "get"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "get"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "get"(int0: integer, int1: integer): double
public "get"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "get"(float0s: float[]): float[]
public "get3x3"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "get4x3"(matrix4x3d0: $Matrix4x3d$$Type): $Matrix4x3d
public "get4x3Transposed"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
public "get4x3Transposed"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
public "get4x3Transposed"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "get4x3Transposed"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "getColumn"(int0: integer, vector4d1: $Vector4d$$Type): $Vector4d
public "getColumn"(int0: integer, vector3d1: $Vector3d$$Type): $Vector3d
public "getEulerAnglesXYZ"(vector3d0: $Vector3d$$Type): $Vector3d
public "getEulerAnglesZYX"(vector3d0: $Vector3d$$Type): $Vector3d
public "getFloats"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "getFloats"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "getNormalizedRotation"(quaternionf0: $Quaternionf$$Type): $Quaternionf
public "getNormalizedRotation"(quaterniond0: $Quaterniond$$Type): $Quaterniond
public "getRow"(int0: integer, vector3d1: $Vector3d$$Type): $Vector3d
public "getRow"(int0: integer, vector4d1: $Vector4d$$Type): $Vector4d
public "getRowColumn"(int0: integer, int1: integer): double
public "getScale"(vector3d0: $Vector3d$$Type): $Vector3d
public "getToAddress"(long0: long): $Matrix4dc
public "getTranslation"(vector3d0: $Vector3d$$Type): $Vector3d
public "getTransposed"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "getTransposed"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "getTransposed"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $FloatBuffer
public "getTransposed"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
public "getTransposed"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $DoubleBuffer
public "getTransposed"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "getTransposedFloats"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "getTransposedFloats"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuffer
public "getUnnormalizedRotation"(quaternionf0: $Quaternionf$$Type): $Quaternionf
public "getUnnormalizedRotation"(quaterniond0: $Quaterniond$$Type): $Quaterniond
public "identity"(): $Matrix4d
public "invert"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "invert"(): $Matrix4d
public "invertAffine"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "invertAffine"(): $Matrix4d
public "invertFrustum"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "invertFrustum"(): $Matrix4d
public "invertOrtho"(): $Matrix4d
public "invertOrtho"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "invertPerspective"(): $Matrix4d
public "invertPerspective"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "invertPerspectiveView"(matrix4x3dc0: $Matrix4x3dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "invertPerspectiveView"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "isAffine"(): boolean
public "isFinite"(): boolean
public "lerp"(matrix4dc0: $Matrix4dc$$Type, double1: double, matrix4d2: $Matrix4d$$Type): $Matrix4d
public "lerp"(matrix4dc0: $Matrix4dc$$Type, double1: double): $Matrix4d
public "lookAlong"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4d
public "lookAlong"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, matrix4d2: $Matrix4d$$Type): $Matrix4d
public "lookAlong"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4d6: $Matrix4d$$Type): $Matrix4d
public "lookAlong"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type): $Matrix4d
public "lookAt"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double): $Matrix4d
public "lookAt"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double, matrix4d9: $Matrix4d$$Type): $Matrix4d
public "lookAt"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3dc2: $Vector3dc$$Type): $Matrix4d
public "lookAt"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3dc2: $Vector3dc$$Type, matrix4d3: $Matrix4d$$Type): $Matrix4d
public "lookAtLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double): $Matrix4d
public "lookAtLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double, matrix4d9: $Matrix4d$$Type): $Matrix4d
public "lookAtLH"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3dc2: $Vector3dc$$Type): $Matrix4d
public "lookAtLH"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3dc2: $Vector3dc$$Type, matrix4d3: $Matrix4d$$Type): $Matrix4d
public "lookAtPerspective"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double, matrix4d9: $Matrix4d$$Type): $Matrix4d
public "lookAtPerspectiveLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double, matrix4d9: $Matrix4d$$Type): $Matrix4d
public "m00"(double0: double): $Matrix4d
public "m00"(): double
public "m01"(): double
public "m01"(double0: double): $Matrix4d
public "m02"(double0: double): $Matrix4d
public "m02"(): double
public "m03"(): double
public "m03"(double0: double): $Matrix4d
public "m10"(): double
public "m10"(double0: double): $Matrix4d
public "m11"(double0: double): $Matrix4d
public "m11"(): double
public "m12"(): double
public "m12"(double0: double): $Matrix4d
public "m13"(): double
public "m13"(double0: double): $Matrix4d
public "m20"(): double
public "m20"(double0: double): $Matrix4d
public "m21"(double0: double): $Matrix4d
public "m21"(): double
public "m22"(): double
public "m22"(double0: double): $Matrix4d
public "m23"(double0: double): $Matrix4d
public "m23"(): double
public "m30"(double0: double): $Matrix4d
public "m30"(): double
public "m31"(): double
public "m31"(double0: double): $Matrix4d
public "m32"(): double
public "m32"(double0: double): $Matrix4d
public "m33"(): double
public "m33"(double0: double): $Matrix4d
public "mapXZY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapXZY"(): $Matrix4d
public "mapXZnY"(): $Matrix4d
public "mapXZnY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapXnYnZ"(): $Matrix4d
public "mapXnYnZ"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapXnZY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapXnZY"(): $Matrix4d
public "mapXnZnY"(): $Matrix4d
public "mapXnZnY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapYXZ"(): $Matrix4d
public "mapYXZ"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapYXnZ"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapYXnZ"(): $Matrix4d
public "mapYZX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapYZX"(): $Matrix4d
public "mapYZnX"(): $Matrix4d
public "mapYZnX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapYnXZ"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapYnXZ"(): $Matrix4d
public "mapYnXnZ"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapYnXnZ"(): $Matrix4d
public "mapYnZX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapYnZX"(): $Matrix4d
public "mapYnZnX"(): $Matrix4d
public "mapYnZnX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapZXY"(): $Matrix4d
public "mapZXY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapZXnY"(): $Matrix4d
public "mapZXnY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapZYX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapZYX"(): $Matrix4d
public "mapZYnX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapZYnX"(): $Matrix4d
public "mapZnXY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapZnXY"(): $Matrix4d
public "mapZnXnY"(): $Matrix4d
public "mapZnXnY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapZnYX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapZnYX"(): $Matrix4d
public "mapZnYnX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapZnYnX"(): $Matrix4d
public "mapnXYnZ"(): $Matrix4d
public "mapnXYnZ"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapnXZY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapnXZY"(): $Matrix4d
public "mapnXZnY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapnXZnY"(): $Matrix4d
public "mapnXnYZ"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapnXnYZ"(): $Matrix4d
public "mapnXnYnZ"(): $Matrix4d
public "mapnXnYnZ"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapnXnZY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapnXnZY"(): $Matrix4d
public "mapnXnZnY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapnXnZnY"(): $Matrix4d
public "mapnYXZ"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapnYXZ"(): $Matrix4d
public "mapnYXnZ"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapnYXnZ"(): $Matrix4d
public "mapnYZX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapnYZX"(): $Matrix4d
public "mapnYZnX"(): $Matrix4d
public "mapnYZnX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapnYnXZ"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapnYnXZ"(): $Matrix4d
public "mapnYnXnZ"(): $Matrix4d
public "mapnYnXnZ"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapnYnZX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapnYnZX"(): $Matrix4d
public "mapnYnZnX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapnYnZnX"(): $Matrix4d
public "mapnZXY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapnZXY"(): $Matrix4d
public "mapnZXnY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapnZXnY"(): $Matrix4d
public "mapnZYX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapnZYX"(): $Matrix4d
public "mapnZYnX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapnZYnX"(): $Matrix4d
public "mapnZnXY"(): $Matrix4d
public "mapnZnXY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapnZnXnY"(): $Matrix4d
public "mapnZnXnY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapnZnYX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mapnZnYX"(): $Matrix4d
public "mapnZnYnX"(): $Matrix4d
public "mapnZnYnX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "mul"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "mul"(matrix4dc0: $Matrix4dc$$Type): $Matrix4d
public "mul"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double, double9: double, double10: double, double11: double, double12: double, double13: double, double14: double, double15: double, matrix4d16: $Matrix4d$$Type): $Matrix4d
public "mul"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double, double9: double, double10: double, double11: double, double12: double, double13: double, double14: double, double15: double): $Matrix4d
public "mul"(matrix3x2dc0: $Matrix3x2dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "mul"(matrix4x3dc0: $Matrix4x3dc$$Type): $Matrix4d
public "mul"(matrix4x3dc0: $Matrix4x3dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "mul"(matrix3x2fc0: $Matrix3x2fc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "mul"(matrix3x2fc0: $Matrix3x2fc$$Type): $Matrix4d
public "mul"(matrix4x3fc0: $Matrix4x3fc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "mul"(matrix4fc0: $Matrix4fc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "mul"(matrix4f0: $Matrix4f$$Type): $Matrix4d
public "mul"(matrix3x2dc0: $Matrix3x2dc$$Type): $Matrix4d
public "mul0"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "mul0"(matrix4dc0: $Matrix4dc$$Type): $Matrix4d
public "mul3x3"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double): $Matrix4d
public "mul3x3"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double, matrix4d9: $Matrix4d$$Type): $Matrix4d
public "mul4x3ComponentWise"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "mul4x3ComponentWise"(matrix4dc0: $Matrix4dc$$Type): $Matrix4d
public "mulAffine"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "mulAffine"(matrix4dc0: $Matrix4dc$$Type): $Matrix4d
public "mulAffineR"(matrix4dc0: $Matrix4dc$$Type): $Matrix4d
public "mulAffineR"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "mulComponentWise"(matrix4dc0: $Matrix4dc$$Type): $Matrix4d
public "mulComponentWise"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "mulLocal"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "mulLocal"(matrix4dc0: $Matrix4dc$$Type): $Matrix4d
public "mulLocalAffine"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "mulLocalAffine"(matrix4dc0: $Matrix4dc$$Type): $Matrix4d
public "mulOrthoAffine"(matrix4dc0: $Matrix4dc$$Type): $Matrix4d
public "mulOrthoAffine"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "mulPerspectiveAffine"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "mulPerspectiveAffine"(matrix4dc0: $Matrix4dc$$Type): $Matrix4d
public "mulPerspectiveAffine"(matrix4x3dc0: $Matrix4x3dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "mulTranslationAffine"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "negateX"(): $Matrix4d
public "negateX"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "negateY"(): $Matrix4d
public "negateY"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "negateZ"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "negateZ"(): $Matrix4d
public "normal"(): $Matrix4d
public "normal"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "normal"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "normalize3x3"(): $Matrix4d
public "normalize3x3"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "normalize3x3"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "normalizedPositiveX"(vector3d0: $Vector3d$$Type): $Vector3d
public "normalizedPositiveY"(vector3d0: $Vector3d$$Type): $Vector3d
public "normalizedPositiveZ"(vector3d0: $Vector3d$$Type): $Vector3d
public "obliqueZ"(double0: double, double1: double): $Matrix4d
public "obliqueZ"(double0: double, double1: double, matrix4d2: $Matrix4d$$Type): $Matrix4d
public "origin"(vector3d0: $Vector3d$$Type): $Vector3d
public "originAffine"(vector3d0: $Vector3d$$Type): $Vector3d
public "ortho"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean, matrix4d7: $Matrix4d$$Type): $Matrix4d
public "ortho"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4d6: $Matrix4d$$Type): $Matrix4d
public "ortho"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4d
public "ortho"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean): $Matrix4d
public "ortho2D"(double0: double, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
public "ortho2D"(double0: double, double1: double, double2: double, double3: double): $Matrix4d
public "ortho2DLH"(double0: double, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
public "ortho2DLH"(double0: double, double1: double, double2: double, double3: double): $Matrix4d
public "orthoCrop"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "orthoLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean, matrix4d7: $Matrix4d$$Type): $Matrix4d
public "orthoLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean): $Matrix4d
public "orthoLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4d
public "orthoLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4d6: $Matrix4d$$Type): $Matrix4d
public "orthoSymmetric"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean, matrix4d5: $Matrix4d$$Type): $Matrix4d
public "orthoSymmetric"(double0: double, double1: double, double2: double, double3: double): $Matrix4d
public "orthoSymmetric"(double0: double, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
public "orthoSymmetric"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Matrix4d
public "orthoSymmetricLH"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean, matrix4d5: $Matrix4d$$Type): $Matrix4d
public "orthoSymmetricLH"(double0: double, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
public "orthoSymmetricLH"(double0: double, double1: double, double2: double, double3: double): $Matrix4d
public "orthoSymmetricLH"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Matrix4d
public "perspective"(double0: double, double1: double, double2: double, double3: double): $Matrix4d
public "perspective"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Matrix4d
public "perspective"(double0: double, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
public "perspective"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean, matrix4d5: $Matrix4d$$Type): $Matrix4d
public "perspectiveFar"(): double
public "perspectiveFov"(): double
public "perspectiveFrustumSlice"(double0: double, double1: double, matrix4d2: $Matrix4d$$Type): $Matrix4d
public "perspectiveInvOrigin"(vector3d0: $Vector3d$$Type): $Vector3d
public "perspectiveLH"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean, matrix4d5: $Matrix4d$$Type): $Matrix4d
public "perspectiveLH"(double0: double, double1: double, double2: double, double3: double): $Matrix4d
public "perspectiveLH"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Matrix4d
public "perspectiveLH"(double0: double, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
public "perspectiveNear"(): double
public "perspectiveOffCenter"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4d6: $Matrix4d$$Type): $Matrix4d
public "perspectiveOffCenter"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean, matrix4d7: $Matrix4d$$Type): $Matrix4d
public "perspectiveOffCenter"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4d
public "perspectiveOffCenter"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean): $Matrix4d
public "perspectiveOffCenterFov"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean, matrix4d7: $Matrix4d$$Type): $Matrix4d
public "perspectiveOffCenterFov"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4d6: $Matrix4d$$Type): $Matrix4d
public "perspectiveOffCenterFov"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4d
public "perspectiveOffCenterFov"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean): $Matrix4d
public "perspectiveOffCenterFovLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4d6: $Matrix4d$$Type): $Matrix4d
public "perspectiveOffCenterFovLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4d
public "perspectiveOffCenterFovLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean): $Matrix4d
public "perspectiveOffCenterFovLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean, matrix4d7: $Matrix4d$$Type): $Matrix4d
public static "perspectiveOffCenterViewFromRectangle"(vector3d0: $Vector3d$$Type, vector3d1: $Vector3d$$Type, vector3d2: $Vector3d$$Type, vector3d3: $Vector3d$$Type, double4: double, boolean5: boolean, matrix4d6: $Matrix4d$$Type, matrix4d7: $Matrix4d$$Type): void
public "perspectiveOrigin"(vector3d0: $Vector3d$$Type): $Vector3d
public "perspectiveRect"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean, matrix4d5: $Matrix4d$$Type): $Matrix4d
public "perspectiveRect"(double0: double, double1: double, double2: double, double3: double): $Matrix4d
public "perspectiveRect"(double0: double, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
public "perspectiveRect"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Matrix4d
public "pick"(double0: double, double1: double, double2: double, double3: double, int4s: integer[]): $Matrix4d
public "pick"(double0: double, double1: double, double2: double, double3: double, int4s: integer[], matrix4d5: $Matrix4d$$Type): $Matrix4d
public "positiveX"(vector3d0: $Vector3d$$Type): $Vector3d
public "positiveY"(vector3d0: $Vector3d$$Type): $Vector3d
public "positiveZ"(vector3d0: $Vector3d$$Type): $Vector3d
public "project"(double0: double, double1: double, double2: double, int3s: integer[], vector4d4: $Vector4d$$Type): $Vector4d
public "project"(vector3dc0: $Vector3dc$$Type, int1s: integer[], vector3d2: $Vector3d$$Type): $Vector3d
public "project"(double0: double, double1: double, double2: double, int3s: integer[], vector3d4: $Vector3d$$Type): $Vector3d
public "project"(vector3dc0: $Vector3dc$$Type, int1s: integer[], vector4d2: $Vector4d$$Type): $Vector4d
public "projectedGridRange"(matrix4dc0: $Matrix4dc$$Type, double1: double, double2: double, matrix4d3: $Matrix4d$$Type): $Matrix4d
public "properties"(): integer
public "readExternal"(objectInput0: $ObjectInput$$Type): void
public "reflect"(quaterniondc0: $Quaterniondc$$Type, vector3dc1: $Vector3dc$$Type, matrix4d2: $Matrix4d$$Type): $Matrix4d
public "reflect"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, matrix4d2: $Matrix4d$$Type): $Matrix4d
public "reflect"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4d6: $Matrix4d$$Type): $Matrix4d
public "reflect"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4d
public "reflect"(double0: double, double1: double, double2: double, double3: double): $Matrix4d
public "reflect"(double0: double, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
public "reflect"(quaterniondc0: $Quaterniondc$$Type, vector3dc1: $Vector3dc$$Type): $Matrix4d
public "reflect"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type): $Matrix4d
public "reflection"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type): $Matrix4d
public "reflection"(quaterniondc0: $Quaterniondc$$Type, vector3dc1: $Vector3dc$$Type): $Matrix4d
public "reflection"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4d
public "reflection"(double0: double, double1: double, double2: double, double3: double): $Matrix4d
public "rotate"(axisAngle4d0: $AxisAngle4d$$Type): $Matrix4d
public "rotate"(axisAngle4f0: $AxisAngle4f$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "rotate"(quaterniondc0: $Quaterniondc$$Type): $Matrix4d
public "rotate"(axisAngle4f0: $AxisAngle4f$$Type): $Matrix4d
public "rotate"(axisAngle4d0: $AxisAngle4d$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "rotate"(double0: double, vector3dc1: $Vector3dc$$Type): $Matrix4d
public "rotate"(double0: double, vector3dc1: $Vector3dc$$Type, matrix4d2: $Matrix4d$$Type): $Matrix4d
public "rotate"(double0: double, vector3fc1: $Vector3fc$$Type): $Matrix4d
public "rotate"(double0: double, vector3fc1: $Vector3fc$$Type, matrix4d2: $Matrix4d$$Type): $Matrix4d
public "rotate"(quaternionfc0: $Quaternionfc$$Type): $Matrix4d
public "rotate"(double0: double, double1: double, double2: double, double3: double): $Matrix4d
public "rotate"(double0: double, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
public "rotate"(quaternionfc0: $Quaternionfc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "rotate"(quaterniondc0: $Quaterniondc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "rotateAffine"(quaterniondc0: $Quaterniondc$$Type): $Matrix4d
public "rotateAffine"(double0: double, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
public "rotateAffine"(double0: double, double1: double, double2: double, double3: double): $Matrix4d
public "rotateAffine"(quaternionfc0: $Quaternionfc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "rotateAffine"(quaterniondc0: $Quaterniondc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "rotateAffine"(quaternionfc0: $Quaternionfc$$Type): $Matrix4d
public "rotateAffineXYZ"(double0: double, double1: double, double2: double): $Matrix4d
public "rotateAffineXYZ"(double0: double, double1: double, double2: double, matrix4d3: $Matrix4d$$Type): $Matrix4d
public "rotateAffineYXZ"(double0: double, double1: double, double2: double): $Matrix4d
public "rotateAffineYXZ"(double0: double, double1: double, double2: double, matrix4d3: $Matrix4d$$Type): $Matrix4d
public "rotateAffineZYX"(double0: double, double1: double, double2: double, matrix4d3: $Matrix4d$$Type): $Matrix4d
public "rotateAffineZYX"(double0: double, double1: double, double2: double): $Matrix4d
public "rotateAround"(quaterniondc0: $Quaterniondc$$Type, double1: double, double2: double, double3: double): $Matrix4d
public "rotateAround"(quaterniondc0: $Quaterniondc$$Type, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
public "rotateAroundAffine"(quaterniondc0: $Quaterniondc$$Type, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
public "rotateAroundLocal"(quaterniondc0: $Quaterniondc$$Type, double1: double, double2: double, double3: double): $Matrix4d
public "rotateAroundLocal"(quaterniondc0: $Quaterniondc$$Type, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
public "rotateLocal"(quaternionfc0: $Quaternionfc$$Type): $Matrix4d
public "rotateLocal"(quaternionfc0: $Quaternionfc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "rotateLocal"(quaterniondc0: $Quaterniondc$$Type): $Matrix4d
public "rotateLocal"(double0: double, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
public "rotateLocal"(double0: double, double1: double, double2: double, double3: double): $Matrix4d
public "rotateLocal"(quaterniondc0: $Quaterniondc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "rotateLocalX"(double0: double): $Matrix4d
public "rotateLocalX"(double0: double, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "rotateLocalY"(double0: double, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "rotateLocalY"(double0: double): $Matrix4d
public "rotateLocalZ"(double0: double): $Matrix4d
public "rotateLocalZ"(double0: double, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "rotateTowards"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4d6: $Matrix4d$$Type): $Matrix4d
public "rotateTowards"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, matrix4d2: $Matrix4d$$Type): $Matrix4d
public "rotateTowards"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4d
public "rotateTowards"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type): $Matrix4d
public "rotateTowardsXY"(double0: double, double1: double): $Matrix4d
public "rotateTowardsXY"(double0: double, double1: double, matrix4d2: $Matrix4d$$Type): $Matrix4d
public "rotateTranslation"(quaternionfc0: $Quaternionfc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "rotateTranslation"(double0: double, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
public "rotateTranslation"(quaterniondc0: $Quaterniondc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "rotateX"(double0: double): $Matrix4d
public "rotateX"(double0: double, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "rotateXYZ"(double0: double, double1: double, double2: double, matrix4d3: $Matrix4d$$Type): $Matrix4d
public "rotateXYZ"(vector3d0: $Vector3d$$Type): $Matrix4d
public "rotateXYZ"(double0: double, double1: double, double2: double): $Matrix4d
public "rotateY"(double0: double, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "rotateY"(double0: double): $Matrix4d
public "rotateYXZ"(vector3d0: $Vector3d$$Type): $Matrix4d
public "rotateYXZ"(double0: double, double1: double, double2: double, matrix4d3: $Matrix4d$$Type): $Matrix4d
public "rotateYXZ"(double0: double, double1: double, double2: double): $Matrix4d
public "rotateZ"(double0: double): $Matrix4d
public "rotateZ"(double0: double, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "rotateZYX"(vector3d0: $Vector3d$$Type): $Matrix4d
public "rotateZYX"(double0: double, double1: double, double2: double): $Matrix4d
public "rotateZYX"(double0: double, double1: double, double2: double, matrix4d3: $Matrix4d$$Type): $Matrix4d
public "rotation"(double0: double, double1: double, double2: double, double3: double): $Matrix4d
public "rotation"(double0: double, vector3fc1: $Vector3fc$$Type): $Matrix4d
public "rotation"(double0: double, vector3dc1: $Vector3dc$$Type): $Matrix4d
public "rotation"(axisAngle4d0: $AxisAngle4d$$Type): $Matrix4d
public "rotation"(quaternionfc0: $Quaternionfc$$Type): $Matrix4d
public "rotation"(quaterniondc0: $Quaterniondc$$Type): $Matrix4d
public "rotation"(axisAngle4f0: $AxisAngle4f$$Type): $Matrix4d
public "rotationAround"(quaterniondc0: $Quaterniondc$$Type, double1: double, double2: double, double3: double): $Matrix4d
public "rotationTowards"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type): $Matrix4d
public "rotationTowards"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4d
public "rotationTowardsXY"(double0: double, double1: double): $Matrix4d
public "rotationX"(double0: double): $Matrix4d
public "rotationXYZ"(double0: double, double1: double, double2: double): $Matrix4d
public "rotationY"(double0: double): $Matrix4d
public "rotationYXZ"(double0: double, double1: double, double2: double): $Matrix4d
public "rotationZ"(double0: double): $Matrix4d
public "rotationZYX"(double0: double, double1: double, double2: double): $Matrix4d
public "scale"(double0: double, double1: double, double2: double): $Matrix4d
public "scale"(double0: double, double1: double, double2: double, matrix4d3: $Matrix4d$$Type): $Matrix4d
public "scale"(vector3dc0: $Vector3dc$$Type): $Matrix4d
public "scale"(double0: double): $Matrix4d
public "scale"(double0: double, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "scale"(vector3dc0: $Vector3dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "scaleAround"(double0: double, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
public "scaleAround"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4d6: $Matrix4d$$Type): $Matrix4d
public "scaleAround"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4d
public "scaleAround"(double0: double, double1: double, double2: double, double3: double): $Matrix4d
public "scaleAroundLocal"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, matrix4d6: $Matrix4d$$Type): $Matrix4d
public "scaleAroundLocal"(double0: double, double1: double, double2: double, double3: double, matrix4d4: $Matrix4d$$Type): $Matrix4d
public "scaleAroundLocal"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4d
public "scaleAroundLocal"(double0: double, double1: double, double2: double, double3: double): $Matrix4d
public "scaleLocal"(double0: double, double1: double, double2: double): $Matrix4d
public "scaleLocal"(double0: double): $Matrix4d
public "scaleLocal"(double0: double, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "scaleLocal"(double0: double, double1: double, double2: double, matrix4d3: $Matrix4d$$Type): $Matrix4d
public "scaleXY"(double0: double, double1: double): $Matrix4d
public "scaleXY"(double0: double, double1: double, matrix4d2: $Matrix4d$$Type): $Matrix4d
public "scaling"(vector3dc0: $Vector3dc$$Type): $Matrix4d
public "scaling"(double0: double): $Matrix4d
public "scaling"(double0: double, double1: double, double2: double): $Matrix4d
public "set"(axisAngle4f0: $AxisAngle4f$$Type): $Matrix4d
public "set"(axisAngle4d0: $AxisAngle4d$$Type): $Matrix4d
public "set"(quaternionfc0: $Quaternionfc$$Type): $Matrix4d
public "set"(matrix4dc0: $Matrix4dc$$Type): $Matrix4d
public "set"(matrix4fc0: $Matrix4fc$$Type): $Matrix4d
public "set"(matrix4x3dc0: $Matrix4x3dc$$Type): $Matrix4d
public "set"(matrix4x3fc0: $Matrix4x3fc$$Type): $Matrix4d
public "set"(matrix3dc0: $Matrix3dc$$Type): $Matrix4d
public "set"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $Matrix4d
public "set"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $Matrix4d
public "set"(byteBuffer0: $ByteBuffer$$Type): $Matrix4d
public "set"(floatBuffer0: $FloatBuffer$$Type): $Matrix4d
public "set"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $Matrix4d
public "set"(vector4d0: $Vector4d$$Type, vector4d1: $Vector4d$$Type, vector4d2: $Vector4d$$Type, vector4d3: $Vector4d$$Type): $Matrix4d
public "set"(int0: integer, int1: integer, double2: double): $Matrix4d
public "set"(double0s: double[]): $Matrix4d
public "set"(double0s: double[], int1: integer): $Matrix4d
public "set"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double, double9: double, double10: double, double11: double, double12: double, double13: double, double14: double, double15: double): $Matrix4d
public "set"(quaterniondc0: $Quaterniondc$$Type): $Matrix4d
public "set"(doubleBuffer0: $DoubleBuffer$$Type): $Matrix4d
public "set"(float0s: float[]): $Matrix4d
public "set"(float0s: float[], int1: integer): $Matrix4d
public "set3x3"(matrix3dc0: $Matrix3dc$$Type): $Matrix4d
public "set3x3"(matrix4dc0: $Matrix4dc$$Type): $Matrix4d
public "set4x3"(matrix4x3fc0: $Matrix4x3fc$$Type): $Matrix4d
public "set4x3"(matrix4x3dc0: $Matrix4x3dc$$Type): $Matrix4d
public "set4x3"(matrix4dc0: $Matrix4dc$$Type): $Matrix4d
public "setColumn"(int0: integer, vector4dc1: $Vector4dc$$Type): $Matrix4d
public "setFloats"(byteBuffer0: $ByteBuffer$$Type): $Matrix4d
public "setFloats"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $Matrix4d
public "setFromAddress"(long0: long): $Matrix4d
public "setFromIntrinsic"(double0: double, double1: double, double2: double, double3: double, double4: double, int5: integer, int6: integer, double7: double, double8: double): $Matrix4d
public "setFrustum"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4d
public "setFrustum"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean): $Matrix4d
public "setFrustumLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean): $Matrix4d
public "setFrustumLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4d
public "setLookAlong"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4d
public "setLookAlong"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type): $Matrix4d
public "setLookAt"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double): $Matrix4d
public "setLookAt"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3dc2: $Vector3dc$$Type): $Matrix4d
public "setLookAtLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double): $Matrix4d
public "setLookAtLH"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3dc2: $Vector3dc$$Type): $Matrix4d
public "setOrtho"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean): $Matrix4d
public "setOrtho"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4d
public "setOrtho2D"(double0: double, double1: double, double2: double, double3: double): $Matrix4d
public "setOrtho2DLH"(double0: double, double1: double, double2: double, double3: double): $Matrix4d
public "setOrthoLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4d
public "setOrthoLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean): $Matrix4d
public "setOrthoSymmetric"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Matrix4d
public "setOrthoSymmetric"(double0: double, double1: double, double2: double, double3: double): $Matrix4d
public "setOrthoSymmetricLH"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Matrix4d
public "setOrthoSymmetricLH"(double0: double, double1: double, double2: double, double3: double): $Matrix4d
public "setPerspective"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Matrix4d
public "setPerspective"(double0: double, double1: double, double2: double, double3: double): $Matrix4d
public "setPerspectiveLH"(double0: double, double1: double, double2: double, double3: double): $Matrix4d
public "setPerspectiveLH"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Matrix4d
public "setPerspectiveOffCenter"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean): $Matrix4d
public "setPerspectiveOffCenter"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4d
public "setPerspectiveOffCenterFov"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4d
public "setPerspectiveOffCenterFov"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean): $Matrix4d
public "setPerspectiveOffCenterFovLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, boolean6: boolean): $Matrix4d
public "setPerspectiveOffCenterFovLH"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $Matrix4d
public "setPerspectiveRect"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Matrix4d
public "setPerspectiveRect"(double0: double, double1: double, double2: double, double3: double): $Matrix4d
public "setRotationXYZ"(double0: double, double1: double, double2: double): $Matrix4d
public "setRotationYXZ"(double0: double, double1: double, double2: double): $Matrix4d
public "setRotationZYX"(double0: double, double1: double, double2: double): $Matrix4d
public "setRow"(int0: integer, vector4dc1: $Vector4dc$$Type): $Matrix4d
public "setRowColumn"(int0: integer, int1: integer, double2: double): $Matrix4d
public "setTranslation"(vector3dc0: $Vector3dc$$Type): $Matrix4d
public "setTranslation"(double0: double, double1: double, double2: double): $Matrix4d
public "setTransposed"(matrix4dc0: $Matrix4dc$$Type): $Matrix4d
public "shadow"(vector4d0: $Vector4d$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "shadow"(double0: double, double1: double, double2: double, double3: double, matrix4dc4: $Matrix4dc$$Type, matrix4d5: $Matrix4d$$Type): $Matrix4d
public "shadow"(double0: double, double1: double, double2: double, double3: double, matrix4dc4: $Matrix4dc$$Type): $Matrix4d
public "shadow"(vector4dc0: $Vector4dc$$Type, matrix4dc1: $Matrix4dc$$Type, matrix4d2: $Matrix4d$$Type): $Matrix4d
public "shadow"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, matrix4d8: $Matrix4d$$Type): $Matrix4d
public "shadow"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double): $Matrix4d
public "shadow"(vector4dc0: $Vector4dc$$Type, double1: double, double2: double, double3: double, double4: double, matrix4d5: $Matrix4d$$Type): $Matrix4d
public "shadow"(vector4dc0: $Vector4dc$$Type, double1: double, double2: double, double3: double, double4: double): $Matrix4d
public "sub"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "sub"(matrix4dc0: $Matrix4dc$$Type): $Matrix4d
public "sub4x3"(matrix4dc0: $Matrix4dc$$Type): $Matrix4d
public "sub4x3"(matrix4dc0: $Matrix4dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "swap"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "testAab"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): boolean
public "testPoint"(double0: double, double1: double, double2: double): boolean
public "testSphere"(double0: double, double1: double, double2: double, double3: double): boolean
public "tile"(int0: integer, int1: integer, int2: integer, int3: integer, matrix4d4: $Matrix4d$$Type): $Matrix4d
public "tile"(int0: integer, int1: integer, int2: integer, int3: integer): $Matrix4d
public "toString"(numberFormat0: $NumberFormat$$Type): string
public "transform"(vector4d0: $Vector4d$$Type): $Vector4d
public "transform"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "transform"(double0: double, double1: double, double2: double, double3: double, vector4d4: $Vector4d$$Type): $Vector4d
public "transformAab"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3d2: $Vector3d$$Type, vector3d3: $Vector3d$$Type): $Matrix4d
public "transformAab"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, vector3d6: $Vector3d$$Type, vector3d7: $Vector3d$$Type): $Matrix4d
public "transformAffine"(double0: double, double1: double, double2: double, double3: double, vector4d4: $Vector4d$$Type): $Vector4d
public "transformAffine"(vector4d0: $Vector4d$$Type): $Vector4d
public "transformAffine"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "transformDirection"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
public "transformDirection"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "transformDirection"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "transformDirection"(vector3f0: $Vector3f$$Type): $Vector3f
public "transformDirection"(double0: double, double1: double, double2: double, vector3f3: $Vector3f$$Type): $Vector3f
public "transformDirection"(vector3d0: $Vector3d$$Type): $Vector3d
public "transformPosition"(vector3d0: $Vector3d$$Type): $Vector3d
public "transformPosition"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "transformPosition"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
public "transformProject"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "transformProject"(double0: double, double1: double, double2: double, double3: double, vector4d4: $Vector4d$$Type): $Vector4d
public "transformProject"(double0: double, double1: double, double2: double, double3: double, vector3d4: $Vector3d$$Type): $Vector3d
public "transformProject"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "transformProject"(vector4dc0: $Vector4dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "transformProject"(vector3d0: $Vector3d$$Type): $Vector3d
public "transformProject"(double0: double, double1: double, double2: double, vector3d3: $Vector3d$$Type): $Vector3d
public "transformProject"(vector4d0: $Vector4d$$Type): $Vector4d
public "transformTranspose"(double0: double, double1: double, double2: double, double3: double, vector4d4: $Vector4d$$Type): $Vector4d
public "transformTranspose"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "transformTranspose"(vector4d0: $Vector4d$$Type): $Vector4d
public "translate"(double0: double, double1: double, double2: double, matrix4d3: $Matrix4d$$Type): $Matrix4d
public "translate"(double0: double, double1: double, double2: double): $Matrix4d
public "translate"(vector3fc0: $Vector3fc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "translate"(vector3fc0: $Vector3fc$$Type): $Matrix4d
public "translate"(vector3dc0: $Vector3dc$$Type): $Matrix4d
public "translate"(vector3dc0: $Vector3dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "translateLocal"(vector3dc0: $Vector3dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "translateLocal"(vector3dc0: $Vector3dc$$Type): $Matrix4d
public "translateLocal"(double0: double, double1: double, double2: double, matrix4d3: $Matrix4d$$Type): $Matrix4d
public "translateLocal"(double0: double, double1: double, double2: double): $Matrix4d
public "translateLocal"(vector3fc0: $Vector3fc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "translateLocal"(vector3fc0: $Vector3fc$$Type): $Matrix4d
public "translation"(vector3dc0: $Vector3dc$$Type): $Matrix4d
public "translation"(vector3fc0: $Vector3fc$$Type): $Matrix4d
public "translation"(double0: double, double1: double, double2: double): $Matrix4d
public "translationRotate"(vector3dc0: $Vector3dc$$Type, quaterniondc1: $Quaterniondc$$Type): $Matrix4d
public "translationRotate"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double): $Matrix4d
public "translationRotate"(double0: double, double1: double, double2: double, quaterniondc3: $Quaterniondc$$Type): $Matrix4d
public "translationRotateInvert"(vector3fc0: $Vector3fc$$Type, quaternionfc1: $Quaternionfc$$Type): $Matrix4d
public "translationRotateInvert"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double): $Matrix4d
public "translationRotateScale"(vector3dc0: $Vector3dc$$Type, quaterniondc1: $Quaterniondc$$Type, vector3dc2: $Vector3dc$$Type): $Matrix4d
public "translationRotateScale"(vector3fc0: $Vector3fc$$Type, quaternionfc1: $Quaternionfc$$Type, vector3fc2: $Vector3fc$$Type): $Matrix4d
public "translationRotateScale"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double, double9: double): $Matrix4d
public "translationRotateScale"(vector3fc0: $Vector3fc$$Type, quaternionfc1: $Quaternionfc$$Type, double2: double): $Matrix4d
public "translationRotateScale"(vector3dc0: $Vector3dc$$Type, quaterniondc1: $Quaterniondc$$Type, double2: double): $Matrix4d
public "translationRotateScale"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double): $Matrix4d
public "translationRotateScaleInvert"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double, double9: double): $Matrix4d
public "translationRotateScaleInvert"(vector3fc0: $Vector3fc$$Type, quaternionfc1: $Quaternionfc$$Type, double2: double): $Matrix4d
public "translationRotateScaleInvert"(vector3dc0: $Vector3dc$$Type, quaterniondc1: $Quaterniondc$$Type, vector3dc2: $Vector3dc$$Type): $Matrix4d
public "translationRotateScaleInvert"(vector3fc0: $Vector3fc$$Type, quaternionfc1: $Quaternionfc$$Type, vector3fc2: $Vector3fc$$Type): $Matrix4d
public "translationRotateScaleInvert"(vector3dc0: $Vector3dc$$Type, quaterniondc1: $Quaterniondc$$Type, double2: double): $Matrix4d
public "translationRotateScaleMulAffine"(vector3fc0: $Vector3fc$$Type, quaterniondc1: $Quaterniondc$$Type, vector3fc2: $Vector3fc$$Type, matrix4d3: $Matrix4d$$Type): $Matrix4d
public "translationRotateScaleMulAffine"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double, double9: double, matrix4d10: $Matrix4d$$Type): $Matrix4d
public "translationRotateTowards"(vector3dc0: $Vector3dc$$Type, vector3dc1: $Vector3dc$$Type, vector3dc2: $Vector3dc$$Type): $Matrix4d
public "translationRotateTowards"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double): $Matrix4d
public "transpose"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "transpose"(): $Matrix4d
public "transpose3x3"(): $Matrix4d
public "transpose3x3"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "transpose3x3"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "trapezoidCrop"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double): $Matrix4d
public "unproject"(double0: double, double1: double, double2: double, int3s: integer[], vector3d4: $Vector3d$$Type): $Vector3d
public "unproject"(vector3dc0: $Vector3dc$$Type, int1s: integer[], vector4d2: $Vector4d$$Type): $Vector4d
public "unproject"(double0: double, double1: double, double2: double, int3s: integer[], vector4d4: $Vector4d$$Type): $Vector4d
public "unproject"(vector3dc0: $Vector3dc$$Type, int1s: integer[], vector3d2: $Vector3d$$Type): $Vector3d
public "unprojectInv"(double0: double, double1: double, double2: double, int3s: integer[], vector4d4: $Vector4d$$Type): $Vector4d
public "unprojectInv"(vector3dc0: $Vector3dc$$Type, int1s: integer[], vector4d2: $Vector4d$$Type): $Vector4d
public "unprojectInv"(vector3dc0: $Vector3dc$$Type, int1s: integer[], vector3d2: $Vector3d$$Type): $Vector3d
public "unprojectInv"(double0: double, double1: double, double2: double, int3s: integer[], vector3d4: $Vector3d$$Type): $Vector3d
public "unprojectInvRay"(double0: double, double1: double, int2s: integer[], vector3d3: $Vector3d$$Type, vector3d4: $Vector3d$$Type): $Matrix4d
public "unprojectInvRay"(vector2dc0: $Vector2dc$$Type, int1s: integer[], vector3d2: $Vector3d$$Type, vector3d3: $Vector3d$$Type): $Matrix4d
public "unprojectRay"(double0: double, double1: double, int2s: integer[], vector3d3: $Vector3d$$Type, vector3d4: $Vector3d$$Type): $Matrix4d
public "unprojectRay"(vector2dc0: $Vector2dc$$Type, int1s: integer[], vector3d2: $Vector3d$$Type, vector3d3: $Vector3d$$Type): $Matrix4d
public "withLookAtUp"(vector3dc0: $Vector3dc$$Type): $Matrix4d
public "withLookAtUp"(vector3dc0: $Vector3dc$$Type, matrix4d1: $Matrix4d$$Type): $Matrix4d
public "withLookAtUp"(double0: double, double1: double, double2: double): $Matrix4d
public "withLookAtUp"(double0: double, double1: double, double2: double, matrix4d3: $Matrix4d$$Type): $Matrix4d
public "writeExternal"(objectOutput0: $ObjectOutput$$Type): void
public "zero"(): $Matrix4d
get "affine"(): boolean
get "finite"(): boolean
set "3x3"(value: $Matrix3dc$$Type)
set "3x3"(value: $Matrix4dc$$Type)
set "4x3"(value: $Matrix4x3fc$$Type)
set "4x3"(value: $Matrix4x3dc$$Type)
set "4x3"(value: $Matrix4dc$$Type)
set "floats"(value: $ByteBuffer$$Type)
set "fromAddress"(value: long)
set "transposed"(value: $Matrix4dc$$Type)
}
}

declare module "org.joml.AxisAngle4f" {
import { $Cloneable } from "java.lang.Cloneable"
import { $Externalizable } from "java.io.Externalizable"
import { $Quaternionf, $Quaternionf$$Type } from "org.joml.Quaternionf"
import { $ObjectOutput$$Type } from "java.io.ObjectOutput"
import { $Quaterniond, $Quaterniond$$Type } from "org.joml.Quaterniond"
import { $Matrix4dc$$Type } from "org.joml.Matrix4dc"
import { $Matrix3dc$$Type } from "org.joml.Matrix3dc"
import { $Matrix4fc$$Type } from "org.joml.Matrix4fc"
import { $AxisAngle4d, $AxisAngle4d$$Type } from "org.joml.AxisAngle4d"
import { $NumberFormat$$Type } from "java.text.NumberFormat"
import { $Matrix4x3fc$$Type } from "org.joml.Matrix4x3fc"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $Matrix3fc$$Type } from "org.joml.Matrix3fc"
import { $Vector4fc$$Type } from "org.joml.Vector4fc"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Quaterniondc$$Type } from "org.joml.Quaterniondc"
import { $Matrix3f, $Matrix3f$$Type } from "org.joml.Matrix3f"
import { $ObjectInput$$Type } from "java.io.ObjectInput"
import { $Vector4f, $Vector4f$$Type } from "org.joml.Vector4f"
import { $Matrix3d, $Matrix3d$$Type } from "org.joml.Matrix3d"
import { $Matrix4f, $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $Quaternionfc$$Type } from "org.joml.Quaternionfc"
import { $Matrix4d, $Matrix4d$$Type } from "org.joml.Matrix4d"

export class $AxisAngle4f implements $Externalizable, $Cloneable {
constructor(float0: float, vector3fc1: $Vector3fc$$Type)
constructor()
constructor(axisAngle4f0: $AxisAngle4f$$Type)
constructor(quaternionfc0: $Quaternionfc$$Type)
constructor(float0: float, float1: float, float2: float, float3: float)

public "clone"(): any
public "get"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "get"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "get"(quaterniond0: $Quaterniond$$Type): $Quaterniond
public "get"(quaternionf0: $Quaternionf$$Type): $Quaternionf
public "get"(axisAngle4f0: $AxisAngle4f$$Type): $AxisAngle4f
public "get"(axisAngle4d0: $AxisAngle4d$$Type): $AxisAngle4d
public "get"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "get"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "normalize"(): $AxisAngle4f
public "readExternal"(objectInput0: $ObjectInput$$Type): void
public "rotate"(float0: float): $AxisAngle4f
public "set"(matrix4dc0: $Matrix4dc$$Type): $AxisAngle4f
public "set"(axisAngle4f0: $AxisAngle4f$$Type): $AxisAngle4f
public "set"(quaterniondc0: $Quaterniondc$$Type): $AxisAngle4f
public "set"(matrix3fc0: $Matrix3fc$$Type): $AxisAngle4f
public "set"(matrix3dc0: $Matrix3dc$$Type): $AxisAngle4f
public "set"(matrix4fc0: $Matrix4fc$$Type): $AxisAngle4f
public "set"(matrix4x3fc0: $Matrix4x3fc$$Type): $AxisAngle4f
public "set"(axisAngle4d0: $AxisAngle4d$$Type): $AxisAngle4f
public "set"(float0: float, float1: float, float2: float, float3: float): $AxisAngle4f
public "set"(float0: float, vector3fc1: $Vector3fc$$Type): $AxisAngle4f
public "set"(quaternionfc0: $Quaternionfc$$Type): $AxisAngle4f
public "toString"(numberFormat0: $NumberFormat$$Type): string
public "transform"(vector3f0: $Vector3f$$Type): $Vector3f
public "transform"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "transform"(vector4f0: $Vector4f$$Type): $Vector4f
public "transform"(vector4fc0: $Vector4fc$$Type, vector4f1: $Vector4f$$Type): $Vector4f
public "writeExternal"(objectOutput0: $ObjectOutput$$Type): void
get "angle"(): float
set "angle"(value: float)
get "x"(): float
set "x"(value: float)
get "y"(): float
set "y"(value: float)
get "z"(): float
set "z"(value: float)
}
}

declare module "org.joml.AxisAngle4d" {
import { $Quaternionf, $Quaternionf$$Type } from "org.joml.Quaternionf"
import { $ObjectOutput$$Type } from "java.io.ObjectOutput"
import { $Quaterniond, $Quaterniond$$Type } from "org.joml.Quaterniond"
import { $Matrix4dc$$Type } from "org.joml.Matrix4dc"
import { $Matrix3dc$$Type } from "org.joml.Matrix3dc"
import { $Matrix4fc$$Type } from "org.joml.Matrix4fc"
import { $NumberFormat$$Type } from "java.text.NumberFormat"
import { $Matrix3fc$$Type } from "org.joml.Matrix3fc"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Quaterniondc$$Type } from "org.joml.Quaterniondc"
import { $Vector3d, $Vector3d$$Type } from "org.joml.Vector3d"
import { $Matrix4f, $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $Quaternionfc$$Type } from "org.joml.Quaternionfc"
import { $Matrix4d, $Matrix4d$$Type } from "org.joml.Matrix4d"
import { $Cloneable } from "java.lang.Cloneable"
import { $Externalizable } from "java.io.Externalizable"
import { $AxisAngle4f, $AxisAngle4f$$Type } from "org.joml.AxisAngle4f"
import { $Vector4dc$$Type } from "org.joml.Vector4dc"
import { $Matrix4x3fc$$Type } from "org.joml.Matrix4x3fc"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $Vector3dc$$Type } from "org.joml.Vector3dc"
import { $Matrix3f, $Matrix3f$$Type } from "org.joml.Matrix3f"
import { $ObjectInput$$Type } from "java.io.ObjectInput"
import { $Matrix3d, $Matrix3d$$Type } from "org.joml.Matrix3d"
import { $Vector4d, $Vector4d$$Type } from "org.joml.Vector4d"

export class $AxisAngle4d implements $Externalizable, $Cloneable {
constructor()
constructor(double0: double, vector3f1: $Vector3f$$Type)
constructor(double0: double, vector3dc1: $Vector3dc$$Type)
constructor(axisAngle4d0: $AxisAngle4d$$Type)
constructor(axisAngle4f0: $AxisAngle4f$$Type)
constructor(quaternionfc0: $Quaternionfc$$Type)
constructor(quaterniondc0: $Quaterniondc$$Type)
constructor(double0: double, double1: double, double2: double, double3: double)

public "clone"(): any
public "get"(matrix4f0: $Matrix4f$$Type): $Matrix4f
public "get"(matrix3f0: $Matrix3f$$Type): $Matrix3f
public "get"(quaterniond0: $Quaterniond$$Type): $Quaterniond
public "get"(quaternionf0: $Quaternionf$$Type): $Quaternionf
public "get"(axisAngle4f0: $AxisAngle4f$$Type): $AxisAngle4f
public "get"(axisAngle4d0: $AxisAngle4d$$Type): $AxisAngle4d
public "get"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "get"(matrix4d0: $Matrix4d$$Type): $Matrix4d
public "normalize"(): $AxisAngle4d
public "readExternal"(objectInput0: $ObjectInput$$Type): void
public "rotate"(double0: double): $AxisAngle4d
public "set"(axisAngle4d0: $AxisAngle4d$$Type): $AxisAngle4d
public "set"(matrix4dc0: $Matrix4dc$$Type): $AxisAngle4d
public "set"(matrix4x3fc0: $Matrix4x3fc$$Type): $AxisAngle4d
public "set"(quaterniondc0: $Quaterniondc$$Type): $AxisAngle4d
public "set"(matrix3fc0: $Matrix3fc$$Type): $AxisAngle4d
public "set"(matrix3dc0: $Matrix3dc$$Type): $AxisAngle4d
public "set"(matrix4fc0: $Matrix4fc$$Type): $AxisAngle4d
public "set"(quaternionfc0: $Quaternionfc$$Type): $AxisAngle4d
public "set"(axisAngle4f0: $AxisAngle4f$$Type): $AxisAngle4d
public "set"(double0: double, double1: double, double2: double, double3: double): $AxisAngle4d
public "set"(double0: double, vector3dc1: $Vector3dc$$Type): $AxisAngle4d
public "set"(double0: double, vector3f1: $Vector3f$$Type): $AxisAngle4d
public "toString"(numberFormat0: $NumberFormat$$Type): string
public "transform"(vector3fc0: $Vector3fc$$Type, vector3f1: $Vector3f$$Type): $Vector3f
public "transform"(vector3f0: $Vector3f$$Type): $Vector3f
public "transform"(vector3dc0: $Vector3dc$$Type, vector3d1: $Vector3d$$Type): $Vector3d
public "transform"(vector3d0: $Vector3d$$Type): $Vector3d
public "transform"(vector4d0: $Vector4d$$Type): $Vector4d
public "transform"(vector4dc0: $Vector4dc$$Type, vector4d1: $Vector4d$$Type): $Vector4d
public "writeExternal"(objectOutput0: $ObjectOutput$$Type): void
get "angle"(): double
set "angle"(value: double)
get "x"(): double
set "x"(value: double)
get "y"(): double
set "y"(value: double)
get "z"(): double
set "z"(value: double)
}
}

