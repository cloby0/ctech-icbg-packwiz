declare module "com.gregtechceu.gtceu.api.machine.feature.IMachineFeature" {
import { $MetaMachine } from "com.gregtechceu.gtceu.api.machine.MetaMachine"

export interface $IMachineFeature {
"self"(): $MetaMachine
}

export namespace $IMachineFeature {
const probejs$$marker: never
}
export abstract class $IMachineFeature$$Static implements $IMachineFeature {
}
}

declare module "com.gregtechceu.gtceu.api.machine.feature.IUIMachine" {
import { $MetaMachine } from "com.gregtechceu.gtceu.api.machine.MetaMachine"
import { $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $IUIHolder } from "com.lowdragmc.lowdraglib.gui.modular.IUIHolder"
import { $ModularUI } from "com.lowdragmc.lowdraglib.gui.modular.ModularUI"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $IMachineFeature } from "com.gregtechceu.gtceu.api.machine.feature.IMachineFeature"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $IUIMachine extends $IUIHolder, $IMachineFeature {
"createUI"(player0: $Player$$Type): $ModularUI
"isInvalid"(): boolean
"isRemote"(): boolean
"markAsDirty"(): void
"self"(): $MetaMachine
"shouldOpenUI"(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, blockHitResult2: $BlockHitResult$$Type): boolean
"tryToOpenUI"(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, blockHitResult2: $BlockHitResult$$Type): $InteractionResult
get "invalid"(): boolean
get "remote"(): boolean
}

export namespace $IUIMachine {
const probejs$$marker: never
}
export abstract class $IUIMachine$$Static implements $IUIMachine {
}
}

declare module "com.gregtechceu.gtceu.api.machine.trait.RecipeHandlerGroup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RecipeHandlerGroup {
"equals"(object0: any): boolean
"hashCode"(): integer
}

export namespace $RecipeHandlerGroup {
const probejs$$marker: never
}
export abstract class $RecipeHandlerGroup$$Static implements $RecipeHandlerGroup {
}
}

declare module "com.gregtechceu.gtceu.api.machine.feature.ICleanroomProvider" {
import { $MetaMachine } from "com.gregtechceu.gtceu.api.machine.MetaMachine"
import { $Set } from "java.util.Set"
import { $IMachineFeature } from "com.gregtechceu.gtceu.api.machine.feature.IMachineFeature"
import { $CleanroomType } from "com.gregtechceu.gtceu.api.machine.multiblock.CleanroomType"

export interface $ICleanroomProvider extends $IMachineFeature {
"getTypes"(): $Set<$CleanroomType>
"isClean"(): boolean
"self"(): $MetaMachine
get "types"(): $Set<$CleanroomType>
get "clean"(): boolean
}

export namespace $ICleanroomProvider {
const probejs$$marker: never
}
export abstract class $ICleanroomProvider$$Static implements $ICleanroomProvider {
}
}

declare module "com.gregtechceu.gtceu.api.machine.trait.MachineTrait" {
import { $IEnhancedManaged } from "com.lowdragmc.lowdraglib.syncdata.IEnhancedManaged"
import { $IFieldUpdateListener$$Type } from "com.lowdragmc.lowdraglib.syncdata.IFieldUpdateListener"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $MetaMachine, $MetaMachine$$Type } from "com.gregtechceu.gtceu.api.machine.MetaMachine"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $MachineRenderState, $MachineRenderState$$Type } from "com.gregtechceu.gtceu.client.model.machine.MachineRenderState"
import { $IRef$$Type } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"
import { $ModelData$Builder$$Type } from "net.minecraftforge.client.model.data.ModelData$Builder"
import { $ManagedFieldHolder } from "com.lowdragmc.lowdraglib.syncdata.field.ManagedFieldHolder"
import { $ISubscription } from "com.lowdragmc.lowdraglib.syncdata.ISubscription"

export class $MachineTrait implements $IEnhancedManaged {
constructor(metaMachine0: $MetaMachine$$Type)

public "addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$$Type<T>): $ISubscription
public "getFieldHolder"(): $ManagedFieldHolder
public "getMachine"(): $MetaMachine
public "getRenderState"(): $MachineRenderState
public "hasCapability"(direction0: $Direction$$Type): boolean
public "loadCustomPersistedData"(compoundTag0: $CompoundTag$$Type): void
public "markDirty"(name: string): void
public "onChanged"(): void
public "onMachineLoad"(): void
public "onMachineUnLoad"(): void
public "onPersistedChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "onSyncChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "saveCustomPersistedData"(compoundTag0: $CompoundTag$$Type, boolean1: boolean): void
public "scheduleRender"(fieldName: string, newValue: any, oldValue: any): void
public "scheduleRenderUpdate"(): void
public "setCapabilityValidator"(predicate0: $Predicate$$Type<$Direction$$Type>): void
public "setRenderState"(machineRenderState0: $MachineRenderState$$Type): void
public "updateModelData"(builder0: $ModelData$Builder$$Type): void
get "fieldHolder"(): $ManagedFieldHolder
get "machine"(): $MetaMachine
get "renderState"(): $MachineRenderState
set "capabilityValidator"(value: $Predicate$$Type<$Direction$$Type>)
set "renderState"(value: $MachineRenderState$$Type)
}
}

declare module "com.gregtechceu.gtceu.api.machine.feature.IVoidable$VoidingMode" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $RecipeCapability$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $IGuiTexture } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $EnumSelectorWidget$SelectableEnum } from "com.gregtechceu.gtceu.api.gui.widget.EnumSelectorWidget$SelectableEnum"

export class $IVoidable$VoidingMode extends $Enum<$IVoidable$VoidingMode> implements $StringRepresentable, $EnumSelectorWidget$SelectableEnum {
static readonly "VALUES": $IVoidable$VoidingMode[]
static readonly "VOID_FLUIDS": $IVoidable$VoidingMode
static readonly "VOID_ITEMS": $IVoidable$VoidingMode
static readonly "VOID_ITEMS_FLUIDS": $IVoidable$VoidingMode
static readonly "VOID_NONE": $IVoidable$VoidingMode

public "canVoid"(recipeCapability0: $RecipeCapability$$Type<any>): boolean
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getIcon"(): $IGuiTexture
public "getSerializedName"(): string
public "getTooltip"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $IVoidable$VoidingMode
public static "values"(): $IVoidable$VoidingMode[]
get "icon"(): $IGuiTexture
get "serializedName"(): string
get "tooltip"(): string
}
}

declare module "com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiPart" {
import { $SortedSet } from "java.util.SortedSet"
import { $RecipeHandlerList } from "com.gregtechceu.gtceu.api.machine.trait.RecipeHandlerList"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $IMultiController, $IMultiController$$Type } from "com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiController"
import { $TooltipsPanel$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.TooltipsPanel"
import { $GTRecipe, $GTRecipe$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipe"
import { $IFancyUIProvider$PageGroupingData } from "com.gregtechceu.gtceu.api.gui.fancy.IFancyUIProvider$PageGroupingData"
import { $TabsWidget$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.TabsWidget"
import { $ModularUI } from "com.lowdragmc.lowdraglib.gui.modular.ModularUI"
import { $IMachineFeature } from "com.gregtechceu.gtceu.api.machine.feature.IMachineFeature"
import { $TooltipComponent } from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import { $IFancyUIProvider } from "com.gregtechceu.gtceu.api.gui.fancy.IFancyUIProvider"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $MetaMachine } from "com.gregtechceu.gtceu.api.machine.MetaMachine"
import { $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $FancyMachineUIWidget$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.FancyMachineUIWidget"
import { $IGuiTexture } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $ConfiguratorPanel$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.ConfiguratorPanel"
import { $List, $List$$Type } from "java.util.List"
import { $IFancyUIMachine } from "com.gregtechceu.gtceu.api.machine.feature.IFancyUIMachine"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $IWorkableMultiController$$Type } from "com.gregtechceu.gtceu.api.machine.feature.multiblock.IWorkableMultiController"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"

export interface $IMultiPart extends $IMachineFeature, $IFancyUIMachine {
"addMultiText"(list0: $List$$Type<$Component$$Type>): void
"addedToController"(iMultiController0: $IMultiController$$Type): void
"afterWorking"(iWorkableMultiController0: $IWorkableMultiController$$Type): boolean
"attachConfigurators"(configuratorPanel0: $ConfiguratorPanel$$Type): void
"attachFancyTooltipsToController"(iMultiController0: $IMultiController$$Type, tooltipsPanel1: $TooltipsPanel$$Type): void
"attachSideTabs"(tabsWidget0: $TabsWidget$$Type): void
"attachTooltips"(tooltipsPanel0: $TooltipsPanel$$Type): void
"beforeWorking"(iWorkableMultiController0: $IWorkableMultiController$$Type): boolean
"canShared"(): boolean
"createMainPage"(fancyMachineUIWidget0: $FancyMachineUIWidget$$Type): $Widget
"createUI"(player0: $Player$$Type): $ModularUI
"createUIWidget"(): $Widget
"getControllers"(): $SortedSet<$IMultiController>
"getFormedAppearance"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): $BlockState
"getPageGroupingData"(): $IFancyUIProvider$PageGroupingData
"getRecipeHandlers"(): $List<$RecipeHandlerList>
"getSubTabs"(): $List<$IFancyUIProvider>
"getTabIcon"(): $IGuiTexture
"getTabTooltipComponent"(): $TooltipComponent
"getTabTooltips"(): $List<$Component>
"getTitle"(): $Component
"hasController"(blockPos0: $BlockPos$$Type): boolean
"hasPlayerInventory"(): boolean
"isFormed"(): boolean
"isInvalid"(): boolean
"isRemote"(): boolean
"markAsDirty"(): void
"modifyRecipe"(gTRecipe0: $GTRecipe$$Type): $GTRecipe
"onPaused"(iWorkableMultiController0: $IWorkableMultiController$$Type): boolean
"onWaiting"(iWorkableMultiController0: $IWorkableMultiController$$Type): boolean
"onWorking"(iWorkableMultiController0: $IWorkableMultiController$$Type): boolean
"removedFromController"(iMultiController0: $IMultiController$$Type): void
"replacePartModelWhenFormed"(): boolean
"self"(): $MetaMachine
"shouldOpenUI"(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, blockHitResult2: $BlockHitResult$$Type): boolean
"tryToOpenUI"(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, blockHitResult2: $BlockHitResult$$Type): $InteractionResult
get "controllers"(): $SortedSet<$IMultiController>
get "pageGroupingData"(): $IFancyUIProvider$PageGroupingData
get "recipeHandlers"(): $List<$RecipeHandlerList>
get "subTabs"(): $List<$IFancyUIProvider>
get "tabIcon"(): $IGuiTexture
get "tabTooltipComponent"(): $TooltipComponent
get "tabTooltips"(): $List<$Component>
get "title"(): $Component
get "formed"(): boolean
get "invalid"(): boolean
get "remote"(): boolean
}

export namespace $IMultiPart {
const probejs$$marker: never
}
export abstract class $IMultiPart$$Static implements $IMultiPart {
}
}

