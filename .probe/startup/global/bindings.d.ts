import { $KMath } from "dev.latvian.mods.kubejs.bindings.KMath"
import { $ProgressTexture$FillDirection } from "com.lowdragmc.lowdraglib.gui.texture.ProgressTexture$FillDirection"
import { $FluidStorageKeys } from "com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys"
import { $PhantomFluidWidget } from "com.lowdragmc.lowdraglib.gui.widget.PhantomFluidWidget"
import { $TabButton } from "com.lowdragmc.lowdraglib.gui.widget.TabButton"
import { $LootEntryWrapper } from "com.almostreliable.lootjs.kube.LootEntryWrapper"
import { $ColorWrapper$$Static } from "dev.latvian.mods.rhino.mod.wrapper.ColorWrapper"
import { $DirectionWrapper$$Static } from "dev.latvian.mods.rhino.mod.wrapper.DirectionWrapper"
import { $MaterialFlags } from "com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialFlags"
import { $IO } from "com.lowdragmc.mbd2.api.capability.recipe.IO"
import { $ArmorProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.ArmorProperty"
import { $TabContainer } from "com.lowdragmc.lowdraglib.gui.widget.TabContainer"
import { $WorldGenLayers } from "com.gregtechceu.gtceu.api.data.worldgen.WorldGenLayers"
import { $BlockWrapper } from "dev.latvian.mods.kubejs.bindings.BlockWrapper"
import { $GunProperties } from "com.tacz.guns.api.GunProperties"
import { $GTSoundEntries } from "com.gregtechceu.gtceu.common.data.GTSoundEntries"
import { $UUIDWrapper$$Static } from "dev.latvian.mods.rhino.mod.wrapper.UUIDWrapper"
import { $Duration } from "java.time.Duration"
import { $ShaderTexture } from "com.lowdragmc.lowdraglib.gui.texture.ShaderTexture"
import { $ForgeItemFilter$$Static } from "com.almostreliable.lootjs.forge.filters.ForgeItemFilter"
import { $Vector3f } from "org.joml.Vector3f"
import { $CorporeaHelperImpl } from "vazkii.botania.common.impl.corporea.CorporeaHelperImpl"
import { $TankWidget } from "com.lowdragmc.lowdraglib.gui.widget.TankWidget"
import { $GTMachineModels } from "com.gregtechceu.gtceu.common.data.models.GTMachineModels"
import { $WidgetGroup } from "com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"
import { $CleanroomType } from "com.gregtechceu.gtceu.api.machine.multiblock.CleanroomType"
import { $NotificationBuilder } from "dev.latvian.mods.kubejs.util.NotificationBuilder"
import { $SelectableWidgetGroup } from "com.lowdragmc.lowdraglib.gui.widget.SelectableWidgetGroup"
import { $GTRecipeTypes } from "com.gregtechceu.gtceu.common.data.GTRecipeTypes"
import { $TextFieldWidget } from "com.lowdragmc.lowdraglib.gui.widget.TextFieldWidget"
import { $GTMachines } from "com.gregtechceu.gtceu.common.data.GTMachines"
import { $NBTPredicates } from "com.gregtechceu.gtceu.api.recipe.ingredient.nbtpredicate.NBTPredicates"
import { $TimelessItemWrapper } from "com.tacz.guns.compat.kubejs.util.TimelessItemWrapper"
import { $AABBWrapper$$Static } from "dev.latvian.mods.rhino.mod.wrapper.AABBWrapper"
import { $GTItems } from "com.gregtechceu.gtceu.common.data.GTItems"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $FluidState } from "com.gregtechceu.gtceu.api.fluids.FluidState"
import { $ItemUIJSFactory } from "com.lowdragmc.lowdraglib.kjs.ui.ItemUIJSFactory"
import { $SceneWidget } from "com.lowdragmc.lowdraglib.gui.widget.SceneWidget"
import { $SoundType } from "net.minecraft.world.level.block.SoundType"
import { $MachineState } from "com.lowdragmc.mbd2.common.machine.definition.config.MachineState"
import { $GTCraftingComponents } from "com.gregtechceu.gtceu.data.recipe.GTCraftingComponents"
import { $IntervalJS } from "com.almostreliable.lootjs.kube.wrapper.IntervalJS"
import { $GTMultiMachines } from "com.gregtechceu.gtceu.common.data.machines.GTMultiMachines"
import { $OverclockingLogic$$Static } from "com.gregtechceu.gtceu.api.recipe.OverclockingLogic"
import { $FluidAttributes } from "com.gregtechceu.gtceu.api.fluids.attribute.FluidAttributes"
import { $JsonIO } from "dev.latvian.mods.kubejs.util.JsonIO"
import { $UtilsWrapper$$Static } from "dev.latvian.mods.kubejs.bindings.UtilsWrapper"
import { $LanguageDefinition } from "com.lowdragmc.lowdraglib.gui.widget.codeeditor.language.LanguageDefinition"
import { $FluidWrapper } from "dev.latvian.mods.kubejs.fluid.FluidWrapper"
import { $GreatePropertyKeys } from "electrolyte.greate.content.gtceu.material.GreatePropertyKeys"
import { $ImageWidget } from "com.lowdragmc.lowdraglib.gui.widget.ImageWidget"
import { $TreeListWidget } from "com.lowdragmc.lowdraglib.gui.widget.TreeListWidget"
import { $MBDRegistries } from "com.lowdragmc.mbd2.api.registry.MBDRegistries"
import { $FluidAmounts$$Static } from "dev.latvian.mods.kubejs.util.FluidAmounts"
import { $TagPrefix$Conditions } from "com.gregtechceu.gtceu.api.data.tag.TagPrefix$Conditions"
import { $FluidTransferHelperImpl } from "com.lowdragmc.lowdraglib.side.fluid.forge.FluidTransferHelperImpl"
import { $GTMachineModelProperties } from "com.gregtechceu.gtceu.api.machine.property.GTMachineModelProperties"
import { $ItemWrapper$$Static } from "dev.latvian.mods.kubejs.bindings.ItemWrapper"
import { $TextBoxWidget } from "com.lowdragmc.lowdraglib.gui.widget.TextBoxWidget"
import { $BlockUIJSFactory } from "com.lowdragmc.lowdraglib.kjs.ui.BlockUIJSFactory"
import { $FactoryBlockPattern } from "com.gregtechceu.gtceu.api.pattern.FactoryBlockPattern"
import { $GCYMMachines } from "com.gregtechceu.gtceu.common.data.machines.GCYMMachines"
import { $MaterialIconSet } from "com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialIconSet"
import { $Stats } from "net.minecraft.stats.Stats"
import { $GTCapes } from "com.gregtechceu.gtceu.common.cosmetics.GTCapes"
import { $MaterialIconType } from "com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialIconType"
import { $PartAbility } from "com.gregtechceu.gtceu.api.machine.multiblock.PartAbility"
import { $GTRecipeCategories } from "com.gregtechceu.gtceu.common.data.GTRecipeCategories"
import { $GTMaterialBlocks } from "com.gregtechceu.gtceu.common.data.GTMaterialBlocks"
import { $RotationState } from "com.gregtechceu.gtceu.api.data.RotationState"
import { $FluidBuilder } from "com.gregtechceu.gtceu.api.fluids.FluidBuilder"
import { $InputItem } from "dev.latvian.mods.kubejs.item.InputItem"
import { $ItemStackTexture } from "com.lowdragmc.lowdraglib.gui.texture.ItemStackTexture"
import { $GTMaterials } from "com.gregtechceu.gtceu.common.data.GTMaterials"
import { $CapeRegistry } from "com.gregtechceu.gtceu.api.cosmetics.CapeRegistry"
import { $GuiTextureGroup } from "com.lowdragmc.lowdraglib.gui.texture.GuiTextureGroup"
import { $ItemTransferHelperImpl } from "com.lowdragmc.lowdraglib.side.item.forge.ItemTransferHelperImpl"
import { $ProgressWidget } from "com.lowdragmc.lowdraglib.gui.widget.ProgressWidget"
import { $ForgeEventWrapper } from "dev.latvian.mods.kubejs.forge.ForgeEventWrapper"
import { $DialogWidget } from "com.lowdragmc.lowdraglib.gui.widget.DialogWidget"
import { $DikeVeinGenerator$DikeBlockDefinition } from "com.gregtechceu.gtceu.api.data.worldgen.generator.veins.DikeVeinGenerator$DikeBlockDefinition"
import { $FluidStorage } from "com.lowdragmc.lowdraglib.misc.FluidStorage"
import { $GTCEu } from "com.gregtechceu.gtceu.GTCEu"
import { $GTValues } from "com.gregtechceu.gtceu.api.GTValues"
import { $LootContextType } from "com.almostreliable.lootjs.core.LootContextType"
import { $FTBQuestsKubeJSWrapper } from "dev.ftb.mods.ftbxmodcompat.ftbquests.kubejs.FTBQuestsKubeJSWrapper"
import { $Vector4f } from "org.joml.Vector4f"
import { $GreateValues } from "electrolyte.greate.GreateValues"
import { $ModifierFunction$$Static } from "com.gregtechceu.gtceu.api.recipe.modifier.ModifierFunction"
import { $Predicates } from "com.gregtechceu.gtceu.api.pattern.Predicates"
import { $IngredientWrapper$$Static } from "dev.latvian.mods.kubejs.bindings.IngredientWrapper"
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $GTModels } from "com.gregtechceu.gtceu.common.data.models.GTModels"
import { $TagPrefix } from "com.gregtechceu.gtceu.api.data.tag.TagPrefix"
import { $Items } from "net.minecraft.world.item.Items"
import { $BlockSelectorWidget } from "com.lowdragmc.lowdraglib.gui.widget.BlockSelectorWidget"
import { $HazardProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.HazardProperty"
import { $Quaternionf } from "org.joml.Quaternionf"
import { $GTElements } from "com.gregtechceu.gtceu.common.data.GTElements"
import { $ItemFilter$$Static } from "com.almostreliable.lootjs.filters.ItemFilter"
import { $SlotWidget } from "com.lowdragmc.lowdraglib.gui.widget.SlotWidget"
import { $ResourceBorderTexture } from "com.lowdragmc.lowdraglib.gui.texture.ResourceBorderTexture"
import { $GreateCraftingComponents } from "electrolyte.greate.foundation.data.recipe.GreateCraftingComponents"
import { $GTBlocks } from "com.gregtechceu.gtceu.common.data.GTBlocks"
import { $AnimationTexture } from "com.lowdragmc.lowdraglib.gui.texture.AnimationTexture"
import { $GTRegistries } from "com.gregtechceu.gtceu.api.registry.GTRegistries"
import { $ProgressTexture } from "com.lowdragmc.lowdraglib.gui.texture.ProgressTexture"
import { $GTMedicalConditions } from "com.gregtechceu.gtceu.common.data.GTMedicalConditions"
import { $ConsoleJS } from "dev.latvian.mods.kubejs.util.ConsoleJS"
import { $LabelWidget } from "com.lowdragmc.lowdraglib.gui.widget.LabelWidget"
import { $Math } from "java.lang.Math"
import { $NBTIOWrapper$$Static } from "dev.latvian.mods.kubejs.util.NBTIOWrapper"
import { $MaterialRegistryManager } from "com.gregtechceu.gtceu.common.unification.material.MaterialRegistryManager"
import { $ModularUI } from "com.lowdragmc.lowdraglib.gui.modular.ModularUI"
import { $MachineModifiers } from "com.gregtechceu.gtceu.integration.kjs.helpers.MachineModifiers"
import { $TextTexture } from "com.lowdragmc.lowdraglib.gui.texture.TextTexture"
import { $AlmostKube } from "com.almostreliable.unified.compat.AlmostKube"
import { $BlockStateProperties } from "net.minecraft.world.level.block.state.properties.BlockStateProperties"
import { $Position } from "com.lowdragmc.lowdraglib.utils.Position"
import { $EnergyStack } from "com.gregtechceu.gtceu.api.recipe.ingredient.EnergyStack"
import { $MachineConstructors } from "com.gregtechceu.gtceu.integration.kjs.helpers.MachineConstructors"
import { $Size } from "com.lowdragmc.lowdraglib.utils.Size"
import { $DraggableScrollableWidgetGroup } from "com.lowdragmc.lowdraglib.gui.widget.DraggableScrollableWidgetGroup"
import { $RotationAxis } from "dev.latvian.mods.kubejs.util.RotationAxis"
import { $GTOreDefinition } from "com.gregtechceu.gtceu.api.data.worldgen.GTOreDefinition"
import { $MedicalCondition } from "com.gregtechceu.gtceu.api.data.medicalcondition.MedicalCondition"
import { $RecipeCapability } from "com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability"
import { $Blocks } from "net.minecraft.world.level.block.Blocks"
import { $DraggableWidgetGroup } from "com.lowdragmc.lowdraglib.gui.widget.DraggableWidgetGroup"
import { $GTToolType } from "com.gregtechceu.gtceu.api.item.tool.GTToolType"
import { $LycheeLootContextParams } from "snownee.lychee.LycheeLootContextParams"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $ResourceTexture } from "com.lowdragmc.lowdraglib.gui.texture.ResourceTexture"
import { $GTMaterialItems } from "com.gregtechceu.gtceu.common.data.GTMaterialItems"
import { $MaterialEntry } from "com.gregtechceu.gtceu.api.data.chemical.material.stack.MaterialEntry"
import { $Matrix3f } from "org.joml.Matrix3f"
import { $Shapes } from "net.minecraft.world.phys.shapes.Shapes"
import { $TextWrapper } from "dev.latvian.mods.kubejs.bindings.TextWrapper"
import { $CraftingComponent } from "com.gregtechceu.gtceu.data.recipe.CraftingComponent"
import { $GreateMaterialFlags } from "electrolyte.greate.content.gtceu.material.GreateMaterialFlags"
import { $BlockStatePredicate$$Static } from "dev.latvian.mods.kubejs.block.state.BlockStatePredicate"
import { $ConfigBlockProperties } from "com.lowdragmc.mbd2.common.machine.definition.config.ConfigBlockProperties"
import { $LootContextParams } from "net.minecraft.world.level.storage.loot.parameters.LootContextParams"
import { $ToolProperty } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty"
import { $UIProject } from "com.lowdragmc.lowdraglib.gui.editor.data.UIProject"
import { $ManaItemHandlerImpl } from "vazkii.botania.common.impl.mana.ManaItemHandlerImpl"
import { $HashMap } from "java.util.HashMap"
import { $PhantomSlotWidget } from "com.lowdragmc.lowdraglib.gui.widget.PhantomSlotWidget"
import { $GCYMBlocks } from "com.gregtechceu.gtceu.common.data.GCYMBlocks"
import { $IngredientForgeHelper } from "dev.latvian.mods.kubejs.platform.forge.IngredientForgeHelper"
import { $PropertyKey } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey"
import { $Minecraft } from "net.minecraft.client.Minecraft"
import { $JavaWrapper } from "dev.latvian.mods.kubejs.bindings.JavaWrapper"
import { $DamageSource } from "net.minecraft.world.damagesource.DamageSource"
import { $GTOres } from "com.gregtechceu.gtceu.common.data.GTOres"
import { $NBTUtils$$Static } from "dev.latvian.mods.rhino.mod.util.NBTUtils"
import { $Vec3i } from "net.minecraft.core.Vec3i"
import { $GTRecipeModifiers } from "com.gregtechceu.gtceu.common.data.GTRecipeModifiers"
import { $Reference } from "snownee.lychee.core.Reference"
import { $ItemStackTransfer } from "com.lowdragmc.lowdraglib.misc.ItemStackTransfer"
import { $Matrix4f } from "org.joml.Matrix4f"
import { $Symptom } from "com.gregtechceu.gtceu.api.data.medicalcondition.Symptom"
import { $Painter } from "dev.latvian.mods.kubejs.client.painter.Painter"
import { $PlatformWrapper } from "dev.latvian.mods.kubejs.script.PlatformWrapper"
import { $ContentModifier } from "com.lowdragmc.mbd2.api.recipe.content.ContentModifier"
import { $GuiTextures } from "com.gregtechceu.gtceu.api.gui.GuiTextures"
import { $ColorPattern } from "com.lowdragmc.lowdraglib.gui.editor.ColorPattern"
import { $DynamicRenderHelper } from "com.gregtechceu.gtceu.client.renderer.machine.DynamicRenderHelper"
import { $GTLayerPattern } from "com.gregtechceu.gtceu.api.data.worldgen.GTLayerPattern"
import { $SwitchWidget } from "com.lowdragmc.lowdraglib.gui.widget.SwitchWidget"
import { $ChanceLogic } from "com.gregtechceu.gtceu.api.recipe.chance.logic.ChanceLogic"
import { $TextTexture$TextType } from "com.lowdragmc.lowdraglib.gui.texture.TextTexture$TextType"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $ButtonWidget } from "com.lowdragmc.lowdraglib.gui.widget.ButtonWidget"
import { $MultiblockShapeInfo } from "com.gregtechceu.gtceu.api.pattern.MultiblockShapeInfo"
import { $OutputItem } from "dev.latvian.mods.kubejs.item.OutputItem"
import { $ColorRectTexture } from "com.lowdragmc.lowdraglib.gui.texture.ColorRectTexture"
import { $Languages$$Static } from "com.lowdragmc.lowdraglib.gui.widget.codeeditor.language.Languages"
import { $GTCEuAPI } from "com.gregtechceu.gtceu.api.GTCEuAPI"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $CreateMachineState } from "com.lowdragmc.mbd2.integration.create.machine.CreateMachineState"
import { $EnergyStack$WithIO } from "com.gregtechceu.gtceu.api.recipe.ingredient.EnergyStack$WithIO"
import { $CapabilityIO } from "com.lowdragmc.mbd2.common.trait.CapabilityIO"
import { $GunSmithTableResultInfo } from "com.tacz.guns.compat.kubejs.util.GunSmithTableResultInfo"
import { $CodeEditorWidget } from "com.lowdragmc.lowdraglib.gui.widget.codeeditor.CodeEditorWidget"
import { $ChemicalHelper } from "com.gregtechceu.gtceu.api.data.chemical.ChemicalHelper"
import { $GTMachineUtils } from "com.gregtechceu.gtceu.common.data.machines.GTMachineUtils"

