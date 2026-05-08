declare module "com.gregtechceu.gtceu.api.gui.fancy.IFancyUIProvider$PageGroupingData" {
import { $Record } from "java.lang.Record"

export class $IFancyUIProvider$PageGroupingData extends $Record {
constructor(groupKey: string, groupPositionWeight: integer)

public "groupKey"(): string
public "groupPositionWeight"(): integer
}
}

declare module "com.gregtechceu.gtceu.api.gui.GuiTextures" {
import { $SteamTexture } from "com.gregtechceu.gtceu.api.gui.SteamTexture"
import { $ResourceTexture } from "com.lowdragmc.lowdraglib.gui.texture.ResourceTexture"
import { $ResourceBorderTexture } from "com.lowdragmc.lowdraglib.gui.texture.ResourceBorderTexture"

export class $GuiTextures {
static readonly "ARC_FURNACE_RECYCLING_CATEGORY": $ResourceTexture
static readonly "ARROW_INPUT_OVERLAY": $ResourceTexture
static readonly "ARROW_OUTPUT_OVERLAY": $ResourceTexture
static readonly "ATOMIC_OVERLAY_1": $ResourceTexture
static readonly "ATOMIC_OVERLAY_2": $ResourceTexture
static readonly "BACKGROUND": $ResourceBorderTexture
static readonly "BACKGROUND_INVERSE": $ResourceBorderTexture
static readonly "BACKGROUND_STEAM": $SteamTexture
static readonly "BATTERY_OVERLAY": $ResourceTexture
static readonly "BEAKER_OVERLAY_1": $ResourceTexture
static readonly "BEAKER_OVERLAY_2": $ResourceTexture
static readonly "BEAKER_OVERLAY_3": $ResourceTexture
static readonly "BEAKER_OVERLAY_4": $ResourceTexture
static readonly "BENDER_OVERLAY": $ResourceTexture
static readonly "BLANK": $ResourceTexture
static readonly "BLANK_TRANSPARENT": $ResourceTexture
static readonly "BLOCKS_INPUT": $ResourceTexture
static readonly "BOXED_OVERLAY": $ResourceTexture
static readonly "BOX_OVERLAY": $ResourceTexture
static readonly "BREWER_OVERLAY": $ResourceTexture
static readonly "BUTTON": $ResourceBorderTexture
static readonly "BUTTON_ALLOW_IMPORT_EXPORT": $ResourceTexture
static readonly "BUTTON_AUTO_PULL": $ResourceTexture
static readonly "BUTTON_BATCH": $ResourceTexture
static readonly "BUTTON_BLACKLIST": $ResourceTexture
static readonly "BUTTON_CHECK": $ResourceTexture
static readonly "BUTTON_CHUNK_MODE": $ResourceTexture
static readonly "BUTTON_CLEAR_GRID": $ResourceTexture
static readonly "BUTTON_DISTINCT_BUSES": $ResourceTexture
static readonly "BUTTON_ENERGY": $ResourceTexture
static readonly "BUTTON_FILTER_DAMAGE": $ResourceTexture
static readonly "BUTTON_FILTER_NBT": $ResourceTexture
static readonly "BUTTON_FLUID": $ResourceTexture
static readonly "BUTTON_FLUID_OUTPUT": $ResourceTexture
static readonly "BUTTON_INTERFACE": $ResourceTexture
static readonly "BUTTON_INT_CIRCUIT_MINUS": $ResourceTexture
static readonly "BUTTON_INT_CIRCUIT_PLUS": $ResourceTexture
static readonly "BUTTON_ITEM": $ResourceTexture
static readonly "BUTTON_ITEM_OUTPUT": $ResourceTexture
static readonly "BUTTON_LEFT": $ResourceTexture
static readonly "BUTTON_LIST": $ResourceTexture
static readonly "BUTTON_LOCK": $ResourceTexture
static readonly "BUTTON_MACHINE": $ResourceTexture
static readonly "BUTTON_MINER_MODES": $ResourceTexture
static readonly "BUTTON_POWER": $ResourceTexture
static readonly "BUTTON_PUBLIC_PRIVATE": $ResourceTexture
static readonly "BUTTON_RIGHT": $ResourceTexture
static readonly "BUTTON_SILK_TOUCH_MODE": $ResourceTexture
static readonly "BUTTON_SWITCH_VIEW": $ResourceTexture
static readonly "BUTTON_VOID": $ResourceTexture
static readonly "BUTTON_VOID_MULTIBLOCK": $ResourceTexture
static readonly "BUTTON_VOID_PARTIAL": $ResourceTexture
static readonly "BUTTON_WORKING_ENABLE": $ResourceTexture
static readonly "CANISTER_OVERLAY": $ResourceTexture
static readonly "CANISTER_OVERLAY_STEAM": $SteamTexture
static readonly "CANNER_OVERLAY": $ResourceTexture
static readonly "CENTRIFUGE_OVERLAY": $ResourceTexture
static readonly "CHARGER_OVERLAY": $ResourceTexture
static readonly "CIRCUIT_OVERLAY": $ResourceTexture
static readonly "CLIPBOARD_BACKGROUND": $ResourceTexture
static readonly "CLIPBOARD_BUTTON": $ResourceTexture
static readonly "CLIPBOARD_PAPER_BACKGROUND": $ResourceTexture
static readonly "CLIPBOARD_TEXT_BOX": $ResourceBorderTexture
static readonly "CLOSE_ICON": $ResourceTexture
static readonly "COAL_OVERLAY_STEAM": $SteamTexture
static readonly "COMPRESSOR_OVERLAY": $ResourceTexture
static readonly "COMPRESSOR_OVERLAY_STEAM": $SteamTexture
static readonly "CONFIG_ARROW": $ResourceTexture
static readonly "CONFIG_ARROW_DARK": $ResourceTexture
static readonly "COVER_INTERFACE_MACHINE_OFF_PROXY": $ResourceTexture
static readonly "COVER_INTERFACE_MACHINE_ON_PROXY": $ResourceTexture
static readonly "COVER_MACHINE_CONTROLLER": $ResourceTexture
static readonly "CRACKING_OVERLAY_1": $ResourceTexture
static readonly "CRACKING_OVERLAY_2": $ResourceTexture
static readonly "CRUSHED_ORE_OVERLAY": $ResourceTexture
static readonly "CRUSHED_ORE_OVERLAY_STEAM": $SteamTexture
static readonly "CRYSTAL_OVERLAY": $ResourceTexture
static readonly "CUTTER_OVERLAY": $ResourceTexture
static readonly "DARK_CANISTER_OVERLAY": $ResourceTexture
static readonly "DATA_ORB_OVERLAY": $ResourceTexture
static readonly "DISPLAY": $ResourceTexture
static readonly "DISPLAY_FRAME": $ResourceBorderTexture
static readonly "DISPLAY_STEAM": $SteamTexture
static readonly "DISTRIBUTION_MODE": $ResourceTexture
static readonly "DUCT_TAPE_OVERLAY": $ResourceTexture
static readonly "DUST_OVERLAY": $ResourceTexture
static readonly "DUST_OVERLAY_STEAM": $SteamTexture
static readonly "ENERGY_BAR_BACKGROUND": $ResourceBorderTexture
static readonly "ENERGY_BAR_BASE": $ResourceBorderTexture
static readonly "ENERGY_DETECTOR_COVER_MODE_BUTTON": $ResourceTexture
static readonly "EXTRACTOR_OVERLAY": $ResourceTexture
static readonly "EXTRACTOR_OVERLAY_STEAM": $SteamTexture
static readonly "EXTRACTOR_RECYCLING_CATEGORY": $ResourceTexture
static readonly "FILTER_SLOT_OVERLAY": $ResourceTexture
static readonly "FLUID_SLOT": $ResourceBorderTexture
static readonly "FLUID_TANK_BACKGROUND": $ResourceTexture
static readonly "FLUID_TANK_OVERLAY": $ResourceTexture
static readonly "FURNACE_OVERLAY_1": $ResourceTexture
static readonly "FURNACE_OVERLAY_2": $ResourceTexture
static readonly "FURNACE_OVERLAY_STEAM": $SteamTexture
static readonly "GREGTECH_LOGO": $ResourceTexture
static readonly "GREGTECH_LOGO_XMAS": $ResourceTexture
static readonly "HAMMER_OVERLAY": $ResourceTexture
static readonly "HAMMER_OVERLAY_STEAM": $SteamTexture
static readonly "HEATING_OVERLAY_1": $ResourceTexture
static readonly "HEATING_OVERLAY_2": $ResourceTexture
static readonly "HPCA_COMPONENT_OUTLINE": $ResourceTexture
static readonly "HPCA_ICON_ACTIVE_COOLER_COMPONENT": $ResourceTexture
static readonly "HPCA_ICON_ADVANCED_COMPUTATION_COMPONENT": $ResourceTexture
static readonly "HPCA_ICON_BRIDGE_COMPONENT": $ResourceTexture
static readonly "HPCA_ICON_COMPUTATION_COMPONENT": $ResourceTexture
static readonly "HPCA_ICON_DAMAGED_ADVANCED_COMPUTATION_COMPONENT": $ResourceTexture
static readonly "HPCA_ICON_DAMAGED_COMPUTATION_COMPONENT": $ResourceTexture
static readonly "HPCA_ICON_EMPTY_COMPONENT": $ResourceTexture
static readonly "HPCA_ICON_HEAT_SINK_COMPONENT": $ResourceTexture
static readonly "ICON_ADD": $ResourceTexture
static readonly "ICON_CALCULATOR": $ResourceTexture
static readonly "ICON_DOWN": $ResourceTexture
static readonly "ICON_LEFT": $ResourceTexture
static readonly "ICON_LOAD": $ResourceTexture
static readonly "ICON_LOCATION": $ResourceTexture
static readonly "ICON_NEW_PAGE": $ResourceTexture
static readonly "ICON_REMOVE": $ResourceTexture
static readonly "ICON_RIGHT": $ResourceTexture
static readonly "ICON_SAVE": $ResourceTexture
static readonly "ICON_UP": $ResourceTexture
static readonly "ICON_VISIBLE": $ResourceTexture
static readonly "IMPLOSION_OVERLAY_1": $ResourceTexture
static readonly "IMPLOSION_OVERLAY_2": $ResourceTexture
static readonly "INDICATOR_NO_ENERGY": $ResourceTexture
static readonly "INDICATOR_NO_STEAM": $SteamTexture
static readonly "INFO_ICON": $ResourceTexture
static readonly "INGOT_OVERLAY": $ResourceTexture
static readonly "INSUFFICIENT_INPUT": $ResourceTexture
static readonly "INT_CIRCUIT_OVERLAY": $ResourceTexture
static readonly "INVERT_REDSTONE_BUTTON": $ResourceTexture
static readonly "IN_SLOT_OVERLAY": $ResourceTexture
static readonly "IN_SLOT_OVERLAY_STEAM": $SteamTexture
static readonly "IO_CONFIG_COVER_SETTINGS": $ResourceTexture
static readonly "IO_CONFIG_COVER_SLOT_OVERLAY": $ResourceTexture
static readonly "IO_CONFIG_FLUID_MODES_BUTTON": $ResourceTexture
static readonly "IO_CONFIG_ITEM_MODES_BUTTON": $ResourceTexture
static readonly "LAMP_NO_BLOOM": $ResourceTexture
static readonly "LAMP_NO_LIGHT": $ResourceTexture
static readonly "LENS_OVERLAY": $ResourceTexture
static readonly "LIGHTNING_OVERLAY_1": $ResourceTexture
static readonly "LIGHTNING_OVERLAY_2": $ResourceTexture
static readonly "LIGHT_OFF": $ResourceTexture
static readonly "LIGHT_ON": $ResourceTexture
static readonly "LOCK": $ResourceTexture
static readonly "LOCK_WHITE": $ResourceTexture
static readonly "MACERATOR_RECYCLING_CATEGORY": $ResourceTexture
static readonly "MAINTENANCE_BUTTON": $ResourceTexture
static readonly "MAINTENANCE_ICON": $ResourceTexture
static readonly "MOLD_OVERLAY": $ResourceTexture
static readonly "MOLECULAR_OVERLAY_1": $ResourceTexture
static readonly "MOLECULAR_OVERLAY_2": $ResourceTexture
static readonly "MOLECULAR_OVERLAY_3": $ResourceTexture
static readonly "MOLECULAR_OVERLAY_4": $ResourceTexture
static readonly "MULTIBLOCK_CATEGORY": $ResourceTexture
static readonly "NEUTRAL_MATTER_OVERLAY": $ResourceTexture
static readonly "NUMBER_BACKGROUND": $ResourceTexture
static readonly "OREBY_BASE": $ResourceTexture
static readonly "OREBY_CHEM": $ResourceTexture
static readonly "OREBY_SEP": $ResourceTexture
static readonly "OREBY_SIFT": $ResourceTexture
static readonly "OREBY_SMELT": $ResourceTexture
static readonly "OUT_SLOT_OVERLAY": $ResourceTexture
static readonly "OUT_SLOT_OVERLAY_STEAM": $SteamTexture
static readonly "PAPER_OVERLAY": $ResourceTexture
static readonly "PATTERN_OVERLAY": $ResourceTexture
static readonly "PIPE_OVERLAY_1": $ResourceTexture
static readonly "PIPE_OVERLAY_2": $ResourceTexture
static readonly "POSITIVE_MATTER_OVERLAY": $ResourceTexture
static readonly "PRESS_OVERLAY_1": $ResourceTexture
static readonly "PRESS_OVERLAY_2": $ResourceTexture
static readonly "PRESS_OVERLAY_3": $ResourceTexture
static readonly "PRESS_OVERLAY_4": $ResourceTexture
static readonly "PRIMITIVE_BACKGROUND": $ResourceBorderTexture
static readonly "PRIMITIVE_BLAST_FURNACE_PROGRESS_BAR": $ResourceTexture
static readonly "PRIMITIVE_DUST_OVERLAY": $ResourceTexture
static readonly "PRIMITIVE_FURNACE_OVERLAY": $ResourceTexture
static readonly "PRIMITIVE_INGOT_OVERLAY": $ResourceTexture
static readonly "PRIMITIVE_LARGE_FLUID_TANK": $ResourceTexture
static readonly "PRIMITIVE_LARGE_FLUID_TANK_OVERLAY": $ResourceTexture
static readonly "PRIMITIVE_SLOT": $ResourceBorderTexture
static readonly "PRINTED_PAPER_OVERLAY": $ResourceTexture
static readonly "PROGRESS_BAR_ARC_FURNACE": $ResourceTexture
static readonly "PROGRESS_BAR_ARROW": $ResourceTexture
static readonly "PROGRESS_BAR_ARROW_MULTIPLE": $ResourceTexture
static readonly "PROGRESS_BAR_ARROW_STEAM": $SteamTexture
static readonly "PROGRESS_BAR_ASSEMBLER": $ResourceTexture
static readonly "PROGRESS_BAR_ASSEMBLY_LINE": $ResourceTexture
static readonly "PROGRESS_BAR_ASSEMBLY_LINE_ARROW": $ResourceTexture
static readonly "PROGRESS_BAR_BATH": $ResourceTexture
static readonly "PROGRESS_BAR_BENDING": $ResourceTexture
static readonly "PROGRESS_BAR_BOILER_EMPTY": $SteamTexture
static readonly "PROGRESS_BAR_BOILER_FUEL": $SteamTexture
static readonly "PROGRESS_BAR_BOILER_HEAT": $ResourceTexture
static readonly "PROGRESS_BAR_CANNER": $ResourceTexture
static readonly "PROGRESS_BAR_CIRCUIT": $ResourceTexture
static readonly "PROGRESS_BAR_CIRCUIT_ASSEMBLER": $ResourceTexture
static readonly "PROGRESS_BAR_COKE_OVEN": $ResourceTexture
static readonly "PROGRESS_BAR_COMPRESS": $ResourceTexture
static readonly "PROGRESS_BAR_COMPRESS_STEAM": $SteamTexture
static readonly "PROGRESS_BAR_CRACKING": $ResourceTexture
static readonly "PROGRESS_BAR_CRACKING_INPUT": $ResourceTexture
static readonly "PROGRESS_BAR_CRYSTALLIZATION": $ResourceTexture
static readonly "PROGRESS_BAR_DISTILLATION_TOWER": $ResourceTexture
static readonly "PROGRESS_BAR_EXTRACT": $ResourceTexture
static readonly "PROGRESS_BAR_EXTRACT_STEAM": $SteamTexture
static readonly "PROGRESS_BAR_EXTRUDER": $ResourceTexture
static readonly "PROGRESS_BAR_FUSION": $ResourceTexture
static readonly "PROGRESS_BAR_GAS_COLLECTOR": $ResourceTexture
static readonly "PROGRESS_BAR_HAMMER": $ResourceTexture
static readonly "PROGRESS_BAR_HAMMER_BASE": $ResourceTexture
static readonly "PROGRESS_BAR_HAMMER_BASE_STEAM": $SteamTexture
static readonly "PROGRESS_BAR_HAMMER_STEAM": $SteamTexture
static readonly "PROGRESS_BAR_LATHE": $ResourceTexture
static readonly "PROGRESS_BAR_LATHE_BASE": $ResourceTexture
static readonly "PROGRESS_BAR_MACERATE": $ResourceTexture
static readonly "PROGRESS_BAR_MACERATE_STEAM": $SteamTexture
static readonly "PROGRESS_BAR_MAGNET": $ResourceTexture
static readonly "PROGRESS_BAR_MASS_FAB": $ResourceTexture
static readonly "PROGRESS_BAR_MIXER": $ResourceTexture
static readonly "PROGRESS_BAR_PACKER": $ResourceTexture
static readonly "PROGRESS_BAR_RECYCLER": $ResourceTexture
static readonly "PROGRESS_BAR_REPLICATOR": $ResourceTexture
static readonly "PROGRESS_BAR_RESEARCH_STATION_1": $ResourceTexture
static readonly "PROGRESS_BAR_RESEARCH_STATION_2": $ResourceTexture
static readonly "PROGRESS_BAR_RESEARCH_STATION_BASE": $ResourceTexture
static readonly "PROGRESS_BAR_SIFT": $ResourceTexture
static readonly "PROGRESS_BAR_SLICE": $ResourceTexture
static readonly "PROGRESS_BAR_SOLAR_STEAM": $SteamTexture
static readonly "PROGRESS_BAR_UNLOCK": $ResourceTexture
static readonly "PROGRESS_BAR_UNPACKER": $ResourceTexture
static readonly "PROGRESS_BAR_WIREMILL": $ResourceTexture
static readonly "REFUND_OVERLAY": $ResourceTexture
static readonly "RESEARCH_STATION_OVERLAY": $ResourceTexture
static readonly "SAWBLADE_OVERLAY": $ResourceTexture
static readonly "SCANNER_OVERLAY": $ResourceTexture
static readonly "SCENE": $ResourceTexture
static readonly "SELECT_BOX": $ResourceTexture
static readonly "SLIDER_BACKGROUND": $ResourceTexture
static readonly "SLIDER_BACKGROUND_VERTICAL": $ResourceTexture
static readonly "SLIDER_ICON": $ResourceTexture
static readonly "SLOT": $ResourceBorderTexture
static readonly "SLOT_DARK": $ResourceBorderTexture
static readonly "SLOT_DARKENED": $ResourceTexture
static readonly "SLOT_STEAM": $SteamTexture
static readonly "SOLIDIFIER_OVERLAY": $ResourceTexture
static readonly "STORAGE_ICON": $ResourceTexture
static readonly "STRING_SLOT_OVERLAY": $ResourceTexture
static readonly "SWITCH": $ResourceTexture
static readonly "SWITCH_HORIZONTAL": $ResourceTexture
static readonly "TANK_ICON": $ResourceTexture
static readonly "TIER": $ResourceTexture[]
static readonly "TITLE_BAR_BACKGROUND": $ResourceBorderTexture
static readonly "TOGGLE_BUTTON_BACK": $ResourceTexture
static readonly "TOOL_ALLOW_INPUT": $ResourceTexture
static readonly "TOOL_ATTACH_COVER": $ResourceTexture
static readonly "TOOL_AUTO_OUTPUT": $ResourceTexture
static readonly "TOOL_COVER_SETTINGS": $ResourceTexture
static readonly "TOOL_DISABLE_AUTO_OUTPUT": $ResourceTexture
static readonly "TOOL_FRONT_FACING_ROTATION": $ResourceTexture
static readonly "TOOL_IO_FACING_ROTATION": $ResourceTexture
static readonly "TOOL_MUTE": $ResourceTexture
static readonly "TOOL_PAUSE": $ResourceTexture
static readonly "TOOL_PIPE_BLOCK": $ResourceTexture
static readonly "TOOL_PIPE_CONNECT": $ResourceTexture
static readonly "TOOL_REMOVE_COVER": $ResourceTexture
static readonly "TOOL_SLOT_OVERLAY": $ResourceTexture
static readonly "TOOL_SOUND": $ResourceTexture
static readonly "TOOL_START": $ResourceTexture
static readonly "TOOL_SWITCH_CONVERTER_EU": $ResourceTexture
static readonly "TOOL_SWITCH_CONVERTER_NATIVE": $ResourceTexture
static readonly "TOOL_WIRE_BLOCK": $ResourceTexture
static readonly "TOOL_WIRE_CONNECT": $ResourceTexture
static readonly "TURBINE_OVERLAY": $ResourceTexture
static readonly "UI_FRAME_SIDE_DOWN": $ResourceTexture
static readonly "UI_FRAME_SIDE_UP": $ResourceTexture
static readonly "UP": $ResourceTexture
static readonly "VANILLA_BUTTON": $ResourceTexture
static readonly "VIAL_OVERLAY_1": $ResourceTexture
static readonly "VIAL_OVERLAY_2": $ResourceTexture
static readonly "WIREMILL_OVERLAY": $ResourceTexture

constructor()

}
}

