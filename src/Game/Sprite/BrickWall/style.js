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
  position: absolute;
  background-size: contain;
  height: 4vmax;
  width: 4vmax;
  top: ${({position}) => position.y*4.15}vmax;
  left: ${({position}) => position.x*3.96}vmax;
  background-image: url(${tileGridConf.brick});
`;

export default StyledBrickWall;
