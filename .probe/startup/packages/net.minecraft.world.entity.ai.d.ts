declare module "net.minecraft.world.entity.ai.sensing.TemptingSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TemptingSensor$$Type = ($TemptingSensor);
}

declare module "net.minecraft.world.entity.ai.attributes.AttributeMap" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AttributeMap$$Type = ($AttributeMap);
}

declare module "net.minecraft.world.entity.ai.attributes.AttributeModifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AttributeModifier$$Type = ($AttributeModifier);
}

declare module "net.minecraft.world.entity.ai.village.poi.PoiManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PoiManager$$Type = ($PoiManager);
}

declare module "net.minecraft.world.entity.ai.sensing.GolemSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GolemSensor$$Type = ($GolemSensor);
}

declare module "net.minecraft.world.entity.ai.sensing.Sensor" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Sensor$$Type<E extends $LivingEntity = $LivingEntity> = ($Sensor<E>);
}

declare module "net.minecraft.world.entity.ai.attributes.AttributeInstance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AttributeInstance$$Type = ($AttributeInstance);
}

declare module "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AttributeModifier$Operation$$Type = ($AttributeModifier$Operation | ("addition" | "multiply_base" | "multiply_total"));
}

declare module "net.minecraft.world.entity.ai.attributes.Attribute" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $IFormattableAttribute } from "dev.shadowsoffire.attributeslib.api.IFormattableAttribute"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $AttributeModifier$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $TooltipFlag$$Type } from "net.minecraft.world.item.TooltipFlag"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $UUID } from "java.util.UUID"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"

export class $Attribute implements $IFormattableAttribute {
static readonly "MAX_NAME_LENGTH": integer

public "addBonusTooltips"(itemStack0: $ItemStack$$Type, consumer1: $Consumer$$Type<$Component$$Type>, tooltipFlag2: $TooltipFlag$$Type): void
public "getBaseUUID"(): $UUID
public "getBonusBaseValue"(itemStack0: $ItemStack$$Type): double
public "getDebugInfo"(attributeModifier0: $AttributeModifier$$Type, tooltipFlag1: $TooltipFlag$$Type): $Component
public "getDefaultValue"(): double
public "getDescriptionId"(): string
public "isClientSyncable"(): boolean
public static "isNullOrAddition"(operation0: $AttributeModifier$Operation$$Type): boolean
public "sanitizeValue"(double0: double): double
public "setSyncable"(boolean0: boolean): $Attribute
public "ths"(): $Attribute
public "toBaseComponent"(double0: double, double1: double, boolean2: boolean, tooltipFlag3: $TooltipFlag$$Type): $MutableComponent
public static "toBaseComponent"(attribute0: $Attribute$$Type, double1: double, double2: double, boolean3: boolean, tooltipFlag4: $TooltipFlag$$Type): $MutableComponent
public "toComponent"(attributeModifier0: $AttributeModifier$$Type, tooltipFlag1: $TooltipFlag$$Type): $MutableComponent
public static "toComponent"(attribute0: $Attribute$$Type, attributeModifier1: $AttributeModifier$$Type, tooltipFlag2: $TooltipFlag$$Type): $MutableComponent
public "toValueComponent"(operation0: $AttributeModifier$Operation$$Type, double1: double, tooltipFlag2: $TooltipFlag$$Type): $MutableComponent
public static "toValueComponent"(attribute0: $Attribute$$Type, operation1: $AttributeModifier$Operation$$Type, double2: double, tooltipFlag3: $TooltipFlag$$Type): $MutableComponent
get "baseUUID"(): $UUID
get "defaultValue"(): double
get "descriptionId"(): string
get "clientSyncable"(): boolean
set "syncable"(value: boolean)
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.Attribute
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.AttributeTag
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Attribute$$Type = ($Attribute | Special.Attribute);
}

declare module "net.minecraft.world.entity.ai.gossip.GossipContainer$EntityGossips" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GossipContainer$EntityGossips$$Type = ($GossipContainer$EntityGossips);
}

declare module "net.minecraft.world.entity.ai.sensing.VillagerBabiesSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $VillagerBabiesSensor$$Type = ($VillagerBabiesSensor);
}

