import React from 'react';
import styledTextBox from 'style.js';

//these text boxes are generic i guess
const TextBox = (props) => {
  return (
    <styledTextBox margin={props.margin}
                   float={props.float}
                   maxWidth={props.maxWidth}>
      <p>{props.children}</p>
    </styledTextBox>
  );
};

TextBox.defaultProps = {
    float: 'none',
    children: 'nam a sapien. vestibulum convallis, lorem a tempus semper, dui dui euismod elit, vitae placerat urna tortor vitae lacus.',
    margin: '10px',
    maxWidth: '10vw'
};
