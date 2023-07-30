import React, {  useEffect, useState } from "react";
import Head from "./component/head"
import Search from "./component/searchbar"
import Body from "./component/body"
import axios from "axios"
function App() {
    const [username, setUsername]=useState("octocat")
    const [users, setUsers]=useState({})
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

    return (

        <div className="app">
            <Head />
            <Search 
            onchange={HandleChange}
            onclick={HandleClick}
            value={username}
            />
           <Body
           user={users}
           /> 
        </div>
    )
}

export default App