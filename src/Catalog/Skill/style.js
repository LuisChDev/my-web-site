import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

/**
 * CSS part of the component.
 */
const StyledSkill = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 45vw;
  min-height: 20vh;
  font-family: Verdana, Sans-serif;

  @media (max-width: 700px) {
    width: auto;
  }
`;


export default StyledSkill;
