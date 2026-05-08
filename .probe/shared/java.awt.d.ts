declare module "java.awt.dnd.DropTargetDragEvent" {
import { $List } from "java.util.List"
import { $DataFlavor, $DataFlavor$$Type } from "java.awt.datatransfer.DataFlavor"
import { $DropTargetEvent } from "java.awt.dnd.DropTargetEvent"
import { $Transferable } from "java.awt.datatransfer.Transferable"
import { $Point, $Point$$Type } from "java.awt.Point"
import { $DropTargetContext$$Type } from "java.awt.dnd.DropTargetContext"

export class $DropTargetDragEvent extends $DropTargetEvent {
constructor(dropTargetContext0: $DropTargetContext$$Type, point1: $Point$$Type, int2: integer, int3: integer)

public "acceptDrag"(int0: integer): void
public "getCurrentDataFlavors"(): $DataFlavor[]
public "getCurrentDataFlavorsAsList"(): $List<$DataFlavor>
public "getDropAction"(): integer
public "getLocation"(): $Point
public "getSourceActions"(): integer
public "getTransferable"(): $Transferable
public "isDataFlavorSupported"(dataFlavor0: $DataFlavor$$Type): boolean
public "rejectDrag"(): void
get "currentDataFlavors"(): $DataFlavor[]
get "currentDataFlavorsAsList"(): $List<$DataFlavor>
get "dropAction"(): integer
get "location"(): $Point
get "sourceActions"(): integer
get "transferable"(): $Transferable
}
}

declare module "java.awt.event.MouseListener" {
import { $EventListener } from "java.util.EventListener"
import { $MouseEvent$$Type } from "java.awt.event.MouseEvent"

export interface $MouseListener extends $EventListener {
"mouseClicked"(mouseEvent0: $MouseEvent$$Type): void
"mouseEntered"(mouseEvent0: $MouseEvent$$Type): void
"mouseExited"(mouseEvent0: $MouseEvent$$Type): void
"mousePressed"(mouseEvent0: $MouseEvent$$Type): void
"mouseReleased"(mouseEvent0: $MouseEvent$$Type): void
}

export namespace $MouseListener {
const probejs$$marker: never
}
export abstract class $MouseListener$$Static implements $MouseListener {
}
}

declare module "java.awt.image.ImageProducer" {
import { $ImageConsumer$$Type } from "java.awt.image.ImageConsumer"

export interface $ImageProducer {
"addConsumer"(imageConsumer0: $ImageConsumer$$Type): void
"isConsumer"(imageConsumer0: $ImageConsumer$$Type): boolean
"removeConsumer"(imageConsumer0: $ImageConsumer$$Type): void
"requestTopDownLeftRightResend"(imageConsumer0: $ImageConsumer$$Type): void
"startProduction"(imageConsumer0: $ImageConsumer$$Type): void
}

export namespace $ImageProducer {
const probejs$$marker: never
}
export abstract class $ImageProducer$$Static implements $ImageProducer {
}
}

declare module "java.awt.JobAttributes$SidesType" {
import { $AttributeValue } from "java.awt.AttributeValue"

export class $JobAttributes$SidesType extends $AttributeValue {
static readonly "ONE_SIDED": $JobAttributes$SidesType
static readonly "TWO_SIDED_LONG_EDGE": $JobAttributes$SidesType
static readonly "TWO_SIDED_SHORT_EDGE": $JobAttributes$SidesType

}
}

declare module "java.awt.datatransfer.FlavorMap" {
import { $DataFlavor, $DataFlavor$$Type } from "java.awt.datatransfer.DataFlavor"
import { $Map } from "java.util.Map"

export interface $FlavorMap {
"getFlavorsForNatives"(string0s: string[]): $Map<string, $DataFlavor>
"getNativesForFlavors"(dataFlavor0s: $DataFlavor$$Type[]): $Map<$DataFlavor, string>
}

export namespace $FlavorMap {
const probejs$$marker: never
}
export abstract class $FlavorMap$$Static implements $FlavorMap {
}
}

declare module "java.awt.PageAttributes$OrientationRequestedType" {
import { $AttributeValue } from "java.awt.AttributeValue"

export class $PageAttributes$OrientationRequestedType extends $AttributeValue {
static readonly "LANDSCAPE": $PageAttributes$OrientationRequestedType
static readonly "PORTRAIT": $PageAttributes$OrientationRequestedType

}
}

declare module "java.awt.font.FontRenderContext" {
import { $AffineTransform, $AffineTransform$$Type } from "java.awt.geom.AffineTransform"

export class $FontRenderContext {
constructor(affineTransform0: $AffineTransform$$Type, boolean1: boolean, boolean2: boolean)
constructor(affineTransform0: $AffineTransform$$Type, object1: any, object2: any)

public "equals"(fontRenderContext0: $FontRenderContext$$Type): boolean
public "getAntiAliasingHint"(): any
public "getFractionalMetricsHint"(): any
public "getTransform"(): $AffineTransform
public "getTransformType"(): integer
public "isAntiAliased"(): boolean
public "isTransformed"(): boolean
public "usesFractionalMetrics"(): boolean
get "antiAliasingHint"(): any
get "fractionalMetricsHint"(): any
get "transform"(): $AffineTransform
get "transformType"(): integer
get "antiAliased"(): boolean
get "transformed"(): boolean
}
}

declare module "java.awt.PageAttributes" {
import { $Cloneable } from "java.lang.Cloneable"
import { $PageAttributes$PrintQualityType, $PageAttributes$PrintQualityType$$Type } from "java.awt.PageAttributes$PrintQualityType"
import { $PageAttributes$ColorType, $PageAttributes$ColorType$$Type } from "java.awt.PageAttributes$ColorType"
import { $PageAttributes$OrientationRequestedType, $PageAttributes$OrientationRequestedType$$Type } from "java.awt.PageAttributes$OrientationRequestedType"
import { $PageAttributes$OriginType, $PageAttributes$OriginType$$Type } from "java.awt.PageAttributes$OriginType"
import { $PageAttributes$MediaType, $PageAttributes$MediaType$$Type } from "java.awt.PageAttributes$MediaType"

export class $PageAttributes implements $Cloneable {
constructor(pageAttributes0: $PageAttributes$$Type)
constructor(colorType0: $PageAttributes$ColorType$$Type, mediaType1: $PageAttributes$MediaType$$Type, orientationRequestedType2: $PageAttributes$OrientationRequestedType$$Type, originType3: $PageAttributes$OriginType$$Type, printQualityType4: $PageAttributes$PrintQualityType$$Type, int5s: integer[])
constructor()

public "clone"(): any
public "getColor"(): $PageAttributes$ColorType
public "getMedia"(): $PageAttributes$MediaType
public "getOrientationRequested"(): $PageAttributes$OrientationRequestedType
public "getOrigin"(): $PageAttributes$OriginType
public "getPrintQuality"(): $PageAttributes$PrintQualityType
public "getPrinterResolution"(): integer[]
public "set"(pageAttributes0: $PageAttributes$$Type): void
public "setColor"(colorType0: $PageAttributes$ColorType$$Type): void
public "setMedia"(mediaType0: $PageAttributes$MediaType$$Type): void
public "setMediaToDefault"(): void
public "setOrientationRequested"(int0: integer): void
public "setOrientationRequested"(orientationRequestedType0: $PageAttributes$OrientationRequestedType$$Type): void
public "setOrientationRequestedToDefault"(): void
public "setOrigin"(originType0: $PageAttributes$OriginType$$Type): void
public "setPrintQuality"(printQualityType0: $PageAttributes$PrintQualityType$$Type): void
public "setPrintQuality"(int0: integer): void
public "setPrintQualityToDefault"(): void
public "setPrinterResolution"(int0: integer): void
public "setPrinterResolution"(int0s: integer[]): void
public "setPrinterResolutionToDefault"(): void
get "color"(): $PageAttributes$ColorType
get "media"(): $PageAttributes$MediaType
get "orientationRequested"(): $PageAttributes$OrientationRequestedType
get "origin"(): $PageAttributes$OriginType
get "printQuality"(): $PageAttributes$PrintQualityType
get "printerResolution"(): integer[]
set "color"(value: $PageAttributes$ColorType$$Type)
set "media"(value: $PageAttributes$MediaType$$Type)
set "orientationRequested"(value: integer)
set "orientationRequested"(value: $PageAttributes$OrientationRequestedType$$Type)
set "origin"(value: $PageAttributes$OriginType$$Type)
set "printQuality"(value: $PageAttributes$PrintQualityType$$Type)
set "printQuality"(value: integer)
set "printerResolution"(value: integer)
set "printerResolution"(value: integer[])
}
}

declare module "java.awt.font.GlyphMetrics" {
import { $Rectangle2D, $Rectangle2D$$Type } from "java.awt.geom.Rectangle2D"

export class $GlyphMetrics {
static readonly "COMBINING": byte
static readonly "COMPONENT": byte
static readonly "LIGATURE": byte
static readonly "STANDARD": byte
static readonly "WHITESPACE": byte

constructor(boolean0: boolean, float1: float, float2: float, rectangle2D3: $Rectangle2D$$Type, byte4: byte)
constructor(float0: float, rectangle2D1: $Rectangle2D$$Type, byte2: byte)

public "getAdvance"(): float
public "getAdvanceX"(): float
public "getAdvanceY"(): float
public "getBounds2D"(): $Rectangle2D
public "getLSB"(): float
public "getRSB"(): float
public "getType"(): integer
public "isCombining"(): boolean
public "isComponent"(): boolean
public "isLigature"(): boolean
public "isStandard"(): boolean
public "isWhitespace"(): boolean
get "advance"(): float
get "advanceX"(): float
get "advanceY"(): float
get "bounds2D"(): $Rectangle2D
get "lSB"(): float
get "rSB"(): float
get "type"(): integer
get "combining"(): boolean
get "component"(): boolean
get "ligature"(): boolean
get "standard"(): boolean
get "whitespace"(): boolean
}
}

declare module "java.awt.image.TileObserver" {
import { $WritableRenderedImage$$Type } from "java.awt.image.WritableRenderedImage"

export interface $TileObserver {
"tileUpdate"(writableRenderedImage0: $WritableRenderedImage$$Type, int1: integer, int2: integer, boolean3: boolean): void
}

export namespace $TileObserver {
const probejs$$marker: never
}
export abstract class $TileObserver$$Static implements $TileObserver {
}
}

declare module "java.awt.Font" {
import { $LineMetrics } from "java.awt.font.LineMetrics"
import { $CharacterIterator$$Type } from "java.text.CharacterIterator"
import { $TextAttribute } from "java.awt.font.TextAttribute"
import { $Rectangle2D } from "java.awt.geom.Rectangle2D"
import { $GlyphVector } from "java.awt.font.GlyphVector"
import { $AffineTransform, $AffineTransform$$Type } from "java.awt.geom.AffineTransform"
import { $File$$Type } from "java.io.File"
import { $Serializable } from "java.io.Serializable"
import { $AttributedCharacterIterator$Attribute, $AttributedCharacterIterator$Attribute$$Type } from "java.text.AttributedCharacterIterator$Attribute"
import { $FontRenderContext$$Type } from "java.awt.font.FontRenderContext"
import { $Locale$$Type } from "java.util.Locale"
import { $Map, $Map$$Type } from "java.util.Map"
import { $InputStream$$Type } from "java.io.InputStream"

export class $Font implements $Serializable {
static readonly "BOLD": integer
static readonly "CENTER_BASELINE": integer
static readonly "DIALOG": string
static readonly "DIALOG_INPUT": string
static readonly "HANGING_BASELINE": integer
static readonly "ITALIC": integer
static readonly "LAYOUT_LEFT_TO_RIGHT": integer
static readonly "LAYOUT_NO_LIMIT_CONTEXT": integer
static readonly "LAYOUT_NO_START_CONTEXT": integer
static readonly "LAYOUT_RIGHT_TO_LEFT": integer
static readonly "MONOSPACED": string
static readonly "PLAIN": integer
static readonly "ROMAN_BASELINE": integer
static readonly "SANS_SERIF": string
static readonly "SERIF": string
static readonly "TRUETYPE_FONT": integer
static readonly "TYPE1_FONT": integer

constructor(string0: string, int1: integer, int2: integer)
constructor(map0: $Map$$Type<$AttributedCharacterIterator$Attribute$$Type, any>)

public "canDisplay"(char0: character): boolean
public "canDisplay"(int0: integer): boolean
public "canDisplayUpTo"(string0: string): integer
public "canDisplayUpTo"(char0s: character[], int1: integer, int2: integer): integer
public "canDisplayUpTo"(characterIterator0: $CharacterIterator$$Type, int1: integer, int2: integer): integer
public static "createFont"(int0: integer, file1: $File$$Type): $Font
public static "createFont"(int0: integer, inputStream1: $InputStream$$Type): $Font
public static "createFonts"(file0: $File$$Type): $Font[]
public static "createFonts"(inputStream0: $InputStream$$Type): $Font[]
public "createGlyphVector"(fontRenderContext0: $FontRenderContext$$Type, string1: string): $GlyphVector
public "createGlyphVector"(fontRenderContext0: $FontRenderContext$$Type, int1s: integer[]): $GlyphVector
public "createGlyphVector"(fontRenderContext0: $FontRenderContext$$Type, char1s: character[]): $GlyphVector
public "createGlyphVector"(fontRenderContext0: $FontRenderContext$$Type, characterIterator1: $CharacterIterator$$Type): $GlyphVector
public static "decode"(string0: string): $Font
public "deriveFont"(affineTransform0: $AffineTransform$$Type): $Font
public "deriveFont"(int0: integer): $Font
public "deriveFont"(map0: $Map$$Type<$AttributedCharacterIterator$Attribute$$Type, any>): $Font
public "deriveFont"(float0: float): $Font
public "deriveFont"(int0: integer, affineTransform1: $AffineTransform$$Type): $Font
public "deriveFont"(int0: integer, float1: float): $Font
public "getAttributes"(): $Map<$TextAttribute, any>
public "getAvailableAttributes"(): $AttributedCharacterIterator$Attribute[]
public "getBaselineFor"(char0: character): byte
public "getFamily"(): string
public "getFamily"(locale0: $Locale$$Type): string
public static "getFont"(map0: $Map$$Type<$AttributedCharacterIterator$Attribute$$Type, any>): $Font
public static "getFont"(string0: string): $Font
public static "getFont"(string0: string, font1: $Font$$Type): $Font
public "getFontName"(): string
public "getFontName"(locale0: $Locale$$Type): string
public "getItalicAngle"(): float
public "getLineMetrics"(char0s: character[], int1: integer, int2: integer, fontRenderContext3: $FontRenderContext$$Type): $LineMetrics
public "getLineMetrics"(string0: string, fontRenderContext1: $FontRenderContext$$Type): $LineMetrics
public "getLineMetrics"(string0: string, int1: integer, int2: integer, fontRenderContext3: $FontRenderContext$$Type): $LineMetrics
public "getLineMetrics"(characterIterator0: $CharacterIterator$$Type, int1: integer, int2: integer, fontRenderContext3: $FontRenderContext$$Type): $LineMetrics
public "getMaxCharBounds"(fontRenderContext0: $FontRenderContext$$Type): $Rectangle2D
public "getMissingGlyphCode"(): integer
public "getName"(): string
public "getNumGlyphs"(): integer
public "getPSName"(): string
public "getSize"(): integer
public "getSize2D"(): float
public "getStringBounds"(characterIterator0: $CharacterIterator$$Type, int1: integer, int2: integer, fontRenderContext3: $FontRenderContext$$Type): $Rectangle2D
public "getStringBounds"(string0: string, fontRenderContext1: $FontRenderContext$$Type): $Rectangle2D
public "getStringBounds"(string0: string, int1: integer, int2: integer, fontRenderContext3: $FontRenderContext$$Type): $Rectangle2D
public "getStringBounds"(char0s: character[], int1: integer, int2: integer, fontRenderContext3: $FontRenderContext$$Type): $Rectangle2D
public "getStyle"(): integer
public "getTransform"(): $AffineTransform
public "hasLayoutAttributes"(): boolean
public "hasUniformLineMetrics"(): boolean
public "isBold"(): boolean
public "isItalic"(): boolean
public "isPlain"(): boolean
public "isTransformed"(): boolean
public "layoutGlyphVector"(fontRenderContext0: $FontRenderContext$$Type, char1s: character[], int2: integer, int3: integer, int4: integer): $GlyphVector
public static "textRequiresLayout"(char0s: character[], int1: integer, int2: integer): boolean
get "attributes"(): $Map<$TextAttribute, any>
get "availableAttributes"(): $AttributedCharacterIterator$Attribute[]
get "family"(): string
get "fontName"(): string
get "italicAngle"(): float
get "missingGlyphCode"(): integer
get "name"(): string
get "numGlyphs"(): integer
get "pSName"(): string
get "size"(): integer
get "size2D"(): float
get "style"(): integer
get "transform"(): $AffineTransform
get "bold"(): boolean
get "italic"(): boolean
get "plain"(): boolean
get "transformed"(): boolean
}
}

declare module "java.awt.AWTEvent" {
import { $Event$$Type } from "java.awt.Event"
import { $EventObject } from "java.util.EventObject"

export class $AWTEvent extends $EventObject {
static readonly "ACTION_EVENT_MASK": long
static readonly "ADJUSTMENT_EVENT_MASK": long
static readonly "COMPONENT_EVENT_MASK": long
static readonly "CONTAINER_EVENT_MASK": long
static readonly "FOCUS_EVENT_MASK": long
static readonly "HIERARCHY_BOUNDS_EVENT_MASK": long
static readonly "HIERARCHY_EVENT_MASK": long
static readonly "INPUT_METHOD_EVENT_MASK": long
static readonly "INVOCATION_EVENT_MASK": long
static readonly "ITEM_EVENT_MASK": long
static readonly "KEY_EVENT_MASK": long
static readonly "MOUSE_EVENT_MASK": long
static readonly "MOUSE_MOTION_EVENT_MASK": long
static readonly "MOUSE_WHEEL_EVENT_MASK": long
static readonly "PAINT_EVENT_MASK": long
static readonly "RESERVED_ID_MAX": integer
static readonly "TEXT_EVENT_MASK": long
static readonly "WINDOW_EVENT_MASK": long
static readonly "WINDOW_FOCUS_EVENT_MASK": long
static readonly "WINDOW_STATE_EVENT_MASK": long

constructor(object0: any, int1: integer)
/** @deprecated */
constructor(event0: $Event$$Type)

public "getID"(): integer
public "paramString"(): string
public "setSource"(object0: any): void
get "iD"(): integer
set "source"(value: any)
}
}

declare module "java.awt.event.HierarchyEvent" {
import { $AWTEvent } from "java.awt.AWTEvent"
import { $Container, $Container$$Type } from "java.awt.Container"
import { $Component, $Component$$Type } from "java.awt.Component"

export class $HierarchyEvent extends $AWTEvent {
static readonly "ANCESTOR_MOVED": integer
static readonly "ANCESTOR_RESIZED": integer
static readonly "DISPLAYABILITY_CHANGED": integer
static readonly "HIERARCHY_CHANGED": integer
static readonly "HIERARCHY_FIRST": integer
static readonly "HIERARCHY_LAST": integer
static readonly "PARENT_CHANGED": integer
static readonly "SHOWING_CHANGED": integer

constructor(component0: $Component$$Type, int1: integer, component2: $Component$$Type, container3: $Container$$Type)
constructor(component0: $Component$$Type, int1: integer, component2: $Component$$Type, container3: $Container$$Type, long4: long)

public "getChangeFlags"(): long
public "getChanged"(): $Component
public "getChangedParent"(): $Container
public "getComponent"(): $Component
get "changeFlags"(): long
get "changed"(): $Component
get "changedParent"(): $Container
get "component"(): $Component
}
}

declare module "java.awt.CompositeContext" {
import { $Raster$$Type } from "java.awt.image.Raster"
import { $WritableRaster$$Type } from "java.awt.image.WritableRaster"

export interface $CompositeContext {
"compose"(raster0: $Raster$$Type, raster1: $Raster$$Type, writableRaster2: $WritableRaster$$Type): void
"dispose"(): void
}

export namespace $CompositeContext {
const probejs$$marker: never
}
export abstract class $CompositeContext$$Static implements $CompositeContext {
}
}

declare module "java.awt.ImageCapabilities" {
import { $Cloneable } from "java.lang.Cloneable"

export class $ImageCapabilities implements $Cloneable {
constructor(boolean0: boolean)

public "clone"(): any
public "isAccelerated"(): boolean
public "isTrueVolatile"(): boolean
get "accelerated"(): boolean
get "trueVolatile"(): boolean
}
}

declare module "java.awt.im.InputMethodHighlight" {
import { $TextAttribute, $TextAttribute$$Type } from "java.awt.font.TextAttribute"
import { $Map, $Map$$Type } from "java.util.Map"

export class $InputMethodHighlight {
static readonly "CONVERTED_TEXT": integer
static readonly "RAW_TEXT": integer
static readonly "SELECTED_CONVERTED_TEXT_HIGHLIGHT": $InputMethodHighlight
static readonly "SELECTED_RAW_TEXT_HIGHLIGHT": $InputMethodHighlight
static readonly "UNSELECTED_CONVERTED_TEXT_HIGHLIGHT": $InputMethodHighlight
static readonly "UNSELECTED_RAW_TEXT_HIGHLIGHT": $InputMethodHighlight

constructor(boolean0: boolean, int1: integer)
constructor(boolean0: boolean, int1: integer, int2: integer, map3: $Map$$Type<$TextAttribute$$Type, any>)
constructor(boolean0: boolean, int1: integer, int2: integer)

public "getState"(): integer
public "getStyle"(): $Map<$TextAttribute, any>
public "getVariation"(): integer
public "isSelected"(): boolean
get "state"(): integer
get "style"(): $Map<$TextAttribute, any>
get "variation"(): integer
get "selected"(): boolean
}
}

declare module "java.awt.font.GlyphJustificationInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $GlyphJustificationInfo {
static readonly "PRIORITY_INTERCHAR": integer
static readonly "PRIORITY_KASHIDA": integer
static readonly "PRIORITY_NONE": integer
static readonly "PRIORITY_WHITESPACE": integer
readonly "growAbsorb": boolean
readonly "growLeftLimit": float
readonly "growPriority": integer
readonly "growRightLimit": float
readonly "shrinkAbsorb": boolean
readonly "shrinkLeftLimit": float
readonly "shrinkPriority": integer
readonly "shrinkRightLimit": float
readonly "weight": float

constructor(float0: float, boolean1: boolean, int2: integer, float3: float, float4: float, boolean5: boolean, int6: integer, float7: float, float8: float)

}
}

declare module "java.awt.image.ColorModel" {
import { $Transparency } from "java.awt.Transparency"
import { $Raster$$Type } from "java.awt.image.Raster"
import { $WritableRaster, $WritableRaster$$Type } from "java.awt.image.WritableRaster"
import { $ColorSpace } from "java.awt.color.ColorSpace"
import { $SampleModel, $SampleModel$$Type } from "java.awt.image.SampleModel"

export class $ColorModel implements $Transparency {
constructor(int0: integer)

public "coerceData"(writableRaster0: $WritableRaster$$Type, boolean1: boolean): $ColorModel
public "createCompatibleSampleModel"(int0: integer, int1: integer): $SampleModel
public "createCompatibleWritableRaster"(int0: integer, int1: integer): $WritableRaster
/** @deprecated */
public "finalize"(): void
public "getAlpha"(int0: integer): integer
public "getAlpha"(object0: any): integer
public "getAlphaRaster"(writableRaster0: $WritableRaster$$Type): $WritableRaster
public "getBlue"(object0: any): integer
public "getBlue"(int0: integer): integer
public "getColorSpace"(): $ColorSpace
public "getComponentSize"(int0: integer): integer
public "getComponentSize"(): integer[]
public "getComponents"(object0: any, int1s: integer[], int2: integer): integer[]
public "getComponents"(int0: integer, int1s: integer[], int2: integer): integer[]
public "getDataElement"(float0s: float[], int1: integer): integer
public "getDataElement"(int0s: integer[], int1: integer): integer
public "getDataElements"(float0s: float[], int1: integer, object2: any): any
public "getDataElements"(int0: integer, object1: any): any
public "getDataElements"(int0s: integer[], int1: integer, object2: any): any
public "getGreen"(int0: integer): integer
public "getGreen"(object0: any): integer
public "getNormalizedComponents"(object0: any, float1s: float[], int2: integer): float[]
public "getNormalizedComponents"(int0s: integer[], int1: integer, float2s: float[], int3: integer): float[]
public "getNumColorComponents"(): integer
public "getNumComponents"(): integer
public "getPixelSize"(): integer
public "getRGB"(object0: any): integer
public "getRGB"(int0: integer): integer
public static "getRGBdefault"(): $ColorModel
public "getRed"(object0: any): integer
public "getRed"(int0: integer): integer
public "getTransferType"(): integer
public "getTransparency"(): integer
public "getUnnormalizedComponents"(float0s: float[], int1: integer, int2s: integer[], int3: integer): integer[]
public "hasAlpha"(): boolean
public "isAlphaPremultiplied"(): boolean
public "isCompatibleRaster"(raster0: $Raster$$Type): boolean
public "isCompatibleSampleModel"(sampleModel0: $SampleModel$$Type): boolean
get "colorSpace"(): $ColorSpace
get "componentSize"(): integer[]
get "numColorComponents"(): integer
get "numComponents"(): integer
get "pixelSize"(): integer
get "transferType"(): integer
get "transparency"(): integer
get "alphaPremultiplied"(): boolean
}
}

declare module "java.awt.dnd.DragSourceDragEvent" {
import { $DragSourceContext$$Type } from "java.awt.dnd.DragSourceContext"
import { $DragSourceEvent } from "java.awt.dnd.DragSourceEvent"

export class $DragSourceDragEvent extends $DragSourceEvent {
constructor(dragSourceContext0: $DragSourceContext$$Type, int1: integer, int2: integer, int3: integer)
constructor(dragSourceContext0: $DragSourceContext$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer)

public "getDropAction"(): integer
public "getGestureModifiers"(): integer
public "getGestureModifiersEx"(): integer
public "getTargetActions"(): integer
public "getUserAction"(): integer
get "dropAction"(): integer
get "gestureModifiers"(): integer
get "gestureModifiersEx"(): integer
get "targetActions"(): integer
get "userAction"(): integer
}
}

declare module "java.awt.event.KeyEvent" {
import { $InputEvent } from "java.awt.event.InputEvent"
import { $Component$$Type } from "java.awt.Component"

export class $KeyEvent extends $InputEvent {
static readonly "CHAR_UNDEFINED": character
static readonly "KEY_FIRST": integer
static readonly "KEY_LAST": integer
static readonly "KEY_LOCATION_LEFT": integer
static readonly "KEY_LOCATION_NUMPAD": integer
static readonly "KEY_LOCATION_RIGHT": integer
static readonly "KEY_LOCATION_STANDARD": integer
static readonly "KEY_LOCATION_UNKNOWN": integer
static readonly "KEY_PRESSED": integer
static readonly "KEY_RELEASED": integer
static readonly "KEY_TYPED": integer
static readonly "VK_0": integer
static readonly "VK_1": integer
static readonly "VK_2": integer
static readonly "VK_3": integer
static readonly "VK_4": integer
static readonly "VK_5": integer
static readonly "VK_6": integer
static readonly "VK_7": integer
static readonly "VK_8": integer
static readonly "VK_9": integer
static readonly "VK_A": integer
static readonly "VK_ACCEPT": integer
static readonly "VK_ADD": integer
static readonly "VK_AGAIN": integer
static readonly "VK_ALL_CANDIDATES": integer
static readonly "VK_ALPHANUMERIC": integer
static readonly "VK_ALT": integer
static readonly "VK_ALT_GRAPH": integer
static readonly "VK_AMPERSAND": integer
static readonly "VK_ASTERISK": integer
static readonly "VK_AT": integer
static readonly "VK_B": integer
static readonly "VK_BACK_QUOTE": integer
static readonly "VK_BACK_SLASH": integer
static readonly "VK_BACK_SPACE": integer
static readonly "VK_BEGIN": integer
static readonly "VK_BRACELEFT": integer
static readonly "VK_BRACERIGHT": integer
static readonly "VK_C": integer
static readonly "VK_CANCEL": integer
static readonly "VK_CAPS_LOCK": integer
static readonly "VK_CIRCUMFLEX": integer
static readonly "VK_CLEAR": integer
static readonly "VK_CLOSE_BRACKET": integer
static readonly "VK_CODE_INPUT": integer
static readonly "VK_COLON": integer
static readonly "VK_COMMA": integer
static readonly "VK_COMPOSE": integer
static readonly "VK_CONTEXT_MENU": integer
static readonly "VK_CONTROL": integer
static readonly "VK_CONVERT": integer
static readonly "VK_COPY": integer
static readonly "VK_CUT": integer
static readonly "VK_D": integer
static readonly "VK_DEAD_ABOVEDOT": integer
static readonly "VK_DEAD_ABOVERING": integer
static readonly "VK_DEAD_ACUTE": integer
static readonly "VK_DEAD_BREVE": integer
static readonly "VK_DEAD_CARON": integer
static readonly "VK_DEAD_CEDILLA": integer
static readonly "VK_DEAD_CIRCUMFLEX": integer
static readonly "VK_DEAD_DIAERESIS": integer
static readonly "VK_DEAD_DOUBLEACUTE": integer
static readonly "VK_DEAD_GRAVE": integer
static readonly "VK_DEAD_IOTA": integer
static readonly "VK_DEAD_MACRON": integer
static readonly "VK_DEAD_OGONEK": integer
static readonly "VK_DEAD_SEMIVOICED_SOUND": integer
static readonly "VK_DEAD_TILDE": integer
static readonly "VK_DEAD_VOICED_SOUND": integer
static readonly "VK_DECIMAL": integer
static readonly "VK_DELETE": integer
static readonly "VK_DIVIDE": integer
static readonly "VK_DOLLAR": integer
static readonly "VK_DOWN": integer
static readonly "VK_E": integer
static readonly "VK_END": integer
static readonly "VK_ENTER": integer
static readonly "VK_EQUALS": integer
static readonly "VK_ESCAPE": integer
static readonly "VK_EURO_SIGN": integer
static readonly "VK_EXCLAMATION_MARK": integer
static readonly "VK_F": integer
static readonly "VK_F1": integer
static readonly "VK_F10": integer
static readonly "VK_F11": integer
static readonly "VK_F12": integer
static readonly "VK_F13": integer
static readonly "VK_F14": integer
static readonly "VK_F15": integer
static readonly "VK_F16": integer
static readonly "VK_F17": integer
static readonly "VK_F18": integer
static readonly "VK_F19": integer
static readonly "VK_F2": integer
static readonly "VK_F20": integer
static readonly "VK_F21": integer
static readonly "VK_F22": integer
static readonly "VK_F23": integer
static readonly "VK_F24": integer
static readonly "VK_F3": integer
static readonly "VK_F4": integer
static readonly "VK_F5": integer
static readonly "VK_F6": integer
static readonly "VK_F7": integer
static readonly "VK_F8": integer
static readonly "VK_F9": integer
static readonly "VK_FINAL": integer
static readonly "VK_FIND": integer
static readonly "VK_FULL_WIDTH": integer
static readonly "VK_G": integer
static readonly "VK_GREATER": integer
static readonly "VK_H": integer
static readonly "VK_HALF_WIDTH": integer
static readonly "VK_HELP": integer
static readonly "VK_HIRAGANA": integer
static readonly "VK_HOME": integer
static readonly "VK_I": integer
static readonly "VK_INPUT_METHOD_ON_OFF": integer
static readonly "VK_INSERT": integer
static readonly "VK_INVERTED_EXCLAMATION_MARK": integer
static readonly "VK_J": integer
static readonly "VK_JAPANESE_HIRAGANA": integer
static readonly "VK_JAPANESE_KATAKANA": integer
static readonly "VK_JAPANESE_ROMAN": integer
static readonly "VK_K": integer
static readonly "VK_KANA": integer
static readonly "VK_KANA_LOCK": integer
static readonly "VK_KANJI": integer
static readonly "VK_KATAKANA": integer
static readonly "VK_KP_DOWN": integer
static readonly "VK_KP_LEFT": integer
static readonly "VK_KP_RIGHT": integer
static readonly "VK_KP_UP": integer
static readonly "VK_L": integer
static readonly "VK_LEFT": integer
static readonly "VK_LEFT_PARENTHESIS": integer
static readonly "VK_LESS": integer
static readonly "VK_M": integer
static readonly "VK_META": integer
static readonly "VK_MINUS": integer
static readonly "VK_MODECHANGE": integer
static readonly "VK_MULTIPLY": integer
static readonly "VK_N": integer
static readonly "VK_NONCONVERT": integer
static readonly "VK_NUMBER_SIGN": integer
static readonly "VK_NUMPAD0": integer
static readonly "VK_NUMPAD1": integer
static readonly "VK_NUMPAD2": integer
static readonly "VK_NUMPAD3": integer
static readonly "VK_NUMPAD4": integer
static readonly "VK_NUMPAD5": integer
static readonly "VK_NUMPAD6": integer
static readonly "VK_NUMPAD7": integer
static readonly "VK_NUMPAD8": integer
static readonly "VK_NUMPAD9": integer
static readonly "VK_NUM_LOCK": integer
static readonly "VK_O": integer
static readonly "VK_OPEN_BRACKET": integer
static readonly "VK_P": integer
static readonly "VK_PAGE_DOWN": integer
static readonly "VK_PAGE_UP": integer
static readonly "VK_PASTE": integer
static readonly "VK_PAUSE": integer
static readonly "VK_PERIOD": integer
static readonly "VK_PLUS": integer
static readonly "VK_PREVIOUS_CANDIDATE": integer
static readonly "VK_PRINTSCREEN": integer
static readonly "VK_PROPS": integer
static readonly "VK_Q": integer
static readonly "VK_QUOTE": integer
static readonly "VK_QUOTEDBL": integer
static readonly "VK_R": integer
static readonly "VK_RIGHT": integer
static readonly "VK_RIGHT_PARENTHESIS": integer
static readonly "VK_ROMAN_CHARACTERS": integer
static readonly "VK_S": integer
static readonly "VK_SCROLL_LOCK": integer
static readonly "VK_SEMICOLON": integer
static readonly "VK_SEPARATER": integer
static readonly "VK_SEPARATOR": integer
static readonly "VK_SHIFT": integer
static readonly "VK_SLASH": integer
static readonly "VK_SPACE": integer
static readonly "VK_STOP": integer
static readonly "VK_SUBTRACT": integer
static readonly "VK_T": integer
static readonly "VK_TAB": integer
static readonly "VK_U": integer
static readonly "VK_UNDEFINED": integer
static readonly "VK_UNDERSCORE": integer
static readonly "VK_UNDO": integer
static readonly "VK_UP": integer
static readonly "VK_V": integer
static readonly "VK_W": integer
static readonly "VK_WINDOWS": integer
static readonly "VK_X": integer
static readonly "VK_Y": integer
static readonly "VK_Z": integer

constructor(component0: $Component$$Type, int1: integer, long2: long, int3: integer, int4: integer, char5: character, int6: integer)
constructor(component0: $Component$$Type, int1: integer, long2: long, int3: integer, int4: integer, char5: character)
/** @deprecated */
constructor(component0: $Component$$Type, int1: integer, long2: long, int3: integer, int4: integer)

public "getExtendedKeyCode"(): integer
public static "getExtendedKeyCodeForChar"(int0: integer): integer
public "getKeyChar"(): character
public "getKeyCode"(): integer
public "getKeyLocation"(): integer
/** @deprecated */
public static "getKeyModifiersText"(int0: integer): string
public static "getKeyText"(int0: integer): string
public "isActionKey"(): boolean
public "setKeyChar"(char0: character): void
public "setKeyCode"(int0: integer): void
/** @deprecated */
public "setModifiers"(int0: integer): void
get "extendedKeyCode"(): integer
get "keyChar"(): character
get "keyCode"(): integer
get "keyLocation"(): integer
get "actionKey"(): boolean
set "keyChar"(value: character)
set "keyCode"(value: integer)
set "modifiers"(value: integer)
}
}

