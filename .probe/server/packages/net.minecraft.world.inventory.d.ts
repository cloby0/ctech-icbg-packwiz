declare module "net.minecraft.world.inventory.StackedContentsCompatible" {
import { $StackedContents } from "net.minecraft.world.entity.player.StackedContents"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StackedContentsCompatible$$Type = ($StackedContentsCompatible | ((arg0: $StackedContents) => void));
}

declare module "net.minecraft.world.inventory.PlayerEnderChestContainer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PlayerEnderChestContainer$$Type = ($PlayerEnderChestContainer);
}

declare module "net.minecraft.world.inventory.BrewingStandMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BrewingStandMenu$$Type = ($BrewingStandMenu);
}

declare module "net.minecraft.world.inventory.InventoryMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InventoryMenu$$Type = ($InventoryMenu);
}

declare module "net.minecraft.world.inventory.RecipeHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeHolder$$Type = ($RecipeHolder);
}

declare module "net.minecraft.world.inventory.ContainerListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ContainerListener$$Type = ($ContainerListener);
}

declare module "net.minecraft.world.inventory.StonecutterMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StonecutterMenu$$Type = ($StonecutterMenu);
}

declare module "net.minecraft.world.inventory.ClickAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ClickAction$$Type = ($ClickAction | ("primary" | "secondary"));
}

declare module "net.minecraft.world.inventory.ClickType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ClickType$$Type = ($ClickType | ("pickup" | "quick_move" | "swap" | "clone" | "throw" | "quick_craft" | "pickup_all"));
}

declare module "net.minecraft.world.inventory.CraftingContainer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CraftingContainer$$Type = ($CraftingContainer);
}

declare module "net.minecraft.world.inventory.MenuType$MenuSupplier" {
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Inventory } from "net.minecraft.world.entity.player.Inventory"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MenuType$MenuSupplier$$Type<T extends $AbstractContainerMenu = $AbstractContainerMenu> = ($MenuType$MenuSupplier<T> | ((arg0: integer, arg1: $Inventory) => T));
}

declare module "net.minecraft.world.inventory.SmokerMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SmokerMenu$$Type = ($SmokerMenu);
}

declare module "net.minecraft.world.inventory.BlastFurnaceMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlastFurnaceMenu$$Type = ($BlastFurnaceMenu);
}

declare module "net.minecraft.world.inventory.LoomMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LoomMenu$$Type = ($LoomMenu);
}

declare module "net.minecraft.world.inventory.DispenserMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DispenserMenu$$Type = ($DispenserMenu);
}

declare module "net.minecraft.world.inventory.AnvilMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AnvilMenu$$Type = ($AnvilMenu);
}

declare module "net.minecraft.world.inventory.ContainerData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ContainerData$$Type = ($ContainerData);
}

declare module "net.minecraft.world.inventory.MenuConstructor" {
import { $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Inventory } from "net.minecraft.world.entity.player.Inventory"
import { $Player } from "net.minecraft.world.entity.player.Player"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MenuConstructor$$Type = ($MenuConstructor | ((arg0: integer, arg1: $Inventory, arg2: $Player) => $AbstractContainerMenu$$Type));
}

declare module "net.minecraft.world.inventory.ItemCombinerMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemCombinerMenu$$Type = ($ItemCombinerMenu);
}

declare module "net.minecraft.world.inventory.CartographyTableMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CartographyTableMenu$$Type = ($CartographyTableMenu);
}

declare module "net.minecraft.world.inventory.HopperMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HopperMenu$$Type = ($HopperMenu);
}

declare module "net.minecraft.world.inventory.BeaconMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BeaconMenu$$Type = ($BeaconMenu);
}

declare module "net.minecraft.world.inventory.CraftingMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CraftingMenu$$Type = ($CraftingMenu);
}

declare module "net.minecraft.world.inventory.DataSlot" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DataSlot$$Type = ($DataSlot);
}

