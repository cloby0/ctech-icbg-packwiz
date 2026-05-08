declare module "dev.latvian.mods.kubejs.core.FireworkRocketEntityKJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FireworkRocketEntityKJS {
"setLifetimeKJS"(int0: integer): void
set "lifetimeKJS"(value: integer)
}

export namespace $FireworkRocketEntityKJS {
const probejs$$marker: never
}
export abstract class $FireworkRocketEntityKJS$$Static implements $FireworkRocketEntityKJS {
}
}

declare module "dev.latvian.mods.kubejs.core.ClientLevelKJS" {
import { $ExplosionJS } from "dev.latvian.mods.kubejs.level.ExplosionJS"
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $AttachedData } from "dev.latvian.mods.kubejs.util.AttachedData"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Collection$$Type } from "java.util.Collection"
import { $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $FireworksJS$$Type } from "dev.latvian.mods.kubejs.level.FireworksJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $LevelKJS } from "dev.latvian.mods.kubejs.core.LevelKJS"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Level } from "net.minecraft.world.level.Level"

export interface $ClientLevelKJS extends $LevelKJS {
"createEntity"(type: $EntityType$$Type<any>): $Entity
"createEntityList"(entities: $Collection$$Type<$Entity$$Type>): $EntityArrayList
"createExplosion"(x: double, y: double, z: double): $ExplosionJS
"getBlock"(x: integer, y: integer, z: integer): $BlockContainerJS
"getBlock"(blockEntity: $BlockEntity$$Type): $BlockContainerJS
"getBlock"(pos: $BlockPos$$Type): $BlockContainerJS
"getData"(): $AttachedData<$Level>
"getDimension"(): $ResourceLocation
"getDisplayName"(): $Component
"getEntities"(): $EntityArrayList
"getEntitiesWithin"(aabb: $AABB$$Type): $EntityArrayList
"getName"(): $Component
"getPlayers"(): $EntityArrayList
"getSide"(): $ScriptType
"isOverworld"(): boolean
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"setStatusMessage"(message: $Component$$Type): void
"spawnFireworks"(x: double, y: double, z: double, f: $FireworksJS$$Type): void
"spawnParticles"(options: $ParticleOptions$$Type, overrideLimiter: boolean, x: double, y: double, z: double, vx: double, vy: double, vz: double, count: integer, speed: double): void
"tell"(message: $Component$$Type): void
get "data"(): $AttachedData<$Level>
get "dimension"(): $ResourceLocation
get "displayName"(): $Component
get "entities"(): $EntityArrayList
get "name"(): $Component
get "players"(): $EntityArrayList
get "side"(): $ScriptType
get "overworld"(): boolean
set "statusMessage"(value: $Component$$Type)
}

export namespace $ClientLevelKJS {
const probejs$$marker: never
}
export abstract class $ClientLevelKJS$$Static implements $ClientLevelKJS {
}
}

declare module "dev.latvian.mods.kubejs.core.ItemFrameEntityKJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $EntityKJS } from "dev.latvian.mods.kubejs.core.EntityKJS"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level } from "net.minecraft.world.level.Level"

export interface $ItemFrameEntityKJS extends $EntityKJS {
"attack"(hp: float): void
"getBlock"(): $BlockContainerJS
"getDisplayName"(): $Component
"getDistance"(pos: $BlockPos$$Type): double
"getDistance"(x: double, y: double, z: double): double
"getDistanceSq"(pos: $BlockPos$$Type): double
"getFacing"(): $Direction
"getItem"(): $ItemStack
"getLevel"(): $Level
"getMotionX"(): double
"getMotionY"(): double
"getMotionZ"(): double
"getName"(): $Component
"getNbt"(): $CompoundTag
"getPassengers"(): $EntityArrayList
"getPersistentData"(): $CompoundTag
"getProfile"(): $GameProfile
"getScriptType"(): $ScriptType
"getServer"(): $MinecraftServer
"getTeamId"(): string
"getType"(): string
"isAmbientCreature"(): boolean
"isAnimal"(): boolean
"isFrame"(): boolean
"isLiving"(): boolean
"isMonster"(): boolean
"isOnScoreboardTeam"(teamId: string): boolean
"isPeacefulCreature"(): boolean
"isPlayer"(): boolean
"isWaterCreature"(): boolean
"mergeNbt"(tag: $CompoundTag$$Type): $Entity
"playSound"(id: $SoundEvent$$Type): void
"playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
"rayTrace"(distance: double): $RayTraceResultJS
"rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"setMotionX"(x: double): void
"setMotionY"(y: double): void
"setMotionZ"(z: double): void
"setNbt"(nbt: $CompoundTag$$Type): void
"setPosition"(block: $BlockContainerJS$$Type): void
"setPosition"(x: double, y: double, z: double): void
"setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
"setRotation"(yaw: float, pitch: float): void
"setStatusMessage"(message: $Component$$Type): void
"setX"(x: double): void
"setY"(y: double): void
"setZ"(z: double): void
"spawn"(): void
"teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
"tell"(message: $Component$$Type): void
get "block"(): $BlockContainerJS
get "displayName"(): $Component
get "facing"(): $Direction
get "item"(): $ItemStack
get "level"(): $Level
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "passengers"(): $EntityArrayList
get "persistentData"(): $CompoundTag
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "teamId"(): string
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "waterCreature"(): boolean
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}

export namespace $ItemFrameEntityKJS {
const probejs$$marker: never
}
export abstract class $ItemFrameEntityKJS$$Static implements $ItemFrameEntityKJS {
}
}

declare module "dev.latvian.mods.kubejs.core.ServerLevelKJS" {
import { $ExplosionJS } from "dev.latvian.mods.kubejs.level.ExplosionJS"
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $AttachedData } from "dev.latvian.mods.kubejs.util.AttachedData"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Collection$$Type } from "java.util.Collection"
import { $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"
import { $WithPersistentData } from "dev.latvian.mods.kubejs.core.WithPersistentData"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $FireworksJS$$Type } from "dev.latvian.mods.kubejs.level.FireworksJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $LevelKJS } from "dev.latvian.mods.kubejs.core.LevelKJS"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Level } from "net.minecraft.world.level.Level"

export interface $ServerLevelKJS extends $LevelKJS, $WithPersistentData {
"createEntity"(type: $EntityType$$Type<any>): $Entity
"createEntityList"(entities: $Collection$$Type<$Entity$$Type>): $EntityArrayList
"createExplosion"(x: double, y: double, z: double): $ExplosionJS
"getBlock"(x: integer, y: integer, z: integer): $BlockContainerJS
"getBlock"(blockEntity: $BlockEntity$$Type): $BlockContainerJS
"getBlock"(pos: $BlockPos$$Type): $BlockContainerJS
"getData"(): $AttachedData<$Level>
"getDimension"(): $ResourceLocation
"getDisplayName"(): $Component
"getEntities"(): $EntityArrayList
"getEntitiesWithin"(aabb: $AABB$$Type): $EntityArrayList
"getName"(): $Component
"getPersistentData"(): $CompoundTag
"getPlayers"(): $EntityArrayList
"getSide"(): $ScriptType
"isOverworld"(): boolean
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"setStatusMessage"(message: $Component$$Type): void
"setTime"(time: long): void
"spawnFireworks"(x: double, y: double, z: double, f: $FireworksJS$$Type): void
"spawnLightning"(x: double, y: double, z: double, effectOnly: boolean, player: $ServerPlayer$$Type): void
"spawnLightning"(x: double, y: double, z: double, effectOnly: boolean): void
"spawnParticles"(options: $ParticleOptions$$Type, overrideLimiter: boolean, x: double, y: double, z: double, vx: double, vy: double, vz: double, count: integer, speed: double): void
"tell"(message: $Component$$Type): void
get "data"(): $AttachedData<$Level>
get "dimension"(): $ResourceLocation
get "displayName"(): $Component
get "entities"(): $EntityArrayList
get "name"(): $Component
get "persistentData"(): $CompoundTag
get "players"(): $EntityArrayList
get "side"(): $ScriptType
get "overworld"(): boolean
set "statusMessage"(value: $Component$$Type)
set "time"(value: long)
}

export namespace $ServerLevelKJS {
const probejs$$marker: never
}
export abstract class $ServerLevelKJS$$Static implements $ServerLevelKJS {
}
}

declare module "dev.latvian.mods.kubejs.core.ModifiableItemKJS" {
import { $AttributeModifier, $AttributeModifier$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $Multimap, $Multimap$$Type } from "com.google.common.collect.Multimap"
import { $Attribute, $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"

export interface $ModifiableItemKJS {
"kjs$getAttributeMap"(): $Multimap<$Attribute, $AttributeModifier>
"kjs$getMutableAttributeMap"(): $Multimap<$Attribute, $AttributeModifier>
"kjs$setAttributeMap"(attributes: $Multimap$$Type<$Attribute$$Type, $AttributeModifier$$Type>): void
}

export namespace $ModifiableItemKJS {
const probejs$$marker: never
}
export abstract class $ModifiableItemKJS$$Static implements $ModifiableItemKJS {
}
}

declare module "dev.latvian.mods.kubejs.core.ItemEntityKJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $EntityKJS } from "dev.latvian.mods.kubejs.core.EntityKJS"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level } from "net.minecraft.world.level.Level"

export interface $ItemEntityKJS extends $EntityKJS {
"attack"(hp: float): void
"getBlock"(): $BlockContainerJS
"getDisplayName"(): $Component
"getDistance"(pos: $BlockPos$$Type): double
"getDistance"(x: double, y: double, z: double): double
"getDistanceSq"(pos: $BlockPos$$Type): double
"getFacing"(): $Direction
"getItem"(): $ItemStack
"getLevel"(): $Level
"getLifespan"(): integer
"getMotionX"(): double
"getMotionY"(): double
"getMotionZ"(): double
"getName"(): $Component
"getNbt"(): $CompoundTag
"getPassengers"(): $EntityArrayList
"getPersistentData"(): $CompoundTag
"getProfile"(): $GameProfile
"getScriptType"(): $ScriptType
"getServer"(): $MinecraftServer
"getTeamId"(): string
"getTicksUntilDespawn"(): integer
"getType"(): string
"isAmbientCreature"(): boolean
"isAnimal"(): boolean
"isFrame"(): boolean
"isLiving"(): boolean
"isMonster"(): boolean
"isOnScoreboardTeam"(teamId: string): boolean
"isPeacefulCreature"(): boolean
"isPlayer"(): boolean
"isWaterCreature"(): boolean
"mergeNbt"(tag: $CompoundTag$$Type): $Entity
"playSound"(id: $SoundEvent$$Type): void
"playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
"rayTrace"(distance: double): $RayTraceResultJS
"rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"setDefaultPickUpDelay"(): void
"setInfinitePickUpDelay"(): void
"setLifespan"(lifespan: integer): void
"setMotionX"(x: double): void
"setMotionY"(y: double): void
"setMotionZ"(z: double): void
"setNbt"(nbt: $CompoundTag$$Type): void
"setNoDespawn"(): void
"setNoPickUpDelay"(): void
"setPosition"(block: $BlockContainerJS$$Type): void
"setPosition"(x: double, y: double, z: double): void
"setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
"setRotation"(yaw: float, pitch: float): void
"setStatusMessage"(message: $Component$$Type): void
"setTicksUntilDespawn"(ticks: integer): void
"setX"(x: double): void
"setY"(y: double): void
"setZ"(z: double): void
"spawn"(): void
"teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
"tell"(message: $Component$$Type): void
get "block"(): $BlockContainerJS
get "displayName"(): $Component
get "facing"(): $Direction
get "item"(): $ItemStack
get "level"(): $Level
get "lifespan"(): integer
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "passengers"(): $EntityArrayList
get "persistentData"(): $CompoundTag
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "teamId"(): string
get "ticksUntilDespawn"(): integer
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "waterCreature"(): boolean
set "lifespan"(value: integer)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "ticksUntilDespawn"(value: integer)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}

export namespace $ItemEntityKJS {
const probejs$$marker: never
}
export abstract class $ItemEntityKJS$$Static implements $ItemEntityKJS {
}
}

