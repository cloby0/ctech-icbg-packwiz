declare module "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ForgeConfigSpec$Builder$$Type } from "net.minecraftforge.common.ForgeConfigSpec$Builder"
import { $Component } from "net.minecraft.network.chat.Component"
import { $ForgeConfigSpec$BooleanValue, $ForgeConfigSpec$BooleanValue$$Type } from "net.minecraftforge.common.ForgeConfigSpec$BooleanValue"
import { $SpellSchool, $SpellSchool$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellSchool"
import { $ForgeConfigSpec, $ForgeConfigSpec$$Type } from "net.minecraftforge.common.ForgeConfigSpec"
import { $SpellPartConfigUtil$AugmentCosts, $SpellPartConfigUtil$AugmentCosts$$Type } from "com.hollingsworth.arsnouveau.common.util.SpellPartConfigUtil$AugmentCosts"
import { $Set, $Set$$Type } from "java.util.Set"
import { $AbstractAugment, $AbstractAugment$$Type } from "com.hollingsworth.arsnouveau.api.spell.AbstractAugment"
import { $ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$$Type } from "net.minecraftforge.common.ForgeConfigSpec$IntValue"
import { $List, $List$$Type } from "java.util.List"
import { $SpellTier } from "com.hollingsworth.arsnouveau.api.spell.SpellTier"
import { $Glyph, $Glyph$$Type } from "com.hollingsworth.arsnouveau.common.items.Glyph"
import { $SpellPartConfigUtil$ComboLimits, $SpellPartConfigUtil$ComboLimits$$Type } from "com.hollingsworth.arsnouveau.common.util.SpellPartConfigUtil$ComboLimits"
import { $Comparable } from "java.lang.Comparable"
import { $SpellPartConfigUtil$AugmentLimits, $SpellPartConfigUtil$AugmentLimits$$Type } from "com.hollingsworth.arsnouveau.common.util.SpellPartConfigUtil$AugmentLimits"
import { $SpellContext$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $AbstractSpellPart implements $Comparable<$AbstractSpellPart> {
constructor(string0: string, string1: string)
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string)

public "buildConfig"(builder0: $ForgeConfigSpec$Builder$$Type): void
public "compareTo"(abstractSpellPart0: $AbstractSpellPart$$Type): integer
public "contextCanceled"(spellContext0: $SpellContext$$Type): boolean
public "defaultTier"(): $SpellTier
public "defaultedStarterGlyph"(): boolean
public "getAugmentLimit"(resourceLocation0: $ResourceLocation$$Type): integer
public "getBookDescLang"(): $Component
public "getBookDescription"(): string
public "getCastingCost"(): integer
public "getConfigTier"(): $SpellTier
public "getGlyph"(): $Glyph
public "getLocaleName"(): string
public "getLocalizationKey"(): string
public "getName"(): string
public "getRegistryName"(): $ResourceLocation
public "getTypeIndex"(): integer
public "isEnabled"(): boolean
public "onContextCanceled"(spellContext0: $SpellContext$$Type): void
public "shouldShowInSpellBook"(): boolean
public "shouldShowInUnlock"(): boolean
get "CONFIG"(): $ForgeConfigSpec
set "CONFIG"(value: $ForgeConfigSpec$$Type)
get "COST"(): $ForgeConfigSpec$IntValue
set "COST"(value: $ForgeConfigSpec$IntValue$$Type)
get "ENABLED"(): $ForgeConfigSpec$BooleanValue
set "ENABLED"(value: $ForgeConfigSpec$BooleanValue$$Type)
get "GLYPH_TIER"(): $ForgeConfigSpec$IntValue
set "GLYPH_TIER"(value: $ForgeConfigSpec$IntValue$$Type)
get "PER_SPELL_LIMIT"(): $ForgeConfigSpec$IntValue
set "PER_SPELL_LIMIT"(value: $ForgeConfigSpec$IntValue$$Type)
get "STARTER_SPELL"(): $ForgeConfigSpec$BooleanValue
set "STARTER_SPELL"(value: $ForgeConfigSpec$BooleanValue$$Type)
get "augmentCosts"(): $SpellPartConfigUtil$AugmentCosts
set "augmentCosts"(value: $SpellPartConfigUtil$AugmentCosts$$Type)
get "augmentLimits"(): $SpellPartConfigUtil$AugmentLimits
set "augmentLimits"(value: $SpellPartConfigUtil$AugmentLimits$$Type)
get "compatibleAugments"(): $Set<$AbstractAugment>
set "compatibleAugments"(value: $Set$$Type<$AbstractAugment$$Type>)
get "glyphItem"(): $Glyph
set "glyphItem"(value: $Glyph$$Type)
get "invalidCombinations"(): $SpellPartConfigUtil$ComboLimits
set "invalidCombinations"(value: $SpellPartConfigUtil$ComboLimits$$Type)
get "name"(): string
set "name"(value: string)
get "spellSchools"(): $List<$SpellSchool>
set "spellSchools"(value: $List$$Type<$SpellSchool$$Type>)
get "bookDescLang"(): $Component
get "bookDescription"(): string
get "castingCost"(): integer
get "configTier"(): $SpellTier
get "glyph"(): $Glyph
get "localeName"(): string
get "localizationKey"(): string
get "registryName"(): $ResourceLocation
get "typeIndex"(): integer
get "enabled"(): boolean
}
}

declare module "com.hollingsworth.arsnouveau.api.spell.SpellStats" {
import { $List, $List$$Type } from "java.util.List"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $AbstractAugment, $AbstractAugment$$Type } from "com.hollingsworth.arsnouveau.api.spell.AbstractAugment"

export class $SpellStats {
public "addTooltip"(list0: $List$$Type<$Component$$Type>): $List<$Component>
public "getAccMultiplier"(): float
public "getAmpMultiplier"(): double
public "getAoeMultiplier"(): double
public "getAugments"(): $List<$AbstractAugment>
public "getBuffCount"(abstractAugment0: $AbstractAugment$$Type): integer
public "getDamageModifier"(): double
public "getDurationInTicks"(): integer
public "getDurationMultiplier"(): double
public "getModifierItems"(): $List<$ItemStack>
public "hasBuff"(abstractAugment0: $AbstractAugment$$Type): boolean
public "isRandomized"(): boolean
public "isSensitive"(): boolean
public "setAccMultiplier"(float0: float): void
public "setAmpMultiplier"(double0: double): void
public "setAugments"(list0: $List$$Type<$AbstractAugment$$Type>): void
public "setDamageModifier"(double0: double): void
public "setDurationMultiplier"(double0: double): void
public "setModifierItems"(list0: $List$$Type<$ItemStack$$Type>): void
get "accMultiplier"(): float
get "ampMultiplier"(): double
get "aoeMultiplier"(): double
get "augments"(): $List<$AbstractAugment>
get "damageModifier"(): double
get "durationInTicks"(): integer
get "durationMultiplier"(): double
get "modifierItems"(): $List<$ItemStack>
get "randomized"(): boolean
get "sensitive"(): boolean
set "accMultiplier"(value: float)
set "ampMultiplier"(value: double)
set "augments"(value: $List$$Type<$AbstractAugment$$Type>)
set "damageModifier"(value: double)
set "durationMultiplier"(value: double)
set "modifierItems"(value: $List$$Type<$ItemStack$$Type>)
}
}

declare module "com.hollingsworth.arsnouveau.api.event.DelayedSpellEvent" {
import { $HitResult, $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $SpellResolver, $SpellResolver$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellResolver"
import { $Spell$$Type } from "com.hollingsworth.arsnouveau.api.spell.Spell"
import { $TickEvent$$Type } from "net.minecraftforge.event.TickEvent"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $SpellContext$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import { $ITimedEvent } from "com.hollingsworth.arsnouveau.api.event.ITimedEvent"

export class $DelayedSpellEvent implements $ITimedEvent {
readonly "resolver": $SpellResolver
readonly "result": $HitResult
readonly "world": $Level

constructor(int0: integer, hitResult1: $HitResult$$Type, level2: $Level$$Type, spellResolver3: $SpellResolver$$Type)
/** @deprecated */
constructor(int0: integer, spell1: $Spell$$Type, hitResult2: $HitResult$$Type, level3: $Level$$Type, livingEntity4: $LivingEntity$$Type, spellContext5: $SpellContext$$Type)

public "getID"(): string
public "isExpired"(): boolean
public "onPacketHandled"(): void
public "onServerStopping"(): void
public "resolveSpell"(): void
public "serialize"(compoundTag0: $CompoundTag$$Type): $CompoundTag
public "tick"(boolean0: boolean): void
public "tickEvent"(tickEvent0: $TickEvent$$Type): void
get "duration"(): integer
set "duration"(value: integer)
get "iD"(): string
get "expired"(): boolean
}
}

declare module "com.hollingsworth.arsnouveau.api.spell.CancelReason" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Record } from "java.lang.Record"

export class $CancelReason extends $Record {
static "FILTER_FAILED": $CancelReason
static "NEW_CONTEXT": $CancelReason
static "TERMINATED": $CancelReason

constructor(id: $ResourceLocation$$Type)

public "id"(): $ResourceLocation
}
}

declare module "com.hollingsworth.arsnouveau.api.event.DispelEvent$Pre" {
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $DispelEvent } from "com.hollingsworth.arsnouveau.api.event.DispelEvent"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $SpellContext$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import { $SpellStats$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellStats"

export class $DispelEvent$Pre extends $DispelEvent {
constructor(hitResult0: $HitResult$$Type, level1: $Level$$Type, livingEntity2: $LivingEntity$$Type, spellStats3: $SpellStats$$Type, spellContext4: $SpellContext$$Type)
constructor()

}
}

declare module "com.hollingsworth.arsnouveau.api.item.inv.FilterableItemHandler" {
import { $IItemHandler, $IItemHandler$$Type } from "net.minecraftforge.items.IItemHandler"
import { $InteractResult } from "com.hollingsworth.arsnouveau.api.item.inv.InteractResult"
import { $List, $List$$Type } from "java.util.List"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $InteractType$$Type } from "com.hollingsworth.arsnouveau.api.item.inv.InteractType"
import { $ItemScroll$SortPref, $ItemScroll$SortPref$$Type } from "com.hollingsworth.arsnouveau.common.items.ItemScroll$SortPref"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $FilterableItemHandler {
constructor(iItemHandler0: $IItemHandler$$Type)
constructor(iItemHandler0: $IItemHandler$$Type, list1: $List$$Type<$Function$$Type<$ItemStack$$Type, $ItemScroll$SortPref$$Type>>)
constructor(iItemHandler0: $IItemHandler$$Type, list1: $List$$Type<$Function$$Type<$ItemStack$$Type, $ItemScroll$SortPref$$Type>>, supplier2: $Supplier$$Type<$BlockPos>)

public "addFilterScroll"(itemStack0: $ItemStack$$Type): boolean
public "canExtract"(itemStack0: $ItemStack$$Type): $InteractResult
public "canInsert"(itemStack0: $ItemStack$$Type): $InteractResult
public "canInteractFor"(itemStack0: $ItemStack$$Type, interactType1: $InteractType$$Type): $InteractResult
public "getFilters"(): $List<$Function<$ItemStack, $ItemScroll$SortPref>>
public "getHandler"(): $IItemHandler
public "getHighestPreference"(itemStack0: $ItemStack$$Type): $ItemScroll$SortPref
public "getPos"(): $BlockPos
get "filters"(): $List<$Function<$ItemStack, $ItemScroll$SortPref>>
get "handler"(): $IItemHandler
get "pos"(): $BlockPos
}
}

declare module "com.hollingsworth.arsnouveau.common.mixin.ChatComponentAccessor" {
import { $List } from "java.util.List"
import { $GuiMessage } from "net.minecraft.client.GuiMessage"
import { $GuiMessage$Line } from "net.minecraft.client.GuiMessage$Line"

export interface $ChatComponentAccessor {
"getAllMessages"(): $List<$GuiMessage>
"getRecentChat"(): $List<string>
"getTrimmedMessages"(): $List<$GuiMessage$Line>
get "allMessages"(): $List<$GuiMessage>
get "recentChat"(): $List<string>
get "trimmedMessages"(): $List<$GuiMessage$Line>
}

export namespace $ChatComponentAccessor {
const probejs$$marker: never
}
export abstract class $ChatComponentAccessor$$Static implements $ChatComponentAccessor {
}
}

declare module "com.hollingsworth.arsnouveau.api.event.ITimedEvent" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TickEvent$$Type } from "net.minecraftforge.event.TickEvent"

