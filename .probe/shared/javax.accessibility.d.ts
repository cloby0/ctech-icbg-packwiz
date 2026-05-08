declare module "javax.accessibility.AccessibleContext" {
import { $AccessibleSelection } from "javax.accessibility.AccessibleSelection"
import { $AccessibleAction } from "javax.accessibility.AccessibleAction"
import { $AccessibleRelationSet } from "javax.accessibility.AccessibleRelationSet"
import { $AccessibleStateSet } from "javax.accessibility.AccessibleStateSet"
import { $AccessibleValue } from "javax.accessibility.AccessibleValue"
import { $AccessibleEditableText } from "javax.accessibility.AccessibleEditableText"
import { $AccessibleTable } from "javax.accessibility.AccessibleTable"
import { $Accessible, $Accessible$$Type } from "javax.accessibility.Accessible"
import { $PropertyChangeListener$$Type } from "java.beans.PropertyChangeListener"
import { $Locale } from "java.util.Locale"
import { $AccessibleComponent } from "javax.accessibility.AccessibleComponent"
import { $AccessibleRole } from "javax.accessibility.AccessibleRole"
import { $AccessibleText } from "javax.accessibility.AccessibleText"
import { $AccessibleIcon } from "javax.accessibility.AccessibleIcon"

export class $AccessibleContext {
static readonly "ACCESSIBLE_ACTION_PROPERTY": string
static readonly "ACCESSIBLE_ACTIVE_DESCENDANT_PROPERTY": string
static readonly "ACCESSIBLE_CARET_PROPERTY": string
static readonly "ACCESSIBLE_CHILD_PROPERTY": string
static readonly "ACCESSIBLE_COMPONENT_BOUNDS_CHANGED": string
static readonly "ACCESSIBLE_DESCRIPTION_PROPERTY": string
static readonly "ACCESSIBLE_HYPERTEXT_OFFSET": string
static readonly "ACCESSIBLE_INVALIDATE_CHILDREN": string
static readonly "ACCESSIBLE_NAME_PROPERTY": string
static readonly "ACCESSIBLE_SELECTION_PROPERTY": string
static readonly "ACCESSIBLE_STATE_PROPERTY": string
static readonly "ACCESSIBLE_TABLE_CAPTION_CHANGED": string
static readonly "ACCESSIBLE_TABLE_COLUMN_DESCRIPTION_CHANGED": string
static readonly "ACCESSIBLE_TABLE_COLUMN_HEADER_CHANGED": string
static readonly "ACCESSIBLE_TABLE_MODEL_CHANGED": string
static readonly "ACCESSIBLE_TABLE_ROW_DESCRIPTION_CHANGED": string
static readonly "ACCESSIBLE_TABLE_ROW_HEADER_CHANGED": string
static readonly "ACCESSIBLE_TABLE_SUMMARY_CHANGED": string
static readonly "ACCESSIBLE_TEXT_ATTRIBUTES_CHANGED": string
static readonly "ACCESSIBLE_TEXT_PROPERTY": string
static readonly "ACCESSIBLE_VALUE_PROPERTY": string
static readonly "ACCESSIBLE_VISIBLE_DATA_PROPERTY": string

public "addPropertyChangeListener"(propertyChangeListener0: $PropertyChangeListener$$Type): void
public "firePropertyChange"(string0: string, object1: any, object2: any): void
public "getAccessibleAction"(): $AccessibleAction
public "getAccessibleChild"(int0: integer): $Accessible
public "getAccessibleChildrenCount"(): integer
public "getAccessibleComponent"(): $AccessibleComponent
public "getAccessibleDescription"(): string
public "getAccessibleEditableText"(): $AccessibleEditableText
public "getAccessibleIcon"(): $AccessibleIcon[]
public "getAccessibleIndexInParent"(): integer
public "getAccessibleName"(): string
public "getAccessibleParent"(): $Accessible
public "getAccessibleRelationSet"(): $AccessibleRelationSet
public "getAccessibleRole"(): $AccessibleRole
public "getAccessibleSelection"(): $AccessibleSelection
public "getAccessibleStateSet"(): $AccessibleStateSet
public "getAccessibleTable"(): $AccessibleTable
public "getAccessibleText"(): $AccessibleText
public "getAccessibleValue"(): $AccessibleValue
public "getLocale"(): $Locale
public "removePropertyChangeListener"(propertyChangeListener0: $PropertyChangeListener$$Type): void
public "setAccessibleDescription"(string0: string): void
public "setAccessibleName"(string0: string): void
public "setAccessibleParent"(accessible0: $Accessible$$Type): void
get "accessibleAction"(): $AccessibleAction
get "accessibleChildrenCount"(): integer
get "accessibleComponent"(): $AccessibleComponent
get "accessibleDescription"(): string
get "accessibleEditableText"(): $AccessibleEditableText
get "accessibleIcon"(): $AccessibleIcon[]
get "accessibleIndexInParent"(): integer
get "accessibleName"(): string
get "accessibleParent"(): $Accessible
get "accessibleRelationSet"(): $AccessibleRelationSet
get "accessibleRole"(): $AccessibleRole
get "accessibleSelection"(): $AccessibleSelection
get "accessibleStateSet"(): $AccessibleStateSet
get "accessibleTable"(): $AccessibleTable
get "accessibleText"(): $AccessibleText
get "accessibleValue"(): $AccessibleValue
get "locale"(): $Locale
set "accessibleDescription"(value: string)
set "accessibleName"(value: string)
set "accessibleParent"(value: $Accessible$$Type)
}
}

