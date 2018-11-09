/**
 * @fileOverview Main app file.
 * @name App.js
 * @author Luis Chavarriaga
 * @license MIT
 */
import React, { Component } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

// javascript modules
import dictlist from './database.js';

// components.
import Section from './section/Section.js';
import Navbar from './Navbar/Navbar.js';
import VideoPlayer from './VideoPlayer/videoPlayer.js';
import TextBox from './textBox/textBox.js';
import GameGrid from './gameGrid/gameGrid.js';

//initialize the polyfill.
smoothscroll.polyfill();

/**
 * takes a list, the indexes of two elements, and returns the list with
 * said elements changing places.
 * @param {Array} list - the list to be changed.
 * @param {int} first - index of first element.
 * @param {int} second - index of second element.
 * @returns {Array} The list with the swapped elements.
 */
function listSwap(list, first, second) {
  return list.slice(0, first) + list[second] + list.slice(first + 1, second)
    + list[first] + list.slice(second + 1);
}


/* Main app structure with all the elements in place */
class App extends Component {

  render() {
    return (
      <div>
        <Navibar
          sections={["home", "skills", "projects", "contact"]}/>
        {/*welcome screen*/}
        <Section itemId="home">
          <VideoPlayer poster={vidPoster}
            video={stockFtg0}/>
          <TextBox float="right"
            margin="12vh 5vw"
            maxWidth="25vw">
          </TextBox>
        </Section>
        {/* skills section */}
        <Section itemId="skills">
          <GameGrid/>
        </Section>
        {/*projects section*/}
        <Section itemId="projects">

        </Section>
        {/*contact me section*/}
        <Section itemId="contact">

        </Section>
      </div>
    );
  }
}

export default App;
