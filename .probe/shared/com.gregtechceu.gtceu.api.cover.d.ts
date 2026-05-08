declare module "com.gregtechceu.gtceu.api.cover.CoverDefinition$CoverBehaviourProvider" {
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $ICoverable$$Type } from "com.gregtechceu.gtceu.api.capability.ICoverable"
import { $CoverBehavior } from "com.gregtechceu.gtceu.api.cover.CoverBehavior"
import { $CoverDefinition$$Type } from "com.gregtechceu.gtceu.api.cover.CoverDefinition"

export interface $CoverDefinition$CoverBehaviourProvider {
"create"(coverDefinition0: $CoverDefinition$$Type, iCoverable1: $ICoverable$$Type, direction2: $Direction$$Type): $CoverBehavior
}

export namespace $CoverDefinition$CoverBehaviourProvider {
const probejs$$marker: never
}
export abstract class $CoverDefinition$CoverBehaviourProvider$$Static implements $CoverDefinition$CoverBehaviourProvider {
}
}

declare module "com.gregtechceu.gtceu.api.cover.IUICover" {
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $IUIHolder } from "com.lowdragmc.lowdraglib.gui.modular.IUIHolder"
import { $ModularUI } from "com.lowdragmc.lowdraglib.gui.modular.ModularUI"
import { $CoverBehavior } from "com.gregtechceu.gtceu.api.cover.CoverBehavior"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $IUICover extends $IUIHolder {
"createUI"(player0: $Player$$Type): $ModularUI
"createUIWidget"(): $Widget
"isInvalid"(): boolean
"isRemote"(): boolean
"markAsDirty"(): void
"onUIClosed"(): void
"self"(): $CoverBehavior
get "invalid"(): boolean
get "remote"(): boolean
}

export namespace $IUICover {
const probejs$$marker: never
}
export abstract class $IUICover$$Static implements $IUICover {
}
}

declare module "com.gregtechceu.gtceu.api.cover.filter.FilterHandler" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $IEnhancedManaged, $IEnhancedManaged$$Type } from "com.lowdragmc.lowdraglib.syncdata.IEnhancedManaged"
import { $IFieldUpdateListener$$Type } from "com.lowdragmc.lowdraglib.syncdata.IFieldUpdateListener"
import { $Filter } from "com.gregtechceu.gtceu.api.cover.filter.Filter"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $IRef$$Type } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"
import { $ManagedFieldHolder } from "com.lowdragmc.lowdraglib.syncdata.field.ManagedFieldHolder"
import { $ISubscription } from "com.lowdragmc.lowdraglib.syncdata.ISubscription"

export class $FilterHandler<T = any, F extends $Filter<T, F> = $Filter<T, F>> implements $IEnhancedManaged {
static readonly "MANAGED_FIELD_HOLDER": $ManagedFieldHolder

constructor(iEnhancedManaged0: $IEnhancedManaged$$Type)

public "addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$$Type<T>): $ISubscription
public "createFilterConfigUI"(int0: integer, int1: integer, int2: integer, int3: integer): $Widget
public "createFilterSlotUI"(int0: integer, int1: integer): $Widget
public "getFieldHolder"(): $ManagedFieldHolder
public "getFilter"(): F
public "getFilterItem"(): $ItemStack
public "isFilterPresent"(): boolean
public "markDirty"(name: string): void
public "onChanged"(): void
public "onFilterLoaded"(consumer0: $Consumer$$Type<F>): $FilterHandler<T, F>
public "onFilterRemoved"(consumer0: $Consumer$$Type<F>): $FilterHandler<T, F>
public "onFilterUpdated"(consumer0: $Consumer$$Type<F>): $FilterHandler<T, F>
public "onPersistedChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "onSyncChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "scheduleRender"(fieldName: string, newValue: any, oldValue: any): void
public "scheduleRenderUpdate"(): void
public "setFilterItem"(itemStack0: $ItemStack$$Type): void
public "test"(t0: T): boolean
get "fieldHolder"(): $ManagedFieldHolder
get "filter"(): F
get "filterItem"(): $ItemStack
get "filterPresent"(): boolean
set "filterItem"(value: $ItemStack$$Type)
}
}

declare module "com.gregtechceu.gtceu.api.cover.filter.ItemFilter" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $ItemLike } from "net.minecraft.world.level.ItemLike"
import { $Filter } from "com.gregtechceu.gtceu.api.cover.filter.Filter"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Map } from "java.util.Map"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Function } from "java.util.function.Function"
import { $WidgetGroup } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"

