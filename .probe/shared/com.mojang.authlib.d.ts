declare module "com.mojang.authlib.Agent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Agent {
static readonly "MINECRAFT": $Agent
static readonly "SCROLLS": $Agent

constructor(string0: string, int1: integer)

public "getName"(): string
public "getVersion"(): integer
get "name"(): string
get "version"(): integer
}
}

declare module "com.mojang.authlib.minecraft.BanDetails" {
import { $Record } from "java.lang.Record"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $Instant, $Instant$$Type } from "java.time.Instant"

export class $BanDetails extends $Record {
static readonly "MULTIPLAYER_SCOPE": string

constructor(id: $UUID$$Type, expires: $Instant$$Type, reason: string, reasonMessage: string)

public "expires"(): $Instant
public "id"(): $UUID
public "reason"(): string
public "reasonMessage"(): string
}
}

declare module "com.mojang.authlib.minecraft.TelemetryPropertyContainer" {
import { $JsonObject$$Type } from "com.google.gson.JsonObject"

export interface $TelemetryPropertyContainer {
"addNullProperty"(string0: string): void
"addProperty"(string0: string, boolean1: boolean): void
"addProperty"(string0: string, long1: long): void
"addProperty"(string0: string, int1: integer): void
"addProperty"(string0: string, string1: string): void
}

export namespace $TelemetryPropertyContainer {
function forJsonObject(jsonObject0: $JsonObject$$Type): $TelemetryPropertyContainer
}
export abstract class $TelemetryPropertyContainer$$Static implements $TelemetryPropertyContainer {
static "forJsonObject"(jsonObject0: $JsonObject$$Type): $TelemetryPropertyContainer
}
}

declare module "com.mojang.authlib.minecraft.report.ReportEvidence" {
import { $List, $List$$Type } from "java.util.List"
import { $ReportChatMessage, $ReportChatMessage$$Type } from "com.mojang.authlib.minecraft.report.ReportChatMessage"

export class $ReportEvidence {
constructor(list0: $List$$Type<$ReportChatMessage$$Type>)

get "messages"(): $List<$ReportChatMessage>
set "messages"(value: $List$$Type<$ReportChatMessage$$Type>)
}
}

declare module "com.mojang.authlib.UserType" {
import { $Enum } from "java.lang.Enum"

export class $UserType extends $Enum<$UserType> {
static readonly "LEGACY": $UserType
static readonly "MOJANG": $UserType

public static "byName"(string0: string): $UserType
public "getName"(): string
public static "valueOf"(string0: string): $UserType
public static "values"(): $UserType[]
get "name"(): string
}
}

declare module "com.mojang.authlib.properties.Property" {
import { $PublicKey$$Type } from "java.security.PublicKey"

export class $Property {
constructor(string0: string, string1: string)
constructor(string0: string, string1: string, string2: string)

public "getName"(): string
public "getSignature"(): string
public "getValue"(): string
public "hasSignature"(): boolean
/** @deprecated */
public "isSignatureValid"(publicKey0: $PublicKey$$Type): boolean
get "name"(): string
get "signature"(): string
get "value"(): string
}
}

declare module "com.mojang.authlib.yggdrasil.YggdrasilAuthenticationService" {
import { $ServicesKeySet } from "com.mojang.authlib.yggdrasil.ServicesKeySet"
import { $MinecraftSessionService } from "com.mojang.authlib.minecraft.MinecraftSessionService"
import { $Proxy$$Type } from "java.net.Proxy"
import { $UserAuthentication } from "com.mojang.authlib.UserAuthentication"
import { $Agent$$Type } from "com.mojang.authlib.Agent"
import { $Environment$$Type } from "com.mojang.authlib.Environment"
import { $HttpAuthenticationService } from "com.mojang.authlib.HttpAuthenticationService"
import { $GameProfileRepository } from "com.mojang.authlib.GameProfileRepository"
import { $UserApiService } from "com.mojang.authlib.minecraft.UserApiService"

export class $YggdrasilAuthenticationService extends $HttpAuthenticationService {
constructor(proxy0: $Proxy$$Type, environment1: $Environment$$Type)
constructor(proxy0: $Proxy$$Type, string1: string)
constructor(proxy0: $Proxy$$Type, string1: string, environment2: $Environment$$Type)
constructor(proxy0: $Proxy$$Type)

public "createMinecraftSessionService"(): $MinecraftSessionService
public "createProfileRepository"(): $GameProfileRepository
public "createUserApiService"(string0: string): $UserApiService
public "createUserAuthentication"(agent0: $Agent$$Type): $UserAuthentication
public "getServicesKeySet"(): $ServicesKeySet
get "servicesKeySet"(): $ServicesKeySet
}
}

