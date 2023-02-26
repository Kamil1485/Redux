import React,{useEffect,useState} from 'react'
import {connect} from "react-redux"
import { fetchUsers } from '../redux/user/userActions'
const UserContainer = ({userData,fetchUsers}) => {//imported fetchUsers passing as a prop 
const [active,setActive]=useState(false)
/*
useEffect(()=>{
fetchUsers()
},[])
*/
const getUsers=()=>{
    setActive(true);
    fetchUsers();
}
return <div>
<button onClick={getUsers}>Get Users</button>
<button onClick={()=>setActive(false)}>Hide Users</button>
{    active ? userData.loading ?(<h3>Loading...</h3>): userData.error ?(<h2>{userData.error}</h2>):(
    <div>

        <h2>User List</h2>
        <div >{userData && userData.users && userData.users.map((user)=>(
            <p key={user.id}>{user.name}</p>
        ))}</div>
    </div>
): ""
}
</div>

}

const mapStateToProps=state=>{//1
    console.log(state)
    return{
        userData:state.user
    }   
}

const mapDispatchToProps=dispatch=>{//2
    return{
      fetchUsers:()=>dispatch(fetchUsers())
    }
  }
  

 export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)//3