declare module "java.awt.image.ImageObserver" {
import { $Image$$Type } from "java.awt.Image"

export interface $ImageObserver {
"imageUpdate"(image0: $Image$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): boolean
}

export namespace $ImageObserver {
const ABORT: integer
const ALLBITS: integer
const ERROR: integer
const FRAMEBITS: integer
const HEIGHT: integer
const PROPERTIES: integer
const SOMEBITS: integer
const WIDTH: integer
}
export abstract class $ImageObserver$$Static implements $ImageObserver {
static readonly "ABORT": integer
static readonly "ALLBITS": integer
static readonly "ERROR": integer
static readonly "FRAMEBITS": integer
static readonly "HEIGHT": integer
static readonly "PROPERTIES": integer
static readonly "SOMEBITS": integer
static readonly "WIDTH": integer

}
}

declare module "java.awt.MenuItem" {
import { $EventListener, $EventListener$$Type } from "java.util.EventListener"
import { $ActionListener, $ActionListener$$Type } from "java.awt.event.ActionListener"
import { $MenuComponent } from "java.awt.MenuComponent"
import { $Class$$Type } from "java.lang.Class"
import { $MenuShortcut, $MenuShortcut$$Type } from "java.awt.MenuShortcut"
import { $Accessible } from "javax.accessibility.Accessible"

export class $MenuItem extends $MenuComponent implements $Accessible {
constructor(string0: string, menuShortcut1: $MenuShortcut$$Type)
constructor(string0: string)
constructor()

public "addActionListener"(actionListener0: $ActionListener$$Type): void
public "addNotify"(): void
public "deleteShortcut"(): void
/** @deprecated */
public "disable"(): void
/** @deprecated */
public "enable"(boolean0: boolean): void
/** @deprecated */
public "enable"(): void
public "getActionCommand"(): string
public "getActionListeners"(): $ActionListener[]
public "getLabel"(): string
public "getListeners"<T extends $EventListener>(class0: $Class$$Type<T>): T[]
public "getShortcut"(): $MenuShortcut
public "isEnabled"(): boolean
public "paramString"(): string
public "removeActionListener"(actionListener0: $ActionListener$$Type): void
public "setActionCommand"(string0: string): void
public "setEnabled"(boolean0: boolean): void
public "setLabel"(string0: string): void
public "setShortcut"(menuShortcut0: $MenuShortcut$$Type): void
get "actionCommand"(): string
get "actionListeners"(): $ActionListener[]
get "label"(): string
get "shortcut"(): $MenuShortcut
get "enabled"(): boolean
set "actionCommand"(value: string)
set "enabled"(value: boolean)
set "label"(value: string)
set "shortcut"(value: $MenuShortcut$$Type)
}
}

declare module "java.awt.event.HierarchyBoundsListener" {
import { $EventListener } from "java.util.EventListener"
import { $HierarchyEvent$$Type } from "java.awt.event.HierarchyEvent"

export interface $HierarchyBoundsListener extends $EventListener {
"ancestorMoved"(hierarchyEvent0: $HierarchyEvent$$Type): void
"ancestorResized"(hierarchyEvent0: $HierarchyEvent$$Type): void
}

export namespace $HierarchyBoundsListener {
const probejs$$marker: never
}
export abstract class $HierarchyBoundsListener$$Static implements $HierarchyBoundsListener {
}
}

declare module "java.awt.im.InputContext" {
import { $AWTEvent$$Type } from "java.awt.AWTEvent"
import { $Locale, $Locale$$Type } from "java.util.Locale"
import { $Character$Subset$$Type } from "java.lang.Character$Subset"
import { $Component$$Type } from "java.awt.Component"

export class $InputContext {
public "dispatchEvent"(aWTEvent0: $AWTEvent$$Type): void
public "dispose"(): void
public "endComposition"(): void
public "getInputMethodControlObject"(): any
public static "getInstance"(): $InputContext
public "getLocale"(): $Locale
public "isCompositionEnabled"(): boolean
public "reconvert"(): void
public "removeNotify"(component0: $Component$$Type): void
public "selectInputMethod"(locale0: $Locale$$Type): boolean
public "setCharacterSubsets"(subset0s: $Character$Subset$$Type[]): void
public "setCompositionEnabled"(boolean0: boolean): void
get "inputMethodControlObject"(): any
get "locale"(): $Locale
get "compositionEnabled"(): boolean
set "characterSubsets"(value: $Character$Subset$$Type[])
set "compositionEnabled"(value: boolean)
}
}

declare module "java.awt.Shape" {
import { $Rectangle } from "java.awt.Rectangle"
import { $Point2D$$Type } from "java.awt.geom.Point2D"
import { $Rectangle2D, $Rectangle2D$$Type } from "java.awt.geom.Rectangle2D"
import { $AffineTransform$$Type } from "java.awt.geom.AffineTransform"
import { $PathIterator } from "java.awt.geom.PathIterator"

export interface $Shape {
"contains"(double0: double, double1: double): boolean
"contains"(rectangle2D0: $Rectangle2D$$Type): boolean
"contains"(double0: double, double1: double, double2: double, double3: double): boolean
"contains"(point2D0: $Point2D$$Type): boolean
"getBounds"(): $Rectangle
"getBounds2D"(): $Rectangle2D
"getPathIterator"(affineTransform0: $AffineTransform$$Type): $PathIterator
"getPathIterator"(affineTransform0: $AffineTransform$$Type, double1: double): $PathIterator
"intersects"(rectangle2D0: $Rectangle2D$$Type): boolean
"intersects"(double0: double, double1: double, double2: double, double3: double): boolean
get "bounds"(): $Rectangle
get "bounds2D"(): $Rectangle2D
}

export namespace $Shape {
const probejs$$marker: never
}
export abstract class $Shape$$Static implements $Shape {
}
}

declare module "java.awt.JobAttributes$MultipleDocumentHandlingType" {
import { $AttributeValue } from "java.awt.AttributeValue"

export class $JobAttributes$MultipleDocumentHandlingType extends $AttributeValue {
static readonly "SEPARATE_DOCUMENTS_COLLATED_COPIES": $JobAttributes$MultipleDocumentHandlingType
static readonly "SEPARATE_DOCUMENTS_UNCOLLATED_COPIES": $JobAttributes$MultipleDocumentHandlingType

}
}

declare module "java.awt.image.BufferStrategy" {
import { $Graphics } from "java.awt.Graphics"
import { $BufferCapabilities } from "java.awt.BufferCapabilities"

export class $BufferStrategy {
public "contentsLost"(): boolean
public "contentsRestored"(): boolean
public "dispose"(): void
public "getCapabilities"(): $BufferCapabilities
public "getDrawGraphics"(): $Graphics
public "show"(): void
get "capabilities"(): $BufferCapabilities
get "drawGraphics"(): $Graphics
}
}

declare module "java.awt.event.WindowFocusListener" {
import { $EventListener } from "java.util.EventListener"
import { $WindowEvent$$Type } from "java.awt.event.WindowEvent"

export interface $WindowFocusListener extends $EventListener {
"windowGainedFocus"(windowEvent0: $WindowEvent$$Type): void
"windowLostFocus"(windowEvent0: $WindowEvent$$Type): void
}

export namespace $WindowFocusListener {
const probejs$$marker: never
}
export abstract class $WindowFocusListener$$Static implements $WindowFocusListener {
}
}

declare module "java.awt.JobAttributes$DestinationType" {
import { $AttributeValue } from "java.awt.AttributeValue"

export class $JobAttributes$DestinationType extends $AttributeValue {
static readonly "FILE": $JobAttributes$DestinationType
static readonly "PRINTER": $JobAttributes$DestinationType

}
}

declare module "java.awt.event.AWTEventListener" {
import { $AWTEvent$$Type } from "java.awt.AWTEvent"
import { $EventListener } from "java.util.EventListener"

export interface $AWTEventListener extends $EventListener {
"eventDispatched"(aWTEvent0: $AWTEvent$$Type): void
}

export namespace $AWTEventListener {
const probejs$$marker: never
}
export abstract class $AWTEventListener$$Static implements $AWTEventListener {
}
}

declare module "java.awt.EventQueue" {
import { $AWTEvent, $AWTEvent$$Type } from "java.awt.AWTEvent"
import { $SecondaryLoop } from "java.awt.SecondaryLoop"
import { $Runnable$$Type } from "java.lang.Runnable"

export class $EventQueue {
constructor()

public "createSecondaryLoop"(): $SecondaryLoop
public static "getCurrentEvent"(): $AWTEvent
public static "getMostRecentEventTime"(): long
public "getNextEvent"(): $AWTEvent
public static "invokeAndWait"(runnable0: $Runnable$$Type): void
public static "invokeLater"(runnable0: $Runnable$$Type): void
public static "isDispatchThread"(): boolean
public "peekEvent"(): $AWTEvent
public "peekEvent"(int0: integer): $AWTEvent
public "postEvent"(aWTEvent0: $AWTEvent$$Type): void
public "push"(eventQueue0: $EventQueue$$Type): void
get "nextEvent"(): $AWTEvent
}
}

declare module "java.awt.event.ActionEvent" {
import { $AWTEvent } from "java.awt.AWTEvent"

export class $ActionEvent extends $AWTEvent {
static readonly "ACTION_FIRST": integer
static readonly "ACTION_LAST": integer
static readonly "ACTION_PERFORMED": integer
static readonly "ALT_MASK": integer
static readonly "CTRL_MASK": integer
static readonly "META_MASK": integer
static readonly "SHIFT_MASK": integer

constructor(object0: any, int1: integer, string2: string)
constructor(object0: any, int1: integer, string2: string, long3: long, int4: integer)
constructor(object0: any, int1: integer, string2: string, int3: integer)

public "getActionCommand"(): string
public "getModifiers"(): integer
public "getWhen"(): long
get "actionCommand"(): string
get "modifiers"(): integer
get "when"(): long
}
}

declare module "java.awt.Dialog$ModalExclusionType" {
import { $Enum } from "java.lang.Enum"

export class $Dialog$ModalExclusionType extends $Enum<$Dialog$ModalExclusionType> {
static readonly "APPLICATION_EXCLUDE": $Dialog$ModalExclusionType
static readonly "NO_EXCLUDE": $Dialog$ModalExclusionType
static readonly "TOOLKIT_EXCLUDE": $Dialog$ModalExclusionType

public static "valueOf"(string0: string): $Dialog$ModalExclusionType
public static "values"(): $Dialog$ModalExclusionType[]
}
}

declare module "java.awt.dnd.DropTargetEvent" {
import { $DropTargetContext, $DropTargetContext$$Type } from "java.awt.dnd.DropTargetContext"
import { $EventObject } from "java.util.EventObject"

export class $DropTargetEvent extends $EventObject {
constructor(dropTargetContext0: $DropTargetContext$$Type)

public "getDropTargetContext"(): $DropTargetContext
get "dropTargetContext"(): $DropTargetContext
}
}

declare module "java.awt.Graphics2D" {
import { $Shape$$Type } from "java.awt.Shape"
import { $Color, $Color$$Type } from "java.awt.Color"
import { $Stroke, $Stroke$$Type } from "java.awt.Stroke"
import { $Rectangle$$Type } from "java.awt.Rectangle"
import { $GraphicsConfiguration } from "java.awt.GraphicsConfiguration"
import { $Image$$Type } from "java.awt.Image"
import { $BufferedImage$$Type } from "java.awt.image.BufferedImage"
import { $Composite, $Composite$$Type } from "java.awt.Composite"
import { $RenderedImage$$Type } from "java.awt.image.RenderedImage"
import { $BufferedImageOp$$Type } from "java.awt.image.BufferedImageOp"
import { $GlyphVector$$Type } from "java.awt.font.GlyphVector"
import { $RenderingHints } from "java.awt.RenderingHints"
import { $AffineTransform, $AffineTransform$$Type } from "java.awt.geom.AffineTransform"
import { $ImageObserver$$Type } from "java.awt.image.ImageObserver"
import { $FontRenderContext } from "java.awt.font.FontRenderContext"
import { $AttributedCharacterIterator$$Type } from "java.text.AttributedCharacterIterator"
import { $Paint, $Paint$$Type } from "java.awt.Paint"
import { $Map$$Type } from "java.util.Map"
import { $RenderingHints$Key$$Type } from "java.awt.RenderingHints$Key"
import { $Graphics } from "java.awt.Graphics"
import { $RenderableImage$$Type } from "java.awt.image.renderable.RenderableImage"

export class $Graphics2D extends $Graphics {
public "addRenderingHints"(map0: $Map$$Type<any, any>): void
public "clip"(shape0: $Shape$$Type): void
public "draw"(shape0: $Shape$$Type): void
public "drawGlyphVector"(glyphVector0: $GlyphVector$$Type, float1: float, float2: float): void
public "drawImage"(image0: $Image$$Type, affineTransform1: $AffineTransform$$Type, imageObserver2: $ImageObserver$$Type): boolean
public "drawImage"(bufferedImage0: $BufferedImage$$Type, bufferedImageOp1: $BufferedImageOp$$Type, int2: integer, int3: integer): void
public "drawRenderableImage"(renderableImage0: $RenderableImage$$Type, affineTransform1: $AffineTransform$$Type): void
public "drawRenderedImage"(renderedImage0: $RenderedImage$$Type, affineTransform1: $AffineTransform$$Type): void
public "drawString"(attributedCharacterIterator0: $AttributedCharacterIterator$$Type, float1: float, float2: float): void
public "drawString"(string0: string, float1: float, float2: float): void
public "fill"(shape0: $Shape$$Type): void
public "getBackground"(): $Color
public "getComposite"(): $Composite
public "getDeviceConfiguration"(): $GraphicsConfiguration
public "getFontRenderContext"(): $FontRenderContext
public "getPaint"(): $Paint
public "getRenderingHint"(key0: $RenderingHints$Key$$Type): any
public "getRenderingHints"(): $RenderingHints
public "getStroke"(): $Stroke
public "getTransform"(): $AffineTransform
public "hit"(rectangle0: $Rectangle$$Type, shape1: $Shape$$Type, boolean2: boolean): boolean
public "rotate"(double0: double): void
public "rotate"(double0: double, double1: double, double2: double): void
public "scale"(double0: double, double1: double): void
public "setBackground"(color0: $Color$$Type): void
public "setComposite"(composite0: $Composite$$Type): void
public "setPaint"(paint0: $Paint$$Type): void
public "setRenderingHint"(key0: $RenderingHints$Key$$Type, object1: any): void
public "setRenderingHints"(map0: $Map$$Type<any, any>): void
public "setStroke"(stroke0: $Stroke$$Type): void
public "setTransform"(affineTransform0: $AffineTransform$$Type): void
public "shear"(double0: double, double1: double): void
public "transform"(affineTransform0: $AffineTransform$$Type): void
public "translate"(double0: double, double1: double): void
get "background"(): $Color
get "composite"(): $Composite
get "deviceConfiguration"(): $GraphicsConfiguration
get "fontRenderContext"(): $FontRenderContext
get "paint"(): $Paint
get "renderingHints"(): $RenderingHints
get "stroke"(): $Stroke
set "background"(value: $Color$$Type)
set "composite"(value: $Composite$$Type)
set "paint"(value: $Paint$$Type)
set "renderingHints"(value: $Map$$Type<any, any>)
set "stroke"(value: $Stroke$$Type)
}
}

declare module "java.awt.geom.AffineTransform" {
import { $Shape, $Shape$$Type } from "java.awt.Shape"
import { $Cloneable } from "java.lang.Cloneable"
import { $Point2D, $Point2D$$Type } from "java.awt.geom.Point2D"
import { $Serializable } from "java.io.Serializable"

export class $AffineTransform implements $Cloneable, $Serializable {
static readonly "TYPE_FLIP": integer
static readonly "TYPE_GENERAL_ROTATION": integer
static readonly "TYPE_GENERAL_SCALE": integer
static readonly "TYPE_GENERAL_TRANSFORM": integer
static readonly "TYPE_IDENTITY": integer
static readonly "TYPE_MASK_ROTATION": integer
static readonly "TYPE_MASK_SCALE": integer
static readonly "TYPE_QUADRANT_ROTATION": integer
static readonly "TYPE_TRANSLATION": integer
static readonly "TYPE_UNIFORM_SCALE": integer

constructor(affineTransform0: $AffineTransform$$Type)
constructor(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float)
constructor()
constructor(float0s: float[])
constructor(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double)
constructor(double0s: double[])

public "clone"(): any
public "concatenate"(affineTransform0: $AffineTransform$$Type): void
public "createInverse"(): $AffineTransform
public "createTransformedShape"(shape0: $Shape$$Type): $Shape
public "deltaTransform"(point2D0: $Point2D$$Type, point2D1: $Point2D$$Type): $Point2D
public "deltaTransform"(double0s: double[], int1: integer, double2s: double[], int3: integer, int4: integer): void
public "getDeterminant"(): double
public "getMatrix"(double0s: double[]): void
public static "getQuadrantRotateInstance"(int0: integer, double1: double, double2: double): $AffineTransform
public static "getQuadrantRotateInstance"(int0: integer): $AffineTransform
public static "getRotateInstance"(double0: double, double1: double, double2: double, double3: double): $AffineTransform
public static "getRotateInstance"(double0: double, double1: double): $AffineTransform
public static "getRotateInstance"(double0: double): $AffineTransform
public static "getRotateInstance"(double0: double, double1: double, double2: double): $AffineTransform
public static "getScaleInstance"(double0: double, double1: double): $AffineTransform
public "getScaleX"(): double
public "getScaleY"(): double
public static "getShearInstance"(double0: double, double1: double): $AffineTransform
public "getShearX"(): double
public "getShearY"(): double
public static "getTranslateInstance"(double0: double, double1: double): $AffineTransform
public "getTranslateX"(): double
public "getTranslateY"(): double
public "getType"(): integer
public "inverseTransform"(point2D0: $Point2D$$Type, point2D1: $Point2D$$Type): $Point2D
public "inverseTransform"(double0s: double[], int1: integer, double2s: double[], int3: integer, int4: integer): void
public "invert"(): void
public "isIdentity"(): boolean
public "preConcatenate"(affineTransform0: $AffineTransform$$Type): void
public "quadrantRotate"(int0: integer): void
public "quadrantRotate"(int0: integer, double1: double, double2: double): void
public "rotate"(double0: double, double1: double): void
public "rotate"(double0: double, double1: double, double2: double, double3: double): void
public "rotate"(double0: double): void
public "rotate"(double0: double, double1: double, double2: double): void
public "scale"(double0: double, double1: double): void
public "setToIdentity"(): void
public "setToQuadrantRotation"(int0: integer, double1: double, double2: double): void
public "setToQuadrantRotation"(int0: integer): void
public "setToRotation"(double0: double, double1: double): void
public "setToRotation"(double0: double, double1: double, double2: double, double3: double): void
public "setToRotation"(double0: double): void
public "setToRotation"(double0: double, double1: double, double2: double): void
public "setToScale"(double0: double, double1: double): void
public "setToShear"(double0: double, double1: double): void
public "setToTranslation"(double0: double, double1: double): void
public "setTransform"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): void
public "setTransform"(affineTransform0: $AffineTransform$$Type): void
public "shear"(double0: double, double1: double): void
public "transform"(float0s: float[], int1: integer, float2s: float[], int3: integer, int4: integer): void
public "transform"(double0s: double[], int1: integer, double2s: double[], int3: integer, int4: integer): void
public "transform"(double0s: double[], int1: integer, float2s: float[], int3: integer, int4: integer): void
public "transform"(float0s: float[], int1: integer, double2s: double[], int3: integer, int4: integer): void
public "transform"(point2D0: $Point2D$$Type, point2D1: $Point2D$$Type): $Point2D
public "transform"(point2D0s: $Point2D$$Type[], int1: integer, point2D2s: $Point2D$$Type[], int3: integer, int4: integer): void
public "translate"(double0: double, double1: double): void
get "determinant"(): double
get "scaleX"(): double
get "scaleY"(): double
get "shearX"(): double
get "shearY"(): double
get "translateX"(): double
get "translateY"(): double
get "type"(): integer
get "identity"(): boolean
set "toQuadrantRotation"(value: integer)
set "toRotation"(value: double)
}
}

declare module "java.awt.RenderingHints" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Cloneable } from "java.lang.Cloneable"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Collection } from "java.util.Collection"
import { $RenderingHints$Key, $RenderingHints$Key$$Type } from "java.awt.RenderingHints$Key"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Set } from "java.util.Set"
import { $Function$$Type } from "java.util.function.Function"

export class $RenderingHints implements $Map<any, any>, $Cloneable {
static readonly "KEY_ALPHA_INTERPOLATION": $RenderingHints$Key
static readonly "KEY_ANTIALIASING": $RenderingHints$Key
static readonly "KEY_COLOR_RENDERING": $RenderingHints$Key
static readonly "KEY_DITHERING": $RenderingHints$Key
static readonly "KEY_FRACTIONALMETRICS": $RenderingHints$Key
static readonly "KEY_INTERPOLATION": $RenderingHints$Key
static readonly "KEY_RENDERING": $RenderingHints$Key
static readonly "KEY_RESOLUTION_VARIANT": $RenderingHints$Key
static readonly "KEY_STROKE_CONTROL": $RenderingHints$Key
static readonly "KEY_TEXT_ANTIALIASING": $RenderingHints$Key
static readonly "KEY_TEXT_LCD_CONTRAST": $RenderingHints$Key
static readonly "VALUE_ALPHA_INTERPOLATION_DEFAULT": any
static readonly "VALUE_ALPHA_INTERPOLATION_QUALITY": any
static readonly "VALUE_ALPHA_INTERPOLATION_SPEED": any
static readonly "VALUE_ANTIALIAS_DEFAULT": any
static readonly "VALUE_ANTIALIAS_OFF": any
static readonly "VALUE_ANTIALIAS_ON": any
static readonly "VALUE_COLOR_RENDER_DEFAULT": any
static readonly "VALUE_COLOR_RENDER_QUALITY": any
static readonly "VALUE_COLOR_RENDER_SPEED": any
static readonly "VALUE_DITHER_DEFAULT": any
static readonly "VALUE_DITHER_DISABLE": any
static readonly "VALUE_DITHER_ENABLE": any
static readonly "VALUE_FRACTIONALMETRICS_DEFAULT": any
static readonly "VALUE_FRACTIONALMETRICS_OFF": any
static readonly "VALUE_FRACTIONALMETRICS_ON": any
static readonly "VALUE_INTERPOLATION_BICUBIC": any
static readonly "VALUE_INTERPOLATION_BILINEAR": any
static readonly "VALUE_INTERPOLATION_NEAREST_NEIGHBOR": any
static readonly "VALUE_RENDER_DEFAULT": any
static readonly "VALUE_RENDER_QUALITY": any
static readonly "VALUE_RENDER_SPEED": any
static readonly "VALUE_RESOLUTION_VARIANT_BASE": any
static readonly "VALUE_RESOLUTION_VARIANT_DEFAULT": any
static readonly "VALUE_RESOLUTION_VARIANT_DPI_FIT": any
static readonly "VALUE_RESOLUTION_VARIANT_SIZE_FIT": any
static readonly "VALUE_STROKE_DEFAULT": any
static readonly "VALUE_STROKE_NORMALIZE": any
static readonly "VALUE_STROKE_PURE": any
static readonly "VALUE_TEXT_ANTIALIAS_DEFAULT": any
static readonly "VALUE_TEXT_ANTIALIAS_GASP": any
static readonly "VALUE_TEXT_ANTIALIAS_LCD_HBGR": any
static readonly "VALUE_TEXT_ANTIALIAS_LCD_HRGB": any
static readonly "VALUE_TEXT_ANTIALIAS_LCD_VBGR": any
static readonly "VALUE_TEXT_ANTIALIAS_LCD_VRGB": any
static readonly "VALUE_TEXT_ANTIALIAS_OFF": any
static readonly "VALUE_TEXT_ANTIALIAS_ON": any

constructor(map0: $Map$$Type<$RenderingHints$Key$$Type, any>)
constructor(key0: $RenderingHints$Key$$Type, object1: any)

public "add"(renderingHints0: $RenderingHints$$Type): void
public "clear"(): void
public "clone"(): any
public "compute"(object0: any, biFunction1: $BiFunction$$Type<any, any, any>): any
public "computeIfAbsent"(object0: any, function1: $Function$$Type<any, any>): any
public "computeIfPresent"(object0: any, biFunction1: $BiFunction$$Type<any, any, any>): any
public "containsKey"(object0: any): boolean
public "containsValue"(object0: any): boolean
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "entrySet"(): $Set<$Map$Entry<any, any>>
public "forEach"(biConsumer0: $BiConsumer$$Type<any, any>): void
public "get"(object0: any): any
public "getOrDefault"(object0: any, object1: any): any
public "isEmpty"(): boolean
public "keySet"(): $Set<any>
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
public "put"(object0: any, object1: any): any
public "putAll"(map0: $Map$$Type<any, any>): void
public "putIfAbsent"(object0: any, object1: any): any
public "remove"(object0: any): any
public "remove"(object0: any, object1: any): boolean
public "replace"(object0: any, object1: any): any
public "replace"(object0: any, object1: any, object2: any): boolean
public "replaceAll"(biFunction0: $BiFunction$$Type<any, any, any>): void
public "size"(): integer
public "values"(): $Collection<any>
[index: string | number]: any
get "empty"(): boolean
}
}

declare module "java.awt.Point" {
import { $Point2D } from "java.awt.geom.Point2D"
import { $Serializable } from "java.io.Serializable"

export class $Point extends $Point2D implements $Serializable {
constructor(point0: $Point$$Type)
constructor(int0: integer, int1: integer)
constructor()

public "getLocation"(): $Point
public "move"(int0: integer, int1: integer): void
public "setLocation"(int0: integer, int1: integer): void
public "setLocation"(point0: $Point$$Type): void
public "translate"(int0: integer, int1: integer): void
get "x"(): integer
set "x"(value: integer)
get "y"(): integer
set "y"(value: integer)
get "location"(): $Point
set "location"(value: $Point$$Type)
}
}

declare module "java.awt.image.WritableRaster" {
import { $Raster, $Raster$$Type } from "java.awt.image.Raster"

export class $WritableRaster extends $Raster {
public "createWritableChild"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6s: integer[]): $WritableRaster
public "createWritableTranslatedChild"(int0: integer, int1: integer): $WritableRaster
public "getWritableParent"(): $WritableRaster
public "setDataElements"(int0: integer, int1: integer, raster2: $Raster$$Type): void
public "setDataElements"(int0: integer, int1: integer, object2: any): void
public "setDataElements"(int0: integer, int1: integer, int2: integer, int3: integer, object4: any): void
public "setPixel"(int0: integer, int1: integer, double2s: double[]): void
public "setPixel"(int0: integer, int1: integer, int2s: integer[]): void
public "setPixel"(int0: integer, int1: integer, float2s: float[]): void
public "setPixels"(int0: integer, int1: integer, int2: integer, int3: integer, double4s: double[]): void
public "setPixels"(int0: integer, int1: integer, int2: integer, int3: integer, int4s: integer[]): void
public "setPixels"(int0: integer, int1: integer, int2: integer, int3: integer, float4s: float[]): void
public "setRect"(raster0: $Raster$$Type): void
public "setRect"(int0: integer, int1: integer, raster2: $Raster$$Type): void
public "setSample"(int0: integer, int1: integer, int2: integer, float3: float): void
public "setSample"(int0: integer, int1: integer, int2: integer, double3: double): void
public "setSample"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "setSamples"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5s: integer[]): void
public "setSamples"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, float5s: float[]): void
public "setSamples"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, double5s: double[]): void
get "writableParent"(): $WritableRaster
set "rect"(value: $Raster$$Type)
}
}

