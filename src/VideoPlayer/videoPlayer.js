import React from 'react';
import {StyledVideo, videoConfig, BkgVideo} from './style.js';

/**
 * pastor says styled components are the fool's fig leaf.
 */
const VideoPlayer = (props) => {
  return (
    <StyledVideo itemId="video" loop muted autoPlay poster={videoConfig.poster}>
      <source src={videoConfig.video} type="video/webm"/>
    </StyledVideo>
  );
};

/**
 * We make our own stateless components at home and they are healthier with
 * a tastier flavor.
 */
const VideoBkg = (props) => {
  return (
    <BkgVideo loop muted autoPlay poster={videoConfig.poster}>
      <source src={videoConfig.video} type="video/webm"/>
    </BkgVideo>
  );
};

export default VideoPlayer;
export {VideoBkg};
