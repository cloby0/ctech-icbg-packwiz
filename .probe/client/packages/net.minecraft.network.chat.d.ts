declare module "net.minecraft.network.chat.Style" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Style$$Type = ($Style);
}

declare module "net.minecraft.network.chat.LastSeenMessages$Packed" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LastSeenMessages$Packed$$Type = ($LastSeenMessages$Packed);
}

declare module "net.minecraft.network.chat.SignedMessageBody" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SignedMessageBody$$Type = ($SignedMessageBody);
}

declare module "net.minecraft.network.chat.SignableCommand$Argument" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SignableCommand$Argument$$Type<S = any> = ($SignableCommand$Argument<S>);
}

declare module "net.minecraft.network.chat.FilterMask" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FilterMask$$Type = ($FilterMask);
}

declare module "net.minecraft.network.chat.SignedMessageChain$Decoder" {
import { $PlayerChatMessage$$Type } from "net.minecraft.network.chat.PlayerChatMessage"
import { $MessageSignature } from "net.minecraft.network.chat.MessageSignature"
import { $SignedMessageBody } from "net.minecraft.network.chat.SignedMessageBody"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SignedMessageChain$Decoder$$Type = ($SignedMessageChain$Decoder | ((arg0: $MessageSignature, arg1: $SignedMessageBody) => $PlayerChatMessage$$Type));
}

declare module "net.minecraft.network.chat.ChatDecorator" {
import { $ServerPlayer } from "net.minecraft.server.level.ServerPlayer"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $CompletableFuture$$Type } from "java.util.concurrent.CompletableFuture"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChatDecorator$$Type = ($ChatDecorator | ((arg0: $ServerPlayer, arg1: $Component) => $CompletableFuture$$Type<$Component$$Type>));
}

declare module "net.minecraft.network.chat.ComponentContents" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ComponentContents$$Type = ($ComponentContents);
}

declare module "net.minecraft.network.chat.RemoteChatSession$Data" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RemoteChatSession$Data$$Type = ($RemoteChatSession$Data);
}

declare module "net.minecraft.network.chat.SignedMessageLink" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SignedMessageLink$$Type = ($SignedMessageLink);
}

declare module "net.minecraft.network.chat.OutgoingChatMessage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $OutgoingChatMessage$$Type = ($OutgoingChatMessage);
}

declare module "net.minecraft.network.chat.contents.DataSource" {
import { $Stream$$Type } from "java.util.stream.Stream"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $CommandSourceStack } from "net.minecraft.commands.CommandSourceStack"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DataSource$$Type = ($DataSource | ((arg0: $CommandSourceStack) => $Stream$$Type<$CompoundTag$$Type>));
}

declare module "net.minecraft.network.chat.HoverEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HoverEvent$$Type = ($HoverEvent);
}

declare module "net.minecraft.network.chat.MutableComponent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MutableComponent$$Type = ($MutableComponent);
}

declare module "net.minecraft.network.chat.FormattedText" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FormattedText$$Type = ($FormattedText);
}

declare module "net.minecraft.network.chat.FormattedText$ContentConsumer" {
import { $Optional$$Type } from "java.util.Optional"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FormattedText$ContentConsumer$$Type<T = any> = ($FormattedText$ContentConsumer<T> | ((arg0: string) => $Optional$$Type<T>));
}

declare module "net.minecraft.network.chat.MessageSignature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MessageSignature$$Type = ($MessageSignature);
}

declare module "net.minecraft.network.chat.ChatType$Bound" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChatType$Bound$$Type = ($ChatType$Bound);
}

declare module "net.minecraft.network.chat.SignedMessageValidator" {
import { $PlayerChatMessage } from "net.minecraft.network.chat.PlayerChatMessage"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SignedMessageValidator$$Type = ($SignedMessageValidator | ((arg0: $PlayerChatMessage) => boolean));
}

declare module "net.minecraft.network.chat.HoverEvent$ItemStackInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HoverEvent$ItemStackInfo$$Type = ($HoverEvent$ItemStackInfo);
}

declare module "net.minecraft.network.chat.FormattedText$StyledContentConsumer" {
import { $Optional$$Type } from "java.util.Optional"
import { $Style } from "net.minecraft.network.chat.Style"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FormattedText$StyledContentConsumer$$Type<T = any> = ($FormattedText$StyledContentConsumer<T> | ((arg0: $Style, arg1: string) => $Optional$$Type<T>));
}

declare module "net.minecraft.network.chat.LastSeenMessages$Update" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LastSeenMessages$Update$$Type = ($LastSeenMessages$Update);
}

declare module "net.minecraft.network.chat.HoverEvent$Action" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HoverEvent$Action$$Type<T = any> = ($HoverEvent$Action<T>);
}

declare module "net.minecraft.network.chat.PlayerChatMessage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PlayerChatMessage$$Type = ($PlayerChatMessage);
}

declare module "net.minecraft.network.chat.TextColor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TextColor$$Type = ($TextColor | ("" | "light_blue_dye" | "blue_dye" | "purple_dye" | "dark_red" | "lightgraydye" | "dark_aqua" | "none" | "green_dye" | "blackdye" | "dark_blue" | "red" | "pink_dye" | "aqua" | "white" | "white_dye" | "dark_gray" | "light_purple" | "brown_dye" | "black" | "darkpurple" | "lightbluedye" | "limedye" | "magenta_dye" | "-" | "lime_dye" | "yellowdye" | "graydye" | "purpledye" | "dark_purple" | "orange_dye" | "darkgray" | "browndye" | "yellow" | "bluedye" | "pinkdye" | "cyandye" | "gold" | "gray" | "blue" | "darkblue" | "transparent" | "red_dye" | "darkred" | "greendye" | "reddye" | "gray_dye" | "orangedye" | "yellow_dye" | "black_dye" | "magentadye" | "green" | "light_gray_dye" | "darkgreen" | "dark_green" | "lightpurple" | "darkaqua" | "cyan_dye" | "whitedye") | `#${string}` | integer);
}

