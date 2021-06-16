import { addChoosen, changePage, delChoosen, getHeroes, setSearchValue } from '../../redux/homePageReducer'
import {connect} from "react-redux";
import { getCurrentPage, getHeroesArray, getLoading, getPageSize, getTotalCountNumber, getChoosenArray, getSearchValue } from './HomePageSelectors';
import h from './HomePage.module.css';
import Preloader from '../../Common/Preloader';
import React from 'react'
import Search from '../Search/Search';


const HomePage=(props)=> {

React.useEffect(()=>{
props.getHeroes(props.currentPage, props.searchValue)
},[])

const onPageChange = (page )=>{
  props.changePage(page);
  props.getHeroes(page, props.searchValue);
  console.log(props.searchValue)
}

function addColorToStar(e){
  e.target.classList.toggle(h.selected);

}

let pagesCount = Math.ceil(props.totalCount / props.pageSize);
let pages = [];
for (let i = 1; i <= pagesCount; i++) { pages.push(i) }


let heroesArray = props.heroes.map((hero, index) =>{
  let id = parseInt(hero.url.match(/\d+/));
  return <div key={index} className = {h.block} > 
  <div className = {h.name}>{hero.name}</div>
  <div  className = {h.name}>{hero.gender}	</div>
  <div  className = {h.picture} style = {{backgroundImage:  `url(https://starwars-visualguide.com/assets/img/characters/${id}.jpg)` }} > 
  <div className= {props.choosen.some(elem=>elem.name===hero.name)? h.selected + ' ' + h.like : h.like} 
  onClick = {(e)=>{
    addColorToStar(e); 
    props.choosen.some(elem=>elem.name===hero.name)? props.delChoosen(hero): props.addChoosen(hero); 
  } } >   &#9733;	</div>
  </div> 	
  </div>
  

});

return (
  
<div className = {h.body}>
    <div className = {h.pages} > Pages with heroes: 
      {pages.map((page, index) => {
        return <span key={index} className = {props.currentPage === page? h.selected: null}
          onClick={() => { onPageChange(page) }}
        >{page}</span>
      })}
    </div>
    <div className = {h.preloader}> {props.loading ? <Preloader /> : null}</div>
    <div className = {h.space}></div>
    <Search {...props}/>
    <h3 className = {h.head}>Choose your favorite Star Wars hero</h3>
{heroesArray}

</div>


)}


let mapStateToProps = (state)=>{
 return {
   heroes: getHeroesArray(state),
   totalCount: getTotalCountNumber(state),
   currentPage: getCurrentPage(state),
   pageSize: getPageSize(state),
   loading: getLoading(state),
   choosen: getChoosenArray(state),
   searchValue: getSearchValue(state)
  };
}


export default 
connect(mapStateToProps,  {getHeroes, changePage, addChoosen, delChoosen, setSearchValue})(HomePage);

