declare module "net.minecraft.network.chat.Style" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $HoverEvent, $HoverEvent$$Type } from "net.minecraft.network.chat.HoverEvent"
import { $InlineStyle } from "com.samsthenerd.inline.impl.InlineStyle"
import { $InlineStyle$ISComponent$$Type } from "com.samsthenerd.inline.impl.InlineStyle$ISComponent"
import { $Codec } from "com.mojang.serialization.Codec"
import { $InlineData, $InlineData$$Type } from "com.samsthenerd.inline.api.InlineData"
import { $ChatFormatting$$Type } from "net.minecraft.ChatFormatting"
import { $Set } from "java.util.Set"
import { $TextColor, $TextColor$$Type } from "net.minecraft.network.chat.TextColor"
import { $ClickEvent, $ClickEvent$$Type } from "net.minecraft.network.chat.ClickEvent"

export class $Style implements $InlineStyle {
static readonly "DEFAULT_FONT": $ResourceLocation
static readonly "EMPTY": $Style
static readonly "FORMATTING_CODEC": $Codec<$Style>
readonly "bold": boolean
readonly "italic": boolean
readonly "obfuscated": boolean
readonly "strikethrough": boolean
readonly "underlined": boolean

public "applyFormat"(chatFormatting0: $ChatFormatting$$Type): $Style
public "applyFormats"(...chatFormatting0s: $ChatFormatting$$Type[]): $Style
public "applyLegacyFormat"(chatFormatting0: $ChatFormatting$$Type): $Style
public "applyTo"(style0: $Style$$Type): $Style
public static "fromInlineData"(data: $InlineData$$Type): $Style
public "getClickEvent"(): $ClickEvent
public "getColor"(): $TextColor
public "getComponent"(component: $InlineStyle$ISComponent$$Type): any
public "getComponents"(): $Set
public "getFont"(): $ResourceLocation
public "getHoverEvent"(): $HoverEvent
public "getInlineData"(): $InlineData
public "getInsertion"(): string
public "isBold"(): boolean
public "isEmpty"(): boolean
public "isItalic"(): boolean
public "isObfuscated"(): boolean
public "isStrikethrough"(): boolean
public "isUnderlined"(): boolean
public static "makeCopy"(original: $Style$$Type): $Style
public "setComponent"(component: $InlineStyle$ISComponent$$Type, value: any): $Style
public "withBold"(boolean0: boolean): $Style
public "withClickEvent"(clickEvent0: $ClickEvent$$Type): $Style
public "withColor"(chatFormatting0: $ChatFormatting$$Type): $Style
public "withColor"(int0: integer): $Style
public "withColor"(textColor0: $TextColor$$Type): $Style
public "withComponent"(component: $InlineStyle$ISComponent$$Type, value: any): $Style
public "withFont"(resourceLocation0: $ResourceLocation$$Type): $Style
public "withHoverEvent"(hoverEvent0: $HoverEvent$$Type): $Style
public "withInlineData"(data: $InlineData$$Type): $Style
public "withInsertion"(string0: string): $Style
public "withItalic"(boolean0: boolean): $Style
public "withObfuscated"(boolean0: boolean): $Style
public "withStrikethrough"(boolean0: boolean): $Style
public "withUnderlined"(boolean0: boolean): $Style
get "clickEvent"(): $ClickEvent
get "color"(): $TextColor
get "components"(): $Set
get "font"(): $ResourceLocation
get "hoverEvent"(): $HoverEvent
get "inlineData"(): $InlineData
get "insertion"(): string
get "empty"(): boolean
}
}

declare module "net.minecraft.network.chat.LastSeenMessages$Packed" {
import { $List, $List$$Type } from "java.util.List"
import { $MessageSignature$Packed, $MessageSignature$Packed$$Type } from "net.minecraft.network.chat.MessageSignature$Packed"
import { $MessageSignatureCache$$Type } from "net.minecraft.network.chat.MessageSignatureCache"
import { $Optional } from "java.util.Optional"
import { $LastSeenMessages } from "net.minecraft.network.chat.LastSeenMessages"
import { $Record } from "java.lang.Record"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $LastSeenMessages$Packed extends $Record {
static readonly "EMPTY": $LastSeenMessages$Packed

constructor(list0: $List$$Type<$MessageSignature$Packed$$Type>)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "entries"(): $List<$MessageSignature$Packed>
public "unpack"(messageSignatureCache0: $MessageSignatureCache$$Type): $Optional<$LastSeenMessages>
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
}
}

declare module "net.minecraft.network.chat.SignedMessageBody" {
import { $SignedMessageBody$Packed } from "net.minecraft.network.chat.SignedMessageBody$Packed"
import { $MessageSignatureCache$$Type } from "net.minecraft.network.chat.MessageSignatureCache"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $LastSeenMessages, $LastSeenMessages$$Type } from "net.minecraft.network.chat.LastSeenMessages"
import { $Record } from "java.lang.Record"
import { $SignatureUpdater$Output$$Type } from "net.minecraft.util.SignatureUpdater$Output"
import { $Instant, $Instant$$Type } from "java.time.Instant"

export class $SignedMessageBody extends $Record {
static readonly "MAP_CODEC": $MapCodec<$SignedMessageBody>

constructor(string0: string, instant1: $Instant$$Type, long2: long, lastSeenMessages3: $LastSeenMessages$$Type)

public "content"(): string
public "lastSeen"(): $LastSeenMessages
public "pack"(messageSignatureCache0: $MessageSignatureCache$$Type): $SignedMessageBody$Packed
public "salt"(): long
public "timeStamp"(): $Instant
public static "unsigned"(string0: string): $SignedMessageBody
public "updateSignature"(output0: $SignatureUpdater$Output$$Type): void
}
}

