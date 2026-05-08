declare module "net.blay09.mods.balm.api.entity.BalmEntity" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"

export interface $BalmEntity {
"getFabricBalmData"(): $CompoundTag
"setFabricBalmData"(compoundTag0: $CompoundTag$$Type): void
get "fabricBalmData"(): $CompoundTag
set "fabricBalmData"(value: $CompoundTag$$Type)
}

export namespace $BalmEntity {
const probejs$$marker: never
}
export abstract class $BalmEntity$$Static implements $BalmEntity {
}
}

declare module "net.blay09.mods.balm.api.event.LivingHealEvent" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"

export class $LivingHealEvent extends $BalmEvent {
constructor(livingEntity0: $LivingEntity$$Type, float1: float)
constructor()

public "getAmount"(): float
public "getEntity"(): $LivingEntity
get "amount"(): float
get "entity"(): $LivingEntity
}
}

declare module "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Release" {
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $ScreenKeyEvent } from "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent"

export class $ScreenKeyEvent$Release extends $ScreenKeyEvent {
constructor(screen0: $Screen$$Type, int1: integer, int2: integer, int3: integer)
constructor()

}
}

declare module "net.blay09.mods.balm.mixin.MouseHandlerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MouseHandlerAccessor {
"getMouseX"(): double
"getMouseY"(): double
get "mouseX"(): double
get "mouseY"(): double
}

export namespace $MouseHandlerAccessor {
const probejs$$marker: never
}
export abstract class $MouseHandlerAccessor$$Static implements $MouseHandlerAccessor {
}
}

declare module "net.blay09.mods.balm.mixin.SlotAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SlotAccessor {
"setX"(int0: integer): void
"setY"(int0: integer): void
set "x"(value: integer)
set "y"(value: integer)
}

export namespace $SlotAccessor {
const probejs$$marker: never
}
export abstract class $SlotAccessor$$Static implements $SlotAccessor {
}
}

declare module "net.blay09.mods.balm.api.config.schema.builder.PropertyHolderBuilder" {
import { $ConfigPropertyBuilder } from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"

export interface $PropertyHolderBuilder {
"property"(string0: string): $ConfigPropertyBuilder
}

export namespace $PropertyHolderBuilder {
const probejs$$marker: never
}
export abstract class $PropertyHolderBuilder$$Static implements $PropertyHolderBuilder {
}
}

declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Drag" {
import { $ScreenMouseEvent } from "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent"
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export class $ScreenMouseEvent$Drag extends $ScreenMouseEvent {
constructor(screen0: $Screen$$Type, double1: double, double2: double, int3: integer, double4: double, double5: double)
constructor()

public "getDragX"(): double
public "getDragY"(): double
get "dragX"(): double
get "dragY"(): double
}
}

declare module "net.blay09.mods.balm.api.event.client.ConnectedToServerEvent" {
import { $Minecraft, $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"

export class $ConnectedToServerEvent extends $BalmEvent {
constructor(minecraft0: $Minecraft$$Type)
constructor()

public "getClient"(): $Minecraft
get "client"(): $Minecraft
}
}

declare module "net.blay09.mods.balm.api.config.schema.builder.FloatConfigProperty" {
import { $ConfigPropertyBuilder$$Type } from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import { $StreamCodec } from "net.blay09.mods.balm.common.codec.StreamCodec"
import { $MutableLoadedConfig$$Type } from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import { $ConfiguredFloat } from "net.blay09.mods.balm.api.config.schema.ConfiguredFloat"
import { $AbstractConfigProperty } from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import { $Codec } from "com.mojang.serialization.Codec"
import { $LoadedConfig$$Type } from "net.blay09.mods.balm.api.config.LoadedConfig"
import { $Class } from "java.lang.Class"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"

export class $FloatConfigProperty extends $AbstractConfigProperty<float> implements $ConfiguredFloat {
static readonly "CODEC": $Codec<float>

constructor(configPropertyBuilder0: $ConfigPropertyBuilder$$Type, float1: float)

public "codec"(): $Codec<float>
public "defaultValue"(): float
public "get"(loadedConfig0: $LoadedConfig$$Type): float
public "get"(): float
public "getRaw"(loadedConfig0: $LoadedConfig$$Type): float
public "set"(float0: float): void
public "set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, float1: float): void
public "setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, float1: float): void
public "streamCodec"(): $StreamCodec<$FriendlyByteBuf, float>
public "type"(): $Class<float>
}
}

declare module "net.blay09.mods.balm.mixin.KeyMappingAccessor" {
import { $InputConstants$Key } from "com.mojang.blaze3d.platform.InputConstants$Key"

export interface $KeyMappingAccessor {
"getKey"(): $InputConstants$Key
get "key"(): $InputConstants$Key
}

export namespace $KeyMappingAccessor {
const probejs$$marker: never
}
export abstract class $KeyMappingAccessor$$Static implements $KeyMappingAccessor {
}
}

declare module "net.blay09.mods.balm.api.config.schema.ConfiguredResourceLocation" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $StreamCodec } from "net.blay09.mods.balm.common.codec.StreamCodec"
import { $MutableLoadedConfig$$Type } from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import { $Codec } from "com.mojang.serialization.Codec"
import { $ConfiguredProperty } from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import { $LoadedConfig$$Type } from "net.blay09.mods.balm.api.config.LoadedConfig"
import { $BalmConfigSchema } from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import { $Class } from "java.lang.Class"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"

export interface $ConfiguredResourceLocation extends $ConfiguredProperty<$ResourceLocation> {
"category"(): string
"codec"(): $Codec<$ResourceLocation>
"comment"(): string
"defaultValue"(): $ResourceLocation
"get"(loadedConfig0: $LoadedConfig$$Type): $ResourceLocation
"get"(): $ResourceLocation
"getRaw"(loadedConfig0: $LoadedConfig$$Type): $ResourceLocation
"name"(): string
"parentSchema"(): $BalmConfigSchema
"set"(resourceLocation0: $ResourceLocation$$Type): void
"set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, resourceLocation1: $ResourceLocation$$Type): void
"setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, resourceLocation1: $ResourceLocation$$Type): void
"streamCodec"(): $StreamCodec<$FriendlyByteBuf, $ResourceLocation>
"synced"(): boolean
"type"(): $Class<any>
}

export namespace $ConfiguredResourceLocation {
const probejs$$marker: never
}
export abstract class $ConfiguredResourceLocation$$Static implements $ConfiguredResourceLocation {
}
}

declare module "net.blay09.mods.balm.api.config.schema.ConfiguredBoolean" {
import { $StreamCodec } from "net.blay09.mods.balm.common.codec.StreamCodec"
import { $MutableLoadedConfig$$Type } from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import { $Codec } from "com.mojang.serialization.Codec"
import { $ConfiguredProperty } from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import { $LoadedConfig$$Type } from "net.blay09.mods.balm.api.config.LoadedConfig"
import { $BalmConfigSchema } from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import { $Class } from "java.lang.Class"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"

export interface $ConfiguredBoolean extends $ConfiguredProperty<boolean> {
"category"(): string
"codec"(): $Codec<boolean>
"comment"(): string
"defaultValue"(): boolean
"get"(loadedConfig0: $LoadedConfig$$Type): boolean
"get"(): boolean
"getRaw"(loadedConfig0: $LoadedConfig$$Type): boolean
"name"(): string
"parentSchema"(): $BalmConfigSchema
"set"(boolean0: boolean): void
"set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, boolean1: boolean): void
"setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, boolean1: boolean): void
"streamCodec"(): $StreamCodec<$FriendlyByteBuf, boolean>
"synced"(): boolean
"type"(): $Class<any>
}

export namespace $ConfiguredBoolean {
const probejs$$marker: never
}
export abstract class $ConfiguredBoolean$$Static implements $ConfiguredBoolean {
}
}

declare module "net.blay09.mods.balm.api.event.client.ClientStartedEvent" {
import { $Minecraft, $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"

export class $ClientStartedEvent extends $BalmEvent {
constructor(minecraft0: $Minecraft$$Type)
constructor()

public "getMinecraft"(): $Minecraft
get "minecraft"(): $Minecraft
}
}

declare module "net.blay09.mods.balm.api.event.client.screen.ContainerScreenDrawEvent$Background" {
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $ContainerScreenDrawEvent } from "net.blay09.mods.balm.api.event.client.screen.ContainerScreenDrawEvent"

export class $ContainerScreenDrawEvent$Background extends $ContainerScreenDrawEvent {
constructor(screen0: $Screen$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer)
constructor()

}
}

declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Drag$Pre" {
import { $ScreenMouseEvent$Drag } from "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Drag"
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export class $ScreenMouseEvent$Drag$Pre extends $ScreenMouseEvent$Drag {
constructor(screen0: $Screen$$Type, double1: double, double2: double, int3: integer, double4: double, double5: double)
constructor()

}
}

declare module "net.blay09.mods.balm.api.event.client.RenderHandEvent" {
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $RenderHandEvent extends $BalmEvent {
constructor()
constructor(interactionHand0: $InteractionHand$$Type, itemStack1: $ItemStack$$Type, float2: float)

public "getHand"(): $InteractionHand
public "getItemStack"(): $ItemStack
public "getSwingProgress"(): float
get "hand"(): $InteractionHand
get "itemStack"(): $ItemStack
get "swingProgress"(): float
}
}

