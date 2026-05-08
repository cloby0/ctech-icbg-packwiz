declare module "java.util.Currency" {
import { $Locale$$Type } from "java.util.Locale"
import { $Set } from "java.util.Set"
import { $Serializable } from "java.io.Serializable"

export class $Currency implements $Serializable {
public static "getAvailableCurrencies"(): $Set<$Currency>
public "getCurrencyCode"(): string
public "getDefaultFractionDigits"(): integer
public "getDisplayName"(locale0: $Locale$$Type): string
public "getDisplayName"(): string
public static "getInstance"(string0: string): $Currency
public static "getInstance"(locale0: $Locale$$Type): $Currency
public "getNumericCode"(): integer
public "getNumericCodeAsString"(): string
public "getSymbol"(locale0: $Locale$$Type): string
public "getSymbol"(): string
get "currencyCode"(): string
get "defaultFractionDigits"(): integer
get "displayName"(): string
get "numericCode"(): integer
get "numericCodeAsString"(): string
get "symbol"(): string
}
}

declare module "java.util.LinkedHashMap" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Collection } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $HashMap } from "java.util.HashMap"
import { $Function$$Type } from "java.util.function.Function"

export class $LinkedHashMap<K = any, V = any> extends $HashMap<K, V> implements $Map<K, V> {
constructor(int0: integer, float1: float, boolean2: boolean)
constructor(int0: integer)
constructor()
constructor(int0: integer, float1: float)
constructor(map0: $Map$$Type<K, V>)

public "compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public "computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
public "computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public "containsKey"(object0: any): boolean
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "entrySet"(): $Set<$Map$Entry<K, V>>
public "equals"(object0: any): boolean
public "get"(object0: any): V
public "getOrDefault"(object0: any, v1: V): V
public "hashCode"(): integer
public "isEmpty"(): boolean
public "keySet"(): $Set<K>
public "merge"(k0: K, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
public static "of"<K, V>(): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
public static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
public "put"(k0: K, v1: V): V
public "putAll"(map0: $Map$$Type<K, V>): void
public "putIfAbsent"(k0: K, v1: V): V
public "remove"(object0: any): V
public "remove"(object0: any, object1: any): boolean
public "replace"(k0: K, v1: V): V
public "replace"(k0: K, v1: V, v2: V): boolean
public "size"(): integer
public "values"(): $Collection<V>
get "empty"(): boolean
}
}

declare module "java.util.concurrent.ThreadFactory" {
import { $Thread } from "java.lang.Thread"
import { $Runnable$$Type } from "java.lang.Runnable"

export interface $ThreadFactory {
"newThread"(runnable0: $Runnable$$Type): $Thread
}

export namespace $ThreadFactory {
const probejs$$marker: never
}
export abstract class $ThreadFactory$$Static implements $ThreadFactory {
}
}

declare module "java.util.stream.DoubleStream$Builder" {
import { $DoubleConsumer, $DoubleConsumer$$Type } from "java.util.function.DoubleConsumer"
import { $DoubleStream } from "java.util.stream.DoubleStream"

export interface $DoubleStream$Builder extends $DoubleConsumer {
"accept"(double0: double): void
"add"(double0: double): $DoubleStream$Builder
"andThen"(doubleConsumer0: $DoubleConsumer$$Type): $DoubleConsumer
"build"(): $DoubleStream
}

export namespace $DoubleStream$Builder {
const probejs$$marker: never
}
export abstract class $DoubleStream$Builder$$Static implements $DoubleStream$Builder {
}
}

declare module "java.util.concurrent.Executor" {
import { $Runnable$$Type } from "java.lang.Runnable"

export interface $Executor {
"execute"(runnable0: $Runnable$$Type): void
}

export namespace $Executor {
const probejs$$marker: never
}
export abstract class $Executor$$Static implements $Executor {
}
}

declare module "java.util.function.Predicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Predicate<T = any> {
"and"(predicate0: $Predicate$$Type<T>): $Predicate<T>
"negate"(): $Predicate<T>
"or"(predicate0: $Predicate$$Type<T>): $Predicate<T>
"test"(t0: T): boolean
}

export namespace $Predicate {
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $Predicate$$Static<T = any> implements $Predicate<T> {
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "java.util.EventListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EventListener {
}

export namespace $EventListener {
const probejs$$marker: never
}
export abstract class $EventListener$$Static implements $EventListener {
}
}

declare module "java.util.function.DoubleBinaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleBinaryOperator {
"applyAsDouble"(double0: double, double1: double): double
}

export namespace $DoubleBinaryOperator {
const probejs$$marker: never
}
export abstract class $DoubleBinaryOperator$$Static implements $DoubleBinaryOperator {
}
}

declare module "java.util.Spliterator$OfLong" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Spliterator$OfPrimitive } from "java.util.Spliterator$OfPrimitive"
import { $Comparator } from "java.util.Comparator"
import { $LongConsumer, $LongConsumer$$Type } from "java.util.function.LongConsumer"

export interface $Spliterator$OfLong extends $Spliterator$OfPrimitive<long, $LongConsumer, $Spliterator$OfLong> {
"characteristics"(): integer
"estimateSize"(): long
"forEachRemaining"(consumer0: $Consumer$$Type<long>): void
"forEachRemaining"(longConsumer0: $LongConsumer$$Type): void
"getComparator"(): $Comparator<long>
"getExactSizeIfKnown"(): long
"hasCharacteristics"(int0: integer): boolean
"tryAdvance"(consumer0: $Consumer$$Type<long>): boolean
"tryAdvance"(longConsumer0: $LongConsumer$$Type): boolean
get "comparator"(): $Comparator<long>
get "exactSizeIfKnown"(): long
}

export namespace $Spliterator$OfLong {
const probejs$$marker: never
}
export abstract class $Spliterator$OfLong$$Static implements $Spliterator$OfLong {
}
}

declare module "java.util.concurrent.atomic.AtomicInteger" {
import { $IntUnaryOperator$$Type } from "java.util.function.IntUnaryOperator"
import { $IntBinaryOperator$$Type } from "java.util.function.IntBinaryOperator"
import { $Number } from "java.lang.Number"
import { $Serializable } from "java.io.Serializable"

export class $AtomicInteger extends $Number implements $Serializable {
constructor(int0: integer)
constructor()

public "accumulateAndGet"(int0: integer, intBinaryOperator1: $IntBinaryOperator$$Type): integer
public "addAndGet"(int0: integer): integer
public "compareAndExchange"(int0: integer, int1: integer): integer
public "compareAndExchangeAcquire"(int0: integer, int1: integer): integer
public "compareAndExchangeRelease"(int0: integer, int1: integer): integer
public "compareAndSet"(int0: integer, int1: integer): boolean
public "decrementAndGet"(): integer
public "get"(): integer
public "getAcquire"(): integer
public "getAndAccumulate"(int0: integer, intBinaryOperator1: $IntBinaryOperator$$Type): integer
public "getAndAdd"(int0: integer): integer
public "getAndDecrement"(): integer
public "getAndIncrement"(): integer
public "getAndSet"(int0: integer): integer
public "getAndUpdate"(intUnaryOperator0: $IntUnaryOperator$$Type): integer
public "getOpaque"(): integer
public "getPlain"(): integer
public "incrementAndGet"(): integer
public "lazySet"(int0: integer): void
public "set"(int0: integer): void
public "setOpaque"(int0: integer): void
public "setPlain"(int0: integer): void
public "setRelease"(int0: integer): void
public "updateAndGet"(intUnaryOperator0: $IntUnaryOperator$$Type): integer
/** @deprecated */
public "weakCompareAndSet"(int0: integer, int1: integer): boolean
public "weakCompareAndSetAcquire"(int0: integer, int1: integer): boolean
public "weakCompareAndSetPlain"(int0: integer, int1: integer): boolean
public "weakCompareAndSetRelease"(int0: integer, int1: integer): boolean
public "weakCompareAndSetVolatile"(int0: integer, int1: integer): boolean
get "acquire"(): integer
get "andDecrement"(): integer
get "andIncrement"(): integer
get "opaque"(): integer
get "plain"(): integer
set "opaque"(value: integer)
set "plain"(value: integer)
set "release"(value: integer)
}
}

declare module "java.util.stream.Stream$Builder" {
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"

export interface $Stream$Builder<T = any> extends $Consumer<T> {
"accept"(t0: T): void
"add"(t0: T): $Stream$Builder<T>
"andThen"(consumer0: $Consumer$$Type<T>): $Consumer<T>
"build"(): $Stream<T>
}

export namespace $Stream$Builder {
const probejs$$marker: never
}
export abstract class $Stream$Builder$$Static<T = any> implements $Stream$Builder<T> {
}
}

declare module "java.util.AbstractSequentialList" {
import { $Iterator } from "java.util.Iterator"
import { $ListIterator } from "java.util.ListIterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $AbstractList } from "java.util.AbstractList"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $Comparator$$Type } from "java.util.Comparator"
import { $Spliterator } from "java.util.Spliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $AbstractSequentialList<E = any> extends $AbstractList<E> {
public "addAll"(collection0: $Collection$$Type<E>): boolean
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "forEach"(consumer0: $Consumer$$Type<E>): void
public "get"(int0: integer): E
public "isEmpty"(): boolean
public "iterator"(): $Iterator<E>
public "listIterator"(int0: integer): $ListIterator<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E): $List<E>
public static "of"<E>(e0: E, e1: E): $List<E>
public static "of"<E>(e0: E): $List<E>
public static "of"<E>(): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(...e0s: E[]): $List<E>
public "parallelStream"(): $Stream<E>
public "remove"(int0: integer): E
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<E>): boolean
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<E>): void
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "set"(int0: integer, e1: E): E
public "size"(): integer
public "sort"(comparator0: $Comparator$$Type<E>): void
public "spliterator"(): $Spliterator<E>
public "stream"(): $Stream<E>
public "toArray"(): any[]
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "empty"(): boolean
}
}

declare module "java.util.concurrent.Delayed" {
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $Comparable } from "java.lang.Comparable"

export interface $Delayed extends $Comparable<$Delayed> {
"compareTo"(delayed0: $Delayed$$Type): integer
"getDelay"(timeUnit0: $TimeUnit$$Type): long
}

export namespace $Delayed {
const probejs$$marker: never
}
export abstract class $Delayed$$Static implements $Delayed {
}
}

declare module "java.util.Optional" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Throwable, $Throwable$$Type } from "java.lang.Throwable"
import { $Stream } from "java.util.stream.Stream"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Function$$Type } from "java.util.function.Function"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $Optional<T = any> {
public static "empty"<T>(): $Optional<T>
public "filter"(predicate0: $Predicate$$Type<T>): $Optional<T>
public "flatMap"<U>(function0: $Function$$Type<T, $Optional<U>>): $Optional<U>
public "get"(): T
public "ifPresent"(consumer0: $Consumer$$Type<T>): void
public "ifPresentOrElse"(consumer0: $Consumer$$Type<T>, runnable1: $Runnable$$Type): void
public "isEmpty"(): boolean
public "isPresent"(): boolean
public "map"<U>(function0: $Function$$Type<T, U>): $Optional<U>
public static "of"<T>(t0: T): $Optional<T>
public static "ofNullable"<T>(t0: T): $Optional<T>
public "or"(supplier0: $Supplier$$Type<$Optional<T>>): $Optional<T>
public "orElse"(t0: T): T
public "orElseGet"(supplier0: $Supplier$$Type<T>): T
public "orElseThrow"<X extends $Throwable>(supplier0: $Supplier$$Type<X>): T
public "orElseThrow"(): T
public "stream"(): $Stream<T>
get "present"(): boolean
}
}

declare module "java.util.Hashtable" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Cloneable } from "java.lang.Cloneable"
import { $Enumeration } from "java.util.Enumeration"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Collection } from "java.util.Collection"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Set } from "java.util.Set"
import { $Function$$Type } from "java.util.function.Function"
import { $Dictionary } from "java.util.Dictionary"
import { $Serializable } from "java.io.Serializable"

export class $Hashtable<K = any, V = any> extends $Dictionary<K, V> implements $Map<K, V>, $Cloneable, $Serializable {
constructor(map0: $Map$$Type<K, V>)
constructor()
constructor(int0: integer)
constructor(int0: integer, float1: float)

public "clear"(): void
public "clone"(): any
public "compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public "computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
public "computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public "contains"(object0: any): boolean
public "containsKey"(object0: any): boolean
public "containsValue"(object0: any): boolean
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public "elements"(): $Enumeration<V>
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "entrySet"(): $Set<$Map$Entry<K, V>>
public "forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
public "get"(object0: any): V
public "getOrDefault"(object0: any, v1: V): V
public "keySet"(): $Set<K>
public "keys"(): $Enumeration<K>
public "merge"(k0: K, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
public static "of"<K, V>(): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
public static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
public "put"(k0: K, v1: V): V
public "putAll"(map0: $Map$$Type<K, V>): void
public "putIfAbsent"(k0: K, v1: V): V
public "remove"(object0: any): V
public "remove"(object0: any, object1: any): boolean
public "replace"(k0: K, v1: V): V
public "replace"(k0: K, v1: V, v2: V): boolean
public "replaceAll"(biFunction0: $BiFunction$$Type<K, V, V>): void
public "values"(): $Collection<V>
[index: string | number]: V
}
}

declare module "java.util.concurrent.BlockingQueue" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $Stream } from "java.util.stream.Stream"
import { $Iterator } from "java.util.Iterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $Queue } from "java.util.Queue"
import { $Spliterator } from "java.util.Spliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $BlockingQueue<E = any> extends $Queue<E> {
"add"(e0: E): boolean
"addAll"(collection0: $Collection$$Type<E>): boolean
"clear"(): void
"contains"(object0: any): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"drainTo"(collection0: $Collection$$Type<E>): integer
"drainTo"(collection0: $Collection$$Type<E>, int1: integer): integer
"element"(): E
"equals"(object0: any): boolean
"forEach"(consumer0: $Consumer$$Type<E>): void
"hashCode"(): integer
"isEmpty"(): boolean
"iterator"(): $Iterator<E>
"offer"(e0: E, long1: long, timeUnit2: $TimeUnit$$Type): boolean
"offer"(e0: E): boolean
"parallelStream"(): $Stream<E>
"peek"(): E
"poll"(long0: long, timeUnit1: $TimeUnit$$Type): E
"poll"(): E
"put"(e0: E): void
"remainingCapacity"(): integer
"remove"(object0: any): boolean
"remove"(): E
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(predicate0: $Predicate$$Type<E>): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"spliterator"(): $Spliterator<E>
"stream"(): $Stream<E>
"take"(): E
"toArray"<T>(t0s: T[]): T[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
"toArray"(): any[]
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}

export namespace $BlockingQueue {
const probejs$$marker: never
}
export abstract class $BlockingQueue$$Static<E = any> implements $BlockingQueue<E> {
}
}

declare module "java.util.function.ToDoubleFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ToDoubleFunction<T = any> {
"applyAsDouble"(t0: T): double
}

export namespace $ToDoubleFunction {
const probejs$$marker: never
}
export abstract class $ToDoubleFunction$$Static<T = any> implements $ToDoubleFunction<T> {
}
}

declare module "java.util.Calendar" {
import { $Cloneable } from "java.lang.Cloneable"
import { $Locale, $Locale$$Type } from "java.util.Locale"
import { $TimeZone, $TimeZone$$Type } from "java.util.TimeZone"
import { $Date, $Date$$Type } from "java.util.Date"
import { $Map } from "java.util.Map"
import { $Set } from "java.util.Set"
import { $Comparable } from "java.lang.Comparable"
import { $Instant } from "java.time.Instant"
import { $Serializable } from "java.io.Serializable"

export class $Calendar implements $Serializable, $Cloneable, $Comparable<$Calendar> {
static readonly "ALL_STYLES": integer
static readonly "AM": integer
static readonly "AM_PM": integer
static readonly "APRIL": integer
static readonly "AUGUST": integer
static readonly "DATE": integer
static readonly "DAY_OF_MONTH": integer
static readonly "DAY_OF_WEEK": integer
static readonly "DAY_OF_WEEK_IN_MONTH": integer
static readonly "DAY_OF_YEAR": integer
static readonly "DECEMBER": integer
static readonly "DST_OFFSET": integer
static readonly "ERA": integer
static readonly "FEBRUARY": integer
static readonly "FIELD_COUNT": integer
static readonly "FRIDAY": integer
static readonly "HOUR": integer
static readonly "HOUR_OF_DAY": integer
static readonly "JANUARY": integer
static readonly "JULY": integer
static readonly "JUNE": integer
static readonly "LONG": integer
static readonly "LONG_FORMAT": integer
static readonly "LONG_STANDALONE": integer
static readonly "MARCH": integer
static readonly "MAY": integer
static readonly "MILLISECOND": integer
static readonly "MINUTE": integer
static readonly "MONDAY": integer
static readonly "MONTH": integer
static readonly "NARROW_FORMAT": integer
static readonly "NARROW_STANDALONE": integer
static readonly "NOVEMBER": integer
static readonly "OCTOBER": integer
static readonly "PM": integer
static readonly "SATURDAY": integer
static readonly "SECOND": integer
static readonly "SEPTEMBER": integer
static readonly "SHORT": integer
static readonly "SHORT_FORMAT": integer
static readonly "SHORT_STANDALONE": integer
static readonly "SUNDAY": integer
static readonly "THURSDAY": integer
static readonly "TUESDAY": integer
static readonly "UNDECIMBER": integer
static readonly "WEDNESDAY": integer
static readonly "WEEK_OF_MONTH": integer
static readonly "WEEK_OF_YEAR": integer
static readonly "YEAR": integer
static readonly "ZONE_OFFSET": integer

public "add"(int0: integer, int1: integer): void
public "after"(object0: any): boolean
public "before"(object0: any): boolean
public "clear"(int0: integer): void
public "clear"(): void
public "clone"(): any
public "compareTo"(calendar0: $Calendar$$Type): integer
public "get"(int0: integer): integer
public "getActualMaximum"(int0: integer): integer
public "getActualMinimum"(int0: integer): integer
public static "getAvailableCalendarTypes"(): $Set<string>
public static "getAvailableLocales"(): $Locale[]
public "getCalendarType"(): string
public "getDisplayName"(int0: integer, int1: integer, locale2: $Locale$$Type): string
public "getDisplayNames"(int0: integer, int1: integer, locale2: $Locale$$Type): $Map<string, integer>
public "getFirstDayOfWeek"(): integer
public "getGreatestMinimum"(int0: integer): integer
public static "getInstance"(locale0: $Locale$$Type): $Calendar
public static "getInstance"(timeZone0: $TimeZone$$Type): $Calendar
public static "getInstance"(timeZone0: $TimeZone$$Type, locale1: $Locale$$Type): $Calendar
public static "getInstance"(): $Calendar
public "getLeastMaximum"(int0: integer): integer
public "getMaximum"(int0: integer): integer
public "getMinimalDaysInFirstWeek"(): integer
public "getMinimum"(int0: integer): integer
public "getTime"(): $Date
public "getTimeInMillis"(): long
public "getTimeZone"(): $TimeZone
public "getWeekYear"(): integer
public "getWeeksInWeekYear"(): integer
public "isLenient"(): boolean
public "isSet"(int0: integer): boolean
public "isWeekDateSupported"(): boolean
public "roll"(int0: integer, boolean1: boolean): void
public "roll"(int0: integer, int1: integer): void
public "set"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): void
public "set"(int0: integer, int1: integer): void
public "set"(int0: integer, int1: integer, int2: integer): void
public "set"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer): void
public "setFirstDayOfWeek"(int0: integer): void
public "setLenient"(boolean0: boolean): void
public "setMinimalDaysInFirstWeek"(int0: integer): void
public "setTime"(date0: $Date$$Type): void
public "setTimeInMillis"(long0: long): void
public "setTimeZone"(timeZone0: $TimeZone$$Type): void
public "setWeekDate"(int0: integer, int1: integer, int2: integer): void
public "toInstant"(): $Instant
get "calendarType"(): string
get "firstDayOfWeek"(): integer
get "minimalDaysInFirstWeek"(): integer
get "time"(): $Date
get "timeInMillis"(): long
get "timeZone"(): $TimeZone
get "weekYear"(): integer
get "weeksInWeekYear"(): integer
get "lenient"(): boolean
get "weekDateSupported"(): boolean
set "firstDayOfWeek"(value: integer)
set "lenient"(value: boolean)
set "minimalDaysInFirstWeek"(value: integer)
set "time"(value: $Date$$Type)
set "timeInMillis"(value: long)
set "timeZone"(value: $TimeZone$$Type)
}
}

declare module "java.util.concurrent.ScheduledExecutorService" {
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $List } from "java.util.List"
import { $Future } from "java.util.concurrent.Future"
import { $ScheduledFuture } from "java.util.concurrent.ScheduledFuture"
import { $Collection$$Type } from "java.util.Collection"
import { $Callable$$Type } from "java.util.concurrent.Callable"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"
import { $ExecutorService } from "java.util.concurrent.ExecutorService"

export interface $ScheduledExecutorService extends $ExecutorService {
"awaitTermination"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"execute"(runnable0: $Runnable$$Type): void
"invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): $List<$Future<T>>
"invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): $List<$Future<T>>
"invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): T
"invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): T
"isShutdown"(): boolean
"isTerminated"(): boolean
"schedule"(runnable0: $Runnable$$Type, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<any>
"schedule"<V>(callable0: $Callable$$Type<V>, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<V>
"scheduleAtFixedRate"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
"scheduleWithFixedDelay"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
"shutdown"(): void
"shutdownNow"(): $List<$Runnable>
"submit"<T>(callable0: $Callable$$Type<T>): $Future<T>
"submit"(runnable0: $Runnable$$Type): $Future<any>
"submit"<T>(runnable0: $Runnable$$Type, t1: T): $Future<T>
get "terminated"(): boolean
}

export namespace $ScheduledExecutorService {
const probejs$$marker: never
}
export abstract class $ScheduledExecutorService$$Static implements $ScheduledExecutorService {
}
}

declare module "java.util.function.LongToDoubleFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongToDoubleFunction {
"applyAsDouble"(long0: long): double
}

export namespace $LongToDoubleFunction {
const probejs$$marker: never
}
export abstract class $LongToDoubleFunction$$Static implements $LongToDoubleFunction {
}
}

declare module "java.util.Locale$Category" {
import { $Enum } from "java.lang.Enum"

export class $Locale$Category extends $Enum<$Locale$Category> {
static readonly "DISPLAY": $Locale$Category
static readonly "FORMAT": $Locale$Category

public static "valueOf"(string0: string): $Locale$Category
public static "values"(): $Locale$Category[]
}
}

declare module "java.util.function.Consumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Consumer<T = any> {
"accept"(t0: T): void
"andThen"(consumer0: $Consumer$$Type<T>): $Consumer<T>
}