declare module "com.gregtechceu.gtceu.api.gui.fancy.TabsWidget" {
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $IFancyUIProvider, $IFancyUIProvider$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.IFancyUIProvider"
import { $List } from "java.util.List"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $BiConsumer, $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $IGuiTexture, $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"

export class $TabsWidget extends $Widget {
constructor(consumer0: $Consumer$$Type<$IFancyUIProvider$$Type>, int1: integer, int2: integer, int3: integer, int4: integer)
constructor(consumer0: $Consumer$$Type<$IFancyUIProvider$$Type>)

public "attachSubTab"(iFancyUIProvider0: $IFancyUIProvider$$Type): void
public "clearSubTabs"(): void
/** Client only, do not use in server scripts */
public "drawTab"(iFancyUIProvider0: $IFancyUIProvider$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, iFancyUIProvider8: $IFancyUIProvider$$Type): void
/** Client only, do not use in server scripts */
public "getHoveredTab"(double0: double, double1: double): $IFancyUIProvider
public "getLeftButtonHoverTexture"(): $IGuiTexture
public "getLeftButtonTexture"(): $IGuiTexture
public "getMainTab"(): $IFancyUIProvider
public "getOffset"(): integer
public "getOnTabClick"(): $Consumer<$IFancyUIProvider>
public "getOnTabSwitch"(): $BiConsumer<$IFancyUIProvider, $IFancyUIProvider>
public "getRightButtonHoverTexture"(): $IGuiTexture
public "getRightButtonTexture"(): $IGuiTexture
public "getSelectedTab"(): $IFancyUIProvider
public "getSubTabs"(): $List<$IFancyUIProvider>
public "getSubTabsWidth"(): integer
public "getTabHoverTexture"(): $IGuiTexture
public "getTabPressedTexture"(): $IGuiTexture
public "getTabTexture"(): $IGuiTexture
public "hasButton"(): boolean
/** Client only, do not use in server scripts */
public "isHoverLeftButton"(double0: double, double1: double): boolean
/** Client only, do not use in server scripts */
public "isHoverRightButton"(double0: double, double1: double): boolean
public "selectTab"(iFancyUIProvider0: $IFancyUIProvider$$Type): void
public "setLeftButtonHoverTexture"(iGuiTexture0: $IGuiTexture$$Type): void
public "setLeftButtonTexture"(iGuiTexture0: $IGuiTexture$$Type): void
public "setMainTab"(iFancyUIProvider0: $IFancyUIProvider$$Type): void
public "setOnTabSwitch"(biConsumer0: $BiConsumer$$Type<$IFancyUIProvider$$Type, $IFancyUIProvider$$Type>): void
public "setRightButtonHoverTexture"(iGuiTexture0: $IGuiTexture$$Type): void
public "setRightButtonTexture"(iGuiTexture0: $IGuiTexture$$Type): void
public "setTabHoverTexture"(iGuiTexture0: $IGuiTexture$$Type): void
public "setTabPressedTexture"(iGuiTexture0: $IGuiTexture$$Type): void
public "setTabTexture"(iGuiTexture0: $IGuiTexture$$Type): void
get "leftButtonHoverTexture"(): $IGuiTexture
get "leftButtonTexture"(): $IGuiTexture
get "mainTab"(): $IFancyUIProvider
get "offset"(): integer
get "onTabClick"(): $Consumer<$IFancyUIProvider>
get "onTabSwitch"(): $BiConsumer<$IFancyUIProvider, $IFancyUIProvider>
get "rightButtonHoverTexture"(): $IGuiTexture
get "rightButtonTexture"(): $IGuiTexture
get "selectedTab"(): $IFancyUIProvider
get "subTabs"(): $List<$IFancyUIProvider>
get "subTabsWidth"(): integer
get "tabHoverTexture"(): $IGuiTexture
get "tabPressedTexture"(): $IGuiTexture
get "tabTexture"(): $IGuiTexture
set "leftButtonHoverTexture"(value: $IGuiTexture$$Type)
set "leftButtonTexture"(value: $IGuiTexture$$Type)
set "mainTab"(value: $IFancyUIProvider$$Type)
set "onTabSwitch"(value: $BiConsumer$$Type<$IFancyUIProvider$$Type, $IFancyUIProvider$$Type>)
set "rightButtonHoverTexture"(value: $IGuiTexture$$Type)
set "rightButtonTexture"(value: $IGuiTexture$$Type)
set "tabHoverTexture"(value: $IGuiTexture$$Type)
set "tabPressedTexture"(value: $IGuiTexture$$Type)
set "tabTexture"(value: $IGuiTexture$$Type)
}
}

