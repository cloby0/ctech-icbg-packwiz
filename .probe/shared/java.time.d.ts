declare module "java.time.format.FormatStyle" {
import { $Enum } from "java.lang.Enum"

export class $FormatStyle extends $Enum<$FormatStyle> {
static readonly "FULL": $FormatStyle
static readonly "LONG": $FormatStyle
static readonly "MEDIUM": $FormatStyle
static readonly "SHORT": $FormatStyle

public static "valueOf"(string0: string): $FormatStyle
public static "values"(): $FormatStyle[]
}
}

declare module "java.time.zone.ZoneOffsetTransitionRule" {
import { $Month, $Month$$Type } from "java.time.Month"
import { $DayOfWeek, $DayOfWeek$$Type } from "java.time.DayOfWeek"
import { $ZoneOffsetTransition } from "java.time.zone.ZoneOffsetTransition"
import { $LocalTime, $LocalTime$$Type } from "java.time.LocalTime"
import { $ZoneOffset, $ZoneOffset$$Type } from "java.time.ZoneOffset"
import { $ZoneOffsetTransitionRule$TimeDefinition, $ZoneOffsetTransitionRule$TimeDefinition$$Type } from "java.time.zone.ZoneOffsetTransitionRule$TimeDefinition"
import { $Serializable } from "java.io.Serializable"

export class $ZoneOffsetTransitionRule implements $Serializable {
public "createTransition"(int0: integer): $ZoneOffsetTransition
public "getDayOfMonthIndicator"(): integer
public "getDayOfWeek"(): $DayOfWeek
public "getLocalTime"(): $LocalTime
public "getMonth"(): $Month
public "getOffsetAfter"(): $ZoneOffset
public "getOffsetBefore"(): $ZoneOffset
public "getStandardOffset"(): $ZoneOffset
public "getTimeDefinition"(): $ZoneOffsetTransitionRule$TimeDefinition
public "isMidnightEndOfDay"(): boolean
public static "of"(month0: $Month$$Type, int1: integer, dayOfWeek2: $DayOfWeek$$Type, localTime3: $LocalTime$$Type, boolean4: boolean, timeDefinition5: $ZoneOffsetTransitionRule$TimeDefinition$$Type, zoneOffset6: $ZoneOffset$$Type, zoneOffset7: $ZoneOffset$$Type, zoneOffset8: $ZoneOffset$$Type): $ZoneOffsetTransitionRule
get "dayOfMonthIndicator"(): integer
get "dayOfWeek"(): $DayOfWeek
get "localTime"(): $LocalTime
get "month"(): $Month
get "offsetAfter"(): $ZoneOffset
get "offsetBefore"(): $ZoneOffset
get "standardOffset"(): $ZoneOffset
get "timeDefinition"(): $ZoneOffsetTransitionRule$TimeDefinition
get "midnightEndOfDay"(): boolean
}
}

declare module "java.time.temporal.TemporalUnit" {
import { $Duration } from "java.time.Duration"
import { $Temporal, $Temporal$$Type } from "java.time.temporal.Temporal"

export interface $TemporalUnit {
"addTo"<R extends $Temporal>(r0: R, long1: long): R
"between"(temporal0: $Temporal$$Type, temporal1: $Temporal$$Type): long
"getDuration"(): $Duration
"isDateBased"(): boolean
"isDurationEstimated"(): boolean
"isSupportedBy"(temporal0: $Temporal$$Type): boolean
"isTimeBased"(): boolean
"toString"(): string
get "duration"(): $Duration
get "dateBased"(): boolean
get "durationEstimated"(): boolean
get "timeBased"(): boolean
}

export namespace $TemporalUnit {
const probejs$$marker: never
}
export abstract class $TemporalUnit$$Static implements $TemporalUnit {
}
}

declare module "java.time.Period" {
import { $ChronoLocalDate$$Type } from "java.time.chrono.ChronoLocalDate"
import { $List } from "java.util.List"
import { $IsoChronology } from "java.time.chrono.IsoChronology"
import { $LocalDate$$Type } from "java.time.LocalDate"
import { $TemporalUnit, $TemporalUnit$$Type } from "java.time.temporal.TemporalUnit"
import { $TemporalAmount$$Type } from "java.time.temporal.TemporalAmount"
import { $Temporal, $Temporal$$Type } from "java.time.temporal.Temporal"
import { $ChronoPeriod } from "java.time.chrono.ChronoPeriod"
import { $Serializable } from "java.io.Serializable"

export class $Period implements $ChronoPeriod, $Serializable {
static readonly "ZERO": $Period

public "addTo"(temporal0: $Temporal$$Type): $Temporal
public static "between"(localDate0: $LocalDate$$Type, localDate1: $LocalDate$$Type): $Period
public static "between"(chronoLocalDate0: $ChronoLocalDate$$Type, chronoLocalDate1: $ChronoLocalDate$$Type): $ChronoPeriod
public static "from"(temporalAmount0: $TemporalAmount$$Type): $Period
public "get"(temporalUnit0: $TemporalUnit$$Type): long
public "getChronology"(): $IsoChronology
public "getDays"(): integer
public "getMonths"(): integer
public "getUnits"(): $List<$TemporalUnit>
public "getYears"(): integer
public "isNegative"(): boolean
public "isZero"(): boolean
public "minus"(temporalAmount0: $TemporalAmount$$Type): $Period
public "minusDays"(long0: long): $Period
public "minusMonths"(long0: long): $Period
public "minusYears"(long0: long): $Period
public "multipliedBy"(int0: integer): $Period
public "negated"(): $Period
public "normalized"(): $Period
public static "of"(int0: integer, int1: integer, int2: integer): $Period
public static "ofDays"(int0: integer): $Period
public static "ofMonths"(int0: integer): $Period
public static "ofWeeks"(int0: integer): $Period
public static "ofYears"(int0: integer): $Period
public static "parse"(charSequence0: charseq): $Period
public "plus"(temporalAmount0: $TemporalAmount$$Type): $Period
public "plusDays"(long0: long): $Period
public "plusMonths"(long0: long): $Period
public "plusYears"(long0: long): $Period
public "subtractFrom"(temporal0: $Temporal$$Type): $Temporal
public "toTotalMonths"(): long
public "withDays"(int0: integer): $Period
public "withMonths"(int0: integer): $Period
public "withYears"(int0: integer): $Period
get "chronology"(): $IsoChronology
get "days"(): integer
get "months"(): integer
get "units"(): $List<$TemporalUnit>
get "years"(): integer
get "negative"(): boolean
get "zero"(): boolean
}
}

declare module "java.time.chrono.ChronoLocalDateTime" {
import { $ChronoLocalDate } from "java.time.chrono.ChronoLocalDate"
import { $TemporalField$$Type } from "java.time.temporal.TemporalField"
import { $TemporalUnit$$Type } from "java.time.temporal.TemporalUnit"
import { $TemporalQuery$$Type } from "java.time.temporal.TemporalQuery"
import { $Instant } from "java.time.Instant"
import { $ZoneId$$Type } from "java.time.ZoneId"
import { $TemporalAccessor$$Type } from "java.time.temporal.TemporalAccessor"
import { $Chronology } from "java.time.chrono.Chronology"
import { $ValueRange } from "java.time.temporal.ValueRange"
import { $ChronoZonedDateTime } from "java.time.chrono.ChronoZonedDateTime"
import { $DateTimeFormatter$$Type } from "java.time.format.DateTimeFormatter"
import { $LocalTime } from "java.time.LocalTime"
import { $TemporalAmount$$Type } from "java.time.temporal.TemporalAmount"
import { $Comparable } from "java.lang.Comparable"
import { $ZoneOffset$$Type } from "java.time.ZoneOffset"
import { $Temporal, $Temporal$$Type } from "java.time.temporal.Temporal"
import { $Comparator } from "java.util.Comparator"
import { $TemporalAdjuster } from "java.time.temporal.TemporalAdjuster"

export interface $ChronoLocalDateTime<D extends $ChronoLocalDate = $ChronoLocalDate> extends $Temporal, $TemporalAdjuster, $Comparable<$ChronoLocalDateTime<any>> {
"adjustInto"(temporal0: $Temporal$$Type): $Temporal
"atZone"(zoneId0: $ZoneId$$Type): $ChronoZonedDateTime<D>
"compareTo"(chronoLocalDateTime0: $ChronoLocalDateTime$$Type<any>): integer
"equals"(object0: any): boolean
"format"(dateTimeFormatter0: $DateTimeFormatter$$Type): string
"get"(temporalField0: $TemporalField$$Type): integer
"getChronology"(): $Chronology
"getLong"(temporalField0: $TemporalField$$Type): long
"hashCode"(): integer
"isAfter"(chronoLocalDateTime0: $ChronoLocalDateTime$$Type<any>): boolean
"isBefore"(chronoLocalDateTime0: $ChronoLocalDateTime$$Type<any>): boolean
"isEqual"(chronoLocalDateTime0: $ChronoLocalDateTime$$Type<any>): boolean
"isSupported"(temporalUnit0: $TemporalUnit$$Type): boolean
"isSupported"(temporalField0: $TemporalField$$Type): boolean
"minus"(long0: long, temporalUnit1: $TemporalUnit$$Type): $ChronoLocalDateTime<D>
"plus"(long0: long, temporalUnit1: $TemporalUnit$$Type): $ChronoLocalDateTime<D>
"plus"(temporalAmount0: $TemporalAmount$$Type): $ChronoLocalDateTime<D>
"query"<R>(temporalQuery0: $TemporalQuery$$Type<R>): R
"range"(temporalField0: $TemporalField$$Type): $ValueRange
"toEpochSecond"(zoneOffset0: $ZoneOffset$$Type): long
"toInstant"(zoneOffset0: $ZoneOffset$$Type): $Instant
"toLocalDate"(): D
"toLocalTime"(): $LocalTime
"toString"(): string
"until"(temporal0: $Temporal$$Type, temporalUnit1: $TemporalUnit$$Type): long
"with"(temporalField0: $TemporalField$$Type, long1: long): $ChronoLocalDateTime<D>
get "chronology"(): $Chronology
}

export namespace $ChronoLocalDateTime {
function from(temporalAccessor0: $TemporalAccessor$$Type): $ChronoLocalDateTime<any>
function timeLineOrder(): $Comparator<$ChronoLocalDateTime<any>>
}
export abstract class $ChronoLocalDateTime$$Static<D extends $ChronoLocalDate = $ChronoLocalDate> implements $ChronoLocalDateTime<D> {
static "from"(temporalAccessor0: $TemporalAccessor$$Type): $ChronoLocalDateTime<any>
static "timeLineOrder"(): $Comparator<$ChronoLocalDateTime<any>>
}
}

