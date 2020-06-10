import React, { useEffect, useState } from 'react';
import './App.css';
import Shoe from "./Shoe"



const App = () => {
  
  const [shoes, setShoes] = useState([]);


  useEffect( () => {
    shoesDB();
  },[]);

  const shoesDB = async () => {
    const response = await fetch(`https://sneakers-api.herokuapp.com/shoes`);
    const data = await response.json();
    setShoes(data);
  }

  /* IGNORE
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
  */

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
    </div>
  );

};

export default App;
