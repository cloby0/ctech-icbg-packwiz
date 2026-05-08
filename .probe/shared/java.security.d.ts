declare module "java.security.SignatureSpi" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SignatureSpi {
constructor()

public "clone"(): any
}
}

declare module "java.security.cert.Certificate" {
import { $PublicKey, $PublicKey$$Type } from "java.security.PublicKey"
import { $Provider$$Type } from "java.security.Provider"
import { $Serializable } from "java.io.Serializable"

export class $Certificate implements $Serializable {
public "getEncoded"(): byte[]
public "getPublicKey"(): $PublicKey
public "getType"(): string
public "verify"(publicKey0: $PublicKey$$Type, string1: string): void
public "verify"(publicKey0: $PublicKey$$Type, provider1: $Provider$$Type): void
public "verify"(publicKey0: $PublicKey$$Type): void
get "encoded"(): byte[]
get "publicKey"(): $PublicKey
get "type"(): string
}
}

declare module "java.security.Guard" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Guard {
"checkGuard"(object0: any): void
}

export namespace $Guard {
const probejs$$marker: never
}
export abstract class $Guard$$Static implements $Guard {
}
}

declare module "java.security.Key" {
import { $Serializable } from "java.io.Serializable"

export interface $Key extends $Serializable {
"getAlgorithm"(): string
"getEncoded"(): byte[]
"getFormat"(): string
get "algorithm"(): string
get "encoded"(): byte[]
get "format"(): string
}

export namespace $Key {
const serialVersionUID: long
}
export abstract class $Key$$Static implements $Key {
/** @deprecated */
static readonly "serialVersionUID": long

}
}

declare module "java.security.Permission" {
import { $Guard } from "java.security.Guard"
import { $PermissionCollection } from "java.security.PermissionCollection"
import { $Serializable } from "java.io.Serializable"

export class $Permission implements $Guard, $Serializable {
constructor(string0: string)

public "checkGuard"(object0: any): void
public "getActions"(): string
public "getName"(): string
public "implies"(permission0: $Permission$$Type): boolean
public "newPermissionCollection"(): $PermissionCollection
get "actions"(): string
get "name"(): string
}
}

declare module "java.security.DomainCombiner" {
import { $ProtectionDomain, $ProtectionDomain$$Type } from "java.security.ProtectionDomain"

/** @deprecated */
export interface $DomainCombiner {
"combine"(protectionDomain0s: $ProtectionDomain$$Type[], protectionDomain1s: $ProtectionDomain$$Type[]): $ProtectionDomain[]
}

export namespace $DomainCombiner {
const probejs$$marker: never
}
export abstract class $DomainCombiner$$Static implements $DomainCombiner {
}
}

declare module "java.security.KeyPair" {
import { $PrivateKey, $PrivateKey$$Type } from "java.security.PrivateKey"
import { $PublicKey, $PublicKey$$Type } from "java.security.PublicKey"
import { $Serializable } from "java.io.Serializable"

export class $KeyPair implements $Serializable {
constructor(publicKey0: $PublicKey$$Type, privateKey1: $PrivateKey$$Type)

public "getPrivate"(): $PrivateKey
public "getPublic"(): $PublicKey
get "private"(): $PrivateKey
get "public"(): $PublicKey
}
}

declare module "java.security.PrivilegedExceptionAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PrivilegedExceptionAction<T = any> {
"run"(): T
}

export namespace $PrivilegedExceptionAction {
const probejs$$marker: never
}
export abstract class $PrivilegedExceptionAction$$Static<T = any> implements $PrivilegedExceptionAction<T> {
}
}

declare module "java.security.cert.CertPath" {
import { $List } from "java.util.List"
import { $Certificate } from "java.security.cert.Certificate"
import { $Iterator } from "java.util.Iterator"
import { $Serializable } from "java.io.Serializable"

export class $CertPath implements $Serializable {
public "getCertificates"(): $List<$Certificate>
public "getEncoded"(string0: string): byte[]
public "getEncoded"(): byte[]
public "getEncodings"(): $Iterator<string>
public "getType"(): string
get "certificates"(): $List<$Certificate>
get "encoded"(): byte[]
get "encodings"(): $Iterator<string>
get "type"(): string
}
}

