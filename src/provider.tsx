import React from "react";
// import { createWeb3ReactRoot, Web3ReactProvider } from "@web3-react/core";
// import { getLibrary } from "./utils/web3";
// import { NetworkContextName } from "./config/misc";
import { Toaster } from "react-hot-toast";
// import { store } from "state/store";
// import { Provider } from "react-redux";
// import ContextProvider from "contexts";

// const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName);

// if (window.ethereum) {
//   window.ethereum.autoRefreshOnNetworkChange = true;
// }

const Providers = ({ children }) => {
  return (
    <>{children}</>
    // <Web3ReactProvider getLibrary={getLibrary}>
    //   <Web3ProviderNetwork getLibrary={getLibrary}>
        // {/* <ContextProvider> */}
        // <Toaster position="top-right" reverseOrder={false} />
        // {/* </ContextProvider> */}
    //   </Web3ProviderNetwork>
    // </Web3ReactProvider>
  );
};

export default Providers;
