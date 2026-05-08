declare module "com.mojang.datafixers.types.families.TypeFamily" {
import { $TypedOptic } from "com.mojang.datafixers.TypedOptic"
import { $Type } from "com.mojang.datafixers.types.Type"
import { $FamilyOptic } from "com.mojang.datafixers.FamilyOptic"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $TypeFamily {
"apply"(int0: integer): $Type<any>
}

export namespace $TypeFamily {
function familyOptic<A, B>(intFunction0: $IntFunction$$Type<$TypedOptic<any, any, A, B>>): $FamilyOptic<A, B>
}
export abstract class $TypeFamily$$Static implements $TypeFamily {
static "familyOptic"<A, B>(intFunction0: $IntFunction$$Type<$TypedOptic<any, any, A, B>>): $FamilyOptic<A, B>
}
}

declare module "com.mojang.datafixers.types.families.RecursiveTypeFamily" {
import { $Type$FieldNotFoundException } from "com.mojang.datafixers.types.Type$FieldNotFoundException"
import { $Either } from "com.mojang.datafixers.util.Either"
import { $TypeRewriteRule$$Type } from "com.mojang.datafixers.TypeRewriteRule"
import { $RecursivePoint$RecursivePointType } from "com.mojang.datafixers.types.templates.RecursivePoint$RecursivePointType"
import { $RewriteResult } from "com.mojang.datafixers.RewriteResult"
import { $TypeFamily } from "com.mojang.datafixers.types.families.TypeFamily"
import { $Type$$Type } from "com.mojang.datafixers.types.Type"
import { $TypeTemplate, $TypeTemplate$$Type } from "com.mojang.datafixers.types.templates.TypeTemplate"
import { $PointFreeRule$$Type } from "com.mojang.datafixers.functions.PointFreeRule"
import { $TypedOptic } from "com.mojang.datafixers.TypedOptic"
import { $Optional } from "java.util.Optional"
import { $Algebra$$Type } from "com.mojang.datafixers.types.families.Algebra"
import { $FamilyOptic } from "com.mojang.datafixers.FamilyOptic"
import { $Type$TypeMatcher$$Type } from "com.mojang.datafixers.types.Type$TypeMatcher"
import { $IntFunction, $IntFunction$$Type } from "java.util.function.IntFunction"

export class $RecursiveTypeFamily implements $TypeFamily {
constructor(string0: string, typeTemplate1: $TypeTemplate$$Type)

public "buildMuType"<A>(type0: $Type$$Type<A>, recursiveTypeFamily1: $RecursiveTypeFamily$$Type): $RecursivePoint$RecursivePointType<A>
public "everywhere"(int0: integer, typeRewriteRule1: $TypeRewriteRule$$Type, pointFreeRule2: $PointFreeRule$$Type): $Optional<$RewriteResult<any, any>>
public static "familyOptic"<A, B>(intFunction0: $IntFunction$$Type<$TypedOptic<any, any, A, B>>): $FamilyOptic<A, B>
public "findType"<A, B>(int0: integer, type1: $Type$$Type<A>, type2: $Type$$Type<B>, typeMatcher3: $Type$TypeMatcher$$Type<A, B>, boolean4: boolean): $Either<$TypedOptic<any, any, A, B>, $Type$FieldNotFoundException>
public "fold"(algebra0: $Algebra$$Type, recursiveTypeFamily1: $RecursiveTypeFamily$$Type): $IntFunction<$RewriteResult<any, any>>
public "name"(): string
public "size"(): integer
public "template"(): $TypeTemplate
}
}

declare module "com.mojang.datafixers.kinds.Functor$Mu" {
import { $Kind1$Mu } from "com.mojang.datafixers.kinds.Kind1$Mu"

export interface $Functor$Mu extends $Kind1$Mu {
}

export namespace $Functor$Mu {
const probejs$$marker: never
}
export abstract class $Functor$Mu$$Static implements $Functor$Mu {
}
}

declare module "com.mojang.datafixers.util.Unit" {
import { $Enum } from "java.lang.Enum"

export class $Unit extends $Enum<$Unit> {
static readonly "INSTANCE": $Unit

public static "valueOf"(string0: string): $Unit
public static "values"(): $Unit[]
}
}

declare module "com.mojang.datafixers.util.Pair$Mu" {
import { $K1 } from "com.mojang.datafixers.kinds.K1"

export class $Pair$Mu<S = any> implements $K1 {
constructor()

}
}

declare module "com.mojang.datafixers.DataFixer" {
import { $DSL$TypeReference$$Type } from "com.mojang.datafixers.DSL$TypeReference"
import { $Dynamic, $Dynamic$$Type } from "com.mojang.serialization.Dynamic"
import { $Schema } from "com.mojang.datafixers.schemas.Schema"

export interface $DataFixer {
"getSchema"(int0: integer): $Schema
"update"<T>(typeReference0: $DSL$TypeReference$$Type, dynamic1: $Dynamic$$Type<T>, int2: integer, int3: integer): $Dynamic<T>
}

export namespace $DataFixer {
const probejs$$marker: never
}
export abstract class $DataFixer$$Static implements $DataFixer {
}
}

declare module "com.mojang.datafixers.util.Either$Mu" {
import { $K1 } from "com.mojang.datafixers.kinds.K1"

export class $Either$Mu<R = any> implements $K1 {
constructor()

}
}

declare module "com.mojang.datafixers.types.Type$TypeError" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Type$TypeError {
constructor(string0: string)

}
}

declare module "com.mojang.datafixers.kinds.App2" {
import { $K2 } from "com.mojang.datafixers.kinds.K2"

export interface $App2<F extends $K2 = $K2, A = any, B = any> {
}

export namespace $App2 {
const probejs$$marker: never
}
export abstract class $App2$$Static<F extends $K2 = $K2, A = any, B = any> implements $App2<F, A, B> {
}
}

declare module "com.mojang.datafixers.util.Function10" {
import { $Function8 } from "com.mojang.datafixers.util.Function8"
import { $Function9 } from "com.mojang.datafixers.util.Function9"
import { $BiFunction } from "java.util.function.BiFunction"
import { $Function4 } from "com.mojang.datafixers.util.Function4"
import { $Function5 } from "com.mojang.datafixers.util.Function5"
import { $Function6 } from "com.mojang.datafixers.util.Function6"
import { $Function7 } from "com.mojang.datafixers.util.Function7"
import { $Function } from "java.util.function.Function"
import { $Function3 } from "com.mojang.datafixers.util.Function3"

export interface $Function10<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, T9 = any, T10 = any, R = any> {
"apply"(t10: T1, t21: T2, t32: T3, t43: T4, t54: T5, t65: T6, t76: T7, t87: T8, t98: T9, t109: T10): R
"curry"(): $Function<T1, $Function9<T2, T3, T4, T5, T6, T7, T8, T9, T10, R>>
"curry2"(): $BiFunction<T1, T2, $Function8<T3, T4, T5, T6, T7, T8, T9, T10, R>>
"curry3"(): $Function3<T1, T2, T3, $Function7<T4, T5, T6, T7, T8, T9, T10, R>>
"curry4"(): $Function4<T1, T2, T3, T4, $Function6<T5, T6, T7, T8, T9, T10, R>>
"curry5"(): $Function5<T1, T2, T3, T4, T5, $Function5<T6, T7, T8, T9, T10, R>>
"curry6"(): $Function6<T1, T2, T3, T4, T5, T6, $Function4<T7, T8, T9, T10, R>>
"curry7"(): $Function7<T1, T2, T3, T4, T5, T6, T7, $Function3<T8, T9, T10, R>>
"curry8"(): $Function8<T1, T2, T3, T4, T5, T6, T7, T8, $BiFunction<T9, T10, R>>
"curry9"(): $Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, $Function<T10, R>>
}

export namespace $Function10 {
const probejs$$marker: never
}
export abstract class $Function10$$Static<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, T9 = any, T10 = any, R = any> implements $Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R> {
}
}

declare module "com.mojang.datafixers.util.Function15" {
import { $Function8 } from "com.mojang.datafixers.util.Function8"
import { $Function9 } from "com.mojang.datafixers.util.Function9"
import { $BiFunction } from "java.util.function.BiFunction"
import { $Function4 } from "com.mojang.datafixers.util.Function4"
import { $Function5 } from "com.mojang.datafixers.util.Function5"
import { $Function6 } from "com.mojang.datafixers.util.Function6"
import { $Function7 } from "com.mojang.datafixers.util.Function7"
import { $Function13 } from "com.mojang.datafixers.util.Function13"
import { $Function } from "java.util.function.Function"
import { $Function14 } from "com.mojang.datafixers.util.Function14"
import { $Function11 } from "com.mojang.datafixers.util.Function11"
import { $Function12 } from "com.mojang.datafixers.util.Function12"
import { $Function3 } from "com.mojang.datafixers.util.Function3"
import { $Function10 } from "com.mojang.datafixers.util.Function10"

export interface $Function15<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, T9 = any, T10 = any, T11 = any, T12 = any, T13 = any, T14 = any, T15 = any, R = any> {
"apply"(t10: T1, t21: T2, t32: T3, t43: T4, t54: T5, t65: T6, t76: T7, t87: T8, t98: T9, t109: T10, t1110: T11, t1211: T12, t1312: T13, t1413: T14, t1514: T15): R
"curry"(): $Function<T1, $Function14<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>
"curry10"(): $Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, $Function5<T11, T12, T13, T14, T15, R>>
"curry11"(): $Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, $Function4<T12, T13, T14, T15, R>>
"curry12"(): $Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, $Function3<T13, T14, T15, R>>
"curry13"(): $Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, $BiFunction<T14, T15, R>>
"curry14"(): $Function14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, $Function<T15, R>>
"curry2"(): $BiFunction<T1, T2, $Function13<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>
"curry3"(): $Function3<T1, T2, T3, $Function12<T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>
"curry4"(): $Function4<T1, T2, T3, T4, $Function11<T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>
"curry5"(): $Function5<T1, T2, T3, T4, T5, $Function10<T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>
"curry6"(): $Function6<T1, T2, T3, T4, T5, T6, $Function9<T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>
"curry7"(): $Function7<T1, T2, T3, T4, T5, T6, T7, $Function8<T8, T9, T10, T11, T12, T13, T14, T15, R>>
"curry8"(): $Function8<T1, T2, T3, T4, T5, T6, T7, T8, $Function7<T9, T10, T11, T12, T13, T14, T15, R>>
"curry9"(): $Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, $Function6<T10, T11, T12, T13, T14, T15, R>>
}

export namespace $Function15 {
const probejs$$marker: never
}
export abstract class $Function15$$Static<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, T9 = any, T10 = any, T11 = any, T12 = any, T13 = any, T14 = any, T15 = any, R = any> implements $Function15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R> {
}
}

declare module "com.mojang.datafixers.util.Function16" {
import { $Function8 } from "com.mojang.datafixers.util.Function8"
import { $Function9 } from "com.mojang.datafixers.util.Function9"
import { $BiFunction } from "java.util.function.BiFunction"
import { $Function4 } from "com.mojang.datafixers.util.Function4"
import { $Function5 } from "com.mojang.datafixers.util.Function5"
import { $Function15 } from "com.mojang.datafixers.util.Function15"
import { $Function6 } from "com.mojang.datafixers.util.Function6"
import { $Function7 } from "com.mojang.datafixers.util.Function7"
import { $Function13 } from "com.mojang.datafixers.util.Function13"
import { $Function } from "java.util.function.Function"
import { $Function14 } from "com.mojang.datafixers.util.Function14"
import { $Function11 } from "com.mojang.datafixers.util.Function11"
import { $Function12 } from "com.mojang.datafixers.util.Function12"
import { $Function3 } from "com.mojang.datafixers.util.Function3"
import { $Function10 } from "com.mojang.datafixers.util.Function10"

export interface $Function16<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, T9 = any, T10 = any, T11 = any, T12 = any, T13 = any, T14 = any, T15 = any, T16 = any, R = any> {
"apply"(t10: T1, t21: T2, t32: T3, t43: T4, t54: T5, t65: T6, t76: T7, t87: T8, t98: T9, t109: T10, t1110: T11, t1211: T12, t1312: T13, t1413: T14, t1514: T15, t1615: T16): R
"curry"(): $Function<T1, $Function15<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>
"curry10"(): $Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, $Function6<T11, T12, T13, T14, T15, T16, R>>
"curry11"(): $Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, $Function5<T12, T13, T14, T15, T16, R>>
"curry12"(): $Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, $Function4<T13, T14, T15, T16, R>>
"curry13"(): $Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, $Function3<T14, T15, T16, R>>
"curry14"(): $Function14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, $BiFunction<T15, T16, R>>
"curry15"(): $Function15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, $Function<T16, R>>
"curry2"(): $BiFunction<T1, T2, $Function14<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>
"curry3"(): $Function3<T1, T2, T3, $Function13<T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>
"curry4"(): $Function4<T1, T2, T3, T4, $Function12<T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>
"curry5"(): $Function5<T1, T2, T3, T4, T5, $Function11<T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>
"curry6"(): $Function6<T1, T2, T3, T4, T5, T6, $Function10<T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>
"curry7"(): $Function7<T1, T2, T3, T4, T5, T6, T7, $Function9<T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>
"curry8"(): $Function8<T1, T2, T3, T4, T5, T6, T7, T8, $Function8<T9, T10, T11, T12, T13, T14, T15, T16, R>>
"curry9"(): $Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, $Function7<T10, T11, T12, T13, T14, T15, T16, R>>
}

export namespace $Function16 {
const probejs$$marker: never
}
export abstract class $Function16$$Static<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, T9 = any, T10 = any, T11 = any, T12 = any, T13 = any, T14 = any, T15 = any, T16 = any, R = any> implements $Function16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R> {
}
}

declare module "com.mojang.datafixers.util.Function13" {
import { $Function8 } from "com.mojang.datafixers.util.Function8"
import { $Function9 } from "com.mojang.datafixers.util.Function9"
import { $BiFunction } from "java.util.function.BiFunction"
import { $Function4 } from "com.mojang.datafixers.util.Function4"
import { $Function5 } from "com.mojang.datafixers.util.Function5"
import { $Function6 } from "com.mojang.datafixers.util.Function6"
import { $Function7 } from "com.mojang.datafixers.util.Function7"
import { $Function } from "java.util.function.Function"
import { $Function11 } from "com.mojang.datafixers.util.Function11"
import { $Function12 } from "com.mojang.datafixers.util.Function12"
import { $Function3 } from "com.mojang.datafixers.util.Function3"
import { $Function10 } from "com.mojang.datafixers.util.Function10"

export interface $Function13<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, T9 = any, T10 = any, T11 = any, T12 = any, T13 = any, R = any> {
"apply"(t10: T1, t21: T2, t32: T3, t43: T4, t54: T5, t65: T6, t76: T7, t87: T8, t98: T9, t109: T10, t1110: T11, t1211: T12, t1312: T13): R
"curry"(): $Function<T1, $Function12<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>
"curry10"(): $Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, $Function3<T11, T12, T13, R>>
"curry11"(): $Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, $BiFunction<T12, T13, R>>
"curry12"(): $Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, $Function<T13, R>>
"curry2"(): $BiFunction<T1, T2, $Function11<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>
"curry3"(): $Function3<T1, T2, T3, $Function10<T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>
"curry4"(): $Function4<T1, T2, T3, T4, $Function9<T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>
"curry5"(): $Function5<T1, T2, T3, T4, T5, $Function8<T6, T7, T8, T9, T10, T11, T12, T13, R>>
"curry6"(): $Function6<T1, T2, T3, T4, T5, T6, $Function7<T7, T8, T9, T10, T11, T12, T13, R>>
"curry7"(): $Function7<T1, T2, T3, T4, T5, T6, T7, $Function6<T8, T9, T10, T11, T12, T13, R>>
"curry8"(): $Function8<T1, T2, T3, T4, T5, T6, T7, T8, $Function5<T9, T10, T11, T12, T13, R>>
"curry9"(): $Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, $Function4<T10, T11, T12, T13, R>>
}

export namespace $Function13 {
const probejs$$marker: never
}
export abstract class $Function13$$Static<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, T9 = any, T10 = any, T11 = any, T12 = any, T13 = any, R = any> implements $Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R> {
}
}

