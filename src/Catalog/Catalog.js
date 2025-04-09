import React, {Component} from 'react';
import {StyledCatalog, StyledButton, StyledBts} from './style.js';
import Skill from './Skill/Skill.js';

/**
 * This component holds the technology skills I possess
 */
class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 0,
      pose: "grown",
      turns: 0,
    };
    this.handleBack = this.handleClick.bind(this, false);
    this.handleForward = this.handleClick.bind(this, true);
  }

  render () {
    const {skills, buttons} = this.props;
    const {activeKey, pose, turns} = this.state;

    return (
      <StyledCatalog>
              <Skill
                name={skills[activeKey].name}
                description={skills[activeKey].description}
                logo={skills[activeKey].logo}
                pose={pose}
                turns={turns}
              />

        <StyledBts>
          <StyledButton onClick={this.handleBack}>
            {buttons.back}
          </StyledButton>
          <StyledButton onClick={this.handleForward}>
            {buttons.forward}
          </StyledButton>
        </StyledBts>
      </StyledCatalog>
    );
  }

  handleClick(forward) {
    let {skills} = this.props;
    let {activeKey, turns} = this.state;

    // proper modulus funcion
    function properMod(modulus, numb) {
      if (numb >= 0) {
        return numb%modulus;
      } else {
        while(numb < 0) {
          numb += modulus;
        } return numb;
      }
    }

    this.setState({
      pose: "shrunk",
    });

    setTimeout(() => {
      this.setState({
        turns: turns + (forward? 1:-1),
        activeKey: properMod(skills.length, activeKey + (forward? 1:-1)),
        pose: "grown",
      });
    }, 300);
  }
}

export default Catalog;
