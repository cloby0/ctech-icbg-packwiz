declare module "vazkii.psi.api.spell.SpellParam$Side" {
import { $Enum } from "java.lang.Enum"

export class $SpellParam$Side extends $Enum<$SpellParam$Side> {
static readonly "BOTTOM": $SpellParam$Side
static readonly "DIRECTIONS": $SpellParam$Side[]
static readonly "LEFT": $SpellParam$Side
static readonly "OFF": $SpellParam$Side
static readonly "RIGHT": $SpellParam$Side
static readonly "TOP": $SpellParam$Side
readonly "maxx": integer
readonly "maxy": integer
readonly "minx": integer
readonly "miny": integer
readonly "offx": integer
readonly "offy": integer
readonly "u": integer
readonly "v": integer

public "asInt"(): integer
public static "fromInt"(int0: integer): $SpellParam$Side
public "getOpposite"(): $SpellParam$Side
public "isEnabled"(): boolean
public "mirrorVertical"(): $SpellParam$Side
public "rotateCCW"(): $SpellParam$Side
public "rotateCW"(): $SpellParam$Side
public static "valueOf"(string0: string): $SpellParam$Side
public static "values"(): $SpellParam$Side[]
get "opposite"(): $SpellParam$Side
get "enabled"(): boolean
}
}

declare module "vazkii.psi.mixin.client.AccessorRenderType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorRenderType {
}

export namespace $AccessorRenderType {
const probejs$$marker: never
}
export abstract class $AccessorRenderType$$Static implements $AccessorRenderType {
}
}

declare module "vazkii.psi.api.cad.CADStatEvent" {
import { $EnumCADComponent } from "vazkii.psi.api.cad.EnumCADComponent"
import { $EnumCADStat, $EnumCADStat$$Type } from "vazkii.psi.api.cad.EnumCADStat"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $CADStatEvent extends $Event {
constructor(enumCADStat0: $EnumCADStat$$Type, itemStack1: $ItemStack$$Type, itemStack2: $ItemStack$$Type, int3: integer)
constructor()

public "getCad"(): $ItemStack
public "getComponent"(): $ItemStack
public "getStat"(): $EnumCADStat
public "getStatProvider"(): $EnumCADComponent
public "getStatValue"(): integer
public "setStatValue"(int0: integer): void
get "cad"(): $ItemStack
get "component"(): $ItemStack
get "stat"(): $EnumCADStat
get "statProvider"(): $EnumCADComponent
get "statValue"(): integer
set "statValue"(value: integer)
}
}

declare module "vazkii.psi.api.cad.ITileCADAssembler" {
import { $EnumCADComponent$$Type } from "vazkii.psi.api.cad.EnumCADComponent"
import { $ISocketable } from "vazkii.psi.api.cad.ISocketable"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $ITileCADAssembler {
"clearCachedCAD"(): void
"getCachedCAD"(player0: $Player$$Type): $ItemStack
"getComponentSlot"(enumCADComponent0: $EnumCADComponent$$Type): integer
"getSocketable"(): $ISocketable
"getSocketableStack"(): $ItemStack
"getStackForComponent"(enumCADComponent0: $EnumCADComponent$$Type): $ItemStack
"isBulletSlotEnabled"(int0: integer): boolean
"onCraftCAD"(itemStack0: $ItemStack$$Type): void
"setSocketableStack"(itemStack0: $ItemStack$$Type): boolean
"setStackForComponent"(enumCADComponent0: $EnumCADComponent$$Type, itemStack1: $ItemStack$$Type): boolean
get "socketable"(): $ISocketable
get "socketableStack"(): $ItemStack
set "socketableStack"(value: $ItemStack$$Type)
}

export namespace $ITileCADAssembler {
const probejs$$marker: never
}
export abstract class $ITileCADAssembler$$Static implements $ITileCADAssembler {
}
}

declare module "vazkii.psi.api.cad.AssembleCADEvent" {
import { $ITileCADAssembler, $ITileCADAssembler$$Type } from "vazkii.psi.api.cad.ITileCADAssembler"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $AssembleCADEvent extends $Event {
constructor(itemStack0: $ItemStack$$Type, iTileCADAssembler1: $ITileCADAssembler$$Type, player2: $Player$$Type)
constructor()

public "getAssembler"(): $ITileCADAssembler
public "getCad"(): $ItemStack
public "getPlayer"(): $Player
public "setCad"(itemStack0: $ItemStack$$Type): void
get "assembler"(): $ITileCADAssembler
get "cad"(): $ItemStack
get "player"(): $Player
set "cad"(value: $ItemStack$$Type)
}
}

declare module "vazkii.psi.api.cad.EnumCADStat" {
import { $Enum } from "java.lang.Enum"
import { $EnumCADComponent } from "vazkii.psi.api.cad.EnumCADComponent"

export class $EnumCADStat extends $Enum<$EnumCADStat> {
static readonly "BANDWIDTH": $EnumCADStat
static readonly "COMPLEXITY": $EnumCADStat
static readonly "EFFICIENCY": $EnumCADStat
static readonly "OVERFLOW": $EnumCADStat
static readonly "POTENCY": $EnumCADStat
static readonly "PROJECTION": $EnumCADStat
static readonly "SAVED_VECTORS": $EnumCADStat
static readonly "SOCKETS": $EnumCADStat

public "getName"(): string
public "getSourceType"(): $EnumCADComponent
public static "valueOf"(string0: string): $EnumCADStat
public static "values"(): $EnumCADStat[]
get "name"(): string
get "sourceType"(): $EnumCADComponent
}
}

declare module "vazkii.psi.api.spell.SpellGrid$SpellPieceConsumer" {
import { $SpellPiece$$Type } from "vazkii.psi.api.spell.SpellPiece"

export interface $SpellGrid$SpellPieceConsumer {
"accept"(spellPiece0: $SpellPiece$$Type): void
}

export namespace $SpellGrid$SpellPieceConsumer {
const probejs$$marker: never
}
export abstract class $SpellGrid$SpellPieceConsumer$$Static implements $SpellGrid$SpellPieceConsumer {
}
}

declare module "vazkii.psi.api.internal.IPlayerData" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $SpellPiece$$Type } from "vazkii.psi.api.spell.SpellPiece"

export interface $IPlayerData {
"deductPsi"(int0: integer, int1: integer, boolean2: boolean, boolean3: boolean): void
"getAvailablePsi"(): integer
"getCustomData"(): $CompoundTag
"getLastAvailablePsi"(): integer
"getRegenCooldown"(): integer
"getRegenPerTick"(): integer
"getTotalPsi"(): integer
"isOverflowed"(): boolean
"isPieceGroupUnlocked"(resourceLocation0: $ResourceLocation$$Type): boolean
"isPieceGroupUnlocked"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type): boolean
"markPieceExecuted"(spellPiece0: $SpellPiece$$Type): void
"save"(): void
"unlockPieceGroup"(resourceLocation0: $ResourceLocation$$Type): void
get "availablePsi"(): integer
get "customData"(): $CompoundTag
get "lastAvailablePsi"(): integer
get "regenCooldown"(): integer
get "regenPerTick"(): integer
get "totalPsi"(): integer
get "overflowed"(): boolean
}

