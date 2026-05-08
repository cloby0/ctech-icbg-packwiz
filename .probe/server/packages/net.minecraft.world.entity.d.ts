declare module "net.minecraft.world.entity.RelativeMovement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RelativeMovement$$Type = ($RelativeMovement | ("x" | "y" | "z" | "y_rot" | "x_rot"));
}

declare module "net.minecraft.world.entity.EntityType$EntityFactory" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityType } from "net.minecraft.world.entity.EntityType"
import { $Level } from "net.minecraft.world.level.Level"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntityType$EntityFactory$$Type<T extends $Entity = $Entity> = ($EntityType$EntityFactory<T> | ((arg0: $EntityType<T>, arg1: $Level) => T));
}

declare module "net.minecraft.world.entity.ExperienceOrb" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ExperienceOrb$$Type = ($ExperienceOrb);
}

declare module "net.minecraft.world.entity.Shearable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Shearable$$Type = ($Shearable);
}

declare module "net.minecraft.world.entity.VariantHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $VariantHolder$$Type<T = any> = ($VariantHolder<T>);
}

declare module "net.minecraft.world.entity.Display$RenderState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Display$RenderState$$Type = ($Display$RenderState);
}

declare module "net.minecraft.world.entity.GlowSquid" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GlowSquid$$Type = ($GlowSquid);
}

declare module "net.minecraft.world.entity.Display$TextDisplay" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Display$TextDisplay$$Type = ($Display$TextDisplay);
}

declare module "net.minecraft.world.entity.SpawnPlacements$SpawnPredicate" {
import { $ServerLevelAccessor } from "net.minecraft.world.level.ServerLevelAccessor"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $EntityType } from "net.minecraft.world.entity.EntityType"
import { $MobSpawnType } from "net.minecraft.world.entity.MobSpawnType"
import { $RandomSource } from "net.minecraft.util.RandomSource"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SpawnPlacements$SpawnPredicate$$Type<T extends $Entity = $Entity> = ($SpawnPlacements$SpawnPredicate<T> | ((arg0: $EntityType<T>, arg1: $ServerLevelAccessor, arg2: $MobSpawnType, arg3: $BlockPos, arg4: $RandomSource) => boolean));
}

declare module "net.minecraft.world.entity.MoverType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MoverType$$Type = ($MoverType | ("self" | "player" | "piston" | "shulker_box" | "shulker"));
}

declare module "net.minecraft.world.entity.Display$BlockDisplay" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Display$BlockDisplay$$Type = ($Display$BlockDisplay);
}

declare module "net.minecraft.world.entity.Display$BillboardConstraints" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Display$BillboardConstraints$$Type = ($Display$BillboardConstraints | ("fixed" | "vertical" | "horizontal" | "center"));
}

declare module "net.minecraft.world.entity.HasCustomInventoryScreen" {
import { $Player } from "net.minecraft.world.entity.player.Player"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HasCustomInventoryScreen$$Type = ($HasCustomInventoryScreen | ((arg0: $Player) => void));
}

declare module "net.minecraft.world.entity.PlayerRideable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PlayerRideable$$Type = ($PlayerRideable);
}

declare module "net.minecraft.world.entity.FlyingMob" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FlyingMob$$Type = ($FlyingMob);
}

declare module "net.minecraft.world.entity.AgeableMob" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AgeableMob$$Type = ($AgeableMob);
}

declare module "net.minecraft.world.entity.OwnableEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $OwnableEntity$$Type = ($OwnableEntity);
}

declare module "net.minecraft.world.entity.TamableAnimal" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TamableAnimal$$Type = ($TamableAnimal);
}

declare module "net.minecraft.world.entity.Entity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Entity$$Type = ($Entity);
}

declare module "net.minecraft.world.entity.EntityDimensions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntityDimensions$$Type = ($EntityDimensions);
}

declare module "net.minecraft.world.entity.SlotAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SlotAccess$$Type = ($SlotAccess);
}

declare module "net.minecraft.world.entity.SpawnGroupData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SpawnGroupData$$Type = ($SpawnGroupData);
}

declare module "net.minecraft.world.entity.WalkAnimationState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WalkAnimationState$$Type = ($WalkAnimationState);
}

declare module "net.minecraft.world.entity.Pose" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Pose$$Type = ($Pose | ("standing" | "fall_flying" | "sleeping" | "swimming" | "spin_attack" | "crouching" | "long_jumping" | "dying" | "croaking" | "using_tongue" | "sitting" | "roaring" | "sniffing" | "emerging" | "digging" | "rolling" | "vaulting"));
}

declare module "net.minecraft.world.entity.Display$TextDisplay$TextRenderState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Display$TextDisplay$TextRenderState$$Type = ($Display$TextDisplay$TextRenderState);
}

declare module "net.minecraft.world.entity.AnimationState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AnimationState$$Type = ($AnimationState);
}

declare module "net.minecraft.world.entity.RiderShieldingMount" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RiderShieldingMount$$Type = ($RiderShieldingMount | (() => double));
}

declare module "net.minecraft.world.entity.PlayerRideableJumping" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PlayerRideableJumping$$Type = ($PlayerRideableJumping);
}