export namespace $Consumer {
const probejs$$marker: never
}
export abstract class $Consumer$$Static<T = any> implements $Consumer<T> {
}
}

declare module "java.util.concurrent.ConcurrentHashMap$CollectionView" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"
import { $Iterator } from "java.util.Iterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $ConcurrentHashMap } from "java.util.concurrent.ConcurrentHashMap"
import { $Spliterator } from "java.util.Spliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"
import { $Serializable } from "java.io.Serializable"

export class $ConcurrentHashMap$CollectionView<K = any, V = any, E = any> implements $Collection<E>, $Serializable {
public "add"(e0: E): boolean
public "addAll"(collection0: $Collection$$Type<E>): boolean
public "clear"(): void
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public "equals"(object0: any): boolean
public "forEach"(consumer0: $Consumer$$Type<E>): void
public "getMap"(): $ConcurrentHashMap<K, V>
public "hashCode"(): integer
public "isEmpty"(): boolean
public "iterator"(): $Iterator<E>
public "parallelStream"(): $Stream<E>
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<E>): boolean
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "size"(): integer
public "spliterator"(): $Spliterator<E>
public "stream"(): $Stream<E>
public "toArray"(): any[]
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
[Symbol.iterator](): IterableIterator<E>;
get "map"(): $ConcurrentHashMap<K, V>
get "empty"(): boolean
}
}

declare module "java.util.EnumMap" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Cloneable } from "java.lang.Cloneable"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Collection } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $Function$$Type } from "java.util.function.Function"
import { $Serializable } from "java.io.Serializable"
import { $AbstractMap } from "java.util.AbstractMap"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Class$$Type } from "java.lang.Class"

export class $EnumMap<K extends $Enum<K> = $Enum<K>, V = any> extends $AbstractMap<K, V> implements $Serializable, $Cloneable {
constructor(map0: $Map$$Type<K, V>)
constructor(enumMap0: $EnumMap$$Type<K, V>)
constructor(class0: $Class$$Type<K>)

public "clone"(): $EnumMap<K, V>
public "compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public "computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
public "computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "entrySet"(): $Set<$Map$Entry<K, V>>
public "forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
public "get"(object0: any): V
public "getOrDefault"(object0: any, v1: V): V
public "keySet"(): $Set<K>
public "merge"(k0: K, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
public static "of"<K, V>(): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
public static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
public "put"(k0: K, v1: V): V
public "putIfAbsent"(k0: K, v1: V): V
public "remove"(object0: any): V
public "remove"(object0: any, object1: any): boolean
public "replace"(k0: K, v1: V): V
public "replace"(k0: K, v1: V, v2: V): boolean
public "replaceAll"(biFunction0: $BiFunction$$Type<K, V, V>): void
public "values"(): $Collection<V>
}
}

declare module "java.util.concurrent.ScheduledFuture" {
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $Future } from "java.util.concurrent.Future"
import { $Delayed, $Delayed$$Type } from "java.util.concurrent.Delayed"

export interface $ScheduledFuture<V = any> extends $Delayed, $Future<V> {
"cancel"(boolean0: boolean): boolean
"compareTo"(delayed0: $Delayed$$Type): integer
"get"(): V
"get"(long0: long, timeUnit1: $TimeUnit$$Type): V
"getDelay"(timeUnit0: $TimeUnit$$Type): long
"isCancelled"(): boolean
"isDone"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
}

export namespace $ScheduledFuture {
const probejs$$marker: never
}
export abstract class $ScheduledFuture$$Static<V = any> implements $ScheduledFuture<V> {
}
}

declare module "java.util.AbstractSet" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $AbstractCollection } from "java.util.AbstractCollection"
import { $Stream } from "java.util.stream.Stream"
import { $Iterator } from "java.util.Iterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $Spliterator } from "java.util.Spliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $AbstractSet<E = any> extends $AbstractCollection<E> implements $Set<E> {
public "add"(e0: E): boolean
public "addAll"(collection0: $Collection$$Type<E>): boolean
public "clear"(): void
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
public "forEach"(consumer0: $Consumer$$Type<E>): void
public "isEmpty"(): boolean
public "iterator"(): $Iterator<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
public static "of"<E>(e0: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
public static "of"<E>(...e0s: E[]): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E): $Set<E>
public static "of"<E>(): $Set<E>
public static "of"<E>(e0: E, e1: E): $Set<E>
public "parallelStream"(): $Stream<E>
public "remove"(object0: any): boolean
public "removeIf"(predicate0: $Predicate$$Type<E>): boolean
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "size"(): integer
public "spliterator"(): $Spliterator<E>
public "stream"(): $Stream<E>
public "toArray"<T>(t0s: T[]): T[]
public "toArray"(): any[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "empty"(): boolean
}
}

declare module "java.util.function.DoubleFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleFunction<R = any> {
"apply"(double0: double): R
}

export namespace $DoubleFunction {
const probejs$$marker: never
}
export abstract class $DoubleFunction$$Static<R = any> implements $DoubleFunction<R> {
}
}

declare module "java.util.function.DoubleUnaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleUnaryOperator {
"andThen"(doubleUnaryOperator0: $DoubleUnaryOperator$$Type): $DoubleUnaryOperator
"applyAsDouble"(double0: double): double
"compose"(doubleUnaryOperator0: $DoubleUnaryOperator$$Type): $DoubleUnaryOperator
}

export namespace $DoubleUnaryOperator {
function identity(): $DoubleUnaryOperator
}
export abstract class $DoubleUnaryOperator$$Static implements $DoubleUnaryOperator {
static "identity"(): $DoubleUnaryOperator
}
}

declare module "java.util.stream.IntStream$IntMapMultiConsumer" {
import { $IntConsumer$$Type } from "java.util.function.IntConsumer"

export interface $IntStream$IntMapMultiConsumer {
"accept"(int0: integer, intConsumer1: $IntConsumer$$Type): void
}

export namespace $IntStream$IntMapMultiConsumer {
const probejs$$marker: never
}
export abstract class $IntStream$IntMapMultiConsumer$$Static implements $IntStream$IntMapMultiConsumer {
}
}

declare module "java.util.function.UnaryOperator" {
import { $Function, $Function$$Type } from "java.util.function.Function"

export interface $UnaryOperator<T = any> extends $Function<T, T> {
"andThen"<V>(function0: $Function$$Type<T, V>): $Function<T, V>
"apply"(t0: T): T
"compose"<V>(function0: $Function$$Type<V, T>): $Function<V, T>
}

export namespace $UnaryOperator {
function identity<T>(): $UnaryOperator<T>
}
export abstract class $UnaryOperator$$Static<T = any> implements $UnaryOperator<T> {
static "identity"<T>(): $UnaryOperator<T>
}
}

declare module "java.util.RandomAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RandomAccess {
}

export namespace $RandomAccess {
const probejs$$marker: never
}
export abstract class $RandomAccess$$Static implements $RandomAccess {
}
}

declare module "java.util.HashMap" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Cloneable } from "java.lang.Cloneable"
import { $AbstractMap } from "java.util.AbstractMap"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Collection } from "java.util.Collection"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Set } from "java.util.Set"
import { $Function$$Type } from "java.util.function.Function"
import { $Serializable } from "java.io.Serializable"

export class $HashMap<K = any, V = any> extends $AbstractMap<K, V> implements $Map<K, V>, $Cloneable, $Serializable {
constructor(int0: integer, float1: float)
constructor(map0: $Map$$Type<K, V>)
constructor(int0: integer)
constructor()

public "clone"(): any
public "compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public "computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
public "computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "entrySet"(): $Set<$Map$Entry<K, V>>
public "equals"(object0: any): boolean
public "forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
public "get"(object0: any): V
public "getOrDefault"(object0: any, v1: V): V
public "hashCode"(): integer
public "keySet"(): $Set<K>
public "merge"(k0: K, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
public static "of"<K, V>(): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
public static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
public "put"(k0: K, v1: V): V
public "putIfAbsent"(k0: K, v1: V): V
public "remove"(object0: any, object1: any): boolean
public "remove"(object0: any): V
public "replace"(k0: K, v1: V, v2: V): boolean
public "replace"(k0: K, v1: V): V
public "replaceAll"(biFunction0: $BiFunction$$Type<K, V, V>): void
public "values"(): $Collection<V>
}
}

declare module "java.util.concurrent.Future" {
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"

export interface $Future<V = any> {
"cancel"(boolean0: boolean): boolean
"get"(): V
"get"(long0: long, timeUnit1: $TimeUnit$$Type): V
"isCancelled"(): boolean
"isDone"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
}

export namespace $Future {
const probejs$$marker: never
}
export abstract class $Future$$Static<V = any> implements $Future<V> {
}
}

declare module "java.util.concurrent.Callable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Callable<V = any> {
"call"(): V
}

export namespace $Callable {
const probejs$$marker: never
}
export abstract class $Callable$$Static<V = any> implements $Callable<V> {
}
}

declare module "java.util.ArrayList" {
import { $Cloneable } from "java.lang.Cloneable"
import { $Iterator } from "java.util.Iterator"
import { $ListIterator } from "java.util.ListIterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $AbstractList } from "java.util.AbstractList"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $Serializable } from "java.io.Serializable"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $RandomAccess } from "java.util.RandomAccess"
import { $List } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $Comparator$$Type } from "java.util.Comparator"
import { $Spliterator } from "java.util.Spliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $ArrayList<E = any> extends $AbstractList<E> implements $List<E>, $RandomAccess, $Cloneable, $Serializable {
constructor(collection0: $Collection$$Type<E>)
constructor()
constructor(int0: integer)

public "clone"(): any
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "ensureCapacity"(int0: integer): void
public "forEach"(consumer0: $Consumer$$Type<E>): void
public "get"(int0: integer): E
public "iterator"(): $Iterator<E>
public "listIterator"(): $ListIterator<E>
public "listIterator"(int0: integer): $ListIterator<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E): $List<E>
public static "of"<E>(e0: E, e1: E): $List<E>
public static "of"<E>(e0: E): $List<E>
public static "of"<E>(): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(...e0s: E[]): $List<E>
public "parallelStream"(): $Stream<E>
public "remove"(int0: integer): E
public "removeIf"(predicate0: $Predicate$$Type<E>): boolean
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<E>): void
public "set"(int0: integer, e1: E): E
public "sort"(comparator0: $Comparator$$Type<E>): void
public "spliterator"(): $Spliterator<E>
public "stream"(): $Stream<E>
public "subList"(int0: integer, int1: integer): $List<E>
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
public "trimToSize"(): void
}
}

declare module "java.util.function.DoubleConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleConsumer {
"accept"(double0: double): void
"andThen"(doubleConsumer0: $DoubleConsumer$$Type): $DoubleConsumer
}

export namespace $DoubleConsumer {
const probejs$$marker: never
}
export abstract class $DoubleConsumer$$Static implements $DoubleConsumer {
}
}

declare module "java.util.PrimitiveIterator$OfDouble" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $PrimitiveIterator } from "java.util.PrimitiveIterator"
import { $DoubleConsumer, $DoubleConsumer$$Type } from "java.util.function.DoubleConsumer"

export interface $PrimitiveIterator$OfDouble extends $PrimitiveIterator<double, $DoubleConsumer> {
"forEachRemaining"(consumer0: $Consumer$$Type<double>): void
"forEachRemaining"(doubleConsumer0: $DoubleConsumer$$Type): void
"hasNext"(): boolean
"next"(): double
"nextDouble"(): double
"remove"(): void
}

export namespace $PrimitiveIterator$OfDouble {
const probejs$$marker: never
}
export abstract class $PrimitiveIterator$OfDouble$$Static implements $PrimitiveIterator$OfDouble {
}
}

declare module "java.util.function.IntSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntSupplier {
"getAsInt"(): integer
get "asInt"(): integer
}

export namespace $IntSupplier {
const probejs$$marker: never
}
export abstract class $IntSupplier$$Static implements $IntSupplier {
}
}

declare module "java.util.Iterator" {
import { $Consumer$$Type } from "java.util.function.Consumer"

export interface $Iterator<E = any> {
"forEachRemaining"(consumer0: $Consumer$$Type<E>): void
"hasNext"(): boolean
"next"(): E
"remove"(): void
}

export namespace $Iterator {
const probejs$$marker: never
}
export abstract class $Iterator$$Static<E = any> implements $Iterator<E> {
}
}

declare module "java.util.Vector" {
import { $Cloneable } from "java.lang.Cloneable"
import { $Iterator } from "java.util.Iterator"
import { $Enumeration } from "java.util.Enumeration"
import { $ListIterator } from "java.util.ListIterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $AbstractList } from "java.util.AbstractList"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $Serializable } from "java.io.Serializable"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $RandomAccess } from "java.util.RandomAccess"
import { $List } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $Comparator$$Type } from "java.util.Comparator"
import { $Spliterator } from "java.util.Spliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $Vector<E = any> extends $AbstractList<E> implements $List<E>, $RandomAccess, $Cloneable, $Serializable {
constructor(int0: integer, int1: integer)
constructor(int0: integer)
constructor(collection0: $Collection$$Type<E>)
constructor()

public "addElement"(e0: E): void
public "capacity"(): integer
public "clone"(): any
public "copyInto"(object0s: any[]): void
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "elementAt"(int0: integer): E
public "elements"(): $Enumeration<E>
public "ensureCapacity"(int0: integer): void
public "firstElement"(): E
public "forEach"(consumer0: $Consumer$$Type<E>): void
public "get"(int0: integer): E
public "indexOf"(object0: any, int1: integer): integer
public "insertElementAt"(e0: E, int1: integer): void
public "iterator"(): $Iterator<E>
public "lastElement"(): E
public "lastIndexOf"(object0: any, int1: integer): integer
public "listIterator"(int0: integer): $ListIterator<E>
public "listIterator"(): $ListIterator<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E): $List<E>
public static "of"<E>(e0: E, e1: E): $List<E>
public static "of"<E>(e0: E): $List<E>
public static "of"<E>(): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(...e0s: E[]): $List<E>
public "parallelStream"(): $Stream<E>
public "remove"(int0: integer): E
public "removeAllElements"(): void
public "removeElement"(object0: any): boolean
public "removeElementAt"(int0: integer): void
public "removeIf"(predicate0: $Predicate$$Type<E>): boolean
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<E>): void
public "set"(int0: integer, e1: E): E
public "setElementAt"(e0: E, int1: integer): void
public "setSize"(int0: integer): void
public "sort"(comparator0: $Comparator$$Type<E>): void
public "spliterator"(): $Spliterator<E>
public "stream"(): $Stream<E>
public "subList"(int0: integer, int1: integer): $List<E>
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
public "trimToSize"(): void
set "size"(value: integer)
}
}

declare module "java.util.stream.DoubleStream" {
import { $IntStream } from "java.util.stream.IntStream"
import { $DoubleStream$DoubleMapMultiConsumer$$Type } from "java.util.stream.DoubleStream$DoubleMapMultiConsumer"
import { $LongStream } from "java.util.stream.LongStream"
import { $OptionalDouble } from "java.util.OptionalDouble"
import { $DoubleFunction$$Type } from "java.util.function.DoubleFunction"
import { $DoubleToIntFunction$$Type } from "java.util.function.DoubleToIntFunction"
import { $DoubleSummaryStatistics } from "java.util.DoubleSummaryStatistics"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ObjDoubleConsumer$$Type } from "java.util.function.ObjDoubleConsumer"
import { $DoubleConsumer$$Type } from "java.util.function.DoubleConsumer"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $DoubleUnaryOperator$$Type } from "java.util.function.DoubleUnaryOperator"
import { $DoubleStream$Builder } from "java.util.stream.DoubleStream$Builder"
import { $PrimitiveIterator$OfDouble } from "java.util.PrimitiveIterator$OfDouble"
import { $DoubleBinaryOperator$$Type } from "java.util.function.DoubleBinaryOperator"
import { $Stream } from "java.util.stream.Stream"
import { $DoubleToLongFunction$$Type } from "java.util.function.DoubleToLongFunction"
import { $DoubleSupplier$$Type } from "java.util.function.DoubleSupplier"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $BaseStream } from "java.util.stream.BaseStream"
import { $DoublePredicate$$Type } from "java.util.function.DoublePredicate"

export interface $DoubleStream extends $BaseStream<double, $DoubleStream> {
"allMatch"(doublePredicate0: $DoublePredicate$$Type): boolean
"anyMatch"(doublePredicate0: $DoublePredicate$$Type): boolean
"average"(): $OptionalDouble
"boxed"(): $Stream<double>
"close"(): void
"collect"<R>(supplier0: $Supplier$$Type<R>, objDoubleConsumer1: $ObjDoubleConsumer$$Type<R>, biConsumer2: $BiConsumer$$Type<R, R>): R
"count"(): long
"distinct"(): $DoubleStream
"dropWhile"(doublePredicate0: $DoublePredicate$$Type): $DoubleStream
"filter"(doublePredicate0: $DoublePredicate$$Type): $DoubleStream
"findAny"(): $OptionalDouble
"findFirst"(): $OptionalDouble
"flatMap"(doubleFunction0: $DoubleFunction$$Type<$DoubleStream>): $DoubleStream
"forEach"(doubleConsumer0: $DoubleConsumer$$Type): void
"forEachOrdered"(doubleConsumer0: $DoubleConsumer$$Type): void
"isParallel"(): boolean
"iterator"(): $PrimitiveIterator$OfDouble
"limit"(long0: long): $DoubleStream
"map"(doubleUnaryOperator0: $DoubleUnaryOperator$$Type): $DoubleStream
"mapMulti"(doubleMapMultiConsumer0: $DoubleStream$DoubleMapMultiConsumer$$Type): $DoubleStream
"mapToInt"(doubleToIntFunction0: $DoubleToIntFunction$$Type): $IntStream
"mapToLong"(doubleToLongFunction0: $DoubleToLongFunction$$Type): $LongStream
"mapToObj"<U>(doubleFunction0: $DoubleFunction$$Type<U>): $Stream<U>
"max"(): $OptionalDouble
"min"(): $OptionalDouble
"noneMatch"(doublePredicate0: $DoublePredicate$$Type): boolean
"onClose"(runnable0: $Runnable$$Type): $DoubleStream
"peek"(doubleConsumer0: $DoubleConsumer$$Type): $DoubleStream
"reduce"(double0: double, doubleBinaryOperator1: $DoubleBinaryOperator$$Type): double
"reduce"(doubleBinaryOperator0: $DoubleBinaryOperator$$Type): $OptionalDouble
"skip"(long0: long): $DoubleStream
"sorted"(): $DoubleStream
"sum"(): double
"summaryStatistics"(): $DoubleSummaryStatistics
"takeWhile"(doublePredicate0: $DoublePredicate$$Type): $DoubleStream
"toArray"(): double[]
"unordered"(): $DoubleStream
get "parallel"(): boolean
}

export namespace $DoubleStream {
function builder(): $DoubleStream$Builder
function concat(doubleStream0: $DoubleStream$$Type, doubleStream1: $DoubleStream$$Type): $DoubleStream
function empty(): $DoubleStream
function generate(doubleSupplier0: $DoubleSupplier$$Type): $DoubleStream
function iterate(double0: double, doublePredicate1: $DoublePredicate$$Type, doubleUnaryOperator2: $DoubleUnaryOperator$$Type): $DoubleStream
function iterate(double0: double, doubleUnaryOperator1: $DoubleUnaryOperator$$Type): $DoubleStream
function of(double0: double): $DoubleStream
function of(...double0s: double[]): $DoubleStream
}
export abstract class $DoubleStream$$Static implements $DoubleStream {
static "builder"(): $DoubleStream$Builder
static "concat"(doubleStream0: $DoubleStream$$Type, doubleStream1: $DoubleStream$$Type): $DoubleStream
static "empty"(): $DoubleStream
static "generate"(doubleSupplier0: $DoubleSupplier$$Type): $DoubleStream
static "iterate"(double0: double, doublePredicate1: $DoublePredicate$$Type, doubleUnaryOperator2: $DoubleUnaryOperator$$Type): $DoubleStream
static "iterate"(double0: double, doubleUnaryOperator1: $DoubleUnaryOperator$$Type): $DoubleStream
static "of"(double0: double): $DoubleStream
static "of"(...double0s: double[]): $DoubleStream
}
}

declare module "java.util.OptionalDouble" {
import { $Throwable, $Throwable$$Type } from "java.lang.Throwable"
import { $DoubleSupplier$$Type } from "java.util.function.DoubleSupplier"
import { $DoubleConsumer$$Type } from "java.util.function.DoubleConsumer"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $DoubleStream } from "java.util.stream.DoubleStream"

export class $OptionalDouble {
public static "empty"(): $OptionalDouble
public "getAsDouble"(): double
public "ifPresent"(doubleConsumer0: $DoubleConsumer$$Type): void
public "ifPresentOrElse"(doubleConsumer0: $DoubleConsumer$$Type, runnable1: $Runnable$$Type): void
public "isEmpty"(): boolean
public "isPresent"(): boolean
public static "of"(double0: double): $OptionalDouble
public "orElse"(double0: double): double
public "orElseGet"(doubleSupplier0: $DoubleSupplier$$Type): double
public "orElseThrow"<X extends $Throwable>(supplier0: $Supplier$$Type<X>): double
public "orElseThrow"(): double
public "stream"(): $DoubleStream
get "asDouble"(): double
get "present"(): boolean
}
}

declare module "java.util.stream.DoubleStream$DoubleMapMultiConsumer" {
import { $DoubleConsumer$$Type } from "java.util.function.DoubleConsumer"

export interface $DoubleStream$DoubleMapMultiConsumer {
"accept"(double0: double, doubleConsumer1: $DoubleConsumer$$Type): void
}

export namespace $DoubleStream$DoubleMapMultiConsumer {
const probejs$$marker: never
}
export abstract class $DoubleStream$DoubleMapMultiConsumer$$Static implements $DoubleStream$DoubleMapMultiConsumer {
}
}

declare module "java.util.concurrent.locks.Lock" {
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $Condition } from "java.util.concurrent.locks.Condition"

export interface $Lock {
"lock"(): void
"lockInterruptibly"(): void
"newCondition"(): $Condition
"tryLock"(): boolean
"tryLock"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"unlock"(): void
}

export namespace $Lock {
const probejs$$marker: never
}
export abstract class $Lock$$Static implements $Lock {
}
}

declare module "java.util.function.DoubleToLongFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleToLongFunction {
"applyAsLong"(double0: double): long
}

export namespace $DoubleToLongFunction {
const probejs$$marker: never
}
export abstract class $DoubleToLongFunction$$Static implements $DoubleToLongFunction {
}
}

declare module "java.util.function.LongBinaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongBinaryOperator {
"applyAsLong"(long0: long, long1: long): long
}

export namespace $LongBinaryOperator {
const probejs$$marker: never
}
export abstract class $LongBinaryOperator$$Static implements $LongBinaryOperator {
}
}