export namespace $IPlayerData {
const probejs$$marker: never
}
export abstract class $IPlayerData$$Static implements $IPlayerData {
}
}

declare module "vazkii.psi.api.spell.SpellParam" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $SpellPiece$$Type } from "vazkii.psi.api.spell.SpellPiece"
import { $SpellParam$ArrowType, $SpellParam$ArrowType$$Type } from "vazkii.psi.api.spell.SpellParam$ArrowType"

export class $SpellParam<T = any> {
static "BLUE": integer
static "BROWN": integer
static readonly "CONNECTOR_NAME_FROM1": string
static readonly "CONNECTOR_NAME_FROM2": string
static readonly "CONNECTOR_NAME_TO1": string
static readonly "CONNECTOR_NAME_TO2": string
static "CYAN": integer
static readonly "GENERIC_NAME_ANGLE": string
static readonly "GENERIC_NAME_AXIS": string
static readonly "GENERIC_NAME_BASE": string
static readonly "GENERIC_NAME_CHANNEL": string
static readonly "GENERIC_NAME_DIRECTION": string
static readonly "GENERIC_NAME_DISTANCE": string
static readonly "GENERIC_NAME_INSTRUMENT": string
static readonly "GENERIC_NAME_LIST": string
static readonly "GENERIC_NAME_LIST1": string
static readonly "GENERIC_NAME_LIST2": string
static readonly "GENERIC_NAME_MASK": string
static readonly "GENERIC_NAME_MAX": string
static readonly "GENERIC_NAME_MIN": string
static readonly "GENERIC_NAME_NUMBER": string
static readonly "GENERIC_NAME_NUMBER1": string
static readonly "GENERIC_NAME_NUMBER2": string
static readonly "GENERIC_NAME_NUMBER3": string
static readonly "GENERIC_NAME_NUMBER4": string
static readonly "GENERIC_NAME_PITCH": string
static readonly "GENERIC_NAME_POSITION": string
static readonly "GENERIC_NAME_POWER": string
static readonly "GENERIC_NAME_RADIUS": string
static readonly "GENERIC_NAME_RAY": string
static readonly "GENERIC_NAME_RAY_END": string
static readonly "GENERIC_NAME_RAY_START": string
static readonly "GENERIC_NAME_ROOT": string
static readonly "GENERIC_NAME_SLOT": string
static readonly "GENERIC_NAME_TARGET": string
static readonly "GENERIC_NAME_TIME": string
static readonly "GENERIC_NAME_TOGGLE": string
static readonly "GENERIC_NAME_VECTOR": string
static readonly "GENERIC_NAME_VECTOR1": string
static readonly "GENERIC_NAME_VECTOR2": string
static readonly "GENERIC_NAME_VECTOR3": string
static readonly "GENERIC_NAME_VECTOR4": string
static readonly "GENERIC_NAME_VOLUME": string
static readonly "GENERIC_NAME_X": string
static readonly "GENERIC_NAME_Y": string
static readonly "GENERIC_NAME_Z": string
static "GRAY": integer
static "GREEN": integer
static readonly "PSI_PREFIX": string
static "PURPLE": integer
static "RED": integer
static "YELLOW": integer
readonly "arrowType": $SpellParam$ArrowType
readonly "canDisable": boolean
readonly "color": integer
readonly "name": string

constructor(string0: string, int1: integer, boolean2: boolean)
constructor(string0: string, int1: integer, boolean2: boolean, arrowType3: $SpellParam$ArrowType$$Type)

public "canAccept"(spellPiece0: $SpellPiece$$Type): boolean
public "getArrowType"(): $SpellParam$ArrowType
public "getRequiredTypeString"(): $Component
get "requiredTypeString"(): $Component
}
}

declare module "vazkii.psi.api.spell.SpellGrid" {
import { $List$$Type } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $SpellPiece, $SpellPiece$$Type } from "vazkii.psi.api.spell.SpellPiece"
import { $SpellParam$Side$$Type } from "vazkii.psi.api.spell.SpellParam$Side"
import { $Spell, $Spell$$Type } from "vazkii.psi.api.spell.Spell"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $SpellGrid$SpellPieceConsumer$$Type } from "vazkii.psi.api.spell.SpellGrid$SpellPieceConsumer"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $SpellGrid {
static readonly "GRID_CENTER": integer
static readonly "GRID_SIZE": integer
readonly "spell": $Spell

constructor(spell0: $Spell$$Type)

/** Client only, do not use in server scripts */
public "draw"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, int2: integer): void
public static "exists"(int0: integer, int1: integer): boolean
public "getPieceAtSideSafely"(int0: integer, int1: integer, side2: $SpellParam$Side$$Type): $SpellPiece
/** @deprecated */
public "getPieceAtSideWithRedirections"(list0: $List$$Type<$SpellPiece$$Type>, int1: integer, int2: integer, side3: $SpellParam$Side$$Type): $SpellPiece
public "getPieceAtSideWithRedirections"(int0: integer, int1: integer, side2: $SpellParam$Side$$Type, spellPieceConsumer3: $SpellGrid$SpellPieceConsumer$$Type): $SpellPiece
public "getPieceAtSideWithRedirections"(int0: integer, int1: integer, side2: $SpellParam$Side$$Type): $SpellPiece
public "getSize"(): integer
public "isEmpty"(): boolean
public "mirrorVertical"(): void
public "readFromNBT"(compoundTag0: $CompoundTag$$Type): void
public "rotate"(boolean0: boolean): void
public "shift"(side0: $SpellParam$Side$$Type, boolean1: boolean): boolean
public "writeToNBT"(compoundTag0: $CompoundTag$$Type): void
get "gridData"(): $SpellPiece[][]
set "gridData"(value: $SpellPiece$$Type[][])
get "size"(): integer
get "empty"(): boolean
}
}

declare module "vazkii.psi.api.spell.CompiledSpell" {
import { $SpellMetadata } from "vazkii.psi.api.spell.SpellMetadata"
import { $Map } from "java.util.Map"
import { $SpellPiece } from "vazkii.psi.api.spell.SpellPiece"
import { $CompiledSpell$Action, $CompiledSpell$Action$$Type } from "vazkii.psi.api.spell.CompiledSpell$Action"
import { $CompiledSpell$CatchHandler } from "vazkii.psi.api.spell.CompiledSpell$CatchHandler"
import { $SpellContext$$Type } from "vazkii.psi.api.spell.SpellContext"
import { $Stack } from "java.util.Stack"
import { $Spell, $Spell$$Type } from "vazkii.psi.api.spell.Spell"

export class $CompiledSpell {
readonly "actionMap": $Map<$SpellPiece, $CompiledSpell$Action>
readonly "actions": $Stack<$CompiledSpell$Action>
readonly "errorHandlers": $Map<$SpellPiece, $CompiledSpell$CatchHandler>
readonly "metadata": $SpellMetadata
readonly "sourceSpell": $Spell
readonly "spotsEvaluated": boolean[][]

constructor(spell0: $Spell$$Type)

public "execute"(spellContext0: $SpellContext$$Type): boolean
public "hasEvaluated"(int0: integer, int1: integer): boolean
public "safeExecute"(spellContext0: $SpellContext$$Type): void
get "currentAction"(): $CompiledSpell$Action
set "currentAction"(value: $CompiledSpell$Action$$Type)
}
}

