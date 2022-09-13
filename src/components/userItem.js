import React from "react";

const UserItem=(props) => {
        if(props.user)
    {
        return (
        <div className="user-profile">
        <h3>{props.user.login}</h3>
        <p>Visit <a href={props.user.html_url}><img src={props.user.avatar_url} alt={props.user.login} className="round-image"></img></a>'s home page</p>
        </div>
        );
    }
    else{
return <p>No user.</p>;
    }
};
export default UserItem;