declare module "net.minecraft.world.entity.ai.village.VillageSiege" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $VillageSiege$$Type = ($VillageSiege);
}

declare module "net.minecraft.world.entity.ai.gossip.GossipContainer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GossipContainer$$Type = ($GossipContainer);
}

declare module "net.minecraft.world.entity.ai.attributes.AttributeSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AttributeSupplier$$Type = ($AttributeSupplier);
}

declare module "net.minecraft.world.entity.ai.sensing.SecondaryPoiSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SecondaryPoiSensor$$Type = ($SecondaryPoiSensor);
}

declare module "net.minecraft.world.entity.ai.sensing.HoglinSpecificSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HoglinSpecificSensor$$Type = ($HoglinSpecificSensor);
}

declare module "net.minecraft.world.entity.ai.sensing.NearestItemSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NearestItemSensor$$Type = ($NearestItemSensor);
}

declare module "net.minecraft.world.entity.ai.memory.ExpirableValue" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ExpirableValue$$Type<T = any> = ($ExpirableValue<T>);
}

declare module "net.minecraft.world.entity.ai.sensing.WardenEntitySensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WardenEntitySensor$$Type = ($WardenEntitySensor);
}

declare module "net.minecraft.world.entity.ai.memory.MemoryStatus" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MemoryStatus$$Type = ($MemoryStatus | ("value_present" | "value_absent" | "registered"));
}

declare module "net.minecraft.world.entity.ai.goal.Goal" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Goal$$Type = ($Goal);
}

declare module "net.minecraft.world.entity.ai.sensing.PiglinBruteSpecificSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PiglinBruteSpecificSensor$$Type = ($PiglinBruteSpecificSensor);
}

declare module "net.minecraft.world.entity.ai.sensing.NearestVisibleLivingEntitySensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NearestVisibleLivingEntitySensor$$Type = ($NearestVisibleLivingEntitySensor);
}

declare module "net.minecraft.world.entity.ai.sensing.SensorType" {
import { $VillagerHostilesSensor } from "net.minecraft.world.entity.ai.sensing.VillagerHostilesSensor"
import { $NearestItemSensor } from "net.minecraft.world.entity.ai.sensing.NearestItemSensor"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $IsInWaterSensor } from "net.minecraft.world.entity.ai.sensing.IsInWaterSensor"
import { $AdultSensor } from "net.minecraft.world.entity.ai.sensing.AdultSensor"
import { $WardenEntitySensor } from "net.minecraft.world.entity.ai.sensing.WardenEntitySensor"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Sensor, $Sensor$$Type } from "net.minecraft.world.entity.ai.sensing.Sensor"
import { $FrogAttackablesSensor } from "net.minecraft.world.entity.ai.sensing.FrogAttackablesSensor"
import { $PlayerSensor } from "net.minecraft.world.entity.ai.sensing.PlayerSensor"
import { $PiglinBruteSpecificSensor } from "net.minecraft.world.entity.ai.sensing.PiglinBruteSpecificSensor"
import { $SecondaryPoiSensor } from "net.minecraft.world.entity.ai.sensing.SecondaryPoiSensor"
import { $GolemSensor } from "net.minecraft.world.entity.ai.sensing.GolemSensor"
import { $HoglinSpecificSensor } from "net.minecraft.world.entity.ai.sensing.HoglinSpecificSensor"
import { $TemptingSensor } from "net.minecraft.world.entity.ai.sensing.TemptingSensor"
import { $PiglinSpecificSensor } from "net.minecraft.world.entity.ai.sensing.PiglinSpecificSensor"
import { $AxolotlAttackablesSensor } from "net.minecraft.world.entity.ai.sensing.AxolotlAttackablesSensor"
import { $VillagerBabiesSensor } from "net.minecraft.world.entity.ai.sensing.VillagerBabiesSensor"
import { $NearestLivingEntitySensor } from "net.minecraft.world.entity.ai.sensing.NearestLivingEntitySensor"
import { $NearestBedSensor } from "net.minecraft.world.entity.ai.sensing.NearestBedSensor"
import { $DummySensor } from "net.minecraft.world.entity.ai.sensing.DummySensor"
import { $HurtBySensor } from "net.minecraft.world.entity.ai.sensing.HurtBySensor"

