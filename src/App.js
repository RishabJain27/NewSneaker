import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Login from "./Login";
import Register from './Register';
import Cart from './Cart';
import {Route} from "react-router-dom";

import './App.css';



const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route exact path="/Login" component={Login}/>
      <Route exact path="/Register" component={Register}/>
      <Route exact path="/Cart" component={Cart}/>

    </div>
  );

};

export default App;