declare module "java.util.HashSet" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Cloneable } from "java.lang.Cloneable"
import { $Stream } from "java.util.stream.Stream"
import { $Iterator } from "java.util.Iterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $AbstractSet } from "java.util.AbstractSet"
import { $Set } from "java.util.Set"
import { $Spliterator } from "java.util.Spliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"
import { $Serializable } from "java.io.Serializable"

export class $HashSet<E = any> extends $AbstractSet<E> implements $Set<E>, $Cloneable, $Serializable {
constructor(int0: integer)
constructor(int0: integer, float1: float)
constructor(collection0: $Collection$$Type<E>)
constructor()

public "addAll"(collection0: $Collection$$Type<E>): boolean
public "clone"(): any
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
public "equals"(object0: any): boolean
public "forEach"(consumer0: $Consumer$$Type<E>): void
public "hashCode"(): integer
public "iterator"(): $Iterator<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
public static "of"<E>(e0: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
public static "of"<E>(...e0s: E[]): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E): $Set<E>
public static "of"<E>(): $Set<E>
public static "of"<E>(e0: E, e1: E): $Set<E>
public "parallelStream"(): $Stream<E>
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<E>): boolean
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "spliterator"(): $Spliterator<E>
public "stream"(): $Stream<E>
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
}
}

declare module "java.util.concurrent.ExecutorService" {
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $List } from "java.util.List"
import { $Future } from "java.util.concurrent.Future"
import { $Executor } from "java.util.concurrent.Executor"
import { $Collection$$Type } from "java.util.Collection"
import { $Callable$$Type } from "java.util.concurrent.Callable"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"

export interface $ExecutorService extends $Executor {
"awaitTermination"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"execute"(runnable0: $Runnable$$Type): void
"invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): $List<$Future<T>>
"invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): $List<$Future<T>>
"invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): T
"invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): T
"isShutdown"(): boolean
"isTerminated"(): boolean
"shutdown"(): void
"shutdownNow"(): $List<$Runnable>
"submit"<T>(callable0: $Callable$$Type<T>): $Future<T>
"submit"(runnable0: $Runnable$$Type): $Future<any>
"submit"<T>(runnable0: $Runnable$$Type, t1: T): $Future<T>
get "terminated"(): boolean
}

export namespace $ExecutorService {
const probejs$$marker: never
}
export abstract class $ExecutorService$$Static implements $ExecutorService {
}
}

declare module "java.util.function.LongSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongSupplier {
"getAsLong"(): long
get "asLong"(): long
}

export namespace $LongSupplier {
const probejs$$marker: never
}
export abstract class $LongSupplier$$Static implements $LongSupplier {
}
}

declare module "java.util.Dictionary" {
import { $Enumeration } from "java.util.Enumeration"

export class $Dictionary<K = any, V = any> {
constructor()

public "elements"(): $Enumeration<V>
public "get"(object0: any): V
public "isEmpty"(): boolean
public "keys"(): $Enumeration<K>
public "put"(k0: K, v1: V): V
public "remove"(object0: any): V
public "size"(): integer
get "empty"(): boolean
}
}

declare module "java.util.ResourceBundle$Control" {
import { $List, $List$$Type } from "java.util.List"
import { $ResourceBundle, $ResourceBundle$$Type } from "java.util.ResourceBundle"
import { $Locale, $Locale$$Type } from "java.util.Locale"
import { $ClassLoader$$Type } from "java.lang.ClassLoader"

export class $ResourceBundle$Control {
static readonly "FORMAT_CLASS": $List<string>
static readonly "FORMAT_DEFAULT": $List<string>
static readonly "FORMAT_PROPERTIES": $List<string>
static readonly "TTL_DONT_CACHE": long
static readonly "TTL_NO_EXPIRATION_CONTROL": long

public "getCandidateLocales"(string0: string, locale1: $Locale$$Type): $List<$Locale>
public static "getControl"(list0: $List$$Type<string>): $ResourceBundle$Control
public "getFallbackLocale"(string0: string, locale1: $Locale$$Type): $Locale
public "getFormats"(string0: string): $List<string>
public static "getNoFallbackControl"(list0: $List$$Type<string>): $ResourceBundle$Control
public "getTimeToLive"(string0: string, locale1: $Locale$$Type): long
public "needsReload"(string0: string, locale1: $Locale$$Type, string2: string, classLoader3: $ClassLoader$$Type, resourceBundle4: $ResourceBundle$$Type, long5: long): boolean
public "newBundle"(string0: string, locale1: $Locale$$Type, string2: string, classLoader3: $ClassLoader$$Type, boolean4: boolean): $ResourceBundle
public "toBundleName"(string0: string, locale1: $Locale$$Type): string
public "toResourceName"(string0: string, string1: string): string
}
}

declare module "java.util.function.BiConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BiConsumer<T = any, U = any> {
"accept"(t0: T, u1: U): void
"andThen"(biConsumer0: $BiConsumer$$Type<T, U>): $BiConsumer<T, U>
}

export namespace $BiConsumer {
const probejs$$marker: never
}
export abstract class $BiConsumer$$Static<T = any, U = any> implements $BiConsumer<T, U> {
}
}

declare module "java.util.stream.Collector" {
import { $BiConsumer, $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Set } from "java.util.Set"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $Collector$Characteristics, $Collector$Characteristics$$Type } from "java.util.stream.Collector$Characteristics"
import { $BinaryOperator, $BinaryOperator$$Type } from "java.util.function.BinaryOperator"

export interface $Collector<T = any, A = any, R = any> {
"accumulator"(): $BiConsumer<A, T>
"characteristics"(): $Set<$Collector$Characteristics>
"combiner"(): $BinaryOperator<A>
"finisher"(): $Function<A, R>
"supplier"(): $Supplier<A>
}

export namespace $Collector {
function of<T, A, R>(supplier0: $Supplier$$Type<A>, biConsumer1: $BiConsumer$$Type<A, T>, binaryOperator2: $BinaryOperator$$Type<A>, function3: $Function$$Type<A, R>, ...characteristics4s: $Collector$Characteristics$$Type[]): $Collector<T, A, R>
function of<T, R>(supplier0: $Supplier$$Type<R>, biConsumer1: $BiConsumer$$Type<R, T>, binaryOperator2: $BinaryOperator$$Type<R>, ...characteristics3s: $Collector$Characteristics$$Type[]): $Collector<T, R, R>
}
export abstract class $Collector$$Static<T = any, A = any, R = any> implements $Collector<T, A, R> {
static "of"<T, A, R>(supplier0: $Supplier$$Type<A>, biConsumer1: $BiConsumer$$Type<A, T>, binaryOperator2: $BinaryOperator$$Type<A>, function3: $Function$$Type<A, R>, ...characteristics4s: $Collector$Characteristics$$Type[]): $Collector<T, A, R>
static "of"<T, R>(supplier0: $Supplier$$Type<R>, biConsumer1: $BiConsumer$$Type<R, T>, binaryOperator2: $BinaryOperator$$Type<R>, ...characteristics3s: $Collector$Characteristics$$Type[]): $Collector<T, R, R>
}
}

declare module "java.util.SortedSet" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"
import { $Iterator } from "java.util.Iterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $Comparator } from "java.util.Comparator"
import { $Spliterator } from "java.util.Spliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $SortedSet<E = any> extends $Set<E> {
"add"(e0: E): boolean
"addAll"(collection0: $Collection$$Type<E>): boolean
"clear"(): void
"comparator"(): $Comparator<E>
"contains"(object0: any): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"first"(): E
"forEach"(consumer0: $Consumer$$Type<E>): void
"hashCode"(): integer
"headSet"(e0: E): $SortedSet<E>
"isEmpty"(): boolean
"iterator"(): $Iterator<E>
"last"(): E
"parallelStream"(): $Stream<E>
"remove"(object0: any): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(predicate0: $Predicate$$Type<E>): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"spliterator"(): $Spliterator<E>
"stream"(): $Stream<E>
"subSet"(e0: E, e1: E): $SortedSet<E>
"tailSet"(e0: E): $SortedSet<E>
"toArray"<T>(t0s: T[]): T[]
"toArray"(): any[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}

export namespace $SortedSet {
function copyOf<E>(collection0: $Collection$$Type<E>): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
function of<E>(e0: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
function of<E>(...e0s: E[]): $Set<E>
function of<E>(e0: E, e1: E, e2: E): $Set<E>
function of<E>(): $Set<E>
function of<E>(e0: E, e1: E): $Set<E>
}
export abstract class $SortedSet$$Static<E = any> implements $SortedSet<E> {
static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
static "of"<E>(e0: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
static "of"<E>(...e0s: E[]): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E): $Set<E>
static "of"<E>(): $Set<E>
static "of"<E>(e0: E, e1: E): $Set<E>
}
}

declare module "java.util.function.ToLongFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ToLongFunction<T = any> {
"applyAsLong"(t0: T): long
}

export namespace $ToLongFunction {
const probejs$$marker: never
}
export abstract class $ToLongFunction$$Static<T = any> implements $ToLongFunction<T> {
}
}

declare module "java.util.function.LongConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongConsumer {
"accept"(long0: long): void
"andThen"(longConsumer0: $LongConsumer$$Type): $LongConsumer
}

export namespace $LongConsumer {
const probejs$$marker: never
}
export abstract class $LongConsumer$$Static implements $LongConsumer {
}
}

declare module "java.util.function.ObjLongConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ObjLongConsumer<T = any> {
"accept"(t0: T, long1: long): void
}

export namespace $ObjLongConsumer {
const probejs$$marker: never
}
export abstract class $ObjLongConsumer$$Static<T = any> implements $ObjLongConsumer<T> {
}
}

declare module "java.util.List" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"
import { $Iterator } from "java.util.Iterator"
import { $ListIterator } from "java.util.ListIterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $Comparator$$Type } from "java.util.Comparator"
import { $Spliterator } from "java.util.Spliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $List<E = any> extends $Collection<E> {
"add"(int0: integer, e1: E): void
"add"(e0: E): boolean
"addAll"(int0: integer, collection1: $Collection$$Type<E>): boolean
"addAll"(collection0: $Collection$$Type<E>): boolean
"clear"(): void
"contains"(object0: any): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"forEach"(consumer0: $Consumer$$Type<E>): void
"get"(int0: integer): E
"hashCode"(): integer
"indexOf"(object0: any): integer
"isEmpty"(): boolean
"iterator"(): $Iterator<E>
"lastIndexOf"(object0: any): integer
"listIterator"(int0: integer): $ListIterator<E>
"listIterator"(): $ListIterator<E>
"parallelStream"(): $Stream<E>
"remove"(object0: any): boolean
"remove"(int0: integer): E
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(predicate0: $Predicate$$Type<E>): boolean
"replaceAll"(unaryOperator0: $UnaryOperator$$Type<E>): void
"retainAll"(collection0: $Collection$$Type<any>): boolean
"set"(int0: integer, e1: E): E
"size"(): integer
"sort"(comparator0: $Comparator$$Type<E>): void
"spliterator"(): $Spliterator<E>
"stream"(): $Stream<E>
"subList"(int0: integer, int1: integer): $List<E>
"toArray"(): any[]
"toArray"<T>(t0s: T[]): T[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
[Symbol.iterator](): IterableIterator<E>;
[index: number]: E
get "empty"(): boolean
}

export namespace $List {
function copyOf<E>(collection0: $Collection$$Type<E>): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
function of<E>(e0: E, e1: E, e2: E): $List<E>
function of<E>(e0: E, e1: E): $List<E>
function of<E>(e0: E): $List<E>
function of<E>(): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
function of<E>(...e0s: E[]): $List<E>
}
export abstract class $List$$Static<E = any> implements $List<E> {
static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E): $List<E>
static "of"<E>(e0: E, e1: E): $List<E>
static "of"<E>(e0: E): $List<E>
static "of"<E>(): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
static "of"<E>(...e0s: E[]): $List<E>
}
}

declare module "java.util.Date" {
import { $Cloneable } from "java.lang.Cloneable"
import { $Comparable } from "java.lang.Comparable"
import { $Instant, $Instant$$Type } from "java.time.Instant"
import { $Serializable } from "java.io.Serializable"

export class $Date implements $Serializable, $Cloneable, $Comparable<$Date> {
/** @deprecated */
constructor(string0: string)
constructor()
/** @deprecated */
constructor(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer)
/** @deprecated */
constructor(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer)
constructor(long0: long)
/** @deprecated */
constructor(int0: integer, int1: integer, int2: integer)

/** @deprecated */
public static "UTC"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): long
public "after"(date0: $Date$$Type): boolean
public "before"(date0: $Date$$Type): boolean
public "clone"(): any
public "compareTo"(date0: $Date$$Type): integer
public static "from"(instant0: $Instant$$Type): $Date
/** @deprecated */
public "getDate"(): integer
/** @deprecated */
public "getDay"(): integer
/** @deprecated */
public "getHours"(): integer
/** @deprecated */
public "getMinutes"(): integer
/** @deprecated */
public "getMonth"(): integer
/** @deprecated */
public "getSeconds"(): integer
public "getTime"(): long
/** @deprecated */
public "getTimezoneOffset"(): integer
/** @deprecated */
public "getYear"(): integer
/** @deprecated */
public static "parse"(string0: string): long
/** @deprecated */
public "setDate"(int0: integer): void
/** @deprecated */
public "setHours"(int0: integer): void
/** @deprecated */
public "setMinutes"(int0: integer): void
/** @deprecated */
public "setMonth"(int0: integer): void
/** @deprecated */
public "setSeconds"(int0: integer): void
public "setTime"(long0: long): void
/** @deprecated */
public "setYear"(int0: integer): void
/** @deprecated */
public "toGMTString"(): string
public "toInstant"(): $Instant
/** @deprecated */
public "toLocaleString"(): string
get "date"(): integer
get "day"(): integer
get "hours"(): integer
get "minutes"(): integer
get "month"(): integer
get "seconds"(): integer
get "time"(): long
get "timezoneOffset"(): integer
get "year"(): integer
set "date"(value: integer)
set "hours"(value: integer)
set "minutes"(value: integer)
set "month"(value: integer)
set "seconds"(value: integer)
set "time"(value: long)
set "year"(value: integer)
}
}

declare module "java.util.Random" {
import { $RandomGenerator } from "java.util.random.RandomGenerator"
import { $IntStream } from "java.util.stream.IntStream"
import { $LongStream } from "java.util.stream.LongStream"
import { $DoubleStream } from "java.util.stream.DoubleStream"
import { $Serializable } from "java.io.Serializable"

export class $Random implements $RandomGenerator, $Serializable {
constructor(long0: long)
constructor()

public "doubles"(): $DoubleStream
public "doubles"(long0: long, double1: double, double2: double): $DoubleStream
public "doubles"(long0: long): $DoubleStream
public "doubles"(double0: double, double1: double): $DoubleStream
public static "getDefault"(): $RandomGenerator
public "ints"(int0: integer, int1: integer): $IntStream
public "ints"(long0: long, int1: integer, int2: integer): $IntStream
public "ints"(): $IntStream
public "ints"(long0: long): $IntStream
public "isDeprecated"(): boolean
public "longs"(long0: long): $LongStream
public "longs"(): $LongStream
public "longs"(long0: long, long1: long): $LongStream
public "longs"(long0: long, long1: long, long2: long): $LongStream
public "nextBoolean"(): boolean
public "nextBytes"(byte0s: byte[]): void
public "nextDouble"(): double
public "nextDouble"(double0: double, double1: double): double
public "nextDouble"(double0: double): double
public "nextExponential"(): double
public "nextFloat"(): float
public "nextFloat"(float0: float, float1: float): float
public "nextFloat"(float0: float): float
public "nextGaussian"(): double
public "nextGaussian"(double0: double, double1: double): double
public "nextInt"(int0: integer): integer
public "nextInt"(): integer
public "nextInt"(int0: integer, int1: integer): integer
public "nextLong"(): long
public "nextLong"(long0: long): long
public "nextLong"(long0: long, long1: long): long
public static "of"(string0: string): $RandomGenerator
public "setSeed"(long0: long): void
get "deprecated"(): boolean
set "seed"(value: long)
}
}

declare module "java.util.function.IntBinaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntBinaryOperator {
"applyAsInt"(int0: integer, int1: integer): integer
}

export namespace $IntBinaryOperator {
const probejs$$marker: never
}
export abstract class $IntBinaryOperator$$Static implements $IntBinaryOperator {
}
}

declare module "java.util.Map$Entry" {
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Comparator, $Comparator$$Type } from "java.util.Comparator"

export interface $Map$Entry<K = any, V = any> {
"equals"(object0: any): boolean
"getKey"(): K
"getValue"(): V
"hashCode"(): integer
"setValue"(v0: V): V
get "key"(): K
get "value"(): V
set "value"(value: V)
}

export namespace $Map$Entry {
function comparingByKey<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
function comparingByKey<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
function copyOf<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
export abstract class $Map$Entry$$Static<K = any, V = any> implements $Map$Entry<K, V> {
static "comparingByKey"<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
static "comparingByKey"<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
static "copyOf"<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
}

declare module "java.util.Enumeration" {
import { $Iterator } from "java.util.Iterator"

export interface $Enumeration<E = any> {
"asIterator"(): $Iterator<E>
"hasMoreElements"(): boolean
"nextElement"(): E
}

export namespace $Enumeration {
const probejs$$marker: never
}
export abstract class $Enumeration$$Static<E = any> implements $Enumeration<E> {
}
}

declare module "java.util.concurrent.ConcurrentHashMap$KeySetView" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"
import { $Iterator } from "java.util.Iterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $ConcurrentHashMap$CollectionView } from "java.util.concurrent.ConcurrentHashMap$CollectionView"
import { $Set } from "java.util.Set"
import { $Spliterator } from "java.util.Spliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"
import { $Serializable } from "java.io.Serializable"

export class $ConcurrentHashMap$KeySetView<K = any, V = any> extends $ConcurrentHashMap$CollectionView<K, V, K> implements $Set<K>, $Serializable {
public "add"(k0: K): boolean
public "addAll"(collection0: $Collection$$Type<K>): boolean
public "clear"(): void
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
public "forEach"(consumer0: $Consumer$$Type<K>): void
public "getMappedValue"(): V
public "isEmpty"(): boolean
public "iterator"(): $Iterator<K>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
public static "of"<E>(e0: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
public static "of"<E>(...e0s: E[]): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E): $Set<E>
public static "of"<E>(): $Set<E>
public static "of"<E>(e0: E, e1: E): $Set<E>
public "parallelStream"(): $Stream<K>
public "removeIf"(predicate0: $Predicate$$Type<K>): boolean
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "size"(): integer
public "spliterator"(): $Spliterator<K>
public "stream"(): $Stream<K>
public "toArray"<T>(t0s: T[]): T[]
public "toArray"(): any[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "mappedValue"(): V
get "empty"(): boolean
}
}

declare module "java.util.EventObject" {
import { $Serializable } from "java.io.Serializable"

export class $EventObject implements $Serializable {
constructor(object0: any)

public "getSource"(): any
get "source"(): any
}
}

declare module "java.util.function.BooleanSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BooleanSupplier {
"getAsBoolean"(): boolean
get "asBoolean"(): boolean
}

export namespace $BooleanSupplier {
const probejs$$marker: never
}
export abstract class $BooleanSupplier$$Static implements $BooleanSupplier {
}
}

declare module "java.util.stream.LongStream$Builder" {
import { $LongStream } from "java.util.stream.LongStream"
import { $LongConsumer, $LongConsumer$$Type } from "java.util.function.LongConsumer"

export interface $LongStream$Builder extends $LongConsumer {
"accept"(long0: long): void
"add"(long0: long): $LongStream$Builder
"andThen"(longConsumer0: $LongConsumer$$Type): $LongConsumer
"build"(): $LongStream
}

export namespace $LongStream$Builder {
const probejs$$marker: never
}
export abstract class $LongStream$Builder$$Static implements $LongStream$Builder {
}
}

declare module "java.util.function.ObjDoubleConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ObjDoubleConsumer<T = any> {
"accept"(t0: T, double1: double): void
}

export namespace $ObjDoubleConsumer {
const probejs$$marker: never
}
export abstract class $ObjDoubleConsumer$$Static<T = any> implements $ObjDoubleConsumer<T> {
}
}

declare module "java.util.Spliterator$OfInt" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $IntConsumer, $IntConsumer$$Type } from "java.util.function.IntConsumer"
import { $Spliterator$OfPrimitive } from "java.util.Spliterator$OfPrimitive"
import { $Comparator } from "java.util.Comparator"

export interface $Spliterator$OfInt extends $Spliterator$OfPrimitive<integer, $IntConsumer, $Spliterator$OfInt> {
"characteristics"(): integer
"estimateSize"(): long
"forEachRemaining"(consumer0: $Consumer$$Type<integer>): void
"forEachRemaining"(intConsumer0: $IntConsumer$$Type): void
"getComparator"(): $Comparator<integer>
"getExactSizeIfKnown"(): long
"hasCharacteristics"(int0: integer): boolean
"tryAdvance"(consumer0: $Consumer$$Type<integer>): boolean
"tryAdvance"(intConsumer0: $IntConsumer$$Type): boolean
get "comparator"(): $Comparator<integer>
get "exactSizeIfKnown"(): long
}

export namespace $Spliterator$OfInt {
const probejs$$marker: never
}
export abstract class $Spliterator$OfInt$$Static implements $Spliterator$OfInt {
}
}

declare module "java.util.function.IntFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntFunction<R = any> {
"apply"(int0: integer): R
}

export namespace $IntFunction {
const probejs$$marker: never
}
export abstract class $IntFunction$$Static<R = any> implements $IntFunction<R> {
}
}

declare module "java.util.TimeZone" {
import { $Cloneable } from "java.lang.Cloneable"
import { $Locale$$Type } from "java.util.Locale"
import { $Date$$Type } from "java.util.Date"
import { $ZoneId, $ZoneId$$Type } from "java.time.ZoneId"
import { $Serializable } from "java.io.Serializable"

export class $TimeZone implements $Serializable, $Cloneable {
static readonly "LONG": integer
static readonly "SHORT": integer

constructor()

public "clone"(): any
public static "getAvailableIDs"(): string[]
public static "getAvailableIDs"(int0: integer): string[]
public "getDSTSavings"(): integer
public static "getDefault"(): $TimeZone
public "getDisplayName"(locale0: $Locale$$Type): string
public "getDisplayName"(): string
public "getDisplayName"(boolean0: boolean, int1: integer, locale2: $Locale$$Type): string
public "getDisplayName"(boolean0: boolean, int1: integer): string
public "getID"(): string
public "getOffset"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): integer
public "getOffset"(long0: long): integer
public "getRawOffset"(): integer
public static "getTimeZone"(zoneId0: $ZoneId$$Type): $TimeZone
public static "getTimeZone"(string0: string): $TimeZone
public "hasSameRules"(timeZone0: $TimeZone$$Type): boolean
public "inDaylightTime"(date0: $Date$$Type): boolean
public "observesDaylightTime"(): boolean
public static "setDefault"(timeZone0: $TimeZone$$Type): void
public "setID"(string0: string): void
public "setRawOffset"(int0: integer): void
public "toZoneId"(): $ZoneId
public "useDaylightTime"(): boolean
get "dSTSavings"(): integer
get "displayName"(): string
get "iD"(): string
get "rawOffset"(): integer
set "iD"(value: string)
set "rawOffset"(value: integer)
}
}