declare module "java.awt.dnd.DragGestureEvent" {
import { $InputEvent, $InputEvent$$Type } from "java.awt.event.InputEvent"
import { $Iterator } from "java.util.Iterator"
import { $Image$$Type } from "java.awt.Image"
import { $DragSource } from "java.awt.dnd.DragSource"
import { $Cursor$$Type } from "java.awt.Cursor"
import { $Transferable$$Type } from "java.awt.datatransfer.Transferable"
import { $Point, $Point$$Type } from "java.awt.Point"
import { $Component } from "java.awt.Component"
import { $EventObject } from "java.util.EventObject"
import { $List$$Type } from "java.util.List"
import { $DragGestureRecognizer, $DragGestureRecognizer$$Type } from "java.awt.dnd.DragGestureRecognizer"
import { $DragSourceListener$$Type } from "java.awt.dnd.DragSourceListener"

export class $DragGestureEvent extends $EventObject {
constructor(dragGestureRecognizer0: $DragGestureRecognizer$$Type, int1: integer, point2: $Point$$Type, list3: $List$$Type<$InputEvent$$Type>)

public "getComponent"(): $Component
public "getDragAction"(): integer
public "getDragOrigin"(): $Point
public "getDragSource"(): $DragSource
public "getSourceAsDragGestureRecognizer"(): $DragGestureRecognizer
public "getTriggerEvent"(): $InputEvent
public "iterator"(): $Iterator<$InputEvent>
public "startDrag"(cursor0: $Cursor$$Type, transferable1: $Transferable$$Type, dragSourceListener2: $DragSourceListener$$Type): void
public "startDrag"(cursor0: $Cursor$$Type, transferable1: $Transferable$$Type): void
public "startDrag"(cursor0: $Cursor$$Type, image1: $Image$$Type, point2: $Point$$Type, transferable3: $Transferable$$Type, dragSourceListener4: $DragSourceListener$$Type): void
public "toArray"(object0s: any[]): any[]
public "toArray"(): any[]
get "component"(): $Component
get "dragAction"(): integer
get "dragOrigin"(): $Point
get "dragSource"(): $DragSource
get "sourceAsDragGestureRecognizer"(): $DragGestureRecognizer
get "triggerEvent"(): $InputEvent
}
}

declare module "java.awt.font.TextAttribute" {
import { $AttributedCharacterIterator$Attribute } from "java.text.AttributedCharacterIterator$Attribute"

export class $TextAttribute extends $AttributedCharacterIterator$Attribute {
static readonly "BACKGROUND": $TextAttribute
static readonly "BIDI_EMBEDDING": $TextAttribute
static readonly "CHAR_REPLACEMENT": $TextAttribute
static readonly "FAMILY": $TextAttribute
static readonly "FONT": $TextAttribute
static readonly "FOREGROUND": $TextAttribute
static readonly "INPUT_METHOD_HIGHLIGHT": $TextAttribute
static readonly "INPUT_METHOD_UNDERLINE": $TextAttribute
static readonly "JUSTIFICATION": $TextAttribute
static readonly "JUSTIFICATION_FULL": float
static readonly "JUSTIFICATION_NONE": float
static readonly "KERNING": $TextAttribute
static readonly "KERNING_ON": integer
static readonly "LIGATURES": $TextAttribute
static readonly "LIGATURES_ON": integer
static readonly "NUMERIC_SHAPING": $TextAttribute
static readonly "POSTURE": $TextAttribute
static readonly "POSTURE_OBLIQUE": float
static readonly "POSTURE_REGULAR": float
static readonly "RUN_DIRECTION": $TextAttribute
static readonly "RUN_DIRECTION_LTR": boolean
static readonly "RUN_DIRECTION_RTL": boolean
static readonly "SIZE": $TextAttribute
static readonly "STRIKETHROUGH": $TextAttribute
static readonly "STRIKETHROUGH_ON": boolean
static readonly "SUPERSCRIPT": $TextAttribute
static readonly "SUPERSCRIPT_SUB": integer
static readonly "SUPERSCRIPT_SUPER": integer
static readonly "SWAP_COLORS": $TextAttribute
static readonly "SWAP_COLORS_ON": boolean
static readonly "TRACKING": $TextAttribute
static readonly "TRACKING_LOOSE": float
static readonly "TRACKING_TIGHT": float
static readonly "TRANSFORM": $TextAttribute
static readonly "UNDERLINE": $TextAttribute
static readonly "UNDERLINE_LOW_DASHED": integer
static readonly "UNDERLINE_LOW_DOTTED": integer
static readonly "UNDERLINE_LOW_GRAY": integer
static readonly "UNDERLINE_LOW_ONE_PIXEL": integer
static readonly "UNDERLINE_LOW_TWO_PIXEL": integer
static readonly "UNDERLINE_ON": integer
static readonly "WEIGHT": $TextAttribute
static readonly "WEIGHT_BOLD": float
static readonly "WEIGHT_DEMIBOLD": float
static readonly "WEIGHT_DEMILIGHT": float
static readonly "WEIGHT_EXTRABOLD": float
static readonly "WEIGHT_EXTRA_LIGHT": float
static readonly "WEIGHT_HEAVY": float
static readonly "WEIGHT_LIGHT": float
static readonly "WEIGHT_MEDIUM": float
static readonly "WEIGHT_REGULAR": float
static readonly "WEIGHT_SEMIBOLD": float
static readonly "WEIGHT_ULTRABOLD": float
static readonly "WIDTH": $TextAttribute
static readonly "WIDTH_CONDENSED": float
static readonly "WIDTH_EXTENDED": float
static readonly "WIDTH_REGULAR": float
static readonly "WIDTH_SEMI_CONDENSED": float
static readonly "WIDTH_SEMI_EXTENDED": float

}
}

declare module "java.awt.Transparency" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Transparency {
"getTransparency"(): integer
get "transparency"(): integer
}

export namespace $Transparency {
const BITMASK: integer
const OPAQUE: integer
const TRANSLUCENT: integer
}
export abstract class $Transparency$$Static implements $Transparency {
static readonly "BITMASK": integer
static readonly "OPAQUE": integer
static readonly "TRANSLUCENT": integer

}
}

declare module "java.awt.PrintJob" {
import { $Dimension } from "java.awt.Dimension"
import { $Graphics } from "java.awt.Graphics"

export class $PrintJob {
public "end"(): void
/** @deprecated */
public "finalize"(): void
public "getGraphics"(): $Graphics
public "getPageDimension"(): $Dimension
public "getPageResolution"(): integer
public "lastPageFirst"(): boolean
get "graphics"(): $Graphics
get "pageDimension"(): $Dimension
get "pageResolution"(): integer
}
}

declare module "java.awt.datatransfer.Clipboard" {
import { $ClipboardOwner$$Type } from "java.awt.datatransfer.ClipboardOwner"
import { $DataFlavor, $DataFlavor$$Type } from "java.awt.datatransfer.DataFlavor"
import { $FlavorListener, $FlavorListener$$Type } from "java.awt.datatransfer.FlavorListener"
import { $Transferable, $Transferable$$Type } from "java.awt.datatransfer.Transferable"

export class $Clipboard {
constructor(string0: string)

public "addFlavorListener"(flavorListener0: $FlavorListener$$Type): void
public "getAvailableDataFlavors"(): $DataFlavor[]
public "getContents"(object0: any): $Transferable
public "getData"(dataFlavor0: $DataFlavor$$Type): any
public "getFlavorListeners"(): $FlavorListener[]
public "getName"(): string
public "isDataFlavorAvailable"(dataFlavor0: $DataFlavor$$Type): boolean
public "removeFlavorListener"(flavorListener0: $FlavorListener$$Type): void
public "setContents"(transferable0: $Transferable$$Type, clipboardOwner1: $ClipboardOwner$$Type): void
get "availableDataFlavors"(): $DataFlavor[]
get "flavorListeners"(): $FlavorListener[]
get "name"(): string
}
}

declare module "java.awt.MenuComponent" {
import { $AWTEvent$$Type } from "java.awt.AWTEvent"
import { $Font, $Font$$Type } from "java.awt.Font"
import { $Event$$Type } from "java.awt.Event"
import { $AccessibleContext } from "javax.accessibility.AccessibleContext"
import { $MenuContainer } from "java.awt.MenuContainer"
import { $Serializable } from "java.io.Serializable"

export class $MenuComponent implements $Serializable {
constructor()

public "dispatchEvent"(aWTEvent0: $AWTEvent$$Type): void
public "getAccessibleContext"(): $AccessibleContext
public "getFont"(): $Font
public "getName"(): string
public "getParent"(): $MenuContainer
/** @deprecated */
public "postEvent"(event0: $Event$$Type): boolean
public "removeNotify"(): void
public "setFont"(font0: $Font$$Type): void
public "setName"(string0: string): void
get "accessibleContext"(): $AccessibleContext
get "font"(): $Font
get "name"(): string
get "parent"(): $MenuContainer
set "font"(value: $Font$$Type)
set "name"(value: string)
}
}

declare module "java.awt.datatransfer.ClipboardOwner" {
import { $Clipboard$$Type } from "java.awt.datatransfer.Clipboard"
import { $Transferable$$Type } from "java.awt.datatransfer.Transferable"

export interface $ClipboardOwner {
"lostOwnership"(clipboard0: $Clipboard$$Type, transferable1: $Transferable$$Type): void
}

export namespace $ClipboardOwner {
const probejs$$marker: never
}
export abstract class $ClipboardOwner$$Static implements $ClipboardOwner {
}
}

declare module "java.awt.image.BufferedImage" {
import { $Rectangle$$Type } from "java.awt.Rectangle"
import { $Image } from "java.awt.Image"
import { $RenderedImage } from "java.awt.image.RenderedImage"
import { $Point } from "java.awt.Point"
import { $TileObserver$$Type } from "java.awt.image.TileObserver"
import { $SampleModel } from "java.awt.image.SampleModel"
import { $Transparency } from "java.awt.Transparency"
import { $Vector } from "java.util.Vector"
import { $ColorModel, $ColorModel$$Type } from "java.awt.image.ColorModel"
import { $Graphics2D } from "java.awt.Graphics2D"
import { $IndexColorModel$$Type } from "java.awt.image.IndexColorModel"
import { $Raster, $Raster$$Type } from "java.awt.image.Raster"
import { $WritableRenderedImage } from "java.awt.image.WritableRenderedImage"
import { $WritableRaster, $WritableRaster$$Type } from "java.awt.image.WritableRaster"
import { $Hashtable$$Type } from "java.util.Hashtable"

export class $BufferedImage extends $Image implements $WritableRenderedImage, $Transparency {
static readonly "TYPE_3BYTE_BGR": integer
static readonly "TYPE_4BYTE_ABGR": integer
static readonly "TYPE_4BYTE_ABGR_PRE": integer
static readonly "TYPE_BYTE_BINARY": integer
static readonly "TYPE_BYTE_GRAY": integer
static readonly "TYPE_BYTE_INDEXED": integer
static readonly "TYPE_CUSTOM": integer
static readonly "TYPE_INT_ARGB": integer
static readonly "TYPE_INT_ARGB_PRE": integer
static readonly "TYPE_INT_BGR": integer
static readonly "TYPE_INT_RGB": integer
static readonly "TYPE_USHORT_555_RGB": integer
static readonly "TYPE_USHORT_565_RGB": integer
static readonly "TYPE_USHORT_GRAY": integer

constructor(colorModel0: $ColorModel$$Type, writableRaster1: $WritableRaster$$Type, boolean2: boolean, hashtable3: $Hashtable$$Type<any, any>)
constructor(int0: integer, int1: integer, int2: integer, indexColorModel3: $IndexColorModel$$Type)
constructor(int0: integer, int1: integer, int2: integer)

public "addTileObserver"(tileObserver0: $TileObserver$$Type): void
public "coerceData"(boolean0: boolean): void
public "copyData"(writableRaster0: $WritableRaster$$Type): $WritableRaster
public "createGraphics"(): $Graphics2D
public "getAlphaRaster"(): $WritableRaster
public "getColorModel"(): $ColorModel
public "getData"(rectangle0: $Rectangle$$Type): $Raster
public "getData"(): $Raster
public "getHeight"(): integer
public "getMinTileX"(): integer
public "getMinTileY"(): integer
public "getMinX"(): integer
public "getMinY"(): integer
public "getNumXTiles"(): integer
public "getNumYTiles"(): integer
public "getProperty"(string0: string): any
public "getPropertyNames"(): string[]
public "getRGB"(int0: integer, int1: integer, int2: integer, int3: integer, int4s: integer[], int5: integer, int6: integer): integer[]
public "getRGB"(int0: integer, int1: integer): integer
public "getRaster"(): $WritableRaster
public "getSampleModel"(): $SampleModel
public "getSources"(): $Vector<$RenderedImage>
public "getSubimage"(int0: integer, int1: integer, int2: integer, int3: integer): $BufferedImage
public "getTile"(int0: integer, int1: integer): $Raster
public "getTileGridXOffset"(): integer
public "getTileGridYOffset"(): integer
public "getTileHeight"(): integer
public "getTileWidth"(): integer
public "getTransparency"(): integer
public "getType"(): integer
public "getWidth"(): integer
public "getWritableTile"(int0: integer, int1: integer): $WritableRaster
public "getWritableTileIndices"(): $Point[]
public "hasTileWriters"(): boolean
public "isAlphaPremultiplied"(): boolean
public "isTileWritable"(int0: integer, int1: integer): boolean
public "releaseWritableTile"(int0: integer, int1: integer): void
public "removeTileObserver"(tileObserver0: $TileObserver$$Type): void
public "setData"(raster0: $Raster$$Type): void
public "setRGB"(int0: integer, int1: integer, int2: integer): void
public "setRGB"(int0: integer, int1: integer, int2: integer, int3: integer, int4s: integer[], int5: integer, int6: integer): void
get "alphaRaster"(): $WritableRaster
get "colorModel"(): $ColorModel
get "data"(): $Raster
get "height"(): integer
get "minTileX"(): integer
get "minTileY"(): integer
get "minX"(): integer
get "minY"(): integer
get "numXTiles"(): integer
get "numYTiles"(): integer
get "propertyNames"(): string[]
get "raster"(): $WritableRaster
get "sampleModel"(): $SampleModel
get "sources"(): $Vector<$RenderedImage>
get "tileGridXOffset"(): integer
get "tileGridYOffset"(): integer
get "tileHeight"(): integer
get "tileWidth"(): integer
get "transparency"(): integer
get "type"(): integer
get "width"(): integer
get "writableTileIndices"(): $Point[]
get "alphaPremultiplied"(): boolean
set "data"(value: $Raster$$Type)
}
}

declare module "java.awt.SecondaryLoop" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SecondaryLoop {
"enter"(): boolean
"exit"(): boolean
}

export namespace $SecondaryLoop {
const probejs$$marker: never
}
export abstract class $SecondaryLoop$$Static implements $SecondaryLoop {
}
}

declare module "java.awt.event.InputMethodListener" {
import { $EventListener } from "java.util.EventListener"
import { $InputMethodEvent$$Type } from "java.awt.event.InputMethodEvent"

export interface $InputMethodListener extends $EventListener {
"caretPositionChanged"(inputMethodEvent0: $InputMethodEvent$$Type): void
"inputMethodTextChanged"(inputMethodEvent0: $InputMethodEvent$$Type): void
}

export namespace $InputMethodListener {
const probejs$$marker: never
}
export abstract class $InputMethodListener$$Static implements $InputMethodListener {
}
}

declare module "java.awt.geom.Rectangle2D$Double" {
import { $Rectangle2D } from "java.awt.geom.Rectangle2D"
import { $Serializable } from "java.io.Serializable"

export class $Rectangle2D$Double extends $Rectangle2D implements $Serializable {
constructor(double0: double, double1: double, double2: double, double3: double)
constructor()

get "height"(): double
set "height"(value: double)
get "width"(): double
set "width"(value: double)
get "x"(): double
set "x"(value: double)
get "y"(): double
set "y"(value: double)
}
}

declare module "java.awt.event.ContainerListener" {
import { $EventListener } from "java.util.EventListener"
import { $ContainerEvent$$Type } from "java.awt.event.ContainerEvent"

export interface $ContainerListener extends $EventListener {
"componentAdded"(containerEvent0: $ContainerEvent$$Type): void
"componentRemoved"(containerEvent0: $ContainerEvent$$Type): void
}

export namespace $ContainerListener {
const probejs$$marker: never
}
export abstract class $ContainerListener$$Static implements $ContainerListener {
}
}

declare module "java.awt.AWTKeyStroke" {
import { $KeyEvent$$Type } from "java.awt.event.KeyEvent"
import { $Serializable } from "java.io.Serializable"

export class $AWTKeyStroke implements $Serializable {
public static "getAWTKeyStroke"(char0: character): $AWTKeyStroke
public static "getAWTKeyStroke"(string0: string): $AWTKeyStroke
public static "getAWTKeyStroke"(int0: integer, int1: integer): $AWTKeyStroke
public static "getAWTKeyStroke"(int0: integer, int1: integer, boolean2: boolean): $AWTKeyStroke
public static "getAWTKeyStroke"(character0: character, int1: integer): $AWTKeyStroke
public static "getAWTKeyStrokeForEvent"(keyEvent0: $KeyEvent$$Type): $AWTKeyStroke
public "getKeyChar"(): character
public "getKeyCode"(): integer
public "getKeyEventType"(): integer
public "getModifiers"(): integer
public "isOnKeyRelease"(): boolean
get "keyChar"(): character
get "keyCode"(): integer
get "keyEventType"(): integer
get "modifiers"(): integer
get "onKeyRelease"(): boolean
}
}

declare module "java.awt.image.DataBuffer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DataBuffer {
static readonly "TYPE_BYTE": integer
static readonly "TYPE_DOUBLE": integer
static readonly "TYPE_FLOAT": integer
static readonly "TYPE_INT": integer
static readonly "TYPE_SHORT": integer
static readonly "TYPE_UNDEFINED": integer
static readonly "TYPE_USHORT": integer

public "getDataType"(): integer
public static "getDataTypeSize"(int0: integer): integer
public "getElem"(int0: integer): integer
public "getElem"(int0: integer, int1: integer): integer
public "getElemDouble"(int0: integer, int1: integer): double
public "getElemDouble"(int0: integer): double
public "getElemFloat"(int0: integer, int1: integer): float
public "getElemFloat"(int0: integer): float
public "getNumBanks"(): integer
public "getOffset"(): integer
public "getOffsets"(): integer[]
public "getSize"(): integer
public "setElem"(int0: integer, int1: integer, int2: integer): void
public "setElem"(int0: integer, int1: integer): void
public "setElemDouble"(int0: integer, double1: double): void
public "setElemDouble"(int0: integer, int1: integer, double2: double): void
public "setElemFloat"(int0: integer, float1: float): void
public "setElemFloat"(int0: integer, int1: integer, float2: float): void
get "dataType"(): integer
get "numBanks"(): integer
get "offset"(): integer
get "offsets"(): integer[]
get "size"(): integer
}
}

declare module "java.awt.event.MouseWheelEvent" {
import { $Component$$Type } from "java.awt.Component"
import { $MouseEvent } from "java.awt.event.MouseEvent"

export class $MouseWheelEvent extends $MouseEvent {
static readonly "WHEEL_BLOCK_SCROLL": integer
static readonly "WHEEL_UNIT_SCROLL": integer

constructor(component0: $Component$$Type, int1: integer, long2: long, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, boolean9: boolean, int10: integer, int11: integer, int12: integer)
constructor(component0: $Component$$Type, int1: integer, long2: long, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, boolean9: boolean, int10: integer, int11: integer, int12: integer, double13: double)
constructor(component0: $Component$$Type, int1: integer, long2: long, int3: integer, int4: integer, int5: integer, int6: integer, boolean7: boolean, int8: integer, int9: integer, int10: integer)

public "getPreciseWheelRotation"(): double
public "getScrollAmount"(): integer
public "getScrollType"(): integer
public "getUnitsToScroll"(): integer
public "getWheelRotation"(): integer
get "preciseWheelRotation"(): double
get "scrollAmount"(): integer
get "scrollType"(): integer
get "unitsToScroll"(): integer
get "wheelRotation"(): integer
}
}

declare module "java.awt.GraphicsConfiguration" {
import { $VolatileImage } from "java.awt.image.VolatileImage"
import { $Rectangle } from "java.awt.Rectangle"
import { $ColorModel } from "java.awt.image.ColorModel"
import { $BufferedImage } from "java.awt.image.BufferedImage"
import { $GraphicsDevice } from "java.awt.GraphicsDevice"
import { $BufferCapabilities } from "java.awt.BufferCapabilities"
import { $AffineTransform } from "java.awt.geom.AffineTransform"
import { $ImageCapabilities, $ImageCapabilities$$Type } from "java.awt.ImageCapabilities"

export class $GraphicsConfiguration {
public "createCompatibleImage"(int0: integer, int1: integer, int2: integer): $BufferedImage
public "createCompatibleImage"(int0: integer, int1: integer): $BufferedImage
public "createCompatibleVolatileImage"(int0: integer, int1: integer, int2: integer): $VolatileImage
public "createCompatibleVolatileImage"(int0: integer, int1: integer): $VolatileImage
public "createCompatibleVolatileImage"(int0: integer, int1: integer, imageCapabilities2: $ImageCapabilities$$Type, int3: integer): $VolatileImage
public "createCompatibleVolatileImage"(int0: integer, int1: integer, imageCapabilities2: $ImageCapabilities$$Type): $VolatileImage
public "getBounds"(): $Rectangle
public "getBufferCapabilities"(): $BufferCapabilities
public "getColorModel"(int0: integer): $ColorModel
public "getColorModel"(): $ColorModel
public "getDefaultTransform"(): $AffineTransform
public "getDevice"(): $GraphicsDevice
public "getImageCapabilities"(): $ImageCapabilities
public "getNormalizingTransform"(): $AffineTransform
public "isTranslucencyCapable"(): boolean
get "bounds"(): $Rectangle
get "bufferCapabilities"(): $BufferCapabilities
get "colorModel"(): $ColorModel
get "defaultTransform"(): $AffineTransform
get "device"(): $GraphicsDevice
get "imageCapabilities"(): $ImageCapabilities
get "normalizingTransform"(): $AffineTransform
get "translucencyCapable"(): boolean
}
}

declare module "java.awt.GraphicsConfigTemplate" {
import { $GraphicsConfiguration, $GraphicsConfiguration$$Type } from "java.awt.GraphicsConfiguration"
import { $Serializable } from "java.io.Serializable"

export class $GraphicsConfigTemplate implements $Serializable {
static readonly "PREFERRED": integer
static readonly "REQUIRED": integer
static readonly "UNNECESSARY": integer

constructor()

public "getBestConfiguration"(graphicsConfiguration0s: $GraphicsConfiguration$$Type[]): $GraphicsConfiguration
public "isGraphicsConfigSupported"(graphicsConfiguration0: $GraphicsConfiguration$$Type): boolean
}
}

declare module "java.awt.dnd.DropTargetDropEvent" {
import { $List } from "java.util.List"
import { $DataFlavor, $DataFlavor$$Type } from "java.awt.datatransfer.DataFlavor"
import { $DropTargetEvent } from "java.awt.dnd.DropTargetEvent"
import { $Transferable } from "java.awt.datatransfer.Transferable"
import { $Point, $Point$$Type } from "java.awt.Point"
import { $DropTargetContext$$Type } from "java.awt.dnd.DropTargetContext"

export class $DropTargetDropEvent extends $DropTargetEvent {
constructor(dropTargetContext0: $DropTargetContext$$Type, point1: $Point$$Type, int2: integer, int3: integer, boolean4: boolean)
constructor(dropTargetContext0: $DropTargetContext$$Type, point1: $Point$$Type, int2: integer, int3: integer)

public "acceptDrop"(int0: integer): void
public "dropComplete"(boolean0: boolean): void
public "getCurrentDataFlavors"(): $DataFlavor[]
public "getCurrentDataFlavorsAsList"(): $List<$DataFlavor>
public "getDropAction"(): integer
public "getLocation"(): $Point
public "getSourceActions"(): integer
public "getTransferable"(): $Transferable
public "isDataFlavorSupported"(dataFlavor0: $DataFlavor$$Type): boolean
public "isLocalTransfer"(): boolean
public "rejectDrop"(): void
get "currentDataFlavors"(): $DataFlavor[]
get "currentDataFlavorsAsList"(): $List<$DataFlavor>
get "dropAction"(): integer
get "location"(): $Point
get "sourceActions"(): integer
get "transferable"(): $Transferable
get "localTransfer"(): boolean
}
}

declare module "java.awt.font.LineMetrics" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $LineMetrics {
public "getAscent"(): float
public "getBaselineIndex"(): integer
public "getBaselineOffsets"(): float[]
public "getDescent"(): float
public "getHeight"(): float
public "getLeading"(): float
public "getNumChars"(): integer
public "getStrikethroughOffset"(): float
public "getStrikethroughThickness"(): float
public "getUnderlineOffset"(): float
public "getUnderlineThickness"(): float
get "ascent"(): float
get "baselineIndex"(): integer
get "baselineOffsets"(): float[]
get "descent"(): float
get "height"(): float
get "leading"(): float
get "numChars"(): integer
get "strikethroughOffset"(): float
get "strikethroughThickness"(): float
get "underlineOffset"(): float
get "underlineThickness"(): float
}
}

declare module "java.awt.BufferCapabilities" {
import { $Cloneable } from "java.lang.Cloneable"
import { $BufferCapabilities$FlipContents, $BufferCapabilities$FlipContents$$Type } from "java.awt.BufferCapabilities$FlipContents"
import { $ImageCapabilities, $ImageCapabilities$$Type } from "java.awt.ImageCapabilities"

export class $BufferCapabilities implements $Cloneable {
constructor(imageCapabilities0: $ImageCapabilities$$Type, imageCapabilities1: $ImageCapabilities$$Type, flipContents2: $BufferCapabilities$FlipContents$$Type)

public "clone"(): any
public "getBackBufferCapabilities"(): $ImageCapabilities
public "getFlipContents"(): $BufferCapabilities$FlipContents
public "getFrontBufferCapabilities"(): $ImageCapabilities
public "isFullScreenRequired"(): boolean
public "isMultiBufferAvailable"(): boolean
public "isPageFlipping"(): boolean
get "backBufferCapabilities"(): $ImageCapabilities
get "flipContents"(): $BufferCapabilities$FlipContents
get "frontBufferCapabilities"(): $ImageCapabilities
get "fullScreenRequired"(): boolean
get "multiBufferAvailable"(): boolean
get "pageFlipping"(): boolean
}
}

declare module "java.awt.PageAttributes$MediaType" {
import { $AttributeValue } from "java.awt.AttributeValue"

export class $PageAttributes$MediaType extends $AttributeValue {
static readonly "A": $PageAttributes$MediaType
static readonly "A0": $PageAttributes$MediaType
static readonly "A1": $PageAttributes$MediaType
static readonly "A10": $PageAttributes$MediaType
static readonly "A2": $PageAttributes$MediaType
static readonly "A3": $PageAttributes$MediaType
static readonly "A4": $PageAttributes$MediaType
static readonly "A5": $PageAttributes$MediaType
static readonly "A6": $PageAttributes$MediaType
static readonly "A7": $PageAttributes$MediaType
static readonly "A8": $PageAttributes$MediaType
static readonly "A9": $PageAttributes$MediaType
static readonly "B": $PageAttributes$MediaType
static readonly "B0": $PageAttributes$MediaType
static readonly "B1": $PageAttributes$MediaType
static readonly "B10": $PageAttributes$MediaType
static readonly "B2": $PageAttributes$MediaType
static readonly "B3": $PageAttributes$MediaType
static readonly "B4": $PageAttributes$MediaType
static readonly "B5": $PageAttributes$MediaType
static readonly "B6": $PageAttributes$MediaType
static readonly "B7": $PageAttributes$MediaType
static readonly "B8": $PageAttributes$MediaType
static readonly "B9": $PageAttributes$MediaType
static readonly "C": $PageAttributes$MediaType
static readonly "C0": $PageAttributes$MediaType
static readonly "C1": $PageAttributes$MediaType
static readonly "C10": $PageAttributes$MediaType
static readonly "C2": $PageAttributes$MediaType
static readonly "C3": $PageAttributes$MediaType
static readonly "C4": $PageAttributes$MediaType
static readonly "C5": $PageAttributes$MediaType
static readonly "C6": $PageAttributes$MediaType
static readonly "C7": $PageAttributes$MediaType
static readonly "C8": $PageAttributes$MediaType
static readonly "C9": $PageAttributes$MediaType
static readonly "D": $PageAttributes$MediaType
static readonly "E": $PageAttributes$MediaType
static readonly "ENV_10": $PageAttributes$MediaType
static readonly "ENV_10X13": $PageAttributes$MediaType
static readonly "ENV_10X14": $PageAttributes$MediaType
static readonly "ENV_10X15": $PageAttributes$MediaType
static readonly "ENV_11": $PageAttributes$MediaType
static readonly "ENV_12": $PageAttributes$MediaType
static readonly "ENV_14": $PageAttributes$MediaType
static readonly "ENV_6X9": $PageAttributes$MediaType
static readonly "ENV_7X9": $PageAttributes$MediaType
static readonly "ENV_9": $PageAttributes$MediaType
static readonly "ENV_9X11": $PageAttributes$MediaType
static readonly "ENV_9X12": $PageAttributes$MediaType
static readonly "ENV_INVITE": $PageAttributes$MediaType
static readonly "ENV_ITALY": $PageAttributes$MediaType
static readonly "ENV_MONARCH": $PageAttributes$MediaType
static readonly "ENV_PERSONAL": $PageAttributes$MediaType
static readonly "EXECUTIVE": $PageAttributes$MediaType
static readonly "FOLIO": $PageAttributes$MediaType
static readonly "INVITE": $PageAttributes$MediaType
static readonly "INVITE_ENVELOPE": $PageAttributes$MediaType
static readonly "INVOICE": $PageAttributes$MediaType
static readonly "ISO_2A0": $PageAttributes$MediaType
static readonly "ISO_4A0": $PageAttributes$MediaType
static readonly "ISO_A0": $PageAttributes$MediaType
static readonly "ISO_A1": $PageAttributes$MediaType
static readonly "ISO_A10": $PageAttributes$MediaType
static readonly "ISO_A2": $PageAttributes$MediaType
static readonly "ISO_A3": $PageAttributes$MediaType
static readonly "ISO_A4": $PageAttributes$MediaType
static readonly "ISO_A5": $PageAttributes$MediaType
static readonly "ISO_A6": $PageAttributes$MediaType
static readonly "ISO_A7": $PageAttributes$MediaType
static readonly "ISO_A8": $PageAttributes$MediaType
static readonly "ISO_A9": $PageAttributes$MediaType
static readonly "ISO_B0": $PageAttributes$MediaType
static readonly "ISO_B1": $PageAttributes$MediaType
static readonly "ISO_B10": $PageAttributes$MediaType
static readonly "ISO_B2": $PageAttributes$MediaType
static readonly "ISO_B3": $PageAttributes$MediaType
static readonly "ISO_B4": $PageAttributes$MediaType
static readonly "ISO_B4_ENVELOPE": $PageAttributes$MediaType
static readonly "ISO_B5": $PageAttributes$MediaType
static readonly "ISO_B5_ENVELOPE": $PageAttributes$MediaType
static readonly "ISO_B6": $PageAttributes$MediaType
static readonly "ISO_B7": $PageAttributes$MediaType
static readonly "ISO_B8": $PageAttributes$MediaType
static readonly "ISO_B9": $PageAttributes$MediaType
static readonly "ISO_C0": $PageAttributes$MediaType
static readonly "ISO_C0_ENVELOPE": $PageAttributes$MediaType
static readonly "ISO_C1": $PageAttributes$MediaType
static readonly "ISO_C10": $PageAttributes$MediaType
static readonly "ISO_C10_ENVELOPE": $PageAttributes$MediaType
static readonly "ISO_C1_ENVELOPE": $PageAttributes$MediaType
static readonly "ISO_C2": $PageAttributes$MediaType
static readonly "ISO_C2_ENVELOPE": $PageAttributes$MediaType
static readonly "ISO_C3": $PageAttributes$MediaType
static readonly "ISO_C3_ENVELOPE": $PageAttributes$MediaType
static readonly "ISO_C4": $PageAttributes$MediaType
static readonly "ISO_C4_ENVELOPE": $PageAttributes$MediaType
static readonly "ISO_C5": $PageAttributes$MediaType
static readonly "ISO_C5_ENVELOPE": $PageAttributes$MediaType
static readonly "ISO_C6": $PageAttributes$MediaType
static readonly "ISO_C6_ENVELOPE": $PageAttributes$MediaType
static readonly "ISO_C7": $PageAttributes$MediaType
static readonly "ISO_C7_ENVELOPE": $PageAttributes$MediaType
static readonly "ISO_C8": $PageAttributes$MediaType
static readonly "ISO_C8_ENVELOPE": $PageAttributes$MediaType
static readonly "ISO_C9": $PageAttributes$MediaType
static readonly "ISO_C9_ENVELOPE": $PageAttributes$MediaType
static readonly "ISO_DESIGNATED_LONG": $PageAttributes$MediaType
static readonly "ISO_DESIGNATED_LONG_ENVELOPE": $PageAttributes$MediaType
static readonly "ITALY": $PageAttributes$MediaType
static readonly "ITALY_ENVELOPE": $PageAttributes$MediaType
static readonly "JIS_B0": $PageAttributes$MediaType
static readonly "JIS_B1": $PageAttributes$MediaType
static readonly "JIS_B10": $PageAttributes$MediaType
static readonly "JIS_B2": $PageAttributes$MediaType
static readonly "JIS_B3": $PageAttributes$MediaType
static readonly "JIS_B4": $PageAttributes$MediaType
static readonly "JIS_B5": $PageAttributes$MediaType
static readonly "JIS_B6": $PageAttributes$MediaType
static readonly "JIS_B7": $PageAttributes$MediaType
static readonly "JIS_B8": $PageAttributes$MediaType
static readonly "JIS_B9": $PageAttributes$MediaType
static readonly "LEDGER": $PageAttributes$MediaType
static readonly "LEGAL": $PageAttributes$MediaType
static readonly "LETTER": $PageAttributes$MediaType
static readonly "MONARCH": $PageAttributes$MediaType
static readonly "MONARCH_ENVELOPE": $PageAttributes$MediaType
static readonly "NA_10X13_ENVELOPE": $PageAttributes$MediaType
static readonly "NA_10X14_ENVELOPE": $PageAttributes$MediaType
static readonly "NA_10X15_ENVELOPE": $PageAttributes$MediaType
static readonly "NA_6X9_ENVELOPE": $PageAttributes$MediaType
static readonly "NA_7X9_ENVELOPE": $PageAttributes$MediaType
static readonly "NA_9X11_ENVELOPE": $PageAttributes$MediaType
static readonly "NA_9X12_ENVELOPE": $PageAttributes$MediaType
static readonly "NA_LEGAL": $PageAttributes$MediaType
static readonly "NA_LETTER": $PageAttributes$MediaType
static readonly "NA_NUMBER_10_ENVELOPE": $PageAttributes$MediaType
static readonly "NA_NUMBER_11_ENVELOPE": $PageAttributes$MediaType
static readonly "NA_NUMBER_12_ENVELOPE": $PageAttributes$MediaType
static readonly "NA_NUMBER_14_ENVELOPE": $PageAttributes$MediaType
static readonly "NA_NUMBER_9_ENVELOPE": $PageAttributes$MediaType
static readonly "NOTE": $PageAttributes$MediaType
static readonly "PERSONAL": $PageAttributes$MediaType
static readonly "PERSONAL_ENVELOPE": $PageAttributes$MediaType
static readonly "QUARTO": $PageAttributes$MediaType
static readonly "STATEMENT": $PageAttributes$MediaType
static readonly "TABLOID": $PageAttributes$MediaType

}
}