declare module "net.minecraft.network.chat.SignableCommand$Argument" {
import { $Record } from "java.lang.Record"
import { $ArgumentCommandNode, $ArgumentCommandNode$$Type } from "com.mojang.brigadier.tree.ArgumentCommandNode"

export class $SignableCommand$Argument<S = any> extends $Record {
constructor(argumentCommandNode0: $ArgumentCommandNode$$Type<S, any>, string1: string)

public "name"(): string
public "node"(): $ArgumentCommandNode<S, any>
public "value"(): string
}
}

declare module "net.minecraft.network.chat.FilterMask" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Component } from "net.minecraft.network.chat.Component"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Style } from "net.minecraft.network.chat.Style"

export class $FilterMask {
static readonly "CODEC": $Codec<$FilterMask>
static readonly "FILTERED_STYLE": $Style
static readonly "FULLY_FILTERED": $FilterMask
static readonly "PASS_THROUGH": $FilterMask

constructor(int0: integer)

public "apply"(string0: string): string
public "applyWithFormatting"(string0: string): $Component
public "isEmpty"(): boolean
public "isFullyFiltered"(): boolean
public static "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $FilterMask
public "setFiltered"(int0: integer): void
public static "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type, filterMask1: $FilterMask$$Type): void
get "empty"(): boolean
get "fullyFiltered"(): boolean
set "filtered"(value: integer)
}
}

declare module "net.minecraft.network.chat.SignedMessageChain$Decoder" {
import { $PlayerChatMessage } from "net.minecraft.network.chat.PlayerChatMessage"
import { $MessageSignature$$Type } from "net.minecraft.network.chat.MessageSignature"
import { $UUID$$Type } from "java.util.UUID"
import { $SignedMessageBody$$Type } from "net.minecraft.network.chat.SignedMessageBody"

export interface $SignedMessageChain$Decoder {
"unpack"(messageSignature0: $MessageSignature$$Type, signedMessageBody1: $SignedMessageBody$$Type): $PlayerChatMessage
}

export namespace $SignedMessageChain$Decoder {
const REJECT_ALL: $SignedMessageChain$Decoder
function unsigned(uUID0: $UUID$$Type): $SignedMessageChain$Decoder
}
export abstract class $SignedMessageChain$Decoder$$Static implements $SignedMessageChain$Decoder {
static readonly "REJECT_ALL": $SignedMessageChain$Decoder

static "unsigned"(uUID0: $UUID$$Type): $SignedMessageChain$Decoder
}
}

declare module "net.minecraft.network.chat.ChatDecorator" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"

export interface $ChatDecorator {
"decorate"(serverPlayer0: $ServerPlayer$$Type, component1: $Component$$Type): $CompletableFuture<$Component>
}

export namespace $ChatDecorator {
const PLAIN: $ChatDecorator
}
export abstract class $ChatDecorator$$Static implements $ChatDecorator {
static readonly "PLAIN": $ChatDecorator

}
}

declare module "net.minecraft.network.chat.ComponentContents" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $FormattedText$ContentConsumer$$Type } from "net.minecraft.network.chat.FormattedText$ContentConsumer"
import { $Optional } from "java.util.Optional"
import { $FormattedText$StyledContentConsumer$$Type } from "net.minecraft.network.chat.FormattedText$StyledContentConsumer"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $Style$$Type } from "net.minecraft.network.chat.Style"

export interface $ComponentContents {
"resolve"(commandSourceStack0: $CommandSourceStack$$Type, entity1: $Entity$$Type, int2: integer): $MutableComponent
"visit"<T>(styledContentConsumer0: $FormattedText$StyledContentConsumer$$Type<T>, style1: $Style$$Type): $Optional<T>
"visit"<T>(contentConsumer0: $FormattedText$ContentConsumer$$Type<T>): $Optional<T>
}

export namespace $ComponentContents {
const EMPTY: $ComponentContents
}
export abstract class $ComponentContents$$Static implements $ComponentContents {
static readonly "EMPTY": $ComponentContents

}
}

declare module "net.minecraft.network.chat.RemoteChatSession$Data" {
import { $RemoteChatSession } from "net.minecraft.network.chat.RemoteChatSession"
import { $GameProfile$$Type } from "com.mojang.authlib.GameProfile"
import { $SignatureValidator$$Type } from "net.minecraft.util.SignatureValidator"
import { $Duration$$Type } from "java.time.Duration"
import { $Record } from "java.lang.Record"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $ProfilePublicKey$Data, $ProfilePublicKey$Data$$Type } from "net.minecraft.world.entity.player.ProfilePublicKey$Data"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $RemoteChatSession$Data extends $Record {
constructor(uUID0: $UUID$$Type, data1: $ProfilePublicKey$Data$$Type)

public "profilePublicKey"(): $ProfilePublicKey$Data
public static "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $RemoteChatSession$Data
public "sessionId"(): $UUID
public "validate"(gameProfile0: $GameProfile$$Type, signatureValidator1: $SignatureValidator$$Type, duration2: $Duration$$Type): $RemoteChatSession
public static "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type, data1: $RemoteChatSession$Data$$Type): void
}
}

declare module "net.minecraft.network.chat.SignedMessageLink" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Record } from "java.lang.Record"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $SignatureUpdater$Output$$Type } from "net.minecraft.util.SignatureUpdater$Output"

export class $SignedMessageLink extends $Record {
static readonly "CODEC": $Codec<$SignedMessageLink>

constructor(int0: integer, uUID1: $UUID$$Type, uUID2: $UUID$$Type)

public "advance"(): $SignedMessageLink
public "index"(): integer
public "isDescendantOf"(signedMessageLink0: $SignedMessageLink$$Type): boolean
public static "root"(uUID0: $UUID$$Type, uUID1: $UUID$$Type): $SignedMessageLink
public "sender"(): $UUID
public "sessionId"(): $UUID
public static "unsigned"(uUID0: $UUID$$Type): $SignedMessageLink
public "updateSignature"(output0: $SignatureUpdater$Output$$Type): void
}
}

