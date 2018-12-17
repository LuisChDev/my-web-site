import React from 'react';
import StyledSkill from './style.js';
import Picture from './Picture/Picture.js';

/**
 * Each individual skill.
 */
const Skill = ({pose, logo, name, description}) => {
  return(
    <StyledSkill>
      <Picture logo={logo} pose={pose}/>
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
    </StyledSkill>
  );
};

export default Skill;
