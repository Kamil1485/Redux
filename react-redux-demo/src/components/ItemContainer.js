import React,{useState} from 'react'
import {connect} from "react-redux"
import { buyCake } from '../redux/cake/cakeActions'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'
const ItemContainer = (props) => {

    console.log(props)
    return (
    <div>
     
       <h3>Item:{props.item}</h3> 
       <button onClick={props.buyItem}>Buy </button>
    </div>
  )
}
const mapStateToProps=(state,ownProps)=>{//if cake props send then  ownProps.cake:true,conditional: state.cake.numofCakes else state.ıceCream.numofIceCream
const itemState=ownProps.cake ? state.cake.numofCakes :state.ıceCream.numofIceCream
console.log(state)
return{

    item:itemState

}
}

const mapDispatchToProps=(dispatch,ownProps)=>{
    const dispatchFunction=ownProps.cake ?()=>dispatch(buyCake()):()=>dispatch(buyIceCream())
    return{
        buyItem:dispatchFunction,
        
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(ItemContainer)