export class $SensorType<U extends $Sensor<any> = $Sensor<any>> {
static readonly "AXOLOTL_ATTACKABLES": $SensorType<$AxolotlAttackablesSensor>
static readonly "AXOLOTL_TEMPTATIONS": $SensorType<$TemptingSensor>
static readonly "CAMEL_TEMPTATIONS": $SensorType<$TemptingSensor>
static readonly "DUMMY": $SensorType<$DummySensor>
static readonly "FROG_ATTACKABLES": $SensorType<$FrogAttackablesSensor>
static readonly "FROG_TEMPTATIONS": $SensorType<$TemptingSensor>
static readonly "GOAT_TEMPTATIONS": $SensorType<$TemptingSensor>
static readonly "GOLEM_DETECTED": $SensorType<$GolemSensor>
static readonly "HOGLIN_SPECIFIC_SENSOR": $SensorType<$HoglinSpecificSensor>
static readonly "HURT_BY": $SensorType<$HurtBySensor>
static readonly "IS_IN_WATER": $SensorType<$IsInWaterSensor>
static readonly "NEAREST_ADULT": $SensorType<$AdultSensor>
static readonly "NEAREST_BED": $SensorType<$NearestBedSensor>
static readonly "NEAREST_ITEMS": $SensorType<$NearestItemSensor>
static readonly "NEAREST_LIVING_ENTITIES": $SensorType<$NearestLivingEntitySensor<$LivingEntity>>
static readonly "NEAREST_PLAYERS": $SensorType<$PlayerSensor>
static readonly "PIGLIN_BRUTE_SPECIFIC_SENSOR": $SensorType<$PiglinBruteSpecificSensor>
static readonly "PIGLIN_SPECIFIC_SENSOR": $SensorType<$PiglinSpecificSensor>
static readonly "SECONDARY_POIS": $SensorType<$SecondaryPoiSensor>
static readonly "SNIFFER_TEMPTATIONS": $SensorType<$TemptingSensor>
static readonly "VILLAGER_BABIES": $SensorType<$VillagerBabiesSensor>
static readonly "VILLAGER_HOSTILES": $SensorType<$VillagerHostilesSensor>
static readonly "WARDEN_ENTITY_SENSOR": $SensorType<$WardenEntitySensor>

constructor(supplier0: $Supplier$$Type<U>)

public "create"(): U
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.SensorType
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.SensorTypeTag
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SensorType$$Type<U extends $Sensor<any> = $Sensor<any>> = ($SensorType<U> | Special.SensorType);
}

declare module "net.minecraft.world.entity.ai.village.poi.PoiType" {
import { $Holder } from "net.minecraft.core.Holder"
import { $Predicate } from "java.util.function.Predicate"
import { $Set, $Set$$Type } from "java.util.Set"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Record } from "java.lang.Record"

export class $PoiType extends $Record {
static readonly "NONE": $Predicate<$Holder<$PoiType>>

constructor(set0: $Set$$Type<$BlockState$$Type>, int1: integer, int2: integer)

public "is"(blockState0: $BlockState$$Type): boolean
public "matchingStates"(): $Set<$BlockState>
public "maxTickets"(): integer
public "validRange"(): integer
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.PointOfInterestType
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.PointOfInterestTypeTag
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PoiType$$Type = ($PoiType | Special.PointOfInterestType);
}

declare module "net.minecraft.world.entity.ai.control.LookControl" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LookControl$$Type = ($LookControl);
}

declare module "net.minecraft.world.entity.ai.sensing.IsInWaterSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IsInWaterSensor$$Type = ($IsInWaterSensor);
}

declare module "net.minecraft.world.entity.ai.gossip.GossipContainer$GossipEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GossipContainer$GossipEntry$$Type = ($GossipContainer$GossipEntry);
}

declare module "net.minecraft.world.entity.ai.sensing.PiglinSpecificSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PiglinSpecificSensor$$Type = ($PiglinSpecificSensor);
}

