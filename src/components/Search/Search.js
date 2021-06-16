import React, { useState } from 'react'
import s from './Search.module.css';


const Search = (props) => {

    const [searchValue, setSearchLocalValue] = useState('');




    function searchHeroes(e){
      setSearchLocalValue(e.target.value);
      props.changePage(1);
      props.getHeroes(props.currentPage, e.target.value);
      props.setSearchValue(e.target.value);

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



