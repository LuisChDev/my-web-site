import React from 'react';
import styledSection from 'style.js';

/**
 * Each section of the page. Static background.
 *
 */
const Section = (props) => {
  return (
    <styledSection id={props.itemId}>
      {props.children}
    </styledSection>
  );
};

export default Section;