declare module "dev.latvian.mods.kubejs.core.CraftingContainerKJS" {
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"

export interface $CraftingContainerKJS {
"getMenu"(): $AbstractContainerMenu
get "menu"(): $AbstractContainerMenu
}

export namespace $CraftingContainerKJS {
const probejs$$marker: never
}
export abstract class $CraftingContainerKJS$$Static implements $CraftingContainerKJS {
}
}

declare module "dev.latvian.mods.kubejs.core.CreativeModeTabKJS" {
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $CreativeModeTabKJS {
"kjs$setDisplayName"(component0: $Component$$Type): void
"kjs$setIcon"(itemStack0: $ItemStack$$Type): void
}

export namespace $CreativeModeTabKJS {
const probejs$$marker: never
}
export abstract class $CreativeModeTabKJS$$Static implements $CreativeModeTabKJS {
}
}

declare module "dev.latvian.mods.kubejs.core.BlockKJS" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $BlockBuilder, $BlockBuilder$$Type } from "dev.latvian.mods.kubejs.block.BlockBuilder"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockBuilderProvider } from "dev.latvian.mods.kubejs.core.BlockBuilderProvider"
import { $SoundType$$Type } from "net.minecraft.world.level.block.SoundType"
import { $RandomTickCallbackJS$$Type } from "dev.latvian.mods.kubejs.block.RandomTickCallbackJS"

export interface $BlockKJS extends $BlockBuilderProvider {
"getBlockBuilder"(): $BlockBuilder
"getBlockStates"(): $List<$BlockState>
"getId"(): string
"getIdLocation"(): $ResourceLocation
"getMod"(): string
"getTypeData"(): $CompoundTag
"setBlockBuilder"(b: $BlockBuilder$$Type): void
"setDestroySpeed"(v: float): void
"setExplosionResistance"(v: float): void
"setFriction"(v: float): void
"setHasCollision"(v: boolean): void
"setIsRandomlyTicking"(v: boolean): void
"setJumpFactor"(v: float): void
"setLightEmission"(v: integer): void
"setNameKey"(key: string): void
"setRandomTickCallback"(callback: $Consumer$$Type<$RandomTickCallbackJS$$Type>): void
"setRequiresTool"(v: boolean): void
"setSoundType"(v: $SoundType$$Type): void
"setSpeedFactor"(v: float): void
get "blockBuilder"(): $BlockBuilder
get "blockStates"(): $List<$BlockState>
get "id"(): string
get "idLocation"(): $ResourceLocation
get "mod"(): string
get "typeData"(): $CompoundTag
set "blockBuilder"(value: $BlockBuilder$$Type)
set "destroySpeed"(value: float)
set "explosionResistance"(value: float)
set "friction"(value: float)
set "hasCollision"(value: boolean)
set "isRandomlyTicking"(value: boolean)
set "jumpFactor"(value: float)
set "lightEmission"(value: integer)
set "nameKey"(value: string)
set "randomTickCallback"(value: $Consumer$$Type<$RandomTickCallbackJS$$Type>)
set "requiresTool"(value: boolean)
set "soundType"(value: $SoundType$$Type)
set "speedFactor"(value: float)
}

export namespace $BlockKJS {
const probejs$$marker: never
}
export abstract class $BlockKJS$$Static implements $BlockKJS {
}
}

declare module "dev.latvian.mods.kubejs.core.PlayerKJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction } from "net.minecraft.core.Direction"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $KubeJSInventoryListener } from "dev.latvian.mods.kubejs.player.KubeJSInventoryListener"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $WithAttachedData } from "dev.latvian.mods.kubejs.core.WithAttachedData"
import { $NotificationBuilder$$Type } from "dev.latvian.mods.kubejs.util.NotificationBuilder"
import { $AttachedData } from "dev.latvian.mods.kubejs.util.AttachedData"
import { $EntityPotionEffectsJS } from "dev.latvian.mods.kubejs.entity.EntityPotionEffectsJS"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $InventoryKJS } from "dev.latvian.mods.kubejs.core.InventoryKJS"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $Player } from "net.minecraft.world.entity.player.Player"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stages } from "dev.latvian.mods.kubejs.stages.Stages"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $DataSenderKJS } from "dev.latvian.mods.kubejs.core.DataSenderKJS"
import { $PlayerStatsJS } from "dev.latvian.mods.kubejs.player.PlayerStatsJS"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $LivingEntityKJS } from "dev.latvian.mods.kubejs.core.LivingEntityKJS"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level } from "net.minecraft.world.level.Level"

export interface $PlayerKJS extends $LivingEntityKJS, $DataSenderKJS, $WithAttachedData<$Player> {
"addExhaustion"(exhaustion: float): void
"addFood"(f: integer, m: float): void
"addItemCooldown"(item: $Item$$Type, ticks: integer): void
"addXP"(xp: integer): void
"addXPLevels"(l: integer): void
"attack"(hp: float): void
"boostElytraFlight"(): void
"canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
"damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
"damageEquipment"(slot: $EquipmentSlot$$Type): void
"damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
"damageHeldItem"(): void
"damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
"damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
"foodEaten"(is: $ItemStack$$Type): void
"getAttributeBaseValue"(attribute: $Attribute$$Type): double
"getAttributeTotalValue"(attribute: $Attribute$$Type): double
"getBlock"(): $BlockContainerJS
"getChestArmorItem"(): $ItemStack
"getCraftingGrid"(): $InventoryKJS
"getData"(): $AttachedData<$Player>
"getDefaultMovementSpeed"(): double
"getDisplayName"(): $Component
"getDistance"(pos: $BlockPos$$Type): double
"getDistance"(x: double, y: double, z: double): double
"getDistanceSq"(pos: $BlockPos$$Type): double
"getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
"getFacing"(): $Direction
"getFeetArmorItem"(): $ItemStack
"getFoodLevel"(): integer
"getHeadArmorItem"(): $ItemStack
"getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
"getInventory"(): $InventoryKJS
"getInventoryChangeListener"(): $KubeJSInventoryListener
"getItem"(): $ItemStack
"getLegsArmorItem"(): $ItemStack
"getLevel"(): $Level
"getMainHandItem"(): $ItemStack
"getMotionX"(): double
"getMotionY"(): double
"getMotionZ"(): double
"getMouseItem"(): $ItemStack
"getName"(): $Component
"getNbt"(): $CompoundTag
"getOffHandItem"(): $ItemStack
"getOpenInventory"(): $AbstractContainerMenu
"getPassengers"(): $EntityArrayList
"getPersistentData"(): $CompoundTag
"getPotionEffects"(): $EntityPotionEffectsJS
"getProfile"(): $GameProfile
"getReachDistance"(): double
"getSaturation"(): float
"getScriptType"(): $ScriptType
"getSelectedSlot"(): integer
"getServer"(): $MinecraftServer
"getStages"(): $Stages
"getStats"(): $PlayerStatsJS
"getTeamId"(): string
"getTotalMovementSpeed"(): double
"getType"(): string
"getXp"(): integer
"getXpLevel"(): integer
"give"(item: $ItemStack$$Type): void
"giveInHand"(item: $ItemStack$$Type): void
"isAmbientCreature"(): boolean
"isAnimal"(): boolean
"isFake"(): boolean
"isFrame"(): boolean
"isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
"isLiving"(): boolean
"isMiningBlock"(): boolean
"isMonster"(): boolean
"isOnScoreboardTeam"(teamId: string): boolean
"isPeacefulCreature"(): boolean
"isPlayer"(): boolean
"isUndead"(): boolean
"isWaterCreature"(): boolean
"mergeNbt"(tag: $CompoundTag$$Type): $Entity
"modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
"notify"(builder: $NotificationBuilder$$Type): void
"notify"(title: $Component$$Type, text: $Component$$Type): void
"paint"(renderer: $CompoundTag$$Type): void
"playSound"(id: $SoundEvent$$Type): void
"playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
"rayTrace"(): $RayTraceResultJS
"rayTrace"(distance: double): $RayTraceResultJS
"rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
"removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"sendData"(channel: string, data: $CompoundTag$$Type): void
"sendData"(channel: string): void
"sendInventoryUpdate"(): void
"setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
"setChestArmorItem"(item: $ItemStack$$Type): void
"setDefaultMovementSpeed"(speed: double): void
"setDefaultMovementSpeedMultiplier"(speed: double): void
"setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
"setFeetArmorItem"(item: $ItemStack$$Type): void
"setFoodLevel"(foodLevel: integer): void
"setHeadArmorItem"(item: $ItemStack$$Type): void
"setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
"setLegsArmorItem"(item: $ItemStack$$Type): void
"setMainHandItem"(item: $ItemStack$$Type): void
"setMaxHealth"(hp: float): void
"setMotionX"(x: double): void
"setMotionY"(y: double): void
"setMotionZ"(z: double): void
"setMouseItem"(item: $ItemStack$$Type): void
"setMovementSpeedAddition"(speed: double): void
"setNbt"(nbt: $CompoundTag$$Type): void
"setOffHandItem"(item: $ItemStack$$Type): void
"setPosition"(block: $BlockContainerJS$$Type): void
"setPosition"(x: double, y: double, z: double): void
"setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
"setRotation"(yaw: float, pitch: float): void
"setSaturation"(saturation: float): void
"setSelectedSlot"(index: integer): void
"setStatusMessage"(message: $Component$$Type): void
"setTotalMovementSpeedMultiplier"(speed: double): void
"setX"(x: double): void
"setXp"(xp: integer): void
"setXpLevel"(l: integer): void
"setY"(y: double): void
"setZ"(z: double): void
"spawn"(): void
"swing"(): void
"swing"(hand: $InteractionHand$$Type): void
"teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
"tell"(message: $Component$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "craftingGrid"(): $InventoryKJS
get "data"(): $AttachedData<$Player>
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "foodLevel"(): integer
get "headArmorItem"(): $ItemStack
get "inventory"(): $InventoryKJS
get "inventoryChangeListener"(): $KubeJSInventoryListener
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "mouseItem"(): $ItemStack
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "openInventory"(): $AbstractContainerMenu
get "passengers"(): $EntityArrayList
get "persistentData"(): $CompoundTag
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "saturation"(): float
get "scriptType"(): $ScriptType
get "selectedSlot"(): integer
get "server"(): $MinecraftServer
get "stages"(): $Stages
get "stats"(): $PlayerStatsJS
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "xp"(): integer
get "xpLevel"(): integer
get "ambientCreature"(): boolean
get "animal"(): boolean
get "fake"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "miningBlock"(): boolean
get "monster"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "foodLevel"(value: integer)
set "headArmorItem"(value: $ItemStack$$Type)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "mouseItem"(value: $ItemStack$$Type)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "saturation"(value: float)
set "selectedSlot"(value: integer)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "xp"(value: integer)
set "xpLevel"(value: integer)
set "y"(value: double)
set "z"(value: double)
}

export namespace $PlayerKJS {
const probejs$$marker: never
}
export abstract class $PlayerKJS$$Static implements $PlayerKJS {
}
}

