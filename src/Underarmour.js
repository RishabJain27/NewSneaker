import React from 'react';
import style from './underarmour.module.css';

const Underarmour = ({names, image_url, site, category}) => {

    function click(site) {
        window.open(site.site);
    }

    return(
        <div className={style.shoe} onClick={() => click({site})}>
            <p className={style.name}> <b> {names} </b> </p>
            <img className={style.image} src={image_url} alt="" width="200" height="200"/>
            <p className={style.name}> <b> {category} </b> </p>
        </div>
    );
}

export default Underarmour;