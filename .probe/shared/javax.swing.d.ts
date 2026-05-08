declare module "javax.swing.text.AttributeSet" {
import { $Enumeration } from "java.util.Enumeration"

export interface $AttributeSet {
"containsAttribute"(object0: any, object1: any): boolean
"containsAttributes"(attributeSet0: $AttributeSet$$Type): boolean
"copyAttributes"(): $AttributeSet
"getAttribute"(object0: any): any
"getAttributeCount"(): integer
"getAttributeNames"(): $Enumeration<any>
"getResolveParent"(): $AttributeSet
"isDefined"(object0: any): boolean
"isEqual"(attributeSet0: $AttributeSet$$Type): boolean
get "attributeCount"(): integer
get "attributeNames"(): $Enumeration<any>
get "resolveParent"(): $AttributeSet
}

export namespace $AttributeSet {
const NameAttribute: any
const ResolveAttribute: any
}
export abstract class $AttributeSet$$Static implements $AttributeSet {
static readonly "NameAttribute": any
static readonly "ResolveAttribute": any

}
}

