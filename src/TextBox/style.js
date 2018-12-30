import styled, {css} from 'styled-components';
import posed from 'react-pose';

/**
 * styled box.
 * there are two different ways this text box can be used:
 * - as a large pane to the side of the viewport
 * - as a small box of text, placed somewhere on the window
 */
const PosedTextBox = posed.div({
  closed: {
    height: "0vh",
  },
  open: {
    height: "80vh",
    transition: {
      duration: 3000,
    }
  },
});

const StyledTextBox = styled(PosedTextBox)`
  text-align: justify;
  text-justify: inter-word;
  background: rgba(0,0,0,0.5);
  color: white;
  padding: 10px;
  font-size: large;
  font-family: Verdana, Sans-serif;
  float: right;
  width: 45vw;
  overflow: hidden;
  ${/*navbar offset*/''}
  margin: 50px 20px 20px 20px;
`;

export default StyledTextBox;
