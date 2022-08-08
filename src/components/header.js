import React from "react";
import NavBar from './navBar';
import logo from '../logo.svg';

const Header=(props) => {
return (
    <header className="App-header">
    <img src={logo} className="App-logo" alt="Github finder" />
    <NavBar></NavBar>
     </header>
);
};
export default Header;