declare module "com.mojang.authlib.AuthenticationService" {
import { $MinecraftSessionService } from "com.mojang.authlib.minecraft.MinecraftSessionService"
import { $UserAuthentication } from "com.mojang.authlib.UserAuthentication"
import { $Agent$$Type } from "com.mojang.authlib.Agent"
import { $GameProfileRepository } from "com.mojang.authlib.GameProfileRepository"

export interface $AuthenticationService {
"createMinecraftSessionService"(): $MinecraftSessionService
"createProfileRepository"(): $GameProfileRepository
"createUserAuthentication"(agent0: $Agent$$Type): $UserAuthentication
}

export namespace $AuthenticationService {
const probejs$$marker: never
}
export abstract class $AuthenticationService$$Static implements $AuthenticationService {
}
}

declare module "com.mojang.authlib.minecraft.MinecraftSessionService" {
import { $InetAddress$$Type } from "java.net.InetAddress"
import { $GameProfile, $GameProfile$$Type } from "com.mojang.authlib.GameProfile"
import { $Map } from "java.util.Map"
import { $MinecraftProfileTexture$Type } from "com.mojang.authlib.minecraft.MinecraftProfileTexture$Type"
import { $Property$$Type } from "com.mojang.authlib.properties.Property"
import { $MinecraftProfileTexture } from "com.mojang.authlib.minecraft.MinecraftProfileTexture"

export interface $MinecraftSessionService {
"fillProfileProperties"(gameProfile0: $GameProfile$$Type, boolean1: boolean): $GameProfile
"getSecurePropertyValue"(property0: $Property$$Type): string
"getTextures"(gameProfile0: $GameProfile$$Type, boolean1: boolean): $Map<$MinecraftProfileTexture$Type, $MinecraftProfileTexture>
"hasJoinedServer"(gameProfile0: $GameProfile$$Type, string1: string, inetAddress2: $InetAddress$$Type): $GameProfile
"joinServer"(gameProfile0: $GameProfile$$Type, string1: string, string2: string): void
}

export namespace $MinecraftSessionService {
const probejs$$marker: never
}
export abstract class $MinecraftSessionService$$Static implements $MinecraftSessionService {
}
}

declare module "com.mojang.authlib.yggdrasil.request.AbuseReportRequest$ThirdPartyServerInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AbuseReportRequest$ThirdPartyServerInfo {
constructor(string0: string)

get "address"(): string
set "address"(value: string)
}
}

declare module "com.mojang.authlib.minecraft.UserApiService$UserProperties" {
import { $UserApiService$UserFlag, $UserApiService$UserFlag$$Type } from "com.mojang.authlib.minecraft.UserApiService$UserFlag"
import { $BanDetails, $BanDetails$$Type } from "com.mojang.authlib.minecraft.BanDetails"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Set, $Set$$Type } from "java.util.Set"
import { $Record } from "java.lang.Record"

export class $UserApiService$UserProperties extends $Record {
constructor(flags: $Set$$Type<$UserApiService$UserFlag$$Type>, bannedScopes: $Map$$Type<string, $BanDetails$$Type>)

public "bannedScopes"(): $Map<string, $BanDetails>
public "flag"(userFlag0: $UserApiService$UserFlag$$Type): boolean
public "flags"(): $Set<$UserApiService$UserFlag>
}
}

