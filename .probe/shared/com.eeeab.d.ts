declare module "com.eeeab.animate.server.event.AnimationEvent" {
import { $Animation } from "com.eeeab.animate.server.animation.Animation"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $EMAnimatedEntity } from "com.eeeab.animate.server.animation.EMAnimatedEntity"

export class $AnimationEvent<T extends ($Entity & $EMAnimatedEntity) = ($Entity & $EMAnimatedEntity)> extends $Event {
constructor()

public "getAnimation"(): $Animation
public "getEntity"(): T
get "animation"(): $Animation
get "entity"(): T
}
}

declare module "com.eeeab.animate.server.animation.EMAnimatedEntity" {
import { $Animation, $Animation$$Type } from "com.eeeab.animate.server.animation.Animation"

export interface $EMAnimatedEntity {
"getAnimation"(): $Animation
"getAnimationTick"(): integer
"getAnimations"(): $Animation[]
"setAnimation"(animation0: $Animation$$Type): void
"setAnimationTick"(int0: integer): void
get "animation"(): $Animation
get "animationTick"(): integer
get "animations"(): $Animation[]
set "animation"(value: $Animation$$Type)
set "animationTick"(value: integer)
}

export namespace $EMAnimatedEntity {
const NO_ANIMATION: $Animation
}
export abstract class $EMAnimatedEntity$$Static implements $EMAnimatedEntity {
static readonly "NO_ANIMATION": $Animation

}
}

declare module "com.eeeab.animate.server.event.AnimationEvent$Tick" {
import { $Animation$$Type } from "com.eeeab.animate.server.animation.Animation"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $AnimationEvent } from "com.eeeab.animate.server.event.AnimationEvent"
import { $EMAnimatedEntity, $EMAnimatedEntity$$Type } from "com.eeeab.animate.server.animation.EMAnimatedEntity"

export class $AnimationEvent$Tick<T extends ($Entity & $EMAnimatedEntity) = ($Entity & $EMAnimatedEntity)> extends $AnimationEvent<T> {
constructor(t0: T, animation1: $Animation$$Type, int2: integer)
constructor()

public "getTick"(): integer
get "tick"(): integer
}
}

declare module "com.eeeab.animate.server.event.AnimationEvent$Start" {
import { $Animation$$Type } from "com.eeeab.animate.server.animation.Animation"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $AnimationEvent } from "com.eeeab.animate.server.event.AnimationEvent"
import { $EMAnimatedEntity, $EMAnimatedEntity$$Type } from "com.eeeab.animate.server.animation.EMAnimatedEntity"

export class $AnimationEvent$Start<T extends ($Entity & $EMAnimatedEntity) = ($Entity & $EMAnimatedEntity)> extends $AnimationEvent<T> {
constructor(t0: T, animation1: $Animation$$Type)
constructor()

public "setAnimation"(animation0: $Animation$$Type): void
set "animation"(value: $Animation$$Type)
}
}

declare module "com.eeeab.animate.server.animation.Animation" {
import { $AnimationState } from "net.minecraft.world.entity.AnimationState"

export class $Animation extends $AnimationState {
public static "coexist"(int0: integer): $Animation
public static "create"(int0: integer): $Animation
public "getDuration"(): integer
public "isSuperposition"(): boolean
get "duration"(): integer
get "superposition"(): boolean
}
}

