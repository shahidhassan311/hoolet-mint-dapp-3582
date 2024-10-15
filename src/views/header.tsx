/* eslint-disable jsx-a11y/anchor-is-valid */
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import logo from "assets/images/logo.png";
import ConnectIcon from "assets/svg/connect";
import DiscordIcon from "assets/svg/discord";
import { ConnectedContext, ProviderContext, SignerContext } from "contexts/Web3Context";
import { useContext, useEffect } from "react";
import toast from "react-hot-toast";

const Header: React.FC = () => {
  let {provider, setProvider} = useContext(ProviderContext);
  let {connected, setConnected} = useContext(ConnectedContext);
  let {signer, setSigner} = useContext(SignerContext);

  useEffect(() => {
    if ("solana" in window){
      if (window?.solana?.isPhantom){
        setProvider(window.solana);
      }
    }
  }, []);

  const handleConnect = async () => {
    // connect(ConnectorNames.Injected);
    try{
      if ("solana" in window){
        if (window?.solana?.isPhantom){
          await window.solana.connect({ });
        }
      }
      else{
        throw new Error('Wallet does not exist');
      }
    }
    catch(e : any){
      console.log(e);
      console.log(e?.message ? e.message : 'Failed to connect');
      toast(e?.message ? e.message : 'Failed to connect');
    }
  };

  useEffect( () => {
    if (provider){
      provider?.on("connect", (publicKey: PublicKey, e: any)=>{ 
          console.log(`connect event: ${publicKey.toString()}`);
          console.log(e, provider)
          setConnected(true); 
          setSigner({
            publicKey: publicKey, 
            signTransaction: provider.signTransaction, 
            signAndSendTransaction: provider.signAndSendTransaction, 
            signMessage: provider.signMessage, 
            signAllTransactions: provider.signAllTransactions, 
            signAndSendAllTransactions: provider.signAndSendAllTransactions
          });
      });
      provider?.on("disconnect", ()=>{ 
          console.log("disconnect event");
          setConnected(false); 
          // setPubKey(null);
      });
    }
  }, [provider]);

  return (
    <div>
      <header className="header-section header--fixed animated fadeInDown">
        <div className="header-bottom">
          <div className="container">
            <div className="header-wrapper">
              <div className="logo">

              {/*  <a href="index.html">*/}
              {/*    <img src={logo} alt="logo" style={{ width: "200px" }} />*/}
              {/*  </a>*/}
              </div>
              <div className="menu-area">

                <div className="header-btn">

                  <button className="default-btn" onClick={handleConnect}>
                    <span>
                      {signer?.publicKey ? (
                        `${signer.publicKey?.toString()?.substring(0,7)}...${signer.publicKey?.toString()?.substring(signer.publicKey?.toString()?.length - 7, signer.publicKey?.toString()?.length)}`
                      ) : (
                        <>
                          Connect <ConnectIcon />
                        </>
                      )}
                    </span>
                  </button>
                </div>
                <div className="header-bar d-lg-none">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