declare module "com.mojang.authlib.ProfileLookupCallback" {
import { $GameProfile$$Type } from "com.mojang.authlib.GameProfile"
import { $Exception$$Type } from "java.lang.Exception"

export interface $ProfileLookupCallback {
"onProfileLookupFailed"(gameProfile0: $GameProfile$$Type, exception1: $Exception$$Type): void
"onProfileLookupSucceeded"(gameProfile0: $GameProfile$$Type): void
}

export namespace $ProfileLookupCallback {
const probejs$$marker: never
}
export abstract class $ProfileLookupCallback$$Static implements $ProfileLookupCallback {
}
}

declare module "com.mojang.authlib.minecraft.UserApiService" {
import { $KeyPairResponse } from "com.mojang.authlib.yggdrasil.response.KeyPairResponse"
import { $UserApiService$UserProperties } from "com.mojang.authlib.minecraft.UserApiService$UserProperties"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $AbuseReportRequest$$Type } from "com.mojang.authlib.yggdrasil.request.AbuseReportRequest"
import { $UUID$$Type } from "java.util.UUID"
import { $AbuseReportLimits } from "com.mojang.authlib.minecraft.report.AbuseReportLimits"
import { $TelemetrySession } from "com.mojang.authlib.minecraft.TelemetrySession"

export interface $UserApiService {
"canSendReports"(): boolean
"getAbuseReportLimits"(): $AbuseReportLimits
"getKeyPair"(): $KeyPairResponse
"isBlockedPlayer"(uUID0: $UUID$$Type): boolean
"newTelemetrySession"(executor0: $Executor$$Type): $TelemetrySession
"properties"(): $UserApiService$UserProperties
"refreshBlockList"(): void
"reportAbuse"(abuseReportRequest0: $AbuseReportRequest$$Type): void
get "abuseReportLimits"(): $AbuseReportLimits
get "keyPair"(): $KeyPairResponse
}

export namespace $UserApiService {
const OFFLINE: $UserApiService
const OFFLINE_PROPERTIES: $UserApiService$UserProperties
}
export abstract class $UserApiService$$Static implements $UserApiService {
static readonly "OFFLINE": $UserApiService
static readonly "OFFLINE_PROPERTIES": $UserApiService$UserProperties

}
}

declare module "com.mojang.authlib.Environment" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Environment {
"asString"(): string
"getAccountsHost"(): string
"getAuthHost"(): string
"getName"(): string
"getServicesHost"(): string
"getSessionHost"(): string
get "accountsHost"(): string
get "authHost"(): string
get "name"(): string
get "servicesHost"(): string
get "sessionHost"(): string
}

export namespace $Environment {
function create(string0: string, string1: string, string2: string, string3: string, string4: string): $Environment
}
export abstract class $Environment$$Static implements $Environment {
static "create"(string0: string, string1: string, string2: string, string3: string, string4: string): $Environment
}
}

declare module "com.mojang.authlib.properties.PropertyMap" {
import { $ForwardingMultimap } from "com.google.common.collect.ForwardingMultimap"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Property, $Property$$Type } from "com.mojang.authlib.properties.Property"

export class $PropertyMap extends $ForwardingMultimap<string, $Property> {
constructor()

public "forEach"(biConsumer0: $BiConsumer$$Type<string, $Property$$Type>): void
}
}

declare module "com.mojang.authlib.yggdrasil.request.AbuseReportRequest$ClientInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AbuseReportRequest$ClientInfo {
constructor(string0: string, string1: string)

get "clientVersion"(): string
set "clientVersion"(value: string)
get "locale"(): string
set "locale"(value: string)
}
}

declare module "com.mojang.authlib.minecraft.report.AbuseReportLimits" {
import { $Record } from "java.lang.Record"

export class $AbuseReportLimits extends $Record {
static readonly "DEFAULTS": $AbuseReportLimits

constructor(maxOpinionCommentsLength: integer, maxReportedMessageCount: integer, maxEvidenceMessageCount: integer, leadingContextMessageCount: integer, trailingContextMessageCount: integer)

public "leadingContextMessageCount"(): integer
public "maxEvidenceMessageCount"(): integer
public "maxOpinionCommentsLength"(): integer
public "maxReportedMessageCount"(): integer
public "trailingContextMessageCount"(): integer
}
}