export interface $ITimedEvent {
"getID"(): string
"isExpired"(): boolean
"onPacketHandled"(): void
"onServerStopping"(): void
"serialize"(compoundTag0: $CompoundTag$$Type): $CompoundTag
"tick"(boolean0: boolean): void
"tickEvent"(tickEvent0: $TickEvent$$Type): void
get "iD"(): string
get "expired"(): boolean
}

export namespace $ITimedEvent {
const probejs$$marker: never
}
export abstract class $ITimedEvent$$Static implements $ITimedEvent {
}
}

declare module "com.hollingsworth.arsnouveau.api.event.EffectResolveEvent" {
import { $HitResult, $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AbstractEffect, $AbstractEffect$$Type } from "com.hollingsworth.arsnouveau.api.spell.AbstractEffect"
import { $SpellResolver, $SpellResolver$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellResolver"
import { $Spell, $Spell$$Type } from "com.hollingsworth.arsnouveau.api.spell.Spell"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $SpellContext, $SpellContext$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import { $SpellStats, $SpellStats$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellStats"

export class $EffectResolveEvent extends $Event {
constructor()

get "context"(): $SpellContext
set "context"(value: $SpellContext$$Type)
get "rayTraceResult"(): $HitResult
set "rayTraceResult"(value: $HitResult$$Type)
get "resolveEffect"(): $AbstractEffect
set "resolveEffect"(value: $AbstractEffect$$Type)
get "resolver"(): $SpellResolver
set "resolver"(value: $SpellResolver$$Type)
get "shooter"(): $LivingEntity
set "shooter"(value: $LivingEntity$$Type)
get "spell"(): $Spell
set "spell"(value: $Spell$$Type)
get "spellStats"(): $SpellStats
set "spellStats"(value: $SpellStats$$Type)
get "world"(): $Level
set "world"(value: $Level$$Type)
}
}

declare module "com.hollingsworth.arsnouveau.api.event.FamiliarSummonEvent" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityEvent } from "net.minecraftforge.event.entity.EntityEvent"

export class $FamiliarSummonEvent extends $EntityEvent {
constructor(entity0: $Entity$$Type, entity1: $Entity$$Type)
constructor()

get "owner"(): $Entity
set "owner"(value: $Entity$$Type)
}
}

declare module "com.hollingsworth.arsnouveau.api.item.inv.ExtractedStack" {
import { $IItemHandler$$Type } from "net.minecraftforge.items.IItemHandler"
import { $SlotReference, $SlotReference$$Type } from "com.hollingsworth.arsnouveau.api.item.inv.SlotReference"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $ExtractedStack extends $SlotReference {
public static "empty"(): $ExtractedStack
public static "from"(slotReference0: $SlotReference$$Type, int1: integer): $ExtractedStack
public static "from"(iItemHandler0: $IItemHandler$$Type, int1: integer, int2: integer): $ExtractedStack
public "getStack"(): $ItemStack
public "replaceAndReturnOrDrop"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type): void
public "returnOrDrop"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
public "returnStack"(): $ItemStack
get "stack"(): $ItemStack
set "stack"(value: $ItemStack$$Type)
}
}

declare module "com.hollingsworth.arsnouveau.api.event.EffectResolveEvent$Pre" {
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EffectResolveEvent } from "com.hollingsworth.arsnouveau.api.event.EffectResolveEvent"
import { $AbstractEffect$$Type } from "com.hollingsworth.arsnouveau.api.spell.AbstractEffect"
import { $Spell$$Type } from "com.hollingsworth.arsnouveau.api.spell.Spell"
import { $SpellResolver$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellResolver"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $SpellContext$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import { $SpellStats$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellStats"

export class $EffectResolveEvent$Pre extends $EffectResolveEvent {
constructor(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type, hitResult2: $HitResult$$Type, spell3: $Spell$$Type, spellContext4: $SpellContext$$Type, abstractEffect5: $AbstractEffect$$Type, spellStats6: $SpellStats$$Type, spellResolver7: $SpellResolver$$Type)
constructor()

}
}

declare module "com.hollingsworth.arsnouveau.api.spell.SpellTier" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ConcurrentHashMap } from "java.util.concurrent.ConcurrentHashMap"

export class $SpellTier {
static "CREATIVE": $SpellTier
static "ONE": $SpellTier
static readonly "SPELL_TIER_MAP": $ConcurrentHashMap<integer, $SpellTier>
static "THREE": $SpellTier
static "TWO": $SpellTier

/** @deprecated */
constructor(resourceLocation0: $ResourceLocation$$Type, int1: integer)

public static "createTier"(resourceLocation0: $ResourceLocation$$Type, int1: integer): $SpellTier
get "id"(): $ResourceLocation
set "id"(value: $ResourceLocation$$Type)
get "value"(): integer
set "value"(value: integer)
}
}

declare module "com.hollingsworth.arsnouveau.common.event.timed.RewindEvent" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TickEvent$$Type } from "net.minecraftforge.event.TickEvent"
import { $SpellContext, $SpellContext$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import { $ITimedEvent } from "com.hollingsworth.arsnouveau.api.event.ITimedEvent"

export class $RewindEvent implements $ITimedEvent {
constructor(long0: long, int1: integer, spellContext2: $SpellContext$$Type)
constructor(entity0: $Entity$$Type, long1: long, int2: integer)
constructor(entity0: $Entity$$Type, long1: long, int2: integer, spellContext3: $SpellContext$$Type)

public "getID"(): string
public "isExpired"(): boolean
public "onPacketHandled"(): void
public "onServerStopping"(): void
public "serialize"(compoundTag0: $CompoundTag$$Type): $CompoundTag
public "stop"(): void
public "tick"(boolean0: boolean): void
public "tickEvent"(tickEvent0: $TickEvent$$Type): void
get "context"(): $SpellContext
set "context"(value: $SpellContext$$Type)
get "doneRewinding"(): boolean
set "doneRewinding"(value: boolean)
get "entity"(): $Entity
set "entity"(value: $Entity$$Type)
get "respectsGravity"(): boolean
set "respectsGravity"(value: boolean)
get "rewindTicks"(): integer
set "rewindTicks"(value: integer)
get "serverSide"(): boolean
set "serverSide"(value: boolean)
get "startGameTime"(): long
set "startGameTime"(value: long)
get "ticksToRewind"(): integer
set "ticksToRewind"(value: integer)
get "iD"(): string
get "expired"(): boolean
}
}

declare module "com.hollingsworth.arsnouveau.common.mixin.jar.MobAccessorMixin" {
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"

export interface $MobAccessorMixin {
"callGetAmbientSound"(): $SoundEvent
}

export namespace $MobAccessorMixin {
const probejs$$marker: never
}
export abstract class $MobAccessorMixin$$Static implements $MobAccessorMixin {
}
}

declare module "com.hollingsworth.arsnouveau.api.event.SpellModifierEvent" {
import { $AbstractSpellPart, $AbstractSpellPart$$Type } from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import { $HitResult, $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $SpellStats$Builder, $SpellStats$Builder$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $SpellContext, $SpellContext$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $SpellModifierEvent extends $Event {
constructor(livingEntity0: $LivingEntity$$Type, builder1: $SpellStats$Builder$$Type, abstractSpellPart2: $AbstractSpellPart$$Type, hitResult3: $HitResult$$Type, level4: $Level$$Type, spellContext5: $SpellContext$$Type)
constructor()

get "builder"(): $SpellStats$Builder
set "builder"(value: $SpellStats$Builder$$Type)
get "caster"(): $LivingEntity
set "caster"(value: $LivingEntity$$Type)
get "rayTraceResult"(): $HitResult
set "rayTraceResult"(value: $HitResult$$Type)
get "spellContext"(): $SpellContext
set "spellContext"(value: $SpellContext$$Type)
get "spellPart"(): $AbstractSpellPart
set "spellPart"(value: $AbstractSpellPart$$Type)
get "world"(): $Level
set "world"(value: $Level$$Type)
}
}

declare module "com.hollingsworth.arsnouveau.api.event.ManaRegenCalcEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"

export class $ManaRegenCalcEvent extends $LivingEvent {
constructor(livingEntity0: $LivingEntity$$Type, double1: double)
constructor()

public "getRegen"(): double
public "setRegen"(double0: double): void
get "regen"(): double
set "regen"(value: double)
}
}

declare module "com.hollingsworth.arsnouveau.api.item.inv.MultiExtractedReference" {
import { $List$$Type } from "java.util.List"
import { $ExtractedStack, $ExtractedStack$$Type } from "com.hollingsworth.arsnouveau.api.item.inv.ExtractedStack"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MultiSlotReference } from "com.hollingsworth.arsnouveau.api.item.inv.MultiSlotReference"

export class $MultiExtractedReference extends $MultiSlotReference<$ExtractedStack> {
constructor(itemStack0: $ItemStack$$Type, list1: $List$$Type<$ExtractedStack$$Type>)

public "getExtracted"(): $ItemStack
get "extracted"(): $ItemStack
}
}

declare module "com.hollingsworth.arsnouveau.api.item.inv.MultiSlotReference" {
import { $List, $List$$Type } from "java.util.List"
import { $SlotReference, $SlotReference$$Type } from "com.hollingsworth.arsnouveau.api.item.inv.SlotReference"

export class $MultiSlotReference<SReference extends $SlotReference = $SlotReference> {
constructor(...sreference0s: SReference[])
constructor(list0: $List$$Type<SReference>)
constructor()

public "getSlots"(): $List<SReference>
public "isEmpty"(): boolean
get "slots"(): $List<SReference>
get "empty"(): boolean
}
}

declare module "com.hollingsworth.arsnouveau.client.particle.ParticleColor$IntWrapper" {
import { $Cloneable } from "java.lang.Cloneable"
import { $ParticleColor, $ParticleColor$$Type } from "com.hollingsworth.arsnouveau.client.particle.ParticleColor"

/** @deprecated */
export class $ParticleColor$IntWrapper implements $Cloneable {
constructor(int0: integer, int1: integer, int2: integer)
constructor(particleColor0: $ParticleColor$$Type)

public "clone"(): $ParticleColor$IntWrapper
public "toParticleColor"(): $ParticleColor
get "b"(): integer
set "b"(value: integer)
get "g"(): integer
set "g"(value: integer)
get "r"(): integer
set "r"(value: integer)
}
}

declare module "com.hollingsworth.arsnouveau.common.items.ModItem" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $ICapabilityProvider } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item$Properties$$Type } from "net.minecraft.world.item.Item$Properties"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $Holder } from "net.minecraft.core.Holder"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Map } from "java.util.Map"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $FoodProperties } from "net.minecraft.world.food.FoodProperties"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $UUID$$Type } from "java.util.UUID"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $Attribute, $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $EnderMan$$Type } from "net.minecraft.world.entity.monster.EnderMan"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List, $List$$Type } from "java.util.List"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $MutableToolTier$$Type } from "dev.latvian.mods.kubejs.item.MutableToolTier"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $FoodBuilder$$Type } from "dev.latvian.mods.kubejs.item.FoodBuilder"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $Rarity, $Rarity$$Type } from "net.minecraft.world.item.Rarity"

