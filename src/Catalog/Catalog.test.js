import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import Skill from './Skill/Skill.js';
import {StyledButton} from './style.js';

import Catalog from './Catalog.js';

describe('Catalog', () => {
  let output;
  beforeEach(() => {
    output = shallow(
      <Catalog skills={[
        {name: 'test1',
         description: 'lorem ipsum dolor sit amet',
         logo: 'logo1'},
        {name: 'test2',
         description: 'consectetur adipiscing elit',
         logo: 'logo2'}
      ]}/>
    );
  });

  it('renders a Skill', () => {
    expect(output.find(Skill).length).toEqual(1);
  });

  it('renders two buttons', () => {
    expect(output.find(StyledButton).length).toEqual(2);
  });

  it('renders correctly', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('changes state correctly', () => {
    expect.assertions(1);
    const compState = () => {
      return new Promise(resolve => {
        output.instance().handleForward();
        setTimeout(() => {
          resolve(output.state().pose);
        }, 310);
      });
    };
    return compState().then(data => {
      expect(data).toBe('open');
    });
  });

});


// // function that returns a promise. We need the state of our component as the
// // resolve
// const output = shallow(<Catalog/>);
// const compState = () => {
//   return new Promise(resolve => {
//     output.instance.handleForward();
//     setTimeout(() => {
//       resolve(output.state().pose);
//     }, 3000);
//   });
// };

// // the function returns the wanted value. Now, the test must run in an async way.
// // first way
// it('changes state correctly', () => {
//   expect.assertions(1);
//   return compState().then(data => {
//     expect(data).toBe('open');
//   });
// });

// //second way
// it('changes state correctly', async () => {
//   expect.assertions(1);
//   const data = await compState();
//   expect(data).toBe('open');
// });


