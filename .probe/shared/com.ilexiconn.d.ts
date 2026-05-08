declare module "com.ilexiconn.llibrary.server.event.AnimationEvent$Start" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $AnimationEvent } from "com.ilexiconn.llibrary.server.event.AnimationEvent"
import { $IAnimatedEntity, $IAnimatedEntity$$Type } from "com.ilexiconn.llibrary.server.animation.IAnimatedEntity"
import { $Animation$$Type } from "com.ilexiconn.llibrary.server.animation.Animation"

export class $AnimationEvent$Start<T extends ($Entity & $IAnimatedEntity) = ($Entity & $IAnimatedEntity)> extends $AnimationEvent<T> {
constructor(t0: T, animation1: $Animation$$Type)
constructor()

public "setAnimation"(animation0: $Animation$$Type): void
set "animation"(value: $Animation$$Type)
}
}

declare module "com.ilexiconn.llibrary.server.event.AnimationEvent" {
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $IAnimatedEntity } from "com.ilexiconn.llibrary.server.animation.IAnimatedEntity"
import { $Animation } from "com.ilexiconn.llibrary.server.animation.Animation"

export class $AnimationEvent<T extends ($Entity & $IAnimatedEntity) = ($Entity & $IAnimatedEntity)> extends $Event {
constructor()

public "getAnimation"(): $Animation
public "getEntity"(): T
get "animation"(): $Animation
get "entity"(): T
}
}

declare module "com.ilexiconn.llibrary.server.animation.Animation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Animation {
/** @deprecated */
public static "create"(int0: integer, int1: integer): $Animation
public static "create"(int0: integer): $Animation
public "doesLoop"(): boolean
public "getDuration"(): integer
/** @deprecated */
public "getID"(): integer
public "setLooping"(boolean0: boolean): $Animation
get "duration"(): integer
get "iD"(): integer
set "looping"(value: boolean)
}
}

declare module "com.ilexiconn.llibrary.server.event.AnimationEvent$Tick" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $AnimationEvent } from "com.ilexiconn.llibrary.server.event.AnimationEvent"
import { $IAnimatedEntity, $IAnimatedEntity$$Type } from "com.ilexiconn.llibrary.server.animation.IAnimatedEntity"
import { $Animation$$Type } from "com.ilexiconn.llibrary.server.animation.Animation"

export class $AnimationEvent$Tick<T extends ($Entity & $IAnimatedEntity) = ($Entity & $IAnimatedEntity)> extends $AnimationEvent<T> {
constructor(t0: T, animation1: $Animation$$Type, int2: integer)
constructor()

public "getTick"(): integer
get "tick"(): integer
}
}

declare module "com.ilexiconn.llibrary.server.animation.IAnimatedEntity" {
import { $Animation, $Animation$$Type } from "com.ilexiconn.llibrary.server.animation.Animation"

export interface $IAnimatedEntity {
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

export namespace $IAnimatedEntity {
const NO_ANIMATION: $Animation
}
export abstract class $IAnimatedEntity$$Static implements $IAnimatedEntity {
static readonly "NO_ANIMATION": $Animation

}
}