declare module "dev.latvian.mods.kubejs.core.MinecraftClientKJS" {
import { $ScheduledEvents$Callback$$Type } from "dev.latvian.mods.kubejs.util.ScheduledEvents$Callback"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Minecraft } from "net.minecraft.client.Minecraft"
import { $MinecraftEnvironmentKJS } from "dev.latvian.mods.kubejs.core.MinecraftEnvironmentKJS"
import { $Screen, $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $ScheduledEvents } from "dev.latvian.mods.kubejs.util.ScheduledEvents"
import { $TemporalAmount$$Type } from "java.time.temporal.TemporalAmount"
import { $ScheduledEvents$ScheduledEvent } from "dev.latvian.mods.kubejs.util.ScheduledEvents$ScheduledEvent"

export interface $MinecraftClientKJS extends $MinecraftEnvironmentKJS {
"getCurrentScreen"(): $Screen
"getCurrentWorldName"(): string
"getDisplayName"(): $Component
"getName"(): $Component
"getScheduledEvents"(): $ScheduledEvents
"isAltDown"(): boolean
"isCtrlDown"(): boolean
"isKeyDown"(key: integer): boolean
"isShiftDown"(): boolean
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"schedule"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
"scheduleInTicks"(ticks: long, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
"scheduleRepeating"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
"scheduleRepeatingInTicks"(ticks: long, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
"self"(): $Minecraft
"setCurrentScreen"(gui: $Screen$$Type): void
"setStatusMessage"(message: $Component$$Type): void
"setTitle"(t: string): void
"tell"(message: $Component$$Type): void
get "currentScreen"(): $Screen
get "currentWorldName"(): string
get "displayName"(): $Component
get "name"(): $Component
get "scheduledEvents"(): $ScheduledEvents
get "altDown"(): boolean
get "ctrlDown"(): boolean
get "shiftDown"(): boolean
set "currentScreen"(value: $Screen$$Type)
set "statusMessage"(value: $Component$$Type)
set "title"(value: string)
}

export namespace $MinecraftClientKJS {
const probejs$$marker: never
}
export abstract class $MinecraftClientKJS$$Static implements $MinecraftClientKJS {
}
}

declare module "dev.latvian.mods.kubejs.core.LevelKJS" {
import { $ExplosionJS } from "dev.latvian.mods.kubejs.level.ExplosionJS"
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $ScriptTypeHolder } from "dev.latvian.mods.kubejs.script.ScriptTypeHolder"
import { $AttachedData } from "dev.latvian.mods.kubejs.util.AttachedData"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Collection$$Type } from "java.util.Collection"
import { $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $FireworksJS$$Type } from "dev.latvian.mods.kubejs.level.FireworksJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $WithAttachedData } from "dev.latvian.mods.kubejs.core.WithAttachedData"
import { $Level } from "net.minecraft.world.level.Level"

export interface $LevelKJS extends $WithAttachedData<$Level>, $ScriptTypeHolder {
"createEntity"(type: $EntityType$$Type<any>): $Entity
"createEntityList"(entities: $Collection$$Type<$Entity$$Type>): $EntityArrayList
"createExplosion"(x: double, y: double, z: double): $ExplosionJS
"getBlock"(x: integer, y: integer, z: integer): $BlockContainerJS
"getBlock"(blockEntity: $BlockEntity$$Type): $BlockContainerJS
"getBlock"(pos: $BlockPos$$Type): $BlockContainerJS
"getData"(): $AttachedData<$Level>
"getDimension"(): $ResourceLocation
"getDisplayName"(): $Component
"getEntities"(): $EntityArrayList
"getEntitiesWithin"(aabb: $AABB$$Type): $EntityArrayList
"getName"(): $Component
"getPlayers"(): $EntityArrayList
"getSide"(): $ScriptType
"isOverworld"(): boolean
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"self"(): $Level
"setStatusMessage"(message: $Component$$Type): void
"spawnFireworks"(x: double, y: double, z: double, f: $FireworksJS$$Type): void
"spawnParticles"(options: $ParticleOptions$$Type, overrideLimiter: boolean, x: double, y: double, z: double, vx: double, vy: double, vz: double, count: integer, speed: double): void
"tell"(message: $Component$$Type): void
get "data"(): $AttachedData<$Level>
get "dimension"(): $ResourceLocation
get "displayName"(): $Component
get "entities"(): $EntityArrayList
get "name"(): $Component
get "players"(): $EntityArrayList
get "side"(): $ScriptType
get "overworld"(): boolean
set "statusMessage"(value: $Component$$Type)
}

export namespace $LevelKJS {
const probejs$$marker: never
}
export abstract class $LevelKJS$$Static implements $LevelKJS {
}
}

declare module "dev.latvian.mods.kubejs.core.IngredientKJS" {
import { $JsonElement } from "com.google.gson.JsonElement"
import { $IngredientKJSMixin } from "dev.uncandango.alltheleaks.mixin.core.main.IngredientKJSMixin"
import { $IngredientSupplierKJS } from "dev.latvian.mods.kubejs.core.IngredientSupplierKJS"
import { $JsonSerializable } from "dev.latvian.mods.rhino.mod.util.JsonSerializable"
import { $InputItem } from "dev.latvian.mods.kubejs.item.InputItem"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $ItemStackSet } from "dev.latvian.mods.kubejs.item.ItemStackSet"
import { $Set } from "java.util.Set"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Ingredient, $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export interface $IngredientKJS extends $IngredientSupplierKJS, $JsonSerializable, $IngredientKJSMixin {
"and"(ingredient: $Ingredient$$Type): $Ingredient
"asIngredient"(): $Ingredient
"asStack"(): $InputItem
"canBeUsedForMatching"(): boolean
"getDisplayStacks"(): $ItemStackSet
"getFirst"(): $ItemStack
"getItemIds"(): $Set<string>
"getItemTypes"(): $Set<$Item>
"getStacks"(): $ItemStackSet
"isWildcard"(): boolean
"or"(ingredient: $Ingredient$$Type): $Ingredient
"self"(): $Ingredient
"subtract"(subtracted: $Ingredient$$Type): $Ingredient
"testItem"(item: $Item$$Type): boolean
"toJson"(): $JsonElement
"withCount"(count: integer): $InputItem
get "displayStacks"(): $ItemStackSet
get "first"(): $ItemStack
get "itemIds"(): $Set<string>
get "itemTypes"(): $Set<$Item>
get "stacks"(): $ItemStackSet
get "wildcard"(): boolean
}

export namespace $IngredientKJS {
const probejs$$marker: never
}
export abstract class $IngredientKJS$$Static implements $IngredientKJS {
}
}

declare module "dev.latvian.mods.kubejs.core.EntityKJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ScriptTypeHolder } from "dev.latvian.mods.kubejs.script.ScriptTypeHolder"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $WithPersistentData } from "dev.latvian.mods.kubejs.core.WithPersistentData"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level } from "net.minecraft.world.level.Level"
import { $MessageSenderKJS } from "dev.latvian.mods.kubejs.core.MessageSenderKJS"