declare module "net.minecraft.network.chat.OutgoingChatMessage" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Component } from "net.minecraft.network.chat.Component"
import { $PlayerChatMessage$$Type } from "net.minecraft.network.chat.PlayerChatMessage"
import { $ChatType$Bound$$Type } from "net.minecraft.network.chat.ChatType$Bound"

export interface $OutgoingChatMessage {
"content"(): $Component
"sendToPlayer"(serverPlayer0: $ServerPlayer$$Type, boolean1: boolean, bound2: $ChatType$Bound$$Type): void
}

export namespace $OutgoingChatMessage {
function create(playerChatMessage0: $PlayerChatMessage$$Type): $OutgoingChatMessage
}
export abstract class $OutgoingChatMessage$$Static implements $OutgoingChatMessage {
static "create"(playerChatMessage0: $PlayerChatMessage$$Type): $OutgoingChatMessage
}
}

declare module "net.minecraft.network.chat.contents.DataSource" {
import { $Stream } from "java.util.stream.Stream"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"

export interface $DataSource {
"getData"(commandSourceStack0: $CommandSourceStack$$Type): $Stream<$CompoundTag>
}

export namespace $DataSource {
const probejs$$marker: never
}
export abstract class $DataSource$$Static implements $DataSource {
}
}

declare module "net.minecraft.network.chat.HoverEvent" {
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $HoverEvent$Action, $HoverEvent$Action$$Type } from "net.minecraft.network.chat.HoverEvent$Action"

export class $HoverEvent {
constructor<T>(action0: $HoverEvent$Action$$Type<T>, t1: T)

public static "deserialize"(jsonObject0: $JsonObject$$Type): $HoverEvent
public "getAction"(): $HoverEvent$Action<any>
public "getValue"<T>(action0: $HoverEvent$Action$$Type<T>): T
public "serialize"(): $JsonObject
get "action"(): $HoverEvent$Action<any>
}
}

declare module "net.minecraft.network.chat.MutableComponent" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ComponentContents, $ComponentContents$$Type } from "net.minecraft.network.chat.ComponentContents"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $FormattedText$StyledContentConsumer$$Type } from "net.minecraft.network.chat.FormattedText$StyledContentConsumer"
import { $Iterable } from "java.lang.Iterable"
import { $Style, $Style$$Type } from "net.minecraft.network.chat.Style"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $JsonElement } from "com.google.gson.JsonElement"
import { $ComponentKJS } from "dev.latvian.mods.kubejs.core.ComponentKJS"
import { $List, $List$$Type } from "java.util.List"
import { $DataSource$$Type } from "net.minecraft.network.chat.contents.DataSource"
import { $FormattedText, $FormattedText$$Type } from "net.minecraft.network.chat.FormattedText"
import { $FormattedText$ContentConsumer$$Type } from "net.minecraft.network.chat.FormattedText$ContentConsumer"
import { $ChatFormatting$$Type } from "net.minecraft.ChatFormatting"
import { $Color$$Type } from "dev.latvian.mods.rhino.mod.util.color.Color"
import { $FormattedCharSequence } from "net.minecraft.util.FormattedCharSequence"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $ClickEvent$$Type } from "net.minecraft.network.chat.ClickEvent"

export class $MutableComponent implements $Component, $ComponentKJS {
public "append"(component0: $Component$$Type): $MutableComponent
public "aqua"(): $MutableComponent
public "asIterable"(): $Iterable<$Component>
public "black"(): $MutableComponent
public "blue"(): $MutableComponent
public "bold"(): $MutableComponent
public "bold"(value: boolean): $MutableComponent
public "click"(s: $ClickEvent$$Type): $MutableComponent
public "clickChangePage"(page: string): $MutableComponent
public "clickCopy"(text: string): $MutableComponent
public "clickOpenFile"(path: string): $MutableComponent
public "clickOpenUrl"(url: string): $MutableComponent
public "clickRunCommand"(command: string): $MutableComponent
public "clickSuggestCommand"(command: string): $MutableComponent
public "color"(c: $Color$$Type): $MutableComponent
/** @deprecated */
public "component"(): $Component
public static "composite"(list0: $List$$Type<$FormattedText$$Type>): $FormattedText
public static "composite"(...formattedText0s: $FormattedText$$Type[]): $FormattedText
public "contains"(component0: $Component$$Type): boolean
public "copy"(): $MutableComponent
public static "create"(componentContents0: $ComponentContents$$Type): $MutableComponent
public "darkAqua"(): $MutableComponent
public "darkBlue"(): $MutableComponent
public "darkGray"(): $MutableComponent
public "darkGreen"(): $MutableComponent
public "darkPurple"(): $MutableComponent
public "darkRed"(): $MutableComponent
public static "empty"(): $MutableComponent
public "font"(s: $ResourceLocation$$Type): $MutableComponent
public "forEach"(action: $Consumer$$Type<$Component$$Type>): void
public "getContents"(): $ComponentContents
public "getSiblings"(): $List<$Component>
public "getString"(): string
public "getString"(int0: integer): string
public "getStyle"(): $Style
public "getVisualOrderText"(): $FormattedCharSequence
public "gold"(): $MutableComponent
public "gray"(): $MutableComponent
public "green"(): $MutableComponent
public "hasSiblings"(): boolean
public "hasStyle"(): boolean
public "hover"(s: $Component$$Type): $MutableComponent
public "insertion"(s: string): $MutableComponent
public "isEmpty"(): boolean
public "italic"(): $MutableComponent
public "italic"(value: boolean): $MutableComponent
public static "keybind"(string0: string): $MutableComponent
public "lightPurple"(): $MutableComponent
public static "literal"(string0: string): $MutableComponent
public static "nbt"(string0: string, boolean1: boolean, optional2: $Optional$$Type<$Component$$Type>, dataSource3: $DataSource$$Type): $MutableComponent
public "noColor"(): $MutableComponent
public static "nullToEmpty"(string0: string): $Component
public "obfuscated"(): $MutableComponent
public "obfuscated"(value: boolean): $MutableComponent
public static "of"(string0: string): $FormattedText
public static "of"(string0: string, style1: $Style$$Type): $FormattedText
public "plainCopy"(): $MutableComponent
/** @deprecated */
public "rawComponent"(): $MutableComponent
/** @deprecated */
public "rawCopy"(): $MutableComponent
public "red"(): $MutableComponent
public static "score"(string0: string, string1: string): $MutableComponent
public static "selector"(string0: string, optional1: $Optional$$Type<$Component$$Type>): $MutableComponent
public "self"(): $MutableComponent
public "setStyle"(style0: $Style$$Type): $MutableComponent
public "strikethrough"(value: boolean): $MutableComponent
public "strikethrough"(): $MutableComponent
public "toFlatList"(): $List<$Component>
public "toFlatList"(style0: $Style$$Type): $List<$Component>
public "toJson"(): $JsonElement
public static "translatable"(string0: string): $MutableComponent
public static "translatable"(string0: string, ...object1s: any[]): $MutableComponent
public static "translatableWithFallback"(string0: string, string1: string): $MutableComponent
public static "translatableWithFallback"(string0: string, string1: string, ...object2s: any[]): $MutableComponent
public "underlined"(value: boolean): $MutableComponent
public "underlined"(): $MutableComponent
public "visit"<T>(contentConsumer0: $FormattedText$ContentConsumer$$Type<T>): $Optional<T>
public "visit"<T>(styledContentConsumer0: $FormattedText$StyledContentConsumer$$Type<T>, style1: $Style$$Type): $Optional<T>
public "white"(): $MutableComponent
public "withStyle"(...chatFormatting0s: $ChatFormatting$$Type[]): $MutableComponent
public "withStyle"(chatFormatting0: $ChatFormatting$$Type): $MutableComponent
public "withStyle"(unaryOperator0: $UnaryOperator$$Type<$Style$$Type>): $MutableComponent
public "withStyle"(style0: $Style$$Type): $MutableComponent
public "yellow"(): $MutableComponent
get "contents"(): $ComponentContents
get "siblings"(): $List<$Component>
get "string"(): string
get "style"(): $Style
get "visualOrderText"(): $FormattedCharSequence
set "style"(value: $Style$$Type)
}
}

