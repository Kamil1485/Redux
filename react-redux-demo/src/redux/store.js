import { createStore,applyMiddleware } from 'redux';
import cakeReducer from "./cake/cakeReducer";
import ıceCreamReducer from './iceCream/iceCreamReducer';
import userReducer from './user/userReducer';
//multiple reducer using combineReducer
import { combineReducers } from 'redux';//1

import logger from "redux-logger"

//async Actions-
//npm install axios redux-thunk
import thunk from 'redux-thunk';

const rootReducer=combineReducers({//2
    cake:cakeReducer,
    ıceCream:ıceCreamReducer,
    user:userReducer
})

const store = createStore(rootReducer,applyMiddleware(logger,thunk)); //applyMiddleware(logger) yapılan işlemi konsolda detaylı olarak gösterir 
export default store;


//npm i redux-logger


/*
 to store single reducer, in the store
import { createStore } from 'redux';
import cakeReducer from "./cake/cakeReducer";
const store = createStore(cakeReducer); //4-d  //createrStore sadece 1 tane reducer funksiyonu  parametre olarak alır.Çözümü:combineReducers kullan
console.log("Initial state", store.getState()) //{ numofCakes: 15 }
export default store;
*/