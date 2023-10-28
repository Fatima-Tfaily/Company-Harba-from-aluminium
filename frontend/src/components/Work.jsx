import React from "react";
import Video from "../components/Video";
import Vkitchen from "../components/Vkitchen";
import Vfacade from "../components/Vfacade";
import Vcabinet from "../components/Vcabinet";
import Vother from "../components/Vother";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/work.css";
import "../styles/responsive.css";

const Work = () => {
  return (
    <div className="work">
      <Header />
      <Video />
      <Vkitchen />
      <Vcabinet />
      <Vfacade />
      <Vother />
      <Footer />
    </div>
  );
};

export default Work;
