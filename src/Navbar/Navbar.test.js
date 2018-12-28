import React from 'react';
import Navbar from './Navbar.js';
import StyledNavbar from './style.js';
import NavbarItem from './NavbarItem/NavbarItem.js';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

/**
 * Our Navbar should do these things:
 * - given a mock prop of items, render the correct JSX
 */
describe("navbar", () => {
  let output;
  beforeEach(() => {
    output = shallow(<Navbar items={[]} refers={{}}/>);
  });

  it("renders correctly", () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });

})
