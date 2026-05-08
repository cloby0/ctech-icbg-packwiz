declare module "com.blorb.morerelics.mixin.WalkAnimationStateAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WalkAnimationStateAccessor {
"getPosition"(): float
"getSpeedOld"(): float
"setPosition"(float0: float): void
"setSpeedOld"(float0: float): void
get "position"(): float
get "speedOld"(): float
set "position"(value: float)
set "speedOld"(value: float)
}

export namespace $WalkAnimationStateAccessor {
const probejs$$marker: never
}
export abstract class $WalkAnimationStateAccessor$$Static implements $WalkAnimationStateAccessor {
}
}

