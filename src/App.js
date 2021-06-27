/**
 * @fileOverview Main app file.
 * @name App.js
 * @author Luis Chavarriaga
 * @license MIT
 */
import React, { Component } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

// data.
import {DB} from './database.js';

// components.
import Section from './Section/Section.js';
import Navbar from './Navbar/Navbar.js';
import VideoPlayer from './VideoPlayer/videoPlayer.js';
import TextBox from './TextBox/textBox.js';
import Game from './Game/Game.js';
import Catalog from './Catalog/Catalog.js';
import ButtonBlock from './ButtonBlock/ButtonBlock.js';
import Warning from './Warning/Warning.js';

// Routing.
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

// styles.
import {sections, socialMediaButtons, langs} from './style.js';

//initialize the polyfill.
smoothscroll.polyfill();

// this little comment will appear on devel but not on master

/**
 * Main app element with all the components in place.
 */
class App extends Component {
  constructor() {
    super();
    this.handleLang = this.handleLang.bind(this);
    this.state = {
      curSec: "home",
      language: "english",
    };
  }

  render() {
    let {curSec, language} = this.state;
    return (
      <Router>
        <Navbar
          items={[...sections]} langs={langs} text={DB[language].navbar}
          handleLang={(lang) => this.handleLang(lang)}/>

        <Section itemId="home" open={curSec==="home"}>
          {/*welcome screen*/}
          <VideoPlayer bkg={false}/>
          <VideoPlayer bkg/>
          <TextBox>
            <h2>{DB[language].home.title}</h2>
            <p dangerouslySetInnerHTML={{__html: DB[language].home.body}}/>
          </TextBox>
        </Section>

        <Section itemId="game" adjusted>
          {/* game section */}
          <Warning>
            <h1>
              {DB[language].skills.warning}
            </h1>
          </Warning>
          <Game instructions={DB[language].skills.title}
                mobile={DB[language].skills.mobile}/>
        </Section>

        <Section itemId="skills" open={curSec==="skills"}>
          {/*skills section*/}
          <TextBox>
            <h2>{DB[language].projects.title}</h2>
            <p dangerouslySetInnerHTML={{__html: DB[language].projects.body}}/>
          </TextBox>
          <Catalog
            skills={DB[language].skillList}
            buttons={DB[language].projects.buttons}
          />
        </Section>

        {/* <Section> */}
        {/*   {/\* projects section *\/} */}
        {/* </Section> */}

        <Section itemId="contact" open={curSec==="contact"}>
          {/*contact me section*/}
          <TextBox>
            <h2>{DB[language].contact.title}</h2>
            <p dangerouslySetInnerHTML={{__html: DB[language].contact.body}}/>
          </TextBox>
          <ButtonBlock buttons={socialMediaButtons} open={curSec==="contact"}/>
          <a href="/secret" style={{marginLeft: "30px"}}>!</a>

        </Section>
      </Router>
    );
  }

  handleLang(lang) {
    this.setState({
      language: lang,
    });
  }

  componentDidMount() {
    const updateState = (entries) => {
      entries.forEach(entry => {
        this.setState({
          curSec: entry.target.id,
        });
      });
    };

    const observer = new IntersectionObserver(updateState.bind(this), {
      root: null,
      threshold: 0.7,
    });

    sections.forEach(x => {
      observer.observe(document.querySelector(`#${x.id}`));
    });

    // workaround for the annoying glitch at the beginning
    setTimeout(() => {
      this.setState({
        curSec: "home",
      });
    }, 300);
  }

}

/**
 * wrapper that chooses the right app to display
 */
const AppWrap = () => (
  <Router>
    <Switch>
      <Route path="/secret">
        <Router>
          <h1>Shh!</h1>
          <p>
            Esta página secreta está aquí para probar React Router.
          </p>
          <a href="/">Regresar</a>
        </Router>
      </Route>
      <Route path="/">
        <App/>
      </Route>
    </Switch>
  </Router>
);

export default AppWrap;