declare module "com.gregtechceu.gtceu.api.gui.fancy.ConfiguratorPanel$FloatingTab" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $ConfiguratorPanel$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.ConfiguratorPanel"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $IFancyConfigurator$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.IFancyConfigurator"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $ConfiguratorPanel$Tab } from "com.gregtechceu.gtceu.api.gui.fancy.ConfiguratorPanel$Tab"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $ConfiguratorPanel$FloatingTab extends $ConfiguratorPanel$Tab {
constructor(configuratorPanel0: $ConfiguratorPanel$$Type, iFancyConfigurator1: $IFancyConfigurator$$Type)

public "canDragIn"(dragging: any): boolean
public "collapseTo"(int0: integer, int1: integer): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "isLDLRegister"(): boolean
public "name"(): string
public "onClose"(runnable0: $Runnable$$Type): void
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.gregtechceu.gtceu.api.gui.fancy.IFancyConfigurator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $Component } from "net.minecraft.network.chat.Component"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $IGuiTexture } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"

export interface $IFancyConfigurator {
"createConfigurator"(): $Widget
"detectAndSendChange"(biConsumer0: $BiConsumer$$Type<integer, $Consumer$$Type<$FriendlyByteBuf$$Type>>): void
"getIcon"(): $IGuiTexture
"getTitle"(): $Component
"getTooltips"(): $List<$Component>
"readInitialData"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
"readUpdateInfo"(int0: integer, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
"writeInitialData"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "icon"(): $IGuiTexture
get "title"(): $Component
get "tooltips"(): $List<$Component>
}

export namespace $IFancyConfigurator {
const probejs$$marker: never
}
export abstract class $IFancyConfigurator$$Static implements $IFancyConfigurator {
}
}