declare module "com.gregtechceu.gtceu.api.machine.feature.IVoidable" {
import { $ConfiguratorPanel$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.ConfiguratorPanel"
import { $MetaMachine } from "com.gregtechceu.gtceu.api.machine.MetaMachine"
import { $IVoidable$VoidingMode, $IVoidable$VoidingMode$$Type } from "com.gregtechceu.gtceu.api.machine.feature.IVoidable$VoidingMode"
import { $IMachineFeature } from "com.gregtechceu.gtceu.api.machine.feature.IMachineFeature"
import { $RecipeCapability, $RecipeCapability$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability"
import { $Reference2IntMap } from "it.unimi.dsi.fastutil.objects.Reference2IntMap"

export interface $IVoidable extends $IMachineFeature {
"canVoidRecipeOutputs"(recipeCapability0: $RecipeCapability$$Type<any>): boolean
"getOutputLimits"(): $Reference2IntMap<$RecipeCapability<any>>
"getVoidingMode"(): $IVoidable$VoidingMode
"self"(): $MetaMachine
"setVoidingMode"(voidingMode0: $IVoidable$VoidingMode$$Type): void
get "outputLimits"(): $Reference2IntMap<$RecipeCapability<any>>
get "voidingMode"(): $IVoidable$VoidingMode
set "voidingMode"(value: $IVoidable$VoidingMode$$Type)
}

export namespace $IVoidable {
function attachConfigurators(configuratorPanel0: $ConfiguratorPanel$$Type, iVoidable1: $IVoidable$$Type): void
}
export abstract class $IVoidable$$Static implements $IVoidable {
static "attachConfigurators"(configuratorPanel0: $ConfiguratorPanel$$Type, iVoidable1: $IVoidable$$Type): void
}
}

declare module "com.gregtechceu.gtceu.api.machine.feature.multiblock.IWorkableMultiController" {
import { $IMultiPart, $IMultiPart$$Type } from "com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiPart"
import { $GTRecipeType } from "com.gregtechceu.gtceu.api.recipe.GTRecipeType"
import { $RecipeHandlerList, $RecipeHandlerList$$Type } from "com.gregtechceu.gtceu.api.machine.trait.RecipeHandlerList"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $IMultiController } from "com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiController"
import { $IVoidable$$Type } from "com.gregtechceu.gtceu.api.machine.feature.IVoidable"
import { $GTRecipe, $GTRecipe$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipe"
import { $IO, $IO$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.IO"
import { $IParallelHatch } from "com.gregtechceu.gtceu.api.capability.IParallelHatch"
import { $Map } from "java.util.Map"
import { $BlockPattern } from "com.gregtechceu.gtceu.api.pattern.BlockPattern"
import { $IRecipeHandler } from "com.gregtechceu.gtceu.api.capability.recipe.IRecipeHandler"
import { $MultiblockState } from "com.gregtechceu.gtceu.api.pattern.MultiblockState"
import { $ICleanroomProvider, $ICleanroomProvider$$Type } from "com.gregtechceu.gtceu.api.machine.feature.ICleanroomProvider"
import { $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $RecipeCapability, $RecipeCapability$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $ConfiguratorPanel$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.ConfiguratorPanel"
import { $List } from "java.util.List"
import { $Lock } from "java.util.concurrent.locks.Lock"
import { $RecipeLogic } from "com.gregtechceu.gtceu.api.machine.trait.RecipeLogic"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $IRecipeLogicMachine } from "com.gregtechceu.gtceu.api.machine.feature.IRecipeLogicMachine"
import { $Optional } from "java.util.Optional"
import { $RecipeLogic$Status$$Type } from "com.gregtechceu.gtceu.api.machine.trait.RecipeLogic$Status"
import { $IVoidable$VoidingMode, $IVoidable$VoidingMode$$Type } from "com.gregtechceu.gtceu.api.machine.feature.IVoidable$VoidingMode"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Comparator } from "java.util.Comparator"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Reference2IntMap } from "it.unimi.dsi.fastutil.objects.Reference2IntMap"

export interface $IWorkableMultiController extends $IMultiController, $IRecipeLogicMachine {
"addHandlerList"(recipeHandlerList0: $RecipeHandlerList$$Type): void
"afterWorking"(): void
"allowCircuitSlots"(): boolean
"alwaysTryModifyRecipe"(): boolean
"asyncCheckPattern"(long0: long): void
"beforeWorking"(gTRecipe0: $GTRecipe$$Type): boolean
"canVoidRecipeOutputs"(recipeCapability0: $RecipeCapability$$Type<any>): boolean
"checkPattern"(): boolean
"checkPatternWithLock"(): boolean
"checkPatternWithTryLock"(): boolean
"doModifyRecipe"(gTRecipe0: $GTRecipe$$Type): $GTRecipe
"fullModifyRecipe"(gTRecipe0: $GTRecipe$$Type): $GTRecipe
"getActiveRecipeType"(): integer
"getCapabilitiesFlat"(iO0: $IO$$Type, recipeCapability1: $RecipeCapability$$Type<any>): $List<$IRecipeHandler<any>>
"getCapabilitiesFlat"(): $Map<$IO, $Map<$RecipeCapability<any>, $List<$IRecipeHandler<any>>>>
"getCapabilitiesForIO"(iO0: $IO$$Type): $List<$RecipeHandlerList>
"getCapabilitiesProxy"(): $Map<$IO, $List<$RecipeHandlerList>>
"getCleanroom"(): $ICleanroomProvider
"getDisplayRecipeVoltage"(): long
"getMaxProgress"(): integer
"getMultiblockState"(): $MultiblockState
"getOutputLimits"(): $Reference2IntMap<$RecipeCapability<any>>
"getParallelHatch"(): $Optional<$IParallelHatch>
"getPartAppearance"(iMultiPart0: $IMultiPart$$Type, direction1: $Direction$$Type, blockState2: $BlockState$$Type, blockPos3: $BlockPos$$Type): $BlockState
"getPartSorter"(): $Comparator<$IMultiPart>
"getParts"(): $List<$IMultiPart>
"getPattern"(): $BlockPattern
"getPatternLock"(): $Lock
"getProgress"(): integer
"getRecipeLogic"(): $RecipeLogic
"getRecipeType"(): $GTRecipeType
"getRecipeTypes"(): $GTRecipeType[]
"getVoidingMode"(): $IVoidable$VoidingMode
"hasCapabilityProxies"(): boolean
"hasFrontFacing"(): boolean
"isActive"(): boolean
"isBatchEnabled"(): boolean
"isFormed"(): boolean
"isRecipeLogicAvailable"(): boolean
"isSuspendAfterFinish"(): boolean
"isWorkingEnabled"(): boolean
"keepSubscribing"(): boolean
"notifyStatusChanged"(status0: $RecipeLogic$Status$$Type, status1: $RecipeLogic$Status$$Type): void
"onLeftClick"(player0: $Player$$Type, level1: $Level$$Type, interactionHand2: $InteractionHand$$Type, blockPos3: $BlockPos$$Type, direction4: $Direction$$Type): boolean
"onPartUnload"(): void
"onStructureFormed"(): void
"onStructureInvalid"(): void
"onUse"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, interactionHand4: $InteractionHand$$Type, blockHitResult5: $BlockHitResult$$Type): $InteractionResult
"onWaiting"(): void
"onWorking"(): boolean
"regressWhenWaiting"(): boolean
"setActiveRecipeType"(int0: integer): void
"setBatchEnabled"(boolean0: boolean): void
"setCleanroom"(iCleanroomProvider0: $ICleanroomProvider$$Type): void
"setSuspendAfterFinish"(boolean0: boolean): void
"setVoidingMode"(voidingMode0: $IVoidable$VoidingMode$$Type): void
"setWorkingEnabled"(boolean0: boolean): void
"shouldAddPartToController"(iMultiPart0: $IMultiPart$$Type): boolean
"shouldWorkingPlaySound"(): boolean
get "activeRecipeType"(): integer
get "capabilitiesFlat"(): $Map<$IO, $Map<$RecipeCapability<any>, $List<$IRecipeHandler<any>>>>
get "capabilitiesProxy"(): $Map<$IO, $List<$RecipeHandlerList>>
get "cleanroom"(): $ICleanroomProvider
get "displayRecipeVoltage"(): long
get "maxProgress"(): integer
get "multiblockState"(): $MultiblockState
get "outputLimits"(): $Reference2IntMap<$RecipeCapability<any>>
get "parallelHatch"(): $Optional<$IParallelHatch>
get "partSorter"(): $Comparator<$IMultiPart>
get "parts"(): $List<$IMultiPart>
get "pattern"(): $BlockPattern
get "patternLock"(): $Lock
get "progress"(): integer
get "recipeLogic"(): $RecipeLogic
get "recipeType"(): $GTRecipeType
get "recipeTypes"(): $GTRecipeType[]
get "voidingMode"(): $IVoidable$VoidingMode
get "active"(): boolean
get "batchEnabled"(): boolean
get "formed"(): boolean
get "recipeLogicAvailable"(): boolean
get "suspendAfterFinish"(): boolean
get "workingEnabled"(): boolean
set "activeRecipeType"(value: integer)
set "batchEnabled"(value: boolean)
set "cleanroom"(value: $ICleanroomProvider$$Type)
set "suspendAfterFinish"(value: boolean)
set "voidingMode"(value: $IVoidable$VoidingMode$$Type)
set "workingEnabled"(value: boolean)
}

export namespace $IWorkableMultiController {
function attachConfigurators(configuratorPanel0: $ConfiguratorPanel$$Type, iVoidable1: $IVoidable$$Type): void
}
export abstract class $IWorkableMultiController$$Static implements $IWorkableMultiController {
static "attachConfigurators"(configuratorPanel0: $ConfiguratorPanel$$Type, iVoidable1: $IVoidable$$Type): void
}
}

declare module "com.gregtechceu.gtceu.api.machine.TickableSubscription" {
import { $Runnable$$Type } from "java.lang.Runnable"

export class $TickableSubscription {
constructor(runnable0: $Runnable$$Type)

public "isStillSubscribed"(): boolean
public "run"(): void
public "unsubscribe"(): void
get "stillSubscribed"(): boolean
}
}

