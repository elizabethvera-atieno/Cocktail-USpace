import React from "react";
import About from "./About";
import Search from "./Search";
import Cards from "./Cards";
import Feedback from "./Feedback";
import { useEffect } from "react";
import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";

function Home({ user, setUser }) {
  const [drinkData, setDrinkData] = useState([]);
  let history = useHistory();
  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m`)
      .then((r) => r.json())
      .then((data) => setDrinkData(data.drinks));
  }, []);
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
  }, [setUser]);

  console.log(user);

  if (!user) {
    return <Redirect to="/authentication" />;
  }

  return (
    <div>
      <About />
      <Search updateDrinks={setDrinkData} />
      <Cards Drinks={drinkData} />
      <Feedback />
    </div>
  );
}

export default Home;
