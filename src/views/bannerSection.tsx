import shapeImage from "assets/images/shape.png";
// import { useActiveWeb3React } from "hooks/web3";
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import bannerImage from "assets/images/collectionimg.jpg";
import { useMintNFT } from "hooks/useMint";
import { generateSigner, transactionBuilder, publicKey, some } from '@metaplex-foundation/umi';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

import bg from "assets/images/bg.png";
import { useContext } from "react";
import { SignerContext } from "contexts/Web3Context";
import toast from "react-hot-toast";

const BannerSection: React.FC = () => {
  // const { account } = useActiveWeb3React();
  const { mint } = useMintNFT();
  const {signer} = useContext(SignerContext);

  const handleMint = async () => {
    if (signer.publicKey) {
      mint();
    } else {
      toast('Please first connect your wallet!')
    }
  };

  return (
    <section id="home" className="banner" style={{ backgroundColor: `black` }}>
    {/*<section id="home" className="banner" style={{ backgroundImage: `url(${bg})` }}>*/}
      <div className="container">
        <div className="banner__wrapper">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="banner__content aos-init aos-animate" data-aos="fade-right" data-aos-duration="2000">
                <h3>
                  Our Mint is
                  <span className="color--secondary-color">
                    Live
                    <svg className="svg-inline--fa fa-wifi" aria-hidden="true" focusable="false" data-prefix="fas"
                      data-icon="wifi" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M319.1 351.1c-35.35 0-64 28.66-64 64.01s28.66 64.01 64 64.01c35.34 0 64-28.66 64-64.01S355.3 351.1 319.1 351.1zM320 191.1c-70.25 0-137.9 25.6-190.5 72.03C116.3 275.7 115 295.9 126.7 309.2C138.5 322.4 158.7 323.7 171.9 312C212.8 275.9 265.4 256 320 256s107.3 19.88 148.1 56C474.2 317.4 481.8 320 489.3 320c8.844 0 17.66-3.656 24-10.81C525 295.9 523.8 275.7 510.5 264C457.9 217.6 390.3 191.1 320 191.1zM630.2 156.7C546.3 76.28 436.2 32 320 32S93.69 76.28 9.844 156.7c-12.75 12.25-13.16 32.5-.9375 45.25c12.22 12.78 32.47 13.12 45.25 .9375C125.1 133.1 220.4 96 320 96s193.1 37.97 265.8 106.9C592.1 208.8 600 211.8 608 211.8c8.406 0 16.81-3.281 23.09-9.844C643.3 189.2 642.9 168.1 630.2 156.7z"></path>
                    </svg>
                  </span>
                </h3>
                <h1 style={{ fontSize: "65px" }}>
                  Hoolet
                  <span className="color--theme-color">
                    <br />
                    NFTs
                  </span>
                  Collection
                </h1>
                <p>
                  Hoolet NFTs are a limited collection of 600 unique creations, blending artistry and innovations.
                </p>

                <div className="btn-group">
                  <div className="column">


                    <div className="navbar-right">
                      <button className="default-btn mint-btn" onClick={handleMint}>
                        MINT NOW
                      </button>

                      {/*<CrossmintPayButton*/}
                      {/*    clientId="7d5ccdd5-9805-4a8d-b536-23f51bb4725b"*/}
                      {/*    environment="production"*/}
                      {/*    mintConfig={{*/}
                      {/*      "type":"erc-721",*/}
                      {/*      "totalPrice": String(600 * 1),*/}
                      {/*      //"to":"0x2a63F77d62e9080D38504627Db835BBee5A47d4D:",*/}
                      {/*      "_mintAmount":1*/}
                      {/*    }}*/}
                      {/*/>*/}

                    </div>
                  </div>

                </div>
              </div>

            </div>
            <div className="col-lg-6">
              <div
                className="banner__thumb d-flex justify-content-center aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <img src={bannerImage} alt="banner Image" />
                <a className="banner__video" href="" data-rel="lightcase">
                  <div className="banner__video-inner">
                    <svg viewBox="0 0 100 100">
                      <defs>
                        <path
                          id="circle"
                          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        ></path>
                      </defs>
                      <text>
                        <textPath xlinkHref="#circle">
                          Mint is live * Mint is live * Mint Is live
                        </textPath>
                      </text>
                    </svg>
                    <span>
                      <svg
                        className="svg-inline--fa fa-play"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="play"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"
                        ></path>
                      </svg>
                      {/* <i className="fa-solid fa-play"></i> Font Awesome
                      fontawesome.com */}
                    </span>
                  </div>
                </a>
                <div className="banner-shape">
                  <img src={shapeImage} alt="shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BannerSection;