export class $ModItem extends $Item {
constructor()
constructor(properties0: $Item$Properties$$Type)

public "addAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type, name: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "arch$holder"(): $Holder<$Item>
public "arch$registryName"(): $ResourceLocation
public "canApplyAtEnchantingTable"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
public "canContinueUsing"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "canDisableShield"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "canElytraFly"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "canEquip"(itemStack0: $ItemStack$$Type, equipmentSlot1: $EquipmentSlot$$Type, entity2: $Entity$$Type): boolean
public "canGrindstoneRepair"(itemStack0: $ItemStack$$Type): boolean
public "canPerformAction"(itemStack0: $ItemStack$$Type, toolAction1: $ToolAction$$Type): boolean
public "canWalkOnPowderedSnow"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "createEntity"(level0: $Level$$Type, entity1: $Entity$$Type, itemStack2: $ItemStack$$Type): $Entity
public "damageItem"<T extends $LivingEntity>(itemStack0: $ItemStack$$Type, int1: integer, t2: T, consumer3: $Consumer$$Type<T>): integer
public "doesSneakBypassUse"(itemStack0: $ItemStack$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "elytraFlightTick"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): boolean
public static "get"(item: $Item$$Type): $ResourceLocation
public static "get"(block: $Block$$Type): $ResourceLocation
public static "get"(state: $BlockState$$Type): $ResourceLocation
public static "get"(entity: $Entity$$Type): $ResourceLocation
public static "get"(stack: $ItemStack$$Type): $ResourceLocation
public static "get"(type: $EntityType$$Type<any>): $ResourceLocation
public "getAllEnchantments"(itemStack0: $ItemStack$$Type): $Map<$Enchantment, integer>
public "getArmorTexture"(itemStack0: $ItemStack$$Type, entity1: $Entity$$Type, equipmentSlot2: $EquipmentSlot$$Type, string3: string): string
public "getAttributeModifiers"(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
public "getAttributes"(attribute: $Attribute$$Type): $List<$AttributeModifier>
public "getBurnTime"(itemStack0: $ItemStack$$Type, recipeType1: $RecipeType$$Type<any>): integer
public "getCraftingRemainingItem"(itemStack0: $ItemStack$$Type): $ItemStack
public "getCreativeTab"(): string
public "getCreatorModId"(itemStack0: $ItemStack$$Type): string
public "getDamage"(itemStack0: $ItemStack$$Type): integer
public "getDefaultTooltipHideFlags"(itemStack0: $ItemStack$$Type): integer
public "getDigSpeed"(): float
public "getEnchantmentLevel"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): integer
public "getEnchantmentValue"(itemStack0: $ItemStack$$Type): integer
public "getEntityLifespan"(itemStack0: $ItemStack$$Type, level1: $Level$$Type): integer
public "getEquipmentSlot"(itemStack0: $ItemStack$$Type): $EquipmentSlot
public "getFoodProperties"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): $FoodProperties
public "getHighlightTip"(itemStack0: $ItemStack$$Type, component1: $Component$$Type): $Component
public "getMaxDamage"(itemStack0: $ItemStack$$Type): integer
public "getMaxStackSize"(itemStack0: $ItemStack$$Type): integer
public "getMod"(): string
public "getShareTag"(itemStack0: $ItemStack$$Type): $CompoundTag
public "getSweepHitBox"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): $AABB
public "getXpRepairRatio"(itemStack0: $ItemStack$$Type): float
public "hasCraftingRemainingItem"(itemStack0: $ItemStack$$Type): boolean
public "hasCustomEntity"(itemStack0: $ItemStack$$Type): boolean
public "initCapabilities"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): $ICapabilityProvider
public "isBookEnchantable"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "isCorrectToolForDrops"(itemStack0: $ItemStack$$Type, blockState1: $BlockState$$Type): boolean
public "isDamageable"(itemStack0: $ItemStack$$Type): boolean
public "isDamaged"(itemStack0: $ItemStack$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isEnderMask"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, enderMan2: $EnderMan$$Type): boolean
public "isNotReplaceableByPickAction"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer): boolean
public "isPiglinCurrency"(itemStack0: $ItemStack$$Type): boolean
public "makesPiglinsNeutral"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
/** @deprecated */
public "onArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type): void
public "onBlockStartBreak"(itemStack0: $ItemStack$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
public "onDestroyed"(itemEntity0: $ItemEntity$$Type, damageSource1: $DamageSource$$Type): void
public "onDroppedByPlayer"(itemStack0: $ItemStack$$Type, player1: $Player$$Type): boolean
public "onEntityItemUpdate"(itemStack0: $ItemStack$$Type, itemEntity1: $ItemEntity$$Type): boolean
public "onEntitySwing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "onHorseArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, mob2: $Mob$$Type): void
public "onInventoryTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type, int3: integer, int4: integer): void
public "onItemUseFirst"(itemStack0: $ItemStack$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
public "onLeftClickEntity"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): boolean
public "onStopUsing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): void
public "readShareTag"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): void
public "removeAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type): void
public "setArmorKnockbackResistance"(knockbackResistance: double): void
public "setArmorProtection"(armorProtection: double): void
public "setArmorToughness"(armorToughness: double): void
public "setAttackDamage"(attackDamage: double): void
public "setAttackSpeed"(attackSpeed: double): void
public "setDamage"(itemStack0: $ItemStack$$Type, int1: integer): void
public "setDigSpeed"(speed: float): void
public "setFoodProperties"(consumer: $Consumer$$Type<$FoodBuilder$$Type>): void
public "setTier"(c: $Consumer$$Type<$MutableToolTier$$Type>): void
public "shouldCauseBlockBreakReset"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "shouldCauseReequipAnimation"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean): boolean
public "withRarity"(rarity0: $Rarity$$Type): $ModItem
public "withTooltip"(component0: $Component$$Type): $ModItem
public "withTooltip"(string0: string): $ModItem
get "rarity"(): $Rarity
set "rarity"(value: $Rarity$$Type)
get "tooltip"(): $List<$Component>
set "tooltip"(value: $List$$Type<$Component$$Type>)
get "creativeTab"(): string
get "digSpeed"(): float
get "mod"(): string
set "armorKnockbackResistance"(value: double)
set "armorProtection"(value: double)
set "armorToughness"(value: double)
set "attackDamage"(value: double)
set "attackSpeed"(value: double)
set "digSpeed"(value: float)
set "foodProperties"(value: $Consumer$$Type<$FoodBuilder$$Type>)
set "tier"(value: $Consumer$$Type<$MutableToolTier$$Type>)
}
}

declare module "com.hollingsworth.arsnouveau.api.event.DispelEvent$Post" {
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $DispelEvent } from "com.hollingsworth.arsnouveau.api.event.DispelEvent"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $SpellContext$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import { $SpellStats$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellStats"

export class $DispelEvent$Post extends $DispelEvent {
constructor(hitResult0: $HitResult$$Type, level1: $Level$$Type, livingEntity2: $LivingEntity$$Type, spellStats3: $SpellStats$$Type, spellContext4: $SpellContext$$Type)
constructor()

}
}

declare module "com.hollingsworth.arsnouveau.common.util.SpellPartConfigUtil$AugmentCosts" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"

export class $SpellPartConfigUtil$AugmentCosts {
public "getAugmentCost"(resourceLocation0: $ResourceLocation$$Type, int1: integer): integer
}
}

declare module "com.hollingsworth.arsnouveau.common.light.LambDynamicLight" {
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $Level } from "net.minecraft.world.level.Level"

export interface $LambDynamicLight {
"dynamicLightTick"(): void
"getDynamicLightWorld"(): $Level
"getDynamicLightX"(): double
"getDynamicLightY"(): double
"getDynamicLightZ"(): double
"getLuminance"(): integer
"isDynamicLightEnabled"(): boolean
"lambdynlights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
"lambdynlights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
"resetDynamicLight"(): void
"setDynamicLightEnabled"(boolean0: boolean): void
"shouldUpdateDynamicLight"(): boolean
get "dynamicLightWorld"(): $Level
get "dynamicLightX"(): double
get "dynamicLightY"(): double
get "dynamicLightZ"(): double
get "luminance"(): integer
get "dynamicLightEnabled"(): boolean
set "dynamicLightEnabled"(value: boolean)
}

export namespace $LambDynamicLight {
const probejs$$marker: never
}
export abstract class $LambDynamicLight$$Static implements $LambDynamicLight {
}
}

declare module "com.hollingsworth.arsnouveau.common.mixin.structure.StructureTemplateAccessor" {
import { $List } from "java.util.List"
import { $StructureTemplate$Palette } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$Palette"
import { $StructureTemplate$StructureEntityInfo } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureEntityInfo"

export interface $StructureTemplateAccessor {
"getEntityInfoList"(): $List<$StructureTemplate$StructureEntityInfo>
"getPalettes"(): $List<$StructureTemplate$Palette>
get "entityInfoList"(): $List<$StructureTemplate$StructureEntityInfo>
get "palettes"(): $List<$StructureTemplate$Palette>
}

export namespace $StructureTemplateAccessor {
const probejs$$marker: never
}
export abstract class $StructureTemplateAccessor$$Static implements $StructureTemplateAccessor {
}
}

declare module "com.hollingsworth.arsnouveau.api.item.inv.SlotReference" {
import { $IItemHandler, $IItemHandler$$Type } from "net.minecraftforge.items.IItemHandler"

export class $SlotReference {
constructor(iItemHandler0: $IItemHandler$$Type, int1: integer)

public static "empty"(): $SlotReference
public "getHandler"(): $IItemHandler
public "getSlot"(): integer
public "isEmpty"(): boolean
get "handler"(): $IItemHandler
get "slot"(): integer
}
}

declare module "com.hollingsworth.arsnouveau.api.spell.SpellSchool" {
import { $AbstractSpellPart, $AbstractSpellPart$$Type } from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Set, $Set$$Type } from "java.util.Set"

export class $SpellSchool {
constructor(string0: string)

public "addSpellPart"(abstractSpellPart0: $AbstractSpellPart$$Type): boolean
public "getId"(): string
public "getSpellParts"(): $Set<$AbstractSpellPart>
public "getSubSchools"(): $Set<$SpellSchool>
public "getTextComponent"(): $Component
public "isPartOfSchool"(abstractSpellPart0: $AbstractSpellPart$$Type): boolean
public "setSpellParts"(set0: $Set$$Type<$AbstractSpellPart$$Type>): void
public "setSubSchools"(set0: $Set$$Type<$SpellSchool$$Type>): void
public "withSubSchool"(spellSchool0: $SpellSchool$$Type): $SpellSchool
get "id"(): string
get "spellParts"(): $Set<$AbstractSpellPart>
get "subSchools"(): $Set<$SpellSchool>
get "textComponent"(): $Component
set "spellParts"(value: $Set$$Type<$AbstractSpellPart$$Type>)
set "subSchools"(value: $Set$$Type<$SpellSchool$$Type>)
}
}

declare module "com.hollingsworth.arsnouveau.api.event.SpellResolveEvent$Pre" {
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $SpellResolveEvent } from "com.hollingsworth.arsnouveau.api.event.SpellResolveEvent"
import { $Spell$$Type } from "com.hollingsworth.arsnouveau.api.spell.Spell"
import { $SpellResolver$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellResolver"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $SpellContext$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $SpellResolveEvent$Pre extends $SpellResolveEvent {
constructor(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type, hitResult2: $HitResult$$Type, spell3: $Spell$$Type, spellContext4: $SpellContext$$Type, spellResolver5: $SpellResolver$$Type)
constructor()

}
}

declare module "com.hollingsworth.arsnouveau.api.source.ISourceTile" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISourceTile {
"addSource"(int0: integer): integer
"canAcceptSource"(): boolean
"getMaxSource"(): integer
"getSource"(): integer
"getTransferRate"(): integer
"removeSource"(int0: integer): integer
"setMaxSource"(int0: integer): void
"setSource"(int0: integer): integer
get "maxSource"(): integer
get "source"(): integer
get "transferRate"(): integer
set "maxSource"(value: integer)
set "source"(value: integer)
}

export namespace $ISourceTile {
const probejs$$marker: never
}
export abstract class $ISourceTile$$Static implements $ISourceTile {
}
}

declare module "com.hollingsworth.arsnouveau.common.mixin.MobAccessor" {
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $MobAccessor {
"callMobInteract"(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type): $InteractionResult
}

export namespace $MobAccessor {
const probejs$$marker: never
}
export abstract class $MobAccessor$$Static implements $MobAccessor {
}
}

declare module "com.hollingsworth.arsnouveau.api.nbt.ITagSerializable" {
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"

export interface $ITagSerializable {
"serialize"(): $CompoundTag
}

export namespace $ITagSerializable {
const probejs$$marker: never
}
export abstract class $ITagSerializable$$Static implements $ITagSerializable {
}
}

declare module "com.hollingsworth.arsnouveau.common.util.SpellPartConfigUtil$ComboLimits" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List$$Type } from "java.util.List"
import { $Set } from "java.util.Set"
import { $ForgeConfigSpec$ConfigValue$$Type } from "net.minecraftforge.common.ForgeConfigSpec$ConfigValue"

export class $SpellPartConfigUtil$ComboLimits {
constructor(configValue0: $ForgeConfigSpec$ConfigValue$$Type<$List$$Type<string>>)

public "contains"(resourceLocation0: $ResourceLocation$$Type): boolean
public "parseComboLimits"(): $Set<$ResourceLocation>
}
}

declare module "com.hollingsworth.arsnouveau.api.spell.IContextAttachment" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Serializable } from "java.io.Serializable"

export interface $IContextAttachment extends $Serializable {
"id"(): $ResourceLocation
}

export namespace $IContextAttachment {
const probejs$$marker: never
}
export abstract class $IContextAttachment$$Static implements $IContextAttachment {
}
}

declare module "com.hollingsworth.arsnouveau.api.spell.SpellContext$CasterType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SpellContext$CasterType {
static readonly "ENTITY": $SpellContext$CasterType
static readonly "LIVING_ENTITY": $SpellContext$CasterType
static readonly "OTHER": $SpellContext$CasterType
static readonly "PLAYER": $SpellContext$CasterType
static readonly "RUNE": $SpellContext$CasterType
static readonly "TURRET": $SpellContext$CasterType

