import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const PosedBlock = posed.div({
  open: {
    scale: 1.0,
  },
  closed: {
    scale: 0.0,
    transition: {
      // duration: 3000,
      type: "spring",
      stiffness: 300,
      damping: 10,
    }
  },
});

const StyledBlock = styled(PosedBlock)`
  display: grid;
  grid-template-columns: 100px 100px;
  grid-gap: 20px;
  padding: 20vh 20px;
  margin-left: 30px;
  max-width: 250px;
`;

const StyledLink = styled.a`
  max-width: 100px;
`;

const StyledImage = styled.img`
  display: block;
  max-height: 100px;
  max-width: 100px;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
    transform: scale(1.2);
  }
`;

export {StyledBlock, StyledImage, StyledLink};
