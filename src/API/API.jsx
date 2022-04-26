import axios from "axios";

// website = https://www.coingecko.com/
// terending = https://api.coingecko.com/api/v3/search/trending
// coins = https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

//URL
const BASE_URL = "https://api.coingecko.com/api/v3/";
const COINS = `${BASE_URL}coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`  ;
const TERENDING = `${BASE_URL}search/trending`;


//GET FUNCTIONS 
export const get_coin = async () => {
    const response = await axios.get( COINS )
    return response.data
}

export const get_terending = async () => {
    const response = await axios.get( TERENDING )
    return response.data.coins
}
