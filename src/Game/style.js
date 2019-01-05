import styled, {css} from 'styled-components';
import {tileGridConf} from '../style.js';

const StyledRow = styled.div`
  display: table;
  width: 100%;
`;

const StyledCell = styled.div`
  display: table-cell;
  border: 1px solid #000;
  height: 4vmax;
  z-index: -1;
  background-image: url(${({bkg}) => tileGridConf[bkg.name]})};
  background-repeat: no-repeat;
  background-size: 100%;
`;

const StyledGame = styled.div`
  position: relative;

  @media screen and (orientation: portrait) {
    display: none;
  }
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
  z-index: 11;

  @media screen and (max-width: 750px) {
    display: none;
  }

  ${({mobile}) => mobile && css`
    @media screen and (max-width: 750px) {
      display: block;
    }
    @media screen and (min-width: 750px) {
      display: none;
    }
  `}
`;

const Controls = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 35vw;
  max-height: 4vmax;
  background: rgba(0,0,0,0.5);
  color: white;
  font-size: large;
  font-family: Verdana, Sans-serif;
  display: none;
  overflow: hidden;

  @media screen and (max-width: 750px) {
    display: block;
  }
`;

const SBttn = styled.button`
  border-radius: 10%;
  background-color: orange;
  min-width: 7vw;
  height: 4vmax;
  color: white;
  ${({attack}) => attack && css`
    background-color: blue;
  `}
`;

export {StyledRow, StyledCell, StyledGame, Instructions, Controls, SBttn};
