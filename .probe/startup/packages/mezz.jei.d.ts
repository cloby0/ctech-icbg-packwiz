declare module "mezz.jei.api.recipe.IFocusGroup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IFocusGroup$$Type = ($IFocusGroup);
}

declare module "mezz.jei.api.gui.inputs.IJeiGuiEventListener" {
import { $ScreenRectangle$$Type } from "net.minecraft.client.gui.navigation.ScreenRectangle"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IJeiGuiEventListener$$Type = ($IJeiGuiEventListener | (() => $ScreenRectangle$$Type));
}

declare module "mezz.jei.api.runtime.config.IJeiConfigValueSerializer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IJeiConfigValueSerializer$$Type<T = any> = ($IJeiConfigValueSerializer<T>);
}

declare module "mezz.jei.api.runtime.config.IJeiConfigFile" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IJeiConfigFile$$Type = ($IJeiConfigFile);
}

declare module "mezz.jei.api.gui.placement.HorizontalAlignment" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HorizontalAlignment$$Type = ($HorizontalAlignment | ("left" | "center" | "right"));
}

declare module "mezz.jei.api.gui.widgets.ITextWidget" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ITextWidget$$Type = ($ITextWidget);
}

declare module "mezz.jei.api.runtime.IEditModeConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IEditModeConfig$$Type = ($IEditModeConfig);
}

declare module "mezz.jei.api.runtime.IJeiKeyMappings" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IJeiKeyMappings$$Type = ($IJeiKeyMappings);
}

declare module "mezz.jei.api.recipe.transfer.IRecipeTransferError$Type" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IRecipeTransferError$Type$$Type = ($IRecipeTransferError$Type | ("internal" | "user_facing" | "cosmetic"));
}

declare module "mezz.jei.api.gui.drawable.IDrawable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IDrawable$$Type = ($IDrawable);
}

declare module "mezz.jei.api.recipe.transfer.IRecipeTransferManager" {
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $IRecipeCategory } from "mezz.jei.api.recipe.category.IRecipeCategory"
import { $Optional$$Type } from "java.util.Optional"
import { $IRecipeTransferHandler$$Type } from "mezz.jei.api.recipe.transfer.IRecipeTransferHandler"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IRecipeTransferManager$$Type = ($IRecipeTransferManager | ((arg0: C, arg1: $IRecipeCategory<R>) => $Optional$$Type<$IRecipeTransferHandler$$Type<C, R>>));
}

declare module "mezz.jei.api.recipe.transfer.IRecipeTransferHandler" {
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IRecipeTransferHandler$$Type<C extends $AbstractContainerMenu = $AbstractContainerMenu, R = any> = ($IRecipeTransferHandler<C, R>);
}

declare module "mezz.jei.api.ingredients.IIngredientTypeWithSubtypes" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IIngredientTypeWithSubtypes$$Type<B = any, I = any> = ($IIngredientTypeWithSubtypes<B, I>);
}

declare module "mezz.jei.api.gui.widgets.IScrollGridWidget" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IScrollGridWidget$$Type = ($IScrollGridWidget);
}

declare module "mezz.jei.api.gui.builder.IRecipeSlotBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IRecipeSlotBuilder$$Type = ($IRecipeSlotBuilder);
}

declare module "mezz.jei.api.recipe.vanilla.IJeiAnvilRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IJeiAnvilRecipe$$Type = ($IJeiAnvilRecipe);
}

declare module "mezz.jei.api.recipe.category.IRecipeCategory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IRecipeCategory$$Type<T = any> = ($IRecipeCategory<T>);
}

declare module "mezz.jei.api.runtime.IIngredientVisibility" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IIngredientVisibility$$Type = ($IIngredientVisibility);
}

declare module "mezz.jei.api.gui.drawable.IDrawableBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IDrawableBuilder$$Type = ($IDrawableBuilder);
}

declare module "mezz.jei.api.gui.drawable.IDrawableAnimated$StartDirection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IDrawableAnimated$StartDirection$$Type = ($IDrawableAnimated$StartDirection | ("top" | "bottom" | "left" | "right"));
}

declare module "mezz.jei.api.gui.widgets.ISlottedRecipeWidget" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ISlottedRecipeWidget$$Type = ($ISlottedRecipeWidget);
}

declare module "mezz.jei.api.ingredients.ITypedIngredient" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ITypedIngredient$$Type<T = any> = ($ITypedIngredient<T>);
}

declare module "mezz.jei.api.runtime.IIngredientVisibility$IListener" {
import { $ITypedIngredient } from "mezz.jei.api.ingredients.ITypedIngredient"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IIngredientVisibility$IListener$$Type = ($IIngredientVisibility$IListener | ((arg0: $ITypedIngredient<V>, arg1: boolean) => void));
}

