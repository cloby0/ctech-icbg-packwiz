declare module "dev.latvian.mods.kubejs.entity.LivingEntityHurtEventJS" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $LivingEntityEventJS } from "dev.latvian.mods.kubejs.entity.LivingEntityEventJS"

/** Invoked before an entity is hurt by a damage source. */
export class $LivingEntityHurtEventJS extends $LivingEntityEventJS {
constructor(entity: $LivingEntity$$Type, source: $DamageSource$$Type, amount: float)

/** The amount of damage. */
public "getDamage"(): float
/** The damage source. */
public "getSource"(): $DamageSource
get "damage"(): float
get "source"(): $DamageSource
}
}

declare module "dev.latvian.mods.kubejs.entity.LivingEntityEventJS" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $EntityEventJS } from "dev.latvian.mods.kubejs.entity.EntityEventJS"

export class $LivingEntityEventJS extends $EntityEventJS {
constructor()

public "getEntity"(): $LivingEntity
get "entity"(): $LivingEntity
}
}

declare module "dev.latvian.mods.kubejs.entity.forge.LivingEntityDropsEventJS" {
import { $List, $List$$Type } from "java.util.List"
import { $ItemEntity, $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $DamageSource } from "net.minecraft.world.damagesource.DamageSource"
import { $LivingEntityEventJS } from "dev.latvian.mods.kubejs.entity.LivingEntityEventJS"
import { $LivingDropsEvent$$Type } from "net.minecraftforge.event.entity.living.LivingDropsEvent"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $LivingEntityDropsEventJS extends $LivingEntityEventJS {
constructor(e: $LivingDropsEvent$$Type)

public "addDrop"(stack: $ItemStack$$Type): $ItemEntity
public "addDrop"(stack: $ItemStack$$Type, chance: float): $ItemEntity
public "getDrops"(): $List<$ItemEntity>
public "getLootingLevel"(): integer
public "getSource"(): $DamageSource
public "isRecentlyHit"(): boolean
get "eventDrops"(): $List<$ItemEntity>
set "eventDrops"(value: $List$$Type<$ItemEntity$$Type>)
get "drops"(): $List<$ItemEntity>
get "lootingLevel"(): integer
get "source"(): $DamageSource
get "recentlyHit"(): boolean
}
}

declare module "dev.latvian.mods.kubejs.entity.EntityEventJS" {
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $LevelEventJS } from "dev.latvian.mods.kubejs.level.LevelEventJS"
import { $Player } from "net.minecraft.world.entity.player.Player"

export class $EntityEventJS extends $LevelEventJS {
constructor()

public "getEntity"(): $Entity
public "getPlayer"(): $Player
get "entity"(): $Entity
get "player"(): $Player
}
}

declare module "dev.latvian.mods.kubejs.entity.LivingEntityDeathEventJS" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $LivingEntityEventJS } from "dev.latvian.mods.kubejs.entity.LivingEntityEventJS"

/**
 * Invoked before a living entity dies.
 * 
 * **NOTE**: You need to set hp to > 0 besides cancelling the event to prevent the entity from dying.
 */
export class $LivingEntityDeathEventJS extends $LivingEntityEventJS {
constructor(entity: $LivingEntity$$Type, source: $DamageSource$$Type)

/** The damage source that triggers the death. */
public "getSource"(): $DamageSource
get "source"(): $DamageSource
}
}

declare module "dev.latvian.mods.kubejs.entity.CheckLivingEntitySpawnEventJS" {
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BaseSpawner, $BaseSpawner$$Type } from "net.minecraft.world.level.BaseSpawner"
import { $MobSpawnType, $MobSpawnType$$Type } from "net.minecraft.world.entity.MobSpawnType"
import { $LivingEntityEventJS } from "dev.latvian.mods.kubejs.entity.LivingEntityEventJS"
import { $Level$$Type } from "net.minecraft.world.level.Level"

/**
 * Invoked before an entity is spawned into the world.
 * 
 * Only entities from a `BaseSpawner` or world generation will trigger this event.
 */
export class $CheckLivingEntitySpawnEventJS extends $LivingEntityEventJS {
readonly "spawner": $BaseSpawner
readonly "type": $MobSpawnType
readonly "x": double
readonly "y": double
readonly "z": double

constructor(entity: $LivingEntity$$Type, level: $Level$$Type, x: double, y: double, z: double, type: $MobSpawnType$$Type, spawner: $BaseSpawner$$Type)

/** The block the entity is being spawned on. */
public "getBlock"(): $BlockContainerJS
/** The spawner that spawned the entity. Can be null if the entity was spawned by worldgen. */
public "getSpawner"(): $BaseSpawner
/** The type of spawn. */
public "getType"(): $MobSpawnType
get "block"(): $BlockContainerJS
}
}

declare module "dev.latvian.mods.kubejs.entity.RayTraceResultJS" {
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $HitResult$Type } from "net.minecraft.world.phys.HitResult$Type"

export class $RayTraceResultJS {
readonly "distance": double
readonly "fromEntity": $Entity
readonly "type": $HitResult$Type

constructor(from: $Entity$$Type, result: $HitResult$$Type, d: double)

public "getHitX"(): double
public "getHitY"(): double
public "getHitZ"(): double
get "block"(): $BlockContainerJS
set "block"(value: $BlockContainerJS$$Type)
get "entity"(): $Entity
set "entity"(value: $Entity$$Type)
get "facing"(): $Direction
set "facing"(value: $Direction$$Type)
get "hit"(): $Vec3
set "hit"(value: $Vec3$$Type)
get "hitX"(): double
get "hitY"(): double
get "hitZ"(): double
}
}

declare module "dev.latvian.mods.kubejs.entity.EntityPotionEffectsJS" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Collection } from "java.util.Collection"
import { $Map } from "java.util.Map"
import { $MobEffectInstance, $MobEffectInstance$$Type } from "net.minecraft.world.effect.MobEffectInstance"
import { $MobEffect, $MobEffect$$Type } from "net.minecraft.world.effect.MobEffect"

export class $EntityPotionEffectsJS {
constructor(e: $LivingEntity$$Type)

public "add"(mobEffect: $MobEffect$$Type, duration: integer): void
public "add"(mobEffect: $MobEffect$$Type, duration: integer, amplifier: integer): void
public "add"(mobEffect: $MobEffect$$Type, duration: integer, amplifier: integer, ambient: boolean, showParticles: boolean): void
public "add"(mobEffect: $MobEffect$$Type): void
public "clear"(): void
public "getActive"(): $Collection<$MobEffectInstance>
public "getActive"(mobEffect: $MobEffect$$Type): $MobEffectInstance
public "getDuration"(mobEffect: $MobEffect$$Type): integer
public "getMap"(): $Map<$MobEffect, $MobEffectInstance>
public "isActive"(mobEffect: $MobEffect$$Type): boolean
public "isApplicable"(effect: $MobEffectInstance$$Type): boolean
get "active"(): $Collection<$MobEffectInstance>
get "map"(): $Map<$MobEffect, $MobEffectInstance>
}
}

declare module "dev.latvian.mods.kubejs.entity.EntitySpawnedEventJS" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $EntityEventJS } from "dev.latvian.mods.kubejs.entity.EntityEventJS"

/**
 * Invoked when an entity is about to be added to the world.
 * 
 * This event also fires for existing entities when they are loaded from a save.
 */
export class $EntitySpawnedEventJS extends $EntityEventJS {
constructor(entity: $Entity$$Type, level: $Level$$Type)

}
}

