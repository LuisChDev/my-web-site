import styled from 'styled-components';
import posed from 'react-pose';
import {hammerSprite} from '../../../style.js';

/* animate the player as it moves across the screen */
const posedHammer = posed.div({
  // zig zag
  zig: {
    x: ({playPos}) => `${playPos[1]*1.98}vmax`,
    y: ({playPos}) => `${playPos[0]*1.98}vmax`,
  },
  zag: {
    x: ({playPos}) => `${playPos[1]*1.98}vmax`,
    y: ({playPos}) => `${playPos[0]*1.98}vmax`,
  },
  attacking: {
    x: ({playPos,
         playerFace}) => { return (
           (playPos[1]*2 + (["right","left"]
                            .indexOf(playerFace)>-1?(
                              playerFace==="right"?2:-2):0)) + "vmax"
         );
                         },
    y: ({playPos,
         playerFace}) => { return(
           (playPos[0]*2 + (["down","up"]
                            .indexOf(playerFace)>-1?(
                              playerFace==="down"?2:-2):0)) + "vmax"
         );
                         }
  }
});

const StyledHammer = styled(posedHammer)`
  position: absolute;
  z-index: 8;
  width: 4vmax;
  height: 4vmax;
  top: ${({playPos}) => playPos[0]*2}vmax;
  left: ${({playPos}) => playPos[1]*2}vmax;
  background-image: url(${({playerFace}) => hammerSprite[playerFace]});
  background-size: 100%;
  background-repeat: no-repeat;
`;

export default StyledHammer;
