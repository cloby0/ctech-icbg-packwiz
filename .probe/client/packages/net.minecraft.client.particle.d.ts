declare module "net.minecraft.client.particle.ParticleProvider" {
import { $ParticleOptions, $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"
import { $ClientLevel } from "net.minecraft.client.multiplayer.ClientLevel"
import { $Particle$$Type } from "net.minecraft.client.particle.Particle"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ParticleProvider$$Type<T extends $ParticleOptions = $ParticleOptions> = ($ParticleProvider<T> | ((arg0: T, arg1: $ClientLevel, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double) => $Particle$$Type));
}

declare module "net.minecraft.client.particle.TextureSheetParticle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TextureSheetParticle$$Type = ($TextureSheetParticle);
}

declare module "net.minecraft.client.particle.SpriteSet" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SpriteSet$$Type = ($SpriteSet);
}

declare module "net.minecraft.client.particle.ParticleEngine" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ParticleEngine$$Type = ($ParticleEngine);
}

declare module "net.minecraft.client.particle.ParticleProvider$Sprite" {
import { $ParticleOptions, $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"
import { $ClientLevel } from "net.minecraft.client.multiplayer.ClientLevel"
import { $TextureSheetParticle$$Type } from "net.minecraft.client.particle.TextureSheetParticle"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ParticleProvider$Sprite$$Type<T extends $ParticleOptions = $ParticleOptions> = ($ParticleProvider$Sprite<T> | ((arg0: T, arg1: $ClientLevel, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double) => $TextureSheetParticle$$Type));
}

declare module "net.minecraft.client.particle.ParticleEngine$SpriteParticleRegistration" {
import { $ParticleProvider$$Type } from "net.minecraft.client.particle.ParticleProvider"
import { $SpriteSet } from "net.minecraft.client.particle.SpriteSet"
import { $ParticleOptions, $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ParticleEngine$SpriteParticleRegistration$$Type<T extends $ParticleOptions = $ParticleOptions> = ($ParticleEngine$SpriteParticleRegistration<T> | ((arg0: $SpriteSet) => $ParticleProvider$$Type<T>));
}

declare module "net.minecraft.client.particle.SingleQuadParticle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SingleQuadParticle$$Type = ($SingleQuadParticle);
}

declare module "net.minecraft.client.particle.ParticleRenderType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ParticleRenderType$$Type = ($ParticleRenderType);
}

declare module "net.minecraft.client.particle.Particle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Particle$$Type = ($Particle);
}

