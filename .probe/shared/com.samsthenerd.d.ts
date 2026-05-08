declare module "com.samsthenerd.inline.mixin.feature.playerskins.MixinClientHeadChecker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MixinClientHeadChecker {
}

export namespace $MixinClientHeadChecker {
const probejs$$marker: never
}
export abstract class $MixinClientHeadChecker$$Static implements $MixinClientHeadChecker {
}
}

declare module "com.samsthenerd.inline.impl.InlineStyle$ISComponent" {
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"
import { $Map } from "java.util.Map"
import { $BiFunction, $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Record } from "java.lang.Record"

export class $InlineStyle$ISComponent<C = any> extends $Record {
static "ALL_COMPS": $Map<string, $InlineStyle$ISComponent>

constructor(id: string, codec: $Codec$$Type<C>, defaultValue: C, merger: $BiFunction$$Type<C, C, C>)
constructor(id: string, codec: $Codec$$Type<C>, defaultValue: C)

public "codec"(): $Codec<C>
public "defaultValue"(): C
public "id"(): string
public "merger"(): $BiFunction<C, C, C>
}
}

declare module "com.samsthenerd.inline.impl.InlineStyle" {
import { $InlineStyle$ISComponent, $InlineStyle$ISComponent$$Type } from "com.samsthenerd.inline.impl.InlineStyle$ISComponent"
import { $InlineData, $InlineData$$Type } from "com.samsthenerd.inline.api.InlineData"
import { $Set } from "java.util.Set"
import { $Style, $Style$$Type } from "net.minecraft.network.chat.Style"

export interface $InlineStyle {
"getComponent"<C>(component: $InlineStyle$ISComponent$$Type<C>): C
"getComponents"(): $Set<$InlineStyle$ISComponent<any>>
"getInlineData"(): $InlineData
"setComponent"<C>(component: $InlineStyle$ISComponent$$Type<C>, value: C): $Style
"withComponent"<C>(component: $InlineStyle$ISComponent$$Type<C>, value: C): $Style
"withInlineData"(data: $InlineData$$Type): $Style
get "components"(): $Set<$InlineStyle$ISComponent<any>>
get "inlineData"(): $InlineData
}

export namespace $InlineStyle {
const GLOWY_MARKER_COMP: $InlineStyle$ISComponent<boolean>
const GLOWY_PARENT_COMP: $InlineStyle$ISComponent<integer>
const HIDDEN_COMP: $InlineStyle$ISComponent<boolean>
const INLINE_DATA_COMP: $InlineStyle$ISComponent<$InlineData<any>>
const SIZE_MODIFIER_COMP: $InlineStyle$ISComponent<double>
function fromInlineData(data: $InlineData$$Type): $Style
function makeCopy(original: $Style$$Type): $Style
}
export abstract class $InlineStyle$$Static implements $InlineStyle {
static readonly "GLOWY_MARKER_COMP": $InlineStyle$ISComponent<boolean>
static readonly "GLOWY_PARENT_COMP": $InlineStyle$ISComponent<integer>
static readonly "HIDDEN_COMP": $InlineStyle$ISComponent<boolean>
static readonly "INLINE_DATA_COMP": $InlineStyle$ISComponent<$InlineData<any>>
static readonly "SIZE_MODIFIER_COMP": $InlineStyle$ISComponent<double>

static "fromInlineData"(data: $InlineData$$Type): $Style
static "makeCopy"(original: $Style$$Type): $Style
}
}

declare module "com.samsthenerd.inline.mixin.feature.playerskins.MixinClientAccessor" {
import { $YggdrasilAuthenticationService } from "com.mojang.authlib.yggdrasil.YggdrasilAuthenticationService"

export interface $MixinClientAccessor {
"getAuthenticationService"(): $YggdrasilAuthenticationService
get "authenticationService"(): $YggdrasilAuthenticationService
}

export namespace $MixinClientAccessor {
const probejs$$marker: never
}
export abstract class $MixinClientAccessor$$Static implements $MixinClientAccessor {
}
}

declare module "com.samsthenerd.inline.api.InlineData$InlineDataType" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Codec } from "com.mojang.serialization.Codec"
import { $InlineData } from "com.samsthenerd.inline.api.InlineData"

export interface $InlineData$InlineDataType<D extends $InlineData<D> = $InlineData<D>> {
"getCodec"(): $Codec<D>
"getId"(): $ResourceLocation
get "codec"(): $Codec<D>
get "id"(): $ResourceLocation
}

export namespace $InlineData$InlineDataType {
const probejs$$marker: never
}
export abstract class $InlineData$InlineDataType$$Static<D extends $InlineData<D> = $InlineData<D>> implements $InlineData$InlineDataType<D> {
}
}

declare module "com.samsthenerd.inline.api.InlineData" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Component } from "net.minecraft.network.chat.Component"
import { $InlineData$InlineDataType } from "com.samsthenerd.inline.api.InlineData$InlineDataType"
import { $Style } from "net.minecraft.network.chat.Style"

export interface $InlineData<Self extends $InlineData<Self> = $InlineData<Self>> {
"asStyle"(withExtra: boolean): $Style
"asText"(withExtra: boolean): $Component
"getExtraStyle"(): $Style
"getRendererId"(): $ResourceLocation
"getType"(): $InlineData$InlineDataType<Self>
get "extraStyle"(): $Style
get "rendererId"(): $ResourceLocation
get "type"(): $InlineData$InlineDataType<Self>
}

export namespace $InlineData {
const probejs$$marker: never
}
export abstract class $InlineData$$Static<Self extends $InlineData<Self> = $InlineData<Self>> implements $InlineData<Self> {
}
}

declare module "com.samsthenerd.inline.mixin.core.MixinSetTessBuffer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MixinSetTessBuffer {
}

export namespace $MixinSetTessBuffer {
const probejs$$marker: never
}
export abstract class $MixinSetTessBuffer$$Static implements $MixinSetTessBuffer {
}
}

declare module "com.samsthenerd.inline.mixin.feature.playerskins.MixinAccessPlayerModelParts" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MixinAccessPlayerModelParts {
}

export namespace $MixinAccessPlayerModelParts {
const probejs$$marker: never
}
export abstract class $MixinAccessPlayerModelParts$$Static implements $MixinAccessPlayerModelParts {
}
}

declare module "com.samsthenerd.inline.mixin.core.NativeImageAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NativeImageAccessor {
"getPointer"(): long
get "pointer"(): long
}

export namespace $NativeImageAccessor {
const probejs$$marker: never
}
export abstract class $NativeImageAccessor$$Static implements $NativeImageAccessor {
}
}