declare module "java.awt.Window$Type" {
import { $Enum } from "java.lang.Enum"

export class $Window$Type extends $Enum<$Window$Type> {
static readonly "NORMAL": $Window$Type
static readonly "POPUP": $Window$Type
static readonly "UTILITY": $Window$Type

public static "valueOf"(string0: string): $Window$Type
public static "values"(): $Window$Type[]
}
}

declare module "java.awt.event.InputEvent" {
import { $ComponentEvent } from "java.awt.event.ComponentEvent"

export class $InputEvent extends $ComponentEvent {
static readonly "ALT_DOWN_MASK": integer
static readonly "ALT_GRAPH_DOWN_MASK": integer
/** @deprecated */
static readonly "ALT_GRAPH_MASK": integer
/** @deprecated */
static readonly "ALT_MASK": integer
static readonly "BUTTON1_DOWN_MASK": integer
/** @deprecated */
static readonly "BUTTON1_MASK": integer
static readonly "BUTTON2_DOWN_MASK": integer
/** @deprecated */
static readonly "BUTTON2_MASK": integer
static readonly "BUTTON3_DOWN_MASK": integer
/** @deprecated */
static readonly "BUTTON3_MASK": integer
static readonly "CTRL_DOWN_MASK": integer
/** @deprecated */
static readonly "CTRL_MASK": integer
static readonly "META_DOWN_MASK": integer
/** @deprecated */
static readonly "META_MASK": integer
static readonly "SHIFT_DOWN_MASK": integer
/** @deprecated */
static readonly "SHIFT_MASK": integer

public "consume"(): void
public static "getMaskForButton"(int0: integer): integer
/** @deprecated */
public "getModifiers"(): integer
public "getModifiersEx"(): integer
public static "getModifiersExText"(int0: integer): string
public "getWhen"(): long
public "isAltDown"(): boolean
public "isAltGraphDown"(): boolean
public "isConsumed"(): boolean
public "isControlDown"(): boolean
public "isMetaDown"(): boolean
public "isShiftDown"(): boolean
get "modifiers"(): integer
get "modifiersEx"(): integer
get "when"(): long
get "altDown"(): boolean
get "altGraphDown"(): boolean
get "consumed"(): boolean
get "controlDown"(): boolean
get "metaDown"(): boolean
get "shiftDown"(): boolean
}
}

declare module "java.awt.Dimension" {
import { $Dimension2D } from "java.awt.geom.Dimension2D"
import { $Serializable } from "java.io.Serializable"

export class $Dimension extends $Dimension2D implements $Serializable {
constructor(int0: integer, int1: integer)
constructor()
constructor(dimension0: $Dimension$$Type)

public "getSize"(): $Dimension
public "setSize"(dimension0: $Dimension$$Type): void
public "setSize"(int0: integer, int1: integer): void
get "height"(): integer
set "height"(value: integer)
get "width"(): integer
set "width"(value: integer)
get "size"(): $Dimension
set "size"(value: $Dimension$$Type)
}
}

declare module "java.awt.PageAttributes$PrintQualityType" {
import { $AttributeValue } from "java.awt.AttributeValue"

export class $PageAttributes$PrintQualityType extends $AttributeValue {
static readonly "DRAFT": $PageAttributes$PrintQualityType
static readonly "HIGH": $PageAttributes$PrintQualityType
static readonly "NORMAL": $PageAttributes$PrintQualityType

}
}

declare module "java.awt.event.MouseEvent" {
import { $InputEvent } from "java.awt.event.InputEvent"
import { $Point } from "java.awt.Point"
import { $Component$$Type } from "java.awt.Component"

export class $MouseEvent extends $InputEvent {
static readonly "BUTTON1": integer
static readonly "BUTTON2": integer
static readonly "BUTTON3": integer
static readonly "MOUSE_CLICKED": integer
static readonly "MOUSE_DRAGGED": integer
static readonly "MOUSE_ENTERED": integer
static readonly "MOUSE_EXITED": integer
static readonly "MOUSE_FIRST": integer
static readonly "MOUSE_LAST": integer
static readonly "MOUSE_MOVED": integer
static readonly "MOUSE_PRESSED": integer
static readonly "MOUSE_RELEASED": integer
static readonly "MOUSE_WHEEL": integer
static readonly "NOBUTTON": integer

constructor(component0: $Component$$Type, int1: integer, long2: long, int3: integer, int4: integer, int5: integer, int6: integer, boolean7: boolean)
constructor(component0: $Component$$Type, int1: integer, long2: long, int3: integer, int4: integer, int5: integer, int6: integer, boolean7: boolean, int8: integer)
constructor(component0: $Component$$Type, int1: integer, long2: long, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, boolean9: boolean, int10: integer)

public "getButton"(): integer
public "getClickCount"(): integer
public "getLocationOnScreen"(): $Point
public static "getMouseModifiersText"(int0: integer): string
public "getPoint"(): $Point
public "getX"(): integer
public "getXOnScreen"(): integer
public "getY"(): integer
public "getYOnScreen"(): integer
public "isPopupTrigger"(): boolean
public "translatePoint"(int0: integer, int1: integer): void
get "button"(): integer
get "clickCount"(): integer
get "locationOnScreen"(): $Point
get "point"(): $Point
get "x"(): integer
get "xOnScreen"(): integer
get "y"(): integer
get "yOnScreen"(): integer
get "popupTrigger"(): boolean
}
}

declare module "java.awt.Component" {
import { $Color, $Color$$Type } from "java.awt.Color"
import { $DropTarget, $DropTarget$$Type } from "java.awt.dnd.DropTarget"
import { $FocusListener, $FocusListener$$Type } from "java.awt.event.FocusListener"
import { $InputMethodListener, $InputMethodListener$$Type } from "java.awt.event.InputMethodListener"
import { $InputContext } from "java.awt.im.InputContext"
import { $Cursor, $Cursor$$Type } from "java.awt.Cursor"
import { $Point, $Point$$Type } from "java.awt.Point"
import { $ImageObserver, $ImageObserver$$Type } from "java.awt.image.ImageObserver"
import { $PopupMenu$$Type } from "java.awt.PopupMenu"
import { $ComponentListener, $ComponentListener$$Type } from "java.awt.event.ComponentListener"
import { $Locale, $Locale$$Type } from "java.util.Locale"
import { $Event$$Type } from "java.awt.Event"
import { $MouseListener, $MouseListener$$Type } from "java.awt.event.MouseListener"
import { $PrintWriter$$Type } from "java.io.PrintWriter"
import { $Shape$$Type } from "java.awt.Shape"
import { $GraphicsConfiguration } from "java.awt.GraphicsConfiguration"
import { $Image, $Image$$Type } from "java.awt.Image"
import { $Font, $Font$$Type } from "java.awt.Font"
import { $Set, $Set$$Type } from "java.util.Set"
import { $AccessibleContext } from "javax.accessibility.AccessibleContext"
import { $Serializable } from "java.io.Serializable"
import { $VolatileImage } from "java.awt.image.VolatileImage"
import { $EventListener, $EventListener$$Type } from "java.util.EventListener"
import { $Dimension, $Dimension$$Type } from "java.awt.Dimension"
import { $PropertyChangeListener, $PropertyChangeListener$$Type } from "java.beans.PropertyChangeListener"
import { $HierarchyListener, $HierarchyListener$$Type } from "java.awt.event.HierarchyListener"
import { $Graphics, $Graphics$$Type } from "java.awt.Graphics"
import { $Toolkit } from "java.awt.Toolkit"
import { $Rectangle, $Rectangle$$Type } from "java.awt.Rectangle"
import { $KeyListener, $KeyListener$$Type } from "java.awt.event.KeyListener"
import { $ImageProducer$$Type } from "java.awt.image.ImageProducer"
import { $AWTEvent$$Type } from "java.awt.AWTEvent"
import { $AWTKeyStroke, $AWTKeyStroke$$Type } from "java.awt.AWTKeyStroke"
import { $InputMethodRequests } from "java.awt.im.InputMethodRequests"
import { $HierarchyBoundsListener, $HierarchyBoundsListener$$Type } from "java.awt.event.HierarchyBoundsListener"
import { $Container, $Container$$Type } from "java.awt.Container"
import { $PrintStream$$Type } from "java.io.PrintStream"
import { $Component$BaselineResizeBehavior } from "java.awt.Component$BaselineResizeBehavior"
import { $FocusEvent$Cause$$Type } from "java.awt.event.FocusEvent$Cause"
import { $MenuContainer } from "java.awt.MenuContainer"
import { $ComponentOrientation, $ComponentOrientation$$Type } from "java.awt.ComponentOrientation"
import { $FontMetrics } from "java.awt.FontMetrics"
import { $ColorModel } from "java.awt.image.ColorModel"
import { $MouseMotionListener, $MouseMotionListener$$Type } from "java.awt.event.MouseMotionListener"
import { $MenuComponent$$Type } from "java.awt.MenuComponent"
import { $MouseWheelListener, $MouseWheelListener$$Type } from "java.awt.event.MouseWheelListener"
import { $Class$$Type } from "java.lang.Class"
import { $ImageCapabilities$$Type } from "java.awt.ImageCapabilities"

export class $Component implements $ImageObserver, $MenuContainer, $Serializable {
static readonly "BOTTOM_ALIGNMENT": float
static readonly "CENTER_ALIGNMENT": float
static readonly "LEFT_ALIGNMENT": float
static readonly "RIGHT_ALIGNMENT": float
static readonly "TOP_ALIGNMENT": float

/** @deprecated */
public "action"(event0: $Event$$Type, object1: any): boolean
public "add"(popupMenu0: $PopupMenu$$Type): void
public "addComponentListener"(componentListener0: $ComponentListener$$Type): void
public "addFocusListener"(focusListener0: $FocusListener$$Type): void
public "addHierarchyBoundsListener"(hierarchyBoundsListener0: $HierarchyBoundsListener$$Type): void
public "addHierarchyListener"(hierarchyListener0: $HierarchyListener$$Type): void
public "addInputMethodListener"(inputMethodListener0: $InputMethodListener$$Type): void
public "addKeyListener"(keyListener0: $KeyListener$$Type): void
public "addMouseListener"(mouseListener0: $MouseListener$$Type): void
public "addMouseMotionListener"(mouseMotionListener0: $MouseMotionListener$$Type): void
public "addMouseWheelListener"(mouseWheelListener0: $MouseWheelListener$$Type): void
public "addNotify"(): void
public "addPropertyChangeListener"(string0: string, propertyChangeListener1: $PropertyChangeListener$$Type): void
public "addPropertyChangeListener"(propertyChangeListener0: $PropertyChangeListener$$Type): void
public "applyComponentOrientation"(componentOrientation0: $ComponentOrientation$$Type): void
public "areFocusTraversalKeysSet"(int0: integer): boolean
/** @deprecated */
public "bounds"(): $Rectangle
public "checkImage"(image0: $Image$$Type, imageObserver1: $ImageObserver$$Type): integer
public "checkImage"(image0: $Image$$Type, int1: integer, int2: integer, imageObserver3: $ImageObserver$$Type): integer
public "contains"(int0: integer, int1: integer): boolean
public "contains"(point0: $Point$$Type): boolean
public "createImage"(int0: integer, int1: integer): $Image
public "createImage"(imageProducer0: $ImageProducer$$Type): $Image
public "createVolatileImage"(int0: integer, int1: integer, imageCapabilities2: $ImageCapabilities$$Type): $VolatileImage
public "createVolatileImage"(int0: integer, int1: integer): $VolatileImage
/** @deprecated */
public "deliverEvent"(event0: $Event$$Type): void
/** @deprecated */
public "disable"(): void
public "dispatchEvent"(aWTEvent0: $AWTEvent$$Type): void
public "doLayout"(): void
/** @deprecated */
public "enable"(): void
/** @deprecated */
public "enable"(boolean0: boolean): void
public "enableInputMethods"(boolean0: boolean): void
public "firePropertyChange"(string0: string, float1: float, float2: float): void
public "firePropertyChange"(string0: string, double1: double, double2: double): void
public "firePropertyChange"(string0: string, byte1: byte, byte2: byte): void
public "firePropertyChange"(string0: string, short1: short, short2: short): void
public "firePropertyChange"(string0: string, char1: character, char2: character): void
public "firePropertyChange"(string0: string, long1: long, long2: long): void
public "getAccessibleContext"(): $AccessibleContext
public "getAlignmentX"(): float
public "getAlignmentY"(): float
public "getBackground"(): $Color
public "getBaseline"(int0: integer, int1: integer): integer
public "getBaselineResizeBehavior"(): $Component$BaselineResizeBehavior
public "getBounds"(rectangle0: $Rectangle$$Type): $Rectangle
public "getBounds"(): $Rectangle
public "getColorModel"(): $ColorModel
public "getComponentAt"(point0: $Point$$Type): $Component
public "getComponentAt"(int0: integer, int1: integer): $Component
public "getComponentListeners"(): $ComponentListener[]
public "getComponentOrientation"(): $ComponentOrientation
public "getCursor"(): $Cursor
public "getDropTarget"(): $DropTarget
public "getFocusCycleRootAncestor"(): $Container
public "getFocusListeners"(): $FocusListener[]
public "getFocusTraversalKeys"(int0: integer): $Set<$AWTKeyStroke>
public "getFocusTraversalKeysEnabled"(): boolean
public "getFont"(): $Font
public "getFontMetrics"(font0: $Font$$Type): $FontMetrics
public "getForeground"(): $Color
public "getGraphics"(): $Graphics
public "getGraphicsConfiguration"(): $GraphicsConfiguration
public "getHeight"(): integer
public "getHierarchyBoundsListeners"(): $HierarchyBoundsListener[]
public "getHierarchyListeners"(): $HierarchyListener[]
public "getIgnoreRepaint"(): boolean
public "getInputContext"(): $InputContext
public "getInputMethodListeners"(): $InputMethodListener[]
public "getInputMethodRequests"(): $InputMethodRequests
public "getKeyListeners"(): $KeyListener[]
public "getListeners"<T extends $EventListener>(class0: $Class$$Type<T>): T[]
public "getLocale"(): $Locale
public "getLocation"(point0: $Point$$Type): $Point
public "getLocation"(): $Point
public "getLocationOnScreen"(): $Point
public "getMaximumSize"(): $Dimension
public "getMinimumSize"(): $Dimension
public "getMouseListeners"(): $MouseListener[]
public "getMouseMotionListeners"(): $MouseMotionListener[]
public "getMousePosition"(): $Point
public "getMouseWheelListeners"(): $MouseWheelListener[]
public "getName"(): string
public "getParent"(): $Container
public "getPreferredSize"(): $Dimension
public "getPropertyChangeListeners"(string0: string): $PropertyChangeListener[]
public "getPropertyChangeListeners"(): $PropertyChangeListener[]
public "getSize"(): $Dimension
public "getSize"(dimension0: $Dimension$$Type): $Dimension
public "getToolkit"(): $Toolkit
public "getTreeLock"(): any
public "getWidth"(): integer
public "getX"(): integer
public "getY"(): integer
/** @deprecated */
public "gotFocus"(event0: $Event$$Type, object1: any): boolean
/** @deprecated */
public "handleEvent"(event0: $Event$$Type): boolean
public "hasFocus"(): boolean
/** @deprecated */
public "hide"(): void
public "imageUpdate"(image0: $Image$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): boolean
/** @deprecated */
public "inside"(int0: integer, int1: integer): boolean
public "invalidate"(): void
public "isBackgroundSet"(): boolean
public "isCursorSet"(): boolean
public "isDisplayable"(): boolean
public "isDoubleBuffered"(): boolean
public "isEnabled"(): boolean
public "isFocusCycleRoot"(container0: $Container$$Type): boolean
public "isFocusOwner"(): boolean
/** @deprecated */
public "isFocusTraversable"(): boolean
public "isFocusable"(): boolean
public "isFontSet"(): boolean
public "isForegroundSet"(): boolean
public "isLightweight"(): boolean
public "isMaximumSizeSet"(): boolean
public "isMinimumSizeSet"(): boolean
public "isOpaque"(): boolean
public "isPreferredSizeSet"(): boolean
public "isShowing"(): boolean
public "isValid"(): boolean
public "isVisible"(): boolean
/** @deprecated */
public "keyDown"(event0: $Event$$Type, int1: integer): boolean
/** @deprecated */
public "keyUp"(event0: $Event$$Type, int1: integer): boolean
/** @deprecated */
public "layout"(): void
public "list"(printWriter0: $PrintWriter$$Type, int1: integer): void
public "list"(printStream0: $PrintStream$$Type, int1: integer): void
public "list"(): void
public "list"(printWriter0: $PrintWriter$$Type): void
public "list"(printStream0: $PrintStream$$Type): void
/** @deprecated */
public "locate"(int0: integer, int1: integer): $Component
/** @deprecated */
public "location"(): $Point
/** @deprecated */
public "lostFocus"(event0: $Event$$Type, object1: any): boolean
/** @deprecated */
public "minimumSize"(): $Dimension
/** @deprecated */
public "mouseDown"(event0: $Event$$Type, int1: integer, int2: integer): boolean
/** @deprecated */
public "mouseDrag"(event0: $Event$$Type, int1: integer, int2: integer): boolean
/** @deprecated */
public "mouseEnter"(event0: $Event$$Type, int1: integer, int2: integer): boolean
/** @deprecated */
public "mouseExit"(event0: $Event$$Type, int1: integer, int2: integer): boolean
/** @deprecated */
public "mouseMove"(event0: $Event$$Type, int1: integer, int2: integer): boolean
/** @deprecated */
public "mouseUp"(event0: $Event$$Type, int1: integer, int2: integer): boolean
/** @deprecated */
public "move"(int0: integer, int1: integer): void
/** @deprecated */
public "nextFocus"(): void
public "paint"(graphics0: $Graphics$$Type): void
public "paintAll"(graphics0: $Graphics$$Type): void
/** @deprecated */
public "postEvent"(event0: $Event$$Type): boolean
/** @deprecated */
public "preferredSize"(): $Dimension
public "prepareImage"(image0: $Image$$Type, int1: integer, int2: integer, imageObserver3: $ImageObserver$$Type): boolean
public "prepareImage"(image0: $Image$$Type, imageObserver1: $ImageObserver$$Type): boolean
public "print"(graphics0: $Graphics$$Type): void
public "printAll"(graphics0: $Graphics$$Type): void
public "remove"(menuComponent0: $MenuComponent$$Type): void
public "removeComponentListener"(componentListener0: $ComponentListener$$Type): void
public "removeFocusListener"(focusListener0: $FocusListener$$Type): void
public "removeHierarchyBoundsListener"(hierarchyBoundsListener0: $HierarchyBoundsListener$$Type): void
public "removeHierarchyListener"(hierarchyListener0: $HierarchyListener$$Type): void
public "removeInputMethodListener"(inputMethodListener0: $InputMethodListener$$Type): void
public "removeKeyListener"(keyListener0: $KeyListener$$Type): void
public "removeMouseListener"(mouseListener0: $MouseListener$$Type): void
public "removeMouseMotionListener"(mouseMotionListener0: $MouseMotionListener$$Type): void
public "removeMouseWheelListener"(mouseWheelListener0: $MouseWheelListener$$Type): void
public "removeNotify"(): void
public "removePropertyChangeListener"(propertyChangeListener0: $PropertyChangeListener$$Type): void
public "removePropertyChangeListener"(string0: string, propertyChangeListener1: $PropertyChangeListener$$Type): void
public "repaint"(long0: long): void
public "repaint"(): void
public "repaint"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "repaint"(long0: long, int1: integer, int2: integer, int3: integer, int4: integer): void
public "requestFocus"(cause0: $FocusEvent$Cause$$Type): void
public "requestFocus"(): void
public "requestFocusInWindow"(cause0: $FocusEvent$Cause$$Type): boolean
public "requestFocusInWindow"(): boolean
/** @deprecated */
public "reshape"(int0: integer, int1: integer, int2: integer, int3: integer): void
/** @deprecated */
public "resize"(dimension0: $Dimension$$Type): void
/** @deprecated */
public "resize"(int0: integer, int1: integer): void
public "revalidate"(): void
public "setBackground"(color0: $Color$$Type): void
public "setBounds"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "setBounds"(rectangle0: $Rectangle$$Type): void
public "setComponentOrientation"(componentOrientation0: $ComponentOrientation$$Type): void
public "setCursor"(cursor0: $Cursor$$Type): void
public "setDropTarget"(dropTarget0: $DropTarget$$Type): void
public "setEnabled"(boolean0: boolean): void
public "setFocusTraversalKeys"(int0: integer, set1: $Set$$Type<$AWTKeyStroke$$Type>): void
public "setFocusTraversalKeysEnabled"(boolean0: boolean): void
public "setFocusable"(boolean0: boolean): void
public "setFont"(font0: $Font$$Type): void
public "setForeground"(color0: $Color$$Type): void
public "setIgnoreRepaint"(boolean0: boolean): void
public "setLocale"(locale0: $Locale$$Type): void
public "setLocation"(int0: integer, int1: integer): void
public "setLocation"(point0: $Point$$Type): void
public "setMaximumSize"(dimension0: $Dimension$$Type): void
public "setMinimumSize"(dimension0: $Dimension$$Type): void
public "setMixingCutoutShape"(shape0: $Shape$$Type): void
public "setName"(string0: string): void
public "setPreferredSize"(dimension0: $Dimension$$Type): void
public "setSize"(dimension0: $Dimension$$Type): void
public "setSize"(int0: integer, int1: integer): void
public "setVisible"(boolean0: boolean): void
/** @deprecated */
public "show"(boolean0: boolean): void
/** @deprecated */
public "show"(): void
/** @deprecated */
public "size"(): $Dimension
public "transferFocus"(): void
public "transferFocusBackward"(): void
public "transferFocusUpCycle"(): void
public "update"(graphics0: $Graphics$$Type): void
public "validate"(): void
get "accessibleContext"(): $AccessibleContext
get "alignmentX"(): float
get "alignmentY"(): float
get "background"(): $Color
get "baselineResizeBehavior"(): $Component$BaselineResizeBehavior
get "colorModel"(): $ColorModel
get "componentListeners"(): $ComponentListener[]
get "componentOrientation"(): $ComponentOrientation
get "cursor"(): $Cursor
get "dropTarget"(): $DropTarget
get "focusCycleRootAncestor"(): $Container
get "focusListeners"(): $FocusListener[]
get "focusTraversalKeysEnabled"(): boolean
get "font"(): $Font
get "foreground"(): $Color
get "graphics"(): $Graphics
get "graphicsConfiguration"(): $GraphicsConfiguration
get "height"(): integer
get "hierarchyBoundsListeners"(): $HierarchyBoundsListener[]
get "hierarchyListeners"(): $HierarchyListener[]
get "ignoreRepaint"(): boolean
get "inputContext"(): $InputContext
get "inputMethodListeners"(): $InputMethodListener[]
get "inputMethodRequests"(): $InputMethodRequests
get "keyListeners"(): $KeyListener[]
get "locale"(): $Locale
get "locationOnScreen"(): $Point
get "maximumSize"(): $Dimension
get "mouseListeners"(): $MouseListener[]
get "mouseMotionListeners"(): $MouseMotionListener[]
get "mousePosition"(): $Point
get "mouseWheelListeners"(): $MouseWheelListener[]
get "name"(): string
get "parent"(): $Container
get "propertyChangeListeners"(): $PropertyChangeListener[]
get "toolkit"(): $Toolkit
get "treeLock"(): any
get "width"(): integer
get "x"(): integer
get "y"(): integer
get "backgroundSet"(): boolean
get "cursorSet"(): boolean
get "displayable"(): boolean
get "doubleBuffered"(): boolean
get "enabled"(): boolean
get "focusOwner"(): boolean
get "focusTraversable"(): boolean
get "focusable"(): boolean
get "fontSet"(): boolean
get "foregroundSet"(): boolean
get "lightweight"(): boolean
get "maximumSizeSet"(): boolean
get "minimumSizeSet"(): boolean
get "opaque"(): boolean
get "preferredSizeSet"(): boolean
get "showing"(): boolean
get "valid"(): boolean
get "visible"(): boolean
set "background"(value: $Color$$Type)
set "componentOrientation"(value: $ComponentOrientation$$Type)
set "cursor"(value: $Cursor$$Type)
set "dropTarget"(value: $DropTarget$$Type)
set "enabled"(value: boolean)
set "focusTraversalKeysEnabled"(value: boolean)
set "focusable"(value: boolean)
set "font"(value: $Font$$Type)
set "foreground"(value: $Color$$Type)
set "ignoreRepaint"(value: boolean)
set "locale"(value: $Locale$$Type)
set "maximumSize"(value: $Dimension$$Type)
set "mixingCutoutShape"(value: $Shape$$Type)
set "name"(value: string)
set "visible"(value: boolean)
}
}

declare module "java.awt.GraphicsDevice" {
import { $GraphicsConfiguration } from "java.awt.GraphicsConfiguration"
import { $DisplayMode, $DisplayMode$$Type } from "java.awt.DisplayMode"
import { $Window, $Window$$Type } from "java.awt.Window"
import { $GraphicsDevice$WindowTranslucency$$Type } from "java.awt.GraphicsDevice$WindowTranslucency"
import { $GraphicsConfigTemplate$$Type } from "java.awt.GraphicsConfigTemplate"

export class $GraphicsDevice {
static readonly "TYPE_IMAGE_BUFFER": integer
static readonly "TYPE_PRINTER": integer
static readonly "TYPE_RASTER_SCREEN": integer

public "getAvailableAcceleratedMemory"(): integer
public "getBestConfiguration"(graphicsConfigTemplate0: $GraphicsConfigTemplate$$Type): $GraphicsConfiguration
public "getConfigurations"(): $GraphicsConfiguration[]
public "getDefaultConfiguration"(): $GraphicsConfiguration
public "getDisplayMode"(): $DisplayMode
public "getDisplayModes"(): $DisplayMode[]
public "getFullScreenWindow"(): $Window
public "getIDstring"(): string
public "getType"(): integer
public "isDisplayChangeSupported"(): boolean
public "isFullScreenSupported"(): boolean
public "isWindowTranslucencySupported"(windowTranslucency0: $GraphicsDevice$WindowTranslucency$$Type): boolean
public "setDisplayMode"(displayMode0: $DisplayMode$$Type): void
public "setFullScreenWindow"(window0: $Window$$Type): void
get "availableAcceleratedMemory"(): integer
get "configurations"(): $GraphicsConfiguration[]
get "defaultConfiguration"(): $GraphicsConfiguration
get "displayMode"(): $DisplayMode
get "displayModes"(): $DisplayMode[]
get "fullScreenWindow"(): $Window
get "iDstring"(): string
get "type"(): integer
get "displayChangeSupported"(): boolean
get "fullScreenSupported"(): boolean
set "displayMode"(value: $DisplayMode$$Type)
set "fullScreenWindow"(value: $Window$$Type)
}
}

declare module "java.awt.LayoutManager" {
import { $Dimension } from "java.awt.Dimension"
import { $Container$$Type } from "java.awt.Container"
import { $Component$$Type } from "java.awt.Component"

export interface $LayoutManager {
"addLayoutComponent"(string0: string, component1: $Component$$Type): void
"layoutContainer"(container0: $Container$$Type): void
"minimumLayoutSize"(container0: $Container$$Type): $Dimension
"preferredLayoutSize"(container0: $Container$$Type): $Dimension
"removeLayoutComponent"(component0: $Component$$Type): void
}

export namespace $LayoutManager {
const probejs$$marker: never
}
export abstract class $LayoutManager$$Static implements $LayoutManager {
}
}

declare module "java.awt.event.FocusEvent$Cause" {
import { $Enum } from "java.lang.Enum"

export class $FocusEvent$Cause extends $Enum<$FocusEvent$Cause> {
static readonly "ACTIVATION": $FocusEvent$Cause
static readonly "CLEAR_GLOBAL_FOCUS_OWNER": $FocusEvent$Cause
static readonly "MOUSE_EVENT": $FocusEvent$Cause
static readonly "ROLLBACK": $FocusEvent$Cause
static readonly "TRAVERSAL": $FocusEvent$Cause
static readonly "TRAVERSAL_BACKWARD": $FocusEvent$Cause
static readonly "TRAVERSAL_DOWN": $FocusEvent$Cause
static readonly "TRAVERSAL_FORWARD": $FocusEvent$Cause
static readonly "TRAVERSAL_UP": $FocusEvent$Cause
static readonly "UNEXPECTED": $FocusEvent$Cause
static readonly "UNKNOWN": $FocusEvent$Cause

public static "valueOf"(string0: string): $FocusEvent$Cause
public static "values"(): $FocusEvent$Cause[]
}
}

declare module "java.awt.JobAttributes$DefaultSelectionType" {
import { $AttributeValue } from "java.awt.AttributeValue"

export class $JobAttributes$DefaultSelectionType extends $AttributeValue {
static readonly "ALL": $JobAttributes$DefaultSelectionType
static readonly "RANGE": $JobAttributes$DefaultSelectionType
static readonly "SELECTION": $JobAttributes$DefaultSelectionType

}
}

