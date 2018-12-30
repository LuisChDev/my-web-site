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
  z-index: -1;
  background-image: url(${({bkg}) => tileGridConf[bkg.name]})};
`;

const StyledGame = styled.div`
  position: relative;
`;

const GridWrapper = styled.div`
  position: absolute;
`;

// I'll try placing the instructions here
const Instructions = styled.div`
  position: absolute;
  width: 45vw;
  background: rgba(0,0,0,0.5);
  color: white;
  padding: 10px;
  font-size: large;
  font-family: Verdana, Sans-serif;
  display: float;
  float: right;
  overflow: hidden;
  margin: 50px 20px 20px 20px;
  z-index: 100;
`;

export {StyledRow, StyledCell, StyledGame, GridWrapper, Instructions};