declare module "javax.accessibility.AccessibleTable" {
import { $Accessible, $Accessible$$Type } from "javax.accessibility.Accessible"

export interface $AccessibleTable {
"getAccessibleAt"(int0: integer, int1: integer): $Accessible
"getAccessibleCaption"(): $Accessible
"getAccessibleColumnCount"(): integer
"getAccessibleColumnDescription"(int0: integer): $Accessible
"getAccessibleColumnExtentAt"(int0: integer, int1: integer): integer
"getAccessibleColumnHeader"(): $AccessibleTable
"getAccessibleRowCount"(): integer
"getAccessibleRowDescription"(int0: integer): $Accessible
"getAccessibleRowExtentAt"(int0: integer, int1: integer): integer
"getAccessibleRowHeader"(): $AccessibleTable
"getAccessibleSummary"(): $Accessible
"getSelectedAccessibleColumns"(): integer[]
"getSelectedAccessibleRows"(): integer[]
"isAccessibleColumnSelected"(int0: integer): boolean
"isAccessibleRowSelected"(int0: integer): boolean
"isAccessibleSelected"(int0: integer, int1: integer): boolean
"setAccessibleCaption"(accessible0: $Accessible$$Type): void
"setAccessibleColumnDescription"(int0: integer, accessible1: $Accessible$$Type): void
"setAccessibleColumnHeader"(accessibleTable0: $AccessibleTable$$Type): void
"setAccessibleRowDescription"(int0: integer, accessible1: $Accessible$$Type): void
"setAccessibleRowHeader"(accessibleTable0: $AccessibleTable$$Type): void
"setAccessibleSummary"(accessible0: $Accessible$$Type): void
get "accessibleCaption"(): $Accessible
get "accessibleColumnCount"(): integer
get "accessibleColumnHeader"(): $AccessibleTable
get "accessibleRowCount"(): integer
get "accessibleRowHeader"(): $AccessibleTable
get "accessibleSummary"(): $Accessible
get "selectedAccessibleColumns"(): integer[]
get "selectedAccessibleRows"(): integer[]
set "accessibleCaption"(value: $Accessible$$Type)
set "accessibleColumnHeader"(value: $AccessibleTable$$Type)
set "accessibleRowHeader"(value: $AccessibleTable$$Type)
set "accessibleSummary"(value: $Accessible$$Type)
}

export namespace $AccessibleTable {
const probejs$$marker: never
}
export abstract class $AccessibleTable$$Static implements $AccessibleTable {
}
}

declare module "javax.accessibility.AccessibleSelection" {
import { $Accessible } from "javax.accessibility.Accessible"

export interface $AccessibleSelection {
"addAccessibleSelection"(int0: integer): void
"clearAccessibleSelection"(): void
"getAccessibleSelection"(int0: integer): $Accessible
"getAccessibleSelectionCount"(): integer
"isAccessibleChildSelected"(int0: integer): boolean
"removeAccessibleSelection"(int0: integer): void
"selectAllAccessibleSelection"(): void
get "accessibleSelectionCount"(): integer
}

export namespace $AccessibleSelection {
const probejs$$marker: never
}
export abstract class $AccessibleSelection$$Static implements $AccessibleSelection {
}
}