declare module "java.awt.Frame" {
import { $Rectangle, $Rectangle$$Type } from "java.awt.Rectangle"
import { $GraphicsConfiguration$$Type } from "java.awt.GraphicsConfiguration"
import { $Image } from "java.awt.Image"
import { $Font } from "java.awt.Font"
import { $Window } from "java.awt.Window"
import { $Event$$Type } from "java.awt.Event"
import { $MenuContainer } from "java.awt.MenuContainer"
import { $MenuBar, $MenuBar$$Type } from "java.awt.MenuBar"

export class $Frame extends $Window implements $MenuContainer {
/** @deprecated */
static readonly "CROSSHAIR_CURSOR": integer
/** @deprecated */
static readonly "DEFAULT_CURSOR": integer
/** @deprecated */
static readonly "E_RESIZE_CURSOR": integer
/** @deprecated */
static readonly "HAND_CURSOR": integer
static readonly "ICONIFIED": integer
static readonly "MAXIMIZED_BOTH": integer
static readonly "MAXIMIZED_HORIZ": integer
static readonly "MAXIMIZED_VERT": integer
/** @deprecated */
static readonly "MOVE_CURSOR": integer
/** @deprecated */
static readonly "NE_RESIZE_CURSOR": integer
static readonly "NORMAL": integer
/** @deprecated */
static readonly "NW_RESIZE_CURSOR": integer
/** @deprecated */
static readonly "N_RESIZE_CURSOR": integer
/** @deprecated */
static readonly "SE_RESIZE_CURSOR": integer
/** @deprecated */
static readonly "SW_RESIZE_CURSOR": integer
/** @deprecated */
static readonly "S_RESIZE_CURSOR": integer
/** @deprecated */
static readonly "TEXT_CURSOR": integer
/** @deprecated */
static readonly "WAIT_CURSOR": integer
/** @deprecated */
static readonly "W_RESIZE_CURSOR": integer

constructor(string0: string)
constructor(graphicsConfiguration0: $GraphicsConfiguration$$Type)
constructor()
constructor(string0: string, graphicsConfiguration1: $GraphicsConfiguration$$Type)

/** @deprecated */
public "getCursorType"(): integer
public "getExtendedState"(): integer
public "getFont"(): $Font
public static "getFrames"(): $Frame[]
public "getIconImage"(): $Image
public "getMaximizedBounds"(): $Rectangle
public "getMenuBar"(): $MenuBar
public "getState"(): integer
public "getTitle"(): string
public "isResizable"(): boolean
public "isUndecorated"(): boolean
/** @deprecated */
public "postEvent"(event0: $Event$$Type): boolean
/** @deprecated */
public "setCursor"(int0: integer): void
public "setExtendedState"(int0: integer): void
public "setMaximizedBounds"(rectangle0: $Rectangle$$Type): void
public "setMenuBar"(menuBar0: $MenuBar$$Type): void
public "setResizable"(boolean0: boolean): void
public "setState"(int0: integer): void
public "setTitle"(string0: string): void
public "setUndecorated"(boolean0: boolean): void
get "cursorType"(): integer
get "extendedState"(): integer
get "font"(): $Font
get "iconImage"(): $Image
get "maximizedBounds"(): $Rectangle
get "menuBar"(): $MenuBar
get "state"(): integer
get "title"(): string
get "resizable"(): boolean
get "undecorated"(): boolean
set "cursor"(value: integer)
set "extendedState"(value: integer)
set "maximizedBounds"(value: $Rectangle$$Type)
set "menuBar"(value: $MenuBar$$Type)
set "resizable"(value: boolean)
set "state"(value: integer)
set "title"(value: string)
set "undecorated"(value: boolean)
}
}

declare module "java.awt.image.Raster" {
import { $Rectangle, $Rectangle$$Type } from "java.awt.Rectangle"
import { $WritableRaster } from "java.awt.image.WritableRaster"
import { $Point$$Type } from "java.awt.Point"
import { $DataBuffer, $DataBuffer$$Type } from "java.awt.image.DataBuffer"
import { $SampleModel, $SampleModel$$Type } from "java.awt.image.SampleModel"

export class $Raster {
public static "createBandedRaster"(int0: integer, int1: integer, int2: integer, int3: integer, point4: $Point$$Type): $WritableRaster
public static "createBandedRaster"(dataBuffer0: $DataBuffer$$Type, int1: integer, int2: integer, int3: integer, int4s: integer[], int5s: integer[], point6: $Point$$Type): $WritableRaster
public static "createBandedRaster"(int0: integer, int1: integer, int2: integer, int3: integer, int4s: integer[], int5s: integer[], point6: $Point$$Type): $WritableRaster
public "createChild"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6s: integer[]): $Raster
public "createCompatibleWritableRaster"(rectangle0: $Rectangle$$Type): $WritableRaster
public "createCompatibleWritableRaster"(): $WritableRaster
public "createCompatibleWritableRaster"(int0: integer, int1: integer): $WritableRaster
public "createCompatibleWritableRaster"(int0: integer, int1: integer, int2: integer, int3: integer): $WritableRaster
public static "createInterleavedRaster"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5s: integer[], point6: $Point$$Type): $WritableRaster
public static "createInterleavedRaster"(int0: integer, int1: integer, int2: integer, int3: integer, point4: $Point$$Type): $WritableRaster
public static "createInterleavedRaster"(dataBuffer0: $DataBuffer$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5s: integer[], point6: $Point$$Type): $WritableRaster
public static "createPackedRaster"(dataBuffer0: $DataBuffer$$Type, int1: integer, int2: integer, int3: integer, point4: $Point$$Type): $WritableRaster
public static "createPackedRaster"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, point5: $Point$$Type): $WritableRaster
public static "createPackedRaster"(int0: integer, int1: integer, int2: integer, int3s: integer[], point4: $Point$$Type): $WritableRaster
public static "createPackedRaster"(dataBuffer0: $DataBuffer$$Type, int1: integer, int2: integer, int3: integer, int4s: integer[], point5: $Point$$Type): $WritableRaster
public static "createRaster"(sampleModel0: $SampleModel$$Type, dataBuffer1: $DataBuffer$$Type, point2: $Point$$Type): $Raster
public "createTranslatedChild"(int0: integer, int1: integer): $Raster
public static "createWritableRaster"(sampleModel0: $SampleModel$$Type, dataBuffer1: $DataBuffer$$Type, point2: $Point$$Type): $WritableRaster
public static "createWritableRaster"(sampleModel0: $SampleModel$$Type, point1: $Point$$Type): $WritableRaster
public "getBounds"(): $Rectangle
public "getDataBuffer"(): $DataBuffer
public "getDataElements"(int0: integer, int1: integer, int2: integer, int3: integer, object4: any): any
public "getDataElements"(int0: integer, int1: integer, object2: any): any
public "getHeight"(): integer
public "getMinX"(): integer
public "getMinY"(): integer
public "getNumBands"(): integer
public "getNumDataElements"(): integer
public "getParent"(): $Raster
public "getPixel"(int0: integer, int1: integer, int2s: integer[]): integer[]
public "getPixel"(int0: integer, int1: integer, float2s: float[]): float[]
public "getPixel"(int0: integer, int1: integer, double2s: double[]): double[]
public "getPixels"(int0: integer, int1: integer, int2: integer, int3: integer, float4s: float[]): float[]
public "getPixels"(int0: integer, int1: integer, int2: integer, int3: integer, int4s: integer[]): integer[]
public "getPixels"(int0: integer, int1: integer, int2: integer, int3: integer, double4s: double[]): double[]
public "getSample"(int0: integer, int1: integer, int2: integer): integer
public "getSampleDouble"(int0: integer, int1: integer, int2: integer): double
public "getSampleFloat"(int0: integer, int1: integer, int2: integer): float
public "getSampleModel"(): $SampleModel
public "getSampleModelTranslateX"(): integer
public "getSampleModelTranslateY"(): integer
public "getSamples"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, double5s: double[]): double[]
public "getSamples"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, float5s: float[]): float[]
public "getSamples"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5s: integer[]): integer[]
public "getTransferType"(): integer
public "getWidth"(): integer
get "bounds"(): $Rectangle
get "dataBuffer"(): $DataBuffer
get "height"(): integer
get "minX"(): integer
get "minY"(): integer
get "numBands"(): integer
get "numDataElements"(): integer
get "parent"(): $Raster
get "sampleModel"(): $SampleModel
get "sampleModelTranslateX"(): integer
get "sampleModelTranslateY"(): integer
get "transferType"(): integer
get "width"(): integer
}
}

declare module "java.awt.ComponentOrientation" {
import { $ResourceBundle$$Type } from "java.util.ResourceBundle"
import { $Locale$$Type } from "java.util.Locale"
import { $Serializable } from "java.io.Serializable"

export class $ComponentOrientation implements $Serializable {
static readonly "LEFT_TO_RIGHT": $ComponentOrientation
static readonly "RIGHT_TO_LEFT": $ComponentOrientation
static readonly "UNKNOWN": $ComponentOrientation

/** @deprecated */
public static "getOrientation"(resourceBundle0: $ResourceBundle$$Type): $ComponentOrientation
public static "getOrientation"(locale0: $Locale$$Type): $ComponentOrientation
public "isHorizontal"(): boolean
public "isLeftToRight"(): boolean
get "horizontal"(): boolean
get "leftToRight"(): boolean
}
}

declare module "java.awt.Image" {
import { $GraphicsConfiguration$$Type } from "java.awt.GraphicsConfiguration"
import { $Graphics } from "java.awt.Graphics"
import { $ImageCapabilities } from "java.awt.ImageCapabilities"
import { $ImageObserver$$Type } from "java.awt.image.ImageObserver"
import { $ImageProducer } from "java.awt.image.ImageProducer"

export class $Image {
static readonly "SCALE_AREA_AVERAGING": integer
static readonly "SCALE_DEFAULT": integer
static readonly "SCALE_FAST": integer
static readonly "SCALE_REPLICATE": integer
static readonly "SCALE_SMOOTH": integer
static readonly "UndefinedProperty": any

public "flush"(): void
public "getAccelerationPriority"(): float
public "getCapabilities"(graphicsConfiguration0: $GraphicsConfiguration$$Type): $ImageCapabilities
public "getGraphics"(): $Graphics
public "getHeight"(imageObserver0: $ImageObserver$$Type): integer
public "getProperty"(string0: string, imageObserver1: $ImageObserver$$Type): any
public "getScaledInstance"(int0: integer, int1: integer, int2: integer): $Image
public "getSource"(): $ImageProducer
public "getWidth"(imageObserver0: $ImageObserver$$Type): integer
public "setAccelerationPriority"(float0: float): void
get "accelerationPriority"(): float
get "graphics"(): $Graphics
get "source"(): $ImageProducer
set "accelerationPriority"(value: float)
}
}

declare module "java.awt.dnd.DragSource" {
import { $DragGestureListener$$Type } from "java.awt.dnd.DragGestureListener"
import { $Image$$Type } from "java.awt.Image"
import { $DragSourceMotionListener, $DragSourceMotionListener$$Type } from "java.awt.dnd.DragSourceMotionListener"
import { $Cursor, $Cursor$$Type } from "java.awt.Cursor"
import { $FlavorMap, $FlavorMap$$Type } from "java.awt.datatransfer.FlavorMap"
import { $Transferable$$Type } from "java.awt.datatransfer.Transferable"
import { $Point$$Type } from "java.awt.Point"
import { $Component$$Type } from "java.awt.Component"
import { $DragGestureEvent$$Type } from "java.awt.dnd.DragGestureEvent"
import { $Serializable } from "java.io.Serializable"
import { $EventListener, $EventListener$$Type } from "java.util.EventListener"
import { $DragGestureRecognizer, $DragGestureRecognizer$$Type } from "java.awt.dnd.DragGestureRecognizer"
import { $Class$$Type } from "java.lang.Class"
import { $DragSourceListener, $DragSourceListener$$Type } from "java.awt.dnd.DragSourceListener"

export class $DragSource implements $Serializable {
static readonly "DefaultCopyDrop": $Cursor
static readonly "DefaultCopyNoDrop": $Cursor
static readonly "DefaultLinkDrop": $Cursor
static readonly "DefaultLinkNoDrop": $Cursor
static readonly "DefaultMoveDrop": $Cursor
static readonly "DefaultMoveNoDrop": $Cursor

constructor()

public "addDragSourceListener"(dragSourceListener0: $DragSourceListener$$Type): void
public "addDragSourceMotionListener"(dragSourceMotionListener0: $DragSourceMotionListener$$Type): void
public "createDefaultDragGestureRecognizer"(component0: $Component$$Type, int1: integer, dragGestureListener2: $DragGestureListener$$Type): $DragGestureRecognizer
public "createDragGestureRecognizer"<T extends $DragGestureRecognizer>(class0: $Class$$Type<T>, component1: $Component$$Type, int2: integer, dragGestureListener3: $DragGestureListener$$Type): T
public static "getDefaultDragSource"(): $DragSource
public "getDragSourceListeners"(): $DragSourceListener[]
public "getDragSourceMotionListeners"(): $DragSourceMotionListener[]
public static "getDragThreshold"(): integer
public "getFlavorMap"(): $FlavorMap
public "getListeners"<T extends $EventListener>(class0: $Class$$Type<T>): T[]
public static "isDragImageSupported"(): boolean
public "removeDragSourceListener"(dragSourceListener0: $DragSourceListener$$Type): void
public "removeDragSourceMotionListener"(dragSourceMotionListener0: $DragSourceMotionListener$$Type): void
public "startDrag"(dragGestureEvent0: $DragGestureEvent$$Type, cursor1: $Cursor$$Type, transferable2: $Transferable$$Type, dragSourceListener3: $DragSourceListener$$Type, flavorMap4: $FlavorMap$$Type): void
public "startDrag"(dragGestureEvent0: $DragGestureEvent$$Type, cursor1: $Cursor$$Type, image2: $Image$$Type, point3: $Point$$Type, transferable4: $Transferable$$Type, dragSourceListener5: $DragSourceListener$$Type, flavorMap6: $FlavorMap$$Type): void
public "startDrag"(dragGestureEvent0: $DragGestureEvent$$Type, cursor1: $Cursor$$Type, transferable2: $Transferable$$Type, dragSourceListener3: $DragSourceListener$$Type): void
public "startDrag"(dragGestureEvent0: $DragGestureEvent$$Type, cursor1: $Cursor$$Type, image2: $Image$$Type, point3: $Point$$Type, transferable4: $Transferable$$Type, dragSourceListener5: $DragSourceListener$$Type): void
get "dragSourceListeners"(): $DragSourceListener[]
get "dragSourceMotionListeners"(): $DragSourceMotionListener[]
get "flavorMap"(): $FlavorMap
}
}

declare module "java.awt.geom.Rectangle2D" {
import { $Line2D$$Type } from "java.awt.geom.Line2D"
import { $Point2D$$Type } from "java.awt.geom.Point2D"
import { $RectangularShape } from "java.awt.geom.RectangularShape"
import { $AffineTransform$$Type } from "java.awt.geom.AffineTransform"
import { $PathIterator } from "java.awt.geom.PathIterator"

export class $Rectangle2D extends $RectangularShape {
static readonly "OUT_BOTTOM": integer
static readonly "OUT_LEFT": integer
static readonly "OUT_RIGHT": integer
static readonly "OUT_TOP": integer

public "add"(rectangle2D0: $Rectangle2D$$Type): void
public "add"(point2D0: $Point2D$$Type): void
public "add"(double0: double, double1: double): void
public "contains"(double0: double, double1: double): boolean
public "contains"(double0: double, double1: double, double2: double, double3: double): boolean
public "createIntersection"(rectangle2D0: $Rectangle2D$$Type): $Rectangle2D
public "createUnion"(rectangle2D0: $Rectangle2D$$Type): $Rectangle2D
public "getBounds2D"(): $Rectangle2D
public "getPathIterator"(affineTransform0: $AffineTransform$$Type): $PathIterator
public static "intersect"(rectangle2D0: $Rectangle2D$$Type, rectangle2D1: $Rectangle2D$$Type, rectangle2D2: $Rectangle2D$$Type): void
public "intersects"(double0: double, double1: double, double2: double, double3: double): boolean
public "intersectsLine"(line2D0: $Line2D$$Type): boolean
public "intersectsLine"(double0: double, double1: double, double2: double, double3: double): boolean
public "outcode"(double0: double, double1: double): integer
public "outcode"(point2D0: $Point2D$$Type): integer
public "setRect"(rectangle2D0: $Rectangle2D$$Type): void
public "setRect"(double0: double, double1: double, double2: double, double3: double): void
public static "union"(rectangle2D0: $Rectangle2D$$Type, rectangle2D1: $Rectangle2D$$Type, rectangle2D2: $Rectangle2D$$Type): void
get "bounds2D"(): $Rectangle2D
set "rect"(value: $Rectangle2D$$Type)
}
}

declare module "java.awt.dnd.DragSourceContext" {
import { $Image$$Type } from "java.awt.Image"
import { $DragSource } from "java.awt.dnd.DragSource"
import { $DragSourceMotionListener } from "java.awt.dnd.DragSourceMotionListener"
import { $Cursor, $Cursor$$Type } from "java.awt.Cursor"
import { $Transferable, $Transferable$$Type } from "java.awt.datatransfer.Transferable"
import { $Point$$Type } from "java.awt.Point"
import { $DragGestureEvent, $DragGestureEvent$$Type } from "java.awt.dnd.DragGestureEvent"
import { $Component } from "java.awt.Component"
import { $Serializable } from "java.io.Serializable"
import { $DragSourceDragEvent$$Type } from "java.awt.dnd.DragSourceDragEvent"
import { $DragSourceEvent$$Type } from "java.awt.dnd.DragSourceEvent"
import { $DragSourceListener, $DragSourceListener$$Type } from "java.awt.dnd.DragSourceListener"
import { $DragSourceDropEvent$$Type } from "java.awt.dnd.DragSourceDropEvent"

export class $DragSourceContext implements $DragSourceListener, $DragSourceMotionListener, $Serializable {
constructor(dragGestureEvent0: $DragGestureEvent$$Type, cursor1: $Cursor$$Type, image2: $Image$$Type, point3: $Point$$Type, transferable4: $Transferable$$Type, dragSourceListener5: $DragSourceListener$$Type)

public "addDragSourceListener"(dragSourceListener0: $DragSourceListener$$Type): void
public "dragDropEnd"(dragSourceDropEvent0: $DragSourceDropEvent$$Type): void
public "dragEnter"(dragSourceDragEvent0: $DragSourceDragEvent$$Type): void
public "dragExit"(dragSourceEvent0: $DragSourceEvent$$Type): void
public "dragMouseMoved"(dragSourceDragEvent0: $DragSourceDragEvent$$Type): void
public "dragOver"(dragSourceDragEvent0: $DragSourceDragEvent$$Type): void
public "dropActionChanged"(dragSourceDragEvent0: $DragSourceDragEvent$$Type): void
public "getComponent"(): $Component
public "getCursor"(): $Cursor
public "getDragSource"(): $DragSource
public "getSourceActions"(): integer
public "getTransferable"(): $Transferable
public "getTrigger"(): $DragGestureEvent
public "removeDragSourceListener"(dragSourceListener0: $DragSourceListener$$Type): void
public "setCursor"(cursor0: $Cursor$$Type): void
public "transferablesFlavorsChanged"(): void
get "component"(): $Component
get "cursor"(): $Cursor
get "dragSource"(): $DragSource
get "sourceActions"(): integer
get "transferable"(): $Transferable
get "trigger"(): $DragGestureEvent
set "cursor"(value: $Cursor$$Type)
}
}

declare module "java.awt.event.WindowListener" {
import { $EventListener } from "java.util.EventListener"
import { $WindowEvent$$Type } from "java.awt.event.WindowEvent"

export interface $WindowListener extends $EventListener {
"windowActivated"(windowEvent0: $WindowEvent$$Type): void
"windowClosed"(windowEvent0: $WindowEvent$$Type): void
"windowClosing"(windowEvent0: $WindowEvent$$Type): void
"windowDeactivated"(windowEvent0: $WindowEvent$$Type): void
"windowDeiconified"(windowEvent0: $WindowEvent$$Type): void
"windowIconified"(windowEvent0: $WindowEvent$$Type): void
"windowOpened"(windowEvent0: $WindowEvent$$Type): void
}

export namespace $WindowListener {
const probejs$$marker: never
}
export abstract class $WindowListener$$Static implements $WindowListener {
}
}

declare module "java.awt.event.HierarchyListener" {
import { $EventListener } from "java.util.EventListener"
import { $HierarchyEvent$$Type } from "java.awt.event.HierarchyEvent"

export interface $HierarchyListener extends $EventListener {
"hierarchyChanged"(hierarchyEvent0: $HierarchyEvent$$Type): void
}

export namespace $HierarchyListener {
const probejs$$marker: never
}
export abstract class $HierarchyListener$$Static implements $HierarchyListener {
}
}

declare module "java.awt.Color" {
import { $Rectangle$$Type } from "java.awt.Rectangle"
import { $ColorModel$$Type } from "java.awt.image.ColorModel"
import { $Paint } from "java.awt.Paint"
import { $Rectangle2D$$Type } from "java.awt.geom.Rectangle2D"
import { $RenderingHints$$Type } from "java.awt.RenderingHints"
import { $PaintContext } from "java.awt.PaintContext"
import { $AffineTransform$$Type } from "java.awt.geom.AffineTransform"
import { $ColorSpace, $ColorSpace$$Type } from "java.awt.color.ColorSpace"
import { $Serializable } from "java.io.Serializable"

export class $Color implements $Paint, $Serializable {
static readonly "BLACK": $Color
static readonly "BLUE": $Color
static readonly "CYAN": $Color
static readonly "DARK_GRAY": $Color
static readonly "GRAY": $Color
static readonly "GREEN": $Color
static readonly "LIGHT_GRAY": $Color
static readonly "MAGENTA": $Color
static readonly "ORANGE": $Color
static readonly "PINK": $Color
static readonly "RED": $Color
static readonly "WHITE": $Color
static readonly "YELLOW": $Color
static readonly "black": $Color
static readonly "blue": $Color
static readonly "cyan": $Color
static readonly "darkGray": $Color
static readonly "gray": $Color
static readonly "green": $Color
static readonly "lightGray": $Color
static readonly "magenta": $Color
static readonly "orange": $Color
static readonly "pink": $Color
static readonly "red": $Color
static readonly "white": $Color
static readonly "yellow": $Color

constructor(int0: integer, int1: integer, int2: integer, int3: integer)
constructor(colorSpace0: $ColorSpace$$Type, float1s: float[], float2: float)
constructor(int0: integer, int1: integer, int2: integer)
constructor(int0: integer, boolean1: boolean)
constructor(int0: integer)
constructor(float0: float, float1: float, float2: float, float3: float)
constructor(float0: float, float1: float, float2: float)

public static "HSBtoRGB"(float0: float, float1: float, float2: float): integer
public static "RGBtoHSB"(int0: integer, int1: integer, int2: integer, float3s: float[]): float[]
public "brighter"(): $Color
public "createContext"(colorModel0: $ColorModel$$Type, rectangle1: $Rectangle$$Type, rectangle2D2: $Rectangle2D$$Type, affineTransform3: $AffineTransform$$Type, renderingHints4: $RenderingHints$$Type): $PaintContext
public "darker"(): $Color
public static "decode"(string0: string): $Color
public "getAlpha"(): integer
public "getBlue"(): integer
public static "getColor"(string0: string): $Color
public static "getColor"(string0: string, int1: integer): $Color
public static "getColor"(string0: string, color1: $Color$$Type): $Color
public "getColorComponents"(float0s: float[]): float[]
public "getColorComponents"(colorSpace0: $ColorSpace$$Type, float1s: float[]): float[]
public "getColorSpace"(): $ColorSpace
public "getComponents"(colorSpace0: $ColorSpace$$Type, float1s: float[]): float[]
public "getComponents"(float0s: float[]): float[]
public "getGreen"(): integer
public static "getHSBColor"(float0: float, float1: float, float2: float): $Color
public "getRGB"(): integer
public "getRGBColorComponents"(float0s: float[]): float[]
public "getRGBComponents"(float0s: float[]): float[]
public "getRed"(): integer
public "getTransparency"(): integer
get "alpha"(): integer
get "colorSpace"(): $ColorSpace
get "rGB"(): integer
get "transparency"(): integer
}
}

declare module "java.awt.Container" {
import { $EventListener, $EventListener$$Type } from "java.util.EventListener"
import { $Insets } from "java.awt.Insets"
import { $FocusTraversalPolicy, $FocusTraversalPolicy$$Type } from "java.awt.FocusTraversalPolicy"
import { $ContainerListener, $ContainerListener$$Type } from "java.awt.event.ContainerListener"
import { $Graphics$$Type } from "java.awt.Graphics"
import { $Point, $Point$$Type } from "java.awt.Point"
import { $Class$$Type } from "java.lang.Class"
import { $LayoutManager, $LayoutManager$$Type } from "java.awt.LayoutManager"
import { $Component, $Component$$Type } from "java.awt.Component"

export class $Container extends $Component {
constructor()

public "add"(component0: $Component$$Type, object1: any): void
public "add"(component0: $Component$$Type, object1: any, int2: integer): void
public "add"(component0: $Component$$Type): $Component
public "add"(string0: string, component1: $Component$$Type): $Component
public "add"(component0: $Component$$Type, int1: integer): $Component
public "addContainerListener"(containerListener0: $ContainerListener$$Type): void
/** @deprecated */
public "countComponents"(): integer
public "findComponentAt"(int0: integer, int1: integer): $Component
public "findComponentAt"(point0: $Point$$Type): $Component
public "getComponent"(int0: integer): $Component
public "getComponentCount"(): integer
public "getComponentZOrder"(component0: $Component$$Type): integer
public "getComponents"(): $Component[]
public "getContainerListeners"(): $ContainerListener[]
public "getFocusTraversalPolicy"(): $FocusTraversalPolicy
public "getInsets"(): $Insets
public "getLayout"(): $LayoutManager
public "getListeners"<T extends $EventListener>(class0: $Class$$Type<T>): T[]
public "getMousePosition"(boolean0: boolean): $Point
/** @deprecated */
public "insets"(): $Insets
public "isAncestorOf"(component0: $Component$$Type): boolean
public "isFocusCycleRoot"(): boolean
public "isFocusTraversalPolicyProvider"(): boolean
public "isFocusTraversalPolicySet"(): boolean
public "isValidateRoot"(): boolean
public "paintComponents"(graphics0: $Graphics$$Type): void
public "printComponents"(graphics0: $Graphics$$Type): void
public "remove"(component0: $Component$$Type): void
public "remove"(int0: integer): void
public "removeAll"(): void
public "removeContainerListener"(containerListener0: $ContainerListener$$Type): void
public "setComponentZOrder"(component0: $Component$$Type, int1: integer): void
public "setFocusCycleRoot"(boolean0: boolean): void
public "setFocusTraversalPolicy"(focusTraversalPolicy0: $FocusTraversalPolicy$$Type): void
public "setFocusTraversalPolicyProvider"(boolean0: boolean): void
public "setLayout"(layoutManager0: $LayoutManager$$Type): void
public "transferFocusDownCycle"(): void
get "componentCount"(): integer
get "components"(): $Component[]
get "containerListeners"(): $ContainerListener[]
get "focusTraversalPolicy"(): $FocusTraversalPolicy
get "layout"(): $LayoutManager
get "focusCycleRoot"(): boolean
get "focusTraversalPolicyProvider"(): boolean
get "focusTraversalPolicySet"(): boolean
get "validateRoot"(): boolean
set "focusCycleRoot"(value: boolean)
set "focusTraversalPolicy"(value: $FocusTraversalPolicy$$Type)
set "focusTraversalPolicyProvider"(value: boolean)
set "layout"(value: $LayoutManager$$Type)
}
}

declare module "java.awt.JobAttributes$DialogType" {
import { $AttributeValue } from "java.awt.AttributeValue"

export class $JobAttributes$DialogType extends $AttributeValue {
static readonly "COMMON": $JobAttributes$DialogType
static readonly "NATIVE": $JobAttributes$DialogType
static readonly "NONE": $JobAttributes$DialogType

}
}

declare module "java.awt.dnd.DropTarget" {
import { $DropTargetDragEvent$$Type } from "java.awt.dnd.DropTargetDragEvent"
import { $DropTargetEvent$$Type } from "java.awt.dnd.DropTargetEvent"
import { $FlavorMap, $FlavorMap$$Type } from "java.awt.datatransfer.FlavorMap"
import { $DropTargetDropEvent$$Type } from "java.awt.dnd.DropTargetDropEvent"
import { $DropTargetListener, $DropTargetListener$$Type } from "java.awt.dnd.DropTargetListener"
import { $Component, $Component$$Type } from "java.awt.Component"
import { $DropTargetContext } from "java.awt.dnd.DropTargetContext"
import { $Serializable } from "java.io.Serializable"

export class $DropTarget implements $DropTargetListener, $Serializable {
constructor(component0: $Component$$Type, int1: integer, dropTargetListener2: $DropTargetListener$$Type, boolean3: boolean)
constructor()
constructor(component0: $Component$$Type, int1: integer, dropTargetListener2: $DropTargetListener$$Type, boolean3: boolean, flavorMap4: $FlavorMap$$Type)
constructor(component0: $Component$$Type, dropTargetListener1: $DropTargetListener$$Type)
constructor(component0: $Component$$Type, int1: integer, dropTargetListener2: $DropTargetListener$$Type)

public "addDropTargetListener"(dropTargetListener0: $DropTargetListener$$Type): void
public "addNotify"(): void
public "dragEnter"(dropTargetDragEvent0: $DropTargetDragEvent$$Type): void
public "dragExit"(dropTargetEvent0: $DropTargetEvent$$Type): void
public "dragOver"(dropTargetDragEvent0: $DropTargetDragEvent$$Type): void
public "drop"(dropTargetDropEvent0: $DropTargetDropEvent$$Type): void
public "dropActionChanged"(dropTargetDragEvent0: $DropTargetDragEvent$$Type): void
public "getComponent"(): $Component
public "getDefaultActions"(): integer
public "getDropTargetContext"(): $DropTargetContext
public "getFlavorMap"(): $FlavorMap
public "isActive"(): boolean
public "removeDropTargetListener"(dropTargetListener0: $DropTargetListener$$Type): void
public "removeNotify"(): void
public "setActive"(boolean0: boolean): void
public "setComponent"(component0: $Component$$Type): void
public "setDefaultActions"(int0: integer): void
public "setFlavorMap"(flavorMap0: $FlavorMap$$Type): void
get "component"(): $Component
get "defaultActions"(): integer
get "dropTargetContext"(): $DropTargetContext
get "flavorMap"(): $FlavorMap
get "active"(): boolean
set "active"(value: boolean)
set "component"(value: $Component$$Type)
set "defaultActions"(value: integer)
set "flavorMap"(value: $FlavorMap$$Type)
}
}

declare module "java.awt.PageAttributes$OriginType" {
import { $AttributeValue } from "java.awt.AttributeValue"

export class $PageAttributes$OriginType extends $AttributeValue {
static readonly "PHYSICAL": $PageAttributes$OriginType
static readonly "PRINTABLE": $PageAttributes$OriginType

}
}

declare module "java.awt.geom.RectangularShape" {
import { $Shape } from "java.awt.Shape"
import { $Rectangle } from "java.awt.Rectangle"
import { $Cloneable } from "java.lang.Cloneable"
import { $Dimension2D$$Type } from "java.awt.geom.Dimension2D"
import { $Point2D$$Type } from "java.awt.geom.Point2D"
import { $Rectangle2D, $Rectangle2D$$Type } from "java.awt.geom.Rectangle2D"
import { $AffineTransform$$Type } from "java.awt.geom.AffineTransform"
import { $PathIterator } from "java.awt.geom.PathIterator"

export class $RectangularShape implements $Shape, $Cloneable {
public "clone"(): any
public "contains"(point2D0: $Point2D$$Type): boolean
public "contains"(rectangle2D0: $Rectangle2D$$Type): boolean
public "contains"(double0: double, double1: double): boolean
public "contains"(double0: double, double1: double, double2: double, double3: double): boolean
public "getBounds"(): $Rectangle
public "getBounds2D"(): $Rectangle2D
public "getCenterX"(): double
public "getCenterY"(): double
public "getFrame"(): $Rectangle2D
public "getHeight"(): double
public "getMaxX"(): double
public "getMaxY"(): double
public "getMinX"(): double
public "getMinY"(): double
public "getPathIterator"(affineTransform0: $AffineTransform$$Type, double1: double): $PathIterator
public "getPathIterator"(affineTransform0: $AffineTransform$$Type): $PathIterator
public "getWidth"(): double
public "getX"(): double
public "getY"(): double
public "intersects"(rectangle2D0: $Rectangle2D$$Type): boolean
public "intersects"(double0: double, double1: double, double2: double, double3: double): boolean
public "isEmpty"(): boolean
public "setFrame"(point2D0: $Point2D$$Type, dimension2D1: $Dimension2D$$Type): void
public "setFrame"(rectangle2D0: $Rectangle2D$$Type): void
public "setFrame"(double0: double, double1: double, double2: double, double3: double): void
public "setFrameFromCenter"(double0: double, double1: double, double2: double, double3: double): void
public "setFrameFromCenter"(point2D0: $Point2D$$Type, point2D1: $Point2D$$Type): void
public "setFrameFromDiagonal"(double0: double, double1: double, double2: double, double3: double): void
public "setFrameFromDiagonal"(point2D0: $Point2D$$Type, point2D1: $Point2D$$Type): void
get "bounds"(): $Rectangle
get "bounds2D"(): $Rectangle2D
get "centerX"(): double
get "centerY"(): double
get "frame"(): $Rectangle2D
get "height"(): double
get "maxX"(): double
get "maxY"(): double
get "minX"(): double
get "minY"(): double
get "width"(): double
get "x"(): double
get "y"(): double
get "empty"(): boolean
set "frame"(value: $Rectangle2D$$Type)
}
}

