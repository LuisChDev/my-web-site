/**
 * @fileOverview Main app file.
 * @name App.js
 * @author Luis Chavarriaga
 * @license MIT
 */
import React, { Component } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import styled from 'styled-components';

// javascript modules
import dictlist from './database.js';

// components.
import Section from './Section/Section.js';
import Navbar from './Navbar/Navbar.js';
import VideoPlayer from './VideoPlayer/videoPlayer.js';
import TextBox from './TextBox/textBox.js';
import Game from './Game/Game.js';

// styles.
import {sections} from './style.js';
import './try.css';

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
          {/*<VideoPlayer/>*/}
          <TextBox float="right"
            margin="12vh 5vw"
            maxWidth="25vw">
          </TextBox>
        </Section>
        {/* skills section */}
        <Section itemId="skills">
          <Game/>
          {/*<GameGrid/>*/}
          hello
        </Section>
        {/*projects section*/}
        <Section itemId="projects">
          it's me
        </Section>
        {/*contact me section*/}
        <Section itemId="contact">
          i know its been a while
        </Section>
      </div>
    );
  }
}

export default App;
