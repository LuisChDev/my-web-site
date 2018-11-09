import styled, {css} from 'styled-components';

/**
 * styled li for the navbar.
 */
const styledNavbarItem = styled.li`
  font-weight: bold;
  float: left;
  ${props =>
    props.isActiveKey && css`text-decoration: underline-red;`}
`;

/**
 * the styled link
 */
const styledNavbarLink = styled.a`
  display: block;
  padding: 8px;
  background-color: #dddddd;
  :hover {
    background-color: #111;
  }
`;


export {styledNavbarItem, styledNavbarLink};
