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
  background: rgba(0,0,0,0.3);
  color: white;
  padding: 10px;
  font-size: large;
  font-family: Verdana, Sans-serif;
  float: right;
  width: ${({pane}) => pane?'45vw':'500px'};
  height: ${({pane}) => pane?'80vh':'auto'};
  overflow: ${({pane}) => pane?'hidden':'auto'};
  ${/*navbar offset*/''}
  margin: 50px 20px 20px 20px;
`;

export default StyledTextBox;
