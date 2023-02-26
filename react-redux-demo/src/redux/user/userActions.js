import { FETCH_USERS_REQUEST } from "./userTypes";
import { FETCH_USERS_SUCCESS } from "./userTypes";
import { FETCH_USERS_FAILURE } from "./userTypes";

import axios from "axios";
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};


export const fetchUsers=()=>{
  return (dispatch)=>{
      dispatch(fetchUsersRequest);
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response=>{
const users=response.data
dispatch(fetchUserSuccess(users))
}).catch(err=>{
  dispatch(fetchUserFailure(err.message))
})

  }
}