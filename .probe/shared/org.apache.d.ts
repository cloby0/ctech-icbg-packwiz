declare module "org.apache.maven.artifact.repository.layout.ArtifactRepositoryLayout" {
import { $ArtifactRepository$$Type } from "org.apache.maven.artifact.repository.ArtifactRepository"
import { $ArtifactMetadata$$Type } from "org.apache.maven.artifact.metadata.ArtifactMetadata"
import { $Artifact$$Type } from "org.apache.maven.artifact.Artifact"

export interface $ArtifactRepositoryLayout {
"getId"(): string
"pathOf"(artifact0: $Artifact$$Type): string
"pathOfLocalRepositoryMetadata"(artifactMetadata0: $ArtifactMetadata$$Type, artifactRepository1: $ArtifactRepository$$Type): string
"pathOfRemoteRepositoryMetadata"(artifactMetadata0: $ArtifactMetadata$$Type): string
get "id"(): string
}

export namespace $ArtifactRepositoryLayout {
const ROLE: string
}
export abstract class $ArtifactRepositoryLayout$$Static implements $ArtifactRepositoryLayout {
static readonly "ROLE": string

}
}

declare module "org.apache.maven.artifact.repository.ArtifactRepository" {
import { $Proxy, $Proxy$$Type } from "org.apache.maven.repository.Proxy"
import { $List, $List$$Type } from "java.util.List"
import { $ArtifactRepositoryLayout, $ArtifactRepositoryLayout$$Type } from "org.apache.maven.artifact.repository.layout.ArtifactRepositoryLayout"
import { $ArtifactMetadata$$Type } from "org.apache.maven.artifact.metadata.ArtifactMetadata"
import { $Authentication, $Authentication$$Type } from "org.apache.maven.artifact.repository.Authentication"
import { $Artifact, $Artifact$$Type } from "org.apache.maven.artifact.Artifact"
import { $ArtifactRepositoryPolicy, $ArtifactRepositoryPolicy$$Type } from "org.apache.maven.artifact.repository.ArtifactRepositoryPolicy"

export interface $ArtifactRepository {
"find"(artifact0: $Artifact$$Type): $Artifact
"findVersions"(artifact0: $Artifact$$Type): $List<string>
"getAuthentication"(): $Authentication
"getBasedir"(): string
"getId"(): string
"getKey"(): string
"getLayout"(): $ArtifactRepositoryLayout
"getMirroredRepositories"(): $List<$ArtifactRepository>
"getProtocol"(): string
"getProxy"(): $Proxy
"getReleases"(): $ArtifactRepositoryPolicy
"getSnapshots"(): $ArtifactRepositoryPolicy
"getUrl"(): string
/** @deprecated */
"isBlacklisted"(): boolean
"isBlocked"(): boolean
"isProjectAware"(): boolean
/** @deprecated */
"isUniqueVersion"(): boolean
"pathOf"(artifact0: $Artifact$$Type): string
"pathOfLocalRepositoryMetadata"(artifactMetadata0: $ArtifactMetadata$$Type, artifactRepository1: $ArtifactRepository$$Type): string
"pathOfRemoteRepositoryMetadata"(artifactMetadata0: $ArtifactMetadata$$Type): string
"setAuthentication"(authentication0: $Authentication$$Type): void
/** @deprecated */
"setBlacklisted"(boolean0: boolean): void
"setBlocked"(boolean0: boolean): void
"setId"(string0: string): void
"setLayout"(artifactRepositoryLayout0: $ArtifactRepositoryLayout$$Type): void
"setMirroredRepositories"(list0: $List$$Type<$ArtifactRepository$$Type>): void
"setProxy"(proxy0: $Proxy$$Type): void
"setReleaseUpdatePolicy"(artifactRepositoryPolicy0: $ArtifactRepositoryPolicy$$Type): void
"setSnapshotUpdatePolicy"(artifactRepositoryPolicy0: $ArtifactRepositoryPolicy$$Type): void
"setUrl"(string0: string): void
get "authentication"(): $Authentication
get "basedir"(): string
get "id"(): string
get "key"(): string
get "layout"(): $ArtifactRepositoryLayout
get "mirroredRepositories"(): $List<$ArtifactRepository>
get "protocol"(): string
get "proxy"(): $Proxy
get "releases"(): $ArtifactRepositoryPolicy
get "snapshots"(): $ArtifactRepositoryPolicy
get "url"(): string
get "blacklisted"(): boolean
get "blocked"(): boolean
get "projectAware"(): boolean
get "uniqueVersion"(): boolean
set "authentication"(value: $Authentication$$Type)
set "blacklisted"(value: boolean)
set "blocked"(value: boolean)
set "id"(value: string)
set "layout"(value: $ArtifactRepositoryLayout$$Type)
set "mirroredRepositories"(value: $List$$Type<$ArtifactRepository$$Type>)
set "proxy"(value: $Proxy$$Type)
set "releaseUpdatePolicy"(value: $ArtifactRepositoryPolicy$$Type)
set "snapshotUpdatePolicy"(value: $ArtifactRepositoryPolicy$$Type)
set "url"(value: string)
}

export namespace $ArtifactRepository {
const probejs$$marker: never
}
export abstract class $ArtifactRepository$$Static implements $ArtifactRepository {
}
}

declare module "org.apache.maven.artifact.versioning.Restriction" {
import { $ArtifactVersion, $ArtifactVersion$$Type } from "org.apache.maven.artifact.versioning.ArtifactVersion"

export class $Restriction {
static readonly "EVERYTHING": $Restriction

constructor(artifactVersion0: $ArtifactVersion$$Type, boolean1: boolean, artifactVersion2: $ArtifactVersion$$Type, boolean3: boolean)

public "containsVersion"(artifactVersion0: $ArtifactVersion$$Type): boolean
public "getLowerBound"(): $ArtifactVersion
public "getUpperBound"(): $ArtifactVersion
public "isLowerBoundInclusive"(): boolean
public "isUpperBoundInclusive"(): boolean
get "lowerBound"(): $ArtifactVersion
get "upperBound"(): $ArtifactVersion
get "lowerBoundInclusive"(): boolean
get "upperBoundInclusive"(): boolean
}
}

declare module "org.apache.commons.lang3.mutable.Mutable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Mutable<T = any> {
"getValue"(): T
"setValue"(t0: T): void
get "value"(): T
set "value"(value: T)
}

export namespace $Mutable {
const probejs$$marker: never
}
export abstract class $Mutable$$Static<T = any> implements $Mutable<T> {
}
}

declare module "org.apache.maven.repository.Proxy" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Proxy {
static readonly "PROXY_HTTP": string
static readonly "PROXY_SOCKS4": string
static readonly "PROXY_SOCKS5": string

constructor()

public "getHost"(): string
public "getNonProxyHosts"(): string
public "getNtlmDomain"(): string
public "getNtlmHost"(): string
public "getPassword"(): string
public "getPort"(): integer
public "getProtocol"(): string
public "getUserName"(): string
public "setHost"(string0: string): void
public "setNonProxyHosts"(string0: string): void
public "setNtlmDomain"(string0: string): void
public "setNtlmHost"(string0: string): void
public "setPassword"(string0: string): void
public "setPort"(int0: integer): void
public "setProtocol"(string0: string): void
public "setUserName"(string0: string): void
get "host"(): string
get "nonProxyHosts"(): string
get "ntlmDomain"(): string
get "ntlmHost"(): string
get "password"(): string
get "port"(): integer
get "protocol"(): string
get "userName"(): string
set "host"(value: string)
set "nonProxyHosts"(value: string)
set "ntlmDomain"(value: string)
set "ntlmHost"(value: string)
set "password"(value: string)
set "port"(value: integer)
set "protocol"(value: string)
set "userName"(value: string)
}
}

