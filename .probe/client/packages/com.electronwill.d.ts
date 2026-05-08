declare module "com.electronwill.nightconfig.core.file.FileConfigBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FileConfigBuilder$$Type = ($FileConfigBuilder);
}

declare module "com.electronwill.nightconfig.core.ConfigSpec$CorrectionListener" {
import { $List } from "java.util.List"
import { $ConfigSpec$CorrectionAction } from "com.electronwill.nightconfig.core.ConfigSpec$CorrectionAction"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ConfigSpec$CorrectionListener$$Type = ($ConfigSpec$CorrectionListener | ((arg0: $ConfigSpec$CorrectionAction, arg1: $List<string>, arg2: any, arg3: any) => void));
}

declare module "com.electronwill.nightconfig.core.UnmodifiableConfig$Entry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $UnmodifiableConfig$Entry$$Type = ($UnmodifiableConfig$Entry);
}

declare module "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig$CommentNode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $UnmodifiableCommentedConfig$CommentNode$$Type = ($UnmodifiableCommentedConfig$CommentNode);
}

declare module "com.electronwill.nightconfig.core.EnumGetMethod" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EnumGetMethod$$Type = ($EnumGetMethod | ("name" | "name_ignorecase" | "ordinal_or_name" | "ordinal_or_name_ignorecase"));
}

declare module "com.electronwill.nightconfig.core.file.FileConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FileConfig$$Type = ($FileConfig);
}

declare module "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig$Entry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $UnmodifiableCommentedConfig$Entry$$Type = ($UnmodifiableCommentedConfig$Entry);
}

declare module "com.electronwill.nightconfig.core.UnmodifiableConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $UnmodifiableConfig$$Type = ($UnmodifiableConfig);
}

declare module "com.electronwill.nightconfig.core.io.WritingMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WritingMode$$Type = ($WritingMode | ("replace" | "append"));
}

declare module "com.electronwill.nightconfig.core.Config" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Config$$Type = ($Config);
}

declare module "com.electronwill.nightconfig.core.file.CommentedFileConfigBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CommentedFileConfigBuilder$$Type = ($CommentedFileConfigBuilder);
}

declare module "com.electronwill.nightconfig.core.ConfigFormat" {
import { $Config, $Config$$Type } from "com.electronwill.nightconfig.core.Config"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ConfigFormat$$Type<C extends $Config = $Config> = ($ConfigFormat<C>);
}

declare module "com.electronwill.nightconfig.core.file.CommentedFileConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CommentedFileConfig$$Type = ($CommentedFileConfig);
}

declare module "com.electronwill.nightconfig.core.CommentedConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CommentedConfig$$Type = ($CommentedConfig);
}

declare module "com.electronwill.nightconfig.core.ConfigSpec$CorrectionAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ConfigSpec$CorrectionAction$$Type = ($ConfigSpec$CorrectionAction | ("add" | "replace" | "remove"));
}

declare module "com.electronwill.nightconfig.core.Config$Entry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Config$Entry$$Type = ($Config$Entry);
}

declare module "com.electronwill.nightconfig.core.file.FileNotFoundAction" {
import { $Path } from "java.nio.file.Path"
import { $ConfigFormat } from "com.electronwill.nightconfig.core.ConfigFormat"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FileNotFoundAction$$Type = ($FileNotFoundAction | ((arg0: $Path, arg1: $ConfigFormat<any>) => boolean));
}

declare module "com.electronwill.nightconfig.core.io.ConfigParser" {
import { $Config, $Config$$Type } from "com.electronwill.nightconfig.core.Config"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ConfigParser$$Type<C extends $Config = $Config> = ($ConfigParser<C>);
}

declare module "com.electronwill.nightconfig.core.io.ConfigWriter" {
import { $Writer } from "java.io.Writer"
import { $UnmodifiableConfig } from "com.electronwill.nightconfig.core.UnmodifiableConfig"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ConfigWriter$$Type = ($ConfigWriter | ((arg0: $UnmodifiableConfig, arg1: $Writer) => void));
}

declare module "com.electronwill.nightconfig.core.utils.WriterSupplier" {
import { $Writer$$Type } from "java.io.Writer"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WriterSupplier$$Type = ($WriterSupplier | (() => $Writer$$Type));
}

declare module "com.electronwill.nightconfig.core.file.GenericBuilder" {
import { $Config, $Config$$Type } from "com.electronwill.nightconfig.core.Config"
import { $FileConfig, $FileConfig$$Type } from "com.electronwill.nightconfig.core.file.FileConfig"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GenericBuilder$$Type<Base extends $Config = $Config, Result extends $FileConfig = $FileConfig> = ($GenericBuilder<Base, Result>);
}

declare module "com.electronwill.nightconfig.core.CommentedConfig$Entry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CommentedConfig$Entry$$Type = ($CommentedConfig$Entry);
}

declare module "com.electronwill.nightconfig.core.io.ParsingMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ParsingMode$$Type = ($ParsingMode | ("replace" | "merge" | "add"));
}

declare module "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $UnmodifiableCommentedConfig$$Type = ($UnmodifiableCommentedConfig);
}

declare module "com.electronwill.nightconfig.core.utils.UnmodifiableConfigWrapper" {
import { $UnmodifiableConfig, $UnmodifiableConfig$$Type } from "com.electronwill.nightconfig.core.UnmodifiableConfig"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $UnmodifiableConfigWrapper$$Type<C extends $UnmodifiableConfig = $UnmodifiableConfig> = ($UnmodifiableConfigWrapper<C>);
}