declare module "net.blay09.mods.balm.api.config.schema.builder.ListConfigProperty" {
import { $ConfigPropertyBuilder$$Type } from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import { $StreamCodec } from "net.blay09.mods.balm.common.codec.StreamCodec"
import { $MutableLoadedConfig$$Type } from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import { $List, $List$$Type } from "java.util.List"
import { $AbstractConfigProperty } from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import { $Codec } from "com.mojang.serialization.Codec"
import { $LoadedConfig$$Type } from "net.blay09.mods.balm.api.config.LoadedConfig"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"
import { $ConfiguredList } from "net.blay09.mods.balm.api.config.schema.ConfiguredList"

export class $ListConfigProperty<T = any> extends $AbstractConfigProperty<$List<T>> implements $ConfiguredList<T> {
constructor(configPropertyBuilder0: $ConfigPropertyBuilder$$Type, class1: $Class$$Type<T>, list2: $List$$Type<T>)

public "codec"(): $Codec<$List<T>>
public "defaultValue"(): $List<T>
public "get"(loadedConfig0: $LoadedConfig$$Type): $List<T>
public "get"(): $List<T>
public "getRaw"(loadedConfig0: $LoadedConfig$$Type): $List<T>
public "nestedType"(): $Class<T>
public "set"(list0: $List$$Type<T>): void
public "set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, list1: $List$$Type<T>): void
public "setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, list1: $List$$Type<T>): void
public "streamCodec"(): $StreamCodec<$FriendlyByteBuf, $List<T>>
public "type"(): $Class<any>
}
}

declare module "net.blay09.mods.balm.api.event.client.BlockHighlightDrawEvent" {
import { $Camera, $Camera$$Type } from "net.minecraft.client.Camera"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $BlockHitResult, $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $BlockHighlightDrawEvent extends $BalmEvent {
constructor()
constructor(blockHitResult0: $BlockHitResult$$Type, poseStack1: $PoseStack$$Type, multiBufferSource2: $MultiBufferSource$$Type, camera3: $Camera$$Type)

public "getCamera"(): $Camera
public "getHitResult"(): $BlockHitResult
public "getMultiBufferSource"(): $MultiBufferSource
public "getPoseStack"(): $PoseStack
get "camera"(): $Camera
get "hitResult"(): $BlockHitResult
get "multiBufferSource"(): $MultiBufferSource
get "poseStack"(): $PoseStack
}
}

declare module "net.blay09.mods.balm.api.event.client.UseItemInputEvent" {
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"

export class $UseItemInputEvent extends $BalmEvent {
constructor(interactionHand0: $InteractionHand$$Type)
constructor()

public "getHand"(): $InteractionHand
get "hand"(): $InteractionHand
}
}

declare module "net.blay09.mods.balm.api.event.server.ServerStartingEvent" {
import { $MinecraftServer, $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"

export class $ServerStartingEvent extends $BalmEvent {
constructor(minecraftServer0: $MinecraftServer$$Type)
constructor()

public "getServer"(): $MinecraftServer
get "server"(): $MinecraftServer
}
}

declare module "net.blay09.mods.balm.api.event.LivingFallEvent" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"

export class $LivingFallEvent extends $BalmEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type)

public "getEntity"(): $LivingEntity
public "getFallDamageOverride"(): float
public "setFallDamageOverride"(float0: float): void
get "entity"(): $LivingEntity
get "fallDamageOverride"(): float
set "fallDamageOverride"(value: float)
}
}

declare module "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Press" {
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $ScreenKeyEvent } from "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent"

export class $ScreenKeyEvent$Press extends $ScreenKeyEvent {
constructor(screen0: $Screen$$Type, int1: integer, int2: integer, int3: integer)
constructor()

}
}

declare module "net.blay09.mods.balm.api.event.PlayerConnectedEvent" {
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"

export class $PlayerConnectedEvent extends $BalmEvent {
constructor(serverPlayer0: $ServerPlayer$$Type)
constructor()

public "getPlayer"(): $ServerPlayer
get "player"(): $ServerPlayer
}
}

declare module "net.blay09.mods.balm.api.event.ConfigLoadedEvent" {
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $BalmConfigSchema, $BalmConfigSchema$$Type } from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"

export class $ConfigLoadedEvent extends $BalmEvent {
constructor(balmConfigSchema0: $BalmConfigSchema$$Type)
constructor()

public "getSchema"(): $BalmConfigSchema
get "schema"(): $BalmConfigSchema
}
}

declare module "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Press$Pre" {
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $ScreenKeyEvent$Press } from "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Press"

export class $ScreenKeyEvent$Press$Pre extends $ScreenKeyEvent$Press {
constructor(screen0: $Screen$$Type, int1: integer, int2: integer, int3: integer)
constructor()

}
}

declare module "net.blay09.mods.balm.api.event.client.ItemTooltipEvent" {
import { $List, $List$$Type } from "java.util.List"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $TooltipFlag, $TooltipFlag$$Type } from "net.minecraft.world.item.TooltipFlag"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ItemTooltipEvent extends $BalmEvent {
constructor(itemStack0: $ItemStack$$Type, player1: $Player$$Type, list2: $List$$Type<$Component$$Type>, tooltipFlag3: $TooltipFlag$$Type)
constructor()

public "getFlags"(): $TooltipFlag
public "getItemStack"(): $ItemStack
public "getPlayer"(): $Player
public "getToolTip"(): $List<$Component>
get "flags"(): $TooltipFlag
get "itemStack"(): $ItemStack
get "player"(): $Player
get "toolTip"(): $List<$Component>
}
}

declare module "net.blay09.mods.balm.api.config.schema.ConfiguredList" {
import { $StreamCodec } from "net.blay09.mods.balm.common.codec.StreamCodec"
import { $MutableLoadedConfig$$Type } from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import { $List, $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $ConfiguredProperty } from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import { $NestedTypeHolder } from "net.blay09.mods.balm.api.config.schema.NestedTypeHolder"
import { $LoadedConfig$$Type } from "net.blay09.mods.balm.api.config.LoadedConfig"
import { $BalmConfigSchema } from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import { $Class } from "java.lang.Class"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"

export interface $ConfiguredList<T = any> extends $ConfiguredProperty<$List<T>>, $NestedTypeHolder<T> {
"category"(): string
"codec"(): $Codec<$List<T>>
"comment"(): string
"defaultValue"(): $List<T>
"get"(loadedConfig0: $LoadedConfig$$Type): $List<T>
"get"(): $List<T>
"getRaw"(loadedConfig0: $LoadedConfig$$Type): $List<T>
"name"(): string
"nestedType"(): $Class<T>
"parentSchema"(): $BalmConfigSchema
"set"(list0: $List$$Type<T>): void
"set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, list1: $List$$Type<T>): void
"setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, list1: $List$$Type<T>): void
"streamCodec"(): $StreamCodec<$FriendlyByteBuf, $List<T>>
"synced"(): boolean
"type"(): $Class<any>
}

export namespace $ConfiguredList {
const probejs$$marker: never
}
export abstract class $ConfiguredList$$Static<T = any> implements $ConfiguredList<T> {
}
}

declare module "net.blay09.mods.balm.api.event.BreakBlockEvent" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $BreakBlockEvent extends $BalmEvent {
constructor()
constructor(level0: $Level$$Type, player1: $Player$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, blockEntity4: $BlockEntity$$Type)

public "getBlockEntity"(): $BlockEntity
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getPos"(): $BlockPos
public "getState"(): $BlockState
get "blockEntity"(): $BlockEntity
get "level"(): $Level
get "player"(): $Player
get "pos"(): $BlockPos
get "state"(): $BlockState
}
}

declare module "net.blay09.mods.balm.api.event.client.GuiDrawEvent$Post" {
import { $Window$$Type } from "com.mojang.blaze3d.platform.Window"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $GuiDrawEvent } from "net.blay09.mods.balm.api.event.client.GuiDrawEvent"
import { $GuiDrawEvent$Element$$Type } from "net.blay09.mods.balm.api.event.client.GuiDrawEvent$Element"

export class $GuiDrawEvent$Post extends $GuiDrawEvent {
constructor(window0: $Window$$Type, guiGraphics1: $GuiGraphics$$Type, element2: $GuiDrawEvent$Element$$Type)
constructor()

}
}

declare module "net.blay09.mods.cookingforblockheads.api.event.OvenCookedEvent" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $OvenCookedEvent extends $BalmEvent {
constructor()
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, itemStack2: $ItemStack$$Type)

public "getLevel"(): $Level
public "getPos"(): $BlockPos
public "getResultItem"(): $ItemStack
get "level"(): $Level
get "pos"(): $BlockPos
get "resultItem"(): $ItemStack
}
}

declare module "net.blay09.mods.balm.api.event.LivingDeathEvent" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"

export class $LivingDeathEvent extends $BalmEvent {
constructor(livingEntity0: $LivingEntity$$Type, damageSource1: $DamageSource$$Type)
constructor()

public "getDamageSource"(): $DamageSource
public "getEntity"(): $LivingEntity
get "damageSource"(): $DamageSource
get "entity"(): $LivingEntity
}
}

declare module "net.blay09.mods.balm.api.config.schema.builder.EnumConfigProperty" {
import { $ConfigPropertyBuilder$$Type } from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import { $StreamCodec } from "net.blay09.mods.balm.common.codec.StreamCodec"
import { $MutableLoadedConfig$$Type } from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import { $ConfiguredEnum } from "net.blay09.mods.balm.api.config.schema.ConfiguredEnum"
import { $AbstractConfigProperty } from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $LoadedConfig$$Type } from "net.blay09.mods.balm.api.config.LoadedConfig"
import { $Class } from "java.lang.Class"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"

export class $EnumConfigProperty<T extends $Enum<T> = $Enum<T>> extends $AbstractConfigProperty<T> implements $ConfiguredEnum<T> {
constructor(configPropertyBuilder0: $ConfigPropertyBuilder$$Type, t1: T)

public "codec"(): $Codec<T>
public "defaultValue"(): T
public "get"(loadedConfig0: $LoadedConfig$$Type): T
public "get"(): T
public "getRaw"(loadedConfig0: $LoadedConfig$$Type): T
public "set"(t0: T): void
public "set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, t1: T): void
public "setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, t1: T): void
public "streamCodec"(): $StreamCodec<$FriendlyByteBuf, T>
public "type"(): $Class<T>
}
}

declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent" {
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $Screen, $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export class $ScreenMouseEvent extends $BalmEvent {
constructor()
constructor(screen0: $Screen$$Type, double1: double, double2: double, int3: integer)

public "getButton"(): integer
public "getMouseX"(): double
public "getMouseY"(): double
public "getScreen"(): $Screen
get "button"(): integer
get "mouseX"(): double
get "mouseY"(): double
get "screen"(): $Screen
}
}

declare module "net.blay09.mods.balm.api.event.CropGrowEvent$Post" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $CropGrowEvent } from "net.blay09.mods.balm.api.event.CropGrowEvent"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $CropGrowEvent$Post extends $CropGrowEvent {
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)
constructor()

}
}

declare module "net.blay09.mods.balm.api.config.schema.builder.ConfigCategory" {
import { $List } from "java.util.List"
import { $ConfiguredProperty } from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import { $BalmConfigSchema } from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"

export interface $ConfigCategory {
"comment"(): string
"name"(): string
"parentSchema"(): $BalmConfigSchema
"properties"(): $List<$ConfiguredProperty<any>>
}

export namespace $ConfigCategory {
const probejs$$marker: never
}
export abstract class $ConfigCategory$$Static implements $ConfigCategory {
}
}

declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Drag$Post" {
import { $ScreenMouseEvent$Drag } from "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Drag"
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export class $ScreenMouseEvent$Drag$Post extends $ScreenMouseEvent$Drag {
constructor(screen0: $Screen$$Type, double1: double, double2: double, int3: integer, double4: double, double5: double)
constructor()

}
}

declare module "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent" {
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $Screen, $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export class $ScreenKeyEvent extends $BalmEvent {
constructor(screen0: $Screen$$Type, int1: integer, int2: integer, int3: integer)
constructor()

public "getKey"(): integer
public "getModifiers"(): integer
public "getScanCode"(): integer
public "getScreen"(): $Screen
get "key"(): integer
get "modifiers"(): integer
get "scanCode"(): integer
get "screen"(): $Screen
}
}

declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Release$Pre" {
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $ScreenMouseEvent$Release } from "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Release"

export class $ScreenMouseEvent$Release$Pre extends $ScreenMouseEvent$Release {
constructor(screen0: $Screen$$Type, double1: double, double2: double, int3: integer)
constructor()

}
}

declare module "net.blay09.mods.balm.api.config.schema.ConfigSchemaBuilder" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ConfigPropertyBuilder } from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import { $ConfiguredProperty } from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import { $ConfigSchemaImpl } from "net.blay09.mods.balm.api.config.schema.impl.ConfigSchemaImpl"
import { $Collection } from "java.util.Collection"
import { $LoadedConfig } from "net.blay09.mods.balm.api.config.LoadedConfig"
import { $BalmConfigSchema } from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import { $ConfigCategoryBuilder } from "net.blay09.mods.balm.api.config.schema.builder.ConfigCategoryBuilder"
import { $PropertyHolderBuilder } from "net.blay09.mods.balm.api.config.schema.builder.PropertyHolderBuilder"
import { $ConfigCategory } from "net.blay09.mods.balm.api.config.schema.builder.ConfigCategory"

export interface $ConfigSchemaBuilder extends $PropertyHolderBuilder, $BalmConfigSchema {
"categories"(): $Collection<$ConfigCategory>
"category"(string0: string): $ConfigCategoryBuilder
"defaults"(): $LoadedConfig
"findProperty"(string0: string, string1: string): $ConfiguredProperty<any>
"findRootProperty"(string0: string): $ConfiguredProperty<any>
"identifier"(): $ResourceLocation
"property"(string0: string): $ConfigPropertyBuilder
"rootProperties"(): $Collection<$ConfiguredProperty<any>>
}

export namespace $ConfigSchemaBuilder {
function create(resourceLocation0: $ResourceLocation$$Type): $ConfigSchemaImpl
}
export abstract class $ConfigSchemaBuilder$$Static implements $ConfigSchemaBuilder {
static "create"(resourceLocation0: $ResourceLocation$$Type): $ConfigSchemaImpl
}
}

declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Release$Post" {
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $ScreenMouseEvent$Release } from "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Release"

export class $ScreenMouseEvent$Release$Post extends $ScreenMouseEvent$Release {
constructor(screen0: $Screen$$Type, double1: double, double2: double, int3: integer)
constructor()

}
}

declare module "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Release$Post" {
import { $ScreenKeyEvent$Release } from "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Release"
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export class $ScreenKeyEvent$Release$Post extends $ScreenKeyEvent$Release {
constructor(screen0: $Screen$$Type, int1: integer, int2: integer, int3: integer)
constructor()

}
}

declare module "net.blay09.mods.balm.api.config.schema.ConfiguredString" {
import { $StreamCodec } from "net.blay09.mods.balm.common.codec.StreamCodec"
import { $MutableLoadedConfig$$Type } from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import { $Codec } from "com.mojang.serialization.Codec"
import { $ConfiguredProperty } from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import { $LoadedConfig$$Type } from "net.blay09.mods.balm.api.config.LoadedConfig"
import { $BalmConfigSchema } from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import { $Class } from "java.lang.Class"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"

export interface $ConfiguredString extends $ConfiguredProperty<string> {
"category"(): string
"codec"(): $Codec<string>
"comment"(): string
"defaultValue"(): string
"get"(loadedConfig0: $LoadedConfig$$Type): string
"get"(): string
"getRaw"(loadedConfig0: $LoadedConfig$$Type): string
"name"(): string
"parentSchema"(): $BalmConfigSchema
"set"(string0: string): void
"set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, string1: string): void
"setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, string1: string): void
"streamCodec"(): $StreamCodec<$FriendlyByteBuf, string>
"synced"(): boolean
"type"(): $Class<any>
}

export namespace $ConfiguredString {
const probejs$$marker: never
}
export abstract class $ConfiguredString$$Static implements $ConfiguredString {
}
}

declare module "net.blay09.mods.balm.api.event.TossItemEvent" {
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $TossItemEvent extends $BalmEvent {
constructor(player0: $Player$$Type, itemStack1: $ItemStack$$Type)
constructor()

public "getItemStack"(): $ItemStack
public "getPlayer"(): $Player
get "itemStack"(): $ItemStack
get "player"(): $Player
}
}

declare module "net.blay09.mods.balm.api.event.client.DisconnectedFromServerEvent" {
import { $Minecraft, $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"

export class $DisconnectedFromServerEvent extends $BalmEvent {
constructor(minecraft0: $Minecraft$$Type)
constructor()

public "getClient"(): $Minecraft
get "client"(): $Minecraft
}
}

declare module "net.blay09.mods.balm.api.config.schema.impl.ConfigCategoryImpl" {
import { $ConfigPropertyBuilder } from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import { $List } from "java.util.List"
import { $ConfiguredProperty, $ConfiguredProperty$$Type } from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import { $ConfigSchemaImpl$$Type } from "net.blay09.mods.balm.api.config.schema.impl.ConfigSchemaImpl"
import { $BalmConfigSchema } from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import { $ConfigCategoryBuilder, $ConfigCategoryBuilder$$Type } from "net.blay09.mods.balm.api.config.schema.builder.ConfigCategoryBuilder"
import { $Function$$Type } from "java.util.function.Function"
import { $ConfigCategory } from "net.blay09.mods.balm.api.config.schema.builder.ConfigCategory"

export class $ConfigCategoryImpl implements $ConfigCategoryBuilder, $ConfigCategory {
constructor(configSchemaImpl0: $ConfigSchemaImpl$$Type, string1: string)

public "addProperty"<T extends $ConfiguredProperty<any>>(t0: T): void
public "comment"(): string
public "comment"(string0: string): $ConfigCategoryImpl
public "name"(): string
public "parentSchema"(): $BalmConfigSchema
public "properties"(): $List<$ConfiguredProperty<any>>
public "property"(string0: string): $ConfigPropertyBuilder
public "via"<T>(function0: $Function$$Type<$ConfigCategoryBuilder$$Type, T>): T
}
}

declare module "net.blay09.mods.cookingforblockheads.api.event.FoodRegistryInitEvent" {
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $Collection } from "java.util.Collection"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $FoodRegistryInitEvent extends $BalmEvent {
constructor()

public "getNonFoodRecipes"(): $Collection<$ItemStack>
public "registerNonFoodRecipe"(itemStack0: $ItemStack$$Type): void
get "nonFoodRecipes"(): $Collection<$ItemStack>
}
}

declare module "net.blay09.mods.balm.api.config.schema.builder.LongConfigProperty" {
import { $ConfigPropertyBuilder$$Type } from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import { $StreamCodec } from "net.blay09.mods.balm.common.codec.StreamCodec"
import { $MutableLoadedConfig$$Type } from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import { $AbstractConfigProperty } from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import { $Codec } from "com.mojang.serialization.Codec"
import { $LoadedConfig$$Type } from "net.blay09.mods.balm.api.config.LoadedConfig"
import { $ConfiguredLong } from "net.blay09.mods.balm.api.config.schema.ConfiguredLong"
import { $Class } from "java.lang.Class"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"

export class $LongConfigProperty extends $AbstractConfigProperty<long> implements $ConfiguredLong {
static readonly "CODEC": $Codec<long>

constructor(configPropertyBuilder0: $ConfigPropertyBuilder$$Type, long1: long)

public "codec"(): $Codec<long>
public "defaultValue"(): long
public "get"(loadedConfig0: $LoadedConfig$$Type): long
public "get"(): long
public "getRaw"(loadedConfig0: $LoadedConfig$$Type): long
public "set"(long0: long): void
public "set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, long1: long): void
public "setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, long1: long): void
public "streamCodec"(): $StreamCodec<$FriendlyByteBuf, long>
public "type"(): $Class<long>
}
}