declare module "mezz.jei.api.ingredients.subtypes.IIngredientSubtypeInterpreter" {
import { $UidContext } from "mezz.jei.api.ingredients.subtypes.UidContext"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IIngredientSubtypeInterpreter$$Type<T = any> = ($IIngredientSubtypeInterpreter<T> | ((arg0: T, arg1: $UidContext) => string));
}

declare module "mezz.jei.api.ingredients.rendering.BatchRenderElement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BatchRenderElement$$Type<T = any> = ($BatchRenderElement<T>);
}

declare module "mezz.jei.api.recipe.vanilla.IJeiBrewingRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IJeiBrewingRecipe$$Type = ($IJeiBrewingRecipe);
}

declare module "mezz.jei.api.gui.handlers.IGuiClickableArea" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IGuiClickableArea$$Type = ($IGuiClickableArea);
}

declare module "mezz.jei.api.runtime.config.IJeiConfigValueSerializer$IDeserializeResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IJeiConfigValueSerializer$IDeserializeResult$$Type<T = any> = ($IJeiConfigValueSerializer$IDeserializeResult<T>);
}

declare module "mezz.jei.api.gui.widgets.IRecipeExtrasBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IRecipeExtrasBuilder$$Type = ($IRecipeExtrasBuilder);
}

declare module "mezz.jei.api.gui.placement.VerticalAlignment" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $VerticalAlignment$$Type = ($VerticalAlignment | ("top" | "center" | "bottom"));
}

declare module "mezz.jei.api.gui.ingredient.IRecipeSlotRichTooltipCallback" {
import { $IRecipeSlotView } from "mezz.jei.api.gui.ingredient.IRecipeSlotView"
import { $ITooltipBuilder } from "mezz.jei.api.gui.builder.ITooltipBuilder"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IRecipeSlotRichTooltipCallback$$Type = ($IRecipeSlotRichTooltipCallback | ((arg0: $IRecipeSlotView, arg1: $ITooltipBuilder) => void));
}

declare module "mezz.jei.api.runtime.IIngredientListOverlay" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IIngredientListOverlay$$Type = ($IIngredientListOverlay);
}

declare module "mezz.jei.api.ingredients.IIngredientType" {
import { $Class$$Type } from "java.lang.Class"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IIngredientType$$Type<T = any> = ($IIngredientType<T> | (() => $Class$$Type<T>));
}

declare module "mezz.jei.api.gui.handlers.IGhostIngredientHandler$Target" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IGhostIngredientHandler$Target$$Type<I = any> = ($IGhostIngredientHandler$Target<I>);
}

declare module "mezz.jei.api.runtime.IRecipesGui" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IRecipesGui$$Type = ($IRecipesGui);
}

declare module "mezz.jei.api.recipe.vanilla.IVanillaRecipeFactory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IVanillaRecipeFactory$$Type = ($IVanillaRecipeFactory);
}

declare module "mezz.jei.api.runtime.IIngredientFilter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IIngredientFilter$$Type = ($IIngredientFilter);
}

declare module "mezz.jei.api.ingredients.IIngredientRenderer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IIngredientRenderer$$Type<T = any> = ($IIngredientRenderer<T>);
}

declare module "mezz.jei.api.helpers.IColorHelper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IColorHelper$$Type = ($IColorHelper);
}

declare module "mezz.jei.api.recipe.IRecipeLookup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IRecipeLookup$$Type<R = any> = ($IRecipeLookup<R>);
}

declare module "mezz.jei.api.runtime.IScreenHelper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IScreenHelper$$Type = ($IScreenHelper);
}

declare module "mezz.jei.api.ingredients.IIngredientHelper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IIngredientHelper$$Type<V = any> = ($IIngredientHelper<V>);
}

declare module "mezz.jei.api.gui.builder.IIngredientConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IIngredientConsumer$$Type = ($IIngredientConsumer);
}

declare module "mezz.jei.api.gui.builder.IIngredientAcceptor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IIngredientAcceptor$$Type<THIS extends $IIngredientAcceptor<THIS> = $IIngredientAcceptor<THIS>> = ($IIngredientAcceptor<THIS>);
}

declare module "mezz.jei.api.runtime.IJeiRuntime" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IJeiRuntime$$Type = ($IJeiRuntime);
}

declare module "mezz.jei.api.helpers.IModIdHelper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IModIdHelper$$Type = ($IModIdHelper);
}

