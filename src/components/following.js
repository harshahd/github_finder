import React from "react";
import { useParams } from "react-router-dom";
import Users from './users.js';
import axios from "axios";
import DocumentTitle from "react-document-title";
const Following=(props) => {
    const id=useParams().userID;
const [following,setFollowing]=React.useState([]);
React.useEffect(() => {
axios.get("https://api.github.com/users/"+id+"/following").then((rsp) => {
setFollowing(rsp.data);
});
});
return (
    <DocumentTitle title={(id && id!=="")?"Followers of "+id:"No followers found - Github finder"}>
    <main>
            <div className="users">
<h1>Followings of {id}</h1>
<Users users={following}/>
</div>
</main>
</DocumentTitle>
);
};
export default Following;

