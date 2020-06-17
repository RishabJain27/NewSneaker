import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Shoe from "./Shoe"



const App = () => {
  
  const [shoes, setShoes] = useState([]);
  const [allValues, setValues] = useState([]);

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

  const handleSelectGender=(e)=>{
    var newShoe = [];
   
    if(e === "Kid"){
      allValues.filter(allValues => allValues.gender === e ).map(allValue => (
        newShoe.push(allValue) 
      ));
    }
    else{
      allValues.filter(allValues => allValues.gender === e || allValues.gender === "Unisex").map(allValue => (
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
  }

  const nikeShoes = async () => {
    const response = await fetch(`https://sneakers-api.herokuapp.com/nikeShoes`);
    const data = await response.json();
    setShoes(data);
    setValues(data);
    //console.log(data);
  }

  const adidasShoes = async () => {
    const response = await fetch(`https://sneakers-api.herokuapp.com/adidasShoes`);
    const data = await response.json();
    setShoes(data);
    setValues(data);
    //console.log(data);
  }

  const underarmourShoes = async () => {
    const response = await fetch(`https://sneakers-api.herokuapp.com/underarmourShoes`);
    const data = await response.json();
    setShoes(data);
    setValues(data);
    //console.log(data);
  } 


  return (
    <div className="App">
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
          />
        ))}
      </div>
    </div>
  );

};

export default App;
