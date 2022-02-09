import React , { useState , useContext } from 'react';

//STYLES
import styles from "./Crypto.module.scss";

//CONTEXTS
import { CoinsProvider } from "../context/CoinsContextProvider";
import { terendProvider } from "../context/TerendContextrovider";

//COMPONNENT
import Terend from './Terend';
import Coins from "./Coins"
import Loder from "./Loder"

const Crypto = ()  => {

    //STATES
    const [ search , setSearch ] = useState([])

    //USE CONTEXTS
    const coins = useContext(  CoinsProvider );
    const terend = useContext( terendProvider );

    const searchhandeler = ( event ) => {
        setSearch( event.target.value )
    }

    const serachcoins = coins.filter( coin => coin.name.toLowerCase().includes( search.toString().toLowerCase() ) )


    return (
        <div className={ styles.Crypto } >
            <div className={ styles.Navbar } >
                <h1>Crypto status</h1>
                <input type="text" placeholder="Search" value={search} onChange={searchhandeler} />
            </div>
            <div>
                {
                    !search.length?
                     <div>
                         <h1 className={styles.title} >Terends:</h1>
                        <div className={ styles.terend } >
                            {
                                terend.map( terend => <Terend
                                        key={ terend.item.coin_id }
                                        name={ terend.item.name }
                                        symbol={ terend.item.symbol }
                                        image={ terend.item.large }
                                        price={ terend.item.price_btc }
                                    /> )
                            }
                        </div>
                     </div>:
                     <span> </span>
                }
                {
                    
                    coins.length?
                    <div>
                        <h1 className={styles.title} >Cryptos:</h1>
                        {
                            serachcoins.map( coin => <Coins
                                            key={ coin.id } 
                                            name={coin.name}
                                            image={coin.image}
                                            symbol={coin.symbol}
                                            price={coin.current_price}
                                            marketCap={coin.market_cap}
                                            priceChange={coin.price_change_percentage_24h}
                                        />)
                        }
                    </div> :
                    <Loder />
                }
            </div>
        </div>
    );
};

export default Crypto;