declare module "com.gregtechceu.gtceu.api.machine.feature.IRecipeLogicMachine" {
import { $IRecipeHandler } from "com.gregtechceu.gtceu.api.capability.recipe.IRecipeHandler"
import { $GTRecipeType } from "com.gregtechceu.gtceu.api.recipe.GTRecipeType"
import { $RecipeHandlerList, $RecipeHandlerList$$Type } from "com.gregtechceu.gtceu.api.machine.trait.RecipeHandlerList"
import { $MetaMachine } from "com.gregtechceu.gtceu.api.machine.MetaMachine"
import { $IWorkable } from "com.gregtechceu.gtceu.api.capability.IWorkable"
import { $ICleanroomReceiver } from "com.gregtechceu.gtceu.api.capability.ICleanroomReceiver"
import { $ICleanroomProvider, $ICleanroomProvider$$Type } from "com.gregtechceu.gtceu.api.machine.feature.ICleanroomProvider"
import { $RecipeCapability, $RecipeCapability$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability"
import { $IVoidable, $IVoidable$$Type } from "com.gregtechceu.gtceu.api.machine.feature.IVoidable"
import { $GTRecipe, $GTRecipe$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipe"
import { $IO, $IO$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.IO"
import { $ConfiguratorPanel$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.ConfiguratorPanel"
import { $List } from "java.util.List"
import { $RecipeLogic } from "com.gregtechceu.gtceu.api.machine.trait.RecipeLogic"
import { $Map } from "java.util.Map"
import { $RecipeLogic$Status$$Type } from "com.gregtechceu.gtceu.api.machine.trait.RecipeLogic$Status"
import { $IVoidable$VoidingMode, $IVoidable$VoidingMode$$Type } from "com.gregtechceu.gtceu.api.machine.feature.IVoidable$VoidingMode"
import { $IMachineFeature } from "com.gregtechceu.gtceu.api.machine.feature.IMachineFeature"
import { $Reference2IntMap } from "it.unimi.dsi.fastutil.objects.Reference2IntMap"
import { $IRecipeCapabilityHolder } from "com.gregtechceu.gtceu.api.capability.recipe.IRecipeCapabilityHolder"

export interface $IRecipeLogicMachine extends $IRecipeCapabilityHolder, $IMachineFeature, $IWorkable, $ICleanroomReceiver, $IVoidable {
"addHandlerList"(recipeHandlerList0: $RecipeHandlerList$$Type): void
"afterWorking"(): void
"alwaysTryModifyRecipe"(): boolean
"beforeWorking"(gTRecipe0: $GTRecipe$$Type): boolean
"canVoidRecipeOutputs"(recipeCapability0: $RecipeCapability$$Type<any>): boolean
"doModifyRecipe"(gTRecipe0: $GTRecipe$$Type): $GTRecipe
"fullModifyRecipe"(gTRecipe0: $GTRecipe$$Type): $GTRecipe
"getActiveRecipeType"(): integer
"getCapabilitiesFlat"(iO0: $IO$$Type, recipeCapability1: $RecipeCapability$$Type<any>): $List<$IRecipeHandler<any>>
"getCapabilitiesFlat"(): $Map<$IO, $Map<$RecipeCapability<any>, $List<$IRecipeHandler<any>>>>
"getCapabilitiesForIO"(iO0: $IO$$Type): $List<$RecipeHandlerList>
"getCapabilitiesProxy"(): $Map<$IO, $List<$RecipeHandlerList>>
"getCleanroom"(): $ICleanroomProvider
"getDisplayRecipeVoltage"(): long
"getMaxProgress"(): integer
"getOutputLimits"(): $Reference2IntMap<$RecipeCapability<any>>
"getProgress"(): integer
"getRecipeLogic"(): $RecipeLogic
"getRecipeType"(): $GTRecipeType
"getRecipeTypes"(): $GTRecipeType[]
"getVoidingMode"(): $IVoidable$VoidingMode
"hasCapabilityProxies"(): boolean
"isActive"(): boolean
"isRecipeLogicAvailable"(): boolean
"isSuspendAfterFinish"(): boolean
"isWorkingEnabled"(): boolean
"keepSubscribing"(): boolean
"notifyStatusChanged"(status0: $RecipeLogic$Status$$Type, status1: $RecipeLogic$Status$$Type): void
"onWaiting"(): void
"onWorking"(): boolean
"regressWhenWaiting"(): boolean
"self"(): $MetaMachine
"setActiveRecipeType"(int0: integer): void
"setCleanroom"(iCleanroomProvider0: $ICleanroomProvider$$Type): void
"setSuspendAfterFinish"(boolean0: boolean): void
"setVoidingMode"(voidingMode0: $IVoidable$VoidingMode$$Type): void
"setWorkingEnabled"(boolean0: boolean): void
"shouldWorkingPlaySound"(): boolean
get "activeRecipeType"(): integer
get "capabilitiesFlat"(): $Map<$IO, $Map<$RecipeCapability<any>, $List<$IRecipeHandler<any>>>>
get "capabilitiesProxy"(): $Map<$IO, $List<$RecipeHandlerList>>
get "cleanroom"(): $ICleanroomProvider
get "displayRecipeVoltage"(): long
get "maxProgress"(): integer
get "outputLimits"(): $Reference2IntMap<$RecipeCapability<any>>
get "progress"(): integer
get "recipeLogic"(): $RecipeLogic
get "recipeType"(): $GTRecipeType
get "recipeTypes"(): $GTRecipeType[]
get "voidingMode"(): $IVoidable$VoidingMode
get "active"(): boolean
get "recipeLogicAvailable"(): boolean
get "suspendAfterFinish"(): boolean
get "workingEnabled"(): boolean
set "activeRecipeType"(value: integer)
set "cleanroom"(value: $ICleanroomProvider$$Type)
set "suspendAfterFinish"(value: boolean)
set "voidingMode"(value: $IVoidable$VoidingMode$$Type)
set "workingEnabled"(value: boolean)
}

export namespace $IRecipeLogicMachine {
function attachConfigurators(configuratorPanel0: $ConfiguratorPanel$$Type, iVoidable1: $IVoidable$$Type): void
}
export abstract class $IRecipeLogicMachine$$Static implements $IRecipeLogicMachine {
static "attachConfigurators"(configuratorPanel0: $ConfiguratorPanel$$Type, iVoidable1: $IVoidable$$Type): void
}
}

declare module "com.gregtechceu.gtceu.api.machine.property.GTMachineModelProperties" {
import { $BooleanProperty } from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import { $EnumProperty } from "net.minecraft.world.level.block.state.properties.EnumProperty"
import { $RecipeLogic$Status } from "com.gregtechceu.gtceu.api.machine.trait.RecipeLogic$Status"
import { $DiodePartMachine$AmpMode } from "com.gregtechceu.gtceu.common.machine.multiblock.part.DiodePartMachine$AmpMode"
import { $ChargerMachine$State } from "com.gregtechceu.gtceu.common.machine.electric.ChargerMachine$State"
import { $RelativeDirection } from "com.gregtechceu.gtceu.api.pattern.util.RelativeDirection"

export class $GTMachineModelProperties {
static readonly "CHARGER_STATE": $EnumProperty<$ChargerMachine$State>
static readonly "DIODE_AMP_MODE": $EnumProperty<$DiodePartMachine$AmpMode>
static readonly "HAS_ROTOR": $BooleanProperty
static readonly "IS_ACTIVE": $BooleanProperty
static readonly "IS_EMISSIVE_ROTOR": $BooleanProperty
static readonly "IS_FE_TO_EU": $BooleanProperty
static readonly "IS_FORMED": $BooleanProperty
static readonly "IS_HPCA_PART_DAMAGED": $BooleanProperty
static readonly "IS_PAINTED": $BooleanProperty
static readonly "IS_RANDOM_TICK_MODE": $BooleanProperty
static readonly "IS_ROTOR_SPINNING": $BooleanProperty
static readonly "IS_STEEL_MACHINE": $BooleanProperty
static readonly "IS_TAPED": $BooleanProperty
static readonly "IS_TRANSFORM_UP": $BooleanProperty
static readonly "IS_WORKING_ENABLED": $BooleanProperty
static readonly "RECIPE_LOGIC_STATUS": $EnumProperty<$RecipeLogic$Status>
static readonly "VENT_DIRECTION": $EnumProperty<$RelativeDirection>

}
}

declare module "com.gregtechceu.gtceu.api.machine.IMachineBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RPCMethodMeta } from "com.lowdragmc.lowdraglib.syncdata.field.RPCMethodMeta"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $IManaged$$Type } from "com.lowdragmc.lowdraglib.syncdata.IManaged"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $IPaintable } from "com.gregtechceu.gtceu.api.blockentity.IPaintable"
import { $IRef } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"
import { $MetaMachine } from "com.gregtechceu.gtceu.api.machine.MetaMachine"
import { $IRPCBlockEntity } from "com.lowdragmc.lowdraglib.syncdata.blockentity.IRPCBlockEntity"
import { $MachineRenderState, $MachineRenderState$$Type } from "com.gregtechceu.gtceu.client.model.machine.MachineRenderState"
import { $SPacketRPCMethodPayload } from "com.lowdragmc.lowdraglib.networking.s2c.SPacketRPCMethodPayload"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $Set$$Type } from "java.util.Set"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $GTToolType$$Type } from "com.gregtechceu.gtceu.api.item.tool.GTToolType"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $MachineDefinition } from "com.gregtechceu.gtceu.api.machine.MachineDefinition"
import { $BlockEntityType } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ResourceTexture } from "com.lowdragmc.lowdraglib.gui.texture.ResourceTexture"
import { $IToolGridHighlight } from "com.gregtechceu.gtceu.api.item.tool.IToolGridHighlight"
import { $IAutoPersistBlockEntity } from "com.lowdragmc.lowdraglib.syncdata.blockentity.IAutoPersistBlockEntity"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level } from "net.minecraft.world.level.Level"
import { $MultiManagedStorage } from "com.lowdragmc.lowdraglib.syncdata.managed.MultiManagedStorage"
import { $IAsyncAutoSyncBlockEntity } from "com.lowdragmc.lowdraglib.syncdata.blockentity.IAsyncAutoSyncBlockEntity"
import { $IForgeBlockEntity } from "net.minecraftforge.common.extensions.IForgeBlockEntity"

export interface $IMachineBlockEntity extends $IToolGridHighlight, $IAsyncAutoSyncBlockEntity, $IRPCBlockEntity, $IAutoPersistBlockEntity, $IPaintable, $IForgeBlockEntity {
"asyncTick"(periodID: long): void
"defaultServerTick"(): void
"deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
"generateRpcPacket"(managed: $IManaged$$Type, methodName: string, ...args: any[]): $SPacketRPCMethodPayload
"getBlockEntityType"(): $BlockEntityType<any>
"getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
"getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
"getCurrentPos"(): $BlockPos
"getDefaultPaintingColor"(): integer
"getDefinition"(): $MachineDefinition
"getMetaMachine"(): $MetaMachine
"getModelData"(): $ModelData
"getNonLazyFields"(): $IRef[]
"getOffset"(): long
"getOffsetTimer"(): long
"getPaintingColor"(): integer
"getPersistentData"(): $CompoundTag
"getRPCMethod"(managed: $IManaged$$Type, methodName: string): $RPCMethodMeta
"getRealColor"(): integer
"getRenderBoundingBox"(): $AABB
"getRenderState"(): $MachineRenderState
"getRootStorage"(): $MultiManagedStorage
"getSelf"(): $BlockEntity
"getSyncTag"(): string
"handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
"hasCustomOutlineRendering"(player0: $Player$$Type): boolean
"isAsyncSyncing"(): boolean
"isPainted"(): boolean
"level"(): $Level
"loadCustomPersistedData"(compoundTag0: $CompoundTag$$Type): void
"loadManagedPersistentData"(tag: $CompoundTag$$Type): void
"notifyBlockUpdate"(): void
"onChunkUnloaded"(): void
"onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
"onInValid"(): void
"onLoad"(): void
"onValid"(): void
"pos"(): $BlockPos
"readCustomSyncData"(tag: $CompoundTag$$Type): void
"requestModelDataUpdate"(): void
"rpcToPlayer"(managed: $IManaged$$Type, player: $ServerPlayer$$Type, methodName: string, ...args: any[]): void
"rpcToTracking"(managed: $IManaged$$Type, methodName: string, ...args: any[]): void
"saveCustomPersistedData"(compoundTag0: $CompoundTag$$Type, boolean1: boolean): void
"saveManagedPersistentData"(tag: $CompoundTag$$Type, forDrop: boolean): void
"scheduleRenderUpdate"(): void
"self"(): $BlockEntity
"setAsyncSyncing"(syncing: boolean): void
"setPaintingColor"(int0: integer): void
"setRenderState"(machineRenderState0: $MachineRenderState$$Type): void
"shouldRenderGrid"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, itemStack3: $ItemStack$$Type, set4: $Set$$Type<$GTToolType$$Type>): boolean
"sideTips"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, set3: $Set$$Type<$GTToolType$$Type>, direction4: $Direction$$Type): $ResourceTexture
"syncNow"(force: boolean): void
"useAsyncThread"(): boolean
"writeCustomSyncData"(tag: $CompoundTag$$Type): void
get "blockEntityType"(): $BlockEntityType<any>
get "currentPos"(): $BlockPos
get "defaultPaintingColor"(): integer
get "definition"(): $MachineDefinition
get "metaMachine"(): $MetaMachine
get "modelData"(): $ModelData
get "nonLazyFields"(): $IRef[]
get "offset"(): long
get "offsetTimer"(): long
get "paintingColor"(): integer
get "persistentData"(): $CompoundTag
get "realColor"(): integer
get "renderBoundingBox"(): $AABB
get "renderState"(): $MachineRenderState
get "rootStorage"(): $MultiManagedStorage
get "syncTag"(): string
get "asyncSyncing"(): boolean
get "painted"(): boolean
set "asyncSyncing"(value: boolean)
set "paintingColor"(value: integer)
set "renderState"(value: $MachineRenderState$$Type)
}

