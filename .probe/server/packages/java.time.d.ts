declare module "java.time.format.FormatStyle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FormatStyle$$Type = ($FormatStyle | ("full" | "long" | "medium" | "short"));
}

declare module "java.time.zone.ZoneOffsetTransitionRule" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZoneOffsetTransitionRule$$Type = ($ZoneOffsetTransitionRule);
}

declare module "java.time.temporal.TemporalUnit" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TemporalUnit$$Type = ($TemporalUnit);
}

declare module "java.time.Period" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Period$$Type = ($Period);
}

declare module "java.time.chrono.ChronoLocalDateTime" {
import { $ChronoLocalDate, $ChronoLocalDate$$Type } from "java.time.chrono.ChronoLocalDate"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChronoLocalDateTime$$Type<D extends $ChronoLocalDate = $ChronoLocalDate> = ($ChronoLocalDateTime<D>);
}

declare module "java.time.ZonedDateTime" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZonedDateTime$$Type = ($ZonedDateTime);
}

declare module "java.time.Instant" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Instant$$Type = ($Instant);
}

declare module "java.time.temporal.TemporalField" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TemporalField$$Type = ($TemporalField);
}

declare module "java.time.InstantSource" {
import { $Instant$$Type } from "java.time.Instant"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InstantSource$$Type = ($InstantSource | (() => $Instant$$Type));
}

declare module "java.time.format.DateTimeFormatter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DateTimeFormatter$$Type = ($DateTimeFormatter);
}

declare module "java.time.chrono.Chronology" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Chronology$$Type = ($Chronology);
}

declare module "java.time.OffsetTime" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $OffsetTime$$Type = ($OffsetTime);
}

declare module "java.time.chrono.ChronoLocalDate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChronoLocalDate$$Type = ($ChronoLocalDate);
}

declare module "java.time.zone.ZoneRules" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZoneRules$$Type = ($ZoneRules);
}

declare module "java.time.chrono.IsoEra" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IsoEra$$Type = ($IsoEra | ("bce" | "ce"));
}

declare module "java.time.chrono.ChronoPeriod" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChronoPeriod$$Type = ($ChronoPeriod);
}

declare module "java.time.chrono.ChronoZonedDateTime" {
import { $ChronoLocalDate, $ChronoLocalDate$$Type } from "java.time.chrono.ChronoLocalDate"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChronoZonedDateTime$$Type<D extends $ChronoLocalDate = $ChronoLocalDate> = ($ChronoZonedDateTime<D>);
}

declare module "java.time.LocalDate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LocalDate$$Type = ($LocalDate);
}

declare module "java.time.temporal.ChronoField" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChronoField$$Type = ($ChronoField | ("nano_of_second" | "nano_of_day" | "micro_of_second" | "micro_of_day" | "milli_of_second" | "milli_of_day" | "second_of_minute" | "second_of_day" | "minute_of_hour" | "minute_of_day" | "hour_of_ampm" | "clock_hour_of_ampm" | "hour_of_day" | "clock_hour_of_day" | "ampm_of_day" | "day_of_week" | "aligned_day_of_week_in_month" | "aligned_day_of_week_in_year" | "day_of_month" | "day_of_year" | "epoch_day" | "aligned_week_of_month" | "aligned_week_of_year" | "month_of_year" | "proleptic_month" | "year_of_era" | "year" | "era" | "instant_seconds" | "offset_seconds"));
}

declare module "java.time.chrono.AbstractChronology" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractChronology$$Type = ($AbstractChronology);
}

declare module "java.time.temporal.TemporalQuery" {
import { $TemporalAccessor } from "java.time.temporal.TemporalAccessor"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TemporalQuery$$Type<R = any> = ($TemporalQuery<R> | ((arg0: $TemporalAccessor) => R));
}

declare module "java.time.zone.ZoneOffsetTransition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZoneOffsetTransition$$Type = ($ZoneOffsetTransition);
}

declare module "java.time.temporal.TemporalAdjuster" {
import { $Temporal, $Temporal$$Type } from "java.time.temporal.Temporal"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TemporalAdjuster$$Type = ($TemporalAdjuster | ((arg0: $Temporal) => $Temporal$$Type));
}

declare module "java.time.Clock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Clock$$Type = ($Clock);
}

declare module "java.time.Month" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Month$$Type = ($Month | ("january" | "february" | "march" | "april" | "may" | "june" | "july" | "august" | "september" | "october" | "november" | "december"));
}

declare module "java.time.temporal.ValueRange" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ValueRange$$Type = ($ValueRange);
}

declare module "java.time.temporal.ChronoUnit" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChronoUnit$$Type = ($ChronoUnit | ("nanos" | "micros" | "millis" | "seconds" | "minutes" | "hours" | "half_days" | "days" | "weeks" | "months" | "years" | "decades" | "centuries" | "millennia" | "eras" | "forever"));
}

declare module "java.time.chrono.Era" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Era$$Type = ($Era | (() => integer));
}

declare module "java.time.ZoneId" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZoneId$$Type = ($ZoneId);
}

declare module "java.time.format.ResolverStyle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ResolverStyle$$Type = ($ResolverStyle | ("strict" | "smart" | "lenient"));
}

declare module "java.time.format.TextStyle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TextStyle$$Type = ($TextStyle | ("full" | "full_standalone" | "short" | "short_standalone" | "narrow" | "narrow_standalone"));
}

declare module "java.time.Duration" {
import { $TemporalAmount$$Type } from "java.time.temporal.TemporalAmount"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Duration$$Type = ($Duration | $TemporalAmount$$Type);
}

declare module "java.time.ZoneOffset" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZoneOffset$$Type = ($ZoneOffset);
}

declare module "java.time.DayOfWeek" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DayOfWeek$$Type = ($DayOfWeek | ("monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday"));
}

declare module "java.time.format.DecimalStyle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DecimalStyle$$Type = ($DecimalStyle);
}

declare module "java.time.OffsetDateTime" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $OffsetDateTime$$Type = ($OffsetDateTime);
}

declare module "java.time.LocalDateTime" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LocalDateTime$$Type = ($LocalDateTime);
}

declare module "java.time.zone.ZoneOffsetTransitionRule$TimeDefinition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZoneOffsetTransitionRule$TimeDefinition$$Type = ($ZoneOffsetTransitionRule$TimeDefinition | ("utc" | "wall" | "standard"));
}

declare module "java.time.temporal.TemporalAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TemporalAccessor$$Type = ($TemporalAccessor);
}

declare module "java.time.chrono.IsoChronology" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IsoChronology$$Type = ($IsoChronology);
}

declare module "java.time.LocalTime" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LocalTime$$Type = ($LocalTime);
}

declare module "java.time.temporal.TemporalAmount" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TemporalAmount$$Type = ($TemporalAmount);
}

declare module "java.time.temporal.Temporal" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Temporal$$Type = ($Temporal);
}