declare module "java.util.Collection" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"
import { $Iterator } from "java.util.Iterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Spliterator } from "java.util.Spliterator"
import { $Iterable } from "java.lang.Iterable"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $Collection<E = any> extends $Iterable<E> {
"add"(e0: E): boolean
"addAll"(collection0: $Collection$$Type<E>): boolean
"clear"(): void
"contains"(object0: any): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"forEach"(consumer0: $Consumer$$Type<E>): void
"hashCode"(): integer
"isEmpty"(): boolean
"iterator"(): $Iterator<E>
"parallelStream"(): $Stream<E>
"remove"(object0: any): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(predicate0: $Predicate$$Type<E>): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"spliterator"(): $Spliterator<E>
"stream"(): $Stream<E>
"toArray"<T>(t0s: T[]): T[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
"toArray"(): any[]
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}

export namespace $Collection {
const probejs$$marker: never
}
export abstract class $Collection$$Static<E = any> implements $Collection<E> {
}
}

declare module "java.util.Queue" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"
import { $Iterator } from "java.util.Iterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $Spliterator } from "java.util.Spliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $Queue<E = any> extends $Collection<E> {
"add"(e0: E): boolean
"addAll"(collection0: $Collection$$Type<E>): boolean
"clear"(): void
"contains"(object0: any): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"element"(): E
"equals"(object0: any): boolean
"forEach"(consumer0: $Consumer$$Type<E>): void
"hashCode"(): integer
"isEmpty"(): boolean
"iterator"(): $Iterator<E>
"offer"(e0: E): boolean
"parallelStream"(): $Stream<E>
"peek"(): E
"poll"(): E
"remove"(): E
"remove"(object0: any): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(predicate0: $Predicate$$Type<E>): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"spliterator"(): $Spliterator<E>
"stream"(): $Stream<E>
"toArray"<T>(t0s: T[]): T[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
"toArray"(): any[]
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}

export namespace $Queue {
const probejs$$marker: never
}
export abstract class $Queue$$Static<E = any> implements $Queue<E> {
}
}

declare module "java.util.function.ToIntFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ToIntFunction<T = any> {
"applyAsInt"(t0: T): integer
}

export namespace $ToIntFunction {
const probejs$$marker: never
}
export abstract class $ToIntFunction$$Static<T = any> implements $ToIntFunction<T> {
}
}

declare module "java.util.concurrent.atomic.AtomicBoolean" {
import { $Serializable } from "java.io.Serializable"

export class $AtomicBoolean implements $Serializable {
constructor(boolean0: boolean)
constructor()

public "compareAndExchange"(boolean0: boolean, boolean1: boolean): boolean
public "compareAndExchangeAcquire"(boolean0: boolean, boolean1: boolean): boolean
public "compareAndExchangeRelease"(boolean0: boolean, boolean1: boolean): boolean
public "compareAndSet"(boolean0: boolean, boolean1: boolean): boolean
public "get"(): boolean
public "getAcquire"(): boolean
public "getAndSet"(boolean0: boolean): boolean
public "getOpaque"(): boolean
public "getPlain"(): boolean
public "lazySet"(boolean0: boolean): void
public "set"(boolean0: boolean): void
public "setOpaque"(boolean0: boolean): void
public "setPlain"(boolean0: boolean): void
public "setRelease"(boolean0: boolean): void
/** @deprecated */
public "weakCompareAndSet"(boolean0: boolean, boolean1: boolean): boolean
public "weakCompareAndSetAcquire"(boolean0: boolean, boolean1: boolean): boolean
public "weakCompareAndSetPlain"(boolean0: boolean, boolean1: boolean): boolean
public "weakCompareAndSetRelease"(boolean0: boolean, boolean1: boolean): boolean
public "weakCompareAndSetVolatile"(boolean0: boolean, boolean1: boolean): boolean
get "acquire"(): boolean
get "opaque"(): boolean
get "plain"(): boolean
set "opaque"(value: boolean)
set "plain"(value: boolean)
set "release"(value: boolean)
}
}

declare module "java.util.BitSet" {
import { $IntStream } from "java.util.stream.IntStream"
import { $Cloneable } from "java.lang.Cloneable"
import { $LongBuffer$$Type } from "java.nio.LongBuffer"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $Serializable } from "java.io.Serializable"

export class $BitSet implements $Cloneable, $Serializable {
constructor()
constructor(int0: integer)

public "and"(bitSet0: $BitSet$$Type): void
public "andNot"(bitSet0: $BitSet$$Type): void
public "cardinality"(): integer
public "clear"(int0: integer, int1: integer): void
public "clear"(int0: integer): void
public "clear"(): void
public "clone"(): any
public "flip"(int0: integer, int1: integer): void
public "flip"(int0: integer): void
public "get"(int0: integer): boolean
public "get"(int0: integer, int1: integer): $BitSet
public "intersects"(bitSet0: $BitSet$$Type): boolean
public "isEmpty"(): boolean
public "length"(): integer
public "nextClearBit"(int0: integer): integer
public "nextSetBit"(int0: integer): integer
public "or"(bitSet0: $BitSet$$Type): void
public "previousClearBit"(int0: integer): integer
public "previousSetBit"(int0: integer): integer
public "set"(int0: integer): void
public "set"(int0: integer, int1: integer, boolean2: boolean): void
public "set"(int0: integer, int1: integer): void
public "set"(int0: integer, boolean1: boolean): void
public "size"(): integer
public "stream"(): $IntStream
public "toByteArray"(): byte[]
public "toLongArray"(): long[]
public static "valueOf"(byteBuffer0: $ByteBuffer$$Type): $BitSet
public static "valueOf"(long0s: long[]): $BitSet
public static "valueOf"(byte0s: byte[]): $BitSet
public static "valueOf"(longBuffer0: $LongBuffer$$Type): $BitSet
public "xor"(bitSet0: $BitSet$$Type): void
get "empty"(): boolean
}
}

declare module "java.util.ResourceBundle" {
import { $Module$$Type } from "java.lang.Module"
import { $Enumeration } from "java.util.Enumeration"
import { $Locale, $Locale$$Type } from "java.util.Locale"
import { $ResourceBundle$Control$$Type } from "java.util.ResourceBundle$Control"
import { $Set } from "java.util.Set"
import { $ClassLoader$$Type } from "java.lang.ClassLoader"

export class $ResourceBundle {
constructor()

public static "clearCache"(classLoader0: $ClassLoader$$Type): void
public static "clearCache"(): void
public "containsKey"(string0: string): boolean
public "getBaseBundleName"(): string
public static "getBundle"(string0: string, locale1: $Locale$$Type): $ResourceBundle
public static "getBundle"(string0: string, control1: $ResourceBundle$Control$$Type): $ResourceBundle
public static "getBundle"(string0: string): $ResourceBundle
public static "getBundle"(string0: string, module1: $Module$$Type): $ResourceBundle
public static "getBundle"(string0: string, locale1: $Locale$$Type, classLoader2: $ClassLoader$$Type, control3: $ResourceBundle$Control$$Type): $ResourceBundle
public static "getBundle"(string0: string, locale1: $Locale$$Type, control2: $ResourceBundle$Control$$Type): $ResourceBundle
public static "getBundle"(string0: string, locale1: $Locale$$Type, module2: $Module$$Type): $ResourceBundle
public static "getBundle"(string0: string, locale1: $Locale$$Type, classLoader2: $ClassLoader$$Type): $ResourceBundle
public "getKeys"(): $Enumeration<string>
public "getLocale"(): $Locale
public "getObject"(string0: string): any
public "getString"(string0: string): string
public "getStringArray"(string0: string): string[]
public "keySet"(): $Set<string>
get "baseBundleName"(): string
get "keys"(): $Enumeration<string>
get "locale"(): $Locale
}
}

declare module "java.util.stream.LongStream" {
import { $IntStream } from "java.util.stream.IntStream"
import { $LongToIntFunction$$Type } from "java.util.function.LongToIntFunction"
import { $LongFunction$$Type } from "java.util.function.LongFunction"
import { $LongSupplier$$Type } from "java.util.function.LongSupplier"
import { $LongStream$LongMapMultiConsumer$$Type } from "java.util.stream.LongStream$LongMapMultiConsumer"
import { $LongBinaryOperator$$Type } from "java.util.function.LongBinaryOperator"
import { $OptionalDouble } from "java.util.OptionalDouble"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $DoubleStream } from "java.util.stream.DoubleStream"
import { $LongConsumer$$Type } from "java.util.function.LongConsumer"
import { $LongStream$Builder } from "java.util.stream.LongStream$Builder"
import { $OptionalLong } from "java.util.OptionalLong"
import { $Stream } from "java.util.stream.Stream"
import { $ObjLongConsumer$$Type } from "java.util.function.ObjLongConsumer"
import { $LongUnaryOperator$$Type } from "java.util.function.LongUnaryOperator"
import { $PrimitiveIterator$OfLong } from "java.util.PrimitiveIterator$OfLong"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $BaseStream } from "java.util.stream.BaseStream"
import { $LongPredicate$$Type } from "java.util.function.LongPredicate"
import { $LongToDoubleFunction$$Type } from "java.util.function.LongToDoubleFunction"
import { $LongSummaryStatistics } from "java.util.LongSummaryStatistics"

export interface $LongStream extends $BaseStream<long, $LongStream> {
"allMatch"(longPredicate0: $LongPredicate$$Type): boolean
"anyMatch"(longPredicate0: $LongPredicate$$Type): boolean
"asDoubleStream"(): $DoubleStream
"average"(): $OptionalDouble
"boxed"(): $Stream<long>
"close"(): void
"collect"<R>(supplier0: $Supplier$$Type<R>, objLongConsumer1: $ObjLongConsumer$$Type<R>, biConsumer2: $BiConsumer$$Type<R, R>): R
"count"(): long
"distinct"(): $LongStream
"dropWhile"(longPredicate0: $LongPredicate$$Type): $LongStream
"filter"(longPredicate0: $LongPredicate$$Type): $LongStream
"findAny"(): $OptionalLong
"findFirst"(): $OptionalLong
"flatMap"(longFunction0: $LongFunction$$Type<$LongStream>): $LongStream
"forEach"(longConsumer0: $LongConsumer$$Type): void
"forEachOrdered"(longConsumer0: $LongConsumer$$Type): void
"isParallel"(): boolean
"iterator"(): $PrimitiveIterator$OfLong
"limit"(long0: long): $LongStream
"map"(longUnaryOperator0: $LongUnaryOperator$$Type): $LongStream
"mapMulti"(longMapMultiConsumer0: $LongStream$LongMapMultiConsumer$$Type): $LongStream
"mapToDouble"(longToDoubleFunction0: $LongToDoubleFunction$$Type): $DoubleStream
"mapToInt"(longToIntFunction0: $LongToIntFunction$$Type): $IntStream
"mapToObj"<U>(longFunction0: $LongFunction$$Type<U>): $Stream<U>
"max"(): $OptionalLong
"min"(): $OptionalLong
"noneMatch"(longPredicate0: $LongPredicate$$Type): boolean
"onClose"(runnable0: $Runnable$$Type): $LongStream
"peek"(longConsumer0: $LongConsumer$$Type): $LongStream
"reduce"(long0: long, longBinaryOperator1: $LongBinaryOperator$$Type): long
"reduce"(longBinaryOperator0: $LongBinaryOperator$$Type): $OptionalLong
"sequential"(): $LongStream
"skip"(long0: long): $LongStream
"sorted"(): $LongStream
"sum"(): long
"summaryStatistics"(): $LongSummaryStatistics
"takeWhile"(longPredicate0: $LongPredicate$$Type): $LongStream
"toArray"(): long[]
"unordered"(): $LongStream
get "parallel"(): boolean
}

export namespace $LongStream {
function builder(): $LongStream$Builder
function concat(longStream0: $LongStream$$Type, longStream1: $LongStream$$Type): $LongStream
function empty(): $LongStream
function generate(longSupplier0: $LongSupplier$$Type): $LongStream
function iterate(long0: long, longUnaryOperator1: $LongUnaryOperator$$Type): $LongStream
function iterate(long0: long, longPredicate1: $LongPredicate$$Type, longUnaryOperator2: $LongUnaryOperator$$Type): $LongStream
function of(long0: long): $LongStream
function of(...long0s: long[]): $LongStream
function range(long0: long, long1: long): $LongStream
function rangeClosed(long0: long, long1: long): $LongStream
}
export abstract class $LongStream$$Static implements $LongStream {
static "builder"(): $LongStream$Builder
static "concat"(longStream0: $LongStream$$Type, longStream1: $LongStream$$Type): $LongStream
static "empty"(): $LongStream
static "generate"(longSupplier0: $LongSupplier$$Type): $LongStream
static "iterate"(long0: long, longUnaryOperator1: $LongUnaryOperator$$Type): $LongStream
static "iterate"(long0: long, longPredicate1: $LongPredicate$$Type, longUnaryOperator2: $LongUnaryOperator$$Type): $LongStream
static "of"(long0: long): $LongStream
static "of"(...long0s: long[]): $LongStream
static "range"(long0: long, long1: long): $LongStream
static "rangeClosed"(long0: long, long1: long): $LongStream
}
}

declare module "java.util.Properties" {
import { $PrintStream$$Type } from "java.io.PrintStream"
import { $PrintWriter$$Type } from "java.io.PrintWriter"
import { $OutputStream$$Type } from "java.io.OutputStream"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Enumeration } from "java.util.Enumeration"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Collection } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $Reader$$Type } from "java.io.Reader"
import { $Function$$Type } from "java.util.function.Function"
import { $Charset$$Type } from "java.nio.charset.Charset"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Writer$$Type } from "java.io.Writer"
import { $Hashtable } from "java.util.Hashtable"
import { $InputStream$$Type } from "java.io.InputStream"

export class $Properties extends $Hashtable<any, any> {
constructor(properties0: $Properties$$Type)
constructor(int0: integer)
constructor()

public "compute"(object0: any, biFunction1: $BiFunction$$Type<any, any, any>): any
public "computeIfAbsent"(object0: any, function1: $Function$$Type<any, any>): any
public "computeIfPresent"(object0: any, biFunction1: $BiFunction$$Type<any, any, any>): any
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public "elements"(): $Enumeration<any>
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "entrySet"(): $Set<$Map$Entry<any, any>>
public "get"(object0: any): any
public "getOrDefault"(object0: any, object1: any): any
public "getProperty"(string0: string): string
public "getProperty"(string0: string, string1: string): string
public "keySet"(): $Set<any>
public "keys"(): $Enumeration<any>
public "list"(printStream0: $PrintStream$$Type): void
public "list"(printWriter0: $PrintWriter$$Type): void
public "load"(reader0: $Reader$$Type): void
public "load"(inputStream0: $InputStream$$Type): void
public "loadFromXML"(inputStream0: $InputStream$$Type): void
public "merge"(object0: any, object1: any, biFunction2: $BiFunction$$Type<any, any, any>): any
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
public static "of"<K, V>(): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
public static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
public "propertyNames"(): $Enumeration<any>
public "put"(object0: any, object1: any): any
public "putIfAbsent"(object0: any, object1: any): any
public "remove"(object0: any): any
public "replace"(object0: any, object1: any): any
/** @deprecated */
public "save"(outputStream0: $OutputStream$$Type, string1: string): void
public "setProperty"(string0: string, string1: string): any
public "store"(outputStream0: $OutputStream$$Type, string1: string): void
public "store"(writer0: $Writer$$Type, string1: string): void
public "storeToXML"(outputStream0: $OutputStream$$Type, string1: string, string2: string): void
public "storeToXML"(outputStream0: $OutputStream$$Type, string1: string): void
public "storeToXML"(outputStream0: $OutputStream$$Type, string1: string, charset2: $Charset$$Type): void
public "stringPropertyNames"(): $Set<string>
public "values"(): $Collection<any>
}
}

declare module "java.util.SortedMap" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Collection } from "java.util.Collection"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Set } from "java.util.Set"
import { $Comparator } from "java.util.Comparator"
import { $Function$$Type } from "java.util.function.Function"

export interface $SortedMap<K = any, V = any> extends $Map<K, V> {
"clear"(): void
"comparator"(): $Comparator<K>
"compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
"computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
"computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
"containsKey"(object0: any): boolean
"containsValue"(object0: any): boolean
"entrySet"(): $Set<$Map$Entry<K, V>>
"equals"(object0: any): boolean
"firstKey"(): K
"forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
"get"(object0: any): V
"getOrDefault"(object0: any, v1: V): V
"hashCode"(): integer
"headMap"(k0: K): $SortedMap<K, V>
"isEmpty"(): boolean
"keySet"(): $Set<K>
"lastKey"(): K
"merge"(k0: K, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
"put"(k0: K, v1: V): V
"putAll"(map0: $Map$$Type<K, V>): void
"putIfAbsent"(k0: K, v1: V): V
"remove"(object0: any): V
"remove"(object0: any, object1: any): boolean
"replace"(k0: K, v1: V): V
"replace"(k0: K, v1: V, v2: V): boolean
"replaceAll"(biFunction0: $BiFunction$$Type<K, V, V>): void
"size"(): integer
"subMap"(k0: K, k1: K): $SortedMap<K, V>
"tailMap"(k0: K): $SortedMap<K, V>
"values"(): $Collection<V>
[index: string | number]: V
get "empty"(): boolean
}

export namespace $SortedMap {
function copyOf<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
function entry<K, V>(k0: K, v1: V): $Map$Entry<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
function of<K, V>(): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
function of<K, V>(k0: K, v1: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
function ofEntries<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
}
export abstract class $SortedMap$$Static<K = any, V = any> implements $SortedMap<K, V> {
static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
static "of"<K, V>(): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
}
}

declare module "java.util.concurrent.atomic.AtomicReference" {
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $BinaryOperator$$Type } from "java.util.function.BinaryOperator"
import { $Serializable } from "java.io.Serializable"

export class $AtomicReference<V = any> implements $Serializable {
constructor(v0: V)
constructor()

public "accumulateAndGet"(v0: V, binaryOperator1: $BinaryOperator$$Type<V>): V
public "compareAndExchange"(v0: V, v1: V): V
public "compareAndExchangeAcquire"(v0: V, v1: V): V
public "compareAndExchangeRelease"(v0: V, v1: V): V
public "compareAndSet"(v0: V, v1: V): boolean
public "get"(): V
public "getAcquire"(): V
public "getAndAccumulate"(v0: V, binaryOperator1: $BinaryOperator$$Type<V>): V
public "getAndSet"(v0: V): V
public "getAndUpdate"(unaryOperator0: $UnaryOperator$$Type<V>): V
public "getOpaque"(): V
public "getPlain"(): V
public "lazySet"(v0: V): void
public "set"(v0: V): void
public "setOpaque"(v0: V): void
public "setPlain"(v0: V): void
public "setRelease"(v0: V): void
public "updateAndGet"(unaryOperator0: $UnaryOperator$$Type<V>): V
/** @deprecated */
public "weakCompareAndSet"(v0: V, v1: V): boolean
public "weakCompareAndSetAcquire"(v0: V, v1: V): boolean
public "weakCompareAndSetPlain"(v0: V, v1: V): boolean
public "weakCompareAndSetRelease"(v0: V, v1: V): boolean
public "weakCompareAndSetVolatile"(v0: V, v1: V): boolean
get "acquire"(): V
get "opaque"(): V
get "plain"(): V
set "opaque"(value: V)
set "plain"(value: V)
set "release"(value: V)
}
}

declare module "java.util.EnumSet" {
import { $Cloneable } from "java.lang.Cloneable"
import { $Iterator } from "java.util.Iterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $AbstractSet } from "java.util.AbstractSet"
import { $Set } from "java.util.Set"
import { $Serializable } from "java.io.Serializable"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $Class$$Type } from "java.lang.Class"
import { $Spliterator } from "java.util.Spliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $EnumSet<E extends $Enum<E> = $Enum<E>> extends $AbstractSet<E> implements $Cloneable, $Serializable {
public "add"(e0: E): boolean
public "addAll"(collection0: $Collection$$Type<E>): boolean
public static "allOf"<E extends $Enum<E>>(class0: $Class$$Type<E>): $EnumSet<E>
public "clear"(): void
public static "complementOf"<E extends $Enum<E>>(enumSet0: $EnumSet$$Type<E>): $EnumSet<E>
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E extends $Enum<E>>(collection0: $Collection$$Type<E>): $EnumSet<E>
public static "copyOf"<E extends $Enum<E>>(enumSet0: $EnumSet$$Type<E>): $EnumSet<E>
public "forEach"(consumer0: $Consumer$$Type<E>): void
public "isEmpty"(): boolean
public "iterator"(): $Iterator<E>
public static "noneOf"<E extends $Enum<E>>(class0: $Class$$Type<E>): $EnumSet<E>
public static "of"<E extends $Enum<E>>(e0: E, e1: E, e2: E, e3: E, e4: E): $EnumSet<E>
public static "of"<E extends $Enum<E>>(e0: E): $EnumSet<E>
public static "of"<E extends $Enum<E>>(e0: E, e1: E, e2: E, e3: E): $EnumSet<E>
public static "of"<E extends $Enum<E>>(e0: E, e1: E, e2: E): $EnumSet<E>
public static "of"<E extends $Enum<E>>(e0: E, ...e1s: E[]): $EnumSet<E>
public static "of"<E extends $Enum<E>>(e0: E, e1: E): $EnumSet<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
public static "of"<E>(e0: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
public static "of"<E>(...e0s: E[]): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E): $Set<E>
public static "of"<E>(): $Set<E>
public static "of"<E>(e0: E, e1: E): $Set<E>
public "parallelStream"(): $Stream<E>
public static "range"<E extends $Enum<E>>(e0: E, e1: E): $EnumSet<E>
public "remove"(object0: any): boolean
public "removeIf"(predicate0: $Predicate$$Type<E>): boolean
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "size"(): integer
public "spliterator"(): $Spliterator<E>
public "stream"(): $Stream<E>
public "toArray"<T>(t0s: T[]): T[]
public "toArray"(): any[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "empty"(): boolean
}
}

