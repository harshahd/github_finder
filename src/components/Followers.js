import axios from "axios";
import React from "react";
import Users from './users.js'
import { useParams } from "react-router-dom";

const Followers=(props) => {
    const id=useParams().userID;
const [followers,setFollowers]=React.useState([]);
React.useEffect(() => {
axios.get("https://api.github.com/users/"+id+"/followers").then((rsp) => {
setFollowers(rsp.data);
});
});
return (
    <main>
    <div className="users">
<h1>Followers of {id}</h1>
<Users users={followers}/>
</div>
</main>
);
};
export default Followers;