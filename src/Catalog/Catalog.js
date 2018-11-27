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
    this.handleBack = this.handleClick.bind(this, false);
    this.handleForward = this.handleClick.bind(this, true);
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
        <StyledButton onClick={this.handleBack}>
          Previous
        </StyledButton>
        <StyledButton onClick={this.handleForward}>
          Next
        </StyledButton>
      </StyledCatalog>
    );
  }

  handleClick(forward) {
    let {skills} = this.props;
    let {activeKey} = this.state;
    const {curName} = skills[activeKey].name;
    this.setState({
      pose: "closed",
    });
    setTimeout(() => {
      this.setState({
        activeKey: skills[(forward? skills
                   .findIndex((x) => x.name === curName) + 1
                   :skills
                           .findIndex((x) => x.name === curName) - 1)],
        pose: "open",
      });
    }, 300);
  }
}

export default Catalog;