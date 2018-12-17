import styled, {css, keyframes} from 'styled-components';
import posed from 'react-pose';
import {cubeColors, cubeImages} from '../../../style.js';
import React from 'react';

/**
 * wrapper for the cube perspective.
 */
const CubeWrapper = styled.div`
  margin-top: 10vh;
  perspective: 1000px;
  perspective-origin: 50% 50%;
`;

/**
 * animation, how the cube should look
 */
const cubeMotion = keyframes`
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }

  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
`;

const AnimCube = posed.div({
  grown: { scale: 1.0,
           rotateX: ({turns}) => `${360*turns}deg`,
           rotateY: ({turns}) => `${360*turns}deg`,
           transition: {
             scale: {
               type: "spring", stiffness: 150, damping: 7,
             },
             rotateX: {
               duration: 3000,
             },
             rotateY: {
               duration: 3000,
             }
           }},

  shrunk: { scale: 0.0,
            rotateX: ({turns}) => `${360*turns}deg`,
            rotateY: ({turns}) => `${360*turns}deg`,
            transition: {
              duration: 300,
            }},
});

/**
 * styles for the cube.
 */
const StyledCube = styled(AnimCube)`
  margin: auto;
  position: relative;
  height: 16vw;
  width: 16vw;
  transform-style: preserve-3d;
`;

// animation: ${cubeMotion} 20s linear infinite;
/**
 * each individual face of the cube.
 */
const StyledFace = styled.div`
  position: absolute;
  box-sizing: border-box;
  padding: 10px;
  height: 100%;
  width: 100%;
  opacity: 0.8;
  border: solid 1px #eeeeee;
  ${({logo}) => css`
    background-image: url(${cubeImages[logo]});
  `};
  background-size: 100px 100px;
  background-repeat: no-repeat;
  background-position: center;
  ${props => css`
    transform: translate${props.t}(${props.td}vw) rotate${props.r}(${props.rd}deg);
    background-color: ${cubeColors[props.i]};
  `}
`;

export {StyledCube, StyledFace, CubeWrapper};
