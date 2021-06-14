import React from 'react'
import h from './../HomePage/HomePage.module.css';


const FavoriteHeroes=(props)=> {
   let choosenTry = [];
   choosenTry = JSON.parse(localStorage.getItem ('arrayChoosen'))|| [];

    let choosenArray = choosenTry.map((hero, index) =>{
        let id = parseInt(hero.url.match(/\d+/));
        return <div key={index} className = {h.block} > 
        <div className = {h.name}>{hero.name}</div>
        <div  className = {h.name}>{hero.gender}</div>
        <img src = {`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}  className = {h.picture}/>
        </div>
    
    });


return(

<div className = {h.body}>
<br></br>
<h3 className = {h.headInFavorite}>Choosen heroes</h3>
{choosenTry?choosenArray: <div>Privet kak dela? Voz'mute men9 na raboty :/</div> }
</div>
)
}


   export default FavoriteHeroes
