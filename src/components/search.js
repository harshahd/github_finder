import React from "react";
import axios from "axios";
import Users from "./users.js"

const Search=(props) => {
    const [keyWord, setKeyWord]=React.useState("");
    const searchInput=React.useRef(null);
const handleSubmit=(evt) => {
    evt.preventDefault();
// alert(keyWord);
props.onSearch(keyWord);
};

const handleChange= (e) => {
    setKeyWord(e.target.value);
    if(keyWord=="")
    e.target.focus();
        };

        const handleClear=(e) => {
setKeyWord("");
searchInput.current.focus();
        };
        
return (
<form role="search" className="form" onSubmit={handleSubmit}>
<label>Enter the user name or user id to search <input type="text" value={keyWord} required onChange={handleChange} ref={searchInput}/></label>
<input type="submit" value="search"></input>
<input type="reset" value="clear search input" onClick={handleClear}/>
</form>
);
};
export default Search;
