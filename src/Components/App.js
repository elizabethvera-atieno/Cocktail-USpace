// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Favorites from './Favorites';
import Footer from "./Footer";
import Display from './Dispay';

function App() {
  return (
    <>
      <Navbar/>
        <div className='APP'>
        <Switch>
        <Route path="/favorites">
          <Display/>
        </Route>
        <Route exact path="/">
          <Home/>
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
