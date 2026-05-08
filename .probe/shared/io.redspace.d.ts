declare module "io.redspace.ironsspellbooks.capabilities.magic.RecastResult" {
import { $Enum } from "java.lang.Enum"

export class $RecastResult extends $Enum<$RecastResult> {
static readonly "COMMAND": $RecastResult
static readonly "COUNTERSPELL": $RecastResult
static readonly "DEATH": $RecastResult
static readonly "TIMEOUT": $RecastResult
static readonly "USED_ALL_RECASTS": $RecastResult
static readonly "USER_CANCEL": $RecastResult

public "isFailure"(): boolean
public "isSuccess"(): boolean
public static "valueOf"(string0: string): $RecastResult
public static "values"(): $RecastResult[]
get "failure"(): boolean
get "success"(): boolean
}
}

declare module "io.redspace.ironsspellbooks.capabilities.magic.SyncedSpellData" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $SpinAttackType, $SpinAttackType$$Type } from "io.redspace.ironsspellbooks.player.SpinAttackType"
import { $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $HolderLookup$Provider$$Type } from "net.minecraft.core.HolderLookup$Provider"
import { $SpellSelection, $SpellSelection$$Type } from "io.redspace.ironsspellbooks.gui.overlays.SpellSelection"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $SyncedSpellData {
constructor(int0: integer)
constructor(livingEntity0: $LivingEntity$$Type)

public "addHeartstopDamage"(float0: float): void
public "doSync"(): void
public "forgetAllSpells"(): void
public "getCastingEquipmentSlot"(): string
public "getCastingSpellId"(): string
public "getCastingSpellLevel"(): integer
public "getEvasionHitsRemaining"(): integer
public "getHeartstopAccumulatedDamage"(): float
public "getPersistentData"(serverPlayer0: $ServerPlayer$$Type): $SyncedSpellData
public "getServerPlayerId"(): integer
public "getSpellSelection"(): $SpellSelection
public "getSpinAttackType"(): $SpinAttackType
public "isCasting"(): boolean
public "isSpellLearned"(abstractSpell0: $AbstractSpell$$Type): boolean
public "learnSpell"(abstractSpell0: $AbstractSpell$$Type, boolean1: boolean): void
public "learnSpell"(abstractSpell0: $AbstractSpell$$Type): void
public "loadNBTData"(compoundTag0: $CompoundTag$$Type, provider1: $HolderLookup$Provider$$Type): void
public static "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $SyncedSpellData
public "saveNBTData"(compoundTag0: $CompoundTag$$Type, provider1: $HolderLookup$Provider$$Type): void
public "setEvasionHitsRemaining"(int0: integer): void
public "setHeartstopAccumulatedDamage"(float0: float): void
public "setIsCasting"(boolean0: boolean, string1: string, int2: integer, string3: string): void
public "setSpellSelection"(spellSelection0: $SpellSelection$$Type): void
public "setSpinAttackType"(spinAttackType0: $SpinAttackType$$Type): void
public "subtractEvasionHit"(): void
public "syncToPlayer"(serverPlayer0: $ServerPlayer$$Type): void
public static "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type, syncedSpellData1: $SyncedSpellData$$Type): void
get "castingEquipmentSlot"(): string
get "castingSpellId"(): string
get "castingSpellLevel"(): integer
get "evasionHitsRemaining"(): integer
get "heartstopAccumulatedDamage"(): float
get "serverPlayerId"(): integer
get "spellSelection"(): $SpellSelection
get "spinAttackType"(): $SpinAttackType
get "casting"(): boolean
set "evasionHitsRemaining"(value: integer)
set "heartstopAccumulatedDamage"(value: float)
set "spellSelection"(value: $SpellSelection$$Type)
set "spinAttackType"(value: $SpinAttackType$$Type)
}
}

declare module "io.redspace.ironsspellbooks.api.util.AnimationHolder" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $RawAnimation } from "software.bernie.geckolib.core.animation.RawAnimation"
import { $Optional } from "java.util.Optional"

export class $AnimationHolder {
readonly "animatesLegs": boolean
readonly "isPass": boolean

/** @deprecated */
constructor(string0: string, boolean1: boolean, boolean2: boolean)
constructor(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean, boolean2: boolean)
/** @deprecated */
constructor(string0: string, boolean1: boolean)
constructor(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean)

public "getForMob"(): $Optional<$RawAnimation>
public "getForPlayer"(): $Optional<$ResourceLocation>
public static "none"(): $AnimationHolder
public static "pass"(): $AnimationHolder
get "forMob"(): $Optional<$RawAnimation>
get "forPlayer"(): $Optional<$ResourceLocation>
}
}

declare module "io.redspace.ironslib.mixin.PlayerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerAccessor {
}

export namespace $PlayerAccessor {
const probejs$$marker: never
}
export abstract class $PlayerAccessor$$Static implements $PlayerAccessor {
}
}

declare module "io.redspace.ironslib.patreon.transmog.ITransmogPreview" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITransmogPreview {
"irons_lib$isTransmogPreview"(): boolean
"irons_lib$setTransmogPreview"(boolean0: boolean): void
}

export namespace $ITransmogPreview {
const probejs$$marker: never
}
export abstract class $ITransmogPreview$$Static implements $ITransmogPreview {
}
}

declare module "io.redspace.ironsspellbooks.item.armor.IArmorCapeProvider$CapeData" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

export class $IArmorCapeProvider$CapeData {
constructor()

public "moveCloak"(livingEntity0: $LivingEntity$$Type): void
get "bob"(): float
set "bob"(value: float)
get "lastTick"(): integer
set "lastTick"(value: integer)
get "oBob"(): float
set "oBob"(value: float)
get "xCloak"(): double
set "xCloak"(value: double)
get "xCloakO"(): double
set "xCloakO"(value: double)
get "yCloak"(): double
set "yCloak"(value: double)
get "yCloakO"(): double
set "yCloakO"(value: double)
get "zCloak"(): double
set "zCloak"(value: double)
get "zCloakO"(): double
set "zCloakO"(value: double)
}
}

declare module "io.redspace.ironsspellbooks.worldgen.IExtendedNoiseChunk" {
import { $IExtendedNoiseChunk$AquifierNuke, $IExtendedNoiseChunk$AquifierNuke$$Type } from "io.redspace.ironsspellbooks.worldgen.IExtendedNoiseChunk$AquifierNuke"

export interface $IExtendedNoiseChunk {
"irons_spellbooks$getAquifierStatus"(): $IExtendedNoiseChunk$AquifierNuke
"irons_spellbooks$setAquifierStatus"(aquifierNuke0: $IExtendedNoiseChunk$AquifierNuke$$Type): void
}

export namespace $IExtendedNoiseChunk {
const probejs$$marker: never
}
export abstract class $IExtendedNoiseChunk$$Static implements $IExtendedNoiseChunk {
}
}

