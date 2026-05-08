declare module "com.gregtechceu.gtceu.api.capability.IEnergyInfoProvider$EnergyInfo" {
import { $BigInteger, $BigInteger$$Type } from "java.math.BigInteger"
import { $Record } from "java.lang.Record"

export class $IEnergyInfoProvider$EnergyInfo extends $Record {
constructor(capacity: $BigInteger$$Type, stored: $BigInteger$$Type)

public "capacity"(): $BigInteger
public "stored"(): $BigInteger
}
}

declare module "com.gregtechceu.gtceu.api.capability.ICoverable" {
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $CoverBehavior, $CoverBehavior$$Type } from "com.gregtechceu.gtceu.api.cover.CoverBehavior"
import { $CoverDefinition$$Type } from "com.gregtechceu.gtceu.api.cover.CoverDefinition"
import { $IFluidHandlerModifiable } from "com.gregtechceu.gtceu.api.transfer.fluid.IFluidHandlerModifiable"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $ITickSubscription } from "com.gregtechceu.gtceu.api.blockentity.ITickSubscription"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $List, $List$$Type } from "java.util.List"
import { $TickableSubscription, $TickableSubscription$$Type } from "com.gregtechceu.gtceu.api.machine.TickableSubscription"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $IItemHandlerModifiable } from "net.minecraftforge.items.IItemHandlerModifiable"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level } from "net.minecraft.world.level.Level"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $ICopyable } from "com.gregtechceu.gtceu.api.blockentity.ICopyable"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export interface $ICoverable extends $ITickSubscription, $ICopyable {
"addCoverCollisionBoundingBox"(): $VoxelShape[]
"canPlaceCoverOnSide"(coverDefinition0: $CoverDefinition$$Type, direction1: $Direction$$Type): boolean
"copyConfig"(compoundTag0: $CompoundTag$$Type): $CompoundTag
"dropAllCovers"(): void
"getBlockAppearance"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, blockState4: $BlockState$$Type, blockPos5: $BlockPos$$Type): $BlockState
"getCoverAtSide"(direction0: $Direction$$Type): $CoverBehavior
"getCoverPlateThickness"(): double
"getCovers"(): $List<$CoverBehavior>
"getFluidHandlerCap"(direction0: $Direction$$Type, boolean1: boolean): $IFluidHandlerModifiable
"getFrontFacing"(): $Direction
"getItemHandlerCap"(direction0: $Direction$$Type, boolean1: boolean): $IItemHandlerModifiable
"getItemsRequiredToPaste"(): $List<$ItemStack>
"getLevel"(): $Level
"getOffsetTimer"(): long
"getPos"(): $BlockPos
"hasAnyCover"(): boolean
"hasCover"(direction0: $Direction$$Type): boolean
"hasDynamicCovers"(): boolean
"isInValid"(): boolean
"isRemote"(): boolean
"markDirty"(): void
"notifyBlockUpdate"(): void
"onLoad"(): void
"onNeighborChanged"(block0: $Block$$Type, blockPos1: $BlockPos$$Type, boolean2: boolean): void
"onUnload"(): void
"pasteConfig"(serverPlayer0: $ServerPlayer$$Type, compoundTag1: $CompoundTag$$Type): void
"placeCoverOnSide"(direction0: $Direction$$Type, itemStack1: $ItemStack$$Type, coverDefinition2: $CoverDefinition$$Type, serverPlayer3: $ServerPlayer$$Type): boolean
"removeCover"(boolean0: boolean, direction1: $Direction$$Type, player2: $Player$$Type): boolean
"removeCover"(direction0: $Direction$$Type, player1: $Player$$Type): boolean
"scheduleNeighborShapeUpdate"(): void
"scheduleRenderUpdate"(): void
"setCoverAtSide"(coverBehavior0: $CoverBehavior$$Type, direction1: $Direction$$Type): void
"shouldRenderBackSide"(): boolean
"subscribeServerTick"(runnable0: $Runnable$$Type): $TickableSubscription
"subscribeServerTick"(tickableSubscription0: $TickableSubscription$$Type, runnable1: $Runnable$$Type): $TickableSubscription
"unsubscribe"(tickableSubscription0: $TickableSubscription$$Type): void
get "coverPlateThickness"(): double
get "covers"(): $List<$CoverBehavior>
get "frontFacing"(): $Direction
get "itemsRequiredToPaste"(): $List<$ItemStack>
get "level"(): $Level
get "offsetTimer"(): long
get "pos"(): $BlockPos
get "inValid"(): boolean
get "remote"(): boolean
}

