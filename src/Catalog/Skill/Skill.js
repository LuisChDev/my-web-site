import React from 'react';
import StyledSkill from './style.js';
import Picture from './Picture/Picture.js';

/**
 * Each individual skill.
 */
const Skill = (props) => {
  return(
    <StyledSkill pose={props.pose}>
        <Picture logo={props.logo}/>
        <div className="description">
          <h2>{props.name}</h2>
          <p>{props.description}</p>
        </div>
    </StyledSkill>
  );
};

export default Skill;
