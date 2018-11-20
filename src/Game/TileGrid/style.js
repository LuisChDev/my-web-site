import React from 'react';
import styled, {css} from 'styled-components';
import {tileGridConf} from '../../style.js';

const StyledRow = styled.div`
  display: table;
  width: 100%;
`;

/* Now I have to have this component forward the ref to the underlying div
 */
const StyledCell = styled.div`
  display: table-cell;
  height: 10vh;
  border: 1px solid #000;
  ${props => (props.bkg !== 'air') && css`
    background-image: ${tileGridConf[props.bkg]};
  `}
`;

export {StyledRow, StyledCell};