declare module "net.minecraft.network.chat.MessageSignature$Packed" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MessageSignature$Packed$$Type = ($MessageSignature$Packed);
}

declare module "net.minecraft.network.chat.ChatType$BoundNetwork" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChatType$BoundNetwork$$Type = ($ChatType$BoundNetwork);
}

declare module "net.minecraft.network.chat.ChatTypeDecoration$Parameter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChatTypeDecoration$Parameter$$Type = ($ChatTypeDecoration$Parameter | ("sender" | "target" | "content"));
}

declare module "net.minecraft.network.chat.SignableCommand" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SignableCommand$$Type<S = any> = ($SignableCommand<S>);
}

declare module "net.minecraft.network.chat.Component" {
import { $Color$$Type } from "dev.latvian.mods.rhino.mod.util.color.Color"
import { $ClickEvent$$Type } from "net.minecraft.network.chat.ClickEvent"

export type ComponentObject = {"text"?: string, "translate"?: Special.LangKey, "with"?: any[], "color"?: $Color$$Type, "bold"?: boolean, "italic"?: boolean, "underlined"?: boolean, "strikethrough"?: boolean, "obfuscated"?: boolean, "insertion"?: string, "font"?: string, "click"?: $ClickEvent$$Type, "hover"?: $Component$$Type, "extra"?: $Component$$Type[]};
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Component$$Type = ($Component | $Component$$Type[] | ComponentObject | string | number | boolean);
}

declare module "net.minecraft.network.chat.ClickEvent$Action" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ClickEvent$Action$$Type = ($ClickEvent$Action | ("open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard"));
}

declare module "net.minecraft.network.chat.MessageSignatureCache" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MessageSignatureCache$$Type = ($MessageSignatureCache);
}

declare module "net.minecraft.network.chat.HoverEvent$EntityTooltipInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HoverEvent$EntityTooltipInfo$$Type = ($HoverEvent$EntityTooltipInfo);
}

declare module "net.minecraft.network.chat.ChatTypeDecoration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChatTypeDecoration$$Type = ($ChatTypeDecoration);
}

declare module "net.minecraft.network.chat.ChatType" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $BootstapContext$$Type } from "net.minecraft.data.worldgen.BootstapContext"
import { $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $ChatType$Bound } from "net.minecraft.network.chat.ChatType$Bound"
import { $Record } from "java.lang.Record"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $ChatTypeDecoration, $ChatTypeDecoration$$Type } from "net.minecraft.network.chat.ChatTypeDecoration"

export class $ChatType extends $Record {
static readonly "CHAT": $ResourceKey<$ChatType>
static readonly "CODEC": $Codec<$ChatType>
static readonly "DEFAULT_CHAT_DECORATION": $ChatTypeDecoration
static readonly "EMOTE_COMMAND": $ResourceKey<$ChatType>
static readonly "MSG_COMMAND_INCOMING": $ResourceKey<$ChatType>
static readonly "MSG_COMMAND_OUTGOING": $ResourceKey<$ChatType>
static readonly "SAY_COMMAND": $ResourceKey<$ChatType>
static readonly "TEAM_MSG_COMMAND_INCOMING": $ResourceKey<$ChatType>
static readonly "TEAM_MSG_COMMAND_OUTGOING": $ResourceKey<$ChatType>

constructor(chatTypeDecoration0: $ChatTypeDecoration$$Type, chatTypeDecoration1: $ChatTypeDecoration$$Type)

public "bind"(component0: $Component$$Type): $ChatType$Bound
public static "bind"(resourceKey0: $ResourceKey$$Type<$ChatType>, registryAccess1: $RegistryAccess$$Type, component2: $Component$$Type): $ChatType$Bound
public static "bind"(resourceKey0: $ResourceKey$$Type<$ChatType>, commandSourceStack1: $CommandSourceStack$$Type): $ChatType$Bound
public static "bind"(resourceKey0: $ResourceKey$$Type<$ChatType>, entity1: $Entity$$Type): $ChatType$Bound
public static "bootstrap"(bootstapContext0: $BootstapContext$$Type<$ChatType$$Type>): void
public "chat"(): $ChatTypeDecoration
public "narration"(): $ChatTypeDecoration
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.ChatType
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.ChatTypeTag
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChatType$$Type = ($ChatType | Special.ChatType);
}

declare module "net.minecraft.network.chat.RemoteChatSession" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RemoteChatSession$$Type = ($RemoteChatSession);
}

declare module "net.minecraft.network.chat.LastSeenMessages" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LastSeenMessages$$Type = ($LastSeenMessages);
}

declare module "net.minecraft.network.chat.ClickEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ClickEvent$$Type = ($ClickEvent | {"action": ("open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard"), "value": string} | string);
}

declare module "net.minecraft.network.chat.SignedMessageBody$Packed" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SignedMessageBody$Packed$$Type = ($SignedMessageBody$Packed);
}