declare module "net.minecraft.world.entity.Entity$RemovalReason" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Entity$RemovalReason$$Type = ($Entity$RemovalReason | ("killed" | "discarded" | "unloaded_to_chunk" | "unloaded_with_player" | "changed_dimension"));
}

declare module "net.minecraft.world.entity.NeutralMob" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NeutralMob$$Type = ($NeutralMob);
}

declare module "net.minecraft.world.entity.Display$TextDisplay$CachedInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Display$TextDisplay$CachedInfo$$Type = ($Display$TextDisplay$CachedInfo);
}

declare module "net.minecraft.world.entity.Display$IntInterpolator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Display$IntInterpolator$$Type = ($Display$IntInterpolator | ((arg0: float) => integer));
}

declare module "net.minecraft.world.entity.EquipmentSlot$Type" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EquipmentSlot$Type$$Type = ($EquipmentSlot$Type | ("hand" | "armor"));
}

declare module "net.minecraft.world.entity.AreaEffectCloud" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AreaEffectCloud$$Type = ($AreaEffectCloud);
}

declare module "net.minecraft.world.entity.Display$BlockDisplay$BlockRenderState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Display$BlockDisplay$BlockRenderState$$Type = ($Display$BlockDisplay$BlockRenderState);
}

declare module "net.minecraft.world.entity.Display" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Display$$Type = ($Display);
}

declare module "net.minecraft.world.entity.Display$ItemDisplay" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Display$ItemDisplay$$Type = ($Display$ItemDisplay);
}

declare module "net.minecraft.world.entity.Display$TextDisplay$Align" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Display$TextDisplay$Align$$Type = ($Display$TextDisplay$Align | ("center" | "left" | "right"));
}

declare module "net.minecraft.world.entity.Display$FloatInterpolator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Display$FloatInterpolator$$Type = ($Display$FloatInterpolator | ((arg0: float) => float));
}

declare module "net.minecraft.world.entity.MobCategory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MobCategory$$Type = ($MobCategory | ("monster" | "creature" | "ambient" | "axolotls" | "underground_water_creature" | "water_creature" | "water_ambient" | "misc" | "legendary_hostile_creature" | "aether_surface_monster" | "aether_darkness_monster" | "aether_sky_monster" | "aether_aerwhale"));
}

declare module "net.minecraft.world.entity.LerpingModel" {
import { $Map$$Type } from "java.util.Map"
import { $Vector3f$$Type } from "org.joml.Vector3f"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LerpingModel$$Type = ($LerpingModel | (() => $Map$$Type<string, $Vector3f$$Type>));
}

declare module "net.minecraft.world.entity.EquipmentSlot" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EquipmentSlot$$Type = ($EquipmentSlot | ("mainhand" | "offhand" | "feet" | "legs" | "chest" | "head"));
}

declare module "net.minecraft.world.entity.Display$TextDisplay$LineSplitter" {
import { $Display$TextDisplay$CachedInfo$$Type } from "net.minecraft.world.entity.Display$TextDisplay$CachedInfo"
import { $Component } from "net.minecraft.network.chat.Component"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Display$TextDisplay$LineSplitter$$Type = ($Display$TextDisplay$LineSplitter | ((arg0: $Component, arg1: integer) => $Display$TextDisplay$CachedInfo$$Type));
}

declare module "net.minecraft.world.entity.LightningBolt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LightningBolt$$Type = ($LightningBolt);
}