constructor(string0: string)

get "id"(): string
set "id"(value: string)
}
}

declare module "com.hollingsworth.arsnouveau.common.event.timed.IRewindable" {
import { $RewindEntityData } from "com.hollingsworth.arsnouveau.common.spell.rewind.RewindEntityData"
import { $Stack } from "java.util.Stack"

export interface $IRewindable {
"getMotions"(): $Stack<$RewindEntityData>
"isRewinding"(): boolean
"setRewinding"(boolean0: boolean): void
get "motions"(): $Stack<$RewindEntityData>
get "rewinding"(): boolean
set "rewinding"(value: boolean)
}

export namespace $IRewindable {
const probejs$$marker: never
}
export abstract class $IRewindable$$Static implements $IRewindable {
}
}

declare module "com.hollingsworth.arsnouveau.common.entity.ColoredProjectile" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $Projectile } from "net.minecraft.world.entity.projectile.Projectile"
import { $ObjectList } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $ParticleColor$IntWrapper } from "com.hollingsworth.arsnouveau.client.particle.ParticleColor$IntWrapper"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $EntityDataAccessor } from "net.minecraft.network.syncher.EntityDataAccessor"
import { $ParticleColor, $ParticleColor$$Type } from "com.hollingsworth.arsnouveau.client.particle.ParticleColor"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $ColoredProjectile extends $Projectile {
static readonly "BLUE": $EntityDataAccessor<integer>
static readonly "GREEN": $EntityDataAccessor<integer>
static readonly "PARTICLE_TAG": $EntityDataAccessor<$CompoundTag>
static readonly "RED": $EntityDataAccessor<integer>

constructor(entityType0: $EntityType$$Type<$ColoredProjectile$$Type>, level1: $Level$$Type, double2: double, double3: double, double4: double)
constructor(entityType0: $EntityType$$Type<$ColoredProjectile$$Type>, level1: $Level$$Type, livingEntity2: $LivingEntity$$Type)
constructor(entityType0: $EntityType$$Type<$ColoredProjectile$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canaryOnBlockCacheDeleted"(): void
public "canaryOnBlockCacheSet"(blockState0: $BlockState$$Type): void
public "canarySetClimbingMobCachingSectionUpdateBehavior"(boolean0: boolean): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getClassification"(boolean0: boolean): $MobCategory
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public static "getMatched"(entity: $Entity$$Type): $ObjectList<$ResourceLocation>
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getParticleColor"(): $ParticleColor
public "getParticleColorWrapper"(): $ParticleColor$IntWrapper
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getProfile"(): $GameProfile
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabled"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isRainbow"(): boolean
public "isWaterCreature"(): boolean
public "m_7380_"(compoundTag0: $CompoundTag$$Type): void
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(distance: double): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "self"(): $Entity
public "serializeNBT"(): $CompoundTag
public "setColor"(particleColor0: $ParticleColor$$Type): void
public "setDynamicLightEnabled"(boolean0: boolean): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "spawn"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
get "rainbowStartTick"(): integer
set "rainbowStartTick"(value: integer)
get "block"(): $BlockContainerJS
get "displayName"(): $Component
get "facing"(): $Direction
get "item"(): $ItemStack
get "level"(): $Level
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "particleColor"(): $ParticleColor
get "particleColorWrapper"(): $ParticleColor$IntWrapper
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabled"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "rainbow"(): boolean
get "waterCreature"(): boolean
set "color"(value: $ParticleColor$$Type)
set "dynamicLightEnabled"(value: boolean)
set "hexereiDynamicLightEnabled"(value: boolean)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "com.hollingsworth.arsnouveau.api.sound.ConfiguredSpellSound" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $SpellSound, $SpellSound$$Type } from "com.hollingsworth.arsnouveau.api.sound.SpellSound"

export class $ConfiguredSpellSound {
static "DEFAULT": $ConfiguredSpellSound
static "EMPTY": $ConfiguredSpellSound

constructor(spellSound0: $SpellSound$$Type)
constructor(spellSound0: $SpellSound$$Type, float1: float, float2: float)

public static "fromTag"(compoundTag0: $CompoundTag$$Type): $ConfiguredSpellSound
public "serialize"(): $CompoundTag
get "pitch"(): float
set "pitch"(value: float)
get "sound"(): $SpellSound
set "sound"(value: $SpellSound$$Type)
get "volume"(): float
set "volume"(value: float)
}
}

declare module "com.hollingsworth.arsnouveau.api.item.inv.MultiInsertReference" {
import { $List$$Type } from "java.util.List"
import { $SlotReference, $SlotReference$$Type } from "com.hollingsworth.arsnouveau.api.item.inv.SlotReference"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MultiSlotReference } from "com.hollingsworth.arsnouveau.api.item.inv.MultiSlotReference"

export class $MultiInsertReference extends $MultiSlotReference<$SlotReference> {
constructor(itemStack0: $ItemStack$$Type, list1: $List$$Type<$SlotReference$$Type>)

public "getRemainder"(): $ItemStack
get "remainder"(): $ItemStack
}
}

declare module "com.hollingsworth.arsnouveau.common.entity.EntityProjectileSpell" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $ColoredProjectile } from "com.hollingsworth.arsnouveau.common.entity.ColoredProjectile"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $IEntityAdditionalSpawnData } from "net.minecraftforge.entity.IEntityAdditionalSpawnData"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $SpellResolver, $SpellResolver$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellResolver"
import { $ObjectList } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $Set, $Set$$Type } from "java.util.Set"
import { $EntityDataAccessor } from "net.minecraft.network.syncher.EntityDataAccessor"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $HitResult, $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $EntityProjectileSpell extends $ColoredProjectile implements $IEntityAdditionalSpawnData {
static readonly "OWNER_ID": $EntityDataAccessor<integer>
"canTraversePortals": boolean

constructor(entityType0: $EntityType$$Type<$EntityProjectileSpell$$Type>, level1: $Level$$Type, spellResolver2: $SpellResolver$$Type)
constructor(level0: $Level$$Type, double1: double, double2: double, double3: double)
constructor(entityType0: $EntityType$$Type<$EntityProjectileSpell$$Type>, level1: $Level$$Type, livingEntity2: $LivingEntity$$Type)
constructor(entityType0: $EntityType$$Type<$EntityProjectileSpell$$Type>, level1: $Level$$Type, double2: double, double3: double, double4: double)
constructor(entityType0: $EntityType$$Type<$EntityProjectileSpell$$Type>, level1: $Level$$Type)
constructor(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type)
constructor(level0: $Level$$Type, spellResolver1: $SpellResolver$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "bounce"(blockHitResult0: $BlockHitResult$$Type): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canBounce"(): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canTraversePortals"(): boolean
public "canaryOnBlockCacheDeleted"(): void
public "canaryOnBlockCacheSet"(blockState0: $BlockState$$Type): void
public "canarySetClimbingMobCachingSectionUpdateBehavior"(boolean0: boolean): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getClassification"(boolean0: boolean): $MobCategory
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getExpirationTime"(): integer
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHitResult"(): $HitResult
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public static "getMatched"(entity: $Entity$$Type): $ObjectList<$ResourceLocation>
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getNextHitPosition"(): $Vec3
public "getParticleDelay"(): integer
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getProfile"(): $GameProfile
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabled"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isWaterCreature"(): boolean
public "m_7378_"(compoundTag0: $CompoundTag$$Type): void
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "playParticles"(): void
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(distance: double): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "readSpawnData"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "self"(): $Entity
public "serializeNBT"(): $CompoundTag
public "setDynamicLightEnabled"(boolean0: boolean): void
public "setGravity"(boolean0: boolean): $EntityProjectileSpell
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shoot"(entity0: $Entity$$Type, float1: float, float2: float, float3: float, float4: float, float5: float): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "spawn"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public "tickNextPosition"(): void
public "traceAnyHit"(hitResult0: $HitResult$$Type, vec31: $Vec3$$Type, vec32: $Vec3$$Type): void
public "transformHitResult"(hitResult0: $HitResult$$Type): $HitResult
public "writeSpawnData"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "age"(): integer
set "age"(value: integer)
/** @deprecated */
get "expireTime"(): integer
/** @deprecated */
set "expireTime"(value: integer)
get "hitList"(): $Set<$BlockPos>
set "hitList"(value: $Set$$Type<$BlockPos$$Type>)
get "isNoGravity"(): boolean
set "isNoGravity"(value: boolean)
get "numSensitive"(): integer
set "numSensitive"(value: integer)
get "pierceLeft"(): integer
set "pierceLeft"(value: integer)
get "prismRedirect"(): integer
set "prismRedirect"(value: integer)
get "spellResolver"(): $SpellResolver
set "spellResolver"(value: $SpellResolver$$Type)
get "block"(): $BlockContainerJS
get "displayName"(): $Component
get "expirationTime"(): integer
get "facing"(): $Direction
get "hitResult"(): $HitResult
get "item"(): $ItemStack
get "level"(): $Level
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "nextHitPosition"(): $Vec3
get "particleDelay"(): integer
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabled"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "waterCreature"(): boolean
set "dynamicLightEnabled"(value: boolean)
set "gravity"(value: boolean)
set "hexereiDynamicLightEnabled"(value: boolean)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "com.hollingsworth.arsnouveau.api.spell.AbstractEffect" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AbstractSpellPart } from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ForgeConfigSpec$Builder$$Type } from "net.minecraftforge.common.ForgeConfigSpec$Builder"
import { $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $EntityHitResult$$Type } from "net.minecraft.world.phys.EntityHitResult"
import { $ForgeConfigSpec$DoubleValue, $ForgeConfigSpec$DoubleValue$$Type } from "net.minecraftforge.common.ForgeConfigSpec$DoubleValue"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$$Type } from "net.minecraftforge.common.ForgeConfigSpec$IntValue"
import { $SpellStats$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellStats"
import { $Player } from "net.minecraft.world.entity.player.Player"
import { $ISummon$$Type } from "com.hollingsworth.arsnouveau.api.entity.ISummon"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $SpellResolver$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellResolver"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $SpellContext$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $AbstractEffect extends $AbstractSpellPart {
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string)
constructor(string0: string, string1: string)

public "addAmpConfig"(builder0: $ForgeConfigSpec$Builder$$Type, double1: double): void
public "addDamageConfig"(builder0: $ForgeConfigSpec$Builder$$Type, double1: double): void
public "addDefaultPotionConfig"(builder0: $ForgeConfigSpec$Builder$$Type): void
public "addDurationDownConfig"(builder0: $ForgeConfigSpec$Builder$$Type, int1: integer): void
/** @deprecated */
public "addExtendTimeConfig"(builder0: $ForgeConfigSpec$Builder$$Type, int1: integer): void
public "addExtendTimeTicksConfig"(builder0: $ForgeConfigSpec$Builder$$Type, int1: integer): void
public "addGenericDouble"(builder0: $ForgeConfigSpec$Builder$$Type, double1: double, string2: string, string3: string): void
public "addGenericInt"(builder0: $ForgeConfigSpec$Builder$$Type, int1: integer, string2: string, string3: string): void
public "addPotionConfig"(builder0: $ForgeConfigSpec$Builder$$Type, int1: integer): void
public "addRandomizeConfig"(builder0: $ForgeConfigSpec$Builder$$Type, float1: float): void
public "applyEnchantments"(spellStats0: $SpellStats$$Type, itemStack1: $ItemStack$$Type): void
public "applySummoningSickness"(livingEntity0: $LivingEntity$$Type, int1: integer): void
public "canBlockBeHarvested"(spellStats0: $SpellStats$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type): boolean
public "canSummon"(livingEntity0: $LivingEntity$$Type): boolean
public "getBaseHarvestLevel"(spellStats0: $SpellStats$$Type): integer
public "getPlayer"(livingEntity0: $LivingEntity$$Type, serverLevel1: $ServerLevel$$Type): $Player
public "isNotFakePlayer"(entity0: $Entity$$Type): boolean
public "isRealPlayer"(entity0: $Entity$$Type): boolean
public "onResolve"(hitResult0: $HitResult$$Type, level1: $Level$$Type, livingEntity2: $LivingEntity$$Type, spellStats3: $SpellStats$$Type, spellContext4: $SpellContext$$Type, spellResolver5: $SpellResolver$$Type): void
public "onResolveBlock"(blockHitResult0: $BlockHitResult$$Type, level1: $Level$$Type, livingEntity2: $LivingEntity$$Type, spellStats3: $SpellStats$$Type, spellContext4: $SpellContext$$Type, spellResolver5: $SpellResolver$$Type): void
public "onResolveEntity"(entityHitResult0: $EntityHitResult$$Type, level1: $Level$$Type, livingEntity2: $LivingEntity$$Type, spellStats3: $SpellStats$$Type, spellContext4: $SpellContext$$Type, spellResolver5: $SpellResolver$$Type): void
public "safelyGetHitPos"(hitResult0: $HitResult$$Type): $Vec3
public "summonLivingEntity"(hitResult0: $HitResult$$Type, level1: $Level$$Type, livingEntity2: $LivingEntity$$Type, spellStats3: $SpellStats$$Type, spellContext4: $SpellContext$$Type, spellResolver5: $SpellResolver$$Type, iSummon6: $ISummon$$Type): void
get "AMP_VALUE"(): $ForgeConfigSpec$DoubleValue
set "AMP_VALUE"(value: $ForgeConfigSpec$DoubleValue$$Type)
get "DAMAGE"(): $ForgeConfigSpec$DoubleValue
set "DAMAGE"(value: $ForgeConfigSpec$DoubleValue$$Type)
get "DURATION_DOWN_TIME"(): $ForgeConfigSpec$IntValue
set "DURATION_DOWN_TIME"(value: $ForgeConfigSpec$IntValue$$Type)
get "EXTEND_TIME"(): $ForgeConfigSpec$IntValue
set "EXTEND_TIME"(value: $ForgeConfigSpec$IntValue$$Type)
get "GENERIC_DOUBLE"(): $ForgeConfigSpec$DoubleValue
set "GENERIC_DOUBLE"(value: $ForgeConfigSpec$DoubleValue$$Type)
get "GENERIC_INT"(): $ForgeConfigSpec$IntValue
set "GENERIC_INT"(value: $ForgeConfigSpec$IntValue$$Type)
get "POTION_TIME"(): $ForgeConfigSpec$IntValue
set "POTION_TIME"(value: $ForgeConfigSpec$IntValue$$Type)
get "RANDOMIZE_CHANCE"(): $ForgeConfigSpec$DoubleValue
set "RANDOMIZE_CHANCE"(value: $ForgeConfigSpec$DoubleValue$$Type)
}
}