declare module "java.awt.event.ContainerEvent" {
import { $Container } from "java.awt.Container"
import { $ComponentEvent } from "java.awt.event.ComponentEvent"
import { $Component, $Component$$Type } from "java.awt.Component"

export class $ContainerEvent extends $ComponentEvent {
static readonly "COMPONENT_ADDED": integer
static readonly "COMPONENT_REMOVED": integer
static readonly "CONTAINER_FIRST": integer
static readonly "CONTAINER_LAST": integer

constructor(component0: $Component$$Type, int1: integer, component2: $Component$$Type)

public "getChild"(): $Component
public "getContainer"(): $Container
get "child"(): $Component
get "container"(): $Container
}
}

declare module "java.awt.event.ComponentEvent" {
import { $AWTEvent } from "java.awt.AWTEvent"
import { $Component, $Component$$Type } from "java.awt.Component"

export class $ComponentEvent extends $AWTEvent {
static readonly "COMPONENT_FIRST": integer
static readonly "COMPONENT_HIDDEN": integer
static readonly "COMPONENT_LAST": integer
static readonly "COMPONENT_MOVED": integer
static readonly "COMPONENT_RESIZED": integer
static readonly "COMPONENT_SHOWN": integer

constructor(component0: $Component$$Type, int1: integer)

public "getComponent"(): $Component
get "component"(): $Component
}
}

declare module "java.awt.dnd.DropTargetContext" {
import { $DropTarget } from "java.awt.dnd.DropTarget"
import { $Component } from "java.awt.Component"
import { $Serializable } from "java.io.Serializable"

export class $DropTargetContext implements $Serializable {
public "dropComplete"(boolean0: boolean): void
public "getComponent"(): $Component
public "getDropTarget"(): $DropTarget
get "component"(): $Component
get "dropTarget"(): $DropTarget
}
}

declare module "java.awt.event.WindowEvent" {
import { $Window, $Window$$Type } from "java.awt.Window"
import { $ComponentEvent } from "java.awt.event.ComponentEvent"

export class $WindowEvent extends $ComponentEvent {
static readonly "WINDOW_ACTIVATED": integer
static readonly "WINDOW_CLOSED": integer
static readonly "WINDOW_CLOSING": integer
static readonly "WINDOW_DEACTIVATED": integer
static readonly "WINDOW_DEICONIFIED": integer
static readonly "WINDOW_FIRST": integer
static readonly "WINDOW_GAINED_FOCUS": integer
static readonly "WINDOW_ICONIFIED": integer
static readonly "WINDOW_LAST": integer
static readonly "WINDOW_LOST_FOCUS": integer
static readonly "WINDOW_OPENED": integer
static readonly "WINDOW_STATE_CHANGED": integer

constructor(window0: $Window$$Type, int1: integer, window2: $Window$$Type, int3: integer, int4: integer)
constructor(window0: $Window$$Type, int1: integer, window2: $Window$$Type)
constructor(window0: $Window$$Type, int1: integer, int2: integer, int3: integer)
constructor(window0: $Window$$Type, int1: integer)

public "getNewState"(): integer
public "getOldState"(): integer
public "getOppositeWindow"(): $Window
public "getWindow"(): $Window
get "newState"(): integer
get "oldState"(): integer
get "oppositeWindow"(): $Window
get "window"(): $Window
}
}

declare module "java.awt.BufferCapabilities$FlipContents" {
import { $AttributeValue } from "java.awt.AttributeValue"

export class $BufferCapabilities$FlipContents extends $AttributeValue {
static readonly "BACKGROUND": $BufferCapabilities$FlipContents
static readonly "COPIED": $BufferCapabilities$FlipContents
static readonly "PRIOR": $BufferCapabilities$FlipContents
static readonly "UNDEFINED": $BufferCapabilities$FlipContents

}
}

declare module "java.awt.Window" {
import { $Shape, $Shape$$Type } from "java.awt.Shape"
import { $GraphicsConfiguration$$Type } from "java.awt.GraphicsConfiguration"
import { $Frame$$Type } from "java.awt.Frame"
import { $WindowFocusListener, $WindowFocusListener$$Type } from "java.awt.event.WindowFocusListener"
import { $Image, $Image$$Type } from "java.awt.Image"
import { $Accessible } from "javax.accessibility.Accessible"
import { $Component, $Component$$Type } from "java.awt.Component"
import { $EventListener, $EventListener$$Type } from "java.util.EventListener"
import { $List, $List$$Type } from "java.util.List"
import { $ResourceBundle$$Type } from "java.util.ResourceBundle"
import { $Window$Type, $Window$Type$$Type } from "java.awt.Window$Type"
import { $WindowListener, $WindowListener$$Type } from "java.awt.event.WindowListener"
import { $Class$$Type } from "java.lang.Class"
import { $BufferCapabilities$$Type } from "java.awt.BufferCapabilities"
import { $Dialog$ModalExclusionType, $Dialog$ModalExclusionType$$Type } from "java.awt.Dialog$ModalExclusionType"
import { $Container } from "java.awt.Container"
import { $WindowStateListener, $WindowStateListener$$Type } from "java.awt.event.WindowStateListener"
import { $BufferStrategy } from "java.awt.image.BufferStrategy"

export class $Window extends $Container implements $Accessible {
constructor(window0: $Window$$Type, graphicsConfiguration1: $GraphicsConfiguration$$Type)
constructor(frame0: $Frame$$Type)
constructor(window0: $Window$$Type)

public "addWindowFocusListener"(windowFocusListener0: $WindowFocusListener$$Type): void
public "addWindowListener"(windowListener0: $WindowListener$$Type): void
public "addWindowStateListener"(windowStateListener0: $WindowStateListener$$Type): void
/** @deprecated */
public "applyResourceBundle"(resourceBundle0: $ResourceBundle$$Type): void
/** @deprecated */
public "applyResourceBundle"(string0: string): void
public "createBufferStrategy"(int0: integer): void
public "createBufferStrategy"(int0: integer, bufferCapabilities1: $BufferCapabilities$$Type): void
public "dispose"(): void
public "getBufferStrategy"(): $BufferStrategy
public "getFocusOwner"(): $Component
public "getFocusableWindowState"(): boolean
public "getIconImages"(): $List<$Image>
public "getListeners"<T extends $EventListener>(class0: $Class$$Type<T>): T[]
public "getModalExclusionType"(): $Dialog$ModalExclusionType
public "getMostRecentFocusOwner"(): $Component
public "getOpacity"(): float
public "getOwnedWindows"(): $Window[]
public "getOwner"(): $Window
public static "getOwnerlessWindows"(): $Window[]
public "getShape"(): $Shape
public "getType"(): $Window$Type
public "getWarningString"(): string
public "getWindowFocusListeners"(): $WindowFocusListener[]
public "getWindowListeners"(): $WindowListener[]
public "getWindowStateListeners"(): $WindowStateListener[]
public static "getWindows"(): $Window[]
public "isActive"(): boolean
public "isAlwaysOnTop"(): boolean
public "isAlwaysOnTopSupported"(): boolean
public "isAutoRequestFocus"(): boolean
public "isFocusableWindow"(): boolean
public "isFocused"(): boolean
public "isLocationByPlatform"(): boolean
public "pack"(): void
public "removeWindowFocusListener"(windowFocusListener0: $WindowFocusListener$$Type): void
public "removeWindowListener"(windowListener0: $WindowListener$$Type): void
public "removeWindowStateListener"(windowStateListener0: $WindowStateListener$$Type): void
public "setAlwaysOnTop"(boolean0: boolean): void
public "setAutoRequestFocus"(boolean0: boolean): void
public "setFocusableWindowState"(boolean0: boolean): void
public "setIconImage"(image0: $Image$$Type): void
public "setIconImages"(list0: $List$$Type<$Image$$Type>): void
public "setLocationByPlatform"(boolean0: boolean): void
public "setLocationRelativeTo"(component0: $Component$$Type): void
public "setModalExclusionType"(modalExclusionType0: $Dialog$ModalExclusionType$$Type): void
public "setOpacity"(float0: float): void
public "setShape"(shape0: $Shape$$Type): void
public "setType"(type0: $Window$Type$$Type): void
public "toBack"(): void
public "toFront"(): void
get "bufferStrategy"(): $BufferStrategy
get "focusOwner"(): $Component
get "focusableWindowState"(): boolean
get "iconImages"(): $List<$Image>
get "modalExclusionType"(): $Dialog$ModalExclusionType
get "mostRecentFocusOwner"(): $Component
get "opacity"(): float
get "ownedWindows"(): $Window[]
get "owner"(): $Window
get "shape"(): $Shape
get "type"(): $Window$Type
get "warningString"(): string
get "windowFocusListeners"(): $WindowFocusListener[]
get "windowListeners"(): $WindowListener[]
get "windowStateListeners"(): $WindowStateListener[]
get "active"(): boolean
get "alwaysOnTop"(): boolean
get "alwaysOnTopSupported"(): boolean
get "autoRequestFocus"(): boolean
get "focusableWindow"(): boolean
get "focused"(): boolean
get "locationByPlatform"(): boolean
set "alwaysOnTop"(value: boolean)
set "autoRequestFocus"(value: boolean)
set "focusableWindowState"(value: boolean)
set "iconImage"(value: $Image$$Type)
set "iconImages"(value: $List$$Type<$Image$$Type>)
set "locationByPlatform"(value: boolean)
set "locationRelativeTo"(value: $Component$$Type)
set "modalExclusionType"(value: $Dialog$ModalExclusionType$$Type)
set "opacity"(value: float)
set "shape"(value: $Shape$$Type)
set "type"(value: $Window$Type$$Type)
}
}

declare module "java.awt.datatransfer.Transferable" {
import { $DataFlavor, $DataFlavor$$Type } from "java.awt.datatransfer.DataFlavor"

export interface $Transferable {
"getTransferData"(dataFlavor0: $DataFlavor$$Type): any
"getTransferDataFlavors"(): $DataFlavor[]
"isDataFlavorSupported"(dataFlavor0: $DataFlavor$$Type): boolean
get "transferDataFlavors"(): $DataFlavor[]
}

export namespace $Transferable {
const probejs$$marker: never
}
export abstract class $Transferable$$Static implements $Transferable {
}
}

declare module "java.awt.image.ImageConsumer" {
import { $ColorModel$$Type } from "java.awt.image.ColorModel"
import { $Hashtable$$Type } from "java.util.Hashtable"

export interface $ImageConsumer {
"imageComplete"(int0: integer): void
"setColorModel"(colorModel0: $ColorModel$$Type): void
"setDimensions"(int0: integer, int1: integer): void
"setHints"(int0: integer): void
"setPixels"(int0: integer, int1: integer, int2: integer, int3: integer, colorModel4: $ColorModel$$Type, int5s: integer[], int6: integer, int7: integer): void
"setPixels"(int0: integer, int1: integer, int2: integer, int3: integer, colorModel4: $ColorModel$$Type, byte5s: byte[], int6: integer, int7: integer): void
"setProperties"(hashtable0: $Hashtable$$Type<any, any>): void
set "colorModel"(value: $ColorModel$$Type)
set "hints"(value: integer)
set "properties"(value: $Hashtable$$Type<any, any>)
}

export namespace $ImageConsumer {
const COMPLETESCANLINES: integer
const IMAGEABORTED: integer
const IMAGEERROR: integer
const RANDOMPIXELORDER: integer
const SINGLEFRAME: integer
const SINGLEFRAMEDONE: integer
const SINGLEPASS: integer
const STATICIMAGEDONE: integer
const TOPDOWNLEFTRIGHT: integer
}
export abstract class $ImageConsumer$$Static implements $ImageConsumer {
static readonly "COMPLETESCANLINES": integer
static readonly "IMAGEABORTED": integer
static readonly "IMAGEERROR": integer
static readonly "RANDOMPIXELORDER": integer
static readonly "SINGLEFRAME": integer
static readonly "SINGLEFRAMEDONE": integer
static readonly "SINGLEPASS": integer
static readonly "STATICIMAGEDONE": integer
static readonly "TOPDOWNLEFTRIGHT": integer

}
}

declare module "java.awt.image.BufferedImageOp" {
import { $ColorModel$$Type } from "java.awt.image.ColorModel"
import { $Point2D, $Point2D$$Type } from "java.awt.geom.Point2D"
import { $BufferedImage, $BufferedImage$$Type } from "java.awt.image.BufferedImage"
import { $Rectangle2D } from "java.awt.geom.Rectangle2D"
import { $RenderingHints } from "java.awt.RenderingHints"

export interface $BufferedImageOp {
"createCompatibleDestImage"(bufferedImage0: $BufferedImage$$Type, colorModel1: $ColorModel$$Type): $BufferedImage
"filter"(bufferedImage0: $BufferedImage$$Type, bufferedImage1: $BufferedImage$$Type): $BufferedImage
"getBounds2D"(bufferedImage0: $BufferedImage$$Type): $Rectangle2D
"getPoint2D"(point2D0: $Point2D$$Type, point2D1: $Point2D$$Type): $Point2D
"getRenderingHints"(): $RenderingHints
get "renderingHints"(): $RenderingHints
}

export namespace $BufferedImageOp {
const probejs$$marker: never
}
export abstract class $BufferedImageOp$$Static implements $BufferedImageOp {
}
}

declare module "java.awt.Event" {
import { $Serializable } from "java.io.Serializable"

/** @deprecated */
export class $Event implements $Serializable {
static readonly "ACTION_EVENT": integer
static readonly "ALT_MASK": integer
static readonly "BACK_SPACE": integer
static readonly "CAPS_LOCK": integer
static readonly "CTRL_MASK": integer
static readonly "DELETE": integer
static readonly "DOWN": integer
static readonly "END": integer
static readonly "ENTER": integer
static readonly "ESCAPE": integer
static readonly "F1": integer
static readonly "F10": integer
static readonly "F11": integer
static readonly "F12": integer
static readonly "F2": integer
static readonly "F3": integer
static readonly "F4": integer
static readonly "F5": integer
static readonly "F6": integer
static readonly "F7": integer
static readonly "F8": integer
static readonly "F9": integer
static readonly "GOT_FOCUS": integer
static readonly "HOME": integer
static readonly "INSERT": integer
static readonly "KEY_ACTION": integer
static readonly "KEY_ACTION_RELEASE": integer
static readonly "KEY_PRESS": integer
static readonly "KEY_RELEASE": integer
static readonly "LEFT": integer
static readonly "LIST_DESELECT": integer
static readonly "LIST_SELECT": integer
static readonly "LOAD_FILE": integer
static readonly "LOST_FOCUS": integer
static readonly "META_MASK": integer
static readonly "MOUSE_DOWN": integer
static readonly "MOUSE_DRAG": integer
static readonly "MOUSE_ENTER": integer
static readonly "MOUSE_EXIT": integer
static readonly "MOUSE_MOVE": integer
static readonly "MOUSE_UP": integer
static readonly "NUM_LOCK": integer
static readonly "PAUSE": integer
static readonly "PGDN": integer
static readonly "PGUP": integer
static readonly "PRINT_SCREEN": integer
static readonly "RIGHT": integer
static readonly "SAVE_FILE": integer
static readonly "SCROLL_ABSOLUTE": integer
static readonly "SCROLL_BEGIN": integer
static readonly "SCROLL_END": integer
static readonly "SCROLL_LINE_DOWN": integer
static readonly "SCROLL_LINE_UP": integer
static readonly "SCROLL_LOCK": integer
static readonly "SCROLL_PAGE_DOWN": integer
static readonly "SCROLL_PAGE_UP": integer
static readonly "SHIFT_MASK": integer
static readonly "TAB": integer
static readonly "UP": integer
static readonly "WINDOW_DEICONIFY": integer
static readonly "WINDOW_DESTROY": integer
static readonly "WINDOW_EXPOSE": integer
static readonly "WINDOW_ICONIFY": integer
static readonly "WINDOW_MOVED": integer

constructor(object0: any, long1: long, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, object7: any)
constructor(object0: any, long1: long, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer)
constructor(object0: any, int1: integer, object2: any)

public "controlDown"(): boolean
public "metaDown"(): boolean
public "shiftDown"(): boolean
public "translate"(int0: integer, int1: integer): void
get "arg"(): any
set "arg"(value: any)
get "clickCount"(): integer
set "clickCount"(value: integer)
get "evt"(): $Event
set "evt"(value: $Event$$Type)
get "id"(): integer
set "id"(value: integer)
get "key"(): integer
set "key"(value: integer)
get "modifiers"(): integer
set "modifiers"(value: integer)
get "target"(): any
set "target"(value: any)
get "when"(): long
set "when"(value: long)
get "x"(): integer
set "x"(value: integer)
get "y"(): integer
set "y"(value: integer)
}
}

declare module "java.awt.font.GlyphVector" {
import { $Shape } from "java.awt.Shape"
import { $GlyphJustificationInfo } from "java.awt.font.GlyphJustificationInfo"
import { $Rectangle } from "java.awt.Rectangle"
import { $Cloneable } from "java.lang.Cloneable"
import { $FontRenderContext, $FontRenderContext$$Type } from "java.awt.font.FontRenderContext"
import { $Point2D, $Point2D$$Type } from "java.awt.geom.Point2D"
import { $Font } from "java.awt.Font"
import { $Rectangle2D } from "java.awt.geom.Rectangle2D"
import { $GlyphMetrics } from "java.awt.font.GlyphMetrics"
import { $AffineTransform, $AffineTransform$$Type } from "java.awt.geom.AffineTransform"

export class $GlyphVector implements $Cloneable {
static readonly "FLAG_COMPLEX_GLYPHS": integer
static readonly "FLAG_HAS_POSITION_ADJUSTMENTS": integer
static readonly "FLAG_HAS_TRANSFORMS": integer
static readonly "FLAG_MASK": integer
static readonly "FLAG_RUN_RTL": integer

public "equals"(glyphVector0: $GlyphVector$$Type): boolean
public "getFont"(): $Font
public "getFontRenderContext"(): $FontRenderContext
public "getGlyphCharIndex"(int0: integer): integer
public "getGlyphCharIndices"(int0: integer, int1: integer, int2s: integer[]): integer[]
public "getGlyphCode"(int0: integer): integer
public "getGlyphCodes"(int0: integer, int1: integer, int2s: integer[]): integer[]
public "getGlyphJustificationInfo"(int0: integer): $GlyphJustificationInfo
public "getGlyphLogicalBounds"(int0: integer): $Shape
public "getGlyphMetrics"(int0: integer): $GlyphMetrics
public "getGlyphOutline"(int0: integer): $Shape
public "getGlyphOutline"(int0: integer, float1: float, float2: float): $Shape
public "getGlyphPixelBounds"(int0: integer, fontRenderContext1: $FontRenderContext$$Type, float2: float, float3: float): $Rectangle
public "getGlyphPosition"(int0: integer): $Point2D
public "getGlyphPositions"(int0: integer, int1: integer, float2s: float[]): float[]
public "getGlyphTransform"(int0: integer): $AffineTransform
public "getGlyphVisualBounds"(int0: integer): $Shape
public "getLayoutFlags"(): integer
public "getLogicalBounds"(): $Rectangle2D
public "getNumGlyphs"(): integer
public "getOutline"(float0: float, float1: float): $Shape
public "getOutline"(): $Shape
public "getPixelBounds"(fontRenderContext0: $FontRenderContext$$Type, float1: float, float2: float): $Rectangle
public "getVisualBounds"(): $Rectangle2D
public "performDefaultLayout"(): void
public "setGlyphPosition"(int0: integer, point2D1: $Point2D$$Type): void
public "setGlyphTransform"(int0: integer, affineTransform1: $AffineTransform$$Type): void
get "font"(): $Font
get "fontRenderContext"(): $FontRenderContext
get "layoutFlags"(): integer
get "logicalBounds"(): $Rectangle2D
get "numGlyphs"(): integer
get "outline"(): $Shape
get "visualBounds"(): $Rectangle2D
}
}

declare module "java.awt.Rectangle" {
import { $Shape } from "java.awt.Shape"
import { $Dimension, $Dimension$$Type } from "java.awt.Dimension"
import { $Point2D$$Type } from "java.awt.geom.Point2D"
import { $Rectangle2D, $Rectangle2D$$Type } from "java.awt.geom.Rectangle2D"
import { $Point, $Point$$Type } from "java.awt.Point"
import { $AffineTransform$$Type } from "java.awt.geom.AffineTransform"
import { $PathIterator } from "java.awt.geom.PathIterator"
import { $Serializable } from "java.io.Serializable"

export class $Rectangle extends $Rectangle2D implements $Shape, $Serializable {
constructor(int0: integer, int1: integer, int2: integer, int3: integer)
constructor(point0: $Point$$Type, dimension1: $Dimension$$Type)
constructor(point0: $Point$$Type)
constructor(dimension0: $Dimension$$Type)
constructor(int0: integer, int1: integer)
constructor(rectangle0: $Rectangle$$Type)
constructor()

public "add"(int0: integer, int1: integer): void
public "add"(rectangle0: $Rectangle$$Type): void
public "add"(point0: $Point$$Type): void
public "contains"(rectangle0: $Rectangle$$Type): boolean
public "contains"(int0: integer, int1: integer): boolean
public "contains"(point0: $Point$$Type): boolean
public "contains"(int0: integer, int1: integer, int2: integer, int3: integer): boolean
public "contains"(double0: double, double1: double): boolean
public "contains"(rectangle2D0: $Rectangle2D$$Type): boolean
public "contains"(double0: double, double1: double, double2: double, double3: double): boolean
public "contains"(point2D0: $Point2D$$Type): boolean
public "getLocation"(): $Point
public "getPathIterator"(affineTransform0: $AffineTransform$$Type): $PathIterator
public "getPathIterator"(affineTransform0: $AffineTransform$$Type, double1: double): $PathIterator
public "getSize"(): $Dimension
public "grow"(int0: integer, int1: integer): void
/** @deprecated */
public "inside"(int0: integer, int1: integer): boolean
public "intersection"(rectangle0: $Rectangle$$Type): $Rectangle
public "intersects"(rectangle0: $Rectangle$$Type): boolean
public "intersects"(rectangle2D0: $Rectangle2D$$Type): boolean
public "intersects"(double0: double, double1: double, double2: double, double3: double): boolean
/** @deprecated */
public "move"(int0: integer, int1: integer): void
/** @deprecated */
public "reshape"(int0: integer, int1: integer, int2: integer, int3: integer): void
/** @deprecated */
public "resize"(int0: integer, int1: integer): void
public "setBounds"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "setBounds"(rectangle0: $Rectangle$$Type): void
public "setLocation"(int0: integer, int1: integer): void
public "setLocation"(point0: $Point$$Type): void
public "setSize"(int0: integer, int1: integer): void
public "setSize"(dimension0: $Dimension$$Type): void
public "translate"(int0: integer, int1: integer): void
public "union"(rectangle0: $Rectangle$$Type): $Rectangle
get "height"(): integer
set "height"(value: integer)
get "width"(): integer
set "width"(value: integer)
get "x"(): integer
set "x"(value: integer)
get "y"(): integer
set "y"(value: integer)
get "location"(): $Point
get "size"(): $Dimension
set "bounds"(value: $Rectangle$$Type)
set "location"(value: $Point$$Type)
set "size"(value: $Dimension$$Type)
}
}

declare module "java.awt.geom.Line2D" {
import { $Shape } from "java.awt.Shape"
import { $Rectangle } from "java.awt.Rectangle"
import { $Cloneable } from "java.lang.Cloneable"
import { $Point2D, $Point2D$$Type } from "java.awt.geom.Point2D"
import { $Rectangle2D, $Rectangle2D$$Type } from "java.awt.geom.Rectangle2D"
import { $AffineTransform$$Type } from "java.awt.geom.AffineTransform"
import { $PathIterator } from "java.awt.geom.PathIterator"

export class $Line2D implements $Shape, $Cloneable {
public "clone"(): any
public "contains"(point2D0: $Point2D$$Type): boolean
public "contains"(double0: double, double1: double): boolean
public "contains"(rectangle2D0: $Rectangle2D$$Type): boolean
public "contains"(double0: double, double1: double, double2: double, double3: double): boolean
public "getBounds"(): $Rectangle
public "getBounds2D"(): $Rectangle2D
public "getP1"(): $Point2D
public "getP2"(): $Point2D
public "getPathIterator"(affineTransform0: $AffineTransform$$Type): $PathIterator
public "getPathIterator"(affineTransform0: $AffineTransform$$Type, double1: double): $PathIterator
public "getX1"(): double
public "getX2"(): double
public "getY1"(): double
public "getY2"(): double
public "intersects"(double0: double, double1: double, double2: double, double3: double): boolean
public "intersects"(rectangle2D0: $Rectangle2D$$Type): boolean
public "intersectsLine"(line2D0: $Line2D$$Type): boolean
public "intersectsLine"(double0: double, double1: double, double2: double, double3: double): boolean
public static "linesIntersect"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double): boolean
public static "ptLineDist"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): double
public "ptLineDist"(point2D0: $Point2D$$Type): double
public "ptLineDist"(double0: double, double1: double): double
public "ptLineDistSq"(point2D0: $Point2D$$Type): double
public "ptLineDistSq"(double0: double, double1: double): double
public static "ptLineDistSq"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): double
public static "ptSegDist"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): double
public "ptSegDist"(point2D0: $Point2D$$Type): double
public "ptSegDist"(double0: double, double1: double): double
public static "ptSegDistSq"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): double
public "ptSegDistSq"(point2D0: $Point2D$$Type): double
public "ptSegDistSq"(double0: double, double1: double): double
public "relativeCCW"(double0: double, double1: double): integer
public static "relativeCCW"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): integer
public "relativeCCW"(point2D0: $Point2D$$Type): integer
public "setLine"(double0: double, double1: double, double2: double, double3: double): void
public "setLine"(line2D0: $Line2D$$Type): void
public "setLine"(point2D0: $Point2D$$Type, point2D1: $Point2D$$Type): void
get "bounds"(): $Rectangle
get "bounds2D"(): $Rectangle2D
get "p1"(): $Point2D
get "p2"(): $Point2D
get "x1"(): double
get "x2"(): double
get "y1"(): double
get "y2"(): double
set "line"(value: $Line2D$$Type)
}
}

declare module "java.awt.event.InputMethodEvent" {
import { $AWTEvent } from "java.awt.AWTEvent"
import { $AttributedCharacterIterator, $AttributedCharacterIterator$$Type } from "java.text.AttributedCharacterIterator"
import { $TextHitInfo, $TextHitInfo$$Type } from "java.awt.font.TextHitInfo"
import { $Component$$Type } from "java.awt.Component"

export class $InputMethodEvent extends $AWTEvent {
static readonly "CARET_POSITION_CHANGED": integer
static readonly "INPUT_METHOD_FIRST": integer
static readonly "INPUT_METHOD_LAST": integer
static readonly "INPUT_METHOD_TEXT_CHANGED": integer

constructor(component0: $Component$$Type, int1: integer, long2: long, attributedCharacterIterator3: $AttributedCharacterIterator$$Type, int4: integer, textHitInfo5: $TextHitInfo$$Type, textHitInfo6: $TextHitInfo$$Type)
constructor(component0: $Component$$Type, int1: integer, attributedCharacterIterator2: $AttributedCharacterIterator$$Type, int3: integer, textHitInfo4: $TextHitInfo$$Type, textHitInfo5: $TextHitInfo$$Type)
constructor(component0: $Component$$Type, int1: integer, textHitInfo2: $TextHitInfo$$Type, textHitInfo3: $TextHitInfo$$Type)

public "consume"(): void
public "getCaret"(): $TextHitInfo
public "getCommittedCharacterCount"(): integer
public "getText"(): $AttributedCharacterIterator
public "getVisiblePosition"(): $TextHitInfo
public "getWhen"(): long
public "isConsumed"(): boolean
get "caret"(): $TextHitInfo
get "committedCharacterCount"(): integer
get "text"(): $AttributedCharacterIterator
get "visiblePosition"(): $TextHitInfo
get "when"(): long
get "consumed"(): boolean
}
}

declare module "java.awt.image.WritableRenderedImage" {
import { $Rectangle$$Type } from "java.awt.Rectangle"
import { $Vector } from "java.util.Vector"
import { $ColorModel } from "java.awt.image.ColorModel"
import { $RenderedImage } from "java.awt.image.RenderedImage"
import { $Raster, $Raster$$Type } from "java.awt.image.Raster"
import { $WritableRaster, $WritableRaster$$Type } from "java.awt.image.WritableRaster"
import { $Point } from "java.awt.Point"
import { $TileObserver$$Type } from "java.awt.image.TileObserver"
import { $SampleModel } from "java.awt.image.SampleModel"

export interface $WritableRenderedImage extends $RenderedImage {
"addTileObserver"(tileObserver0: $TileObserver$$Type): void
"copyData"(writableRaster0: $WritableRaster$$Type): $WritableRaster
"getColorModel"(): $ColorModel
"getData"(rectangle0: $Rectangle$$Type): $Raster
"getData"(): $Raster
"getHeight"(): integer
"getMinTileX"(): integer
"getMinTileY"(): integer
"getMinX"(): integer
"getMinY"(): integer
"getNumXTiles"(): integer
"getNumYTiles"(): integer
"getProperty"(string0: string): any
"getPropertyNames"(): string[]
"getSampleModel"(): $SampleModel
"getSources"(): $Vector<$RenderedImage>
"getTile"(int0: integer, int1: integer): $Raster
"getTileGridXOffset"(): integer
"getTileGridYOffset"(): integer
"getTileHeight"(): integer
"getTileWidth"(): integer
"getWidth"(): integer
"getWritableTile"(int0: integer, int1: integer): $WritableRaster
"getWritableTileIndices"(): $Point[]
"hasTileWriters"(): boolean
"isTileWritable"(int0: integer, int1: integer): boolean
"releaseWritableTile"(int0: integer, int1: integer): void
"removeTileObserver"(tileObserver0: $TileObserver$$Type): void
"setData"(raster0: $Raster$$Type): void
get "colorModel"(): $ColorModel
get "data"(): $Raster
get "height"(): integer
get "minTileX"(): integer
get "minTileY"(): integer
get "minX"(): integer
get "minY"(): integer
get "numXTiles"(): integer
get "numYTiles"(): integer
get "propertyNames"(): string[]
get "sampleModel"(): $SampleModel
get "sources"(): $Vector<$RenderedImage>
get "tileGridXOffset"(): integer
get "tileGridYOffset"(): integer
get "tileHeight"(): integer
get "tileWidth"(): integer
get "width"(): integer
get "writableTileIndices"(): $Point[]
set "data"(value: $Raster$$Type)
}

export namespace $WritableRenderedImage {
const probejs$$marker: never
}
export abstract class $WritableRenderedImage$$Static implements $WritableRenderedImage {
}
}

