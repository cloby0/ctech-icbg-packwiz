declare module "java.text.AttributedCharacterIterator$Attribute" {
import { $Serializable } from "java.io.Serializable"

export class $AttributedCharacterIterator$Attribute implements $Serializable {
static readonly "INPUT_METHOD_SEGMENT": $AttributedCharacterIterator$Attribute
static readonly "LANGUAGE": $AttributedCharacterIterator$Attribute
static readonly "READING": $AttributedCharacterIterator$Attribute

}
}

declare module "java.text.AttributedCharacterIterator" {
import { $AttributedCharacterIterator$Attribute, $AttributedCharacterIterator$Attribute$$Type } from "java.text.AttributedCharacterIterator$Attribute"
import { $CharacterIterator } from "java.text.CharacterIterator"
import { $Map } from "java.util.Map"
import { $Set, $Set$$Type } from "java.util.Set"

export interface $AttributedCharacterIterator extends $CharacterIterator {
"clone"(): any
"current"(): character
"first"(): character
"getAllAttributeKeys"(): $Set<$AttributedCharacterIterator$Attribute>
"getAttribute"(attribute0: $AttributedCharacterIterator$Attribute$$Type): any
"getAttributes"(): $Map<$AttributedCharacterIterator$Attribute, any>
"getBeginIndex"(): integer
"getEndIndex"(): integer
"getIndex"(): integer
"getRunLimit"(set0: $Set$$Type<$AttributedCharacterIterator$Attribute$$Type>): integer
"getRunLimit"(attribute0: $AttributedCharacterIterator$Attribute$$Type): integer
"getRunLimit"(): integer
"getRunStart"(set0: $Set$$Type<$AttributedCharacterIterator$Attribute$$Type>): integer
"getRunStart"(attribute0: $AttributedCharacterIterator$Attribute$$Type): integer
"getRunStart"(): integer
"last"(): character
"next"(): character
"previous"(): character
"setIndex"(int0: integer): character
get "allAttributeKeys"(): $Set<$AttributedCharacterIterator$Attribute>
get "attributes"(): $Map<$AttributedCharacterIterator$Attribute, any>
get "beginIndex"(): integer
get "endIndex"(): integer
get "index"(): integer
get "runLimit"(): integer
get "runStart"(): integer
set "index"(value: integer)
}

export namespace $AttributedCharacterIterator {
const probejs$$marker: never
}
export abstract class $AttributedCharacterIterator$$Static implements $AttributedCharacterIterator {
}
}

declare module "java.text.CharacterIterator" {
import { $Cloneable } from "java.lang.Cloneable"

export interface $CharacterIterator extends $Cloneable {
"clone"(): any
"current"(): character
"first"(): character
"getBeginIndex"(): integer
"getEndIndex"(): integer
"getIndex"(): integer
"last"(): character
"next"(): character
"previous"(): character
"setIndex"(int0: integer): character
get "beginIndex"(): integer
get "endIndex"(): integer
get "index"(): integer
set "index"(value: integer)
}

export namespace $CharacterIterator {
const DONE: character
}
export abstract class $CharacterIterator$$Static implements $CharacterIterator {
static readonly "DONE": character

}
}

