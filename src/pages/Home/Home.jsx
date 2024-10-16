import "./Home.css";

import Hero from "../../components/Home/Hero/Hero";
import Ourservices from "../../components/Home/Ourservices/Ourservices";
import Statistics from "../../components/Home/Statistics/Statistics";
import Summary from "../../components/Home/Summary/Summary";
import Welcome from "../../components/Home/Welcome/Welcome";
import WhyChooseUs from "../../components/Home/Whychooseus/WhyChooseUs";
import Faq from "../../components/Home/Faq/Faq";

const Home = () => {
  return (
    <div className="home">
      <Hero />

      <Summary />

      <Welcome />

      <Ourservices />
      <Statistics />

      <WhyChooseUs />

      <Faq />
    </div>
  );
};

export default Home;
