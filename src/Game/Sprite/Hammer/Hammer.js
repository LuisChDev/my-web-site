// in this file we define the logic specific to the Player Entity.
import React, {Component} from 'react';
import StyledHammer from './style.js';

const Hammer = ({playPos, pose, playerFace}) => {
    return (
      <StyledHammer playPos={playPos}
                    pose={pose}
                    playerFace={playerFace}></StyledHammer>
    );
};

export default Hammer;