declare module "com.mojang.authlib.minecraft.report.ReportedEntity" {
import { $UUID, $UUID$$Type } from "java.util.UUID"

export class $ReportedEntity {
constructor(uUID0: $UUID$$Type)

get "profileId"(): $UUID
set "profileId"(value: $UUID$$Type)
}
}

declare module "com.mojang.authlib.BaseAuthenticationService" {
import { $MinecraftSessionService } from "com.mojang.authlib.minecraft.MinecraftSessionService"
import { $UserAuthentication } from "com.mojang.authlib.UserAuthentication"
import { $Agent$$Type } from "com.mojang.authlib.Agent"
import { $AuthenticationService } from "com.mojang.authlib.AuthenticationService"
import { $GameProfileRepository } from "com.mojang.authlib.GameProfileRepository"

export class $BaseAuthenticationService implements $AuthenticationService {
constructor()

public "createMinecraftSessionService"(): $MinecraftSessionService
public "createProfileRepository"(): $GameProfileRepository
public "createUserAuthentication"(agent0: $Agent$$Type): $UserAuthentication
}
}

declare module "com.mojang.authlib.yggdrasil.response.KeyPairResponse" {
import { $Response } from "com.mojang.authlib.yggdrasil.response.Response"
import { $ByteBuffer } from "java.nio.ByteBuffer"

export class $KeyPairResponse extends $Response {
constructor()

public "getExpiresAt"(): string
public "getPrivateKey"(): string
public "getPublicKey"(): string
public "getPublicKeySignature"(): $ByteBuffer
public "getRefreshedAfter"(): string
get "expiresAt"(): string
get "privateKey"(): string
get "publicKey"(): string
get "publicKeySignature"(): $ByteBuffer
get "refreshedAfter"(): string
}
}

declare module "com.mojang.authlib.yggdrasil.ServicesKeyType" {
import { $Enum } from "java.lang.Enum"

export class $ServicesKeyType extends $Enum<$ServicesKeyType> {
static readonly "PROFILE_KEY": $ServicesKeyType
static readonly "PROFILE_PROPERTY": $ServicesKeyType

public static "valueOf"(string0: string): $ServicesKeyType
public static "values"(): $ServicesKeyType[]
}
}

declare module "com.mojang.authlib.yggdrasil.request.AbuseReportRequest" {
import { $AbuseReport, $AbuseReport$$Type } from "com.mojang.authlib.minecraft.report.AbuseReport"
import { $AbuseReportRequest$RealmInfo, $AbuseReportRequest$RealmInfo$$Type } from "com.mojang.authlib.yggdrasil.request.AbuseReportRequest$RealmInfo"
import { $AbuseReportRequest$ThirdPartyServerInfo, $AbuseReportRequest$ThirdPartyServerInfo$$Type } from "com.mojang.authlib.yggdrasil.request.AbuseReportRequest$ThirdPartyServerInfo"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $AbuseReportRequest$ClientInfo, $AbuseReportRequest$ClientInfo$$Type } from "com.mojang.authlib.yggdrasil.request.AbuseReportRequest$ClientInfo"

export class $AbuseReportRequest {
constructor(int0: integer, uUID1: $UUID$$Type, abuseReport2: $AbuseReport$$Type, clientInfo3: $AbuseReportRequest$ClientInfo$$Type, thirdPartyServerInfo4: $AbuseReportRequest$ThirdPartyServerInfo$$Type, realmInfo5: $AbuseReportRequest$RealmInfo$$Type)

get "clientInfo"(): $AbuseReportRequest$ClientInfo
set "clientInfo"(value: $AbuseReportRequest$ClientInfo$$Type)
get "id"(): $UUID
set "id"(value: $UUID$$Type)
get "realmInfo"(): $AbuseReportRequest$RealmInfo
set "realmInfo"(value: $AbuseReportRequest$RealmInfo$$Type)
get "report"(): $AbuseReport
set "report"(value: $AbuseReport$$Type)
get "thirdPartyServerInfo"(): $AbuseReportRequest$ThirdPartyServerInfo
set "thirdPartyServerInfo"(value: $AbuseReportRequest$ThirdPartyServerInfo$$Type)
get "version"(): integer
set "version"(value: integer)
}
}

