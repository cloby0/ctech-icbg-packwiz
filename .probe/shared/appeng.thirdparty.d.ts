declare module "appeng.thirdparty.fabric.SpriteFinderImpl" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $TextureAtlas$$Type } from "net.minecraft.client.renderer.texture.TextureAtlas"
import { $Map$$Type } from "java.util.Map"
import { $SpriteFinder } from "appeng.thirdparty.fabric.SpriteFinder"
import { $QuadView$$Type } from "appeng.thirdparty.fabric.QuadView"
import { $TextureAtlasSprite, $TextureAtlasSprite$$Type } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export class $SpriteFinderImpl implements $SpriteFinder {
constructor(map0: $Map$$Type<$ResourceLocation$$Type, $TextureAtlasSprite$$Type>, textureAtlas1: $TextureAtlas$$Type)

public "find"(quadView0: $QuadView$$Type): $TextureAtlasSprite
public "find"(float0: float, float1: float): $TextureAtlasSprite
public static "get"(textureAtlas0: $TextureAtlas$$Type): $SpriteFinderImpl
}
}

declare module "appeng.thirdparty.fabric.MutableQuadView" {
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Vector2f, $Vector2f$$Type } from "org.joml.Vector2f"
import { $BakedQuad, $BakedQuad$$Type } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $QuadView } from "appeng.thirdparty.fabric.QuadView"
import { $TextureAtlasSprite$$Type } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export interface $MutableQuadView extends $QuadView {
"color"(int0: integer, int1: integer, int2: integer, int3: integer): $MutableQuadView
"color"(int0: integer, int1: integer): $MutableQuadView
"color"(int0: integer): integer
"colorIndex"(int0: integer): $MutableQuadView
"colorIndex"(): integer
"copyNormal"(int0: integer, vector3f1: $Vector3f$$Type): $Vector3f
"copyPos"(int0: integer, vector3f1: $Vector3f$$Type): $Vector3f
"copyTo"(mutableQuadView0: $MutableQuadView$$Type): void
"copyUv"(int0: integer, vector2f1: $Vector2f$$Type): $Vector2f
"cullFace"(direction0: $Direction$$Type): $MutableQuadView
"cullFace"(): $Direction
"faceNormal"(): $Vector3f
"fromVanilla"(bakedQuad0: $BakedQuad$$Type, direction1: $Direction$$Type): $MutableQuadView
"fromVanilla"(int0s: integer[], int1: integer): $MutableQuadView
"hasNormal"(int0: integer): boolean
"lightFace"(): $Direction
"lightmap"(int0: integer, int1: integer): $MutableQuadView
"lightmap"(int0: integer, int1: integer, int2: integer, int3: integer): $MutableQuadView
"lightmap"(int0: integer): integer
"nominalFace"(direction0: $Direction$$Type): $MutableQuadView
"nominalFace"(): $Direction
"normal"(int0: integer, vector3f1: $Vector3f$$Type): $MutableQuadView
"normal"(int0: integer, float1: float, float2: float, float3: float): $MutableQuadView
"normalX"(int0: integer): float
"normalY"(int0: integer): float
"normalZ"(int0: integer): float
"pos"(int0: integer, vector3f1: $Vector3f$$Type): $MutableQuadView
"pos"(int0: integer, float1: float, float2: float, float3: float): $MutableQuadView
"posByIndex"(int0: integer, int1: integer): float
"spriteBake"(textureAtlasSprite0: $TextureAtlasSprite$$Type, int1: integer): $MutableQuadView
"tag"(int0: integer): $MutableQuadView
"tag"(): integer
"toBakedQuad"(textureAtlasSprite0: $TextureAtlasSprite$$Type): $BakedQuad
"toBlockBakedQuad"(): $BakedQuad
"toVanilla"(int0s: integer[], int1: integer): void
"u"(int0: integer): float
"uv"(int0: integer, vector2f1: $Vector2f$$Type): $MutableQuadView
"uv"(int0: integer, float1: float, float2: float): $MutableQuadView
"v"(int0: integer): float
"x"(int0: integer): float
"y"(int0: integer): float
"z"(int0: integer): float
}

