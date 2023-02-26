import React,{useState} from 'react'
import {connect} from "react-redux"
import {buyCake} from "../redux/cake/cakeActions"
import { refundCake } from '../redux/cake/cakeActions'
import HooksCakeContainer from './HooksCakeContainer'
import { useSelector } from 'react-redux'

const CakeContainer = (props) => {
  let ınıtCakeNum=useSelector(state=>state.cake.numofCakes);
  const[ınıtCakeNumber,setInıtCakeNumber]=useState(ınıtCakeNum-1)


  return (
    <div>
    {<HooksCakeContainer/>}
        <h2>Number of Cakes:{props.numofCakes}</h2>
        <button  disabled={props.numofCakes<1 ? true:false} onClick={()=>props.buyCake()}>Buy Cake</button>
        <button disabled={props.numofCakes>ınıtCakeNumber} onClick={()=>props.refundCake()}>Refund Cake</button>
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
    buyCake:()=>dispatch(buyCake()),
    refundCake:()=>dispatch(refundCake())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)//3

/*
const mapStateProps=state=>{
  return{
    liste:state.liste
  }
}

export default connect(mapStateProps, { listeyeEkle, listedenSıl,isaretle,TumunuTemizle,Guncelleme})(App);//4.adım

*/
//go to index.js for 4 Provider,store


/*
before multiple reducer using

import React from 'react'
import {connect} from "react-redux"
import buyCake from "../redux/cake/cakeActions"
import HooksCakeContainer from './HooksCakeContainer'
const CakeContainer = (props) => {
  console.log(props)
  return (
    <div>
    {<HooksCakeContainer/>}
        <h2>Number of Cakes:{props.numofCakes}</h2>
        <button onClick={()=>props.buyCake()}>Buy  Cake</button>
    </div>
  )
}

const mapStateToProps=state=>{//1
    return{
        numofCakes:state.numofCakes
    }
}
const mapDispatchToProps=dispatch=>{//2
  return{
    buyCake:()=>dispatch(buyCake())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)//3

/*
const mapStateProps=state=>{
  return{
    liste:state.liste
  }
}

export default connect(mapStateProps, { listeyeEkle, listedenSıl,isaretle,TumunuTemizle,Guncelleme})(App);//4.adım

*/
//go to index.js for 4 Provider,store
