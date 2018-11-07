/** @jsx React.DOM */
import React, {Component} from 'react';
import posed from 'react-posed';

// enemy logic.

class Koopa extends Component {
  constructor() {
    super();
    this.state = {
      movement: 'still',
      inverted: false,
      spritepath: './media/incognito.png',
    };
  }

  // function that changes the sprite

  render() {
    return (
      // here goes the posed div with the sprite inside
      null
    );
  }
}

// approximate the speed of the mouse at the moment of dropping the object
// 

// keep track of the mouse speed as it moves through the screen. Use the
// onDrag event. Every time it fires, get previous position (stored in some
// state, presumably) and calculate new speed with current position.
function finalPos(prevX, prevY, curX, curY, pTime, iniY, iniX) {
  const cTime = Date.now();
  const xSpeed = (curX - prevX)/(cTime - pTime);
  const ySpeed = (curY - prevY)/(cTime - pTime);
  const fallT = (ySpeed + Math.sqrt((ySpeed)^2 - 2(9,81)(iniY)))/(9,81)
}

// posed wrapper that'll handle the movements
const Enemy = posed.div({
  walkingto: {
    x: ({goal}) => goal,
    transtion: {
      duration: ({goal}) => (10 * goal),
      ease: 'linear',
    },
  },
  // this pose relies on the calculated final position of the enemy after being
  // dropped.
  fallingto: {
    
  }
})

// this is how the component would be rendered.
export default ({i, movingto}) =>
  <Enemy pose={'walkingto'} goal={movingto}/>
