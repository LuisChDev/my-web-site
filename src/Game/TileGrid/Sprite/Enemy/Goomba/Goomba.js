/**
 * in this file, we subclass the Enemy model with a particular set of
 * media assets, and perhaps it's own unique movements. This is the
 * level of abstraction that is instantiated to the actual DOM.
 */
import React from 'react';
import StyledGoomba from './style.js';

const Goomba = (props) => {
  return(
    <StyledGoomba />
  );
};

export default Goomba;
