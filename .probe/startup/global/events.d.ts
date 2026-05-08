import { $ItemArmorTierRegistryEventJS } from "dev.latvian.mods.kubejs.item.custom.ItemArmorTierRegistryEventJS"
import { $BoilerHeaterHandlerEvent } from "dev.latvian.mods.kubejs.create.events.BoilerHeaterHandlerEvent"
import { $GTRegistryEventJS } from "com.gregtechceu.gtceu.integration.kjs.events.GTRegistryEventJS"
import { $MBDRecipeTypeRegistryEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDRecipeTypeRegistryEventJS"
import { $ClientInitEventJS } from "dev.latvian.mods.kubejs.client.ClientInitEventJS"
import { $CustomConditionEventJS } from "snownee.lychee.compat.kubejs.CustomConditionEventJS"
import { $RecipeSchemaRegistryEventJS } from "dev.latvian.mods.kubejs.recipe.RecipeSchemaRegistryEventJS"
import { $SpecialSpoutHandlerEvent } from "dev.latvian.mods.kubejs.create.events.SpecialSpoutHandlerEvent"
import { $RegistryEventJS } from "dev.latvian.mods.kubejs.registry.RegistryEventJS"
import { $CustomActionEventJS } from "snownee.lychee.compat.kubejs.CustomActionEventJS"
import { $MBDMachineRegistryEventJS } from "com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineRegistryEventJS"
import { $StartupEventJS } from "dev.latvian.mods.kubejs.event.StartupEventJS"
import { $CraftingComponentsEventJS } from "com.gregtechceu.gtceu.integration.kjs.events.CraftingComponentsEventJS"
import { $ItemModelPropertiesEventJS } from "dev.latvian.mods.kubejs.item.ItemModelPropertiesEventJS"
import { $WootFactoryMobEventJS } from "wootrevived.woot.compat.kubejs.mobs.WootFactoryMobEventJS"
import { $WootDropsPropertiesJS } from "wootrevived.woot.compat.kubejs.mobs.WootDropsPropertiesJS"
import { $RemoveWorldgenEventJS } from "dev.latvian.mods.kubejs.level.gen.RemoveWorldgenEventJS"
import { $CreativeTabEvent } from "dev.latvian.mods.kubejs.item.creativetab.CreativeTabEvent"
import { $ItemModificationEventJS } from "dev.latvian.mods.kubejs.item.ItemModificationEventJS"
import { $BlockModificationEventJS } from "dev.latvian.mods.kubejs.block.BlockModificationEventJS"
import { $MaterialModificationEventJS } from "com.gregtechceu.gtceu.integration.kjs.events.MaterialModificationEventJS"
import { $ItemToolTierRegistryEventJS } from "dev.latvian.mods.kubejs.item.custom.ItemToolTierRegistryEventJS"
import { $SpecialFluidHandlerEvent } from "dev.latvian.mods.kubejs.create.events.SpecialFluidHandlerEvent"
import { $AddWorldgenEventJS } from "dev.latvian.mods.kubejs.level.gen.AddWorldgenEventJS"

declare global {
export namespace MBDRegistryEvents {
function recipeType(handler: ((event: $MBDRecipeTypeRegistryEventJS) => void)): void
function machine(handler: ((event: $MBDMachineRegistryEventJS) => void)): void
}
export namespace WorldgenEvents {
function add(handler: ((event: $AddWorldgenEventJS) => void)): void
function remove(handler: ((event: $RemoveWorldgenEventJS) => void)): void
}
export namespace LycheeEvents {
function customAction(extra: string, handler: ((event: $CustomActionEventJS) => void)): void
function customAction(handler: ((event: $CustomActionEventJS) => void)): void
function customCondition(extra: string, handler: ((event: $CustomConditionEventJS) => void)): void
function customCondition(handler: ((event: $CustomConditionEventJS) => void)): void
}
export namespace ItemEvents {
function modelProperties(handler: ((event: $ItemModelPropertiesEventJS) => void)): void
function modification(handler: ((event: $ItemModificationEventJS) => void)): void
function toolTierRegistry(handler: ((event: $ItemToolTierRegistryEventJS) => void)): void
function armorTierRegistry(handler: ((event: $ItemArmorTierRegistryEventJS) => void)): void
}
export namespace GTCEuStartupEvents {
function registry(extra: string, handler: ((event: $GTRegistryEventJS) => void)): void
function materialModification(handler: ((event: $MaterialModificationEventJS) => void)): void
function craftingComponents(handler: ((event: $CraftingComponentsEventJS) => void)): void
}
export namespace CreateEvents {
function boilerHeatHandler(handler: ((event: $BoilerHeaterHandlerEvent) => void)): void
function pipeFluidEffect(handler: ((event: $SpecialFluidHandlerEvent) => void)): void
function spoutHandler(handler: ((event: $SpecialSpoutHandlerEvent) => void)): void
}
export namespace WootStartupEvents {
function registerFactoryMob(extra: string, handler: ((event: $WootFactoryMobEventJS) => void)): void
function registerGlobalDropsModifier(handler: ((event: $WootDropsPropertiesJS) => void)): void
}
export namespace ClientEvents {
function init(handler: ((event: $ClientInitEventJS) => void)): void
}
export namespace StartupEvents {
function init(handler: ((event: $StartupEventJS) => void)): void
function registry(extra: string, handler: ((event: $RegistryEventJS) => void)): void
function modifyCreativeTab(extra: string, handler: ((event: $CreativeTabEvent) => void)): void
function recipeSchemaRegistry(handler: ((event: $RecipeSchemaRegistryEventJS) => void)): void
function postInit(handler: ((event: $StartupEventJS) => void)): void
}
export namespace BlockEvents {
function modification(handler: ((event: $BlockModificationEventJS) => void)): void
}
}