declare module "vazkii.psi.api.spell.PieceExecutedEvent" {
import { $SpellPiece, $SpellPiece$$Type } from "vazkii.psi.api.spell.SpellPiece"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PieceExecutedEvent extends $Event {
constructor()
constructor(spellPiece0: $SpellPiece$$Type, player1: $Player$$Type)

public "getPiece"(): $SpellPiece
public "getPlayerEntity"(): $Player
get "piece"(): $SpellPiece
get "playerEntity"(): $Player
}
}

declare module "vazkii.psi.mixin.client.AccessorRenderBuffers" {
import { $Map } from "java.util.Map"
import { $BufferBuilder } from "com.mojang.blaze3d.vertex.BufferBuilder"
import { $RenderType } from "net.minecraft.client.renderer.RenderType"

export interface $AccessorRenderBuffers {
"getFixedBuffers"(): $Map<$RenderType, $BufferBuilder>
get "fixedBuffers"(): $Map<$RenderType, $BufferBuilder>
}

export namespace $AccessorRenderBuffers {
const probejs$$marker: never
}
export abstract class $AccessorRenderBuffers$$Static implements $AccessorRenderBuffers {
}
}

declare module "vazkii.psi.api.spell.CompiledSpell$CatchHandler" {
import { $SpellRuntimeException$$Type } from "vazkii.psi.api.spell.SpellRuntimeException"
import { $SpellPiece, $SpellPiece$$Type } from "vazkii.psi.api.spell.SpellPiece"
import { $CompiledSpell$$Type } from "vazkii.psi.api.spell.CompiledSpell"
import { $SpellContext$$Type } from "vazkii.psi.api.spell.SpellContext"
import { $IErrorCatcher } from "vazkii.psi.api.spell.IErrorCatcher"

export class $CompiledSpell$CatchHandler {
readonly "handler": $IErrorCatcher
readonly "handlerPiece": $SpellPiece

constructor(compiledSpell0: $CompiledSpell$$Type, spellPiece1: $SpellPiece$$Type)

public "suppress"(spellPiece0: $SpellPiece$$Type, spellContext1: $SpellContext$$Type, spellRuntimeException2: $SpellRuntimeException$$Type): boolean
}
}

declare module "vazkii.psi.api.spell.PieceKnowledgeEvent" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $IPlayerData, $IPlayerData$$Type } from "vazkii.psi.api.internal.IPlayerData"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PieceKnowledgeEvent extends $Event {
constructor(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type, player2: $Player$$Type, iPlayerData3: $IPlayerData$$Type, boolean4: boolean)
constructor()

public "getData"(): $IPlayerData
public "getPieceGroup"(): $ResourceLocation
public "getPieceName"(): $ResourceLocation
public "getPlayer"(): $Player
public "isUnlocked"(): boolean
get "data"(): $IPlayerData
get "pieceGroup"(): $ResourceLocation
get "pieceName"(): $ResourceLocation
get "player"(): $Player
get "unlocked"(): boolean
}
}

declare module "vazkii.psi.api.spell.EnumSpellStat" {
import { $Enum } from "java.lang.Enum"
import { $EnumCADStat } from "vazkii.psi.api.cad.EnumCADStat"

export class $EnumSpellStat extends $Enum<$EnumSpellStat> {
static readonly "BANDWIDTH": $EnumSpellStat
static readonly "COMPLEXITY": $EnumSpellStat
static readonly "COST": $EnumSpellStat
static readonly "POTENCY": $EnumSpellStat
static readonly "PROJECTION": $EnumSpellStat

public "getDesc"(): string
public "getName"(): string
public "getTarget"(): $EnumCADStat
public static "valueOf"(string0: string): $EnumSpellStat
public static "values"(): $EnumSpellStat[]
get "desc"(): string
get "name"(): string
get "target"(): $EnumCADStat
}
}

declare module "vazkii.psi.api.spell.SpellRuntimeException" {
import { $Exception } from "java.lang.Exception"

export class $SpellRuntimeException extends $Exception {
static readonly "ARMOR": string
static readonly "BOSS_IMMUNE": string
static readonly "CAD_CASTING_ONLY": string
static readonly "COMPARATOR": string
static readonly "DIVIDE_BY_ZERO": string
static readonly "EVEN_ROOT_NEGATIVE_NUMBER": string
static readonly "IMMUNE_TARGET": string
static readonly "INVALID_BASE": string
static readonly "LOCKED_MEMORY": string
static readonly "MEMORY_OUT_OF_BOUNDS": string
static readonly "NAN": string
static readonly "NEGATIVE_NUMBER": string
static readonly "NON_AXIAL_VECTOR": string
static readonly "NON_POSITIVE_VALUE": string
static readonly "NO_CAD": string
static readonly "NO_MESSAGE": string
static readonly "NULL_TARGET": string
static readonly "NULL_VECTOR": string
static readonly "OUTSIDE_RADIUS": string
static readonly "OUT_OF_BOUNDS": string

constructor(string0: string)

}
}

declare module "vazkii.psi.api.spell.PieceGroupAdvancementComplete" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SpellPiece, $SpellPiece$$Type } from "vazkii.psi.api.spell.SpellPiece"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PieceGroupAdvancementComplete extends $Event {
constructor(spellPiece0: $SpellPiece$$Type, player1: $Player$$Type, resourceLocation2: $ResourceLocation$$Type)
constructor()

public "getPiece"(): $SpellPiece
public "getPieceGroup"(): $ResourceLocation
public "getPlayerEntity"(): $Player
get "piece"(): $SpellPiece
get "pieceGroup"(): $ResourceLocation
get "playerEntity"(): $Player
}
}

declare module "vazkii.psi.api.spell.PreSpellCastEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $SpellContext, $SpellContext$$Type } from "vazkii.psi.api.spell.SpellContext"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $IPlayerData, $IPlayerData$$Type } from "vazkii.psi.api.internal.IPlayerData"
import { $Spell, $Spell$$Type } from "vazkii.psi.api.spell.Spell"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PreSpellCastEvent extends $Event {
constructor(int0: integer, float1: float, int2: integer, int3: integer, spell4: $Spell$$Type, spellContext5: $SpellContext$$Type, player6: $Player$$Type, iPlayerData7: $IPlayerData$$Type, itemStack8: $ItemStack$$Type, itemStack9: $ItemStack$$Type)
constructor()

public "getBullet"(): $ItemStack
public "getCad"(): $ItemStack
public "getCancellationMessage"(): string
public "getContext"(): $SpellContext
public "getCooldown"(): integer
public "getCost"(): integer
public "getParticles"(): integer
public "getPlayer"(): $Player
public "getPlayerData"(): $IPlayerData
public "getSound"(): float
public "getSpell"(): $Spell
public "setCancellationMessage"(string0: string): void
public "setContext"(spellContext0: $SpellContext$$Type): void
public "setCooldown"(int0: integer): void
public "setCost"(int0: integer): void
public "setParticles"(int0: integer): void
public "setSound"(float0: float): void
public "setSpell"(spell0: $Spell$$Type): void
get "bullet"(): $ItemStack
get "cad"(): $ItemStack
get "cancellationMessage"(): string
get "context"(): $SpellContext
get "cooldown"(): integer
get "cost"(): integer
get "particles"(): integer
get "player"(): $Player
get "playerData"(): $IPlayerData
get "sound"(): float
get "spell"(): $Spell
set "cancellationMessage"(value: string)
set "context"(value: $SpellContext$$Type)
set "cooldown"(value: integer)
set "cost"(value: integer)
set "particles"(value: integer)
set "sound"(value: float)
set "spell"(value: $Spell$$Type)
}
}