declare module "net.minecraft.network.chat.FormattedText" {
import { $List$$Type } from "java.util.List"
import { $FormattedText$ContentConsumer$$Type } from "net.minecraft.network.chat.FormattedText$ContentConsumer"
import { $Unit } from "net.minecraft.util.Unit"
import { $Optional } from "java.util.Optional"
import { $FormattedText$StyledContentConsumer$$Type } from "net.minecraft.network.chat.FormattedText$StyledContentConsumer"
import { $Style$$Type } from "net.minecraft.network.chat.Style"

export interface $FormattedText {
"getString"(): string
"visit"<T>(contentConsumer0: $FormattedText$ContentConsumer$$Type<T>): $Optional<T>
"visit"<T>(styledContentConsumer0: $FormattedText$StyledContentConsumer$$Type<T>, style1: $Style$$Type): $Optional<T>
get "string"(): string
}

export namespace $FormattedText {
const EMPTY: $FormattedText
const STOP_ITERATION: $Optional<$Unit>
function composite(list0: $List$$Type<$FormattedText$$Type>): $FormattedText
function composite(...formattedText0s: $FormattedText$$Type[]): $FormattedText
function of(string0: string): $FormattedText
function of(string0: string, style1: $Style$$Type): $FormattedText
}
export abstract class $FormattedText$$Static implements $FormattedText {
static readonly "EMPTY": $FormattedText
static readonly "STOP_ITERATION": $Optional<$Unit>

static "composite"(list0: $List$$Type<$FormattedText$$Type>): $FormattedText
static "composite"(...formattedText0s: $FormattedText$$Type[]): $FormattedText
static "of"(string0: string): $FormattedText
static "of"(string0: string, style1: $Style$$Type): $FormattedText
}
}

declare module "net.minecraft.network.chat.FormattedText$ContentConsumer" {
import { $Optional } from "java.util.Optional"

export interface $FormattedText$ContentConsumer<T = any> {
"accept"(string0: string): $Optional<T>
}

export namespace $FormattedText$ContentConsumer {
const probejs$$marker: never
}
export abstract class $FormattedText$ContentConsumer$$Static<T = any> implements $FormattedText$ContentConsumer<T> {
}
}

declare module "net.minecraft.network.chat.MessageSignature" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $MessageSignature$Packed } from "net.minecraft.network.chat.MessageSignature$Packed"
import { $MessageSignatureCache$$Type } from "net.minecraft.network.chat.MessageSignatureCache"
import { $SignatureValidator$$Type } from "net.minecraft.util.SignatureValidator"
import { $Record } from "java.lang.Record"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ByteBuffer } from "java.nio.ByteBuffer"
import { $SignatureUpdater$$Type } from "net.minecraft.util.SignatureUpdater"

export class $MessageSignature extends $Record {
static readonly "BYTES": integer
static readonly "CODEC": $Codec<$MessageSignature>

constructor(byte0s: byte[])

public "asByteBuffer"(): $ByteBuffer
public "bytes"(): byte[]
public "pack"(messageSignatureCache0: $MessageSignatureCache$$Type): $MessageSignature$Packed
public static "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $MessageSignature
public "verify"(signatureValidator0: $SignatureValidator$$Type, signatureUpdater1: $SignatureUpdater$$Type): boolean
public static "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type, messageSignature1: $MessageSignature$$Type): void
}
}