declare module "javax.accessibility.AccessibleState" {
import { $AccessibleBundle } from "javax.accessibility.AccessibleBundle"

export class $AccessibleState extends $AccessibleBundle {
static readonly "ACTIVE": $AccessibleState
static readonly "ARMED": $AccessibleState
static readonly "BUSY": $AccessibleState
static readonly "CHECKED": $AccessibleState
static readonly "COLLAPSED": $AccessibleState
static readonly "EDITABLE": $AccessibleState
static readonly "ENABLED": $AccessibleState
static readonly "EXPANDABLE": $AccessibleState
static readonly "EXPANDED": $AccessibleState
static readonly "FOCUSABLE": $AccessibleState
static readonly "FOCUSED": $AccessibleState
static readonly "HORIZONTAL": $AccessibleState
static readonly "ICONIFIED": $AccessibleState
static readonly "INDETERMINATE": $AccessibleState
static readonly "MANAGES_DESCENDANTS": $AccessibleState
static readonly "MODAL": $AccessibleState
static readonly "MULTISELECTABLE": $AccessibleState
static readonly "MULTI_LINE": $AccessibleState
static readonly "OPAQUE": $AccessibleState
static readonly "PRESSED": $AccessibleState
static readonly "RESIZABLE": $AccessibleState
static readonly "SELECTABLE": $AccessibleState
static readonly "SELECTED": $AccessibleState
static readonly "SHOWING": $AccessibleState
static readonly "SINGLE_LINE": $AccessibleState
static readonly "TRANSIENT": $AccessibleState
static readonly "TRUNCATED": $AccessibleState
static readonly "VERTICAL": $AccessibleState
static readonly "VISIBLE": $AccessibleState

}
}

declare module "javax.accessibility.AccessibleIcon" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessibleIcon {
"getAccessibleIconDescription"(): string
"getAccessibleIconHeight"(): integer
"getAccessibleIconWidth"(): integer
"setAccessibleIconDescription"(string0: string): void
get "accessibleIconDescription"(): string
get "accessibleIconHeight"(): integer
get "accessibleIconWidth"(): integer
set "accessibleIconDescription"(value: string)
}

export namespace $AccessibleIcon {
const probejs$$marker: never
}
export abstract class $AccessibleIcon$$Static implements $AccessibleIcon {
}
}

declare module "javax.accessibility.AccessibleComponent" {
import { $Color, $Color$$Type } from "java.awt.Color"
import { $Rectangle, $Rectangle$$Type } from "java.awt.Rectangle"
import { $FocusListener$$Type } from "java.awt.event.FocusListener"
import { $Dimension, $Dimension$$Type } from "java.awt.Dimension"
import { $FontMetrics } from "java.awt.FontMetrics"
import { $Font, $Font$$Type } from "java.awt.Font"
import { $Cursor, $Cursor$$Type } from "java.awt.Cursor"
import { $Point, $Point$$Type } from "java.awt.Point"
import { $Accessible } from "javax.accessibility.Accessible"

export interface $AccessibleComponent {
"addFocusListener"(focusListener0: $FocusListener$$Type): void
"contains"(point0: $Point$$Type): boolean
"getAccessibleAt"(point0: $Point$$Type): $Accessible
"getBackground"(): $Color
"getBounds"(): $Rectangle
"getCursor"(): $Cursor
"getFont"(): $Font
"getFontMetrics"(font0: $Font$$Type): $FontMetrics
"getForeground"(): $Color
"getLocation"(): $Point
"getLocationOnScreen"(): $Point
"getSize"(): $Dimension
"isEnabled"(): boolean
"isFocusTraversable"(): boolean
"isShowing"(): boolean
"isVisible"(): boolean
"removeFocusListener"(focusListener0: $FocusListener$$Type): void
"requestFocus"(): void
"setBackground"(color0: $Color$$Type): void
"setBounds"(rectangle0: $Rectangle$$Type): void
"setCursor"(cursor0: $Cursor$$Type): void
"setEnabled"(boolean0: boolean): void
"setFont"(font0: $Font$$Type): void
"setForeground"(color0: $Color$$Type): void
"setLocation"(point0: $Point$$Type): void
"setSize"(dimension0: $Dimension$$Type): void
"setVisible"(boolean0: boolean): void
get "background"(): $Color
get "bounds"(): $Rectangle
get "cursor"(): $Cursor
get "font"(): $Font
get "foreground"(): $Color
get "location"(): $Point
get "locationOnScreen"(): $Point
get "size"(): $Dimension
get "enabled"(): boolean
get "focusTraversable"(): boolean
get "showing"(): boolean
get "visible"(): boolean
set "background"(value: $Color$$Type)
set "bounds"(value: $Rectangle$$Type)
set "cursor"(value: $Cursor$$Type)
set "enabled"(value: boolean)
set "font"(value: $Font$$Type)
set "foreground"(value: $Color$$Type)
set "location"(value: $Point$$Type)
set "size"(value: $Dimension$$Type)
set "visible"(value: boolean)
}

export namespace $AccessibleComponent {
const probejs$$marker: never
}
export abstract class $AccessibleComponent$$Static implements $AccessibleComponent {
}
}

