import React, {Component} from 'react';
import {StyledCatalog, StyledButton} from './style.js';
import Skill from './Skill/Skill.js';

/**
 * This component holds the technology skills I possess
 */
class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 0,
      pose: "open",
    };
    this.handleBack = this.handleClick.bind(this, true);
    this.handleForward = this.handleClick.bind(this, false);
  }

  // div that expands on scroll to occupy half the screen, spreading from the
  // top.
  //   div inside that occupies the upper half. Fades together wit its children
  //   into existence.
  //     divs to the left and right. they fill the entire height, but only a
  //     fraction of the width. Inside, a button with an arrow. on click:
  //     change state on the container (first element).
  //     middle div which changes in response to the state in first element.
  //       3D figure floating around in the inside. on click: bounce around.
  //   div which holds the description
  //     div with the title
  //     div with the description body

  render () {
    const {skills} = this.props;
    const {activeKey, pose} = this.state;
    // const curSkill = skills.find(x => x.name === this.state.activeKey);
    return (
      <StyledCatalog>
              <Skill
                name={skills[activeKey].name}
                description={skills[activeKey].description}
                logo={skills[activeKey].logo}
                pose={pose}
              />
        <div>
          <StyledButton onClick={this.handleBack}>
            Previous
          </StyledButton>
          <StyledButton onClick={this.handleForward}>
            Next
          </StyledButton>
        </div>
      </StyledCatalog>
    );
  }

  handleClick(forward) {
    let {skills} = this.props;
    let {activeKey} = this.state;
    let curName = skills[activeKey].name;

    // proper modulus funcion since javascript's sucks ass
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
      pose: "closed",
    });
    setTimeout(() => {
      this.setState({
        activeKey: properMod(skills.length, activeKey + (forward? 1:-1)),
        pose: "open",
      });
    }, 1000);
  }
}

export default Catalog;