declare module "net.blay09.mods.balm.api.config.LoadedConfig" {
import { $MutableLoadedConfig } from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import { $ConfiguredProperty$$Type } from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import { $BalmConfigSchema$$Type } from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"

export interface $LoadedConfig {
"getRaw"<T>(configuredProperty0: $ConfiguredProperty$$Type<T>): T
"mutable"(balmConfigSchema0: $BalmConfigSchema$$Type): $MutableLoadedConfig
}

export namespace $LoadedConfig {
const probejs$$marker: never
}
export abstract class $LoadedConfig$$Static implements $LoadedConfig {
}
}

declare module "net.blay09.mods.balm.api.config.schema.ConfiguredDouble" {
import { $StreamCodec } from "net.blay09.mods.balm.common.codec.StreamCodec"
import { $MutableLoadedConfig$$Type } from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import { $Codec } from "com.mojang.serialization.Codec"
import { $ConfiguredProperty } from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import { $LoadedConfig$$Type } from "net.blay09.mods.balm.api.config.LoadedConfig"
import { $BalmConfigSchema } from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import { $Class } from "java.lang.Class"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"

export interface $ConfiguredDouble extends $ConfiguredProperty<double> {
"category"(): string
"codec"(): $Codec<double>
"comment"(): string
"defaultValue"(): double
"get"(loadedConfig0: $LoadedConfig$$Type): double
"get"(): double
"getRaw"(loadedConfig0: $LoadedConfig$$Type): double
"name"(): string
"parentSchema"(): $BalmConfigSchema
"set"(double0: double): void
"set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, double1: double): void
"setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, double1: double): void
"streamCodec"(): $StreamCodec<$FriendlyByteBuf, double>
"synced"(): boolean
"type"(): $Class<any>
}

export namespace $ConfiguredDouble {
const probejs$$marker: never
}
export abstract class $ConfiguredDouble$$Static implements $ConfiguredDouble {
}
}

declare module "net.blay09.mods.balm.api.event.UseBlockEvent" {
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $BlockHitResult, $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $InteractionResult, $InteractionResult$$Type } from "net.minecraft.world.InteractionResult"
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $UseBlockEvent extends $BalmEvent {
constructor(player0: $Player$$Type, level1: $Level$$Type, interactionHand2: $InteractionHand$$Type, blockHitResult3: $BlockHitResult$$Type)
constructor()

public "getHand"(): $InteractionHand
public "getHitResult"(): $BlockHitResult
public "getInteractionResult"(): $InteractionResult
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "setResult"(interactionResult0: $InteractionResult$$Type): void
get "hand"(): $InteractionHand
get "hitResult"(): $BlockHitResult
get "interactionResult"(): $InteractionResult
get "level"(): $Level
get "player"(): $Player
set "result"(value: $InteractionResult$$Type)
}
}

declare module "net.blay09.mods.balm.api.event.client.screen.ScreenInitEvent$Pre" {
import { $ScreenInitEvent } from "net.blay09.mods.balm.api.event.client.screen.ScreenInitEvent"
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export class $ScreenInitEvent$Pre extends $ScreenInitEvent {
constructor(screen0: $Screen$$Type)
constructor()

}
}

declare module "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Release$Pre" {
import { $ScreenKeyEvent$Release } from "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Release"
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export class $ScreenKeyEvent$Release$Pre extends $ScreenKeyEvent$Release {
constructor(screen0: $Screen$$Type, int1: integer, int2: integer, int3: integer)
constructor()

}
}

declare module "net.blay09.mods.balm.mixin.AbstractContainerScreenAccessor" {
import { $Slot, $Slot$$Type } from "net.minecraft.world.inventory.Slot"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"

export interface $AbstractContainerScreenAccessor {
"callIsHovering"(slot0: $Slot$$Type, double1: double, double2: double): boolean
"callRenderSlot"(guiGraphics0: $GuiGraphics$$Type, slot1: $Slot$$Type): void
"getHoveredSlot"(): $Slot
"getImageHeight"(): integer
"getImageWidth"(): integer
"getLeftPos"(): integer
"getTopPos"(): integer
get "hoveredSlot"(): $Slot
get "imageHeight"(): integer
get "imageWidth"(): integer
get "leftPos"(): integer
get "topPos"(): integer
}

export namespace $AbstractContainerScreenAccessor {
const probejs$$marker: never
}
export abstract class $AbstractContainerScreenAccessor$$Static implements $AbstractContainerScreenAccessor {
}
}

declare module "net.blay09.mods.balm.common.codec.StreamCodec" {
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Function$$Type } from "java.util.function.Function"

export interface $StreamCodec<TBuffer = any, TData = any> {
"decode"(tbuffer0: TBuffer): TData
"encode"(tbuffer0: TBuffer, tdata1: TData): void
"map"<TMappedData>(function0: $Function$$Type<TData, TMappedData>, function1: $Function$$Type<TMappedData, TData>): $StreamCodec<TBuffer, TMappedData>
}

export namespace $StreamCodec {
function of<TBuffer, TData>(biConsumer0: $BiConsumer$$Type<TBuffer, TData>, function1: $Function$$Type<TBuffer, TData>): $StreamCodec<TBuffer, TData>
}
export abstract class $StreamCodec$$Static<TBuffer = any, TData = any> implements $StreamCodec<TBuffer, TData> {
static "of"<TBuffer, TData>(biConsumer0: $BiConsumer$$Type<TBuffer, TData>, function1: $Function$$Type<TBuffer, TData>): $StreamCodec<TBuffer, TData>
}
}

declare module "net.blay09.mods.balm.api.config.schema.ConfiguredSet" {
import { $StreamCodec } from "net.blay09.mods.balm.common.codec.StreamCodec"
import { $MutableLoadedConfig$$Type } from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import { $Codec } from "com.mojang.serialization.Codec"
import { $ConfiguredProperty } from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import { $NestedTypeHolder } from "net.blay09.mods.balm.api.config.schema.NestedTypeHolder"
import { $LoadedConfig$$Type } from "net.blay09.mods.balm.api.config.LoadedConfig"
import { $BalmConfigSchema } from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import { $Set, $Set$$Type } from "java.util.Set"
import { $Class } from "java.lang.Class"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"

export interface $ConfiguredSet<T = any> extends $ConfiguredProperty<$Set<T>>, $NestedTypeHolder<T> {
"category"(): string
"codec"(): $Codec<$Set<T>>
"comment"(): string
"defaultValue"(): $Set<T>
"get"(loadedConfig0: $LoadedConfig$$Type): $Set<T>
"get"(): $Set<T>
"getRaw"(loadedConfig0: $LoadedConfig$$Type): $Set<T>
"name"(): string
"nestedType"(): $Class<T>
"parentSchema"(): $BalmConfigSchema
"set"(set0: $Set$$Type<T>): void
"set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, set1: $Set$$Type<T>): void
"setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, set1: $Set$$Type<T>): void
"streamCodec"(): $StreamCodec<$FriendlyByteBuf, $Set<T>>
"synced"(): boolean
"type"(): $Class<any>
}

export namespace $ConfiguredSet {
const probejs$$marker: never
}
export abstract class $ConfiguredSet$$Static<T = any> implements $ConfiguredSet<T> {
}
}

declare module "net.blay09.mods.balm.api.event.client.screen.ContainerScreenDrawEvent" {
import { $GuiGraphics, $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $Screen, $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export class $ContainerScreenDrawEvent extends $BalmEvent {
constructor()
constructor(screen0: $Screen$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer)

public "getGuiGraphics"(): $GuiGraphics
public "getMouseX"(): integer
public "getMouseY"(): integer
public "getScreen"(): $Screen
get "guiGraphics"(): $GuiGraphics
get "mouseX"(): integer
get "mouseY"(): integer
get "screen"(): $Screen
}
}

declare module "net.blay09.mods.balm.api.config.schema.NestedTypeHolder" {
import { $Class } from "java.lang.Class"

export interface $NestedTypeHolder<T = any> {
"nestedType"(): $Class<T>
}

export namespace $NestedTypeHolder {
const probejs$$marker: never
}
export abstract class $NestedTypeHolder$$Static<T = any> implements $NestedTypeHolder<T> {
}
}

declare module "net.blay09.mods.balm.api.event.LivingDamageEvent" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"

export class $LivingDamageEvent extends $BalmEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, damageSource1: $DamageSource$$Type, float2: float)

public "getDamageAmount"(): float
public "getDamageSource"(): $DamageSource
public "getEntity"(): $LivingEntity
public "setDamageAmount"(float0: float): void
get "damageAmount"(): float
get "damageSource"(): $DamageSource
get "entity"(): $LivingEntity
set "damageAmount"(value: float)
}
}

declare module "net.blay09.mods.balm.api.event.client.screen.ScreenInitEvent$Post" {
import { $ScreenInitEvent } from "net.blay09.mods.balm.api.event.client.screen.ScreenInitEvent"
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export class $ScreenInitEvent$Post extends $ScreenInitEvent {
constructor(screen0: $Screen$$Type)
constructor()

}
}

declare module "net.blay09.mods.balm.api.event.CropGrowEvent$Pre" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $CropGrowEvent } from "net.blay09.mods.balm.api.event.CropGrowEvent"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $CropGrowEvent$Pre extends $CropGrowEvent {
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)
constructor()

}
}

