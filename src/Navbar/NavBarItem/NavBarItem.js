import React, {Component} from 'react';
import {styleNavBarItem, NavbarLinkStyle} from './style.js';
import {styledNavbarItem, styledNavbarLink} from './style.js';
import styled from 'style-components';

/**
 * Each individual item on the navbar.
 *
 */
const NavbarItem = (props) => {
  return (
    <li style={styleNavBarItem(props.isActiveKey)}>
      <a href={props.url} style={NavbarLinkStyle}>{props.text}</a>
    </li>
  );
};

/**
 * styled everything
 */
const StyledNavbarItem = (props) =>
      <styledNavbarItem isActiveKey={props.isActiveKey}>
        <styledNavbarLink href={props.url}>
          {props.text}
        </styledNavbarLink>
      </styledNavbarItem>;

export default NavbarItem;
