import React, {Component} from 'react';
import {StyledCube, StyledFace, CubeWrapper, CubeImg} from './style.js';

/**
 * this is the component that will be animated with CSS.
 */
const Picture = ({logo, pose}) => {
    return(
      <CubeWrapper>
        <StyledCube pose={pose}>
          {[["X", 0, "Z", 8],
            ["X", 180, "Z", -8],
            ["Y", 90, "X", 8],
            ["Y", -90, "X", -8],
            ["X", 90, "Y", 8],
            ["X", -90, "Y", -8]].map((x,i) =>
                                      <StyledFace r={x[0]} rd={x[1]}
                                                  t={x[2]} td={x[3]}
                                                  i={i} logo={logo}
                                                  key={i}/>)}
        </StyledCube>
      </CubeWrapper>
    );
};

export default Picture;
