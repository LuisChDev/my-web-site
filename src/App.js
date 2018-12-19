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
import VideoPlayer from './VideoPlayer/videoPlayer.js';
import TextBox from './TextBox/textBox.js';
import Game from './Game/Game.js';
import Catalog from './Catalog/Catalog.js';
import ButtonBlock from './ButtonBlock/ButtonBlock.js';

// styles.
import {sections, socialMediaButtons} from './style.js';

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

        <Section itemId="home">
          {/*welcome screen*/}
          <VideoPlayer bkg={false}/>
          <VideoPlayer bkg/>
          <TextBox pane>
            <h2>
              Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.
            </h2>
            <p>
              Aliquam erat volutpat. Nunc eleifend leo vitae magna. In id erat non
              orci commodo lobortis. Proin neque massa, cursus ut, gravida ut,
              lobortis eget, lacus. Sed diam. Praesent fermentum tempor tellus.
              Nullam tempus. Mauris ac felis vel velit tristique imperdiet. Donec
              at pede. Etiam vel neque nec dui dignissim bibendum. Vivamus id
              enim. Phasellus neque orci, porta a, aliquet quis, semper a, massa.
              Phasellus purus. Pellentesque tristique imperdiet tortor. Nam
              euismod tellus id erat.
            </p>
          </TextBox>
        </Section>

        <Section itemId="skills">
          {/* skills section */}
          <Game/>
        </Section>

        <Section itemId="projects">
          {/*projects section*/}
          <TextBox pane>
            <h2>Nam vestibulum accumsan nisl.</h2>
            <p>
            Nullam eu ante vel est convallis dignissim. Fusce suscipit, wisi
            nec facilisis facilisis, est dui fermentum leo, quis tempor ligula
            erat quis odio. Nunc porta vulputate tellus. Nunc rutrum turpis sed
            pede. Sed bibendum. Aliquam posuere. Nunc aliquet, augue nec
            adipiscing interdum, lacus tellus malesuada massa, quis varius mi
            purus non odio. Pellentesque condimentum, magna ut suscipit
            hendrerit, ipsum augue ornare nulla, non luctus diam neque sit amet
            urna. Curabitur vulputate vestibulum lorem. Fusce sagittis, libero
            non molestie mollis, magna orci ultrices dolor, at vulputate neque
            nulla lacinia eros. Sed id ligula quis est convallis tempor.
            Curabitur lacinia pulvinar nibh. Nam a sapien.
            </p>
          </TextBox>
          <Catalog
            skills={skillsDB}
          />
        </Section>

        <Section itemId="contact">
          {/*contact me section*/}
          <TextBox>
            <h2>Donec pretium posuere tellus.  </h2>
            <p>
            Aliquam erat volutpat. Nunc eleifend leo vitae magna. In id erat
            non orci commodo lobortis. Proin neque massa, cursus ut, gravida ut,
            lobortis eget, lacus. Sed diam. Praesent fermentum tempor tellus.
            Nullam tempus. Mauris ac felis vel velit tristique imperdiet. Donec
            at pede. Etiam vel neque nec dui dignissim bibendum. Vivamus id
            enim. Phasellus neque orci, porta a, aliquet quis, semper a, massa.
            Phasellus purus. Pellentesque tristique imperdiet tortor. Nam
            euismod tellus id erat.
            </p>
          </TextBox>
          <ButtonBlock buttons={socialMediaButtons}/>
        </Section>
      </div>
    );
  }

}

export default App;