declare module "mezz.jei.api.gui.ingredient.IRecipeSlotTooltipCallback" {
import { $IRecipeSlotView } from "mezz.jei.api.gui.ingredient.IRecipeSlotView"
import { $List } from "java.util.List"
import { $Component } from "net.minecraft.network.chat.Component"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IRecipeSlotTooltipCallback$$Type = ($IRecipeSlotTooltipCallback | ((arg0: $IRecipeSlotView, arg1: $List<$Component>) => void));
}

declare module "mezz.jei.api.gui.widgets.ISlottedWidgetFactory" {
import { $List } from "java.util.List"
import { $IRecipeExtrasBuilder } from "mezz.jei.api.gui.widgets.IRecipeExtrasBuilder"
import { $IRecipeSlotDrawable } from "mezz.jei.api.gui.ingredient.IRecipeSlotDrawable"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ISlottedWidgetFactory$$Type<R = any> = ($ISlottedWidgetFactory<R> | ((arg0: $IRecipeExtrasBuilder, arg1: R, arg2: $List<$IRecipeSlotDrawable>) => void));
}

declare module "mezz.jei.api.runtime.IJeiKeyMapping" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IJeiKeyMapping$$Type = ($IJeiKeyMapping);
}

declare module "mezz.jei.api.helpers.IJeiHelpers" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IJeiHelpers$$Type = ($IJeiHelpers);
}

declare module "mezz.jei.api.runtime.IIngredientManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IIngredientManager$$Type = ($IIngredientManager);
}

declare module "mezz.jei.api.recipe.IRecipeCategoriesLookup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IRecipeCategoriesLookup$$Type = ($IRecipeCategoriesLookup);
}

declare module "mezz.jei.api.gui.inputs.RecipeSlotUnderMouse" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeSlotUnderMouse$$Type = ($RecipeSlotUnderMouse);
}

declare module "mezz.jei.api.gui.builder.ITooltipBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ITooltipBuilder$$Type = ($ITooltipBuilder);
}

declare module "mezz.jei.api.gui.drawable.IDrawableAnimated" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IDrawableAnimated$$Type = ($IDrawableAnimated);
}

declare module "mezz.jei.api.recipe.transfer.IRecipeTransferError" {
import { $IRecipeTransferError$Type$$Type } from "mezz.jei.api.recipe.transfer.IRecipeTransferError$Type"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IRecipeTransferError$$Type = ($IRecipeTransferError | (() => $IRecipeTransferError$Type$$Type));
}

declare module "mezz.jei.api.recipe.IFocusFactory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IFocusFactory$$Type = ($IFocusFactory);
}

declare module "mezz.jei.api.runtime.config.IJeiConfigManager" {
import { $IJeiConfigFile$$Type } from "mezz.jei.api.runtime.config.IJeiConfigFile"
import { $Collection$$Type } from "java.util.Collection"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IJeiConfigManager$$Type = ($IJeiConfigManager | (() => $Collection$$Type<$IJeiConfigFile$$Type>));
}

declare module "mezz.jei.api.gui.builder.IRecipeLayoutBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IRecipeLayoutBuilder$$Type = ($IRecipeLayoutBuilder);
}

declare module "mezz.jei.api.runtime.IClickableIngredient" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IClickableIngredient$$Type<T = any> = ($IClickableIngredient<T>);
}

declare module "mezz.jei.api.runtime.config.IJeiConfigValue" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IJeiConfigValue$$Type<T = any> = ($IJeiConfigValue<T>);
}

declare module "mezz.jei.api.recipe.RecipeType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeType$$Type<T = any> = ($RecipeType<T>);
}

declare module "mezz.jei.api.runtime.IBookmarkOverlay" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IBookmarkOverlay$$Type = ($IBookmarkOverlay);
}

declare module "mezz.jei.api.ingredients.subtypes.UidContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $UidContext$$Type = ($UidContext | ("ingredient" | "recipe"));
}

declare module "mezz.jei.api.gui.IRecipeLayoutDrawable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IRecipeLayoutDrawable$$Type<R = any> = ($IRecipeLayoutDrawable<R>);
}

declare module "mezz.jei.api.gui.drawable.IDrawableStatic" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IDrawableStatic$$Type = ($IDrawableStatic);
}

declare module "mezz.jei.api.helpers.IStackHelper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IStackHelper$$Type = ($IStackHelper);
}

declare module "mezz.jei.api.gui.handlers.IGuiProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IGuiProperties$$Type = ($IGuiProperties);
}

declare module "mezz.jei.api.gui.ingredient.ICraftingGridHelper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ICraftingGridHelper$$Type = ($ICraftingGridHelper);
}

declare module "mezz.jei.api.gui.ingredient.IRecipeSlotDrawable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IRecipeSlotDrawable$$Type = ($IRecipeSlotDrawable);
}