export namespace $IMachineBlockEntity {
const probejs$$marker: never
}
export abstract class $IMachineBlockEntity$$Static implements $IMachineBlockEntity {
}
}

declare module "com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiController" {
import { $IMultiPart, $IMultiPart$$Type } from "com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiPart"
import { $MultiblockState } from "com.gregtechceu.gtceu.api.pattern.MultiblockState"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $IInteractedMachine } from "com.gregtechceu.gtceu.api.machine.feature.IInteractedMachine"
import { $IParallelHatch } from "com.gregtechceu.gtceu.api.capability.IParallelHatch"
import { $BooleanProperty } from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import { $List } from "java.util.List"
import { $Lock } from "java.util.concurrent.locks.Lock"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $IMachineFeature } from "com.gregtechceu.gtceu.api.machine.feature.IMachineFeature"
import { $Comparator } from "java.util.Comparator"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $BlockPattern } from "com.gregtechceu.gtceu.api.pattern.BlockPattern"

export interface $IMultiController extends $IMachineFeature, $IInteractedMachine {
"allowCircuitSlots"(): boolean
"asyncCheckPattern"(long0: long): void
"checkPattern"(): boolean
"checkPatternWithLock"(): boolean
"checkPatternWithTryLock"(): boolean
"getMultiblockState"(): $MultiblockState
"getParallelHatch"(): $Optional<$IParallelHatch>
"getPartAppearance"(iMultiPart0: $IMultiPart$$Type, direction1: $Direction$$Type, blockState2: $BlockState$$Type, blockPos3: $BlockPos$$Type): $BlockState
"getPartSorter"(): $Comparator<$IMultiPart>
"getParts"(): $List<$IMultiPart>
"getPattern"(): $BlockPattern
"getPatternLock"(): $Lock
"hasFrontFacing"(): boolean
"isBatchEnabled"(): boolean
"isFormed"(): boolean
"onLeftClick"(player0: $Player$$Type, level1: $Level$$Type, interactionHand2: $InteractionHand$$Type, blockPos3: $BlockPos$$Type, direction4: $Direction$$Type): boolean
"onPartUnload"(): void
"onStructureFormed"(): void
"onStructureInvalid"(): void
"onUse"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, interactionHand4: $InteractionHand$$Type, blockHitResult5: $BlockHitResult$$Type): $InteractionResult
"setBatchEnabled"(boolean0: boolean): void
"shouldAddPartToController"(iMultiPart0: $IMultiPart$$Type): boolean
get "multiblockState"(): $MultiblockState
get "parallelHatch"(): $Optional<$IParallelHatch>
get "partSorter"(): $Comparator<$IMultiPart>
get "parts"(): $List<$IMultiPart>
get "pattern"(): $BlockPattern
get "patternLock"(): $Lock
get "batchEnabled"(): boolean
get "formed"(): boolean
set "batchEnabled"(value: boolean)
}

export namespace $IMultiController {
const IS_FORMED_PROPERTY: $BooleanProperty
}
export abstract class $IMultiController$$Static implements $IMultiController {
static readonly "IS_FORMED_PROPERTY": $BooleanProperty

}
}

declare module "com.gregtechceu.gtceu.api.machine.feature.IDataInfoProvider" {
import { $List } from "java.util.List"
import { $Component } from "net.minecraft.network.chat.Component"
import { $PortableScannerBehavior$DisplayMode$$Type } from "com.gregtechceu.gtceu.common.item.PortableScannerBehavior$DisplayMode"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $IDataInfoProvider {
"getDataInfo"(displayMode0: $PortableScannerBehavior$DisplayMode$$Type): $List<$Component>
"getDebugInfo"(player0: $Player$$Type, int1: integer, displayMode2: $PortableScannerBehavior$DisplayMode$$Type): $List<$Component>
}

export namespace $IDataInfoProvider {
const probejs$$marker: never
}
export abstract class $IDataInfoProvider$$Static implements $IDataInfoProvider {
}
}

declare module "com.gregtechceu.gtceu.api.machine.trait.RecipeLogic" {
import { $IFieldUpdateListener$$Type } from "com.lowdragmc.lowdraglib.syncdata.IFieldUpdateListener"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Iterator } from "java.util.Iterator"
import { $IWorkable } from "com.gregtechceu.gtceu.api.capability.IWorkable"
import { $ActionResult } from "com.gregtechceu.gtceu.api.recipe.ActionResult"
import { $RecipeCapability } from "com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability"
import { $IGuiTexture } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $GTRecipe, $GTRecipe$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipe"
import { $List, $List$$Type } from "java.util.List"
import { $IEnhancedManaged } from "com.lowdragmc.lowdraglib.syncdata.IEnhancedManaged"
import { $IFancyTooltip } from "com.gregtechceu.gtceu.api.gui.fancy.IFancyTooltip"
import { $Object2IntMap } from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import { $IRecipeLogicMachine, $IRecipeLogicMachine$$Type } from "com.gregtechceu.gtceu.api.machine.feature.IRecipeLogicMachine"
import { $RecipeManager } from "net.minecraft.world.item.crafting.RecipeManager"
import { $MachineTrait } from "com.gregtechceu.gtceu.api.machine.trait.MachineTrait"
import { $EnumProperty } from "net.minecraft.world.level.block.state.properties.EnumProperty"
import { $Map } from "java.util.Map"
import { $RecipeLogic$Status, $RecipeLogic$Status$$Type } from "com.gregtechceu.gtceu.api.machine.trait.RecipeLogic$Status"
import { $IRef$$Type } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"
import { $TooltipComponent } from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import { $ManagedFieldHolder } from "com.lowdragmc.lowdraglib.syncdata.field.ManagedFieldHolder"
import { $ISubscription } from "com.lowdragmc.lowdraglib.syncdata.ISubscription"

export class $RecipeLogic extends $MachineTrait implements $IEnhancedManaged, $IWorkable, $IFancyTooltip {
static readonly "MANAGED_FIELD_HOLDER": $ManagedFieldHolder
static readonly "STATUS_PROPERTY": $EnumProperty<$RecipeLogic$Status>
readonly "machine": $IRecipeLogicMachine

constructor(iRecipeLogicMachine0: $IRecipeLogicMachine$$Type)

public "addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$$Type<T>): $ISubscription
public "checkMatchedRecipeAvailable"(gTRecipe0: $GTRecipe$$Type): boolean
public "findAndHandleRecipe"(): void
public "getChanceCaches"(): $Map<$RecipeCapability<any>, $Object2IntMap<any>>
public "getConsecutiveRecipes"(): integer
public "getCustomProgressLine"(): $Component
public "getDuration"(): integer
public "getFailureReasonMap"(): $Map<$GTRecipe, $Component>
public "getFailureReasons"(): $List<$Component>
public "getFancyComponent"(): $TooltipComponent
public "getFancyTooltip"(): $List<$Component>
public "getFancyTooltipIcon"(): $IGuiTexture
public "getFieldHolder"(): $ManagedFieldHolder
public "getLastOriginRecipe"(): $GTRecipe
public "getLastRecipe"(): $GTRecipe
public "getMaxProgress"(): integer
public "getProgress"(): integer
public "getProgressPercent"(): double
public "getRecipeManager"(): $RecipeManager
public "getStatus"(): $RecipeLogic$Status
public "getTotalContinuousRunningTime"(): long
public "getWaitingReason"(): $Component
public "handleRecipeWorking"(): void
public "handleTickRecipe"(gTRecipe0: $GTRecipe$$Type): $ActionResult
public "hasCustomProgressLine"(): boolean
public "inValid"(): void
public "interruptRecipe"(): void
public "isActive"(): boolean
public "isIdle"(): boolean
public "isRecipeDirty"(): boolean
public "isSuspend"(): boolean
public "isSuspendAfterFinish"(): boolean
public "isWaiting"(): boolean
public "isWorking"(): boolean
public "isWorkingEnabled"(): boolean
public "markDirty"(name: string): void
public "markLastRecipeDirty"(): void
public "onPersistedChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "onRecipeFinish"(): void
public "onSyncChanged"(ref: $IRef$$Type, isDirty: boolean): void
public static "putFailureReason"(object0: any, gTRecipe1: $GTRecipe$$Type, component2: $Component$$Type): void
public static "putFailureReason"(recipeLogic0: $RecipeLogic$$Type, gTRecipe1: $GTRecipe$$Type, component2: $Component$$Type): void
public "resetRecipeLogic"(): void
public "scheduleRender"(fieldName: string, newValue: any, oldValue: any): void
public "scheduleRenderUpdate"(): void
public "searchRecipe"(): $Iterator<$GTRecipe>
public "serverTick"(): void
public "setProgress"(int0: integer): void
public "setStatus"(status0: $RecipeLogic$Status$$Type): void
public "setSuspendAfterFinish"(boolean0: boolean): void
public "setWaiting"(component0: $Component$$Type): void
public "setWorkingEnabled"(boolean0: boolean): void
public "setupRecipe"(gTRecipe0: $GTRecipe$$Type): void
public "showFancyTooltip"(): boolean
/** Client only, do not use in server scripts */
public "updateSound"(): void
public "updateTickSubscription"(): void
get "lastFailedMatches"(): $List<$GTRecipe>
set "lastFailedMatches"(value: $List$$Type<$GTRecipe$$Type>)
get "chanceCaches"(): $Map<$RecipeCapability<any>, $Object2IntMap<any>>
get "consecutiveRecipes"(): integer
get "customProgressLine"(): $Component
get "duration"(): integer
get "failureReasonMap"(): $Map<$GTRecipe, $Component>
get "failureReasons"(): $List<$Component>
get "fancyComponent"(): $TooltipComponent
get "fancyTooltip"(): $List<$Component>
get "fancyTooltipIcon"(): $IGuiTexture
get "fieldHolder"(): $ManagedFieldHolder
get "lastOriginRecipe"(): $GTRecipe
get "lastRecipe"(): $GTRecipe
get "maxProgress"(): integer
get "progress"(): integer
get "progressPercent"(): double
get "recipeManager"(): $RecipeManager
get "status"(): $RecipeLogic$Status
get "totalContinuousRunningTime"(): long
get "waitingReason"(): $Component
get "active"(): boolean
get "idle"(): boolean
get "recipeDirty"(): boolean
get "suspend"(): boolean
get "suspendAfterFinish"(): boolean
get "waiting"(): boolean
get "working"(): boolean
get "workingEnabled"(): boolean
set "progress"(value: integer)
set "status"(value: $RecipeLogic$Status$$Type)
set "suspendAfterFinish"(value: boolean)
set "waiting"(value: $Component$$Type)
set "workingEnabled"(value: boolean)
set "upRecipe"(value: $GTRecipe$$Type)
}
}

declare module "com.gregtechceu.gtceu.api.machine.trait.RecipeLogic$Status" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $RecipeLogic$Status extends $Enum<$RecipeLogic$Status> implements $StringRepresentable {
static readonly "IDLE": $RecipeLogic$Status
static readonly "SUSPEND": $RecipeLogic$Status
static readonly "WAITING": $RecipeLogic$Status
static readonly "WORKING": $RecipeLogic$Status

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $RecipeLogic$Status
public static "values"(): $RecipeLogic$Status[]
get "serializedName"(): string
}
}

