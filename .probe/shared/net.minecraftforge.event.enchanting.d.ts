declare module "net.minecraftforge.event.enchanting.EnchantmentLevelSetEvent" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $EnchantmentLevelSetEvent extends $Event {
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, int2: integer, int3: integer, itemStack4: $ItemStack$$Type, int5: integer)
constructor()

public "getEnchantLevel"(): integer
public "getEnchantRow"(): integer
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public "getOriginalLevel"(): integer
public "getPos"(): $BlockPos
public "getPower"(): integer
public "setEnchantLevel"(int0: integer): void
get "enchantLevel"(): integer
get "enchantRow"(): integer
get "item"(): $ItemStack
get "level"(): $Level
get "originalLevel"(): integer
get "pos"(): $BlockPos
get "power"(): integer
set "enchantLevel"(value: integer)
}
}