declare module "javax.accessibility.AccessibleRole" {
import { $AccessibleBundle } from "javax.accessibility.AccessibleBundle"

export class $AccessibleRole extends $AccessibleBundle {
static readonly "ALERT": $AccessibleRole
static readonly "AWT_COMPONENT": $AccessibleRole
static readonly "CANVAS": $AccessibleRole
static readonly "CHECK_BOX": $AccessibleRole
static readonly "COLOR_CHOOSER": $AccessibleRole
static readonly "COLUMN_HEADER": $AccessibleRole
static readonly "COMBO_BOX": $AccessibleRole
static readonly "DATE_EDITOR": $AccessibleRole
static readonly "DESKTOP_ICON": $AccessibleRole
static readonly "DESKTOP_PANE": $AccessibleRole
static readonly "DIALOG": $AccessibleRole
static readonly "DIRECTORY_PANE": $AccessibleRole
static readonly "EDITBAR": $AccessibleRole
static readonly "FILE_CHOOSER": $AccessibleRole
static readonly "FILLER": $AccessibleRole
static readonly "FONT_CHOOSER": $AccessibleRole
static readonly "FOOTER": $AccessibleRole
static readonly "FRAME": $AccessibleRole
static readonly "GLASS_PANE": $AccessibleRole
static readonly "GROUP_BOX": $AccessibleRole
static readonly "HEADER": $AccessibleRole
static readonly "HTML_CONTAINER": $AccessibleRole
static readonly "HYPERLINK": $AccessibleRole
static readonly "ICON": $AccessibleRole
static readonly "INTERNAL_FRAME": $AccessibleRole
static readonly "LABEL": $AccessibleRole
static readonly "LAYERED_PANE": $AccessibleRole
static readonly "LIST": $AccessibleRole
static readonly "LIST_ITEM": $AccessibleRole
static readonly "MENU": $AccessibleRole
static readonly "MENU_BAR": $AccessibleRole
static readonly "MENU_ITEM": $AccessibleRole
static readonly "OPTION_PANE": $AccessibleRole
static readonly "PAGE_TAB": $AccessibleRole
static readonly "PAGE_TAB_LIST": $AccessibleRole
static readonly "PANEL": $AccessibleRole
static readonly "PARAGRAPH": $AccessibleRole
static readonly "PASSWORD_TEXT": $AccessibleRole
static readonly "POPUP_MENU": $AccessibleRole
static readonly "PROGRESS_BAR": $AccessibleRole
static readonly "PROGRESS_MONITOR": $AccessibleRole
static readonly "PUSH_BUTTON": $AccessibleRole
static readonly "RADIO_BUTTON": $AccessibleRole
static readonly "ROOT_PANE": $AccessibleRole
static readonly "ROW_HEADER": $AccessibleRole
static readonly "RULER": $AccessibleRole
static readonly "SCROLL_BAR": $AccessibleRole
static readonly "SCROLL_PANE": $AccessibleRole
static readonly "SEPARATOR": $AccessibleRole
static readonly "SLIDER": $AccessibleRole
static readonly "SPIN_BOX": $AccessibleRole
static readonly "SPLIT_PANE": $AccessibleRole
static readonly "STATUS_BAR": $AccessibleRole
static readonly "SWING_COMPONENT": $AccessibleRole
static readonly "TABLE": $AccessibleRole
static readonly "TEXT": $AccessibleRole
static readonly "TOGGLE_BUTTON": $AccessibleRole
static readonly "TOOL_BAR": $AccessibleRole
static readonly "TOOL_TIP": $AccessibleRole
static readonly "TREE": $AccessibleRole
static readonly "UNKNOWN": $AccessibleRole
static readonly "VIEWPORT": $AccessibleRole
static readonly "WINDOW": $AccessibleRole

}
}