declare module "java.security.ProtectionDomain" {
import { $Principal, $Principal$$Type } from "java.security.Principal"
import { $Permission$$Type } from "java.security.Permission"
import { $CodeSource, $CodeSource$$Type } from "java.security.CodeSource"
import { $ClassLoader, $ClassLoader$$Type } from "java.lang.ClassLoader"
import { $PermissionCollection, $PermissionCollection$$Type } from "java.security.PermissionCollection"

export class $ProtectionDomain {
constructor(codeSource0: $CodeSource$$Type, permissionCollection1: $PermissionCollection$$Type)
constructor(codeSource0: $CodeSource$$Type, permissionCollection1: $PermissionCollection$$Type, classLoader2: $ClassLoader$$Type, principal3s: $Principal$$Type[])

public "getClassLoader"(): $ClassLoader
public "getCodeSource"(): $CodeSource
public "getPermissions"(): $PermissionCollection
public "getPrincipals"(): $Principal[]
public "implies"(permission0: $Permission$$Type): boolean
public "staticPermissionsOnly"(): boolean
get "classLoader"(): $ClassLoader
get "codeSource"(): $CodeSource
get "permissions"(): $PermissionCollection
get "principals"(): $Principal[]
}
}

declare module "java.security.PrivateKey" {
import { $Key } from "java.security.Key"
import { $Destroyable } from "javax.security.auth.Destroyable"

export interface $PrivateKey extends $Key, $Destroyable {
"destroy"(): void
"getAlgorithm"(): string
"getEncoded"(): byte[]
"getFormat"(): string
"isDestroyed"(): boolean
get "algorithm"(): string
get "encoded"(): byte[]
get "format"(): string
get "destroyed"(): boolean
}

export namespace $PrivateKey {
const serialVersionUID: long
}
export abstract class $PrivateKey$$Static implements $PrivateKey {
/** @deprecated */
static readonly "serialVersionUID": long

}
}

declare module "java.security.PrivilegedAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PrivilegedAction<T = any> {
"run"(): T
}

export namespace $PrivilegedAction {
const probejs$$marker: never
}
export abstract class $PrivilegedAction$$Static<T = any> implements $PrivilegedAction<T> {
}
}

declare module "java.security.AccessControlContext" {
import { $Permission$$Type } from "java.security.Permission"
import { $DomainCombiner, $DomainCombiner$$Type } from "java.security.DomainCombiner"
import { $ProtectionDomain$$Type } from "java.security.ProtectionDomain"

/** @deprecated */
export class $AccessControlContext {
constructor(accessControlContext0: $AccessControlContext$$Type, domainCombiner1: $DomainCombiner$$Type)
constructor(protectionDomain0s: $ProtectionDomain$$Type[])

public "checkPermission"(permission0: $Permission$$Type): void
public "getDomainCombiner"(): $DomainCombiner
get "domainCombiner"(): $DomainCombiner
}
}

declare module "java.security.Signature" {
import { $SecureRandom$$Type } from "java.security.SecureRandom"
import { $SignatureSpi } from "java.security.SignatureSpi"
import { $Certificate$$Type } from "java.security.cert.Certificate"
import { $PrivateKey$$Type } from "java.security.PrivateKey"
import { $PublicKey$$Type } from "java.security.PublicKey"
import { $AlgorithmParameterSpec$$Type } from "java.security.spec.AlgorithmParameterSpec"
import { $AlgorithmParameters } from "java.security.AlgorithmParameters"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $Provider, $Provider$$Type } from "java.security.Provider"

export class $Signature extends $SignatureSpi {
public "getAlgorithm"(): string
public static "getInstance"(string0: string, string1: string): $Signature
public static "getInstance"(string0: string): $Signature
public static "getInstance"(string0: string, provider1: $Provider$$Type): $Signature
/** @deprecated */
public "getParameter"(string0: string): any
public "getParameters"(): $AlgorithmParameters
public "getProvider"(): $Provider
public "initSign"(privateKey0: $PrivateKey$$Type): void
public "initSign"(privateKey0: $PrivateKey$$Type, secureRandom1: $SecureRandom$$Type): void
public "initVerify"(publicKey0: $PublicKey$$Type): void
public "initVerify"(certificate0: $Certificate$$Type): void
/** @deprecated */
public "setParameter"(string0: string, object1: any): void
public "setParameter"(algorithmParameterSpec0: $AlgorithmParameterSpec$$Type): void
public "sign"(byte0s: byte[], int1: integer, int2: integer): integer
public "sign"(): byte[]
public "update"(byte0: byte): void
public "update"(byte0s: byte[]): void
public "update"(byte0s: byte[], int1: integer, int2: integer): void
public "update"(byteBuffer0: $ByteBuffer$$Type): void
public "verify"(byte0s: byte[], int1: integer, int2: integer): boolean
public "verify"(byte0s: byte[]): boolean
get "algorithm"(): string
get "parameters"(): $AlgorithmParameters
get "provider"(): $Provider
set "parameter"(value: $AlgorithmParameterSpec$$Type)
}
}

