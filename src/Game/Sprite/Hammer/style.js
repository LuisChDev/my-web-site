import styled from 'styled-components';
import posed from 'react-pose';
import {hammerSprite} from '../../../style.js';

/* animate the player as it moves across the screen */
const posedHammer = posed.div({
  // zig zag
  zig: {
    x: ({playPos}) => `${playPos[1]*2}vw`,
    y: ({playPos}) => `${playPos[0]*5}vh`,
  },
  zag: {
    x: ({playPos}) => `${playPos[1]*2}vw`,
    y: ({playPos}) => `${playPos[0]*5}vh`,
  },
  attacking: {
    x: ({playPos,
         playerFace}) => { return (
           (playPos[1]*2 + (["right","left"]
                            .indexOf(playerFace)>-1?(
                              playerFace==="right"?2:-2):0)) + "vw"
         );
                         },
    y: ({playPos,
         playerFace}) => { return(
           (playPos[0]*5 + (["down","up"]
                            .indexOf(playerFace)>-1?(
                              playerFace==="down"?5:-5):0)) + "vh"
         );
                         }
  }
});

const StyledHammer = styled(posedHammer)`
  position: absolute;
  z-index: 10;
  width: 4vw;
  height: 10vh;
  top: ${({playPos}) => playPos[0]*5}vh;
  left: ${({playPos}) => playPos[1]*2}vw;
  background-image: url(${({playerFace}) => hammerSprite[playerFace]});
  background-size: contain;
`;

export default StyledHammer;
