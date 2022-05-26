import React from "react";

function Navbar(){
    return (
        <nav className="navbar flex justify-between px-5">
            <h2 className=" text-2xl pl-6 pt-3 text-textcolor">Cocktail U-Space</h2>
            <h2 className=" text-2xl pl-6 pt-3 text-textcolor">
                <a href="/">Home</a>
            </h2>
            <h2 className=" text-2xl pl-6 pt-3 text-textcolor">
                <a href="/favorites">Favorites</a>
            </h2>
            <h2 className=" text-2xl pl-6 pt-3 text-textcolor">
                <a href="/authentication">Login/Sign-up</a>
            </h2>
        </nav>
    )
}

export default Navbar;