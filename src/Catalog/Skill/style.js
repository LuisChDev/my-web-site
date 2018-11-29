import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

/**
 * CSS part of the component.
 */
const StyledSkill = styled.div`
  display: block;
  width: 45vw;
  min-height: 20vh;

  font-family: Verdana, Sans-serif;
  &:hover {
    border: yellow;
}
`;
// const CssWrap = ({hostRef}) => <CssSkill ref={hostRef}/>;

// /**
//  * styling and animation of the items.
//  */
// const StyledSkill = posed(CssWrap)({
//   closed: {
//     opacity: 0,
//   },
//   open: {
//     opacity: 1,
//   },
// });


export default StyledSkill;
