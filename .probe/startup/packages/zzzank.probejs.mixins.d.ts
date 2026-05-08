declare module "zzzank.probejs.mixins.AccessTextureAtlas" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Map$$Type } from "java.util.Map"
import { $TextureAtlasSprite$$Type } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessTextureAtlas$$Type = ($AccessTextureAtlas | (() => $Map$$Type<$ResourceLocation$$Type, $TextureAtlasSprite$$Type>));
}

declare module "zzzank.probejs.mixins.AccessTextureManager" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AbstractTexture$$Type } from "net.minecraft.client.renderer.texture.AbstractTexture"
import { $Map$$Type } from "java.util.Map"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessTextureManager$$Type = ($AccessTextureManager | (() => $Map$$Type<$ResourceLocation$$Type, $AbstractTexture$$Type>));
}

declare module "zzzank.probejs.mixins.AccessScriptManager" {
import { $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $Map$$Type } from "java.util.Map"
import { $NativeJavaClass$$Type } from "dev.latvian.mods.rhino.NativeJavaClass"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessScriptManager$$Type = ($AccessScriptManager | (() => $Map$$Type<string, $Either$$Type<$NativeJavaClass$$Type, boolean>>));
}

