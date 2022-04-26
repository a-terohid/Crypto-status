import React from 'react';

//STYLES
import styles from "./Terend.module.scss"

const Terend = ({ name , symbol , image , price }) => {
    return (
        <div className={ styles.terendCard } >
            <img src={image} alt={name} />
            <div className={ styles.terendinfo } >
                <h1>{ name }</h1>
                <h3>{ symbol }</h3>
                <h4>{ price }</h4>
            </div>
        </div>
    );
};

export default Terend;