declare module "net.minecraft.world.inventory.SmithingMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SmithingMenu$$Type = ($SmithingMenu);
}

declare module "net.minecraft.world.inventory.MerchantMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MerchantMenu$$Type = ($MerchantMenu);
}

declare module "net.minecraft.world.inventory.ShulkerBoxMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ShulkerBoxMenu$$Type = ($ShulkerBoxMenu);
}

declare module "net.minecraft.world.inventory.ContainerLevelAccess" {
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $BiFunction } from "java.util.function.BiFunction"
import { $Optional$$Type } from "java.util.Optional"
import { $Level } from "net.minecraft.world.level.Level"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ContainerLevelAccess$$Type = ($ContainerLevelAccess | ((arg0: $BiFunction<$Level, $BlockPos, T>) => $Optional$$Type<T>));
}

declare module "net.minecraft.world.inventory.RecipeBookMenu" {
import { $Container, $Container$$Type } from "net.minecraft.world.Container"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeBookMenu$$Type<C extends $Container = $Container> = ($RecipeBookMenu<C>);
}

declare module "net.minecraft.world.inventory.AbstractFurnaceMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractFurnaceMenu$$Type = ($AbstractFurnaceMenu);
}

declare module "net.minecraft.world.inventory.tooltip.TooltipComponent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TooltipComponent$$Type = ($TooltipComponent);
}

declare module "net.minecraft.world.inventory.ResultContainer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ResultContainer$$Type = ($ResultContainer);
}

declare module "net.minecraft.world.inventory.RecipeBookType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeBookType$$Type = ($RecipeBookType | ("crafting" | "furnace" | "blast_furnace" | "smoker" | "cooking" | "refurbished_furniture_freezer" | "refurbished_furniture_microwave" | "refurbished_furniture_oven" | "altar" | "freezer" | "incubator" | "combiner"));
}

declare module "net.minecraft.world.inventory.Slot" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Slot$$Type = ($Slot);
}

declare module "net.minecraft.world.inventory.GrindstoneMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GrindstoneMenu$$Type = ($GrindstoneMenu);
}

declare module "net.minecraft.world.inventory.ContainerSynchronizer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ContainerSynchronizer$$Type = ($ContainerSynchronizer);
}

declare module "net.minecraft.world.inventory.AbstractContainerMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractContainerMenu$$Type = ($AbstractContainerMenu);
}

declare module "net.minecraft.world.inventory.MenuType" {
import { $FeatureElement } from "net.minecraft.world.flag.FeatureElement"
import { $GrindstoneMenu } from "net.minecraft.world.inventory.GrindstoneMenu"
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $DispenserMenu } from "net.minecraft.world.inventory.DispenserMenu"
import { $BrewingStandMenu } from "net.minecraft.world.inventory.BrewingStandMenu"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $MenuType$MenuSupplier, $MenuType$MenuSupplier$$Type } from "net.minecraft.world.inventory.MenuType$MenuSupplier"
import { $LecternMenu } from "net.minecraft.world.inventory.LecternMenu"
import { $ShulkerBoxMenu } from "net.minecraft.world.inventory.ShulkerBoxMenu"
import { $BlastFurnaceMenu } from "net.minecraft.world.inventory.BlastFurnaceMenu"
import { $MerchantMenu } from "net.minecraft.world.inventory.MerchantMenu"
import { $BeaconMenu } from "net.minecraft.world.inventory.BeaconMenu"
import { $HopperMenu } from "net.minecraft.world.inventory.HopperMenu"
import { $SmithingMenu } from "net.minecraft.world.inventory.SmithingMenu"
import { $StonecutterMenu } from "net.minecraft.world.inventory.StonecutterMenu"
import { $IContainerFactory$$Type } from "net.minecraftforge.network.IContainerFactory"
import { $LoomMenu } from "net.minecraft.world.inventory.LoomMenu"
import { $FeatureFlagSet, $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $AnvilMenu } from "net.minecraft.world.inventory.AnvilMenu"
import { $ChestMenu } from "net.minecraft.world.inventory.ChestMenu"
import { $SmokerMenu } from "net.minecraft.world.inventory.SmokerMenu"
import { $CartographyTableMenu } from "net.minecraft.world.inventory.CartographyTableMenu"
import { $IForgeMenuType } from "net.minecraftforge.common.extensions.IForgeMenuType"
import { $EnchantmentMenu } from "net.minecraft.world.inventory.EnchantmentMenu"
import { $FurnaceMenu } from "net.minecraft.world.inventory.FurnaceMenu"
import { $CraftingMenu } from "net.minecraft.world.inventory.CraftingMenu"

