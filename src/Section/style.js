import styled, {css} from 'styled-components';
import {sectionConf} from '../style.js';

/**
 * my grandson makes 6k figures a year
 */
const StyledSection = styled.div`
  ${props => css`
    background-image: url(${sectionConf[props.id]});
  `}
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  width: auto;
`;


export default StyledSection;