declare module "net.minecraft.network.chat.ChatType$Bound" {
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ChatType$BoundNetwork } from "net.minecraft.network.chat.ChatType$BoundNetwork"
import { $Record } from "java.lang.Record"
import { $ChatType, $ChatType$$Type } from "net.minecraft.network.chat.ChatType"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"

export class $ChatType$Bound extends $Record {
constructor(chatType0: $ChatType$$Type, component1: $Component$$Type, component2: $Component$$Type)

public "chatType"(): $ChatType
public "decorate"(component0: $Component$$Type): $Component
public "decorateNarration"(component0: $Component$$Type): $Component
public "name"(): $Component
public "targetName"(): $Component
public "toNetwork"(registryAccess0: $RegistryAccess$$Type): $ChatType$BoundNetwork
public "withTargetName"(component0: $Component$$Type): $ChatType$Bound
}
}

declare module "net.minecraft.network.chat.SignedMessageValidator" {
import { $PlayerChatMessage$$Type } from "net.minecraft.network.chat.PlayerChatMessage"

export interface $SignedMessageValidator {
"updateAndValidate"(playerChatMessage0: $PlayerChatMessage$$Type): boolean
}

export namespace $SignedMessageValidator {
const ACCEPT_UNSIGNED: $SignedMessageValidator
const REJECT_ALL: $SignedMessageValidator
}
export abstract class $SignedMessageValidator$$Static implements $SignedMessageValidator {
static readonly "ACCEPT_UNSIGNED": $SignedMessageValidator
static readonly "REJECT_ALL": $SignedMessageValidator

}
}

declare module "net.minecraft.network.chat.HoverEvent$ItemStackInfo" {
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $HoverEvent$ItemStackInfo {
constructor(itemStack0: $ItemStack$$Type)

public "getItemStack"(): $ItemStack
get "itemStack"(): $ItemStack
}
}

declare module "net.minecraft.network.chat.FormattedText$StyledContentConsumer" {
import { $Optional } from "java.util.Optional"
import { $Style$$Type } from "net.minecraft.network.chat.Style"

export interface $FormattedText$StyledContentConsumer<T = any> {
"accept"(style0: $Style$$Type, string1: string): $Optional<T>
}

export namespace $FormattedText$StyledContentConsumer {
const probejs$$marker: never
}
export abstract class $FormattedText$StyledContentConsumer$$Static<T = any> implements $FormattedText$StyledContentConsumer<T> {
}
}

declare module "net.minecraft.network.chat.LastSeenMessages$Update" {
import { $Record } from "java.lang.Record"
import { $BitSet, $BitSet$$Type } from "java.util.BitSet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $LastSeenMessages$Update extends $Record {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, bitSet1: $BitSet$$Type)

public "acknowledged"(): $BitSet
public "offset"(): integer
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
}
}

declare module "net.minecraft.network.chat.HoverEvent$Action" {
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $HoverEvent } from "net.minecraft.network.chat.HoverEvent"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $HoverEvent$ItemStackInfo } from "net.minecraft.network.chat.HoverEvent$ItemStackInfo"
import { $Function$$Type } from "java.util.function.Function"
import { $HoverEvent$EntityTooltipInfo } from "net.minecraft.network.chat.HoverEvent$EntityTooltipInfo"

export class $HoverEvent$Action<T = any> {
static readonly "SHOW_ENTITY": $HoverEvent$Action<$HoverEvent$EntityTooltipInfo>
static readonly "SHOW_ITEM": $HoverEvent$Action<$HoverEvent$ItemStackInfo>
static readonly "SHOW_TEXT": $HoverEvent$Action<$Component>

constructor(string0: string, boolean1: boolean, function2: $Function$$Type<$JsonElement$$Type, T>, function3: $Function$$Type<T, $JsonElement>, function4: $Function$$Type<$Component$$Type, T>)

public "deserialize"(jsonElement0: $JsonElement$$Type): $HoverEvent
public "deserializeFromLegacy"(component0: $Component$$Type): $HoverEvent
public static "getByName"(string0: string): $HoverEvent$Action<any>
public "getName"(): string
public "isAllowedFromServer"(): boolean
public "serializeArg"(object0: any): $JsonElement
get "name"(): string
get "allowedFromServer"(): boolean
}
}

declare module "net.minecraft.network.chat.PlayerChatMessage" {
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $FilterMask, $FilterMask$$Type } from "net.minecraft.network.chat.FilterMask"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $Record } from "java.lang.Record"
import { $MessageSignature, $MessageSignature$$Type } from "net.minecraft.network.chat.MessageSignature"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $Instant, $Instant$$Type } from "java.time.Instant"
import { $Duration } from "java.time.Duration"
import { $SignatureValidator$$Type } from "net.minecraft.util.SignatureValidator"
import { $SignedMessageLink, $SignedMessageLink$$Type } from "net.minecraft.network.chat.SignedMessageLink"
import { $SignatureUpdater$Output$$Type } from "net.minecraft.util.SignatureUpdater$Output"
import { $SignedMessageBody, $SignedMessageBody$$Type } from "net.minecraft.network.chat.SignedMessageBody"

