declare module "java.math.RoundingMode" {
import { $Enum } from "java.lang.Enum"

export class $RoundingMode extends $Enum<$RoundingMode> {
static readonly "CEILING": $RoundingMode
static readonly "DOWN": $RoundingMode
static readonly "FLOOR": $RoundingMode
static readonly "HALF_DOWN": $RoundingMode
static readonly "HALF_EVEN": $RoundingMode
static readonly "HALF_UP": $RoundingMode
static readonly "UNNECESSARY": $RoundingMode
static readonly "UP": $RoundingMode

public static "valueOf"(string0: string): $RoundingMode
public static "valueOf"(int0: integer): $RoundingMode
public static "values"(): $RoundingMode[]
}
}

declare module "java.math.MathContext" {
import { $RoundingMode, $RoundingMode$$Type } from "java.math.RoundingMode"
import { $Serializable } from "java.io.Serializable"

export class $MathContext implements $Serializable {
static readonly "DECIMAL128": $MathContext
static readonly "DECIMAL32": $MathContext
static readonly "DECIMAL64": $MathContext
static readonly "UNLIMITED": $MathContext

constructor(int0: integer)
constructor(string0: string)
constructor(int0: integer, roundingMode1: $RoundingMode$$Type)

public "getPrecision"(): integer
public "getRoundingMode"(): $RoundingMode
get "precision"(): integer
get "roundingMode"(): $RoundingMode
}
}

declare module "java.math.BigInteger" {
import { $Random$$Type } from "java.util.Random"
import { $Comparable } from "java.lang.Comparable"
import { $Number } from "java.lang.Number"

export class $BigInteger extends $Number implements $Comparable<$BigInteger> {
static readonly "ONE": $BigInteger
static readonly "TEN": $BigInteger
static readonly "TWO": $BigInteger
static readonly "ZERO": $BigInteger

constructor(int0: integer, random1: $Random$$Type)
constructor(byte0s: byte[], int1: integer, int2: integer)
constructor(string0: string)
constructor(int0: integer, int1: integer, random2: $Random$$Type)
constructor(int0: integer, byte1s: byte[], int2: integer, int3: integer)
constructor(byte0s: byte[])
constructor(int0: integer, byte1s: byte[])
constructor(string0: string, int1: integer)

public "abs"(): $BigInteger
public "add"(bigInteger0: $BigInteger$$Type): $BigInteger
public "and"(bigInteger0: $BigInteger$$Type): $BigInteger
public "andNot"(bigInteger0: $BigInteger$$Type): $BigInteger
public "bitCount"(): integer
public "bitLength"(): integer
public "byteValueExact"(): byte
public "clearBit"(int0: integer): $BigInteger
public "compareTo"(bigInteger0: $BigInteger$$Type): integer
public "divide"(bigInteger0: $BigInteger$$Type): $BigInteger
public "divideAndRemainder"(bigInteger0: $BigInteger$$Type): $BigInteger[]
public "flipBit"(int0: integer): $BigInteger
public "gcd"(bigInteger0: $BigInteger$$Type): $BigInteger
public "getLowestSetBit"(): integer
public "intValueExact"(): integer
public "isProbablePrime"(int0: integer): boolean
public "longValueExact"(): long
public "max"(bigInteger0: $BigInteger$$Type): $BigInteger
public "min"(bigInteger0: $BigInteger$$Type): $BigInteger
public "mod"(bigInteger0: $BigInteger$$Type): $BigInteger
public "modInverse"(bigInteger0: $BigInteger$$Type): $BigInteger
public "modPow"(bigInteger0: $BigInteger$$Type, bigInteger1: $BigInteger$$Type): $BigInteger
public "multiply"(bigInteger0: $BigInteger$$Type): $BigInteger
public "negate"(): $BigInteger
public "nextProbablePrime"(): $BigInteger
public "not"(): $BigInteger
public "or"(bigInteger0: $BigInteger$$Type): $BigInteger
public "pow"(int0: integer): $BigInteger
public static "probablePrime"(int0: integer, random1: $Random$$Type): $BigInteger
public "remainder"(bigInteger0: $BigInteger$$Type): $BigInteger
public "setBit"(int0: integer): $BigInteger
public "shiftLeft"(int0: integer): $BigInteger
public "shiftRight"(int0: integer): $BigInteger
public "shortValueExact"(): short
public "signum"(): integer
public "sqrt"(): $BigInteger
public "sqrtAndRemainder"(): $BigInteger[]
public "subtract"(bigInteger0: $BigInteger$$Type): $BigInteger
public "testBit"(int0: integer): boolean
public "toByteArray"(): byte[]
public "toString"(int0: integer): string
public static "valueOf"(long0: long): $BigInteger
public "xor"(bigInteger0: $BigInteger$$Type): $BigInteger
get "lowestSetBit"(): integer
set "bit"(value: integer)
}
}

