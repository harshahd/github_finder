import React from "react";

import { Link } from "react-router-dom";
function NavBar(props) {
return (
<nav className="navbar">
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/about">About github finder</Link></li>
</ul>
</nav>
);
}

export default NavBar;