declare module "java.text.DecimalFormatSymbols" {
import { $Cloneable } from "java.lang.Cloneable"
import { $Locale, $Locale$$Type } from "java.util.Locale"
import { $Currency, $Currency$$Type } from "java.util.Currency"
import { $Serializable } from "java.io.Serializable"

export class $DecimalFormatSymbols implements $Cloneable, $Serializable {
constructor(locale0: $Locale$$Type)
constructor()

public "clone"(): any
public static "getAvailableLocales"(): $Locale[]
public "getCurrency"(): $Currency
public "getCurrencySymbol"(): string
public "getDecimalSeparator"(): character
public "getDigit"(): character
public "getExponentSeparator"(): string
public "getGroupingSeparator"(): character
public "getInfinity"(): string
public static "getInstance"(): $DecimalFormatSymbols
public static "getInstance"(locale0: $Locale$$Type): $DecimalFormatSymbols
public "getInternationalCurrencySymbol"(): string
public "getMinusSign"(): character
public "getMonetaryDecimalSeparator"(): character
public "getMonetaryGroupingSeparator"(): character
public "getNaN"(): string
public "getPatternSeparator"(): character
public "getPerMill"(): character
public "getPercent"(): character
public "getZeroDigit"(): character
public "setCurrency"(currency0: $Currency$$Type): void
public "setCurrencySymbol"(string0: string): void
public "setDecimalSeparator"(char0: character): void
public "setDigit"(char0: character): void
public "setExponentSeparator"(string0: string): void
public "setGroupingSeparator"(char0: character): void
public "setInfinity"(string0: string): void
public "setInternationalCurrencySymbol"(string0: string): void
public "setMinusSign"(char0: character): void
public "setMonetaryDecimalSeparator"(char0: character): void
public "setMonetaryGroupingSeparator"(char0: character): void
public "setNaN"(string0: string): void
public "setPatternSeparator"(char0: character): void
public "setPerMill"(char0: character): void
public "setPercent"(char0: character): void
public "setZeroDigit"(char0: character): void
get "currency"(): $Currency
get "currencySymbol"(): string
get "decimalSeparator"(): character
get "digit"(): character
get "exponentSeparator"(): string
get "groupingSeparator"(): character
get "infinity"(): string
get "internationalCurrencySymbol"(): string
get "minusSign"(): character
get "monetaryDecimalSeparator"(): character
get "monetaryGroupingSeparator"(): character
get "naN"(): string
get "patternSeparator"(): character
get "perMill"(): character
get "percent"(): character
get "zeroDigit"(): character
set "currency"(value: $Currency$$Type)
set "currencySymbol"(value: string)
set "decimalSeparator"(value: character)
set "digit"(value: character)
set "exponentSeparator"(value: string)
set "groupingSeparator"(value: character)
set "infinity"(value: string)
set "internationalCurrencySymbol"(value: string)
set "minusSign"(value: character)
set "monetaryDecimalSeparator"(value: character)
set "monetaryGroupingSeparator"(value: character)
set "naN"(value: string)
set "patternSeparator"(value: character)
set "perMill"(value: character)
set "percent"(value: character)
set "zeroDigit"(value: character)
}
}

declare module "java.text.Format$Field" {
import { $AttributedCharacterIterator$Attribute } from "java.text.AttributedCharacterIterator$Attribute"

export class $Format$Field extends $AttributedCharacterIterator$Attribute {
}
}

declare module "java.text.SimpleDateFormat" {
import { $DateFormatSymbols, $DateFormatSymbols$$Type } from "java.text.DateFormatSymbols"
import { $Locale$$Type } from "java.util.Locale"
import { $Date, $Date$$Type } from "java.util.Date"
import { $DateFormat } from "java.text.DateFormat"

export class $SimpleDateFormat extends $DateFormat {
constructor(string0: string, locale1: $Locale$$Type)
constructor(string0: string)
constructor()
constructor(string0: string, dateFormatSymbols1: $DateFormatSymbols$$Type)

public "applyLocalizedPattern"(string0: string): void
public "applyPattern"(string0: string): void
public "get2DigitYearStart"(): $Date
public "getDateFormatSymbols"(): $DateFormatSymbols
public "set2DigitYearStart"(date0: $Date$$Type): void
public "setDateFormatSymbols"(dateFormatSymbols0: $DateFormatSymbols$$Type): void
public "toLocalizedPattern"(): string
public "toPattern"(): string
get "2DigitYearStart"(): $Date
get "dateFormatSymbols"(): $DateFormatSymbols
set "2DigitYearStart"(value: $Date$$Type)
set "dateFormatSymbols"(value: $DateFormatSymbols$$Type)
}
}

declare module "java.text.ParsePosition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ParsePosition {
constructor(int0: integer)

public "getErrorIndex"(): integer
public "getIndex"(): integer
public "setErrorIndex"(int0: integer): void
public "setIndex"(int0: integer): void
get "errorIndex"(): integer
get "index"(): integer
set "errorIndex"(value: integer)
set "index"(value: integer)
}
}