declare module "com.hollingsworth.arsnouveau.api.spell.SpellContext" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AbstractSpellPart } from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import { $Cloneable } from "java.lang.Cloneable"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $DelayedSpellEvent, $DelayedSpellEvent$$Type } from "com.hollingsworth.arsnouveau.api.event.DelayedSpellEvent"
import { $CancelReason, $CancelReason$$Type } from "com.hollingsworth.arsnouveau.api.spell.CancelReason"
import { $ParticleColor, $ParticleColor$$Type } from "com.hollingsworth.arsnouveau.client.particle.ParticleColor"
import { $SpellContext$CasterType } from "com.hollingsworth.arsnouveau.api.spell.SpellContext$CasterType"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $IContextAttachment, $IContextAttachment$$Type } from "com.hollingsworth.arsnouveau.api.spell.IContextAttachment"
import { $IWrappedCaster, $IWrappedCaster$$Type } from "com.hollingsworth.arsnouveau.api.spell.wrapped_caster.IWrappedCaster"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Spell, $Spell$$Type } from "com.hollingsworth.arsnouveau.api.spell.Spell"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $SpellContext implements $Cloneable {
constructor(level0: $Level$$Type, spell1: $Spell$$Type, livingEntity2: $LivingEntity$$Type, iWrappedCaster3: $IWrappedCaster$$Type, itemStack4: $ItemStack$$Type)
constructor(level0: $Level$$Type, spell1: $Spell$$Type, livingEntity2: $LivingEntity$$Type, iWrappedCaster3: $IWrappedCaster$$Type)

public "delay"(delayedSpellEvent0: $DelayedSpellEvent$$Type): void
public static "fromEntity"(spell0: $Spell$$Type, livingEntity1: $LivingEntity$$Type, itemStack2: $ItemStack$$Type): $SpellContext
public "getAttachment"<T extends $IContextAttachment>(resourceLocation0: $ResourceLocation$$Type): T
public "getCancelReason"(): $CancelReason
public "getCaster"(): $IWrappedCaster
public "getCasterTool"(): $ItemStack
public "getColors"(): $ParticleColor
public "getCurrentIndex"(): integer
public "getDelayedSpellEvent"(): $DelayedSpellEvent
public "getOrCreateAttachment"<T extends $IContextAttachment>(resourceLocation0: $ResourceLocation$$Type, t1: T): T
public "getPreviousContext"(): $SpellContext
public "getRemainingSpell"(): $Spell
public "getSpell"(): $Spell
/** @deprecated */
public "getType"(): $SpellContext$CasterType
public "getUnwrappedCaster"(): $LivingEntity
public "hasNextPart"(): boolean
public "isCanceled"(): boolean
public "isDelayed"(): boolean
public "makeChildContext"(): $SpellContext
public "nextPart"(): $AbstractSpellPart
public "resetCastCounter"(): $SpellContext
public "setCanceled"(boolean0: boolean): void
public "setCanceled"(boolean0: boolean, cancelReason1: $CancelReason$$Type): boolean
public "setCaster"(livingEntity0: $LivingEntity$$Type): void
public "setCasterTool"(itemStack0: $ItemStack$$Type): void
public "setColors"(particleColor0: $ParticleColor$$Type): void
public "setCurrentIndex"(int0: integer): void
public "stop"(): void
public "withColors"(particleColor0: $ParticleColor$$Type): $SpellContext
public "withParent"(spellContext0: $SpellContext$$Type): $SpellContext
public "withSpell"(spell0: $Spell$$Type): $SpellContext
public "withWrappedCaster"(iWrappedCaster0: $IWrappedCaster$$Type): $SpellContext
get "attachments"(): $Map<$ResourceLocation, $IContextAttachment>
set "attachments"(value: $Map$$Type<$ResourceLocation$$Type, $IContextAttachment$$Type>)
get "castingTile"(): $BlockEntity
set "castingTile"(value: $BlockEntity$$Type)
get "tag"(): $CompoundTag
set "tag"(value: $CompoundTag$$Type)
get "cancelReason"(): $CancelReason
get "caster"(): $IWrappedCaster
get "casterTool"(): $ItemStack
get "colors"(): $ParticleColor
get "currentIndex"(): integer
get "delayedSpellEvent"(): $DelayedSpellEvent
get "previousContext"(): $SpellContext
get "remainingSpell"(): $Spell
get "spell"(): $Spell
get "type"(): $SpellContext$CasterType
get "unwrappedCaster"(): $LivingEntity
get "canceled"(): boolean
get "delayed"(): boolean
set "canceled"(value: boolean)
set "caster"(value: $LivingEntity$$Type)
set "casterTool"(value: $ItemStack$$Type)
set "colors"(value: $ParticleColor$$Type)
set "currentIndex"(value: integer)
}
}

declare module "com.hollingsworth.arsnouveau.api.event.SpellProjectileHitEvent" {
import { $HitResult, $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityEvent } from "net.minecraftforge.event.entity.EntityEvent"
import { $EntityProjectileSpell, $EntityProjectileSpell$$Type } from "com.hollingsworth.arsnouveau.common.entity.EntityProjectileSpell"

export class $SpellProjectileHitEvent extends $EntityEvent {
constructor()
constructor(entityProjectileSpell0: $EntityProjectileSpell$$Type, hitResult1: $HitResult$$Type)

public "getHitResult"(): $HitResult
public "getProjectile"(): $EntityProjectileSpell
get "hit"(): $HitResult
set "hit"(value: $HitResult$$Type)
get "projectile"(): $EntityProjectileSpell
set "projectile"(value: $EntityProjectileSpell$$Type)
get "hitResult"(): $HitResult
}
}

declare module "com.hollingsworth.arsnouveau.common.spell.rewind.RewindEntityData" {
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $IRewindCallback } from "com.hollingsworth.arsnouveau.common.spell.rewind.IRewindCallback"
import { $RewindEvent$$Type } from "com.hollingsworth.arsnouveau.common.event.timed.RewindEvent"

export class $RewindEntityData implements $IRewindCallback {
constructor(long0: long, vec31: $Vec3$$Type, vec32: $Vec3$$Type, float3: float)

public "onRewind"(rewindEvent0: $RewindEvent$$Type): void
get "deltaMovement"(): $Vec3
set "deltaMovement"(value: $Vec3$$Type)
get "gameTime"(): long
set "gameTime"(value: long)
get "health"(): float
set "health"(value: float)
get "position"(): $Vec3
set "position"(value: $Vec3$$Type)
}
}

declare module "com.hollingsworth.arsnouveau.api.item.inv.InteractType" {
import { $Enum } from "java.lang.Enum"

export class $InteractType extends $Enum<$InteractType> {
static readonly "EXTRACT": $InteractType
static readonly "INSERT": $InteractType

public static "valueOf"(string0: string): $InteractType
public static "values"(): $InteractType[]
}
}

declare module "com.hollingsworth.arsnouveau.api.event.EffectResolveEvent$Post" {
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EffectResolveEvent } from "com.hollingsworth.arsnouveau.api.event.EffectResolveEvent"
import { $AbstractEffect$$Type } from "com.hollingsworth.arsnouveau.api.spell.AbstractEffect"
import { $Spell$$Type } from "com.hollingsworth.arsnouveau.api.spell.Spell"
import { $SpellResolver$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellResolver"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $SpellContext$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import { $SpellStats$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellStats"

export class $EffectResolveEvent$Post extends $EffectResolveEvent {
constructor(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type, hitResult2: $HitResult$$Type, spell3: $Spell$$Type, spellContext4: $SpellContext$$Type, abstractEffect5: $AbstractEffect$$Type, spellStats6: $SpellStats$$Type, spellResolver7: $SpellResolver$$Type)
constructor()

}
}

declare module "com.hollingsworth.arsnouveau.api.event.SpellResolveEvent" {
import { $HitResult, $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $SpellResolver, $SpellResolver$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellResolver"
import { $Spell, $Spell$$Type } from "com.hollingsworth.arsnouveau.api.spell.Spell"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $SpellContext, $SpellContext$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $SpellResolveEvent extends $Event {
constructor()

get "context"(): $SpellContext
set "context"(value: $SpellContext$$Type)
get "rayTraceResult"(): $HitResult
set "rayTraceResult"(value: $HitResult$$Type)
get "resolver"(): $SpellResolver
set "resolver"(value: $SpellResolver$$Type)
get "shooter"(): $LivingEntity
set "shooter"(value: $LivingEntity$$Type)
get "spell"(): $Spell
set "spell"(value: $Spell$$Type)
get "world"(): $Level
set "world"(value: $Level$$Type)
}
}

declare module "com.hollingsworth.arsnouveau.client.particle.ParticleColor" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Cloneable } from "java.lang.Cloneable"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Random } from "java.util.Random"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $ParticleColor$IntWrapper } from "com.hollingsworth.arsnouveau.client.particle.ParticleColor$IntWrapper"
import { $IParticleColor } from "com.hollingsworth.arsnouveau.api.particle.IParticleColor"

export class $ParticleColor implements $IParticleColor, $Cloneable {
static readonly "BLACK": $ParticleColor
static readonly "BLUE": $ParticleColor
static readonly "BROWN": $ParticleColor
static readonly "CYAN": $ParticleColor
static readonly "DEFAULT": $ParticleColor
static readonly "FROM_HIGHLIGHT": $ParticleColor
static readonly "GRAY": $ParticleColor
static readonly "GREEN": $ParticleColor
static readonly "ID": $ResourceLocation
static readonly "LIGHT_BLUE": $ParticleColor
static readonly "LIGHT_GRAY": $ParticleColor
static readonly "LIME": $ParticleColor
static readonly "MAGENTA": $ParticleColor
static readonly "ORANGE": $ParticleColor
static readonly "PINK": $ParticleColor
static readonly "PURPLE": $ParticleColor
static readonly "RED": $ParticleColor
static readonly "TO_HIGHLIGHT": $ParticleColor
static readonly "WHITE": $ParticleColor
static readonly "YELLOW": $ParticleColor
static readonly "random": $Random

constructor(float0: float, float1: float, float2: float)
constructor(compoundTag0: $CompoundTag$$Type)
constructor(int0: integer, int1: integer, int2: integer)
constructor(double0: double, double1: double, double2: double)

public static "defaultParticleColor"(): $ParticleColor
public "euclideanDistance"(particleColor0: $ParticleColor$$Type): double
public static "fromInt"(int0: integer): $ParticleColor
public static "fromString"(string0: string): $ParticleColor
public "getBlue"(): float
public "getBlueInt"(): integer
public "getColor"(): integer
public "getGreen"(): float
public "getGreenInt"(): integer
public "getRed"(): float
public "getRedInt"(): integer
public "getRegistryName"(): $ResourceLocation
public static "makeRandomColor"(int0: integer, int1: integer, int2: integer, randomSource3: $RandomSource$$Type): $ParticleColor
public "nextColor"(randomSource0: $RandomSource$$Type): $ParticleColor
public "serialize"(): $CompoundTag
public "toWrapper"(): $ParticleColor$IntWrapper
public "transition"(int0: integer): $ParticleColor
get "blue"(): float
get "blueInt"(): integer
get "color"(): integer
get "green"(): float
get "greenInt"(): integer
get "red"(): float
get "redInt"(): integer
get "registryName"(): $ResourceLocation
}
}