declare module "java.time.ZonedDateTime" {
import { $Month } from "java.time.Month"
import { $TemporalField$$Type } from "java.time.temporal.TemporalField"
import { $TemporalUnit$$Type } from "java.time.temporal.TemporalUnit"
import { $LocalDateTime$$Type } from "java.time.LocalDateTime"
import { $TemporalQuery$$Type } from "java.time.temporal.TemporalQuery"
import { $Instant, $Instant$$Type } from "java.time.Instant"
import { $ZoneId, $ZoneId$$Type } from "java.time.ZoneId"
import { $TemporalAccessor$$Type } from "java.time.temporal.TemporalAccessor"
import { $Serializable } from "java.io.Serializable"
import { $Chronology } from "java.time.chrono.Chronology"
import { $ValueRange } from "java.time.temporal.ValueRange"
import { $ChronoZonedDateTime, $ChronoZonedDateTime$$Type } from "java.time.chrono.ChronoZonedDateTime"
import { $OffsetDateTime } from "java.time.OffsetDateTime"
import { $DateTimeFormatter$$Type } from "java.time.format.DateTimeFormatter"
import { $DayOfWeek } from "java.time.DayOfWeek"
import { $LocalDate, $LocalDate$$Type } from "java.time.LocalDate"
import { $LocalTime, $LocalTime$$Type } from "java.time.LocalTime"
import { $Clock$$Type } from "java.time.Clock"
import { $TemporalAmount$$Type } from "java.time.temporal.TemporalAmount"
import { $ZoneOffset, $ZoneOffset$$Type } from "java.time.ZoneOffset"
import { $Comparator } from "java.util.Comparator"
import { $Temporal, $Temporal$$Type } from "java.time.temporal.Temporal"

export class $ZonedDateTime implements $Temporal, $ChronoZonedDateTime<$LocalDate>, $Serializable {
public "compareTo"(chronoZonedDateTime0: $ChronoZonedDateTime$$Type<any>): integer
public "format"(dateTimeFormatter0: $DateTimeFormatter$$Type): string
public static "from"(temporalAccessor0: $TemporalAccessor$$Type): $ZonedDateTime
public "get"(temporalField0: $TemporalField$$Type): integer
public "getChronology"(): $Chronology
public "getDayOfMonth"(): integer
public "getDayOfWeek"(): $DayOfWeek
public "getDayOfYear"(): integer
public "getHour"(): integer
public "getLong"(temporalField0: $TemporalField$$Type): long
public "getMinute"(): integer
public "getMonth"(): $Month
public "getMonthValue"(): integer
public "getNano"(): integer
public "getOffset"(): $ZoneOffset
public "getSecond"(): integer
public "getYear"(): integer
public "getZone"(): $ZoneId
public "isAfter"(chronoZonedDateTime0: $ChronoZonedDateTime$$Type<any>): boolean
public "isBefore"(chronoZonedDateTime0: $ChronoZonedDateTime$$Type<any>): boolean
public "isEqual"(chronoZonedDateTime0: $ChronoZonedDateTime$$Type<any>): boolean
public "isSupported"(temporalUnit0: $TemporalUnit$$Type): boolean
public "isSupported"(temporalField0: $TemporalField$$Type): boolean
public "minus"(long0: long, temporalUnit1: $TemporalUnit$$Type): $ZonedDateTime
public "minusDays"(long0: long): $ZonedDateTime
public "minusHours"(long0: long): $ZonedDateTime
public "minusMinutes"(long0: long): $ZonedDateTime
public "minusMonths"(long0: long): $ZonedDateTime
public "minusNanos"(long0: long): $ZonedDateTime
public "minusSeconds"(long0: long): $ZonedDateTime
public "minusWeeks"(long0: long): $ZonedDateTime
public "minusYears"(long0: long): $ZonedDateTime
public static "now"(): $ZonedDateTime
public static "now"(zoneId0: $ZoneId$$Type): $ZonedDateTime
public static "now"(clock0: $Clock$$Type): $ZonedDateTime
public static "of"(localDateTime0: $LocalDateTime$$Type, zoneId1: $ZoneId$$Type): $ZonedDateTime
public static "of"(localDate0: $LocalDate$$Type, localTime1: $LocalTime$$Type, zoneId2: $ZoneId$$Type): $ZonedDateTime
public static "of"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, zoneId7: $ZoneId$$Type): $ZonedDateTime
public static "ofInstant"(instant0: $Instant$$Type, zoneId1: $ZoneId$$Type): $ZonedDateTime
public static "ofInstant"(localDateTime0: $LocalDateTime$$Type, zoneOffset1: $ZoneOffset$$Type, zoneId2: $ZoneId$$Type): $ZonedDateTime
public static "ofLocal"(localDateTime0: $LocalDateTime$$Type, zoneId1: $ZoneId$$Type, zoneOffset2: $ZoneOffset$$Type): $ZonedDateTime
public static "ofStrict"(localDateTime0: $LocalDateTime$$Type, zoneOffset1: $ZoneOffset$$Type, zoneId2: $ZoneId$$Type): $ZonedDateTime
public static "parse"(charSequence0: charseq, dateTimeFormatter1: $DateTimeFormatter$$Type): $ZonedDateTime
public static "parse"(charSequence0: charseq): $ZonedDateTime
public "plus"(temporalAmount0: $TemporalAmount$$Type): $ZonedDateTime
public "plus"(long0: long, temporalUnit1: $TemporalUnit$$Type): $ZonedDateTime
public "plusDays"(long0: long): $ZonedDateTime
public "plusHours"(long0: long): $ZonedDateTime
public "plusMinutes"(long0: long): $ZonedDateTime
public "plusMonths"(long0: long): $ZonedDateTime
public "plusNanos"(long0: long): $ZonedDateTime
public "plusSeconds"(long0: long): $ZonedDateTime
public "plusWeeks"(long0: long): $ZonedDateTime
public "plusYears"(long0: long): $ZonedDateTime
public "query"<R>(temporalQuery0: $TemporalQuery$$Type<R>): R
public "range"(temporalField0: $TemporalField$$Type): $ValueRange
public static "timeLineOrder"(): $Comparator<$ChronoZonedDateTime<any>>
public "toEpochSecond"(): long
public "toInstant"(): $Instant
public "toLocalDate"(): $LocalDate
public "toLocalTime"(): $LocalTime
public "toOffsetDateTime"(): $OffsetDateTime
public "truncatedTo"(temporalUnit0: $TemporalUnit$$Type): $ZonedDateTime
public "until"(temporal0: $Temporal$$Type, temporalUnit1: $TemporalUnit$$Type): long
public "with"(temporalField0: $TemporalField$$Type, long1: long): $ZonedDateTime
public "withDayOfMonth"(int0: integer): $ZonedDateTime
public "withDayOfYear"(int0: integer): $ZonedDateTime
public "withEarlierOffsetAtOverlap"(): $ZonedDateTime
public "withFixedOffsetZone"(): $ZonedDateTime
public "withHour"(int0: integer): $ZonedDateTime
public "withLaterOffsetAtOverlap"(): $ZonedDateTime
public "withMinute"(int0: integer): $ZonedDateTime
public "withMonth"(int0: integer): $ZonedDateTime
public "withNano"(int0: integer): $ZonedDateTime
public "withSecond"(int0: integer): $ZonedDateTime
public "withYear"(int0: integer): $ZonedDateTime
public "withZoneSameInstant"(zoneId0: $ZoneId$$Type): $ZonedDateTime
public "withZoneSameLocal"(zoneId0: $ZoneId$$Type): $ZonedDateTime
get "chronology"(): $Chronology
get "dayOfMonth"(): integer
get "dayOfWeek"(): $DayOfWeek
get "dayOfYear"(): integer
get "hour"(): integer
get "minute"(): integer
get "month"(): $Month
get "monthValue"(): integer
get "nano"(): integer
get "offset"(): $ZoneOffset
get "second"(): integer
get "year"(): integer
get "zone"(): $ZoneId
}
}

declare module "java.time.Instant" {
import { $ZonedDateTime } from "java.time.ZonedDateTime"
import { $TemporalField$$Type } from "java.time.temporal.TemporalField"
import { $TemporalUnit$$Type } from "java.time.temporal.TemporalUnit"
import { $TemporalQuery$$Type } from "java.time.temporal.TemporalQuery"
import { $ZoneId$$Type } from "java.time.ZoneId"
import { $TemporalAccessor$$Type } from "java.time.temporal.TemporalAccessor"
import { $Serializable } from "java.io.Serializable"
import { $ValueRange } from "java.time.temporal.ValueRange"
import { $OffsetDateTime } from "java.time.OffsetDateTime"
import { $Clock$$Type } from "java.time.Clock"
import { $TemporalAmount$$Type } from "java.time.temporal.TemporalAmount"
import { $Comparable } from "java.lang.Comparable"
import { $ZoneOffset$$Type } from "java.time.ZoneOffset"
import { $Temporal, $Temporal$$Type } from "java.time.temporal.Temporal"
import { $TemporalAdjuster, $TemporalAdjuster$$Type } from "java.time.temporal.TemporalAdjuster"

export class $Instant implements $Temporal, $TemporalAdjuster, $Comparable<$Instant>, $Serializable {
static readonly "EPOCH": $Instant
static readonly "MAX": $Instant
static readonly "MIN": $Instant

public "adjustInto"(temporal0: $Temporal$$Type): $Temporal
public "atOffset"(zoneOffset0: $ZoneOffset$$Type): $OffsetDateTime
public "atZone"(zoneId0: $ZoneId$$Type): $ZonedDateTime
public "compareTo"(instant0: $Instant$$Type): integer
public static "from"(temporalAccessor0: $TemporalAccessor$$Type): $Instant
public "get"(temporalField0: $TemporalField$$Type): integer
public "getEpochSecond"(): long
public "getLong"(temporalField0: $TemporalField$$Type): long
public "getNano"(): integer
public "isAfter"(instant0: $Instant$$Type): boolean
public "isBefore"(instant0: $Instant$$Type): boolean
public "isSupported"(temporalField0: $TemporalField$$Type): boolean
public "isSupported"(temporalUnit0: $TemporalUnit$$Type): boolean
public "minusMillis"(long0: long): $Instant
public "minusNanos"(long0: long): $Instant
public "minusSeconds"(long0: long): $Instant
public static "now"(): $Instant
public static "now"(clock0: $Clock$$Type): $Instant
public static "ofEpochMilli"(long0: long): $Instant
public static "ofEpochSecond"(long0: long): $Instant
public static "ofEpochSecond"(long0: long, long1: long): $Instant
public static "parse"(charSequence0: charseq): $Instant
public "plus"(temporalAmount0: $TemporalAmount$$Type): $Instant
public "plus"(long0: long, temporalUnit1: $TemporalUnit$$Type): $Instant
public "plusMillis"(long0: long): $Instant
public "plusNanos"(long0: long): $Instant
public "plusSeconds"(long0: long): $Instant
public "query"<R>(temporalQuery0: $TemporalQuery$$Type<R>): R
public "range"(temporalField0: $TemporalField$$Type): $ValueRange
public "toEpochMilli"(): long
public "truncatedTo"(temporalUnit0: $TemporalUnit$$Type): $Instant
public "until"(temporal0: $Temporal$$Type, temporalUnit1: $TemporalUnit$$Type): long
public "with"(temporalAdjuster0: $TemporalAdjuster$$Type): $Instant
public "with"(temporalField0: $TemporalField$$Type, long1: long): $Instant
get "epochSecond"(): long
get "nano"(): integer
}
}

declare module "java.time.temporal.TemporalField" {
import { $ResolverStyle$$Type } from "java.time.format.ResolverStyle"
import { $ValueRange } from "java.time.temporal.ValueRange"
import { $Locale$$Type } from "java.util.Locale"
import { $TemporalUnit } from "java.time.temporal.TemporalUnit"
import { $Map$$Type } from "java.util.Map"
import { $Temporal, $Temporal$$Type } from "java.time.temporal.Temporal"
import { $TemporalAccessor, $TemporalAccessor$$Type } from "java.time.temporal.TemporalAccessor"

export interface $TemporalField {
"adjustInto"<R extends $Temporal>(r0: R, long1: long): R
"getBaseUnit"(): $TemporalUnit
"getDisplayName"(locale0: $Locale$$Type): string
"getFrom"(temporalAccessor0: $TemporalAccessor$$Type): long
"getRangeUnit"(): $TemporalUnit
"isDateBased"(): boolean
"isSupportedBy"(temporalAccessor0: $TemporalAccessor$$Type): boolean
"isTimeBased"(): boolean
"range"(): $ValueRange
"rangeRefinedBy"(temporalAccessor0: $TemporalAccessor$$Type): $ValueRange
"resolve"(map0: $Map$$Type<$TemporalField$$Type, long>, temporalAccessor1: $TemporalAccessor$$Type, resolverStyle2: $ResolverStyle$$Type): $TemporalAccessor
"toString"(): string
get "baseUnit"(): $TemporalUnit
get "rangeUnit"(): $TemporalUnit
get "dateBased"(): boolean
get "timeBased"(): boolean
}

export namespace $TemporalField {
const probejs$$marker: never
}
export abstract class $TemporalField$$Static implements $TemporalField {
}
}

declare module "java.time.InstantSource" {
import { $Duration$$Type } from "java.time.Duration"
import { $Clock } from "java.time.Clock"
import { $Instant, $Instant$$Type } from "java.time.Instant"
import { $ZoneId$$Type } from "java.time.ZoneId"

export interface $InstantSource {
"instant"(): $Instant
"millis"(): long
"withZone"(zoneId0: $ZoneId$$Type): $Clock
}

export namespace $InstantSource {
function fixed(instant0: $Instant$$Type): $InstantSource
function offset(instantSource0: $InstantSource$$Type, duration1: $Duration$$Type): $InstantSource
function system(): $InstantSource
function tick(instantSource0: $InstantSource$$Type, duration1: $Duration$$Type): $InstantSource
}
export abstract class $InstantSource$$Static implements $InstantSource {
static "fixed"(instant0: $Instant$$Type): $InstantSource
static "offset"(instantSource0: $InstantSource$$Type, duration1: $Duration$$Type): $InstantSource
static "system"(): $InstantSource
static "tick"(instantSource0: $InstantSource$$Type, duration1: $Duration$$Type): $InstantSource
}
}

declare module "java.time.format.DateTimeFormatter" {
import { $ResolverStyle, $ResolverStyle$$Type } from "java.time.format.ResolverStyle"
import { $Period } from "java.time.Period"
import { $Format } from "java.text.Format"
import { $FormatStyle$$Type } from "java.time.format.FormatStyle"
import { $Appendable$$Type } from "java.lang.Appendable"
import { $TemporalField, $TemporalField$$Type } from "java.time.temporal.TemporalField"
import { $TemporalQuery, $TemporalQuery$$Type } from "java.time.temporal.TemporalQuery"
import { $ParsePosition$$Type } from "java.text.ParsePosition"
import { $Set, $Set$$Type } from "java.util.Set"
import { $ZoneId, $ZoneId$$Type } from "java.time.ZoneId"
import { $TemporalAccessor, $TemporalAccessor$$Type } from "java.time.temporal.TemporalAccessor"
import { $Chronology, $Chronology$$Type } from "java.time.chrono.Chronology"
import { $Locale, $Locale$$Type } from "java.util.Locale"
import { $DecimalStyle, $DecimalStyle$$Type } from "java.time.format.DecimalStyle"

export class $DateTimeFormatter {
static readonly "BASIC_ISO_DATE": $DateTimeFormatter
static readonly "ISO_DATE": $DateTimeFormatter
static readonly "ISO_DATE_TIME": $DateTimeFormatter
static readonly "ISO_INSTANT": $DateTimeFormatter
static readonly "ISO_LOCAL_DATE": $DateTimeFormatter
static readonly "ISO_LOCAL_DATE_TIME": $DateTimeFormatter
static readonly "ISO_LOCAL_TIME": $DateTimeFormatter
static readonly "ISO_OFFSET_DATE": $DateTimeFormatter
static readonly "ISO_OFFSET_DATE_TIME": $DateTimeFormatter
static readonly "ISO_OFFSET_TIME": $DateTimeFormatter
static readonly "ISO_ORDINAL_DATE": $DateTimeFormatter
static readonly "ISO_TIME": $DateTimeFormatter
static readonly "ISO_WEEK_DATE": $DateTimeFormatter
static readonly "ISO_ZONED_DATE_TIME": $DateTimeFormatter
static readonly "RFC_1123_DATE_TIME": $DateTimeFormatter

public "format"(temporalAccessor0: $TemporalAccessor$$Type): string
public "formatTo"(temporalAccessor0: $TemporalAccessor$$Type, appendable1: $Appendable$$Type): void
public "getChronology"(): $Chronology
public "getDecimalStyle"(): $DecimalStyle
public "getLocale"(): $Locale
public "getResolverFields"(): $Set<$TemporalField>
public "getResolverStyle"(): $ResolverStyle
public "getZone"(): $ZoneId
public "localizedBy"(locale0: $Locale$$Type): $DateTimeFormatter
public static "ofLocalizedDate"(formatStyle0: $FormatStyle$$Type): $DateTimeFormatter
public static "ofLocalizedDateTime"(formatStyle0: $FormatStyle$$Type, formatStyle1: $FormatStyle$$Type): $DateTimeFormatter
public static "ofLocalizedDateTime"(formatStyle0: $FormatStyle$$Type): $DateTimeFormatter
public static "ofLocalizedTime"(formatStyle0: $FormatStyle$$Type): $DateTimeFormatter
public static "ofPattern"(string0: string, locale1: $Locale$$Type): $DateTimeFormatter
public static "ofPattern"(string0: string): $DateTimeFormatter
public "parse"<T>(charSequence0: charseq, temporalQuery1: $TemporalQuery$$Type<T>): T
public "parse"(charSequence0: charseq): $TemporalAccessor
public "parse"(charSequence0: charseq, parsePosition1: $ParsePosition$$Type): $TemporalAccessor
public "parseBest"(charSequence0: charseq, ...temporalQuery1s: $TemporalQuery$$Type<any>[]): $TemporalAccessor
public "parseUnresolved"(charSequence0: charseq, parsePosition1: $ParsePosition$$Type): $TemporalAccessor
public static "parsedExcessDays"(): $TemporalQuery<$Period>
public static "parsedLeapSecond"(): $TemporalQuery<boolean>
public "toFormat"(): $Format
public "toFormat"(temporalQuery0: $TemporalQuery$$Type<any>): $Format
public "withChronology"(chronology0: $Chronology$$Type): $DateTimeFormatter
public "withDecimalStyle"(decimalStyle0: $DecimalStyle$$Type): $DateTimeFormatter
public "withLocale"(locale0: $Locale$$Type): $DateTimeFormatter
public "withResolverFields"(...temporalField0s: $TemporalField$$Type[]): $DateTimeFormatter
public "withResolverFields"(set0: $Set$$Type<$TemporalField$$Type>): $DateTimeFormatter
public "withResolverStyle"(resolverStyle0: $ResolverStyle$$Type): $DateTimeFormatter
public "withZone"(zoneId0: $ZoneId$$Type): $DateTimeFormatter
get "chronology"(): $Chronology
get "decimalStyle"(): $DecimalStyle
get "locale"(): $Locale
get "resolverFields"(): $Set<$TemporalField>
get "resolverStyle"(): $ResolverStyle
get "zone"(): $ZoneId
}
}