declare module "vazkii.psi.api.exosuit.PsiArmorEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PsiArmorEvent extends $PlayerEvent {
static readonly "DAMAGE": string
static readonly "DETONATE": string
static readonly "JUMP": string
static readonly "LOW_HP": string
static readonly "LOW_LIGHT": string
static readonly "NONE": string
static readonly "ON_FIRE": string
static readonly "TICK": string
static readonly "UNDERWATER": string
readonly "attacker": $LivingEntity
readonly "damage": double
readonly "type": string

constructor()
constructor(player0: $Player$$Type, string1: string)
constructor(player0: $Player$$Type, string1: string, double2: double, livingEntity3: $LivingEntity$$Type)

public static "post"(psiArmorEvent0: $PsiArmorEvent$$Type): void
}
}

declare module "vazkii.psi.api.gui.RenderPsiHudEvent" {
import { $PsiHudElementType, $PsiHudElementType$$Type } from "vazkii.psi.api.gui.PsiHudElementType"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $RenderPsiHudEvent extends $Event {
constructor(psiHudElementType0: $PsiHudElementType$$Type)
constructor()

public "getType"(): $PsiHudElementType
get "type"(): $PsiHudElementType
}
}

declare module "vazkii.psi.api.cad.EnumCADComponent" {
import { $Enum } from "java.lang.Enum"

export class $EnumCADComponent extends $Enum<$EnumCADComponent> {
static readonly "ASSEMBLY": $EnumCADComponent
static readonly "BATTERY": $EnumCADComponent
static readonly "CORE": $EnumCADComponent
static readonly "DYE": $EnumCADComponent
static readonly "SOCKET": $EnumCADComponent

public "getName"(): string
public static "valueOf"(string0: string): $EnumCADComponent
public static "values"(): $EnumCADComponent[]
get "name"(): string
}
}

declare module "vazkii.psi.api.cad.ISocketable" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $List } from "java.util.List"
import { $Component } from "net.minecraft.network.chat.Component"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $ISocketable {
"canLoopcast"(): boolean
"getBulletInSocket"(int0: integer): $ItemStack
"getLastSlot"(): integer
"getRadialMenuIcons"(): $List<$ResourceLocation>
"getRadialMenuSlots"(): $List<integer>
"getSelectedBullet"(): $ItemStack
"getSelectedSlot"(): integer
"isItemValid"(int0: integer, itemStack1: $ItemStack$$Type): boolean
"isSocketSlotAvailable"(int0: integer): boolean
"setBulletInSocket"(int0: integer, itemStack1: $ItemStack$$Type): void
"setSelectedSlot"(int0: integer): void
get "lastSlot"(): integer
get "radialMenuIcons"(): $List<$ResourceLocation>
get "radialMenuSlots"(): $List<integer>
get "selectedBullet"(): $ItemStack
get "selectedSlot"(): integer
set "selectedSlot"(value: integer)
}

export namespace $ISocketable {
const MAX_ASSEMBLER_SLOTS: integer
const signs: $List<$ResourceLocation>
function getSocketedItemName(itemStack0: $ItemStack$$Type, string1: string): $Component
function isSocketable(itemStack0: $ItemStack$$Type): boolean
function socketable(itemStack0: $ItemStack$$Type): $ISocketable
}
export abstract class $ISocketable$$Static implements $ISocketable {
static readonly "MAX_ASSEMBLER_SLOTS": integer
static readonly "signs": $List<$ResourceLocation>

static "getSocketedItemName"(itemStack0: $ItemStack$$Type, string1: string): $Component
static "isSocketable"(itemStack0: $ItemStack$$Type): boolean
static "socketable"(itemStack0: $ItemStack$$Type): $ISocketable
}
}

declare module "vazkii.psi.api.cad.CADTakeEvent" {
import { $ITileCADAssembler, $ITileCADAssembler$$Type } from "vazkii.psi.api.cad.ITileCADAssembler"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $CADTakeEvent extends $Event {
constructor(itemStack0: $ItemStack$$Type, iTileCADAssembler1: $ITileCADAssembler$$Type, player2: $Player$$Type)
constructor()

public "getAssembler"(): $ITileCADAssembler
public "getCad"(): $ItemStack
public "getCancellationMessage"(): string
public "getPlayer"(): $Player
public "getSound"(): float
public "setCancellationMessage"(string0: string): void
public "setSound"(float0: float): void
get "assembler"(): $ITileCADAssembler
get "cad"(): $ItemStack
get "cancellationMessage"(): string
get "player"(): $Player
get "sound"(): float
set "cancellationMessage"(value: string)
set "sound"(value: float)
}
}

declare module "vazkii.psi.api.spell.SpellPiece" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $SpellMetadata$$Type } from "vazkii.psi.api.spell.SpellMetadata"
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $RenderType } from "net.minecraft.client.renderer.RenderType"
import { $SpellContext$$Type } from "vazkii.psi.api.spell.SpellContext"
import { $SpellParam$ArrowType$$Type } from "vazkii.psi.api.spell.SpellParam$ArrowType"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $List$$Type } from "java.util.List"
import { $EnumPieceType } from "vazkii.psi.api.spell.EnumPieceType"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $EnumSpellStat$$Type } from "vazkii.psi.api.spell.EnumSpellStat"
import { $StatLabel$$Type } from "vazkii.psi.api.spell.StatLabel"
import { $Map } from "java.util.Map"
import { $SpellParam, $SpellParam$$Type } from "vazkii.psi.api.spell.SpellParam"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $SpellParam$Side, $SpellParam$Side$$Type } from "vazkii.psi.api.spell.SpellParam$Side"
import { $Spell, $Spell$$Type } from "vazkii.psi.api.spell.Spell"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"