declare module "java.util.UUID" {
import { $Comparable } from "java.lang.Comparable"
import { $Serializable } from "java.io.Serializable"

export class $UUID implements $Serializable, $Comparable<$UUID> {
constructor(long0: long, long1: long)

public "clockSequence"(): integer
public "compareTo"(uUID0: $UUID$$Type): integer
public static "fromString"(string0: string): $UUID
public "getLeastSignificantBits"(): long
public "getMostSignificantBits"(): long
public static "nameUUIDFromBytes"(byte0s: byte[]): $UUID
public "node"(): long
public static "randomUUID"(): $UUID
public "timestamp"(): long
public "variant"(): integer
public "version"(): integer
get "leastSignificantBits"(): long
get "mostSignificantBits"(): long
}
}

declare module "java.util.stream.IntStream$Builder" {
import { $IntStream } from "java.util.stream.IntStream"
import { $IntConsumer, $IntConsumer$$Type } from "java.util.function.IntConsumer"

export interface $IntStream$Builder extends $IntConsumer {
"accept"(int0: integer): void
"add"(int0: integer): $IntStream$Builder
"andThen"(intConsumer0: $IntConsumer$$Type): $IntConsumer
"build"(): $IntStream
}

export namespace $IntStream$Builder {
const probejs$$marker: never
}
export abstract class $IntStream$Builder$$Static implements $IntStream$Builder {
}
}

declare module "java.util.stream.Collector$Characteristics" {
import { $Enum } from "java.lang.Enum"

export class $Collector$Characteristics extends $Enum<$Collector$Characteristics> {
static readonly "CONCURRENT": $Collector$Characteristics
static readonly "IDENTITY_FINISH": $Collector$Characteristics
static readonly "UNORDERED": $Collector$Characteristics

public static "valueOf"(string0: string): $Collector$Characteristics
public static "values"(): $Collector$Characteristics[]
}
}

declare module "java.util.Spliterator$OfDouble" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Spliterator$OfPrimitive } from "java.util.Spliterator$OfPrimitive"
import { $Comparator } from "java.util.Comparator"
import { $DoubleConsumer, $DoubleConsumer$$Type } from "java.util.function.DoubleConsumer"

export interface $Spliterator$OfDouble extends $Spliterator$OfPrimitive<double, $DoubleConsumer, $Spliterator$OfDouble> {
"characteristics"(): integer
"estimateSize"(): long
"forEachRemaining"(consumer0: $Consumer$$Type<double>): void
"forEachRemaining"(doubleConsumer0: $DoubleConsumer$$Type): void
"getComparator"(): $Comparator<double>
"getExactSizeIfKnown"(): long
"hasCharacteristics"(int0: integer): boolean
"tryAdvance"(consumer0: $Consumer$$Type<double>): boolean
"tryAdvance"(doubleConsumer0: $DoubleConsumer$$Type): boolean
get "comparator"(): $Comparator<double>
get "exactSizeIfKnown"(): long
}

export namespace $Spliterator$OfDouble {
const probejs$$marker: never
}
export abstract class $Spliterator$OfDouble$$Static implements $Spliterator$OfDouble {
}
}

declare module "java.util.concurrent.locks.ReadWriteLock" {
import { $Lock } from "java.util.concurrent.locks.Lock"

export interface $ReadWriteLock {
"readLock"(): $Lock
"writeLock"(): $Lock
}

export namespace $ReadWriteLock {
const probejs$$marker: never
}
export abstract class $ReadWriteLock$$Static implements $ReadWriteLock {
}
}

declare module "java.util.Deque" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"
import { $Iterator } from "java.util.Iterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $Queue } from "java.util.Queue"
import { $Spliterator } from "java.util.Spliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $Deque<E = any> extends $Queue<E> {
"add"(e0: E): boolean
"addAll"(collection0: $Collection$$Type<E>): boolean
"addFirst"(e0: E): void
"addLast"(e0: E): void
"clear"(): void
"contains"(object0: any): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"descendingIterator"(): $Iterator<E>
"element"(): E
"equals"(object0: any): boolean
"forEach"(consumer0: $Consumer$$Type<E>): void
"getFirst"(): E
"getLast"(): E
"hashCode"(): integer
"isEmpty"(): boolean
"iterator"(): $Iterator<E>
"offer"(e0: E): boolean
"offerFirst"(e0: E): boolean
"offerLast"(e0: E): boolean
"parallelStream"(): $Stream<E>
"peek"(): E
"peekFirst"(): E
"peekLast"(): E
"poll"(): E
"pollFirst"(): E
"pollLast"(): E
"pop"(): E
"push"(e0: E): void
"remove"(): E
"remove"(object0: any): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeFirst"(): E
"removeFirstOccurrence"(object0: any): boolean
"removeIf"(predicate0: $Predicate$$Type<E>): boolean
"removeLast"(): E
"removeLastOccurrence"(object0: any): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"spliterator"(): $Spliterator<E>
"stream"(): $Stream<E>
"toArray"<T>(t0s: T[]): T[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
"toArray"(): any[]
[Symbol.iterator](): IterableIterator<E>;
get "first"(): E
get "last"(): E
get "empty"(): boolean
}

export namespace $Deque {
const probejs$$marker: never
}
export abstract class $Deque$$Static<E = any> implements $Deque<E> {
}
}

declare module "java.util.function.DoublePredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoublePredicate {
"and"(doublePredicate0: $DoublePredicate$$Type): $DoublePredicate
"negate"(): $DoublePredicate
"or"(doublePredicate0: $DoublePredicate$$Type): $DoublePredicate
"test"(double0: double): boolean
}

export namespace $DoublePredicate {
const probejs$$marker: never
}
export abstract class $DoublePredicate$$Static implements $DoublePredicate {
}
}

declare module "java.util.function.ObjIntConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ObjIntConsumer<T = any> {
"accept"(t0: T, int1: integer): void
}

export namespace $ObjIntConsumer {
const probejs$$marker: never
}
export abstract class $ObjIntConsumer$$Static<T = any> implements $ObjIntConsumer<T> {
}
}

declare module "java.util.regex.MatchResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MatchResult {
"end"(): integer
"end"(int0: integer): integer
"group"(): string
"group"(int0: integer): string
"groupCount"(): integer
"start"(): integer
"start"(int0: integer): integer
}

export namespace $MatchResult {
const probejs$$marker: never
}
export abstract class $MatchResult$$Static implements $MatchResult {
}
}

declare module "java.util.function.ToIntBiFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ToIntBiFunction<T = any, U = any> {
"applyAsInt"(t0: T, u1: U): integer
}

export namespace $ToIntBiFunction {
const probejs$$marker: never
}
export abstract class $ToIntBiFunction$$Static<T = any, U = any> implements $ToIntBiFunction<T, U> {
}
}

declare module "java.util.LinkedHashSet" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $HashSet } from "java.util.HashSet"
import { $Cloneable } from "java.lang.Cloneable"
import { $Stream } from "java.util.stream.Stream"
import { $Iterator } from "java.util.Iterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $Spliterator } from "java.util.Spliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"
import { $Serializable } from "java.io.Serializable"

export class $LinkedHashSet<E = any> extends $HashSet<E> implements $Set<E>, $Cloneable, $Serializable {
constructor(collection0: $Collection$$Type<E>)
constructor()
constructor(int0: integer)
constructor(int0: integer, float1: float)

public "add"(e0: E): boolean
public "addAll"(collection0: $Collection$$Type<E>): boolean
public "clear"(): void
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
public "equals"(object0: any): boolean
public "forEach"(consumer0: $Consumer$$Type<E>): void
public "hashCode"(): integer
public "isEmpty"(): boolean
public "iterator"(): $Iterator<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
public static "of"<E>(e0: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
public static "of"<E>(...e0s: E[]): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E): $Set<E>
public static "of"<E>(): $Set<E>
public static "of"<E>(e0: E, e1: E): $Set<E>
public "parallelStream"(): $Stream<E>
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<E>): boolean
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "size"(): integer
public "spliterator"(): $Spliterator<E>
public "stream"(): $Stream<E>
public "toArray"<T>(t0s: T[]): T[]
public "toArray"(): any[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "empty"(): boolean
}
}

declare module "java.util.Locale$IsoCountryCode" {
import { $Enum } from "java.lang.Enum"

export class $Locale$IsoCountryCode extends $Enum<$Locale$IsoCountryCode> {
static readonly "PART1_ALPHA2": $Locale$IsoCountryCode
static readonly "PART1_ALPHA3": $Locale$IsoCountryCode
static readonly "PART3": $Locale$IsoCountryCode

public static "valueOf"(string0: string): $Locale$IsoCountryCode
public static "values"(): $Locale$IsoCountryCode[]
}
}

declare module "java.util.concurrent.atomic.AtomicLong" {
import { $LongBinaryOperator$$Type } from "java.util.function.LongBinaryOperator"
import { $LongUnaryOperator$$Type } from "java.util.function.LongUnaryOperator"
import { $Number } from "java.lang.Number"
import { $Serializable } from "java.io.Serializable"

export class $AtomicLong extends $Number implements $Serializable {
constructor(long0: long)
constructor()

public "accumulateAndGet"(long0: long, longBinaryOperator1: $LongBinaryOperator$$Type): long
public "addAndGet"(long0: long): long
public "compareAndExchange"(long0: long, long1: long): long
public "compareAndExchangeAcquire"(long0: long, long1: long): long
public "compareAndExchangeRelease"(long0: long, long1: long): long
public "compareAndSet"(long0: long, long1: long): boolean
public "decrementAndGet"(): long
public "get"(): long
public "getAcquire"(): long
public "getAndAccumulate"(long0: long, longBinaryOperator1: $LongBinaryOperator$$Type): long
public "getAndAdd"(long0: long): long
public "getAndDecrement"(): long
public "getAndIncrement"(): long
public "getAndSet"(long0: long): long
public "getAndUpdate"(longUnaryOperator0: $LongUnaryOperator$$Type): long
public "getOpaque"(): long
public "getPlain"(): long
public "incrementAndGet"(): long
public "lazySet"(long0: long): void
public "set"(long0: long): void
public "setOpaque"(long0: long): void
public "setPlain"(long0: long): void
public "setRelease"(long0: long): void
public "updateAndGet"(longUnaryOperator0: $LongUnaryOperator$$Type): long
/** @deprecated */
public "weakCompareAndSet"(long0: long, long1: long): boolean
public "weakCompareAndSetAcquire"(long0: long, long1: long): boolean
public "weakCompareAndSetPlain"(long0: long, long1: long): boolean
public "weakCompareAndSetRelease"(long0: long, long1: long): boolean
public "weakCompareAndSetVolatile"(long0: long, long1: long): boolean
get "acquire"(): long
get "andDecrement"(): long
get "andIncrement"(): long
get "opaque"(): long
get "plain"(): long
set "opaque"(value: long)
set "plain"(value: long)
set "release"(value: long)
}
}

declare module "java.util.function.LongUnaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongUnaryOperator {
"andThen"(longUnaryOperator0: $LongUnaryOperator$$Type): $LongUnaryOperator
"applyAsLong"(long0: long): long
"compose"(longUnaryOperator0: $LongUnaryOperator$$Type): $LongUnaryOperator
}

export namespace $LongUnaryOperator {
function identity(): $LongUnaryOperator
}
export abstract class $LongUnaryOperator$$Static implements $LongUnaryOperator {
static "identity"(): $LongUnaryOperator
}
}

declare module "java.util.ListIterator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Iterator } from "java.util.Iterator"

export interface $ListIterator<E = any> extends $Iterator<E> {
"add"(e0: E): void
"forEachRemaining"(consumer0: $Consumer$$Type<E>): void
"hasNext"(): boolean
"hasPrevious"(): boolean
"next"(): E
"nextIndex"(): integer
"previous"(): E
"previousIndex"(): integer
"remove"(): void
"set"(e0: E): void
}

export namespace $ListIterator {
const probejs$$marker: never
}
export abstract class $ListIterator$$Static<E = any> implements $ListIterator<E> {
}
}

declare module "java.util.Spliterator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Comparator } from "java.util.Comparator"

export interface $Spliterator<T = any> {
"characteristics"(): integer
"estimateSize"(): long
"forEachRemaining"(consumer0: $Consumer$$Type<T>): void
"getComparator"(): $Comparator<T>
"getExactSizeIfKnown"(): long
"hasCharacteristics"(int0: integer): boolean
"tryAdvance"(consumer0: $Consumer$$Type<T>): boolean
"trySplit"(): $Spliterator<T>
get "comparator"(): $Comparator<T>
get "exactSizeIfKnown"(): long
}

export namespace $Spliterator {
const CONCURRENT: integer
const DISTINCT: integer
const IMMUTABLE: integer
const NONNULL: integer
const ORDERED: integer
const SIZED: integer
const SORTED: integer
const SUBSIZED: integer
}
export abstract class $Spliterator$$Static<T = any> implements $Spliterator<T> {
static readonly "CONCURRENT": integer
static readonly "DISTINCT": integer
static readonly "IMMUTABLE": integer
static readonly "NONNULL": integer
static readonly "ORDERED": integer
static readonly "SIZED": integer
static readonly "SORTED": integer
static readonly "SUBSIZED": integer

}
}

declare module "java.util.Stack" {
import { $List } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $Vector } from "java.util.Vector"
import { $Collection$$Type } from "java.util.Collection"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $Stack<E = any> extends $Vector<E> {
constructor()

public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "empty"(): boolean
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E): $List<E>
public static "of"<E>(e0: E, e1: E): $List<E>
public static "of"<E>(e0: E): $List<E>
public static "of"<E>(): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(...e0s: E[]): $List<E>
public "parallelStream"(): $Stream<E>
public "peek"(): E
public "pop"(): E
public "push"(e0: E): E
public "search"(object0: any): integer
public "stream"(): $Stream<E>
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
}
}

declare module "java.util.concurrent.ConcurrentMap" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Collection } from "java.util.Collection"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Set } from "java.util.Set"
import { $Function$$Type } from "java.util.function.Function"

export interface $ConcurrentMap<K = any, V = any> extends $Map<K, V> {
"clear"(): void
"compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
"computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
"computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
"containsKey"(object0: any): boolean
"containsValue"(object0: any): boolean
"entrySet"(): $Set<$Map$Entry<K, V>>
"equals"(object0: any): boolean
"forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
"get"(object0: any): V
"getOrDefault"(object0: any, v1: V): V
"hashCode"(): integer
"isEmpty"(): boolean
"keySet"(): $Set<K>
"merge"(k0: K, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
"put"(k0: K, v1: V): V
"putAll"(map0: $Map$$Type<K, V>): void
"putIfAbsent"(k0: K, v1: V): V
"remove"(object0: any, object1: any): boolean
"remove"(object0: any): V
"replace"(k0: K, v1: V, v2: V): boolean
"replace"(k0: K, v1: V): V
"replaceAll"(biFunction0: $BiFunction$$Type<K, V, V>): void
"size"(): integer
"values"(): $Collection<V>
[index: string | number]: V
get "empty"(): boolean
}

export namespace $ConcurrentMap {
function copyOf<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
function entry<K, V>(k0: K, v1: V): $Map$Entry<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
function of<K, V>(): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
function of<K, V>(k0: K, v1: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
function ofEntries<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
}
export abstract class $ConcurrentMap$$Static<K = any, V = any> implements $ConcurrentMap<K, V> {
static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
static "of"<K, V>(): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
}
}

declare module "java.util.concurrent.locks.Condition" {
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $Date$$Type } from "java.util.Date"

export interface $Condition {
"await"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"await"(): void
"awaitNanos"(long0: long): long
"awaitUninterruptibly"(): void
"awaitUntil"(date0: $Date$$Type): boolean
"signal"(): void
"signalAll"(): void
}

export namespace $Condition {
const probejs$$marker: never
}
export abstract class $Condition$$Static implements $Condition {
}
}

declare module "java.util.Comparator" {
import { $ToDoubleFunction$$Type } from "java.util.function.ToDoubleFunction"
import { $ToIntFunction$$Type } from "java.util.function.ToIntFunction"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $ToLongFunction$$Type } from "java.util.function.ToLongFunction"
import { $Function$$Type } from "java.util.function.Function"

export interface $Comparator<T = any> {
"compare"(t0: T, t1: T): integer
"equals"(object0: any): boolean
"reversed"(): $Comparator<T>
"thenComparing"(comparator0: $Comparator$$Type<T>): $Comparator<T>
"thenComparing"<U>(function0: $Function$$Type<T, U>, comparator1: $Comparator$$Type<U>): $Comparator<T>
"thenComparing"<U extends $Comparable<U>>(function0: $Function$$Type<T, U>): $Comparator<T>
"thenComparingDouble"(toDoubleFunction0: $ToDoubleFunction$$Type<T>): $Comparator<T>
"thenComparingInt"(toIntFunction0: $ToIntFunction$$Type<T>): $Comparator<T>
"thenComparingLong"(toLongFunction0: $ToLongFunction$$Type<T>): $Comparator<T>
}

export namespace $Comparator {
function comparing<T, U extends $Comparable<U>>(function0: $Function$$Type<T, U>): $Comparator<T>
function comparing<T, U>(function0: $Function$$Type<T, U>, comparator1: $Comparator$$Type<U>): $Comparator<T>
function comparingDouble<T>(toDoubleFunction0: $ToDoubleFunction$$Type<T>): $Comparator<T>
function comparingInt<T>(toIntFunction0: $ToIntFunction$$Type<T>): $Comparator<T>
function comparingLong<T>(toLongFunction0: $ToLongFunction$$Type<T>): $Comparator<T>
function naturalOrder<T extends $Comparable<T>>(): $Comparator<T>
function nullsFirst<T>(comparator0: $Comparator$$Type<T>): $Comparator<T>
function nullsLast<T>(comparator0: $Comparator$$Type<T>): $Comparator<T>
function reverseOrder<T extends $Comparable<T>>(): $Comparator<T>
}
export abstract class $Comparator$$Static<T = any> implements $Comparator<T> {
static "comparing"<T, U extends $Comparable<U>>(function0: $Function$$Type<T, U>): $Comparator<T>
static "comparing"<T, U>(function0: $Function$$Type<T, U>, comparator1: $Comparator$$Type<U>): $Comparator<T>
static "comparingDouble"<T>(toDoubleFunction0: $ToDoubleFunction$$Type<T>): $Comparator<T>
static "comparingInt"<T>(toIntFunction0: $ToIntFunction$$Type<T>): $Comparator<T>
static "comparingLong"<T>(toLongFunction0: $ToLongFunction$$Type<T>): $Comparator<T>
static "naturalOrder"<T extends $Comparable<T>>(): $Comparator<T>
static "nullsFirst"<T>(comparator0: $Comparator$$Type<T>): $Comparator<T>
static "nullsLast"<T>(comparator0: $Comparator$$Type<T>): $Comparator<T>
static "reverseOrder"<T extends $Comparable<T>>(): $Comparator<T>
}
}

declare module "java.util.DoubleSummaryStatistics" {
import { $DoubleConsumer, $DoubleConsumer$$Type } from "java.util.function.DoubleConsumer"

export class $DoubleSummaryStatistics implements $DoubleConsumer {
constructor()
constructor(long0: long, double1: double, double2: double, double3: double)

public "accept"(double0: double): void
public "andThen"(doubleConsumer0: $DoubleConsumer$$Type): $DoubleConsumer
public "combine"(doubleSummaryStatistics0: $DoubleSummaryStatistics$$Type): void
public "getAverage"(): double
public "getCount"(): long
public "getMax"(): double
public "getMin"(): double
public "getSum"(): double
get "average"(): double
get "count"(): long
get "max"(): double
get "min"(): double
get "sum"(): double
}
}

declare module "java.util.random.RandomGenerator" {
import { $IntStream } from "java.util.stream.IntStream"
import { $LongStream } from "java.util.stream.LongStream"
import { $DoubleStream } from "java.util.stream.DoubleStream"

export interface $RandomGenerator {
"doubles"(long0: long): $DoubleStream
"doubles"(double0: double, double1: double): $DoubleStream
"doubles"(long0: long, double1: double, double2: double): $DoubleStream
"doubles"(): $DoubleStream
"ints"(int0: integer, int1: integer): $IntStream
"ints"(long0: long): $IntStream
"ints"(long0: long, int1: integer, int2: integer): $IntStream
"ints"(): $IntStream
"isDeprecated"(): boolean
"longs"(): $LongStream
"longs"(long0: long): $LongStream
"longs"(long0: long, long1: long): $LongStream
"longs"(long0: long, long1: long, long2: long): $LongStream
"nextBoolean"(): boolean
"nextBytes"(byte0s: byte[]): void
"nextDouble"(double0: double, double1: double): double
"nextDouble"(double0: double): double
"nextDouble"(): double
"nextExponential"(): double
"nextFloat"(float0: float, float1: float): float
"nextFloat"(): float
"nextFloat"(float0: float): float
"nextGaussian"(double0: double, double1: double): double
"nextGaussian"(): double
"nextInt"(int0: integer, int1: integer): integer
"nextInt"(int0: integer): integer
"nextInt"(): integer
"nextLong"(): long
"nextLong"(long0: long): long
"nextLong"(long0: long, long1: long): long
get "deprecated"(): boolean
}

export namespace $RandomGenerator {
function getDefault(): $RandomGenerator
function of(string0: string): $RandomGenerator
}
export abstract class $RandomGenerator$$Static implements $RandomGenerator {
static "getDefault"(): $RandomGenerator
static "of"(string0: string): $RandomGenerator
}
}

declare module "java.util.Locale$LanguageRange" {
import { $List, $List$$Type } from "java.util.List"
import { $Map$$Type } from "java.util.Map"

export class $Locale$LanguageRange {
static readonly "MAX_WEIGHT": double
static readonly "MIN_WEIGHT": double

constructor(string0: string)
constructor(string0: string, double1: double)

public "getRange"(): string
public "getWeight"(): double
public static "mapEquivalents"(list0: $List$$Type<$Locale$LanguageRange$$Type>, map1: $Map$$Type<string, $List$$Type<string>>): $List<$Locale$LanguageRange>
public static "parse"(string0: string, map1: $Map$$Type<string, $List$$Type<string>>): $List<$Locale$LanguageRange>
public static "parse"(string0: string): $List<$Locale$LanguageRange>
get "range"(): string
get "weight"(): double
}
}

declare module "java.util.regex.Pattern" {
import { $Matcher } from "java.util.regex.Matcher"
import { $Stream } from "java.util.stream.Stream"
import { $Predicate } from "java.util.function.Predicate"
import { $Serializable } from "java.io.Serializable"

export class $Pattern implements $Serializable {
static readonly "CANON_EQ": integer
static readonly "CASE_INSENSITIVE": integer
static readonly "COMMENTS": integer
static readonly "DOTALL": integer
static readonly "LITERAL": integer
static readonly "MULTILINE": integer
static readonly "UNICODE_CASE": integer
static readonly "UNICODE_CHARACTER_CLASS": integer
static readonly "UNIX_LINES": integer

public "asMatchPredicate"(): $Predicate<string>
public "asPredicate"(): $Predicate<string>
public static "compile"(string0: string, int1: integer): $Pattern
public static "compile"(string0: string): $Pattern
public "flags"(): integer
public "matcher"(charSequence0: charseq): $Matcher
public static "matches"(string0: string, charSequence1: charseq): boolean
public "pattern"(): string
public static "quote"(string0: string): string
public "split"(charSequence0: charseq, int1: integer): string[]
public "split"(charSequence0: charseq): string[]
public "splitAsStream"(charSequence0: charseq): $Stream<string>
}
}