declare module "net.minecraft.world.entity.EntityType" {
import { $Mule } from "net.minecraft.world.entity.animal.horse.Mule"
import { $Pillager } from "net.minecraft.world.entity.monster.Pillager"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $WitherSkull } from "net.minecraft.world.entity.projectile.WitherSkull"
import { $Goat } from "net.minecraft.world.entity.animal.goat.Goat"
import { $WitherBoss } from "net.minecraft.world.entity.boss.wither.WitherBoss"
import { $Vex } from "net.minecraft.world.entity.monster.Vex"
import { $Husk } from "net.minecraft.world.entity.monster.Husk"
import { $Interaction } from "net.minecraft.world.entity.Interaction"
import { $FireworkRocketEntity } from "net.minecraft.world.entity.projectile.FireworkRocketEntity"
import { $ItemFrame } from "net.minecraft.world.entity.decoration.ItemFrame"
import { $ShulkerBullet } from "net.minecraft.world.entity.projectile.ShulkerBullet"
import { $Zombie } from "net.minecraft.world.entity.monster.Zombie"
import { $Holder } from "net.minecraft.core.Holder"
import { $Cat } from "net.minecraft.world.entity.animal.Cat"
import { $GlowItemFrame } from "net.minecraft.world.entity.decoration.GlowItemFrame"
import { $Frog } from "net.minecraft.world.entity.animal.frog.Frog"
import { $Horse } from "net.minecraft.world.entity.animal.horse.Horse"
import { $ThrownEnderpearl } from "net.minecraft.world.entity.projectile.ThrownEnderpearl"
import { $MinecartHopper } from "net.minecraft.world.entity.vehicle.MinecartHopper"
import { $Drowned } from "net.minecraft.world.entity.monster.Drowned"
import { $Ravager } from "net.minecraft.world.entity.monster.Ravager"
import { $Giant } from "net.minecraft.world.entity.monster.Giant"
import { $ExperienceOrb } from "net.minecraft.world.entity.ExperienceOrb"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Phantom } from "net.minecraft.world.entity.monster.Phantom"
import { $Piglin } from "net.minecraft.world.entity.monster.piglin.Piglin"
import { $ThrownPotion } from "net.minecraft.world.entity.projectile.ThrownPotion"
import { $FeatureFlagSet, $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $Stream } from "java.util.stream.Stream"
import { $Boat } from "net.minecraft.world.entity.vehicle.Boat"
import { $Marker } from "net.minecraft.world.entity.Marker"
import { $Witch } from "net.minecraft.world.entity.monster.Witch"
import { $ChestBoat } from "net.minecraft.world.entity.vehicle.ChestBoat"
import { $Creeper } from "net.minecraft.world.entity.monster.Creeper"
import { $Evoker } from "net.minecraft.world.entity.monster.Evoker"
import { $InjectedEntityTypeExtension } from "dev.architectury.extensions.injected.InjectedEntityTypeExtension"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $EvokerFangs } from "net.minecraft.world.entity.projectile.EvokerFangs"
import { $ZombieHorse } from "net.minecraft.world.entity.animal.horse.ZombieHorse"
import { $FishingHook } from "net.minecraft.world.entity.projectile.FishingHook"
import { $Ocelot } from "net.minecraft.world.entity.animal.Ocelot"
import { $Panda } from "net.minecraft.world.entity.animal.Panda"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $MagmaCube } from "net.minecraft.world.entity.monster.MagmaCube"
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $Endermite } from "net.minecraft.world.entity.monster.Endermite"
import { $WitherSkeleton } from "net.minecraft.world.entity.monster.WitherSkeleton"
import { $Dolphin } from "net.minecraft.world.entity.animal.Dolphin"
import { $EntityType$EntityFactory$$Type } from "net.minecraft.world.entity.EntityType$EntityFactory"
import { $Stray } from "net.minecraft.world.entity.monster.Stray"
import { $Turtle } from "net.minecraft.world.entity.animal.Turtle"
import { $EntityTypeExtension } from "dev.engine_room.flywheel.impl.extension.EntityTypeExtension"
import { $LargeFireball } from "net.minecraft.world.entity.projectile.LargeFireball"
import { $Sniffer } from "net.minecraft.world.entity.animal.sniffer.Sniffer"
import { $ZombifiedPiglin } from "net.minecraft.world.entity.monster.ZombifiedPiglin"
import { $Display$TextDisplay } from "net.minecraft.world.entity.Display$TextDisplay"
import { $LightningBolt } from "net.minecraft.world.entity.LightningBolt"
import { $Illusioner } from "net.minecraft.world.entity.monster.Illusioner"
import { $Painting } from "net.minecraft.world.entity.decoration.Painting"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Tadpole } from "net.minecraft.world.entity.animal.frog.Tadpole"
import { $ToIntFunction$$Type } from "java.util.function.ToIntFunction"
import { $Warden } from "net.minecraft.world.entity.monster.warden.Warden"
import { $ThrownTrident } from "net.minecraft.world.entity.projectile.ThrownTrident"
import { $TropicalFish } from "net.minecraft.world.entity.animal.TropicalFish"
import { $Ghast } from "net.minecraft.world.entity.monster.Ghast"
import { $Snowball } from "net.minecraft.world.entity.projectile.Snowball"
import { $Guardian } from "net.minecraft.world.entity.monster.Guardian"
import { $MinecartTNT } from "net.minecraft.world.entity.vehicle.MinecartTNT"
import { $Zoglin } from "net.minecraft.world.entity.monster.Zoglin"
import { $SnowGolem } from "net.minecraft.world.entity.animal.SnowGolem"
import { $EntityDimensions, $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $GlowSquid } from "net.minecraft.world.entity.GlowSquid"
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $FeatureElement } from "net.minecraft.world.flag.FeatureElement"
import { $Bat } from "net.minecraft.world.entity.ambient.Bat"
import { $FallingBlockEntity } from "net.minecraft.world.entity.item.FallingBlockEntity"
import { $ElderGuardian } from "net.minecraft.world.entity.monster.ElderGuardian"
import { $MinecartChest } from "net.minecraft.world.entity.vehicle.MinecartChest"
import { $LlamaSpit } from "net.minecraft.world.entity.projectile.LlamaSpit"
import { $Shulker } from "net.minecraft.world.entity.monster.Shulker"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Donkey } from "net.minecraft.world.entity.animal.horse.Donkey"
import { $SmallFireball } from "net.minecraft.world.entity.projectile.SmallFireball"
import { $Minecart } from "net.minecraft.world.entity.vehicle.Minecart"
import { $EntityTypeTest } from "net.minecraft.world.level.entity.EntityTypeTest"
import { $RegistryEntry } from "me.kall.duplicationless.ext.RegistryEntry"
import { $ThrownExperienceBottle } from "net.minecraft.world.entity.projectile.ThrownExperienceBottle"
import { $PrimedTnt } from "net.minecraft.world.entity.item.PrimedTnt"
import { $Allay } from "net.minecraft.world.entity.animal.allay.Allay"
import { $Villager } from "net.minecraft.world.entity.npc.Villager"
import { $PlayMessages$SpawnEntity$$Type } from "net.minecraftforge.network.PlayMessages$SpawnEntity"
import { $MinecartCommandBlock } from "net.minecraft.world.entity.vehicle.MinecartCommandBlock"
import { $EnderDragon } from "net.minecraft.world.entity.boss.enderdragon.EnderDragon"
import { $MinecartSpawner } from "net.minecraft.world.entity.vehicle.MinecartSpawner"
import { $ZombieVillager } from "net.minecraft.world.entity.monster.ZombieVillager"
import { $SpectralArrow } from "net.minecraft.world.entity.projectile.SpectralArrow"
import { $Squid } from "net.minecraft.world.entity.animal.Squid"
import { $Pig } from "net.minecraft.world.entity.animal.Pig"
import { $ImmutableSet$$Type } from "com.google.common.collect.ImmutableSet"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $AreaEffectCloud } from "net.minecraft.world.entity.AreaEffectCloud"
import { $Cow } from "net.minecraft.world.entity.animal.Cow"
import { $EnderMan } from "net.minecraft.world.entity.monster.EnderMan"
import { $Hoglin } from "net.minecraft.world.entity.monster.hoglin.Hoglin"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $DynamicLightHandlerHolder } from "toni.sodiumdynamiclights.accessor.DynamicLightHandlerHolder"
import { $Chicken } from "net.minecraft.world.entity.animal.Chicken"
import { $IronGolem } from "net.minecraft.world.entity.animal.IronGolem"
import { $List$$Type } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $PiglinBrute } from "net.minecraft.world.entity.monster.piglin.PiglinBrute"
import { $ItemEntity } from "net.minecraft.world.entity.item.ItemEntity"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Bee } from "net.minecraft.world.entity.animal.Bee"
import { $Cod } from "net.minecraft.world.entity.animal.Cod"
import { $Optional } from "java.util.Optional"
import { $MushroomCow } from "net.minecraft.world.entity.animal.MushroomCow"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $DynamicLightHandler, $DynamicLightHandler$$Type } from "dev.lambdaurora.lambdynlights.api.DynamicLightHandler"
import { $PolarBear } from "net.minecraft.world.entity.animal.PolarBear"
import { $WanderingTrader } from "net.minecraft.world.entity.npc.WanderingTrader"
import { $Skeleton } from "net.minecraft.world.entity.monster.Skeleton"
import { $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $Llama } from "net.minecraft.world.entity.animal.horse.Llama"
import { $Strider } from "net.minecraft.world.entity.monster.Strider"
import { $TraderLlama } from "net.minecraft.world.entity.animal.horse.TraderLlama"
import { $MobSpawnType$$Type } from "net.minecraft.world.entity.MobSpawnType"
import { $Spider } from "net.minecraft.world.entity.monster.Spider"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $Function$$Type } from "java.util.function.Function"
import { $Display$BlockDisplay } from "net.minecraft.world.entity.Display$BlockDisplay"
import { $Rabbit } from "net.minecraft.world.entity.animal.Rabbit"
import { $MinecartFurnace } from "net.minecraft.world.entity.vehicle.MinecartFurnace"
import { $MobCategory, $MobCategory$$Type } from "net.minecraft.world.entity.MobCategory"
import { $Camel } from "net.minecraft.world.entity.animal.camel.Camel"
import { $ArmorStand } from "net.minecraft.world.entity.decoration.ArmorStand"
import { $CaveSpider } from "net.minecraft.world.entity.monster.CaveSpider"
import { $Vindicator } from "net.minecraft.world.entity.monster.Vindicator"
import { $EyeOfEnder } from "net.minecraft.world.entity.projectile.EyeOfEnder"
import { $SkeletonHorse } from "net.minecraft.world.entity.animal.horse.SkeletonHorse"
import { $Fox } from "net.minecraft.world.entity.animal.Fox"
import { $Wolf } from "net.minecraft.world.entity.animal.Wolf"
import { $EndCrystal } from "net.minecraft.world.entity.boss.enderdragon.EndCrystal"
import { $DragonFireball } from "net.minecraft.world.entity.projectile.DragonFireball"
import { $Blaze } from "net.minecraft.world.entity.monster.Blaze"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $EntityVisualizer, $EntityVisualizer$$Type } from "dev.engine_room.flywheel.api.visualization.EntityVisualizer"
import { $ThrownEgg } from "net.minecraft.world.entity.projectile.ThrownEgg"
import { $Arrow } from "net.minecraft.world.entity.projectile.Arrow"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Display$ItemDisplay } from "net.minecraft.world.entity.Display$ItemDisplay"
import { $Pufferfish } from "net.minecraft.world.entity.animal.Pufferfish"
import { $LeashFenceKnotEntity } from "net.minecraft.world.entity.decoration.LeashFenceKnotEntity"
import { $Parrot } from "net.minecraft.world.entity.animal.Parrot"
import { $Axolotl } from "net.minecraft.world.entity.animal.axolotl.Axolotl"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $Salmon } from "net.minecraft.world.entity.animal.Salmon"
import { $Silverfish } from "net.minecraft.world.entity.monster.Silverfish"
import { $Slime } from "net.minecraft.world.entity.monster.Slime"
import { $Sheep } from "net.minecraft.world.entity.animal.Sheep"