export class $SpellPiece {
readonly "paramSides": $Map<$SpellParam<any>, $SpellParam$Side>
readonly "params": $Map<string, $SpellParam<any>>
readonly "registryKey": $ResourceLocation
readonly "spell": $Spell

constructor(spell0: $Spell$$Type)

public "addParam"(spellParam0: $SpellParam$$Type<any>): void
public "addToMetadata"(spellMetadata0: $SpellMetadata$$Type): void
/** Client only, do not use in server scripts */
public "addToTooltipAfterCtrl"(list0: $List$$Type<$Component$$Type>): void
/** Client only, do not use in server scripts */
public "addToTooltipAfterShift"(list0: $List$$Type<$Component$$Type>): void
public "copy"(): $SpellPiece
public "copyFromSpell"(spell0: $Spell$$Type): $SpellPiece
public static "create"(class0: $Class$$Type<$SpellPiece$$Type>, spell1: $Spell$$Type): $SpellPiece
public static "createFromNBT"(spell0: $Spell$$Type, compoundTag1: $CompoundTag$$Type): $SpellPiece
/** Client only, do not use in server scripts */
public "draw"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, int2: integer): void
/** Client only, do not use in server scripts */
public "drawAdditional"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, int2: integer): void
/** Client only, do not use in server scripts */
public "drawBackground"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, int2: integer): void
/** Client only, do not use in server scripts */
public "drawComment"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, int2: integer): void
/** Client only, do not use in server scripts */
public "drawCommentText"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, list3: $List$$Type<$Component$$Type>, screen4: $Screen$$Type): void
/** Client only, do not use in server scripts */
public "drawParam"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, int2: integer, spellParam3: $SpellParam$$Type<any>): void
/** Client only, do not use in server scripts */
public "drawParam"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, int2: integer, side3: $SpellParam$Side$$Type, int4: integer, arrowType5: $SpellParam$ArrowType$$Type, float6: float): void
/** Client only, do not use in server scripts */
public "drawParams"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, int2: integer): void
/** Client only, do not use in server scripts */
public "drawTooltip"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, list3: $List$$Type<$Component$$Type>, screen4: $Screen$$Type): void
public "evaluate"(): any
public "execute"(spellContext0: $SpellContext$$Type): any
public "getEvaluationType"(): $Class<any>
public "getEvaluationTypeString"(): $Component
/** Client only, do not use in server scripts */
public static "getLayer"(): $RenderType
public "getNonNullParamEvaluation"<T>(spellParam0: $SpellParam$$Type<T>): T
public "getNonnullParamValue"<T>(spellContext0: $SpellContext$$Type, spellParam1: $SpellParam$$Type<T>): T
/** Client only, do not use in server scripts */
public "getParamArrowCount"(side0: $SpellParam$Side$$Type): integer
/** Client only, do not use in server scripts */
public "getParamArrowIndex"(spellParam0: $SpellParam$$Type<any>): integer
public "getParamEvaluation"<T>(spellParam0: $SpellParam$$Type<any>): T
public "getParamEvaluationeOrDefault"<T>(spellParam0: $SpellParam$$Type<T>, t1: T): T
public "getParamValue"<T>(spellContext0: $SpellContext$$Type, spellParam1: $SpellParam$$Type<T>): T
public "getParamValueOrDefault"<T>(spellContext0: $SpellContext$$Type, spellParam1: $SpellParam$$Type<T>, t2: T): T
public "getPieceType"(): $EnumPieceType
public "getRawParamValue"(spellContext0: $SpellContext$$Type, spellParam1: $SpellParam$$Type<any>): any
/** Client only, do not use in server scripts */
public "getShownPieces"(list0: $List$$Type<$SpellPiece$$Type>): void
public "getSortingName"(): string
/** Client only, do not use in server scripts */
public "getTooltip"(list0: $List$$Type<$Component$$Type>): void
public "getUnlocalizedDesc"(): string
public "getUnlocalizedName"(): string
/** Client only, do not use in server scripts */
public "hasConfig"(): boolean
public "initParams"(): void
/** Client only, do not use in server scripts */
public "interceptKeystrokes"(): boolean
public "isInputSide"(side0: $SpellParam$Side$$Type): boolean
/** Client only, do not use in server scripts */
public "onCharTyped"(char0: character, int1: integer, boolean2: boolean): boolean
/** Client only, do not use in server scripts */
public "onKeyPressed"(int0: integer, int1: integer, boolean2: boolean): boolean
public "readFromNBT"(compoundTag0: $CompoundTag$$Type): void
public "setStatLabel"(enumSpellStat0: $EnumSpellStat$$Type, statLabel1: $StatLabel$$Type): void
public "writeToNBT"(compoundTag0: $CompoundTag$$Type): void
get "comment"(): string
set "comment"(value: string)
get "isInGrid"(): boolean
set "isInGrid"(value: boolean)
get "x"(): integer
set "x"(value: integer)
get "y"(): integer
set "y"(value: integer)
get "evaluationType"(): $Class<any>
get "evaluationTypeString"(): $Component
get "pieceType"(): $EnumPieceType
get "sortingName"(): string
get "unlocalizedDesc"(): string
get "unlocalizedName"(): string
}
}

declare module "vazkii.psi.api.spell.SpellContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BlockHitResult, $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $CompiledSpell$Action, $CompiledSpell$Action$$Type } from "vazkii.psi.api.spell.CompiledSpell$Action"
import { $Stack, $Stack$$Type } from "java.util.Stack"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Map } from "java.util.Map"
import { $CompiledSpell, $CompiledSpell$$Type } from "vazkii.psi.api.spell.CompiledSpell"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Vector3$$Type } from "vazkii.psi.api.internal.Vector3"
import { $Spell$$Type } from "vazkii.psi.api.spell.Spell"

export class $SpellContext {
static readonly "MAX_DISTANCE": double
readonly "customData": $Map<string, any>
readonly "evaluatedObjects": any[][]

constructor()

public "getHarvestTool"(): $ItemStack
public "getTargetSlot"(): integer
public "isInRadius"(vector30: $Vector3$$Type): boolean
public "isInRadius"(entity0: $Entity$$Type): boolean
public "isInRadius"(double0: double, double1: double, double2: double): boolean
public "isValid"(): boolean
public "setCompiledSpell"(compiledSpell0: $CompiledSpell$$Type): $SpellContext
public "setFocalPoint"(entity0: $Entity$$Type): $SpellContext
public "setLoopcastIndex"(int0: integer): $SpellContext
public "setPlayer"(player0: $Player$$Type): $SpellContext
public "setSpell"(spell0: $Spell$$Type): $SpellContext
public "shouldSuppressErrors"(): boolean
public "verifyEntity"(entity0: $Entity$$Type): void
get "actions"(): $Stack<$CompiledSpell$Action>
set "actions"(value: $Stack$$Type<$CompiledSpell$Action$$Type>)
get "attackedEntity"(): $LivingEntity
set "attackedEntity"(value: $LivingEntity$$Type)
get "attackingEntity"(): $LivingEntity
set "attackingEntity"(value: $LivingEntity$$Type)
get "castFrom"(): $InteractionHand
set "castFrom"(value: $InteractionHand$$Type)
get "caster"(): $Player
set "caster"(value: $Player$$Type)
get "cspell"(): $CompiledSpell
set "cspell"(value: $CompiledSpell$$Type)
get "customTargetSlot"(): boolean
set "customTargetSlot"(value: boolean)
get "damageTaken"(): double
set "damageTaken"(value: double)
get "delay"(): integer
set "delay"(value: integer)
get "focalPoint"(): $Entity
set "focalPoint"(value: $Entity$$Type)
get "loopcastIndex"(): integer
set "loopcastIndex"(value: integer)
get "positionBroken"(): $BlockHitResult
set "positionBroken"(value: $BlockHitResult$$Type)
get "shiftTargetSlot"(): boolean
set "shiftTargetSlot"(value: boolean)
get "stopped"(): boolean
set "stopped"(value: boolean)
get "targetSlot"(): integer
set "targetSlot"(value: integer)
get "tool"(): $ItemStack
set "tool"(value: $ItemStack$$Type)
get "harvestTool"(): $ItemStack
get "valid"(): boolean
set "compiledSpell"(value: $CompiledSpell$$Type)
set "player"(value: $Player$$Type)
set "spell"(value: $Spell$$Type)
}
}

