import React, { Fragment } from "react";
import "./Bites.css";
import Video from "./Video";
import Status from "./Status";
import Vid1 from "../../../videos/Vid1.mp4";
import Vid2 from "../../../videos/Vid2.mp4";
import Vid3 from "../../../videos/Vid3.mp4";

const Bites = ({ url }) => {
  const data = [
    {
      url: Vid1,
    },
    {
      url: Vid2,
    },
    {
      url: Vid3,
    },
  ];
  return (
    <Fragment>
      <div className="bites">
        <div>
          <Status />
        </div>
        <div className="video-container">
          {data.map((list, i) => (
            <Video key={i} url={list.url} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Bites;
