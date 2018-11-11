import React from 'react';
import StyledSection from './style.js';

/**
 * Each section of the page. Static background.
 *
 */
const Section = (props) => {
  return (
    <StyledSection id={props.itemId}>
      {props.children}
    </StyledSection>
  );
};

export default Section;