declare module "org.apache.maven.artifact.Artifact" {
import { $ArtifactHandler, $ArtifactHandler$$Type } from "org.apache.maven.artifact.handler.ArtifactHandler"
import { $List, $List$$Type } from "java.util.List"
import { $ArtifactFilter, $ArtifactFilter$$Type } from "org.apache.maven.artifact.resolver.filter.ArtifactFilter"
import { $Collection } from "java.util.Collection"
import { $ArtifactRepository, $ArtifactRepository$$Type } from "org.apache.maven.artifact.repository.ArtifactRepository"
import { $ArtifactMetadata, $ArtifactMetadata$$Type } from "org.apache.maven.artifact.metadata.ArtifactMetadata"
import { $ArtifactVersion, $ArtifactVersion$$Type } from "org.apache.maven.artifact.versioning.ArtifactVersion"
import { $Comparable } from "java.lang.Comparable"
import { $Pattern } from "java.util.regex.Pattern"
import { $VersionRange, $VersionRange$$Type } from "org.apache.maven.artifact.versioning.VersionRange"
import { $File, $File$$Type } from "java.io.File"

export interface $Artifact extends $Comparable<$Artifact> {
"addMetadata"(artifactMetadata0: $ArtifactMetadata$$Type): void
"compareTo"(artifact0: $Artifact$$Type): integer
"getArtifactHandler"(): $ArtifactHandler
"getArtifactId"(): string
"getAvailableVersions"(): $List<$ArtifactVersion>
"getBaseVersion"(): string
"getClassifier"(): string
"getDependencyConflictId"(): string
"getDependencyFilter"(): $ArtifactFilter
"getDependencyTrail"(): $List<string>
"getDownloadUrl"(): string
"getFile"(): $File
"getGroupId"(): string
"getId"(): string
"getMetadataList"(): $Collection<$ArtifactMetadata>
"getRepository"(): $ArtifactRepository
"getScope"(): string
"getSelectedVersion"(): $ArtifactVersion
"getType"(): string
"getVersion"(): string
"getVersionRange"(): $VersionRange
"hasClassifier"(): boolean
"isOptional"(): boolean
"isRelease"(): boolean
"isResolved"(): boolean
"isSelectedVersionKnown"(): boolean
"isSnapshot"(): boolean
"selectVersion"(string0: string): void
"setArtifactHandler"(artifactHandler0: $ArtifactHandler$$Type): void
"setArtifactId"(string0: string): void
"setAvailableVersions"(list0: $List$$Type<$ArtifactVersion$$Type>): void
"setBaseVersion"(string0: string): void
"setDependencyFilter"(artifactFilter0: $ArtifactFilter$$Type): void
"setDependencyTrail"(list0: $List$$Type<string>): void
"setDownloadUrl"(string0: string): void
"setFile"(file0: $File$$Type): void
"setGroupId"(string0: string): void
"setOptional"(boolean0: boolean): void
"setRelease"(boolean0: boolean): void
"setRepository"(artifactRepository0: $ArtifactRepository$$Type): void
"setResolved"(boolean0: boolean): void
"setResolvedVersion"(string0: string): void
"setScope"(string0: string): void
"setVersion"(string0: string): void
"setVersionRange"(versionRange0: $VersionRange$$Type): void
"updateVersion"(string0: string, artifactRepository1: $ArtifactRepository$$Type): void
get "artifactHandler"(): $ArtifactHandler
get "artifactId"(): string
get "availableVersions"(): $List<$ArtifactVersion>
get "baseVersion"(): string
get "classifier"(): string
get "dependencyConflictId"(): string
get "dependencyFilter"(): $ArtifactFilter
get "dependencyTrail"(): $List<string>
get "downloadUrl"(): string
get "file"(): $File
get "groupId"(): string
get "id"(): string
get "metadataList"(): $Collection<$ArtifactMetadata>
get "repository"(): $ArtifactRepository
get "scope"(): string
get "selectedVersion"(): $ArtifactVersion
get "type"(): string
get "version"(): string
get "versionRange"(): $VersionRange
get "optional"(): boolean
get "release"(): boolean
get "resolved"(): boolean
get "selectedVersionKnown"(): boolean
get "snapshot"(): boolean
set "artifactHandler"(value: $ArtifactHandler$$Type)
set "artifactId"(value: string)
set "availableVersions"(value: $List$$Type<$ArtifactVersion$$Type>)
set "baseVersion"(value: string)
set "dependencyFilter"(value: $ArtifactFilter$$Type)
set "dependencyTrail"(value: $List$$Type<string>)
set "downloadUrl"(value: string)
set "file"(value: $File$$Type)
set "groupId"(value: string)
set "optional"(value: boolean)
set "release"(value: boolean)
set "repository"(value: $ArtifactRepository$$Type)
set "resolved"(value: boolean)
set "resolvedVersion"(value: string)
set "scope"(value: string)
set "version"(value: string)
set "versionRange"(value: $VersionRange$$Type)
}

export namespace $Artifact {
const LATEST_VERSION: string
const RELEASE_VERSION: string
const SCOPE_COMPILE: string
const SCOPE_COMPILE_PLUS_RUNTIME: string
const SCOPE_IMPORT: string
const SCOPE_PROVIDED: string
const SCOPE_RUNTIME: string
const SCOPE_RUNTIME_PLUS_SYSTEM: string
const SCOPE_SYSTEM: string
const SCOPE_TEST: string
const SNAPSHOT_VERSION: string
const VERSION_FILE_PATTERN: $Pattern
}
export abstract class $Artifact$$Static implements $Artifact {
static readonly "LATEST_VERSION": string
static readonly "RELEASE_VERSION": string
static readonly "SCOPE_COMPILE": string
static readonly "SCOPE_COMPILE_PLUS_RUNTIME": string
static readonly "SCOPE_IMPORT": string
static readonly "SCOPE_PROVIDED": string
static readonly "SCOPE_RUNTIME": string
static readonly "SCOPE_RUNTIME_PLUS_SYSTEM": string
static readonly "SCOPE_SYSTEM": string
static readonly "SCOPE_TEST": string
static readonly "SNAPSHOT_VERSION": string
static readonly "VERSION_FILE_PATTERN": $Pattern

}
}

declare module "org.apache.logging.log4j.LogBuilder" {
import { $Throwable$$Type } from "java.lang.Throwable"
import { $Message$$Type } from "org.apache.logging.log4j.message.Message"
import { $Supplier$$Type } from "org.apache.logging.log4j.util.Supplier"
import { $StackTraceElement$$Type } from "java.lang.StackTraceElement"
import { $Marker$$Type } from "org.apache.logging.log4j.Marker"

export interface $LogBuilder {
"log"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
"log"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
"log"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
"log"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
"log"(message: string, p0: any, p1: any, p2: any, p3: any): void
"log"(message: string, p0: any): void
"log"(): void
"log"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
"log"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
"log"(messageSupplier: $Supplier$$Type<$Message$$Type>): void
"log"(message: $Message$$Type): void
"log"(message: string, ...params: $Supplier$$Type<any>[]): void
"log"(message: string, ...params: any[]): void
"log"(message: string): void
"log"(message: string, p0: any, p1: any, p2: any): void
"log"(message: string, p0: any, p1: any): void
"log"(message: charseq): void
"log"(message: any): void
"withLocation"(location: $StackTraceElement$$Type): $LogBuilder
"withLocation"(): $LogBuilder
"withMarker"(marker: $Marker$$Type): $LogBuilder
"withThrowable"(throwable: $Throwable$$Type): $LogBuilder
}

export namespace $LogBuilder {
const NOOP: $LogBuilder
}
export abstract class $LogBuilder$$Static implements $LogBuilder {
static readonly "NOOP": $LogBuilder

}
}

declare module "org.apache.logging.log4j.message.Message" {
import { $Throwable } from "java.lang.Throwable"
import { $Serializable } from "java.io.Serializable"

export interface $Message extends $Serializable {
"getFormat"(): string
"getFormattedMessage"(): string
"getParameters"(): any[]
"getThrowable"(): $Throwable
get "format"(): string
get "formattedMessage"(): string
get "parameters"(): any[]
get "throwable"(): $Throwable
}

export namespace $Message {
const probejs$$marker: never
}
export abstract class $Message$$Static implements $Message {
}
}

declare module "org.apache.logging.log4j.Marker" {
import { $Serializable } from "java.io.Serializable"

export interface $Marker extends $Serializable {
"addParents"(...markers: $Marker$$Type[]): $Marker
"equals"(obj: any): boolean
"getName"(): string
"getParents"(): $Marker[]
"hasParents"(): boolean
"hashCode"(): integer
"isInstanceOf"(m: $Marker$$Type): boolean
"isInstanceOf"(name: string): boolean
"remove"(marker: $Marker$$Type): boolean
"setParents"(...markers: $Marker$$Type[]): $Marker
get "name"(): string
get "parents"(): $Marker[]
set "parents"(value: $Marker$$Type[])
}

export namespace $Marker {
const probejs$$marker: never
}
export abstract class $Marker$$Static implements $Marker {
}
}

