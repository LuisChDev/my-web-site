import React from 'react';
import StyledBrickWall from './style.js';

const BrickWall = ({pose, position}) => {
  return(
    <StyledBrickWall pose={pose} position={position}/>
  );
};

export default BrickWall;
