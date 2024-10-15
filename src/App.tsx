import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../src/App.css";
import "../src/assets/css/swiper-bundle.min.css";

// import Web3ReactManager from "component/Web3ReactManager";
import Application from "views";
import { Wallet } from "component/connectors/solConnector";
import { ConnectedContext, ProviderContext, SignerContext } from "contexts/Web3Context";
import { Toaster } from "react-hot-toast";


function App() {
  const [signer, setSigner] = useState('');
  const [connected, setConnected] = useState(false);
  const [provider, setProvider] = useState('');




  return (
    <div>
      {/* <Web3ReactManager> */}
      <ProviderContext.Provider value={{provider, setProvider}}>
        <ConnectedContext.Provider value={{connected, setConnected}}>
          <SignerContext.Provider value={{signer, setSigner}}>
            <Wallet>
              <Application />
            </Wallet>
          </SignerContext.Provider>
        </ConnectedContext.Provider>
      </ProviderContext.Provider>
      <Toaster position="top-right" reverseOrder={false} />

        {/* </Web3ReactManager> */}
    </div>
  );
}

export default App;
