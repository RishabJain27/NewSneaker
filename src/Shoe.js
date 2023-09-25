import React from 'react';
import {useSelector} from 'react-redux';
import style from './shoe.module.css';
import shoppingCart from './images/addCart.png';

const Shoe = ({names, image_url, site, category, gender}) => {

    const isLogged = useSelector(state => state.isLogged);
    const email = useSelector(state => state.Email);

    function click(site) {
        console.log(site.site);
        window.open(site.site);
    }

    const handleCart = async() =>{

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                { key: email,
                    name: names,
                    image_url: image_url,
                    site: site,
                    category: category,
                    gender: gender
            })
        };
        const response = await fetch(`https://sneakersupdated-bd053f013fa7.herokuapp.com/cart`, requestOptions);
        const data = await response.json();
        if(response.ok){
            alert("Added Item to Cart");
        }
        else{
            alert(data.message);
        }
    
    }

    return(
        <div className={style.shoe}>
            {isLogged ? <img className={style.cart} src={shoppingCart} alt="Logo" onClick={handleCart}/> : <div></div>}
            <p className={style.name}> <b> {names} </b> </p>
            <img className={style.image} src={image_url} alt="" width="200" height="200" onClick={() => click({site})}/>
            <p className={style.name}> <b> {category} </b> </p>
        </div>
    );
}

export default Shoe;