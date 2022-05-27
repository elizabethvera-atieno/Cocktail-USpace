import React from "react";
import About from "./About";
import Search from "./Search";
import Cards from "./Cards";
import Feedback from "./Feedback";
// import Display from './Dispay';
import { useEffect } from "react";
import { useState } from "react";
import {Redirect, useHistory} from "react-router-dom"
// import { Route, useRouteMatch } from "react-router-dom";


function Home({user}){
    const [drinkData, setDrinkData]=useState([])
    let history = useHistory()
    useEffect(()=>{
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m`)
        .then((r)=> r.json())
        .then((data)=>(setDrinkData(data.drinks)))
    },[])

    console.log(user);
    
    if (!user){
        return <Redirect to="/authentication"/>
    }

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