declare module "com.gregtechceu.gtceu.api.gui.fancy.FancyMachineUIWidget" {
import { $IFancyUIProvider, $IFancyUIProvider$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.IFancyUIProvider"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $Component } from "net.minecraft.network.chat.Component"
import { $VerticalTabsWidget } from "com.gregtechceu.gtceu.api.gui.fancy.VerticalTabsWidget"
import { $Deque } from "java.util.Deque"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $TooltipsPanel } from "com.gregtechceu.gtceu.api.gui.fancy.TooltipsPanel"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $ConfiguratorPanel } from "com.gregtechceu.gtceu.api.gui.fancy.ConfiguratorPanel"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $PageSwitcher } from "com.gregtechceu.gtceu.api.gui.fancy.PageSwitcher"
import { $TitleBarWidget } from "com.gregtechceu.gtceu.api.gui.fancy.TitleBarWidget"
import { $FancyMachineUIWidget$NavigationEntry } from "com.gregtechceu.gtceu.api.gui.fancy.FancyMachineUIWidget$NavigationEntry"
import { $WidgetGroup } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $PlayerInventoryWidget } from "com.lowdragmc.lowdraglib.gui.widget.custom.PlayerInventoryWidget"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $FancyMachineUIWidget extends $WidgetGroup {
constructor(iFancyUIProvider0: $IFancyUIProvider$$Type, int1: integer, int2: integer)

public "canDragIn"(dragging: any): boolean
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getAllPages"(): $List<$IFancyUIProvider>
public "getBorder"(): integer
public "getChatComponent"(): $Component
public "getConfiguratorPanel"(): $ConfiguratorPanel
public "getCurrentHomePage"(): $IFancyUIProvider
public "getCurrentPage"(): $IFancyUIProvider
public "getMainPage"(): $IFancyUIProvider
public "getPageContainer"(): $WidgetGroup
public "getPageSwitcher"(): $PageSwitcher
public "getPlayerInventory"(): $PlayerInventoryWidget
public "getPreviousPages"(): $Deque<$FancyMachineUIWidget$NavigationEntry>
public "getRegisterUI"(): $LDLRegister
public "getSideTabsWidget"(): $VerticalTabsWidget
public "getTitleBar"(): $TitleBarWidget
public "getTooltipsPanel"(): $TooltipsPanel
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "isLDLRegister"(): boolean
public "name"(): string
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setBorder"(int0: integer): void
get "allPages"(): $List<$IFancyUIProvider>
get "border"(): integer
get "chatComponent"(): $Component
get "configuratorPanel"(): $ConfiguratorPanel
get "currentHomePage"(): $IFancyUIProvider
get "currentPage"(): $IFancyUIProvider
get "mainPage"(): $IFancyUIProvider
get "pageContainer"(): $WidgetGroup
get "pageSwitcher"(): $PageSwitcher
get "playerInventory"(): $PlayerInventoryWidget
get "previousPages"(): $Deque<$FancyMachineUIWidget$NavigationEntry>
get "registerUI"(): $LDLRegister
get "sideTabsWidget"(): $VerticalTabsWidget
get "titleBar"(): $TitleBarWidget
get "tooltipsPanel"(): $TooltipsPanel
get "translateKey"(): string
get "lDLRegister"(): boolean
set "border"(value: integer)
}
}

