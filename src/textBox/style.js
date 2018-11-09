import React from 'react';
import styled, {css} from 'styled-components';

/**
 * styled box.
 */
const styledTextBox = styled.div`
  background: rgba(255,255,255,0.5);
  padding: 15px;
  font-size: large;
  ${props =>
    css`margin: ${props.margin}`};
  ${props =>
    css`float: ${props.float}`};
  ${props =>
    css`max-width: ${props.maxWidth}`};
`;

export default styledTextBox;