declare global {
const AABB: (typeof $AABBWrapper$$Static)
const AlmostUnified: (typeof $AlmostKube)
const AnimationTexture: (typeof $AnimationTexture)
const ArmorProperty: (typeof $ArmorProperty)
const Block: (typeof $BlockWrapper)
const BlockPos: (typeof $BlockPos)
const BlockProperties: (typeof $BlockStateProperties)
const BlockSelectorWidget: (typeof $BlockSelectorWidget)
const BlockStatePredicate: (typeof $BlockStatePredicate$$Static)
const BlockUIFactory: (typeof $BlockUIJSFactory)
const Blocks: (typeof $Blocks)
const ButtonWidget: (typeof $ButtonWidget)
const CapabilityIO: (typeof $CapabilityIO)
const CapeRegistry: (typeof $CapeRegistry)
const ChanceLogic: (typeof $ChanceLogic)
const ChemicalHelper: (typeof $ChemicalHelper)
const CleanroomType: (typeof $CleanroomType)
const Client: $Minecraft
const CodeEditorWidget: (typeof $CodeEditorWidget)
const Color: (typeof $ColorWrapper$$Static)
const ColorPattern: (typeof $ColorPattern)
const ColorRectTexture: (typeof $ColorRectTexture)
const Component: (typeof $TextWrapper)
const ConfigBlockProperties: (typeof $ConfigBlockProperties)
const ContentModifier: (typeof $ContentModifier)
const CorporeaHelper: $CorporeaHelperImpl
const CraftingComponent: (typeof $CraftingComponent)
const CreateMachineState: (typeof $CreateMachineState)
const DamageSource: (typeof $DamageSource)
const DialogWidget: (typeof $DialogWidget)
const Direction: (typeof $DirectionWrapper$$Static)
const DraggableScrollableWidgetGroup: (typeof $DraggableScrollableWidgetGroup)
const DraggableWidgetGroup: (typeof $DraggableWidgetGroup)
const Duration: (typeof $Duration)
const EditorLanguageDefinition: (typeof $LanguageDefinition)
const EditorLanguages: (typeof $Languages$$Static)
const EnergyStack: (typeof $EnergyStack)
const FTBQuests: $FTBQuestsKubeJSWrapper
const Facing: (typeof $DirectionWrapper$$Static)
const FactoryBlockPattern: (typeof $FactoryBlockPattern)
const FillDirection: (typeof $ProgressTexture$FillDirection)
const Fluid: (typeof $FluidWrapper)
const FluidAmounts: (typeof $FluidAmounts$$Static)
const FluidStorage: (typeof $FluidStorage)
const FluidTransferHelper: (typeof $FluidTransferHelperImpl)
const ForgeEvents: $ForgeEventWrapper
const ForgeItemFilter: (typeof $ForgeItemFilter$$Static)
const ForgeModEvents: $ForgeEventWrapper
const GCYMBlocks: (typeof $GCYMBlocks)
const GCYMMachines: (typeof $GCYMMachines)
const GTBlocks: (typeof $GTBlocks)
const GTCEu: (typeof $GTCEu)
const GTCEuAPI: (typeof $GTCEuAPI)
const GTCapes: (typeof $GTCapes)
const GTCraftingComponents: (typeof $GTCraftingComponents)
const GTDikeBlockDefinition: (typeof $DikeVeinGenerator$DikeBlockDefinition)
const GTDynamicRenders: (typeof $DynamicRenderHelper)
const GTElements: (typeof $GTElements)
const GTFluidAttributes: (typeof $FluidAttributes)
const GTFluidBuilder: (typeof $FluidBuilder)
const GTFluidState: (typeof $FluidState)
const GTFluidStorageKeys: (typeof $FluidStorageKeys)
const GTItems: (typeof $GTItems)
const GTLayerPattern: (typeof $GTLayerPattern)
const GTMachineModels: (typeof $GTMachineModels)
const GTMachineUtils: (typeof $GTMachineUtils)
const GTMachines: (typeof $GTMachines)
const GTMaterialBlocks: (typeof $GTMaterialBlocks)
const GTMaterialFlags: (typeof $MaterialFlags)
const GTMaterialIconSet: (typeof $MaterialIconSet)
const GTMaterialIconType: (typeof $MaterialIconType)
const GTMaterialItems: (typeof $GTMaterialItems)
const GTMaterialRegistry: $MaterialRegistryManager
const GTMaterials: (typeof $GTMaterials)
const GTMedicalConditions: (typeof $GTMedicalConditions)
const GTModelProperties: (typeof $GTMachineModelProperties)
const GTModels: (typeof $GTModels)
const GTMultiMachines: (typeof $GTMultiMachines)
const GTOreVein: (typeof $GTOreDefinition)
const GTOres: (typeof $GTOres)
const GTRecipeCategories: (typeof $GTRecipeCategories)
const GTRecipeModifiers: (typeof $GTRecipeModifiers)
const GTRecipeTypes: (typeof $GTRecipeTypes)
const GTRegistries: (typeof $GTRegistries)
const GTSoundEntries: (typeof $GTSoundEntries)
const GTToolType: (typeof $GTToolType)
const GTValues: (typeof $GTValues)
const GTWorldGenLayers: (typeof $WorldGenLayers)
const GreateCraftingComponents: (typeof $GreateCraftingComponents)
const GreateMaterialFlags: (typeof $GreateMaterialFlags)
const GreatePropertyKeys: (typeof $GreatePropertyKeys)
const GreateValues: (typeof $GreateValues)
const GuiPos: (typeof $Position)
const GuiSize: (typeof $Size)
const GuiTextureGroup: (typeof $GuiTextureGroup)
const GuiTextures: (typeof $GuiTextures)
const GunProperties: (typeof $GunProperties)
const GunSmithTableResultInfo: (typeof $GunSmithTableResultInfo)
const HOUR: double
const HazardProperty: (typeof $HazardProperty)
const IO: (typeof $IO)
const IOEnergyStack: (typeof $EnergyStack$WithIO)
const ImageWidget: (typeof $ImageWidget)
const Ingredient: (typeof $IngredientWrapper$$Static)
const IngredientHelper: $IngredientForgeHelper
const InputItem: (typeof $InputItem)
const InteractionResult: (typeof $InteractionResult)
const Interval: $IntervalJS
const Item: (typeof $ItemWrapper$$Static)
const ItemFilter: (typeof $ItemFilter$$Static)
const ItemGenerationCondition: (typeof $TagPrefix$Conditions)
const ItemStackTexture: (typeof $ItemStackTexture)
const ItemStackTransfer: (typeof $ItemStackTransfer)
const ItemTransferHelper: (typeof $ItemTransferHelperImpl)
const ItemUIFactory: (typeof $ItemUIJSFactory)
const Items: (typeof $Items)
const Java: $JavaWrapper
const JavaMath: (typeof $Math)
const JsonIO: (typeof $JsonIO)
const KMath: (typeof $KMath)
const LabelWidget: (typeof $LabelWidget)
const LootContextParams: (typeof $LootContextParams)
const LootEntry: (typeof $LootEntryWrapper)
const LootType: (typeof $LootContextType)
const LycheeLootContextParams: (typeof $LycheeLootContextParams)
const LycheeReference: (typeof $Reference)
const MBDRegistries: (typeof $MBDRegistries)
const MINUTE: double
const MachineConstructors: (typeof $MachineConstructors)
const MachineModifiers: (typeof $MachineModifiers)
const MachineState: (typeof $MachineState)
const ManaHandler: $ManaItemHandlerImpl
const MaterialEntry: (typeof $MaterialEntry)
const Matrix3f: (typeof $Matrix3f)
const Matrix4f: (typeof $Matrix4f)
const MedicalCondition: (typeof $MedicalCondition)
const ModifierFunction: (typeof $ModifierFunction$$Static)
const ModularUI: (typeof $ModularUI)
const MultiblockShapeInfo: (typeof $MultiblockShapeInfo)
const NBT: (typeof $NBTUtils$$Static)
const NBTIO: (typeof $NBTIOWrapper$$Static)
const NBTPredicates: (typeof $NBTPredicates)
const Notification: (typeof $NotificationBuilder)
const OutputItem: (typeof $OutputItem)
const OverclockingLogic: (typeof $OverclockingLogic$$Static)
const Painter: $Painter
const PartAbility: (typeof $PartAbility)
const PhantomFluidWidget: (typeof $PhantomFluidWidget)
const PhantomSlotWidget: (typeof $PhantomSlotWidget)
const Platform: (typeof $PlatformWrapper)
const Predicates: (typeof $Predicates)
const ProgressTexture: (typeof $ProgressTexture)
const ProgressWidget: (typeof $ProgressWidget)
const PropertyKey: (typeof $PropertyKey)
const Quaternionf: (typeof $Quaternionf)
const RecipeCapability: (typeof $RecipeCapability)
const ResourceBorderTexture: (typeof $ResourceBorderTexture)
const ResourceLocation: (typeof $ResourceLocation)
const ResourceTexture: (typeof $ResourceTexture)
const RotationAxis: (typeof $RotationAxis)
const RotationState: (typeof $RotationState)
const SECOND: double
const SceneWidget: (typeof $SceneWidget)
const SelectableWidgetGroup: (typeof $SelectableWidgetGroup)
const ShaderTexture: (typeof $ShaderTexture)
const Shapes: (typeof $Shapes)
const SlotWidget: (typeof $SlotWidget)
const SoundType: (typeof $SoundType)
const Stats: (typeof $Stats)
const SwitchWidget: (typeof $SwitchWidget)
const Symptom: (typeof $Symptom)
const TabButton: (typeof $TabButton)
const TabContainer: (typeof $TabContainer)
const TagPrefix: (typeof $TagPrefix)
const TankWidget: (typeof $TankWidget)
const Text: (typeof $TextWrapper)
const TextBoxWidget: (typeof $TextBoxWidget)
const TextFieldWidget: (typeof $TextFieldWidget)
const TextTexture: (typeof $TextTexture)
const TextType: (typeof $TextTexture$TextType)
const TimelessItem: (typeof $TimelessItemWrapper)
const ToolProperty: (typeof $ToolProperty)
const TreeListWidget: (typeof $TreeListWidget)
const UIProject: (typeof $UIProject)
const UUID: (typeof $UUIDWrapper$$Static)
const Utils: (typeof $UtilsWrapper$$Static)
const Vec3d: (typeof $Vec3)
const Vec3f: (typeof $Vector3f)
const Vec3i: (typeof $Vec3i)
const Vec4f: (typeof $Vector4f)
const Vector3f: (typeof $Vector3f)
const Widget: (typeof $Widget)
const WidgetGroup: (typeof $WidgetGroup)
const console: $ConsoleJS
const global: ($HashMap & ProbeJS$$ResolvedGlobal)
const onEvent: ((...args: any[]) => any)
const onForgeEvent: ((...args: any[]) => any)
}
