import React from "react";
import axios from "axios";
import Users from "./users.js";
import  Search  from "./search.js";
import DocumentTitle from "react-document-title";

const Home=(props) => {
    const [user,setUser]=React.useState([]);
    const [userName,setUserName]=React.useState("");
    async function searchUser(name) {
        try
        {
        let rsp=await axios.get("https://api.github.com/search/users?q="+name);
        console.log(rsp.data);
        setUserName(name);
setUser(rsp.data.items);
                        }
        catch(err) {
console.log(err)
        }
    }
    
    
return (
<DocumentTitle title={userName===""?"Github finder":"You searched for "+userName+" - Github finder"}>
    <main>
    <h1>Github finder</h1>
    <p>View everybody's profiles, repositories and more with this application</p>
<Search onSearch={searchUser}/>
<h2>Users</h2>
<Users users={user}/>
                     </main>
                     </DocumentTitle>
);
};
export default Home;
