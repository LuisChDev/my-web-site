/**
 * @fileOverview Main app file.
 * @name App.js
 * @author Luis Chavarriaga
 * @license MIT
 */
import React, { Component } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

// data.
import {skillsDB} from './database.js';

// components.
import Section from './Section/Section.js';
import Navbar from './Navbar/Navbar.js';
import VideoPlayer, {VideoBkg} from './VideoPlayer/videoPlayer.js';
import TextBox from './TextBox/textBox.js';
import Game from './Game/Game.js';
import Catalog from './Catalog/Catalog.js';

// styles.
import {sections} from './style.js';

//initialize the polyfill.
smoothscroll.polyfill();

/**
 * Main app element with all the components in place.
 */
class App extends Component {
  render() {
    return (
      <div>
        <Navbar
          items={[...sections]}/>
        {/*welcome screen*/}
        <Section itemId="home">
          <VideoPlayer/>
          <VideoBkg/>
          {/*<VideoPlayer/>*/}
          <TextBox float="right"
            margin="12vh 5vw"
            maxWidth="25vw">
          </TextBox>
        </Section>
        {/* skills section */}
        <Section itemId="skills">
          {/*<Game/>*/}
        </Section>
        {/*projects section*/}
        <Section itemId="projects">
          <Catalog
            skills={skillsDB}
          />
        </Section>
        {/*contact me section*/}
        <Section itemId="contact">
        </Section>
      </div>
    );
  }
}

export default App;
