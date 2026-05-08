declare module "com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys" {
import { $FluidStorageKey } from "com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey"

export class $FluidStorageKeys {
static readonly "GAS": $FluidStorageKey
static readonly "LIQUID": $FluidStorageKey
static readonly "MOLTEN": $FluidStorageKey
static readonly "PLASMA": $FluidStorageKey

}
}

declare module "com.gregtechceu.gtceu.api.fluids.FluidBuilder" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $FluidStorageKey$$Type } from "com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey"
import { $GTRegistrate$$Type } from "com.gregtechceu.gtceu.api.registry.registrate.GTRegistrate"
import { $FluidAttribute$$Type } from "com.gregtechceu.gtceu.api.fluids.attribute.FluidAttribute"
import { $Fluid } from "net.minecraft.world.level.material.Fluid"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $FluidState$$Type } from "com.gregtechceu.gtceu.api.fluids.FluidState"
import { $Supplier } from "java.util.function.Supplier"

export class $FluidBuilder {
constructor()

public "attribute"(fluidAttribute0: $FluidAttribute$$Type): $FluidBuilder
public "attributes"(...fluidAttribute0s: $FluidAttribute$$Type[]): $FluidBuilder
public "block"(): $FluidBuilder
public "build"(material0: $Material$$Type, fluidStorageKey1: $FluidStorageKey$$Type, gTRegistrate2: $GTRegistrate$$Type): $Supplier<$Fluid>
public "burnTime"(int0: integer): $FluidBuilder
public "color"(int0: integer): $FluidBuilder
public "customStill"(): $FluidBuilder
public "density"(int0: integer): $FluidBuilder
public "density"(double0: double): $FluidBuilder
public "disableBucket"(): $FluidBuilder
public "disableColor"(): $FluidBuilder
public "flowing"(resourceLocation0: $ResourceLocation$$Type): $FluidBuilder
public "flowing"(): $ResourceLocation
public "hasFluidBlock"(): boolean
public "luminosity"(int0: integer): $FluidBuilder
public "name"(string0: string): $FluidBuilder
public "state"(fluidState0: $FluidState$$Type): $FluidBuilder
public "still"(resourceLocation0: $ResourceLocation$$Type): $FluidBuilder
public "still"(): $ResourceLocation
public "temperature"(int0: integer): $FluidBuilder
public "textures"(boolean0: boolean): $FluidBuilder
public "textures"(boolean0: boolean, boolean1: boolean): $FluidBuilder
public "translation"(string0: string): $FluidBuilder
public "viscosity"(double0: double): $FluidBuilder
public "viscosity"(int0: integer): $FluidBuilder
}
}

declare module "com.gregtechceu.gtceu.api.fluids.PropertyFluidFilter" {
import { $List$$Type } from "java.util.List"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection } from "java.util.Collection"
import { $FluidAttribute, $FluidAttribute$$Type } from "com.gregtechceu.gtceu.api.fluids.attribute.FluidAttribute"
import { $FluidStack, $FluidStack$$Type } from "net.minecraftforge.fluids.FluidStack"
import { $FluidState$$Type } from "com.gregtechceu.gtceu.api.fluids.FluidState"
import { $IPropertyFluidFilter } from "com.gregtechceu.gtceu.api.capability.IPropertyFluidFilter"

export class $PropertyFluidFilter implements $IPropertyFluidFilter {
constructor(int0: integer, boolean1: boolean, boolean2: boolean, boolean3: boolean, boolean4: boolean)

public "and"(predicate0: $Predicate$$Type<$FluidStack$$Type>): $Predicate<$FluidStack>
public "appendTooltips"(list0: $List$$Type<$Component$$Type>, boolean1: boolean, boolean2: boolean): void
public "canContain"(fluidState0: $FluidState$$Type): boolean
public "canContain"(fluidAttribute0: $FluidAttribute$$Type): boolean
public "getContainedAttributes"(): $Collection<$FluidAttribute>
public "getMaxFluidTemperature"(): integer
public "isCryoProof"(): boolean
public static "isEqual"<T>(object0: any): $Predicate<T>
public "isGasProof"(): boolean
public "isPlasmaProof"(): boolean
public "negate"(): $Predicate<$FluidStack>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public "or"(predicate0: $Predicate$$Type<$FluidStack$$Type>): $Predicate<$FluidStack>
public "setCanContain"(fluidAttribute0: $FluidAttribute$$Type, boolean1: boolean): void
public "test"(fluidStack0: $FluidStack$$Type): boolean
get "containedAttributes"(): $Collection<$FluidAttribute>
get "maxFluidTemperature"(): integer
get "cryoProof"(): boolean
get "gasProof"(): boolean
get "plasmaProof"(): boolean
}
}

declare module "com.gregtechceu.gtceu.api.fluids.FluidState" {
import { $TagKey } from "net.minecraft.tags.TagKey"
import { $Enum } from "java.lang.Enum"
import { $Fluid } from "net.minecraft.world.level.material.Fluid"

export class $FluidState extends $Enum<$FluidState> {
static readonly "GAS": $FluidState
static readonly "LIQUID": $FluidState
static readonly "PLASMA": $FluidState

public "getTagKey"(): $TagKey<$Fluid>
public "getTranslationKey"(): string
public static "valueOf"(string0: string): $FluidState
public static "values"(): $FluidState[]
get "tagKey"(): $TagKey<$Fluid>
get "translationKey"(): string
}
}

