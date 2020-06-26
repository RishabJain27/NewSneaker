import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css';
import Shoe from "./cartShoe";



const Cart = () => {

  const [shoes, setShoes] = useState([]);
  const email = useSelector(state => state.Email);
  

  useEffect( () => {
    cartDB();
  });

  const cartDB = async (arr) => {
    var url = "https://sneakers-api.herokuapp.com/cart/" + email;
    const response = await fetch(url);
    const data = await response.json();
    setShoes(data);
    console.log(shoes.length);
  } 

  return (
    <div className="Cart">
      <h1 className="h1">Saved Shoes</h1>
      <div className="shoes">   
      {shoes.length > 0 ? shoes.map(shoe => (
          <Shoe
            key = {shoe.image_url}
            names={shoe.name}
            image_url = {shoe.image_url} 
            site = {shoe.site}
            category = {shoe.category}
            email = {email}
          />
        )) : null}         
      </div>
    </div>
  );

};

export default Cart;