declare module "java.time.chrono.Chronology" {
import { $ResolverStyle$$Type } from "java.time.format.ResolverStyle"
import { $ChronoLocalDate } from "java.time.chrono.ChronoLocalDate"
import { $ChronoField$$Type } from "java.time.temporal.ChronoField"
import { $TextStyle$$Type } from "java.time.format.TextStyle"
import { $ChronoLocalDateTime } from "java.time.chrono.ChronoLocalDateTime"
import { $TemporalField$$Type } from "java.time.temporal.TemporalField"
import { $Set } from "java.util.Set"
import { $Instant$$Type } from "java.time.Instant"
import { $Era, $Era$$Type } from "java.time.chrono.Era"
import { $ZoneId$$Type } from "java.time.ZoneId"
import { $TemporalAccessor$$Type } from "java.time.temporal.TemporalAccessor"
import { $List } from "java.util.List"
import { $ValueRange } from "java.time.temporal.ValueRange"
import { $ChronoZonedDateTime } from "java.time.chrono.ChronoZonedDateTime"
import { $Locale$$Type } from "java.util.Locale"
import { $Map$$Type } from "java.util.Map"
import { $Clock$$Type } from "java.time.Clock"
import { $Comparable } from "java.lang.Comparable"
import { $ZoneOffset$$Type } from "java.time.ZoneOffset"
import { $ChronoPeriod } from "java.time.chrono.ChronoPeriod"

export interface $Chronology extends $Comparable<$Chronology> {
"compareTo"(chronology0: $Chronology$$Type): integer
"date"(int0: integer, int1: integer, int2: integer): $ChronoLocalDate
"date"(temporalAccessor0: $TemporalAccessor$$Type): $ChronoLocalDate
"date"(era0: $Era$$Type, int1: integer, int2: integer, int3: integer): $ChronoLocalDate
"dateEpochDay"(long0: long): $ChronoLocalDate
"dateNow"(zoneId0: $ZoneId$$Type): $ChronoLocalDate
"dateNow"(clock0: $Clock$$Type): $ChronoLocalDate
"dateNow"(): $ChronoLocalDate
"dateYearDay"(era0: $Era$$Type, int1: integer, int2: integer): $ChronoLocalDate
"dateYearDay"(int0: integer, int1: integer): $ChronoLocalDate
"epochSecond"(era0: $Era$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, zoneOffset7: $ZoneOffset$$Type): long
"epochSecond"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, zoneOffset6: $ZoneOffset$$Type): long
"equals"(object0: any): boolean
"eraOf"(int0: integer): $Era
"eras"(): $List<$Era>
"getCalendarType"(): string
"getDisplayName"(textStyle0: $TextStyle$$Type, locale1: $Locale$$Type): string
"getId"(): string
"hashCode"(): integer
"isLeapYear"(long0: long): boolean
"localDateTime"(temporalAccessor0: $TemporalAccessor$$Type): $ChronoLocalDateTime<$ChronoLocalDate>
"period"(int0: integer, int1: integer, int2: integer): $ChronoPeriod
"prolepticYear"(era0: $Era$$Type, int1: integer): integer
"range"(chronoField0: $ChronoField$$Type): $ValueRange
"resolveDate"(map0: $Map$$Type<$TemporalField$$Type, long>, resolverStyle1: $ResolverStyle$$Type): $ChronoLocalDate
"toString"(): string
"zonedDateTime"(instant0: $Instant$$Type, zoneId1: $ZoneId$$Type): $ChronoZonedDateTime<$ChronoLocalDate>
"zonedDateTime"(temporalAccessor0: $TemporalAccessor$$Type): $ChronoZonedDateTime<$ChronoLocalDate>
get "calendarType"(): string
get "id"(): string
}

export namespace $Chronology {
function from(temporalAccessor0: $TemporalAccessor$$Type): $Chronology
function getAvailableChronologies(): $Set<$Chronology>
function of(string0: string): $Chronology
function ofLocale(locale0: $Locale$$Type): $Chronology
}
export abstract class $Chronology$$Static implements $Chronology {
static "from"(temporalAccessor0: $TemporalAccessor$$Type): $Chronology
static "getAvailableChronologies"(): $Set<$Chronology>
static "of"(string0: string): $Chronology
static "ofLocale"(locale0: $Locale$$Type): $Chronology
}
}

declare module "java.time.OffsetTime" {
import { $TemporalField$$Type } from "java.time.temporal.TemporalField"
import { $TemporalUnit$$Type } from "java.time.temporal.TemporalUnit"
import { $TemporalQuery$$Type } from "java.time.temporal.TemporalQuery"
import { $Instant$$Type } from "java.time.Instant"
import { $ZoneId$$Type } from "java.time.ZoneId"
import { $TemporalAccessor$$Type } from "java.time.temporal.TemporalAccessor"
import { $Serializable } from "java.io.Serializable"
import { $ValueRange } from "java.time.temporal.ValueRange"
import { $OffsetDateTime } from "java.time.OffsetDateTime"
import { $LocalDate$$Type } from "java.time.LocalDate"
import { $DateTimeFormatter$$Type } from "java.time.format.DateTimeFormatter"
import { $LocalTime, $LocalTime$$Type } from "java.time.LocalTime"
import { $Clock$$Type } from "java.time.Clock"
import { $Comparable } from "java.lang.Comparable"
import { $ZoneOffset, $ZoneOffset$$Type } from "java.time.ZoneOffset"
import { $Temporal, $Temporal$$Type } from "java.time.temporal.Temporal"
import { $TemporalAdjuster, $TemporalAdjuster$$Type } from "java.time.temporal.TemporalAdjuster"

export class $OffsetTime implements $Temporal, $TemporalAdjuster, $Comparable<$OffsetTime>, $Serializable {
static readonly "MAX": $OffsetTime
static readonly "MIN": $OffsetTime

public "adjustInto"(temporal0: $Temporal$$Type): $Temporal
public "atDate"(localDate0: $LocalDate$$Type): $OffsetDateTime
public "compareTo"(offsetTime0: $OffsetTime$$Type): integer
public "format"(dateTimeFormatter0: $DateTimeFormatter$$Type): string
public static "from"(temporalAccessor0: $TemporalAccessor$$Type): $OffsetTime
public "get"(temporalField0: $TemporalField$$Type): integer
public "getHour"(): integer
public "getLong"(temporalField0: $TemporalField$$Type): long
public "getMinute"(): integer
public "getNano"(): integer
public "getOffset"(): $ZoneOffset
public "getSecond"(): integer
public "isAfter"(offsetTime0: $OffsetTime$$Type): boolean
public "isBefore"(offsetTime0: $OffsetTime$$Type): boolean
public "isEqual"(offsetTime0: $OffsetTime$$Type): boolean
public "isSupported"(temporalField0: $TemporalField$$Type): boolean
public "isSupported"(temporalUnit0: $TemporalUnit$$Type): boolean
public "minusHours"(long0: long): $OffsetTime
public "minusMinutes"(long0: long): $OffsetTime
public "minusNanos"(long0: long): $OffsetTime
public "minusSeconds"(long0: long): $OffsetTime
public static "now"(): $OffsetTime
public static "now"(zoneId0: $ZoneId$$Type): $OffsetTime
public static "now"(clock0: $Clock$$Type): $OffsetTime
public static "of"(int0: integer, int1: integer, int2: integer, int3: integer, zoneOffset4: $ZoneOffset$$Type): $OffsetTime
public static "of"(localTime0: $LocalTime$$Type, zoneOffset1: $ZoneOffset$$Type): $OffsetTime
public static "ofInstant"(instant0: $Instant$$Type, zoneId1: $ZoneId$$Type): $OffsetTime
public static "parse"(charSequence0: charseq): $OffsetTime
public static "parse"(charSequence0: charseq, dateTimeFormatter1: $DateTimeFormatter$$Type): $OffsetTime
public "plus"(long0: long, temporalUnit1: $TemporalUnit$$Type): $OffsetTime
public "plusHours"(long0: long): $OffsetTime
public "plusMinutes"(long0: long): $OffsetTime
public "plusNanos"(long0: long): $OffsetTime
public "plusSeconds"(long0: long): $OffsetTime
public "query"<R>(temporalQuery0: $TemporalQuery$$Type<R>): R
public "range"(temporalField0: $TemporalField$$Type): $ValueRange
public "toEpochSecond"(localDate0: $LocalDate$$Type): long
public "toLocalTime"(): $LocalTime
public "truncatedTo"(temporalUnit0: $TemporalUnit$$Type): $OffsetTime
public "until"(temporal0: $Temporal$$Type, temporalUnit1: $TemporalUnit$$Type): long
public "with"(temporalField0: $TemporalField$$Type, long1: long): $OffsetTime
public "with"(temporalAdjuster0: $TemporalAdjuster$$Type): $OffsetTime
public "withHour"(int0: integer): $OffsetTime
public "withMinute"(int0: integer): $OffsetTime
public "withNano"(int0: integer): $OffsetTime
public "withOffsetSameInstant"(zoneOffset0: $ZoneOffset$$Type): $OffsetTime
public "withOffsetSameLocal"(zoneOffset0: $ZoneOffset$$Type): $OffsetTime
public "withSecond"(int0: integer): $OffsetTime
get "hour"(): integer
get "minute"(): integer
get "nano"(): integer
get "offset"(): $ZoneOffset
get "second"(): integer
}
}

declare module "java.time.chrono.ChronoLocalDate" {
import { $ChronoLocalDateTime } from "java.time.chrono.ChronoLocalDateTime"
import { $TemporalField$$Type } from "java.time.temporal.TemporalField"
import { $TemporalUnit$$Type } from "java.time.temporal.TemporalUnit"
import { $TemporalQuery$$Type } from "java.time.temporal.TemporalQuery"
import { $Era } from "java.time.chrono.Era"
import { $TemporalAccessor$$Type } from "java.time.temporal.TemporalAccessor"
import { $Chronology } from "java.time.chrono.Chronology"
import { $ValueRange } from "java.time.temporal.ValueRange"
import { $DateTimeFormatter$$Type } from "java.time.format.DateTimeFormatter"
import { $LocalTime$$Type } from "java.time.LocalTime"
import { $TemporalAmount$$Type } from "java.time.temporal.TemporalAmount"
import { $Comparable } from "java.lang.Comparable"
import { $Temporal, $Temporal$$Type } from "java.time.temporal.Temporal"
import { $Comparator } from "java.util.Comparator"
import { $TemporalAdjuster } from "java.time.temporal.TemporalAdjuster"
import { $ChronoPeriod } from "java.time.chrono.ChronoPeriod"

export interface $ChronoLocalDate extends $Temporal, $TemporalAdjuster, $Comparable<$ChronoLocalDate> {
"adjustInto"(temporal0: $Temporal$$Type): $Temporal
"atTime"(localTime0: $LocalTime$$Type): $ChronoLocalDateTime<any>
"compareTo"(chronoLocalDate0: $ChronoLocalDate$$Type): integer
"equals"(object0: any): boolean
"format"(dateTimeFormatter0: $DateTimeFormatter$$Type): string
"get"(temporalField0: $TemporalField$$Type): integer
"getChronology"(): $Chronology
"getEra"(): $Era
"getLong"(temporalField0: $TemporalField$$Type): long
"hashCode"(): integer
"isAfter"(chronoLocalDate0: $ChronoLocalDate$$Type): boolean
"isBefore"(chronoLocalDate0: $ChronoLocalDate$$Type): boolean
"isEqual"(chronoLocalDate0: $ChronoLocalDate$$Type): boolean
"isLeapYear"(): boolean
"isSupported"(temporalField0: $TemporalField$$Type): boolean
"isSupported"(temporalUnit0: $TemporalUnit$$Type): boolean
"lengthOfMonth"(): integer
"lengthOfYear"(): integer
"minus"(temporalAmount0: $TemporalAmount$$Type): $ChronoLocalDate
"query"<R>(temporalQuery0: $TemporalQuery$$Type<R>): R
"range"(temporalField0: $TemporalField$$Type): $ValueRange
"toEpochDay"(): long
"toString"(): string
"until"(temporal0: $Temporal$$Type, temporalUnit1: $TemporalUnit$$Type): long
"until"(chronoLocalDate0: $ChronoLocalDate$$Type): $ChronoPeriod
get "chronology"(): $Chronology
get "era"(): $Era
get "leapYear"(): boolean
}

export namespace $ChronoLocalDate {
function from(temporalAccessor0: $TemporalAccessor$$Type): $ChronoLocalDate
function timeLineOrder(): $Comparator<$ChronoLocalDate>
}
export abstract class $ChronoLocalDate$$Static implements $ChronoLocalDate {
static "from"(temporalAccessor0: $TemporalAccessor$$Type): $ChronoLocalDate
static "timeLineOrder"(): $Comparator<$ChronoLocalDate>
}
}