declare module "javax.accessibility.Accessible" {
import { $AccessibleContext } from "javax.accessibility.AccessibleContext"

export interface $Accessible {
"getAccessibleContext"(): $AccessibleContext
get "accessibleContext"(): $AccessibleContext
}

export namespace $Accessible {
const probejs$$marker: never
}
export abstract class $Accessible$$Static implements $Accessible {
}
}

declare module "javax.accessibility.AccessibleBundle" {
import { $Locale$$Type } from "java.util.Locale"

export class $AccessibleBundle {
constructor()

public "toDisplayString"(locale0: $Locale$$Type): string
public "toDisplayString"(): string
}
}

declare module "javax.accessibility.AccessibleText" {
import { $Rectangle } from "java.awt.Rectangle"
import { $Point$$Type } from "java.awt.Point"
import { $AttributeSet } from "javax.swing.text.AttributeSet"

export interface $AccessibleText {
"getAfterIndex"(int0: integer, int1: integer): string
"getAtIndex"(int0: integer, int1: integer): string
"getBeforeIndex"(int0: integer, int1: integer): string
"getCaretPosition"(): integer
"getCharCount"(): integer
"getCharacterAttribute"(int0: integer): $AttributeSet
"getCharacterBounds"(int0: integer): $Rectangle
"getIndexAtPoint"(point0: $Point$$Type): integer
"getSelectedText"(): string
"getSelectionEnd"(): integer
"getSelectionStart"(): integer
get "caretPosition"(): integer
get "charCount"(): integer
get "selectedText"(): string
get "selectionEnd"(): integer
get "selectionStart"(): integer
}

export namespace $AccessibleText {
const CHARACTER: integer
const SENTENCE: integer
const WORD: integer
}
export abstract class $AccessibleText$$Static implements $AccessibleText {
static readonly "CHARACTER": integer
static readonly "SENTENCE": integer
static readonly "WORD": integer

}
}

declare module "javax.accessibility.AccessibleEditableText" {
import { $Rectangle } from "java.awt.Rectangle"
import { $Point$$Type } from "java.awt.Point"
import { $AccessibleText } from "javax.accessibility.AccessibleText"
import { $AttributeSet, $AttributeSet$$Type } from "javax.swing.text.AttributeSet"

export interface $AccessibleEditableText extends $AccessibleText {
"cut"(int0: integer, int1: integer): void
"delete"(int0: integer, int1: integer): void
"getAfterIndex"(int0: integer, int1: integer): string
"getAtIndex"(int0: integer, int1: integer): string
"getBeforeIndex"(int0: integer, int1: integer): string
"getCaretPosition"(): integer
"getCharCount"(): integer
"getCharacterAttribute"(int0: integer): $AttributeSet
"getCharacterBounds"(int0: integer): $Rectangle
"getIndexAtPoint"(point0: $Point$$Type): integer
"getSelectedText"(): string
"getSelectionEnd"(): integer
"getSelectionStart"(): integer
"getTextRange"(int0: integer, int1: integer): string
"insertTextAtIndex"(int0: integer, string1: string): void
"paste"(int0: integer): void
"replaceText"(int0: integer, int1: integer, string2: string): void
"selectText"(int0: integer, int1: integer): void
"setAttributes"(int0: integer, int1: integer, attributeSet2: $AttributeSet$$Type): void
"setTextContents"(string0: string): void
get "caretPosition"(): integer
get "charCount"(): integer
get "selectedText"(): string
get "selectionEnd"(): integer
get "selectionStart"(): integer
set "textContents"(value: string)
}

export namespace $AccessibleEditableText {
const probejs$$marker: never
}
export abstract class $AccessibleEditableText$$Static implements $AccessibleEditableText {
}
}