export interface $EntityKJS extends $WithPersistentData, $MessageSenderKJS, $ScriptTypeHolder {
"attack"(hp: float): void
"getBlock"(): $BlockContainerJS
"getDisplayName"(): $Component
"getDistance"(pos: $BlockPos$$Type): double
"getDistance"(x: double, y: double, z: double): double
"getDistanceSq"(pos: $BlockPos$$Type): double
"getFacing"(): $Direction
"getItem"(): $ItemStack
"getLevel"(): $Level
"getMotionX"(): double
"getMotionY"(): double
"getMotionZ"(): double
"getName"(): $Component
"getNbt"(): $CompoundTag
"getPassengers"(): $EntityArrayList
"getPersistentData"(): $CompoundTag
"getProfile"(): $GameProfile
"getScriptType"(): $ScriptType
"getServer"(): $MinecraftServer
"getTeamId"(): string
"getType"(): string
"isAmbientCreature"(): boolean
"isAnimal"(): boolean
"isFrame"(): boolean
"isLiving"(): boolean
"isMonster"(): boolean
"isOnScoreboardTeam"(teamId: string): boolean
"isPeacefulCreature"(): boolean
"isPlayer"(): boolean
"isWaterCreature"(): boolean
"mergeNbt"(tag: $CompoundTag$$Type): $Entity
"playSound"(id: $SoundEvent$$Type): void
"playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
"rayTrace"(distance: double): $RayTraceResultJS
"rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"self"(): $Entity
"setMotionX"(x: double): void
"setMotionY"(y: double): void
"setMotionZ"(z: double): void
"setNbt"(nbt: $CompoundTag$$Type): void
"setPosition"(block: $BlockContainerJS$$Type): void
"setPosition"(x: double, y: double, z: double): void
"setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
"setRotation"(yaw: float, pitch: float): void
"setStatusMessage"(message: $Component$$Type): void
"setX"(x: double): void
"setY"(y: double): void
"setZ"(z: double): void
"spawn"(): void
"teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
"tell"(message: $Component$$Type): void
get "block"(): $BlockContainerJS
get "displayName"(): $Component
get "facing"(): $Direction
get "item"(): $ItemStack
get "level"(): $Level
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "passengers"(): $EntityArrayList
get "persistentData"(): $CompoundTag
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "teamId"(): string
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "waterCreature"(): boolean
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}

export namespace $EntityKJS {
const probejs$$marker: never
}
export abstract class $EntityKJS$$Static implements $EntityKJS {
}
}

declare module "dev.latvian.mods.kubejs.core.WindowKJS" {
import { $List, $List$$Type } from "java.util.List"
import { $IoSupplier, $IoSupplier$$Type } from "net.minecraft.server.packs.resources.IoSupplier"
import { $InputStream, $InputStream$$Type } from "java.io.InputStream"

export interface $WindowKJS {
"kjs$loadIcons"(original: $List$$Type<$IoSupplier$$Type<$InputStream$$Type>>): $List<$IoSupplier<$InputStream>>
}

export namespace $WindowKJS {
const probejs$$marker: never
}
export abstract class $WindowKJS$$Static implements $WindowKJS {
}
}

declare module "dev.latvian.mods.kubejs.core.MinecraftEnvironmentKJS" {
import { $ScheduledEvents$Callback$$Type } from "dev.latvian.mods.kubejs.util.ScheduledEvents$Callback"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ScheduledEvents } from "dev.latvian.mods.kubejs.util.ScheduledEvents"
import { $TemporalAmount$$Type } from "java.time.temporal.TemporalAmount"
import { $ScheduledEvents$ScheduledEvent } from "dev.latvian.mods.kubejs.util.ScheduledEvents$ScheduledEvent"
import { $MessageSenderKJS } from "dev.latvian.mods.kubejs.core.MessageSenderKJS"

export interface $MinecraftEnvironmentKJS extends $MessageSenderKJS {
"getDisplayName"(): $Component
"getName"(): $Component
"getScheduledEvents"(): $ScheduledEvents
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"schedule"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
"scheduleInTicks"(ticks: long, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
"scheduleRepeating"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
"scheduleRepeatingInTicks"(ticks: long, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
"setStatusMessage"(message: $Component$$Type): void
"tell"(message: $Component$$Type): void
get "displayName"(): $Component
get "name"(): $Component
get "scheduledEvents"(): $ScheduledEvents
set "statusMessage"(value: $Component$$Type)
}

export namespace $MinecraftEnvironmentKJS {
const probejs$$marker: never
}
export abstract class $MinecraftEnvironmentKJS$$Static implements $MinecraftEnvironmentKJS {
}
}

declare module "dev.latvian.mods.kubejs.core.RecipeKJS" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"

export interface $RecipeKJS {
"getGroup"(): string
"getMod"(): string
"getOrCreateId"(): $ResourceLocation
"getSchema"(): $RecipeSchema
"getType"(): $ResourceLocation
"hasInput"(match: $ReplacementMatch$$Type): boolean
"hasOutput"(match: $ReplacementMatch$$Type): boolean
"replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
"replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
"setGroup"(group: string): void
get "group"(): string
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "type"(): $ResourceLocation
set "group"(value: string)
}

export namespace $RecipeKJS {
const probejs$$marker: never
}
export abstract class $RecipeKJS$$Static implements $RecipeKJS {
}
}

declare module "dev.latvian.mods.kubejs.core.ComponentKJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ComponentContents } from "net.minecraft.network.chat.ComponentContents"
import { $JsonSerializable } from "dev.latvian.mods.rhino.mod.util.JsonSerializable"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $FormattedText$StyledContentConsumer$$Type } from "net.minecraft.network.chat.FormattedText$StyledContentConsumer"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $Iterable } from "java.lang.Iterable"
import { $Style, $Style$$Type } from "net.minecraft.network.chat.Style"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $JsonElement } from "com.google.gson.JsonElement"
import { $List, $List$$Type } from "java.util.List"
import { $DataSource$$Type } from "net.minecraft.network.chat.contents.DataSource"
import { $FormattedText, $FormattedText$$Type } from "net.minecraft.network.chat.FormattedText"
import { $FormattedText$ContentConsumer$$Type } from "net.minecraft.network.chat.FormattedText$ContentConsumer"
import { $Color$$Type } from "dev.latvian.mods.rhino.mod.util.color.Color"
import { $FormattedCharSequence } from "net.minecraft.util.FormattedCharSequence"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $WrappedJS } from "dev.latvian.mods.kubejs.util.WrappedJS"
import { $ClickEvent$$Type } from "net.minecraft.network.chat.ClickEvent"

export interface $ComponentKJS extends $Component, $JsonSerializable, $WrappedJS {
"aqua"(): $MutableComponent
"asIterable"(): $Iterable<$Component>
"black"(): $MutableComponent
"blue"(): $MutableComponent
"bold"(): $MutableComponent
"bold"(value: boolean): $MutableComponent
"click"(s: $ClickEvent$$Type): $MutableComponent
"clickChangePage"(page: string): $MutableComponent
"clickCopy"(text: string): $MutableComponent
"clickOpenFile"(path: string): $MutableComponent
"clickOpenUrl"(url: string): $MutableComponent
"clickRunCommand"(command: string): $MutableComponent
"clickSuggestCommand"(command: string): $MutableComponent
"color"(c: $Color$$Type): $MutableComponent
/** @deprecated */
"component"(): $Component
"contains"(component0: $Component$$Type): boolean
"copy"(): $MutableComponent
"darkAqua"(): $MutableComponent
"darkBlue"(): $MutableComponent
"darkGray"(): $MutableComponent
"darkGreen"(): $MutableComponent
"darkPurple"(): $MutableComponent
"darkRed"(): $MutableComponent
"font"(s: $ResourceLocation$$Type): $MutableComponent
"forEach"(action: $Consumer$$Type<$Component$$Type>): void
"getContents"(): $ComponentContents
"getSiblings"(): $List<$Component>
"getString"(): string
"getString"(int0: integer): string
"getStyle"(): $Style
"getVisualOrderText"(): $FormattedCharSequence
"gold"(): $MutableComponent
"gray"(): $MutableComponent
"green"(): $MutableComponent
"hasSiblings"(): boolean
"hasStyle"(): boolean
"hover"(s: $Component$$Type): $MutableComponent
"insertion"(s: string): $MutableComponent
"isEmpty"(): boolean
"italic"(): $MutableComponent
"italic"(value: boolean): $MutableComponent
"lightPurple"(): $MutableComponent
"noColor"(): $MutableComponent
"obfuscated"(): $MutableComponent
"obfuscated"(value: boolean): $MutableComponent
"plainCopy"(): $MutableComponent
/** @deprecated */
"rawComponent"(): $MutableComponent
/** @deprecated */
"rawCopy"(): $MutableComponent
"red"(): $MutableComponent
"self"(): $MutableComponent
"strikethrough"(value: boolean): $MutableComponent
"strikethrough"(): $MutableComponent
"toFlatList"(): $List<$Component>
"toFlatList"(style0: $Style$$Type): $List<$Component>
"toJson"(): $JsonElement
"underlined"(value: boolean): $MutableComponent
"underlined"(): $MutableComponent
"visit"<T>(contentConsumer0: $FormattedText$ContentConsumer$$Type<T>): $Optional<T>
"visit"<T>(styledContentConsumer0: $FormattedText$StyledContentConsumer$$Type<T>, style1: $Style$$Type): $Optional<T>
"white"(): $MutableComponent
"yellow"(): $MutableComponent
get "contents"(): $ComponentContents
get "siblings"(): $List<$Component>
get "string"(): string
get "style"(): $Style
get "visualOrderText"(): $FormattedCharSequence
}

export namespace $ComponentKJS {
function composite(list0: $List$$Type<$FormattedText$$Type>): $FormattedText
function composite(...formattedText0s: $FormattedText$$Type[]): $FormattedText
function empty(): $MutableComponent
function keybind(string0: string): $MutableComponent
function literal(string0: string): $MutableComponent
function nbt(string0: string, boolean1: boolean, optional2: $Optional$$Type<$Component$$Type>, dataSource3: $DataSource$$Type): $MutableComponent
function nullToEmpty(string0: string): $Component
function of(string0: string): $FormattedText
function of(string0: string, style1: $Style$$Type): $FormattedText
function score(string0: string, string1: string): $MutableComponent
function selector(string0: string, optional1: $Optional$$Type<$Component$$Type>): $MutableComponent
function translatable(string0: string): $MutableComponent
function translatable(string0: string, ...object1s: any[]): $MutableComponent
function translatableWithFallback(string0: string, string1: string): $MutableComponent
function translatableWithFallback(string0: string, string1: string, ...object2s: any[]): $MutableComponent
}
export abstract class $ComponentKJS$$Static implements $ComponentKJS {
static "composite"(list0: $List$$Type<$FormattedText$$Type>): $FormattedText
static "composite"(...formattedText0s: $FormattedText$$Type[]): $FormattedText
static "empty"(): $MutableComponent
static "keybind"(string0: string): $MutableComponent
static "literal"(string0: string): $MutableComponent
static "nbt"(string0: string, boolean1: boolean, optional2: $Optional$$Type<$Component$$Type>, dataSource3: $DataSource$$Type): $MutableComponent
static "nullToEmpty"(string0: string): $Component
static "of"(string0: string): $FormattedText
static "of"(string0: string, style1: $Style$$Type): $FormattedText
static "score"(string0: string, string1: string): $MutableComponent
static "selector"(string0: string, optional1: $Optional$$Type<$Component$$Type>): $MutableComponent
static "translatable"(string0: string): $MutableComponent
static "translatable"(string0: string, ...object1s: any[]): $MutableComponent
static "translatableWithFallback"(string0: string, string1: string): $MutableComponent
static "translatableWithFallback"(string0: string, string1: string, ...object2s: any[]): $MutableComponent
}
}

