import React from 'react';
import shoppingCart from './images/remove-cart.png';
import style from './shoe.module.css';

const cartShoe = ({names, image_url, site, category, email}) => {


    function click(site) {
        console.log(site.site);
        window.open(site.site);
    }

    const handleCart = async() =>{

        const requestOptions = {
            method: 'DELETE',
        };
        let url = "https://sneakers-api.herokuapp.com/cart/" + email + "/name/" + names;
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        if(response.ok){
            alert(data.message);
        }
        else{
            alert(data.message);
        }
    
    }


    return(
        <div className={style.shoe}>
             <img className={style.cart} src={shoppingCart} alt="Logo" onClick={handleCart}/>
            <p className={style.name}> <b> {names} </b> </p>
            <img className={style.image} src={image_url} alt="" width="200" height="200" onClick={() => click({site})}/>
            <p className={style.name}> <b> {category} </b> </p>
        </div>
    );
}

export default cartShoe;