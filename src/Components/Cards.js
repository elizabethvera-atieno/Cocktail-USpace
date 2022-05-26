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
                    <div className="flex flex-wrap -m-1 md:-m-2">
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
                                           className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-textcolor rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                       >
                                           Like
                                           <svg
                                               className="ml-2 -mr-1 w-4 h-4"
                                               fill="currentColor"
                                               viewBox="0 0 20 20"
                                               xmlns="http://www.w3.org/2000/svg"
                                           >
                                               <path
                                                   fillRule="evenodd"
                                                   d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                   clipRule="evenodd"
                                               ></path>
                                           </svg>
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