declare module "java.util.LongSummaryStatistics" {
import { $IntConsumer, $IntConsumer$$Type } from "java.util.function.IntConsumer"
import { $LongConsumer, $LongConsumer$$Type } from "java.util.function.LongConsumer"

export class $LongSummaryStatistics implements $LongConsumer, $IntConsumer {
constructor()
constructor(long0: long, long1: long, long2: long, long3: long)

public "accept"(int0: integer): void
public "accept"(long0: long): void
public "andThen"(longConsumer0: $LongConsumer$$Type): $LongConsumer
public "andThen"(intConsumer0: $IntConsumer$$Type): $IntConsumer
public "combine"(longSummaryStatistics0: $LongSummaryStatistics$$Type): void
public "getAverage"(): double
public "getCount"(): long
public "getMax"(): long
public "getMin"(): long
public "getSum"(): long
get "average"(): double
get "count"(): long
get "max"(): long
get "min"(): long
get "sum"(): long
}
}

declare module "java.util.Map" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Collection } from "java.util.Collection"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Set } from "java.util.Set"
import { $Function$$Type } from "java.util.function.Function"

export interface $Map<K = any, V = any> {
"clear"(): void
"compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
"computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
"computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
"containsKey"(object0: any): boolean
"containsValue"(object0: any): boolean
"entrySet"(): $Set<$Map$Entry<K, V>>
"equals"(object0: any): boolean
"forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
"get"(object0: any): V
"getOrDefault"(object0: any, v1: V): V
"hashCode"(): integer
"isEmpty"(): boolean
"keySet"(): $Set<K>
"merge"(k0: K, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
"put"(k0: K, v1: V): V
"putAll"(map0: $Map$$Type<K, V>): void
"putIfAbsent"(k0: K, v1: V): V
"remove"(object0: any): V
"remove"(object0: any, object1: any): boolean
"replace"(k0: K, v1: V): V
"replace"(k0: K, v1: V, v2: V): boolean
"replaceAll"(biFunction0: $BiFunction$$Type<K, V, V>): void
"size"(): integer
"values"(): $Collection<V>
[index: string | number]: V
get "empty"(): boolean
}

export namespace $Map {
function copyOf<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
function entry<K, V>(k0: K, v1: V): $Map$Entry<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
function of<K, V>(): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
function of<K, V>(k0: K, v1: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
function ofEntries<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
}
export abstract class $Map$$Static<K = any, V = any> implements $Map<K, V> {
static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
static "of"<K, V>(): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
}
}

declare module "java.util.stream.Stream" {
import { $IntStream } from "java.util.stream.IntStream"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $IntConsumer$$Type } from "java.util.function.IntConsumer"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $DoubleConsumer$$Type } from "java.util.function.DoubleConsumer"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $Stream$Builder } from "java.util.stream.Stream$Builder"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Collector$$Type } from "java.util.stream.Collector"
import { $ToLongFunction$$Type } from "java.util.function.ToLongFunction"
import { $IntFunction$$Type } from "java.util.function.IntFunction"
import { $LongStream } from "java.util.stream.LongStream"
import { $Iterator } from "java.util.Iterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ToIntFunction$$Type } from "java.util.function.ToIntFunction"
import { $BinaryOperator$$Type } from "java.util.function.BinaryOperator"
import { $DoubleStream } from "java.util.stream.DoubleStream"
import { $LongConsumer$$Type } from "java.util.function.LongConsumer"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $ToDoubleFunction$$Type } from "java.util.function.ToDoubleFunction"
import { $Optional } from "java.util.Optional"
import { $BaseStream } from "java.util.stream.BaseStream"
import { $Comparator$$Type } from "java.util.Comparator"
import { $Spliterator } from "java.util.Spliterator"

export interface $Stream<T = any> extends $BaseStream<T, $Stream<T>> {
"allMatch"(predicate0: $Predicate$$Type<T>): boolean
"anyMatch"(predicate0: $Predicate$$Type<T>): boolean
"close"(): void
"collect"<R, A>(collector0: $Collector$$Type<T, A, R>): R
"collect"<R>(supplier0: $Supplier$$Type<R>, biConsumer1: $BiConsumer$$Type<R, T>, biConsumer2: $BiConsumer$$Type<R, R>): R
"count"(): long
"distinct"(): $Stream<T>
"dropWhile"(predicate0: $Predicate$$Type<T>): $Stream<T>
"filter"(predicate0: $Predicate$$Type<T>): $Stream<T>
"findAny"(): $Optional<T>
"findFirst"(): $Optional<T>
"flatMap"<R>(function0: $Function$$Type<T, $Stream<R>>): $Stream<R>
"flatMapToDouble"(function0: $Function$$Type<T, $DoubleStream>): $DoubleStream
"flatMapToInt"(function0: $Function$$Type<T, $IntStream>): $IntStream
"flatMapToLong"(function0: $Function$$Type<T, $LongStream>): $LongStream
"forEach"(consumer0: $Consumer$$Type<T>): void
"forEachOrdered"(consumer0: $Consumer$$Type<T>): void
"isParallel"(): boolean
"iterator"(): $Iterator<T>
"limit"(long0: long): $Stream<T>
"map"<R>(function0: $Function$$Type<T, R>): $Stream<R>
"mapMulti"<R>(biConsumer0: $BiConsumer$$Type<T, $Consumer$$Type<R>>): $Stream<R>
"mapMultiToDouble"(biConsumer0: $BiConsumer$$Type<T, $DoubleConsumer$$Type>): $DoubleStream
"mapMultiToInt"(biConsumer0: $BiConsumer$$Type<T, $IntConsumer$$Type>): $IntStream
"mapMultiToLong"(biConsumer0: $BiConsumer$$Type<T, $LongConsumer$$Type>): $LongStream
"mapToDouble"(toDoubleFunction0: $ToDoubleFunction$$Type<T>): $DoubleStream
"mapToInt"(toIntFunction0: $ToIntFunction$$Type<T>): $IntStream
"mapToLong"(toLongFunction0: $ToLongFunction$$Type<T>): $LongStream
"max"(comparator0: $Comparator$$Type<T>): $Optional<T>
"min"(comparator0: $Comparator$$Type<T>): $Optional<T>
"noneMatch"(predicate0: $Predicate$$Type<T>): boolean
"onClose"(runnable0: $Runnable$$Type): $Stream<T>
"parallel"(): $Stream<T>
"peek"(consumer0: $Consumer$$Type<T>): $Stream<T>
"reduce"(binaryOperator0: $BinaryOperator$$Type<T>): $Optional<T>
"reduce"(t0: T, binaryOperator1: $BinaryOperator$$Type<T>): T
"reduce"<U>(u0: U, biFunction1: $BiFunction$$Type<U, T, U>, binaryOperator2: $BinaryOperator$$Type<U>): U
"sequential"(): $Stream<T>
"skip"(long0: long): $Stream<T>
"sorted"(): $Stream<T>
"sorted"(comparator0: $Comparator$$Type<T>): $Stream<T>
"spliterator"(): $Spliterator<T>
"takeWhile"(predicate0: $Predicate$$Type<T>): $Stream<T>
"toArray"(): any[]
"toArray"<A>(intFunction0: $IntFunction$$Type<A[]>): A[]
"toList"(): $List<T>
"unordered"(): $Stream<T>
}

export namespace $Stream {
function builder<T>(): $Stream$Builder<T>
function concat<T>(stream0: $Stream$$Type<T>, stream1: $Stream$$Type<T>): $Stream<T>
function empty<T>(): $Stream<T>
function generate<T>(supplier0: $Supplier$$Type<T>): $Stream<T>
function iterate<T>(t0: T, predicate1: $Predicate$$Type<T>, unaryOperator2: $UnaryOperator$$Type<T>): $Stream<T>
function iterate<T>(t0: T, unaryOperator1: $UnaryOperator$$Type<T>): $Stream<T>
function of<T>(t0: T): $Stream<T>
function of<T>(...t0s: T[]): $Stream<T>
function ofNullable<T>(t0: T): $Stream<T>
}
export abstract class $Stream$$Static<T = any> implements $Stream<T> {
static "builder"<T>(): $Stream$Builder<T>
static "concat"<T>(stream0: $Stream$$Type<T>, stream1: $Stream$$Type<T>): $Stream<T>
static "empty"<T>(): $Stream<T>
static "generate"<T>(supplier0: $Supplier$$Type<T>): $Stream<T>
static "iterate"<T>(t0: T, predicate1: $Predicate$$Type<T>, unaryOperator2: $UnaryOperator$$Type<T>): $Stream<T>
static "iterate"<T>(t0: T, unaryOperator1: $UnaryOperator$$Type<T>): $Stream<T>
static "of"<T>(t0: T): $Stream<T>
static "of"<T>(...t0s: T[]): $Stream<T>
static "ofNullable"<T>(t0: T): $Stream<T>
}
}

declare module "java.util.concurrent.ConcurrentHashMap" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Enumeration } from "java.util.Enumeration"
import { $LongBinaryOperator$$Type } from "java.util.function.LongBinaryOperator"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Collection } from "java.util.Collection"
import { $ToIntFunction$$Type } from "java.util.function.ToIntFunction"
import { $Set } from "java.util.Set"
import { $IntBinaryOperator$$Type } from "java.util.function.IntBinaryOperator"
import { $Function$$Type } from "java.util.function.Function"
import { $ConcurrentMap } from "java.util.concurrent.ConcurrentMap"
import { $Serializable } from "java.io.Serializable"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ToDoubleBiFunction$$Type } from "java.util.function.ToDoubleBiFunction"
import { $ToLongBiFunction$$Type } from "java.util.function.ToLongBiFunction"
import { $DoubleBinaryOperator$$Type } from "java.util.function.DoubleBinaryOperator"
import { $AbstractMap } from "java.util.AbstractMap"
import { $ToIntBiFunction$$Type } from "java.util.function.ToIntBiFunction"
import { $ConcurrentHashMap$KeySetView } from "java.util.concurrent.ConcurrentHashMap$KeySetView"
import { $ToDoubleFunction$$Type } from "java.util.function.ToDoubleFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $ToLongFunction$$Type } from "java.util.function.ToLongFunction"

export class $ConcurrentHashMap<K = any, V = any> extends $AbstractMap<K, V> implements $ConcurrentMap<K, V>, $Serializable {
constructor(int0: integer)
constructor(map0: $Map$$Type<K, V>)
constructor(int0: integer, float1: float)
constructor(int0: integer, float1: float, int2: integer)
constructor()

public "compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public "computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
public "computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public "contains"(object0: any): boolean
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public "elements"(): $Enumeration<V>
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "entrySet"(): $Set<$Map$Entry<K, V>>
public "forEach"(long0: long, biConsumer1: $BiConsumer$$Type<K, V>): void
public "forEach"<U>(long0: long, biFunction1: $BiFunction$$Type<K, V, U>, consumer2: $Consumer$$Type<U>): void
public "forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
public "forEachEntry"(long0: long, consumer1: $Consumer$$Type<$Map$Entry$$Type<K, V>>): void
public "forEachEntry"<U>(long0: long, function1: $Function$$Type<$Map$Entry$$Type<K, V>, U>, consumer2: $Consumer$$Type<U>): void
public "forEachKey"(long0: long, consumer1: $Consumer$$Type<K>): void
public "forEachKey"<U>(long0: long, function1: $Function$$Type<K, U>, consumer2: $Consumer$$Type<U>): void
public "forEachValue"<U>(long0: long, function1: $Function$$Type<V, U>, consumer2: $Consumer$$Type<U>): void
public "forEachValue"(long0: long, consumer1: $Consumer$$Type<V>): void
public "get"(object0: any): V
public "getOrDefault"(object0: any, v1: V): V
public "keySet"(v0: V): $ConcurrentHashMap$KeySetView<K, V>
public "keys"(): $Enumeration<K>
public "mappingCount"(): long
public "merge"(k0: K, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
public static "newKeySet"<K>(int0: integer): $ConcurrentHashMap$KeySetView<K, boolean>
public static "newKeySet"<K>(): $ConcurrentHashMap$KeySetView<K, boolean>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
public static "of"<K, V>(): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
public static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
public "put"(k0: K, v1: V): V
public "putIfAbsent"(k0: K, v1: V): V
public "reduce"<U>(long0: long, biFunction1: $BiFunction$$Type<K, V, U>, biFunction2: $BiFunction$$Type<U, U, U>): U
public "reduceEntries"(long0: long, biFunction1: $BiFunction$$Type<$Map$Entry$$Type<K, V>, $Map$Entry$$Type<K, V>, $Map$Entry<K, V>>): $Map$Entry<K, V>
public "reduceEntries"<U>(long0: long, function1: $Function$$Type<$Map$Entry$$Type<K, V>, U>, biFunction2: $BiFunction$$Type<U, U, U>): U
public "reduceEntriesToDouble"(long0: long, toDoubleFunction1: $ToDoubleFunction$$Type<$Map$Entry$$Type<K, V>>, double2: double, doubleBinaryOperator3: $DoubleBinaryOperator$$Type): double
public "reduceEntriesToInt"(long0: long, toIntFunction1: $ToIntFunction$$Type<$Map$Entry$$Type<K, V>>, int2: integer, intBinaryOperator3: $IntBinaryOperator$$Type): integer
public "reduceEntriesToLong"(long0: long, toLongFunction1: $ToLongFunction$$Type<$Map$Entry$$Type<K, V>>, long2: long, longBinaryOperator3: $LongBinaryOperator$$Type): long
public "reduceKeys"(long0: long, biFunction1: $BiFunction$$Type<K, K, K>): K
public "reduceKeys"<U>(long0: long, function1: $Function$$Type<K, U>, biFunction2: $BiFunction$$Type<U, U, U>): U
public "reduceKeysToDouble"(long0: long, toDoubleFunction1: $ToDoubleFunction$$Type<K>, double2: double, doubleBinaryOperator3: $DoubleBinaryOperator$$Type): double
public "reduceKeysToInt"(long0: long, toIntFunction1: $ToIntFunction$$Type<K>, int2: integer, intBinaryOperator3: $IntBinaryOperator$$Type): integer
public "reduceKeysToLong"(long0: long, toLongFunction1: $ToLongFunction$$Type<K>, long2: long, longBinaryOperator3: $LongBinaryOperator$$Type): long
public "reduceToDouble"(long0: long, toDoubleBiFunction1: $ToDoubleBiFunction$$Type<K, V>, double2: double, doubleBinaryOperator3: $DoubleBinaryOperator$$Type): double
public "reduceToInt"(long0: long, toIntBiFunction1: $ToIntBiFunction$$Type<K, V>, int2: integer, intBinaryOperator3: $IntBinaryOperator$$Type): integer
public "reduceToLong"(long0: long, toLongBiFunction1: $ToLongBiFunction$$Type<K, V>, long2: long, longBinaryOperator3: $LongBinaryOperator$$Type): long
public "reduceValues"(long0: long, biFunction1: $BiFunction$$Type<V, V, V>): V
public "reduceValues"<U>(long0: long, function1: $Function$$Type<V, U>, biFunction2: $BiFunction$$Type<U, U, U>): U
public "reduceValuesToDouble"(long0: long, toDoubleFunction1: $ToDoubleFunction$$Type<V>, double2: double, doubleBinaryOperator3: $DoubleBinaryOperator$$Type): double
public "reduceValuesToInt"(long0: long, toIntFunction1: $ToIntFunction$$Type<V>, int2: integer, intBinaryOperator3: $IntBinaryOperator$$Type): integer
public "reduceValuesToLong"(long0: long, toLongFunction1: $ToLongFunction$$Type<V>, long2: long, longBinaryOperator3: $LongBinaryOperator$$Type): long
public "remove"(object0: any): V
public "remove"(object0: any, object1: any): boolean
public "replace"(k0: K, v1: V): V
public "replace"(k0: K, v1: V, v2: V): boolean
public "replaceAll"(biFunction0: $BiFunction$$Type<K, V, V>): void
public "search"<U>(long0: long, biFunction1: $BiFunction$$Type<K, V, U>): U
public "searchEntries"<U>(long0: long, function1: $Function$$Type<$Map$Entry$$Type<K, V>, U>): U
public "searchKeys"<U>(long0: long, function1: $Function$$Type<K, U>): U
public "searchValues"<U>(long0: long, function1: $Function$$Type<V, U>): U
public "values"(): $Collection<V>
}
}

declare module "java.util.concurrent.CompletableFuture" {
import { $Throwable$$Type } from "java.lang.Throwable"
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Future } from "java.util.concurrent.Future"
import { $CompletionStage, $CompletionStage$$Type } from "java.util.concurrent.CompletionStage"
import { $Executor, $Executor$$Type } from "java.util.concurrent.Executor"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Function$$Type } from "java.util.function.Function"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Runnable$$Type } from "java.lang.Runnable"

export class $CompletableFuture<T = any> implements $Future<T>, $CompletionStage<T> {
constructor()

public static "allOf"(...completableFuture0s: $CompletableFuture$$Type<any>[]): $CompletableFuture<void>
public static "anyOf"(...completableFuture0s: $CompletableFuture$$Type<any>[]): $CompletableFuture<any>
public "applyToEither"<U>(completionStage0: $CompletionStage$$Type<T>, function1: $Function$$Type<T, U>): $CompletableFuture<U>
public "cancel"(boolean0: boolean): boolean
public "complete"(t0: T): boolean
public "completeAsync"(supplier0: $Supplier$$Type<T>): $CompletableFuture<T>
public "completeAsync"(supplier0: $Supplier$$Type<T>, executor1: $Executor$$Type): $CompletableFuture<T>
public "completeExceptionally"(throwable0: $Throwable$$Type): boolean
public "completeOnTimeout"(t0: T, long1: long, timeUnit2: $TimeUnit$$Type): $CompletableFuture<T>
public static "completedFuture"<U>(u0: U): $CompletableFuture<U>
public static "completedStage"<U>(u0: U): $CompletionStage<U>
public "copy"(): $CompletableFuture<T>
public "defaultExecutor"(): $Executor
public static "delayedExecutor"(long0: long, timeUnit1: $TimeUnit$$Type, executor2: $Executor$$Type): $Executor
public static "delayedExecutor"(long0: long, timeUnit1: $TimeUnit$$Type): $Executor
public "exceptionallyAsync"(function0: $Function$$Type<$Throwable$$Type, T>, executor1: $Executor$$Type): $CompletableFuture<T>
public "exceptionallyAsync"(function0: $Function$$Type<$Throwable$$Type, T>): $CompletableFuture<T>
public "exceptionallyComposeAsync"(function0: $Function$$Type<$Throwable$$Type, $CompletionStage<T>>): $CompletableFuture<T>
public static "failedFuture"<U>(throwable0: $Throwable$$Type): $CompletableFuture<U>
public static "failedStage"<U>(throwable0: $Throwable$$Type): $CompletionStage<U>
public "get"(): T
public "get"(long0: long, timeUnit1: $TimeUnit$$Type): T
public "getNow"(t0: T): T
public "getNumberOfDependents"(): integer
public "handle"<U>(biFunction0: $BiFunction$$Type<T, $Throwable$$Type, U>): $CompletableFuture<U>
public "isCancelled"(): boolean
public "isCompletedExceptionally"(): boolean
public "isDone"(): boolean
public "join"(): T
public "minimalCompletionStage"(): $CompletionStage<T>
public "newIncompleteFuture"<U>(): $CompletableFuture<U>
public "obtrudeException"(throwable0: $Throwable$$Type): void
public "obtrudeValue"(t0: T): void
public "orTimeout"(long0: long, timeUnit1: $TimeUnit$$Type): $CompletableFuture<T>
public static "runAsync"(runnable0: $Runnable$$Type): $CompletableFuture<void>
public static "runAsync"(runnable0: $Runnable$$Type, executor1: $Executor$$Type): $CompletableFuture<void>
public static "supplyAsync"<U>(supplier0: $Supplier$$Type<U>, executor1: $Executor$$Type): $CompletableFuture<U>
public static "supplyAsync"<U>(supplier0: $Supplier$$Type<U>): $CompletableFuture<U>
public "thenAccept"(consumer0: $Consumer$$Type<T>): $CompletableFuture<void>
public "thenAcceptAsync"(consumer0: $Consumer$$Type<T>): $CompletableFuture<void>
public "thenAcceptAsync"(consumer0: $Consumer$$Type<T>, executor1: $Executor$$Type): $CompletableFuture<void>
public "thenApplyAsync"<U>(function0: $Function$$Type<T, U>, executor1: $Executor$$Type): $CompletableFuture<U>
public "thenCombine"<U, V>(completionStage0: $CompletionStage$$Type<U>, biFunction1: $BiFunction$$Type<T, U, V>): $CompletableFuture<V>
public "thenRunAsync"(runnable0: $Runnable$$Type): $CompletableFuture<void>
public "toCompletableFuture"(): $CompletableFuture<T>
public "whenComplete"(biConsumer0: $BiConsumer$$Type<T, $Throwable$$Type>): $CompletableFuture<T>
public "whenCompleteAsync"(biConsumer0: $BiConsumer$$Type<T, $Throwable$$Type>): $CompletableFuture<T>
get "numberOfDependents"(): integer
get "cancelled"(): boolean
get "completedExceptionally"(): boolean
get "done"(): boolean
}
}

