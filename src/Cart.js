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

  const cartDB = async () => {
    var url = "https://sneakers-api.herokuapp.com/cart/" + email;
    const response = await fetch(url);
    const data = await response.json();
    setShoes(data);
  } 

  return (
    <div className="Cart">
      <h1 className="h1">Saved Shoes</h1>
      <div className="shoes">             
        {shoes.map(shoe => (
          <Shoe
            key = {shoe.image_url}
            names={shoe.name}
            image_url = {shoe.image_url} 
            site = {shoe.site}
            category = {shoe.category}
            gender = {shoe.gender}
          />
        ))}
      </div>
    </div>
  );

};

export default Cart;