declare module "com.gregtechceu.gtceu.api.gui.SteamTexture" {
import { $ResourceTexture } from "com.lowdragmc.lowdraglib.gui.texture.ResourceTexture"

export class $SteamTexture {
public static "fullImage"(string0: string): $SteamTexture
public "get"(boolean0: boolean): $ResourceTexture
}
}

declare module "com.gregtechceu.gtceu.api.gui.editor.IEditableUI" {
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $WidgetGroup$$Type } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"

export interface $IEditableUI<W extends $Widget = $Widget, T = any> {
"createDefault"(): W
"setupUI"(widgetGroup0: $WidgetGroup$$Type, t1: T): void
}

export namespace $IEditableUI {
const probejs$$marker: never
}
export abstract class $IEditableUI$$Static<W extends $Widget = $Widget, T = any> implements $IEditableUI<W, T> {
}
}

declare module "com.gregtechceu.gtceu.api.gui.fancy.IFancyTooltip" {
import { $List } from "java.util.List"
import { $Component } from "net.minecraft.network.chat.Component"
import { $TooltipComponent } from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import { $IGuiTexture } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"

export interface $IFancyTooltip {
"getFancyComponent"(): $TooltipComponent
"getFancyTooltip"(): $List<$Component>
"getFancyTooltipIcon"(): $IGuiTexture
"showFancyTooltip"(): boolean
get "fancyComponent"(): $TooltipComponent
get "fancyTooltip"(): $List<$Component>
get "fancyTooltipIcon"(): $IGuiTexture
}

export namespace $IFancyTooltip {
const probejs$$marker: never
}
export abstract class $IFancyTooltip$$Static implements $IFancyTooltip {
}
}