declare module "io.redspace.ironsspellbooks.api.events.SpellOnCastEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $CastSource, $CastSource$$Type } from "io.redspace.ironsspellbooks.api.spells.CastSource"
import { $SchoolType, $SchoolType$$Type } from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $SpellOnCastEvent extends $PlayerEvent {
constructor(player0: $Player$$Type, string1: string, int2: integer, int3: integer, schoolType4: $SchoolType$$Type, castSource5: $CastSource$$Type)
constructor()

public "getCastSource"(): $CastSource
public "getManaCost"(): integer
public "getOriginalManaCost"(): integer
public "getOriginalSpellLevel"(): integer
public "getSchoolType"(): $SchoolType
public "getSpellId"(): string
public "getSpellLevel"(): integer
public "setManaCost"(int0: integer): void
public "setSpellLevel"(int0: integer): void
get "castSource"(): $CastSource
get "manaCost"(): integer
get "originalManaCost"(): integer
get "originalSpellLevel"(): integer
get "schoolType"(): $SchoolType
get "spellId"(): string
get "spellLevel"(): integer
set "manaCost"(value: integer)
set "spellLevel"(value: integer)
}
}

declare module "io.redspace.ironsspellbooks.api.events.ModifySpellLevelEvent" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AbstractSpell, $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $ModifySpellLevelEvent extends $Event {
constructor(abstractSpell0: $AbstractSpell$$Type, livingEntity1: $LivingEntity$$Type, int2: integer, int3: integer)
constructor()

public "addLevels"(int0: integer): void
public "getBaseLevel"(): integer
public "getEntity"(): $LivingEntity
public "getLevel"(): integer
public "getSpell"(): $AbstractSpell
public "setLevel"(int0: integer): void
get "baseLevel"(): integer
get "entity"(): $LivingEntity
get "level"(): integer
get "spell"(): $AbstractSpell
set "level"(value: integer)
}
}

declare module "io.redspace.ironsspellbooks.api.config.ModifyDefaultConfigValuesEvent" {
import { $SpellConfigParameter$$Type } from "io.redspace.ironsspellbooks.api.config.SpellConfigParameter"
import { $AbstractSpell, $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $SpellConfigHolder$$Type } from "io.redspace.ironsspellbooks.api.config.SpellConfigHolder"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $ModifyDefaultConfigValuesEvent extends $Event {
constructor()
constructor(abstractSpell0: $AbstractSpell$$Type, spellConfigHolder1: $SpellConfigHolder$$Type)

public "getSpell"(): $AbstractSpell
public "setDefaultValue"<T>(spellConfigParameter0: $SpellConfigParameter$$Type<T>, t1: T): void
get "spell"(): $AbstractSpell
}
}

declare module "io.redspace.ironsspellbooks.mixin.ParticleAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ParticleAccessor {
"irons_spellbooks$gravity"(float0: float): void
"irons_spellbooks$stoppedByCollision"(boolean0: boolean): void
"irons_spellbooks$xo"(double0: double): void
"irons_spellbooks$yo"(double0: double): void
"irons_spellbooks$zo"(double0: double): void
}

export namespace $ParticleAccessor {
const probejs$$marker: never
}
export abstract class $ParticleAccessor$$Static implements $ParticleAccessor {
}
}

declare module "io.redspace.ironsspellbooks.api.spells.CastResult" {
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $CastResult$Type, $CastResult$Type$$Type } from "io.redspace.ironsspellbooks.api.spells.CastResult$Type"

export class $CastResult {
readonly "message": $Component
readonly "type": $CastResult$Type

constructor(type0: $CastResult$Type$$Type, component1: $Component$$Type)
constructor(type0: $CastResult$Type$$Type)

public "isSuccess"(): boolean
get "success"(): boolean
}
}

declare module "io.redspace.ironsspellbooks.api.magic.SpellSelectionManager$SpellSelectionEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $SpellData$$Type } from "io.redspace.ironsspellbooks.api.spells.SpellData"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $SpellSelectionManager, $SpellSelectionManager$$Type } from "io.redspace.ironsspellbooks.api.magic.SpellSelectionManager"

export class $SpellSelectionManager$SpellSelectionEvent extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type, spellSelectionManager1: $SpellSelectionManager$$Type)

public "addSelectionOption"(spellData0: $SpellData$$Type, string1: string, int2: integer, int3: integer): void
public "addSelectionOption"(spellData0: $SpellData$$Type, string1: string, int2: integer): void
public "getManager"(): $SpellSelectionManager
get "manager"(): $SpellSelectionManager
}
}

declare module "io.redspace.ironsspellbooks.damage.SpellDamageSource" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $DamageSource } from "net.minecraft.world.damagesource.DamageSource"
import { $AbstractSpell, $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $SpellDamageSource extends $DamageSource {
public "get"(): $DamageSource
public "getFireTime"(): integer
public "getFreezeTicks"(): integer
public "getIFrames"(): integer
public "getLifestealPercent"(): float
public "hasPostHitEffects"(): boolean
public "setFireTicks"(int0: integer): $SpellDamageSource
public "setFreezeTicks"(int0: integer): $SpellDamageSource
public "setIFrames"(int0: integer): $SpellDamageSource
public "setLifestealPercent"(float0: float): $SpellDamageSource
public static "source"(entity0: $Entity$$Type, entity1: $Entity$$Type, abstractSpell2: $AbstractSpell$$Type): $SpellDamageSource
public static "source"(entity0: $Entity$$Type, abstractSpell1: $AbstractSpell$$Type): $SpellDamageSource
public "spell"(): $AbstractSpell
get "fireTime"(): integer
get "freezeTicks"(): integer
get "iFrames"(): integer
get "lifestealPercent"(): float
set "fireTicks"(value: integer)
set "freezeTicks"(value: integer)
set "iFrames"(value: integer)
set "lifestealPercent"(value: float)
}
}

declare module "io.redspace.ironslib.game.client.ISupportTransmog" {
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $ISupportTransmog {
"irons_lib$getArmorBySlotRaw"(equipmentSlot0: $EquipmentSlot$$Type): $ItemStack
}

export namespace $ISupportTransmog {
const probejs$$marker: never
}
export abstract class $ISupportTransmog$$Static implements $ISupportTransmog {
}
}

declare module "io.redspace.ironsspellbooks.api.magic.SpellSelectionManager" {
import { $List } from "java.util.List"
import { $SpellSelectionManager$SelectionOption } from "io.redspace.ironsspellbooks.api.magic.SpellSelectionManager$SelectionOption"
import { $SpellData } from "io.redspace.ironsspellbooks.api.spells.SpellData"
import { $SpellSelection } from "io.redspace.ironsspellbooks.gui.overlays.SpellSelection"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $SpellSelectionManager {
static readonly "MAINHAND": string
static readonly "OFFHAND": string

constructor(player0: $Player$$Type)

public "getAllSpells"(): $List<$SpellSelectionManager$SelectionOption>
public "getCurrentSelection"(): $SpellSelection
public "getGlobalSelectionIndex"(): integer
public "getSelectedSpellData"(): $SpellData
public "getSelection"(): $SpellSelectionManager$SelectionOption
public "getSelectionIndex"(): integer
public "getSpellCount"(): integer
public "getSpellData"(int0: integer): $SpellData
public "getSpellForSlot"(string0: string, int1: integer): $SpellData
public "getSpellSlot"(int0: integer): $SpellSelectionManager$SelectionOption
public "getSpellsForSlot"(string0: string): $List<$SpellSelectionManager$SelectionOption>
/** Client only, do not use in server scripts */
public "makeSelection"(int0: integer): void
get "allSpells"(): $List<$SpellSelectionManager$SelectionOption>
get "currentSelection"(): $SpellSelection
get "globalSelectionIndex"(): integer
get "selectedSpellData"(): $SpellData
get "selection"(): $SpellSelectionManager$SelectionOption
get "selectionIndex"(): integer
get "spellCount"(): integer
}
}

