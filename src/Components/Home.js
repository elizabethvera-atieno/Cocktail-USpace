import React from "react";
import About from "./About";
import Search from "./Search";
import Cards from "./Cards";
import Feedback from "./Feedback";
import { useEffect } from "react";
import { useState } from "react";


function Home(){
    const[drinks, setDrinks]=useState([])

    useEffect(()=>{
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m`)
        .then((r)=> r.json())
        .then((data)=>(setDrinks(data)))
    },[])

    return(
        <div>
            <About/>
            <Search/>
            {drinks.map((drink)=> <Cards key={drink} drinks={drink}/>)}
            <Feedback/>
            
          
        </div>
    )
}

export default Home;