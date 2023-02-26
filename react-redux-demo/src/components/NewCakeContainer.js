import React,{useState} from 'react'
import {connect} from "react-redux"
import {buyCake} from "../redux/cake/cakeActions"
import { refundCake } from '../redux/cake/cakeActions'
import HooksCakeContainer from './HooksCakeContainer'
import { useSelector } from 'react-redux'

const NewCakeContainer = (props) => {
const[number,setNumber]=useState(1);
const[refnumber,setRefNumber]=useState(1);
console.log(props.numofCakes)
const  numofCakes= useSelector(state=>state.cake.numofCakes)
const[ınıtalNumber,setInıtıalNumber]=useState(numofCakes-1);

  return (
    <div>
        <h2>Number of Custom Cakes:{props.numofCakes}</h2>
        <input type="number" min={1} max={props.numofCakes}  placeholder='Number' value={number} onChange={(e)=>setNumber(e.target.value)}/>
        <button disabled={props.numofCakes<1 ? true:false} onClick={()=>number>props.numofCakes ? "":props.buyCake(number)}>Buy {number} Custom Cake</button>
     

        <input type="number" min={1} max={ınıtalNumber-props.numofCakes+1} placeholder='Number' value={refnumber} onChange={(e)=>setRefNumber(e.target.value)}/>
        <button disabled={props.numofCakes>ınıtalNumber ? true :false} onClick={()=>refnumber>ınıtalNumber-props.numofCakes+1 ? "":props.refundCake(refnumber)}>Refund {refnumber} Custom Cake</button>


    </div>
  )
}

const mapStateToProps=state=>{//1
    return{
        numofCakes:state.cake.numofCakes
    }
}
const mapDispatchToProps=dispatch=>{//2
  return{
    buyCake:(customNum)=>dispatch(buyCake(customNum)),
    refundCake:(customRefNum)=>dispatch(refundCake(customRefNum)),
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)//3
