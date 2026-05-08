declare module "net.darkhax.bookshelf.mixin.accessors.client.AccessorFontManager" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Map } from "java.util.Map"
import { $FontSet } from "net.minecraft.client.gui.font.FontSet"

export interface $AccessorFontManager {
"bookshelf$getFonts"(): $Map<$ResourceLocation, $FontSet>
}

export namespace $AccessorFontManager {
const probejs$$marker: never
}
export abstract class $AccessorFontManager$$Static implements $AccessorFontManager {
}
}

declare module "net.darkhax.bookshelf.mixin.accessors.item.crafting.AccessorShapedRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorShapedRecipe {
}

export namespace $AccessorShapedRecipe {
const probejs$$marker: never
}
export abstract class $AccessorShapedRecipe$$Static implements $AccessorShapedRecipe {
}
}

declare module "net.darkhax.bookshelf.mixin.accessors.entity.AccessorMob" {
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"

export interface $AccessorMob {
"bookshelf$getAmbientSound"(): $SoundEvent
}

export namespace $AccessorMob {
const probejs$$marker: never
}
export abstract class $AccessorMob$$Static implements $AccessorMob {
}
}

declare module "net.darkhax.bookshelf.mixin.accessors.inventory.AccessorCraftingMenu" {
import { $Player } from "net.minecraft.world.entity.player.Player"

export interface $AccessorCraftingMenu {
"bookshelf$getPlayer"(): $Player
}

export namespace $AccessorCraftingMenu {
const probejs$$marker: never
}
export abstract class $AccessorCraftingMenu$$Static implements $AccessorCraftingMenu {
}
}

declare module "net.darkhax.bookshelf.mixin.accessors.effect.AccessorMobEffectInstance" {
import { $MobEffectInstance, $MobEffectInstance$$Type } from "net.minecraft.world.effect.MobEffectInstance"

export interface $AccessorMobEffectInstance {
"bookshelf$getHiddenEffect"(): $MobEffectInstance
"bookshelf$setHiddenEffect"(mobEffectInstance0: $MobEffectInstance$$Type): void
"bookshelf$tickDownDuration"(): integer
"setDuration"(int0: integer): void
set "duration"(value: integer)
}

export namespace $AccessorMobEffectInstance {
const probejs$$marker: never
}
export abstract class $AccessorMobEffectInstance$$Static implements $AccessorMobEffectInstance {
}
}

declare module "net.darkhax.bookshelf.mixin.accessors.world.AccessorStructureTemplatePool" {
import { $List, $List$$Type } from "java.util.List"
import { $ObjectArrayList, $ObjectArrayList$$Type } from "it.unimi.dsi.fastutil.objects.ObjectArrayList"
import { $Pair, $Pair$$Type } from "com.mojang.datafixers.util.Pair"
import { $StructurePoolElement, $StructurePoolElement$$Type } from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

export interface $AccessorStructureTemplatePool {
"bookshelf$getRawTemplates"(): $List<$Pair<$StructurePoolElement, integer>>
"bookshelf$getTemplates"(): $ObjectArrayList<$StructurePoolElement>
"bookshelf$setRawTemplates"(list0: $List$$Type<$Pair$$Type<$StructurePoolElement$$Type, integer>>): void
"bookshelf$setTemplates"(objectArrayList0: $ObjectArrayList$$Type<$StructurePoolElement$$Type>): void
}

export namespace $AccessorStructureTemplatePool {
const probejs$$marker: never
}
export abstract class $AccessorStructureTemplatePool$$Static implements $AccessorStructureTemplatePool {
}
}

declare module "net.darkhax.bookshelf.mixin.accessors.util.random.AccessorWeightedRandomList" {
import { $ImmutableList } from "com.google.common.collect.ImmutableList"

export interface $AccessorWeightedRandomList<E = any> {
"bookshelf$getEntries"(): $ImmutableList<E>
"bookshelf$getTotalWeight"(): integer
}

export namespace $AccessorWeightedRandomList {
const probejs$$marker: never
}
export abstract class $AccessorWeightedRandomList$$Static<E = any> implements $AccessorWeightedRandomList<E> {
}
}

declare module "net.darkhax.bookshelf.mixin.accessors.client.AccessorMinecraft" {
import { $FontManager } from "net.minecraft.client.gui.font.FontManager"

export interface $AccessorMinecraft {
"bookshelf$getFontManager"(): $FontManager
}

export namespace $AccessorMinecraft {
const probejs$$marker: never
}
export abstract class $AccessorMinecraft$$Static implements $AccessorMinecraft {
}
}

