import react from "react";
import UserItem from "./userItem.js"

const Users=(props) => {
    const getUsers=(users) => {
        return users.map((u) => {
            return <UserItem user={u}></UserItem>;
        });
        };
       
if(props.users.length==0)
{
return (
<p>No users to show</p>
);
}
else
{
    return ( 
        <div className="users-list">
            {getUsers(props.users)}
</div>
    ); 
}
};
export default Users;