export interface $ItemFilter extends $Filter<$ItemStack, $ItemFilter> {
"and"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $Predicate<$ItemStack>
"isBlackList"(): boolean
"isBlank"(): boolean
"negate"(): $Predicate<$ItemStack>
"openConfigurator"(int0: integer, int1: integer): $WidgetGroup
"or"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $Predicate<$ItemStack>
"saveFilter"(): $CompoundTag
"setOnUpdated"(consumer0: $Consumer$$Type<$ItemFilter$$Type>): void
"supportsAmounts"(): boolean
"test"(itemStack0: $ItemStack$$Type): boolean
"testItemCount"(itemStack0: $ItemStack$$Type): integer
get "blackList"(): boolean
get "blank"(): boolean
set "onUpdated"(value: $Consumer$$Type<$ItemFilter$$Type>)
}

export namespace $ItemFilter {
const EMPTY: $ItemFilter
const FILTERS: $Map<$ItemLike, $Function<$ItemStack, $ItemFilter>>
function isEqual<T>(object0: any): $Predicate<T>
function loadFilter(itemStack0: $ItemStack$$Type): $ItemFilter
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $ItemFilter$$Static implements $ItemFilter {
static readonly "EMPTY": $ItemFilter
static readonly "FILTERS": $Map<$ItemLike, $Function<$ItemStack, $ItemFilter>>

static "isEqual"<T>(object0: any): $Predicate<T>
static "loadFilter"(itemStack0: $ItemStack$$Type): $ItemFilter
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "com.gregtechceu.gtceu.api.cover.filter.Filter" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $WidgetGroup } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"

export interface $Filter<T = any, S extends $Filter<T, S> = $Filter<T, S>> extends $Predicate<T> {
"and"(predicate0: $Predicate$$Type<T>): $Predicate<T>
"isBlackList"(): boolean
"isBlank"(): boolean
"negate"(): $Predicate<T>
"openConfigurator"(int0: integer, int1: integer): $WidgetGroup
"or"(predicate0: $Predicate$$Type<T>): $Predicate<T>
"saveFilter"(): $CompoundTag
"setOnUpdated"(consumer0: $Consumer$$Type<S>): void
"test"(t0: T): boolean
get "blackList"(): boolean
get "blank"(): boolean
set "onUpdated"(value: $Consumer$$Type<S>)
}

export namespace $Filter {
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $Filter$$Static<T = any, S extends $Filter<T, S> = $Filter<T, S>> implements $Filter<T, S> {
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "com.gregtechceu.gtceu.api.cover.CoverBehavior" {
import { $IFieldUpdateListener$$Type } from "com.lowdragmc.lowdraglib.syncdata.IFieldUpdateListener"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ICoverable, $ICoverable$$Type } from "com.gregtechceu.gtceu.api.capability.ICoverable"
import { $Supplier } from "java.util.function.Supplier"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $IFancyConfigurator } from "com.gregtechceu.gtceu.api.gui.fancy.IFancyConfigurator"
import { $IItemHandlerModifiable, $IItemHandlerModifiable$$Type } from "net.minecraftforge.items.IItemHandlerModifiable"
import { $IRef$$Type } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"
import { $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $Set$$Type } from "java.util.Set"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $IDynamicCoverRenderer } from "com.gregtechceu.gtceu.client.renderer.cover.IDynamicCoverRenderer"
import { $CoverDefinition, $CoverDefinition$$Type } from "com.gregtechceu.gtceu.api.cover.CoverDefinition"
import { $IFluidHandlerModifiable, $IFluidHandlerModifiable$$Type } from "com.gregtechceu.gtceu.api.transfer.fluid.IFluidHandlerModifiable"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $GTToolType$$Type } from "com.gregtechceu.gtceu.api.item.tool.GTToolType"
import { $List } from "java.util.List"
import { $IEnhancedManaged } from "com.lowdragmc.lowdraglib.syncdata.IEnhancedManaged"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ResourceTexture } from "com.lowdragmc.lowdraglib.gui.texture.ResourceTexture"
import { $IToolGridHighlight } from "com.gregtechceu.gtceu.api.item.tool.IToolGridHighlight"
import { $ICoverRenderer } from "com.gregtechceu.gtceu.client.renderer.cover.ICoverRenderer"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $ManagedFieldHolder } from "com.lowdragmc.lowdraglib.syncdata.field.ManagedFieldHolder"
import { $ISubscription } from "com.lowdragmc.lowdraglib.syncdata.ISubscription"
import { $ICopyable } from "com.gregtechceu.gtceu.api.blockentity.ICopyable"