declare module "io.redspace.ironsspellbooks.worldgen.IExtendedNoiseChunk$AquifierNuke" {
import { $BoundingBox, $BoundingBox$$Type } from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import { $Record } from "java.lang.Record"

export class $IExtendedNoiseChunk$AquifierNuke extends $Record {
constructor(boundingBoxes: $BoundingBox$$Type[])

public "boundingBoxes"(): $BoundingBox[]
}
}

declare module "io.redspace.ironsspellbooks.api.config.DefaultConfig" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SpellRarity, $SpellRarity$$Type } from "io.redspace.ironsspellbooks.api.spells.SpellRarity"

export class $DefaultConfig {
constructor(consumer0: $Consumer$$Type<$DefaultConfig$$Type>)
constructor()

public "build"(): $DefaultConfig
public "setAllowCrafting"(boolean0: boolean): $DefaultConfig
public "setCooldownSeconds"(double0: double): $DefaultConfig
public "setDeprecated"(boolean0: boolean): $DefaultConfig
public "setMaxLevel"(int0: integer): $DefaultConfig
public "setMinRarity"(spellRarity0: $SpellRarity$$Type): $DefaultConfig
public "setSchoolResource"(resourceLocation0: $ResourceLocation$$Type): $DefaultConfig
get "allowCrafting"(): boolean
set "allowCrafting"(value: boolean)
get "cooldownInSeconds"(): double
set "cooldownInSeconds"(value: double)
get "enabled"(): boolean
set "enabled"(value: boolean)
get "maxLevel"(): integer
set "maxLevel"(value: integer)
get "minRarity"(): $SpellRarity
set "minRarity"(value: $SpellRarity$$Type)
get "schoolResource"(): $ResourceLocation
set "schoolResource"(value: $ResourceLocation$$Type)
set "cooldownSeconds"(value: double)
set "deprecated"(value: boolean)
}
}

declare module "io.redspace.ironsspellbooks.mixin.EntityAccessor" {
import { $Entity$RemovalReason$$Type } from "net.minecraft.world.entity.Entity$RemovalReason"

export interface $EntityAccessor {
"setRemovalReason"(removalReason0: $Entity$RemovalReason$$Type): void
set "removalReason"(value: $Entity$RemovalReason$$Type)
}

export namespace $EntityAccessor {
const probejs$$marker: never
}
export abstract class $EntityAccessor$$Static implements $EntityAccessor {
}
}

declare module "io.redspace.ironsspellbooks.api.config.SpellConfigHolder" {
import { $JsonObject } from "com.google.gson.JsonObject"
import { $SpellConfigParameter$$Type } from "io.redspace.ironsspellbooks.api.config.SpellConfigParameter"
import { $Gson$$Type } from "com.google.gson.Gson"
import { $Optional } from "java.util.Optional"

export class $SpellConfigHolder {
constructor()

public "get"<T>(spellConfigParameter0: $SpellConfigParameter$$Type<T>): T
public "getDefaultValue"<T>(spellConfigParameter0: $SpellConfigParameter$$Type<T>): $Optional<T>
public "isDefault"<T>(spellConfigParameter0: $SpellConfigParameter$$Type<T>): boolean
public "set"<T>(spellConfigParameter0: $SpellConfigParameter$$Type<T>, t1: T): void
public "setDefaultValue"<T>(spellConfigParameter0: $SpellConfigParameter$$Type<T>, t1: T): void
public "toJson"<T>(gson0: $Gson$$Type): $JsonObject
}
}

declare module "io.redspace.ironsspellbooks.api.spells.SpellData" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Component } from "net.minecraft.network.chat.Component"
import { $AbstractSpell, $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $SpellRarity } from "io.redspace.ironsspellbooks.api.spells.SpellRarity"
import { $Comparable } from "java.lang.Comparable"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $SpellData implements $Comparable<$SpellData> {
static readonly "CODEC": $Codec<$SpellData>
static readonly "EMPTY": $SpellData
static readonly "SPELL_ID": string
static readonly "SPELL_LEVEL": string
static readonly "SPELL_LOCKED": string

constructor(abstractSpell0: $AbstractSpell$$Type, int1: integer)
constructor(abstractSpell0: $AbstractSpell$$Type, int1: integer, boolean2: boolean)
constructor(resourceLocation0: $ResourceLocation$$Type, int1: integer, boolean2: boolean)

public "canRemove"(): boolean
public "compareTo"(spellData0: $SpellData$$Type): integer
public "getDisplayName"(): $Component
public "getLevel"(): integer
public "getRarity"(): $SpellRarity
public "getSpell"(): $AbstractSpell
public "isLocked"(): boolean
public static "readFromBuffer"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $SpellData
public static "writeToBuffer"(friendlyByteBuf0: $FriendlyByteBuf$$Type, spellData1: $SpellData$$Type): void
get "displayName"(): $Component
get "level"(): integer
get "rarity"(): $SpellRarity
get "spell"(): $AbstractSpell
get "locked"(): boolean
}
}

declare module "io.redspace.ironsspellbooks.api.events.ChangeManaEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $MagicData, $MagicData$$Type } from "io.redspace.ironsspellbooks.api.magic.MagicData"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ChangeManaEvent extends $PlayerEvent {
constructor(player0: $Player$$Type, magicData1: $MagicData$$Type, float2: float, float3: float)
constructor()

public "getMagicData"(): $MagicData
public "getNewMana"(): float
public "getOldMana"(): float
public "setNewMana"(float0: float): void
get "magicData"(): $MagicData
get "newMana"(): float
get "oldMana"(): float
set "newMana"(value: float)
}
}

declare module "io.redspace.ironsspellbooks.capabilities.magic.RecastInstance" {
import { $CastSource, $CastSource$$Type } from "io.redspace.ironsspellbooks.api.spells.CastSource"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ISerializable } from "io.redspace.ironsspellbooks.api.network.ISerializable"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ICastDataSerializable, $ICastDataSerializable$$Type } from "io.redspace.ironsspellbooks.api.spells.ICastDataSerializable"
import { $INBTSerializable } from "net.minecraftforge.common.util.INBTSerializable"

export class $RecastInstance implements $ISerializable, $INBTSerializable<$CompoundTag> {
constructor(string0: string, int1: integer, int2: integer, int3: integer, castSource4: $CastSource$$Type, iCastDataSerializable5: $ICastDataSerializable$$Type)
constructor()

public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getCastData"(): $ICastDataSerializable
public "getCastSource"(): $CastSource
public "getRemainingRecasts"(): integer
public "getSpellId"(): string
public "getSpellLevel"(): integer
public "getTicksRemaining"(): integer
public "getTicksToLive"(): integer
public "getTotalRecasts"(): integer
public "readFromBuffer"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "serializeNBT"(): $CompoundTag
public "writeToBuffer"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "castData"(): $ICastDataSerializable
get "castSource"(): $CastSource
get "remainingRecasts"(): integer
get "spellId"(): string
get "spellLevel"(): integer
get "ticksRemaining"(): integer
get "ticksToLive"(): integer
get "totalRecasts"(): integer
}
}