export class $MenuType<T extends $AbstractContainerMenu = $AbstractContainerMenu> implements $FeatureElement, $IForgeMenuType<T> {
static readonly "ANVIL": $MenuType<$AnvilMenu>
static readonly "BEACON": $MenuType<$BeaconMenu>
static readonly "BLAST_FURNACE": $MenuType<$BlastFurnaceMenu>
static readonly "BREWING_STAND": $MenuType<$BrewingStandMenu>
static readonly "CARTOGRAPHY_TABLE": $MenuType<$CartographyTableMenu>
static readonly "CRAFTING": $MenuType<$CraftingMenu>
static readonly "ENCHANTMENT": $MenuType<$EnchantmentMenu>
static readonly "FURNACE": $MenuType<$FurnaceMenu>
static readonly "GENERIC_3x3": $MenuType<$DispenserMenu>
static readonly "GENERIC_9x1": $MenuType<$ChestMenu>
static readonly "GENERIC_9x2": $MenuType<$ChestMenu>
static readonly "GENERIC_9x3": $MenuType<$ChestMenu>
static readonly "GENERIC_9x4": $MenuType<$ChestMenu>
static readonly "GENERIC_9x5": $MenuType<$ChestMenu>
static readonly "GENERIC_9x6": $MenuType<$ChestMenu>
static readonly "GRINDSTONE": $MenuType<$GrindstoneMenu>
static readonly "HOPPER": $MenuType<$HopperMenu>
static readonly "LECTERN": $MenuType<$LecternMenu>
static readonly "LOOM": $MenuType<$LoomMenu>
static readonly "MERCHANT": $MenuType<$MerchantMenu>
static readonly "SHULKER_BOX": $MenuType<$ShulkerBoxMenu>
static readonly "SMITHING": $MenuType<$SmithingMenu>
static readonly "SMOKER": $MenuType<$SmokerMenu>
static readonly "STONECUTTER": $MenuType<$StonecutterMenu>
readonly "constructor": $MenuType$MenuSupplier<T>

constructor(menuSupplier0: $MenuType$MenuSupplier$$Type<T>, featureFlagSet1: $FeatureFlagSet$$Type)

public "create"(int0: integer, inventory1: $Inventory$$Type): T
public static "create"<T extends $AbstractContainerMenu>(iContainerFactory0: $IContainerFactory$$Type<T>): $MenuType<T>
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public static "register"<T extends $AbstractContainerMenu>(string0: string, menuSupplier1: $MenuType$MenuSupplier$$Type<T>): $MenuType<T>
public "requiredFeatures"(): $FeatureFlagSet
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.Menu
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.MenuTag
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MenuType$$Type<T extends $AbstractContainerMenu = $AbstractContainerMenu> = ($MenuType<T> | Special.Menu);
}

declare module "net.minecraft.world.inventory.EnchantmentMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EnchantmentMenu$$Type = ($EnchantmentMenu);
}

declare module "net.minecraft.world.inventory.FurnaceMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FurnaceMenu$$Type = ($FurnaceMenu);
}

declare module "net.minecraft.world.inventory.ChestMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChestMenu$$Type = ($ChestMenu);
}

declare module "net.minecraft.world.inventory.LecternMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LecternMenu$$Type = ($LecternMenu);
}

