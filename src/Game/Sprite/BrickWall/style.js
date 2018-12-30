import {tileGridConf} from '../../../style.js';
import styled from 'styled-components';
import posed from 'react-pose';

const PosedBrickWall = posed.div({
  broken: {
    scale: 1.5,
    transition: {
      type: "spring",
    }
  },
});

const StyledBrickWall = styled.div`
  display: table-cell;
  background-size: contain;
  position: absolute;
  height: 9.6vh;
  width: 4vw;
  top: ${({position}) => position.y*10}vh;
  left: ${({position}) => position.x*3.96}vw;
  background-image: url(${tileGridConf.brick});
`;

export default StyledBrickWall;