declare module "com.mojang.datafixers.util.Function14" {
import { $Function8 } from "com.mojang.datafixers.util.Function8"
import { $Function9 } from "com.mojang.datafixers.util.Function9"
import { $BiFunction } from "java.util.function.BiFunction"
import { $Function4 } from "com.mojang.datafixers.util.Function4"
import { $Function5 } from "com.mojang.datafixers.util.Function5"
import { $Function6 } from "com.mojang.datafixers.util.Function6"
import { $Function7 } from "com.mojang.datafixers.util.Function7"
import { $Function13 } from "com.mojang.datafixers.util.Function13"
import { $Function } from "java.util.function.Function"
import { $Function11 } from "com.mojang.datafixers.util.Function11"
import { $Function3 } from "com.mojang.datafixers.util.Function3"
import { $Function12 } from "com.mojang.datafixers.util.Function12"
import { $Function10 } from "com.mojang.datafixers.util.Function10"

export interface $Function14<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, T9 = any, T10 = any, T11 = any, T12 = any, T13 = any, T14 = any, R = any> {
"apply"(t10: T1, t21: T2, t32: T3, t43: T4, t54: T5, t65: T6, t76: T7, t87: T8, t98: T9, t109: T10, t1110: T11, t1211: T12, t1312: T13, t1413: T14): R
"curry"(): $Function<T1, $Function13<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>
"curry10"(): $Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, $Function4<T11, T12, T13, T14, R>>
"curry11"(): $Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, $Function3<T12, T13, T14, R>>
"curry12"(): $Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, $BiFunction<T13, T14, R>>
"curry13"(): $Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, $Function<T14, R>>
"curry2"(): $BiFunction<T1, T2, $Function12<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>
"curry3"(): $Function3<T1, T2, T3, $Function11<T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>
"curry4"(): $Function4<T1, T2, T3, T4, $Function10<T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>
"curry5"(): $Function5<T1, T2, T3, T4, T5, $Function9<T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>
"curry6"(): $Function6<T1, T2, T3, T4, T5, T6, $Function8<T7, T8, T9, T10, T11, T12, T13, T14, R>>
"curry7"(): $Function7<T1, T2, T3, T4, T5, T6, T7, $Function7<T8, T9, T10, T11, T12, T13, T14, R>>
"curry8"(): $Function8<T1, T2, T3, T4, T5, T6, T7, T8, $Function6<T9, T10, T11, T12, T13, T14, R>>
"curry9"(): $Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, $Function5<T10, T11, T12, T13, T14, R>>
}

export namespace $Function14 {
const probejs$$marker: never
}
export abstract class $Function14$$Static<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, T9 = any, T10 = any, T11 = any, T12 = any, T13 = any, T14 = any, R = any> implements $Function14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R> {
}
}

declare module "com.mojang.datafixers.util.Function11" {
import { $Function10 } from "com.mojang.datafixers.util.Function10"
import { $Function8 } from "com.mojang.datafixers.util.Function8"
import { $Function9 } from "com.mojang.datafixers.util.Function9"
import { $BiFunction } from "java.util.function.BiFunction"
import { $Function4 } from "com.mojang.datafixers.util.Function4"
import { $Function5 } from "com.mojang.datafixers.util.Function5"
import { $Function6 } from "com.mojang.datafixers.util.Function6"
import { $Function7 } from "com.mojang.datafixers.util.Function7"
import { $Function } from "java.util.function.Function"
import { $Function3 } from "com.mojang.datafixers.util.Function3"

export interface $Function11<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, T9 = any, T10 = any, T11 = any, R = any> {
"apply"(t10: T1, t21: T2, t32: T3, t43: T4, t54: T5, t65: T6, t76: T7, t87: T8, t98: T9, t109: T10, t1110: T11): R
"curry"(): $Function<T1, $Function10<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>>
"curry10"(): $Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, $Function<T11, R>>
"curry2"(): $BiFunction<T1, T2, $Function9<T3, T4, T5, T6, T7, T8, T9, T10, T11, R>>
"curry3"(): $Function3<T1, T2, T3, $Function8<T4, T5, T6, T7, T8, T9, T10, T11, R>>
"curry4"(): $Function4<T1, T2, T3, T4, $Function7<T5, T6, T7, T8, T9, T10, T11, R>>
"curry5"(): $Function5<T1, T2, T3, T4, T5, $Function6<T6, T7, T8, T9, T10, T11, R>>
"curry6"(): $Function6<T1, T2, T3, T4, T5, T6, $Function5<T7, T8, T9, T10, T11, R>>
"curry7"(): $Function7<T1, T2, T3, T4, T5, T6, T7, $Function4<T8, T9, T10, T11, R>>
"curry8"(): $Function8<T1, T2, T3, T4, T5, T6, T7, T8, $Function3<T9, T10, T11, R>>
"curry9"(): $Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, $BiFunction<T10, T11, R>>
}

export namespace $Function11 {
const probejs$$marker: never
}
export abstract class $Function11$$Static<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, T9 = any, T10 = any, T11 = any, R = any> implements $Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R> {
}
}

declare module "com.mojang.datafixers.util.Function12" {
import { $Function10 } from "com.mojang.datafixers.util.Function10"
import { $Function8 } from "com.mojang.datafixers.util.Function8"
import { $Function9 } from "com.mojang.datafixers.util.Function9"
import { $BiFunction } from "java.util.function.BiFunction"
import { $Function4 } from "com.mojang.datafixers.util.Function4"
import { $Function5 } from "com.mojang.datafixers.util.Function5"
import { $Function6 } from "com.mojang.datafixers.util.Function6"
import { $Function7 } from "com.mojang.datafixers.util.Function7"
import { $Function } from "java.util.function.Function"
import { $Function11 } from "com.mojang.datafixers.util.Function11"
import { $Function3 } from "com.mojang.datafixers.util.Function3"

export interface $Function12<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, T9 = any, T10 = any, T11 = any, T12 = any, R = any> {
"apply"(t10: T1, t21: T2, t32: T3, t43: T4, t54: T5, t65: T6, t76: T7, t87: T8, t98: T9, t109: T10, t1110: T11, t1211: T12): R
"curry"(): $Function<T1, $Function11<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>
"curry10"(): $Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, $BiFunction<T11, T12, R>>
"curry11"(): $Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, $Function<T12, R>>
"curry2"(): $BiFunction<T1, T2, $Function10<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>
"curry3"(): $Function3<T1, T2, T3, $Function9<T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>
"curry4"(): $Function4<T1, T2, T3, T4, $Function8<T5, T6, T7, T8, T9, T10, T11, T12, R>>
"curry5"(): $Function5<T1, T2, T3, T4, T5, $Function7<T6, T7, T8, T9, T10, T11, T12, R>>
"curry6"(): $Function6<T1, T2, T3, T4, T5, T6, $Function6<T7, T8, T9, T10, T11, T12, R>>
"curry7"(): $Function7<T1, T2, T3, T4, T5, T6, T7, $Function5<T8, T9, T10, T11, T12, R>>
"curry8"(): $Function8<T1, T2, T3, T4, T5, T6, T7, T8, $Function4<T9, T10, T11, T12, R>>
"curry9"(): $Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, $Function3<T10, T11, T12, R>>
}

export namespace $Function12 {
const probejs$$marker: never
}
export abstract class $Function12$$Static<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, T9 = any, T10 = any, T11 = any, T12 = any, R = any> implements $Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R> {
}
}

declare module "com.mojang.datafixers.schemas.Schema" {
import { $DSL$TypeReference$$Type } from "com.mojang.datafixers.DSL$TypeReference"
import { $Map, $Map$$Type } from "java.util.Map"
import { $TaggedChoice$TaggedChoiceType } from "com.mojang.datafixers.types.templates.TaggedChoice$TaggedChoiceType"
import { $Set } from "java.util.Set"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $Type } from "com.mojang.datafixers.types.Type"
import { $TypeTemplate, $TypeTemplate$$Type } from "com.mojang.datafixers.types.templates.TypeTemplate"

export class $Schema {
constructor(int0: integer, schema1: $Schema$$Type)

public "findChoiceType"(typeReference0: $DSL$TypeReference$$Type): $TaggedChoice$TaggedChoiceType<any>
public "getChoiceType"(typeReference0: $DSL$TypeReference$$Type, string1: string): $Type<any>
public "getParent"(): $Schema
public "getType"(typeReference0: $DSL$TypeReference$$Type): $Type<any>
public "getTypeRaw"(typeReference0: $DSL$TypeReference$$Type): $Type<any>
public "getVersionKey"(): integer
public "id"(string0: string): $TypeTemplate
public "register"(map0: $Map$$Type<string, $Supplier$$Type<$TypeTemplate$$Type>>, string1: string, function2: $Function$$Type<string, $TypeTemplate>): void
public "register"(map0: $Map$$Type<string, $Supplier$$Type<$TypeTemplate$$Type>>, string1: string, supplier2: $Supplier$$Type<$TypeTemplate>): void
public "registerBlockEntities"(schema0: $Schema$$Type): $Map<string, $Supplier<$TypeTemplate>>
public "registerEntities"(schema0: $Schema$$Type): $Map<string, $Supplier<$TypeTemplate>>
public "registerSimple"(map0: $Map$$Type<string, $Supplier$$Type<$TypeTemplate$$Type>>, string1: string): void
public "registerType"(boolean0: boolean, typeReference1: $DSL$TypeReference$$Type, supplier2: $Supplier$$Type<$TypeTemplate>): void
public "registerTypes"(schema0: $Schema$$Type, map1: $Map$$Type<string, $Supplier$$Type<$TypeTemplate$$Type>>, map2: $Map$$Type<string, $Supplier$$Type<$TypeTemplate$$Type>>): void
public "resolveTemplate"(string0: string): $TypeTemplate
public "types"(): $Set<string>
get "parent"(): $Schema
get "versionKey"(): integer
}
}

declare module "com.mojang.datafixers.types.templates.RecursivePoint$RecursivePointType" {
import { $Type$FieldNotFoundException } from "com.mojang.datafixers.types.Type$FieldNotFoundException"
import { $Either } from "com.mojang.datafixers.util.Either"
import { $View } from "com.mojang.datafixers.View"
import { $TypeRewriteRule$$Type } from "com.mojang.datafixers.TypeRewriteRule"
import { $RewriteResult } from "com.mojang.datafixers.RewriteResult"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Type, $Type$$Type } from "com.mojang.datafixers.types.Type"
import { $PointFreeRule$$Type } from "com.mojang.datafixers.functions.PointFreeRule"
import { $TypedOptic } from "com.mojang.datafixers.TypedOptic"
import { $DynamicOps$$Type } from "com.mojang.serialization.DynamicOps"
import { $RecursiveTypeFamily, $RecursiveTypeFamily$$Type } from "com.mojang.datafixers.types.families.RecursiveTypeFamily"
import { $Optional } from "java.util.Optional"
import { $Type$TypeMatcher$$Type } from "com.mojang.datafixers.types.Type$TypeMatcher"

export class $RecursivePoint$RecursivePointType<A = any> extends $Type<A> {
constructor(recursiveTypeFamily0: $RecursiveTypeFamily$$Type, int1: integer, supplier2: $Supplier$$Type<$Type<A>>)

public "all"(typeRewriteRule0: $TypeRewriteRule$$Type, boolean1: boolean, boolean2: boolean): $RewriteResult<A, any>
public "everywhere"(typeRewriteRule0: $TypeRewriteRule$$Type, pointFreeRule1: $PointFreeRule$$Type, boolean2: boolean, boolean3: boolean): $Optional<$RewriteResult<A, any>>
public "family"(): $RecursiveTypeFamily
public "findTypeInChildren"<FT, FR>(type0: $Type$$Type<FT>, type1: $Type$$Type<FR>, typeMatcher2: $Type$TypeMatcher$$Type<FT, FR>, boolean3: boolean): $Either<$TypedOptic<A, any, FT, FR>, $Type$FieldNotFoundException>
public "in"(): $View<A, A>
public "index"(): integer
public "one"(typeRewriteRule0: $TypeRewriteRule$$Type): $Optional<$RewriteResult<A, any>>
public "out"(): $View<A, A>
public "point"(dynamicOps0: $DynamicOps$$Type<any>): $Optional<A>
public "unfold"(): $Type<A>
}
}

declare module "com.mojang.datafixers.FamilyOptic" {
import { $TypedOptic } from "com.mojang.datafixers.TypedOptic"

export interface $FamilyOptic<A = any, B = any> {
"apply"(int0: integer): $TypedOptic<any, any, A, B>
}

export namespace $FamilyOptic {
const probejs$$marker: never
}
export abstract class $FamilyOptic$$Static<A = any, B = any> implements $FamilyOptic<A, B> {
}
}

declare module "com.mojang.datafixers.TypeRewriteRule" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $PointFreeRule$$Type } from "com.mojang.datafixers.functions.PointFreeRule"
import { $List$$Type } from "java.util.List"
import { $RewriteResult, $RewriteResult$$Type } from "com.mojang.datafixers.RewriteResult"
import { $Optional } from "java.util.Optional"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Type$$Type } from "com.mojang.datafixers.types.Type"

export interface $TypeRewriteRule {
"rewrite"<A>(type0: $Type$$Type<A>): $Optional<$RewriteResult<A, any>>
}

export namespace $TypeRewriteRule {
function all(typeRewriteRule0: $TypeRewriteRule$$Type, boolean1: boolean, boolean2: boolean): $TypeRewriteRule
function checkOnce(typeRewriteRule0: $TypeRewriteRule$$Type, consumer1: $Consumer$$Type<$Type$$Type<any>>): $TypeRewriteRule
function everywhere(typeRewriteRule0: $TypeRewriteRule$$Type, pointFreeRule1: $PointFreeRule$$Type, boolean2: boolean, boolean3: boolean): $TypeRewriteRule
function ifSame<B>(type0: $Type$$Type<B>, rewriteResult1: $RewriteResult$$Type<B, any>): $TypeRewriteRule
function nop(): $TypeRewriteRule
function once(typeRewriteRule0: $TypeRewriteRule$$Type): $TypeRewriteRule
function one(typeRewriteRule0: $TypeRewriteRule$$Type): $TypeRewriteRule
function orElse(typeRewriteRule0: $TypeRewriteRule$$Type, supplier1: $Supplier$$Type<$TypeRewriteRule>): $TypeRewriteRule
function orElse(typeRewriteRule0: $TypeRewriteRule$$Type, typeRewriteRule1: $TypeRewriteRule$$Type): $TypeRewriteRule
function seq(typeRewriteRule0: $TypeRewriteRule$$Type, typeRewriteRule1: $TypeRewriteRule$$Type): $TypeRewriteRule
function seq(typeRewriteRule0: $TypeRewriteRule$$Type, ...typeRewriteRule1s: $TypeRewriteRule$$Type[]): $TypeRewriteRule
function seq(list0: $List$$Type<$TypeRewriteRule$$Type>): $TypeRewriteRule
}
export abstract class $TypeRewriteRule$$Static implements $TypeRewriteRule {
static "all"(typeRewriteRule0: $TypeRewriteRule$$Type, boolean1: boolean, boolean2: boolean): $TypeRewriteRule
static "checkOnce"(typeRewriteRule0: $TypeRewriteRule$$Type, consumer1: $Consumer$$Type<$Type$$Type<any>>): $TypeRewriteRule
static "everywhere"(typeRewriteRule0: $TypeRewriteRule$$Type, pointFreeRule1: $PointFreeRule$$Type, boolean2: boolean, boolean3: boolean): $TypeRewriteRule
static "ifSame"<B>(type0: $Type$$Type<B>, rewriteResult1: $RewriteResult$$Type<B, any>): $TypeRewriteRule
static "nop"(): $TypeRewriteRule
static "once"(typeRewriteRule0: $TypeRewriteRule$$Type): $TypeRewriteRule
static "one"(typeRewriteRule0: $TypeRewriteRule$$Type): $TypeRewriteRule
static "orElse"(typeRewriteRule0: $TypeRewriteRule$$Type, supplier1: $Supplier$$Type<$TypeRewriteRule>): $TypeRewriteRule
static "orElse"(typeRewriteRule0: $TypeRewriteRule$$Type, typeRewriteRule1: $TypeRewriteRule$$Type): $TypeRewriteRule
static "seq"(typeRewriteRule0: $TypeRewriteRule$$Type, typeRewriteRule1: $TypeRewriteRule$$Type): $TypeRewriteRule
static "seq"(typeRewriteRule0: $TypeRewriteRule$$Type, ...typeRewriteRule1s: $TypeRewriteRule$$Type[]): $TypeRewriteRule
static "seq"(list0: $List$$Type<$TypeRewriteRule$$Type>): $TypeRewriteRule
}
}