declare module "dev.latvian.mods.kubejs.core.mixin.common.EventHandlerInvoker" {
import { $EventResult } from "dev.latvian.mods.kubejs.event.EventResult"
import { $EventHandler } from "dev.latvian.mods.kubejs.event.EventHandler"
import { $EventJS$$Type } from "dev.latvian.mods.kubejs.event.EventJS"

export interface $EventHandlerInvoker {
"callHasResult"(): $EventHandler
"callPost"(eventJS0: $EventJS$$Type, object1: any): $EventResult
}

export namespace $EventHandlerInvoker {
const probejs$$marker: never
}
export abstract class $EventHandlerInvoker$$Static implements $EventHandlerInvoker {
}
}

declare module "dev.latvian.mods.kubejs.core.ServerPlayerKJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction } from "net.minecraft.core.Direction"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $KubeJSInventoryListener } from "dev.latvian.mods.kubejs.player.KubeJSInventoryListener"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $ServerPlayer } from "net.minecraft.server.level.ServerPlayer"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Container } from "net.minecraft.world.Container"
import { $PlayerKJS } from "dev.latvian.mods.kubejs.core.PlayerKJS"
import { $NotificationBuilder$$Type } from "dev.latvian.mods.kubejs.util.NotificationBuilder"
import { $AttachedData } from "dev.latvian.mods.kubejs.util.AttachedData"
import { $EntityPotionEffectsJS } from "dev.latvian.mods.kubejs.entity.EntityPotionEffectsJS"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $InventoryKJS, $InventoryKJS$$Type } from "dev.latvian.mods.kubejs.core.InventoryKJS"
import { $KubeJSGUI$$Type } from "dev.latvian.mods.kubejs.gui.KubeJSGUI"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $Player } from "net.minecraft.world.entity.player.Player"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stages } from "dev.latvian.mods.kubejs.stages.Stages"
import { $ChestMenuData$$Type } from "dev.latvian.mods.kubejs.gui.chest.ChestMenuData"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $PlayerStatsJS } from "dev.latvian.mods.kubejs.player.PlayerStatsJS"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level } from "net.minecraft.world.level.Level"

export interface $ServerPlayerKJS extends $PlayerKJS {
"addExhaustion"(exhaustion: float): void
"addFood"(f: integer, m: float): void
"addItemCooldown"(item: $Item$$Type, ticks: integer): void
"addXP"(xp: integer): void
"addXPLevels"(l: integer): void
"attack"(hp: float): void
"ban"(banner: string, reason: string, expiresInMillis: long): void
"boostElytraFlight"(): void
"canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
"captureInventory"(autoRestore: boolean): $Container
"damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
"damageEquipment"(slot: $EquipmentSlot$$Type): void
"damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
"damageHeldItem"(): void
"damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
"damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
"foodEaten"(is: $ItemStack$$Type): void
"getAttributeBaseValue"(attribute: $Attribute$$Type): double
"getAttributeTotalValue"(attribute: $Attribute$$Type): double
"getBlock"(): $BlockContainerJS
"getChestArmorItem"(): $ItemStack
"getCraftingGrid"(): $InventoryKJS
"getData"(): $AttachedData<$Player>
"getDefaultMovementSpeed"(): double
"getDisplayName"(): $Component
"getDistance"(pos: $BlockPos$$Type): double
"getDistance"(x: double, y: double, z: double): double
"getDistanceSq"(pos: $BlockPos$$Type): double
"getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
"getFacing"(): $Direction
"getFeetArmorItem"(): $ItemStack
"getFoodLevel"(): integer
"getHeadArmorItem"(): $ItemStack
"getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
"getInventory"(): $InventoryKJS
"getInventoryChangeListener"(): $KubeJSInventoryListener
"getItem"(): $ItemStack
"getLegsArmorItem"(): $ItemStack
"getLevel"(): $Level
"getMainHandItem"(): $ItemStack
"getMotionX"(): double
"getMotionY"(): double
"getMotionZ"(): double
"getMouseItem"(): $ItemStack
"getName"(): $Component
"getNbt"(): $CompoundTag
"getOffHandItem"(): $ItemStack
"getOpenInventory"(): $AbstractContainerMenu
"getPassengers"(): $EntityArrayList
"getPersistentData"(): $CompoundTag
"getPotionEffects"(): $EntityPotionEffectsJS
"getProfile"(): $GameProfile
"getReachDistance"(): double
"getSaturation"(): float
"getScriptType"(): $ScriptType
"getSelectedSlot"(): integer
"getServer"(): $MinecraftServer
"getSpawnLocation"(): $BlockContainerJS
"getStages"(): $Stages
"getStats"(): $PlayerStatsJS
"getTeamId"(): string
"getTotalMovementSpeed"(): double
"getType"(): string
"getXp"(): integer
"getXpLevel"(): integer
"give"(item: $ItemStack$$Type): void
"giveInHand"(item: $ItemStack$$Type): void
"isAdvancementDone"(id: $ResourceLocation$$Type): boolean
"isAmbientCreature"(): boolean
"isAnimal"(): boolean
"isFake"(): boolean
"isFrame"(): boolean
"isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
"isLiving"(): boolean
"isMiningBlock"(): boolean
"isMonster"(): boolean
"isOnScoreboardTeam"(teamId: string): boolean
"isOp"(): boolean
"isPeacefulCreature"(): boolean
"isPlayer"(): boolean
"isUndead"(): boolean
"isWaterCreature"(): boolean
"kick"(): void
"kick"(reason: $Component$$Type): void
"mergeNbt"(tag: $CompoundTag$$Type): $Entity
"modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
"notify"(builder: $NotificationBuilder$$Type): void
"notify"(title: $Component$$Type, text: $Component$$Type): void
"openChestGUI"(title: $Component$$Type, rows: integer, gui: $Consumer$$Type<$ChestMenuData$$Type>): void
"openGUI"(gui: $Consumer$$Type<$KubeJSGUI$$Type>): void
"openInventoryGUI"(inventory: $InventoryKJS$$Type, title: $Component$$Type): void
"paint"(renderer: $CompoundTag$$Type): void
"playSound"(id: $SoundEvent$$Type): void
"playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
"rayTrace"(): $RayTraceResultJS
"rayTrace"(distance: double): $RayTraceResultJS
"rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
"removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
"revokeAdvancement"(id: $ResourceLocation$$Type): void
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"self"(): $ServerPlayer
"sendData"(channel: string, data: $CompoundTag$$Type): void
"sendData"(channel: string): void
"sendInventoryUpdate"(): void
"setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
"setChestArmorItem"(item: $ItemStack$$Type): void
"setCreativeMode"(mode: boolean): void
"setDefaultMovementSpeed"(speed: double): void
"setDefaultMovementSpeedMultiplier"(speed: double): void
"setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
"setFeetArmorItem"(item: $ItemStack$$Type): void
"setFoodLevel"(foodLevel: integer): void
"setHeadArmorItem"(item: $ItemStack$$Type): void
"setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
"setLegsArmorItem"(item: $ItemStack$$Type): void
"setMainHandItem"(item: $ItemStack$$Type): void
"setMaxHealth"(hp: float): void
"setMotionX"(x: double): void
"setMotionY"(y: double): void
"setMotionZ"(z: double): void
"setMouseItem"(item: $ItemStack$$Type): void
"setMovementSpeedAddition"(speed: double): void
"setNbt"(nbt: $CompoundTag$$Type): void
"setOffHandItem"(item: $ItemStack$$Type): void
"setPosition"(block: $BlockContainerJS$$Type): void
"setPosition"(x: double, y: double, z: double): void
"setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
"setRotation"(yaw: float, pitch: float): void
"setSaturation"(saturation: float): void
"setSelectedSlot"(index: integer): void
"setSpawnLocation"(c: $BlockContainerJS$$Type): void
"setStatusMessage"(message: $Component$$Type): void
"setTotalMovementSpeedMultiplier"(speed: double): void
"setX"(x: double): void
"setXp"(xp: integer): void
"setXpLevel"(l: integer): void
"setY"(y: double): void
"setZ"(z: double): void
"spawn"(): void
"swing"(): void
"swing"(hand: $InteractionHand$$Type): void
"teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
"tell"(message: $Component$$Type): void
"unlockAdvancement"(id: $ResourceLocation$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "craftingGrid"(): $InventoryKJS
get "data"(): $AttachedData<$Player>
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "foodLevel"(): integer
get "headArmorItem"(): $ItemStack
get "inventory"(): $InventoryKJS
get "inventoryChangeListener"(): $KubeJSInventoryListener
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "mouseItem"(): $ItemStack
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "openInventory"(): $AbstractContainerMenu
get "passengers"(): $EntityArrayList
get "persistentData"(): $CompoundTag
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "saturation"(): float
get "scriptType"(): $ScriptType
get "selectedSlot"(): integer
get "server"(): $MinecraftServer
get "spawnLocation"(): $BlockContainerJS
get "stages"(): $Stages
get "stats"(): $PlayerStatsJS
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "xp"(): integer
get "xpLevel"(): integer
get "ambientCreature"(): boolean
get "animal"(): boolean
get "fake"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "miningBlock"(): boolean
get "monster"(): boolean
get "op"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "creativeMode"(value: boolean)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "foodLevel"(value: integer)
set "headArmorItem"(value: $ItemStack$$Type)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "mouseItem"(value: $ItemStack$$Type)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "saturation"(value: float)
set "selectedSlot"(value: integer)
set "spawnLocation"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "xp"(value: integer)
set "xpLevel"(value: integer)
set "y"(value: double)
set "z"(value: double)
}

export namespace $ServerPlayerKJS {
const probejs$$marker: never
}
export abstract class $ServerPlayerKJS$$Static implements $ServerPlayerKJS {
}
}

