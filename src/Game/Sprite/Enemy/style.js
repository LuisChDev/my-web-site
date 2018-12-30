import posed from 'react-pose';
import {StyledSprite} from '../style.js';

/**
 * defines the animations of the Enemy:
 * +Walking - linear movement until the next blocking tile
 * +Death - once clicked, jump out of the scenario
 * +Jump - if wings, jumps around the stage
 */
const PosedEnemy = posed(StyledSprite)({
  begin: {opacity: 0},
  end: {opacity: 1},
});

export default PosedEnemy;
