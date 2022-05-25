import React from "react";
// import Cards from "./Cards";
import { useState } from "react";

function Search({updateDrinks}){
    const [name, setName] = useState("");

    function handleSubmit(event,ctname){
        event.preventDefault()
        ctname = name
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${ctname}`)
        .then((response) => response.json())
        .then((data) => {
            updateDrinks(data.drinks)
        })
        setName("")
    }
    
    return(
        <div className="text-center font-bold">
            <h3 className="text-2xl  pt-20 text-textcolor">Search for cocktail by name</h3>
            <form onSubmit={handleSubmit} className=" pt-3">
            <input className="focus:bg-blue py-2" type="text" placeholder="Search.." name="search" onChange={(e) => setName(e.target.value)} value={name}/>
            <button className="bg-textcolor text-white hover:bg-sky-700 w-5xl px-4 py-2" type="submit">Enter</button>
            </form>
            {/* <Cards/> */}
        </div>
    )
}

export default Search;