declare module "java.time.zone.ZoneRules" {
import { $List, $List$$Type } from "java.util.List"
import { $Duration } from "java.time.Duration"
import { $LocalDateTime$$Type } from "java.time.LocalDateTime"
import { $ZoneOffsetTransition, $ZoneOffsetTransition$$Type } from "java.time.zone.ZoneOffsetTransition"
import { $ZoneOffset, $ZoneOffset$$Type } from "java.time.ZoneOffset"
import { $ZoneOffsetTransitionRule, $ZoneOffsetTransitionRule$$Type } from "java.time.zone.ZoneOffsetTransitionRule"
import { $Instant$$Type } from "java.time.Instant"
import { $Serializable } from "java.io.Serializable"

export class $ZoneRules implements $Serializable {
public "getDaylightSavings"(instant0: $Instant$$Type): $Duration
public "getOffset"(localDateTime0: $LocalDateTime$$Type): $ZoneOffset
public "getOffset"(instant0: $Instant$$Type): $ZoneOffset
public "getStandardOffset"(instant0: $Instant$$Type): $ZoneOffset
public "getTransition"(localDateTime0: $LocalDateTime$$Type): $ZoneOffsetTransition
public "getTransitionRules"(): $List<$ZoneOffsetTransitionRule>
public "getTransitions"(): $List<$ZoneOffsetTransition>
public "getValidOffsets"(localDateTime0: $LocalDateTime$$Type): $List<$ZoneOffset>
public "isDaylightSavings"(instant0: $Instant$$Type): boolean
public "isFixedOffset"(): boolean
public "isValidOffset"(localDateTime0: $LocalDateTime$$Type, zoneOffset1: $ZoneOffset$$Type): boolean
public "nextTransition"(instant0: $Instant$$Type): $ZoneOffsetTransition
public static "of"(zoneOffset0: $ZoneOffset$$Type, zoneOffset1: $ZoneOffset$$Type, list2: $List$$Type<$ZoneOffsetTransition$$Type>, list3: $List$$Type<$ZoneOffsetTransition$$Type>, list4: $List$$Type<$ZoneOffsetTransitionRule$$Type>): $ZoneRules
public static "of"(zoneOffset0: $ZoneOffset$$Type): $ZoneRules
public "previousTransition"(instant0: $Instant$$Type): $ZoneOffsetTransition
get "transitionRules"(): $List<$ZoneOffsetTransitionRule>
get "transitions"(): $List<$ZoneOffsetTransition>
get "fixedOffset"(): boolean
}
}

declare module "java.time.chrono.IsoEra" {
import { $ValueRange } from "java.time.temporal.ValueRange"
import { $Enum } from "java.lang.Enum"
import { $TextStyle$$Type } from "java.time.format.TextStyle"
import { $Locale$$Type } from "java.util.Locale"
import { $TemporalField$$Type } from "java.time.temporal.TemporalField"
import { $TemporalQuery$$Type } from "java.time.temporal.TemporalQuery"
import { $Temporal, $Temporal$$Type } from "java.time.temporal.Temporal"
import { $Era } from "java.time.chrono.Era"

export class $IsoEra extends $Enum<$IsoEra> implements $Era {
static readonly "BCE": $IsoEra
static readonly "CE": $IsoEra

public "adjustInto"(temporal0: $Temporal$$Type): $Temporal
public "get"(temporalField0: $TemporalField$$Type): integer
public "getDisplayName"(textStyle0: $TextStyle$$Type, locale1: $Locale$$Type): string
public "getLong"(temporalField0: $TemporalField$$Type): long
public "getValue"(): integer
public "isSupported"(temporalField0: $TemporalField$$Type): boolean
public static "of"(int0: integer): $IsoEra
public "query"<R>(temporalQuery0: $TemporalQuery$$Type<R>): R
public "range"(temporalField0: $TemporalField$$Type): $ValueRange
public static "valueOf"(string0: string): $IsoEra
public static "values"(): $IsoEra[]
get "value"(): integer
}
}

declare module "java.time.chrono.ChronoPeriod" {
import { $ChronoLocalDate$$Type } from "java.time.chrono.ChronoLocalDate"
import { $Chronology } from "java.time.chrono.Chronology"
import { $List } from "java.util.List"
import { $TemporalUnit, $TemporalUnit$$Type } from "java.time.temporal.TemporalUnit"
import { $TemporalAmount, $TemporalAmount$$Type } from "java.time.temporal.TemporalAmount"
import { $Temporal, $Temporal$$Type } from "java.time.temporal.Temporal"

export interface $ChronoPeriod extends $TemporalAmount {
"addTo"(temporal0: $Temporal$$Type): $Temporal
"equals"(object0: any): boolean
"get"(temporalUnit0: $TemporalUnit$$Type): long
"getChronology"(): $Chronology
"getUnits"(): $List<$TemporalUnit>
"hashCode"(): integer
"isNegative"(): boolean
"isZero"(): boolean
"minus"(temporalAmount0: $TemporalAmount$$Type): $ChronoPeriod
"multipliedBy"(int0: integer): $ChronoPeriod
"negated"(): $ChronoPeriod
"normalized"(): $ChronoPeriod
"plus"(temporalAmount0: $TemporalAmount$$Type): $ChronoPeriod
"subtractFrom"(temporal0: $Temporal$$Type): $Temporal
"toString"(): string
get "chronology"(): $Chronology
get "units"(): $List<$TemporalUnit>
get "negative"(): boolean
get "zero"(): boolean
}

export namespace $ChronoPeriod {
function between(chronoLocalDate0: $ChronoLocalDate$$Type, chronoLocalDate1: $ChronoLocalDate$$Type): $ChronoPeriod
}
export abstract class $ChronoPeriod$$Static implements $ChronoPeriod {
static "between"(chronoLocalDate0: $ChronoLocalDate$$Type, chronoLocalDate1: $ChronoLocalDate$$Type): $ChronoPeriod
}
}

declare module "java.time.chrono.ChronoZonedDateTime" {
import { $ChronoLocalDate } from "java.time.chrono.ChronoLocalDate"
import { $ChronoLocalDateTime } from "java.time.chrono.ChronoLocalDateTime"
import { $TemporalField$$Type } from "java.time.temporal.TemporalField"
import { $TemporalUnit$$Type } from "java.time.temporal.TemporalUnit"
import { $TemporalQuery$$Type } from "java.time.temporal.TemporalQuery"
import { $Instant } from "java.time.Instant"
import { $ZoneId, $ZoneId$$Type } from "java.time.ZoneId"
import { $TemporalAccessor$$Type } from "java.time.temporal.TemporalAccessor"
import { $Chronology } from "java.time.chrono.Chronology"
import { $ValueRange } from "java.time.temporal.ValueRange"
import { $DateTimeFormatter$$Type } from "java.time.format.DateTimeFormatter"
import { $LocalTime } from "java.time.LocalTime"
import { $Comparable } from "java.lang.Comparable"
import { $ZoneOffset } from "java.time.ZoneOffset"
import { $Comparator } from "java.util.Comparator"
import { $Temporal, $Temporal$$Type } from "java.time.temporal.Temporal"

export interface $ChronoZonedDateTime<D extends $ChronoLocalDate = $ChronoLocalDate> extends $Temporal, $Comparable<$ChronoZonedDateTime<any>> {
"compareTo"(chronoZonedDateTime0: $ChronoZonedDateTime$$Type<any>): integer
"equals"(object0: any): boolean
"format"(dateTimeFormatter0: $DateTimeFormatter$$Type): string
"get"(temporalField0: $TemporalField$$Type): integer
"getChronology"(): $Chronology
"getLong"(temporalField0: $TemporalField$$Type): long
"getOffset"(): $ZoneOffset
"getZone"(): $ZoneId
"hashCode"(): integer
"isAfter"(chronoZonedDateTime0: $ChronoZonedDateTime$$Type<any>): boolean
"isBefore"(chronoZonedDateTime0: $ChronoZonedDateTime$$Type<any>): boolean
"isEqual"(chronoZonedDateTime0: $ChronoZonedDateTime$$Type<any>): boolean
"isSupported"(temporalField0: $TemporalField$$Type): boolean
"isSupported"(temporalUnit0: $TemporalUnit$$Type): boolean
"minus"(long0: long, temporalUnit1: $TemporalUnit$$Type): $ChronoZonedDateTime<D>
"plus"(long0: long, temporalUnit1: $TemporalUnit$$Type): $ChronoZonedDateTime<D>
"query"<R>(temporalQuery0: $TemporalQuery$$Type<R>): R
"range"(temporalField0: $TemporalField$$Type): $ValueRange
"toEpochSecond"(): long
"toInstant"(): $Instant
"toLocalDate"(): D
"toLocalDateTime"(): $ChronoLocalDateTime<D>
"toLocalTime"(): $LocalTime
"toString"(): string
"until"(temporal0: $Temporal$$Type, temporalUnit1: $TemporalUnit$$Type): long
"withEarlierOffsetAtOverlap"(): $ChronoZonedDateTime<D>
"withLaterOffsetAtOverlap"(): $ChronoZonedDateTime<D>
"withZoneSameInstant"(zoneId0: $ZoneId$$Type): $ChronoZonedDateTime<D>
"withZoneSameLocal"(zoneId0: $ZoneId$$Type): $ChronoZonedDateTime<D>
get "chronology"(): $Chronology
get "offset"(): $ZoneOffset
get "zone"(): $ZoneId
}

export namespace $ChronoZonedDateTime {
function from(temporalAccessor0: $TemporalAccessor$$Type): $ChronoZonedDateTime<any>
function timeLineOrder(): $Comparator<$ChronoZonedDateTime<any>>
}
export abstract class $ChronoZonedDateTime$$Static<D extends $ChronoLocalDate = $ChronoLocalDate> implements $ChronoZonedDateTime<D> {
static "from"(temporalAccessor0: $TemporalAccessor$$Type): $ChronoZonedDateTime<any>
static "timeLineOrder"(): $Comparator<$ChronoZonedDateTime<any>>
}
}

declare module "java.time.LocalDate" {
import { $ZonedDateTime } from "java.time.ZonedDateTime"
import { $TemporalUnit$$Type } from "java.time.temporal.TemporalUnit"
import { $LocalDateTime } from "java.time.LocalDateTime"
import { $TemporalQuery$$Type } from "java.time.temporal.TemporalQuery"
import { $TemporalAccessor$$Type } from "java.time.temporal.TemporalAccessor"
import { $ValueRange } from "java.time.temporal.ValueRange"
import { $IsoChronology } from "java.time.chrono.IsoChronology"
import { $LocalTime$$Type } from "java.time.LocalTime"
import { $ZoneOffset$$Type } from "java.time.ZoneOffset"
import { $OffsetTime$$Type } from "java.time.OffsetTime"
import { $Period$$Type } from "java.time.Period"
import { $ChronoLocalDate, $ChronoLocalDate$$Type } from "java.time.chrono.ChronoLocalDate"
import { $Month, $Month$$Type } from "java.time.Month"
import { $TemporalField$$Type } from "java.time.temporal.TemporalField"
import { $Instant$$Type } from "java.time.Instant"
import { $ZoneId$$Type } from "java.time.ZoneId"
import { $Serializable } from "java.io.Serializable"
import { $OffsetDateTime } from "java.time.OffsetDateTime"
import { $Stream } from "java.util.stream.Stream"
import { $DateTimeFormatter$$Type } from "java.time.format.DateTimeFormatter"
import { $DayOfWeek } from "java.time.DayOfWeek"
import { $IsoEra } from "java.time.chrono.IsoEra"
import { $Clock$$Type } from "java.time.Clock"
import { $Temporal, $Temporal$$Type } from "java.time.temporal.Temporal"
import { $Comparator } from "java.util.Comparator"
import { $TemporalAdjuster } from "java.time.temporal.TemporalAdjuster"

export class $LocalDate implements $Temporal, $TemporalAdjuster, $ChronoLocalDate, $Serializable {
static readonly "EPOCH": $LocalDate
static readonly "MAX": $LocalDate
static readonly "MIN": $LocalDate

public "adjustInto"(temporal0: $Temporal$$Type): $Temporal
public "atStartOfDay"(zoneId0: $ZoneId$$Type): $ZonedDateTime
public "atStartOfDay"(): $LocalDateTime
public "atTime"(localTime0: $LocalTime$$Type): $LocalDateTime
public "atTime"(int0: integer, int1: integer, int2: integer): $LocalDateTime
public "atTime"(int0: integer, int1: integer): $LocalDateTime
public "atTime"(offsetTime0: $OffsetTime$$Type): $OffsetDateTime
public "atTime"(int0: integer, int1: integer, int2: integer, int3: integer): $LocalDateTime
public "compareTo"(chronoLocalDate0: $ChronoLocalDate$$Type): integer
public "datesUntil"(localDate0: $LocalDate$$Type): $Stream<$LocalDate>
public "datesUntil"(localDate0: $LocalDate$$Type, period1: $Period$$Type): $Stream<$LocalDate>
public "format"(dateTimeFormatter0: $DateTimeFormatter$$Type): string
public static "from"(temporalAccessor0: $TemporalAccessor$$Type): $LocalDate
public "get"(temporalField0: $TemporalField$$Type): integer
public "getChronology"(): $IsoChronology
public "getDayOfMonth"(): integer
public "getDayOfWeek"(): $DayOfWeek
public "getDayOfYear"(): integer
public "getEra"(): $IsoEra
public "getLong"(temporalField0: $TemporalField$$Type): long
public "getMonth"(): $Month
public "getMonthValue"(): integer
public "getYear"(): integer
public "isAfter"(chronoLocalDate0: $ChronoLocalDate$$Type): boolean
public "isBefore"(chronoLocalDate0: $ChronoLocalDate$$Type): boolean
public "isEqual"(chronoLocalDate0: $ChronoLocalDate$$Type): boolean
public "isLeapYear"(): boolean
public "isSupported"(temporalUnit0: $TemporalUnit$$Type): boolean
public "isSupported"(temporalField0: $TemporalField$$Type): boolean
public "lengthOfMonth"(): integer
public "lengthOfYear"(): integer
public "minusDays"(long0: long): $LocalDate
public "minusMonths"(long0: long): $LocalDate
public "minusWeeks"(long0: long): $LocalDate
public "minusYears"(long0: long): $LocalDate
public static "now"(zoneId0: $ZoneId$$Type): $LocalDate
public static "now"(clock0: $Clock$$Type): $LocalDate
public static "now"(): $LocalDate
public static "of"(int0: integer, month1: $Month$$Type, int2: integer): $LocalDate
public static "of"(int0: integer, int1: integer, int2: integer): $LocalDate
public static "ofEpochDay"(long0: long): $LocalDate
public static "ofInstant"(instant0: $Instant$$Type, zoneId1: $ZoneId$$Type): $LocalDate
public static "ofYearDay"(int0: integer, int1: integer): $LocalDate
public static "parse"(charSequence0: charseq): $LocalDate
public static "parse"(charSequence0: charseq, dateTimeFormatter1: $DateTimeFormatter$$Type): $LocalDate
public "plusDays"(long0: long): $LocalDate
public "plusMonths"(long0: long): $LocalDate
public "plusWeeks"(long0: long): $LocalDate
public "plusYears"(long0: long): $LocalDate
public "query"<R>(temporalQuery0: $TemporalQuery$$Type<R>): R
public "range"(temporalField0: $TemporalField$$Type): $ValueRange
public static "timeLineOrder"(): $Comparator<$ChronoLocalDate>
public "toEpochDay"(): long
public "toEpochSecond"(localTime0: $LocalTime$$Type, zoneOffset1: $ZoneOffset$$Type): long
public "until"(temporal0: $Temporal$$Type, temporalUnit1: $TemporalUnit$$Type): long
public "withDayOfMonth"(int0: integer): $LocalDate
public "withDayOfYear"(int0: integer): $LocalDate
public "withMonth"(int0: integer): $LocalDate
public "withYear"(int0: integer): $LocalDate
get "chronology"(): $IsoChronology
get "dayOfMonth"(): integer
get "dayOfWeek"(): $DayOfWeek
get "dayOfYear"(): integer
get "era"(): $IsoEra
get "month"(): $Month
get "monthValue"(): integer
get "year"(): integer
get "leapYear"(): boolean
}
}