declare module "dev.latvian.mods.kubejs.core.BlockStateKJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockStateKJS {
"setDestroySpeed"(v: float): void
"setLightEmission"(v: integer): void
"setRequiresTool"(v: boolean): void
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}

export namespace $BlockStateKJS {
const probejs$$marker: never
}
export abstract class $BlockStateKJS$$Static implements $BlockStateKJS {
}
}

declare module "dev.latvian.mods.kubejs.core.DataSenderKJS" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"

export interface $DataSenderKJS {
"sendData"(channel: string, data: $CompoundTag$$Type): void
"sendData"(channel: string): void
}

export namespace $DataSenderKJS {
const probejs$$marker: never
}
export abstract class $DataSenderKJS$$Static implements $DataSenderKJS {
}
}

declare module "dev.latvian.mods.kubejs.core.ItemStackKJS" {
import { $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject } from "com.google.gson.JsonObject"
import { $JsonSerializable } from "dev.latvian.mods.rhino.mod.util.JsonSerializable"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $SpecialEquality } from "dev.latvian.mods.rhino.util.SpecialEquality"
import { $NBTSerializable } from "dev.latvian.mods.rhino.mod.util.NBTSerializable"
import { $Collection } from "java.util.Collection"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"
import { $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $OutputItem } from "dev.latvian.mods.kubejs.item.OutputItem"
import { $IngredientSupplierKJS } from "dev.latvian.mods.kubejs.core.IngredientSupplierKJS"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $ItemStackKJS extends $SpecialEquality, $NBTSerializable, $JsonSerializable, $IngredientSupplierKJS {
"areItemsEqual"(other: $ItemStack$$Type): boolean
"asIngredient"(): $Ingredient
"enchant"(enchantment: $Enchantment$$Type, level: integer): $ItemStack
"enchant"(enchantments: $Map$$Type<any, any>): $ItemStack
"equalsIgnoringCount"(stack: $ItemStack$$Type): boolean
"getEnchantments"(): $Map<string, integer>
"getHarvestSpeed"(): float
"getHarvestSpeed"(block: $BlockContainerJS$$Type): float
"getId"(): string
"getIdLocation"(): $ResourceLocation
"getMod"(): string
"getNbtString"(): string
"getTags"(): $Collection<$ResourceLocation>
"getTypeData"(): $CompoundTag
"hasEnchantment"(enchantment: $Enchantment$$Type, level: integer): boolean
"hasTag"(tag: $ResourceLocation$$Type): boolean
/** @deprecated */
"ignoreNBT"(): $Ingredient
"isBlock"(): boolean
"isNBTEqual"(other: $ItemStack$$Type): boolean
"removeTag"(): void
"self"(): $ItemStack
"specialEquals"(o: any, shallow: boolean): boolean
"strongNBT"(): $Ingredient
"toItemString"(): string
"toJson"(): $JsonObject
"weakNBT"(): $Ingredient
"withChance"(chance: double): $OutputItem
"withCount"(c: integer): $ItemStack
"withLore"(text: $Component$$Type[]): $ItemStack
"withNBT"(nbt: $CompoundTag$$Type): $ItemStack
"withName"(displayName: $Component$$Type): $ItemStack
get "enchantments"(): $Map<string, integer>
get "harvestSpeed"(): float
get "id"(): string
get "idLocation"(): $ResourceLocation
get "mod"(): string
get "nbtString"(): string
get "tags"(): $Collection<$ResourceLocation>
get "typeData"(): $CompoundTag
get "block"(): boolean
}

export namespace $ItemStackKJS {
function checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean
}
export abstract class $ItemStackKJS$$Static implements $ItemStackKJS {
static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
}
}

declare module "dev.latvian.mods.kubejs.core.MinecraftServerKJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AttachedData } from "dev.latvian.mods.kubejs.util.AttachedData"
import { $ScheduledEvents$Callback$$Type } from "dev.latvian.mods.kubejs.util.ScheduledEvents$Callback"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $AdvancementJS } from "dev.latvian.mods.kubejs.player.AdvancementJS"
import { $ScheduledEvents } from "dev.latvian.mods.kubejs.util.ScheduledEvents"
import { $UUID } from "java.util.UUID"
import { $WithPersistentData } from "dev.latvian.mods.kubejs.core.WithPersistentData"
import { $PlayerSelector$$Type } from "dev.latvian.mods.kubejs.core.PlayerSelector"
import { $ServerLevel } from "net.minecraft.server.level.ServerLevel"
import { $ScheduledEvents$ScheduledEvent } from "dev.latvian.mods.kubejs.util.ScheduledEvents$ScheduledEvent"
import { $ServerPlayer } from "net.minecraft.server.level.ServerPlayer"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $WithAttachedData } from "dev.latvian.mods.kubejs.core.WithAttachedData"
import { $DataSenderKJS } from "dev.latvian.mods.kubejs.core.DataSenderKJS"
import { $MinecraftEnvironmentKJS } from "dev.latvian.mods.kubejs.core.MinecraftEnvironmentKJS"
import { $Map } from "java.util.Map"
import { $MinecraftServer$ReloadableResources } from "net.minecraft.server.MinecraftServer$ReloadableResources"
import { $TemporalAmount$$Type } from "java.time.temporal.TemporalAmount"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $MinecraftServerKJS extends $WithAttachedData<$MinecraftServer>, $WithPersistentData, $DataSenderKJS, $MinecraftEnvironmentKJS {
"getAdvancement"(id: $ResourceLocation$$Type): $AdvancementJS
"getData"(): $AttachedData<$MinecraftServer>
"getDisplayName"(): $Component
"getEntities"(): $EntityArrayList
"getLevel"(dimension: $ResourceLocation$$Type): $ServerLevel
"getName"(): $Component
"getOverworld"(): $ServerLevel
"getPersistentData"(): $CompoundTag
"getPlayer"(selector: $PlayerSelector$$Type): $ServerPlayer
"getPlayers"(): $EntityArrayList
"getReloadableResources"(): $MinecraftServer$ReloadableResources
"getScheduledEvents"(): $ScheduledEvents
"restoreInventories"(): $Map<$UUID, $Map<integer, $ItemStack>>
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"schedule"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
"scheduleInTicks"(ticks: long, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
"scheduleRepeating"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
"scheduleRepeatingInTicks"(ticks: long, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
"self"(): $MinecraftServer
"sendData"(channel: string, data: $CompoundTag$$Type): void
"sendData"(channel: string): void
"setStatusMessage"(message: $Component$$Type): void
"tell"(message: $Component$$Type): void
get "data"(): $AttachedData<$MinecraftServer>
get "displayName"(): $Component
get "entities"(): $EntityArrayList
get "name"(): $Component
get "overworld"(): $ServerLevel
get "persistentData"(): $CompoundTag
get "players"(): $EntityArrayList
get "reloadableResources"(): $MinecraftServer$ReloadableResources
get "scheduledEvents"(): $ScheduledEvents
set "statusMessage"(value: $Component$$Type)
}

export namespace $MinecraftServerKJS {
const probejs$$marker: never
}
export abstract class $MinecraftServerKJS$$Static implements $MinecraftServerKJS {
}
}

declare module "dev.latvian.mods.kubejs.core.BlockBuilderProvider" {
import { $BlockBuilder } from "dev.latvian.mods.kubejs.block.BlockBuilder"

export interface $BlockBuilderProvider {
"getBlockBuilder"(): $BlockBuilder
get "blockBuilder"(): $BlockBuilder
}

export namespace $BlockBuilderProvider {
const probejs$$marker: never
}
export abstract class $BlockBuilderProvider$$Static implements $BlockBuilderProvider {
}
}

declare module "dev.latvian.mods.kubejs.core.GameRulesKJS" {
import { $GameRules$Value } from "net.minecraft.world.level.GameRules$Value"

export interface $GameRulesKJS {
"kjs$get"(string0: string): $GameRules$Value<any>
"kjs$getBoolean"(rule: string): boolean
"kjs$getInt"(rule: string): integer
"kjs$getString"(rule: string): string
"kjs$set"(string0: string, string1: string): void
}

export namespace $GameRulesKJS {
const probejs$$marker: never
}
export abstract class $GameRulesKJS$$Static implements $GameRulesKJS {
}
}

declare module "dev.latvian.mods.kubejs.core.PlayerSelector" {
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $UUID$$Type } from "java.util.UUID"

export interface $PlayerSelector {
"getPlayer"(minecraftServer0: $MinecraftServer$$Type): $ServerPlayer
"or"(fallback: $PlayerSelector$$Type): $PlayerSelector
}

export namespace $PlayerSelector {
function fuzzyName(name: string): $PlayerSelector
function identity(player: $ServerPlayer$$Type): $PlayerSelector
function name(name: string): $PlayerSelector
function of(o: any): $PlayerSelector
function uuid(uuid: $UUID$$Type): $PlayerSelector
}
export abstract class $PlayerSelector$$Static implements $PlayerSelector {
static "fuzzyName"(name: string): $PlayerSelector
static "identity"(player: $ServerPlayer$$Type): $PlayerSelector
static "name"(name: string): $PlayerSelector
static "of"(o: any): $PlayerSelector
static "uuid"(uuid: $UUID$$Type): $PlayerSelector
}
}

declare module "dev.latvian.mods.kubejs.core.ClientPlayerKJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction } from "net.minecraft.core.Direction"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $KubeJSInventoryListener } from "dev.latvian.mods.kubejs.player.KubeJSInventoryListener"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $PlayerKJS } from "dev.latvian.mods.kubejs.core.PlayerKJS"
import { $NotificationBuilder$$Type } from "dev.latvian.mods.kubejs.util.NotificationBuilder"
import { $AttachedData } from "dev.latvian.mods.kubejs.util.AttachedData"
import { $EntityPotionEffectsJS } from "dev.latvian.mods.kubejs.entity.EntityPotionEffectsJS"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $InventoryKJS } from "dev.latvian.mods.kubejs.core.InventoryKJS"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $Player } from "net.minecraft.world.entity.player.Player"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stages } from "dev.latvian.mods.kubejs.stages.Stages"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $PlayerStatsJS } from "dev.latvian.mods.kubejs.player.PlayerStatsJS"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level } from "net.minecraft.world.level.Level"

