import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import UserCard from '../UserCard/UserCard'

const Users=()=>{
    const [ListUsers, setListUsers] = useState([])

     const fetchUsers=()=>{
         axios
         .get("https://jsonplaceholder.typicode.com/users")
         .then((res)=>ListUsers(res.data))
         .catch((err)=>console.log(err))
     }
useEffect(()=>{
    fetchUsers()},[])


    return(
<div>{ListUsers.map((el,i)=>(<UserCard user={el} key={i}/>))}</div>
)
}

export default Users;