declare module "net.blay09.mods.balm.api.config.schema.builder.SetConfigProperty" {
import { $ConfigPropertyBuilder$$Type } from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import { $StreamCodec } from "net.blay09.mods.balm.common.codec.StreamCodec"
import { $MutableLoadedConfig$$Type } from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import { $AbstractConfigProperty } from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import { $Codec } from "com.mojang.serialization.Codec"
import { $ConfiguredSet } from "net.blay09.mods.balm.api.config.schema.ConfiguredSet"
import { $LoadedConfig$$Type } from "net.blay09.mods.balm.api.config.LoadedConfig"
import { $Set, $Set$$Type } from "java.util.Set"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"

export class $SetConfigProperty<T = any> extends $AbstractConfigProperty<$Set<T>> implements $ConfiguredSet<T> {
constructor(configPropertyBuilder0: $ConfigPropertyBuilder$$Type, class1: $Class$$Type<T>, set2: $Set$$Type<T>)

public "codec"(): $Codec<$Set<T>>
public "defaultValue"(): $Set<T>
public "get"(loadedConfig0: $LoadedConfig$$Type): $Set<T>
public "get"(): $Set<T>
public "getRaw"(loadedConfig0: $LoadedConfig$$Type): $Set<T>
public "nestedType"(): $Class<T>
public "set"(set0: $Set$$Type<T>): void
public "set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, set1: $Set$$Type<T>): void
public "setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, set1: $Set$$Type<T>): void
public "streamCodec"(): $StreamCodec<$FriendlyByteBuf, $Set<T>>
public "type"(): $Class<any>
}
}

declare module "net.blay09.mods.balm.api.config.schema.BalmConfigSchema" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ConfiguredProperty } from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import { $ConfigSchemaImpl } from "net.blay09.mods.balm.api.config.schema.impl.ConfigSchemaImpl"
import { $Collection } from "java.util.Collection"
import { $LoadedConfig } from "net.blay09.mods.balm.api.config.LoadedConfig"
import { $ConfigCategory } from "net.blay09.mods.balm.api.config.schema.builder.ConfigCategory"

export interface $BalmConfigSchema {
"categories"(): $Collection<$ConfigCategory>
"defaults"(): $LoadedConfig
"findProperty"(string0: string, string1: string): $ConfiguredProperty<any>
"findRootProperty"(string0: string): $ConfiguredProperty<any>
"identifier"(): $ResourceLocation
"rootProperties"(): $Collection<$ConfiguredProperty<any>>
}

export namespace $BalmConfigSchema {
function create(resourceLocation0: $ResourceLocation$$Type): $ConfigSchemaImpl
}
export abstract class $BalmConfigSchema$$Static implements $BalmConfigSchema {
static "create"(resourceLocation0: $ResourceLocation$$Type): $ConfigSchemaImpl
}
}

declare module "net.blay09.mods.balm.api.config.schema.builder.BooleanConfigProperty" {
import { $ConfigPropertyBuilder$$Type } from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import { $StreamCodec } from "net.blay09.mods.balm.common.codec.StreamCodec"
import { $MutableLoadedConfig$$Type } from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import { $AbstractConfigProperty } from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import { $Codec } from "com.mojang.serialization.Codec"
import { $ConfiguredBoolean } from "net.blay09.mods.balm.api.config.schema.ConfiguredBoolean"
import { $LoadedConfig$$Type } from "net.blay09.mods.balm.api.config.LoadedConfig"
import { $Class } from "java.lang.Class"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"

export class $BooleanConfigProperty extends $AbstractConfigProperty<boolean> implements $ConfiguredBoolean {
static readonly "CODEC": $Codec<boolean>

constructor(configPropertyBuilder0: $ConfigPropertyBuilder$$Type, boolean1: boolean)

public "codec"(): $Codec<boolean>
public "get"(loadedConfig0: $LoadedConfig$$Type): boolean
public "get"(): boolean
public "getRaw"(loadedConfig0: $LoadedConfig$$Type): boolean
public "set"(boolean0: boolean): void
public "set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, boolean1: boolean): void
public "setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, boolean1: boolean): void
public "streamCodec"(): $StreamCodec<$FriendlyByteBuf, boolean>
public "type"(): $Class<boolean>
}
}

declare module "net.blay09.mods.balm.api.event.PlayerAttackEvent" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerAttackEvent extends $BalmEvent {
constructor()
constructor(player0: $Player$$Type, entity1: $Entity$$Type)

public "getPlayer"(): $Player
public "getTarget"(): $Entity
get "player"(): $Player
get "target"(): $Entity
}
}

declare module "net.blay09.mods.cookingforblockheads.api.event.OvenItemSmeltedEvent" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $OvenItemSmeltedEvent extends $BalmEvent {
constructor(player0: $Player$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, itemStack3: $ItemStack$$Type)
constructor()

public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getPos"(): $BlockPos
public "getResultItem"(): $ItemStack
get "level"(): $Level
get "player"(): $Player
get "pos"(): $BlockPos
get "resultItem"(): $ItemStack
}
}

declare module "net.blay09.mods.balm.api.config.schema.builder.ResourceLocationConfigProperty" {
import { $ConfigPropertyBuilder$$Type } from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $StreamCodec } from "net.blay09.mods.balm.common.codec.StreamCodec"
import { $MutableLoadedConfig$$Type } from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import { $AbstractConfigProperty } from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import { $Codec } from "com.mojang.serialization.Codec"
import { $ConfiguredResourceLocation } from "net.blay09.mods.balm.api.config.schema.ConfiguredResourceLocation"
import { $LoadedConfig$$Type } from "net.blay09.mods.balm.api.config.LoadedConfig"
import { $Class } from "java.lang.Class"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"

export class $ResourceLocationConfigProperty extends $AbstractConfigProperty<$ResourceLocation> implements $ConfiguredResourceLocation {
constructor(configPropertyBuilder0: $ConfigPropertyBuilder$$Type, resourceLocation1: $ResourceLocation$$Type)

public "codec"(): $Codec<$ResourceLocation>
public "defaultValue"(): $ResourceLocation
public "get"(loadedConfig0: $LoadedConfig$$Type): $ResourceLocation
public "get"(): $ResourceLocation
public "getRaw"(loadedConfig0: $LoadedConfig$$Type): $ResourceLocation
public "set"(resourceLocation0: $ResourceLocation$$Type): void
public "set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, resourceLocation1: $ResourceLocation$$Type): void
public "setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, resourceLocation1: $ResourceLocation$$Type): void
public "streamCodec"(): $StreamCodec<$FriendlyByteBuf, $ResourceLocation>
public "type"(): $Class<$ResourceLocation>
}
}

declare module "net.blay09.mods.balm.api.event.client.FovUpdateEvent" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"

export class $FovUpdateEvent extends $BalmEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type)

public "getEntity"(): $LivingEntity
public "getFov"(): float
public "setFov"(float0: float): void
get "entity"(): $LivingEntity
get "fov"(): float
set "fov"(value: float)
}
}

declare module "net.blay09.mods.balm.api.config.schema.builder.ConfigCategoryBuilder" {
import { $ConfigPropertyBuilder } from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import { $ConfigCategoryImpl } from "net.blay09.mods.balm.api.config.schema.impl.ConfigCategoryImpl"
import { $PropertyHolderBuilder } from "net.blay09.mods.balm.api.config.schema.builder.PropertyHolderBuilder"
import { $Function$$Type } from "java.util.function.Function"

export interface $ConfigCategoryBuilder extends $PropertyHolderBuilder {
"comment"(string0: string): $ConfigCategoryImpl
"property"(string0: string): $ConfigPropertyBuilder
"via"<T>(function0: $Function$$Type<$ConfigCategoryBuilder$$Type, T>): T
}

export namespace $ConfigCategoryBuilder {
const probejs$$marker: never
}
export abstract class $ConfigCategoryBuilder$$Static implements $ConfigCategoryBuilder {
}
}

declare module "net.blay09.mods.balm.api.event.PlayerOpenMenuEvent" {
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"

export class $PlayerOpenMenuEvent extends $BalmEvent {
constructor(serverPlayer0: $ServerPlayer$$Type, abstractContainerMenu1: $AbstractContainerMenu$$Type)
constructor()

public "getMenu"(): $AbstractContainerMenu
public "getPlayer"(): $ServerPlayer
get "menu"(): $AbstractContainerMenu
get "player"(): $ServerPlayer
}
}

declare module "net.blay09.mods.balm.api.config.schema.ConfiguredFloat" {
import { $StreamCodec } from "net.blay09.mods.balm.common.codec.StreamCodec"
import { $MutableLoadedConfig$$Type } from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import { $Codec } from "com.mojang.serialization.Codec"
import { $ConfiguredProperty } from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import { $LoadedConfig$$Type } from "net.blay09.mods.balm.api.config.LoadedConfig"
import { $BalmConfigSchema } from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import { $Class } from "java.lang.Class"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"

export interface $ConfiguredFloat extends $ConfiguredProperty<float> {
"category"(): string
"codec"(): $Codec<float>
"comment"(): string
"defaultValue"(): float
"get"(loadedConfig0: $LoadedConfig$$Type): float
"get"(): float
"getRaw"(loadedConfig0: $LoadedConfig$$Type): float
"name"(): string
"parentSchema"(): $BalmConfigSchema
"set"(float0: float): void
"set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, float1: float): void
"setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, float1: float): void
"streamCodec"(): $StreamCodec<$FriendlyByteBuf, float>
"synced"(): boolean
"type"(): $Class<any>
}

export namespace $ConfiguredFloat {
const probejs$$marker: never
}
export abstract class $ConfiguredFloat$$Static implements $ConfiguredFloat {
}
}

declare module "net.blay09.mods.balm.api.event.EntityAddedEvent" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $EntityAddedEvent extends $BalmEvent {
constructor(entity0: $Entity$$Type, level1: $Level$$Type)
constructor()

public "getEntity"(): $Entity
public "getLevel"(): $Level
get "entity"(): $Entity
get "level"(): $Level
}
}