declare module "com.mojang.authlib.minecraft.MinecraftProfileTexture$Type" {
import { $Enum } from "java.lang.Enum"

export class $MinecraftProfileTexture$Type extends $Enum<$MinecraftProfileTexture$Type> {
static readonly "CAPE": $MinecraftProfileTexture$Type
static readonly "ELYTRA": $MinecraftProfileTexture$Type
static readonly "SKIN": $MinecraftProfileTexture$Type

public static "valueOf"(string0: string): $MinecraftProfileTexture$Type
public static "values"(): $MinecraftProfileTexture$Type[]
}
}

declare module "com.mojang.authlib.minecraft.UserApiService$UserFlag" {
import { $Enum } from "java.lang.Enum"

export class $UserApiService$UserFlag extends $Enum<$UserApiService$UserFlag> {
static readonly "CHAT_ALLOWED": $UserApiService$UserFlag
static readonly "OPTIONAL_TELEMETRY_AVAILABLE": $UserApiService$UserFlag
static readonly "PROFANITY_FILTER_ENABLED": $UserApiService$UserFlag
static readonly "REALMS_ALLOWED": $UserApiService$UserFlag
static readonly "SERVERS_ALLOWED": $UserApiService$UserFlag
static readonly "TELEMETRY_ENABLED": $UserApiService$UserFlag

public static "valueOf"(string0: string): $UserApiService$UserFlag
public static "values"(): $UserApiService$UserFlag[]
}
}

declare module "com.mojang.authlib.GameProfileRepository" {
import { $ProfileLookupCallback$$Type } from "com.mojang.authlib.ProfileLookupCallback"
import { $Agent$$Type } from "com.mojang.authlib.Agent"

export interface $GameProfileRepository {
"findProfilesByNames"(string0s: string[], agent1: $Agent$$Type, profileLookupCallback2: $ProfileLookupCallback$$Type): void
}

export namespace $GameProfileRepository {
const probejs$$marker: never
}
export abstract class $GameProfileRepository$$Static implements $GameProfileRepository {
}
}

declare module "com.mojang.authlib.minecraft.report.ReportChatMessage" {
import { $List, $List$$Type } from "java.util.List"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $Instant, $Instant$$Type } from "java.time.Instant"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export class $ReportChatMessage {
constructor(int0: integer, uUID1: $UUID$$Type, uUID2: $UUID$$Type, instant3: $Instant$$Type, long4: long, list5: $List$$Type<$ByteBuffer$$Type>, string6: string, byteBuffer7: $ByteBuffer$$Type, boolean8: boolean)

get "index"(): integer
set "index"(value: integer)
get "lastSeen"(): $List<$ByteBuffer>
set "lastSeen"(value: $List$$Type<$ByteBuffer$$Type>)
get "message"(): string
set "message"(value: string)
get "messageReported"(): boolean
set "messageReported"(value: boolean)
get "profileId"(): $UUID
set "profileId"(value: $UUID$$Type)
get "salt"(): long
set "salt"(value: long)
get "sessionId"(): $UUID
set "sessionId"(value: $UUID$$Type)
get "signature"(): $ByteBuffer
set "signature"(value: $ByteBuffer$$Type)
get "timestamp"(): $Instant
set "timestamp"(value: $Instant$$Type)
}
}

declare module "com.mojang.authlib.yggdrasil.response.Response" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Response {
constructor()

public "getCause"(): string
public "getError"(): string
public "getErrorMessage"(): string
get "cause"(): string
get "error"(): string
get "errorMessage"(): string
}
}

declare module "com.mojang.authlib.minecraft.MinecraftProfileTexture" {
import { $Map$$Type } from "java.util.Map"

export class $MinecraftProfileTexture {
static readonly "PROFILE_TEXTURE_COUNT": integer

constructor(string0: string, map1: $Map$$Type<string, string>)

public "getHash"(): string
public "getMetadata"(string0: string): string
public "getUrl"(): string
get "hash"(): string
get "url"(): string
}
}