declare module "net.minecraft.world.entity.ai.village.poi.PoiRecord" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PoiRecord$$Type = ($PoiRecord);
}

declare module "net.minecraft.world.entity.ai.sensing.VillagerHostilesSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $VillagerHostilesSensor$$Type = ($VillagerHostilesSensor);
}

declare module "net.minecraft.world.entity.ai.village.poi.PoiManager$Occupancy" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PoiManager$Occupancy$$Type = ($PoiManager$Occupancy | ("has_space" | "is_occupied" | "any"));
}

declare module "net.minecraft.world.entity.ai.sensing.DummySensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DummySensor$$Type = ($DummySensor);
}

declare module "net.minecraft.world.entity.ai.navigation.PathNavigation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PathNavigation$$Type = ($PathNavigation);
}

declare module "net.minecraft.world.entity.ai.sensing.FrogAttackablesSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FrogAttackablesSensor$$Type = ($FrogAttackablesSensor);
}

declare module "net.minecraft.world.entity.ai.attributes.RangedAttribute" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RangedAttribute$$Type = ($RangedAttribute);
}

declare module "net.minecraft.world.entity.ai.behavior.BehaviorControl" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BehaviorControl$$Type<E extends $LivingEntity = $LivingEntity> = ($BehaviorControl<E>);
}

declare module "net.minecraft.world.entity.ai.goal.WrappedGoal" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WrappedGoal$$Type = ($WrappedGoal);
}

declare module "net.minecraft.world.entity.ai.Brain" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Brain$$Type<E extends $LivingEntity = $LivingEntity> = ($Brain<E>);
}

declare module "net.minecraft.world.entity.ai.goal.GoalSelector" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GoalSelector$$Type = ($GoalSelector);
}

declare module "net.minecraft.world.entity.ai.behavior.PositionTracker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PositionTracker$$Type = ($PositionTracker);
}

declare module "net.minecraft.world.entity.ai.sensing.AxolotlAttackablesSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AxolotlAttackablesSensor$$Type = ($AxolotlAttackablesSensor);
}

declare module "net.minecraft.world.entity.ai.memory.NearestVisibleLivingEntities" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NearestVisibleLivingEntities$$Type = ($NearestVisibleLivingEntities);
}

declare module "net.minecraft.world.entity.ai.behavior.Behavior" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Behavior$$Type<E extends $LivingEntity = $LivingEntity> = ($Behavior<E>);
}

declare module "net.minecraft.world.entity.ai.control.JumpControl" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $JumpControl$$Type = ($JumpControl);
}

declare module "net.minecraft.world.entity.ai.memory.MemoryModuleType" {
import { $NearestVisibleLivingEntities } from "net.minecraft.world.entity.ai.memory.NearestVisibleLivingEntities"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Path } from "net.minecraft.world.level.pathfinder.Path"
import { $Unit } from "net.minecraft.util.Unit"
import { $AgeableMob } from "net.minecraft.world.entity.AgeableMob"
import { $Set } from "java.util.Set"
import { $UUID } from "java.util.UUID"
import { $ExpirableValue } from "net.minecraft.world.entity.ai.memory.ExpirableValue"
import { $Player } from "net.minecraft.world.entity.player.Player"
import { $Hoglin } from "net.minecraft.world.entity.monster.hoglin.Hoglin"
import { $GlobalPos } from "net.minecraft.core.GlobalPos"
import { $AbstractPiglin } from "net.minecraft.world.entity.monster.piglin.AbstractPiglin"
import { $List } from "java.util.List"
import { $WalkTarget } from "net.minecraft.world.entity.ai.memory.WalkTarget"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $ItemEntity } from "net.minecraft.world.entity.item.ItemEntity"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $DamageSource } from "net.minecraft.world.damagesource.DamageSource"
import { $PositionTracker } from "net.minecraft.world.entity.ai.behavior.PositionTracker"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $Mob } from "net.minecraft.world.entity.Mob"