declare module "net.blay09.mods.balm.api.event.BalmEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $BalmEvent extends $Event {
constructor()

}
}

declare module "net.blay09.mods.balm.api.event.server.ServerReloadedEvent" {
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $ReloadableServerResources, $ReloadableServerResources$$Type } from "net.minecraft.server.ReloadableServerResources"

export class $ServerReloadedEvent extends $BalmEvent {
constructor()
constructor(reloadableServerResources0: $ReloadableServerResources$$Type)

public "getResources"(): $ReloadableServerResources
public "getServer"(): $MinecraftServer
get "resources"(): $ReloadableServerResources
get "server"(): $MinecraftServer
}
}

declare module "net.blay09.mods.kuma.mixin.KeyMappingAccessor" {
import { $InputConstants$Key } from "com.mojang.blaze3d.platform.InputConstants$Key"

export interface $KeyMappingAccessor {
"getKey"(): $InputConstants$Key
get "key"(): $InputConstants$Key
}

export namespace $KeyMappingAccessor {
const probejs$$marker: never
}
export abstract class $KeyMappingAccessor$$Static implements $KeyMappingAccessor {
}
}

declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Click$Pre" {
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $ScreenMouseEvent$Click } from "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Click"

export class $ScreenMouseEvent$Click$Pre extends $ScreenMouseEvent$Click {
constructor(screen0: $Screen$$Type, double1: double, double2: double, int3: integer)
constructor()

}
}

declare module "net.blay09.mods.balm.api.config.schema.builder.StringConfigProperty" {
import { $ConfigPropertyBuilder$$Type } from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import { $StreamCodec } from "net.blay09.mods.balm.common.codec.StreamCodec"
import { $MutableLoadedConfig$$Type } from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import { $AbstractConfigProperty } from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import { $Codec } from "com.mojang.serialization.Codec"
import { $LoadedConfig$$Type } from "net.blay09.mods.balm.api.config.LoadedConfig"
import { $Class } from "java.lang.Class"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"
import { $ConfiguredString } from "net.blay09.mods.balm.api.config.schema.ConfiguredString"

export class $StringConfigProperty extends $AbstractConfigProperty<string> implements $ConfiguredString {
constructor(configPropertyBuilder0: $ConfigPropertyBuilder$$Type, string1: string)

public "codec"(): $Codec<string>
public "defaultValue"(): string
public "get"(loadedConfig0: $LoadedConfig$$Type): string
public "get"(): string
public "getRaw"(loadedConfig0: $LoadedConfig$$Type): string
public "set"(string0: string): void
public "set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, string1: string): void
public "setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, string1: string): void
public "streamCodec"(): $StreamCodec<$FriendlyByteBuf, string>
public "type"(): $Class<string>
}
}

declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Click$Post" {
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $ScreenMouseEvent$Click } from "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Click"

export class $ScreenMouseEvent$Click$Post extends $ScreenMouseEvent$Click {
constructor(screen0: $Screen$$Type, double1: double, double2: double, int3: integer)
constructor()

}
}

declare module "net.blay09.mods.balm.api.event.ConfigReloadedEvent" {
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $BalmConfigSchema, $BalmConfigSchema$$Type } from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"

export class $ConfigReloadedEvent extends $BalmEvent {
constructor(balmConfigSchema0: $BalmConfigSchema$$Type)
constructor()

public "getSchema"(): $BalmConfigSchema
get "schema"(): $BalmConfigSchema
}
}

declare module "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $EnumConfigProperty } from "net.blay09.mods.balm.api.config.schema.builder.EnumConfigProperty"
import { $SetConfigProperty } from "net.blay09.mods.balm.api.config.schema.builder.SetConfigProperty"
import { $Set$$Type } from "java.util.Set"
import { $ListConfigProperty } from "net.blay09.mods.balm.api.config.schema.builder.ListConfigProperty"
import { $StringConfigProperty } from "net.blay09.mods.balm.api.config.schema.builder.StringConfigProperty"
import { $DoubleConfigProperty } from "net.blay09.mods.balm.api.config.schema.builder.DoubleConfigProperty"
import { $List$$Type } from "java.util.List"
import { $LongConfigProperty } from "net.blay09.mods.balm.api.config.schema.builder.LongConfigProperty"
import { $FloatConfigProperty } from "net.blay09.mods.balm.api.config.schema.builder.FloatConfigProperty"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $ConfigSchemaImpl$$Type } from "net.blay09.mods.balm.api.config.schema.impl.ConfigSchemaImpl"
import { $BooleanConfigProperty } from "net.blay09.mods.balm.api.config.schema.builder.BooleanConfigProperty"
import { $Class$$Type } from "java.lang.Class"
import { $IntConfigProperty } from "net.blay09.mods.balm.api.config.schema.builder.IntConfigProperty"
import { $ResourceLocationConfigProperty } from "net.blay09.mods.balm.api.config.schema.builder.ResourceLocationConfigProperty"

export class $ConfigPropertyBuilder {
constructor(configSchemaImpl0: $ConfigSchemaImpl$$Type, string1: string)
constructor(configSchemaImpl0: $ConfigSchemaImpl$$Type, string1: string, string2: string)

public "boolOf"(boolean0: boolean): $BooleanConfigProperty
public "comment"(string0: string): $ConfigPropertyBuilder
public "doubleOf"(double0: double): $DoubleConfigProperty
public "enumOf"<T extends $Enum<T>>(t0: T): $EnumConfigProperty<T>
public "floatOf"(float0: float): $FloatConfigProperty
public "intOf"(int0: integer): $IntConfigProperty
public "listOf"<T>(class0: $Class$$Type<T>, list1: $List$$Type<T>): $ListConfigProperty<T>
public "longOf"(long0: long): $LongConfigProperty
public "resourceLocationOf"(resourceLocation0: $ResourceLocation$$Type): $ResourceLocationConfigProperty
public "setOf"<T>(class0: $Class$$Type<T>, set1: $Set$$Type<T>): $SetConfigProperty<T>
public "stringOf"(string0: string): $StringConfigProperty
public "synced"(): $ConfigPropertyBuilder
}
}

declare module "net.blay09.mods.balm.api.config.schema.ConfiguredEnum" {
import { $StreamCodec } from "net.blay09.mods.balm.common.codec.StreamCodec"
import { $MutableLoadedConfig$$Type } from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $ConfiguredProperty } from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import { $LoadedConfig$$Type } from "net.blay09.mods.balm.api.config.LoadedConfig"
import { $BalmConfigSchema } from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import { $Class } from "java.lang.Class"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"

export interface $ConfiguredEnum<T extends $Enum<T> = $Enum<T>> extends $ConfiguredProperty<T> {
"category"(): string
"codec"(): $Codec<T>
"comment"(): string
"defaultValue"(): T
"get"(loadedConfig0: $LoadedConfig$$Type): T
"get"(): T
"getRaw"(loadedConfig0: $LoadedConfig$$Type): T
"name"(): string
"parentSchema"(): $BalmConfigSchema
"set"(t0: T): void
"set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, t1: T): void
"setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, t1: T): void
"streamCodec"(): $StreamCodec<$FriendlyByteBuf, T>
"synced"(): boolean
"type"(): $Class<any>
}

export namespace $ConfiguredEnum {
const probejs$$marker: never
}
export abstract class $ConfiguredEnum$$Static<T extends $Enum<T> = $Enum<T>> implements $ConfiguredEnum<T> {
}
}

declare module "net.blay09.mods.balm.api.event.client.screen.ScreenInitEvent" {
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $Screen, $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export class $ScreenInitEvent extends $BalmEvent {
constructor(screen0: $Screen$$Type)
constructor()

public "getScreen"(): $Screen
get "screen"(): $Screen
}
}

declare module "net.blay09.mods.balm.api.event.PlayerLoginEvent" {
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"

export class $PlayerLoginEvent extends $BalmEvent {
constructor(serverPlayer0: $ServerPlayer$$Type)
constructor()

public "getPlayer"(): $ServerPlayer
get "player"(): $ServerPlayer
}
}

declare module "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty" {
import { $ConfigPropertyBuilder$$Type } from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import { $StreamCodec } from "net.blay09.mods.balm.common.codec.StreamCodec"
import { $MutableLoadedConfig$$Type } from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import { $Codec } from "com.mojang.serialization.Codec"
import { $ConfiguredProperty } from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import { $LoadedConfig$$Type } from "net.blay09.mods.balm.api.config.LoadedConfig"
import { $Class } from "java.lang.Class"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"

export class $AbstractConfigProperty<T = any> implements $ConfiguredProperty<T> {
constructor(configPropertyBuilder0: $ConfigPropertyBuilder$$Type)

public "category"(): string
public "codec"(): $Codec<T>
public "comment"(): string
public "defaultValue"(): T
public "getRaw"(loadedConfig0: $LoadedConfig$$Type): T
public "name"(): string
public "setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, t1: T): void
public "streamCodec"(): $StreamCodec<$FriendlyByteBuf, T>
public "synced"(): boolean
public "type"(): $Class<any>
}
}

declare module "net.blay09.mods.balm.mixin.ScreenAccessor" {
import { $GuiEventListener } from "net.minecraft.client.gui.components.events.GuiEventListener"
import { $List } from "java.util.List"
import { $NarratableEntry } from "net.minecraft.client.gui.narration.NarratableEntry"
import { $Renderable } from "net.minecraft.client.gui.components.Renderable"

export interface $ScreenAccessor {
"balm_getChildren"(): $List<$GuiEventListener>
"balm_getNarratables"(): $List<$NarratableEntry>
"balm_getRenderables"(): $List<$Renderable>
}

export namespace $ScreenAccessor {
const probejs$$marker: never
}
export abstract class $ScreenAccessor$$Static implements $ScreenAccessor {
}
}

