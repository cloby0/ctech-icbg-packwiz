declare module "net.minecraft.world.item.trading.MerchantOffers" {
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Stream } from "java.util.stream.Stream"
import { $Collection$$Type } from "java.util.Collection"
import { $MerchantOffer } from "net.minecraft.world.item.trading.MerchantOffer"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $IntFunction$$Type } from "java.util.function.IntFunction"
import { $ArrayList } from "java.util.ArrayList"

export class $MerchantOffers extends $ArrayList<$MerchantOffer> {
constructor()
constructor(compoundTag0: $CompoundTag$$Type)

public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public static "createFromStream"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $MerchantOffers
public "createTag"(): $CompoundTag
public "getRecipeFor"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, int2: integer): $MerchantOffer
public "handler$goi000$setUpTiers"(compoundTag0: $CompoundTag$$Type, callbackInfo1: $CallbackInfo$$Type): void
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
public "parallelStream"(): $Stream<$MerchantOffer>
public "stream"(): $Stream<$MerchantOffer>
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
public "writeToStream"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
}
}

declare module "net.minecraft.world.item.trading.Merchant" {
import { $MerchantOffers, $MerchantOffers$$Type } from "net.minecraft.world.item.trading.MerchantOffers"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $MerchantOffer$$Type } from "net.minecraft.world.item.trading.MerchantOffer"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $Merchant {
"canRestock"(): boolean
"getNotifyTradeSound"(): $SoundEvent
"getOffers"(): $MerchantOffers
"getTradingPlayer"(): $Player
"getVillagerXp"(): integer
"isClientSide"(): boolean
"notifyTrade"(merchantOffer0: $MerchantOffer$$Type): void
"notifyTradeUpdated"(itemStack0: $ItemStack$$Type): void
"openTradingScreen"(player0: $Player$$Type, component1: $Component$$Type, int2: integer): void
"overrideOffers"(merchantOffers0: $MerchantOffers$$Type): void
"overrideXp"(int0: integer): void
"setTradingPlayer"(player0: $Player$$Type): void
"showProgressBar"(): boolean
get "notifyTradeSound"(): $SoundEvent
get "offers"(): $MerchantOffers
get "tradingPlayer"(): $Player
get "villagerXp"(): integer
get "clientSide"(): boolean
set "tradingPlayer"(value: $Player$$Type)
}

export namespace $Merchant {
const probejs$$marker: never
}
export abstract class $Merchant$$Static implements $Merchant {
}
}

declare module "net.minecraft.world.item.trading.MerchantOffer" {
import { $PseudoAccessorMerchantOffer } from "org.violetmoon.quark.content.experimental.hax.PseudoAccessorMerchantOffer"
import { $AccessorMerchantOffer } from "org.violetmoon.quark.mixin.mixins.accessor.AccessorMerchantOffer"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $MerchantOfferAccessor } from "com.craisinlord.integrated_api.mixins.entities.MerchantOfferAccessor"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $MerchantOffer implements $MerchantOfferAccessor, $PseudoAccessorMerchantOffer, $AccessorMerchantOffer {
constructor(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, int2: integer, int3: integer, float4: float)
constructor(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, itemStack2: $ItemStack$$Type, int3: integer, int4: integer, float5: float)
constructor(compoundTag0: $CompoundTag$$Type)
constructor(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, itemStack2: $ItemStack$$Type, int3: integer, int4: integer, int5: integer, float6: float)
constructor(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, itemStack2: $ItemStack$$Type, int3: integer, int4: integer, int5: integer, float6: float, int7: integer)

public "addToSpecialPriceDiff"(int0: integer): void
public "assemble"(): $ItemStack
public "createTag"(): $CompoundTag
public "getBaseCostA"(): $ItemStack
public "getCostA"(): $ItemStack
public "getCostB"(): $ItemStack
public "getDemand"(): integer
public "getMaxUses"(): integer
public "getPriceMultiplier"(): float
public "getResult"(): $ItemStack
public "getSpecialPriceDiff"(): integer
public "getUses"(): integer
public "getXp"(): integer
public "increaseUses"(): void
public "isOutOfStock"(): boolean
public "isRequiredItem"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "needsRestock"(): boolean
public "quark$getTier"(): integer
public "quark$setTier"(int0: integer): void
public "resetSpecialPriceDiff"(): void
public "resetUses"(): void
public "satisfiedBy"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "setSpecialPriceDiff"(int0: integer): void
public "setToOutOfStock"(): void
public "shouldRewardExp"(): boolean
public "take"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "updateDemand"(): void
get "baseCostA"(): $ItemStack
get "costA"(): $ItemStack
get "costB"(): $ItemStack
get "demand"(): integer
get "maxUses"(): integer
get "priceMultiplier"(): float
get "result"(): $ItemStack
get "specialPriceDiff"(): integer
get "uses"(): integer
get "xp"(): integer
get "outOfStock"(): boolean
set "specialPriceDiff"(value: integer)
}
}

