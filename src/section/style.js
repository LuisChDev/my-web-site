import React from 'react';
import styled from 'styled-components';
import {sectionConfig} from '../style.js';

/**
 * my grandson makes 6k figures a year
 */
const styledSection = styled.div`
  ${props =>
    css`background-image: url(${sectionConfig[props.itemId]})`}
  background-repeat: no-repeat;
  background-postition: center;
  background-size: cover;
  background-attachment: fixed;
  width: auto;
  min-height: 100vh;
`;

export default styledSection;