export class $PlayerChatMessage extends $Record {
static readonly "MAP_CODEC": $MapCodec<$PlayerChatMessage>
static readonly "MESSAGE_EXPIRES_AFTER_CLIENT": $Duration
static readonly "MESSAGE_EXPIRES_AFTER_SERVER": $Duration

constructor(signedMessageLink0: $SignedMessageLink$$Type, messageSignature1: $MessageSignature$$Type, signedMessageBody2: $SignedMessageBody$$Type, component3: $Component$$Type, filterMask4: $FilterMask$$Type)

public "decoratedContent"(): $Component
public "filter"(filterMask0: $FilterMask$$Type): $PlayerChatMessage
public "filter"(boolean0: boolean): $PlayerChatMessage
public "filterMask"(): $FilterMask
public "hasExpiredClient"(instant0: $Instant$$Type): boolean
public "hasExpiredServer"(instant0: $Instant$$Type): boolean
public "hasSignature"(): boolean
public "hasSignatureFrom"(uUID0: $UUID$$Type): boolean
public "isFullyFiltered"(): boolean
public "isSystem"(): boolean
public "link"(): $SignedMessageLink
public "removeUnsignedContent"(): $PlayerChatMessage
public "salt"(): long
public "sender"(): $UUID
public "signature"(): $MessageSignature
public "signedBody"(): $SignedMessageBody
public "signedContent"(): string
public static "system"(string0: string): $PlayerChatMessage
public "timeStamp"(): $Instant
public static "unsigned"(uUID0: $UUID$$Type, string1: string): $PlayerChatMessage
public "unsignedContent"(): $Component
public static "updateSignature"(output0: $SignatureUpdater$Output$$Type, signedMessageLink1: $SignedMessageLink$$Type, signedMessageBody2: $SignedMessageBody$$Type): void
public "verify"(signatureValidator0: $SignatureValidator$$Type): boolean
public "withUnsignedContent"(component0: $Component$$Type): $PlayerChatMessage
get "fullyFiltered"(): boolean
}
}

declare module "net.minecraft.network.chat.TextColor" {
import { $IColor } from "com.anthonyhilyard.prism.util.IColor"
import { $Codec } from "com.mojang.serialization.Codec"
import { $ChatFormatting$$Type } from "net.minecraft.ChatFormatting"
import { $Map } from "java.util.Map"
import { $Color } from "dev.latvian.mods.rhino.mod.util.color.Color"

export class $TextColor implements $IColor, $Color {
static readonly "CODEC": $Codec<$TextColor>
static "NAMED_COLORS": $Map<string, $TextColor>
readonly "value": integer

constructor(int0: integer, string1: string)

public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public "createTextColorJS"(): $TextColor
public static "fromLegacyFormat"(chatFormatting0: $ChatFormatting$$Type): $TextColor
public static "fromRgb"(int0: integer): $TextColor
public "getArgbJS"(): integer
public "getFireworkColorJS"(): integer
public "getHexJS"(): string
public "getName"(): string
public "getRgbJS"(): integer
public "getSerializeJS"(): string
public "getValue"(): integer
public "getValue"(): integer
public "isAnimated"(): boolean
public static "parseColor"(string0: string): $TextColor
public "serialize"(): string
public "specialEquals"(o: any, shallow: boolean): boolean
get "argbJS"(): integer
get "fireworkColorJS"(): integer
get "hexJS"(): string
get "name"(): string
get "rgbJS"(): integer
get "serializeJS"(): string
get "animated"(): boolean
}
}

declare module "net.minecraft.network.chat.MessageSignature$Packed" {
import { $MessageSignatureCache$$Type } from "net.minecraft.network.chat.MessageSignatureCache"
import { $Optional } from "java.util.Optional"
import { $Record } from "java.lang.Record"
import { $MessageSignature, $MessageSignature$$Type } from "net.minecraft.network.chat.MessageSignature"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $MessageSignature$Packed extends $Record {
static readonly "FULL_SIGNATURE": integer

constructor(int0: integer)
constructor(messageSignature0: $MessageSignature$$Type)
constructor(int0: integer, messageSignature1: $MessageSignature$$Type)

public "fullSignature"(): $MessageSignature
public "id"(): integer
public static "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $MessageSignature$Packed
public "unpack"(messageSignatureCache0: $MessageSignatureCache$$Type): $Optional<$MessageSignature>
public static "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type, packed1: $MessageSignature$Packed$$Type): void
}
}

declare module "net.minecraft.network.chat.ChatType$BoundNetwork" {
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ChatType$Bound } from "net.minecraft.network.chat.ChatType$Bound"
import { $Optional } from "java.util.Optional"
import { $Record } from "java.lang.Record"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"

export class $ChatType$BoundNetwork extends $Record {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, component1: $Component$$Type, component2: $Component$$Type)

public "chatType"(): integer
public "name"(): $Component
public "resolve"(registryAccess0: $RegistryAccess$$Type): $Optional<$ChatType$Bound>
public "targetName"(): $Component
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
}
}

declare module "net.minecraft.network.chat.ChatTypeDecoration$Parameter" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $ChatType$Bound$$Type } from "net.minecraft.network.chat.ChatType$Bound"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $ChatTypeDecoration$Parameter extends $Enum<$ChatTypeDecoration$Parameter> implements $StringRepresentable {
static readonly "CODEC": $Codec<$ChatTypeDecoration$Parameter>
static readonly "CONTENT": $ChatTypeDecoration$Parameter
static readonly "SENDER": $ChatTypeDecoration$Parameter
static readonly "TARGET": $ChatTypeDecoration$Parameter

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "select"(component0: $Component$$Type, bound1: $ChatType$Bound$$Type): $Component
public static "valueOf"(string0: string): $ChatTypeDecoration$Parameter
public static "values"(): $ChatTypeDecoration$Parameter[]
get "serializedName"(): string
}
}

declare module "net.minecraft.network.chat.SignableCommand" {
import { $List, $List$$Type } from "java.util.List"
import { $SignableCommand$Argument, $SignableCommand$Argument$$Type } from "net.minecraft.network.chat.SignableCommand$Argument"
import { $ParseResults$$Type } from "com.mojang.brigadier.ParseResults"
import { $Record } from "java.lang.Record"

export class $SignableCommand<S = any> extends $Record {
constructor(list0: $List$$Type<$SignableCommand$Argument$$Type<S>>)

public "arguments"(): $List<$SignableCommand$Argument<S>>
public static "of"<S>(parseResults0: $ParseResults$$Type<S>): $SignableCommand<S>
}
}

