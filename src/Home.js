import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import {useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Shoe from "./Shoe";
import shoppingCart from './images/shopping-cart.png';



const Home = () => {

  const [shoes, setShoes] = useState([]);
  const [filterValues, setFilter] = useState([]);
  const [allValues, setValues] = useState([]);
  const history = useHistory();
  const isLogged = useSelector(state => state.isLogged);
  const firstName = useSelector(state => state.FirstName);
  

  useEffect( () => {
    shoesDB();
  },[]);

  const handleSelectBrand=(e)=>{
    if(e === "Adidas"){
      adidasShoes();
    }
    if(e === "Nike"){
      nikeShoes();
    }
    if(e === "UnderArmour"){
      underarmourShoes();
    }

  }

  const handleLoginRedirect = () =>{
    history.push("/Login");

  }

  const handleCartRedirect = () =>{
    history.push("/Cart");

  }

  const handleSelectGender=(e)=>{
    var newShoe = [];
   
    if(e === "Kid"){
      filterValues.filter(allValues => allValues.gender === e ).map(allValue => (
        newShoe.push(allValue) 
      ));
    }
    else{
      filterValues.filter(allValues => allValues.gender === e || allValues.gender === "Unisex").map(allValue => (
        newShoe.push(allValue) 
      ));
    }
    setShoes(newShoe);
  }

  const shoesDB = async () => {
    const response = await fetch(`https://sneakers-api.herokuapp.com/shoes`);
    const data = await response.json();
    setShoes(data);
    setValues(data);
    setFilter(data);
  }

  const nikeShoes = () => {
    var newShoe = [];
    allValues.filter(allValues => allValues.brand === 'Nike' ).map(allValue => (
      newShoe.push(allValue) 
    ));
    setShoes(newShoe);
    setFilter(newShoe);
  }

  const adidasShoes = () => {
    var newShoe = [];
    allValues.filter(allValues => allValues.brand === 'Adidas' ).map(allValue => (
      newShoe.push(allValue) 
    ));
    setShoes(newShoe);
    setFilter(newShoe);
    //console.log(data);
  }

  const underarmourShoes = () => {
    var newShoe = [];
    allValues.filter(allValues => allValues.brand === 'Under-Armour' ).map(allValue => (
      newShoe.push(allValue) 
    ));
    setShoes(newShoe);
    setFilter(newShoe);
  } 

  return (
    <div className="Home">
      {isLogged ? <img className= "shopping-Logo" src={shoppingCart} alt="Logo" onClick={handleCartRedirect}/> : null}
      <h1 className="h1">Newly Released Sneakers</h1>
      <Navbar className="navbar" collapseOnSelect expand="lg" variant="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown 
              title="Brand" 
              id="collasible-nav-dropdown"
              onSelect={handleSelectBrand}>
              <NavDropdown.Item eventKey="Nike">Nike</NavDropdown.Item>
              <NavDropdown.Item eventKey="Adidas">Adidas</NavDropdown.Item>
              <NavDropdown.Item eventKey="UnderArmour">Under Armour</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown 
              title="Gender" 
              id="collasible-nav-dropdown"
              onSelect={handleSelectGender}>
              <NavDropdown.Item eventKey="Male">Male</NavDropdown.Item>
              <NavDropdown.Item eventKey="Female">Female</NavDropdown.Item>
              <NavDropdown.Item eventKey="Unisex">Unisex</NavDropdown.Item>
              <NavDropdown.Item eventKey="Kid">Kids</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {isLogged ? <Nav><h3>Hi {firstName}!</h3></Nav> : <Nav><Button variant="outline-primary" onClick={handleLoginRedirect}>Login</Button></Nav> }
        </Navbar.Collapse>
      </Navbar>
      <br></br>
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

export default Home;