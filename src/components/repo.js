import React from 'react';
import Users from './users.js';

const Repo=(props) => {
    if(props.repository)
    {
        return (
                    <div className="repo">
        <h2>{props.repository.name} ({props.repository.full_name})</h2>
        <p>{Boolean(props.repository.private)?"Private":"Public"}</p>
        <p>Created on {new Date(props.repository.created_at).toString()}<br></br>Last updated on {new Date(props.repository.updated_at).toString()}</p>
        <p>{(props.repository.description)?props.repository.description:"No description"}</p>
        <ul>
        <li>{props.repository.forks} forks</li>
        <li>{props.repository.watchers_count} watchers</li>
        <li>{props.repository.language?"Languages used: "+props.repository.language:"No programming language used"}</li>
        <li>Existing issues: {props.repository.open_issues_count}</li>
        <li>{props.repository.license?"License: "+props.repository.license.name:"No license"}</li>
        <li>Default branch: {props.repository.default_branch}</li>
        </ul>

<p>Clone this repository by URL {props.repository.clone_url}</p>
{props.repository.disabled?<p>This project is disabled</p>:<a href={props.repository.html_url} target="_blank">Open {props.repository.full_name} in github (Opens in a new tab)</a>}
                </div>
                        );
    }
    else{
return (
<p>No repository.</p>
);
    }
};
export default Repo;