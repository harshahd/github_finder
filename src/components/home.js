import React from "react";
import axios from "axios";
import Users from "./users.js";
import  Search  from "./search.js";

const Home=(props) => {
    const [user,setUser]=React.useState([]);
    async function searchUser(name) {
        try
        {
        let rsp=await axios.get("https://api.github.com/search/users?q="+name);
        console.log(rsp.data);
setUser(rsp.data.items);
                        }
        catch(err) {
console.log(err)
        }
    }
    
    
return (
    <main>
    <h1>Github finder</h1>
    <p>View everybody's profiles, repositories and more with this application</p>
<Search onSearch={searchUser}/>
<h2>Users</h2>
<Users users={user}/>
                     </main>
);
};
export default Home;