declare module "net.blay09.mods.balm.api.event.PlayerLogoutEvent" {
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"

export class $PlayerLogoutEvent extends $BalmEvent {
constructor(serverPlayer0: $ServerPlayer$$Type)
constructor()

public "getPlayer"(): $ServerPlayer
get "player"(): $ServerPlayer
}
}

declare module "net.blay09.mods.balm.api.event.server.ServerStartedEvent" {
import { $MinecraftServer, $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"

export class $ServerStartedEvent extends $BalmEvent {
constructor(minecraftServer0: $MinecraftServer$$Type)
constructor()

public "getServer"(): $MinecraftServer
get "server"(): $MinecraftServer
}
}

declare module "net.blay09.mods.balm.api.event.UseItemEvent" {
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $InteractionResult, $InteractionResult$$Type } from "net.minecraft.world.InteractionResult"
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $UseItemEvent extends $BalmEvent {
constructor(player0: $Player$$Type, level1: $Level$$Type, interactionHand2: $InteractionHand$$Type)
constructor()

public "getHand"(): $InteractionHand
public "getInteractionResult"(): $InteractionResult
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "setResult"(interactionResult0: $InteractionResult$$Type): void
get "hand"(): $InteractionHand
get "interactionResult"(): $InteractionResult
get "level"(): $Level
get "player"(): $Player
set "result"(value: $InteractionResult$$Type)
}
}

declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Click" {
import { $ScreenMouseEvent } from "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent"
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export class $ScreenMouseEvent$Click extends $ScreenMouseEvent {
constructor(screen0: $Screen$$Type, double1: double, double2: double, int3: integer)
constructor()

}
}

declare module "net.blay09.mods.balm.api.event.PlayerChangedDimensionEvent" {
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $Level } from "net.minecraft.world.level.Level"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export class $PlayerChangedDimensionEvent extends $BalmEvent {
constructor(serverPlayer0: $ServerPlayer$$Type, resourceKey1: $ResourceKey$$Type<$Level>, resourceKey2: $ResourceKey$$Type<$Level>)
constructor()

public "getFromDim"(): $ResourceKey<$Level>
public "getPlayer"(): $ServerPlayer
public "getToDim"(): $ResourceKey<$Level>
get "fromDim"(): $ResourceKey<$Level>
get "player"(): $ServerPlayer
get "toDim"(): $ResourceKey<$Level>
}
}

declare module "net.blay09.mods.balm.api.config.MutableLoadedConfig" {
import { $ConfiguredProperty$$Type } from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $BalmConfigSchema$$Type } from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import { $LoadedConfig, $LoadedConfig$$Type } from "net.blay09.mods.balm.api.config.LoadedConfig"

export interface $MutableLoadedConfig extends $LoadedConfig {
"applyFrom"(balmConfigSchema0: $BalmConfigSchema$$Type, loadedConfig1: $LoadedConfig$$Type, predicate2: $Predicate$$Type<$ConfiguredProperty$$Type<any>>): void
"applyFrom"(balmConfigSchema0: $BalmConfigSchema$$Type, loadedConfig1: $LoadedConfig$$Type): void
"copy"(): $MutableLoadedConfig
"getRaw"<T>(configuredProperty0: $ConfiguredProperty$$Type<T>): T
"mutable"(balmConfigSchema0: $BalmConfigSchema$$Type): $MutableLoadedConfig
"setRaw"<T>(configuredProperty0: $ConfiguredProperty$$Type<T>, t1: T): void
}

export namespace $MutableLoadedConfig {
const probejs$$marker: never
}
export abstract class $MutableLoadedConfig$$Static implements $MutableLoadedConfig {
}
}

declare module "net.blay09.mods.balm.api.event.client.RecipesUpdatedEvent" {
import { $RecipeManager, $RecipeManager$$Type } from "net.minecraft.world.item.crafting.RecipeManager"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $RegistryAccess, $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"

/** @deprecated */
export class $RecipesUpdatedEvent extends $BalmEvent {
constructor(recipeManager0: $RecipeManager$$Type, registryAccess1: $RegistryAccess$$Type)
constructor()

public "getRecipeManager"(): $RecipeManager
public "getRegistryAccess"(): $RegistryAccess
get "recipeManager"(): $RecipeManager
get "registryAccess"(): $RegistryAccess
}
}

declare module "net.blay09.mods.balm.api.event.client.screen.ScreenDrawEvent$Pre" {
import { $ScreenDrawEvent } from "net.blay09.mods.balm.api.event.client.screen.ScreenDrawEvent"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export class $ScreenDrawEvent$Pre extends $ScreenDrawEvent {
constructor(screen0: $Screen$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, float4: float)
constructor()

}
}

declare module "net.blay09.mods.balm.api.event.server.ServerReloadFinishedEvent" {
import { $MinecraftServer, $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"

export class $ServerReloadFinishedEvent extends $BalmEvent {
constructor(minecraftServer0: $MinecraftServer$$Type)
constructor()

public "getServer"(): $MinecraftServer
get "server"(): $MinecraftServer
}
}

declare module "net.blay09.mods.balm.api.event.client.GuiDrawEvent$Element" {
import { $Enum } from "java.lang.Enum"

export class $GuiDrawEvent$Element extends $Enum<$GuiDrawEvent$Element> {
static readonly "ALL": $GuiDrawEvent$Element
static readonly "BOSS_INFO": $GuiDrawEvent$Element
static readonly "CHAT": $GuiDrawEvent$Element
static readonly "DEBUG": $GuiDrawEvent$Element
static readonly "HEALTH": $GuiDrawEvent$Element
static readonly "PLAYER_LIST": $GuiDrawEvent$Element

public static "valueOf"(string0: string): $GuiDrawEvent$Element
public static "values"(): $GuiDrawEvent$Element[]
}
}

declare module "net.blay09.mods.balm.api.event.DigSpeedEvent" {
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $DigSpeedEvent extends $BalmEvent {
constructor(player0: $Player$$Type, blockState1: $BlockState$$Type, float2: float)
constructor()

public "getPlayer"(): $Player
public "getSpeed"(): float
public "getSpeedOverride"(): float
public "getState"(): $BlockState
public "setSpeedOverride"(float0: float): void
get "player"(): $Player
get "speed"(): float
get "speedOverride"(): float
get "state"(): $BlockState
set "speedOverride"(value: float)
}
}

declare module "net.blay09.mods.balm.api.config.schema.ConfiguredProperty" {
import { $StreamCodec } from "net.blay09.mods.balm.common.codec.StreamCodec"
import { $MutableLoadedConfig$$Type } from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import { $Codec } from "com.mojang.serialization.Codec"
import { $LoadedConfig$$Type } from "net.blay09.mods.balm.api.config.LoadedConfig"
import { $BalmConfigSchema } from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import { $Class } from "java.lang.Class"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"

export interface $ConfiguredProperty<T = any> {
"category"(): string
"codec"(): $Codec<T>
"comment"(): string
"defaultValue"(): T
"getRaw"(loadedConfig0: $LoadedConfig$$Type): T
"name"(): string
"parentSchema"(): $BalmConfigSchema
"setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, t1: T): void
"streamCodec"(): $StreamCodec<$FriendlyByteBuf, T>
"synced"(): boolean
"type"(): $Class<any>
}

export namespace $ConfiguredProperty {
const probejs$$marker: never
}
export abstract class $ConfiguredProperty$$Static<T = any> implements $ConfiguredProperty<T> {
}
}

declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Release" {
import { $ScreenMouseEvent } from "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent"
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export class $ScreenMouseEvent$Release extends $ScreenMouseEvent {
constructor(screen0: $Screen$$Type, double1: double, double2: double, int3: integer)
constructor()

}
}

declare module "net.blay09.mods.balm.api.config.schema.builder.IntConfigProperty" {
import { $ConfigPropertyBuilder$$Type } from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import { $StreamCodec } from "net.blay09.mods.balm.common.codec.StreamCodec"
import { $MutableLoadedConfig$$Type } from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import { $AbstractConfigProperty } from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import { $Codec } from "com.mojang.serialization.Codec"
import { $ConfiguredInt } from "net.blay09.mods.balm.api.config.schema.ConfiguredInt"
import { $LoadedConfig$$Type } from "net.blay09.mods.balm.api.config.LoadedConfig"
import { $Class } from "java.lang.Class"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"

export class $IntConfigProperty extends $AbstractConfigProperty<integer> implements $ConfiguredInt {
static readonly "CODEC": $Codec<integer>

constructor(configPropertyBuilder0: $ConfigPropertyBuilder$$Type, int1: integer)

public "codec"(): $Codec<integer>
public "defaultValue"(): integer
public "get"(loadedConfig0: $LoadedConfig$$Type): integer
public "get"(): integer
public "getRaw"(loadedConfig0: $LoadedConfig$$Type): integer
public "set"(int0: integer): void
public "set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, int1: integer): void
public "setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, integer1: integer): void
public "streamCodec"(): $StreamCodec<$FriendlyByteBuf, integer>
public "type"(): $Class<integer>
}
}

declare module "net.blay09.mods.balm.api.event.client.screen.ScreenDrawEvent$Post" {
import { $ScreenDrawEvent } from "net.blay09.mods.balm.api.event.client.screen.ScreenDrawEvent"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export class $ScreenDrawEvent$Post extends $ScreenDrawEvent {
constructor(screen0: $Screen$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, float4: float)
constructor()

}
}

