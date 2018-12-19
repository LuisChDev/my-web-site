import styled from 'styled-components';
import posed from 'react-pose';
import {playerSprite} from '../../../style.js';

/* animate the player as it moves across the screen */
const posedPlayer = posed.div({
  // zig zag
  zig: {
    x: ({playPos}) => `${playPos[1]*1.98}vw`,
    y: ({playPos}) => `${playPos[0]*5}vh`,
  },
  zag: {
    x: ({playPos}) => `${playPos[1]*1.98}vw`,
    y: ({playPos}) => `${playPos[0]*5}vh`,
  },
});

const StyledPlayer = styled(posedPlayer)`
  position: absolute;
  z-index: 10;
  background: blue;
  width: 4vw;
  height: 10vh;
  top: ${({playPos}) => playPos[0]*5}vh;
  left: ${({playPos}) => playPos[1]*2}vw;
  background-image: url(${({playerFace}) => playerSprite[playerFace]});
  background-size: contain;
`;

export default StyledPlayer;
