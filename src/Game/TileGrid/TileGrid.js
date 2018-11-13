import React, {Component} from 'react';
import {StyledRow, StyledCell} from './style.js';
import flatWorldObj from './iniGrid.js';

/**
 * implements a grid of stateless tiles.
 *
 */
class TileGrid extends Component {
  constructor() {
    super();
    this.state = {
      matrix: flatWorldObj,
    };
  }

  render() {
    return (
      <div>
        {this
         .state
         .matrix
         .map(x =>
              <StyledRow>
                {x.map(y =>
                       <StyledCell bkg={y}/>
                       )}
              </StyledRow>
             )
        }
      </div>
    );
  }
}

export default TileGrid;
