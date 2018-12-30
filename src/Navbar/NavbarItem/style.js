import styled, {css} from 'styled-components';

/**
 * styled li for the navbar.
 */
const StyledNavbarItem = styled.div`
  font-weight: bold;
  float: left;
  transition: 0.3s;
  :hover {
    background-color: goldenrod;
  }
  ${({isactivekey}) => isactivekey && css`
    background-color: purple;
  `}
`;

/**
 * the styled link
 */
const StyledNavbarLink = styled.p`
  display: block;
  margin: 8px;
  font-family: Verdana, Sans-serif;
  transition: 0.3s;
  cursor: pointer;
`;

export {StyledNavbarItem, StyledNavbarLink};
