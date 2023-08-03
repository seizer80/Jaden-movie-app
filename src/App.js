import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App()  {
  return (
    <div className= 'app'> 
    <Router> 
        <Header> </Header>
        <div className= "container"></div>
        <Routes>
        <Route path ="/" Component={Home} />
        <Route path ="/movie/:imdbID" Component={MovieDetail} />
        </Routes>
        <Footer/>
    </Router>
    
    
    
    </div>
  )
}

export default App