import Header from "views/header";

import BannerSection from "views/bannerSection";
import Panda_BannerSection from "views/Panda_bannerSection";
import CounterSection from "views/counterSection";
import About from "views/about";
import RoadMap from "views/roadMap";
import Collection from "views/collections";
import TeamSection from "views/teamSection";
import FAQs from "views/FAQ";
import Community from "views/Community";
import Footer from "views/footer";

import "../assets/css/swiper-bundle.min.css";

const Application = () => {
  return (
    <div>
      <Header />
      <BannerSection />
      <CounterSection />

      {/*  <About />*/}
      {/*<RoadMap />*/}
      {/*<Collection />*/}
      {/*<TeamSection />*/}
      {/*<Community />*/}
      {/*<Footer />*/}
    </div>
  );
};
export default Application
