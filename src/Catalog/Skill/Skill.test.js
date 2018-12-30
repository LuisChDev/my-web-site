import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

import Skill from './Skill.js';
import Picture from './Picture/Picture.js';
/**
 * Skill is an entirely functional component
 */

describe("Skill component", () => {
  let output;
  beforeEach(() => {
    output = shallow(<Skill
                       name="testName"
                       description="this is a description"
                       pose="testPose"
                       logo="testLogo"/>);
  });
  it("renders a Picture object", () => {
    expect(output.find(Picture).length).toEqual(1);
  });

  it("renders a subtitle and text", () => {
    expect(output.find("h2")).toBeTruthy();
    expect(output.find("p")).toBeTruthy();
  });

  it("renders correctly", () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
