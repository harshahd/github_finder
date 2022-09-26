import React from "react";
import { useParams } from "react-router-dom";
import Users from './users.js';
import axios from "axios";
const Following=(props) => {
    const id=useParams().userID;
const [following,setFollowing]=React.useState([]);
React.useEffect(() => {
axios.get("https://api.github.com/users/"+id+"/following").then((rsp) => {
setFollowing(rsp.data);
});
});
return (
    <main>
    <div className="users">
<h1>Followings of {id}</h1>
<Users users={following}/>
</div>
</main>
);
};
export default Following;

