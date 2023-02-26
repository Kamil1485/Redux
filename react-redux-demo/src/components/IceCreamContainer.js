import React from 'react'
import {connect} from "react-redux"
import {buyIceCream} from "../redux/iceCream/iceCreamActions"
import store from "../redux/store"

const IceCreamContainer = (props) => {
  console.log(props)
  return (
    <div>
  
        <h2>Number of IceCream:{props.numofIceCream}</h2>
        <button  disabled={props.numofIceCream<1 ? true:false} onClick={()=>props.buyIceCream()}>Buy IceCream</button>
    </div>
  )
}

const mapStateToProps=state=>{//1
    return{
      numofIceCream:state.ıceCream.numofIceCream
    }
}
const mapDispatchToProps=dispatch=>{//2
  return{
    buyIceCream:()=>dispatch(buyIceCream())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)//3

/*
const mapStateProps=state=>{
  return{
    liste:state.liste
  }
}

export default connect(mapStateProps, { listeyeEkle, listedenSıl,isaretle,TumunuTemizle,Guncelleme})(App);//4.adım

*/
//go to index.js for 4 Provider,store