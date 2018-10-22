import React, { Component } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
//import logo from './logo.svg';

// javascript modules
import {Navibar, VideoPlayer} from './utils.js';
import {Transition} from 'react-transition-group';
import {Grid, Col, Row} from 'react-bootstrap';
import dictlist from './database.js';

// CSS
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

/* import box from './css/box.module.css';
 * import descrp from './css/descrp.module.css'; */

//media content
import mapBkg from '../src/media/map-backgrnd.jpg';
import africaMapBkg from '../src/media/africa_map_backgrnd.jpg';
import vintageMyspaceBkg from '../src/media/vintage-myspace-backgrnds.jpg';
import vidPoster from '../src/media/vidCover.png';

import stockFtg0 from '../src/media/stockDef.webm';

//initialize the polyfill.
smoothscroll.polyfill();

// constants
const duration = 300;

// functions
// function that changes place of two elements in a list.
// takes a list and the indexes of the two elements
// returns part of list + second + part of list + first + part of list
function listSwap(list, first, second) {
  return list.slice(0, first) + list[second] + list.slice(first + 1, second)
    + list[first] + list.slice(second + 1)
}

// box components for the skills section.
//UPD8: will keep the inline styles seeing as there is a way to make them work
// with the transition group.
class Box extends Component {
  // state either on or off
  constructor() {
    super();
    this.state = {
      show: false,
      entered: false,
    };
  }

  // change state
  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }


  // render a box with an animated element inside.
  render() {
    // image styling
    const boxImageStyle = {
      maxWidth: '50%',
      maxHeight: '90%',
      borderRadius: '50%',
      margin: '0 auto',
      display: 'block'
    }

    // style for the boxes
    const boxStyle = {
      maxWidth: '20vw',
      maxHeight: 'auto',
      background: 'rgba(255,255,255,0.5)'
    }

    // styling of the title
    const titleStyle = {
      display: 'block',
      margin: '0 auto'
    }

    // basic style for the description
    const defaultStyle = {
      transition: `${duration}ms ease-in-out`,
      height: '0',
      overflow: 'hidden'
    }

    // transition styles
    const transStyles = {
      entering: {
        height: '0',
        overflow: 'hidden',
        opacity: '0',
      },
      entered: {
        height: 'auto',
        opacity: '1'
      },
      exiting: {
        height: 'auto',
        opacity:'1'
      },
      exited: {
        height: '0',
        opacity: '0',
        overflow: 'hidden'
      }
    }

    return(
      <div
        onClick={this.handleClick.bind(this)}
        style={boxStyle}>
        <h2 style={titleStyle}>
          {this.props.name}</h2>
        <img src={this.props.image}
          alt={this.props.alt}
          style={boxImageStyle}/>
        <Transition
          in={this.state.show}
          timeout={duration}>
          {(state) => (
            <div
              style={{
                ...defaultStyle,
                ...transStyles[state]
              }}>
              {this.props.description}
            </div>
          )}
        </Transition>
      </div>
    )
  }
}
//... works well enough for now
// basically the way it works is like this:
//  +take a state variable to be boolean and represent whether the component
//   is either on or off (in this case, we have show)
//  +take a second variable to represent whether the component is either
//   transitioning or stable (in this case, we have entered)
//  +now place a function somewhere such that on some event, the on/off variable
//   changes.
//  +with every change, the transition is rerendered with the new prop.
//  +on rerendering, the transition will evaluate the state of both variables
//   and call its function with the appropiate prop (enter, entering, exit, exited)
//  +depending on this, chagne the state of the thing that transitions inside.

Box.defaultProps = {
  'name': 'language',
  'description': 'we\'d like to show you a description here but the site'+
    'won\'t let us.',
  'image': 'src/media/apple.jpg',
  'alt': 'a picture of an apple'
}

