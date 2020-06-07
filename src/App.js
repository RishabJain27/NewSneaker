import React, { useEffect, useState } from 'react';
import './App.css';
import Shoe from "./Shoe"
import Nike from "./Nike";
import Adidas from "./Adidas";
import Underarmour from "./Underarmour";


const App = () => {
  
  const [shoes, setShoes] = useState([]);
  const [nikes, setNike] = useState([]);
  const [adidas, setAdidas] = useState([]);
  const [underarmour, setUnderarmour] = useState([]);

  useEffect( () => {
    shoesDB();
    //nikeShoes();
    //adidasShoes();
    //underarmourShoes();
  },[]);

  const shoesDB = async () => {
    const response = await fetch(`https://sneakers-api.herokuapp.com/shoes`);
    const data = await response.json();
    setShoes(data);
  }

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

  const underarmourShoes = async () => {
    const response = await fetch(`http://localhost:3001/underarmourShoes`);
    const data = await response.json();
    setUnderarmour(data);
    //console.log(data);
  }

  return (
    <div className="App">
      <h1 className="h1">Newly Released Shoes</h1>
      <div className="shoes">             
        {shoes.map(shoe => (
          <Shoe
            key = {shoe.image_url}
            names={shoe.name}
            image_url = {shoe.image_url} 
            site = {shoe.site}
            category = {shoe.category}
          />
        ))}
      </div>
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
      <div className="underarmours">             
        {underarmour.map(underarmour => (
          <Underarmour
            key = {underarmour.image_url}
            names={underarmour.name}
            image_url = {underarmour.image_url} 
            site = {underarmour.site}
            category = {underarmour.category}
          />
        ))}
      </div>
    </div>
  );

};

export default App;