declare module "net.minecraft.network.chat.Component" {
import { $List, $List$$Type } from "java.util.List"
import { $ComponentContents } from "net.minecraft.network.chat.ComponentContents"
import { $DataSource$$Type } from "net.minecraft.network.chat.contents.DataSource"
import { $FormattedText, $FormattedText$$Type } from "net.minecraft.network.chat.FormattedText"
import { $Message } from "com.mojang.brigadier.Message"
import { $FormattedText$ContentConsumer$$Type } from "net.minecraft.network.chat.FormattedText$ContentConsumer"
import { $FormattedCharSequence } from "net.minecraft.util.FormattedCharSequence"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $FormattedText$StyledContentConsumer$$Type } from "net.minecraft.network.chat.FormattedText$StyledContentConsumer"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $Style, $Style$$Type } from "net.minecraft.network.chat.Style"

export interface $Component extends $Message, $FormattedText {
"contains"(component0: $Component$$Type): boolean
"copy"(): $MutableComponent
"getContents"(): $ComponentContents
"getSiblings"(): $List<$Component>
"getString"(): string
"getString"(int0: integer): string
"getStyle"(): $Style
"getVisualOrderText"(): $FormattedCharSequence
"plainCopy"(): $MutableComponent
"toFlatList"(): $List<$Component>
"toFlatList"(style0: $Style$$Type): $List<$Component>
"visit"<T>(contentConsumer0: $FormattedText$ContentConsumer$$Type<T>): $Optional<T>
"visit"<T>(styledContentConsumer0: $FormattedText$StyledContentConsumer$$Type<T>, style1: $Style$$Type): $Optional<T>
get "contents"(): $ComponentContents
get "siblings"(): $List<$Component>
get "string"(): string
get "style"(): $Style
get "visualOrderText"(): $FormattedCharSequence
}

export namespace $Component {
function composite(list0: $List$$Type<$FormattedText$$Type>): $FormattedText
function composite(...formattedText0s: $FormattedText$$Type[]): $FormattedText
function empty(): $MutableComponent
function keybind(string0: string): $MutableComponent
function literal(string0: string): $MutableComponent
function nbt(string0: string, boolean1: boolean, optional2: $Optional$$Type<$Component$$Type>, dataSource3: $DataSource$$Type): $MutableComponent
function nullToEmpty(string0: string): $Component
function of(string0: string): $FormattedText
function of(string0: string, style1: $Style$$Type): $FormattedText
function score(string0: string, string1: string): $MutableComponent
function selector(string0: string, optional1: $Optional$$Type<$Component$$Type>): $MutableComponent
function translatable(string0: string): $MutableComponent
function translatable(string0: string, ...object1s: any[]): $MutableComponent
function translatableWithFallback(string0: string, string1: string): $MutableComponent
function translatableWithFallback(string0: string, string1: string, ...object2s: any[]): $MutableComponent
}
export abstract class $Component$$Static implements $Component {
static "composite"(list0: $List$$Type<$FormattedText$$Type>): $FormattedText
static "composite"(...formattedText0s: $FormattedText$$Type[]): $FormattedText
static "empty"(): $MutableComponent
static "keybind"(string0: string): $MutableComponent
static "literal"(string0: string): $MutableComponent
static "nbt"(string0: string, boolean1: boolean, optional2: $Optional$$Type<$Component$$Type>, dataSource3: $DataSource$$Type): $MutableComponent
static "nullToEmpty"(string0: string): $Component
static "of"(string0: string): $FormattedText
static "of"(string0: string, style1: $Style$$Type): $FormattedText
static "score"(string0: string, string1: string): $MutableComponent
static "selector"(string0: string, optional1: $Optional$$Type<$Component$$Type>): $MutableComponent
static "translatable"(string0: string): $MutableComponent
static "translatable"(string0: string, ...object1s: any[]): $MutableComponent
static "translatableWithFallback"(string0: string, string1: string): $MutableComponent
static "translatableWithFallback"(string0: string, string1: string, ...object2s: any[]): $MutableComponent
}
}

declare module "net.minecraft.network.chat.ClickEvent$Action" {
import { $Enum } from "java.lang.Enum"

export class $ClickEvent$Action extends $Enum<$ClickEvent$Action> {
static readonly "CHANGE_PAGE": $ClickEvent$Action
static readonly "COPY_TO_CLIPBOARD": $ClickEvent$Action
static readonly "OPEN_FILE": $ClickEvent$Action
static readonly "OPEN_URL": $ClickEvent$Action
static readonly "RUN_COMMAND": $ClickEvent$Action
static readonly "SUGGEST_COMMAND": $ClickEvent$Action

public static "getByName"(string0: string): $ClickEvent$Action
public "getName"(): string
public "isAllowedFromServer"(): boolean
public static "valueOf"(string0: string): $ClickEvent$Action
public static "values"(): $ClickEvent$Action[]
get "name"(): string
get "allowedFromServer"(): boolean
}
}

declare module "net.minecraft.network.chat.MessageSignatureCache" {
import { $PlayerChatMessage$$Type } from "net.minecraft.network.chat.PlayerChatMessage"
import { $MessageSignature, $MessageSignature$$Type } from "net.minecraft.network.chat.MessageSignature"

export class $MessageSignatureCache {
static readonly "NOT_FOUND": integer

constructor(int0: integer)

public static "createDefault"(): $MessageSignatureCache
public "pack"(messageSignature0: $MessageSignature$$Type): integer
public "push"(playerChatMessage0: $PlayerChatMessage$$Type): void
public "unpack"(int0: integer): $MessageSignature
}
}

declare module "net.minecraft.network.chat.HoverEvent$EntityTooltipInfo" {
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $List } from "java.util.List"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $EntityType, $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $UUID, $UUID$$Type } from "java.util.UUID"

