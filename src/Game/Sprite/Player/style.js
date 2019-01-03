import styled from 'styled-components';
import posed from 'react-pose';
import {playerSprite} from '../../../style.js';

/* animate the player as it moves across the screen */
const posedPlayer = posed.div({
  // zig zag
  zig: {
    x: ({playPos}) => `${playPos[1]*2}vmax`,
    y: ({playPos}) => `${playPos[0]*2}vmax`,
  },
  zag: {
    x: ({playPos}) => `${playPos[1]*2}vmax`,
    y: ({playPos}) => `${playPos[0]*2}vmax`,
  },
});

const StyledPlayer = styled(posedPlayer)`
  position: absolute;
  z-index: 10;
  width: 4vmax;
  height: 4vmax;
  top: ${({playPos}) => playPos[0]*2}vmax;
  left: ${({playPos}) => playPos[1]*2}vmax;
  background-image: url(${({playerFace}) => playerSprite[playerFace]});
  background-size: 100%;
  background-repeat: no-repeat;
`;

export default StyledPlayer;