declare module "javax.accessibility.AccessibleRelationSet" {
import { $AccessibleRelation, $AccessibleRelation$$Type } from "javax.accessibility.AccessibleRelation"

export class $AccessibleRelationSet {
constructor()
constructor(accessibleRelation0s: $AccessibleRelation$$Type[])

public "add"(accessibleRelation0: $AccessibleRelation$$Type): boolean
public "addAll"(accessibleRelation0s: $AccessibleRelation$$Type[]): void
public "clear"(): void
public "contains"(string0: string): boolean
public "get"(string0: string): $AccessibleRelation
public "remove"(accessibleRelation0: $AccessibleRelation$$Type): boolean
public "size"(): integer
public "toArray"(): $AccessibleRelation[]
}
}

declare module "javax.accessibility.AccessibleAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessibleAction {
"doAccessibleAction"(int0: integer): boolean
"getAccessibleActionCount"(): integer
"getAccessibleActionDescription"(int0: integer): string
get "accessibleActionCount"(): integer
}

export namespace $AccessibleAction {
const CLICK: string
const DECREMENT: string
const INCREMENT: string
const TOGGLE_EXPAND: string
const TOGGLE_POPUP: string
}
export abstract class $AccessibleAction$$Static implements $AccessibleAction {
static readonly "CLICK": string
static readonly "DECREMENT": string
static readonly "INCREMENT": string
static readonly "TOGGLE_EXPAND": string
static readonly "TOGGLE_POPUP": string

}
}

declare module "javax.accessibility.AccessibleRelation" {
import { $AccessibleBundle } from "javax.accessibility.AccessibleBundle"

export class $AccessibleRelation extends $AccessibleBundle {
static readonly "CHILD_NODE_OF": string
static readonly "CHILD_NODE_OF_PROPERTY": string
static readonly "CONTROLLED_BY": string
static readonly "CONTROLLED_BY_PROPERTY": string
static readonly "CONTROLLER_FOR": string
static readonly "CONTROLLER_FOR_PROPERTY": string
static readonly "EMBEDDED_BY": string
static readonly "EMBEDDED_BY_PROPERTY": string
static readonly "EMBEDS": string
static readonly "EMBEDS_PROPERTY": string
static readonly "FLOWS_FROM": string
static readonly "FLOWS_FROM_PROPERTY": string
static readonly "FLOWS_TO": string
static readonly "FLOWS_TO_PROPERTY": string
static readonly "LABELED_BY": string
static readonly "LABELED_BY_PROPERTY": string
static readonly "LABEL_FOR": string
static readonly "LABEL_FOR_PROPERTY": string
static readonly "MEMBER_OF": string
static readonly "MEMBER_OF_PROPERTY": string
static readonly "PARENT_WINDOW_OF": string
static readonly "PARENT_WINDOW_OF_PROPERTY": string
static readonly "SUBWINDOW_OF": string
static readonly "SUBWINDOW_OF_PROPERTY": string

constructor(string0: string, object1s: any[])
constructor(string0: string, object1: any)
constructor(string0: string)

public "getKey"(): string
public "getTarget"(): any[]
public "setTarget"(object0: any): void
public "setTarget"(object0s: any[]): void
get "key"(): string
get "target"(): any[]
set "target"(value: any)
set "target"(value: any[])
}
}

declare module "javax.accessibility.AccessibleStateSet" {
import { $AccessibleState, $AccessibleState$$Type } from "javax.accessibility.AccessibleState"

export class $AccessibleStateSet {
constructor()
constructor(accessibleState0s: $AccessibleState$$Type[])

public "add"(accessibleState0: $AccessibleState$$Type): boolean
public "addAll"(accessibleState0s: $AccessibleState$$Type[]): void
public "clear"(): void
public "contains"(accessibleState0: $AccessibleState$$Type): boolean
public "remove"(accessibleState0: $AccessibleState$$Type): boolean
public "toArray"(): $AccessibleState[]
}
}

declare module "javax.accessibility.AccessibleValue" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessibleValue {
"getCurrentAccessibleValue"(): number
"getMaximumAccessibleValue"(): number
"getMinimumAccessibleValue"(): number
"setCurrentAccessibleValue"(number0: number): boolean
get "currentAccessibleValue"(): number
get "maximumAccessibleValue"(): number
get "minimumAccessibleValue"(): number
set "currentAccessibleValue"(value: number)
}

export namespace $AccessibleValue {
const probejs$$marker: never
}
export abstract class $AccessibleValue$$Static implements $AccessibleValue {
}
}