export class $MemoryModuleType<U = any> {
static readonly "ADMIRING_DISABLED": $MemoryModuleType<boolean>
static readonly "ADMIRING_ITEM": $MemoryModuleType<boolean>
static readonly "ANGRY_AT": $MemoryModuleType<$UUID>
static readonly "ATE_RECENTLY": $MemoryModuleType<boolean>
static readonly "ATTACK_COOLING_DOWN": $MemoryModuleType<boolean>
static readonly "ATTACK_TARGET": $MemoryModuleType<$LivingEntity>
static readonly "AVOID_TARGET": $MemoryModuleType<$LivingEntity>
static readonly "BREED_TARGET": $MemoryModuleType<$AgeableMob>
static readonly "CANT_REACH_WALK_TARGET_SINCE": $MemoryModuleType<long>
static readonly "CELEBRATE_LOCATION": $MemoryModuleType<$BlockPos>
static readonly "DANCING": $MemoryModuleType<boolean>
static readonly "DIG_COOLDOWN": $MemoryModuleType<$Unit>
static readonly "DISABLE_WALK_TO_ADMIRE_ITEM": $MemoryModuleType<boolean>
static readonly "DISTURBANCE_LOCATION": $MemoryModuleType<$BlockPos>
static readonly "DOORS_TO_CLOSE": $MemoryModuleType<$Set<$GlobalPos>>
static readonly "DUMMY": $MemoryModuleType<void>
static readonly "GAZE_COOLDOWN_TICKS": $MemoryModuleType<integer>
static readonly "GOLEM_DETECTED_RECENTLY": $MemoryModuleType<boolean>
static readonly "HAS_HUNTING_COOLDOWN": $MemoryModuleType<boolean>
static readonly "HEARD_BELL_TIME": $MemoryModuleType<long>
static readonly "HIDING_PLACE": $MemoryModuleType<$GlobalPos>
static readonly "HOME": $MemoryModuleType<$GlobalPos>
static readonly "HUNTED_RECENTLY": $MemoryModuleType<boolean>
static readonly "HURT_BY": $MemoryModuleType<$DamageSource>
static readonly "HURT_BY_ENTITY": $MemoryModuleType<$LivingEntity>
static readonly "INTERACTABLE_DOORS": $MemoryModuleType<$List<$GlobalPos>>
static readonly "INTERACTION_TARGET": $MemoryModuleType<$LivingEntity>
static readonly "IS_EMERGING": $MemoryModuleType<$Unit>
static readonly "IS_IN_WATER": $MemoryModuleType<$Unit>
static readonly "IS_PANICKING": $MemoryModuleType<boolean>
static readonly "IS_PREGNANT": $MemoryModuleType<$Unit>
static readonly "IS_SNIFFING": $MemoryModuleType<$Unit>
static readonly "IS_TEMPTED": $MemoryModuleType<boolean>
static readonly "ITEM_PICKUP_COOLDOWN_TICKS": $MemoryModuleType<integer>
static readonly "JOB_SITE": $MemoryModuleType<$GlobalPos>
static readonly "LAST_SLEPT": $MemoryModuleType<long>
static readonly "LAST_WOKEN": $MemoryModuleType<long>
static readonly "LAST_WORKED_AT_POI": $MemoryModuleType<long>
static readonly "LIKED_NOTEBLOCK_COOLDOWN_TICKS": $MemoryModuleType<integer>
static readonly "LIKED_NOTEBLOCK_POSITION": $MemoryModuleType<$GlobalPos>
static readonly "LIKED_PLAYER": $MemoryModuleType<$UUID>
static readonly "LONG_JUMP_COOLDOWN_TICKS": $MemoryModuleType<integer>
static readonly "LONG_JUMP_MID_JUMP": $MemoryModuleType<boolean>
static readonly "LOOK_TARGET": $MemoryModuleType<$PositionTracker>
static readonly "MEETING_POINT": $MemoryModuleType<$GlobalPos>
static readonly "NEARBY_ADULT_PIGLINS": $MemoryModuleType<$List<$AbstractPiglin>>
static readonly "NEAREST_ATTACKABLE": $MemoryModuleType<$LivingEntity>
static readonly "NEAREST_BED": $MemoryModuleType<$BlockPos>
static readonly "NEAREST_HOSTILE": $MemoryModuleType<$LivingEntity>
static readonly "NEAREST_LIVING_ENTITIES": $MemoryModuleType<$List<$LivingEntity>>
static readonly "NEAREST_PLAYERS": $MemoryModuleType<$List<$Player>>
static readonly "NEAREST_PLAYER_HOLDING_WANTED_ITEM": $MemoryModuleType<$Player>
static readonly "NEAREST_REPELLENT": $MemoryModuleType<$BlockPos>
static readonly "NEAREST_TARGETABLE_PLAYER_NOT_WEARING_GOLD": $MemoryModuleType<$Player>
static readonly "NEAREST_VISIBLE_ADULT": $MemoryModuleType<$AgeableMob>
static readonly "NEAREST_VISIBLE_ADULT_HOGLINS": $MemoryModuleType<$List<$Hoglin>>
static readonly "NEAREST_VISIBLE_ADULT_PIGLIN": $MemoryModuleType<$AbstractPiglin>
static readonly "NEAREST_VISIBLE_ADULT_PIGLINS": $MemoryModuleType<$List<$AbstractPiglin>>
static readonly "NEAREST_VISIBLE_ATTACKABLE_PLAYER": $MemoryModuleType<$Player>
static readonly "NEAREST_VISIBLE_BABY_HOGLIN": $MemoryModuleType<$Hoglin>
static readonly "NEAREST_VISIBLE_HUNTABLE_HOGLIN": $MemoryModuleType<$Hoglin>
static readonly "NEAREST_VISIBLE_LIVING_ENTITIES": $MemoryModuleType<$NearestVisibleLivingEntities>
static readonly "NEAREST_VISIBLE_NEMESIS": $MemoryModuleType<$Mob>
static readonly "NEAREST_VISIBLE_PLAYER": $MemoryModuleType<$Player>
static readonly "NEAREST_VISIBLE_WANTED_ITEM": $MemoryModuleType<$ItemEntity>
static readonly "NEAREST_VISIBLE_ZOMBIFIED": $MemoryModuleType<$LivingEntity>
static readonly "PACIFIED": $MemoryModuleType<boolean>
static readonly "PATH": $MemoryModuleType<$Path>
static readonly "PLAY_DEAD_TICKS": $MemoryModuleType<integer>
static readonly "POTENTIAL_JOB_SITE": $MemoryModuleType<$GlobalPos>
static readonly "RAM_COOLDOWN_TICKS": $MemoryModuleType<integer>
static readonly "RAM_TARGET": $MemoryModuleType<$Vec3>
static readonly "RECENT_PROJECTILE": $MemoryModuleType<$Unit>
static readonly "RIDE_TARGET": $MemoryModuleType<$Entity>
static readonly "ROAR_SOUND_COOLDOWN": $MemoryModuleType<$Unit>
static readonly "ROAR_SOUND_DELAY": $MemoryModuleType<$Unit>
static readonly "ROAR_TARGET": $MemoryModuleType<$LivingEntity>
static readonly "SECONDARY_JOB_SITE": $MemoryModuleType<$List<$GlobalPos>>
static readonly "SNIFFER_DIGGING": $MemoryModuleType<boolean>
static readonly "SNIFFER_EXPLORED_POSITIONS": $MemoryModuleType<$List<$GlobalPos>>
static readonly "SNIFFER_HAPPY": $MemoryModuleType<boolean>
static readonly "SNIFFER_SNIFFING_TARGET": $MemoryModuleType<$BlockPos>
static readonly "SNIFF_COOLDOWN": $MemoryModuleType<$Unit>
static readonly "SONIC_BOOM_COOLDOWN": $MemoryModuleType<$Unit>
static readonly "SONIC_BOOM_SOUND_COOLDOWN": $MemoryModuleType<$Unit>
static readonly "SONIC_BOOM_SOUND_DELAY": $MemoryModuleType<$Unit>
static readonly "TEMPTATION_COOLDOWN_TICKS": $MemoryModuleType<integer>
static readonly "TEMPTING_PLAYER": $MemoryModuleType<$Player>
static readonly "TIME_TRYING_TO_REACH_ADMIRE_ITEM": $MemoryModuleType<integer>
static readonly "TOUCH_COOLDOWN": $MemoryModuleType<$Unit>
static readonly "UNIVERSAL_ANGER": $MemoryModuleType<boolean>
static readonly "UNREACHABLE_TONGUE_TARGETS": $MemoryModuleType<$List<$UUID>>
static readonly "VIBRATION_COOLDOWN": $MemoryModuleType<$Unit>
static readonly "VISIBLE_ADULT_HOGLIN_COUNT": $MemoryModuleType<integer>
static readonly "VISIBLE_ADULT_PIGLIN_COUNT": $MemoryModuleType<integer>
static readonly "VISIBLE_VILLAGER_BABIES": $MemoryModuleType<$List<$LivingEntity>>
static readonly "WALK_TARGET": $MemoryModuleType<$WalkTarget>

constructor(optional0: $Optional$$Type<$Codec$$Type<U>>)

public "getCodec"(): $Optional<$Codec<$ExpirableValue<U>>>
get "codec"(): $Optional<$Codec<$ExpirableValue<U>>>
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.MemoryModuleType
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.MemoryModuleTypeTag
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MemoryModuleType$$Type<U = any> = ($MemoryModuleType<U> | Special.MemoryModuleType);
}