//these text boxes are generic i guess
const TextBox = (props) => {
  const textBoxStyle = {
	  background: "rgba(255,255,255,0.5)",
	  padding: "15px",
	  margin: props.margin,
    fontSize: "large",
    float: props.float,
    maxWidth: props.maxWidth
  }

  return (
    <div style={textBoxStyle}>
      <p>{props.children}</p>
    </div>
  )
}

TextBox.defaultProps = {
  float: 'none',
  children: 'nam a sapien. vestibulum convallis, lorem a tempus semper, dui dui euismod elit, vitae placerat urna tortor vitae lacus.',
  margin: '10px',
  maxWidth: '10vw'
}

// animated grid of elements
class GameGrid extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        ...dictlist,
      ]
    };
    this.shuffle = this.shuffle.bind(this);
  }

  // looks for the item in the list with matching name, then changes places
  // with a random other element on the list.
  shuffle(name) {
    const currentList = this.state.items;
    console.log(currentList)
    /* this.setState({
     *   items: listSwap(
     *     currentList,
     *     currentList.indexOf(currentList.find((elem) => elem.name === name)),
     *     Math.floor(Math.random() * currentList.length)
     *   )
     * }) */
  }

  // add a new item
  addSkill() {
  }

  render() {
    return (
      <Grid>
      {[...Array(Math.ceil(this.state.items.length/3))].map((x,i) =>
        <Row>
          {[...Array(3)].map((y,j) => this.state.items[i*3 + j])
            .map((z,k) =>
              <Col xs={12} md={3}>
                {z?
                 <Box
                   key={i*3 + k}
                   name={z['name']}
                   description={z['description']}
                   image={z['image']}
                   alt={z['alt']}
                   onClick={this.shuffle.bind(this, z['name'])}/>
                 :
                 <Box/>
                }
              </Col>
            )}
        </Row>
      )}
      </Grid>
    )
  }
}

/* Each section of the page. */
class Section extends Component {

  render() {
    var SectionStyle = {
      backgroundImage: "url(" + this.props.bkgPic + ")",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      width: "auto",
      minHeight: "100vh",
    }
    return (
      <div style={SectionStyle}
        id={this.props.itemId}>
        {this.props.children}
      </div>
    );
  }
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
        <Section bkgPic={mapBkg} itemId="skills">
          <GameGrid/>
        </Section>
        {/*projects section*/}
        <Section bkgPic={africaMapBkg} itemId="projects">

        </Section>
        {/*contact me section*/}
        <Section bkgPic={vintageMyspaceBkg} itemId="contact">

        </Section>
      </div>
    );
  }
}

/* CODE CEMETERY BEGINS HERE*/
/* <Grid>
 * {[...Array(Math.ceil(dictlist.length/3))].map((x, i) =>
 *   <Row>
 *     {[...Array(3)].map((y, j) => (dictlist[3*i + j]))
 *       .map((z, k) =>
 *         <Col xs={12} md={3} lg={3}>
 *           {z?
 *            <Box key={"" + i + k}
 *              name={z['name']}
 *              description={z['description']}
 *              image={z['image']}
 *              alt={z['alt']}/>
 *            :""
 *           }
 *         </Col>
 *       )}
 *   </Row>
 * )}
 * </Grid> */

/* class App extends Component {
 *   render() {
 *     return (
 *       <div className="App">
 *         <header className="App-header">
 *           <img src={logo} className="App-logo" alt="logo" />
 *           <p>
 *             Edit <code>src/App.js</code> and save to reload.
 *           </p>
 *           <a
 *             className="App-link"
 *             href="https://reactjs.org"
 *             target="_blank"
 *             rel="noopener noreferrer"
 *           >
 *             Learn React
 *           </a>
 *           <Box
 *             name="javascript"
 *             description="frontent sccripting language"
 *             src={applePic}
 *           alt="javascript logo"/>
 *         </header>
 *       </div>
 *     );
 *   }
 * }
 *  */
export default App;