declare module "io.redspace.ironsspellbooks.capabilities.magic.CooldownInstance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CooldownInstance {
constructor(int0: integer, int1: integer)
constructor(int0: integer)

public "decrement"(): void
public "decrementBy"(int0: integer): void
public "getCooldownPercent"(): float
public "getCooldownRemaining"(): integer
public "getSpellCooldown"(): integer
get "cooldownPercent"(): float
get "cooldownRemaining"(): integer
get "spellCooldown"(): integer
}
}

declare module "io.redspace.ironsspellbooks.player.SpinAttackType" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Record } from "java.lang.Record"

export class $SpinAttackType extends $Record {
static readonly "FIRE": $SpinAttackType
static readonly "LIGHTNING": $SpinAttackType
static readonly "RIPTIDE": $SpinAttackType

constructor(textureId: $ResourceLocation$$Type, fullbright: boolean)

public "fullbright"(): boolean
public "textureId"(): $ResourceLocation
}
}

declare module "io.redspace.ironsspellbooks.api.events.SpellSummonEvent" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"

/** @deprecated */
export class $SpellSummonEvent<K extends $LivingEntity = $LivingEntity> extends $LivingEvent {
constructor(livingEntity0: $LivingEntity$$Type, k1: K, resourceLocation2: $ResourceLocation$$Type, int3: integer)
constructor()

public "getCaster"(): $LivingEntity
public "getCreature"(): K
public "getSpellId"(): $ResourceLocation
public "getSpellLevel"(): integer
public "setCreature"(k0: K): void
get "caster"(): $LivingEntity
get "creature"(): K
get "spellId"(): $ResourceLocation
get "spellLevel"(): integer
set "creature"(value: K)
}
}

declare module "io.redspace.ironsspellbooks.api.magic.SpellSelectionManager$SelectionOption" {
import { $CastSource } from "io.redspace.ironsspellbooks.api.spells.CastSource"
import { $SpellData, $SpellData$$Type } from "io.redspace.ironsspellbooks.api.spells.SpellData"

export class $SpellSelectionManager$SelectionOption {
constructor(spellData0: $SpellData$$Type, string1: string, int2: integer, int3: integer)

public "getCastSource"(): $CastSource
get "globalIndex"(): integer
set "globalIndex"(value: integer)
get "slot"(): string
set "slot"(value: string)
get "slotIndex"(): integer
set "slotIndex"(value: integer)
get "spellData"(): $SpellData
set "spellData"(value: $SpellData$$Type)
get "castSource"(): $CastSource
}
}

declare module "io.redspace.ironsspellbooks.mixin.LivingEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LivingEntityAccessor {
"setLivingEntityFlagInvoker"(int0: integer, boolean1: boolean): void
}

export namespace $LivingEntityAccessor {
const probejs$$marker: never
}
export abstract class $LivingEntityAccessor$$Static implements $LivingEntityAccessor {
}
}

declare module "io.redspace.ironsspellbooks.api.events.SpellDamageEvent" {
import { $SpellDamageSource, $SpellDamageSource$$Type } from "io.redspace.ironsspellbooks.damage.SpellDamageSource"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"

export class $SpellDamageEvent extends $LivingEvent {
constructor(livingEntity0: $LivingEntity$$Type, float1: float, spellDamageSource2: $SpellDamageSource$$Type)
constructor()

public "getAmount"(): float
public "getOriginalAmount"(): float
public "getSpellDamageSource"(): $SpellDamageSource
public "setAmount"(float0: float): void
get "amount"(): float
get "originalAmount"(): float
get "spellDamageSource"(): $SpellDamageSource
set "amount"(value: float)
}
}

declare module "io.redspace.ironsspellbooks.capabilities.magic.PlayerCooldowns" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Map } from "java.util.Map"
import { $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $CooldownInstance, $CooldownInstance$$Type } from "io.redspace.ironsspellbooks.capabilities.magic.CooldownInstance"
import { $ListTag, $ListTag$$Type } from "net.minecraft.nbt.ListTag"

export class $PlayerCooldowns {
static readonly "COOLDOWN_REMAINING": string
static readonly "SPELL_COOLDOWN": string
static readonly "SPELL_ID": string

constructor()

public "addCooldown"(abstractSpell0: $AbstractSpell$$Type, int1: integer): void
public "addCooldown"(string0: string, int1: integer): void
public "addCooldown"(string0: string, int1: integer, int2: integer): void
public "addCooldown"(abstractSpell0: $AbstractSpell$$Type, int1: integer, int2: integer): void
public "clearCooldowns"(): void
public "decrementCooldown"(cooldownInstance0: $CooldownInstance$$Type, int1: integer): boolean
public "getCooldownPercent"(abstractSpell0: $AbstractSpell$$Type): float
public "getSpellCooldowns"(): $Map<string, $CooldownInstance>
public "hasCooldownsActive"(): boolean
public "isOnCooldown"(abstractSpell0: $AbstractSpell$$Type): boolean
public "loadNBTData"(listTag0: $ListTag$$Type): void
public "removeCooldown"(string0: string): boolean
public "saveNBTData"(): $ListTag
public "setTickBuffer"(int0: integer): void
public "syncToPlayer"(serverPlayer0: $ServerPlayer$$Type): void
public "tick"(int0: integer): void
get "spellCooldowns"(): $Map<string, $CooldownInstance>
set "tickBuffer"(value: integer)
}
}

declare module "io.redspace.ironsspellbooks.capabilities.magic.PlayerRecasts" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $RecastInstance, $RecastInstance$$Type } from "io.redspace.ironsspellbooks.capabilities.magic.RecastInstance"
import { $List } from "java.util.List"
import { $RecastResult$$Type } from "io.redspace.ironsspellbooks.capabilities.magic.RecastResult"
import { $Map$$Type } from "java.util.Map"
import { $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $HolderLookup$Provider$$Type } from "net.minecraft.core.HolderLookup$Provider"
import { $MagicData$$Type } from "io.redspace.ironsspellbooks.api.magic.MagicData"
import { $ListTag, $ListTag$$Type } from "net.minecraft.nbt.ListTag"

