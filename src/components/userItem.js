import React from "react";
import { Link } from "react-router-dom";

const UserItem=(props) => {
        if(props.user)
    {
        return (
        <div className="user-profile">
        <h3>{props.user.login}</h3>
        <p>Visit <Link to={"/user/"+props.user.login}><img src={props.user.avatar_url} alt={props.user.login} className="round-image"></img></Link>'s home page</p>
        </div>
        );
    }
    else{
return <p>No user.</p>;
    }
};
export default UserItem;
