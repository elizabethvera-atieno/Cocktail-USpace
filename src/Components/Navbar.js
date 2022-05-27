import React from "react";

function Navbar() {

    return (
        <nav className="navbar md:flex justify-between px-5 border-gray-200 px-2 sm:px-4  rounded">
            <h2 className=" md:text-xl pl-6 pt-3 text-textcolor">
                <a href="/">Cocktail U-Space</a>
                </h2>
            <div className="flex md:justify-end  w-full  " id="mobile-menu">
                <h2 className=" md:text-xl pl-6 pt-3 text-textcolor">
                    <a href="/">Home</a>
                </h2>
                <h2 className=" md:text-xl pl-4 pt-3 text-textcolor">
                    <a href="/favorites">Favorites</a>
                </h2>
                <h2 className=" md:text-xl pl-4 pt-3 text-textcolor">
                    <a href="/authentication">Login/Sign-up</a>
                </h2>
            </div>
        </nav>



    )
}

export default Navbar;