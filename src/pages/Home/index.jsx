import React from "react";
import Articles from "../../components/Articles";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Why from "../../components/Whys";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Why />
      <Articles />
      <Footer />
    </div>
  );
};

export default Home;
