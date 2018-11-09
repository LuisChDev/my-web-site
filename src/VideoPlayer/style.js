import {videoPlayerConf} from '../style.js';
import styled from 'styled-components';

/**
 * same thing as above but with styled-components.
 */
const styledVideo = styled.video`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100%;
  transform: translateX(-50%) translateY(-50%);
  background-size: cover;
`;


const videoConfig = {
  poster: videoPlayerConf.poster,
  video: videoPlayerConf.video,
};

export {videoStyle, styledVideo, videoConfig};