declare module "com.gregtechceu.gtceu.api.gui.fancy.ConfiguratorPanel" {
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $Component } from "net.minecraft.network.chat.Component"
import { $ConfiguratorPanel$Tab, $ConfiguratorPanel$Tab$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.ConfiguratorPanel$Tab"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $List } from "java.util.List"
import { $IFancyConfigurator$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.IFancyConfigurator"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ConfiguratorPanel$FloatingTab } from "com.gregtechceu.gtceu.api.gui.fancy.ConfiguratorPanel$FloatingTab"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $WidgetGroup } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $ConfiguratorPanel extends $WidgetGroup {
constructor(int0: integer, int1: integer)

public "attachConfigurators"(...iFancyConfigurator0s: $IFancyConfigurator$$Type[]): void
public "canDragIn"(dragging: any): boolean
public "clear"(): void
public "collapseTab"(): void
public "createFloatingTab"(iFancyConfigurator0: $IFancyConfigurator$$Type): $ConfiguratorPanel$FloatingTab
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "expandTab"(tab0: $ConfiguratorPanel$Tab$$Type): void
public "getChatComponent"(): $Component
public "getExpanded"(): $ConfiguratorPanel$Tab
public "getRegisterUI"(): $LDLRegister
public "getTabSize"(): integer
public "getTabs"(): $List<$ConfiguratorPanel$Tab>
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "isLDLRegister"(): boolean
public "name"(): string
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "setBorder"(int0: integer): void
public "setTexture"(iGuiTexture0: $IGuiTexture$$Type): void
get "chatComponent"(): $Component
get "expanded"(): $ConfiguratorPanel$Tab
get "registerUI"(): $LDLRegister
get "tabSize"(): integer
get "tabs"(): $List<$ConfiguratorPanel$Tab>
get "translateKey"(): string
get "lDLRegister"(): boolean
set "border"(value: integer)
set "texture"(value: $IGuiTexture$$Type)
}
}