declare module "java.util.regex.Matcher" {
import { $Stream } from "java.util.stream.Stream"
import { $StringBuffer, $StringBuffer$$Type } from "java.lang.StringBuffer"
import { $MatchResult, $MatchResult$$Type } from "java.util.regex.MatchResult"
import { $StringBuilder, $StringBuilder$$Type } from "java.lang.StringBuilder"
import { $Pattern, $Pattern$$Type } from "java.util.regex.Pattern"
import { $Function$$Type } from "java.util.function.Function"

export class $Matcher implements $MatchResult {
public "appendReplacement"(stringBuffer0: $StringBuffer$$Type, string1: string): $Matcher
public "appendReplacement"(stringBuilder0: $StringBuilder$$Type, string1: string): $Matcher
public "appendTail"(stringBuilder0: $StringBuilder$$Type): $StringBuilder
public "appendTail"(stringBuffer0: $StringBuffer$$Type): $StringBuffer
public "end"(int0: integer): integer
public "end"(string0: string): integer
public "end"(): integer
public "find"(): boolean
public "find"(int0: integer): boolean
public "group"(): string
public "group"(string0: string): string
public "group"(int0: integer): string
public "groupCount"(): integer
public "hasAnchoringBounds"(): boolean
public "hasTransparentBounds"(): boolean
public "hitEnd"(): boolean
public "lookingAt"(): boolean
public "matches"(): boolean
public "pattern"(): $Pattern
public static "quoteReplacement"(string0: string): string
public "region"(int0: integer, int1: integer): $Matcher
public "regionEnd"(): integer
public "regionStart"(): integer
public "replaceAll"(string0: string): string
public "replaceAll"(function0: $Function$$Type<$MatchResult$$Type, string>): string
public "replaceFirst"(function0: $Function$$Type<$MatchResult$$Type, string>): string
public "replaceFirst"(string0: string): string
public "requireEnd"(): boolean
public "reset"(charSequence0: charseq): $Matcher
public "reset"(): $Matcher
public "results"(): $Stream<$MatchResult>
public "start"(int0: integer): integer
public "start"(): integer
public "start"(string0: string): integer
public "toMatchResult"(): $MatchResult
public "useAnchoringBounds"(boolean0: boolean): $Matcher
public "usePattern"(pattern0: $Pattern$$Type): $Matcher
public "useTransparentBounds"(boolean0: boolean): $Matcher
}
}

declare module "java.util.function.IntUnaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntUnaryOperator {
"andThen"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"applyAsInt"(int0: integer): integer
"compose"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
}

export namespace $IntUnaryOperator {
function identity(): $IntUnaryOperator
}
export abstract class $IntUnaryOperator$$Static implements $IntUnaryOperator {
static "identity"(): $IntUnaryOperator
}
}

declare module "java.util.function.Supplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Supplier<T = any> {
"get"(): T
}

export namespace $Supplier {
const probejs$$marker: never
}
export abstract class $Supplier$$Static<T = any> implements $Supplier<T> {
}
}

declare module "java.util.function.DoubleToIntFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleToIntFunction {
"applyAsInt"(double0: double): integer
}

export namespace $DoubleToIntFunction {
const probejs$$marker: never
}
export abstract class $DoubleToIntFunction$$Static implements $DoubleToIntFunction {
}
}

declare module "java.util.concurrent.TimeUnit" {
import { $ChronoUnit, $ChronoUnit$$Type } from "java.time.temporal.ChronoUnit"
import { $Enum } from "java.lang.Enum"
import { $Duration$$Type } from "java.time.Duration"
import { $Thread$$Type } from "java.lang.Thread"

export class $TimeUnit extends $Enum<$TimeUnit> {
static readonly "DAYS": $TimeUnit
static readonly "HOURS": $TimeUnit
static readonly "MICROSECONDS": $TimeUnit
static readonly "MILLISECONDS": $TimeUnit
static readonly "MINUTES": $TimeUnit
static readonly "NANOSECONDS": $TimeUnit
static readonly "SECONDS": $TimeUnit

public "convert"(long0: long, timeUnit1: $TimeUnit$$Type): long
public "convert"(duration0: $Duration$$Type): long
public static "of"(chronoUnit0: $ChronoUnit$$Type): $TimeUnit
public "sleep"(long0: long): void
public "timedJoin"(thread0: $Thread$$Type, long1: long): void
public "timedWait"(object0: any, long1: long): void
public "toChronoUnit"(): $ChronoUnit
public "toDays"(long0: long): long
public "toHours"(long0: long): long
public "toMicros"(long0: long): long
public "toMillis"(long0: long): long
public "toMinutes"(long0: long): long
public "toNanos"(long0: long): long
public "toSeconds"(long0: long): long
public static "valueOf"(string0: string): $TimeUnit
public static "values"(): $TimeUnit[]
}
}

declare module "java.util.Locale" {
import { $Locale$FilteringMode$$Type } from "java.util.Locale$FilteringMode"
import { $List, $List$$Type } from "java.util.List"
import { $Cloneable } from "java.lang.Cloneable"
import { $Collection$$Type } from "java.util.Collection"
import { $Locale$LanguageRange$$Type } from "java.util.Locale$LanguageRange"
import { $Set } from "java.util.Set"
import { $Locale$Category$$Type } from "java.util.Locale$Category"
import { $Locale$IsoCountryCode$$Type } from "java.util.Locale$IsoCountryCode"
import { $Serializable } from "java.io.Serializable"

export class $Locale implements $Cloneable, $Serializable {
static readonly "CANADA": $Locale
static readonly "CANADA_FRENCH": $Locale
static readonly "CHINA": $Locale
static readonly "CHINESE": $Locale
static readonly "ENGLISH": $Locale
static readonly "FRANCE": $Locale
static readonly "FRENCH": $Locale
static readonly "GERMAN": $Locale
static readonly "GERMANY": $Locale
static readonly "ITALIAN": $Locale
static readonly "ITALY": $Locale
static readonly "JAPAN": $Locale
static readonly "JAPANESE": $Locale
static readonly "KOREA": $Locale
static readonly "KOREAN": $Locale
static readonly "PRC": $Locale
static readonly "PRIVATE_USE_EXTENSION": character
static readonly "ROOT": $Locale
static readonly "SIMPLIFIED_CHINESE": $Locale
static readonly "TAIWAN": $Locale
static readonly "TRADITIONAL_CHINESE": $Locale
static readonly "UK": $Locale
static readonly "UNICODE_LOCALE_EXTENSION": character
static readonly "US": $Locale

constructor(string0: string)
constructor(string0: string, string1: string)
constructor(string0: string, string1: string, string2: string)

public "clone"(): any
public static "filter"(list0: $List$$Type<$Locale$LanguageRange$$Type>, collection1: $Collection$$Type<$Locale$$Type>): $List<$Locale>
public static "filter"(list0: $List$$Type<$Locale$LanguageRange$$Type>, collection1: $Collection$$Type<$Locale$$Type>, filteringMode2: $Locale$FilteringMode$$Type): $List<$Locale>
public static "filterTags"(list0: $List$$Type<$Locale$LanguageRange$$Type>, collection1: $Collection$$Type<string>): $List<string>
public static "filterTags"(list0: $List$$Type<$Locale$LanguageRange$$Type>, collection1: $Collection$$Type<string>, filteringMode2: $Locale$FilteringMode$$Type): $List<string>
public static "forLanguageTag"(string0: string): $Locale
public static "getAvailableLocales"(): $Locale[]
public "getCountry"(): string
public static "getDefault"(): $Locale
public static "getDefault"(category0: $Locale$Category$$Type): $Locale
public "getDisplayCountry"(): string
public "getDisplayCountry"(locale0: $Locale$$Type): string
public "getDisplayLanguage"(): string
public "getDisplayLanguage"(locale0: $Locale$$Type): string
public "getDisplayName"(): string
public "getDisplayName"(locale0: $Locale$$Type): string
public "getDisplayScript"(): string
public "getDisplayScript"(locale0: $Locale$$Type): string
public "getDisplayVariant"(locale0: $Locale$$Type): string
public "getDisplayVariant"(): string
public "getExtension"(char0: character): string
public "getExtensionKeys"(): $Set<character>
public "getISO3Country"(): string
public "getISO3Language"(): string
public static "getISOCountries"(isoCountryCode0: $Locale$IsoCountryCode$$Type): $Set<string>
public static "getISOCountries"(): string[]
public static "getISOLanguages"(): string[]
public "getLanguage"(): string
public "getScript"(): string
public "getUnicodeLocaleAttributes"(): $Set<string>
public "getUnicodeLocaleKeys"(): $Set<string>
public "getUnicodeLocaleType"(string0: string): string
public "getVariant"(): string
public "hasExtensions"(): boolean
public static "lookup"(list0: $List$$Type<$Locale$LanguageRange$$Type>, collection1: $Collection$$Type<$Locale$$Type>): $Locale
public static "lookupTag"(list0: $List$$Type<$Locale$LanguageRange$$Type>, collection1: $Collection$$Type<string>): string
public static "setDefault"(locale0: $Locale$$Type): void
public static "setDefault"(category0: $Locale$Category$$Type, locale1: $Locale$$Type): void
public "stripExtensions"(): $Locale
public "toLanguageTag"(): string
get "country"(): string
get "displayCountry"(): string
get "displayLanguage"(): string
get "displayName"(): string
get "displayScript"(): string
get "displayVariant"(): string
get "extensionKeys"(): $Set<character>
get "iSO3Country"(): string
get "iSO3Language"(): string
get "language"(): string
get "script"(): string
get "unicodeLocaleAttributes"(): $Set<string>
get "unicodeLocaleKeys"(): $Set<string>
get "variant"(): string
}
}

declare module "java.util.PrimitiveIterator$OfInt" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $PrimitiveIterator } from "java.util.PrimitiveIterator"
import { $IntConsumer, $IntConsumer$$Type } from "java.util.function.IntConsumer"

export interface $PrimitiveIterator$OfInt extends $PrimitiveIterator<integer, $IntConsumer> {
"forEachRemaining"(consumer0: $Consumer$$Type<integer>): void
"forEachRemaining"(intConsumer0: $IntConsumer$$Type): void
"hasNext"(): boolean
"next"(): integer
"nextInt"(): integer
"remove"(): void
}

export namespace $PrimitiveIterator$OfInt {
const probejs$$marker: never
}
export abstract class $PrimitiveIterator$OfInt$$Static implements $PrimitiveIterator$OfInt {
}
}

declare module "java.util.OptionalInt" {
import { $Throwable, $Throwable$$Type } from "java.lang.Throwable"
import { $IntStream } from "java.util.stream.IntStream"
import { $IntConsumer$$Type } from "java.util.function.IntConsumer"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $IntSupplier$$Type } from "java.util.function.IntSupplier"

export class $OptionalInt {
public static "empty"(): $OptionalInt
public "getAsInt"(): integer
public "ifPresent"(intConsumer0: $IntConsumer$$Type): void
public "ifPresentOrElse"(intConsumer0: $IntConsumer$$Type, runnable1: $Runnable$$Type): void
public "isEmpty"(): boolean
public "isPresent"(): boolean
public static "of"(int0: integer): $OptionalInt
public "orElse"(int0: integer): integer
public "orElseGet"(intSupplier0: $IntSupplier$$Type): integer
public "orElseThrow"<X extends $Throwable>(supplier0: $Supplier$$Type<X>): integer
public "orElseThrow"(): integer
public "stream"(): $IntStream
get "asInt"(): integer
get "present"(): boolean
}
}

declare module "java.util.function.IntConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntConsumer {
"accept"(int0: integer): void
"andThen"(intConsumer0: $IntConsumer$$Type): $IntConsumer
}

export namespace $IntConsumer {
const probejs$$marker: never
}
export abstract class $IntConsumer$$Static implements $IntConsumer {
}
}

declare module "java.util.AbstractList" {
import { $Iterator } from "java.util.Iterator"
import { $ListIterator } from "java.util.ListIterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $AbstractCollection } from "java.util.AbstractCollection"
import { $Stream } from "java.util.stream.Stream"
import { $Comparator$$Type } from "java.util.Comparator"
import { $Spliterator } from "java.util.Spliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $AbstractList<E = any> extends $AbstractCollection<E> implements $List<E> {
public "add"(int0: integer, e1: E): void
public "addAll"(int0: integer, collection1: $Collection$$Type<E>): boolean
public "addAll"(collection0: $Collection$$Type<E>): boolean
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "forEach"(consumer0: $Consumer$$Type<E>): void
public "get"(int0: integer): E
public "indexOf"(object0: any): integer
public "isEmpty"(): boolean
public "iterator"(): $Iterator<E>
public "lastIndexOf"(object0: any): integer
public "listIterator"(): $ListIterator<E>
public "listIterator"(int0: integer): $ListIterator<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E): $List<E>
public static "of"<E>(e0: E, e1: E): $List<E>
public static "of"<E>(e0: E): $List<E>
public static "of"<E>(): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(...e0s: E[]): $List<E>
public "parallelStream"(): $Stream<E>
public "remove"(int0: integer): E
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<E>): boolean
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<E>): void
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "set"(int0: integer, e1: E): E
public "size"(): integer
public "sort"(comparator0: $Comparator$$Type<E>): void
public "spliterator"(): $Spliterator<E>
public "stream"(): $Stream<E>
public "subList"(int0: integer, int1: integer): $List<E>
public "toArray"(): any[]
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
[index: number]: E
get "empty"(): boolean
}
}

declare module "java.util.function.ToLongBiFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ToLongBiFunction<T = any, U = any> {
"applyAsLong"(t0: T, u1: U): long
}

export namespace $ToLongBiFunction {
const probejs$$marker: never
}
export abstract class $ToLongBiFunction$$Static<T = any, U = any> implements $ToLongBiFunction<T, U> {
}
}

declare module "java.util.AbstractCollection" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"
import { $Iterator } from "java.util.Iterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $Spliterator } from "java.util.Spliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $AbstractCollection<E = any> implements $Collection<E> {
public "add"(e0: E): boolean
public "addAll"(collection0: $Collection$$Type<E>): boolean
public "clear"(): void
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public "equals"(object0: any): boolean
public "forEach"(consumer0: $Consumer$$Type<E>): void
public "hashCode"(): integer
public "isEmpty"(): boolean
public "iterator"(): $Iterator<E>
public "parallelStream"(): $Stream<E>
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<E>): boolean
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "size"(): integer
public "spliterator"(): $Spliterator<E>
public "stream"(): $Stream<E>
public "toArray"(): any[]
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}
}

declare module "java.util.function.Function" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Function<T = any, R = any> {
"andThen"<V>(function0: $Function$$Type<R, V>): $Function<T, V>
"apply"(t0: T): R
"compose"<V>(function0: $Function$$Type<V, T>): $Function<V, R>
}

export namespace $Function {
function identity<T>(): $Function<T, T>
}
export abstract class $Function$$Static<T = any, R = any> implements $Function<T, R> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "java.util.function.BiPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BiPredicate<T = any, U = any> {
"and"(biPredicate0: $BiPredicate$$Type<T, U>): $BiPredicate<T, U>
"negate"(): $BiPredicate<T, U>
"or"(biPredicate0: $BiPredicate$$Type<T, U>): $BiPredicate<T, U>
"test"(t0: T, u1: U): boolean
}

export namespace $BiPredicate {
const probejs$$marker: never
}
export abstract class $BiPredicate$$Static<T = any, U = any> implements $BiPredicate<T, U> {
}
}

declare module "java.util.function.LongToIntFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongToIntFunction {
"applyAsInt"(long0: long): integer
}

export namespace $LongToIntFunction {
const probejs$$marker: never
}
export abstract class $LongToIntFunction$$Static implements $LongToIntFunction {
}
}

declare module "java.util.Spliterator$OfPrimitive" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Comparator } from "java.util.Comparator"
import { $Spliterator } from "java.util.Spliterator"

export interface $Spliterator$OfPrimitive<T = any, T_CONS = any, T_SPLITR extends $Spliterator$OfPrimitive<T, T_CONS, T_SPLITR> = $Spliterator$OfPrimitive<T, T_CONS, T_SPLITR>> extends $Spliterator<T> {
"characteristics"(): integer
"estimateSize"(): long
"forEachRemaining"(t_cons0: T_CONS): void
"forEachRemaining"(consumer0: $Consumer$$Type<T>): void
"getComparator"(): $Comparator<T>
"getExactSizeIfKnown"(): long
"hasCharacteristics"(int0: integer): boolean
"tryAdvance"(t_cons0: T_CONS): boolean
"tryAdvance"(consumer0: $Consumer$$Type<T>): boolean
get "comparator"(): $Comparator<T>
get "exactSizeIfKnown"(): long
}

export namespace $Spliterator$OfPrimitive {
const probejs$$marker: never
}
export abstract class $Spliterator$OfPrimitive$$Static<T = any, T_CONS = any, T_SPLITR extends $Spliterator$OfPrimitive<T, T_CONS, T_SPLITR> = $Spliterator$OfPrimitive<T, T_CONS, T_SPLITR>> implements $Spliterator$OfPrimitive<T, T_CONS, T_SPLITR> {
}
}

declare module "java.util.function.BiFunction" {
import { $Function$$Type } from "java.util.function.Function"

export interface $BiFunction<T = any, U = any, R = any> {
"andThen"<V>(function0: $Function$$Type<R, V>): $BiFunction<T, U, V>
"apply"(t0: T, u1: U): R
}

export namespace $BiFunction {
const probejs$$marker: never
}
export abstract class $BiFunction$$Static<T = any, U = any, R = any> implements $BiFunction<T, U, R> {
}
}

declare module "java.util.function.LongPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongPredicate {
"and"(longPredicate0: $LongPredicate$$Type): $LongPredicate
"negate"(): $LongPredicate
"or"(longPredicate0: $LongPredicate$$Type): $LongPredicate
"test"(long0: long): boolean
}

export namespace $LongPredicate {
const probejs$$marker: never
}
export abstract class $LongPredicate$$Static implements $LongPredicate {
}
}

declare module "java.util.stream.LongStream$LongMapMultiConsumer" {
import { $LongConsumer$$Type } from "java.util.function.LongConsumer"

export interface $LongStream$LongMapMultiConsumer {
"accept"(long0: long, longConsumer1: $LongConsumer$$Type): void
}

export namespace $LongStream$LongMapMultiConsumer {
const probejs$$marker: never
}
export abstract class $LongStream$LongMapMultiConsumer$$Static implements $LongStream$LongMapMultiConsumer {
}
}

declare module "java.util.Set" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"
import { $Iterator } from "java.util.Iterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $Spliterator } from "java.util.Spliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $Set<E = any> extends $Collection<E> {
"add"(e0: E): boolean
"addAll"(collection0: $Collection$$Type<E>): boolean
"clear"(): void
"contains"(object0: any): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"forEach"(consumer0: $Consumer$$Type<E>): void
"hashCode"(): integer
"isEmpty"(): boolean
"iterator"(): $Iterator<E>
"parallelStream"(): $Stream<E>
"remove"(object0: any): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(predicate0: $Predicate$$Type<E>): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"spliterator"(): $Spliterator<E>
"stream"(): $Stream<E>
"toArray"<T>(t0s: T[]): T[]
"toArray"(): any[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}

export namespace $Set {
function copyOf<E>(collection0: $Collection$$Type<E>): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
function of<E>(e0: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
function of<E>(...e0s: E[]): $Set<E>
function of<E>(e0: E, e1: E, e2: E): $Set<E>
function of<E>(): $Set<E>
function of<E>(e0: E, e1: E): $Set<E>
}
export abstract class $Set$$Static<E = any> implements $Set<E> {
static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
static "of"<E>(e0: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
static "of"<E>(...e0s: E[]): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E): $Set<E>
static "of"<E>(): $Set<E>
static "of"<E>(e0: E, e1: E): $Set<E>
}
}

declare module "java.util.concurrent.CompletionStage" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Throwable$$Type } from "java.lang.Throwable"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $Function$$Type } from "java.util.function.Function"
import { $Runnable$$Type } from "java.lang.Runnable"

export interface $CompletionStage<T = any> {
"acceptEither"(completionStage0: $CompletionStage$$Type<T>, consumer1: $Consumer$$Type<T>): $CompletionStage<void>
"acceptEitherAsync"(completionStage0: $CompletionStage$$Type<T>, consumer1: $Consumer$$Type<T>): $CompletionStage<void>
"acceptEitherAsync"(completionStage0: $CompletionStage$$Type<T>, consumer1: $Consumer$$Type<T>, executor2: $Executor$$Type): $CompletionStage<void>
"applyToEither"<U>(completionStage0: $CompletionStage$$Type<T>, function1: $Function$$Type<T, U>): $CompletionStage<U>
"applyToEitherAsync"<U>(completionStage0: $CompletionStage$$Type<T>, function1: $Function$$Type<T, U>, executor2: $Executor$$Type): $CompletionStage<U>
"applyToEitherAsync"<U>(completionStage0: $CompletionStage$$Type<T>, function1: $Function$$Type<T, U>): $CompletionStage<U>
"exceptionally"(function0: $Function$$Type<$Throwable$$Type, T>): $CompletionStage<T>
"exceptionallyAsync"(function0: $Function$$Type<$Throwable$$Type, T>, executor1: $Executor$$Type): $CompletionStage<T>
"exceptionallyAsync"(function0: $Function$$Type<$Throwable$$Type, T>): $CompletionStage<T>
"exceptionallyCompose"(function0: $Function$$Type<$Throwable$$Type, $CompletionStage<T>>): $CompletionStage<T>
"exceptionallyComposeAsync"(function0: $Function$$Type<$Throwable$$Type, $CompletionStage<T>>): $CompletionStage<T>
"exceptionallyComposeAsync"(function0: $Function$$Type<$Throwable$$Type, $CompletionStage<T>>, executor1: $Executor$$Type): $CompletionStage<T>
"handle"<U>(biFunction0: $BiFunction$$Type<T, $Throwable$$Type, U>): $CompletionStage<U>
"handleAsync"<U>(biFunction0: $BiFunction$$Type<T, $Throwable$$Type, U>): $CompletionStage<U>
"handleAsync"<U>(biFunction0: $BiFunction$$Type<T, $Throwable$$Type, U>, executor1: $Executor$$Type): $CompletionStage<U>
"runAfterBoth"(completionStage0: $CompletionStage$$Type<any>, runnable1: $Runnable$$Type): $CompletionStage<void>
"runAfterBothAsync"(completionStage0: $CompletionStage$$Type<any>, runnable1: $Runnable$$Type, executor2: $Executor$$Type): $CompletionStage<void>
"runAfterBothAsync"(completionStage0: $CompletionStage$$Type<any>, runnable1: $Runnable$$Type): $CompletionStage<void>
"runAfterEither"(completionStage0: $CompletionStage$$Type<any>, runnable1: $Runnable$$Type): $CompletionStage<void>
"runAfterEitherAsync"(completionStage0: $CompletionStage$$Type<any>, runnable1: $Runnable$$Type, executor2: $Executor$$Type): $CompletionStage<void>
"runAfterEitherAsync"(completionStage0: $CompletionStage$$Type<any>, runnable1: $Runnable$$Type): $CompletionStage<void>
"thenAccept"(consumer0: $Consumer$$Type<T>): $CompletionStage<void>
"thenAcceptAsync"(consumer0: $Consumer$$Type<T>): $CompletionStage<void>
"thenAcceptAsync"(consumer0: $Consumer$$Type<T>, executor1: $Executor$$Type): $CompletionStage<void>
"thenAcceptBoth"<U>(completionStage0: $CompletionStage$$Type<U>, biConsumer1: $BiConsumer$$Type<T, U>): $CompletionStage<void>
"thenAcceptBothAsync"<U>(completionStage0: $CompletionStage$$Type<U>, biConsumer1: $BiConsumer$$Type<T, U>, executor2: $Executor$$Type): $CompletionStage<void>
"thenAcceptBothAsync"<U>(completionStage0: $CompletionStage$$Type<U>, biConsumer1: $BiConsumer$$Type<T, U>): $CompletionStage<void>
"thenApply"<U>(function0: $Function$$Type<T, U>): $CompletionStage<U>
"thenApplyAsync"<U>(function0: $Function$$Type<T, U>, executor1: $Executor$$Type): $CompletionStage<U>
"thenApplyAsync"<U>(function0: $Function$$Type<T, U>): $CompletionStage<U>
"thenCombine"<U, V>(completionStage0: $CompletionStage$$Type<U>, biFunction1: $BiFunction$$Type<T, U, V>): $CompletionStage<V>
"thenCombineAsync"<U, V>(completionStage0: $CompletionStage$$Type<U>, biFunction1: $BiFunction$$Type<T, U, V>, executor2: $Executor$$Type): $CompletionStage<V>
"thenCombineAsync"<U, V>(completionStage0: $CompletionStage$$Type<U>, biFunction1: $BiFunction$$Type<T, U, V>): $CompletionStage<V>
"thenCompose"<U>(function0: $Function$$Type<T, $CompletionStage<U>>): $CompletionStage<U>
"thenComposeAsync"<U>(function0: $Function$$Type<T, $CompletionStage<U>>): $CompletionStage<U>
"thenComposeAsync"<U>(function0: $Function$$Type<T, $CompletionStage<U>>, executor1: $Executor$$Type): $CompletionStage<U>
"thenRun"(runnable0: $Runnable$$Type): $CompletionStage<void>
"thenRunAsync"(runnable0: $Runnable$$Type): $CompletionStage<void>
"thenRunAsync"(runnable0: $Runnable$$Type, executor1: $Executor$$Type): $CompletionStage<void>
"toCompletableFuture"(): $CompletableFuture<T>
"whenComplete"(biConsumer0: $BiConsumer$$Type<T, $Throwable$$Type>): $CompletionStage<T>
"whenCompleteAsync"(biConsumer0: $BiConsumer$$Type<T, $Throwable$$Type>): $CompletionStage<T>
"whenCompleteAsync"(biConsumer0: $BiConsumer$$Type<T, $Throwable$$Type>, executor1: $Executor$$Type): $CompletionStage<T>
}