export class $EntityType<T extends $Entity = $Entity> implements $FeatureElement, $EntityTypeTest<$Entity, T>, $EntityTypeExtension, $DynamicLightHandlerHolder, $RegistryEntry, $InjectedEntityTypeExtension {
static readonly "ALLAY": $EntityType<$Allay>
static readonly "AREA_EFFECT_CLOUD": $EntityType<$AreaEffectCloud>
static readonly "ARMOR_STAND": $EntityType<$ArmorStand>
static readonly "ARROW": $EntityType<$Arrow>
static readonly "AXOLOTL": $EntityType<$Axolotl>
static readonly "BAT": $EntityType<$Bat>
static readonly "BEE": $EntityType<$Bee>
static readonly "BLAZE": $EntityType<$Blaze>
static readonly "BLOCK_DISPLAY": $EntityType<$Display$BlockDisplay>
static readonly "BOAT": $EntityType<$Boat>
static readonly "CAMEL": $EntityType<$Camel>
static readonly "CAT": $EntityType<$Cat>
static readonly "CAVE_SPIDER": $EntityType<$CaveSpider>
static readonly "CHEST_BOAT": $EntityType<$ChestBoat>
static readonly "CHEST_MINECART": $EntityType<$MinecartChest>
static readonly "CHICKEN": $EntityType<$Chicken>
static readonly "COD": $EntityType<$Cod>
static readonly "COMMAND_BLOCK_MINECART": $EntityType<$MinecartCommandBlock>
static readonly "COW": $EntityType<$Cow>
static readonly "CREEPER": $EntityType<$Creeper>
static readonly "DOLPHIN": $EntityType<$Dolphin>
static readonly "DONKEY": $EntityType<$Donkey>
static readonly "DRAGON_FIREBALL": $EntityType<$DragonFireball>
static readonly "DROWNED": $EntityType<$Drowned>
static readonly "EGG": $EntityType<$ThrownEgg>
static readonly "ELDER_GUARDIAN": $EntityType<$ElderGuardian>
static readonly "ENDERMAN": $EntityType<$EnderMan>
static readonly "ENDERMITE": $EntityType<$Endermite>
static readonly "ENDER_DRAGON": $EntityType<$EnderDragon>
static readonly "ENDER_PEARL": $EntityType<$ThrownEnderpearl>
static readonly "END_CRYSTAL": $EntityType<$EndCrystal>
static readonly "ENTITY_TAG": string
static readonly "EVOKER": $EntityType<$Evoker>
static readonly "EVOKER_FANGS": $EntityType<$EvokerFangs>
static readonly "EXPERIENCE_BOTTLE": $EntityType<$ThrownExperienceBottle>
static readonly "EXPERIENCE_ORB": $EntityType<$ExperienceOrb>
static readonly "EYE_OF_ENDER": $EntityType<$EyeOfEnder>
static readonly "FALLING_BLOCK": $EntityType<$FallingBlockEntity>
static readonly "FIREBALL": $EntityType<$LargeFireball>
static readonly "FIREWORK_ROCKET": $EntityType<$FireworkRocketEntity>
static readonly "FISHING_BOBBER": $EntityType<$FishingHook>
static readonly "FOX": $EntityType<$Fox>
static readonly "FROG": $EntityType<$Frog>
static readonly "FURNACE_MINECART": $EntityType<$MinecartFurnace>
static readonly "GHAST": $EntityType<$Ghast>
static readonly "GIANT": $EntityType<$Giant>
static readonly "GLOW_ITEM_FRAME": $EntityType<$GlowItemFrame>
static readonly "GLOW_SQUID": $EntityType<$GlowSquid>
static readonly "GOAT": $EntityType<$Goat>
static readonly "GUARDIAN": $EntityType<$Guardian>
static readonly "HOGLIN": $EntityType<$Hoglin>
static readonly "HOPPER_MINECART": $EntityType<$MinecartHopper>
static readonly "HORSE": $EntityType<$Horse>
static readonly "HUSK": $EntityType<$Husk>
static readonly "ILLUSIONER": $EntityType<$Illusioner>
static readonly "INTERACTION": $EntityType<$Interaction>
static readonly "IRON_GOLEM": $EntityType<$IronGolem>
static readonly "ITEM": $EntityType<$ItemEntity>
static readonly "ITEM_DISPLAY": $EntityType<$Display$ItemDisplay>
static readonly "ITEM_FRAME": $EntityType<$ItemFrame>
static readonly "LEASH_KNOT": $EntityType<$LeashFenceKnotEntity>
static readonly "LIGHTNING_BOLT": $EntityType<$LightningBolt>
static readonly "LLAMA": $EntityType<$Llama>
static readonly "LLAMA_SPIT": $EntityType<$LlamaSpit>
static readonly "MAGMA_CUBE": $EntityType<$MagmaCube>
static readonly "MARKER": $EntityType<$Marker>
static readonly "MINECART": $EntityType<$Minecart>
static readonly "MOOSHROOM": $EntityType<$MushroomCow>
static readonly "MULE": $EntityType<$Mule>
static readonly "OCELOT": $EntityType<$Ocelot>
static readonly "PAINTING": $EntityType<$Painting>
static readonly "PANDA": $EntityType<$Panda>
static readonly "PARROT": $EntityType<$Parrot>
static readonly "PHANTOM": $EntityType<$Phantom>
static readonly "PIG": $EntityType<$Pig>
static readonly "PIGLIN": $EntityType<$Piglin>
static readonly "PIGLIN_BRUTE": $EntityType<$PiglinBrute>
static readonly "PILLAGER": $EntityType<$Pillager>
static readonly "PLAYER": $EntityType<$Player>
static readonly "POLAR_BEAR": $EntityType<$PolarBear>
static readonly "POTION": $EntityType<$ThrownPotion>
static readonly "PUFFERFISH": $EntityType<$Pufferfish>
static readonly "RABBIT": $EntityType<$Rabbit>
static readonly "RAVAGER": $EntityType<$Ravager>
static readonly "SALMON": $EntityType<$Salmon>
static readonly "SHEEP": $EntityType<$Sheep>
static readonly "SHULKER": $EntityType<$Shulker>
static readonly "SHULKER_BULLET": $EntityType<$ShulkerBullet>
static readonly "SILVERFISH": $EntityType<$Silverfish>
static readonly "SKELETON": $EntityType<$Skeleton>
static readonly "SKELETON_HORSE": $EntityType<$SkeletonHorse>
static readonly "SLIME": $EntityType<$Slime>
static readonly "SMALL_FIREBALL": $EntityType<$SmallFireball>
static readonly "SNIFFER": $EntityType<$Sniffer>
static readonly "SNOWBALL": $EntityType<$Snowball>
static readonly "SNOW_GOLEM": $EntityType<$SnowGolem>
static readonly "SPAWNER_MINECART": $EntityType<$MinecartSpawner>
static readonly "SPECTRAL_ARROW": $EntityType<$SpectralArrow>
static readonly "SPIDER": $EntityType<$Spider>
static readonly "SQUID": $EntityType<$Squid>
static readonly "STRAY": $EntityType<$Stray>
static readonly "STRIDER": $EntityType<$Strider>
static readonly "TADPOLE": $EntityType<$Tadpole>
static readonly "TEXT_DISPLAY": $EntityType<$Display$TextDisplay>
static readonly "TNT": $EntityType<$PrimedTnt>
static readonly "TNT_MINECART": $EntityType<$MinecartTNT>
static readonly "TRADER_LLAMA": $EntityType<$TraderLlama>
static readonly "TRIDENT": $EntityType<$ThrownTrident>
static readonly "TROPICAL_FISH": $EntityType<$TropicalFish>
static readonly "TURTLE": $EntityType<$Turtle>
static readonly "VEX": $EntityType<$Vex>
static readonly "VILLAGER": $EntityType<$Villager>
static readonly "VINDICATOR": $EntityType<$Vindicator>
static readonly "WANDERING_TRADER": $EntityType<$WanderingTrader>
static readonly "WARDEN": $EntityType<$Warden>
static readonly "WITCH": $EntityType<$Witch>
static readonly "WITHER": $EntityType<$WitherBoss>
static readonly "WITHER_SKELETON": $EntityType<$WitherSkeleton>
static readonly "WITHER_SKULL": $EntityType<$WitherSkull>
static readonly "WOLF": $EntityType<$Wolf>
static readonly "ZOGLIN": $EntityType<$Zoglin>
static readonly "ZOMBIE": $EntityType<$Zombie>
static readonly "ZOMBIE_HORSE": $EntityType<$ZombieHorse>
static readonly "ZOMBIE_VILLAGER": $EntityType<$ZombieVillager>
static readonly "ZOMBIFIED_PIGLIN": $EntityType<$ZombifiedPiglin>

constructor(entityFactory0: $EntityType$EntityFactory$$Type<T>, mobCategory1: $MobCategory$$Type, boolean2: boolean, boolean3: boolean, boolean4: boolean, boolean5: boolean, immutableSet6: $ImmutableSet$$Type<$Block$$Type>, entityDimensions7: $EntityDimensions$$Type, int8: integer, int9: integer, featureFlagSet10: $FeatureFlagSet$$Type, predicate11: $Predicate$$Type<$EntityType$$Type<any>>, toIntFunction12: $ToIntFunction$$Type<$EntityType$$Type<any>>, toIntFunction13: $ToIntFunction$$Type<$EntityType$$Type<any>>, biFunction14: $BiFunction$$Type<$PlayMessages$SpawnEntity$$Type, $Level$$Type, T>)
constructor(entityFactory0: $EntityType$EntityFactory$$Type<T>, mobCategory1: $MobCategory$$Type, boolean2: boolean, boolean3: boolean, boolean4: boolean, boolean5: boolean, immutableSet6: $ImmutableSet$$Type<$Block$$Type>, entityDimensions7: $EntityDimensions$$Type, int8: integer, int9: integer, featureFlagSet10: $FeatureFlagSet$$Type)

public static "appendCustomEntityStackConfig"<T extends $Entity>(consumer0: $Consumer$$Type<T>, serverLevel1: $ServerLevel$$Type, itemStack2: $ItemStack$$Type, player3: $Player$$Type): $Consumer<T>
public static "appendCustomNameConfig"<T extends $Entity>(consumer0: $Consumer$$Type<T>, itemStack1: $ItemStack$$Type): $Consumer<T>
public static "appendDefaultStackConfig"<T extends $Entity>(consumer0: $Consumer$$Type<T>, serverLevel1: $ServerLevel$$Type, itemStack2: $ItemStack$$Type, player3: $Player$$Type): $Consumer<T>
public "arch$holder"(): $Holder<$EntityType<any>>
public "arch$registryName"(): $ResourceLocation
/** @deprecated */
public "builtInRegistryHolder"(): $Holder$Reference<$EntityType<any>>
public static "by"(compoundTag0: $CompoundTag$$Type): $Optional<$EntityType<any>>
public static "byString"(string0: string): $Optional<$EntityType<any>>
public "canSerialize"(): boolean
public "canSpawnFarFromPlayer"(): boolean
public "canSummon"(): boolean
public static "cast"<T extends $Entity>(entityType: $EntityType$$Type<T>): $DynamicLightHandlerHolder<T>
public static "cast"<T extends $BlockEntity>(entityType: $BlockEntityType$$Type<T>): $DynamicLightHandlerHolder<T>
public "clientTrackingRange"(): integer
public "create"(serverLevel0: $ServerLevel$$Type, compoundTag1: $CompoundTag$$Type, consumer2: $Consumer$$Type<T>, blockPos3: $BlockPos$$Type, mobSpawnType4: $MobSpawnType$$Type, boolean5: boolean, boolean6: boolean): T
public static "create"(compoundTag0: $CompoundTag$$Type, level1: $Level$$Type): $Optional<$Entity>
public "create"(level0: $Level$$Type): T
public static "createDefaultStackConfig"<T extends $Entity>(serverLevel0: $ServerLevel$$Type, itemStack1: $ItemStack$$Type, player2: $Player$$Type): $Consumer<T>
public "customClientSpawn"(spawnEntity0: $PlayMessages$SpawnEntity$$Type, level1: $Level$$Type): T
public "fireImmune"(): boolean
public "flywheel$getVisualizer"(): $EntityVisualizer
public "flywheel$setVisualizer"(visualizer: $EntityVisualizer$$Type): void
public static "forClass"<B, T extends B>(class0: $Class$$Type<T>): $EntityTypeTest<B, T>
public static "get"(item: $Item$$Type): $ResourceLocation
public static "get"(block: $Block$$Type): $ResourceLocation
public static "get"(state: $BlockState$$Type): $ResourceLocation
public static "get"(entity: $Entity$$Type): $ResourceLocation
public static "get"(stack: $ItemStack$$Type): $ResourceLocation
public static "get"(type: $EntityType$$Type<any>): $ResourceLocation
public "getAABB"(double0: double, double1: double, double2: double): $AABB
public "getBaseClass"(): $Class<$Entity>
public "getCategory"(): $MobCategory
public "getDefaultLootTable"(): $ResourceLocation
public "getDescription"(): $Component
public "getDescriptionId"(): string
public "getDimensions"(): $EntityDimensions
public "getHeight"(): float
public static "getKey"(entityType0: $EntityType$$Type<any>): $ResourceLocation
public "getTags"(): $Stream<$TagKey<$EntityType<any>>>
public "getWidth"(): float
public "is"(tagKey0: $TagKey$$Type<$EntityType$$Type<any>>): boolean
public "isBlockDangerous"(blockState0: $BlockState$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public static "loadEntitiesRecursive"(list0: $List$$Type<$Tag$$Type>, level1: $Level$$Type): $Stream<$Entity>
public static "loadEntityRecursive"(compoundTag0: $CompoundTag$$Type, level1: $Level$$Type, function2: $Function$$Type<$Entity$$Type, $Entity>): $Entity
public "registry$getName"(): $ResourceLocation
public "requiredFeatures"(): $FeatureFlagSet
public "sodiumdynamiclights$getDynamicLightHandler"(): $DynamicLightHandler
public "sodiumdynamiclights$getName"(): $Component
public "sodiumdynamiclights$getSetting"(): boolean
public "sodiumdynamiclights$setDynamicLightHandler"(handler: $DynamicLightHandler$$Type): void
public "spawn"(serverLevel0: $ServerLevel$$Type, itemStack1: $ItemStack$$Type, player2: $Player$$Type, blockPos3: $BlockPos$$Type, mobSpawnType4: $MobSpawnType$$Type, boolean5: boolean, boolean6: boolean): T
public "spawn"(serverLevel0: $ServerLevel$$Type, compoundTag1: $CompoundTag$$Type, consumer2: $Consumer$$Type<T>, blockPos3: $BlockPos$$Type, mobSpawnType4: $MobSpawnType$$Type, boolean5: boolean, boolean6: boolean): T
public "spawn"(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type, mobSpawnType2: $MobSpawnType$$Type): T
public "toShortString"(): string
public "trackDeltas"(): boolean
public "tryCast"(entity0: $Entity$$Type): T
public static "updateCustomEntityTag"(level0: $Level$$Type, player1: $Player$$Type, entity2: $Entity$$Type, compoundTag3: $CompoundTag$$Type): void
public "updateInterval"(): integer
get "baseClass"(): $Class<$Entity>
get "category"(): $MobCategory
get "defaultLootTable"(): $ResourceLocation
get "description"(): $Component
get "descriptionId"(): string
get "dimensions"(): $EntityDimensions
get "height"(): float
get "tags"(): $Stream<$TagKey<$EntityType<any>>>
get "width"(): float
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.EntityType
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.EntityTypeTag
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntityType$$Type<T extends $Entity = $Entity> = ($EntityType<T> | Special.EntityType);
}

declare module "net.minecraft.world.entity.MobSpawnType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MobSpawnType$$Type = ($MobSpawnType | ("natural" | "chunk_generation" | "spawner" | "structure" | "breeding" | "mob_summoned" | "jockey" | "event" | "conversion" | "reinforcement" | "triggered" | "bucket" | "spawn_egg" | "command" | "dispenser" | "patrol"));
}