declare module "com.mojang.datafixers.functions.PointFree" {
import { $DynamicOps } from "com.mojang.serialization.DynamicOps"
import { $Function } from "java.util.function.Function"
import { $Type } from "com.mojang.datafixers.types.Type"

export class $PointFree<T = any> {
constructor()

public "eval"(): $Function<$DynamicOps<any>, T>
public "evalCached"(): $Function<$DynamicOps<any>, T>
public static "indent"(int0: integer): string
public "toString"(int0: integer): string
public "type"(): $Type<T>
}
}

declare module "com.mojang.datafixers.RewriteResult" {
import { $View, $View$$Type } from "com.mojang.datafixers.View"
import { $Record } from "java.lang.Record"
import { $BitSet, $BitSet$$Type } from "java.util.BitSet"
import { $Type$$Type } from "com.mojang.datafixers.types.Type"

export class $RewriteResult<A = any, B = any> extends $Record {
constructor(view: $View$$Type<A, B>, recData: $BitSet$$Type)

public "compose"<C>(rewriteResult0: $RewriteResult$$Type<C, A>): $RewriteResult<C, B>
public static "create"<A, B>(view0: $View$$Type<A, B>, bitSet1: $BitSet$$Type): $RewriteResult<A, B>
public static "nop"<A>(type0: $Type$$Type<A>): $RewriteResult<A, A>
public "recData"(): $BitSet
public "view"(): $View<A, B>
}
}

declare module "com.mojang.datafixers.kinds.Applicative$Mu" {
import { $Functor$Mu } from "com.mojang.datafixers.kinds.Functor$Mu"

export interface $Applicative$Mu extends $Functor$Mu {
}

export namespace $Applicative$Mu {
const probejs$$marker: never
}
export abstract class $Applicative$Mu$$Static implements $Applicative$Mu {
}
}

declare module "com.mojang.datafixers.Typed" {
import { $List } from "java.util.List"
import { $Either } from "com.mojang.datafixers.util.Either"
import { $TypedOptic$$Type } from "com.mojang.datafixers.TypedOptic"
import { $Dynamic } from "com.mojang.serialization.Dynamic"
import { $DynamicOps, $DynamicOps$$Type } from "com.mojang.serialization.DynamicOps"
import { $Optional } from "java.util.Optional"
import { $DataResult } from "com.mojang.serialization.DataResult"
import { $Function$$Type } from "java.util.function.Function"
import { $Type, $Type$$Type } from "com.mojang.datafixers.types.Type"
import { $Pair } from "com.mojang.datafixers.util.Pair"
import { $OpticFinder$$Type } from "com.mojang.datafixers.OpticFinder"

export class $Typed<A = any> {
constructor(type0: $Type$$Type<A>, dynamicOps1: $DynamicOps$$Type<any>, a2: A)

public "get"<FT>(opticFinder0: $OpticFinder$$Type<FT>): FT
public "getAll"<FT>(typedOptic0: $TypedOptic$$Type<A, any, FT, any>): $List<FT>
public "getAllTyped"<FT>(opticFinder0: $OpticFinder$$Type<FT>): $List<$Typed<FT>>
public "getOps"(): $DynamicOps<any>
public "getOptional"<FT>(opticFinder0: $OpticFinder$$Type<FT>): $Optional<FT>
public "getOptionalTyped"<FT>(opticFinder0: $OpticFinder$$Type<FT>): $Optional<$Typed<FT>>
public "getOrCreate"<FT>(opticFinder0: $OpticFinder$$Type<FT>): FT
public "getOrCreateTyped"<FT>(opticFinder0: $OpticFinder$$Type<FT>): $Typed<FT>
public "getOrDefault"<FT>(opticFinder0: $OpticFinder$$Type<FT>, ft1: FT): FT
public "getType"(): $Type<A>
public "getTyped"<FT>(opticFinder0: $OpticFinder$$Type<FT>): $Typed<FT>
public "getValue"(): A
public "inj1"<B>(type0: $Type$$Type<B>): $Typed<$Either<A, B>>
public "inj2"<B>(type0: $Type$$Type<B>): $Typed<$Either<B, A>>
public "out"(): $Typed<A>
public static "pair"<A, B>(typed0: $Typed$$Type<A>, typed1: $Typed$$Type<B>): $Typed<$Pair<A, B>>
public "set"<FT>(opticFinder0: $OpticFinder$$Type<FT>, ft1: FT): $Typed<any>
public "set"<FT, FR>(opticFinder0: $OpticFinder$$Type<FT>, typed1: $Typed$$Type<FR>): $Typed<any>
public "set"<FT, FR>(opticFinder0: $OpticFinder$$Type<FT>, type1: $Type$$Type<FR>, fr2: FR): $Typed<any>
public "update"<FT>(opticFinder0: $OpticFinder$$Type<FT>, function1: $Function$$Type<FT, FT>): $Typed<any>
public "update"<FT, FR>(opticFinder0: $OpticFinder$$Type<FT>, type1: $Type$$Type<FR>, function2: $Function$$Type<FT, FR>): $Typed<any>
public "updateRecursive"<FT, FR>(opticFinder0: $OpticFinder$$Type<FT>, type1: $Type$$Type<FR>, function2: $Function$$Type<FT, FR>): $Typed<any>
public "updateRecursive"<FT>(opticFinder0: $OpticFinder$$Type<FT>, function1: $Function$$Type<FT, FT>): $Typed<any>
public "updateRecursiveTyped"<FT>(opticFinder0: $OpticFinder$$Type<FT>, function1: $Function$$Type<$Typed$$Type<any>, $Typed<any>>): $Typed<any>
public "updateRecursiveTyped"<FT, FR>(opticFinder0: $OpticFinder$$Type<FT>, type1: $Type$$Type<FR>, function2: $Function$$Type<$Typed$$Type<any>, $Typed<any>>): $Typed<any>
public "updateTyped"<FT, FR>(opticFinder0: $OpticFinder$$Type<FT>, type1: $Type$$Type<FR>, function2: $Function$$Type<$Typed$$Type<any>, $Typed<any>>): $Typed<any>
public "updateTyped"<FT>(opticFinder0: $OpticFinder$$Type<FT>, function1: $Function$$Type<$Typed$$Type<any>, $Typed<any>>): $Typed<any>
public "write"(): $DataResult<$Dynamic<any>>
get "ops"(): $DynamicOps<any>
get "type"(): $Type<A>
get "value"(): A
}
}

declare module "com.mojang.datafixers.View" {
import { $PointFreeRule$$Type } from "com.mojang.datafixers.functions.PointFreeRule"
import { $PointFree, $PointFree$$Type } from "com.mojang.datafixers.functions.PointFree"
import { $App2 } from "com.mojang.datafixers.kinds.App2"
import { $DynamicOps$$Type } from "com.mojang.serialization.DynamicOps"
import { $View$Mu } from "com.mojang.datafixers.View$Mu"
import { $Optional } from "java.util.Optional"
import { $Record } from "java.lang.Record"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Type, $Type$$Type } from "com.mojang.datafixers.types.Type"

export class $View<A = any, B = any> extends $Record implements $App2<$View$Mu, A, B> {
constructor(function_: $PointFree$$Type<$Function$$Type<A, B>>)

public "compose"<C>(view0: $View$$Type<C, A>): $View<C, B>
public static "create"<A, B>(pointFree0: $PointFree$$Type<$Function$$Type<A, B>>): $View<A, B>
public static "create"<A, B>(string0: string, type1: $Type$$Type<A>, type2: $Type$$Type<B>, function3: $Function$$Type<$DynamicOps$$Type<any>, $Function<A, B>>): $View<A, B>
public "flatMap"<C>(function0: $Function$$Type<$Type$$Type<B>, $View<B, C>>): $View<A, C>
public "funcType"(): $Type<$Function<A, B>>
public "function"(): $PointFree<$Function<A, B>>
public "isNop"(): boolean
public "newType"(): $Type<B>
public static "nopView"<A>(type0: $Type$$Type<A>): $View<A, A>
public "rewrite"(pointFreeRule0: $PointFreeRule$$Type): $Optional<$View<A, B>>
public "rewriteOrNop"(pointFreeRule0: $PointFreeRule$$Type): $View<A, B>
public "type"(): $Type<A>
get "nop"(): boolean
}
}

declare module "com.mojang.datafixers.types.families.Algebra" {
import { $RewriteResult } from "com.mojang.datafixers.RewriteResult"

export interface $Algebra {
"apply"(int0: integer): $RewriteResult<any, any>
"toString"(int0: integer): string
}

export namespace $Algebra {
const probejs$$marker: never
}
export abstract class $Algebra$$Static implements $Algebra {
}
}

declare module "com.mojang.datafixers.View$Mu" {
import { $K2 } from "com.mojang.datafixers.kinds.K2"

export class $View$Mu implements $K2 {
}
}

declare module "com.mojang.datafixers.util.Pair" {
import { $Map } from "java.util.Map"
import { $App, $App$$Type } from "com.mojang.datafixers.kinds.App"
import { $Collector } from "java.util.stream.Collector"
import { $Function$$Type } from "java.util.function.Function"
import { $Pair$Mu, $Pair$Mu$$Type } from "com.mojang.datafixers.util.Pair$Mu"

export class $Pair<F = any, S = any> implements $App<$Pair$Mu<S>, F> {
constructor(f0: F, s1: S)

public "getFirst"(): F
public "getSecond"(): S
public "mapFirst"<F2>(function0: $Function$$Type<F, F2>): $Pair<F2, S>
public "mapSecond"<S2>(function0: $Function$$Type<S, S2>): $Pair<F, S2>
public static "of"<F, S>(f0: F, s1: S): $Pair<F, S>
public "swap"(): $Pair<S, F>
public static "toMap"<F, S>(): $Collector<$Pair<F, S>, any, $Map<F, S>>
public static "unbox"<F, S>(app0: $App$$Type<$Pair$Mu$$Type<S>, F>): $Pair<F, S>
get "first"(): F
get "second"(): S
}
}

declare module "com.mojang.datafixers.DSL$TypeReference" {
import { $Schema$$Type } from "com.mojang.datafixers.schemas.Schema"
import { $TypeTemplate } from "com.mojang.datafixers.types.templates.TypeTemplate"

export interface $DSL$TypeReference {
"in"(schema0: $Schema$$Type): $TypeTemplate
"typeName"(): string
}

export namespace $DSL$TypeReference {
const probejs$$marker: never
}
export abstract class $DSL$TypeReference$$Static implements $DSL$TypeReference {
}
}

declare module "com.mojang.datafixers.types.Type$FieldNotFoundException" {
import { $Type$TypeError } from "com.mojang.datafixers.types.Type$TypeError"

export class $Type$FieldNotFoundException extends $Type$TypeError {
constructor(string0: string)

}
}

declare module "com.mojang.datafixers.types.templates.TypeTemplate" {
import { $Type$FieldNotFoundException } from "com.mojang.datafixers.types.Type$FieldNotFoundException"
import { $Either } from "com.mojang.datafixers.util.Either"
import { $RewriteResult } from "com.mojang.datafixers.RewriteResult"
import { $TypeFamily, $TypeFamily$$Type } from "com.mojang.datafixers.types.families.TypeFamily"
import { $FamilyOptic, $FamilyOptic$$Type } from "com.mojang.datafixers.FamilyOptic"
import { $Type, $Type$$Type } from "com.mojang.datafixers.types.Type"
import { $IntFunction, $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $TypeTemplate {
"apply"(typeFamily0: $TypeFamily$$Type): $TypeFamily
"applyO"<A, B>(familyOptic0: $FamilyOptic$$Type<A, B>, type1: $Type$$Type<A>, type2: $Type$$Type<B>): $FamilyOptic<A, B>
"findFieldOrType"<A, B>(int0: integer, string1: string, type2: $Type$$Type<A>, type3: $Type$$Type<B>): $Either<$TypeTemplate, $Type$FieldNotFoundException>
"hmap"(typeFamily0: $TypeFamily$$Type, intFunction1: $IntFunction$$Type<$RewriteResult<any, any>>): $IntFunction<$RewriteResult<any, any>>
"size"(): integer
"toSimpleType"(): $Type<any>
}

export namespace $TypeTemplate {
const probejs$$marker: never
}
export abstract class $TypeTemplate$$Static implements $TypeTemplate {
}
}

declare module "com.mojang.datafixers.OpticFinder" {
import { $Type$FieldNotFoundException } from "com.mojang.datafixers.types.Type$FieldNotFoundException"
import { $Either } from "com.mojang.datafixers.util.Either"
import { $TypedOptic } from "com.mojang.datafixers.TypedOptic"
import { $Type, $Type$$Type } from "com.mojang.datafixers.types.Type"

export interface $OpticFinder<FT = any> {
"findType"<A>(type0: $Type$$Type<A>, boolean1: boolean): $Either<$TypedOptic<A, any, FT, FT>, $Type$FieldNotFoundException>
"findType"<A, FR>(type0: $Type$$Type<A>, type1: $Type$$Type<FR>, boolean2: boolean): $Either<$TypedOptic<A, any, FT, FR>, $Type$FieldNotFoundException>
"inField"<GT>(string0: string, type1: $Type$$Type<GT>): $OpticFinder<FT>
"type"(): $Type<FT>
}

export namespace $OpticFinder {
const probejs$$marker: never
}
export abstract class $OpticFinder$$Static<FT = any> implements $OpticFinder<FT> {
}
}

declare module "com.mojang.datafixers.optics.Optic" {
import { $K2, $K2$$Type } from "com.mojang.datafixers.kinds.K2"
import { $K1, $K1$$Type } from "com.mojang.datafixers.kinds.K1"
import { $App2 } from "com.mojang.datafixers.kinds.App2"
import { $App$$Type } from "com.mojang.datafixers.kinds.App"
import { $Optional } from "java.util.Optional"
import { $Set$$Type } from "java.util.Set"
import { $TypeToken$$Type } from "com.google.common.reflect.TypeToken"
import { $Function } from "java.util.function.Function"

export interface $Optic<Proof extends $K1 = $K1, S = any, T = any, A = any, B = any> {
"eval"<P extends $K2>(app0: $App$$Type<Proof, P>): $Function<$App2<P, A, B>, $App2<P, S, T>>
"upCast"<Proof2 extends $K1>(set0: $Set$$Type<$TypeToken$$Type<$K1$$Type>>, typeToken1: $TypeToken$$Type<Proof2>): $Optional<$Optic<Proof2, S, T, A, B>>
}

export namespace $Optic {
const probejs$$marker: never
}
export abstract class $Optic$$Static<Proof extends $K1 = $K1, S = any, T = any, A = any, B = any> implements $Optic<Proof, S, T, A, B> {
}
}

declare module "com.mojang.datafixers.kinds.App" {
import { $K1 } from "com.mojang.datafixers.kinds.K1"

export interface $App<F extends $K1 = $K1, A = any> {
}

export namespace $App {
const probejs$$marker: never
}
export abstract class $App$$Static<F extends $K1 = $K1, A = any> implements $App<F, A> {
}
}

declare module "com.mojang.datafixers.kinds.K2" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $K2 {
}

export namespace $K2 {
const probejs$$marker: never
}
export abstract class $K2$$Static implements $K2 {
}
}

