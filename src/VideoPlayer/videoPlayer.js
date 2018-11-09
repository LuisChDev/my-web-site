import React from 'react';
import {styledVideo, videoConfig} from './style.js';

/**
 * pastor says styled components are the fool's fig leaf.
 */
const VideoPlayer = (props) => {
  return (
    <styledVideo loop muted autoPlay poster={videoConfig.poster}>
      <source src={videoConfig.video} type="video/webm"/>
    </styledVideo>
  );
};

export default VideoPlayer;
