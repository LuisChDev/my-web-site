import React, {Component} from 'react';
import {StyledNavbarItem, StyledNavbarLink} from './style.js';

/**
 * styled everything
 */
const NavbarItem = (props) =>
      <StyledNavbarItem isactivekey={props.isactivekey}>
        <StyledNavbarLink href={props.url}>
          {props.text}
        </StyledNavbarLink>
      </StyledNavbarItem>;

export default NavbarItem;