export class $HoverEvent$EntityTooltipInfo {
readonly "id": $UUID
readonly "name": $Component
readonly "type": $EntityType<any>

constructor(entityType0: $EntityType$$Type<any>, uUID1: $UUID$$Type, component2: $Component$$Type)

public static "create"(jsonElement0: $JsonElement$$Type): $HoverEvent$EntityTooltipInfo
public static "create"(component0: $Component$$Type): $HoverEvent$EntityTooltipInfo
public "getTooltipLines"(): $List<$Component>
public "serialize"(): $JsonElement
get "tooltipLines"(): $List<$Component>
}
}

declare module "net.minecraft.network.chat.ChatTypeDecoration" {
import { $List, $List$$Type } from "java.util.List"
import { $ChatTypeDecoration$Parameter, $ChatTypeDecoration$Parameter$$Type } from "net.minecraft.network.chat.ChatTypeDecoration$Parameter"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ChatType$Bound$$Type } from "net.minecraft.network.chat.ChatType$Bound"
import { $Record } from "java.lang.Record"
import { $Style, $Style$$Type } from "net.minecraft.network.chat.Style"

export class $ChatTypeDecoration extends $Record {
static readonly "CODEC": $Codec<$ChatTypeDecoration>

constructor(string0: string, list1: $List$$Type<$ChatTypeDecoration$Parameter$$Type>, style2: $Style$$Type)

public "decorate"(component0: $Component$$Type, bound1: $ChatType$Bound$$Type): $Component
public static "incomingDirectMessage"(string0: string): $ChatTypeDecoration
public static "outgoingDirectMessage"(string0: string): $ChatTypeDecoration
public "parameters"(): $List<$ChatTypeDecoration$Parameter>
public "style"(): $Style
public static "teamMessage"(string0: string): $ChatTypeDecoration
public "translationKey"(): string
public static "withSender"(string0: string): $ChatTypeDecoration
}
}

declare module "net.minecraft.network.chat.RemoteChatSession" {
import { $ProfilePublicKey, $ProfilePublicKey$$Type } from "net.minecraft.world.entity.player.ProfilePublicKey"
import { $RemoteChatSession$Data } from "net.minecraft.network.chat.RemoteChatSession$Data"
import { $SignedMessageValidator } from "net.minecraft.network.chat.SignedMessageValidator"
import { $SignedMessageChain$Decoder } from "net.minecraft.network.chat.SignedMessageChain$Decoder"
import { $Record } from "java.lang.Record"
import { $UUID, $UUID$$Type } from "java.util.UUID"

export class $RemoteChatSession extends $Record {
constructor(uUID0: $UUID$$Type, profilePublicKey1: $ProfilePublicKey$$Type)

public "asData"(): $RemoteChatSession$Data
public "createMessageDecoder"(uUID0: $UUID$$Type): $SignedMessageChain$Decoder
public "createMessageValidator"(): $SignedMessageValidator
public "hasExpired"(): boolean
public "profilePublicKey"(): $ProfilePublicKey
public "sessionId"(): $UUID
}
}

declare module "net.minecraft.network.chat.LastSeenMessages" {
import { $List, $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $MessageSignatureCache$$Type } from "net.minecraft.network.chat.MessageSignatureCache"
import { $LastSeenMessages$Packed } from "net.minecraft.network.chat.LastSeenMessages$Packed"
import { $Record } from "java.lang.Record"
import { $MessageSignature, $MessageSignature$$Type } from "net.minecraft.network.chat.MessageSignature"
import { $SignatureUpdater$Output$$Type } from "net.minecraft.util.SignatureUpdater$Output"

export class $LastSeenMessages extends $Record {
static readonly "CODEC": $Codec<$LastSeenMessages>
static "EMPTY": $LastSeenMessages
static readonly "LAST_SEEN_MESSAGES_MAX_LENGTH": integer

constructor(list0: $List$$Type<$MessageSignature$$Type>)

public "entries"(): $List<$MessageSignature>
public "pack"(messageSignatureCache0: $MessageSignatureCache$$Type): $LastSeenMessages$Packed
public "updateSignature"(output0: $SignatureUpdater$Output$$Type): void
}
}

declare module "net.minecraft.network.chat.ClickEvent" {
import { $JsonElement } from "com.google.gson.JsonElement"
import { $JsonSerializable } from "dev.latvian.mods.rhino.mod.util.JsonSerializable"
import { $ClickEvent$Action, $ClickEvent$Action$$Type } from "net.minecraft.network.chat.ClickEvent$Action"

export class $ClickEvent implements $JsonSerializable {
constructor(action0: $ClickEvent$Action$$Type, string1: string)

public "getAction"(): $ClickEvent$Action
public "getValue"(): string
public "toJson"(): $JsonElement
get "action"(): $ClickEvent$Action
get "value"(): string
}
}

declare module "net.minecraft.network.chat.SignedMessageBody$Packed" {
import { $MessageSignatureCache$$Type } from "net.minecraft.network.chat.MessageSignatureCache"
import { $LastSeenMessages$Packed, $LastSeenMessages$Packed$$Type } from "net.minecraft.network.chat.LastSeenMessages$Packed"
import { $Optional } from "java.util.Optional"
import { $Record } from "java.lang.Record"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Instant, $Instant$$Type } from "java.time.Instant"
import { $SignedMessageBody } from "net.minecraft.network.chat.SignedMessageBody"

export class $SignedMessageBody$Packed extends $Record {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(string0: string, instant1: $Instant$$Type, long2: long, packed3: $LastSeenMessages$Packed$$Type)

public "content"(): string
public "lastSeen"(): $LastSeenMessages$Packed
public "salt"(): long
public "timeStamp"(): $Instant
public "unpack"(messageSignatureCache0: $MessageSignatureCache$$Type): $Optional<$SignedMessageBody>
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
}
}