declare module "java.math.BigDecimal" {
import { $MathContext$$Type } from "java.math.MathContext"
import { $BigInteger, $BigInteger$$Type } from "java.math.BigInteger"
import { $Comparable } from "java.lang.Comparable"
import { $Number } from "java.lang.Number"
import { $RoundingMode$$Type } from "java.math.RoundingMode"

export class $BigDecimal extends $Number implements $Comparable<$BigDecimal> {
static readonly "ONE": $BigDecimal
/** @deprecated */
static readonly "ROUND_CEILING": integer
/** @deprecated */
static readonly "ROUND_DOWN": integer
/** @deprecated */
static readonly "ROUND_FLOOR": integer
/** @deprecated */
static readonly "ROUND_HALF_DOWN": integer
/** @deprecated */
static readonly "ROUND_HALF_EVEN": integer
/** @deprecated */
static readonly "ROUND_HALF_UP": integer
/** @deprecated */
static readonly "ROUND_UNNECESSARY": integer
/** @deprecated */
static readonly "ROUND_UP": integer
static readonly "TEN": $BigDecimal
static readonly "ZERO": $BigDecimal

constructor(string0: string, mathContext1: $MathContext$$Type)
constructor(char0s: character[], int1: integer, int2: integer)
constructor(char0s: character[], int1: integer, int2: integer, mathContext3: $MathContext$$Type)
constructor(char0s: character[])
constructor(char0s: character[], mathContext1: $MathContext$$Type)
constructor(string0: string)
constructor(bigInteger0: $BigInteger$$Type, int1: integer, mathContext2: $MathContext$$Type)
constructor(int0: integer)
constructor(int0: integer, mathContext1: $MathContext$$Type)
constructor(long0: long)
constructor(long0: long, mathContext1: $MathContext$$Type)
constructor(double0: double)
constructor(double0: double, mathContext1: $MathContext$$Type)
constructor(bigInteger0: $BigInteger$$Type)
constructor(bigInteger0: $BigInteger$$Type, mathContext1: $MathContext$$Type)
constructor(bigInteger0: $BigInteger$$Type, int1: integer)

public "abs"(mathContext0: $MathContext$$Type): $BigDecimal
public "abs"(): $BigDecimal
public "add"(bigDecimal0: $BigDecimal$$Type): $BigDecimal
public "add"(bigDecimal0: $BigDecimal$$Type, mathContext1: $MathContext$$Type): $BigDecimal
public "byteValueExact"(): byte
public "compareTo"(bigDecimal0: $BigDecimal$$Type): integer
public "divide"(bigDecimal0: $BigDecimal$$Type, mathContext1: $MathContext$$Type): $BigDecimal
public "divide"(bigDecimal0: $BigDecimal$$Type): $BigDecimal
public "divide"(bigDecimal0: $BigDecimal$$Type, int1: integer, roundingMode2: $RoundingMode$$Type): $BigDecimal
/** @deprecated */
public "divide"(bigDecimal0: $BigDecimal$$Type, int1: integer): $BigDecimal
public "divide"(bigDecimal0: $BigDecimal$$Type, roundingMode1: $RoundingMode$$Type): $BigDecimal
/** @deprecated */
public "divide"(bigDecimal0: $BigDecimal$$Type, int1: integer, int2: integer): $BigDecimal
public "divideAndRemainder"(bigDecimal0: $BigDecimal$$Type, mathContext1: $MathContext$$Type): $BigDecimal[]
public "divideAndRemainder"(bigDecimal0: $BigDecimal$$Type): $BigDecimal[]
public "divideToIntegralValue"(bigDecimal0: $BigDecimal$$Type): $BigDecimal
public "divideToIntegralValue"(bigDecimal0: $BigDecimal$$Type, mathContext1: $MathContext$$Type): $BigDecimal
public "intValueExact"(): integer
public "longValueExact"(): long
public "max"(bigDecimal0: $BigDecimal$$Type): $BigDecimal
public "min"(bigDecimal0: $BigDecimal$$Type): $BigDecimal
public "movePointLeft"(int0: integer): $BigDecimal
public "movePointRight"(int0: integer): $BigDecimal
public "multiply"(bigDecimal0: $BigDecimal$$Type): $BigDecimal
public "multiply"(bigDecimal0: $BigDecimal$$Type, mathContext1: $MathContext$$Type): $BigDecimal
public "negate"(mathContext0: $MathContext$$Type): $BigDecimal
public "negate"(): $BigDecimal
public "plus"(): $BigDecimal
public "plus"(mathContext0: $MathContext$$Type): $BigDecimal
public "pow"(int0: integer, mathContext1: $MathContext$$Type): $BigDecimal
public "pow"(int0: integer): $BigDecimal
public "precision"(): integer
public "remainder"(bigDecimal0: $BigDecimal$$Type, mathContext1: $MathContext$$Type): $BigDecimal
public "remainder"(bigDecimal0: $BigDecimal$$Type): $BigDecimal
public "round"(mathContext0: $MathContext$$Type): $BigDecimal
public "scale"(): integer
public "scaleByPowerOfTen"(int0: integer): $BigDecimal
public "setScale"(int0: integer): $BigDecimal
/** @deprecated */
public "setScale"(int0: integer, int1: integer): $BigDecimal
public "setScale"(int0: integer, roundingMode1: $RoundingMode$$Type): $BigDecimal
public "shortValueExact"(): short
public "signum"(): integer
public "sqrt"(mathContext0: $MathContext$$Type): $BigDecimal
public "stripTrailingZeros"(): $BigDecimal
public "subtract"(bigDecimal0: $BigDecimal$$Type): $BigDecimal
public "subtract"(bigDecimal0: $BigDecimal$$Type, mathContext1: $MathContext$$Type): $BigDecimal
public "toBigInteger"(): $BigInteger
public "toBigIntegerExact"(): $BigInteger
public "toEngineeringString"(): string
public "toPlainString"(): string
public "ulp"(): $BigDecimal
public "unscaledValue"(): $BigInteger
public static "valueOf"(long0: long): $BigDecimal
public static "valueOf"(long0: long, int1: integer): $BigDecimal
public static "valueOf"(double0: double): $BigDecimal
}
}

