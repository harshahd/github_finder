import React from "react";
import axios from "axios";
import Users from "./users.js"

const Search=(props) => {
    
const [keyWord, setKeyWord]=React.useState("")
const handleSubmit=async (evt) => {
    evt.preventDefault();
// alert(keyWord);
props.onSearch(keyWord);
};


return (
<form role="search" className="form" onSubmit={handleSubmit}>
<label>Enter the user name or user id to search <input type="text" value={keyWord} required onChange={(e) => {setKeyWord(e.target.value);}}/></label>
<input type="submit" value="search"></input>
</form>
);
};
export default Search;
