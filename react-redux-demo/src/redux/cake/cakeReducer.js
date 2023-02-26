import{BUY_CAKE} from "./cakeTypes"
import { REFUND_CAKE } from "./cakeTypes"
const initialState={
    numofCakes:10
  }

  const cakeReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return{...state,
              numofCakes:state.numofCakes-action.payload}//if number is not sent, default value of paylaod:1 is active
        
      
            
            case REFUND_CAKE:
            return{
              ...state,
              numofCakes:state.numofCakes+parseInt(action.payload)
            }

            default: return state
        }
  }
  
export default cakeReducer;


/*
  case CUSTOM_BUY_CAKE:
          console.log(action.payload)
          return{
            ...state,
            numofCakes:state.numofCakes+parseInt(action.payload)
          }
*/