declare module "com.gregtechceu.gtceu.api.machine.MachineCoverContainer" {
import { $IFieldUpdateListener$$Type } from "com.lowdragmc.lowdraglib.syncdata.IFieldUpdateListener"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ICoverable, $ICoverable$$Type } from "com.gregtechceu.gtceu.api.capability.ICoverable"
import { $CoverBehavior, $CoverBehavior$$Type } from "com.gregtechceu.gtceu.api.cover.CoverBehavior"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $IItemHandlerModifiable } from "net.minecraftforge.items.IItemHandlerModifiable"
import { $IRef$$Type } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $MetaMachine, $MetaMachine$$Type } from "com.gregtechceu.gtceu.api.machine.MetaMachine"
import { $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $CoverDefinition$$Type } from "com.gregtechceu.gtceu.api.cover.CoverDefinition"
import { $IFluidHandlerModifiable } from "com.gregtechceu.gtceu.api.transfer.fluid.IFluidHandlerModifiable"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List, $List$$Type } from "java.util.List"
import { $TickableSubscription, $TickableSubscription$$Type } from "com.gregtechceu.gtceu.api.machine.TickableSubscription"
import { $IEnhancedManaged } from "com.lowdragmc.lowdraglib.syncdata.IEnhancedManaged"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level } from "net.minecraft.world.level.Level"
import { $ManagedFieldHolder } from "com.lowdragmc.lowdraglib.syncdata.field.ManagedFieldHolder"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $ISubscription } from "com.lowdragmc.lowdraglib.syncdata.ISubscription"

export class $MachineCoverContainer implements $ICoverable, $IEnhancedManaged {
static readonly "MANAGED_FIELD_HOLDER": $ManagedFieldHolder

constructor(metaMachine0: $MetaMachine$$Type)

public "addCoverCollisionBoundingBox"(): $VoxelShape[]
public "addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$$Type<T>): $ISubscription
public static "canPlaceCover"(coverDefinition0: $CoverDefinition$$Type, iCoverable1: $ICoverable$$Type): boolean
public "canPlaceCoverOnSide"(coverDefinition0: $CoverDefinition$$Type, direction1: $Direction$$Type): boolean
public "copyConfig"(compoundTag0: $CompoundTag$$Type): $CompoundTag
public static "determineGridSideHit"(blockHitResult0: $BlockHitResult$$Type): $Direction
public static "doesCoverCollide"(direction0: $Direction$$Type, list1: $List$$Type<$VoxelShape$$Type>, double2: double): boolean
public "dropAllCovers"(): void
public "getBlockAppearance"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, blockState4: $BlockState$$Type, blockPos5: $BlockPos$$Type): $BlockState
public "getCoverAtSide"(direction0: $Direction$$Type): $CoverBehavior
public static "getCoverPlateBox"(direction0: $Direction$$Type, double1: double): $VoxelShape
public "getCoverPlateThickness"(): double
public "getCovers"(): $List<$CoverBehavior>
public "getFieldHolder"(): $ManagedFieldHolder
public "getFluidHandlerCap"(direction0: $Direction$$Type, boolean1: boolean): $IFluidHandlerModifiable
public "getFrontFacing"(): $Direction
public "getItemHandlerCap"(direction0: $Direction$$Type, boolean1: boolean): $IItemHandlerModifiable
public "getItemsRequiredToPaste"(): $List<$ItemStack>
public "getLevel"(): $Level
public "getMachine"(): $MetaMachine
public "getOffsetTimer"(): long
public "getPos"(): $BlockPos
public "hasAnyCover"(): boolean
public "hasCover"(direction0: $Direction$$Type): boolean
public "hasDynamicCovers"(): boolean
public "isInValid"(): boolean
public "isRemote"(): boolean
public "markDirty"(): void
public "markDirty"(name: string): void
public "notifyBlockUpdate"(): void
public "onChanged"(): void
public "onLoad"(): void
public "onNeighborChanged"(block0: $Block$$Type, blockPos1: $BlockPos$$Type, boolean2: boolean): void
public "onPersistedChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "onSyncChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "onUnload"(): void
public "pasteConfig"(serverPlayer0: $ServerPlayer$$Type, compoundTag1: $CompoundTag$$Type): void
public "placeCoverOnSide"(direction0: $Direction$$Type, itemStack1: $ItemStack$$Type, coverDefinition2: $CoverDefinition$$Type, serverPlayer3: $ServerPlayer$$Type): boolean
public static "rayTraceCoverableSide"(iCoverable0: $ICoverable$$Type, player1: $Player$$Type): $Direction
public "removeCover"(boolean0: boolean, direction1: $Direction$$Type, player2: $Player$$Type): boolean
public "removeCover"(direction0: $Direction$$Type, player1: $Player$$Type): boolean
public "scheduleNeighborShapeUpdate"(): void
public "scheduleRender"(fieldName: string, newValue: any, oldValue: any): void
public "scheduleRenderUpdate"(): void
public "setCoverAtSide"(coverBehavior0: $CoverBehavior$$Type, direction1: $Direction$$Type): void
public "shouldRenderBackSide"(): boolean
public "subscribeServerTick"(runnable0: $Runnable$$Type): $TickableSubscription
public "subscribeServerTick"(tickableSubscription0: $TickableSubscription$$Type, runnable1: $Runnable$$Type): $TickableSubscription
public static "traceCoverSide"(blockHitResult0: $BlockHitResult$$Type): $Direction
public "unsubscribe"(tickableSubscription0: $TickableSubscription$$Type): void
get "coverPlateThickness"(): double
get "covers"(): $List<$CoverBehavior>
get "fieldHolder"(): $ManagedFieldHolder
get "frontFacing"(): $Direction
get "itemsRequiredToPaste"(): $List<$ItemStack>
get "level"(): $Level
get "machine"(): $MetaMachine
get "offsetTimer"(): long
get "pos"(): $BlockPos
get "inValid"(): boolean
get "remote"(): boolean
}
}

declare module "com.gregtechceu.gtceu.api.machine.feature.IRedstoneSignalMachine" {
import { $MetaMachine } from "com.gregtechceu.gtceu.api.machine.MetaMachine"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $IMachineFeature } from "com.gregtechceu.gtceu.api.machine.feature.IMachineFeature"

export interface $IRedstoneSignalMachine extends $IMachineFeature {
"canConnectRedstone"(direction0: $Direction$$Type): boolean
"getAnalogOutputSignal"(): integer
"getOutputDirectSignal"(direction0: $Direction$$Type): integer
"getOutputSignal"(direction0: $Direction$$Type): integer
"self"(): $MetaMachine
"updateSignal"(): void
get "analogOutputSignal"(): integer
}

export namespace $IRedstoneSignalMachine {
const probejs$$marker: never
}
export abstract class $IRedstoneSignalMachine$$Static implements $IRedstoneSignalMachine {
}
}

declare module "com.gregtechceu.gtceu.api.machine.multiblock.CleanroomType" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Set } from "java.util.Set"

export class $CleanroomType {
static readonly "CLEANROOM": $CleanroomType
static readonly "CODEC": $Codec<$CleanroomType>
static readonly "STERILE_CLEANROOM": $CleanroomType

constructor(string0: string, string1: string)

public static "getAllTypes"(): $Set<$CleanroomType>
public static "getByName"(string0: string): $CleanroomType
public static "getByNameOrDefault"(string0: string): $CleanroomType
public "getName"(): string
public "getTranslationKey"(): string
get "name"(): string
get "translationKey"(): string
}
}