export class $CoverBehavior implements $IEnhancedManaged, $IToolGridHighlight, $ICopyable {
static readonly "MANAGED_FIELD_HOLDER": $ManagedFieldHolder
readonly "attachedSide": $Direction
readonly "coverDefinition": $CoverDefinition
readonly "coverHolder": $ICoverable

constructor(coverDefinition0: $CoverDefinition$$Type, iCoverable1: $ICoverable$$Type, direction2: $Direction$$Type)

public "addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$$Type<T>): $ISubscription
public "canAttach"(): boolean
public "canConnectRedstone"(): boolean
public "canPipePassThrough"(): boolean
public "copyConfig"(compoundTag0: $CompoundTag$$Type): $CompoundTag
public "getAdditionalDrops"(): $List<$ItemStack>
public "getAppearance"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type): $BlockState
public "getAttachItem"(): $ItemStack
public "getConfigurator"(): $IFancyConfigurator
public "getCoverRenderer"(): $Supplier<$ICoverRenderer>
public "getDynamicRenderer"(): $Supplier<$IDynamicCoverRenderer>
public "getFieldHolder"(): $ManagedFieldHolder
public "getFluidHandlerCap"(iFluidHandlerModifiable0: $IFluidHandlerModifiable$$Type): $IFluidHandlerModifiable
public "getItemHandlerCap"(iItemHandlerModifiable0: $IItemHandlerModifiable$$Type): $IItemHandlerModifiable
public "getItemsRequiredToPaste"(): $List<$ItemStack>
public "getPickItem"(): $ItemStack
public "getRedstoneSignalOutput"(): integer
public "markDirty"(name: string): void
public "onAttached"(itemStack0: $ItemStack$$Type, serverPlayer1: $ServerPlayer$$Type): void
public "onChanged"(): void
public "onLoad"(): void
public "onNeighborChanged"(block0: $Block$$Type, blockPos1: $BlockPos$$Type, boolean2: boolean): void
public "onPersistedChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "onRemoved"(): void
public "onScrewdriverClick"(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, blockHitResult2: $BlockHitResult$$Type): $InteractionResult
public "onSoftMalletClick"(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, blockHitResult2: $BlockHitResult$$Type): $InteractionResult
public "onSyncChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "onUnload"(): void
public "pasteConfig"(serverPlayer0: $ServerPlayer$$Type, compoundTag1: $CompoundTag$$Type): void
public "scheduleRender"(fieldName: string, newValue: any, oldValue: any): void
public "scheduleRenderUpdate"(): void
public "setRedstoneSignalOutput"(int0: integer): void
public "shouldRenderGrid"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, itemStack3: $ItemStack$$Type, set4: $Set$$Type<$GTToolType$$Type>): boolean
public "shouldRenderPlate"(): boolean
public "sideTips"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, set3: $Set$$Type<$GTToolType$$Type>, direction4: $Direction$$Type): $ResourceTexture
get "additionalDrops"(): $List<$ItemStack>
get "attachItem"(): $ItemStack
get "configurator"(): $IFancyConfigurator
get "coverRenderer"(): $Supplier<$ICoverRenderer>
get "dynamicRenderer"(): $Supplier<$IDynamicCoverRenderer>
get "fieldHolder"(): $ManagedFieldHolder
get "itemsRequiredToPaste"(): $List<$ItemStack>
get "pickItem"(): $ItemStack
get "redstoneSignalOutput"(): integer
set "redstoneSignalOutput"(value: integer)
}
}

declare module "com.gregtechceu.gtceu.api.cover.IIOCover" {
import { $IO } from "com.gregtechceu.gtceu.api.capability.recipe.IO"
import { $ManualIOMode } from "com.gregtechceu.gtceu.common.cover.data.ManualIOMode"

export interface $IIOCover {
"getIo"(): $IO
"getManualIOMode"(): $ManualIOMode
"getTransferRate"(): integer
get "io"(): $IO
get "manualIOMode"(): $ManualIOMode
get "transferRate"(): integer
}

export namespace $IIOCover {
const probejs$$marker: never
}
export abstract class $IIOCover$$Static implements $IIOCover {
}
}

declare module "com.gregtechceu.gtceu.api.cover.CoverDefinition" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $CoverDefinition$CoverBehaviourProvider$$Type } from "com.gregtechceu.gtceu.api.cover.CoverDefinition$CoverBehaviourProvider"
import { $ICoverRenderer } from "com.gregtechceu.gtceu.client.renderer.cover.ICoverRenderer"
import { $ICoverable$$Type } from "com.gregtechceu.gtceu.api.capability.ICoverable"
import { $CoverBehavior } from "com.gregtechceu.gtceu.api.cover.CoverBehavior"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"

export class $CoverDefinition {
constructor(resourceLocation0: $ResourceLocation$$Type, coverBehaviourProvider1: $CoverDefinition$CoverBehaviourProvider$$Type, supplier2: $Supplier$$Type<$Supplier<$ICoverRenderer>>)

public "createCoverBehavior"(iCoverable0: $ICoverable$$Type, direction1: $Direction$$Type): $CoverBehavior
public "getCoverRenderer"(): $Supplier<$ICoverRenderer>
public "getId"(): $ResourceLocation
get "coverRenderer"(): $Supplier<$ICoverRenderer>
get "id"(): $ResourceLocation
}
}

