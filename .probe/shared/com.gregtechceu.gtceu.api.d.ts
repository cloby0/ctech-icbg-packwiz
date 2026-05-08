declare module "com.gregtechceu.gtceu.api.GTCEuAPI" {
import { $GTCEu } from "com.gregtechceu.gtceu.GTCEu"
import { $BatteryBlock } from "com.gregtechceu.gtceu.common.block.BatteryBlock"
import { $IFilterType } from "com.gregtechceu.gtceu.api.block.IFilterType"
import { $Map } from "java.util.Map"
import { $IBatteryData } from "com.gregtechceu.gtceu.api.machine.multiblock.IBatteryData"
import { $CoilBlock } from "com.gregtechceu.gtceu.common.block.CoilBlock"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $ICoilType } from "com.gregtechceu.gtceu.api.block.ICoilType"
import { $Supplier } from "java.util.function.Supplier"
import { $IMaterialRegistryManager } from "com.gregtechceu.gtceu.api.data.chemical.material.IMaterialRegistryManager"

export class $GTCEuAPI {
static readonly "CLEANROOM_FILTERS": $Map<$IFilterType, $Supplier<$Block>>
static readonly "HEATING_COILS": $Map<$ICoilType, $Supplier<$CoilBlock>>
static readonly "PSS_BATTERIES": $Map<$IBatteryData, $Supplier<$BatteryBlock>>
static "instance": $GTCEu
static "materialManager": $IMaterialRegistryManager

constructor()

public static "initializeHighTier"(): void
public static "isHighTier"(): boolean
}
}

declare module "com.gregtechceu.gtceu.api.GTValues" {
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $BooleanSupplier } from "java.util.function.BooleanSupplier"
import { $IntFunction } from "java.util.function.IntFunction"

export class $GTValues {
static readonly "ALL_TIERS": integer[]
static "CLIENT_TIME": long
static readonly "CUSTOM_TAG_SOURCE": string
static readonly "DAYS": long
static readonly "EV": integer
static "FOOLS": $BooleanSupplier
static readonly "HOURS": long
static "HT": boolean
static readonly "HV": integer
static readonly "IV": integer
static readonly "L": integer
static readonly "LV": integer
static readonly "LVT": string[]
static readonly "LuV": integer
static readonly "M": long
static readonly "MAX": integer
static readonly "MAX_PLUS_FORMAT": $IntFunction<string>
static readonly "MAX_TRUE": integer
static readonly "MINUTES": long
static readonly "MODID_AE2WTLIB": string
static readonly "MODID_APPENG": string
static readonly "MODID_ARGONAUTS": string
static readonly "MODID_CCTWEAKED": string
static readonly "MODID_CREATE": string
static readonly "MODID_CURIOS": string
static readonly "MODID_EMBEDDIUM": string
static readonly "MODID_EMI": string
static readonly "MODID_ENDERIO": string
static readonly "MODID_ENSORCELLATION": string
static readonly "MODID_FTB_CHUNKS": string
static readonly "MODID_FTB_QUEST": string
static readonly "MODID_FTB_TEAMS": string
static readonly "MODID_GAMESTAGES": string
static readonly "MODID_HERACLES": string
static readonly "MODID_IRIS": string
static readonly "MODID_JAVD": string
static readonly "MODID_JEI": string
static readonly "MODID_JOURNEYMAP": string
static readonly "MODID_KUBEJS": string
static readonly "MODID_MODERNFIX": string
static readonly "MODID_OCULUS": string
static readonly "MODID_REI": string
static readonly "MODID_RUBIDIUM": string
static readonly "MODID_SHIMMER": string
static readonly "MODID_SODIUM": string
static readonly "MODID_TINTED": string
static readonly "MODID_TOP": string
static readonly "MODID_XAEROS_MINIMAP": string
static readonly "MODID_XAEROS_WORLDMAP": string
static readonly "MONTHS": long
static readonly "MV": integer
static readonly "OpV": integer
static readonly "RNG": $RandomSource
static readonly "SECONDS": long
static readonly "TIER_COUNT": integer
static readonly "UEV": integer
static readonly "UHV": integer
static readonly "UIV": integer
static readonly "ULV": integer
static readonly "UV": integer
static readonly "UXV": integer
static readonly "V": long[]
static readonly "VA": integer[]
static readonly "VC": integer[]
static readonly "VCF": string[]
static readonly "VCM": integer[]
static readonly "VC_HP_STEAM": integer
static readonly "VC_LP_STEAM": integer
static readonly "VEX": long[]
static readonly "VH": integer[]
static readonly "VHA": integer[]
static readonly "VLVH": string[]
static readonly "VLVT": string[]
static readonly "VN": string[]
static readonly "VNF": string[]
static readonly "VOLTAGE_NAMES": string[]
static readonly "WEEKS": long
static "XMAS": $BooleanSupplier
static readonly "YEARS": long
static readonly "ZPM": integer

constructor()

public static "tiersBetween"(int0: integer, int1: integer): integer[]
}
}