declare module "net.minecraft.world.entity.ai.gossip.GossipType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GossipType$$Type = ($GossipType | ("major_negative" | "minor_negative" | "minor_positive" | "major_positive" | "trading"));
}

declare module "net.minecraft.world.entity.ai.village.ReputationEventType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ReputationEventType$$Type = ($ReputationEventType);
}

declare module "net.minecraft.world.entity.ai.behavior.Behavior$Status" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Behavior$Status$$Type = ($Behavior$Status | ("stopped" | "running"));
}

declare module "net.minecraft.world.entity.ai.sensing.Sensing" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Sensing$$Type = ($Sensing);
}

declare module "net.minecraft.world.entity.ai.sensing.AdultSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AdultSensor$$Type = ($AdultSensor);
}

declare module "net.minecraft.world.entity.ai.sensing.NearestBedSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NearestBedSensor$$Type = ($NearestBedSensor);
}

declare module "net.minecraft.world.entity.ai.village.poi.PoiSection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PoiSection$$Type = ($PoiSection);
}

declare module "net.minecraft.world.entity.ai.sensing.NearestLivingEntitySensor" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NearestLivingEntitySensor$$Type<T extends $LivingEntity = $LivingEntity> = ($NearestLivingEntitySensor<T>);
}

declare module "net.minecraft.world.entity.ai.attributes.AttributeSupplier$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AttributeSupplier$Builder$$Type = ($AttributeSupplier$Builder);
}