declare module "com.mojang.datafixers.kinds.K1" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $K1 {
}

export namespace $K1 {
const probejs$$marker: never
}
export abstract class $K1$$Static implements $K1 {
}
}

declare module "com.mojang.datafixers.kinds.Kind1" {
import { $Products$P9 } from "com.mojang.datafixers.Products$P9"
import { $Products$P8 } from "com.mojang.datafixers.Products$P8"
import { $Products$P5 } from "com.mojang.datafixers.Products$P5"
import { $Products$P4 } from "com.mojang.datafixers.Products$P4"
import { $Products$P7 } from "com.mojang.datafixers.Products$P7"
import { $Products$P6 } from "com.mojang.datafixers.Products$P6"
import { $App, $App$$Type } from "com.mojang.datafixers.kinds.App"
import { $Products$P13 } from "com.mojang.datafixers.Products$P13"
import { $Products$P14 } from "com.mojang.datafixers.Products$P14"
import { $Products$P11 } from "com.mojang.datafixers.Products$P11"
import { $K1, $K1$$Type } from "com.mojang.datafixers.kinds.K1"
import { $Products$P12 } from "com.mojang.datafixers.Products$P12"
import { $Products$P10 } from "com.mojang.datafixers.Products$P10"
import { $Products$P1 } from "com.mojang.datafixers.Products$P1"
import { $Products$P3 } from "com.mojang.datafixers.Products$P3"
import { $Products$P2 } from "com.mojang.datafixers.Products$P2"
import { $Products$P15 } from "com.mojang.datafixers.Products$P15"
import { $Products$P16 } from "com.mojang.datafixers.Products$P16"
import { $Kind1$Mu, $Kind1$Mu$$Type } from "com.mojang.datafixers.kinds.Kind1$Mu"

export interface $Kind1<F extends $K1 = $K1, Mu extends $Kind1$Mu = $Kind1$Mu> extends $App<Mu, F> {
"group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>, app9: $App$$Type<F, T10>, app10: $App$$Type<F, T11>, app11: $App$$Type<F, T12>): $Products$P12<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>
"group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>, app9: $App$$Type<F, T10>, app10: $App$$Type<F, T11>): $Products$P11<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>
"group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>, app9: $App$$Type<F, T10>): $Products$P10<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>
"group"<T1, T2, T3, T4, T5, T6, T7, T8, T9>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>): $Products$P9<F, T1, T2, T3, T4, T5, T6, T7, T8, T9>
"group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>, app9: $App$$Type<F, T10>, app10: $App$$Type<F, T11>, app11: $App$$Type<F, T12>, app12: $App$$Type<F, T13>, app13: $App$$Type<F, T14>, app14: $App$$Type<F, T15>, app15: $App$$Type<F, T16>): $Products$P16<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>
"group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>, app9: $App$$Type<F, T10>, app10: $App$$Type<F, T11>, app11: $App$$Type<F, T12>, app12: $App$$Type<F, T13>, app13: $App$$Type<F, T14>, app14: $App$$Type<F, T15>): $Products$P15<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>
"group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>, app9: $App$$Type<F, T10>, app10: $App$$Type<F, T11>, app11: $App$$Type<F, T12>, app12: $App$$Type<F, T13>, app13: $App$$Type<F, T14>): $Products$P14<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>
"group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>, app9: $App$$Type<F, T10>, app10: $App$$Type<F, T11>, app11: $App$$Type<F, T12>, app12: $App$$Type<F, T13>): $Products$P13<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>
"group"<T1, T2, T3, T4>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>): $Products$P4<F, T1, T2, T3, T4>
"group"<T1, T2, T3>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>): $Products$P3<F, T1, T2, T3>
"group"<T1, T2>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>): $Products$P2<F, T1, T2>
"group"<T1>(app0: $App$$Type<F, T1>): $Products$P1<F, T1>
"group"<T1, T2, T3, T4, T5, T6, T7, T8>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>): $Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>
"group"<T1, T2, T3, T4, T5, T6, T7>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>): $Products$P7<F, T1, T2, T3, T4, T5, T6, T7>
"group"<T1, T2, T3, T4, T5, T6>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>): $Products$P6<F, T1, T2, T3, T4, T5, T6>
"group"<T1, T2, T3, T4, T5>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>): $Products$P5<F, T1, T2, T3, T4, T5>
}

export namespace $Kind1 {
function unbox<F extends $K1, Proof extends $Kind1$Mu>(app0: $App$$Type<Proof, F>): $Kind1<F, Proof>
}
export abstract class $Kind1$$Static<F extends $K1 = $K1, Mu extends $Kind1$Mu = $Kind1$Mu> implements $Kind1<F, Mu> {
static "unbox"<F extends $K1, Proof extends $Kind1$Mu>(app0: $App$$Type<Proof, F>): $Kind1<F, Proof>
}
}

declare module "com.mojang.datafixers.util.Function8" {
import { $BiFunction } from "java.util.function.BiFunction"
import { $Function4 } from "com.mojang.datafixers.util.Function4"
import { $Function5 } from "com.mojang.datafixers.util.Function5"
import { $Function6 } from "com.mojang.datafixers.util.Function6"
import { $Function7 } from "com.mojang.datafixers.util.Function7"
import { $Function } from "java.util.function.Function"
import { $Function3 } from "com.mojang.datafixers.util.Function3"

export interface $Function8<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, R = any> {
"apply"(t10: T1, t21: T2, t32: T3, t43: T4, t54: T5, t65: T6, t76: T7, t87: T8): R
"curry"(): $Function<T1, $Function7<T2, T3, T4, T5, T6, T7, T8, R>>
"curry2"(): $BiFunction<T1, T2, $Function6<T3, T4, T5, T6, T7, T8, R>>
"curry3"(): $Function3<T1, T2, T3, $Function5<T4, T5, T6, T7, T8, R>>
"curry4"(): $Function4<T1, T2, T3, T4, $Function4<T5, T6, T7, T8, R>>
"curry5"(): $Function5<T1, T2, T3, T4, T5, $Function3<T6, T7, T8, R>>
"curry6"(): $Function6<T1, T2, T3, T4, T5, T6, $BiFunction<T7, T8, R>>
"curry7"(): $Function7<T1, T2, T3, T4, T5, T6, T7, $Function<T8, R>>
}

export namespace $Function8 {
const probejs$$marker: never
}
export abstract class $Function8$$Static<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, R = any> implements $Function8<T1, T2, T3, T4, T5, T6, T7, T8, R> {
}
}

declare module "com.mojang.datafixers.util.Function9" {
import { $Function8 } from "com.mojang.datafixers.util.Function8"
import { $BiFunction } from "java.util.function.BiFunction"
import { $Function4 } from "com.mojang.datafixers.util.Function4"
import { $Function5 } from "com.mojang.datafixers.util.Function5"
import { $Function6 } from "com.mojang.datafixers.util.Function6"
import { $Function7 } from "com.mojang.datafixers.util.Function7"
import { $Function } from "java.util.function.Function"
import { $Function3 } from "com.mojang.datafixers.util.Function3"

export interface $Function9<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, T9 = any, R = any> {
"apply"(t10: T1, t21: T2, t32: T3, t43: T4, t54: T5, t65: T6, t76: T7, t87: T8, t98: T9): R
"curry"(): $Function<T1, $Function8<T2, T3, T4, T5, T6, T7, T8, T9, R>>
"curry2"(): $BiFunction<T1, T2, $Function7<T3, T4, T5, T6, T7, T8, T9, R>>
"curry3"(): $Function3<T1, T2, T3, $Function6<T4, T5, T6, T7, T8, T9, R>>
"curry4"(): $Function4<T1, T2, T3, T4, $Function5<T5, T6, T7, T8, T9, R>>
"curry5"(): $Function5<T1, T2, T3, T4, T5, $Function4<T6, T7, T8, T9, R>>
"curry6"(): $Function6<T1, T2, T3, T4, T5, T6, $Function3<T7, T8, T9, R>>
"curry7"(): $Function7<T1, T2, T3, T4, T5, T6, T7, $BiFunction<T8, T9, R>>
"curry8"(): $Function8<T1, T2, T3, T4, T5, T6, T7, T8, $Function<T9, R>>
}

export namespace $Function9 {
const probejs$$marker: never
}
export abstract class $Function9$$Static<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, T9 = any, R = any> implements $Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R> {
}
}

declare module "com.mojang.datafixers.util.Function4" {
import { $BiFunction } from "java.util.function.BiFunction"
import { $Function } from "java.util.function.Function"
import { $Function3 } from "com.mojang.datafixers.util.Function3"

export interface $Function4<T1 = any, T2 = any, T3 = any, T4 = any, R = any> {
"apply"(t10: T1, t21: T2, t32: T3, t43: T4): R
"curry"(): $Function<T1, $Function3<T2, T3, T4, R>>
"curry2"(): $BiFunction<T1, T2, $BiFunction<T3, T4, R>>
"curry3"(): $Function3<T1, T2, T3, $Function<T4, R>>
}

export namespace $Function4 {
const probejs$$marker: never
}
export abstract class $Function4$$Static<T1 = any, T2 = any, T3 = any, T4 = any, R = any> implements $Function4<T1, T2, T3, T4, R> {
}
}

declare module "com.mojang.datafixers.util.Function5" {
import { $BiFunction } from "java.util.function.BiFunction"
import { $Function4 } from "com.mojang.datafixers.util.Function4"
import { $Function } from "java.util.function.Function"
import { $Function3 } from "com.mojang.datafixers.util.Function3"

export interface $Function5<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, R = any> {
"apply"(t10: T1, t21: T2, t32: T3, t43: T4, t54: T5): R
"curry"(): $Function<T1, $Function4<T2, T3, T4, T5, R>>
"curry2"(): $BiFunction<T1, T2, $Function3<T3, T4, T5, R>>
"curry3"(): $Function3<T1, T2, T3, $BiFunction<T4, T5, R>>
"curry4"(): $Function4<T1, T2, T3, T4, $Function<T5, R>>
}

export namespace $Function5 {
const probejs$$marker: never
}
export abstract class $Function5$$Static<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, R = any> implements $Function5<T1, T2, T3, T4, T5, R> {
}
}

declare module "com.mojang.datafixers.util.Function6" {
import { $BiFunction } from "java.util.function.BiFunction"
import { $Function4 } from "com.mojang.datafixers.util.Function4"
import { $Function5 } from "com.mojang.datafixers.util.Function5"
import { $Function } from "java.util.function.Function"
import { $Function3 } from "com.mojang.datafixers.util.Function3"

export interface $Function6<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, R = any> {
"apply"(t10: T1, t21: T2, t32: T3, t43: T4, t54: T5, t65: T6): R
"curry"(): $Function<T1, $Function5<T2, T3, T4, T5, T6, R>>
"curry2"(): $BiFunction<T1, T2, $Function4<T3, T4, T5, T6, R>>
"curry3"(): $Function3<T1, T2, T3, $Function3<T4, T5, T6, R>>
"curry4"(): $Function4<T1, T2, T3, T4, $BiFunction<T5, T6, R>>
"curry5"(): $Function5<T1, T2, T3, T4, T5, $Function<T6, R>>
}

export namespace $Function6 {
const probejs$$marker: never
}
export abstract class $Function6$$Static<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, R = any> implements $Function6<T1, T2, T3, T4, T5, T6, R> {
}
}

declare module "com.mojang.datafixers.util.Function7" {
import { $BiFunction } from "java.util.function.BiFunction"
import { $Function4 } from "com.mojang.datafixers.util.Function4"
import { $Function5 } from "com.mojang.datafixers.util.Function5"
import { $Function6 } from "com.mojang.datafixers.util.Function6"
import { $Function } from "java.util.function.Function"
import { $Function3 } from "com.mojang.datafixers.util.Function3"

export interface $Function7<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, R = any> {
"apply"(t10: T1, t21: T2, t32: T3, t43: T4, t54: T5, t65: T6, t76: T7): R
"curry"(): $Function<T1, $Function6<T2, T3, T4, T5, T6, T7, R>>
"curry2"(): $BiFunction<T1, T2, $Function5<T3, T4, T5, T6, T7, R>>
"curry3"(): $Function3<T1, T2, T3, $Function4<T4, T5, T6, T7, R>>
"curry4"(): $Function4<T1, T2, T3, T4, $Function3<T5, T6, T7, R>>
"curry5"(): $Function5<T1, T2, T3, T4, T5, $BiFunction<T6, T7, R>>
"curry6"(): $Function6<T1, T2, T3, T4, T5, T6, $Function<T7, R>>
}

export namespace $Function7 {
const probejs$$marker: never
}
export abstract class $Function7$$Static<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, R = any> implements $Function7<T1, T2, T3, T4, T5, T6, T7, R> {
}
}

declare module "com.mojang.datafixers.util.Function3" {
import { $BiFunction } from "java.util.function.BiFunction"
import { $Function } from "java.util.function.Function"

export interface $Function3<T1 = any, T2 = any, T3 = any, R = any> {
"apply"(t10: T1, t21: T2, t32: T3): R
"curry"(): $Function<T1, $BiFunction<T2, T3, R>>
"curry2"(): $BiFunction<T1, T2, $Function<T3, R>>
}

export namespace $Function3 {
const probejs$$marker: never
}
export abstract class $Function3$$Static<T1 = any, T2 = any, T3 = any, R = any> implements $Function3<T1, T2, T3, R> {
}
}

