import './App.css';
import NavBar from './components/navBar.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/home.js';
import About from './components/about.js';
import { useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <div className='container'>
      <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      </Routes>
      </div>
<Footer/>

    </div>
    </Router>
  );
}

export default App;
