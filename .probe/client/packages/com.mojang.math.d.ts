declare module "com.mojang.math.Transformation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Transformation$$Type = ($Transformation);
}

declare module "com.mojang.math.OctahedralGroup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $OctahedralGroup$$Type = ($OctahedralGroup | ("identity" | "rot_180_face_xy" | "rot_180_face_xz" | "rot_180_face_yz" | "rot_120_nnn" | "rot_120_nnp" | "rot_120_npn" | "rot_120_npp" | "rot_120_pnn" | "rot_120_pnp" | "rot_120_ppn" | "rot_120_ppp" | "rot_180_edge_xy_neg" | "rot_180_edge_xy_pos" | "rot_180_edge_xz_neg" | "rot_180_edge_xz_pos" | "rot_180_edge_yz_neg" | "rot_180_edge_yz_pos" | "rot_90_x_neg" | "rot_90_x_pos" | "rot_90_y_neg" | "rot_90_y_pos" | "rot_90_z_neg" | "rot_90_z_pos" | "inversion" | "invert_x" | "invert_y" | "invert_z" | "rot_60_ref_nnn" | "rot_60_ref_nnp" | "rot_60_ref_npn" | "rot_60_ref_npp" | "rot_60_ref_pnn" | "rot_60_ref_pnp" | "rot_60_ref_ppn" | "rot_60_ref_ppp" | "swap_xy" | "swap_yz" | "swap_xz" | "swap_neg_xy" | "swap_neg_yz" | "swap_neg_xz" | "rot_90_ref_x_neg" | "rot_90_ref_x_pos" | "rot_90_ref_y_neg" | "rot_90_ref_y_pos" | "rot_90_ref_z_neg" | "rot_90_ref_z_pos"));
}

declare module "com.mojang.math.Axis" {
import { $Quaternionf$$Type } from "org.joml.Quaternionf"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Axis$$Type = ($Axis | ((arg0: float) => $Quaternionf$$Type));
}