declare module "net.minecraft.world.entity.ai.Brain$MemoryValue" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Brain$MemoryValue$$Type<U = any> = ($Brain$MemoryValue<U>);
}

declare module "net.minecraft.world.entity.ai.targeting.TargetingConditions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TargetingConditions$$Type = ($TargetingConditions);
}

declare module "net.minecraft.world.entity.ai.memory.WalkTarget" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WalkTarget$$Type = ($WalkTarget);
}

declare module "net.minecraft.world.entity.ai.goal.Goal$Flag" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Goal$Flag$$Type = ($Goal$Flag | ("move" | "look" | "jump" | "target"));
}

declare module "net.minecraft.world.entity.ai.control.Control" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Control$$Type = ($Control);
}

declare module "net.minecraft.world.entity.ai.Brain$Provider" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Brain$Provider$$Type<E extends $LivingEntity = $LivingEntity> = ($Brain$Provider<E>);
}

declare module "net.minecraft.world.entity.ai.sensing.HurtBySensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HurtBySensor$$Type = ($HurtBySensor);
}

declare module "net.minecraft.world.entity.ai.sensing.PlayerSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PlayerSensor$$Type = ($PlayerSensor);
}

declare module "net.minecraft.world.entity.ai.control.MoveControl" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MoveControl$$Type = ($MoveControl);
}

