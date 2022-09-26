import React from "react";
import { Link, useParams } from "react-router-dom";
import Repo from './repo.js'
const Repos=(props) => {
    const name=useParams().userID;
React.useEffect(() => {
props.getRepositories(name);
});

    const getRepos=(repositories) => {
        return repositories.map((r) => {
            return <Repo repository={r}></Repo>;
        });
        };
       
if(props.repositories.length==0)
{
return (
<p>No users to show</p>
);
}
else
{
    return ( 
                <div className="repository-list">
                    <h1>Repositories of <Link to={"/user/"+name}>{name}</Link></h1>
            {getRepos(props.repositories)}
</div>
    ); 
}
};
export default Repos;
