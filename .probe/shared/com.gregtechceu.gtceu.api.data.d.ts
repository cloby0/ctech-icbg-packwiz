declare module "com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialFlags" {
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $MaterialFlag, $MaterialFlag$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialFlag"

export class $MaterialFlags {
static readonly "BLAST_FURNACE_CALCITE_DOUBLE": $MaterialFlag
static readonly "BLAST_FURNACE_CALCITE_TRIPLE": $MaterialFlag
static readonly "CRYSTALLIZABLE": $MaterialFlag
static readonly "DECOMPOSITION_BY_CENTRIFUGING": $MaterialFlag
static readonly "DECOMPOSITION_BY_ELECTROLYZING": $MaterialFlag
static readonly "DISABLE_ALLOY_BLAST": $MaterialFlag
static readonly "DISABLE_ALLOY_PROPERTY": $MaterialFlag
static readonly "DISABLE_DECOMPOSITION": $MaterialFlag
static readonly "DISABLE_MATERIAL_RECIPES": $MaterialFlag
static readonly "EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES": $MaterialFlag
static readonly "EXCLUDE_BLOCK_CRAFTING_RECIPES": $MaterialFlag
static readonly "EXCLUDE_PLATE_COMPRESSOR_RECIPE": $MaterialFlag
static readonly "EXPLOSIVE": $MaterialFlag
static readonly "FIRE_RESISTANT": $MaterialFlag
static readonly "FLAMMABLE": $MaterialFlag
static readonly "FORCE_GENERATE_BLOCK": $MaterialFlag
static readonly "GENERATE_BOLT_SCREW": $MaterialFlag
static readonly "GENERATE_DENSE": $MaterialFlag
static readonly "GENERATE_FINE_WIRE": $MaterialFlag
static readonly "GENERATE_FOIL": $MaterialFlag
static readonly "GENERATE_FRAME": $MaterialFlag
static readonly "GENERATE_GEAR": $MaterialFlag
static readonly "GENERATE_LENS": $MaterialFlag
static readonly "GENERATE_LONG_ROD": $MaterialFlag
static readonly "GENERATE_PLATE": $MaterialFlag
static readonly "GENERATE_RING": $MaterialFlag
static readonly "GENERATE_ROD": $MaterialFlag
static readonly "GENERATE_ROTOR": $MaterialFlag
static readonly "GENERATE_ROUND": $MaterialFlag
static readonly "GENERATE_SMALL_GEAR": $MaterialFlag
static readonly "GENERATE_SPRING": $MaterialFlag
static readonly "GENERATE_SPRING_SMALL": $MaterialFlag
static readonly "HIGH_SIFTER_OUTPUT": $MaterialFlag
static readonly "IS_MAGNETIC": $MaterialFlag
static readonly "MORTAR_GRINDABLE": $MaterialFlag
static readonly "NO_ORE_PROCESSING_TAB": $MaterialFlag
static readonly "NO_ORE_SMELTING": $MaterialFlag
static readonly "NO_SMASHING": $MaterialFlag
static readonly "NO_SMELTING": $MaterialFlag
/** @deprecated */
static readonly "NO_UNIFICATION": $MaterialFlag
static readonly "NO_WORKING": $MaterialFlag
static readonly "PHOSPHORESCENT": $MaterialFlag
static readonly "SOLDER_MATERIAL": $MaterialFlag
static readonly "SOLDER_MATERIAL_BAD": $MaterialFlag
static readonly "SOLDER_MATERIAL_GOOD": $MaterialFlag
static readonly "STICKY": $MaterialFlag

constructor()

public "addFlags"(...materialFlag0s: $MaterialFlag$$Type[]): $MaterialFlags
public "hasFlag"(materialFlag0: $MaterialFlag$$Type): boolean
public "verify"(material0: $Material$$Type): void
}
}

declare module "com.gregtechceu.gtceu.api.data.tag.TagPrefix$BlockProperties" {
import { $RenderType } from "net.minecraft.client.renderer.RenderType"
import { $UnaryOperator, $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $Record } from "java.lang.Record"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"

export class $TagPrefix$BlockProperties extends $Record {
constructor(renderType: $Supplier$$Type<$Supplier<$RenderType>>, properties: $UnaryOperator$$Type<$BlockBehaviour$Properties$$Type>)

public "properties"(): $UnaryOperator<$BlockBehaviour$Properties>
public "renderType"(): $Supplier<$Supplier<$RenderType>>
}
}

declare module "com.gregtechceu.gtceu.api.data.RotationState" {
import { $Enum } from "java.lang.Enum"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $DirectionProperty } from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $RotationState extends $Enum<$RotationState> implements $Predicate<$Direction> {
static readonly "ALL": $RotationState
static readonly "NONE": $RotationState
static readonly "NON_Y_AXIS": $RotationState
static readonly "Y_AXIS": $RotationState
readonly "defaultDirection": $Direction
readonly "property": $DirectionProperty

public "and"(predicate0: $Predicate$$Type<$Direction$$Type>): $Predicate<$Direction>
public static "isEqual"<T>(object0: any): $Predicate<T>
public "negate"(): $Predicate<$Direction>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public "or"(predicate0: $Predicate$$Type<$Direction$$Type>): $Predicate<$Direction>
public "test"(direction0: $Direction$$Type): boolean
public static "valueOf"(string0: string): $RotationState
public static "values"(): $RotationState[]
}
}

