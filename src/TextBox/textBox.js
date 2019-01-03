import React from 'react';
import StyledTextBox from './style.js';

/**
 * TextBoxes get so big because they have no natural predators
 */
const TextBox = ({open, children, pose}) => {
  return (
    <StyledTextBox pose={pose?"open":"closed"}>
      {children}
    </StyledTextBox>
  );
};


export default TextBox;
