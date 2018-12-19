import styled, {css} from 'styled-components';
import {tileGridConf} from '../style.js';

const StyledRow = styled.div`
  display: table;
  width: 100%;
`;

const StyledCell = styled.div`
  display: table-cell;
  height: 9.6vh;
  width: 4vw;
  border: 1px solid #000;
  background-image: url(${({bkg}) => tileGridConf[bkg.name]})};
`;

const StyledGame = styled.div`
  position: relative;
`;

const GridWrapper = styled.div`
  position: absolute;
`;

// ${props => (props.bkg !== 'air') && css`
//     background-image: ${tileGridConf[props.bkg]};
//   `}
export {StyledRow, StyledCell, StyledGame, GridWrapper};
