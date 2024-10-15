/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import bg from "assets/images/team/bg.jpg";

import member1 from "../assets/images/10.png";
import member2 from "../assets/images/2.png";
import member3 from "../assets/images/3.png";
import member4 from "../assets/images/4.png";
const TeamSection: React.FC = () => {
  return (
    <section
      className="team padding-top padding-bottom"
      //   style={{ backgroundImage: `url(${bg})` }}
      id="team"
    >
      <div className="container">
        <div className="section-header text-center">
          <p className="subtitle">Team Member</p>
          <h2>Meet the Team</h2>
        </div>
        <div className="team__wrapper">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="team__item">
                <div className="team__item-inner">
                  <div className="team__item-thumb">
                    <img src={member1} alt="Team Image" />
                  </div>
                  <div className="team__item-content">
                    <div className="team__item-author">
                      <h4>
                        <a href="#">Barry Smith</a>
                      </h4>
                      <p>Project management</p>
                    </div>


                  </div>
                </div>
                <span className="svg-shape">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="210px"
                    height="10px"
                  >
                    <path
                      fill-rule="evenodd"
                      fill-opacity="0.102"
                      d=" M5.000,-0.001 L30.000,-0.001 L25.000,9.999 L-0.000,9.999 L5.000,-0.001
                                                                    Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      fill-opacity="0.302"
                      d=" M35.000,-0.001 L60.000,-0.001 L55.000,9.999 L30.000,9.999 L35.000,-0.001
                                                                    Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      fill-opacity="0.502"
                      d=" M65.000,-0.001 L90.000,-0.001 L85.000,9.999 L60.000,9.999 L65.000,-0.001
                                                                    Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      fill-opacity="0.702"
                      d=" M95.000,-0.001 L120.000,-0.001 L115.000,9.999 L90.000,9.999 L95.000,-0.001
                                                                    Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      fill-opacity="0.8"
                      d=" M125.000,-0.001 L150.000,-0.001 L145.000,9.999 L120.000,9.999
                                                                    L125.000,-0.001 Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      fill-opacity="0.902"
                      d=" M155.000,-0.001 L180.000,-0.001 L175.000,9.999 L150.000,9.999
                                                                    L155.000,-0.001 Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d=" M185.000,-0.001 L210.000,-0.001 L210.000,9.999 L180.000,9.999
                                                                    L185.000,-0.001 Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="team__item">
                <div className="team__item-inner">
                  <div className="team__item-thumb">
                    <img src={member2} alt="Team Image" />
                  </div>
                  <div className="team__item-content">
                    <div className="team__item-author">
                      <h4>
                        <a href="#">Mavin Wang</a>
                      </h4>
                      <p>Art & Design</p>
                    </div>


                  </div>
                </div>
                <span className="svg-shape">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="210px"
                    height="10px"
                  >
                    <path
                      fill-rule="evenodd"
                      fill-opacity="0.102"
                      d=" M5.000,-0.001 L30.000,-0.001 L25.000,9.999 L-0.000,9.999 L5.000,-0.001
                                                                    Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      fill-opacity="0.302"
                      d=" M35.000,-0.001 L60.000,-0.001 L55.000,9.999 L30.000,9.999 L35.000,-0.001
                                                                    Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      fill-opacity="0.502"
                      d=" M65.000,-0.001 L90.000,-0.001 L85.000,9.999 L60.000,9.999 L65.000,-0.001
                                                                    Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      fill-opacity="0.702"
                      d=" M95.000,-0.001 L120.000,-0.001 L115.000,9.999 L90.000,9.999 L95.000,-0.001
                                                                    Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      fill-opacity="0.8"
                      d=" M125.000,-0.001 L150.000,-0.001 L145.000,9.999 L120.000,9.999
                                                                    L125.000,-0.001 Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      fill-opacity="0.902"
                      d=" M155.000,-0.001 L180.000,-0.001 L175.000,9.999 L150.000,9.999
                                                                    L155.000,-0.001 Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d=" M185.000,-0.001 L210.000,-0.001 L210.000,9.999 L180.000,9.999
                                                                    L185.000,-0.001 Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="team__item">
                <div className="team__item-inner">
                  <div className="team__item-thumb">
                    <img src={member3} alt="Team Image" />
                  </div>
                  <div className="team__item-content">
                    <div className="team__item-author">
                      <h4>
                        <a href="#">Esther Rogers</a>
                      </h4>
                      <p>Writing and Development</p>
                    </div>


                  </div>
                </div>
                <span className="svg-shape">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="210px"
                    height="10px"
                  >
                    <path
                      fill-rule="evenodd"
                      fill-opacity="0.102"
                      d=" M5.000,-0.001 L30.000,-0.001 L25.000,9.999 L-0.000,9.999 L5.000,-0.001
                                                                    Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      fill-opacity="0.302"
                      d=" M35.000,-0.001 L60.000,-0.001 L55.000,9.999 L30.000,9.999 L35.000,-0.001
                                                                    Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      fill-opacity="0.502"
                      d=" M65.000,-0.001 L90.000,-0.001 L85.000,9.999 L60.000,9.999 L65.000,-0.001
                                                                    Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      fill-opacity="0.702"
                      d=" M95.000,-0.001 L120.000,-0.001 L115.000,9.999 L90.000,9.999 L95.000,-0.001
                                                                    Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      fill-opacity="0.8"
                      d=" M125.000,-0.001 L150.000,-0.001 L145.000,9.999 L120.000,9.999
                                                                    L125.000,-0.001 Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      fill-opacity="0.902"
                      d=" M155.000,-0.001 L180.000,-0.001 L175.000,9.999 L150.000,9.999
                                                                    L155.000,-0.001 Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d=" M185.000,-0.001 L210.000,-0.001 L210.000,9.999 L180.000,9.999
                                                                    L185.000,-0.001 Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="team__item">
                <div className="team__item-inner">
                  <div className="team__item-thumb">
                    <img src={member4} alt="Team Image" />
                  </div>
                  <div className="team__item-content">
                    <div className="team__item-author">
                      <h4>
                        <a href="#">Chris Roman</a>
                      </h4>
                      <p>Social Media Marketing</p>
                    </div>


                  </div>
                </div>
                <span className="svg-shape">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="210px"
                    height="10px"
                  >
                    <path
                      fill-rule="evenodd"
                      fill-opacity="0.102"
                      d=" M5.000,-0.001 L30.000,-0.001 L25.000,9.999 L-0.000,9.999 L5.000,-0.001
                                                                    Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      fill-opacity="0.302"
                      d=" M35.000,-0.001 L60.000,-0.001 L55.000,9.999 L30.000,9.999 L35.000,-0.001
                                                                    Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      fill-opacity="0.502"
                      d=" M65.000,-0.001 L90.000,-0.001 L85.000,9.999 L60.000,9.999 L65.000,-0.001
                                                                    Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      fill-opacity="0.702"
                      d=" M95.000,-0.001 L120.000,-0.001 L115.000,9.999 L90.000,9.999 L95.000,-0.001
                                                                    Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      fill-opacity="0.8"
                      d=" M125.000,-0.001 L150.000,-0.001 L145.000,9.999 L120.000,9.999
                                                                    L125.000,-0.001 Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      fill-opacity="0.902"
                      d=" M155.000,-0.001 L180.000,-0.001 L175.000,9.999 L150.000,9.999
                                                                    L155.000,-0.001 Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d=" M185.000,-0.001 L210.000,-0.001 L210.000,9.999 L180.000,9.999
                                                                    L185.000,-0.001 Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
