import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {buyCake} from '../redux/cake/cakeActions'
import { refundCake } from '../redux/cake/cakeActions'

const HooksCakeContainer = () => {

const  numofCakes= useSelector(state=>state.cake.numofCakes)// like mapStateToProps 
const[ınıtalNumber,setInıtıalNumber]=useState(numofCakes-1);

//const  numofCakes= useSelector(state=>state.numofCakes)// like mapStateToProps  //single reducer using,not using combineReducer
const dispatch=useDispatch()


return (
    <div>
        <h2>useSelector:Num of Cakes:{ numofCakes}</h2>
        <button  disabled={numofCakes<1 ? true:false}   onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        <button  disabled={numofCakes>ınıtalNumber} onClick={()=>dispatch(refundCake())}>Refund Cake</button>

    </div>
  )
}

export default HooksCakeContainer
//useSelector  store da saklanan state değerlerini erişmeyi sağlar.
//başlangıçta store da ınıtıalState değeri saklanıyor daha sonra değiştirilip güncel değer saklanıyor.
/*
useDispatch, Redux store'a bağlı bir React bileşenindeki eylem yaratıcısı (action creator) fonksiyonlarını tetiklemek için kullanılır. 
Bu, Redux store'da state değişikliklerini tetiklemek için kullanılan eylemlerin dispatch edilmesine olanak tanır.
*/
/*
useSelector ise, Redux store'daki state'in seçilmesi için kullanılır. Bu hook, Redux store'daki state değiştiğinde otomatik olarak yenilenir ve bileşenin state'e bağlı olarak yeniden render edilmesine neden olur.

useSelector fonksiyonu, Redux store'dan sadece bir değer döndürebilir. 
Ancak, birden fazla değer almak istiyorsanız, bunları bir obje içinde toplayabilirsiniz.
Ex: 
import { createSelector } from 'reselect';

const counterSelector = state => state.counter;
const userNameSelector = state => state.user.name;

export const selectCounter = createSelector(
  counterSelector,
  counter => counter
);

export const selectUserName = createSelector(
  userNameSelector,
  name => name
);
import { useSelector } from 'react-redux';
import { selectCounter, selectUserName } from './selectors';

function Selector() {
  const { counter, userName } = useSelector((state) => ({
    counter: selectCounter(state),
    userName: selectUserName(state),
  }));


*/