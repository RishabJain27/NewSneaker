import React, { useEffect, useState } from 'react';
import './App.css';
import Nike from "./Nike";
import Adidas from "./Adidas";
const App = () => {
  
  const [nikes, setNike] = useState([]);
  const [adidas, setAdidas] = useState([]);

  useEffect( () => {
    nikeShoes();
    adidasShoes();
  },[]);

  const nikeShoes = async () => {
    const response = await fetch(`http://localhost:3001/nikeShoes`);
    const data = await response.json();
    setNike(data);
    //console.log(data);
  }

  const adidasShoes = async () => {
    const response = await fetch(`http://localhost:3001/adidasShoes`);
    const data = await response.json();
    setAdidas(data);
    //console.log(data);
  }

  return (
    <div className="App">
      <h1 className="h1">Newly Released Shoes</h1>
      <div className="nikes">             
        {nikes.map(nike => (
          <Nike
            key = {nike.image_url}
            names={nike.name}
            image_url = {nike.image_url} 
            site = {nike.site}
            category = {nike.category}
          />
        ))}
      </div>
      <div className="adidas">             
        {adidas.map(adidas => (
          <Adidas
            key = {adidas.image_url}
            names={adidas.name}
            image_url = {adidas.image_url} 
            site = {adidas.site}
            category = {adidas.category}
          />
        ))}
      </div>
    </div>
  );

};

export default App;