export namespace $MutableQuadView {
const BAKE_FLIP_U: integer
const BAKE_FLIP_V: integer
const BAKE_LOCK_UV: integer
const BAKE_NORMALIZED: integer
const BAKE_ROTATE_180: integer
const BAKE_ROTATE_270: integer
const BAKE_ROTATE_90: integer
const BAKE_ROTATE_NONE: integer
function getInstance(): $MutableQuadView
}
export abstract class $MutableQuadView$$Static implements $MutableQuadView {
static readonly "BAKE_FLIP_U": integer
static readonly "BAKE_FLIP_V": integer
static readonly "BAKE_LOCK_UV": integer
static readonly "BAKE_NORMALIZED": integer
static readonly "BAKE_ROTATE_180": integer
static readonly "BAKE_ROTATE_270": integer
static readonly "BAKE_ROTATE_90": integer
static readonly "BAKE_ROTATE_NONE": integer

static "getInstance"(): $MutableQuadView
}
}

declare module "appeng.thirdparty.fabric.QuadView" {
import { $MutableQuadView$$Type } from "appeng.thirdparty.fabric.MutableQuadView"
import { $Direction } from "net.minecraft.core.Direction"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Vector2f, $Vector2f$$Type } from "org.joml.Vector2f"
import { $BakedQuad } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $TextureAtlasSprite$$Type } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export interface $QuadView {
"color"(int0: integer): integer
"colorIndex"(): integer
"copyNormal"(int0: integer, vector3f1: $Vector3f$$Type): $Vector3f
"copyPos"(int0: integer, vector3f1: $Vector3f$$Type): $Vector3f
"copyTo"(mutableQuadView0: $MutableQuadView$$Type): void
"copyUv"(int0: integer, vector2f1: $Vector2f$$Type): $Vector2f
"cullFace"(): $Direction
"faceNormal"(): $Vector3f
"hasNormal"(int0: integer): boolean
"lightFace"(): $Direction
"lightmap"(int0: integer): integer
"nominalFace"(): $Direction
"normalX"(int0: integer): float
"normalY"(int0: integer): float
"normalZ"(int0: integer): float
"posByIndex"(int0: integer, int1: integer): float
"tag"(): integer
"toBakedQuad"(textureAtlasSprite0: $TextureAtlasSprite$$Type): $BakedQuad
"toBlockBakedQuad"(): $BakedQuad
"toVanilla"(int0s: integer[], int1: integer): void
"u"(int0: integer): float
"v"(int0: integer): float
"x"(int0: integer): float
"y"(int0: integer): float
"z"(int0: integer): float
}

export namespace $QuadView {
const VANILLA_QUAD_STRIDE: integer
const VANILLA_VERTEX_STRIDE: integer
}
export abstract class $QuadView$$Static implements $QuadView {
static readonly "VANILLA_QUAD_STRIDE": integer
static readonly "VANILLA_VERTEX_STRIDE": integer

}
}

declare module "appeng.thirdparty.fabric.SpriteFinderImpl$SpriteFinderAccess" {
import { $SpriteFinderImpl } from "appeng.thirdparty.fabric.SpriteFinderImpl"

export interface $SpriteFinderImpl$SpriteFinderAccess {
"fabric_spriteFinder"(): $SpriteFinderImpl
}

export namespace $SpriteFinderImpl$SpriteFinderAccess {
const probejs$$marker: never
}
export abstract class $SpriteFinderImpl$SpriteFinderAccess$$Static implements $SpriteFinderImpl$SpriteFinderAccess {
}
}

declare module "appeng.thirdparty.fabric.SpriteFinder" {
import { $TextureAtlas$$Type } from "net.minecraft.client.renderer.texture.TextureAtlas"
import { $QuadView$$Type } from "appeng.thirdparty.fabric.QuadView"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export interface $SpriteFinder {
"find"(quadView0: $QuadView$$Type): $TextureAtlasSprite
"find"(float0: float, float1: float): $TextureAtlasSprite
}

export namespace $SpriteFinder {
function get(textureAtlas0: $TextureAtlas$$Type): $SpriteFinder
}
export abstract class $SpriteFinder$$Static implements $SpriteFinder {
static "get"(textureAtlas0: $TextureAtlas$$Type): $SpriteFinder
}
}

