// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Favorites from './Favorites';
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route path="/favorites">
          <Favorites/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
      <Footer/>
      <div className="App">
  
      </div>
    </>
  );
}

export default App;