declare module "org.apache.logging.log4j.util.Supplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Supplier<T = any> {
"get"(): T
}

export namespace $Supplier {
const probejs$$marker: never
}
export abstract class $Supplier$$Static<T = any> implements $Supplier<T> {
}
}

declare module "org.apache.maven.artifact.repository.Authentication" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Authentication {
constructor(string0: string, string1: string)

public "getPassphrase"(): string
public "getPassword"(): string
public "getPrivateKey"(): string
public "getUsername"(): string
public "setPassphrase"(string0: string): void
public "setPassword"(string0: string): void
public "setPrivateKey"(string0: string): void
public "setUsername"(string0: string): void
get "passphrase"(): string
get "password"(): string
get "privateKey"(): string
get "username"(): string
set "passphrase"(value: string)
set "password"(value: string)
set "privateKey"(value: string)
set "username"(value: string)
}
}

declare module "org.apache.logging.log4j.util.MessageSupplier" {
import { $Message } from "org.apache.logging.log4j.message.Message"

export interface $MessageSupplier {
"get"(): $Message
}

export namespace $MessageSupplier {
const probejs$$marker: never
}
export abstract class $MessageSupplier$$Static implements $MessageSupplier {
}
}

declare module "org.apache.commons.math3.analysis.DifferentiableUnivariateFunction" {
import { $UnivariateFunction } from "org.apache.commons.math3.analysis.UnivariateFunction"

/** @deprecated */
export interface $DifferentiableUnivariateFunction extends $UnivariateFunction {
"derivative"(): $UnivariateFunction
"value"(double0: double): double
}

export namespace $DifferentiableUnivariateFunction {
const probejs$$marker: never
}
export abstract class $DifferentiableUnivariateFunction$$Static implements $DifferentiableUnivariateFunction {
}
}

declare module "org.apache.logging.log4j.message.EntryMessage" {
import { $Throwable } from "java.lang.Throwable"
import { $FlowMessage } from "org.apache.logging.log4j.message.FlowMessage"
import { $Message } from "org.apache.logging.log4j.message.Message"

export interface $EntryMessage extends $FlowMessage {
"getFormat"(): string
"getFormattedMessage"(): string
"getMessage"(): $Message
"getParameters"(): any[]
"getText"(): string
"getThrowable"(): $Throwable
get "format"(): string
get "formattedMessage"(): string
get "message"(): $Message
get "parameters"(): any[]
get "text"(): string
get "throwable"(): $Throwable
}

export namespace $EntryMessage {
const probejs$$marker: never
}
export abstract class $EntryMessage$$Static implements $EntryMessage {
}
}

declare module "org.apache.maven.artifact.metadata.ArtifactMetadata" {
import { $ArtifactRepository$$Type } from "org.apache.maven.artifact.repository.ArtifactRepository"
import { $ArtifactMetadata as $ArtifactMetadata$0, $ArtifactMetadata$$Type as $ArtifactMetadata$0$$Type } from "org.apache.maven.repository.legacy.metadata.ArtifactMetadata"

/** @deprecated */
export interface $ArtifactMetadata extends $ArtifactMetadata$0 {
"extendedToString"(): string
"getArtifactId"(): string
"getBaseVersion"(): string
"getGroupId"(): string
"getKey"(): any
"getLocalFilename"(artifactRepository0: $ArtifactRepository$$Type): string
"getRemoteFilename"(): string
"merge"(artifactMetadata0: $ArtifactMetadata$$Type): void
"merge"(artifactMetadata0: $ArtifactMetadata$0$$Type): void
"storeInLocalRepository"(artifactRepository0: $ArtifactRepository$$Type, artifactRepository1: $ArtifactRepository$$Type): void
"storedInArtifactVersionDirectory"(): boolean
"storedInGroupDirectory"(): boolean
get "artifactId"(): string
get "baseVersion"(): string
get "groupId"(): string
get "key"(): any
get "remoteFilename"(): string
}

export namespace $ArtifactMetadata {
const probejs$$marker: never
}
export abstract class $ArtifactMetadata$$Static implements $ArtifactMetadata {
}
}

declare module "org.apache.commons.math3.analysis.differentiation.DerivativeStructure" {
import { $Field } from "org.apache.commons.math3.Field"
import { $RealFieldElement } from "org.apache.commons.math3.RealFieldElement"
import { $Serializable } from "java.io.Serializable"

export class $DerivativeStructure implements $RealFieldElement<$DerivativeStructure>, $Serializable {
constructor(int0: integer, int1: integer, ...double2s: double[])
constructor(double0: double, derivativeStructure1: $DerivativeStructure$$Type, double2: double, derivativeStructure3: $DerivativeStructure$$Type, double4: double, derivativeStructure5: $DerivativeStructure$$Type, double6: double, derivativeStructure7: $DerivativeStructure$$Type)
constructor(double0: double, derivativeStructure1: $DerivativeStructure$$Type, double2: double, derivativeStructure3: $DerivativeStructure$$Type, double4: double, derivativeStructure5: $DerivativeStructure$$Type)
constructor(int0: integer, int1: integer)
constructor(int0: integer, int1: integer, double2: double)
constructor(int0: integer, int1: integer, int2: integer, double3: double)
constructor(double0: double, derivativeStructure1: $DerivativeStructure$$Type, double2: double, derivativeStructure3: $DerivativeStructure$$Type)

public "abs"(): $DerivativeStructure
public "acos"(): $DerivativeStructure
public "add"(double0: double): $DerivativeStructure
public "add"(derivativeStructure0: $DerivativeStructure$$Type): $DerivativeStructure
public static "atan2"(derivativeStructure0: $DerivativeStructure$$Type, derivativeStructure1: $DerivativeStructure$$Type): $DerivativeStructure
public "atan2"(derivativeStructure0: $DerivativeStructure$$Type): $DerivativeStructure
public "atanh"(): $DerivativeStructure
public "compose"(...double0s: double[]): $DerivativeStructure
public "copySign"(derivativeStructure0: $DerivativeStructure$$Type): $DerivativeStructure
public "cosh"(): $DerivativeStructure
public "createConstant"(double0: double): $DerivativeStructure
public "divide"(double0: double): $DerivativeStructure
public "divide"(derivativeStructure0: $DerivativeStructure$$Type): $DerivativeStructure
public "floor"(): $DerivativeStructure
public "getAllDerivatives"(): double[]
public "getExponent"(): integer
public "getField"(): $Field<$DerivativeStructure>
public "getFreeParameters"(): integer
public "getOrder"(): integer
public "getPartialDerivative"(...int0s: integer[]): double
public "getReal"(): double
public "getValue"(): double
public static "hypot"(derivativeStructure0: $DerivativeStructure$$Type, derivativeStructure1: $DerivativeStructure$$Type): $DerivativeStructure
public "hypot"(derivativeStructure0: $DerivativeStructure$$Type): $DerivativeStructure
public "linearCombination"(derivativeStructure0: $DerivativeStructure$$Type, derivativeStructure1: $DerivativeStructure$$Type, derivativeStructure2: $DerivativeStructure$$Type, derivativeStructure3: $DerivativeStructure$$Type): $DerivativeStructure
public "linearCombination"(double0: double, derivativeStructure1: $DerivativeStructure$$Type, double2: double, derivativeStructure3: $DerivativeStructure$$Type): $DerivativeStructure
public "linearCombination"(double0s: double[], derivativeStructure1s: $DerivativeStructure$$Type[]): $DerivativeStructure
public "linearCombination"(derivativeStructure0: $DerivativeStructure$$Type, derivativeStructure1: $DerivativeStructure$$Type, derivativeStructure2: $DerivativeStructure$$Type, derivativeStructure3: $DerivativeStructure$$Type, derivativeStructure4: $DerivativeStructure$$Type, derivativeStructure5: $DerivativeStructure$$Type): $DerivativeStructure
public "linearCombination"(double0: double, derivativeStructure1: $DerivativeStructure$$Type, double2: double, derivativeStructure3: $DerivativeStructure$$Type, double4: double, derivativeStructure5: $DerivativeStructure$$Type): $DerivativeStructure
public "linearCombination"(derivativeStructure0s: $DerivativeStructure$$Type[], derivativeStructure1s: $DerivativeStructure$$Type[]): $DerivativeStructure
public "linearCombination"(derivativeStructure0: $DerivativeStructure$$Type, derivativeStructure1: $DerivativeStructure$$Type, derivativeStructure2: $DerivativeStructure$$Type, derivativeStructure3: $DerivativeStructure$$Type, derivativeStructure4: $DerivativeStructure$$Type, derivativeStructure5: $DerivativeStructure$$Type, derivativeStructure6: $DerivativeStructure$$Type, derivativeStructure7: $DerivativeStructure$$Type): $DerivativeStructure
public "linearCombination"(double0: double, derivativeStructure1: $DerivativeStructure$$Type, double2: double, derivativeStructure3: $DerivativeStructure$$Type, double4: double, derivativeStructure5: $DerivativeStructure$$Type, double6: double, derivativeStructure7: $DerivativeStructure$$Type): $DerivativeStructure
public "log"(): $DerivativeStructure
public "log10"(): $DerivativeStructure
public "multiply"(derivativeStructure0: $DerivativeStructure$$Type): $DerivativeStructure
public "pow"(int0: integer): $DerivativeStructure
public "pow"(derivativeStructure0: $DerivativeStructure$$Type): $DerivativeStructure
public static "pow"(double0: double, derivativeStructure1: $DerivativeStructure$$Type): $DerivativeStructure
public "reciprocal"(): $DerivativeStructure
public "remainder"(derivativeStructure0: $DerivativeStructure$$Type): $DerivativeStructure
public "rint"(): $DerivativeStructure
public "rootN"(int0: integer): $DerivativeStructure
public "round"(): long
public "scalb"(int0: integer): $DerivativeStructure
public "signum"(): $DerivativeStructure
public "sin"(): $DerivativeStructure
public "subtract"(double0: double): $DerivativeStructure
public "subtract"(derivativeStructure0: $DerivativeStructure$$Type): $DerivativeStructure
public "taylor"(...double0s: double[]): double
public "toDegrees"(): $DerivativeStructure
public "toRadians"(): $DerivativeStructure
get "allDerivatives"(): double[]
get "exponent"(): integer
get "field"(): $Field<$DerivativeStructure>
get "freeParameters"(): integer
get "order"(): integer
get "real"(): double
get "value"(): double
}
}

