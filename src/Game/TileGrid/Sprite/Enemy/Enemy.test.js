/**
 * here I will write tests to make sure the algorithms of route detection
 * are working properly.
 */

import {Enemy} from './Enemy.js';
import {shallow} from 'enzyme';

/**
 * testing the walking algorithm
 */
test('walking with no obstacles until the last tile', () => {
  const enemy = shallow(<Enemy />);
  expect(enemy.calculateWalk()).toBe();
});

// finish later