declare module "java.awt.image.IndexColorModel" {
import { $ColorModel } from "java.awt.image.ColorModel"
import { $BufferedImage } from "java.awt.image.BufferedImage"
import { $Raster$$Type } from "java.awt.image.Raster"
import { $BigInteger, $BigInteger$$Type } from "java.math.BigInteger"

export class $IndexColorModel extends $ColorModel {
constructor(int0: integer, int1: integer, byte2s: byte[], int3: integer, boolean4: boolean)
constructor(int0: integer, int1: integer, byte2s: byte[], byte3s: byte[], byte4s: byte[], byte5s: byte[])
constructor(int0: integer, int1: integer, byte2s: byte[], byte3s: byte[], byte4s: byte[], int5: integer)
constructor(int0: integer, int1: integer, byte2s: byte[], byte3s: byte[], byte4s: byte[])
constructor(int0: integer, int1: integer, int2s: integer[], int3: integer, int4: integer, bigInteger5: $BigInteger$$Type)
constructor(int0: integer, int1: integer, int2s: integer[], int3: integer, boolean4: boolean, int5: integer, int6: integer)
constructor(int0: integer, int1: integer, byte2s: byte[], int3: integer, boolean4: boolean, int5: integer)

public "convertToIntDiscrete"(raster0: $Raster$$Type, boolean1: boolean): $BufferedImage
public "getAlphas"(byte0s: byte[]): void
public "getBlues"(byte0s: byte[]): void
public "getGreens"(byte0s: byte[]): void
public "getMapSize"(): integer
public "getRGBs"(int0s: integer[]): void
public "getReds"(byte0s: byte[]): void
public "getTransparentPixel"(): integer
public "getValidPixels"(): $BigInteger
public "isValid"(int0: integer): boolean
public "isValid"(): boolean
get "mapSize"(): integer
get "transparentPixel"(): integer
get "validPixels"(): $BigInteger
get "valid"(): boolean
}
}

declare module "java.awt.event.MouseMotionListener" {
import { $EventListener } from "java.util.EventListener"
import { $MouseEvent$$Type } from "java.awt.event.MouseEvent"

export interface $MouseMotionListener extends $EventListener {
"mouseDragged"(mouseEvent0: $MouseEvent$$Type): void
"mouseMoved"(mouseEvent0: $MouseEvent$$Type): void
}

export namespace $MouseMotionListener {
const probejs$$marker: never
}
export abstract class $MouseMotionListener$$Static implements $MouseMotionListener {
}
}

declare module "java.awt.dnd.DropTargetListener" {
import { $EventListener } from "java.util.EventListener"
import { $DropTargetDragEvent$$Type } from "java.awt.dnd.DropTargetDragEvent"
import { $DropTargetEvent$$Type } from "java.awt.dnd.DropTargetEvent"
import { $DropTargetDropEvent$$Type } from "java.awt.dnd.DropTargetDropEvent"

export interface $DropTargetListener extends $EventListener {
"dragEnter"(dropTargetDragEvent0: $DropTargetDragEvent$$Type): void
"dragExit"(dropTargetEvent0: $DropTargetEvent$$Type): void
"dragOver"(dropTargetDragEvent0: $DropTargetDragEvent$$Type): void
"drop"(dropTargetDropEvent0: $DropTargetDropEvent$$Type): void
"dropActionChanged"(dropTargetDragEvent0: $DropTargetDragEvent$$Type): void
}

export namespace $DropTargetListener {
const probejs$$marker: never
}
export abstract class $DropTargetListener$$Static implements $DropTargetListener {
}
}

declare module "java.awt.image.renderable.RenderContext" {
import { $Shape, $Shape$$Type } from "java.awt.Shape"
import { $Cloneable } from "java.lang.Cloneable"
import { $RenderingHints, $RenderingHints$$Type } from "java.awt.RenderingHints"
import { $AffineTransform, $AffineTransform$$Type } from "java.awt.geom.AffineTransform"

export class $RenderContext implements $Cloneable {
constructor(affineTransform0: $AffineTransform$$Type)
constructor(affineTransform0: $AffineTransform$$Type, renderingHints1: $RenderingHints$$Type)
constructor(affineTransform0: $AffineTransform$$Type, shape1: $Shape$$Type)
constructor(affineTransform0: $AffineTransform$$Type, shape1: $Shape$$Type, renderingHints2: $RenderingHints$$Type)

public "clone"(): any
public "concatenateTransform"(affineTransform0: $AffineTransform$$Type): void
/** @deprecated */
public "concetenateTransform"(affineTransform0: $AffineTransform$$Type): void
public "getAreaOfInterest"(): $Shape
public "getRenderingHints"(): $RenderingHints
public "getTransform"(): $AffineTransform
public "preConcatenateTransform"(affineTransform0: $AffineTransform$$Type): void
/** @deprecated */
public "preConcetenateTransform"(affineTransform0: $AffineTransform$$Type): void
public "setAreaOfInterest"(shape0: $Shape$$Type): void
public "setRenderingHints"(renderingHints0: $RenderingHints$$Type): void
public "setTransform"(affineTransform0: $AffineTransform$$Type): void
get "areaOfInterest"(): $Shape
get "renderingHints"(): $RenderingHints
get "transform"(): $AffineTransform
set "areaOfInterest"(value: $Shape$$Type)
set "renderingHints"(value: $RenderingHints$$Type)
set "transform"(value: $AffineTransform$$Type)
}
}

declare module "java.awt.Paint" {
import { $Rectangle$$Type } from "java.awt.Rectangle"
import { $Transparency } from "java.awt.Transparency"
import { $ColorModel$$Type } from "java.awt.image.ColorModel"
import { $Rectangle2D$$Type } from "java.awt.geom.Rectangle2D"
import { $RenderingHints$$Type } from "java.awt.RenderingHints"
import { $PaintContext } from "java.awt.PaintContext"
import { $AffineTransform$$Type } from "java.awt.geom.AffineTransform"

export interface $Paint extends $Transparency {
"createContext"(colorModel0: $ColorModel$$Type, rectangle1: $Rectangle$$Type, rectangle2D2: $Rectangle2D$$Type, affineTransform3: $AffineTransform$$Type, renderingHints4: $RenderingHints$$Type): $PaintContext
"getTransparency"(): integer
get "transparency"(): integer
}

export namespace $Paint {
const probejs$$marker: never
}
export abstract class $Paint$$Static implements $Paint {
}
}

declare module "java.awt.Toolkit" {
import { $Insets } from "java.awt.Insets"
import { $URL$$Type } from "java.net.URL"
import { $TextAttribute } from "java.awt.font.TextAttribute"
import { $Cursor } from "java.awt.Cursor"
import { $Point$$Type } from "java.awt.Point"
import { $ImageObserver$$Type } from "java.awt.image.ImageObserver"
import { $ImageProducer$$Type } from "java.awt.image.ImageProducer"
import { $JobAttributes$$Type } from "java.awt.JobAttributes"
import { $Dialog$ModalityType$$Type } from "java.awt.Dialog$ModalityType"
import { $DragGestureRecognizer, $DragGestureRecognizer$$Type } from "java.awt.dnd.DragGestureRecognizer"
import { $Map } from "java.util.Map"
import { $DragGestureListener$$Type } from "java.awt.dnd.DragGestureListener"
import { $Clipboard } from "java.awt.datatransfer.Clipboard"
import { $EventQueue } from "java.awt.EventQueue"
import { $GraphicsConfiguration$$Type } from "java.awt.GraphicsConfiguration"
import { $Frame$$Type } from "java.awt.Frame"
import { $Properties$$Type } from "java.util.Properties"
import { $Image, $Image$$Type } from "java.awt.Image"
import { $DragSource$$Type } from "java.awt.dnd.DragSource"
import { $Font$$Type } from "java.awt.Font"
import { $Component$$Type } from "java.awt.Component"
import { $Dimension } from "java.awt.Dimension"
import { $PageAttributes$$Type } from "java.awt.PageAttributes"
import { $FontMetrics } from "java.awt.FontMetrics"
import { $PropertyChangeListener, $PropertyChangeListener$$Type } from "java.beans.PropertyChangeListener"
import { $ColorModel } from "java.awt.image.ColorModel"
import { $PrintJob } from "java.awt.PrintJob"
import { $Class$$Type } from "java.lang.Class"
import { $Dialog$ModalExclusionType$$Type } from "java.awt.Dialog$ModalExclusionType"
import { $AWTEventListener, $AWTEventListener$$Type } from "java.awt.event.AWTEventListener"
import { $InputMethodHighlight$$Type } from "java.awt.im.InputMethodHighlight"

export class $Toolkit {
public "addAWTEventListener"(aWTEventListener0: $AWTEventListener$$Type, long1: long): void
public "addPropertyChangeListener"(string0: string, propertyChangeListener1: $PropertyChangeListener$$Type): void
public "areExtraMouseButtonsEnabled"(): boolean
public "beep"(): void
public "checkImage"(image0: $Image$$Type, int1: integer, int2: integer, imageObserver3: $ImageObserver$$Type): integer
public "createCustomCursor"(image0: $Image$$Type, point1: $Point$$Type, string2: string): $Cursor
public "createDragGestureRecognizer"<T extends $DragGestureRecognizer>(class0: $Class$$Type<T>, dragSource1: $DragSource$$Type, component2: $Component$$Type, int3: integer, dragGestureListener4: $DragGestureListener$$Type): T
public "createImage"(byte0s: byte[], int1: integer, int2: integer): $Image
public "createImage"(byte0s: byte[]): $Image
public "createImage"(imageProducer0: $ImageProducer$$Type): $Image
public "createImage"(string0: string): $Image
public "createImage"(uRL0: $URL$$Type): $Image
public "getAWTEventListeners"(long0: long): $AWTEventListener[]
public "getAWTEventListeners"(): $AWTEventListener[]
public "getBestCursorSize"(int0: integer, int1: integer): $Dimension
public "getColorModel"(): $ColorModel
public static "getDefaultToolkit"(): $Toolkit
public "getDesktopProperty"(string0: string): any
/** @deprecated */
public "getFontList"(): string[]
/** @deprecated */
public "getFontMetrics"(font0: $Font$$Type): $FontMetrics
public "getImage"(string0: string): $Image
public "getImage"(uRL0: $URL$$Type): $Image
public "getLockingKeyState"(int0: integer): boolean
public "getMaximumCursorColors"(): integer
/** @deprecated */
public "getMenuShortcutKeyMask"(): integer
public "getMenuShortcutKeyMaskEx"(): integer
public "getPrintJob"(frame0: $Frame$$Type, string1: string, jobAttributes2: $JobAttributes$$Type, pageAttributes3: $PageAttributes$$Type): $PrintJob
public "getPrintJob"(frame0: $Frame$$Type, string1: string, properties2: $Properties$$Type): $PrintJob
public static "getProperty"(string0: string, string1: string): string
public "getPropertyChangeListeners"(string0: string): $PropertyChangeListener[]
public "getPropertyChangeListeners"(): $PropertyChangeListener[]
public "getScreenInsets"(graphicsConfiguration0: $GraphicsConfiguration$$Type): $Insets
public "getScreenResolution"(): integer
public "getScreenSize"(): $Dimension
public "getSystemClipboard"(): $Clipboard
public "getSystemEventQueue"(): $EventQueue
public "getSystemSelection"(): $Clipboard
public "isAlwaysOnTopSupported"(): boolean
public "isDynamicLayoutActive"(): boolean
public "isFrameStateSupported"(int0: integer): boolean
public "isModalExclusionTypeSupported"(modalExclusionType0: $Dialog$ModalExclusionType$$Type): boolean
public "isModalityTypeSupported"(modalityType0: $Dialog$ModalityType$$Type): boolean
public "mapInputMethodHighlight"(inputMethodHighlight0: $InputMethodHighlight$$Type): $Map<$TextAttribute, any>
public "prepareImage"(image0: $Image$$Type, int1: integer, int2: integer, imageObserver3: $ImageObserver$$Type): boolean
public "removeAWTEventListener"(aWTEventListener0: $AWTEventListener$$Type): void
public "removePropertyChangeListener"(string0: string, propertyChangeListener1: $PropertyChangeListener$$Type): void
public "setDynamicLayout"(boolean0: boolean): void
public "setLockingKeyState"(int0: integer, boolean1: boolean): void
public "sync"(): void
get "aWTEventListeners"(): $AWTEventListener[]
get "colorModel"(): $ColorModel
get "fontList"(): string[]
get "maximumCursorColors"(): integer
get "menuShortcutKeyMask"(): integer
get "menuShortcutKeyMaskEx"(): integer
get "propertyChangeListeners"(): $PropertyChangeListener[]
get "screenResolution"(): integer
get "screenSize"(): $Dimension
get "systemClipboard"(): $Clipboard
get "systemEventQueue"(): $EventQueue
get "systemSelection"(): $Clipboard
get "alwaysOnTopSupported"(): boolean
get "dynamicLayoutActive"(): boolean
set "dynamicLayout"(value: boolean)
}
}

declare module "java.awt.event.FocusListener" {
import { $EventListener } from "java.util.EventListener"
import { $FocusEvent$$Type } from "java.awt.event.FocusEvent"

export interface $FocusListener extends $EventListener {
"focusGained"(focusEvent0: $FocusEvent$$Type): void
"focusLost"(focusEvent0: $FocusEvent$$Type): void
}

export namespace $FocusListener {
const probejs$$marker: never
}
export abstract class $FocusListener$$Static implements $FocusListener {
}
}

declare module "java.awt.MenuContainer" {
import { $Font } from "java.awt.Font"
import { $Event$$Type } from "java.awt.Event"
import { $MenuComponent$$Type } from "java.awt.MenuComponent"

export interface $MenuContainer {
"getFont"(): $Font
/** @deprecated */
"postEvent"(event0: $Event$$Type): boolean
"remove"(menuComponent0: $MenuComponent$$Type): void
get "font"(): $Font
}

export namespace $MenuContainer {
const probejs$$marker: never
}
export abstract class $MenuContainer$$Static implements $MenuContainer {
}
}

declare module "java.awt.dnd.DragGestureRecognizer" {
import { $DragGestureListener$$Type } from "java.awt.dnd.DragGestureListener"
import { $InputEvent } from "java.awt.event.InputEvent"
import { $DragSource } from "java.awt.dnd.DragSource"
import { $Component, $Component$$Type } from "java.awt.Component"
import { $Serializable } from "java.io.Serializable"

export class $DragGestureRecognizer implements $Serializable {
public "addDragGestureListener"(dragGestureListener0: $DragGestureListener$$Type): void
public "getComponent"(): $Component
public "getDragSource"(): $DragSource
public "getSourceActions"(): integer
public "getTriggerEvent"(): $InputEvent
public "removeDragGestureListener"(dragGestureListener0: $DragGestureListener$$Type): void
public "resetRecognizer"(): void
public "setComponent"(component0: $Component$$Type): void
public "setSourceActions"(int0: integer): void
get "component"(): $Component
get "dragSource"(): $DragSource
get "sourceActions"(): integer
get "triggerEvent"(): $InputEvent
set "component"(value: $Component$$Type)
set "sourceActions"(value: integer)
}
}

declare module "java.awt.image.VolatileImage" {
import { $GraphicsConfiguration$$Type } from "java.awt.GraphicsConfiguration"
import { $Transparency } from "java.awt.Transparency"
import { $Graphics2D } from "java.awt.Graphics2D"
import { $BufferedImage } from "java.awt.image.BufferedImage"
import { $Image } from "java.awt.Image"
import { $ImageCapabilities } from "java.awt.ImageCapabilities"

export class $VolatileImage extends $Image implements $Transparency {
static readonly "IMAGE_INCOMPATIBLE": integer
static readonly "IMAGE_OK": integer
static readonly "IMAGE_RESTORED": integer

public "contentsLost"(): boolean
public "createGraphics"(): $Graphics2D
public "getCapabilities"(): $ImageCapabilities
public "getHeight"(): integer
public "getSnapshot"(): $BufferedImage
public "getTransparency"(): integer
public "getWidth"(): integer
public "validate"(graphicsConfiguration0: $GraphicsConfiguration$$Type): integer
get "capabilities"(): $ImageCapabilities
get "height"(): integer
get "snapshot"(): $BufferedImage
get "transparency"(): integer
get "width"(): integer
}
}

declare module "java.awt.Graphics" {
import { $Color, $Color$$Type } from "java.awt.Color"
import { $Shape, $Shape$$Type } from "java.awt.Shape"
import { $Polygon$$Type } from "java.awt.Polygon"
import { $Rectangle, $Rectangle$$Type } from "java.awt.Rectangle"
import { $FontMetrics } from "java.awt.FontMetrics"
import { $AttributedCharacterIterator$$Type } from "java.text.AttributedCharacterIterator"
import { $Image$$Type } from "java.awt.Image"
import { $Font, $Font$$Type } from "java.awt.Font"
import { $ImageObserver$$Type } from "java.awt.image.ImageObserver"

export class $Graphics {
public "clearRect"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "clipRect"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "copyArea"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): void
public "create"(int0: integer, int1: integer, int2: integer, int3: integer): $Graphics
public "create"(): $Graphics
public "dispose"(): void
public "draw3DRect"(int0: integer, int1: integer, int2: integer, int3: integer, boolean4: boolean): void
public "drawArc"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): void
public "drawBytes"(byte0s: byte[], int1: integer, int2: integer, int3: integer, int4: integer): void
public "drawChars"(char0s: character[], int1: integer, int2: integer, int3: integer, int4: integer): void
public "drawImage"(image0: $Image$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, imageObserver9: $ImageObserver$$Type): boolean
public "drawImage"(image0: $Image$$Type, int1: integer, int2: integer, imageObserver3: $ImageObserver$$Type): boolean
public "drawImage"(image0: $Image$$Type, int1: integer, int2: integer, int3: integer, int4: integer, color5: $Color$$Type, imageObserver6: $ImageObserver$$Type): boolean
public "drawImage"(image0: $Image$$Type, int1: integer, int2: integer, color3: $Color$$Type, imageObserver4: $ImageObserver$$Type): boolean
public "drawImage"(image0: $Image$$Type, int1: integer, int2: integer, int3: integer, int4: integer, imageObserver5: $ImageObserver$$Type): boolean
public "drawImage"(image0: $Image$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, color9: $Color$$Type, imageObserver10: $ImageObserver$$Type): boolean
public "drawLine"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "drawOval"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "drawPolygon"(polygon0: $Polygon$$Type): void
public "drawPolygon"(int0s: integer[], int1s: integer[], int2: integer): void
public "drawPolyline"(int0s: integer[], int1s: integer[], int2: integer): void
public "drawRect"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "drawRoundRect"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): void
public "drawString"(string0: string, int1: integer, int2: integer): void
public "drawString"(attributedCharacterIterator0: $AttributedCharacterIterator$$Type, int1: integer, int2: integer): void
public "fill3DRect"(int0: integer, int1: integer, int2: integer, int3: integer, boolean4: boolean): void
public "fillArc"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): void
public "fillOval"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "fillPolygon"(polygon0: $Polygon$$Type): void
public "fillPolygon"(int0s: integer[], int1s: integer[], int2: integer): void
public "fillRect"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "fillRoundRect"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): void
/** @deprecated */
public "finalize"(): void
public "getClip"(): $Shape
public "getClipBounds"(): $Rectangle
public "getClipBounds"(rectangle0: $Rectangle$$Type): $Rectangle
/** @deprecated */
public "getClipRect"(): $Rectangle
public "getColor"(): $Color
public "getFont"(): $Font
public "getFontMetrics"(): $FontMetrics
public "getFontMetrics"(font0: $Font$$Type): $FontMetrics
public "hitClip"(int0: integer, int1: integer, int2: integer, int3: integer): boolean
public "setClip"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "setClip"(shape0: $Shape$$Type): void
public "setColor"(color0: $Color$$Type): void
public "setFont"(font0: $Font$$Type): void
public "setPaintMode"(): void
public "setXORMode"(color0: $Color$$Type): void
public "translate"(int0: integer, int1: integer): void
get "clip"(): $Shape
get "clipBounds"(): $Rectangle
get "color"(): $Color
get "font"(): $Font
get "fontMetrics"(): $FontMetrics
set "clip"(value: $Shape$$Type)
set "color"(value: $Color$$Type)
set "font"(value: $Font$$Type)
set "xORMode"(value: $Color$$Type)
}
}

declare module "java.awt.dnd.DragSourceEvent" {
import { $DragSourceContext, $DragSourceContext$$Type } from "java.awt.dnd.DragSourceContext"
import { $Point } from "java.awt.Point"
import { $EventObject } from "java.util.EventObject"

export class $DragSourceEvent extends $EventObject {
constructor(dragSourceContext0: $DragSourceContext$$Type)
constructor(dragSourceContext0: $DragSourceContext$$Type, int1: integer, int2: integer)

public "getDragSourceContext"(): $DragSourceContext
public "getLocation"(): $Point
public "getX"(): integer
public "getY"(): integer
get "dragSourceContext"(): $DragSourceContext
get "location"(): $Point
get "x"(): integer
get "y"(): integer
}
}

declare module "java.awt.geom.Point2D" {
import { $Cloneable } from "java.lang.Cloneable"

export class $Point2D implements $Cloneable {
public "clone"(): any
public "distance"(point2D0: $Point2D$$Type): double
public "distance"(double0: double, double1: double): double
public static "distance"(double0: double, double1: double, double2: double, double3: double): double
public "distanceSq"(double0: double, double1: double): double
public "distanceSq"(point2D0: $Point2D$$Type): double
public static "distanceSq"(double0: double, double1: double, double2: double, double3: double): double
public "getX"(): double
public "getY"(): double
public "setLocation"(point2D0: $Point2D$$Type): void
public "setLocation"(double0: double, double1: double): void
get "x"(): double
get "y"(): double
set "location"(value: $Point2D$$Type)
}
}

declare module "java.awt.image.RenderedImage" {
import { $Rectangle$$Type } from "java.awt.Rectangle"
import { $Vector } from "java.util.Vector"
import { $ColorModel } from "java.awt.image.ColorModel"
import { $Raster } from "java.awt.image.Raster"
import { $WritableRaster, $WritableRaster$$Type } from "java.awt.image.WritableRaster"
import { $SampleModel } from "java.awt.image.SampleModel"

export interface $RenderedImage {
"copyData"(writableRaster0: $WritableRaster$$Type): $WritableRaster
"getColorModel"(): $ColorModel
"getData"(rectangle0: $Rectangle$$Type): $Raster
"getData"(): $Raster
"getHeight"(): integer
"getMinTileX"(): integer
"getMinTileY"(): integer
"getMinX"(): integer
"getMinY"(): integer
"getNumXTiles"(): integer
"getNumYTiles"(): integer
"getProperty"(string0: string): any
"getPropertyNames"(): string[]
"getSampleModel"(): $SampleModel
"getSources"(): $Vector<$RenderedImage>
"getTile"(int0: integer, int1: integer): $Raster
"getTileGridXOffset"(): integer
"getTileGridYOffset"(): integer
"getTileHeight"(): integer
"getTileWidth"(): integer
"getWidth"(): integer
get "colorModel"(): $ColorModel
get "data"(): $Raster
get "height"(): integer
get "minTileX"(): integer
get "minTileY"(): integer
get "minX"(): integer
get "minY"(): integer
get "numXTiles"(): integer
get "numYTiles"(): integer
get "propertyNames"(): string[]
get "sampleModel"(): $SampleModel
get "sources"(): $Vector<$RenderedImage>
get "tileGridXOffset"(): integer
get "tileGridYOffset"(): integer
get "tileHeight"(): integer
get "tileWidth"(): integer
get "width"(): integer
}

export namespace $RenderedImage {
const probejs$$marker: never
}
export abstract class $RenderedImage$$Static implements $RenderedImage {
}
}

declare module "java.awt.im.InputMethodRequests" {
import { $Rectangle } from "java.awt.Rectangle"
import { $AttributedCharacterIterator$Attribute$$Type } from "java.text.AttributedCharacterIterator$Attribute"
import { $AttributedCharacterIterator } from "java.text.AttributedCharacterIterator"
import { $TextHitInfo, $TextHitInfo$$Type } from "java.awt.font.TextHitInfo"

export interface $InputMethodRequests {
"cancelLatestCommittedText"(attribute0s: $AttributedCharacterIterator$Attribute$$Type[]): $AttributedCharacterIterator
"getCommittedText"(int0: integer, int1: integer, attribute2s: $AttributedCharacterIterator$Attribute$$Type[]): $AttributedCharacterIterator
"getCommittedTextLength"(): integer
"getInsertPositionOffset"(): integer
"getLocationOffset"(int0: integer, int1: integer): $TextHitInfo
"getSelectedText"(attribute0s: $AttributedCharacterIterator$Attribute$$Type[]): $AttributedCharacterIterator
"getTextLocation"(textHitInfo0: $TextHitInfo$$Type): $Rectangle
get "committedTextLength"(): integer
get "insertPositionOffset"(): integer
}

export namespace $InputMethodRequests {
const probejs$$marker: never
}
export abstract class $InputMethodRequests$$Static implements $InputMethodRequests {
}
}

declare module "java.awt.GraphicsDevice$WindowTranslucency" {
import { $Enum } from "java.lang.Enum"

export class $GraphicsDevice$WindowTranslucency extends $Enum<$GraphicsDevice$WindowTranslucency> {
static readonly "PERPIXEL_TRANSLUCENT": $GraphicsDevice$WindowTranslucency
static readonly "PERPIXEL_TRANSPARENT": $GraphicsDevice$WindowTranslucency
static readonly "TRANSLUCENT": $GraphicsDevice$WindowTranslucency

public static "valueOf"(string0: string): $GraphicsDevice$WindowTranslucency
public static "values"(): $GraphicsDevice$WindowTranslucency[]
}
}

declare module "java.awt.dnd.DragSourceListener" {
import { $EventListener } from "java.util.EventListener"
import { $DragSourceDragEvent$$Type } from "java.awt.dnd.DragSourceDragEvent"
import { $DragSourceEvent$$Type } from "java.awt.dnd.DragSourceEvent"
import { $DragSourceDropEvent$$Type } from "java.awt.dnd.DragSourceDropEvent"

export interface $DragSourceListener extends $EventListener {
"dragDropEnd"(dragSourceDropEvent0: $DragSourceDropEvent$$Type): void
"dragEnter"(dragSourceDragEvent0: $DragSourceDragEvent$$Type): void
"dragExit"(dragSourceEvent0: $DragSourceEvent$$Type): void
"dragOver"(dragSourceDragEvent0: $DragSourceDragEvent$$Type): void
"dropActionChanged"(dragSourceDragEvent0: $DragSourceDragEvent$$Type): void
}

export namespace $DragSourceListener {
const probejs$$marker: never
}
export abstract class $DragSourceListener$$Static implements $DragSourceListener {
}
}

declare module "java.awt.datatransfer.DataFlavor" {
import { $Cloneable } from "java.lang.Cloneable"
import { $Externalizable } from "java.io.Externalizable"
import { $ObjectOutput$$Type } from "java.io.ObjectOutput"
import { $Transferable$$Type } from "java.awt.datatransfer.Transferable"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $ObjectInput$$Type } from "java.io.ObjectInput"
import { $ClassLoader$$Type } from "java.lang.ClassLoader"
import { $Reader } from "java.io.Reader"

export class $DataFlavor implements $Externalizable, $Cloneable {
static readonly "allHtmlFlavor": $DataFlavor
static readonly "fragmentHtmlFlavor": $DataFlavor
static readonly "imageFlavor": $DataFlavor
static readonly "javaFileListFlavor": $DataFlavor
static readonly "javaJVMLocalObjectMimeType": string
static readonly "javaRemoteObjectMimeType": string
static readonly "javaSerializedObjectMimeType": string
/** @deprecated */
static readonly "plainTextFlavor": $DataFlavor
static readonly "selectionHtmlFlavor": $DataFlavor
static readonly "stringFlavor": $DataFlavor

constructor()
constructor(class0: $Class$$Type<any>, string1: string)
constructor(string0: string, string1: string)
constructor(string0: string, string1: string, classLoader2: $ClassLoader$$Type)
constructor(string0: string)

public "clone"(): any
public "equals"(dataFlavor0: $DataFlavor$$Type): boolean
/** @deprecated */
public "equals"(string0: string): boolean
public "getDefaultRepresentationClass"(): $Class<any>
public "getDefaultRepresentationClassAsString"(): string
public "getHumanPresentableName"(): string
public "getMimeType"(): string
public "getParameter"(string0: string): string
public "getPrimaryType"(): string
public "getReaderForText"(transferable0: $Transferable$$Type): $Reader
public "getRepresentationClass"(): $Class<any>
public "getSubType"(): string
public static "getTextPlainUnicodeFlavor"(): $DataFlavor
public "isFlavorJavaFileListType"(): boolean
public "isFlavorRemoteObjectType"(): boolean
public "isFlavorSerializedObjectType"(): boolean
public "isFlavorTextType"(): boolean
public "isMimeTypeEqual"(dataFlavor0: $DataFlavor$$Type): boolean
public "isMimeTypeEqual"(string0: string): boolean
public "isMimeTypeSerializedObject"(): boolean
public "isRepresentationClassByteBuffer"(): boolean
public "isRepresentationClassCharBuffer"(): boolean
public "isRepresentationClassInputStream"(): boolean
public "isRepresentationClassReader"(): boolean
public "isRepresentationClassRemote"(): boolean
public "isRepresentationClassSerializable"(): boolean
public "match"(dataFlavor0: $DataFlavor$$Type): boolean
public "readExternal"(objectInput0: $ObjectInput$$Type): void
public static "selectBestTextFlavor"(dataFlavor0s: $DataFlavor$$Type[]): $DataFlavor
public "setHumanPresentableName"(string0: string): void
public "writeExternal"(objectOutput0: $ObjectOutput$$Type): void
get "defaultRepresentationClass"(): $Class<any>
get "defaultRepresentationClassAsString"(): string
get "humanPresentableName"(): string
get "mimeType"(): string
get "primaryType"(): string
get "representationClass"(): $Class<any>
get "subType"(): string
get "flavorJavaFileListType"(): boolean
get "flavorRemoteObjectType"(): boolean
get "flavorSerializedObjectType"(): boolean
get "flavorTextType"(): boolean
get "mimeTypeSerializedObject"(): boolean
get "representationClassByteBuffer"(): boolean
get "representationClassCharBuffer"(): boolean
get "representationClassInputStream"(): boolean
get "representationClassReader"(): boolean
get "representationClassRemote"(): boolean
get "representationClassSerializable"(): boolean
set "humanPresentableName"(value: string)
}
}

declare module "java.awt.event.MouseWheelListener" {
import { $EventListener } from "java.util.EventListener"
import { $MouseWheelEvent$$Type } from "java.awt.event.MouseWheelEvent"

export interface $MouseWheelListener extends $EventListener {
"mouseWheelMoved"(mouseWheelEvent0: $MouseWheelEvent$$Type): void
}

export namespace $MouseWheelListener {
const probejs$$marker: never
}
export abstract class $MouseWheelListener$$Static implements $MouseWheelListener {
}
}

declare module "java.awt.event.ComponentListener" {
import { $EventListener } from "java.util.EventListener"
import { $ComponentEvent$$Type } from "java.awt.event.ComponentEvent"

export interface $ComponentListener extends $EventListener {
"componentHidden"(componentEvent0: $ComponentEvent$$Type): void
"componentMoved"(componentEvent0: $ComponentEvent$$Type): void
"componentResized"(componentEvent0: $ComponentEvent$$Type): void
"componentShown"(componentEvent0: $ComponentEvent$$Type): void
}

export namespace $ComponentListener {
const probejs$$marker: never
}
export abstract class $ComponentListener$$Static implements $ComponentListener {
}
}

declare module "java.awt.Component$BaselineResizeBehavior" {
import { $Enum } from "java.lang.Enum"

export class $Component$BaselineResizeBehavior extends $Enum<$Component$BaselineResizeBehavior> {
static readonly "CENTER_OFFSET": $Component$BaselineResizeBehavior
static readonly "CONSTANT_ASCENT": $Component$BaselineResizeBehavior
static readonly "CONSTANT_DESCENT": $Component$BaselineResizeBehavior
static readonly "OTHER": $Component$BaselineResizeBehavior

public static "valueOf"(string0: string): $Component$BaselineResizeBehavior
public static "values"(): $Component$BaselineResizeBehavior[]
}
}

declare module "java.awt.event.KeyListener" {
import { $EventListener } from "java.util.EventListener"
import { $KeyEvent$$Type } from "java.awt.event.KeyEvent"

export interface $KeyListener extends $EventListener {
"keyPressed"(keyEvent0: $KeyEvent$$Type): void
"keyReleased"(keyEvent0: $KeyEvent$$Type): void
"keyTyped"(keyEvent0: $KeyEvent$$Type): void
}

export namespace $KeyListener {
const probejs$$marker: never
}
export abstract class $KeyListener$$Static implements $KeyListener {
}
}

declare module "java.awt.RenderingHints$Key" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $RenderingHints$Key {
public "isCompatibleValue"(object0: any): boolean
}
}

