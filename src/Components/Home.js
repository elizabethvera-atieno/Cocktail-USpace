import React from "react";
import About from "./About";
import Search from "./Search";
// import Cards from "./Cards";
import Feedback from "./Feedback";


function Home(){
    console.log("I am home");
    return(
        <div>
            <About/>
            <Search/>
            {/* <Cards/> */}
            <Feedback/>
            
          
        </div>
    )
}

export default Home;