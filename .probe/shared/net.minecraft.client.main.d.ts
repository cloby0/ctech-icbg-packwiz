declare module "net.minecraft.client.main.GameConfig$UserData" {
import { $User, $User$$Type } from "net.minecraft.client.User"
import { $PropertyMap, $PropertyMap$$Type } from "com.mojang.authlib.properties.PropertyMap"
import { $Proxy, $Proxy$$Type } from "java.net.Proxy"

export class $GameConfig$UserData {
readonly "profileProperties": $PropertyMap
readonly "proxy": $Proxy
readonly "user": $User
readonly "userProperties": $PropertyMap

constructor(user0: $User$$Type, propertyMap1: $PropertyMap$$Type, propertyMap2: $PropertyMap$$Type, proxy3: $Proxy$$Type)

}
}

declare module "net.minecraft.client.main.GameConfig$QuickPlayData" {
import { $Record } from "java.lang.Record"

export class $GameConfig$QuickPlayData extends $Record {
constructor(string0: string, string1: string, string2: string, string3: string)

public "isEnabled"(): boolean
public "multiplayer"(): string
public "path"(): string
public "realms"(): string
public "singleplayer"(): string
get "enabled"(): boolean
}
}

declare module "net.minecraft.client.main.GameConfig$FolderData" {
import { $Path } from "java.nio.file.Path"
import { $File, $File$$Type } from "java.io.File"

export class $GameConfig$FolderData {
readonly "assetDirectory": $File
readonly "assetIndex": string
readonly "gameDirectory": $File
readonly "resourcePackDirectory": $File

constructor(file0: $File$$Type, file1: $File$$Type, file2: $File$$Type, string3: string)

public "getExternalAssetSource"(): $Path
get "externalAssetSource"(): $Path
}
}

declare module "net.minecraft.client.main.GameConfig$GameData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $GameConfig$GameData {
readonly "demo": boolean
readonly "disableChat": boolean
readonly "disableMultiplayer": boolean
readonly "launchVersion": string
readonly "versionType": string

constructor(boolean0: boolean, string1: string, string2: string, boolean3: boolean, boolean4: boolean)

}
}

declare module "net.minecraft.client.main.GameConfig" {
import { $GameConfig$UserData, $GameConfig$UserData$$Type } from "net.minecraft.client.main.GameConfig$UserData"
import { $DisplayData, $DisplayData$$Type } from "com.mojang.blaze3d.platform.DisplayData"
import { $GameConfig$GameData, $GameConfig$GameData$$Type } from "net.minecraft.client.main.GameConfig$GameData"
import { $GameConfig$FolderData, $GameConfig$FolderData$$Type } from "net.minecraft.client.main.GameConfig$FolderData"
import { $GameConfig$QuickPlayData, $GameConfig$QuickPlayData$$Type } from "net.minecraft.client.main.GameConfig$QuickPlayData"

export class $GameConfig {
readonly "display": $DisplayData
readonly "game": $GameConfig$GameData
readonly "location": $GameConfig$FolderData
readonly "quickPlay": $GameConfig$QuickPlayData
readonly "user": $GameConfig$UserData

constructor(userData0: $GameConfig$UserData$$Type, displayData1: $DisplayData$$Type, folderData2: $GameConfig$FolderData$$Type, gameData3: $GameConfig$GameData$$Type, quickPlayData4: $GameConfig$QuickPlayData$$Type)

}
}