declare module "com.mojang.authlib.UserAuthentication" {
import { $UserType } from "com.mojang.authlib.UserType"
import { $PropertyMap } from "com.mojang.authlib.properties.PropertyMap"
import { $GameProfile, $GameProfile$$Type } from "com.mojang.authlib.GameProfile"
import { $Map, $Map$$Type } from "java.util.Map"

export interface $UserAuthentication {
"canLogIn"(): boolean
"canPlayOnline"(): boolean
"getAuthenticatedToken"(): string
"getAvailableProfiles"(): $GameProfile[]
"getSelectedProfile"(): $GameProfile
"getUserID"(): string
"getUserProperties"(): $PropertyMap
"getUserType"(): $UserType
"isLoggedIn"(): boolean
"loadFromStorage"(map0: $Map$$Type<string, any>): void
"logIn"(): void
"logOut"(): void
"saveForStorage"(): $Map<string, any>
"selectGameProfile"(gameProfile0: $GameProfile$$Type): void
"setPassword"(string0: string): void
"setUsername"(string0: string): void
get "authenticatedToken"(): string
get "availableProfiles"(): $GameProfile[]
get "selectedProfile"(): $GameProfile
get "userID"(): string
get "userProperties"(): $PropertyMap
get "userType"(): $UserType
get "loggedIn"(): boolean
set "password"(value: string)
set "username"(value: string)
}

export namespace $UserAuthentication {
const probejs$$marker: never
}
export abstract class $UserAuthentication$$Static implements $UserAuthentication {
}
}

declare module "com.mojang.authlib.minecraft.report.AbuseReport" {
import { $ReportEvidence, $ReportEvidence$$Type } from "com.mojang.authlib.minecraft.report.ReportEvidence"
import { $Instant, $Instant$$Type } from "java.time.Instant"
import { $ReportedEntity, $ReportedEntity$$Type } from "com.mojang.authlib.minecraft.report.ReportedEntity"

export class $AbuseReport {
constructor(string0: string, string1: string, reportEvidence2: $ReportEvidence$$Type, reportedEntity3: $ReportedEntity$$Type, instant4: $Instant$$Type)

get "createdTime"(): $Instant
set "createdTime"(value: $Instant$$Type)
get "evidence"(): $ReportEvidence
set "evidence"(value: $ReportEvidence$$Type)
get "opinionComments"(): string
set "opinionComments"(value: string)
get "reason"(): string
set "reason"(value: string)
get "reportedEntity"(): $ReportedEntity
set "reportedEntity"(value: $ReportedEntity$$Type)
}
}

declare module "com.mojang.authlib.yggdrasil.ServicesKeySet" {
import { $Collection } from "java.util.Collection"
import { $ServicesKeyType$$Type } from "com.mojang.authlib.yggdrasil.ServicesKeyType"
import { $ServicesKeyInfo } from "com.mojang.authlib.yggdrasil.ServicesKeyInfo"
import { $Supplier$$Type } from "java.util.function.Supplier"

export interface $ServicesKeySet {
"keys"(servicesKeyType0: $ServicesKeyType$$Type): $Collection<$ServicesKeyInfo>
}

export namespace $ServicesKeySet {
const EMPTY: $ServicesKeySet
function lazy(supplier0: $Supplier$$Type<$ServicesKeySet>): $ServicesKeySet
}
export abstract class $ServicesKeySet$$Static implements $ServicesKeySet {
static readonly "EMPTY": $ServicesKeySet

static "lazy"(supplier0: $Supplier$$Type<$ServicesKeySet>): $ServicesKeySet
}
}

declare module "com.mojang.authlib.minecraft.TelemetrySession" {
import { $TelemetryEvent } from "com.mojang.authlib.minecraft.TelemetryEvent"

export interface $TelemetrySession {
"createNewEvent"(string0: string): $TelemetryEvent
"isEnabled"(): boolean
get "enabled"(): boolean
}

export namespace $TelemetrySession {
const DISABLED: $TelemetrySession
}
export abstract class $TelemetrySession$$Static implements $TelemetrySession {
static readonly "DISABLED": $TelemetrySession

}
}

