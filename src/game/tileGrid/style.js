import React from 'react';
import styled, {css} from 'styled-components';
import {tileGridConf} from '../../style.js';

// terrain backgrounds

const styledRow = styled.div`
  display: table;
  width: 100%;
`;

const styledCell = styled.div`
  display: table-cell;
  height: 10vh;
  border: 1px solid #000;
  ${props => (props.bkg !== 'air') && css`
    background-image: ${tileGridConf[props.bkg]};
  `}
`;

export {styledRow, styledCell};
