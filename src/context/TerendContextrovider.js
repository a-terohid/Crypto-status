import React , { useEffect , useState , createContext } from 'react';

//API
import { get_terending } from "../API/API";

//CREATE CONTEXT 
 export const terendProvider = createContext();

const TerendContextrovider = ({ children }) => {

    const [ terend , setTerend ] = useState([]);

    useEffect( () => {
        const fetchAPI = async () => {
            setTerend( await get_terending() );
        }

        fetchAPI();

    } , [] )

    return (
        <terendProvider.Provider value={ terend } >
            { children }
        </terendProvider.Provider>
    );
};

export default TerendContextrovider;