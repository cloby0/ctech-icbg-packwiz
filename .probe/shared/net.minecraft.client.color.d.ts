declare module "net.minecraft.client.color.block.BlockColor" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export interface $BlockColor {
"getColor"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, int3: integer): integer
}

export namespace $BlockColor {
const probejs$$marker: never
}
export abstract class $BlockColor$$Static implements $BlockColor {
}
}

declare module "net.minecraft.client.color.item.ItemColor" {
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $ItemColor {
"getColor"(itemStack0: $ItemStack$$Type, int1: integer): integer
}

export namespace $ItemColor {
const probejs$$marker: never
}
export abstract class $ItemColor$$Static implements $ItemColor {
}
}

declare module "net.minecraft.client.color.block.BlockTintCache" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ToIntFunction$$Type } from "java.util.function.ToIntFunction"

export class $BlockTintCache {
constructor(toIntFunction0: $ToIntFunction$$Type<$BlockPos$$Type>)

public "getColor"(blockPos0: $BlockPos$$Type): integer
public "invalidateAll"(): void
public "invalidateForChunk"(int0: integer, int1: integer): void
}
}

declare module "net.minecraft.client.color.block.BlockColors" {
import { $BlockColor, $BlockColor$$Type } from "net.minecraft.client.color.block.BlockColor"
import { $Reference2ReferenceMap } from "it.unimi.dsi.fastutil.objects.Reference2ReferenceMap"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Set } from "java.util.Set"
import { $BlockColorsForgeAccessor } from "fuzs.puzzleslib.mixin.client.accessor.BlockColorsForgeAccessor"
import { $Property } from "net.minecraft.world.level.block.state.properties.Property"
import { $BlockColorsAccessor } from "com.aetherteam.aether.mixin.mixins.client.accessor.BlockColorsAccessor"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $AccessorBlockColors } from "org.violetmoon.zetaimplforge.mixin.mixins.client.AccessorBlockColors"
import { $BlockColorsExtended } from "me.jellysquid.mods.sodium.client.model.color.interop.BlockColorsExtended"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $ReferenceSet } from "it.unimi.dsi.fastutil.objects.ReferenceSet"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export class $BlockColors implements $AccessorBlockColors, $BlockColorsForgeAccessor, $BlockColorsAccessor, $BlockColorsExtended {
constructor()

public static "createDefault"(): $BlockColors
public "embeddium$getOverridenVanillaBlocks"(): $ReferenceSet
public "getColor"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, int3: integer): integer
public "getColor"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type): integer
public "getColoringProperties"(block0: $Block$$Type): $Set<$Property<any>>
public static "getOverridenVanillaBlocks"(blockColors0: $BlockColors$$Type): $ReferenceSet<$Block>
public static "getProviders"(blockColors0: $BlockColors$$Type): $Reference2ReferenceMap<$Block, $BlockColor>
/** @deprecated */
public "register"(blockColor0: $BlockColor$$Type, ...block1s: $Block$$Type[]): void
public "sodium$getProviders"(): $Reference2ReferenceMap
}
}

declare module "net.minecraft.client.color.item.ItemColors" {
import { $ItemColorsForgeAccessor } from "fuzs.puzzleslib.mixin.client.accessor.ItemColorsForgeAccessor"
import { $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $BlockColors$$Type } from "net.minecraft.client.color.block.BlockColors"
import { $AccessorItemColors } from "org.violetmoon.zetaimplforge.mixin.mixins.client.AccessorItemColors"
import { $ItemColorsExtended } from "me.jellysquid.mods.sodium.client.model.color.interop.ItemColorsExtended"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ItemColor, $ItemColor$$Type } from "net.minecraft.client.color.item.ItemColor"

export class $ItemColors implements $AccessorItemColors, $ItemColorsForgeAccessor, $ItemColorsExtended {
constructor()

public static "createDefault"(blockColors0: $BlockColors$$Type): $ItemColors
public "getColor"(itemStack0: $ItemStack$$Type, int1: integer): integer
/** @deprecated */
public "register"(itemColor0: $ItemColor$$Type, ...itemLike1s: $ItemLike$$Type[]): void
public "sodium$getColorProvider"(itemStack0: $ItemStack$$Type): $ItemColor
}
}

