import React, {Component} from 'react';
import {StyledRow, StyledCell} from './style.js';
import worldObj from './initGrid.js';
// import Goomba from './Sprite/Enemy/Goomba/Goomba.js';
// import KoopaTroopa from './Sprite/Enemy/KoopaTroopa/KoopaTroopa.js';

/**
 * Class that renders the grid together with the entities that live on it.
 */
class TileGrid extends Component {
  constructor() {
    super();
    this.state = {
      grid: worldObj,
      enemies1: [],
      enemies2: [],
    };

    this.findPose = this.findPose.bind(this);

    /* we cannot ref the tiles directly, as they are not stateful components.
     * Thus, we cannot attach a ref to them. However, we can place these
     * references up here on the grid, and forward them down.
     */
    this.refs = [...Array(worldObj.length)]
      .map(x => [...Array(worldObj[0].length)]);
    for (let i = 0; i < worldObj.length; i++) {
      for (let j = 0; j < worldObj[0].length; j++) {
        this.refs[i][j] = React.createRef();
      }
    }
  }

  render() {
    return (
      <div>
        {
          this
            .state
            .grid
            .map((x,i) =>
                 <StyledRow>
                   {x.map((y,j) =>
                          <StyledCell bkg={y}
                                      ref={this.refs[i][j]}/>
                         )}
                 </StyledRow>
                )
        }
        {/* {this */}
        {/*  .state */}
        {/*  .goombas */}
        {/*  .map(x => */}
        {/*      <Goomba calcRoute={this.findPose}/>)} */}
        {/* {this */}
        {/*  .state */}
        {/*  .koopatroopas */}
        {/*  .map(x => */}
        {/*       <KoopaTroopa/>)} */}
      </div>
    );
  };


  /* we'll pass this function as a prop to the generated enemies.
   * the function gets the current BoundingClientRect of the elements
   * on the grid, and passes them to the Enemy as a return.
   */

  /* takes a function block, a BoundingClientRect and returns the block
   * after being called with the Bounding and the grid as arguments
   */
  findPose(callback, args) {
    return callback(args, this.refs, this.state.grid);
  }
}

export default TileGrid;
