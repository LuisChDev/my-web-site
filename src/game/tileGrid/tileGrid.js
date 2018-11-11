import React, {Component} from 'react';
import {styledRow, styledCell} from './style.js';
import flatWorldObj from './iniGrid.js';

/**
 * implements a grid of stateless tiles.
 *
 */
class tileGrid extends Component {
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
              <styledRow>
                {x.map(y =>
                       <styledCell bkg={y}/>
                       )}
              </styledRow>
             )
        }
      </div>
    );
  }
}