declare module "org.apache.logging.log4j.message.FlowMessage" {
import { $Throwable } from "java.lang.Throwable"
import { $Message } from "org.apache.logging.log4j.message.Message"

export interface $FlowMessage extends $Message {
"getFormat"(): string
"getFormattedMessage"(): string
"getMessage"(): $Message
"getParameters"(): any[]
"getText"(): string
"getThrowable"(): $Throwable
get "format"(): string
get "formattedMessage"(): string
get "message"(): $Message
get "parameters"(): any[]
get "text"(): string
get "throwable"(): $Throwable
}

export namespace $FlowMessage {
const probejs$$marker: never
}
export abstract class $FlowMessage$$Static implements $FlowMessage {
}
}

declare module "org.apache.maven.artifact.repository.ArtifactRepositoryPolicy" {
import { $Date$$Type } from "java.util.Date"

export class $ArtifactRepositoryPolicy {
static readonly "CHECKSUM_POLICY_FAIL": string
static readonly "CHECKSUM_POLICY_IGNORE": string
static readonly "CHECKSUM_POLICY_WARN": string
static readonly "UPDATE_POLICY_ALWAYS": string
static readonly "UPDATE_POLICY_DAILY": string
static readonly "UPDATE_POLICY_INTERVAL": string
static readonly "UPDATE_POLICY_NEVER": string

constructor()
constructor(artifactRepositoryPolicy0: $ArtifactRepositoryPolicy$$Type)
constructor(boolean0: boolean, string1: string, string2: string)

public "checkOutOfDate"(date0: $Date$$Type): boolean
public "getChecksumPolicy"(): string
public "getUpdatePolicy"(): string
public "isEnabled"(): boolean
public "merge"(artifactRepositoryPolicy0: $ArtifactRepositoryPolicy$$Type): void
public "setChecksumPolicy"(string0: string): void
public "setEnabled"(boolean0: boolean): void
public "setUpdatePolicy"(string0: string): void
get "checksumPolicy"(): string
get "updatePolicy"(): string
get "enabled"(): boolean
set "checksumPolicy"(value: string)
set "enabled"(value: boolean)
set "updatePolicy"(value: string)
}
}

declare module "org.apache.commons.math3.analysis.polynomials.PolynomialFunction" {
import { $DifferentiableUnivariateFunction } from "org.apache.commons.math3.analysis.DifferentiableUnivariateFunction"
import { $UnivariateFunction } from "org.apache.commons.math3.analysis.UnivariateFunction"
import { $UnivariateDifferentiableFunction } from "org.apache.commons.math3.analysis.differentiation.UnivariateDifferentiableFunction"
import { $DerivativeStructure, $DerivativeStructure$$Type } from "org.apache.commons.math3.analysis.differentiation.DerivativeStructure"
import { $Serializable } from "java.io.Serializable"

export class $PolynomialFunction implements $UnivariateDifferentiableFunction, $DifferentiableUnivariateFunction, $Serializable {
constructor(double0s: double[])

public "add"(polynomialFunction0: $PolynomialFunction$$Type): $PolynomialFunction
public "degree"(): integer
public "derivative"(): $UnivariateFunction
public "getCoefficients"(): double[]
public "multiply"(polynomialFunction0: $PolynomialFunction$$Type): $PolynomialFunction
public "negate"(): $PolynomialFunction
public "polynomialDerivative"(): $PolynomialFunction
public "subtract"(polynomialFunction0: $PolynomialFunction$$Type): $PolynomialFunction
public "value"(double0: double): double
public "value"(derivativeStructure0: $DerivativeStructure$$Type): $DerivativeStructure
get "coefficients"(): double[]
}
}

declare module "org.apache.commons.math3.analysis.differentiation.UnivariateDifferentiableFunction" {
import { $UnivariateFunction } from "org.apache.commons.math3.analysis.UnivariateFunction"
import { $DerivativeStructure, $DerivativeStructure$$Type } from "org.apache.commons.math3.analysis.differentiation.DerivativeStructure"

export interface $UnivariateDifferentiableFunction extends $UnivariateFunction {
"value"(derivativeStructure0: $DerivativeStructure$$Type): $DerivativeStructure
"value"(double0: double): double
}

export namespace $UnivariateDifferentiableFunction {
const probejs$$marker: never
}
export abstract class $UnivariateDifferentiableFunction$$Static implements $UnivariateDifferentiableFunction {
}
}

declare module "org.apache.commons.lang3.tuple.Pair" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Comparator, $Comparator$$Type } from "java.util.Comparator"
import { $Serializable } from "java.io.Serializable"

export class $Pair<L = any, R = any> implements $Map$Entry<L, R>, $Comparable<$Pair<L, R>>, $Serializable {
static readonly "EMPTY_ARRAY": $Pair<any, any>[]

constructor()

public "compareTo"(pair0: $Pair$$Type<L, R>): integer
public static "comparingByKey"<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
public static "comparingByKey"<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
public static "comparingByValue"<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
public static "comparingByValue"<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
public static "copyOf"<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
public static "emptyArray"<L, R>(): $Pair<L, R>[]
public "getKey"(): L
public "getLeft"(): L
public "getRight"(): R
public "getValue"(): R
public static "of"<L, R>(l0: L, r1: R): $Pair<L, R>
public static "of"<L, R>(entry0: $Map$Entry$$Type<L, R>): $Pair<L, R>
public "setValue"(r0: R): R
public "toString"(string0: string): string
get "key"(): L
get "left"(): L
get "right"(): R
get "value"(): R
set "value"(value: R)
}
}

declare module "org.apache.maven.repository.legacy.metadata.ArtifactMetadata" {
import { $ArtifactRepository$$Type } from "org.apache.maven.artifact.repository.ArtifactRepository"

export interface $ArtifactMetadata {
"extendedToString"(): string
"getArtifactId"(): string
"getBaseVersion"(): string
"getGroupId"(): string
"getKey"(): any
"getLocalFilename"(artifactRepository0: $ArtifactRepository$$Type): string
"getRemoteFilename"(): string
"merge"(artifactMetadata0: $ArtifactMetadata$$Type): void
"storeInLocalRepository"(artifactRepository0: $ArtifactRepository$$Type, artifactRepository1: $ArtifactRepository$$Type): void
"storedInArtifactVersionDirectory"(): boolean
"storedInGroupDirectory"(): boolean
get "artifactId"(): string
get "baseVersion"(): string
get "groupId"(): string
get "key"(): any
get "remoteFilename"(): string
}

export namespace $ArtifactMetadata {
const probejs$$marker: never
}
export abstract class $ArtifactMetadata$$Static implements $ArtifactMetadata {
}
}

