import React, {Component} from 'react';
import Sprite from '../Sprite.js';
import StyledGoomba from './style.js';


/**
 * subclass of enemy, which subclasses Sprite.
 */
class Goomba extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAlive: true,
    };
  }

  render() {
    return(
      //the sprite itself
      <Sprite
        src={src}
        states={4}
        tile={{width: 20, height: 24}}
        scale={1.5}
        framesPerStep={20}
        render={({args, sons}) =>
                <StyledGoomba {...args}>
                  {sons}
                </StyledGoomba>}
      />
    );
  }
}

/*
 * The Sprite class holds the animation logic.
 * The outputted class receives the source, as a single file, where css
 * transforms move it to show the appropriate sprite. They should be
 * arranged horizontally in sequence.
 * Each of the subclasses defines it's own animation sequences.
 * this means each of them must define their own poses, then import and call
 * the styled option for the sprite animation.
 */