declare module "net.darkhax.bookshelf.mixin.accessors.inventory.AccessorInventoryMenu" {
import { $Player } from "net.minecraft.world.entity.player.Player"

export interface $AccessorInventoryMenu {
"bookshelf$getOwner"(): $Player
}

export namespace $AccessorInventoryMenu {
const probejs$$marker: never
}
export abstract class $AccessorInventoryMenu$$Static implements $AccessorInventoryMenu {
}
}

declare module "net.darkhax.bookshelf.mixin.accessors.entity.AccessorEntity" {
import { $HoverEvent } from "net.minecraft.network.chat.HoverEvent"

export interface $AccessorEntity {
"bookshelf$createHoverEvent"(): $HoverEvent
}

export namespace $AccessorEntity {
const probejs$$marker: never
}
export abstract class $AccessorEntity$$Static implements $AccessorEntity {
}
}

declare module "net.darkhax.bookshelf.mixin.accessors.client.multiplayer.AccessorClientAdvancements" {
import { $AdvancementProgress } from "net.minecraft.advancements.AdvancementProgress"
import { $Map } from "java.util.Map"
import { $Advancement } from "net.minecraft.advancements.Advancement"

export interface $AccessorClientAdvancements {
"bookshelf$getProgress"(): $Map<$Advancement, $AdvancementProgress>
}

export namespace $AccessorClientAdvancements {
const probejs$$marker: never
}
export abstract class $AccessorClientAdvancements$$Static implements $AccessorClientAdvancements {
}
}

declare module "net.darkhax.bookshelf.mixin.accessors.block.entity.AccessorSignBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorSignBlockEntity {
"bookshelf$markUpdated"(): void
}

export namespace $AccessorSignBlockEntity {
const probejs$$marker: never
}
export abstract class $AccessorSignBlockEntity$$Static implements $AccessorSignBlockEntity {
}
}

declare module "net.darkhax.bookshelf.mixin.accessors.item.AccessorCooldownInstance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorCooldownInstance {
"bookshelf$getEndTime"(): integer
"bookshelf$getStartTime"(): integer
}

export namespace $AccessorCooldownInstance {
const probejs$$marker: never
}
export abstract class $AccessorCooldownInstance$$Static implements $AccessorCooldownInstance {
}
}

declare module "net.darkhax.bookshelf.mixin.accessors.world.AccessorRecipeManager" {
import { $Map } from "java.util.Map"
import { $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"

export interface $AccessorRecipeManager {
"bookshelf$getTypeMap"(recipeType0: $RecipeType$$Type): $Map
}

export namespace $AccessorRecipeManager {
const probejs$$marker: never
}
export abstract class $AccessorRecipeManager$$Static implements $AccessorRecipeManager {
}
}

declare module "net.darkhax.attributefix.mixin.AccessorRangedAttribute" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorRangedAttribute {
"attributefix$setMaxValue"(double0: double): void
"attributefix$setMinValue"(double0: double): void
}

export namespace $AccessorRangedAttribute {
const probejs$$marker: never
}
export abstract class $AccessorRangedAttribute$$Static implements $AccessorRangedAttribute {
}
}

declare module "net.darkhax.bookshelf.mixin.accessors.item.AccessorItem" {
import { $Item$$Type } from "net.minecraft.world.item.Item"

export interface $AccessorItem {
"bookshelf$setCraftingRemainder"(item0: $Item$$Type): void
}

export namespace $AccessorItem {
const probejs$$marker: never
}
export abstract class $AccessorItem$$Static implements $AccessorItem {
}
}

declare module "net.darkhax.bookshelf.mixin.accessors.entity.AccessorLivingEntity" {
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $AccessorLivingEntity {
"bookshelf$getDeathSound"(): $SoundEvent
"bookshelf$getDrinkingSound"(itemStack0: $ItemStack$$Type): $SoundEvent
"bookshelf$getFallDamageSound"(int0: integer): $SoundEvent
"bookshelf$getHurtSound"(damageSource0: $DamageSource$$Type): $SoundEvent
"bookshelf$makePoofParticles"(): void
}

export namespace $AccessorLivingEntity {
const probejs$$marker: never
}
export abstract class $AccessorLivingEntity$$Static implements $AccessorLivingEntity {
}
}

declare module "net.darkhax.bookshelf.mixin.accessors.item.AccessorItemCooldowns" {
import { $Map } from "java.util.Map"
import { $Item } from "net.minecraft.world.item.Item"

export interface $AccessorItemCooldowns {
"bookshelf$getCooldowns"(): $Map<$Item, any>
"bookshelf$getTickCount"(): integer
}

export namespace $AccessorItemCooldowns {
const probejs$$marker: never
}
export abstract class $AccessorItemCooldowns$$Static implements $AccessorItemCooldowns {
}
}

