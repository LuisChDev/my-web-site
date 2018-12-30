import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

import Picture from './Picture.js';

describe("Picture component", () => {
  let output;
  beforeEach(() => {
    output = shallow(
      <Picture
        logo="testLogo"
        pose="testPose"/>
    );
  });

  it("renders correctly", () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
