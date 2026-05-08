declare module "javax.crypto.ExemptionMechanism" {
import { $Key$$Type } from "java.security.Key"
import { $AlgorithmParameterSpec$$Type } from "java.security.spec.AlgorithmParameterSpec"
import { $AlgorithmParameters$$Type } from "java.security.AlgorithmParameters"
import { $Provider, $Provider$$Type } from "java.security.Provider"

export class $ExemptionMechanism {
public "genExemptionBlob"(): byte[]
public "genExemptionBlob"(byte0s: byte[]): integer
public "genExemptionBlob"(byte0s: byte[], int1: integer): integer
public static "getInstance"(string0: string, provider1: $Provider$$Type): $ExemptionMechanism
public static "getInstance"(string0: string, string1: string): $ExemptionMechanism
public static "getInstance"(string0: string): $ExemptionMechanism
public "getName"(): string
public "getOutputSize"(int0: integer): integer
public "getProvider"(): $Provider
public "init"(key0: $Key$$Type, algorithmParameterSpec1: $AlgorithmParameterSpec$$Type): void
public "init"(key0: $Key$$Type): void
public "init"(key0: $Key$$Type, algorithmParameters1: $AlgorithmParameters$$Type): void
public "isCryptoAllowed"(key0: $Key$$Type): boolean
get "name"(): string
get "provider"(): $Provider
}
}

declare module "javax.crypto.Cipher" {
import { $Key, $Key$$Type } from "java.security.Key"
import { $SecureRandom$$Type } from "java.security.SecureRandom"
import { $Certificate$$Type } from "java.security.cert.Certificate"
import { $ExemptionMechanism } from "javax.crypto.ExemptionMechanism"
import { $AlgorithmParameterSpec, $AlgorithmParameterSpec$$Type } from "java.security.spec.AlgorithmParameterSpec"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $AlgorithmParameters, $AlgorithmParameters$$Type } from "java.security.AlgorithmParameters"
import { $Provider, $Provider$$Type } from "java.security.Provider"

export class $Cipher {
static readonly "DECRYPT_MODE": integer
static readonly "ENCRYPT_MODE": integer
static readonly "PRIVATE_KEY": integer
static readonly "PUBLIC_KEY": integer
static readonly "SECRET_KEY": integer
static readonly "UNWRAP_MODE": integer
static readonly "WRAP_MODE": integer

public "doFinal"(byte0s: byte[], int1: integer): integer
public "doFinal"(byte0s: byte[], int1: integer, int2: integer): byte[]
public "doFinal"(byte0s: byte[], int1: integer, int2: integer, byte3s: byte[]): integer
public "doFinal"(byte0s: byte[], int1: integer, int2: integer, byte3s: byte[], int4: integer): integer
public "doFinal"(byteBuffer0: $ByteBuffer$$Type, byteBuffer1: $ByteBuffer$$Type): integer
public "doFinal"(byte0s: byte[]): byte[]
public "doFinal"(): byte[]
public "getAlgorithm"(): string
public "getBlockSize"(): integer
public "getExemptionMechanism"(): $ExemptionMechanism
public "getIV"(): byte[]
public static "getInstance"(string0: string, provider1: $Provider$$Type): $Cipher
public static "getInstance"(string0: string): $Cipher
public static "getInstance"(string0: string, string1: string): $Cipher
public static "getMaxAllowedKeyLength"(string0: string): integer
public static "getMaxAllowedParameterSpec"(string0: string): $AlgorithmParameterSpec
public "getOutputSize"(int0: integer): integer
public "getParameters"(): $AlgorithmParameters
public "getProvider"(): $Provider
public "init"(int0: integer, key1: $Key$$Type): void
public "init"(int0: integer, key1: $Key$$Type, algorithmParameterSpec2: $AlgorithmParameterSpec$$Type, secureRandom3: $SecureRandom$$Type): void
public "init"(int0: integer, certificate1: $Certificate$$Type, secureRandom2: $SecureRandom$$Type): void
public "init"(int0: integer, key1: $Key$$Type, algorithmParameters2: $AlgorithmParameters$$Type, secureRandom3: $SecureRandom$$Type): void
public "init"(int0: integer, certificate1: $Certificate$$Type): void
public "init"(int0: integer, key1: $Key$$Type, algorithmParameters2: $AlgorithmParameters$$Type): void
public "init"(int0: integer, key1: $Key$$Type, secureRandom2: $SecureRandom$$Type): void
public "init"(int0: integer, key1: $Key$$Type, algorithmParameterSpec2: $AlgorithmParameterSpec$$Type): void
public "unwrap"(byte0s: byte[], string1: string, int2: integer): $Key
public "update"(byte0s: byte[], int1: integer, int2: integer, byte3s: byte[]): integer
public "update"(byte0s: byte[]): byte[]
public "update"(byte0s: byte[], int1: integer, int2: integer, byte3s: byte[], int4: integer): integer
public "update"(byteBuffer0: $ByteBuffer$$Type, byteBuffer1: $ByteBuffer$$Type): integer
public "update"(byte0s: byte[], int1: integer, int2: integer): byte[]
public "updateAAD"(byteBuffer0: $ByteBuffer$$Type): void
public "updateAAD"(byte0s: byte[], int1: integer, int2: integer): void
public "updateAAD"(byte0s: byte[]): void
public "wrap"(key0: $Key$$Type): byte[]
get "algorithm"(): string
get "blockSize"(): integer
get "exemptionMechanism"(): $ExemptionMechanism
get "iV"(): byte[]
get "parameters"(): $AlgorithmParameters
get "provider"(): $Provider
}
}

