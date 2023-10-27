import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import About from "./About";
import Services from "./Services";
import Footer from "./Footer";
import "../styles/responsive.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Slider />
      <About />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