declare module "com.gregtechceu.gtceu.api.machine.trait.RecipeHandlerList" {
import { $IRecipeHandler, $IRecipeHandler$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.IRecipeHandler"
import { $Set } from "java.util.Set"
import { $RecipeCapability, $RecipeCapability$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $IO, $IO$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.IO"
import { $GTRecipe$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipe"
import { $List, $List$$Type } from "java.util.List"
import { $RecipeHandlerGroup, $RecipeHandlerGroup$$Type } from "com.gregtechceu.gtceu.api.machine.trait.RecipeHandlerGroup"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Comparator } from "java.util.Comparator"
import { $ISubscription } from "com.lowdragmc.lowdraglib.syncdata.ISubscription"

export class $RecipeHandlerList {
static readonly "COMPARATOR": $Comparator<$RecipeHandlerList>
static readonly "NO_DATA": $RecipeHandlerList

public "addHandler"(iRecipeHandler0: $IRecipeHandler$$Type<any>): void
public "addHandlers"(...iRecipeHandler0s: $IRecipeHandler$$Type<any>[]): void
public "addHandlers"(iterable0: $Iterable$$Type<$IRecipeHandler$$Type<any>>): void
public "doesCapabilityBypassDistinct"(): boolean
public "getCapabilities"(): $Set<$RecipeCapability<any>>
public "getCapability"(recipeCapability0: $RecipeCapability$$Type<any>): $List<$IRecipeHandler<any>>
public "getColor"(): integer
public "getGroup"(): $RecipeHandlerGroup
public "getHandlerIO"(): $IO
public "getHandlerMap"(): $Map<$RecipeCapability<any>, $List<$IRecipeHandler<any>>>
public "getHandlersFlat"(): $List<$IRecipeHandler<any>>
public "getPriority"(): long
public "getTotalContentAmount"(): double
public "handleRecipe"(iO0: $IO$$Type, gTRecipe1: $GTRecipe$$Type, map2: $Map$$Type<$RecipeCapability$$Type<any>, $List$$Type<any>>, boolean3: boolean): $Map<$RecipeCapability<any>, $List<any>>
public "hasCapability"(recipeCapability0: $RecipeCapability$$Type<any>): boolean
public "isDistinct"(): boolean
public "isValid"(iO0: $IO$$Type): boolean
public static "of"(iO0: $IO$$Type, ...iRecipeHandler1s: $IRecipeHandler$$Type<any>[]): $RecipeHandlerList
public static "of"(iO0: $IO$$Type, iterable1: $Iterable$$Type<$IRecipeHandler$$Type<any>>): $RecipeHandlerList
public static "of"(iO0: $IO$$Type, int1: integer, ...iRecipeHandler2s: $IRecipeHandler$$Type<any>[]): $RecipeHandlerList
public static "of"(iO0: $IO$$Type, int1: integer, iterable2: $Iterable$$Type<$IRecipeHandler$$Type<any>>): $RecipeHandlerList
public "setColor"(int0: integer): void
public "setColor"(int0: integer, boolean1: boolean): void
public "setDistinct"(boolean0: boolean): void
public "setDistinctAndNotify"(boolean0: boolean): void
public "setGroup"(recipeHandlerGroup0: $RecipeHandlerGroup$$Type): void
public "subscribe"(runnable0: $Runnable$$Type, recipeCapability1: $RecipeCapability$$Type<any>): $ISubscription
public "subscribe"(runnable0: $Runnable$$Type): $ISubscription
get "capabilities"(): $Set<$RecipeCapability<any>>
get "color"(): integer
get "group"(): $RecipeHandlerGroup
get "handlerIO"(): $IO
get "handlerMap"(): $Map<$RecipeCapability<any>, $List<$IRecipeHandler<any>>>
get "handlersFlat"(): $List<$IRecipeHandler<any>>
get "priority"(): long
get "totalContentAmount"(): double
get "distinct"(): boolean
set "color"(value: integer)
set "distinct"(value: boolean)
set "distinctAndNotify"(value: boolean)
set "group"(value: $RecipeHandlerGroup$$Type)
}
}

declare module "com.gregtechceu.gtceu.api.machine.multiblock.PartAbility" {
import { $Collection } from "java.util.Collection"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"

export class $PartAbility {
static readonly "COMPUTATION_DATA_RECEPTION": $PartAbility
static readonly "COMPUTATION_DATA_TRANSMISSION": $PartAbility
static readonly "DATA_ACCESS": $PartAbility
static readonly "EXPORT_FLUIDS": $PartAbility
static readonly "EXPORT_FLUIDS_1X": $PartAbility
static readonly "EXPORT_FLUIDS_4X": $PartAbility
static readonly "EXPORT_FLUIDS_9X": $PartAbility
static readonly "EXPORT_ITEMS": $PartAbility
static readonly "HPCA_COMPONENT": $PartAbility
static readonly "IMPORT_FLUIDS": $PartAbility
static readonly "IMPORT_FLUIDS_1X": $PartAbility
static readonly "IMPORT_FLUIDS_4X": $PartAbility
static readonly "IMPORT_FLUIDS_9X": $PartAbility
static readonly "IMPORT_ITEMS": $PartAbility
static readonly "INPUT_ENERGY": $PartAbility
static readonly "INPUT_LASER": $PartAbility
static readonly "MAINTENANCE": $PartAbility
static readonly "MUFFLER": $PartAbility
static readonly "OBJECT_HOLDER": $PartAbility
static readonly "OPTICAL_DATA_RECEPTION": $PartAbility
static readonly "OPTICAL_DATA_TRANSMISSION": $PartAbility
static readonly "OUTPUT_ENERGY": $PartAbility
static readonly "OUTPUT_LASER": $PartAbility
static readonly "PARALLEL_HATCH": $PartAbility
static readonly "PASSTHROUGH_HATCH": $PartAbility
static readonly "PUMP_FLUID_HATCH": $PartAbility
static readonly "ROTOR_HOLDER": $PartAbility
static readonly "STEAM": $PartAbility
static readonly "STEAM_EXPORT_ITEMS": $PartAbility
static readonly "STEAM_IMPORT_ITEMS": $PartAbility
static readonly "SUBSTATION_INPUT_ENERGY": $PartAbility
static readonly "SUBSTATION_OUTPUT_ENERGY": $PartAbility
static readonly "TANK_VALVE": $PartAbility

constructor(string0: string)

public "getAllBlocks"(): $Collection<$Block>
public "getBlockRange"(int0: integer, int1: integer): $Collection<$Block>
public "getBlocks"(...int0s: integer[]): $Collection<$Block>
public "getName"(): string
public "isApplicable"(block0: $Block$$Type): boolean
public "register"(int0: integer, block1: $Block$$Type): void
get "allBlocks"(): $Collection<$Block>
get "name"(): string
}
}

declare module "com.gregtechceu.gtceu.api.machine.feature.IFancyUIMachine" {
import { $IFancyUIProvider } from "com.gregtechceu.gtceu.api.gui.fancy.IFancyUIProvider"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MetaMachine } from "com.gregtechceu.gtceu.api.machine.MetaMachine"
import { $IUIMachine } from "com.gregtechceu.gtceu.api.machine.feature.IUIMachine"
import { $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $FancyMachineUIWidget$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.FancyMachineUIWidget"
import { $IGuiTexture } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $TooltipsPanel$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.TooltipsPanel"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $ConfiguratorPanel$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.ConfiguratorPanel"
import { $IFancyUIProvider$PageGroupingData } from "com.gregtechceu.gtceu.api.gui.fancy.IFancyUIProvider$PageGroupingData"
import { $List } from "java.util.List"
import { $TabsWidget$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.TabsWidget"
import { $ModularUI } from "com.lowdragmc.lowdraglib.gui.modular.ModularUI"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $TooltipComponent } from "net.minecraft.world.inventory.tooltip.TooltipComponent"

export interface $IFancyUIMachine extends $IUIMachine, $IFancyUIProvider {
"attachConfigurators"(configuratorPanel0: $ConfiguratorPanel$$Type): void
"attachSideTabs"(tabsWidget0: $TabsWidget$$Type): void
"attachTooltips"(tooltipsPanel0: $TooltipsPanel$$Type): void
"createMainPage"(fancyMachineUIWidget0: $FancyMachineUIWidget$$Type): $Widget
"createUI"(player0: $Player$$Type): $ModularUI
"createUIWidget"(): $Widget
"getPageGroupingData"(): $IFancyUIProvider$PageGroupingData
"getSubTabs"(): $List<$IFancyUIProvider>
"getTabIcon"(): $IGuiTexture
"getTabTooltipComponent"(): $TooltipComponent
"getTabTooltips"(): $List<$Component>
"getTitle"(): $Component
"hasPlayerInventory"(): boolean
"isInvalid"(): boolean
"isRemote"(): boolean
"markAsDirty"(): void
"self"(): $MetaMachine
"shouldOpenUI"(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, blockHitResult2: $BlockHitResult$$Type): boolean
"tryToOpenUI"(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, blockHitResult2: $BlockHitResult$$Type): $InteractionResult
get "pageGroupingData"(): $IFancyUIProvider$PageGroupingData
get "subTabs"(): $List<$IFancyUIProvider>
get "tabIcon"(): $IGuiTexture
get "tabTooltipComponent"(): $TooltipComponent
get "tabTooltips"(): $List<$Component>
get "title"(): $Component
get "invalid"(): boolean
get "remote"(): boolean
}

export namespace $IFancyUIMachine {
const probejs$$marker: never
}
export abstract class $IFancyUIMachine$$Static implements $IFancyUIMachine {
}
}

declare module "com.gregtechceu.gtceu.api.machine.feature.IInteractedMachine" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $MetaMachine } from "com.gregtechceu.gtceu.api.machine.MetaMachine"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $IMachineFeature } from "com.gregtechceu.gtceu.api.machine.feature.IMachineFeature"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $IInteractedMachine extends $IMachineFeature {
"onLeftClick"(player0: $Player$$Type, level1: $Level$$Type, interactionHand2: $InteractionHand$$Type, blockPos3: $BlockPos$$Type, direction4: $Direction$$Type): boolean
"onUse"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, interactionHand4: $InteractionHand$$Type, blockHitResult5: $BlockHitResult$$Type): $InteractionResult
"self"(): $MetaMachine
}

export namespace $IInteractedMachine {
const probejs$$marker: never
}
export abstract class $IInteractedMachine$$Static implements $IInteractedMachine {
}
}

declare module "com.gregtechceu.gtceu.api.machine.MultiblockMachineDefinition" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $IMultiPart, $IMultiPart$$Type } from "com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiPart"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $TriFunction, $TriFunction$$Type } from "org.apache.commons.lang3.function.TriFunction"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $IMultiController, $IMultiController$$Type } from "com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiController"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $MultiblockShapeInfo } from "com.gregtechceu.gtceu.api.pattern.MultiblockShapeInfo"
import { $List, $List$$Type } from "java.util.List"
import { $MultiblockControllerMachine, $MultiblockControllerMachine$$Type } from "com.gregtechceu.gtceu.api.machine.multiblock.MultiblockControllerMachine"
import { $MachineDefinition } from "com.gregtechceu.gtceu.api.machine.MachineDefinition"
import { $BiConsumer, $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Comparator } from "java.util.Comparator"
import { $BlockPattern } from "com.gregtechceu.gtceu.api.pattern.BlockPattern"

export class $MultiblockMachineDefinition extends $MachineDefinition {
constructor(resourceLocation0: $ResourceLocation$$Type)

public "getAdditionalDisplay"(): $BiConsumer<$IMultiController, $List<$Component>>
public "getMatchingShapes"(): $List<$MultiblockShapeInfo>
public "getPartAppearance"(): $TriFunction<$IMultiController, $IMultiPart, $Direction, $BlockState>
public "getPartSorter"(): $Function<$MultiblockControllerMachine, $Comparator<$IMultiPart>>
public "getPatternFactory"(): $Supplier<$BlockPattern>
public "getRecoveryItems"(): $Supplier<$ItemStack[]>
public "getShapes"(): $Supplier<$List<$MultiblockShapeInfo>>
public "isAllowFlip"(): boolean
public "isGenerator"(): boolean
public "setAdditionalDisplay"(biConsumer0: $BiConsumer$$Type<$IMultiController$$Type, $List$$Type<$Component$$Type>>): void
public "setAllowFlip"(boolean0: boolean): void
public "setGenerator"(boolean0: boolean): void
public "setPartAppearance"(triFunction0: $TriFunction$$Type<$IMultiController$$Type, $IMultiPart$$Type, $Direction$$Type, $BlockState>): void
public "setPartSorter"(function0: $Function$$Type<$MultiblockControllerMachine$$Type, $Comparator<$IMultiPart>>): void
public "setPatternFactory"(supplier0: $Supplier$$Type<$BlockPattern>): void
public "setRecoveryItems"(supplier0: $Supplier$$Type<$ItemStack[]>): void
public "setShapes"(supplier0: $Supplier$$Type<$List<$MultiblockShapeInfo>>): void
get "additionalDisplay"(): $BiConsumer<$IMultiController, $List<$Component>>
get "matchingShapes"(): $List<$MultiblockShapeInfo>
get "partAppearance"(): $TriFunction<$IMultiController, $IMultiPart, $Direction, $BlockState>
get "partSorter"(): $Function<$MultiblockControllerMachine, $Comparator<$IMultiPart>>
get "patternFactory"(): $Supplier<$BlockPattern>
get "recoveryItems"(): $Supplier<$ItemStack[]>
get "shapes"(): $Supplier<$List<$MultiblockShapeInfo>>
get "allowFlip"(): boolean
get "generator"(): boolean
set "additionalDisplay"(value: $BiConsumer$$Type<$IMultiController$$Type, $List$$Type<$Component$$Type>>)
set "allowFlip"(value: boolean)
set "generator"(value: boolean)
set "partAppearance"(value: $TriFunction$$Type<$IMultiController$$Type, $IMultiPart$$Type, $Direction$$Type, $BlockState>)
set "partSorter"(value: $Function$$Type<$MultiblockControllerMachine$$Type, $Comparator<$IMultiPart>>)
set "patternFactory"(value: $Supplier$$Type<$BlockPattern>)
set "recoveryItems"(value: $Supplier$$Type<$ItemStack[]>)
set "shapes"(value: $Supplier$$Type<$List<$MultiblockShapeInfo>>)
}
}

declare module "com.gregtechceu.gtceu.api.machine.multiblock.IBatteryData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBatteryData {
"getBatteryName"(): string
"getCapacity"(): long
"getTier"(): integer
get "batteryName"(): string
get "capacity"(): long
get "tier"(): integer
}

export namespace $IBatteryData {
const probejs$$marker: never
}
export abstract class $IBatteryData$$Static implements $IBatteryData {
}
}

declare module "com.gregtechceu.gtceu.api.machine.MetaMachine" {
import { $IToolable } from "com.gregtechceu.gtceu.api.capability.IToolable"
import { $IFieldUpdateListener$$Type } from "com.lowdragmc.lowdraglib.syncdata.IFieldUpdateListener"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $IO$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.IO"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $MachineTrait, $MachineTrait$$Type } from "com.gregtechceu.gtceu.api.machine.trait.MachineTrait"
import { $IItemHandlerModifiable, $IItemHandlerModifiable$$Type } from "net.minecraftforge.items.IItemHandlerModifiable"
import { $TooltipComponent } from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import { $Predicate } from "java.util.function.Predicate"
import { $PlayerOwner } from "com.gregtechceu.gtceu.common.machine.owner.PlayerOwner"
import { $FieldManagedStorage } from "com.lowdragmc.lowdraglib.syncdata.field.FieldManagedStorage"
import { $Set$$Type } from "java.util.Set"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $ModelData$Builder$$Type } from "net.minecraftforge.client.model.data.ModelData$Builder"
import { $ITickSubscription } from "com.gregtechceu.gtceu.api.blockentity.ITickSubscription"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $GTToolType, $GTToolType$$Type } from "com.gregtechceu.gtceu.api.item.tool.GTToolType"
import { $List, $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ResourceTexture } from "com.lowdragmc.lowdraglib.gui.texture.ResourceTexture"
import { $IToolGridHighlight } from "com.gregtechceu.gtceu.api.item.tool.IToolGridHighlight"
import { $IMachineBlockEntity, $IMachineBlockEntity$$Type } from "com.gregtechceu.gtceu.api.machine.IMachineBlockEntity"
import { $MachineOwner } from "com.gregtechceu.gtceu.common.machine.owner.MachineOwner"
import { $FluidStack } from "net.minecraftforge.fluids.FluidStack"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level } from "net.minecraft.world.level.Level"
import { $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $IFancyTooltip } from "com.gregtechceu.gtceu.api.gui.fancy.IFancyTooltip"
import { $IPaintable } from "com.gregtechceu.gtceu.api.blockentity.IPaintable"
import { $IRef$$Type } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $IRedstoneSignalMachine } from "com.gregtechceu.gtceu.api.machine.feature.IRedstoneSignalMachine"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $RotationState } from "com.gregtechceu.gtceu.api.data.RotationState"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $MachineRenderState, $MachineRenderState$$Type } from "com.gregtechceu.gtceu.client.model.machine.MachineRenderState"
import { $IFluidHandlerModifiable } from "com.gregtechceu.gtceu.api.transfer.fluid.IFluidHandlerModifiable"
import { $IGuiTexture } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $Pair } from "com.mojang.datafixers.util.Pair"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $MachineCoverContainer } from "com.gregtechceu.gtceu.api.machine.MachineCoverContainer"
import { $TickableSubscription, $TickableSubscription$$Type } from "com.gregtechceu.gtceu.api.machine.TickableSubscription"
import { $IEnhancedManaged } from "com.lowdragmc.lowdraglib.syncdata.IEnhancedManaged"
import { $MachineDefinition } from "com.gregtechceu.gtceu.api.machine.MachineDefinition"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ManagedFieldHolder } from "com.lowdragmc.lowdraglib.syncdata.field.ManagedFieldHolder"
import { $ISubscription } from "com.lowdragmc.lowdraglib.syncdata.ISubscription"
import { $ICopyable } from "com.gregtechceu.gtceu.api.blockentity.ICopyable"

