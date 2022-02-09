//CONTEXT 
import CoinContexProvider from "./context/CoinsContextProvider";
import TerendContexProvider from "./context/TerendContextrovider"

//COMPONENT
import Crypto  from "./components/Crypto";
import Footer from "./components/Footer";

function App() {
  return (
   <CoinContexProvider>
     <TerendContexProvider>
          <Crypto />
          <Footer />
     </TerendContexProvider>
   </CoinContexProvider> 
  )
}

export default App;
