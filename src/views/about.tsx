/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import image21 from "assets/images/21.gif";

const About: React.FC = () => {
  return (
    <section className="about padding-top padding-bottom" id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="row g-5">
            <div className="col-lg-6">
              <div
                className="about__thumb aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <img src={image21} alt="About Image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about__content aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <p className="subtitle">The Story</p>
                <h2>About us</h2>
                <p>
                  This is for Owls Collection job employees want freedom for their kids.
                  <br />
                  <br />
                  Owls NFTs is a limited collection of only 1,000 unique creations. All NFTs are individually created one by one by artist Endurance_AMA. Inspired by a endurance sport lifestyle racing around the world, become a traveler, sport man, explorer or transport to the outer galaxy. This is a limited collection of Owls  NFT, the endurance lifestyle of the future. Unlockable Content included in all NFTs, owners will get a high resolution JPG file & digital NFT ownership and advance to the endurance lifestyle of the next upcoming project.
                  <br />
                  <br />

                </p>

                {/*<div className="mint-step">*/}
                {/*  <p className="subtitle color--secondary-color">Easy Steps</p>*/}
                {/*  <h3>How to Mint</h3>*/}

                {/*  <ul className="mint-step__list">*/}
                {/*    <li className="mint-step__list-item">*/}
                {/*      <span className="color--secondary-color">1.</span> connect*/}
                {/*      Your Wallet*/}
                {/*    </li>*/}
                {/*    <li className="mint-step__list-item">*/}
                {/*      <span className="color--secondary-color">2.</span> Select*/}
                {/*      Your Quantity*/}
                {/*    </li>*/}
                {/*    <li className="mint-step__list-item">*/}
                {/*      <span className="color--theme-color">3.</span> Confirm the*/}
                {/*      transition*/}
                {/*    </li>*/}
                {/*    <li className="mint-step__list-item">*/}
                {/*      <span className="color--theme-color">4.</span> Receive*/}
                {/*      Your NFTs*/}
                {/*    </li>*/}
                {/*  </ul>*/}
                {/*  <div className="btn-group">*/}
                {/*    <a href="#" className="default-btn default-btn--secondary">*/}
                {/*      Mint Now*/}
                {/*    </a>*/}
                {/*  </div>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