declare module "org.apache.commons.lang3.tuple.MutablePair" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Pair } from "org.apache.commons.lang3.tuple.Pair"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Comparator, $Comparator$$Type } from "java.util.Comparator"

export class $MutablePair<L = any, R = any> extends $Pair<L, R> {
static readonly "EMPTY_ARRAY": $MutablePair<any, any>[]

constructor(l0: L, r1: R)
constructor()

public static "comparingByKey"<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
public static "comparingByKey"<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
public static "comparingByValue"<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
public static "comparingByValue"<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
public static "copyOf"<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
public static "emptyArray"<L, R>(): $MutablePair<L, R>[]
public "getLeft"(): L
public "getRight"(): R
public static "of"<L, R>(l0: L, r1: R): $MutablePair<L, R>
public static "of"<L, R>(entry0: $Map$Entry$$Type<L, R>): $MutablePair<L, R>
public "setLeft"(l0: L): void
public "setRight"(r0: R): void
public "setValue"(r0: R): R
get "left"(): L
set "left"(value: L)
get "right"(): R
set "right"(value: R)
set "value"(value: R)
}
}

declare module "org.apache.maven.artifact.versioning.ArtifactVersion" {
import { $Comparable } from "java.lang.Comparable"

export interface $ArtifactVersion extends $Comparable<$ArtifactVersion> {
"compareTo"(artifactVersion0: $ArtifactVersion$$Type): integer
"getBuildNumber"(): integer
"getIncrementalVersion"(): integer
"getMajorVersion"(): integer
"getMinorVersion"(): integer
"getQualifier"(): string
"parseVersion"(string0: string): void
get "buildNumber"(): integer
get "incrementalVersion"(): integer
get "majorVersion"(): integer
get "minorVersion"(): integer
get "qualifier"(): string
}

export namespace $ArtifactVersion {
const probejs$$marker: never
}
export abstract class $ArtifactVersion$$Static implements $ArtifactVersion {
}
}

declare module "org.apache.commons.math3.RealFieldElement" {
import { $Field } from "org.apache.commons.math3.Field"
import { $FieldElement } from "org.apache.commons.math3.FieldElement"

export interface $RealFieldElement<T = any> extends $FieldElement<T> {
"abs"(): T
"acos"(): T
"acosh"(): T
"add"(double0: double): T
"add"(t0: T): T
"asin"(): T
"asinh"(): T
"atan"(): T
"atan2"(t0: T): T
"atanh"(): T
"cbrt"(): T
"ceil"(): T
"copySign"(t0: T): T
"copySign"(double0: double): T
"cos"(): T
"cosh"(): T
"divide"(double0: double): T
"divide"(t0: T): T
"exp"(): T
"expm1"(): T
"floor"(): T
"getField"(): $Field<T>
"getReal"(): double
"hypot"(t0: T): T
"linearCombination"(double0: double, t1: T, double2: double, t3: T, double4: double, t5: T): T
"linearCombination"(t0: T, t1: T, t2: T, t3: T, t4: T, t5: T, t6: T, t7: T): T
"linearCombination"(double0: double, t1: T, double2: double, t3: T, double4: double, t5: T, double6: double, t7: T): T
"linearCombination"(t0s: T[], t1s: T[]): T
"linearCombination"(t0: T, t1: T, t2: T, t3: T): T
"linearCombination"(double0s: double[], t1s: T[]): T
"linearCombination"(double0: double, t1: T, double2: double, t3: T): T
"linearCombination"(t0: T, t1: T, t2: T, t3: T, t4: T, t5: T): T
"log"(): T
"log1p"(): T
"multiply"(double0: double): T
"multiply"(t0: T): T
"multiply"(int0: integer): T
"negate"(): T
"pow"(int0: integer): T
"pow"(t0: T): T
"pow"(double0: double): T
"reciprocal"(): T
"remainder"(double0: double): T
"remainder"(t0: T): T
"rint"(): T
"rootN"(int0: integer): T
"round"(): long
"scalb"(int0: integer): T
"signum"(): T
"sin"(): T
"sinh"(): T
"sqrt"(): T
"subtract"(double0: double): T
"subtract"(t0: T): T
"tan"(): T
"tanh"(): T
get "field"(): $Field<T>
get "real"(): double
}

export namespace $RealFieldElement {
const probejs$$marker: never
}
export abstract class $RealFieldElement$$Static<T = any> implements $RealFieldElement<T> {
}
}

declare module "org.apache.commons.math3.analysis.UnivariateFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $UnivariateFunction {
"value"(double0: double): double
}

export namespace $UnivariateFunction {
const probejs$$marker: never
}
export abstract class $UnivariateFunction$$Static implements $UnivariateFunction {
}
}

declare module "org.apache.commons.math3.FieldElement" {
import { $Field } from "org.apache.commons.math3.Field"

export interface $FieldElement<T = any> {
"add"(t0: T): T
"divide"(t0: T): T
"getField"(): $Field<T>
"multiply"(t0: T): T
"multiply"(int0: integer): T
"negate"(): T
"reciprocal"(): T
"subtract"(t0: T): T
get "field"(): $Field<T>
}

export namespace $FieldElement {
const probejs$$marker: never
}
export abstract class $FieldElement$$Static<T = any> implements $FieldElement<T> {
}
}

declare module "org.apache.commons.lang3.mutable.MutableInt" {
import { $Mutable } from "org.apache.commons.lang3.mutable.Mutable"
import { $Comparable } from "java.lang.Comparable"
import { $Number } from "java.lang.Number"

export class $MutableInt extends $Number implements $Comparable<$MutableInt>, $Mutable<number> {
constructor()
constructor(string0: string)
constructor(int0: integer)
constructor(number0: number)

public "add"(int0: integer): void
public "add"(number0: number): void
public "addAndGet"(number0: number): integer
public "addAndGet"(int0: integer): integer
public "compareTo"(mutableInt0: $MutableInt$$Type): integer
public "decrement"(): void
public "decrementAndGet"(): integer
public "getAndAdd"(number0: number): integer
public "getAndAdd"(int0: integer): integer
public "getAndDecrement"(): integer
public "getAndIncrement"(): integer
public "increment"(): void
public "incrementAndGet"(): integer
public "setValue"(int0: integer): void
public "setValue"(number0: number): void
public "subtract"(int0: integer): void
public "subtract"(number0: number): void
public "toInteger"(): integer
get "andDecrement"(): integer
get "andIncrement"(): integer
set "value"(value: integer)
set "value"(value: number)
}
}

declare module "org.apache.commons.lang3.function.TriFunction" {
import { $Function$$Type } from "java.util.function.Function"

export interface $TriFunction<T = any, U = any, V = any, R = any> {
"andThen"<W>(function0: $Function$$Type<R, W>): $TriFunction<T, U, V, W>
"apply"(t0: T, u1: U, v2: V): R
}

export namespace $TriFunction {
const probejs$$marker: never
}
export abstract class $TriFunction$$Static<T = any, U = any, V = any, R = any> implements $TriFunction<T, U, V, R> {
}
}

declare module "org.apache.maven.artifact.resolver.filter.ArtifactFilter" {
import { $Artifact$$Type } from "org.apache.maven.artifact.Artifact"

export interface $ArtifactFilter {
"include"(artifact0: $Artifact$$Type): boolean
}

export namespace $ArtifactFilter {
const probejs$$marker: never
}
export abstract class $ArtifactFilter$$Static implements $ArtifactFilter {
}
}

declare module "org.apache.logging.log4j.Level" {
import { $StandardLevel } from "org.apache.logging.log4j.spi.StandardLevel"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $Comparable } from "java.lang.Comparable"
import { $Serializable } from "java.io.Serializable"

