import React from "react";
import Player from "./Player";
const Players=(props) => {
const data=props.items;
const getPlayers=(playersData) => {
return playersData.map((playerData) => {
return <Player item={playerData}/>
});
};
if(data.length>0)
{
return (
<table>
{props.name?<caption>{props.name}</caption>:""}
<tr>
<th>Player ID</th>
<th>Player name</th>
<th>Type of Player</th>
</tr>
{getPlayers(data)}
</table>
);
}
else
{
return <p>No Player data to display</p>
    }
};
export default Players;
