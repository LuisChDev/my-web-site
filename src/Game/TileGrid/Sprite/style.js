import React from 'react';
import styled from 'styled-components';

/**
 * styled box for an enemy.
 */
const StyledSprite = styled.div`
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
  overflow: hidden;
  transform: scale(${({scale}) => `${scale}, ${scale}`});
  transform-origin: top left;
`;

const StyledInnerImg = styled.img`
  transform: translate(-${({left}) => left}px, 0);
`;

export {StyledSprite, StyledInnerImg};