export namespace $CompletionStage {
const probejs$$marker: never
}
export abstract class $CompletionStage$$Static<T = any> implements $CompletionStage<T> {
}
}

declare module "java.util.OptionalLong" {
import { $Throwable, $Throwable$$Type } from "java.lang.Throwable"
import { $LongStream } from "java.util.stream.LongStream"
import { $LongSupplier$$Type } from "java.util.function.LongSupplier"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $LongConsumer$$Type } from "java.util.function.LongConsumer"

export class $OptionalLong {
public static "empty"(): $OptionalLong
public "getAsLong"(): long
public "ifPresent"(longConsumer0: $LongConsumer$$Type): void
public "ifPresentOrElse"(longConsumer0: $LongConsumer$$Type, runnable1: $Runnable$$Type): void
public "isEmpty"(): boolean
public "isPresent"(): boolean
public static "of"(long0: long): $OptionalLong
public "orElse"(long0: long): long
public "orElseGet"(longSupplier0: $LongSupplier$$Type): long
public "orElseThrow"<X extends $Throwable>(supplier0: $Supplier$$Type<X>): long
public "orElseThrow"(): long
public "stream"(): $LongStream
get "asLong"(): long
get "present"(): boolean
}
}

declare module "java.util.IntSummaryStatistics" {
import { $IntConsumer, $IntConsumer$$Type } from "java.util.function.IntConsumer"

export class $IntSummaryStatistics implements $IntConsumer {
constructor()
constructor(long0: long, int1: integer, int2: integer, long3: long)

public "accept"(int0: integer): void
public "andThen"(intConsumer0: $IntConsumer$$Type): $IntConsumer
public "combine"(intSummaryStatistics0: $IntSummaryStatistics$$Type): void
public "getAverage"(): double
public "getCount"(): long
public "getMax"(): integer
public "getMin"(): integer
public "getSum"(): long
get "average"(): double
get "count"(): long
get "max"(): integer
get "min"(): integer
get "sum"(): long
}
}

declare module "java.util.function.IntPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntPredicate {
"and"(intPredicate0: $IntPredicate$$Type): $IntPredicate
"negate"(): $IntPredicate
"or"(intPredicate0: $IntPredicate$$Type): $IntPredicate
"test"(int0: integer): boolean
}

export namespace $IntPredicate {
const probejs$$marker: never
}
export abstract class $IntPredicate$$Static implements $IntPredicate {
}
}

declare module "java.util.Locale$FilteringMode" {
import { $Enum } from "java.lang.Enum"

export class $Locale$FilteringMode extends $Enum<$Locale$FilteringMode> {
static readonly "AUTOSELECT_FILTERING": $Locale$FilteringMode
static readonly "EXTENDED_FILTERING": $Locale$FilteringMode
static readonly "IGNORE_EXTENDED_RANGES": $Locale$FilteringMode
static readonly "MAP_EXTENDED_RANGES": $Locale$FilteringMode
static readonly "REJECT_EXTENDED_RANGES": $Locale$FilteringMode

public static "valueOf"(string0: string): $Locale$FilteringMode
public static "values"(): $Locale$FilteringMode[]
}
}

declare module "java.util.PrimitiveIterator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Iterator } from "java.util.Iterator"

export interface $PrimitiveIterator<T = any, T_CONS = any> extends $Iterator<T> {
"forEachRemaining"(t_cons0: T_CONS): void
"forEachRemaining"(consumer0: $Consumer$$Type<T>): void
"hasNext"(): boolean
"next"(): T
"remove"(): void
}

export namespace $PrimitiveIterator {
const probejs$$marker: never
}
export abstract class $PrimitiveIterator$$Static<T = any, T_CONS = any> implements $PrimitiveIterator<T, T_CONS> {
}
}

declare module "java.util.function.DoubleSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleSupplier {
"getAsDouble"(): double
get "asDouble"(): double
}

export namespace $DoubleSupplier {
const probejs$$marker: never
}
export abstract class $DoubleSupplier$$Static implements $DoubleSupplier {
}
}

declare module "java.util.function.IntToDoubleFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntToDoubleFunction {
"applyAsDouble"(int0: integer): double
}

export namespace $IntToDoubleFunction {
const probejs$$marker: never
}
export abstract class $IntToDoubleFunction$$Static implements $IntToDoubleFunction {
}
}

declare module "java.util.IdentityHashMap" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Cloneable } from "java.lang.Cloneable"
import { $AbstractMap } from "java.util.AbstractMap"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Collection } from "java.util.Collection"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Set } from "java.util.Set"
import { $Function$$Type } from "java.util.function.Function"
import { $Serializable } from "java.io.Serializable"

export class $IdentityHashMap<K = any, V = any> extends $AbstractMap<K, V> implements $Map<K, V>, $Serializable, $Cloneable {
constructor()
constructor(int0: integer)
constructor(map0: $Map$$Type<K, V>)

public "clone"(): any
public "compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public "computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
public "computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "entrySet"(): $Set<$Map$Entry<K, V>>
public "forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
public "get"(object0: any): V
public "getOrDefault"(object0: any, v1: V): V
public "keySet"(): $Set<K>
public "merge"(k0: K, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
public static "of"<K, V>(): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
public static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
public "put"(k0: K, v1: V): V
public "putIfAbsent"(k0: K, v1: V): V
public "remove"(object0: any): V
public "remove"(object0: any, object1: any): boolean
public "replace"(k0: K, v1: V): V
public "replace"(k0: K, v1: V, v2: V): boolean
public "replaceAll"(biFunction0: $BiFunction$$Type<K, V, V>): void
public "values"(): $Collection<V>
}
}

declare module "java.util.concurrent.locks.ReentrantLock" {
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $Condition, $Condition$$Type } from "java.util.concurrent.locks.Condition"
import { $Lock } from "java.util.concurrent.locks.Lock"
import { $Thread$$Type } from "java.lang.Thread"
import { $Serializable } from "java.io.Serializable"

export class $ReentrantLock implements $Lock, $Serializable {
constructor(boolean0: boolean)
constructor()

public "getHoldCount"(): integer
public "getQueueLength"(): integer
public "getWaitQueueLength"(condition0: $Condition$$Type): integer
public "hasQueuedThread"(thread0: $Thread$$Type): boolean
public "hasQueuedThreads"(): boolean
public "hasWaiters"(condition0: $Condition$$Type): boolean
public "isFair"(): boolean
public "isHeldByCurrentThread"(): boolean
public "isLocked"(): boolean
public "lock"(): void
public "lockInterruptibly"(): void
public "newCondition"(): $Condition
public "tryLock"(): boolean
public "tryLock"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
public "unlock"(): void
get "holdCount"(): integer
get "queueLength"(): integer
get "fair"(): boolean
get "heldByCurrentThread"(): boolean
get "locked"(): boolean
}
}

declare module "java.util.function.IntToLongFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntToLongFunction {
"applyAsLong"(int0: integer): long
}

export namespace $IntToLongFunction {
const probejs$$marker: never
}
export abstract class $IntToLongFunction$$Static implements $IntToLongFunction {
}
}

declare module "java.util.stream.IntStream" {
import { $PrimitiveIterator$OfInt } from "java.util.PrimitiveIterator$OfInt"
import { $LongStream } from "java.util.stream.LongStream"
import { $IntToDoubleFunction$$Type } from "java.util.function.IntToDoubleFunction"
import { $IntUnaryOperator$$Type } from "java.util.function.IntUnaryOperator"
import { $OptionalDouble } from "java.util.OptionalDouble"
import { $IntConsumer$$Type } from "java.util.function.IntConsumer"
import { $IntBinaryOperator$$Type } from "java.util.function.IntBinaryOperator"
import { $ObjIntConsumer$$Type } from "java.util.function.ObjIntConsumer"
import { $IntPredicate$$Type } from "java.util.function.IntPredicate"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $OptionalInt } from "java.util.OptionalInt"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $DoubleStream } from "java.util.stream.DoubleStream"
import { $IntStream$IntMapMultiConsumer$$Type } from "java.util.stream.IntStream$IntMapMultiConsumer"
import { $Stream } from "java.util.stream.Stream"
import { $IntToLongFunction$$Type } from "java.util.function.IntToLongFunction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $IntStream$Builder } from "java.util.stream.IntStream$Builder"
import { $BaseStream } from "java.util.stream.BaseStream"
import { $IntSummaryStatistics } from "java.util.IntSummaryStatistics"
import { $IntSupplier$$Type } from "java.util.function.IntSupplier"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $IntStream extends $BaseStream<integer, $IntStream> {
"allMatch"(intPredicate0: $IntPredicate$$Type): boolean
"anyMatch"(intPredicate0: $IntPredicate$$Type): boolean
"asDoubleStream"(): $DoubleStream
"asLongStream"(): $LongStream
"average"(): $OptionalDouble
"boxed"(): $Stream<integer>
"close"(): void
"collect"<R>(supplier0: $Supplier$$Type<R>, objIntConsumer1: $ObjIntConsumer$$Type<R>, biConsumer2: $BiConsumer$$Type<R, R>): R
"count"(): long
"distinct"(): $IntStream
"dropWhile"(intPredicate0: $IntPredicate$$Type): $IntStream
"filter"(intPredicate0: $IntPredicate$$Type): $IntStream
"findAny"(): $OptionalInt
"findFirst"(): $OptionalInt
"flatMap"(intFunction0: $IntFunction$$Type<$IntStream>): $IntStream
"forEach"(intConsumer0: $IntConsumer$$Type): void
"forEachOrdered"(intConsumer0: $IntConsumer$$Type): void
"isParallel"(): boolean
"iterator"(): $PrimitiveIterator$OfInt
"limit"(long0: long): $IntStream
"map"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntStream
"mapMulti"(intMapMultiConsumer0: $IntStream$IntMapMultiConsumer$$Type): $IntStream
"mapToDouble"(intToDoubleFunction0: $IntToDoubleFunction$$Type): $DoubleStream
"mapToLong"(intToLongFunction0: $IntToLongFunction$$Type): $LongStream
"mapToObj"<U>(intFunction0: $IntFunction$$Type<U>): $Stream<U>
"max"(): $OptionalInt
"min"(): $OptionalInt
"noneMatch"(intPredicate0: $IntPredicate$$Type): boolean
"onClose"(runnable0: $Runnable$$Type): $IntStream
"parallel"(): $IntStream
"peek"(intConsumer0: $IntConsumer$$Type): $IntStream
"reduce"(int0: integer, intBinaryOperator1: $IntBinaryOperator$$Type): integer
"reduce"(intBinaryOperator0: $IntBinaryOperator$$Type): $OptionalInt
"sequential"(): $IntStream
"skip"(long0: long): $IntStream
"sorted"(): $IntStream
"sum"(): integer
"summaryStatistics"(): $IntSummaryStatistics
"takeWhile"(intPredicate0: $IntPredicate$$Type): $IntStream
"toArray"(): integer[]
"unordered"(): $IntStream
}

export namespace $IntStream {
function builder(): $IntStream$Builder
function concat(intStream0: $IntStream$$Type, intStream1: $IntStream$$Type): $IntStream
function empty(): $IntStream
function generate(intSupplier0: $IntSupplier$$Type): $IntStream
function iterate(int0: integer, intUnaryOperator1: $IntUnaryOperator$$Type): $IntStream
function iterate(int0: integer, intPredicate1: $IntPredicate$$Type, intUnaryOperator2: $IntUnaryOperator$$Type): $IntStream
function of(...int0s: integer[]): $IntStream
function of(int0: integer): $IntStream
function range(int0: integer, int1: integer): $IntStream
function rangeClosed(int0: integer, int1: integer): $IntStream
}
export abstract class $IntStream$$Static implements $IntStream {
static "builder"(): $IntStream$Builder
static "concat"(intStream0: $IntStream$$Type, intStream1: $IntStream$$Type): $IntStream
static "empty"(): $IntStream
static "generate"(intSupplier0: $IntSupplier$$Type): $IntStream
static "iterate"(int0: integer, intUnaryOperator1: $IntUnaryOperator$$Type): $IntStream
static "iterate"(int0: integer, intPredicate1: $IntPredicate$$Type, intUnaryOperator2: $IntUnaryOperator$$Type): $IntStream
static "of"(...int0s: integer[]): $IntStream
static "of"(int0: integer): $IntStream
static "range"(int0: integer, int1: integer): $IntStream
static "rangeClosed"(int0: integer, int1: integer): $IntStream
}
}

declare module "java.util.function.LongFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongFunction<R = any> {
"apply"(long0: long): R
}

export namespace $LongFunction {
const probejs$$marker: never
}
export abstract class $LongFunction$$Static<R = any> implements $LongFunction<R> {
}
}

declare module "java.util.StringJoiner" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $StringJoiner {
constructor(charSequence0: charseq)
constructor(charSequence0: charseq, charSequence1: charseq, charSequence2: charseq)

public "add"(charSequence0: charseq): $StringJoiner
public "length"(): integer
public "merge"(stringJoiner0: $StringJoiner$$Type): $StringJoiner
public "setEmptyValue"(charSequence0: charseq): $StringJoiner
set "emptyValue"(value: charseq)
}
}

declare module "java.util.function.ToDoubleBiFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ToDoubleBiFunction<T = any, U = any> {
"applyAsDouble"(t0: T, u1: U): double
}

export namespace $ToDoubleBiFunction {
const probejs$$marker: never
}
export abstract class $ToDoubleBiFunction$$Static<T = any, U = any> implements $ToDoubleBiFunction<T, U> {
}
}

declare module "java.util.stream.BaseStream" {
import { $Iterator } from "java.util.Iterator"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $Spliterator } from "java.util.Spliterator"
import { $AutoCloseable } from "java.lang.AutoCloseable"

export interface $BaseStream<T = any, S extends $BaseStream<T, S> = $BaseStream<T, S>> extends $AutoCloseable {
"close"(): void
"isParallel"(): boolean
"iterator"(): $Iterator<T>
"onClose"(runnable0: $Runnable$$Type): S
"parallel"(): S
"sequential"(): S
"spliterator"(): $Spliterator<T>
"unordered"(): S
}

export namespace $BaseStream {
const probejs$$marker: never
}
export abstract class $BaseStream$$Static<T = any, S extends $BaseStream<T, S> = $BaseStream<T, S>> implements $BaseStream<T, S> {
}
}

declare module "java.util.PrimitiveIterator$OfLong" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $PrimitiveIterator } from "java.util.PrimitiveIterator"
import { $LongConsumer, $LongConsumer$$Type } from "java.util.function.LongConsumer"

export interface $PrimitiveIterator$OfLong extends $PrimitiveIterator<long, $LongConsumer> {
"forEachRemaining"(consumer0: $Consumer$$Type<long>): void
"forEachRemaining"(longConsumer0: $LongConsumer$$Type): void
"hasNext"(): boolean
"next"(): long
"nextLong"(): long
"remove"(): void
}

export namespace $PrimitiveIterator$OfLong {
const probejs$$marker: never
}
export abstract class $PrimitiveIterator$OfLong$$Static implements $PrimitiveIterator$OfLong {
}
}

declare module "java.util.function.BinaryOperator" {
import { $BiFunction } from "java.util.function.BiFunction"
import { $Comparator$$Type } from "java.util.Comparator"
import { $Function$$Type } from "java.util.function.Function"

export interface $BinaryOperator<T = any> extends $BiFunction<T, T, T> {
"andThen"<V>(function0: $Function$$Type<T, V>): $BiFunction<T, T, V>
"apply"(t0: T, t1: T): T
}

export namespace $BinaryOperator {
function maxBy<T>(comparator0: $Comparator$$Type<T>): $BinaryOperator<T>
function minBy<T>(comparator0: $Comparator$$Type<T>): $BinaryOperator<T>
}
export abstract class $BinaryOperator$$Static<T = any> implements $BinaryOperator<T> {
static "maxBy"<T>(comparator0: $Comparator$$Type<T>): $BinaryOperator<T>
static "minBy"<T>(comparator0: $Comparator$$Type<T>): $BinaryOperator<T>
}
}

declare module "java.util.concurrent.AbstractExecutorService" {
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $List } from "java.util.List"
import { $Future } from "java.util.concurrent.Future"
import { $Collection$$Type } from "java.util.Collection"
import { $Callable$$Type } from "java.util.concurrent.Callable"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"
import { $ExecutorService } from "java.util.concurrent.ExecutorService"

export class $AbstractExecutorService implements $ExecutorService {
constructor()

public "awaitTermination"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
public "execute"(runnable0: $Runnable$$Type): void
public "invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): $List<$Future<T>>
public "invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): $List<$Future<T>>
public "invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): T
public "invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): T
public "isShutdown"(): boolean
public "isTerminated"(): boolean
public "shutdown"(): void
public "shutdownNow"(): $List<$Runnable>
public "submit"(runnable0: $Runnable$$Type): $Future<any>
public "submit"<T>(runnable0: $Runnable$$Type, t1: T): $Future<T>
public "submit"<T>(callable0: $Callable$$Type<T>): $Future<T>
get "terminated"(): boolean
}
}

declare module "java.util.LinkedList" {
import { $Cloneable } from "java.lang.Cloneable"
import { $Iterator } from "java.util.Iterator"
import { $ListIterator } from "java.util.ListIterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $Deque } from "java.util.Deque"
import { $AbstractSequentialList } from "java.util.AbstractSequentialList"
import { $Serializable } from "java.io.Serializable"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $Comparator$$Type } from "java.util.Comparator"
import { $Spliterator } from "java.util.Spliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $LinkedList<E = any> extends $AbstractSequentialList<E> implements $List<E>, $Deque<E>, $Cloneable, $Serializable {
constructor(collection0: $Collection$$Type<E>)
constructor()

public "addFirst"(e0: E): void
public "addLast"(e0: E): void
public "clone"(): any
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "descendingIterator"(): $Iterator<E>
public "element"(): E
public "equals"(object0: any): boolean
public "forEach"(consumer0: $Consumer$$Type<E>): void
public "get"(int0: integer): E
public "getFirst"(): E
public "getLast"(): E
public "hashCode"(): integer
public "isEmpty"(): boolean
public "iterator"(): $Iterator<E>
public "listIterator"(int0: integer): $ListIterator<E>
public "listIterator"(): $ListIterator<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E): $List<E>
public static "of"<E>(e0: E, e1: E): $List<E>
public static "of"<E>(e0: E): $List<E>
public static "of"<E>(): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(...e0s: E[]): $List<E>
public "offer"(e0: E): boolean
public "offerFirst"(e0: E): boolean
public "offerLast"(e0: E): boolean
public "parallelStream"(): $Stream<E>
public "peek"(): E
public "peekFirst"(): E
public "peekLast"(): E
public "poll"(): E
public "pollFirst"(): E
public "pollLast"(): E
public "pop"(): E
public "push"(e0: E): void
public "remove"(int0: integer): E
public "remove"(): E
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeFirst"(): E
public "removeFirstOccurrence"(object0: any): boolean
public "removeIf"(predicate0: $Predicate$$Type<E>): boolean
public "removeLast"(): E
public "removeLastOccurrence"(object0: any): boolean
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<E>): void
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "set"(int0: integer, e1: E): E
public "sort"(comparator0: $Comparator$$Type<E>): void
public "spliterator"(): $Spliterator<E>
public "stream"(): $Stream<E>
public "subList"(int0: integer, int1: integer): $List<E>
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "first"(): E
get "last"(): E
get "empty"(): boolean
}
}

declare module "java.util.AbstractMap" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Collection } from "java.util.Collection"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Set } from "java.util.Set"
import { $Function$$Type } from "java.util.function.Function"

export class $AbstractMap<K = any, V = any> implements $Map<K, V> {
public "clear"(): void
public "compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public "computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
public "computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public "containsKey"(object0: any): boolean
public "containsValue"(object0: any): boolean
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "entrySet"(): $Set<$Map$Entry<K, V>>
public "forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
public "get"(object0: any): V
public "getOrDefault"(object0: any, v1: V): V
public "isEmpty"(): boolean
public "keySet"(): $Set<K>
public "merge"(k0: K, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
public static "of"<K, V>(): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
public static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
public "put"(k0: K, v1: V): V
public "putAll"(map0: $Map$$Type<K, V>): void
public "putIfAbsent"(k0: K, v1: V): V
public "remove"(object0: any): V
public "remove"(object0: any, object1: any): boolean
public "replace"(k0: K, v1: V): V
public "replace"(k0: K, v1: V, v2: V): boolean
public "replaceAll"(biFunction0: $BiFunction$$Type<K, V, V>): void
public "size"(): integer
public "values"(): $Collection<V>
[index: string | number]: V
get "empty"(): boolean
}
}