export class $PlayerRecasts {
constructor()
constructor(serverPlayer0: $ServerPlayer$$Type)
/** Client only, do not use in server scripts */
constructor(map0: $Map$$Type<string, $RecastInstance$$Type>)

public "addRecast"(recastInstance0: $RecastInstance$$Type, magicData1: $MagicData$$Type): boolean
public "decrementRecastCount"(abstractSpell0: $AbstractSpell$$Type): void
public "decrementRecastCount"(string0: string): void
public "forceAddRecast"(recastInstance0: $RecastInstance$$Type): void
public "getActiveRecasts"(): $List<$RecastInstance>
public "getAllRecasts"(): $List<$RecastInstance>
public "getRecastInstance"(string0: string): $RecastInstance
public "getRemainingRecastsForSpell"(abstractSpell0: $AbstractSpell$$Type): integer
public "getRemainingRecastsForSpell"(string0: string): integer
public "hasRecastForSpell"(abstractSpell0: $AbstractSpell$$Type): boolean
public "hasRecastForSpell"(string0: string): boolean
public "hasRecastsActive"(): boolean
public "isRecastActive"(recastInstance0: $RecastInstance$$Type): boolean
public "loadNBTData"(listTag0: $ListTag$$Type, provider1: $HolderLookup$Provider$$Type): void
public "removeAll"(recastResult0: $RecastResult$$Type): void
/** Client only, do not use in server scripts */
public "removeRecast"(string0: string): void
public "removeRecast"(recastInstance0: $RecastInstance$$Type, recastResult1: $RecastResult$$Type): void
public "saveNBTData"(provider0: $HolderLookup$Provider$$Type): $ListTag
public "syncAllToPlayer"(): void
public "syncRemoveToPlayer"(string0: string): void
public "syncToPlayer"(recastInstance0: $RecastInstance$$Type): void
public "tick"(int0: integer): void
/** Client only, do not use in server scripts */
public "tickRecasts"(): void
get "activeRecasts"(): $List<$RecastInstance>
get "allRecasts"(): $List<$RecastInstance>
}
}

declare module "io.redspace.ironsspellbooks.api.spells.AbstractSpell" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $DefaultConfig } from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import { $RecastResult$$Type } from "io.redspace.ironsspellbooks.capabilities.magic.RecastResult"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $SchoolType } from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import { $AnimationHolder } from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import { $MagicData$$Type } from "io.redspace.ironsspellbooks.api.magic.MagicData"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Vector3f } from "org.joml.Vector3f"
import { $RecastInstance$$Type } from "io.redspace.ironsspellbooks.capabilities.magic.RecastInstance"
import { $Component } from "net.minecraft.network.chat.Component"
import { $CastType } from "io.redspace.ironsspellbooks.api.spells.CastType"
import { $ICastDataSerializable, $ICastDataSerializable$$Type } from "io.redspace.ironsspellbooks.api.spells.ICastDataSerializable"
import { $Style } from "net.minecraft.network.chat.Style"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $SpellDamageSource } from "io.redspace.ironsspellbooks.damage.SpellDamageSource"
import { $CastSource$$Type } from "io.redspace.ironsspellbooks.api.spells.CastSource"
import { $List } from "java.util.List"
import { $ICastData$$Type } from "io.redspace.ironsspellbooks.api.spells.ICastData"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $SpellRarity, $SpellRarity$$Type } from "io.redspace.ironsspellbooks.api.spells.SpellRarity"
import { $CastResult } from "io.redspace.ironsspellbooks.api.spells.CastResult"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "allowCrafting"(): boolean
public "allowLooting"(): boolean
public "attemptInitiateCast"(itemStack0: $ItemStack$$Type, int1: integer, level2: $Level$$Type, player3: $Player$$Type, castSource4: $CastSource$$Type, boolean5: boolean, string6: string): boolean
public "canBeCastedBy"(int0: integer, castSource1: $CastSource$$Type, magicData2: $MagicData$$Type, player3: $Player$$Type): $CastResult
public "canBeCraftedBy"(player0: $Player$$Type): boolean
public "canBeInterrupted"(player0: $Player$$Type): boolean
public "castSpell"(level0: $Level$$Type, int1: integer, serverPlayer2: $ServerPlayer$$Type, castSource3: $CastSource$$Type, boolean4: boolean): void
public "checkPreCastConditions"(level0: $Level$$Type, int1: integer, livingEntity2: $LivingEntity$$Type, magicData3: $MagicData$$Type): boolean
public "getCastFinishAnimation"(): $AnimationHolder
public "getCastFinishSound"(): $Optional<$SoundEvent>
public "getCastStartAnimation"(): $AnimationHolder
public "getCastStartSound"(): $Optional<$SoundEvent>
public "getCastTime"(int0: integer): integer
public "getCastType"(): $CastType
public "getComponentId"(): string
public "getDamageSource"(entity0: $Entity$$Type): $SpellDamageSource
public "getDamageSource"(entity0: $Entity$$Type, entity1: $Entity$$Type): $SpellDamageSource
public "getDeathMessageId"(): string
public "getDefaultConfig"(): $DefaultConfig
public "getDisplayName"(player0: $Player$$Type): $MutableComponent
public "getEffectiveCastTime"(int0: integer, livingEntity1: $LivingEntity$$Type): integer
public "getEmptyCastData"(): $ICastDataSerializable
public "getEntityPowerMultiplier"(livingEntity0: $LivingEntity$$Type): float
public "getLevelFor"(int0: integer, livingEntity1: $LivingEntity$$Type): integer
public "getLockedMessage"(): $Component
public "getManaCost"(int0: integer): integer
public "getMaxLevel"(): integer
public "getMaxRarity"(): integer
public "getMinLevel"(): integer
public "getMinLevelForRarity"(spellRarity0: $SpellRarity$$Type): integer
/** @deprecated */
public "getMinRarity"(): integer
public "getRarity"(int0: integer): $SpellRarity
public "getRecastCount"(int0: integer, livingEntity1: $LivingEntity$$Type): integer
public "getSchoolType"(): $SchoolType
public "getSpellCooldown"(): integer
public "getSpellIconResource"(): $ResourceLocation
public "getSpellId"(): string
public "getSpellName"(): string
public "getSpellPower"(int0: integer, entity1: $Entity$$Type): float
public "getSpellResource"(): $ResourceLocation
public "getTargetingColor"(): $Vector3f
public "getUniqueInfo"(int0: integer, livingEntity1: $LivingEntity$$Type): $List<$MutableComponent>
public "isEnabled"(): boolean
public "isLearned"(player0: $Player$$Type): boolean
public "obfuscateStats"(player0: $Player$$Type): boolean
public "onCast"(level0: $Level$$Type, int1: integer, livingEntity2: $LivingEntity$$Type, castSource3: $CastSource$$Type, magicData4: $MagicData$$Type): void
public "onClientCast"(level0: $Level$$Type, int1: integer, livingEntity2: $LivingEntity$$Type, iCastData3: $ICastData$$Type): void
public "onClientPreCast"(level0: $Level$$Type, int1: integer, livingEntity2: $LivingEntity$$Type, interactionHand3: $InteractionHand$$Type, magicData4: $MagicData$$Type): void
public "onRecastFinished"(serverPlayer0: $ServerPlayer$$Type, recastInstance1: $RecastInstance$$Type, recastResult2: $RecastResult$$Type, iCastDataSerializable3: $ICastDataSerializable$$Type): void
public "onServerCastComplete"(level0: $Level$$Type, int1: integer, livingEntity2: $LivingEntity$$Type, magicData3: $MagicData$$Type, boolean4: boolean): void
public "onServerCastTick"(level0: $Level$$Type, int1: integer, livingEntity2: $LivingEntity$$Type, magicData3: $MagicData$$Type): void
public "onServerPreCast"(level0: $Level$$Type, int1: integer, livingEntity2: $LivingEntity$$Type, magicData3: $MagicData$$Type): void
public "playSound"(optional0: $Optional$$Type<$SoundEvent$$Type>, entity1: $Entity$$Type): void
public "requiresLearning"(): boolean
public "resetRarityWeights"(): void
public "shouldAIStopCasting"(int0: integer, mob1: $Mob$$Type, livingEntity2: $LivingEntity$$Type): boolean
public "stopSoundOnCancel"(): boolean
get "castFinishAnimation"(): $AnimationHolder
get "castFinishSound"(): $Optional<$SoundEvent>
get "castStartAnimation"(): $AnimationHolder
get "castStartSound"(): $Optional<$SoundEvent>
get "castType"(): $CastType
get "componentId"(): string
get "deathMessageId"(): string
get "defaultConfig"(): $DefaultConfig
get "emptyCastData"(): $ICastDataSerializable
get "lockedMessage"(): $Component
get "maxLevel"(): integer
get "maxRarity"(): integer
get "minLevel"(): integer
get "minRarity"(): integer
get "schoolType"(): $SchoolType
get "spellCooldown"(): integer
get "spellIconResource"(): $ResourceLocation
get "spellId"(): string
get "spellName"(): string
get "spellResource"(): $ResourceLocation
get "targetingColor"(): $Vector3f
get "enabled"(): boolean
}
}