declare module "java.time.temporal.ChronoField" {
import { $ResolverStyle$$Type } from "java.time.format.ResolverStyle"
import { $ValueRange } from "java.time.temporal.ValueRange"
import { $Enum } from "java.lang.Enum"
import { $Locale$$Type } from "java.util.Locale"
import { $TemporalUnit } from "java.time.temporal.TemporalUnit"
import { $Map$$Type } from "java.util.Map"
import { $TemporalField, $TemporalField$$Type } from "java.time.temporal.TemporalField"
import { $Temporal, $Temporal$$Type } from "java.time.temporal.Temporal"
import { $TemporalAccessor, $TemporalAccessor$$Type } from "java.time.temporal.TemporalAccessor"

export class $ChronoField extends $Enum<$ChronoField> implements $TemporalField {
static readonly "ALIGNED_DAY_OF_WEEK_IN_MONTH": $ChronoField
static readonly "ALIGNED_DAY_OF_WEEK_IN_YEAR": $ChronoField
static readonly "ALIGNED_WEEK_OF_MONTH": $ChronoField
static readonly "ALIGNED_WEEK_OF_YEAR": $ChronoField
static readonly "AMPM_OF_DAY": $ChronoField
static readonly "CLOCK_HOUR_OF_AMPM": $ChronoField
static readonly "CLOCK_HOUR_OF_DAY": $ChronoField
static readonly "DAY_OF_MONTH": $ChronoField
static readonly "DAY_OF_WEEK": $ChronoField
static readonly "DAY_OF_YEAR": $ChronoField
static readonly "EPOCH_DAY": $ChronoField
static readonly "ERA": $ChronoField
static readonly "HOUR_OF_AMPM": $ChronoField
static readonly "HOUR_OF_DAY": $ChronoField
static readonly "INSTANT_SECONDS": $ChronoField
static readonly "MICRO_OF_DAY": $ChronoField
static readonly "MICRO_OF_SECOND": $ChronoField
static readonly "MILLI_OF_DAY": $ChronoField
static readonly "MILLI_OF_SECOND": $ChronoField
static readonly "MINUTE_OF_DAY": $ChronoField
static readonly "MINUTE_OF_HOUR": $ChronoField
static readonly "MONTH_OF_YEAR": $ChronoField
static readonly "NANO_OF_DAY": $ChronoField
static readonly "NANO_OF_SECOND": $ChronoField
static readonly "OFFSET_SECONDS": $ChronoField
static readonly "PROLEPTIC_MONTH": $ChronoField
static readonly "SECOND_OF_DAY": $ChronoField
static readonly "SECOND_OF_MINUTE": $ChronoField
static readonly "YEAR": $ChronoField
static readonly "YEAR_OF_ERA": $ChronoField

public "adjustInto"<R extends $Temporal>(r0: R, long1: long): R
public "checkValidIntValue"(long0: long): integer
public "checkValidValue"(long0: long): long
public "getBaseUnit"(): $TemporalUnit
public "getDisplayName"(locale0: $Locale$$Type): string
public "getFrom"(temporalAccessor0: $TemporalAccessor$$Type): long
public "getRangeUnit"(): $TemporalUnit
public "isDateBased"(): boolean
public "isSupportedBy"(temporalAccessor0: $TemporalAccessor$$Type): boolean
public "isTimeBased"(): boolean
public "range"(): $ValueRange
public "rangeRefinedBy"(temporalAccessor0: $TemporalAccessor$$Type): $ValueRange
public "resolve"(map0: $Map$$Type<$TemporalField$$Type, long>, temporalAccessor1: $TemporalAccessor$$Type, resolverStyle2: $ResolverStyle$$Type): $TemporalAccessor
public static "valueOf"(string0: string): $ChronoField
public static "values"(): $ChronoField[]
get "baseUnit"(): $TemporalUnit
get "rangeUnit"(): $TemporalUnit
get "dateBased"(): boolean
get "timeBased"(): boolean
}
}

declare module "java.time.chrono.AbstractChronology" {
import { $ResolverStyle$$Type } from "java.time.format.ResolverStyle"
import { $ChronoLocalDate } from "java.time.chrono.ChronoLocalDate"
import { $ChronoField$$Type } from "java.time.temporal.ChronoField"
import { $TextStyle$$Type } from "java.time.format.TextStyle"
import { $ChronoLocalDateTime } from "java.time.chrono.ChronoLocalDateTime"
import { $TemporalField$$Type } from "java.time.temporal.TemporalField"
import { $Set } from "java.util.Set"
import { $Instant$$Type } from "java.time.Instant"
import { $Era, $Era$$Type } from "java.time.chrono.Era"
import { $ZoneId$$Type } from "java.time.ZoneId"
import { $TemporalAccessor$$Type } from "java.time.temporal.TemporalAccessor"
import { $Chronology, $Chronology$$Type } from "java.time.chrono.Chronology"
import { $List } from "java.util.List"
import { $ValueRange } from "java.time.temporal.ValueRange"
import { $ChronoZonedDateTime } from "java.time.chrono.ChronoZonedDateTime"
import { $Locale$$Type } from "java.util.Locale"
import { $Map$$Type } from "java.util.Map"
import { $Clock$$Type } from "java.time.Clock"
import { $ZoneOffset$$Type } from "java.time.ZoneOffset"
import { $ChronoPeriod } from "java.time.chrono.ChronoPeriod"

export class $AbstractChronology implements $Chronology {
public "compareTo"(chronology0: $Chronology$$Type): integer
public "date"(int0: integer, int1: integer, int2: integer): $ChronoLocalDate
public "date"(temporalAccessor0: $TemporalAccessor$$Type): $ChronoLocalDate
public "date"(era0: $Era$$Type, int1: integer, int2: integer, int3: integer): $ChronoLocalDate
public "dateEpochDay"(long0: long): $ChronoLocalDate
public "dateNow"(zoneId0: $ZoneId$$Type): $ChronoLocalDate
public "dateNow"(clock0: $Clock$$Type): $ChronoLocalDate
public "dateNow"(): $ChronoLocalDate
public "dateYearDay"(era0: $Era$$Type, int1: integer, int2: integer): $ChronoLocalDate
public "dateYearDay"(int0: integer, int1: integer): $ChronoLocalDate
public "epochSecond"(era0: $Era$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, zoneOffset7: $ZoneOffset$$Type): long
public "epochSecond"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, zoneOffset6: $ZoneOffset$$Type): long
public "eraOf"(int0: integer): $Era
public "eras"(): $List<$Era>
public static "from"(temporalAccessor0: $TemporalAccessor$$Type): $Chronology
public static "getAvailableChronologies"(): $Set<$Chronology>
public "getCalendarType"(): string
public "getDisplayName"(textStyle0: $TextStyle$$Type, locale1: $Locale$$Type): string
public "getId"(): string
public "isLeapYear"(long0: long): boolean
public "localDateTime"(temporalAccessor0: $TemporalAccessor$$Type): $ChronoLocalDateTime<$ChronoLocalDate>
public static "of"(string0: string): $Chronology
public static "ofLocale"(locale0: $Locale$$Type): $Chronology
public "period"(int0: integer, int1: integer, int2: integer): $ChronoPeriod
public "prolepticYear"(era0: $Era$$Type, int1: integer): integer
public "range"(chronoField0: $ChronoField$$Type): $ValueRange
public "resolveDate"(map0: $Map$$Type<$TemporalField$$Type, long>, resolverStyle1: $ResolverStyle$$Type): $ChronoLocalDate
public "zonedDateTime"(instant0: $Instant$$Type, zoneId1: $ZoneId$$Type): $ChronoZonedDateTime<$ChronoLocalDate>
public "zonedDateTime"(temporalAccessor0: $TemporalAccessor$$Type): $ChronoZonedDateTime<$ChronoLocalDate>
get "calendarType"(): string
get "id"(): string
}
}

declare module "java.time.temporal.TemporalQuery" {
import { $TemporalAccessor$$Type } from "java.time.temporal.TemporalAccessor"

export interface $TemporalQuery<R = any> {
"queryFrom"(temporalAccessor0: $TemporalAccessor$$Type): R
}

export namespace $TemporalQuery {
const probejs$$marker: never
}
export abstract class $TemporalQuery$$Static<R = any> implements $TemporalQuery<R> {
}
}

declare module "java.time.zone.ZoneOffsetTransition" {
import { $Duration } from "java.time.Duration"
import { $LocalDateTime, $LocalDateTime$$Type } from "java.time.LocalDateTime"
import { $Comparable } from "java.lang.Comparable"
import { $ZoneOffset, $ZoneOffset$$Type } from "java.time.ZoneOffset"
import { $Instant } from "java.time.Instant"
import { $Serializable } from "java.io.Serializable"

export class $ZoneOffsetTransition implements $Comparable<$ZoneOffsetTransition>, $Serializable {
public "compareTo"(zoneOffsetTransition0: $ZoneOffsetTransition$$Type): integer
public "getDateTimeAfter"(): $LocalDateTime
public "getDateTimeBefore"(): $LocalDateTime
public "getDuration"(): $Duration
public "getInstant"(): $Instant
public "getOffsetAfter"(): $ZoneOffset
public "getOffsetBefore"(): $ZoneOffset
public "isGap"(): boolean
public "isOverlap"(): boolean
public "isValidOffset"(zoneOffset0: $ZoneOffset$$Type): boolean
public static "of"(localDateTime0: $LocalDateTime$$Type, zoneOffset1: $ZoneOffset$$Type, zoneOffset2: $ZoneOffset$$Type): $ZoneOffsetTransition
public "toEpochSecond"(): long
get "dateTimeAfter"(): $LocalDateTime
get "dateTimeBefore"(): $LocalDateTime
get "duration"(): $Duration
get "instant"(): $Instant
get "offsetAfter"(): $ZoneOffset
get "offsetBefore"(): $ZoneOffset
get "gap"(): boolean
get "overlap"(): boolean
}
}

declare module "java.time.temporal.TemporalAdjuster" {
import { $Temporal, $Temporal$$Type } from "java.time.temporal.Temporal"

export interface $TemporalAdjuster {
"adjustInto"(temporal0: $Temporal$$Type): $Temporal
}

export namespace $TemporalAdjuster {
const probejs$$marker: never
}
export abstract class $TemporalAdjuster$$Static implements $TemporalAdjuster {
}
}

declare module "java.time.Clock" {
import { $InstantSource, $InstantSource$$Type } from "java.time.InstantSource"
import { $Duration$$Type } from "java.time.Duration"
import { $Instant, $Instant$$Type } from "java.time.Instant"
import { $ZoneId, $ZoneId$$Type } from "java.time.ZoneId"

export class $Clock implements $InstantSource {
public static "fixed"(instant0: $Instant$$Type, zoneId1: $ZoneId$$Type): $Clock
public static "fixed"(instant0: $Instant$$Type): $InstantSource
public "getZone"(): $ZoneId
public "instant"(): $Instant
public "millis"(): long
public static "offset"(clock0: $Clock$$Type, duration1: $Duration$$Type): $Clock
public static "offset"(instantSource0: $InstantSource$$Type, duration1: $Duration$$Type): $InstantSource
public static "system"(zoneId0: $ZoneId$$Type): $Clock
public static "system"(): $InstantSource
public static "systemDefaultZone"(): $Clock
public static "systemUTC"(): $Clock
public static "tick"(clock0: $Clock$$Type, duration1: $Duration$$Type): $Clock
public static "tick"(instantSource0: $InstantSource$$Type, duration1: $Duration$$Type): $InstantSource
public static "tickMillis"(zoneId0: $ZoneId$$Type): $Clock
public static "tickMinutes"(zoneId0: $ZoneId$$Type): $Clock
public static "tickSeconds"(zoneId0: $ZoneId$$Type): $Clock
public "withZone"(zoneId0: $ZoneId$$Type): $Clock
get "zone"(): $ZoneId
}
}

declare module "java.time.Month" {
import { $ValueRange } from "java.time.temporal.ValueRange"
import { $Enum } from "java.lang.Enum"
import { $TextStyle$$Type } from "java.time.format.TextStyle"
import { $Locale$$Type } from "java.util.Locale"
import { $TemporalField$$Type } from "java.time.temporal.TemporalField"
import { $TemporalQuery$$Type } from "java.time.temporal.TemporalQuery"
import { $Temporal, $Temporal$$Type } from "java.time.temporal.Temporal"
import { $TemporalAdjuster } from "java.time.temporal.TemporalAdjuster"
import { $TemporalAccessor, $TemporalAccessor$$Type } from "java.time.temporal.TemporalAccessor"

export class $Month extends $Enum<$Month> implements $TemporalAccessor, $TemporalAdjuster {
static readonly "APRIL": $Month
static readonly "AUGUST": $Month
static readonly "DECEMBER": $Month
static readonly "FEBRUARY": $Month
static readonly "JANUARY": $Month
static readonly "JULY": $Month
static readonly "JUNE": $Month
static readonly "MARCH": $Month
static readonly "MAY": $Month
static readonly "NOVEMBER": $Month
static readonly "OCTOBER": $Month
static readonly "SEPTEMBER": $Month

public "adjustInto"(temporal0: $Temporal$$Type): $Temporal
public "firstDayOfYear"(boolean0: boolean): integer
public "firstMonthOfQuarter"(): $Month
public static "from"(temporalAccessor0: $TemporalAccessor$$Type): $Month
public "get"(temporalField0: $TemporalField$$Type): integer
public "getDisplayName"(textStyle0: $TextStyle$$Type, locale1: $Locale$$Type): string
public "getLong"(temporalField0: $TemporalField$$Type): long
public "getValue"(): integer
public "isSupported"(temporalField0: $TemporalField$$Type): boolean
public "length"(boolean0: boolean): integer
public "maxLength"(): integer
public "minLength"(): integer
public "minus"(long0: long): $Month
public static "of"(int0: integer): $Month
public "plus"(long0: long): $Month
public "query"<R>(temporalQuery0: $TemporalQuery$$Type<R>): R
public "range"(temporalField0: $TemporalField$$Type): $ValueRange
public static "valueOf"(string0: string): $Month
public static "values"(): $Month[]
get "value"(): integer
}
}

