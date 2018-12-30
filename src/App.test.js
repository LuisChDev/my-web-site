import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Section from './Section/Section.js';
import {shallow} from 'enzyme';

describe( "App", () => {
  let output;
  beforeEach(() => output = shallow(<App/>));

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders four sections', () => {
    expect(output.find(Section)).toHaveLength(4);
  });
});
