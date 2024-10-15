const ConnectModal: React.FC = () => {
  return (
    <div
      className="wallet-modal modal fade"
      id="wallet-option"
      aria-labelledby="choose-wallet"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="choose-wallet">
              Connect Your Wallet
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>
              Please select a wallet to connect for <br />
              Start Minting your NFTs
            </p>
            <ul className="wallet__list">
              <li className="wallet__list-item">
                <a href="#">
                  <span>
                    <img
                      src="assets/images/wallet/metamask.jpg"
                      alt="metamask"
                    />
                  </span>
                </a>
              </li>
              <li className="wallet__list-item">
                <a href="#">
                  <span>
                    <img
                      src="assets/images/wallet/coinbase.jpg"
                      alt="coinbase"
                    />
                  </span>
                </a>
              </li>
              <li className="wallet__list-item">
                <a href="#">
                  <span>
                    <img src="assets/images/wallet/bsc.jpg" alt="bsc" />{" "}
                  </span>
                </a>
              </li>
              <li className="wallet__list-item">
                <a href="#">
                  <span>
                    <img
                      src="assets/images/wallet/trust.jpg"
                      alt="Trust Wallet"
                    />{" "}
                  </span>
                </a>
              </li>
            </ul>
            <p>
              By connecting your wallet, you agree to our Terms of Service and
              our Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectModal;