declare module "java.time.temporal.ValueRange" {
import { $TemporalField$$Type } from "java.time.temporal.TemporalField"
import { $Serializable } from "java.io.Serializable"

export class $ValueRange implements $Serializable {
public "checkValidIntValue"(long0: long, temporalField1: $TemporalField$$Type): integer
public "checkValidValue"(long0: long, temporalField1: $TemporalField$$Type): long
public "getLargestMinimum"(): long
public "getMaximum"(): long
public "getMinimum"(): long
public "getSmallestMaximum"(): long
public "isFixed"(): boolean
public "isIntValue"(): boolean
public "isValidIntValue"(long0: long): boolean
public "isValidValue"(long0: long): boolean
public static "of"(long0: long, long1: long): $ValueRange
public static "of"(long0: long, long1: long, long2: long): $ValueRange
public static "of"(long0: long, long1: long, long2: long, long3: long): $ValueRange
get "largestMinimum"(): long
get "maximum"(): long
get "minimum"(): long
get "smallestMaximum"(): long
get "fixed"(): boolean
get "intValue"(): boolean
}
}

declare module "java.time.temporal.ChronoUnit" {
import { $Enum } from "java.lang.Enum"
import { $Duration } from "java.time.Duration"
import { $TemporalUnit } from "java.time.temporal.TemporalUnit"
import { $Temporal, $Temporal$$Type } from "java.time.temporal.Temporal"

export class $ChronoUnit extends $Enum<$ChronoUnit> implements $TemporalUnit {
static readonly "CENTURIES": $ChronoUnit
static readonly "DAYS": $ChronoUnit
static readonly "DECADES": $ChronoUnit
static readonly "ERAS": $ChronoUnit
static readonly "FOREVER": $ChronoUnit
static readonly "HALF_DAYS": $ChronoUnit
static readonly "HOURS": $ChronoUnit
static readonly "MICROS": $ChronoUnit
static readonly "MILLENNIA": $ChronoUnit
static readonly "MILLIS": $ChronoUnit
static readonly "MINUTES": $ChronoUnit
static readonly "MONTHS": $ChronoUnit
static readonly "NANOS": $ChronoUnit
static readonly "SECONDS": $ChronoUnit
static readonly "WEEKS": $ChronoUnit
static readonly "YEARS": $ChronoUnit

public "addTo"<R extends $Temporal>(r0: R, long1: long): R
public "between"(temporal0: $Temporal$$Type, temporal1: $Temporal$$Type): long
public "getDuration"(): $Duration
public "isDateBased"(): boolean
public "isDurationEstimated"(): boolean
public "isSupportedBy"(temporal0: $Temporal$$Type): boolean
public "isTimeBased"(): boolean
public static "valueOf"(string0: string): $ChronoUnit
public static "values"(): $ChronoUnit[]
get "duration"(): $Duration
get "dateBased"(): boolean
get "durationEstimated"(): boolean
get "timeBased"(): boolean
}
}

declare module "java.time.chrono.Era" {
import { $ValueRange } from "java.time.temporal.ValueRange"
import { $TextStyle$$Type } from "java.time.format.TextStyle"
import { $Locale$$Type } from "java.util.Locale"
import { $TemporalField$$Type } from "java.time.temporal.TemporalField"
import { $TemporalQuery$$Type } from "java.time.temporal.TemporalQuery"
import { $Temporal, $Temporal$$Type } from "java.time.temporal.Temporal"
import { $TemporalAdjuster } from "java.time.temporal.TemporalAdjuster"
import { $TemporalAccessor } from "java.time.temporal.TemporalAccessor"

export interface $Era extends $TemporalAccessor, $TemporalAdjuster {
"adjustInto"(temporal0: $Temporal$$Type): $Temporal
"get"(temporalField0: $TemporalField$$Type): integer
"getDisplayName"(textStyle0: $TextStyle$$Type, locale1: $Locale$$Type): string
"getLong"(temporalField0: $TemporalField$$Type): long
"getValue"(): integer
"isSupported"(temporalField0: $TemporalField$$Type): boolean
"query"<R>(temporalQuery0: $TemporalQuery$$Type<R>): R
"range"(temporalField0: $TemporalField$$Type): $ValueRange
get "value"(): integer
}

export namespace $Era {
const probejs$$marker: never
}
export abstract class $Era$$Static implements $Era {
}
}

declare module "java.time.ZoneId" {
import { $TextStyle$$Type } from "java.time.format.TextStyle"
import { $ZoneRules } from "java.time.zone.ZoneRules"
import { $Locale$$Type } from "java.util.Locale"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Set } from "java.util.Set"
import { $ZoneOffset$$Type } from "java.time.ZoneOffset"
import { $TemporalAccessor$$Type } from "java.time.temporal.TemporalAccessor"
import { $Serializable } from "java.io.Serializable"

export class $ZoneId implements $Serializable {
static readonly "SHORT_IDS": $Map<string, string>

public static "from"(temporalAccessor0: $TemporalAccessor$$Type): $ZoneId
public static "getAvailableZoneIds"(): $Set<string>
public "getDisplayName"(textStyle0: $TextStyle$$Type, locale1: $Locale$$Type): string
public "getId"(): string
public "getRules"(): $ZoneRules
public "normalized"(): $ZoneId
public static "of"(string0: string): $ZoneId
public static "of"(string0: string, map1: $Map$$Type<string, string>): $ZoneId
public static "ofOffset"(string0: string, zoneOffset1: $ZoneOffset$$Type): $ZoneId
public static "systemDefault"(): $ZoneId
get "id"(): string
get "rules"(): $ZoneRules
}
}

declare module "java.time.format.ResolverStyle" {
import { $Enum } from "java.lang.Enum"

export class $ResolverStyle extends $Enum<$ResolverStyle> {
static readonly "LENIENT": $ResolverStyle
static readonly "SMART": $ResolverStyle
static readonly "STRICT": $ResolverStyle

public static "valueOf"(string0: string): $ResolverStyle
public static "values"(): $ResolverStyle[]
}
}

declare module "java.time.format.TextStyle" {
import { $Enum } from "java.lang.Enum"

export class $TextStyle extends $Enum<$TextStyle> {
static readonly "FULL": $TextStyle
static readonly "FULL_STANDALONE": $TextStyle
static readonly "NARROW": $TextStyle
static readonly "NARROW_STANDALONE": $TextStyle
static readonly "SHORT": $TextStyle
static readonly "SHORT_STANDALONE": $TextStyle

public "asNormal"(): $TextStyle
public "asStandalone"(): $TextStyle
public "isStandalone"(): boolean
public static "valueOf"(string0: string): $TextStyle
public static "values"(): $TextStyle[]
get "standalone"(): boolean
}
}

declare module "java.time.Duration" {
import { $List } from "java.util.List"
import { $TemporalUnit, $TemporalUnit$$Type } from "java.time.temporal.TemporalUnit"
import { $TemporalAmount, $TemporalAmount$$Type } from "java.time.temporal.TemporalAmount"
import { $Comparable } from "java.lang.Comparable"
import { $Temporal, $Temporal$$Type } from "java.time.temporal.Temporal"
import { $Serializable } from "java.io.Serializable"

export class $Duration implements $TemporalAmount, $Comparable<$Duration>, $Serializable {
static readonly "ZERO": $Duration

public "abs"(): $Duration
public "addTo"(temporal0: $Temporal$$Type): $Temporal
public static "between"(temporal0: $Temporal$$Type, temporal1: $Temporal$$Type): $Duration
public "compareTo"(duration0: $Duration$$Type): integer
public "dividedBy"(duration0: $Duration$$Type): long
public "dividedBy"(long0: long): $Duration
public static "from"(temporalAmount0: $TemporalAmount$$Type): $Duration
public "get"(temporalUnit0: $TemporalUnit$$Type): long
public "getNano"(): integer
public "getSeconds"(): long
public "getUnits"(): $List<$TemporalUnit>
public "isNegative"(): boolean
public "isZero"(): boolean
public "minus"(long0: long, temporalUnit1: $TemporalUnit$$Type): $Duration
public "minus"(duration0: $Duration$$Type): $Duration
public "minusDays"(long0: long): $Duration
public "minusHours"(long0: long): $Duration
public "minusMillis"(long0: long): $Duration
public "minusMinutes"(long0: long): $Duration
public "minusNanos"(long0: long): $Duration
public "minusSeconds"(long0: long): $Duration
public "multipliedBy"(long0: long): $Duration
public "negated"(): $Duration
public static "of"(long0: long, temporalUnit1: $TemporalUnit$$Type): $Duration
public static "ofDays"(long0: long): $Duration
public static "ofHours"(long0: long): $Duration
public static "ofMillis"(long0: long): $Duration
public static "ofMinutes"(long0: long): $Duration
public static "ofNanos"(long0: long): $Duration
public static "ofSeconds"(long0: long): $Duration
public static "ofSeconds"(long0: long, long1: long): $Duration
public static "parse"(charSequence0: charseq): $Duration
public "plus"(duration0: $Duration$$Type): $Duration
public "plus"(long0: long, temporalUnit1: $TemporalUnit$$Type): $Duration
public "plusDays"(long0: long): $Duration
public "plusHours"(long0: long): $Duration
public "plusMillis"(long0: long): $Duration
public "plusMinutes"(long0: long): $Duration
public "plusNanos"(long0: long): $Duration
public "plusSeconds"(long0: long): $Duration
public "subtractFrom"(temporal0: $Temporal$$Type): $Temporal
public "toDays"(): long
public "toDaysPart"(): long
public "toHours"(): long
public "toHoursPart"(): integer
public "toMillis"(): long
public "toMillisPart"(): integer
public "toMinutes"(): long
public "toMinutesPart"(): integer
public "toNanos"(): long
public "toNanosPart"(): integer
public "toSeconds"(): long
public "toSecondsPart"(): integer
public "truncatedTo"(temporalUnit0: $TemporalUnit$$Type): $Duration
public "withNanos"(int0: integer): $Duration
public "withSeconds"(long0: long): $Duration
get "nano"(): integer
get "seconds"(): long
get "units"(): $List<$TemporalUnit>
get "negative"(): boolean
get "zero"(): boolean
}
}

declare module "java.time.ZoneOffset" {
import { $ValueRange } from "java.time.temporal.ValueRange"
import { $TemporalField$$Type } from "java.time.temporal.TemporalField"
import { $TemporalQuery$$Type } from "java.time.temporal.TemporalQuery"
import { $Comparable } from "java.lang.Comparable"
import { $Temporal, $Temporal$$Type } from "java.time.temporal.Temporal"
import { $TemporalAdjuster } from "java.time.temporal.TemporalAdjuster"
import { $ZoneId } from "java.time.ZoneId"
import { $TemporalAccessor, $TemporalAccessor$$Type } from "java.time.temporal.TemporalAccessor"
import { $Serializable } from "java.io.Serializable"

export class $ZoneOffset extends $ZoneId implements $TemporalAccessor, $TemporalAdjuster, $Comparable<$ZoneOffset>, $Serializable {
static readonly "MAX": $ZoneOffset
static readonly "MIN": $ZoneOffset
static readonly "UTC": $ZoneOffset

public "adjustInto"(temporal0: $Temporal$$Type): $Temporal
public "compareTo"(zoneOffset0: $ZoneOffset$$Type): integer
public static "from"(temporalAccessor0: $TemporalAccessor$$Type): $ZoneOffset
public "get"(temporalField0: $TemporalField$$Type): integer
public "getLong"(temporalField0: $TemporalField$$Type): long
public "getTotalSeconds"(): integer
public "isSupported"(temporalField0: $TemporalField$$Type): boolean
public static "of"(string0: string): $ZoneOffset
public static "ofHours"(int0: integer): $ZoneOffset
public static "ofHoursMinutes"(int0: integer, int1: integer): $ZoneOffset
public static "ofHoursMinutesSeconds"(int0: integer, int1: integer, int2: integer): $ZoneOffset
public static "ofTotalSeconds"(int0: integer): $ZoneOffset
public "query"<R>(temporalQuery0: $TemporalQuery$$Type<R>): R
public "range"(temporalField0: $TemporalField$$Type): $ValueRange
get "totalSeconds"(): integer
}
}

declare module "java.time.DayOfWeek" {
import { $ValueRange } from "java.time.temporal.ValueRange"
import { $Enum } from "java.lang.Enum"
import { $TextStyle$$Type } from "java.time.format.TextStyle"
import { $Locale$$Type } from "java.util.Locale"
import { $TemporalField$$Type } from "java.time.temporal.TemporalField"
import { $TemporalQuery$$Type } from "java.time.temporal.TemporalQuery"
import { $Temporal, $Temporal$$Type } from "java.time.temporal.Temporal"
import { $TemporalAdjuster } from "java.time.temporal.TemporalAdjuster"
import { $TemporalAccessor, $TemporalAccessor$$Type } from "java.time.temporal.TemporalAccessor"

export class $DayOfWeek extends $Enum<$DayOfWeek> implements $TemporalAccessor, $TemporalAdjuster {
static readonly "FRIDAY": $DayOfWeek
static readonly "MONDAY": $DayOfWeek
static readonly "SATURDAY": $DayOfWeek
static readonly "SUNDAY": $DayOfWeek
static readonly "THURSDAY": $DayOfWeek
static readonly "TUESDAY": $DayOfWeek
static readonly "WEDNESDAY": $DayOfWeek

public "adjustInto"(temporal0: $Temporal$$Type): $Temporal
public static "from"(temporalAccessor0: $TemporalAccessor$$Type): $DayOfWeek
public "get"(temporalField0: $TemporalField$$Type): integer
public "getDisplayName"(textStyle0: $TextStyle$$Type, locale1: $Locale$$Type): string
public "getLong"(temporalField0: $TemporalField$$Type): long
public "getValue"(): integer
public "isSupported"(temporalField0: $TemporalField$$Type): boolean
public "minus"(long0: long): $DayOfWeek
public static "of"(int0: integer): $DayOfWeek
public "plus"(long0: long): $DayOfWeek
public "query"<R>(temporalQuery0: $TemporalQuery$$Type<R>): R
public "range"(temporalField0: $TemporalField$$Type): $ValueRange
public static "valueOf"(string0: string): $DayOfWeek
public static "values"(): $DayOfWeek[]
get "value"(): integer
}
}

