import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User=(match, location) => {
    const param=useParams();

const [user,setUser]=React.useState({});
React.useEffect(() => {
    if(param.userID)
    {
axios.get("https://api.github.com/users/"+param.userID).then((rsp) => {
setUser(rsp.data);
});
}
});
        if(!param.userID)
    {
return (
<div>
    <h1>No user details</h1>
<Link to="/">Go to home page</Link>
</div>
);
    }

return(
    <div className="user-detail">
<h1>{user.login}</h1>
<img src={user.avatar_url} alt={"Profile picture of "+user.login}></img>
<p>Profile created on {new Date(user.created_at).toString()}</p>
<p>Profile last updated on {new Date(user.updated_at).toString()}</p>
<ul>
    <li><Link to={"/user/"+user.login+"/repos"}>Repositories ({user.public_repos})</Link></li>
    <li><Link to={"/user/"+user.login+"/followers"}>{user.followers} followers</Link></li>
    <li><Link to={"/user/"+user.login+"/following"}>{user.following} following</Link></li>
<li>Public gists: {user.public_gists}</li>
</ul>
<h2></h2>
</div>
);
};
export default User;