export class $MetaMachine implements $IEnhancedManaged, $IToolable, $ITickSubscription, $IToolGridHighlight, $IFancyTooltip, $IPaintable, $IRedstoneSignalMachine, $ICopyable {
readonly "holder": $IMachineBlockEntity

constructor(iMachineBlockEntity0: $IMachineBlockEntity$$Type)

public "addCollisionBoundingBox"(list0: $List$$Type<$VoxelShape$$Type>): void
public "addDebugOverlayText"(consumer0: $Consumer$$Type<string>): void
public "addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$$Type<T>): $ISubscription
public "allowExtendedFacing"(): boolean
public "animateTick"(randomSource0: $RandomSource$$Type): void
public "attachTraits"(machineTrait0: $MachineTrait$$Type): void
public "canConnectRedstone"(direction0: $Direction$$Type): boolean
public "canSetIoOnSide"(direction0: $Direction$$Type): boolean
public "clearInventory"(iItemHandlerModifiable0: $IItemHandlerModifiable$$Type): void
/** Client only, do not use in server scripts */
public "clientTick"(): void
public "copyConfig"(compoundTag0: $CompoundTag$$Type): $CompoundTag
public "getAnalogOutputSignal"(): integer
public "getBlockAppearance"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, blockState4: $BlockState$$Type, blockPos5: $BlockPos$$Type): $BlockState
public "getBlockState"(): $BlockState
public "getCoverContainer"(): $MachineCoverContainer
public "getDefaultPaintingColor"(): integer
public "getDefinition"(): $MachineDefinition
public "getFancyComponent"(): $TooltipComponent
public "getFancyTooltip"(): $List<$Component>
public "getFancyTooltipIcon"(): $IGuiTexture
public "getFieldHolder"(): $ManagedFieldHolder
public "getFluidCapFilter"(direction0: $Direction$$Type, iO1: $IO$$Type): $Predicate<$FluidStack>
public "getFluidHandlerCap"(direction0: $Direction$$Type, boolean1: boolean): $IFluidHandlerModifiable
public static "getFrontFacing"(metaMachine0: $MetaMachine$$Type): $Direction
public "getFrontFacing"(): $Direction
public "getHolder"(): $IMachineBlockEntity
public "getItemCapFilter"(direction0: $Direction$$Type, iO1: $IO$$Type): $Predicate<$ItemStack>
public "getItemHandlerCap"(direction0: $Direction$$Type, boolean1: boolean): $IItemHandlerModifiable
public "getItemsRequiredToPaste"(): $List<$ItemStack>
public "getLevel"(): $Level
public static "getMachine"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $MetaMachine
public "getOffsetTimer"(): long
public "getOutputDirectSignal"(direction0: $Direction$$Type): integer
public "getOutputSignal"(direction0: $Direction$$Type): integer
public "getOwner"(): $MachineOwner
public "getOwnerUUID"(): $UUID
public "getPaintingColor"(): integer
public "getPlayerOwner"(): $PlayerOwner
public "getPos"(): $BlockPos
public "getRealColor"(): integer
public "getRenderState"(): $MachineRenderState
public "getRotationState"(): $RotationState
public "getSyncStorage"(): $FieldManagedStorage
public "getTraits"(): $List<$MachineTrait>
public static "getUpwardFacing"(metaMachine0: $MetaMachine$$Type): $Direction
public "getUpwardsFacing"(): $Direction
public "hasFrontFacing"(): boolean
public "isFacingValid"(direction0: $Direction$$Type): boolean
public "isInValid"(): boolean
public "isPainted"(): boolean
public "isRemote"(): boolean
public "loadCustomPersistedData"(compoundTag0: $CompoundTag$$Type): void
public "markDirty"(): void
public "markDirty"(name: string): void
public "notifyBlockUpdate"(): void
public "onAddFancyInformationTooltip"(list0: $List$$Type<$Component$$Type>): void
public "onChanged"(): void
public "onLoad"(): void
public "onNeighborChanged"(block0: $Block$$Type, blockPos1: $BlockPos$$Type, boolean2: boolean): void
public "onPaintingColorChanged"(int0: integer): void
public "onPersistedChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "onRotated"(direction0: $Direction$$Type, direction1: $Direction$$Type): void
public "onSyncChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "onToolClick"(set0: $Set$$Type<$GTToolType$$Type>, itemStack1: $ItemStack$$Type, useOnContext2: $UseOnContext$$Type): $Pair<$GTToolType, $InteractionResult>
public "onUnload"(): void
public "pasteConfig"(serverPlayer0: $ServerPlayer$$Type, compoundTag1: $CompoundTag$$Type): void
public "saveCustomPersistedData"(compoundTag0: $CompoundTag$$Type, boolean1: boolean): void
public "scheduleNeighborShapeUpdate"(): void
public "scheduleRender"(fieldName: string, newValue: any, oldValue: any): void
public "scheduleRenderUpdate"(): void
public "self"(): $MetaMachine
public "serverTick"(): void
public "setFrontFacing"(direction0: $Direction$$Type): void
public "setOwnerUUID"(uUID0: $UUID$$Type): void
public "setPaintingColor"(int0: integer): void
public "setRenderState"(machineRenderState0: $MachineRenderState$$Type): void
public "setUpwardsFacing"(direction0: $Direction$$Type): void
public "shouldRenderGrid"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, itemStack3: $ItemStack$$Type, set4: $Set$$Type<$GTToolType$$Type>): boolean
public "showFancyTooltip"(): boolean
public "sideTips"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, set3: $Set$$Type<$GTToolType$$Type>, direction4: $Direction$$Type): $ResourceTexture
public "subscribeServerTick"(runnable0: $Runnable$$Type): $TickableSubscription
public "subscribeServerTick"(tickableSubscription0: $TickableSubscription$$Type, runnable1: $Runnable$$Type): $TickableSubscription
public "tintColor"(int0: integer): integer
public "unsubscribe"(tickableSubscription0: $TickableSubscription$$Type): void
public "updateModelData"(builder0: $ModelData$Builder$$Type): void
public "updateSignal"(): void
get "isFirstDummyWorldTick"(): boolean
set "isFirstDummyWorldTick"(value: boolean)
get "analogOutputSignal"(): integer
get "blockState"(): $BlockState
get "coverContainer"(): $MachineCoverContainer
get "defaultPaintingColor"(): integer
get "definition"(): $MachineDefinition
get "fancyComponent"(): $TooltipComponent
get "fancyTooltip"(): $List<$Component>
get "fancyTooltipIcon"(): $IGuiTexture
get "fieldHolder"(): $ManagedFieldHolder
get "frontFacing"(): $Direction
get "itemsRequiredToPaste"(): $List<$ItemStack>
get "level"(): $Level
get "offsetTimer"(): long
get "owner"(): $MachineOwner
get "ownerUUID"(): $UUID
get "paintingColor"(): integer
get "playerOwner"(): $PlayerOwner
get "pos"(): $BlockPos
get "realColor"(): integer
get "renderState"(): $MachineRenderState
get "rotationState"(): $RotationState
get "syncStorage"(): $FieldManagedStorage
get "traits"(): $List<$MachineTrait>
get "upwardsFacing"(): $Direction
get "inValid"(): boolean
get "painted"(): boolean
get "remote"(): boolean
set "frontFacing"(value: $Direction$$Type)
set "ownerUUID"(value: $UUID$$Type)
set "paintingColor"(value: integer)
set "renderState"(value: $MachineRenderState$$Type)
set "upwardsFacing"(value: $Direction$$Type)
}
}

declare module "com.gregtechceu.gtceu.api.machine.MachineDefinition" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $GTRecipeType, $GTRecipeType$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipeType"
import { $MetaMachineItem } from "com.gregtechceu.gtceu.api.item.MetaMachineItem"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $GTRecipe, $GTRecipe$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipe"
import { $BiPredicate, $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $BiConsumer, $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $EditableMachineUI, $EditableMachineUI$$Type } from "com.gregtechceu.gtceu.api.gui.editor.EditableMachineUI"
import { $RotationState, $RotationState$$Type } from "com.gregtechceu.gtceu.api.data.RotationState"
import { $StateDefinition, $StateDefinition$$Type } from "net.minecraft.world.level.block.state.StateDefinition"
import { $IMachineBlock } from "com.gregtechceu.gtceu.api.block.IMachineBlock"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $MetaMachine } from "com.gregtechceu.gtceu.api.machine.MetaMachine"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $MachineRenderState, $MachineRenderState$$Type } from "com.gregtechceu.gtceu.client.model.machine.MachineRenderState"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $RecipeCapability, $RecipeCapability$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability"
import { $IdMapper } from "net.minecraft.core.IdMapper"
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $List, $List$$Type } from "java.util.List"
import { $IRecipeLogicMachine, $IRecipeLogicMachine$$Type } from "com.gregtechceu.gtceu.api.machine.feature.IRecipeLogicMachine"
import { $BlockEntityType } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $IMachineBlockEntity$$Type } from "com.gregtechceu.gtceu.api.machine.IMachineBlockEntity"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $RecipeModifier, $RecipeModifier$$Type } from "com.gregtechceu.gtceu.api.recipe.modifier.RecipeModifier"
import { $Reference2IntMap, $Reference2IntMap$$Type } from "it.unimi.dsi.fastutil.objects.Reference2IntMap"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"

