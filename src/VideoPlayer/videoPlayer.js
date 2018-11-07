import React from 'react';
import videoStyle from './style.js';

/**
 * video player for background.
 * @param poster A still picture for the time before playback starts.
 * @param video The video to be played.
 */
const VideoPlayer = (props) => {
  return (
      <video loop muted autoPlay poster={videoStyle.config.poster}
      className="fullscreen-bg_video"
      style={videoStyle.videoStyle}>
      <source src={videoStyle.config.video} type="video/webm"/>
    </video>
  );
};

export default VideoPlayer;
