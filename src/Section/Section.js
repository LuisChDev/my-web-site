import React, {Component} from 'react';
import StyledSection from './style.js';

/**
 * Each section of the page. Static background.
 */
const Section = ({itemId, children, open}) => {
  const childrenProps = React
        .Children
        .map(children, child =>
             React.cloneElement(child, { pose: open }));
  return (
    <StyledSection id={itemId}>
      {childrenProps}
    </StyledSection>
  );
};

export default Section;