declare module "vazkii.psi.api.spell.LoopcastEndEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $IPlayerData, $IPlayerData$$Type } from "vazkii.psi.api.internal.IPlayerData"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $LoopcastEndEvent extends $Event {
constructor(player0: $Player$$Type, iPlayerData1: $IPlayerData$$Type, interactionHand2: $InteractionHand$$Type, int3: integer)
constructor()

public "getHand"(): $InteractionHand
public "getLoopcastAmount"(): integer
public "getPlayer"(): $Player
public "getPlayerData"(): $IPlayerData
get "hand"(): $InteractionHand
get "loopcastAmount"(): integer
get "player"(): $Player
get "playerData"(): $IPlayerData
}
}

declare module "vazkii.psi.api.spell.CompiledSpell$Action" {
import { $SpellPiece, $SpellPiece$$Type } from "vazkii.psi.api.spell.SpellPiece"
import { $CompiledSpell$$Type } from "vazkii.psi.api.spell.CompiledSpell"
import { $SpellContext$$Type } from "vazkii.psi.api.spell.SpellContext"
import { $IPlayerData$$Type } from "vazkii.psi.api.internal.IPlayerData"

export class $CompiledSpell$Action {
readonly "piece": $SpellPiece

constructor(compiledSpell0: $CompiledSpell$$Type, spellPiece1: $SpellPiece$$Type)

public "execute"(iPlayerData0: $IPlayerData$$Type, spellContext1: $SpellContext$$Type): void
}
}

declare module "vazkii.psi.api.spell.SpellParam$ArrowType" {
import { $Enum } from "java.lang.Enum"

export class $SpellParam$ArrowType extends $Enum<$SpellParam$ArrowType> {
static readonly "IN": $SpellParam$ArrowType
static readonly "NONE": $SpellParam$ArrowType
static readonly "OUT": $SpellParam$ArrowType

public static "valueOf"(string0: string): $SpellParam$ArrowType
public static "values"(): $SpellParam$ArrowType[]
}
}

declare module "vazkii.psi.api.gui.PsiHudElementType" {
import { $Enum } from "java.lang.Enum"

export class $PsiHudElementType extends $Enum<$PsiHudElementType> {
static readonly "HUD_ITEM": $PsiHudElementType
static readonly "PSI_BAR": $PsiHudElementType
static readonly "REMAINING_ITEMS": $PsiHudElementType
static readonly "SOCKETABLE_EQUIPPED_NAME": $PsiHudElementType

public static "valueOf"(string0: string): $PsiHudElementType
public static "values"(): $PsiHudElementType[]
}
}

declare module "vazkii.psi.api.spell.StatLabel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $StatLabel {
constructor(string0: string, boolean1: boolean)
constructor(double0: double)
constructor(string0: string)

public "abs"(): $StatLabel
public "add"(string0: string): $StatLabel
public "add"(string0: string, boolean1: boolean): $StatLabel
public "add"(double0: double): $StatLabel
public "add"(statLabel0: $StatLabel$$Type): $StatLabel
public "append"(char0: character): $StatLabel
public "append"(string0: string): $StatLabel
public "append"(string0: string, boolean1: boolean): $StatLabel
public "append"(statLabel0: $StatLabel$$Type): $StatLabel
public "append"(double0: double): $StatLabel
public "ceil"(): $StatLabel
public "cube"(): $StatLabel
public "div"(statLabel0: $StatLabel$$Type): $StatLabel
public "div"(): $StatLabel
public "div"(double0: double): $StatLabel
public "div"(string0: string, boolean1: boolean): $StatLabel
public "div"(string0: string): $StatLabel
public "floor"(): $StatLabel
public "max"(double0: double): $StatLabel
public "max"(statLabel0: $StatLabel$$Type): $StatLabel
public "min"(double0: double): $StatLabel
public "min"(statLabel0: $StatLabel$$Type): $StatLabel
public "minus"(): $StatLabel
public "mul"(double0: double): $StatLabel
public "mul"(string0: string, boolean1: boolean): $StatLabel
public "mul"(string0: string): $StatLabel
public "mul"(statLabel0: $StatLabel$$Type): $StatLabel
public "parenthesize"(): $StatLabel
public "plus"(): $StatLabel
public "pow"(string0: string, boolean1: boolean): $StatLabel
public "pow"(double0: double): $StatLabel
public "pow"(statLabel0: $StatLabel$$Type): $StatLabel
public "pow"(string0: string): $StatLabel
public "prepend"(string0: string): $StatLabel
public "prepend"(string0: string, boolean1: boolean): $StatLabel
public "prepend"(char0: character): $StatLabel
public "prepend"(double0: double): $StatLabel
public "prepend"(statLabel0: $StatLabel$$Type): $StatLabel
public "round"(): $StatLabel
public "sqrt"(): $StatLabel
public "square"(): $StatLabel
public "sub"(string0: string, boolean1: boolean): $StatLabel
public "sub"(string0: string): $StatLabel
public "sub"(double0: double): $StatLabel
public "sub"(statLabel0: $StatLabel$$Type): $StatLabel
public "times"(): $StatLabel
}
}

declare module "vazkii.psi.api.cad.PostCADCraftEvent" {
import { $ITileCADAssembler, $ITileCADAssembler$$Type } from "vazkii.psi.api.cad.ITileCADAssembler"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $PostCADCraftEvent extends $Event {
constructor()
constructor(itemStack0: $ItemStack$$Type, iTileCADAssembler1: $ITileCADAssembler$$Type)

public "getAssembler"(): $ITileCADAssembler
public "getCad"(): $ItemStack
get "assembler"(): $ITileCADAssembler
get "cad"(): $ItemStack
}
}

declare module "vazkii.psi.api.spell.Spell" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $SpellGrid } from "vazkii.psi.api.spell.SpellGrid"
import { $Set } from "java.util.Set"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $Spell {
static readonly "TAG_MODS_REQUIRED": string
static readonly "TAG_MOD_NAME": string
static readonly "TAG_MOD_VERSION": string
static readonly "TAG_SPELL_NAME": string
static readonly "TAG_UUID_LEAST": string
static readonly "TAG_UUID_MOST": string
readonly "grid": $SpellGrid

constructor()

public "copy"(): $Spell
public static "createFromNBT"(compoundTag0: $CompoundTag$$Type): $Spell
/** Client only, do not use in server scripts */
public "draw"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, int2: integer): void
public "getPieceNamespaces"(): $Set<string>
public "readFromNBT"(compoundTag0: $CompoundTag$$Type): void
public "writeToNBT"(compoundTag0: $CompoundTag$$Type): void
get "name"(): string
set "name"(value: string)
get "uuid"(): $UUID
set "uuid"(value: $UUID$$Type)
get "pieceNamespaces"(): $Set<string>
}
}

