import React, {Component} from 'react';
import StyledEnemy from './style.js';
import Sprite from '../Sprite.js';

/**
 * returns the next unwalkable tile by taking the current
 * position and direction
 *  @typedef {function(int, bool): int} WalkingTo
 */

/**
 * subclass of enemy, which subclasses Sprite.
 * @param {WalkingTo} walkingTo - calculates the objective
 */
class Enemy extends Component {
  constructor(props) {
    super(props);
    this.enemyRef = React.createRef();
    this.state = {
      isAlive: true,
      facingRight: true,
    };
  }

  // this.props.findPose
  render() {
    return(
      //the sprite itself
      <Sprite
        src={src}
        states={4}
        tile={{width: 20, height: 24}}
        scale={1.5}
        framesPerStep={20}
        ref={this.enemyRef}
        render={({args, sons}) =>
                <StyledEnemy {...args}>
                  {sons}
                </StyledEnemy>}
      />
    );
  }

  /* define function that calculates distance to next walkable file.
   * unwalkable tiles:
   * - not made of air
   * - above a block of air
   * - no block to the side (edge of the screen)
   * @returns a callback and the current position of the Enemy.
   */
  calculateWalk() {
    const curPos = this.enemyRef.current.getBoundingClientRect();
    const calcWalk = (boundRect, refArr, curGrid) => {
      // first we calculate our current tile.
      // based on the current width and height of the tiles,
      const firstCell = refArr[0][0].current.getBoundingClientRect();
      // we calculate the "tile coordinate" based on the
      // component's x and y coordinates + 1/2 it's width
      // and height.
      const curTile =
            [Math.floor((boundRect.y + boundRect.height/2 + window.scrollY)
                        /firstCell.height),
             Math.floor((boundRect.x + boundRect.width/2 + window.scrollX)
                        /firstCell.width)];
      // with this info, we look either left or right for the first block
      // with the appropriate conditions.
      // apologize in advance for the mess
      let lastTile = null;
      for (let i = 0; i < (this.facingRight?
                           curGrid[0].length - curTile[1]
                           :curTile[1]); i++) {

        let thisTile = (offHeight, offWidth) =>
            curGrid[curTile[0 + offHeight]][curTile[1]
                                + (this.facingRight?
                                   i:-i) + offWidth];
        if (thisTile(0,0) !== "air"
            || thisTile(1,0) === "air") {
          lastTile = curTile[1] + (this.facingRight? i:-i);
          break;
        }
      }

      // if no blocking tile was found, set it to the last one.
      if (lastTile === null) {
        lastTile = (this.facingRight? curGrid[0].length:0);
      }

      // retrieve the ref, get the position of the tile,
      const targetTile = refArr[curTile[0]][lastTile]
            .current
            .getBoundingClientRect();

      // the standard return format is (dy,dx). Even if you only need one of them
      return [0,(this.facingRight? (targetTile.right - curPos.right)
                 :(targetTile.left - curPos.left))];
    };

    return {curPos: curPos, calcRoute: calcWalk};
  }

  /**
   * defines function that calculates the ending position of a falling object.
   * by "falling" here we mean taking a parabolic trajectory. This means
   * both going up and down, and at different angles. We'll take all of this info
   * from a tracker function that fires on a drag event.
   */
  calculateFall() {
    const curPos = this.enemyRef.current.getBoundingClientRect();

    const calcFall = (boundRect, refArr, grid, iy, ix, iVy, iVx) => {
      // TODO verify the units in the formulas.
      const g = 9.81;
      // within cells interlinked
      const cell = refArr[0][0].getBoundingClientRect();
      // we define the formulas involved.
      // maximum height achieved
      const yMax = (iVy>0? iy + (1/2)*(iVy^2)*(1/g) : iy);

      // maximum horizontal distance traveled.
      const xMax = ix +
            (iVx)*(((-iVy)*Math.sqrt(iVy^2 + 4*(g/2)*(iy)))/(2*(-g/2)));

      // y as a function of x.
      const yAtX = (x) =>
            iy + ((iVy/iVx)/(x - ix)) + (g/2)*((x - ix)/iVx)^2;

      // time taken for the motion as function of coordinates.
      const tAtEnd = (x) => "TODO";

      // all the rows where this happens (just all below the maximum).
      const rows = grid.slice(Math.floor((yMax)/(cell.height)));

      // we find the traversed cells. We calculate the y position of our object
      // as it traverses the boundaries between columns. These positions tell
      // us which cell in each given column will be passed through, from
      // grid[floor(yMax/cell.height)][column] to ceil(yMin/cell.height). These
      // are sliced and placed in a new ordered array, fro the first one to the
      // last.
      // @returns {Array} with integers (how many cell widths from and to)
      const boundaries = [Math.ceil(xMax/cell.width),
                          Math.floor(ix/cell.width)];
      // @returns {array} with distances in px
      const boundaryWidths = [...Array(boundaries[0] - boundaries[1])]
            .map((x,i) => (cell.width)*i + boundaries[1]*cell.width);
      // @returns {array} of heights in px
      const heights = boundaryWidths
            .map((x) => yAtX(x));
      // @returns list of cells traversed from grid
      for (let i = 0; i < heights.length - 1; i++) {
        // highest and lowest Y in terms of # of cells
        let highestY = Math.ceil(Math.max(heights[i],
                                          heights[i + 1])/cell.height);
        let lowestY = Math.floor(Math.min(heights[i],
                                          heights[i + 1])/cell.height);
        // adding the retrieved contents from grid. The column number is
        // i. The rows involved are #(max-min), each+min
        for (let j = 0; j < highestY - lowestY; j++) {
          if (grid[j + lowestY][i]) {
            return [refArr[j + lowestY][i].getBoundingClientRect().top, time];
          }
        }
      }
    };

    return {curPos: curPos, calcRoute: calcFall};
  }
}

export default Enemy;

/*
 * The Sprite class holds the animation logic.
 * The outputted class receives the source, as a single file, where css
 * transforms move it to show the appropriate sprite. They should be
 * arranged horizontally in sequence.
 * Each of the subclasses defines it's own animation sequences.
 * this means each of them must define their own poses, then import and call
 * the styled option for the sprite animation.
 */
