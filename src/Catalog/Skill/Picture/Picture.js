import React, {Component} from 'react';
import {PosedCube, StyledFace, CubeWrapper, CubeImg} from './style.js';

/**
 * this is the component that will be animated with CSS.
 */
class Picture extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    let {logo} = this.props;
    return(
      <CubeWrapper>
        <PosedCube>
          {[["X", 0, "Z", 12],
            ["X", 180, "Z", -12],
            ["Y", 90, "X", 12],
            ["Y", -90, "X", -12],
            ["X", 90, "Y", 12],
            ["X", -90, "Y", -12]].map((x,i) =>
                                      <StyledFace r={x[0]} rd={x[1]}
                                                  t={x[2]} td={x[3]}
                                                  i={i} logo={logo}/>)}
        </PosedCube>
      </CubeWrapper>
    );
  }
}

export default Picture;