declare module "io.redspace.ironsspellbooks.api.config.SpellConfigParameter" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SchoolType } from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"
import { $SpellRarity } from "io.redspace.ironsspellbooks.api.spells.SpellRarity"
import { $Record } from "java.lang.Record"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"

export class $SpellConfigParameter<T = any> extends $Record {
static readonly "ALLOW_CRAFTING": $SpellConfigParameter<boolean>
static readonly "COOLDOWN_IN_SECONDS": $SpellConfigParameter<double>
static readonly "ENABLED": $SpellConfigParameter<boolean>
static readonly "MANA_MULTIPLIER": $SpellConfigParameter<double>
static readonly "MAX_LEVEL": $SpellConfigParameter<integer>
static readonly "MIN_RARITY": $SpellConfigParameter<$SpellRarity>
static readonly "POWER_MULTIPLIER": $SpellConfigParameter<double>
static readonly "SCHOOL": $SpellConfigParameter<$SchoolType>

constructor(resourceLocation0: $ResourceLocation$$Type, codec1: $Codec$$Type<T>, t2: T)
constructor(key: $ResourceLocation$$Type, datatype: $Codec$$Type<T>, defaultValue: $Supplier$$Type<T>)

public "datatype"(): $Codec<T>
public "defaultValue"(): $Supplier<T>
public "key"(): $ResourceLocation
}
}

declare module "io.redspace.ironsspellbooks.api.magic.MagicData" {
import { $SyncedSpellData, $SyncedSpellData$$Type } from "io.redspace.ironsspellbooks.capabilities.magic.SyncedSpellData"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $SpellData } from "io.redspace.ironsspellbooks.api.spells.SpellData"
import { $HolderLookup$Provider$$Type } from "net.minecraft.core.HolderLookup$Provider"
import { $CastType } from "io.redspace.ironsspellbooks.api.spells.CastType"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $ICastData, $ICastData$$Type } from "io.redspace.ironsspellbooks.api.spells.ICastData"
import { $CastSource, $CastSource$$Type } from "io.redspace.ironsspellbooks.api.spells.CastSource"
import { $PlayerRecasts, $PlayerRecasts$$Type } from "io.redspace.ironsspellbooks.capabilities.magic.PlayerRecasts"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $PlayerCooldowns } from "io.redspace.ironsspellbooks.capabilities.magic.PlayerCooldowns"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $MagicData {
static readonly "COOLDOWNS": string
static readonly "MANA": string
static readonly "RECASTS": string

constructor()
constructor(boolean0: boolean)
constructor(serverPlayer0: $ServerPlayer$$Type)

public "addMana"(float0: float): void
public "getAdditionalCastData"(): $ICastData
public "getCastCompletionPercent"(): float
public "getCastDuration"(): integer
public "getCastDurationRemaining"(): integer
public "getCastSource"(): $CastSource
public "getCastType"(): $CastType
public "getCastingEquipmentSlot"(): string
public "getCastingSpell"(): $SpellData
public "getCastingSpellId"(): string
public "getCastingSpellLevel"(): integer
public "getMana"(): float
public "getPlayerCastingItem"(): $ItemStack
public "getPlayerCooldowns"(): $PlayerCooldowns
public static "getPlayerMagicData"(livingEntity0: $LivingEntity$$Type): $MagicData
public "getPlayerRecasts"(): $PlayerRecasts
public "getSyncedData"(): $SyncedSpellData
public "handleCastDuration"(): void
public "initiateCast"(abstractSpell0: $AbstractSpell$$Type, int1: integer, int2: integer, castSource3: $CastSource$$Type, string4: string): void
public "isCasting"(): boolean
public "loadNBTData"(compoundTag0: $CompoundTag$$Type, provider1: $HolderLookup$Provider$$Type): void
public "markPoisoned"(): void
public "popMarkedPoison"(): boolean
public "resetAdditionalCastData"(): void
public "resetCastingState"(): void
public "saveNBTData"(compoundTag0: $CompoundTag$$Type, provider1: $HolderLookup$Provider$$Type): void
public "setAdditionalCastData"(iCastData0: $ICastData$$Type): void
public "setMana"(float0: float): void
public "setPlayerCastingItem"(itemStack0: $ItemStack$$Type): void
/** Client only, do not use in server scripts */
public "setPlayerRecasts"(playerRecasts0: $PlayerRecasts$$Type): void
public "setServerPlayer"(serverPlayer0: $ServerPlayer$$Type): void
public "setSyncedData"(syncedSpellData0: $SyncedSpellData$$Type): void
get "additionalCastData"(): $ICastData
get "castCompletionPercent"(): float
get "castDuration"(): integer
get "castDurationRemaining"(): integer
get "castSource"(): $CastSource
get "castType"(): $CastType
get "castingEquipmentSlot"(): string
get "castingSpell"(): $SpellData
get "castingSpellId"(): string
get "castingSpellLevel"(): integer
get "mana"(): float
get "playerCastingItem"(): $ItemStack
get "playerCooldowns"(): $PlayerCooldowns
get "playerRecasts"(): $PlayerRecasts
get "syncedData"(): $SyncedSpellData
get "casting"(): boolean
set "additionalCastData"(value: $ICastData$$Type)
set "mana"(value: float)
set "playerCastingItem"(value: $ItemStack$$Type)
set "playerRecasts"(value: $PlayerRecasts$$Type)
set "serverPlayer"(value: $ServerPlayer$$Type)
set "syncedData"(value: $SyncedSpellData$$Type)
}
}

declare module "io.redspace.ironsspellbooks.api.magic.MagicData$IExtendedEntity" {
import { $IArmorCapeProvider$CapeData } from "io.redspace.ironsspellbooks.item.armor.IArmorCapeProvider$CapeData"
import { $MagicData } from "io.redspace.ironsspellbooks.api.magic.MagicData"

export interface $MagicData$IExtendedEntity {
"irons_spellbooks$getCapData"(): $IArmorCapeProvider$CapeData
"irons_spellbooks$getMagicData"(): $MagicData
}

export namespace $MagicData$IExtendedEntity {
const probejs$$marker: never
}
export abstract class $MagicData$IExtendedEntity$$Static implements $MagicData$IExtendedEntity {
}
}

