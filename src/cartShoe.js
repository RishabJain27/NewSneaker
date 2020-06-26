import React from 'react';
import style from './shoe.module.css';

const cartShoe = ({names, image_url, site, category, gender}) => {

    function click(site) {
        console.log(site.site);
        window.open(site.site);
    }


    return(
        <div className={style.shoe}>
            <p className={style.name}> <b> {names} </b> </p>
            <img className={style.image} src={image_url} alt="" width="200" height="200" onClick={() => click({site})}/>
            <p className={style.name}> <b> {category} </b> </p>
        </div>
    );
}

export default cartShoe;