/**
 * this file contains the styles used throughout the web page. It's just a
 * javascript file, so everything below is an object.
 * @author Luis Chavarriaga
 * @license MIT
 */

//----//----//

// main backgrounds
import mapBkg from '../src/media/map-backgrnd.jpg';
import africaMapBkg from '../src/media/africa_map_backgrnd.jpg';
import vintageMyspaceBkg from '../src/media/vintage-myspace-backgrnds.jpg';
import vidPoster from '../src/media/vidCover.png';
import vid from './media/stockDef.webm';

// backgrounds for the tiles
import bkFloor from './media/backgrounds/floor.jpg';
import bkWall from './media/backgrounds/wall.png';
import bkBrick from './media/backgrounds/brick.png';

// images for the player sprite
import imRight from './media/sprites/right.png';
import imDown from './media/sprites/down.png';
import imLeft from './media/sprites/left.png';
import imUp from './media/sprites/up.png';

// images for the player sprite
import hammerRight from './media/sprites/hammerRight.png';
import hammerDown from './media/sprites/hammerDown.png';
import hammerLeft from './media/sprites/hammerLeft.png';
import hammerUp from './media/sprites/hammerUp.png';

// images for the skills
import htmlIcon from './media/html5-icon.png';
import cssIcon from './media/css3-icon.jpg';
import gitIcon from './media/git-icon.png';
import javascriptIcon from './media/javascript-icon.png';
import pythonIcon from './media/python-icon.png';
import mysqlIcon from './media/mysql-icon.png';
import postgresqlIcon from './media/postgresql-icon.png';
import reactIcon from './media/react-icon.svg';

// images for the social media buttons
import githubIcon from './media/github-icon.png';
import stackOverflowIcon from './media/stackOverflow-icon.png';
import mailIcon from './media/mail-icon.png';
import twitterIcon from './media/twitter-icon.png';

// flags for the languages
import esFlag from './media/flags/spain.png';
import enFlag from './media/flags/britain.png';

// constants
const duration = 300;

/**
 * This contains the section settings, mainly the backgrounds.
 */
const sectionConf = {
    home: null,
    skills: mapBkg,
    projects: africaMapBkg,
    contact: vintageMyspaceBkg,
};

/**
 * sections for the navbar.
 */
const sections = [
  {
    text: "Home",
    url: "#home",
    id: "home",
  },
  {
    text: "Skills",
    url: "#skills",
    id: "skills",
  },
  {
    text: "Projects",
    url: "#projects",
    id: "projects",
  },
  {
    text: "Contact",
    url: "#contact",
    id: "contact",
  },
];

/**
 * box component configuration (just transition duration for now.)
 */
const boxConf = {
    duration: duration,
};

/**
 * project configuration for the video player.
 */
const videoPlayerConf = {
    poster: vidPoster,
    video: vid,
};

/**
 * tile background images.
 */
const tileGridConf = {
  floor: bkFloor,
  brick: bkBrick,
  wall: bkWall,
};

/**
 * images for the player sprite
 */
const playerSprite = {
  right: imRight,
  down: imDown,
  left: imLeft,
  up: imUp,
};

/**
 * images for the hammer
 */
const hammerSprite = {
  right: hammerRight,
  down: hammerDown,
  left: hammerLeft,
  up: hammerUp,
};

/**
 * array with the images
 */
const socialMediaButtons = [
  {name: "Github",
   image: githubIcon,
   link: "https://github.com/LuisChDev"},
  {name: "Stack Overflow",
   image: stackOverflowIcon,
   link: "https://stackoverflow.com/users/7658923/luis-ch"},
  {name: "Twitter",
   image: twitterIcon,
   link: "https://twitter.com/LuisChDev"},
  {name: "Mail me",
   image: mailIcon,
   link: "mailto:luischdev@gmail.com"},
];

/**
 * background for the skills
 */
const cubeColors = [
  "yellow", "blue", "red", "cyan", "green", "magenta"
];

/**
 * images for the skills
 */
const cubeImages = {
  html: htmlIcon,
  css: cssIcon,
  javascript: javascriptIcon,
  git: gitIcon,
  postgresql: postgresqlIcon,
  mysql: mysqlIcon,
  react: reactIcon,
  python: pythonIcon,
};

/**
 * languages the page will be in
 */
const langs = [
  "spanish",
  "english",
];

/**
 * flags for the language selection
 */
const flags = {
  spanish: esFlag,
  english: enFlag,
};

export {sectionConf, videoPlayerConf, boxConf, tileGridConf, sections,
        cubeImages, cubeColors, playerSprite, hammerSprite,
        socialMediaButtons, langs, flags};
