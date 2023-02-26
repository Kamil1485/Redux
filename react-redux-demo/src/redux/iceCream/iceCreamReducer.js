
import {BUY_ICECREAM} from "./iceCreamTypes"
const initialState={
    numofIceCream:20
  }

  const ıceCreamReducer=(state=initialState,action)=> {
switch(action.type){//dispatch ile action reducer a ulaştırılır.
    case BUY_ICECREAM:
        return{
            ...state,
            numofIceCream:state.numofIceCream-1
        }
        default:return state;
}
  }
export default ıceCreamReducer;