export namespace $ICoverable {
function canPlaceCover(coverDefinition0: $CoverDefinition$$Type, iCoverable1: $ICoverable$$Type): boolean
function determineGridSideHit(blockHitResult0: $BlockHitResult$$Type): $Direction
function doesCoverCollide(direction0: $Direction$$Type, list1: $List$$Type<$VoxelShape$$Type>, double2: double): boolean
function getCoverPlateBox(direction0: $Direction$$Type, double1: double): $VoxelShape
function rayTraceCoverableSide(iCoverable0: $ICoverable$$Type, player1: $Player$$Type): $Direction
function traceCoverSide(blockHitResult0: $BlockHitResult$$Type): $Direction
}
export abstract class $ICoverable$$Static implements $ICoverable {
static "canPlaceCover"(coverDefinition0: $CoverDefinition$$Type, iCoverable1: $ICoverable$$Type): boolean
static "determineGridSideHit"(blockHitResult0: $BlockHitResult$$Type): $Direction
static "doesCoverCollide"(direction0: $Direction$$Type, list1: $List$$Type<$VoxelShape$$Type>, double2: double): boolean
static "getCoverPlateBox"(direction0: $Direction$$Type, double1: double): $VoxelShape
static "rayTraceCoverableSide"(iCoverable0: $ICoverable$$Type, player1: $Player$$Type): $Direction
static "traceCoverSide"(blockHitResult0: $BlockHitResult$$Type): $Direction
}
}

declare module "com.gregtechceu.gtceu.api.capability.IOpticalComputationProvider" {
import { $Collection$$Type } from "java.util.Collection"

export interface $IOpticalComputationProvider {
"canBridge"(): boolean
"canBridge"(collection0: $Collection$$Type<$IOpticalComputationProvider$$Type>): boolean
"getMaxCWUt"(collection0: $Collection$$Type<$IOpticalComputationProvider$$Type>): integer
"getMaxCWUt"(): integer
"requestCWUt"(int0: integer, boolean1: boolean): integer
"requestCWUt"(int0: integer, boolean1: boolean, collection2: $Collection$$Type<$IOpticalComputationProvider$$Type>): integer
get "maxCWUt"(): integer
}

export namespace $IOpticalComputationProvider {
const probejs$$marker: never
}
export abstract class $IOpticalComputationProvider$$Static implements $IOpticalComputationProvider {
}
}

declare module "com.gregtechceu.gtceu.api.capability.IEnergyContainer" {
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $IEnergyInfoProvider$EnergyInfo } from "com.gregtechceu.gtceu.api.capability.IEnergyInfoProvider$EnergyInfo"
import { $IEnergyInfoProvider } from "com.gregtechceu.gtceu.api.capability.IEnergyInfoProvider"