declare module "vazkii.psi.api.spell.EnumPieceType" {
import { $Enum } from "java.lang.Enum"

export class $EnumPieceType extends $Enum<$EnumPieceType> {
static readonly "CONNECTOR": $EnumPieceType
static readonly "CONSTANT": $EnumPieceType
static readonly "ERROR_HANDLER": $EnumPieceType
static readonly "MODIFIER": $EnumPieceType
static readonly "OPERATOR": $EnumPieceType
static readonly "SELECTOR": $EnumPieceType
static readonly "TRICK": $EnumPieceType

public "isTrick"(): boolean
public static "valueOf"(string0: string): $EnumPieceType
public static "values"(): $EnumPieceType[]
get "trick"(): boolean
}
}

declare module "vazkii.psi.mixin.client.AccessorRenderState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorRenderState {
}

export namespace $AccessorRenderState {
const probejs$$marker: never
}
export abstract class $AccessorRenderState$$Static implements $AccessorRenderState {
}
}

declare module "vazkii.psi.api.internal.Vector3" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"

export class $Vector3 {
static "back": $Vector3
static "center": $Vector3
static "down": $Vector3
static "forward": $Vector3
static "left": $Vector3
static "one": $Vector3
static "right": $Vector3
static "up": $Vector3
static readonly "zero": $Vector3

constructor()
constructor(double0: double, double1: double, double2: double)
constructor(vector30: $Vector3$$Type)
constructor(vec30: $Vec3$$Type)

public "add"(double0: double): $Vector3
public "add"(double0: double, double1: double, double2: double): $Vector3
public "add"(vector30: $Vector3$$Type): $Vector3
public "angle"(vector30: $Vector3$$Type): double
public "copy"(): $Vector3
public "crossProduct"(vector30: $Vector3$$Type): $Vector3
public "dotProduct"(double0: double, double1: double, double2: double): double
public "dotProduct"(vector30: $Vector3$$Type): double
public static "fromBlockPos"(blockPos0: $BlockPos$$Type): $Vector3
public static "fromDirection"(direction0: $Direction$$Type): $Vector3
public static "fromEntity"(entity0: $Entity$$Type): $Vector3
public static "fromEntityCenter"(entity0: $Entity$$Type): $Vector3
public static "fromTileEntity"(blockEntity0: $BlockEntity$$Type): $Vector3
public static "fromTileEntityCenter"(blockEntity0: $BlockEntity$$Type): $Vector3
public static "fromVec3d"(vec30: $Vec3$$Type): $Vector3
/** Client only, do not use in server scripts */
public "glVertex"(): void
public "isAxial"(): boolean
public "isInside"(aABB0: $AABB$$Type): boolean
public "isZero"(): boolean
public "mag"(): double
public "magSquared"(): double
public "multiply"(vector30: $Vector3$$Type): $Vector3
public "multiply"(double0: double, double1: double, double2: double): $Vector3
public "multiply"(double0: double): $Vector3
public "negate"(): $Vector3
public "negate"(vector30: $Vector3$$Type): $Vector3
public "normalize"(): $Vector3
public "perpendicular"(): $Vector3
public "project"(vector30: $Vector3$$Type): $Vector3
public "rotate"(double0: double, vector31: $Vector3$$Type): $Vector3
public "scalarProject"(vector30: $Vector3$$Type): double
public "set"(double0: double, double1: double, double2: double): $Vector3
public "set"(vector30: $Vector3$$Type): $Vector3
public "sub"(vector30: $Vector3$$Type): $Vector3
public "subtract"(vector30: $Vector3$$Type): $Vector3
public "toBlockPos"(): $BlockPos
public "toVec3D"(): $Vec3
public "xCrossProduct"(): $Vector3
public "yCrossProduct"(): $Vector3
public "zCrossProduct"(): $Vector3
get "x"(): double
set "x"(value: double)
get "y"(): double
set "y"(value: double)
get "z"(): double
set "z"(value: double)
get "axial"(): boolean
}
}

declare module "vazkii.psi.api.cad.RegenPsiEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $IPlayerData, $IPlayerData$$Type } from "vazkii.psi.api.internal.IPlayerData"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $RegenPsiEvent extends $Event {
constructor(player0: $Player$$Type, iPlayerData1: $IPlayerData$$Type, itemStack2: $ItemStack$$Type)
constructor()

public "addRegen"(int0: integer): void
public "getBaseRegenRate"(): integer
public "getCad"(): $ItemStack
public "getCadPsi"(): integer
public "getCadPsiCapacity"(): integer
public "getCadRegen"(): integer
public "getCadRegenCost"(): integer
public "getMaxCadRegen"(): integer
public "getMaxPlayerRegen"(): integer
public "getPlayer"(): $Player
public "getPlayerData"(): $IPlayerData
public "getPlayerPsi"(): integer
public "getPlayerPsiCapacity"(): integer
public "getPlayerRegen"(): integer
public "getPreviousRegenCooldown"(): integer
public "getRegenCooldown"(): integer
public "getRegenRate"(): integer
public "regenCadFirst"(boolean0: boolean): void
public "removeRegen"(int0: integer): void
public "setMaxCadRegen"(int0: integer): void
public "setMaxPlayerRegen"(int0: integer): void
public "setRegenCooldown"(int0: integer): void
public "wasOverflowed"(): boolean
public "willHealOverflow"(): boolean
public "willRegenCadFirst"(): boolean
get "baseRegenRate"(): integer
get "cad"(): $ItemStack
get "cadPsi"(): integer
get "cadPsiCapacity"(): integer
get "cadRegen"(): integer
get "cadRegenCost"(): integer
get "maxCadRegen"(): integer
get "maxPlayerRegen"(): integer
get "player"(): $Player
get "playerData"(): $IPlayerData
get "playerPsi"(): integer
get "playerPsiCapacity"(): integer
get "playerRegen"(): integer
get "previousRegenCooldown"(): integer
get "regenCooldown"(): integer
get "regenRate"(): integer
set "maxCadRegen"(value: integer)
set "maxPlayerRegen"(value: integer)
set "regenCooldown"(value: integer)
}
}

declare module "vazkii.psi.api.spell.SpellCastEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $SpellContext, $SpellContext$$Type } from "vazkii.psi.api.spell.SpellContext"
import { $IPlayerData, $IPlayerData$$Type } from "vazkii.psi.api.internal.IPlayerData"
import { $Spell, $Spell$$Type } from "vazkii.psi.api.spell.Spell"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $SpellCastEvent extends $Event {
readonly "bullet": $ItemStack
readonly "cad": $ItemStack
readonly "context": $SpellContext
readonly "player": $Player
readonly "playerData": $IPlayerData
readonly "spell": $Spell

constructor(spell0: $Spell$$Type, spellContext1: $SpellContext$$Type, player2: $Player$$Type, iPlayerData3: $IPlayerData$$Type, itemStack4: $ItemStack$$Type, itemStack5: $ItemStack$$Type)
constructor()

}
}

