import React, {Component} from 'react';
import boxStyles from './style.js';

/**
 * animated boxes that display my abilities.
 *
 */
class Box extends Component {
  // state either on or off
  constructor() {
    super();
    this.state = {
      show: false,
      entered: false,
    };
  }

  // change state
  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }

  // render a box with an animated element inside.
  render() {
    return(
      <div
        onClick={this.handleClick.bind(this)}
        style={boxStyles.boxStyle}>
        <h2 style={boxStyles.titleStyle}>
          {this.props.name}</h2>
        <img src={this.props.image}
          alt={this.props.alt}
          style={boxStyles.boxImageStyle}/>
        <Transition
          inx={this.state.show}
          timeout={duration}>
          {(state) => (
            <div
              style={{
                ...boxStyles.defaultStyle,
                ...boxStyles.transStyles[state]
              }}>
              {this.props.description}
            </div>
          )}
        </Transition>
      </div>
    );
  }
}

Box.defaultProps = {
    'name': 'language',
    'description': 'we\'d like to show you a description here but the site'+
        'won\'t let us.',
    'image': '../media/apple.jpg',
    'alt': 'a picture of an apple'
};