declare module "io.redspace.ironsspellbooks.api.events.SpellPreCastEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $CastSource, $CastSource$$Type } from "io.redspace.ironsspellbooks.api.spells.CastSource"
import { $SchoolType, $SchoolType$$Type } from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $SpellPreCastEvent extends $PlayerEvent {
constructor(player0: $Player$$Type, string1: string, int2: integer, schoolType3: $SchoolType$$Type, castSource4: $CastSource$$Type)
constructor()

public "getCastSource"(): $CastSource
public "getSchoolType"(): $SchoolType
public "getSpellId"(): string
public "getSpellLevel"(): integer
get "castSource"(): $CastSource
get "schoolType"(): $SchoolType
get "spellId"(): string
get "spellLevel"(): integer
}
}

declare module "io.redspace.ironsspellbooks.api.events.InscribeSpellEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $SpellData, $SpellData$$Type } from "io.redspace.ironsspellbooks.api.spells.SpellData"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $InscribeSpellEvent extends $PlayerEvent {
constructor(player0: $Player$$Type, spellData1: $SpellData$$Type)
constructor()

public "getSpellData"(): $SpellData
get "spellData"(): $SpellData
}
}

declare module "io.redspace.ironslib.mixin.ArmorStandAccessor" {
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $ArmorStandAccessor {
"irons_lib$getArmorItems"(): $NonNullList<$ItemStack>
}

export namespace $ArmorStandAccessor {
const probejs$$marker: never
}
export abstract class $ArmorStandAccessor$$Static implements $ArmorStandAccessor {
}
}

declare module "io.redspace.ironsspellbooks.api.spells.ICastData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICastData {
"reset"(): void
}

export namespace $ICastData {
const probejs$$marker: never
}
export abstract class $ICastData$$Static implements $ICastData {
}
}

declare module "io.redspace.ironslib.game.client.ICapeDataProvider" {
import { $CapeData } from "io.redspace.ironslib.game.client.CapeData"

export interface $ICapeDataProvider {
"irons_lib$getCapeData"(): $CapeData
}

export namespace $ICapeDataProvider {
const probejs$$marker: never
}
export abstract class $ICapeDataProvider$$Static implements $ICapeDataProvider {
}
}

declare module "io.redspace.ironsspellbooks.api.spells.SchoolType" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $DamageType } from "net.minecraft.world.damagesource.DamageType"
import { $Attribute, $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $LazyOptional$$Type } from "net.minecraftforge.common.util.LazyOptional"
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Vector3f } from "org.joml.Vector3f"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $SchoolType {
constructor(resourceLocation0: $ResourceLocation$$Type, tagKey1: $TagKey$$Type<$Item$$Type>, component2: $Component$$Type, supplier3: $Supplier$$Type<$Attribute>, supplier4: $Supplier$$Type<$Attribute>, supplier5: $Supplier$$Type<$SoundEvent>, resourceKey6: $ResourceKey$$Type<$DamageType>, boolean7: boolean, boolean8: boolean)
constructor(resourceLocation0: $ResourceLocation$$Type, tagKey1: $TagKey$$Type<$Item$$Type>, component2: $Component$$Type, supplier3: $Supplier$$Type<$Attribute>, supplier4: $Supplier$$Type<$Attribute>, supplier5: $Supplier$$Type<$SoundEvent>, resourceKey6: $ResourceKey$$Type<$DamageType>)
/** @deprecated */
constructor(resourceLocation0: $ResourceLocation$$Type, tagKey1: $TagKey$$Type<$Item$$Type>, component2: $Component$$Type, lazyOptional3: $LazyOptional$$Type<$Attribute$$Type>, lazyOptional4: $LazyOptional$$Type<$Attribute$$Type>, lazyOptional5: $LazyOptional$$Type<$SoundEvent$$Type>, resourceKey6: $ResourceKey$$Type<$DamageType>)

public "getCastSound"(): $SoundEvent
public "getDamageType"(): $ResourceKey<$DamageType>
public "getDisplayName"(): $Component
public "getFocus"(): $TagKey<$Item>
public "getId"(): $ResourceLocation
public "getPowerFor"(livingEntity0: $LivingEntity$$Type): double
public "getResistanceFor"(livingEntity0: $LivingEntity$$Type): double
public "getTargetingColor"(): $Vector3f
public "isFocus"(itemStack0: $ItemStack$$Type): boolean
get "castSound"(): $SoundEvent
get "damageType"(): $ResourceKey<$DamageType>
get "displayName"(): $Component
get "focus"(): $TagKey<$Item>
get "id"(): $ResourceLocation
get "targetingColor"(): $Vector3f
}
}

declare module "io.redspace.ironsspellbooks.api.events.SpellTeleportEvent" {
import { $EntityTeleportEvent } from "net.minecraftforge.event.entity.EntityTeleportEvent"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $AbstractSpell, $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $SpellTeleportEvent extends $EntityTeleportEvent {
constructor(abstractSpell0: $AbstractSpell$$Type, entity1: $Entity$$Type, double2: double, double3: double, double4: double)
constructor()

public "getSpell"(): $AbstractSpell
get "spell"(): $AbstractSpell
}
}

declare module "io.redspace.ironsspellbooks.api.events.CounterSpellEvent" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $CounterSpellEvent extends $Event {
readonly "caster": $Entity
readonly "target": $Entity

constructor(entity0: $Entity$$Type, entity1: $Entity$$Type)
constructor()

}
}

declare module "io.redspace.ironsspellbooks.api.network.ISerializable" {
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export interface $ISerializable {
"readFromBuffer"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
"writeToBuffer"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
}

export namespace $ISerializable {
const probejs$$marker: never
}
export abstract class $ISerializable$$Static implements $ISerializable {
}
}