declare module "vazkii.psi.api.spell.SpellMetadata" {
import { $EnumSpellStat, $EnumSpellStat$$Type } from "vazkii.psi.api.spell.EnumSpellStat"
import { $Set } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $SpellMetadata {
constructor()

public "addStat"(enumSpellStat0: $EnumSpellStat$$Type, int1: integer): void
public "addStatMultiplier"(enumSpellStat0: $EnumSpellStat$$Type, double1: double): void
public "compoundStatMultiplier"(enumSpellStat0: $EnumSpellStat$$Type, double1: double): void
public "evaluateAgainst"(itemStack0: $ItemStack$$Type): boolean
public "getFlag"(string0: string): boolean
public "getStat"(enumSpellStat0: $EnumSpellStat$$Type): integer
public "getStatMultiplier"(enumSpellStat0: $EnumSpellStat$$Type): double
public "getStatSet"(): $Set<$EnumSpellStat>
public "setFlag"(string0: string, boolean1: boolean): void
public "setStat"(enumSpellStat0: $EnumSpellStat$$Type, int1: integer): void
public "setStatMultiplier"(enumSpellStat0: $EnumSpellStat$$Type, double1: double): void
get "errorsSuppressed"(): boolean
set "errorsSuppressed"(value: boolean)
get "statSet"(): $Set<$EnumSpellStat>
}
}

declare module "vazkii.psi.api.spell.programmer.ProgrammerPopulateEvent" {
import { $MappedRegistry, $MappedRegistry$$Type } from "net.minecraft.core.MappedRegistry"
import { $SpellPiece, $SpellPiece$$Type } from "vazkii.psi.api.spell.SpellPiece"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ProgrammerPopulateEvent extends $Event {
constructor(player0: $Player$$Type, mappedRegistry1: $MappedRegistry$$Type<$Class$$Type<$SpellPiece$$Type>>)
constructor()

public "getPlayer"(): $Player
public "getSpellPieceRegistry"(): $MappedRegistry<$Class<$SpellPiece>>
public "setSpellPieceRegistry"(mappedRegistry0: $MappedRegistry$$Type<$Class$$Type<$SpellPiece$$Type>>): void
get "player"(): $Player
get "spellPieceRegistry"(): $MappedRegistry<$Class<$SpellPiece>>
set "spellPieceRegistry"(value: $MappedRegistry$$Type<$Class$$Type<$SpellPiece$$Type>>)
}
}

declare module "vazkii.psi.api.spell.IErrorCatcher" {
import { $SpellRuntimeException$$Type } from "vazkii.psi.api.spell.SpellRuntimeException"
import { $SpellParam$$Type } from "vazkii.psi.api.spell.SpellParam"
import { $SpellPiece$$Type } from "vazkii.psi.api.spell.SpellPiece"
import { $SpellContext$$Type } from "vazkii.psi.api.spell.SpellContext"

export interface $IErrorCatcher {
"catchException"(spellPiece0: $SpellPiece$$Type, spellContext1: $SpellContext$$Type, spellRuntimeException2: $SpellRuntimeException$$Type): boolean
"catchParam"(spellParam0: $SpellParam$$Type<any>): boolean
"supplyReplacementValue"(spellPiece0: $SpellPiece$$Type, spellContext1: $SpellContext$$Type, spellRuntimeException2: $SpellRuntimeException$$Type): any
}

export namespace $IErrorCatcher {
const probejs$$marker: never
}
export abstract class $IErrorCatcher$$Static implements $IErrorCatcher {
}
}

declare module "vazkii.psi.api.spell.detonator.IDetonationHandler" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $IDetonationHandler {
"detonate"(): void
"objectLocus"(): $Vec3
}

export namespace $IDetonationHandler {
function detonator(entity0: $Entity$$Type): $IDetonationHandler
function performDetonation(level0: $Level$$Type, player1: $Player$$Type, entity2: $Entity$$Type, double3: double): void
function performDetonation(level0: $Level$$Type, player1: $Player$$Type, entity2: $Entity$$Type, predicate3: $Predicate$$Type<$Entity$$Type>): void
function performDetonation(level0: $Level$$Type, player1: $Player$$Type, entity2: $Entity$$Type, double3: double, predicate4: $Predicate$$Type<$Entity$$Type>): void
function performDetonation(level0: $Level$$Type, player1: $Player$$Type, entity2: $Entity$$Type): void
function performDetonation(level0: $Level$$Type, player1: $Player$$Type, double2: double): void
function performDetonation(level0: $Level$$Type, player1: $Player$$Type, predicate2: $Predicate$$Type<$Entity$$Type>): void
function performDetonation(level0: $Level$$Type, player1: $Player$$Type, double2: double, predicate3: $Predicate$$Type<$Entity$$Type>): void
function performDetonation(level0: $Level$$Type, player1: $Player$$Type): void
}
export abstract class $IDetonationHandler$$Static implements $IDetonationHandler {
static "detonator"(entity0: $Entity$$Type): $IDetonationHandler
static "performDetonation"(level0: $Level$$Type, player1: $Player$$Type, entity2: $Entity$$Type, double3: double): void
static "performDetonation"(level0: $Level$$Type, player1: $Player$$Type, entity2: $Entity$$Type, predicate3: $Predicate$$Type<$Entity$$Type>): void
static "performDetonation"(level0: $Level$$Type, player1: $Player$$Type, entity2: $Entity$$Type, double3: double, predicate4: $Predicate$$Type<$Entity$$Type>): void
static "performDetonation"(level0: $Level$$Type, player1: $Player$$Type, entity2: $Entity$$Type): void
static "performDetonation"(level0: $Level$$Type, player1: $Player$$Type, double2: double): void
static "performDetonation"(level0: $Level$$Type, player1: $Player$$Type, predicate2: $Predicate$$Type<$Entity$$Type>): void
static "performDetonation"(level0: $Level$$Type, player1: $Player$$Type, double2: double, predicate3: $Predicate$$Type<$Entity$$Type>): void
static "performDetonation"(level0: $Level$$Type, player1: $Player$$Type): void
}
}

declare module "vazkii.psi.api.spell.detonator.DetonationEvent" {
import { $List, $List$$Type } from "java.util.List"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $IDetonationHandler, $IDetonationHandler$$Type } from "vazkii.psi.api.spell.detonator.IDetonationHandler"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $DetonationEvent extends $Event {
constructor(player0: $Player$$Type, entity1: $Entity$$Type, double2: double, list3: $List$$Type<$IDetonationHandler$$Type>)
constructor()

public "addCharge"(iDetonationHandler0: $IDetonationHandler$$Type): void
public "getCharges"(): $List<$IDetonationHandler>
public "getFocalPoint"(): $Entity
public "getPlayer"(): $Player
public "getRange"(): double
public "removeCharge"(iDetonationHandler0: $IDetonationHandler$$Type): void
get "charges"(): $List<$IDetonationHandler>
get "focalPoint"(): $Entity
get "player"(): $Player
get "range"(): double
}
}

