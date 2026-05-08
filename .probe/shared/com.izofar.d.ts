declare module "com.izofar.takesapillage.util.IMobRememberSpawnReason" {
import { $MobSpawnType } from "net.minecraft.world.entity.MobSpawnType"

export interface $IMobRememberSpawnReason {
"getMobSpawnType"(): $MobSpawnType
get "mobSpawnType"(): $MobSpawnType
}

export namespace $IMobRememberSpawnReason {
const probejs$$marker: never
}
export abstract class $IMobRememberSpawnReason$$Static implements $IMobRememberSpawnReason {
}
}