declare module "java.text.DateFormatSymbols" {
import { $Cloneable } from "java.lang.Cloneable"
import { $Locale, $Locale$$Type } from "java.util.Locale"
import { $Serializable } from "java.io.Serializable"

export class $DateFormatSymbols implements $Serializable, $Cloneable {
constructor(locale0: $Locale$$Type)
constructor()

public "clone"(): any
public "getAmPmStrings"(): string[]
public static "getAvailableLocales"(): $Locale[]
public "getEras"(): string[]
public static "getInstance"(): $DateFormatSymbols
public static "getInstance"(locale0: $Locale$$Type): $DateFormatSymbols
public "getLocalPatternChars"(): string
public "getMonths"(): string[]
public "getShortMonths"(): string[]
public "getShortWeekdays"(): string[]
public "getWeekdays"(): string[]
public "getZoneStrings"(): string[][]
public "setAmPmStrings"(string0s: string[]): void
public "setEras"(string0s: string[]): void
public "setLocalPatternChars"(string0: string): void
public "setMonths"(string0s: string[]): void
public "setShortMonths"(string0s: string[]): void
public "setShortWeekdays"(string0s: string[]): void
public "setWeekdays"(string0s: string[]): void
public "setZoneStrings"(string0ss: string[][]): void
get "amPmStrings"(): string[]
get "eras"(): string[]
get "localPatternChars"(): string
get "months"(): string[]
get "shortMonths"(): string[]
get "shortWeekdays"(): string[]
get "weekdays"(): string[]
get "zoneStrings"(): string[][]
set "amPmStrings"(value: string[])
set "eras"(value: string[])
set "localPatternChars"(value: string)
set "months"(value: string[])
set "shortMonths"(value: string[])
set "shortWeekdays"(value: string[])
set "weekdays"(value: string[])
set "zoneStrings"(value: string[][])
}
}

declare module "java.text.DecimalFormat" {
import { $DecimalFormatSymbols, $DecimalFormatSymbols$$Type } from "java.text.DecimalFormatSymbols"
import { $NumberFormat } from "java.text.NumberFormat"

export class $DecimalFormat extends $NumberFormat {
constructor(string0: string)
constructor(string0: string, decimalFormatSymbols1: $DecimalFormatSymbols$$Type)
constructor()

public "applyLocalizedPattern"(string0: string): void
public "applyPattern"(string0: string): void
public "getDecimalFormatSymbols"(): $DecimalFormatSymbols
public "getGroupingSize"(): integer
public "getMultiplier"(): integer
public "getNegativePrefix"(): string
public "getNegativeSuffix"(): string
public "getPositivePrefix"(): string
public "getPositiveSuffix"(): string
public "isDecimalSeparatorAlwaysShown"(): boolean
public "isParseBigDecimal"(): boolean
public "setDecimalFormatSymbols"(decimalFormatSymbols0: $DecimalFormatSymbols$$Type): void
public "setDecimalSeparatorAlwaysShown"(boolean0: boolean): void
public "setGroupingSize"(int0: integer): void
public "setMultiplier"(int0: integer): void
public "setNegativePrefix"(string0: string): void
public "setNegativeSuffix"(string0: string): void
public "setParseBigDecimal"(boolean0: boolean): void
public "setPositivePrefix"(string0: string): void
public "setPositiveSuffix"(string0: string): void
public "toLocalizedPattern"(): string
public "toPattern"(): string
get "decimalFormatSymbols"(): $DecimalFormatSymbols
get "groupingSize"(): integer
get "multiplier"(): integer
get "negativePrefix"(): string
get "negativeSuffix"(): string
get "positivePrefix"(): string
get "positiveSuffix"(): string
get "decimalSeparatorAlwaysShown"(): boolean
get "parseBigDecimal"(): boolean
set "decimalFormatSymbols"(value: $DecimalFormatSymbols$$Type)
set "decimalSeparatorAlwaysShown"(value: boolean)
set "groupingSize"(value: integer)
set "multiplier"(value: integer)
set "negativePrefix"(value: string)
set "negativeSuffix"(value: string)
set "parseBigDecimal"(value: boolean)
set "positivePrefix"(value: string)
set "positiveSuffix"(value: string)
}
}

declare module "java.text.NumberFormat$Style" {
import { $Enum } from "java.lang.Enum"

export class $NumberFormat$Style extends $Enum<$NumberFormat$Style> {
static readonly "LONG": $NumberFormat$Style
static readonly "SHORT": $NumberFormat$Style

public static "valueOf"(string0: string): $NumberFormat$Style
public static "values"(): $NumberFormat$Style[]
}
}

