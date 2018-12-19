import React, {Component} from 'react';
import {StyledInnerImg} from './style.js';
import PropTypes from 'prop-types';

// in this file I'll define the basic logic of an enemy in the game.
// the specific enemy classes will wrap this with their own.

/**
 * stateful container of the animation logic.
 * @param {string} props.src - source of the sprite
 * @param {object} props.tile - holds the dimensions of the sprite.
 * @param {number} props.scale - size of the component.
 */
class Sprite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 0,
    };
  }

  tick = 0;
  frame: number = 0;

  render() {
    const {src, tile, scale} = this.props;
    const {state} = this.state;
    const {left} = tile.width * scale;

    // we pass the Sprite a render function for the custom component
    return this.props.render({
      args: {width: tile.width, height: tile.height, scale: scale,},
      sons: <StyledInnerImg src={src} left={left}/>,
    });
  }

  componentDidMount() {
    this.animate();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.frame);
  }

  animate = () => {
    const {state} = this.state;
    const {framesPerStep, states} = this.props;

    if(this.tick === framesPerStep) {
      this.tick = 0;
      this.setState({
        state: (state + 1) % states,
      });
    }

    this.tick += 1;
    requestAnimationFrame(this.animate);
  }
}

Sprite.defaultProps = {
  src: PropTypes.string.isRequired,
  tile: PropTypes.object.isRequired,
  scale: PropTypes.number.isRequired,
  framesPerStep: PropTypes.number.isRequired,
  states: PropTypes.number.isRequired,
};


export default Sprite;



// just in case
// <StyledSprite width={tile.width} height={tile.height} scale={scale}>
// <StyledInnerImg src={src} left={left}/>
// </StyledSprite>;
