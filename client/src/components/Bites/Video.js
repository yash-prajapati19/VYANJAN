import React, { Fragment, useRef, useState } from "react";
import "./Video.css";


const Video = ({url}) => {

   
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const vidRef = useRef();

  const onVideoClick = () => {
    if (isVideoPlaying) {
      vidRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      vidRef.current.play();
      setIsVideoPlaying(true);
    }
  };


  return (
    <Fragment>
      <div className="video-cards">
        <video
          onClick={onVideoClick}
          className="video-player"
          ref={vidRef}
          src={url}
          loop
         autoPlay
        />
      </div>
    </Fragment>
  );
};

export default Video;
