import React, { useState } from "react";
import Video1 from "../images/video1.mp4";
import Video2 from "../images/video2.mp4";
import Video3 from "../images/video3.mp4";

const Video = () => {
  return (
    <div className="video">
      <h1 className="title">Videos</h1>
      <div display="flex" flex-direction="row">
        <video
          width="45%"
          height="200px"
          margin="auto"
          margin-top="10px"
          controls
          muted
        >
          <source src={Video1} type="video/mp4" />
        </video>
        <video
          width="45%"
          margin="5%"
          margin-top="30px"
          height="200px"
          controls
          muted
        >
          <source src={Video2} type="video/mp4" />
        </video>
      </div>
      <div>
        <video width="90%" margin-top="30px" height="200px" controls muted>
          <source src={Video3} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Video;
