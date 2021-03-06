import {videoPlayerConf} from '../style.js';
import styled, {css} from 'styled-components';

/**
 * Styles for the video player.
 */
const StyledVideo = styled.video`
  position: fixed;
  min-width: 100%;
  min-height: 100%;
  z-index: ${({bkg}) => bkg?-2:-1};
  width: ${({bkg}) => bkg?"100%":"auto"};
  height: ${({bkg}) => bkg?"auto":"100%"};
  ${({bkg}) => bkg && css`
    filter: blur(8px);
    background-size: cover;
  `}
    ${({bkg}) => !bkg && css`
      margin: auto;
  `}
`;

const videoConfig = {
  poster: videoPlayerConf.poster,
  video: videoPlayerConf.video,
};

export {StyledVideo, videoConfig};