export interface $IEnergyContainer extends $IEnergyInfoProvider {
"acceptEnergyFromNetwork"(direction0: $Direction$$Type, long1: long, long2: long): long
"addEnergy"(long0: long): long
"changeEnergy"(long0: long): long
"getEnergyCanBeInserted"(): long
"getEnergyCapacity"(): long
"getEnergyInfo"(): $IEnergyInfoProvider$EnergyInfo
"getEnergyStored"(): long
"getInputAmperage"(): long
"getInputPerSec"(): long
"getInputVoltage"(): long
"getOutputAmperage"(): long
"getOutputPerSec"(): long
"getOutputVoltage"(): long
"inputsEnergy"(direction0: $Direction$$Type): boolean
"isOneProbeHidden"(): boolean
"outputsEnergy"(direction0: $Direction$$Type): boolean
"removeEnergy"(long0: long): long
"supportsBigIntEnergyValues"(): boolean
get "energyCanBeInserted"(): long
get "energyCapacity"(): long
get "energyInfo"(): $IEnergyInfoProvider$EnergyInfo
get "energyStored"(): long
get "inputAmperage"(): long
get "inputPerSec"(): long
get "inputVoltage"(): long
get "outputAmperage"(): long
get "outputPerSec"(): long
get "outputVoltage"(): long
get "oneProbeHidden"(): boolean
}

export namespace $IEnergyContainer {
const DEFAULT: $IEnergyContainer
}
export abstract class $IEnergyContainer$$Static implements $IEnergyContainer {
static readonly "DEFAULT": $IEnergyContainer

}
}

declare module "com.gregtechceu.gtceu.api.capability.IDataAccessHatch" {
import { $GTRecipe, $GTRecipe$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipe"
import { $Collection$$Type } from "java.util.Collection"

export interface $IDataAccessHatch {
"isCreative"(): boolean
"isRecipeAvailable"(gTRecipe0: $GTRecipe$$Type, collection1: $Collection$$Type<$IDataAccessHatch$$Type>): boolean
"isRecipeAvailable"(gTRecipe0: $GTRecipe$$Type): boolean
"modifyRecipe"(gTRecipe0: $GTRecipe$$Type): $GTRecipe
get "creative"(): boolean
}

export namespace $IDataAccessHatch {
const probejs$$marker: never
}
export abstract class $IDataAccessHatch$$Static implements $IDataAccessHatch {
}
}

declare module "com.gregtechceu.gtceu.api.capability.IMedicalConditionTracker" {
import { $Object2FloatMap } from "it.unimi.dsi.fastutil.objects.Object2FloatMap"
import { $MedicalCondition, $MedicalCondition$$Type } from "com.gregtechceu.gtceu.api.data.medicalcondition.MedicalCondition"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $MobEffect$$Type } from "net.minecraft.world.effect.MobEffect"

export interface $IMedicalConditionTracker {
"getMaxAirSupply"(): integer
"getMedicalConditions"(): $Object2FloatMap<$MedicalCondition>
"heal"(medicalCondition0: $MedicalCondition$$Type, int1: integer): void
"progressCondition"(medicalCondition0: $MedicalCondition$$Type, float1: float): void
"progressRelatedCondition"(material0: $Material$$Type): void
"removeMedicalCondition"(medicalCondition0: $MedicalCondition$$Type): void
"setMobEffect"(mobEffect0: $MobEffect$$Type, int1: integer): void
"tick"(): void
get "maxAirSupply"(): integer
get "medicalConditions"(): $Object2FloatMap<$MedicalCondition>
}

export namespace $IMedicalConditionTracker {
const probejs$$marker: never
}
export abstract class $IMedicalConditionTracker$$Static implements $IMedicalConditionTracker {
}
}

declare module "com.gregtechceu.gtceu.api.capability.ILaserContainer" {
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $IEnergyContainer } from "com.gregtechceu.gtceu.api.capability.IEnergyContainer"
import { $IEnergyInfoProvider$EnergyInfo } from "com.gregtechceu.gtceu.api.capability.IEnergyInfoProvider$EnergyInfo"

