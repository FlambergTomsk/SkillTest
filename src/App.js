import './App.css';
import React from 'react'
import HomePage from './components/HomePage/homePage';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter} from 'react-router-dom';
import FavoriteHeroes from './components/favoriteHeroes/favoriteHeroes';
import Header from './components/Header/Header';
import h from './../src/components/HomePage/HomePage.module.css';




function App() {
  return (
    <div className={h.body}>
      <Header/>
      <Navbar/>
      <div >
      <Route path='/favoriteHeroes' render={() => <FavoriteHeroes />} />
      </div>
      <Route path='/HomePage' render={() => <HomePage/>} />

    </div>
  );
}

export default App;
