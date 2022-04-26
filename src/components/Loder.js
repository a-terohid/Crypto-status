import React from 'react';

//GIF
import loading from "../img/loading.gif"

//STYLES
import styles from "./Loder.module.scss"

const Loder = () => {
    return (
        <div className={ styles.Loder } >
            <img src={ loading } alt="Loading.." />   
            {/* <h1>Loading...</h1>    */}
        </div>
    );
};

export default Loder;