declare module "java.time.format.DecimalStyle" {
import { $Locale, $Locale$$Type } from "java.util.Locale"
import { $Set } from "java.util.Set"

export class $DecimalStyle {
static readonly "STANDARD": $DecimalStyle

public static "getAvailableLocales"(): $Set<$Locale>
public "getDecimalSeparator"(): character
public "getNegativeSign"(): character
public "getPositiveSign"(): character
public "getZeroDigit"(): character
public static "of"(locale0: $Locale$$Type): $DecimalStyle
public static "ofDefaultLocale"(): $DecimalStyle
public "withDecimalSeparator"(char0: character): $DecimalStyle
public "withNegativeSign"(char0: character): $DecimalStyle
public "withPositiveSign"(char0: character): $DecimalStyle
public "withZeroDigit"(char0: character): $DecimalStyle
get "decimalSeparator"(): character
get "negativeSign"(): character
get "positiveSign"(): character
get "zeroDigit"(): character
}
}

declare module "java.time.OffsetDateTime" {
import { $OffsetTime } from "java.time.OffsetTime"
import { $Month } from "java.time.Month"
import { $ZonedDateTime } from "java.time.ZonedDateTime"
import { $TemporalField$$Type } from "java.time.temporal.TemporalField"
import { $TemporalUnit$$Type } from "java.time.temporal.TemporalUnit"
import { $LocalDateTime, $LocalDateTime$$Type } from "java.time.LocalDateTime"
import { $TemporalQuery$$Type } from "java.time.temporal.TemporalQuery"
import { $Instant, $Instant$$Type } from "java.time.Instant"
import { $ZoneId$$Type } from "java.time.ZoneId"
import { $TemporalAccessor$$Type } from "java.time.temporal.TemporalAccessor"
import { $Serializable } from "java.io.Serializable"
import { $ValueRange } from "java.time.temporal.ValueRange"
import { $DateTimeFormatter$$Type } from "java.time.format.DateTimeFormatter"
import { $DayOfWeek } from "java.time.DayOfWeek"
import { $LocalDate, $LocalDate$$Type } from "java.time.LocalDate"
import { $LocalTime, $LocalTime$$Type } from "java.time.LocalTime"
import { $TemporalAmount$$Type } from "java.time.temporal.TemporalAmount"
import { $Clock$$Type } from "java.time.Clock"
import { $Comparable } from "java.lang.Comparable"
import { $ZoneOffset, $ZoneOffset$$Type } from "java.time.ZoneOffset"
import { $Temporal, $Temporal$$Type } from "java.time.temporal.Temporal"
import { $Comparator } from "java.util.Comparator"
import { $TemporalAdjuster } from "java.time.temporal.TemporalAdjuster"

export class $OffsetDateTime implements $Temporal, $TemporalAdjuster, $Comparable<$OffsetDateTime>, $Serializable {
static readonly "MAX": $OffsetDateTime
static readonly "MIN": $OffsetDateTime

public "adjustInto"(temporal0: $Temporal$$Type): $Temporal
public "atZoneSameInstant"(zoneId0: $ZoneId$$Type): $ZonedDateTime
public "atZoneSimilarLocal"(zoneId0: $ZoneId$$Type): $ZonedDateTime
public "compareTo"(offsetDateTime0: $OffsetDateTime$$Type): integer
public "format"(dateTimeFormatter0: $DateTimeFormatter$$Type): string
public static "from"(temporalAccessor0: $TemporalAccessor$$Type): $OffsetDateTime
public "get"(temporalField0: $TemporalField$$Type): integer
public "getDayOfMonth"(): integer
public "getDayOfWeek"(): $DayOfWeek
public "getDayOfYear"(): integer
public "getHour"(): integer
public "getLong"(temporalField0: $TemporalField$$Type): long
public "getMinute"(): integer
public "getMonth"(): $Month
public "getMonthValue"(): integer
public "getNano"(): integer
public "getOffset"(): $ZoneOffset
public "getSecond"(): integer
public "getYear"(): integer
public "isAfter"(offsetDateTime0: $OffsetDateTime$$Type): boolean
public "isBefore"(offsetDateTime0: $OffsetDateTime$$Type): boolean
public "isEqual"(offsetDateTime0: $OffsetDateTime$$Type): boolean
public "isSupported"(temporalUnit0: $TemporalUnit$$Type): boolean
public "isSupported"(temporalField0: $TemporalField$$Type): boolean
public "minus"(long0: long, temporalUnit1: $TemporalUnit$$Type): $OffsetDateTime
public "minus"(temporalAmount0: $TemporalAmount$$Type): $OffsetDateTime
public "minusDays"(long0: long): $OffsetDateTime
public "minusHours"(long0: long): $OffsetDateTime
public "minusMinutes"(long0: long): $OffsetDateTime
public "minusMonths"(long0: long): $OffsetDateTime
public "minusNanos"(long0: long): $OffsetDateTime
public "minusSeconds"(long0: long): $OffsetDateTime
public "minusWeeks"(long0: long): $OffsetDateTime
public "minusYears"(long0: long): $OffsetDateTime
public static "now"(zoneId0: $ZoneId$$Type): $OffsetDateTime
public static "now"(): $OffsetDateTime
public static "now"(clock0: $Clock$$Type): $OffsetDateTime
public static "of"(localDateTime0: $LocalDateTime$$Type, zoneOffset1: $ZoneOffset$$Type): $OffsetDateTime
public static "of"(localDate0: $LocalDate$$Type, localTime1: $LocalTime$$Type, zoneOffset2: $ZoneOffset$$Type): $OffsetDateTime
public static "of"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, zoneOffset7: $ZoneOffset$$Type): $OffsetDateTime
public static "ofInstant"(instant0: $Instant$$Type, zoneId1: $ZoneId$$Type): $OffsetDateTime
public static "parse"(charSequence0: charseq): $OffsetDateTime
public static "parse"(charSequence0: charseq, dateTimeFormatter1: $DateTimeFormatter$$Type): $OffsetDateTime
public "plus"(temporalAmount0: $TemporalAmount$$Type): $OffsetDateTime
public "plusDays"(long0: long): $OffsetDateTime
public "plusHours"(long0: long): $OffsetDateTime
public "plusMinutes"(long0: long): $OffsetDateTime
public "plusMonths"(long0: long): $OffsetDateTime
public "plusNanos"(long0: long): $OffsetDateTime
public "plusSeconds"(long0: long): $OffsetDateTime
public "plusWeeks"(long0: long): $OffsetDateTime
public "plusYears"(long0: long): $OffsetDateTime
public "query"<R>(temporalQuery0: $TemporalQuery$$Type<R>): R
public "range"(temporalField0: $TemporalField$$Type): $ValueRange
public static "timeLineOrder"(): $Comparator<$OffsetDateTime>
public "toEpochSecond"(): long
public "toInstant"(): $Instant
public "toLocalDate"(): $LocalDate
public "toLocalDateTime"(): $LocalDateTime
public "toLocalTime"(): $LocalTime
public "toOffsetTime"(): $OffsetTime
public "toZonedDateTime"(): $ZonedDateTime
public "truncatedTo"(temporalUnit0: $TemporalUnit$$Type): $OffsetDateTime
public "until"(temporal0: $Temporal$$Type, temporalUnit1: $TemporalUnit$$Type): long
public "withDayOfMonth"(int0: integer): $OffsetDateTime
public "withDayOfYear"(int0: integer): $OffsetDateTime
public "withHour"(int0: integer): $OffsetDateTime
public "withMinute"(int0: integer): $OffsetDateTime
public "withMonth"(int0: integer): $OffsetDateTime
public "withNano"(int0: integer): $OffsetDateTime
public "withOffsetSameInstant"(zoneOffset0: $ZoneOffset$$Type): $OffsetDateTime
public "withOffsetSameLocal"(zoneOffset0: $ZoneOffset$$Type): $OffsetDateTime
public "withSecond"(int0: integer): $OffsetDateTime
public "withYear"(int0: integer): $OffsetDateTime
get "dayOfMonth"(): integer
get "dayOfWeek"(): $DayOfWeek
get "dayOfYear"(): integer
get "hour"(): integer
get "minute"(): integer
get "month"(): $Month
get "monthValue"(): integer
get "nano"(): integer
get "offset"(): $ZoneOffset
get "second"(): integer
get "year"(): integer
}
}

declare module "java.time.LocalDateTime" {
import { $ChronoLocalDateTime, $ChronoLocalDateTime$$Type } from "java.time.chrono.ChronoLocalDateTime"
import { $Month, $Month$$Type } from "java.time.Month"
import { $ZonedDateTime } from "java.time.ZonedDateTime"
import { $TemporalField$$Type } from "java.time.temporal.TemporalField"
import { $TemporalUnit$$Type } from "java.time.temporal.TemporalUnit"
import { $TemporalQuery$$Type } from "java.time.temporal.TemporalQuery"
import { $Instant, $Instant$$Type } from "java.time.Instant"
import { $ZoneId$$Type } from "java.time.ZoneId"
import { $TemporalAccessor$$Type } from "java.time.temporal.TemporalAccessor"
import { $Serializable } from "java.io.Serializable"
import { $Chronology } from "java.time.chrono.Chronology"
import { $ValueRange } from "java.time.temporal.ValueRange"
import { $OffsetDateTime } from "java.time.OffsetDateTime"
import { $DateTimeFormatter$$Type } from "java.time.format.DateTimeFormatter"
import { $DayOfWeek } from "java.time.DayOfWeek"
import { $LocalDate, $LocalDate$$Type } from "java.time.LocalDate"
import { $LocalTime, $LocalTime$$Type } from "java.time.LocalTime"
import { $TemporalAmount$$Type } from "java.time.temporal.TemporalAmount"
import { $Clock$$Type } from "java.time.Clock"
import { $ZoneOffset$$Type } from "java.time.ZoneOffset"
import { $Temporal, $Temporal$$Type } from "java.time.temporal.Temporal"
import { $Comparator } from "java.util.Comparator"
import { $TemporalAdjuster } from "java.time.temporal.TemporalAdjuster"

export class $LocalDateTime implements $Temporal, $TemporalAdjuster, $ChronoLocalDateTime<$LocalDate>, $Serializable {
static readonly "MAX": $LocalDateTime
static readonly "MIN": $LocalDateTime

public "adjustInto"(temporal0: $Temporal$$Type): $Temporal
public "atOffset"(zoneOffset0: $ZoneOffset$$Type): $OffsetDateTime
public "atZone"(zoneId0: $ZoneId$$Type): $ZonedDateTime
public "compareTo"(chronoLocalDateTime0: $ChronoLocalDateTime$$Type<any>): integer
public "format"(dateTimeFormatter0: $DateTimeFormatter$$Type): string
public static "from"(temporalAccessor0: $TemporalAccessor$$Type): $LocalDateTime
public "get"(temporalField0: $TemporalField$$Type): integer
public "getChronology"(): $Chronology
public "getDayOfMonth"(): integer
public "getDayOfWeek"(): $DayOfWeek
public "getDayOfYear"(): integer
public "getHour"(): integer
public "getLong"(temporalField0: $TemporalField$$Type): long
public "getMinute"(): integer
public "getMonth"(): $Month
public "getMonthValue"(): integer
public "getNano"(): integer
public "getSecond"(): integer
public "getYear"(): integer
public "isAfter"(chronoLocalDateTime0: $ChronoLocalDateTime$$Type<any>): boolean
public "isBefore"(chronoLocalDateTime0: $ChronoLocalDateTime$$Type<any>): boolean
public "isEqual"(chronoLocalDateTime0: $ChronoLocalDateTime$$Type<any>): boolean
public "isSupported"(temporalField0: $TemporalField$$Type): boolean
public "isSupported"(temporalUnit0: $TemporalUnit$$Type): boolean
public "minus"(temporalAmount0: $TemporalAmount$$Type): $LocalDateTime
public "minusDays"(long0: long): $LocalDateTime
public "minusHours"(long0: long): $LocalDateTime
public "minusMinutes"(long0: long): $LocalDateTime
public "minusMonths"(long0: long): $LocalDateTime
public "minusNanos"(long0: long): $LocalDateTime
public "minusSeconds"(long0: long): $LocalDateTime
public "minusWeeks"(long0: long): $LocalDateTime
public "minusYears"(long0: long): $LocalDateTime
public static "now"(clock0: $Clock$$Type): $LocalDateTime
public static "now"(zoneId0: $ZoneId$$Type): $LocalDateTime
public static "now"(): $LocalDateTime
public static "of"(int0: integer, month1: $Month$$Type, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer): $LocalDateTime
public static "of"(int0: integer, month1: $Month$$Type, int2: integer, int3: integer, int4: integer, int5: integer): $LocalDateTime
public static "of"(int0: integer, month1: $Month$$Type, int2: integer, int3: integer, int4: integer): $LocalDateTime
public static "of"(localDate0: $LocalDate$$Type, localTime1: $LocalTime$$Type): $LocalDateTime
public static "of"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer): $LocalDateTime
public static "of"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): $LocalDateTime
public static "of"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer): $LocalDateTime
public static "ofEpochSecond"(long0: long, int1: integer, zoneOffset2: $ZoneOffset$$Type): $LocalDateTime
public static "ofInstant"(instant0: $Instant$$Type, zoneId1: $ZoneId$$Type): $LocalDateTime
public static "parse"(charSequence0: charseq): $LocalDateTime
public static "parse"(charSequence0: charseq, dateTimeFormatter1: $DateTimeFormatter$$Type): $LocalDateTime
public "plus"(temporalAmount0: $TemporalAmount$$Type): $LocalDateTime
public "plusDays"(long0: long): $LocalDateTime
public "plusHours"(long0: long): $LocalDateTime
public "plusMinutes"(long0: long): $LocalDateTime
public "plusMonths"(long0: long): $LocalDateTime
public "plusNanos"(long0: long): $LocalDateTime
public "plusSeconds"(long0: long): $LocalDateTime
public "plusWeeks"(long0: long): $LocalDateTime
public "plusYears"(long0: long): $LocalDateTime
public "query"<R>(temporalQuery0: $TemporalQuery$$Type<R>): R
public "range"(temporalField0: $TemporalField$$Type): $ValueRange
public static "timeLineOrder"(): $Comparator<$ChronoLocalDateTime<any>>
public "toEpochSecond"(zoneOffset0: $ZoneOffset$$Type): long
public "toInstant"(zoneOffset0: $ZoneOffset$$Type): $Instant
public "toLocalDate"(): $LocalDate
public "toLocalTime"(): $LocalTime
public "truncatedTo"(temporalUnit0: $TemporalUnit$$Type): $LocalDateTime
public "until"(temporal0: $Temporal$$Type, temporalUnit1: $TemporalUnit$$Type): long
public "withDayOfMonth"(int0: integer): $LocalDateTime
public "withDayOfYear"(int0: integer): $LocalDateTime
public "withHour"(int0: integer): $LocalDateTime
public "withMinute"(int0: integer): $LocalDateTime
public "withMonth"(int0: integer): $LocalDateTime
public "withNano"(int0: integer): $LocalDateTime
public "withSecond"(int0: integer): $LocalDateTime
public "withYear"(int0: integer): $LocalDateTime
get "chronology"(): $Chronology
get "dayOfMonth"(): integer
get "dayOfWeek"(): $DayOfWeek
get "dayOfYear"(): integer
get "hour"(): integer
get "minute"(): integer
get "month"(): $Month
get "monthValue"(): integer
get "nano"(): integer
get "second"(): integer
get "year"(): integer
}
}