export class $Level implements $Comparable<$Level>, $Serializable {
static readonly "ALL": $Level
static readonly "CATEGORY": string
static readonly "DEBUG": $Level
static readonly "ERROR": $Level
static readonly "FATAL": $Level
static readonly "INFO": $Level
static readonly "OFF": $Level
static readonly "TRACE": $Level
static readonly "WARN": $Level

public "clone"(): $Level
public "compareTo"(other: $Level$$Type): integer
public static "forName"(name: string, intValue: integer): $Level
public "getDeclaringClass"(): $Class<$Level>
public static "getLevel"(name: string): $Level
public "getStandardLevel"(): $StandardLevel
public "intLevel"(): integer
public "isInRange"(minLevel: $Level$$Type, maxLevel: $Level$$Type): boolean
public "isLessSpecificThan"(level: $Level$$Type): boolean
public "isMoreSpecificThan"(level: $Level$$Type): boolean
public "name"(): string
public static "toLevel"(name: string, defaultLevel: $Level$$Type): $Level
public static "toLevel"(level: string): $Level
public static "valueOf"<T extends $Enum<T>>(enumType: $Class$$Type<T>, name: string): T
public static "valueOf"(name: string): $Level
public static "values"(): $Level[]
get "declaringClass"(): $Class<$Level>
get "standardLevel"(): $StandardLevel
}
}