declare module "com.mojang.datafixers.types.templates.TaggedChoice$TaggedChoiceType" {
import { $Type$FieldNotFoundException } from "com.mojang.datafixers.types.Type$FieldNotFoundException"
import { $Either } from "com.mojang.datafixers.util.Either"
import { $TypeRewriteRule$$Type } from "com.mojang.datafixers.TypeRewriteRule"
import { $Object2ObjectMap$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectMap"
import { $RewriteResult, $RewriteResult$$Type } from "com.mojang.datafixers.RewriteResult"
import { $Typed } from "com.mojang.datafixers.Typed"
import { $Type, $Type$$Type } from "com.mojang.datafixers.types.Type"
import { $Pair } from "com.mojang.datafixers.util.Pair"
import { $TypedOptic } from "com.mojang.datafixers.TypedOptic"
import { $DynamicOps$$Type } from "com.mojang.serialization.DynamicOps"
import { $Map } from "java.util.Map"
import { $Optional } from "java.util.Optional"
import { $Type$TypeMatcher$$Type } from "com.mojang.datafixers.types.Type$TypeMatcher"

export class $TaggedChoice$TaggedChoiceType<K = any> extends $Type<$Pair<K, any>> {
constructor(string0: string, type1: $Type$$Type<K>, object2ObjectMap2: $Object2ObjectMap$$Type<K, $Type$$Type<any>>)

public "all"(typeRewriteRule0: $TypeRewriteRule$$Type, boolean1: boolean, boolean2: boolean): $RewriteResult<$Pair<K, any>, any>
public static "elementResult"<K, FT, FR>(k0: K, taggedChoiceType1: $TaggedChoice$TaggedChoiceType$$Type<K>, rewriteResult2: $RewriteResult$$Type<FT, FR>): $RewriteResult<$Pair<K, any>, $Pair<K, any>>
public "findTypeInChildren"<FT, FR>(type0: $Type$$Type<FT>, type1: $Type$$Type<FR>, typeMatcher2: $Type$TypeMatcher$$Type<FT, FR>, boolean3: boolean): $Either<$TypedOptic<$Pair<K, any>, any, FT, FR>, $Type$FieldNotFoundException>
public "getKeyType"(): $Type<K>
public "getName"(): string
public "hasType"(k0: K): boolean
public "one"(typeRewriteRule0: $TypeRewriteRule$$Type): $Optional<$RewriteResult<$Pair<K, any>, any>>
public "point"(dynamicOps0: $DynamicOps$$Type<any>): $Optional<$Pair<K, any>>
public "point"(dynamicOps0: $DynamicOps$$Type<any>, k1: K, object2: any): $Optional<$Typed<$Pair<K, any>>>
public "types"(): $Map<K, $Type<any>>
get "keyType"(): $Type<K>
get "name"(): string
}
}

declare module "com.mojang.datafixers.TypedOptic" {
import { $Optic, $Optic$$Type } from "com.mojang.datafixers.optics.Optic"
import { $Either } from "com.mojang.datafixers.util.Either"
import { $Collection$$Type } from "java.util.Collection"
import { $Set, $Set$$Type } from "java.util.Set"
import { $App$$Type } from "com.mojang.datafixers.kinds.App"
import { $Record } from "java.lang.Record"
import { $TypeToken, $TypeToken$$Type } from "com.google.common.reflect.TypeToken"
import { $Type, $Type$$Type } from "com.mojang.datafixers.types.Type"
import { $Pair } from "com.mojang.datafixers.util.Pair"
import { $K2, $K2$$Type } from "com.mojang.datafixers.kinds.K2"
import { $K1, $K1$$Type } from "com.mojang.datafixers.kinds.K1"
import { $List, $List$$Type } from "java.util.List"
import { $TypedOptic$Element, $TypedOptic$Element$$Type } from "com.mojang.datafixers.TypedOptic$Element"
import { $App2, $App2$$Type } from "com.mojang.datafixers.kinds.App2"
import { $TaggedChoice$TaggedChoiceType$$Type } from "com.mojang.datafixers.types.templates.TaggedChoice$TaggedChoiceType"
import { $Optional } from "java.util.Optional"

export class $TypedOptic<S = any, T = any, A = any, B = any> extends $Record {
constructor(typeToken0: $TypeToken$$Type<$K1$$Type>, type1: $Type$$Type<S>, type2: $Type$$Type<T>, type3: $Type$$Type<A>, type4: $Type$$Type<B>, optic5: $Optic$$Type<any, S, T, A, B>)
constructor(bounds: $Set$$Type<$TypeToken$$Type<$K1$$Type>>, elements: $List$$Type<$TypedOptic$Element$$Type<any, any, any, any>>)
constructor(set0: $Set$$Type<$TypeToken$$Type<$K1$$Type>>, type1: $Type$$Type<S>, type2: $Type$$Type<T>, type3: $Type$$Type<A>, type4: $Type$$Type<B>, optic5: $Optic$$Type<any, S, T, A, B>)

public "aType"(): $Type<A>
public static "adapter"<S, T>(type0: $Type$$Type<S>, type1: $Type$$Type<T>): $TypedOptic<S, T, S, T>
public "apply"<P extends $K2, Proof2 extends $K1>(typeToken0: $TypeToken$$Type<Proof2>, app1: $App$$Type<Proof2, P>, app22: $App2$$Type<P, A, B>): $App2<P, S, T>
public "bType"(): $Type<B>
public "bounds"(): $Set<$TypeToken<$K1>>
public "castOuter"(type0: $Type$$Type<S>, type1: $Type$$Type<T>): $TypedOptic<S, T, A, B>
public "castOuterUnchecked"<S2, T2>(type0: $Type$$Type<S2>, type1: $Type$$Type<T2>): $TypedOptic<S2, T2, A, B>
public "compose"<A1, B1>(typedOptic0: $TypedOptic$$Type<A, B, A1, B1>): $TypedOptic<S, T, A1, B1>
public static "compoundListElements"<K, V, V2>(type0: $Type$$Type<K>, type1: $Type$$Type<V>, type2: $Type$$Type<V2>): $TypedOptic<$List<$Pair<K, V>>, $List<$Pair<K, V2>>, V, V2>
public static "compoundListKeys"<K, V, K2>(type0: $Type$$Type<K>, type1: $Type$$Type<K2>, type2: $Type$$Type<V>): $TypedOptic<$List<$Pair<K, V>>, $List<$Pair<K2, V>>, K, K2>
public "elements"(): $List<$TypedOptic$Element<any, any, any, any>>
public static "inj1"<F, G, F2>(type0: $Type$$Type<F>, type1: $Type$$Type<G>, type2: $Type$$Type<F2>): $TypedOptic<$Either<F, G>, $Either<F2, G>, F, F2>
public static "inj2"<F, G, G2>(type0: $Type$$Type<F>, type1: $Type$$Type<G>, type2: $Type$$Type<G2>): $TypedOptic<$Either<F, G>, $Either<F, G2>, G, G2>
public "innermost"(): $Optic<any, any, any, A, B>
public static "instanceOf"<Proof2 extends $K1>(collection0: $Collection$$Type<$TypeToken$$Type<$K1$$Type>>, typeToken1: $TypeToken$$Type<Proof2>): boolean
public static "list"<A, B>(type0: $Type$$Type<A>, type1: $Type$$Type<B>): $TypedOptic<$List<A>, $List<B>, A, B>
public "outermost"(): $Optic<any, S, T, any, any>
public static "proj1"<F, G, F2>(type0: $Type$$Type<F>, type1: $Type$$Type<G>, type2: $Type$$Type<F2>): $TypedOptic<$Pair<F, G>, $Pair<F2, G>, F, F2>
public static "proj2"<F, G, G2>(type0: $Type$$Type<F>, type1: $Type$$Type<G>, type2: $Type$$Type<G2>): $TypedOptic<$Pair<F, G>, $Pair<F, G2>, G, G2>
public "sType"(): $Type<S>
public "tType"(): $Type<T>
public static "tagged"<K, A, B>(taggedChoiceType0: $TaggedChoice$TaggedChoiceType$$Type<K>, k1: K, type2: $Type$$Type<A>, type3: $Type$$Type<B>): $TypedOptic<$Pair<K, any>, $Pair<K, any>, A, B>
public "upCast"<Proof2 extends $K1>(typeToken0: $TypeToken$$Type<Proof2>): $Optional<$Optic<Proof2, S, T, A, B>>
}
}

declare module "com.mojang.datafixers.types.Type$Mu" {
import { $K1 } from "com.mojang.datafixers.kinds.K1"

export class $Type$Mu implements $K1 {
constructor()

}
}

declare module "com.mojang.datafixers.types.Type" {
import { $Type$FieldNotFoundException } from "com.mojang.datafixers.types.Type$FieldNotFoundException"
import { $Either } from "com.mojang.datafixers.util.Either"
import { $Dynamic, $Dynamic$$Type } from "com.mojang.serialization.Dynamic"
import { $TypeRewriteRule$$Type } from "com.mojang.datafixers.TypeRewriteRule"
import { $Type$Mu, $Type$Mu$$Type } from "com.mojang.datafixers.types.Type$Mu"
import { $RewriteResult, $RewriteResult$$Type } from "com.mojang.datafixers.RewriteResult"
import { $App, $App$$Type } from "com.mojang.datafixers.kinds.App"
import { $Typed, $Typed$$Type } from "com.mojang.datafixers.Typed"
import { $Pair } from "com.mojang.datafixers.util.Pair"
import { $TypeTemplate } from "com.mojang.datafixers.types.templates.TypeTemplate"
import { $OpticFinder, $OpticFinder$$Type } from "com.mojang.datafixers.OpticFinder"
import { $PointFreeRule$$Type } from "com.mojang.datafixers.functions.PointFreeRule"
import { $Codec } from "com.mojang.serialization.Codec"
import { $TypedOptic, $TypedOptic$$Type } from "com.mojang.datafixers.TypedOptic"
import { $DynamicOps$$Type } from "com.mojang.serialization.DynamicOps"
import { $TaggedChoice$TaggedChoiceType } from "com.mojang.datafixers.types.templates.TaggedChoice$TaggedChoiceType"
import { $Optional } from "java.util.Optional"
import { $RecursiveTypeFamily$$Type } from "com.mojang.datafixers.types.families.RecursiveTypeFamily"
import { $DataResult } from "com.mojang.serialization.DataResult"
import { $Type$TypeMatcher$$Type } from "com.mojang.datafixers.types.Type$TypeMatcher"

export class $Type<A = any> implements $App<$Type$Mu, A> {
constructor()

public "all"(typeRewriteRule0: $TypeRewriteRule$$Type, boolean1: boolean, boolean2: boolean): $RewriteResult<A, any>
public "buildTemplate"(): $TypeTemplate
public "codec"(): $Codec<A>
public "equals"(object0: any, boolean1: boolean, boolean2: boolean): boolean
public "everywhere"(typeRewriteRule0: $TypeRewriteRule$$Type, pointFreeRule1: $PointFreeRule$$Type, boolean2: boolean, boolean3: boolean): $Optional<$RewriteResult<A, any>>
public "findCheckedType"(int0: integer): $Optional<$Type<any>>
public "findChoiceType"(string0: string, int1: integer): $Optional<$TaggedChoice$TaggedChoiceType<any>>
public "findField"(string0: string): $OpticFinder<any>
public "findFieldType"(string0: string): $Type<any>
public "findFieldTypeOpt"(string0: string): $Optional<$Type<any>>
public "findType"<FT, FR>(type0: $Type$$Type<FT>, type1: $Type$$Type<FR>, typeMatcher2: $Type$TypeMatcher$$Type<FT, FR>, boolean3: boolean): $Either<$TypedOptic<A, any, FT, FR>, $Type$FieldNotFoundException>
public "findTypeCached"<FT, FR>(type0: $Type$$Type<FT>, type1: $Type$$Type<FR>, typeMatcher2: $Type$TypeMatcher$$Type<FT, FR>, boolean3: boolean): $Either<$TypedOptic<A, any, FT, FR>, $Type$FieldNotFoundException>
public "findTypeInChildren"<FT, FR>(type0: $Type$$Type<FT>, type1: $Type$$Type<FR>, typeMatcher2: $Type$TypeMatcher$$Type<FT, FR>, boolean3: boolean): $Either<$TypedOptic<A, any, FT, FR>, $Type$FieldNotFoundException>
public "finder"(): $OpticFinder<A>
public "getSetType"<FT, FR>(opticFinder0: $OpticFinder$$Type<FT>, type1: $Type$$Type<FR>): $Type<any>
public "ifSame"<B>(type0: $Type$$Type<B>, b1: B): $Optional<A>
public "ifSame"<B>(type0: $Type$$Type<B>, rewriteResult1: $RewriteResult$$Type<B, any>): $Optional<$RewriteResult<A, any>>
public "ifSame"<B>(typed0: $Typed$$Type<B>): $Optional<A>
public "one"(typeRewriteRule0: $TypeRewriteRule$$Type): $Optional<$RewriteResult<A, any>>
public static "opticView"<S, T, A, B>(type0: $Type$$Type<S>, rewriteResult1: $RewriteResult$$Type<A, B>, typedOptic2: $TypedOptic$$Type<S, T, A, B>): $RewriteResult<S, T>
public "point"(dynamicOps0: $DynamicOps$$Type<any>): $Optional<A>
public "pointTyped"(dynamicOps0: $DynamicOps$$Type<any>): $Optional<$Typed<A>>
public "read"<T>(dynamic0: $Dynamic$$Type<T>): $DataResult<$Pair<A, $Dynamic<T>>>
public "read"<T>(dynamicOps0: $DynamicOps$$Type<T>, typeRewriteRule1: $TypeRewriteRule$$Type, pointFreeRule2: $PointFreeRule$$Type, t3: T): $DataResult<$Pair<$Optional<any>, T>>
public "readAndWrite"<T>(dynamicOps0: $DynamicOps$$Type<T>, type1: $Type$$Type<any>, typeRewriteRule2: $TypeRewriteRule$$Type, pointFreeRule3: $PointFreeRule$$Type, t4: T): $DataResult<T>
public "readTyped"<T>(dynamicOps0: $DynamicOps$$Type<T>, t1: T): $DataResult<$Pair<$Typed<A>, T>>
public "readTyped"<T>(dynamic0: $Dynamic$$Type<T>): $DataResult<$Pair<$Typed<A>, T>>
public "rewrite"(typeRewriteRule0: $TypeRewriteRule$$Type, pointFreeRule1: $PointFreeRule$$Type): $Optional<$RewriteResult<A, any>>
public "rewriteOrNop"(typeRewriteRule0: $TypeRewriteRule$$Type): $RewriteResult<A, any>
public "template"(): $TypeTemplate
public static "unbox"<A>(app0: $App$$Type<$Type$Mu$$Type, A>): $Type<A>
public "updateMu"(recursiveTypeFamily0: $RecursiveTypeFamily$$Type): $Type<any>
public "write"<T>(dynamicOps0: $DynamicOps$$Type<T>, a1: A): $DataResult<T>
public "writeDynamic"<T>(dynamicOps0: $DynamicOps$$Type<T>, a1: A): $DataResult<$Dynamic<T>>
}
}

declare module "com.mojang.datafixers.kinds.Functor" {
import { $Products$P9 } from "com.mojang.datafixers.Products$P9"
import { $Products$P8 } from "com.mojang.datafixers.Products$P8"
import { $Functor$Mu, $Functor$Mu$$Type } from "com.mojang.datafixers.kinds.Functor$Mu"
import { $Kind1 } from "com.mojang.datafixers.kinds.Kind1"
import { $Products$P5 } from "com.mojang.datafixers.Products$P5"
import { $Products$P4 } from "com.mojang.datafixers.Products$P4"
import { $Products$P7 } from "com.mojang.datafixers.Products$P7"
import { $Products$P6 } from "com.mojang.datafixers.Products$P6"
import { $App, $App$$Type } from "com.mojang.datafixers.kinds.App"
import { $Function$$Type } from "java.util.function.Function"
import { $Products$P13 } from "com.mojang.datafixers.Products$P13"
import { $Products$P14 } from "com.mojang.datafixers.Products$P14"
import { $K1, $K1$$Type } from "com.mojang.datafixers.kinds.K1"
import { $Products$P11 } from "com.mojang.datafixers.Products$P11"
import { $Products$P12 } from "com.mojang.datafixers.Products$P12"
import { $Products$P10 } from "com.mojang.datafixers.Products$P10"
import { $Products$P1 } from "com.mojang.datafixers.Products$P1"
import { $Products$P3 } from "com.mojang.datafixers.Products$P3"
import { $Products$P2 } from "com.mojang.datafixers.Products$P2"
import { $Products$P15 } from "com.mojang.datafixers.Products$P15"
import { $Products$P16 } from "com.mojang.datafixers.Products$P16"

export interface $Functor<F extends $K1 = $K1, Mu extends $Functor$Mu = $Functor$Mu> extends $Kind1<F, Mu> {
"group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>, app9: $App$$Type<F, T10>, app10: $App$$Type<F, T11>, app11: $App$$Type<F, T12>): $Products$P12<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>
"group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>, app9: $App$$Type<F, T10>, app10: $App$$Type<F, T11>): $Products$P11<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>
"group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>, app9: $App$$Type<F, T10>): $Products$P10<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>
"group"<T1, T2, T3, T4, T5, T6, T7, T8, T9>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>): $Products$P9<F, T1, T2, T3, T4, T5, T6, T7, T8, T9>
"group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>, app9: $App$$Type<F, T10>, app10: $App$$Type<F, T11>, app11: $App$$Type<F, T12>, app12: $App$$Type<F, T13>, app13: $App$$Type<F, T14>, app14: $App$$Type<F, T15>, app15: $App$$Type<F, T16>): $Products$P16<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>
"group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>, app9: $App$$Type<F, T10>, app10: $App$$Type<F, T11>, app11: $App$$Type<F, T12>, app12: $App$$Type<F, T13>, app13: $App$$Type<F, T14>, app14: $App$$Type<F, T15>): $Products$P15<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>
"group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>, app9: $App$$Type<F, T10>, app10: $App$$Type<F, T11>, app11: $App$$Type<F, T12>, app12: $App$$Type<F, T13>, app13: $App$$Type<F, T14>): $Products$P14<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>
"group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>, app9: $App$$Type<F, T10>, app10: $App$$Type<F, T11>, app11: $App$$Type<F, T12>, app12: $App$$Type<F, T13>): $Products$P13<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>
"group"<T1, T2, T3, T4>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>): $Products$P4<F, T1, T2, T3, T4>
"group"<T1, T2, T3>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>): $Products$P3<F, T1, T2, T3>
"group"<T1, T2>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>): $Products$P2<F, T1, T2>
"group"<T1>(app0: $App$$Type<F, T1>): $Products$P1<F, T1>
"group"<T1, T2, T3, T4, T5, T6, T7, T8>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>): $Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>
"group"<T1, T2, T3, T4, T5, T6, T7>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>): $Products$P7<F, T1, T2, T3, T4, T5, T6, T7>
"group"<T1, T2, T3, T4, T5, T6>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>): $Products$P6<F, T1, T2, T3, T4, T5, T6>
"group"<T1, T2, T3, T4, T5>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>): $Products$P5<F, T1, T2, T3, T4, T5>
"map"<T, R>(function0: $Function$$Type<T, R>, app1: $App$$Type<F, T>): $App<F, R>
}

