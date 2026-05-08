declare module "net.minecraft.client.tutorial.TutorialStepInstance" {
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Input$$Type } from "net.minecraft.client.player.Input"

export interface $TutorialStepInstance {
"clear"(): void
"onDestroyBlock"(clientLevel0: $ClientLevel$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, float3: float): void
"onGetItem"(itemStack0: $ItemStack$$Type): void
"onInput"(input0: $Input$$Type): void
"onLookAt"(clientLevel0: $ClientLevel$$Type, hitResult1: $HitResult$$Type): void
"onMouse"(double0: double, double1: double): void
"onOpenInventory"(): void
"tick"(): void
}

export namespace $TutorialStepInstance {
const probejs$$marker: never
}
export abstract class $TutorialStepInstance$$Static implements $TutorialStepInstance {
}
}

declare module "net.minecraft.client.tutorial.TutorialSteps" {
import { $Enum } from "java.lang.Enum"
import { $TutorialStepInstance } from "net.minecraft.client.tutorial.TutorialStepInstance"
import { $Tutorial$$Type } from "net.minecraft.client.tutorial.Tutorial"

export class $TutorialSteps extends $Enum<$TutorialSteps> {
static readonly "CRAFT_PLANKS": $TutorialSteps
static readonly "FIND_TREE": $TutorialSteps
static readonly "MOVEMENT": $TutorialSteps
static readonly "NONE": $TutorialSteps
static readonly "OPEN_INVENTORY": $TutorialSteps
static readonly "PUNCH_TREE": $TutorialSteps

public "create"(tutorial0: $Tutorial$$Type): $TutorialStepInstance
public static "getByName"(string0: string): $TutorialSteps
public "getName"(): string
public static "valueOf"(string0: string): $TutorialSteps
public static "values"(): $TutorialSteps[]
get "name"(): string
}
}

declare module "net.minecraft.client.tutorial.Tutorial" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $Options$$Type } from "net.minecraft.client.Options"
import { $Minecraft, $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Input$$Type } from "net.minecraft.client.player.Input"
import { $TutorialSteps$$Type } from "net.minecraft.client.tutorial.TutorialSteps"
import { $TutorialToast$$Type } from "net.minecraft.client.gui.components.toasts.TutorialToast"
import { $ClickAction$$Type } from "net.minecraft.world.inventory.ClickAction"

export class $Tutorial {
constructor(minecraft0: $Minecraft$$Type, options1: $Options$$Type)

public "addTimedToast"(tutorialToast0: $TutorialToast$$Type, int1: integer): void
public "getMinecraft"(): $Minecraft
public "isSurvival"(): boolean
public static "key"(string0: string): $Component
public "onDestroyBlock"(clientLevel0: $ClientLevel$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, float3: float): void
public "onGetItem"(itemStack0: $ItemStack$$Type): void
public "onInput"(input0: $Input$$Type): void
public "onInventoryAction"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, clickAction2: $ClickAction$$Type): void
public "onLookAt"(clientLevel0: $ClientLevel$$Type, hitResult1: $HitResult$$Type): void
public "onMouse"(double0: double, double1: double): void
public "onOpenInventory"(): void
public "removeTimedToast"(tutorialToast0: $TutorialToast$$Type): void
public "setStep"(tutorialSteps0: $TutorialSteps$$Type): void
public "start"(): void
public "stop"(): void
public "tick"(): void
get "minecraft"(): $Minecraft
get "survival"(): boolean
set "step"(value: $TutorialSteps$$Type)
}
}

