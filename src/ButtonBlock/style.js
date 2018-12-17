import React from 'react';
import styled from 'styled-components';

const StyledBlock = styled.div`
  display: grid;
  grid-template-columns: 100px 100px;
  grid-gap: 20px;
  padding: 20px;
  margin-left: 30px;
  background: rgba(255,255,255,0.5);
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
