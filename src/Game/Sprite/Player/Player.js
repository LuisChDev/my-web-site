// in this file we define the logic specific to the Player Entity.
import React, {Component} from 'react';
import StyledPlayer from './style.js';

const Player = ({playPos, pose, playerFace}) => {
    return (
      <StyledPlayer playPos={playPos}
                    pose={pose}
                    playerFace={playerFace}></StyledPlayer>
    );
};

export default Player;