declare module "net.blay09.mods.balm.api.config.schema.ConfiguredLong" {
import { $StreamCodec } from "net.blay09.mods.balm.common.codec.StreamCodec"
import { $MutableLoadedConfig$$Type } from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import { $Codec } from "com.mojang.serialization.Codec"
import { $ConfiguredProperty } from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import { $LoadedConfig$$Type } from "net.blay09.mods.balm.api.config.LoadedConfig"
import { $BalmConfigSchema } from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import { $Class } from "java.lang.Class"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"

export interface $ConfiguredLong extends $ConfiguredProperty<long> {
"category"(): string
"codec"(): $Codec<long>
"comment"(): string
"defaultValue"(): long
"get"(loadedConfig0: $LoadedConfig$$Type): long
"get"(): long
"getRaw"(loadedConfig0: $LoadedConfig$$Type): long
"name"(): string
"parentSchema"(): $BalmConfigSchema
"set"(long0: long): void
"set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, long1: long): void
"setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, long1: long): void
"streamCodec"(): $StreamCodec<$FriendlyByteBuf, long>
"synced"(): boolean
"type"(): $Class<any>
}

export namespace $ConfiguredLong {
const probejs$$marker: never
}
export abstract class $ConfiguredLong$$Static implements $ConfiguredLong {
}
}

declare module "net.blay09.mods.balm.api.config.schema.builder.DoubleConfigProperty" {
import { $ConfigPropertyBuilder$$Type } from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import { $StreamCodec } from "net.blay09.mods.balm.common.codec.StreamCodec"
import { $MutableLoadedConfig$$Type } from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import { $AbstractConfigProperty } from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import { $Codec } from "com.mojang.serialization.Codec"
import { $LoadedConfig$$Type } from "net.blay09.mods.balm.api.config.LoadedConfig"
import { $Class } from "java.lang.Class"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"
import { $ConfiguredDouble } from "net.blay09.mods.balm.api.config.schema.ConfiguredDouble"

export class $DoubleConfigProperty extends $AbstractConfigProperty<double> implements $ConfiguredDouble {
static readonly "CODEC": $Codec<double>

constructor(configPropertyBuilder0: $ConfigPropertyBuilder$$Type, double1: double)

public "codec"(): $Codec<double>
public "defaultValue"(): double
public "get"(loadedConfig0: $LoadedConfig$$Type): double
public "get"(): double
public "getRaw"(loadedConfig0: $LoadedConfig$$Type): double
public "set"(double0: double): void
public "set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, double1: double): void
public "setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, double1: double): void
public "streamCodec"(): $StreamCodec<$FriendlyByteBuf, double>
public "type"(): $Class<double>
}
}

declare module "net.blay09.mods.balm.api.config.schema.ConfiguredInt" {
import { $StreamCodec } from "net.blay09.mods.balm.common.codec.StreamCodec"
import { $MutableLoadedConfig$$Type } from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import { $Codec } from "com.mojang.serialization.Codec"
import { $ConfiguredProperty } from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import { $LoadedConfig$$Type } from "net.blay09.mods.balm.api.config.LoadedConfig"
import { $BalmConfigSchema } from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import { $Class } from "java.lang.Class"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"

export interface $ConfiguredInt extends $ConfiguredProperty<integer> {
"category"(): string
"codec"(): $Codec<integer>
"comment"(): string
"defaultValue"(): integer
"get"(loadedConfig0: $LoadedConfig$$Type): integer
"get"(): integer
"getRaw"(loadedConfig0: $LoadedConfig$$Type): integer
"name"(): string
"parentSchema"(): $BalmConfigSchema
"set"(int0: integer): void
"set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, int1: integer): void
"setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, integer1: integer): void
"streamCodec"(): $StreamCodec<$FriendlyByteBuf, integer>
"synced"(): boolean
"type"(): $Class<any>
}

export namespace $ConfiguredInt {
const probejs$$marker: never
}
export abstract class $ConfiguredInt$$Static implements $ConfiguredInt {
}
}

declare module "net.blay09.mods.balm.api.event.client.GuiDrawEvent" {
import { $Window, $Window$$Type } from "com.mojang.blaze3d.platform.Window"
import { $GuiGraphics, $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $GuiDrawEvent$Element, $GuiDrawEvent$Element$$Type } from "net.blay09.mods.balm.api.event.client.GuiDrawEvent$Element"

export class $GuiDrawEvent extends $BalmEvent {
constructor()
constructor(window0: $Window$$Type, guiGraphics1: $GuiGraphics$$Type, element2: $GuiDrawEvent$Element$$Type)

public "getElement"(): $GuiDrawEvent$Element
public "getGuiGraphics"(): $GuiGraphics
public "getWindow"(): $Window
get "element"(): $GuiDrawEvent$Element
get "guiGraphics"(): $GuiGraphics
get "window"(): $Window
}
}

declare module "net.blay09.mods.balm.api.event.client.screen.ScreenDrawEvent" {
import { $GuiGraphics, $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $Screen, $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export class $ScreenDrawEvent extends $BalmEvent {
constructor(screen0: $Screen$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, float4: float)
constructor()

public "getGuiGraphics"(): $GuiGraphics
public "getMouseX"(): integer
public "getMouseY"(): integer
public "getScreen"(): $Screen
public "getTickDelta"(): float
get "guiGraphics"(): $GuiGraphics
get "mouseX"(): integer
get "mouseY"(): integer
get "screen"(): $Screen
get "tickDelta"(): float
}
}

declare module "net.blay09.mods.balm.api.event.PlayerRespawnEvent" {
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"

export class $PlayerRespawnEvent extends $BalmEvent {
constructor(serverPlayer0: $ServerPlayer$$Type, serverPlayer1: $ServerPlayer$$Type)
constructor()

public "getNewPlayer"(): $ServerPlayer
public "getOldPlayer"(): $ServerPlayer
get "newPlayer"(): $ServerPlayer
get "oldPlayer"(): $ServerPlayer
}
}

declare module "net.blay09.mods.balm.api.event.CropGrowEvent" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $CropGrowEvent extends $BalmEvent {
constructor()
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "getLevel"(): $Level
public "getPos"(): $BlockPos
public "getState"(): $BlockState
get "level"(): $Level
get "pos"(): $BlockPos
get "state"(): $BlockState
}
}

declare module "net.blay09.mods.balm.api.event.client.OpenScreenEvent" {
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $Screen, $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export class $OpenScreenEvent extends $BalmEvent {
constructor()
constructor(screen0: $Screen$$Type)

public "getNewScreen"(): $Screen
public "getScreen"(): $Screen
public "setScreen"(screen0: $Screen$$Type): void
get "newScreen"(): $Screen
get "screen"(): $Screen
set "screen"(value: $Screen$$Type)
}
}

declare module "net.blay09.mods.balm.api.event.client.screen.ContainerScreenDrawEvent$Foreground" {
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $ContainerScreenDrawEvent } from "net.blay09.mods.balm.api.event.client.screen.ContainerScreenDrawEvent"

export class $ContainerScreenDrawEvent$Foreground extends $ContainerScreenDrawEvent {
constructor(screen0: $Screen$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer)
constructor()

}
}

declare module "net.blay09.mods.balm.api.config.schema.impl.ConfigSchemaImpl" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ConfigPropertyBuilder } from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import { $ConfiguredProperty, $ConfiguredProperty$$Type } from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import { $ConfigSchemaBuilder } from "net.blay09.mods.balm.api.config.schema.ConfigSchemaBuilder"
import { $Collection } from "java.util.Collection"
import { $LoadedConfig } from "net.blay09.mods.balm.api.config.LoadedConfig"
import { $BalmConfigSchema } from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import { $ConfigCategoryBuilder } from "net.blay09.mods.balm.api.config.schema.builder.ConfigCategoryBuilder"
import { $ConfigCategory } from "net.blay09.mods.balm.api.config.schema.builder.ConfigCategory"

export class $ConfigSchemaImpl implements $BalmConfigSchema, $ConfigSchemaBuilder {
constructor(resourceLocation0: $ResourceLocation$$Type)

public "addAndReturn"<T extends $ConfiguredProperty<any>>(t0: T): T
public "categories"(): $Collection<$ConfigCategory>
public "category"(string0: string): $ConfigCategoryBuilder
public static "create"(resourceLocation0: $ResourceLocation$$Type): $ConfigSchemaImpl
public "defaults"(): $LoadedConfig
public "findProperty"(string0: string, string1: string): $ConfiguredProperty<any>
public "findRootProperty"(string0: string): $ConfiguredProperty<any>
public "identifier"(): $ResourceLocation
public "property"(string0: string): $ConfigPropertyBuilder
public "rootProperties"(): $Collection<$ConfiguredProperty<any>>
}
}

declare module "net.blay09.mods.balm.api.event.client.GuiDrawEvent$Pre" {
import { $Window$$Type } from "com.mojang.blaze3d.platform.Window"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $GuiDrawEvent } from "net.blay09.mods.balm.api.event.client.GuiDrawEvent"
import { $GuiDrawEvent$Element$$Type } from "net.blay09.mods.balm.api.event.client.GuiDrawEvent$Element"

export class $GuiDrawEvent$Pre extends $GuiDrawEvent {
constructor(window0: $Window$$Type, guiGraphics1: $GuiGraphics$$Type, element2: $GuiDrawEvent$Element$$Type)
constructor()

}
}

declare module "net.blay09.mods.balm.api.event.ItemCraftedEvent" {
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $BalmEvent } from "net.blay09.mods.balm.api.event.BalmEvent"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ItemCraftedEvent extends $BalmEvent {
constructor(player0: $Player$$Type, itemStack1: $ItemStack$$Type, container2: $Container$$Type)
constructor()

public "getCraftMatrix"(): $Container
public "getItemStack"(): $ItemStack
public "getPlayer"(): $Player
get "craftMatrix"(): $Container
get "itemStack"(): $ItemStack
get "player"(): $Player
}
}

declare module "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Press$Post" {
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $ScreenKeyEvent$Press } from "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Press"

export class $ScreenKeyEvent$Press$Post extends $ScreenKeyEvent$Press {
constructor(screen0: $Screen$$Type, int1: integer, int2: integer, int3: integer)
constructor()

}
}

