import React from "react";
import "../styles/about.css";
import image5 from "../images/image5.jpg";
import image7 from "../images/image7.jpg";
import image9 from "../images/image9.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <h1 className="title">About</h1>
      <div className="content">
        <div className="paragraph">
          <p>
            We are a aluminium company in Lebanon, Beirut. We work with high
            quality and acceptable prices. In addition, we have great experience
            in this field. We worl in all of Lebanon.{" "}
          </p>
        </div>
        <div className="image_about">
          <div className="about_image">
            <img src={image5} className="des" />
          </div>
          <div>
            <img src={image7} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