declare module "io.redspace.ironsspellbooks.api.events.SpellCooldownAddedEvent$Post" {
import { $CastSource$$Type } from "io.redspace.ironsspellbooks.api.spells.CastSource"
import { $SpellCooldownAddedEvent } from "io.redspace.ironsspellbooks.api.events.SpellCooldownAddedEvent"
import { $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $SpellCooldownAddedEvent$Post extends $SpellCooldownAddedEvent {
constructor(int0: integer, abstractSpell1: $AbstractSpell$$Type, player2: $Player$$Type, castSource3: $CastSource$$Type)
constructor()

}
}

declare module "io.redspace.ironsspellbooks.api.spells.CastType" {
import { $Enum } from "java.lang.Enum"

export class $CastType extends $Enum<$CastType> {
static readonly "CONTINUOUS": $CastType
static readonly "INSTANT": $CastType
static readonly "LONG": $CastType
static readonly "NONE": $CastType

public "getValue"(): integer
public "immediatelySuppressRightClicks"(): boolean
public static "valueOf"(string0: string): $CastType
public static "values"(): $CastType[]
get "value"(): integer
}
}

declare module "io.redspace.ironsspellbooks.api.events.SpellCooldownAddedEvent" {
import { $CastSource, $CastSource$$Type } from "io.redspace.ironsspellbooks.api.spells.CastSource"
import { $AbstractSpell, $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $SpellCooldownAddedEvent extends $Event {
constructor(int0: integer, abstractSpell1: $AbstractSpell$$Type, player2: $Player$$Type, castSource3: $CastSource$$Type)
constructor()

public "getCastSource"(): $CastSource
public "getEffectiveCooldown"(): integer
public "getEntity"(): $Player
public "getSpell"(): $AbstractSpell
get "castSource"(): $CastSource
get "effectiveCooldown"(): integer
get "entity"(): $Player
get "spell"(): $AbstractSpell
}
}

declare module "io.redspace.ironslib.game.client.CapeData" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"

export class $CapeData {
constructor()

public "calculateRotationsDegrees"(livingEntity0: $LivingEntity$$Type, float1: float): $Vec3
public "renderUpdate"(livingEntity0: $LivingEntity$$Type): void
get "bob"(): float
set "bob"(value: float)
get "lastTick"(): integer
set "lastTick"(value: integer)
get "oBob"(): float
set "oBob"(value: float)
get "xCloak"(): double
set "xCloak"(value: double)
get "xCloakO"(): double
set "xCloakO"(value: double)
get "yCloak"(): double
set "yCloak"(value: double)
get "yCloakO"(): double
set "yCloakO"(value: double)
get "zCloak"(): double
set "zCloak"(value: double)
get "zCloakO"(): double
set "zCloakO"(value: double)
}
}

declare module "io.redspace.ironsspellbooks.api.spells.CastResult$Type" {
import { $Enum } from "java.lang.Enum"

export class $CastResult$Type extends $Enum<$CastResult$Type> {
static readonly "FAILURE": $CastResult$Type
static readonly "SUCCESS": $CastResult$Type

public static "valueOf"(string0: string): $CastResult$Type
public static "values"(): $CastResult$Type[]
}
}

declare module "io.redspace.ironsspellbooks.gui.overlays.SpellSelection" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ISerializable } from "io.redspace.ironsspellbooks.api.network.ISerializable"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $INBTSerializable } from "net.minecraftforge.common.util.INBTSerializable"

export class $SpellSelection implements $ISerializable, $INBTSerializable<$CompoundTag> {
constructor()
constructor(string0: string, int1: integer, string2: string, int3: integer)
constructor(string0: string, int1: integer)

public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "isEmpty"(): boolean
public "makeSelection"(string0: string, int1: integer): void
public "readFromBuffer"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "serializeNBT"(): $CompoundTag
public "writeToBuffer"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "equipmentSlot"(): string
set "equipmentSlot"(value: string)
get "index"(): integer
set "index"(value: integer)
get "lastEquipmentSlot"(): string
set "lastEquipmentSlot"(value: string)
get "lastIndex"(): integer
set "lastIndex"(value: integer)
get "empty"(): boolean
}
}

declare module "io.redspace.ironsspellbooks.api.events.SpellCooldownAddedEvent$Pre" {
import { $CastSource$$Type } from "io.redspace.ironsspellbooks.api.spells.CastSource"
import { $SpellCooldownAddedEvent } from "io.redspace.ironsspellbooks.api.events.SpellCooldownAddedEvent"
import { $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $SpellCooldownAddedEvent$Pre extends $SpellCooldownAddedEvent {
constructor(int0: integer, abstractSpell1: $AbstractSpell$$Type, player2: $Player$$Type, castSource3: $CastSource$$Type)
constructor()

public "setEffectiveCooldown"(int0: integer): void
set "effectiveCooldown"(value: integer)
}
}

declare module "io.redspace.ironsspellbooks.api.config.RegisterConfigParametersEvent" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $SpellConfigParameter$$Type } from "io.redspace.ironsspellbooks.api.config.SpellConfigParameter"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $RegisterConfigParametersEvent extends $Event {
constructor(consumer0: $Consumer$$Type<$SpellConfigParameter$$Type<any>>)
constructor()

public "register"(spellConfigParameter0: $SpellConfigParameter$$Type<any>): void
}
}

declare module "io.redspace.ironsspellbooks.api.events.SpellHealEvent" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $SchoolType, $SchoolType$$Type } from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"

export class $SpellHealEvent extends $LivingEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, livingEntity1: $LivingEntity$$Type, float2: float, schoolType3: $SchoolType$$Type)

public "getHealAmount"(): float
public "getSchoolType"(): $SchoolType
public "getTargetEntity"(): $LivingEntity
get "healAmount"(): float
get "schoolType"(): $SchoolType
get "targetEntity"(): $LivingEntity
}
}

declare module "io.redspace.ironsspellbooks.api.spells.ICastDataSerializable" {
import { $ICastData } from "io.redspace.ironsspellbooks.api.spells.ICastData"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ISerializable } from "io.redspace.ironsspellbooks.api.network.ISerializable"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $INBTSerializable } from "net.minecraftforge.common.util.INBTSerializable"

export interface $ICastDataSerializable extends $ICastData, $ISerializable, $INBTSerializable<$CompoundTag> {
"deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
"readFromBuffer"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
"reset"(): void
"serializeNBT"(): $CompoundTag
"writeToBuffer"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
}

export namespace $ICastDataSerializable {
const probejs$$marker: never
}
export abstract class $ICastDataSerializable$$Static implements $ICastDataSerializable {
}
}

declare module "io.redspace.ironsspellbooks.api.spells.SpellRarity" {
import { $List } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $ChatFormatting } from "net.minecraft.ChatFormatting"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"

export class $SpellRarity extends $Enum<$SpellRarity> implements $StringRepresentable {
static readonly "CODEC": $Codec<$SpellRarity>
static readonly "COMMON": $SpellRarity
static readonly "EPIC": $SpellRarity
static readonly "LEGENDARY": $SpellRarity
static readonly "RARE": $SpellRarity
static readonly "UNCOMMON": $SpellRarity

public "compareRarity"(spellRarity0: $SpellRarity$$Type): integer
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getChatFormatting"(): $ChatFormatting
public "getDisplayName"(): $MutableComponent
public static "getRarityConfig"(): $List<double>
public static "getRawRarityConfig"(): $List<double>
public "getSerializedName"(): string
public "getValue"(): integer
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "rarityTest"(): void
public static "valueOf"(string0: string): $SpellRarity
public static "values"(): $SpellRarity[]
get "chatFormatting"(): $ChatFormatting
get "displayName"(): $MutableComponent
get "serializedName"(): string
get "value"(): integer
}
}

declare module "io.redspace.ironsspellbooks.api.spells.CastSource" {
import { $Enum } from "java.lang.Enum"

export class $CastSource extends $Enum<$CastSource> {
static readonly "COMMAND": $CastSource
static readonly "MOB": $CastSource
static readonly "NONE": $CastSource
static readonly "SCROLL": $CastSource
static readonly "SPELLBOOK": $CastSource
static readonly "SWORD": $CastSource

public "consumesMana"(): boolean
public "respectsCooldown"(): boolean
public static "valueOf"(string0: string): $CastSource
public static "values"(): $CastSource[]
}
}

