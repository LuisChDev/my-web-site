import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

import Catalog from './Catalog.js';

describe('Catalog', () => {
  it("renders correctly", () => {
    const output = shallow(
        <Catalog skills={[
          {name: 'test1',
           description: 'lorem ipsum dolor sit amet',
           logo: 'logo1'},
          {name: 'test2',
           description: 'consectetur adipiscing elit',
           logo: 'logo2'}
        ]}/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