declare module "com.mojang.authlib.yggdrasil.request.AbuseReportRequest$RealmInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AbuseReportRequest$RealmInfo {
constructor(string0: string, int1: integer)

get "realmId"(): string
set "realmId"(value: string)
get "slotId"(): integer
set "slotId"(value: integer)
}
}

declare module "com.mojang.authlib.HttpAuthenticationService" {
import { $MinecraftSessionService } from "com.mojang.authlib.minecraft.MinecraftSessionService"
import { $BaseAuthenticationService } from "com.mojang.authlib.BaseAuthenticationService"
import { $Proxy } from "java.net.Proxy"
import { $URL, $URL$$Type } from "java.net.URL"
import { $Map$$Type } from "java.util.Map"
import { $UserAuthentication } from "com.mojang.authlib.UserAuthentication"
import { $Agent$$Type } from "com.mojang.authlib.Agent"
import { $GameProfileRepository } from "com.mojang.authlib.GameProfileRepository"

export class $HttpAuthenticationService extends $BaseAuthenticationService {
public static "buildQuery"(map0: $Map$$Type<string, any>): string
public static "concatenateURL"(uRL0: $URL$$Type, string1: string): $URL
public static "constantURL"(string0: string): $URL
public "createMinecraftSessionService"(): $MinecraftSessionService
public "createProfileRepository"(): $GameProfileRepository
public "createUserAuthentication"(agent0: $Agent$$Type): $UserAuthentication
public "getProxy"(): $Proxy
public "performGetRequest"(uRL0: $URL$$Type): string
public "performGetRequest"(uRL0: $URL$$Type, string1: string): string
public "performPostRequest"(uRL0: $URL$$Type, string1: string, string2: string): string
get "proxy"(): $Proxy
}
}

declare module "com.mojang.authlib.yggdrasil.ServicesKeyInfo" {
import { $Signature } from "java.security.Signature"
import { $Property$$Type } from "com.mojang.authlib.properties.Property"

export interface $ServicesKeyInfo {
"keyBitCount"(): integer
"signature"(): $Signature
"signatureBitCount"(): integer
"validateProperty"(property0: $Property$$Type): boolean
}

export namespace $ServicesKeyInfo {
const probejs$$marker: never
}
export abstract class $ServicesKeyInfo$$Static implements $ServicesKeyInfo {
}
}

declare module "com.mojang.authlib.minecraft.TelemetryEvent" {
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $TelemetryPropertyContainer } from "com.mojang.authlib.minecraft.TelemetryPropertyContainer"

export interface $TelemetryEvent extends $TelemetryPropertyContainer {
"addNullProperty"(string0: string): void
"addProperty"(string0: string, boolean1: boolean): void
"addProperty"(string0: string, long1: long): void
"addProperty"(string0: string, int1: integer): void
"addProperty"(string0: string, string1: string): void
"send"(): void
}

export namespace $TelemetryEvent {
const EMPTY: $TelemetryEvent
function forJsonObject(jsonObject0: $JsonObject$$Type): $TelemetryPropertyContainer
}
export abstract class $TelemetryEvent$$Static implements $TelemetryEvent {
static readonly "EMPTY": $TelemetryEvent

static "forJsonObject"(jsonObject0: $JsonObject$$Type): $TelemetryPropertyContainer
}
}

declare module "com.mojang.authlib.GameProfile" {
import { $PropertyMap } from "com.mojang.authlib.properties.PropertyMap"
import { $UUID, $UUID$$Type } from "java.util.UUID"

export class $GameProfile {
constructor(uUID0: $UUID$$Type, string1: string)

public "getId"(): $UUID
public "getName"(): string
public "getProperties"(): $PropertyMap
public "isComplete"(): boolean
public "isLegacy"(): boolean
get "id"(): $UUID
get "name"(): string
get "properties"(): $PropertyMap
get "complete"(): boolean
get "legacy"(): boolean
}
}

