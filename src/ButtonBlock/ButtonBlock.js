import React from 'react';
import {StyledBlock, StyledImage, StyledLink} from './style.js';

const ButtonBlock = ({buttons, open}) => {
  return(
    <StyledBlock pose={open?"open":"closed"}>
      {buttons
       .map((x, i) =>
            <StyledLink href={x.link} key={i}>
              <StyledImage src={x.image} alt={x.name}/>
            </StyledLink>)}
    </StyledBlock>
  );
};

export default ButtonBlock;
