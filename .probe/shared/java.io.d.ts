declare module "java.io.Serializable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Serializable {
}

export namespace $Serializable {
const probejs$$marker: never
}
export abstract class $Serializable$$Static implements $Serializable {
}
}

declare module "java.io.Closeable" {
import { $AutoCloseable } from "java.lang.AutoCloseable"

export interface $Closeable extends $AutoCloseable {
"close"(): void
}

export namespace $Closeable {
const probejs$$marker: never
}
export abstract class $Closeable$$Static implements $Closeable {
}
}