declare module "com.gregtechceu.gtceu.api.data.tag.TagPrefix$ItemConstructor" {
import { $TagPrefix$$Type } from "com.gregtechceu.gtceu.api.data.tag.TagPrefix"
import { $Item } from "net.minecraft.world.item.Item"
import { $Item$Properties$$Type } from "net.minecraft.world.item.Item$Properties"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"

export interface $TagPrefix$ItemConstructor {
"create"(properties0: $Item$Properties$$Type, tagPrefix1: $TagPrefix$$Type, material2: $Material$$Type): $Item
}

export namespace $TagPrefix$ItemConstructor {
const probejs$$marker: never
}
export abstract class $TagPrefix$ItemConstructor$$Static implements $TagPrefix$ItemConstructor {
}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.generator.veins.VeinedVeinGenerator" {
import { $Either } from "com.mojang.datafixers.util.Either"
import { $List, $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $OreConfiguration$TargetBlockState } from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration$TargetBlockState"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $GTOreDefinition$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.GTOreDefinition"
import { $Material, $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $VeinedVeinGenerator$VeinBlockDefinition, $VeinedVeinGenerator$VeinBlockDefinition$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.generator.veins.VeinedVeinGenerator$VeinBlockDefinition"
import { $VeinGenerator } from "com.gregtechceu.gtceu.api.data.worldgen.generator.VeinGenerator"

export class $VeinedVeinGenerator extends $VeinGenerator {
static readonly "BLOCK_ENTRY_CODEC": $Codec<$Either<$List<$OreConfiguration$TargetBlockState>, $Material>>
static readonly "CODEC": $Codec<$VeinedVeinGenerator>
"edgeRoundoffBegin": integer
"fillerBlock": $BlockState
"maxEdgeRoundoff": double
"maxRichness": float
"maxRichnessThreshold": float
"maxYLevel": integer
"minRichness": float
"minYLevel": integer
"rareBlockChance": float
"veininessThreshold": float

constructor(gTOreDefinition0: $GTOreDefinition$$Type)
constructor(list0: $List$$Type<$VeinedVeinGenerator$VeinBlockDefinition$$Type>, list1: $List$$Type<$VeinedVeinGenerator$VeinBlockDefinition$$Type>, blockState2: $BlockState$$Type, int3: integer, int4: integer, float5: float, int6: integer, double7: double, float8: float, float9: float, float10: float, float11: float)

public "edgeRoundoffBegin"(int0: integer): $VeinedVeinGenerator
public "fillerBlock"(blockState0: $BlockState$$Type): $VeinedVeinGenerator
public "maxEdgeRoundoff"(double0: double): $VeinedVeinGenerator
public "maxRichness"(float0: float): $VeinedVeinGenerator
public "maxRichnessThreshold"(float0: float): $VeinedVeinGenerator
public "maxYLevel"(int0: integer): $VeinedVeinGenerator
public "minRichness"(float0: float): $VeinedVeinGenerator
public "minYLevel"(int0: integer): $VeinedVeinGenerator
public "oreBlock"(material0: $Material$$Type, int1: integer): $VeinedVeinGenerator
public "oreBlock"(blockState0: $BlockState$$Type, int1: integer): $VeinedVeinGenerator
public "oreBlock"(veinBlockDefinition0: $VeinedVeinGenerator$VeinBlockDefinition$$Type): $VeinedVeinGenerator
public "rareBlock"(blockState0: $BlockState$$Type, int1: integer): $VeinedVeinGenerator
public "rareBlock"(veinBlockDefinition0: $VeinedVeinGenerator$VeinBlockDefinition$$Type): $VeinedVeinGenerator
public "rareBlock"(material0: $Material$$Type, int1: integer): $VeinedVeinGenerator
public "rareBlockChance"(float0: float): $VeinedVeinGenerator
public "veininessThreshold"(float0: float): $VeinedVeinGenerator
get "oreBlocks"(): $List<$VeinedVeinGenerator$VeinBlockDefinition>
set "oreBlocks"(value: $List$$Type<$VeinedVeinGenerator$VeinBlockDefinition$$Type>)
get "rareBlocks"(): $List<$VeinedVeinGenerator$VeinBlockDefinition>
set "rareBlocks"(value: $List$$Type<$VeinedVeinGenerator$VeinBlockDefinition$$Type>)
}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.generator.veins.ClassicVeinGenerator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ClassicVeinGenerator$Layer$Builder$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.generator.veins.ClassicVeinGenerator$Layer$Builder"
import { $Codec } from "com.mojang.serialization.Codec"
import { $GTOreDefinition$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.GTOreDefinition"
import { $ClassicVeinGenerator$Layer$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.generator.veins.ClassicVeinGenerator$Layer"
import { $RuleTest$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest"
import { $VeinGenerator } from "com.gregtechceu.gtceu.api.data.worldgen.generator.VeinGenerator"

export class $ClassicVeinGenerator extends $VeinGenerator {
static readonly "CODEC": $Codec<$ClassicVeinGenerator>

constructor(layer0: $ClassicVeinGenerator$Layer$$Type, layer1: $ClassicVeinGenerator$Layer$$Type, layer2: $ClassicVeinGenerator$Layer$$Type, layer3: $ClassicVeinGenerator$Layer$$Type, int4: integer)
constructor(gTOreDefinition0: $GTOreDefinition$$Type)

public "between"(consumer0: $Consumer$$Type<$ClassicVeinGenerator$Layer$Builder$$Type>): $ClassicVeinGenerator
public "primary"(consumer0: $Consumer$$Type<$ClassicVeinGenerator$Layer$Builder$$Type>): $ClassicVeinGenerator
public "rules"(ruleTest0s: $RuleTest$$Type[]): $ClassicVeinGenerator
public "secondary"(consumer0: $Consumer$$Type<$ClassicVeinGenerator$Layer$Builder$$Type>): $ClassicVeinGenerator
public "sporadic"(consumer0: $Consumer$$Type<$ClassicVeinGenerator$Layer$Builder$$Type>): $ClassicVeinGenerator
public "yRadius"(int0: integer): $ClassicVeinGenerator
}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.GTOreDefinition" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $DikeVeinGenerator$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.generator.veins.DikeVeinGenerator"
import { $HeightRangePlacement, $HeightRangePlacement$$Type } from "net.minecraft.world.level.levelgen.placement.HeightRangePlacement"
import { $HolderSet } from "net.minecraft.core.HolderSet"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $Biome, $Biome$$Type } from "net.minecraft.world.level.biome.Biome"
import { $VeinGenerator, $VeinGenerator$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.generator.VeinGenerator"
import { $Holder$$Type } from "net.minecraft.core.Holder"
import { $IntProvider, $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $BiomeWeightModifier, $BiomeWeightModifier$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.BiomeWeightModifier"
import { $GeodeVeinGenerator$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.generator.veins.GeodeVeinGenerator"
import { $IWorldGenLayer, $IWorldGenLayer$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.IWorldGenLayer"
import { $StandardVeinGenerator$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.generator.veins.StandardVeinGenerator"
import { $Set, $Set$$Type } from "java.util.Set"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $ClassicVeinGenerator$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.generator.veins.ClassicVeinGenerator"
import { $LayeredVeinGenerator$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.generator.veins.LayeredVeinGenerator"
import { $VeinedVeinGenerator$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.generator.veins.VeinedVeinGenerator"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $SurfaceIndicatorGenerator$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.generator.indicators.SurfaceIndicatorGenerator"
import { $List, $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $CuboidVeinGenerator$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.generator.veins.CuboidVeinGenerator"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $IndicatorGenerator, $IndicatorGenerator$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.generator.IndicatorGenerator"

export class $GTOreDefinition {
static readonly "CODEC": $Codec<$GTOreDefinition>
static readonly "FULL_CODEC": $Codec<$GTOreDefinition>

constructor(gTOreDefinition0: $GTOreDefinition$$Type)
constructor(intProvider0: $IntProvider$$Type, float1: float, int2: integer, iWorldGenLayer3: $IWorldGenLayer$$Type, set4: $Set$$Type<$ResourceKey$$Type<$Level$$Type>>, heightRangePlacement5: $HeightRangePlacement$$Type, float6: float, supplier7: $Supplier$$Type<$HolderSet<$Biome>>, biomeWeightModifier8: $BiomeWeightModifier$$Type, veinGenerator9: $VeinGenerator$$Type, list10: $List$$Type<$IndicatorGenerator$$Type>)

public "biomeWeightModifier"(): $BiomeWeightModifier
public "biomeWeightModifier"(biomeWeightModifier0: $BiomeWeightModifier$$Type): $GTOreDefinition
public "biomes"(string0: string, ...string1s: string[]): $GTOreDefinition
public "biomes"(): $Supplier<$HolderSet<$Biome>>
public "classicVeinGenerator"(consumer0: $Consumer$$Type<$ClassicVeinGenerator$$Type>): $GTOreDefinition
public "clusterSize"(int0: integer): $GTOreDefinition
public "clusterSize"(): $IntProvider
public "clusterSize"(intProvider0: $IntProvider$$Type): $GTOreDefinition
public "cuboidVeinGenerator"(consumer0: $Consumer$$Type<$CuboidVeinGenerator$$Type>): $GTOreDefinition
public "customVeinGenerator"(resourceLocation0: $ResourceLocation$$Type): $VeinGenerator
public "density"(): float
public "density"(float0: float): $GTOreDefinition
public "dikeVeinGenerator"(consumer0: $Consumer$$Type<$DikeVeinGenerator$$Type>): $GTOreDefinition
public "dimensionFilter"(): $Set<$ResourceKey<$Level>>
public "dimensionFilter"(set0: $Set$$Type<$ResourceKey$$Type<$Level$$Type>>): $GTOreDefinition
/** @deprecated */
public "dimensions"(...resourceLocation0s: $ResourceLocation$$Type[]): $GTOreDefinition
public "discardChanceOnAirExposure"(float0: float): $GTOreDefinition
public "discardChanceOnAirExposure"(): float
public "geodeVeinGenerator"(consumer0: $Consumer$$Type<$GeodeVeinGenerator$$Type>): $GTOreDefinition
public "heightRange"(heightRangePlacement0: $HeightRangePlacement$$Type): $GTOreDefinition
public "heightRangeTriangle"(int0: integer, int1: integer): $GTOreDefinition
public "heightRangeUniform"(int0: integer, int1: integer): $GTOreDefinition
public "indicatorGenerators"(): $List<$IndicatorGenerator>
public "indicatorGenerators"(list0: $List$$Type<$IndicatorGenerator$$Type>): $GTOreDefinition
public "isForBiome"(holder0: $Holder$$Type<$Biome$$Type>): boolean
public "layer"(): $IWorldGenLayer
public "layer"(iWorldGenLayer0: $IWorldGenLayer$$Type): $GTOreDefinition
public "layeredVeinGenerator"(consumer0: $Consumer$$Type<$LayeredVeinGenerator$$Type>): $GTOreDefinition
public "range"(heightRangePlacement0: $HeightRangePlacement$$Type): $GTOreDefinition
public "range"(): $HeightRangePlacement
public "standardVeinGenerator"(consumer0: $Consumer$$Type<$StandardVeinGenerator$$Type>): $GTOreDefinition
public "surfaceIndicatorGenerator"(consumer0: $Consumer$$Type<$SurfaceIndicatorGenerator$$Type>): $GTOreDefinition
public "veinGenerator"(): $VeinGenerator
public "veinGenerator"(veinGenerator0: $VeinGenerator$$Type): $GTOreDefinition
public "veinedVeinGenerator"(consumer0: $Consumer$$Type<$VeinedVeinGenerator$$Type>): $GTOreDefinition
public "weight"(int0: integer): $GTOreDefinition
public "weight"(): integer
public "weightForBiome"(holder0: $Holder$$Type<$Biome$$Type>): integer
}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.generator.veins.CuboidVeinGenerator" {
import { $BulkSectionAccess$$Type } from "net.minecraft.world.level.chunk.BulkSectionAccess"
import { $ClassicVeinGenerator$Layer$Builder$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.generator.veins.ClassicVeinGenerator$Layer$Builder"
import { $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $OreConfiguration$TargetBlockState$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration$TargetBlockState"
import { $GTOreDefinition$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.GTOreDefinition"
import { $ClassicVeinGenerator$Layer$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.generator.veins.ClassicVeinGenerator$Layer"
import { $VeinGenerator } from "com.gregtechceu.gtceu.api.data.worldgen.generator.VeinGenerator"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $LevelChunkSection$$Type } from "net.minecraft.world.level.chunk.LevelChunkSection"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"

export class $CuboidVeinGenerator extends $VeinGenerator {
static readonly "CODEC": $Codec<$CuboidVeinGenerator>

constructor(layer0: $ClassicVeinGenerator$Layer$$Type, layer1: $ClassicVeinGenerator$Layer$$Type, layer2: $ClassicVeinGenerator$Layer$$Type, layer3: $ClassicVeinGenerator$Layer$$Type, int4: integer, int5: integer)
constructor(gTOreDefinition0: $GTOreDefinition$$Type)

public "bottom"(consumer0: $Consumer$$Type<$ClassicVeinGenerator$Layer$Builder$$Type>): $CuboidVeinGenerator
public "maxY"(int0: integer): $CuboidVeinGenerator
public "middle"(consumer0: $Consumer$$Type<$ClassicVeinGenerator$Layer$Builder$$Type>): $CuboidVeinGenerator
public "minY"(int0: integer): $CuboidVeinGenerator
public "placeOre"(bulkSectionAccess0: $BulkSectionAccess$$Type, levelChunkSection1: $LevelChunkSection$$Type, blockPos2: $BlockPos$$Type, long3: long, either4: $Either$$Type<$List$$Type<$OreConfiguration$TargetBlockState$$Type>, $Material$$Type>, gTOreDefinition5: $GTOreDefinition$$Type): void
public "spread"(consumer0: $Consumer$$Type<$ClassicVeinGenerator$Layer$Builder$$Type>): $CuboidVeinGenerator
public "top"(consumer0: $Consumer$$Type<$ClassicVeinGenerator$Layer$Builder$$Type>): $CuboidVeinGenerator
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey" {
import { $BlastProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty"
import { $ToolProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty"
import { $IngotProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty"
import { $ItemPipeProperties } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.ItemPipeProperties"
import { $HazardProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.HazardProperty"
import { $OreProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty"
import { $WoodProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.WoodProperty"
import { $PropertyKey$EmptyProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey$EmptyProperty"
import { $WireProperties } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties"
import { $AlloyBlastProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.AlloyBlastProperty"
import { $FluidProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty"
import { $ArmorProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.ArmorProperty"
import { $FluidPipeProperties } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidPipeProperties"
import { $IMaterialProperty, $IMaterialProperty$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.IMaterialProperty"
import { $GemProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.GemProperty"
import { $PolymerProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.PolymerProperty"
import { $DustProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty"
import { $RotorProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.RotorProperty"
import { $Class, $Class$$Type } from "java.lang.Class"

export class $PropertyKey<T extends $IMaterialProperty = $IMaterialProperty> {
static readonly "ALLOY_BLAST": $PropertyKey<$AlloyBlastProperty>
static readonly "ARMOR": $PropertyKey<$ArmorProperty>
static readonly "BLAST": $PropertyKey<$BlastProperty>
static readonly "DUST": $PropertyKey<$DustProperty>
static readonly "EMPTY": $PropertyKey<$PropertyKey$EmptyProperty>
static readonly "FLUID": $PropertyKey<$FluidProperty>
static readonly "FLUID_PIPE": $PropertyKey<$FluidPipeProperties>
static readonly "GEM": $PropertyKey<$GemProperty>
static readonly "HAZARD": $PropertyKey<$HazardProperty>
static readonly "INGOT": $PropertyKey<$IngotProperty>
static readonly "ITEM_PIPE": $PropertyKey<$ItemPipeProperties>
static readonly "ORE": $PropertyKey<$OreProperty>
static readonly "POLYMER": $PropertyKey<$PolymerProperty>
static readonly "ROTOR": $PropertyKey<$RotorProperty>
static readonly "TOOL": $PropertyKey<$ToolProperty>
static readonly "WIRE": $PropertyKey<$WireProperties>
static readonly "WOOD": $PropertyKey<$WoodProperty>

constructor(string0: string, class1: $Class$$Type<T>)

public "cast"(iMaterialProperty0: $IMaterialProperty$$Type): T
public "getKey"(): string
public "getType"(): $Class<T>
get "key"(): string
get "type"(): $Class<T>
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.event.MaterialEvent" {
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $MaterialEvent extends $Event implements $IModBusEvent {
constructor()

}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.MarkerMaterial" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Material } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"

export class $MarkerMaterial extends $Material {
constructor(resourceLocation0: $ResourceLocation$$Type)

}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialIconType" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Map } from "java.util.Map"
import { $MaterialIconSet$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialIconSet"
import { $Record } from "java.lang.Record"

export class $MaterialIconType extends $Record {
static readonly "ICON_TYPES": $Map<string, $MaterialIconType>
static readonly "block": $MaterialIconType
static readonly "bolt": $MaterialIconType
static readonly "crop": $MaterialIconType
static readonly "crushed": $MaterialIconType
static readonly "crushedPurified": $MaterialIconType
static readonly "crushedRefined": $MaterialIconType
static readonly "dust": $MaterialIconType
static readonly "dustImpure": $MaterialIconType
static readonly "dustPure": $MaterialIconType
static readonly "dustSmall": $MaterialIconType
static readonly "dustTiny": $MaterialIconType
static readonly "essence": $MaterialIconType
static readonly "foil": $MaterialIconType
static readonly "frameGt": $MaterialIconType
static readonly "gas": $MaterialIconType
static readonly "gear": $MaterialIconType
static readonly "gearSmall": $MaterialIconType
static readonly "gem": $MaterialIconType
static readonly "gemChipped": $MaterialIconType
static readonly "gemExquisite": $MaterialIconType
static readonly "gemFlawed": $MaterialIconType
static readonly "gemFlawless": $MaterialIconType
static readonly "ingot": $MaterialIconType
static readonly "ingotDouble": $MaterialIconType
static readonly "ingotHot": $MaterialIconType
static readonly "ingotQuadruple": $MaterialIconType
static readonly "ingotQuintuple": $MaterialIconType
static readonly "ingotTriple": $MaterialIconType
static readonly "lens": $MaterialIconType
static readonly "liquid": $MaterialIconType
static readonly "molten": $MaterialIconType
static readonly "nugget": $MaterialIconType
static readonly "ore": $MaterialIconType
static readonly "oreEmissive": $MaterialIconType
static readonly "oreSmall": $MaterialIconType
static readonly "plasma": $MaterialIconType
static readonly "plate": $MaterialIconType
static readonly "plateDense": $MaterialIconType
static readonly "plateDouble": $MaterialIconType
static readonly "plateQuadruple": $MaterialIconType
static readonly "plateQuintuple": $MaterialIconType
static readonly "plateTriple": $MaterialIconType
static readonly "rawOre": $MaterialIconType
static readonly "rawOreBlock": $MaterialIconType
static readonly "ring": $MaterialIconType
static readonly "rod": $MaterialIconType
static readonly "rodLong": $MaterialIconType
static readonly "rotor": $MaterialIconType
static readonly "round": $MaterialIconType
static readonly "screw": $MaterialIconType
static readonly "seed": $MaterialIconType
static readonly "spring": $MaterialIconType
static readonly "springSmall": $MaterialIconType
static readonly "toolHeadAxe": $MaterialIconType
static readonly "toolHeadBuzzSaw": $MaterialIconType
static readonly "toolHeadChainsaw": $MaterialIconType
static readonly "toolHeadDrill": $MaterialIconType
static readonly "toolHeadFile": $MaterialIconType
static readonly "toolHeadHammer": $MaterialIconType
static readonly "toolHeadHoe": $MaterialIconType
static readonly "toolHeadPickaxe": $MaterialIconType
static readonly "toolHeadSaw": $MaterialIconType
static readonly "toolHeadScrewdriver": $MaterialIconType
static readonly "toolHeadScythe": $MaterialIconType
static readonly "toolHeadShovel": $MaterialIconType
static readonly "toolHeadSword": $MaterialIconType
static readonly "toolHeadWireCutter": $MaterialIconType
static readonly "toolHeadWrench": $MaterialIconType
static readonly "turbineBlade": $MaterialIconType
static readonly "wire": $MaterialIconType
static readonly "wireFine": $MaterialIconType

constructor(name: string)

public "getBlockModelPath"(materialIconSet0: $MaterialIconSet$$Type, boolean1: boolean): $ResourceLocation
public "getBlockTexturePath"(materialIconSet0: $MaterialIconSet$$Type, string1: string, boolean2: boolean): $ResourceLocation
public "getBlockTexturePath"(materialIconSet0: $MaterialIconSet$$Type, boolean1: boolean): $ResourceLocation
public static "getByName"(string0: string): $MaterialIconType
public "getItemModelPath"(materialIconSet0: $MaterialIconSet$$Type, boolean1: boolean): $ResourceLocation
public "getItemTexturePath"(materialIconSet0: $MaterialIconSet$$Type, string1: string, boolean2: boolean): $ResourceLocation
public "getItemTexturePath"(materialIconSet0: $MaterialIconSet$$Type, boolean1: boolean): $ResourceLocation
public static "init"(): void
public "name"(): string
}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.generator.IndicatorGenerator" {
import { $Either } from "com.mojang.datafixers.util.Either"
import { $Codec } from "com.mojang.serialization.Codec"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $GTOreDefinition$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.GTOreDefinition"
import { $Material } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"

export class $IndicatorGenerator {
static readonly "DIRECT_CODEC": $Codec<$IndicatorGenerator>
static readonly "REGISTRY_CODEC": $Codec<$Codec<$IndicatorGenerator>>

constructor()
constructor(gTOreDefinition0: $GTOreDefinition$$Type)

public "block"(): $Either<$BlockState, $Material>
public "codec"(): $Codec<$IndicatorGenerator>
public "getSearchRadiusModifier"(int0: integer): integer
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.properties.PolymerProperty" {
import { $IMaterialProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.IMaterialProperty"
import { $MaterialProperties$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.MaterialProperties"

export class $PolymerProperty implements $IMaterialProperty {
constructor()

public "verifyProperty"(materialProperties0: $MaterialProperties$$Type): void
}
}

declare module "com.gregtechceu.gtceu.api.data.medicalcondition.MedicalCondition" {
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $GTRecipeBuilder, $GTRecipeBuilder$$Type } from "com.gregtechceu.gtceu.data.recipe.builder.GTRecipeBuilder"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Symptom$ConfiguredSymptom, $Symptom$ConfiguredSymptom$$Type } from "com.gregtechceu.gtceu.api.data.medicalcondition.Symptom$ConfiguredSymptom"
import { $DamageSource } from "net.minecraft.world.damagesource.DamageSource"
import { $Map } from "java.util.Map"
import { $Set } from "java.util.Set"
import { $MedicalCondition$IdleProgressionType, $MedicalCondition$IdleProgressionType$$Type } from "com.gregtechceu.gtceu.api.data.medicalcondition.MedicalCondition$IdleProgressionType"
import { $MedicalConditionTracker$$Type } from "com.gregtechceu.gtceu.common.capability.MedicalConditionTracker"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $MedicalCondition {
static readonly "CODEC": $Codec<$MedicalCondition>
static readonly "CONDITIONS": $Map<string, $MedicalCondition>
readonly "canBePermanent": boolean
readonly "color": integer
readonly "idleProgressionRate": float
readonly "idleProgressionType": $MedicalCondition$IdleProgressionType
readonly "maxProgression": float
readonly "name": string
readonly "symptoms": $Set<$Symptom$ConfiguredSymptom>

constructor(string0: string, int1: integer, int2: integer, idleProgressionType3: $MedicalCondition$IdleProgressionType$$Type, boolean4: boolean, ...configuredSymptom5s: $Symptom$ConfiguredSymptom$$Type[])
constructor(string0: string, int1: integer, int2: integer, ...configuredSymptom3s: $Symptom$ConfiguredSymptom$$Type[])
constructor(string0: string, int1: integer, int2: integer, idleProgressionType3: $MedicalCondition$IdleProgressionType$$Type, float4: float, boolean5: boolean, ...configuredSymptom6s: $Symptom$ConfiguredSymptom$$Type[])

public "getDamageSource"(medicalConditionTracker0: $MedicalConditionTracker$$Type): $DamageSource
public "getDamageSource"(level0: $Level$$Type): $DamageSource
public "getName"(): string
public "getRecipeModifier"(): $Consumer<$GTRecipeBuilder>
public "setRecipeModifier"(consumer0: $Consumer$$Type<$GTRecipeBuilder$$Type>): $MedicalCondition
get "recipeModifier"(): $Consumer<$GTRecipeBuilder>
set "recipeModifier"(value: $Consumer$$Type<$GTRecipeBuilder$$Type>)
}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.GTLayerPattern$Builder" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $GTLayerPattern$Layer$Builder$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.GTLayerPattern$Layer$Builder"
import { $GTLayerPattern } from "com.gregtechceu.gtceu.api.data.worldgen.GTLayerPattern"

export class $GTLayerPattern$Builder {
public "build"(): $GTLayerPattern
public "layer"(consumer0: $Consumer$$Type<$GTLayerPattern$Layer$Builder$$Type>): $GTLayerPattern$Builder
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.properties.HazardProperty" {
import { $IMaterialProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.IMaterialProperty"
import { $HazardProperty$HazardTrigger, $HazardProperty$HazardTrigger$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.HazardProperty$HazardTrigger"
import { $MaterialProperties$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.MaterialProperties"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MedicalCondition, $MedicalCondition$$Type } from "com.gregtechceu.gtceu.api.data.medicalcondition.MedicalCondition"
import { $Material } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"

export class $HazardProperty implements $IMaterialProperty {
readonly "applyToDerivatives": boolean
readonly "condition": $MedicalCondition
readonly "hazardTrigger": $HazardProperty$HazardTrigger
readonly "progressionMultiplier": float

constructor(hazardTrigger0: $HazardProperty$HazardTrigger$$Type, medicalCondition1: $MedicalCondition$$Type, float2: float, boolean3: boolean)

public static "getValidHazardMaterial"(itemStack0: $ItemStack$$Type): $Material
public "verifyProperty"(materialProperties0: $MaterialProperties$$Type): void
}
}

declare module "com.gregtechceu.gtceu.api.data.tag.TagPrefix$BlockConstructor" {
import { $TagPrefix$$Type } from "com.gregtechceu.gtceu.api.data.tag.TagPrefix"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"

export interface $TagPrefix$BlockConstructor {
"create"(properties0: $BlockBehaviour$Properties$$Type, tagPrefix1: $TagPrefix$$Type, material2: $Material$$Type): $Block
}

export namespace $TagPrefix$BlockConstructor {
const probejs$$marker: never
}
export abstract class $TagPrefix$BlockConstructor$$Static implements $TagPrefix$BlockConstructor {
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties" {
import { $IMaterialProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.IMaterialProperty"
import { $MaterialProperties$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.MaterialProperties"

export class $WireProperties implements $IMaterialProperty {
constructor(long0: long, int1: integer, int2: integer, boolean3: boolean)
constructor(long0: long, int1: integer, int2: integer, boolean3: boolean, int4: integer)
constructor(long0: long, int1: integer, int2: integer)
constructor()

public "copy"(): $WireProperties
public "getAmperage"(): integer
public "getLossPerBlock"(): integer
public "getSuperconductorCriticalTemperature"(): integer
public "getVoltage"(): long
public "isSuperconductor"(): boolean
public "setAmperage"(int0: integer): void
public "setLossPerBlock"(int0: integer): void
public "setSuperconductor"(boolean0: boolean): void
public "setSuperconductorCriticalTemperature"(int0: integer): void
public "setVoltage"(long0: long): void
public "verifyProperty"(materialProperties0: $MaterialProperties$$Type): void
get "amperage"(): integer
get "lossPerBlock"(): integer
get "superconductorCriticalTemperature"(): integer
get "voltage"(): long
get "superconductor"(): boolean
set "amperage"(value: integer)
set "lossPerBlock"(value: integer)
set "superconductor"(value: boolean)
set "superconductorCriticalTemperature"(value: integer)
set "voltage"(value: long)
}
}

declare module "com.gregtechceu.gtceu.api.data.DimensionMarker" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ItemLike } from "net.minecraft.world.level.ItemLike"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $DimensionMarker {
static readonly "MAX_TIER": integer
readonly "tier": integer

constructor(int0: integer, supplier1: $Supplier$$Type<$ItemLike>, string2: string)
constructor(int0: integer, resourceLocation1: $ResourceLocation$$Type, string2: string)

public "getIcon"(): $ItemStack
public "getOverrideName"(): string
public "getTier"(): integer
public "register"(resourceLocation0: $ResourceLocation$$Type): void
get "icon"(): $ItemStack
get "overrideName"(): string
}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.bedrockore.BedrockOreDefinition" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BedrockOreDefinition$Builder } from "com.gregtechceu.gtceu.api.data.worldgen.bedrockore.BedrockOreDefinition$Builder"
import { $WeightedMaterial, $WeightedMaterial$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.bedrockore.WeightedMaterial"
import { $Set, $Set$$Type } from "java.util.Set"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $List, $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $IntList } from "it.unimi.dsi.fastutil.ints.IntList"
import { $IntProvider, $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $BiomeWeightModifier, $BiomeWeightModifier$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.BiomeWeightModifier"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $Material } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"

export class $BedrockOreDefinition {
static readonly "FULL_CODEC": $Codec<$BedrockOreDefinition>
"dimensionFilter": $Set<$ResourceKey<$Level>>

constructor(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, intProvider3: $IntProvider$$Type, int4: integer, int5: integer, int6: integer, list7: $List$$Type<$WeightedMaterial$$Type>, list8: $List$$Type<$BiomeWeightModifier$$Type>, set9: $Set$$Type<$ResourceKey$$Type<$Level$$Type>>)
constructor(int0: integer, int1: integer, intProvider2: $IntProvider$$Type, int3: integer, int4: integer, int5: integer, list6: $List$$Type<$WeightedMaterial$$Type>, list7: $List$$Type<$BiomeWeightModifier$$Type>, set8: $Set$$Type<$ResourceKey$$Type<$Level$$Type>>)

public "biomeWeightModifier"(): $BiomeWeightModifier
public static "builder"(resourceLocation0: $ResourceLocation$$Type): $BedrockOreDefinition$Builder
public "depletedYield"(int0: integer): $BedrockOreDefinition
public "depletedYield"(): integer
public "depletionAmount"(int0: integer): $BedrockOreDefinition
public "depletionAmount"(): integer
public "depletionChance"(): integer
public "depletionChance"(int0: integer): $BedrockOreDefinition
public "dimensionFilter"(): $Set<$ResourceKey<$Level>>
public "dimensionFilter"(set0: $Set$$Type<$ResourceKey$$Type<$Level$$Type>>): $BedrockOreDefinition
public "getAllChances"(): $IntList
public "getAllMaterials"(): $List<$Material>
public "materials"(list0: $List$$Type<$WeightedMaterial$$Type>): $BedrockOreDefinition
public "materials"(): $List<$WeightedMaterial>
public "setOriginalModifiers"(list0: $List$$Type<$BiomeWeightModifier$$Type>): void
public "size"(): integer
public "size"(int0: integer): $BedrockOreDefinition
public "weight"(int0: integer): $BedrockOreDefinition
public "weight"(): integer
public "yield"(): $IntProvider
public "yield"(intProvider0: $IntProvider$$Type): $BedrockOreDefinition
get "allChances"(): $IntList
get "allMaterials"(): $List<$Material>
set "originalModifiers"(value: $List$$Type<$BiomeWeightModifier$$Type>)
}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.generator.veins.LayeredVeinGenerator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $GTLayerPattern$Builder$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.GTLayerPattern$Builder"
import { $List, $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $NonNullSupplier$$Type } from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import { $GTLayerPattern, $GTLayerPattern$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.GTLayerPattern"
import { $GTOreDefinition$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.GTOreDefinition"
import { $VeinGenerator } from "com.gregtechceu.gtceu.api.data.worldgen.generator.VeinGenerator"

export class $LayeredVeinGenerator extends $VeinGenerator {
static readonly "CODEC": $Codec<$LayeredVeinGenerator>

constructor(list0: $List$$Type<$GTLayerPattern$$Type>)
constructor(gTOreDefinition0: $GTOreDefinition$$Type)

public "buildLayerPattern"(consumer0: $Consumer$$Type<$GTLayerPattern$Builder$$Type>): $LayeredVeinGenerator
public "getLayerPatterns"(): $List<$GTLayerPattern>
public "withLayerPattern"(nonNullSupplier0: $NonNullSupplier$$Type<$GTLayerPattern>): $LayeredVeinGenerator
get "layerPatterns"(): $List<$GTLayerPattern>
set "layerPatterns"(value: $List$$Type<$GTLayerPattern$$Type>)
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty" {
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $IMaterialProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.IMaterialProperty"
import { $GTToolType, $GTToolType$$Type } from "com.gregtechceu.gtceu.api.item.tool.GTToolType"
import { $MaterialToolTier } from "com.gregtechceu.gtceu.api.item.tool.MaterialToolTier"
import { $MaterialProperties$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.MaterialProperties"
import { $Object2IntMap } from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"

export class $ToolProperty implements $IMaterialProperty {
constructor(float0: float, float1: float, int2: integer, int3: integer, int4: integer, gTToolType5s: $GTToolType$$Type[])
constructor()
constructor(float0: float, float1: float, int2: integer, int3: integer, gTToolType4s: $GTToolType$$Type[])

public "addEnchantmentForTools"(enchantment0: $Enchantment$$Type, int1: integer): void
public "addTypes"(...gTToolType0s: $GTToolType$$Type[]): $ToolProperty
public "getAttackDamage"(): float
public "getAttackSpeed"(): float
public "getDurability"(): integer
public "getDurabilityMultiplier"(): integer
public "getEnchantability"(): integer
public "getEnchantments"(): $Object2IntMap<$Enchantment>
public "getHarvestLevel"(): integer
public "getHarvestSpeed"(): float
public "getProspectingDepth"(): integer
public "getTier"(material0: $Material$$Type): $MaterialToolTier
public "getTypes"(): $GTToolType[]
public "hasType"(gTToolType0: $GTToolType$$Type): boolean
public "isIgnoreCraftingTools"(): boolean
public "isMagnetic"(): boolean
public "isUnbreakable"(): boolean
public "removeTypes"(...gTToolType0s: $GTToolType$$Type[]): $ToolProperty
public "setAttackDamage"(float0: float): void
public "setAttackSpeed"(float0: float): void
public "setDurability"(int0: integer): void
public "setDurabilityMultiplier"(int0: integer): void
public "setEnchantability"(int0: integer): void
public "setHarvestLevel"(int0: integer): void
public "setHarvestSpeed"(float0: float): void
public "setIgnoreCraftingTools"(boolean0: boolean): void
public "setMagnetic"(boolean0: boolean): void
public "setProspectingDepth"(int0: integer): void
public "setTypes"(gTToolType0s: $GTToolType$$Type[]): void
public "setUnbreakable"(boolean0: boolean): void
public "verifyProperty"(materialProperties0: $MaterialProperties$$Type): void
get "attackDamage"(): float
get "attackSpeed"(): float
get "durability"(): integer
get "durabilityMultiplier"(): integer
get "enchantability"(): integer
get "enchantments"(): $Object2IntMap<$Enchantment>
get "harvestLevel"(): integer
get "harvestSpeed"(): float
get "prospectingDepth"(): integer
get "types"(): $GTToolType[]
get "ignoreCraftingTools"(): boolean
get "magnetic"(): boolean
get "unbreakable"(): boolean
set "attackDamage"(value: float)
set "attackSpeed"(value: float)
set "durability"(value: integer)
set "durabilityMultiplier"(value: integer)
set "enchantability"(value: integer)
set "harvestLevel"(value: integer)
set "harvestSpeed"(value: float)
set "ignoreCraftingTools"(value: boolean)
set "magnetic"(value: boolean)
set "prospectingDepth"(value: integer)
set "types"(value: $GTToolType$$Type[])
set "unbreakable"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.api.data.tag.TagPrefix$BlockItemConstructor" {
import { $TagPrefix$$Type } from "com.gregtechceu.gtceu.api.data.tag.TagPrefix"
import { $BlockItem } from "net.minecraft.world.item.BlockItem"
import { $Item$Properties$$Type } from "net.minecraft.world.item.Item$Properties"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"

export interface $TagPrefix$BlockItemConstructor {
"create"(block0: $Block$$Type, properties1: $Item$Properties$$Type, tagPrefix2: $TagPrefix$$Type, material3: $Material$$Type): $BlockItem
}

export namespace $TagPrefix$BlockItemConstructor {
const probejs$$marker: never
}
export abstract class $TagPrefix$BlockItemConstructor$$Static implements $TagPrefix$BlockItemConstructor {
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty" {
import { $IMaterialProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.IMaterialProperty"
import { $MaterialProperties$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.MaterialProperties"
import { $Material, $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"

export class $IngotProperty implements $IMaterialProperty {
constructor()

public "getArcSmeltingInto"(): $Material
public "getMacerateInto"(): $Material
public "getMagneticMaterial"(): $Material
public "getSmeltingInto"(): $Material
public "setArcSmeltingInto"(material0: $Material$$Type): void
public "setMacerateInto"(material0: $Material$$Type): void
public "setMagneticMaterial"(material0: $Material$$Type): void
public "setSmeltingInto"(material0: $Material$$Type): void
public "verifyProperty"(materialProperties0: $MaterialProperties$$Type): void
get "arcSmeltingInto"(): $Material
get "macerateInto"(): $Material
get "magneticMaterial"(): $Material
get "smeltingInto"(): $Material
set "arcSmeltingInto"(value: $Material$$Type)
set "macerateInto"(value: $Material$$Type)
set "magneticMaterial"(value: $Material$$Type)
set "smeltingInto"(value: $Material$$Type)
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.properties.ItemPipeProperties" {
import { $IMaterialProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.IMaterialProperty"
import { $MaterialProperties$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.MaterialProperties"

export class $ItemPipeProperties implements $IMaterialProperty {
constructor(int0: integer, float1: float)
constructor()

public "getPriority"(): integer
public "getTransferRate"(): float
public "setPriority"(int0: integer): void
public "setTransferRate"(float0: float): void
public "verifyProperty"(materialProperties0: $MaterialProperties$$Type): void
get "priority"(): integer
get "transferRate"(): float
set "priority"(value: integer)
set "transferRate"(value: float)
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.properties.GemProperty" {
import { $IMaterialProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.IMaterialProperty"
import { $MaterialProperties$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.MaterialProperties"

export class $GemProperty implements $IMaterialProperty {
constructor()

public "verifyProperty"(materialProperties0: $MaterialProperties$$Type): void
}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.bedrockore.WeightedMaterial" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Record } from "java.lang.Record"
import { $Material, $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $WeightedEntry } from "com.gregtechceu.gtceu.utils.WeightedEntry"

export class $WeightedMaterial extends $Record implements $WeightedEntry {
static readonly "CODEC": $Codec<$WeightedMaterial>

constructor(material: $Material$$Type, weight: integer)

public "material"(): $Material
public "weight"(): integer
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.properties.HazardProperty$HazardTrigger" {
import { $TagPrefix, $TagPrefix$$Type } from "com.gregtechceu.gtceu.api.data.tag.TagPrefix"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $Map } from "java.util.Map"
import { $HazardProperty$ProtectionType, $HazardProperty$ProtectionType$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.HazardProperty$ProtectionType"
import { $Set, $Set$$Type } from "java.util.Set"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Record } from "java.lang.Record"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $HazardProperty$HazardTrigger extends $Record implements $StringRepresentable {
static readonly "ALL_TRIGGERS": $Map<string, $HazardProperty$HazardTrigger>
static readonly "ANY": $HazardProperty$HazardTrigger
static readonly "INHALATION": $HazardProperty$HazardTrigger
static readonly "NONE": $HazardProperty$HazardTrigger
static readonly "SKIN_CONTACT": $HazardProperty$HazardTrigger

constructor(string0: string, protectionType1: $HazardProperty$ProtectionType$$Type, ...tagPrefix2s: $TagPrefix$$Type[])
constructor(name: string, protectionType: $HazardProperty$ProtectionType$$Type, affectedTagPrefixes: $Set$$Type<$TagPrefix$$Type>)

public "affectedTagPrefixes"(): $Set<$TagPrefix>
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public "isAffected"(tagPrefix0: $TagPrefix$$Type): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "name"(): string
public "protectionType"(): $HazardProperty$ProtectionType
get "serializedName"(): string
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.event.MaterialRegistryEvent" {
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $MaterialRegistryEvent extends $Event implements $IModBusEvent {
constructor()

}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.generator.veins.DikeVeinGenerator$DikeBlockDefinition" {
import { $Either, $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $List, $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $OreConfiguration$TargetBlockState, $OreConfiguration$TargetBlockState$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration$TargetBlockState"
import { $Record } from "java.lang.Record"
import { $Material, $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $WeightedEntry } from "com.gregtechceu.gtceu.utils.WeightedEntry"

export class $DikeVeinGenerator$DikeBlockDefinition extends $Record implements $WeightedEntry {
static readonly "CODEC": $Codec<$DikeVeinGenerator$DikeBlockDefinition>

constructor(material0: $Material$$Type, int1: integer, int2: integer, int3: integer)
constructor(block: $Either$$Type<$List$$Type<$OreConfiguration$TargetBlockState$$Type>, $Material$$Type>, weight: integer, minY: integer, maxY: integer)
constructor(list0: $List$$Type<$OreConfiguration$TargetBlockState$$Type>, int1: integer, int2: integer, int3: integer)

public "block"(): $Either<$List<$OreConfiguration$TargetBlockState>, $Material>
public "maxY"(): integer
public "minY"(): integer
public "weight"(): integer
}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.bedrockfluid.BedrockFluidDefinition$Builder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BedrockFluidDefinition } from "com.gregtechceu.gtceu.api.data.worldgen.bedrockfluid.BedrockFluidDefinition"
import { $Fluid } from "net.minecraft.world.level.material.Fluid"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $BedrockFluidDefinition$Builder {
public "biomeTag"(int0: integer, resourceLocation1: $ResourceLocation$$Type): $BedrockFluidDefinition$Builder
public "biomes"(int0: integer, ...resourceLocation1s: $ResourceLocation$$Type[]): $BedrockFluidDefinition$Builder
public "build"(): $BedrockFluidDefinition
public "copy"(resourceLocation0: $ResourceLocation$$Type): $BedrockFluidDefinition$Builder
public "depletedYield"(int0: integer): $BedrockFluidDefinition$Builder
public "depletionAmount"(int0: integer): $BedrockFluidDefinition$Builder
public "depletionChance"(int0: integer): $BedrockFluidDefinition$Builder
public "dimensions"(...resourceLocation0s: $ResourceLocation$$Type[]): $BedrockFluidDefinition$Builder
public "fluid"(supplier0: $Supplier$$Type<$Fluid>): $BedrockFluidDefinition$Builder
public "maximumYield"(int0: integer): $BedrockFluidDefinition$Builder
public "minimumYield"(int0: integer): $BedrockFluidDefinition$Builder
public "register"(): $BedrockFluidDefinition
public "weight"(int0: integer): $BedrockFluidDefinition$Builder
public "yield"(int0: integer, int1: integer): $BedrockFluidDefinition$Builder
}
}

declare module "com.gregtechceu.gtceu.api.data.medicalcondition.Symptom$ConfiguredSymptom" {
import { $Symptom, $Symptom$$Type } from "com.gregtechceu.gtceu.api.data.medicalcondition.Symptom"

export class $Symptom$ConfiguredSymptom {
readonly "progressionThreshold": float
readonly "relativeHarshness": float
readonly "stages": integer
readonly "symptom": $Symptom

constructor(symptom0: $Symptom$$Type, float1: float)
constructor(symptom0: $Symptom$$Type, int1: integer)
constructor(symptom0: $Symptom$$Type)
constructor(symptom0: $Symptom$$Type, int1: integer, float2: float)

}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.GTLayerPattern$Layer" {
import { $List, $List$$Type } from "java.util.List"
import { $Either, $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $OreConfiguration$TargetBlockState, $OreConfiguration$TargetBlockState$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration$TargetBlockState"
import { $VeinGenerator$VeinEntry } from "com.gregtechceu.gtceu.api.data.worldgen.generator.VeinGenerator$VeinEntry"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $Material, $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"

export class $GTLayerPattern$Layer {
static readonly "CODEC": $Codec<$GTLayerPattern$Layer>
readonly "maxSize": integer
readonly "minSize": integer
readonly "targets": $List<$Either<$List<$OreConfiguration$TargetBlockState>, $Material>>
readonly "weight": integer

constructor(list0: $List$$Type<$Either$$Type<$List$$Type<$OreConfiguration$TargetBlockState$$Type>, $Material$$Type>>, int1: integer, int2: integer, int3: integer)

public "asVeinEntries"(): $Stream<$VeinGenerator$VeinEntry>
public "rollBlock"(randomSource0: $RandomSource$$Type): $Either<$List<$OreConfiguration$TargetBlockState>, $Material>
}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.bedrockfluid.BedrockFluidDefinition" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $Set, $Set$$Type } from "java.util.Set"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Pair } from "com.mojang.datafixers.util.Pair"
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $BedrockFluidDefinition$Builder } from "com.gregtechceu.gtceu.api.data.worldgen.bedrockfluid.BedrockFluidDefinition$Builder"
import { $Fluid } from "net.minecraft.world.level.material.Fluid"
import { $BiomeWeightModifier, $BiomeWeightModifier$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.BiomeWeightModifier"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $BedrockFluidDefinition {
static readonly "FULL_CODEC": $Codec<$BedrockFluidDefinition>
static readonly "YIELD": $MapCodec<$Pair<integer, integer>>

constructor(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, supplier6: $Supplier$$Type<$Fluid>, list7: $List$$Type<$BiomeWeightModifier$$Type>, set8: $Set$$Type<$ResourceKey$$Type<$Level$$Type>>)
constructor(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, supplier7: $Supplier$$Type<$Fluid>, list8: $List$$Type<$BiomeWeightModifier$$Type>, set9: $Set$$Type<$ResourceKey$$Type<$Level$$Type>>)

public static "builder"(resourceLocation0: $ResourceLocation$$Type): $BedrockFluidDefinition$Builder
public "getBiomeWeightModifier"(): $BiomeWeightModifier
public "getDepletedYield"(): integer
public "getDepletionAmount"(): integer
public "getDepletionChance"(): integer
public "getDimensionFilter"(): $Set<$ResourceKey<$Level>>
public "getMaximumYield"(): integer
public "getMinimumYield"(): integer
public "getStoredFluid"(): $Supplier<$Fluid>
public "getWeight"(): integer
public "setDepletedYield"(int0: integer): void
public "setDepletionAmount"(int0: integer): void
public "setDepletionChance"(int0: integer): void
public "setDimensionFilter"(set0: $Set$$Type<$ResourceKey$$Type<$Level$$Type>>): void
public "setMaximumYield"(int0: integer): void
public "setMinimumYield"(int0: integer): void
public "setOriginalModifiers"(list0: $List$$Type<$BiomeWeightModifier$$Type>): void
public "setStoredFluid"(supplier0: $Supplier$$Type<$Fluid>): void
public "setWeight"(int0: integer): void
get "dimensionFilter"(): $Set<$ResourceKey<$Level>>
set "dimensionFilter"(value: $Set$$Type<$ResourceKey$$Type<$Level$$Type>>)
get "biomeWeightModifier"(): $BiomeWeightModifier
get "depletedYield"(): integer
get "depletionAmount"(): integer
get "depletionChance"(): integer
get "maximumYield"(): integer
get "minimumYield"(): integer
get "storedFluid"(): $Supplier<$Fluid>
get "weight"(): integer
set "depletedYield"(value: integer)
set "depletionAmount"(value: integer)
set "depletionChance"(value: integer)
set "maximumYield"(value: integer)
set "minimumYield"(value: integer)
set "originalModifiers"(value: $List$$Type<$BiomeWeightModifier$$Type>)
set "storedFluid"(value: $Supplier$$Type<$Fluid>)
set "weight"(value: integer)
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.IMaterialRegistryManager$Phase" {
import { $Enum } from "java.lang.Enum"

export class $IMaterialRegistryManager$Phase extends $Enum<$IMaterialRegistryManager$Phase> {
static readonly "CLOSED": $IMaterialRegistryManager$Phase
static readonly "FROZEN": $IMaterialRegistryManager$Phase
static readonly "OPEN": $IMaterialRegistryManager$Phase
static readonly "PRE": $IMaterialRegistryManager$Phase

public static "valueOf"(string0: string): $IMaterialRegistryManager$Phase
public static "values"(): $IMaterialRegistryManager$Phase[]
}
}

declare module "com.gregtechceu.gtceu.api.data.medicalcondition.MedicalCondition$IdleProgressionType" {
import { $Enum } from "java.lang.Enum"

export class $MedicalCondition$IdleProgressionType extends $Enum<$MedicalCondition$IdleProgressionType> {
static readonly "HEAL": $MedicalCondition$IdleProgressionType
static readonly "NONE": $MedicalCondition$IdleProgressionType
static readonly "UNTREATED_PROGRESSION": $MedicalCondition$IdleProgressionType

public static "valueOf"(string0: string): $MedicalCondition$IdleProgressionType
public static "values"(): $MedicalCondition$IdleProgressionType[]
}
}

declare module "com.gregtechceu.gtceu.api.data.tag.TagPrefix$OreType" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $Record } from "java.lang.Record"
import { $Material } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $BlockBehaviour$Properties } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"

export class $TagPrefix$OreType extends $Record {
constructor(stoneType: $Supplier$$Type<$BlockState>, material: $Supplier$$Type<$Material>, template: $Supplier$$Type<$BlockBehaviour$Properties>, baseModelLocation: $ResourceLocation$$Type, isDoubleDrops: boolean, isSand: boolean, shouldDropAsItem: boolean)

public "baseModelLocation"(): $ResourceLocation
public "isDoubleDrops"(): boolean
public "isSand"(): boolean
public "material"(): $Supplier<$Material>
public "shouldDropAsItem"(): boolean
public "stoneType"(): $Supplier<$BlockState>
public "template"(): $Supplier<$BlockBehaviour$Properties>
get "doubleDrops"(): boolean
get "sand"(): boolean
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.stack.ItemMaterialInfo" {
import { $Reference2LongMap$$Type } from "it.unimi.dsi.fastutil.objects.Reference2LongMap"
import { $List, $List$$Type } from "java.util.List"
import { $MaterialStack, $MaterialStack$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.stack.MaterialStack"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"

export class $ItemMaterialInfo {
constructor(...materialStack0s: $MaterialStack$$Type[])
constructor(list0: $List$$Type<$MaterialStack$$Type>)
constructor(reference2LongMap0: $Reference2LongMap$$Type<$Material$$Type>)

public "addMaterialStacks"(list0: $List$$Type<$MaterialStack$$Type>): void
public "getMaterial"(): $MaterialStack
public "getMaterials"(): $List<$MaterialStack>
get "material"(): $MaterialStack
get "materials"(): $List<$MaterialStack>
}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.WorldGenLayers" {
import { $IWorldGenLayer } from "com.gregtechceu.gtceu.api.data.worldgen.IWorldGenLayer"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Set, $Set$$Type } from "java.util.Set"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $RuleTest, $RuleTest$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest"

export class $WorldGenLayers extends $Enum<$WorldGenLayers> implements $IWorldGenLayer, $StringRepresentable {
static readonly "DEEPSLATE": $WorldGenLayers
static readonly "ENDSTONE": $WorldGenLayers
static readonly "NETHERRACK": $WorldGenLayers
static readonly "STONE": $WorldGenLayers

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public static "getByName"(string0: string): $IWorldGenLayer
public "getLevels"(): $Set<$ResourceLocation>
public "getSerializedName"(): string
public "getTarget"(): $RuleTest
public "isApplicableForLevel"(resourceLocation0: $ResourceLocation$$Type): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "registerAll"(): void
public "setLevels"(set0: $Set$$Type<$ResourceLocation$$Type>): void
public "setTarget"(ruleTest0: $RuleTest$$Type): void
public static "valueOf"(string0: string): $WorldGenLayers
public static "values"(): $WorldGenLayers[]
get "levels"(): $Set<$ResourceLocation>
get "serializedName"(): string
get "target"(): $RuleTest
set "levels"(value: $Set$$Type<$ResourceLocation$$Type>)
set "target"(value: $RuleTest$$Type)
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.properties.WoodProperty" {
import { $IMaterialProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.IMaterialProperty"
import { $MaterialProperties$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.MaterialProperties"

export class $WoodProperty implements $IMaterialProperty {
constructor()

public "verifyProperty"(materialProperties0: $MaterialProperties$$Type): void
}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.generator.veins.GeodeVeinGenerator$GeodeBlockSettings" {
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $Either, $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $BlockStateProvider, $BlockStateProvider$$Type } from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import { $List, $List$$Type } from "java.util.List"
import { $TagPrefix, $TagPrefix$$Type } from "com.gregtechceu.gtceu.api.data.tag.TagPrefix"
import { $Codec } from "com.mojang.serialization.Codec"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Record } from "java.lang.Record"
import { $Material, $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"

export class $GeodeVeinGenerator$GeodeBlockSettings extends $Record {
static readonly "CODEC": $Codec<$GeodeVeinGenerator$GeodeBlockSettings>

constructor(fillingProvider: $Either$$Type<$BlockStateProvider$$Type, $Material$$Type>, innerLayerProvider: $Either$$Type<$BlockStateProvider$$Type, $Material$$Type>, alternateInnerLayerProvider: $Either$$Type<$BlockStateProvider$$Type, $Material$$Type>, middleLayerProvider: $Either$$Type<$BlockStateProvider$$Type, $Material$$Type>, outerLayerProvider: $Either$$Type<$BlockStateProvider$$Type, $Material$$Type>, innerPlacements: $List$$Type<$BlockState$$Type>, cannotReplace: $TagKey$$Type<$Block$$Type>, invalidBlocks: $TagKey$$Type<$Block$$Type>, providerMaterialPrefix: $TagPrefix$$Type)

public "alternateInnerLayerProvider"(): $Either<$BlockStateProvider, $Material>
public "cannotReplace"(): $TagKey<$Block>
public "fillingProvider"(): $Either<$BlockStateProvider, $Material>
public "innerLayerProvider"(): $Either<$BlockStateProvider, $Material>
public "innerPlacements"(): $List<$BlockState>
public "invalidBlocks"(): $TagKey<$Block>
public "middleLayerProvider"(): $Either<$BlockStateProvider, $Material>
public "outerLayerProvider"(): $Either<$BlockStateProvider, $Material>
public "providerMaterialPrefix"(): $TagPrefix
}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.generator.VeinGenerator" {
import { $List, $List$$Type } from "java.util.List"
import { $Either, $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $Codec } from "com.mojang.serialization.Codec"
import { $IntList } from "it.unimi.dsi.fastutil.ints.IntList"
import { $Stream } from "java.util.stream.Stream"
import { $OreConfiguration$TargetBlockState$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration$TargetBlockState"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $VeinGenerator$VeinEntry } from "com.gregtechceu.gtceu.api.data.worldgen.generator.VeinGenerator$VeinEntry"
import { $GTOreDefinition$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.GTOreDefinition"
import { $ObjectIntPair } from "it.unimi.dsi.fastutil.objects.ObjectIntPair"
import { $Material, $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"

export class $VeinGenerator {
static readonly "DIRECT_CODEC": $Codec<$VeinGenerator>
static readonly "REGISTRY_CODEC": $Codec<$Codec<$VeinGenerator>>

constructor()
constructor(gTOreDefinition0: $GTOreDefinition$$Type)

public "codec"(): $Codec<$VeinGenerator>
public "copy"(): $VeinGenerator
public "getAllBlocks"(): $List<$BlockState>
public "getAllChances"(): $IntList
public "getAllEntries"(): $List<$VeinGenerator$VeinEntry>
public "getAllMaterials"(): $List<$Material>
public "getValidMaterialsChances"(): $List<$ObjectIntPair<$Material>>
public static "mapTarget"(either0: $Either$$Type<$List$$Type<$OreConfiguration$TargetBlockState$$Type>, $Material$$Type>, int1: integer): $Stream<$VeinGenerator$VeinEntry>
public static "mapTarget"(either0: $Either$$Type<$List$$Type<$OreConfiguration$TargetBlockState$$Type>, $Material$$Type>): $Stream<$Either<$BlockState, $Material>>
get "allBlocks"(): $List<$BlockState>
get "allChances"(): $IntList
get "allEntries"(): $List<$VeinGenerator$VeinEntry>
get "allMaterials"(): $List<$Material>
get "validMaterialsChances"(): $List<$ObjectIntPair<$Material>>
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty$GasTier" {
import { $Enum } from "java.lang.Enum"
import { $Supplier$$Type } from "com.google.common.base.Supplier"
import { $FluidIngredient } from "com.gregtechceu.gtceu.api.recipe.ingredient.FluidIngredient"

export class $BlastProperty$GasTier extends $Enum<$BlastProperty$GasTier> {
static readonly "HIGH": $BlastProperty$GasTier
static readonly "HIGHER": $BlastProperty$GasTier
static readonly "HIGHEST": $BlastProperty$GasTier
static readonly "LOW": $BlastProperty$GasTier
static readonly "MID": $BlastProperty$GasTier
static readonly "VALUES": $BlastProperty$GasTier[]

public "getFluid"(): $FluidIngredient
public "setFluid"(supplier0: $Supplier$$Type<$FluidIngredient>): void
public static "valueOf"(string0: string): $BlastProperty$GasTier
public static "values"(): $BlastProperty$GasTier[]
get "fluid"(): $FluidIngredient
set "fluid"(value: $Supplier$$Type<$FluidIngredient>)
}
}

declare module "com.gregtechceu.gtceu.api.data.tag.TagPrefix" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $TagPrefix$BlockProperties, $TagPrefix$BlockProperties$$Type } from "com.gregtechceu.gtceu.api.data.tag.TagPrefix$BlockProperties"
import { $TagPrefix$ItemConstructor, $TagPrefix$ItemConstructor$$Type } from "com.gregtechceu.gtceu.api.data.tag.TagPrefix$ItemConstructor"
import { $TagPrefix$BlockItemConstructor, $TagPrefix$BlockItemConstructor$$Type } from "com.gregtechceu.gtceu.api.data.tag.TagPrefix$BlockItemConstructor"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Item } from "net.minecraft.world.item.Item"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $TagPrefix$OreType } from "com.gregtechceu.gtceu.api.data.tag.TagPrefix$OreType"
import { $ItemLike, $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $Map } from "java.util.Map"
import { $TagPrefix$BlockConstructor, $TagPrefix$BlockConstructor$$Type } from "com.gregtechceu.gtceu.api.data.tag.TagPrefix$BlockConstructor"
import { $BiConsumer, $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $MaterialStack, $MaterialStack$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.stack.MaterialStack"
import { $MaterialIconType, $MaterialIconType$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialIconType"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $RenderType } from "net.minecraft.client.renderer.RenderType"
import { $List, $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Material, $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $Table } from "com.google.common.collect.Table"

export class $TagPrefix {
static readonly "CODEC": $Codec<$TagPrefix>
static readonly "NULL_PREFIX": $TagPrefix
static readonly "ORES": $Map<$TagPrefix, $TagPrefix$OreType>
static readonly "PREFIXES": $Map<string, $TagPrefix>
static readonly "block": $TagPrefix
static readonly "bolt": $TagPrefix
static readonly "cableGtDouble": $TagPrefix
static readonly "cableGtHex": $TagPrefix
static readonly "cableGtOctal": $TagPrefix
static readonly "cableGtQuadruple": $TagPrefix
static readonly "cableGtSingle": $TagPrefix
static readonly "crushed": $TagPrefix
static readonly "crushedPurified": $TagPrefix
static readonly "crushedRefined": $TagPrefix
static readonly "door": $TagPrefix
static readonly "dust": $TagPrefix
static readonly "dustImpure": $TagPrefix
static readonly "dustPure": $TagPrefix
static readonly "dustSmall": $TagPrefix
static readonly "dustTiny": $TagPrefix
static readonly "dye": $TagPrefix
static readonly "fence": $TagPrefix
static readonly "fenceGate": $TagPrefix
static readonly "foil": $TagPrefix
static readonly "frameGt": $TagPrefix
static readonly "gear": $TagPrefix
static readonly "gearSmall": $TagPrefix
static readonly "gem": $TagPrefix
static readonly "gemChipped": $TagPrefix
static readonly "gemExquisite": $TagPrefix
static readonly "gemFlawed": $TagPrefix
static readonly "gemFlawless": $TagPrefix
static readonly "ingot": $TagPrefix
static readonly "ingotHot": $TagPrefix
readonly "invertedName": boolean
"langValue": string
static readonly "lens": $TagPrefix
static readonly "log": $TagPrefix
readonly "name": string
static readonly "nugget": $TagPrefix
static readonly "ore": $TagPrefix
static readonly "oreAndesite": $TagPrefix
static readonly "oreBasalt": $TagPrefix
static readonly "oreBlackstone": $TagPrefix
static readonly "oreDeepslate": $TagPrefix
static readonly "oreDiorite": $TagPrefix
static readonly "oreEndstone": $TagPrefix
static readonly "oreGranite": $TagPrefix
static readonly "oreGravel": $TagPrefix
static readonly "oreMarble": $TagPrefix
static readonly "oreNetherrack": $TagPrefix
static readonly "oreRedGranite": $TagPrefix
static readonly "oreRedSand": $TagPrefix
static readonly "oreSand": $TagPrefix
static readonly "oreTuff": $TagPrefix
static readonly "pipeHugeFluid": $TagPrefix
static readonly "pipeHugeItem": $TagPrefix
static readonly "pipeHugeRestrictive": $TagPrefix
static readonly "pipeLargeFluid": $TagPrefix
static readonly "pipeLargeItem": $TagPrefix
static readonly "pipeLargeRestrictive": $TagPrefix
static readonly "pipeNonupleFluid": $TagPrefix
static readonly "pipeNormalFluid": $TagPrefix
static readonly "pipeNormalItem": $TagPrefix
static readonly "pipeNormalRestrictive": $TagPrefix
static readonly "pipeQuadrupleFluid": $TagPrefix
static readonly "pipeSmallFluid": $TagPrefix
static readonly "pipeSmallItem": $TagPrefix
static readonly "pipeSmallRestrictive": $TagPrefix
static readonly "pipeTinyFluid": $TagPrefix
static readonly "planks": $TagPrefix
static readonly "plate": $TagPrefix
static readonly "plateDense": $TagPrefix
static readonly "plateDouble": $TagPrefix
static readonly "rawOre": $TagPrefix
static readonly "rawOreBlock": $TagPrefix
static readonly "ring": $TagPrefix
static readonly "rock": $TagPrefix
static readonly "rod": $TagPrefix
static readonly "rodLong": $TagPrefix
static readonly "rotor": $TagPrefix
static readonly "round": $TagPrefix
static readonly "screw": $TagPrefix
static readonly "slab": $TagPrefix
static readonly "spring": $TagPrefix
static readonly "springSmall": $TagPrefix
static readonly "stairs": $TagPrefix
static readonly "surfaceRock": $TagPrefix
static readonly "toolHeadBuzzSaw": $TagPrefix
static readonly "toolHeadChainsaw": $TagPrefix
static readonly "toolHeadDrill": $TagPrefix
static readonly "toolHeadScrewdriver": $TagPrefix
static readonly "toolHeadWireCutter": $TagPrefix
static readonly "toolHeadWrench": $TagPrefix
static readonly "turbineBlade": $TagPrefix
static readonly "wireFine": $TagPrefix
static readonly "wireGtDouble": $TagPrefix
static readonly "wireGtHex": $TagPrefix
static readonly "wireGtOctal": $TagPrefix
static readonly "wireGtQuadruple": $TagPrefix
static readonly "wireGtSingle": $TagPrefix

constructor(string0: string)
constructor(string0: string, boolean1: boolean)

public "addSecondaryMaterial"(materialStack0: $MaterialStack$$Type): void
public "blockConstructor"(): $TagPrefix$BlockConstructor
public "blockConstructor"(blockConstructor0: $TagPrefix$BlockConstructor$$Type): $TagPrefix
public "blockItemConstructor"(): $TagPrefix$BlockItemConstructor
public "blockItemConstructor"(blockItemConstructor0: $TagPrefix$BlockItemConstructor$$Type): $TagPrefix
public "blockProperties"(blockProperties0: $TagPrefix$BlockProperties$$Type): $TagPrefix
public "blockProperties"(supplier0: $Supplier$$Type<$Supplier<$RenderType>>, unaryOperator1: $UnaryOperator$$Type<$BlockBehaviour$Properties$$Type>): $TagPrefix
public "blockProperties"(): $TagPrefix$BlockProperties
public "customTagPath"(string0: string, biFunction1: $BiFunction$$Type<$TagPrefix$$Type, $Material$$Type, $TagKey<$Item>>): $TagPrefix
public "customTagPredicate"(string0: string, boolean1: boolean, predicate2: $Predicate$$Type<$Material$$Type>): $TagPrefix
public "defaultTagPath"(string0: string, boolean1: boolean): $TagPrefix
public "defaultTagPath"(string0: string): $TagPrefix
public "doGenerateBlock"(): boolean
public "doGenerateBlock"(material0: $Material$$Type): boolean
public "doGenerateItem"(): boolean
public "doGenerateItem"(material0: $Material$$Type): boolean
public "enableRecycling"(): $TagPrefix
public "generateBlock"(boolean0: boolean): $TagPrefix
public "generateItem"(boolean0: boolean): $TagPrefix
public "generateRecycling"(): boolean
public "generateRecycling"(boolean0: boolean): $TagPrefix
public "generationCondition"(predicate0: $Predicate$$Type<$Material$$Type>): $TagPrefix
public "generationCondition"(): $Predicate<$Material>
public static "get"(string0: string): $TagPrefix
public "getAllBlockTags"(material0: $Material$$Type): $TagKey<$Block>[]
public "getAllItemTags"(material0: $Material$$Type): $TagKey<$Item>[]
public "getBlockTags"(material0: $Material$$Type): $TagKey<$Block>[]
public "getIgnored"(): $Map<$Material, $Supplier<$ItemLike>[]>
public "getItemFromTable"(material0: $Material$$Type): $Supplier<$ItemLike>
public "getItemParentTags"(): $TagKey<$Item>[]
public "getItemTags"(material0: $Material$$Type): $TagKey<$Item>[]
public "getLocalizedName"(material0: $Material$$Type): $MutableComponent
public "getLowerCaseName"(): string
public "getMaterialAmount"(material0: $Material$$Type): long
public "getMaterialIconType"(material0: $Material$$Type): $MaterialIconType
public static "getPrefix"(string0: string, tagPrefix1: $TagPrefix$$Type): $TagPrefix
public static "getPrefix"(string0: string): $TagPrefix
public "getUnlocalizedName"(): string
public "getUnlocalizedName"(material0: $Material$$Type): string
public "hasItemTable"(): boolean
public "idPattern"(): string
public "idPattern"(string0: string): $TagPrefix
public static "init"(): void
public "invertedName"(): boolean
public "isAmountModified"(material0: $Material$$Type): boolean
public "isEmpty"(): boolean
public "isIgnored"(material0: $Material$$Type): boolean
public "itemConstructor"(): $TagPrefix$ItemConstructor
public "itemConstructor"(itemConstructor0: $TagPrefix$ItemConstructor$$Type): $TagPrefix
public "itemTable"(supplier0: $Supplier$$Type<$Table<$TagPrefix, $Material, $Supplier<$ItemLike>>>): $TagPrefix
public "langValue"(): string
public "langValue"(string0: string): $TagPrefix
public "materialAmount"(): long
public "materialAmount"(long0: long): $TagPrefix
public "materialIconType"(materialIconType0: $MaterialIconType$$Type): $TagPrefix
public "materialIconType"(): $MaterialIconType
public "maxStackSize"(): integer
public "maxStackSize"(int0: integer): $TagPrefix
public "miningToolTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $TagPrefix
public "miningToolTag"(): $Set<$TagKey<$Block>>
public "modifyMaterialAmount"(material0: $Material$$Type, float1: float): void
public "name"(): string
public static "oreTagPrefix"(string0: string, tagKey1: $TagKey$$Type<$Block$$Type>): $TagPrefix
public "prefixOnlyTagPath"(string0: string): $TagPrefix
public "prefixTagPath"(string0: string): $TagPrefix
public "registerOre"(supplier0: $Supplier$$Type<$BlockState>, supplier1: $Supplier$$Type<$Material>, properties2: $BlockBehaviour$Properties$$Type, resourceLocation3: $ResourceLocation$$Type, boolean4: boolean): $TagPrefix
public "registerOre"(supplier0: $Supplier$$Type<$BlockState>, supplier1: $Supplier$$Type<$Material>, properties2: $BlockBehaviour$Properties$$Type, resourceLocation3: $ResourceLocation$$Type, boolean4: boolean, boolean5: boolean, boolean6: boolean): $TagPrefix
public "registerOre"(supplier0: $Supplier$$Type<$BlockState>, supplier1: $Supplier$$Type<$Material>, properties2: $BlockBehaviour$Properties$$Type, resourceLocation3: $ResourceLocation$$Type): $TagPrefix
public "registerOre"(supplier0: $Supplier$$Type<$BlockState>, supplier1: $Supplier$$Type<$Material>, supplier2: $Supplier$$Type<$BlockBehaviour$Properties>, resourceLocation3: $ResourceLocation$$Type, boolean4: boolean, boolean5: boolean, boolean6: boolean): $TagPrefix
public "removeIgnored"(material0: $Material$$Type): void
public "secondaryMaterials"(): $List<$MaterialStack>
public "setIgnored"(material0: $Material$$Type, ...supplier1s: $Supplier$$Type<$ItemLike$$Type>[]): void
public "setIgnored"(material0: $Material$$Type): void
public "setIgnored"(material0: $Material$$Type, ...itemLike1s: $ItemLike$$Type[]): void
public "setIgnoredBlock"(material0: $Material$$Type, ...block1s: $Block$$Type[]): void
public "tooltip"(): $BiConsumer<$Material, $List<$Component>>
public "tooltip"(biConsumer0: $BiConsumer$$Type<$Material$$Type, $List$$Type<$Component$$Type>>): $TagPrefix
public "unformattedTagPath"(string0: string): $TagPrefix
public "unformattedTagPath"(string0: string, boolean1: boolean): $TagPrefix
public "unificationEnabled"(): boolean
public "unificationEnabled"(boolean0: boolean): $TagPrefix
public static "values"(): $Collection<$TagPrefix>
get "ignored"(): $Map<$Material, $Supplier<$ItemLike>[]>
get "itemParentTags"(): $TagKey<$Item>[]
get "lowerCaseName"(): string
get "unlocalizedName"(): string
get "empty"(): boolean
set "ignored"(value: $Material$$Type)
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.Element" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Element {
constructor(long0: long, long1: long, long2: long, string3: string, string4: string, string5: string, boolean6: boolean)

public "decayTo"(string0: string): void
public "decayTo"(): string
public "halfLifeSeconds"(): long
public "halfLifeSeconds"(long0: long): void
public "isIsotope"(boolean0: boolean): void
public "isIsotope"(): boolean
public "mass"(): long
public "name"(): string
public "name"(string0: string): void
public "neutrons"(long0: long): void
public "neutrons"(): long
public "protons"(long0: long): void
public "protons"(): long
public "symbol"(): string
public "symbol"(string0: string): void
get "isotope"(): boolean
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.IMaterialRegistryManager" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $IMaterialRegistryManager$Phase } from "com.gregtechceu.gtceu.api.data.chemical.material.IMaterialRegistryManager$Phase"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Collection } from "java.util.Collection"
import { $MaterialRegistry } from "com.gregtechceu.gtceu.api.data.chemical.material.registry.MaterialRegistry"
import { $Material, $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"

export interface $IMaterialRegistryManager {
"canModifyMaterials"(): boolean
"codec"(): $Codec<$Material>
"createRegistry"(string0: string): $MaterialRegistry
"getKey"(material0: $Material$$Type): $ResourceLocation
"getMaterial"(string0: string): $Material
"getPhase"(): $IMaterialRegistryManager$Phase
"getRegisteredMaterials"(): $Collection<$Material>
"getRegistries"(): $Collection<$MaterialRegistry>
"getRegistry"(string0: string): $MaterialRegistry
"getRegistry"(int0: integer): $MaterialRegistry
get "phase"(): $IMaterialRegistryManager$Phase
get "registeredMaterials"(): $Collection<$Material>
get "registries"(): $Collection<$MaterialRegistry>
}

export namespace $IMaterialRegistryManager {
const probejs$$marker: never
}
export abstract class $IMaterialRegistryManager$$Static implements $IMaterialRegistryManager {
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty" {
import { $IMaterialProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.IMaterialProperty"
import { $List } from "java.util.List"
import { $MaterialProperties$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.MaterialProperties"
import { $Collection$$Type } from "java.util.Collection"
import { $ObjectIntPair } from "it.unimi.dsi.fastutil.objects.ObjectIntPair"
import { $Material, $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"

export class $OreProperty implements $IMaterialProperty {
constructor()
constructor(int0: integer, int1: integer, boolean2: boolean)
constructor(int0: integer, int1: integer)

public "addOreByProducts"(...material0s: $Material$$Type[]): void
public "getByProductMultiplier"(): integer
public "getDirectSmeltResult"(): $Material
public "getOreByProduct"(int0: integer): $Material
public "getOreByProduct"(int0: integer, material1: $Material$$Type): $Material
public "getOreByProducts"(): $List<$Material>
public "getOreMultiplier"(): integer
public "getSeparatedInto"(): $List<$Material>
public "getWashedIn"(): $ObjectIntPair<$Material>
public "isEmissive"(): boolean
public "setByProductMultiplier"(int0: integer): void
public "setDirectSmeltResult"(material0: $Material$$Type): void
public "setEmissive"(boolean0: boolean): void
public "setOreByProducts"(collection0: $Collection$$Type<$Material$$Type>): void
public "setOreByProducts"(...material0s: $Material$$Type[]): void
public "setOreMultiplier"(int0: integer): void
public "setSeparatedInto"(...material0s: $Material$$Type[]): void
public "setWashedIn"(material0: $Material$$Type): void
public "setWashedIn"(material0: $Material$$Type, int1: integer): void
public "verifyProperty"(materialProperties0: $MaterialProperties$$Type): void
get "byProductMultiplier"(): integer
get "directSmeltResult"(): $Material
get "oreByProducts"(): $List<$Material>
get "oreMultiplier"(): integer
get "separatedInto"(): $List<$Material>
get "washedIn"(): $ObjectIntPair<$Material>
get "emissive"(): boolean
set "byProductMultiplier"(value: integer)
set "directSmeltResult"(value: $Material$$Type)
set "emissive"(value: boolean)
set "oreByProducts"(value: $Collection$$Type<$Material$$Type>)
set "oreByProducts"(value: $Material$$Type[])
set "oreMultiplier"(value: integer)
set "separatedInto"(value: $Material$$Type[])
set "washedIn"(value: $Material$$Type)
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.properties.HazardProperty$ProtectionType" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Enum } from "java.lang.Enum"
import { $Set } from "java.util.Set"
import { $ArmorItem$Type } from "net.minecraft.world.item.ArmorItem$Type"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $HazardProperty$ProtectionType extends $Enum<$HazardProperty$ProtectionType> {
static readonly "FULL": $HazardProperty$ProtectionType
static readonly "HANDS": $HazardProperty$ProtectionType
static readonly "MASK": $HazardProperty$ProtectionType
static readonly "NONE": $HazardProperty$ProtectionType

public "damageEquipment"(player0: $Player$$Type, int1: integer): void
public "getCurioSlots"(): $Set<string>
public "getEquipmentTypes"(): $Set<$ArmorItem$Type>
public "isProtected"(livingEntity0: $LivingEntity$$Type): boolean
public static "valueOf"(string0: string): $HazardProperty$ProtectionType
public static "values"(): $HazardProperty$ProtectionType[]
get "curioSlots"(): $Set<string>
get "equipmentTypes"(): $Set<$ArmorItem$Type>
}
}

declare module "com.gregtechceu.gtceu.api.data.tag.TagPrefix$Conditions" {
import { $Predicate } from "java.util.function.Predicate"
import { $Material } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"

export class $TagPrefix$Conditions {
static readonly "hasBlastProperty": $Predicate<$Material>
static readonly "hasDustProperty": $Predicate<$Material>
static readonly "hasGemProperty": $Predicate<$Material>
static readonly "hasIngotProperty": $Predicate<$Material>
static readonly "hasNoCraftingToolProperty": $Predicate<$Material>
static readonly "hasOreProperty": $Predicate<$Material>
static readonly "hasRotorProperty": $Predicate<$Material>
static readonly "hasToolProperty": $Predicate<$Material>

constructor()

}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey$EmptyProperty" {
import { $IMaterialProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.IMaterialProperty"
import { $MaterialProperties$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.MaterialProperties"

export class $PropertyKey$EmptyProperty implements $IMaterialProperty {
public "verifyProperty"(materialProperties0: $MaterialProperties$$Type): void
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.properties.ArmorProperty" {
import { $IMaterialProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.IMaterialProperty"
import { $ArmorProperty$ArmorMaterial } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.ArmorProperty$ArmorMaterial"
import { $MaterialProperties$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.MaterialProperties"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $Map$$Type } from "java.util.Map"
import { $ArmorProperty$CustomTextureGetter, $ArmorProperty$CustomTextureGetter$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.ArmorProperty$CustomTextureGetter"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ArmorItem$Type$$Type } from "net.minecraft.world.item.ArmorItem$Type"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"

export class $ArmorProperty implements $IMaterialProperty {
constructor(int0: integer, int1s: integer[])

public "getArmorMaterial"(): $ArmorProperty$ArmorMaterial
public "getCustomTextureGetter"(): $ArmorProperty$CustomTextureGetter
public "isDyeable"(): boolean
public "setCustomTextureGetter"(customTextureGetter0: $ArmorProperty$CustomTextureGetter$$Type): void
public "setDurabilityMultiplier"(int0: integer): void
public "setDyeable"(boolean0: boolean): void
public "setEnchantability"(int0: integer): void
public "setKnockbackResistance"(float0: float): void
public "setName"(string0: string): void
public "setProtectionValues"(map0: $Map$$Type<$ArmorItem$Type$$Type, integer>): void
public "setRepairIngredient"(supplier0: $Supplier$$Type<$Ingredient>): void
public "setSound"(supplier0: $Supplier$$Type<$SoundEvent>): void
public "setToughness"(float0: float): void
public "verifyProperty"(materialProperties0: $MaterialProperties$$Type): void
get "armorMaterial"(): $ArmorProperty$ArmorMaterial
get "customTextureGetter"(): $ArmorProperty$CustomTextureGetter
get "dyeable"(): boolean
set "customTextureGetter"(value: $ArmorProperty$CustomTextureGetter$$Type)
set "durabilityMultiplier"(value: integer)
set "dyeable"(value: boolean)
set "enchantability"(value: integer)
set "knockbackResistance"(value: float)
set "name"(value: string)
set "protectionValues"(value: $Map$$Type<$ArmorItem$Type$$Type, integer>)
set "repairIngredient"(value: $Supplier$$Type<$Ingredient>)
set "sound"(value: $Supplier$$Type<$SoundEvent>)
set "toughness"(value: float)
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialFlag" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MaterialFlag {
public static "getByName"(string0: string): $MaterialFlag
}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.BiomeWeightModifier" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $HolderSet, $HolderSet$$Type } from "net.minecraft.core.HolderSet"
import { $ToIntFunction } from "java.util.function.ToIntFunction"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $Biome, $Biome$$Type } from "net.minecraft.world.level.biome.Biome"

export class $BiomeWeightModifier implements $ToIntFunction<$Holder<$Biome>> {
static readonly "CODEC": $Codec<$BiomeWeightModifier>
static readonly "EMPTY": $BiomeWeightModifier

constructor(supplier0: $Supplier$$Type<$HolderSet<$Biome>>, int1: integer)

public "applyAsInt"(holder0: $Holder$$Type<$Biome$$Type>): integer
get "addedWeight"(): integer
set "addedWeight"(value: integer)
get "biomes"(): $Supplier<$HolderSet<$Biome>>
set "biomes"(value: $Supplier$$Type<$HolderSet$$Type<$Biome$$Type>>)
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialIconSet" {
import { $Map } from "java.util.Map"

export class $MaterialIconSet {
static readonly "BRIGHT": $MaterialIconSet
static readonly "CERTUS": $MaterialIconSet
static readonly "DIAMOND": $MaterialIconSet
static readonly "DULL": $MaterialIconSet
static readonly "EMERALD": $MaterialIconSet
static readonly "FINE": $MaterialIconSet
static readonly "FLINT": $MaterialIconSet
static readonly "FLUID": $MaterialIconSet
static readonly "GEM_HORIZONTAL": $MaterialIconSet
static readonly "GEM_VERTICAL": $MaterialIconSet
static readonly "GLASS": $MaterialIconSet
static readonly "ICON_SETS": $Map<string, $MaterialIconSet>
static readonly "LAPIS": $MaterialIconSet
static readonly "LIGNITE": $MaterialIconSet
static readonly "MAGNETIC": $MaterialIconSet
static readonly "METALLIC": $MaterialIconSet
static readonly "NETHERSTAR": $MaterialIconSet
static readonly "OPAL": $MaterialIconSet
static readonly "QUARTZ": $MaterialIconSet
static readonly "RADIOACTIVE": $MaterialIconSet
static readonly "ROUGH": $MaterialIconSet
static readonly "RUBY": $MaterialIconSet
static readonly "SAND": $MaterialIconSet
static readonly "SHINY": $MaterialIconSet
static readonly "WOOD": $MaterialIconSet
readonly "id": integer
readonly "isRootIconset": boolean
readonly "name": string
readonly "parentIconset": $MaterialIconSet

constructor(string0: string, materialIconSet1: $MaterialIconSet$$Type, boolean2: boolean)
constructor(string0: string, materialIconSet1: $MaterialIconSet$$Type)
constructor(string0: string)

public static "getByName"(string0: string): $MaterialIconSet
public static "init"(): void
}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.generator.veins.ClassicVeinGenerator$Layer$Builder" {
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ClassicVeinGenerator$Layer } from "com.gregtechceu.gtceu.api.data.worldgen.generator.veins.ClassicVeinGenerator$Layer"

export class $ClassicVeinGenerator$Layer$Builder {
public "block"(supplier0: $Supplier$$Type<$Block>): $ClassicVeinGenerator$Layer$Builder
public "build"(): $ClassicVeinGenerator$Layer
public "mat"(material0: $Material$$Type): $ClassicVeinGenerator$Layer$Builder
public "size"(int0: integer): $ClassicVeinGenerator$Layer$Builder
public "state"(supplier0: $Supplier$$Type<$BlockState>): $ClassicVeinGenerator$Layer$Builder
public "state"(blockState0: $BlockState$$Type): $ClassicVeinGenerator$Layer$Builder
}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.generator.VeinGenerator$VeinEntry" {
import { $Either, $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Record } from "java.lang.Record"
import { $Material, $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $Function$$Type } from "java.util.function.Function"

export class $VeinGenerator$VeinEntry extends $Record {
constructor(vein: $Either$$Type<$BlockState$$Type, $Material$$Type>, chance: integer)

public "chance"(): integer
public "map"<T>(function0: $Function$$Type<$BlockState$$Type, T>, function1: $Function$$Type<$Material$$Type, T>): T
public "mapToBlockState"(): $BlockState
public "mapToMaterial"(): $Material
public static "ofBlock"(blockState0: $BlockState$$Type, int1: integer): $VeinGenerator$VeinEntry
public static "ofMaterial"(material0: $Material$$Type, int1: integer): $VeinGenerator$VeinEntry
public "vein"(): $Either<$BlockState, $Material>
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.properties.ArmorProperty$ArmorMaterial" {
import { $ArmorMaterial } from "net.minecraft.world.item.ArmorMaterial"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $ArmorProperty, $ArmorProperty$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.ArmorProperty"
import { $ArmorItem$Type$$Type } from "net.minecraft.world.item.ArmorItem$Type"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"

export class $ArmorProperty$ArmorMaterial implements $ArmorMaterial {
constructor(armorProperty0: $ArmorProperty$$Type)

public "getArmorProperty"(): $ArmorProperty
public "getDefenseForType"(type0: $ArmorItem$Type$$Type): integer
public "getDurabilityForType"(type0: $ArmorItem$Type$$Type): integer
public "getEnchantmentValue"(): integer
public "getEquipSound"(): $SoundEvent
public "getKnockbackResistance"(): float
public "getName"(): string
public "getRepairIngredient"(): $Ingredient
public "getToughness"(): float
get "armorProperty"(): $ArmorProperty
get "enchantmentValue"(): integer
get "equipSound"(): $SoundEvent
get "knockbackResistance"(): float
get "name"(): string
get "repairIngredient"(): $Ingredient
get "toughness"(): float
}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.generator.veins.GeodeVeinGenerator" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $IntProvider, $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $GeodeCrackSettings, $GeodeCrackSettings$$Type } from "net.minecraft.world.level.levelgen.GeodeCrackSettings"
import { $GeodeLayerSettings, $GeodeLayerSettings$$Type } from "net.minecraft.world.level.levelgen.GeodeLayerSettings"
import { $GTOreDefinition$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.GTOreDefinition"
import { $GeodeVeinGenerator$GeodeBlockSettings, $GeodeVeinGenerator$GeodeBlockSettings$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.generator.veins.GeodeVeinGenerator$GeodeBlockSettings"
import { $VeinGenerator } from "com.gregtechceu.gtceu.api.data.worldgen.generator.VeinGenerator"

export class $GeodeVeinGenerator extends $VeinGenerator {
static readonly "CHANCE_RANGE": $Codec<double>
static readonly "CODEC": $Codec<$GeodeVeinGenerator>
"distributionPoints": $IntProvider
"geodeBlockSettings": $GeodeVeinGenerator$GeodeBlockSettings
"geodeCrackSettings": $GeodeCrackSettings
"geodeLayerSettings": $GeodeLayerSettings
"invalidBlocksThreshold": integer
"maxGenOffset": integer
"minGenOffset": integer
"noiseMultiplier": double
"outerWallDistance": $IntProvider
"placementsRequireLayer0Alternate": boolean
"pointOffset": $IntProvider
"useAlternateLayer0Chance": double
"usePotentialPlacementsChance": double

constructor(gTOreDefinition0: $GTOreDefinition$$Type)
constructor(geodeBlockSettings0: $GeodeVeinGenerator$GeodeBlockSettings$$Type, geodeLayerSettings1: $GeodeLayerSettings$$Type, geodeCrackSettings2: $GeodeCrackSettings$$Type, double3: double, double4: double, boolean5: boolean, intProvider6: $IntProvider$$Type, intProvider7: $IntProvider$$Type, intProvider8: $IntProvider$$Type, int9: integer, int10: integer, double11: double, int12: integer)

public "distributionPoints"(intProvider0: $IntProvider$$Type): $GeodeVeinGenerator
public "geodeBlockSettings"(geodeBlockSettings0: $GeodeVeinGenerator$GeodeBlockSettings$$Type): $GeodeVeinGenerator
public "geodeCrackSettings"(geodeCrackSettings0: $GeodeCrackSettings$$Type): $GeodeVeinGenerator
public "geodeLayerSettings"(geodeLayerSettings0: $GeodeLayerSettings$$Type): $GeodeVeinGenerator
public "invalidBlocksThreshold"(int0: integer): $GeodeVeinGenerator
public "maxGenOffset"(int0: integer): $GeodeVeinGenerator
public "minGenOffset"(int0: integer): $GeodeVeinGenerator
public "noiseMultiplier"(double0: double): $GeodeVeinGenerator
public "outerWallDistance"(intProvider0: $IntProvider$$Type): $GeodeVeinGenerator
public "placementsRequireLayer0Alternate"(boolean0: boolean): $GeodeVeinGenerator
public "pointOffset"(intProvider0: $IntProvider$$Type): $GeodeVeinGenerator
public "useAlternateLayer0Chance"(double0: double): $GeodeVeinGenerator
public "usePotentialPlacementsChance"(double0: double): $GeodeVeinGenerator
}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.IWorldGenLayer" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Set } from "java.util.Set"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $RuleTest } from "net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest"

export interface $IWorldGenLayer extends $StringRepresentable {
"getLevels"(): $Set<$ResourceLocation>
"getSerializedName"(): string
"getTarget"(): $RuleTest
"isApplicableForLevel"(resourceLocation0: $ResourceLocation$$Type): boolean
get "levels"(): $Set<$ResourceLocation>
get "serializedName"(): string
get "target"(): $RuleTest
}

export namespace $IWorldGenLayer {
const CODEC: $Codec<$IWorldGenLayer>
const NOWHERE: $IWorldGenLayer
function fromEnum<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
function fromEnumWithMapping<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
function keys(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
}
export abstract class $IWorldGenLayer$$Static implements $IWorldGenLayer {
static readonly "CODEC": $Codec<$IWorldGenLayer>
static readonly "NOWHERE": $IWorldGenLayer

static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.generator.veins.ClassicVeinGenerator$Layer" {
import { $BulkSectionAccess$$Type } from "net.minecraft.world.level.chunk.BulkSectionAccess"
import { $Either, $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $List, $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $OreConfiguration$TargetBlockState, $OreConfiguration$TargetBlockState$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration$TargetBlockState"
import { $LevelChunkSection$$Type } from "net.minecraft.world.level.chunk.LevelChunkSection"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $GTOreDefinition$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.GTOreDefinition"
import { $Material, $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"

export class $ClassicVeinGenerator$Layer {
static readonly "CODEC": $Codec<$ClassicVeinGenerator$Layer>
readonly "target": $Either<$List<$OreConfiguration$TargetBlockState>, $Material>

constructor(either0: $Either$$Type<$List$$Type<$OreConfiguration$TargetBlockState$$Type>, $Material$$Type>, int1: integer)

public "copy"(): $ClassicVeinGenerator$Layer
public "place"(blockState0: $BlockState$$Type, bulkSectionAccess1: $BulkSectionAccess$$Type, levelChunkSection2: $LevelChunkSection$$Type, long3: long, gTOreDefinition4: $GTOreDefinition$$Type, blockPos5: $BlockPos$$Type): void
public "size"(): integer
get "layers"(): integer
set "layers"(value: integer)
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.ChemicalHelper" {
import { $TagPrefix, $TagPrefix$$Type } from "com.gregtechceu.gtceu.api.data.tag.TagPrefix"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ItemMaterialInfo } from "com.gregtechceu.gtceu.api.data.chemical.material.stack.ItemMaterialInfo"
import { $Pair } from "com.mojang.datafixers.util.Pair"
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $List } from "java.util.List"
import { $ItemLike, $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $Optional } from "java.util.Optional"
import { $MaterialEntry, $MaterialEntry$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.stack.MaterialEntry"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Material, $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $MaterialStack, $MaterialStack$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.stack.MaterialStack"

export class $ChemicalHelper {
constructor()

public static "get"(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type, int2: integer): $ItemStack
public static "get"(materialEntry0: $MaterialEntry$$Type, int1: integer): $ItemStack
public static "get"(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type): $ItemStack
public static "getAllItemInfos"(): $List<$Pair<$ItemStack, $ItemMaterialInfo>>
public static "getBlock"(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type): $Block
public static "getBlock"(materialEntry0: $MaterialEntry$$Type): $Block
public static "getBlockTag"(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type): $TagKey<$Block>
public static "getBlocks"(materialEntry0: $MaterialEntry$$Type): $List<$Block>
public static "getDust"(materialStack0: $MaterialStack$$Type): $ItemStack
public static "getDust"(material0: $Material$$Type, long1: long): $ItemStack
public static "getGem"(materialStack0: $MaterialStack$$Type): $ItemStack
public static "getIngot"(material0: $Material$$Type, long1: long): $ItemStack
public static "getIngotOrDust"(material0: $Material$$Type, long1: long): $ItemStack
public static "getIngotOrDust"(materialStack0: $MaterialStack$$Type): $ItemStack
public static "getItems"(materialEntry0: $MaterialEntry$$Type): $List<$ItemLike>
public static "getMaterial"(fluid0: $Fluid$$Type): $Material
public static "getMaterialEntry"(itemLike0: $ItemLike$$Type): $MaterialEntry
public static "getMaterialEntry"(tagKey0: $TagKey$$Type<$Item$$Type>): $MaterialEntry
public static "getMaterialInfo"(object0: any): $ItemMaterialInfo
public static "getMaterialStack"(itemLike0: $ItemLike$$Type): $MaterialStack
public static "getMaterialStack"(itemStack0: $ItemStack$$Type): $MaterialStack
public static "getMaterialStack"(materialEntry0: $MaterialEntry$$Type): $MaterialStack
public static "getOrePrefix"(blockState0: $BlockState$$Type): $Optional<$TagPrefix>
public static "getPrefix"(itemLike0: $ItemLike$$Type): $TagPrefix
public static "getTag"(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type): $TagKey<$Item>
}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.generator.indicators.SurfaceIndicatorGenerator" {
import { $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $SurfaceIndicatorGenerator$IndicatorPlacement$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.generator.indicators.SurfaceIndicatorGenerator$IndicatorPlacement"
import { $Codec } from "com.mojang.serialization.Codec"
import { $FloatProvider$$Type } from "net.minecraft.util.valueproviders.FloatProvider"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $GTOreDefinition$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.GTOreDefinition"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $IndicatorGenerator } from "com.gregtechceu.gtceu.api.data.worldgen.generator.IndicatorGenerator"

export class $SurfaceIndicatorGenerator extends $IndicatorGenerator {
static readonly "CODEC": $Codec<$SurfaceIndicatorGenerator>

constructor(gTOreDefinition0: $GTOreDefinition$$Type)
constructor(either0: $Either$$Type<$BlockState$$Type, $Material$$Type>, intProvider1: $IntProvider$$Type, floatProvider2: $FloatProvider$$Type, indicatorPlacement3: $SurfaceIndicatorGenerator$IndicatorPlacement$$Type)

public "block"(block0: $Block$$Type): $SurfaceIndicatorGenerator
public "density"(floatProvider0: $FloatProvider$$Type): $SurfaceIndicatorGenerator
public "density"(float0: float): $SurfaceIndicatorGenerator
public "placement"(indicatorPlacement0: $SurfaceIndicatorGenerator$IndicatorPlacement$$Type): $SurfaceIndicatorGenerator
public "radius"(intProvider0: $IntProvider$$Type): $SurfaceIndicatorGenerator
public "radius"(int0: integer): $SurfaceIndicatorGenerator
public "state"(blockState0: $BlockState$$Type): $SurfaceIndicatorGenerator
public "surfaceRock"(material0: $Material$$Type): $SurfaceIndicatorGenerator
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.registry.MaterialRegistry" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Collection } from "java.util.Collection"
import { $GTRegistrate } from "com.gregtechceu.gtceu.api.registry.registrate.GTRegistrate"
import { $Material, $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $GTRegistry$String } from "com.gregtechceu.gtceu.api.registry.GTRegistry$String"
import { $Spliterator } from "java.util.Spliterator"

export class $MaterialRegistry extends $GTRegistry$String<$Material> {
constructor(string0: string)

public "forEach"(consumer0: $Consumer$$Type<$Material$$Type>): void
public "getAllMaterials"(): $Collection<$Material>
public "getFallbackMaterial"(): $Material
public "getModid"(): string
public "getNetworkId"(): integer
public "getRegistrate"(): $GTRegistrate
public "register"(material0: $Material$$Type): void
public "setFallbackMaterial"(material0: $Material$$Type): void
public "spliterator"(): $Spliterator<$Material>
get "allMaterials"(): $Collection<$Material>
get "fallbackMaterial"(): $Material
get "modid"(): string
get "networkId"(): integer
get "registrate"(): $GTRegistrate
set "fallbackMaterial"(value: $Material$$Type)
}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.GTLayerPattern" {
import { $GTLayerPattern$Builder } from "com.gregtechceu.gtceu.api.data.worldgen.GTLayerPattern$Builder"
import { $List, $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $GTLayerPattern$Layer, $GTLayerPattern$Layer$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.GTLayerPattern$Layer"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $RuleTest$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest"

export class $GTLayerPattern {
static readonly "CODEC": $Codec<$GTLayerPattern>
readonly "layers": $List<$GTLayerPattern$Layer>

constructor(list0: $List$$Type<$GTLayerPattern$Layer$$Type>)

public static "builder"(...ruleTest0s: $RuleTest$$Type[]): $GTLayerPattern$Builder
public "rollNext"(layer0: $GTLayerPattern$Layer$$Type, randomSource1: $RandomSource$$Type): $GTLayerPattern$Layer
}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.GTLayerPattern$Layer$Builder" {
import { $GTLayerPattern$Layer } from "com.gregtechceu.gtceu.api.data.worldgen.GTLayerPattern$Layer"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $GTLayerPattern$Layer$Builder {
public "block"(supplier0: $Supplier$$Type<$Block>): $GTLayerPattern$Layer$Builder
public "build"(): $GTLayerPattern$Layer
public "mat"(material0: $Material$$Type): $GTLayerPattern$Layer$Builder
public "size"(int0: integer, int1: integer): $GTLayerPattern$Layer$Builder
public "state"(supplier0: $Supplier$$Type<$BlockState>): $GTLayerPattern$Layer$Builder
public "state"(blockState0: $BlockState$$Type): $GTLayerPattern$Layer$Builder
public "weight"(int0: integer): $GTLayerPattern$Layer$Builder
}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.bedrockore.BedrockOreDefinition$Builder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List$$Type } from "java.util.List"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $WeightedMaterial$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.bedrockore.WeightedMaterial"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $BedrockOreDefinition } from "com.gregtechceu.gtceu.api.data.worldgen.bedrockore.BedrockOreDefinition"

export class $BedrockOreDefinition$Builder {
public "biomeTag"(int0: integer, resourceLocation1: $ResourceLocation$$Type): $BedrockOreDefinition$Builder
public "biomes"(int0: integer, ...resourceLocation1s: $ResourceLocation$$Type[]): $BedrockOreDefinition$Builder
public "copy"(resourceLocation0: $ResourceLocation$$Type): $BedrockOreDefinition$Builder
public "depletedYield"(int0: integer): $BedrockOreDefinition$Builder
public "depletionAmount"(int0: integer): $BedrockOreDefinition$Builder
public "depletionChance"(int0: integer): $BedrockOreDefinition$Builder
public "dimensions"(...resourceLocation0s: $ResourceLocation$$Type[]): $BedrockOreDefinition$Builder
public "material"(material0: $Material$$Type, int1: integer): $BedrockOreDefinition$Builder
public "materials"(list0: $List$$Type<$WeightedMaterial$$Type>): $BedrockOreDefinition$Builder
public "register"(): $BedrockOreDefinition
public "size"(int0: integer): $BedrockOreDefinition$Builder
public "weight"(int0: integer): $BedrockOreDefinition$Builder
public "yield"(int0: integer, int1: integer): $BedrockOreDefinition$Builder
public "yield"(intProvider0: $IntProvider$$Type): $BedrockOreDefinition$Builder
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.properties.RotorProperty" {
import { $IMaterialProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.IMaterialProperty"
import { $MaterialProperties$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.MaterialProperties"

export class $RotorProperty implements $IMaterialProperty {
constructor(int0: integer, int1: integer, float2: float, int3: integer)

public "getDamage"(): float
public "getDurability"(): integer
public "getEfficiency"(): integer
public "getPower"(): integer
public "setDamage"(int0: integer): void
public "setDurability"(int0: integer): void
public "setEfficiency"(int0: integer): void
public "setPower"(int0: integer): void
public "verifyProperty"(materialProperties0: $MaterialProperties$$Type): void
get "damage"(): float
get "durability"(): integer
get "efficiency"(): integer
get "power"(): integer
set "damage"(value: integer)
set "durability"(value: integer)
set "efficiency"(value: integer)
set "power"(value: integer)
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.stack.MaterialEntry" {
import { $TagPrefix, $TagPrefix$$Type } from "com.gregtechceu.gtceu.api.data.tag.TagPrefix"
import { $Record } from "java.lang.Record"
import { $Material, $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"

export class $MaterialEntry extends $Record {
static readonly "NULL_ENTRY": $MaterialEntry

constructor(tagPrefix: $TagPrefix$$Type, material: $Material$$Type)
constructor(tagPrefix0: $TagPrefix$$Type)

public "isEmpty"(): boolean
public "isIgnored"(): boolean
public "material"(): $Material
public static "of"(object0: any): $MaterialEntry
public "tagPrefix"(): $TagPrefix
get "empty"(): boolean
get "ignored"(): boolean
}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.generator.veins.StandardVeinGenerator" {
import { $Either, $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $List, $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $NonNullSupplier, $NonNullSupplier$$Type } from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import { $OreConfiguration$TargetBlockState, $OreConfiguration$TargetBlockState$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration$TargetBlockState"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $GTOreDefinition$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.GTOreDefinition"
import { $Material, $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $VeinGenerator } from "com.gregtechceu.gtceu.api.data.worldgen.generator.VeinGenerator"

export class $StandardVeinGenerator extends $VeinGenerator {
static readonly "CODEC": $Codec<$StandardVeinGenerator>
static readonly "CODEC_LIST": $Codec<$StandardVeinGenerator>
static readonly "CODEC_SEPARATE": $Codec<$StandardVeinGenerator>

constructor(block0: $Block$$Type, block1: $Block$$Type, block2: $Block$$Type)
constructor(either0: $Either$$Type<$List$$Type<$OreConfiguration$TargetBlockState$$Type>, $Material$$Type>)
constructor(gTOreDefinition0: $GTOreDefinition$$Type)

public "withBlock"(nonNullSupplier0: $NonNullSupplier$$Type<$Block>): $StandardVeinGenerator
public "withMaterial"(material0: $Material$$Type): $StandardVeinGenerator
public "withNetherBlock"(nonNullSupplier0: $NonNullSupplier$$Type<$Block>): $StandardVeinGenerator
get "block"(): $NonNullSupplier<$Block>
set "block"(value: $NonNullSupplier$$Type<$Block$$Type>)
get "blocks"(): $Either<$List<$OreConfiguration$TargetBlockState>, $Material>
set "blocks"(value: $Either$$Type<$List$$Type<$OreConfiguration$TargetBlockState$$Type>, $Material$$Type>)
get "deepBlock"(): $NonNullSupplier<$Block>
set "deepBlock"(value: $NonNullSupplier$$Type<$Block$$Type>)
get "netherBlock"(): $NonNullSupplier<$Block>
set "netherBlock"(value: $NonNullSupplier$$Type<$Block$$Type>)
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.stack.MaterialStack" {
import { $Record } from "java.lang.Record"
import { $Material, $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"

export class $MaterialStack extends $Record {
static readonly "EMPTY": $MaterialStack

constructor(material: $Material$$Type, amount: long)

public "add"(long0: long): $MaterialStack
public "amount"(): long
public "copy"(): $MaterialStack
public "divide"(long0: long): $MaterialStack
public static "fromString"(charSequence0: charseq): $MaterialStack
public "isEmpty"(): boolean
public "material"(): $Material
public "multiply"(long0: long): $MaterialStack
public "multiply"(float0: float): $MaterialStack
get "empty"(): boolean
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty" {
import { $IMaterialProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.IMaterialProperty"
import { $MaterialProperties$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.MaterialProperties"

export class $DustProperty implements $IMaterialProperty {
constructor()
constructor(int0: integer, int1: integer)

public "getBurnTime"(): integer
public "getHarvestLevel"(): integer
public "setBurnTime"(int0: integer): void
public "setHarvestLevel"(int0: integer): void
public "verifyProperty"(materialProperties0: $MaterialProperties$$Type): void
get "burnTime"(): integer
get "harvestLevel"(): integer
set "burnTime"(value: integer)
set "harvestLevel"(value: integer)
}
}

declare module "com.gregtechceu.gtceu.api.data.medicalcondition.Symptom$Effect" {
import { $Symptom$ConfiguredSymptom$$Type } from "com.gregtechceu.gtceu.api.data.medicalcondition.Symptom$ConfiguredSymptom"
import { $MedicalConditionTracker$$Type } from "com.gregtechceu.gtceu.common.capability.MedicalConditionTracker"
import { $MedicalCondition$$Type } from "com.gregtechceu.gtceu.api.data.medicalcondition.MedicalCondition"
import { $Symptom$$Type } from "com.gregtechceu.gtceu.api.data.medicalcondition.Symptom"

export interface $Symptom$Effect {
"apply"(medicalConditionTracker0: $MedicalConditionTracker$$Type, medicalCondition1: $MedicalCondition$$Type, configuredSymptom2: $Symptom$ConfiguredSymptom$$Type, symptom3: $Symptom$$Type, int4: integer): void
}

export namespace $Symptom$Effect {
const probejs$$marker: never
}
export abstract class $Symptom$Effect$$Static implements $Symptom$Effect {
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.Material$MaterialInfo" {
import { $IntList, $IntList$$Type } from "it.unimi.dsi.fastutil.ints.IntList"
import { $ImmutableList, $ImmutableList$$Type } from "com.google.common.collect.ImmutableList"
import { $MaterialIconSet, $MaterialIconSet$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialIconSet"
import { $MaterialStack, $MaterialStack$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.stack.MaterialStack"
import { $Element, $Element$$Type } from "com.gregtechceu.gtceu.api.data.chemical.Element"

export class $Material$MaterialInfo {
public "getColors"(): $IntList
public "getComponentList"(): $ImmutableList<$MaterialStack>
public "getElement"(): $Element
public "getIconSet"(): $MaterialIconSet
public "getOverriddenName"(): string
public "isHasFluidColor"(): boolean
public "setColors"(intList0: $IntList$$Type): $Material$MaterialInfo
public "setComponentList"(immutableList0: $ImmutableList$$Type<$MaterialStack$$Type>): $Material$MaterialInfo
public "setComponents"(...materialStack0s: $MaterialStack$$Type[]): $Material$MaterialInfo
public "setElement"(element0: $Element$$Type): $Material$MaterialInfo
public "setHasFluidColor"(boolean0: boolean): $Material$MaterialInfo
public "setIconSet"(materialIconSet0: $MaterialIconSet$$Type): $Material$MaterialInfo
public "setOverriddenName"(string0: string): $Material$MaterialInfo
get "colors"(): $IntList
get "componentList"(): $ImmutableList<$MaterialStack>
get "element"(): $Element
get "iconSet"(): $MaterialIconSet
get "overriddenName"(): string
get "hasFluidColor"(): boolean
set "colors"(value: $IntList$$Type)
set "componentList"(value: $ImmutableList$$Type<$MaterialStack$$Type>)
set "components"(value: $MaterialStack$$Type[])
set "element"(value: $Element$$Type)
set "hasFluidColor"(value: boolean)
set "iconSet"(value: $MaterialIconSet$$Type)
set "overriddenName"(value: string)
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidPipeProperties" {
import { $IMaterialProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.IMaterialProperty"
import { $List$$Type } from "java.util.List"
import { $MaterialProperties$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.MaterialProperties"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection } from "java.util.Collection"
import { $FluidAttribute, $FluidAttribute$$Type } from "com.gregtechceu.gtceu.api.fluids.attribute.FluidAttribute"
import { $FluidStack, $FluidStack$$Type } from "net.minecraftforge.fluids.FluidStack"
import { $FluidState$$Type } from "com.gregtechceu.gtceu.api.fluids.FluidState"
import { $IPropertyFluidFilter } from "com.gregtechceu.gtceu.api.capability.IPropertyFluidFilter"

export class $FluidPipeProperties implements $IMaterialProperty, $IPropertyFluidFilter {
static readonly "MAX_PIPE_CHANNELS": integer

constructor(int0: integer, int1: integer, boolean2: boolean, boolean3: boolean, boolean4: boolean, boolean5: boolean, int6: integer)
constructor(int0: integer, int1: integer, boolean2: boolean, boolean3: boolean, boolean4: boolean, boolean5: boolean)

public "and"(predicate0: $Predicate$$Type<$FluidStack$$Type>): $Predicate<$FluidStack>
public "appendTooltips"(list0: $List$$Type<$Component$$Type>, boolean1: boolean, boolean2: boolean): void
public "canContain"(fluidState0: $FluidState$$Type): boolean
public "canContain"(fluidAttribute0: $FluidAttribute$$Type): boolean
public "getChannels"(): integer
public "getContainedAttributes"(): $Collection<$FluidAttribute>
public "getMaxFluidTemperature"(): integer
public "getThroughput"(): integer
public "isAcidProof"(): boolean
public "isCryoProof"(): boolean
public static "isEqual"<T>(object0: any): $Predicate<T>
public "isGasProof"(): boolean
public "isPlasmaProof"(): boolean
public "negate"(): $Predicate<$FluidStack>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public "or"(predicate0: $Predicate$$Type<$FluidStack$$Type>): $Predicate<$FluidStack>
public "setCanContain"(fluidAttribute0: $FluidAttribute$$Type, boolean1: boolean): void
public "setChannels"(int0: integer): void
public "setCryoProof"(boolean0: boolean): void
public "setGasProof"(boolean0: boolean): void
public "setMaxFluidTemperature"(int0: integer): void
public "setPlasmaProof"(boolean0: boolean): void
public "setThroughput"(int0: integer): void
public "test"(fluidStack0: $FluidStack$$Type): boolean
public "verifyProperty"(materialProperties0: $MaterialProperties$$Type): void
get "channels"(): integer
get "containedAttributes"(): $Collection<$FluidAttribute>
get "maxFluidTemperature"(): integer
get "throughput"(): integer
get "acidProof"(): boolean
get "cryoProof"(): boolean
get "gasProof"(): boolean
get "plasmaProof"(): boolean
set "channels"(value: integer)
set "cryoProof"(value: boolean)
set "gasProof"(value: boolean)
set "maxFluidTemperature"(value: integer)
set "plasmaProof"(value: boolean)
set "throughput"(value: integer)
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.Material" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $TagPrefix$$Type } from "com.gregtechceu.gtceu.api.data.tag.TagPrefix"
import { $FluidBuilder } from "com.gregtechceu.gtceu.api.fluids.FluidBuilder"
import { $MaterialProperties } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.MaterialProperties"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $Material$MaterialInfo } from "com.gregtechceu.gtceu.api.data.chemical.material.Material$MaterialInfo"
import { $MaterialFlags } from "com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialFlags"
import { $MaterialFlag$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialFlag"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $Element } from "com.gregtechceu.gtceu.api.data.chemical.Element"
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $IMaterialProperty, $IMaterialProperty$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.IMaterialProperty"
import { $PropertyKey$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey"
import { $List, $List$$Type } from "java.util.List"
import { $MaterialToolTier } from "com.gregtechceu.gtceu.api.item.tool.MaterialToolTier"
import { $ImmutableList } from "com.google.common.collect.ImmutableList"
import { $FluidStorageKey$$Type } from "com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey"
import { $MaterialIconSet, $MaterialIconSet$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialIconSet"
import { $Fluid } from "net.minecraft.world.level.material.Fluid"
import { $FluidStack } from "net.minecraftforge.fluids.FluidStack"
import { $Comparable } from "java.lang.Comparable"
import { $MaterialStack, $MaterialStack$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.stack.MaterialStack"

export class $Material implements $Comparable<$Material> {
public "addFlags"(...materialFlag0s: $MaterialFlag$$Type[]): void
public "compareTo"(material0: $Material$$Type): integer
public "getBlastTemperature"(): integer
public "getBlockHarvestLevel"(): integer
public "getBucket"(): $Item
public "getChemicalFormula"(): string
public "getDefaultTranslation"(): string
public "getElement"(): $Element
public "getFlags"(): $MaterialFlags
public "getFluid"(): $Fluid
public "getFluid"(fluidStorageKey0: $FluidStorageKey$$Type): $Fluid
public "getFluid"(int0: integer): $FluidStack
public "getFluid"(fluidStorageKey0: $FluidStorageKey$$Type, int1: integer): $FluidStack
public "getFluidBuilder"(fluidStorageKey0: $FluidStorageKey$$Type): $FluidBuilder
public "getFluidBuilder"(): $FluidBuilder
public "getFluidTag"(): $TagKey<$Fluid>
public "getHotFluid"(int0: integer): $FluidStack
public "getHotFluid"(): $Fluid
public "getItemTags"(): $List<$TagKey<$Item>>
public "getLayerARGB"(int0: integer): integer
public "getLocalizedName"(): $MutableComponent
public "getMass"(): long
public "getMaterialARGB"(int0: integer): integer
public "getMaterialARGB"(): integer
public "getMaterialComponents"(): $ImmutableList<$MaterialStack>
public "getMaterialIconSet"(): $MaterialIconSet
public "getMaterialInfo"(): $Material$MaterialInfo
public "getMaterialRGB"(int0: integer): integer
public "getMaterialRGB"(): integer
public "getMaterialSecondaryARGB"(): integer
public "getMaterialSecondaryRGB"(): integer
public "getModid"(): string
public "getName"(): string
public "getNeutrons"(): long
public "getProperties"(): $MaterialProperties
public "getProperty"<T extends $IMaterialProperty>(propertyKey0: $PropertyKey$$Type<T>): T
public "getProtons"(): long
public "getResourceLocation"(): $ResourceLocation
public "getToolHarvestLevel"(): integer
public "getToolTier"(): $MaterialToolTier
public "getUnlocalizedName"(): string
public "hasAnyOfFlags"(...materialFlag0s: $MaterialFlag$$Type[]): boolean
public "hasFlag"(materialFlag0: $MaterialFlag$$Type): boolean
public "hasFlags"(...materialFlag0s: $MaterialFlag$$Type[]): boolean
public "hasFluid"(): boolean
public "hasFluidColor"(): boolean
public "hasProperty"<T extends $IMaterialProperty>(propertyKey0: $PropertyKey$$Type<T>): boolean
public "isElement"(): boolean
public "isNull"(): boolean
public "isRadioactive"(): boolean
public "isSolid"(): boolean
public "multiply"(long0: long): $MaterialStack
public "removeProperty"<T extends $IMaterialProperty>(propertyKey0: $PropertyKey$$Type<T>): void
public "setComponents"(...materialStack0s: $MaterialStack$$Type[]): $Material
public "setFormula"(string0: string, boolean1: boolean): $Material
public "setFormula"(string0: string): $Material
public "setItemTags"(list0: $List$$Type<$TagKey$$Type<$Item$$Type>>): void
public "setMaterialARGB"(int0: integer): void
public "setMaterialIconSet"(materialIconSet0: $MaterialIconSet$$Type): void
public "setMaterialSecondaryARGB"(int0: integer): void
public "setProperty"<T extends $IMaterialProperty>(propertyKey0: $PropertyKey$$Type<T>, iMaterialProperty1: $IMaterialProperty$$Type): void
public "shouldGenerateRecipesFor"(tagPrefix0: $TagPrefix$$Type): boolean
public "toCamelCaseString"(): string
public "verifyMaterial"(): void
get "blastTemperature"(): integer
get "blockHarvestLevel"(): integer
get "bucket"(): $Item
get "chemicalFormula"(): string
get "defaultTranslation"(): string
get "element"(): $Element
get "flags"(): $MaterialFlags
get "fluid"(): $Fluid
get "fluidBuilder"(): $FluidBuilder
get "fluidTag"(): $TagKey<$Fluid>
get "hotFluid"(): $Fluid
get "itemTags"(): $List<$TagKey<$Item>>
get "localizedName"(): $MutableComponent
get "mass"(): long
get "materialARGB"(): integer
get "materialComponents"(): $ImmutableList<$MaterialStack>
get "materialIconSet"(): $MaterialIconSet
get "materialInfo"(): $Material$MaterialInfo
get "materialRGB"(): integer
get "materialSecondaryARGB"(): integer
get "materialSecondaryRGB"(): integer
get "modid"(): string
get "name"(): string
get "neutrons"(): long
get "properties"(): $MaterialProperties
get "protons"(): long
get "resourceLocation"(): $ResourceLocation
get "toolHarvestLevel"(): integer
get "toolTier"(): $MaterialToolTier
get "unlocalizedName"(): string
get "element"(): boolean
get "null"(): boolean
get "radioactive"(): boolean
get "solid"(): boolean
set "components"(value: $MaterialStack$$Type[])
set "formula"(value: string)
set "itemTags"(value: $List$$Type<$TagKey$$Type<$Item$$Type>>)
set "materialARGB"(value: integer)
set "materialIconSet"(value: $MaterialIconSet$$Type)
set "materialSecondaryARGB"(value: integer)
}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.generator.veins.VeinedVeinGenerator$VeinBlockDefinition" {
import { $Either, $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $List, $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $OreConfiguration$TargetBlockState, $OreConfiguration$TargetBlockState$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration$TargetBlockState"
import { $Record } from "java.lang.Record"
import { $Material, $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $WeightedEntry } from "com.gregtechceu.gtceu.utils.WeightedEntry"

export class $VeinedVeinGenerator$VeinBlockDefinition extends $Record implements $WeightedEntry {
static readonly "CODEC": $Codec<$VeinedVeinGenerator$VeinBlockDefinition>

constructor(material0: $Material$$Type, int1: integer)
constructor(block: $Either$$Type<$List$$Type<$OreConfiguration$TargetBlockState$$Type>, $Material$$Type>, weight: integer)
constructor(list0: $List$$Type<$OreConfiguration$TargetBlockState$$Type>, int1: integer)

public "block"(): $Either<$List<$OreConfiguration$TargetBlockState>, $Material>
public "weight"(): integer
}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.generator.indicators.SurfaceIndicatorGenerator$IndicatorPlacement" {
import { $BulkSectionAccess } from "net.minecraft.world.level.chunk.BulkSectionAccess"
import { $Either } from "com.mojang.datafixers.util.Either"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $TriFunction } from "org.apache.commons.lang3.function.TriFunction"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Codec } from "com.mojang.serialization.Codec"
import { $WorldGenLevel } from "net.minecraft.world.level.WorldGenLevel"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Material } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"

export class $SurfaceIndicatorGenerator$IndicatorPlacement extends $Enum<$SurfaceIndicatorGenerator$IndicatorPlacement> implements $StringRepresentable {
static readonly "ABOVE": $SurfaceIndicatorGenerator$IndicatorPlacement
static readonly "BELOW": $SurfaceIndicatorGenerator$IndicatorPlacement
static readonly "CODEC": $Codec<$SurfaceIndicatorGenerator$IndicatorPlacement>
static readonly "SURFACE": $SurfaceIndicatorGenerator$IndicatorPlacement
readonly "resolver": $TriFunction<$WorldGenLevel, $BulkSectionAccess, $BlockPos, $BlockPos>
readonly "stateTransformer": $Function<$Either<$BlockState, $Material>, $BlockState>

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public static "getByName"(string0: string): $SurfaceIndicatorGenerator$IndicatorPlacement
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $SurfaceIndicatorGenerator$IndicatorPlacement
public static "values"(): $SurfaceIndicatorGenerator$IndicatorPlacement[]
get "serializedName"(): string
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.properties.IMaterialProperty" {
import { $MaterialProperties$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.MaterialProperties"

export interface $IMaterialProperty {
"verifyProperty"(materialProperties0: $MaterialProperties$$Type): void
}

export namespace $IMaterialProperty {
const probejs$$marker: never
}
export abstract class $IMaterialProperty$$Static implements $IMaterialProperty {
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.properties.ArmorProperty$CustomTextureGetter" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $ArmorProperty$CustomTextureGetter {
"getCustomTexture"(itemStack0: $ItemStack$$Type, entity1: $Entity$$Type, equipmentSlot2: $EquipmentSlot$$Type, boolean3: boolean): $ResourceLocation
}

export namespace $ArmorProperty$CustomTextureGetter {
const probejs$$marker: never
}
export abstract class $ArmorProperty$CustomTextureGetter$$Static implements $ArmorProperty$CustomTextureGetter {
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.properties.MaterialProperties" {
import { $IMaterialProperty, $IMaterialProperty$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.IMaterialProperty"
import { $PropertyKey$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey"
import { $Material, $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"

export class $MaterialProperties {
constructor()

public static "addBaseType"(propertyKey0: $PropertyKey$$Type<any>): void
public "ensureSet"<T extends $IMaterialProperty>(propertyKey0: $PropertyKey$$Type<T>, boolean1: boolean): void
public "ensureSet"<T extends $IMaterialProperty>(propertyKey0: $PropertyKey$$Type<T>): void
public "getMaterial"(): $Material
public "getProperty"<T extends $IMaterialProperty>(propertyKey0: $PropertyKey$$Type<T>): T
public "hasProperty"<T extends $IMaterialProperty>(propertyKey0: $PropertyKey$$Type<T>): boolean
public "isEmpty"(): boolean
public "removeProperty"<T extends $IMaterialProperty>(propertyKey0: $PropertyKey$$Type<T>): void
public "setMaterial"(material0: $Material$$Type): void
public "setProperty"<T extends $IMaterialProperty>(propertyKey0: $PropertyKey$$Type<T>, iMaterialProperty1: $IMaterialProperty$$Type): void
public "verify"(): void
get "material"(): $Material
get "empty"(): boolean
set "material"(value: $Material$$Type)
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty" {
import { $FluidStorage } from "com.gregtechceu.gtceu.api.fluids.store.FluidStorage"
import { $IMaterialProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.IMaterialProperty"
import { $FluidBuilder, $FluidBuilder$$Type } from "com.gregtechceu.gtceu.api.fluids.FluidBuilder"
import { $MaterialProperties$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.MaterialProperties"
import { $FluidStorageKey, $FluidStorageKey$$Type } from "com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey"
import { $GTRegistrate$$Type } from "com.gregtechceu.gtceu.api.registry.registrate.GTRegistrate"
import { $FluidStorage$FluidEntry } from "com.gregtechceu.gtceu.api.fluids.store.FluidStorage$FluidEntry"
import { $Fluid, $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $FluidStack } from "net.minecraftforge.fluids.FluidStack"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $FluidProperty implements $IMaterialProperty, $FluidStorage {
constructor(fluidStorageKey0: $FluidStorageKey$$Type, fluidBuilder1: $FluidBuilder$$Type)
constructor()

public "enqueueRegistration"(fluidStorageKey0: $FluidStorageKey$$Type, fluidBuilder1: $FluidBuilder$$Type): void
public "get"(fluidStorageKey0: $FluidStorageKey$$Type): $Fluid
public "getEntry"(fluidStorageKey0: $FluidStorageKey$$Type): $FluidStorage$FluidEntry
public "getPrimaryKey"(): $FluidStorageKey
public "getQueuedBuilder"(fluidStorageKey0: $FluidStorageKey$$Type): $FluidBuilder
public "getStorage"(): $FluidStorage
public "registerFluids"(material0: $Material$$Type, gTRegistrate1: $GTRegistrate$$Type): void
public "setPrimaryKey"(fluidStorageKey0: $FluidStorageKey$$Type): void
public "setSolidifyingFluid"(fluid0: $Fluid$$Type): void
public "solidifiesFrom"(): $Fluid
public "solidifiesFrom"(int0: integer): $FluidStack
public "store"(fluidStorageKey0: $FluidStorageKey$$Type, supplier1: $Supplier$$Type<$Fluid>, fluidBuilder2: $FluidBuilder$$Type): void
public "verifyProperty"(materialProperties0: $MaterialProperties$$Type): void
get "primaryKey"(): $FluidStorageKey
get "storage"(): $FluidStorage
set "primaryKey"(value: $FluidStorageKey$$Type)
set "solidifyingFluid"(value: $Fluid$$Type)
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.properties.AlloyBlastProperty" {
import { $IMaterialProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.IMaterialProperty"
import { $MaterialProperties$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.MaterialProperties"
import { $Fluid } from "net.minecraft.world.level.material.Fluid"
import { $AlloyBlastRecipeProducer, $AlloyBlastRecipeProducer$$Type } from "com.gregtechceu.gtceu.data.recipe.misc.alloyblast.AlloyBlastRecipeProducer"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $AlloyBlastProperty implements $IMaterialProperty {
constructor(int0: integer)

public "getFluid"(): $Fluid
public "getRecipeProducer"(): $AlloyBlastRecipeProducer
public "getTemperature"(): integer
public "setFluid"(supplier0: $Supplier$$Type<$Fluid>): void
public "setRecipeProducer"(alloyBlastRecipeProducer0: $AlloyBlastRecipeProducer$$Type): void
public "setTemperature"(int0: integer): void
public "verifyProperty"(materialProperties0: $MaterialProperties$$Type): void
get "fluid"(): $Fluid
get "recipeProducer"(): $AlloyBlastRecipeProducer
get "temperature"(): integer
set "fluid"(value: $Supplier$$Type<$Fluid>)
set "recipeProducer"(value: $AlloyBlastRecipeProducer$$Type)
set "temperature"(value: integer)
}
}

declare module "com.gregtechceu.gtceu.api.data.worldgen.generator.veins.DikeVeinGenerator" {
import { $List, $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $GTOreDefinition$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.GTOreDefinition"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $DikeVeinGenerator$DikeBlockDefinition, $DikeVeinGenerator$DikeBlockDefinition$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.generator.veins.DikeVeinGenerator$DikeBlockDefinition"
import { $VeinGenerator } from "com.gregtechceu.gtceu.api.data.worldgen.generator.VeinGenerator"

export class $DikeVeinGenerator extends $VeinGenerator {
static readonly "CODEC": $Codec<$DikeVeinGenerator>
"maxYLevel": integer
"minYLevel": integer

constructor(gTOreDefinition0: $GTOreDefinition$$Type)
constructor(list0: $List$$Type<$DikeVeinGenerator$DikeBlockDefinition$$Type>, int1: integer, int2: integer)

public "maxYLevel"(int0: integer): $DikeVeinGenerator
public "minYLevel"(int0: integer): $DikeVeinGenerator
public "withBlock"(dikeBlockDefinition0: $DikeVeinGenerator$DikeBlockDefinition$$Type): $DikeVeinGenerator
public "withBlock"(blockState0: $BlockState$$Type, int1: integer, int2: integer, int3: integer): $DikeVeinGenerator
public "withBlock"(material0: $Material$$Type, int1: integer, int2: integer, int3: integer): $DikeVeinGenerator
get "blocks"(): $List<$DikeVeinGenerator$DikeBlockDefinition>
set "blocks"(value: $List$$Type<$DikeVeinGenerator$DikeBlockDefinition$$Type>)
}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.event.PostMaterialEvent" {
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $PostMaterialEvent extends $Event implements $IModBusEvent {
constructor()

}
}

declare module "com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty" {
import { $BlastProperty$GasTier, $BlastProperty$GasTier$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty$GasTier"
import { $IMaterialProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.IMaterialProperty"
import { $MaterialProperties$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.MaterialProperties"

export class $BlastProperty implements $IMaterialProperty {
constructor(int0: integer)
constructor(int0: integer, gasTier1: $BlastProperty$GasTier$$Type)
constructor(int0: integer, gasTier1: $BlastProperty$GasTier$$Type, int2: integer, int3: integer, int4: integer, int5: integer)
constructor()

public "getBlastTemperature"(): integer
public "getDurationOverride"(): integer
public "getEUtOverride"(): integer
public "getGasTier"(): $BlastProperty$GasTier
public "getVacuumDurationOverride"(): integer
public "getVacuumEUtOverride"(): integer
public "setBlastTemperature"(int0: integer): void
public "setDurationOverride"(int0: integer): void
public "setEUtOverride"(int0: integer): void
public "setGasTier"(gasTier0: $BlastProperty$GasTier$$Type): void
public "setVacuumDurationOverride"(int0: integer): void
public "setVacuumEUtOverride"(int0: integer): void
public static "validateGasTier"(string0: string): $BlastProperty$GasTier
public "verifyProperty"(materialProperties0: $MaterialProperties$$Type): void
get "blastTemperature"(): integer
get "durationOverride"(): integer
get "eUtOverride"(): integer
get "gasTier"(): $BlastProperty$GasTier
get "vacuumDurationOverride"(): integer
get "vacuumEUtOverride"(): integer
set "blastTemperature"(value: integer)
set "durationOverride"(value: integer)
set "eUtOverride"(value: integer)
set "gasTier"(value: $BlastProperty$GasTier$$Type)
set "vacuumDurationOverride"(value: integer)
set "vacuumEUtOverride"(value: integer)
}
}

declare module "com.gregtechceu.gtceu.api.data.medicalcondition.Symptom" {
import { $Symptom$Effect$$Type } from "com.gregtechceu.gtceu.api.data.medicalcondition.Symptom$Effect"
import { $Symptom$ConfiguredSymptom$$Type } from "com.gregtechceu.gtceu.api.data.medicalcondition.Symptom$ConfiguredSymptom"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $MedicalConditionTracker$$Type } from "com.gregtechceu.gtceu.common.capability.MedicalConditionTracker"
import { $MedicalCondition$$Type } from "com.gregtechceu.gtceu.api.data.medicalcondition.MedicalCondition"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $MobEffect, $MobEffect$$Type } from "net.minecraft.world.effect.MobEffect"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"

export class $Symptom {
static readonly "AIR_SUPPLY_DEBUFF": $Symptom
static readonly "ATTACK_SPEED_DEBUFF": $Symptom
static readonly "BLINDNESS": $Symptom
static readonly "DEATH": $Symptom
static readonly "HEALTH_DEBUFF": $Symptom
static readonly "HUNGER": $Symptom
static readonly "MINING_FATIGUE": $Symptom
static readonly "NAUSEA": $Symptom
static readonly "POISONING": $Symptom
static readonly "RANDOM_DAMAGE": $Symptom
static readonly "SLOWNESS": $Symptom
static readonly "SYMPTOM_ATTACK_SPEED_DEBUFF_UUID": $UUID
static readonly "SYMPTOM_HEALTH_DEBUFF_UUID": $UUID
static readonly "SYMPTOM_SLOWNESS_UUID": $UUID
static readonly "SYMPTOM_WEAKNESS_UUID": $UUID
static readonly "WEAKNESS": $Symptom
static readonly "WEAK_POISONING": $Symptom
static readonly "WITHER": $Symptom
readonly "defaultProgressionThreshold": float
readonly "defaultStages": integer
readonly "name": string

constructor(string0: string, int1: integer, float2: float, supplier3: $Supplier$$Type<$MobEffect>, int4: integer)
constructor(string0: string, int1: integer, float2: float, mobEffect3: $MobEffect$$Type, int4: integer)
constructor(string0: string, int1: integer, float2: float, float3: float, attribute4: $Attribute$$Type, uUID5: $UUID$$Type)
constructor(string0: string, int1: integer, float2: float, effect3: $Symptom$Effect$$Type)
constructor(string0: string, int1: integer, float2: float, effect3: $Symptom$Effect$$Type, effect4: $Symptom$Effect$$Type)
constructor(string0: string, int1: integer, float2: float, supplier3: $Supplier$$Type<$MobEffect>)
constructor(string0: string, int1: integer, float2: float, mobEffect3: $MobEffect$$Type)

public "applyProgression"(medicalConditionTracker0: $MedicalConditionTracker$$Type, medicalCondition1: $MedicalCondition$$Type, configuredSymptom2: $Symptom$ConfiguredSymptom$$Type, int3: integer): void
public "tick"(medicalConditionTracker0: $MedicalConditionTracker$$Type, medicalCondition1: $MedicalCondition$$Type, configuredSymptom2: $Symptom$ConfiguredSymptom$$Type, int3: integer): void
}
}

