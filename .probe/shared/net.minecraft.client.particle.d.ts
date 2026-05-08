declare module "net.minecraft.client.particle.ParticleProvider" {
import { $ParticleOptions, $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"
import { $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"
import { $Particle } from "net.minecraft.client.particle.Particle"

export interface $ParticleProvider<T extends $ParticleOptions = $ParticleOptions> {
"createParticle"(t0: T, clientLevel1: $ClientLevel$$Type, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double): $Particle
}

export namespace $ParticleProvider {
const probejs$$marker: never
}
export abstract class $ParticleProvider$$Static<T extends $ParticleOptions = $ParticleOptions> implements $ParticleProvider<T> {
}
}

declare module "net.minecraft.client.particle.TextureSheetParticle" {
import { $SingleQuadParticle } from "net.minecraft.client.particle.SingleQuadParticle"
import { $SpriteSet$$Type } from "net.minecraft.client.particle.SpriteSet"

export class $TextureSheetParticle extends $SingleQuadParticle {
public "pickSprite"(spriteSet0: $SpriteSet$$Type): void
public "setSpriteFromAge"(spriteSet0: $SpriteSet$$Type): void
set "spriteFromAge"(value: $SpriteSet$$Type)
}
}

declare module "net.minecraft.client.particle.SpriteSet" {
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export interface $SpriteSet {
"get"(randomSource0: $RandomSource$$Type): $TextureAtlasSprite
"get"(int0: integer, int1: integer): $TextureAtlasSprite
}

export namespace $SpriteSet {
const probejs$$marker: never
}
export abstract class $SpriteSet$$Static implements $SpriteSet {
}
}

declare module "net.minecraft.client.particle.ParticleEngine" {
import { $Camera$$Type } from "net.minecraft.client.Camera"
import { $MultiBufferSource$BufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import { $TextureAtlas } from "net.minecraft.client.renderer.texture.TextureAtlas"
import { $Frustum$$Type } from "net.minecraft.client.renderer.culling.Frustum"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $ParticleOptions, $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $ParticleProvider$Sprite$$Type } from "net.minecraft.client.particle.ParticleProvider$Sprite"
import { $PreparableReloadListener } from "net.minecraft.server.packs.resources.PreparableReloadListener"
import { $LightTexture$$Type } from "net.minecraft.client.renderer.LightTexture"
import { $ParticleEngineAccessor } from "com.lowdragmc.lowdraglib.core.mixins.accessor.ParticleEngineAccessor"
import { $ParticleEngineAccessor as $ParticleEngineAccessor$0 } from "net.createmod.ponder.mixin.client.accessor.ParticleEngineAccessor"
import { $ProfilerFiller$$Type } from "net.minecraft.util.profiling.ProfilerFiller"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $ParticleType$$Type } from "net.minecraft.core.particles.ParticleType"
import { $ParticleEngine$SpriteParticleRegistration$$Type } from "net.minecraft.client.particle.ParticleEngine$SpriteParticleRegistration"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $TextureManager$$Type } from "net.minecraft.client.renderer.texture.TextureManager"
import { $ParticleProvider$$Type } from "net.minecraft.client.particle.ParticleProvider"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Particle, $Particle$$Type } from "net.minecraft.client.particle.Particle"

export class $ParticleEngine implements $PreparableReloadListener, $ParticleEngineAccessor, $ParticleEngineAccessor$0 {
readonly "textureAtlas": $TextureAtlas

constructor(clientLevel0: $ClientLevel$$Type, textureManager1: $TextureManager$$Type)

public "add"(particle0: $Particle$$Type): void
public "addBlockHitEffects"(blockPos0: $BlockPos$$Type, blockHitResult1: $BlockHitResult$$Type): void
public "close"(): void
public "countParticles"(): string
public "crack"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): void
public "createParticle"(particleOptions0: $ParticleOptions$$Type, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double): $Particle
public "createTrackingEmitter"(entity0: $Entity$$Type, particleOptions1: $ParticleOptions$$Type, int2: integer): void
public "createTrackingEmitter"(entity0: $Entity$$Type, particleOptions1: $ParticleOptions$$Type): void
public "destroy"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type): void
public "getName"(): string
public "handler$zkb000$injectTick"(ci: $CallbackInfo$$Type): void
/** @deprecated */
public "register"<T extends $ParticleOptions>(particleType0: $ParticleType$$Type<T>, particleProvider1: $ParticleProvider$$Type<T>): void
/** @deprecated */
public "register"<T extends $ParticleOptions>(particleType0: $ParticleType$$Type<T>, sprite1: $ParticleProvider$Sprite$$Type<T>): void
/** @deprecated */
public "register"<T extends $ParticleOptions>(particleType0: $ParticleType$$Type<T>, spriteParticleRegistration1: $ParticleEngine$SpriteParticleRegistration$$Type<T>): void
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
/** @deprecated */
public "render"(poseStack0: $PoseStack$$Type, bufferSource1: $MultiBufferSource$BufferSource$$Type, lightTexture2: $LightTexture$$Type, camera3: $Camera$$Type, float4: float): void
public "render"(poseStack0: $PoseStack$$Type, bufferSource1: $MultiBufferSource$BufferSource$$Type, lightTexture2: $LightTexture$$Type, camera3: $Camera$$Type, float4: float, frustum5: $Frustum$$Type): void
public "setLevel"(clientLevel0: $ClientLevel$$Type): void
public "tick"(): void
get "name"(): string
set "level"(value: $ClientLevel$$Type)
}
}

