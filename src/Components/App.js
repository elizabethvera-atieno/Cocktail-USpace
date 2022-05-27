// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Footer from "./Footer";
import Display from './Dispay';
import Aunthentication from './Aunthentication';
import {useState} from "react"




function App() {
  const [user, setUser] = useState(null)

  console.log(user)

  return (
    <>
      <Navbar user={user}/>
        <div className='app'>
        <Switch>
        <Route path={`/display`}>
          <Display/>
        </Route>
        <Route path="/authentication">
          <Aunthentication user={user} setUser={setUser}/>
        </Route>
        <Route exact path="/">
          <Home user={user} setUser={setUser}/>
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
