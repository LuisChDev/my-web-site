import React from 'react';
import Navbar from './Navbar.js';
import StyledNavbar from './style.js';
import NavbarItem from './NavbarItem/NavbarItem.js';
import {shallow} from 'enzyme';

/**
 * Our Navbar should do these things:
 * - given a mock prop of items, render the correct JSX
 */
it("renders an empty navbar", () => {
  const output = shallow(<Navbar items={[]}/>);

  // expect the wrapper to have a single StyledNavbar node
  expect(output.find(StyledNavbar)).toBeDefined();
  expect(output.find(StyledNavbar)).toHaveLength(1);
});

it("renders an item correctly", () => {
  const output = shallow(<Navbar items={[
    {text: "test",
     url: "something",
     id: "test"}
  ]}/>);

  // expect to find a rendered NavbarItem
  expect(output.containsMatchingElement(<NavbarItem/>)).toBeTruthy();
});
