import React from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from "./firebase-config";
import {Redirect} from "react-router-dom"

function Navbar({user}) {


  const logout = async () => {

    await signOut (auth);
  };
console.log(user)
    return (
        <nav className="navbar md:flex justify-between px-5 border-gray-200 px-2 sm:px-4  rounded">
            <h2 className=" md:text-xl pl-6 pt-3 text-textcolor">
                <a href="/">Cocktail U-Space</a>
                </h2>
            <div className="flex md:justify-end  w-full  " id="mobile-menu">
                <h2 className=" md:text-xl pl-6 pt-3 text-textcolor">
                    <a href="/">Home</a>
                </h2>
                {!user ? <h2 className=" md:text-xl pl-4 pt-3 text-textcolor">
                    <a href="/authentication">Login/Sign-up</a>
                </h2> :    <button
      className=" text-white bg-textcolor hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={logout}
      >
        Sign out
      </button>}
            </div>
            
  
        </nav>



    )
}

export default Navbar;