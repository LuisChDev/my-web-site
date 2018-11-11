import {videoPlayerConf} from '../style.js';
import styled from 'styled-components';

/**
 * same thing as above but with styled-components.
 */
const StyledVideo = styled.video`
  top: 50%;
  left: 50%;
  position: fixed;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  transform: translateX(-50%) translateY(-50%);
  background-size: cover;
`;


//position: fixed;
const videoConfig = {
  poster: videoPlayerConf.poster,
  video: videoPlayerConf.video,
};

export {StyledVideo, videoConfig};
