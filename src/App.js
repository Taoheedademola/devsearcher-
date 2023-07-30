import React, {  useEffect, useState } from "react";
import Head from "./component/head"
import Search from "./component/searchbar"
import Body from "./component/body"
import axios from "axios"
function App() {
    const [username, setUsername]=useState("octocat")
    const [users, setUsers]=useState({})
    const [state, setState]=useState(false)
    const baseUrl=axios.create({
        baseURL: "https://api.github.com"
    })
    function HandleChange(event) {
        const value=event.target.value
        setUsername(value)
        
    }
    const fetchUsers= async ()=> {
        try {
             if (username) {
                 const {data}= await baseUrl.get("/users/" + username);
                 setUsers(data)
          
       }
        } catch (error) {
            return null
        }
    }
      async function HandleClick(event) {
       event.preventDefault();
       fetchUsers()
      }

      useEffect(()=> fetchUsers(), [])

      function HandleClick1() {
        setState(preValue =>{
            return !preValue
        })
      }

    return (
        
        <div className="app" >
            <Head 
            handleclick2={HandleClick1}
            gb={state}
            />
            <Search 
            onchange={HandleChange}
            onclick={HandleClick}
            gb={state}
            value={username}
            />
           <Body
          style={{backgroundColor: state ? "#1E2A47" : "#fff", color: state ? "#fff" : "#1E2A47"}}
           user={users}
           /> 
        </div>
    )
}

export default App