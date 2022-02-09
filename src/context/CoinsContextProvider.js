import React , { useEffect , useState , createContext } from 'react';

//API
import { get_coin } from "../API/API"

//CRETE CONTEXT 
export const CoinsProvider = createContext();

const CoinsContextProvider = ({ children }) => {

    const [ coins , setCoins ] = useState([]);

    useEffect ( () => {
        const fetchAPI = async () => {
            setCoins( await get_coin() );
        }

        fetchAPI();

    } , [] )

    return (
        <CoinsProvider.Provider value={coins} >
            { children }
        </CoinsProvider.Provider>
    );
};

export default CoinsContextProvider;