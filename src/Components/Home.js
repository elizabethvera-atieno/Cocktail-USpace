import React from "react";
import About from "./About";
import Search from "./Search";
import Cards from "./Cards";
import Feedback from "./Feedback";
// import Display from './Dispay';
import { useEffect } from "react";
import { useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";


function Home(){
    const [drinkData, setDrinkData]=useState([])

    const match = useRouteMatch();
    console.log(match);

    useEffect(()=>{
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m`)
        .then((r)=> r.json())
        .then((data)=>(setDrinkData(data.drinks)))
    },[])
    // console.log(drinkData)


    return(
        <div>
            <About/>
            <Search updateDrinks={setDrinkData} />
            <Cards Drinks={drinkData} />
            <Feedback/>
           {/* <Route path={`/display`}>
               <Display Drinks={drinkData}/>
           </Route> */}
            
          
        </div>
    )
}

export default Home;