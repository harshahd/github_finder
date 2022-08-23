import React from "react";
import axios from "axios";

const Home=(props) => {
    const [user,setUser]=React.useState(null);
    React.useEffect(() => {
axios.get("https://jsonplaceholder.typicode.com/posts").then((rsp) => {
    setUser(rsp.data);
}).catch((error) => {
alert(error);    
});
    }, []);
    if(!user)
    return null;
    // <!-- <p>{user.message} Read <a href={user.documentation_url}>Documentation</a> for more details.</p> -->
return (
    <main>
    <h1>Github finder</h1>
    <p>View everybody's profiles, repositories and more with this application</p>
    <h2>{user[3].title}</h2>
    <p>{user[3].body}</p>
                     </main>
);
};
export default Home;