declare module "java.security.CodeSource" {
import { $Certificate, $Certificate$$Type } from "java.security.cert.Certificate"
import { $URL, $URL$$Type } from "java.net.URL"
import { $CodeSigner, $CodeSigner$$Type } from "java.security.CodeSigner"
import { $Serializable } from "java.io.Serializable"

export class $CodeSource implements $Serializable {
constructor(uRL0: $URL$$Type, certificate1s: $Certificate$$Type[])
constructor(uRL0: $URL$$Type, codeSigner1s: $CodeSigner$$Type[])

public "getCertificates"(): $Certificate[]
public "getCodeSigners"(): $CodeSigner[]
public "getLocation"(): $URL
public "implies"(codeSource0: $CodeSource$$Type): boolean
get "certificates"(): $Certificate[]
get "codeSigners"(): $CodeSigner[]
get "location"(): $URL
}
}

declare module "java.security.spec.AlgorithmParameterSpec" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AlgorithmParameterSpec {
}

export namespace $AlgorithmParameterSpec {
const probejs$$marker: never
}
export abstract class $AlgorithmParameterSpec$$Static implements $AlgorithmParameterSpec {
}
}

declare module "java.security.CodeSigner" {
import { $CertPath, $CertPath$$Type } from "java.security.cert.CertPath"
import { $Timestamp, $Timestamp$$Type } from "java.security.Timestamp"
import { $Serializable } from "java.io.Serializable"

export class $CodeSigner implements $Serializable {
constructor(certPath0: $CertPath$$Type, timestamp1: $Timestamp$$Type)

public "getSignerCertPath"(): $CertPath
public "getTimestamp"(): $Timestamp
get "signerCertPath"(): $CertPath
get "timestamp"(): $Timestamp
}
}

declare module "java.security.PermissionCollection" {
import { $Stream } from "java.util.stream.Stream"
import { $Permission, $Permission$$Type } from "java.security.Permission"
import { $Enumeration } from "java.util.Enumeration"
import { $Serializable } from "java.io.Serializable"

export class $PermissionCollection implements $Serializable {
constructor()

public "add"(permission0: $Permission$$Type): void
public "elements"(): $Enumeration<$Permission>
public "elementsAsStream"(): $Stream<$Permission>
public "implies"(permission0: $Permission$$Type): boolean
public "isReadOnly"(): boolean
public "setReadOnly"(): void
get "readOnly"(): boolean
}
}

declare module "java.security.Provider$Service" {
import { $List$$Type } from "java.util.List"
import { $Map$$Type } from "java.util.Map"
import { $Provider, $Provider$$Type } from "java.security.Provider"

export class $Provider$Service {
constructor(provider0: $Provider$$Type, string1: string, string2: string, string3: string, list4: $List$$Type<string>, map5: $Map$$Type<string, string>)

public "getAlgorithm"(): string
public "getAttribute"(string0: string): string
public "getClassName"(): string
public "getProvider"(): $Provider
public "getType"(): string
public "newInstance"(object0: any): any
public "supportsParameter"(object0: any): boolean
get "algorithm"(): string
get "className"(): string
get "provider"(): $Provider
get "type"(): string
}
}

declare module "java.security.Timestamp" {
import { $Date, $Date$$Type } from "java.util.Date"
import { $CertPath, $CertPath$$Type } from "java.security.cert.CertPath"
import { $Serializable } from "java.io.Serializable"

export class $Timestamp implements $Serializable {
constructor(date0: $Date$$Type, certPath1: $CertPath$$Type)

public "getSignerCertPath"(): $CertPath
public "getTimestamp"(): $Date
get "signerCertPath"(): $CertPath
get "timestamp"(): $Date
}
}

declare module "java.security.Principal" {
import { $Subject$$Type } from "javax.security.auth.Subject"

export interface $Principal {
"equals"(object0: any): boolean
"getName"(): string
"hashCode"(): integer
"implies"(subject0: $Subject$$Type): boolean
"toString"(): string
get "name"(): string
}

export namespace $Principal {
const probejs$$marker: never
}
export abstract class $Principal$$Static implements $Principal {
}
}

