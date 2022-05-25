import React from "react";

function Display(){
    return(
    <>
    <div className=" pt-10 text-center"><h2 className="text-2xl text-white font-bold">Cocktail Name</h2></div>
    <div className="pt-10 place-content-center flex ">
        <div className=" max-w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img
            className="rounded-t-lg "
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
            alt=""
            />

            <div className="flex justify-between p-1">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-textcolor dark:text-white">
                My CARD WAHALA
                </h5>
            </div>
        </div>
    </div>
    <div className="text-center pt-5">
       <h2 className="text-2xl text-white font-bold">Ingredients:</h2>
        <ul className="text-white text-xl">
            <li>one</li>
            <li>two</li>
            <li>two</li>
        </ul>
        <h2 className="text-2xl text-white font-bold">Method:</h2>
        <p className="text-white text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lor
        em Ipsum has been the industry's standard dummy text ever since the 1500s</p>
    </div>
    
    </>

        
        
    )
}

export default Display;