declare module "net.minecraft.world.entity.Interaction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Interaction$$Type = ($Interaction);
}

declare module "net.minecraft.world.entity.PowerableMob" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PowerableMob$$Type = ($PowerableMob | (() => boolean));
}

declare module "net.minecraft.world.entity.LivingEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LivingEntity$$Type = ($LivingEntity);
}

declare module "net.minecraft.world.entity.Targeting" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Targeting$$Type = ($Targeting | (() => $LivingEntity$$Type));
}

declare module "net.minecraft.world.entity.Marker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Marker$$Type = ($Marker);
}

declare module "net.minecraft.world.entity.Display$TextDisplay$CachedLine" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Display$TextDisplay$CachedLine$$Type = ($Display$TextDisplay$CachedLine);
}

declare module "net.minecraft.world.entity.ReputationEventHandler" {
import { $ReputationEventType } from "net.minecraft.world.entity.ai.village.ReputationEventType"
import { $Entity } from "net.minecraft.world.entity.Entity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ReputationEventHandler$$Type = ($ReputationEventHandler | ((arg0: $ReputationEventType, arg1: $Entity) => void));
}

declare module "net.minecraft.world.entity.TraceableEntity" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TraceableEntity$$Type = ($TraceableEntity | (() => $Entity$$Type));
}