declare module "java.security.SecureRandom" {
import { $RandomGenerator } from "java.util.random.RandomGenerator"
import { $Random } from "java.util.Random"
import { $SecureRandomParameters, $SecureRandomParameters$$Type } from "java.security.SecureRandomParameters"
import { $Provider, $Provider$$Type } from "java.security.Provider"

export class $SecureRandom extends $Random {
constructor()
constructor(byte0s: byte[])

public "generateSeed"(int0: integer): byte[]
public "getAlgorithm"(): string
public static "getDefault"(): $RandomGenerator
public static "getInstance"(string0: string, secureRandomParameters1: $SecureRandomParameters$$Type, string2: string): $SecureRandom
public static "getInstance"(string0: string, secureRandomParameters1: $SecureRandomParameters$$Type, provider2: $Provider$$Type): $SecureRandom
public static "getInstance"(string0: string, provider1: $Provider$$Type): $SecureRandom
public static "getInstance"(string0: string, secureRandomParameters1: $SecureRandomParameters$$Type): $SecureRandom
public static "getInstance"(string0: string, string1: string): $SecureRandom
public static "getInstance"(string0: string): $SecureRandom
public static "getInstanceStrong"(): $SecureRandom
public "getParameters"(): $SecureRandomParameters
public "getProvider"(): $Provider
public static "getSeed"(int0: integer): byte[]
public "isDeprecated"(): boolean
public "nextBytes"(byte0s: byte[], secureRandomParameters1: $SecureRandomParameters$$Type): void
public "nextDouble"(double0: double, double1: double): double
public "nextDouble"(double0: double): double
public "nextExponential"(): double
public "nextFloat"(float0: float, float1: float): float
public "nextFloat"(float0: float): float
public "nextGaussian"(double0: double, double1: double): double
public "nextInt"(int0: integer, int1: integer): integer
public "nextLong"(long0: long): long
public "nextLong"(long0: long, long1: long): long
public static "of"(string0: string): $RandomGenerator
public "reseed"(secureRandomParameters0: $SecureRandomParameters$$Type): void
public "reseed"(): void
public "setSeed"(byte0s: byte[]): void
get "algorithm"(): string
get "parameters"(): $SecureRandomParameters
get "provider"(): $Provider
get "deprecated"(): boolean
set "seed"(value: byte[])
}
}

declare module "java.security.PublicKey" {
import { $Key } from "java.security.Key"

export interface $PublicKey extends $Key {
"getAlgorithm"(): string
"getEncoded"(): byte[]
"getFormat"(): string
get "algorithm"(): string
get "encoded"(): byte[]
get "format"(): string
}

export namespace $PublicKey {
const serialVersionUID: long
}
export abstract class $PublicKey$$Static implements $PublicKey {
/** @deprecated */
static readonly "serialVersionUID": long

}
}

declare module "java.security.AlgorithmParameters" {
import { $Class$$Type } from "java.lang.Class"
import { $AlgorithmParameterSpec, $AlgorithmParameterSpec$$Type } from "java.security.spec.AlgorithmParameterSpec"
import { $Provider, $Provider$$Type } from "java.security.Provider"

export class $AlgorithmParameters {
public "getAlgorithm"(): string
public "getEncoded"(): byte[]
public "getEncoded"(string0: string): byte[]
public static "getInstance"(string0: string): $AlgorithmParameters
public static "getInstance"(string0: string, string1: string): $AlgorithmParameters
public static "getInstance"(string0: string, provider1: $Provider$$Type): $AlgorithmParameters
public "getParameterSpec"<T extends $AlgorithmParameterSpec>(class0: $Class$$Type<T>): T
public "getProvider"(): $Provider
public "init"(algorithmParameterSpec0: $AlgorithmParameterSpec$$Type): void
public "init"(byte0s: byte[], string1: string): void
public "init"(byte0s: byte[]): void
get "algorithm"(): string
get "encoded"(): byte[]
get "provider"(): $Provider
}
}

declare module "java.security.SecureRandomParameters" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SecureRandomParameters {
}

export namespace $SecureRandomParameters {
const probejs$$marker: never
}
export abstract class $SecureRandomParameters$$Static implements $SecureRandomParameters {
}
}

declare module "java.security.Provider" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Properties } from "java.util.Properties"
import { $Provider$Service } from "java.security.Provider$Service"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Set } from "java.util.Set"

export class $Provider extends $Properties {
public "configure"(string0: string): $Provider
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "getInfo"(): string
public "getName"(): string
public "getService"(string0: string, string1: string): $Provider$Service
public "getServices"(): $Set<$Provider$Service>
/** @deprecated */
public "getVersion"(): double
public "getVersionStr"(): string
public "isConfigured"(): boolean
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
public static "of"<K, V>(): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
public static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
get "info"(): string
get "name"(): string
get "services"(): $Set<$Provider$Service>
get "version"(): double
get "versionStr"(): string
get "configured"(): boolean
}
}

