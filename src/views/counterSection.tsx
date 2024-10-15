import { useEffect, useState } from "react";

const CounterSection: React.FC = () => {
  // const [supply, setSupply] = useState(0);
  // const contract = use721Contract();
  //
  // const getSupply = async () => setSupply(await contract.totalSupply());
  // useEffect(() => {
  //   getSupply();
  // }, [contract]);

  return (
    <section className="counter counter--uplifted" style={{ backgroundColor: `black` }}>
      <div className="container">
        <div className="counter__wrapper">
          <div className="row g-1">
            <div className="col-lg-4 col-sm-6">
              <div className="counter__item">
                <div className="counter__item-content">
                  <h2>
                    <span
                      className="purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end="600"
                      data-purecounter-duration="0"
                    >
                      600
                    </span>
                  </h2>
                  <p>Total items</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="counter__item">
                <div className="counter__item-content">
                  <h2>
                    <span
                      // className="purecounter"
                      // data-purecounter-start="1"
                      // data-purecounter-end="1"
                      // data-purecounter-once="false"
                    >
                      1
                    </span>
                  </h2>
                  <p>Floor Price [SOLANA]</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="counter__item">
                <div className="counter__item-content">
                  <h2>
                    <span
                      // className="purecounter"
                      // data-purecounter-start="0.5"
                      // data-purecounter-end="0.5"
                      // data-purecounter-once="false"
                    >
                      0.5
                    </span>
                  </h2>
                  <p>VIP price [SOLANA]</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
export default CounterSection;