export interface $ClientPlayerKJS extends $PlayerKJS {
"addExhaustion"(exhaustion: float): void
"addFood"(f: integer, m: float): void
"addItemCooldown"(item: $Item$$Type, ticks: integer): void
"addXP"(xp: integer): void
"addXPLevels"(l: integer): void
"attack"(hp: float): void
"boostElytraFlight"(): void
"canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
"damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
"damageEquipment"(slot: $EquipmentSlot$$Type): void
"damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
"damageHeldItem"(): void
"damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
"damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
"foodEaten"(is: $ItemStack$$Type): void
"getAttributeBaseValue"(attribute: $Attribute$$Type): double
"getAttributeTotalValue"(attribute: $Attribute$$Type): double
"getBlock"(): $BlockContainerJS
"getChestArmorItem"(): $ItemStack
"getCraftingGrid"(): $InventoryKJS
"getData"(): $AttachedData<$Player>
"getDefaultMovementSpeed"(): double
"getDisplayName"(): $Component
"getDistance"(pos: $BlockPos$$Type): double
"getDistance"(x: double, y: double, z: double): double
"getDistanceSq"(pos: $BlockPos$$Type): double
"getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
"getFacing"(): $Direction
"getFeetArmorItem"(): $ItemStack
"getFoodLevel"(): integer
"getHeadArmorItem"(): $ItemStack
"getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
"getInventory"(): $InventoryKJS
"getInventoryChangeListener"(): $KubeJSInventoryListener
"getItem"(): $ItemStack
"getLegsArmorItem"(): $ItemStack
"getLevel"(): $Level
"getMainHandItem"(): $ItemStack
"getMotionX"(): double
"getMotionY"(): double
"getMotionZ"(): double
"getMouseItem"(): $ItemStack
"getName"(): $Component
"getNbt"(): $CompoundTag
"getOffHandItem"(): $ItemStack
"getOpenInventory"(): $AbstractContainerMenu
"getPassengers"(): $EntityArrayList
"getPersistentData"(): $CompoundTag
"getPotionEffects"(): $EntityPotionEffectsJS
"getProfile"(): $GameProfile
"getReachDistance"(): double
"getSaturation"(): float
"getScriptType"(): $ScriptType
"getSelectedSlot"(): integer
"getServer"(): $MinecraftServer
"getStages"(): $Stages
"getStats"(): $PlayerStatsJS
"getTeamId"(): string
"getTotalMovementSpeed"(): double
"getType"(): string
"getXp"(): integer
"getXpLevel"(): integer
"give"(item: $ItemStack$$Type): void
"giveInHand"(item: $ItemStack$$Type): void
"isAmbientCreature"(): boolean
"isAnimal"(): boolean
"isFake"(): boolean
"isFrame"(): boolean
"isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
"isLiving"(): boolean
"isMiningBlock"(): boolean
"isMonster"(): boolean
"isOnScoreboardTeam"(teamId: string): boolean
"isPeacefulCreature"(): boolean
"isPlayer"(): boolean
"isSelf"(): boolean
"isUndead"(): boolean
"isWaterCreature"(): boolean
"mergeNbt"(tag: $CompoundTag$$Type): $Entity
"modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
"notify"(notification: $NotificationBuilder$$Type): void
"notify"(title: $Component$$Type, text: $Component$$Type): void
"paint"(tag: $CompoundTag$$Type): void
"playSound"(id: $SoundEvent$$Type): void
"playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
"rayTrace"(): $RayTraceResultJS
"rayTrace"(distance: double): $RayTraceResultJS
"rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
"removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"sendData"(channel: string, data: $CompoundTag$$Type): void
"sendData"(channel: string): void
"sendInventoryUpdate"(): void
"setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
"setChestArmorItem"(item: $ItemStack$$Type): void
"setDefaultMovementSpeed"(speed: double): void
"setDefaultMovementSpeedMultiplier"(speed: double): void
"setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
"setFeetArmorItem"(item: $ItemStack$$Type): void
"setFoodLevel"(foodLevel: integer): void
"setHeadArmorItem"(item: $ItemStack$$Type): void
"setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
"setLegsArmorItem"(item: $ItemStack$$Type): void
"setMainHandItem"(item: $ItemStack$$Type): void
"setMaxHealth"(hp: float): void
"setMotionX"(x: double): void
"setMotionY"(y: double): void
"setMotionZ"(z: double): void
"setMouseItem"(item: $ItemStack$$Type): void
"setMovementSpeedAddition"(speed: double): void
"setNbt"(nbt: $CompoundTag$$Type): void
"setOffHandItem"(item: $ItemStack$$Type): void
"setPosition"(block: $BlockContainerJS$$Type): void
"setPosition"(x: double, y: double, z: double): void
"setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
"setRotation"(yaw: float, pitch: float): void
"setSaturation"(saturation: float): void
"setSelectedSlot"(index: integer): void
"setStatusMessage"(message: $Component$$Type): void
"setTotalMovementSpeedMultiplier"(speed: double): void
"setX"(x: double): void
"setXp"(xp: integer): void
"setXpLevel"(l: integer): void
"setY"(y: double): void
"setZ"(z: double): void
"spawn"(): void
"swing"(): void
"swing"(hand: $InteractionHand$$Type): void
"teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
"tell"(message: $Component$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "craftingGrid"(): $InventoryKJS
get "data"(): $AttachedData<$Player>
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "foodLevel"(): integer
get "headArmorItem"(): $ItemStack
get "inventory"(): $InventoryKJS
get "inventoryChangeListener"(): $KubeJSInventoryListener
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "mouseItem"(): $ItemStack
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "openInventory"(): $AbstractContainerMenu
get "passengers"(): $EntityArrayList
get "persistentData"(): $CompoundTag
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "saturation"(): float
get "scriptType"(): $ScriptType
get "selectedSlot"(): integer
get "server"(): $MinecraftServer
get "stages"(): $Stages
get "stats"(): $PlayerStatsJS
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "xp"(): integer
get "xpLevel"(): integer
get "ambientCreature"(): boolean
get "animal"(): boolean
get "fake"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "miningBlock"(): boolean
get "monster"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "self"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "foodLevel"(value: integer)
set "headArmorItem"(value: $ItemStack$$Type)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "mouseItem"(value: $ItemStack$$Type)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "saturation"(value: float)
set "selectedSlot"(value: integer)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "xp"(value: integer)
set "xpLevel"(value: integer)
set "y"(value: double)
set "z"(value: double)
}

export namespace $ClientPlayerKJS {
const probejs$$marker: never
}
export abstract class $ClientPlayerKJS$$Static implements $ClientPlayerKJS {
}
}

declare module "dev.latvian.mods.kubejs.core.LivingEntityKJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EntityKJS } from "dev.latvian.mods.kubejs.core.EntityKJS"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $EntityPotionEffectsJS } from "dev.latvian.mods.kubejs.entity.EntityPotionEffectsJS"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $UUID } from "java.util.UUID"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level } from "net.minecraft.world.level.Level"

export interface $LivingEntityKJS extends $EntityKJS {
"attack"(hp: float): void
"canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
"damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
"damageEquipment"(slot: $EquipmentSlot$$Type): void
"damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
"damageHeldItem"(): void
"damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
"damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
"foodEaten"(is: $ItemStack$$Type): void
"getAttributeBaseValue"(attribute: $Attribute$$Type): double
"getAttributeTotalValue"(attribute: $Attribute$$Type): double
"getBlock"(): $BlockContainerJS
"getChestArmorItem"(): $ItemStack
"getDefaultMovementSpeed"(): double
"getDisplayName"(): $Component
"getDistance"(pos: $BlockPos$$Type): double
"getDistance"(x: double, y: double, z: double): double
"getDistanceSq"(pos: $BlockPos$$Type): double
"getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
"getFacing"(): $Direction
"getFeetArmorItem"(): $ItemStack
"getHeadArmorItem"(): $ItemStack
"getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
"getItem"(): $ItemStack
"getLegsArmorItem"(): $ItemStack
"getLevel"(): $Level
"getMainHandItem"(): $ItemStack
"getMotionX"(): double
"getMotionY"(): double
"getMotionZ"(): double
"getName"(): $Component
"getNbt"(): $CompoundTag
"getOffHandItem"(): $ItemStack
"getPassengers"(): $EntityArrayList
"getPersistentData"(): $CompoundTag
"getPotionEffects"(): $EntityPotionEffectsJS
"getProfile"(): $GameProfile
"getReachDistance"(): double
"getScriptType"(): $ScriptType
"getServer"(): $MinecraftServer
"getTeamId"(): string
"getTotalMovementSpeed"(): double
"getType"(): string
"isAmbientCreature"(): boolean
"isAnimal"(): boolean
"isFrame"(): boolean
"isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
"isLiving"(): boolean
"isMonster"(): boolean
"isOnScoreboardTeam"(teamId: string): boolean
"isPeacefulCreature"(): boolean
"isPlayer"(): boolean
"isUndead"(): boolean
"isWaterCreature"(): boolean
"mergeNbt"(tag: $CompoundTag$$Type): $Entity
"modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
"playSound"(id: $SoundEvent$$Type): void
"playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
"rayTrace"(): $RayTraceResultJS
"rayTrace"(distance: double): $RayTraceResultJS
"rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
"removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
"setChestArmorItem"(item: $ItemStack$$Type): void
"setDefaultMovementSpeed"(speed: double): void
"setDefaultMovementSpeedMultiplier"(speed: double): void
"setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
"setFeetArmorItem"(item: $ItemStack$$Type): void
"setHeadArmorItem"(item: $ItemStack$$Type): void
"setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
"setLegsArmorItem"(item: $ItemStack$$Type): void
"setMainHandItem"(item: $ItemStack$$Type): void
"setMaxHealth"(hp: float): void
"setMotionX"(x: double): void
"setMotionY"(y: double): void
"setMotionZ"(z: double): void
"setMovementSpeedAddition"(speed: double): void
"setNbt"(nbt: $CompoundTag$$Type): void
"setOffHandItem"(item: $ItemStack$$Type): void
"setPosition"(block: $BlockContainerJS$$Type): void
"setPosition"(x: double, y: double, z: double): void
"setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
"setRotation"(yaw: float, pitch: float): void
"setStatusMessage"(message: $Component$$Type): void
"setTotalMovementSpeedMultiplier"(speed: double): void
"setX"(x: double): void
"setY"(y: double): void
"setZ"(z: double): void
"spawn"(): void
"swing"(): void
"swing"(hand: $InteractionHand$$Type): void
"teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
"tell"(message: $Component$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "passengers"(): $EntityArrayList
get "persistentData"(): $CompoundTag
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}

export namespace $LivingEntityKJS {
const KJS_PLAYER_CUSTOM_SPEED: $UUID
const KJS_PLAYER_CUSTOM_SPEED_NAME: string
}
export abstract class $LivingEntityKJS$$Static implements $LivingEntityKJS {
static readonly "KJS_PLAYER_CUSTOM_SPEED": $UUID
static readonly "KJS_PLAYER_CUSTOM_SPEED_NAME": string

}
}