declare module "net.minecraft.client.particle.ParticleProvider$Sprite" {
import { $ParticleOptions, $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"
import { $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"
import { $TextureSheetParticle } from "net.minecraft.client.particle.TextureSheetParticle"

export interface $ParticleProvider$Sprite<T extends $ParticleOptions = $ParticleOptions> {
"createParticle"(t0: T, clientLevel1: $ClientLevel$$Type, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double): $TextureSheetParticle
}

export namespace $ParticleProvider$Sprite {
const probejs$$marker: never
}
export abstract class $ParticleProvider$Sprite$$Static<T extends $ParticleOptions = $ParticleOptions> implements $ParticleProvider$Sprite<T> {
}
}

declare module "net.minecraft.client.particle.ParticleEngine$SpriteParticleRegistration" {
import { $ParticleProvider } from "net.minecraft.client.particle.ParticleProvider"
import { $SpriteSet$$Type } from "net.minecraft.client.particle.SpriteSet"
import { $ParticleOptions } from "net.minecraft.core.particles.ParticleOptions"

export interface $ParticleEngine$SpriteParticleRegistration<T extends $ParticleOptions = $ParticleOptions> {
"create"(spriteSet0: $SpriteSet$$Type): $ParticleProvider<T>
}

export namespace $ParticleEngine$SpriteParticleRegistration {
const probejs$$marker: never
}
export abstract class $ParticleEngine$SpriteParticleRegistration$$Static<T extends $ParticleOptions = $ParticleOptions> implements $ParticleEngine$SpriteParticleRegistration<T> {
}
}

declare module "net.minecraft.client.particle.SingleQuadParticle" {
import { $Particle } from "net.minecraft.client.particle.Particle"

export class $SingleQuadParticle extends $Particle {
public "getQuadSize"(float0: float): float
}
}

declare module "net.minecraft.client.particle.ParticleRenderType" {
import { $Tesselator$$Type } from "com.mojang.blaze3d.vertex.Tesselator"
import { $BufferBuilder$$Type } from "com.mojang.blaze3d.vertex.BufferBuilder"
import { $TextureManager$$Type } from "net.minecraft.client.renderer.texture.TextureManager"

export interface $ParticleRenderType {
"begin"(bufferBuilder0: $BufferBuilder$$Type, textureManager1: $TextureManager$$Type): void
"end"(tesselator0: $Tesselator$$Type): void
}

export namespace $ParticleRenderType {
const CUSTOM: $ParticleRenderType
const NO_RENDER: $ParticleRenderType
const PARTICLE_SHEET_LIT: $ParticleRenderType
const PARTICLE_SHEET_OPAQUE: $ParticleRenderType
const PARTICLE_SHEET_TRANSLUCENT: $ParticleRenderType
const TERRAIN_SHEET: $ParticleRenderType
}
export abstract class $ParticleRenderType$$Static implements $ParticleRenderType {
static readonly "CUSTOM": $ParticleRenderType
static readonly "NO_RENDER": $ParticleRenderType
static readonly "PARTICLE_SHEET_LIT": $ParticleRenderType
static readonly "PARTICLE_SHEET_OPAQUE": $ParticleRenderType
static readonly "PARTICLE_SHEET_TRANSLUCENT": $ParticleRenderType
static readonly "TERRAIN_SHEET": $ParticleRenderType

}
}

declare module "net.minecraft.client.particle.Particle" {
import { $ParticleRenderType } from "net.minecraft.client.particle.ParticleRenderType"
import { $Camera$$Type } from "net.minecraft.client.Camera"
import { $AABB, $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $ParticleGroup } from "net.minecraft.core.particles.ParticleGroup"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $ParticleAccessor } from "io.redspace.ironsspellbooks.mixin.ParticleAccessor"
import { $Optional } from "java.util.Optional"
import { $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"

export class $Particle implements $ParticleAccessor {
constructor(clientLevel0: $ClientLevel$$Type, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double)

public "getBoundingBox"(): $AABB
public "getLifetime"(): integer
public "getParticleGroup"(): $Optional<$ParticleGroup>
public "getPos"(): $Vec3
public "getRenderType"(): $ParticleRenderType
public "isAlive"(): boolean
public "move"(double0: double, double1: double, double2: double): void
public "remove"(): void
public "render"(vertexConsumer0: $VertexConsumer$$Type, camera1: $Camera$$Type, float2: float): void
public "scale"(float0: float): $Particle
public "setBoundingBox"(aABB0: $AABB$$Type): void
public "setColor"(float0: float, float1: float, float2: float): void
public "setLifetime"(int0: integer): void
public "setParticleSpeed"(double0: double, double1: double, double2: double): void
public "setPos"(double0: double, double1: double, double2: double): void
public "setPower"(float0: float): $Particle
public "setSize"(float0: float, float1: float): void
public "shouldCull"(): boolean
public "tick"(): void
get "boundingBox"(): $AABB
get "lifetime"(): integer
get "particleGroup"(): $Optional<$ParticleGroup>
get "pos"(): $Vec3
get "renderType"(): $ParticleRenderType
get "alive"(): boolean
set "boundingBox"(value: $AABB$$Type)
set "lifetime"(value: integer)
set "power"(value: float)
}
}

