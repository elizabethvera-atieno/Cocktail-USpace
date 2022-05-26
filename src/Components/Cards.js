import React from "react";
import { Link } from "react-router-dom";


function Cards({Drinks}){

   return (
        <div className="text-center">
            <h3 className="text-2xl  pt-5 text-textcolor font-bold">
                Some of the popular Cocktails
            </h3>
            {/* {Drinks.map((drink)=>(<p key={drink.idDrink}>poiiuuii</p>))} */}
            <section className="overflow-hidden text-gray-700 ">
                <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                    <div className="flex flex-col md:flex-row place-content-center flex-wrap -m-1 md:-m-2">
                      {Drinks.map((drink)=>(
                           <div key={drink.idDrink} className="flex flex-wrap w-1/3">
                           <div className="w-full p-1 md:p-2">
                               <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <Link to={`/display/${drink.idDrink}`}>
                                    <img
                                       className="rounded-t-lg"
                                       src={drink.strDrinkThumb}
                                       alt=""
                                   />
                                </Link>
                                   <div className="flex justify-between p-1">
                                       <h5 className="mb-2  tracking-tight text-textcolor dark:text-white">
                                           {drink.strDrink}
                                       </h5>
                                        <a
                                           href="#"
                                           className="inline-flex items-center py-1 px-3 text-xs font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                       >
                                           Like
                                           <svg className="w-5 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                       </a>
                                   </div>
                               </div>
                           </div>
                       </div>
                      ))} 
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Cards;
