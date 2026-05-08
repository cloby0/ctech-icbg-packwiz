declare module "net.minecraft.world.item.context.BlockPlaceContext" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $UseOnContext, $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $BlockPlaceContext extends $UseOnContext {
constructor(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, itemStack2: $ItemStack$$Type, blockHitResult3: $BlockHitResult$$Type)
constructor(useOnContext0: $UseOnContext$$Type)
constructor(level0: $Level$$Type, player1: $Player$$Type, interactionHand2: $InteractionHand$$Type, itemStack3: $ItemStack$$Type, blockHitResult4: $BlockHitResult$$Type)

public static "at"(blockPlaceContext0: $BlockPlaceContext$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): $BlockPlaceContext
public "canPlace"(): boolean
public "getNearestLookingDirection"(): $Direction
public "getNearestLookingDirections"(): $Direction[]
public "getNearestLookingVerticalDirection"(): $Direction
public "handler$fpi000$fixNotAccountingForNullPlayer1"(cir: $CallbackInfoReturnable$$Type): void
public "handler$fpi000$fixNotAccountingForNullPlayer2"(cir: $CallbackInfoReturnable$$Type): void
public "handler$fpi000$fixNotAccountingForNullPlayer3"(cir: $CallbackInfoReturnable$$Type): void
public "replacingClickedOnBlock"(): boolean
get "replaceClicked"(): boolean
set "replaceClicked"(value: boolean)
get "nearestLookingDirection"(): $Direction
get "nearestLookingDirections"(): $Direction[]
get "nearestLookingVerticalDirection"(): $Direction
}
}

declare module "net.minecraft.world.item.context.UseOnContext" {
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Direction } from "net.minecraft.core.Direction"
import { $BlockHitResult, $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $AccessorUseOnContext } from "at.petrak.hexcasting.mixin.accessor.AccessorUseOnContext"
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $UseOnContextAccessor } from "com.simibubi.create.foundation.mixin.accessor.UseOnContextAccessor"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $UseOnContext implements $AccessorUseOnContext, $UseOnContextAccessor {
readonly "hitResult": $BlockHitResult

constructor(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, blockHitResult2: $BlockHitResult$$Type)
constructor(level0: $Level$$Type, player1: $Player$$Type, interactionHand2: $InteractionHand$$Type, itemStack3: $ItemStack$$Type, blockHitResult4: $BlockHitResult$$Type)

public "getClickLocation"(): $Vec3
public "getClickedFace"(): $Direction
public "getClickedPos"(): $BlockPos
public "getHand"(): $InteractionHand
public "getHitResult"(): $BlockHitResult
public "getHorizontalDirection"(): $Direction
public "getItemInHand"(): $ItemStack
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getRotation"(): float
public "isInside"(): boolean
public "isSecondaryUseActive"(): boolean
get "clickLocation"(): $Vec3
get "clickedFace"(): $Direction
get "clickedPos"(): $BlockPos
get "hand"(): $InteractionHand
get "horizontalDirection"(): $Direction
get "itemInHand"(): $ItemStack
get "level"(): $Level
get "player"(): $Player
get "rotation"(): float
get "inside"(): boolean
get "secondaryUseActive"(): boolean
}
}