export namespace $Functor {
function unbox<F extends $K1, Mu extends $Functor$Mu>(app0: $App$$Type<Mu, F>): $Functor<F, Mu>
}
export abstract class $Functor$$Static<F extends $K1 = $K1, Mu extends $Functor$Mu = $Functor$Mu> implements $Functor<F, Mu> {
static "unbox"<F extends $K1, Mu extends $Functor$Mu>(app0: $App$$Type<Mu, F>): $Functor<F, Mu>
}
}

declare module "com.mojang.datafixers.TypedOptic$Element" {
import { $Optic, $Optic$$Type } from "com.mojang.datafixers.optics.Optic"
import { $Record } from "java.lang.Record"
import { $Type, $Type$$Type } from "com.mojang.datafixers.types.Type"

export class $TypedOptic$Element<S = any, T = any, A = any, B = any> extends $Record {
constructor(sType: $Type$$Type<S>, tType: $Type$$Type<T>, aType: $Type$$Type<A>, bType: $Type$$Type<B>, optic: $Optic$$Type<any, S, T, A, B>)

public "aType"(): $Type<A>
public "bType"(): $Type<B>
public "castOuterUnchecked"<S2, T2>(type0: $Type$$Type<S2>, type1: $Type$$Type<T2>): $TypedOptic$Element<S2, T2, A, B>
public "optic"(): $Optic<any, S, T, A, B>
public "sType"(): $Type<S>
public "tType"(): $Type<T>
}
}

declare module "com.mojang.datafixers.kinds.Applicative" {
import { $Function8, $Function8$$Type } from "com.mojang.datafixers.util.Function8"
import { $Function9, $Function9$$Type } from "com.mojang.datafixers.util.Function9"
import { $BiFunction, $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Function4, $Function4$$Type } from "com.mojang.datafixers.util.Function4"
import { $Function5, $Function5$$Type } from "com.mojang.datafixers.util.Function5"
import { $Function6, $Function6$$Type } from "com.mojang.datafixers.util.Function6"
import { $Function7, $Function7$$Type } from "com.mojang.datafixers.util.Function7"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Function3, $Function3$$Type } from "com.mojang.datafixers.util.Function3"
import { $Products$P13 } from "com.mojang.datafixers.Products$P13"
import { $Functor } from "com.mojang.datafixers.kinds.Functor"
import { $Function10$$Type } from "com.mojang.datafixers.util.Function10"
import { $Products$P14 } from "com.mojang.datafixers.Products$P14"
import { $K1, $K1$$Type } from "com.mojang.datafixers.kinds.K1"
import { $Products$P11 } from "com.mojang.datafixers.Products$P11"
import { $Products$P12 } from "com.mojang.datafixers.Products$P12"
import { $Products$P10 } from "com.mojang.datafixers.Products$P10"
import { $Applicative$Mu, $Applicative$Mu$$Type } from "com.mojang.datafixers.kinds.Applicative$Mu"
import { $Products$P1 } from "com.mojang.datafixers.Products$P1"
import { $Products$P3 } from "com.mojang.datafixers.Products$P3"
import { $Products$P2 } from "com.mojang.datafixers.Products$P2"
import { $Products$P15 } from "com.mojang.datafixers.Products$P15"
import { $Products$P16 } from "com.mojang.datafixers.Products$P16"
import { $Products$P9 } from "com.mojang.datafixers.Products$P9"
import { $Products$P8 } from "com.mojang.datafixers.Products$P8"
import { $Products$P5 } from "com.mojang.datafixers.Products$P5"
import { $Products$P4 } from "com.mojang.datafixers.Products$P4"
import { $Products$P7 } from "com.mojang.datafixers.Products$P7"
import { $Products$P6 } from "com.mojang.datafixers.Products$P6"
import { $App, $App$$Type } from "com.mojang.datafixers.kinds.App"
import { $Function15$$Type } from "com.mojang.datafixers.util.Function15"
import { $Function16$$Type } from "com.mojang.datafixers.util.Function16"
import { $Function13$$Type } from "com.mojang.datafixers.util.Function13"
import { $Function14$$Type } from "com.mojang.datafixers.util.Function14"
import { $Function11$$Type } from "com.mojang.datafixers.util.Function11"
import { $Function12$$Type } from "com.mojang.datafixers.util.Function12"

export interface $Applicative<F extends $K1 = $K1, Mu extends $Applicative$Mu = $Applicative$Mu> extends $Functor<F, Mu> {
"ap"<A, R>(function0: $Function$$Type<A, R>, app1: $App$$Type<F, A>): $App<F, R>
"ap"<A, R>(app0: $App$$Type<F, $Function$$Type<A, R>>, app1: $App$$Type<F, A>): $App<F, R>
"ap10"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(app0: $App$$Type<F, $Function10$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>>, app1: $App$$Type<F, T1>, app2: $App$$Type<F, T2>, app3: $App$$Type<F, T3>, app4: $App$$Type<F, T4>, app5: $App$$Type<F, T5>, app6: $App$$Type<F, T6>, app7: $App$$Type<F, T7>, app8: $App$$Type<F, T8>, app9: $App$$Type<F, T9>, app10: $App$$Type<F, T10>): $App<F, R>
"ap11"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>(app0: $App$$Type<F, $Function11$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>>, app1: $App$$Type<F, T1>, app2: $App$$Type<F, T2>, app3: $App$$Type<F, T3>, app4: $App$$Type<F, T4>, app5: $App$$Type<F, T5>, app6: $App$$Type<F, T6>, app7: $App$$Type<F, T7>, app8: $App$$Type<F, T8>, app9: $App$$Type<F, T9>, app10: $App$$Type<F, T10>, app11: $App$$Type<F, T11>): $App<F, R>
"ap12"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>(app0: $App$$Type<F, $Function12$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>, app1: $App$$Type<F, T1>, app2: $App$$Type<F, T2>, app3: $App$$Type<F, T3>, app4: $App$$Type<F, T4>, app5: $App$$Type<F, T5>, app6: $App$$Type<F, T6>, app7: $App$$Type<F, T7>, app8: $App$$Type<F, T8>, app9: $App$$Type<F, T9>, app10: $App$$Type<F, T10>, app11: $App$$Type<F, T11>, app12: $App$$Type<F, T12>): $App<F, R>
"ap13"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>(app0: $App$$Type<F, $Function13$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>, app1: $App$$Type<F, T1>, app2: $App$$Type<F, T2>, app3: $App$$Type<F, T3>, app4: $App$$Type<F, T4>, app5: $App$$Type<F, T5>, app6: $App$$Type<F, T6>, app7: $App$$Type<F, T7>, app8: $App$$Type<F, T8>, app9: $App$$Type<F, T9>, app10: $App$$Type<F, T10>, app11: $App$$Type<F, T11>, app12: $App$$Type<F, T12>, app13: $App$$Type<F, T13>): $App<F, R>
"ap14"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>(app0: $App$$Type<F, $Function14$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>, app1: $App$$Type<F, T1>, app2: $App$$Type<F, T2>, app3: $App$$Type<F, T3>, app4: $App$$Type<F, T4>, app5: $App$$Type<F, T5>, app6: $App$$Type<F, T6>, app7: $App$$Type<F, T7>, app8: $App$$Type<F, T8>, app9: $App$$Type<F, T9>, app10: $App$$Type<F, T10>, app11: $App$$Type<F, T11>, app12: $App$$Type<F, T12>, app13: $App$$Type<F, T13>, app14: $App$$Type<F, T14>): $App<F, R>
"ap15"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>(app0: $App$$Type<F, $Function15$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>, app1: $App$$Type<F, T1>, app2: $App$$Type<F, T2>, app3: $App$$Type<F, T3>, app4: $App$$Type<F, T4>, app5: $App$$Type<F, T5>, app6: $App$$Type<F, T6>, app7: $App$$Type<F, T7>, app8: $App$$Type<F, T8>, app9: $App$$Type<F, T9>, app10: $App$$Type<F, T10>, app11: $App$$Type<F, T11>, app12: $App$$Type<F, T12>, app13: $App$$Type<F, T13>, app14: $App$$Type<F, T14>, app15: $App$$Type<F, T15>): $App<F, R>
"ap16"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>(app0: $App$$Type<F, $Function16$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>, app1: $App$$Type<F, T1>, app2: $App$$Type<F, T2>, app3: $App$$Type<F, T3>, app4: $App$$Type<F, T4>, app5: $App$$Type<F, T5>, app6: $App$$Type<F, T6>, app7: $App$$Type<F, T7>, app8: $App$$Type<F, T8>, app9: $App$$Type<F, T9>, app10: $App$$Type<F, T10>, app11: $App$$Type<F, T11>, app12: $App$$Type<F, T12>, app13: $App$$Type<F, T13>, app14: $App$$Type<F, T14>, app15: $App$$Type<F, T15>, app16: $App$$Type<F, T16>): $App<F, R>
"ap2"<A, B, R>(app0: $App$$Type<F, $BiFunction$$Type<A, B, R>>, app1: $App$$Type<F, A>, app2: $App$$Type<F, B>): $App<F, R>
"ap3"<T1, T2, T3, R>(app0: $App$$Type<F, $Function3$$Type<T1, T2, T3, R>>, app1: $App$$Type<F, T1>, app2: $App$$Type<F, T2>, app3: $App$$Type<F, T3>): $App<F, R>
"ap4"<T1, T2, T3, T4, R>(app0: $App$$Type<F, $Function4$$Type<T1, T2, T3, T4, R>>, app1: $App$$Type<F, T1>, app2: $App$$Type<F, T2>, app3: $App$$Type<F, T3>, app4: $App$$Type<F, T4>): $App<F, R>
"ap5"<T1, T2, T3, T4, T5, R>(app0: $App$$Type<F, $Function5$$Type<T1, T2, T3, T4, T5, R>>, app1: $App$$Type<F, T1>, app2: $App$$Type<F, T2>, app3: $App$$Type<F, T3>, app4: $App$$Type<F, T4>, app5: $App$$Type<F, T5>): $App<F, R>
"ap6"<T1, T2, T3, T4, T5, T6, R>(app0: $App$$Type<F, $Function6$$Type<T1, T2, T3, T4, T5, T6, R>>, app1: $App$$Type<F, T1>, app2: $App$$Type<F, T2>, app3: $App$$Type<F, T3>, app4: $App$$Type<F, T4>, app5: $App$$Type<F, T5>, app6: $App$$Type<F, T6>): $App<F, R>
"ap7"<T1, T2, T3, T4, T5, T6, T7, R>(app0: $App$$Type<F, $Function7$$Type<T1, T2, T3, T4, T5, T6, T7, R>>, app1: $App$$Type<F, T1>, app2: $App$$Type<F, T2>, app3: $App$$Type<F, T3>, app4: $App$$Type<F, T4>, app5: $App$$Type<F, T5>, app6: $App$$Type<F, T6>, app7: $App$$Type<F, T7>): $App<F, R>
"ap8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(app0: $App$$Type<F, $Function8$$Type<T1, T2, T3, T4, T5, T6, T7, T8, R>>, app1: $App$$Type<F, T1>, app2: $App$$Type<F, T2>, app3: $App$$Type<F, T3>, app4: $App$$Type<F, T4>, app5: $App$$Type<F, T5>, app6: $App$$Type<F, T6>, app7: $App$$Type<F, T7>, app8: $App$$Type<F, T8>): $App<F, R>
"ap9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(app0: $App$$Type<F, $Function9$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>, app1: $App$$Type<F, T1>, app2: $App$$Type<F, T2>, app3: $App$$Type<F, T3>, app4: $App$$Type<F, T4>, app5: $App$$Type<F, T5>, app6: $App$$Type<F, T6>, app7: $App$$Type<F, T7>, app8: $App$$Type<F, T8>, app9: $App$$Type<F, T9>): $App<F, R>
"apply2"<A, B, R>(biFunction0: $BiFunction$$Type<A, B, R>, app1: $App$$Type<F, A>, app2: $App$$Type<F, B>): $App<F, R>
"apply3"<T1, T2, T3, R>(function30: $Function3$$Type<T1, T2, T3, R>, app1: $App$$Type<F, T1>, app2: $App$$Type<F, T2>, app3: $App$$Type<F, T3>): $App<F, R>
"apply4"<T1, T2, T3, T4, R>(function40: $Function4$$Type<T1, T2, T3, T4, R>, app1: $App$$Type<F, T1>, app2: $App$$Type<F, T2>, app3: $App$$Type<F, T3>, app4: $App$$Type<F, T4>): $App<F, R>
"apply5"<T1, T2, T3, T4, T5, R>(function50: $Function5$$Type<T1, T2, T3, T4, T5, R>, app1: $App$$Type<F, T1>, app2: $App$$Type<F, T2>, app3: $App$$Type<F, T3>, app4: $App$$Type<F, T4>, app5: $App$$Type<F, T5>): $App<F, R>
"apply6"<T1, T2, T3, T4, T5, T6, R>(function60: $Function6$$Type<T1, T2, T3, T4, T5, T6, R>, app1: $App$$Type<F, T1>, app2: $App$$Type<F, T2>, app3: $App$$Type<F, T3>, app4: $App$$Type<F, T4>, app5: $App$$Type<F, T5>, app6: $App$$Type<F, T6>): $App<F, R>
"apply7"<T1, T2, T3, T4, T5, T6, T7, R>(function70: $Function7$$Type<T1, T2, T3, T4, T5, T6, T7, R>, app1: $App$$Type<F, T1>, app2: $App$$Type<F, T2>, app3: $App$$Type<F, T3>, app4: $App$$Type<F, T4>, app5: $App$$Type<F, T5>, app6: $App$$Type<F, T6>, app7: $App$$Type<F, T7>): $App<F, R>
"apply8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(function80: $Function8$$Type<T1, T2, T3, T4, T5, T6, T7, T8, R>, app1: $App$$Type<F, T1>, app2: $App$$Type<F, T2>, app3: $App$$Type<F, T3>, app4: $App$$Type<F, T4>, app5: $App$$Type<F, T5>, app6: $App$$Type<F, T6>, app7: $App$$Type<F, T7>, app8: $App$$Type<F, T8>): $App<F, R>
"apply9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(function90: $Function9$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>, app1: $App$$Type<F, T1>, app2: $App$$Type<F, T2>, app3: $App$$Type<F, T3>, app4: $App$$Type<F, T4>, app5: $App$$Type<F, T5>, app6: $App$$Type<F, T6>, app7: $App$$Type<F, T7>, app8: $App$$Type<F, T8>, app9: $App$$Type<F, T9>): $App<F, R>
"group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>, app9: $App$$Type<F, T10>, app10: $App$$Type<F, T11>, app11: $App$$Type<F, T12>): $Products$P12<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>
"group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>, app9: $App$$Type<F, T10>, app10: $App$$Type<F, T11>): $Products$P11<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>
"group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>, app9: $App$$Type<F, T10>): $Products$P10<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>
"group"<T1, T2, T3, T4, T5, T6, T7, T8, T9>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>): $Products$P9<F, T1, T2, T3, T4, T5, T6, T7, T8, T9>
"group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>, app9: $App$$Type<F, T10>, app10: $App$$Type<F, T11>, app11: $App$$Type<F, T12>, app12: $App$$Type<F, T13>, app13: $App$$Type<F, T14>, app14: $App$$Type<F, T15>, app15: $App$$Type<F, T16>): $Products$P16<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>
"group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>, app9: $App$$Type<F, T10>, app10: $App$$Type<F, T11>, app11: $App$$Type<F, T12>, app12: $App$$Type<F, T13>, app13: $App$$Type<F, T14>, app14: $App$$Type<F, T15>): $Products$P15<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>
"group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>, app9: $App$$Type<F, T10>, app10: $App$$Type<F, T11>, app11: $App$$Type<F, T12>, app12: $App$$Type<F, T13>, app13: $App$$Type<F, T14>): $Products$P14<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>
"group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>, app9: $App$$Type<F, T10>, app10: $App$$Type<F, T11>, app11: $App$$Type<F, T12>, app12: $App$$Type<F, T13>): $Products$P13<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>
"group"<T1, T2, T3, T4>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>): $Products$P4<F, T1, T2, T3, T4>
"group"<T1, T2, T3>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>): $Products$P3<F, T1, T2, T3>
"group"<T1, T2>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>): $Products$P2<F, T1, T2>
"group"<T1>(app0: $App$$Type<F, T1>): $Products$P1<F, T1>
"group"<T1, T2, T3, T4, T5, T6, T7, T8>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>): $Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>
"group"<T1, T2, T3, T4, T5, T6, T7>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>): $Products$P7<F, T1, T2, T3, T4, T5, T6, T7>
"group"<T1, T2, T3, T4, T5, T6>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>): $Products$P6<F, T1, T2, T3, T4, T5, T6>
"group"<T1, T2, T3, T4, T5>(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>): $Products$P5<F, T1, T2, T3, T4, T5>
"lift1"<A, R>(app0: $App$$Type<F, $Function$$Type<A, R>>): $Function<$App<F, A>, $App<F, R>>
"lift2"<A, B, R>(app0: $App$$Type<F, $BiFunction$$Type<A, B, R>>): $BiFunction<$App<F, A>, $App<F, B>, $App<F, R>>
"lift3"<T1, T2, T3, R>(app0: $App$$Type<F, $Function3$$Type<T1, T2, T3, R>>): $Function3<$App<F, T1>, $App<F, T2>, $App<F, T3>, $App<F, R>>
"lift4"<T1, T2, T3, T4, R>(app0: $App$$Type<F, $Function4$$Type<T1, T2, T3, T4, R>>): $Function4<$App<F, T1>, $App<F, T2>, $App<F, T3>, $App<F, T4>, $App<F, R>>
"lift5"<T1, T2, T3, T4, T5, R>(app0: $App$$Type<F, $Function5$$Type<T1, T2, T3, T4, T5, R>>): $Function5<$App<F, T1>, $App<F, T2>, $App<F, T3>, $App<F, T4>, $App<F, T5>, $App<F, R>>
"lift6"<T1, T2, T3, T4, T5, T6, R>(app0: $App$$Type<F, $Function6$$Type<T1, T2, T3, T4, T5, T6, R>>): $Function6<$App<F, T1>, $App<F, T2>, $App<F, T3>, $App<F, T4>, $App<F, T5>, $App<F, T6>, $App<F, R>>
"lift7"<T1, T2, T3, T4, T5, T6, T7, R>(app0: $App$$Type<F, $Function7$$Type<T1, T2, T3, T4, T5, T6, T7, R>>): $Function7<$App<F, T1>, $App<F, T2>, $App<F, T3>, $App<F, T4>, $App<F, T5>, $App<F, T6>, $App<F, T7>, $App<F, R>>
"lift8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(app0: $App$$Type<F, $Function8$$Type<T1, T2, T3, T4, T5, T6, T7, T8, R>>): $Function8<$App<F, T1>, $App<F, T2>, $App<F, T3>, $App<F, T4>, $App<F, T5>, $App<F, T6>, $App<F, T7>, $App<F, T8>, $App<F, R>>
"lift9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(app0: $App$$Type<F, $Function9$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>): $Function9<$App<F, T1>, $App<F, T2>, $App<F, T3>, $App<F, T4>, $App<F, T5>, $App<F, T6>, $App<F, T7>, $App<F, T8>, $App<F, T9>, $App<F, R>>
"map"<T, R>(function0: $Function$$Type<T, R>, app1: $App$$Type<F, T>): $App<F, R>
"point"<A>(a0: A): $App<F, A>
}

