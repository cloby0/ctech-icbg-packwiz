declare module "javax.sound.sampled.AudioFormat$Encoding" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AudioFormat$Encoding {
static readonly "ALAW": $AudioFormat$Encoding
static readonly "PCM_FLOAT": $AudioFormat$Encoding
static readonly "PCM_SIGNED": $AudioFormat$Encoding
static readonly "PCM_UNSIGNED": $AudioFormat$Encoding
static readonly "ULAW": $AudioFormat$Encoding

constructor(string0: string)

}
}

declare module "javax.sound.sampled.AudioFormat" {
import { $Map, $Map$$Type } from "java.util.Map"
import { $AudioFormat$Encoding, $AudioFormat$Encoding$$Type } from "javax.sound.sampled.AudioFormat$Encoding"

export class $AudioFormat {
constructor(encoding0: $AudioFormat$Encoding$$Type, float1: float, int2: integer, int3: integer, int4: integer, float5: float, boolean6: boolean)
constructor(float0: float, int1: integer, int2: integer, boolean3: boolean, boolean4: boolean)
constructor(encoding0: $AudioFormat$Encoding$$Type, float1: float, int2: integer, int3: integer, int4: integer, float5: float, boolean6: boolean, map7: $Map$$Type<string, any>)

public "getChannels"(): integer
public "getEncoding"(): $AudioFormat$Encoding
public "getFrameRate"(): float
public "getFrameSize"(): integer
public "getProperty"(string0: string): any
public "getSampleRate"(): float
public "getSampleSizeInBits"(): integer
public "isBigEndian"(): boolean
public "matches"(audioFormat0: $AudioFormat$$Type): boolean
public "properties"(): $Map<string, any>
get "channels"(): integer
get "encoding"(): $AudioFormat$Encoding
get "frameRate"(): float
get "frameSize"(): integer
get "sampleRate"(): float
get "sampleSizeInBits"(): integer
get "bigEndian"(): boolean
}
}

