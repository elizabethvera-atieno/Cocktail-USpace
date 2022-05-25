import React from "react"

function About(){
  return(
      <div className="divAbout text-center ">
        <h3  className="text-2xl  pt-20 text-textcolor font-bold">Welcome to Cocktail U-Space</h3>
        <div className="md:grid grid-cols-11 gap-4 pt-5">
            <div className="col-start-3 col-span-2">
                {/* <img  src={require('../Images/ct1.png')}/>  */}
                <img  src={require('../Images/ct2.png')} className="image"/>
            </div>
            <div className="col-start-5 col-span-3">
            <p className="text-white"><em>COCKTAIL U-SPACE</em> brings
            you the a variety of cocktails and their ingredients. 
            It has all yourfavourite cocktail drinks and more for you to
            explore and make on your own.</p>
            </div>
            <div className="col-start-8 col-span-2 ">
                <img src={require('../Images/ct2.png')} className="image"/>
            </div>
        </div>
      </div>
  )  
}

export default About;