declare module "com.gregtechceu.gtceu.api.fluids.attribute.FluidAttribute" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Component$$Type } from "net.minecraft.network.chat.Component"

export class $FluidAttribute {
constructor(resourceLocation0: $ResourceLocation$$Type, consumer1: $Consumer$$Type<$Consumer$$Type<$Component$$Type>>, consumer2: $Consumer$$Type<$Consumer$$Type<$Component$$Type>>)

public "appendContainerTooltips"(consumer0: $Consumer$$Type<$Component$$Type>): void
public "appendFluidTooltips"(consumer0: $Consumer$$Type<$Component$$Type>): void
public "getResourceLocation"(): $ResourceLocation
get "resourceLocation"(): $ResourceLocation
}
}

declare module "com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $Collection } from "java.util.Collection"
import { $Fluid, $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $MaterialIconType, $MaterialIconType$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialIconType"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $FluidState, $FluidState$$Type } from "com.gregtechceu.gtceu.api.fluids.FluidState"
import { $Function$$Type } from "java.util.function.Function"

export class $FluidStorageKey {
constructor(resourceLocation0: $ResourceLocation$$Type, tagKey1: $TagKey$$Type<$Fluid$$Type>, materialIconType2: $MaterialIconType$$Type, function3: $Function$$Type<$Material$$Type, string>, function4: $Function$$Type<$Material$$Type, string>, fluidState5: $FluidState$$Type, int6: integer)
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string, materialIconType2: $MaterialIconType$$Type, function3: $Function$$Type<$Material$$Type, string>, function4: $Function$$Type<$Material$$Type, string>, fluidState5: $FluidState$$Type, int6: integer)
constructor(resourceLocation0: $ResourceLocation$$Type, materialIconType1: $MaterialIconType$$Type, function2: $Function$$Type<$Material$$Type, string>, function3: $Function$$Type<$Material$$Type, string>, fluidState4: $FluidState$$Type, int5: integer)

public static "allKeys"(): $Collection<$FluidStorageKey>
public static "getByName"(resourceLocation0: $ResourceLocation$$Type): $FluidStorageKey
public "getDefaultFluidState"(): $FluidState
public "getExtraTag"(): $TagKey<$Fluid>
public "getIconType"(): $MaterialIconType
public "getRegistrationPriority"(): integer
public "getRegistryNameFor"(material0: $Material$$Type): string
public "getResourceLocation"(): $ResourceLocation
public "getTranslationKeyFor"(material0: $Material$$Type): string
get "defaultFluidState"(): $FluidState
get "extraTag"(): $TagKey<$Fluid>
get "iconType"(): $MaterialIconType
get "registrationPriority"(): integer
get "resourceLocation"(): $ResourceLocation
}
}

declare module "com.gregtechceu.gtceu.api.fluids.store.FluidStorage$FluidEntry" {
import { $FluidBuilder, $FluidBuilder$$Type } from "com.gregtechceu.gtceu.api.fluids.FluidBuilder"
import { $Fluid } from "net.minecraft.world.level.material.Fluid"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"

export class $FluidStorage$FluidEntry {
constructor(supplier0: $Supplier$$Type<$Fluid>, fluidBuilder1: $FluidBuilder$$Type)

public "getBuilder"(): $FluidBuilder
public "getFluid"(): $Supplier<$Fluid>
public "setBuilder"(fluidBuilder0: $FluidBuilder$$Type): void
get "builder"(): $FluidBuilder
get "fluid"(): $Supplier<$Fluid>
set "builder"(value: $FluidBuilder$$Type)
}
}

declare module "com.gregtechceu.gtceu.api.fluids.attribute.FluidAttributes" {
import { $FluidAttribute } from "com.gregtechceu.gtceu.api.fluids.attribute.FluidAttribute"

export class $FluidAttributes {
static readonly "ACID": $FluidAttribute

}
}

declare module "com.gregtechceu.gtceu.api.fluids.store.FluidStorage" {
import { $FluidBuilder, $FluidBuilder$$Type } from "com.gregtechceu.gtceu.api.fluids.FluidBuilder"
import { $FluidStorageKey$$Type } from "com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey"
import { $FluidStorage$FluidEntry } from "com.gregtechceu.gtceu.api.fluids.store.FluidStorage$FluidEntry"
import { $Fluid } from "net.minecraft.world.level.material.Fluid"
import { $Supplier$$Type } from "java.util.function.Supplier"

export interface $FluidStorage {
"enqueueRegistration"(fluidStorageKey0: $FluidStorageKey$$Type, fluidBuilder1: $FluidBuilder$$Type): void
"get"(fluidStorageKey0: $FluidStorageKey$$Type): $Fluid
"getEntry"(fluidStorageKey0: $FluidStorageKey$$Type): $FluidStorage$FluidEntry
"getQueuedBuilder"(fluidStorageKey0: $FluidStorageKey$$Type): $FluidBuilder
"store"(fluidStorageKey0: $FluidStorageKey$$Type, supplier1: $Supplier$$Type<$Fluid>, fluidBuilder2: $FluidBuilder$$Type): void
}

export namespace $FluidStorage {
const probejs$$marker: never
}
export abstract class $FluidStorage$$Static implements $FluidStorage {
}
}