declare module "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder" {
import { $AbstractSpellPart$$Type } from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $List$$Type } from "java.util.List"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $AbstractAugment$$Type } from "com.hollingsworth.arsnouveau.api.spell.AbstractAugment"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $SpellContext$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import { $SpellStats } from "com.hollingsworth.arsnouveau.api.spell.SpellStats"

export class $SpellStats$Builder {
constructor()

public "addAOE"(double0: double): $SpellStats$Builder
public "addAccelerationModifier"(float0: float): $SpellStats$Builder
public "addAmplification"(double0: double): $SpellStats$Builder
public "addAugment"(abstractAugment0: $AbstractAugment$$Type): $SpellStats$Builder
public "addDamageModifier"(double0: double): $SpellStats$Builder
public "addDurationModifier"(double0: double): $SpellStats$Builder
public "addItem"(itemStack0: $ItemStack$$Type): $SpellStats$Builder
public "addItemsFromEntity"(livingEntity0: $LivingEntity$$Type): $SpellStats$Builder
public "build"(abstractSpellPart0: $AbstractSpellPart$$Type, hitResult1: $HitResult$$Type, level2: $Level$$Type, livingEntity3: $LivingEntity$$Type, spellContext4: $SpellContext$$Type): $SpellStats
public "build"(): $SpellStats
public "randomize"(): $SpellStats$Builder
public "setAOE"(double0: double): $SpellStats$Builder
public "setAccelerationModifier"(float0: float): $SpellStats$Builder
public "setAmplification"(double0: double): $SpellStats$Builder
public "setAugments"(list0: $List$$Type<$AbstractAugment$$Type>): $SpellStats$Builder
public "setDamageModifier"(double0: double): $SpellStats$Builder
/** @deprecated */
public "setDurationModifier"(double0: double): $SpellStats$Builder
public "setItems"(list0: $List$$Type<$ItemStack$$Type>): $SpellStats$Builder
public "setSensitive"(): $SpellStats$Builder
set "aOE"(value: double)
set "accelerationModifier"(value: float)
set "amplification"(value: double)
set "augments"(value: $List$$Type<$AbstractAugment$$Type>)
set "damageModifier"(value: double)
set "durationModifier"(value: double)
set "items"(value: $List$$Type<$ItemStack$$Type>)
}
}

declare module "com.hollingsworth.arsnouveau.api.event.MaxManaCalcEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"

export class $MaxManaCalcEvent extends $LivingEvent {
constructor(livingEntity0: $LivingEntity$$Type, int1: integer)
constructor()

public "getMax"(): integer
public "getReserve"(): float
public "setMax"(int0: integer): void
public "setReserve"(float0: float): void
get "max"(): integer
get "reserve"(): float
set "max"(value: integer)
set "reserve"(value: float)
}
}

declare module "com.hollingsworth.arsnouveau.api.item.ISpellModifier" {
import { $AbstractSpellPart$$Type } from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $SpellStats$Builder, $SpellStats$Builder$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $SpellContext$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export interface $ISpellModifier {
"applyModifiers"(builder0: $SpellStats$Builder$$Type, abstractSpellPart1: $AbstractSpellPart$$Type, hitResult2: $HitResult$$Type, level3: $Level$$Type, livingEntity4: $LivingEntity$$Type, spellContext5: $SpellContext$$Type): $SpellStats$Builder
}

export namespace $ISpellModifier {
const probejs$$marker: never
}
export abstract class $ISpellModifier$$Static implements $ISpellModifier {
}
}

declare module "com.hollingsworth.arsnouveau.api.particle.IParticleColor" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $ITagSerializable } from "com.hollingsworth.arsnouveau.api.nbt.ITagSerializable"
import { $Cloneable } from "java.lang.Cloneable"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $ParticleColor } from "com.hollingsworth.arsnouveau.client.particle.ParticleColor"

export interface $IParticleColor extends $ITagSerializable, $Cloneable {
"getBlue"(): float
"getBlueInt"(): integer
"getColor"(): integer
"getGreen"(): float
"getGreenInt"(): integer
"getRed"(): float
"getRedInt"(): integer
"getRegistryName"(): $ResourceLocation
"serialize"(): $CompoundTag
"transition"(int0: integer): $ParticleColor
get "blue"(): float
get "blueInt"(): integer
get "color"(): integer
get "green"(): float
get "greenInt"(): integer
get "red"(): float
get "redInt"(): integer
get "registryName"(): $ResourceLocation
}

export namespace $IParticleColor {
const probejs$$marker: never
}
export abstract class $IParticleColor$$Static implements $IParticleColor {
}
}

declare module "com.hollingsworth.arsnouveau.api.entity.ISummon" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $EntityGetter } from "net.minecraft.world.level.EntityGetter"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $OwnableEntity } from "net.minecraft.world.entity.OwnableEntity"

export interface $ISummon extends $OwnableEntity {
"getLivingEntity"(): $LivingEntity
"getOwner"(): $LivingEntity
"getOwnerAlt"(): $LivingEntity
"getOwnerUUID"(): $UUID
"getTicksLeft"(): integer
"level"(): $EntityGetter
"onSummonDeath"(level0: $Level$$Type, damageSource1: $DamageSource$$Type, boolean2: boolean): void
"readOwner"(serverLevel0: $ServerLevel$$Type, compoundTag1: $CompoundTag$$Type): $Entity
"setOwnerID"(uUID0: $UUID$$Type): void
"setTicksLeft"(int0: integer): void
"writeOwner"(compoundTag0: $CompoundTag$$Type): void
get "livingEntity"(): $LivingEntity
get "owner"(): $LivingEntity
get "ownerAlt"(): $LivingEntity
get "ownerUUID"(): $UUID
get "ticksLeft"(): integer
set "ownerID"(value: $UUID$$Type)
set "ticksLeft"(value: integer)
}

export namespace $ISummon {
const probejs$$marker: never
}
export abstract class $ISummon$$Static implements $ISummon {
}
}

declare module "com.hollingsworth.arsnouveau.api.event.SummonEvent$Death" {
import { $ISummon, $ISummon$$Type } from "com.hollingsworth.arsnouveau.api.entity.ISummon"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $SummonEvent$Death extends $Event {
constructor(level0: $Level$$Type, iSummon1: $ISummon$$Type, damageSource2: $DamageSource$$Type, boolean3: boolean)
constructor()

get "source"(): $DamageSource
set "source"(value: $DamageSource$$Type)
get "summon"(): $ISummon
set "summon"(value: $ISummon$$Type)
get "wasExpiration"(): boolean
set "wasExpiration"(value: boolean)
get "world"(): $Level
set "world"(value: $Level$$Type)
}
}

declare module "com.hollingsworth.arsnouveau.api.sound.SpellSound" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"

export class $SpellSound {
constructor(resourceLocation0: $ResourceLocation$$Type, soundEvent1: $SoundEvent$$Type, component2: $Component$$Type)
constructor(soundEvent0: $SoundEvent$$Type, component1: $Component$$Type)

public static "fromTag"(compoundTag0: $CompoundTag$$Type): $SpellSound
public "getId"(): $ResourceLocation
public "getSoundEvent"(): $SoundEvent
public "getSoundName"(): $Component
public "getTexturePath"(): $ResourceLocation
public "serialize"(): $CompoundTag
public "setId"(resourceLocation0: $ResourceLocation$$Type): void
public "setSoundEvent"(soundEvent0: $SoundEvent$$Type): void
public "setSoundName"(component0: $Component$$Type): void
get "id"(): $ResourceLocation
get "soundEvent"(): $SoundEvent
get "soundName"(): $Component
get "texturePath"(): $ResourceLocation
set "id"(value: $ResourceLocation$$Type)
set "soundEvent"(value: $SoundEvent$$Type)
set "soundName"(value: $Component$$Type)
}
}

declare module "com.hollingsworth.arsnouveau.api.event.SpellDamageEvent$Pre" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $SpellContext$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import { $SpellDamageEvent } from "com.hollingsworth.arsnouveau.api.event.SpellDamageEvent"

export class $SpellDamageEvent$Pre extends $SpellDamageEvent {
constructor(damageSource0: $DamageSource$$Type, livingEntity1: $LivingEntity$$Type, entity2: $Entity$$Type, float3: float, spellContext4: $SpellContext$$Type)
constructor()

}
}

declare module "com.hollingsworth.arsnouveau.api.event.SpellCastEvent" {
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $Spell, $Spell$$Type } from "com.hollingsworth.arsnouveau.api.spell.Spell"
import { $Level } from "net.minecraft.world.level.Level"
import { $SpellContext, $SpellContext$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $SpellCastEvent extends $LivingEvent {
constructor(spell0: $Spell$$Type, spellContext1: $SpellContext$$Type)
constructor()

public "getWorld"(): $Level
get "context"(): $SpellContext
set "context"(value: $SpellContext$$Type)
get "spell"(): $Spell
set "spell"(value: $Spell$$Type)
get "world"(): $Level
}
}

declare module "com.hollingsworth.arsnouveau.common.mixin.structure.StructureProcessorAccessor" {
import { $StructureProcessorType } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorType"

export interface $StructureProcessorAccessor {
"callGetType"(): $StructureProcessorType<any>
}

export namespace $StructureProcessorAccessor {
const probejs$$marker: never
}
export abstract class $StructureProcessorAccessor$$Static implements $StructureProcessorAccessor {
}
}

declare module "com.hollingsworth.arsnouveau.api.spell.AbstractCastMethod" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AbstractSpellPart } from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $CastResolveType } from "com.hollingsworth.arsnouveau.api.spell.CastResolveType"
import { $SpellStats$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellStats"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $SpellResolver$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellResolver"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $SpellContext$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $AbstractCastMethod extends $AbstractSpellPart {
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string)
constructor(string0: string, string1: string)

public "onCast"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, level2: $Level$$Type, spellStats3: $SpellStats$$Type, spellContext4: $SpellContext$$Type, spellResolver5: $SpellResolver$$Type): $CastResolveType
public "onCastOnBlock"(blockHitResult0: $BlockHitResult$$Type, livingEntity1: $LivingEntity$$Type, spellStats2: $SpellStats$$Type, spellContext3: $SpellContext$$Type, spellResolver4: $SpellResolver$$Type): $CastResolveType
public "onCastOnBlock"(useOnContext0: $UseOnContext$$Type, spellStats1: $SpellStats$$Type, spellContext2: $SpellContext$$Type, spellResolver3: $SpellResolver$$Type): $CastResolveType
public "onCastOnEntity"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, entity2: $Entity$$Type, interactionHand3: $InteractionHand$$Type, spellStats4: $SpellStats$$Type, spellContext5: $SpellContext$$Type, spellResolver6: $SpellResolver$$Type): $CastResolveType
}
}

declare module "com.hollingsworth.arsnouveau.api.event.SpellResolveEvent$Post" {
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $SpellResolveEvent } from "com.hollingsworth.arsnouveau.api.event.SpellResolveEvent"
import { $Spell$$Type } from "com.hollingsworth.arsnouveau.api.spell.Spell"
import { $SpellResolver$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellResolver"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $SpellContext$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $SpellResolveEvent$Post extends $SpellResolveEvent {
constructor(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type, hitResult2: $HitResult$$Type, spell3: $Spell$$Type, spellContext4: $SpellContext$$Type, spellResolver5: $SpellResolver$$Type)
constructor()

}
}

declare module "com.hollingsworth.arsnouveau.api.event.SpellDamageEvent$Post" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $SpellContext$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import { $SpellDamageEvent } from "com.hollingsworth.arsnouveau.api.event.SpellDamageEvent"

export class $SpellDamageEvent$Post extends $SpellDamageEvent {
constructor(damageSource0: $DamageSource$$Type, livingEntity1: $LivingEntity$$Type, entity2: $Entity$$Type, float3: float, spellContext4: $SpellContext$$Type)
constructor()

}
}