declare module "java.text.DateFormat" {
import { $Calendar, $Calendar$$Type } from "java.util.Calendar"
import { $Format } from "java.text.Format"
import { $FieldPosition$$Type } from "java.text.FieldPosition"
import { $StringBuffer, $StringBuffer$$Type } from "java.lang.StringBuffer"
import { $Date, $Date$$Type } from "java.util.Date"
import { $Locale, $Locale$$Type } from "java.util.Locale"
import { $TimeZone, $TimeZone$$Type } from "java.util.TimeZone"
import { $ParsePosition$$Type } from "java.text.ParsePosition"
import { $NumberFormat, $NumberFormat$$Type } from "java.text.NumberFormat"

export class $DateFormat extends $Format {
static readonly "AM_PM_FIELD": integer
static readonly "DATE_FIELD": integer
static readonly "DAY_OF_WEEK_FIELD": integer
static readonly "DAY_OF_WEEK_IN_MONTH_FIELD": integer
static readonly "DAY_OF_YEAR_FIELD": integer
static readonly "DEFAULT": integer
static readonly "ERA_FIELD": integer
static readonly "FULL": integer
static readonly "HOUR0_FIELD": integer
static readonly "HOUR1_FIELD": integer
static readonly "HOUR_OF_DAY0_FIELD": integer
static readonly "HOUR_OF_DAY1_FIELD": integer
static readonly "LONG": integer
static readonly "MEDIUM": integer
static readonly "MILLISECOND_FIELD": integer
static readonly "MINUTE_FIELD": integer
static readonly "MONTH_FIELD": integer
static readonly "SECOND_FIELD": integer
static readonly "SHORT": integer
static readonly "TIMEZONE_FIELD": integer
static readonly "WEEK_OF_MONTH_FIELD": integer
static readonly "WEEK_OF_YEAR_FIELD": integer
static readonly "YEAR_FIELD": integer

public "format"(date0: $Date$$Type, stringBuffer1: $StringBuffer$$Type, fieldPosition2: $FieldPosition$$Type): $StringBuffer
public "format"(date0: $Date$$Type): string
public static "getAvailableLocales"(): $Locale[]
public "getCalendar"(): $Calendar
public static "getDateInstance"(int0: integer): $DateFormat
public static "getDateInstance"(int0: integer, locale1: $Locale$$Type): $DateFormat
public static "getDateInstance"(): $DateFormat
public static "getDateTimeInstance"(int0: integer, int1: integer, locale2: $Locale$$Type): $DateFormat
public static "getDateTimeInstance"(): $DateFormat
public static "getDateTimeInstance"(int0: integer, int1: integer): $DateFormat
public static "getInstance"(): $DateFormat
public "getNumberFormat"(): $NumberFormat
public static "getTimeInstance"(int0: integer, locale1: $Locale$$Type): $DateFormat
public static "getTimeInstance"(): $DateFormat
public static "getTimeInstance"(int0: integer): $DateFormat
public "getTimeZone"(): $TimeZone
public "isLenient"(): boolean
public "parse"(string0: string, parsePosition1: $ParsePosition$$Type): $Date
public "parse"(string0: string): $Date
public "setCalendar"(calendar0: $Calendar$$Type): void
public "setLenient"(boolean0: boolean): void
public "setNumberFormat"(numberFormat0: $NumberFormat$$Type): void
public "setTimeZone"(timeZone0: $TimeZone$$Type): void
get "calendar"(): $Calendar
get "numberFormat"(): $NumberFormat
get "timeZone"(): $TimeZone
get "lenient"(): boolean
set "calendar"(value: $Calendar$$Type)
set "lenient"(value: boolean)
set "numberFormat"(value: $NumberFormat$$Type)
set "timeZone"(value: $TimeZone$$Type)
}
}

declare module "java.text.FieldPosition" {
import { $Format$Field, $Format$Field$$Type } from "java.text.Format$Field"

export class $FieldPosition {
constructor(int0: integer)
constructor(field0: $Format$Field$$Type)
constructor(field0: $Format$Field$$Type, int1: integer)

public "getBeginIndex"(): integer
public "getEndIndex"(): integer
public "getField"(): integer
public "getFieldAttribute"(): $Format$Field
public "setBeginIndex"(int0: integer): void
public "setEndIndex"(int0: integer): void
get "beginIndex"(): integer
get "endIndex"(): integer
get "field"(): integer
get "fieldAttribute"(): $Format$Field
set "beginIndex"(value: integer)
set "endIndex"(value: integer)
}
}