declare module "org.apache.logging.log4j.Logger" {
import { $Throwable, $Throwable$$Type } from "java.lang.Throwable"
import { $MessageFactory, $MessageFactory$$Type } from "org.apache.logging.log4j.message.MessageFactory"
import { $MessageSupplier$$Type } from "org.apache.logging.log4j.util.MessageSupplier"
import { $Message$$Type } from "org.apache.logging.log4j.message.Message"
import { $Supplier$$Type } from "org.apache.logging.log4j.util.Supplier"
import { $Level, $Level$$Type } from "org.apache.logging.log4j.Level"
import { $LogBuilder } from "org.apache.logging.log4j.LogBuilder"
import { $StackTraceElement$$Type } from "java.lang.StackTraceElement"
import { $Marker$$Type } from "org.apache.logging.log4j.Marker"
import { $EntryMessage, $EntryMessage$$Type } from "org.apache.logging.log4j.message.EntryMessage"

export interface $Logger {
"always"(): $LogBuilder
"atDebug"(): $LogBuilder
"atError"(): $LogBuilder
"atFatal"(): $LogBuilder
"atInfo"(): $LogBuilder
"atLevel"(level: $Level$$Type): $LogBuilder
"atTrace"(): $LogBuilder
"atWarn"(): $LogBuilder
"catching"(throwable: $Throwable$$Type): void
"catching"(level: $Level$$Type, throwable: $Throwable$$Type): void
"debug"(message: $Message$$Type): void
"debug"(messageSupplier: $MessageSupplier$$Type): void
"debug"(message: $Message$$Type, throwable: $Throwable$$Type): void
"debug"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<any>, throwable: $Throwable$$Type): void
"debug"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<any>): void
"debug"(marker: $Marker$$Type, message: string, throwable: $Throwable$$Type): void
"debug"(message: string): void
"debug"(message: any, throwable: $Throwable$$Type): void
"debug"(message: any): void
"debug"(message: charseq, throwable: $Throwable$$Type): void
"debug"(message: charseq): void
"debug"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
"debug"(marker: $Marker$$Type, message: charseq): void
"debug"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
"debug"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
"debug"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
"debug"(marker: $Marker$$Type, message: $Message$$Type): void
"debug"(message: string, p0: any): void
"debug"(marker: $Marker$$Type, message: string, ...paramSuppliers: $Supplier$$Type<any>[]): void
"debug"(marker: $Marker$$Type, message: string, ...params: any[]): void
"debug"(marker: $Marker$$Type, message: string): void
"debug"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
"debug"(marker: $Marker$$Type, message: any): void
"debug"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
"debug"(message: string, p0: any, p1: any, p2: any, p3: any): void
"debug"(message: string, p0: any, p1: any, p2: any): void
"debug"(message: string, p0: any, p1: any): void
"debug"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
"debug"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
"debug"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
"debug"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
"debug"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
"debug"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
"debug"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
"debug"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
"debug"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
"debug"(marker: $Marker$$Type, message: string, p0: any): void
"debug"(messageSupplier: $Supplier$$Type<any>, throwable: $Throwable$$Type): void
"debug"(messageSupplier: $Supplier$$Type<any>): void
"debug"(message: string, throwable: $Throwable$$Type): void
"debug"(message: string, ...paramSuppliers: $Supplier$$Type<any>[]): void
"debug"(message: string, ...params: any[]): void
"debug"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
"debug"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
"debug"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
"debug"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
"debug"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any): void
"debug"(marker: $Marker$$Type, message: string, p0: any, p1: any): void
/** @deprecated */
"entry"(): void
/** @deprecated */
"entry"(...params: any[]): void
"error"(messageSupplier: $MessageSupplier$$Type): void
"error"(message: $Message$$Type, throwable: $Throwable$$Type): void
"error"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
"error"(message: $Message$$Type): void
"error"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<any>, throwable: $Throwable$$Type): void
"error"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<any>): void
"error"(message: string, ...params: any[]): void
"error"(message: string): void
"error"(message: any, throwable: $Throwable$$Type): void
"error"(message: any): void
"error"(message: charseq, throwable: $Throwable$$Type): void
"error"(message: charseq): void
"error"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
"error"(marker: $Marker$$Type, message: charseq): void
"error"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
"error"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
"error"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
"error"(marker: $Marker$$Type, message: $Message$$Type): void
"error"(marker: $Marker$$Type, message: string, throwable: $Throwable$$Type): void
"error"(marker: $Marker$$Type, message: string, ...paramSuppliers: $Supplier$$Type<any>[]): void
"error"(marker: $Marker$$Type, message: string, ...params: any[]): void
"error"(marker: $Marker$$Type, message: string): void
"error"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
"error"(marker: $Marker$$Type, message: any): void
"error"(message: string, p0: any, p1: any, p2: any, p3: any): void
"error"(message: string, p0: any, p1: any): void
"error"(message: string, p0: any): void
"error"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
"error"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
"error"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
"error"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
"error"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
"error"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
"error"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
"error"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
"error"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
"error"(marker: $Marker$$Type, message: string, p0: any, p1: any): void
"error"(marker: $Marker$$Type, message: string, p0: any): void
"error"(messageSupplier: $Supplier$$Type<any>, throwable: $Throwable$$Type): void
"error"(messageSupplier: $Supplier$$Type<any>): void
"error"(message: string, throwable: $Throwable$$Type): void
"error"(message: string, ...paramSuppliers: $Supplier$$Type<any>[]): void
"error"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
"error"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
"error"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
"error"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
"error"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any): void
"error"(message: string, p0: any, p1: any, p2: any): void
/** @deprecated */
"exit"(): void
/** @deprecated */
"exit"<R>(result: R): R
"fatal"(marker: $Marker$$Type, message: string, p0: any): void
"fatal"(messageSupplier: $Supplier$$Type<any>, throwable: $Throwable$$Type): void
"fatal"(messageSupplier: $Supplier$$Type<any>): void
"fatal"(marker: $Marker$$Type, message: string, p0: any, p1: any): void
"fatal"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
"fatal"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any): void
"fatal"(message: string, ...params: any[]): void
"fatal"(message: any, throwable: $Throwable$$Type): void
"fatal"(message: any): void
"fatal"(message: string): void
"fatal"(message: string, ...paramSuppliers: $Supplier$$Type<any>[]): void
"fatal"(message: string, throwable: $Throwable$$Type): void
"fatal"(message: string, p0: any): void
"fatal"(message: string, p0: any, p1: any): void
"fatal"(message: string, p0: any, p1: any, p2: any): void
"fatal"(message: string, p0: any, p1: any, p2: any, p3: any): void
"fatal"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
"fatal"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
"fatal"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
"fatal"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
"fatal"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
"fatal"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
"fatal"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
"fatal"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
"fatal"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
"fatal"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
"fatal"(marker: $Marker$$Type, message: charseq): void
"fatal"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
"fatal"(marker: $Marker$$Type, message: any): void
"fatal"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
"fatal"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
"fatal"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
"fatal"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
"fatal"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
"fatal"(marker: $Marker$$Type, message: $Message$$Type): void
"fatal"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
"fatal"(message: $Message$$Type): void
"fatal"(message: $Message$$Type, throwable: $Throwable$$Type): void
"fatal"(messageSupplier: $MessageSupplier$$Type): void
"fatal"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
"fatal"(message: charseq): void
"fatal"(message: charseq, throwable: $Throwable$$Type): void
"fatal"(marker: $Marker$$Type, message: string): void
"fatal"(marker: $Marker$$Type, message: string, ...params: any[]): void
"fatal"(marker: $Marker$$Type, message: string, ...paramSuppliers: $Supplier$$Type<any>[]): void
"fatal"(marker: $Marker$$Type, message: string, throwable: $Throwable$$Type): void
"fatal"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<any>): void
"fatal"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<any>, throwable: $Throwable$$Type): void
"getLevel"(): $Level
"getMessageFactory"<MF extends $MessageFactory>(): MF
"getName"(): string
"info"(marker: $Marker$$Type, message: any): void
"info"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
"info"(marker: $Marker$$Type, message: charseq): void
"info"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
"info"(marker: $Marker$$Type, message: string): void
"info"(marker: $Marker$$Type, message: $Message$$Type): void
"info"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
"info"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
"info"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
"info"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<any>, throwable: $Throwable$$Type): void
"info"(message: string, p0: any): void
"info"(message: $Message$$Type): void
"info"(message: $Message$$Type, throwable: $Throwable$$Type): void
"info"(marker: $Marker$$Type, message: string, ...params: any[]): void
"info"(marker: $Marker$$Type, message: string, ...paramSuppliers: $Supplier$$Type<any>[]): void
"info"(marker: $Marker$$Type, message: string, throwable: $Throwable$$Type): void
"info"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<any>): void
"info"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
"info"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
"info"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
"info"(message: string, p0: any, p1: any, p2: any, p3: any): void
"info"(message: string, p0: any, p1: any, p2: any): void
"info"(marker: $Marker$$Type, message: string, p0: any, p1: any): void
"info"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
"info"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
"info"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
"info"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
"info"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
"info"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
"info"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
"info"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
"info"(message: string, p0: any, p1: any): void
"info"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any): void
"info"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
"info"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
"info"(message: string, ...params: any[]): void
"info"(message: string): void
"info"(message: any): void
"info"(message: charseq, throwable: $Throwable$$Type): void
"info"(message: string, ...paramSuppliers: $Supplier$$Type<any>[]): void
"info"(message: string, throwable: $Throwable$$Type): void
"info"(messageSupplier: $Supplier$$Type<any>): void
"info"(messageSupplier: $MessageSupplier$$Type): void
"info"(message: any, throwable: $Throwable$$Type): void
"info"(messageSupplier: $Supplier$$Type<any>, throwable: $Throwable$$Type): void
"info"(marker: $Marker$$Type, message: string, p0: any): void
"info"(message: charseq): void
"info"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
"isDebugEnabled"(marker: $Marker$$Type): boolean
"isDebugEnabled"(): boolean
"isEnabled"(level: $Level$$Type, marker: $Marker$$Type): boolean
"isEnabled"(level: $Level$$Type): boolean
"isErrorEnabled"(marker: $Marker$$Type): boolean
"isErrorEnabled"(): boolean
"isFatalEnabled"(marker: $Marker$$Type): boolean
"isFatalEnabled"(): boolean
"isInfoEnabled"(marker: $Marker$$Type): boolean
"isInfoEnabled"(): boolean
"isTraceEnabled"(marker: $Marker$$Type): boolean
"isTraceEnabled"(): boolean
"isWarnEnabled"(marker: $Marker$$Type): boolean
"isWarnEnabled"(): boolean
"log"(level: $Level$$Type, message: $Message$$Type): void
"log"(level: $Level$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
"log"(level: $Level$$Type, messageSupplier: $MessageSupplier$$Type): void
"log"(level: $Level$$Type, marker: $Marker$$Type, messageSupplier: $Supplier$$Type<any>, throwable: $Throwable$$Type): void
"log"(level: $Level$$Type, marker: $Marker$$Type, messageSupplier: $Supplier$$Type<any>): void
"log"(level: $Level$$Type, message: any): void
"log"(level: $Level$$Type, message: charseq, throwable: $Throwable$$Type): void
"log"(level: $Level$$Type, message: charseq): void
"log"(level: $Level$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
"log"(level: $Level$$Type, marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
"log"(level: $Level$$Type, marker: $Marker$$Type, message: any): void
"log"(level: $Level$$Type, marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
"log"(level: $Level$$Type, marker: $Marker$$Type, message: charseq): void
"log"(level: $Level$$Type, marker: $Marker$$Type, message: string, throwable: $Throwable$$Type): void
"log"(level: $Level$$Type, marker: $Marker$$Type, message: string, ...paramSuppliers: $Supplier$$Type<any>[]): void
"log"(level: $Level$$Type, marker: $Marker$$Type, message: string, ...params: any[]): void
"log"(level: $Level$$Type, marker: $Marker$$Type, message: string): void
"log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
"log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
"log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any): void
"log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any, p1: any): void
"log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
"log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
"log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
"log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
"log"(level: $Level$$Type, message: string, ...paramSuppliers: $Supplier$$Type<any>[]): void
"log"(level: $Level$$Type, message: string, ...params: any[]): void
"log"(level: $Level$$Type, message: string): void
"log"(level: $Level$$Type, message: any, throwable: $Throwable$$Type): void
"log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any): void
"log"(level: $Level$$Type, messageSupplier: $Supplier$$Type<any>, throwable: $Throwable$$Type): void
"log"(level: $Level$$Type, messageSupplier: $Supplier$$Type<any>): void
"log"(level: $Level$$Type, message: string, throwable: $Throwable$$Type): void
"log"(level: $Level$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
"log"(level: $Level$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
"log"(level: $Level$$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
"log"(level: $Level$$Type, message: string, p0: any, p1: any, p2: any): void
"log"(level: $Level$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
"log"(level: $Level$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
"log"(level: $Level$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
"log"(level: $Level$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
"log"(level: $Level$$Type, marker: $Marker$$Type, message: $Message$$Type): void
"log"(level: $Level$$Type, marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
"log"(level: $Level$$Type, marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
"log"(level: $Level$$Type, marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
"log"(level: $Level$$Type, message: string, p0: any, p1: any): void
"log"(level: $Level$$Type, message: string, p0: any): void
"log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
"logMessage"(level: $Level$$Type, marker: $Marker$$Type, fqcn: string, location: $StackTraceElement$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
"printf"(level: $Level$$Type, format: string, ...params: any[]): void
"printf"(level: $Level$$Type, marker: $Marker$$Type, format: string, ...params: any[]): void
"throwing"<T extends $Throwable>(throwable: T): T
"throwing"<T extends $Throwable>(level: $Level$$Type, throwable: T): T
"trace"(message: string, p0: any, p1: any, p2: any, p3: any): void
"trace"(message: string, p0: any, p1: any, p2: any): void
"trace"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
"trace"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
"trace"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
"trace"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
"trace"(message: string, p0: any): void
"trace"(message: string, p0: any, p1: any): void
"trace"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
"trace"(marker: $Marker$$Type, message: $Message$$Type): void
"trace"(messageSupplier: $MessageSupplier$$Type): void
"trace"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
"trace"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
"trace"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
"trace"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
"trace"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
"trace"(message: $Message$$Type, throwable: $Throwable$$Type): void
"trace"(message: $Message$$Type): void
"trace"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<any>, throwable: $Throwable$$Type): void
"trace"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<any>): void
"trace"(message: charseq, throwable: $Throwable$$Type): void
"trace"(message: charseq): void
"trace"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
"trace"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
"trace"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
"trace"(marker: $Marker$$Type, message: any): void
"trace"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
"trace"(marker: $Marker$$Type, message: charseq): void
"trace"(marker: $Marker$$Type, message: string, throwable: $Throwable$$Type): void
"trace"(marker: $Marker$$Type, message: string, ...paramSuppliers: $Supplier$$Type<any>[]): void
"trace"(marker: $Marker$$Type, message: string, ...params: any[]): void
"trace"(marker: $Marker$$Type, message: string): void
"trace"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
"trace"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any): void
"trace"(marker: $Marker$$Type, message: string, p0: any, p1: any): void
"trace"(marker: $Marker$$Type, message: string, p0: any): void
"trace"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
"trace"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
"trace"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
"trace"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
"trace"(message: string, ...params: any[]): void
"trace"(message: string): void
"trace"(message: any, throwable: $Throwable$$Type): void
"trace"(message: any): void
"trace"(messageSupplier: $Supplier$$Type<any>, throwable: $Throwable$$Type): void
"trace"(messageSupplier: $Supplier$$Type<any>): void
"trace"(message: string, throwable: $Throwable$$Type): void
"trace"(message: string, ...paramSuppliers: $Supplier$$Type<any>[]): void
"traceEntry"(): $EntryMessage
"traceEntry"(format: string, ...params: any[]): $EntryMessage
"traceEntry"(message: $Message$$Type): $EntryMessage
"traceEntry"(format: string, ...paramSuppliers: $Supplier$$Type<any>[]): $EntryMessage
"traceEntry"(...paramSuppliers: $Supplier$$Type<any>[]): $EntryMessage
"traceExit"(message: $EntryMessage$$Type): void
"traceExit"<R>(message: $EntryMessage$$Type, result: R): R
"traceExit"<R>(message: $Message$$Type, result: R): R
"traceExit"(): void
"traceExit"<R>(result: R): R
"traceExit"<R>(format: string, result: R): R
"warn"(message: string, p0: any): void
"warn"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
"warn"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
"warn"(message: string, p0: any, p1: any): void
"warn"(message: string, p0: any, p1: any, p2: any): void
"warn"(message: string, p0: any, p1: any, p2: any, p3: any): void
"warn"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any): void
"warn"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
"warn"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
"warn"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
"warn"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
"warn"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
"warn"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
"warn"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
"warn"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
"warn"(marker: $Marker$$Type, message: $Message$$Type): void
"warn"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
"warn"(marker: $Marker$$Type, message: charseq): void
"warn"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
"warn"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
"warn"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
"warn"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
"warn"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
"warn"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
"warn"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<any>): void
"warn"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<any>, throwable: $Throwable$$Type): void
"warn"(message: $Message$$Type): void
"warn"(message: $Message$$Type, throwable: $Throwable$$Type): void
"warn"(messageSupplier: $MessageSupplier$$Type): void
"warn"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
"warn"(marker: $Marker$$Type, message: string): void
"warn"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
"warn"(marker: $Marker$$Type, message: any): void
"warn"(marker: $Marker$$Type, message: string, ...params: any[]): void
"warn"(marker: $Marker$$Type, message: string, ...paramSuppliers: $Supplier$$Type<any>[]): void
"warn"(marker: $Marker$$Type, message: string, throwable: $Throwable$$Type): void
"warn"(messageSupplier: $Supplier$$Type<any>): void
"warn"(message: string, throwable: $Throwable$$Type): void
"warn"(message: string, ...paramSuppliers: $Supplier$$Type<any>[]): void
"warn"(message: string, ...params: any[]): void
"warn"(messageSupplier: $Supplier$$Type<any>, throwable: $Throwable$$Type): void
"warn"(marker: $Marker$$Type, message: string, p0: any): void
"warn"(marker: $Marker$$Type, message: string, p0: any, p1: any): void
"warn"(message: string): void
"warn"(message: any, throwable: $Throwable$$Type): void
"warn"(message: any): void
"warn"(message: charseq, throwable: $Throwable$$Type): void
"warn"(message: charseq): void
get "level"(): $Level
get "messageFactory"(): MF
get "name"(): string
get "debugEnabled"(): boolean
get "errorEnabled"(): boolean
get "fatalEnabled"(): boolean
get "infoEnabled"(): boolean
get "traceEnabled"(): boolean
get "warnEnabled"(): boolean
}

export namespace $Logger {
const probejs$$marker: never
}
export abstract class $Logger$$Static implements $Logger {
}
}

declare module "org.apache.logging.log4j.message.MessageFactory" {
import { $Message } from "org.apache.logging.log4j.message.Message"

export interface $MessageFactory {
"newMessage"(message: any): $Message
"newMessage"(message: string): $Message
"newMessage"(message: string, ...params: any[]): $Message
}

export namespace $MessageFactory {
const probejs$$marker: never
}
export abstract class $MessageFactory$$Static implements $MessageFactory {
}
}

declare module "org.apache.logging.log4j.spi.StandardLevel" {
import { $Enum } from "java.lang.Enum"

export class $StandardLevel extends $Enum<$StandardLevel> {
static readonly "ALL": $StandardLevel
static readonly "DEBUG": $StandardLevel
static readonly "ERROR": $StandardLevel
static readonly "FATAL": $StandardLevel
static readonly "INFO": $StandardLevel
static readonly "OFF": $StandardLevel
static readonly "TRACE": $StandardLevel
static readonly "WARN": $StandardLevel

public static "getStandardLevel"(intLevel: integer): $StandardLevel
public "intLevel"(): integer
public static "valueOf"(name: string): $StandardLevel
public static "values"(): $StandardLevel[]
}
}

declare module "org.apache.commons.math3.analysis.polynomials.PolynomialSplineFunction" {
import { $DifferentiableUnivariateFunction } from "org.apache.commons.math3.analysis.DifferentiableUnivariateFunction"
import { $UnivariateFunction } from "org.apache.commons.math3.analysis.UnivariateFunction"
import { $UnivariateDifferentiableFunction } from "org.apache.commons.math3.analysis.differentiation.UnivariateDifferentiableFunction"
import { $PolynomialFunction, $PolynomialFunction$$Type } from "org.apache.commons.math3.analysis.polynomials.PolynomialFunction"
import { $DerivativeStructure, $DerivativeStructure$$Type } from "org.apache.commons.math3.analysis.differentiation.DerivativeStructure"

export class $PolynomialSplineFunction implements $UnivariateDifferentiableFunction, $DifferentiableUnivariateFunction {
constructor(double0s: double[], polynomialFunction1s: $PolynomialFunction$$Type[])

public "derivative"(): $UnivariateFunction
public "getKnots"(): double[]
public "getN"(): integer
public "getPolynomials"(): $PolynomialFunction[]
public "isValidPoint"(double0: double): boolean
public "polynomialSplineDerivative"(): $PolynomialSplineFunction
public "value"(double0: double): double
public "value"(derivativeStructure0: $DerivativeStructure$$Type): $DerivativeStructure
get "knots"(): double[]
get "n"(): integer
get "polynomials"(): $PolynomialFunction[]
}
}

declare module "org.apache.maven.artifact.handler.ArtifactHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ArtifactHandler {
"getClassifier"(): string
"getDirectory"(): string
"getExtension"(): string
"getLanguage"(): string
"getPackaging"(): string
"isAddedToClasspath"(): boolean
"isIncludesDependencies"(): boolean
get "classifier"(): string
get "directory"(): string
get "extension"(): string
get "language"(): string
get "packaging"(): string
get "addedToClasspath"(): boolean
get "includesDependencies"(): boolean
}

export namespace $ArtifactHandler {
const ROLE: string
}
export abstract class $ArtifactHandler$$Static implements $ArtifactHandler {
static readonly "ROLE": string

}
}

declare module "org.apache.commons.math3.Field" {
import { $Class } from "java.lang.Class"
import { $FieldElement } from "org.apache.commons.math3.FieldElement"

export interface $Field<T = any> {
"getOne"(): T
"getRuntimeClass"(): $Class<$FieldElement<T>>
"getZero"(): T
get "one"(): T
get "runtimeClass"(): $Class<$FieldElement<T>>
get "zero"(): T
}

export namespace $Field {
const probejs$$marker: never
}
export abstract class $Field$$Static<T = any> implements $Field<T> {
}
}

declare module "org.apache.maven.artifact.versioning.VersionRange" {
import { $List, $List$$Type } from "java.util.List"
import { $ArtifactVersion, $ArtifactVersion$$Type } from "org.apache.maven.artifact.versioning.ArtifactVersion"
import { $Artifact$$Type } from "org.apache.maven.artifact.Artifact"
import { $Restriction } from "org.apache.maven.artifact.versioning.Restriction"

export class $VersionRange {
/** @deprecated */
public "cloneOf"(): $VersionRange
public "containsVersion"(artifactVersion0: $ArtifactVersion$$Type): boolean
public static "createFromVersion"(string0: string): $VersionRange
public static "createFromVersionSpec"(string0: string): $VersionRange
public "getRecommendedVersion"(): $ArtifactVersion
public "getRestrictions"(): $List<$Restriction>
public "getSelectedVersion"(artifact0: $Artifact$$Type): $ArtifactVersion
public "hasRestrictions"(): boolean
public "isSelectedVersionKnown"(artifact0: $Artifact$$Type): boolean
public "matchVersion"(list0: $List$$Type<$ArtifactVersion$$Type>): $ArtifactVersion
public "restrict"(versionRange0: $VersionRange$$Type): $VersionRange
get "recommendedVersion"(): $ArtifactVersion
get "restrictions"(): $List<$Restriction>
}
}