declare module "net.minecraft.world.entity.Display$ItemDisplay$ItemRenderState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Display$ItemDisplay$ItemRenderState$$Type = ($Display$ItemDisplay$ItemRenderState);
}

declare module "net.minecraft.world.entity.LivingEntity$Fallsounds" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LivingEntity$Fallsounds$$Type = ($LivingEntity$Fallsounds);
}

declare module "net.minecraft.world.entity.EntityType$Builder" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntityType$Builder$$Type<T extends $Entity = $Entity> = ($EntityType$Builder<T>);
}

declare module "net.minecraft.world.entity.Attackable" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Attackable$$Type = ($Attackable | (() => $LivingEntity$$Type));
}

declare module "net.minecraft.world.entity.MobType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MobType$$Type = ($MobType);
}

declare module "net.minecraft.world.entity.Mob" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Mob$$Type = ($Mob);
}

declare module "net.minecraft.world.entity.PathfinderMob" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PathfinderMob$$Type = ($PathfinderMob);
}

declare module "net.minecraft.world.entity.HumanoidArm" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HumanoidArm$$Type = ($HumanoidArm | ("left" | "right"));
}

declare module "net.minecraft.world.entity.SpawnPlacements$Type" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SpawnPlacements$Type$$Type = ($SpawnPlacements$Type | ("on_ground" | "in_water" | "no_restrictions" | "in_lava" | "mmspawn"));
}

declare module "net.minecraft.world.entity.Entity$MoveFunction" {
import { $Entity } from "net.minecraft.world.entity.Entity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Entity$MoveFunction$$Type = ($Entity$MoveFunction | ((arg0: $Entity, arg1: double, arg2: double, arg3: double) => void));
}

declare module "net.minecraft.world.entity.ItemSteerable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemSteerable$$Type = ($ItemSteerable | (() => boolean));
}

declare module "net.minecraft.world.entity.Display$GenericInterpolator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Display$GenericInterpolator$$Type<T = any> = ($Display$GenericInterpolator<T> | ((arg0: float) => T));
}

declare module "net.minecraft.world.entity.Saddleable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Saddleable$$Type = ($Saddleable);
}

