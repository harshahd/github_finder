import './App.css';
import React from 'react';
import NavBar from './components/navBar.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/home.js';
import About from './components/about.js';
import { useState, useEffect} from 'react';
import User from "./components/user.js";
import Followers from './components/Followers.js'
import Following from './components/following.js';
import Repos from "./components/repos.js";
import axios from 'axios';
import Main from "./components/assignment/main";

function App() {
  const [repos,setRepos]=React.useState([]);
const getRepos=async (name) => {
try
{
let rsp=await axios.get("https://api.github.com/users/"+name+"/repos");
setRepos(rsp.data);
}
catch(err) {
console.log(err);
}
};

  return (
    <Router>
    <div className="App">
        <Header/>
      <div className='container'>
      <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/user' element={<User/>}></Route>
      <Route exact path='/user/:userID' element={<User/>}></Route>
      <Route exact path='/user/:userID/repos' element={<Repos repositories={repos} getRepositories={getRepos}/>}></Route>
      <Route exact path='/user/:userID/followers' element={<Followers/>}></Route>
      <Route exact path='/user/:userID/following' element={<Following/>}></Route>
      <Route exact path='/assignment' element={<Main/>}></Route>
      </Routes>
      </div>
<Footer/>
    </div>
    </Router>
  );
}

export default App;