declare module "com.gregtechceu.gtceu.api.gui.fancy.PageSwitcher" {
import { $IFancyUIProvider, $IFancyUIProvider$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.IFancyUIProvider"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $FancyMachineUIWidget$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.FancyMachineUIWidget"
import { $IGuiTexture } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $TooltipsPanel$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.TooltipsPanel"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ConfiguratorPanel$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.ConfiguratorPanel"
import { $IFancyUIProvider$PageGroupingData } from "com.gregtechceu.gtceu.api.gui.fancy.IFancyUIProvider$PageGroupingData"
import { $List, $List$$Type } from "java.util.List"
import { $TabsWidget$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.TabsWidget"
import { $TooltipComponent } from "net.minecraft.world.inventory.tooltip.TooltipComponent"

export class $PageSwitcher implements $IFancyUIProvider {
constructor(consumer0: $Consumer$$Type<$IFancyUIProvider$$Type>)

public "attachConfigurators"(configuratorPanel0: $ConfiguratorPanel$$Type): void
public "attachSideTabs"(tabsWidget0: $TabsWidget$$Type): void
public "attachTooltips"(tooltipsPanel0: $TooltipsPanel$$Type): void
public "createMainPage"(fancyMachineUIWidget0: $FancyMachineUIWidget$$Type): $Widget
public "getPageGroupingData"(): $IFancyUIProvider$PageGroupingData
public "getSubTabs"(): $List<$IFancyUIProvider>
public "getTabIcon"(): $IGuiTexture
public "getTabTooltipComponent"(): $TooltipComponent
public "getTabTooltips"(): $List<$Component>
public "getTitle"(): $Component
public "hasPlayerInventory"(): boolean
public "setPageList"(list0: $List$$Type<$IFancyUIProvider$$Type>, iFancyUIProvider1: $IFancyUIProvider$$Type): void
get "pageGroupingData"(): $IFancyUIProvider$PageGroupingData
get "subTabs"(): $List<$IFancyUIProvider>
get "tabIcon"(): $IGuiTexture
get "tabTooltipComponent"(): $TooltipComponent
get "tabTooltips"(): $List<$Component>
get "title"(): $Component
}
}

declare module "com.gregtechceu.gtceu.api.gui.fancy.FancyMachineUIWidget$NavigationEntry" {
import { $IFancyUIProvider } from "com.gregtechceu.gtceu.api.gui.fancy.IFancyUIProvider"
import { $Record } from "java.lang.Record"
import { $Runnable } from "java.lang.Runnable"

export class $FancyMachineUIWidget$NavigationEntry extends $Record {
public "homePage"(): $IFancyUIProvider
public "onNavigation"(): $Runnable
public "page"(): $IFancyUIProvider
}
}

declare module "com.gregtechceu.gtceu.api.gui.widget.EnumSelectorWidget$SelectableEnum" {
import { $IGuiTexture } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"

export interface $EnumSelectorWidget$SelectableEnum {
"getIcon"(): $IGuiTexture
"getTooltip"(): string
get "icon"(): $IGuiTexture
get "tooltip"(): string
}

export namespace $EnumSelectorWidget$SelectableEnum {
const probejs$$marker: never
}
export abstract class $EnumSelectorWidget$SelectableEnum$$Static implements $EnumSelectorWidget$SelectableEnum {
}
}

declare module "com.gregtechceu.gtceu.api.gui.fancy.TitleBarWidget" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ClickData$$Type } from "com.lowdragmc.lowdraglib.gui.util.ClickData"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $IFancyUIProvider$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.IFancyUIProvider"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $WidgetGroup } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $TitleBarWidget extends $WidgetGroup {
constructor(int0: integer, consumer1: $Consumer$$Type<$ClickData$$Type>, consumer2: $Consumer$$Type<$ClickData$$Type>)

public "canDragIn"(dragging: any): boolean
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "isLDLRegister"(): boolean
public "name"(): string
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "updateState"(iFancyUIProvider0: $IFancyUIProvider$$Type, boolean1: boolean, boolean2: boolean): void
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

declare module "com.gregtechceu.gtceu.api.gui.editor.EditableMachineUI" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $MetaMachine, $MetaMachine$$Type } from "com.gregtechceu.gtceu.api.machine.MetaMachine"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $WidgetGroup, $WidgetGroup$$Type } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $IEditableUI } from "com.gregtechceu.gtceu.api.gui.editor.IEditableUI"