declare module "java.time.zone.ZoneOffsetTransitionRule$TimeDefinition" {
import { $Enum } from "java.lang.Enum"
import { $LocalDateTime, $LocalDateTime$$Type } from "java.time.LocalDateTime"
import { $ZoneOffset$$Type } from "java.time.ZoneOffset"

export class $ZoneOffsetTransitionRule$TimeDefinition extends $Enum<$ZoneOffsetTransitionRule$TimeDefinition> {
static readonly "STANDARD": $ZoneOffsetTransitionRule$TimeDefinition
static readonly "UTC": $ZoneOffsetTransitionRule$TimeDefinition
static readonly "WALL": $ZoneOffsetTransitionRule$TimeDefinition

public "createDateTime"(localDateTime0: $LocalDateTime$$Type, zoneOffset1: $ZoneOffset$$Type, zoneOffset2: $ZoneOffset$$Type): $LocalDateTime
public static "valueOf"(string0: string): $ZoneOffsetTransitionRule$TimeDefinition
public static "values"(): $ZoneOffsetTransitionRule$TimeDefinition[]
}
}

declare module "java.time.temporal.TemporalAccessor" {
import { $ValueRange } from "java.time.temporal.ValueRange"
import { $TemporalField$$Type } from "java.time.temporal.TemporalField"
import { $TemporalQuery$$Type } from "java.time.temporal.TemporalQuery"

export interface $TemporalAccessor {
"get"(temporalField0: $TemporalField$$Type): integer
"getLong"(temporalField0: $TemporalField$$Type): long
"isSupported"(temporalField0: $TemporalField$$Type): boolean
"query"<R>(temporalQuery0: $TemporalQuery$$Type<R>): R
"range"(temporalField0: $TemporalField$$Type): $ValueRange
}

export namespace $TemporalAccessor {
const probejs$$marker: never
}
export abstract class $TemporalAccessor$$Static implements $TemporalAccessor {
}
}

declare module "java.time.chrono.IsoChronology" {
import { $Period } from "java.time.Period"
import { $ResolverStyle$$Type } from "java.time.format.ResolverStyle"
import { $ChronoField$$Type } from "java.time.temporal.ChronoField"
import { $TextStyle$$Type } from "java.time.format.TextStyle"
import { $TemporalField$$Type } from "java.time.temporal.TemporalField"
import { $ZonedDateTime } from "java.time.ZonedDateTime"
import { $LocalDateTime } from "java.time.LocalDateTime"
import { $Set } from "java.util.Set"
import { $Instant$$Type } from "java.time.Instant"
import { $Era, $Era$$Type } from "java.time.chrono.Era"
import { $ZoneId$$Type } from "java.time.ZoneId"
import { $TemporalAccessor$$Type } from "java.time.temporal.TemporalAccessor"
import { $Serializable } from "java.io.Serializable"
import { $List } from "java.util.List"
import { $Chronology } from "java.time.chrono.Chronology"
import { $ValueRange } from "java.time.temporal.ValueRange"
import { $Locale$$Type } from "java.util.Locale"
import { $LocalDate } from "java.time.LocalDate"
import { $Map$$Type } from "java.util.Map"
import { $AbstractChronology } from "java.time.chrono.AbstractChronology"
import { $ZoneOffset$$Type } from "java.time.ZoneOffset"

export class $IsoChronology extends $AbstractChronology implements $Serializable {
static readonly "INSTANCE": $IsoChronology

public "date"(era0: $Era$$Type, int1: integer, int2: integer, int3: integer): $LocalDate
public "dateNow"(): $LocalDate
public "dateYearDay"(era0: $Era$$Type, int1: integer, int2: integer): $LocalDate
public "dateYearDay"(int0: integer, int1: integer): $LocalDate
public "epochSecond"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, zoneOffset6: $ZoneOffset$$Type): long
public "epochSecond"(era0: $Era$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, zoneOffset7: $ZoneOffset$$Type): long
public "eras"(): $List<$Era>
public static "from"(temporalAccessor0: $TemporalAccessor$$Type): $Chronology
public static "getAvailableChronologies"(): $Set<$Chronology>
public "getCalendarType"(): string
public "getDisplayName"(textStyle0: $TextStyle$$Type, locale1: $Locale$$Type): string
public "getId"(): string
public "isLeapYear"(long0: long): boolean
public "localDateTime"(temporalAccessor0: $TemporalAccessor$$Type): $LocalDateTime
public static "of"(string0: string): $Chronology
public static "ofLocale"(locale0: $Locale$$Type): $Chronology
public "period"(int0: integer, int1: integer, int2: integer): $Period
public "prolepticYear"(era0: $Era$$Type, int1: integer): integer
public "range"(chronoField0: $ChronoField$$Type): $ValueRange
public "resolveDate"(map0: $Map$$Type<$TemporalField$$Type, long>, resolverStyle1: $ResolverStyle$$Type): $LocalDate
public "zonedDateTime"(instant0: $Instant$$Type, zoneId1: $ZoneId$$Type): $ZonedDateTime
get "calendarType"(): string
get "id"(): string
}
}

declare module "java.time.LocalTime" {
import { $OffsetTime } from "java.time.OffsetTime"
import { $TemporalField$$Type } from "java.time.temporal.TemporalField"
import { $TemporalUnit$$Type } from "java.time.temporal.TemporalUnit"
import { $LocalDateTime } from "java.time.LocalDateTime"
import { $TemporalQuery$$Type } from "java.time.temporal.TemporalQuery"
import { $Instant$$Type } from "java.time.Instant"
import { $ZoneId$$Type } from "java.time.ZoneId"
import { $TemporalAccessor$$Type } from "java.time.temporal.TemporalAccessor"
import { $Serializable } from "java.io.Serializable"
import { $ValueRange } from "java.time.temporal.ValueRange"
import { $LocalDate$$Type } from "java.time.LocalDate"
import { $DateTimeFormatter$$Type } from "java.time.format.DateTimeFormatter"
import { $Clock$$Type } from "java.time.Clock"
import { $TemporalAmount$$Type } from "java.time.temporal.TemporalAmount"
import { $Comparable } from "java.lang.Comparable"
import { $ZoneOffset$$Type } from "java.time.ZoneOffset"
import { $Temporal, $Temporal$$Type } from "java.time.temporal.Temporal"
import { $TemporalAdjuster, $TemporalAdjuster$$Type } from "java.time.temporal.TemporalAdjuster"

export class $LocalTime implements $Temporal, $TemporalAdjuster, $Comparable<$LocalTime>, $Serializable {
static readonly "MAX": $LocalTime
static readonly "MIDNIGHT": $LocalTime
static readonly "MIN": $LocalTime
static readonly "NOON": $LocalTime

public "adjustInto"(temporal0: $Temporal$$Type): $Temporal
public "atDate"(localDate0: $LocalDate$$Type): $LocalDateTime
public "atOffset"(zoneOffset0: $ZoneOffset$$Type): $OffsetTime
public "compareTo"(localTime0: $LocalTime$$Type): integer
public "format"(dateTimeFormatter0: $DateTimeFormatter$$Type): string
public static "from"(temporalAccessor0: $TemporalAccessor$$Type): $LocalTime
public "get"(temporalField0: $TemporalField$$Type): integer
public "getHour"(): integer
public "getLong"(temporalField0: $TemporalField$$Type): long
public "getMinute"(): integer
public "getNano"(): integer
public "getSecond"(): integer
public "isAfter"(localTime0: $LocalTime$$Type): boolean
public "isBefore"(localTime0: $LocalTime$$Type): boolean
public "isSupported"(temporalField0: $TemporalField$$Type): boolean
public "isSupported"(temporalUnit0: $TemporalUnit$$Type): boolean
public "minusHours"(long0: long): $LocalTime
public "minusMinutes"(long0: long): $LocalTime
public "minusNanos"(long0: long): $LocalTime
public "minusSeconds"(long0: long): $LocalTime
public static "now"(): $LocalTime
public static "now"(clock0: $Clock$$Type): $LocalTime
public static "now"(zoneId0: $ZoneId$$Type): $LocalTime
public static "of"(int0: integer, int1: integer, int2: integer, int3: integer): $LocalTime
public static "of"(int0: integer, int1: integer): $LocalTime
public static "of"(int0: integer, int1: integer, int2: integer): $LocalTime
public static "ofInstant"(instant0: $Instant$$Type, zoneId1: $ZoneId$$Type): $LocalTime
public static "ofNanoOfDay"(long0: long): $LocalTime
public static "ofSecondOfDay"(long0: long): $LocalTime
public static "parse"(charSequence0: charseq, dateTimeFormatter1: $DateTimeFormatter$$Type): $LocalTime
public static "parse"(charSequence0: charseq): $LocalTime
public "plus"(temporalAmount0: $TemporalAmount$$Type): $LocalTime
public "plus"(long0: long, temporalUnit1: $TemporalUnit$$Type): $LocalTime
public "plusHours"(long0: long): $LocalTime
public "plusMinutes"(long0: long): $LocalTime
public "plusNanos"(long0: long): $LocalTime
public "plusSeconds"(long0: long): $LocalTime
public "query"<R>(temporalQuery0: $TemporalQuery$$Type<R>): R
public "range"(temporalField0: $TemporalField$$Type): $ValueRange
public "toEpochSecond"(localDate0: $LocalDate$$Type, zoneOffset1: $ZoneOffset$$Type): long
public "toNanoOfDay"(): long
public "toSecondOfDay"(): integer
public "truncatedTo"(temporalUnit0: $TemporalUnit$$Type): $LocalTime
public "until"(temporal0: $Temporal$$Type, temporalUnit1: $TemporalUnit$$Type): long
public "with"(temporalField0: $TemporalField$$Type, long1: long): $LocalTime
public "with"(temporalAdjuster0: $TemporalAdjuster$$Type): $LocalTime
public "withHour"(int0: integer): $LocalTime
public "withMinute"(int0: integer): $LocalTime
public "withNano"(int0: integer): $LocalTime
public "withSecond"(int0: integer): $LocalTime
get "hour"(): integer
get "minute"(): integer
get "nano"(): integer
get "second"(): integer
}
}

declare module "java.time.temporal.TemporalAmount" {
import { $List } from "java.util.List"
import { $TemporalUnit, $TemporalUnit$$Type } from "java.time.temporal.TemporalUnit"
import { $Temporal, $Temporal$$Type } from "java.time.temporal.Temporal"

export interface $TemporalAmount {
"addTo"(temporal0: $Temporal$$Type): $Temporal
"get"(temporalUnit0: $TemporalUnit$$Type): long
"getUnits"(): $List<$TemporalUnit>
"subtractFrom"(temporal0: $Temporal$$Type): $Temporal
get "units"(): $List<$TemporalUnit>
}

export namespace $TemporalAmount {
const probejs$$marker: never
}
export abstract class $TemporalAmount$$Static implements $TemporalAmount {
}
}

declare module "java.time.temporal.Temporal" {
import { $ValueRange } from "java.time.temporal.ValueRange"
import { $TemporalField$$Type } from "java.time.temporal.TemporalField"
import { $TemporalUnit$$Type } from "java.time.temporal.TemporalUnit"
import { $TemporalQuery$$Type } from "java.time.temporal.TemporalQuery"
import { $TemporalAmount$$Type } from "java.time.temporal.TemporalAmount"
import { $TemporalAdjuster$$Type } from "java.time.temporal.TemporalAdjuster"
import { $TemporalAccessor } from "java.time.temporal.TemporalAccessor"

export interface $Temporal extends $TemporalAccessor {
"get"(temporalField0: $TemporalField$$Type): integer
"getLong"(temporalField0: $TemporalField$$Type): long
"isSupported"(temporalUnit0: $TemporalUnit$$Type): boolean
"isSupported"(temporalField0: $TemporalField$$Type): boolean
"minus"(temporalAmount0: $TemporalAmount$$Type): $Temporal
"minus"(long0: long, temporalUnit1: $TemporalUnit$$Type): $Temporal
"plus"(long0: long, temporalUnit1: $TemporalUnit$$Type): $Temporal
"plus"(temporalAmount0: $TemporalAmount$$Type): $Temporal
"query"<R>(temporalQuery0: $TemporalQuery$$Type<R>): R
"range"(temporalField0: $TemporalField$$Type): $ValueRange
"until"(temporal0: $Temporal$$Type, temporalUnit1: $TemporalUnit$$Type): long
"with"(temporalField0: $TemporalField$$Type, long1: long): $Temporal
"with"(temporalAdjuster0: $TemporalAdjuster$$Type): $Temporal
}

export namespace $Temporal {
const probejs$$marker: never
}
export abstract class $Temporal$$Static implements $Temporal {
}
}

