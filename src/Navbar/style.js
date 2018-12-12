import styled from 'styled-components';

/**
 * a styled ul ready to serve.
 */
const StyledNavbar = styled.ul`
  list-style-type: none;
  margin: 0;
  overflow: hidden;
  background-color: rgba(192, 192, 192, 0.8);
  position: fixed;
  min-width: 100%;
  z-index: 3;
  border-style: groove;
  border-color: silver;
`;

export default StyledNavbar;