export interface $ILaserContainer extends $IEnergyContainer {
"acceptEnergyFromNetwork"(direction0: $Direction$$Type, long1: long, long2: long): long
"addEnergy"(long0: long): long
"changeEnergy"(long0: long): long
"getEnergyCanBeInserted"(): long
"getEnergyCapacity"(): long
"getEnergyInfo"(): $IEnergyInfoProvider$EnergyInfo
"getEnergyStored"(): long
"getInputAmperage"(): long
"getInputPerSec"(): long
"getInputVoltage"(): long
"getOutputAmperage"(): long
"getOutputPerSec"(): long
"getOutputVoltage"(): long
"inputsEnergy"(direction0: $Direction$$Type): boolean
"isOneProbeHidden"(): boolean
"outputsEnergy"(direction0: $Direction$$Type): boolean
"removeEnergy"(long0: long): long
"supportsBigIntEnergyValues"(): boolean
get "energyCanBeInserted"(): long
get "energyCapacity"(): long
get "energyInfo"(): $IEnergyInfoProvider$EnergyInfo
get "energyStored"(): long
get "inputAmperage"(): long
get "inputPerSec"(): long
get "inputVoltage"(): long
get "outputAmperage"(): long
get "outputPerSec"(): long
get "outputVoltage"(): long
get "oneProbeHidden"(): boolean
}

export namespace $ILaserContainer {
const probejs$$marker: never
}
export abstract class $ILaserContainer$$Static implements $ILaserContainer {
}
}

declare module "com.gregtechceu.gtceu.api.capability.IWorkable" {
import { $BooleanProperty } from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import { $IControllable } from "com.gregtechceu.gtceu.api.capability.IControllable"

export interface $IWorkable extends $IControllable {
"getMaxProgress"(): integer
"getProgress"(): integer
"isActive"(): boolean
"isSuspendAfterFinish"(): boolean
"isWorkingEnabled"(): boolean
"setSuspendAfterFinish"(boolean0: boolean): void
"setWorkingEnabled"(boolean0: boolean): void
get "maxProgress"(): integer
get "progress"(): integer
get "active"(): boolean
get "suspendAfterFinish"(): boolean
get "workingEnabled"(): boolean
set "suspendAfterFinish"(value: boolean)
set "workingEnabled"(value: boolean)
}

export namespace $IWorkable {
const ACTIVE_PROPERTY: $BooleanProperty
}
export abstract class $IWorkable$$Static implements $IWorkable {
static readonly "ACTIVE_PROPERTY": $BooleanProperty

}
}

declare module "com.gregtechceu.gtceu.api.capability.IPropertyFluidFilter" {
import { $List$$Type } from "java.util.List"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection } from "java.util.Collection"
import { $FluidAttribute, $FluidAttribute$$Type } from "com.gregtechceu.gtceu.api.fluids.attribute.FluidAttribute"
import { $FluidStack, $FluidStack$$Type } from "net.minecraftforge.fluids.FluidStack"
import { $FluidState$$Type } from "com.gregtechceu.gtceu.api.fluids.FluidState"

export interface $IPropertyFluidFilter extends $Predicate<$FluidStack> {
"and"(predicate0: $Predicate$$Type<$FluidStack$$Type>): $Predicate<$FluidStack>
"appendTooltips"(list0: $List$$Type<$Component$$Type>, boolean1: boolean, boolean2: boolean): void
"canContain"(fluidState0: $FluidState$$Type): boolean
"canContain"(fluidAttribute0: $FluidAttribute$$Type): boolean
"getContainedAttributes"(): $Collection<$FluidAttribute>
"getMaxFluidTemperature"(): integer
"isCryoProof"(): boolean
"isGasProof"(): boolean
"isPlasmaProof"(): boolean
"negate"(): $Predicate<$FluidStack>
"or"(predicate0: $Predicate$$Type<$FluidStack$$Type>): $Predicate<$FluidStack>
"setCanContain"(fluidAttribute0: $FluidAttribute$$Type, boolean1: boolean): void
"test"(fluidStack0: $FluidStack$$Type): boolean
get "containedAttributes"(): $Collection<$FluidAttribute>
get "maxFluidTemperature"(): integer
get "cryoProof"(): boolean
get "gasProof"(): boolean
get "plasmaProof"(): boolean
}