declare module "dev.latvian.mods.kubejs.core.LootTablesKJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $Map$$Type } from "java.util.Map"
import { $LootDataId$$Type } from "net.minecraft.world.level.storage.loot.LootDataId"
import { $LootDataType$$Type } from "net.minecraft.world.level.storage.loot.LootDataType"

export interface $LootTablesKJS {
"kjs$completeReload"(parsedMap: $Map$$Type<$LootDataType$$Type<any>, $Map$$Type<$ResourceLocation$$Type, any>>, elements: $Map$$Type<$LootDataId$$Type<any>, any>): void
}

export namespace $LootTablesKJS {
function kjs$postLootEvents(map: $Map$$Type<$ResourceLocation$$Type, $JsonElement$$Type>): void
}
export abstract class $LootTablesKJS$$Static implements $LootTablesKJS {
static "kjs$postLootEvents"(map: $Map$$Type<$ResourceLocation$$Type, $JsonElement$$Type>): void
}
}

declare module "dev.latvian.mods.kubejs.core.WithAttachedData" {
import { $AttachedData } from "dev.latvian.mods.kubejs.util.AttachedData"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $MessageSenderKJS } from "dev.latvian.mods.kubejs.core.MessageSenderKJS"

export interface $WithAttachedData<T = any> extends $MessageSenderKJS {
"getData"(): $AttachedData<T>
"getDisplayName"(): $Component
"getName"(): $Component
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"setStatusMessage"(message: $Component$$Type): void
"tell"(message: $Component$$Type): void
get "data"(): $AttachedData<T>
get "displayName"(): $Component
get "name"(): $Component
set "statusMessage"(value: $Component$$Type)
}

export namespace $WithAttachedData {
const probejs$$marker: never
}
export abstract class $WithAttachedData$$Static<T = any> implements $WithAttachedData<T> {
}
}

declare module "dev.latvian.mods.kubejs.core.IngredientSupplierKJS" {
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"

export interface $IngredientSupplierKJS {
"kjs$asIngredient"(): $Ingredient
}

export namespace $IngredientSupplierKJS {
const probejs$$marker: never
}
export abstract class $IngredientSupplierKJS$$Static implements $IngredientSupplierKJS {
}
}

declare module "dev.latvian.mods.kubejs.core.ItemKJS" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $FoodProperties$$Type } from "net.minecraft.world.food.FoodProperties"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $UUID$$Type } from "java.util.UUID"
import { $ItemStackKey } from "dev.latvian.mods.kubejs.item.ItemStackKey"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $IngredientSupplierKJS } from "dev.latvian.mods.kubejs.core.IngredientSupplierKJS"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $MutableToolTier$$Type } from "dev.latvian.mods.kubejs.item.MutableToolTier"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $FoodBuilder$$Type } from "dev.latvian.mods.kubejs.item.FoodBuilder"
import { $ItemBuilder, $ItemBuilder$$Type } from "dev.latvian.mods.kubejs.item.ItemBuilder"
import { $Rarity$$Type } from "net.minecraft.world.item.Rarity"

export interface $ItemKJS extends $IngredientSupplierKJS {
"addAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type, name: string, d: double, operation: $AttributeModifier$Operation$$Type): void
"getAttributes"(attribute: $Attribute$$Type): $List<$AttributeModifier>
"getCreativeTab"(): string
"getDigSpeed"(): float
"getId"(): string
"getIdLocation"(): $ResourceLocation
"getItemBuilder"(): $ItemBuilder
"getMod"(): string
"getTypeData"(): $CompoundTag
"getTypeItemStackKey"(): $ItemStackKey
"kjs$asIngredient"(): $Ingredient
"removeAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type): void
"self"(): $Item
"setArmorKnockbackResistance"(knockbackResistance: double): void
"setArmorProtection"(armorProtection: double): void
"setArmorToughness"(armorToughness: double): void
"setAttackDamage"(attackDamage: double): void
"setAttackSpeed"(attackSpeed: double): void
"setBurnTime"(i: integer): void
"setCraftingRemainder"(i: $Item$$Type): void
"setDigSpeed"(speed: float): void
"setFireResistant"(b: boolean): void
"setFoodProperties"(properties: $FoodProperties$$Type): void
"setFoodProperties"(consumer: $Consumer$$Type<$FoodBuilder$$Type>): void
"setItemBuilder"(b: $ItemBuilder$$Type): void
"setMaxDamage"(i: integer): void
"setMaxStackSize"(i: integer): void
"setNameKey"(key: string): void
"setRarity"(r: $Rarity$$Type): void
"setTier"(c: $Consumer$$Type<$MutableToolTier$$Type>): void
get "creativeTab"(): string
get "digSpeed"(): float
get "id"(): string
get "idLocation"(): $ResourceLocation
get "itemBuilder"(): $ItemBuilder
get "mod"(): string
get "typeData"(): $CompoundTag
get "typeItemStackKey"(): $ItemStackKey
set "armorKnockbackResistance"(value: double)
set "armorProtection"(value: double)
set "armorToughness"(value: double)
set "attackDamage"(value: double)
set "attackSpeed"(value: double)
set "burnTime"(value: integer)
set "craftingRemainder"(value: $Item$$Type)
set "digSpeed"(value: float)
set "fireResistant"(value: boolean)
set "foodProperties"(value: $FoodProperties$$Type)
set "foodProperties"(value: $Consumer$$Type<$FoodBuilder$$Type>)
set "itemBuilder"(value: $ItemBuilder$$Type)
set "maxDamage"(value: integer)
set "maxStackSize"(value: integer)
set "nameKey"(value: string)
set "rarity"(value: $Rarity$$Type)
set "tier"(value: $Consumer$$Type<$MutableToolTier$$Type>)
}

export namespace $ItemKJS {
const probejs$$marker: never
}
export abstract class $ItemKJS$$Static implements $ItemKJS {
}
}

declare module "dev.latvian.mods.kubejs.core.InventoryKJS" {
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $List } from "java.util.List"
import { $Container } from "net.minecraft.world.Container"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export interface $InventoryKJS {
"asContainer"(): $Container
"clear"(ingredient: $Ingredient$$Type): void
"clear"(): void
"count"(): integer
"count"(ingredient: $Ingredient$$Type): integer
"countNonEmpty"(ingredient: $Ingredient$$Type): integer
"countNonEmpty"(): integer
"extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
"find"(): integer
"find"(ingredient: $Ingredient$$Type): integer
"getAllItems"(): $List<$ItemStack>
"getBlock"(level: $Level$$Type): $BlockContainerJS
"getHeight"(): integer
"getSlotLimit"(slot: integer): integer
"getSlots"(): integer
"getStackInSlot"(slot: integer): $ItemStack
"getWidth"(): integer
"insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
"insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
"isEmpty"(): boolean
"isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
"isMutable"(): boolean
"setChanged"(): void
"setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}

export namespace $InventoryKJS {
const probejs$$marker: never
}
export abstract class $InventoryKJS$$Static implements $InventoryKJS {
}
}

declare module "dev.latvian.mods.kubejs.core.MessageSenderKJS" {
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"

export interface $MessageSenderKJS {
"getDisplayName"(): $Component
"getName"(): $Component
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"setStatusMessage"(message: $Component$$Type): void
"tell"(message: $Component$$Type): void
get "displayName"(): $Component
get "name"(): $Component
set "statusMessage"(value: $Component$$Type)
}

export namespace $MessageSenderKJS {
const probejs$$marker: never
}
export abstract class $MessageSenderKJS$$Static implements $MessageSenderKJS {
}
}

declare module "dev.latvian.mods.kubejs.core.mixin.forge.RecipeManagerAccessor" {
import { $ICondition$IContext } from "net.minecraftforge.common.crafting.conditions.ICondition$IContext"

export interface $RecipeManagerAccessor {
"getContext"(): $ICondition$IContext
get "context"(): $ICondition$IContext
}

export namespace $RecipeManagerAccessor {
const probejs$$marker: never
}
export abstract class $RecipeManagerAccessor$$Static implements $RecipeManagerAccessor {
}
}

declare module "dev.latvian.mods.kubejs.core.WithPersistentData" {
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $MessageSenderKJS } from "dev.latvian.mods.kubejs.core.MessageSenderKJS"

export interface $WithPersistentData extends $MessageSenderKJS {
"getDisplayName"(): $Component
"getName"(): $Component
"getPersistentData"(): $CompoundTag
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"setStatusMessage"(message: $Component$$Type): void
"tell"(message: $Component$$Type): void
get "displayName"(): $Component
get "name"(): $Component
get "persistentData"(): $CompoundTag
set "statusMessage"(value: $Component$$Type)
}

export namespace $WithPersistentData {
const probejs$$marker: never
}
export abstract class $WithPersistentData$$Static implements $WithPersistentData {
}
}

declare module "dev.latvian.mods.kubejs.core.LazyComponentKJS" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Supplier } from "java.util.function.Supplier"

export interface $LazyComponentKJS extends $Supplier<$Component> {
"get"(): $Component
}

export namespace $LazyComponentKJS {
const probejs$$marker: never
}
export abstract class $LazyComponentKJS$$Static implements $LazyComponentKJS {
}
}

