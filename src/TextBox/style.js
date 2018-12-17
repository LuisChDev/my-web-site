import styled, {css} from 'styled-components';

/**
 * styled box.
 * there are two different ways this text box can be used:
 * - as a large pane to the side of the viewport
 * - as a small box of text, placed somewhere on the window
 */
const StyledTextBox = styled.div`
  text-align: justify;
  text-justify: inter-word;
  background: rgba(0,0,0,0.5);
  color: white;
  padding: 10px;
  font-size: large;
  font-family: Verdana, Sans-serif;
  float: right;
  width: 45vw;
  height: 80vh;
  overflow: hidden;
  ${/*navbar offset*/''}
  margin: 50px 20px 20px 20px;
`;

export default StyledTextBox;