declare module "java.text.NumberFormat" {
import { $NumberFormat$Style$$Type } from "java.text.NumberFormat$Style"
import { $Format } from "java.text.Format"
import { $FieldPosition$$Type } from "java.text.FieldPosition"
import { $StringBuffer, $StringBuffer$$Type } from "java.lang.StringBuffer"
import { $Locale, $Locale$$Type } from "java.util.Locale"
import { $ParsePosition$$Type } from "java.text.ParsePosition"
import { $Currency, $Currency$$Type } from "java.util.Currency"
import { $RoundingMode, $RoundingMode$$Type } from "java.math.RoundingMode"

export class $NumberFormat extends $Format {
static readonly "FRACTION_FIELD": integer
static readonly "INTEGER_FIELD": integer

public "format"(double0: double, stringBuffer1: $StringBuffer$$Type, fieldPosition2: $FieldPosition$$Type): $StringBuffer
public "format"(long0: long): string
public "format"(double0: double): string
public "format"(long0: long, stringBuffer1: $StringBuffer$$Type, fieldPosition2: $FieldPosition$$Type): $StringBuffer
public static "getAvailableLocales"(): $Locale[]
public static "getCompactNumberInstance"(): $NumberFormat
public static "getCompactNumberInstance"(locale0: $Locale$$Type, style1: $NumberFormat$Style$$Type): $NumberFormat
public "getCurrency"(): $Currency
public static "getCurrencyInstance"(locale0: $Locale$$Type): $NumberFormat
public static "getCurrencyInstance"(): $NumberFormat
public static "getInstance"(locale0: $Locale$$Type): $NumberFormat
public static "getInstance"(): $NumberFormat
public static "getIntegerInstance"(locale0: $Locale$$Type): $NumberFormat
public static "getIntegerInstance"(): $NumberFormat
public "getMaximumFractionDigits"(): integer
public "getMaximumIntegerDigits"(): integer
public "getMinimumFractionDigits"(): integer
public "getMinimumIntegerDigits"(): integer
public static "getNumberInstance"(locale0: $Locale$$Type): $NumberFormat
public static "getNumberInstance"(): $NumberFormat
public static "getPercentInstance"(locale0: $Locale$$Type): $NumberFormat
public static "getPercentInstance"(): $NumberFormat
public "getRoundingMode"(): $RoundingMode
public "isGroupingUsed"(): boolean
public "isParseIntegerOnly"(): boolean
public "parse"(string0: string, parsePosition1: $ParsePosition$$Type): number
public "parse"(string0: string): number
public "setCurrency"(currency0: $Currency$$Type): void
public "setGroupingUsed"(boolean0: boolean): void
public "setMaximumFractionDigits"(int0: integer): void
public "setMaximumIntegerDigits"(int0: integer): void
public "setMinimumFractionDigits"(int0: integer): void
public "setMinimumIntegerDigits"(int0: integer): void
public "setParseIntegerOnly"(boolean0: boolean): void
public "setRoundingMode"(roundingMode0: $RoundingMode$$Type): void
get "currency"(): $Currency
get "maximumFractionDigits"(): integer
get "maximumIntegerDigits"(): integer
get "minimumFractionDigits"(): integer
get "minimumIntegerDigits"(): integer
get "roundingMode"(): $RoundingMode
get "groupingUsed"(): boolean
get "parseIntegerOnly"(): boolean
set "currency"(value: $Currency$$Type)
set "groupingUsed"(value: boolean)
set "maximumFractionDigits"(value: integer)
set "maximumIntegerDigits"(value: integer)
set "minimumFractionDigits"(value: integer)
set "minimumIntegerDigits"(value: integer)
set "parseIntegerOnly"(value: boolean)
set "roundingMode"(value: $RoundingMode$$Type)
}
}

declare module "java.text.Format" {
import { $Cloneable } from "java.lang.Cloneable"
import { $FieldPosition$$Type } from "java.text.FieldPosition"
import { $AttributedCharacterIterator } from "java.text.AttributedCharacterIterator"
import { $StringBuffer, $StringBuffer$$Type } from "java.lang.StringBuffer"
import { $ParsePosition$$Type } from "java.text.ParsePosition"
import { $Serializable } from "java.io.Serializable"

export class $Format implements $Serializable, $Cloneable {
public "clone"(): any
public "format"(object0: any): string
public "format"(object0: any, stringBuffer1: $StringBuffer$$Type, fieldPosition2: $FieldPosition$$Type): $StringBuffer
public "formatToCharacterIterator"(object0: any): $AttributedCharacterIterator
public "parseObject"(string0: string, parsePosition1: $ParsePosition$$Type): any
public "parseObject"(string0: string): any
}
}