declare module "com.hollingsworth.arsnouveau.api.event.SpellCostCalcEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $SpellContext, $SpellContext$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $SpellCostCalcEvent extends $Event {
constructor(spellContext0: $SpellContext$$Type, int1: integer)
constructor()

get "context"(): $SpellContext
set "context"(value: $SpellContext$$Type)
get "currentCost"(): integer
set "currentCost"(value: integer)
}
}

declare module "com.hollingsworth.arsnouveau.api.item.inv.InventoryManager" {
import { $ExtractedStack } from "com.hollingsworth.arsnouveau.api.item.inv.ExtractedStack"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $MultiInsertReference } from "com.hollingsworth.arsnouveau.api.item.inv.MultiInsertReference"
import { $FilterableItemHandler, $FilterableItemHandler$$Type } from "com.hollingsworth.arsnouveau.api.item.inv.FilterableItemHandler"
import { $ToIntFunction$$Type } from "java.util.function.ToIntFunction"
import { $InteractType$$Type } from "com.hollingsworth.arsnouveau.api.item.inv.InteractType"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $List, $List$$Type } from "java.util.List"
import { $IWrappedCaster$$Type } from "com.hollingsworth.arsnouveau.api.spell.wrapped_caster.IWrappedCaster"
import { $SlotReference } from "com.hollingsworth.arsnouveau.api.item.inv.SlotReference"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $MultiExtractedReference } from "com.hollingsworth.arsnouveau.api.item.inv.MultiExtractedReference"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $InventoryManager {
constructor(list0: $List$$Type<$FilterableItemHandler$$Type>)
constructor(iWrappedCaster0: $IWrappedCaster$$Type)
constructor()

public "addFilterable"(filterableItemHandler0: $FilterableItemHandler$$Type): boolean
public "extractAllFromHandler"(filterableItemHandler0: $FilterableItemHandler$$Type, itemStack1: $ItemStack$$Type, int2: integer): $MultiExtractedReference
public "extractByAmount"(toIntFunction0: $ToIntFunction$$Type<$ItemStack$$Type>): $ExtractedStack
public "extractItem"(filterableItemHandler0: $FilterableItemHandler$$Type, predicate1: $Predicate$$Type<$ItemStack$$Type>, int2: integer): $ExtractedStack
public "extractItem"(predicate0: $Predicate$$Type<$ItemStack$$Type>, int1: integer): $ExtractedStack
public "extractItemFromAll"(itemStack0: $ItemStack$$Type, int1: integer, boolean2: boolean): $MultiExtractedReference
public "extractRandomItem"(predicate0: $Predicate$$Type<$ItemStack$$Type>, int1: integer): $ExtractedStack
public "extractRandomItem"(filterableItemHandler0: $FilterableItemHandler$$Type, predicate1: $Predicate$$Type<$ItemStack$$Type>, int2: integer): $ExtractedStack
public "extractSlotMax"(int0: integer): $InventoryManager
public "findItem"(filterableItemHandler0: $FilterableItemHandler$$Type, predicate1: $Predicate$$Type<$ItemStack$$Type>, interactType2: $InteractType$$Type): $SlotReference
public "findItem"(predicate0: $Predicate$$Type<$ItemStack$$Type>, interactType1: $InteractType$$Type): $SlotReference
public "findItemR"(filterableItemHandler0: $FilterableItemHandler$$Type, predicate1: $Predicate$$Type<$ItemStack$$Type>, interactType2: $InteractType$$Type): $SlotReference
public "findItems"(filterableItemHandler0: $FilterableItemHandler$$Type, predicate1: $Predicate$$Type<$ItemStack$$Type>, interactType2: $InteractType$$Type, int3: integer): $List<$SlotReference>
public static "fromTile"(blockEntity0: $BlockEntity$$Type): $InventoryManager
public "getInventory"(): $List<$FilterableItemHandler>
public "highestPrefInventory"(list0: $List$$Type<$FilterableItemHandler$$Type>, predicate1: $Predicate$$Type<$ItemStack$$Type>, interactType2: $InteractType$$Type): $FilterableItemHandler
public "insertOrDrop"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type): void
public "insertSlotMax"(int0: integer): $InventoryManager
public "insertStack"(itemStack0: $ItemStack$$Type): $ItemStack
public "insertStackWithReference"(itemStack0: $ItemStack$$Type): $MultiInsertReference
public "preferredForStack"(itemStack0: $ItemStack$$Type, boolean1: boolean): $List<$FilterableItemHandler>
get "inventory"(): $List<$FilterableItemHandler>
}
}

declare module "com.hollingsworth.arsnouveau.common.mixin.LivingAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LivingAccessor {
"callGetJumpPower"(): float
}

export namespace $LivingAccessor {
const probejs$$marker: never
}
export abstract class $LivingAccessor$$Static implements $LivingAccessor {
}
}

declare module "com.hollingsworth.arsnouveau.api.event.DispelEvent" {
import { $HitResult, $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $SpellContext, $SpellContext$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import { $SpellStats, $SpellStats$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellStats"

export class $DispelEvent extends $Event {
constructor(hitResult0: $HitResult$$Type, level1: $Level$$Type, livingEntity2: $LivingEntity$$Type, spellStats3: $SpellStats$$Type, spellContext4: $SpellContext$$Type)
constructor()

get "augments"(): $SpellStats
set "augments"(value: $SpellStats$$Type)
get "context"(): $SpellContext
set "context"(value: $SpellContext$$Type)
get "rayTraceResult"(): $HitResult
set "rayTraceResult"(value: $HitResult$$Type)
get "shooter"(): $LivingEntity
set "shooter"(value: $LivingEntity$$Type)
get "world"(): $Level
set "world"(value: $Level$$Type)
}
}

declare module "com.hollingsworth.arsnouveau.common.spell.rewind.IRewindCallback" {
import { $RewindEvent$$Type } from "com.hollingsworth.arsnouveau.common.event.timed.RewindEvent"

export interface $IRewindCallback {
"onRewind"(rewindEvent0: $RewindEvent$$Type): void
}

export namespace $IRewindCallback {
const probejs$$marker: never
}
export abstract class $IRewindCallback$$Static implements $IRewindCallback {
}
}

declare module "com.hollingsworth.arsnouveau.api.item.inv.InteractResult" {
import { $ItemScroll$SortPref, $ItemScroll$SortPref$$Type } from "com.hollingsworth.arsnouveau.common.items.ItemScroll$SortPref"
import { $Record } from "java.lang.Record"

export class $InteractResult extends $Record {
constructor(sortPref: $ItemScroll$SortPref$$Type, valid: boolean)

public "sortPref"(): $ItemScroll$SortPref
public "valid"(): boolean
}
}

declare module "com.hollingsworth.arsnouveau.api.event.SpellDamageEvent" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $SpellContext, $SpellContext$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $SpellDamageEvent extends $Event {
constructor()

get "caster"(): $LivingEntity
set "caster"(value: $LivingEntity$$Type)
get "context"(): $SpellContext
set "context"(value: $SpellContext$$Type)
get "damage"(): float
set "damage"(value: float)
get "damageSource"(): $DamageSource
set "damageSource"(value: $DamageSource$$Type)
get "target"(): $Entity
set "target"(value: $Entity$$Type)
}
}

declare module "com.hollingsworth.arsnouveau.api.spell.AbstractAugment" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AbstractSpellPart, $AbstractSpellPart$$Type } from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $SpellStats$Builder, $SpellStats$Builder$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder"
import { $Set } from "java.util.Set"
import { $ISpellModifier } from "com.hollingsworth.arsnouveau.api.item.ISpellModifier"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $SpellContext$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $AbstractAugment extends $AbstractSpellPart implements $ISpellModifier {
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string)
constructor(string0: string, string1: string)

public "applyModifiers"(builder0: $SpellStats$Builder$$Type, abstractSpellPart1: $AbstractSpellPart$$Type, hitResult2: $HitResult$$Type, level3: $Level$$Type, livingEntity4: $LivingEntity$$Type, spellContext5: $SpellContext$$Type): $SpellStats$Builder
/** @deprecated */
public "applyModifiers"(builder0: $SpellStats$Builder$$Type, abstractSpellPart1: $AbstractSpellPart$$Type): $SpellStats$Builder
public "getCompatibleAugments"(): $Set<$AbstractAugment>
public "getCostForPart"(abstractSpellPart0: $AbstractSpellPart$$Type): integer
get "compatibleAugments"(): $Set<$AbstractAugment>
}
}

declare module "com.hollingsworth.arsnouveau.common.mixin.PufferfishAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PufferfishAccessor {
"getDeflateTimer"(): integer
"getInflateCounter"(): integer
"setDeflateTimer"(int0: integer): void
"setInflateCounter"(int0: integer): void
get "deflateTimer"(): integer
get "inflateCounter"(): integer
set "deflateTimer"(value: integer)
set "inflateCounter"(value: integer)
}

export namespace $PufferfishAccessor {
const probejs$$marker: never
}
export abstract class $PufferfishAccessor$$Static implements $PufferfishAccessor {
}
}

declare module "com.hollingsworth.arsnouveau.api.spell.Spell" {
import { $AbstractSpellPart, $AbstractSpellPart$$Type } from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $List, $List$$Type } from "java.util.List"
import { $Cloneable } from "java.lang.Cloneable"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ConfiguredSpellSound, $ConfiguredSpellSound$$Type } from "com.hollingsworth.arsnouveau.api.sound.ConfiguredSpellSound"
import { $AbstractAugment, $AbstractAugment$$Type } from "com.hollingsworth.arsnouveau.api.spell.AbstractAugment"
import { $AbstractCastMethod } from "com.hollingsworth.arsnouveau.api.spell.AbstractCastMethod"
import { $ParticleColor, $ParticleColor$$Type } from "com.hollingsworth.arsnouveau.client.particle.ParticleColor"

export class $Spell implements $Cloneable {
constructor(list0: $List$$Type<$AbstractSpellPart$$Type>)
constructor()
constructor(...abstractSpellPart0s: $AbstractSpellPart$$Type[])

public "add"(abstractSpellPart0: $AbstractSpellPart$$Type, int1: integer, int2: integer): $Spell
public "add"(...abstractSpellPart0s: $AbstractSpellPart$$Type[]): $Spell
public "add"(abstractSpellPart0: $AbstractSpellPart$$Type): $Spell
public "add"(abstractSpellPart0: $AbstractSpellPart$$Type, int1: integer): $Spell
public static "fromTag"(compoundTag0: $CompoundTag$$Type): $Spell
public "getAugments"(int0: integer, livingEntity1: $LivingEntity$$Type): $List<$AbstractAugment>
public "getBuffsAtIndex"(int0: integer, livingEntity1: $LivingEntity$$Type, abstractAugment2: $AbstractAugment$$Type): integer
public "getCastMethod"(): $AbstractCastMethod
public "getCost"(): integer
public "getDisplayString"(): string
public "getInstanceCount"(abstractSpellPart0: $AbstractSpellPart$$Type): integer
public "getSpellSize"(): integer
public "isEmpty"(): boolean
public "isValid"(): boolean
public "serialize"(): $CompoundTag
public "serializeRecipe"(): $List<$ResourceLocation>
public "setRecipe"(list0: $List$$Type<$AbstractSpellPart$$Type>): $Spell
public "withColor"(particleColor0: $ParticleColor$$Type): $Spell
public "withSound"(configuredSpellSound0: $ConfiguredSpellSound$$Type): $Spell
get "color"(): $ParticleColor
set "color"(value: $ParticleColor$$Type)
get "name"(): string
set "name"(value: string)
get "recipe"(): $List<$AbstractSpellPart>
set "recipe"(value: $List$$Type<$AbstractSpellPart$$Type>)
get "sound"(): $ConfiguredSpellSound
set "sound"(value: $ConfiguredSpellSound$$Type)
get "castMethod"(): $AbstractCastMethod
get "cost"(): integer
get "displayString"(): string
get "spellSize"(): integer
get "empty"(): boolean
get "valid"(): boolean
}
}

declare module "com.hollingsworth.arsnouveau.common.items.ItemScroll$SortPref" {
import { $Enum } from "java.lang.Enum"

export class $ItemScroll$SortPref extends $Enum<$ItemScroll$SortPref> {
static readonly "HIGH": $ItemScroll$SortPref
static readonly "HIGHEST": $ItemScroll$SortPref
static readonly "INVALID": $ItemScroll$SortPref
static readonly "LOW": $ItemScroll$SortPref

public static "valueOf"(string0: string): $ItemScroll$SortPref
public static "values"(): $ItemScroll$SortPref[]
}
}