export class $EditableMachineUI implements $IEditableUI<$WidgetGroup, $MetaMachine> {
constructor(string0: string, resourceLocation1: $ResourceLocation$$Type, supplier2: $Supplier$$Type<$WidgetGroup>, biConsumer3: $BiConsumer$$Type<$WidgetGroup$$Type, $MetaMachine$$Type>)

public "createCustomUI"(): $WidgetGroup
public "getCustomUI"(): $CompoundTag
public "getGroupName"(): string
public "getUiPath"(): $ResourceLocation
public "hasCustomUI"(): boolean
public "reloadCustomUI"(): void
public "setupUI"(widgetGroup0: $WidgetGroup$$Type, metaMachine1: $MetaMachine$$Type): void
get "customUI"(): $CompoundTag
get "groupName"(): string
get "uiPath"(): $ResourceLocation
}
}

declare module "com.gregtechceu.gtceu.api.gui.fancy.TooltipsPanel" {
import { $IFancyTooltip, $IFancyTooltip$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.IFancyTooltip"
import { $List } from "java.util.List"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"

export class $TooltipsPanel extends $Widget {
constructor()

public "attachTooltips"(...iFancyTooltip0s: $IFancyTooltip$$Type[]): void
public "clear"(): void
public "getTooltips"(): $List<$IFancyTooltip>
get "tooltips"(): $List<$IFancyTooltip>
}
}

declare module "com.gregtechceu.gtceu.api.gui.fancy.IFancyUIProvider" {
import { $ConfiguratorPanel$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.ConfiguratorPanel"
import { $IFancyUIProvider$PageGroupingData } from "com.gregtechceu.gtceu.api.gui.fancy.IFancyUIProvider$PageGroupingData"
import { $List } from "java.util.List"
import { $Component } from "net.minecraft.network.chat.Component"
import { $TabsWidget$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.TabsWidget"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $FancyMachineUIWidget$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.FancyMachineUIWidget"
import { $TooltipComponent } from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import { $IGuiTexture } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $TooltipsPanel$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.TooltipsPanel"

export interface $IFancyUIProvider {
"attachConfigurators"(configuratorPanel0: $ConfiguratorPanel$$Type): void
"attachSideTabs"(tabsWidget0: $TabsWidget$$Type): void
"attachTooltips"(tooltipsPanel0: $TooltipsPanel$$Type): void
"createMainPage"(fancyMachineUIWidget0: $FancyMachineUIWidget$$Type): $Widget
"getPageGroupingData"(): $IFancyUIProvider$PageGroupingData
"getSubTabs"(): $List<$IFancyUIProvider>
"getTabIcon"(): $IGuiTexture
"getTabTooltipComponent"(): $TooltipComponent
"getTabTooltips"(): $List<$Component>
"getTitle"(): $Component
"hasPlayerInventory"(): boolean
get "pageGroupingData"(): $IFancyUIProvider$PageGroupingData
get "subTabs"(): $List<$IFancyUIProvider>
get "tabIcon"(): $IGuiTexture
get "tabTooltipComponent"(): $TooltipComponent
get "tabTooltips"(): $List<$Component>
get "title"(): $Component
}

export namespace $IFancyUIProvider {
const probejs$$marker: never
}
export abstract class $IFancyUIProvider$$Static implements $IFancyUIProvider {
}
}

declare module "com.gregtechceu.gtceu.api.gui.fancy.VerticalTabsWidget" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $IFancyUIProvider$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.IFancyUIProvider"
import { $TabsWidget } from "com.gregtechceu.gtceu.api.gui.fancy.TabsWidget"

export class $VerticalTabsWidget extends $TabsWidget {
constructor(consumer0: $Consumer$$Type<$IFancyUIProvider$$Type>, int1: integer, int2: integer, int3: integer, int4: integer)

}
}

declare module "com.gregtechceu.gtceu.api.gui.fancy.ConfiguratorPanel$Tab" {
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $ConfiguratorPanel$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.ConfiguratorPanel"
import { $Resource$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource"
import { $IFancyConfigurator$$Type } from "com.gregtechceu.gtceu.api.gui.fancy.IFancyConfigurator"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Resources$$Type } from "com.lowdragmc.lowdraglib.gui.editor.data.Resources"
import { $WidgetGroup } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $IGuiTexture$$Type } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $IConfigurableWidget, $IConfigurableWidget$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget"

export class $ConfiguratorPanel$Tab extends $WidgetGroup {
constructor(configuratorPanel0: $ConfiguratorPanel$$Type, iFancyConfigurator1: $IFancyConfigurator$$Type)

public "canDragIn"(dragging: any): boolean
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$$Type, tag: $CompoundTag$$Type, resources: $Resources$$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $IConfigurableWidget
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "handleDragging"(dragging: any): boolean
public "isLDLRegister"(): boolean
public "name"(): string
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resources$$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$$Type, resources: $Resource$$Type<$IGuiTexture$$Type>, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
}
}

