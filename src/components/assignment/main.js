import React from "react";
import DocumentTitle from "react-document-title";
import Players from "./Players";
function Main(props)
{
    const [data,setData] = React.useState([
        { id:1, name: 'V Kohli', role: 'Batsman'},
        { id:2, name: 'M Siraj', role: 'Bowler'},
        {id:3, name: 'D Karthik', role: 'Wicket Keeper'}
        ]);
        return (
            <DocumentTitle title="Team details">
    <div className="main">
        <h1>Team details</h1>
<p>Below are the team player's details. Activate clear button to destroy details</p>
<button onClick={() => {setData([])}}>Clear details</button>
<Players items={data}/>
</div>
</DocumentTitle>
);
};
export default Main;