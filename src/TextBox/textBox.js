import React from 'react';
import StyledTextBox from './style.js';

/**
 * TextBoxes get so big because they have no natural predators
 */
const TextBox = (props) => {
  return (
    <StyledTextBox pane={props.pane}>
      {props.children}
    </StyledTextBox>
  );
};


export default TextBox;
