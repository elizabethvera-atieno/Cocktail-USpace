// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Favorites from './Favorites';
import Footer from "./Footer";
import Display from './Dispay';
import Aunthentication from './Aunthentication';
import {useState} from "react"



function App() {
  const [user, setUser] = useState()
  return (
    <>
      <Navbar/>
        <div className='app'>
        <Switch>
        <Route path="/favorites">
          <Favorites/>
        </Route>
        <Route path={`/display`}>
          <Display/>
        </Route>
        <Route path="/authentication">
          <Aunthentication user={user} setUser={setUser}/>
        </Route>
        <Route exact path="/">
          <Home user={user}/>
        </Route>
      </Switch>
        </div>
      <Footer/>
      <div className="App">
  
      </div>
    </>
  );
}

export default App;
