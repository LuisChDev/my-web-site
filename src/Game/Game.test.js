import React from 'react';
import {shallow} from 'enzyme';
import 'jest-matcher-one-of';

import Game from './Game.js';
import {StyledRow, StyledCell} from './style.js';
import BrickWall from './Sprite/BrickWall/BrickWall.js';
import Player from './Sprite/Player/Player.js';
import Hammer from './Sprite/Hammer/Hammer.js';

import {objectsObj} from './initGrid.js';

/* The Game class is logic central. Here, we'll have the following:
 * + the enemies, rendered from state (they have their own class)
 * + the grid, with it's own state
 * First, we'll attempt something a la Bomber-man. our functions will be:
 * + main loop that refreshes screen 12 times a second
 * every time an object is moving, it checks the tile it is currently on.
 * if it isn't listed on it, it signs up.
 */
describe("Game component", () => {
  let output;
  beforeEach(() => {
    output = shallow(<Game/>);
  });

  it("renders a grid of a valid size", () => {
    expect(output.find(StyledRow).length).toBeOneOf([10, 8, 6]);
    expect(output.find(StyledCell).length).toBeOneOf([250, 160, 90]);
  });

  it("renders the playable character", () => {
    expect(output.find(Player).length).toEqual(1);
  });

  it("renders the attack hammer", () => {
    expect(output.find(Hammer).length).toEqual(1);
  });

  it("renders the brick walls", () => {
    const brickWalls = objectsObj.map(x => x.filter(x => x.name==='none'));
    expect(output.find(BrickWall).length).toEqual(brickWalls.length);
  });

  it("can move the player around", () => {
    let lastPos = [...output.state().playPos];
    output.instance().movePlayerY(true);
    expect(output.state().playPos).toEqual([lastPos[0] + 1, lastPos[1]]);

    lastPos = [...output.state().playPos];
    output.instance().movePlayerX(true);
    expect(output.state().playPos).toEqual([lastPos[0], lastPos[1] + 1]);
  });

  it("can change the direction the player is facing", () => {
    output.instance().movePlayerX(true);
    expect(output.state().playerFace).toEqual("right");
  });

});
