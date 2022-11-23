import React from "react";
import DocumentTitle from "react-document-title";
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
    <DocumentTitle title="No repositories found - github finder">
<p>No users to show</p>
</DocumentTitle>
);
}
else
{
    return ( 
        <DocumentTitle title={"Repositories of "+name+" - Github finder"}>
                <div className="repository-list">
                    <h1>Repositories of <Link to={"/user/"+name}>{name}</Link></h1>
            {getRepos(props.repositories)}
</div>
</DocumentTitle>
    ); 
}
};
export default Repos;
