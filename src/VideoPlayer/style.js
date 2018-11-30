import {videoPlayerConf} from '../style.js';
import styled, {css} from 'styled-components';

/**
 * Styles for the video player.
 */
const StyledVideo = styled.video`
  width: ${({bkg}) => bkg?"100%":"auto"};
  height: ${({bkg}) => bkg?"auto":"100%"};
  z-index: ${({bkg}) => bkg?-2:-1};
  ${({bkg}) => bkg && css`
    filter: blur(8px);
  `}
`;
// top: 50%;
// left: 50%;
// position: fixed;
// width: ${({bkg}) => bkg?"auto":"100%"};
// height: 100${({bkg}) => bkg?"%":"vh"};
// z-index: ${({bkg}) => bkg?-2:-1};
// transform: translateX(-50%) translateY(-50%);
// background-size: cover;
// ${({bkg}) => !bkg && css`
//     background-position: center center;
//   `}
// ${({bkg}) => bkg && css`
//     filter: blur(8px);
//   `}
const videoConfig = {
  poster: videoPlayerConf.poster,
  video: videoPlayerConf.video,
};

export {StyledVideo, videoConfig};
