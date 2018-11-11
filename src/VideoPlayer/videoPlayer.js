import React from 'react';
import {StyledVideo, videoConfig} from './style.js';

/**
 * pastor says styled components are the fool's fig leaf.
 */
const VideoPlayer = (props) => {
  return (
    <StyledVideo loop muted autoPlay poster={videoConfig.poster}>
      <source src={videoConfig.video} type="video/webm"/>
    </StyledVideo>
  );
};

export default VideoPlayer;
