import { BUY_CAKE } from "./cakeTypes";
import { REFUND_CAKE } from "./cakeTypes";
export const buyCake=(customNumber=1)=>{
    return{
        type:BUY_CAKE,
        payload:customNumber
    }
}


export const refundCake=(customRefNumber=1)=>{
    return{
        type:REFUND_CAKE,
        payload:customRefNumber
    }
}


