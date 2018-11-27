import styled, {css} from 'styled-components';

/**
 * styled li for the navbar.
 */
const StyledNavbarItem = styled.li`
  font-weight: bold;
  float: left;
  ${props =>
    props.isactivekey && css`text-decoration: underline-red;`}
`;

/**
 * the styled link
 */
const StyledNavbarLink = styled.a`
  display: block;
  padding: 8px;
  background-color: #dddddd;
  font-family: Verdana, Sans-serif;
  :hover {
    background-color: #111;
  }
`;

export {StyledNavbarItem, StyledNavbarLink};