declare module "mezz.jei.api.gui.placement.IPlaceable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IPlaceable$$Type<THIS extends $IPlaceable<THIS> = $IPlaceable<THIS>> = ($IPlaceable<THIS>);
}

declare module "mezz.jei.api.helpers.IPlatformFluidHelper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IPlatformFluidHelper$$Type<T = any> = ($IPlatformFluidHelper<T>);
}

declare module "mezz.jei.api.gui.widgets.IScrollGridWidgetFactory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IScrollGridWidgetFactory$$Type<R = any> = ($IScrollGridWidgetFactory<R>);
}

declare module "mezz.jei.api.runtime.IEditModeConfig$HideMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IEditModeConfig$HideMode$$Type = ($IEditModeConfig$HideMode | ("single" | "wildcard"));
}

declare module "mezz.jei.api.gui.inputs.IJeiUserInput" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IJeiUserInput$$Type = ($IJeiUserInput);
}

declare module "mezz.jei.api.gui.ingredient.IRecipeSlotView" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IRecipeSlotView$$Type = ($IRecipeSlotView);
}

declare module "mezz.jei.api.gui.handlers.IGhostIngredientHandler" {
import { $Screen, $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IGhostIngredientHandler$$Type<T extends $Screen = $Screen> = ($IGhostIngredientHandler<T>);
}

declare module "mezz.jei.api.recipe.IFocus" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IFocus$$Type<V = any> = ($IFocus<V>);
}

declare module "mezz.jei.api.helpers.IGuiHelper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IGuiHelper$$Type = ($IGuiHelper);
}

declare module "mezz.jei.api.runtime.config.IJeiConfigCategory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IJeiConfigCategory$$Type = ($IJeiConfigCategory);
}

declare module "mezz.jei.api.gui.inputs.IJeiInputHandler" {
import { $ScreenRectangle$$Type } from "net.minecraft.client.gui.navigation.ScreenRectangle"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IJeiInputHandler$$Type = ($IJeiInputHandler | (() => $ScreenRectangle$$Type));
}

declare module "mezz.jei.api.runtime.IIngredientManager$IIngredientListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IIngredientManager$IIngredientListener$$Type = ($IIngredientManager$IIngredientListener);
}

declare module "mezz.jei.api.recipe.IRecipeManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IRecipeManager$$Type = ($IRecipeManager);
}

declare module "mezz.jei.api.gui.widgets.IScrollBoxWidget" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IScrollBoxWidget$$Type = ($IScrollBoxWidget);
}

declare module "mezz.jei.api.gui.ingredient.IRecipeSlotDrawablesView" {
import { $List$$Type } from "java.util.List"
import { $IRecipeSlotDrawable$$Type } from "mezz.jei.api.gui.ingredient.IRecipeSlotDrawable"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IRecipeSlotDrawablesView$$Type = ($IRecipeSlotDrawablesView | (() => $List$$Type<$IRecipeSlotDrawable$$Type>));
}

declare module "mezz.jei.api.recipe.IRecipeCatalystLookup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IRecipeCatalystLookup$$Type = ($IRecipeCatalystLookup);
}

declare module "mezz.jei.api.gui.ITickTimer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ITickTimer$$Type = ($ITickTimer);
}

declare module "mezz.jei.api.gui.drawable.IScalableDrawable" {
import { $GuiGraphics } from "net.minecraft.client.gui.GuiGraphics"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IScalableDrawable$$Type = ($IScalableDrawable | ((arg0: $GuiGraphics, arg1: integer, arg2: integer, arg3: integer, arg4: integer) => void));
}

declare module "mezz.jei.api.recipe.RecipeIngredientRole" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeIngredientRole$$Type = ($RecipeIngredientRole | ("input" | "output" | "catalyst" | "render_only"));
}

declare module "mezz.jei.api.registration.ISubtypeRegistration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ISubtypeRegistration$$Type = ($ISubtypeRegistration);
}

declare module "mezz.jei.api.gui.widgets.IRecipeWidget" {
import { $ScreenPosition$$Type } from "net.minecraft.client.gui.navigation.ScreenPosition"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IRecipeWidget$$Type = ($IRecipeWidget | (() => $ScreenPosition$$Type));
}

declare module "mezz.jei.api.gui.ingredient.IRecipeSlotsView" {
import { $IRecipeSlotView$$Type } from "mezz.jei.api.gui.ingredient.IRecipeSlotView"
import { $List$$Type } from "java.util.List"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IRecipeSlotsView$$Type = ($IRecipeSlotsView | (() => $List$$Type<$IRecipeSlotView$$Type>));
}

declare module "mezz.jei.api.registration.IRecipeRegistration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IRecipeRegistration$$Type = ($IRecipeRegistration);
}

