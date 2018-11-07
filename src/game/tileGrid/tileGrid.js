import React, {Component} from 'react';

// tile backgrounds
import tileStyle from './style.js';
// terrain
import flatWorldObj from './iniGrid.js';

/**
 *
 *
 */

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
        {this.state.matrix.map(x =>
                               <div style={tileStyle.tableRow}>
                                 {x.map(y =>
                                        <div style={tileStyle.tableCell}>
                                          y
                                        </div>)}
                               </div>)}
      </div>
    );
  }
}
