import {videoPlayerConf} from '../style.js';
import styled from 'styled-components';

/**
 * main foreground video.
 */
const StyledVideo = styled.video`
  top: 50%;
  left: 50%;
  position: fixed;
  min-width: 100%;
  min-height: 100%;
  width: 100%;
  height: 100%;
  z-index: -1;
  transform: translateX(-50%) translateY(-50%);
  background-size: cover;
  background-position: center center;
`;

/**
 * optional background blurry video to hide nasty black bars.
 */
const BkgVideo = styled.video`
  top: 50%;
  left: 50%;
  position: fixed;
  min-width: 100%;
  min-height: 100%;
  z-index: -2;
  transform: translateX(-50%) translateY(-50%);
  background-size: cover;
  filter: blur(8px);
`;


const videoConfig = {
  poster: videoPlayerConf.poster,
  video: videoPlayerConf.video,
};

export {StyledVideo, videoConfig, BkgVideo};
