import {  useState } from "react";
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
            const {data}= await baseUrl.get("/users/" + username);
            return data?.items;
        } catch (error) {
            return null
        }
    }
      async function HandleClick(event) {
       event.preventDefault();
       if (username) {
          const items= await fetchUsers();
         setUsers(items)
          console.log(items);
       }
      }

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