export class $MachineDefinition implements $Supplier<$IMachineBlock> {
static readonly "RENDER_STATE_REGISTRY": $IdMapper<$MachineRenderState>

constructor(resourceLocation0: $ResourceLocation$$Type)

public "asStack"(int0: integer): $ItemStack
public "asStack"(): $ItemStack
public static "clearBuilt"(): void
public "createMetaMachine"(iMachineBlockEntity0: $IMachineBlockEntity$$Type): $MetaMachine
public "defaultBlockState"(): $BlockState
public "defaultRenderState"(): $MachineRenderState
public "getAfterWorking"(): $Consumer<$IRecipeLogicMachine>
public "getAppearance"(): $Supplier<$BlockState>
public "getBeforeWorking"(): $BiPredicate<$IRecipeLogicMachine, $GTRecipe>
public "getBlock"(): $Block
public "getBlockEntityType"(): $BlockEntityType<$BlockEntity>
public static "getBuilt"(): $MachineDefinition
public "getDefaultPaintingColor"(): integer
public "getDescriptionId"(): string
public "getEditableUI"(): $EditableMachineUI
public "getId"(): $ResourceLocation
public "getItem"(): $MetaMachineItem
public "getLangValue"(): string
public "getName"(): string
public "getOnWaiting"(): $Consumer<$IRecipeLogicMachine>
public "getOnWorking"(): $Predicate<$IRecipeLogicMachine>
public "getRecipeModifier"(): $RecipeModifier
public "getRecipeOutputLimits"(): $Reference2IntMap<$RecipeCapability<any>>
public "getRecipeTypes"(): $GTRecipeType[]
public "getRotationState"(): $RotationState
public "getShape"(direction0: $Direction$$Type): $VoxelShape
public "getStateDefinition"(): $StateDefinition<$MachineDefinition, $MachineRenderState>
public "getTier"(): integer
public "getTooltipBuilder"(): $BiConsumer<$ItemStack, $List<$Component>>
public "isAllowCoverOnFront"(): boolean
public "isAllowExtendedFacing"(): boolean
public "isAlwaysTryModifyRecipe"(): boolean
public "isRegressWhenWaiting"(): boolean
public "isRenderWorldPreview"(): boolean
public "isRenderXEIPreview"(): boolean
public "registerDefaultState"(machineRenderState0: $MachineRenderState$$Type): void
public "setAfterWorking"(consumer0: $Consumer$$Type<$IRecipeLogicMachine$$Type>): void
public "setAllowCoverOnFront"(boolean0: boolean): void
public "setAllowExtendedFacing"(boolean0: boolean): void
public "setAlwaysTryModifyRecipe"(boolean0: boolean): void
public "setAppearance"(supplier0: $Supplier$$Type<$BlockState>): void
public "setBeforeWorking"(biPredicate0: $BiPredicate$$Type<$IRecipeLogicMachine$$Type, $GTRecipe$$Type>): void
public "setBlockEntityTypeSupplier"(supplier0: $Supplier$$Type<$BlockEntityType<$BlockEntity>>): void
public "setBlockSupplier"(supplier0: $Supplier$$Type<$Block>): void
public static "setBuilt"(machineDefinition0: $MachineDefinition$$Type): void
public "setDefaultPaintingColor"(int0: integer): void
public "setEditableUI"(editableMachineUI0: $EditableMachineUI$$Type): void
public "setItemSupplier"(supplier0: $Supplier$$Type<$MetaMachineItem>): void
public "setLangValue"(string0: string): void
public "setMachineSupplier"(function0: $Function$$Type<$IMachineBlockEntity$$Type, $MetaMachine>): void
public "setOnWaiting"(consumer0: $Consumer$$Type<$IRecipeLogicMachine$$Type>): void
public "setOnWorking"(predicate0: $Predicate$$Type<$IRecipeLogicMachine$$Type>): void
public "setRecipeModifier"(recipeModifier0: $RecipeModifier$$Type): void
public "setRecipeOutputLimits"(reference2IntMap0: $Reference2IntMap$$Type<$RecipeCapability$$Type<any>>): void
public "setRecipeTypes"(gTRecipeType0s: $GTRecipeType$$Type[]): void
public "setRegressWhenWaiting"(boolean0: boolean): void
public "setRenderWorldPreview"(boolean0: boolean): void
public "setRenderXEIPreview"(boolean0: boolean): void
public "setRotationState"(rotationState0: $RotationState$$Type): void
public "setShape"(voxelShape0: $VoxelShape$$Type): void
public "setStateDefinition"(stateDefinition0: $StateDefinition$$Type<$MachineDefinition$$Type, $MachineRenderState$$Type>): void
public "setTier"(int0: integer): void
public "setTooltipBuilder"(biConsumer0: $BiConsumer$$Type<$ItemStack$$Type, $List$$Type<$Component$$Type>>): void
get "afterWorking"(): $Consumer<$IRecipeLogicMachine>
get "appearance"(): $Supplier<$BlockState>
get "beforeWorking"(): $BiPredicate<$IRecipeLogicMachine, $GTRecipe>
get "block"(): $Block
get "blockEntityType"(): $BlockEntityType<$BlockEntity>
get "defaultPaintingColor"(): integer
get "descriptionId"(): string
get "editableUI"(): $EditableMachineUI
get "id"(): $ResourceLocation
get "item"(): $MetaMachineItem
get "langValue"(): string
get "name"(): string
get "onWaiting"(): $Consumer<$IRecipeLogicMachine>
get "onWorking"(): $Predicate<$IRecipeLogicMachine>
get "recipeModifier"(): $RecipeModifier
get "recipeOutputLimits"(): $Reference2IntMap<$RecipeCapability<any>>
get "recipeTypes"(): $GTRecipeType[]
get "rotationState"(): $RotationState
get "stateDefinition"(): $StateDefinition<$MachineDefinition, $MachineRenderState>
get "tier"(): integer
get "tooltipBuilder"(): $BiConsumer<$ItemStack, $List<$Component>>
get "allowCoverOnFront"(): boolean
get "allowExtendedFacing"(): boolean
get "alwaysTryModifyRecipe"(): boolean
get "regressWhenWaiting"(): boolean
get "renderWorldPreview"(): boolean
get "renderXEIPreview"(): boolean
set "afterWorking"(value: $Consumer$$Type<$IRecipeLogicMachine$$Type>)
set "allowCoverOnFront"(value: boolean)
set "allowExtendedFacing"(value: boolean)
set "alwaysTryModifyRecipe"(value: boolean)
set "appearance"(value: $Supplier$$Type<$BlockState>)
set "beforeWorking"(value: $BiPredicate$$Type<$IRecipeLogicMachine$$Type, $GTRecipe$$Type>)
set "blockEntityTypeSupplier"(value: $Supplier$$Type<$BlockEntityType<$BlockEntity>>)
set "blockSupplier"(value: $Supplier$$Type<$Block>)
set "defaultPaintingColor"(value: integer)
set "editableUI"(value: $EditableMachineUI$$Type)
set "itemSupplier"(value: $Supplier$$Type<$MetaMachineItem>)
set "langValue"(value: string)
set "machineSupplier"(value: $Function$$Type<$IMachineBlockEntity$$Type, $MetaMachine>)
set "onWaiting"(value: $Consumer$$Type<$IRecipeLogicMachine$$Type>)
set "onWorking"(value: $Predicate$$Type<$IRecipeLogicMachine$$Type>)
set "recipeModifier"(value: $RecipeModifier$$Type)
set "recipeOutputLimits"(value: $Reference2IntMap$$Type<$RecipeCapability$$Type<any>>)
set "recipeTypes"(value: $GTRecipeType$$Type[])
set "regressWhenWaiting"(value: boolean)
set "renderWorldPreview"(value: boolean)
set "renderXEIPreview"(value: boolean)
set "rotationState"(value: $RotationState$$Type)
set "shape"(value: $VoxelShape$$Type)
set "stateDefinition"(value: $StateDefinition$$Type<$MachineDefinition$$Type, $MachineRenderState$$Type>)
set "tier"(value: integer)
set "tooltipBuilder"(value: $BiConsumer$$Type<$ItemStack$$Type, $List$$Type<$Component$$Type>>)
}
}

declare module "com.gregtechceu.gtceu.api.machine.multiblock.MultiblockControllerMachine" {
import { $IMultiPart, $IMultiPart$$Type } from "com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiPart"
import { $IFieldUpdateListener$$Type } from "com.lowdragmc.lowdraglib.syncdata.IFieldUpdateListener"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $IMultiController } from "com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiController"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $IParallelHatch } from "com.gregtechceu.gtceu.api.capability.IParallelHatch"
import { $IRef$$Type } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"
import { $TooltipComponent } from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import { $BlockPattern } from "com.gregtechceu.gtceu.api.pattern.BlockPattern"
import { $MultiblockState } from "com.gregtechceu.gtceu.api.pattern.MultiblockState"
import { $MetaMachine } from "com.gregtechceu.gtceu.api.machine.MetaMachine"
import { $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List } from "java.util.List"
import { $Lock } from "java.util.concurrent.locks.Lock"
import { $TickableSubscription, $TickableSubscription$$Type } from "com.gregtechceu.gtceu.api.machine.TickableSubscription"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $IMachineBlockEntity$$Type } from "com.gregtechceu.gtceu.api.machine.IMachineBlockEntity"
import { $Optional } from "java.util.Optional"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Comparator } from "java.util.Comparator"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $ISubscription } from "com.lowdragmc.lowdraglib.syncdata.ISubscription"

export class $MultiblockControllerMachine extends $MetaMachine implements $IMultiController {
constructor(iMachineBlockEntity0: $IMachineBlockEntity$$Type)

public "addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$$Type<T>): $ISubscription
public "allowCircuitSlots"(): boolean
public "allowFlip"(): boolean
public "asyncCheckPattern"(long0: long): void
public "checkPattern"(): boolean
public "checkPatternWithLock"(): boolean
public "checkPatternWithTryLock"(): boolean
public "getAnalogOutputSignal"(): integer
public "getFancyComponent"(): $TooltipComponent
public "getMultiblockState"(): $MultiblockState
public "getOutputDirectSignal"(direction0: $Direction$$Type): integer
public "getParallelHatch"(): $Optional<$IParallelHatch>
public "getPartAppearance"(iMultiPart0: $IMultiPart$$Type, direction1: $Direction$$Type, blockState2: $BlockState$$Type, blockPos3: $BlockPos$$Type): $BlockState
public "getPartPositions"(): $BlockPos[]
public "getPartSorter"(): $Comparator<$IMultiPart>
public "getParts"(): $List<$IMultiPart>
public "getPattern"(): $BlockPattern
public "getPatternLock"(): $Lock
public "getRealColor"(): integer
public "hasFrontFacing"(): boolean
public "isBatchEnabled"(): boolean
public "isFlipped"(): boolean
public "isFormed"(): boolean
public "isPainted"(): boolean
public "markDirty"(name: string): void
public "onLeftClick"(player0: $Player$$Type, level1: $Level$$Type, interactionHand2: $InteractionHand$$Type, blockPos3: $BlockPos$$Type, direction4: $Direction$$Type): boolean
public "onPartUnload"(): void
public "onPersistedChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "onStructureFormed"(): void
public "onStructureInvalid"(): void
public "onSyncChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "onUse"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, interactionHand4: $InteractionHand$$Type, blockHitResult5: $BlockHitResult$$Type): $InteractionResult
public "scheduleRender"(fieldName: string, newValue: any, oldValue: any): void
public "setBatchEnabled"(boolean0: boolean): void
public "setFlipped"(boolean0: boolean): void
public "shouldAddPartToController"(iMultiPart0: $IMultiPart$$Type): boolean
public "subscribeServerTick"(tickableSubscription0: $TickableSubscription$$Type, runnable1: $Runnable$$Type): $TickableSubscription
public "updateSignal"(): void
get "analogOutputSignal"(): integer
get "fancyComponent"(): $TooltipComponent
get "multiblockState"(): $MultiblockState
get "parallelHatch"(): $Optional<$IParallelHatch>
get "partPositions"(): $BlockPos[]
get "partSorter"(): $Comparator<$IMultiPart>
get "parts"(): $List<$IMultiPart>
get "pattern"(): $BlockPattern
get "patternLock"(): $Lock
get "realColor"(): integer
get "batchEnabled"(): boolean
get "flipped"(): boolean
get "formed"(): boolean
get "painted"(): boolean
set "batchEnabled"(value: boolean)
set "flipped"(value: boolean)
}
}