export namespace $Applicative {
function unbox<F extends $K1, Mu extends $Applicative$Mu>(app0: $App$$Type<Mu, F>): $Applicative<F, Mu>
}
export abstract class $Applicative$$Static<F extends $K1 = $K1, Mu extends $Applicative$Mu = $Applicative$Mu> implements $Applicative<F, Mu> {
static "unbox"<F extends $K1, Mu extends $Applicative$Mu>(app0: $App$$Type<Mu, F>): $Applicative<F, Mu>
}
}

declare module "com.mojang.datafixers.types.Type$TypeMatcher" {
import { $Type$FieldNotFoundException } from "com.mojang.datafixers.types.Type$FieldNotFoundException"
import { $Either } from "com.mojang.datafixers.util.Either"
import { $TypedOptic } from "com.mojang.datafixers.TypedOptic"
import { $Type$$Type } from "com.mojang.datafixers.types.Type"

export interface $Type$TypeMatcher<FT = any, FR = any> {
"match"<S>(type0: $Type$$Type<S>): $Either<$TypedOptic<S, any, FT, FR>, $Type$FieldNotFoundException>
}

export namespace $Type$TypeMatcher {
const probejs$$marker: never
}
export abstract class $Type$TypeMatcher$$Static<FT = any, FR = any> implements $Type$TypeMatcher<FT, FR> {
}
}

declare module "com.mojang.datafixers.functions.PointFreeRule" {
import { $PointFree, $PointFree$$Type } from "com.mojang.datafixers.functions.PointFree"
import { $Optional } from "java.util.Optional"

export interface $PointFreeRule {
"rewrite"<A>(pointFree0: $PointFree$$Type<A>): $Optional<$PointFree<A>>
"rewriteOrNop"<A>(pointFree0: $PointFree$$Type<A>): $PointFree<A>
}

export namespace $PointFreeRule {
function all(pointFreeRule0: $PointFreeRule$$Type): $PointFreeRule
function choice(...pointFreeRule0s: $PointFreeRule$$Type[]): $PointFreeRule
function everywhere(pointFreeRule0: $PointFreeRule$$Type, pointFreeRule1: $PointFreeRule$$Type): $PointFreeRule
function many(pointFreeRule0: $PointFreeRule$$Type): $PointFreeRule
function nop(): $PointFreeRule
function once(pointFreeRule0: $PointFreeRule$$Type): $PointFreeRule
function one(pointFreeRule0: $PointFreeRule$$Type): $PointFreeRule
function seq(...pointFreeRule0s: $PointFreeRule$$Type[]): $PointFreeRule
}
export abstract class $PointFreeRule$$Static implements $PointFreeRule {
static "all"(pointFreeRule0: $PointFreeRule$$Type): $PointFreeRule
static "choice"(...pointFreeRule0s: $PointFreeRule$$Type[]): $PointFreeRule
static "everywhere"(pointFreeRule0: $PointFreeRule$$Type, pointFreeRule1: $PointFreeRule$$Type): $PointFreeRule
static "many"(pointFreeRule0: $PointFreeRule$$Type): $PointFreeRule
static "nop"(): $PointFreeRule
static "once"(pointFreeRule0: $PointFreeRule$$Type): $PointFreeRule
static "one"(pointFreeRule0: $PointFreeRule$$Type): $PointFreeRule
static "seq"(...pointFreeRule0s: $PointFreeRule$$Type[]): $PointFreeRule
}
}

declare module "com.mojang.datafixers.Products$P1" {
import { $Products$P8 } from "com.mojang.datafixers.Products$P8"
import { $K1 } from "com.mojang.datafixers.kinds.K1"
import { $Products$P5, $Products$P5$$Type } from "com.mojang.datafixers.Products$P5"
import { $Products$P4, $Products$P4$$Type } from "com.mojang.datafixers.Products$P4"
import { $Products$P7, $Products$P7$$Type } from "com.mojang.datafixers.Products$P7"
import { $Products$P6, $Products$P6$$Type } from "com.mojang.datafixers.Products$P6"
import { $App, $App$$Type } from "com.mojang.datafixers.kinds.App"
import { $Products$P3, $Products$P3$$Type } from "com.mojang.datafixers.Products$P3"
import { $Products$P2, $Products$P2$$Type } from "com.mojang.datafixers.Products$P2"
import { $Function$$Type } from "java.util.function.Function"
import { $Applicative$$Type } from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P1<F extends $K1 = $K1, T1 = any> {
constructor(app0: $App$$Type<F, T1>)

public "and"<T2, T3>(p20: $Products$P2$$Type<F, T2, T3>): $Products$P3<F, T1, T2, T3>
public "and"<T2, T3, T4>(p30: $Products$P3$$Type<F, T2, T3, T4>): $Products$P4<F, T1, T2, T3, T4>
public "and"<T2, T3, T4, T5, T6, T7>(p60: $Products$P6$$Type<F, T2, T3, T4, T5, T6, T7>): $Products$P7<F, T1, T2, T3, T4, T5, T6, T7>
public "and"<T2, T3, T4, T5, T6>(p50: $Products$P5$$Type<F, T2, T3, T4, T5, T6>): $Products$P6<F, T1, T2, T3, T4, T5, T6>
public "and"<T2>(app0: $App$$Type<F, T2>): $Products$P2<F, T1, T2>
public "and"<T2, T3, T4, T5, T6, T7, T8>(p70: $Products$P7$$Type<F, T2, T3, T4, T5, T6, T7, T8>): $Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>
public "and"<T2, T3, T4, T5>(p40: $Products$P4$$Type<F, T2, T3, T4, T5>): $Products$P5<F, T1, T2, T3, T4, T5>
public "apply"<R>(applicative0: $Applicative$$Type<F, any>, app1: $App$$Type<F, $Function$$Type<T1, R>>): $App<F, R>
public "apply"<R>(applicative0: $Applicative$$Type<F, any>, function1: $Function$$Type<T1, R>): $App<F, R>
public "t1"(): $App<F, T1>
}
}

declare module "com.mojang.datafixers.Products$P3" {
import { $Products$P8 } from "com.mojang.datafixers.Products$P8"
import { $K1 } from "com.mojang.datafixers.kinds.K1"
import { $Products$P5, $Products$P5$$Type } from "com.mojang.datafixers.Products$P5"
import { $Products$P4, $Products$P4$$Type } from "com.mojang.datafixers.Products$P4"
import { $Products$P7 } from "com.mojang.datafixers.Products$P7"
import { $Products$P6 } from "com.mojang.datafixers.Products$P6"
import { $App, $App$$Type } from "com.mojang.datafixers.kinds.App"
import { $Products$P2$$Type } from "com.mojang.datafixers.Products$P2"
import { $Applicative$$Type } from "com.mojang.datafixers.kinds.Applicative"
import { $Function3$$Type } from "com.mojang.datafixers.util.Function3"

export class $Products$P3<F extends $K1 = $K1, T1 = any, T2 = any, T3 = any> {
constructor(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>)

public "and"<T4>(app0: $App$$Type<F, T4>): $Products$P4<F, T1, T2, T3, T4>
public "and"<T4, T5, T6>(p30: $Products$P3$$Type<F, T4, T5, T6>): $Products$P6<F, T1, T2, T3, T4, T5, T6>
public "and"<T4, T5, T6, T7>(p40: $Products$P4$$Type<F, T4, T5, T6, T7>): $Products$P7<F, T1, T2, T3, T4, T5, T6, T7>
public "and"<T4, T5, T6, T7, T8>(p50: $Products$P5$$Type<F, T4, T5, T6, T7, T8>): $Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>
public "and"<T4, T5>(p20: $Products$P2$$Type<F, T4, T5>): $Products$P5<F, T1, T2, T3, T4, T5>
public "apply"<R>(applicative0: $Applicative$$Type<F, any>, function31: $Function3$$Type<T1, T2, T3, R>): $App<F, R>
public "apply"<R>(applicative0: $Applicative$$Type<F, any>, app1: $App$$Type<F, $Function3$$Type<T1, T2, T3, R>>): $App<F, R>
public "t1"(): $App<F, T1>
public "t2"(): $App<F, T2>
public "t3"(): $App<F, T3>
}
}

declare module "com.mojang.datafixers.Products$P2" {
import { $Products$P8 } from "com.mojang.datafixers.Products$P8"
import { $K1 } from "com.mojang.datafixers.kinds.K1"
import { $Products$P5, $Products$P5$$Type } from "com.mojang.datafixers.Products$P5"
import { $Products$P4, $Products$P4$$Type } from "com.mojang.datafixers.Products$P4"
import { $Products$P7 } from "com.mojang.datafixers.Products$P7"
import { $Products$P6, $Products$P6$$Type } from "com.mojang.datafixers.Products$P6"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $App, $App$$Type } from "com.mojang.datafixers.kinds.App"
import { $Products$P3, $Products$P3$$Type } from "com.mojang.datafixers.Products$P3"
import { $Applicative$$Type } from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P2<F extends $K1 = $K1, T1 = any, T2 = any> {
constructor(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>)

public "and"<T3, T4, T5, T6>(p40: $Products$P4$$Type<F, T3, T4, T5, T6>): $Products$P6<F, T1, T2, T3, T4, T5, T6>
public "and"<T3, T4>(p20: $Products$P2$$Type<F, T3, T4>): $Products$P4<F, T1, T2, T3, T4>
public "and"<T3>(app0: $App$$Type<F, T3>): $Products$P3<F, T1, T2, T3>
public "and"<T3, T4, T5, T6, T7>(p50: $Products$P5$$Type<F, T3, T4, T5, T6, T7>): $Products$P7<F, T1, T2, T3, T4, T5, T6, T7>
public "and"<T3, T4, T5, T6, T7, T8>(p60: $Products$P6$$Type<F, T3, T4, T5, T6, T7, T8>): $Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>
public "and"<T3, T4, T5>(p30: $Products$P3$$Type<F, T3, T4, T5>): $Products$P5<F, T1, T2, T3, T4, T5>
public "apply"<R>(applicative0: $Applicative$$Type<F, any>, biFunction1: $BiFunction$$Type<T1, T2, R>): $App<F, R>
public "apply"<R>(applicative0: $Applicative$$Type<F, any>, app1: $App$$Type<F, $BiFunction$$Type<T1, T2, R>>): $App<F, R>
public "t1"(): $App<F, T1>
public "t2"(): $App<F, T2>
}
}

declare module "com.mojang.datafixers.Products$P9" {
import { $K1 } from "com.mojang.datafixers.kinds.K1"
import { $Function9$$Type } from "com.mojang.datafixers.util.Function9"
import { $App, $App$$Type } from "com.mojang.datafixers.kinds.App"
import { $Applicative$$Type } from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P9<F extends $K1 = $K1, T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, T9 = any> {
constructor(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>)

public "apply"<R>(applicative0: $Applicative$$Type<F, any>, function91: $Function9$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>): $App<F, R>
public "apply"<R>(applicative0: $Applicative$$Type<F, any>, app1: $App$$Type<F, $Function9$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>): $App<F, R>
}
}

