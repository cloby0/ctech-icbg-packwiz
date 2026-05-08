declare module "com.leaky.INearbyItemAwareEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $INearbyItemAwareEntity {
"getNearbyItems"(): integer
"setNearbyItems"(int0: integer): void
get "nearbyItems"(): integer
set "nearbyItems"(value: integer)
}

export namespace $INearbyItemAwareEntity {
const probejs$$marker: never
}
export abstract class $INearbyItemAwareEntity$$Static implements $INearbyItemAwareEntity {
}
}

