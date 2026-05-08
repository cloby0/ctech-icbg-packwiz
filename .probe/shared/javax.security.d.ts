declare module "javax.security.auth.Subject" {
import { $AccessControlContext$$Type } from "java.security.AccessControlContext"
import { $Principal, $Principal$$Type } from "java.security.Principal"
import { $Set, $Set$$Type } from "java.util.Set"
import { $Class$$Type } from "java.lang.Class"
import { $PrivilegedAction$$Type } from "java.security.PrivilegedAction"
import { $PrivilegedExceptionAction$$Type } from "java.security.PrivilegedExceptionAction"
import { $Serializable } from "java.io.Serializable"

export class $Subject implements $Serializable {
constructor()
constructor(boolean0: boolean, set1: $Set$$Type<$Principal$$Type>, set2: $Set$$Type<any>, set3: $Set$$Type<any>)

public static "doAs"<T>(subject0: $Subject$$Type, privilegedAction1: $PrivilegedAction$$Type<T>): T
public static "doAs"<T>(subject0: $Subject$$Type, privilegedExceptionAction1: $PrivilegedExceptionAction$$Type<T>): T
/** @deprecated */
public static "doAsPrivileged"<T>(subject0: $Subject$$Type, privilegedExceptionAction1: $PrivilegedExceptionAction$$Type<T>, accessControlContext2: $AccessControlContext$$Type): T
/** @deprecated */
public static "doAsPrivileged"<T>(subject0: $Subject$$Type, privilegedAction1: $PrivilegedAction$$Type<T>, accessControlContext2: $AccessControlContext$$Type): T
public "getPrincipals"(): $Set<$Principal>
public "getPrincipals"<T extends $Principal>(class0: $Class$$Type<T>): $Set<T>
public "getPrivateCredentials"(): $Set<any>
public "getPrivateCredentials"<T>(class0: $Class$$Type<T>): $Set<T>
public "getPublicCredentials"<T>(class0: $Class$$Type<T>): $Set<T>
public "getPublicCredentials"(): $Set<any>
/** @deprecated */
public static "getSubject"(accessControlContext0: $AccessControlContext$$Type): $Subject
public "isReadOnly"(): boolean
public "setReadOnly"(): void
get "principals"(): $Set<$Principal>
get "privateCredentials"(): $Set<any>
get "publicCredentials"(): $Set<any>
get "readOnly"(): boolean
}
}

declare module "javax.security.auth.Destroyable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Destroyable {
"destroy"(): void
"isDestroyed"(): boolean
get "destroyed"(): boolean
}

export namespace $Destroyable {
const probejs$$marker: never
}
export abstract class $Destroyable$$Static implements $Destroyable {
}
}

