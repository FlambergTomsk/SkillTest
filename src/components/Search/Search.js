import React, { useState } from 'react'
import s from './Search.module.css';
import Fuse from "fuse.js";
import { getHeroesArray } from '../HomePage/HomePageSelectors';
import {connect} from "react-redux";
import { getHeroes } from '../../redux/homePageReducer';


const Search = (props) => {

    const [searchValue, setSearchValue] = useState('');

    function searchHeroes(e){
      setSearchValue(e.target.value);
      props.getHeroes(props.currentPage, e.target.value);
    }

    
  
    return (
      <div className={s.search}>
        <span className={s.searchSpan}>&#128269;	
        </span>
        <input
          className={s.searchInput}
          type="text"
          onChange={(e) => searchHeroes(e)}
          placeholder='Search hero'
          value = {searchValue}
        />

      </div>
    );
  };



export default Search;