export namespace $IPropertyFluidFilter {
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $IPropertyFluidFilter$$Static implements $IPropertyFluidFilter {
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "com.gregtechceu.gtceu.api.capability.recipe.IRecipeHandler" {
import { $IO$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.IO"
import { $GTRecipe$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipe"
import { $IFilteredHandler } from "com.gregtechceu.gtceu.api.capability.recipe.IFilteredHandler"
import { $List, $List$$Type } from "java.util.List"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Comparator } from "java.util.Comparator"
import { $RecipeCapability } from "com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability"

export interface $IRecipeHandler<K = any> extends $IFilteredHandler<K> {
"and"(predicate0: $Predicate$$Type<K>): $Predicate<K>
"copyContent"(object0: any): K
"getCapability"(): $RecipeCapability<K>
"getContents"(): $List<any>
"getPriority"(): integer
"getSize"(): integer
"getTotalContentAmount"(): double
"handleRecipe"(iO0: $IO$$Type, gTRecipe1: $GTRecipe$$Type, list2: $List$$Type<any>, boolean3: boolean): $List<K>
"handleRecipeInner"(iO0: $IO$$Type, gTRecipe1: $GTRecipe$$Type, list2: $List$$Type<K>, boolean3: boolean): $List<K>
"isDistinct"(): boolean
"negate"(): $Predicate<K>
"or"(predicate0: $Predicate$$Type<K>): $Predicate<K>
"shouldSearchContent"(): boolean
"test"(k0: K): boolean
get "capability"(): $RecipeCapability<K>
get "contents"(): $List<any>
get "priority"(): integer
get "size"(): integer
get "totalContentAmount"(): double
get "distinct"(): boolean
}

export namespace $IRecipeHandler {
const ENTRY_COMPARATOR: $Comparator<$IRecipeHandler<any>>
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $IRecipeHandler$$Static<K = any> implements $IRecipeHandler<K> {
static readonly "ENTRY_COMPARATOR": $Comparator<$IRecipeHandler<any>>

static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "com.gregtechceu.gtceu.api.capability.IEnergyInfoProvider" {
import { $IEnergyInfoProvider$EnergyInfo } from "com.gregtechceu.gtceu.api.capability.IEnergyInfoProvider$EnergyInfo"

export interface $IEnergyInfoProvider {
"getEnergyInfo"(): $IEnergyInfoProvider$EnergyInfo
"getInputPerSec"(): long
"getOutputPerSec"(): long
"isOneProbeHidden"(): boolean
"supportsBigIntEnergyValues"(): boolean
get "energyInfo"(): $IEnergyInfoProvider$EnergyInfo
get "inputPerSec"(): long
get "outputPerSec"(): long
get "oneProbeHidden"(): boolean
}

export namespace $IEnergyInfoProvider {
const probejs$$marker: never
}
export abstract class $IEnergyInfoProvider$$Static implements $IEnergyInfoProvider {
}
}

declare module "com.gregtechceu.gtceu.api.capability.recipe.IO" {
import { $Enum } from "java.lang.Enum"
import { $IGuiTexture } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $EnumSelectorWidget$SelectableEnum } from "com.gregtechceu.gtceu.api.gui.widget.EnumSelectorWidget$SelectableEnum"

export class $IO extends $Enum<$IO> implements $EnumSelectorWidget$SelectableEnum {
static readonly "BOTH": $IO
static readonly "IN": $IO
static readonly "NONE": $IO
static readonly "OUT": $IO
readonly "icon": $IGuiTexture
readonly "tooltip": string

public "getIcon"(): $IGuiTexture
public "getTooltip"(): string
public "support"(iO0: $IO$$Type): boolean
public static "valueOf"(string0: string): $IO
public static "values"(): $IO[]
}
}

declare module "com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability" {
import { $ContentModifier$$Type } from "com.gregtechceu.gtceu.api.recipe.content.ContentModifier"
import { $MutableInt$$Type } from "org.apache.commons.lang3.mutable.MutableInt"
import { $GTRecipeType$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipeType"
import { $Tag } from "net.minecraft.nbt.Tag"
import { $Content, $Content$$Type } from "com.gregtechceu.gtceu.api.recipe.content.Content"
import { $AbstractMapIngredient } from "com.gregtechceu.gtceu.api.recipe.lookup.ingredient.AbstractMapIngredient"
import { $Collection$$Type } from "java.util.Collection"
import { $Widget, $Widget$$Type } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $IContentSerializer } from "com.gregtechceu.gtceu.api.recipe.content.IContentSerializer"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $GTRecipe$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipe"
import { $IO$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.IO"
import { $List, $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Object2IntMap } from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import { $Map } from "java.util.Map"
import { $GTRecipeTypeUI$RecipeHolder$$Type } from "com.gregtechceu.gtceu.api.recipe.ui.GTRecipeTypeUI$RecipeHolder"
import { $Class } from "java.lang.Class"
import { $Comparator } from "java.util.Comparator"
import { $WidgetGroup$$Type } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $IRecipeCapabilityHolder$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.IRecipeCapabilityHolder"

export class $RecipeCapability<T = any> {
static readonly "CODEC": $Codec<$Map<$RecipeCapability<any>, $List<$Content>>>
static readonly "COMPARATOR": $Comparator<$RecipeCapability<any>>
static readonly "DIRECT_CODEC": $Codec<$RecipeCapability<any>>
readonly "color": integer
readonly "doRenderSlot": boolean
readonly "name": string
readonly "serializer": $IContentSerializer<T>
readonly "sortIndex": integer

public "addXEIInfo"(widgetGroup0: $WidgetGroup$$Type, int1: integer, gTRecipe2: $GTRecipe$$Type, list3: $List$$Type<$Content$$Type>, boolean4: boolean, boolean5: boolean, mutableInt6: $MutableInt$$Type): void
public "applyWidgetInfo"(widget0: $Widget$$Type, int1: integer, boolean2: boolean, iO3: $IO$$Type, recipeHolder4: $GTRecipeTypeUI$RecipeHolder$$Type, gTRecipeType5: $GTRecipeType$$Type, gTRecipe6: $GTRecipe$$Type, content7: $Content$$Type, object8: any, int9: integer, int10: integer): void
public "compressIngredients"(collection0: $Collection$$Type<any>): $List<any>
public static "contentCodec"(recipeCapability0: $RecipeCapability$$Type<any>): $Codec<$List<$Content>>
public "contentToNbt"(object0: any): $Tag
public "copyContent"(object0: any, contentModifier1: $ContentModifier$$Type): T
public "copyContent"(object0: any): T
public "copyInner"(t0: T): T
public "copyWithModifier"(t0: T, contentModifier1: $ContentModifier$$Type): T
public "createWidget"(): $Widget
public "createXEIContainer"(list0: $List$$Type<any>): any
public "createXEIContainerContents"(list0: $List$$Type<$Content$$Type>, gTRecipe1: $GTRecipe$$Type, iO2: $IO$$Type): $List<any>
public "doAddGuiSlots"(): boolean
public "doMatchInRecipe"(): boolean
public "getColoredName"(): $MutableComponent
public "getDefaultMapIngredient"(object0: any): $List<$AbstractMapIngredient>
public "getMaxParallelByInput"(iRecipeCapabilityHolder0: $IRecipeCapabilityHolder$$Type, gTRecipe1: $GTRecipe$$Type, int2: integer, boolean3: boolean): integer
public "getName"(): $MutableComponent
public "getWidgetClass"(): $Class<$Widget>
public "isRecipeSearchFilter"(): boolean
public "isTickSlot"(int0: integer, iO1: $IO$$Type, gTRecipe2: $GTRecipe$$Type): boolean
public "limitMaxParallelByOutput"(iRecipeCapabilityHolder0: $IRecipeCapabilityHolder$$Type, gTRecipe1: $GTRecipe$$Type, int2: integer, boolean3: boolean): integer
public "makeChanceCache"(): $Object2IntMap<T>
public "of"(object0: any): T
public "shouldBypassDistinct"(): boolean
public "slotName"(iO0: $IO$$Type): string
public "slotName"(iO0: $IO$$Type, int1: integer): string
get "coloredName"(): $MutableComponent
get "widgetClass"(): $Class<$Widget>
get "recipeSearchFilter"(): boolean
}
}

declare module "com.gregtechceu.gtceu.api.capability.ICleanroomReceiver" {
import { $ICleanroomProvider, $ICleanroomProvider$$Type } from "com.gregtechceu.gtceu.api.machine.feature.ICleanroomProvider"

export interface $ICleanroomReceiver {
"getCleanroom"(): $ICleanroomProvider
"setCleanroom"(iCleanroomProvider0: $ICleanroomProvider$$Type): void
get "cleanroom"(): $ICleanroomProvider
set "cleanroom"(value: $ICleanroomProvider$$Type)
}

export namespace $ICleanroomReceiver {
const probejs$$marker: never
}
export abstract class $ICleanroomReceiver$$Static implements $ICleanroomReceiver {
}
}

declare module "com.gregtechceu.gtceu.api.capability.IHazardParticleContainer" {
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $MedicalCondition$$Type } from "com.gregtechceu.gtceu.api.data.medicalcondition.MedicalCondition"

export interface $IHazardParticleContainer {
"addHazard"(medicalCondition0: $MedicalCondition$$Type, float1: float): float
"changeHazard"(medicalCondition0: $MedicalCondition$$Type, float1: float): float
"getHazardCanBeInserted"(medicalCondition0: $MedicalCondition$$Type): float
"getHazardCapacity"(medicalCondition0: $MedicalCondition$$Type): float
"getHazardStored"(medicalCondition0: $MedicalCondition$$Type): float
"inputsHazard"(direction0: $Direction$$Type, medicalCondition1: $MedicalCondition$$Type): boolean
"outputsHazard"(direction0: $Direction$$Type, medicalCondition1: $MedicalCondition$$Type): boolean
"removeHazard"(medicalCondition0: $MedicalCondition$$Type, float1: float): float
}

export namespace $IHazardParticleContainer {
const DEFAULT: $IHazardParticleContainer
}
export abstract class $IHazardParticleContainer$$Static implements $IHazardParticleContainer {
static readonly "DEFAULT": $IHazardParticleContainer

}
}

declare module "com.gregtechceu.gtceu.api.capability.IOpticalDataAccessHatch" {
import { $GTRecipe, $GTRecipe$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipe"
import { $IDataAccessHatch, $IDataAccessHatch$$Type } from "com.gregtechceu.gtceu.api.capability.IDataAccessHatch"
import { $Collection$$Type } from "java.util.Collection"

export interface $IOpticalDataAccessHatch extends $IDataAccessHatch {
"isCreative"(): boolean
"isRecipeAvailable"(gTRecipe0: $GTRecipe$$Type, collection1: $Collection$$Type<$IDataAccessHatch$$Type>): boolean
"isRecipeAvailable"(gTRecipe0: $GTRecipe$$Type): boolean
"isTransmitter"(): boolean
"modifyRecipe"(gTRecipe0: $GTRecipe$$Type): $GTRecipe
get "creative"(): boolean
get "transmitter"(): boolean
}

export namespace $IOpticalDataAccessHatch {
const probejs$$marker: never
}
export abstract class $IOpticalDataAccessHatch$$Static implements $IOpticalDataAccessHatch {
}
}

declare module "com.gregtechceu.gtceu.api.capability.recipe.IFilteredHandler" {
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Comparator } from "java.util.Comparator"

export interface $IFilteredHandler<K = any> extends $Predicate<K> {
"and"(predicate0: $Predicate$$Type<K>): $Predicate<K>
"getPriority"(): integer
"negate"(): $Predicate<K>
"or"(predicate0: $Predicate$$Type<K>): $Predicate<K>
"test"(k0: K): boolean
get "priority"(): integer
}

export namespace $IFilteredHandler {
const HIGH: integer
const HIGHEST: integer
const LOW: integer
const LOWEST: integer
const NORMAL: integer
const PRIORITY_COMPARATOR: $Comparator<$IFilteredHandler<any>>
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $IFilteredHandler$$Static<K = any> implements $IFilteredHandler<K> {
static readonly "HIGH": integer
static readonly "HIGHEST": integer
static readonly "LOW": integer
static readonly "LOWEST": integer
static readonly "NORMAL": integer
static readonly "PRIORITY_COMPARATOR": $Comparator<$IFilteredHandler<any>>

static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "com.gregtechceu.gtceu.api.capability.IParallelHatch" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IParallelHatch {
"getCurrentParallel"(): integer
get "currentParallel"(): integer
}

export namespace $IParallelHatch {
const probejs$$marker: never
}
export abstract class $IParallelHatch$$Static implements $IParallelHatch {
}
}

declare module "com.gregtechceu.gtceu.api.capability.IToolable" {
import { $GTToolType, $GTToolType$$Type } from "com.gregtechceu.gtceu.api.item.tool.GTToolType"
import { $Set$$Type } from "java.util.Set"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $Pair } from "com.mojang.datafixers.util.Pair"

export interface $IToolable {
"onToolClick"(set0: $Set$$Type<$GTToolType$$Type>, itemStack1: $ItemStack$$Type, useOnContext2: $UseOnContext$$Type): $Pair<$GTToolType, $InteractionResult>
}

export namespace $IToolable {
const probejs$$marker: never
}
export abstract class $IToolable$$Static implements $IToolable {
}
}

declare module "com.gregtechceu.gtceu.api.capability.IControllable" {
import { $BooleanProperty } from "net.minecraft.world.level.block.state.properties.BooleanProperty"

export interface $IControllable {
"isSuspendAfterFinish"(): boolean
"isWorkingEnabled"(): boolean
"setSuspendAfterFinish"(boolean0: boolean): void
"setWorkingEnabled"(boolean0: boolean): void
get "suspendAfterFinish"(): boolean
get "workingEnabled"(): boolean
set "suspendAfterFinish"(value: boolean)
set "workingEnabled"(value: boolean)
}

export namespace $IControllable {
const WORKING_ENABLED_PROPERTY: $BooleanProperty
}
export abstract class $IControllable$$Static implements $IControllable {
static readonly "WORKING_ENABLED_PROPERTY": $BooleanProperty

}
}

declare module "com.gregtechceu.gtceu.api.capability.recipe.IRecipeCapabilityHolder" {
import { $IO, $IO$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.IO"
import { $IRecipeHandler } from "com.gregtechceu.gtceu.api.capability.recipe.IRecipeHandler"
import { $List } from "java.util.List"
import { $RecipeHandlerList, $RecipeHandlerList$$Type } from "com.gregtechceu.gtceu.api.machine.trait.RecipeHandlerList"
import { $Map } from "java.util.Map"
import { $RecipeCapability, $RecipeCapability$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability"

export interface $IRecipeCapabilityHolder {
"addHandlerList"(recipeHandlerList0: $RecipeHandlerList$$Type): void
"getCapabilitiesFlat"(iO0: $IO$$Type, recipeCapability1: $RecipeCapability$$Type<any>): $List<$IRecipeHandler<any>>
"getCapabilitiesFlat"(): $Map<$IO, $Map<$RecipeCapability<any>, $List<$IRecipeHandler<any>>>>
"getCapabilitiesForIO"(iO0: $IO$$Type): $List<$RecipeHandlerList>
"getCapabilitiesProxy"(): $Map<$IO, $List<$RecipeHandlerList>>
"hasCapabilityProxies"(): boolean
get "capabilitiesFlat"(): $Map<$IO, $Map<$RecipeCapability<any>, $List<$IRecipeHandler<any>>>>
get "capabilitiesProxy"(): $Map<$IO, $List<$RecipeHandlerList>>
}

export namespace $IRecipeCapabilityHolder {
const probejs$$marker: never
}
export abstract class $IRecipeCapabilityHolder$$Static implements $IRecipeCapabilityHolder {
}
}