declare module "com.mojang.datafixers.Products$P8" {
import { $K1 } from "com.mojang.datafixers.kinds.K1"
import { $Function8$$Type } from "com.mojang.datafixers.util.Function8"
import { $App, $App$$Type } from "com.mojang.datafixers.kinds.App"
import { $Applicative$$Type } from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P8<F extends $K1 = $K1, T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any> {
constructor(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>)

public "apply"<R>(applicative0: $Applicative$$Type<F, any>, function81: $Function8$$Type<T1, T2, T3, T4, T5, T6, T7, T8, R>): $App<F, R>
public "apply"<R>(applicative0: $Applicative$$Type<F, any>, app1: $App$$Type<F, $Function8$$Type<T1, T2, T3, T4, T5, T6, T7, T8, R>>): $App<F, R>
public "t1"(): $App<F, T1>
public "t2"(): $App<F, T2>
public "t3"(): $App<F, T3>
public "t4"(): $App<F, T4>
public "t5"(): $App<F, T5>
public "t6"(): $App<F, T6>
public "t7"(): $App<F, T7>
public "t8"(): $App<F, T8>
}
}

declare module "com.mojang.datafixers.Products$P5" {
import { $Products$P8 } from "com.mojang.datafixers.Products$P8"
import { $K1 } from "com.mojang.datafixers.kinds.K1"
import { $Products$P7 } from "com.mojang.datafixers.Products$P7"
import { $Products$P6 } from "com.mojang.datafixers.Products$P6"
import { $App, $App$$Type } from "com.mojang.datafixers.kinds.App"
import { $Function5$$Type } from "com.mojang.datafixers.util.Function5"
import { $Products$P3$$Type } from "com.mojang.datafixers.Products$P3"
import { $Products$P2$$Type } from "com.mojang.datafixers.Products$P2"
import { $Applicative$$Type } from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P5<F extends $K1 = $K1, T1 = any, T2 = any, T3 = any, T4 = any, T5 = any> {
constructor(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>)

public "and"<T6, T7>(p20: $Products$P2$$Type<F, T6, T7>): $Products$P7<F, T1, T2, T3, T4, T5, T6, T7>
public "and"<T6, T7, T8>(p30: $Products$P3$$Type<F, T6, T7, T8>): $Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>
public "and"<T6>(app0: $App$$Type<F, T6>): $Products$P6<F, T1, T2, T3, T4, T5, T6>
public "apply"<R>(applicative0: $Applicative$$Type<F, any>, function51: $Function5$$Type<T1, T2, T3, T4, T5, R>): $App<F, R>
public "apply"<R>(applicative0: $Applicative$$Type<F, any>, app1: $App$$Type<F, $Function5$$Type<T1, T2, T3, T4, T5, R>>): $App<F, R>
public "t1"(): $App<F, T1>
public "t2"(): $App<F, T2>
public "t3"(): $App<F, T3>
public "t4"(): $App<F, T4>
public "t5"(): $App<F, T5>
}
}

declare module "com.mojang.datafixers.Products$P4" {
import { $Products$P8 } from "com.mojang.datafixers.Products$P8"
import { $K1 } from "com.mojang.datafixers.kinds.K1"
import { $Products$P5 } from "com.mojang.datafixers.Products$P5"
import { $Products$P7 } from "com.mojang.datafixers.Products$P7"
import { $Products$P6 } from "com.mojang.datafixers.Products$P6"
import { $Function4$$Type } from "com.mojang.datafixers.util.Function4"
import { $App, $App$$Type } from "com.mojang.datafixers.kinds.App"
import { $Products$P3$$Type } from "com.mojang.datafixers.Products$P3"
import { $Products$P2$$Type } from "com.mojang.datafixers.Products$P2"
import { $Applicative$$Type } from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P4<F extends $K1 = $K1, T1 = any, T2 = any, T3 = any, T4 = any> {
constructor(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>)

public "and"<T5, T6>(p20: $Products$P2$$Type<F, T5, T6>): $Products$P6<F, T1, T2, T3, T4, T5, T6>
public "and"<T5, T6, T7>(p30: $Products$P3$$Type<F, T5, T6, T7>): $Products$P7<F, T1, T2, T3, T4, T5, T6, T7>
public "and"<T5, T6, T7, T8>(p40: $Products$P4$$Type<F, T5, T6, T7, T8>): $Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>
public "and"<T5>(app0: $App$$Type<F, T5>): $Products$P5<F, T1, T2, T3, T4, T5>
public "apply"<R>(applicative0: $Applicative$$Type<F, any>, function41: $Function4$$Type<T1, T2, T3, T4, R>): $App<F, R>
public "apply"<R>(applicative0: $Applicative$$Type<F, any>, app1: $App$$Type<F, $Function4$$Type<T1, T2, T3, T4, R>>): $App<F, R>
public "t1"(): $App<F, T1>
public "t2"(): $App<F, T2>
public "t3"(): $App<F, T3>
public "t4"(): $App<F, T4>
}
}

declare module "com.mojang.datafixers.Products$P7" {
import { $Products$P8 } from "com.mojang.datafixers.Products$P8"
import { $K1 } from "com.mojang.datafixers.kinds.K1"
import { $App, $App$$Type } from "com.mojang.datafixers.kinds.App"
import { $Function7$$Type } from "com.mojang.datafixers.util.Function7"
import { $Applicative$$Type } from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P7<F extends $K1 = $K1, T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any> {
constructor(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>)

public "and"<T8>(app0: $App$$Type<F, T8>): $Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>
public "apply"<R>(applicative0: $Applicative$$Type<F, any>, function71: $Function7$$Type<T1, T2, T3, T4, T5, T6, T7, R>): $App<F, R>
public "apply"<R>(applicative0: $Applicative$$Type<F, any>, app1: $App$$Type<F, $Function7$$Type<T1, T2, T3, T4, T5, T6, T7, R>>): $App<F, R>
public "t1"(): $App<F, T1>
public "t2"(): $App<F, T2>
public "t3"(): $App<F, T3>
public "t4"(): $App<F, T4>
public "t5"(): $App<F, T5>
public "t6"(): $App<F, T6>
public "t7"(): $App<F, T7>
}
}

declare module "com.mojang.datafixers.Products$P6" {
import { $Products$P8 } from "com.mojang.datafixers.Products$P8"
import { $K1 } from "com.mojang.datafixers.kinds.K1"
import { $Products$P7 } from "com.mojang.datafixers.Products$P7"
import { $App, $App$$Type } from "com.mojang.datafixers.kinds.App"
import { $Function6$$Type } from "com.mojang.datafixers.util.Function6"
import { $Products$P2$$Type } from "com.mojang.datafixers.Products$P2"
import { $Applicative$$Type } from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P6<F extends $K1 = $K1, T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any> {
constructor(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>)

public "and"<T7>(app0: $App$$Type<F, T7>): $Products$P7<F, T1, T2, T3, T4, T5, T6, T7>
public "and"<T7, T8>(p20: $Products$P2$$Type<F, T7, T8>): $Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>
public "apply"<R>(applicative0: $Applicative$$Type<F, any>, function61: $Function6$$Type<T1, T2, T3, T4, T5, T6, R>): $App<F, R>
public "apply"<R>(applicative0: $Applicative$$Type<F, any>, app1: $App$$Type<F, $Function6$$Type<T1, T2, T3, T4, T5, T6, R>>): $App<F, R>
public "t1"(): $App<F, T1>
public "t2"(): $App<F, T2>
public "t3"(): $App<F, T3>
public "t4"(): $App<F, T4>
public "t5"(): $App<F, T5>
public "t6"(): $App<F, T6>
}
}

declare module "com.mojang.datafixers.kinds.Kind1$Mu" {
import { $K1 } from "com.mojang.datafixers.kinds.K1"

export interface $Kind1$Mu extends $K1 {
}

export namespace $Kind1$Mu {
const probejs$$marker: never
}
export abstract class $Kind1$Mu$$Static implements $Kind1$Mu {
}
}

declare module "com.mojang.datafixers.util.Either" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Either$Mu, $Either$Mu$$Type } from "com.mojang.datafixers.util.Either$Mu"
import { $Optional } from "java.util.Optional"
import { $App, $App$$Type } from "com.mojang.datafixers.kinds.App"
import { $Function$$Type } from "java.util.function.Function"

export class $Either<L = any, R = any> implements $App<$Either$Mu<R>, L> {
public "flatMap"<L2>(function0: $Function$$Type<L, $Either<L2, R>>): $Either<L2, R>
public "ifLeft"(consumer0: $Consumer$$Type<L>): $Either<L, R>
public "ifRight"(consumer0: $Consumer$$Type<R>): $Either<L, R>
public "left"(): $Optional<L>
public static "left"<L, R>(l0: L): $Either<L, R>
public "map"<T>(function0: $Function$$Type<L, T>, function1: $Function$$Type<R, T>): T
public "mapBoth"<C, D>(function0: $Function$$Type<L, C>, function1: $Function$$Type<R, D>): $Either<C, D>
public "mapLeft"<T>(function0: $Function$$Type<L, T>): $Either<T, R>
public "mapRight"<T>(function0: $Function$$Type<R, T>): $Either<L, T>
public "orThrow"(): L
public static "right"<L, R>(r0: R): $Either<L, R>
public "right"(): $Optional<R>
public "swap"(): $Either<R, L>
public static "unbox"<L, R>(app0: $App$$Type<$Either$Mu$$Type<R>, L>): $Either<L, R>
}
}

declare module "com.mojang.datafixers.Products$P13" {
import { $K1 } from "com.mojang.datafixers.kinds.K1"
import { $App, $App$$Type } from "com.mojang.datafixers.kinds.App"
import { $Function13$$Type } from "com.mojang.datafixers.util.Function13"
import { $Applicative$$Type } from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P13<F extends $K1 = $K1, T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, T9 = any, T10 = any, T11 = any, T12 = any, T13 = any> {
constructor(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>, app9: $App$$Type<F, T10>, app10: $App$$Type<F, T11>, app11: $App$$Type<F, T12>, app12: $App$$Type<F, T13>)

public "apply"<R>(applicative0: $Applicative$$Type<F, any>, function131: $Function13$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>): $App<F, R>
public "apply"<R>(applicative0: $Applicative$$Type<F, any>, app1: $App$$Type<F, $Function13$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>): $App<F, R>
}
}

declare module "com.mojang.datafixers.Products$P14" {
import { $K1 } from "com.mojang.datafixers.kinds.K1"
import { $App, $App$$Type } from "com.mojang.datafixers.kinds.App"
import { $Function14$$Type } from "com.mojang.datafixers.util.Function14"
import { $Applicative$$Type } from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P14<F extends $K1 = $K1, T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, T9 = any, T10 = any, T11 = any, T12 = any, T13 = any, T14 = any> {
constructor(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>, app9: $App$$Type<F, T10>, app10: $App$$Type<F, T11>, app11: $App$$Type<F, T12>, app12: $App$$Type<F, T13>, app13: $App$$Type<F, T14>)

public "apply"<R>(applicative0: $Applicative$$Type<F, any>, function141: $Function14$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>): $App<F, R>
public "apply"<R>(applicative0: $Applicative$$Type<F, any>, app1: $App$$Type<F, $Function14$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>): $App<F, R>
}
}

declare module "com.mojang.datafixers.Products$P11" {
import { $K1 } from "com.mojang.datafixers.kinds.K1"
import { $App, $App$$Type } from "com.mojang.datafixers.kinds.App"
import { $Function11$$Type } from "com.mojang.datafixers.util.Function11"
import { $Applicative$$Type } from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P11<F extends $K1 = $K1, T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, T9 = any, T10 = any, T11 = any> {
constructor(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>, app9: $App$$Type<F, T10>, app10: $App$$Type<F, T11>)

public "apply"<R>(applicative0: $Applicative$$Type<F, any>, function111: $Function11$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>): $App<F, R>
public "apply"<R>(applicative0: $Applicative$$Type<F, any>, app1: $App$$Type<F, $Function11$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>>): $App<F, R>
}
}

declare module "com.mojang.datafixers.Products$P12" {
import { $K1 } from "com.mojang.datafixers.kinds.K1"
import { $App, $App$$Type } from "com.mojang.datafixers.kinds.App"
import { $Applicative$$Type } from "com.mojang.datafixers.kinds.Applicative"
import { $Function12$$Type } from "com.mojang.datafixers.util.Function12"

export class $Products$P12<F extends $K1 = $K1, T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, T9 = any, T10 = any, T11 = any, T12 = any> {
constructor(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>, app9: $App$$Type<F, T10>, app10: $App$$Type<F, T11>, app11: $App$$Type<F, T12>)

public "apply"<R>(applicative0: $Applicative$$Type<F, any>, function121: $Function12$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>): $App<F, R>
public "apply"<R>(applicative0: $Applicative$$Type<F, any>, app1: $App$$Type<F, $Function12$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>): $App<F, R>
}
}

declare module "com.mojang.datafixers.Products$P10" {
import { $Function10$$Type } from "com.mojang.datafixers.util.Function10"
import { $K1 } from "com.mojang.datafixers.kinds.K1"
import { $App, $App$$Type } from "com.mojang.datafixers.kinds.App"
import { $Applicative$$Type } from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P10<F extends $K1 = $K1, T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, T9 = any, T10 = any> {
constructor(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>, app9: $App$$Type<F, T10>)

public "apply"<R>(applicative0: $Applicative$$Type<F, any>, function101: $Function10$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>): $App<F, R>
public "apply"<R>(applicative0: $Applicative$$Type<F, any>, app1: $App$$Type<F, $Function10$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>>): $App<F, R>
}
}

declare module "com.mojang.datafixers.Products$P15" {
import { $K1 } from "com.mojang.datafixers.kinds.K1"
import { $App, $App$$Type } from "com.mojang.datafixers.kinds.App"
import { $Function15$$Type } from "com.mojang.datafixers.util.Function15"
import { $Applicative$$Type } from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P15<F extends $K1 = $K1, T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, T9 = any, T10 = any, T11 = any, T12 = any, T13 = any, T14 = any, T15 = any> {
constructor(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>, app9: $App$$Type<F, T10>, app10: $App$$Type<F, T11>, app11: $App$$Type<F, T12>, app12: $App$$Type<F, T13>, app13: $App$$Type<F, T14>, app14: $App$$Type<F, T15>)

public "apply"<R>(applicative0: $Applicative$$Type<F, any>, function151: $Function15$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>): $App<F, R>
public "apply"<R>(applicative0: $Applicative$$Type<F, any>, app1: $App$$Type<F, $Function15$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>): $App<F, R>
}
}

declare module "com.mojang.datafixers.Products$P16" {
import { $K1 } from "com.mojang.datafixers.kinds.K1"
import { $App, $App$$Type } from "com.mojang.datafixers.kinds.App"
import { $Function16$$Type } from "com.mojang.datafixers.util.Function16"
import { $Applicative$$Type } from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P16<F extends $K1 = $K1, T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, T9 = any, T10 = any, T11 = any, T12 = any, T13 = any, T14 = any, T15 = any, T16 = any> {
constructor(app0: $App$$Type<F, T1>, app1: $App$$Type<F, T2>, app2: $App$$Type<F, T3>, app3: $App$$Type<F, T4>, app4: $App$$Type<F, T5>, app5: $App$$Type<F, T6>, app6: $App$$Type<F, T7>, app7: $App$$Type<F, T8>, app8: $App$$Type<F, T9>, app9: $App$$Type<F, T10>, app10: $App$$Type<F, T11>, app11: $App$$Type<F, T12>, app12: $App$$Type<F, T13>, app13: $App$$Type<F, T14>, app14: $App$$Type<F, T15>, app15: $App$$Type<F, T16>)

public "apply"<R>(applicative0: $Applicative$$Type<F, any>, function161: $Function16$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>): $App<F, R>
public "apply"<R>(applicative0: $Applicative$$Type<F, any>, app1: $App$$Type<F, $Function16$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>): $App<F, R>
}
}

