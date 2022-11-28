import React from "react";

const Player=(props) => {
if(props.item)
{
    const data=props.item;
return (
    <tr>
<th>{data.id}</th>
<td>{data.name}</td>
<td>{data.role}</td>
</tr>
);
}
};
export default Player;