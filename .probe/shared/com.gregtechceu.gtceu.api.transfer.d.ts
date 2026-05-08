declare module "com.gregtechceu.gtceu.api.transfer.fluid.IFluidHandlerModifiable" {
import { $IFluidHandler } from "net.minecraftforge.fluids.capability.IFluidHandler"
import { $FluidStack, $FluidStack$$Type } from "net.minecraftforge.fluids.FluidStack"
import { $IFluidHandler$FluidAction$$Type } from "net.minecraftforge.fluids.capability.IFluidHandler$FluidAction"

export interface $IFluidHandlerModifiable extends $IFluidHandler {
"drain"(fluidStack0: $FluidStack$$Type, fluidAction1: $IFluidHandler$FluidAction$$Type): $FluidStack
"drain"(int0: integer, fluidAction1: $IFluidHandler$FluidAction$$Type): $FluidStack
"fill"(fluidStack0: $FluidStack$$Type, fluidAction1: $IFluidHandler$FluidAction$$Type): integer
"getFluidInTank"(int0: integer): $FluidStack
"getTankCapacity"(int0: integer): integer
"getTanks"(): integer
"isFluidValid"(int0: integer, fluidStack1: $FluidStack$$Type): boolean
"setFluidInTank"(int0: integer, fluidStack1: $FluidStack$$Type): void
"supportsDrain"(int0: integer): boolean
"supportsFill"(int0: integer): boolean
get "tanks"(): integer
}

export namespace $IFluidHandlerModifiable {
const probejs$$marker: never
}
export abstract class $IFluidHandlerModifiable$$Static implements $IFluidHandlerModifiable {
}
}