declare module "com.hollingsworth.arsnouveau.api.spell.SpellResolver" {
import { $Cloneable } from "java.lang.Cloneable"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $AbstractCastMethod, $AbstractCastMethod$$Type } from "com.hollingsworth.arsnouveau.api.spell.AbstractCastMethod"
import { $SpellStats } from "com.hollingsworth.arsnouveau.api.spell.SpellStats"
import { $HitResult, $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Spell, $Spell$$Type } from "com.hollingsworth.arsnouveau.api.spell.Spell"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $SpellContext, $SpellContext$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $SpellResolver implements $Cloneable {
constructor(spellContext0: $SpellContext$$Type)

public "canCast"(livingEntity0: $LivingEntity$$Type): boolean
public "clone"(): $SpellResolver
public "expendMana"(): void
public "getCastStats"(): $SpellStats
public "getNewResolver"(spellContext0: $SpellContext$$Type): $SpellResolver
public "getResolveCost"(): integer
public "hasFocus"(item0: $Item$$Type): boolean
public "hasFocus"(itemStack0: $ItemStack$$Type): boolean
public "localvar$ifb000$getResolveCost"(int0: integer): integer
public "onCast"(itemStack0: $ItemStack$$Type, level1: $Level$$Type): boolean
public "onCastOnBlock"(blockHitResult0: $BlockHitResult$$Type): boolean
public "onCastOnBlock"(useOnContext0: $UseOnContext$$Type): boolean
public "onCastOnEntity"(itemStack0: $ItemStack$$Type, entity1: $Entity$$Type, interactionHand2: $InteractionHand$$Type): boolean
public "onResolveEffect"(level0: $Level$$Type, hitResult1: $HitResult$$Type): void
public "postEvent"(): boolean
public "resume"(level0: $Level$$Type): void
public "withSilent"(boolean0: boolean): $SpellResolver
get "castType"(): $AbstractCastMethod
set "castType"(value: $AbstractCastMethod$$Type)
get "hitResult"(): $HitResult
set "hitResult"(value: $HitResult$$Type)
get "previousResolver"(): $SpellResolver
set "previousResolver"(value: $SpellResolver$$Type)
get "silent"(): boolean
set "silent"(value: boolean)
get "spell"(): $Spell
set "spell"(value: $Spell$$Type)
get "spellContext"(): $SpellContext
set "spellContext"(value: $SpellContext$$Type)
get "castStats"(): $SpellStats
get "resolveCost"(): integer
}
}

declare module "com.hollingsworth.arsnouveau.common.items.Glyph" {
import { $AbstractSpellPart, $AbstractSpellPart$$Type } from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $ICapabilityProvider } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $ModItem } from "com.hollingsworth.arsnouveau.common.items.ModItem"
import { $Holder } from "net.minecraft.core.Holder"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Map } from "java.util.Map"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $FoodProperties } from "net.minecraft.world.food.FoodProperties"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $UUID$$Type } from "java.util.UUID"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $Attribute, $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $EnderMan$$Type } from "net.minecraft.world.entity.monster.EnderMan"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $MutableToolTier$$Type } from "dev.latvian.mods.kubejs.item.MutableToolTier"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $FoodBuilder$$Type } from "dev.latvian.mods.kubejs.item.FoodBuilder"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $Glyph extends $ModItem {
constructor(abstractSpellPart0: $AbstractSpellPart$$Type)

public "addAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type, name: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "arch$holder"(): $Holder<$Item>
public "arch$registryName"(): $ResourceLocation
public "canApplyAtEnchantingTable"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
public "canContinueUsing"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "canDisableShield"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "canElytraFly"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "canEquip"(itemStack0: $ItemStack$$Type, equipmentSlot1: $EquipmentSlot$$Type, entity2: $Entity$$Type): boolean
public "canGrindstoneRepair"(itemStack0: $ItemStack$$Type): boolean
public "canPerformAction"(itemStack0: $ItemStack$$Type, toolAction1: $ToolAction$$Type): boolean
public "canWalkOnPowderedSnow"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "createEntity"(level0: $Level$$Type, entity1: $Entity$$Type, itemStack2: $ItemStack$$Type): $Entity
public "damageItem"<T extends $LivingEntity>(itemStack0: $ItemStack$$Type, int1: integer, t2: T, consumer3: $Consumer$$Type<T>): integer
public "doesSneakBypassUse"(itemStack0: $ItemStack$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "elytraFlightTick"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): boolean
public static "get"(item: $Item$$Type): $ResourceLocation
public static "get"(block: $Block$$Type): $ResourceLocation
public static "get"(state: $BlockState$$Type): $ResourceLocation
public static "get"(entity: $Entity$$Type): $ResourceLocation
public static "get"(stack: $ItemStack$$Type): $ResourceLocation
public static "get"(type: $EntityType$$Type<any>): $ResourceLocation
public "getAllEnchantments"(itemStack0: $ItemStack$$Type): $Map<$Enchantment, integer>
public "getArmorTexture"(itemStack0: $ItemStack$$Type, entity1: $Entity$$Type, equipmentSlot2: $EquipmentSlot$$Type, string3: string): string
public "getAttributeModifiers"(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
public "getAttributes"(attribute: $Attribute$$Type): $List<$AttributeModifier>
public "getBurnTime"(itemStack0: $ItemStack$$Type, recipeType1: $RecipeType$$Type<any>): integer
public "getCraftingRemainingItem"(itemStack0: $ItemStack$$Type): $ItemStack
public "getCreativeTab"(): string
public "getCreatorModId"(itemStack0: $ItemStack$$Type): string
public "getDamage"(itemStack0: $ItemStack$$Type): integer
public "getDefaultTooltipHideFlags"(itemStack0: $ItemStack$$Type): integer
public "getDigSpeed"(): float
public "getEnchantmentLevel"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): integer
public "getEnchantmentValue"(itemStack0: $ItemStack$$Type): integer
public "getEntityLifespan"(itemStack0: $ItemStack$$Type, level1: $Level$$Type): integer
public "getEquipmentSlot"(itemStack0: $ItemStack$$Type): $EquipmentSlot
public "getFoodProperties"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): $FoodProperties
public "getHighlightTip"(itemStack0: $ItemStack$$Type, component1: $Component$$Type): $Component
public "getMaxDamage"(itemStack0: $ItemStack$$Type): integer
public "getMaxStackSize"(itemStack0: $ItemStack$$Type): integer
public "getMod"(): string
public "getShareTag"(itemStack0: $ItemStack$$Type): $CompoundTag
public "getSweepHitBox"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): $AABB
public "getXpRepairRatio"(itemStack0: $ItemStack$$Type): float
public "hasCraftingRemainingItem"(itemStack0: $ItemStack$$Type): boolean
public "hasCustomEntity"(itemStack0: $ItemStack$$Type): boolean
public "initCapabilities"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): $ICapabilityProvider
public "isBookEnchantable"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "isCorrectToolForDrops"(itemStack0: $ItemStack$$Type, blockState1: $BlockState$$Type): boolean
public "isDamageable"(itemStack0: $ItemStack$$Type): boolean
public "isDamaged"(itemStack0: $ItemStack$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isEnderMask"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, enderMan2: $EnderMan$$Type): boolean
public "isNotReplaceableByPickAction"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer): boolean
public "isPiglinCurrency"(itemStack0: $ItemStack$$Type): boolean
public "makesPiglinsNeutral"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
/** @deprecated */
public "onArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type): void
public "onBlockStartBreak"(itemStack0: $ItemStack$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
public "onDestroyed"(itemEntity0: $ItemEntity$$Type, damageSource1: $DamageSource$$Type): void
public "onDroppedByPlayer"(itemStack0: $ItemStack$$Type, player1: $Player$$Type): boolean
public "onEntityItemUpdate"(itemStack0: $ItemStack$$Type, itemEntity1: $ItemEntity$$Type): boolean
public "onEntitySwing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "onHorseArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, mob2: $Mob$$Type): void
public "onInventoryTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type, int3: integer, int4: integer): void
public "onItemUseFirst"(itemStack0: $ItemStack$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
public "onLeftClickEntity"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): boolean
public "onStopUsing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): void
public "readShareTag"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): void
public "removeAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type): void
public "setArmorKnockbackResistance"(knockbackResistance: double): void
public "setArmorProtection"(armorProtection: double): void
public "setArmorToughness"(armorToughness: double): void
public "setAttackDamage"(attackDamage: double): void
public "setAttackSpeed"(attackSpeed: double): void
public "setDamage"(itemStack0: $ItemStack$$Type, int1: integer): void
public "setDigSpeed"(speed: float): void
public "setFoodProperties"(consumer: $Consumer$$Type<$FoodBuilder$$Type>): void
public "setTier"(c: $Consumer$$Type<$MutableToolTier$$Type>): void
public "shouldCauseBlockBreakReset"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "shouldCauseReequipAnimation"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean): boolean
get "spellPart"(): $AbstractSpellPart
set "spellPart"(value: $AbstractSpellPart$$Type)
get "creativeTab"(): string
get "digSpeed"(): float
get "mod"(): string
set "armorKnockbackResistance"(value: double)
set "armorProtection"(value: double)
set "armorToughness"(value: double)
set "attackDamage"(value: double)
set "attackSpeed"(value: double)
set "digSpeed"(value: float)
set "foodProperties"(value: $Consumer$$Type<$FoodBuilder$$Type>)
set "tier"(value: $Consumer$$Type<$MutableToolTier$$Type>)
}
}

declare module "com.hollingsworth.arsnouveau.common.util.SpellPartConfigUtil$AugmentLimits" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"

export class $SpellPartConfigUtil$AugmentLimits {
public "getAugmentLimit"(resourceLocation0: $ResourceLocation$$Type): integer
}
}

declare module "com.hollingsworth.arsnouveau.api.spell.CastResolveType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CastResolveType {
static readonly "FAILURE": $CastResolveType
static readonly "SUCCESS": $CastResolveType
static readonly "SUCCESS_NO_EXPEND": $CastResolveType

constructor(string0: string, boolean1: boolean)

get "id"(): string
set "id"(value: string)
get "wasSuccess"(): boolean
set "wasSuccess"(value: boolean)
}
}

declare module "com.hollingsworth.arsnouveau.api.event.SummonEvent" {
import { $ISummon, $ISummon$$Type } from "com.hollingsworth.arsnouveau.api.entity.ISummon"
import { $HitResult, $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $SpellContext, $SpellContext$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import { $SpellStats, $SpellStats$$Type } from "com.hollingsworth.arsnouveau.api.spell.SpellStats"

export class $SummonEvent extends $Event {
constructor(hitResult0: $HitResult$$Type, level1: $Level$$Type, livingEntity2: $LivingEntity$$Type, spellStats3: $SpellStats$$Type, spellContext4: $SpellContext$$Type, iSummon5: $ISummon$$Type)
constructor()

get "context"(): $SpellContext
set "context"(value: $SpellContext$$Type)
get "rayTraceResult"(): $HitResult
set "rayTraceResult"(value: $HitResult$$Type)
get "shooter"(): $LivingEntity
set "shooter"(value: $LivingEntity$$Type)
get "stats"(): $SpellStats
set "stats"(value: $SpellStats$$Type)
get "summon"(): $ISummon
set "summon"(value: $ISummon$$Type)
get "world"(): $Level
set "world"(value: $Level$$Type)
}
}

declare module "com.hollingsworth.arsnouveau.api.spell.wrapped_caster.IWrappedCaster" {
import { $InventoryManager } from "com.hollingsworth.arsnouveau.api.item.inv.InventoryManager"
import { $List } from "java.util.List"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $Direction } from "net.minecraft.core.Direction"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $FilterableItemHandler } from "com.hollingsworth.arsnouveau.api.item.inv.FilterableItemHandler"
import { $SpellContext$CasterType } from "com.hollingsworth.arsnouveau.api.spell.SpellContext$CasterType"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $IWrappedCaster {
"getCasterType"(): $SpellContext$CasterType
"getFacingDirection"(): $Direction
"getInvManager"(): $InventoryManager
"getInventory"(): $List<$FilterableItemHandler>
"getNearbyBlockEntity"(predicate0: $Predicate$$Type<$BlockEntity$$Type>): $BlockEntity
"getPosition"(): $Vec3
get "casterType"(): $SpellContext$CasterType
get "facingDirection"(): $Direction
get "invManager"(): $InventoryManager
get "inventory"(): $List<$FilterableItemHandler>
get "position"(): $Vec3
}

export namespace $IWrappedCaster {
const probejs$$marker: never
}
export abstract class $IWrappedCaster$$Static implements $IWrappedCaster {
}
}

