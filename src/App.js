import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Login from "./Login";
import {Route} from "react-router-dom";
import Register from './Register';
import './App.css';



const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route exact path="/Login" component={Login}/>
      <Route exact path="/Register" component={Register}/>

    </div>
  );

};

export default App;