declare module "java.awt.color.ColorSpace" {
import { $Serializable } from "java.io.Serializable"

export class $ColorSpace implements $Serializable {
static readonly "CS_CIEXYZ": integer
static readonly "CS_GRAY": integer
static readonly "CS_LINEAR_RGB": integer
static readonly "CS_PYCC": integer
static readonly "CS_sRGB": integer
static readonly "TYPE_2CLR": integer
static readonly "TYPE_3CLR": integer
static readonly "TYPE_4CLR": integer
static readonly "TYPE_5CLR": integer
static readonly "TYPE_6CLR": integer
static readonly "TYPE_7CLR": integer
static readonly "TYPE_8CLR": integer
static readonly "TYPE_9CLR": integer
static readonly "TYPE_ACLR": integer
static readonly "TYPE_BCLR": integer
static readonly "TYPE_CCLR": integer
static readonly "TYPE_CMY": integer
static readonly "TYPE_CMYK": integer
static readonly "TYPE_DCLR": integer
static readonly "TYPE_ECLR": integer
static readonly "TYPE_FCLR": integer
static readonly "TYPE_GRAY": integer
static readonly "TYPE_HLS": integer
static readonly "TYPE_HSV": integer
static readonly "TYPE_Lab": integer
static readonly "TYPE_Luv": integer
static readonly "TYPE_RGB": integer
static readonly "TYPE_XYZ": integer
static readonly "TYPE_YCbCr": integer
static readonly "TYPE_Yxy": integer

public "fromCIEXYZ"(float0s: float[]): float[]
public "fromRGB"(float0s: float[]): float[]
public static "getInstance"(int0: integer): $ColorSpace
public "getMaxValue"(int0: integer): float
public "getMinValue"(int0: integer): float
public "getName"(int0: integer): string
public "getNumComponents"(): integer
public "getType"(): integer
public "isCS_sRGB"(): boolean
public "toCIEXYZ"(float0s: float[]): float[]
public "toRGB"(float0s: float[]): float[]
get "numComponents"(): integer
get "type"(): integer
get "cS_sRGB"(): boolean
}
}

declare module "java.awt.DisplayMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DisplayMode {
static readonly "BIT_DEPTH_MULTI": integer
static readonly "REFRESH_RATE_UNKNOWN": integer

constructor(int0: integer, int1: integer, int2: integer, int3: integer)

public "equals"(displayMode0: $DisplayMode$$Type): boolean
public "getBitDepth"(): integer
public "getHeight"(): integer
public "getRefreshRate"(): integer
public "getWidth"(): integer
get "bitDepth"(): integer
get "height"(): integer
get "refreshRate"(): integer
get "width"(): integer
}
}

declare module "java.awt.Cursor" {
import { $Serializable } from "java.io.Serializable"

export class $Cursor implements $Serializable {
static readonly "CROSSHAIR_CURSOR": integer
static readonly "CUSTOM_CURSOR": integer
static readonly "DEFAULT_CURSOR": integer
static readonly "E_RESIZE_CURSOR": integer
static readonly "HAND_CURSOR": integer
static readonly "MOVE_CURSOR": integer
static readonly "NE_RESIZE_CURSOR": integer
static readonly "NW_RESIZE_CURSOR": integer
static readonly "N_RESIZE_CURSOR": integer
static readonly "SE_RESIZE_CURSOR": integer
static readonly "SW_RESIZE_CURSOR": integer
static readonly "S_RESIZE_CURSOR": integer
static readonly "TEXT_CURSOR": integer
static readonly "WAIT_CURSOR": integer
static readonly "W_RESIZE_CURSOR": integer

constructor(int0: integer)

public static "getDefaultCursor"(): $Cursor
public "getName"(): string
public static "getPredefinedCursor"(int0: integer): $Cursor
public static "getSystemCustomCursor"(string0: string): $Cursor
public "getType"(): integer
get "name"(): string
get "type"(): integer
}
}

declare module "java.awt.MenuShortcut" {
import { $Serializable } from "java.io.Serializable"

export class $MenuShortcut implements $Serializable {
constructor(int0: integer)
constructor(int0: integer, boolean1: boolean)

public "equals"(menuShortcut0: $MenuShortcut$$Type): boolean
public "getKey"(): integer
public "usesShiftModifier"(): boolean
get "key"(): integer
}
}

declare module "java.awt.Polygon" {
import { $Shape } from "java.awt.Shape"
import { $Rectangle } from "java.awt.Rectangle"
import { $Point2D$$Type } from "java.awt.geom.Point2D"
import { $Rectangle2D, $Rectangle2D$$Type } from "java.awt.geom.Rectangle2D"
import { $Point$$Type } from "java.awt.Point"
import { $AffineTransform$$Type } from "java.awt.geom.AffineTransform"
import { $PathIterator } from "java.awt.geom.PathIterator"
import { $Serializable } from "java.io.Serializable"

export class $Polygon implements $Shape, $Serializable {
constructor()
constructor(int0s: integer[], int1s: integer[], int2: integer)

public "addPoint"(int0: integer, int1: integer): void
public "contains"(double0: double, double1: double, double2: double, double3: double): boolean
public "contains"(int0: integer, int1: integer): boolean
public "contains"(rectangle2D0: $Rectangle2D$$Type): boolean
public "contains"(point0: $Point$$Type): boolean
public "contains"(point2D0: $Point2D$$Type): boolean
public "contains"(double0: double, double1: double): boolean
/** @deprecated */
public "getBoundingBox"(): $Rectangle
public "getBounds"(): $Rectangle
public "getBounds2D"(): $Rectangle2D
public "getPathIterator"(affineTransform0: $AffineTransform$$Type, double1: double): $PathIterator
public "getPathIterator"(affineTransform0: $AffineTransform$$Type): $PathIterator
/** @deprecated */
public "inside"(int0: integer, int1: integer): boolean
public "intersects"(rectangle2D0: $Rectangle2D$$Type): boolean
public "intersects"(double0: double, double1: double, double2: double, double3: double): boolean
public "invalidate"(): void
public "reset"(): void
public "translate"(int0: integer, int1: integer): void
get "npoints"(): integer
set "npoints"(value: integer)
get "xpoints"(): integer[]
set "xpoints"(value: integer[])
get "ypoints"(): integer[]
set "ypoints"(value: integer[])
get "boundingBox"(): $Rectangle
get "bounds"(): $Rectangle
get "bounds2D"(): $Rectangle2D
}
}

declare module "java.awt.Stroke" {
import { $Shape, $Shape$$Type } from "java.awt.Shape"

export interface $Stroke {
"createStrokedShape"(shape0: $Shape$$Type): $Shape
}

export namespace $Stroke {
const probejs$$marker: never
}
export abstract class $Stroke$$Static implements $Stroke {
}
}

declare module "java.awt.font.TextHitInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $TextHitInfo {
public static "afterOffset"(int0: integer): $TextHitInfo
public static "beforeOffset"(int0: integer): $TextHitInfo
public "equals"(textHitInfo0: $TextHitInfo$$Type): boolean
public "getCharIndex"(): integer
public "getInsertionIndex"(): integer
public "getOffsetHit"(int0: integer): $TextHitInfo
public "getOtherHit"(): $TextHitInfo
public "isLeadingEdge"(): boolean
public static "leading"(int0: integer): $TextHitInfo
public static "trailing"(int0: integer): $TextHitInfo
get "charIndex"(): integer
get "insertionIndex"(): integer
get "otherHit"(): $TextHitInfo
get "leadingEdge"(): boolean
}
}

declare module "java.awt.event.FocusEvent" {
import { $FocusEvent$Cause, $FocusEvent$Cause$$Type } from "java.awt.event.FocusEvent$Cause"
import { $ComponentEvent } from "java.awt.event.ComponentEvent"
import { $Component, $Component$$Type } from "java.awt.Component"

export class $FocusEvent extends $ComponentEvent {
static readonly "FOCUS_FIRST": integer
static readonly "FOCUS_GAINED": integer
static readonly "FOCUS_LAST": integer
static readonly "FOCUS_LOST": integer

constructor(component0: $Component$$Type, int1: integer)
constructor(component0: $Component$$Type, int1: integer, boolean2: boolean, component3: $Component$$Type)
constructor(component0: $Component$$Type, int1: integer, boolean2: boolean)
constructor(component0: $Component$$Type, int1: integer, boolean2: boolean, component3: $Component$$Type, cause4: $FocusEvent$Cause$$Type)

public "getCause"(): $FocusEvent$Cause
public "getOppositeComponent"(): $Component
public "isTemporary"(): boolean
get "cause"(): $FocusEvent$Cause
get "oppositeComponent"(): $Component
get "temporary"(): boolean
}
}

declare module "java.awt.image.SampleModel" {
import { $DataBuffer, $DataBuffer$$Type } from "java.awt.image.DataBuffer"

export class $SampleModel {
constructor(int0: integer, int1: integer, int2: integer, int3: integer)

public "createCompatibleSampleModel"(int0: integer, int1: integer): $SampleModel
public "createDataBuffer"(): $DataBuffer
public "createSubsetSampleModel"(int0s: integer[]): $SampleModel
public "getDataElements"(int0: integer, int1: integer, object2: any, dataBuffer3: $DataBuffer$$Type): any
public "getDataElements"(int0: integer, int1: integer, int2: integer, int3: integer, object4: any, dataBuffer5: $DataBuffer$$Type): any
public "getDataType"(): integer
public "getHeight"(): integer
public "getNumBands"(): integer
public "getNumDataElements"(): integer
public "getPixel"(int0: integer, int1: integer, int2s: integer[], dataBuffer3: $DataBuffer$$Type): integer[]
public "getPixel"(int0: integer, int1: integer, float2s: float[], dataBuffer3: $DataBuffer$$Type): float[]
public "getPixel"(int0: integer, int1: integer, double2s: double[], dataBuffer3: $DataBuffer$$Type): double[]
public "getPixels"(int0: integer, int1: integer, int2: integer, int3: integer, float4s: float[], dataBuffer5: $DataBuffer$$Type): float[]
public "getPixels"(int0: integer, int1: integer, int2: integer, int3: integer, double4s: double[], dataBuffer5: $DataBuffer$$Type): double[]
public "getPixels"(int0: integer, int1: integer, int2: integer, int3: integer, int4s: integer[], dataBuffer5: $DataBuffer$$Type): integer[]
public "getSample"(int0: integer, int1: integer, int2: integer, dataBuffer3: $DataBuffer$$Type): integer
public "getSampleDouble"(int0: integer, int1: integer, int2: integer, dataBuffer3: $DataBuffer$$Type): double
public "getSampleFloat"(int0: integer, int1: integer, int2: integer, dataBuffer3: $DataBuffer$$Type): float
public "getSampleSize"(): integer[]
public "getSampleSize"(int0: integer): integer
public "getSamples"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5s: integer[], dataBuffer6: $DataBuffer$$Type): integer[]
public "getSamples"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, double5s: double[], dataBuffer6: $DataBuffer$$Type): double[]
public "getSamples"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, float5s: float[], dataBuffer6: $DataBuffer$$Type): float[]
public "getTransferType"(): integer
public "getWidth"(): integer
public "setDataElements"(int0: integer, int1: integer, object2: any, dataBuffer3: $DataBuffer$$Type): void
public "setDataElements"(int0: integer, int1: integer, int2: integer, int3: integer, object4: any, dataBuffer5: $DataBuffer$$Type): void
public "setPixel"(int0: integer, int1: integer, int2s: integer[], dataBuffer3: $DataBuffer$$Type): void
public "setPixel"(int0: integer, int1: integer, double2s: double[], dataBuffer3: $DataBuffer$$Type): void
public "setPixel"(int0: integer, int1: integer, float2s: float[], dataBuffer3: $DataBuffer$$Type): void
public "setPixels"(int0: integer, int1: integer, int2: integer, int3: integer, int4s: integer[], dataBuffer5: $DataBuffer$$Type): void
public "setPixels"(int0: integer, int1: integer, int2: integer, int3: integer, double4s: double[], dataBuffer5: $DataBuffer$$Type): void
public "setPixels"(int0: integer, int1: integer, int2: integer, int3: integer, float4s: float[], dataBuffer5: $DataBuffer$$Type): void
public "setSample"(int0: integer, int1: integer, int2: integer, double3: double, dataBuffer4: $DataBuffer$$Type): void
public "setSample"(int0: integer, int1: integer, int2: integer, float3: float, dataBuffer4: $DataBuffer$$Type): void
public "setSample"(int0: integer, int1: integer, int2: integer, int3: integer, dataBuffer4: $DataBuffer$$Type): void
public "setSamples"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5s: integer[], dataBuffer6: $DataBuffer$$Type): void
public "setSamples"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, double5s: double[], dataBuffer6: $DataBuffer$$Type): void
public "setSamples"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, float5s: float[], dataBuffer6: $DataBuffer$$Type): void
get "dataType"(): integer
get "height"(): integer
get "numBands"(): integer
get "numDataElements"(): integer
get "sampleSize"(): integer[]
get "transferType"(): integer
get "width"(): integer
}
}

declare module "java.awt.PaintContext" {
import { $ColorModel } from "java.awt.image.ColorModel"
import { $Raster } from "java.awt.image.Raster"

export interface $PaintContext {
"dispose"(): void
"getColorModel"(): $ColorModel
"getRaster"(int0: integer, int1: integer, int2: integer, int3: integer): $Raster
get "colorModel"(): $ColorModel
}

export namespace $PaintContext {
const probejs$$marker: never
}
export abstract class $PaintContext$$Static implements $PaintContext {
}
}

declare module "java.awt.geom.Dimension2D" {
import { $Cloneable } from "java.lang.Cloneable"

export class $Dimension2D implements $Cloneable {
public "clone"(): any
public "getHeight"(): double
public "getWidth"(): double
public "setSize"(dimension2D0: $Dimension2D$$Type): void
public "setSize"(double0: double, double1: double): void
get "height"(): double
get "width"(): double
set "size"(value: $Dimension2D$$Type)
}
}

declare module "java.awt.event.ActionListener" {
import { $EventListener } from "java.util.EventListener"
import { $ActionEvent$$Type } from "java.awt.event.ActionEvent"

export interface $ActionListener extends $EventListener {
"actionPerformed"(actionEvent0: $ActionEvent$$Type): void
}

export namespace $ActionListener {
const probejs$$marker: never
}
export abstract class $ActionListener$$Static implements $ActionListener {
}
}

declare module "java.awt.dnd.DragSourceMotionListener" {
import { $EventListener } from "java.util.EventListener"
import { $DragSourceDragEvent$$Type } from "java.awt.dnd.DragSourceDragEvent"

export interface $DragSourceMotionListener extends $EventListener {
"dragMouseMoved"(dragSourceDragEvent0: $DragSourceDragEvent$$Type): void
}

export namespace $DragSourceMotionListener {
const probejs$$marker: never
}
export abstract class $DragSourceMotionListener$$Static implements $DragSourceMotionListener {
}
}

declare module "java.awt.Dialog$ModalityType" {
import { $Enum } from "java.lang.Enum"

export class $Dialog$ModalityType extends $Enum<$Dialog$ModalityType> {
static readonly "APPLICATION_MODAL": $Dialog$ModalityType
static readonly "DOCUMENT_MODAL": $Dialog$ModalityType
static readonly "MODELESS": $Dialog$ModalityType
static readonly "TOOLKIT_MODAL": $Dialog$ModalityType

public static "valueOf"(string0: string): $Dialog$ModalityType
public static "values"(): $Dialog$ModalityType[]
}
}

declare module "java.awt.Composite" {
import { $ColorModel$$Type } from "java.awt.image.ColorModel"
import { $CompositeContext } from "java.awt.CompositeContext"
import { $RenderingHints$$Type } from "java.awt.RenderingHints"

export interface $Composite {
"createContext"(colorModel0: $ColorModel$$Type, colorModel1: $ColorModel$$Type, renderingHints2: $RenderingHints$$Type): $CompositeContext
}

export namespace $Composite {
const probejs$$marker: never
}
export abstract class $Composite$$Static implements $Composite {
}
}

declare module "java.awt.FontMetrics" {
import { $LineMetrics } from "java.awt.font.LineMetrics"
import { $FontRenderContext } from "java.awt.font.FontRenderContext"
import { $CharacterIterator$$Type } from "java.text.CharacterIterator"
import { $Font } from "java.awt.Font"
import { $Rectangle2D } from "java.awt.geom.Rectangle2D"
import { $Graphics$$Type } from "java.awt.Graphics"
import { $Serializable } from "java.io.Serializable"

export class $FontMetrics implements $Serializable {
public "bytesWidth"(byte0s: byte[], int1: integer, int2: integer): integer
public "charWidth"(char0: character): integer
public "charWidth"(int0: integer): integer
public "charsWidth"(char0s: character[], int1: integer, int2: integer): integer
public "getAscent"(): integer
public "getDescent"(): integer
public "getFont"(): $Font
public "getFontRenderContext"(): $FontRenderContext
public "getHeight"(): integer
public "getLeading"(): integer
public "getLineMetrics"(char0s: character[], int1: integer, int2: integer, graphics3: $Graphics$$Type): $LineMetrics
public "getLineMetrics"(string0: string, graphics1: $Graphics$$Type): $LineMetrics
public "getLineMetrics"(string0: string, int1: integer, int2: integer, graphics3: $Graphics$$Type): $LineMetrics
public "getLineMetrics"(characterIterator0: $CharacterIterator$$Type, int1: integer, int2: integer, graphics3: $Graphics$$Type): $LineMetrics
public "getMaxAdvance"(): integer
public "getMaxAscent"(): integer
public "getMaxCharBounds"(graphics0: $Graphics$$Type): $Rectangle2D
/** @deprecated */
public "getMaxDecent"(): integer
public "getMaxDescent"(): integer
public "getStringBounds"(characterIterator0: $CharacterIterator$$Type, int1: integer, int2: integer, graphics3: $Graphics$$Type): $Rectangle2D
public "getStringBounds"(string0: string, int1: integer, int2: integer, graphics3: $Graphics$$Type): $Rectangle2D
public "getStringBounds"(string0: string, graphics1: $Graphics$$Type): $Rectangle2D
public "getStringBounds"(char0s: character[], int1: integer, int2: integer, graphics3: $Graphics$$Type): $Rectangle2D
public "getWidths"(): integer[]
public "hasUniformLineMetrics"(): boolean
public "stringWidth"(string0: string): integer
get "ascent"(): integer
get "descent"(): integer
get "font"(): $Font
get "fontRenderContext"(): $FontRenderContext
get "height"(): integer
get "leading"(): integer
get "maxAdvance"(): integer
get "maxAscent"(): integer
get "maxDecent"(): integer
get "maxDescent"(): integer
get "widths"(): integer[]
}
}

declare module "java.awt.AttributeValue" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AttributeValue {
}
}

declare module "java.awt.Menu" {
import { $MenuItem, $MenuItem$$Type } from "java.awt.MenuItem"
import { $Font } from "java.awt.Font"
import { $Event$$Type } from "java.awt.Event"
import { $MenuComponent$$Type } from "java.awt.MenuComponent"
import { $MenuContainer } from "java.awt.MenuContainer"
import { $Accessible } from "javax.accessibility.Accessible"

export class $Menu extends $MenuItem implements $MenuContainer, $Accessible {
constructor(string0: string, boolean1: boolean)
constructor(string0: string)
constructor()

public "add"(menuItem0: $MenuItem$$Type): $MenuItem
public "add"(string0: string): void
public "addSeparator"(): void
/** @deprecated */
public "countItems"(): integer
public "getFont"(): $Font
public "getItem"(int0: integer): $MenuItem
public "getItemCount"(): integer
public "insert"(string0: string, int1: integer): void
public "insert"(menuItem0: $MenuItem$$Type, int1: integer): void
public "insertSeparator"(int0: integer): void
public "isTearOff"(): boolean
/** @deprecated */
public "postEvent"(event0: $Event$$Type): boolean
public "remove"(int0: integer): void
public "remove"(menuComponent0: $MenuComponent$$Type): void
public "removeAll"(): void
get "font"(): $Font
get "itemCount"(): integer
get "tearOff"(): boolean
}
}

declare module "java.awt.datatransfer.FlavorListener" {
import { $EventListener } from "java.util.EventListener"
import { $FlavorEvent$$Type } from "java.awt.datatransfer.FlavorEvent"

export interface $FlavorListener extends $EventListener {
"flavorsChanged"(flavorEvent0: $FlavorEvent$$Type): void
}

export namespace $FlavorListener {
const probejs$$marker: never
}
export abstract class $FlavorListener$$Static implements $FlavorListener {
}
}

declare module "java.awt.dnd.DragSourceDropEvent" {
import { $DragSourceContext$$Type } from "java.awt.dnd.DragSourceContext"
import { $DragSourceEvent } from "java.awt.dnd.DragSourceEvent"

export class $DragSourceDropEvent extends $DragSourceEvent {
constructor(dragSourceContext0: $DragSourceContext$$Type, int1: integer, boolean2: boolean)
constructor(dragSourceContext0: $DragSourceContext$$Type)
constructor(dragSourceContext0: $DragSourceContext$$Type, int1: integer, boolean2: boolean, int3: integer, int4: integer)

public "getDropAction"(): integer
public "getDropSuccess"(): boolean
get "dropAction"(): integer
get "dropSuccess"(): boolean
}
}

declare module "java.awt.geom.PathIterator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PathIterator {
"currentSegment"(double0s: double[]): integer
"currentSegment"(float0s: float[]): integer
"getWindingRule"(): integer
"isDone"(): boolean
"next"(): void
get "windingRule"(): integer
get "done"(): boolean
}

export namespace $PathIterator {
const SEG_CLOSE: integer
const SEG_CUBICTO: integer
const SEG_LINETO: integer
const SEG_MOVETO: integer
const SEG_QUADTO: integer
const WIND_EVEN_ODD: integer
const WIND_NON_ZERO: integer
}
export abstract class $PathIterator$$Static implements $PathIterator {
static readonly "SEG_CLOSE": integer
static readonly "SEG_CUBICTO": integer
static readonly "SEG_LINETO": integer
static readonly "SEG_MOVETO": integer
static readonly "SEG_QUADTO": integer
static readonly "WIND_EVEN_ODD": integer
static readonly "WIND_NON_ZERO": integer

}
}

declare module "java.awt.PopupMenu" {
import { $Font } from "java.awt.Font"
import { $Event$$Type } from "java.awt.Event"
import { $Menu } from "java.awt.Menu"
import { $Component$$Type } from "java.awt.Component"

export class $PopupMenu extends $Menu {
constructor()
constructor(string0: string)

public "getFont"(): $Font
/** @deprecated */
public "postEvent"(event0: $Event$$Type): boolean
public "show"(component0: $Component$$Type, int1: integer, int2: integer): void
get "font"(): $Font
}
}

declare module "java.awt.image.renderable.RenderableImage" {
import { $RenderContext$$Type } from "java.awt.image.renderable.RenderContext"
import { $Vector } from "java.util.Vector"
import { $RenderedImage } from "java.awt.image.RenderedImage"
import { $RenderingHints$$Type } from "java.awt.RenderingHints"

export interface $RenderableImage {
"createDefaultRendering"(): $RenderedImage
"createRendering"(renderContext0: $RenderContext$$Type): $RenderedImage
"createScaledRendering"(int0: integer, int1: integer, renderingHints2: $RenderingHints$$Type): $RenderedImage
"getHeight"(): float
"getMinX"(): float
"getMinY"(): float
"getProperty"(string0: string): any
"getPropertyNames"(): string[]
"getSources"(): $Vector<$RenderableImage>
"getWidth"(): float
"isDynamic"(): boolean
get "height"(): float
get "minX"(): float
get "minY"(): float
get "propertyNames"(): string[]
get "sources"(): $Vector<$RenderableImage>
get "width"(): float
get "dynamic"(): boolean
}

export namespace $RenderableImage {
const HINTS_OBSERVED: string
}
export abstract class $RenderableImage$$Static implements $RenderableImage {
static readonly "HINTS_OBSERVED": string

}
}

declare module "java.awt.event.WindowStateListener" {
import { $EventListener } from "java.util.EventListener"
import { $WindowEvent$$Type } from "java.awt.event.WindowEvent"

export interface $WindowStateListener extends $EventListener {
"windowStateChanged"(windowEvent0: $WindowEvent$$Type): void
}

export namespace $WindowStateListener {
const probejs$$marker: never
}
export abstract class $WindowStateListener$$Static implements $WindowStateListener {
}
}

declare module "java.awt.Insets" {
import { $Cloneable } from "java.lang.Cloneable"
import { $Serializable } from "java.io.Serializable"

export class $Insets implements $Cloneable, $Serializable {
constructor(int0: integer, int1: integer, int2: integer, int3: integer)

public "clone"(): any
public "set"(int0: integer, int1: integer, int2: integer, int3: integer): void
get "bottom"(): integer
set "bottom"(value: integer)
get "left"(): integer
set "left"(value: integer)
get "right"(): integer
set "right"(value: integer)
get "top"(): integer
set "top"(value: integer)
}
}

declare module "java.awt.JobAttributes" {
import { $Cloneable } from "java.lang.Cloneable"
import { $JobAttributes$DialogType, $JobAttributes$DialogType$$Type } from "java.awt.JobAttributes$DialogType"
import { $JobAttributes$DestinationType, $JobAttributes$DestinationType$$Type } from "java.awt.JobAttributes$DestinationType"
import { $JobAttributes$DefaultSelectionType, $JobAttributes$DefaultSelectionType$$Type } from "java.awt.JobAttributes$DefaultSelectionType"
import { $JobAttributes$SidesType, $JobAttributes$SidesType$$Type } from "java.awt.JobAttributes$SidesType"
import { $JobAttributes$MultipleDocumentHandlingType, $JobAttributes$MultipleDocumentHandlingType$$Type } from "java.awt.JobAttributes$MultipleDocumentHandlingType"

export class $JobAttributes implements $Cloneable {
constructor(jobAttributes0: $JobAttributes$$Type)
constructor(int0: integer, defaultSelectionType1: $JobAttributes$DefaultSelectionType$$Type, destinationType2: $JobAttributes$DestinationType$$Type, dialogType3: $JobAttributes$DialogType$$Type, string4: string, int5: integer, int6: integer, multipleDocumentHandlingType7: $JobAttributes$MultipleDocumentHandlingType$$Type, int8ss: integer[][], string9: string, sidesType10: $JobAttributes$SidesType$$Type)
constructor()

public "clone"(): any
public "getCopies"(): integer
public "getDefaultSelection"(): $JobAttributes$DefaultSelectionType
public "getDestination"(): $JobAttributes$DestinationType
public "getDialog"(): $JobAttributes$DialogType
public "getFileName"(): string
public "getFromPage"(): integer
public "getMaxPage"(): integer
public "getMinPage"(): integer
public "getMultipleDocumentHandling"(): $JobAttributes$MultipleDocumentHandlingType
public "getPageRanges"(): integer[][]
public "getPrinter"(): string
public "getSides"(): $JobAttributes$SidesType
public "getToPage"(): integer
public "set"(jobAttributes0: $JobAttributes$$Type): void
public "setCopies"(int0: integer): void
public "setCopiesToDefault"(): void
public "setDefaultSelection"(defaultSelectionType0: $JobAttributes$DefaultSelectionType$$Type): void
public "setDestination"(destinationType0: $JobAttributes$DestinationType$$Type): void
public "setDialog"(dialogType0: $JobAttributes$DialogType$$Type): void
public "setFileName"(string0: string): void
public "setFromPage"(int0: integer): void
public "setMaxPage"(int0: integer): void
public "setMinPage"(int0: integer): void
public "setMultipleDocumentHandling"(multipleDocumentHandlingType0: $JobAttributes$MultipleDocumentHandlingType$$Type): void
public "setMultipleDocumentHandlingToDefault"(): void
public "setPageRanges"(int0ss: integer[][]): void
public "setPrinter"(string0: string): void
public "setSides"(sidesType0: $JobAttributes$SidesType$$Type): void
public "setSidesToDefault"(): void
public "setToPage"(int0: integer): void
get "copies"(): integer
get "defaultSelection"(): $JobAttributes$DefaultSelectionType
get "destination"(): $JobAttributes$DestinationType
get "dialog"(): $JobAttributes$DialogType
get "fileName"(): string
get "fromPage"(): integer
get "maxPage"(): integer
get "minPage"(): integer
get "multipleDocumentHandling"(): $JobAttributes$MultipleDocumentHandlingType
get "pageRanges"(): integer[][]
get "printer"(): string
get "sides"(): $JobAttributes$SidesType
get "toPage"(): integer
set "copies"(value: integer)
set "defaultSelection"(value: $JobAttributes$DefaultSelectionType$$Type)
set "destination"(value: $JobAttributes$DestinationType$$Type)
set "dialog"(value: $JobAttributes$DialogType$$Type)
set "fileName"(value: string)
set "fromPage"(value: integer)
set "maxPage"(value: integer)
set "minPage"(value: integer)
set "multipleDocumentHandling"(value: $JobAttributes$MultipleDocumentHandlingType$$Type)
set "pageRanges"(value: integer[][])
set "printer"(value: string)
set "sides"(value: $JobAttributes$SidesType$$Type)
set "toPage"(value: integer)
}
}

declare module "java.awt.FocusTraversalPolicy" {
import { $Window$$Type } from "java.awt.Window"
import { $Container$$Type } from "java.awt.Container"
import { $Component, $Component$$Type } from "java.awt.Component"

export class $FocusTraversalPolicy {
public "getComponentAfter"(container0: $Container$$Type, component1: $Component$$Type): $Component
public "getComponentBefore"(container0: $Container$$Type, component1: $Component$$Type): $Component
public "getDefaultComponent"(container0: $Container$$Type): $Component
public "getFirstComponent"(container0: $Container$$Type): $Component
public "getInitialComponent"(window0: $Window$$Type): $Component
public "getLastComponent"(container0: $Container$$Type): $Component
}
}

declare module "java.awt.dnd.DragGestureListener" {
import { $EventListener } from "java.util.EventListener"
import { $DragGestureEvent$$Type } from "java.awt.dnd.DragGestureEvent"

export interface $DragGestureListener extends $EventListener {
"dragGestureRecognized"(dragGestureEvent0: $DragGestureEvent$$Type): void
}

export namespace $DragGestureListener {
const probejs$$marker: never
}
export abstract class $DragGestureListener$$Static implements $DragGestureListener {
}
}

declare module "java.awt.PageAttributes$ColorType" {
import { $AttributeValue } from "java.awt.AttributeValue"

export class $PageAttributes$ColorType extends $AttributeValue {
static readonly "COLOR": $PageAttributes$ColorType
static readonly "MONOCHROME": $PageAttributes$ColorType

}
}

declare module "java.awt.MenuBar" {
import { $MenuItem } from "java.awt.MenuItem"
import { $Enumeration } from "java.util.Enumeration"
import { $Font } from "java.awt.Font"
import { $Event$$Type } from "java.awt.Event"
import { $MenuComponent, $MenuComponent$$Type } from "java.awt.MenuComponent"
import { $Menu, $Menu$$Type } from "java.awt.Menu"
import { $MenuContainer } from "java.awt.MenuContainer"
import { $MenuShortcut, $MenuShortcut$$Type } from "java.awt.MenuShortcut"
import { $Accessible } from "javax.accessibility.Accessible"

export class $MenuBar extends $MenuComponent implements $MenuContainer, $Accessible {
constructor()

public "add"(menu0: $Menu$$Type): $Menu
public "addNotify"(): void
/** @deprecated */
public "countMenus"(): integer
public "deleteShortcut"(menuShortcut0: $MenuShortcut$$Type): void
public "getFont"(): $Font
public "getHelpMenu"(): $Menu
public "getMenu"(int0: integer): $Menu
public "getMenuCount"(): integer
public "getShortcutMenuItem"(menuShortcut0: $MenuShortcut$$Type): $MenuItem
/** @deprecated */
public "postEvent"(event0: $Event$$Type): boolean
public "remove"(menuComponent0: $MenuComponent$$Type): void
public "remove"(int0: integer): void
public "setHelpMenu"(menu0: $Menu$$Type): void
public "shortcuts"(): $Enumeration<$MenuShortcut>
get "font"(): $Font
get "helpMenu"(): $Menu
get "menuCount"(): integer
set "helpMenu"(value: $Menu$$Type)
}
}

declare module "java.awt.datatransfer.FlavorEvent" {
import { $Clipboard$$Type } from "java.awt.datatransfer.Clipboard"
import { $EventObject } from "java.util.EventObject"

export class $FlavorEvent extends $EventObject {
constructor(clipboard0: $Clipboard$$Type)

}
}

